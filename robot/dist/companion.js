(()=>{var xh=Object.defineProperty;var yh=(i,t,e)=>t in i?xh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ut=(i,t,e)=>yh(i,typeof t!="symbol"?t+"":t,e);var zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ul=0,ba=1,Nl=2;var Ma=1,Fl=2,hn=3,_n=0,Ee=1,un=2,Sn=0,Jn=1,Sa=2,Ea=3,Ta=4,Ol=5,Un=100,Bl=101,zl=102,kl=103,Hl=104,Vl=200,Gl=201,Wl=202,Xl=203,lr=204,cr=205,Yl=206,ql=207,Zl=208,Kl=209,Jl=210,jl=211,Ql=212,$l=213,tc=214,Dr=0,Lr=1,Ur=2,jn=3,Nr=4,Fr=5,Or=6,Br=7,zr=0,ec=1,nc=2,En=0,ic=1,sc=2,rc=3,oc=4,ac=5,lc=6,kr=7;var wa=300,ni=301,ii=302,Hr=303,Vr=304,Is=306,hr=1e3,Ln=1001,ur=1002,Ne=1003,cc=1004;var Ds=1005;var tn=1006,Gr=1007;var Hn=1008;var nn=1009,Aa=1010,Ra=1011,zi=1012,Wr=1013,Vn=1014,sn=1015,ki=1016,Xr=1017,Yr=1018,Hi=1020,Ca=35902,Pa=35899,Ia=1021,Da=1022,Ze=1023,wi=1026,Vi=1027,qr=1028,Zr=1029,La=1030,Kr=1031;var Jr=1033,Ls=33776,Us=33777,Ns=33778,Fs=33779,jr=35840,Qr=35841,$r=35842,to=35843,eo=36196,no=37492,io=37496,so=37808,ro=37809,oo=37810,ao=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,xo=37820,yo=37821,vo=36492,_o=36494,bo=36495,Mo=36283,So=36284,Eo=36285,To=36286;var as=2300,dr=2301,or=2302,fa=2400,pa=2401,ma=2402;var hc=3200,uc=3201;var wo=0,dc=1,Tn="",Pe="srgb",Qn="srgb-linear",ls="linear",ee="srgb";var Kn=7680;var ga=519,fc=512,pc=513,mc=514,Ua=515,gc=516,xc=517,yc=518,vc=519,xa=35044;var Na="300 es",$e=2e3,cs=2001;var on=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=1234567,rs=Math.PI/180,Ai=180/Math.PI;function Gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function Fa(i,t){return(i%t+t)%t}function vh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function _h(i,t,e){return i!==t?(e-i)/(t-i):0}function os(i,t,e){return(1-e)*i+e*t}function bh(i,t,e,n){return os(i,t,1-Math.exp(-e*n))}function Mh(i,t=1){return t-Math.abs(Fa(i,t*2)-t)}function Sh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Eh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Th(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wh(i,t){return i+Math.random()*(t-i)}function Ah(i){return i*(.5-Math.random())}function Rh(i){i!==void 0&&(ul=i);let t=ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ch(i){return i*rs}function Ph(i){return i*Ai}function Ih(i){return(i&i-1)===0&&i!==0}function Dh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qt={DEG2RAD:rs,RAD2DEG:Ai,generateUUID:Gi,clamp:Gt,euclideanModulo:Fa,mapLinear:vh,inverseLerp:_h,lerp:os,damp:bh,pingpong:Mh,smoothstep:Sh,smootherstep:Eh,randInt:Th,randFloat:wh,randFloatSpread:Ah,seededRandom:Rh,degToRad:Ch,radToDeg:Ph,isPowerOfTwo:Ih,ceilPowerOfTwo:Dh,floorPowerOfTwo:Lh,setQuaternionFromProperEuler:Uh,normalize:Ce,denormalize:Ei},vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(h!==y||c!==f||l!==p||u!==g){let m=1-o,d=c*f+l*p+u*g+h*y,S=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let A=Math.sqrt(E),T=Math.atan2(A,d*S);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}let M=o*S;if(c=c*m+f*M,l=l*m+p*M,u=u*m+g*M,h=h*m+y*M,m===1-o){let A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-o*p,t[e+2]=l*g+u*p+o*f-c*h,t[e+3]=u*g-o*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wo=new L,dl=new Ye,Bt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],y=s[0],m=s[3],d=s[6],S=s[1],E=s[4],M=s[7],A=s[2],T=s[5],R=s[8];return r[0]=a*y+o*S+c*A,r[3]=a*m+o*E+c*T,r[6]=a*d+o*M+c*R,r[1]=l*y+u*S+h*A,r[4]=l*m+u*E+h*T,r[7]=l*d+u*M+h*R,r[2]=f*y+p*S+g*A,r[5]=f*m+p*E+g*T,r[8]=f*d+p*M+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*r,p=l*r-a*c,g=e*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=h*y,t[1]=(s*l-u*n)*y,t[2]=(o*n-s*a)*y,t[3]=f*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xo.makeScale(t,e)),this}rotate(t){return this.premultiply(Xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xo=new Bt;function Oa(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ri(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _c(){let i=Ri("canvas");return i.style.display="block",i}var fl={};function Ci(i){i in fl||(fl[i]=!0,console.warn(i))}function bc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pl=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nh(){let i={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(s.r=vn(s.r),s.g=vn(s.g),s.b=vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tn?ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qn]:{primaries:t,whitePoint:n,transfer:ls,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var Zt=Nh();function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hi,fr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hi===void 0&&(hi=Ri("canvas")),hi.width=t.width,hi.height=t.height;let s=hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ri("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fh=0,Pi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yo(s[a].image)):r.push(Yo(s[a]))}else r=Yo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Oh=0,qo=new L,Se=class i extends on{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=tn,a=Hn,o=Ze,c=nn,l=i.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Gi(),this.name="",this.source=new Pi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qo).x}get height(){return this.source.getSize(qo).y}get depth(){return this.source.getSize(qo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hr:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case ur:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hr:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case ur:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=wa;Se.DEFAULT_ANISOTROPY=1;var te=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,M=(p+1)/2,A=(d+1)/2,T=(u+f)/4,R=(h+y)/4,D=(g+m)/4;return E>M&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=R/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=D/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-y)/S,this.z=(f-u)/S,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pr=class extends on{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Se(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Pi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends pr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},hs=class extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mr=class extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ln=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),Vs.subVectors(this.max,Qi),ui.subVectors(t.a,Qi),di.subVectors(t.b,Qi),fi.subVectors(t.c,Qi),wn.subVectors(di,ui),An.subVectors(fi,di),Xn.subVectors(ui,fi);let e=[0,-wn.z,wn.y,0,-An.z,An.y,0,-Xn.z,Xn.y,wn.z,0,-wn.x,An.z,0,-An.x,Xn.z,0,-Xn.x,-wn.y,wn.x,0,-An.y,An.x,0,-Xn.y,Xn.x,0];return!Zo(e,ui,di,fi,Vs)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,ui,di,fi,Vs))?!1:(Gs.crossVectors(wn,An),e=[Gs.x,Gs.y,Gs.z],Zo(e,ui,di,fi,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pn=[new L,new L,new L,new L,new L,new L,new L,new L],Je=new L,Hs=new ln,ui=new L,di=new L,fi=new L,wn=new L,An=new L,Xn=new L,Qi=new L,Vs=new L,Gs=new L,Yn=new L;function Zo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yn.fromArray(i,r);let o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),c=t.dot(Yn),l=e.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Bh=new ln,$i=new L,Ko=new L,Nn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);let e=$i.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(Ko)),this.expandByPoint($i.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},mn=new L,Jo=new L,Ws=new L,Rn=new L,jo=new L,Xs=new L,Qo=new L,Ii=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jo.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Jo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ws),o=Rn.dot(this.direction),c=-Rn.dot(Ws),l=Rn.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Jo).addScaledVector(Ws,f),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){jo.subVectors(e,t),Xs.subVectors(n,t),Qo.crossVectors(jo,Xs);let a=this.direction.dot(Qo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);let c=o*this.direction.dot(Xs.crossVectors(Rn,Xs));if(c<0)return null;let l=o*this.direction.dot(jo.cross(Rn));if(l<0||c+l>a)return null;let u=-o*Rn.dot(Qo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class i{constructor(t,e,n,s,r,a,o,c,l,u,h,f,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,f,p,g,y,m)}set(t,e,n,s,r,a,o,c,l,u,h,f,p,g,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*h,g=o*u,y=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-y*l,e[9]=-o*c,e[2]=y-f*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*u,p=c*h,g=l*u,y=l*h;e[0]=f+y*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=y+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*u,p=c*h,g=l*u,y=l*h;e[0]=f-y*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=y-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*u,p=a*h,g=o*u,y=o*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+y,e[1]=c*h,e[5]=y*l+f,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*u,e[4]=y-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-y*h}else if(t.order==="XZY"){let f=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+y,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zh,t,kh)}lookAt(t,e,n){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Cn.crossVectors(n,ze),Cn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Cn.crossVectors(n,ze)),Cn.normalize(),Ys.crossVectors(ze,Cn),s[0]=Cn.x,s[4]=Ys.x,s[8]=ze.x,s[1]=Cn.y,s[5]=Ys.y,s[9]=ze.y,s[2]=Cn.z,s[6]=Ys.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],y=n[6],m=n[10],d=n[14],S=n[3],E=n[7],M=n[11],A=n[15],T=s[0],R=s[4],D=s[8],b=s[12],v=s[1],C=s[5],U=s[9],B=s[13],k=s[2],Y=s[6],G=s[10],$=s[14],H=s[3],ot=s[7],lt=s[11],gt=s[15];return r[0]=a*T+o*v+c*k+l*H,r[4]=a*R+o*C+c*Y+l*ot,r[8]=a*D+o*U+c*G+l*lt,r[12]=a*b+o*B+c*$+l*gt,r[1]=u*T+h*v+f*k+p*H,r[5]=u*R+h*C+f*Y+p*ot,r[9]=u*D+h*U+f*G+p*lt,r[13]=u*b+h*B+f*$+p*gt,r[2]=g*T+y*v+m*k+d*H,r[6]=g*R+y*C+m*Y+d*ot,r[10]=g*D+y*U+m*G+d*lt,r[14]=g*b+y*B+m*$+d*gt,r[3]=S*T+E*v+M*k+A*H,r[7]=S*R+E*C+M*Y+A*ot,r[11]=S*D+E*U+M*G+A*lt,r[15]=S*b+E*B+M*$+A*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],y=t[7],m=t[11],d=t[15];return g*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*p-n*c*p)+y*(+e*c*p-e*l*f+r*a*f-s*a*p+s*l*u-r*c*u)+m*(+e*l*h-e*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+d*(-s*o*u-e*c*h+e*o*f+s*a*h-n*a*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],y=t[13],m=t[14],d=t[15],S=h*m*l-y*f*l+y*c*p-o*m*p-h*c*d+o*f*d,E=g*f*l-u*m*l-g*c*p+a*m*p+u*c*d-a*f*d,M=u*y*l-g*h*l+g*o*p-a*y*p-u*o*d+a*h*d,A=g*h*c-u*y*c-g*o*f+a*y*f+u*o*m-a*h*m,T=e*S+n*E+s*M+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=S*R,t[1]=(y*f*r-h*m*r-y*s*p+n*m*p+h*s*d-n*f*d)*R,t[2]=(o*m*r-y*c*r+y*s*l-n*m*l-o*s*d+n*c*d)*R,t[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*p-n*c*p)*R,t[4]=E*R,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*R,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*d-e*c*d)*R,t[7]=(a*f*r-u*c*r+u*s*l-e*f*l-a*s*p+e*c*p)*R,t[8]=M*R,t[9]=(g*h*r-u*y*r-g*n*p+e*y*p+u*n*d-e*h*d)*R,t[10]=(a*y*r-g*o*r+g*n*l-e*y*l-a*n*d+e*o*d)*R,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*p-e*o*p)*R,t[12]=A*R,t[13]=(u*y*s-g*h*s+g*n*f-e*y*f-u*n*m+e*h*m)*R,t[14]=(g*o*s-a*y*s-g*n*c+e*y*c+a*n*m-e*o*m)*R,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*f+e*o*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,f=r*l,p=r*u,g=r*h,y=a*u,m=a*h,d=o*h,S=c*l,E=c*u,M=c*h,A=n.x,T=n.y,R=n.z;return s[0]=(1-(y+d))*A,s[1]=(p+M)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+d))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+E)*R,s[9]=(m-S)*R,s[10]=(1-(f+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=pi.set(s[0],s[1],s[2]).length(),a=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);let l=1/r,u=1/a,h=1/o;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=h,je.elements[9]*=h,je.elements[10]*=h,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=$e,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===$e)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===cs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=$e,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===$e)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===cs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pi=new L,je=new he,zh=new L(0,0,0),kh=new L(1,1,1),Cn=new L,Ys=new L,ze=new L,gl=new he,xl=new Ye,qe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xl.setFromEuler(this),this.setFromQuaternion(xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qe.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hh=0,yl=new L,mi=new Ye,gn=new he,qs=new L,ts=new L,Vh=new L,Gh=new Ye,vl=new L(1,0,0),_l=new L(0,1,0),bl=new L(0,0,1),Ml={type:"added"},Wh={type:"removed"},gi={type:"childadded",child:null},$o={type:"childremoved",child:null},be=class i extends on{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new qe,n=new Ye,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Bt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(vl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(bl,t)}translateOnAxis(t,e){return yl.copy(t).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ts,qs,this.up):gn.lookAt(qs,ts,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(gn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ml),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wh),$o.child=t,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ml),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Gh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new L(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=new L,xn=new L,ta=new L,yn=new L,xi=new L,yi=new L,Sl=new L,ea=new L,na=new L,ia=new L,sa=new te,ra=new te,oa=new te,Dn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),xn.subVectors(n,e),ta.subVectors(t,e);let a=Qe.dot(Qe),o=Qe.dot(xn),c=Qe.dot(ta),l=xn.dot(xn),u=xn.dot(ta),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yn.x),c.addScaledVector(a,yn.y),c.addScaledVector(o,yn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return sa.setScalar(0),ra.setScalar(0),oa.setScalar(0),sa.fromBufferAttribute(t,e),ra.fromBufferAttribute(t,n),oa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(sa,r.x),a.addScaledVector(ra,r.y),a.addScaledVector(oa,r.z),a}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),xn.subVectors(t,e),Qe.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Qe.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;xi.subVectors(s,n),yi.subVectors(r,n),ea.subVectors(t,n);let c=xi.dot(ea),l=yi.dot(ea);if(c<=0&&l<=0)return e.copy(n);na.subVectors(t,s);let u=xi.dot(na),h=yi.dot(na);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(xi,a);ia.subVectors(t,r);let p=xi.dot(ia),g=yi.dot(ia);if(g>=0&&p<=g)return e.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(yi,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Sl.subVectors(r,s),o=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Sl,o);let d=1/(m+y+f);return a=y*d,o=f*d,e.copy(n).addScaledVector(xi,a).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Fa(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Zt.workingToColorSpace(we.copy(this),t),Math.round(Gt(we.r*255,0,255))*65536+Math.round(Gt(we.g*255,0,255))*256+Math.round(Gt(we.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(we.copy(this),e);let n=we.r,s=we.g,r=we.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Pe){Zt.workingToColorSpace(we.copy(this),t);let e=we.r,n=we.g,s=we.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Zs);let n=os(Pn.h,Zs.h,e),s=os(Pn.s,Zs.s,e),r=os(Pn.l,Zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new Ft;Ft.NAMES=Mc;var Xh=0,bn=class extends on{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Jn,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lr,this.blendDst=cr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ga,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lr&&(n.blendSrc=this.blendSrc),this.blendDst!==cr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ga&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$n=class extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new L,Ks=new vt,Yh=0,Ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xa,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ks.fromBufferAttribute(this,e),Ks.applyMatrix3(t),this.setXY(e,Ks.x,Ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xa&&(t.usage=this.usage),t}};var ds=class extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fs=class extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},qh=0,We=new he,la=new be,vi=new L,ke=new ln,es=new ln,_e=new L,Ie=class i extends on{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oa(t)?fs:ds)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return la.lookAt(t),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(ke.min,es.min),ke.expandByPoint(_e),_e.addVectors(ke.max,es.max),ke.expandByPoint(_e)):(ke.expandByPoint(es.min),ke.expandByPoint(es.max))}ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_e.fromBufferAttribute(o,l),c&&(vi.fromBufferAttribute(t,l),_e.add(vi)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new L,c[D]=new L;let l=new L,u=new L,h=new L,f=new vt,p=new vt,g=new vt,y=new L,m=new L;function d(D,b,v){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,v),u.sub(l),h.sub(l),p.sub(f),g.sub(f);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[D].add(y),o[b].add(y),o[v].add(y),c[D].add(m),c[b].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,b=S.length;D<b;++D){let v=S[D],C=v.start,U=v.count;for(let B=C,k=C+U;B<k;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new L,M=new L,A=new L,T=new L;function R(D){A.fromBufferAttribute(s,D),T.copy(A);let b=o[D];E.copy(b),E.sub(A.multiplyScalar(A.dot(b))).normalize(),M.crossVectors(T,b);let C=M.dot(c[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,C)}for(let D=0,b=S.length;D<b;++D){let v=S[D],C=v.start,U=v.count;for(let B=C,k=C+U;B<k;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,h=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new Ue(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},El=new he,qn=new Ii,Js=new Nn,Tl=new L,js=new L,Qs=new L,$s=new L,ca=new L,tr=new L,wl=new L,er=new L,Yt=class extends be{constructor(t=new Ie,e=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){tr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(ca.fromBufferAttribute(h,t),a?tr.addScaledVector(ca,u):tr.addScaledVector(ca.sub(e),u))}e.add(tr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(Js.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Js,Tl)===null||qn.origin.distanceToSquared(Tl)>(t.far-t.near)**2))&&(El.copy(r).invert(),qn.copy(t.ray).applyMatrix4(El),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,A=E;M<A;M+=3){let T=o.getX(M),R=o.getX(M+1),D=o.getX(M+2);s=nr(this,d,t,n,l,u,h,T,R,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let S=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=nr(this,a,t,n,l,u,h,S,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,A=E;M<A;M+=3){let T=M,R=M+1,D=M+2;s=nr(this,d,t,n,l,u,h,T,R,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let S=m,E=m+1,M=m+2;s=nr(this,a,t,n,l,u,h,S,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Zh(i,t,e,n,s,r,a,o){let c;if(t.side===Ee?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===_n,o),c===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(er);return l<e.near||l>e.far?null:{distance:l,point:er.clone(),object:i}}function nr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,js),i.getVertexPosition(c,Qs),i.getVertexPosition(l,$s);let u=Zh(i,t,e,n,js,Qs,$s,wl);if(u){let h=new L;Dn.getBarycoord(wl,js,Qs,$s,h),s&&(u.uv=Dn.getInterpolatedAttribute(s,o,c,l,h,new vt)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,o,c,l,h,new vt)),a&&(u.normal=Dn.getInterpolatedAttribute(a,o,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new L,materialIndex:0};Dn.getNormal(js,Qs,$s,f.normal),u.face=f,u.barycoord=h}return u}var cn=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(h,2));function g(y,m,d,S,E,M,A,T,R,D,b){let v=M/R,C=A/D,U=M/2,B=A/2,k=T/2,Y=R+1,G=D+1,$=0,H=0,ot=new L;for(let lt=0;lt<G;lt++){let gt=lt*C-B;for(let Nt=0;Nt<Y;Nt++){let Wt=Nt*v-U;ot[y]=Wt*S,ot[m]=gt*E,ot[d]=k,l.push(ot.x,ot.y,ot.z),ot[y]=0,ot[m]=0,ot[d]=T>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(Nt/R),h.push(1-lt/D),$+=1}}for(let lt=0;lt<D;lt++)for(let gt=0;gt<R;gt++){let Nt=f+gt+Y*lt,Wt=f+gt+Y*(lt+1),jt=f+(gt+1)+Y*(lt+1),Ht=f+(gt+1)+Y*lt;c.push(Nt,Wt,Ht),c.push(Wt,jt,Ht),H+=6}o.addGroup(p,H,b),p+=H,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function si(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ae(i){let t={};for(let e=0;e<i.length;e++){let n=si(i[e]);for(let s in n)t[s]=n[s]}return t}function Kh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ba(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Sc={clone:si,merge:Ae},Jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=si(t.uniforms),this.uniformsGroups=Kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ps=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=$e,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},In=new L,Al=new vt,Rl=new vt,Me=class extends ps{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ai*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Al,Rl),e.subVectors(Rl,Al)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_i=-90,bi=1,gr=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(_i,bi,t,e);s.layers=this.layers,this.add(s);let r=new Me(_i,bi,t,e);r.layers=this.layers,this.add(r);let a=new Me(_i,bi,t,e);a.layers=this.layers,this.add(a);let o=new Me(_i,bi,t,e);o.layers=this.layers,this.add(o);let c=new Me(_i,bi,t,e);c.layers=this.layers,this.add(c);let l=new Me(_i,bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===$e)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ms=class extends Se{constructor(t=[],e=ni,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xr=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ms(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cn(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:Sn});r.uniforms.tEquirect.value=e;let a=new Yt(s,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=tn),new gr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ge=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qh={type:"move"},Di=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ti=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var yr=class extends Se{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ne,u=Ne,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gs=class extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Mi=new he,Cl=new he,ir=[],Pl=new ln,$h=new he,ns=new Yt,is=new Nn,xs=class extends Yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$h)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),Pl.copy(t.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Pl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),is.copy(t.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),t.ray.intersectsSphere(is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mi),Cl.multiplyMatrices(n,Mi),ns.matrixWorld=Cl,ns.raycast(t,ir);for(let a=0,o=ir.length;a<o;a++){let c=ir[a];c.instanceId=r,c.object=this,e.push(c)}ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yr(new Float32Array(s*this.count),s,this.count,qr,sn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ha=new L,tu=new L,eu=new Bt,Xe=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ha.subVectors(n,e).cross(tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ha),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||eu.getNormalMatrix(t),s=this.coplanarPoint(ha).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zn=new Nn,nu=new vt(.5,.5),sr=new L,Li=class{constructor(t=new Xe,e=new Xe,n=new Xe,s=new Xe,r=new Xe,a=new Xe){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$e,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],y=r[9],m=r[10],d=r[11],S=r[12],E=r[13],M=r[14],A=r[15];if(s[0].setComponents(l-a,p-u,d-g,A-S).normalize(),s[1].setComponents(l+a,p+u,d+g,A+S).normalize(),s[2].setComponents(l+o,p+h,d+y,A+E).normalize(),s[3].setComponents(l-o,p-h,d-y,A-E).normalize(),n)s[4].setComponents(c,f,m,M).normalize(),s[5].setComponents(l-c,p-f,d-m,A-M).normalize();else if(s[4].setComponents(l-c,p-f,d-m,A-M).normalize(),e===$e)s[5].setComponents(l+c,p+f,d+m,A+M).normalize();else if(e===cs)s[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){Zn.center.set(0,0,0);let e=nu.distanceTo(t.center);return Zn.radius=.7071067811865476+e,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(sr.x=s.normal.x>0?t.max.x:t.min.x,sr.y=s.normal.y>0?t.max.y:t.min.y,sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ys=class extends Se{constructor(t,e,n=Vn,s,r,a,o=Ne,c=Ne,l,u=wi,h=1){if(u!==wi&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},vs=class extends Se{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_s=class i extends Ie{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],u=e/2,h=Math.PI/2*t,f=e,p=2*h+f,g=n*2+r,y=s+1,m=new L,d=new L;for(let S=0;S<=g;S++){let E=0,M=0,A=0,T=0;if(S<=n){let b=S/n,v=b*Math.PI/2;M=-u-t*Math.cos(v),A=t*Math.sin(v),T=-t*Math.cos(v),E=b*h}else if(S<=n+r){let b=(S-n)/r;M=-u+b*e,A=t,T=0,E=h+b*f}else{let b=(S-n-r)/n,v=b*Math.PI/2;M=u+t*Math.sin(v),A=t*Math.cos(v),T=t*Math.sin(v),E=h+f+b*h}let R=Math.max(0,Math.min(1,E/p)),D=0;S===0?D=.5/s:S===g&&(D=-.5/s);for(let b=0;b<=s;b++){let v=b/s,C=v*Math.PI*2,U=Math.sin(C),B=Math.cos(C);d.x=-A*B,d.y=M,d.z=A*U,o.push(d.x,d.y,d.z),m.set(-A*B,T,A*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(v+D,R)}if(S>0){let b=(S-1)*y;for(let v=0;v<s;v++){let C=b+v,U=b+v+1,B=S*y+v,k=S*y+v+1;a.push(C,U,B),a.push(U,k,B)}}}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},bs=class i extends Ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new L,u=new vt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ms=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,y=[],m=n/2,d=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new oe(h,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(p,2));function S(){let M=new L,A=new L,T=0,R=(e-t)/n;for(let D=0;D<=r;D++){let b=[],v=D/r,C=v*(e-t)+t;for(let U=0;U<=s;U++){let B=U/s,k=B*c+o,Y=Math.sin(k),G=Math.cos(k);A.x=C*Y,A.y=-v*n+m,A.z=C*G,h.push(A.x,A.y,A.z),M.set(Y,R,G).normalize(),f.push(M.x,M.y,M.z),p.push(B,1-v),b.push(g++)}y.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){let v=y[b][D],C=y[b+1][D],U=y[b+1][D+1],B=y[b][D+1];(t>0||b!==0)&&(u.push(v,C,B),T+=3),(e>0||b!==r-1)&&(u.push(C,U,B),T+=3)}l.addGroup(d,T,0),d+=T}function E(M){let A=g,T=new vt,R=new L,D=0,b=M===!0?t:e,v=M===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),g++;let C=g;for(let U=0;U<=s;U++){let k=U/s*c+o,Y=Math.cos(k),G=Math.sin(k);R.x=b*G,R.y=m*v,R.z=b*Y,h.push(R.x,R.y,R.z),f.push(0,v,0),T.x=Y*.5+.5,T.y=G*.5*v+.5,p.push(T.x,T.y),g++}for(let U=0;U<s;U++){let B=A+U,k=C+U;M===!0?u.push(k,k+1,B):u.push(k+1,k,B),D+=3}l.addGroup(d,D,M===!0?1:2),d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Mn=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,f=e/c,p=[],g=[],y=[],m=[];for(let d=0;d<u;d++){let S=d*f-a;for(let E=0;E<l;E++){let M=E*h-r;g.push(M,-S,0),y.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){let E=S+l*d,M=S+l*(d+1),A=S+1+l*(d+1),T=S+1+l*d;p.push(E,M,T),p.push(M,A,T)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ui=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new L,f=new L,p=[],g=[],y=[],m=[];for(let d=0;d<=n;d++){let S=[],E=d/n,M=0;d===0&&a===0?M=.5/e:d===n&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){let T=A/e;h.x=-t*Math.cos(s+T*r)*Math.sin(a+E*o),h.y=t*Math.cos(a+E*o),h.z=t*Math.sin(s+T*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(T+M,1-E),S.push(l++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){let E=u[d][S+1],M=u[d][S],A=u[d+1][S],T=u[d+1][S+1];(d!==0||a>0)&&p.push(E,M,T),(d!==n-1||c<Math.PI)&&p.push(M,A,T)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ss=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],u=new L,h=new L,f=new L;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(y),h.y=(t+e*Math.cos(m))*Math.sin(y),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,S=(s+1)*p+g;a.push(y,m,S),a.push(m,d,S)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var en=class extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Fn=class extends en{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Es=class extends bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vr=class extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_r=class extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function iu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},br=class extends ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fa,endingEnd:fa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pa:r=t,o=2*e-n;break;case ma:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case pa:a=t,c=2*n-e;break;case ma:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,d=-f*m+2*f*y-f*g,S=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*y+.5*g,M=p*m-p*y;for(let A=0;A!==o;++A)r[A]=d*a[u+A]+S*a[l+A]+E*a[c+A]+M*a[h+A];return r}},Mr=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}},Sr=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},He=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rr(e,this.TimeBufferType),this.values=rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rr(t.times,Array),values:rr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new br(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case as:e=this.InterpolantFactoryMethodDiscrete;break;case dr:e=this.InterpolantFactoryMethodLinear;break;case or:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return as;case this.InterpolantFactoryMethodLinear:return dr;case this.InterpolantFactoryMethodSmooth:return or}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&iu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===or,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let y=e[h+g];if(y!==e[f+g]||y!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};He.prototype.ValueTypeName="";He.prototype.TimeBufferType=Float32Array;He.prototype.ValueBufferType=Float32Array;He.prototype.DefaultInterpolation=dr;var On=class extends He{constructor(t,e,n){super(t,e,n)}};On.prototype.ValueTypeName="bool";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=as;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var Er=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};Er.prototype.ValueTypeName="color";var Tr=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};Tr.prototype.ValueTypeName="number";var wr=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)Ye.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ts=class extends He{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new wr(this.times,this.values,this.getValueSize(),t)}};Ts.prototype.ValueTypeName="quaternion";Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Bn=class extends He{constructor(t,e,n){super(t,e,n)}};Bn.prototype.ValueTypeName="string";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=as;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ar=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};Ar.prototype.ValueTypeName="vector";var ar={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Rr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ec=new Rr,Ni=class{constructor(t){this.manager=t!==void 0?t:Ec,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var Si=new WeakMap,Cr=class extends Ni{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=ar.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let h=Si.get(a);h===void 0&&(h=[],Si.set(a,h)),h.push({onLoad:e,onError:s})}return a}let o=Ri("img");function c(){u(),e&&e(this);let h=Si.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}Si.delete(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),ar.remove(`image:${t}`);let f=Si.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(h)}Si.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ar.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var ws=class extends Ni{constructor(t){super(t)}load(t,e,n,s){let r=new Se,a=new Cr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Fi=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},As=class extends Fi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ua=new he,Il=new L,Dl=new L,Pr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Li,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ll=new he,ss=new L,da=new L,ya=class extends Pr{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(ss),da.copy(n.position),da.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(da),n.updateMatrixWorld(),s.makeTranslation(-ss.x,-ss.y,-ss.z),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll,n.coordinateSystem,n.reversedDepth)}},Rs=class extends Fi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ya}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Cs=class extends ps{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},va=class extends Pr{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends Fi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new va}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ir=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var za="\\[\\]\\.:\\/",su=new RegExp("["+za+"]","g"),ka="[^"+za+"]",ru="[^"+za.replace("\\.","")+"]",ou=/((?:WC+[\/:])*)/.source.replace("WC",ka),au=/(WCOD+)?/.source.replace("WCOD",ru),lu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ka),cu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ka),hu=new RegExp("^"+ou+au+lu+cu+"$"),uu=["material","materials","bones","map"],_a=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(su,"")}static parseTrackName(t){let e=hu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);uu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=_a;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cg=new Float32Array(1);var Bi=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ps=class extends on{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Ha(i,t,e,n){let s=du(n);switch(e){case Ia:return i*t;case qr:return i*t/s.components*s.byteLength;case Zr:return i*t/s.components*s.byteLength;case La:return i*t*2/s.components*s.byteLength;case Kr:return i*t*2/s.components*s.byteLength;case Da:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case Jr:return i*t*4/s.components*s.byteLength;case Ls:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qr:case to:return Math.max(i,16)*Math.max(t,8)/4;case jr:case $r:return Math.max(i,8)*Math.max(t,8)/2;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vo:case _o:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mo:case So:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Eo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function du(i){switch(i){case nn:case Aa:return{byteLength:1,components:1};case zi:case Ra:case ki:return{byteLength:2,components:1};case Xr:case Yr:return{byteLength:2,components:4};case Vn:case Wr:case sn:return{byteLength:4,components:1};case Ca:case Pa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Zc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pu(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let y=h[p];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var mu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Su=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Au=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ru=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ku=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$u=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ad=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ed=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Od=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$d=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ef=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ef=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Uf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ff=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Of=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:mu,alphahash_pars_fragment:gu,alphamap_fragment:xu,alphamap_pars_fragment:yu,alphatest_fragment:vu,alphatest_pars_fragment:_u,aomap_fragment:bu,aomap_pars_fragment:Mu,batching_pars_vertex:Su,batching_vertex:Eu,begin_vertex:Tu,beginnormal_vertex:wu,bsdfs:Au,iridescence_fragment:Ru,bumpmap_pars_fragment:Cu,clipping_planes_fragment:Pu,clipping_planes_pars_fragment:Iu,clipping_planes_pars_vertex:Du,clipping_planes_vertex:Lu,color_fragment:Uu,color_pars_fragment:Nu,color_pars_vertex:Fu,color_vertex:Ou,common:Bu,cube_uv_reflection_fragment:zu,defaultnormal_vertex:ku,displacementmap_pars_vertex:Hu,displacementmap_vertex:Vu,emissivemap_fragment:Gu,emissivemap_pars_fragment:Wu,colorspace_fragment:Xu,colorspace_pars_fragment:Yu,envmap_fragment:qu,envmap_common_pars_fragment:Zu,envmap_pars_fragment:Ku,envmap_pars_vertex:Ju,envmap_physical_pars_fragment:ad,envmap_vertex:ju,fog_vertex:Qu,fog_pars_vertex:$u,fog_fragment:td,fog_pars_fragment:ed,gradientmap_pars_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:sd,lights_lambert_pars_fragment:rd,lights_pars_begin:od,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:hd,lights_phong_pars_fragment:ud,lights_physical_fragment:dd,lights_physical_pars_fragment:fd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:gd,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:_d,map_fragment:bd,map_pars_fragment:Md,map_particle_fragment:Sd,map_particle_pars_fragment:Ed,metalnessmap_fragment:Td,metalnessmap_pars_fragment:wd,morphinstance_vertex:Ad,morphcolor_vertex:Rd,morphnormal_vertex:Cd,morphtarget_pars_vertex:Pd,morphtarget_vertex:Id,normal_fragment_begin:Dd,normal_fragment_maps:Ld,normal_pars_fragment:Ud,normal_pars_vertex:Nd,normal_vertex:Fd,normalmap_pars_fragment:Od,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:Hd,opaque_fragment:Vd,packing:Gd,premultiplied_alpha_fragment:Wd,project_vertex:Xd,dithering_fragment:Yd,dithering_pars_fragment:qd,roughnessmap_fragment:Zd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:$d,skinbase_vertex:tf,skinning_pars_vertex:ef,skinning_vertex:nf,skinnormal_vertex:sf,specularmap_fragment:rf,specularmap_pars_fragment:of,tonemapping_fragment:af,tonemapping_pars_fragment:lf,transmission_fragment:cf,transmission_pars_fragment:hf,uv_pars_fragment:uf,uv_pars_vertex:df,uv_vertex:ff,worldpos_vertex:pf,background_vert:mf,background_frag:gf,backgroundCube_vert:xf,backgroundCube_frag:yf,cube_vert:vf,cube_frag:_f,depth_vert:bf,depth_frag:Mf,distanceRGBA_vert:Sf,distanceRGBA_frag:Ef,equirect_vert:Tf,equirect_frag:wf,linedashed_vert:Af,linedashed_frag:Rf,meshbasic_vert:Cf,meshbasic_frag:Pf,meshlambert_vert:If,meshlambert_frag:Df,meshmatcap_vert:Lf,meshmatcap_frag:Uf,meshnormal_vert:Nf,meshnormal_frag:Ff,meshphong_vert:Of,meshphong_frag:Bf,meshphysical_vert:zf,meshphysical_frag:kf,meshtoon_vert:Hf,meshtoon_frag:Vf,points_vert:Gf,points_frag:Wf,shadow_vert:Xf,shadow_frag:Yf,sprite_vert:qf,sprite_frag:Zf},ct={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},dn={basic:{uniforms:Ae([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ae([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ae([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ae([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ae([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ae([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ae([ct.points,ct.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ae([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ae([ct.common,ct.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ae([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ae([ct.sprite,ct.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ae([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ae([ct.lights,ct.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};dn.physical={uniforms:Ae([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Ao={r:0,b:0,g:0},ri=new qe,Kf=new he;function Jf(i,t,e,n,s,r,a){let o=new Ft(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function y(E){let M=!1,A=g(E);A===null?d(o,c):A&&A.isColor&&(d(A,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,M){let A=g(M);A&&(A.isCubeTexture||A.mapping===Is)?(u===void 0&&(u=new Yt(new cn(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:si(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ri.copy(M.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(ri)),u.material.toneMapped=Zt.getTransfer(A.colorSpace)!==ee,(h!==A||f!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Yt(new Mn(2,2),new De({name:"BackgroundMaterial",uniforms:si(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(A.colorSpace)!==ee,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,M){E.getRGB(Ao,Ba(i)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,M,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),c=M,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(o,c)},render:y,addToRenderList:m,dispose:S}}function jf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(v,C,U,B,k){let Y=!1,G=h(B,U,C);r!==G&&(r=G,l(r.object)),Y=p(v,B,U,k),Y&&g(v,B,U,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(v,C,U,B),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,C,U){let B=U.wireframe===!0,k=n[v.id];k===void 0&&(k={},n[v.id]=k);let Y=k[C.id];Y===void 0&&(Y={},k[C.id]=Y);let G=Y[B];return G===void 0&&(G=f(c()),Y[B]=G),G}function f(v){let C=[],U=[],B=[];for(let k=0;k<e;k++)C[k]=0,U[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,C,U,B){let k=r.attributes,Y=C.attributes,G=0,$=U.getAttributes();for(let H in $)if($[H].location>=0){let lt=k[H],gt=Y[H];if(gt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor)),lt===void 0||lt.attribute!==gt||gt&&lt.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(v,C,U,B){let k={},Y=C.attributes,G=0,$=U.getAttributes();for(let H in $)if($[H].location>=0){let lt=Y[H];lt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor));let gt={};gt.attribute=lt,lt&&lt.data&&(gt.data=lt.data),k[H]=gt,G++}r.attributes=k,r.attributesNum=G,r.index=B}function y(){let v=r.newAttributes;for(let C=0,U=v.length;C<U;C++)v[C]=0}function m(v){d(v,0)}function d(v,C){let U=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;U[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),k[v]!==C&&(i.vertexAttribDivisor(v,C),k[v]=C)}function S(){let v=r.newAttributes,C=r.enabledAttributes;for(let U=0,B=C.length;U<B;U++)C[U]!==v[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function E(v,C,U,B,k,Y,G){G===!0?i.vertexAttribIPointer(v,C,U,k,Y):i.vertexAttribPointer(v,C,U,B,k,Y)}function M(v,C,U,B){y();let k=B.attributes,Y=U.getAttributes(),G=C.defaultAttributeValues;for(let $ in Y){let H=Y[$];if(H.location>=0){let ot=k[$];if(ot===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),ot!==void 0){let lt=ot.normalized,gt=ot.itemSize,Nt=t.get(ot);if(Nt===void 0)continue;let Wt=Nt.buffer,jt=Nt.type,Ht=Nt.bytesPerElement,Z=jt===i.INT||jt===i.UNSIGNED_INT||ot.gpuType===Wr;if(ot.isInterleavedBufferAttribute){let J=ot.data,ft=J.stride,Et=ot.offset;if(J.isInstancedInterleavedBuffer){for(let _t=0;_t<H.locationSize;_t++)d(H.location+_t,J.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let _t=0;_t<H.locationSize;_t++)m(H.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let _t=0;_t<H.locationSize;_t++)E(H.location+_t,gt/H.locationSize,jt,lt,ft*Ht,(Et+gt/H.locationSize*_t)*Ht,Z)}else{if(ot.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)d(H.location+J,ot.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let J=0;J<H.locationSize;J++)m(H.location+J);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let J=0;J<H.locationSize;J++)E(H.location+J,gt/H.locationSize,jt,lt,gt*Ht,gt/H.locationSize*J*Ht,Z)}}else if(G!==void 0){let lt=G[$];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(H.location,lt);break;case 3:i.vertexAttrib3fv(H.location,lt);break;case 4:i.vertexAttrib4fv(H.location,lt);break;default:i.vertexAttrib1fv(H.location,lt)}}}}S()}function A(){D();for(let v in n){let C=n[v];for(let U in C){let B=C[U];for(let k in B)u(B[k].object),delete B[k];delete C[U]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let C=n[v.id];for(let U in C){let B=C[U];for(let k in B)u(B[k].object),delete B[k];delete C[U]}delete n[v.id]}function R(v){for(let C in n){let U=n[C];if(U[v.id]===void 0)continue;let B=U[v.id];for(let k in B)u(B[k].object),delete B[k];delete U[v.id]}}function D(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function Qf(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,f){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*f[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $f(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ze&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let D=R===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==sn&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:A,maxSamples:T}}function tp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Xe,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let S=r?0:n,E=S*4,M=d.clippingState||null;c.value=M,M=u(g,f,E,p);for(let A=0;A!==E;++A)M[A]=e[A];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let d=p+y*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,M=p;E!==y;++E,M+=4)a.copy(h[E]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function ep(i){let t=new WeakMap;function e(a,o){return o===Hr?a.mapping=ni:o===Vr&&(a.mapping=ii),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Hr||o===Vr)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new xr(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xi=4,Tc=[.125,.215,.35,.446,.526,.582],li=20,Va=new Cs,wc=new Ft,Ga=null,Wa=0,Xa=0,Ya=!1,ai=(1+Math.sqrt(5))/2,Wi=1/ai,Ac=[new L(-ai,Wi,0),new L(ai,Wi,0),new L(-Wi,0,ai),new L(Wi,0,ai),new L(0,ai,-Wi),new L(0,ai,Wi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],np=new L,qi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=np}=r;Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,Wa,Xa),this._renderer.xr.enabled=Ya,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ni||t.mapping===ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ki,format:Ze,colorSpace:Qn,depthBuffer:!1},s=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(r)),this._blurMaterial=sp(r,t,e)}return s}_compileMaterial(t){let e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,Va)}_sceneToCubeUV(t,e,n,s,r){let c=new Me(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(wc),h.toneMapping=En,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let y=new $n({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),m=new Yt(new cn,y),d=!1,S=t.background;S?S.isColor&&(y.color.copy(S),t.background=null,d=!0):(y.color.copy(wc),d=!0);for(let E=0;E<6;E++){let M=E%3;M===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):M===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));let A=this._cubeSize;Ro(s,M*A,E>2?A:0,A,A),h.setRenderTarget(s),d&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ni||t.mapping===ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ro(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Va)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ac[(s-r-1)%Ac.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Yt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);let d=[],S=0;for(let R=0;R<li;++R){let D=R/y,b=Math.exp(-D*D/2);d.push(b),R===0?S+=b:R<m&&(S+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let M=this._sizeLods[s],A=3*M*(s>E-Xi?s-E+Xi:0),T=4*(this._cubeSize-M);Ro(e,A,T,3*M,2*M),c.setRenderTarget(e),c.render(h,Va)}};function ip(i){let t=[],e=[],n=[],s=i,r=i-Xi+1+Tc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Xi?c=Tc[a-i+Xi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,d=1,S=new Float32Array(y*g*p),E=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let T=0;T<p;T++){let R=T%3*2/3-1,D=T>2?0:-1,b=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];S.set(b,y*g*T),E.set(f,m*g*T);let v=[T,T,T,T,T,T];M.set(v,d*g*T)}let A=new Ie;A.setAttribute("position",new Ue(S,y)),A.setAttribute("uv",new Ue(E,m)),A.setAttribute("faceIndex",new Ue(M,d)),t.push(A),s>Xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(i,t,e){let n=new an(i,t,e);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sp(i,t,e){let n=new Float32Array(li),s=new L(0,1,0);return new De({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Cc(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Pc(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Hr||c===Vr,u=c===ni||c===ii;if(l||u){let h=t.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new qi(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new qi(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function op(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ci("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ap(i,t,e,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(h){let f=[],p=h.index,g=h.attributes.position,y=0;if(p!==null){let S=p.array;y=p.version;for(let E=0,M=S.length;E<M;E+=3){let A=S[E+0],T=S[E+1],R=S[E+2];f.push(A,T,T,R,R,A)}}else if(g!==void 0){let S=g.array;y=g.version;for(let E=0,M=S.length/3-1;E<M;E+=3){let A=E+0,T=E+1,R=E+2;f.push(A,T,T,R,R,A)}}else return;let m=new(Oa(f)?fs:ds)(f,1);m.version=y;let d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function lp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*y[S];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hp(i,t,e){let n=new WeakMap,s=new te;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let M=o.attributes.position.count*E,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*A*4*h),R=new hs(T,M,A,h);R.type=sn,R.needsUpdate=!0;let D=E*4;for(let v=0;v<h;v++){let C=m[v],U=d[v],B=S[v],k=M*A*4*v;for(let Y=0;Y<C.count;Y++){let G=Y*D;p===!0&&(s.fromBufferAttribute(C,Y),T[k+G+0]=s.x,T[k+G+1]=s.y,T[k+G+2]=s.z,T[k+G+3]=0),g===!0&&(s.fromBufferAttribute(U,Y),T[k+G+4]=s.x,T[k+G+5]=s.y,T[k+G+6]=s.z,T[k+G+7]=0),y===!0&&(s.fromBufferAttribute(B,Y),T[k+G+8]=s.x,T[k+G+9]=s.y,T[k+G+10]=s.z,T[k+G+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new vt(M,A)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function up(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Kc=new Se,Ic=new ys(1,1),Jc=new hs,jc=new mr,Qc=new ms,Dc=[],Lc=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function Zi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Dc[s];if(r===void 0&&(r=new Float32Array(s),Dc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Io(i,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Fc.set(n),i.uniformMatrix2fv(this.addr,!1,Fc),ye(e,n)}}function xp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Nc.set(n),i.uniformMatrix3fv(this.addr,!1,Nc),ye(e,n)}}function yp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Uc.set(n),i.uniformMatrix4fv(this.addr,!1,Uc),ye(e,n)}}function vp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function Mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function Sp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Ap(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=Ua,r=Ic):r=Kc,e.setTexture2D(t||r,s)}function Rp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jc,s)}function Cp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qc,s)}function Pp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jc,s)}function Ip(i){switch(i){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return xp;case 35676:return yp;case 5124:case 35670:return vp;case 35667:case 35671:return _p;case 35668:case 35672:return bp;case 35669:case 35673:return Mp;case 5125:return Sp;case 36294:return Ep;case 36295:return Tp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Dp(i,t){i.uniform1fv(this.addr,t)}function Lp(i,t){let e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Up(i,t){let e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Np(i,t){let e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Fp(i,t){let e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Op(i,t){let e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bp(i,t){let e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zp(i,t){i.uniform1iv(this.addr,t)}function kp(i,t){i.uniform2iv(this.addr,t)}function Hp(i,t){i.uniform3iv(this.addr,t)}function Vp(i,t){i.uniform4iv(this.addr,t)}function Gp(i,t){i.uniform1uiv(this.addr,t)}function Wp(i,t){i.uniform2uiv(this.addr,t)}function Xp(i,t){i.uniform3uiv(this.addr,t)}function Yp(i,t){i.uniform4uiv(this.addr,t)}function qp(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Kc,r[a])}function Zp(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jc,r[a])}function Kp(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qc,r[a])}function Jp(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Jc,r[a])}function jp(i){switch(i){case 5126:return Dp;case 35664:return Lp;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return kp;case 35668:case 35672:return Hp;case 35669:case 35673:return Vp;case 5125:return Gp;case 36294:return Wp;case 36295:return Xp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Jp}}var Za=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ip(e.type)}},Ka=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jp(e.type)}},Ja=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},qa=/(\w+)(\])?(\[|\.)?/g;function Oc(i,t){i.seq.push(t),i.map[t.id]=t}function Qp(i,t,e){let n=i.name,s=n.length;for(qa.lastIndex=0;;){let r=qa.exec(n),a=qa.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Oc(e,l===void 0?new Za(o,i,t):new Ka(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Ja(o),Oc(e,h)),e=h}}}var Yi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Qp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Bc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $p=37297,tm=0;function em(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zc=new Bt;function nm(i){Zt._getMatrix(zc,Zt.workingColorSpace,i);let t=`mat3( ${zc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case ls:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+em(i.getShaderSource(t),o)}else return r}function im(i,t){let e=nm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sm(i,t){let e;switch(t){case ic:e="Linear";break;case sc:e="Reinhard";break;case rc:e="Cineon";break;case oc:e="ACESFilmic";break;case lc:e="AgX";break;case kr:e="Neutral";break;case ac:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Co=new L;function rm(){Zt.getLuminanceCoefficients(Co);let i=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function am(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Os(i){return i!==""}function Hc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(i){return i.replace(cm,um)}var hm=new Map;function um(i,t){let e=Vt[t];if(e===void 0){let n=hm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ja(e)}var dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(i){return i.replace(dm,fm)}function fm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ma?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function mm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ni:case ii:t="ENVMAP_TYPE_CUBE";break;case Is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ii:t="ENVMAP_MODE_REFRACTION";break}return t}function xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zr:t="ENVMAP_BLENDING_MULTIPLY";break;case ec:t="ENVMAP_BLENDING_MIX";break;case nc:t="ENVMAP_BLENDING_ADD";break}return t}function ym(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function vm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=pm(e),l=mm(e),u=gm(e),h=xm(e),f=ym(e),p=om(e),g=am(r),y=s.createProgram(),m,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),d.length>0&&(d+=`
`)):(m=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),d=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Vt.tonemapping_pars_fragment:"",e.toneMapping!==En?sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,im("linearToOutputTexel",e.outputColorSpace),rm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=ja(a),a=Hc(a,e),a=Vc(a,e),o=ja(o),o=Hc(o,e),o=Vc(o,e),a=Gc(a),o=Gc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Na?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=S+m+a,M=S+d+o,A=Bc(s,s.VERTEX_SHADER,E),T=Bc(s,s.FRAGMENT_SHADER,M);s.attachShader(y,A),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(C){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",B=s.getShaderInfoLog(A)||"",k=s.getShaderInfoLog(T)||"",Y=U.trim(),G=B.trim(),$=k.trim(),H=!0,ot=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,T);else{let lt=kc(s,A,"vertex"),gt=kc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+lt+`
`+gt)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(G===""||$==="")&&(ot=!1);ot&&(C.diagnostics={runnable:H,programLog:Y,vertexShader:{log:G,prefix:m},fragmentShader:{log:$,prefix:d}})}s.deleteShader(A),s.deleteShader(T),D=new Yi(s,y),b=lm(s,y)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(y,$p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tm++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=T,this}var _m=0,Qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $a(t),e.set(t,n)),n}},$a=class{constructor(t){this.id=_m++,this.code=t,this.usedTimes=0}};function bm(i,t,e,n,s,r,a){let o=new us,c=new Qa,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,v,C,U,B){let k=U.fog,Y=B.geometry,G=b.isMeshStandardMaterial?U.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),H=$&&$.mapping===Is?$.image.height:null,ot=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gt=lt!==void 0?lt.length:0,Nt=0;Y.morphAttributes.position!==void 0&&(Nt=1),Y.morphAttributes.normal!==void 0&&(Nt=2),Y.morphAttributes.color!==void 0&&(Nt=3);let Wt,jt,Ht,Z;if(ot){let Jt=dn[ot];Wt=Jt.vertexShader,jt=Jt.fragmentShader}else Wt=b.vertexShader,jt=b.fragmentShader,c.update(b),Ht=c.getVertexShaderID(b),Z=c.getFragmentShaderID(b);let J=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),Et=B.isInstancedMesh===!0,_t=B.isBatchedMesh===!0,zt=!!b.map,fe=!!b.matcap,P=!!$,Qt=!!b.aoMap,Lt=!!b.lightMap,W=!!b.bumpMap,j=!!b.normalMap,Rt=!!b.displacementMap,st=!!b.emissiveMap,Pt=!!b.metalnessMap,se=!!b.roughnessMap,$t=b.anisotropy>0,w=b.clearcoat>0,x=b.dispersion>0,O=b.iridescence>0,q=b.sheen>0,Q=b.transmission>0,X=$t&&!!b.anisotropyMap,Tt=w&&!!b.clearcoatMap,rt=w&&!!b.clearcoatNormalMap,bt=w&&!!b.clearcoatRoughnessMap,Mt=O&&!!b.iridescenceMap,nt=O&&!!b.iridescenceThicknessMap,dt=q&&!!b.sheenColorMap,It=q&&!!b.sheenRoughnessMap,St=!!b.specularMap,ht=!!b.specularColorMap,kt=!!b.specularIntensityMap,I=Q&&!!b.transmissionMap,it=Q&&!!b.thicknessMap,at=!!b.gradientMap,mt=!!b.alphaMap,tt=b.alphaTest>0,K=!!b.alphaHash,yt=!!b.extensions,Ot=En;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let ae={shaderID:ot,shaderType:b.type,shaderName:b.name,vertexShader:Wt,fragmentShader:jt,defines:b.defines,customVertexShaderID:Ht,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:_t,batchingColor:_t&&B._colorsTexture!==null,instancing:Et,instancingColor:Et&&B.instanceColor!==null,instancingMorph:Et&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Qn,alphaToCoverage:!!b.alphaToCoverage,map:zt,matcap:fe,envMap:P,envMapMode:P&&$.mapping,envMapCubeUVHeight:H,aoMap:Qt,lightMap:Lt,bumpMap:W,normalMap:j,displacementMap:f&&Rt,emissiveMap:st,normalMapObjectSpace:j&&b.normalMapType===dc,normalMapTangentSpace:j&&b.normalMapType===wo,metalnessMap:Pt,roughnessMap:se,anisotropy:$t,anisotropyMap:X,clearcoat:w,clearcoatMap:Tt,clearcoatNormalMap:rt,clearcoatRoughnessMap:bt,dispersion:x,iridescence:O,iridescenceMap:Mt,iridescenceThicknessMap:nt,sheen:q,sheenColorMap:dt,sheenRoughnessMap:It,specularMap:St,specularColorMap:ht,specularIntensityMap:kt,transmission:Q,transmissionMap:I,thicknessMap:it,gradientMap:at,opaque:b.transparent===!1&&b.blending===Jn&&b.alphaToCoverage===!1,alphaMap:mt,alphaTest:tt,alphaHash:K,combine:b.combine,mapUv:zt&&y(b.map.channel),aoMapUv:Qt&&y(b.aoMap.channel),lightMapUv:Lt&&y(b.lightMap.channel),bumpMapUv:W&&y(b.bumpMap.channel),normalMapUv:j&&y(b.normalMap.channel),displacementMapUv:Rt&&y(b.displacementMap.channel),emissiveMapUv:st&&y(b.emissiveMap.channel),metalnessMapUv:Pt&&y(b.metalnessMap.channel),roughnessMapUv:se&&y(b.roughnessMap.channel),anisotropyMapUv:X&&y(b.anisotropyMap.channel),clearcoatMapUv:Tt&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(b.sheenRoughnessMap.channel),specularMapUv:St&&y(b.specularMap.channel),specularColorMapUv:ht&&y(b.specularColorMap.channel),specularIntensityMapUv:kt&&y(b.specularIntensityMap.channel),transmissionMapUv:I&&y(b.transmissionMap.channel),thicknessMapUv:it&&y(b.thicknessMap.channel),alphaMapUv:mt&&y(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(j||$t),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(zt||mt),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ft,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Nt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:zt&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===ee,decodeVideoTextureEmissive:st&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===ee,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===un,flipSided:b.side===Ee,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:yt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&b.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function d(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)v.push(C),v.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(S(v,b),E(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function S(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function E(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){let v=g[b.type],C;if(v){let U=dn[v];C=Sc.clone(U.uniforms)}else C=b.uniforms;return C}function A(b,v){let C;for(let U=0,B=u.length;U<B;U++){let k=u[U];if(k.cacheKey===v){C=k,++C.usedTimes;break}}return C===void 0&&(C=new vm(i,v,b,r),u.push(C)),C}function T(b){if(--b.usedTimes===0){let v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:D}}function Mm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,p,g,y,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=y,d.group=m),t++,d}function o(h,f,p,g,y,m){let d=a(h,f,p,g,y,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(h,f,p,g,y,m){let d=a(h,f,p,g,y,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||Sm),n.length>1&&n.sort(f||Xc),s.length>1&&s.sort(f||Xc)}function u(){for(let h=t,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Em(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Yc,i.set(n,[a])):s>=r.length?(a=new Yc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ft};break;case"SpotLight":e={position:new L,direction:new L,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function wm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Am=0;function Rm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cm(i){let t=new Tm,e=wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new he,a=new he;function o(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,S=0,E=0,M=0,A=0,T=0,R=0;l.sort(Rm);for(let b=0,v=l.length;b<v;b++){let C=l[b],U=C.color,B=C.intensity,k=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*B,h+=U.g*B,f+=U.b*B;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],B);R++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let $=C.shadow,H=e.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=G,p++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(B),G.distance=k,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[y]=G;let $=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,$.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[y]=$.matrix,C.castShadow){let H=e.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=Y,M++}y++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(U).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let $=C.shadow,H=e.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=G,g++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(B),G.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[d]=G,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==y||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==S||D.numPointShadows!==E||D.numSpotShadows!==M||D.numSpotMaps!==A||D.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.directionalLength=p,D.pointLength=g,D.spotLength=y,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=S,D.numPointShadows=E,D.numSpotShadows=M,D.numSpotMaps=A,D.numLightProbes=R,n.version=Am++)}function c(l,u){let h=0,f=0,p=0,g=0,y=0,m=u.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){let E=l[d];if(E.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(E.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:n}}function qc(i){let t=new Cm(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Pm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new qc(i),t.set(s,[o])):r>=a.length?(o=new qc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lm(i,t,e){let n=new Li,s=new vt,r=new vt,a=new te,o=new vr({depthPacking:uc}),c=new _r,l={},u=e.maxTextureSize,h={[_n]:Ee,[Ee]:_n,[un]:un},f=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Im,fragmentShader:Dm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Yt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let d=this.type;this.render=function(T,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Sn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=d!==hn&&this.type===hn,k=d===hn&&this.type!==hn;for(let Y=0,G=T.length;Y<G;Y++){let $=T[Y],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ot=H.getFrameExtents();if(s.multiply(ot),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,H.mapSize.y=r.y)),H.map===null||B===!0||k===!0){let gt=this.type!==hn?{minFilter:Ne,magFilter:Ne}:{};H.map!==null&&H.map.dispose(),H.map=new an(s.x,s.y,gt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let lt=H.getViewportCount();for(let gt=0;gt<lt;gt++){let Nt=H.getViewport(gt);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),U.viewport(a),H.updateMatrices($,gt),n=H.getFrustum(),M(R,D,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===hn&&S(H,D),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,v,C)};function S(T,R){let D=t.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new an(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,D,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,D,p,y,null)}function E(T,R,D,b){let v=null,C=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)v=C;else if(v=D.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=v.uuid,B=R.uuid,k=l[U];k===void 0&&(k={},l[U]=k);let Y=k[B];Y===void 0&&(Y=v.clone(),k[B]=Y,R.addEventListener("dispose",A)),v=Y}if(v.visible=R.visible,v.wireframe=R.wireframe,b===hn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:h[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let U=i.properties.get(v);U.light=D}return v}function M(T,R,D,b,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===hn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let B=t.update(T),k=T.material;if(Array.isArray(k)){let Y=B.groups;for(let G=0,$=Y.length;G<$;G++){let H=Y[G],ot=k[H.materialIndex];if(ot&&ot.visible){let lt=E(T,ot,b,v);T.onBeforeShadow(i,T,R,D,B,lt,H),i.renderBufferDirect(D,null,B,lt,T,H),T.onAfterShadow(i,T,R,D,B,lt,H)}}}else if(k.visible){let Y=E(T,k,b,v);T.onBeforeShadow(i,T,R,D,B,Y,null),i.renderBufferDirect(D,null,B,Y,T,null),T.onAfterShadow(i,T,R,D,B,Y,null)}}let U=T.children;for(let B=0,k=U.length;B<k;B++)M(U[B],R,D,b,v)}function A(T){T.target.removeEventListener("dispose",A);for(let D in l){let b=l[D],v=T.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}var Um={[Dr]:Lr,[Ur]:Or,[Nr]:Br,[jn]:Fr,[Lr]:Dr,[Or]:Ur,[Br]:Nr,[Fr]:jn};function Nm(i,t){function e(){let I=!1,it=new te,at=null,mt=new te(0,0,0,0);return{setMask:function(tt){at!==tt&&!I&&(i.colorMask(tt,tt,tt,tt),at=tt)},setLocked:function(tt){I=tt},setClear:function(tt,K,yt,Ot,ae){ae===!0&&(tt*=Ot,K*=Ot,yt*=Ot),it.set(tt,K,yt,Ot),mt.equals(it)===!1&&(i.clearColor(tt,K,yt,Ot),mt.copy(it))},reset:function(){I=!1,at=null,mt.set(-1,0,0,0)}}}function n(){let I=!1,it=!1,at=null,mt=null,tt=null;return{setReversed:function(K){if(it!==K){let yt=t.get("EXT_clip_control");K?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),it=K;let Ot=tt;tt=null,this.setClear(Ot)}},getReversed:function(){return it},setTest:function(K){K?J(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(K){at!==K&&!I&&(i.depthMask(K),at=K)},setFunc:function(K){if(it&&(K=Um[K]),mt!==K){switch(K){case Dr:i.depthFunc(i.NEVER);break;case Lr:i.depthFunc(i.ALWAYS);break;case Ur:i.depthFunc(i.LESS);break;case jn:i.depthFunc(i.LEQUAL);break;case Nr:i.depthFunc(i.EQUAL);break;case Fr:i.depthFunc(i.GEQUAL);break;case Or:i.depthFunc(i.GREATER);break;case Br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=K}},setLocked:function(K){I=K},setClear:function(K){tt!==K&&(it&&(K=1-K),i.clearDepth(K),tt=K)},reset:function(){I=!1,at=null,mt=null,tt=null,it=!1}}}function s(){let I=!1,it=null,at=null,mt=null,tt=null,K=null,yt=null,Ot=null,ae=null;return{setTest:function(Jt){I||(Jt?J(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(Jt){it!==Jt&&!I&&(i.stencilMask(Jt),it=Jt)},setFunc:function(Jt,fn,rn){(at!==Jt||mt!==fn||tt!==rn)&&(i.stencilFunc(Jt,fn,rn),at=Jt,mt=fn,tt=rn)},setOp:function(Jt,fn,rn){(K!==Jt||yt!==fn||Ot!==rn)&&(i.stencilOp(Jt,fn,rn),K=Jt,yt=fn,Ot=rn)},setLocked:function(Jt){I=Jt},setClear:function(Jt){ae!==Jt&&(i.clearStencil(Jt),ae=Jt)},reset:function(){I=!1,it=null,at=null,mt=null,tt=null,K=null,yt=null,Ot=null,ae=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,y=!1,m=null,d=null,S=null,E=null,M=null,A=null,T=null,R=new Ft(0,0,0),D=0,b=!1,v=null,C=null,U=null,B=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=$>=2);let ot=null,lt={},gt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Wt=new te().fromArray(gt),jt=new te().fromArray(Nt);function Ht(I,it,at,mt){let tt=new Uint8Array(4),K=i.createTexture();i.bindTexture(I,K),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<at;yt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(it+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return K}let Z={};Z[i.TEXTURE_2D]=Ht(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(jn),W(!1),j(ba),J(i.CULL_FACE),Qt(Sn);function J(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function ft(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Et(I,it){return h[I]!==it?(i.bindFramebuffer(I,it),h[I]=it,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=it),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=it),!0):!1}function _t(I,it){let at=p,mt=!1;if(I){at=f.get(it),at===void 0&&(at=[],f.set(it,at));let tt=I.textures;if(at.length!==tt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let K=0,yt=tt.length;K<yt;K++)at[K]=i.COLOR_ATTACHMENT0+K;at.length=tt.length,mt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,mt=!0);mt&&i.drawBuffers(at)}function zt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let fe={[Un]:i.FUNC_ADD,[Bl]:i.FUNC_SUBTRACT,[zl]:i.FUNC_REVERSE_SUBTRACT};fe[kl]=i.MIN,fe[Hl]=i.MAX;let P={[Vl]:i.ZERO,[Gl]:i.ONE,[Wl]:i.SRC_COLOR,[lr]:i.SRC_ALPHA,[Jl]:i.SRC_ALPHA_SATURATE,[Zl]:i.DST_COLOR,[Yl]:i.DST_ALPHA,[Xl]:i.ONE_MINUS_SRC_COLOR,[cr]:i.ONE_MINUS_SRC_ALPHA,[Kl]:i.ONE_MINUS_DST_COLOR,[ql]:i.ONE_MINUS_DST_ALPHA,[jl]:i.CONSTANT_COLOR,[Ql]:i.ONE_MINUS_CONSTANT_COLOR,[$l]:i.CONSTANT_ALPHA,[tc]:i.ONE_MINUS_CONSTANT_ALPHA};function Qt(I,it,at,mt,tt,K,yt,Ot,ae,Jt){if(I===Sn){y===!0&&(ft(i.BLEND),y=!1);return}if(y===!1&&(J(i.BLEND),y=!0),I!==Ol){if(I!==m||Jt!==b){if((d!==Un||M!==Un)&&(i.blendEquation(i.FUNC_ADD),d=Un,M=Un),Jt)switch(I){case Jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.ONE,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ta:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ea:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ta:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,E=null,A=null,T=null,R.set(0,0,0),D=0,m=I,b=Jt}return}tt=tt||it,K=K||at,yt=yt||mt,(it!==d||tt!==M)&&(i.blendEquationSeparate(fe[it],fe[tt]),d=it,M=tt),(at!==S||mt!==E||K!==A||yt!==T)&&(i.blendFuncSeparate(P[at],P[mt],P[K],P[yt]),S=at,E=mt,A=K,T=yt),(Ot.equals(R)===!1||ae!==D)&&(i.blendColor(Ot.r,Ot.g,Ot.b,ae),R.copy(Ot),D=ae),m=I,b=!1}function Lt(I,it){I.side===un?ft(i.CULL_FACE):J(i.CULL_FACE);let at=I.side===Ee;it&&(at=!at),W(at),I.blending===Jn&&I.transparent===!1?Qt(Sn):Qt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let mt=I.stencilWrite;o.setTest(mt),mt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),st(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function W(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function j(I){I!==Ul?(J(i.CULL_FACE),I!==C&&(I===ba?i.cullFace(i.BACK):I===Nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),C=I}function Rt(I){I!==U&&(G&&i.lineWidth(I),U=I)}function st(I,it,at){I?(J(i.POLYGON_OFFSET_FILL),(B!==it||k!==at)&&(i.polygonOffset(it,at),B=it,k=at)):ft(i.POLYGON_OFFSET_FILL)}function Pt(I){I?J(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function se(I){I===void 0&&(I=i.TEXTURE0+Y-1),ot!==I&&(i.activeTexture(I),ot=I)}function $t(I,it,at){at===void 0&&(ot===null?at=i.TEXTURE0+Y-1:at=ot);let mt=lt[at];mt===void 0&&(mt={type:void 0,texture:void 0},lt[at]=mt),(mt.type!==I||mt.texture!==it)&&(ot!==at&&(i.activeTexture(at),ot=at),i.bindTexture(I,it||Z[I]),mt.type=I,mt.texture=it)}function w(){let I=lt[ot];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(I){Wt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Wt.copy(I))}function It(I){jt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),jt.copy(I))}function St(I,it){let at=l.get(it);at===void 0&&(at=new WeakMap,l.set(it,at));let mt=at.get(I);mt===void 0&&(mt=i.getUniformBlockIndex(it,I.name),at.set(I,mt))}function ht(I,it){let mt=l.get(it).get(I);c.get(it)!==mt&&(i.uniformBlockBinding(it,mt,I.__bindingPointIndex),c.set(it,mt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,lt={},h={},f=new WeakMap,p=[],g=null,y=!1,m=null,d=null,S=null,E=null,M=null,A=null,T=null,R=new Ft(0,0,0),D=0,b=!1,v=null,C=null,U=null,B=null,k=null,Wt.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:ft,bindFramebuffer:Et,drawBuffers:_t,useProgram:zt,setBlending:Qt,setMaterial:Lt,setFlipSided:W,setCullFace:j,setLineWidth:Rt,setPolygonOffset:st,setScissorTest:Pt,activeTexture:se,bindTexture:$t,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Mt,texImage3D:nt,updateUBOMapping:St,uniformBlockBinding:ht,texStorage2D:rt,texStorage3D:bt,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:X,compressedTexSubImage3D:Tt,scissor:dt,viewport:It,reset:kt}}function Fm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):Ri("canvas")}function y(w,x,O){let q=1,Q=$t(w);if((Q.width>O||Q.height>O)&&(q=O/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let X=Math.floor(q*Q.width),Tt=Math.floor(q*Q.height);h===void 0&&(h=g(X,Tt));let rt=x?g(X,Tt):h;return rt.width=X,rt.height=Tt,rt.getContext("2d").drawImage(w,0,0,X,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+Tt+")."),rt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,O,q,Q=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=x;if(x===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),x===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),x===i.RGBA){let Tt=Q?ls:Zt.getTransfer(q);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=Tt===ee?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(w,x){let O;return w?x===null||x===Vn||x===Hi?O=i.DEPTH24_STENCIL8:x===sn?O=i.DEPTH32F_STENCIL8:x===zi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vn||x===Hi?O=i.DEPTH_COMPONENT24:x===sn?O=i.DEPTH_COMPONENT32F:x===zi&&(O=i.DEPTH_COMPONENT16),O}function A(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ne&&w.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){let x=w.target;x.removeEventListener("dispose",T),D(x),x.isVideoTexture&&u.delete(x)}function R(w){let x=w.target;x.removeEventListener("dispose",R),v(x)}function D(w){let x=n.get(w);if(x.__webglInit===void 0)return;let O=w.source,q=f.get(O);if(q){let Q=q[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(w),Object.keys(q).length===0&&f.delete(O)}n.remove(w)}function b(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let O=w.source,q=f.get(O);delete q[x.__cacheKey],a.memory.textures--}function v(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Q=0;Q<x.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=w.textures;for(let q=0,Q=O.length;q<Q;q++){let X=n.get(O[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(w)}let C=0;function U(){C=0}function B(){let w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function k(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function Y(w,x){let O=n.get(w);if(w.isVideoTexture&&Pt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function G(w,x){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Z(O,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function $(w,x){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Z(O,w,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function H(w,x){let O=n.get(w);if(w.version>0&&O.__version!==w.version){J(O,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let ot={[hr]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[ur]:i.MIRRORED_REPEAT},lt={[Ne]:i.NEAREST,[cc]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},gt={[fc]:i.NEVER,[vc]:i.ALWAYS,[pc]:i.LESS,[Ua]:i.LEQUAL,[mc]:i.EQUAL,[yc]:i.GEQUAL,[gc]:i.GREATER,[xc]:i.NOTEQUAL};function Nt(w,x){if(x.type===sn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===Gr||x.magFilter===Ds||x.magFilter===Hn||x.minFilter===tn||x.minFilter===Gr||x.minFilter===Ds||x.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ot[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ot[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ot[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,lt[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,gt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ne||x.minFilter!==Ds&&x.minFilter!==Hn||x.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Wt(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",T));let q=x.source,Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));let X=k(x);if(X!==w.__cacheKey){Q[X]===void 0&&(Q[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[X].usedTimes++;let Tt=Q[w.__cacheKey];Tt!==void 0&&(Q[w.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(x)),w.__cacheKey=X,w.__webglTexture=Q[X].texture}return O}function jt(w,x,O){return Math.floor(Math.floor(w/O)/x)}function Ht(w,x,O,q){let X=w.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,q,x.data);else{X.sort((nt,dt)=>nt.start-dt.start);let Tt=0;for(let nt=1;nt<X.length;nt++){let dt=X[Tt],It=X[nt],St=dt.start+dt.count,ht=jt(It.start,x.width,4),kt=jt(dt.start,x.width,4);It.start<=St+1&&ht===kt&&jt(It.start+It.count-1,x.width,4)===ht?dt.count=Math.max(dt.count,It.start+It.count-dt.start):(++Tt,X[Tt]=It)}X.length=Tt+1;let rt=i.getParameter(i.UNPACK_ROW_LENGTH),bt=i.getParameter(i.UNPACK_SKIP_PIXELS),Mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let nt=0,dt=X.length;nt<dt;nt++){let It=X[nt],St=Math.floor(It.start/4),ht=Math.ceil(It.count/4),kt=St%x.width,I=Math.floor(St/x.width),it=ht,at=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,kt,I,it,at,O,q,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,rt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function Z(w,x,O){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);let Q=Wt(w,x),X=x.source;e.bindTexture(q,w.__webglTexture,i.TEXTURE0+O);let Tt=n.get(X);if(X.version!==Tt.__version||Q===!0){e.activeTexture(i.TEXTURE0+O);let rt=Zt.getPrimaries(Zt.workingColorSpace),bt=x.colorSpace===Tn?null:Zt.getPrimaries(x.colorSpace),Mt=x.colorSpace===Tn||rt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let nt=y(x.image,!1,s.maxTextureSize);nt=se(x,nt);let dt=r.convert(x.format,x.colorSpace),It=r.convert(x.type),St=E(x.internalFormat,dt,It,x.colorSpace,x.isVideoTexture);Nt(q,x);let ht,kt=x.mipmaps,I=x.isVideoTexture!==!0,it=Tt.__version===void 0||Q===!0,at=X.dataReady,mt=A(x,nt);if(x.isDepthTexture)St=M(x.format===Vi,x.type),it&&(I?e.texStorage2D(i.TEXTURE_2D,1,St,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,St,nt.width,nt.height,0,dt,It,null));else if(x.isDataTexture)if(kt.length>0){I&&it&&e.texStorage2D(i.TEXTURE_2D,mt,St,kt[0].width,kt[0].height);for(let tt=0,K=kt.length;tt<K;tt++)ht=kt[tt],I?at&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ht.width,ht.height,dt,It,ht.data):e.texImage2D(i.TEXTURE_2D,tt,St,ht.width,ht.height,0,dt,It,ht.data);x.generateMipmaps=!1}else I?(it&&e.texStorage2D(i.TEXTURE_2D,mt,St,nt.width,nt.height),at&&Ht(x,nt,dt,It)):e.texImage2D(i.TEXTURE_2D,0,St,nt.width,nt.height,0,dt,It,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,St,kt[0].width,kt[0].height,nt.depth);for(let tt=0,K=kt.length;tt<K;tt++)if(ht=kt[tt],x.format!==Ze)if(dt!==null)if(I){if(at)if(x.layerUpdates.size>0){let yt=Ha(ht.width,ht.height,x.format,x.type);for(let Ot of x.layerUpdates){let ae=ht.data.subarray(Ot*yt/ht.data.BYTES_PER_ELEMENT,(Ot+1)*yt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Ot,ht.width,ht.height,1,dt,ae)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,nt.depth,dt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,St,ht.width,ht.height,nt.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,nt.depth,dt,It,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,St,ht.width,ht.height,nt.depth,0,dt,It,ht.data)}else{I&&it&&e.texStorage2D(i.TEXTURE_2D,mt,St,kt[0].width,kt[0].height);for(let tt=0,K=kt.length;tt<K;tt++)ht=kt[tt],x.format!==Ze?dt!==null?I?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,ht.width,ht.height,dt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,St,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?at&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ht.width,ht.height,dt,It,ht.data):e.texImage2D(i.TEXTURE_2D,tt,St,ht.width,ht.height,0,dt,It,ht.data)}else if(x.isDataArrayTexture)if(I){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,St,nt.width,nt.height,nt.depth),at)if(x.layerUpdates.size>0){let tt=Ha(nt.width,nt.height,x.format,x.type);for(let K of x.layerUpdates){let yt=nt.data.subarray(K*tt/nt.data.BYTES_PER_ELEMENT,(K+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,dt,It,yt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,dt,It,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,nt.width,nt.height,nt.depth,0,dt,It,nt.data);else if(x.isData3DTexture)I?(it&&e.texStorage3D(i.TEXTURE_3D,mt,St,nt.width,nt.height,nt.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,dt,It,nt.data)):e.texImage3D(i.TEXTURE_3D,0,St,nt.width,nt.height,nt.depth,0,dt,It,nt.data);else if(x.isFramebufferTexture){if(it)if(I)e.texStorage2D(i.TEXTURE_2D,mt,St,nt.width,nt.height);else{let tt=nt.width,K=nt.height;for(let yt=0;yt<mt;yt++)e.texImage2D(i.TEXTURE_2D,yt,St,tt,K,0,dt,It,null),tt>>=1,K>>=1}}else if(kt.length>0){if(I&&it){let tt=$t(kt[0]);e.texStorage2D(i.TEXTURE_2D,mt,St,tt.width,tt.height)}for(let tt=0,K=kt.length;tt<K;tt++)ht=kt[tt],I?at&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt,It,ht):e.texImage2D(i.TEXTURE_2D,tt,St,dt,It,ht);x.generateMipmaps=!1}else if(I){if(it){let tt=$t(nt);e.texStorage2D(i.TEXTURE_2D,mt,St,tt.width,tt.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,It,nt)}else e.texImage2D(i.TEXTURE_2D,0,St,dt,It,nt);m(x)&&d(q),Tt.__version=X.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function J(w,x,O){if(x.image.length!==6)return;let q=Wt(w,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let X=n.get(Q);if(Q.version!==X.__version||q===!0){e.activeTexture(i.TEXTURE0+O);let Tt=Zt.getPrimaries(Zt.workingColorSpace),rt=x.colorSpace===Tn?null:Zt.getPrimaries(x.colorSpace),bt=x.colorSpace===Tn||Tt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Mt=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!Mt&&!nt?dt[K]=y(x.image[K],!0,s.maxCubemapSize):dt[K]=nt?x.image[K].image:x.image[K],dt[K]=se(x,dt[K]);let It=dt[0],St=r.convert(x.format,x.colorSpace),ht=r.convert(x.type),kt=E(x.internalFormat,St,ht,x.colorSpace),I=x.isVideoTexture!==!0,it=X.__version===void 0||q===!0,at=Q.dataReady,mt=A(x,It);Nt(i.TEXTURE_CUBE_MAP,x);let tt;if(Mt){I&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,kt,It.width,It.height);for(let K=0;K<6;K++){tt=dt[K].mipmaps;for(let yt=0;yt<tt.length;yt++){let Ot=tt[yt];x.format!==Ze?St!==null?I?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,0,0,Ot.width,Ot.height,St,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,0,0,Ot.width,Ot.height,St,ht,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,kt,Ot.width,Ot.height,0,St,ht,Ot.data)}}}else{if(tt=x.mipmaps,I&&it){tt.length>0&&mt++;let K=$t(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,kt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,St,ht,dt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,dt[K].width,dt[K].height,0,St,ht,dt[K].data);for(let yt=0;yt<tt.length;yt++){let ae=tt[yt].image[K].image;I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,0,0,ae.width,ae.height,St,ht,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,kt,ae.width,ae.height,0,St,ht,ae.data)}}else{I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St,ht,dt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,St,ht,dt[K]);for(let yt=0;yt<tt.length;yt++){let Ot=tt[yt];I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,0,0,St,ht,Ot.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,kt,St,ht,Ot.image[K])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),X.__version=Q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ft(w,x,O,q,Q,X){let Tt=r.convert(O.format,O.colorSpace),rt=r.convert(O.type),bt=E(O.internalFormat,Tt,rt,O.colorSpace),Mt=n.get(x),nt=n.get(O);if(nt.__renderTarget=x,!Mt.__hasExternalTextures){let dt=Math.max(1,x.width>>X),It=Math.max(1,x.height>>X);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,X,bt,dt,It,x.depth,0,Tt,rt,null):e.texImage2D(Q,X,bt,dt,It,0,Tt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),st(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,nt.__webglTexture,0,Rt(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,nt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(w,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let q=x.depthTexture,Q=q&&q.isDepthTexture?q.type:null,X=M(x.stencilBuffer,Q),Tt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Rt(x);st(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,X,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,w)}else{let q=x.textures;for(let Q=0;Q<q.length;Q++){let X=q[Q],Tt=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),bt=E(X.internalFormat,Tt,rt,X.colorSpace),Mt=Rt(x);O&&st(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,bt,x.width,x.height):st(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,bt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,bt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);let Q=q.__webglTexture,X=Rt(x);if(x.depthTexture.format===wi)st(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Vi)st(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function zt(w){let x=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let q=w.texture.mipmaps;q&&q.length>0?_t(x.__webglFramebuffer[0],w):_t(x.__webglFramebuffer,w)}else if(O){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),Et(x.__webglDepthbuffer[q],w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,X)}}else{let q=w.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Et(x.__webglDepthbuffer,w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(w,x,O){let q=n.get(w);x!==void 0&&ft(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&zt(w)}function P(w){let x=w.texture,O=n.get(w),q=n.get(x);w.addEventListener("dispose",R);let Q=w.textures,X=w.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[rt]=[];for(let bt=0;bt<x.mipmaps.length;bt++)O.__webglFramebuffer[rt][bt]=i.createFramebuffer()}else O.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)O.__webglFramebuffer[rt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let rt=0,bt=Q.length;rt<bt;rt++){let Mt=n.get(Q[rt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&st(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let rt=0;rt<Q.length;rt++){let bt=Q[rt];O.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[rt]);let Mt=r.convert(bt.format,bt.colorSpace),nt=r.convert(bt.type),dt=E(bt.internalFormat,Mt,nt,bt.colorSpace,w.isXRRenderTarget===!0),It=Rt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,dt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,O.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)ft(O.__webglFramebuffer[rt][bt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt);else ft(O.__webglFramebuffer[rt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let rt=0,bt=Q.length;rt<bt;rt++){let Mt=Q[rt],nt=n.get(Mt),dt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,nt.__webglTexture),Nt(dt,Mt),ft(O.__webglFramebuffer,w,Mt,i.COLOR_ATTACHMENT0+rt,dt,0),m(Mt)&&d(dt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(rt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,q.__webglTexture),Nt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)ft(O.__webglFramebuffer[bt],w,x,i.COLOR_ATTACHMENT0,rt,bt);else ft(O.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,rt,0);m(x)&&d(rt),e.unbindTexture()}w.depthBuffer&&zt(w)}function Qt(w){let x=w.textures;for(let O=0,q=x.length;O<q;O++){let Q=x[O];if(m(Q)){let X=S(w),Tt=n.get(Q).__webglTexture;e.bindTexture(X,Tt),d(X),e.unbindTexture()}}}let Lt=[],W=[];function j(w){if(w.samples>0){if(st(w)===!1){let x=w.textures,O=w.width,q=w.height,Q=i.COLOR_BUFFER_BIT,X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(w),rt=x.length>1;if(rt)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let bt=w.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let nt=n.get(x[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,Q,i.NEAREST),c===!0&&(Lt.length=0,W.length=0,Lt.push(i.COLOR_ATTACHMENT0+Mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Lt.push(X),W.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let nt=n.get(x[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Rt(w){return Math.min(s.maxSamples,w.samples)}function st(w){let x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Pt(w){let x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function se(w,x){let O=w.colorSpace,q=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Qn&&O!==Tn&&(Zt.getTransfer(O)===ee?(q!==Ze||Q!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function $t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=fe,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=st}function Om(i,t){function e(n,s=Tn){let r,a=Zt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Xr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ca)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pa)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Aa)return i.BYTE;if(n===Ra)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===Wr)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===Ia)return i.ALPHA;if(n===Da)return i.RGB;if(n===Ze)return i.RGBA;if(n===wi)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===qr)return i.RED;if(n===Zr)return i.RED_INTEGER;if(n===La)return i.RG;if(n===Kr)return i.RG_INTEGER;if(n===Jr)return i.RGBA_INTEGER;if(n===Ls||n===Us||n===Ns||n===Fs)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===Qr||n===$r||n===to)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===no)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===xo||n===yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===so)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ao)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===co)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===go)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===_o||n===bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mo||n===So||n===Eo||n===To)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new vs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new De({vertexShader:Bm,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},el=class extends on{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new tl,d={},S=e.getContextAttributes(),E=null,M=null,A=[],T=[],R=new vt,D=null,b=new Me;b.viewport=new te;let v=new Me;v.viewport=new te;let C=[b,v],U=new Ir,B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=A[Z];return J===void 0&&(J=new Di,A[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=A[Z];return J===void 0&&(J=new Di,A[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=A[Z];return J===void 0&&(J=new Di,A[Z]=J),J.getHandSpace()};function Y(Z){let J=T.indexOf(Z.inputSource);if(J===-1)return;let ft=A[J];ft!==void 0&&(ft.update(Z.inputSource,Z.frame,l||a),ft.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let Z=0;Z<A.length;Z++){let J=T[Z];J!==null&&(T[Z]=null,A[Z].disconnect(J))}B=null,k=null,m.reset();for(let Z in d)delete d[Z];t.setRenderTarget(E),p=null,f=null,h=null,s=null,M=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),S.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Et=null,_t=null;S.depth&&(_t=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=S.stencil?Vi:wi,Et=S.stencil?Hi:Vn);let zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new an(f.textureWidth,f.textureHeight,{format:Ze,type:nn,depthTexture:new ys(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ft={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new an(p.framebufferWidth,p.framebufferHeight,{format:Ze,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Z){for(let J=0;J<Z.removed.length;J++){let ft=Z.removed[J],Et=T.indexOf(ft);Et>=0&&(T[Et]=null,A[Et].disconnect(ft))}for(let J=0;J<Z.added.length;J++){let ft=Z.added[J],Et=T.indexOf(ft);if(Et===-1){for(let zt=0;zt<A.length;zt++)if(zt>=T.length){T.push(ft),Et=zt;break}else if(T[zt]===null){T[zt]=ft,Et=zt;break}if(Et===-1)break}let _t=A[Et];_t&&_t.connect(ft)}}let H=new L,ot=new L;function lt(Z,J,ft){H.setFromMatrixPosition(J.matrixWorld),ot.setFromMatrixPosition(ft.matrixWorld);let Et=H.distanceTo(ot),_t=J.projectionMatrix.elements,zt=ft.projectionMatrix.elements,fe=_t[14]/(_t[10]-1),P=_t[14]/(_t[10]+1),Qt=(_t[9]+1)/_t[5],Lt=(_t[9]-1)/_t[5],W=(_t[8]-1)/_t[0],j=(zt[8]+1)/zt[0],Rt=fe*W,st=fe*j,Pt=Et/(-W+j),se=Pt*-W;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(se),Z.translateZ(Pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_t[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let $t=fe+Pt,w=P+Pt,x=Rt-se,O=st+(Et-se),q=Qt*P/w*$t,Q=Lt*P/w*$t;Z.projectionMatrix.makePerspective(x,O,q,Q,$t,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function gt(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let J=Z.near,ft=Z.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),U.near=v.near=b.near=J,U.far=v.far=b.far=ft,(B!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,k=U.far),U.layers.mask=Z.layers.mask|6,b.layers.mask=U.layers.mask&3,v.layers.mask=U.layers.mask&5;let Et=Z.parent,_t=U.cameras;gt(U,Et);for(let zt=0;zt<_t.length;zt++)gt(_t[zt],Et);_t.length===2?lt(U,b,v):U.projectionMatrix.copy(b.projectionMatrix),Nt(Z,U,Et)};function Nt(Z,J,ft){ft===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(ft.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ai*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return d[Z]};let Wt=null;function jt(Z,J){if(u=J.getViewerPose(l||a),g=J,u!==null){let ft=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Et=!1;ft.length!==U.cameras.length&&(U.cameras.length=0,Et=!0);for(let P=0;P<ft.length;P++){let Qt=ft[P],Lt=null;if(p!==null)Lt=p.getViewport(Qt);else{let j=h.getViewSubImage(f,Qt);Lt=j.viewport,P===0&&(t.setRenderTargetTextures(M,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(M))}let W=C[P];W===void 0&&(W=new Me,W.layers.enable(P),W.viewport=new te,C[P]=W),W.matrix.fromArray(Qt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Qt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),P===0&&(U.matrix.copy(W.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Et===!0&&U.cameras.push(W)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let P=h.getDepthInformation(ft[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(_t&&_t.includes("camera-access")&&y){t.state.unbindTexture(),h=n.getBinding();for(let P=0;P<ft.length;P++){let Qt=ft[P].camera;if(Qt){let Lt=d[Qt];Lt||(Lt=new vs,d[Qt]=Lt);let W=h.getCameraImage(Qt);Lt.sourceTexture=W}}}}for(let ft=0;ft<A.length;ft++){let Et=T[ft],_t=A[ft];Et!==null&&_t!==void 0&&_t.update(Et,J,l||a)}Wt&&Wt(Z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let Ht=new Zc;Ht.setAnimationLoop(jt),this.setAnimationLoop=function(Z){Wt=Z},this.dispose=function(){}}},oi=new qe,km=new he;function Hm(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ba(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,E,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,S,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ee&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ee&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=t.get(d),E=S.envMap,M=S.envMapRotation;E&&(m.envMap.value=E,oi.copy(M),oi.x*=-1,oi.y*=-1,oi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(km.makeRotationFromEuler(oi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ee&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){let M=E.program;n.uniformBlockBinding(S,M)}function l(S,E){let M=s[S.id];M===void 0&&(g(S),M=u(S),s[S.id]=M,S.addEventListener("dispose",m));let A=E.program;n.updateUBOMapping(S,A);let T=t.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function u(S){let E=h();S.__bindingPointIndex=E;let M=i.createBuffer(),A=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let E=s[S.id],M=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,R=M.length;T<R;T++){let D=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,v=D.length;b<v;b++){let C=D[b];if(p(C,T,b,A)===!0){let U=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],k=0;for(let Y=0;Y<B.length;Y++){let G=B[Y],$=y(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,U+k,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,M,A){let T=S.value,R=E+"_"+M;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{let D=A[R];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return A[R]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(S){let E=S.uniforms,M=0,A=16;for(let R=0,D=E.length;R<D;R++){let b=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,C=b.length;v<C;v++){let U=b[v],B=Array.isArray(U.value)?U.value:[U.value];for(let k=0,Y=B.length;k<Y;k++){let G=B[k],$=y(G),H=M%A,ot=H%$.boundary,lt=H+ot;M+=ot,lt!==0&&A-lt<$.storage&&(M+=A-lt),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=$.storage}}}let T=M%A;return T>0&&(M+=A-T),S.__size=M,S.__cache={},this}function y(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){let E=S.target;E.removeEventListener("dispose",m);let M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Po=class{constructor(t={}){let{canvas:e=_c(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),y=new Int32Array(4),m=null,d=null,S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,A=!1;this._outputColorSpace=Pe;let T=0,R=0,D=null,b=-1,v=null,C=new te,U=new te,B=null,k=new Ft(0),Y=0,G=e.width,$=e.height,H=1,ot=null,lt=null,gt=new te(0,0,G,$),Nt=new te(0,0,G,$),Wt=!1,jt=new Li,Ht=!1,Z=!1,J=new he,ft=new L,Et=new te,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function fe(){return D===null?H:1}let P=n;function Qt(_,N){return e.getContext(_,N)}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),P===null){let N="webgl2";if(P=Qt(N,_),P===null)throw Qt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Lt,W,j,Rt,st,Pt,se,$t,w,x,O,q,Q,X,Tt,rt,bt,Mt,nt,dt,It,St,ht,kt;function I(){Lt=new op(P),Lt.init(),St=new Om(P,Lt),W=new $f(P,Lt,t,St),j=new Nm(P,Lt),W.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),Rt=new cp(P),st=new Mm,Pt=new Fm(P,Lt,j,st,W,St,Rt),se=new ep(M),$t=new rp(M),w=new pu(P),ht=new jf(P,w),x=new ap(P,w,Rt,ht),O=new up(P,x,w,Rt),nt=new hp(P,W,Pt),rt=new tp(st),q=new bm(M,se,$t,Lt,W,ht,rt),Q=new Hm(M,st),X=new Em,Tt=new Pm(Lt),Mt=new Jf(M,se,$t,j,O,p,c),bt=new Lm(M,O,W),kt=new Vm(P,Rt,W,j),dt=new Qf(P,Lt,Rt),It=new lp(P,Lt,Rt),Rt.programs=q.programs,M.capabilities=W,M.extensions=Lt,M.properties=st,M.renderLists=X,M.shadowMap=bt,M.state=j,M.info=Rt}I();let it=new el(M,P);this.xr=it,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let _=Lt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Lt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize(G,$,!1))},this.getSize=function(_){return _.set(G,$)},this.setSize=function(_,N,z=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=_,$=N,e.width=Math.floor(_*H),e.height=Math.floor(N*H),z===!0&&(e.style.width=_+"px",e.style.height=N+"px"),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(G*H,$*H).floor()},this.setDrawingBufferSize=function(_,N,z){G=_,$=N,H=z,e.width=Math.floor(_*z),e.height=Math.floor(N*z),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _.copy(C)},this.getViewport=function(_){return _.copy(gt)},this.setViewport=function(_,N,z,V){_.isVector4?gt.set(_.x,_.y,_.z,_.w):gt.set(_,N,z,V),j.viewport(C.copy(gt).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy(Nt)},this.setScissor=function(_,N,z,V){_.isVector4?Nt.set(_.x,_.y,_.z,_.w):Nt.set(_,N,z,V),j.scissor(U.copy(Nt).multiplyScalar(H).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(_){j.setScissorTest(Wt=_)},this.setOpaqueSort=function(_){ot=_},this.setTransparentSort=function(_){lt=_},this.getClearColor=function(_){return _.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(_=!0,N=!0,z=!0){let V=0;if(_){let F=!1;if(D!==null){let et=D.texture.format;F=et===Jr||et===Kr||et===Zr}if(F){let et=D.texture.type,ut=et===nn||et===Vn||et===zi||et===Hi||et===Xr||et===Yr,xt=Mt.getClearColor(),pt=Mt.getClearAlpha(),Ct=xt.r,Dt=xt.g,wt=xt.b;ut?(g[0]=Ct,g[1]=Dt,g[2]=wt,g[3]=pt,P.clearBufferuiv(P.COLOR,0,g)):(y[0]=Ct,y[1]=Dt,y[2]=wt,y[3]=pt,P.clearBufferiv(P.COLOR,0,y))}else V|=P.COLOR_BUFFER_BIT}N&&(V|=P.DEPTH_BUFFER_BIT),z&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Mt.dispose(),X.dispose(),Tt.dispose(),st.dispose(),se.dispose(),$t.dispose(),O.dispose(),ht.dispose(),kt.dispose(),q.dispose(),it.dispose(),it.removeEventListener("sessionstart",rn),it.removeEventListener("sessionend",rl),Gn.stop()};function at(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let _=Rt.autoReset,N=bt.enabled,z=bt.autoUpdate,V=bt.needsUpdate,F=bt.type;I(),Rt.autoReset=_,bt.enabled=N,bt.autoUpdate=z,bt.needsUpdate=V,bt.type=F}function tt(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function K(_){let N=_.target;N.removeEventListener("dispose",K),yt(N)}function yt(_){Ot(_),st.remove(_)}function Ot(_){let N=st.get(_).programs;N!==void 0&&(N.forEach(function(z){q.releaseProgram(z)}),_.isShaderMaterial&&q.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,z,V,F,et){N===null&&(N=_t);let ut=F.isMesh&&F.matrixWorld.determinant()<0,xt=uh(_,N,z,V,F);j.setMaterial(V,ut);let pt=z.index,Ct=1;if(V.wireframe===!0){if(pt=x.getWireframeAttribute(z),pt===void 0)return;Ct=2}let Dt=z.drawRange,wt=z.attributes.position,Xt=Dt.start*Ct,ne=(Dt.start+Dt.count)*Ct;et!==null&&(Xt=Math.max(Xt,et.start*Ct),ne=Math.min(ne,(et.start+et.count)*Ct)),pt!==null?(Xt=Math.max(Xt,0),ne=Math.min(ne,pt.count)):wt!=null&&(Xt=Math.max(Xt,0),ne=Math.min(ne,wt.count));let pe=ne-Xt;if(pe<0||pe===1/0)return;ht.setup(F,V,xt,z,pt);let le,re=dt;if(pt!==null&&(le=w.get(pt),re=It,re.setIndex(le)),F.isMesh)V.wireframe===!0?(j.setLineWidth(V.wireframeLinewidth*fe()),re.setMode(P.LINES)):re.setMode(P.TRIANGLES);else if(F.isLine){let At=V.linewidth;At===void 0&&(At=1),j.setLineWidth(At*fe()),F.isLineSegments?re.setMode(P.LINES):F.isLineLoop?re.setMode(P.LINE_LOOP):re.setMode(P.LINE_STRIP)}else F.isPoints?re.setMode(P.POINTS):F.isSprite&&re.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ci("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))re.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let At=F._multiDrawStarts,ue=F._multiDrawCounts,Kt=F._multiDrawCount,Oe=pt?w.get(pt).bytesPerElement:1,ci=st.get(V).currentProgram.getUniforms();for(let Be=0;Be<Kt;Be++)ci.setValue(P,"_gl_DrawID",Be),re.render(At[Be]/Oe,ue[Be])}else if(F.isInstancedMesh)re.renderInstances(Xt,pe,F.count);else if(z.isInstancedBufferGeometry){let At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ue=Math.min(z.instanceCount,At);re.renderInstances(Xt,pe,ue)}else re.render(Xt,pe)};function ae(_,N,z){_.transparent===!0&&_.side===un&&_.forceSinglePass===!1?(_.side=Ee,_.needsUpdate=!0,ks(_,N,z),_.side=_n,_.needsUpdate=!0,ks(_,N,z),_.side=un):ks(_,N,z)}this.compile=function(_,N,z=null){z===null&&(z=_),d=Tt.get(z),d.init(N),E.push(d),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),_!==z&&_.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();let V=new Set;return _.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let et=F.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){let xt=et[ut];ae(xt,z,F),V.add(xt)}else ae(et,z,F),V.add(et)}),d=E.pop(),V},this.compileAsync=function(_,N,z=null){let V=this.compile(_,N,z);return new Promise(F=>{function et(){if(V.forEach(function(ut){st.get(ut).currentProgram.isReady()&&V.delete(ut)}),V.size===0){F(_);return}setTimeout(et,10)}Lt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Jt=null;function fn(_){Jt&&Jt(_)}function rn(){Gn.stop()}function rl(){Gn.start()}let Gn=new Zc;Gn.setAnimationLoop(fn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(_){Jt=_,it.setAnimationLoop(_),_===null?Gn.stop():Gn.start()},it.addEventListener("sessionstart",rn),it.addEventListener("sessionend",rl),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(N),N=it.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,N,D),d=Tt.get(_,E.length),d.init(N),E.push(d),J.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),jt.setFromProjectionMatrix(J,$e,N.reversedDepth),Z=this.localClippingEnabled,Ht=rt.init(this.clippingPlanes,Z),m=X.get(_,S.length),m.init(),S.push(m),it.enabled===!0&&it.isPresenting===!0){let et=M.xr.getDepthSensingMesh();et!==null&&Vo(et,N,-1/0,M.sortObjects)}Vo(_,N,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ot,lt),zt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,zt&&Mt.addToRenderList(m,_),this.info.render.frame++,Ht===!0&&rt.beginShadows();let z=d.state.shadowsArray;bt.render(z,_,N),Ht===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,F=m.transmissive;if(d.setupLights(),N.isArrayCamera){let et=N.cameras;if(F.length>0)for(let ut=0,xt=et.length;ut<xt;ut++){let pt=et[ut];al(V,F,_,pt)}zt&&Mt.render(_);for(let ut=0,xt=et.length;ut<xt;ut++){let pt=et[ut];ol(m,_,pt,pt.viewport)}}else F.length>0&&al(V,F,_,N),zt&&Mt.render(_),ol(m,_,N);D!==null&&R===0&&(Pt.updateMultisampleRenderTarget(D),Pt.updateRenderTargetMipmap(D)),_.isScene===!0&&_.onAfterRender(M,_,N),ht.resetDefaultState(),b=-1,v=null,E.pop(),E.length>0?(d=E[E.length-1],Ht===!0&&rt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Vo(_,N,z,V){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||jt.intersectsSprite(_)){V&&Et.setFromMatrixPosition(_.matrixWorld).applyMatrix4(J);let ut=O.update(_),xt=_.material;xt.visible&&m.push(_,ut,xt,z,Et.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||jt.intersectsObject(_))){let ut=O.update(_),xt=_.material;if(V&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Et.copy(_.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Et.copy(ut.boundingSphere.center)),Et.applyMatrix4(_.matrixWorld).applyMatrix4(J)),Array.isArray(xt)){let pt=ut.groups;for(let Ct=0,Dt=pt.length;Ct<Dt;Ct++){let wt=pt[Ct],Xt=xt[wt.materialIndex];Xt&&Xt.visible&&m.push(_,ut,Xt,z,Et.z,wt)}}else xt.visible&&m.push(_,ut,xt,z,Et.z,null)}}let et=_.children;for(let ut=0,xt=et.length;ut<xt;ut++)Vo(et[ut],N,z,V)}function ol(_,N,z,V){let F=_.opaque,et=_.transmissive,ut=_.transparent;d.setupLightsView(z),Ht===!0&&rt.setGlobalState(M.clippingPlanes,z),V&&j.viewport(C.copy(V)),F.length>0&&zs(F,N,z),et.length>0&&zs(et,N,z),ut.length>0&&zs(ut,N,z),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function al(_,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new an(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?ki:nn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let et=d.state.transmissionRenderTarget[V.id],ut=V.viewport||C;et.setSize(ut.z*M.transmissionResolutionScale,ut.w*M.transmissionResolutionScale);let xt=M.getRenderTarget(),pt=M.getActiveCubeFace(),Ct=M.getActiveMipmapLevel();M.setRenderTarget(et),M.getClearColor(k),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),zt&&Mt.render(z);let Dt=M.toneMapping;M.toneMapping=En;let wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),Ht===!0&&rt.setGlobalState(M.clippingPlanes,V),zs(_,z,V),Pt.updateMultisampleRenderTarget(et),Pt.updateRenderTargetMipmap(et),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ne=0,pe=N.length;ne<pe;ne++){let le=N[ne],re=le.object,At=le.geometry,ue=le.material,Kt=le.group;if(ue.side===un&&re.layers.test(V.layers)){let Oe=ue.side;ue.side=Ee,ue.needsUpdate=!0,ll(re,z,V,At,ue,Kt),ue.side=Oe,ue.needsUpdate=!0,Xt=!0}}Xt===!0&&(Pt.updateMultisampleRenderTarget(et),Pt.updateRenderTargetMipmap(et))}M.setRenderTarget(xt,pt,Ct),M.setClearColor(k,Y),wt!==void 0&&(V.viewport=wt),M.toneMapping=Dt}function zs(_,N,z){let V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,et=_.length;F<et;F++){let ut=_[F],xt=ut.object,pt=ut.geometry,Ct=ut.group,Dt=ut.material;Dt.allowOverride===!0&&V!==null&&(Dt=V),xt.layers.test(z.layers)&&ll(xt,N,z,pt,Dt,Ct)}}function ll(_,N,z,V,F,et){_.onBeforeRender(M,N,z,V,F,et),_.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),F.onBeforeRender(M,N,z,V,_,et),F.transparent===!0&&F.side===un&&F.forceSinglePass===!1?(F.side=Ee,F.needsUpdate=!0,M.renderBufferDirect(z,N,V,F,_,et),F.side=_n,F.needsUpdate=!0,M.renderBufferDirect(z,N,V,F,_,et),F.side=un):M.renderBufferDirect(z,N,V,F,_,et),_.onAfterRender(M,N,z,V,F,et)}function ks(_,N,z){N.isScene!==!0&&(N=_t);let V=st.get(_),F=d.state.lights,et=d.state.shadowsArray,ut=F.state.version,xt=q.getParameters(_,F.state,et,N,z),pt=q.getProgramCacheKey(xt),Ct=V.programs;V.environment=_.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(_.isMeshStandardMaterial?$t:se).get(_.envMap||V.environment),V.envMapRotation=V.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Ct===void 0&&(_.addEventListener("dispose",K),Ct=new Map,V.programs=Ct);let Dt=Ct.get(pt);if(Dt!==void 0){if(V.currentProgram===Dt&&V.lightsStateVersion===ut)return hl(_,xt),Dt}else xt.uniforms=q.getUniforms(_),_.onBeforeCompile(xt,M),Dt=q.acquireProgram(xt,pt),Ct.set(pt,Dt),V.uniforms=xt.uniforms;let wt=V.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(wt.clippingPlanes=rt.uniform),hl(_,xt),V.needsLights=fh(_),V.lightsStateVersion=ut,V.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Dt,V.uniformsList=null,Dt}function cl(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=Yi.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function hl(_,N){let z=st.get(_);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function uh(_,N,z,V,F){N.isScene!==!0&&(N=_t),Pt.resetTextureUnits();let et=N.fog,ut=V.isMeshStandardMaterial?N.environment:null,xt=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Qn,pt=(V.isMeshStandardMaterial?$t:se).get(V.envMap||ut),Ct=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,ne=!!z.morphAttributes.color,pe=En;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pe=M.toneMapping);let le=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=le!==void 0?le.length:0,At=st.get(V),ue=d.state.lights;if(Ht===!0&&(Z===!0||_!==v)){let Re=_===v&&V.id===b;rt.setState(V,_,Re)}let Kt=!1;V.version===At.__version?(At.needsLights&&At.lightsStateVersion!==ue.state.version||At.outputColorSpace!==xt||F.isBatchedMesh&&At.batching===!1||!F.isBatchedMesh&&At.batching===!0||F.isBatchedMesh&&At.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&At.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&At.instancing===!1||!F.isInstancedMesh&&At.instancing===!0||F.isSkinnedMesh&&At.skinning===!1||!F.isSkinnedMesh&&At.skinning===!0||F.isInstancedMesh&&At.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&At.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&At.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&At.instancingMorph===!1&&F.morphTexture!==null||At.envMap!==pt||V.fog===!0&&At.fog!==et||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==rt.numPlanes||At.numIntersection!==rt.numIntersection)||At.vertexAlphas!==Ct||At.vertexTangents!==Dt||At.morphTargets!==wt||At.morphNormals!==Xt||At.morphColors!==ne||At.toneMapping!==pe||At.morphTargetsCount!==re)&&(Kt=!0):(Kt=!0,At.__version=V.version);let Oe=At.currentProgram;Kt===!0&&(Oe=ks(V,N,F));let ci=!1,Be=!1,ji=!1,de=Oe.getUniforms(),Ve=At.uniforms;if(j.useProgram(Oe.program)&&(ci=!0,Be=!0,ji=!0),V.id!==b&&(b=V.id,Be=!0),ci||v!==_){j.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),de.setValue(P,"projectionMatrix",_.projectionMatrix),de.setValue(P,"viewMatrix",_.matrixWorldInverse);let Le=de.map.cameraPosition;Le!==void 0&&Le.setValue(P,ft.setFromMatrixPosition(_.matrixWorld)),W.logarithmicDepthBuffer&&de.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&de.setValue(P,"isOrthographic",_.isOrthographicCamera===!0),v!==_&&(v=_,Be=!0,ji=!0)}if(F.isSkinnedMesh){de.setOptional(P,F,"bindMatrix"),de.setOptional(P,F,"bindMatrixInverse");let Re=F.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),de.setValue(P,"boneTexture",Re.boneTexture,Pt))}F.isBatchedMesh&&(de.setOptional(P,F,"batchingTexture"),de.setValue(P,"batchingTexture",F._matricesTexture,Pt),de.setOptional(P,F,"batchingIdTexture"),de.setValue(P,"batchingIdTexture",F._indirectTexture,Pt),de.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&de.setValue(P,"batchingColorTexture",F._colorsTexture,Pt));let Ge=z.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&nt.update(F,z,Oe),(Be||At.receiveShadow!==F.receiveShadow)&&(At.receiveShadow=F.receiveShadow,de.setValue(P,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ve.envMap.value=pt,Ve.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Ve.envMapIntensity.value=N.environmentIntensity),Be&&(de.setValue(P,"toneMappingExposure",M.toneMappingExposure),At.needsLights&&dh(Ve,ji),et&&V.fog===!0&&Q.refreshFogUniforms(Ve,et),Q.refreshMaterialUniforms(Ve,V,H,$,d.state.transmissionRenderTarget[_.id]),Yi.upload(P,cl(At),Ve,Pt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Yi.upload(P,cl(At),Ve,Pt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&de.setValue(P,"center",F.center),de.setValue(P,"modelViewMatrix",F.modelViewMatrix),de.setValue(P,"normalMatrix",F.normalMatrix),de.setValue(P,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Re=V.uniformsGroups;for(let Le=0,Go=Re.length;Le<Go;Le++){let Wn=Re[Le];kt.update(Wn,Oe),kt.bind(Wn,Oe)}}return Oe}function dh(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function fh(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(_,N,z){let V=st.get(_);V.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),st.get(_.texture).__webglTexture=N,st.get(_.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,N){let z=st.get(_);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};let ph=P.createFramebuffer();this.setRenderTarget=function(_,N=0,z=0){D=_,T=N,R=z;let V=!0,F=null,et=!1,ut=!1;if(_){let pt=st.get(_);if(pt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(pt.__webglFramebuffer===void 0)Pt.setupRenderTarget(_);else if(pt.__hasExternalTextures)Pt.rebindTextures(_,st.get(_.texture).__webglTexture,st.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let wt=_.depthTexture;if(pt.__boundDepthTexture!==wt){if(wt!==null&&st.has(wt)&&(_.width!==wt.image.width||_.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pt.setupDepthRenderbuffer(_)}}let Ct=_.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ut=!0);let Dt=st.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Dt[N])?F=Dt[N][z]:F=Dt[N],et=!0):_.samples>0&&Pt.useMultisampledRTT(_)===!1?F=st.get(_).__webglMultisampledFramebuffer:Array.isArray(Dt)?F=Dt[z]:F=Dt,C.copy(_.viewport),U.copy(_.scissor),B=_.scissorTest}else C.copy(gt).multiplyScalar(H).floor(),U.copy(Nt).multiplyScalar(H).floor(),B=Wt;if(z!==0&&(F=ph),j.bindFramebuffer(P.FRAMEBUFFER,F)&&V&&j.drawBuffers(_,F),j.viewport(C),j.scissor(U),j.setScissorTest(B),et){let pt=st.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,pt.__webglTexture,z)}else if(ut){let pt=N;for(let Ct=0;Ct<_.textures.length;Ct++){let Dt=st.get(_.textures[Ct]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ct,Dt.__webglTexture,z,pt)}}else if(_!==null&&z!==0){let pt=st.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pt.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(_,N,z,V,F,et,ut,xt=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=st.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ut!==void 0&&(pt=pt[ut]),pt){j.bindFramebuffer(P.FRAMEBUFFER,pt);try{let Ct=_.textures[xt],Dt=Ct.format,wt=Ct.type;if(!W.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-V&&z>=0&&z<=_.height-F&&(_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt),P.readPixels(N,z,V,F,St.convert(Dt),St.convert(wt),et))}finally{let Ct=D!==null?st.get(D).__webglFramebuffer:null;j.bindFramebuffer(P.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(_,N,z,V,F,et,ut,xt=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=st.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ut!==void 0&&(pt=pt[ut]),pt)if(N>=0&&N<=_.width-V&&z>=0&&z<=_.height-F){j.bindFramebuffer(P.FRAMEBUFFER,pt);let Ct=_.textures[xt],Dt=Ct.format,wt=Ct.type;if(!W.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Xt),P.bufferData(P.PIXEL_PACK_BUFFER,et.byteLength,P.STREAM_READ),_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt),P.readPixels(N,z,V,F,St.convert(Dt),St.convert(wt),0);let ne=D!==null?st.get(D).__webglFramebuffer:null;j.bindFramebuffer(P.FRAMEBUFFER,ne);let pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await bc(P,pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Xt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,et),P.deleteBuffer(Xt),P.deleteSync(pe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,N=null,z=0){let V=Math.pow(2,-z),F=Math.floor(_.image.width*V),et=Math.floor(_.image.height*V),ut=N!==null?N.x:0,xt=N!==null?N.y:0;Pt.setTexture2D(_,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,ut,xt,F,et),j.unbindTexture()};let mh=P.createFramebuffer(),gh=P.createFramebuffer();this.copyTextureToTexture=function(_,N,z=null,V=null,F=0,et=null){et===null&&(F!==0?(Ci("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=F,F=0):et=0);let ut,xt,pt,Ct,Dt,wt,Xt,ne,pe,le=_.isCompressedTexture?_.mipmaps[et]:_.image;if(z!==null)ut=z.max.x-z.min.x,xt=z.max.y-z.min.y,pt=z.isBox3?z.max.z-z.min.z:1,Ct=z.min.x,Dt=z.min.y,wt=z.isBox3?z.min.z:0;else{let Ge=Math.pow(2,-F);ut=Math.floor(le.width*Ge),xt=Math.floor(le.height*Ge),_.isDataArrayTexture?pt=le.depth:_.isData3DTexture?pt=Math.floor(le.depth*Ge):pt=1,Ct=0,Dt=0,wt=0}V!==null?(Xt=V.x,ne=V.y,pe=V.z):(Xt=0,ne=0,pe=0);let re=St.convert(N.format),At=St.convert(N.type),ue;N.isData3DTexture?(Pt.setTexture3D(N,0),ue=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Pt.setTexture2DArray(N,0),ue=P.TEXTURE_2D_ARRAY):(Pt.setTexture2D(N,0),ue=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let Kt=P.getParameter(P.UNPACK_ROW_LENGTH),Oe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ci=P.getParameter(P.UNPACK_SKIP_PIXELS),Be=P.getParameter(P.UNPACK_SKIP_ROWS),ji=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,le.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ct),P.pixelStorei(P.UNPACK_SKIP_ROWS,Dt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wt);let de=_.isDataArrayTexture||_.isData3DTexture,Ve=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let Ge=st.get(_),Re=st.get(N),Le=st.get(Ge.__renderTarget),Go=st.get(Re.__renderTarget);j.bindFramebuffer(P.READ_FRAMEBUFFER,Le.__webglFramebuffer),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,Go.__webglFramebuffer);for(let Wn=0;Wn<pt;Wn++)de&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,st.get(_).__webglTexture,F,wt+Wn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,st.get(N).__webglTexture,et,pe+Wn)),P.blitFramebuffer(Ct,Dt,ut,xt,Xt,ne,ut,xt,P.DEPTH_BUFFER_BIT,P.NEAREST);j.bindFramebuffer(P.READ_FRAMEBUFFER,null),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||_.isRenderTargetTexture||st.has(_)){let Ge=st.get(_),Re=st.get(N);j.bindFramebuffer(P.READ_FRAMEBUFFER,mh),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,gh);for(let Le=0;Le<pt;Le++)de?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ge.__webglTexture,F,wt+Le):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ge.__webglTexture,F),Ve?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.__webglTexture,et,pe+Le):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Re.__webglTexture,et),F!==0?P.blitFramebuffer(Ct,Dt,ut,xt,Xt,ne,ut,xt,P.COLOR_BUFFER_BIT,P.NEAREST):Ve?P.copyTexSubImage3D(ue,et,Xt,ne,pe+Le,Ct,Dt,ut,xt):P.copyTexSubImage2D(ue,et,Xt,ne,Ct,Dt,ut,xt);j.bindFramebuffer(P.READ_FRAMEBUFFER,null),j.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ve?_.isDataTexture||_.isData3DTexture?P.texSubImage3D(ue,et,Xt,ne,pe,ut,xt,pt,re,At,le.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(ue,et,Xt,ne,pe,ut,xt,pt,re,le.data):P.texSubImage3D(ue,et,Xt,ne,pe,ut,xt,pt,re,At,le):_.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,et,Xt,ne,ut,xt,re,At,le.data):_.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,et,Xt,ne,le.width,le.height,re,le.data):P.texSubImage2D(P.TEXTURE_2D,et,Xt,ne,ut,xt,re,At,le);P.pixelStorei(P.UNPACK_ROW_LENGTH,Kt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Oe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ci),P.pixelStorei(P.UNPACK_SKIP_ROWS,Be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ji),et===0&&N.generateMipmaps&&P.generateMipmap(ue),j.unbindTexture()},this.initRenderTarget=function(_){st.get(_).__webglFramebuffer===void 0&&Pt.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Pt.setTextureCube(_,0):_.isData3DTexture?Pt.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Pt.setTexture2DArray(_,0):Pt.setTexture2D(_,0),j.unbindTexture()},this.resetState=function(){T=0,R=0,D=null,j.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $e}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var Lo=class extends ti{constructor(){super();let t=new cn;t.deleteAttribute("uv");let e=new en({side:Ee}),n=new en,s=new Rs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Yt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new xs(t,n,6),o=new be;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Yt(t,Ki(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Yt(t,Ki(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new Yt(t,Ki(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Yt(t,Ki(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Yt(t,Ki(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Yt(t,Ki(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ki(i){return new Es({color:0,emissive:16777215,emissiveIntensity:i})}var $c=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,Uo=class{constructor(t=Math.random){this.random=t;Ut(this,"blinkProgress",0);Ut(this,"gaze",new vt);Ut(this,"phase","open");Ut(this,"elapsed",0);Ut(this,"duration",0);Ut(this,"gazeTime",0);Ut(this,"doublePending",!1);Ut(this,"reduced",!1);this.reset()}between(t,e){return t+(e-t)*this.random()}enter(t,e){this.phase=t,this.duration=e,this.elapsed=0}reset(){this.blinkProgress=0,this.doublePending=!1,this.gazeTime=0,this.gaze.set(0,0),this.enter("open",this.between(2,5))}update(t,e,n){if(e){this.reduced||this.reset(),this.reduced=!0;return}this.reduced=!1;let s=Number.isFinite(t)?Math.max(0,Math.min(t,.1)):0;this.gazeTime+=s;let r=1-Math.exp(-s*3),a=Math.sin(this.gazeTime*.77)*.09+Math.sin(this.gazeTime*1.31)*.025+Math.max(-1,Math.min(1,n.x))*.08,o=Math.sin(this.gazeTime*.63)*.05+Math.max(-1,Math.min(1,n.y))*.05;for(this.gaze.lerp(new vt(a,o),r);s>0;){let l=Math.min(s,this.duration-this.elapsed);if(this.elapsed+=l,s-=l,this.elapsed<this.duration)break;switch(this.phase){case"open":this.doublePending=this.random()<.2,this.enter("closing",this.between(.08,.12));break;case"double-gap":this.enter("closing",this.between(.08,.12));break;case"closing":this.enter("closed",this.between(.04,.08));break;case"closed":this.enter("opening",this.between(.1,.15));break;case"opening":this.doublePending?(this.doublePending=!1,this.enter("double-gap",this.between(.1,.18))):this.enter("open",this.between(2,5));break}}let c=this.elapsed/this.duration;this.blinkProgress=this.phase==="closing"?$c(c):this.phase==="closed"?1:this.phase==="opening"?1-$c(c):0}};var Bs=new L;function Ke(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Bs.copy(t),Bs[n]=0,Bs.normalize();let l=.5*a/(a+o),u=1-Bs.angleTo(i)/c;return Math.sign(Bs[e])===1?u*l:o/(a+o)+l+l*(1-u)}var No=class i extends cn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new L,l=new L,u=new L(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,y=new L,m=.5/a;for(let d=0,S=0;d<h.length;d+=3,S+=2)switch(c.fromArray(h,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[d+0]=u.x*Math.sign(c.x)+l.x*r,h[d+1]=u.y*Math.sign(c.y)+l.y*r,h[d+2]=u.z*Math.sign(c.z)+l.z*r,f[d+0]=l.x,f[d+1]=l.y,f[d+2]=l.z,Math.floor(d/g)){case 0:y.set(1,0,0),p[S+0]=Ke(y,l,"z","y",r,n),p[S+1]=1-Ke(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),p[S+0]=1-Ke(y,l,"z","y",r,n),p[S+1]=1-Ke(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),p[S+0]=1-Ke(y,l,"x","z",r,t),p[S+1]=Ke(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),p[S+0]=1-Ke(y,l,"x","z",r,t),p[S+1]=1-Ke(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),p[S+0]=1-Ke(y,l,"x","y",r,t),p[S+1]=1-Ke(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),p[S+0]=Ke(y,l,"x","y",r,t),p[S+1]=1-Ke(y,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var th="data:image/webp;base64,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";var Gm=[{id:"tro-ly-ao",label:"Tr\u1EE3 l\xFD \u1EA3o",shell:{color:"#f8fbff",roughness:.3,metalness:0,clearcoat:1},accent:{color:"#3f93e6",roughness:.32,metalness:.05},accentSoft:"#8fc8f5",joint:{color:"#1f2d42",roughness:.45,metalness:.25},belt:"#1f2d42",visor:"#05080e",eyes:{core:"#a9dcff",led:"#7cc6f7",deep:"#4a9fe6",size:[.105,.175],spacing:.27}},{id:"navy-gold",label:"Navy & Gold",shell:{color:"#f3f4f6",roughness:.22,metalness:0,clearcoat:1},accent:{color:"#1b2a5c",roughness:.3,metalness:.2},accentSoft:"#d6b25a",joint:{color:"#2a2f3a",roughness:.35,metalness:.5},belt:"#d6b25a",visor:"#03050b",eyes:{core:"#ffffff",led:"#cfe9ff",deep:"#8dc6ff",size:[.13,.13],spacing:.28},trim:"#d9a440",trimIntensity:.95},{id:"graphite-tech",label:"Graphite Tech",shell:{color:"#3a4049",roughness:.38,metalness:.55,clearcoat:.6},accent:{color:"#2f7dff",roughness:.25,metalness:.3},accentSoft:"#5fe1ff",joint:{color:"#14171c",roughness:.4,metalness:.6},belt:"#14171c",visor:"#010204",eyes:{core:"#e6fdff",led:"#5fe1ff",deep:"#1aa8ff",size:[.17,.055],spacing:.29},trim:"#38c8ff"},{id:"ceramic-minimal",label:"Ceramic Minimal",shell:{color:"#f2f1ee",roughness:.55,metalness:0,clearcoat:.25},accent:{color:"#d9dce1",roughness:.5,metalness:0},accentSoft:"#c4c9d1",joint:{color:"#8a929e",roughness:.45,metalness:.2},belt:"#c4c9d1",visor:"#0b0d11",eyes:{core:"#d9eeff",led:"#9fd0ff",deep:"#6aaee8",size:[.09,.15],spacing:.25}},{id:"hiep-phat-brand",label:"Hi\u1EC7p Ph\xE1t Brand",shell:{color:"#ffffff",roughness:.26,metalness:0,clearcoat:1},accent:{color:"#2b26fb",roughness:.3,metalness:.05},accentSoft:"#faec1a",joint:{color:"#2d3489",roughness:.4,metalness:.2},belt:"#ea1e24",visor:"#060a1c",eyes:{core:"#d8ecff",led:"#6fb6ff",deep:"#2b6bff",size:[.12,.14],spacing:.27},trim:"#4a6bff"}],eh=Gm.find(i=>i.id==="navy-gold");var Oo=class Oo{constructor(t=eh){this.theme=t;Ut(this,"group",new ge);Ut(this,"head",new ge);Ut(this,"torso",new ge);Ut(this,"arms",[new ge,new ge]);Ut(this,"elbows",[new ge,new ge]);Ut(this,"wrists",[new ge,new ge]);Ut(this,"legs",[new ge,new ge]);Ut(this,"eyes",[]);Ut(this,"eyeMotion",new Uo);Ut(this,"expression","happy");Ut(this,"waveTime",-1);Ut(this,"shell");Ut(this,"accent");Ut(this,"accentSoft");Ut(this,"jointMat");this.shell=new Fn({...t.shell,clearcoatRoughness:.12}),this.accent=new Fn({...t.accent,clearcoat:.7,clearcoatRoughness:.25}),this.accentSoft=new Fn({color:t.accentSoft,metalness:.05,roughness:.35,clearcoat:.5}),this.jointMat=new en(t.joint);let e=(S,E,M,A=this.shell,T=.1)=>{let R=new Yt(new No(E[0],E[1],E[2],5,T),A);return R.position.set(M[0],M[1],M[2]),R.castShadow=!0,R.receiveShadow=!0,S.add(R),R},n=(S,E,M,A=this.jointMat)=>{let T=new Yt(new Ui(E,32,20),A);return T.position.set(M[0],M[1],M[2]),T.castShadow=!0,S.add(T),T},s=(S,E,M,A,T=this.jointMat)=>{let R=new Yt(new Ms(E,E,M,40),T);return R.position.set(A[0],A[1],A[2]),R.castShadow=!0,S.add(R),R},r=(S,E,M,A,T=this.shell)=>{let R=new Yt(new _s(E,M,8,24),T);return R.position.set(A[0],A[1],A[2]),R.castShadow=!0,S.add(R),R};this.group.add(this.head,this.torso,...this.arms,...this.legs),this.group.scale.z=1.18,this.torso.scale.z=1.2,this.head.position.y=3.51;let a=new Ui(1,64,40),o=a.attributes.position,c=S=>Math.sign(S)*Math.abs(S)**(2/2.4);for(let S=0;S<o.count;S++)o.setXYZ(S,c(o.getX(S)),.91*c(o.getY(S)),.84*c(o.getZ(S)));a.computeVertexNormals();let l=new Yt(a,this.shell);this.head.add(l),l.castShadow=!0;let u=(S,E)=>.84*Math.max(0,1-Math.abs(S)**2.4-Math.abs(E/.91)**2.4)**(1/2.4),h=(S,E,M,A,T=-.07,R=0)=>{let D=[R,T,u(R,T)+M],b=[],v=64,C=12;for(let k=1;k<=C;k++)for(let Y=0;Y<v;Y++){let G=Y/v*Math.PI*2,$=R+S*.5*k/C*Math.sign(Math.cos(G))*Math.abs(Math.cos(G))**.5,H=E*.5*k/C*Math.sign(Math.sin(G))*Math.abs(Math.sin(G))**.5+T;D.push($,H,u($,H)+M);let ot=1+(k-1)*v+Y,lt=1+(k-1)*v+(Y+1)%v;if(k===1)b.push(0,ot,lt);else{let gt=ot-v,Nt=lt-v;b.push(gt,ot,lt,gt,lt,Nt)}}let U=new Ie;U.setAttribute("position",new oe(D,3)),U.setIndex(b),U.computeVertexNormals();let B=new Yt(U,A);return this.head.add(B),B};t.trim&&h(1.6,1.18,.009,new en({color:t.trim,emissive:t.trim,emissiveIntensity:t.trimIntensity??1.4,toneMapped:!1}));let f=new Fn({color:t.visor,metalness:.1,roughness:.15,clearcoat:1,clearcoatRoughness:.04});h(1.52,1.1,.012,f);for(let S of[-1,1]){let E=S*t.eyes.spacing,M=-.03,A=new Mn(2.4,2.4,24,24),T=A.attributes.position;for(let U=0;U<T.count;U++){let B=T.getX(U)*t.eyes.size[0],k=T.getY(U)*t.eyes.size[1];T.setXYZ(U,B,k,u(E+B,M+k)-u(E,M)+.024)}A.computeVertexNormals();let R=new De({toneMapped:!1,transparent:!0,depthWrite:!1,uniforms:{closure:{value:0},gaze:{value:this.eyeMotion.gaze},core:{value:new Ft(t.eyes.core)},led:{value:new Ft(t.eyes.led)},deep:{value:new Ft(t.eyes.deep)}},vertexShader:"varying vec2 eyeUv; void main(){ eyeUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
          varying vec2 eyeUv;
          uniform float closure;
          uniform vec2 gaze;
          uniform vec3 core, led, deep;
          void main(){
            // Soft pill-shaped screen eyes; the whole shape drifts with the gaze.
            vec2 p=(eyeUv*2.0-1.0)*1.2-gaze*.9;
            float height=mix(1.0,.08,closure);
            float curve=closure*.18*(1.0-p.x*p.x);
            vec2 shape=vec2(p.x,(p.y+curve)/height);
            float edge=length(shape);
            float aa=max(fwidth(edge),.002);
            float fill=1.0-smoothstep(1.0-aa,1.0+aa,edge);
            // Bright core fading to saturated blue at the rim, brighter at the top.
            vec3 color=mix(core,led,smoothstep(-.6,.2,-p.y));
            color=mix(color,deep,smoothstep(.8,1.0,edge)*.6);
            float glint=1.0-smoothstep(.1,.16,length((p-vec2(-.3,.5))*vec2(1.0,1.3)));
            color=mix(color,vec3(.92,.97,1.0),glint*.7*(1.0-closure));
            // Soft halo instead of a bloom pass.
            float outside=max(0.0,edge-1.0)*height;
            float halo=exp(-pow(outside/.07,2.0))*.25;
            halo*=1.0-smoothstep(1.05,1.18,abs(p.x));
            float alpha=max(fill,halo);
            color=mix(led,color,fill);
            if(alpha<.005) discard;
            gl_FragColor=vec4(color,alpha);
            #include <colorspace_fragment>
          }`}),D=new Yt(A,R);D.name=S<0?"eye-left":"eye-right",D.position.set(E,M,u(E,M)),this.head.add(D),this.eyes.push(D);let b=s(this.head,.31,.16,[S*.96,-.04,-.04],this.accent);b.rotation.z=Math.PI/2;let v=s(this.head,.23,.08,[S*1.05,-.04,-.04],this.accentSoft);v.rotation.z=Math.PI/2;let C=s(this.head,.15,.06,[S*1.075,-.04,-.04],this.accent);C.rotation.z=Math.PI/2}this.torso.position.y=2.04,s(this.torso,.16,.32,[0,.56,0],this.jointMat),e(this.torso,[1.14,.96,.74],[0,0,0],this.shell,.35),e(this.torso,[1,.13,.66],[0,-.38,0],new en({color:t.belt,roughness:.4,metalness:.2}),.06);let p=s(this.torso,.3,.04,[0,.07,.365],this.accent);p.rotation.x=Math.PI/2;let g=new $n({color:"#2b26fb",toneMapped:!1});typeof document<"u"&&new ws().load(th,S=>{S.colorSpace=Pe,g.map=S,g.color.set("#ffffff"),g.needsUpdate=!0});let y=new Yt(new bs(.25,48),g);y.position.set(0,.07,.387),this.torso.add(y),s(this.group,.26,.22,[0,1.46,0],this.jointMat),e(this.group,[.88,.34,.76],[0,1.3,0],this.shell,.16);for(let S of[-1,1])e(this.group,[.1,.26,.52],[S*.44,1.3,0],this.accent,.045);let m=(S,E,M,A=0,T=this.jointMat)=>n(S,E,[0,M,A],T),d=(S,E,M,A=0)=>{m(S,E,M,A,this.accent);let T=new Yt(new Ss(E*.98,E*.16,12,40),this.jointMat);T.position.set(0,M,A),T.rotation.y=Math.PI/2,S.add(T)};for(let S=0;S<2;S++){let E=S===0?-1:1,M=this.arms[S];M.position.set(E*.72,2.32,0),M.rotation.z=E*.13,m(M,.23,0,0,this.accent),r(M,.17,.18,[0,-.29,0]);let A=this.elbows[S];A.position.y=-.56,M.add(A),d(A,.14,0),r(A,.175,.16,[0,-.25,.01]),s(A,.18,.06,[0,-.36,.01],this.accent);let T=this.wrists[S];T.position.y=-.505,A.add(T),n(T,.085,[0,0,0],this.jointMat),e(T,[.27,.21,.2],[0,-.14,.01],this.shell,.095);let R=e(T,[.17,.13,.025],[0,-.14,-.09],this.accentSoft,.025);R.name="palm";for(let v=0;v<3;v++){let C=(v-1)*.072;r(T,.036,.1,[C,-.29,0])}let D=r(T,.045,.08,[-E*.15,-.16,.07]);D.rotation.z=-E*.55;let b=this.legs[S];b.position.set(E*.28,1.18,0),m(b,.16,0),r(b,.22,.08,[0,-.25,0]),d(b,.18,-.48,.02),r(b,.22,.14,[E*.02,-.72,0]),s(b,.225,.08,[E*.02,-.88,0],this.accent),e(b,[.54,.27,.74],[E*.03,-1,.12],this.shell,.12),e(b,[.54,.08,.74],[E*.03,-1.12,.12],this.jointMat,.035)}}get isWaving(){return this.waveTime>=0}wave(){return this.isWaving?!1:(this.waveTime=0,!0)}setGreetingPose(t,e=0,n=t){let s=qt.smootherstep(e,.5,.68)*(1-qt.smootherstep(e,1.5,1.68)),r=(e-.55)*Math.PI*2*2.2,a=1-qt.clamp((e-.55)/1.1,0,1)*.35,o=Math.sin(r)*s*a,c=Math.sin(r-.7)*s*a;this.arms[1].rotation.set(-t*.24,0,.13+t*(.98+c*.06)),this.elbows[1].rotation.set(-n*.08,n*Math.PI,n*(1.57+o*.28),"ZXY"),this.wrists[1].rotation.set(0,0,0)}greetingBody(t){let e=qt.smootherstep(t,0,.45)*(1-qt.smootherstep(t,1.6,2.2)),n=-Math.sin(qt.clamp(t/.22,0,1)*Math.PI)*.035,s=Math.sin(qt.clamp((t-.22)/.4,0,1)*Math.PI)*.05;this.group.position.y+=n+s,this.group.rotation.z=-e*.045,this.head.rotation.z+=e*.14+Math.sin((t-.55)*Math.PI*2*1.1)*e*.03,this.arms[0].rotation.z-=e*.08}setBlink(t){let e=qt.clamp(t,0,1);this.eyes.forEach(n=>{n.material.uniforms.closure.value=e})}get blinkProgress(){return this.eyes[0].material.uniforms.closure.value}setExpression(t){this.expression=t}resetPose(){this.eyeMotion.reset(),this.setBlink(0),this.waveTime=-1,this.group.position.y=0,this.group.rotation.set(0,0,0),this.legs.forEach(t=>t.rotation.set(0,0,0)),this.head.rotation.set(0,0,0),this.arms.forEach((t,e)=>t.rotation.set(0,0,e===0?-.13:.13)),this.elbows.forEach(t=>t.rotation.set(0,0,0)),this.wrists.forEach(t=>t.rotation.set(0,0,0)),this.setExpression("happy")}update(t,e,n,s,r=!1){let a=1-Math.exp(-t*5);if(this.group.position.y=s?0:Math.sin(e*1.8)*.025,this.head.rotation.y=qt.lerp(this.head.rotation.y,s?0:n.x*.16,a),this.head.rotation.x=qt.lerp(this.head.rotation.x,s?0:-n.y*.09,a),this.head.rotation.z=s?0:Math.sin(e*.9)*.035,this.eyeMotion.update(t,s,n),this.setBlink(this.eyeMotion.blinkProgress),this.waveTime>=0){this.waveTime+=t;let c=this.waveTime,l=Oo.WAVE_SECONDS,u=qt.smootherstep(c,0,.58)*(1-qt.smootherstep(c,l-.6,l)),h=qt.smootherstep(c,0,.72)*(1-qt.smootherstep(c,l-.72,l));this.setGreetingPose(u,c,h),c>=l&&(this.waveTime=-1,this.setGreetingPose(0),this.group.rotation.z=0)}else this.arms[1].rotation.z=.13+(s?0:Math.sin(e*1.8)*.025);this.arms[0].rotation.z=-.13-(s?0:Math.sin(e*1.8)*.025),this.waveTime>=0&&!s&&this.greetingBody(this.waveTime);let o=r&&!s?Math.sin(e*8)*.42:0;this.legs.forEach((c,l)=>c.rotation.x=qt.lerp(c.rotation.x,l===0?o:-o,a)),this.arms[0].rotation.x=qt.lerp(this.arms[0].rotation.x,-o*.75,a),this.isWaving||(this.arms[1].rotation.x=qt.lerp(this.arms[1].rotation.x,o*.75,a)),r&&!s&&(this.group.position.y=Math.abs(Math.sin(e*8))*.055)}};Ut(Oo,"WAVE_SECONDS",2.25);var Fo=Oo;var Bo='<svg class="hpo-robot-fallback" viewBox="0 0 140 200" aria-hidden="true"><g fill="none" stroke-linecap="round"><path d="M50 152v30m40-30v30M34 110l-12 34m96-34 12 34" stroke="#d5dbe5" stroke-width="19"/><path d="M50 152v30m40-30v30M34 110l-12 34m96-34 12 34" stroke="#f3f4f6" stroke-width="15"/></g><g fill="#1b2a5c"><rect x="40" y="172" width="20" height="7" rx="3.5"/><rect x="80" y="172" width="20" height="7" rx="3.5"/></g><g fill="#f3f4f6" stroke="#d5dbe5" stroke-width="2"><rect x="37" y="98" width="66" height="52" rx="22"/><rect x="18" y="20" width="104" height="80" rx="36"/></g><rect x="26" y="29" width="88" height="62" rx="25" fill="#d9a440"/><rect x="28" y="31" width="84" height="58" rx="23" fill="#03050b"/><g fill="#eef7ff"><circle cx="55" cy="58" r="8"/><circle cx="85" cy="58" r="8"/></g><g fill="#1b2a5c"><rect x="10" y="44" width="10" height="28" rx="5"/><rect x="120" y="44" width="10" height="28" rx="5"/><circle cx="34" cy="106" r="9"/><circle cx="106" cy="106" r="9"/><circle cx="70" cy="120" r="13"/></g><circle cx="70" cy="120" r="8" fill="#d6b25a"/><rect x="40" y="138" width="60" height="7" rx="3.5" fill="#d6b25a"/></svg>',Ji=class{constructor(t,e){this.host=t;Ut(this,"renderer");Ut(this,"scene",new ti);Ut(this,"camera",new Me(35,1,.1,60));Ut(this,"robot");Ut(this,"lost",!1);Ut(this,"onRestore",()=>{});Ut(this,"observer");Ut(this,"events",new AbortController);Ut(this,"shadow");Ut(this,"environment");t.innerHTML=`${Bo}<canvas aria-hidden="true"></canvas>`;let n=t.querySelector("canvas");this.renderer=new Po({canvas:n,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.toneMapping=kr,this.renderer.toneMappingExposure=.95,this.camera.position.set(0,2.25,10),this.camera.lookAt(0,1.95,0),this.robot=new Fo(e);let s=new De({transparent:!0,depthWrite:!1,uniforms:{strength:{value:.4}},vertexShader:"varying vec2 shadowUv; void main() { shadowUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 shadowUv; uniform float strength; void main() { float r=length((shadowUv-.5)*2.0); float alpha=pow(1.0-smoothstep(0.0,1.0,r),1.3)*strength; gl_FragColor=vec4(.06,.11,.25,alpha); }"});this.shadow=new Yt(new Mn(2.55,1.85),s),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.set(.1,-.015,.1),this.scene.add(this.shadow);let r=new qi(this.renderer);this.environment=r.fromScene(new Lo,.04).texture,r.dispose(),this.scene.environment=this.environment,this.scene.environmentIntensity=.9,this.scene.add(this.robot.group,new As("#eef6ff","#8a9bb5",1.4));let a=new Oi("#fff6ea",2.6);a.position.set(-3,7,5);let o=new Oi("#8fbaff",2.2);o.position.set(4,4,-3),this.scene.add(a,o),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),n.addEventListener("webglcontextlost",c=>{c.preventDefault(),this.lost=!0,t.classList.remove("is-ready")},{signal:this.events.signal}),n.addEventListener("webglcontextrestored",()=>{this.lost=!1,this.resize(),t.classList.add("is-ready"),this.onRestore()},{signal:this.events.signal}),this.resize(),t.classList.add("is-ready")}resize(){let t=this.host.clientWidth,e=this.host.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.render())}render(){let t=Math.max(0,this.robot.group.position.y);this.shadow.scale.setScalar(1+t*2),this.shadow.material.uniforms.strength.value=.4-t*.6,this.lost||this.renderer.render(this.scene,this.camera)}dispose(){this.events.abort(),this.observer.disconnect();let t=new Set,e=new Set;this.scene.traverse(n=>{n instanceof Yt&&(t.add(n.geometry),(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>e.add(s)))}),t.forEach(n=>n.dispose()),e.forEach(n=>{Object.values(n).forEach(s=>{s instanceof Se&&s.dispose()}),n.dispose()}),this.environment.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.host.classList.remove("is-ready"),this.host.innerHTML=Bo}};var zo=class{constructor(){Ut(this,"target",new vt);Ut(this,"heading",0);Ut(this,"walking",!1);Ut(this,"rest",4);Ut(this,"travelTime",0);Ut(this,"speedMultiplier",1);Ut(this,"greetingPending",!1)}snapToEdge(t,e,n){t.set(qt.clamp(t.x,0,e),qt.clamp(t.y,0,n));let s=[t.x,e-t.x,t.y,n-t.y];switch(s.indexOf(Math.min(...s))){case 0:t.x=0;break;case 1:t.x=e;break;case 2:t.y=0;break;case 3:t.y=n;break}}get speed(){return this.speedMultiplier}setSpeed(t){Number.isFinite(t)&&(this.speedMultiplier=qt.clamp(t,.5,2))}pause(t=5){(this.travelTime>0||this.walking)&&(this.greetingPending=!0),this.rest=t,this.travelTime=0,this.walking=!1}takeGreeting(){return!this.greetingPending||this.walking||Math.abs(Math.atan2(Math.sin(this.heading),Math.cos(this.heading)))>.08?!1:(this.greetingPending=!1,!0)}turnToward(t,e){let n=Math.atan2(Math.sin(t-this.heading),Math.cos(t-this.heading));return this.heading+=qt.clamp(n,-e*3.5,e*3.5),Math.abs(n)<.01}update(t,e,n,s,r,a=!0){if(r&&this.walking&&this.pause(),this.walking=!1,t=Math.min(t,.1),r){a&&this.turnToward(0,t);return}if(this.rest>0){this.turnToward(0,t)&&(this.rest-=t);return}this.snapToEdge(e,n,s),n===0?this.target.set(0,e.y<s?s:0):s===0?this.target.set(e.x<n?n:0,0):e.y===0&&e.x<n?this.target.set(n,0):e.x===n&&e.y<s?this.target.set(n,s):e.y===s&&e.x>0?this.target.set(0,s):this.target.set(0,0);let o=this.target.x-e.x,c=this.target.y-e.y,l=Math.hypot(o,c);if(l===0||this.travelTime>=3){this.pause(5);return}let u=Math.atan2(o,c),h=Math.atan2(Math.sin(u-this.heading),Math.cos(u-this.heading));if(this.heading+=qt.clamp(h,-t*3.5,t*3.5),Math.abs(h)>.35)return;let f=Math.min(l,t*60*this.speedMultiplier);f===l?e.copy(this.target):(e.x+=o/l*f,e.y+=c/l*f),this.travelTime+=t,this.walking=!0}};var nh={type:"change"},sl={type:"start"},sh={type:"end"},ko=new Ii,ih=new Xe,Wm=Math.cos(70*qt.DEG2RAD),ve=new L,Fe=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},il=1e-6,Ho=class extends Ps{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:kn.ROTATE,TWO:kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Ye,this._lastTargetPosition=new L,this._quat=new Ye().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bi,this._sphericalDelta=new Bi,this._scale=1,this._panOffset=new L,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new L,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ym.bind(this),this._onPointerDown=Xm.bind(this),this._onPointerUp=qm.bind(this),this._onContextMenu=tg.bind(this),this._onMouseWheel=Jm.bind(this),this._onKeyDown=jm.bind(this),this._onTouchStart=Qm.bind(this),this._onTouchMove=$m.bind(this),this._onMouseDown=Zm.bind(this),this._onMouseMove=Km.bind(this),this._interceptControlDown=eg.bind(this),this._interceptControlUp=ng.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nh),this.update(),this.state=ie.NONE}update(t=null){let e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Fe:n>Math.PI&&(n-=Fe),s<-Math.PI?s+=Fe:s>Math.PI&&(s-=Fe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ve.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ko.origin.copy(this.object.position),ko.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ko.direction))<Wm?this.object.lookAt(this.target):(ih.setFromNormalAndCoplanarPoint(this.object.up,this.target),ko.intersectPlane(ih,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>il||this._lastTargetPosition.distanceToSquared(this.target)>il?(this.dispatchEvent(nh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fe/60*this.autoRotateSpeed*t:Fe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ve.copy(s).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Xm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ym(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sh),this.state=ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Zm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case zn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case zn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(sl)}function Km(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Jm(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(sl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(sh))}function jm(i){this.enabled!==!1&&this._handleKeyDown(i)}function Qm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case kn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case kn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case kn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case kn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(sl)}function $m(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function tg(i){this.enabled!==!1&&i.preventDefault()}function eg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ng(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rh(i,t,e,n,s,r,a,o,c){let l=document.createElement("dialog");l.id="hpo-robot-viewer",l.setAttribute("aria-labelledby","hpo-robot-title"),l.innerHTML=`
    <header class="hpo-viewer-header">
      <div><p class="hpo-eyebrow">HI\u1EC6P PH\xC1T COMPANION</p><h2 id="hpo-robot-title">G\u1EB7p g\u1EE1 robot c\u1EE7a b\u1EA1n</h2></div>
      <button type="button" class="hpo-close" aria-label="\u0110\xF3ng c\u1EEDa s\u1ED5" autofocus>\xD7</button>
    </header>
    <div class="hpo-viewer-body">
      <section class="hpo-model-panel" aria-label="Xem m\xF4 h\xECnh robot 3D">
        <div class="hpo-model-caption"><span>M\xF4 h\xECnh 3D</span><span>360\xB0</span></div>
        <div class="hpo-model-stage" role="img" aria-label="Robot 3D, k\xE9o \u0111\u1EC3 xoay v\xE0 cu\u1ED9n \u0111\u1EC3 thu ph\xF3ng"></div>
        <p class="hpo-model-hint">K\xE9o \u0111\u1EC3 xoay \xB7 Cu\u1ED9n ho\u1EB7c ch\u1EE5m hai ng\xF3n \u0111\u1EC3 thu ph\xF3ng</p>
        <div class="hpo-model-tools" aria-label="\u0110i\u1EC1u khi\u1EC3n m\xF4 h\xECnh">
          <button type="button" data-action="left" aria-label="Xoay sang tr\xE1i">\u21B6</button>
          <button type="button" data-action="right" aria-label="Xoay sang ph\u1EA3i">\u21B7</button>
          <button type="button" data-action="in" aria-label="Ph\xF3ng to">+</button>
          <button type="button" data-action="out" aria-label="Thu nh\u1ECF">\u2212</button>
          <button type="button" data-action="reset">\u0110\u1EB7t l\u1EA1i</button>
          <button type="button" data-action="wave">V\u1EABy tay</button>
        </div>
        <div class="hpo-speed-control">
          <div class="hpo-speed-label"><label for="hpo-robot-speed">T\u1ED1c \u0111\u1ED9 di chuy\u1EC3n</label><output for="hpo-robot-speed" id="hpo-robot-speed-value"></output></div>
          <input id="hpo-robot-speed" type="range" min="0.5" max="2" step="0.1" aria-describedby="hpo-speed-hint">
          <div class="hpo-speed-scale" aria-hidden="true"><span>Ch\u1EADm</span><span>Nhanh</span></div>
          <p id="hpo-speed-hint">\u0110i m\u1ED9t \u0111o\u1EA1n, d\u1EEBng l\u1EA1i v\xE0 nh\xECn b\u1EA1n. T\u1ED1c \u0111\u1ED9 \xE1p d\u1EE5ng khi robot \u0111i d\u1EA1o ngo\xE0i trang.</p>
        </div>
      </section>
      <section class="hpo-chat-panel" aria-labelledby="hpo-chat-title">
        <div class="hpo-chat-heading"><h3 id="hpo-chat-title">Tr\xF2 chuy\u1EC7n c\xF9ng robot</h3><span class="hpo-soon">S\u1EAFp c\xF3</span></div>
        <div class="hpo-chat-messages" role="log" aria-label="Tin nh\u1EAFn">
          <p class="hpo-chat-welcome">Xin ch\xE0o! T\xF4i l\xE0 robot Hi\u1EC7p Ph\xE1t.</p>
          <p>B\u1EA1n c\xF3 th\u1EC3 kh\xE1m ph\xE1 m\xF4 h\xECnh 3D b\xEAn c\u1EA1nh. T\xEDnh n\u0103ng tr\xF2 chuy\u1EC7n s\u1EBD c\xF3 m\u1EB7t t\u1EA1i \u0111\xE2y trong th\u1EDDi gian t\u1EDBi.</p>
        </div>
        <div class="hpo-contact-actions">
          <a class="hpo-enroll-cta" href="https://hpo.edu.vn/dang-ky-hoc/">
            <span>\u0110\u0103ng k\xFD h\u1ECDc</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a class="hpo-call-cta" href="tel:02836362362">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <span>G\u1ECDi t\u1ED5ng \u0111\xE0i 028.36.362.362</span>
          </a>
        </div>
        <div class="hpo-chat-options">
          <label class="hpo-wander-option"><input type="checkbox" checked> Cho robot t\u1EF1 \u0111i d\u1EA1o</label>
          <label class="hpo-visibility-option"><input id="hpo-robot-visible" type="checkbox" checked> Hi\u1EC7n robot tr\xEAn trang</label>
        </div>
        <form class="hpo-chat-form">
          <label for="hpo-chat-input">Tin nh\u1EAFn c\u1EE7a b\u1EA1n</label>
          <div class="hpo-chat-compose"><input id="hpo-chat-input" type="text" placeholder="Tr\xF2 chuy\u1EC7n s\u1EAFp ra m\u1EAFt" disabled><button type="submit" disabled>G\u1EEDi</button></div>
        </form>
      </section>
    </div>`,document.body.append(l);let u=l.querySelector(".hpo-model-stage"),h,f,p="",g=new Audio(t);g.id="hpo-robot-welcome-voice",g.preload="auto",l.append(g);let y=new vt,m=l.querySelector("#hpo-robot-speed"),d=l.querySelector("#hpo-robot-speed-value"),S=l.querySelector("#hpo-robot-visible"),E=()=>{d.value=`${Number(m.value).toFixed(1)}\xD7`,m.setAttribute("aria-valuetext",`${Number(m.value).toFixed(1)} l\u1EA7n t\u1ED1c \u0111\u1ED9 b\xECnh th\u01B0\u1EDDng`)};m.value=String(s),E(),m.addEventListener("input",()=>{E(),r(Number(m.value))}),l.querySelector(".hpo-close").addEventListener("click",()=>l.close());let M=!1,A=T=>{let R=l.getBoundingClientRect();return T.clientX<R.left||T.clientX>R.right||T.clientY<R.top||T.clientY>R.bottom};return l.addEventListener("pointerdown",T=>{M=T.target===l&&A(T)}),l.addEventListener("click",T=>{M&&T.target===l&&A(T)&&l.close()}),l.addEventListener("close",()=>{g.pause(),g.currentTime=0,f?.dispose(),f=void 0,h?.dispose(),h=void 0,document.documentElement.style.overflow=p,i.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false"),(i.hidden?a:i).focus({preventScroll:!0}),e()}),l.querySelector("form").addEventListener("submit",T=>T.preventDefault()),l.querySelector(".hpo-wander-option input").addEventListener("change",T=>{n(!T.target.checked)}),S.addEventListener("change",()=>c(S.checked)),l.querySelector(".hpo-model-tools").addEventListener("click",T=>{let R=T.target.closest("button")?.dataset.action;if(!(!h||!f||!R)){if(R==="reset")f.reset();else if(R==="wave")matchMedia("(prefers-reduced-motion: reduce)").matches?h.robot.setGreetingPose(h.robot.arms[1].rotation.z>1?0:1):h.robot.wave();else{let D=h.camera.position.clone().sub(f.target);R==="left"||R==="right"?D.applyAxisAngle(new L(0,1,0),R==="left"?-.3:.3):D.setLength(qt.clamp(D.length()*(R==="in"?.85:1.15),f.minDistance,f.maxDistance)),h.camera.position.copy(f.target).add(D),f.update()}h.render()}}),{get isOpen(){return l.open},open(){if(!l.open){p=document.documentElement.style.overflow,S.checked=o(),l.showModal(),g.currentTime=0,g.play().catch(()=>{}),document.documentElement.style.overflow="hidden",i.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true");try{h=new Ji(u),f=new Ho(h.camera,h.renderer.domElement),f.target.set(0,1.95,0),f.enablePan=!1,f.minDistance=5,f.maxDistance=17,f.minPolarAngle=.15,f.maxPolarAngle=Math.PI-.15,f.update(),f.saveState(),f.addEventListener("change",()=>h?.render()),h.onRestore=e,l.querySelectorAll("[data-action]").forEach(T=>{T.disabled=!1}),l.querySelector(".hpo-model-hint").textContent="K\xE9o \u0111\u1EC3 xoay \xB7 Cu\u1ED9n ho\u1EB7c ch\u1EE5m hai ng\xF3n \u0111\u1EC3 thu ph\xF3ng"}catch(T){console.warn("Kh\xF4ng th\u1EC3 m\u1EDF m\xF4 h\xECnh 3D.",T),l.querySelector(".hpo-model-hint").textContent="3D kh\xF4ng kh\u1EA3 d\u1EE5ng tr\xEAn tr\xECnh duy\u1EC7t n\xE0y. \u0110ang hi\u1EC3n th\u1ECB h\xECnh thay th\u1EBF.",l.querySelectorAll("[data-action]").forEach(R=>{R.disabled=!0})}e()}},tick(T,R,D){!l.open||!h||h.lost||(h.robot.update(T,R,y,D),h.render())},resetMotion(){h?.robot.resetPose()}}}var oh="data:image/webp;base64,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";var ah="data:image/webp;base64,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";var lh="Xin ch\xE0o! T\xF4i l\xE0 tr\u1EE3 l\xFD AI c\u1EE7a Hi\u1EC7p Ph\xE1t. R\u1EA5t vui \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 b\u1EA1n.",ig=3500,ch=2e3,sg=document.currentScript instanceof HTMLScriptElement?document.currentScript.src:document.baseURI,rg=new URL("../assets/voice-tram-guillaume.mp3",sg).href;function hh(){if(document.getElementById("hpo-robot"))return;let i=document.querySelector(".hpo-digital-hero"),t=!0,e=document.createElement("button");e.id="hpo-robot",e.type="button",e.setAttribute("aria-label",t?"Robot Hi\u1EC7p Ph\xE1t \u2014 nh\u1EA5n \u0111\u1EC3 xem 3D v\xE0 t\u01B0\u01A1ng t\xE1c":"Robot Hi\u1EC7p Ph\xE1t \u2014 nh\u1EA5n \u0111\u1EC3 xem 3D, k\xE9o ho\u1EB7c d\xF9ng ph\xEDm m\u0169i t\xEAn \u0111\u1EC3 di chuy\u1EC3n"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-controls","hpo-robot-viewer"),e.setAttribute("aria-expanded","false"),e.title=t?"Nh\u1EA5n \u0111\u1EC3 xem m\xF4 h\xECnh 3D v\xE0 v\u1EABy tay":"K\xE9o \u0111\u1EC3 di chuy\u1EC3n \xB7 N\xE9m ra ngo\xE0i khung \u0111\u1EC3 \u1EA9n \xB7 Nh\u1EA5n \u0111\u1EC3 xem 3D",e.innerHTML=Bo;let n=document.createElement("button");n.id="hpo-robot-restore",n.type="button",n.className="float-btn",n.setAttribute("aria-label","M\u1EDF h\u1ED9p tho\u1EA1i robot Hi\u1EC7p Ph\xE1t"),n.setAttribute("aria-haspopup","dialog"),n.setAttribute("aria-controls","hpo-robot-viewer"),n.setAttribute("aria-expanded","false"),n.title="M\u1EDF robot Hi\u1EC7p Ph\xE1t",n.innerHTML=`<img class="hpo-robot-head" src="${oh}" alt="" width="64" height="64" decoding="async"><img class="hpo-robot-full" src="${ah}" alt="" width="116" height="240" decoding="async">`;let s=document.createElement("span");s.id="hpo-robot-dock-greeting",s.className="is-hidden",s.textContent=lh,n.append(s),n.setAttribute("aria-describedby",s.id),n.hidden=!0;let r=document.createElement("span");r.id="hpo-robot-greeting",r.textContent=lh,e.setAttribute("aria-describedby",r.id),document.body.append(e,n),document.body.classList.add(i?"hpo-home-robot":"hpo-page-robot");let a=()=>{let W=document.querySelector(".floats");return W?(W.prepend(n),!0):!1};if(!a()){let W=new MutationObserver(()=>{a()&&W.disconnect()});W.observe(document.body,{childList:!0,subtree:!0})}let o=new vt,c=new vt,l=new zo;try{let W=localStorage.getItem("hpo-robot-speed");W!==null&&l.setSpeed(Number(W))}catch{}let u=matchMedia("(prefers-reduced-motion: reduce)"),h,f=0,p=0,g=0,y=!1,m=!1,d=!1,S=0,E=0,M=8,A=8,T=!1,R=0,D=0,b=0,v=0,C,U=!1,B=null,k=o.x,Y=o.y,G=0,$=!1,H=0,ot=!1,lt=!1,gt=matchMedia("(max-width: 600px)"),Nt=gt.matches;try{T=localStorage.getItem("hpo-robot-hidden")==="true"}catch{}let Wt=()=>!T&&!Nt;function jt(){e.hidden=!Wt(),n.hidden=Wt()}jt();let Ht=rh(e,rg,()=>{l.pause(),zt()},W=>{y=W},l.speed,W=>{l.setSpeed(W);try{localStorage.setItem("hpo-robot-speed",String(l.speed))}catch{}},n,()=>!T,W=>Z(W));function Z(W,j){T=!W;try{localStorage.setItem("hpo-robot-hidden",String(T))}catch{}if(window.clearTimeout(R),e.classList.remove("is-throwing-away"),l.pause(),W){if(jt(),!Wt())return J();Et(),o.set(qt.clamp(o.x,0,S),qt.clamp(o.y,0,E)),l.snapToEdge(o,S,E),ft()}else if(j&&!u.matches){n.hidden=!1;let Rt=j.clone();Rt.lengthSq()<1&&Rt.set(1,1),Rt.normalize();let st=Math.max(S,E,b,e.offsetHeight)*2;e.style.setProperty("--hpo-throw-to-x",`${o.x+M+Rt.x*st}px`),e.style.setProperty("--hpo-throw-to-y",`${o.y+A+Rt.y*st}px`),e.style.setProperty("--hpo-throw-rotation",`${qt.clamp(Rt.x*32,-32,32)}deg`),e.classList.add("is-throwing-away"),R=window.setTimeout(()=>{e.hidden=!0,e.classList.remove("is-throwing-away")},u.matches?0:340)}else jt();J()}function J(W=performance.now()){let j=o.x!==k||o.y!==Y;k=o.x,Y=o.y,j&&(G=W+120),$&&H&&W>=H&&Wt()&&!Ht.isOpen&&($=!1,lt=!1,H=0);let Rt=!ot||$||j||W<G||!!C||Ht.isOpen||!Wt()||document.hidden;Rt?B=null:B===null&&(B=W);let st=B!==null&&W-B<ig;st&&!lt&&(lt=!0,!u.matches&&h&&!h.lost&&h.robot.wave()),Rt&&lt&&($=!0,H||(H=W+ch)),B!==null&&!st&&($=!0,H||(H=W+ch)),r.classList.toggle("is-hidden",!st),st?e.setAttribute("aria-describedby",r.id):e.removeAttribute("aria-describedby")}function ft(){if(t){e.style.removeProperty("transform");let j=(document.querySelector(".topbar")?.offsetHeight||0)+(document.getElementById("navbar")?.offsetHeight||0),Rt=matchMedia("(max-width: 1100px)").matches,st=innerWidth<=600?12:16,Pt=window.visualViewport?.height||innerHeight,se=i?Rt?j+i.offsetHeight-e.offsetHeight-st:j+108:innerWidth<=600?Number.POSITIVE_INFINITY:j+Math.max(0,(Pt-j-e.offsetHeight)/2)+40,$t=window.visualViewport?.height||innerHeight,w=matchMedia("(max-width: 600px)").matches&&document.querySelector(".floats")?.offsetHeight||0;e.style.top=`${Math.min(se,$t-w-e.offsetHeight-(i?12:st+8))}px`,e.style.bottom="auto",r.style.removeProperty("left"),r.style.removeProperty("--greeting-tail"),J();return}C||l.snapToEdge(o,S,E),e.style.transform=`translate3d(${o.x+M}px, ${o.y+A}px, 0)`;let W=qt.clamp(o.x+b/2-D/2,0,Math.max(0,v-D-16));r.style.left=`${W-o.x}px`,r.style.setProperty("--greeting-tail",`${qt.clamp(o.x+b/2-W,16,D-16)}px`),J()}function Et(W=!1){if(t){ft();return}let j=window.visualViewport;M=(j?.offsetLeft||0)+8;let Rt=Math.max(0,r.offsetHeight-e.offsetHeight*.1);D=r.offsetWidth,b=e.offsetWidth,v=j?.width||innerWidth,A=(j?.offsetTop||0)+8+Rt,S=Math.max(0,(j?.width||innerWidth)-e.offsetWidth-16),E=Math.max(0,(j?.height||innerHeight)-e.offsetHeight-Rt-16),W&&o.set(0,E),ft()}Et(!0),new ResizeObserver(()=>Et()).observe(e),new ResizeObserver(()=>Et()).observe(r);{i&&new ResizeObserver(()=>Et()).observe(i);let W=()=>{let j=performance.now(),st=scrollY>innerHeight*.25||gt.matches;st!==Nt&&(Nt=st,Nt||($=!1,lt=!1,H=0,G=j+500),jt(),Wt()&&(Et(),zt()),J())};window.addEventListener("scroll",W,{passive:!0}),gt.addEventListener("change",W),W()}window.addEventListener("resize",()=>Et()),window.visualViewport?.addEventListener("resize",()=>Et()),window.visualViewport?.addEventListener("scroll",()=>Et());{try{h=new Ji(e),h.onRestore=zt}catch(W){console.warn("Robot 3D kh\xF4ng kh\u1EA3 d\u1EE5ng; hi\u1EC3n th\u1ECB h\xECnh thay th\u1EBF.",W)}ot=!0}e.append(r),Et(!0),window.setInterval(J,100);function _t(W){let j=Math.min((W-p)/1e3,.05);p=W,g+=j,Ht.isOpen?Ht.tick(j,g,!1):Wt()&&(t||(l.update(j,o,S,E,y||m||d||!!C||!!h?.lost||!Wt(),!C),ft()),h&&!h.lost&&Wt()&&(h.robot.group.rotation.y=t?0:l.heading,!t&&!C&&!h.robot.isWaving&&l.takeGreeting()&&h.robot.wave(),h.robot.update(j,g,c,!1,!t&&l.walking),h.render())),f=requestAnimationFrame(_t)}function zt(){cancelAnimationFrame(f),!document.hidden&&(u.matches?(h?.robot.resetPose(),h?.render(),Ht.resetMotion(),Ht.tick(0,g,!0)):(p=performance.now(),f=requestAnimationFrame(_t)))}e.addEventListener("pointerdown",W=>{t||!W.isPrimary||W.button!==0||C||(U=!1,d=!1,C={id:W.pointerId,x:W.clientX,y:W.clientY,offsetX:W.clientX-o.x-M,offsetY:W.clientY-o.y-A,moved:!1,lastX:W.clientX,lastY:W.clientY,lastTime:performance.now(),velocityX:0,velocityY:0},e.setPointerCapture(W.pointerId),l.pause(),J())}),e.addEventListener("pointermove",W=>{if(C&&W.pointerId===C.id){let j=performance.now(),Rt=Math.max(1,j-C.lastTime),st=(W.clientX-C.lastX)/Rt*1e3,Pt=(W.clientY-C.lastY)/Rt*1e3;if(C.velocityX=C.velocityX*.35+st*.65,C.velocityY=C.velocityY*.35+Pt*.65,C.lastX=W.clientX,C.lastY=W.clientY,C.lastTime=j,!C.moved&&Math.hypot(W.clientX-C.x,W.clientY-C.y)<6)return;C.moved=!0,e.classList.add("is-dragging");let se=W.clientX-C.offsetX-M,$t=W.clientY-C.offsetY-A,w=se-o.x,x=$t-o.y;if(Math.hypot(w,x)>1){let O=Math.atan2(w,x);l.heading+=Math.atan2(Math.sin(O-l.heading),Math.cos(O-l.heading))*.3}o.set(se,$t),ft(),h&&(h.robot.group.rotation.y=l.heading,h.render())}else{let j=e.getBoundingClientRect();c.set((W.clientX-j.left)/j.width*2-1,1-(W.clientY-j.top)/j.height*2)}});function fe(W){if(!C||W&&W.pointerId!==C.id)return;let j=C;if(C=void 0,U=j.moved,e.hasPointerCapture(j.id)&&e.releasePointerCapture(j.id),e.classList.remove("is-dragging"),l.pause(),!j.moved)return;if(W?.type!=="pointerup"){l.snapToEdge(o,S,E),ft();return}let Rt=Math.exp(-(performance.now()-j.lastTime)/140),st=j.velocityX*Rt,Pt=j.velocityY*Rt,se=Math.hypot(st,Pt),$t=o.x+st*.3,w=o.y+Pt*.3,x=o.x<-b*.35||o.x>S+b*.35||o.y<-e.offsetHeight*.35||o.y>E+e.offsetHeight*.35,O=se>=650&&($t<0||$t>S||w<0||w>E);if(x||O){let q=new vt(se>=260?st:o.x-(j.x-j.offsetX-M),se>=260?Pt:o.y-(j.y-j.offsetY-A));Z(!1,q),n.focus({preventScroll:!0})}else l.snapToEdge(o,S,E),ft()}e.addEventListener("pointerup",fe),e.addEventListener("pointercancel",fe),e.addEventListener("lostpointercapture",fe),window.addEventListener("blur",()=>{fe(),m=!1}),e.addEventListener("click",W=>{if(U&&W.detail!==0){U=!1;return}U=!1,Ht.open(),J()});let P=0,Qt=()=>{window.clearTimeout(P),s.classList.add("is-hidden")},Lt=W=>{n.hidden||Ht.isOpen||(s.classList.remove("is-hidden"),window.clearTimeout(P),P=window.setTimeout(Qt,W))};window.setTimeout(()=>Lt(6e3),1200),n.addEventListener("pointerenter",W=>{W.pointerType==="mouse"&&Lt(4e3)}),n.addEventListener("pointerleave",Qt),n.addEventListener("focus",()=>{n.matches(":focus-visible")&&Lt(4e3)}),n.addEventListener("blur",Qt),n.addEventListener("click",()=>{Qt(),Ht.open(),J()}),e.addEventListener("pointerenter",W=>{W.pointerType==="mouse"&&(m=!0)}),e.addEventListener("pointerleave",()=>{m=!1,c.set(0,0)}),e.addEventListener("focus",()=>{d=e.matches(":focus-visible")}),e.addEventListener("blur",()=>{d=!1}),e.addEventListener("keydown",W=>{if(t)return;let j={ArrowLeft:[-24,0],ArrowRight:[24,0],ArrowUp:[0,-24],ArrowDown:[0,24]};if(!j[W.key])return;W.preventDefault(),d=!0;let[Rt,st]=j[W.key];o.x+=Rt,o.y+=st,l.heading=Math.atan2(Rt,st),ft(),h&&(h.robot.group.rotation.y=l.heading,h.render()),l.pause()}),document.addEventListener("visibilitychange",()=>{document.hidden&&fe(),zt()}),u.addEventListener("change",zt),zt()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hh,{once:!0}):hh();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
