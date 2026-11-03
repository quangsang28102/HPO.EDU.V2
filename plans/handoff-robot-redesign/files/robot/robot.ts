import * as THREE from 'three';
import { EyeMotion } from './eye-motion';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { HIEPPHAT_CHEST_LOGO } from './hiepphat-chest-logo-data-uri';

export type Expression = 'happy' | 'neutral' | 'thinking';

/** Friendly procedural model in Hiệp Phát colours. Public methods can be called by a future chat controller. */
export class Robot {
  readonly group = new THREE.Group();
  readonly head = new THREE.Group();
  readonly torso = new THREE.Group();
  readonly arms = [new THREE.Group(), new THREE.Group()];
  readonly elbows = [new THREE.Group(), new THREE.Group()];
  readonly wrists = [new THREE.Group(), new THREE.Group()];
  readonly legs = [new THREE.Group(), new THREE.Group()];
  private eyes: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>[] = [];
  private eyeMotion = new EyeMotion();
  private mouth!: THREE.Mesh;
  private antennaTip!: THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>;
  private expression: Expression = 'happy';
  private waveTime = -1;
  // Glossy porcelain shell + Hiệp Phát blue accents; no dark metal so the robot reads soft and friendly.
  private white = new THREE.MeshPhysicalMaterial({ color: '#f8fbff', metalness: 0, roughness: .3, clearcoat: 1, clearcoatRoughness: .12 });
  private blue = new THREE.MeshPhysicalMaterial({ color: '#1652ff', metalness: .05, roughness: .28, clearcoat: .8, clearcoatRoughness: .2 });
  private joint = new THREE.MeshStandardMaterial({ color: '#c7d5ec', metalness: .1, roughness: .45 });
  private glow = new THREE.MeshStandardMaterial({ color: '#9fe9ff', emissive: '#4fd2ff', emissiveIntensity: 1.6, toneMapped: false });

  constructor() {
    const box = (parent: THREE.Object3D, size: number[], pos: number[], mat: THREE.Material = this.white, radius = .1) => {
      const mesh = new THREE.Mesh(new RoundedBoxGeometry(size[0], size[1], size[2], 5, radius), mat);
      mesh.position.set(pos[0], pos[1], pos[2]); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
    };
    const sphere = (parent: THREE.Object3D, radius: number, pos: number[], mat: THREE.Material = this.joint) => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 20), mat);
      mesh.position.set(pos[0], pos[1], pos[2]); mesh.castShadow = true; parent.add(mesh); return mesh;
    };
    const cylinder = (parent: THREE.Object3D, radius: number, depth: number, pos: number[], mat: THREE.Material = this.joint) => {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, depth, 40), mat);
      mesh.position.set(pos[0], pos[1], pos[2]); mesh.castShadow = true; parent.add(mesh); return mesh;
    };
    /** Vertical capsule centred at pos; length is the straight part between the caps. */
    const capsule = (parent: THREE.Object3D, radius: number, length: number, pos: number[], mat: THREE.Material = this.white) => {
      const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(radius, length, 8, 24), mat);
      mesh.position.set(pos[0], pos[1], pos[2]); mesh.castShadow = true; parent.add(mesh); return mesh;
    };
    this.group.add(this.head, this.torso, ...this.arms, ...this.legs);
    this.group.scale.z = 1.18;
    this.torso.scale.z = 1.2;

    // ---- Head: big rounded helmet (≈42% of height) keeps the cute proportion ----
    this.head.position.y = 3.51;
    const shellGeometry = new THREE.SphereGeometry(1, 64, 40);
    const shellPositions = shellGeometry.attributes.position;
    const rounded = (value: number) => Math.sign(value) * Math.abs(value) ** (2 / 2.4);
    for (let i = 0; i < shellPositions.count; i++) {
      shellPositions.setXYZ(i, rounded(shellPositions.getX(i)), .91 * rounded(shellPositions.getY(i)), .84 * rounded(shellPositions.getZ(i)));
    }
    shellGeometry.computeVertexNormals();
    const helmet = new THREE.Mesh(shellGeometry, this.white); this.head.add(helmet);
    helmet.castShadow = true;
    // Thin curved patches follow the helmet surface: no stacked protruding boxes.
    const faceZ = (x: number, y: number) => .84 * Math.max(0, 1 - Math.abs(x) ** 2.4 - Math.abs(y / .91) ** 2.4) ** (1 / 2.4);
    const facePatch = (width: number, height: number, lift: number, material: THREE.Material, centerY = -.07, centerX = 0) => {
      const vertices: number[] = [centerX, centerY, faceZ(centerX, centerY) + lift];
      const indices: number[] = [];
      const segments = 64, rings = 12;
      for (let r = 1; r <= rings; r++) for (let i = 0; i < segments; i++) {
        const angle = i / segments * Math.PI * 2;
        const x = centerX + width * .5 * r / rings * Math.sign(Math.cos(angle)) * Math.abs(Math.cos(angle)) ** .5;
        const y = height * .5 * r / rings * Math.sign(Math.sin(angle)) * Math.abs(Math.sin(angle)) ** .5 + centerY;
        vertices.push(x, y, faceZ(x, y) + lift);
        const current = 1 + (r - 1) * segments + i, next = 1 + (r - 1) * segments + (i + 1) % segments;
        if (r === 1) indices.push(0, current, next);
        else { const previous = current - segments, previousNext = next - segments; indices.push(previous, current, next, previous, next, previousNext); }
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geometry.setIndex(indices); geometry.computeVertexNormals();
      const mesh = new THREE.Mesh(geometry, material); this.head.add(mesh); return mesh;
    };
    facePatch(1.6, 1.22, .008, this.blue);  // thin blue bezel around the screen
    const visor = new THREE.MeshPhysicalMaterial({ color: '#0a1633', metalness: .1, roughness: .18, clearcoat: 1, clearcoatRoughness: .05 });
    facePatch(1.5, 1.12, .014, visor);

    for (const side of [-1, 1]) {
      // Glowing LED eyes; the shader closes vertically on the curved face without moving the eye width.
      const eyeX = side * .31, eyeY = .05;
      const geometry = new THREE.PlaneGeometry(2.4, 2.4, 24, 24);
      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i) * .14, y = positions.getY(i) * .2;
        positions.setXYZ(i, x, y, faceZ(eyeX + x, eyeY + y) - faceZ(eyeX, eyeY) + .024);
      }
      geometry.computeVertexNormals();
      const eyeMaterial = new THREE.ShaderMaterial({
        toneMapped: false, transparent: true, depthWrite: false,
        uniforms: {
          closure: { value: 0 },
          gaze: { value: this.eyeMotion.gaze },
          core: { value: new THREE.Color('#e9fbff') },
          led: { value: new THREE.Color('#47c8ff') },
          deep: { value: new THREE.Color('#1f6bff') },
        },
        vertexShader: `varying vec2 eyeUv; void main(){ eyeUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
        fragmentShader: `
          varying vec2 eyeUv;
          uniform float closure;
          uniform vec2 gaze;
          uniform vec3 core, led, deep;
          void main(){
            // The whole LED shape drifts with the gaze, like an expressive screen face.
            vec2 p=(eyeUv*2.0-1.0)*1.2-gaze*.9;
            float height=mix(1.0,.08,closure);
            float curve=closure*.18*(1.0-p.x*p.x);
            vec2 shape=vec2(p.x,(p.y+curve)/height);
            float edge=length(shape);
            float aa=max(fwidth(edge),.002);
            float fill=1.0-smoothstep(1.0-aa,1.0+aa,edge);
            // Bright core fading to saturated blue at the rim, brighter at the top.
            vec3 color=mix(core,led,smoothstep(.15,.75,edge));
            color=mix(color,deep,smoothstep(.75,1.0,edge)*.8+(-p.y*.12));
            float glint=1.0-smoothstep(.13,.19,length((p-vec2(-.28,.38))*vec2(1.0,1.2)));
            float smallGlint=1.0-smoothstep(.05,.08,length(p-vec2(.2,.6)));
            color=mix(color,vec3(1.0),max(glint,smallGlint)*(1.0-closure));
            // Soft halo instead of a bloom pass.
            float outside=max(0.0,edge-1.0)*height;
            float halo=exp(-pow(outside/.09,2.0))*.45;
            halo*=1.0-smoothstep(1.05,1.18,abs(p.x));
            float alpha=max(fill,halo);
            color=mix(led,color,fill);
            if(alpha<.005) discard;
            gl_FragColor=vec4(color,alpha);
            #include <colorspace_fragment>
          }`,
      });
      const eye = new THREE.Mesh(geometry, eyeMaterial);
      eye.name = side < 0 ? 'eye-left' : 'eye-right';
      eye.position.set(eyeX, eyeY, faceZ(eyeX, eyeY));
      this.head.add(eye); this.eyes.push(eye);

      // Rosy cheeks glow faintly on the screen.
      const cheek = facePatch(.2, .085, .02, new THREE.MeshBasicMaterial({ color: '#ff8fb1', transparent: true, opacity: .55, toneMapped: false }), -.2, side * .5);
      cheek.renderOrder = 1;

      // Round blue ear pods with a white cap and a light strip.
      const ear = cylinder(this.head, .3, .16, [side * .96, -.04, -.04], this.blue); ear.rotation.z = Math.PI / 2;
      const cap = cylinder(this.head, .21, .1, [side * 1.05, -.04, -.04], this.white); cap.rotation.z = Math.PI / 2;
      const strip = cylinder(this.head, .09, .04, [side * 1.105, -.04, -.04], this.glow); strip.rotation.z = Math.PI / 2;
    }
    const smilePoints = [[-.17, -.25], [-.08, -.33], [.08, -.33], [.17, -.25]];
    const smile = new THREE.CatmullRomCurve3(smilePoints.map(([x, y]) => new THREE.Vector3(x, y, faceZ(x, y) + .026)));
    this.mouth = new THREE.Mesh(new THREE.TubeGeometry(smile, 32, .022, 10, false), this.glow); this.head.add(this.mouth);

    // Antenna with a softly pulsing light ball.
    cylinder(this.head, .13, .08, [0, .86, -.05], this.blue);
    cylinder(this.head, .035, .3, [0, 1.02, -.05], this.joint);
    this.antennaTip = sphere(this.head, .11, [0, 1.22, -.05], new THREE.MeshStandardMaterial({ color: '#7fd8ff', emissive: '#38b6ff', emissiveIntensity: 1.2, toneMapped: false })) as THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>;

    // ---- Torso: chubby rounded body with a blue belt and the Hiệp Phát badge ----
    this.torso.position.y = 2.04;
    cylinder(this.torso, .16, .32, [0, .56, 0], this.joint);
    box(this.torso, [1.02, .92, .7], [0, 0, 0], this.white, .33);
    box(this.torso, [.92, .14, .64], [0, -.33, 0], this.blue, .07);
    const badgeRing = cylinder(this.torso, .26, .04, [0, .08, .345], this.blue); badgeRing.rotation.x = Math.PI / 2;
    // Unlit + no tone mapping so the logo keeps its exact brand colours.
    const logoMaterial = new THREE.MeshBasicMaterial({ color: '#2b26fb', toneMapped: false });
    if (typeof document !== 'undefined') {
      // Browser only: tests run in Node without an Image implementation.
      new THREE.TextureLoader().load(HIEPPHAT_CHEST_LOGO, texture => {
        texture.colorSpace = THREE.SRGBColorSpace;
        logoMaterial.map = texture; logoMaterial.color.set('#ffffff'); logoMaterial.needsUpdate = true;
      });
    }
    const logo = new THREE.Mesh(new THREE.CircleGeometry(.215, 48), logoMaterial);
    logo.position.set(0, .08, .367); this.torso.add(logo);
    for (let i = 0; i < 3; i++) sphere(this.torso, .028, [(i - 1) * .1, -.2, .34], i === 1 ? this.glow : this.joint);

    // Waist and hips.
    cylinder(this.group, .26, .22, [0, 1.46, 0], this.joint);
    box(this.group, [.8, .32, .72], [0, 1.3, 0], this.white, .15);

    // Soft ball joints instead of layered dark hinges.
    const hinge = (parent: THREE.Object3D, radius: number, y: number, z = 0, mat: THREE.Material = this.joint) => sphere(parent, radius, [0, y, z], mat);

    for (let i = 0; i < 2; i++) {
      const side = i === 0 ? -1 : 1;
      // ---- Arm: blue shoulder ball, white capsules, rounded mitten hand ----
      const arm = this.arms[i]; arm.position.set(side * .67, 2.32, 0); arm.rotation.z = side * .13;
      hinge(arm, .2, 0, 0, this.blue);
      capsule(arm, .15, .2, [0, -.29, 0]);
      const elbow = this.elbows[i]; elbow.position.y = -.56; arm.add(elbow);
      hinge(elbow, .12, 0);
      capsule(elbow, .155, .18, [0, -.25, .01]);
      box(elbow, [.2, .05, .03], [0, -.3, .16], this.blue, .015);
      const wrist = this.wrists[i]; wrist.position.y = -.505; elbow.add(wrist);
      sphere(wrist, .085, [0, 0, 0], this.joint);
      box(wrist, [.25, .2, .19], [0, -.14, .01], this.white, .09);
      // Palm faces local -Z; forearm supination presents it during the greeting.
      const palm = box(wrist, [.17, .13, .025], [0, -.14, -.09], this.blue, .025);
      palm.name = 'palm';
      for (let f = 0; f < 3; f++) {
        const x = (f - 1) * .072;
        capsule(wrist, .036, .1, [x, -.29, .0]);
      }
      const thumb = capsule(wrist, .045, .08, [-side * .15, -.16, .07]); thumb.rotation.z = -side * .55;

      // ---- Leg: chubby capsules, blue knee, rounded boot with blue sole ----
      const leg = this.legs[i]; leg.position.set(side * .265, 1.18, 0);
      hinge(leg, .16, 0);
      capsule(leg, .19, .1, [0, -.25, 0]);
      hinge(leg, .15, -.48, .02, this.blue);
      capsule(leg, .2, .16, [side * .02, -.72, 0]);
      box(leg, [.5, .26, .7], [side * .03, -1.0, .12], this.white, .12);
      box(leg, [.5, .08, .7], [side * .03, -1.12, .12], this.blue, .035);
    }
  }

  get isWaving() { return this.waveTime >= 0; }
  wave() { if (this.isWaving) return false; this.waveTime = 0; return true; }
  setGreetingPose(amount: number, time = 0, elbowAmount = amount) {
    // Raise, settle, two gentle forearm sweeps, then lower. The wrist stays locked.
    const swayWindow = THREE.MathUtils.smootherstep(time, .95, 1.2) * (1 - THREE.MathUtils.smootherstep(time, 2.4, 2.65));
    const sway = Math.sin((time - .95) * Math.PI * 2 * 1.15) * swayWindow;
    this.arms[1].rotation.set(-amount * .24, 0, .13 + amount * (.98 + sway * .035));
    // Bend first, then roll around the forearm's own axis; no wrist rotation.
    this.elbows[1].rotation.set(-elbowAmount * .08, elbowAmount * Math.PI, elbowAmount * (1.57 + sway * .25), 'ZXY');
    this.wrists[1].rotation.set(0, 0, 0);
  }
  setBlink(closure: number) {
    const amount = THREE.MathUtils.clamp(closure, 0, 1);
    this.eyes.forEach(eye => { eye.material.uniforms.closure.value = amount; });
  }
  get blinkProgress() { return this.eyes[0].material.uniforms.closure.value as number; }
  setExpression(expression: Expression) { this.expression = expression; this.mouth.visible = expression !== 'thinking'; this.mouth.scale.y = expression === 'neutral' ? .35 : 1; }
  resetPose() { this.eyeMotion.reset(); this.setBlink(0); this.waveTime = -1; this.group.position.y = 0; this.group.rotation.set(0, 0, 0); this.legs.forEach(leg => leg.rotation.set(0, 0, 0)); this.head.rotation.set(0, 0, 0); this.arms.forEach((arm, i) => arm.rotation.set(0, 0, i === 0 ? -.13 : .13)); this.elbows.forEach(joint => joint.rotation.set(0, 0, 0)); this.wrists.forEach(joint => joint.rotation.set(0, 0, 0)); this.setExpression('happy'); }
  update(dt: number, time: number, pointer: THREE.Vector2, reducedMotion: boolean, walking = false) {
    const smooth = 1 - Math.exp(-dt * 5);
    this.group.position.y = reducedMotion ? 0 : Math.sin(time * 1.8) * .025;
    this.head.rotation.y = THREE.MathUtils.lerp(this.head.rotation.y, reducedMotion ? 0 : pointer.x * .16, smooth);
    this.head.rotation.x = THREE.MathUtils.lerp(this.head.rotation.x, reducedMotion ? 0 : -pointer.y * .09, smooth);
    // Small friendly head tilt while idle.
    this.head.rotation.z = reducedMotion ? 0 : Math.sin(time * .9) * .035;
    this.antennaTip.material.emissiveIntensity = reducedMotion ? 1.2 : 1 + Math.sin(time * 3) * .45;
    this.eyeMotion.update(dt, reducedMotion, pointer);
    this.setBlink(this.eyeMotion.blinkProgress);
    if (this.waveTime >= 0) {
      this.waveTime += dt;
      const t = this.waveTime;
      const envelope = THREE.MathUtils.smootherstep(t, 0, .85) * (1 - THREE.MathUtils.smootherstep(t, 2.65, 3.5));
      const elbowEnvelope = THREE.MathUtils.smootherstep(t, .12, 1.0) * (1 - THREE.MathUtils.smootherstep(t, 2.55, 3.4));
      this.setGreetingPose(envelope, t, elbowEnvelope);
      if (t >= 3.5) { this.waveTime = -1; this.setGreetingPose(0); }
    } else this.arms[1].rotation.z = .13 + (reducedMotion ? 0 : Math.sin(time * 1.8) * .025);
    this.arms[0].rotation.z = -.13 - (reducedMotion ? 0 : Math.sin(time * 1.8) * .025);
    const stride = walking && !reducedMotion ? Math.sin(time * 8) * .42 : 0;
    this.legs.forEach((leg, i) => leg.rotation.x = THREE.MathUtils.lerp(leg.rotation.x, i === 0 ? stride : -stride, smooth));
    this.arms[0].rotation.x = THREE.MathUtils.lerp(this.arms[0].rotation.x, -stride * .75, smooth);
    if (!this.isWaving) this.arms[1].rotation.x = THREE.MathUtils.lerp(this.arms[1].rotation.x, stride * .75, smooth);
    if (walking && !reducedMotion) this.group.position.y = Math.abs(Math.sin(time * 8)) * .055;
  }
}
