import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Robot } from './robot';

export const fallback = `<svg class="hpo-robot-fallback" viewBox="0 0 140 200" aria-hidden="true"><g fill="#f8fbff" stroke="#c7d5ec" stroke-width="3"><rect x="40" y="98" width="60" height="52" rx="22"/><rect x="18" y="20" width="104" height="80" rx="34"/><path d="M50 152v30m40-30v30M36 110l-12 34m92-34 12 34" stroke="#f8fbff" stroke-width="16" stroke-linecap="round"/></g><rect x="27" y="30" width="86" height="60" rx="24" fill="#0a1633" stroke="#2f63f5" stroke-width="3"/><g fill="#47c8ff"><ellipse cx="53" cy="56" rx="8" ry="11"/><ellipse cx="87" cy="56" rx="8" ry="11"/></g><g fill="#ff8fb1" opacity=".6"><ellipse cx="43" cy="72" rx="6" ry="3"/><ellipse cx="97" cy="72" rx="6" ry="3"/></g><path d="M60 74q10 8 20 0" fill="none" stroke="#9fe9ff" stroke-width="4" stroke-linecap="round"/><path d="M70 20V8" stroke="#c7d5ec" stroke-width="3"/><circle cx="70" cy="7" r="5" fill="#47c8ff"/><circle cx="70" cy="120" r="12" fill="#2f63f5"/><rect x="40" y="136" width="60" height="8" rx="4" fill="#2f63f5"/></svg>`;

/** A stage owns its GPU resources and resize/context listeners. */
export class RobotStage {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(35, 1, .1, 60);
  readonly robot: Robot;
  lost = false;
  onRestore = () => {};
  private observer: ResizeObserver;
  private events = new AbortController();
  private shadow: THREE.Mesh;
  private environment: THREE.Texture;

  constructor(readonly host: HTMLElement) {
    host.innerHTML = `${fallback}<canvas aria-hidden="true"></canvas>`;
    const canvas = host.querySelector('canvas')!;
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    // Neutral tone mapping keeps the brand blue from drifting to lavender.
    this.renderer.toneMapping = THREE.NeutralToneMapping;
    this.renderer.toneMappingExposure = .95;
    this.camera.position.set(0, 2.25, 10);
    this.camera.lookAt(0, 1.95, 0);
    this.robot = new Robot();
    // Soft ground contact shadow stays on the floor while the body bobs and turns.
    const shadowMaterial = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { strength: { value: .4 } },
      vertexShader: `varying vec2 shadowUv; void main() { shadowUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `varying vec2 shadowUv; uniform float strength; void main() { float r=length((shadowUv-.5)*2.0); float alpha=pow(1.0-smoothstep(0.0,1.0,r),1.3)*strength; gl_FragColor=vec4(.06,.11,.25,alpha); }`,
    });
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(2.55,1.85),shadowMaterial);
    this.shadow.rotation.x=-Math.PI/2;
    this.shadow.position.set(.10,-.015,.10);
    this.scene.add(this.shadow);
    // Soft studio reflections keep the glossy white shell white instead of grey.
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture;
    pmrem.dispose();
    this.scene.environment = this.environment;
    this.scene.environmentIntensity = .9;
    this.scene.add(this.robot.group, new THREE.HemisphereLight('#eef6ff', '#8a9bb5', 1.4));
    const key = new THREE.DirectionalLight('#fff6ea', 2.6);
    key.position.set(-3, 7, 5);
    const rim = new THREE.DirectionalLight('#8fbaff', 2.2);
    rim.position.set(4, 4, -3);
    this.scene.add(key, rim);
    this.observer = new ResizeObserver(() => this.resize());
    this.observer.observe(host);
    canvas.addEventListener('webglcontextlost', event => {
      event.preventDefault();
      this.lost = true;
      host.classList.remove('is-ready');
    }, { signal: this.events.signal });
    canvas.addEventListener('webglcontextrestored', () => {
      this.lost = false;
      this.resize();
      host.classList.add('is-ready');
      this.onRestore();
    }, { signal: this.events.signal });
    this.resize();
    host.classList.add('is-ready');
  }

  resize() {
    const width = this.host.clientWidth, height = this.host.clientHeight;
    if (!width || !height) return;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.render();
  }

  render() {
    const lift = Math.max(0,this.robot.group.position.y);
    this.shadow.scale.setScalar(1+lift*2);
    (this.shadow.material as THREE.ShaderMaterial).uniforms.strength.value=.4-lift*.6;
    if (!this.lost) this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.events.abort();
    this.observer.disconnect();
    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    this.scene.traverse(object => {
      if (object instanceof THREE.Mesh) {
        geometries.add(object.geometry);
        (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => materials.add(material));
      }
    });
    geometries.forEach(geometry => geometry.dispose());
    materials.forEach(material => {
      Object.values(material).forEach(value => { if (value instanceof THREE.Texture) value.dispose(); });
      material.dispose();
    });
    this.environment.dispose();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.host.classList.remove('is-ready');
    this.host.innerHTML = fallback;
  }
}
