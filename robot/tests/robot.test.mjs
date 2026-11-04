// Robot linh vật Hiệp Phát (mascot-robot.ts, kiểu 'brand') — robot đang dùng trên web (scene.ts).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
const result=await build({entryPoints:[fileURLToPath(new URL('../mascot-robot.ts',import.meta.url))],bundle:true,write:false,platform:'node',format:'esm'});
const {Robot}=await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
const step=(robot,from,to,reduced=false)=>{for(let i=from;i<to;i++)robot.update(1/60,i/60,{x:0,y:0},reduced);};

test('wave raises shoulder and elbow with a locked wrist, then returns to rest within 2.25 s',()=>{
 const robot=new Robot('brand');
 assert.equal(robot.elbows[1].parent,robot.arms[1]);
 assert.equal(robot.wrists[1].parent,robot.elbows[1]);
 assert.equal(robot.wave(),true);assert.equal(robot.wave(),false);
 step(robot,0,50);
 assert(robot.arms[1].rotation.z>1,'shoulder raised');
 assert(robot.elbows[1].rotation.z>1,'elbow bent');
 assert.deepEqual(robot.wrists[1].rotation.toArray().slice(0,3),[0,0,0]);
 step(robot,50,140);
 assert.equal(robot.isWaving,false,'wave finished by 2.25 s');
 assert(Math.abs(robot.elbows[1].rotation.z)<1e-6);
});

test('wave sweeps the forearm smoothly (several beats, no jumps)',()=>{
 const robot=new Robot('brand');robot.wave();
 let prevS=robot.arms[1].rotation.z, prevE=robot.elbows[1].rotation.z; const sweep=[];
 for(let i=0;i<140;i++){
  robot.update(1/60,i/60,{x:0,y:0},false);
  const s=robot.arms[1].rotation.z, e=robot.elbows[1].rotation.z;
  assert(Math.abs(s-prevS)<.08);assert(Math.abs(e-prevE)<.1);
  if(i>=35&&i<95)sweep.push(e);prevS=s;prevE=e;
 }
 assert(Math.max(...sweep)-Math.min(...sweep)>.3);
});

test('raised greeting presents the palm to the viewer',()=>{
 const robot=new Robot('brand');
 for(const t of [.7,1.0,1.3]){
  robot.setGreetingPose(1,t);robot.group.updateMatrixWorld(true);
  const palm=robot.wrists[1].getObjectByName('palm');
  const n=robot.group.position.clone().set(0,0,-1).transformDirection(palm.matrixWorld);
  assert(n.z>.8,'palm faces forward');
 }
});

test('resetPose returns to rest; reduced motion keeps the body still',()=>{
 const robot=new Robot('brand');robot.wave();step(robot,0,40);robot.resetPose();
 assert.equal(robot.isWaving,false);assert.equal(robot.elbows[1].rotation.z,0);assert.equal(robot.group.position.y,0);
 step(robot,0,60,true);assert.equal(robot.group.position.y,0);
});
