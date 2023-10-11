"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[923],{13923:function(t,e,r){function i(t){if(!Number.isSafeInteger(t)||t<0)throw Error(`Wrong positive integer: ${t}`)}function n(t,...e){if(!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}r.d(e,{secp256k1:function(){return tf}});var o={number:i,bool:function(t){if("boolean"!=typeof t)throw Error(`Expected boolean, not ${t}`)},bytes:n,hash:function(t){if("function"!=typeof t||"function"!=typeof t.create)throw Error("Hash should be wrapped by utils.wrapConstructor");i(t.outputLen),i(t.blockLen)},exists:function(t,e=!0){if(t.destroyed)throw Error("Hash instance has been destroyed");if(e&&t.finished)throw Error("Hash#digest() has already been called")},output:function(t,e){n(t);let r=e.outputLen;if(t.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}};let s="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,f=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),l=(t,e)=>t<<32-e|t>>>e,a=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];if(!a)throw Error("Non little-endian hardware is not supported");function u(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}(t)),!(t instanceof Uint8Array))throw TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));class d{clone(){return this._cloneInto()}}function h(t){let e=e=>t().update(u(e)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function c(t=32){if(s&&"function"==typeof s.getRandomValues)return s.getRandomValues(new Uint8Array(t));throw Error("crypto.getRandomValues must be defined")}class p extends d{constructor(t,e,r,i){super(),this.blockLen=t,this.outputLen=e,this.padOffset=r,this.isLE=i,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=f(this.buffer)}update(t){o.exists(this);let{view:e,buffer:r,blockLen:i}=this;t=u(t);let n=t.length;for(let o=0;o<n;){let s=Math.min(i-this.pos,n-o);if(s===i){let e=f(t);for(;i<=n-o;o+=i)this.process(e,o);continue}r.set(t.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===i&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){o.exists(this),o.output(t,this),this.finished=!0;let{buffer:e,view:r,blockLen:i,isLE:n}=this,{pos:s}=this;e[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>i-s&&(this.process(r,0),s=0);for(let t=s;t<i;t++)e[t]=0;!function(t,e,r,i){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,r,i);let n=BigInt(32),o=BigInt(4294967295),s=Number(r>>n&o),f=Number(r&o),l=i?4:0,a=i?0:4;t.setUint32(e+l,s,i),t.setUint32(e+a,f,i)}(r,i-8,BigInt(8*this.length),n),this.process(r,0);let l=f(t),a=this.outputLen;if(a%4)throw Error("_sha2: outputLen should be aligned to 32bit");let u=a/4,d=this.get();if(u>d.length)throw Error("_sha2: outputLen bigger than state");for(let t=0;t<u;t++)l.setUint32(4*t,d[t],n)}digest(){let{buffer:t,outputLen:e}=this;this.digestInto(t);let r=t.slice(0,e);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());let{blockLen:e,buffer:r,length:i,finished:n,destroyed:o,pos:s}=this;return t.length=i,t.pos=s,t.finished=n,t.destroyed=o,i%e&&t.buffer.set(r),t}}let g=(t,e,r)=>t&e^~t&r,y=(t,e,r)=>t&e^t&r^e&r,m=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),b=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),E=new Uint32Array(64);class w extends p{constructor(){super(64,32,8,!1),this.A=0|b[0],this.B=0|b[1],this.C=0|b[2],this.D=0|b[3],this.E=0|b[4],this.F=0|b[5],this.G=0|b[6],this.H=0|b[7]}get(){let{A:t,B:e,C:r,D:i,E:n,F:o,G:s,H:f}=this;return[t,e,r,i,n,o,s,f]}set(t,e,r,i,n,o,s,f){this.A=0|t,this.B=0|e,this.C=0|r,this.D=0|i,this.E=0|n,this.F=0|o,this.G=0|s,this.H=0|f}process(t,e){for(let r=0;r<16;r++,e+=4)E[r]=t.getUint32(e,!1);for(let t=16;t<64;t++){let e=E[t-15],r=E[t-2],i=l(e,7)^l(e,18)^e>>>3,n=l(r,17)^l(r,19)^r>>>10;E[t]=n+E[t-7]+i+E[t-16]|0}let{A:r,B:i,C:n,D:o,E:s,F:f,G:a,H:u}=this;for(let t=0;t<64;t++){let e=l(s,6)^l(s,11)^l(s,25),d=u+e+g(s,f,a)+m[t]+E[t]|0,h=l(r,2)^l(r,13)^l(r,22),c=h+y(r,i,n)|0;u=a,a=f,f=s,s=o+d|0,o=n,n=i,i=r,r=d+c|0}r=r+this.A|0,i=i+this.B|0,n=n+this.C|0,o=o+this.D|0,s=s+this.E|0,f=f+this.F|0,a=a+this.G|0,u=u+this.H|0,this.set(r,i,n,o,s,f,a,u)}roundClean(){E.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class B extends w{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}let x=h(()=>new w);h(()=>new B);var v=r(57843);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let S=BigInt(0),I=BigInt(1),A=BigInt(2),O=BigInt(3),q=BigInt(4),R=BigInt(5),N=BigInt(8);function T(t,e){let r=t%e;return r>=S?r:e+r}function L(t,e,r){let i=t;for(;e-- >S;)i*=i,i%=r;return i}function U(t,e){if(t===S||e<=S)throw Error(`invert: expected positive integers, got n=${t} mod=${e}`);let r=T(t,e),i=e,n=S,o=I,s=I,f=S;for(;r!==S;){let t=i/r,e=i%r,l=n-s*t,a=o-f*t;i=r,r=e,n=s,o=f,s=l,f=a}let l=i;if(l!==I)throw Error("invert: does not exist");return T(n,e)}BigInt(9),BigInt(16);let H=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function V(t){let e=H.reduce((t,e)=>(t[e]="function",t),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"});return(0,v.FF)(t,e)}function F(t,e){let r=void 0!==e?e:t.toString(2).length;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let D=BigInt(0),Z=BigInt(1);function _(t){return V(t.Fp),(0,v.FF)(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...F(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}let{bytesToNumberBE:C,hexToBytes:P}=v,$={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(t){let{Err:e}=$;if(t.length<2||2!==t[0])throw new e("Invalid signature integer tag");let r=t[1],i=t.subarray(2,r+2);if(!r||i.length!==r)throw new e("Invalid signature integer: wrong length");if(128&i[0])throw new e("Invalid signature integer: negative");if(0===i[0]&&!(128&i[1]))throw new e("Invalid signature integer: unnecessary leading zero");return{d:C(i),l:t.subarray(r+2)}},toSig(t){let{Err:e}=$,r="string"==typeof t?P(t):t;if(!(r instanceof Uint8Array))throw Error("ui8a expected");let i=r.length;if(i<2||48!=r[0])throw new e("Invalid signature tag");if(r[1]!==i-2)throw new e("Invalid signature: incorrect length");let{d:n,l:o}=$._parseInt(r.subarray(2)),{d:s,l:f}=$._parseInt(o);if(f.length)throw new e("Invalid signature: left bytes after parsing");return{r:n,s}},hexFromSig(t){let e=t=>8&Number.parseInt(t[0],16)?"00"+t:t,r=t=>{let e=t.toString(16);return 1&e.length?`0${e}`:e},i=e(r(t.s)),n=e(r(t.r)),o=i.length/2,s=n.length/2,f=r(o),l=r(s);return`30${r(s+o+4)}02${l}${n}02${f}${i}`}},z=BigInt(0),k=BigInt(1),j=BigInt(2),Y=BigInt(3),K=BigInt(4),M=v.bytesToNumberBE;function W(t,e){if(t<0||t>=1<<8*e)throw Error(`bad I2OSP call: value=${t} length=${e}`);let r=Array.from({length:e}).fill(0);for(let i=e-1;i>=0;i--)r[i]=255&t,t>>>=8;return new Uint8Array(r)}function G(t){if(!(t instanceof Uint8Array))throw Error("Uint8Array expected")}function Q(t){if(!Number.isSafeInteger(t))throw Error("number expected")}function X(t,e,r){let i;(0,v.FF)(r,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});let{p:n,k:o,m:s,hash:f,expand:l,DST:a}=r;G(t),Q(e);let u=function(t){if(t instanceof Uint8Array)return t;if("string"==typeof t)return(0,v.iY)(t);throw Error("DST must be Uint8Array or string")}(a),d=n.toString(2).length,h=Math.ceil((d+o)/8),c=e*s*h;if("xmd"===l)i=function(t,e,r,i){G(t),G(e),Q(r),e.length>255&&(e=i((0,v.eV)((0,v.iY)("H2C-OVERSIZE-DST-"),e)));let{outputLen:n,blockLen:o}=i,s=Math.ceil(r/n);if(s>255)throw Error("Invalid xmd length");let f=(0,v.eV)(e,W(e.length,1)),l=W(0,o),a=W(r,2),u=Array(s),d=i((0,v.eV)(l,t,a,W(0,1),f));u[0]=i((0,v.eV)(d,W(1,1),f));for(let t=1;t<=s;t++){let e=[function(t,e){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t[i]^e[i];return r}(d,u[t-1]),W(t+1,1),f];u[t]=i((0,v.eV)(...e))}let h=(0,v.eV)(...u);return h.slice(0,r)}(t,u,c,f);else if("xof"===l)i=function(t,e,r,i,n){if(G(t),G(e),Q(r),e.length>255&&(e=n.create({dkLen:Math.ceil(2*i/8)}).update((0,v.iY)("H2C-OVERSIZE-DST-")).update(e).digest()),r>65535||e.length>255)throw Error("expand_message_xof: invalid lenInBytes");return n.create({dkLen:r}).update(t).update(W(r,2)).update(e).update(W(e.length,1)).digest()}(t,u,c,o,f);else if("_internal_pass"===l)i=t;else throw Error('expand must be "xmd" or "xof"');let p=Array(e);for(let t=0;t<e;t++){let e=Array(s);for(let r=0;r<s;r++){let o=h*(r+t*s),f=i.subarray(o,o+h);e[r]=T(M(f),n)}p[t]=e}return p}class J extends d{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,o.hash(t);let r=u(e);if(this.iHash=t.create(),"function"!=typeof this.iHash.update)throw TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let i=this.blockLen,n=new Uint8Array(i);n.set(r.length>i?t.create().update(r).digest():r);for(let t=0;t<n.length;t++)n[t]^=54;this.iHash.update(n),this.oHash=t.create();for(let t=0;t<n.length;t++)n[t]^=106;this.oHash.update(n),n.fill(0)}update(t){return o.exists(this),this.iHash.update(t),this}digestInto(t){o.exists(this),o.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));let{oHash:e,iHash:r,finished:i,destroyed:n,blockLen:o,outputLen:s}=this;return t.finished=i,t.destroyed=n,t.blockLen=o,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}let tt=(t,e,r)=>new J(t,e).update(r).digest();tt.create=(t,e)=>new J(t,e);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let te=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),tr=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),ti=BigInt(1),tn=BigInt(2),to=(t,e)=>(t+e/tn)/e,ts=function(t,e,r=!1,i={}){if(t<=S)throw Error(`Expected Fp ORDER > 0, got ${t}`);let{nBitLength:n,nByteLength:o}=F(t,e);if(o>2048)throw Error("Field lengths over 2048 bytes are not supported");let s=function(t){if(t%q===O){let e=(t+I)/q;return function(t,r){let i=t.pow(r,e);if(!t.eql(t.sqr(i),r))throw Error("Cannot find square root");return i}}if(t%N===R){let e=(t-R)/N;return function(t,r){let i=t.mul(r,A),n=t.pow(i,e),o=t.mul(r,n),s=t.mul(t.mul(o,A),n),f=t.mul(o,t.sub(s,t.ONE));if(!t.eql(t.sqr(f),r))throw Error("Cannot find square root");return f}}return function(t){let e,r,i;let n=(t-I)/A;for(e=t-I,r=0;e%A===S;e/=A,r++);for(i=A;i<t&&function(t,e,r){if(r<=S||e<S)throw Error("Expected power/modulo > 0");if(r===I)return S;let i=I;for(;e>S;)e&I&&(i=i*t%r),t=t*t%r,e>>=I;return i}(i,n,t)!==t-I;i++);if(1===r){let e=(t+I)/q;return function(t,r){let i=t.pow(r,e);if(!t.eql(t.sqr(i),r))throw Error("Cannot find square root");return i}}let o=(e+I)/A;return function(t,s){if(t.pow(s,n)===t.neg(t.ONE))throw Error("Cannot find square root");let f=r,l=t.pow(t.mul(t.ONE,i),e),a=t.pow(s,o),u=t.pow(s,e);for(;!t.eql(u,t.ONE);){if(t.eql(u,t.ZERO))return t.ZERO;let e=1;for(let r=t.sqr(u);e<f&&!t.eql(r,t.ONE);e++)r=t.sqr(r);let r=t.pow(l,I<<BigInt(f-e-1));l=t.sqr(r),a=t.mul(a,r),u=t.mul(u,l),f=e}return a}}(t)}(t),f=Object.freeze({ORDER:t,BITS:n,BYTES:o,MASK:(0,v.dQ)(n),ZERO:S,ONE:I,create:e=>T(e,t),isValid:e=>{if("bigint"!=typeof e)throw Error(`Invalid field element: expected bigint, got ${typeof e}`);return S<=e&&e<t},is0:t=>t===S,isOdd:t=>(t&I)===I,neg:e=>T(-e,t),eql:(t,e)=>t===e,sqr:e=>T(e*e,t),add:(e,r)=>T(e+r,t),sub:(e,r)=>T(e-r,t),mul:(e,r)=>T(e*r,t),pow:(t,e)=>(function(t,e,r){if(r<S)throw Error("Expected power > 0");if(r===S)return t.ONE;if(r===I)return e;let i=t.ONE,n=e;for(;r>S;)r&I&&(i=t.mul(i,n)),n=t.sqr(n),r>>=I;return i})(f,t,e),div:(e,r)=>T(e*U(r,t),t),sqrN:t=>t*t,addN:(t,e)=>t+e,subN:(t,e)=>t-e,mulN:(t,e)=>t*e,inv:e=>U(e,t),sqrt:i.sqrt||(t=>s(f,t)),invertBatch:t=>(function(t,e){let r=Array(e.length),i=e.reduce((e,i,n)=>t.is0(i)?e:(r[n]=e,t.mul(e,i)),t.ONE),n=t.inv(i);return e.reduceRight((e,i,n)=>t.is0(i)?e:(r[n]=t.mul(e,r[n]),t.mul(e,i)),n),r})(f,t),cmov:(t,e,r)=>r?e:t,toBytes:t=>r?(0,v.S5)(t,o):(0,v.tL)(t,o),fromBytes:t=>{if(t.length!==o)throw Error(`Fp.fromBytes: expected ${o}, got ${t.length}`);return r?(0,v.ty)(t):(0,v.bytesToNumberBE)(t)}});return Object.freeze(f)}(te,void 0,void 0,{sqrt:function(t){let e=BigInt(3),r=BigInt(6),i=BigInt(11),n=BigInt(22),o=BigInt(23),s=BigInt(44),f=BigInt(88),l=t*t*t%te,a=l*l*t%te,u=L(a,e,te)*a%te,d=L(u,e,te)*a%te,h=L(d,tn,te)*l%te,c=L(h,i,te)*h%te,p=L(c,n,te)*c%te,g=L(p,s,te)*p%te,y=L(g,f,te)*g%te,m=L(y,s,te)*p%te,b=L(m,e,te)*a%te,E=L(b,o,te)*c%te,w=L(E,r,te)*l%te,B=L(w,tn,te);if(!ts.eql(ts.sqr(B),t))throw Error("Cannot find square root");return B}}),tf=function(t,e){let r=e=>(function(t){let e=function(t){let e=_(t);return v.FF(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}(t),{Fp:r,n:i}=e,n=r.BYTES+1,o=2*r.BYTES+1;function s(t){return T(t,i)}let{ProjectivePoint:f,normPrivateKeyToScalar:l,weierstrassEquation:a,isWithinCurveOrder:u}=function(t){let e=/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function(t){let e=_(t);v.FF(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:r,Fp:i,a:n}=e;if(r){if(!i.eql(n,i.ZERO))throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!=typeof r||"bigint"!=typeof r.beta||"function"!=typeof r.splitScalar)throw Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}(t),{Fp:r}=e,i=e.toBytes||((t,e,i)=>{let n=e.toAffine();return v.eV(Uint8Array.from([4]),r.toBytes(n.x),r.toBytes(n.y))}),n=e.fromBytes||(t=>{let e=t.subarray(1),i=r.fromBytes(e.subarray(0,r.BYTES)),n=r.fromBytes(e.subarray(r.BYTES,2*r.BYTES));return{x:i,y:n}});function o(t){let{a:i,b:n}=e,o=r.sqr(t),s=r.mul(o,t);return r.add(r.add(s,r.mul(t,i)),n)}if(!r.eql(r.sqr(e.Gy),o(e.Gx)))throw Error("bad generator point: equation left != right");function s(t){return"bigint"==typeof t&&z<t&&t<e.n}function f(t){if(!s(t))throw Error("Expected valid bigint: 0 < bigint < curve.n")}function l(t){let r;let{allowedPrivateKeyLengths:i,nByteLength:n,wrapPrivateKey:o,n:s}=e;if(i&&"bigint"!=typeof t){if(t instanceof Uint8Array&&(t=v.ci(t)),"string"!=typeof t||!i.includes(t.length))throw Error("Invalid key");t=t.padStart(2*n,"0")}try{r="bigint"==typeof t?t:v.bytesToNumberBE((0,v.ql)("private key",t,n))}catch(e){throw Error(`private key must be ${n} bytes, hex or bigint, not ${typeof t}`)}return o&&(r=T(r,s)),f(r),r}let a=new Map;function u(t){if(!(t instanceof d))throw Error("ProjectivePoint expected")}class d{constructor(t,e,i){if(this.px=t,this.py=e,this.pz=i,null==t||!r.isValid(t))throw Error("x required");if(null==e||!r.isValid(e))throw Error("y required");if(null==i||!r.isValid(i))throw Error("z required")}static fromAffine(t){let{x:e,y:i}=t||{};if(!t||!r.isValid(e)||!r.isValid(i))throw Error("invalid affine point");if(t instanceof d)throw Error("projective point not allowed");let n=t=>r.eql(t,r.ZERO);return n(e)&&n(i)?d.ZERO:new d(e,i,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(t){let e=r.invertBatch(t.map(t=>t.pz));return t.map((t,r)=>t.toAffine(e[r])).map(d.fromAffine)}static fromHex(t){let e=d.fromAffine(n((0,v.ql)("pointHex",t)));return e.assertValidity(),e}static fromPrivateKey(t){return d.BASE.multiply(l(t))}_setWindowSize(t){this._WINDOW_SIZE=t,a.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint)return;throw Error("bad point: ZERO")}let{x:t,y:i}=this.toAffine();if(!r.isValid(t)||!r.isValid(i))throw Error("bad point: x or y not FE");let n=r.sqr(i),s=o(t);if(!r.eql(n,s))throw Error("bad point: equation left != right");if(!this.isTorsionFree())throw Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y:t}=this.toAffine();if(r.isOdd)return!r.isOdd(t);throw Error("Field doesn't support isOdd")}equals(t){u(t);let{px:e,py:i,pz:n}=this,{px:o,py:s,pz:f}=t,l=r.eql(r.mul(e,f),r.mul(o,n)),a=r.eql(r.mul(i,f),r.mul(s,n));return l&&a}negate(){return new d(this.px,r.neg(this.py),this.pz)}double(){let{a:t,b:i}=e,n=r.mul(i,Y),{px:o,py:s,pz:f}=this,l=r.ZERO,a=r.ZERO,u=r.ZERO,h=r.mul(o,o),c=r.mul(s,s),p=r.mul(f,f),g=r.mul(o,s);return g=r.add(g,g),u=r.mul(o,f),u=r.add(u,u),l=r.mul(t,u),a=r.mul(n,p),a=r.add(l,a),l=r.sub(c,a),a=r.add(c,a),a=r.mul(l,a),l=r.mul(g,l),u=r.mul(n,u),p=r.mul(t,p),g=r.sub(h,p),g=r.mul(t,g),g=r.add(g,u),u=r.add(h,h),h=r.add(u,h),h=r.add(h,p),h=r.mul(h,g),a=r.add(a,h),p=r.mul(s,f),p=r.add(p,p),h=r.mul(p,g),l=r.sub(l,h),u=r.mul(p,c),u=r.add(u,u),u=r.add(u,u),new d(l,a,u)}add(t){u(t);let{px:i,py:n,pz:o}=this,{px:s,py:f,pz:l}=t,a=r.ZERO,h=r.ZERO,c=r.ZERO,p=e.a,g=r.mul(e.b,Y),y=r.mul(i,s),m=r.mul(n,f),b=r.mul(o,l),E=r.add(i,n),w=r.add(s,f);E=r.mul(E,w),w=r.add(y,m),E=r.sub(E,w),w=r.add(i,o);let B=r.add(s,l);return w=r.mul(w,B),B=r.add(y,b),w=r.sub(w,B),B=r.add(n,o),a=r.add(f,l),B=r.mul(B,a),a=r.add(m,b),B=r.sub(B,a),c=r.mul(p,w),a=r.mul(g,b),c=r.add(a,c),a=r.sub(m,c),c=r.add(m,c),h=r.mul(a,c),m=r.add(y,y),m=r.add(m,y),b=r.mul(p,b),w=r.mul(g,w),m=r.add(m,b),b=r.sub(y,b),b=r.mul(p,b),w=r.add(w,b),y=r.mul(m,w),h=r.add(h,y),y=r.mul(B,w),a=r.mul(E,a),a=r.sub(a,y),y=r.mul(E,m),c=r.mul(B,c),c=r.add(c,y),new d(a,h,c)}subtract(t){return this.add(t.negate())}is0(){return this.equals(d.ZERO)}wNAF(t){return c.wNAFCached(this,a,t,t=>{let e=r.invertBatch(t.map(t=>t.pz));return t.map((t,r)=>t.toAffine(e[r])).map(d.fromAffine)})}multiplyUnsafe(t){let i=d.ZERO;if(t===z)return i;if(f(t),t===k)return this;let{endo:n}=e;if(!n)return c.unsafeLadder(this,t);let{k1neg:o,k1:s,k2neg:l,k2:a}=n.splitScalar(t),u=i,h=i,p=this;for(;s>z||a>z;)s&k&&(u=u.add(p)),a&k&&(h=h.add(p)),p=p.double(),s>>=k,a>>=k;return o&&(u=u.negate()),l&&(h=h.negate()),h=new d(r.mul(h.px,n.beta),h.py,h.pz),u.add(h)}multiply(t){let i,n;f(t);let{endo:o}=e;if(o){let{k1neg:e,k1:s,k2neg:f,k2:l}=o.splitScalar(t),{p:a,f:u}=this.wNAF(s),{p:h,f:p}=this.wNAF(l);a=c.constTimeNegate(e,a),h=c.constTimeNegate(f,h),h=new d(r.mul(h.px,o.beta),h.py,h.pz),i=a.add(h),n=u.add(p)}else{let{p:e,f:r}=this.wNAF(t);i=e,n=r}return d.normalizeZ([i,n])[0]}multiplyAndAddUnsafe(t,e,r){let i=d.BASE,n=(t,e)=>e!==z&&e!==k&&t.equals(i)?t.multiply(e):t.multiplyUnsafe(e),o=n(this,e).add(n(t,r));return o.is0()?void 0:o}toAffine(t){let{px:e,py:i,pz:n}=this,o=this.is0();null==t&&(t=o?r.ONE:r.inv(n));let s=r.mul(e,t),f=r.mul(i,t),l=r.mul(n,t);if(o)return{x:r.ZERO,y:r.ZERO};if(!r.eql(l,r.ONE))throw Error("invZ was invalid");return{x:s,y:f}}isTorsionFree(){let{h:t,isTorsionFree:r}=e;if(t===k)return!0;if(r)return r(d,this);throw Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:t,clearCofactor:r}=e;return t===k?this:r?r(d,this):this.multiplyUnsafe(e.h)}toRawBytes(t=!0){return this.assertValidity(),i(d,this,t)}toHex(t=!0){return v.ci(this.toRawBytes(t))}}d.BASE=new d(e.Gx,e.Gy,r.ONE),d.ZERO=new d(r.ZERO,r.ONE,r.ZERO);let h=e.nBitLength,c=function(t,e){let r=(t,e)=>{let r=e.negate();return t?r:e},i=t=>({windows:Math.ceil(e/t)+1,windowSize:2**(t-1)});return{constTimeNegate:r,unsafeLadder(e,r){let i=t.ZERO,n=e;for(;r>D;)r&Z&&(i=i.add(n)),n=n.double(),r>>=Z;return i},precomputeWindow(t,e){let{windows:r,windowSize:n}=i(e),o=[],s=t,f=s;for(let t=0;t<r;t++){f=s,o.push(f);for(let t=1;t<n;t++)f=f.add(s),o.push(f);s=f.double()}return o},wNAF(e,n,o){let{windows:s,windowSize:f}=i(e),l=t.ZERO,a=t.BASE,u=BigInt(2**e-1),d=2**e,h=BigInt(e);for(let t=0;t<s;t++){let e=t*f,i=Number(o&u);o>>=h,i>f&&(i-=d,o+=Z);let s=e+Math.abs(i)-1,c=t%2!=0,p=i<0;0===i?a=a.add(r(c,n[e])):l=l.add(r(p,n[s]))}return{p:l,f:a}},wNAFCached(t,e,r,i){let n=t._WINDOW_SIZE||1,o=e.get(t);return o||(o=this.precomputeWindow(t,n),1!==n&&e.set(t,i(o))),this.wNAF(n,o,r)}}}(d,e.endo?Math.ceil(h/2):h);return{CURVE:e,ProjectivePoint:d,normPrivateKeyToScalar:l,weierstrassEquation:o,isWithinCurveOrder:s}}({...e,toBytes(t,e,i){let n=e.toAffine(),o=r.toBytes(n.x),s=v.eV;return i?s(Uint8Array.from([e.hasEvenY()?2:3]),o):s(Uint8Array.from([4]),o,r.toBytes(n.y))},fromBytes(t){let e=t.length,i=t[0],s=t.subarray(1);if(e===n&&(2===i||3===i)){let t=v.bytesToNumberBE(s);if(!(z<t&&t<r.ORDER))throw Error("Point is not on curve");let e=a(t),n=r.sqrt(e),o=(n&k)===k;return(1&i)==1!==o&&(n=r.neg(n)),{x:t,y:n}}if(e===o&&4===i){let t=r.fromBytes(s.subarray(0,r.BYTES)),e=r.fromBytes(s.subarray(r.BYTES,2*r.BYTES));return{x:t,y:e}}throw Error(`Point of length ${e} was invalid. Expected ${n} compressed bytes or ${o} uncompressed bytes`)}}),d=t=>v.ci(v.tL(t,e.nByteLength));function h(t){let e=i>>k;return t>e}let c=(t,e,r)=>v.bytesToNumberBE(t.slice(e,r));class p{constructor(t,e,r){this.r=t,this.s=e,this.recovery=r,this.assertValidity()}static fromCompact(t){let r=e.nByteLength;return t=(0,v.ql)("compactSignature",t,2*r),new p(c(t,0,r),c(t,r,2*r))}static fromDER(t){let{r:e,s:r}=$.toSig((0,v.ql)("DER",t));return new p(e,r)}assertValidity(){if(!u(this.r))throw Error("r must be 0 < r < CURVE.n");if(!u(this.s))throw Error("s must be 0 < s < CURVE.n")}addRecoveryBit(t){return new p(this.r,this.s,t)}recoverPublicKey(t){let{r:n,s:o,recovery:l}=this,a=m((0,v.ql)("msgHash",t));if(null==l||![0,1,2,3].includes(l))throw Error("recovery id invalid");let u=2===l||3===l?n+e.n:n;if(u>=r.ORDER)throw Error("recovery id 2 or 3 invalid");let h=(1&l)==0?"02":"03",c=f.fromHex(h+d(u)),p=U(u,i),g=s(-a*p),y=s(o*p),b=f.BASE.multiplyAndAddUnsafe(c,g,y);if(!b)throw Error("point at infinify");return b.assertValidity(),b}hasHighS(){return h(this.s)}normalizeS(){return this.hasHighS()?new p(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return v.hexToBytes(this.toDERHex())}toDERHex(){return $.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return v.hexToBytes(this.toCompactHex())}toCompactHex(){return d(this.r)+d(this.s)}}function g(t){let e=t instanceof Uint8Array,r="string"==typeof t,i=(e||r)&&t.length;return e?i===n||i===o:r?i===2*n||i===2*o:t instanceof f}let y=e.bits2int||function(t){let r=v.bytesToNumberBE(t),i=8*t.length-e.nBitLength;return i>0?r>>BigInt(i):r},m=e.bits2int_modN||function(t){return s(y(t))},b=v.dQ(e.nBitLength);function E(t){if("bigint"!=typeof t)throw Error("bigint expected");if(!(z<=t&&t<b))throw Error(`bigint expected < 2^${e.nBitLength}`);return v.tL(t,e.nByteLength)}let w={lowS:e.lowS,prehash:!1},B={lowS:e.lowS,prehash:!1};return f.BASE._setWindowSize(8),{CURVE:e,getPublicKey:function(t,e=!0){return f.fromPrivateKey(t).toRawBytes(e)},getSharedSecret:function(t,e,r=!0){if(g(t))throw Error("first arg must be private key");if(!g(e))throw Error("second arg must be public key");let i=f.fromHex(e);return i.multiply(l(t)).toRawBytes(r)},sign:function(t,n,o=w){let{seed:a,k2sig:d}=function(t,n,o=w){if(["recovered","canonical"].some(t=>t in o))throw Error("sign() legacy options not supported");let{hash:a,randomBytes:d}=e,{lowS:c,prehash:g,extraEntropy:b}=o;null==c&&(c=!0),t=(0,v.ql)("msgHash",t),g&&(t=(0,v.ql)("prehashed msgHash",a(t)));let B=m(t),x=l(n),S=[E(x),E(B)];if(null!=b){let t=!0===b?d(r.BYTES):b;S.push((0,v.ql)("extraEntropy",t,r.BYTES))}let I=v.eV(...S);return{seed:I,k2sig:function(t){let e=y(t);if(!u(e))return;let r=U(e,i),n=f.BASE.multiply(e).toAffine(),o=s(n.x);if(o===z)return;let l=s(r*s(B+o*x));if(l===z)return;let a=(n.x===o?0:2)|Number(n.y&k),d=l;return c&&h(l)&&(d=h(l)?s(-l):l,a^=1),new p(o,d,a)}}}(t,n,o),c=v.n$(e.hash.outputLen,e.nByteLength,e.hmac);return c(a,d)},verify:function(t,r,n,o=B){let l,a;if(r=(0,v.ql)("msgHash",r),n=(0,v.ql)("publicKey",n),"strict"in o)throw Error("options.strict was renamed to lowS");let{lowS:u,prehash:d}=o;try{if("string"==typeof t||t instanceof Uint8Array)try{a=p.fromDER(t)}catch(e){if(!(e instanceof $.Err))throw e;a=p.fromCompact(t)}else if("object"==typeof t&&"bigint"==typeof t.r&&"bigint"==typeof t.s){let{r:e,s:r}=t;a=new p(e,r)}else throw Error("PARSE");l=f.fromHex(n)}catch(t){if("PARSE"===t.message)throw Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(u&&a.hasHighS())return!1;d&&(r=e.hash(r));let{r:h,s:c}=a,g=m(r),y=U(c,i),b=s(g*y),E=s(h*y),w=f.BASE.multiplyAndAddUnsafe(l,b,E)?.toAffine();if(!w)return!1;let x=s(w.x);return x===h},ProjectivePoint:f,Signature:p,utils:{isValidPrivateKey(t){try{return l(t),!0}catch(t){return!1}},normPrivateKeyToScalar:l,randomPrivateKey:()=>{let t=e.randomBytes(r.BYTES+8),n=function(t,e,r=!1){t=(0,v.ql)("privateHash",t);let i=t.length,n=F(e).nByteLength+8;if(n<24||i<n||i>1024)throw Error(`hashToPrivateScalar: expected ${n}-1024 bytes of input, got ${i}`);let o=r?(0,v.ty)(t):(0,v.bytesToNumberBE)(t);return T(o,e-I)+I}(t,i);return v.tL(n,e.nByteLength)},precompute:(t=8,e=f.BASE)=>(e._setWindowSize(t),e.multiply(BigInt(3)),e)}}})({...t,hash:e,hmac:(t,...r)=>tt(e,t,function(...t){if(!t.every(t=>t instanceof Uint8Array))throw Error("Uint8Array list expected");if(1===t.length)return t[0];let e=t.reduce((t,e)=>t+e.length,0),r=new Uint8Array(e);for(let e=0,i=0;e<t.length;e++){let n=t[e];r.set(n,i),i+=n.length}return r}(...r)),randomBytes:c});return Object.freeze({...r(e),create:r})}({a:BigInt(0),b:BigInt(7),Fp:ts,n:tr,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{let e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-ti*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),n=BigInt("0x100000000000000000000000000000000"),o=to(e*t,tr),s=to(-r*t,tr),f=T(t-o*e-s*i,tr),l=T(-o*r-s*e,tr),a=f>n,u=l>n;if(a&&(f=tr-f),u&&(l=tr-l),f>n||l>n)throw Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:a,k1:f,k2neg:u,k2:l}}}},x);BigInt(0),tf.ProjectivePoint,tf.utils.randomPrivateKey,v.tL,v.bytesToNumberBE;let tl=function(t,e){let r=e.map(t=>Array.from(t).reverse());return(e,i)=>{let[n,o,s,f]=r.map(r=>r.reduce((r,i)=>t.add(t.mul(r,e),i)));return{x:e=t.div(n,o),y:i=t.mul(i,t.div(s,f))}}}(ts,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(t=>t.map(t=>BigInt(t)))),ta=function(t,e){if(V(t),!t.isValid(e.A)||!t.isValid(e.B)||!t.isValid(e.Z))throw Error("mapToCurveSimpleSWU: invalid opts");let r=function(t,e){let r=t.ORDER,i=z;for(let t=r-k;t%j===z;t/=j)i+=k;let n=i,o=(r-k)/j**n,s=(o-k)/j,f=j**n-k,l=j**(n-k),a=t.pow(e,o),u=t.pow(e,(o+k)/j),d=(e,r)=>{let i=a,o=t.pow(r,f),d=t.sqr(o);d=t.mul(d,r);let h=t.mul(e,d);h=t.pow(h,s),h=t.mul(h,o),o=t.mul(h,r),d=t.mul(h,e);let c=t.mul(d,o);h=t.pow(c,l);let p=t.eql(h,t.ONE);o=t.mul(d,u),h=t.mul(c,i),d=t.cmov(o,d,p),c=t.cmov(h,c,p);for(let e=n;e>k;e--){let r=j**(e-j),n=t.pow(c,r),s=t.eql(n,t.ONE);o=t.mul(d,i),i=t.mul(i,i),n=t.mul(c,i),d=t.cmov(o,d,s),c=t.cmov(n,c,s)}return{isValid:p,value:d}};if(t.ORDER%K===Y){let r=(t.ORDER-Y)/K,i=t.sqrt(t.neg(e));d=(e,n)=>{let o=t.sqr(n),s=t.mul(e,n);o=t.mul(o,s);let f=t.pow(o,r);f=t.mul(f,s);let l=t.mul(f,i),a=t.mul(t.sqr(f),n),u=t.eql(a,e),d=t.cmov(l,f,u);return{isValid:u,value:d}}}return d}(t,e.Z);if(!t.isOdd)throw Error("Fp.isOdd is not implemented!");return i=>{let n,o,s,f,l,a,u,d;n=t.sqr(i),n=t.mul(n,e.Z),o=t.sqr(n),o=t.add(o,n),s=t.add(o,t.ONE),s=t.mul(s,e.B),f=t.cmov(e.Z,t.neg(o),!t.eql(o,t.ZERO)),f=t.mul(f,e.A),o=t.sqr(s),a=t.sqr(f),l=t.mul(a,e.A),o=t.add(o,l),o=t.mul(o,s),a=t.mul(a,f),l=t.mul(a,e.B),o=t.add(o,l),u=t.mul(n,s);let{isValid:h,value:c}=r(o,a);d=t.mul(n,i),d=t.mul(d,c),u=t.cmov(u,s,h),d=t.cmov(d,c,h);let p=t.isOdd(i)===t.isOdd(d);return d=t.cmov(t.neg(d),d,p),{x:u=t.div(u,f),y:d}}}(ts,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:ts.create(BigInt("-11"))}),{hashToCurve:tu,encodeToCurve:td}=function(t,e,r){if("function"!=typeof e)throw Error("mapToCurve() must be defined");return{hashToCurve(i,n){let o=X(i,2,{...r,DST:r.DST,...n}),s=t.fromAffine(e(o[0])),f=t.fromAffine(e(o[1])),l=s.add(f).clearCofactor();return l.assertValidity(),l},encodeToCurve(i,n){let o=X(i,1,{...r,DST:r.encodeDST,...n}),s=t.fromAffine(e(o[0])).clearCofactor();return s.assertValidity(),s}}}(tf.ProjectivePoint,t=>{let{x:e,y:r}=ta(ts.create(t[0]));return tl(e,r)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:ts.ORDER,m:1,k:128,expand:"xmd",hash:x})}}]);