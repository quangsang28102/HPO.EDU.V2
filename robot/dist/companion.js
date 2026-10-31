(()=>{var uh=Object.defineProperty;var dh=(i,t,e)=>t in i?uh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ut=(i,t,e)=>dh(i,typeof t!="symbol"?t+"":t,e);var zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dl=0,va=1,Ul=2;var Ma=1,Nl=2,cn=3,yn=0,Ee=1,hn=2,Sn=0,Jn=1,ba=2,Sa=3,Ea=4,Fl=5,Un=100,Ol=101,Bl=102,zl=103,kl=104,Hl=200,Vl=201,Gl=202,Wl=203,cr=204,hr=205,Xl=206,ql=207,Yl=208,Zl=209,Kl=210,Jl=211,jl=212,Ql=213,$l=214,Dr=0,Ur=1,Nr=2,jn=3,Fr=4,Or=5,Br=6,zr=7,kr=0,tc=1,ec=2,En=0,nc=1,ic=2,sc=3,rc=4,oc=5,ac=6,Hr=7;var wa=300,ni=301,ii=302,Vr=303,Gr=304,Is=306,ur=1e3,Dn=1001,dr=1002,Ne=1003,lc=1004;var Ls=1005;var tn=1006,Wr=1007;var Hn=1008;var en=1009,Ta=1010,Aa=1011,zi=1012,Xr=1013,Vn=1014,nn=1015,ki=1016,qr=1017,Yr=1018,Hi=1020,Ra=35902,Ca=35899,Pa=1021,Ia=1022,Ze=1023,Ti=1026,Vi=1027,Zr=1028,Kr=1029,La=1030,Jr=1031;var jr=1033,Ds=33776,Us=33777,Ns=33778,Fs=33779,Qr=35840,$r=35841,to=35842,eo=35843,no=36196,io=37492,so=37496,ro=37808,oo=37809,ao=37810,lo=37811,co=37812,ho=37813,uo=37814,fo=37815,po=37816,mo=37817,go=37818,_o=37819,xo=37820,yo=37821,vo=36492,Mo=36494,bo=36495,So=36283,Eo=36284,wo=36285,To=36286;var as=2300,fr=2301,ar=2302,da=2400,fa=2401,pa=2402;var cc=3200,hc=3201;var Ao=0,uc=1,wn="",Pe="srgb",Qn="srgb-linear",ls="linear",Qt="srgb";var Kn=7680;var ma=519,dc=512,fc=513,pc=514,Da=515,mc=516,gc=517,_c=518,xc=519,ga=35044;var Ua="300 es",$e=2e3,cs=2001;var rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hl=1234567,rs=Math.PI/180,Ai=180/Math.PI;function Gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Na(i,t){return(i%t+t)%t}function fh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ph(i,t,e){return i!==t?(e-i)/(t-i):0}function os(i,t,e){return(1-e)*i+e*t}function mh(i,t,e,n){return os(i,t,1-Math.exp(-e*n))}function gh(i,t=1){return t-Math.abs(Na(i,t*2)-t)}function _h(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vh(i,t){return i+Math.random()*(t-i)}function Mh(i){return i*(.5-Math.random())}function bh(i){i!==void 0&&(hl=i);let t=hl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sh(i){return i*rs}function Eh(i){return i*Ai}function wh(i){return(i&i-1)===0&&i!==0}function Th(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ah(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),d=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*d,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*d,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Jt={DEG2RAD:rs,RAD2DEG:Ai,generateUUID:Gi,clamp:Wt,euclideanModulo:Na,mapLinear:fh,inverseLerp:ph,lerp:os,damp:mh,pingpong:gh,smoothstep:_h,smootherstep:xh,randInt:yh,randFloat:vh,randFloatSpread:Mh,seededRandom:bh,degToRad:Sh,radToDeg:Eh,isPowerOfTwo:wh,ceilPowerOfTwo:Th,floorPowerOfTwo:Ah,setQuaternionFromProperEuler:Rh,normalize:Ce,denormalize:Ei},yt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||c!==f||l!==p||d!==g){let m=1-o,h=c*f+l*p+d*g+u*y,S=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){let A=Math.sqrt(E),w=Math.atan2(A,h*S);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let b=o*S;if(c=c*m+f*b,l=l*m+p*b,d=d*m+g*b,u=u*m+y*b,m===1-o){let A=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=A,l*=A,d*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+d*u+c*p-l*f,t[e+1]=c*g+d*f+l*u-o*p,t[e+2]=l*g+d*p+o*f-c*u,t[e+3]=d*g-o*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),u=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*d*u+l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u+f*p*g;break;case"YZX":this._x=f*d*u+l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u-f*p*g;break;case"XZY":this._x=f*d*u-l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],d=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(d-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+d)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),d=Math.atan2(l,o),u=Math.sin((1-e)*d)/l,f=Math.sin(e*d)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ul.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),d=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*d,this.y=n+c*d+o*l-r*u,this.z=s+c*u+r*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Go.copy(this).projectOnVector(t),this.sub(Go)}reflect(t){return this.sub(Go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Go=new D,ul=new qe,zt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],f=n[2],p=n[5],g=n[8],y=s[0],m=s[3],h=s[6],S=s[1],E=s[4],b=s[7],A=s[2],w=s[5],R=s[8];return r[0]=a*y+o*S+c*A,r[3]=a*m+o*E+c*w,r[6]=a*h+o*b+c*R,r[1]=l*y+d*S+u*A,r[4]=l*m+d*E+u*w,r[7]=l*h+d*b+u*R,r[2]=f*y+p*S+g*A,r[5]=f*m+p*E+g*w,r[8]=f*h+p*b+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],u=d*a-o*l,f=o*c-d*r,p=l*r-a*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*l-d*n)*y,t[2]=(o*n-s*a)*y,t[3]=f*y,t[4]=(d*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wo=new zt;function Fa(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ri(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yc(){let i=Ri("canvas");return i.style.display="block",i}var dl={};function Ci(i){i in dl||(dl[i]=!0,console.warn(i))}function vc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var fl=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ch(){let i={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qn]:{primaries:t,whitePoint:n,transfer:ls,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var Yt=Ch();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hi,pr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hi===void 0&&(hi=Ri("canvas")),hi.width=t.width,hi.height=t.height;let s=hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ri("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xn(e[n]/255)*255):e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ph=0,Pi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xo(s[a].image)):r.push(Xo(s[a]))}else r=Xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ih=0,qo=new D,Se=class i extends rn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=tn,a=Hn,o=Ze,c=en,l=i.DEFAULT_ANISOTROPY,d=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Gi(),this.name="",this.source=new Pi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qo).x}get height(){return this.source.getSize(qo).y}get depth(){return this.source.getSize(qo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ur:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case dr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ur:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case dr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=wa;Se.DEFAULT_ANISOTROPY=1;var jt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],d=c[4],u=c[8],f=c[1],p=c[5],g=c[9],y=c[2],m=c[6],h=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,b=(p+1)/2,A=(h+1)/2,w=(d+f)/4,R=(u+y)/4,I=(g+m)/4;return E>b&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=R/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=I/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(f-d)*(f-d));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-y)/S,this.z=(f-d)/S,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mr=class extends rn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Se(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Pi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends mr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},hs=class extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gr=class extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var an=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),Gs.subVectors(this.max,Qi),ui.subVectors(t.a,Qi),di.subVectors(t.b,Qi),fi.subVectors(t.c,Qi),Tn.subVectors(di,ui),An.subVectors(fi,di),Xn.subVectors(ui,fi);let e=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Xn.z,Xn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Xn.z,0,-Xn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Xn.y,Xn.x,0];return!Yo(e,ui,di,fi,Gs)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,ui,di,fi,Gs))?!1:(Ws.crossVectors(Tn,An),e=[Ws.x,Ws.y,Ws.z],Yo(e,ui,di,fi,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},fn=[new D,new D,new D,new D,new D,new D,new D,new D],Je=new D,Vs=new an,ui=new D,di=new D,fi=new D,Tn=new D,An=new D,Xn=new D,Qi=new D,Gs=new D,Ws=new D,qn=new D;function Yo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qn.fromArray(i,r);let o=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),c=t.dot(qn),l=e.dot(qn),d=n.dot(qn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var Lh=new an,$i=new D,Zo=new D,Nn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);let e=$i.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(Zo)),this.expandByPoint($i.copy(t.center).sub(Zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},pn=new D,Ko=new D,Xs=new D,Rn=new D,Jo=new D,qs=new D,jo=new D,Ii=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ko.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Ko);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Xs),o=Rn.dot(this.direction),c=-Rn.dot(Xs),l=Rn.lengthSq(),d=Math.abs(1-a*a),u,f,p,g;if(d>0)if(u=a*c-o,f=a*o-c,g=r*d,u>=0)if(f>=-g)if(f<=g){let y=1/d;u*=y,f*=y,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ko).addScaledVector(Xs,f),p}intersectSphere(t,e){pn.subVectors(t.center,this.origin);let n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){Jo.subVectors(e,t),qs.subVectors(n,t),jo.crossVectors(Jo,qs);let a=this.direction.dot(jo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);let c=o*this.direction.dot(qs.crossVectors(Rn,qs));if(c<0)return null;let l=o*this.direction.dot(Jo.cross(Rn));if(l<0||c+l>a)return null;let d=-o*Rn.dot(jo);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,a,o,c,l,d,u,f,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,d,u,f,p,g,y,m)}set(t,e,n,s,r,a,o,c,l,d,u,f,p,g,y,m){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*d,p=a*u,g=o*d,y=o*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-y*l,e[9]=-o*c,e[2]=y-f*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*d,p=c*u,g=l*d,y=l*u;e[0]=f+y*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=p*o-g,e[6]=y+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*d,p=c*u,g=l*d,y=l*u;e[0]=f-y*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*d,e[9]=y-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*d,p=a*u,g=o*d,y=o*u;e[0]=c*d,e[4]=g*l-p,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*d,e[4]=y-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=p*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=f*u+y,e[5]=a*d,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*d,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dh,t,Uh)}lookAt(t,e,n){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Cn.crossVectors(n,ze),Cn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Cn.crossVectors(n,ze)),Cn.normalize(),Ys.crossVectors(ze,Cn),s[0]=Cn.x,s[4]=Ys.x,s[8]=ze.x,s[1]=Cn.y,s[5]=Ys.y,s[9]=ze.y,s[2]=Cn.z,s[6]=Ys.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],f=n[9],p=n[13],g=n[2],y=n[6],m=n[10],h=n[14],S=n[3],E=n[7],b=n[11],A=n[15],w=s[0],R=s[4],I=s[8],x=s[12],v=s[1],P=s[5],F=s[9],B=s[13],V=s[2],X=s[6],W=s[10],j=s[14],k=s[3],et=s[7],lt=s[11],mt=s[15];return r[0]=a*w+o*v+c*V+l*k,r[4]=a*R+o*P+c*X+l*et,r[8]=a*I+o*F+c*W+l*lt,r[12]=a*x+o*B+c*j+l*mt,r[1]=d*w+u*v+f*V+p*k,r[5]=d*R+u*P+f*X+p*et,r[9]=d*I+u*F+f*W+p*lt,r[13]=d*x+u*B+f*j+p*mt,r[2]=g*w+y*v+m*V+h*k,r[6]=g*R+y*P+m*X+h*et,r[10]=g*I+y*F+m*W+h*lt,r[14]=g*x+y*B+m*j+h*mt,r[3]=S*w+E*v+b*V+A*k,r[7]=S*R+E*P+b*X+A*et,r[11]=S*I+E*F+b*W+A*lt,r[15]=S*x+E*B+b*j+A*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],d=t[2],u=t[6],f=t[10],p=t[14],g=t[3],y=t[7],m=t[11],h=t[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*p-n*c*p)+y*(+e*c*p-e*l*f+r*a*f-s*a*p+s*l*d-r*c*d)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*d-n*l*d)+h*(-s*o*d-e*c*u+e*o*f+s*a*u-n*a*f+n*c*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],u=t[9],f=t[10],p=t[11],g=t[12],y=t[13],m=t[14],h=t[15],S=u*m*l-y*f*l+y*c*p-o*m*p-u*c*h+o*f*h,E=g*f*l-d*m*l-g*c*p+a*m*p+d*c*h-a*f*h,b=d*y*l-g*u*l+g*o*p-a*y*p-d*o*h+a*u*h,A=g*u*c-d*y*c-g*o*f+a*y*f+d*o*m-a*u*m,w=e*S+n*E+s*b+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return t[0]=S*R,t[1]=(y*f*r-u*m*r-y*s*p+n*m*p+u*s*h-n*f*h)*R,t[2]=(o*m*r-y*c*r+y*s*l-n*m*l-o*s*h+n*c*h)*R,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*p-n*c*p)*R,t[4]=E*R,t[5]=(d*m*r-g*f*r+g*s*p-e*m*p-d*s*h+e*f*h)*R,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*h-e*c*h)*R,t[7]=(a*f*r-d*c*r+d*s*l-e*f*l-a*s*p+e*c*p)*R,t[8]=b*R,t[9]=(g*u*r-d*y*r-g*n*p+e*y*p+d*n*h-e*u*h)*R,t[10]=(a*y*r-g*o*r+g*n*l-e*y*l-a*n*h+e*o*h)*R,t[11]=(d*o*r-a*u*r-d*n*l+e*u*l+a*n*p-e*o*p)*R,t[12]=A*R,t[13]=(d*y*s-g*u*s+g*n*f-e*y*f-d*n*m+e*u*m)*R,t[14]=(g*o*s-a*y*s-g*n*c+e*y*c+a*n*m-e*o*m)*R,t[15]=(a*u*s-d*o*s+d*n*c-e*u*c-a*n*f+e*o*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,d=a+a,u=o+o,f=r*l,p=r*d,g=r*u,y=a*d,m=a*u,h=o*u,S=c*l,E=c*d,b=c*u,A=n.x,w=n.y,R=n.z;return s[0]=(1-(y+h))*A,s[1]=(p+b)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(p-b)*w,s[5]=(1-(f+h))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+E)*R,s[9]=(m-S)*R,s[10]=(1-(f+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=pi.set(s[0],s[1],s[2]).length(),a=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);let l=1/r,d=1/a,u=1/o;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=d,je.elements[5]*=d,je.elements[6]*=d,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=$e,c=!1){let l=this.elements,d=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===$e)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===cs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=$e,c=!1){let l=this.elements,d=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===$e)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===cs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pi=new D,je=new oe,Dh=new D(0,0,0),Uh=new D(1,1,1),Cn=new D,Ys=new D,ze=new D,ml=new oe,gl=new qe,Ye=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ye.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nh=0,_l=new D,mi=new qe,mn=new oe,Zs=new D,ts=new D,Fh=new D,Oh=new qe,xl=new D(1,0,0),yl=new D(0,1,0),vl=new D(0,0,1),Ml={type:"added"},Bh={type:"removed"},gi={type:"childadded",child:null},Qo={type:"childremoved",child:null},Me=class i extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Ye,n=new qe,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new zt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(xl,t)}rotateY(t){return this.rotateOnAxis(yl,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xl,t)}translateY(t){return this.translateOnAxis(yl,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ts,Zs,this.up):mn.lookAt(Zs,ts,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(mn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ml),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bh),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ml),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Fh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Oh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),d=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Me.DEFAULT_UP=new D(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=new D,gn=new D,$o=new D,_n=new D,_i=new D,xi=new D,bl=new D,ta=new D,ea=new D,na=new D,ia=new jt,sa=new jt,ra=new jt,Ln=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),gn.subVectors(n,e),$o.subVectors(t,e);let a=Qe.dot(Qe),o=Qe.dot(gn),c=Qe.dot($o),l=gn.dot(gn),d=gn.dot($o),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-o*d)*f,g=(a*d-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_n.x),c.addScaledVector(a,_n.y),c.addScaledVector(o,_n.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(sa,r.y),a.addScaledVector(ra,r.z),a}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),gn.subVectors(t,e),Qe.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Qe.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;_i.subVectors(s,n),xi.subVectors(r,n),ta.subVectors(t,n);let c=_i.dot(ta),l=xi.dot(ta);if(c<=0&&l<=0)return e.copy(n);ea.subVectors(t,s);let d=_i.dot(ea),u=xi.dot(ea);if(d>=0&&u<=d)return e.copy(s);let f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(_i,a);na.subVectors(t,r);let p=_i.dot(na),g=xi.dot(na);if(g>=0&&p<=g)return e.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(xi,o);let m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return bl.subVectors(r,s),o=(u-d)/(u-d+(p-g)),e.copy(s).addScaledVector(bl,o);let h=1/(m+y+f);return a=y*h,o=f*h,e.copy(n).addScaledVector(_i,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Na(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=oa(a,r,t+1/3),this.g=oa(a,r,t),this.b=oa(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Yt.workingToColorSpace(Te.copy(this),t),Math.round(Wt(Te.r*255,0,255))*65536+Math.round(Wt(Te.g*255,0,255))*256+Math.round(Wt(Te.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Te.copy(this),e);let n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Pe){Yt.workingToColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,s=Te.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Ks);let n=os(Pn.h,Ks.h,e),s=os(Pn.s,Ks.s,e),r=os(Pn.l,Ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Nt;Nt.NAMES=Mc;var zh=0,vn=class extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Jn,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cr,this.blendDst=hr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cr&&(n.blendSrc=this.blendSrc),this.blendDst!==hr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$n=class extends vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new D,Js=new yt,kh=0,Ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ga,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ga&&(t.usage=this.usage),t}};var ds=class extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fs=class extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hh=0,We=new oe,aa=new Me,yi=new D,ke=new an,es=new an,ve=new D,Ie=class i extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fa(t)?fs:ds)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(ke.min,es.min),ke.expandByPoint(ve),ve.addVectors(ke.max,es.max),ke.expandByPoint(ve)):(ke.expandByPoint(es.min),ke.expandByPoint(es.max))}ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)ve.fromBufferAttribute(o,l),c&&(yi.fromBufferAttribute(t,l),ve.add(yi)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new D,c[I]=new D;let l=new D,d=new D,u=new D,f=new yt,p=new yt,g=new yt,y=new D,m=new D;function h(I,x,v){l.fromBufferAttribute(n,I),d.fromBufferAttribute(n,x),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,x),g.fromBufferAttribute(r,v),d.sub(l),u.sub(l),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),o[I].add(y),o[x].add(y),o[v].add(y),c[I].add(m),c[x].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,x=S.length;I<x;++I){let v=S[I],P=v.start,F=v.count;for(let B=P,V=P+F;B<V;B+=3)h(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new D,b=new D,A=new D,w=new D;function R(I){A.fromBufferAttribute(s,I),w.copy(A);let x=o[I];E.copy(x),E.sub(A.multiplyScalar(A.dot(x))).normalize(),b.crossVectors(w,x);let P=b.dot(c[I])<0?-1:1;a.setXYZW(I,E.x,E.y,E.z,P)}for(let I=0,x=S.length;I<x;++I){let v=S[I],P=v.start,F=v.count;for(let B=P,V=P+F;B<V;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,d=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,c){let l=o.array,d=o.itemSize,u=o.normalized,f=new l.constructor(c.length*d),p=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*d;for(let h=0;h<d;h++)f[g++]=l[p++]}return new Ue(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){let f=l[d],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];d.push(p.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(e))}let r=t.morphAttributes;for(let l in r){let d=[],u=r[l];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,d=a.length;l<d;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sl=new oe,Yn=new Ii,js=new Nn,El=new D,Qs=new D,$s=new D,tr=new D,la=new D,er=new D,wl=new D,nr=new D,qt=class extends Me{constructor(t=new Ie,e=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],u=r[c];d!==0&&(la.fromBufferAttribute(u,t),a?er.addScaledVector(la,d):er.addScaledVector(la.sub(e),d))}e.add(er)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(js.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(js,El)===null||Yn.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(Sl.copy(r).invert(),Yn.copy(t.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],h=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,A=E;b<A;b+=3){let w=o.getX(b),R=o.getX(b+1),I=o.getX(b+2);s=ir(this,h,t,n,l,d,u,w,R,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){let S=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=ir(this,a,t,n,l,d,u,S,E,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],h=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,A=E;b<A;b+=3){let w=b,R=b+1,I=b+2;s=ir(this,h,t,n,l,d,u,w,R,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){let S=m,E=m+1,b=m+2;s=ir(this,a,t,n,l,d,u,S,E,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Vh(i,t,e,n,s,r,a,o){let c;if(t.side===Ee?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===yn,o),c===null)return null;nr.copy(o),nr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(nr);return l<e.near||l>e.far?null:{distance:l,point:nr.clone(),object:i}}function ir(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Qs),i.getVertexPosition(c,$s),i.getVertexPosition(l,tr);let d=Vh(i,t,e,n,Qs,$s,tr,wl);if(d){let u=new D;Ln.getBarycoord(wl,Qs,$s,tr,u),s&&(d.uv=Ln.getInterpolatedAttribute(s,o,c,l,u,new yt)),r&&(d.uv1=Ln.getInterpolatedAttribute(r,o,c,l,u,new yt)),a&&(d.normal=Ln.getInterpolatedAttribute(a,o,c,l,u,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new D,materialIndex:0};Ln.getNormal(Qs,$s,tr,f.normal),d.face=f,d.barycoord=u}return d}var ln=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(u,2));function g(y,m,h,S,E,b,A,w,R,I,x){let v=b/R,P=A/I,F=b/2,B=A/2,V=w/2,X=R+1,W=I+1,j=0,k=0,et=new D;for(let lt=0;lt<W;lt++){let mt=lt*P-B;for(let Ft=0;Ft<X;Ft++){let Q=Ft*v-F;et[y]=Q*S,et[m]=mt*E,et[h]=V,l.push(et.x,et.y,et.z),et[y]=0,et[m]=0,et[h]=w>0?1:-1,d.push(et.x,et.y,et.z),u.push(Ft/R),u.push(1-lt/I),j+=1}}for(let lt=0;lt<I;lt++)for(let mt=0;mt<R;mt++){let Ft=f+mt+X*lt,Q=f+mt+X*(lt+1),dt=f+(mt+1)+X*(lt+1),At=f+(mt+1)+X*lt;c.push(Ft,Q,At),c.push(Q,dt,At),k+=6}o.addGroup(p,k,x),p+=k,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function si(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ae(i){let t={};for(let e=0;e<i.length;e++){let n=si(i[e]);for(let s in n)t[s]=n[s]}return t}function Gh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oa(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var bc={clone:si,merge:Ae},Wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Le=class extends vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=si(t.uniforms),this.uniformsGroups=Gh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ps=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=$e,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},In=new D,Tl=new yt,Al=new yt,be=class extends ps{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ai*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Tl,Al),e.subVectors(Al,Tl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vi=-90,Mi=1,_r=class extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new be(vi,Mi,t,e);s.layers=this.layers,this.add(s);let r=new be(vi,Mi,t,e);r.layers=this.layers,this.add(r);let a=new be(vi,Mi,t,e);a.layers=this.layers,this.add(a);let o=new be(vi,Mi,t,e);o.layers=this.layers,this.add(o);let c=new be(vi,Mi,t,e);c.layers=this.layers,this.add(c);let l=new be(vi,Mi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===$e)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ms=class extends Se{constructor(t=[],e=ni,n,s,r,a,o,c,l,d){super(t,e,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xr=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ms(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new Le({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:Sn});r.uniforms.tEquirect.value=e;let a=new qt(s,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=tn),new _r(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},me=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},qh={type:"move"},Li=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),h=this._getHandJoint(l,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ti=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var yr=class extends Se{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ne,d=Ne,u,f){super(null,a,o,c,l,d,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gs=class extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},bi=new oe,Rl=new oe,sr=[],Cl=new an,Yh=new oe,ns=new qt,is=new Nn,_s=class extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yh)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new an),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),Cl.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(Cl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),is.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),t.ray.intersectsSphere(is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bi),Rl.multiplyMatrices(n,bi),ns.matrixWorld=Rl,ns.raycast(t,sr);for(let a=0,o=sr.length;a<o;a++){let c=sr[a];c.instanceId=r,c.object=this,e.push(c)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yr(new Float32Array(s*this.count),s,this.count,Zr,nn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ca=new D,Zh=new D,Kh=new zt,Xe=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ca.subVectors(n,e).cross(Zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kh.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zn=new Nn,Jh=new yt(.5,.5),rr=new D,Di=class{constructor(t=new Xe,e=new Xe,n=new Xe,s=new Xe,r=new Xe,a=new Xe){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$e,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],u=r[5],f=r[6],p=r[7],g=r[8],y=r[9],m=r[10],h=r[11],S=r[12],E=r[13],b=r[14],A=r[15];if(s[0].setComponents(l-a,p-d,h-g,A-S).normalize(),s[1].setComponents(l+a,p+d,h+g,A+S).normalize(),s[2].setComponents(l+o,p+u,h+y,A+E).normalize(),s[3].setComponents(l-o,p-u,h-y,A-E).normalize(),n)s[4].setComponents(c,f,m,b).normalize(),s[5].setComponents(l-c,p-f,h-m,A-b).normalize();else if(s[4].setComponents(l-c,p-f,h-m,A-b).normalize(),e===$e)s[5].setComponents(l+c,p+f,h+m,A+b).normalize();else if(e===cs)s[5].setComponents(c,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){Zn.center.set(0,0,0);let e=Jh.distanceTo(t.center);return Zn.radius=.7071067811865476+e,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(rr.x=s.normal.x>0?t.max.x:t.min.x,rr.y=s.normal.y>0?t.max.y:t.min.y,rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xs=class extends Se{constructor(t,e,n=Vn,s,r,a,o=Ne,c=Ne,l,d=Ti,u=1){if(d!==Ti&&d!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ys=class extends Se{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vs=class i extends Ie{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],d=e/2,u=Math.PI/2*t,f=e,p=2*u+f,g=n*2+r,y=s+1,m=new D,h=new D;for(let S=0;S<=g;S++){let E=0,b=0,A=0,w=0;if(S<=n){let x=S/n,v=x*Math.PI/2;b=-d-t*Math.cos(v),A=t*Math.sin(v),w=-t*Math.cos(v),E=x*u}else if(S<=n+r){let x=(S-n)/r;b=-d+x*e,A=t,w=0,E=u+x*f}else{let x=(S-n-r)/n,v=x*Math.PI/2;b=d+t*Math.sin(v),A=t*Math.cos(v),w=t*Math.sin(v),E=u+f+x*u}let R=Math.max(0,Math.min(1,E/p)),I=0;S===0?I=.5/s:S===g&&(I=-.5/s);for(let x=0;x<=s;x++){let v=x/s,P=v*Math.PI*2,F=Math.sin(P),B=Math.cos(P);h.x=-A*B,h.y=b,h.z=A*F,o.push(h.x,h.y,h.z),m.set(-A*B,w,A*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(v+I,R)}if(S>0){let x=(S-1)*y;for(let v=0;v<s;v++){let P=x+v,F=x+v+1,B=S*y+v,V=S*y+v+1;a.push(P,F,B),a.push(F,V,B)}}}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ms=class i extends Ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new D,d=new yt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[f]/t+1)/2,d.y=(a[f+1]/t+1)/2,c.push(d.x,d.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},bs=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],f=[],p=[],g=0,y=[],m=n/2,h=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(p,2));function S(){let b=new D,A=new D,w=0,R=(e-t)/n;for(let I=0;I<=r;I++){let x=[],v=I/r,P=v*(e-t)+t;for(let F=0;F<=s;F++){let B=F/s,V=B*c+o,X=Math.sin(V),W=Math.cos(V);A.x=P*X,A.y=-v*n+m,A.z=P*W,u.push(A.x,A.y,A.z),b.set(X,R,W).normalize(),f.push(b.x,b.y,b.z),p.push(B,1-v),x.push(g++)}y.push(x)}for(let I=0;I<s;I++)for(let x=0;x<r;x++){let v=y[x][I],P=y[x+1][I],F=y[x+1][I+1],B=y[x][I+1];(t>0||x!==0)&&(d.push(v,P,B),w+=3),(e>0||x!==r-1)&&(d.push(P,F,B),w+=3)}l.addGroup(h,w,0),h+=w}function E(b){let A=g,w=new yt,R=new D,I=0,x=b===!0?t:e,v=b===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),g++;let P=g;for(let F=0;F<=s;F++){let V=F/s*c+o,X=Math.cos(V),W=Math.sin(V);R.x=x*W,R.y=m*v,R.z=x*X,u.push(R.x,R.y,R.z),f.push(0,v,0),w.x=X*.5+.5,w.y=W*.5*v+.5,p.push(w.x,w.y),g++}for(let F=0;F<s;F++){let B=A+F,V=P+F;b===!0?d.push(V,V+1,B):d.push(V+1,V,B),I+=3}l.addGroup(h,I,b===!0?1:2),h+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Mn=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,u=t/o,f=e/c,p=[],g=[],y=[],m=[];for(let h=0;h<d;h++){let S=h*f-a;for(let E=0;E<l;E++){let b=E*u-r;g.push(b,-S,0),y.push(0,0,1),m.push(E/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let S=0;S<o;S++){let E=S+l*h,b=S+l*(h+1),A=S+1+l*(h+1),w=S+1+l*h;p.push(E,b,w),p.push(b,A,w)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ui=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,d=[],u=new D,f=new D,p=[],g=[],y=[],m=[];for(let h=0;h<=n;h++){let S=[],E=h/n,b=0;h===0&&a===0?b=.5/e:h===n&&c===Math.PI&&(b=-.5/e);for(let A=0;A<=e;A++){let w=A/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(w+b,1-E),S.push(l++)}d.push(S)}for(let h=0;h<n;h++)for(let S=0;S<e;S++){let E=d[h][S+1],b=d[h][S],A=d[h+1][S],w=d[h+1][S+1];(h!==0||a>0)&&p.push(E,b,w),(h!==n-1||c<Math.PI)&&p.push(b,A,w)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ss=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],d=new D,u=new D,f=new D;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,h=(s+1)*(p-1)+g,S=(s+1)*p+g;a.push(y,m,S),a.push(m,h,S)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var bn=class extends vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Fn=class extends bn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Es=class extends vn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vr=class extends vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Mr=class extends vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function or(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function jh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},br=class extends ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:da,endingEnd:da}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fa:r=t,o=2*e-n;break;case pa:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fa:a=t,c=2*n-e;break;case pa:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,d=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,h=-f*m+2*f*y-f*g,S=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*y+.5*g,b=p*m-p*y;for(let A=0;A!==o;++A)r[A]=h*a[d+A]+S*a[l+A]+E*a[c+A]+b*a[u+A];return r}},Sr=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=(n-e)/(s-e),u=1-d;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*d;return r}},Er=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},He=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Er(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new br(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case as:e=this.InterpolantFactoryMethodDiscrete;break;case fr:e=this.InterpolantFactoryMethodLinear;break;case ar:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return as;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return ar}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&jh(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ar,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],d=t[o+1];if(l!==d&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};He.prototype.ValueTypeName="";He.prototype.TimeBufferType=Float32Array;He.prototype.ValueBufferType=Float32Array;He.prototype.DefaultInterpolation=fr;var On=class extends He{constructor(t,e,n){super(t,e,n)}};On.prototype.ValueTypeName="bool";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=as;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var wr=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};wr.prototype.ValueTypeName="color";var Tr=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};Tr.prototype.ValueTypeName="number";var Ar=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let d=l+o;l!==d;l+=4)qe.slerpFlat(r,0,a,l-o,a,l,c);return r}},ws=class extends He{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ar(this.times,this.values,this.getValueSize(),t)}};ws.prototype.ValueTypeName="quaternion";ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Bn=class extends He{constructor(t,e,n){super(t,e,n)}};Bn.prototype.ValueTypeName="string";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=as;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};Rr.prototype.ValueTypeName="vector";var lr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Cr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){let u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Sc=new Cr,Ni=class{constructor(t){this.manager=t!==void 0?t:Sc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var Si=new WeakMap,Pr=class extends Ni{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=lr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=Si.get(a);u===void 0&&(u=[],Si.set(a,u)),u.push({onLoad:e,onError:s})}return a}let o=Ri("img");function c(){d(),e&&e(this);let u=Si.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onLoad&&p.onLoad(this)}Si.delete(this),r.manager.itemEnd(t)}function l(u){d(),s&&s(u),lr.remove(`image:${t}`);let f=Si.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(u)}Si.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),lr.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Ts=class extends Ni{constructor(t){super(t)}load(t,e,n,s){let r=new Se,a=new Pr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Fi=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},As=class extends Fi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ha=new oe,Pl=new D,Il=new D,Ir=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Pl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pl),Il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Il),e.updateMatrixWorld(),ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ll=new oe,ss=new D,ua=new D,_a=class extends Ir{constructor(){super(new be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(ss),ua.copy(n.position),ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ua),n.updateMatrixWorld(),s.makeTranslation(-ss.x,-ss.y,-ss.z),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll,n.coordinateSystem,n.reversedDepth)}},Rs=class extends Fi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _a}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Cs=class extends ps{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xa=class extends Ir{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends Fi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new xa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Lr=class extends be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ba="\\[\\]\\.:\\/",Qh=new RegExp("["+Ba+"]","g"),za="[^"+Ba+"]",$h="[^"+Ba.replace("\\.","")+"]",tu=/((?:WC+[\/:])*)/.source.replace("WC",za),eu=/(WCOD+)?/.source.replace("WCOD",$h),nu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",za),iu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",za),su=new RegExp("^"+tu+eu+nu+iu+"$"),ru=["material","materials","bones","map"],ya=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qh,"")}static parseTrackName(t){let e=su.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ru.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===l){l=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=ya;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eg=new Float32Array(1);var Bi=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ps=class extends rn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function ka(i,t,e,n){let s=ou(n);switch(e){case Pa:return i*t;case Zr:return i*t/s.components*s.byteLength;case Kr:return i*t/s.components*s.byteLength;case La:return i*t*2/s.components*s.byteLength;case Jr:return i*t*2/s.components*s.byteLength;case Ia:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case jr:return i*t*4/s.components*s.byteLength;case Ds:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $r:case eo:return Math.max(i,16)*Math.max(t,8)/4;case Qr:case to:return Math.max(i,8)*Math.max(t,8)/2;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vo:case Mo:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case So:case Eo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ou(i){switch(i){case en:case Ta:return{byteLength:1,components:1};case zi:case Aa:case ki:return{byteLength:2,components:1};case qr:case Yr:return{byteLength:2,components:4};case Vn:case Xr:case nn:return{byteLength:4,components:1};case Ra:case Ca:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Yc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lu(i){let t=new WeakMap;function e(o,c){let l=o.array,d=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let d=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,d);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];i.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hu=`#ifdef USE_ALPHAHASH
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
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mu=`#ifdef USE_AOMAP
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
#endif`,gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_u=`#ifdef USE_BATCHING
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
#endif`,xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bu=`#ifdef USE_IRIDESCENCE
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
#endif`,Su=`#ifdef USE_BUMPMAP
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
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lu=`#define PI 3.141592653589793
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
} // validated`,Du=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uu=`vec3 transformedNormal = objectNormal;
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
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
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
}`,ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,td=`uniform bool receiveShadow;
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
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,od=`PhysicalMaterial material;
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
#endif`,ad=`struct PhysicalMaterial {
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
}`,ld=`
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
#endif`,cd=`#if defined( RE_IndirectDiffuse )
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
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ud=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xd=`#if defined( USE_POINTS_UV )
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
#endif`,yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
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
#endif`,wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
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
#endif`,Ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yd=`float getShadowMask() {
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
}`,Zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kd=`#ifdef USE_SKINNING
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
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nf=`#ifdef USE_TRANSMISSION
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
#endif`,sf=`#ifdef USE_TRANSMISSION
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
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hf=`uniform sampler2D t2D;
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`#include <common>
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
}`,gf=`#if DEPTH_PACKING == 3200
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
}`,_f=`#define DISTANCE
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
}`,xf=`#define DISTANCE
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
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
}`,bf=`uniform vec3 diffuse;
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
}`,Sf=`#include <common>
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
}`,Ef=`uniform vec3 diffuse;
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
}`,wf=`#define LAMBERT
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
}`,Tf=`#define LAMBERT
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
}`,Af=`#define MATCAP
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
}`,Rf=`#define MATCAP
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
}`,Cf=`#define NORMAL
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
}`,Pf=`#define NORMAL
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
}`,If=`#define PHONG
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
}`,Lf=`#define PHONG
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
}`,Df=`#define STANDARD
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
}`,Uf=`#define STANDARD
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
}`,Nf=`#define TOON
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
}`,Ff=`#define TOON
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
}`,Of=`uniform float size;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,zf=`#include <common>
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
}`,kf=`uniform vec3 color;
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
}`,Hf=`uniform float rotation;
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:cu,alphahash_pars_fragment:hu,alphamap_fragment:uu,alphamap_pars_fragment:du,alphatest_fragment:fu,alphatest_pars_fragment:pu,aomap_fragment:mu,aomap_pars_fragment:gu,batching_pars_vertex:_u,batching_vertex:xu,begin_vertex:yu,beginnormal_vertex:vu,bsdfs:Mu,iridescence_fragment:bu,bumpmap_pars_fragment:Su,clipping_planes_fragment:Eu,clipping_planes_pars_fragment:wu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:Au,color_fragment:Ru,color_pars_fragment:Cu,color_pars_vertex:Pu,color_vertex:Iu,common:Lu,cube_uv_reflection_fragment:Du,defaultnormal_vertex:Uu,displacementmap_pars_vertex:Nu,displacementmap_vertex:Fu,emissivemap_fragment:Ou,emissivemap_pars_fragment:Bu,colorspace_fragment:zu,colorspace_pars_fragment:ku,envmap_fragment:Hu,envmap_common_pars_fragment:Vu,envmap_pars_fragment:Gu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:ed,envmap_vertex:Xu,fog_vertex:qu,fog_pars_vertex:Yu,fog_fragment:Zu,fog_pars_fragment:Ku,gradientmap_pars_fragment:Ju,lightmap_pars_fragment:ju,lights_lambert_fragment:Qu,lights_lambert_pars_fragment:$u,lights_pars_begin:td,lights_toon_fragment:nd,lights_toon_pars_fragment:id,lights_phong_fragment:sd,lights_phong_pars_fragment:rd,lights_physical_fragment:od,lights_physical_pars_fragment:ad,lights_fragment_begin:ld,lights_fragment_maps:cd,lights_fragment_end:hd,logdepthbuf_fragment:ud,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:fd,logdepthbuf_vertex:pd,map_fragment:md,map_pars_fragment:gd,map_particle_fragment:_d,map_particle_pars_fragment:xd,metalnessmap_fragment:yd,metalnessmap_pars_fragment:vd,morphinstance_vertex:Md,morphcolor_vertex:bd,morphnormal_vertex:Sd,morphtarget_pars_vertex:Ed,morphtarget_vertex:wd,normal_fragment_begin:Td,normal_fragment_maps:Ad,normal_pars_fragment:Rd,normal_pars_vertex:Cd,normal_vertex:Pd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Ld,clearcoat_normal_fragment_maps:Dd,clearcoat_pars_fragment:Ud,iridescence_pars_fragment:Nd,opaque_fragment:Fd,packing:Od,premultiplied_alpha_fragment:Bd,project_vertex:zd,dithering_fragment:kd,dithering_pars_fragment:Hd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:Gd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:Xd,shadowmap_vertex:qd,shadowmask_pars_fragment:Yd,skinbase_vertex:Zd,skinning_pars_vertex:Kd,skinning_vertex:Jd,skinnormal_vertex:jd,specularmap_fragment:Qd,specularmap_pars_fragment:$d,tonemapping_fragment:tf,tonemapping_pars_fragment:ef,transmission_fragment:nf,transmission_pars_fragment:sf,uv_pars_fragment:rf,uv_pars_vertex:of,uv_vertex:af,worldpos_vertex:lf,background_vert:cf,background_frag:hf,backgroundCube_vert:uf,backgroundCube_frag:df,cube_vert:ff,cube_frag:pf,depth_vert:mf,depth_frag:gf,distanceRGBA_vert:_f,distanceRGBA_frag:xf,equirect_vert:yf,equirect_frag:vf,linedashed_vert:Mf,linedashed_frag:bf,meshbasic_vert:Sf,meshbasic_frag:Ef,meshlambert_vert:wf,meshlambert_frag:Tf,meshmatcap_vert:Af,meshmatcap_frag:Rf,meshnormal_vert:Cf,meshnormal_frag:Pf,meshphong_vert:If,meshphong_frag:Lf,meshphysical_vert:Df,meshphysical_frag:Uf,meshtoon_vert:Nf,meshtoon_frag:Ff,points_vert:Of,points_frag:Bf,shadow_vert:zf,shadow_frag:kf,sprite_vert:Hf,sprite_frag:Vf},ot={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},un={basic:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ae([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ae([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ae([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ae([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ae([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ae([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ae([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ae([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ae([ot.common,ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ae([ot.lights,ot.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};un.physical={uniforms:Ae([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Ro={r:0,b:0,g:0},ri=new Ye,Gf=new oe;function Wf(i,t,e,n,s,r,a){let o=new Nt(0),c=r===!0?0:1,l,d,u=null,f=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function y(E){let b=!1,A=g(E);A===null?h(o,c):A&&A.isColor&&(h(A,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){let A=g(b);A&&(A.isCubeTexture||A.mapping===Is)?(d===void 0&&(d=new qt(new ln(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:si(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ri.copy(b.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(ri)),d.material.toneMapped=Yt.getTransfer(A.colorSpace)!==Qt,(u!==A||f!==A.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new qt(new Mn(2,2),new Le({name:"BackgroundMaterial",uniforms:si(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(A.colorSpace)!==Qt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function h(E,b){E.getRGB(Ro,Oa(i)),n.buffers.color.setClear(Ro.r,Ro.g,Ro.b,b,a)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),c=b,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,h(o,c)},render:y,addToRenderList:m,dispose:S}}function Xf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(v,P,F,B,V){let X=!1,W=u(B,F,P);r!==W&&(r=W,l(r.object)),X=p(v,B,F,V),X&&g(v,B,F,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(v,P,F,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function d(v){return i.deleteVertexArray(v)}function u(v,P,F){let B=F.wireframe===!0,V=n[v.id];V===void 0&&(V={},n[v.id]=V);let X=V[P.id];X===void 0&&(X={},V[P.id]=X);let W=X[B];return W===void 0&&(W=f(c()),X[B]=W),W}function f(v){let P=[],F=[],B=[];for(let V=0;V<e;V++)P[V]=0,F[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,P,F,B){let V=r.attributes,X=P.attributes,W=0,j=F.getAttributes();for(let k in j)if(j[k].location>=0){let lt=V[k],mt=X[k];if(mt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor)),lt===void 0||lt.attribute!==mt||mt&&lt.data!==mt.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(v,P,F,B){let V={},X=P.attributes,W=0,j=F.getAttributes();for(let k in j)if(j[k].location>=0){let lt=X[k];lt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor));let mt={};mt.attribute=lt,lt&&lt.data&&(mt.data=lt.data),V[k]=mt,W++}r.attributes=V,r.attributesNum=W,r.index=B}function y(){let v=r.newAttributes;for(let P=0,F=v.length;P<F;P++)v[P]=0}function m(v){h(v,0)}function h(v,P){let F=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;F[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),V[v]!==P&&(i.vertexAttribDivisor(v,P),V[v]=P)}function S(){let v=r.newAttributes,P=r.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==v[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function E(v,P,F,B,V,X,W){W===!0?i.vertexAttribIPointer(v,P,F,V,X):i.vertexAttribPointer(v,P,F,B,V,X)}function b(v,P,F,B){y();let V=B.attributes,X=F.getAttributes(),W=P.defaultAttributeValues;for(let j in X){let k=X[j];if(k.location>=0){let et=V[j];if(et===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){let lt=et.normalized,mt=et.itemSize,Ft=t.get(et);if(Ft===void 0)continue;let Q=Ft.buffer,dt=Ft.type,At=Ft.bytesPerElement,G=dt===i.INT||dt===i.UNSIGNED_INT||et.gpuType===Xr;if(et.isInterleavedBufferAttribute){let K=et.data,ut=K.stride,Rt=et.offset;if(K.isInstancedInterleavedBuffer){for(let gt=0;gt<k.locationSize;gt++)h(k.location+gt,K.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let gt=0;gt<k.locationSize;gt++)m(k.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let gt=0;gt<k.locationSize;gt++)E(k.location+gt,mt/k.locationSize,dt,lt,ut*At,(Rt+mt/k.locationSize*gt)*At,G)}else{if(et.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)h(k.location+K,et.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let K=0;K<k.locationSize;K++)m(k.location+K);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let K=0;K<k.locationSize;K++)E(k.location+K,mt/k.locationSize,dt,lt,mt*At,mt/k.locationSize*K*At,G)}}else if(W!==void 0){let lt=W[j];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(k.location,lt);break;case 3:i.vertexAttrib3fv(k.location,lt);break;case 4:i.vertexAttrib4fv(k.location,lt);break;default:i.vertexAttrib1fv(k.location,lt)}}}}S()}function A(){I();for(let v in n){let P=n[v];for(let F in P){let B=P[F];for(let V in B)d(B[V].object),delete B[V];delete P[F]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;let P=n[v.id];for(let F in P){let B=P[F];for(let V in B)d(B[V].object),delete B[V];delete P[F]}delete n[v.id]}function R(v){for(let P in n){let F=n[P];if(F[v.id]===void 0)continue;let B=F[v.id];for(let V in B)d(B[V].object),delete B[V];delete F[v.id]}}function I(){x(),a=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function qf(i,t,e){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),e.update(d,n,1)}function a(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),e.update(d,n,u))}function o(l,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];e.update(p,n,1)}function c(l,d,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,u);let g=0;for(let y=0;y<u;y++)g+=d[y]*f[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Yf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ze&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let I=R===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==en&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==nn&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:A,maxSamples:w}}function Zf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Xe,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=d(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,h=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{let S=r?0:n,E=S*4,b=h.clippingState||null;c.value=b,b=d(g,f,E,p);for(let A=0;A!==E;++A)b[A]=e[A];h.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,f,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let h=p+y*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,b=p;E!==y;++E,b+=4)a.copy(u[E]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Kf(i){let t=new WeakMap;function e(a,o){return o===Vr?a.mapping=ni:o===Gr&&(a.mapping=ii),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Vr||o===Gr)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new xr(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xi=4,Ec=[.125,.215,.35,.446,.526,.582],li=20,Ha=new Cs,wc=new Nt,Va=null,Ga=0,Wa=0,Xa=!1,ai=(1+Math.sqrt(5))/2,Wi=1/ai,Tc=[new D(-ai,Wi,0),new D(ai,Wi,0),new D(-Wi,0,ai),new D(Wi,0,ai),new D(0,ai,-Wi),new D(0,ai,Wi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Jf=new D,Yi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Jf}=r;Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Va,Ga,Wa),this._renderer.xr.enabled=Xa,t.scissorTest=!1,Co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ni||t.mapping===ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ki,format:Ze,colorSpace:Qn,depthBuffer:!1},s=Ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jf(r)),this._blurMaterial=Qf(r,t,e)}return s}_compileMaterial(t){let e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,Ha)}_sceneToCubeUV(t,e,n,s,r){let c=new be(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(wc),u.toneMapping=En,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let y=new $n({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),m=new qt(new ln,y),h=!1,S=t.background;S?S.isColor&&(y.color.copy(S),t.background=null,h=!0):(y.color.copy(wc),h=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[E],r.y,r.z)):b===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[E]));let A=this._cubeSize;Co(s,b*A,E>2?A:0,A,A),u.setRenderTarget(s),h&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ni||t.mapping===ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Co(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tc[(s-r-1)%Tc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new qt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),y=r/g,m=isFinite(r)?1+Math.floor(d*y):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);let h=[],S=0;for(let R=0;R<li;++R){let I=R/y,x=Math.exp(-I*I/2);h.push(x),R===0?S+=x:R<m&&(S+=2*x)}for(let R=0;R<h.length;R++)h[R]=h[R]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let b=this._sizeLods[s],A=3*b*(s>E-Xi?s-E+Xi:0),w=4*(this._cubeSize-b);Co(e,A,w,3*b,2*b),c.setRenderTarget(e),c.render(u,Ha)}};function jf(i){let t=[],e=[],n=[],s=i,r=i-Xi+1+Ec.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Xi?c=Ec[a-i+Xi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),d=-l,u=1+l,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,y=3,m=2,h=1,S=new Float32Array(y*g*p),E=new Float32Array(m*g*p),b=new Float32Array(h*g*p);for(let w=0;w<p;w++){let R=w%3*2/3-1,I=w>2?0:-1,x=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];S.set(x,y*g*w),E.set(f,m*g*w);let v=[w,w,w,w,w,w];b.set(v,h*g*w)}let A=new Ie;A.setAttribute("position",new Ue(S,y)),A.setAttribute("uv",new Ue(E,m)),A.setAttribute("faceIndex",new Ue(b,h)),t.push(A),s>Xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ac(i,t,e){let n=new on(i,t,e);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Co(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qf(i,t,e){let n=new Float32Array(li),s=new D(0,1,0);return new Le({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:el(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Rc(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Cc(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function $f(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Vr||c===Gr,d=c===ni||c===ii;if(l||d){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Yi(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||d&&p&&s(p)?(e===null&&(e=new Yi(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function tp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ci("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ep(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(u){let f=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let S=p.array;y=p.version;for(let E=0,b=S.length;E<b;E+=3){let A=S[E+0],w=S[E+1],R=S[E+2];f.push(A,w,w,R,R,A)}}else if(g!==void 0){let S=g.array;y=g.version;for(let E=0,b=S.length/3-1;E<b;E+=3){let A=E+0,w=E+1,R=E+2;f.push(A,w,w,R,R,A)}}else return;let m=new(Fa(f)?fs:ds)(f,1);m.version=y;let h=r.get(u);h&&t.remove(h),r.set(u,m)}function d(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function np(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function d(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,n,1)}function u(f,p,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/a,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,g);let h=0;for(let S=0;S<g;S++)h+=p[S]*y[S];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function ip(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sp(i,t,e){let n=new WeakMap,s=new jt;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,f=n.get(o);if(f===void 0||f.count!==u){let x=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let b=o.attributes.position.count*E,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*A*4*u),R=new hs(w,b,A,u);R.type=nn,R.needsUpdate=!0;let I=E*4;for(let v=0;v<u;v++){let P=m[v],F=h[v],B=S[v],V=b*A*4*v;for(let X=0;X<P.count;X++){let W=X*I;p===!0&&(s.fromBufferAttribute(P,X),w[V+W+0]=s.x,w[V+W+1]=s.y,w[V+W+2]=s.z,w[V+W+3]=0),g===!0&&(s.fromBufferAttribute(F,X),w[V+W+4]=s.x,w[V+W+5]=s.y,w[V+W+6]=s.z,w[V+W+7]=0),y===!0&&(s.fromBufferAttribute(B,X),w[V+W+8]=s.x,w[V+W+9]=s.y,w[V+W+10]=s.z,w[V+W+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new yt(b,A)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function rp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Zc=new Se,Pc=new xs(1,1),Kc=new hs,Jc=new gr,jc=new ms,Ic=[],Lc=[],Dc=new Float32Array(16),Uc=new Float32Array(9),Nc=new Float32Array(4);function Zi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ic[s];if(r===void 0&&(r=new Float32Array(s),Ic[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lo(i,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function op(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Nc.set(n),i.uniformMatrix2fv(this.addr,!1,Nc),_e(e,n)}}function up(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Uc.set(n),i.uniformMatrix3fv(this.addr,!1,Uc),_e(e,n)}}function dp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Dc.set(n),i.uniformMatrix4fv(this.addr,!1,Dc),_e(e,n)}}function fp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function _p(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Mp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pc.compareFunction=Da,r=Pc):r=Zc,e.setTexture2D(t||r,s)}function bp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jc,s)}function Sp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jc,s)}function Ep(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kc,s)}function wp(i){switch(i){case 5126:return op;case 35664:return ap;case 35665:return lp;case 35666:return cp;case 35674:return hp;case 35675:return up;case 35676:return dp;case 5124:case 35670:return fp;case 35667:case 35671:return pp;case 35668:case 35672:return mp;case 35669:case 35673:return gp;case 5125:return _p;case 36294:return xp;case 36295:return yp;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ep}}function Tp(i,t){i.uniform1fv(this.addr,t)}function Ap(i,t){let e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Rp(i,t){let e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Cp(i,t){let e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Pp(i,t){let e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ip(i,t){let e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lp(i,t){let e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dp(i,t){i.uniform1iv(this.addr,t)}function Up(i,t){i.uniform2iv(this.addr,t)}function Np(i,t){i.uniform3iv(this.addr,t)}function Fp(i,t){i.uniform4iv(this.addr,t)}function Op(i,t){i.uniform1uiv(this.addr,t)}function Bp(i,t){i.uniform2uiv(this.addr,t)}function zp(i,t){i.uniform3uiv(this.addr,t)}function kp(i,t){i.uniform4uiv(this.addr,t)}function Hp(i,t,e){let n=this.cache,s=t.length,r=Lo(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Zc,r[a])}function Vp(i,t,e){let n=this.cache,s=t.length,r=Lo(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jc,r[a])}function Gp(i,t,e){let n=this.cache,s=t.length,r=Lo(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||jc,r[a])}function Wp(i,t,e){let n=this.cache,s=t.length,r=Lo(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kc,r[a])}function Xp(i){switch(i){case 5126:return Tp;case 35664:return Ap;case 35665:return Rp;case 35666:return Cp;case 35674:return Pp;case 35675:return Ip;case 35676:return Lp;case 5124:case 35670:return Dp;case 35667:case 35671:return Up;case 35668:case 35672:return Np;case 35669:case 35673:return Fp;case 5125:return Op;case 36294:return Bp;case 36295:return zp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Wp}}var Ya=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wp(e.type)}},Za=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xp(e.type)}},Ka=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},qa=/(\w+)(\])?(\[|\.)?/g;function Fc(i,t){i.seq.push(t),i.map[t.id]=t}function qp(i,t,e){let n=i.name,s=n.length;for(qa.lastIndex=0;;){let r=qa.exec(n),a=qa.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Fc(e,l===void 0?new Ya(o,i,t):new Za(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ka(o),Fc(e,u)),e=u}}}var qi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);qp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Oc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Yp=37297,Zp=0;function Kp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Bc=new zt;function Jp(i){Yt._getMatrix(Bc,Yt.workingColorSpace,i);let t=`mat3( ${Bc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case ls:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Kp(i.getShaderSource(t),o)}else return r}function jp(i,t){let e=Jp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qp(i,t){let e;switch(t){case nc:e="Linear";break;case ic:e="Reinhard";break;case sc:e="Cineon";break;case rc:e="ACESFilmic";break;case ac:e="AgX";break;case Hr:e="Neutral";break;case oc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Po=new D;function $p(){Yt.getLuminanceCoefficients(Po);let i=Po.x.toFixed(4),t=Po.y.toFixed(4),e=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function em(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Os(i){return i!==""}function kc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var im=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(im,rm)}var sm=new Map;function rm(i,t){let e=Vt[t];if(e===void 0){let n=sm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}var om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(i){return i.replace(om,am)}function am(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function lm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ma?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function cm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ni:case ii:t="ENVMAP_TYPE_CUBE";break;case Is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ii:t="ENVMAP_MODE_REFRACTION";break}return t}function um(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kr:t="ENVMAP_BLENDING_MULTIPLY";break;case tc:t="ENVMAP_BLENDING_MIX";break;case ec:t="ENVMAP_BLENDING_ADD";break}return t}function dm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=lm(e),l=cm(e),d=hm(e),u=um(e),f=dm(e),p=tm(e),g=em(r),y=s.createProgram(),m,h,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),h.length>0&&(h+=`
`)):(m=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),h=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Vt.tonemapping_pars_fragment:"",e.toneMapping!==En?Qp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,jp("linearToOutputTexel",e.outputColorSpace),$p(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=Ja(a),a=kc(a,e),a=Hc(a,e),o=Ja(o),o=kc(o,e),o=Hc(o,e),a=Vc(a),o=Vc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let E=S+m+a,b=S+h+o,A=Oc(s,s.VERTEX_SHADER,E),w=Oc(s,s.FRAGMENT_SHADER,b);s.attachShader(y,A),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",B=s.getShaderInfoLog(A)||"",V=s.getShaderInfoLog(w)||"",X=F.trim(),W=B.trim(),j=V.trim(),k=!0,et=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,w);else{let lt=zc(s,A,"vertex"),mt=zc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+lt+`
`+mt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||j==="")&&(et=!1);et&&(P.diagnostics={runnable:k,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:j,prefix:h}})}s.deleteShader(A),s.deleteShader(w),I=new qi(s,y),x=nm(s,y)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(y,Yp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zp++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=w,this}var pm=0,ja=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qa(t),e.set(t,n)),n}},Qa=class{constructor(t){this.id=pm++,this.code=t,this.usedTimes=0}};function mm(i,t,e,n,s,r,a){let o=new us,c=new ja,l=new Set,d=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,v,P,F,B){let V=F.fog,X=B.geometry,W=x.isMeshStandardMaterial?F.environment:null,j=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),k=j&&j.mapping===Is?j.image.height:null,et=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=lt!==void 0?lt.length:0,Ft=0;X.morphAttributes.position!==void 0&&(Ft=1),X.morphAttributes.normal!==void 0&&(Ft=2),X.morphAttributes.color!==void 0&&(Ft=3);let Q,dt,At,G;if(et){let Kt=un[et];Q=Kt.vertexShader,dt=Kt.fragmentShader}else Q=x.vertexShader,dt=x.fragmentShader,c.update(x),At=c.getVertexShaderID(x),G=c.getFragmentShaderID(x);let K=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),Rt=B.isInstancedMesh===!0,gt=B.isBatchedMesh===!0,Gt=!!x.map,de=!!x.matcap,C=!!j,ae=!!x.aoMap,Bt=!!x.lightMap,Lt=!!x.bumpMap,vt=!!x.normalMap,le=!!x.displacementMap,Mt=!!x.emissiveMap,Ht=!!x.metalnessMap,ye=!!x.roughnessMap,fe=x.anisotropy>0,T=x.clearcoat>0,_=x.dispersion>0,O=x.iridescence>0,Y=x.sheen>0,J=x.transmission>0,q=fe&&!!x.anisotropyMap,wt=T&&!!x.clearcoatMap,st=T&&!!x.clearcoatNormalMap,bt=T&&!!x.clearcoatRoughnessMap,St=O&&!!x.iridescenceMap,nt=O&&!!x.iridescenceThicknessMap,ht=Y&&!!x.sheenColorMap,It=Y&&!!x.sheenRoughnessMap,Et=!!x.specularMap,at=!!x.specularColorMap,kt=!!x.specularIntensityMap,L=J&&!!x.transmissionMap,it=J&&!!x.thicknessMap,rt=!!x.gradientMap,pt=!!x.alphaMap,$=x.alphaTest>0,Z=!!x.alphaHash,xt=!!x.extensions,Ot=En;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let ie={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:Q,fragmentShader:dt,defines:x.defines,customVertexShaderID:At,customFragmentShaderID:G,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:gt,batchingColor:gt&&B._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&B.instanceColor!==null,instancingMorph:Rt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Qn,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:de,envMap:C,envMapMode:C&&j.mapping,envMapCubeUVHeight:k,aoMap:ae,lightMap:Bt,bumpMap:Lt,normalMap:vt,displacementMap:f&&le,emissiveMap:Mt,normalMapObjectSpace:vt&&x.normalMapType===uc,normalMapTangentSpace:vt&&x.normalMapType===Ao,metalnessMap:Ht,roughnessMap:ye,anisotropy:fe,anisotropyMap:q,clearcoat:T,clearcoatMap:wt,clearcoatNormalMap:st,clearcoatRoughnessMap:bt,dispersion:_,iridescence:O,iridescenceMap:St,iridescenceThicknessMap:nt,sheen:Y,sheenColorMap:ht,sheenRoughnessMap:It,specularMap:Et,specularColorMap:at,specularIntensityMap:kt,transmission:J,transmissionMap:L,thicknessMap:it,gradientMap:rt,opaque:x.transparent===!1&&x.blending===Jn&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:$,alphaHash:Z,combine:x.combine,mapUv:Gt&&y(x.map.channel),aoMapUv:ae&&y(x.aoMap.channel),lightMapUv:Bt&&y(x.lightMap.channel),bumpMapUv:Lt&&y(x.bumpMap.channel),normalMapUv:vt&&y(x.normalMap.channel),displacementMapUv:le&&y(x.displacementMap.channel),emissiveMapUv:Mt&&y(x.emissiveMap.channel),metalnessMapUv:Ht&&y(x.metalnessMap.channel),roughnessMapUv:ye&&y(x.roughnessMap.channel),anisotropyMapUv:q&&y(x.anisotropyMap.channel),clearcoatMapUv:wt&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(x.sheenRoughnessMap.channel),specularMapUv:Et&&y(x.specularMap.channel),specularColorMapUv:at&&y(x.specularColorMap.channel),specularIntensityMapUv:kt&&y(x.specularIntensityMap.channel),transmissionMapUv:L&&y(x.transmissionMap.channel),thicknessMapUv:it&&y(x.thicknessMap.channel),alphaMapUv:pt&&y(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(vt||fe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Gt||pt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ut,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===Qt,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(x.emissiveMap.colorSpace)===Qt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===Ee,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&x.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function h(x){let v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)v.push(P),v.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(S(v,x),E(v,x),v.push(i.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function S(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function E(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),x.push(o.mask)}function b(x){let v=g[x.type],P;if(v){let F=un[v];P=bc.clone(F.uniforms)}else P=x.uniforms;return P}function A(x,v){let P;for(let F=0,B=d.length;F<B;F++){let V=d[F];if(V.cacheKey===v){P=V,++P.usedTimes;break}}return P===void 0&&(P=new fm(i,v,x,r),d.push(P)),P}function w(x){if(--x.usedTimes===0){let v=d.indexOf(x);d[v]=d[d.length-1],d.pop(),x.destroy()}}function R(x){c.remove(x)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:d,dispose:I}}function gm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _m(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,y,m){let h=i[t];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=y,h.group=m),t++,h}function o(u,f,p,g,y,m){let h=a(u,f,p,g,y,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function c(u,f,p,g,y,m){let h=a(u,f,p,g,y,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function l(u,f){e.length>1&&e.sort(u||_m),n.length>1&&n.sort(f||Wc),s.length>1&&s.sort(f||Wc)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function xm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xc,i.set(n,[a])):s>=r.length?(a=new Xc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ym(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Nt};break;case"SpotLight":e={position:new D,direction:new D,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function vm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Mm=0;function bm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sm(i){let t=new ym,e=vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new oe,a=new oe;function o(l){let d=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,y=0,m=0,h=0,S=0,E=0,b=0,A=0,w=0,R=0;l.sort(bm);for(let x=0,v=l.length;x<v;x++){let P=l[x],F=P.color,B=P.intensity,V=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=F.r*B,u+=F.g*B,f+=F.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],B);R++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,k=e.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=W,p++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(F).multiplyScalar(B),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[y]=W;let j=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,j.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[y]=j.matrix,P.castShadow){let k=e.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.spotShadow[y]=k,n.spotShadowMap[y]=X,b++}y++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let j=P.shadow,k=e.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[h]=W,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==S||I.numPointShadows!==E||I.numSpotShadows!==b||I.numSpotMaps!==A||I.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.directionalLength=p,I.pointLength=g,I.spotLength=y,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=S,I.numPointShadows=E,I.numSpotShadows=b,I.numSpotMaps=A,I.numLightProbes=R,n.version=Mm++)}function c(l,d){let u=0,f=0,p=0,g=0,y=0,m=d.matrixWorldInverse;for(let h=0,S=l.length;h<S;h++){let E=l[h];if(E.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(E.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let b=n.hemi[y];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:n}}function qc(i){let t=new Sm(i),e=[],n=[];function s(d){l.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function c(d){t.setupView(e,d)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Em(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new qc(i),t.set(s,[o])):r>=a.length?(o=new qc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
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
}`;function Am(i,t,e){let n=new Di,s=new yt,r=new yt,a=new jt,o=new vr({depthPacking:hc}),c=new Mr,l={},d=e.maxTextureSize,u={[yn]:Ee,[Ee]:yn,[hn]:hn},f=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:wm,fragmentShader:Tm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let h=this.type;this.render=function(w,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let x=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Sn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=h!==cn&&this.type===cn,V=h===cn&&this.type!==cn;for(let X=0,W=w.length;X<W;X++){let j=w[X],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let et=k.getFrameExtents();if(s.multiply(et),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/et.x),s.x=r.x*et.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/et.y),s.y=r.y*et.y,k.mapSize.y=r.y)),k.map===null||B===!0||V===!0){let mt=this.type!==cn?{minFilter:Ne,magFilter:Ne}:{};k.map!==null&&k.map.dispose(),k.map=new on(s.x,s.y,mt),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let lt=k.getViewportCount();for(let mt=0;mt<lt;mt++){let Ft=k.getViewport(mt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),F.viewport(a),k.updateMatrices(j,mt),n=k.getFrustum(),b(R,I,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===cn&&S(k,I),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(x,v,P)};function S(w,R){let I=t.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new on(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,I,f,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,I,p,y,null)}function E(w,R,I,x){let v=null,P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)v=P;else if(v=I.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=v.uuid,B=R.uuid,V=l[F];V===void 0&&(V={},l[F]=V);let X=V[B];X===void 0&&(X=v.clone(),V[B]=X,R.addEventListener("dispose",A)),v=X}if(v.visible=R.visible,v.wireframe=R.wireframe,x===cn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=i.properties.get(v);F.light=I}return v}function b(w,R,I,x,v){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===cn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let B=t.update(w),V=w.material;if(Array.isArray(V)){let X=B.groups;for(let W=0,j=X.length;W<j;W++){let k=X[W],et=V[k.materialIndex];if(et&&et.visible){let lt=E(w,et,x,v);w.onBeforeShadow(i,w,R,I,B,lt,k),i.renderBufferDirect(I,null,B,lt,w,k),w.onAfterShadow(i,w,R,I,B,lt,k)}}}else if(V.visible){let X=E(w,V,x,v);w.onBeforeShadow(i,w,R,I,B,X,null),i.renderBufferDirect(I,null,B,X,w,null),w.onAfterShadow(i,w,R,I,B,X,null)}}let F=w.children;for(let B=0,V=F.length;B<V;B++)b(F[B],R,I,x,v)}function A(w){w.target.removeEventListener("dispose",A);for(let I in l){let x=l[I],v=w.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}var Rm={[Dr]:Ur,[Nr]:Br,[Fr]:zr,[jn]:Or,[Ur]:Dr,[Br]:Nr,[zr]:Fr,[Or]:jn};function Cm(i,t){function e(){let L=!1,it=new jt,rt=null,pt=new jt(0,0,0,0);return{setMask:function($){rt!==$&&!L&&(i.colorMask($,$,$,$),rt=$)},setLocked:function($){L=$},setClear:function($,Z,xt,Ot,ie){ie===!0&&($*=Ot,Z*=Ot,xt*=Ot),it.set($,Z,xt,Ot),pt.equals(it)===!1&&(i.clearColor($,Z,xt,Ot),pt.copy(it))},reset:function(){L=!1,rt=null,pt.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,rt=null,pt=null,$=null;return{setReversed:function(Z){if(it!==Z){let xt=t.get("EXT_clip_control");Z?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),it=Z;let Ot=$;$=null,this.setClear(Ot)}},getReversed:function(){return it},setTest:function(Z){Z?K(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(Z){rt!==Z&&!L&&(i.depthMask(Z),rt=Z)},setFunc:function(Z){if(it&&(Z=Rm[Z]),pt!==Z){switch(Z){case Dr:i.depthFunc(i.NEVER);break;case Ur:i.depthFunc(i.ALWAYS);break;case Nr:i.depthFunc(i.LESS);break;case jn:i.depthFunc(i.LEQUAL);break;case Fr:i.depthFunc(i.EQUAL);break;case Or:i.depthFunc(i.GEQUAL);break;case Br:i.depthFunc(i.GREATER);break;case zr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Z}},setLocked:function(Z){L=Z},setClear:function(Z){$!==Z&&(it&&(Z=1-Z),i.clearDepth(Z),$=Z)},reset:function(){L=!1,rt=null,pt=null,$=null,it=!1}}}function s(){let L=!1,it=null,rt=null,pt=null,$=null,Z=null,xt=null,Ot=null,ie=null;return{setTest:function(Kt){L||(Kt?K(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Kt){it!==Kt&&!L&&(i.stencilMask(Kt),it=Kt)},setFunc:function(Kt,dn,sn){(rt!==Kt||pt!==dn||$!==sn)&&(i.stencilFunc(Kt,dn,sn),rt=Kt,pt=dn,$=sn)},setOp:function(Kt,dn,sn){(Z!==Kt||xt!==dn||Ot!==sn)&&(i.stencilOp(Kt,dn,sn),Z=Kt,xt=dn,Ot=sn)},setLocked:function(Kt){L=Kt},setClear:function(Kt){ie!==Kt&&(i.clearStencil(Kt),ie=Kt)},reset:function(){L=!1,it=null,rt=null,pt=null,$=null,Z=null,xt=null,Ot=null,ie=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,d={},u={},f=new WeakMap,p=[],g=null,y=!1,m=null,h=null,S=null,E=null,b=null,A=null,w=null,R=new Nt(0,0,0),I=0,x=!1,v=null,P=null,F=null,B=null,V=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=j>=2);let et=null,lt={},mt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Q=new jt().fromArray(mt),dt=new jt().fromArray(Ft);function At(L,it,rt,pt){let $=new Uint8Array(4),Z=i.createTexture();i.bindTexture(L,Z),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<rt;xt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(it+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return Z}let G={};G[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(jn),Lt(!1),vt(va),K(i.CULL_FACE),ae(Sn);function K(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function ut(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Rt(L,it){return u[L]!==it?(i.bindFramebuffer(L,it),u[L]=it,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function gt(L,it){let rt=p,pt=!1;if(L){rt=f.get(it),rt===void 0&&(rt=[],f.set(it,rt));let $=L.textures;if(rt.length!==$.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,xt=$.length;Z<xt;Z++)rt[Z]=i.COLOR_ATTACHMENT0+Z;rt.length=$.length,pt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(rt)}function Gt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let de={[Un]:i.FUNC_ADD,[Ol]:i.FUNC_SUBTRACT,[Bl]:i.FUNC_REVERSE_SUBTRACT};de[zl]=i.MIN,de[kl]=i.MAX;let C={[Hl]:i.ZERO,[Vl]:i.ONE,[Gl]:i.SRC_COLOR,[cr]:i.SRC_ALPHA,[Kl]:i.SRC_ALPHA_SATURATE,[Yl]:i.DST_COLOR,[Xl]:i.DST_ALPHA,[Wl]:i.ONE_MINUS_SRC_COLOR,[hr]:i.ONE_MINUS_SRC_ALPHA,[Zl]:i.ONE_MINUS_DST_COLOR,[ql]:i.ONE_MINUS_DST_ALPHA,[Jl]:i.CONSTANT_COLOR,[jl]:i.ONE_MINUS_CONSTANT_COLOR,[Ql]:i.CONSTANT_ALPHA,[$l]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(L,it,rt,pt,$,Z,xt,Ot,ie,Kt){if(L===Sn){y===!0&&(ut(i.BLEND),y=!1);return}if(y===!1&&(K(i.BLEND),y=!0),L!==Fl){if(L!==m||Kt!==x){if((h!==Un||b!==Un)&&(i.blendEquation(i.FUNC_ADD),h=Un,b=Un),Kt)switch(L){case Jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFunc(i.ONE,i.ONE);break;case Sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ea:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,E=null,A=null,w=null,R.set(0,0,0),I=0,m=L,x=Kt}return}$=$||it,Z=Z||rt,xt=xt||pt,(it!==h||$!==b)&&(i.blendEquationSeparate(de[it],de[$]),h=it,b=$),(rt!==S||pt!==E||Z!==A||xt!==w)&&(i.blendFuncSeparate(C[rt],C[pt],C[Z],C[xt]),S=rt,E=pt,A=Z,w=xt),(Ot.equals(R)===!1||ie!==I)&&(i.blendColor(Ot.r,Ot.g,Ot.b,ie),R.copy(Ot),I=ie),m=L,x=!1}function Bt(L,it){L.side===hn?ut(i.CULL_FACE):K(i.CULL_FACE);let rt=L.side===Ee;it&&(rt=!rt),Lt(rt),L.blending===Jn&&L.transparent===!1?ae(Sn):ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let pt=L.stencilWrite;o.setTest(pt),pt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Mt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(L){v!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),v=L)}function vt(L){L!==Dl?(K(i.CULL_FACE),L!==P&&(L===va?i.cullFace(i.BACK):L===Ul?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),P=L}function le(L){L!==F&&(W&&i.lineWidth(L),F=L)}function Mt(L,it,rt){L?(K(i.POLYGON_OFFSET_FILL),(B!==it||V!==rt)&&(i.polygonOffset(it,rt),B=it,V=rt)):ut(i.POLYGON_OFFSET_FILL)}function Ht(L){L?K(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function ye(L){L===void 0&&(L=i.TEXTURE0+X-1),et!==L&&(i.activeTexture(L),et=L)}function fe(L,it,rt){rt===void 0&&(et===null?rt=i.TEXTURE0+X-1:rt=et);let pt=lt[rt];pt===void 0&&(pt={type:void 0,texture:void 0},lt[rt]=pt),(pt.type!==L||pt.texture!==it)&&(et!==rt&&(i.activeTexture(rt),et=rt),i.bindTexture(L,it||G[L]),pt.type=L,pt.texture=it)}function T(){let L=lt[et];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(L){Q.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function It(L){dt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),dt.copy(L))}function Et(L,it){let rt=l.get(it);rt===void 0&&(rt=new WeakMap,l.set(it,rt));let pt=rt.get(L);pt===void 0&&(pt=i.getUniformBlockIndex(it,L.name),rt.set(L,pt))}function at(L,it){let pt=l.get(it).get(L);c.get(it)!==pt&&(i.uniformBlockBinding(it,pt,L.__bindingPointIndex),c.set(it,pt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},et=null,lt={},u={},f=new WeakMap,p=[],g=null,y=!1,m=null,h=null,S=null,E=null,b=null,A=null,w=null,R=new Nt(0,0,0),I=0,x=!1,v=null,P=null,F=null,B=null,V=null,Q.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ut,bindFramebuffer:Rt,drawBuffers:gt,useProgram:Gt,setBlending:ae,setMaterial:Bt,setFlipSided:Lt,setCullFace:vt,setLineWidth:le,setPolygonOffset:Mt,setScissorTest:Ht,activeTexture:ye,bindTexture:fe,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:St,texImage3D:nt,updateUBOMapping:Et,uniformBlockBinding:at,texStorage2D:st,texStorage3D:bt,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:wt,scissor:ht,viewport:It,reset:kt}}function Pm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,d=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):Ri("canvas")}function y(T,_,O){let Y=1,J=fe(T);if((J.width>O||J.height>O)&&(Y=O/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let q=Math.floor(Y*J.width),wt=Math.floor(Y*J.height);u===void 0&&(u=g(q,wt));let st=_?g(q,wt):u;return st.width=q,st.height=wt,st.getContext("2d").drawImage(T,0,0,q,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+wt+")."),st}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,_,O,Y,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=_;if(_===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),_===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),_===i.RGBA){let wt=J?ls:Yt.getTransfer(Y);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=wt===Qt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function b(T,_){let O;return T?_===null||_===Vn||_===Hi?O=i.DEPTH24_STENCIL8:_===nn?O=i.DEPTH32F_STENCIL8:_===zi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vn||_===Hi?O=i.DEPTH_COMPONENT24:_===nn?O=i.DEPTH_COMPONENT32F:_===zi&&(O=i.DEPTH_COMPONENT16),O}function A(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ne&&T.minFilter!==tn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function w(T){let _=T.target;_.removeEventListener("dispose",w),I(_),_.isVideoTexture&&d.delete(_)}function R(T){let _=T.target;_.removeEventListener("dispose",R),v(_)}function I(T){let _=n.get(T);if(_.__webglInit===void 0)return;let O=T.source,Y=f.get(O);if(Y){let J=Y[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(T),Object.keys(Y).length===0&&f.delete(O)}n.remove(T)}function x(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let O=T.source,Y=f.get(O);delete Y[_.__cacheKey],a.memory.textures--}function v(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let J=0;J<_.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=T.textures;for(let Y=0,J=O.length;Y<J;Y++){let q=n.get(O[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(T)}let P=0;function F(){P=0}function B(){let T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function V(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function X(T,_){let O=n.get(T);if(T.isVideoTexture&&Ht(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(O,T,_);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function W(T,_){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){G(O,T,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function j(T,_){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){G(O,T,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function k(T,_){let O=n.get(T);if(T.version>0&&O.__version!==T.version){K(O,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let et={[ur]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[dr]:i.MIRRORED_REPEAT},lt={[Ne]:i.NEAREST,[lc]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},mt={[dc]:i.NEVER,[xc]:i.ALWAYS,[fc]:i.LESS,[Da]:i.LEQUAL,[pc]:i.EQUAL,[_c]:i.GEQUAL,[mc]:i.GREATER,[gc]:i.NOTEQUAL};function Ft(T,_){if(_.type===nn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===tn||_.magFilter===Wr||_.magFilter===Ls||_.magFilter===Hn||_.minFilter===tn||_.minFilter===Wr||_.minFilter===Ls||_.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,et[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,et[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,et[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,lt[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,lt[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ne||_.minFilter!==Ls&&_.minFilter!==Hn||_.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Q(T,_){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",w));let Y=_.source,J=f.get(Y);J===void 0&&(J={},f.set(Y,J));let q=V(_);if(q!==T.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[q].usedTimes++;let wt=J[T.__cacheKey];wt!==void 0&&(J[T.__cacheKey].usedTimes--,wt.usedTimes===0&&x(_)),T.__cacheKey=q,T.__webglTexture=J[q].texture}return O}function dt(T,_,O){return Math.floor(Math.floor(T/O)/_)}function At(T,_,O,Y){let q=T.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,Y,_.data);else{q.sort((nt,ht)=>nt.start-ht.start);let wt=0;for(let nt=1;nt<q.length;nt++){let ht=q[wt],It=q[nt],Et=ht.start+ht.count,at=dt(It.start,_.width,4),kt=dt(ht.start,_.width,4);It.start<=Et+1&&at===kt&&dt(It.start+It.count-1,_.width,4)===at?ht.count=Math.max(ht.count,It.start+It.count-ht.start):(++wt,q[wt]=It)}q.length=wt+1;let st=i.getParameter(i.UNPACK_ROW_LENGTH),bt=i.getParameter(i.UNPACK_SKIP_PIXELS),St=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let nt=0,ht=q.length;nt<ht;nt++){let It=q[nt],Et=Math.floor(It.start/4),at=Math.ceil(It.count/4),kt=Et%_.width,L=Math.floor(Et/_.width),it=at,rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,kt,L,it,rt,O,Y,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,st),i.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function G(T,_,O){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let J=Q(T,_),q=_.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+O);let wt=n.get(q);if(q.version!==wt.__version||J===!0){e.activeTexture(i.TEXTURE0+O);let st=Yt.getPrimaries(Yt.workingColorSpace),bt=_.colorSpace===wn?null:Yt.getPrimaries(_.colorSpace),St=_.colorSpace===wn||st===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let nt=y(_.image,!1,s.maxTextureSize);nt=ye(_,nt);let ht=r.convert(_.format,_.colorSpace),It=r.convert(_.type),Et=E(_.internalFormat,ht,It,_.colorSpace,_.isVideoTexture);Ft(Y,_);let at,kt=_.mipmaps,L=_.isVideoTexture!==!0,it=wt.__version===void 0||J===!0,rt=q.dataReady,pt=A(_,nt);if(_.isDepthTexture)Et=b(_.format===Vi,_.type),it&&(L?e.texStorage2D(i.TEXTURE_2D,1,Et,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Et,nt.width,nt.height,0,ht,It,null));else if(_.isDataTexture)if(kt.length>0){L&&it&&e.texStorage2D(i.TEXTURE_2D,pt,Et,kt[0].width,kt[0].height);for(let $=0,Z=kt.length;$<Z;$++)at=kt[$],L?rt&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,ht,It,at.data):e.texImage2D(i.TEXTURE_2D,$,Et,at.width,at.height,0,ht,It,at.data);_.generateMipmaps=!1}else L?(it&&e.texStorage2D(i.TEXTURE_2D,pt,Et,nt.width,nt.height),rt&&At(_,nt,ht,It)):e.texImage2D(i.TEXTURE_2D,0,Et,nt.width,nt.height,0,ht,It,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Et,kt[0].width,kt[0].height,nt.depth);for(let $=0,Z=kt.length;$<Z;$++)if(at=kt[$],_.format!==Ze)if(ht!==null)if(L){if(rt)if(_.layerUpdates.size>0){let xt=ka(at.width,at.height,_.format,_.type);for(let Ot of _.layerUpdates){let ie=at.data.subarray(Ot*xt/at.data.BYTES_PER_ELEMENT,(Ot+1)*xt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Ot,at.width,at.height,1,ht,ie)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,nt.depth,ht,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Et,at.width,at.height,nt.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,nt.depth,ht,It,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Et,at.width,at.height,nt.depth,0,ht,It,at.data)}else{L&&it&&e.texStorage2D(i.TEXTURE_2D,pt,Et,kt[0].width,kt[0].height);for(let $=0,Z=kt.length;$<Z;$++)at=kt[$],_.format!==Ze?ht!==null?L?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,ht,at.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Et,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?rt&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,ht,It,at.data):e.texImage2D(i.TEXTURE_2D,$,Et,at.width,at.height,0,ht,It,at.data)}else if(_.isDataArrayTexture)if(L){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Et,nt.width,nt.height,nt.depth),rt)if(_.layerUpdates.size>0){let $=ka(nt.width,nt.height,_.format,_.type);for(let Z of _.layerUpdates){let xt=nt.data.subarray(Z*$/nt.data.BYTES_PER_ELEMENT,(Z+1)*$/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,ht,It,xt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ht,It,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,nt.width,nt.height,nt.depth,0,ht,It,nt.data);else if(_.isData3DTexture)L?(it&&e.texStorage3D(i.TEXTURE_3D,pt,Et,nt.width,nt.height,nt.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ht,It,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Et,nt.width,nt.height,nt.depth,0,ht,It,nt.data);else if(_.isFramebufferTexture){if(it)if(L)e.texStorage2D(i.TEXTURE_2D,pt,Et,nt.width,nt.height);else{let $=nt.width,Z=nt.height;for(let xt=0;xt<pt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Et,$,Z,0,ht,It,null),$>>=1,Z>>=1}}else if(kt.length>0){if(L&&it){let $=fe(kt[0]);e.texStorage2D(i.TEXTURE_2D,pt,Et,$.width,$.height)}for(let $=0,Z=kt.length;$<Z;$++)at=kt[$],L?rt&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ht,It,at):e.texImage2D(i.TEXTURE_2D,$,Et,ht,It,at);_.generateMipmaps=!1}else if(L){if(it){let $=fe(nt);e.texStorage2D(i.TEXTURE_2D,pt,Et,$.width,$.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,It,nt)}else e.texImage2D(i.TEXTURE_2D,0,Et,ht,It,nt);m(_)&&h(Y),wt.__version=q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function K(T,_,O){if(_.image.length!==6)return;let Y=Q(T,_),J=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let q=n.get(J);if(J.version!==q.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);let wt=Yt.getPrimaries(Yt.workingColorSpace),st=_.colorSpace===wn?null:Yt.getPrimaries(_.colorSpace),bt=_.colorSpace===wn||wt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let St=_.isCompressedTexture||_.image[0].isCompressedTexture,nt=_.image[0]&&_.image[0].isDataTexture,ht=[];for(let Z=0;Z<6;Z++)!St&&!nt?ht[Z]=y(_.image[Z],!0,s.maxCubemapSize):ht[Z]=nt?_.image[Z].image:_.image[Z],ht[Z]=ye(_,ht[Z]);let It=ht[0],Et=r.convert(_.format,_.colorSpace),at=r.convert(_.type),kt=E(_.internalFormat,Et,at,_.colorSpace),L=_.isVideoTexture!==!0,it=q.__version===void 0||Y===!0,rt=J.dataReady,pt=A(_,It);Ft(i.TEXTURE_CUBE_MAP,_);let $;if(St){L&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,kt,It.width,It.height);for(let Z=0;Z<6;Z++){$=ht[Z].mipmaps;for(let xt=0;xt<$.length;xt++){let Ot=$[xt];_.format!==Ze?Et!==null?L?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,0,0,Ot.width,Ot.height,Et,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,0,0,Ot.width,Ot.height,Et,at,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,kt,Ot.width,Ot.height,0,Et,at,Ot.data)}}}else{if($=_.mipmaps,L&&it){$.length>0&&pt++;let Z=fe(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ht[Z].width,ht[Z].height,Et,at,ht[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,ht[Z].width,ht[Z].height,0,Et,at,ht[Z].data);for(let xt=0;xt<$.length;xt++){let ie=$[xt].image[Z].image;L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,0,0,ie.width,ie.height,Et,at,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,kt,ie.width,ie.height,0,Et,at,ie.data)}}else{L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Et,at,ht[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,Et,at,ht[Z]);for(let xt=0;xt<$.length;xt++){let Ot=$[xt];L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,0,0,Et,at,Ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,kt,Et,at,Ot.image[Z])}}}m(_)&&h(i.TEXTURE_CUBE_MAP),q.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ut(T,_,O,Y,J,q){let wt=r.convert(O.format,O.colorSpace),st=r.convert(O.type),bt=E(O.internalFormat,wt,st,O.colorSpace),St=n.get(_),nt=n.get(O);if(nt.__renderTarget=_,!St.__hasExternalTextures){let ht=Math.max(1,_.width>>q),It=Math.max(1,_.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,bt,ht,It,_.depth,0,wt,st,null):e.texImage2D(J,q,bt,ht,It,0,wt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Mt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,nt.__webglTexture,0,le(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,nt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(T,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let Y=_.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,q=b(_.stencilBuffer,J),wt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=le(_);Mt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,q,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,T)}else{let Y=_.textures;for(let J=0;J<Y.length;J++){let q=Y[J],wt=r.convert(q.format,q.colorSpace),st=r.convert(q.type),bt=E(q.internalFormat,wt,st,q.colorSpace),St=le(_);O&&Mt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,bt,_.width,_.height):Mt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,bt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,bt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let J=Y.__webglTexture,q=le(_);if(_.depthTexture.format===Ti)Mt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(_.depthTexture.format===Vi)Mt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Gt(T){let _=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Y}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let Y=T.texture.mipmaps;Y&&Y.length>0?gt(_.__webglFramebuffer[0],T):gt(_.__webglFramebuffer,T)}else if(O){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Rt(_.__webglDepthbuffer[Y],T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{let Y=T.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Rt(_.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function de(T,_,O){let Y=n.get(T);_!==void 0&&ut(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Gt(T)}function C(T){let _=T.texture,O=n.get(T),Y=n.get(_);T.addEventListener("dispose",R);let J=T.textures,q=T.isWebGLCubeRenderTarget===!0,wt=J.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let bt=0;bt<_.mipmaps.length;bt++)O.__webglFramebuffer[st][bt]=i.createFramebuffer()}else O.__webglFramebuffer[st]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<_.mipmaps.length;st++)O.__webglFramebuffer[st]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(wt)for(let st=0,bt=J.length;st<bt;st++){let St=n.get(J[st]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Mt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){let bt=J[st];O.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[st]);let St=r.convert(bt.format,bt.colorSpace),nt=r.convert(bt.type),ht=E(bt.internalFormat,St,nt,bt.colorSpace,T.isXRRenderTarget===!0),It=le(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,ht,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,O.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,_);for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0)for(let bt=0;bt<_.mipmaps.length;bt++)ut(O.__webglFramebuffer[st][bt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt);else ut(O.__webglFramebuffer[st],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(_)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let st=0,bt=J.length;st<bt;st++){let St=J[st],nt=n.get(St),ht=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,nt.__webglTexture),Ft(ht,St),ut(O.__webglFramebuffer,T,St,i.COLOR_ATTACHMENT0+st,ht,0),m(St)&&h(ht)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(st=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Y.__webglTexture),Ft(st,_),_.mipmaps&&_.mipmaps.length>0)for(let bt=0;bt<_.mipmaps.length;bt++)ut(O.__webglFramebuffer[bt],T,_,i.COLOR_ATTACHMENT0,st,bt);else ut(O.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,st,0);m(_)&&h(st),e.unbindTexture()}T.depthBuffer&&Gt(T)}function ae(T){let _=T.textures;for(let O=0,Y=_.length;O<Y;O++){let J=_[O];if(m(J)){let q=S(T),wt=n.get(J).__webglTexture;e.bindTexture(q,wt),h(q),e.unbindTexture()}}}let Bt=[],Lt=[];function vt(T){if(T.samples>0){if(Mt(T)===!1){let _=T.textures,O=T.width,Y=T.height,J=i.COLOR_BUFFER_BIT,q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(T),st=_.length>1;if(st)for(let St=0;St<_.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let bt=T.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let St=0;St<_.length;St++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[St]);let nt=n.get(_[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,J,i.NEAREST),c===!0&&(Bt.length=0,Lt.length=0,Bt.push(i.COLOR_ATTACHMENT0+St),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Bt.push(q),Lt.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let St=0;St<_.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,wt.__webglColorRenderbuffer[St]);let nt=n.get(_[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function le(T){return Math.min(s.maxSamples,T.samples)}function Mt(T){let _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ht(T){let _=a.render.frame;d.get(T)!==_&&(d.set(T,_),T.update())}function ye(T,_){let O=T.colorSpace,Y=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Qn&&O!==wn&&(Yt.getTransfer(O)===Qt?(Y!==Ze||J!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function fe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=de,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Mt}function Im(i,t){function e(n,s=wn){let r,a=Yt.getTransfer(s);if(n===en)return i.UNSIGNED_BYTE;if(n===qr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ra)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ca)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ta)return i.BYTE;if(n===Aa)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===Xr)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===Pa)return i.ALPHA;if(n===Ia)return i.RGB;if(n===Ze)return i.RGBA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Zr)return i.RED;if(n===Kr)return i.RED_INTEGER;if(n===La)return i.RG;if(n===Jr)return i.RG_INTEGER;if(n===jr)return i.RGBA_INTEGER;if(n===Ds||n===Us||n===Ns||n===Fs)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ds)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ds)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qr||n===$r||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===no||n===io)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===so)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ro)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ao)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ho)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===po)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===go)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===Mo||n===bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===So||n===Eo||n===wo||n===To)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===So)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Lm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dm=`
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

}`,$a=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ys(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Le({vertexShader:Lm,fragmentShader:Dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tl=class extends rn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,f=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new $a,h={},S=e.getContextAttributes(),E=null,b=null,A=[],w=[],R=new yt,I=null,x=new be;x.viewport=new jt;let v=new be;v.viewport=new jt;let P=[x,v],F=new Lr,B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=A[G];return K===void 0&&(K=new Li,A[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=A[G];return K===void 0&&(K=new Li,A[G]=K),K.getGripSpace()},this.getHand=function(G){let K=A[G];return K===void 0&&(K=new Li,A[G]=K),K.getHandSpace()};function X(G){let K=w.indexOf(G.inputSource);if(K===-1)return;let ut=A[K];ut!==void 0&&(ut.update(G.inputSource,G.frame,l||a),ut.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let G=0;G<A.length;G++){let K=w[G];K!==null&&(w[G]=null,A[G].disconnect(K))}B=null,V=null,m.reset();for(let G in h)delete h[G];t.setRenderTarget(E),p=null,f=null,u=null,s=null,b=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Rt=null,gt=null;S.depth&&(gt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=S.stencil?Vi:Ti,Rt=S.stencil?Hi:Vn);let Gt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Gt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new on(f.textureWidth,f.textureHeight,{format:Ze,type:en,depthTexture:new xs(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ut={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new on(p.framebufferWidth,p.framebufferHeight,{format:Ze,type:en,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),At.setContext(s),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(G){for(let K=0;K<G.removed.length;K++){let ut=G.removed[K],Rt=w.indexOf(ut);Rt>=0&&(w[Rt]=null,A[Rt].disconnect(ut))}for(let K=0;K<G.added.length;K++){let ut=G.added[K],Rt=w.indexOf(ut);if(Rt===-1){for(let Gt=0;Gt<A.length;Gt++)if(Gt>=w.length){w.push(ut),Rt=Gt;break}else if(w[Gt]===null){w[Gt]=ut,Rt=Gt;break}if(Rt===-1)break}let gt=A[Rt];gt&&gt.connect(ut)}}let k=new D,et=new D;function lt(G,K,ut){k.setFromMatrixPosition(K.matrixWorld),et.setFromMatrixPosition(ut.matrixWorld);let Rt=k.distanceTo(et),gt=K.projectionMatrix.elements,Gt=ut.projectionMatrix.elements,de=gt[14]/(gt[10]-1),C=gt[14]/(gt[10]+1),ae=(gt[9]+1)/gt[5],Bt=(gt[9]-1)/gt[5],Lt=(gt[8]-1)/gt[0],vt=(Gt[8]+1)/Gt[0],le=de*Lt,Mt=de*vt,Ht=Rt/(-Lt+vt),ye=Ht*-Lt;if(K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ye),G.translateZ(Ht),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),gt[10]===-1)G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let fe=de+Ht,T=C+Ht,_=le-ye,O=Mt+(Rt-ye),Y=ae*C/T*fe,J=Bt*C/T*fe;G.projectionMatrix.makePerspective(_,O,Y,J,fe,T),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function mt(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let K=G.near,ut=G.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),F.near=v.near=x.near=K,F.far=v.far=x.far=ut,(B!==F.near||V!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,V=F.far),F.layers.mask=G.layers.mask|6,x.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;let Rt=G.parent,gt=F.cameras;mt(F,Rt);for(let Gt=0;Gt<gt.length;Gt++)mt(gt[Gt],Rt);gt.length===2?lt(F,x,v):F.projectionMatrix.copy(x.projectionMatrix),Ft(G,F,Rt)};function Ft(G,K,ut){ut===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(ut.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ai*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(G){return h[G]};let Q=null;function dt(G,K){if(d=K.getViewerPose(l||a),g=K,d!==null){let ut=d.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let Rt=!1;ut.length!==F.cameras.length&&(F.cameras.length=0,Rt=!0);for(let C=0;C<ut.length;C++){let ae=ut[C],Bt=null;if(p!==null)Bt=p.getViewport(ae);else{let vt=u.getViewSubImage(f,ae);Bt=vt.viewport,C===0&&(t.setRenderTargetTextures(b,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(b))}let Lt=P[C];Lt===void 0&&(Lt=new be,Lt.layers.enable(C),Lt.viewport=new jt,P[C]=Lt),Lt.matrix.fromArray(ae.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(ae.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),C===0&&(F.matrix.copy(Lt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Rt===!0&&F.cameras.push(Lt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let C=u.getDepthInformation(ut[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<ut.length;C++){let ae=ut[C].camera;if(ae){let Bt=h[ae];Bt||(Bt=new ys,h[ae]=Bt);let Lt=u.getCameraImage(ae);Bt.sourceTexture=Lt}}}}for(let ut=0;ut<A.length;ut++){let Rt=w[ut],gt=A[ut];Rt!==null&&gt!==void 0&&gt.update(Rt,K,l||a)}Q&&Q(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let At=new Yc;At.setAnimationLoop(dt),this.setAnimationLoop=function(G){Q=G},this.dispose=function(){}}},oi=new Ye,Um=new oe;function Nm(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Oa(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,S,E,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),u(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),y(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,S,E):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ee&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ee&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let S=t.get(h),E=S.envMap,b=S.envMapRotation;E&&(m.envMap.value=E,oi.copy(b),oi.x*=-1,oi.y*=-1,oi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Um.makeRotationFromEuler(oi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,S,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=E*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ee&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){let S=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){let b=E.program;n.uniformBlockBinding(S,b)}function l(S,E){let b=s[S.id];b===void 0&&(g(S),b=d(S),s[S.id]=b,S.addEventListener("dispose",m));let A=E.program;n.updateUBOMapping(S,A);let w=t.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function d(S){let E=u();S.__bindingPointIndex=E;let b=i.createBuffer(),A=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let E=s[S.id],b=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,R=b.length;w<R;w++){let I=Array.isArray(b[w])?b[w]:[b[w]];for(let x=0,v=I.length;x<v;x++){let P=I[x];if(p(P,w,x,A)===!0){let F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],V=0;for(let X=0;X<B.length;X++){let W=B[X],j=y(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,F+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,b,A){let w=S.value,R=E+"_"+b;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{let I=A[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return A[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(S){let E=S.uniforms,b=0,A=16;for(let R=0,I=E.length;R<I;R++){let x=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,P=x.length;v<P;v++){let F=x[v],B=Array.isArray(F.value)?F.value:[F.value];for(let V=0,X=B.length;V<X;V++){let W=B[V],j=y(W),k=b%A,et=k%j.boundary,lt=k+et;b+=et,lt!==0&&A-lt<j.storage&&(b+=A-lt),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=j.storage}}}let w=b%A;return w>0&&(b+=A-w),S.__size=b,S.__cache={},this}function y(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){let E=S.target;E.removeEventListener("dispose",m);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:h}}var Io=class{constructor(t={}){let{canvas:e=yc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),y=new Int32Array(4),m=null,h=null,S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,A=!1;this._outputColorSpace=Pe;let w=0,R=0,I=null,x=-1,v=null,P=new jt,F=new jt,B=null,V=new Nt(0),X=0,W=e.width,j=e.height,k=1,et=null,lt=null,mt=new jt(0,0,W,j),Ft=new jt(0,0,W,j),Q=!1,dt=new Di,At=!1,G=!1,K=new oe,ut=new D,Rt=new jt,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function de(){return I===null?k:1}let C=n;function ae(M,U){return e.getContext(M,U)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",$,!1),C===null){let U="webgl2";if(C=ae(U,M),C===null)throw ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Bt,Lt,vt,le,Mt,Ht,ye,fe,T,_,O,Y,J,q,wt,st,bt,St,nt,ht,It,Et,at,kt;function L(){Bt=new tp(C),Bt.init(),Et=new Im(C,Bt),Lt=new Yf(C,Bt,t,Et),vt=new Cm(C,Bt),Lt.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),le=new ip(C),Mt=new gm,Ht=new Pm(C,Bt,vt,Mt,Lt,Et,le),ye=new Kf(b),fe=new $f(b),T=new lu(C),at=new Xf(C,T),_=new ep(C,T,le,at),O=new rp(C,_,T,le),nt=new sp(C,Lt,Ht),st=new Zf(Mt),Y=new mm(b,ye,fe,Bt,Lt,at,st),J=new Nm(b,Mt),q=new xm,wt=new Em(Bt),St=new Wf(b,ye,fe,vt,O,p,c),bt=new Am(b,O,Lt),kt=new Fm(C,le,Lt,vt),ht=new qf(C,Bt,le),It=new np(C,Bt,le),le.programs=Y.programs,b.capabilities=Lt,b.extensions=Bt,b.properties=Mt,b.renderLists=q,b.shadowMap=bt,b.state=vt,b.info=le}L();let it=new tl(b,C);this.xr=it,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=Bt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Bt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(M){M!==void 0&&(k=M,this.setSize(W,j,!1))},this.getSize=function(M){return M.set(W,j)},this.setSize=function(M,U,z=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,j=U,e.width=Math.floor(M*k),e.height=Math.floor(U*k),z===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(W*k,j*k).floor()},this.setDrawingBufferSize=function(M,U,z){W=M,j=U,k=z,e.width=Math.floor(M*z),e.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(mt)},this.setViewport=function(M,U,z,H){M.isVector4?mt.set(M.x,M.y,M.z,M.w):mt.set(M,U,z,H),vt.viewport(P.copy(mt).multiplyScalar(k).round())},this.getScissor=function(M){return M.copy(Ft)},this.setScissor=function(M,U,z,H){M.isVector4?Ft.set(M.x,M.y,M.z,M.w):Ft.set(M,U,z,H),vt.scissor(F.copy(Ft).multiplyScalar(k).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(M){vt.setScissorTest(Q=M)},this.setOpaqueSort=function(M){et=M},this.setTransparentSort=function(M){lt=M},this.getClearColor=function(M){return M.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,z=!0){let H=0;if(M){let N=!1;if(I!==null){let tt=I.texture.format;N=tt===jr||tt===Jr||tt===Kr}if(N){let tt=I.texture.type,ct=tt===en||tt===Vn||tt===zi||tt===Hi||tt===qr||tt===Yr,_t=St.getClearColor(),ft=St.getClearAlpha(),Pt=_t.r,Dt=_t.g,Tt=_t.b;ct?(g[0]=Pt,g[1]=Dt,g[2]=Tt,g[3]=ft,C.clearBufferuiv(C.COLOR,0,g)):(y[0]=Pt,y[1]=Dt,y[2]=Tt,y[3]=ft,C.clearBufferiv(C.COLOR,0,y))}else H|=C.COLOR_BUFFER_BIT}U&&(H|=C.DEPTH_BUFFER_BIT),z&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",$,!1),St.dispose(),q.dispose(),wt.dispose(),Mt.dispose(),ye.dispose(),fe.dispose(),O.dispose(),at.dispose(),kt.dispose(),Y.dispose(),it.dispose(),it.removeEventListener("sessionstart",sn),it.removeEventListener("sessionend",sl),Gn.stop()};function rt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let M=le.autoReset,U=bt.enabled,z=bt.autoUpdate,H=bt.needsUpdate,N=bt.type;L(),le.autoReset=M,bt.enabled=U,bt.autoUpdate=z,bt.needsUpdate=H,bt.type=N}function $(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Z(M){let U=M.target;U.removeEventListener("dispose",Z),xt(U)}function xt(M){Ot(M),Mt.remove(M)}function Ot(M){let U=Mt.get(M).programs;U!==void 0&&(U.forEach(function(z){Y.releaseProgram(z)}),M.isShaderMaterial&&Y.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,H,N,tt){U===null&&(U=gt);let ct=N.isMesh&&N.matrixWorld.determinant()<0,_t=rh(M,U,z,H,N);vt.setMaterial(H,ct);let ft=z.index,Pt=1;if(H.wireframe===!0){if(ft=_.getWireframeAttribute(z),ft===void 0)return;Pt=2}let Dt=z.drawRange,Tt=z.attributes.position,Xt=Dt.start*Pt,$t=(Dt.start+Dt.count)*Pt;tt!==null&&(Xt=Math.max(Xt,tt.start*Pt),$t=Math.min($t,(tt.start+tt.count)*Pt)),ft!==null?(Xt=Math.max(Xt,0),$t=Math.min($t,ft.count)):Tt!=null&&(Xt=Math.max(Xt,0),$t=Math.min($t,Tt.count));let ue=$t-Xt;if(ue<0||ue===1/0)return;at.setup(N,H,_t,z,ft);let se,ee=ht;if(ft!==null&&(se=T.get(ft),ee=It,ee.setIndex(se)),N.isMesh)H.wireframe===!0?(vt.setLineWidth(H.wireframeLinewidth*de()),ee.setMode(C.LINES)):ee.setMode(C.TRIANGLES);else if(N.isLine){let Ct=H.linewidth;Ct===void 0&&(Ct=1),vt.setLineWidth(Ct*de()),N.isLineSegments?ee.setMode(C.LINES):N.isLineLoop?ee.setMode(C.LINE_LOOP):ee.setMode(C.LINE_STRIP)}else N.isPoints?ee.setMode(C.POINTS):N.isSprite&&ee.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ci("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ct=N._multiDrawStarts,ce=N._multiDrawCounts,Zt=N._multiDrawCount,Oe=ft?T.get(ft).bytesPerElement:1,ci=Mt.get(H).currentProgram.getUniforms();for(let Be=0;Be<Zt;Be++)ci.setValue(C,"_gl_DrawID",Be),ee.render(Ct[Be]/Oe,ce[Be])}else if(N.isInstancedMesh)ee.renderInstances(Xt,ue,N.count);else if(z.isInstancedBufferGeometry){let Ct=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ce=Math.min(z.instanceCount,Ct);ee.renderInstances(Xt,ue,ce)}else ee.render(Xt,ue)};function ie(M,U,z){M.transparent===!0&&M.side===hn&&M.forceSinglePass===!1?(M.side=Ee,M.needsUpdate=!0,Hs(M,U,z),M.side=yn,M.needsUpdate=!0,Hs(M,U,z),M.side=hn):Hs(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),h=wt.get(z),h.init(U),E.push(h),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),M!==z&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();let H=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let tt=N.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){let _t=tt[ct];ie(_t,z,N),H.add(_t)}else ie(tt,z,N),H.add(tt)}),h=E.pop(),H},this.compileAsync=function(M,U,z=null){let H=this.compile(M,U,z);return new Promise(N=>{function tt(){if(H.forEach(function(ct){Mt.get(ct).currentProgram.isReady()&&H.delete(ct)}),H.size===0){N(M);return}setTimeout(tt,10)}Bt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Kt=null;function dn(M){Kt&&Kt(M)}function sn(){Gn.stop()}function sl(){Gn.start()}let Gn=new Yc;Gn.setAnimationLoop(dn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(M){Kt=M,it.setAnimationLoop(M),M===null?Gn.stop():Gn.start()},it.addEventListener("sessionstart",sn),it.addEventListener("sessionend",sl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,U,I),h=wt.get(M,E.length),h.init(U),E.push(h),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),dt.setFromProjectionMatrix(K,$e,U.reversedDepth),G=this.localClippingEnabled,At=st.init(this.clippingPlanes,G),m=q.get(M,S.length),m.init(),S.push(m),it.enabled===!0&&it.isPresenting===!0){let tt=b.xr.getDepthSensingMesh();tt!==null&&Ho(tt,U,-1/0,b.sortObjects)}Ho(M,U,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(et,lt),Gt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Gt&&St.addToRenderList(m,M),this.info.render.frame++,At===!0&&st.beginShadows();let z=h.state.shadowsArray;bt.render(z,M,U),At===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,N=m.transmissive;if(h.setupLights(),U.isArrayCamera){let tt=U.cameras;if(N.length>0)for(let ct=0,_t=tt.length;ct<_t;ct++){let ft=tt[ct];ol(H,N,M,ft)}Gt&&St.render(M);for(let ct=0,_t=tt.length;ct<_t;ct++){let ft=tt[ct];rl(m,M,ft,ft.viewport)}}else N.length>0&&ol(H,N,M,U),Gt&&St.render(M),rl(m,M,U);I!==null&&R===0&&(Ht.updateMultisampleRenderTarget(I),Ht.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(b,M,U),at.resetDefaultState(),x=-1,v=null,E.pop(),E.length>0?(h=E[E.length-1],At===!0&&st.setGlobalState(b.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ho(M,U,z,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||dt.intersectsSprite(M)){H&&Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);let ct=O.update(M),_t=M.material;_t.visible&&m.push(M,ct,_t,z,Rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||dt.intersectsObject(M))){let ct=O.update(M),_t=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Rt.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Rt.copy(ct.boundingSphere.center)),Rt.applyMatrix4(M.matrixWorld).applyMatrix4(K)),Array.isArray(_t)){let ft=ct.groups;for(let Pt=0,Dt=ft.length;Pt<Dt;Pt++){let Tt=ft[Pt],Xt=_t[Tt.materialIndex];Xt&&Xt.visible&&m.push(M,ct,Xt,z,Rt.z,Tt)}}else _t.visible&&m.push(M,ct,_t,z,Rt.z,null)}}let tt=M.children;for(let ct=0,_t=tt.length;ct<_t;ct++)Ho(tt[ct],U,z,H)}function rl(M,U,z,H){let N=M.opaque,tt=M.transmissive,ct=M.transparent;h.setupLightsView(z),At===!0&&st.setGlobalState(b.clippingPlanes,z),H&&vt.viewport(P.copy(H)),N.length>0&&ks(N,U,z),tt.length>0&&ks(tt,U,z),ct.length>0&&ks(ct,U,z),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ol(M,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new on(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?ki:en,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let tt=h.state.transmissionRenderTarget[H.id],ct=H.viewport||P;tt.setSize(ct.z*b.transmissionResolutionScale,ct.w*b.transmissionResolutionScale);let _t=b.getRenderTarget(),ft=b.getActiveCubeFace(),Pt=b.getActiveMipmapLevel();b.setRenderTarget(tt),b.getClearColor(V),X=b.getClearAlpha(),X<1&&b.setClearColor(16777215,.5),b.clear(),Gt&&St.render(z);let Dt=b.toneMapping;b.toneMapping=En;let Tt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),At===!0&&st.setGlobalState(b.clippingPlanes,H),ks(M,z,H),Ht.updateMultisampleRenderTarget(tt),Ht.updateRenderTargetMipmap(tt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let $t=0,ue=U.length;$t<ue;$t++){let se=U[$t],ee=se.object,Ct=se.geometry,ce=se.material,Zt=se.group;if(ce.side===hn&&ee.layers.test(H.layers)){let Oe=ce.side;ce.side=Ee,ce.needsUpdate=!0,al(ee,z,H,Ct,ce,Zt),ce.side=Oe,ce.needsUpdate=!0,Xt=!0}}Xt===!0&&(Ht.updateMultisampleRenderTarget(tt),Ht.updateRenderTargetMipmap(tt))}b.setRenderTarget(_t,ft,Pt),b.setClearColor(V,X),Tt!==void 0&&(H.viewport=Tt),b.toneMapping=Dt}function ks(M,U,z){let H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=M.length;N<tt;N++){let ct=M[N],_t=ct.object,ft=ct.geometry,Pt=ct.group,Dt=ct.material;Dt.allowOverride===!0&&H!==null&&(Dt=H),_t.layers.test(z.layers)&&al(_t,U,z,ft,Dt,Pt)}}function al(M,U,z,H,N,tt){M.onBeforeRender(b,U,z,H,N,tt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(b,U,z,H,M,tt),N.transparent===!0&&N.side===hn&&N.forceSinglePass===!1?(N.side=Ee,N.needsUpdate=!0,b.renderBufferDirect(z,U,H,N,M,tt),N.side=yn,N.needsUpdate=!0,b.renderBufferDirect(z,U,H,N,M,tt),N.side=hn):b.renderBufferDirect(z,U,H,N,M,tt),M.onAfterRender(b,U,z,H,N,tt)}function Hs(M,U,z){U.isScene!==!0&&(U=gt);let H=Mt.get(M),N=h.state.lights,tt=h.state.shadowsArray,ct=N.state.version,_t=Y.getParameters(M,N.state,tt,U,z),ft=Y.getProgramCacheKey(_t),Pt=H.programs;H.environment=M.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(M.isMeshStandardMaterial?fe:ye).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Pt===void 0&&(M.addEventListener("dispose",Z),Pt=new Map,H.programs=Pt);let Dt=Pt.get(ft);if(Dt!==void 0){if(H.currentProgram===Dt&&H.lightsStateVersion===ct)return cl(M,_t),Dt}else _t.uniforms=Y.getUniforms(M),M.onBeforeCompile(_t,b),Dt=Y.acquireProgram(_t,ft),Pt.set(ft,Dt),H.uniforms=_t.uniforms;let Tt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=st.uniform),cl(M,_t),H.needsLights=ah(M),H.lightsStateVersion=ct,H.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Dt,H.uniformsList=null,Dt}function ll(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=qi.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function cl(M,U){let z=Mt.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function rh(M,U,z,H,N){U.isScene!==!0&&(U=gt),Ht.resetTextureUnits();let tt=U.fog,ct=H.isMeshStandardMaterial?U.environment:null,_t=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qn,ft=(H.isMeshStandardMaterial?fe:ye).get(H.envMap||ct),Pt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Tt=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,$t=!!z.morphAttributes.color,ue=En;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ue=b.toneMapping);let se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ee=se!==void 0?se.length:0,Ct=Mt.get(H),ce=h.state.lights;if(At===!0&&(G===!0||M!==v)){let Re=M===v&&H.id===x;st.setState(H,M,Re)}let Zt=!1;H.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ce.state.version||Ct.outputColorSpace!==_t||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==ft||H.fog===!0&&Ct.fog!==tt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==st.numPlanes||Ct.numIntersection!==st.numIntersection)||Ct.vertexAlphas!==Pt||Ct.vertexTangents!==Dt||Ct.morphTargets!==Tt||Ct.morphNormals!==Xt||Ct.morphColors!==$t||Ct.toneMapping!==ue||Ct.morphTargetsCount!==ee)&&(Zt=!0):(Zt=!0,Ct.__version=H.version);let Oe=Ct.currentProgram;Zt===!0&&(Oe=Hs(H,U,N));let ci=!1,Be=!1,ji=!1,he=Oe.getUniforms(),Ve=Ct.uniforms;if(vt.useProgram(Oe.program)&&(ci=!0,Be=!0,ji=!0),H.id!==x&&(x=H.id,Be=!0),ci||v!==M){vt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),he.setValue(C,"projectionMatrix",M.projectionMatrix),he.setValue(C,"viewMatrix",M.matrixWorldInverse);let De=he.map.cameraPosition;De!==void 0&&De.setValue(C,ut.setFromMatrixPosition(M.matrixWorld)),Lt.logarithmicDepthBuffer&&he.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,Be=!0,ji=!0)}if(N.isSkinnedMesh){he.setOptional(C,N,"bindMatrix"),he.setOptional(C,N,"bindMatrixInverse");let Re=N.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),he.setValue(C,"boneTexture",Re.boneTexture,Ht))}N.isBatchedMesh&&(he.setOptional(C,N,"batchingTexture"),he.setValue(C,"batchingTexture",N._matricesTexture,Ht),he.setOptional(C,N,"batchingIdTexture"),he.setValue(C,"batchingIdTexture",N._indirectTexture,Ht),he.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&he.setValue(C,"batchingColorTexture",N._colorsTexture,Ht));let Ge=z.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&nt.update(N,z,Oe),(Be||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,he.setValue(C,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ve.envMap.value=ft,Ve.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Ve.envMapIntensity.value=U.environmentIntensity),Be&&(he.setValue(C,"toneMappingExposure",b.toneMappingExposure),Ct.needsLights&&oh(Ve,ji),tt&&H.fog===!0&&J.refreshFogUniforms(Ve,tt),J.refreshMaterialUniforms(Ve,H,k,j,h.state.transmissionRenderTarget[M.id]),qi.upload(C,ll(Ct),Ve,Ht)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(qi.upload(C,ll(Ct),Ve,Ht),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(C,"center",N.center),he.setValue(C,"modelViewMatrix",N.modelViewMatrix),he.setValue(C,"normalMatrix",N.normalMatrix),he.setValue(C,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Re=H.uniformsGroups;for(let De=0,Vo=Re.length;De<Vo;De++){let Wn=Re[De];kt.update(Wn,Oe),kt.bind(Wn,Oe)}}return Oe}function oh(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function ah(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,U,z){let H=Mt.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Mt.get(M.texture).__webglTexture=U,Mt.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let z=Mt.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};let lh=C.createFramebuffer();this.setRenderTarget=function(M,U=0,z=0){I=M,w=U,R=z;let H=!0,N=null,tt=!1,ct=!1;if(M){let ft=Mt.get(M);if(ft.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(ft.__webglFramebuffer===void 0)Ht.setupRenderTarget(M);else if(ft.__hasExternalTextures)Ht.rebindTextures(M,Mt.get(M.texture).__webglTexture,Mt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Tt=M.depthTexture;if(ft.__boundDepthTexture!==Tt){if(Tt!==null&&Mt.has(Tt)&&(M.width!==Tt.image.width||M.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(M)}}let Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ct=!0);let Dt=Mt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?N=Dt[U][z]:N=Dt[U],tt=!0):M.samples>0&&Ht.useMultisampledRTT(M)===!1?N=Mt.get(M).__webglMultisampledFramebuffer:Array.isArray(Dt)?N=Dt[z]:N=Dt,P.copy(M.viewport),F.copy(M.scissor),B=M.scissorTest}else P.copy(mt).multiplyScalar(k).floor(),F.copy(Ft).multiplyScalar(k).floor(),B=Q;if(z!==0&&(N=lh),vt.bindFramebuffer(C.FRAMEBUFFER,N)&&H&&vt.drawBuffers(M,N),vt.viewport(P),vt.scissor(F),vt.setScissorTest(B),tt){let ft=Mt.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,z)}else if(ct){let ft=U;for(let Pt=0;Pt<M.textures.length;Pt++){let Dt=Mt.get(M.textures[Pt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,z,ft)}}else if(M!==null&&z!==0){let ft=Mt.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ft.__webglTexture,z)}x=-1},this.readRenderTargetPixels=function(M,U,z,H,N,tt,ct,_t=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft){vt.bindFramebuffer(C.FRAMEBUFFER,ft);try{let Pt=M.textures[_t],Dt=Pt.format,Tt=Pt.type;if(!Lt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&z>=0&&z<=M.height-N&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_t),C.readPixels(U,z,H,N,Et.convert(Dt),Et.convert(Tt),tt))}finally{let Pt=I!==null?Mt.get(I).__webglFramebuffer:null;vt.bindFramebuffer(C.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(M,U,z,H,N,tt,ct,_t=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft)if(U>=0&&U<=M.width-H&&z>=0&&z<=M.height-N){vt.bindFramebuffer(C.FRAMEBUFFER,ft);let Pt=M.textures[_t],Dt=Pt.format,Tt=Pt.type;if(!Lt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xt),C.bufferData(C.PIXEL_PACK_BUFFER,tt.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_t),C.readPixels(U,z,H,N,Et.convert(Dt),Et.convert(Tt),0);let $t=I!==null?Mt.get(I).__webglFramebuffer:null;vt.bindFramebuffer(C.FRAMEBUFFER,$t);let ue=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await vc(C,ue,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,tt),C.deleteBuffer(Xt),C.deleteSync(ue),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,z=0){let H=Math.pow(2,-z),N=Math.floor(M.image.width*H),tt=Math.floor(M.image.height*H),ct=U!==null?U.x:0,_t=U!==null?U.y:0;Ht.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,ct,_t,N,tt),vt.unbindTexture()};let ch=C.createFramebuffer(),hh=C.createFramebuffer();this.copyTextureToTexture=function(M,U,z=null,H=null,N=0,tt=null){tt===null&&(N!==0?(Ci("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let ct,_t,ft,Pt,Dt,Tt,Xt,$t,ue,se=M.isCompressedTexture?M.mipmaps[tt]:M.image;if(z!==null)ct=z.max.x-z.min.x,_t=z.max.y-z.min.y,ft=z.isBox3?z.max.z-z.min.z:1,Pt=z.min.x,Dt=z.min.y,Tt=z.isBox3?z.min.z:0;else{let Ge=Math.pow(2,-N);ct=Math.floor(se.width*Ge),_t=Math.floor(se.height*Ge),M.isDataArrayTexture?ft=se.depth:M.isData3DTexture?ft=Math.floor(se.depth*Ge):ft=1,Pt=0,Dt=0,Tt=0}H!==null?(Xt=H.x,$t=H.y,ue=H.z):(Xt=0,$t=0,ue=0);let ee=Et.convert(U.format),Ct=Et.convert(U.type),ce;U.isData3DTexture?(Ht.setTexture3D(U,0),ce=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ht.setTexture2DArray(U,0),ce=C.TEXTURE_2D_ARRAY):(Ht.setTexture2D(U,0),ce=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let Zt=C.getParameter(C.UNPACK_ROW_LENGTH),Oe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ci=C.getParameter(C.UNPACK_SKIP_PIXELS),Be=C.getParameter(C.UNPACK_SKIP_ROWS),ji=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,se.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,se.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Dt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tt);let he=M.isDataArrayTexture||M.isData3DTexture,Ve=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let Ge=Mt.get(M),Re=Mt.get(U),De=Mt.get(Ge.__renderTarget),Vo=Mt.get(Re.__renderTarget);vt.bindFramebuffer(C.READ_FRAMEBUFFER,De.__webglFramebuffer),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let Wn=0;Wn<ft;Wn++)he&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(M).__webglTexture,N,Tt+Wn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(U).__webglTexture,tt,ue+Wn)),C.blitFramebuffer(Pt,Dt,ct,_t,Xt,$t,ct,_t,C.DEPTH_BUFFER_BIT,C.NEAREST);vt.bindFramebuffer(C.READ_FRAMEBUFFER,null),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||Mt.has(M)){let Ge=Mt.get(M),Re=Mt.get(U);vt.bindFramebuffer(C.READ_FRAMEBUFFER,ch),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,hh);for(let De=0;De<ft;De++)he?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ge.__webglTexture,N,Tt+De):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ge.__webglTexture,N),Ve?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Re.__webglTexture,tt,ue+De):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,tt),N!==0?C.blitFramebuffer(Pt,Dt,ct,_t,Xt,$t,ct,_t,C.COLOR_BUFFER_BIT,C.NEAREST):Ve?C.copyTexSubImage3D(ce,tt,Xt,$t,ue+De,Pt,Dt,ct,_t):C.copyTexSubImage2D(ce,tt,Xt,$t,Pt,Dt,ct,_t);vt.bindFramebuffer(C.READ_FRAMEBUFFER,null),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ve?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(ce,tt,Xt,$t,ue,ct,_t,ft,ee,Ct,se.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(ce,tt,Xt,$t,ue,ct,_t,ft,ee,se.data):C.texSubImage3D(ce,tt,Xt,$t,ue,ct,_t,ft,ee,Ct,se):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,tt,Xt,$t,ct,_t,ee,Ct,se.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,tt,Xt,$t,se.width,se.height,ee,se.data):C.texSubImage2D(C.TEXTURE_2D,tt,Xt,$t,ct,_t,ee,Ct,se);C.pixelStorei(C.UNPACK_ROW_LENGTH,Zt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Oe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ci),C.pixelStorei(C.UNPACK_SKIP_ROWS,Be),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ji),tt===0&&U.generateMipmaps&&C.generateMipmap(ce),vt.unbindTexture()},this.initRenderTarget=function(M){Mt.get(M).__webglFramebuffer===void 0&&Ht.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ht.setTextureCube(M,0):M.isData3DTexture?Ht.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ht.setTexture2DArray(M,0):Ht.setTexture2D(M,0),vt.unbindTexture()},this.resetState=function(){w=0,R=0,I=null,vt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $e}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Uo=class extends ti{constructor(){super();let t=new ln;t.deleteAttribute("uv");let e=new bn({side:Ee}),n=new bn,s=new Rs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new qt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new _s(t,n,6),o=new Me;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new qt(t,Ki(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new qt(t,Ki(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let d=new qt(t,Ki(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let u=new qt(t,Ki(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new qt(t,Ki(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new qt(t,Ki(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ki(i){return new Es({color:0,emissive:16777215,emissiveIntensity:i})}var Qc=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,No=class{constructor(t=Math.random){this.random=t;Ut(this,"blinkProgress",0);Ut(this,"gaze",new yt);Ut(this,"phase","open");Ut(this,"elapsed",0);Ut(this,"duration",0);Ut(this,"gazeTime",0);Ut(this,"doublePending",!1);Ut(this,"reduced",!1);this.reset()}between(t,e){return t+(e-t)*this.random()}enter(t,e){this.phase=t,this.duration=e,this.elapsed=0}reset(){this.blinkProgress=0,this.doublePending=!1,this.gazeTime=0,this.gaze.set(0,0),this.enter("open",this.between(2,5))}update(t,e,n){if(e){this.reduced||this.reset(),this.reduced=!0;return}this.reduced=!1;let s=Number.isFinite(t)?Math.max(0,Math.min(t,.1)):0;this.gazeTime+=s;let r=1-Math.exp(-s*3),a=Math.sin(this.gazeTime*.77)*.09+Math.sin(this.gazeTime*1.31)*.025+Math.max(-1,Math.min(1,n.x))*.08,o=Math.sin(this.gazeTime*.63)*.05+Math.max(-1,Math.min(1,n.y))*.05;for(this.gaze.lerp(new yt(a,o),r);s>0;){let l=Math.min(s,this.duration-this.elapsed);if(this.elapsed+=l,s-=l,this.elapsed<this.duration)break;switch(this.phase){case"open":this.doublePending=this.random()<.2,this.enter("closing",this.between(.08,.12));break;case"double-gap":this.enter("closing",this.between(.08,.12));break;case"closing":this.enter("closed",this.between(.04,.08));break;case"closed":this.enter("opening",this.between(.1,.15));break;case"opening":this.doublePending?(this.doublePending=!1,this.enter("double-gap",this.between(.1,.18))):this.enter("open",this.between(2,5));break}}let c=this.elapsed/this.duration;this.blinkProgress=this.phase==="closing"?Qc(c):this.phase==="closed"?1:this.phase==="opening"?1-Qc(c):0}};var Bs=new D;function Ke(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Bs.copy(t),Bs[n]=0,Bs.normalize();let l=.5*a/(a+o),d=1-Bs.angleTo(i)/c;return Math.sign(Bs[e])===1?d*l:o/(a+o)+l+l*(1-d)}var Fo=class i extends ln{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new D,l=new D,d=new D(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=u.length/6,y=new D,m=.5/a;for(let h=0,S=0;h<u.length;h+=3,S+=2)switch(c.fromArray(u,h),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[h+0]=d.x*Math.sign(c.x)+l.x*r,u[h+1]=d.y*Math.sign(c.y)+l.y*r,u[h+2]=d.z*Math.sign(c.z)+l.z*r,f[h+0]=l.x,f[h+1]=l.y,f[h+2]=l.z,Math.floor(h/g)){case 0:y.set(1,0,0),p[S+0]=Ke(y,l,"z","y",r,n),p[S+1]=1-Ke(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),p[S+0]=1-Ke(y,l,"z","y",r,n),p[S+1]=1-Ke(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),p[S+0]=1-Ke(y,l,"x","z",r,t),p[S+1]=Ke(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),p[S+0]=1-Ke(y,l,"x","z",r,t),p[S+1]=1-Ke(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),p[S+0]=1-Ke(y,l,"x","y",r,t),p[S+1]=1-Ke(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),p[S+0]=Ke(y,l,"x","y",r,t),p[S+1]=1-Ke(y,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var $c="data:image/webp;base64,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";var Oo=class{constructor(){Ut(this,"group",new me);Ut(this,"head",new me);Ut(this,"torso",new me);Ut(this,"arms",[new me,new me]);Ut(this,"elbows",[new me,new me]);Ut(this,"wrists",[new me,new me]);Ut(this,"legs",[new me,new me]);Ut(this,"eyes",[]);Ut(this,"eyeMotion",new No);Ut(this,"expression","happy");Ut(this,"waveTime",-1);Ut(this,"white",new Fn({color:"#f8fbff",metalness:0,roughness:.3,clearcoat:1,clearcoatRoughness:.12}));Ut(this,"blue",new Fn({color:"#3f93e6",metalness:.05,roughness:.32,clearcoat:.7,clearcoatRoughness:.25}));Ut(this,"lightBlue",new Fn({color:"#8fc8f5",metalness:.05,roughness:.35,clearcoat:.5}));Ut(this,"navy",new bn({color:"#1f2d42",metalness:.25,roughness:.45}));let t=(h,S,E,b=this.white,A=.1)=>{let w=new qt(new Fo(S[0],S[1],S[2],5,A),b);return w.position.set(E[0],E[1],E[2]),w.castShadow=!0,w.receiveShadow=!0,h.add(w),w},e=(h,S,E,b=this.navy)=>{let A=new qt(new Ui(S,32,20),b);return A.position.set(E[0],E[1],E[2]),A.castShadow=!0,h.add(A),A},n=(h,S,E,b,A=this.navy)=>{let w=new qt(new bs(S,S,E,40),A);return w.position.set(b[0],b[1],b[2]),w.castShadow=!0,h.add(w),w},s=(h,S,E,b,A=this.white)=>{let w=new qt(new vs(S,E,8,24),A);return w.position.set(b[0],b[1],b[2]),w.castShadow=!0,h.add(w),w};this.group.add(this.head,this.torso,...this.arms,...this.legs),this.group.scale.z=1.18,this.torso.scale.z=1.2,this.head.position.y=3.51;let r=new Ui(1,64,40),a=r.attributes.position,o=h=>Math.sign(h)*Math.abs(h)**(2/2.4);for(let h=0;h<a.count;h++)a.setXYZ(h,o(a.getX(h)),.91*o(a.getY(h)),.84*o(a.getZ(h)));r.computeVertexNormals();let c=new qt(r,this.white);this.head.add(c),c.castShadow=!0;let l=(h,S)=>.84*Math.max(0,1-Math.abs(h)**2.4-Math.abs(S/.91)**2.4)**(1/2.4),d=(h,S,E,b,A=-.07,w=0)=>{let R=[w,A,l(w,A)+E],I=[],x=64,v=12;for(let B=1;B<=v;B++)for(let V=0;V<x;V++){let X=V/x*Math.PI*2,W=w+h*.5*B/v*Math.sign(Math.cos(X))*Math.abs(Math.cos(X))**.5,j=S*.5*B/v*Math.sign(Math.sin(X))*Math.abs(Math.sin(X))**.5+A;R.push(W,j,l(W,j)+E);let k=1+(B-1)*x+V,et=1+(B-1)*x+(V+1)%x;if(B===1)I.push(0,k,et);else{let lt=k-x,mt=et-x;I.push(lt,k,et,lt,et,mt)}}let P=new Ie;P.setAttribute("position",new ne(R,3)),P.setIndex(I),P.computeVertexNormals();let F=new qt(P,b);return this.head.add(F),F},u=new Fn({color:"#05080e",metalness:.1,roughness:.15,clearcoat:1,clearcoatRoughness:.04});d(1.52,1.1,.012,u);for(let h of[-1,1]){let S=h*.27,E=-.03,b=new Mn(2.4,2.4,24,24),A=b.attributes.position;for(let P=0;P<A.count;P++){let F=A.getX(P)*.105,B=A.getY(P)*.175;A.setXYZ(P,F,B,l(S+F,E+B)-l(S,E)+.024)}b.computeVertexNormals();let w=new Le({toneMapped:!1,transparent:!0,depthWrite:!1,uniforms:{closure:{value:0},gaze:{value:this.eyeMotion.gaze},core:{value:new Nt("#a9dcff")},led:{value:new Nt("#7cc6f7")},deep:{value:new Nt("#4a9fe6")}},vertexShader:"varying vec2 eyeUv; void main(){ eyeUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
          }`}),R=new qt(b,w);R.name=h<0?"eye-left":"eye-right",R.position.set(S,E,l(S,E)),this.head.add(R),this.eyes.push(R);let I=n(this.head,.31,.16,[h*.96,-.04,-.04],this.blue);I.rotation.z=Math.PI/2;let x=n(this.head,.23,.08,[h*1.05,-.04,-.04],this.lightBlue);x.rotation.z=Math.PI/2;let v=n(this.head,.15,.06,[h*1.075,-.04,-.04],this.blue);v.rotation.z=Math.PI/2}this.torso.position.y=2.04,n(this.torso,.16,.32,[0,.56,0],this.navy),t(this.torso,[1.14,.96,.74],[0,0,0],this.white,.35),t(this.torso,[1,.13,.66],[0,-.38,0],this.navy,.06);let f=n(this.torso,.3,.04,[0,.07,.365],this.blue);f.rotation.x=Math.PI/2;let p=new $n({color:"#2b26fb",toneMapped:!1});typeof document<"u"&&new Ts().load($c,h=>{h.colorSpace=Pe,p.map=h,p.color.set("#ffffff"),p.needsUpdate=!0});let g=new qt(new Ms(.25,48),p);g.position.set(0,.07,.387),this.torso.add(g),n(this.group,.26,.22,[0,1.46,0],this.navy),t(this.group,[.88,.34,.76],[0,1.3,0],this.white,.16);for(let h of[-1,1])t(this.group,[.1,.26,.52],[h*.44,1.3,0],this.blue,.045);let y=(h,S,E,b=0,A=this.navy)=>e(h,S,[0,E,b],A),m=(h,S,E,b=0)=>{y(h,S,E,b,this.blue);let A=new qt(new Ss(S*.98,S*.16,12,40),this.navy);A.position.set(0,E,b),A.rotation.y=Math.PI/2,h.add(A)};for(let h=0;h<2;h++){let S=h===0?-1:1,E=this.arms[h];E.position.set(S*.72,2.32,0),E.rotation.z=S*.13,y(E,.23,0,0,this.blue),s(E,.17,.18,[0,-.29,0]);let b=this.elbows[h];b.position.y=-.56,E.add(b),m(b,.14,0),s(b,.175,.16,[0,-.25,.01]),n(b,.18,.06,[0,-.36,.01],this.blue);let A=this.wrists[h];A.position.y=-.505,b.add(A),e(A,.085,[0,0,0],this.navy),t(A,[.27,.21,.2],[0,-.14,.01],this.white,.095);let w=t(A,[.17,.13,.025],[0,-.14,-.09],this.lightBlue,.025);w.name="palm";for(let x=0;x<3;x++){let v=(x-1)*.072;s(A,.036,.1,[v,-.29,0])}let R=s(A,.045,.08,[-S*.15,-.16,.07]);R.rotation.z=-S*.55;let I=this.legs[h];I.position.set(S*.28,1.18,0),y(I,.16,0),s(I,.22,.08,[0,-.25,0]),m(I,.18,-.48,.02),s(I,.22,.14,[S*.02,-.72,0]),n(I,.225,.08,[S*.02,-.88,0],this.blue),t(I,[.54,.27,.74],[S*.03,-1,.12],this.white,.12),t(I,[.54,.08,.74],[S*.03,-1.12,.12],this.navy,.035)}}get isWaving(){return this.waveTime>=0}wave(){return this.isWaving?!1:(this.waveTime=0,!0)}setGreetingPose(t,e=0,n=t){let s=Jt.smootherstep(e,.95,1.2)*(1-Jt.smootherstep(e,2.4,2.65)),r=Math.sin((e-.95)*Math.PI*2*1.15)*s;this.arms[1].rotation.set(-t*.24,0,.13+t*(.98+r*.035)),this.elbows[1].rotation.set(-n*.08,n*Math.PI,n*(1.57+r*.25),"ZXY"),this.wrists[1].rotation.set(0,0,0)}setBlink(t){let e=Jt.clamp(t,0,1);this.eyes.forEach(n=>{n.material.uniforms.closure.value=e})}get blinkProgress(){return this.eyes[0].material.uniforms.closure.value}setExpression(t){this.expression=t}resetPose(){this.eyeMotion.reset(),this.setBlink(0),this.waveTime=-1,this.group.position.y=0,this.group.rotation.set(0,0,0),this.legs.forEach(t=>t.rotation.set(0,0,0)),this.head.rotation.set(0,0,0),this.arms.forEach((t,e)=>t.rotation.set(0,0,e===0?-.13:.13)),this.elbows.forEach(t=>t.rotation.set(0,0,0)),this.wrists.forEach(t=>t.rotation.set(0,0,0)),this.setExpression("happy")}update(t,e,n,s,r=!1){let a=1-Math.exp(-t*5);if(this.group.position.y=s?0:Math.sin(e*1.8)*.025,this.head.rotation.y=Jt.lerp(this.head.rotation.y,s?0:n.x*.16,a),this.head.rotation.x=Jt.lerp(this.head.rotation.x,s?0:-n.y*.09,a),this.head.rotation.z=s?0:Math.sin(e*.9)*.035,this.eyeMotion.update(t,s,n),this.setBlink(this.eyeMotion.blinkProgress),this.waveTime>=0){this.waveTime+=t;let c=this.waveTime,l=Jt.smootherstep(c,0,.85)*(1-Jt.smootherstep(c,2.65,3.5)),d=Jt.smootherstep(c,.12,1)*(1-Jt.smootherstep(c,2.55,3.4));this.setGreetingPose(l,c,d),c>=3.5&&(this.waveTime=-1,this.setGreetingPose(0))}else this.arms[1].rotation.z=.13+(s?0:Math.sin(e*1.8)*.025);this.arms[0].rotation.z=-.13-(s?0:Math.sin(e*1.8)*.025);let o=r&&!s?Math.sin(e*8)*.42:0;this.legs.forEach((c,l)=>c.rotation.x=Jt.lerp(c.rotation.x,l===0?o:-o,a)),this.arms[0].rotation.x=Jt.lerp(this.arms[0].rotation.x,-o*.75,a),this.isWaving||(this.arms[1].rotation.x=Jt.lerp(this.arms[1].rotation.x,o*.75,a)),r&&!s&&(this.group.position.y=Math.abs(Math.sin(e*8))*.055)}};var zs='<svg class="hpo-robot-fallback" viewBox="0 0 140 200" aria-hidden="true"><g fill="none" stroke-linecap="round"><path d="M50 152v30m40-30v30M34 110l-12 34m96-34 12 34" stroke="#d5e3f2" stroke-width="19"/><path d="M50 152v30m40-30v30M34 110l-12 34m96-34 12 34" stroke="#f8fbff" stroke-width="15"/></g><g fill="#3f93e6"><rect x="40" y="172" width="20" height="7" rx="3.5"/><rect x="80" y="172" width="20" height="7" rx="3.5"/></g><g fill="#f8fbff" stroke="#d5e3f2" stroke-width="2"><rect x="37" y="98" width="66" height="52" rx="22"/><rect x="18" y="20" width="104" height="80" rx="36"/></g><rect x="27" y="30" width="86" height="60" rx="24" fill="#05080e"/><g fill="#7cc6f7"><rect x="49" y="47" width="11" height="20" rx="5.5"/><rect x="80" y="47" width="11" height="20" rx="5.5"/></g><g fill="#3f93e6"><rect x="10" y="44" width="10" height="28" rx="5"/><rect x="120" y="44" width="10" height="28" rx="5"/><circle cx="34" cy="106" r="9"/><circle cx="106" cy="106" r="9"/><circle cx="70" cy="120" r="13"/></g><rect x="40" y="138" width="60" height="7" rx="3.5" fill="#1f2d42"/></svg>',Ji=class{constructor(t){this.host=t;Ut(this,"renderer");Ut(this,"scene",new ti);Ut(this,"camera",new be(35,1,.1,60));Ut(this,"robot");Ut(this,"lost",!1);Ut(this,"onRestore",()=>{});Ut(this,"observer");Ut(this,"events",new AbortController);Ut(this,"shadow");Ut(this,"environment");t.innerHTML=`${zs}<canvas aria-hidden="true"></canvas>`;let e=t.querySelector("canvas");this.renderer=new Io({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.toneMapping=Hr,this.renderer.toneMappingExposure=.95,this.camera.position.set(0,2.25,10),this.camera.lookAt(0,1.95,0),this.robot=new Oo;let n=new Le({transparent:!0,depthWrite:!1,uniforms:{strength:{value:.4}},vertexShader:"varying vec2 shadowUv; void main() { shadowUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 shadowUv; uniform float strength; void main() { float r=length((shadowUv-.5)*2.0); float alpha=pow(1.0-smoothstep(0.0,1.0,r),1.3)*strength; gl_FragColor=vec4(.06,.11,.25,alpha); }"});this.shadow=new qt(new Mn(2.55,1.85),n),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.set(.1,-.015,.1),this.scene.add(this.shadow);let s=new Yi(this.renderer);this.environment=s.fromScene(new Uo,.04).texture,s.dispose(),this.scene.environment=this.environment,this.scene.environmentIntensity=.9,this.scene.add(this.robot.group,new As("#eef6ff","#8a9bb5",1.4));let r=new Oi("#fff6ea",2.6);r.position.set(-3,7,5);let a=new Oi("#8fbaff",2.2);a.position.set(4,4,-3),this.scene.add(r,a),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),e.addEventListener("webglcontextlost",o=>{o.preventDefault(),this.lost=!0,t.classList.remove("is-ready")},{signal:this.events.signal}),e.addEventListener("webglcontextrestored",()=>{this.lost=!1,this.resize(),t.classList.add("is-ready"),this.onRestore()},{signal:this.events.signal}),this.resize(),t.classList.add("is-ready")}resize(){let t=this.host.clientWidth,e=this.host.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.render())}render(){let t=Math.max(0,this.robot.group.position.y);this.shadow.scale.setScalar(1+t*2),this.shadow.material.uniforms.strength.value=.4-t*.6,this.lost||this.renderer.render(this.scene,this.camera)}dispose(){this.events.abort(),this.observer.disconnect();let t=new Set,e=new Set;this.scene.traverse(n=>{n instanceof qt&&(t.add(n.geometry),(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>e.add(s)))}),t.forEach(n=>n.dispose()),e.forEach(n=>{Object.values(n).forEach(s=>{s instanceof Se&&s.dispose()}),n.dispose()}),this.environment.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.host.classList.remove("is-ready"),this.host.innerHTML=zs}};var Bo=class{constructor(){Ut(this,"target",new yt);Ut(this,"heading",0);Ut(this,"walking",!1);Ut(this,"rest",4);Ut(this,"travelTime",0);Ut(this,"speedMultiplier",1);Ut(this,"greetingPending",!1)}snapToEdge(t,e,n){t.set(Jt.clamp(t.x,0,e),Jt.clamp(t.y,0,n));let s=[t.x,e-t.x,t.y,n-t.y];switch(s.indexOf(Math.min(...s))){case 0:t.x=0;break;case 1:t.x=e;break;case 2:t.y=0;break;case 3:t.y=n;break}}get speed(){return this.speedMultiplier}setSpeed(t){Number.isFinite(t)&&(this.speedMultiplier=Jt.clamp(t,.5,2))}pause(t=5){(this.travelTime>0||this.walking)&&(this.greetingPending=!0),this.rest=t,this.travelTime=0,this.walking=!1}takeGreeting(){return!this.greetingPending||this.walking||Math.abs(Math.atan2(Math.sin(this.heading),Math.cos(this.heading)))>.08?!1:(this.greetingPending=!1,!0)}turnToward(t,e){let n=Math.atan2(Math.sin(t-this.heading),Math.cos(t-this.heading));return this.heading+=Jt.clamp(n,-e*3.5,e*3.5),Math.abs(n)<.01}update(t,e,n,s,r,a=!0){if(r&&this.walking&&this.pause(),this.walking=!1,t=Math.min(t,.1),r){a&&this.turnToward(0,t);return}if(this.rest>0){this.turnToward(0,t)&&(this.rest-=t);return}this.snapToEdge(e,n,s),n===0?this.target.set(0,e.y<s?s:0):s===0?this.target.set(e.x<n?n:0,0):e.y===0&&e.x<n?this.target.set(n,0):e.x===n&&e.y<s?this.target.set(n,s):e.y===s&&e.x>0?this.target.set(0,s):this.target.set(0,0);let o=this.target.x-e.x,c=this.target.y-e.y,l=Math.hypot(o,c);if(l===0||this.travelTime>=3){this.pause(5);return}let d=Math.atan2(o,c),u=Math.atan2(Math.sin(d-this.heading),Math.cos(d-this.heading));if(this.heading+=Jt.clamp(u,-t*3.5,t*3.5),Math.abs(u)>.35)return;let f=Math.min(l,t*60*this.speedMultiplier);f===l?e.copy(this.target):(e.x+=o/l*f,e.y+=c/l*f),this.travelTime+=t,this.walking=!0}};var th={type:"change"},il={type:"start"},nh={type:"end"},zo=new Ii,eh=new Xe,Om=Math.cos(70*Jt.DEG2RAD),xe=new D,Fe=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nl=1e-6,ko=class extends Ps{constructor(t,e=null){super(t,e),this.state=te.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:kn.ROTATE,TWO:kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new qe,this._lastTargetPosition=new D,this._quat=new qe().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bi,this._sphericalDelta=new Bi,this._scale=1,this._panOffset=new D,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new D,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zm.bind(this),this._onPointerDown=Bm.bind(this),this._onPointerUp=km.bind(this),this._onContextMenu=Ym.bind(this),this._onMouseWheel=Gm.bind(this),this._onKeyDown=Wm.bind(this),this._onTouchStart=Xm.bind(this),this._onTouchMove=qm.bind(this),this._onMouseDown=Hm.bind(this),this._onMouseMove=Vm.bind(this),this._interceptControlDown=Zm.bind(this),this._interceptControlUp=Km.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(th),this.update(),this.state=te.NONE}update(t=null){let e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Fe:n>Math.PI&&(n-=Fe),s<-Math.PI?s+=Fe:s>Math.PI&&(s-=Fe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=xe.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(zo.origin.copy(this.object.position),zo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zo.direction))<Om?this.object.lookAt(this.target):(eh.setFromNormalAndCoplanarPoint(this.object.up,this.target),zo.intersectPlane(eh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nl||this._lastTargetPosition.distanceToSquared(this.target)>nl?(this.dispatchEvent(th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fe/60*this.autoRotateSpeed*t:Fe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;xe.copy(s).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Bm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function zm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function km(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nh),this.state=te.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Hm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=te.DOLLY;break;case zn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}break;case zn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(il)}function Vm(i){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Gm(i){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(i.preventDefault(),this.dispatchEvent(il),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(nh))}function Wm(i){this.enabled!==!1&&this._handleKeyDown(i)}function Xm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case kn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=te.TOUCH_ROTATE;break;case kn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case kn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=te.TOUCH_DOLLY_PAN;break;case kn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(il)}function qm(i){switch(this._trackPointer(i),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=te.NONE}}function Ym(i){this.enabled!==!1&&i.preventDefault()}function Zm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Km(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ih(i,t,e,n,s,r,a,o,c){let l=document.createElement("dialog");l.id="hpo-robot-viewer",l.setAttribute("aria-labelledby","hpo-robot-title"),l.innerHTML=`
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
        <a class="hpo-enroll-cta" href="https://hpo.edu.vn/dang-ky-hoc/">
          <span>\u0110\u0103ng k\xFD h\u1ECDc</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <div class="hpo-chat-options">
          <label class="hpo-wander-option"><input type="checkbox" checked> Cho robot t\u1EF1 \u0111i d\u1EA1o</label>
          <label class="hpo-visibility-option"><input id="hpo-robot-visible" type="checkbox" checked> Hi\u1EC7n robot tr\xEAn trang</label>
        </div>
        <form class="hpo-chat-form">
          <label for="hpo-chat-input">Tin nh\u1EAFn c\u1EE7a b\u1EA1n</label>
          <div class="hpo-chat-compose"><input id="hpo-chat-input" type="text" placeholder="Tr\xF2 chuy\u1EC7n s\u1EAFp ra m\u1EAFt" disabled><button type="submit" disabled>G\u1EEDi</button></div>
        </form>
      </section>
    </div>`,document.body.append(l);let d=l.querySelector(".hpo-model-stage"),u,f,p="",g=new Audio(t);g.id="hpo-robot-welcome-voice",g.preload="auto",l.append(g);let y=new yt,m=l.querySelector("#hpo-robot-speed"),h=l.querySelector("#hpo-robot-speed-value"),S=l.querySelector("#hpo-robot-visible"),E=()=>{h.value=`${Number(m.value).toFixed(1)}\xD7`,m.setAttribute("aria-valuetext",`${Number(m.value).toFixed(1)} l\u1EA7n t\u1ED1c \u0111\u1ED9 b\xECnh th\u01B0\u1EDDng`)};m.value=String(s),E(),m.addEventListener("input",()=>{E(),r(Number(m.value))}),l.querySelector(".hpo-close").addEventListener("click",()=>l.close());let b=!1,A=w=>{let R=l.getBoundingClientRect();return w.clientX<R.left||w.clientX>R.right||w.clientY<R.top||w.clientY>R.bottom};return l.addEventListener("pointerdown",w=>{b=w.target===l&&A(w)}),l.addEventListener("click",w=>{b&&w.target===l&&A(w)&&l.close()}),l.addEventListener("close",()=>{g.pause(),g.currentTime=0,f?.dispose(),f=void 0,u?.dispose(),u=void 0,document.documentElement.style.overflow=p,i.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false"),(i.hidden?a:i).focus({preventScroll:!0}),e()}),l.querySelector("form").addEventListener("submit",w=>w.preventDefault()),l.querySelector(".hpo-wander-option input").addEventListener("change",w=>{n(!w.target.checked)}),S.addEventListener("change",()=>c(S.checked)),l.querySelector(".hpo-model-tools").addEventListener("click",w=>{let R=w.target.closest("button")?.dataset.action;if(!(!u||!f||!R)){if(R==="reset")f.reset();else if(R==="wave")matchMedia("(prefers-reduced-motion: reduce)").matches?u.robot.setGreetingPose(u.robot.arms[1].rotation.z>1?0:1):u.robot.wave();else{let I=u.camera.position.clone().sub(f.target);R==="left"||R==="right"?I.applyAxisAngle(new D(0,1,0),R==="left"?-.3:.3):I.setLength(Jt.clamp(I.length()*(R==="in"?.85:1.15),f.minDistance,f.maxDistance)),u.camera.position.copy(f.target).add(I),f.update()}u.render()}}),{get isOpen(){return l.open},open(){if(!l.open){p=document.documentElement.style.overflow,S.checked=o(),l.showModal(),g.currentTime=0,g.play().catch(()=>{}),document.documentElement.style.overflow="hidden",i.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true");try{u=new Ji(d),f=new ko(u.camera,u.renderer.domElement),f.target.set(0,1.95,0),f.enablePan=!1,f.minDistance=5,f.maxDistance=17,f.minPolarAngle=.15,f.maxPolarAngle=Math.PI-.15,f.update(),f.saveState(),f.addEventListener("change",()=>u?.render()),u.onRestore=e,l.querySelectorAll("[data-action]").forEach(w=>{w.disabled=!1}),l.querySelector(".hpo-model-hint").textContent="K\xE9o \u0111\u1EC3 xoay \xB7 Cu\u1ED9n ho\u1EB7c ch\u1EE5m hai ng\xF3n \u0111\u1EC3 thu ph\xF3ng"}catch(w){console.warn("Kh\xF4ng th\u1EC3 m\u1EDF m\xF4 h\xECnh 3D.",w),l.querySelector(".hpo-model-hint").textContent="3D kh\xF4ng kh\u1EA3 d\u1EE5ng tr\xEAn tr\xECnh duy\u1EC7t n\xE0y. \u0110ang hi\u1EC3n th\u1ECB h\xECnh thay th\u1EBF.",l.querySelectorAll("[data-action]").forEach(R=>{R.disabled=!0})}e()}},tick(w,R,I){!l.open||!u||u.lost||(u.robot.update(w,R,y,I),u.render())},resetMotion(){u?.robot.resetPose()}}}var Jm=document.currentScript instanceof HTMLScriptElement?document.currentScript.src:document.baseURI,jm=new URL("../assets/voice-tram-guillaume.mp3",Jm).href;function sh(){if(document.getElementById("hpo-robot"))return;let i=document.querySelector(".hpo-digital-hero"),t=document.createElement("button");t.id="hpo-robot",t.type="button",t.setAttribute("aria-label",i?"Robot Hi\u1EC7p Ph\xE1t \u2014 nh\u1EA5n \u0111\u1EC3 xem 3D v\xE0 t\u01B0\u01A1ng t\xE1c":"Robot Hi\u1EC7p Ph\xE1t \u2014 nh\u1EA5n \u0111\u1EC3 xem 3D, k\xE9o ho\u1EB7c d\xF9ng ph\xEDm m\u0169i t\xEAn \u0111\u1EC3 di chuy\u1EC3n"),t.setAttribute("aria-haspopup","dialog"),t.setAttribute("aria-controls","hpo-robot-viewer"),t.setAttribute("aria-expanded","false"),t.title=i?"Nh\u1EA5n \u0111\u1EC3 xem m\xF4 h\xECnh 3D v\xE0 v\u1EABy tay":"K\xE9o \u0111\u1EC3 di chuy\u1EC3n \xB7 N\xE9m ra ngo\xE0i khung \u0111\u1EC3 \u1EA9n \xB7 Nh\u1EA5n \u0111\u1EC3 xem 3D",t.innerHTML=zs;let e=document.createElement("button");e.id="hpo-robot-restore",e.type="button",e.className="float-btn",e.setAttribute("aria-label","M\u1EDF h\u1ED9p tho\u1EA1i robot Hi\u1EC7p Ph\xE1t"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-controls","hpo-robot-viewer"),e.setAttribute("aria-expanded","false"),e.title="M\u1EDF robot Hi\u1EC7p Ph\xE1t",e.innerHTML=zs,e.hidden=!0;let n=document.createElement("span");n.id="hpo-robot-greeting",n.textContent="Xin ch\xE0o! T\xF4i l\xE0 tr\u1EE3 l\xFD AI c\u1EE7a Hi\u1EC7p Ph\xE1t. R\u1EA5t vui \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 b\u1EA1n.",t.setAttribute("aria-describedby",n.id),document.body.append(t,e),i&&document.body.classList.add("hpo-home-robot");let s=()=>{let Q=document.querySelector(".floats");return Q?(Q.prepend(e),!0):!1};if(!s()){let Q=new MutationObserver(()=>{s()&&Q.disconnect()});Q.observe(document.body,{childList:!0,subtree:!0})}let r=new yt,a=new yt,o=new Bo;try{let Q=localStorage.getItem("hpo-robot-speed");Q!==null&&o.setSpeed(Number(Q))}catch{}let c=matchMedia("(prefers-reduced-motion: reduce)"),l,d=0,u=0,f=0,p=!1,g=!1,y=!1,m=0,h=0,S=8,E=8,b=!1,A=0,w=0,R=0,I=0,x,v=!1,P=null,F=r.x,B=r.y,V=0;try{b=localStorage.getItem("hpo-robot-hidden")==="true"}catch{}t.hidden=b,e.hidden=!b;let X=ih(t,jm,()=>{o.pause(),mt()},Q=>{p=Q},o.speed,Q=>{o.setSpeed(Q);try{localStorage.setItem("hpo-robot-speed",String(o.speed))}catch{}},e,()=>!b,Q=>W(Q));function W(Q,dt){b=!Q;try{localStorage.setItem("hpo-robot-hidden",String(b))}catch{}if(window.clearTimeout(A),t.classList.remove("is-throwing-away"),e.hidden=Q,o.pause(),Q)t.hidden=!1,et(),r.set(Jt.clamp(r.x,0,m),Jt.clamp(r.y,0,h)),o.snapToEdge(r,m,h),k();else if(dt&&!c.matches){let At=dt.clone();At.lengthSq()<1&&At.set(1,1),At.normalize();let G=Math.max(m,h,R,t.offsetHeight)*2;t.style.setProperty("--hpo-throw-to-x",`${r.x+S+At.x*G}px`),t.style.setProperty("--hpo-throw-to-y",`${r.y+E+At.y*G}px`),t.style.setProperty("--hpo-throw-rotation",`${Jt.clamp(At.x*32,-32,32)}deg`),t.classList.add("is-throwing-away"),A=window.setTimeout(()=>{t.hidden=!0,t.classList.remove("is-throwing-away")},c.matches?0:340)}else t.hidden=!0;j()}function j(Q=performance.now()){let dt=r.x!==F||r.y!==B;F=r.x,B=r.y,dt&&(V=Q+120),dt||Q<V||!!x||X.isOpen||b||document.hidden?P=null:P===null&&(P=Q);let G=P!==null&&(Q-P)%11e3<6e3;n.classList.toggle("is-hidden",!G),G?t.setAttribute("aria-describedby",n.id):t.removeAttribute("aria-describedby")}function k(){if(i){t.style.removeProperty("transform");let dt=(document.querySelector(".topbar")?.offsetHeight||0)+(document.getElementById("navbar")?.offsetHeight||0),At=matchMedia("(max-width: 1100px)").matches,G=innerWidth<=600?12:16,K=At?dt+i.offsetHeight-t.offsetHeight-G:dt+122,ut=window.visualViewport?.height||innerHeight;t.style.top=`${Math.min(K,ut-t.offsetHeight-12)}px`,t.style.bottom="auto",n.style.removeProperty("left"),n.style.removeProperty("--greeting-tail"),j();return}x||o.snapToEdge(r,m,h),t.style.transform=`translate3d(${r.x+S}px, ${r.y+E}px, 0)`;let Q=Jt.clamp(r.x+R/2-w/2,0,Math.max(0,I-w-16));n.style.left=`${Q-r.x}px`,n.style.setProperty("--greeting-tail",`${Jt.clamp(r.x+R/2-Q,16,w-16)}px`),j()}function et(Q=!1){if(i){k();return}let dt=window.visualViewport;S=(dt?.offsetLeft||0)+8;let At=Math.max(0,n.offsetHeight-t.offsetHeight*.1);w=n.offsetWidth,R=t.offsetWidth,I=dt?.width||innerWidth,E=(dt?.offsetTop||0)+8+At,m=Math.max(0,(dt?.width||innerWidth)-t.offsetWidth-16),h=Math.max(0,(dt?.height||innerHeight)-t.offsetHeight-At-16),Q&&r.set(0,h),k()}et(!0),new ResizeObserver(()=>et()).observe(t),new ResizeObserver(()=>et()).observe(n),i&&new ResizeObserver(()=>et()).observe(i),window.addEventListener("resize",()=>et()),window.visualViewport?.addEventListener("resize",()=>et()),window.visualViewport?.addEventListener("scroll",()=>et());try{l=new Ji(t),l.onRestore=mt,i&&!c.matches&&l.robot.wave()}catch(Q){console.warn("Robot 3D kh\xF4ng kh\u1EA3 d\u1EE5ng; hi\u1EC3n th\u1ECB h\xECnh thay th\u1EBF.",Q)}t.append(n),et(!0),window.setInterval(j,100);function lt(Q){let dt=Math.min((Q-u)/1e3,.05);u=Q,f+=dt,X.isOpen?X.tick(dt,f,!1):(i||(o.update(dt,r,m,h,p||g||y||!!x||!!l?.lost||b,!x),k()),l&&!l.lost&&!b&&(l.robot.group.rotation.y=i?0:o.heading,!i&&!x&&!l.robot.isWaving&&o.takeGreeting()&&l.robot.wave(),l.robot.update(dt,f,a,!1,!i&&o.walking),l.render())),d=requestAnimationFrame(lt)}function mt(){cancelAnimationFrame(d),!document.hidden&&(c.matches?(l?.robot.resetPose(),l?.render(),X.resetMotion(),X.tick(0,f,!0)):(u=performance.now(),d=requestAnimationFrame(lt)))}t.addEventListener("pointerdown",Q=>{i||!Q.isPrimary||Q.button!==0||x||(v=!1,y=!1,x={id:Q.pointerId,x:Q.clientX,y:Q.clientY,offsetX:Q.clientX-r.x-S,offsetY:Q.clientY-r.y-E,moved:!1,lastX:Q.clientX,lastY:Q.clientY,lastTime:performance.now(),velocityX:0,velocityY:0},t.setPointerCapture(Q.pointerId),o.pause(),j())}),t.addEventListener("pointermove",Q=>{if(x&&Q.pointerId===x.id){let dt=performance.now(),At=Math.max(1,dt-x.lastTime),G=(Q.clientX-x.lastX)/At*1e3,K=(Q.clientY-x.lastY)/At*1e3;if(x.velocityX=x.velocityX*.35+G*.65,x.velocityY=x.velocityY*.35+K*.65,x.lastX=Q.clientX,x.lastY=Q.clientY,x.lastTime=dt,!x.moved&&Math.hypot(Q.clientX-x.x,Q.clientY-x.y)<6)return;x.moved=!0,t.classList.add("is-dragging");let ut=Q.clientX-x.offsetX-S,Rt=Q.clientY-x.offsetY-E,gt=ut-r.x,Gt=Rt-r.y;if(Math.hypot(gt,Gt)>1){let de=Math.atan2(gt,Gt);o.heading+=Math.atan2(Math.sin(de-o.heading),Math.cos(de-o.heading))*.3}r.set(ut,Rt),k(),l&&(l.robot.group.rotation.y=o.heading,l.render())}else{let dt=t.getBoundingClientRect();a.set((Q.clientX-dt.left)/dt.width*2-1,1-(Q.clientY-dt.top)/dt.height*2)}});function Ft(Q){if(!x||Q&&Q.pointerId!==x.id)return;let dt=x;if(x=void 0,v=dt.moved,t.hasPointerCapture(dt.id)&&t.releasePointerCapture(dt.id),t.classList.remove("is-dragging"),o.pause(),!dt.moved)return;if(Q?.type!=="pointerup"){o.snapToEdge(r,m,h),k();return}let At=Math.exp(-(performance.now()-dt.lastTime)/140),G=dt.velocityX*At,K=dt.velocityY*At,ut=Math.hypot(G,K),Rt=r.x+G*.3,gt=r.y+K*.3,Gt=r.x<-R*.35||r.x>m+R*.35||r.y<-t.offsetHeight*.35||r.y>h+t.offsetHeight*.35,de=ut>=650&&(Rt<0||Rt>m||gt<0||gt>h);if(Gt||de){let C=new yt(ut>=260?G:r.x-(dt.x-dt.offsetX-S),ut>=260?K:r.y-(dt.y-dt.offsetY-E));W(!1,C),e.focus({preventScroll:!0})}else o.snapToEdge(r,m,h),k()}t.addEventListener("pointerup",Ft),t.addEventListener("pointercancel",Ft),t.addEventListener("lostpointercapture",Ft),window.addEventListener("blur",()=>{Ft(),g=!1}),t.addEventListener("click",Q=>{if(v&&Q.detail!==0){v=!1;return}v=!1,X.open(),j()}),e.addEventListener("click",()=>{X.open(),j()}),t.addEventListener("pointerenter",Q=>{Q.pointerType==="mouse"&&(g=!0)}),t.addEventListener("pointerleave",()=>{g=!1,a.set(0,0)}),t.addEventListener("focus",()=>{y=t.matches(":focus-visible")}),t.addEventListener("blur",()=>{y=!1}),t.addEventListener("keydown",Q=>{if(i)return;let dt={ArrowLeft:[-24,0],ArrowRight:[24,0],ArrowUp:[0,-24],ArrowDown:[0,24]};if(!dt[Q.key])return;Q.preventDefault(),y=!0;let[At,G]=dt[Q.key];r.x+=At,r.y+=G,o.heading=Math.atan2(At,G),k(),l&&(l.robot.group.rotation.y=o.heading,l.render()),o.pause()}),document.addEventListener("visibilitychange",()=>{document.hidden&&Ft(),mt()}),c.addEventListener("change",mt),mt()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",sh,{once:!0}):sh();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
