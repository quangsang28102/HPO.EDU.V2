(()=>{var iu=Object.defineProperty;var su=(i,e,t)=>e in i?iu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ye=(i,e,t)=>su(i,typeof e!="symbol"?e+"":e,t);var Wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mc=0,ja=1,gc=2;var Qa=1,xc=2,gn=3,Tn=0,wt=1,xn=2,Rn=0,ti=1,$a=2,el=3,tl=4,yc=5,zn=100,vc=101,_c=102,bc=103,Mc=104,Sc=200,Ec=201,wc=202,Tc=203,Sr=204,Er=205,Ac=206,Rc=207,Cc=208,Pc=209,Ic=210,Lc=211,Dc=212,Uc=213,Nc=214,eo=0,to=1,no=2,ni=3,io=4,so=5,ro=6,oo=7,ao=0,Fc=1,Oc=2,Cn=0,Bc=1,zc=2,kc=3,Hc=4,Vc=5,Gc=6,lo=7;var nl=300,li=301,ci=302,co=303,ho=304,Xs=306,wr=1e3,Bn=1001,Tr=1002,Nt=1003,Wc=1004;var qs=1005;var an=1006,uo=1007;var qn=1008;var ln=1009,il=1010,sl=1011,Yi=1012,fo=1013,Yn=1014,cn=1015,Zi=1016,po=1017,mo=1018,Ki=1020,rl=35902,ol=35899,al=1021,ll=1022,$t=1023,Ui=1026,Ji=1027,go=1028,xo=1029,cl=1030,yo=1031;var vo=1033,Ys=33776,Zs=33777,Ks=33778,Js=33779,_o=35840,bo=35841,Mo=35842,So=35843,Eo=36196,wo=37492,To=37496,Ao=37808,Ro=37809,Co=37810,Po=37811,Io=37812,Lo=37813,Do=37814,Uo=37815,No=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,ko=37821,Ho=36492,Vo=36494,Go=36495,Wo=36283,Xo=36284,qo=36285,Yo=36286;var ys=2300,Ar=2301,br=2302,Ga=2400,Wa=2401,Xa=2402;var Xc=3200,qc=3201;var Zo=0,Yc=1,Pn="",Rt="srgb",ii="srgb-linear",vs="linear",nt="srgb";var ei=7680;var qa=519,Zc=512,Kc=513,Jc=514,hl=515,jc=516,Qc=517,$c=518,eh=519,Ya=35044;var ul="300 es",on=2e3,_s=2001;var un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xl=1234567,ps=Math.PI/180,Ni=180/Math.PI;function ji(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function dl(i,e){return(i%e+e)%e}function ru(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ou(i,e,t){return i!==e?(t-i)/(e-i):0}function ms(i,e,t){return(1-t)*i+t*e}function au(i,e,t,n){return ms(i,e,1-Math.exp(-t*n))}function lu(i,e=1){return e-Math.abs(dl(i,e*2)-e)}function cu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function du(i,e){return i+Math.random()*(e-i)}function fu(i){return i*(.5-Math.random())}function pu(i){i!==void 0&&(Xl=i);let e=Xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mu(i){return i*ps}function gu(i){return i*Ni}function xu(i){return(i&i-1)===0&&i!==0}function yu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _u(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ke={DEG2RAD:ps,RAD2DEG:Ni,generateUUID:ji,clamp:He,euclideanModulo:dl,mapLinear:ru,inverseLerp:ou,lerp:ms,damp:au,pingpong:lu,smoothstep:cu,smootherstep:hu,randInt:uu,randFloat:du,randFloatSpread:fu,seededRandom:pu,degToRad:mu,radToDeg:gu,isPowerOfTwo:xu,ceilPowerOfTwo:yu,floorPowerOfTwo:vu,setQuaternionFromProperEuler:_u,normalize:It,denormalize:Li},ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(h!==y||c!==d||l!==p||u!==g){let m=1-o,f=c*d+l*p+u*g+h*y,S=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){let A=Math.sqrt(E),T=Math.atan2(A,f*S);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}let b=o*S;if(c=c*m+d*b,l=l*m+p*b,u=u*m+g*b,h=h*m+y*b,m===1-o){let A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-o*p,e[t+2]=l*g+u*p+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ql.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xa=new L,ql=new Kt,Ge=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],y=s[0],m=s[3],f=s[6],S=s[1],E=s[4],b=s[7],A=s[2],T=s[5],P=s[8];return r[0]=a*y+o*S+c*A,r[3]=a*m+o*E+c*T,r[6]=a*f+o*b+c*P,r[1]=l*y+u*S+h*A,r[4]=l*m+u*E+h*T,r[7]=l*f+u*b+h*P,r[2]=d*y+p*S+g*A,r[5]=d*m+p*E+g*T,r[8]=d*f+p*b+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,p=l*r-a*c,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(s*l-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(u*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ya=new Ge;function fl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function th(){let i=Fi("canvas");return i.style.display="block",i}var Yl={};function Oi(i){i in Yl||(Yl[i]=!0,console.warn(i))}function nh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Zl=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bu(){let i={enabled:!0,workingColorSpace:ii,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?vs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ii]:{primaries:e,whitePoint:n,transfer:vs,toXYZ:Zl,fromXYZ:Kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Zl,fromXYZ:Kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var je=bu();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yi,Rr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yi===void 0&&(yi=Fi("canvas")),yi.width=e.width,yi.height=e.height;let s=yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mu=0,Bi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(va(s[a].image)):r.push(va(s[a]))}else r=va(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Su=0,_a=new L,bt=class i extends un{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=an,a=qn,o=$t,c=ln,l=i.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=ji(),this.name="",this.source=new Bi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=nl;bt.DEFAULT_ANISOTROPY=1;var Ke=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,b=(p+1)/2,A=(f+1)/2,T=(u+d)/4,P=(h+y)/4,R=(g+m)/4;return E>b&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=P/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=R/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=R/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-y)/S,this.z=(d-u)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cr=class extends un{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new bt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Cr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bs=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pr=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),nr.subVectors(this.max,as),vi.subVectors(e.a,as),_i.subVectors(e.b,as),bi.subVectors(e.c,as),In.subVectors(_i,vi),Ln.subVectors(bi,_i),Jn.subVectors(vi,bi);let t=[0,-In.z,In.y,0,-Ln.z,Ln.y,0,-Jn.z,Jn.y,In.z,0,-In.x,Ln.z,0,-Ln.x,Jn.z,0,-Jn.x,-In.y,In.x,0,-Ln.y,Ln.x,0,-Jn.y,Jn.x,0];return!ba(t,vi,_i,bi,nr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,vi,_i,bi,nr))?!1:(ir.crossVectors(In,Ln),t=[ir.x,ir.y,ir.z],ba(t,vi,_i,bi,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_n=[new L,new L,new L,new L,new L,new L,new L,new L],nn=new L,tr=new fn,vi=new L,_i=new L,bi=new L,In=new L,Ln=new L,Jn=new L,as=new L,nr=new L,ir=new L,jn=new L;function ba(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);let o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),c=e.dot(jn),l=t.dot(jn),u=n.dot(jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Eu=new fn,ls=new L,Ma=new L,kn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Eu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);let t=ls.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Ma)),this.expandByPoint(ls.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bn=new L,Sa=new L,sr=new L,Dn=new L,Ea=new L,rr=new L,wa=new L,zi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sa.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Sa);let r=e.distanceTo(t)*.5,a=-this.direction.dot(sr),o=Dn.dot(this.direction),c=-Dn.dot(sr),l=Dn.lengthSq(),u=Math.abs(1-a*a),h,d,p,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let y=1/u;h*=y,d*=y,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Sa).addScaledVector(sr,d),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);let n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,s,r){Ea.subVectors(t,e),rr.subVectors(n,e),wa.crossVectors(Ea,rr);let a=this.direction.dot(wa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);let c=o*this.direction.dot(rr.crossVectors(Dn,rr));if(c<0)return null;let l=o*this.direction.dot(Ea.cross(Dn));if(l<0||c+l>a)return null;let u=-o*Dn.dot(wa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,a,o,c,l,u,h,d,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,p,g,y,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Mi.setFromMatrixColumn(e,0).length(),r=1/Mi.setFromMatrixColumn(e,1).length(),a=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,p=a*h,g=o*u,y=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,p=c*h,g=l*u,y=l*h;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,p=c*h,g=l*u,y=l*h;t[0]=d-y*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,p=a*h,g=o*u,y=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+y,t[1]=c*h,t[5]=y*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*u,t[4]=y-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-y*h}else if(e.order==="XZY"){let d=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+y,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wu,e,Tu)}lookAt(e,t,n){let s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Un.crossVectors(n,Ht),Un.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Un.crossVectors(n,Ht)),Un.normalize(),or.crossVectors(Ht,Un),s[0]=Un.x,s[4]=or.x,s[8]=Ht.x,s[1]=Un.y,s[5]=or.y,s[9]=Ht.y,s[2]=Un.z,s[6]=or.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],S=n[3],E=n[7],b=n[11],A=n[15],T=s[0],P=s[4],R=s[8],_=s[12],M=s[1],C=s[5],F=s[9],V=s[13],U=s[2],k=s[6],z=s[10],Z=s[14],H=s[3],ee=s[7],$=s[11],ce=s[15];return r[0]=a*T+o*M+c*U+l*H,r[4]=a*P+o*C+c*k+l*ee,r[8]=a*R+o*F+c*z+l*$,r[12]=a*_+o*V+c*Z+l*ce,r[1]=u*T+h*M+d*U+p*H,r[5]=u*P+h*C+d*k+p*ee,r[9]=u*R+h*F+d*z+p*$,r[13]=u*_+h*V+d*Z+p*ce,r[2]=g*T+y*M+m*U+f*H,r[6]=g*P+y*C+m*k+f*ee,r[10]=g*R+y*F+m*z+f*$,r[14]=g*_+y*V+m*Z+f*ce,r[3]=S*T+E*M+b*U+A*H,r[7]=S*P+E*C+b*k+A*ee,r[11]=S*R+E*F+b*z+A*$,r[15]=S*_+E*V+b*Z+A*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+y*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*u-r*c*u)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+f*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],S=h*m*l-y*d*l+y*c*p-o*m*p-h*c*f+o*d*f,E=g*d*l-u*m*l-g*c*p+a*m*p+u*c*f-a*d*f,b=u*y*l-g*h*l+g*o*p-a*y*p-u*o*f+a*h*f,A=g*h*c-u*y*c-g*o*d+a*y*d+u*o*m-a*h*m,T=t*S+n*E+s*b+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=S*P,e[1]=(y*d*r-h*m*r-y*s*p+n*m*p+h*s*f-n*d*f)*P,e[2]=(o*m*r-y*c*r+y*s*l-n*m*l-o*s*f+n*c*f)*P,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*P,e[4]=E*P,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*P,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*f-t*c*f)*P,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*p+t*c*p)*P,e[8]=b*P,e[9]=(g*h*r-u*y*r-g*n*p+t*y*p+u*n*f-t*h*f)*P,e[10]=(a*y*r-g*o*r+g*n*l-t*y*l-a*n*f+t*o*f)*P,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*P,e[12]=A*P,e[13]=(u*y*s-g*h*s+g*n*d-t*y*d-u*n*m+t*h*m)*P,e[14]=(g*o*s-a*y*s-g*n*c+t*y*c+a*n*m-t*o*m)*P,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,p=r*u,g=r*h,y=a*u,m=a*h,f=o*h,S=c*l,E=c*u,b=c*h,A=n.x,T=n.y,P=n.z;return s[0]=(1-(y+f))*A,s[1]=(p+b)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(p-b)*T,s[5]=(1-(d+f))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+E)*P,s[9]=(m-S)*P,s[10]=(1-(d+y))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Mi.set(s[0],s[1],s[2]).length(),a=Mi.set(s[4],s[5],s[6]).length(),o=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],sn.copy(this);let l=1/r,u=1/a,h=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=on,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===on)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===_s)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=on,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===on)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===_s)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mi=new L,sn=new ht,wu=new L(0,0,0),Tu=new L(1,1,1),Un=new L,or=new L,Ht=new L,Jl=new ht,jl=new Kt,Ft=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ft.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Au=0,Ql=new L,Si=new Kt,Mn=new ht,ar=new L,cs=new L,Ru=new L,Cu=new Kt,$l=new L(1,0,0),ec=new L(0,1,0),tc=new L(0,0,1),nc={type:"added"},Pu={type:"removed"},Ei={type:"childadded",child:null},Ta={type:"childremoved",child:null},Mt=class i extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Ft,n=new Kt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ge}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(cs,ar,this.up):Mn.lookAt(ar,cs,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Mn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pu),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,Ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Mt.DEFAULT_UP=new L(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new L,Sn=new L,Aa=new L,En=new L,wi=new L,Ti=new L,ic=new L,Ra=new L,Ca=new L,Pa=new L,Ia=new Ke,La=new Ke,Da=new Ke,On=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),rn.subVectors(e,t),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){rn.subVectors(s,t),Sn.subVectors(n,t),Aa.subVectors(e,t);let a=rn.dot(rn),o=rn.dot(Sn),c=rn.dot(Aa),l=Sn.dot(Sn),u=Sn.dot(Aa),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(a,En.y),c.addScaledVector(o,En.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ia.setScalar(0),La.setScalar(0),Da.setScalar(0),Ia.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ia,r.x),a.addScaledVector(La,r.y),a.addScaledVector(Da,r.z),a}static isFrontFacing(e,t,n,s){return rn.subVectors(n,t),Sn.subVectors(e,t),rn.cross(Sn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;wi.subVectors(s,n),Ti.subVectors(r,n),Ra.subVectors(e,n);let c=wi.dot(Ra),l=Ti.dot(Ra);if(c<=0&&l<=0)return t.copy(n);Ca.subVectors(e,s);let u=wi.dot(Ca),h=Ti.dot(Ca);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(wi,a);Pa.subVectors(e,r);let p=wi.dot(Pa),g=Ti.dot(Pa);if(g>=0&&p<=g)return t.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ti,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return ic.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(ic,o);let f=1/(m+y+d);return a=y*f,o=d*f,t.copy(n).addScaledVector(wi,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=dl(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ua(a,r,e+1/3),this.g=Ua(a,r,e),this.b=Ua(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=ih[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return je.workingToColorSpace(At.copy(this),e),Math.round(He(At.r*255,0,255))*65536+Math.round(He(At.g*255,0,255))*256+Math.round(He(At.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(At.copy(this),t);let n=At.r,s=At.g,r=At.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Rt){je.workingToColorSpace(At.copy(this),e);let t=At.r,n=At.g,s=At.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(lr);let n=ms(Nn.h,lr.h,t),s=ms(Nn.s,lr.s,t),r=ms(Nn.l,lr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new Ve;Ve.NAMES=ih;var Iu=0,An=class extends un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=ti,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=Er,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==Er&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jt=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new L,cr=new ne,Lu=0,Ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}};var Ss=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Es=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},Du=0,Yt=new ht,Na=new Mt,Ai=new L,Vt=new fn,hs=new fn,_t=new L,Et=class i extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fl(e)?Es:Ss)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Vt.min,hs.min),Vt.expandByPoint(_t),_t.addVectors(Vt.max,hs.max),Vt.expandByPoint(_t)):(Vt.expandByPoint(hs.min),Vt.expandByPoint(hs.max))}Vt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_t.fromBufferAttribute(o,l),c&&(Ai.fromBufferAttribute(e,l),_t.add(Ai)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new L,c[R]=new L;let l=new L,u=new L,h=new L,d=new ne,p=new ne,g=new ne,y=new L,m=new L;function f(R,_,M){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),p.sub(d),g.sub(d);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[R].add(y),o[_].add(y),o[M].add(y),c[R].add(m),c[_].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,_=S.length;R<_;++R){let M=S[R],C=M.start,F=M.count;for(let V=C,U=C+F;V<U;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let E=new L,b=new L,A=new L,T=new L;function P(R){A.fromBufferAttribute(s,R),T.copy(A);let _=o[R];E.copy(_),E.sub(A.multiplyScalar(A.dot(_))).normalize(),b.crossVectors(T,_);let C=b.dot(c[R])<0?-1:1;a.setXYZW(R,E.x,E.y,E.z,C)}for(let R=0,_=S.length;R<_;++R){let M=S[R],C=M.start,F=M.count;for(let V=C,U=C+F;V<U;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),p=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Ut(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sc=new ht,Qn=new zi,hr=new kn,rc=new L,ur=new L,dr=new L,fr=new L,Fa=new L,pr=new L,oc=new L,mr=new L,rt=class extends Mt{constructor(e=new Et,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(Fa.fromBufferAttribute(h,e),a?pr.addScaledVector(Fa,u):pr.addScaledVector(Fa.sub(t),u))}t.add(pr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(hr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(hr,rc)===null||Qn.origin.distanceToSquared(rc)>(e.far-e.near)**2))&&(sc.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(sc),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,A=E;b<A;b+=3){let T=o.getX(b),P=o.getX(b+1),R=o.getX(b+2);s=gr(this,f,e,n,l,u,h,T,P,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let S=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=gr(this,a,e,n,l,u,h,S,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,A=E;b<A;b+=3){let T=b,P=b+1,R=b+2;s=gr(this,f,e,n,l,u,h,T,P,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let S=m,E=m+1,b=m+2;s=gr(this,a,e,n,l,u,h,S,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Uu(i,e,t,n,s,r,a,o){let c;if(e.side===wt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Tn,o),c===null)return null;mr.copy(o),mr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(mr);return l<t.near||l>t.far?null:{distance:l,point:mr.clone(),object:i}}function gr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ur),i.getVertexPosition(c,dr),i.getVertexPosition(l,fr);let u=Uu(i,e,t,n,ur,dr,fr,oc);if(u){let h=new L;On.getBarycoord(oc,ur,dr,fr,h),s&&(u.uv=On.getInterpolatedAttribute(s,o,c,l,h,new ne)),r&&(u.uv1=On.getInterpolatedAttribute(r,o,c,l,h,new ne)),a&&(u.normal=On.getInterpolatedAttribute(a,o,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};On.getNormal(ur,dr,fr,d.normal),u.face=d,u.barycoord=h}return u}var pn=class i extends Et{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2));function g(y,m,f,S,E,b,A,T,P,R,_){let M=b/P,C=A/R,F=b/2,V=A/2,U=T/2,k=P+1,z=R+1,Z=0,H=0,ee=new L;for(let $=0;$<z;$++){let ce=$*C-V;for(let pe=0;pe<k;pe++){let Be=pe*M-F;ee[y]=Be*S,ee[m]=ce*E,ee[f]=U,l.push(ee.x,ee.y,ee.z),ee[y]=0,ee[m]=0,ee[f]=T>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(pe/P),h.push(1-$/R),Z+=1}}for(let $=0;$<R;$++)for(let ce=0;ce<P;ce++){let pe=d+ce+k*$,Be=d+ce+k*($+1),Ye=d+(ce+1)+k*($+1),Xe=d+(ce+1)+k*$;c.push(pe,Be,Xe),c.push(Be,Ye,Xe),H+=6}o.addGroup(p,H,_),p+=H,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){let e={};for(let t=0;t<i.length;t++){let n=hi(i[t]);for(let s in n)e[s]=n[s]}return e}function Nu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var sh={clone:hi,merge:Ct},Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=Ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hi(e.uniforms),this.uniformsGroups=Nu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ws=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fn=new L,ac=new ne,lc=new ne,St=class extends ws{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ni*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ni*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,ac,lc),t.subVectors(lc,ac)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ps*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ri=-90,Ci=1,Ir=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new St(Ri,Ci,e,t);s.layers=this.layers,this.add(s);let r=new St(Ri,Ci,e,t);r.layers=this.layers,this.add(r);let a=new St(Ri,Ci,e,t);a.layers=this.layers,this.add(a);let o=new St(Ri,Ci,e,t);o.layers=this.layers,this.add(o);let c=new St(Ri,Ci,e,t);c.layers=this.layers,this.add(c);let l=new St(Ri,Ci,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ts=class extends bt{constructor(e=[],t=li,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lr=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ts(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:Rn});r.uniforms.tEquirect.value=t;let a=new rt(s,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=an),new Ir(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},et=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bu={type:"move"},ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var si=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ft,this.environmentIntensity=1,this.environmentRotation=new Ft,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Dr=class extends bt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,u=Nt,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var As=class extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pi=new ht,cc=new ht,xr=[],hc=new fn,zu=new ht,us=new rt,ds=new kn,Rs=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),hc.copy(e.boundingBox).applyMatrix4(Pi),this.boundingBox.union(hc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),ds.copy(e.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),e.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pi),cc.multiplyMatrices(n,Pi),us.matrixWorld=cc,us.raycast(e,xr);for(let a=0,o=xr.length;a<o;a++){let c=xr[a];c.instanceId=r,c.object=this,t.push(c)}xr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dr(new Float32Array(s*this.count),s,this.count,go,cn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Oa=new L,ku=new L,Hu=new Ge,Zt=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Oa.subVectors(n,t).cross(ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hu.getNormalMatrix(e),s=this.coplanarPoint(Oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new kn,Vu=new ne(.5,.5),yr=new L,Hi=class{constructor(e=new Zt,t=new Zt,n=new Zt,s=new Zt,r=new Zt,a=new Zt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],y=r[9],m=r[10],f=r[11],S=r[12],E=r[13],b=r[14],A=r[15];if(s[0].setComponents(l-a,p-u,f-g,A-S).normalize(),s[1].setComponents(l+a,p+u,f+g,A+S).normalize(),s[2].setComponents(l+o,p+h,f+y,A+E).normalize(),s[3].setComponents(l-o,p-h,f-y,A-E).normalize(),n)s[4].setComponents(c,d,m,b).normalize(),s[5].setComponents(l-c,p-d,f-m,A-b).normalize();else if(s[4].setComponents(l-c,p-d,f-m,A-b).normalize(),t===on)s[5].setComponents(l+c,p+d,f+m,A+b).normalize();else if(t===_s)s[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);let t=Vu.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(yr.x=s.normal.x>0?e.max.x:e.min.x,yr.y=s.normal.y>0?e.max.y:e.min.y,yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cs=class extends bt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ps=class extends bt{constructor(e,t,n=Yn,s,r,a,o=Nt,c=Nt,l,u=Ui,h=1){if(u!==Ui&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Is=class extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ls=class i extends Et{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,p=2*h+d,g=n*2+r,y=s+1,m=new L,f=new L;for(let S=0;S<=g;S++){let E=0,b=0,A=0,T=0;if(S<=n){let _=S/n,M=_*Math.PI/2;b=-u-e*Math.cos(M),A=e*Math.sin(M),T=-e*Math.cos(M),E=_*h}else if(S<=n+r){let _=(S-n)/r;b=-u+_*t,A=e,T=0,E=h+_*d}else{let _=(S-n-r)/n,M=_*Math.PI/2;b=u+e*Math.sin(M),A=e*Math.cos(M),T=e*Math.sin(M),E=h+d+_*h}let P=Math.max(0,Math.min(1,E/p)),R=0;S===0?R=.5/s:S===g&&(R=-.5/s);for(let _=0;_<=s;_++){let M=_/s,C=M*Math.PI*2,F=Math.sin(C),V=Math.cos(C);f.x=-A*V,f.y=b,f.z=A*F,o.push(f.x,f.y,f.z),m.set(-A*V,T,A*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+R,P)}if(S>0){let _=(S-1)*y;for(let M=0;M<s;M++){let C=_+M,F=_+M+1,V=S*y+M,U=S*y+M+1;a.push(C,F,V),a.push(F,U,V)}}}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ds=class i extends Et{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new L,u=new ne;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let p=n+h/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Hn=class i extends Et{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],p=[],g=0,y=[],m=n/2,f=0;S(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function S(){let b=new L,A=new L,T=0,P=(t-e)/n;for(let R=0;R<=r;R++){let _=[],M=R/r,C=M*(t-e)+e;for(let F=0;F<=s;F++){let V=F/s,U=V*c+o,k=Math.sin(U),z=Math.cos(U);A.x=C*k,A.y=-M*n+m,A.z=C*z,h.push(A.x,A.y,A.z),b.set(k,P,z).normalize(),d.push(b.x,b.y,b.z),p.push(V,1-M),_.push(g++)}y.push(_)}for(let R=0;R<s;R++)for(let _=0;_<r;_++){let M=y[_][R],C=y[_+1][R],F=y[_+1][R+1],V=y[_][R+1];(e>0||_!==0)&&(u.push(M,C,V),T+=3),(t>0||_!==r-1)&&(u.push(C,F,V),T+=3)}l.addGroup(f,T,0),f+=T}function E(b){let A=g,T=new ne,P=new L,R=0,_=b===!0?e:t,M=b===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;let C=g;for(let F=0;F<=s;F++){let U=F/s*c+o,k=Math.cos(U),z=Math.sin(U);P.x=_*z,P.y=m*M,P.z=_*k,h.push(P.x,P.y,P.z),d.push(0,M,0),T.x=k*.5+.5,T.y=z*.5*M+.5,p.push(T.x,T.y),g++}for(let F=0;F<s;F++){let V=A+F,U=C+F;b===!0?u.push(U,U+1,V):u.push(U+1,U,V),R+=3}l.addGroup(f,R,b===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var jt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ne:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,c=new ht;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(He(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(He(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Us=class extends jt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ur=class extends Us{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ml(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var vr=new L,Ba=new ml,za=new ml,ka=new ml,ri=class extends jt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(vr.subVectors(s[0],s[1]).add(s[0]),l=vr);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(vr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=vr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ba.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,y,m),za.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,y,m),ka.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),za.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),ka.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Ba.calc(c),za.calc(c),ka.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function uc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Gu(i,e){let t=1-i;return t*t*e}function Wu(i,e){return 2*(1-i)*i*e}function Xu(i,e){return i*i*e}function gs(i,e,t,n){return Gu(i,e)+Wu(i,t)+Xu(i,n)}function qu(i,e){let t=1-i;return t*t*t*e}function Yu(i,e){let t=1-i;return 3*t*t*i*e}function Zu(i,e){return 3*(1-i)*i*i*e}function Ku(i,e){return i*i*i*e}function xs(i,e,t,n,s){return qu(i,e)+Yu(i,t)+Zu(i,n)+Ku(i,s)}var Nr=class extends jt{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xs(e,s.x,r.x,a.x,o.x),xs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fr=class extends jt{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xs(e,s.x,r.x,a.x,o.x),xs(e,s.y,r.y,a.y,o.y),xs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Or=class extends jt{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Br=class extends jt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends jt{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(gs(e,s.x,r.x,a.x),gs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ns=class extends jt{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(gs(e,s.x,r.x,a.x),gs(e,s.y,r.y,a.y),gs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kr=class extends jt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(uc(o,c.x,l.x,u.x,h.x),uc(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},Ju=Object.freeze({__proto__:null,ArcCurve:Ur,CatmullRomCurve3:ri,CubicBezierCurve:Nr,CubicBezierCurve3:Fr,EllipseCurve:Us,LineCurve:Or,LineCurve3:Br,QuadraticBezierCurve:zr,QuadraticBezierCurve3:Ns,SplineCurve:kr});var Fs=class i extends Et{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=He(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,h=new L,d=new ne,p=new L,g=new L,y=new L,m=0,f=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,f=e[S+1].y-e[S].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:m=e[S+1].x-e[S].x,f=e[S+1].y-e[S].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),c.push(p.x,p.y,p.z),y.copy(g)}for(let S=0;S<=t;S++){let E=n+S*u*s,b=Math.sin(E),A=Math.cos(E);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*b,h.y=e[T].y,h.z=e[T].x*A,a.push(h.x,h.y,h.z),d.x=S/t,d.y=T/(e.length-1),o.push(d.x,d.y);let P=c[3*T+0]*b,R=c[3*T+1],_=c[3*T+0]*A;l.push(P,R,_)}}for(let S=0;S<t;S++)for(let E=0;E<e.length-1;E++){let b=E+S*e.length,A=b,T=b+e.length,P=b+e.length+1,R=b+1;r.push(A,T,R),r.push(P,R,T)}this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("uv",new Je(o,2)),this.setAttribute("normal",new Je(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var mn=class i extends Et{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,p=[],g=[],y=[],m=[];for(let f=0;f<u;f++){let S=f*d-a;for(let E=0;E<l;E++){let b=E*h-r;g.push(b,-S,0),y.push(0,0,1),m.push(E/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){let E=S+l*f,b=S+l*(f+1),A=S+1+l*(f+1),T=S+1+l*f;p.push(E,b,T),p.push(b,A,T)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Vi=class i extends Et{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new L,d=new L,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let S=[],E=f/n,b=0;f===0&&a===0?b=.5/t:f===n&&c===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){let T=A/t;h.x=-e*Math.cos(s+T*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(s+T*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(T+b,1-E),S.push(l++)}u.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let E=u[f][S+1],b=u[f][S],A=u[f+1][S],T=u[f+1][S+1];(f!==0||a>0)&&p.push(E,b,T),(f!==n-1||c<Math.PI)&&p.push(b,A,T)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Os=class i extends Et{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],u=new L,h=new L,d=new L;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(y),h.y=(e+t*Math.cos(m))*Math.sin(y),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,S=(s+1)*p+g;a.push(y,m,S),a.push(m,f,S)}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var oi=class i extends Et{constructor(e=new Ns(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,c=new L,l=new ne,u=new L,h=[],d=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function y(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),S(),f()}function m(E){u=e.getPointAt(E/t,u);let b=a.normals[E],A=a.binormals[E];for(let T=0;T<=s;T++){let P=T/s*Math.PI*2,R=Math.sin(P),_=-Math.cos(P);c.x=_*b.x+R*A.x,c.y=_*b.y+R*A.y,c.z=_*b.z+R*A.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function f(){for(let E=1;E<=t;E++)for(let b=1;b<=s;b++){let A=(s+1)*(E-1)+(b-1),T=(s+1)*E+(b-1),P=(s+1)*E+b,R=(s+1)*(E-1)+b;g.push(A,T,R),g.push(T,P,R)}}function S(){for(let E=0;E<=t;E++)for(let b=0;b<=s;b++)l.x=E/t,l.y=b/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ju[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Gt=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qt=class extends Gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Bs=class extends An{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hr=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vr=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _r(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ju(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ai=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gr=class extends ai{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ga,endingEnd:Ga}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wa:r=e,o=2*t-n;break;case Xa:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wa:a=e,c=2*n-t;break;case Xa:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,S=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,E=(-1-p)*m+(1.5+p)*y+.5*g,b=p*m-p*y;for(let A=0;A!==o;++A)r[A]=f*a[u+A]+S*a[l+A]+E*a[c+A]+b*a[h+A];return r}},Wr=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},Xr=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ys:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case br:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return br}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ju(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===br,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let y=t[h+g];if(y!==t[d+g]||y!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wt.prototype.ValueTypeName="";Wt.prototype.TimeBufferType=Float32Array;Wt.prototype.ValueBufferType=Float32Array;Wt.prototype.DefaultInterpolation=Ar;var Vn=class extends Wt{constructor(e,t,n){super(e,t,n)}};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=ys;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};qr.prototype.ValueTypeName="color";var Yr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};Yr.prototype.ValueTypeName="number";var Zr=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)Kt.slerpFlat(r,0,a,l-o,a,l,c);return r}},zs=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Zr(this.times,this.values,this.getValueSize(),e)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Wt{constructor(e,t,n){super(e,t,n)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=ys;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="vector";var Mr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Jr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},rh=new Jr,Gi=class{constructor(e){this.manager=e!==void 0?e:rh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ii=new WeakMap,jr=class extends Gi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Mr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ii.get(a);h===void 0&&(h=[],Ii.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Fi("img");function c(){u(),t&&t(this);let h=Ii.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onLoad&&p.onLoad(this)}Ii.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Mr.remove(`image:${e}`);let d=Ii.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(h)}Ii.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Mr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ks=class extends Gi{constructor(e){super(e)}load(e,t,n,s){let r=new bt,a=new jr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Wi=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Hs=class extends Wi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ha=new ht,dc=new L,fc=new L,Qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(dc),fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fc),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var pc=new ht,fs=new L,Va=new L,Za=class extends Qr{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fs.setFromMatrixPosition(e.matrixWorld),n.position.copy(fs),Va.copy(n.position),Va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Va),n.updateMatrixWorld(),s.makeTranslation(-fs.x,-fs.y,-fs.z),pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc,n.coordinateSystem,n.reversedDepth)}},Vs=class extends Wi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Za}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Gs=class extends ws{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ka=class extends Qr{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xi=class extends Wi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Ka}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $r=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var gl="\\[\\]\\.:\\/",Qu=new RegExp("["+gl+"]","g"),xl="[^"+gl+"]",$u="[^"+gl.replace("\\.","")+"]",ed=/((?:WC+[\/:])*)/.source.replace("WC",xl),td=/(WCOD+)?/.source.replace("WCOD",$u),nd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),id=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),sd=new RegExp("^"+ed+td+nd+id+"$"),rd=["material","materials","bones","map"],Ja=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qu,"")}static parseTrackName(e){let t=sd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Ja;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var c0=new Float32Array(1);var qi=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ws=class extends un{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function yl(i,e,t,n){let s=od(n);switch(t){case al:return i*e;case go:return i*e/s.components*s.byteLength;case xo:return i*e/s.components*s.byteLength;case cl:return i*e*2/s.components*s.byteLength;case yo:return i*e*2/s.components*s.byteLength;case ll:return i*e*3/s.components*s.byteLength;case $t:return i*e*4/s.components*s.byteLength;case vo:return i*e*4/s.components*s.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ks:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:case So:return Math.max(i,16)*Math.max(e,8)/4;case _o:case Mo:return Math.max(i,8)*Math.max(e,8)/2;case Eo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ho:case Vo:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function od(i){switch(i){case ln:case il:return{byteLength:1,components:1};case Yi:case sl:case Zi:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case Yn:case fo:case cn:return{byteLength:4,components:1};case rl:case ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ch(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ld(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let y=h[p];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hd=`#ifdef USE_ALPHAHASH
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
#endif`,ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,md=`#ifdef USE_AOMAP
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
#endif`,gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xd=`#ifdef USE_BATCHING
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
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Md=`#ifdef USE_IRIDESCENCE
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
#endif`,Sd=`#ifdef USE_BUMPMAP
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
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ld=`#define PI 3.141592653589793
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
} // validated`,Dd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ud=`vec3 transformedNormal = objectNormal;
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
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",kd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
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
}`,jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ef=`uniform bool receiveShadow;
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
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,af=`PhysicalMaterial material;
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
#endif`,lf=`struct PhysicalMaterial {
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
}`,cf=`
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
#endif`,hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vf=`#if defined( USE_POINTS_UV )
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
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`#ifdef USE_MORPHTARGETS
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
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lf=`#ifdef USE_NORMALMAP
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
#endif`,Df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zf=`float getShadowMask() {
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
}`,Kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jf=`#ifdef USE_SKINNING
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
#endif`,jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qf=`#ifdef USE_SKINNING
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
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,np=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ip=`#ifdef USE_TRANSMISSION
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
#endif`,sp=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hp=`uniform sampler2D t2D;
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`#include <common>
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
}`,gp=`#if DEPTH_PACKING == 3200
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
}`,xp=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#include <common>
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
}`,Ep=`uniform vec3 diffuse;
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
}`,wp=`#define LAMBERT
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
}`,Tp=`#define LAMBERT
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
}`,Ap=`#define MATCAP
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
}`,Rp=`#define MATCAP
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
}`,Cp=`#define NORMAL
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
}`,Pp=`#define NORMAL
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
}`,Ip=`#define PHONG
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
}`,Lp=`#define PHONG
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
}`,Dp=`#define STANDARD
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
}`,Up=`#define STANDARD
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
}`,Np=`#define TOON
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
}`,Fp=`#define TOON
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
}`,Op=`uniform float size;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,zp=`#include <common>
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
}`,kp=`uniform vec3 color;
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
}`,Hp=`uniform float rotation;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:cd,alphahash_pars_fragment:hd,alphamap_fragment:ud,alphamap_pars_fragment:dd,alphatest_fragment:fd,alphatest_pars_fragment:pd,aomap_fragment:md,aomap_pars_fragment:gd,batching_pars_vertex:xd,batching_vertex:yd,begin_vertex:vd,beginnormal_vertex:_d,bsdfs:bd,iridescence_fragment:Md,bumpmap_pars_fragment:Sd,clipping_planes_fragment:Ed,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Td,clipping_planes_vertex:Ad,color_fragment:Rd,color_pars_fragment:Cd,color_pars_vertex:Pd,color_vertex:Id,common:Ld,cube_uv_reflection_fragment:Dd,defaultnormal_vertex:Ud,displacementmap_pars_vertex:Nd,displacementmap_vertex:Fd,emissivemap_fragment:Od,emissivemap_pars_fragment:Bd,colorspace_fragment:zd,colorspace_pars_fragment:kd,envmap_fragment:Hd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Gd,envmap_pars_vertex:Wd,envmap_physical_pars_fragment:tf,envmap_vertex:Xd,fog_vertex:qd,fog_pars_vertex:Yd,fog_fragment:Zd,fog_pars_fragment:Kd,gradientmap_pars_fragment:Jd,lightmap_pars_fragment:jd,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:$d,lights_pars_begin:ef,lights_toon_fragment:nf,lights_toon_pars_fragment:sf,lights_phong_fragment:rf,lights_phong_pars_fragment:of,lights_physical_fragment:af,lights_physical_pars_fragment:lf,lights_fragment_begin:cf,lights_fragment_maps:hf,lights_fragment_end:uf,logdepthbuf_fragment:df,logdepthbuf_pars_fragment:ff,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:mf,map_fragment:gf,map_pars_fragment:xf,map_particle_fragment:yf,map_particle_pars_fragment:vf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:bf,morphinstance_vertex:Mf,morphcolor_vertex:Sf,morphnormal_vertex:Ef,morphtarget_pars_vertex:wf,morphtarget_vertex:Tf,normal_fragment_begin:Af,normal_fragment_maps:Rf,normal_pars_fragment:Cf,normal_pars_vertex:Pf,normal_vertex:If,normalmap_pars_fragment:Lf,clearcoat_normal_fragment_begin:Df,clearcoat_normal_fragment_maps:Uf,clearcoat_pars_fragment:Nf,iridescence_pars_fragment:Ff,opaque_fragment:Of,packing:Bf,premultiplied_alpha_fragment:zf,project_vertex:kf,dithering_fragment:Hf,dithering_pars_fragment:Vf,roughnessmap_fragment:Gf,roughnessmap_pars_fragment:Wf,shadowmap_pars_fragment:Xf,shadowmap_pars_vertex:qf,shadowmap_vertex:Yf,shadowmask_pars_fragment:Zf,skinbase_vertex:Kf,skinning_pars_vertex:Jf,skinning_vertex:jf,skinnormal_vertex:Qf,specularmap_fragment:$f,specularmap_pars_fragment:ep,tonemapping_fragment:tp,tonemapping_pars_fragment:np,transmission_fragment:ip,transmission_pars_fragment:sp,uv_pars_fragment:rp,uv_pars_vertex:op,uv_vertex:ap,worldpos_vertex:lp,background_vert:cp,background_frag:hp,backgroundCube_vert:up,backgroundCube_frag:dp,cube_vert:fp,cube_frag:pp,depth_vert:mp,depth_frag:gp,distanceRGBA_vert:xp,distanceRGBA_frag:yp,equirect_vert:vp,equirect_frag:_p,linedashed_vert:bp,linedashed_frag:Mp,meshbasic_vert:Sp,meshbasic_frag:Ep,meshlambert_vert:wp,meshlambert_frag:Tp,meshmatcap_vert:Ap,meshmatcap_frag:Rp,meshnormal_vert:Cp,meshnormal_frag:Pp,meshphong_vert:Ip,meshphong_frag:Lp,meshphysical_vert:Dp,meshphysical_frag:Up,meshtoon_vert:Np,meshtoon_frag:Fp,points_vert:Op,points_frag:Bp,shadow_vert:zp,shadow_frag:kp,sprite_vert:Hp,sprite_frag:Vp},he={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},yn={basic:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ct([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ct([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ct([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ct([he.points,he.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ct([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ct([he.common,he.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ct([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ct([he.sprite,he.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ct([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ct([he.lights,he.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};yn.physical={uniforms:Ct([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Ko={r:0,b:0,g:0},ui=new Ft,Gp=new ht;function Wp(i,e,t,n,s,r,a){let o=new Ve(0),c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function y(E){let b=!1,A=g(E);A===null?f(o,c):A&&A.isColor&&(f(A,1),b=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){let A=g(b);A&&(A.isCubeTexture||A.mapping===Xs)?(u===void 0&&(u=new rt(new pn(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:hi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ui.copy(b.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(ui)),u.material.toneMapped=je.getTransfer(A.colorSpace)!==nt,(h!==A||d!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new rt(new mn(2,2),new Lt({name:"BackgroundMaterial",uniforms:hi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=je.getTransfer(A.colorSpace)!==nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,b){E.getRGB(Ko,pl(i)),n.buffers.color.setClear(Ko.r,Ko.g,Ko.b,b,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),c=b,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:y,addToRenderList:m,dispose:S}}function Xp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,C,F,V,U){let k=!1,z=h(V,F,C);r!==z&&(r=z,l(r.object)),k=p(M,V,F,U),k&&g(M,V,F,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,b(M,C,F,V),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,C,F){let V=F.wireframe===!0,U=n[M.id];U===void 0&&(U={},n[M.id]=U);let k=U[C.id];k===void 0&&(k={},U[C.id]=k);let z=k[V];return z===void 0&&(z=d(c()),k[V]=z),z}function d(M){let C=[],F=[],V=[];for(let U=0;U<t;U++)C[U]=0,F[U]=0,V[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,C,F,V){let U=r.attributes,k=C.attributes,z=0,Z=F.getAttributes();for(let H in Z)if(Z[H].location>=0){let $=U[H],ce=k[H];if(ce===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),$===void 0||$.attribute!==ce||ce&&$.data!==ce.data)return!0;z++}return r.attributesNum!==z||r.index!==V}function g(M,C,F,V){let U={},k=C.attributes,z=0,Z=F.getAttributes();for(let H in Z)if(Z[H].location>=0){let $=k[H];$===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&($=M.instanceColor));let ce={};ce.attribute=$,$&&$.data&&(ce.data=$.data),U[H]=ce,z++}r.attributes=U,r.attributesNum=z,r.index=V}function y(){let M=r.newAttributes;for(let C=0,F=M.length;C<F;C++)M[C]=0}function m(M){f(M,0)}function f(M,C){let F=r.newAttributes,V=r.enabledAttributes,U=r.attributeDivisors;F[M]=1,V[M]===0&&(i.enableVertexAttribArray(M),V[M]=1),U[M]!==C&&(i.vertexAttribDivisor(M,C),U[M]=C)}function S(){let M=r.newAttributes,C=r.enabledAttributes;for(let F=0,V=C.length;F<V;F++)C[F]!==M[F]&&(i.disableVertexAttribArray(F),C[F]=0)}function E(M,C,F,V,U,k,z){z===!0?i.vertexAttribIPointer(M,C,F,U,k):i.vertexAttribPointer(M,C,F,V,U,k)}function b(M,C,F,V){y();let U=V.attributes,k=F.getAttributes(),z=C.defaultAttributeValues;for(let Z in k){let H=k[Z];if(H.location>=0){let ee=U[Z];if(ee===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){let $=ee.normalized,ce=ee.itemSize,pe=e.get(ee);if(pe===void 0)continue;let Be=pe.buffer,Ye=pe.type,Xe=pe.bytesPerElement,K=Ye===i.INT||Ye===i.UNSIGNED_INT||ee.gpuType===fo;if(ee.isInterleavedBufferAttribute){let Q=ee.data,ge=Q.stride,De=ee.offset;if(Q.isInstancedInterleavedBuffer){for(let Me=0;Me<H.locationSize;Me++)f(H.location+Me,Q.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Me=0;Me<H.locationSize;Me++)m(H.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Me=0;Me<H.locationSize;Me++)E(H.location+Me,ce/H.locationSize,Ye,$,ge*Xe,(De+ce/H.locationSize*Me)*Xe,K)}else{if(ee.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)f(H.location+Q,ee.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Q=0;Q<H.locationSize;Q++)E(H.location+Q,ce/H.locationSize,Ye,$,ce*Xe,ce/H.locationSize*Q*Xe,K)}}else if(z!==void 0){let $=z[Z];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(H.location,$);break;case 3:i.vertexAttrib3fv(H.location,$);break;case 4:i.vertexAttrib4fv(H.location,$);break;default:i.vertexAttrib1fv(H.location,$)}}}}S()}function A(){R();for(let M in n){let C=n[M];for(let F in C){let V=C[F];for(let U in V)u(V[U].object),delete V[U];delete C[F]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let F in C){let V=C[F];for(let U in V)u(V[U].object),delete V[U];delete C[F]}delete n[M.id]}function P(M){for(let C in n){let F=n[C];if(F[M.id]===void 0)continue;let V=F[M.id];for(let U in V)u(V[U].object),delete V[U];delete F[M.id]}}function R(){_(),a=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:_,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function qp(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function c(l,u,h,d){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*d[y];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Yp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==$t&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let R=P===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ln&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==cn&&!R)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:A,maxSamples:T}}function Zp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Zt,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let S=r?0:n,E=S*4,b=f.clippingState||null;c.value=b,b=u(g,d,E,p);for(let A=0;A!==E;++A)b[A]=t[A];f.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let f=p+y*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,b=p;E!==y;++E,b+=4)a.copy(h[E]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Kp(i){let e=new WeakMap;function t(a,o){return o===co?a.mapping=li:o===ho&&(a.mapping=ci),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===co||o===ho)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Lr(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var $i=4,oh=[.125,.215,.35,.446,.526,.582],pi=20,vl=new Gs,ah=new Ve,_l=null,bl=0,Ml=0,Sl=!1,fi=(1+Math.sqrt(5))/2,Qi=1/fi,lh=[new L(-fi,Qi,0),new L(fi,Qi,0),new L(-Qi,0,fi),new L(Qi,0,fi),new L(0,fi,-Qi),new L(0,fi,Qi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Jp=new L,ts=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Jp}=r;_l=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,bl,Ml),this._renderer.xr.enabled=Sl,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Zi,format:$t,colorSpace:ii,depthBuffer:!1},s=ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jp(r)),this._blurMaterial=Qp(r,e,t)}return s}_compileMaterial(e){let t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,s,r){let c=new St(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(ah),h.toneMapping=Cn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let y=new Jt({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),m=new rt(new pn,y),f=!1,S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,f=!0):(y.color.copy(ah),f=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):b===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));let A=this._cubeSize;Jo(s,b*A,E>2?A:0,A,A),h.setRenderTarget(s),f&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===li||e.mapping===ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,vl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lh[(s-r-1)%lh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new rt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*pi-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):pi;m>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);let f=[],S=0;for(let P=0;P<pi;++P){let R=P/y,_=Math.exp(-R*R/2);f.push(_),P===0?S+=_:P<m&&(S+=2*_)}for(let P=0;P<f.length;P++)f[P]=f[P]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;let b=this._sizeLods[s],A=3*b*(s>E-$i?s-E+$i:0),T=4*(this._cubeSize-b);Jo(t,A,T,3*b,2*b),c.setRenderTarget(t),c.render(h,vl)}};function jp(i){let e=[],t=[],n=[],s=i,r=i-$i+1+oh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-$i?c=oh[a-i+$i-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,f=1,S=new Float32Array(y*g*p),E=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let T=0;T<p;T++){let P=T%3*2/3-1,R=T>2?0:-1,_=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];S.set(_,y*g*T),E.set(d,m*g*T);let M=[T,T,T,T,T,T];b.set(M,f*g*T)}let A=new Et;A.setAttribute("position",new Ut(S,y)),A.setAttribute("uv",new Ut(E,m)),A.setAttribute("faceIndex",new Ut(b,f)),e.push(A),s>$i&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ch(i,e,t){let n=new dn(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Qp(i,e,t){let n=new Float32Array(pi),s=new L(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function hh(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function uh(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Dl(){return`

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
	`}function $p(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===co||c===ho,u=c===li||c===ci;if(l||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ts(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new ts(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function em(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tm(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){let d=[],p=h.index,g=h.attributes.position,y=0;if(p!==null){let S=p.array;y=p.version;for(let E=0,b=S.length;E<b;E+=3){let A=S[E+0],T=S[E+1],P=S[E+2];d.push(A,T,T,P,P,A)}}else if(g!==void 0){let S=g.array;y=g.version;for(let E=0,b=S.length/3-1;E<b;E+=3){let A=E+0,T=E+1,P=E+2;d.push(A,T,T,P,P,A)}}else return;let m=new(fl(d)?Es:Ss)(d,1);m.version=y;let f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function nm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*y[S];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function im(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sm(i,e,t){let n=new WeakMap,s=new Ke;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let b=o.attributes.position.count*E,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*A*4*h),P=new bs(T,b,A,h);P.type=cn,P.needsUpdate=!0;let R=E*4;for(let M=0;M<h;M++){let C=m[M],F=f[M],V=S[M],U=b*A*4*M;for(let k=0;k<C.count;k++){let z=k*R;p===!0&&(s.fromBufferAttribute(C,k),T[U+z+0]=s.x,T[U+z+1]=s.y,T[U+z+2]=s.z,T[U+z+3]=0),g===!0&&(s.fromBufferAttribute(F,k),T[U+z+4]=s.x,T[U+z+5]=s.y,T[U+z+6]=s.z,T[U+z+7]=0),y===!0&&(s.fromBufferAttribute(V,k),T[U+z+8]=s.x,T[U+z+9]=s.y,T[U+z+10]=s.z,T[U+z+11]=V.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new ne(b,A)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rm(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Ph=new bt,dh=new Ps(1,1),Ih=new bs,Lh=new Pr,Dh=new Ts,fh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),xh=new Float32Array(4);function ns(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=fh[s];if(r===void 0&&(r=new Float32Array(s),fh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $o(i,e){let t=ph[e];t===void 0&&(t=new Int32Array(e),ph[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function om(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function am(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function hm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;xh.set(n),i.uniformMatrix2fv(this.addr,!1,xh),yt(t,n)}}function um(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;gh.set(n),i.uniformMatrix3fv(this.addr,!1,gh),yt(t,n)}}function dm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;mh.set(n),i.uniformMatrix4fv(this.addr,!1,mh),yt(t,n)}}function fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function xm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function _m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function bm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dh.compareFunction=hl,r=dh):r=Ph,t.setTexture2D(e||r,s)}function Mm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lh,s)}function Sm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Dh,s)}function Em(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ih,s)}function wm(i){switch(i){case 5126:return om;case 35664:return am;case 35665:return lm;case 35666:return cm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return xm;case 36294:return ym;case 36295:return vm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return Em}}function Tm(i,e){i.uniform1fv(this.addr,e)}function Am(i,e){let t=ns(e,this.size,2);i.uniform2fv(this.addr,t)}function Rm(i,e){let t=ns(e,this.size,3);i.uniform3fv(this.addr,t)}function Cm(i,e){let t=ns(e,this.size,4);i.uniform4fv(this.addr,t)}function Pm(i,e){let t=ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Im(i,e){let t=ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lm(i,e){let t=ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dm(i,e){i.uniform1iv(this.addr,e)}function Um(i,e){i.uniform2iv(this.addr,e)}function Nm(i,e){i.uniform3iv(this.addr,e)}function Fm(i,e){i.uniform4iv(this.addr,e)}function Om(i,e){i.uniform1uiv(this.addr,e)}function Bm(i,e){i.uniform2uiv(this.addr,e)}function zm(i,e){i.uniform3uiv(this.addr,e)}function km(i,e){i.uniform4uiv(this.addr,e)}function Hm(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ph,r[a])}function Vm(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lh,r[a])}function Gm(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Dh,r[a])}function Wm(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ih,r[a])}function Xm(i){switch(i){case 5126:return Tm;case 35664:return Am;case 35665:return Rm;case 35666:return Cm;case 35674:return Pm;case 35675:return Im;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return zm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Wm}}var wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wm(t.type)}},Tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xm(t.type)}},Al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},El=/(\w+)(\])?(\[|\.)?/g;function yh(i,e){i.seq.push(e),i.map[e.id]=e}function qm(i,e,t){let n=i.name,s=n.length;for(El.lastIndex=0;;){let r=El.exec(n),a=El.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){yh(t,l===void 0?new wl(o,i,e):new Tl(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Al(o),yh(t,h)),t=h}}}var es=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);qm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function vh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ym=37297,Zm=0;function Km(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var _h=new Ge;function Jm(i){je._getMatrix(_h,je.workingColorSpace,i);let e=`mat3( ${_h.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case vs:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Km(i.getShaderSource(e),o)}else return r}function jm(i,e){let t=Jm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qm(i,e){let t;switch(e){case Bc:t="Linear";break;case zc:t="Reinhard";break;case kc:t="Cineon";break;case Hc:t="ACESFilmic";break;case Gc:t="AgX";break;case lo:t="Neutral";break;case Vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jo=new L;function $m(){je.getLuminanceCoefficients(jo);let i=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function tg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ng(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function js(i){return i!==""}function Mh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(ig,rg)}var sg=new Map;function rg(i,e){let t=qe[e];if(t===void 0){let n=sg.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}var og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(i){return i.replace(og,ag)}function ag(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function lg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function cg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case ci:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function ug(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ao:e="ENVMAP_BLENDING_MULTIPLY";break;case Fc:e="ENVMAP_BLENDING_MIX";break;case Oc:e="ENVMAP_BLENDING_ADD";break}return e}function dg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=lg(t),l=cg(t),u=hg(t),h=ug(t),d=dg(t),p=eg(t),g=tg(r),y=s.createProgram(),m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),f.length>0&&(f+=`
`)):(m=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),f=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Qm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,jm("linearToOutputTexel",t.outputColorSpace),$m(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),a=Rl(a),a=Mh(a,t),a=Sh(a,t),o=Rl(o),o=Mh(o,t),o=Sh(o,t),a=Eh(a),o=Eh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=S+m+a,b=S+f+o,A=vh(s,s.VERTEX_SHADER,E),T=vh(s,s.FRAGMENT_SHADER,b);s.attachShader(y,A),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(C){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(A)||"",U=s.getShaderInfoLog(T)||"",k=F.trim(),z=V.trim(),Z=U.trim(),H=!0,ee=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,T);else{let $=bh(s,A,"vertex"),ce=bh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+$+`
`+ce)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||Z==="")&&(ee=!1);ee&&(C.diagnostics={runnable:H,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(A),s.deleteShader(T),R=new es(s,y),_=ng(s,y)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let _;this.getAttributes=function(){return _===void 0&&P(this),_};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Ym)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zm++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=T,this}var pg=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pl(e),t.set(e,n)),n}},Pl=class{constructor(e){this.id=pg++,this.code=e,this.usedTimes=0}};function mg(i,e,t,n,s,r,a){let o=new Ms,c=new Cl,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,C,F,V){let U=F.fog,k=V.geometry,z=_.isMeshStandardMaterial?F.environment:null,Z=(_.isMeshStandardMaterial?t:e).get(_.envMap||z),H=Z&&Z.mapping===Xs?Z.image.height:null,ee=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=$!==void 0?$.length:0,pe=0;k.morphAttributes.position!==void 0&&(pe=1),k.morphAttributes.normal!==void 0&&(pe=2),k.morphAttributes.color!==void 0&&(pe=3);let Be,Ye,Xe,K;if(ee){let tt=yn[ee];Be=tt.vertexShader,Ye=tt.fragmentShader}else Be=_.vertexShader,Ye=_.fragmentShader,c.update(_),Xe=c.getVertexShaderID(_),K=c.getFragmentShaderID(_);let Q=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,Me=V.isBatchedMesh===!0,Oe=!!_.map,at=!!_.matcap,I=!!Z,$e=!!_.aoMap,Ue=!!_.lightMap,Re=!!_.bumpMap,xe=!!_.normalMap,it=!!_.displacementMap,G=!!_.emissiveMap,ie=!!_.metalnessMap,Pe=!!_.roughnessMap,Ie=_.anisotropy>0,w=_.clearcoat>0,x=_.dispersion>0,B=_.iridescence>0,Y=_.sheen>0,J=_.transmission>0,q=Ie&&!!_.anisotropyMap,Se=w&&!!_.clearcoatMap,ae=w&&!!_.clearcoatNormalMap,Ee=w&&!!_.clearcoatRoughnessMap,we=B&&!!_.iridescenceMap,re=B&&!!_.iridescenceThicknessMap,fe=Y&&!!_.sheenColorMap,Ne=Y&&!!_.sheenRoughnessMap,Te=!!_.specularMap,ue=!!_.specularColorMap,We=!!_.specularIntensityMap,D=J&&!!_.transmissionMap,oe=J&&!!_.thicknessMap,le=!!_.gradientMap,ve=!!_.alphaMap,te=_.alphaTest>0,j=!!_.alphaHash,be=!!_.extensions,ze=Cn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ze=i.toneMapping);let ct={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:Ye,defines:_.defines,customVertexShaderID:Xe,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Me,batchingColor:Me&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ii,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:at,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:H,aoMap:$e,lightMap:Ue,bumpMap:Re,normalMap:xe,displacementMap:d&&it,emissiveMap:G,normalMapObjectSpace:xe&&_.normalMapType===Yc,normalMapTangentSpace:xe&&_.normalMapType===Zo,metalnessMap:ie,roughnessMap:Pe,anisotropy:Ie,anisotropyMap:q,clearcoat:w,clearcoatMap:Se,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:x,iridescence:B,iridescenceMap:we,iridescenceThicknessMap:re,sheen:Y,sheenColorMap:fe,sheenRoughnessMap:Ne,specularMap:Te,specularColorMap:ue,specularIntensityMap:We,transmission:J,transmissionMap:D,thicknessMap:oe,gradientMap:le,opaque:_.transparent===!1&&_.blending===ti&&_.alphaToCoverage===!1,alphaMap:ve,alphaTest:te,alphaHash:j,combine:_.combine,mapUv:Oe&&y(_.map.channel),aoMapUv:$e&&y(_.aoMap.channel),lightMapUv:Ue&&y(_.lightMap.channel),bumpMapUv:Re&&y(_.bumpMap.channel),normalMapUv:xe&&y(_.normalMap.channel),displacementMapUv:it&&y(_.displacementMap.channel),emissiveMapUv:G&&y(_.emissiveMap.channel),metalnessMapUv:ie&&y(_.metalnessMap.channel),roughnessMapUv:Pe&&y(_.roughnessMap.channel),anisotropyMapUv:q&&y(_.anisotropyMap.channel),clearcoatMapUv:Se&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(_.sheenRoughnessMap.channel),specularMapUv:Te&&y(_.specularMap.channel),specularColorMapUv:ue&&y(_.specularColorMap.channel),specularIntensityMapUv:We&&y(_.specularIntensityMap.channel),transmissionMapUv:D&&y(_.transmissionMap.channel),thicknessMapUv:oe&&y(_.thicknessMap.channel),alphaMapUv:ve&&y(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(xe||Ie),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!k.attributes.uv&&(Oe||ve),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:V.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===nt,decodeVideoTextureEmissive:G&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xn,flipSided:_.side===wt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:be&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&_.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function f(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)M.push(C),M.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(S(M,_),E(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function S(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function E(_,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),_.push(o.mask)}function b(_){let M=g[_.type],C;if(M){let F=yn[M];C=sh.clone(F.uniforms)}else C=_.uniforms;return C}function A(_,M){let C;for(let F=0,V=u.length;F<V;F++){let U=u[F];if(U.cacheKey===M){C=U,++C.usedTimes;break}}return C===void 0&&(C=new fg(i,M,_,r),u.push(C)),C}function T(_){if(--_.usedTimes===0){let M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function P(_){c.remove(_)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:R}}function gg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Th(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ah(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,g,y,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=m),e++,f}function o(h,d,p,g,y,m){let f=a(h,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(h,d,p,g,y,m){let f=a(h,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||xg),n.length>1&&n.sort(d||Th),s.length>1&&s.sort(d||Th)}function u(){for(let h=e,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function yg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ah,i.set(n,[a])):s>=r.length?(a=new Ah,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function vg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ve};break;case"SpotLight":t={position:new L,direction:new L,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function _g(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var bg=0;function Mg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sg(i){let e=new vg,t=_g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new ht,a=new ht;function o(l){let u=0,h=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,S=0,E=0,b=0,A=0,T=0,P=0;l.sort(Mg);for(let _=0,M=l.length;_<M;_++){let C=l[_],F=C.color,V=C.intensity,U=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=F.r*V,h+=F.g*V,d+=F.b*V;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],V);P++}else if(C.isDirectionalLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Z=C.shadow,H=t.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=z,p++}else if(C.isSpotLight){let z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(F).multiplyScalar(V),z.distance=U,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[y]=z;let Z=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,Z.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[y]=Z.matrix,C.castShadow){let H=t.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=k,b++}y++}else if(C.isRectAreaLight){let z=e.get(C);z.color.copy(F).multiplyScalar(V),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){let Z=C.shadow,H=t.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=z,g++}else if(C.isHemisphereLight){let z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(V),z.groundColor.copy(C.groundColor).multiplyScalar(V),n.hemi[f]=z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==S||R.numPointShadows!==E||R.numSpotShadows!==b||R.numSpotMaps!==A||R.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,R.directionalLength=p,R.pointLength=g,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=S,R.numPointShadows=E,R.numSpotShadows=b,R.numSpotMaps=A,R.numLightProbes=P,n.version=bg++)}function c(l,u){let h=0,d=0,p=0,g=0,y=0,m=u.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){let E=l[f];if(E.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(E.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let b=n.hemi[y];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:n}}function Rh(i){let e=new Sg(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Eg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rh(i),e.set(s,[o])):r>=a.length?(o=new Rh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`;function Ag(i,e,t){let n=new Hi,s=new ne,r=new ne,a=new Ke,o=new Hr({depthPacking:qc}),c=new Vr,l={},u=t.maxTextureSize,h={[Tn]:wt,[wt]:Tn,[xn]:xn},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:wg,fragmentShader:Tg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Et;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa;let f=this.type;this.render=function(T,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let _=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Rn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=f!==gn&&this.type===gn,U=f===gn&&this.type!==gn;for(let k=0,z=T.length;k<z;k++){let Z=T[k],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ee=H.getFrameExtents();if(s.multiply(ee),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,H.mapSize.y=r.y)),H.map===null||V===!0||U===!0){let ce=this.type!==gn?{minFilter:Nt,magFilter:Nt}:{};H.map!==null&&H.map.dispose(),H.map=new dn(s.x,s.y,ce),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let $=H.getViewportCount();for(let ce=0;ce<$;ce++){let pe=H.getViewport(ce);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(a),H.updateMatrices(Z,ce),n=H.getFrustum(),b(P,R,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===gn&&S(H,R),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(_,M,C)};function S(T,P){let R=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new dn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,R,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,R,p,y,null)}function E(T,P,R,_){let M=null,C=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=R.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=M.uuid,V=P.uuid,U=l[F];U===void 0&&(U={},l[F]=U);let k=U[V];k===void 0&&(k=M.clone(),U[V]=k,P.addEventListener("dispose",A)),M=k}if(M.visible=P.visible,M.wireframe=P.wireframe,_===gn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=i.properties.get(M);F.light=R}return M}function b(T,P,R,_,M){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let V=e.update(T),U=T.material;if(Array.isArray(U)){let k=V.groups;for(let z=0,Z=k.length;z<Z;z++){let H=k[z],ee=U[H.materialIndex];if(ee&&ee.visible){let $=E(T,ee,_,M);T.onBeforeShadow(i,T,P,R,V,$,H),i.renderBufferDirect(R,null,V,$,T,H),T.onAfterShadow(i,T,P,R,V,$,H)}}}else if(U.visible){let k=E(T,U,_,M);T.onBeforeShadow(i,T,P,R,V,k,null),i.renderBufferDirect(R,null,V,k,T,null),T.onAfterShadow(i,T,P,R,V,k,null)}}let F=T.children;for(let V=0,U=F.length;V<U;V++)b(F[V],P,R,_,M)}function A(T){T.target.removeEventListener("dispose",A);for(let R in l){let _=l[R],M=T.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}var Rg={[eo]:to,[no]:ro,[io]:oo,[ni]:so,[to]:eo,[ro]:no,[oo]:io,[so]:ni};function Cg(i,e){function t(){let D=!1,oe=new Ke,le=null,ve=new Ke(0,0,0,0);return{setMask:function(te){le!==te&&!D&&(i.colorMask(te,te,te,te),le=te)},setLocked:function(te){D=te},setClear:function(te,j,be,ze,ct){ct===!0&&(te*=ze,j*=ze,be*=ze),oe.set(te,j,be,ze),ve.equals(oe)===!1&&(i.clearColor(te,j,be,ze),ve.copy(oe))},reset:function(){D=!1,le=null,ve.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,le=null,ve=null,te=null;return{setReversed:function(j){if(oe!==j){let be=e.get("EXT_clip_control");j?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),oe=j;let ze=te;te=null,this.setClear(ze)}},getReversed:function(){return oe},setTest:function(j){j?Q(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(j){le!==j&&!D&&(i.depthMask(j),le=j)},setFunc:function(j){if(oe&&(j=Rg[j]),ve!==j){switch(j){case eo:i.depthFunc(i.NEVER);break;case to:i.depthFunc(i.ALWAYS);break;case no:i.depthFunc(i.LESS);break;case ni:i.depthFunc(i.LEQUAL);break;case io:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ro:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=j}},setLocked:function(j){D=j},setClear:function(j){te!==j&&(oe&&(j=1-j),i.clearDepth(j),te=j)},reset:function(){D=!1,le=null,ve=null,te=null,oe=!1}}}function s(){let D=!1,oe=null,le=null,ve=null,te=null,j=null,be=null,ze=null,ct=null;return{setTest:function(tt){D||(tt?Q(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(tt){oe!==tt&&!D&&(i.stencilMask(tt),oe=tt)},setFunc:function(tt,vn,hn){(le!==tt||ve!==vn||te!==hn)&&(i.stencilFunc(tt,vn,hn),le=tt,ve=vn,te=hn)},setOp:function(tt,vn,hn){(j!==tt||be!==vn||ze!==hn)&&(i.stencilOp(tt,vn,hn),j=tt,be=vn,ze=hn)},setLocked:function(tt){D=tt},setClear:function(tt){ct!==tt&&(i.clearStencil(tt),ct=tt)},reset:function(){D=!1,oe=null,le=null,ve=null,te=null,j=null,be=null,ze=null,ct=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,S=null,E=null,b=null,A=null,T=null,P=new Ve(0,0,0),R=0,_=!1,M=null,C=null,F=null,V=null,U=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Z=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Z>=2);let ee=null,$={},ce=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Be=new Ke().fromArray(ce),Ye=new Ke().fromArray(pe);function Xe(D,oe,le,ve){let te=new Uint8Array(4),j=i.createTexture();i.bindTexture(D,j),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<le;be++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(oe+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return j}let K={};K[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(ni),Re(!1),xe(ja),Q(i.CULL_FACE),$e(Rn);function Q(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function ge(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function De(D,oe){return h[D]!==oe?(i.bindFramebuffer(D,oe),h[D]=oe,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Me(D,oe){let le=p,ve=!1;if(D){le=d.get(oe),le===void 0&&(le=[],d.set(oe,le));let te=D.textures;if(le.length!==te.length||le[0]!==i.COLOR_ATTACHMENT0){for(let j=0,be=te.length;j<be;j++)le[j]=i.COLOR_ATTACHMENT0+j;le.length=te.length,ve=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,ve=!0);ve&&i.drawBuffers(le)}function Oe(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let at={[zn]:i.FUNC_ADD,[vc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};at[bc]=i.MIN,at[Mc]=i.MAX;let I={[Sc]:i.ZERO,[Ec]:i.ONE,[wc]:i.SRC_COLOR,[Sr]:i.SRC_ALPHA,[Ic]:i.SRC_ALPHA_SATURATE,[Cc]:i.DST_COLOR,[Ac]:i.DST_ALPHA,[Tc]:i.ONE_MINUS_SRC_COLOR,[Er]:i.ONE_MINUS_SRC_ALPHA,[Pc]:i.ONE_MINUS_DST_COLOR,[Rc]:i.ONE_MINUS_DST_ALPHA,[Lc]:i.CONSTANT_COLOR,[Dc]:i.ONE_MINUS_CONSTANT_COLOR,[Uc]:i.CONSTANT_ALPHA,[Nc]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(D,oe,le,ve,te,j,be,ze,ct,tt){if(D===Rn){y===!0&&(ge(i.BLEND),y=!1);return}if(y===!1&&(Q(i.BLEND),y=!0),D!==yc){if(D!==m||tt!==_){if((f!==zn||b!==zn)&&(i.blendEquation(i.FUNC_ADD),f=zn,b=zn),tt)switch(D){case ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFunc(i.ONE,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case el:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,E=null,A=null,T=null,P.set(0,0,0),R=0,m=D,_=tt}return}te=te||oe,j=j||le,be=be||ve,(oe!==f||te!==b)&&(i.blendEquationSeparate(at[oe],at[te]),f=oe,b=te),(le!==S||ve!==E||j!==A||be!==T)&&(i.blendFuncSeparate(I[le],I[ve],I[j],I[be]),S=le,E=ve,A=j,T=be),(ze.equals(P)===!1||ct!==R)&&(i.blendColor(ze.r,ze.g,ze.b,ct),P.copy(ze),R=ct),m=D,_=!1}function Ue(D,oe){D.side===xn?ge(i.CULL_FACE):Q(i.CULL_FACE);let le=D.side===wt;oe&&(le=!le),Re(le),D.blending===ti&&D.transparent===!1?$e(Rn):$e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ve=D.stencilWrite;o.setTest(ve),ve&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),G(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function xe(D){D!==mc?(Q(i.CULL_FACE),D!==C&&(D===ja?i.cullFace(i.BACK):D===gc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),C=D}function it(D){D!==F&&(z&&i.lineWidth(D),F=D)}function G(D,oe,le){D?(Q(i.POLYGON_OFFSET_FILL),(V!==oe||U!==le)&&(i.polygonOffset(oe,le),V=oe,U=le)):ge(i.POLYGON_OFFSET_FILL)}function ie(D){D?Q(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function Pe(D){D===void 0&&(D=i.TEXTURE0+k-1),ee!==D&&(i.activeTexture(D),ee=D)}function Ie(D,oe,le){le===void 0&&(ee===null?le=i.TEXTURE0+k-1:le=ee);let ve=$[le];ve===void 0&&(ve={type:void 0,texture:void 0},$[le]=ve),(ve.type!==D||ve.texture!==oe)&&(ee!==le&&(i.activeTexture(le),ee=le),i.bindTexture(D,oe||K[D]),ve.type=D,ve.texture=oe)}function w(){let D=$[ee];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(D){Be.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Be.copy(D))}function Ne(D){Ye.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ye.copy(D))}function Te(D,oe){let le=l.get(oe);le===void 0&&(le=new WeakMap,l.set(oe,le));let ve=le.get(D);ve===void 0&&(ve=i.getUniformBlockIndex(oe,D.name),le.set(D,ve))}function ue(D,oe){let ve=l.get(oe).get(D);c.get(oe)!==ve&&(i.uniformBlockBinding(oe,ve,D.__bindingPointIndex),c.set(oe,ve))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ee=null,$={},h={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,S=null,E=null,b=null,A=null,T=null,P=new Ve(0,0,0),R=0,_=!1,M=null,C=null,F=null,V=null,U=null,Be.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ge,bindFramebuffer:De,drawBuffers:Me,useProgram:Oe,setBlending:$e,setMaterial:Ue,setFlipSided:Re,setCullFace:xe,setLineWidth:it,setPolygonOffset:G,setScissorTest:ie,activeTexture:Pe,bindTexture:Ie,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:we,texImage3D:re,updateUBOMapping:Te,uniformBlockBinding:ue,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:Se,scissor:fe,viewport:Ne,reset:We}}function Pg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):Fi("canvas")}function y(w,x,B){let Y=1,J=Ie(w);if((J.width>B||J.height>B)&&(Y=B/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let q=Math.floor(Y*J.width),Se=Math.floor(Y*J.height);h===void 0&&(h=g(q,Se));let ae=x?g(q,Se):h;return ae.width=q,ae.height=Se,ae.getContext("2d").drawImage(w,0,0,q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Se+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,B,Y,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=x;if(x===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),x===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){let Se=J?vs:je.getTransfer(Y);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=Se===nt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(w,x){let B;return w?x===null||x===Yn||x===Ki?B=i.DEPTH24_STENCIL8:x===cn?B=i.DEPTH32F_STENCIL8:x===Yi&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yn||x===Ki?B=i.DEPTH_COMPONENT24:x===cn?B=i.DEPTH_COMPONENT32F:x===Yi&&(B=i.DEPTH_COMPONENT16),B}function A(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Nt&&w.minFilter!==an?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){let x=w.target;x.removeEventListener("dispose",T),R(x),x.isVideoTexture&&u.delete(x)}function P(w){let x=w.target;x.removeEventListener("dispose",P),M(x)}function R(w){let x=n.get(w);if(x.__webglInit===void 0)return;let B=w.source,Y=d.get(B);if(Y){let J=Y[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&_(w),Object.keys(Y).length===0&&d.delete(B)}n.remove(w)}function _(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let B=w.source,Y=d.get(B);delete Y[x.__cacheKey],a.memory.textures--}function M(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let J=0;J<x.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=w.textures;for(let Y=0,J=B.length;Y<J;Y++){let q=n.get(B[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[Y])}n.remove(w)}let C=0;function F(){C=0}function V(){let w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function U(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function k(w,x){let B=n.get(w);if(w.isVideoTexture&&ie(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,w,x);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function z(w,x){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){K(B,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Z(w,x){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){K(B,w,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function H(w,x){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Q(B,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let ee={[wr]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},$={[Nt]:i.NEAREST,[Wc]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},ce={[Zc]:i.NEVER,[eh]:i.ALWAYS,[Kc]:i.LESS,[hl]:i.LEQUAL,[Jc]:i.EQUAL,[$c]:i.GEQUAL,[jc]:i.GREATER,[Qc]:i.NOTEQUAL};function pe(w,x){if(x.type===cn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===uo||x.magFilter===qs||x.magFilter===qn||x.minFilter===an||x.minFilter===uo||x.minFilter===qs||x.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ee[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ee[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ee[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,$[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,$[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==qs&&x.minFilter!==qn||x.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Be(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",T));let Y=x.source,J=d.get(Y);J===void 0&&(J={},d.set(Y,J));let q=U(x);if(q!==w.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[q].usedTimes++;let Se=J[w.__cacheKey];Se!==void 0&&(J[w.__cacheKey].usedTimes--,Se.usedTimes===0&&_(x)),w.__cacheKey=q,w.__webglTexture=J[q].texture}return B}function Ye(w,x,B){return Math.floor(Math.floor(w/B)/x)}function Xe(w,x,B,Y){let q=w.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,Y,x.data);else{q.sort((re,fe)=>re.start-fe.start);let Se=0;for(let re=1;re<q.length;re++){let fe=q[Se],Ne=q[re],Te=fe.start+fe.count,ue=Ye(Ne.start,x.width,4),We=Ye(fe.start,x.width,4);Ne.start<=Te+1&&ue===We&&Ye(Ne.start+Ne.count-1,x.width,4)===ue?fe.count=Math.max(fe.count,Ne.start+Ne.count-fe.start):(++Se,q[Se]=Ne)}q.length=Se+1;let ae=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let re=0,fe=q.length;re<fe;re++){let Ne=q[re],Te=Math.floor(Ne.start/4),ue=Math.ceil(Ne.count/4),We=Te%x.width,D=Math.floor(Te/x.width),oe=ue,le=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,We,D,oe,le,B,Y,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function K(w,x,B){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let J=Be(w,x),q=x.source;t.bindTexture(Y,w.__webglTexture,i.TEXTURE0+B);let Se=n.get(q);if(q.version!==Se.__version||J===!0){t.activeTexture(i.TEXTURE0+B);let ae=je.getPrimaries(je.workingColorSpace),Ee=x.colorSpace===Pn?null:je.getPrimaries(x.colorSpace),we=x.colorSpace===Pn||ae===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let re=y(x.image,!1,s.maxTextureSize);re=Pe(x,re);let fe=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type),Te=E(x.internalFormat,fe,Ne,x.colorSpace,x.isVideoTexture);pe(Y,x);let ue,We=x.mipmaps,D=x.isVideoTexture!==!0,oe=Se.__version===void 0||J===!0,le=q.dataReady,ve=A(x,re);if(x.isDepthTexture)Te=b(x.format===Ji,x.type),oe&&(D?t.texStorage2D(i.TEXTURE_2D,1,Te,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Te,re.width,re.height,0,fe,Ne,null));else if(x.isDataTexture)if(We.length>0){D&&oe&&t.texStorage2D(i.TEXTURE_2D,ve,Te,We[0].width,We[0].height);for(let te=0,j=We.length;te<j;te++)ue=We[te],D?le&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Ne,ue.data):t.texImage2D(i.TEXTURE_2D,te,Te,ue.width,ue.height,0,fe,Ne,ue.data);x.generateMipmaps=!1}else D?(oe&&t.texStorage2D(i.TEXTURE_2D,ve,Te,re.width,re.height),le&&Xe(x,re,fe,Ne)):t.texImage2D(i.TEXTURE_2D,0,Te,re.width,re.height,0,fe,Ne,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Te,We[0].width,We[0].height,re.depth);for(let te=0,j=We.length;te<j;te++)if(ue=We[te],x.format!==$t)if(fe!==null)if(D){if(le)if(x.layerUpdates.size>0){let be=yl(ue.width,ue.height,x.format,x.type);for(let ze of x.layerUpdates){let ct=ue.data.subarray(ze*be/ue.data.BYTES_PER_ELEMENT,(ze+1)*be/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ze,ue.width,ue.height,1,fe,ct)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,re.depth,fe,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Te,ue.width,ue.height,re.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,re.depth,fe,Ne,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Te,ue.width,ue.height,re.depth,0,fe,Ne,ue.data)}else{D&&oe&&t.texStorage2D(i.TEXTURE_2D,ve,Te,We[0].width,We[0].height);for(let te=0,j=We.length;te<j;te++)ue=We[te],x.format!==$t?fe!==null?D?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Te,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?le&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Ne,ue.data):t.texImage2D(i.TEXTURE_2D,te,Te,ue.width,ue.height,0,fe,Ne,ue.data)}else if(x.isDataArrayTexture)if(D){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Te,re.width,re.height,re.depth),le)if(x.layerUpdates.size>0){let te=yl(re.width,re.height,x.format,x.type);for(let j of x.layerUpdates){let be=re.data.subarray(j*te/re.data.BYTES_PER_ELEMENT,(j+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,fe,Ne,be)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Ne,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,re.width,re.height,re.depth,0,fe,Ne,re.data);else if(x.isData3DTexture)D?(oe&&t.texStorage3D(i.TEXTURE_3D,ve,Te,re.width,re.height,re.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Ne,re.data)):t.texImage3D(i.TEXTURE_3D,0,Te,re.width,re.height,re.depth,0,fe,Ne,re.data);else if(x.isFramebufferTexture){if(oe)if(D)t.texStorage2D(i.TEXTURE_2D,ve,Te,re.width,re.height);else{let te=re.width,j=re.height;for(let be=0;be<ve;be++)t.texImage2D(i.TEXTURE_2D,be,Te,te,j,0,fe,Ne,null),te>>=1,j>>=1}}else if(We.length>0){if(D&&oe){let te=Ie(We[0]);t.texStorage2D(i.TEXTURE_2D,ve,Te,te.width,te.height)}for(let te=0,j=We.length;te<j;te++)ue=We[te],D?le&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe,Ne,ue):t.texImage2D(i.TEXTURE_2D,te,Te,fe,Ne,ue);x.generateMipmaps=!1}else if(D){if(oe){let te=Ie(re);t.texStorage2D(i.TEXTURE_2D,ve,Te,te.width,te.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ne,re)}else t.texImage2D(i.TEXTURE_2D,0,Te,fe,Ne,re);m(x)&&f(Y),Se.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Q(w,x,B){if(x.image.length!==6)return;let Y=Be(w,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let q=n.get(J);if(J.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+B);let Se=je.getPrimaries(je.workingColorSpace),ae=x.colorSpace===Pn?null:je.getPrimaries(x.colorSpace),Ee=x.colorSpace===Pn||Se===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let we=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!we&&!re?fe[j]=y(x.image[j],!0,s.maxCubemapSize):fe[j]=re?x.image[j].image:x.image[j],fe[j]=Pe(x,fe[j]);let Ne=fe[0],Te=r.convert(x.format,x.colorSpace),ue=r.convert(x.type),We=E(x.internalFormat,Te,ue,x.colorSpace),D=x.isVideoTexture!==!0,oe=q.__version===void 0||Y===!0,le=J.dataReady,ve=A(x,Ne);pe(i.TEXTURE_CUBE_MAP,x);let te;if(we){D&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,We,Ne.width,Ne.height);for(let j=0;j<6;j++){te=fe[j].mipmaps;for(let be=0;be<te.length;be++){let ze=te[be];x.format!==$t?Te!==null?D?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,ze.width,ze.height,Te,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,We,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,ze.width,ze.height,Te,ue,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,We,ze.width,ze.height,0,Te,ue,ze.data)}}}else{if(te=x.mipmaps,D&&oe){te.length>0&&ve++;let j=Ie(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,We,j.width,j.height)}for(let j=0;j<6;j++)if(re){D?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,Te,ue,fe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,fe[j].width,fe[j].height,0,Te,ue,fe[j].data);for(let be=0;be<te.length;be++){let ct=te[be].image[j].image;D?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,ct.width,ct.height,Te,ue,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,We,ct.width,ct.height,0,Te,ue,ct.data)}}else{D?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,ue,fe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,Te,ue,fe[j]);for(let be=0;be<te.length;be++){let ze=te[be];D?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,Te,ue,ze.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,We,Te,ue,ze.image[j])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),q.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ge(w,x,B,Y,J,q){let Se=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),Ee=E(B.internalFormat,Se,ae,B.colorSpace),we=n.get(x),re=n.get(B);if(re.__renderTarget=x,!we.__hasExternalTextures){let fe=Math.max(1,x.width>>q),Ne=Math.max(1,x.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,q,Ee,fe,Ne,x.depth,0,Se,ae,null):t.texImage2D(J,q,Ee,fe,Ne,0,Se,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),G(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,re.__webglTexture,0,it(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,re.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(w,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let Y=x.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,q=b(x.stencilBuffer,J),Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=it(x);G(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,q,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,w)}else{let Y=x.textures;for(let J=0;J<Y.length;J++){let q=Y[J],Se=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),Ee=E(q.internalFormat,Se,ae,q.colorSpace),we=it(x);B&&G(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Ee,x.width,x.height):G(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Ee,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);let J=Y.__webglTexture,q=it(x);if(x.depthTexture.format===Ui)G(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===Ji)G(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Oe(w){let x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let Y=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Y}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let Y=w.texture.mipmaps;Y&&Y.length>0?Me(x.__webglFramebuffer[0],w):Me(x.__webglFramebuffer,w)}else if(B){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),De(x.__webglDepthbuffer[Y],w,!1);else{let J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{let Y=w.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),De(x.__webglDepthbuffer,w,!1);else{let J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(w,x,B){let Y=n.get(w);x!==void 0&&ge(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Oe(w)}function I(w){let x=w.texture,B=n.get(w),Y=n.get(x);w.addEventListener("dispose",P);let J=w.textures,q=w.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)B.__webglFramebuffer[ae][Ee]=i.createFramebuffer()}else B.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)B.__webglFramebuffer[ae]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ae=0,Ee=J.length;ae<Ee;ae++){let we=n.get(J[ae]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&G(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){let Ee=J[ae];B.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);let we=r.convert(Ee.format,Ee.colorSpace),re=r.convert(Ee.type),fe=E(Ee.internalFormat,we,re,Ee.colorSpace,w.isXRRenderTarget===!0),Ne=it(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,fe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),De(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),pe(i.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)ge(B.__webglFramebuffer[ae][Ee],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else ge(B.__webglFramebuffer[ae],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ae=0,Ee=J.length;ae<Ee;ae++){let we=J[ae],re=n.get(we),fe=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,re.__webglTexture),pe(fe,we),ge(B.__webglFramebuffer,w,we,i.COLOR_ATTACHMENT0+ae,fe,0),m(we)&&f(fe)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),pe(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)ge(B.__webglFramebuffer[Ee],w,x,i.COLOR_ATTACHMENT0,ae,Ee);else ge(B.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,ae,0);m(x)&&f(ae),t.unbindTexture()}w.depthBuffer&&Oe(w)}function $e(w){let x=w.textures;for(let B=0,Y=x.length;B<Y;B++){let J=x[B];if(m(J)){let q=S(w),Se=n.get(J).__webglTexture;t.bindTexture(q,Se),f(q),t.unbindTexture()}}}let Ue=[],Re=[];function xe(w){if(w.samples>0){if(G(w)===!1){let x=w.textures,B=w.width,Y=w.height,J=i.COLOR_BUFFER_BIT,q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(w),ae=x.length>1;if(ae)for(let we=0;we<x.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let Ee=w.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let we=0;we<x.length;we++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let re=n.get(x[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,J,i.NEAREST),c===!0&&(Ue.length=0,Re.length=0,Ue.push(i.COLOR_ATTACHMENT0+we),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ue.push(q),Re.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<x.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let re=n.get(x[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function it(w){return Math.min(s.maxSamples,w.samples)}function G(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ie(w){let x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function Pe(w,x){let B=w.colorSpace,Y=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==ii&&B!==Pn&&(je.getTransfer(B)===nt?(Y!==$t||J!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=at,this.setupRenderTarget=I,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=G}function Ig(i,e){function t(n,s=Pn){let r,a=je.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===il)return i.BYTE;if(n===sl)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===al)return i.ALPHA;if(n===ll)return i.RGB;if(n===$t)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===cl)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===Ks||n===Js)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===bo||n===Mo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===wo||n===To)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===wo)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===Ro||n===Co||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Po)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===Vo||n===Go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ho)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
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

}`,Il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Is(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:Lg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ll=class extends un{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new Il,f={},S=t.getContextAttributes(),E=null,b=null,A=[],T=[],P=new ne,R=null,_=new St;_.viewport=new Ke;let M=new St;M.viewport=new Ke;let C=[_,M],F=new $r,V=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=A[K];return Q===void 0&&(Q=new ki,A[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=A[K];return Q===void 0&&(Q=new ki,A[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=A[K];return Q===void 0&&(Q=new ki,A[K]=Q),Q.getHandSpace()};function k(K){let Q=T.indexOf(K.inputSource);if(Q===-1)return;let ge=A[Q];ge!==void 0&&(ge.update(K.inputSource,K.frame,l||a),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<A.length;K++){let Q=T[K];Q!==null&&(T[K]=null,A[K].disconnect(Q))}V=null,U=null,m.reset();for(let K in f)delete f[K];e.setRenderTarget(E),p=null,d=null,h=null,s=null,b=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,De=null,Me=null;S.depth&&(Me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?Ji:Ui,De=S.stencil?Ki:Yn);let Oe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new dn(d.textureWidth,d.textureHeight,{format:$t,type:ln,depthTexture:new Ps(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new dn(p.framebufferWidth,p.framebufferHeight,{format:$t,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(K){for(let Q=0;Q<K.removed.length;Q++){let ge=K.removed[Q],De=T.indexOf(ge);De>=0&&(T[De]=null,A[De].disconnect(ge))}for(let Q=0;Q<K.added.length;Q++){let ge=K.added[Q],De=T.indexOf(ge);if(De===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=T.length){T.push(ge),De=Oe;break}else if(T[Oe]===null){T[Oe]=ge,De=Oe;break}if(De===-1)break}let Me=A[De];Me&&Me.connect(ge)}}let H=new L,ee=new L;function $(K,Q,ge){H.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(ge.matrixWorld);let De=H.distanceTo(ee),Me=Q.projectionMatrix.elements,Oe=ge.projectionMatrix.elements,at=Me[14]/(Me[10]-1),I=Me[14]/(Me[10]+1),$e=(Me[9]+1)/Me[5],Ue=(Me[9]-1)/Me[5],Re=(Me[8]-1)/Me[0],xe=(Oe[8]+1)/Oe[0],it=at*Re,G=at*xe,ie=De/(-Re+xe),Pe=ie*-Re;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Pe),K.translateZ(ie),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Me[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Ie=at+ie,w=I+ie,x=it-Pe,B=G+(De-Pe),Y=$e*I/w*Ie,J=Ue*I/w*Ie;K.projectionMatrix.makePerspective(x,B,Y,J,Ie,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ce(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,ge=K.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),F.near=M.near=_.near=Q,F.far=M.far=_.far=ge,(V!==F.near||U!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,U=F.far),F.layers.mask=K.layers.mask|6,_.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;let De=K.parent,Me=F.cameras;ce(F,De);for(let Oe=0;Oe<Me.length;Oe++)ce(Me[Oe],De);Me.length===2?$(F,_,M):F.projectionMatrix.copy(_.projectionMatrix),pe(K,F,De)};function pe(K,Q,ge){ge===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ni*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(K){return f[K]};let Be=null;function Ye(K,Q){if(u=Q.getViewerPose(l||a),g=Q,u!==null){let ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let De=!1;ge.length!==F.cameras.length&&(F.cameras.length=0,De=!0);for(let I=0;I<ge.length;I++){let $e=ge[I],Ue=null;if(p!==null)Ue=p.getViewport($e);else{let xe=h.getViewSubImage(d,$e);Ue=xe.viewport,I===0&&(e.setRenderTargetTextures(b,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(b))}let Re=C[I];Re===void 0&&(Re=new St,Re.layers.enable(I),Re.viewport=new Ke,C[I]=Re),Re.matrix.fromArray($e.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray($e.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),I===0&&(F.matrix.copy(Re.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),De===!0&&F.cameras.push(Re)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let I=h.getDepthInformation(ge[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Me&&Me.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let I=0;I<ge.length;I++){let $e=ge[I].camera;if($e){let Ue=f[$e];Ue||(Ue=new Is,f[$e]=Ue);let Re=h.getCameraImage($e);Ue.sourceTexture=Re}}}}for(let ge=0;ge<A.length;ge++){let De=T[ge],Me=A[ge];De!==null&&Me!==void 0&&Me.update(De,Q,l||a)}Be&&Be(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Xe=new Ch;Xe.setAnimationLoop(Ye),this.setAnimationLoop=function(K){Be=K},this.dispose=function(){}}},di=new Ft,Ug=new ht;function Ng(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,pl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,E,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),E=S.envMap,b=S.envMapRotation;E&&(m.envMap.value=E,di.copy(b),di.x*=-1,di.y*=-1,di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(di)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){let b=E.program;n.uniformBlockBinding(S,b)}function l(S,E){let b=s[S.id];b===void 0&&(g(S),b=u(S),s[S.id]=b,S.addEventListener("dispose",m));let A=E.program;n.updateUBOMapping(S,A);let T=e.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function u(S){let E=h();S.__bindingPointIndex=E;let b=i.createBuffer(),A=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let E=s[S.id],b=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,P=b.length;T<P;T++){let R=Array.isArray(b[T])?b[T]:[b[T]];for(let _=0,M=R.length;_<M;_++){let C=R[_];if(p(C,T,_,A)===!0){let F=C.__offset,V=Array.isArray(C.value)?C.value:[C.value],U=0;for(let k=0;k<V.length;k++){let z=V[k],Z=y(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,F+U,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,b,A){let T=S.value,P=E+"_"+b;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:A[P]=T.clone(),!0;{let R=A[P];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return A[P]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(S){let E=S.uniforms,b=0,A=16;for(let P=0,R=E.length;P<R;P++){let _=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,C=_.length;M<C;M++){let F=_[M],V=Array.isArray(F.value)?F.value:[F.value];for(let U=0,k=V.length;U<k;U++){let z=V[U],Z=y(z),H=b%A,ee=H%Z.boundary,$=H+ee;b+=ee,$!==0&&A-$<Z.storage&&(b+=A-$),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=Z.storage}}}let T=b%A;return T>0&&(b+=A-T),S.__size=b,S.__cache={},this}function y(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){let E=S.target;E.removeEventListener("dispose",m);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Qo=class{constructor(e={}){let{canvas:t=th(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,A=!1;this._outputColorSpace=Rt;let T=0,P=0,R=null,_=-1,M=null,C=new Ke,F=new Ke,V=null,U=new Ve(0),k=0,z=t.width,Z=t.height,H=1,ee=null,$=null,ce=new Ke(0,0,z,Z),pe=new Ke(0,0,z,Z),Be=!1,Ye=new Hi,Xe=!1,K=!1,Q=new ht,ge=new L,De=new Ke,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function at(){return R===null?H:1}let I=n;function $e(v,N){return t.getContext(v,N)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",te,!1),I===null){let N="webgl2";if(I=$e(N,v),I===null)throw $e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ue,Re,xe,it,G,ie,Pe,Ie,w,x,B,Y,J,q,Se,ae,Ee,we,re,fe,Ne,Te,ue,We;function D(){Ue=new em(I),Ue.init(),Te=new Ig(I,Ue),Re=new Yp(I,Ue,e,Te),xe=new Cg(I,Ue),Re.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),it=new im(I),G=new gg,ie=new Pg(I,Ue,xe,G,Re,Te,it),Pe=new Kp(b),Ie=new $p(b),w=new ld(I),ue=new Xp(I,w),x=new tm(I,w,it,ue),B=new rm(I,x,w,it),re=new sm(I,Re,ie),ae=new Zp(G),Y=new mg(b,Pe,Ie,Ue,Re,ue,ae),J=new Ng(b,G),q=new yg,Se=new Eg(Ue),we=new Wp(b,Pe,Ie,xe,B,p,c),Ee=new Ag(b,B,Re),We=new Fg(I,it,Re,xe),fe=new qp(I,Ue,it),Ne=new nm(I,Ue,it),it.programs=Y.programs,b.capabilities=Re,b.extensions=Ue,b.properties=G,b.renderLists=q,b.shadowMap=Ee,b.state=xe,b.info=it}D();let oe=new Ll(b,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=Ue.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ue.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(z,Z,!1))},this.getSize=function(v){return v.set(z,Z)},this.setSize=function(v,N,W=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=v,Z=N,t.width=Math.floor(v*H),t.height=Math.floor(N*H),W===!0&&(t.style.width=v+"px",t.style.height=N+"px"),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(z*H,Z*H).floor()},this.setDrawingBufferSize=function(v,N,W){z=v,Z=N,H=W,t.width=Math.floor(v*W),t.height=Math.floor(N*W),this.setViewport(0,0,v,N)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(ce)},this.setViewport=function(v,N,W,X){v.isVector4?ce.set(v.x,v.y,v.z,v.w):ce.set(v,N,W,X),xe.viewport(C.copy(ce).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(pe)},this.setScissor=function(v,N,W,X){v.isVector4?pe.set(v.x,v.y,v.z,v.w):pe.set(v,N,W,X),xe.scissor(F.copy(pe).multiplyScalar(H).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(v){xe.setScissorTest(Be=v)},this.setOpaqueSort=function(v){ee=v},this.setTransparentSort=function(v){$=v},this.getClearColor=function(v){return v.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,W=!0){let X=0;if(v){let O=!1;if(R!==null){let se=R.texture.format;O=se===vo||se===yo||se===xo}if(O){let se=R.texture.type,de=se===ln||se===Yn||se===Yi||se===Ki||se===po||se===mo,_e=we.getClearColor(),me=we.getClearAlpha(),Le=_e.r,Fe=_e.g,Ae=_e.b;de?(g[0]=Le,g[1]=Fe,g[2]=Ae,g[3]=me,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=Le,y[1]=Fe,y[2]=Ae,y[3]=me,I.clearBufferiv(I.COLOR,0,y))}else X|=I.COLOR_BUFFER_BIT}N&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",te,!1),we.dispose(),q.dispose(),Se.dispose(),G.dispose(),Pe.dispose(),Ie.dispose(),B.dispose(),ue.dispose(),We.dispose(),Y.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",hn),oe.removeEventListener("sessionend",zl),Zn.stop()};function le(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let v=it.autoReset,N=Ee.enabled,W=Ee.autoUpdate,X=Ee.needsUpdate,O=Ee.type;D(),it.autoReset=v,Ee.enabled=N,Ee.autoUpdate=W,Ee.needsUpdate=X,Ee.type=O}function te(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function j(v){let N=v.target;N.removeEventListener("dispose",j),be(N)}function be(v){ze(v),G.remove(v)}function ze(v){let N=G.get(v).programs;N!==void 0&&(N.forEach(function(W){Y.releaseProgram(W)}),v.isShaderMaterial&&Y.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,W,X,O,se){N===null&&(N=Me);let de=O.isMesh&&O.matrixWorld.determinant()<0,_e=jh(v,N,W,X,O);xe.setMaterial(X,de);let me=W.index,Le=1;if(X.wireframe===!0){if(me=x.getWireframeAttribute(W),me===void 0)return;Le=2}let Fe=W.drawRange,Ae=W.attributes.position,Ze=Fe.start*Le,st=(Fe.start+Fe.count)*Le;se!==null&&(Ze=Math.max(Ze,se.start*Le),st=Math.min(st,(se.start+se.count)*Le)),me!==null?(Ze=Math.max(Ze,0),st=Math.min(st,me.count)):Ae!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,Ae.count));let mt=st-Ze;if(mt<0||mt===1/0)return;ue.setup(O,X,_e,W,me);let ut,lt=fe;if(me!==null&&(ut=w.get(me),lt=Ne,lt.setIndex(ut)),O.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*at()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(O.isLine){let Ce=X.linewidth;Ce===void 0&&(Ce=1),xe.setLineWidth(Ce*at()),O.isLineSegments?lt.setMode(I.LINES):O.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else O.isPoints?lt.setMode(I.POINTS):O.isSprite&&lt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ce=O._multiDrawStarts,ft=O._multiDrawCounts,Qe=O._multiDrawCount,zt=me?w.get(me).bytesPerElement:1,xi=G.get(X).currentProgram.getUniforms();for(let kt=0;kt<Qe;kt++)xi.setValue(I,"_gl_DrawID",kt),lt.render(Ce[kt]/zt,ft[kt])}else if(O.isInstancedMesh)lt.renderInstances(Ze,mt,O.count);else if(W.isInstancedBufferGeometry){let Ce=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ft=Math.min(W.instanceCount,Ce);lt.renderInstances(Ze,mt,ft)}else lt.render(Ze,mt)};function ct(v,N,W){v.transparent===!0&&v.side===xn&&v.forceSinglePass===!1?(v.side=wt,v.needsUpdate=!0,er(v,N,W),v.side=Tn,v.needsUpdate=!0,er(v,N,W),v.side=xn):er(v,N,W)}this.compile=function(v,N,W=null){W===null&&(W=v),f=Se.get(W),f.init(N),E.push(f),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),v!==W&&v.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();let X=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let se=O.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){let _e=se[de];ct(_e,W,O),X.add(_e)}else ct(se,W,O),X.add(se)}),f=E.pop(),X},this.compileAsync=function(v,N,W=null){let X=this.compile(v,N,W);return new Promise(O=>{function se(){if(X.forEach(function(de){G.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){O(v);return}setTimeout(se,10)}Ue.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let tt=null;function vn(v){tt&&tt(v)}function hn(){Zn.stop()}function zl(){Zn.start()}let Zn=new Ch;Zn.setAnimationLoop(vn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(v){tt=v,oe.setAnimationLoop(v),v===null?Zn.stop():Zn.start()},oe.addEventListener("sessionstart",hn),oe.addEventListener("sessionend",zl),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(N),N=oe.getCamera()),v.isScene===!0&&v.onBeforeRender(b,v,N,R),f=Se.get(v,E.length),f.init(N),E.push(f),Q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ye.setFromProjectionMatrix(Q,on,N.reversedDepth),K=this.localClippingEnabled,Xe=ae.init(this.clippingPlanes,K),m=q.get(v,S.length),m.init(),S.push(m),oe.enabled===!0&&oe.isPresenting===!0){let se=b.xr.getDepthSensingMesh();se!==null&&ma(se,N,-1/0,b.sortObjects)}ma(v,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ee,$),Oe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Oe&&we.addToRenderList(m,v),this.info.render.frame++,Xe===!0&&ae.beginShadows();let W=f.state.shadowsArray;Ee.render(W,v,N),Xe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,O=m.transmissive;if(f.setupLights(),N.isArrayCamera){let se=N.cameras;if(O.length>0)for(let de=0,_e=se.length;de<_e;de++){let me=se[de];Hl(X,O,v,me)}Oe&&we.render(v);for(let de=0,_e=se.length;de<_e;de++){let me=se[de];kl(m,v,me,me.viewport)}}else O.length>0&&Hl(X,O,v,N),Oe&&we.render(v),kl(m,v,N);R!==null&&P===0&&(ie.updateMultisampleRenderTarget(R),ie.updateRenderTargetMipmap(R)),v.isScene===!0&&v.onAfterRender(b,v,N),ue.resetDefaultState(),_=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],Xe===!0&&ae.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ma(v,N,W,X){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ye.intersectsSprite(v)){X&&De.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Q);let de=B.update(v),_e=v.material;_e.visible&&m.push(v,de,_e,W,De.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ye.intersectsObject(v))){let de=B.update(v),_e=v.material;if(X&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),De.copy(v.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),De.copy(de.boundingSphere.center)),De.applyMatrix4(v.matrixWorld).applyMatrix4(Q)),Array.isArray(_e)){let me=de.groups;for(let Le=0,Fe=me.length;Le<Fe;Le++){let Ae=me[Le],Ze=_e[Ae.materialIndex];Ze&&Ze.visible&&m.push(v,de,Ze,W,De.z,Ae)}}else _e.visible&&m.push(v,de,_e,W,De.z,null)}}let se=v.children;for(let de=0,_e=se.length;de<_e;de++)ma(se[de],N,W,X)}function kl(v,N,W,X){let O=v.opaque,se=v.transmissive,de=v.transparent;f.setupLightsView(W),Xe===!0&&ae.setGlobalState(b.clippingPlanes,W),X&&xe.viewport(C.copy(X)),O.length>0&&$s(O,N,W),se.length>0&&$s(se,N,W),de.length>0&&$s(de,N,W),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Hl(v,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new dn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Zi:ln,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let se=f.state.transmissionRenderTarget[X.id],de=X.viewport||C;se.setSize(de.z*b.transmissionResolutionScale,de.w*b.transmissionResolutionScale);let _e=b.getRenderTarget(),me=b.getActiveCubeFace(),Le=b.getActiveMipmapLevel();b.setRenderTarget(se),b.getClearColor(U),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear(),Oe&&we.render(W);let Fe=b.toneMapping;b.toneMapping=Cn;let Ae=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),Xe===!0&&ae.setGlobalState(b.clippingPlanes,X),$s(v,W,X),ie.updateMultisampleRenderTarget(se),ie.updateRenderTargetMipmap(se),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let st=0,mt=N.length;st<mt;st++){let ut=N[st],lt=ut.object,Ce=ut.geometry,ft=ut.material,Qe=ut.group;if(ft.side===xn&&lt.layers.test(X.layers)){let zt=ft.side;ft.side=wt,ft.needsUpdate=!0,Vl(lt,W,X,Ce,ft,Qe),ft.side=zt,ft.needsUpdate=!0,Ze=!0}}Ze===!0&&(ie.updateMultisampleRenderTarget(se),ie.updateRenderTargetMipmap(se))}b.setRenderTarget(_e,me,Le),b.setClearColor(U,k),Ae!==void 0&&(X.viewport=Ae),b.toneMapping=Fe}function $s(v,N,W){let X=N.isScene===!0?N.overrideMaterial:null;for(let O=0,se=v.length;O<se;O++){let de=v[O],_e=de.object,me=de.geometry,Le=de.group,Fe=de.material;Fe.allowOverride===!0&&X!==null&&(Fe=X),_e.layers.test(W.layers)&&Vl(_e,N,W,me,Fe,Le)}}function Vl(v,N,W,X,O,se){v.onBeforeRender(b,N,W,X,O,se),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(b,N,W,X,v,se),O.transparent===!0&&O.side===xn&&O.forceSinglePass===!1?(O.side=wt,O.needsUpdate=!0,b.renderBufferDirect(W,N,X,O,v,se),O.side=Tn,O.needsUpdate=!0,b.renderBufferDirect(W,N,X,O,v,se),O.side=xn):b.renderBufferDirect(W,N,X,O,v,se),v.onAfterRender(b,N,W,X,O,se)}function er(v,N,W){N.isScene!==!0&&(N=Me);let X=G.get(v),O=f.state.lights,se=f.state.shadowsArray,de=O.state.version,_e=Y.getParameters(v,O.state,se,N,W),me=Y.getProgramCacheKey(_e),Le=X.programs;X.environment=v.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(v.isMeshStandardMaterial?Ie:Pe).get(v.envMap||X.environment),X.envMapRotation=X.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Le===void 0&&(v.addEventListener("dispose",j),Le=new Map,X.programs=Le);let Fe=Le.get(me);if(Fe!==void 0){if(X.currentProgram===Fe&&X.lightsStateVersion===de)return Wl(v,_e),Fe}else _e.uniforms=Y.getUniforms(v),v.onBeforeCompile(_e,b),Fe=Y.acquireProgram(_e,me),Le.set(me,Fe),X.uniforms=_e.uniforms;let Ae=X.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=ae.uniform),Wl(v,_e),X.needsLights=$h(v),X.lightsStateVersion=de,X.needsLights&&(Ae.ambientLightColor.value=O.state.ambient,Ae.lightProbe.value=O.state.probe,Ae.directionalLights.value=O.state.directional,Ae.directionalLightShadows.value=O.state.directionalShadow,Ae.spotLights.value=O.state.spot,Ae.spotLightShadows.value=O.state.spotShadow,Ae.rectAreaLights.value=O.state.rectArea,Ae.ltc_1.value=O.state.rectAreaLTC1,Ae.ltc_2.value=O.state.rectAreaLTC2,Ae.pointLights.value=O.state.point,Ae.pointLightShadows.value=O.state.pointShadow,Ae.hemisphereLights.value=O.state.hemi,Ae.directionalShadowMap.value=O.state.directionalShadowMap,Ae.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ae.spotShadowMap.value=O.state.spotShadowMap,Ae.spotLightMatrix.value=O.state.spotLightMatrix,Ae.spotLightMap.value=O.state.spotLightMap,Ae.pointShadowMap.value=O.state.pointShadowMap,Ae.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Fe,X.uniformsList=null,Fe}function Gl(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=es.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Wl(v,N){let W=G.get(v);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function jh(v,N,W,X,O){N.isScene!==!0&&(N=Me),ie.resetTextureUnits();let se=N.fog,de=X.isMeshStandardMaterial?N.environment:null,_e=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ii,me=(X.isMeshStandardMaterial?Ie:Pe).get(X.envMap||de),Le=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ae=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,st=!!W.morphAttributes.color,mt=Cn;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=b.toneMapping);let ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=ut!==void 0?ut.length:0,Ce=G.get(X),ft=f.state.lights;if(Xe===!0&&(K===!0||v!==M)){let Pt=v===M&&X.id===_;ae.setState(X,v,Pt)}let Qe=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==ft.state.version||Ce.outputColorSpace!==_e||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==me||X.fog===!0&&Ce.fog!==se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ae.numPlanes||Ce.numIntersection!==ae.numIntersection)||Ce.vertexAlphas!==Le||Ce.vertexTangents!==Fe||Ce.morphTargets!==Ae||Ce.morphNormals!==Ze||Ce.morphColors!==st||Ce.toneMapping!==mt||Ce.morphTargetsCount!==lt)&&(Qe=!0):(Qe=!0,Ce.__version=X.version);let zt=Ce.currentProgram;Qe===!0&&(zt=er(X,N,O));let xi=!1,kt=!1,os=!1,pt=zt.getUniforms(),Xt=Ce.uniforms;if(xe.useProgram(zt.program)&&(xi=!0,kt=!0,os=!0),X.id!==_&&(_=X.id,kt=!0),xi||M!==v){xe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pt.setValue(I,"projectionMatrix",v.projectionMatrix),pt.setValue(I,"viewMatrix",v.matrixWorldInverse);let Dt=pt.map.cameraPosition;Dt!==void 0&&Dt.setValue(I,ge.setFromMatrixPosition(v.matrixWorld)),Re.logarithmicDepthBuffer&&pt.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,kt=!0,os=!0)}if(O.isSkinnedMesh){pt.setOptional(I,O,"bindMatrix"),pt.setOptional(I,O,"bindMatrixInverse");let Pt=O.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),pt.setValue(I,"boneTexture",Pt.boneTexture,ie))}O.isBatchedMesh&&(pt.setOptional(I,O,"batchingTexture"),pt.setValue(I,"batchingTexture",O._matricesTexture,ie),pt.setOptional(I,O,"batchingIdTexture"),pt.setValue(I,"batchingIdTexture",O._indirectTexture,ie),pt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&pt.setValue(I,"batchingColorTexture",O._colorsTexture,ie));let qt=W.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&re.update(O,W,zt),(kt||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,pt.setValue(I,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Xt.envMap.value=me,Xt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Xt.envMapIntensity.value=N.environmentIntensity),kt&&(pt.setValue(I,"toneMappingExposure",b.toneMappingExposure),Ce.needsLights&&Qh(Xt,os),se&&X.fog===!0&&J.refreshFogUniforms(Xt,se),J.refreshMaterialUniforms(Xt,X,H,Z,f.state.transmissionRenderTarget[v.id]),es.upload(I,Gl(Ce),Xt,ie)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(es.upload(I,Gl(Ce),Xt,ie),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(I,"center",O.center),pt.setValue(I,"modelViewMatrix",O.modelViewMatrix),pt.setValue(I,"normalMatrix",O.normalMatrix),pt.setValue(I,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Pt=X.uniformsGroups;for(let Dt=0,ga=Pt.length;Dt<ga;Dt++){let Kn=Pt[Dt];We.update(Kn,zt),We.bind(Kn,zt)}}return zt}function Qh(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function $h(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(v,N,W){let X=G.get(v);X.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=N,G.get(v.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let W=G.get(v);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};let eu=I.createFramebuffer();this.setRenderTarget=function(v,N=0,W=0){R=v,T=N,P=W;let X=!0,O=null,se=!1,de=!1;if(v){let me=G.get(v);if(me.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(me.__webglFramebuffer===void 0)ie.setupRenderTarget(v);else if(me.__hasExternalTextures)ie.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ae=v.depthTexture;if(me.__boundDepthTexture!==Ae){if(Ae!==null&&G.has(Ae)&&(v.width!==Ae.image.width||v.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(v)}}let Le=v.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(de=!0);let Fe=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?O=Fe[N][W]:O=Fe[N],se=!0):v.samples>0&&ie.useMultisampledRTT(v)===!1?O=G.get(v).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[W]:O=Fe,C.copy(v.viewport),F.copy(v.scissor),V=v.scissorTest}else C.copy(ce).multiplyScalar(H).floor(),F.copy(pe).multiplyScalar(H).floor(),V=Be;if(W!==0&&(O=eu),xe.bindFramebuffer(I.FRAMEBUFFER,O)&&X&&xe.drawBuffers(v,O),xe.viewport(C),xe.scissor(F),xe.setScissorTest(V),se){let me=G.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,W)}else if(de){let me=N;for(let Le=0;Le<v.textures.length;Le++){let Fe=G.get(v.textures[Le]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Le,Fe.__webglTexture,W,me)}}else if(v!==null&&W!==0){let me=G.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,W)}_=-1},this.readRenderTargetPixels=function(v,N,W,X,O,se,de,_e=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){xe.bindFramebuffer(I.FRAMEBUFFER,me);try{let Le=v.textures[_e],Fe=Le.format,Ae=Le.type;if(!Re.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-X&&W>=0&&W<=v.height-O&&(v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e),I.readPixels(N,W,X,O,Te.convert(Fe),Te.convert(Ae),se))}finally{let Le=R!==null?G.get(R).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(v,N,W,X,O,se,de,_e=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(N>=0&&N<=v.width-X&&W>=0&&W<=v.height-O){xe.bindFramebuffer(I.FRAMEBUFFER,me);let Le=v.textures[_e],Fe=Le.format,Ae=Le.type;if(!Re.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e),I.readPixels(N,W,X,O,Te.convert(Fe),Te.convert(Ae),0);let st=R!==null?G.get(R).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,st);let mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await nh(I,mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se),I.deleteBuffer(Ze),I.deleteSync(mt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,W=0){let X=Math.pow(2,-W),O=Math.floor(v.image.width*X),se=Math.floor(v.image.height*X),de=N!==null?N.x:0,_e=N!==null?N.y:0;ie.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,de,_e,O,se),xe.unbindTexture()};let tu=I.createFramebuffer(),nu=I.createFramebuffer();this.copyTextureToTexture=function(v,N,W=null,X=null,O=0,se=null){se===null&&(O!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=O,O=0):se=0);let de,_e,me,Le,Fe,Ae,Ze,st,mt,ut=v.isCompressedTexture?v.mipmaps[se]:v.image;if(W!==null)de=W.max.x-W.min.x,_e=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Fe=W.min.y,Ae=W.isBox3?W.min.z:0;else{let qt=Math.pow(2,-O);de=Math.floor(ut.width*qt),_e=Math.floor(ut.height*qt),v.isDataArrayTexture?me=ut.depth:v.isData3DTexture?me=Math.floor(ut.depth*qt):me=1,Le=0,Fe=0,Ae=0}X!==null?(Ze=X.x,st=X.y,mt=X.z):(Ze=0,st=0,mt=0);let lt=Te.convert(N.format),Ce=Te.convert(N.type),ft;N.isData3DTexture?(ie.setTexture3D(N,0),ft=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ie.setTexture2DArray(N,0),ft=I.TEXTURE_2D_ARRAY):(ie.setTexture2D(N,0),ft=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let Qe=I.getParameter(I.UNPACK_ROW_LENGTH),zt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),xi=I.getParameter(I.UNPACK_SKIP_PIXELS),kt=I.getParameter(I.UNPACK_SKIP_ROWS),os=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ae);let pt=v.isDataArrayTexture||v.isData3DTexture,Xt=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let qt=G.get(v),Pt=G.get(N),Dt=G.get(qt.__renderTarget),ga=G.get(Pt.__renderTarget);xe.bindFramebuffer(I.READ_FRAMEBUFFER,Dt.__webglFramebuffer),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,ga.__webglFramebuffer);for(let Kn=0;Kn<me;Kn++)pt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(v).__webglTexture,O,Ae+Kn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(N).__webglTexture,se,mt+Kn)),I.blitFramebuffer(Le,Fe,de,_e,Ze,st,de,_e,I.DEPTH_BUFFER_BIT,I.NEAREST);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||G.has(v)){let qt=G.get(v),Pt=G.get(N);xe.bindFramebuffer(I.READ_FRAMEBUFFER,tu),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,nu);for(let Dt=0;Dt<me;Dt++)pt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qt.__webglTexture,O,Ae+Dt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,qt.__webglTexture,O),Xt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.__webglTexture,se,mt+Dt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pt.__webglTexture,se),O!==0?I.blitFramebuffer(Le,Fe,de,_e,Ze,st,de,_e,I.COLOR_BUFFER_BIT,I.NEAREST):Xt?I.copyTexSubImage3D(ft,se,Ze,st,mt+Dt,Le,Fe,de,_e):I.copyTexSubImage2D(ft,se,Ze,st,Le,Fe,de,_e);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Xt?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(ft,se,Ze,st,mt,de,_e,me,lt,Ce,ut.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(ft,se,Ze,st,mt,de,_e,me,lt,ut.data):I.texSubImage3D(ft,se,Ze,st,mt,de,_e,me,lt,Ce,ut):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,se,Ze,st,de,_e,lt,Ce,ut.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,se,Ze,st,ut.width,ut.height,lt,ut.data):I.texSubImage2D(I.TEXTURE_2D,se,Ze,st,de,_e,lt,Ce,ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,Qe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,zt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xi),I.pixelStorei(I.UNPACK_SKIP_ROWS,kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,os),se===0&&N.generateMipmaps&&I.generateMipmap(ft),xe.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&ie.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ie.setTextureCube(v,0):v.isData3DTexture?ie.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ie.setTexture2DArray(v,0):ie.setTexture2D(v,0),xe.unbindTexture()},this.resetState=function(){T=0,P=0,R=null,xe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var ea=class extends si{constructor(){super();let e=new pn;e.deleteAttribute("uv");let t=new Gt({side:wt}),n=new Gt,s=new Vs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new rt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Rs(e,n,6),o=new Mt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new rt(e,is(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new rt(e,is(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new rt(e,is(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new rt(e,is(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new rt(e,is(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new rt(e,is(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function is(i){return new Bs({color:0,emissive:16777215,emissiveIntensity:i})}var Qs=new L;function en(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Qs.copy(e),Qs[n]=0,Qs.normalize();let l=.5*a/(a+o),u=1-Qs.angleTo(i)/c;return Math.sign(Qs[t])===1?u*l:o/(a+o)+l+l*(1-u)}var ta=class i extends pn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new L,l=new L,u=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,y=new L,m=.5/a;for(let f=0,S=0;f<h.length;f+=3,S+=2)switch(c.fromArray(h,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[f+0]=u.x*Math.sign(c.x)+l.x*r,h[f+1]=u.y*Math.sign(c.y)+l.y*r,h[f+2]=u.z*Math.sign(c.z)+l.z*r,d[f+0]=l.x,d[f+1]=l.y,d[f+2]=l.z,Math.floor(f/g)){case 0:y.set(1,0,0),p[S+0]=en(y,l,"z","y",r,n),p[S+1]=1-en(y,l,"y","z",r,t);break;case 1:y.set(-1,0,0),p[S+0]=1-en(y,l,"z","y",r,n),p[S+1]=1-en(y,l,"y","z",r,t);break;case 2:y.set(0,1,0),p[S+0]=1-en(y,l,"x","z",r,e),p[S+1]=en(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),p[S+0]=1-en(y,l,"x","z",r,e),p[S+1]=1-en(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),p[S+0]=1-en(y,l,"x","y",r,e),p[S+1]=1-en(y,l,"y","x",r,t);break;case 5:y.set(0,0,-1),p[S+0]=en(y,l,"x","y",r,e),p[S+1]=1-en(y,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Uh=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,na=class{constructor(e=Math.random){this.random=e;ye(this,"blinkProgress",0);ye(this,"gaze",new ne);ye(this,"phase","open");ye(this,"elapsed",0);ye(this,"duration",0);ye(this,"gazeTime",0);ye(this,"doublePending",!1);ye(this,"reduced",!1);this.reset()}between(e,t){return e+(t-e)*this.random()}enter(e,t){this.phase=e,this.duration=t,this.elapsed=0}reset(){this.blinkProgress=0,this.doublePending=!1,this.gazeTime=0,this.gaze.set(0,0),this.enter("open",this.between(2,5))}update(e,t,n){if(t){this.reduced||this.reset(),this.reduced=!0;return}this.reduced=!1;let s=Number.isFinite(e)?Math.max(0,Math.min(e,.1)):0;this.gazeTime+=s;let r=1-Math.exp(-s*3),a=Math.sin(this.gazeTime*.77)*.09+Math.sin(this.gazeTime*1.31)*.025+Math.max(-1,Math.min(1,n.x))*.08,o=Math.sin(this.gazeTime*.63)*.05+Math.max(-1,Math.min(1,n.y))*.05;for(this.gaze.lerp(new ne(a,o),r);s>0;){let l=Math.min(s,this.duration-this.elapsed);if(this.elapsed+=l,s-=l,this.elapsed<this.duration)break;switch(this.phase){case"open":this.doublePending=this.random()<.2,this.enter("closing",this.between(.08,.12));break;case"double-gap":this.enter("closing",this.between(.08,.12));break;case"closing":this.enter("closed",this.between(.04,.08));break;case"closed":this.enter("opening",this.between(.1,.15));break;case"opening":this.doublePending?(this.doublePending=!1,this.enter("double-gap",this.between(.1,.18))):this.enter("open",this.between(2,5));break}}let c=this.elapsed/this.duration;this.blinkProgress=this.phase==="closing"?Uh(c):this.phase==="closed"?1:this.phase==="opening"?1-Uh(c):0}};var ia={blinkL:0,blinkR:0,arcL:0,arcR:0,mouthOpen:.55,mouthWidth:1,mouthCurve:.6,mouthShift:0,cheek:.6,browL:0,browR:0,glow:1},gi=i=>new Ve(i);function Nh(i){let e={eyeX:.47,eyeY:-.06,eyeR:.255,browY:.39,mouthY:-.335,mouthScale:1,cheekX:.68,cheekY:-.34,screen:!0,led:"#8ce6ff",glowColor:"#0b6eff",ink:"#13205a",iris:["#52bdff","#0f5cf5","#051a6b"],ledStyle:!1,cheekColor:"#ffd23a",...i},t={halfSize:{value:new ne(e.halfWidth,e.halfHeight)},eyeLayout:{value:new Ke(e.eyeX,e.eyeY,e.eyeR,e.browY)},lowerLayout:{value:new Ke(e.mouthY,e.mouthScale,e.cheekX,e.cheekY)},screen:{value:e.screen?1:0},ledStyle:{value:e.ledStyle?1:0},cheekColor:{value:gi(e.cheekColor)},led:{value:gi(e.led)},glowColor:{value:gi(e.glowColor)},ink:{value:gi(e.ink)},irisLight:{value:gi(e.iris[0])},irisMid:{value:gi(e.iris[1])},irisDark:{value:gi(e.iris[2])},gaze:{value:new ne},eyes:{value:new Ke},mouth:{value:new Ke},extra:{value:new Ke(0,0,0,1)},time:{value:0}};return{material:new Lt({uniforms:t,toneMapped:!1,transparent:!e.screen,depthWrite:e.screen,polygonOffset:!e.screen,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:`
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
      }`}),uniforms:t,apply:(r,a,o)=>{t.gaze.value.copy(a),t.eyes.value.set(r.blinkL,r.blinkR,r.arcL,r.arcR),t.mouth.value.set(r.mouthOpen,r.mouthWidth,r.mouthCurve,r.mouthShift),t.extra.value.set(r.cheek,r.browL,r.browR,r.glow),t.time.value=o}}}var Og={idle:{},happy:{arcL:1,arcR:1,mouthOpen:1,mouthWidth:1.35,mouthCurve:1,cheek:1,browL:.05,browR:.05,glow:1.08},talking:{mouthOpen:.5,mouthWidth:.95,cheek:.55},thinking:{mouthOpen:.06,mouthWidth:.55,mouthCurve:-.25,mouthShift:.08,cheek:.3,browL:.08,browR:-.01},greeting:{arcL:1,arcR:1,mouthOpen:.3,mouthWidth:1.5,mouthCurve:1,cheek:1,browL:.05,browR:.05,glow:1.12},winking:{arcR:1,mouthOpen:.85,mouthWidth:1.15,mouthCurve:1,cheek:.95,browR:.06}},Bg={thinking:[-1.3,1.6]},zg={happy:2.4,greeting:3.4,winking:1.8},Fh=2.25,sa=class{constructor(e){ye(this,"face");ye(this,"faceState",{...ia});ye(this,"gaze",new ne);ye(this,"eyeMotion",new na);ye(this,"expression","idle");ye(this,"persistent","idle");ye(this,"expressionLeft",1/0);ye(this,"waveTime",-1);ye(this,"hopTime",-1);ye(this,"tiltTime",-1);ye(this,"blinkTime",-1);ye(this,"forcedBlink",-1);ye(this,"look",null);ye(this,"talkPhase",0);ye(this,"head",new Ft);ye(this,"lean",0);this.face=Nh(e)}get expressionName(){return this.expression}get isWaving(){return this.waveTime>=0}get blinkProgress(){return this.faceState.blinkL}setExpression(e){let t=e==="neutral"?"idle":e;this.persistent=t,this.play(t,1/0)}play(e,t){let n=e==="neutral"?"idle":e;this.expression=n,this.expressionLeft=t??zg[n]??1/0,n==="greeting"&&this.wave(),n==="happy"&&this.hop(),n==="winking"&&this.tilt()}wave(){return this.isWaving?!1:(this.waveTime=0,this.expression!=="greeting"&&(this.expression="greeting",this.expressionLeft=Fh+.5),!0)}hop(){this.hopTime=0}tilt(){this.tiltTime=0}blink(){this.blinkTime=0}lookAt(e,t,n=1.6){this.look={x:e,y:t,left:n}}setBlink(e){let t=ke.clamp(e,0,1);this.faceState.blinkL=this.faceState.blinkR=t,this.forcedBlink=t,this.face.apply(this.faceState,this.gaze,0)}reset(){this.eyeMotion.reset(),this.gaze.set(0,0),this.look=null,this.head.set(0,0,0),this.lean=0,this.waveTime=this.hopTime=this.tiltTime=this.blinkTime=this.forcedBlink=-1,this.persistent=this.expression="idle",this.expressionLeft=1/0,Object.assign(this.faceState,ia),this.face.apply(this.faceState,this.gaze,0)}update(e,t,n,s){e=Math.min(Math.max(e,0),.1);let r=R=>1-Math.exp(-e*R);Number.isFinite(this.expressionLeft)&&(this.expressionLeft-=e,this.expressionLeft<=0&&(this.expression=this.persistent,this.expressionLeft=1/0));let a=this.expression;this.eyeMotion.update(e,s,n);let o={...ia,...Og[a]},c=0;a==="talking"&&!s&&(this.talkPhase+=e*(7.5+Math.sin(t*1.7)*2),c=.18+.78*Math.abs(Math.sin(this.talkPhase)*(.65+.35*Math.sin(this.talkPhase*.37+1))),o.mouthOpen=c,o.mouthWidth=1.1-c*.45),(a==="greeting"||a==="happy")&&(o.glow*=1+Math.sin(t*6)*.03);let l=r(a==="talking"?22:9);for(let R of Object.keys(o))R==="blinkL"||R==="blinkR"||(this.faceState[R]+=(o[R]-this.faceState[R])*l);let u=this.eyeMotion.blinkProgress;if(this.blinkTime>=0){this.blinkTime+=e;let R=this.blinkTime/.32;u=Math.max(u,R<.45?ke.smootherstep(R,0,.45):1-ke.smootherstep(R,.55,1)),R>=1&&(this.blinkTime=-1)}this.forcedBlink>=0&&(u=this.forcedBlink,this.forcedBlink=-1),s&&(u=0),this.faceState.blinkL=this.faceState.blinkR=u;let[h,d]=Bg[a]??[0,0];this.look&&(h=this.look.x,d=this.look.y,this.look.left-=e,this.look.left<=0&&(this.look=null));let p=s?new ne:this.eyeMotion.gaze.clone().multiplyScalar(2.2).add(new ne(h,d));this.gaze.lerp(p,r(h||d?6:4)),this.face.apply(this.faceState,this.gaze,t);let g=s?0:Math.sin(t*1.7),y=s?0:g*.018;if(this.hopTime>=0){this.hopTime+=e;let R=this.hopTime;y+=s?0:Math.abs(Math.sin(R*Math.PI/.38))*.12*(1-ke.smoothstep(R,.5,.76)),R>=.76&&(this.hopTime=-1)}this.lean=ke.lerp(this.lean,s?0:Math.sin(t*.75)*.018,r(3));let m=Math.sin(t*.9)*.03;a==="thinking"&&(m=.15),a==="winking"&&(m=-.1),this.tiltTime>=0&&(this.tiltTime+=e,m+=Math.sin(Math.min(1,this.tiltTime/1.4)*Math.PI)*.16,this.tiltTime>=1.4&&(this.tiltTime=-1)),s&&(m=0);let f=r(5);this.head.y=ke.lerp(this.head.y,s?0:n.x*.16+this.gaze.x*.06,f),this.head.x=ke.lerp(this.head.x,s?0:-n.y*.09-(a==="thinking"?.1:0)+c*.03,f),this.head.z=ke.lerp(this.head.z,m,r(4));let S=0,E=0,b=0,A=0,T=0,P=this.waveTime;if(this.waveTime>=0){this.waveTime+=e;let R=this.waveTime,_=Fh;S=ke.smootherstep(R,0,.58)*(1-ke.smootherstep(R,_-.6,_)),E=ke.smootherstep(R,0,.72)*(1-ke.smootherstep(R,_-.72,_));let M=ke.smootherstep(R,.5,.68)*(1-ke.smootherstep(R,1.5,1.68)),C=1-ke.clamp((R-.55)/1.1,0,1)*.35;if(b=Math.sin((R-.55)*Math.PI*2*2.2)*M*C,!s){let F=ke.smootherstep(R,0,.45)*(1-ke.smootherstep(R,1.6,_));A=-Math.sin(ke.clamp(R/.22,0,1)*Math.PI)*.035+Math.sin(ke.clamp((R-.22)/.4,0,1)*Math.PI)*.05,T=F*.14+Math.sin((R-.55)*Math.PI*2*1.1)*F*.03}R>=_&&(this.waveTime=-1)}return{expression:a,reduced:s,breathe:g,bodyY:y+A,lean:this.lean,headYaw:this.head.y,headPitch:this.head.x,headTilt:this.head.z+T,waveTime:P>=0?this.waveTime:-1,waveAmount:S,waveElbow:E,waveSway:b,talk:c}}};var Oh="data:image/webp;base64,UklGRvRRAABXRUJQVlA4WAoAAAAQAAAA/wAA/wAAQUxQSNkPAAABwIZt23G7te7neb8x4zS22qRMY9W2bWN31VZ2sbyKZat2d+0mqZnaTWozntEc3/s8948xMjMxxvcex/4VEROAOisiGrKsVGpo6LCaDQ2lUpaFoCJIVBHVEFTQ6qIhBFWRlBANqiKoKl37Dlt37KRNt915z/0OPKjqgfvvs+t2m08Zt96aA7sHVBcNqirFT1RVBVU79xs1dafDzvzlP2595Lk3Ppm3LGczbcXCL95+YcYdV11+7jF7bLLewK4BlaKqKgVOVFUAoEPvtTfd48gL/3rv698uj85VesxXGY2rdFv543uP/PuSEw7YaoN+nQQAVFWkiImoAAjdB07d/7Q/zfps4fKmSJLW6iQZm1Y0fvPCv845fIthPRsAiIoULBFVAbKe4w77zT2fzl/cRJLublW9kqvtlVbV3Z1kecnCL2f+9cRN+jcAoipSoFQFCP22OOm6d75fykq3GM3c2SbdzWI0Z+XKeZ/cd97Ow0sAVKUYaVAg6zXtnIfnfG8kPebRnO3QLcboJLng46d+tcPADoAELTwSAoDeu1z54CsLSHqem7Ndu8XcSS5/d8Y/DxkKIAQpMhIUaNjwpFveNZKxHJ010S3PSfLTBy7apCsgQYqKBgVG7PKrGQtIL+fGmmp52cjyi384cLRAgkoBUQUw8OjbPiRZjs4a7LHs5HcPnrsuAFUpGBqALmP3/e8y0nJnzfYYSb//2I16A6pSIEQFHaZc9PwSMpo7a7i7R2PT+3/cfg1AVQqCqKI08qz3m0gzZ813N2f+5ZXjO0NUpACIKnToibMbSTdjXXQz58q5l27YAFGpexogfY94Yh5p5qyfZuSSt84fWYJqnQvA4NMf/ZqMkXXWIrngxd+sDwSpYxrQ5aB755Mxsg5bTi5/+qwB0FCvJADr/e5LMo+s01Z2LrluUyBoXQqCrvs+4Mwj67g3kS+dNAAIUnc0oLT5FV/TIuu8RS67dq9u0FBfRAX9TnyfjM76H50//HwkoFJHRJGN/+9yRnMWQPfo8ZHtO0Olbqii9/FvmpuzILoZP//pcIjWCVUZc/MienQWR3OueHK7DFoXAkoHv+w0Y6H0SM49sxuC1DzJ0GP657SchTNGLvj7cGRa44JixH+XMDcWUI+MD02ChJoWgK3uJXMW1Dzy2X07ItSwgG5Hv8M8srBaE7+aPgChZgX0uGAey84iW2bTP4Yik5okAR0vWszcWWg9eryqDzKpQRLQ5dTvmDuLbvTlf+iHIDVHAnpd8iOjs/hGrrh6BFRqjAQM+XcjzVmEjfGR8QhSW0oYfkdkdBZjc74wAVlNKWHwtfTIwhwjHx+DTGpHhsH/zS2yQFvOGWORSa3IsPaNOY2F2iOfnIZQIzIMvYVuLNie8/nxyKQGSEC3v+YxsnB7mfcPRibtTgI6X7CAkQU8xqZ/9UeQ9qZY45x5jCzkkSv+MRQq7UvR84pFjF7MaCzfOgLaroJ2+99GRmdRjx6vH4jQjiTDzj+yzAKf+8qfhKDtJ8PajzP3Iuc5526DTNpLhvXuo7HgG2dviqydBAy5mdGLnpf5/BiEdqGh4Zfl3Fj4vcwb+6q2Awk48HPmTMAYF5+PIG1PseZsNjEJy3xvE6i0taAd/uPR0sAjH+4FbWMasPtXzJmI0Refmam2rYCRL3vuqcCcH26KIG0poMe1dGMyunHWYIQ2pKHTics9MiHN+NueEtpOCePnevSUYPQFOyJrM0G6XcloTEqLvH0QQlvJsM88MyamWzyjlEnbCFjnEUZPjujvbo2sTUjQizx3Jqc38Z9dVNqABGz2mudMULMfDkeQ1lMt/cvLTNIy7+kn2mqSYb+vGNPErPEcZNpaKp3uYJmJWuaTg6W1VHHMj4ypYtb4m0y0ldD/GeZM1pwfToBKa6hkZy7ymC5my//RBaE1Aga/xsiEzfn5uFZR0YMWME8Z86U/6yyh5TIMnunmKcPID0cjazER2beRkWnjK8/pJNpSAYNud7O0cePbGyJrqQybfktj4pqX94FKy6j0vMI8fYx3jUDWMiXs8oMZk9et6QiEFhHtfAXLKZTz1kESWiLDdnPMPH3otuhoZC0gmv2KuTOFyrx2DejqBYx/wtOI5h/thSCrIxmOX0RjErvxF8hWT3Elo6cRy7yhg6yOKEbNYM5EzvnGllBZjYCfzGdMJbf89xK0earyH0YmcxMf6iSrg74zWU6nMl8eA5XmqGLvz5ink3Hx9CDaLGn4r7mnE3POWgPNQ//ZLDOhy3xvdLNEseVHzFMq8vtjM9FVBXT8WSMtpdzttp4IzRnwLI1JnfOj9ZohiilfME+tH/YQkWoqevC81IpccmEnaLWAbpetoKWVud87EFm1DCNepHlaMfLLcasK2GQBcyZ2zqV7QqVCRA5fyphaxhX/2xlaoeh80coEc7thEEJFQJ+/5W6p5c7HRyGryLDmg3RPLuPHk1e1wcu05GLkgq1XtdGXNKaXr9izWsCeKzzBzPITIAKI4H+iJZn9sisUCOjyS0sxN940DKFi6I00T7JnxiMDMmwwI9U+2KLatDeSjM5Fe1bbZR6dKWZ+PIIgw1FmSWY5L4SIBJzG3BLtlxlUBBcmmkf+sTtU0fDrdLt6AIKix18YPdHuHFkx8Jp0mzUOWcCou1LN+OqmyDKMm5VuH++IUoZNXqYlGY0/7o1SCdvOSTXnysPRUMIOHyWb2zEVO39GY5Kb+XEVu32Vam48oWKPb5It8sT/H7D71wl3QsUun6eaGY+r2OFjmieZezy6Yts5ycamI9CQYdNXU824cP+K8U8wJpkbP90ZpYB170u3N7dAFjDkhlSLfHICMkXPvzJPtbvXRlB0vCzdrh8MVcFFzC3R/tIDKgFnJJrl/FUJKhmOY0y16RBBhn0amWaRJyNUbDaH5gnmXLofMiDDhk8kmRs/2boiYNgtqfbCxApF98vNLMnuGIkAiMjJMcXM7IoeFQjYr8ljisVTRRRAhi2+o6VX9JX7I6DKmDdonlzGxdshqzZyBj3FvphWLaD/1dEttdz43HrVFN1+tpLJZW43DEKoEOhxSxnTq+kX3aAVCNhmEfPUimw8WESqZFj7PVpq5Zw/FQFVA3r+o0xLKzd/ajiyaoJw+HzmaWVc9rOuCKtQbPJVauWcd6CKVEPAkJcZU+uz8VA0o8ufm2gp5cYZfRFWJSK7fc48pSIXnNkAXRUUQ15jOaXKnDMJKs2RTrfS0ur53lA0R+WY7xjTyX35lSVpFhTDnmY5ncp8exOoNE/0GsZ0auKMblA0WwLOaqSlkkf/t4TVUUx5kXkqRX68D4I0DyLh7+lU5h09oauV4cSltDTyyMsRBKsTsOlLHj2JjN8ehmy1INLpz8yTyMu8YxAUq59hv2/dPIXMzkCQFlDp9S/mlj4efcb6CGjJDAc2WQoZT0VAy8iQW2mWOm7+wjhkLYOA7eczeczzo0WlhTIMf9jNU4efTEQJLSzS8JPljGljnl/ZE6GlkGHUa7S0ifx6GgJaXKXhtMWMKWPe9I8erYGAUXOZp0zObzaDSisoOl621Cxd3OKdPRDQiqJY903m6ZLzix1UpTWgIhctNksVj01XdYCiVUVl0CzmqVLmW5NFpXWgGU5c6JYmHldehiBobdXetzFPkzKfHS1tQDLs+6XHFDFbfh6CoPVFG65g7unhZd7aXxRtMcMmbzB6cpgtPAgZ2qSE0sllSw43XtZNtW0goN/1jJYWHu2p9ZGhrZaw7QLGtIhmR4VM2oxK98vNLSXMeOsABLTdgEEPu1k6ePTXxyCgDUvAFh8xT4fIhUdkqm0JKtm5Szymgnn+zy4IaNsq3e5i9ETI+ewQKNq4BGz2LvM0iP7tEdA2Bw1y4VKzFPDIf3cOirav0vs65p4AZc4ciYD2mGH0E8y98OV8bztkaJ8ZtnyZVvSMnx0WMmknEmTnNxi90EX79sQOomivqnJ82fIiFyMv64IM7TfDgJtpVtws8tl1kKE9B6z1kLsVNTPOngaVdiWKtW7M3YqZG5+YBhW0bwkYcItHK2Ie+fhoqKC9S8Dg+5hbAStz9niooP1LhgnPMvfClXPuXgiKWigBmz/L6MXKI+ceXAqK2iiKabMYvUh5zjf3LUFRK1Ux8TFGK04e+dYekIDaqRmmvECzomTGD/cRDailGrDZY3QrRm5885CSBNRWUYy+K7oVIXM+vZ2KotaKYuA1uVnxsegPj4Uqaq8E9LmeFr3gWM5H14YqarFkGHKjM3qhicaZExEUNTpg8J+WMnpx8Ui7fQyCoGYH9DrxdZoVFYv85mfDoIIangE7zCSjFxIzvndURwRBTQ+KCdc2MVrx8Jz+yK6KEmq9Bgy47Dt69IJhxqVXbQhV1H4J6HDs7JxmRcKN/PCS3giCuhgEE//zPd28KLg5l9y3cwYV1EdRxRrHvNJEMy8C7kb//OJBUBXUTVGEcf9aQJrXPzfnsvu37QhV1FMJgv7HP7+c0eueMc65aCSggjqritKY6Z/Ro9c1i5z3l026QgPqcBB03n2m0aLXK4+RfP2IvkAQ1GXJgDG/eI/06PXIo5Ff/mcrIFPUbc3QsNt/3nF69Hrj0cgvbj+iJ0JAXQ+Crrv+7V3SzeuJm5Nf33TYACAI6rwEoOOuN37sNDOvE25Gfnvfsb2AoKj/IkHQfY87fiBpXg/cSC6edVw/QVBBIRRVoO8xs75aQZp7bXM3Z/n716YPD1AVFEZRQTZi99+900S6ee1yd9I/u+qwDTpBVFAoJQDoOfn3X6xwmnltcjOy6cdbtumbAaoonBoE6LvdKffNd7pF89riHs3JpU9duMdwAEFRSCUEQNc/8PdvGUmL5rXCLRpJfnb1sZM7ASETFNeQCdBj24vueKuRpJu5tzu3aCTzjx/5zV6DAYSAgishA7DWTmde9doykjQzd28f7m7RnGT5g/+7dN8xJSBkgiKsmQLose3F1z/5tZN0q+ptya2qk+SCV277zX6DAUimKMyiIQDaZcwJV8169TtjVbdKd28Vd6t0Z9VF7zx183mb9gyABhVBkRYRVUC7Dp56yrUzZn/049Iyq7qbmXmLmpm5s2pcMf/T1x6/ffrWa62RAaoqguItqioASt36jdru5F//Z+bbn3y3eEXkqivMzCq4amtq/PGL95684Q9n7zF6QI8OAERVBUVdVFVQ2aFb72GjNz/4vN/f8vTcL7/7cWHjsqboXKVbeUXjwnnfffPJC3f+/eKjtx83ol+PTgIAoqqCgi8aggqqatc+w8dtsccRp06/8qq7n5j9+rtz5s6d8+7rs5++74Y/XXz6UftsO2lk/+4lVBUNQUWQiKIhhKCorp269xu+zpiJU6ZtvPHGG280ZeK4ddcc2KNzQHUJWQgqSFFRDUEFLS4hhKAqSF0R1ZBlpVKp1NDQ0FAqlUpZFoKKCOowAFZQOCD0QQAAUKwAnQEqAAEAAT49GIpDIiGhF4y9nCADxLY3cGAAPgA/QDRTsn+tfkp3RFtOyf2H9X/28/2Py5Vn+if1/8rf2v/gf474+9i/Sn+39APyv9P/yP9y/aD/F///6z/57/hew/9If8j8//oE/iX8l/yn9//x/+g/uv///6/1Lfsv7l/2+/ID4Bf0L+yf83/Hfut8xX/E/YD3ff2j/Zfst8AX8k/sH+3/OH4yvYb/zP+79gH+o/3//wezj/tv+1/rv3k+ij9mf+5/ov3g+gb+V/2L/hfnR/uv//9gHoAf9D2Of4B+7Peq/1P+2fjV7pe8X65+TXoD+NfK/1r+wfsh/Zf/N/qPlC/qvAb0r/w/yQ90v4r9g/v/9i/bP+8/tx94f4v/cf2jxN+Pn+N/e/YF/E/5D/d/7j+1P9t/bj6Zvn/9h21+y/5f/ceoL7N/RP87/dP8R/3v8J8JvxX+Y9F/sb/yfcB/l38+/zf9z/dD/A///65/5fgtfgf9t7AP82/tH/S/yH5gfS3/Q/9z/S/7b9t/bp+hf4r/rf5z96P3////6Efyv+q/6/++/6T/yf5v///+H74fZV+63sx/rJ/x/z/cA0aN5lpxOmXiJ6j//7h5g8oFvoKwtrNSnIeRnV8I81j3/kp6pSglVYoyW7eAfiSJRmqNyRtO9uGwzFSIsav/o2WgYxDzbimF35PDBHM0FL1yM+8BtiW7HDP2cHZlBl4S+D89m93lOQ152ANBqEuUxM+hGc8qmD0EZ+TrcPKpdaFRp9qb5EL5kJLmbx16WSE2Oe8U7+AYH9TMn7T9Qx/T5eyrBtfye4fX1NRUTrYCBfBquP8Ap6H8BSUL47or09ElvqKpEUMvKJ8Usn4rqey64c587spYpfvOcdDg8JgBoz8k0kTaUywYaEXsbZnemo3oZLCap3Hv4KiBoEhoRF38wfL6AGW87fJlH24XkpOvZ1OGjhUV6xtXvOx49i/JAsrmJzTw8EYayJ6XZcQ7wIUtJ9vN79iaXlZzkN2q3xYR4C3cVPe3l4rL4mqL4ZsQ6TatT54KWxGPhj+AaL3ZcZIaY/hAGSCUG8H6FSKJWL7HfE4+Bw858tsGH6/zkdWrSri7NypwN9SPnXLcZTRgtjLAWM3xjO1oX5Dy7bKqLZD3SvvGU5cXCjQgc49hYDuB4V51zWcwP5gIWaeltxdRUtfqtgtOCX0Gz/lVEJBG1P03O5IcIhfmILHxb4YOZpNDef8youek+tRq/3TCVPcQK0noAgHJgIAxTUNf77MdTOAsvPtgjJUIWiPUxfH6ULyTJ0HKQlPPNUl7ycUPO3AslZ3BqM6/EUCFWhKSQKjUBgOBxdr21KkpA2nmBy6VzHlKRGYCln6T/bzs079r9DcMuwizCEsWC5bY3fqA+GljPrBAOY/UeADXTPJ2C0bAfcmW/32/g2Py/UrrNrip1vgazXypmoeyWaSyGJi/IsBPO3g7mpHZPdmCUD8NOIV4m4FQqtsLx823U2nFrMVz62yTkHhjZ4s3FNY6gPHExETHZt7Gv0y/O4BvLmb+q5yoET9FOfXhMVHzpjgAfZv+nUQVBCTzq/z/Z59Hzm9QFrebMeSYzFunOWOtnU/NiLM0Kg51vpi3sz5iD+nvHqQVXCeoA8Jhgr9H/1Q+DG+R/ZpvyEQf4esAAPc+4CdiVD7cCAZtdD0Ox1u92z1VQg/Nuf26cajRsh1epchdA/x5gejNwzmHBte59inTVPCNn9iYABH7q3sVU8Zf/HuTzx6KUj5qQfGN51K8mukzflceKyfvwG9MUfHgCM7g/mps5PElqDFSAUO61I7/+Sn3UeABXUd84a6Rcj0f15cP8ZkeGY77iAD+9pGgiiqdAO8R9g2o3rnjY5te0WFEgVxd/4HtgUHIf8Keb9lAAKR505PdN4m7QZOfWyVYI1aHaQytZ1J016i002DGT4kssIRlKpS/TzUmA4QH9wfH5/ZxpELcNYmq8Y5YxLAJxECF2HaVMqNKuQnIGOAWqZwJN4qTUrMd6izfeLOiNNYl40mVIeTd1gCQfw1XkKQn34uQLD9sG2TRePgYcS2KvX6N2/HjSTIXURhDchqBKiBl/moaYPFUxfX45Nc++6Aaqn0ZbX5sK84f7qN+MQ0zS/6mBdttezTgjUhsiY9NgLcHAyVCbQyVH70Q2Jyv5lPcHU/6RMdVt/sGuvJ4Sdp4rjG6Fefr/7YAGTcVEttK8M/HfPGIZHwHKoIy5dLikryVNtroyndSa2XeCntPSSJR3qFaG6nq5J3F62SIMoF8zNZAPi73uwqsIcCbq9E9/FP6MiRppzSf77oEmCDv6GkW341xg2B+dSQd/oI5VKDCB+OB/akOFG+3RirWZuVciJKamob0JYgXQF+W2wt9PwyZfoXgTz/RAulVXkhOnYh98U32Wm9To41giow/Uj1VN8YFbfnrvmQSwBwq9yHEesrMJCJNPchc2Wcv0T19a0tjsbmL4YgR0X+fp3bxdjboeBo/SiQux5PKr2G3Cmo3JYVntA9Si+kNF1fIgZkVIiW0cLl4xQ8vfytFtNyFxmgoJEnOdQ+biTRR6WBa9nU2IWFoiu/nFaeGjAz3vp4d5JcMdDct2rzN9h5uL/PmGnLInW4P5kQMlktVl8cfYBazqzaLAge0EBCxuNsdGvnqrXLvybergr+EXv54tfSgPR2vS9quu5KKTA/0OnB5G89VvNJvuzVdPm2xFvaRwhzKn2I5pFk+Whr70xkge2ysK7rPZ1u5ANr0SLNwm4SY/7koGxWHgmBZLEsP+1aHTStG5klOQI5OnoKhbAvt06zRzgTA2rFlcg8r6hXXaTmaHsWhDqDT9tuZyNyqrHB5WlSemvaJWn1lruFtcB/Ft6IKyMisjY4ElWxpYRXF5Ok8H8t8Y9ZLlED3w+wiX0GETvtuMcS/EF5stlVnJrKQ3HAreZY9c28C5Zls7vMmv361SFoAAQkfEjkmMGs7giACEFJKXI1DD8oRnNX7mTHXJXPXL1fc7oTi4+UacTWvPPRq3e+Klr+v5QlNcDws+1Pl1PnpI9sGeW0/sbzue7bisUxUZ8MsGp8tR/TH8F+RtwE00NCF/5X7NCzTJ/3SFuiW6T8jQRb+/CP82UsvypU3N5WaQdLqrEItEWWrrGLpT2jjVC+xvfC0sfsDyDLjMQ9SFrw06r6/LsJ+rBIIvd97oAG/SbhazOp35GScvRVtdQgVd8Jr7OUlrN5Vc/5LLj2ToLmq0Tge2DPnzJByInOVOcUt1eZeEzLrcwi+a9ujoloXsP6adTEUMXUIyin2njEA48kAeVQItvBjWJPRV2qYChR2sdy6BS0b0FETmjHYqik6VFsf5AOUt/qU1U07IF2Va+ee1e6lLHruDvzrIRbUEEChDDQeI8YiFR3htEyY8XEz5yFo3Kki9l3O+c27uRs+HvPsLCB9y+UojCX0yCfYZDmV5mFXXit1ER/YZACfmHT0r1rCZ/YNrcX2eMdmG5i5y2TdI6dgt2/ycm4oo9DExwNx1Lr1cxYa0nFhhmN0s/5zZA1VYZ/ehptb/HCm+s4d1k23SyKKsEy9JH8GFV3Jh3cYSXw0FYnUAM5d35F5YPrHD79OZqYo7fhEnn5eY1sa35psX8GvX89PkyKhVOrgUuoa8OjhZ6ska9RQd5Y5Ex0wcSG0E/ixNgjWHG64bL9FospOI62wJHdDkqX6Pm7RUMRoaQ+yN7ze0LC5Nb4DCmd1sZqxSWkYRKe3Snh/m4hmRqnQtIjt0zr36B6iV8tuQVqMZ6Io0FpFroi6h36Y8XH0SfKAXsnbCXBN1StyqZI7NCC9WTHICY701mcxLJ/iHEVVh3A+dl/QnUsfjD+bXV7pRFcxVw3HbGZ6CFll1p+oWsx/TbwJsf3kLRq1G6qBeoB0C58CI5wqA+Ilxdz3MoOCSmgH12W/6bJsZOQ0WtCJTFrXPfXF3rI9tNMj8bf8c+kUe5+ucUbzOtITDVKx546zzp3eywas7YJF1Tljbo9I9n2WYQJ8rbdP9CDg6sfjMTjwztRglE73mVKOZvxPed/4PFQb9454oL+52ZuVg2DuzD/YYhI8utG3hyxWrADAeinokzadLeiQ37qEF/FOU5cTu4TEyGR6K+hXEjojZR5/UX7aTCRp5JCiaG13O8BfeLwwcgrW4hBhpugofzxjrMzHWQ74ayda20aTwWhHRyGi9t2pog1Tj+uGSUAxGV++Q3C8mjbhOz9Vjkh1mMzvrw7Qky0bjcXrZSalPySkdZ2hCffuKUc/rIzfJ7lXCn7Myd29FDSOpLsHPdnmr7tZEeWDaCa05M47TV2Tm5Z8mqprn9xoSOkobI3r9coH/5WMF/Hoak0/j8AD88e2foowEqj4mWUYF8w2e6U51ReP5I4pkQrFmnXZht5Y+7POyC8AWuVU1OKtHrfUQ+R0GqAZxox/zPfok2HrjanxTNUNUs7mGVJ+sYlDvSVBNolk4zSp9M/nxVFkd0PjNCN8mVYuM0+ZpHYxKMFm3LQJ+cQ9axBclhOMPNdTpvq0S2/3t3+r3Fr7undfdYI3FGYnPmPSdIAgJFxw2f2uJdC5/jxJ4zrvHTPdSh9OOeDml/6PgzD95/ZKJnJtRqfLeFPxzkbs3n9t22PaHwgurEIK0e8G7Say2XTgXr9l3QXAuBM6moA/jnz5D6lysy+aY0BlHmXgrL/xTddrt7M3YocjLrsBtFZWQek4uF4Zd9Pt0A8KsfnhBCJ179VgKT6ze21H54xuIuU8H9v4LTprVLa0dht7ym/NkG6C8lfF555eqEG7gczADs+dIRmrJ62VA42AbFGJIcUvrZtLu0znFL8TMzQclnXF//WpYhuyrfv3lvivFFZrKM5vQxicraXIZi2lB3eS5ULOX6pm8KvOt3DXp2xZ1m5mHiEFriP+XWbvPYclZpf0wIk/MMPLCWdnYlO0PKOzn8LkWROaaz08CzGj/KsJ2Vhx+dSIWff8xriUIV93KJEbOsJCjjoq6h3BA7nBw1e19psVuQmxjKn3oG1FeKezGLq+1T0h6uoRMEbafmvtR2G7FPmGoaZ9xAVtHoNk2GX4lLSBUjooAmIKOJLLCG8iSnF1X8EAtEIWymTX1925udxdzGsyZ+ejSNsiUMIy9aDaXzfnq4lGV49pXj6XtVnlXZSCrwgHjkUx7t6CRr1S3Zh1qQUxwgv9z1i2MIEwhuIfWKvajoSiZXB1DZ0iSegQsIFYuCRsg6mcOQhvFeMH5nkiR5Pu7Dm/BMSixjmbrEWxtrHnRNPtiQcEmz8k1eBC5Ev2QmjzTYXa8QZKInpOxUizxOgwAJlZ4MnmGUABlZWYWDb/CAlvF0n7tynh6wnoIYMnydCL6jBDMzEhdiXfiA8iIpQQKbjJ0Poy9jl9+6IWSdVIb+DHCC2BARTNqjcdtVFnKnwXAIHZHfw9Dv96OT/O61JdUAq1FawIoRAGGr1WPx1b4vZE8doFnTOgLQHA84bbuzoovooACUHYIyRZe4WmEwxVx1eCbnywXabcENiwt2E876QF4uncPw62XGBMWy1uCf98UUZM8n+4CX5euzAmZuDt0gakuarrm4AWwKEIfCwnH7pT/k27R58+fxhEoga1b0xL/1Nyan1RRG0AiryZEoR2RKLDUbKG2uvWnuGDWlVXBjR+abgHYYO7BvSDoWIGXF+PAn43RfiweXk66YP2zWYIWS0eRGZ1OaMWAlMhvU5BVbo3r0q47Qpi9yQpq+K6pXnTo8w7LX9L/xLNlR7zBl0cPNec0oj2g8MWuvULHHYakqHz+eBqzF2ZLvZR8cGO7UyY+NXu1U7CTenJIeooP8vEVH4EpoMFyEMNjq2lpwpUjJSOcYXgRvo9UMyy5yYqqahig3ifr6rFpsqZWApdpqZS9l4q+03sSAUK/Gkgav0UXzyRgE+rvVAlvh2KIYU6h5XkyDGCLaMuRF8AGHfW/KqW4jcZy8NrFgmPxsYoWnoxT6eArMQw9U34ZyABquJvyaUrpzQ8OyJoVSB023Nb9gjT9d3ASD0x4a80k+lksvNAvG52fDAuZEo/4ScV3BITzqbaI8Kcs6VNZYhCg5vx5DehnGiqeb7Ok6ZkNTS9Ux8YoYdvFiMg2yAl6uvQKAAHNLjNMK9rxDoHXEq9IiYNzbFeKIXZfEGfGGsV6AEZHMPZm+ypjGKmLxmUrbCytEFvEJSLAB1tHurLlb5rkszdzdqvRO8ZmIJ0X8GkoiFTh3tN+UxegieqztjBnZFfHzhIdb0C6jvNmVJBvmhK14zYlgxOFotcZTjDPGa8+AAihsBX0TT552MXvMklthLiJ87TnJeAChZ2efFUtFAhN0H4izBk2TG+a3kHDOJOU5u7ji6wlux4N7Hk+P5aBAK84hxy7G0V8UdKgSUVUN6Z/y3kWP9Uf0427I3C+YcygkXzNgNvFJ/VX3Ez6FSGceOPB6YFwvPKMcKRwOK1AB0jL3BClRCh0kWqeqvr13SZ+FDwhuRweG9qu3sQq+/B3HArWP7QQxegzIm2kNVw4hbzw9uAnvOS3Ti9Z6lX/1nFISozh+pvTvnAPOpFBuWsLleEFmBqMjwGs8AAAABEZz/5UHCHXXf56fpGYdvjRRDNSMKEHCoIy58amP20YuBQ7WOQGou/JZWhuNTShF2dyTRwf2XcVKBr9ueK6D2hcwtb+hhMPwCxOssSYdDSDJqqufhOoVzsXhiXv0NwO7OfLOy3CfDPaBEByxUehAdZYclzPirwybd2UEUuqhnPbnJkxNyPIslLDqRvUzKB2+BSbHxnpDNUBPDR9ytrAkG2eHYn5+PSXDKePh1GJdWzUK3yoLGKbVG6wwIWCPHD6TIuEABj8bLCPa39SK8QwVRjn8NIYFcCujeIreWm2RuDs8po3HGX6Wd88a118Rl+6Aiq3lDBGC0Y1TnEiqOcRVCSiqF45r1K6qWPukJ1sVX3sVL/HNDqSXn8YsNWcjcHfP3X1M0Wx8xKxCM4x5zcLXWXy/JDjhYbvykKUh4diR+zP32pQDri8yz1LbJElrDSKadEeDNVCrOWUcxAAsGgEZpcIDuMi+gQwQ1pcehY5pv4mh8LBdHforrXFtK6qcgHPR2RCco+fpA2AJ0NoWHeOMlJ+8fpEnsAFhXPBdI27iLJJjpJVnDEfFP4XpNuEl11Xy9/O8lS/EQJ9ONsRuR8d7jr5qlD1hgMgJY5CySPjN+yWI56KaBiEFya6Nq+C71a9+4v5EEmMbPs5FO1wda/hxWzFU3Qdki1dBOxPIjAlIKuB0FPNPJ9A+Y6NJs1Z8VMY5YThPJ7rNkOXLXqnK8DUG9GWIlPSvneaP+R2Oj2CSIthNkveTuOCJYEPsFI4tOx2dDI1RYULbpGbQ8TQL+DF5b4vjw8+Gifb55c6Z1k4rmx6HHaycxVA/m5uT+5jYpohdSoSqlgXQSTc/RjGuAHmIOF5S3Zp46xCGMI0+8ySAIgaT1HL7uDgo9gMM4XESssqbwpsO/lcrJVUftGEk7Kad8LLb7lKw2ENDODtt+fb5GV3xaVIcexewax/TKVrsK0qtyoAC72zxR8WzlypcLl3Jopgh/3j9L8LEbVNLMh+3acgZD4kf8FO/3RA8ZFd5jwCEQyAMdbZ3qE0MEl/NZBKwN16HMgo66JgdTgAAAD6wC6LaVcj5hz9tN8f6ijLU62/kMIURnTX7qK28N3mtp0/houQwJgqF5F6uRx6TM0yymQjFiSYdXd+aP5T8izl93Pqi0MddMP5zRjLUpf3PuMGUFmTbU0VCf9nK68vlVWH06wwP6aJUuXRq0VSXb7TfjFApMC7ghtifDgSKVkFMtMCeGPiwv53qv+KMU3hNm8H/+jvRY9adTjYHkHNG/JRzcC0bBOzdnTV7fI/bH5RhcgnDz4VnsLZb5gE2mqMye2yp0+hi9WsXSG4ihqVYyd+w3fsc1dcI8T/YtQDY5EQdHdpK0rLR+n5kIMIshD4O5MCYyU6IjSAbjvJuIwBUuJg/yrKq+IpLiNqEd+z2/+HReukJqZGVczJM7t+M0QxVJchejEWoTjzWJieicwKrW956ECoLZPkJj2ehv13T/1mT5sF2923bwPsN8eMnjqOWh80/rphOvvgLjuVaUsQoMNBaz38J6liN7NGOt5EkGhp9Hl6L4amBC3mKb5jxdrtjyqYsPBRSJXFfYC2bjozC0kXI+7vL8YbVzX270ot8+P7ayOd4qERgbbBlT9A7aBq8S4eabDZ41smG1OBcjQXhxJa94a6RFFyQ+yFMMAmLFyD87GPhYKXhzwFb3HeXpG8FgLN+BhuziQjw37xNCefbptwyPyVYun3mhAAvCFWuwal3LLmd6gxsrX1SIMoUnBXV/78wjzK1eLewh2GpKWNj/8cg7JPhV1LO5Mxbu2hlPVN174L4JeNYnyU3eL7CWIeY53MByMepHhZHJ5dVMeQcm9wiNOG6he1khFuj8hVruaIqzM1ZjEO9+kmxtIADvmhy6HNjT7R69CGqPE2DTmqBREH6F/5J3REUwyP2pMSqinK3MpsweiHPyjNG83afYmiMH3wI/wGs1UCUZh9W8GHFgV0qCtDMm1187Yc6xLxQpbYYt+mQEuqlZ1yUzUCbgoQuR/fxtG2mplzYvwjSrDQKi4ttVgv0ZLfakyCS9usCl1JjGxKCThG/iEob/NQSLpxCb47DsryZ8IY936c3A3aEHIiQP8TUaU3MP8pxmWmGMUNIDcesxVvhu9f5vpzMLNa8T+5HMpPY+mvEwnr1UQMXEIuX1Kh9fK6whvM32O60yOxpjIg842uNL0VUnOzg6Z/L/ixYkFc8x5yhcA3zAIfFnwIuJk6OOcGYZlT3LZhPnJxgM4g/2zswFc9xYfuUmApXCO7oVQDTtzWH7/YwOmfnggrYPRse7iN8dLXHgi7pHYU0vgCzIHEhbtzYa/BWb5A4Enzz+IRSrDlUhQB4fH6Lu8q5C8uuhhtrUimwas6jiKC+JfLyUDkNquglrNm4eb36GbfOruDJTPq7Pem4vw5D00H4B4O07PQNgzIfLhiJF/T16KS+27r/86/dBOp/BgZ3e/DffeQDzFQ1fE4X14BN8Bp4wQjGYhQorK212B5DPiOm4c1Ptj1ke1rINT3p5muzWBbDp1nTwAYOraFprLbGDPV6VR64oEKjVfPvgfDLeVzY8to/mDP+SPHQ2QcnKdpaBTCi4JXHATaRGtqC821PW7aobMnRcHv8L6FFFDa9WwqiXYTnp60+t+swkez6ILzGd2wYrNeFpB8gQmqhhl4jrE9/6ANZMD0AQLh1E2xCnwK7I1pfgrYbGxJdtC818VJsJEy7TcrM89akijYUjK8YIjuFrFrLvskEZUG6GLyLfMXUcEFa+yrV56enaGcBaVK9jbnMyrZiT7VPtFMj7hvfdAh+n2Fvhmh8jv8yw0NlC1lWIzKIXSqf3fgS2kHAp240Dn5U2VzphjoRyp2je98bdnrNXp8gbpFxMbqSdPxZC1cvllvcgLs7ESnCvomRY4zgXng7ahoBmpNSLEKETRefVguJvCf+AsRdXXmITKtR4kJV9lz4mAQ9fxLXnDv7lZrFqkbX3USvY95yQg2SnLRLbPYMB9T2OiZQ3nC/omgsnsKPso2yTdGVSjBXyGS4own9KLs+5cODj2iGO7I/Nyj8io5jficqq0QdYgkENjQ0dat3FVaGzXg2TAaAiHSqE7Zu230ovMDiuUPGYbbuq/cqkFFn9KAT87s6y5WKqUnS4SFlNnZlNhB6ZlhcF5PzcTypFMz6BtTdEgGfarTgi9c8IwGFXMme191wnLc1ndFl99gAROy//yr/6B/8TH+69744z+4H73vPff9TXXVFtw0YnlUFnhRBL+G2FMs6ID+4DUKafHCdrW0dStTUAWw7lEdM/0rI1tBdOzBpiCC/utsrq0FDF14JEHpCZZ3AkJoQ6GlniOXwHEm4Fq8+TRcDWmi58oCDMF0y8miwabcB7ZU4FVzjDNrvqG0GzWKJXaom4ckl/aYS/cSFQ9G6yWQ4g5FOxr3ekIhxm0tqzPYnFqMfWsq0QLqGd1KWeIBQQL1p0XuH6xFhYWM+hj2wdpvN2mkTpNH1aNR2GRaIwQtrWLPPPF7Dogt2H+oRzyu+1InpoJmoGv8LkI5xD0aATNhRUdSBgze12HRNNQgupxMLdQNU5zdixpAVE0901N5aiYDUtez6UDysM8yNR4s5dtja5oE1AoQnlbr7EnXI/nHATrh3Yhhf5S6jDnl1DxfTtq708jqC4mHbBog/c7qLbLmh4bUns/Yz/2UIfgykBARDO4/lQVo5vT1M931e/uafYJ19uqw1h1o4k8BjNUWs08jy7KQraJ/jjH+am7KR0PbSwBNmYhNpeBd1ugwMbDuXxwQZPM2CfvQFjaIDpxvOSASDvW6JOfLet8jXZdMbeCSMRoXmVUJnItvrVLcCK4TPu5QY3WefQIsKZcpPh2Kpn4o5pfKWMEd9Ls6tG0k3CBR3CiJ+TzC+tDb9ED/m1idfMn5Qg/QC2nzarIp7mI2Oo/2Ae2PGbU0is0T4v7TOfnG87Rr2N7jHWocpIyUadsiNYNvicqk/3pMbuX35aBBD6dNTy9EEUqhh9/t1W/yX8fJUwFAV2bGUNlOeaVD1YO6aHKamp/KsF5fM/9NcHRlko6iJSOwSS6PJTQ27XUwrBUkHCZ6tn1x8tYmH8OdD3qlCqMhuQqSJ0mfjIYHK6tZLUwcj8Z2tAB7jhsgVm/o5WyRbjsH1gyrLneifrIqgQJkll7ey6TdFGB4iR3TJ41Xo0ZWkZVRpB0m4zMFKs0kk4vec9JkdkEowSPMCCglT219VhUxxFExr6PUnIcPIHyx+5tKPAQcIho9vw9CaywJ8w7+YUpct67kFX6QoJ32jtTlwqWCTG5DoFyMPJZq/rWRuM5W1trJ+kZIu9iLcKQ8Z0bqxYx/Jp4Q9tmPlHLANJnYMnOL06t+T8GlIoc3OqWhU8zg7U3FW9bhPIF386ACoCUZLRt10B+Nspmf6+6U2md2PUQVIs7QTytdnZpB6p4yh8YihmVwsiCgdVzv7KmGha7YyYsV33JGCRwZEmTnsOYEfLnJSXLXByTQ2FeOW6aizK5rv3jL21luuQBBUi01LHukjeE8S18K7AxH5mEMJ7bHpPT/ed2E1ixt11M24oK7+r82rgegKyvPCRg63Ob3ZyExTNGJqT0J2rEjZ/BHkXi/Cd8Kt8Qac1dBq2cRjuFrPStkbewBqNt7lWxEIxEeNaSDm5NMiDmCm7Q5qkTzp5ZWqlIAMvB0Dylweg95PrmJb/fOG0bXd/jBW1eSIbFqKYlaDEwMZ5HUT5au5aB+Q8eBoWJlU8KobVFyU0DRM/uLhYznwnPjOwq7+WRbXIIlaXl76bJEUjCXyN4TspnTpdXWz7qi0P2tTSycx0rxYvuLho5Kwe0KSuZUgJ4oMzZ3ZzeFmr0sNje0chLuM+cwzwV8EeJj5UrbRBFXm2436BL1pFg+LkgT10f1TMZsKJI0iC41Yq5KUTYboUcHGx3UWe+utYPDkAB1jESn71jo/5nWo3yFSXx4fSeohx1+23He0s/OGn9boGvyXu7y0qG0dOLMACArujBaOEgA9jJFCd58vnXQb+FMJQbUW/YfwZg92XYOQ9KNf9ILazz1I+vcJrosmefYTWWAi5aG1dPHEIBSufQvlSCjgzL+WZ8NQrP2vqAa2i74sVNPapMibnf8GK1/sV/ip3vaHcS7K5DazqDamNssgaFiFHK4Od8GD/Y5xLqRnzhmo1Uiki6SHzUhAdSA/OT3DuGaZ+VRjHJnstkObmg2UmlRtfiVAd6QPJzsDLAmo8P68rLnawG619OvvkHwMbCcxMBU64jFjw55pRO5XukgsDAiN9ZDBzgfcf6JRBGpb2h6HxJy8GBX3hd4UJFy5kIAZf57C0j2K0JpF3iJyDEYO+IGj9Sy+q5T+5JbICCmHRYbiHDkmbxxYue4WGxEWYcQzOf9GG7wouz1YY3H08RY0cgR94egt5mU7pjkpbKxEIw2PG/HteyIP0k3BaZDv208V4yaWsywitsSy7jABs6ty4JupjI6wQQz7PKNDMhcuZuEei9qK6X16cRUAidGDkQ2h2GI7mbZmsOGeYbgUUVwCT3xs5mcmLGtCBa8IzfY3+BsEE0gJbXELhaxeisAOooq30D9ncKxWhv72hv72qaTSxnQzZx/VO/raR8Za/xPxFw/K0pcWRFY/0GlTX8RgnEW+eJ/gBX41InsH0nWUOrPsVfFo9qxRNU5dZzluhPB+0B7DlMMf8bimQlBtxNiWJr1FZjS+usp6yjWL4xPqtfl07KgFsGD9+15Ik7nkPt+F/i4ibF3FO4AS/yHXGwuBKNC4ItuEpzwkjsrP201GiZmQca1xNvQ0AiIKQJseAw9z2sfORhCqmN6NtMlulaOYRf9bSt0fk5yWPqnv1RHWfYwdR1XBiyTAyXvH3f5E935DYarZMhxn9/j1xPSsGM/ZCqYCRuwcchUBkMXbaG3Kb1HRF8zlO2icKA+fvfWcsDNQ+JKD6X5lPHt2uQ1x9KFT/tuucBspyP5fkyl2In9WIlWadUXFWmyZ93N0rVU/CGazr0/pho3pjGBGQGTMWU3yd1hMLZdrTeND/OPff1NWtu9N582a8OHodhJk9xiEudB5Ba9hMVehWRryabPJtu+rbfBu5kWuK9Y7MlZ2t/DBIQGsDHDeWDpMaXmIfDzuVG2RpEou5Zmtx/lE7llq8Py3R9IS1QRjvYUfp70HdKaqM6zL/L0ZhDKzVUtW8UzbBdSC03O37uoMGRSJFSsV4TjXLn0LzkHfPopSggp/6lBOaPCOR/wnLRbFzyT2xaabCZfrcbwRVwLv0Nb9tEV+KTCgRIE6YY5wVtvIEiZ7KKBzM2I8K4FyCMW0OSzvff7CtA074tnsAfvBEmG9dhl6jls8wwhJ+7amWMgybjMUxq1+79cgZukOFgKS3h9TjqhU8rgj/zrhNqUGvhKsZ+C0AJkVYbfeeoROzlgR9QqHhfiE0QkqEzBjnGCheJvwClX5QVG7dMGOFw6qZ5tXvI96CTfyYDlPy6UTbawT1YYN/CLBK+ks7YTX5FU2I0U+FoAA8fOKjXQNWmwXl8qS61bXu7zxmprQ4jKN4hK3B0WKgy6GagWKfVDlOma4EfLaKKPlal9COrykSCppXP8TDfBHJfDyhqYkxizPyr3o0d3KT+BzbGw7P/eY+rAQy/mMqiXucJX9n5EWqeTmgZcTwFkBSKDaH/j/3CceGMI2ocsGdPPza+Q+1/8FqoepTmFReYpfeQtma7VZ3UPdEafnHyfOjtWcSfGDzqBiGU7+eQXRvA4ZJQSTRzAL7rLaWA+OKrFHMOYNPh3SNrbZMju7rxlIuje/mrRSN6utUuVpfA71B/H0HVvnkiZwBF8lhxMztlxRbq37vrIZNFbVQWT5vOWj5KjR6Q2Q8QGSAfklnHnjEUdQYab2Zra1i1V/Efb0mVqh+J6kL5ePaA91pOiojPqnJ1GWZPNqPWsivhuFuhd/L+XUBrLCJAqWqw5tOlEAKLbNr3G0zI+eor7J9EagLHpsGiEkVW+s94TaRorbRh+RfAzKEFnt8/fYtA4iDWzP8gS1KNNrgwmihXpVQd2DG0pvIUp82goQO8GDZ68VWj4C76Z0dLKq6AmHuHAgybJdLdf1GiQEek6vSaElUVKk9sX7mMGwse/YHtvaWUkdW362BIyr0r3cuGjeCGg9tH1MPwgt4sT30wXTMQn6RufKkiVJtTipIaGQnwCX+82OBGKYm5aSFcEfb5PaUXuN3wAbMCwdGZ0pUTZQJJ3nn1yY2vdTrVyql4L+1w3pttkZyjVM3cyp6x0ce1RjOvID7q5ZiOfv/y4ZMk1+VsTP+gh++At5ea+iMzc7iGpvD1OzDJ3+AG3aFiGqbiMWEocnQ0tHJKvuIl9p+xWA/C73B0KdTVHjtnTUU0+CuKXfpSvOLje3ESGQjQYv5B3QX0sPSgOUVUpN56/AeNaY42NE0F0ErjCzZHCU2tp8ZH0mypZJmFVCHpiZpidsEHjLKg+xz7dQenRQlpZvz7NCXZ58Ol7zyU3IHLqPQei2C6aZroDntHpBl3C/VTCl+n7li+5778Eggl/ZRHZTItld+w/Dv8UdsgDaCPTGS3fgXczd5VmtMdM+XAGKz4GN63tFan+MIcoqbC3LuKdiOH3qWAoQKqONLixpgALIn3q3kYwCIMG2yHsHELCp63miC21rcP+v6JLzyuCBAAAAAhcyaNeXUxbHQVukkI04LZL1JM5vA18UHBG92XfPvw7D2s5I6ExSrXDmJvhqb9h5rLB6jalUQNwwzOu06auYOgh4fBECgoROzZoobsu1OupwYIvH2i+DuvJ34iWfmzgw1kZ3dFTPDK6HD1X4oCEvHfK5BG/wwqFKvkesL2L139GHE7RLNEDrFHkmaCft65Sn3lHoXZPuw5k+w3UXQVVssefpsajd2T4uNuVPCFKoQ0ntf99rlqAC32oaSnl1ZefiO86jt6jExYu0iRzKG5pTwOQp9u+VWkRigK0eoRVfRoMbSrY33GEqGTFOAzTjHDFUr2BAjVP0k+YeaZCovS9PKB0wFwETLtIgBfUQ0Vzwwr8QCpZAMLD/Myjo0FYqUdsnrvuObgzcqhom79k/dO0rcgJXS440OxFn1S+DlDaQKLkurRe9la2oVbGCY05N2XmxlC1sgWMwwEe/rnCSD98v547CR5Es1M+scKh7pVrKPcgUvy/jXTLpxKg8MV1yXBUd733R8Gwkx2LM71VOTqU5cKt+OqGQdCT7d6t0UqGZbJTkty6nrc0nrfw0Rof2sFdPivdKGJ52323lzj9ZX/KlhQfG9lui6A9NeF3LsDNpWBxodjnhmKEDs61K9Nc+AWMcR39nfl9UP2I8gP8qzC+71oo7mmmf1ckzdV84q4zLLc4295mfx36h9UXM39y0/7GN8N8TgePQTa/74+iywEDayWxWF8v7RaWpTpL31jlbOaw4AzRKBKmJRZAi4OO8XV0MH9pTYNWIbSHyWepaGy5JFWdHZESp9oYNDoCp0VYby8xq/KFYMM74EED46/oVJhpsKoraRLz7d4czagIp/Cy1pNuFUsD6YQ0vEjJtsaMfdrApnpWq2S/mEeNm2oYenY0hFAd8nUV50g0KGyMU8KJe0OoU3fbxsXmDysAM0mPQejRfWww29MHlV+BW8UKCt73gciTvKMbB/SHIvbYPFRIn1LsWWqrFqZZGe60KPmJD2UV0pAhZYrYpmqwIwXLSrw1HIWX4PZQXFa5h9vvzeimvoamsoqxESNtbwqP6HMas+pTtryObAh805Zc47RGur+kGhNUH+oben9OhAm6Bmdx9syWHZ90YkODr8UYpZw7/9Q32qjJdKpJw023eHgipuK4H5ijOCvw3rE0yGuVBTRcD0AKyL1snFd3VO4f6dpCDpn3VmS5oCQu0whgTRTazdZyJqXYNlA66YAMD+Mwv3VMBIv/R5pwf9oXzDVGAqYUCuDSgmBm7Si/1c0n1oMzYXVqfVpFj/bExqs1CWD5HPT19VojmHqL9M8k4On7GxeYzMQ9RZqvxsimmS2vrW9y6d0V9LxbZgR0Hs5FENSSCQavCFm3/U8cjVe8yY6N9O7sUiMGyiEAAAAVeWOoe/w3gT2GyLik8sSkaI+7uLS3PRAFiasLYJMCVpWmVkef4mtf6tSnBOzpugMXm/vCt8lFyDHXo9E5OLQLzO4ittoMXiL0Gp1+NPERLjWwtLn61NGX03fJ5U5KkzCSQLpiUWCxEaFO3N/KWEvSJ2g1BENCFfY/Ed35CrJaMDVwPPudXRqgm6K1ZK7h5/QjEjKs/8Ex7n23di9RCTc1xnmGu12Tu3sqDC1VftLNE3Hs5CGQ7ypbOFlQ8dpLcopaGlkvfbl0OKZx1G5ox3u9uPGkhGwy565IHZ8yfGeYGnZywFn0iAqwlG5P0IOmFdI9Pm59ZAaPlokD/b1fdife/TpExdjc3PFv0OjtnB1AufdVzzDS/Ox/NPUkad6NTgOG0/VRGQLEJ+ZWpDvydPTb/66reml9WNq3w7BQvMunoH9Y5FM3tiLq16OT05o5MDe9Ga5rXvlxdzeqCR6jsFLfBqIpnKEgGbqcect7/DekZVMglDK7JsmSraOuQCBC16dfsbGbomf5FT6QeFsr85TjR/M9V+K3r+Rwoh2hTDSxVQODEYif6+5dWEn8rC9nku/1yKwDDPtIN3r5L7hMtNRD+1gxlsBGe+tp3hgs9nANBf3wJ1ytLcENhEHd2MWCiFDGhIMGb0CZNc2Vw4LhkH/HS5w37ksdZKpxmdCQxgeU+vLU5jU8ZLRf24I9MNdELG9Vq+jwA76yfS0vC04OzV6bjgAyp1q0nOjSxMDNl+nFbEX4QpSyDpiNiWToPMlEJIMTxdqNrdPOAlxel8IL6/mObC9c1nfl/MCSc0IT0a0u69mTU+4wxRaf4MTipx71dN0/iK6yZoW8ItSCzL50V1hz2afZcRY/38xap2yvkIIIh072np9P/2UF4W03xeicUqYVs+LwYllt4cYGsMNdiq9PKAGN3KRzDhjNXqm8Ppaw4iIjTDu1HpCSwpxtW8d8OEQarUjvVAAAAADF4VfIGh1Z8oMbe/GgwS1LLaH8DE4W/c5cFebhWiFAZf3WqE0OjVydipkeD4PMG7Qu0gsIIHtVF4QdFmlIiKnFyFAYXADGFH4nsLzPZcfABWcE4xIVNPs2rnm3sdTaWyDRBiyIXllr8WZVkFXbn9HUr0XKNKfWHEdqwtrxvKxSP4dV3HBHJZQI+NTRyKsYVsMbRPK31oWp41sMZN4CagjQvTl3llQElTLol0wTfMwijtp8tDHjMaOPOnJjpBlpRC6Ic+V/EOevsVROHiX9YdZ4vnQ92lksArqYlASFxenO3OjZ9j7KrZoOuSjNNAzuvE/D+1y6a4fwUcjW6A/ywx+wQjCuP2My7SLhxfnG7v3IouTcAo8hf6KjjM2/XfLzVL9vFR0Eb9EO/x/787HrdZqkaeNqSozZgTSZiei4CFyoCjkvySlOJ+kr2/gyci12rXEigv61x/HYAKA+Icl1950QBGkL+prAknvhN8DlG6rJucMSCiD8w32/VKNLaxvuqhZesnHQczx0fNMu4p5J4q4lxYjDEpnF1ZBYGZ57+sfpiTB4MMHXP7Pl/Yg7+v0JEBxJvPLCzrt9nLxKfSmLYKR+e/cf1qC+ueS6OIkJEQRq98VNJ9flD+N+/8/Lwbh646i4/ARqgUt0CjY2WAZsjrMH7lUbNGM9SpFmDCkLqnXEjgmWAMwt527qYYmNEtqYBjbj2dH/tcMNmwUY6nKOsnGoZwNLhBTczSqsnzq/ro0AscS7S8eATNiyMwXqTQgCbOmEsMuCe69qdL0co+qPZtjb322mZOoGtUFKXouwjO3dd9UAiVRgeFGL7ppTeEQ2xbt70YiGTXEXVbGQEQ4/vu5Z9pbl6Vp8tShoWxhcJtVvV7bY52h3Cwe0VWJc7cuqNCnNYR9xCxCvc/2pxmYoLKX+L/PAb+pDikL06IX83XFyBINvvt7P4EbBkRhGCKp69p8TwDiBf0PX4ApSvMnaXPDOQqRV2qeas8RJ3Bw9NAAO35N1+JXoEERPaoOE0gRRQyBdv8MNpvdav6BZt1/pTLLU04Gr4Yd+SJQ9FR8xghdyfS/ztAKj9Xso4AmcAYKnBD2pH09nM95e2gGf/gF9ZaG4FpFjk+5XfRyAdChOzAmuOdwe96hiluUdy7Ld5Wl6CjWE+s57xSHy6u/6z3nsTnQj/l7jCkIpLi6NPnAggFLxYPCUuQQWlp80U7CpwbLopxKEn+kY52zG9AG0VdkNhmXsX87VIiVHulfDvo62X6uu1WFPKgBcStShb54ukmK8Wrh8m6OWii/GQjgaGUr3U2BDi2UqZPDrZBWwBYB310TvwPhOLEnUkxgfy+Iod97+x3+8+Zt5oC2y3jMosMxaZVy9I+taY0s2iqBx+Y5RniQQ4Y2pPt3uidOf2q12txE+P1Ab0KkZCntSQxicFCQPjVbz0FhwKsDF9U13qSSNMlZmv0d0q+5XBp/ybJx+N8nal+9yaBAXUyDLYkHNYjHDOusRIzOGOPesT/zKpNXFsF3ZOAJNBtdHxYac6DNUZ3hXYCfCwFLSsNlbprekdnsex/+p7sn4oawY2Um3/5isBtK52zELfvGVIx5YrwftgAWMbrW7a14pqwLQhCuqFgAEWIaPVxc56eeVQ8ztTdPttS+Z0SelggxbBCvgsNXyTvDRLVtEJi2Hgz2VSRAlGoiKwnzjTVpJsY6JCXTjUZbGE0jz5tezp1LPuh9ckypaZhorTnSDgYgX0UW/1Bjnr8x94WgQyQ9BXwp5CDw3G5qdCTirmXTmwUuoUH9s1T/YZiSo2uf96Hmx3fEmigjDnAxT2LdIWs7y939NCC/gZOZYXQRDF6X2MsIGwZ0NkXmE3DO/gv0vl4zKZ4dSD6kSDl98woVQFL8btekS1c8FFg1yyXVF4DAGVJ4GAhZ9dqbqVcCaELsp7avXmXFHg1fzNKS3licWRCMYY/vDtAXx/hRS+b/5mf3XIazDZVg+N5UirvRLXgeRmRyA9il/XMa5lufQWSZeMuOg/NdijCH0AYP1gy6pAlbx7EM6FDEp2ov0eoaTWU+57GjTyidNoojuyfSAsmbSjQkCq1Hx9ByHoHlW5WpKfklglhCGvaIvE3nLvVC0xnOeHRjWvq2gVoTWLGpSoMAESb1X162r3xVcdnw+pNbUalouXWw+4bYOMtQuFgP6/YmCkkYLuKrRvOlo/EJQG5U7KumBpEALNmXvcyebs2UlqHBbhGJAS42MDRa58DDIDXg/pfsFWbQO5HIdUiE/yFX7uPiqfjSe5rg96Fot0SIqtYeJPhajU3J5slZj3U4LByJWfFLG4aLp2EhjlqVeYaAPR7FWglvN3eW5oeHqHIm9d1fJpv22Yj1Dlp3+mCVuyMrP8fD1WUyJfhdjGP7oCXBrJQteB46fezCz9a1BZyn5WYX8i3O110Xo/zuZgK6IvbBT8Uc341mW9bEkN/0VklpyvRJ57WZqIS/uVaALtqidVBk5is7j5CqEL9x3ZgwiOe+vwczbu8pIHAXHu+Z1A8T4FubTTy9A+iO4lgEnqqH10sHcMJQ5syPr2rudqMeGud+VNQNv1XHjOF1G8QH+oLC+Oj7tIqfq/hB4G7cDxzyH2ktpwpULIrdwo5iwtiv7PdDGE/YDQJg9gly9o//goO17PgpC3Fheb4p6/XOonlB0k21IxviACrSAk3t/0eqXDTLlpGXqskyXt4Ad5tLEZwnljQZL3Q6A8abUtcJhnnNY46VpmKM5gHCpYIi9OaqyYY4wmUv/09seEOjI1aoNmG1OeDmhZOwyN800QPcBViKnmgVPGjw6AnCPr+nHWtoEnTzxobMAF+kKJ9AZMMG4fMWS+OczqZKiucyMS2K+cOKWjdyAwFAaX19brSiN8aN9KwpFxqWsF1NfqpncmAMlVmoWAfrB0SJ5GRjsfeD7kp+ChbbyZXK4xITU8VpQcIdPmCAGEymyDvidXTfBf4Qsog9A60nU9GkaQrUl3yv/+Xp/8s///qobfzvHB/Wnlz+4slH6B6N4XnX2Jrbr+otbxOAD/JEt744Hvpyi+OdcRDiwWJf8idatK+Km+cdFcHrs1xQ8AuG8mpP1OIFw+gcflNRz90lT44UXfkFGoLi5p5fli0tS8nke9uuele9wWgDUDZsCOBBMmxZGRkEz7qUzpuOsWW17BzlhsGZ7bCHnJn57Wk+EII/I7xO/Xp2Va9RkiJ2Li8BFM6oXpqHAZpTmr4CkAl02ErOtTkX9gvSS7/72y6nmI+BgGGB+HTzyWyujnSUffSTSWr2grK1r9VOfRNZwVX+8OZVYtSuyxrM/1t9S0HGkzgS6BbqHOCPUD30wCKzCKPM0/Xr1TgcvmEnv/uMUw45iX7s7+zV8Smqii5LZyctIY1+D89jQ2ox7195u8q3aX7bhYn+Zn+ljT69RvbBm3bfpDYUBtSlb8AM/YzOU0p8hH0hfmvE5kuq5K/wlq2HuTMagMtip4SwyjJE4qSZj4sBLVIUm25zriKhNsTAeKm2NK0iRw8YMIbVqLXZh0FiyQzrq90mz6/uj7/EqhfmF+u+WmIh+PuYs3jl46u8U2NIoocYdF0Cq1jsfqY3FEmBQN26GruW4FoEw3iqeNzp7i+K7RlIzzJ9Y7YiRP5ky+I3gtz41UR8B0Jn6jGXoXQv2ssPSz8SYSRfH6j228GXG1AAlhkNfJMfWRWZ+91ObRlW9wrG7jh4aU8Qyx9S1iMDFQdZC8kD/0dLTv8r5edwLDRXs/0onKvMKUBTroKnnf3HLdxRU/3AUl7InlhJSWr2X3qm3NCuixutfajreeDneu843K5oNiEYuxOOMXoGhZpdKN9IprNDt5PUXrEVI+9obby79CVw2pICqfMtlb3fVH6UFs30dgqyZFD6GpygM1cgT3vhNP2y502BeZjf6kw7hAjbvRTPpKYGpxpR8R4rbVnDDSdHrqJC3n9/z2MQZPy0loL2nsf9Vgx40FAOXWPIy+J2z1/PBsVmJCayIny0IZEBYlJpHPLTQT0Dycc/x8u5gnrfVFi7gcJNY9t4Zbp1uGJMBBw3AX+whtKgtFVdRIcjKkjxSj6WAJQkBROGYPpubIacJY1Q6oWO7lkfUscM7hU2lJKe0ydUt6L3FX4QwTkl2dYzRWuJQfbwMCX1zGc8AC2Gxz+whD1SpDCnQ8U7uRVPuWVxTJ851aTWV817NHjkBeNnNUCxg8xw3ANqdOmpyWtx7+kc3DYtLPa7Speae6Wx09CEfeTh1iBuPwGAOmTpXVEdHM/GojO+3B+JivRvrSdU7i7h1vi3fvMill1RWlycgxDc3WSh9fmxE5zj7PR2jAofb4iAQg4fCU14Tn8KEJe4oIzxjO5ekQB/bQPj9yfGd45jPd+BLkdjvUJ+1JEBFuTh/GeYzCb2BZkyUP3eCis77LA4yikXS6xxdpnbU2q6Dy/UIeJ35QiNxSi1mpu08nLv3nifLwQemy0U2iZHaBhs1dsNcG0ehRAPKV7tpua9cI0sALT2iPLxTUKMROvWbze4QBCAJln/6giQvVVGO27dUEjhW/LjIW4GG/YXm8UZBHfBC7Gr3OclsVYjX9p6VARVDmyuWoi4Gqpdk/7wgnhy20ZQL4kCAB/lHBbhbB+IIcsPMNBbMzGnRaOmUPvUCzCJUycs/5OgpIm8sWhacFVM9DUVIQ4zyMQaRH1WJx6H0OwPlk/GaE4YE+yZM0FA3AN4wVHjz6ZqpoAAAD3V+SElcjN7Hxd/0hqYbq7okVtTdjjwTerZVcSOPQ1oMSUiFNXFIgQF0Bn9bA/hK8+p40LPrfpaoh9sf2YGZvkK7TEZ8IYA81Gyrs4aaaJHIECKChp/dIC8SpAFXCKxTogEw9QQBL9RQLfPKf4RUa40vwWoK6/4Gd4ozoV3dRufgQN8fT0QAGoFzfPV7gWGye7z+oaIhrzgEX/mNABL5goWsVS4NKgeI0Lc3mcFFL3mP9HQ7F8yU/8VtCx+TYTqibZdLXPf4TQZGvKf8CQblaZiEkFapz6uQsRAzG6GfPRPVmA/pBcAblgdbnChsFlw1DNDHItRVZjXjMgklmZk68HxT7nsHVVYNXIya7eBL9UnZi2a46fIlrnes0exszibKpAx6c+XJzfvsdfSl5+indwBKkd37lki5vYUBbAu/mG7IqxI8QQYNN7XywHEdqjEdow5Pa6dtJJIcrjgQ/BpfleAyyIllWjb26WMn4PZWNOjSpJXdPnqBzLYGovauqK66LPZcAU/9ZZi3mdoYFaicHJGM7RlQOMOCa/AauHznW3bZG3YtL6iSQkaOlqLnZb/MBTDrg779mHDFMejqyytK/Ntm5poe1NRGqn1sDjn6qLf6Ec2innAqmQI5Y5R+UYXExT51P1E3KJzpiDQxLZP6EEZNyaoNc36V3uXBCYifZ972FdPil2+BYo+JneDP1K66D0lWzlL9HVDbqFgHEbnyXLKs5HA3v9sybiq7YFzZn3S2XRikbM7kryIGkxbt2DRIez8V1mh3vptkGQS3YuZqHGQkzH1Ql/u45qlXkEll4H4gDljzuj4W6kuF4xWUVLBUNGO0gSsrtFGkO4V5H4iiX8oX0SfmGFnjCii2Cxs38CWk8ePN/tlpZUEKVMxl656TRo+sDedrFfOC0kPasrakcnFjPyM5Qq7DpB2Wkgq3m5AYyCYbL+67Nzc6vb5jUiB+/Hy62+fr4tlwR3BuAtUD3czvFN8FNcmlMYrWsweJvqn5xFBYz2F/kmrzK9Z/leMrmhCOFjAOF53Vw8wwK1hKXzKvM9mVx9NIO9p4nPUbNT5hO0dtnmu9oZTVynVTyNtMglw2XQWaUsMv4LX/1ipW2HndYj5JEvALx7n3sBvq0JR7Z+3y3l24kG52cBw2e/ttHjH4AUar8O7E8i7UNIzDzxyagxwMTkno98JhG4AAAAA";var tn={blue:"#2b26fb",navy:"#1b2170",yellow:"#ffd51c",red:"#ea1e24",white:"#f6f8fc",graphite:"#4a5263",ledBlue:"#3d6bff",ledYellow:"#ffd23a"},Ul=class{place(e,t,n=[0,0,0],s=[0,0,0],r){return t.position.set(n[0],n[1],n[2]),t.rotation.set(s[0],s[1],s[2]),r&&t.scale.set(r[0],r[1],r[2]),e.add(t),t}mesh(e,t,n,s,r,a){return this.place(e,new rt(t,n),s,r,a)}sphere(e,t,n,s,r){return this.mesh(e,new Vi(t,40,28),n,s,void 0,r)}cylinder(e,t,n,s,r,a,o=t){return this.mesh(e,new Hn(t,o,n,48),s,r,a)}capsule(e,t,n,s,r,a){return this.mesh(e,new Ls(t,n,8,20),s,r,a)}torus(e,t,n,s,r,a,o=Math.PI*2){return this.mesh(e,new Os(t,n,14,64,o),s,r,a)}box(e,t,n,s,r,a){return this.mesh(e,new ta(t[0],t[1],t[2],4,n),s,r,a)}lathe(e,t,n,s,r){let a=t.map(([o,c])=>new ne(o,c)).reverse();return this.mesh(e,new Fs(a,56),n,s,void 0,r)}};function oa(i,e,t,n,s=80,r=56){let a=new Vi(1,s,r),o=a.attributes.position,c=l=>Math.sign(l)*Math.abs(l)**(2/n);for(let l=0;l<o.count;l++)o.setXYZ(l,i*c(o.getX(l)),e*c(o.getY(l)),t*c(o.getZ(l)));return a.computeVertexNormals(),a}var aa=(i,e,t,n)=>(s,r)=>t*Math.max(0,1-Math.abs(s/i)**n-Math.abs(r/e)**n)**(1/n);function Nl(i,e){let t=e.cx??0,n=96,s=18,r=2/(e.exponent??4),a=[t,e.cy,i(t,e.cy)+e.lift],o=[.5,.5],c=[];for(let u=1;u<=s;u++)for(let h=0;h<n;h++){let d=h/n*Math.PI*2,p=u/s,g=p*Math.sign(Math.cos(d))*Math.abs(Math.cos(d))**r,y=p*Math.sign(Math.sin(d))*Math.abs(Math.sin(d))**r,m=t+g*e.halfWidth,f=e.cy+y*e.halfHeight;a.push(m,f,i(m,f)+e.lift),o.push(.5+g*.5,.5+y*.5);let S=1+(u-1)*n+h,E=1+(u-1)*n+(h+1)%n;u===1?c.push(0,S,E):c.push(S-n,S,E,S-n,E,E-n)}let l=new Et;return l.setAttribute("position",new Je(a,3)),l.setAttribute("uv",new Je(o,2)),l.setIndex(c),l.computeVertexNormals(),l}function Bh(){return{shell:new Qt({color:tn.white,roughness:.24,clearcoat:1,clearcoatRoughness:.08}),blue:new Qt({color:tn.blue,roughness:.3,clearcoat:.8,clearcoatRoughness:.15}),navy:new Qt({color:tn.navy,roughness:.32,metalness:.15,clearcoat:.6}),yellow:new Qt({color:tn.yellow,roughness:.3,clearcoat:.8}),graphite:new Gt({color:tn.graphite,roughness:.36,metalness:.35}),rubber:new Gt({color:"#2a2f3a",roughness:.75,metalness:.05}),glass:new Qt({color:"#cfe3ff",roughness:.05,transmission:0,clearcoat:1,metalness:.1}),ledBlue:new Jt({color:tn.ledBlue,toneMapped:!1}),ledYellow:new Jt({color:tn.ledYellow,toneMapped:!1}),ledCyan:new Jt({color:"#46dcff",toneMapped:!1})}}function la(i,e=1){let t=new Jt({color:"#1d4fd8",toneMapped:!1});typeof document<"u"&&new ks().load(Oh,s=>{s.colorSpace=Rt,s.repeat.set(e,e),s.offset.set((1-e)/2,(1-e)/2),t.map=s,t.color.set("#ffffff"),t.needsUpdate=!0});let n=new rt(new Ds(i,56),t);return n.name="logo",n}function zh(i,e,t,n=512,s=160){if(typeof document>"u")return null;let r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,n,s),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=`900 ${Math.round(s*.62)}px "Be Vietnam Pro", "Segoe UI", system-ui, sans-serif`,a.fillText(i,n/2,s*.54,n*.9);let o=new Cs(r);return o.colorSpace=Rt,o.anisotropy=4,o}var ra=class{constructor(e){ye(this,"group",new et);ye(this,"controller");ye(this,"kit",new Ul);this.controller=new sa(e)}get expressionName(){return this.controller.expressionName}get isWaving(){return this.controller.isWaving}get blinkProgress(){return this.controller.blinkProgress}setExpression(e){this.controller.setExpression(e)}play(e,t){this.controller.play(e,t)}wave(){return this.controller.wave()}hop(){this.controller.hop()}tilt(){this.controller.tilt()}blink(){this.controller.blink()}lookAt(e,t,n){this.controller.lookAt(e,t,n)}setBlink(e){this.controller.setBlink(e)}resetPose(){this.controller.reset(),this.pose(this.controller.update(0,0,{x:0,y:0},!0),0,!1)}update(e,t,n,s,r=!1){this.pose(this.controller.update(e,t,n,s),t,r)}};var Fl={headScale:1,legExtra:0,armExtra:0,torsoFullness:1,limbScale:1,footScale:1},kg={reference:Fl,brand:Fl,"option-c":{...Fl,headScale:.86,legExtra:.24,armExtra:.08},"option-c-refined":{headScale:.86,legExtra:.2,armExtra:.08,torsoFullness:1.1,limbScale:1.18,footScale:1.1},"option-c-headset":{headScale:.86,legExtra:.2,armExtra:.08,torsoFullness:1.1,limbScale:1.18,footScale:1.1}},Ot={y:3.44,a:1.12,b:1,c:.98,p:2.5},kh={cy:-.15,halfWidth:.99,halfHeight:.62},ss=.2,Hh=aa(Ot.a,Ot.b,Ot.c,Ot.p),ca=[[0,1.08],[.2,1.075],[.36,1.04],[.47,.96],[.53,.84],[.55,.7],[.54,.54],[.5,.36],[.44,.18],[.38,.06],[.3,0],[.15,-.03],[0,-.04]],Hg=.78,Vg=i=>{for(let e=0;e<ca.length-1;e++){let[t,n]=ca[e],[s,r]=ca[e+1];if(i<=n&&i>=r)return ke.lerp(t,s,(n-i)/(n-r))}return 0},Gg={reference:{},brand:{led:"#a9d4ff",glowColor:"#2f5cff",iris:["#5aa8ff","#2448f5","#0b1478"]},"option-c":{ledStyle:!0,led:"#7fd2ff",glowColor:"#1f6bff",iris:["#4aa0ff","#1a4fe0","#08166a"],eyeR:.265,cheekX:.7,cheekY:-.3,mouthScale:1.05},"option-c-headset":{ledStyle:!0,led:"#7fd2ff",glowColor:"#1f6bff",iris:["#4aa0ff","#1a4fe0","#08166a"],eyeR:.265,cheekX:.7,cheekY:-.3,mouthScale:1.05},"option-c-refined":{ledStyle:!0,led:"#7fd2ff",glowColor:"#1f6bff",iris:["#4aa0ff","#1a4fe0","#08166a"],eyeR:.265,cheekX:.7,cheekY:-.3,mouthScale:1.05}},ha=class extends ra{constructor(t="reference",n={}){super({...kh,...Gg[t]});this.style=t;ye(this,"head",new et);ye(this,"torso",new et);ye(this,"arms",[new et,new et]);ye(this,"elbows",[new et,new et]);ye(this,"wrists",[new et,new et]);ye(this,"legs",[new et,new et]);ye(this,"heroPose");ye(this,"hero",0);ye(this,"fingers",[[],[]]);ye(this,"thumbs",[]);ye(this,"turnSignals",[]);ye(this,"micLight");ye(this,"wasWaving",!1);ye(this,"proportions");let s=this.proportions={...kg[t],...n},r=s.legExtra,a=s.legExtra/2,o=U=>-.45-a+(U+.45)*(.43+a)/.43,c=this.kit,l=Bh(),u=t!=="reference",h=t.startsWith("option-c"),d=t==="option-c-headset",p=t==="option-c-refined"||d,g=s.torsoFullness,y=s.limbScale,m=1+(y-1)*.45,f=Hg*(1+(g-1)*.6);this.heroPose=h;let S=l.shell,E=new Qt({color:"#e4ecf7",roughness:.2,metalness:.1,clearcoat:1,clearcoatRoughness:.06}),b=u?l.navy:l.graphite,A=u?S:l.graphite,T=h?l.navy:u?l.blue:new Gt({color:"#465062",roughness:.5,metalness:.2}),P=u?l.navy:new Gt({color:"#0c2350",roughness:.3,metalness:.3}),R=u?l.ledYellow:l.ledCyan,_=u?l.blue:l.ledBlue;this.group.add(this.head,this.torso,...this.arms,...this.legs),this.head.position.y=Ot.y-Ot.b+r+Ot.b*s.headScale,this.head.scale.setScalar(s.headScale),c.mesh(this.head,oa(Ot.a,Ot.b,Ot.c,Ot.p),S),c.mesh(this.head,Nl(Hh,{...kh,lift:.012}),this.controller.face.material).name="face";let M=.8,C=Hh(0,M);if(h){if(!d){let U=c.place(this.head,new et,[0,.86,.4],[-.62,0,0]);c.box(U,[.64,.14,.36],.065,l.navy),c.box(U,[.46,.05,.22],.025,l.ledCyan,[0,.065,.03])}if(p&&!d)for(let U of[-1,1]){let k=c.place(this.head,new et,[U*.84,.56,-.2],[-.2,0,U*-.9]);c.sphere(k,1,S,[0,.02,0],[.11,.2,.38]),c.sphere(k,1,l.yellow,[.035,.08,.02],[.085,.13,.3])}else if(!d)for(let U of[-1,1]){let k=c.place(this.head,new et,[U*.72,.74,-.12],[-.35,U*.35,U*-.7]);c.mesh(k,new Hn(.06,.2,.58,32),S,[0,.26,0],void 0,[1,1,.32]),c.mesh(k,new Hn(.05,.17,.54,32),l.yellow,[0,.27,.035],void 0,[1,1,.22])}}else if(u){let U=c.place(this.head,new et,[0,.97,-.02]);c.cylinder(U,.05,.12,l.navy,[-.2,-.04,0]),c.cylinder(U,.05,.12,l.navy,[.2,-.04,0]),c.box(U,[.78,.27,.24],.06,l.blue,[0,.14,0]);let k=zh("T\u1EACP L\xC1I",tn.blue,"#ffffff"),z=new Jt({map:k,color:k?"#ffffff":tn.blue,toneMapped:!1});c.mesh(U,new mn(.66,.19),z,[0,.14,.121]),c.mesh(U,new mn(.66,.19),z,[0,.14,-.121],[0,Math.PI,0]),c.box(U,[.8,.035,.26],.015,l.yellow,[0,.29,0])}else c.capsule(this.head,.07,.36,P,[0,M-.01,C-.03],[0,0,Math.PI/2]),c.capsule(this.head,.05,.32,R,[0,M,C-.012],[0,0,Math.PI/2]);if(d){let z=($,ce)=>{let pe=Math.cos($),Be=Math.sin($),Ye=2/Ot.p;return new L((Ot.a+ce)*Math.sign(pe)*Math.abs(pe)**Ye,(Ot.b+ce)*Math.sign(Be)*Math.abs(Be)**Ye,.08)},Z=($,ce,pe)=>new ri(Array.from({length:33},(Be,Ye)=>z($+(ce-$)*Ye/32,pe)));c.mesh(this.head,new oi(Z(-.15,Math.PI+.15,.1),96,.072,16),l.navy),c.mesh(this.head,new oi(Z(.55,Math.PI-.55,.1+.065),64,.024,10),l.blue);for(let $ of[-1,1]){let ce=c.place(this.head,new et,[$*1,-.17,-.05],[0,$*Math.PI/2,0]);c.torus(ce,.28,.085,l.rubber,[0,0,.19]);let pe={a:.36,b:.41,c:.21,p:2.2,z:.24};c.mesh(ce,oa(pe.a,pe.b,pe.c,pe.p),l.navy,[0,0,pe.z]),c.torus(ce,.345,.032,l.blue,[0,0,pe.z+.02]);let Be=aa(pe.a,pe.b,pe.c,pe.p),Ye=l.ledYellow.clone();this.turnSignals.push(Ye),c.torus(ce,.19,.022,Ye,[0,0,pe.z+Be(.19,0)-.006]),c.sphere(ce,.1,l.blue,[0,0,pe.z+pe.c-.02],[1,1.1,.45])}let H=new ri([[1.22,-.32,.16],[1.14,-.6,.46],[.86,-.76,.74],[.52,-.74,.86]].map($=>new L(...$)));c.mesh(this.head,new oi(H,48,.028,10),l.navy);let ee=c.place(this.head,new et,H.getPoint(1).toArray());ee.quaternion.setFromUnitVectors(new L(0,1,0),H.getTangent(1)),c.capsule(ee,.055,.1,l.rubber,[0,.05,0]),this.micLight=l.ledBlue.clone(),c.torus(ee,.058,.013,this.micLight,[0,.01,0],[Math.PI/2,0,0])}else if(p){let U={width:.34,height:.41,depth:.16,p:2.4},k=aa(U.width,U.height,U.depth,U.p),z=new Qt({color:"#eef3fb",roughness:.18,clearcoat:1,clearcoatRoughness:.05});for(let Z of[-1,1]){let H=c.place(this.head,new et,[Z*1,-.17,-.05],[0,Z*Math.PI/2,0]);c.mesh(H,oa(U.width,U.height,U.depth,U.p),S);let ee=(ce,pe,Be,Ye)=>c.mesh(H,Nl(k,{cy:0,halfWidth:ce,halfHeight:pe,lift:Be,exponent:2.3}),Ye);ee(.27,.33,.006,l.navy),ee(.245,.305,.01,l.ledBlue),ee(.222,.282,.014,z);let $=l.ledYellow.clone();this.turnSignals.push($),ee(.035,.11,.019,$)}}else for(let U of[-1,1]){let k=c.place(this.head,new et,[U*1,-.18,.04],[0,U*(Math.PI/2-.5),0]);c.cylinder(k,.44,.26,S,[0,0,0],[Math.PI/2,0,0]),c.cylinder(k,.36,.04,P,[0,0,.125],[Math.PI/2,0,0]),c.torus(k,h?.35:.315,.045,h?l.navy:_,[0,0,.14]);let z=(u?l.ledYellow:l.ledCyan).clone();this.turnSignals.push(z),c.torus(k,h?.29:.315,h?.03:.017,z,[0,0,.168]),c.sphere(k,h?.27:.255,u?l.navy:E,[0,0,.13],[1,1,.32]),h&&c.place(k,la(.19,.62),[0,0,.218])}c.cylinder(this.group,.21,.2,b,[0,2.43+r,0]),c.torus(this.group,.205,.024,l.ledBlue,[0,2.46+r,0],[Math.PI/2,0,0]),this.torso.position.y=1.3+r;let F=U=>Vg(U)*g;c.lathe(this.torso,ca.map(([U,k])=>[U*g,k]),S,[0,0,0],[1,1,f]);let V=(U,k)=>{let z=F(k),Z=f*Math.sqrt(Math.max(0,z*z-U*U)),H=(F(k+.02)-F(k-.02))/.04;return{z:Z,yaw:Math.atan2(U/(z*z),Z/(f*z)**2),pitch:Math.atan(H*f)}};{let{z:k}=V(0,.68);c.cylinder(this.torso,.245,.1,h?l.navy:u?l.blue:l.ledBlue,[0,.68,k-.03],[Math.PI/2,0,0]),c.cylinder(this.torso,.225,.02,P,[0,.68,k+.021],[Math.PI/2,0,0]),c.torus(this.torso,.222,h?.02:.016,h?l.ledCyan:R,[0,.68,k+.022]),c.place(this.torso,h?la(.2,.62):la(.2),[0,.68,k+.033]).name="chest-logo"}{let{z:k,pitch:z}=V(0,.93);c.capsule(this.torso,.026,.13,h?l.ledBlue:R,[0,.93,k-.006],[z,0,Math.PI/2])}for(let U of[-1,1]){let k=U*.37*g,z=.8,{z:Z,yaw:H}=V(k,z);c.capsule(this.torso,.022,.1,R,[k,z,Z-.008],[0,H,U*.55])}for(let U of[-1,1])c.sphere(this.torso,.14*m,b,[U*.53*g,.84,0]);h?(c.cylinder(this.group,.41*g,.17,l.navy,[0,1.3+r,0],void 0,.37*g).scale.z=.8*(1+(g-1)*.6),c.capsule(this.group,.028,.22,l.ledBlue,[0,1.31+r,.34*g*(1+(g-1)*.6)],[0,0,Math.PI/2])):c.cylinder(this.group,.25,.14,b,[0,1.27+r,0]),c.sphere(this.group,.37,S,[0,1.19+r,0],[g,.6,.82*g]);for(let U=0;U<2;U++){let k=U===0?-1:1,z=this.arms[U];z.position.set(k*(.71+.55*(g-1)),2.12+r,0),z.rotation.z=k*ss,c.sphere(z,.21*m,S,[0,0,0],[1,1.08,1]),h&&c.torus(z,.215,.03,l.yellow,[0,.01,0],[0,Math.PI/2,-k*.5],Math.PI*.75),c.capsule(z,.024,.09,R,[k*.2,-.05,0]),c.capsule(z,.125*m,.05+s.armExtra,S,[0,-.2-s.armExtra/2,0]);let Z=this.elbows[U];Z.position.y=-.34-s.armExtra,z.add(Z),c.sphere(Z,.115,b),c.lathe(Z,[[0,-.02],[.11,-.03],[.13,-.08],[.155,-.25],[.165,-.37],[.15,-.44],[.1,-.475],[0,-.485]].map(([$,ce])=>[$*m,ce]),S),u&&c.torus(Z,.158,.03,h?l.navy:l.blue,[0,-.42,0],[Math.PI/2,0,0]),c.capsule(Z,.024,.1,R,[k*.158,-.27,0],[0,0,-k*.06]);let H=this.wrists[U];H.position.y=-.5,Z.add(H),c.sphere(H,.08,b),c.box(H,[.24,.2,.13],.06,A,[0,-.12,0]),c.box(H,[.17,.14,.02],.009,u?l.navy:T,[0,-.12,-.062]).name="palm";for(let $=0;$<4;$++){let ce=c.place(H,new et,[($-1.5)*.056,-.21,-.015],[.32,0,($-1.5)*-.07]);c.capsule(ce,.032,.085,A,[0,-.06,0]),this.fingers[U].push(ce)}let ee=c.place(H,new et,[-k*.11,-.08,.02],[0,0,-k*.7]);c.capsule(ee,.038,.09,A,[0,-.065,0]),this.thumbs.push(ee)}for(let U=0;U<2;U++){let k=U===0?-1:1,z=this.legs[U];z.position.set(k*.26*(1+(y-1)*.55),1.14+r,0),z.rotation.z=k*.16,c.sphere(z,.13*y,b),c.capsule(z,.165*y,.14+a,S,[0,-.25-a/2,0]),c.sphere(z,.125*y,b,[0,-.43-a,0]),c.lathe(z,[[0,-.45],[.13,-.46],[.15,-.55],[.19,-.72],[.215,-.82],[.17,-.87],[0,-.88]].map(([H,ee])=>[H*y,o(ee)]),S),h&&(c.torus(z,.172*y,.028,l.yellow,[0,o(-.6),0],[Math.PI/2,0,0]),c.torus(z,.2*y,.02,l.ledBlue,[0,o(-.76),0],[Math.PI/2,0,0]));let Z=c.place(z,new et,[0,-.92-s.legExtra+.25*(s.footScale-1),0],[0,0,-k*.16],[s.footScale,s.footScale,s.footScale]);c.sphere(Z,1,S,[0,-.02,.1],[.32,.24,.46]),c.sphere(Z,1,T,[0,-.17,.1],[.33,.08,.47]),c.capsule(Z,.028,.22,h?l.yellow:R,[0,.1,.49],[0,0,Math.PI/2]),h&&c.capsule(Z,.02,.3,l.ledBlue,[0,-.13,.5],[0,0,Math.PI/2])}}setGreetingPose(t,n=0,s=t){let r=ke.smootherstep(n,.5,.68)*(1-ke.smootherstep(n,1.5,1.68)),a=1-ke.clamp((n-.55)/1.1,0,1)*.35,o=(n-.55)*Math.PI*2*2.2,c=Math.sin(o)*r*a,l=Math.sin(o-.7)*r*a;this.arms[1].rotation.set(-t*.24,0,ss+t*(.98+l*.06)),this.elbows[1].rotation.set(-s*.08,s*Math.PI,s*(1.57+c*.28),"ZXY"),this.wrists[1].rotation.set(0,0,0)}pose(t,n,s){this.torso.scale.set(1+t.breathe*.006,1+t.breathe*.012,1+t.breathe*.006),this.group.position.y=t.bodyY,this.group.rotation.z=t.lean,this.head.rotation.set(t.headPitch,t.headYaw,t.headTilt);let r=this.controller.gaze.x;this.micLight?.color.set(tn.ledBlue).multiplyScalar(t.expression==="talking"&&!t.reduced?.6+t.talk*1.1:.7),this.turnSignals.forEach((h,d)=>{let g=(d===0?-r:r)>.55&&!t.reduced?Math.sin(n*Math.PI*3)>0?1.35:.25:1;h.color.set(this.style!=="reference"?tn.ledYellow:"#46dcff").multiplyScalar(g)});let a=this.heroPose&&!s?1:0;this.hero+=(a-this.hero)*.12;let o=this.hero,c=t.reduced?0:t.breathe*.025;t.waveTime>=0?(this.setGreetingPose(t.waveAmount,t.waveTime,t.waveElbow),this.wasWaving=!0):(this.wasWaving&&(this.setGreetingPose(0),this.wasWaving=!1),this.arms[1].rotation.set(-.42*o,0,ss+c-.12*o),this.elbows[1].rotation.set(-2.05*o,0,-.25*o),this.wrists[1].rotation.set(.35*o,0,0)),this.arms[0].rotation.set(.12*o,0,-ss-c-.58*o),this.elbows[0].rotation.set(-.2*o,0,1.4*o),this.fingers.forEach((h,d)=>{let p=d===1&&this.isWaving?0:o;h.forEach(g=>{g.rotation.x=.32+1.35*p})});let l=this.isWaving?0:o;this.thumbs[1].position.set(-.11+.05*l,-.08-.14*l,.02-.07*l),this.thumbs[1].rotation.set(0,0,.7*(1-l));let u=s&&!t.reduced?Math.sin(n*8)*.42:0;this.legs.forEach((h,d)=>h.rotation.x=ke.lerp(h.rotation.x,d===0?u:-u,.2)),s&&!t.reduced&&(this.arms[0].rotation.x=-u*.75,this.isWaving||(this.arms[1].rotation.x=u*.75),this.group.position.y=Math.abs(Math.sin(n*8))*.055)}resetPose(){super.resetPose(),this.wasWaving=!1,this.hero=0,this.group.position.y=0,this.group.rotation.set(0,0,0),this.torso.scale.set(1,1,1),this.head.rotation.set(0,0,0),this.legs.forEach(t=>t.rotation.x=0),this.arms.forEach((t,n)=>t.rotation.set(0,0,n===0?-ss:ss)),this.elbows.forEach(t=>t.rotation.set(0,0,0)),this.wrists.forEach(t=>t.rotation.set(0,0,0))}};var ua='<svg class="hpo-robot-fallback" viewBox="0 0 140 200" aria-hidden="true"><g fill="none" stroke-linecap="round"><path d="M50 152v30m40-30v30M34 110l-12 34m96-34 12 34" stroke="#d5dbe5" stroke-width="19"/><path d="M50 152v30m40-30v30M34 110l-12 34m96-34 12 34" stroke="#f3f4f6" stroke-width="15"/></g><g fill="#1b2a5c"><rect x="40" y="172" width="20" height="7" rx="3.5"/><rect x="80" y="172" width="20" height="7" rx="3.5"/></g><g fill="#f3f4f6" stroke="#d5dbe5" stroke-width="2"><rect x="37" y="98" width="66" height="52" rx="22"/><rect x="18" y="20" width="104" height="80" rx="36"/></g><rect x="26" y="29" width="88" height="62" rx="25" fill="#d9a440"/><rect x="28" y="31" width="84" height="58" rx="23" fill="#03050b"/><g fill="#eef7ff"><circle cx="55" cy="58" r="8"/><circle cx="85" cy="58" r="8"/></g><g fill="#1b2a5c"><rect x="10" y="44" width="10" height="28" rx="5"/><rect x="120" y="44" width="10" height="28" rx="5"/><circle cx="34" cy="106" r="9"/><circle cx="106" cy="106" r="9"/><circle cx="70" cy="120" r="13"/></g><circle cx="70" cy="120" r="8" fill="#d6b25a"/><rect x="40" y="138" width="60" height="7" rx="3.5" fill="#d6b25a"/></svg>',rs=class{constructor(e,t){this.host=e;ye(this,"renderer");ye(this,"scene",new si);ye(this,"camera",new St(35,1,.1,60));ye(this,"robot");ye(this,"lost",!1);ye(this,"onRestore",()=>{});ye(this,"observer");ye(this,"events",new AbortController);ye(this,"shadow");ye(this,"environment");e.innerHTML=`${ua}<canvas aria-hidden="true"></canvas>`;let n=e.querySelector("canvas");this.renderer=new Qo({canvas:n,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.toneMapping=lo,this.renderer.toneMappingExposure=.95,this.camera.position.set(0,2.55,8.9),this.camera.lookAt(0,2.3,0),this.robot=new ha("option-c-headset"),this.robot.heroPose=!1;let s=new Lt({transparent:!0,depthWrite:!1,uniforms:{strength:{value:.4}},vertexShader:"varying vec2 shadowUv; void main() { shadowUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 shadowUv; uniform float strength; void main() { float r=length((shadowUv-.5)*2.0); float alpha=pow(1.0-smoothstep(0.0,1.0,r),1.3)*strength; gl_FragColor=vec4(.06,.11,.25,alpha); }"});this.shadow=new rt(new mn(2.55,1.85),s),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.set(.1,-.015,.1),this.scene.add(this.shadow);let r=new ts(this.renderer);this.environment=r.fromScene(new ea,.04).texture,r.dispose(),this.scene.environment=this.environment,this.scene.environmentIntensity=.9,this.scene.add(this.robot.group,new Hs("#eef6ff","#8a9bb5",1.4));let a=new Xi("#fff6ea",2.6);a.position.set(-3,7,5);let o=new Xi("#8fbaff",2.2);o.position.set(4,4,-3),this.scene.add(a,o),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),n.addEventListener("webglcontextlost",c=>{c.preventDefault(),this.lost=!0,e.classList.remove("is-ready")},{signal:this.events.signal}),n.addEventListener("webglcontextrestored",()=>{this.lost=!1,this.resize(),e.classList.add("is-ready"),this.onRestore()},{signal:this.events.signal}),this.resize(),e.classList.add("is-ready")}resize(){let e=this.host.clientWidth,t=this.host.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.render())}render(){let e=Math.max(0,this.robot.group.position.y);this.shadow.scale.setScalar(1+e*2),this.shadow.material.uniforms.strength.value=.4-e*.6,this.lost||this.renderer.render(this.scene,this.camera)}dispose(){this.events.abort(),this.observer.disconnect();let e=new Set,t=new Set;this.scene.traverse(n=>{n instanceof rt&&(e.add(n.geometry),(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>t.add(s)))}),e.forEach(n=>n.dispose()),t.forEach(n=>{Object.values(n).forEach(s=>{s instanceof bt&&s.dispose()}),n.dispose()}),this.environment.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.host.classList.remove("is-ready"),this.host.innerHTML=ua}};var da=class{constructor(){ye(this,"target",new ne);ye(this,"heading",0);ye(this,"walking",!1);ye(this,"rest",4);ye(this,"travelTime",0);ye(this,"speedMultiplier",1);ye(this,"greetingPending",!1)}snapToEdge(e,t,n){e.set(ke.clamp(e.x,0,t),ke.clamp(e.y,0,n));let s=[e.x,t-e.x,e.y,n-e.y];switch(s.indexOf(Math.min(...s))){case 0:e.x=0;break;case 1:e.x=t;break;case 2:e.y=0;break;case 3:e.y=n;break}}get speed(){return this.speedMultiplier}setSpeed(e){Number.isFinite(e)&&(this.speedMultiplier=ke.clamp(e,.5,2))}pause(e=5){(this.travelTime>0||this.walking)&&(this.greetingPending=!0),this.rest=e,this.travelTime=0,this.walking=!1}takeGreeting(){return!this.greetingPending||this.walking||Math.abs(Math.atan2(Math.sin(this.heading),Math.cos(this.heading)))>.08?!1:(this.greetingPending=!1,!0)}turnToward(e,t){let n=Math.atan2(Math.sin(e-this.heading),Math.cos(e-this.heading));return this.heading+=ke.clamp(n,-t*3.5,t*3.5),Math.abs(n)<.01}update(e,t,n,s,r,a=!0){if(r&&this.walking&&this.pause(),this.walking=!1,e=Math.min(e,.1),r){a&&this.turnToward(0,e);return}if(this.rest>0){this.turnToward(0,e)&&(this.rest-=e);return}this.snapToEdge(t,n,s),n===0?this.target.set(0,t.y<s?s:0):s===0?this.target.set(t.x<n?n:0,0):t.y===0&&t.x<n?this.target.set(n,0):t.x===n&&t.y<s?this.target.set(n,s):t.y===s&&t.x>0?this.target.set(0,s):this.target.set(0,0);let o=this.target.x-t.x,c=this.target.y-t.y,l=Math.hypot(o,c);if(l===0||this.travelTime>=3){this.pause(5);return}let u=Math.atan2(o,c),h=Math.atan2(Math.sin(u-this.heading),Math.cos(u-this.heading));if(this.heading+=ke.clamp(h,-e*3.5,e*3.5),Math.abs(h)>.35)return;let d=Math.min(l,e*60*this.speedMultiplier);d===l?t.copy(this.target):(t.x+=o/l*d,t.y+=c/l*d),this.travelTime+=e,this.walking=!0}};var Vh={type:"change"},Bl={type:"start"},Wh={type:"end"},fa=new zi,Gh=new Zt,Wg=Math.cos(70*ke.DEG2RAD),vt=new L,Bt=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ol=1e-6,pa=class extends Ws{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:Xn.ROTATE,TWO:Xn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Kt,this._lastTargetPosition=new L,this._quat=new Kt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qi,this._sphericalDelta=new qi,this._scale=1,this._panOffset=new L,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new L,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qg.bind(this),this._onPointerDown=Xg.bind(this),this._onPointerUp=Yg.bind(this),this._onContextMenu=e0.bind(this),this._onMouseWheel=Jg.bind(this),this._onKeyDown=jg.bind(this),this._onTouchStart=Qg.bind(this),this._onTouchMove=$g.bind(this),this._onMouseDown=Zg.bind(this),this._onMouseMove=Kg.bind(this),this._interceptControlDown=t0.bind(this),this._interceptControlUp=n0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vh),this.update(),this.state=ot.NONE}update(e=null){let t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bt:n>Math.PI&&(n-=Bt),s<-Math.PI?s+=Bt:s>Math.PI&&(s-=Bt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=vt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(fa.origin.copy(this.object.position),fa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fa.direction))<Wg?this.object.lookAt(this.target):(Gh.setFromNormalAndCoplanarPoint(this.object.up,this.target),fa.intersectPlane(Gh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ol||this._lastTargetPosition.distanceToSquared(this.target)>Ol?(this.dispatchEvent(Vh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;vt.copy(s).sub(this.target);let r=vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Xg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function qg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Yg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wh),this.state=ot.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Zg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ot.DOLLY;break;case Wn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}break;case Wn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Bl)}function Kg(i){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Jg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(i.preventDefault(),this.dispatchEvent(Bl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wh))}function jg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Qg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Xn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ot.TOUCH_ROTATE;break;case Xn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Xn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ot.TOUCH_DOLLY_PAN;break;case Xn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Bl)}function $g(i){switch(this._trackPointer(i),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ot.NONE}}function e0(i){this.enabled!==!1&&i.preventDefault()}function t0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xh(i,e,t,n,s,r,a,o,c){let l=document.createElement("dialog");l.id="hpo-robot-viewer",l.setAttribute("aria-labelledby","hpo-robot-title"),l.innerHTML=`
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
    </div>`,document.body.append(l);let u=l.querySelector(".hpo-model-stage"),h,d,p="",g=new Audio(e);g.id="hpo-robot-welcome-voice",g.preload="auto",l.append(g);let y=new ne,m=l.querySelector("#hpo-robot-speed"),f=l.querySelector("#hpo-robot-speed-value"),S=l.querySelector("#hpo-robot-visible"),E=()=>{f.value=`${Number(m.value).toFixed(1)}\xD7`,m.setAttribute("aria-valuetext",`${Number(m.value).toFixed(1)} l\u1EA7n t\u1ED1c \u0111\u1ED9 b\xECnh th\u01B0\u1EDDng`)};m.value=String(s),E(),m.addEventListener("input",()=>{E(),r(Number(m.value))}),l.querySelector(".hpo-close").addEventListener("click",()=>l.close());let b=!1,A=T=>{let P=l.getBoundingClientRect();return T.clientX<P.left||T.clientX>P.right||T.clientY<P.top||T.clientY>P.bottom};return l.addEventListener("pointerdown",T=>{b=T.target===l&&A(T)}),l.addEventListener("click",T=>{b&&T.target===l&&A(T)&&l.close()}),l.addEventListener("close",()=>{g.pause(),g.currentTime=0,d?.dispose(),d=void 0,h?.dispose(),h=void 0,document.documentElement.style.overflow=p,i.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false"),(i.hidden?a:i).focus({preventScroll:!0}),t()}),l.querySelector("form").addEventListener("submit",T=>T.preventDefault()),l.querySelector(".hpo-wander-option input").addEventListener("change",T=>{n(!T.target.checked)}),S.addEventListener("change",()=>c(S.checked)),l.querySelector(".hpo-model-tools").addEventListener("click",T=>{let P=T.target.closest("button")?.dataset.action;if(!(!h||!d||!P)){if(P==="reset")d.reset();else if(P==="wave")matchMedia("(prefers-reduced-motion: reduce)").matches?h.robot.setGreetingPose(h.robot.arms[1].rotation.z>1?0:1):h.robot.wave();else{let R=h.camera.position.clone().sub(d.target);P==="left"||P==="right"?R.applyAxisAngle(new L(0,1,0),P==="left"?-.3:.3):R.setLength(ke.clamp(R.length()*(P==="in"?.85:1.15),d.minDistance,d.maxDistance)),h.camera.position.copy(d.target).add(R),d.update()}h.render()}}),{get isOpen(){return l.open},open(){if(!l.open){p=document.documentElement.style.overflow,S.checked=o(),l.showModal(),g.currentTime=0,g.play().catch(()=>{}),document.documentElement.style.overflow="hidden",i.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true");try{h=new rs(u),d=new pa(h.camera,h.renderer.domElement),d.target.set(0,1.95,0),d.enablePan=!1,d.minDistance=5,d.maxDistance=17,d.minPolarAngle=.15,d.maxPolarAngle=Math.PI-.15,d.update(),d.saveState(),d.addEventListener("change",()=>h?.render()),h.onRestore=t,l.querySelectorAll("[data-action]").forEach(T=>{T.disabled=!1}),l.querySelector(".hpo-model-hint").textContent="K\xE9o \u0111\u1EC3 xoay \xB7 Cu\u1ED9n ho\u1EB7c ch\u1EE5m hai ng\xF3n \u0111\u1EC3 thu ph\xF3ng"}catch(T){console.warn("Kh\xF4ng th\u1EC3 m\u1EDF m\xF4 h\xECnh 3D.",T),l.querySelector(".hpo-model-hint").textContent="3D kh\xF4ng kh\u1EA3 d\u1EE5ng tr\xEAn tr\xECnh duy\u1EC7t n\xE0y. \u0110ang hi\u1EC3n th\u1ECB h\xECnh thay th\u1EBF.",l.querySelectorAll("[data-action]").forEach(P=>{P.disabled=!0})}t()}},tick(T,P,R){!l.open||!h||h.lost||(h.robot.update(T,P,y,R),h.render())},resetMotion(){h?.robot.resetPose()}}}var qh="data:image/webp;base64,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";var Yh="data:image/webp;base64,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";var Zh="Xin ch\xE0o! T\xF4i l\xE0 tr\u1EE3 l\xFD AI c\u1EE7a Hi\u1EC7p Ph\xE1t. R\u1EA5t vui \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 b\u1EA1n.",i0=3500,Kh=2e3,s0=document.currentScript instanceof HTMLScriptElement?document.currentScript.src:document.baseURI,r0=new URL("../assets/voice-tram-guillaume.mp3",s0).href;function Jh(){if(document.getElementById("hpo-robot"))return;let i=document.querySelector(".hpo-digital-hero"),e=!0,t=document.createElement("button");t.id="hpo-robot",t.type="button",t.setAttribute("aria-label",e?"Robot Hi\u1EC7p Ph\xE1t \u2014 nh\u1EA5n \u0111\u1EC3 xem 3D v\xE0 t\u01B0\u01A1ng t\xE1c":"Robot Hi\u1EC7p Ph\xE1t \u2014 nh\u1EA5n \u0111\u1EC3 xem 3D, k\xE9o ho\u1EB7c d\xF9ng ph\xEDm m\u0169i t\xEAn \u0111\u1EC3 di chuy\u1EC3n"),t.setAttribute("aria-haspopup","dialog"),t.setAttribute("aria-controls","hpo-robot-viewer"),t.setAttribute("aria-expanded","false"),t.title=e?"Nh\u1EA5n \u0111\u1EC3 xem m\xF4 h\xECnh 3D v\xE0 v\u1EABy tay":"K\xE9o \u0111\u1EC3 di chuy\u1EC3n \xB7 N\xE9m ra ngo\xE0i khung \u0111\u1EC3 \u1EA9n \xB7 Nh\u1EA5n \u0111\u1EC3 xem 3D",t.innerHTML=ua;let n=document.createElement("button");n.id="hpo-robot-restore",n.type="button",n.className="float-btn",n.setAttribute("aria-label","M\u1EDF h\u1ED9p tho\u1EA1i robot Hi\u1EC7p Ph\xE1t"),n.setAttribute("aria-haspopup","dialog"),n.setAttribute("aria-controls","hpo-robot-viewer"),n.setAttribute("aria-expanded","false"),n.title="M\u1EDF robot Hi\u1EC7p Ph\xE1t",n.innerHTML=`<img class="hpo-robot-head" src="${qh}" alt="" width="64" height="64" decoding="async"><img class="hpo-robot-full" src="${Yh}" alt="" width="125" height="240" decoding="async">`;let s=document.createElement("span");s.id="hpo-robot-dock-greeting",s.className="is-hidden",s.textContent=Zh,n.append(s),n.setAttribute("aria-describedby",s.id),n.hidden=!0;let r=document.createElement("span");r.id="hpo-robot-greeting",r.textContent=Zh,t.setAttribute("aria-describedby",r.id),document.body.append(t,n),document.body.classList.add(i?"hpo-home-robot":"hpo-page-robot");let a=()=>{let G=document.querySelector(".floats");return G?(G.prepend(n),!0):!1};if(!a()){let G=new MutationObserver(()=>{a()&&G.disconnect()});G.observe(document.body,{childList:!0,subtree:!0})}let o=new ne,c=new ne,l=new da;try{let G=localStorage.getItem("hpo-robot-speed");G!==null&&l.setSpeed(Number(G))}catch{}let u=matchMedia("(prefers-reduced-motion: reduce)"),h,d=0,p=0,g=0,y=!1,m=!1,f=!1,S=0,E=0,b=8,A=8,T=!1,P=0,R=0,_=0,M=0,C,F=!1,V=null,U=o.x,k=o.y,z=0,Z=!1,H=0,ee=!1,$=!1,ce=matchMedia("(max-width: 600px)"),pe=ce.matches;try{T=localStorage.getItem("hpo-robot-hidden")==="true"}catch{}let Be=()=>!T&&!pe;function Ye(){t.hidden=!Be(),n.hidden=Be()}Ye();let Xe=Xh(t,r0,()=>{l.pause(),$e()},G=>{y=G},l.speed,G=>{l.setSpeed(G);try{localStorage.setItem("hpo-robot-speed",String(l.speed))}catch{}},n,()=>!T,G=>K(G));function K(G,ie){T=!G;try{localStorage.setItem("hpo-robot-hidden",String(T))}catch{}if(window.clearTimeout(P),t.classList.remove("is-throwing-away"),l.pause(),G){if(Ye(),!Be())return Q();at(),o.set(ke.clamp(o.x,0,S),ke.clamp(o.y,0,E)),l.snapToEdge(o,S,E),Oe()}else if(ie&&!u.matches){n.hidden=!1;let Pe=ie.clone();Pe.lengthSq()<1&&Pe.set(1,1),Pe.normalize();let Ie=Math.max(S,E,_,t.offsetHeight)*2;t.style.setProperty("--hpo-throw-to-x",`${o.x+b+Pe.x*Ie}px`),t.style.setProperty("--hpo-throw-to-y",`${o.y+A+Pe.y*Ie}px`),t.style.setProperty("--hpo-throw-rotation",`${ke.clamp(Pe.x*32,-32,32)}deg`),t.classList.add("is-throwing-away"),P=window.setTimeout(()=>{t.hidden=!0,t.classList.remove("is-throwing-away")},u.matches?0:340)}else Ye();Q()}function Q(G=performance.now()){let ie=o.x!==U||o.y!==k;U=o.x,k=o.y,ie&&(z=G+120),Z&&H&&G>=H&&Be()&&!Xe.isOpen&&(Z=!1,$=!1,H=0);let Pe=!ee||Z||ie||G<z||!!C||Xe.isOpen||!Be()||document.hidden;Pe?V=null:V===null&&(V=G);let Ie=V!==null&&G-V<i0;Ie&&!$&&($=!0,!u.matches&&h&&!h.lost&&h.robot.wave()),Pe&&$&&(Z=!0,H||(H=G+Kh)),V!==null&&!Ie&&(Z=!0,H||(H=G+Kh)),r.classList.toggle("is-hidden",!Ie),Ie?t.setAttribute("aria-describedby",r.id):t.removeAttribute("aria-describedby")}let ge=198,De=90;function Me(){if(!i||i.classList.contains("is-active"))return t.classList.remove("is-bubble-off"),null;let G=document.querySelector(".company-banner.is-active"),ie=G?.querySelector(".company-banner-heading h2"),Pe=G?.querySelector(".company-banner-motto");if(!ie||!Pe)return t.classList.remove("is-bubble-off"),null;let Ie=document.getElementById("navbar")?.getBoundingClientRect().bottom||0,w=ie.getBoundingClientRect(),x=Pe.getBoundingClientRect();t.offsetHeight&&(ge=t.offsetHeight),r.offsetHeight&&(De=r.offsetHeight);let B=ge,Y=De+8,J=x.top-B-12;return t.classList.toggle("is-bubble-off",J-Y<Ie-2),J<Ie+4?NaN:J}function Oe(){if(e){t.style.removeProperty("transform");let ie=(document.querySelector(".topbar")?.offsetHeight||0)+(document.getElementById("navbar")?.offsetHeight||0),Pe=matchMedia("(max-width: 1100px)").matches,Ie=innerWidth<=600?12:16,w=window.visualViewport?.height||innerHeight,x=i?Pe?ie+i.offsetHeight-t.offsetHeight-Ie:ie+108:innerWidth<=600?Number.POSITIVE_INFINITY:ie+Math.max(0,(w-ie-t.offsetHeight)/2)+40,B=window.visualViewport?.height||innerHeight,Y=matchMedia("(max-width: 600px)").matches&&document.querySelector(".floats")?.offsetHeight||0,J=Math.min(x,B-Y-t.offsetHeight-(i?12:Ie+8)),q=i?Me():null;q!==null&&(J=q),t.style.top=`${J}px`,t.style.bottom="auto",r.style.removeProperty("left"),r.style.removeProperty("--greeting-tail"),Q();return}C||l.snapToEdge(o,S,E),t.style.transform=`translate3d(${o.x+b}px, ${o.y+A}px, 0)`;let G=ke.clamp(o.x+_/2-R/2,0,Math.max(0,M-R-16));r.style.left=`${G-o.x}px`,r.style.setProperty("--greeting-tail",`${ke.clamp(o.x+_/2-G,16,R-16)}px`),Q()}function at(G=!1){if(e){Oe();return}let ie=window.visualViewport;b=(ie?.offsetLeft||0)+8;let Pe=Math.max(0,r.offsetHeight-t.offsetHeight*.1);R=r.offsetWidth,_=t.offsetWidth,M=ie?.width||innerWidth,A=(ie?.offsetTop||0)+8+Pe,S=Math.max(0,(ie?.width||innerWidth)-t.offsetWidth-16),E=Math.max(0,(ie?.height||innerHeight)-t.offsetHeight-Pe-16),G&&o.set(0,E),Oe()}at(!0),new ResizeObserver(()=>at()).observe(t),new ResizeObserver(()=>at()).observe(r);{i&&new ResizeObserver(()=>at()).observe(i);let G=0,ie=()=>{cancelAnimationFrame(G),G=requestAnimationFrame(()=>{pe||Oe()})},Pe=()=>{let Ie=performance.now(),x=scrollY>innerHeight*.25||ce.matches||Number.isNaN(Me());if(x===pe){!pe&&i&&ie();return}pe=x,pe||(Z=!1,$=!1,H=0,z=Ie+500),Ye(),Be()&&(at(),$e()),Q()};if(window.addEventListener("scroll",Pe,{passive:!0}),ce.addEventListener("change",Pe),i){let Ie=0,w=()=>{cancelAnimationFrame(Ie),Ie=requestAnimationFrame(()=>{Pe(),Oe()})};new MutationObserver(w).observe(i,{attributes:!0,attributeFilter:["class"]}),document.querySelector(".company-slider-track")?.addEventListener("scroll",w,{passive:!0}),document.querySelector(".company-banner")?.addEventListener("animationend",w),document.getElementById("navbar")?.closest("header")?.addEventListener("transitionend",w)}Pe()}window.addEventListener("resize",()=>at()),window.visualViewport?.addEventListener("resize",()=>at()),window.visualViewport?.addEventListener("scroll",()=>at());{try{h=new rs(t),h.onRestore=$e}catch(G){console.warn("Robot 3D kh\xF4ng kh\u1EA3 d\u1EE5ng; hi\u1EC3n th\u1ECB h\xECnh thay th\u1EBF.",G)}ee=!0}t.append(r),at(!0),window.setInterval(Q,100);function I(G){let ie=Math.min((G-p)/1e3,.05);p=G,g+=ie,Xe.isOpen?Xe.tick(ie,g,!1):Be()&&(e||(l.update(ie,o,S,E,y||m||f||!!C||!!h?.lost||!Be(),!C),Oe()),h&&!h.lost&&Be()&&(h.robot.group.rotation.y=e?0:l.heading,!e&&!C&&!h.robot.isWaving&&l.takeGreeting()&&h.robot.wave(),h.robot.update(ie,g,c,!1,!e&&l.walking),h.render())),d=requestAnimationFrame(I)}function $e(){cancelAnimationFrame(d),!document.hidden&&(u.matches?(h?.robot.resetPose(),h?.render(),Xe.resetMotion(),Xe.tick(0,g,!0)):(p=performance.now(),d=requestAnimationFrame(I)))}t.addEventListener("pointerdown",G=>{e||!G.isPrimary||G.button!==0||C||(F=!1,f=!1,C={id:G.pointerId,x:G.clientX,y:G.clientY,offsetX:G.clientX-o.x-b,offsetY:G.clientY-o.y-A,moved:!1,lastX:G.clientX,lastY:G.clientY,lastTime:performance.now(),velocityX:0,velocityY:0},t.setPointerCapture(G.pointerId),l.pause(),Q())}),t.addEventListener("pointermove",G=>{if(C&&G.pointerId===C.id){let ie=performance.now(),Pe=Math.max(1,ie-C.lastTime),Ie=(G.clientX-C.lastX)/Pe*1e3,w=(G.clientY-C.lastY)/Pe*1e3;if(C.velocityX=C.velocityX*.35+Ie*.65,C.velocityY=C.velocityY*.35+w*.65,C.lastX=G.clientX,C.lastY=G.clientY,C.lastTime=ie,!C.moved&&Math.hypot(G.clientX-C.x,G.clientY-C.y)<6)return;C.moved=!0,t.classList.add("is-dragging");let x=G.clientX-C.offsetX-b,B=G.clientY-C.offsetY-A,Y=x-o.x,J=B-o.y;if(Math.hypot(Y,J)>1){let q=Math.atan2(Y,J);l.heading+=Math.atan2(Math.sin(q-l.heading),Math.cos(q-l.heading))*.3}o.set(x,B),Oe(),h&&(h.robot.group.rotation.y=l.heading,h.render())}else{let ie=t.getBoundingClientRect();c.set((G.clientX-ie.left)/ie.width*2-1,1-(G.clientY-ie.top)/ie.height*2)}});function Ue(G){if(!C||G&&G.pointerId!==C.id)return;let ie=C;if(C=void 0,F=ie.moved,t.hasPointerCapture(ie.id)&&t.releasePointerCapture(ie.id),t.classList.remove("is-dragging"),l.pause(),!ie.moved)return;if(G?.type!=="pointerup"){l.snapToEdge(o,S,E),Oe();return}let Pe=Math.exp(-(performance.now()-ie.lastTime)/140),Ie=ie.velocityX*Pe,w=ie.velocityY*Pe,x=Math.hypot(Ie,w),B=o.x+Ie*.3,Y=o.y+w*.3,J=o.x<-_*.35||o.x>S+_*.35||o.y<-t.offsetHeight*.35||o.y>E+t.offsetHeight*.35,q=x>=650&&(B<0||B>S||Y<0||Y>E);if(J||q){let Se=new ne(x>=260?Ie:o.x-(ie.x-ie.offsetX-b),x>=260?w:o.y-(ie.y-ie.offsetY-A));K(!1,Se),n.focus({preventScroll:!0})}else l.snapToEdge(o,S,E),Oe()}t.addEventListener("pointerup",Ue),t.addEventListener("pointercancel",Ue),t.addEventListener("lostpointercapture",Ue),window.addEventListener("blur",()=>{Ue(),m=!1}),t.addEventListener("click",G=>{if(F&&G.detail!==0){F=!1;return}F=!1,Xe.open(),Q()});let Re=0,xe=()=>{window.clearTimeout(Re),s.classList.add("is-hidden")},it=G=>{n.hidden||Xe.isOpen||(s.classList.remove("is-hidden"),window.clearTimeout(Re),Re=window.setTimeout(xe,G))};window.setTimeout(()=>it(6e3),1200),n.addEventListener("pointerenter",G=>{G.pointerType==="mouse"&&it(4e3)}),n.addEventListener("pointerleave",xe),n.addEventListener("focus",()=>{n.matches(":focus-visible")&&it(4e3)}),n.addEventListener("blur",xe),n.addEventListener("click",()=>{xe(),Xe.open(),Q()}),t.addEventListener("pointerenter",G=>{G.pointerType==="mouse"&&(m=!0)}),t.addEventListener("pointerleave",()=>{m=!1,c.set(0,0)}),t.addEventListener("focus",()=>{f=t.matches(":focus-visible")}),t.addEventListener("blur",()=>{f=!1}),t.addEventListener("keydown",G=>{if(e)return;let ie={ArrowLeft:[-24,0],ArrowRight:[24,0],ArrowUp:[0,-24],ArrowDown:[0,24]};if(!ie[G.key])return;G.preventDefault(),f=!0;let[Pe,Ie]=ie[G.key];o.x+=Pe,o.y+=Ie,l.heading=Math.atan2(Pe,Ie),Oe(),h&&(h.robot.group.rotation.y=l.heading,h.render()),l.pause()}),document.addEventListener("visibilitychange",()=>{document.hidden&&Ue(),$e()}),u.addEventListener("change",$e),$e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Jh,{once:!0}):Jh();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
