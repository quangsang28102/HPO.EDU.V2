(()=>{var Oh=Object.defineProperty;var Bh=(i,e,t)=>e in i?Oh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var xe=(i,e,t)=>Bh(i,typeof e!="symbol"?e+"":e,t);var Gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kl=0,Ia=1,Jl=2;var La=1,Ql=2,mn=3,wn=0,Et=1,gn=2,An=0,ei=1,Da=2,Ua=3,Na=4,jl=5,Bn=100,$l=101,ec=102,tc=103,nc=104,ic=200,sc=201,rc=202,oc=203,mr=204,gr=205,ac=206,lc=207,cc=208,hc=209,uc=210,dc=211,fc=212,pc=213,mc=214,zr=0,kr=1,Hr=2,ti=3,Vr=4,Gr=5,Wr=6,Xr=7,Yr=0,gc=1,xc=2,Rn=0,yc=1,vc=2,_c=3,bc=4,Mc=5,Sc=6,qr=7;var Fa=300,ri=301,oi=302,Zr=303,Kr=304,Bs=306,xr=1e3,On=1001,yr=1002,Nt=1003,Ec=1004;var zs=1005;var sn=1006,Jr=1007;var Xn=1008;var rn=1009,Oa=1010,Ba=1011,Wi=1012,Qr=1013,Yn=1014,on=1015,Xi=1016,jr=1017,$r=1018,Yi=1020,za=35902,ka=35899,Ha=1021,Va=1022,Qt=1023,Ii=1026,qi=1027,eo=1028,to=1029,Ga=1030,no=1031;var io=1033,ks=33776,Hs=33777,Vs=33778,Gs=33779,so=35840,ro=35841,oo=35842,ao=35843,lo=36196,co=37492,ho=37496,uo=37808,fo=37809,po=37810,mo=37811,go=37812,xo=37813,yo=37814,vo=37815,_o=37816,bo=37817,Mo=37818,So=37819,Eo=37820,wo=37821,To=36492,Ao=36494,Ro=36495,Co=36283,Po=36284,Io=36285,Lo=36286;var fs=2300,vr=2301,fr=2302,Sa=2400,Ea=2401,wa=2402;var wc=3200,Tc=3201;var Do=0,Ac=1,Cn="",At="srgb",ni="srgb-linear",ps="linear",nt="srgb";var $n=7680;var Ta=519,Rc=512,Cc=513,Pc=514,Wa=515,Ic=516,Lc=517,Dc=518,Uc=519,Aa=35044;var Xa="300 es",nn=2e3,ms=2001;var hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=1234567,us=Math.PI/180,Li=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Ya(i,e){return(i%e+e)%e}function zh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kh(i,e,t){return i!==e?(t-i)/(e-i):0}function ds(i,e,t){return(1-t)*i+t*e}function Hh(i,e,t,n){return ds(i,e,1-Math.exp(-t*n))}function Vh(i,e=1){return e-Math.abs(Ya(i,e*2)-e)}function Gh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yh(i,e){return i+Math.random()*(e-i)}function qh(i){return i*(.5-Math.random())}function Zh(i){i!==void 0&&(Tl=i);let e=Tl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kh(i){return i*us}function Jh(i){return i*Li}function Qh(i){return(i&i-1)===0&&i!==0}function jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $h(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function eu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ze={DEG2RAD:us,RAD2DEG:Li,generateUUID:Zi,clamp:We,euclideanModulo:Ya,mapLinear:zh,inverseLerp:kh,lerp:ds,damp:Hh,pingpong:Vh,smoothstep:Gh,smootherstep:Wh,randInt:Xh,randFloat:Yh,randFloatSpread:qh,seededRandom:Zh,degToRad:Kh,radToDeg:Jh,isPowerOfTwo:Qh,ceilPowerOfTwo:jh,floorPowerOfTwo:$h,setQuaternionFromProperEuler:eu,normalize:It,denormalize:Ci},he=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(h!==y||c!==f||l!==p||u!==g){let m=1-o,d=c*f+l*p+u*g+h*y,S=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let A=Math.sqrt(E),T=Math.atan2(A,d*S);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}let M=o*S;if(c=c*m+f*M,l=l*m+p*M,u=u*m+g*M,h=h*m+y*M,m===1-o){let A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-o*p,e[t+2]=l*g+u*p+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ea=new U,Al=new Zt,He=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],y=s[0],m=s[3],d=s[6],S=s[1],E=s[4],M=s[7],A=s[2],T=s[5],C=s[8];return r[0]=a*y+o*S+c*A,r[3]=a*m+o*E+c*T,r[6]=a*d+o*M+c*C,r[1]=l*y+u*S+h*A,r[4]=l*m+u*E+h*T,r[7]=l*d+u*M+h*C,r[2]=f*y+p*S+g*A,r[5]=f*m+p*E+g*T,r[8]=f*d+p*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,p=l*r-a*c,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(s*l-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=f*y,e[4]=(u*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ta=new He;function qa(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Di(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nc(){let i=Di("canvas");return i.style.display="block",i}var Rl={};function Ui(i){i in Rl||(Rl[i]=!0,console.warn(i))}function Fc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Cl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tu(){let i={enabled:!0,workingColorSpace:ni,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?ps:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ui("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ui("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ni]:{primaries:e,whitePoint:n,transfer:ps,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}var Ke=tu();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mi,_r=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mi===void 0&&(mi=Di("canvas")),mi.width=e.width,mi.height=e.height;let s=mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Di("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(En(t[n]/255)*255):t[n]=En(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nu=0,Ni=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(na(s[a].image)):r.push(na(s[a]))}else r=na(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var iu=0,ia=new U,bt=class i extends hn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=On,s=On,r=sn,a=Xn,o=Qt,c=rn,l=i.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Zi(),this.name="",this.source=new Ni(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Fa;bt.DEFAULT_ANISOTROPY=1;var Ze=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,M=(p+1)/2,A=(d+1)/2,T=(u+f)/4,C=(h+y)/4,I=(g+m)/4;return E>M&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=C/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=I/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-y)/S,this.z=(f-u)/S,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},br=class extends hn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new bt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ni(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends br{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},gs=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mr=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(r,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Ks.subVectors(this.max,ss),gi.subVectors(e.a,ss),xi.subVectors(e.b,ss),yi.subVectors(e.c,ss),Pn.subVectors(xi,gi),In.subVectors(yi,xi),Kn.subVectors(gi,yi);let t=[0,-Pn.z,Pn.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Pn.z,0,-Pn.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Pn.y,Pn.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!sa(t,gi,xi,yi,Ks)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,gi,xi,yi,Ks))?!1:(Js.crossVectors(Pn,In),t=[Js.x,Js.y,Js.z],sa(t,gi,xi,yi,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vn=[new U,new U,new U,new U,new U,new U,new U,new U],$t=new U,Zs=new dn,gi=new U,xi=new U,yi=new U,Pn=new U,In=new U,Kn=new U,ss=new U,Ks=new U,Js=new U,Jn=new U;function sa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);let o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),c=e.dot(Jn),l=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var su=new dn,rs=new U,ra=new U,zn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):su.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);let t=rs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(rs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(ra)),this.expandByPoint(rs.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_n=new U,oa=new U,Qs=new U,Ln=new U,aa=new U,js=new U,la=new U,Fi=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oa.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(oa);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=Ln.dot(this.direction),c=-Ln.dot(Qs),l=Ln.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(oa).addScaledVector(Qs,f),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);let n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,s,r){aa.subVectors(t,e),js.subVectors(n,e),la.crossVectors(aa,js);let a=this.direction.dot(la),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);let c=o*this.direction.dot(js.crossVectors(Ln,js));if(c<0)return null;let l=o*this.direction.dot(aa.cross(Ln));if(l<0||c+l>a)return null;let u=-o*Ln.dot(la);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class i{constructor(e,t,n,s,r,a,o,c,l,u,h,f,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,f,p,g,y,m)}set(e,t,n,s,r,a,o,c,l,u,h,f,p,g,y,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*h,g=o*u,y=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-y*l,t[9]=-o*c,t[2]=y-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,p=c*h,g=l*u,y=l*h;t[0]=f+y*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=y+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,p=c*h,g=l*u,y=l*h;t[0]=f-y*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=y-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,p=a*h,g=o*u,y=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+y,t[1]=c*h,t[5]=y*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*u,t[4]=y-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-y*h}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+y,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ru,e,ou)}lookAt(e,t,n){let s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Dn.crossVectors(n,kt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Dn.crossVectors(n,kt)),Dn.normalize(),$s.crossVectors(kt,Dn),s[0]=Dn.x,s[4]=$s.x,s[8]=kt.x,s[1]=Dn.y,s[5]=$s.y,s[9]=kt.y,s[2]=Dn.z,s[6]=$s.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],y=n[6],m=n[10],d=n[14],S=n[3],E=n[7],M=n[11],A=n[15],T=s[0],C=s[4],I=s[8],_=s[12],b=s[1],R=s[5],O=s[9],L=s[13],N=s[2],k=s[6],H=s[10],J=s[14],V=s[3],se=s[7],oe=s[11],ve=s[15];return r[0]=a*T+o*b+c*N+l*V,r[4]=a*C+o*R+c*k+l*se,r[8]=a*I+o*O+c*H+l*oe,r[12]=a*_+o*L+c*J+l*ve,r[1]=u*T+h*b+f*N+p*V,r[5]=u*C+h*R+f*k+p*se,r[9]=u*I+h*O+f*H+p*oe,r[13]=u*_+h*L+f*J+p*ve,r[2]=g*T+y*b+m*N+d*V,r[6]=g*C+y*R+m*k+d*se,r[10]=g*I+y*O+m*H+d*oe,r[14]=g*_+y*L+m*J+d*ve,r[3]=S*T+E*b+M*N+A*V,r[7]=S*C+E*R+M*k+A*se,r[11]=S*I+E*O+M*H+A*oe,r[15]=S*_+E*L+M*J+A*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*p-n*c*p)+y*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*u-r*c*u)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+d*(-s*o*u-t*c*h+t*o*f+s*a*h-n*a*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],S=h*m*l-y*f*l+y*c*p-o*m*p-h*c*d+o*f*d,E=g*f*l-u*m*l-g*c*p+a*m*p+u*c*d-a*f*d,M=u*y*l-g*h*l+g*o*p-a*y*p-u*o*d+a*h*d,A=g*h*c-u*y*c-g*o*f+a*y*f+u*o*m-a*h*m,T=t*S+n*E+s*M+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=S*C,e[1]=(y*f*r-h*m*r-y*s*p+n*m*p+h*s*d-n*f*d)*C,e[2]=(o*m*r-y*c*r+y*s*l-n*m*l-o*s*d+n*c*d)*C,e[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*p-n*c*p)*C,e[4]=E*C,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*C,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*d-t*c*d)*C,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*p+t*c*p)*C,e[8]=M*C,e[9]=(g*h*r-u*y*r-g*n*p+t*y*p+u*n*d-t*h*d)*C,e[10]=(a*y*r-g*o*r+g*n*l-t*y*l-a*n*d+t*o*d)*C,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*C,e[12]=A*C,e[13]=(u*y*s-g*h*s+g*n*f-t*y*f-u*n*m+t*h*m)*C,e[14]=(g*o*s-a*y*s-g*n*c+t*y*c+a*n*m-t*o*m)*C,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*f+t*o*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,p=r*u,g=r*h,y=a*u,m=a*h,d=o*h,S=c*l,E=c*u,M=c*h,A=n.x,T=n.y,C=n.z;return s[0]=(1-(y+d))*A,s[1]=(p+M)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+d))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+E)*C,s[9]=(m-S)*C,s[10]=(1-(f+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=vi.set(s[0],s[1],s[2]).length(),a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],en.copy(this);let l=1/r,u=1/a,h=1/o;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=nn,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===nn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ms)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=nn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===nn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===ms)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vi=new U,en=new dt,ru=new U(0,0,0),ou=new U(1,1,1),Dn=new U,$s=new U,kt=new U,Il=new dt,Ll=new Zt,Ft=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ft.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},au=0,Dl=new U,_i=new Zt,bn=new dt,er=new U,os=new U,lu=new U,cu=new Zt,Ul=new U(1,0,0),Nl=new U(0,1,0),Fl=new U(0,0,1),Ol={type:"added"},hu={type:"removed"},bi={type:"childadded",child:null},ca={type:"childremoved",child:null},Mt=class i extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Ft,n=new Zt,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new He}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Fl,e)}translateOnAxis(e,t){return Dl.copy(e).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(os,er,this.up):bn.lookAt(er,os,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(bn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ol),bi.child=e,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hu),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ol),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Mt.DEFAULT_UP=new U(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new U,Mn=new U,ha=new U,Sn=new U,Mi=new U,Si=new U,Bl=new U,ua=new U,da=new U,fa=new U,pa=new Ze,ma=new Ze,ga=new Ze,Fn=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),Mn.subVectors(n,t),ha.subVectors(e,t);let a=tn.dot(tn),o=tn.dot(Mn),c=tn.dot(ha),l=Mn.dot(Mn),u=Mn.dot(ha),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(a,Sn.y),c.addScaledVector(o,Sn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(e,t),ma.fromBufferAttribute(e,n),ga.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pa,r.x),a.addScaledVector(ma,r.y),a.addScaledVector(ga,r.z),a}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),Mn.subVectors(e,t),tn.cross(Mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),tn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Mi.subVectors(s,n),Si.subVectors(r,n),ua.subVectors(e,n);let c=Mi.dot(ua),l=Si.dot(ua);if(c<=0&&l<=0)return t.copy(n);da.subVectors(e,s);let u=Mi.dot(da),h=Si.dot(da);if(u>=0&&h<=u)return t.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Mi,a);fa.subVectors(e,r);let p=Mi.dot(fa),g=Si.dot(fa);if(g>=0&&p<=g)return t.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Si,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Bl.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Bl,o);let d=1/(m+y+f);return a=y*d,o=f*d,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},tr={h:0,s:0,l:0};function xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Ya(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xa(a,r,e+1/3),this.g=xa(a,r,e),this.b=xa(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Oc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ke.workingToColorSpace(Tt.copy(this),e),Math.round(We(Tt.r*255,0,255))*65536+Math.round(We(Tt.g*255,0,255))*256+Math.round(We(Tt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=At){Ke.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,s=Tt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(tr);let n=ds(Un.h,tr.h,t),s=ds(Un.s,tr.s,t),r=ds(Un.l,tr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new ke;ke.NAMES=Oc;var uu=0,Tn=class extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=ei,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=gr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mr&&(n.blendSrc=this.blendSrc),this.blendDst!==gr&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kt=class extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new U,nr=new he,du=0,Ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:du++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),e}};var ys=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var vs=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},fu=0,Yt=new dt,ya=new Mt,Ei=new U,Ht=new dn,as=new dn,_t=new U,Rt=class i extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qa(e)?vs:ys)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Ht.min,as.min),Ht.expandByPoint(_t),_t.addVectors(Ht.max,as.max),Ht.expandByPoint(_t)):(Ht.expandByPoint(as.min),Ht.expandByPoint(as.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_t.fromBufferAttribute(o,l),c&&(Ei.fromBufferAttribute(e,l),_t.add(Ei)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new U,c[I]=new U;let l=new U,u=new U,h=new U,f=new he,p=new he,g=new he,y=new U,m=new U;function d(I,_,b){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,b),u.sub(l),h.sub(l),p.sub(f),g.sub(f);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[I].add(y),o[_].add(y),o[b].add(y),c[I].add(m),c[_].add(m),c[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,_=S.length;I<_;++I){let b=S[I],R=b.start,O=b.count;for(let L=R,N=R+O;L<N;L+=3)d(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let E=new U,M=new U,A=new U,T=new U;function C(I){A.fromBufferAttribute(s,I),T.copy(A);let _=o[I];E.copy(_),E.sub(A.multiplyScalar(A.dot(_))).normalize(),M.crossVectors(T,_);let R=M.dot(c[I])<0?-1:1;a.setXYZW(I,E.x,E.y,E.z,R)}for(let I=0,_=S.length;I<_;++I){let b=S[I],R=b.start,O=b.count;for(let L=R,N=R+O;L<N;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new Ut(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zl=new dt,Qn=new Fi,ir=new zn,kl=new U,sr=new U,rr=new U,or=new U,va=new U,ar=new U,Hl=new U,lr=new U,rt=class extends Mt{constructor(e=new Rt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(va.fromBufferAttribute(h,e),a?ar.addScaledVector(va,u):ar.addScaledVector(va.sub(t),u))}t.add(ar)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(ir.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(ir,kl)===null||Qn.origin.distanceToSquared(kl)>(e.far-e.near)**2))&&(zl.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(zl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,A=E;M<A;M+=3){let T=o.getX(M),C=o.getX(M+1),I=o.getX(M+2);s=cr(this,d,e,n,l,u,h,T,C,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let S=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=cr(this,a,e,n,l,u,h,S,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,A=E;M<A;M+=3){let T=M,C=M+1,I=M+2;s=cr(this,d,e,n,l,u,h,T,C,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let S=m,E=m+1,M=m+2;s=cr(this,a,e,n,l,u,h,S,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function pu(i,e,t,n,s,r,a,o){let c;if(e.side===Et?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===wn,o),c===null)return null;lr.copy(o),lr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(lr);return l<t.near||l>t.far?null:{distance:l,point:lr.clone(),object:i}}function cr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,sr),i.getVertexPosition(c,rr),i.getVertexPosition(l,or);let u=pu(i,e,t,n,sr,rr,or,Hl);if(u){let h=new U;Fn.getBarycoord(Hl,sr,rr,or,h),s&&(u.uv=Fn.getInterpolatedAttribute(s,o,c,l,h,new he)),r&&(u.uv1=Fn.getInterpolatedAttribute(r,o,c,l,h,new he)),a&&(u.normal=Fn.getInterpolatedAttribute(a,o,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new U,materialIndex:0};Fn.getNormal(sr,rr,or,f.normal),u.face=f,u.barycoord=h}return u}var fn=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2));function g(y,m,d,S,E,M,A,T,C,I,_){let b=M/C,R=A/I,O=M/2,L=A/2,N=T/2,k=C+1,H=I+1,J=0,V=0,se=new U;for(let oe=0;oe<H;oe++){let ve=oe*R-L;for(let Fe=0;Fe<k;Fe++){let Ye=Fe*b-O;se[y]=Ye*S,se[m]=ve*E,se[d]=N,l.push(se.x,se.y,se.z),se[y]=0,se[m]=0,se[d]=T>0?1:-1,u.push(se.x,se.y,se.z),h.push(Fe/C),h.push(1-oe/I),J+=1}}for(let oe=0;oe<I;oe++)for(let ve=0;ve<C;ve++){let Fe=f+ve+k*oe,Ye=f+ve+k*(oe+1),et=f+(ve+1)+k*(oe+1),Ge=f+(ve+1)+k*oe;c.push(Fe,Ye,Ge),c.push(Ye,et,Ge),V+=6}o.addGroup(p,V,_),p+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ai(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){let e={};for(let t=0;t<i.length;t++){let n=ai(i[t]);for(let s in n)e[s]=n[s]}return e}function mu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Za(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Bc={clone:ai,merge:Ct},gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_s=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nn=new U,Vl=new he,Gl=new he,St=class extends _s{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Li*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Gl),t.subVectors(Gl,Vl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(us*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wi=-90,Ti=1,Sr=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new St(wi,Ti,e,t);s.layers=this.layers,this.add(s);let r=new St(wi,Ti,e,t);r.layers=this.layers,this.add(r);let a=new St(wi,Ti,e,t);a.layers=this.layers,this.add(a);let o=new St(wi,Ti,e,t);o.layers=this.layers,this.add(o);let c=new St(wi,Ti,e,t);c.layers=this.layers,this.add(c);let l=new St(wi,Ti,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},bs=class extends bt{constructor(e=[],t=ri,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Er=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:An});r.uniforms.tEquirect.value=t;let a=new rt(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=sn),new Sr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},tt=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},yu={type:"move"},Oi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ii=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ft,this.environmentIntensity=1,this.environmentRotation=new Ft,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var wr=class extends bt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,u=Nt,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ms=class extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ai=new dt,Wl=new dt,hr=[],Xl=new dn,vu=new dt,ls=new rt,cs=new zn,Ss=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ai),Xl.copy(e.boundingBox).applyMatrix4(Ai),this.boundingBox.union(Xl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ai),cs.copy(e.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union(cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cs.copy(this.boundingSphere),cs.applyMatrix4(n),e.ray.intersectsSphere(cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ai),Wl.multiplyMatrices(n,Ai),ls.matrixWorld=Wl,ls.raycast(e,hr);for(let a=0,o=hr.length;a<o;a++){let c=hr[a];c.instanceId=r,c.object=this,t.push(c)}hr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wr(new Float32Array(s*this.count),s,this.count,eo,on));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_a=new U,_u=new U,bu=new He,qt=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_a.subVectors(n,t).cross(_u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bu.getNormalMatrix(e),s=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},jn=new zn,Mu=new he(.5,.5),ur=new U,Bi=class{constructor(e=new qt,t=new qt,n=new qt,s=new qt,r=new qt,a=new qt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],y=r[9],m=r[10],d=r[11],S=r[12],E=r[13],M=r[14],A=r[15];if(s[0].setComponents(l-a,p-u,d-g,A-S).normalize(),s[1].setComponents(l+a,p+u,d+g,A+S).normalize(),s[2].setComponents(l+o,p+h,d+y,A+E).normalize(),s[3].setComponents(l-o,p-h,d-y,A-E).normalize(),n)s[4].setComponents(c,f,m,M).normalize(),s[5].setComponents(l-c,p-f,d-m,A-M).normalize();else if(s[4].setComponents(l-c,p-f,d-m,A-M).normalize(),t===nn)s[5].setComponents(l+c,p+f,d+m,A+M).normalize();else if(t===ms)s[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){jn.center.set(0,0,0);let t=Mu.distanceTo(e.center);return jn.radius=.7071067811865476+t,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ur.x=s.normal.x>0?e.max.x:e.min.x,ur.y=s.normal.y>0?e.max.y:e.min.y,ur.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ur)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Es=class extends bt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ws=class extends bt{constructor(e,t,n=Yn,s,r,a,o=Nt,c=Nt,l,u=Ii,h=1){if(u!==Ii&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ni(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ts=class extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},As=class i extends Rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,f=t,p=2*h+f,g=n*2+r,y=s+1,m=new U,d=new U;for(let S=0;S<=g;S++){let E=0,M=0,A=0,T=0;if(S<=n){let _=S/n,b=_*Math.PI/2;M=-u-e*Math.cos(b),A=e*Math.sin(b),T=-e*Math.cos(b),E=_*h}else if(S<=n+r){let _=(S-n)/r;M=-u+_*t,A=e,T=0,E=h+_*f}else{let _=(S-n-r)/n,b=_*Math.PI/2;M=u+e*Math.sin(b),A=e*Math.cos(b),T=e*Math.sin(b),E=h+f+_*h}let C=Math.max(0,Math.min(1,E/p)),I=0;S===0?I=.5/s:S===g&&(I=-.5/s);for(let _=0;_<=s;_++){let b=_/s,R=b*Math.PI*2,O=Math.sin(R),L=Math.cos(R);d.x=-A*L,d.y=M,d.z=A*O,o.push(d.x,d.y,d.z),m.set(-A*L,T,A*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(b+I,C)}if(S>0){let _=(S-1)*y;for(let b=0;b<s;b++){let R=_+b,O=_+b+1,L=S*y+b,N=S*y+b+1;a.push(R,O,L),a.push(O,N,L)}}}this.setIndex(a),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Rs=class i extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new U,u=new he;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},kn=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,y=[],m=n/2,d=0;S(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(p,2));function S(){let M=new U,A=new U,T=0,C=(t-e)/n;for(let I=0;I<=r;I++){let _=[],b=I/r,R=b*(t-e)+e;for(let O=0;O<=s;O++){let L=O/s,N=L*c+o,k=Math.sin(N),H=Math.cos(N);A.x=R*k,A.y=-b*n+m,A.z=R*H,h.push(A.x,A.y,A.z),M.set(k,C,H).normalize(),f.push(M.x,M.y,M.z),p.push(L,1-b),_.push(g++)}y.push(_)}for(let I=0;I<s;I++)for(let _=0;_<r;_++){let b=y[_][I],R=y[_+1][I],O=y[_+1][I+1],L=y[_][I+1];(e>0||_!==0)&&(u.push(b,R,L),T+=3),(t>0||_!==r-1)&&(u.push(R,O,L),T+=3)}l.addGroup(d,T,0),d+=T}function E(M){let A=g,T=new he,C=new U,I=0,_=M===!0?e:t,b=M===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;let R=g;for(let O=0;O<=s;O++){let N=O/s*c+o,k=Math.cos(N),H=Math.sin(N);C.x=_*H,C.y=m*b,C.z=_*k,h.push(C.x,C.y,C.z),f.push(0,b,0),T.x=k*.5+.5,T.y=H*.5*b+.5,p.push(T.x,T.y),g++}for(let O=0;O<s;O++){let L=A+O,N=R+O;M===!0?u.push(N,N+1,L):u.push(N+1,N,L),I+=3}l.addGroup(d,I,M===!0?1:2),d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Cs=class i extends Rt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=We(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,h=new U,f=new he,p=new U,g=new U,y=new U,m=0,d=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,p.x=d*1,p.y=-m,p.z=d*0,y.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),c.push(p.x,p.y,p.z),y.copy(g)}for(let S=0;S<=t;S++){let E=n+S*u*s,M=Math.sin(E),A=Math.cos(E);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*M,h.y=e[T].y,h.z=e[T].x*A,a.push(h.x,h.y,h.z),f.x=S/t,f.y=T/(e.length-1),o.push(f.x,f.y);let C=c[3*T+0]*M,I=c[3*T+1],_=c[3*T+0]*A;l.push(C,I,_)}}for(let S=0;S<t;S++)for(let E=0;E<e.length-1;E++){let M=E+S*e.length,A=M,T=M+e.length,C=M+e.length+1,I=M+1;r.push(A,T,I),r.push(C,I,T)}this.setIndex(r),this.setAttribute("position",new je(a,3)),this.setAttribute("uv",new je(o,2)),this.setAttribute("normal",new je(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var pn=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,p=[],g=[],y=[],m=[];for(let d=0;d<u;d++){let S=d*f-a;for(let E=0;E<l;E++){let M=E*h-r;g.push(M,-S,0),y.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){let E=S+l*d,M=S+l*(d+1),A=S+1+l*(d+1),T=S+1+l*d;p.push(E,M,T),p.push(M,A,T)}this.setIndex(p),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(y,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var zi=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new U,f=new U,p=[],g=[],y=[],m=[];for(let d=0;d<=n;d++){let S=[],E=d/n,M=0;d===0&&a===0?M=.5/t:d===n&&c===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){let T=A/t;h.x=-e*Math.cos(s+T*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(s+T*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(T+M,1-E),S.push(l++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){let E=u[d][S+1],M=u[d][S],A=u[d+1][S],T=u[d+1][S+1];(d!==0||a>0)&&p.push(E,M,T),(d!==n-1||c<Math.PI)&&p.push(M,A,T)}this.setIndex(p),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(y,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ps=class i extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],u=new U,h=new U,f=new U;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(y),h.y=(e+t*Math.cos(m))*Math.sin(y),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,S=(s+1)*p+g;a.push(y,m,S),a.push(m,d,S)}this.setIndex(a),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Vt=class extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jt=class extends Vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Is=class extends Tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Tr=class extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ar=class extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function dr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Su(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var si=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rr=class extends si{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sa,endingEnd:Sa}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ea:r=e,o=2*t-n;break;case wa:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ea:a=e,c=2*n-t;break;case wa:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,d=-f*m+2*f*y-f*g,S=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*y+.5*g,M=p*m-p*y;for(let A=0;A!==o;++A)r[A]=d*a[u+A]+S*a[l+A]+E*a[c+A]+M*a[h+A];return r}},Cr=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}},Pr=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dr(t,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:dr(e.times,Array),values:dr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case fr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return fr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Su(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let y=t[h+g];if(y!==t[f+g]||y!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gt.prototype.ValueTypeName="";Gt.prototype.TimeBufferType=Float32Array;Gt.prototype.ValueBufferType=Float32Array;Gt.prototype.DefaultInterpolation=vr;var Hn=class extends Gt{constructor(e,t,n){super(e,t,n)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=fs;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ir=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};Ir.prototype.ValueTypeName="color";var Lr=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};Lr.prototype.ValueTypeName="number";var Dr=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)Zt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ls=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Dr(this.times,this.values,this.getValueSize(),e)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends Gt{constructor(e,t,n){super(e,t,n)}};Vn.prototype.ValueTypeName="string";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=fs;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};Ur.prototype.ValueTypeName="vector";var pr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Nr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},zc=new Nr,ki=class{constructor(e){this.manager=e!==void 0?e:zc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri=new WeakMap,Fr=class extends ki{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=pr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ri.get(a);h===void 0&&(h=[],Ri.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Di("img");function c(){u(),t&&t(this);let h=Ri.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}Ri.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),pr.remove(`image:${e}`);let f=Ri.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(h)}Ri.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),pr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ds=class extends ki{constructor(e){super(e)}load(e,t,n,s){let r=new bt,a=new Fr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hi=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Us=class extends Hi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ba=new dt,Yl=new U,ql=new U,Or=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bi,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Zl=new dt,hs=new U,Ma=new U,Ra=class extends Or{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(hs),Ma.copy(n.position),Ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ma),n.updateMatrixWorld(),s.makeTranslation(-hs.x,-hs.y,-hs.z),Zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl,n.coordinateSystem,n.reversedDepth)}},Ns=class extends Hi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ra}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Fs=class extends _s{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ca=class extends Or{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends Hi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Ca}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Br=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ka="\\[\\]\\.:\\/",Eu=new RegExp("["+Ka+"]","g"),Ja="[^"+Ka+"]",wu="[^"+Ka.replace("\\.","")+"]",Tu=/((?:WC+[\/:])*)/.source.replace("WC",Ja),Au=/(WCOD+)?/.source.replace("WCOD",wu),Ru=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ja),Cu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ja),Pu=new RegExp("^"+Tu+Au+Ru+Cu+"$"),Iu=["material","materials","bones","map"],Pa=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Eu,"")}static parseTrackName(e){let t=Pu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Iu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Pa;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ng=new Float32Array(1);var Gi=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Os=class extends hn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Qa(i,e,t,n){let s=Lu(n);switch(t){case Ha:return i*e;case eo:return i*e/s.components*s.byteLength;case to:return i*e/s.components*s.byteLength;case Ga:return i*e*2/s.components*s.byteLength;case no:return i*e*2/s.components*s.byteLength;case Va:return i*e*3/s.components*s.byteLength;case Qt:return i*e*4/s.components*s.byteLength;case io:return i*e*4/s.components*s.byteLength;case ks:case Hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:case ao:return Math.max(i,16)*Math.max(e,8)/4;case so:case oo:return Math.max(i,8)*Math.max(e,8)/2;case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case To:case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Co:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Io:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lu(i){switch(i){case rn:case Oa:return{byteLength:1,components:1};case Wi:case Ba:case Xi:return{byteLength:2,components:1};case jr:case $r:return{byteLength:2,components:4};case Yn:case Qr:case on:return{byteLength:4,components:1};case za:case ka:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ch(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Uu(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let y=h[p];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fu=`#ifdef USE_ALPHAHASH
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
#endif`,Ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hu=`#ifdef USE_AOMAP
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
#endif`,Vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
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
#endif`,Wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ku=`#ifdef USE_BUMPMAP
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sd=`#define PI 3.141592653589793
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
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,od=`vec3 transformedNormal = objectNormal;
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
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
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
}`,Sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Td=`uniform bool receiveShadow;
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
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
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
#endif`,Dd=`struct PhysicalMaterial {
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
}`,Ud=`
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wd=`#if defined( USE_POINTS_UV )
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
#endif`,Xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sf=`#ifdef USE_NORMALMAP
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
#endif`,rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_f=`float getShadowMask() {
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
}`,bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,Sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ef=`#ifdef USE_SKINNING
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
#endif`,wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cf=`#ifdef USE_TRANSMISSION
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
#endif`,Pf=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`#include <common>
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
}`,Vf=`#if DEPTH_PACKING == 3200
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
}`,Gf=`#define DISTANCE
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
}`,Wf=`#define DISTANCE
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
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`uniform float scale;
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Kf=`#include <common>
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Qf=`#define LAMBERT
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
}`,jf=`#define LAMBERT
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
}`,$f=`#define MATCAP
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
}`,ep=`#define MATCAP
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
}`,tp=`#define NORMAL
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
}`,np=`#define NORMAL
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
}`,ip=`#define PHONG
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
}`,sp=`#define PHONG
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
}`,rp=`#define STANDARD
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
}`,op=`#define STANDARD
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
}`,ap=`#define TOON
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
}`,lp=`#define TOON
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
}`,cp=`uniform float size;
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,dp=`uniform vec3 color;
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
}`,fp=`uniform float rotation;
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
}`,pp=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Nu,alphahash_pars_fragment:Fu,alphamap_fragment:Ou,alphamap_pars_fragment:Bu,alphatest_fragment:zu,alphatest_pars_fragment:ku,aomap_fragment:Hu,aomap_pars_fragment:Vu,batching_pars_vertex:Gu,batching_vertex:Wu,begin_vertex:Xu,beginnormal_vertex:Yu,bsdfs:qu,iridescence_fragment:Zu,bumpmap_pars_fragment:Ku,clipping_planes_fragment:Ju,clipping_planes_pars_fragment:Qu,clipping_planes_pars_vertex:ju,clipping_planes_vertex:$u,color_fragment:ed,color_pars_fragment:td,color_pars_vertex:nd,color_vertex:id,common:sd,cube_uv_reflection_fragment:rd,defaultnormal_vertex:od,displacementmap_pars_vertex:ad,displacementmap_vertex:ld,emissivemap_fragment:cd,emissivemap_pars_fragment:hd,colorspace_fragment:ud,colorspace_pars_fragment:dd,envmap_fragment:fd,envmap_common_pars_fragment:pd,envmap_pars_fragment:md,envmap_pars_vertex:gd,envmap_physical_pars_fragment:Ad,envmap_vertex:xd,fog_vertex:yd,fog_pars_vertex:vd,fog_fragment:_d,fog_pars_fragment:bd,gradientmap_pars_fragment:Md,lightmap_pars_fragment:Sd,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:wd,lights_pars_begin:Td,lights_toon_fragment:Rd,lights_toon_pars_fragment:Cd,lights_phong_fragment:Pd,lights_phong_pars_fragment:Id,lights_physical_fragment:Ld,lights_physical_pars_fragment:Dd,lights_fragment_begin:Ud,lights_fragment_maps:Nd,lights_fragment_end:Fd,logdepthbuf_fragment:Od,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:kd,map_fragment:Hd,map_pars_fragment:Vd,map_particle_fragment:Gd,map_particle_pars_fragment:Wd,metalnessmap_fragment:Xd,metalnessmap_pars_fragment:Yd,morphinstance_vertex:qd,morphcolor_vertex:Zd,morphnormal_vertex:Kd,morphtarget_pars_vertex:Jd,morphtarget_vertex:Qd,normal_fragment_begin:jd,normal_fragment_maps:$d,normal_pars_fragment:ef,normal_pars_vertex:tf,normal_vertex:nf,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:rf,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:af,iridescence_pars_fragment:lf,opaque_fragment:cf,packing:hf,premultiplied_alpha_fragment:uf,project_vertex:df,dithering_fragment:ff,dithering_pars_fragment:pf,roughnessmap_fragment:mf,roughnessmap_pars_fragment:gf,shadowmap_pars_fragment:xf,shadowmap_pars_vertex:yf,shadowmap_vertex:vf,shadowmask_pars_fragment:_f,skinbase_vertex:bf,skinning_pars_vertex:Mf,skinning_vertex:Sf,skinnormal_vertex:Ef,specularmap_fragment:wf,specularmap_pars_fragment:Tf,tonemapping_fragment:Af,tonemapping_pars_fragment:Rf,transmission_fragment:Cf,transmission_pars_fragment:Pf,uv_pars_fragment:If,uv_pars_vertex:Lf,uv_vertex:Df,worldpos_vertex:Uf,background_vert:Nf,background_frag:Ff,backgroundCube_vert:Of,backgroundCube_frag:Bf,cube_vert:zf,cube_frag:kf,depth_vert:Hf,depth_frag:Vf,distanceRGBA_vert:Gf,distanceRGBA_frag:Wf,equirect_vert:Xf,equirect_frag:Yf,linedashed_vert:qf,linedashed_frag:Zf,meshbasic_vert:Kf,meshbasic_frag:Jf,meshlambert_vert:Qf,meshlambert_frag:jf,meshmatcap_vert:$f,meshmatcap_frag:ep,meshnormal_vert:tp,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:sp,meshphysical_vert:rp,meshphysical_frag:op,meshtoon_vert:ap,meshtoon_frag:lp,points_vert:cp,points_frag:hp,shadow_vert:up,shadow_frag:dp,sprite_vert:fp,sprite_frag:pp},le={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xn={basic:{uniforms:Ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ct([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ct([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ct([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ct([le.points,le.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ct([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ct([le.common,le.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ct([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ct([le.sprite,le.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ct([le.common,le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ct([le.lights,le.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};xn.physical={uniforms:Ct([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Uo={r:0,b:0,g:0},li=new Ft,mp=new dt;function gp(i,e,t,n,s,r,a){let o=new ke(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function y(E){let M=!1,A=g(E);A===null?d(o,c):A&&A.isColor&&(d(A,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,M){let A=g(M);A&&(A.isCubeTexture||A.mapping===Bs)?(u===void 0&&(u=new rt(new fn(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:ai(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),li.copy(M.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mp.makeRotationFromEuler(li)),u.material.toneMapped=Ke.getTransfer(A.colorSpace)!==nt,(h!==A||f!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new rt(new pn(2,2),new Lt({name:"BackgroundMaterial",uniforms:ai(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(A.colorSpace)!==nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,M){E.getRGB(Uo,Za(i)),n.buffers.color.setClear(Uo.r,Uo.g,Uo.b,M,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),c=M,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(o,c)},render:y,addToRenderList:m,dispose:S}}function xp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(b,R,O,L,N){let k=!1,H=h(L,O,R);r!==H&&(r=H,l(r.object)),k=p(b,L,O,N),k&&g(b,L,O,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,M(b,R,O,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,R,O){let L=O.wireframe===!0,N=n[b.id];N===void 0&&(N={},n[b.id]=N);let k=N[R.id];k===void 0&&(k={},N[R.id]=k);let H=k[L];return H===void 0&&(H=f(c()),k[L]=H),H}function f(b){let R=[],O=[],L=[];for(let N=0;N<t;N++)R[N]=0,O[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:L,object:b,attributes:{},index:null}}function p(b,R,O,L){let N=r.attributes,k=R.attributes,H=0,J=O.getAttributes();for(let V in J)if(J[V].location>=0){let oe=N[V],ve=k[V];if(ve===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(b,R,O,L){let N={},k=R.attributes,H=0,J=O.getAttributes();for(let V in J)if(J[V].location>=0){let oe=k[V];oe===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor));let ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),N[V]=ve,H++}r.attributes=N,r.attributesNum=H,r.index=L}function y(){let b=r.newAttributes;for(let R=0,O=b.length;R<O;R++)b[R]=0}function m(b){d(b,0)}function d(b,R){let O=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;O[b]=1,L[b]===0&&(i.enableVertexAttribArray(b),L[b]=1),N[b]!==R&&(i.vertexAttribDivisor(b,R),N[b]=R)}function S(){let b=r.newAttributes,R=r.enabledAttributes;for(let O=0,L=R.length;O<L;O++)R[O]!==b[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function E(b,R,O,L,N,k,H){H===!0?i.vertexAttribIPointer(b,R,O,N,k):i.vertexAttribPointer(b,R,O,L,N,k)}function M(b,R,O,L){y();let N=L.attributes,k=O.getAttributes(),H=R.defaultAttributeValues;for(let J in k){let V=k[J];if(V.location>=0){let se=N[J];if(se===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){let oe=se.normalized,ve=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;let Ye=Fe.buffer,et=Fe.type,Ge=Fe.bytesPerElement,Z=et===i.INT||et===i.UNSIGNED_INT||se.gpuType===Qr;if(se.isInterleavedBufferAttribute){let j=se.data,pe=j.stride,Ie=se.offset;if(j.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)d(V.location+be,j.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let be=0;be<V.locationSize;be++)m(V.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let be=0;be<V.locationSize;be++)E(V.location+be,ve/V.locationSize,et,oe,pe*Ge,(Ie+ve/V.locationSize*be)*Ge,Z)}else{if(se.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)d(V.location+j,se.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let j=0;j<V.locationSize;j++)m(V.location+j);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let j=0;j<V.locationSize;j++)E(V.location+j,ve/V.locationSize,et,oe,ve*Ge,ve/V.locationSize*j*Ge,Z)}}else if(H!==void 0){let oe=H[J];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(V.location,oe);break;case 3:i.vertexAttrib3fv(V.location,oe);break;case 4:i.vertexAttrib4fv(V.location,oe);break;default:i.vertexAttrib1fv(V.location,oe)}}}}S()}function A(){I();for(let b in n){let R=n[b];for(let O in R){let L=R[O];for(let N in L)u(L[N].object),delete L[N];delete R[O]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let R=n[b.id];for(let O in R){let L=R[O];for(let N in L)u(L[N].object),delete L[N];delete R[O]}delete n[b.id]}function C(b){for(let R in n){let O=n[R];if(O[b.id]===void 0)continue;let L=O[b.id];for(let N in L)u(L[N].object),delete L[N];delete O[b.id]}}function I(){_(),a=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:_,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function yp(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*f[y];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function vp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Qt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let I=C===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==on&&!I)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:A,maxSamples:T}}function _p(i){let e=this,t=null,n=0,s=!1,r=!1,a=new qt,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let S=r?0:n,E=S*4,M=d.clippingState||null;c.value=M,M=u(g,f,E,p);for(let A=0;A!==E;++A)M[A]=t[A];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let d=p+y*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,M=p;E!==y;++E,M+=4)a.copy(h[E]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function bp(i){let e=new WeakMap;function t(a,o){return o===Zr?a.mapping=ri:o===Kr&&(a.mapping=oi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Zr||o===Kr)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Er(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ji=4,kc=[.125,.215,.35,.446,.526,.582],ui=20,ja=new Fs,Hc=new ke,$a=null,el=0,tl=0,nl=!1,hi=(1+Math.sqrt(5))/2,Ki=1/hi,Vc=[new U(-hi,Ki,0),new U(hi,Ki,0),new U(-Ki,0,hi),new U(Ki,0,hi),new U(0,hi,-Ki),new U(0,hi,Ki),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Mp=new U,ji=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Mp}=r;$a=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($a,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$a=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Xi,format:Qt,colorSpace:ni,depthBuffer:!1},s=Gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sp(r)),this._blurMaterial=Ep(r,e,t)}return s}_compileMaterial(e){let t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,n,s,r){let c=new St(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Hc),h.toneMapping=Rn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let y=new Kt({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),m=new rt(new fn,y),d=!1,S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,d=!0):(y.color.copy(Hc),d=!0);for(let E=0;E<6;E++){let M=E%3;M===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):M===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));let A=this._cubeSize;No(s,M*A,E>2?A:0,A,A),h.setRenderTarget(s),d&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ri||e.mapping===oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;No(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ja)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vc[(s-r-1)%Vc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new rt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ui-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);let d=[],S=0;for(let C=0;C<ui;++C){let I=C/y,_=Math.exp(-I*I/2);d.push(_),C===0?S+=_:C<m&&(S+=2*_)}for(let C=0;C<d.length;C++)d[C]=d[C]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let M=this._sizeLods[s],A=3*M*(s>E-Ji?s-E+Ji:0),T=4*(this._cubeSize-M);No(t,A,T,3*M,2*M),c.setRenderTarget(t),c.render(h,ja)}};function Sp(i){let e=[],t=[],n=[],s=i,r=i-Ji+1+kc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ji?c=kc[a-i+Ji-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,d=1,S=new Float32Array(y*g*p),E=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,I=T>2?0:-1,_=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];S.set(_,y*g*T),E.set(f,m*g*T);let b=[T,T,T,T,T,T];M.set(b,d*g*T)}let A=new Rt;A.setAttribute("position",new Ut(S,y)),A.setAttribute("uv",new Ut(E,m)),A.setAttribute("faceIndex",new Ut(M,d)),e.push(A),s>Ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gc(i,e,t){let n=new un(i,e,t);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ep(i,e,t){let n=new Float32Array(ui),s=new U(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dl(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Wc(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Xc(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}function wp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Zr||c===Kr,u=c===ri||c===oi;if(l||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ji(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new ji(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ui("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ap(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(h){let f=[],p=h.index,g=h.attributes.position,y=0;if(p!==null){let S=p.array;y=p.version;for(let E=0,M=S.length;E<M;E+=3){let A=S[E+0],T=S[E+1],C=S[E+2];f.push(A,T,T,C,C,A)}}else if(g!==void 0){let S=g.array;y=g.version;for(let E=0,M=S.length/3-1;E<M;E+=3){let A=E+0,T=E+1,C=E+2;f.push(A,T,T,C,C,A)}}else return;let m=new(qa(f)?vs:ys)(f,1);m.version=y;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Rp(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*y[S];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Cp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pp(i,e,t){let n=new WeakMap,s=new Ze;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let _=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let M=o.attributes.position.count*E,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*A*4*h),C=new gs(T,M,A,h);C.type=on,C.needsUpdate=!0;let I=E*4;for(let b=0;b<h;b++){let R=m[b],O=d[b],L=S[b],N=M*A*4*b;for(let k=0;k<R.count;k++){let H=k*I;p===!0&&(s.fromBufferAttribute(R,k),T[N+H+0]=s.x,T[N+H+1]=s.y,T[N+H+2]=s.z,T[N+H+3]=0),g===!0&&(s.fromBufferAttribute(O,k),T[N+H+4]=s.x,T[N+H+5]=s.y,T[N+H+6]=s.z,T[N+H+7]=0),y===!0&&(s.fromBufferAttribute(L,k),T[N+H+8]=s.x,T[N+H+9]=s.y,T[N+H+10]=s.z,T[N+H+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new he(M,A)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ip(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var hh=new bt,Yc=new ws(1,1),uh=new gs,dh=new Mr,fh=new bs,qc=[],Zc=[],Kc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function $i(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bo(i,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function Up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function Np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function Fp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Qc.set(n),i.uniformMatrix2fv(this.addr,!1,Qc),yt(t,n)}}function Op(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Jc.set(n),i.uniformMatrix3fv(this.addr,!1,Jc),yt(t,n)}}function Bp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Kc.set(n),i.uniformMatrix4fv(this.addr,!1,Kc),yt(t,n)}}function zp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Hp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Vp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Gp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function Xp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function Yp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function qp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yc.compareFunction=Wa,r=Yc):r=hh,t.setTexture2D(e||r,s)}function Zp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dh,s)}function Kp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fh,s)}function Jp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||uh,s)}function Qp(i){switch(i){case 5126:return Lp;case 35664:return Dp;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return kp;case 35668:case 35672:return Hp;case 35669:case 35673:return Vp;case 5125:return Gp;case 36294:return Wp;case 36295:return Xp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Jp}}function jp(i,e){i.uniform1fv(this.addr,e)}function $p(i,e){let t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function em(i,e){let t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function tm(i,e){let t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function nm(i,e){let t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function im(i,e){let t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sm(i,e){let t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rm(i,e){i.uniform1iv(this.addr,e)}function om(i,e){i.uniform2iv(this.addr,e)}function am(i,e){i.uniform3iv(this.addr,e)}function lm(i,e){i.uniform4iv(this.addr,e)}function cm(i,e){i.uniform1uiv(this.addr,e)}function hm(i,e){i.uniform2uiv(this.addr,e)}function um(i,e){i.uniform3uiv(this.addr,e)}function dm(i,e){i.uniform4uiv(this.addr,e)}function fm(i,e,t){let n=this.cache,s=e.length,r=Bo(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||hh,r[a])}function pm(i,e,t){let n=this.cache,s=e.length,r=Bo(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||dh,r[a])}function mm(i,e,t){let n=this.cache,s=e.length,r=Bo(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||fh,r[a])}function gm(i,e,t){let n=this.cache,s=e.length,r=Bo(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||uh,r[a])}function xm(i){switch(i){case 5126:return jp;case 35664:return $p;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return om;case 35668:case 35672:return am;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}var sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qp(t.type)}},rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xm(t.type)}},ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function jc(i,e){i.seq.push(e),i.map[e.id]=e}function ym(i,e,t){let n=i.name,s=n.length;for(il.lastIndex=0;;){let r=il.exec(n),a=il.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){jc(t,l===void 0?new sl(o,i,e):new rl(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new ol(o),jc(t,h)),t=h}}}var Qi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ym(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function $c(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vm=37297,_m=0;function bm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var eh=new He;function Mm(i){Ke._getMatrix(eh,Ke.workingColorSpace,i);let e=`mat3( ${eh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case ps:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function th(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+bm(i.getShaderSource(e),o)}else return r}function Sm(i,e){let t=Mm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Em(i,e){let t;switch(e){case yc:t="Linear";break;case vc:t="Reinhard";break;case _c:t="Cineon";break;case bc:t="ACESFilmic";break;case Sc:t="AgX";break;case qr:t="Neutral";break;case Mc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fo=new U;function wm(){Ke.getLuminanceCoefficients(Fo);let i=Fo.x.toFixed(4),e=Fo.y.toFixed(4),t=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function Am(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ws(i){return i!==""}function nh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ih(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(Cm,Im)}var Pm=new Map;function Im(i,e){let t=Xe[e];if(t===void 0){let n=Pm.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}var Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(i){return i.replace(Lm,Dm)}function Dm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rh(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Um(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===La?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Nm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case oi:e="ENVMAP_TYPE_CUBE";break;case Bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Om(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yr:e="ENVMAP_BLENDING_MULTIPLY";break;case gc:e="ENVMAP_BLENDING_MIX";break;case xc:e="ENVMAP_BLENDING_ADD";break}return e}function Bm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Um(t),l=Nm(t),u=Fm(t),h=Om(t),f=Bm(t),p=Tm(t),g=Am(r),y=s.createProgram(),m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),d.length>0&&(d+=`
`)):(m=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),d=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Sm("linearToOutputTexel",t.outputColorSpace),wm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=al(a),a=nh(a,t),a=ih(a,t),o=al(o),o=nh(o,t),o=ih(o,t),a=sh(a),o=sh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=S+m+a,M=S+d+o,A=$c(s,s.VERTEX_SHADER,E),T=$c(s,s.FRAGMENT_SHADER,M);s.attachShader(y,A),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(R){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",L=s.getShaderInfoLog(A)||"",N=s.getShaderInfoLog(T)||"",k=O.trim(),H=L.trim(),J=N.trim(),V=!0,se=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,T);else{let oe=th(s,A,"vertex"),ve=th(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+oe+`
`+ve)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||J==="")&&(se=!1);se&&(R.diagnostics={runnable:V,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:d}})}s.deleteShader(A),s.deleteShader(T),I=new Qi(s,y),_=Rm(s,y)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,vm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_m++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=T,this}var km=0,ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cl(e),t.set(e,n)),n}},cl=class{constructor(e){this.id=km++,this.code=e,this.usedTimes=0}};function Hm(i,e,t,n,s,r,a){let o=new xs,c=new ll,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,b,R,O,L){let N=O.fog,k=L.geometry,H=_.isMeshStandardMaterial?O.environment:null,J=(_.isMeshStandardMaterial?t:e).get(_.envMap||H),V=J&&J.mapping===Bs?J.image.height:null,se=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ve=oe!==void 0?oe.length:0,Fe=0;k.morphAttributes.position!==void 0&&(Fe=1),k.morphAttributes.normal!==void 0&&(Fe=2),k.morphAttributes.color!==void 0&&(Fe=3);let Ye,et,Ge,Z;if(se){let $e=xn[se];Ye=$e.vertexShader,et=$e.fragmentShader}else Ye=_.vertexShader,et=_.fragmentShader,c.update(_),Ge=c.getVertexShaderID(_),Z=c.getFragmentShaderID(_);let j=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ie=L.isInstancedMesh===!0,be=L.isBatchedMesh===!0,Oe=!!_.map,at=!!_.matcap,P=!!J,Qe=!!_.aoMap,Le=!!_.lightMap,Ae=!!_.bumpMap,me=!!_.normalMap,it=!!_.displacementMap,G=!!_.emissiveMap,$=!!_.metalnessMap,Ce=!!_.roughnessMap,Ue=_.anisotropy>0,w=_.clearcoat>0,x=_.dispersion>0,z=_.iridescence>0,q=_.sheen>0,K=_.transmission>0,Y=Ue&&!!_.anisotropyMap,Me=w&&!!_.clearcoatMap,re=w&&!!_.clearcoatNormalMap,Se=w&&!!_.clearcoatRoughnessMap,Ee=z&&!!_.iridescenceMap,ne=z&&!!_.iridescenceThicknessMap,de=q&&!!_.sheenColorMap,De=q&&!!_.sheenRoughnessMap,we=!!_.specularMap,ce=!!_.specularColorMap,Ve=!!_.specularIntensityMap,D=K&&!!_.transmissionMap,ie=K&&!!_.thicknessMap,ae=!!_.gradientMap,ge=!!_.alphaMap,ee=_.alphaTest>0,Q=!!_.alphaHash,_e=!!_.extensions,Be=Rn;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Be=i.toneMapping);let ct={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:Ye,fragmentShader:et,defines:_.defines,customVertexShaderID:Ge,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:be,batchingColor:be&&L._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&L.instanceColor!==null,instancingMorph:Ie&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ni,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:at,envMap:P,envMapMode:P&&J.mapping,envMapCubeUVHeight:V,aoMap:Qe,lightMap:Le,bumpMap:Ae,normalMap:me,displacementMap:f&&it,emissiveMap:G,normalMapObjectSpace:me&&_.normalMapType===Ac,normalMapTangentSpace:me&&_.normalMapType===Do,metalnessMap:$,roughnessMap:Ce,anisotropy:Ue,anisotropyMap:Y,clearcoat:w,clearcoatMap:Me,clearcoatNormalMap:re,clearcoatRoughnessMap:Se,dispersion:x,iridescence:z,iridescenceMap:Ee,iridescenceThicknessMap:ne,sheen:q,sheenColorMap:de,sheenRoughnessMap:De,specularMap:we,specularColorMap:ce,specularIntensityMap:Ve,transmission:K,transmissionMap:D,thicknessMap:ie,gradientMap:ae,opaque:_.transparent===!1&&_.blending===ei&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:Q,combine:_.combine,mapUv:Oe&&y(_.map.channel),aoMapUv:Qe&&y(_.aoMap.channel),lightMapUv:Le&&y(_.lightMap.channel),bumpMapUv:Ae&&y(_.bumpMap.channel),normalMapUv:me&&y(_.normalMap.channel),displacementMapUv:it&&y(_.displacementMap.channel),emissiveMapUv:G&&y(_.emissiveMap.channel),metalnessMapUv:$&&y(_.metalnessMap.channel),roughnessMapUv:Ce&&y(_.roughnessMap.channel),anisotropyMapUv:Y&&y(_.anisotropyMap.channel),clearcoatMapUv:Me&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:De&&y(_.sheenRoughnessMap.channel),specularMapUv:we&&y(_.specularMap.channel),specularColorMapUv:ce&&y(_.specularColorMap.channel),specularIntensityMapUv:Ve&&y(_.specularIntensityMap.channel),transmissionMapUv:D&&y(_.transmissionMap.channel),thicknessMapUv:ie&&y(_.thicknessMap.channel),alphaMapUv:ge&&y(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(me||Ue),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Oe||ge),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===nt,decodeVideoTextureEmissive:G&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===Et,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function d(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)b.push(R),b.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(S(b,_),E(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function S(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function E(_,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),_.push(o.mask)}function M(_){let b=g[_.type],R;if(b){let O=xn[b];R=Bc.clone(O.uniforms)}else R=_.uniforms;return R}function A(_,b){let R;for(let O=0,L=u.length;O<L;O++){let N=u[O];if(N.cacheKey===b){R=N,++R.usedTimes;break}}return R===void 0&&(R=new zm(i,b,_,r),u.push(R)),R}function T(_){if(--_.usedTimes===0){let b=u.indexOf(_);u[b]=u[u.length-1],u.pop(),_.destroy()}}function C(_){c.remove(_)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:I}}function Vm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Gm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ah(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,g,y,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=y,d.group=m),e++,d}function o(h,f,p,g,y,m){let d=a(h,f,p,g,y,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(h,f,p,g,y,m){let d=a(h,f,p,g,y,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Gm),n.length>1&&n.sort(f||oh),s.length>1&&s.sort(f||oh)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Wm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ah,i.set(n,[a])):s>=r.length?(a=new ah,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ke};break;case"SpotLight":t={position:new U,direction:new U,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Ym(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qm=0;function Zm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Km(i){let e=new Xm,t=Ym(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new dt,a=new dt;function o(l){let u=0,h=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,S=0,E=0,M=0,A=0,T=0,C=0;l.sort(Zm);for(let _=0,b=l.length;_<b;_++){let R=l[_],O=R.color,L=R.intensity,N=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=O.r*L,h+=O.g*L,f+=O.b*L;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],L);C++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=R.shadow.matrix,S++}n.directional[p]=H,p++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(O).multiplyScalar(L),H.distance=N,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[y]=H;let J=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,J.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[y]=J.matrix,R.castShadow){let V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=k,M++}y++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(O).multiplyScalar(L),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let J=R.shadow,V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=H,g++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(L),H.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==S||I.numPointShadows!==E||I.numSpotShadows!==M||I.numSpotMaps!==A||I.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.directionalLength=p,I.pointLength=g,I.spotLength=y,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=S,I.numPointShadows=E,I.numSpotShadows=M,I.numSpotMaps=A,I.numLightProbes=C,n.version=qm++)}function c(l,u){let h=0,f=0,p=0,g=0,y=0,m=u.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){let E=l[d];if(E.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(E.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:n}}function lh(i){let e=new Km(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Jm(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new lh(i),e.set(s,[o])):r>=a.length?(o=new lh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jm=`uniform sampler2D shadow_pass;
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
}`;function $m(i,e,t){let n=new Bi,s=new he,r=new he,a=new Ze,o=new Tr({depthPacking:Tc}),c=new Ar,l={},u=t.maxTextureSize,h={[wn]:Et,[Et]:wn,[gn]:gn},f=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Qm,fragmentShader:jm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new rt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let d=this.type;this.render=function(T,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let _=i.getRenderTarget(),b=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(An),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let L=d!==mn&&this.type===mn,N=d===mn&&this.type!==mn;for(let k=0,H=T.length;k<H;k++){let J=T[k],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let se=V.getFrameExtents();if(s.multiply(se),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,V.mapSize.y=r.y)),V.map===null||L===!0||N===!0){let ve=this.type!==mn?{minFilter:Nt,magFilter:Nt}:{};V.map!==null&&V.map.dispose(),V.map=new un(s.x,s.y,ve),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let oe=V.getViewportCount();for(let ve=0;ve<oe;ve++){let Fe=V.getViewport(ve);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),O.viewport(a),V.updateMatrices(J,ve),n=V.getFrustum(),M(C,I,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===mn&&S(V,I),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(_,b,R)};function S(T,C){let I=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new un(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,I,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,I,p,y,null)}function E(T,C,I,_){let b=null,R=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)b=R;else if(b=I.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=b.uuid,L=C.uuid,N=l[O];N===void 0&&(N={},l[O]=N);let k=N[L];k===void 0&&(k=b.clone(),N[L]=k,C.addEventListener("dispose",A)),b=k}if(b.visible=C.visible,b.wireframe=C.wireframe,_===mn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=i.properties.get(b);O.light=I}return b}function M(T,C,I,_,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===mn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let L=e.update(T),N=T.material;if(Array.isArray(N)){let k=L.groups;for(let H=0,J=k.length;H<J;H++){let V=k[H],se=N[V.materialIndex];if(se&&se.visible){let oe=E(T,se,_,b);T.onBeforeShadow(i,T,C,I,L,oe,V),i.renderBufferDirect(I,null,L,oe,T,V),T.onAfterShadow(i,T,C,I,L,oe,V)}}}else if(N.visible){let k=E(T,N,_,b);T.onBeforeShadow(i,T,C,I,L,k,null),i.renderBufferDirect(I,null,L,k,T,null),T.onAfterShadow(i,T,C,I,L,k,null)}}let O=T.children;for(let L=0,N=O.length;L<N;L++)M(O[L],C,I,_,b)}function A(T){T.target.removeEventListener("dispose",A);for(let I in l){let _=l[I],b=T.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}var eg={[zr]:kr,[Hr]:Wr,[Vr]:Xr,[ti]:Gr,[kr]:zr,[Wr]:Hr,[Xr]:Vr,[Gr]:ti};function tg(i,e){function t(){let D=!1,ie=new Ze,ae=null,ge=new Ze(0,0,0,0);return{setMask:function(ee){ae!==ee&&!D&&(i.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){D=ee},setClear:function(ee,Q,_e,Be,ct){ct===!0&&(ee*=Be,Q*=Be,_e*=Be),ie.set(ee,Q,_e,Be),ge.equals(ie)===!1&&(i.clearColor(ee,Q,_e,Be),ge.copy(ie))},reset:function(){D=!1,ae=null,ge.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,ae=null,ge=null,ee=null;return{setReversed:function(Q){if(ie!==Q){let _e=e.get("EXT_clip_control");Q?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ie=Q;let Be=ee;ee=null,this.setClear(Be)}},getReversed:function(){return ie},setTest:function(Q){Q?j(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Q){ae!==Q&&!D&&(i.depthMask(Q),ae=Q)},setFunc:function(Q){if(ie&&(Q=eg[Q]),ge!==Q){switch(Q){case zr:i.depthFunc(i.NEVER);break;case kr:i.depthFunc(i.ALWAYS);break;case Hr:i.depthFunc(i.LESS);break;case ti:i.depthFunc(i.LEQUAL);break;case Vr:i.depthFunc(i.EQUAL);break;case Gr:i.depthFunc(i.GEQUAL);break;case Wr:i.depthFunc(i.GREATER);break;case Xr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Q}},setLocked:function(Q){D=Q},setClear:function(Q){ee!==Q&&(ie&&(Q=1-Q),i.clearDepth(Q),ee=Q)},reset:function(){D=!1,ae=null,ge=null,ee=null,ie=!1}}}function s(){let D=!1,ie=null,ae=null,ge=null,ee=null,Q=null,_e=null,Be=null,ct=null;return{setTest:function($e){D||($e?j(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function($e){ie!==$e&&!D&&(i.stencilMask($e),ie=$e)},setFunc:function($e,yn,cn){(ae!==$e||ge!==yn||ee!==cn)&&(i.stencilFunc($e,yn,cn),ae=$e,ge=yn,ee=cn)},setOp:function($e,yn,cn){(Q!==$e||_e!==yn||Be!==cn)&&(i.stencilOp($e,yn,cn),Q=$e,_e=yn,Be=cn)},setLocked:function($e){D=$e},setClear:function($e){ct!==$e&&(i.clearStencil($e),ct=$e)},reset:function(){D=!1,ie=null,ae=null,ge=null,ee=null,Q=null,_e=null,Be=null,ct=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,y=!1,m=null,d=null,S=null,E=null,M=null,A=null,T=null,C=new ke(0,0,0),I=0,_=!1,b=null,R=null,O=null,L=null,N=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=J>=2);let se=null,oe={},ve=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Ye=new Ze().fromArray(ve),et=new Ze().fromArray(Fe);function Ge(D,ie,ae,ge){let ee=new Uint8Array(4),Q=i.createTexture();i.bindTexture(D,Q),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<ae;_e++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(ie+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return Q}let Z={};Z[i.TEXTURE_2D]=Ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(ti),Ae(!1),me(Ia),j(i.CULL_FACE),Qe(An);function j(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function pe(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ie(D,ie){return h[D]!==ie?(i.bindFramebuffer(D,ie),h[D]=ie,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ie),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function be(D,ie){let ae=p,ge=!1;if(D){ae=f.get(ie),ae===void 0&&(ae=[],f.set(ie,ae));let ee=D.textures;if(ae.length!==ee.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,_e=ee.length;Q<_e;Q++)ae[Q]=i.COLOR_ATTACHMENT0+Q;ae.length=ee.length,ge=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ae)}function Oe(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let at={[Bn]:i.FUNC_ADD,[$l]:i.FUNC_SUBTRACT,[ec]:i.FUNC_REVERSE_SUBTRACT};at[tc]=i.MIN,at[nc]=i.MAX;let P={[ic]:i.ZERO,[sc]:i.ONE,[rc]:i.SRC_COLOR,[mr]:i.SRC_ALPHA,[uc]:i.SRC_ALPHA_SATURATE,[cc]:i.DST_COLOR,[ac]:i.DST_ALPHA,[oc]:i.ONE_MINUS_SRC_COLOR,[gr]:i.ONE_MINUS_SRC_ALPHA,[hc]:i.ONE_MINUS_DST_COLOR,[lc]:i.ONE_MINUS_DST_ALPHA,[dc]:i.CONSTANT_COLOR,[fc]:i.ONE_MINUS_CONSTANT_COLOR,[pc]:i.CONSTANT_ALPHA,[mc]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(D,ie,ae,ge,ee,Q,_e,Be,ct,$e){if(D===An){y===!0&&(pe(i.BLEND),y=!1);return}if(y===!1&&(j(i.BLEND),y=!0),D!==jl){if(D!==m||$e!==_){if((d!==Bn||M!==Bn)&&(i.blendEquation(i.FUNC_ADD),d=Bn,M=Bn),$e)switch(D){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case Ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Na:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ua:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Na:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,E=null,A=null,T=null,C.set(0,0,0),I=0,m=D,_=$e}return}ee=ee||ie,Q=Q||ae,_e=_e||ge,(ie!==d||ee!==M)&&(i.blendEquationSeparate(at[ie],at[ee]),d=ie,M=ee),(ae!==S||ge!==E||Q!==A||_e!==T)&&(i.blendFuncSeparate(P[ae],P[ge],P[Q],P[_e]),S=ae,E=ge,A=Q,T=_e),(Be.equals(C)===!1||ct!==I)&&(i.blendColor(Be.r,Be.g,Be.b,ct),C.copy(Be),I=ct),m=D,_=!1}function Le(D,ie){D.side===gn?pe(i.CULL_FACE):j(i.CULL_FACE);let ae=D.side===Et;ie&&(ae=!ae),Ae(ae),D.blending===ei&&D.transparent===!1?Qe(An):Qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ge=D.stencilWrite;o.setTest(ge),ge&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),G(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function me(D){D!==Kl?(j(i.CULL_FACE),D!==R&&(D===Ia?i.cullFace(i.BACK):D===Jl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),R=D}function it(D){D!==O&&(H&&i.lineWidth(D),O=D)}function G(D,ie,ae){D?(j(i.POLYGON_OFFSET_FILL),(L!==ie||N!==ae)&&(i.polygonOffset(ie,ae),L=ie,N=ae)):pe(i.POLYGON_OFFSET_FILL)}function $(D){D?j(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function Ce(D){D===void 0&&(D=i.TEXTURE0+k-1),se!==D&&(i.activeTexture(D),se=D)}function Ue(D,ie,ae){ae===void 0&&(se===null?ae=i.TEXTURE0+k-1:ae=se);let ge=oe[ae];ge===void 0&&(ge={type:void 0,texture:void 0},oe[ae]=ge),(ge.type!==D||ge.texture!==ie)&&(se!==ae&&(i.activeTexture(ae),se=ae),i.bindTexture(D,ie||Z[D]),ge.type=D,ge.texture=ie)}function w(){let D=oe[se];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(D){Ye.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ye.copy(D))}function De(D){et.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),et.copy(D))}function we(D,ie){let ae=l.get(ie);ae===void 0&&(ae=new WeakMap,l.set(ie,ae));let ge=ae.get(D);ge===void 0&&(ge=i.getUniformBlockIndex(ie,D.name),ae.set(D,ge))}function ce(D,ie){let ge=l.get(ie).get(D);c.get(ie)!==ge&&(i.uniformBlockBinding(ie,ge,D.__bindingPointIndex),c.set(ie,ge))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,oe={},h={},f=new WeakMap,p=[],g=null,y=!1,m=null,d=null,S=null,E=null,M=null,A=null,T=null,C=new ke(0,0,0),I=0,_=!1,b=null,R=null,O=null,L=null,N=null,Ye.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:pe,bindFramebuffer:Ie,drawBuffers:be,useProgram:Oe,setBlending:Qe,setMaterial:Le,setFlipSided:Ae,setCullFace:me,setLineWidth:it,setPolygonOffset:G,setScissorTest:$,activeTexture:Ce,bindTexture:Ue,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:Ee,texImage3D:ne,updateUBOMapping:we,uniformBlockBinding:ce,texStorage2D:re,texStorage3D:Se,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:Me,scissor:de,viewport:De,reset:Ve}}function ng(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new he,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):Di("canvas")}function y(w,x,z){let q=1,K=Ue(w);if((K.width>z||K.height>z)&&(q=z/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Y=Math.floor(q*K.width),Me=Math.floor(q*K.height);h===void 0&&(h=g(Y,Me));let re=x?g(Y,Me):h;return re.width=Y,re.height=Me,re.getContext("2d").drawImage(w,0,0,Y,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+Me+")."),re}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,z,q,K=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=x;if(x===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let Me=K?ps:Ke.getTransfer(q);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Me===nt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(w,x){let z;return w?x===null||x===Yn||x===Yi?z=i.DEPTH24_STENCIL8:x===on?z=i.DEPTH32F_STENCIL8:x===Wi&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yn||x===Yi?z=i.DEPTH_COMPONENT24:x===on?z=i.DEPTH_COMPONENT32F:x===Wi&&(z=i.DEPTH_COMPONENT16),z}function A(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Nt&&w.minFilter!==sn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){let x=w.target;x.removeEventListener("dispose",T),I(x),x.isVideoTexture&&u.delete(x)}function C(w){let x=w.target;x.removeEventListener("dispose",C),b(x)}function I(w){let x=n.get(w);if(x.__webglInit===void 0)return;let z=w.source,q=f.get(z);if(q){let K=q[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(w),Object.keys(q).length===0&&f.delete(z)}n.remove(w)}function _(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let z=w.source,q=f.get(z);delete q[x.__cacheKey],a.memory.textures--}function b(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let K=0;K<x.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[q][K]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=w.textures;for(let q=0,K=z.length;q<K;q++){let Y=n.get(z[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(w)}let R=0;function O(){R=0}function L(){let w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function N(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function k(w,x){let z=n.get(w);if(w.isVideoTexture&&$(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,w,x);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function H(w,x){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){Z(z,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function J(w,x){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){Z(z,w,x);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function V(w,x){let z=n.get(w);if(w.version>0&&z.__version!==w.version){j(z,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let se={[xr]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[yr]:i.MIRRORED_REPEAT},oe={[Nt]:i.NEAREST,[Ec]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},ve={[Rc]:i.NEVER,[Uc]:i.ALWAYS,[Cc]:i.LESS,[Wa]:i.LEQUAL,[Pc]:i.EQUAL,[Dc]:i.GEQUAL,[Ic]:i.GREATER,[Lc]:i.NOTEQUAL};function Fe(w,x){if(x.type===on&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===sn||x.magFilter===Jr||x.magFilter===zs||x.magFilter===Xn||x.minFilter===sn||x.minFilter===Jr||x.minFilter===zs||x.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,se[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,se[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,se[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,oe[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,oe[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==zs&&x.minFilter!==Xn||x.type===on&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ye(w,x){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",T));let q=x.source,K=f.get(q);K===void 0&&(K={},f.set(q,K));let Y=N(x);if(Y!==w.__cacheKey){K[Y]===void 0&&(K[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[Y].usedTimes++;let Me=K[w.__cacheKey];Me!==void 0&&(K[w.__cacheKey].usedTimes--,Me.usedTimes===0&&_(x)),w.__cacheKey=Y,w.__webglTexture=K[Y].texture}return z}function et(w,x,z){return Math.floor(Math.floor(w/z)/x)}function Ge(w,x,z,q){let Y=w.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,q,x.data);else{Y.sort((ne,de)=>ne.start-de.start);let Me=0;for(let ne=1;ne<Y.length;ne++){let de=Y[Me],De=Y[ne],we=de.start+de.count,ce=et(De.start,x.width,4),Ve=et(de.start,x.width,4);De.start<=we+1&&ce===Ve&&et(De.start+De.count-1,x.width,4)===ce?de.count=Math.max(de.count,De.start+De.count-de.start):(++Me,Y[Me]=De)}Y.length=Me+1;let re=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ne=0,de=Y.length;ne<de;ne++){let De=Y[ne],we=Math.floor(De.start/4),ce=Math.ceil(De.count/4),Ve=we%x.width,D=Math.floor(we/x.width),ie=ce,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ve,D,ie,ae,z,q,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function Z(w,x,z){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);let K=Ye(w,x),Y=x.source;t.bindTexture(q,w.__webglTexture,i.TEXTURE0+z);let Me=n.get(Y);if(Y.version!==Me.__version||K===!0){t.activeTexture(i.TEXTURE0+z);let re=Ke.getPrimaries(Ke.workingColorSpace),Se=x.colorSpace===Cn?null:Ke.getPrimaries(x.colorSpace),Ee=x.colorSpace===Cn||re===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ne=y(x.image,!1,s.maxTextureSize);ne=Ce(x,ne);let de=r.convert(x.format,x.colorSpace),De=r.convert(x.type),we=E(x.internalFormat,de,De,x.colorSpace,x.isVideoTexture);Fe(q,x);let ce,Ve=x.mipmaps,D=x.isVideoTexture!==!0,ie=Me.__version===void 0||K===!0,ae=Y.dataReady,ge=A(x,ne);if(x.isDepthTexture)we=M(x.format===qi,x.type),ie&&(D?t.texStorage2D(i.TEXTURE_2D,1,we,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,we,ne.width,ne.height,0,de,De,null));else if(x.isDataTexture)if(Ve.length>0){D&&ie&&t.texStorage2D(i.TEXTURE_2D,ge,we,Ve[0].width,Ve[0].height);for(let ee=0,Q=Ve.length;ee<Q;ee++)ce=Ve[ee],D?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,De,ce.data):t.texImage2D(i.TEXTURE_2D,ee,we,ce.width,ce.height,0,de,De,ce.data);x.generateMipmaps=!1}else D?(ie&&t.texStorage2D(i.TEXTURE_2D,ge,we,ne.width,ne.height),ae&&Ge(x,ne,de,De)):t.texImage2D(i.TEXTURE_2D,0,we,ne.width,ne.height,0,de,De,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,we,Ve[0].width,Ve[0].height,ne.depth);for(let ee=0,Q=Ve.length;ee<Q;ee++)if(ce=Ve[ee],x.format!==Qt)if(de!==null)if(D){if(ae)if(x.layerUpdates.size>0){let _e=Qa(ce.width,ce.height,x.format,x.type);for(let Be of x.layerUpdates){let ct=ce.data.subarray(Be*_e/ce.data.BYTES_PER_ELEMENT,(Be+1)*_e/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Be,ce.width,ce.height,1,de,ct)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,de,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,we,ce.width,ce.height,ne.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,de,De,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,we,ce.width,ce.height,ne.depth,0,de,De,ce.data)}else{D&&ie&&t.texStorage2D(i.TEXTURE_2D,ge,we,Ve[0].width,Ve[0].height);for(let ee=0,Q=Ve.length;ee<Q;ee++)ce=Ve[ee],x.format!==Qt?de!==null?D?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,we,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,De,ce.data):t.texImage2D(i.TEXTURE_2D,ee,we,ce.width,ce.height,0,de,De,ce.data)}else if(x.isDataArrayTexture)if(D){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,we,ne.width,ne.height,ne.depth),ae)if(x.layerUpdates.size>0){let ee=Qa(ne.width,ne.height,x.format,x.type);for(let Q of x.layerUpdates){let _e=ne.data.subarray(Q*ee/ne.data.BYTES_PER_ELEMENT,(Q+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,de,De,_e)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,De,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ne.width,ne.height,ne.depth,0,de,De,ne.data);else if(x.isData3DTexture)D?(ie&&t.texStorage3D(i.TEXTURE_3D,ge,we,ne.width,ne.height,ne.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,De,ne.data)):t.texImage3D(i.TEXTURE_3D,0,we,ne.width,ne.height,ne.depth,0,de,De,ne.data);else if(x.isFramebufferTexture){if(ie)if(D)t.texStorage2D(i.TEXTURE_2D,ge,we,ne.width,ne.height);else{let ee=ne.width,Q=ne.height;for(let _e=0;_e<ge;_e++)t.texImage2D(i.TEXTURE_2D,_e,we,ee,Q,0,de,De,null),ee>>=1,Q>>=1}}else if(Ve.length>0){if(D&&ie){let ee=Ue(Ve[0]);t.texStorage2D(i.TEXTURE_2D,ge,we,ee.width,ee.height)}for(let ee=0,Q=Ve.length;ee<Q;ee++)ce=Ve[ee],D?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,de,De,ce):t.texImage2D(i.TEXTURE_2D,ee,we,de,De,ce);x.generateMipmaps=!1}else if(D){if(ie){let ee=Ue(ne);t.texStorage2D(i.TEXTURE_2D,ge,we,ee.width,ee.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,De,ne)}else t.texImage2D(i.TEXTURE_2D,0,we,de,De,ne);m(x)&&d(q),Me.__version=Y.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function j(w,x,z){if(x.image.length!==6)return;let q=Ye(w,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let Y=n.get(K);if(K.version!==Y.__version||q===!0){t.activeTexture(i.TEXTURE0+z);let Me=Ke.getPrimaries(Ke.workingColorSpace),re=x.colorSpace===Cn?null:Ke.getPrimaries(x.colorSpace),Se=x.colorSpace===Cn||Me===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,de=[];for(let Q=0;Q<6;Q++)!Ee&&!ne?de[Q]=y(x.image[Q],!0,s.maxCubemapSize):de[Q]=ne?x.image[Q].image:x.image[Q],de[Q]=Ce(x,de[Q]);let De=de[0],we=r.convert(x.format,x.colorSpace),ce=r.convert(x.type),Ve=E(x.internalFormat,we,ce,x.colorSpace),D=x.isVideoTexture!==!0,ie=Y.__version===void 0||q===!0,ae=K.dataReady,ge=A(x,De);Fe(i.TEXTURE_CUBE_MAP,x);let ee;if(Ee){D&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ve,De.width,De.height);for(let Q=0;Q<6;Q++){ee=de[Q].mipmaps;for(let _e=0;_e<ee.length;_e++){let Be=ee[_e];x.format!==Qt?we!==null?D?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,Be.width,Be.height,we,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Ve,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,Be.width,Be.height,we,ce,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Ve,Be.width,Be.height,0,we,ce,Be.data)}}}else{if(ee=x.mipmaps,D&&ie){ee.length>0&&ge++;let Q=Ue(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ve,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){D?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,de[Q].width,de[Q].height,we,ce,de[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,de[Q].width,de[Q].height,0,we,ce,de[Q].data);for(let _e=0;_e<ee.length;_e++){let ct=ee[_e].image[Q].image;D?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,ct.width,ct.height,we,ce,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Ve,ct.width,ct.height,0,we,ce,ct.data)}}else{D?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,we,ce,de[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,we,ce,de[Q]);for(let _e=0;_e<ee.length;_e++){let Be=ee[_e];D?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,we,ce,Be.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Ve,we,ce,Be.image[Q])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),Y.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function pe(w,x,z,q,K,Y){let Me=r.convert(z.format,z.colorSpace),re=r.convert(z.type),Se=E(z.internalFormat,Me,re,z.colorSpace),Ee=n.get(x),ne=n.get(z);if(ne.__renderTarget=x,!Ee.__hasExternalTextures){let de=Math.max(1,x.width>>Y),De=Math.max(1,x.height>>Y);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Y,Se,de,De,x.depth,0,Me,re,null):t.texImage2D(K,Y,Se,de,De,0,Me,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),G(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,ne.__webglTexture,0,it(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,ne.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(w,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let q=x.depthTexture,K=q&&q.isDepthTexture?q.type:null,Y=M(x.stencilBuffer,K),Me=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=it(x);G(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Y,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,w)}else{let q=x.textures;for(let K=0;K<q.length;K++){let Y=q[K],Me=r.convert(Y.format,Y.colorSpace),re=r.convert(Y.type),Se=E(Y.internalFormat,Me,re,Y.colorSpace),Ee=it(x);z&&G(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Se,x.width,x.height):G(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Se,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);let K=q.__webglTexture,Y=it(x);if(x.depthTexture.format===Ii)G(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===qi)G(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Oe(w){let x=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let q=w.texture.mipmaps;q&&q.length>0?be(x.__webglFramebuffer[0],w):be(x.__webglFramebuffer,w)}else if(z){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),Ie(x.__webglDepthbuffer[q],w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Y)}}else{let q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ie(x.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(w,x,z){let q=n.get(w);x!==void 0&&pe(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Oe(w)}function P(w){let x=w.texture,z=n.get(w),q=n.get(x);w.addEventListener("dispose",C);let K=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let Se=0;Se<x.mipmaps.length;Se++)z.__webglFramebuffer[re][Se]=i.createFramebuffer()}else z.__webglFramebuffer[re]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)z.__webglFramebuffer[re]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Me)for(let re=0,Se=K.length;re<Se;re++){let Ee=n.get(K[re]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&G(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){let Se=K[re];z.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[re]);let Ee=r.convert(Se.format,Se.colorSpace),ne=r.convert(Se.type),de=E(Se.internalFormat,Ee,ne,Se.colorSpace,w.isXRRenderTarget===!0),De=it(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,z.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,x);for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)pe(z.__webglFramebuffer[re][Se],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se);else pe(z.__webglFramebuffer[re],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let re=0,Se=K.length;re<Se;re++){let Ee=K[re],ne=n.get(Ee),de=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ne.__webglTexture),Fe(de,Ee),pe(z.__webglFramebuffer,w,Ee,i.COLOR_ATTACHMENT0+re,de,0),m(Ee)&&d(de)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(re=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),Fe(re,x),x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)pe(z.__webglFramebuffer[Se],w,x,i.COLOR_ATTACHMENT0,re,Se);else pe(z.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,re,0);m(x)&&d(re),t.unbindTexture()}w.depthBuffer&&Oe(w)}function Qe(w){let x=w.textures;for(let z=0,q=x.length;z<q;z++){let K=x[z];if(m(K)){let Y=S(w),Me=n.get(K).__webglTexture;t.bindTexture(Y,Me),d(Y),t.unbindTexture()}}}let Le=[],Ae=[];function me(w){if(w.samples>0){if(G(w)===!1){let x=w.textures,z=w.width,q=w.height,K=i.COLOR_BUFFER_BIT,Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(w),re=x.length>1;if(re)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Se=w.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);let ne=n.get(x[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,K,i.NEAREST),c===!0&&(Le.length=0,Ae.length=0,Le.push(i.COLOR_ATTACHMENT0+Ee),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Le.push(Y),Ae.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);let ne=n.get(x[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function it(w){return Math.min(s.maxSamples,w.samples)}function G(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function $(w){let x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function Ce(w,x){let z=w.colorSpace,q=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==ni&&z!==Cn&&(Ke.getTransfer(z)===nt?(q!==Qt||K!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Ue(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=at,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=G}function ig(i,e){function t(n,s=Cn){let r,a=Ke.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===jr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$r)return i.UNSIGNED_SHORT_5_5_5_1;if(n===za)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ka)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oa)return i.BYTE;if(n===Ba)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===Qr)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===Xi)return i.HALF_FLOAT;if(n===Ha)return i.ALPHA;if(n===Va)return i.RGB;if(n===Qt)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===eo)return i.RED;if(n===to)return i.RED_INTEGER;if(n===Ga)return i.RG;if(n===no)return i.RG_INTEGER;if(n===io)return i.RGBA_INTEGER;if(n===ks||n===Hs||n===Vs||n===Gs)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ro||n===oo||n===ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===so)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===ho)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lo||n===co)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ho)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===xo||n===yo||n===vo||n===_o||n===bo||n===Mo||n===So||n===Eo||n===wo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_o)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===Ao||n===Ro)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===To)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Co||n===Po||n===Io||n===Lo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`,hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ts(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:sg,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ul=class extends hn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new hl,d={},S=t.getContextAttributes(),E=null,M=null,A=[],T=[],C=new he,I=null,_=new St;_.viewport=new Ze;let b=new St;b.viewport=new Ze;let R=[_,b],O=new Br,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=A[Z];return j===void 0&&(j=new Oi,A[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=A[Z];return j===void 0&&(j=new Oi,A[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=A[Z];return j===void 0&&(j=new Oi,A[Z]=j),j.getHandSpace()};function k(Z){let j=T.indexOf(Z.inputSource);if(j===-1)return;let pe=A[j];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,l||a),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<A.length;Z++){let j=T[Z];j!==null&&(T[Z]=null,A[Z].disconnect(j))}L=null,N=null,m.reset();for(let Z in d)delete d[Z];e.setRenderTarget(E),p=null,f=null,h=null,s=null,M=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,be=null;S.depth&&(be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=S.stencil?qi:Ii,Ie=S.stencil?Yi:Yn);let Oe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new un(f.textureWidth,f.textureHeight,{format:Qt,type:rn,depthTexture:new ws(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new un(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Z){for(let j=0;j<Z.removed.length;j++){let pe=Z.removed[j],Ie=T.indexOf(pe);Ie>=0&&(T[Ie]=null,A[Ie].disconnect(pe))}for(let j=0;j<Z.added.length;j++){let pe=Z.added[j],Ie=T.indexOf(pe);if(Ie===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=T.length){T.push(pe),Ie=Oe;break}else if(T[Oe]===null){T[Oe]=pe,Ie=Oe;break}if(Ie===-1)break}let be=A[Ie];be&&be.connect(pe)}}let V=new U,se=new U;function oe(Z,j,pe){V.setFromMatrixPosition(j.matrixWorld),se.setFromMatrixPosition(pe.matrixWorld);let Ie=V.distanceTo(se),be=j.projectionMatrix.elements,Oe=pe.projectionMatrix.elements,at=be[14]/(be[10]-1),P=be[14]/(be[10]+1),Qe=(be[9]+1)/be[5],Le=(be[9]-1)/be[5],Ae=(be[8]-1)/be[0],me=(Oe[8]+1)/Oe[0],it=at*Ae,G=at*me,$=Ie/(-Ae+me),Ce=$*-Ae;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ce),Z.translateZ($),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Ue=at+$,w=P+$,x=it-Ce,z=G+(Ie-Ce),q=Qe*P/w*Ue,K=Le*P/w*Ue;Z.projectionMatrix.makePerspective(x,z,q,K,Ue,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ve(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,pe=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),O.near=b.near=_.near=j,O.far=b.far=_.far=pe,(L!==O.near||N!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,N=O.far),O.layers.mask=Z.layers.mask|6,_.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;let Ie=Z.parent,be=O.cameras;ve(O,Ie);for(let Oe=0;Oe<be.length;Oe++)ve(be[Oe],Ie);be.length===2?oe(O,_,b):O.projectionMatrix.copy(_.projectionMatrix),Fe(Z,O,Ie)};function Fe(Z,j,pe){pe===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Li*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return d[Z]};let Ye=null;function et(Z,j){if(u=j.getViewerPose(l||a),g=j,u!==null){let pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ie=!1;pe.length!==O.cameras.length&&(O.cameras.length=0,Ie=!0);for(let P=0;P<pe.length;P++){let Qe=pe[P],Le=null;if(p!==null)Le=p.getViewport(Qe);else{let me=h.getViewSubImage(f,Qe);Le=me.viewport,P===0&&(e.setRenderTargetTextures(M,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(M))}let Ae=R[P];Ae===void 0&&(Ae=new St,Ae.layers.enable(P),Ae.viewport=new Ze,R[P]=Ae),Ae.matrix.fromArray(Qe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Qe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Le.x,Le.y,Le.width,Le.height),P===0&&(O.matrix.copy(Ae.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ie===!0&&O.cameras.push(Ae)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let P=h.getDepthInformation(pe[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(be&&be.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let P=0;P<pe.length;P++){let Qe=pe[P].camera;if(Qe){let Le=d[Qe];Le||(Le=new Ts,d[Qe]=Le);let Ae=h.getCameraImage(Qe);Le.sourceTexture=Ae}}}}for(let pe=0;pe<A.length;pe++){let Ie=T[pe],be=A[pe];Ie!==null&&be!==void 0&&be.update(Ie,j,l||a)}Ye&&Ye(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let Ge=new ch;Ge.setAnimationLoop(et),this.setAnimationLoop=function(Z){Ye=Z},this.dispose=function(){}}},ci=new Ft,og=new dt;function ag(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Za(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,E,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,S,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Et&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Et&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d),E=S.envMap,M=S.envMapRotation;E&&(m.envMap.value=E,ci.copy(M),ci.x*=-1,ci.y*=-1,ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(ci)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Et&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){let M=E.program;n.uniformBlockBinding(S,M)}function l(S,E){let M=s[S.id];M===void 0&&(g(S),M=u(S),s[S.id]=M,S.addEventListener("dispose",m));let A=E.program;n.updateUBOMapping(S,A);let T=e.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function u(S){let E=h();S.__bindingPointIndex=E;let M=i.createBuffer(),A=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let E=s[S.id],M=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,C=M.length;T<C;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,b=I.length;_<b;_++){let R=I[_];if(p(R,T,_,A)===!0){let O=R.__offset,L=Array.isArray(R.value)?R.value:[R.value],N=0;for(let k=0;k<L.length;k++){let H=L[k],J=y(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+N,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,M,A){let T=S.value,C=E+"_"+M;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{let I=A[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(S){let E=S.uniforms,M=0,A=16;for(let C=0,I=E.length;C<I;C++){let _=Array.isArray(E[C])?E[C]:[E[C]];for(let b=0,R=_.length;b<R;b++){let O=_[b],L=Array.isArray(O.value)?O.value:[O.value];for(let N=0,k=L.length;N<k;N++){let H=L[N],J=y(H),V=M%A,se=V%J.boundary,oe=V+se;M+=se,oe!==0&&A-oe<J.storage&&(M+=A-oe),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=J.storage}}}let T=M%A;return T>0&&(M+=A-T),S.__size=M,S.__cache={},this}function y(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){let E=S.target;E.removeEventListener("dispose",m);let M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Oo=class{constructor(e={}){let{canvas:t=Nc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),y=new Int32Array(4),m=null,d=null,S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,A=!1;this._outputColorSpace=At;let T=0,C=0,I=null,_=-1,b=null,R=new Ze,O=new Ze,L=null,N=new ke(0),k=0,H=t.width,J=t.height,V=1,se=null,oe=null,ve=new Ze(0,0,H,J),Fe=new Ze(0,0,H,J),Ye=!1,et=new Bi,Ge=!1,Z=!1,j=new dt,pe=new U,Ie=new Ze,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function at(){return I===null?V:1}let P=n;function Qe(v,F){return t.getContext(v,F)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",ee,!1),P===null){let F="webgl2";if(P=Qe(F,v),P===null)throw Qe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Le,Ae,me,it,G,$,Ce,Ue,w,x,z,q,K,Y,Me,re,Se,Ee,ne,de,De,we,ce,Ve;function D(){Le=new Tp(P),Le.init(),we=new ig(P,Le),Ae=new vp(P,Le,e,we),me=new tg(P,Le),Ae.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),it=new Cp(P),G=new Vm,$=new ng(P,Le,me,G,Ae,we,it),Ce=new bp(M),Ue=new wp(M),w=new Uu(P),ce=new xp(P,w),x=new Ap(P,w,it,ce),z=new Ip(P,x,w,it),ne=new Pp(P,Ae,$),re=new _p(G),q=new Hm(M,Ce,Ue,Le,Ae,ce,re),K=new ag(M,G),Y=new Wm,Me=new Jm(Le),Ee=new gp(M,Ce,Ue,me,z,p,c),Se=new $m(M,z,Ae),Ve=new lg(P,it,Ae,me),de=new yp(P,Le,it),De=new Rp(P,Le,it),it.programs=q.programs,M.capabilities=Ae,M.extensions=Le,M.properties=G,M.renderLists=Y,M.shadowMap=Se,M.state=me,M.info=it}D();let ie=new ul(M,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let v=Le.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Le.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(H,J,!1))},this.getSize=function(v){return v.set(H,J)},this.setSize=function(v,F,W=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=v,J=F,t.width=Math.floor(v*V),t.height=Math.floor(F*V),W===!0&&(t.style.width=v+"px",t.style.height=F+"px"),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(H*V,J*V).floor()},this.setDrawingBufferSize=function(v,F,W){H=v,J=F,V=W,t.width=Math.floor(v*W),t.height=Math.floor(F*W),this.setViewport(0,0,v,F)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(ve)},this.setViewport=function(v,F,W,X){v.isVector4?ve.set(v.x,v.y,v.z,v.w):ve.set(v,F,W,X),me.viewport(R.copy(ve).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Fe)},this.setScissor=function(v,F,W,X){v.isVector4?Fe.set(v.x,v.y,v.z,v.w):Fe.set(v,F,W,X),me.scissor(O.copy(Fe).multiplyScalar(V).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(v){me.setScissorTest(Ye=v)},this.setOpaqueSort=function(v){se=v},this.setTransparentSort=function(v){oe=v},this.getClearColor=function(v){return v.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,W=!0){let X=0;if(v){let B=!1;if(I!==null){let te=I.texture.format;B=te===io||te===no||te===to}if(B){let te=I.texture.type,ue=te===rn||te===Yn||te===Wi||te===Yi||te===jr||te===$r,ye=Ee.getClearColor(),fe=Ee.getClearAlpha(),Pe=ye.r,Ne=ye.g,Te=ye.b;ue?(g[0]=Pe,g[1]=Ne,g[2]=Te,g[3]=fe,P.clearBufferuiv(P.COLOR,0,g)):(y[0]=Pe,y[1]=Ne,y[2]=Te,y[3]=fe,P.clearBufferiv(P.COLOR,0,y))}else X|=P.COLOR_BUFFER_BIT}F&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Ee.dispose(),Y.dispose(),Me.dispose(),G.dispose(),Ce.dispose(),Ue.dispose(),z.dispose(),ce.dispose(),Ve.dispose(),q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",cn),ie.removeEventListener("sessionend",_l),qn.stop()};function ae(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let v=it.autoReset,F=Se.enabled,W=Se.autoUpdate,X=Se.needsUpdate,B=Se.type;D(),it.autoReset=v,Se.enabled=F,Se.autoUpdate=W,Se.needsUpdate=X,Se.type=B}function ee(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Q(v){let F=v.target;F.removeEventListener("dispose",Q),_e(F)}function _e(v){Be(v),G.remove(v)}function Be(v){let F=G.get(v).programs;F!==void 0&&(F.forEach(function(W){q.releaseProgram(W)}),v.isShaderMaterial&&q.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,W,X,B,te){F===null&&(F=be);let ue=B.isMesh&&B.matrixWorld.determinant()<0,ye=Ih(v,F,W,X,B);me.setMaterial(X,ue);let fe=W.index,Pe=1;if(X.wireframe===!0){if(fe=x.getWireframeAttribute(W),fe===void 0)return;Pe=2}let Ne=W.drawRange,Te=W.attributes.position,qe=Ne.start*Pe,st=(Ne.start+Ne.count)*Pe;te!==null&&(qe=Math.max(qe,te.start*Pe),st=Math.min(st,(te.start+te.count)*Pe)),fe!==null?(qe=Math.max(qe,0),st=Math.min(st,fe.count)):Te!=null&&(qe=Math.max(qe,0),st=Math.min(st,Te.count));let mt=st-qe;if(mt<0||mt===1/0)return;ce.setup(B,X,ye,W,fe);let ht,lt=de;if(fe!==null&&(ht=w.get(fe),lt=De,lt.setIndex(ht)),B.isMesh)X.wireframe===!0?(me.setLineWidth(X.wireframeLinewidth*at()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(B.isLine){let Re=X.linewidth;Re===void 0&&(Re=1),me.setLineWidth(Re*at()),B.isLineSegments?lt.setMode(P.LINES):B.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else B.isPoints?lt.setMode(P.POINTS):B.isSprite&&lt.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ui("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Re=B._multiDrawStarts,ft=B._multiDrawCounts,Je=B._multiDrawCount,Bt=fe?w.get(fe).bytesPerElement:1,pi=G.get(X).currentProgram.getUniforms();for(let zt=0;zt<Je;zt++)pi.setValue(P,"_gl_DrawID",zt),lt.render(Re[zt]/Bt,ft[zt])}else if(B.isInstancedMesh)lt.renderInstances(qe,mt,B.count);else if(W.isInstancedBufferGeometry){let Re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ft=Math.min(W.instanceCount,Re);lt.renderInstances(qe,mt,ft)}else lt.render(qe,mt)};function ct(v,F,W){v.transparent===!0&&v.side===gn&&v.forceSinglePass===!1?(v.side=Et,v.needsUpdate=!0,qs(v,F,W),v.side=wn,v.needsUpdate=!0,qs(v,F,W),v.side=gn):qs(v,F,W)}this.compile=function(v,F,W=null){W===null&&(W=v),d=Me.get(W),d.init(F),E.push(d),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),v!==W&&v.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();let X=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let te=B.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){let ye=te[ue];ct(ye,W,B),X.add(ye)}else ct(te,W,B),X.add(te)}),d=E.pop(),X},this.compileAsync=function(v,F,W=null){let X=this.compile(v,F,W);return new Promise(B=>{function te(){if(X.forEach(function(ue){G.get(ue).currentProgram.isReady()&&X.delete(ue)}),X.size===0){B(v);return}setTimeout(te,10)}Le.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let $e=null;function yn(v){$e&&$e(v)}function cn(){qn.stop()}function _l(){qn.start()}let qn=new ch;qn.setAnimationLoop(yn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(v){$e=v,ie.setAnimationLoop(v),v===null?qn.stop():qn.start()},ie.addEventListener("sessionstart",cn),ie.addEventListener("sessionend",_l),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,F,I),d=Me.get(v,E.length),d.init(F),E.push(d),j.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),et.setFromProjectionMatrix(j,nn,F.reversedDepth),Z=this.localClippingEnabled,Ge=re.init(this.clippingPlanes,Z),m=Y.get(v,S.length),m.init(),S.push(m),ie.enabled===!0&&ie.isPresenting===!0){let te=M.xr.getDepthSensingMesh();te!==null&&jo(te,F,-1/0,M.sortObjects)}jo(v,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(se,oe),Oe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Oe&&Ee.addToRenderList(m,v),this.info.render.frame++,Ge===!0&&re.beginShadows();let W=d.state.shadowsArray;Se.render(W,v,F),Ge===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,B=m.transmissive;if(d.setupLights(),F.isArrayCamera){let te=F.cameras;if(B.length>0)for(let ue=0,ye=te.length;ue<ye;ue++){let fe=te[ue];Ml(X,B,v,fe)}Oe&&Ee.render(v);for(let ue=0,ye=te.length;ue<ye;ue++){let fe=te[ue];bl(m,v,fe,fe.viewport)}}else B.length>0&&Ml(X,B,v,F),Oe&&Ee.render(v),bl(m,v,F);I!==null&&C===0&&($.updateMultisampleRenderTarget(I),$.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(M,v,F),ce.resetDefaultState(),_=-1,b=null,E.pop(),E.length>0?(d=E[E.length-1],Ge===!0&&re.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function jo(v,F,W,X){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||et.intersectsSprite(v)){X&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(j);let ue=z.update(v),ye=v.material;ye.visible&&m.push(v,ue,ye,W,Ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||et.intersectsObject(v))){let ue=z.update(v),ye=v.material;if(X&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ie.copy(ue.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4(j)),Array.isArray(ye)){let fe=ue.groups;for(let Pe=0,Ne=fe.length;Pe<Ne;Pe++){let Te=fe[Pe],qe=ye[Te.materialIndex];qe&&qe.visible&&m.push(v,ue,qe,W,Ie.z,Te)}}else ye.visible&&m.push(v,ue,ye,W,Ie.z,null)}}let te=v.children;for(let ue=0,ye=te.length;ue<ye;ue++)jo(te[ue],F,W,X)}function bl(v,F,W,X){let B=v.opaque,te=v.transmissive,ue=v.transparent;d.setupLightsView(W),Ge===!0&&re.setGlobalState(M.clippingPlanes,W),X&&me.viewport(R.copy(X)),B.length>0&&Ys(B,F,W),te.length>0&&Ys(te,F,W),ue.length>0&&Ys(ue,F,W),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Ml(v,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new un(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Xi:rn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let te=d.state.transmissionRenderTarget[X.id],ue=X.viewport||R;te.setSize(ue.z*M.transmissionResolutionScale,ue.w*M.transmissionResolutionScale);let ye=M.getRenderTarget(),fe=M.getActiveCubeFace(),Pe=M.getActiveMipmapLevel();M.setRenderTarget(te),M.getClearColor(N),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear(),Oe&&Ee.render(W);let Ne=M.toneMapping;M.toneMapping=Rn;let Te=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),Ge===!0&&re.setGlobalState(M.clippingPlanes,X),Ys(v,W,X),$.updateMultisampleRenderTarget(te),$.updateRenderTargetMipmap(te),Le.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let st=0,mt=F.length;st<mt;st++){let ht=F[st],lt=ht.object,Re=ht.geometry,ft=ht.material,Je=ht.group;if(ft.side===gn&&lt.layers.test(X.layers)){let Bt=ft.side;ft.side=Et,ft.needsUpdate=!0,Sl(lt,W,X,Re,ft,Je),ft.side=Bt,ft.needsUpdate=!0,qe=!0}}qe===!0&&($.updateMultisampleRenderTarget(te),$.updateRenderTargetMipmap(te))}M.setRenderTarget(ye,fe,Pe),M.setClearColor(N,k),Te!==void 0&&(X.viewport=Te),M.toneMapping=Ne}function Ys(v,F,W){let X=F.isScene===!0?F.overrideMaterial:null;for(let B=0,te=v.length;B<te;B++){let ue=v[B],ye=ue.object,fe=ue.geometry,Pe=ue.group,Ne=ue.material;Ne.allowOverride===!0&&X!==null&&(Ne=X),ye.layers.test(W.layers)&&Sl(ye,F,W,fe,Ne,Pe)}}function Sl(v,F,W,X,B,te){v.onBeforeRender(M,F,W,X,B,te),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(M,F,W,X,v,te),B.transparent===!0&&B.side===gn&&B.forceSinglePass===!1?(B.side=Et,B.needsUpdate=!0,M.renderBufferDirect(W,F,X,B,v,te),B.side=wn,B.needsUpdate=!0,M.renderBufferDirect(W,F,X,B,v,te),B.side=gn):M.renderBufferDirect(W,F,X,B,v,te),v.onAfterRender(M,F,W,X,B,te)}function qs(v,F,W){F.isScene!==!0&&(F=be);let X=G.get(v),B=d.state.lights,te=d.state.shadowsArray,ue=B.state.version,ye=q.getParameters(v,B.state,te,F,W),fe=q.getProgramCacheKey(ye),Pe=X.programs;X.environment=v.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(v.isMeshStandardMaterial?Ue:Ce).get(v.envMap||X.environment),X.envMapRotation=X.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,Pe===void 0&&(v.addEventListener("dispose",Q),Pe=new Map,X.programs=Pe);let Ne=Pe.get(fe);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===ue)return wl(v,ye),Ne}else ye.uniforms=q.getUniforms(v),v.onBeforeCompile(ye,M),Ne=q.acquireProgram(ye,fe),Pe.set(fe,Ne),X.uniforms=ye.uniforms;let Te=X.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=re.uniform),wl(v,ye),X.needsLights=Dh(v),X.lightsStateVersion=ue,X.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMap.value=B.state.directionalShadowMap,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotShadowMap.value=B.state.spotShadowMap,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMap.value=B.state.pointShadowMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function El(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=Qi.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function wl(v,F){let W=G.get(v);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Ih(v,F,W,X,B){F.isScene!==!0&&(F=be),$.resetTextureUnits();let te=F.fog,ue=X.isMeshStandardMaterial?F.environment:null,ye=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ni,fe=(X.isMeshStandardMaterial?Ue:Ce).get(X.envMap||ue),Pe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Te=!!W.morphAttributes.position,qe=!!W.morphAttributes.normal,st=!!W.morphAttributes.color,mt=Rn;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(mt=M.toneMapping);let ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=ht!==void 0?ht.length:0,Re=G.get(X),ft=d.state.lights;if(Ge===!0&&(Z===!0||v!==b)){let Pt=v===b&&X.id===_;re.setState(X,v,Pt)}let Je=!1;X.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ft.state.version||Re.outputColorSpace!==ye||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==fe||X.fog===!0&&Re.fog!==te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==re.numPlanes||Re.numIntersection!==re.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==Ne||Re.morphTargets!==Te||Re.morphNormals!==qe||Re.morphColors!==st||Re.toneMapping!==mt||Re.morphTargetsCount!==lt)&&(Je=!0):(Je=!0,Re.__version=X.version);let Bt=Re.currentProgram;Je===!0&&(Bt=qs(X,F,B));let pi=!1,zt=!1,is=!1,pt=Bt.getUniforms(),Wt=Re.uniforms;if(me.useProgram(Bt.program)&&(pi=!0,zt=!0,is=!0),X.id!==_&&(_=X.id,zt=!0),pi||b!==v){me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pt.setValue(P,"projectionMatrix",v.projectionMatrix),pt.setValue(P,"viewMatrix",v.matrixWorldInverse);let Dt=pt.map.cameraPosition;Dt!==void 0&&Dt.setValue(P,pe.setFromMatrixPosition(v.matrixWorld)),Ae.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),b!==v&&(b=v,zt=!0,is=!0)}if(B.isSkinnedMesh){pt.setOptional(P,B,"bindMatrix"),pt.setOptional(P,B,"bindMatrixInverse");let Pt=B.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),pt.setValue(P,"boneTexture",Pt.boneTexture,$))}B.isBatchedMesh&&(pt.setOptional(P,B,"batchingTexture"),pt.setValue(P,"batchingTexture",B._matricesTexture,$),pt.setOptional(P,B,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",B._indirectTexture,$),pt.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",B._colorsTexture,$));let Xt=W.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&ne.update(B,W,Bt),(zt||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,pt.setValue(P,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Wt.envMap.value=fe,Wt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Wt.envMapIntensity.value=F.environmentIntensity),zt&&(pt.setValue(P,"toneMappingExposure",M.toneMappingExposure),Re.needsLights&&Lh(Wt,is),te&&X.fog===!0&&K.refreshFogUniforms(Wt,te),K.refreshMaterialUniforms(Wt,X,V,J,d.state.transmissionRenderTarget[v.id]),Qi.upload(P,El(Re),Wt,$)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qi.upload(P,El(Re),Wt,$),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(P,"center",B.center),pt.setValue(P,"modelViewMatrix",B.modelViewMatrix),pt.setValue(P,"normalMatrix",B.normalMatrix),pt.setValue(P,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Pt=X.uniformsGroups;for(let Dt=0,$o=Pt.length;Dt<$o;Dt++){let Zn=Pt[Dt];Ve.update(Zn,Bt),Ve.bind(Zn,Bt)}}return Bt}function Lh(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function Dh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,F,W){let X=G.get(v);X.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=F,G.get(v.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let W=G.get(v);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};let Uh=P.createFramebuffer();this.setRenderTarget=function(v,F=0,W=0){I=v,T=F,C=W;let X=!0,B=null,te=!1,ue=!1;if(v){let fe=G.get(v);if(fe.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(fe.__webglFramebuffer===void 0)$.setupRenderTarget(v);else if(fe.__hasExternalTextures)$.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Te=v.depthTexture;if(fe.__boundDepthTexture!==Te){if(Te!==null&&G.has(Te)&&(v.width!==Te.image.width||v.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(v)}}let Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ue=!0);let Ne=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?B=Ne[F][W]:B=Ne[F],te=!0):v.samples>0&&$.useMultisampledRTT(v)===!1?B=G.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[W]:B=Ne,R.copy(v.viewport),O.copy(v.scissor),L=v.scissorTest}else R.copy(ve).multiplyScalar(V).floor(),O.copy(Fe).multiplyScalar(V).floor(),L=Ye;if(W!==0&&(B=Uh),me.bindFramebuffer(P.FRAMEBUFFER,B)&&X&&me.drawBuffers(v,B),me.viewport(R),me.scissor(O),me.setScissorTest(L),te){let fe=G.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,fe.__webglTexture,W)}else if(ue){let fe=F;for(let Pe=0;Pe<v.textures.length;Pe++){let Ne=G.get(v.textures[Pe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,W,fe)}}else if(v!==null&&W!==0){let fe=G.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,W)}_=-1},this.readRenderTargetPixels=function(v,F,W,X,B,te,ue,ye=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe){me.bindFramebuffer(P.FRAMEBUFFER,fe);try{let Pe=v.textures[ye],Ne=Pe.format,Te=Pe.type;if(!Ae.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-X&&W>=0&&W<=v.height-B&&(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),P.readPixels(F,W,X,B,we.convert(Ne),we.convert(Te),te))}finally{let Pe=I!==null?G.get(I).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(v,F,W,X,B,te,ue,ye=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe)if(F>=0&&F<=v.width-X&&W>=0&&W<=v.height-B){me.bindFramebuffer(P.FRAMEBUFFER,fe);let Pe=v.textures[ye],Ne=Pe.format,Te=Pe.type;if(!Ae.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.bufferData(P.PIXEL_PACK_BUFFER,te.byteLength,P.STREAM_READ),v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),P.readPixels(F,W,X,B,we.convert(Ne),we.convert(Te),0);let st=I!==null?G.get(I).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,st);let mt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Fc(P,mt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,te),P.deleteBuffer(qe),P.deleteSync(mt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,W=0){let X=Math.pow(2,-W),B=Math.floor(v.image.width*X),te=Math.floor(v.image.height*X),ue=F!==null?F.x:0,ye=F!==null?F.y:0;$.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,ue,ye,B,te),me.unbindTexture()};let Nh=P.createFramebuffer(),Fh=P.createFramebuffer();this.copyTextureToTexture=function(v,F,W=null,X=null,B=0,te=null){te===null&&(B!==0?(Ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=B,B=0):te=0);let ue,ye,fe,Pe,Ne,Te,qe,st,mt,ht=v.isCompressedTexture?v.mipmaps[te]:v.image;if(W!==null)ue=W.max.x-W.min.x,ye=W.max.y-W.min.y,fe=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,Ne=W.min.y,Te=W.isBox3?W.min.z:0;else{let Xt=Math.pow(2,-B);ue=Math.floor(ht.width*Xt),ye=Math.floor(ht.height*Xt),v.isDataArrayTexture?fe=ht.depth:v.isData3DTexture?fe=Math.floor(ht.depth*Xt):fe=1,Pe=0,Ne=0,Te=0}X!==null?(qe=X.x,st=X.y,mt=X.z):(qe=0,st=0,mt=0);let lt=we.convert(F.format),Re=we.convert(F.type),ft;F.isData3DTexture?($.setTexture3D(F,0),ft=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),ft=P.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),ft=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let Je=P.getParameter(P.UNPACK_ROW_LENGTH),Bt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pi=P.getParameter(P.UNPACK_SKIP_PIXELS),zt=P.getParameter(P.UNPACK_SKIP_ROWS),is=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ht.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);let pt=v.isDataArrayTexture||v.isData3DTexture,Wt=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let Xt=G.get(v),Pt=G.get(F),Dt=G.get(Xt.__renderTarget),$o=G.get(Pt.__renderTarget);me.bindFramebuffer(P.READ_FRAMEBUFFER,Dt.__webglFramebuffer),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,$o.__webglFramebuffer);for(let Zn=0;Zn<fe;Zn++)pt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(v).__webglTexture,B,Te+Zn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(F).__webglTexture,te,mt+Zn)),P.blitFramebuffer(Pe,Ne,ue,ye,qe,st,ue,ye,P.DEPTH_BUFFER_BIT,P.NEAREST);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||G.has(v)){let Xt=G.get(v),Pt=G.get(F);me.bindFramebuffer(P.READ_FRAMEBUFFER,Nh),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Fh);for(let Dt=0;Dt<fe;Dt++)pt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Xt.__webglTexture,B,Te+Dt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Xt.__webglTexture,B),Wt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pt.__webglTexture,te,mt+Dt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pt.__webglTexture,te),B!==0?P.blitFramebuffer(Pe,Ne,ue,ye,qe,st,ue,ye,P.COLOR_BUFFER_BIT,P.NEAREST):Wt?P.copyTexSubImage3D(ft,te,qe,st,mt+Dt,Pe,Ne,ue,ye):P.copyTexSubImage2D(ft,te,qe,st,Pe,Ne,ue,ye);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Wt?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(ft,te,qe,st,mt,ue,ye,fe,lt,Re,ht.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(ft,te,qe,st,mt,ue,ye,fe,lt,ht.data):P.texSubImage3D(ft,te,qe,st,mt,ue,ye,fe,lt,Re,ht):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,te,qe,st,ue,ye,lt,Re,ht.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,te,qe,st,ht.width,ht.height,lt,ht.data):P.texSubImage2D(P.TEXTURE_2D,te,qe,st,ue,ye,lt,Re,ht);P.pixelStorei(P.UNPACK_ROW_LENGTH,Je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Bt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pi),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,is),te===0&&F.generateMipmaps&&P.generateMipmap(ft),me.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&$.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?$.setTextureCube(v,0):v.isData3DTexture?$.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?$.setTexture2DArray(v,0):$.setTexture2D(v,0),me.unbindTexture()},this.resetState=function(){T=0,C=0,I=null,me.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var zo=class extends ii{constructor(){super();let e=new fn;e.deleteAttribute("uv");let t=new Vt({side:Et}),n=new Vt,s=new Ns(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new rt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ss(e,n,6),o=new Mt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new rt(e,es(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new rt(e,es(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new rt(e,es(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new rt(e,es(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new rt(e,es(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new rt(e,es(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function es(i){return new Is({color:0,emissive:16777215,emissiveIntensity:i})}var Xs=new U;function jt(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Xs.copy(e),Xs[n]=0,Xs.normalize();let l=.5*a/(a+o),u=1-Xs.angleTo(i)/c;return Math.sign(Xs[t])===1?u*l:o/(a+o)+l+l*(1-u)}var ko=class i extends fn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new U,l=new U,u=new U(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,y=new U,m=.5/a;for(let d=0,S=0;d<h.length;d+=3,S+=2)switch(c.fromArray(h,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[d+0]=u.x*Math.sign(c.x)+l.x*r,h[d+1]=u.y*Math.sign(c.y)+l.y*r,h[d+2]=u.z*Math.sign(c.z)+l.z*r,f[d+0]=l.x,f[d+1]=l.y,f[d+2]=l.z,Math.floor(d/g)){case 0:y.set(1,0,0),p[S+0]=jt(y,l,"z","y",r,n),p[S+1]=1-jt(y,l,"y","z",r,t);break;case 1:y.set(-1,0,0),p[S+0]=1-jt(y,l,"z","y",r,n),p[S+1]=1-jt(y,l,"y","z",r,t);break;case 2:y.set(0,1,0),p[S+0]=1-jt(y,l,"x","z",r,e),p[S+1]=jt(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),p[S+0]=1-jt(y,l,"x","z",r,e),p[S+1]=1-jt(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),p[S+0]=1-jt(y,l,"x","y",r,e),p[S+1]=1-jt(y,l,"y","x",r,t);break;case 5:y.set(0,0,-1),p[S+0]=jt(y,l,"x","y",r,e),p[S+1]=1-jt(y,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ph=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,Ho=class{constructor(e=Math.random){this.random=e;xe(this,"blinkProgress",0);xe(this,"gaze",new he);xe(this,"phase","open");xe(this,"elapsed",0);xe(this,"duration",0);xe(this,"gazeTime",0);xe(this,"doublePending",!1);xe(this,"reduced",!1);this.reset()}between(e,t){return e+(t-e)*this.random()}enter(e,t){this.phase=e,this.duration=t,this.elapsed=0}reset(){this.blinkProgress=0,this.doublePending=!1,this.gazeTime=0,this.gaze.set(0,0),this.enter("open",this.between(2,5))}update(e,t,n){if(t){this.reduced||this.reset(),this.reduced=!0;return}this.reduced=!1;let s=Number.isFinite(e)?Math.max(0,Math.min(e,.1)):0;this.gazeTime+=s;let r=1-Math.exp(-s*3),a=Math.sin(this.gazeTime*.77)*.09+Math.sin(this.gazeTime*1.31)*.025+Math.max(-1,Math.min(1,n.x))*.08,o=Math.sin(this.gazeTime*.63)*.05+Math.max(-1,Math.min(1,n.y))*.05;for(this.gaze.lerp(new he(a,o),r);s>0;){let l=Math.min(s,this.duration-this.elapsed);if(this.elapsed+=l,s-=l,this.elapsed<this.duration)break;switch(this.phase){case"open":this.doublePending=this.random()<.2,this.enter("closing",this.between(.08,.12));break;case"double-gap":this.enter("closing",this.between(.08,.12));break;case"closing":this.enter("closed",this.between(.04,.08));break;case"closed":this.enter("opening",this.between(.1,.15));break;case"opening":this.doublePending?(this.doublePending=!1,this.enter("double-gap",this.between(.1,.18))):this.enter("open",this.between(2,5));break}}let c=this.elapsed/this.duration;this.blinkProgress=this.phase==="closing"?ph(c):this.phase==="closed"?1:this.phase==="opening"?1-ph(c):0}};var Vo={blinkL:0,blinkR:0,arcL:0,arcR:0,mouthOpen:.55,mouthWidth:1,mouthCurve:.6,mouthShift:0,cheek:.6,browL:0,browR:0,glow:1},fi=i=>new ke(i);function mh(i){let e={eyeX:.47,eyeY:-.06,eyeR:.255,browY:.39,mouthY:-.335,mouthScale:1,cheekX:.68,cheekY:-.34,screen:!0,led:"#8ce6ff",glowColor:"#0b6eff",ink:"#13205a",iris:["#52bdff","#0f5cf5","#051a6b"],ledStyle:!1,cheekColor:"#ffd23a",...i},t={halfSize:{value:new he(e.halfWidth,e.halfHeight)},eyeLayout:{value:new Ze(e.eyeX,e.eyeY,e.eyeR,e.browY)},lowerLayout:{value:new Ze(e.mouthY,e.mouthScale,e.cheekX,e.cheekY)},screen:{value:e.screen?1:0},ledStyle:{value:e.ledStyle?1:0},cheekColor:{value:fi(e.cheekColor)},led:{value:fi(e.led)},glowColor:{value:fi(e.glowColor)},ink:{value:fi(e.ink)},irisLight:{value:fi(e.iris[0])},irisMid:{value:fi(e.iris[1])},irisDark:{value:fi(e.iris[2])},gaze:{value:new he},eyes:{value:new Ze},mouth:{value:new Ze},extra:{value:new Ze(0,0,0,1)},time:{value:0}};return{material:new Lt({uniforms:t,toneMapped:!1,transparent:!e.screen,depthWrite:e.screen,polygonOffset:!e.screen,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:`
      varying vec2 faceUv;
      void main(){ faceUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`
      varying vec2 faceUv;
      uniform vec2 halfSize, gaze;
      uniform vec4 eyeLayout, lowerLayout, eyes, mouth, extra;
      uniform float screen, time, ledStyle;
      uniform vec3 led, glowColor, ink, irisLight, irisMid, irisDark, cheekColor;

      float fill(float d){ float w=max(fwidth(d),.0015); return 1.0-smoothstep(-w,w,d); }
      // Arc with round caps (after Inigo Quilez): centred on +y, half-aperture sc=(sin,cos), radius ra, half-thickness rb.
      float sdArc(vec2 p, vec2 sc, float ra, float rb){
        p.x=abs(p.x);
        return ((sc.y*p.x>sc.x*p.y)?length(p-sc*ra):abs(length(p)-ra))-rb;
      }
      vec2 rot(vec2 p, float a){ float c=cos(a), s=sin(a); return vec2(c*p.x-s*p.y, s*p.x+c*p.y); }
      // Feature colour: glowing LED on a screen, ink when printed.
      vec3 lineColor(float glow){ return mix(ink, led*glow, screen); }

      // One glossy eye composited onto col/alpha. c is the eye centre, R the radius.
      void eye(inout vec3 col, inout float alpha, vec2 p, vec2 c, float R, float blink, float arc, float glow){
        vec2 q=p-c-gaze*R*vec2(.4,.34);
        // Round eye squashes vertically when blinking and while morphing into the arc.
        float squash=mix(1.0,.06,max(blink,arc*.95));
        float r=length(vec2(q.x,q.y/squash))/R;
        // Happy "^" arc (also the winking eye): round-capped, slightly above the eye centre.
        float arcD=sdArc(q+vec2(0.0,R*.42),vec2(.88,.47),R*.8,R*.1);
        // Thin glow around the eye and the arc (cheap "bloom"), screens only.
        float outside=max(0.0,r-1.0);
        float halo=exp(-outside*outside/mix(.012,.02,ledStyle))*mix(.32,.55,ledStyle)*(1.0-arc)*(1.0-blink*.8);
        float arcHalo=exp(-pow(max(0.0,arcD)/(R*.22),2.0))*.4*arc;
        col+=glowColor*(halo+arcHalo)*glow*screen;
        // Iris: dark top -> saturated mid -> light crescent at the bottom (lit from inside).
        vec2 iq=(q-gaze*R*vec2(.12,.1))/R;           // inner layer moves further: parallax depth
        vec2 ie=vec2(iq.x,iq.y/squash);
        float ir=length(ie);
        vec3 iris=mix(irisMid,irisDark,smoothstep(-.35,.7,ie.y));
        iris=mix(iris,irisLight,smoothstep(-.35,-.8,ie.y)*.85);
        iris+=irisMid*(1.0-smoothstep(0.0,.08,abs(ir-.66)))*.25;   // faint inner ring
        // Depth: fine radial fibres, a darker limbal edge and a lit bottom rim around the pupil.
        float ang=atan(ie.y,ie.x);
        iris*=1.0+.1*sin(ang*26.0+sin(ang*7.0)*1.5)*smoothstep(.46,.6,ir)*(1.0-smoothstep(.62,.7,ir));
        iris*=1.0-.4*smoothstep(.52,.7,ir);
        iris+=irisLight*.35*(1.0-smoothstep(0.0,.06,abs(ir-.53)))*(1.0-smoothstep(-.5,.1,ie.y));
        // Pupil: not flat black \u2014 deep navy well, darker towards the rim, faint glow low inside.
        vec3 pupil=mix(vec3(.02,.06,.2),vec3(.004,.01,.035),smoothstep(.0,.42,length(ie-vec2(.04,-.1))));
        iris=mix(iris,pupil,1.0-smoothstep(.43,.5,ir));
        iris=mix(iris,iris*.6,ledStyle);                                // LED panel: darker inside the glowing ring
        // Rim: bright LED ring on screens, dark ink outline when printed.
        float rim=smoothstep(mix(.82,.68,ledStyle),mix(.9,.76,ledStyle),r)*(1.0-smoothstep(.98,1.01,r));
        vec3 c3=mix(iris,mix(ink,mix(led,vec3(1.0),.3),screen),rim);
        // Reflections: big soft top-right, small bottom-left, tiny sparkle. Fixed to the eye, not the iris.
        vec2 h=q/R; h.y/=squash;
        float hl=fill(length(rot(h-vec2(.28,.32),.5)*vec2(1.0,1.25))-.2);
        float hs=fill(length(h-vec2(-.3,-.36))-.08);
        float ht=fill(length(h-vec2(.5,-.1))-.04);
        // Window reflection inside the pupil plus a soft curved sheen across the top of the eyeball.
        float hp=fill(length((h-vec2(-.13,.16))*vec2(1.0,1.4))-.07);
        float sheen=(1.0-smoothstep(.55,.95,length(h-vec2(-.05,-.35))))*smoothstep(.2,.75,h.y)*.18;
        c3+=vec3(.75,.88,1.0)*sheen*(1.0-max(blink,arc));
        float shine=max(hl,max(hs*.95,max(ht*.85,hp*.6)))*(1.0-max(blink,arc));
        c3=mix(c3,vec3(1.0),shine);
        float body=fill(r-1.0)*(1.0-arc);
        col=mix(col,c3*mix(1.0,glow,screen),body); alpha=max(alpha,body);
        // Closed lid line at the bottom of a blink keeps the eye readable.
        float lid=fill(abs(q.y)-R*.07)*fill(abs(q.x)-R*.95)*smoothstep(.75,1.0,blink)*(1.0-arc);
        col=mix(col,lineColor(glow),lid); alpha=max(alpha,lid);
        float a=fill(arcD)*arc;
        col=mix(col,mix(ink,mix(led,vec3(1.0),.3)*glow,screen),a); alpha=max(alpha,a);
      }

      void main(){
        vec2 p=(faceUv-.5)*2.0*halfSize;
        vec2 n=p/halfSize;
        float s=pow(abs(n.x),4.0)+pow(abs(n.y),4.0);  // matches the patch outline
        float glow=extra.w;
        float eyeX=eyeLayout.x, eyeY=eyeLayout.y, R=eyeLayout.z, browY=eyeLayout.w;
        float mouthY=lowerLayout.x, ms=lowerLayout.y;

        // Screen: near-black glass, faint navy centre, thin inner edge glow and a soft painted reflection.
        vec3 col=mix(vec3(.03,.05,.1),vec3(.008,.011,.022),smoothstep(.0,.85,length(n*vec2(.75,1.0))));
        col+=glowColor*smoothstep(.8,1.0,s)*.4*glow;
        col+=mix(glowColor,led,.6)*smoothstep(.965,1.0,s)*.35*glow;
        col+=vec3(.55,.7,.95)*.06*smoothstep(.5,.92,n.y)*(1.0-smoothstep(.55,.95,abs(n.x)));
        vec2 g=rot(n-vec2(-.72,.58),.75)*vec2(1.0,3.2);
        col+=vec3(.7,.82,1.0)*.07*exp(-dot(g,g)/.03);
        float alpha=screen;

        // Eyebrows: thin round-capped arcs, tilted slightly outwards.
        for(int i=0;i<2;i++){
          float sd=i==0?-1.0:1.0;
          float lift=i==0?extra.y:extra.z;
          vec2 bp=rot(p-vec2(sd*eyeX,browY+lift),sd*.1)/(R/.255);
          float bd=sdArc(bp+vec2(0.0,.3),vec2(.42,.91),.3,.016);
          col+=glowColor*exp(-pow(max(0.0,bd)/.03,2.0))*.25*glow*screen;
          float b=fill(bd);
          col=mix(col,lineColor(glow),b); alpha=max(alpha,b);
        }

        eye(col,alpha,p,vec2(-eyeX,eyeY),R,eyes.x,eyes.z,glow);
        eye(col,alpha,p,vec2(eyeX,eyeY),R,eyes.y,eyes.w,glow);

        // Cheeks: soft pink blush, or two short yellow LED dashes in ledStyle.
        for(int i=0;i<2;i++){
          float sd=i==0?-1.0:1.0;
          vec2 cp=p-vec2(sd*lowerLayout.z,lowerLayout.w);
          if(ledStyle>.5){
            for(int j=0;j<2;j++){
              vec2 d=rot(cp-vec2(sd*float(j)*.025,(float(j)-.5)*.065)*ms,sd*.18);
              float dd=length(vec2(max(abs(d.x)-.045*ms,0.0),d.y))-.013*ms;
              col+=cheekColor*exp(-pow(max(0.0,dd)/(.03*ms),2.0))*.3*glow;
              float b=fill(dd)*mix(.6,1.0,extra.x);
              col=mix(col,mix(cheekColor,vec3(1.0),.2)*glow,b); alpha=max(alpha,b);
            }
          } else {
            vec2 cq=cp/(vec2(.11,.06)*ms);
            float b=exp(-dot(cq,cq)*1.3)*extra.x*.8;
            col=mix(col,vec3(1.0,.45,.6),b); alpha=max(alpha,b);
          }
        }

        // Mouth: open "D" smile (top lifted at the corners, round bottom) or a smile line when nearly closed.
        float open=mouth.x, w=.115*mouth.y*ms, curve=mouth.z;
        vec2 m=p-vec2(mouth.w*ms,mouthY);
        float xn=clamp(m.x/w,-1.0,1.0);
        float top=(.018+curve*.035*xn*xn)*ms;
        float depth=mix(.012,.15,open)*ms;
        float bottom=top-depth*sqrt(max(0.0,1.0-xn*xn))-.004*ms;
        float mouthBox=max(abs(m.x)-w,max(m.y-top,bottom-m.y));
        col+=glowColor*exp(-pow(max(0.0,mouthBox)/(.035*ms),2.0))*.4*ledStyle*glow;
        float inside=fill(abs(m.x)-w)*fill(m.y-top)*fill(bottom-m.y);
        float t=clamp((top-m.y)/max(depth,.001),0.0,1.0);
        vec3 mc=mix(vec3(.62,.13,.28),vec3(1.0,.42,.52),smoothstep(.1,.75,t));
        float tongue=fill(length((m-vec2(0.0,top-depth*.82))/vec2(w*.62,depth*.42))-1.0)*step(.35,open);
        mc=mix(mc,vec3(1.0,.62,.70),tongue*.85);
        mc=mix(mc,vec3(1.0,.88,.9),fill(length((m-vec2(-w*.35,top-depth*.18))/vec2(w*.22,depth*.08))-1.0)*.35*step(.3,open));
        mc=mix(mc,mix(vec3(.8,.95,1.0),led,smoothstep(.2,1.0,t))*glow,ledStyle);  // glowing LED smile
        col=mix(col,mc,inside); alpha=max(alpha,inside);
        // Lip edge keeps the mouth readable: bright pink on a screen, ink outline when printed.
        float lip=fill(abs(m.y-top)-.007*ms)*fill(abs(m.x)-w*1.02)*(1.0-smoothstep(.0,.25,open)*.6*screen);
        col=mix(col,mix(ink,mix(vec3(1.0,.55,.65),vec3(.85,.96,1.0)*glow,ledStyle),screen),lip*.9); alpha=max(alpha,lip*.9);
        float outline=(1.0-screen)*fill(abs(max(max(abs(m.x)-w,m.y-top),bottom-m.y))-.006*ms)*step(.05,open);
        col=mix(col,ink,outline); alpha=max(alpha,outline);

        if(alpha<.01) discard;
        gl_FragColor=vec4(col,alpha);
        #include <colorspace_fragment>
      }`}),uniforms:t,apply:(r,a,o)=>{t.gaze.value.copy(a),t.eyes.value.set(r.blinkL,r.blinkR,r.arcL,r.arcR),t.mouth.value.set(r.mouthOpen,r.mouthWidth,r.mouthCurve,r.mouthShift),t.extra.value.set(r.cheek,r.browL,r.browR,r.glow),t.time.value=o}}}var cg={idle:{},happy:{arcL:1,arcR:1,mouthOpen:1,mouthWidth:1.35,mouthCurve:1,cheek:1,browL:.05,browR:.05,glow:1.08},talking:{mouthOpen:.5,mouthWidth:.95,cheek:.55},thinking:{mouthOpen:.06,mouthWidth:.55,mouthCurve:-.25,mouthShift:.08,cheek:.3,browL:.08,browR:-.01},greeting:{arcL:1,arcR:1,mouthOpen:.3,mouthWidth:1.5,mouthCurve:1,cheek:1,browL:.05,browR:.05,glow:1.12},winking:{arcR:1,mouthOpen:.85,mouthWidth:1.15,mouthCurve:1,cheek:.95,browR:.06}},hg={thinking:[-1.3,1.6]},ug={happy:2.4,greeting:3.4,winking:1.8},gh=2.25,Go=class{constructor(e){xe(this,"face");xe(this,"faceState",{...Vo});xe(this,"gaze",new he);xe(this,"eyeMotion",new Ho);xe(this,"expression","idle");xe(this,"persistent","idle");xe(this,"expressionLeft",1/0);xe(this,"waveTime",-1);xe(this,"hopTime",-1);xe(this,"tiltTime",-1);xe(this,"blinkTime",-1);xe(this,"forcedBlink",-1);xe(this,"look",null);xe(this,"talkPhase",0);xe(this,"head",new Ft);xe(this,"lean",0);this.face=mh(e)}get expressionName(){return this.expression}get isWaving(){return this.waveTime>=0}get blinkProgress(){return this.faceState.blinkL}setExpression(e){let t=e==="neutral"?"idle":e;this.persistent=t,this.play(t,1/0)}play(e,t){let n=e==="neutral"?"idle":e;this.expression=n,this.expressionLeft=t??ug[n]??1/0,n==="greeting"&&this.wave(),n==="happy"&&this.hop(),n==="winking"&&this.tilt()}wave(){return this.isWaving?!1:(this.waveTime=0,this.expression!=="greeting"&&(this.expression="greeting",this.expressionLeft=gh+.5),!0)}hop(){this.hopTime=0}tilt(){this.tiltTime=0}blink(){this.blinkTime=0}lookAt(e,t,n=1.6){this.look={x:e,y:t,left:n}}setBlink(e){let t=ze.clamp(e,0,1);this.faceState.blinkL=this.faceState.blinkR=t,this.forcedBlink=t,this.face.apply(this.faceState,this.gaze,0)}reset(){this.eyeMotion.reset(),this.gaze.set(0,0),this.look=null,this.head.set(0,0,0),this.lean=0,this.waveTime=this.hopTime=this.tiltTime=this.blinkTime=this.forcedBlink=-1,this.persistent=this.expression="idle",this.expressionLeft=1/0,Object.assign(this.faceState,Vo),this.face.apply(this.faceState,this.gaze,0)}update(e,t,n,s){e=Math.min(Math.max(e,0),.1);let r=I=>1-Math.exp(-e*I);Number.isFinite(this.expressionLeft)&&(this.expressionLeft-=e,this.expressionLeft<=0&&(this.expression=this.persistent,this.expressionLeft=1/0));let a=this.expression;this.eyeMotion.update(e,s,n);let o={...Vo,...cg[a]},c=0;a==="talking"&&!s&&(this.talkPhase+=e*(7.5+Math.sin(t*1.7)*2),c=.18+.78*Math.abs(Math.sin(this.talkPhase)*(.65+.35*Math.sin(this.talkPhase*.37+1))),o.mouthOpen=c,o.mouthWidth=1.1-c*.45),(a==="greeting"||a==="happy")&&(o.glow*=1+Math.sin(t*6)*.03);let l=r(a==="talking"?22:9);for(let I of Object.keys(o))I==="blinkL"||I==="blinkR"||(this.faceState[I]+=(o[I]-this.faceState[I])*l);let u=this.eyeMotion.blinkProgress;if(this.blinkTime>=0){this.blinkTime+=e;let I=this.blinkTime/.32;u=Math.max(u,I<.45?ze.smootherstep(I,0,.45):1-ze.smootherstep(I,.55,1)),I>=1&&(this.blinkTime=-1)}this.forcedBlink>=0&&(u=this.forcedBlink,this.forcedBlink=-1),s&&(u=0),this.faceState.blinkL=this.faceState.blinkR=u;let[h,f]=hg[a]??[0,0];this.look&&(h=this.look.x,f=this.look.y,this.look.left-=e,this.look.left<=0&&(this.look=null));let p=s?new he:this.eyeMotion.gaze.clone().multiplyScalar(2.2).add(new he(h,f));this.gaze.lerp(p,r(h||f?6:4)),this.face.apply(this.faceState,this.gaze,t);let g=s?0:Math.sin(t*1.7),y=s?0:g*.018;if(this.hopTime>=0){this.hopTime+=e;let I=this.hopTime;y+=s?0:Math.abs(Math.sin(I*Math.PI/.38))*.12*(1-ze.smoothstep(I,.5,.76)),I>=.76&&(this.hopTime=-1)}this.lean=ze.lerp(this.lean,s?0:Math.sin(t*.75)*.018,r(3));let m=Math.sin(t*.9)*.03;a==="thinking"&&(m=.15),a==="winking"&&(m=-.1),this.tiltTime>=0&&(this.tiltTime+=e,m+=Math.sin(Math.min(1,this.tiltTime/1.4)*Math.PI)*.16,this.tiltTime>=1.4&&(this.tiltTime=-1)),s&&(m=0);let d=r(5);this.head.y=ze.lerp(this.head.y,s?0:n.x*.16+this.gaze.x*.06,d),this.head.x=ze.lerp(this.head.x,s?0:-n.y*.09-(a==="thinking"?.1:0)+c*.03,d),this.head.z=ze.lerp(this.head.z,m,r(4));let S=0,E=0,M=0,A=0,T=0,C=this.waveTime;if(this.waveTime>=0){this.waveTime+=e;let I=this.waveTime,_=gh;S=ze.smootherstep(I,0,.58)*(1-ze.smootherstep(I,_-.6,_)),E=ze.smootherstep(I,0,.72)*(1-ze.smootherstep(I,_-.72,_));let b=ze.smootherstep(I,.5,.68)*(1-ze.smootherstep(I,1.5,1.68)),R=1-ze.clamp((I-.55)/1.1,0,1)*.35;if(M=Math.sin((I-.55)*Math.PI*2*2.2)*b*R,!s){let O=ze.smootherstep(I,0,.45)*(1-ze.smootherstep(I,1.6,_));A=-Math.sin(ze.clamp(I/.22,0,1)*Math.PI)*.035+Math.sin(ze.clamp((I-.22)/.4,0,1)*Math.PI)*.05,T=O*.14+Math.sin((I-.55)*Math.PI*2*1.1)*O*.03}I>=_&&(this.waveTime=-1)}return{expression:a,reduced:s,breathe:g,bodyY:y+A,lean:this.lean,headYaw:this.head.y,headPitch:this.head.x,headTilt:this.head.z+T,waveTime:C>=0?this.waveTime:-1,waveAmount:S,waveElbow:E,waveSway:M,talk:c}}};var xh="data:image/webp;base64,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";var an={blue:"#2b26fb",navy:"#1b2170",yellow:"#ffd51c",red:"#ea1e24",white:"#f6f8fc",graphite:"#4a5263",ledBlue:"#3d6bff",ledYellow:"#ffd23a"},fl=class{place(e,t,n=[0,0,0],s=[0,0,0],r){return t.position.set(n[0],n[1],n[2]),t.rotation.set(s[0],s[1],s[2]),r&&t.scale.set(r[0],r[1],r[2]),e.add(t),t}mesh(e,t,n,s,r,a){return this.place(e,new rt(t,n),s,r,a)}sphere(e,t,n,s,r){return this.mesh(e,new zi(t,40,28),n,s,void 0,r)}cylinder(e,t,n,s,r,a,o=t){return this.mesh(e,new kn(t,o,n,48),s,r,a)}capsule(e,t,n,s,r,a){return this.mesh(e,new As(t,n,8,20),s,r,a)}torus(e,t,n,s,r,a,o=Math.PI*2){return this.mesh(e,new Ps(t,n,14,64,o),s,r,a)}box(e,t,n,s,r,a){return this.mesh(e,new ko(t[0],t[1],t[2],4,n),s,r,a)}lathe(e,t,n,s,r){let a=t.map(([o,c])=>new he(o,c)).reverse();return this.mesh(e,new Cs(a,56),n,s,void 0,r)}};function pl(i,e,t,n,s=80,r=56){let a=new zi(1,s,r),o=a.attributes.position,c=l=>Math.sign(l)*Math.abs(l)**(2/n);for(let l=0;l<o.count;l++)o.setXYZ(l,i*c(o.getX(l)),e*c(o.getY(l)),t*c(o.getZ(l)));return a.computeVertexNormals(),a}var ml=(i,e,t,n)=>(s,r)=>t*Math.max(0,1-Math.abs(s/i)**n-Math.abs(r/e)**n)**(1/n);function gl(i,e){let t=e.cx??0,n=96,s=18,r=2/(e.exponent??4),a=[t,e.cy,i(t,e.cy)+e.lift],o=[.5,.5],c=[];for(let u=1;u<=s;u++)for(let h=0;h<n;h++){let f=h/n*Math.PI*2,p=u/s,g=p*Math.sign(Math.cos(f))*Math.abs(Math.cos(f))**r,y=p*Math.sign(Math.sin(f))*Math.abs(Math.sin(f))**r,m=t+g*e.halfWidth,d=e.cy+y*e.halfHeight;a.push(m,d,i(m,d)+e.lift),o.push(.5+g*.5,.5+y*.5);let S=1+(u-1)*n+h,E=1+(u-1)*n+(h+1)%n;u===1?c.push(0,S,E):c.push(S-n,S,E,S-n,E,E-n)}let l=new Rt;return l.setAttribute("position",new je(a,3)),l.setAttribute("uv",new je(o,2)),l.setIndex(c),l.computeVertexNormals(),l}function yh(){return{shell:new Jt({color:an.white,roughness:.24,clearcoat:1,clearcoatRoughness:.08}),blue:new Jt({color:an.blue,roughness:.3,clearcoat:.8,clearcoatRoughness:.15}),navy:new Jt({color:an.navy,roughness:.32,metalness:.15,clearcoat:.6}),yellow:new Jt({color:an.yellow,roughness:.3,clearcoat:.8}),graphite:new Vt({color:an.graphite,roughness:.36,metalness:.35}),rubber:new Vt({color:"#2a2f3a",roughness:.75,metalness:.05}),glass:new Jt({color:"#cfe3ff",roughness:.05,transmission:0,clearcoat:1,metalness:.1}),ledBlue:new Kt({color:an.ledBlue,toneMapped:!1}),ledYellow:new Kt({color:an.ledYellow,toneMapped:!1}),ledCyan:new Kt({color:"#46dcff",toneMapped:!1})}}function Xo(i,e=1){let t=new Kt({color:"#1d4fd8",toneMapped:!1});typeof document<"u"&&new Ds().load(xh,s=>{s.colorSpace=At,s.repeat.set(e,e),s.offset.set((1-e)/2,(1-e)/2),t.map=s,t.color.set("#ffffff"),t.needsUpdate=!0});let n=new rt(new Rs(i,56),t);return n.name="logo",n}function vh(i,e,t,n=512,s=160){if(typeof document>"u")return null;let r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,n,s),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=`900 ${Math.round(s*.62)}px "Be Vietnam Pro", "Segoe UI", system-ui, sans-serif`,a.fillText(i,n/2,s*.54,n*.9);let o=new Es(r);return o.colorSpace=At,o.anisotropy=4,o}var Wo=class{constructor(e){xe(this,"group",new tt);xe(this,"controller");xe(this,"kit",new fl);this.controller=new Go(e)}get expressionName(){return this.controller.expressionName}get isWaving(){return this.controller.isWaving}get blinkProgress(){return this.controller.blinkProgress}setExpression(e){this.controller.setExpression(e)}play(e,t){this.controller.play(e,t)}wave(){return this.controller.wave()}hop(){this.controller.hop()}tilt(){this.controller.tilt()}blink(){this.controller.blink()}lookAt(e,t,n){this.controller.lookAt(e,t,n)}setBlink(e){this.controller.setBlink(e)}resetPose(){this.controller.reset(),this.pose(this.controller.update(0,0,{x:0,y:0},!0),0,!1)}update(e,t,n,s,r=!1){this.pose(this.controller.update(e,t,n,s),t,r)}};var xl={headScale:1,legExtra:0,armExtra:0,torsoFullness:1,limbScale:1,footScale:1},dg={reference:xl,brand:xl,"option-c":{...xl,headScale:.86,legExtra:.24,armExtra:.08},"option-c-refined":{headScale:.86,legExtra:.2,armExtra:.08,torsoFullness:1.1,limbScale:1.18,footScale:1.1}},ln={y:3.44,a:1.12,b:1,c:.98,p:2.5},_h={cy:-.15,halfWidth:.99,halfHeight:.62},ts=.2,bh=ml(ln.a,ln.b,ln.c,ln.p),Yo=[[0,1.08],[.2,1.075],[.36,1.04],[.47,.96],[.53,.84],[.55,.7],[.54,.54],[.5,.36],[.44,.18],[.38,.06],[.3,0],[.15,-.03],[0,-.04]],fg=.78,pg=i=>{for(let e=0;e<Yo.length-1;e++){let[t,n]=Yo[e],[s,r]=Yo[e+1];if(i<=n&&i>=r)return ze.lerp(t,s,(n-i)/(n-r))}return 0},mg={reference:{},brand:{led:"#a9d4ff",glowColor:"#2f5cff",iris:["#5aa8ff","#2448f5","#0b1478"]},"option-c":{ledStyle:!0,led:"#7fd2ff",glowColor:"#1f6bff",iris:["#4aa0ff","#1a4fe0","#08166a"],eyeR:.265,cheekX:.7,cheekY:-.3,mouthScale:1.05},"option-c-refined":{ledStyle:!0,led:"#7fd2ff",glowColor:"#1f6bff",iris:["#4aa0ff","#1a4fe0","#08166a"],eyeR:.265,cheekX:.7,cheekY:-.3,mouthScale:1.05}},qo=class extends Wo{constructor(t="reference",n={}){super({..._h,...mg[t]});this.style=t;xe(this,"head",new tt);xe(this,"torso",new tt);xe(this,"arms",[new tt,new tt]);xe(this,"elbows",[new tt,new tt]);xe(this,"wrists",[new tt,new tt]);xe(this,"legs",[new tt,new tt]);xe(this,"heroPose");xe(this,"hero",0);xe(this,"fingers",[[],[]]);xe(this,"thumbs",[]);xe(this,"turnSignals",[]);xe(this,"wasWaving",!1);xe(this,"proportions");let s=this.proportions={...dg[t],...n},r=s.legExtra,a=s.legExtra/2,o=L=>-.45-a+(L+.45)*(.43+a)/.43,c=this.kit,l=yh(),u=t!=="reference",h=t.startsWith("option-c"),f=t==="option-c-refined",p=s.torsoFullness,g=s.limbScale,y=1+(g-1)*.45,m=fg*(1+(p-1)*.6);this.heroPose=h;let d=l.shell,S=new Jt({color:"#e4ecf7",roughness:.2,metalness:.1,clearcoat:1,clearcoatRoughness:.06}),E=u?l.navy:l.graphite,M=u?d:l.graphite,A=h?l.navy:u?l.blue:new Vt({color:"#465062",roughness:.5,metalness:.2}),T=u?l.navy:new Vt({color:"#0c2350",roughness:.3,metalness:.3}),C=u?l.ledYellow:l.ledCyan,I=u?l.blue:l.ledBlue;this.group.add(this.head,this.torso,...this.arms,...this.legs),this.head.position.y=ln.y-ln.b+r+ln.b*s.headScale,this.head.scale.setScalar(s.headScale),c.mesh(this.head,pl(ln.a,ln.b,ln.c,ln.p),d),c.mesh(this.head,gl(bh,{..._h,lift:.012}),this.controller.face.material).name="face";let _=.8,b=bh(0,_);if(h){let L=c.place(this.head,new tt,[0,.86,.4],[-.62,0,0]);if(c.box(L,[.64,.14,.36],.065,l.navy),c.box(L,[.46,.05,.22],.025,l.ledCyan,[0,.065,.03]),f)for(let N of[-1,1]){let k=c.place(this.head,new tt,[N*.84,.56,-.2],[-.2,0,N*-.9]);c.sphere(k,1,d,[0,.02,0],[.11,.2,.38]),c.sphere(k,1,l.yellow,[.035,.08,.02],[.085,.13,.3])}else for(let N of[-1,1]){let k=c.place(this.head,new tt,[N*.72,.74,-.12],[-.35,N*.35,N*-.7]);c.mesh(k,new kn(.06,.2,.58,32),d,[0,.26,0],void 0,[1,1,.32]),c.mesh(k,new kn(.05,.17,.54,32),l.yellow,[0,.27,.035],void 0,[1,1,.22])}}else if(u){let L=c.place(this.head,new tt,[0,.97,-.02]);c.cylinder(L,.05,.12,l.navy,[-.2,-.04,0]),c.cylinder(L,.05,.12,l.navy,[.2,-.04,0]),c.box(L,[.78,.27,.24],.06,l.blue,[0,.14,0]);let N=vh("T\u1EACP L\xC1I",an.blue,"#ffffff"),k=new Kt({map:N,color:N?"#ffffff":an.blue,toneMapped:!1});c.mesh(L,new pn(.66,.19),k,[0,.14,.121]),c.mesh(L,new pn(.66,.19),k,[0,.14,-.121],[0,Math.PI,0]),c.box(L,[.8,.035,.26],.015,l.yellow,[0,.29,0])}else c.capsule(this.head,.07,.36,T,[0,_-.01,b-.03],[0,0,Math.PI/2]),c.capsule(this.head,.05,.32,C,[0,_,b-.012],[0,0,Math.PI/2]);if(f){let L={width:.34,height:.41,depth:.16,p:2.4},N=ml(L.width,L.height,L.depth,L.p),k=new Jt({color:"#eef3fb",roughness:.18,clearcoat:1,clearcoatRoughness:.05});for(let H of[-1,1]){let J=c.place(this.head,new tt,[H*1,-.17,-.05],[0,H*Math.PI/2,0]);c.mesh(J,pl(L.width,L.height,L.depth,L.p),d);let V=(oe,ve,Fe,Ye)=>c.mesh(J,gl(N,{cy:0,halfWidth:oe,halfHeight:ve,lift:Fe,exponent:2.3}),Ye);V(.27,.33,.006,l.navy),V(.245,.305,.01,l.ledBlue),V(.222,.282,.014,k);let se=l.ledYellow.clone();this.turnSignals.push(se),V(.035,.11,.019,se)}}else for(let L of[-1,1]){let N=c.place(this.head,new tt,[L*1,-.18,.04],[0,L*(Math.PI/2-.5),0]);c.cylinder(N,.44,.26,d,[0,0,0],[Math.PI/2,0,0]),c.cylinder(N,.36,.04,T,[0,0,.125],[Math.PI/2,0,0]),c.torus(N,h?.35:.315,.045,h?l.navy:I,[0,0,.14]);let k=(u?l.ledYellow:l.ledCyan).clone();this.turnSignals.push(k),c.torus(N,h?.29:.315,h?.03:.017,k,[0,0,.168]),c.sphere(N,h?.27:.255,u?l.navy:S,[0,0,.13],[1,1,.32]),h&&c.place(N,Xo(.19,.62),[0,0,.218])}c.cylinder(this.group,.21,.2,E,[0,2.43+r,0]),c.torus(this.group,.205,.024,l.ledBlue,[0,2.46+r,0],[Math.PI/2,0,0]),this.torso.position.y=1.3+r;let R=L=>pg(L)*p;c.lathe(this.torso,Yo.map(([L,N])=>[L*p,N]),d,[0,0,0],[1,1,m]);let O=(L,N)=>{let k=R(N),H=m*Math.sqrt(Math.max(0,k*k-L*L)),J=(R(N+.02)-R(N-.02))/.04;return{z:H,yaw:Math.atan2(L/(k*k),H/(m*k)**2),pitch:Math.atan(J*m)}};{let{z:N}=O(0,.68);c.cylinder(this.torso,.245,.1,h?l.navy:u?l.blue:l.ledBlue,[0,.68,N-.03],[Math.PI/2,0,0]),c.cylinder(this.torso,.225,.02,T,[0,.68,N+.021],[Math.PI/2,0,0]),c.torus(this.torso,.222,h?.02:.016,h?l.ledCyan:C,[0,.68,N+.022]),c.place(this.torso,h?Xo(.2,.62):Xo(.2),[0,.68,N+.033]).name="chest-logo"}{let{z:N,pitch:k}=O(0,.93);c.capsule(this.torso,.026,.13,h?l.ledBlue:C,[0,.93,N-.006],[k,0,Math.PI/2])}for(let L of[-1,1]){let N=L*.37*p,k=.8,{z:H,yaw:J}=O(N,k);c.capsule(this.torso,.022,.1,C,[N,k,H-.008],[0,J,L*.55])}for(let L of[-1,1])c.sphere(this.torso,.14*y,E,[L*.53*p,.84,0]);h?(c.cylinder(this.group,.41*p,.17,l.navy,[0,1.3+r,0],void 0,.37*p).scale.z=.8*(1+(p-1)*.6),c.capsule(this.group,.028,.22,l.ledBlue,[0,1.31+r,.34*p*(1+(p-1)*.6)],[0,0,Math.PI/2])):c.cylinder(this.group,.25,.14,E,[0,1.27+r,0]),c.sphere(this.group,.37,d,[0,1.19+r,0],[p,.6,.82*p]);for(let L=0;L<2;L++){let N=L===0?-1:1,k=this.arms[L];k.position.set(N*(.71+.55*(p-1)),2.12+r,0),k.rotation.z=N*ts,c.sphere(k,.21*y,d,[0,0,0],[1,1.08,1]),h&&c.torus(k,.215,.03,l.yellow,[0,.01,0],[0,Math.PI/2,-N*.5],Math.PI*.75),c.capsule(k,.024,.09,C,[N*.2,-.05,0]),c.capsule(k,.125*y,.05+s.armExtra,d,[0,-.2-s.armExtra/2,0]);let H=this.elbows[L];H.position.y=-.34-s.armExtra,k.add(H),c.sphere(H,.115,E),c.lathe(H,[[0,-.02],[.11,-.03],[.13,-.08],[.155,-.25],[.165,-.37],[.15,-.44],[.1,-.475],[0,-.485]].map(([se,oe])=>[se*y,oe]),d),u&&c.torus(H,.158,.03,h?l.navy:l.blue,[0,-.42,0],[Math.PI/2,0,0]),c.capsule(H,.024,.1,C,[N*.158,-.27,0],[0,0,-N*.06]);let J=this.wrists[L];J.position.y=-.5,H.add(J),c.sphere(J,.08,E),c.box(J,[.24,.2,.13],.06,M,[0,-.12,0]),c.box(J,[.17,.14,.02],.009,u?l.navy:A,[0,-.12,-.062]).name="palm";for(let se=0;se<4;se++){let oe=c.place(J,new tt,[(se-1.5)*.056,-.21,-.015],[.32,0,(se-1.5)*-.07]);c.capsule(oe,.032,.085,M,[0,-.06,0]),this.fingers[L].push(oe)}let V=c.place(J,new tt,[-N*.11,-.08,.02],[0,0,-N*.7]);c.capsule(V,.038,.09,M,[0,-.065,0]),this.thumbs.push(V)}for(let L=0;L<2;L++){let N=L===0?-1:1,k=this.legs[L];k.position.set(N*.26*(1+(g-1)*.55),1.14+r,0),k.rotation.z=N*.16,c.sphere(k,.13*g,E),c.capsule(k,.165*g,.14+a,d,[0,-.25-a/2,0]),c.sphere(k,.125*g,E,[0,-.43-a,0]),c.lathe(k,[[0,-.45],[.13,-.46],[.15,-.55],[.19,-.72],[.215,-.82],[.17,-.87],[0,-.88]].map(([J,V])=>[J*g,o(V)]),d),h&&(c.torus(k,.172*g,.028,l.yellow,[0,o(-.6),0],[Math.PI/2,0,0]),c.torus(k,.2*g,.02,l.ledBlue,[0,o(-.76),0],[Math.PI/2,0,0]));let H=c.place(k,new tt,[0,-.92-s.legExtra+.25*(s.footScale-1),0],[0,0,-N*.16],[s.footScale,s.footScale,s.footScale]);c.sphere(H,1,d,[0,-.02,.1],[.32,.24,.46]),c.sphere(H,1,A,[0,-.17,.1],[.33,.08,.47]),c.capsule(H,.028,.22,h?l.yellow:C,[0,.1,.49],[0,0,Math.PI/2]),h&&c.capsule(H,.02,.3,l.ledBlue,[0,-.13,.5],[0,0,Math.PI/2])}}setGreetingPose(t,n=0,s=t){let r=ze.smootherstep(n,.5,.68)*(1-ze.smootherstep(n,1.5,1.68)),a=1-ze.clamp((n-.55)/1.1,0,1)*.35,o=(n-.55)*Math.PI*2*2.2,c=Math.sin(o)*r*a,l=Math.sin(o-.7)*r*a;this.arms[1].rotation.set(-t*.24,0,ts+t*(.98+l*.06)),this.elbows[1].rotation.set(-s*.08,s*Math.PI,s*(1.57+c*.28),"ZXY"),this.wrists[1].rotation.set(0,0,0)}pose(t,n,s){this.torso.scale.set(1+t.breathe*.006,1+t.breathe*.012,1+t.breathe*.006),this.group.position.y=t.bodyY,this.group.rotation.z=t.lean,this.head.rotation.set(t.headPitch,t.headYaw,t.headTilt);let r=this.controller.gaze.x;this.turnSignals.forEach((h,f)=>{let g=(f===0?-r:r)>.55&&!t.reduced?Math.sin(n*Math.PI*3)>0?1.35:.25:1;h.color.set(this.style!=="reference"?an.ledYellow:"#46dcff").multiplyScalar(g)});let a=this.heroPose&&!s?1:0;this.hero+=(a-this.hero)*.12;let o=this.hero,c=t.reduced?0:t.breathe*.025;t.waveTime>=0?(this.setGreetingPose(t.waveAmount,t.waveTime,t.waveElbow),this.wasWaving=!0):(this.wasWaving&&(this.setGreetingPose(0),this.wasWaving=!1),this.arms[1].rotation.set(-.42*o,0,ts+c-.12*o),this.elbows[1].rotation.set(-2.05*o,0,-.25*o),this.wrists[1].rotation.set(.35*o,0,0)),this.arms[0].rotation.set(.12*o,0,-ts-c-.58*o),this.elbows[0].rotation.set(-.2*o,0,1.4*o),this.fingers.forEach((h,f)=>{let p=f===1&&this.isWaving?0:o;h.forEach(g=>{g.rotation.x=.32+1.35*p})});let l=this.isWaving?0:o;this.thumbs[1].position.set(-.11+.05*l,-.08-.14*l,.02-.07*l),this.thumbs[1].rotation.set(0,0,.7*(1-l));let u=s&&!t.reduced?Math.sin(n*8)*.42:0;this.legs.forEach((h,f)=>h.rotation.x=ze.lerp(h.rotation.x,f===0?u:-u,.2)),s&&!t.reduced&&(this.arms[0].rotation.x=-u*.75,this.isWaving||(this.arms[1].rotation.x=u*.75),this.group.position.y=Math.abs(Math.sin(n*8))*.055)}resetPose(){super.resetPose(),this.wasWaving=!1,this.hero=0,this.group.position.y=0,this.group.rotation.set(0,0,0),this.torso.scale.set(1,1,1),this.head.rotation.set(0,0,0),this.legs.forEach(t=>t.rotation.x=0),this.arms.forEach((t,n)=>t.rotation.set(0,0,n===0?-ts:ts)),this.elbows.forEach(t=>t.rotation.set(0,0,0)),this.wrists.forEach(t=>t.rotation.set(0,0,0))}};var Zo='<svg class="hpo-robot-fallback" viewBox="0 0 140 200" aria-hidden="true"><g fill="none" stroke-linecap="round"><path d="M50 152v30m40-30v30M34 110l-12 34m96-34 12 34" stroke="#d5dbe5" stroke-width="19"/><path d="M50 152v30m40-30v30M34 110l-12 34m96-34 12 34" stroke="#f3f4f6" stroke-width="15"/></g><g fill="#1b2a5c"><rect x="40" y="172" width="20" height="7" rx="3.5"/><rect x="80" y="172" width="20" height="7" rx="3.5"/></g><g fill="#f3f4f6" stroke="#d5dbe5" stroke-width="2"><rect x="37" y="98" width="66" height="52" rx="22"/><rect x="18" y="20" width="104" height="80" rx="36"/></g><rect x="26" y="29" width="88" height="62" rx="25" fill="#d9a440"/><rect x="28" y="31" width="84" height="58" rx="23" fill="#03050b"/><g fill="#eef7ff"><circle cx="55" cy="58" r="8"/><circle cx="85" cy="58" r="8"/></g><g fill="#1b2a5c"><rect x="10" y="44" width="10" height="28" rx="5"/><rect x="120" y="44" width="10" height="28" rx="5"/><circle cx="34" cy="106" r="9"/><circle cx="106" cy="106" r="9"/><circle cx="70" cy="120" r="13"/></g><circle cx="70" cy="120" r="8" fill="#d6b25a"/><rect x="40" y="138" width="60" height="7" rx="3.5" fill="#d6b25a"/></svg>',ns=class{constructor(e,t){this.host=e;xe(this,"renderer");xe(this,"scene",new ii);xe(this,"camera",new St(35,1,.1,60));xe(this,"robot");xe(this,"lost",!1);xe(this,"onRestore",()=>{});xe(this,"observer");xe(this,"events",new AbortController);xe(this,"shadow");xe(this,"environment");e.innerHTML=`${Zo}<canvas aria-hidden="true"></canvas>`;let n=e.querySelector("canvas");this.renderer=new Oo({canvas:n,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.toneMapping=qr,this.renderer.toneMappingExposure=.95,this.camera.position.set(0,2.55,8.9),this.camera.lookAt(0,2.3,0),this.robot=new qo("brand");let s=new Lt({transparent:!0,depthWrite:!1,uniforms:{strength:{value:.4}},vertexShader:"varying vec2 shadowUv; void main() { shadowUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 shadowUv; uniform float strength; void main() { float r=length((shadowUv-.5)*2.0); float alpha=pow(1.0-smoothstep(0.0,1.0,r),1.3)*strength; gl_FragColor=vec4(.06,.11,.25,alpha); }"});this.shadow=new rt(new pn(2.55,1.85),s),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.set(.1,-.015,.1),this.scene.add(this.shadow);let r=new ji(this.renderer);this.environment=r.fromScene(new zo,.04).texture,r.dispose(),this.scene.environment=this.environment,this.scene.environmentIntensity=.9,this.scene.add(this.robot.group,new Us("#eef6ff","#8a9bb5",1.4));let a=new Vi("#fff6ea",2.6);a.position.set(-3,7,5);let o=new Vi("#8fbaff",2.2);o.position.set(4,4,-3),this.scene.add(a,o),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),n.addEventListener("webglcontextlost",c=>{c.preventDefault(),this.lost=!0,e.classList.remove("is-ready")},{signal:this.events.signal}),n.addEventListener("webglcontextrestored",()=>{this.lost=!1,this.resize(),e.classList.add("is-ready"),this.onRestore()},{signal:this.events.signal}),this.resize(),e.classList.add("is-ready")}resize(){let e=this.host.clientWidth,t=this.host.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.render())}render(){let e=Math.max(0,this.robot.group.position.y);this.shadow.scale.setScalar(1+e*2),this.shadow.material.uniforms.strength.value=.4-e*.6,this.lost||this.renderer.render(this.scene,this.camera)}dispose(){this.events.abort(),this.observer.disconnect();let e=new Set,t=new Set;this.scene.traverse(n=>{n instanceof rt&&(e.add(n.geometry),(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>t.add(s)))}),e.forEach(n=>n.dispose()),t.forEach(n=>{Object.values(n).forEach(s=>{s instanceof bt&&s.dispose()}),n.dispose()}),this.environment.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.host.classList.remove("is-ready"),this.host.innerHTML=Zo}};var Ko=class{constructor(){xe(this,"target",new he);xe(this,"heading",0);xe(this,"walking",!1);xe(this,"rest",4);xe(this,"travelTime",0);xe(this,"speedMultiplier",1);xe(this,"greetingPending",!1)}snapToEdge(e,t,n){e.set(ze.clamp(e.x,0,t),ze.clamp(e.y,0,n));let s=[e.x,t-e.x,e.y,n-e.y];switch(s.indexOf(Math.min(...s))){case 0:e.x=0;break;case 1:e.x=t;break;case 2:e.y=0;break;case 3:e.y=n;break}}get speed(){return this.speedMultiplier}setSpeed(e){Number.isFinite(e)&&(this.speedMultiplier=ze.clamp(e,.5,2))}pause(e=5){(this.travelTime>0||this.walking)&&(this.greetingPending=!0),this.rest=e,this.travelTime=0,this.walking=!1}takeGreeting(){return!this.greetingPending||this.walking||Math.abs(Math.atan2(Math.sin(this.heading),Math.cos(this.heading)))>.08?!1:(this.greetingPending=!1,!0)}turnToward(e,t){let n=Math.atan2(Math.sin(e-this.heading),Math.cos(e-this.heading));return this.heading+=ze.clamp(n,-t*3.5,t*3.5),Math.abs(n)<.01}update(e,t,n,s,r,a=!0){if(r&&this.walking&&this.pause(),this.walking=!1,e=Math.min(e,.1),r){a&&this.turnToward(0,e);return}if(this.rest>0){this.turnToward(0,e)&&(this.rest-=e);return}this.snapToEdge(t,n,s),n===0?this.target.set(0,t.y<s?s:0):s===0?this.target.set(t.x<n?n:0,0):t.y===0&&t.x<n?this.target.set(n,0):t.x===n&&t.y<s?this.target.set(n,s):t.y===s&&t.x>0?this.target.set(0,s):this.target.set(0,0);let o=this.target.x-t.x,c=this.target.y-t.y,l=Math.hypot(o,c);if(l===0||this.travelTime>=3){this.pause(5);return}let u=Math.atan2(o,c),h=Math.atan2(Math.sin(u-this.heading),Math.cos(u-this.heading));if(this.heading+=ze.clamp(h,-e*3.5,e*3.5),Math.abs(h)>.35)return;let f=Math.min(l,e*60*this.speedMultiplier);f===l?t.copy(this.target):(t.x+=o/l*f,t.y+=c/l*f),this.travelTime+=e,this.walking=!0}};var Mh={type:"change"},vl={type:"start"},Eh={type:"end"},Jo=new Fi,Sh=new qt,gg=Math.cos(70*ze.DEG2RAD),vt=new U,Ot=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yl=1e-6,Qo=class extends Os{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.DOLLY,RIGHT:Gn.PAN},this.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Zt,this._lastTargetPosition=new U,this._quat=new Zt().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gi,this._sphericalDelta=new Gi,this._scale=1,this._panOffset=new U,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new U,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yg.bind(this),this._onPointerDown=xg.bind(this),this._onPointerUp=vg.bind(this),this._onContextMenu=Tg.bind(this),this._onMouseWheel=Mg.bind(this),this._onKeyDown=Sg.bind(this),this._onTouchStart=Eg.bind(this),this._onTouchMove=wg.bind(this),this._onMouseDown=_g.bind(this),this._onMouseMove=bg.bind(this),this._interceptControlDown=Ag.bind(this),this._interceptControlUp=Rg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mh),this.update(),this.state=ot.NONE}update(e=null){let t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ot:n>Math.PI&&(n-=Ot),s<-Math.PI?s+=Ot:s>Math.PI&&(s-=Ot),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=vt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Jo.origin.copy(this.object.position),Jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jo.direction))<gg?this.object.lookAt(this.target):(Sh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jo.intersectPlane(Sh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>yl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yl||this._lastTargetPosition.distanceToSquared(this.target)>yl?(this.dispatchEvent(Mh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ot/60*this.autoRotateSpeed*e:Ot/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;vt.copy(s).sub(this.target);let r=vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function xg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function yg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function vg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Eh),this.state=ot.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _g(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ot.DOLLY;break;case Gn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}break;case Gn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(vl)}function bg(i){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Mg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(i.preventDefault(),this.dispatchEvent(vl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Eh))}function Sg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Eg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ot.TOUCH_ROTATE;break;case Wn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Wn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ot.TOUCH_DOLLY_PAN;break;case Wn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(vl)}function wg(i){switch(this._trackPointer(i),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ot.NONE}}function Tg(i){this.enabled!==!1&&i.preventDefault()}function Ag(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wh(i,e,t,n,s,r,a,o,c){let l=document.createElement("dialog");l.id="hpo-robot-viewer",l.setAttribute("aria-labelledby","hpo-robot-title"),l.innerHTML=`
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
          <a class="hpo-enroll-cta" href="https://gateway.hpo.edu.vn/signup">
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
    </div>`,document.body.append(l);let u=l.querySelector(".hpo-model-stage"),h,f,p="",g=new Audio(e);g.id="hpo-robot-welcome-voice",g.preload="auto",l.append(g);let y=new he,m=l.querySelector("#hpo-robot-speed"),d=l.querySelector("#hpo-robot-speed-value"),S=l.querySelector("#hpo-robot-visible"),E=()=>{d.value=`${Number(m.value).toFixed(1)}\xD7`,m.setAttribute("aria-valuetext",`${Number(m.value).toFixed(1)} l\u1EA7n t\u1ED1c \u0111\u1ED9 b\xECnh th\u01B0\u1EDDng`)};m.value=String(s),E(),m.addEventListener("input",()=>{E(),r(Number(m.value))}),l.querySelector(".hpo-close").addEventListener("click",()=>l.close());let M=!1,A=T=>{let C=l.getBoundingClientRect();return T.clientX<C.left||T.clientX>C.right||T.clientY<C.top||T.clientY>C.bottom};return l.addEventListener("pointerdown",T=>{M=T.target===l&&A(T)}),l.addEventListener("click",T=>{M&&T.target===l&&A(T)&&l.close()}),l.addEventListener("close",()=>{g.pause(),g.currentTime=0,f?.dispose(),f=void 0,h?.dispose(),h=void 0,document.documentElement.style.overflow=p,i.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false"),(i.hidden?a:i).focus({preventScroll:!0}),t()}),l.querySelector("form").addEventListener("submit",T=>T.preventDefault()),l.querySelector(".hpo-wander-option input").addEventListener("change",T=>{n(!T.target.checked)}),S.addEventListener("change",()=>c(S.checked)),l.querySelector(".hpo-model-tools").addEventListener("click",T=>{let C=T.target.closest("button")?.dataset.action;if(!(!h||!f||!C)){if(C==="reset")f.reset();else if(C==="wave")matchMedia("(prefers-reduced-motion: reduce)").matches?h.robot.setGreetingPose(h.robot.arms[1].rotation.z>1?0:1):h.robot.wave();else{let I=h.camera.position.clone().sub(f.target);C==="left"||C==="right"?I.applyAxisAngle(new U(0,1,0),C==="left"?-.3:.3):I.setLength(ze.clamp(I.length()*(C==="in"?.85:1.15),f.minDistance,f.maxDistance)),h.camera.position.copy(f.target).add(I),f.update()}h.render()}}),{get isOpen(){return l.open},open(){if(!l.open){p=document.documentElement.style.overflow,S.checked=o(),l.showModal(),g.currentTime=0,g.play().catch(()=>{}),document.documentElement.style.overflow="hidden",i.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true");try{h=new ns(u),f=new Qo(h.camera,h.renderer.domElement),f.target.set(0,1.95,0),f.enablePan=!1,f.minDistance=5,f.maxDistance=17,f.minPolarAngle=.15,f.maxPolarAngle=Math.PI-.15,f.update(),f.saveState(),f.addEventListener("change",()=>h?.render()),h.onRestore=t,l.querySelectorAll("[data-action]").forEach(T=>{T.disabled=!1}),l.querySelector(".hpo-model-hint").textContent="K\xE9o \u0111\u1EC3 xoay \xB7 Cu\u1ED9n ho\u1EB7c ch\u1EE5m hai ng\xF3n \u0111\u1EC3 thu ph\xF3ng"}catch(T){console.warn("Kh\xF4ng th\u1EC3 m\u1EDF m\xF4 h\xECnh 3D.",T),l.querySelector(".hpo-model-hint").textContent="3D kh\xF4ng kh\u1EA3 d\u1EE5ng tr\xEAn tr\xECnh duy\u1EC7t n\xE0y. \u0110ang hi\u1EC3n th\u1ECB h\xECnh thay th\u1EBF.",l.querySelectorAll("[data-action]").forEach(C=>{C.disabled=!0})}t()}},tick(T,C,I){!l.open||!h||h.lost||(h.robot.update(T,C,y,I),h.render())},resetMotion(){h?.robot.resetPose()}}}var Th="data:image/webp;base64,UklGRkgjAABXRUJQVlA4WAoAAAAQAAAAvwAAvwAAQUxQSJMGAAAB8Ebbumnbtm3l7ytlcNq2bdu2bdu2bdu2bdv2nANLw+rlK1/+0TpbbbUsrxURE4BKB6z33YABAys9YOBPq0BR2xFX01lx5wWI9RWwTTaveOKOCPUlmGSQOyudffCkkPpCwJ20ahnvQkCNK2b52nOVsn89vWidCcb/ndXigCkgdRaxPY2VNu6MWG8neKpW8uPr7nRWjafX3WnVO+2/fZxevVPr7oTqnV53e3nFjPvWW8AypFfKfXGEGpPQq/ebtCoZv+oTg9aSaAgCAGvmXK3tAUBCFKkVCQGNUy235+VvJFb71WsPWHI6NMYgNSEhAMDMm5zxxmC2yL++ccaW0wNAiNLyJAQAEyx75tsjSDJbylWzZE6SI947Y8U+AIJKK9MAYIoNb/yeJHPKzhbplowkv7hxy4kBBG1VqkCvlS75C0lP2dliPScn+dvNS/QCQmhFQYCZDv+IpFlmi85mJD84aWZAQqtRAIvfPoT05Gzp2UgOuXh5QEIr0QBZ7xEnLbMGs5F8cT1AQquQAKzxDElz1qQnks+tDQRpCQFY/G7SzVmnlsnn1gJC9VQwxbWZzKzd7OQlU0O1YhGy32+kOevYMgftAcQqacSiL5DG2jbymXkQtDIBOHgIzVnjbvzbPkCoSMS095DGmjfysZkQqyAB635Lc9a+G39dHUGaTgS7kolFmJh2hUiTKfpcTTcWYiav7g1tKkW/x2nOYnTj4/2gTaTo+xjbWJRtfKwvtGkUk7zIxMJMfHEiaJMo+r3GxOJMfLoftCkEfR5nYoEmPt4H0gQS+j5OY5EmPt43SM/1wlVsY6G28SrEHgvYjYnFmrg7Qg8FrJHMy8WNGyD0iOjkPzGzYLP/OL1KD0jEg0ws2sQHEKX7Ag5kYuEmHoDQbYq5hmYvHfdhC4t2k4Rez9FYvMaXEaR7InZnYgEbt4F2i8qkP+VcQtmHTCraHQHX0FjExrMRukFljtHZy8jzyLlFuxZwHY2FbLwFXVOZY7R7KTFzaYQu4TomFrP5E9AuKOYc415O7mPnhHYu4BoaCzr5mQidEkzyN/eScv5lCtHOROxNY1Ebj0DojMjnXlr+cUQnAxZNzrJ2z4uKdhRxGlNhMfEcxA4Evb5mLq3Mb8YTaS9geXMWd+Y6CO1FnMZUXsnPQ2xHJL5PKy/jRwJpUMwyml5ezjQPtCFiZxoL3LgPYkPAA0xldjdCg8QvmUss8+s+AkAx2yh6ibmPnB0KBGzFzCI3boEARFzKVGaJFyACiudopfY4AgT9v2Mus8zP+kAUM4yll5lz9JTQiJ1pLHTjHoi9cCbbSq2NZ6FXL5xScqc0nFpyp/7ff//33//9968m7p69jDy7e6dOsTE5u7PRS8jZ6J7zGDul4Sy26yMG/jyaXj7Ov/00ZKSz3bPQSzDbdrtvuvZyC84905QTLjgs59LJPmaJCaefae4Fl1t3nZ32mBuKLu5JKx3j9uiyhEZVFYl4kFY2iXcjiKpqaNSGTotO+jtzyWQOmEIVPalYdVTO5ZJt1HJQ9GzE1kzlkrg1Ino64hKmUkm8BBE9LgFXMZVJ4lUI0nMQxXVMJdLGO6CCZhSNDzKVR+KDvVXQnCrhPqbSSLwvQNGsKriKyUvCE6+CKJpXFFcxezk4eTVU0MyiOIa0UjC2nQ0RNLcEbDCCqQwSR6yBIGj6gIXeo3n95czXF0dEFSMmuJm0ukvknf0RUE0FdhtMy3WWjd9vDwRUVQJme4RMXleeyEemRxRUOADbf0ua15Eb+dNmQEC1VTHBueNI89oxcuhpk0IVlQ/A/NeOIpPXiZvTbpgDCGiFEoD5rh9LplwXbiSfWhaIghapAVjwxjGkmbc+z0aOenRlIChaqAZg3su/IZlya8tGcvCpcwGqaLEagP57PUnSU/bW5DmRbHtt16kBDWjBGgEsc+pHJJnMW41bIslPTl8YQFC0aAkCYPEz3x1HMlvKrSKbZZLpwwuWDgCioJWHAEDm2/3xgWzMybJ7ddyzpczGgY/sM18AEBQtXzQCwOSrHHrnV852UzLL2ZvJczZLxnb9+4eOWm1yAIgqqEfRqADQd+5tz37wiyHs2D1ns2w5Z+96btfMcnZ26CN+fOqcreYfDwA0qqBWJYSIdqdadtsz7nj+gx+HOJt3+C+fPn/jSdstNpOiMYQgqGXRGBXt6ySzLLT2zqecds1tTz3x5icffDVowMBOD/r9o48++vCZp2696fzD9tpwkdkn6432JUYVVBoAVlA4II4cAAAQbQCdASrAAMAAPj0ai0OiIaEUeW50IAPEsQBnzzUu707/M+chZn8j+O/Zx309geXzzv/z/75+4f/A+YP+i/5HsQ/T36ufAJ+o/TC/tf/G9S389/tP/k/1nvMf7z/Se0f/A+oP/aP9d6YXsXftF7A/6+emz+33wl/uB+13wMfzz/Cf+P2AP//6gHAu9v/9u/J/9yfX/8Y+n/vv5Z6CX8b+5H5n+3fub7V/6LxP+P/+T6hH4x/Mf7x+Xnuc/Bd+lsX+z9BT2V+of5z/E/j/6b/8p6a/Xb2AP1K/1nlfeIT43/u/cC/lv9S/3H+G/Kj6Xf6H/yf5X8sPcr+Yf4P/p/5b93/oJ/k/9G/1v9p/z//m/w////9X3N+0H9tPY3/VhGYCIz4mx3sJSh5Bx2bivuInt5VdInsfQpgJy1QkydSvdUmjeFwgMfUMPu/UVTDMe+EtGLSB/lsMYe2VC1isqANv703DQM4/cGWlh92Wpd7Wsc9n2JqTyvGF7lRu6xEwClvHrYzwHGB7L1XquUx0LnDABTky8H2v/w8vBaquXN+IGPaZpUEALGPM3gOl4k/fpzvGQXNDv/f/7LZD7r70tpxgf+wJ5Pj6sEQPSEuJNodBJT0QFpaatCCtkoZpkhrOSykfFFf8cWGbAKOFQqGJATCjLU/Ht9xvityN6NbtmyskjLylAWeW72mQafDC6aQG36jhnVOLFbOpCqPOGoIbICY3Ipww1YHQ83Ep2Tu8/TUeieicvkma5TEXZ8adsYW+OUweOBYjMYSwMnbxOnm4c1n9Up8u9oE0/RXC1ieuUAXnMZJfDN/QqB4rsypD9wViJmkUosu2EAvJw2bz0rylZvwurK7tNZ0OtSH/FJwG3pyDpWC2tuqgLLPaPBjqZCIyQhjcIeThbkCSOuBchkF9ux6aXZieDYJoGDikiZ8GriPP6lIxtlwqMqKY8j65VUurLtwJdv2m2LYa//3LLJqMa4jCjoUvioULsSK9QRWkYRhLBO7fpfvF9iJcu+6b9xdGDxuyM+/Msv9Uzz44+AL1En+NuUTpwkCkoxWuco2LO2VGT8gZMTXfcDogQ0FQH9dOXIrkoylEYoi9HvG7X0rY/2eXXm+a+PgGxjuKDfCYpIe94yPBaGYhTbqf1fNlgYQOPrhJyqalernUCpVy9zGx4xZsAAD+/qU2JM11ocNPWzAY/AilpCi9Mrft7GXHezMH0nWzfeH/5FPFEqjw9l3h+ff0Y/6oe47G4LcF2dYdZgMpo5EpRce0JklRNdAKo/sAuYxbAlAwJ1mGC7lo4xfHWyGFX3aRjC7tWhPuvd5+uF90vX9hA/XzLPabkZM6/2fy+tX76fWb/u5zllpWUKxuhVezKLgtc2xSClUk87a34bbOvSplfZ/5cfCN9PHyb/aD4//hiPuZC6lD7pXmeSDzgeifRRiRckQyo9LRYQH35EyFXdmDoItnsQpUgFbLzbZ/QrXeXyVrxPhJNSEw7GEadau7MaauRJ88mIi8068zgwpoDFLERB+W/28PEgs3qJIEbnmPg9sWDxTlfVzLTTQLnYN19Jxqo2NogAL2PjgQQtfV1EESp/AAHQqJDGyAR8fNlNZP3VWd2PwcdVU5/chv5/Zy7GT9KqKca2pi5+jH8gvHgy6PVMGHoDUJaE+PJ/DK73iqrzS6wa7vdVk+o5vvGPouDlsHJtnZLmrV6xcfrsRoiacwduyXhfA5PN/czSiwA1bpR6yTwrq8zpPJ+Q2WhSQG4ifgbtJqxLGu0sRNubv8FtZKQhVfnx+MJd7l19jMTf5Tf+e8Gnjhlcf9jfcgz8Yl/y9EvSyDT4iP6blKeE/lZk9fvnUMD6KTMgACC//zpq3znzvSMKchtqAORKNZ78Bt6BCwNvzt1nT7JZ/HxFzLvplQmcn0ho6QsU+q+V9t+lds2ExLWbII7fN5U1H8r9jjOxpurqjaXNY57Bhja8wLTJ+lneuKS62DGtSYVeVgaKbMbcnKR/Iz29Yn5kqUtWTmHk6Bm7pa/FOq90s8fQthfKaM95cVP2kPg9gO7hH2S/LD7sx7Nevvv5+qSAMQvfR7nL32W/521N/6KixEGi1GVEwQsRyma4j/FC/50ivdmUKWgZPwpPtlLLW+gTQQGlwY3T5dS9K3r5Ac6Zo3kS5dZYl+8yT5ti4jSEGn4aE274NnTkNxH0x07Qy5x3FAvt5AvGxCqjD/7tQtvOT42d0nUBaKUWfv2wZqXGBrV6dLAZgIygZazba+Z3dffAuyfhjmJ1Ry6ejOzoDdMcms6BPt856m4obAtoeIUvdimj+LlDVTucHixm+goU0mu3CF+tfikB2S3GZMEQHGtchgrutqTOJOj6WBuqxxX5bnCgrlCHM9H94qFLbi/7dn8GC+vbU0AKE+GF2c5ReFKNyxL+aVztB6Q01k8+C7+z+SbX7kOvB4z0kJrg489i0NS1VXH3c9Q8Y6oJ0nUkYVQYuylJFqkD0pG19rBDNTDR1dnpoTyxsHqvQLfKzh/I8f8BEOoxXsKOjwq4L1ra1excnZ9omdyXOStgLyKCkFB//YcVzkY+ok6GOjnBoY+FqVtPEdKoAjZyy//0ORCkCPSSidQKzhUuHn50+f4YgjrPoiHjMaw9sUZ1Vr/Dw7HG9NKK2R43fxut5qHLOjQm28Iii4jGpb/P9v8++uB3mIgjQUOl/GRkhQUnXI6UQk/4dUAtP3+c8PJWT3mHZ8PsMq0mQSQHPsecsDDi5c2xxcgu2OcOYdZf9uwMXoI4y8ekHEf5G6a1thK+MFxAx/r0+F4hG5lCwNo87gWa0A0SIa0BBQnQxmC/aG253mgE0Sqshd3modvk71giknvaLsJKleMWrUV7RamffSk6M1S0XuYpE/0zqJwrTrK4JP60xlkIvd7uW//s4kzbJZDzmLcegdsLGDK7aH6wG+GkkTVrn/cDLBb4d/LDSDuBlrH3SQKLNWcHLH5h6YClr0FRc+Myq7m0YTjqoqiOgany1QL2BOLoxc8TZUM9CgO3gS8qEiLQgb08pmq5Q+QakkqspbfhOKaeXWH5ewog2G/ZqoWKrD1i4VMIf0vbqUGWkPQswwBNbTnSBa88gP0LoMm0oRUin0fZVg5qsn/n+22vwT26KW9+CfAz/5P2ft6K1lZptDi6D1UUWNRC8k0+FDDAcrROx18KiaUBZDogbH/MktJMv2UZeAsk2xr9N8IkfUjbrOeEiLk6lXQv93ZlbpJvcevVnkfZp2gsJiQ3DoHUpvLni8QVIv2Xz5RsEGFhkLL0sc/0KMM7Vpg8Y7r8A2GjQeD3/BawMqNo9WXZpWWEtBDBYxEQ7EDWyIP2rJYZDyG/+v8T2h9+4sOaqu1EX1CuBXvVUaAK6jVCaOtipWCwqcsRjIskjCJIx507SNWucpEnmhEKUYKkXgU8nfd57CMV+QVKN9dsMSh5c/DdyxeEPnvaUyiqZv0fLAIzwxwKUdjKNm6INTQBhQX2IZgx5e+KyNl8IeGMVwf/HqW34UDlBN1tGni7lpHNU7JzlRA+oNBFKq6Ff/4Bt8DBoo3pq0fJZfDPNhsIIObU5nsMgWUMeLM9wYIof+1zVhl4AWqKwmiesI2u6wWHLj2qgFD4XO/JzcyvtDLb+c0d+uJEOKrAgA5A7fq499gsu0G51g+H/WzsrvfJ/z0iwh8ySvW27O2rrzIEvM+uddoioHq333TIv8fP64MCDW4+G9wu6tg9udMSwIP7edayD4jc/44zal0C84qQcd4nogotYhcnJFlpIoXpl+j3Aeqkqk9GW2pGNgAhyCcHLWOqXNfigHvyBQZ66kIuZ8fs5buw8zmjJ9GCdvwpcbSRZ/j2/r+z+IYNL+7wL3S4jr8Q8xtHdkFHzGZ784yTJvbTm6brF8C3TT+tKz/RvnaINj9DxwendRvov+DYfk3YrdstKFamjJNdgN/2rZ/5cF3pukwGUfNihVawY8tru+2PT++cWDp1F94TA96+yImKopHqzjLThjUh8l6hGisoeitns5oGbkqXqx0XuIdW7cb+eBF16tOtOCC5xhD7Tgt/AY/Xd26hY5DzpoUaAO00dqtrskRqwc5ajT7HllrET5NWmuU7xvnp3Df5CYpG1GwmevkZ71PUjLo/KhccuSD0zyqSX2wQwiUKr4xsu7VXsHvWZuu7wzsrETvEVIu2nywGvKJjj02AVAYvjc6+WvLWB/+ODvbW49W39EGCzVEUPkK/XN84fZAqQoZgrDO6ZQCmHwktn/0aQOh3EpoPkDyCtNbOLqGSeqGtg38b5VG3EvqXewjV5ezCV8FjZPJsvPayse+TYFsP2nt+Blqx/AgApsuOLIfWSsxWSIdvEwio/0ce1nEIkat2H/F5lh59Vz7R0CX+iXStmlQdwyWtAvtQ8TJ4eFbLLfGv96X/nooEU5Tu1l/zguyBrr+BT56cXZfRdl0MsO4fWNdusX+jHPOKjiLNJh5QIp8zZSVc/SsWubHaoNCcxSf5C85VOcgNtWmfZqxjcMD2tZKacCr988o2EpeDhUayW7Wim2fg4zg3IlavYbRJvVVqvKxyfeTb9EILM/dfIEZgBGvawKasEWAISNr3SIT6EzrOyokZ2PcCrCGeQ0D6kTPmLY5fgNUkOnlrKX5NLNXYNxwohHEmd+6sDmEU9DyKayxnReWCons0H4pbIvs+ticoDO0INipbUrkpt+aYicAvOC2IT667EretDNm+5zNb1laNJToDH+aaVPZMV0hW7rjU4e9l8rH+BW3FV4HyT76/CD7hfRwDSYt/AOND+4p9EmPw2Teuq/6y9fb58oOSJy6nPIWlZe0mlwMiWG67Y9SZrrRj8PVjyphzo+X//yDEzrn7XTmhZ05ooGzzmZrH2tr1/5j/181U7d6ukgl82Nr7SDyY6fV/VolhK9ckGQY1fLe7FVhPU/DAvQS+OkUJqzsp+HoeyBZlA6Az+RGMVc40EgrUxKEHOMvJaN0ibJmPbuprazP372j72vFqwF6RgrJeRvvBJWnFBvB7+mttEMySO1do9MUqFPr4LaatzQEbI1d1Y6YS/4l+zwfH96j3KXddS47r7p22RZmVLaJjADXCmbDefj+GuNBY6PPd4Ek8tHUziWcDCMjZNOGBH56YW7Mo/BFfGXI4JvIyJC1AAFfNRUDxrnEG0f9UDyXj1mmShbA4oPPBiBXfG92ZDD27aGIMXlJoeiVsQ2htbWVZ/47yBnt+5e18LzftM3RbIlpcYnXZgtSCGZTZpS0/cwCdeX7IIJ4ZxSijRe81vhhfoDtVXIgd76Rzd58PelONJ2ad0LdPuUPn3D4QyyoARxkwugNKgE6ehvqfftE68+Md0QJlHBt3xI/oSr+EcwnT6PCtusWsxhZcBNNfVZMlrHW/QgAGCm4wZSODUxglWV9vuoKNnbXorHhtTpM3ZrRrRojoZdhmR9eKeV4fxhg0ArOcRMXg1ZSTp8I9LYuoDrEfwBFDA32wq3yVb3TBNIn7H/0X1h1VEmzo960eEFOhoZxwm2X/qD81a7j+oQ93i+6hQhBK9k8MQKcu8NxFiQiKuygU7+hzHoIVDKfW8Bbx4X53z/4guRXOHwgH7cFCyn1OWHJco+czmzx9OD5uvXnQas1sk0gSikapp2jzYteF2Cnd8f2NVidNiF6ia/DbTB+LTV1hK6CpBNKrdVLRyp+Hs/j7f3XRLsGSkA3OIac3/GqvXke3mxpnayx7FcHBDeuT3JIYKnLZMOfUHO8aZh85WTIsJqGpRWS3miCqN+dSSnVjixlM5+Sind7xSatjcwb09Tw2+n9J4FjrwRyYVrd7c7hk2HeErhiZ3ORgvzIqzCoh56SMWiaXoA+nOOAHNREb70h8CMgMPpvtEJuPxZdVp5nyAqaDnbdH6fQ5nRrn2KIclGUC8ksTcAT4FE0YktCfYWfWeZpO8Dzo0XjlP+mQL6FoJIb8V6xuhq1sG6kJQl1NrIO2agAtBxxvOW1PKZFvvGjgpZWXjbjghsdRWcesEyC6Yj48ySToMqOJa9XTeQ2KrzlEuOvXqtI7gU8YTA3XrT4n0+pmmOTHNzkYIxtecz81tfA8/kTai7ho/Snw2ndoeGhsGdOUZygDA+Lwy/XdDcgW9xBkWncVgFR/LO9R+tQtWqd+b7zdeor+kYpOzaWHWhAJmWyKLJf6N0amYMZiaDwB8SfAIP2WHBvA0x+3pGDnEnh81Q+t4rNQOc1o0MPv8UqDxVDsyISa03ROM4iqMFzBdpcC75BM6xX3/tQh9EGxThOSigF8F3LKctPGPKhYKJDTWFIemqWHYq+Ka20mV4qJsTVi8l0JnvRCKMobnt/LkaWEkb5rCAMfVc0m+akLYF72njyWBWpyd+zTC79/6wKit3MU+dJRIMuAet/g4AIaTF3xe1a8eKlzXzsb7Px/uVtqv4zm3XQ1CxO7lj06tTeS/VYLFsL5SKYfk2+/gkE10/JoaIS/AbcezYuMIi1DrGze9/J502l/dySlqUdLKpUm9/pblxsD1+JcUUf42jvC4lQZbD5j8i+MYDyFeieExcx8OmHYOCL8ImNenl8T270tv6T/wdQ+lZt2uK72J7dqJBikvV0IzexSWm849KA4OGOXLLMqv2jfhKmjOWumDeP6IAhJEAeJgJCueKqQWdlVX7A9TLyVN0lSodaGFUMgDkTLltmW9KkXEKVzcF8+mZX2TYodBnnKJ1oFJbR1f00OZnfztCrkxgun1ZgiFr/nT5VTT+JQKJ+BDLz3BGTPmlh9796KT4J7V/92uXJfTxKgM20vcqmyuxDHGuqOOY9HSmpZx7r4B/fr/I8ufqTGtRM1oko/bXz2Rt+zhDadahh9zFxaPbN8QBbqyzRog3uFJMKfKRxdR91f5jmHfXbyHbu8gCMAxZEPPpv7xwttsOX5C80c/aOTDm9jHpAZ/E0GvCXsnQ0ujKLPhvglzCogfdONe+TwF3d3YN0AiXKxA47w1baF7b3kojujV+Z9yHsYabtzxPwI6GSeFqEhMM/OdZyrKw5sBnBtU+TXGDETeQ8VKPnxEHXfewYweFjzGZbdlu9TnSfBi3XZ4KSFvAhZFi0gk0JxDdSHQqrw3VZYnVDDLWH5qZz0G6LLX4SH1IPYwN+pwv8byKt52azswrbaqlgFK12/cSW+7PSEJ4K+S9t4XjIP4jzK8YnggfsY2YERJGLzYnyOvdftldyiECYKBQES4pCxeEw94fNspBke4tSo41YPeK+3RplAEdiNUiaeQZl/g5GzwR6RCIUVdRwZ8Mw74C2oWqxUMweHh4SRRZ/aLUaVWgWLOwk0kyt5FPT/FOsCtEFykaSmSzFQ3YWMsqwIL2zIWSo0aIoDv757GzkT/4WPztQ/sMEx/Jd6FEEhGY+/9UA2lz6j5vqTBqb65KdMw+J/DVLn18EzmFaaXmw5Mrm311TNbYtbh/3kRwf9a6Gg3KQ0LopBJdzvsNgDntlaDqtiPrDrrd1+BgCGWRjKdl0wtGDyfrvDme/u6Yy6PTBj/H38rrXO6+SL+DCsH9K0b8/bRK+HLmBxI6y+tfh44QKdIll7VOMU1DIFg2s8lAJQy5Q+L2gf5imdfo8AbbAeJGKqNvY/QRvv95kf/wBkhcsIA0JpTKE8N4H4+hG7tb/O0ENVlMDCp4SmcYRJRfQMYHi4Iv5S8nT9VQ1jHn5TjHIj1JrqlfYuqLT28Qx2zD5BND3FSOqZ6Jubg36VEjDyV8upYYHl+CxyUCAxoHVZKQCN+EODhuG4RsIe2mSrYaP0MXWkJVFu23FNtc8awfcHzDNggyYO9MGxnyWUQHzXlmPD16AFRIgW/ns7ryI8aH8xz0eIaSfrYFrcRN5P7v7wE6GTHSVkCK4kncBejoBDeHT8QptwWHL7S2DByyiLH6Aqw4qifdZ8v9eLEY6SMEa/wXPcUF0dpUebRksGIaTZ2IJ/HVPKddgP7nPJx9TWl7KtcRCj3cC5A4gmxp3cHQoG2VAunOUUu4KQnhPhgm2FAOWCv+iO7mxjaYL+SCowXB4GYXNqVSK3aVMeJJoVXFezx6HwpxeOeGgiqF3W8QCZuO/fVcsmiQyEAd2Z2U94Tog7cTBvmly2tA9AhW7JRyh8NEQe4cuxU87qd7NEsoq6H2ZxT6KhtQxicsNKs7HbyzElExyLEUnJhexC2kq0RApXq/IIaiEBODu1W9zyRmF2Ln9qn5SNRIrfoCijIb1LPDEIz7AkBJTkz9UtUNV5tLGWkxzHeyxlSRYXuQmI7cFS0p9eLUugv3xjjnBW+Vht1yYuV41QSno3KBhqb1nrHexHx2mZULojZhImueklLHpBn+iALGEFvM6S9DZJ+er0FBZ5759ml8aEL7nl7+G2NIpKwPRI//nMWLZPcIbH+qYSTDH65v6dPfr86fH34Xd91FP8Gu2X/qaNHvsWn/BJeWUPl7fZXBwgxCAg9aW4dpgk3QLfW/GuAqZADPL8LBbGyx9cTYxnr579GZyZdgZBcs4v1ZIcj7oEGTdmzTUjhucJGe9Bm6tFwYW9TMEVZFeuEiz4zA3R1MowXjyNnmoCFBf3zYu/53JvGF3JyIloIE23UbaeCKxmS6icJWhAIBruPnSWIEaCn56JcPY+joFwWBwjUXhOWxPUxRxeMj6xEiYHduTC4ccbVX7wr5vaHGuY5AHo90B8ghn6+fOIvcswaLhQa4Pub8b/TfamyNY4gU/7g9H71uTbHHYsbbqi+ke+TKV8QMyOgN9UARTrsvS30SORxSHIp1W9gJwVj7YNLEKMuJQLW4eir/9I+vTRIWoLHW/eHJ9Wi3/dFCQgazsjkEClBlgW76O5VQIK326emKAVuxUQwddmb4uPo0QezOWFA8yGSyHiWBbYoARc1p9kd5xX6xkOobDAbGdxtkuklishIor0uNowPXwVZSrlcwqQ7S8G6QeWL4kBsKHUyTVxxedAgPdRyeKxpouBY03x4nbTmTmtW5vlfGa3HDmgyX0aTwSrjGnC2sGh4UUjyAqZCVUQTuBmG/D4/0eUkIrcaxwjdJOxOShmeU5dZzUDtnb263iznuSBNy4spfeECN9ytPeQ6PgDaHUe/VlYhPJCAj/nxCdotLZ5RW1pUD2c/aZ56hG9Wz/eF/xblB/ExbxQC//C8UYF/ag9zFyiRQQJJsiN5LCe2+qnO4pMxxsh34EKfRkH3xkMmkG2AcFibgUrj0QSNZ9otlJXK9oRNO9olXG3uDmnw82tuLIvSNSmPskWnEyrLLkr0yEpI2WtOhXFg3C7S7p3QKKxsj4tc7hYBBMODHZOjC0rgW9Skah9Guzd8HIdI6co6wr0+/Fm3WX4MUe1hnmqJdQQctKq3T+F3WaFgehsDHB0quLcpoIzPq85WGLEvVHwiqdGr1hKriCCyD3irEOTTxkLPQY5z27VbHjh0g4lRajmLreaVE1te+QSbu/XQQN5c5uQUio2YTMWldzGvqv9B91bnoP0ydnfQqnNm2PQhbn1HcAT0UStIQ8vTJwQLskbCZrP8TBCsXHX5Bfdf2Ru1deMooGzds1GRpbvi3n6Gx+jimxrr2xYHaEChhpuKZrrgpK+cRrJklzlTeC61UBOElNAQQ5HlW3CB+cJ/A0UcRVelQvbkL1Z9fWAHVmAhdQOYSDoEpYESNqAw8wGgLR0C4sQNf5JIfhRBIvhYUd7pEzDw/Ok4gMCANRFkABteN57ZUS0fybbCuKZQJksSi8okJXiXIsHer/z4rWB7c4+S82ZAu+gqvGGVh30tP25+r8Em5Mm9TZbqbVgAAAA==";var Ah="data:image/webp;base64,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";var Rh="Xin ch\xE0o! T\xF4i l\xE0 tr\u1EE3 l\xFD AI c\u1EE7a Hi\u1EC7p Ph\xE1t. R\u1EA5t vui \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 b\u1EA1n.",Cg=3500,Ch=2e3,Pg=document.currentScript instanceof HTMLScriptElement?document.currentScript.src:document.baseURI,Ig=new URL("../assets/voice-tram-guillaume.mp3",Pg).href;function Ph(){if(document.getElementById("hpo-robot"))return;let i=document.querySelector(".hpo-digital-hero"),e=!0,t=document.createElement("button");t.id="hpo-robot",t.type="button",t.setAttribute("aria-label",e?"Robot Hi\u1EC7p Ph\xE1t \u2014 nh\u1EA5n \u0111\u1EC3 xem 3D v\xE0 t\u01B0\u01A1ng t\xE1c":"Robot Hi\u1EC7p Ph\xE1t \u2014 nh\u1EA5n \u0111\u1EC3 xem 3D, k\xE9o ho\u1EB7c d\xF9ng ph\xEDm m\u0169i t\xEAn \u0111\u1EC3 di chuy\u1EC3n"),t.setAttribute("aria-haspopup","dialog"),t.setAttribute("aria-controls","hpo-robot-viewer"),t.setAttribute("aria-expanded","false"),t.title=e?"Nh\u1EA5n \u0111\u1EC3 xem m\xF4 h\xECnh 3D v\xE0 v\u1EABy tay":"K\xE9o \u0111\u1EC3 di chuy\u1EC3n \xB7 N\xE9m ra ngo\xE0i khung \u0111\u1EC3 \u1EA9n \xB7 Nh\u1EA5n \u0111\u1EC3 xem 3D",t.innerHTML=Zo;let n=document.createElement("button");n.id="hpo-robot-restore",n.type="button",n.className="float-btn",n.setAttribute("aria-label","M\u1EDF h\u1ED9p tho\u1EA1i robot Hi\u1EC7p Ph\xE1t"),n.setAttribute("aria-haspopup","dialog"),n.setAttribute("aria-controls","hpo-robot-viewer"),n.setAttribute("aria-expanded","false"),n.title="M\u1EDF robot Hi\u1EC7p Ph\xE1t",n.innerHTML=`<img class="hpo-robot-head" src="${Th}" alt="" width="64" height="64" decoding="async"><img class="hpo-robot-full" src="${Ah}" alt="" width="125" height="240" decoding="async">`;let s=document.createElement("span");s.id="hpo-robot-dock-greeting",s.className="is-hidden",s.textContent=Rh,n.append(s),n.setAttribute("aria-describedby",s.id),n.hidden=!0;let r=document.createElement("span");r.id="hpo-robot-greeting",r.textContent=Rh,t.setAttribute("aria-describedby",r.id),document.body.append(t,n),document.body.classList.add(i?"hpo-home-robot":"hpo-page-robot");let a=()=>{let G=document.querySelector(".floats");return G?(G.prepend(n),!0):!1};if(!a()){let G=new MutationObserver(()=>{a()&&G.disconnect()});G.observe(document.body,{childList:!0,subtree:!0})}let o=new he,c=new he,l=new Ko;try{let G=localStorage.getItem("hpo-robot-speed");G!==null&&l.setSpeed(Number(G))}catch{}let u=matchMedia("(prefers-reduced-motion: reduce)"),h,f=0,p=0,g=0,y=!1,m=!1,d=!1,S=0,E=0,M=8,A=8,T=!1,C=0,I=0,_=0,b=0,R,O=!1,L=null,N=o.x,k=o.y,H=0,J=!1,V=0,se=!1,oe=!1,ve=matchMedia("(max-width: 600px)"),Fe=ve.matches;try{T=localStorage.getItem("hpo-robot-hidden")==="true"}catch{}let Ye=()=>!T&&!Fe;function et(){t.hidden=!Ye(),n.hidden=Ye()}et();let Ge=wh(t,Ig,()=>{l.pause(),Qe()},G=>{y=G},l.speed,G=>{l.setSpeed(G);try{localStorage.setItem("hpo-robot-speed",String(l.speed))}catch{}},n,()=>!T,G=>Z(G));function Z(G,$){T=!G;try{localStorage.setItem("hpo-robot-hidden",String(T))}catch{}if(window.clearTimeout(C),t.classList.remove("is-throwing-away"),l.pause(),G){if(et(),!Ye())return j();at(),o.set(ze.clamp(o.x,0,S),ze.clamp(o.y,0,E)),l.snapToEdge(o,S,E),Oe()}else if($&&!u.matches){n.hidden=!1;let Ce=$.clone();Ce.lengthSq()<1&&Ce.set(1,1),Ce.normalize();let Ue=Math.max(S,E,_,t.offsetHeight)*2;t.style.setProperty("--hpo-throw-to-x",`${o.x+M+Ce.x*Ue}px`),t.style.setProperty("--hpo-throw-to-y",`${o.y+A+Ce.y*Ue}px`),t.style.setProperty("--hpo-throw-rotation",`${ze.clamp(Ce.x*32,-32,32)}deg`),t.classList.add("is-throwing-away"),C=window.setTimeout(()=>{t.hidden=!0,t.classList.remove("is-throwing-away")},u.matches?0:340)}else et();j()}function j(G=performance.now()){let $=o.x!==N||o.y!==k;N=o.x,k=o.y,$&&(H=G+120),J&&V&&G>=V&&Ye()&&!Ge.isOpen&&(J=!1,oe=!1,V=0);let Ce=!se||J||$||G<H||!!R||Ge.isOpen||!Ye()||document.hidden;Ce?L=null:L===null&&(L=G);let Ue=L!==null&&G-L<Cg;Ue&&!oe&&(oe=!0,!u.matches&&h&&!h.lost&&h.robot.wave()),Ce&&oe&&(J=!0,V||(V=G+Ch)),L!==null&&!Ue&&(J=!0,V||(V=G+Ch)),r.classList.toggle("is-hidden",!Ue),Ue?t.setAttribute("aria-describedby",r.id):t.removeAttribute("aria-describedby")}let pe=198,Ie=90;function be(){if(!i||i.classList.contains("is-active"))return t.classList.remove("is-bubble-off"),null;let G=document.querySelector(".company-banner.is-active"),$=G?.querySelector(".company-banner-heading h2"),Ce=G?.querySelector(".company-banner-motto");if(!$||!Ce)return t.classList.remove("is-bubble-off"),null;let Ue=document.getElementById("navbar")?.getBoundingClientRect().bottom||0,w=$.getBoundingClientRect(),x=Ce.getBoundingClientRect();t.offsetHeight&&(pe=t.offsetHeight),r.offsetHeight&&(Ie=r.offsetHeight);let z=pe,q=Ie+8,K=x.top-z-12;return t.classList.toggle("is-bubble-off",K-q<Ue-2),K<Ue+4?NaN:K}function Oe(){if(e){t.style.removeProperty("transform");let $=(document.querySelector(".topbar")?.offsetHeight||0)+(document.getElementById("navbar")?.offsetHeight||0),Ce=matchMedia("(max-width: 1100px)").matches,Ue=innerWidth<=600?12:16,w=window.visualViewport?.height||innerHeight,x=i?Ce?$+i.offsetHeight-t.offsetHeight-Ue:$+108:innerWidth<=600?Number.POSITIVE_INFINITY:$+Math.max(0,(w-$-t.offsetHeight)/2)+40,z=window.visualViewport?.height||innerHeight,q=matchMedia("(max-width: 600px)").matches&&document.querySelector(".floats")?.offsetHeight||0,K=Math.min(x,z-q-t.offsetHeight-(i?12:Ue+8)),Y=i?be():null;Y!==null&&(K=Y),t.style.top=`${K}px`,t.style.bottom="auto",r.style.removeProperty("left"),r.style.removeProperty("--greeting-tail"),j();return}R||l.snapToEdge(o,S,E),t.style.transform=`translate3d(${o.x+M}px, ${o.y+A}px, 0)`;let G=ze.clamp(o.x+_/2-I/2,0,Math.max(0,b-I-16));r.style.left=`${G-o.x}px`,r.style.setProperty("--greeting-tail",`${ze.clamp(o.x+_/2-G,16,I-16)}px`),j()}function at(G=!1){if(e){Oe();return}let $=window.visualViewport;M=($?.offsetLeft||0)+8;let Ce=Math.max(0,r.offsetHeight-t.offsetHeight*.1);I=r.offsetWidth,_=t.offsetWidth,b=$?.width||innerWidth,A=($?.offsetTop||0)+8+Ce,S=Math.max(0,($?.width||innerWidth)-t.offsetWidth-16),E=Math.max(0,($?.height||innerHeight)-t.offsetHeight-Ce-16),G&&o.set(0,E),Oe()}at(!0),new ResizeObserver(()=>at()).observe(t),new ResizeObserver(()=>at()).observe(r);{i&&new ResizeObserver(()=>at()).observe(i);let G=()=>{let $=performance.now(),Ue=scrollY>innerHeight*.25||ve.matches||Number.isNaN(be());Ue!==Fe&&(Fe=Ue,Fe||(J=!1,oe=!1,V=0,H=$+500),et(),Ye()&&(at(),Qe()),j())};if(window.addEventListener("scroll",G,{passive:!0}),ve.addEventListener("change",G),i){let $=0,Ce=()=>{cancelAnimationFrame($),$=requestAnimationFrame(()=>{G(),Oe()})};new MutationObserver(Ce).observe(i,{attributes:!0,attributeFilter:["class"]}),document.querySelector(".company-slider-track")?.addEventListener("scroll",Ce,{passive:!0}),document.querySelector(".company-banner")?.addEventListener("animationend",Ce)}G()}window.addEventListener("resize",()=>at()),window.visualViewport?.addEventListener("resize",()=>at()),window.visualViewport?.addEventListener("scroll",()=>at());{try{h=new ns(t),h.onRestore=Qe}catch(G){console.warn("Robot 3D kh\xF4ng kh\u1EA3 d\u1EE5ng; hi\u1EC3n th\u1ECB h\xECnh thay th\u1EBF.",G)}se=!0}t.append(r),at(!0),window.setInterval(j,100);function P(G){let $=Math.min((G-p)/1e3,.05);p=G,g+=$,Ge.isOpen?Ge.tick($,g,!1):Ye()&&(e||(l.update($,o,S,E,y||m||d||!!R||!!h?.lost||!Ye(),!R),Oe()),h&&!h.lost&&Ye()&&(h.robot.group.rotation.y=e?0:l.heading,!e&&!R&&!h.robot.isWaving&&l.takeGreeting()&&h.robot.wave(),h.robot.update($,g,c,!1,!e&&l.walking),h.render())),f=requestAnimationFrame(P)}function Qe(){cancelAnimationFrame(f),!document.hidden&&(u.matches?(h?.robot.resetPose(),h?.render(),Ge.resetMotion(),Ge.tick(0,g,!0)):(p=performance.now(),f=requestAnimationFrame(P)))}t.addEventListener("pointerdown",G=>{e||!G.isPrimary||G.button!==0||R||(O=!1,d=!1,R={id:G.pointerId,x:G.clientX,y:G.clientY,offsetX:G.clientX-o.x-M,offsetY:G.clientY-o.y-A,moved:!1,lastX:G.clientX,lastY:G.clientY,lastTime:performance.now(),velocityX:0,velocityY:0},t.setPointerCapture(G.pointerId),l.pause(),j())}),t.addEventListener("pointermove",G=>{if(R&&G.pointerId===R.id){let $=performance.now(),Ce=Math.max(1,$-R.lastTime),Ue=(G.clientX-R.lastX)/Ce*1e3,w=(G.clientY-R.lastY)/Ce*1e3;if(R.velocityX=R.velocityX*.35+Ue*.65,R.velocityY=R.velocityY*.35+w*.65,R.lastX=G.clientX,R.lastY=G.clientY,R.lastTime=$,!R.moved&&Math.hypot(G.clientX-R.x,G.clientY-R.y)<6)return;R.moved=!0,t.classList.add("is-dragging");let x=G.clientX-R.offsetX-M,z=G.clientY-R.offsetY-A,q=x-o.x,K=z-o.y;if(Math.hypot(q,K)>1){let Y=Math.atan2(q,K);l.heading+=Math.atan2(Math.sin(Y-l.heading),Math.cos(Y-l.heading))*.3}o.set(x,z),Oe(),h&&(h.robot.group.rotation.y=l.heading,h.render())}else{let $=t.getBoundingClientRect();c.set((G.clientX-$.left)/$.width*2-1,1-(G.clientY-$.top)/$.height*2)}});function Le(G){if(!R||G&&G.pointerId!==R.id)return;let $=R;if(R=void 0,O=$.moved,t.hasPointerCapture($.id)&&t.releasePointerCapture($.id),t.classList.remove("is-dragging"),l.pause(),!$.moved)return;if(G?.type!=="pointerup"){l.snapToEdge(o,S,E),Oe();return}let Ce=Math.exp(-(performance.now()-$.lastTime)/140),Ue=$.velocityX*Ce,w=$.velocityY*Ce,x=Math.hypot(Ue,w),z=o.x+Ue*.3,q=o.y+w*.3,K=o.x<-_*.35||o.x>S+_*.35||o.y<-t.offsetHeight*.35||o.y>E+t.offsetHeight*.35,Y=x>=650&&(z<0||z>S||q<0||q>E);if(K||Y){let Me=new he(x>=260?Ue:o.x-($.x-$.offsetX-M),x>=260?w:o.y-($.y-$.offsetY-A));Z(!1,Me),n.focus({preventScroll:!0})}else l.snapToEdge(o,S,E),Oe()}t.addEventListener("pointerup",Le),t.addEventListener("pointercancel",Le),t.addEventListener("lostpointercapture",Le),window.addEventListener("blur",()=>{Le(),m=!1}),t.addEventListener("click",G=>{if(O&&G.detail!==0){O=!1;return}O=!1,Ge.open(),j()});let Ae=0,me=()=>{window.clearTimeout(Ae),s.classList.add("is-hidden")},it=G=>{n.hidden||Ge.isOpen||(s.classList.remove("is-hidden"),window.clearTimeout(Ae),Ae=window.setTimeout(me,G))};window.setTimeout(()=>it(6e3),1200),n.addEventListener("pointerenter",G=>{G.pointerType==="mouse"&&it(4e3)}),n.addEventListener("pointerleave",me),n.addEventListener("focus",()=>{n.matches(":focus-visible")&&it(4e3)}),n.addEventListener("blur",me),n.addEventListener("click",()=>{me(),Ge.open(),j()}),t.addEventListener("pointerenter",G=>{G.pointerType==="mouse"&&(m=!0)}),t.addEventListener("pointerleave",()=>{m=!1,c.set(0,0)}),t.addEventListener("focus",()=>{d=t.matches(":focus-visible")}),t.addEventListener("blur",()=>{d=!1}),t.addEventListener("keydown",G=>{if(e)return;let $={ArrowLeft:[-24,0],ArrowRight:[24,0],ArrowUp:[0,-24],ArrowDown:[0,24]};if(!$[G.key])return;G.preventDefault(),d=!0;let[Ce,Ue]=$[G.key];o.x+=Ce,o.y+=Ue,l.heading=Math.atan2(Ce,Ue),Oe(),h&&(h.robot.group.rotation.y=l.heading,h.render()),l.pause()}),document.addEventListener("visibilitychange",()=>{document.hidden&&Le(),Qe()}),u.addEventListener("change",Qe),Qe()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ph,{once:!0}):Ph();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
