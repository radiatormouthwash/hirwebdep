const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CnFwVReh.js","assets/form_types-C7h3VrBn.js","assets/index-CL7MR29U.js","assets/index-E4EsnYeB.js"])))=>i.map(i=>d[i]);
var fC=Object.defineProperty;var dC=(e,t,n)=>t in e?fC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var G=(e,t,n)=>dC(e,typeof t!="symbol"?t+"":t,n);import{s as pC,b as gm,a as hC,c as mC}from"./form_types-C7h3VrBn.js";import{_ as xe}from"./preload-helper-Cir5MTL7.js";function Ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ga,Hv;function vC(){if(Hv)return Ga;Hv=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return Ga=e,Ga}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,xv;function _C(){if(xv)return Wa;xv=1;var e=vC();function t(){try{return e({},"x",{}),!0}catch{return!1}}return Wa=t,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Va,Uv;function bC(){if(Uv)return Va;Uv=1;var e=Object.defineProperty;return Va=e,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,Gv;function Z7(){if(Gv)return Xa;Gv=1;function e(t){return typeof t=="number"}return Xa=e,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ja,Wv;function ew(){if(Wv)return ja;Wv=1;function e(r){return r[0]==="-"}function t(r){var i="",o;for(o=0;o<r;o++)i+="0";return i}function n(r,i,o){var a=!1,s=i-r.length;return s<0||(e(r)&&(a=!0,r=r.substr(1)),r=o?r+t(s):t(s)+r,a&&(r="-"+r)),r}return ja=n,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ka,Vv;function gC(){if(Vv)return Ka;Vv=1;var e=Z7(),t=ew(),n=String.prototype.toLowerCase,r=String.prototype.toUpperCase;function i(o){var a,s,u;switch(o.specifier){case"b":a=2;break;case"o":a=8;break;case"x":case"X":a=16;break;case"d":case"i":case"u":default:a=10;break}if(s=o.arg,u=parseInt(s,10),!isFinite(u)){if(!e(s))throw new Error("invalid integer. Value: "+s);u=0}return u<0&&(o.specifier==="u"||a!==10)&&(u=4294967295+u+1),u<0?(s=(-u).toString(a),o.precision&&(s=t(s,o.precision,o.padRight)),s="-"+s):(s=u.toString(a),!u&&!o.precision?s="":o.precision&&(s=t(s,o.precision,o.padRight)),o.sign&&(s=o.sign+s)),a===16&&(o.alternate&&(s="0x"+s),s=o.specifier===r.call(o.specifier)?r.call(s):n.call(s)),a===8&&o.alternate&&s.charAt(0)!=="0"&&(s="0"+s),s}return Ka=i,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,Xv;function yC(){if(Xv)return Ya;Xv=1;function e(t){return typeof t=="string"}return Ya=e,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var za,jv;function EC(){if(jv)return za;jv=1;var e=Math.abs,t=String.prototype.toLowerCase,n=String.prototype.toUpperCase,r=String.prototype.replace,i=/e\+(\d)$/,o=/e-(\d)$/,a=/^(\d+)$/,s=/^(\d+)e/,u=/\.0$/,l=/\.0*e/,c=/(\..*[^0])0*e/;function f(d,p){var h,m;switch(p.specifier){case"e":case"E":m=d.toExponential(p.precision);break;case"f":case"F":m=d.toFixed(p.precision);break;case"g":case"G":e(d)<1e-4?(h=p.precision,h>0&&(h-=1),m=d.toExponential(h)):m=d.toPrecision(p.precision),p.alternate||(m=r.call(m,c,"$1e"),m=r.call(m,l,"e"),m=r.call(m,u,""));break;default:throw new Error("invalid double notation. Value: "+p.specifier)}return m=r.call(m,i,"e+0$1"),m=r.call(m,o,"e-0$1"),p.alternate&&(m=r.call(m,a,"$1."),m=r.call(m,s,"$1.e")),d>=0&&p.sign&&(m=p.sign+m),m=p.specifier===n.call(p.specifier)?n.call(m):t.call(m),m}return za=f,za}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja,Kv;function wC(){if(Kv)return Ja;Kv=1;function e(n){var r="",i;for(i=0;i<n;i++)r+=" ";return r}function t(n,r,i){var o=r-n.length;return o<0||(n=i?n+e(o):e(o)+n),n}return Ja=t,Ja}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa,Yv;function SC(){if(Yv)return Qa;Yv=1;var e=gC(),t=yC(),n=Z7(),r=EC(),i=wC(),o=ew(),a=String.fromCharCode,s=Array.isArray;function u(f){return f!==f}function l(f){var d={};return d.specifier=f.specifier,d.precision=f.precision===void 0?1:f.precision,d.width=f.width,d.flags=f.flags||"",d.mapping=f.mapping,d}function c(f){var d,p,h,m,v,_,b,y,g,E;if(!s(f))throw new TypeError("invalid argument. First argument must be an array. Value: `"+f+"`.");for(_="",b=1,g=0;g<f.length;g++)if(h=f[g],t(h))_+=h;else{if(d=h.precision!==void 0,h=l(h),!h.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+g+"`. Value: `"+h+"`.");for(h.mapping&&(b=h.mapping),p=h.flags,E=0;E<p.length;E++)switch(m=p.charAt(E),m){case" ":h.sign=" ";break;case"+":h.sign="+";break;case"-":h.padRight=!0,h.padZeros=!1;break;case"0":h.padZeros=p.indexOf("-")<0;break;case"#":h.alternate=!0;break;default:throw new Error("invalid flag: "+m)}if(h.width==="*"){if(h.width=parseInt(arguments[b],10),b+=1,u(h.width))throw new TypeError("the argument for * width at position "+b+" is not a number. Value: `"+h.width+"`.");h.width<0&&(h.padRight=!0,h.width=-h.width)}if(d&&h.precision==="*"){if(h.precision=parseInt(arguments[b],10),b+=1,u(h.precision))throw new TypeError("the argument for * precision at position "+b+" is not a number. Value: `"+h.precision+"`.");h.precision<0&&(h.precision=1,d=!1)}switch(h.arg=arguments[b],h.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":d&&(h.padZeros=!1),h.arg=e(h);break;case"s":h.maxWidth=d?h.precision:-1,h.arg=String(h.arg);break;case"c":if(!u(h.arg)){if(v=parseInt(h.arg,10),v<0||v>127)throw new Error("invalid character code. Value: "+h.arg);h.arg=u(v)?String(h.arg):a(v)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(d||(h.precision=6),y=parseFloat(h.arg),!isFinite(y)){if(!n(h.arg))throw new Error("invalid floating-point number. Value: "+_);y=h.arg,h.padZeros=!1}h.arg=r(y,h);break;default:throw new Error("invalid specifier: "+h.specifier)}h.maxWidth>=0&&h.arg.length>h.maxWidth&&(h.arg=h.arg.substring(0,h.maxWidth)),h.padZeros?h.arg=o(h.arg,h.width||h.precision,h.padRight):h.width&&(h.arg=i(h.arg,h.width,h.padRight)),_+=h.arg||"",b+=1}return _}return Qa=c,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Za,zv;function $C(){if(zv)return Za;zv=1;var e=SC();return Za=e,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var es,Jv;function AC(){if(Jv)return es;Jv=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function t(r){var i={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(i.precision="1"),i}function n(r){var i,o,a,s;for(o=[],s=0,a=e.exec(r);a;)i=r.slice(s,e.lastIndex-a[0].length),i.length&&o.push(i),a[6]==="%"?o.push("%"):o.push(t(a)),s=e.lastIndex,a=e.exec(r);return i=r.slice(s),i.length&&o.push(i),o}return es=n,es}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ts,Qv;function TC(){if(Qv)return ts;Qv=1;var e=AC();return ts=e,ts}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ns,Zv;function RC(){if(Zv)return ns;Zv=1;function e(t){return typeof t=="string"}return ns=e,ns}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rs,e3;function IC(){if(e3)return rs;e3=1;var e=$C(),t=TC(),n=RC();function r(i){var o,a;if(!n(i))throw new TypeError(r("invalid argument. First argument must be a string. Value: `%s`.",i));for(o=[t(i)],a=1;a<arguments.length;a++)o.push(arguments[a]);return e.apply(null,o)}return rs=r,rs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var is,t3;function LC(){if(t3)return is;t3=1;var e=IC();return is=e,is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var os,n3;function CC(){if(n3)return os;n3=1;var e=LC(),t=Object.prototype,n=t.toString,r=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,a=t.__lookupSetter__;function s(u,l,c){var f,d,p,h;if(typeof u!="object"||u===null||n.call(u)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",u));if(typeof c!="object"||c===null||n.call(c)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",c));if(d="value"in c,d&&(o.call(u,l)||a.call(u,l)?(f=u.__proto__,u.__proto__=t,delete u[l],u[l]=c.value,u.__proto__=f):u[l]=c.value),p="get"in c,h="set"in c,d&&(p||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&r&&r.call(u,l,c.get),h&&i&&i.call(u,l,c.set),u}return os=s,os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var as,r3;function kC(){if(r3)return as;r3=1;var e=_C(),t=bC(),n=CC(),r;return e()?r=t:r=n,as=r,as}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ss,i3;function NC(){if(i3)return ss;i3=1;var e=kC();function t(n,r,i){e(n,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}return ss=t,ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var us,o3;function ve(){if(o3)return us;o3=1;var e=NC();return us=e,us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ls,a3;function OC(){if(a3)return ls;a3=1;function e(t){return t!==t}return ls=e,ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cs,s3;function j(){if(s3)return cs;s3=1;var e=OC();return cs=e,cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fs,u3;function MC(){if(u3)return fs;u3=1;var e=Math.floor;return fs=e,fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ds,l3;function Be(){if(l3)return ds;l3=1;var e=MC();return ds=e,ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ps,c3;function DC(){if(c3)return ps;c3=1;var e=Math.ceil;return ps=e,ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hs,f3;function PC(){if(f3)return hs;f3=1;var e=DC();return hs=e,hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ms,d3;function FC(){if(d3)return ms;d3=1;var e=Be(),t=PC();function n(r){return r<0?t(r):e(r)}return ms=n,ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vs,p3;function ym(){if(p3)return vs;p3=1;var e=FC();return vs=e,vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _s,h3;function qC(){return h3||(h3=1,_s=Number),_s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs,m3;function BC(){if(m3)return bs;m3=1;var e=qC();return bs=e,bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs,v3;function _e(){if(v3)return gs;v3=1;var e=BC(),t=e.NEGATIVE_INFINITY;return gs=t,gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ys,_3;function se(){if(_3)return ys;_3=1;var e=Number.POSITIVE_INFINITY;return ys=e,ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Es,b3;function Wt(){if(b3)return Es;b3=1;var e=1023;return Es=e,Es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ws,g3;function HC(){if(g3)return ws;g3=1;var e=1023;return ws=e,ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ss,y3;function xC(){if(y3)return Ss;y3=1;var e=-1023;return Ss=e,Ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s,E3;function UC(){if(E3)return $s;E3=1;var e=-1074;return $s=e,$s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var As,w3;function GC(){if(w3)return As;w3=1;var e=se(),t=_e();function n(r){return r===e||r===t}return As=n,As}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ts,S3;function Rn(){if(S3)return Ts;S3=1;var e=GC();return Ts=e,Ts}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rs,$3;function WC(){if($3)return Rs;$3=1;var e=2147483648;return Rs=e,Rs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Is,A3;function Tt(){if(A3)return Is;A3=1;var e=2147483647;return Is=e,Is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ls,T3;function VC(){if(T3)return Ls;T3=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return Ls=e,Ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cs,R3;function XC(){if(R3)return Cs;R3=1;var e=VC();return Cs=e,Cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ks,I3;function jC(){if(I3)return ks;I3=1;var e=XC(),t=e();function n(){return t&&typeof Symbol.toStringTag=="symbol"}return ks=n,ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ns,L3;function KC(){if(L3)return Ns;L3=1;var e=jC();return Ns=e,Ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Os,C3;function tw(){if(C3)return Os;C3=1;var e=Object.prototype.toString;return Os=e,Os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ms,k3;function YC(){if(k3)return Ms;k3=1;var e=tw();function t(n){return e.call(n)}return Ms=t,Ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ds,N3;function zC(){if(N3)return Ds;N3=1;var e=Object.prototype.hasOwnProperty;function t(n,r){return n==null?!1:e.call(n,r)}return Ds=t,Ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ps,O3;function JC(){if(O3)return Ps;O3=1;var e=zC();return Ps=e,Ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fs,M3;function QC(){if(M3)return Fs;M3=1;var e=typeof Symbol=="function"?Symbol:void 0;return Fs=e,Fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qs,D3;function ZC(){if(D3)return qs;D3=1;var e=QC();return qs=e,qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bs,P3;function ek(){if(P3)return Bs;P3=1;var e=ZC(),t=typeof e=="function"?e.toStringTag:"";return Bs=t,Bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hs,F3;function tk(){if(F3)return Hs;F3=1;var e=JC(),t=ek(),n=tw();function r(i){var o,a,s;if(i==null)return n.call(i);a=i[t],o=e(i,t);try{i[t]=void 0}catch{return n.call(i)}return s=n.call(i),o?i[t]=a:delete i[t],s}return Hs=r,Hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xs,q3;function wo(){if(q3)return xs;q3=1;var e=KC(),t=YC(),n=tk(),r;return e()?r=n:r=t,xs=r,xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Us,B3;function nk(){if(B3)return Us;B3=1;var e=wo(),t=typeof Uint32Array=="function";function n(r){return t&&r instanceof Uint32Array||e(r)==="[object Uint32Array]"}return Us=n,Us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gs,H3;function rk(){if(H3)return Gs;H3=1;var e=nk();return Gs=e,Gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws,x3;function ik(){if(x3)return Ws;x3=1;var e=4294967295;return Ws=e,Ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vs,U3;function ok(){if(U3)return Vs;U3=1;var e=typeof Uint32Array=="function"?Uint32Array:null;return Vs=e,Vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xs,G3;function ak(){if(G3)return Xs;G3=1;var e=rk(),t=ik(),n=ok();function r(){var i,o;if(typeof n!="function")return!1;try{o=[1,3.14,-3.14,t+1,t+2],o=new n(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===t-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return Xs=r,Xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var js,W3;function sk(){if(W3)return js;W3=1;var e=ak();return js=e,js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ks,V3;function uk(){if(V3)return Ks;V3=1;var e=typeof Uint32Array=="function"?Uint32Array:void 0;return Ks=e,Ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ys,X3;function lk(){if(X3)return Ys;X3=1;function e(){throw new Error("not implemented")}return Ys=e,Ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs,j3;function In(){if(j3)return zs;j3=1;var e=sk(),t=uk(),n=lk(),r;return e()?r=t:r=n,zs=r,zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Js,K3;function ck(){if(K3)return Js;K3=1;var e=wo(),t=typeof Float64Array=="function";function n(r){return t&&r instanceof Float64Array||e(r)==="[object Float64Array]"}return Js=n,Js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qs,Y3;function fk(){if(Y3)return Qs;Y3=1;var e=ck();return Qs=e,Qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zs,z3;function dk(){if(z3)return Zs;z3=1;var e=typeof Float64Array=="function"?Float64Array:null;return Zs=e,Zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eu,J3;function pk(){if(J3)return eu;J3=1;var e=fk(),t=dk();function n(){var r,i;if(typeof t!="function")return!1;try{i=new t([1,3.14,-3.14,NaN]),r=e(i)&&i[0]===1&&i[1]===3.14&&i[2]===-3.14&&i[3]!==i[3]}catch{r=!1}return r}return eu=n,eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tu,Q3;function hk(){if(Q3)return tu;Q3=1;var e=pk();return tu=e,tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nu,Z3;function mk(){if(Z3)return nu;Z3=1;var e=typeof Float64Array=="function"?Float64Array:void 0;return nu=e,nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ru,e_;function vk(){if(e_)return ru;e_=1;function e(){throw new Error("not implemented")}return ru=e,ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iu,t_;function Ln(){if(t_)return iu;t_=1;var e=hk(),t=mk(),n=vk(),r;return e()?r=t:r=n,iu=r,iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ou,n_;function _k(){if(n_)return ou;n_=1;var e=wo(),t=typeof Uint8Array=="function";function n(r){return t&&r instanceof Uint8Array||e(r)==="[object Uint8Array]"}return ou=n,ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var au,r_;function bk(){if(r_)return au;r_=1;var e=_k();return au=e,au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su,i_;function gk(){if(i_)return su;i_=1;var e=255;return su=e,su}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uu,o_;function yk(){if(o_)return uu;o_=1;var e=typeof Uint8Array=="function"?Uint8Array:null;return uu=e,uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,a_;function Ek(){if(a_)return lu;a_=1;var e=bk(),t=gk(),n=yk();function r(){var i,o;if(typeof n!="function")return!1;try{o=[1,3.14,-3.14,t+1,t+2],o=new n(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===t-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return lu=r,lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cu,s_;function wk(){if(s_)return cu;s_=1;var e=Ek();return cu=e,cu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu,u_;function Sk(){if(u_)return fu;u_=1;var e=typeof Uint8Array=="function"?Uint8Array:void 0;return fu=e,fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var du,l_;function $k(){if(l_)return du;l_=1;function e(){throw new Error("not implemented")}return du=e,du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pu,c_;function Ak(){if(c_)return pu;c_=1;var e=wk(),t=Sk(),n=$k(),r;return e()?r=t:r=n,pu=r,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hu,f_;function Tk(){if(f_)return hu;f_=1;var e=wo(),t=typeof Uint16Array=="function";function n(r){return t&&r instanceof Uint16Array||e(r)==="[object Uint16Array]"}return hu=n,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mu,d_;function Rk(){if(d_)return mu;d_=1;var e=Tk();return mu=e,mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,p_;function Ik(){if(p_)return vu;p_=1;var e=65535;return vu=e,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u,h_;function Lk(){if(h_)return _u;h_=1;var e=typeof Uint16Array=="function"?Uint16Array:null;return _u=e,_u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bu,m_;function Ck(){if(m_)return bu;m_=1;var e=Rk(),t=Ik(),n=Lk();function r(){var i,o;if(typeof n!="function")return!1;try{o=[1,3.14,-3.14,t+1,t+2],o=new n(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===t-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return bu=r,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gu,v_;function kk(){if(v_)return gu;v_=1;var e=Ck();return gu=e,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yu,__;function Nk(){if(__)return yu;__=1;var e=typeof Uint16Array=="function"?Uint16Array:void 0;return yu=e,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu,b_;function Ok(){if(b_)return Eu;b_=1;function e(){throw new Error("not implemented")}return Eu=e,Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wu,g_;function Mk(){if(g_)return wu;g_=1;var e=kk(),t=Nk(),n=Ok(),r;return e()?r=t:r=n,wu=r,wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Su,y_;function Dk(){if(y_)return Su;y_=1;var e=Ak(),t=Mk(),n={uint16:t,uint8:e};return Su=n,Su}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $u,E_;function Pk(){if(E_)return $u;E_=1;var e=Dk(),t;function n(){var r,i;return r=new e.uint16(1),r[0]=4660,i=new e.uint8(r.buffer),i[0]===52}return t=n(),$u=t,$u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Au,w_;function Cn(){if(w_)return Au;w_=1;var e=Pk();return Au=e,Au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tu,S_;function Fk(){if(S_)return Tu;S_=1;var e=Cn(),t,n,r;return e===!0?(n=1,r=0):(n=0,r=1),t={HIGH:n,LOW:r},Tu=t,Tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ru,$_;function nw(){if($_)return Ru;$_=1;var e=In(),t=Ln(),n=Fk(),r=new t(1),i=new e(r.buffer),o=n.HIGH,a=n.LOW;function s(u,l,c,f){return r[0]=u,l[f]=i[o],l[f+c]=i[a],l}return Ru=s,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu,A_;function qk(){if(A_)return Iu;A_=1;var e=nw();function t(n){return e(n,[0,0],1,0)}return Iu=t,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lu,T_;function Em(){if(T_)return Lu;T_=1;var e=ve(),t=qk(),n=nw();return e(t,"assign",n),Lu=t,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cu,R_;function Bk(){if(R_)return Cu;R_=1;var e=Cn(),t;return e===!0?t=1:t=0,Cu=t,Cu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ku,I_;function Hk(){if(I_)return ku;I_=1;var e=In(),t=Ln(),n=Bk(),r=new t(1),i=new e(r.buffer);function o(a){return r[0]=a,i[n]}return ku=o,ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu,L_;function $e(){if(L_)return Nu;L_=1;var e=Hk();return Nu=e,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ou,C_;function xk(){if(C_)return Ou;C_=1;var e=Cn(),t,n,r;return e===!0?(n=1,r=0):(n=0,r=1),t={HIGH:n,LOW:r},Ou=t,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mu,k_;function Uk(){if(k_)return Mu;k_=1;var e=In(),t=Ln(),n=xk(),r=new t(1),i=new e(r.buffer),o=n.HIGH,a=n.LOW;function s(u,l){return i[o]=u,i[a]=l,r[0]}return Mu=s,Mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Du,N_;function So(){if(N_)return Du;N_=1;var e=Uk();return Du=e,Du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pu,O_;function Gk(){if(O_)return Pu;O_=1;var e=WC(),t=Tt(),n=Em(),r=$e(),i=So(),o=[0,0];function a(s,u){var l,c;return n.assign(s,o,1,0),l=o[0],l&=t,c=r(u),c&=e,l|=c,i(l,o[1])}return Pu=a,Pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fu,M_;function wm(){if(M_)return Fu;M_=1;var e=Gk();return Fu=e,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qu,D_;function Vt(){if(D_)return qu;D_=1;var e=22250738585072014e-324;return qu=e,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bu,P_;function Wk(){if(P_)return Bu;P_=1;function e(t){return Math.abs(t)}return Bu=e,Bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu,F_;function Z(){if(F_)return Hu;F_=1;var e=Wk();return Hu=e,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu,q_;function rw(){if(q_)return xu;q_=1;var e=Vt(),t=Rn(),n=j(),r=Z(),i=4503599627370496;function o(a,s,u,l){return n(a)||t(a)?(s[l]=a,s[l+u]=0,s):a!==0&&r(a)<e?(s[l]=a*i,s[l+u]=-52,s):(s[l]=a,s[l+u]=0,s)}return xu=o,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,B_;function Vk(){if(B_)return Uu;B_=1;var e=rw();function t(n){return e(n,[0,0],1,0)}return Uu=t,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu,H_;function Xk(){if(H_)return Gu;H_=1;var e=ve(),t=Vk(),n=rw();return e(t,"assign",n),Gu=t,Gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,x_;function Nr(){if(x_)return Wu;x_=1;var e=2146435072;return Wu=e,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vu,U_;function jk(){if(U_)return Vu;U_=1;var e=$e(),t=Nr(),n=Wt();function r(i){var o=e(i);return o=(o&t)>>>20,o-n|0}return Vu=r,Vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,G_;function Kk(){if(G_)return Xu;G_=1;var e=jk();return Xu=e,Xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,W_;function Yk(){if(W_)return ju;W_=1;var e=se(),t=_e(),n=Wt(),r=HC(),i=xC(),o=UC(),a=j(),s=Rn(),u=wm(),l=Xk().assign,c=Kk(),f=Em(),d=So(),p=2220446049250313e-31,h=2148532223,m=[0,0],v=[0,0];function _(b,y){var g,E;return y===0||b===0||a(b)||s(b)?b:(l(b,m,1,0),b=m[0],y+=m[1],y+=c(b),y<o?u(0,b):y>r?b<0?t:e:(y<=i?(y+=52,E=p):E=1,f.assign(b,v,1,0),g=v[0],g&=h,g|=y+n<<20,E*d(g,v[1])))}return ju=_,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,V_;function kn(){if(V_)return Ku;V_=1;var e=Yk();return Ku=e,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yu,X_;function zk(){if(X_)return Yu;X_=1;function e(t){return t===0?.16666666666666602:.16666666666666602+t*(-.0027777777777015593+t*(6613756321437934e-20+t*(-16533902205465252e-22+t*41381367970572385e-24)))}return Yu=e,Yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var zu,j_;function Jk(){if(j_)return zu;j_=1;var e=kn(),t=zk();function n(r,i,o){var a,s,u,l;return a=r-i,s=a*a,u=a-s*t(s),l=1-(i-a*u/(2-u)-r),e(l,o)}return zu=n,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Ju,K_;function Qk(){if(K_)return Ju;K_=1;var e=j(),t=ym(),n=_e(),r=se(),i=Jk(),o=.6931471803691238,a=19082149292705877e-26,s=1.4426950408889634,u=709.782712893384,l=-745.1332191019411,c=1/(1<<28),f=-c;function d(p){var h,m,v;return e(p)||p===r?p:p===n?0:p>u?r:p<l?0:p>f&&p<c?1+p:(p<0?v=t(s*p-.5):v=t(s*p+.5),h=p-v*o,m=v*a,i(h,m,v))}return Ju=d,Ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,Y_;function ue(){if(Y_)return Qu;Y_=1;var e=Qk();return Qu=e,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,z_;function Zk(){if(z_)return Zu;z_=1;var e=Cn(),t;return e===!0?t=0:t=1,Zu=t,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var el,J_;function eN(){if(J_)return el;J_=1;var e=In(),t=Ln(),n=Zk(),r=new t(1),i=new e(r.buffer);function o(a,s){return r[0]=a,i[n]=s>>>0,r[0]}return el=o,el}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tl,Q_;function Nn(){if(Q_)return tl;Q_=1;var e=eN();return tl=e,tl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nl,Z_;function tN(){if(Z_)return nl;Z_=1;function e(t){return t===0?-.3250421072470015:-.3250421072470015+t*(-.02848174957559851+t*(-.005770270296489442+t*-23763016656650163e-21))}return nl=e,nl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rl,e6;function nN(){if(e6)return rl;e6=1;function e(t){return t===0?.39791722395915535:.39791722395915535+t*(.0650222499887673+t*(.005081306281875766+t*(.00013249473800432164+t*-3960228278775368e-21)))}return rl=e,rl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var il,t6;function rN(){if(t6)return il;t6=1;function e(t){return t===0?.41485611868374833:.41485611868374833+t*(-.3722078760357013+t*(.31834661990116175+t*(-.11089469428239668+t*(.035478304325618236+t*-.002166375594868791))))}return il=e,il}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ol,n6;function iN(){if(n6)return ol;n6=1;function e(t){return t===0?.10642088040084423:.10642088040084423+t*(.540397917702171+t*(.07182865441419627+t*(.12617121980876164+t*(.01363708391202905+t*.011984499846799107))))}return ol=e,ol}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var al,r6;function oN(){if(r6)return al;r6=1;function e(t){return t===0?-.6938585727071818:-.6938585727071818+t*(-10.558626225323291+t*(-62.375332450326006+t*(-162.39666946257347+t*(-184.60509290671104+t*(-81.2874355063066+t*-9.814329344169145)))))}return al=e,al}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sl,i6;function aN(){if(i6)return sl;i6=1;function e(t){return t===0?19.651271667439257:19.651271667439257+t*(137.65775414351904+t*(434.56587747522923+t*(645.3872717332679+t*(429.00814002756783+t*(108.63500554177944+t*(6.570249770319282+t*-.0604244152148581))))))}return sl=e,sl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ul,o6;function sN(){if(o6)return ul;o6=1;function e(t){return t===0?-.799283237680523:-.799283237680523+t*(-17.757954917754752+t*(-160.63638485582192+t*(-637.5664433683896+t*(-1025.0951316110772+t*-483.5191916086514))))}return ul=e,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll,a6;function uN(){if(a6)return ll;a6=1;function e(t){return t===0?30.33806074348246:30.33806074348246+t*(325.7925129965739+t*(1536.729586084437+t*(3199.8582195085955+t*(2553.0504064331644+t*(474.52854120695537+t*-22.44095244658582)))))}return ll=e,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_erf.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var cl,s6;function lN(){if(s6)return cl;s6=1;var e=j(),t=ue(),n=Nn(),r=se(),i=_e(),o=tN(),a=nN(),s=rN(),u=iN(),l=oN(),c=aN(),f=sN(),d=uN(),p=1e-300,h=13877787807814457e-33,m=.8450629115104675,v=.12837916709551256,_=1,b=-.0023621185607526594,y=1,g=-.009864944034847148,E=1,A=-.0098649429247001,$=1;function C(I){var T,S,w,R,L,O,k,P;if(e(I))return NaN;if(I===r)return 0;if(I===i)return 2;if(I===0)return 1;if(I<0?(T=!0,S=-I):(T=!1,S=I),S<.84375)return S<h?1-I:(w=I*I,R=v+w*o(w),L=_+w*a(w),O=R/L,I<.25?1-(I+I*O):(R=I*O,R+=I-.5,.5-R));if(S<1.25)return L=S-1,k=b+L*s(L),P=y+L*u(L),T?1+m+k/P:1-m-k/P;if(S<28){if(L=1/(S*S),S<2.857142857142857)R=g+L*l(L),L=E+L*c(L);else{if(I<-6)return 2-p;R=A+L*f(L),L=$+L*d(L)}return w=n(S,0),R=t(-(w*w)-.5625)*t((w-S)*(w+S)+R/L),T?2-R/S:R/S}return T?2-p:p*p}return cl=C,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fl,u6;function $o(){if(u6)return fl;u6=1;var e=lN();return fl=e,fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dl,l6;function cN(){if(l6)return dl;l6=1;var e=Math.sqrt;return dl=e,dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pl,c6;function ee(){if(c6)return pl;c6=1;var e=cN();return pl=e,pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hl,f6;function fN(){if(f6)return hl;f6=1;var e=$o(),t=ee(),n=j();function r(i,o,a){var s,u;return n(i)||n(o)||n(a)||a<0?NaN:a===0?i<o?0:1:(s=a*t(2),u=i-o,.5*e(-u/s))}return hl=r,hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ml,d6;function dN(){if(d6)return ml;d6=1;function e(t){return n;function n(){return t}}return ml=e,ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vl,p6;function Ne(){if(p6)return vl;p6=1;var e=dN();return vl=e,vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _l,h6;function pN(){if(h6)return _l;h6=1;var e=j();function t(n,r){return e(n)||e(r)?NaN:n<r?0:1}return _l=t,_l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bl,m6;function hN(){if(m6)return bl;m6=1;var e=Ne(),t=j();function n(r){if(t(r))return e(NaN);return i;function i(o){return t(o)?NaN:o<r?0:1}}return bl=n,bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gl,v6;function mN(){if(v6)return gl;v6=1;var e=ve(),t=pN(),n=hN();return e(t,"factory",n),gl=t,gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yl,_6;function vN(){if(_6)return yl;_6=1;var e=Ne(),t=mN().factory,n=j(),r=ee(),i=$o();function o(a,s){var u;if(n(a)||n(s)||s<0)return e(NaN);if(s===0)return t(a);return u=s*r(2),l;function l(c){var f;return n(c)?NaN:(f=c-a,.5*i(-f/u))}}return yl=o,yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var El,b6;function _N(){if(b6)return El;b6=1;var e=ve(),t=fN(),n=vN();return e(t,"factory",n),El=t,El}var bN=_N();const Sm=Ye(bN);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wl,g6;function gN(){if(g6)return wl;g6=1;var e=Cn(),t;return e===!0?t=1:t=0,wl=t,wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sl,y6;function yN(){if(y6)return Sl;y6=1;var e=In(),t=Ln(),n=gN(),r=new t(1),i=new e(r.buffer);function o(a,s){return r[0]=a,i[n]=s>>>0,r[0]}return Sl=o,Sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $l,E6;function Or(){if(E6)return $l;E6=1;var e=yN();return $l=e,$l}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Al,w6;function EN(){if(w6)return Al;w6=1;function e(t){return t===0?.3999999999940942:.3999999999940942+t*(.22222198432149784+t*.15313837699209373)}return Al=e,Al}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tl,S6;function wN(){if(S6)return Tl;S6=1;function e(t){return t===0?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+t*.14798198605116586))}return Tl=e,Tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Rl,$6;function SN(){if($6)return Rl;$6=1;var e=$e(),t=Or(),n=j(),r=Wt(),i=_e(),o=EN(),a=wN(),s=.6931471803691238,u=19082149292705877e-26,l=0x40000000000000,c=.3333333333333333,f=1048575,d=2146435072,p=1048576,h=1072693248;function m(v){var _,b,y,g,E,A,$,C,I,T,S,w;return v===0?i:n(v)||v<0?NaN:(b=e(v),E=0,b<p&&(E-=54,v*=l,b=e(v)),b>=d?v+v:(E+=(b>>20)-r|0,b&=f,C=b+614244&1048576|0,v=t(v,b|C^h),E+=C>>20|0,$=v-1,(f&2+b)<3?$===0?E===0?0:E*s+E*u:(A=$*$*(.5-c*$),E===0?$-A:E*s-(A-E*u-$)):(T=$/(2+$),w=T*T,C=b-398458|0,S=w*w,I=440401-b|0,g=S*o(S),y=w*a(S),C|=I,A=y+g,C>0?(_=.5*$*$,E===0?$-(_-T*(_+A)):E*s-(_-(T*(_+A)+E*u)-$)):E===0?$-T*($-A):E*s-(T*($-A)-E*u-$))))}return Rl=m,Rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Il,A6;function re(){if(A6)return Il;A6=1;var e=SN();return Il=e,Il}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ll,T6;function $N(){if(T6)return Ll;T6=1;function e(t){var n,r,i;return t===0?-.0005087819496582806:(t<0?n=-t:n=t,n<=1?(r=-.0005087819496582806+t*(-.008368748197417368+t*(.03348066254097446+t*(-.012692614766297404+t*(-.03656379714117627+t*(.02198786811111689+t*(.008226878746769157+t*(-.005387729650712429+t*(0+t*0)))))))),i=1+t*(-.9700050433032906+t*(-1.5657455823417585+t*(1.5622155839842302+t*(.662328840472003+t*(-.7122890234154284+t*(-.05273963823400997+t*(.07952836873415717+t*(-.0023339375937419+t*.0008862163904564247))))))))):(t=1/t,r=0+t*(0+t*(-.005387729650712429+t*(.008226878746769157+t*(.02198786811111689+t*(-.03656379714117627+t*(-.012692614766297404+t*(.03348066254097446+t*(-.008368748197417368+t*-.0005087819496582806)))))))),i=.0008862163904564247+t*(-.0023339375937419+t*(.07952836873415717+t*(-.05273963823400997+t*(-.7122890234154284+t*(.662328840472003+t*(1.5622155839842302+t*(-1.5657455823417585+t*(-.9700050433032906+t*1))))))))),r/i)}return Ll=e,Ll}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cl,R6;function AN(){if(R6)return Cl;R6=1;function e(t){var n,r,i;return t===0?-.20243350835593876:(t<0?n=-t:n=t,n<=1?(r=-.20243350835593876+t*(.10526468069939171+t*(8.3705032834312+t*(17.644729840837403+t*(-18.851064805871424+t*(-44.6382324441787+t*(17.445385985570866+t*(21.12946554483405+t*-3.6719225470772936))))))),i=1+t*(6.242641248542475+t*(3.971343795334387+t*(-28.66081804998+t*(-20.14326346804852+t*(48.560921310873994+t*(10.826866735546016+t*(-22.643693341313973+t*1.7211476576120028)))))))):(t=1/t,r=-3.6719225470772936+t*(21.12946554483405+t*(17.445385985570866+t*(-44.6382324441787+t*(-18.851064805871424+t*(17.644729840837403+t*(8.3705032834312+t*(.10526468069939171+t*-.20243350835593876))))))),i=1.7211476576120028+t*(-22.643693341313973+t*(10.826866735546016+t*(48.560921310873994+t*(-20.14326346804852+t*(-28.66081804998+t*(3.971343795334387+t*(6.242641248542475+t*1)))))))),r/i)}return Cl=e,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kl,I6;function TN(){if(I6)return kl;I6=1;function e(t){var n,r,i;return t===0?-.1311027816799519:(t<0?n=-t:n=t,n<=1?(r=-.1311027816799519+t*(-.16379404719331705+t*(.11703015634199525+t*(.38707973897260434+t*(.3377855389120359+t*(.14286953440815717+t*(.029015791000532906+t*(.0021455899538880526+t*(-6794655751811263e-22+t*(28522533178221704e-24+t*-681149956853777e-24))))))))),i=1+t*(3.4662540724256723+t*(5.381683457070069+t*(4.778465929458438+t*(2.5930192162362027+t*(.848854343457902+t*(.15226433829533179+t*(.011059242293464892+t*(0+t*(0+t*0)))))))))):(t=1/t,r=-681149956853777e-24+t*(28522533178221704e-24+t*(-6794655751811263e-22+t*(.0021455899538880526+t*(.029015791000532906+t*(.14286953440815717+t*(.3377855389120359+t*(.38707973897260434+t*(.11703015634199525+t*(-.16379404719331705+t*-.1311027816799519))))))))),i=0+t*(0+t*(0+t*(.011059242293464892+t*(.15226433829533179+t*(.848854343457902+t*(2.5930192162362027+t*(4.778465929458438+t*(5.381683457070069+t*(3.4662540724256723+t*1)))))))))),r/i)}return kl=e,kl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nl,L6;function RN(){if(L6)return Nl;L6=1;function e(t){var n,r,i;return t===0?-.0350353787183178:(t<0?n=-t:n=t,n<=1?(r=-.0350353787183178+t*(-.0022242652921344794+t*(.018557330651423107+t*(.009508047013259196+t*(.0018712349281955923+t*(.00015754461742496055+t*(460469890584318e-20+t*(-2304047769118826e-25+t*26633922742578204e-28))))))),i=1+t*(1.3653349817554064+t*(.7620591645536234+t*(.22009110576413124+t*(.03415891436709477+t*(.00263861676657016+t*(7646752923027944e-20+t*(0+t*0)))))))):(t=1/t,r=26633922742578204e-28+t*(-2304047769118826e-25+t*(460469890584318e-20+t*(.00015754461742496055+t*(.0018712349281955923+t*(.009508047013259196+t*(.018557330651423107+t*(-.0022242652921344794+t*-.0350353787183178))))))),i=0+t*(0+t*(7646752923027944e-20+t*(.00263861676657016+t*(.03415891436709477+t*(.22009110576413124+t*(.7620591645536234+t*(1.3653349817554064+t*1)))))))),r/i)}return Nl=e,Nl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ol,C6;function IN(){if(C6)return Ol;C6=1;function e(t){var n,r,i;return t===0?-.016743100507663373:(t<0?n=-t:n=t,n<=1?(r=-.016743100507663373+t*(-.0011295143874558028+t*(.001056288621524929+t*(.00020938631748758808+t*(14962478375834237e-21+t*(44969678992770644e-23+t*(4625961635228786e-24+t*(-2811287356288318e-29+t*9905570997331033e-32))))))),i=1+t*(.5914293448864175+t*(.1381518657490833+t*(.016074608709367652+t*(.0009640118070051656+t*(27533547476472603e-21+t*(282243172016108e-21+t*(0+t*0)))))))):(t=1/t,r=9905570997331033e-32+t*(-2811287356288318e-29+t*(4625961635228786e-24+t*(44969678992770644e-23+t*(14962478375834237e-21+t*(.00020938631748758808+t*(.001056288621524929+t*(-.0011295143874558028+t*-.016743100507663373))))))),i=0+t*(0+t*(282243172016108e-21+t*(27533547476472603e-21+t*(.0009640118070051656+t*(.016074608709367652+t*(.1381518657490833+t*(.5914293448864175+t*1)))))))),r/i)}return Ol=e,Ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_48_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ml,k6;function LN(){if(k6)return Ml;k6=1;var e=j(),t=ee(),n=re(),r=se(),i=_e(),o=$N(),a=AN(),s=TN(),u=RN(),l=IN(),c=.08913147449493408,f=2.249481201171875,d=.807220458984375,p=.9399557113647461,h=.9836282730102539;function m(v){var _,b,y,g,E,A;return e(v)?NaN:v===1?r:v===-1?i:v===0?v:v>1||v<-1?NaN:(v<0?(_=-1,b=-v):(_=1,b=v),g=1-b,b<=.5?(E=b*(b+10),A=o(b),_*(E*c+E*A)):g>=.25?(E=t(-2*n(g)),g-=.25,A=a(g),_*(E/(f+A))):(g=t(-n(g)),g<3?(y=g-1.125,A=s(y),_*(d*g+A*g)):g<6?(y=g-3,A=u(y),_*(p*g+A*g)):(y=g-6,A=l(y),_*(h*g+A*g))))}return Ml=m,Ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dl,N6;function iw(){if(N6)return Dl;N6=1;var e=LN();return Dl=e,Dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pl,O6;function CN(){if(O6)return Pl;O6=1;var e=iw(),t=j(),n=ee();function r(i,o,a){var s,u;return t(o)||t(a)||t(i)||a<0||i<0||i>1?NaN:a===0?o:(s=o,u=a*n(2),s+u*e(2*i-1))}return Pl=r,Pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fl,M6;function kN(){if(M6)return Fl;M6=1;var e=j();function t(n,r){return e(n)||n<0||n>1?NaN:r}return Fl=t,Fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ql,D6;function NN(){if(D6)return ql;D6=1;var e=Ne(),t=j();function n(r){if(t(r))return e(NaN);return i;function i(o){return t(o)||o<0||o>1?NaN:r}}return ql=n,ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bl,P6;function ON(){if(P6)return Bl;P6=1;var e=ve(),t=kN(),n=NN();return e(t,"factory",n),Bl=t,Bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hl,F6;function MN(){if(F6)return Hl;F6=1;var e=Ne(),t=ON().factory,n=iw(),r=j(),i=ee();function o(a,s){var u,l;if(r(a)||r(s)||s<0)return e(NaN);return s===0&&t(a),u=a,l=s*i(2),c;function c(f){return r(f)||f<0||f>1?NaN:u+l*n(2*f-1)}}return Hl=o,Hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xl,q6;function DN(){if(q6)return xl;q6=1;var e=ve(),t=CN(),n=MN();return e(t,"factory",n),xl=t,xl}var PN=DN();const Si=Ye(PN);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ul,B6;function FN(){if(B6)return Ul;B6=1;function e(t){return t===0?.13333333333320124:.13333333333320124+t*(.021869488294859542+t*(.0035920791075913124+t*(.0005880412408202641+t*(7817944429395571e-20+t*-18558637485527546e-21))))}return Ul=e,Ul}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gl,H6;function qN(){if(H6)return Gl;H6=1;function e(t){return t===0?.05396825397622605:.05396825397622605+t*(.0088632398235993+t*(.0014562094543252903+t*(.0002464631348184699+t*(7140724913826082e-20+t*2590730518636337e-20))))}return Gl=e,Gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_tan.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Wl,x6;function BN(){if(x6)return Wl;x6=1;var e=$e(),t=Nn(),n=FN(),r=qN(),i=.7853981633974483,o=3061616997868383e-32,a=.3333333333333341,s=2147483647;function u(l,c,f){var d,p,h,m,v,_,b,y,g;return d=e(l),p=d&s|0,p>=1072010280&&(l<0&&(l=-l,c=-c),g=i-l,y=o-c,l=g+y,c=0),g=l*l,y=g*g,m=n(y),b=g*r(y),v=g*l,m=c+g*(v*(m+b)+c),m+=a*v,y=l+m,p>=1072010280?(b=f,(1-(d>>30&2))*(b-2*(l-(y*y/(y+b)-m)))):f===1?y:(g=t(y,0),b=m-(g-l),h=-1/y,_=t(h,0),v=1+_*g,_+h*(v+_*b))}return Wl=u,Wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vl,U6;function HN(){if(U6)return Vl;U6=1;var e=BN();return Vl=e,Vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xl,G6;function ow(){if(G6)return Xl;G6=1;var e=1048575;return Xl=e,Xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jl,W6;function xN(){if(W6)return jl;W6=1;var e=Cn(),t;return e===!0?t=0:t=1,jl=t,jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kl,V6;function UN(){if(V6)return Kl;V6=1;var e=In(),t=Ln(),n=xN(),r=new t(1),i=new e(r.buffer);function o(a){return r[0]=a,i[n]}return Kl=o,Kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yl,X6;function GN(){if(X6)return Yl;X6=1;var e=UN();return Yl=e,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zl,j6;function WN(){if(j6)return zl;j6=1;function e(t,n){var r,i;for(r=[],i=0;i<n;i++)r.push(t);return r}return zl=e,zl}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jl,K6;function VN(){if(K6)return Jl;K6=1;var e=WN();return Jl=e,Jl}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ql,Y6;function XN(){if(Y6)return Ql;Y6=1;var e=VN();function t(n){return e(0,n)}return Ql=t,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zl,z6;function jN(){if(z6)return Zl;z6=1;var e=XN();return Zl=e,Zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var ec,J6;function KN(){if(J6)return ec;J6=1;var e=Be(),t=kn(),n=jN(),r=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],i=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],o=16777216,a=5960464477539063e-23,s=n(20),u=n(20),l=n(20),c=n(20);function f(p,h,m,v,_,b,y,g,E){var A,$,C,I,T,S,w,R,L;for(I=b,L=v[m],R=m,T=0;R>0;T++)$=a*L|0,c[T]=L-o*$|0,L=v[R-1]+$,R-=1;if(L=t(L,_),L-=8*e(L*.125),w=L|0,L-=w,C=0,_>0?(T=c[m-1]>>24-_,w+=T,c[m-1]-=T<<24-_,C=c[m-1]>>23-_):_===0?C=c[m-1]>>23:L>=.5&&(C=2),C>0){for(w+=1,A=0,T=0;T<m;T++)R=c[T],A===0?R!==0&&(A=1,c[T]=16777216-R):c[T]=16777215-R;if(_>0)switch(_){case 1:c[m-1]&=8388607;break;case 2:c[m-1]&=4194303;break}C===2&&(L=1-L,A!==0&&(L-=t(1,_)))}if(L===0){for(R=0,T=m-1;T>=b;T--)R|=c[T];if(R===0){for(S=1;c[b-S]===0;S++);for(T=m+1;T<=m+S;T++){for(E[g+T]=r[y+T],$=0,R=0;R<=g;R++)$+=p[R]*E[g+(T-R)];v[T]=$}return m+=S,f(p,h,m,v,_,b,y,g,E)}for(m-=1,_-=24;c[m]===0;)m-=1,_-=24}else L=t(L,-_),L>=o?($=a*L|0,c[m]=L-o*$|0,m+=1,_+=24,c[m]=$):c[m]=L|0;for($=t(1,_),T=m;T>=0;T--)v[T]=$*c[T],$*=a;for(T=m;T>=0;T--){for($=0,S=0;S<=I&&S<=m-T;S++)$+=i[S]*v[T+S];l[m-T]=$}for($=0,T=m;T>=0;T--)$+=l[T];for(C===0?h[0]=$:h[0]=-$,$=l[0]-$,T=1;T<=m;T++)$+=l[T];return C===0?h[1]=$:h[1]=-$,w&7}function d(p,h,m,v){var _,b,y,g,E,A,$,C,I;for(b=4,g=v-1,y=(m-3)/24|0,y<0&&(y=0),A=m-24*(y+1),C=y-g,I=g+b,$=0;$<=I;$++)C<0?s[$]=0:s[$]=r[C],C+=1;for($=0;$<=b;$++){for(_=0,C=0;C<=g;C++)_+=p[C]*s[g+($-C)];u[$]=_}return E=b,f(p,h,E,u,A,b,y,g,s)}return ec=d,ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tc,Q6;function YN(){if(Q6)return tc;Q6=1;var e=Math.round;return tc=e,tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nc,Z6;function aw(){if(Z6)return nc;Z6=1;var e=YN();return nc=e,nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var rc,eb;function zN(){if(eb)return rc;eb=1;var e=aw(),t=$e(),n=.6366197723675814,r=1.5707963267341256,i=6077100506506192e-26,o=6077100506303966e-26,a=20222662487959506e-37,s=20222662487111665e-37,u=84784276603689e-45,l=2047;function c(f,d,p){var h,m,v,_,b,y,g;return m=e(f*n),_=f-m*r,b=m*i,g=d>>20|0,p[0]=_-b,h=t(p[0]),y=g-(h>>20&l),y>16&&(v=_,b=m*o,_=v-b,b=m*a-(v-_-b),p[0]=_-b,h=t(p[0]),y=g-(h>>20&l),y>49&&(v=_,b=m*s,_=v-b,b=m*u-(v-_-b),p[0]=_-b)),p[1]=_-p[0]-b,m}return rc=c,rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/var ic,tb;function JN(){if(tb)return ic;tb=1;var e=Tt(),t=Nr(),n=ow(),r=$e(),i=GN(),o=So(),a=KN(),s=zN(),u=0,l=16777216,c=1.5707963267341256,f=6077100506506192e-26,d=2*f,p=3*f,h=4*f,m=598523,v=1072243195,_=1073928572,b=1074752122,y=1074977148,g=1075183036,E=1075388923,A=1075594811,$=1094263291,C=[0,0,0],I=[0,0];function T(S,w){var R,L,O,k,P,M,D,N;if(O=r(S)|0,k=O&e|0,k<=v)return w[0]=S,w[1]=0,0;if(k<=b)return(k&n)===m?s(S,k,w):k<=_?O>0?(N=S-c,w[0]=N-f,w[1]=N-w[0]-f,1):(N=S+c,w[0]=N+f,w[1]=N-w[0]+f,-1):O>0?(N=S-2*c,w[0]=N-d,w[1]=N-w[0]-d,2):(N=S+2*c,w[0]=N+d,w[1]=N-w[0]+d,-2);if(k<=A)return k<=g?k===y?s(S,k,w):O>0?(N=S-3*c,w[0]=N-p,w[1]=N-w[0]-p,3):(N=S+3*c,w[0]=N+p,w[1]=N-w[0]+p,-3):k===E?s(S,k,w):O>0?(N=S-4*c,w[0]=N-h,w[1]=N-w[0]-h,4):(N=S+4*c,w[0]=N+h,w[1]=N-w[0]+h,-4);if(k<$)return s(S,k,w);if(k>=t)return w[0]=NaN,w[1]=NaN,0;for(R=i(S),L=(k>>20)-1046,N=o(k-(L<<20|0),R),M=0;M<2;M++)C[M]=N|0,N=(N-C[M])*l;for(C[2]=N,P=3;C[P-1]===u;)P-=1;return D=a(C,I,L,P,1),O<0?(w[0]=-I[0],w[1]=-I[1],-D):(w[0]=I[0],w[1]=I[1],D)}return ic=T,ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oc,nb;function $m(){if(nb)return oc;nb=1;var e=JN();return oc=e,oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_tan.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var ac,rb;function QN(){if(rb)return ac;rb=1;var e=$e(),t=HN(),n=$m(),r=Tt(),i=Nr(),o=[0,0],a=1072243195,s=1044381696;function u(l){var c,f;return c=e(l),c&=r,c<=a?c<s?l:t(l,0,1):c>=i?NaN:(f=n(l,o),t(o[0],o[1],1-((f&1)<<1)))}return ac=u,ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sc,ib;function ZN(){if(ib)return sc;ib=1;var e=QN();return sc=e,sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uc,ob;function ht(){if(ob)return uc;ob=1;var e=3.141592653589793;return uc=e,uc}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lc,ab;function eO(){if(ab)return lc;ab=1;function e(t){return t===0?.08333333333333333:.08333333333333333+t*(-.008333333333333333+t*(.003968253968253968+t*(-.004166666666666667+t*(.007575757575757576+t*(-.021092796092796094+t*(.08333333333333333+t*-.4432598039215686))))))}return lc=e,lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_53_0/libs/math/doc/sf_and_dist/html/math_toolkit/special/sf_gamma/digamma.html}. The implementation follows the original but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var cc,sb;function tO(){if(sb)return cc;sb=1;var e=re(),t=eO();function n(r){var i,o;return r-=1,i=e(r)+1/(2*r),o=1/(r*r),i-o*t(o)}return cc=n,cc}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fc,ub;function nO(){if(ub)return fc;ub=1;function e(t){var n,r,i;return t===0?.25479851061131553:(t<0?n=-t:n=t,n<=1?(r=.25479851061131553+t*(-.3255503118680449+t*(-.6503185377089651+t*(-.28919126444774784+t*(-.04525132144873906+t*(-.002071332116774595+t*0))))),i=1+t*(2.076711702373047+t*(1.4606242909763516+t*(.43593529692665967+t*(.054151797245674226+t*(.0021284987017821146+t*-5578984132167551e-22)))))):(t=1/t,r=0+t*(-.002071332116774595+t*(-.04525132144873906+t*(-.28919126444774784+t*(-.6503185377089651+t*(-.3255503118680449+t*.25479851061131553))))),i=-5578984132167551e-22+t*(.0021284987017821146+t*(.054151797245674226+t*(.43593529692665967+t*(1.4606242909763516+t*(2.076711702373047+t*1)))))),r/i)}return fc=e,fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dc,lb;function rO(){if(lb)return dc;lb=1;var e=nO(),t=1569415565/1073741824,n=381566830/1073741824/1073741824,r=9016312093258695e-35,i=.9955816268920898;function o(a){var s,u;return s=a-t,s-=n,s-=r,u=e(a-1),s*i+s*u}return dc=o,dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/digamma.hpp}. The implementation follows the original but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var pc,cb;function iO(){if(cb)return pc;cb=1;var e=j(),t=Be(),n=ZN(),r=ht(),i=tO(),o=rO(),a=10;function s(u){var l,c;if(e(u)||u===0)return NaN;if(u<=-1){if(u=1-u,l=u-t(u),l>.5&&(l-=1),l===0)return NaN;c=r/n(r*l)}else c=0;if(u>=a)return c+=i(u),c;for(;u>2;)u-=1,c+=1/u;for(;u<1;)c-=1/u,u+=1;return c+=o(u),c}return pc=s,pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hc,fb;function oO(){if(fb)return hc;fb=1;var e=iO();return hc=e,hc}var aO=oO();const db=Ye(aO);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc,pb;function sO(){if(pb)return mc;pb=1;var e=.34657359027997264;return mc=e,mc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vc,hb;function uO(){if(hb)return vc;hb=1;function e(t){return t===0?-.03333333333333313:-.03333333333333313+t*(.0015873015872548146+t*(-793650757867488e-19+t*(4008217827329362e-21+t*-20109921818362437e-23)))}return vc=e,vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_expm1.c} and [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_expm1.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var _c,mb;function lO(){if(mb)return _c;mb=1;var e=j(),t=$e(),n=Or(),r=So(),i=se(),o=_e(),a=Wt(),s=sO(),u=uO(),l=709.782712893384,c=.6931471803691238,f=19082149292705877e-26,d=1.4426950408889634,p=38.816242111356935,h=1.0397207708399179;function m(v){var _,b,y,g,E,A,$,C,I,T,S,w,R;if(v===i||e(v))return v;if(v===o)return-1;if(v===0)return v;if(v<0?(y=!0,C=-v):(y=!1,C=v),C>=p){if(y)return-1;if(C>=l)return i}if(A=t(C)|0,C>s)C<h?y?(g=v+c,E=-f,R=-1):(g=v-c,E=f,R=1):(y?R=d*v-.5:R=d*v+.5,R|=0,S=R,g=v-S*c,E=S*f),v=g-E,T=g-v-E;else{if(A<1016070144)return v;R=0}return _=.5*v,I=v*_,$=1+I*u(I),S=3-$*_,w=I*(($-S)/(6-v*S)),R===0?v-(v*w-I):(b=r(a+R<<20,0),w=v*(w-T)-T,w-=I,R===-1?.5*(v-w)-.5:R===1?v<-.25?-2*(w-(v+.5)):1+2*(v-w):R<=-2||R>56?(C=1-(w-v),R===1024?(g=t(C)+(R<<20)|0,C=n(C,g)):C*=b,C-1):(S=1,R<20?(g=1072693248-(2097152>>R)|0,S=n(S,g),C=S-(w-v)):(g=a-R<<20|0,S=n(S,g),C=v-(w+S),C+=1),C*=b,C))}return _c=m,_c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bc,vb;function On(){if(vb)return bc;vb=1;var e=lO();return bc=e,bc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gc,_b;function cO(){if(_b)return gc;_b=1;function e(t){return t===0?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+t*.14798198605116586)))))}return gc=e,gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_log1p.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var yc,bb;function fO(){if(bb)return yc;bb=1;var e=j(),t=$e(),n=Or(),r=se(),i=_e(),o=Wt(),a=cO(),s=.6931471803691238,u=19082149292705877e-26,l=.41421356237309503,c=-.2928932188134525,f=1862645149230957e-24,d=5551115123125783e-32,p=9007199254740992,h=.6666666666666666;function m(v){var _,b,y,g,E,A,$,C,I,T;if(v<-1||e(v))return NaN;if(v===-1)return i;if(v===r||v===0)return v;if(v<0?y=-v:y=v,T=1,y<l){if(y<f)return y<d?v:v-v*v*.5;v>c&&(T=0,g=v,b=1)}return T!==0&&(y<p?(I=1+v,b=t(I),T=(b>>20)-o,T>0?E=1-(I-v):E=v-(I-1),E/=I):(I=v,b=t(I),T=(b>>20)-o,E=0),b&=1048575,b<434334?I=n(I,b|1072693248):(T+=1,I=n(I,b|1071644672),b=1048576-b>>2),g=I-1),_=.5*g*g,b===0?g===0?(E+=T*u,T*s+E):(C=_*(1-h*g),T*s-(C-(T*u+E)-g)):(A=g/(2+g),$=A*A,C=$*a($),T===0?g-(_-A*(_+C)):T*s-(_-(A*(_+C)+(T*u+E))-g))}return yc=m,yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ec,gb;function Oe(){if(gb)return Ec;gb=1;var e=fO();return Ec=e,Ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wc,yb;function sw(){if(yb)return wc;yb=1;var e=.7853981633974483;return wc=e,wc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sc,Eb;function dO(){if(Eb)return Sc;Eb=1;function e(t){var n,r,i;return t===0?.16666666666666713:(t<0?n=-t:n=t,n<=1?(r=-8.198089802484825+t*(19.562619833175948+t*(-16.262479672107002+t*(5.444622390564711+t*(-.6019598008014124+t*.004253011369004428)))),i=-49.18853881490881+t*(139.51056146574857+t*(-147.1791292232726+t*(70.49610280856842+t*(-14.740913729888538+t*1))))):(t=1/t,r=.004253011369004428+t*(-.6019598008014124+t*(5.444622390564711+t*(-16.262479672107002+t*(19.562619833175948+t*-8.198089802484825)))),i=1+t*(-14.740913729888538+t*(70.49610280856842+t*(-147.1791292232726+t*(139.51056146574857+t*-49.18853881490881))))),r/i)}return Sc=e,Sc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $c,wb;function pO(){if(wb)return $c;wb=1;function e(t){var n,r,i;return t===0?.08333333333333809:(t<0?n=-t:n=t,n<=1?(r=28.536655482610616+t*(-25.56901049652825+t*(6.968710824104713+t*(-.5634242780008963+t*.002967721961301243))),i=342.43986579130785+t*(-383.8770957603691+t*(147.0656354026815+t*(-21.947795316429207+t*1)))):(t=1/t,r=.002967721961301243+t*(-.5634242780008963+t*(6.968710824104713+t*(-25.56901049652825+t*28.536655482610616))),i=1+t*(-21.947795316429207+t*(147.0656354026815+t*(-383.8770957603691+t*342.43986579130785)))),r/i)}return $c=e,$c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var Ac,Sb;function hO(){if(Sb)return Ac;Sb=1;var e=j(),t=ee(),n=sw(),r=dO(),i=pO(),o=6123233995736766e-32;function a(s){var u,l,c,f,d;if(e(s))return NaN;if(s>0?c=s:(u=!0,c=-s),c>1)return NaN;if(c>.625)l=1-c,f=l*i(l),l=t(l+l),d=n-l,l=l*f-o,d-=l,d+=n;else{if(c<1e-8)return s;l=c*c,d=l*r(l),d=c*d+c}return u?-d:d}return Ac=a,Ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tc,$b;function Am(){if($b)return Tc;$b=1;var e=hO();return Tc=e,Tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rc,Ab;function mO(){if(Ab)return Rc;Ab=1;var e=Be();function t(n){return e(n)===n}return Rc=t,Rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ic,Tb;function Mn(){if(Tb)return Ic;Tb=1;var e=mO();return Ic=e,Ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lc,Rb;function vO(){if(Rb)return Lc;Rb=1;var e=Mn();function t(n){return e(n/2)}return Lc=t,Lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc,Ib;function _O(){if(Ib)return Cc;Ib=1;var e=vO();return Cc=e,Cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kc,Lb;function bO(){if(Lb)return kc;Lb=1;var e=_O();function t(n){return n>0?e(n-1):e(n+1)}return kc=t,kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nc,Cb;function Tm(){if(Cb)return Nc;Cb=1;var e=bO();return Nc=e,Nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oc,kb;function gO(){if(kb)return Oc;kb=1;function e(t){return t|0}return Oc=e,Oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mc,Nb;function uw(){if(Nb)return Mc;Nb=1;var e=gO();return Mc=e,Mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Dc,Ob;function yO(){if(Ob)return Dc;Ob=1;var e=Tm(),t=wm(),n=_e(),r=se();function i(o,a){return a===n?r:a===r?0:a>0?e(a)?o:0:e(a)?t(r,o):r}return Dc=i,Dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Pc,Mb;function EO(){if(Mb)return Pc;Mb=1;var e=Tt(),t=$e(),n=1072693247,r=1e300,i=1e-300;function o(a,s){var u,l;return l=t(a),u=l&e,u<=n?s<0?r*r:i*i:s>0?r*r:i*i}return Pc=o,Pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fc,Db;function wO(){if(Db)return Fc;Db=1;var e=Z(),t=se();function n(r,i){return r===-1?(r-r)/(r-r):r===1?1:e(r)<1==(i===t)?0:t}return Fc=n,Fc}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qc,Pb;function lw(){if(Pb)return qc;Pb=1;var e=20;return qc=e,qc}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bc,Fb;function SO(){if(Fb)return Bc;Fb=1;function e(t){return t===0?.5999999999999946:.5999999999999946+t*(.4285714285785502+t*(.33333332981837743+t*(.272728123808534+t*(.23066074577556175+t*.20697501780033842))))}return Bc=e,Bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Hc,qb;function $O(){if(qb)return Hc;qb=1;var e=$e(),t=Nn(),n=Or(),r=Wt(),i=lw(),o=SO(),a=1048575,s=1048576,u=1072693248,l=536870912,c=524288,f=9007199254740992,d=.9617966939259756,p=.9617967009544373,h=-7028461650952758e-24,m=[1,1.5],v=[0,.5849624872207642],_=[0,1350039202129749e-23];function b(y,g,E){var A,$,C,I,T,S,w,R,L,O,k,P,M,D,N,K,F,W,Y,J,q,x;return J=0,E<s&&(g*=f,J-=53,E=e(g)),J+=(E>>i)-r|0,q=E&a|0,E=q|u|0,q<=235662?x=0:q<767610?x=1:(x=0,J+=1,E-=s),g=n(g,E),R=m[x],W=g-R,Y=1/(g+R),$=W*Y,I=t($,0),A=(E>>1|l)+c,A+=x<<18,S=n(0,A),w=g-(S-R),T=Y*(W-I*S-I*w),C=$*$,F=C*C*o(C),F+=T*(I+$),C=I*I,S=3+C+F,S=t(S,0),w=F-(S-3-C),W=I*S,Y=T*S+w*$,O=W+Y,O=t(O,0),k=Y-(O-W),P=p*O,M=h*O+k*d+_[x],L=v[x],K=J,D=P+M+L+K,D=t(D,0),N=M-(D-K-L-P),y[0]=D,y[1]=N,y}return Hc=b,Hc}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xc,Bb;function AO(){if(Bb)return xc;Bb=1;function e(t){return t===0?.5:.5+t*(-.3333333333333333+t*.25)}return xc=e,xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Uc,Hb;function TO(){if(Hb)return Uc;Hb=1;var e=Nn(),t=AO(),n=1.4426950408889634,r=1.4426950216293335,i=19259629911266175e-24;function o(a,s){var u,l,c,f,d,p;return c=s-1,f=c*c*t(c),d=r*c,p=c*i-f*n,l=d+p,l=e(l,0),u=p-(l-d),a[0]=l,a[1]=u,a}return Uc=o,Uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gc,xb;function RO(){if(xb)return Gc;xb=1;var e=.6931471805599453;return Gc=e,Gc}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wc,Ub;function IO(){if(Ub)return Wc;Ub=1;function e(t){return t===0?.16666666666666602:.16666666666666602+t*(-.0027777777777015593+t*(6613756321437934e-20+t*(-16533902205465252e-22+t*41381367970572385e-24)))}return Wc=e,Wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Vc,Gb;function LO(){if(Gb)return Vc;Gb=1;var e=$e(),t=Or(),n=Nn(),r=uw(),i=kn(),o=RO(),a=Wt(),s=Tt(),u=ow(),l=lw(),c=IO(),f=1048576,d=1071644672,p=.6931471824645996,h=-1904654299957768e-24;function m(v,_,b){var y,g,E,A,$,C,I,T,S,w,R;return w=v&s|0,R=(w>>l)-a|0,S=0,w>d&&(S=v+(f>>R+1)>>>0,R=((S&s)>>l)-a|0,y=(S&~(u>>R))>>>0,E=t(0,y),S=(S&u|f)>>l-R>>>0,v<0&&(S=-S),_-=E),E=b+_,E=n(E,0),$=E*p,C=(b-(E-_))*o+E*h,T=$+C,I=C-(T-$),E=T*T,g=T-E*c(E),A=T*g/(g-2)-(I+T*I),T=1-(A-T),v=e(T),v=r(v),v+=S<<l>>>0,v>>l<=0?T=i(T,S):T=t(T,v),T}return Vc=m,Vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Xc,Wb;function CO(){if(Wb)return Xc;Wb=1;var e=j(),t=Tm(),n=Rn(),r=Mn(),i=ee(),o=Z(),a=Em(),s=Nn(),u=uw(),l=_e(),c=se(),f=Tt(),d=yO(),p=EO(),h=wO(),m=$O(),v=TO(),_=LO(),b=1072693247,y=1105199104,g=1139802112,E=1083179008,A=1072693248,$=1083231232,C=3230714880,I=31,T=1e300,S=1e-300,w=8008566259537294e-32,R=[0,0],L=[0,0];function O(k,P){var M,D,N,K,F,W,Y,J,q,x,B,ce,ie,X,z,fe;if(e(k)||e(P))return NaN;if(a.assign(P,R,1,0),W=R[0],Y=R[1],Y===0){if(P===0)return 1;if(P===1)return k;if(P===-1)return 1/k;if(P===.5)return i(k);if(P===-.5)return 1/i(k);if(P===2)return k*k;if(P===3)return k*k*k;if(P===4)return k*=k,k*k;if(n(P))return h(k,P)}if(a.assign(k,R,1,0),K=R[0],F=R[1],F===0){if(K===0)return d(k,P);if(k===1)return 1;if(k===-1&&t(P))return-1;if(n(k))return k===l?O(-0,-P):P<0?0:c}if(k<0&&r(P)===!1)return(k-k)/(k-k);if(N=o(k),M=K&f|0,D=W&f|0,J=K>>>I|0,q=W>>>I|0,J&&t(P)?J=-1:J=1,D>y){if(D>g)return p(k,P);if(M<b)return q===1?J*T*T:J*S*S;if(M>A)return q===0?J*T*T:J*S*S;ie=v(L,N)}else ie=m(L,N,M);if(x=s(P,0),ce=(P-x)*ie[0]+P*ie[1],B=x*ie[0],X=ce+B,a.assign(X,R,1,0),z=u(R[0]),fe=u(R[1]),z>=E){if((z-E|fe)!==0||ce+w>X-B)return J*T*T}else if((z&f)>=$&&((z-C|fe)!==0||ce<=X-B))return J*S*S;return X=_(z,B,ce),J*X}return Xc=O,Xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jc,Vb;function le(){if(Vb)return jc;Vb=1;var e=CO();return jc=e,jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kc,Xb;function Dn(){if(Xb)return Kc;Xb=1;var e=2.718281828459045;return Kc=e,Kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yc,jb;function ze(){if(jb)return Yc;jb=1;var e=2220446049250313e-31;return Yc=e,Yc}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zc,Kb;function kO(){if(Kb)return zc;Kb=1;function e(t){var n,r,i;return t===0?1/0:(t<0?n=-t:n=t,n<=1?(r=709811.662581658+t*(679979.8474157227+t*(293136.7857211597+t*(74887.54032914672+t*(12555.290582413863+t*(1443.4299244417066+t*(115.24194596137347+t*(6.309239205732627+t*(.22668404630224365+t*(.004826466289237662+t*4624429436045379e-20))))))))),i=0+t*(362880+t*(1026576+t*(1172700+t*(723680+t*(269325+t*(63273+t*(9450+t*(870+t*(45+t*1)))))))))):(t=1/t,r=4624429436045379e-20+t*(.004826466289237662+t*(.22668404630224365+t*(6.309239205732627+t*(115.24194596137347+t*(1443.4299244417066+t*(12555.290582413863+t*(74887.54032914672+t*(293136.7857211597+t*(679979.8474157227+t*709811.662581658))))))))),i=1+t*(45+t*(870+t*(9450+t*(63273+t*(269325+t*(723680+t*(1172700+t*(1026576+t*(362880+t*0)))))))))),r/i)}return zc=e,zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Jc,Yb;function NO(){if(Yb)return Jc;Yb=1;var e=j(),t=Oe(),n=ee(),r=Z(),i=ue(),o=le(),a=Dn(),s=ze(),u=kO(),l=10.900511;function c(f,d){var p,h,m,v,_,b,y;return e(f)||e(d)?NaN:f<0||d<0?NaN:d===1?1/f:f===1?1/d:(y=f+d,y<s?(_=y/f,_/=d,_):y===f&&d<s?1/d:y===d&&f<s?1/f:(f<d&&(b=d,d=f,f=b),h=f+l-.5,m=d+l-.5,v=y+l-.5,_=u(f)*(u(d)/u(y)),p=f-.5-d,r(d*p)<v*100&&f>100?_*=i(p*t(-d/v)):_*=o(h/v,p),v>1e10?_*=o(h/v*(m/v),d):_*=o(h*m/(v*v),d),_*=n(a/m),_))}return Jc=c,Jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qc,zb;function Ao(){if(zb)return Qc;zb=1;var e=NO();return Qc=e,Qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zc,Jb;function OO(){if(Jb)return Zc;Jb=1;var e=se();function t(n){return n===0&&1/n===e}return Zc=t,Zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e0,Qb;function MO(){if(Qb)return e0;Qb=1;var e=OO();return e0=e,e0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t0,Zb;function DO(){if(Zb)return t0;Zb=1;var e=MO(),t=j(),n=se();function r(i,o){return t(i)||t(o)?NaN:i===n||o===n?n:i===o&&i===0?e(i)?i:o:i>o?i:o}return t0=r,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n0,eg;function Xt(){if(eg)return n0;eg=1;var e=DO();return n0=e,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,tg;function PO(){if(tg)return r0;tg=1;var e=_e();function t(n){return n===0&&1/n===e}return r0=t,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i0,ng;function cw(){if(ng)return i0;ng=1;var e=PO();return i0=e,i0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,rg;function FO(){if(rg)return o0;rg=1;var e=cw(),t=j(),n=_e();function r(i,o){return t(i)||t(o)?NaN:i===n||o===n?n:i===o&&i===0?e(i)?i:o:i<o?i:o}return o0=r,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a0,ig;function Rt(){if(ig)return a0;ig=1;var e=FO();return a0=e,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,og;function jt(){if(og)return s0;og=1;var e=17976931348623157e292;return s0=e,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u0,ag;function fw(){if(ag)return u0;ag=1;var e=2147483647;return u0=e,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,sg;function Rm(){if(sg)return l0;sg=1;var e=1.5707963267948966;return l0=e,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,ug;function qO(){if(ug)return c0;ug=1;function e(t){return t===0?.0416666666666666:.0416666666666666+t*(-.001388888888887411+t*2480158728947673e-20)}return c0=e,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f0,lg;function BO(){if(lg)return f0;lg=1;function e(t){return t===0?-27557314351390663e-23:-27557314351390663e-23+t*(2087572321298175e-24+t*-11359647557788195e-27)}return f0=e,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var d0,cg;function HO(){if(cg)return d0;cg=1;var e=qO(),t=BO();function n(r,i){var o,a,s,u;return u=r*r,s=u*u,a=u*e(u),a+=s*s*t(u),o=.5*u,s=1-o,s+(1-s-o+(u*a-r*i))}return d0=n,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,fg;function dw(){if(fg)return p0;fg=1;var e=HO();return p0=e,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var h0,dg;function xO(){if(dg)return h0;dg=1;var e=-.16666666666666632,t=.00833333333332249,n=-.0001984126982985795,r=27557313707070068e-22,i=-25050760253406863e-24,o=158969099521155e-24;function a(s,u){var l,c,f,d;return d=s*s,f=d*d,l=t+d*(n+d*r)+d*f*(i+d*o),c=d*s,u===0?s+c*(e+d*l):s-(d*(.5*u-c*l)-u-c*e)}return h0=a,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,pg;function pw(){if(pg)return m0;pg=1;var e=xO();return m0=e,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var v0,hg;function UO(){if(hg)return v0;hg=1;var e=Tt(),t=Nr(),n=$e(),r=dw(),i=pw(),o=$m(),a=1072243195,s=1045430272,u=[0,0];function l(c){var f,d;if(f=n(c),f&=e,f<=a)return f<s?c:i(c,0);if(f>=t)return NaN;switch(d=o(c,u),d&3){case 0:return i(u[0],u[1]);case 1:return r(u[0],u[1]);case 2:return-i(u[0],u[1]);default:return-r(u[0],u[1])}}return v0=l,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _0,mg;function Mr(){if(mg)return _0;mg=1;var e=UO();return _0=e,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,vg;function To(){if(vg)return b0;vg=1;var e=2.5066282746310007;return b0=e,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,_g;function GO(){if(_g)return g0;_g=1;function e(t){return t===0?.08333333333334822:.08333333333334822+t*(.0034722222160545866+t*(-.0026813261780578124+t*(-.00022954996161337813+t*.0007873113957930937)))}return g0=e,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var y0,bg;function WO(){if(bg)return y0;bg=1;var e=To(),t=le(),n=ue(),r=GO(),i=143.01608;function o(a){var s,u,l;return s=1/a,s=1+s*r(s),u=n(a),a>i?(l=t(a,.5*a-.25),u=l*(l/u)):u=t(a,a-.5)/u,e*u*s}return y0=o,y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,gg;function VO(){if(gg)return E0;gg=1;var e=.5772156649015329;return E0=e,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var w0,yg;function XO(){if(yg)return w0;yg=1;var e=VO();function t(n,r){return r/((1+e*n)*n)}return w0=t,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,Eg;function jO(){if(Eg)return S0;Eg=1;function e(t){var n,r,i;return t===0?1:(t<0?n=-t:n=t,n<=1?(r=1+t*(.4942148268014971+t*(.20744822764843598+t*(.04763678004571372+t*(.010421379756176158+t*(.0011913514700658638+t*(.00016011952247675185+t*0)))))),i=1+t*(.0714304917030273+t*(-.23459179571824335+t*(.035823639860549865+t*(.011813978522206043+t*(-.004456419138517973+t*(.0005396055804933034+t*-23158187332412014e-21))))))):(t=1/t,r=0+t*(.00016011952247675185+t*(.0011913514700658638+t*(.010421379756176158+t*(.04763678004571372+t*(.20744822764843598+t*(.4942148268014971+t*1)))))),i=-23158187332412014e-21+t*(.0005396055804933034+t*(-.004456419138517973+t*(.011813978522206043+t*(.035823639860549865+t*(-.23459179571824335+t*(.0714304917030273+t*1))))))),r/i)}return S0=e,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var $0,wg;function KO(){if(wg)return $0;wg=1;var e=j(),t=Mn(),n=cw(),r=Z(),i=Be(),o=Mr(),a=se(),s=_e(),u=ht(),l=WO(),c=XO(),f=jO();function d(p){var h,m,v,_;if(t(p)&&p<0||p===s||e(p))return NaN;if(p===0)return n(p)?s:a;if(p>171.61447887182297)return a;if(p<-170.5674972726612)return 0;if(m=r(p),m>33)return p>=0?l(p):(v=i(m),(v&1)===0?h=-1:h=1,_=m-v,_>.5&&(v+=1,_=m-v),_=m*o(u*_),h*u/(r(_)*l(m)));for(_=1;p>=3;)p-=1,_*=p;for(;p<0;){if(p>-1e-9)return c(p,_);_/=p,p+=1}for(;p<2;){if(p<1e-9)return c(p,_);_/=p,p+=1}return p===2?_:(p-=2,_*f(p))}return $0=d,$0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,Sg;function Je(){if(Sg)return A0;Sg=1;var e=KO();return A0=e,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,$g;function Ro(){if($g)return T0;$g=1;var e=170;return T0=e,T0}const YO=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R0,Ag;function zO(){if(Ag)return R0;Ag=1;var e=j(),t=Mn(),n=Je(),r=se(),i=Ro(),o=YO;function a(s){return e(s)?NaN:t(s)?s<0?NaN:s<=i?o[s]:r:n(s+1)}return R0=a,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,Tg;function hw(){if(Tg)return I0;Tg=1;var e=zO();return I0=e,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,Rg;function JO(){if(Rg)return L0;Rg=1;function e(t){var n,r,i;return t===0?1/0:(t<0?n=-t:n=t,n<=1?(r=3847467039331777e-5+t*(3685766504351951e-5+t*(1588920245372942e-5+t*(4059208354298835e-6+t*(6805476611834733e-7+t*(7823975500312005e-8+t*(6246580776401795e-9+t*(341986.3488721347+t*(12287.194511824551+t*(261.61404416416684+t*2.5066282746310007))))))))),i=0+t*(362880+t*(1026576+t*(1172700+t*(723680+t*(269325+t*(63273+t*(9450+t*(870+t*(45+t*1)))))))))):(t=1/t,r=2.5066282746310007+t*(261.61404416416684+t*(12287.194511824551+t*(341986.3488721347+t*(6246580776401795e-9+t*(7823975500312005e-8+t*(6805476611834733e-7+t*(4059208354298835e-6+t*(1588920245372942e-5+t*(3685766504351951e-5+t*3847467039331777e-5))))))))),i=1+t*(45+t*(870+t*(9450+t*(63273+t*(269325+t*(723680+t*(1172700+t*(1026576+t*(362880+t*0)))))))))),r/i)}return L0=e,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var C0,Ig;function QO(){if(Ig)return C0;Ig=1;var e=JO();return C0=e,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,Lg;function ZO(){if(Lg)return k0;Lg=1;var e=QO();return k0=e,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,Cg;function Dr(){if(Cg)return N0;Cg=1;var e=10.900511;return N0=e,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var O0,kg;function eM(){if(kg)return O0;kg=1;var e=ZO(),t=Je(),n=Oe(),r=Z(),i=ue(),o=le(),a=ze(),s=Dn(),u=Dr(),l=Ro(),c=4269068009004705e289;function f(d,p){var h,m,v;return d<a?p>=l?(m=f(p,l-p),m*=d,m*=c,1/m):1/(d*t(d+p)):(v=d+u-.5,d+p===d?r(p/v)<a?h=i(-p):h=1:(r(p)<10?h=i((.5-d)*n(p/v)):h=o(v/(v+p),d-.5),h*=e(d)/e(d+p)),h*=o(s/(v+p),p),h)}return O0=f,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var M0,Ng;function tM(){if(Ng)return M0;Ng=1;var e=Z(),t=Be(),n=Je(),r=hw(),i=Ro(),o=eM();function a(s,u){var l,c,f;if(s<=0||s+u<=0)return n(s)/n(s+u);if(c=t(u),c===u){if(f=t(s),f===s&&s<=i&&s+u<=i)return r(f-1)/r(c+f-1);if(e(u)<20){if(u===0)return 1;if(u<0){for(s-=1,l=s,u+=1;u!==0;)s-=1,l*=s,u+=1;return l}for(l=1/s,u-=1;u!==0;)s+=1,l/=s,u-=1;return l}}return o(s,u)}return M0=a,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,Og;function Im(){if(Og)return D0;Og=1;var e=tM();return D0=e,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var P0,Mg;function nM(){if(Mg)return P0;Mg=1;var e=$e(),t=dw(),n=pw(),r=$m(),i=Tt(),o=Nr(),a=[0,0],s=1072243195,u=1044381696;function l(c){var f,d;if(f=e(c),f&=i,f<=s)return f<u?1:t(c,0);if(f>=o)return NaN;switch(d=r(c,a),d&3){case 0:return t(a[0],a[1]);case 1:return-n(a[0],a[1]);case 2:return-t(a[0],a[1]);default:return n(a[0],a[1])}}return P0=l,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,Dg;function Lm(){if(Dg)return F0;Dg=1;var e=nM();return F0=e,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q0,Pg;function rM(){if(Pg)return q0;Pg=1;var e=j(),t=Rn(),n=Lm(),r=Mr(),i=Z(),o=wm(),a=ht();function s(u){var l,c;return e(u)?NaN:t(u)?NaN:(c=u%2,l=i(c),l===0||l===1?o(0,c):l<.25?r(a*c):l<.75?(l=.5-l,o(n(a*l),c)):l<1.25?(c=o(1,c)-c,r(a*c)):l<1.75?(l-=1.5,-o(n(a*l),c)):(c-=o(2,c),r(a*c)))}return q0=s,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,Fg;function iM(){if(Fg)return B0;Fg=1;var e=rM();return B0=e,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,qg;function oM(){if(qg)return H0;qg=1;function e(t){return t===0?.06735230105312927:.06735230105312927+t*(.007385550860814029+t*(.0011927076318336207+t*(.00022086279071390839+t*25214456545125733e-21)))}return H0=e,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,Bg;function aM(){if(Bg)return x0;Bg=1;function e(t){return t===0?.020580808432516733:.020580808432516733+t*(.0028905138367341563+t*(.0005100697921535113+t*(.00010801156724758394+t*44864094961891516e-21)))}return x0=e,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,Hg;function sM(){if(Hg)return U0;Hg=1;function e(t){return t===0?1.3920053346762105:1.3920053346762105+t*(.7219355475671381+t*(.17193386563280308+t*(.01864591917156529+t*(.0007779424963818936+t*7326684307446256e-21))))}return U0=e,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0,xg;function uM(){if(xg)return G0;xg=1;function e(t){return t===0?.21498241596060885:.21498241596060885+t*(.325778796408931+t*(.14635047265246445+t*(.02664227030336386+t*(.0018402845140733772+t*3194753265841009e-20))))}return G0=e,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,Ug;function lM(){if(Ug)return W0;Ug=1;function e(t){return t===0?-.032788541075985965:-.032788541075985965+t*(.006100538702462913+t*(-.0014034646998923284+t*.00031563207090362595))}return W0=e,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,Gg;function cM(){if(Gg)return V0;Gg=1;function e(t){return t===0?.01797067508118204:.01797067508118204+t*(-.0036845201678113826+t*(.000881081882437654+t*-.00031275416837512086))}return V0=e,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,Wg;function fM(){if(Wg)return X0;Wg=1;function e(t){return t===0?-.010314224129834144:-.010314224129834144+t*(.0022596478090061247+t*(-.0005385953053567405+t*.0003355291926355191))}return X0=e,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,Vg;function dM(){if(Vg)return j0;Vg=1;function e(t){return t===0?.6328270640250934:.6328270640250934+t*(1.4549225013723477+t*(.9777175279633727+t*(.22896372806469245+t*.013381091853678766)))}return j0=e,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K0,Xg;function pM(){if(Xg)return K0;Xg=1;function e(t){return t===0?2.4559779371304113:2.4559779371304113+t*(2.128489763798934+t*(.7692851504566728+t*(.10422264559336913+t*.003217092422824239)))}return K0=e,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,jg;function hM(){if(jg)return Y0;jg=1;function e(t){return t===0?.08333333333333297:.08333333333333297+t*(-.0027777777772877554+t*(.0007936505586430196+t*(-.00059518755745034+t*(.0008363399189962821+t*-.0016309293409657527))))}return Y0=e,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var z0,Kg;function mM(){if(Kg)return z0;Kg=1;var e=j(),t=Rn(),n=Z(),r=re(),i=ym(),o=iM(),a=ht(),s=se(),u=oM(),l=aM(),c=sM(),f=uM(),d=lM(),p=cM(),h=fM(),m=dM(),v=pM(),_=hM(),b=.07721566490153287,y=.3224670334241136,g=1,E=-.07721566490153287,A=.48383612272381005,$=-.1475877229945939,C=.06462494023913339,I=-.07721566490153287,T=1,S=.4189385332046727,w=1.4616321449683622,R=4503599627370496,L=72057594037927940,O=13877787807814457e-33,k=1.4616321449683622,P=-.12148629053584961,M=-3638676997039505e-33;function D(N){var K,F,W,Y,J,q,x,B,ce,ie,X,z,fe;if(e(N)||t(N))return N;if(N===0)return s;if(N<0?(K=!0,N=-N):K=!1,N<O)return-r(N);if(K){if(N>=R||(ce=o(N),ce===0))return s;F=r(a/n(ce*N))}if(N===1||N===2)return 0;if(N<2)switch(N<=.9?(fe=-r(N),N>=w-1+.27?(X=1-N,W=0):N>=w-1-.27?(X=N-(k-1),W=1):(X=N,W=2)):(fe=0,N>=w+.27?(X=2-N,W=0):N>=w-.27?(X=N-k,W=1):(X=N-1,W=2)),W){case 0:z=X*X,q=b+z*u(z),J=z*(y+z*l(z)),x=X*q+J,fe+=x-.5*X;break;case 1:z=X*X,ie=z*X,q=A+ie*d(ie),J=$+ie*p(ie),Y=C+ie*h(ie),x=z*q-(M-ie*(J+X*Y)),fe+=P+x;break;case 2:q=X*(I+X*m(X)),J=T+X*v(X),fe+=-.5*X+q/J;break}else if(N<8)switch(W=i(N),X=N-W,x=X*(E+X*f(X)),B=g+X*c(X),fe=.5*X+x/B,z=1,W){case 7:z*=X+6;case 6:z*=X+5;case 5:z*=X+4;case 4:z*=X+3;case 3:z*=X+2,fe+=r(z)}else N<L?(ce=r(N),z=1/N,X=z*z,ie=S+z*_(X),fe=(N-.5)*(ce-1)+ie):fe=N*(r(N)-1);return K&&(fe=F-fe),fe}return z0=D,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,Yg;function Pn(){if(Yg)return J0;Yg=1;var e=mM();return J0=e,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,zg;function It(){if(zg)return Q0;zg=1;var e=709.782712893384;return Q0=e,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,Jg;function vM(){if(Jg)return Z0;Jg=1;var e=14901161193847656e-24;return Z0=e,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ef,Qg;function _M(){if(Qg)return ef;Qg=1;var e=eval;return ef=e,ef}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tf,Zg;function bM(){if(Zg)return tf;Zg=1;var e=_M();function t(){var n;try{e('"use strict"; (function* () {})'),n=!0}catch{n=!1}return n}return tf=t,tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nf,e4;function mw(){if(e4)return nf;e4=1;var e=bM();return nf=e,nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rf,t4;function gM(){if(t4)return rf;t4=1;var e=Z(),t=ze(),n=1e6;function r(i,o){var a,s,u,l,c,f;if(f={},arguments.length>1&&(f=o),s=f.tolerance||t,l=f.maxTerms||n,c=f.initialValue||0,a=typeof i.next=="function",a===!0){for(u of i)if(c+=u,e(s*c)>=e(u)||--l===0)break}else do u=i(),c+=u;while(e(s*c)<e(u)&&--l);return c}return rf=r,rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var of,n4;function yM(){if(n4)return of;n4=1;var e=Z(),t=ze(),n=1e6;function r(i,o){var a,s,u,l,c;c={},arguments.length>1&&(c=o),a=c.tolerance||t,u=c.maxTerms||n,l=c.initialValue||0;do s=i(),l+=s;while(e(a*l)<e(s)&&--u);return l}return of=r,of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var af,r4;function Pr(){if(r4)return af;r4=1;var e=mw(),t=gM(),n=yM(),r;return e()?r=t:r=n,af=r,af}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var sf,i4;function EM(){if(i4)return sf;i4=1;function e(t,n){var r=1,i=t,o=n;return a;function a(){var s=r;return r*=i/o,i-=1,s}}return sf=e,sf}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var uf,o4;function wM(){if(o4)return uf;o4=1;var e=Pr(),t=EM();function n(r,i){var o,a;return a=t(r,i),o=e(a),o}return uf=n,uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var lf,a4;function SM(){if(a4)return lf;a4=1;var e=ue();function t(n,r){var i,o,a,s;if(a=e(-r),o=a,o!==0)for(i=o,s=1;s<n;++s)i/=s,i*=r,o+=i;return o}return lf=t,lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var cf,s4;function $M(){if(s4)return cf;s4=1;var e=$o(),t=ee(),n=ue(),r=ht();function i(o,a){var s,u,l,c,f;if(c=e(t(a)),c!==0&&o>1){for(u=n(-a)/t(r*a),u*=a,s=.5,u/=s,l=u,f=2;f<o;++f)u/=f-s,u*=a,l+=u;c+=l}return c}return cf=i,cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ff,u4;function Fn(){if(u4)return ff;u4=1;var e=-708.3964185322641;return ff=e,ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var df,l4;function AM(){if(l4)return df;l4=1;var e=ue(),t=le(),n=re(),r=It(),i=Fn();function o(a,s){var u,l;return l=a*n(s),s>=1?l<r&&-s>i?u=t(s,a)*e(-s):a>=1?u=t(s/e(s/a),a):u=e(l-s):l>i?u=t(s,a)*e(-s):s/a<r?u=t(s/e(s/a),a):u=e(l-s),u}return df=o,df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,c4;function vw(){if(c4)return pf;c4=1;function e(t,n){var r,i;if(i=t.length,i<2||n===0)return i===0?0:t[0];for(i-=1,r=t[i]*n+t[i-1],i-=2;i>=0;)r=r*n+t[i],i-=1;return r}return pf=e,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hf,f4;function TM(){if(f4)return hf;f4=1;var e=Function;return hf=e,hf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mf,d4;function RM(){if(d4)return mf;d4=1;var e=TM();return mf=e,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vf,p4;function IM(){if(p4)return vf;p4=1;var e=RM(),t=vw();function n(r){var i,o,a,s;if(r.length>500)return u;if(i="return function evalpoly(x){",o=r.length,o===0)i+="return 0.0;";else if(o===1)i+="return "+r[0]+";";else{for(i+="if(x===0.0){return "+r[0]+";}",i+="return "+r[0],a=o-1,s=1;s<o;s++)i+="+x*",s<a&&(i+="("),i+=r[s];for(s=0;s<a-1;s++)i+=")";i+=";"}return i+="}",i+="//# sourceURL=evalpoly.factory.js",new e(i)();function u(l){return t(r,l)}}return vf=n,vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _f,h4;function Lt(){if(h4)return _f;h4=1;var e=ve(),t=vw(),n=IM();return e(t,"factory",n),_f=t,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
*/var bf,m4;function LM(){if(m4)return bf;m4=1;function e(t){var n=-t,r=-1,i=0;return o;function o(){return r*=n,i+=1,r/i}}return bf=e,bf}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var gf,v4;function CM(){if(v4)return gf;v4=1;var e=Z(),t=re(),n=ze(),r=Pr(),i=LM();function o(a){var s,u;return a<=-1?NaN:(u=e(a),u>.95?t(1+a)-a:u<n?-a*a/2:(s={initialValue:-a},r(i(a),s)))}return gf=o,gf}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yf,_4;function _w(){if(_4)return yf;_4=1;var e=CM();return yf=e,yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ef,b4;function Io(){if(b4)return Ef;b4=1;var e=6.283185307179586;return Ef=e,Ef}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wf,g4;function kM(){if(g4)return wf;g4=1;function e(t){return t===0?-.3333333333333333:-.3333333333333333+t*(.08333333333333333+t*(-.014814814814814815+t*(.0011574074074074073+t*(.0003527336860670194+t*(-.0001787551440329218+t*(3919263178522438e-20+t*(-21854485106799924e-22+t*(-185406221071516e-20+t*(8296711340953087e-22+t*(-17665952736826078e-23+t*(6707853543401498e-24+t*(10261809784240309e-24+t*(-4382036018453353e-24+t*914769958223679e-24)))))))))))))}return wf=e,wf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sf,y4;function NM(){if(y4)return Sf;y4=1;function e(t){return t===0?-.001851851851851852:-.001851851851851852+t*(-.003472222222222222+t*(.0026455026455026454+t*(-.0009902263374485596+t*(.00020576131687242798+t*(-4018775720164609e-22+t*(-18098550334489977e-21+t*(764916091608111e-20+t*(-16120900894563446e-22+t*(4647127802807434e-24+t*(1378633446915721e-22+t*(-5752545603517705e-23+t*11951628599778148e-24)))))))))))}return Sf=e,Sf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $f,E4;function OM(){if(E4)return $f;E4=1;function e(t){return t===0?.004133597883597883:.004133597883597883+t*(-.0026813271604938273+t*(.0007716049382716049+t*(20093878600823047e-22+t*(-.00010736653226365161+t*(52923448829120125e-21+t*(-12760635188618728e-21+t*(3423578734096138e-23+t*(13721957309062932e-22+t*(-6298992138380055e-22+t*14280614206064242e-23)))))))))}return $f=e,$f}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Af,w4;function MM(){if(w4)return Af;w4=1;function e(t){return t===0?.0006494341563786008:.0006494341563786008+t*(.00022947209362139917+t*(-.0004691894943952557+t*(.00026772063206283885+t*(-7561801671883977e-20+t*(-2396505113867297e-22+t*(11082654115347302e-21+t*(-56749528269915965e-22+t*14230900732435883e-22)))))))}return Af=e,Af}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tf,S4;function DM(){if(S4)return Tf;S4=1;function e(t){return t===0?-.0008618882909167117:-.0008618882909167117+t*(.0007840392217200666+t*(-.0002990724803031902+t*(-14638452578843418e-22+t*(6641498215465122e-20+t*(-3968365047179435e-20+t*11375726970678419e-21)))))}return Tf=e,Tf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rf,$4;function PM(){if($4)return Rf;$4=1;function e(t){return t===0?-.00033679855336635813:-.00033679855336635813+t*(-6972813758365858e-20+t*(.0002772753244959392+t*(-.00019932570516188847+t*(6797780477937208e-20+t*(1419062920643967e-22+t*(-13594048189768693e-21+t*(8018470256334202e-21+t*-2291481176508095e-21)))))))}return Rf=e,Rf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var If,A4;function FM(){if(A4)return If;A4=1;function e(t){return t===0?.0005313079364639922:.0005313079364639922+t*(-.0005921664373536939+t*(.0002708782096718045+t*(7902353232660328e-22+t*(-8153969367561969e-20+t*(561168275310625e-19+t*-18329116582843375e-21)))))}return If=e,If}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lf,T4;function qM(){if(T4)return Lf;T4=1;function e(t){return t===0?.00034436760689237765:.00034436760689237765+t*(5171790908260592e-20+t*(-.00033493161081142234+t*(.0002812695154763237+t*-.00010976582244684731)))}return Lf=e,Lf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cf,R4;function BM(){if(R4)return Cf;R4=1;function e(t){return t===0?-.0006526239185953094:-.0006526239185953094+t*(.0008394987206720873+t*-.000438297098541721)}return Cf=e,Cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var kf,I4;function HM(){if(I4)return kf;I4=1;var e=Lt(),t=_w(),n=$o(),r=ee(),i=ue(),o=Io(),a=kM(),s=NM(),u=OM(),l=MM(),c=DM(),f=PM(),d=FM(),p=qM(),h=BM(),m=[0,0,0,0,0,0,0,0,0,0];function v(_,b){var y,g,E,A,$;return g=(b-_)/_,E=-t(g),A=_*E,$=r(2*E),b<_&&($=-$),m[0]=a($),m[1]=s($),m[2]=u($),m[3]=l($),m[4]=c($),m[5]=f($),m[6]=d($),m[7]=p($),m[8]=h($),m[9]=-.0005967612901927463,y=e(m,1/_),y*=i(-A)/r(o*_),b<_&&(y=-y),y+=n(r(A))/2,y}return kf=v,kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Nf,L4;function xM(){if(L4)return Nf;L4=1;function e(t,n){var r=1,i=t,o=n;return a;function a(){var s=r;return i+=1,r*=o/i,s}}return Nf=e,Nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Of,C4;function bw(){if(C4)return Of;C4=1;var e=Pr(),t=xM();function n(r,i,o){var a,s;return o=o||0,s=t(r,i),a=e(s,{initialValue:o}),a}return Of=n,Of}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mf,k4;function UM(){if(k4)return Mf;k4=1;function e(t){var n,r,i;return t===0?1/0:(t<0?n=-t:n=t,n<=1?(r=709811.662581658+t*(679979.8474157227+t*(293136.7857211597+t*(74887.54032914672+t*(12555.290582413863+t*(1443.4299244417066+t*(115.24194596137347+t*(6.309239205732627+t*(.22668404630224365+t*(.004826466289237662+t*4624429436045379e-20))))))))),i=0+t*(362880+t*(1026576+t*(1172700+t*(723680+t*(269325+t*(63273+t*(9450+t*(870+t*(45+t*1)))))))))):(t=1/t,r=4624429436045379e-20+t*(.004826466289237662+t*(.22668404630224365+t*(6.309239205732627+t*(115.24194596137347+t*(1443.4299244417066+t*(12555.290582413863+t*(74887.54032914672+t*(293136.7857211597+t*(679979.8474157227+t*709811.662581658))))))))),i=1+t*(45+t*(870+t*(9450+t*(63273+t*(269325+t*(723680+t*(1172700+t*(1026576+t*(362880+t*0)))))))))),r/i)}return Mf=e,Mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Df,N4;function GM(){if(N4)return Df;N4=1;var e=UM();return Df=e,Df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pf,O4;function Lo(){if(O4)return Pf;O4=1;var e=GM();return Pf=e,Pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ff,M4;function WM(){if(M4)return Ff;M4=1;var e=Lo(),t=Pn(),n=Je(),r=_w(),i=ee(),o=Z(),a=ue(),s=le(),u=Xt(),l=Rt(),c=re(),f=jt(),d=It(),p=Fn(),h=Dr(),m=Dn();function v(_,b){var y,g,E,A,$,C,I;return E=_+h-.5,I=(b-_-h+.5)/E,_<1?b<=p||_<1/f?a(_*c(b)-b-t(_)):s(b,_)*a(-b)/n(_):(o(I*I*_)<=100&&_>150?(y=_*r(I)+b*(.5-h)/E,y=a(y)):(A=_*c(b/E),$=_-b,l(A,$)<=p||u(A,$)>=d?(g=$/_,l(A,$)/2>p&&u(A,$)/2<d?(C=s(b/E,_/2)*a($/2),y=C*C):l(A,$)/4>p&&u(A,$)/4<d&&b>_?(C=s(b/E,_/4)*a($/4),y=C*C,y*=y):g>p&&g<d?y=s(b*a(g)/E,_):y=a(A+$)):y=s(b/E,_)*a($)),y*=i(E/m)/e(_),y)}return Ff=v,Ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/powm1.hpp}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var qf,D4;function VM(){if(D4)return qf;D4=1;var e=j(),t=Rn(),n=Z(),r=On(),i=re(),o=le(),a=ym();function s(u,l){var c,f;if(e(u)||e(l))return NaN;if(l===0)return 0;if(u===0)return-1;if(u<0&&l%2===0&&(u=-u),u>0){if((n(l*(u-1))<.5||n(l)<.2)&&(f=i(u)*l,f<.5))return r(f)}else if(a(l)!==l)return NaN;return c=o(u,l)-1,t(c)||e(c)?NaN:c}return qf=s,qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bf,P4;function XM(){if(P4)return Bf;P4=1;var e=VM();return Bf=e,Bf}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hf,F4;function jM(){if(F4)return Hf;F4=1;function e(t){var n,r,i;return t===0?-.01803556856784494:(t<0?n=-t:n=t,n<=1?(r=-.01803556856784494+t*(.02512664961998968+t*(.049410315156753225+t*(.0172491608709614+t*(-.0002594535632054381+t*(-.0005410098692152044+t*(-3245886498259485e-20+t*0)))))),i=1+t*(1.962029871977952+t*(1.4801966942423133+t*(.5413914320717209+t*(.09885042511280101+t*(.008213096746488934+t*(.00022493629192211576+t*-22335276320861708e-23))))))):(t=1/t,r=0+t*(-3245886498259485e-20+t*(-.0005410098692152044+t*(-.0002594535632054381+t*(.0172491608709614+t*(.049410315156753225+t*(.02512664961998968+t*-.01803556856784494)))))),i=-22335276320861708e-23+t*(.00022493629192211576+t*(.008213096746488934+t*(.09885042511280101+t*(.5413914320717209+t*(1.4801966942423133+t*(1.962029871977952+t*1))))))),r/i)}return Hf=e,Hf}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xf,q4;function KM(){if(q4)return xf;q4=1;function e(t){var n,r,i;return t===0?.04906224540690395:(t<0?n=-t:n=t,n<=1?(r=.04906224540690395+t*(-.09691175301595212+t*(-.4149833583594954+t*(-.4065671242119384+t*(-.1584135863906922+t*(-.024014982064857155+t*-.0010034668769627955))))),i=1+t*(3.0234982984646304+t*(3.4873958536072385+t*(1.9141558827442668+t*(.5071377386143635+t*(.05770397226904519+t*.001957681026011072)))))):(t=1/t,r=-.0010034668769627955+t*(-.024014982064857155+t*(-.1584135863906922+t*(-.4065671242119384+t*(-.4149833583594954+t*(-.09691175301595212+t*.04906224540690395))))),i=.001957681026011072+t*(.05770397226904519+t*(.5071377386143635+t*(1.9141558827442668+t*(3.4873958536072385+t*(3.0234982984646304+t*1)))))),r/i)}return xf=e,xf}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uf,B4;function YM(){if(B4)return Uf;B4=1;function e(t){var n,r,i;return t===0?-.029232972183027003:(t<0?n=-t:n=t,n<=1?(r=-.029232972183027003+t*(.14421626775719232+t*(-.14244039073863127+t*(.05428096940550536+t*(-.008505359768683364+t*(.0004311713426792973+t*0))))),i=1+t*(-1.5016935605448505+t*(.846973248876495+t*(-.22009515181499575+t*(.02558279715597587+t*(-.0010066679553914337+t*-8271935218912905e-22)))))):(t=1/t,r=0+t*(.0004311713426792973+t*(-.008505359768683364+t*(.05428096940550536+t*(-.14244039073863127+t*(.14421626775719232+t*-.029232972183027003))))),i=-8271935218912905e-22+t*(-.0010066679553914337+t*(.02558279715597587+t*(-.22009515181499575+t*(.846973248876495+t*(-1.5016935605448505+t*1)))))),r/i)}return Uf=e,Uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/detail/lgamma_small.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Gf,H4;function zM(){if(H4)return Gf;H4=1;var e=re(),t=ze(),n=jM(),r=KM(),i=YM(),o=.15896368026733398,a=.5281534194946289,s=.45201730728149414;function u(l,c,f){var d,p,h,m;if(l<t)return-e(l);if(c===0||f===0)return 0;if(p=0,l>2){if(l>=3){do l-=1,f-=1,p+=e(l);while(l>=3);f=l-2}return h=f*(l+1),m=n(f),p+=h*o+h*m,p}return l<1&&(p+=-e(l),f=c,c=l,l+=1),l<=1.5?(h=r(c),d=c*f,p+=d*a+d*h,p):(h=f*c,m=i(-f),p+=h*s+h*m,p)}return Gf=u,Gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Wf,x4;function JM(){if(x4)return Wf;x4=1;var e=Je(),t=On(),n=Oe(),r=j(),i=zM();function o(a){return r(a)?NaN:a<0?a<-.5?e(1+a)-1:t(-n(a)+i(a+2,a+1,a)):a<2?t(i(a+1,a,a-1)):e(1+a)-1}return Wf=o,Wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vf,U4;function QM(){if(U4)return Vf;U4=1;var e=JM();return Vf=e,Vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Xf,G4;function ZM(){if(G4)return Xf;G4=1;function e(t,n){var r,i,o,a;return r=-n,n=-n,i=t+1,o=1,s;function s(){return a=r/i,r*=n,o+=1,r/=o,i+=1,a}}return Xf=e,Xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var jf,W4;function eD(){if(W4)return jf;W4=1;var e=XM(),t=Pr(),n=QM(),r=ZM();function i(o,a,s){var u,l,c,f,d;return l=n(o),c=(l+1)/o,f=e(a,o),l-=f,l/=o,d=r(o,a),f+=1,u=s?c:0,l=-f*t(d,{initialValue:(u-l)/f}),s&&(l=-l),[l,c]}return jf=i,jf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kf,V4;function Co(){if(V4)return Kf;V4=1;var e=11754943508222875e-54;return Kf=e,Kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yf,X4;function tD(){if(X4)return Yf;X4=1;var e=Z(),t=Co(),n=ze(),r=1e6;function i(s,u,l){var c,f,d,p,h,m,v;if(c=typeof s.next=="function",v=c?s.next().value:s(),p=v[1],d=v[0],p===0&&(p=t),h=p,m=0,c===!0)do v=s.next().value,v&&(m=v[1]+v[0]*m,m===0&&(m=t),h=v[1]+v[0]/h,h===0&&(h=t),m=1/m,f=h*m,p*=f);while(e(f-1)>u&&--l);else do v=s(),v&&(m=v[1]+v[0]*m,m===0&&(m=t),h=v[1]+v[0]/h,h===0&&(h=t),m=1/m,f=h*m,p*=f);while(v&&e(f-1)>u&&--l);return d/p}function o(s,u,l){var c,f,d,p,h,m;if(c=typeof s.next=="function",m=c?s.next().value:s(),d=m[1],d===0&&(d=t),p=d,h=0,c===!0)do m=s.next().value,m&&(h=m[1]+m[0]*h,h===0&&(h=t),p=m[1]+m[0]/p,p===0&&(p=t),h=1/h,f=p*h,d*=f);while(m&&e(f-1)>u&&--l);else do m=s(),m&&(h=m[1]+m[0]*h,h===0&&(h=t),p=m[1]+m[0]/p,p===0&&(p=t),h=1/h,f=p*h,d*=f);while(m&&e(f-1)>u&&--l);return d}function a(s,u){var l,c,f;return c={},arguments.length>1&&(c=u),l=c.maxIter||r,f=c.tolerance||n,c.keep?o(s,f,l):i(s,f,l)}return Yf=a,Yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zf,j4;function nD(){if(j4)return zf;j4=1;var e=Z(),t=ze(),n=Co(),r=1e6;function i(s,u,l){var c,f,d,p,h,m;m=s(),h=m[1],f=m[0],h===0&&(h=n),d=h,p=0;do m=s(),m&&(p=m[1]+m[0]*p,p===0&&(p=n),d=m[1]+m[0]/d,d===0&&(d=n),p=1/p,c=d*p,h*=c);while(m&&e(c-1)>u&&--l);return f/h}function o(s,u,l){var c,f,d,p,h;h=s(),p=h[1],p===0&&(p=n),f=p,d=0;do h=s(),h&&(d=h[1]+h[0]*d,d===0&&(d=n),f=h[1]+h[0]/f,f===0&&(f=n),d=1/d,c=f*d,p*=c);while(h&&e(c-1)>u&&--l);return p}function a(s,u){var l,c,f;return c={},arguments.length>1&&(c=u),f=c.tolerance||t,l=c.maxIter||r,c.keep?o(s,f,l):i(s,f,l)}return zf=a,zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jf,K4;function gw(){if(K4)return Jf;K4=1;var e=mw(),t=tD(),n=nD(),r;return e()?r=t:r=n,Jf=r,Jf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Qf,Y4;function rD(){if(Y4)return Qf;Y4=1;function e(t,n){var r=n-t+1,i=t,o=0;return a;function a(){return o+=1,r+=2,[o*(i-o),r]}}return Qf=e,Qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Zf,z4;function yw(){if(z4)return Zf;z4=1;var e=gw(),t=rD();function n(r,i){var o=t(r,i);return 1/(i-r+1+e(o))}return Zf=n,Zf}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ed,J4;function iD(){if(J4)return ed;J4=1;var e=Be(),t=Je(),n=Z(),r=le(),i=re(),o=vM(),a=jt(),s=It(),u=wM(),l=SM(),c=$M(),f=AM(),d=HM(),p=bw(),h=WM(),m=eD(),v=yw();function _(b,y,g,E){var A,$,C,I,T,S,w,R,L,O,k,P,M,D;switch(w=0,R=E,S=y<30&&y<=b+1&&b<s,S?(M=e(y),L=M===y,C=L?!1:n(M-y)===.5):(L=!1,C=!1),L&&b>.6?(R=!R,$=0):C&&b>.2?(R=!R,$=1):b<o&&y>1?$=6:b>1e3&&(y<b||n(y-50)/b<1)?(R=!R,$=7):b<.5?-.4/i(b)<y?$=2:$=3:b<1.1?b*.75<y?$=2:$=3:(T=!1,g&&y>20&&(O=n((b-y)/y),y>200?20/y>O*O&&(T=!0):O<.4&&(T=!0)),T?$=5:b-1/(3*b)<y?$=2:($=4,R=!R)),$){case 0:w=l(y,b),g===!1&&(w*=t(y));break;case 1:w=c(y,b),g===!1&&(w*=t(y));break;case 2:w=g?h(y,b):f(y,b),w!==0&&(I=0,A=!1,R&&(I=g?1:t(y),g||w>=1||a*w>I?(I/=w,g||y<1||a/y>I?(I*=-y,A=!0):I=0):I=0),w*=p(y,b,I)/y,A&&(R=!1,w=-w));break;case 3:R=!R,k=m(y,b,R),w=k[0],D=k[1],R=!1,g&&(w/=D);break;case 4:w=g?h(y,b):f(y,b),w!==0&&(w*=v(y,b));break;case 5:w=d(y,b),b>=y&&(R=!R);break;case 6:w=g?r(b,y)/t(y+1):r(b,y)/y,w*=1-y*b/(y+1);break;case 7:w=g?h(y,b):f(y,b),w/=b,w!==0&&(w*=u(y,b));break}return g&&w>1&&(w=1),R&&(P=g?1:t(y),w=P-w),w}return ed=_,ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var td,Q4;function oD(){if(Q4)return td;Q4=1;var e=Pn(),t=ue(),n=re(),r=To(),i=It(),o=se(),a=Ro(),s=iD(),u=bw(),l=yw();function c(f,d,p,h){var m,v,_,b;return f<0||d<=0?NaN:(m=p===void 0?!0:p,_=h,d>=a&&!m?(_&&d*4<f?(b=d*n(f)-f,b+=n(l(d,f))):!_&&d>4*f?(b=d*n(f)-f,v=0,b+=n(u(d,f,v)/d)):(b=s(f,d,!0,_),b===0?_?(b=1+1/(12*d)+1/(288*d*d),b=n(b)-d+(d-.5)*n(d),b+=n(r)):(b=d*n(f)-f,v=0,b+=n(u(d,f,v)/d)):b=n(b)+e(d)),b>i?o:t(b)):s(f,d,m,_))}return td=c,td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nd,Z4;function Ew(){if(Z4)return nd;Z4=1;var e=oD();return nd=e,nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var rd,e5;function aD(){if(e5)return rd;e5=1;var e=ue(),t=le(),n=re(),r=It(),i=Fn();function o(a,s){var u,l;return l=a*n(s),s>=1?l<r&&-s>i?u=t(s,a)*e(-s):a>=1?u=t(s/e(s/a),a):u=e(l-s):l>i?u=t(s,a)*e(-s):s/a<r?u=t(s/e(s/a),a):u=e(l-s),u}return rd=o,rd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var id,t5;function sD(){if(t5)return id;t5=1;var e=Lo(),t=Pn(),n=Je(),r=Oe(),i=ee(),o=Z(),a=ue(),s=le(),u=Xt(),l=Rt(),c=re(),f=It(),d=Fn(),p=Dr(),h=Dn();function m(v,_){var b,y,g,E,A,$,C;return g=v+p-.5,C=(_-v-p+.5)/g,v<1?_<=d?a(v*c(_)-_-t(v)):s(_,v)*a(-_)/n(v):(o(C*C*v)<=100&&v>150?(b=v*(r(C)-C)+_*(.5-p)/g,b=a(b)):(E=v*c(_/g),A=v-_,l(E,A)<=d||u(E,A)>=f?(y=A/v,l(E,A)/2>d&&u(E,A)/2<f?($=s(_/g,v/2)*a(A/2),b=$*$):l(E,A)/4>d&&u(E,A)/4<f&&_>v?($=s(_/g,v/4)*a(A/4),b=$*$,b*=b):y>d&&y<f?b=s(_*a(y)/g,v):b=a(E+A)):b=s(_/g,v)*a(A)),b*=i(g/h)/e(v),b)}return id=m,id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var od,n5;function uD(){if(n5)return od;n5=1;var e=Im(),t=hw(),n=Ew(),r=Oe(),i=Z(),o=le(),a=re(),s=Vt(),u=ze(),l=aD(),c=sD(),f=new Array(30);function d(p,h,m,v,_,b,y){var g,E,A,$,C,I,T,S,w,R,L,O,k,P,M,D,N,K;if(I=h-1,N=p+I/2,v<.35?R=r(-v):R=a(m),K=-N*R,O=c(h,K),O<=s)return _;for(y?(g=O/e(p,h),g/=o(N,h)):g=l(h,K)/o(N,h),g*=b,f[0]=1,k=n(K,h,!0,!0),k/=O,$=_+g*k,A=1,T=R/2,T*=T,S=1,L=4*N*N,C=h,M=1;M<f.length;++M){for(A+=2,f[M]=0,w=h-M,E=3,P=1;P<M;++P)w=P*h-M,f[M]+=w*f[M-P]/t(E),E+=2;if(f[M]/=M,f[M]+=I/t(A),k=(C*(C+1)*k+(K+C+1)*S)/L,S*=T,C+=2,D=g*f[M]*k,$+=D,D>1){if(i(D)<i(u*$))break}else if(i(D/u)<i($))break}return $}return od=d,od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ad,r5;function lD(){if(r5)return ad;r5=1;function e(t,n,r){var i,o;if(r===0)return 1;for(i=1,o=0;o<r;o++)i*=(t+o)/(n+o);return i}return ad=e,ad}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sd,i5;function cD(){if(i5)return sd;i5=1;var e=Z(),t=Xt();function n(r,i){return t(e(r),e(i))}return sd=n,sd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ud,o5;function fD(){if(o5)return ud;o5=1;var e=cD();return ud=e,ud}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ld,a5;function dD(){if(a5)return ld;a5=1;var e=Z(),t=Rt();function n(r,i){return t(e(r),e(i))}return ld=n,ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cd,s5;function pD(){if(s5)return cd;s5=1;var e=dD();return cd=e,cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var fd,u5;function Cm(){if(u5)return fd;u5=1;var e=Lo(),t=fD(),n=pD(),r=On(),i=Oe(),o=ee(),a=Z(),s=ue(),u=le(),l=Rt(),c=re(),f=It(),d=Fn(),p=Dr(),h=Dn();function m(v,_,b,y,g){var E,A,$,C,I,T,S,w,R,L,O,k,P,M;if(!g)return u(b,v)*u(y,_);if(P=v+_,C=v+p-.5,I=_+p-.5,T=P+p-.5,E=e(P),E/=e(v)*e(_),E*=o(I/h),E*=o(C/T),S=(b*_-y*C)/C,w=(y*v-b*I)/I,n(S,w)<.2)if(S*w>0||l(v,_)<1)a(S)<.1?E*=s(v*i(S)):E*=u(b*T/C,v),a(w)<.1?E*=s(_*i(w)):E*=u(y*T/I,_);else if(t(S,w)<.5)A=v<_,$=_/v,A&&$*w<.1||!A&&S/$>.1?(R=r($*i(w)),R=S+R+R*S,R=v*i(R),E*=s(R)):(R=r(i(S)/$),R=w+R+R*w,R=_*i(R),E*=s(R));else if(a(S)<a(w))if(M=v*i(S)+_*c(y*T/I),M<=d||M>=f){if(M+=c(E),M>=f)return NaN;E=s(M)}else E*=s(M);else if(M=_*i(w)+v*c(b*T/C),M<=d||M>=f){if(M+=c(E),M>=f)return NaN;E=s(M)}else E*=s(M);else if(O=b*T/C,k=y*T/I,S=v*c(O),w=_*c(k),S>=f||S<=d||w>=f||w<=d)if(v<_)if(L=u(k,_/v),R=v*(c(O)+c(L)),R<f&&R>d)E*=u(L*O,v);else{if(w+=S+c(E),w>=f)return NaN;E=s(w)}else if(L=u(O,v/_),R=(c(L)+c(k))*_,R<f&&R>d)E*=u(L*k,_);else{if(w+=S+c(E),w>=f)return NaN;E=s(w)}else E*=u(O,v)*u(k,_);return E}return fd=m,fd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var dd,l5;function hD(){if(l5)return dd;l5=1;var e=gw(),t=Cm(),n={keep:!0,maxIter:1e3};function r(o,a,s,u){var l=0;return c;function c(){var f,d,p;return d=(o+l-1)*(o+a+l-1)*l*(a-l)*s*s,f=o+2*l-1,d/=f*f,p=l,p+=l*(a-l)*s/(o+2*l-1),p+=(o+l)*(o*u-a*s+1+l*(2-s))/(o+2*l+1),l+=1,[d,p]}}function i(o,a,s,u,l,c){var f,d,p;return f=t(o,a,s,u,l),c&&(c[1]=f),f===0?f:(p=r(o,a,s,u),d=e(p,n),f/d)}return dd=i,dd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pd,c5;function mD(){if(c5)return pd;c5=1;var e=9007199254740991;return pd=e,pd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hd,f5;function vD(){if(f5)return hd;f5=1;function e(t,n){var r=0,i;if(t===0)return n;if(n===0)return t;for(;(t&1)===0&&(n&1)===0;)t>>>=1,n>>>=1,r+=1;for(;(t&1)===0;)t>>>=1;for(;n;){for(;(n&1)===0;)n>>>=1;t>n&&(i=n,n=t,t=i),n-=t}return t<<r}return hd=e,hd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var md,d5;function _D(){if(d5)return md;d5=1;function e(t,n){var r=1,i;if(t===0)return n;if(n===0)return t;for(;t%2===0&&n%2===0;)t/=2,n/=2,r*=2;for(;t%2===0;)t/=2;for(;n;){for(;n%2===0;)n/=2;t>n&&(i=n,n=t,t=i),n-=t}return r*t}return md=e,md}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vd,p5;function bD(){if(p5)return vd;p5=1;var e=j(),t=Mn(),n=se(),r=_e(),i=fw(),o=vD(),a=_D();function s(u,l){return e(u)||e(l)?NaN:u===n||l===n||u===r||l===r?NaN:t(u)&&t(l)?(u<0&&(u=-u),l<0&&(l=-l),u<=i&&l<=i?o(u,l):a(u,l)):NaN}return vd=s,vd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _d,h5;function gD(){if(h5)return _d;h5=1;var e=bD();return _d=e,_d}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bd,m5;function yD(){if(m5)return bd;m5=1;var e=mD(),t=se(),n=Mn(),r=j(),i=Tm(),o=Be(),a=gD();function s(u,l){var c,f,d,p,h,m,v;if(r(u)||r(l))return NaN;if(!n(u)||!n(l))return NaN;if(l<0||(f=1,u<0&&(u=-u+l-1,i(l)&&(f*=-1)),l>u))return 0;if(l===0||l===u)return f;if(l===1||l===u-1)return f*u;for(u-l<l&&(l=u-l),v=o(e/u),c=1,h=1;h<=l&&!(c>v);h++)c*=u,c/=h,u-=1;return h>l?f*c:(d=s(u,l-h+1),d===t?f*d:(p=s(l,l-h+1),m=a(d,p),d/=m,p/=m,c/=p,f*c*d))}return bd=s,bd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gd,v5;function ED(){if(v5)return gd;v5=1;var e=yD();return gd=e,gd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var yd,_5;function wD(){if(_5)return yd;_5=1;var e=ED(),t=Be(),n=le(),r=Vt();function i(o,a,s,u){var l,c,f,d,p;if(c=n(s,o),c>r)for(d=c,p=t(o-1);p>a;p--)d*=(p+1)*u/((o-p)*s),c+=d;else if(f=t(o*s),f<=a+1&&(f=t(a+2)),c=n(s,f)*n(u,o-f),c*=e(t(o),t(f)),c===0)for(p=f-1;p>a;p--)c+=n(s,p)*n(u,o-p),c*=e(t(o),t(p));else{for(d=c,l=c,p=f-1;p>a;p--)d*=(p+1)*u/((o-p)*s),c+=d;for(d=l,p=f+1;p<=o;p++)d*=(o-p+1)*s/(p*u),c+=d}return c}return yd=i,yd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ed,b5;function SD(){if(b5)return Ed;b5=1;var e=Cm();function t(n,r,i,o,a,s,u){var l,c,f,d;if(l=e(n,r,i,o,s),u&&(u[1]=l),l/=n,l===0)return l;for(f=1,c=1,d=0;d<a-1;++d)c*=(n+r+d)*i/(n+d+1),f+=c;return l*=f,l}return Ed=t,Ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var wd,g5;function $D(){if(g5)return wd;g5=1;var e=Lo(),t=Pr(),n=Oe(),r=ee(),i=ue(),o=le(),a=re(),s=Vt(),u=It(),l=Fn(),c=Dr(),f=Dn(),d={maxTerms:100};function p(m,v,_,b){var y=1-v,g=1;return E;function E(){var A=b/m;return m+=1,b*=y*_/g,g+=1,y+=1,A}}function h(m,v,_,b,y,g,E){var A,$,C,I,T,S,w,R;return y?(w=m+v,$=m+c-.5,C=v+c-.5,I=w+c-.5,A=e(w)/(e(m)*e(v)),T=a(I/C)*(v-.5),S=a(_*I/$)*m,T>l&&T<u&&S>l&&S<u?(m*v<C*10?A*=i((v-.5)*n(m/C)):A*=o(I/C,v-.5),A*=o(_*I/$,m),A*=r($/f),g&&(g[1]=A*o(E,v))):(A=a(A)+T+S+(a($)-1)/2,g&&(g[1]=i(A+v*a(E))),A=i(A))):A=o(_,m),A<s?b:(R=p(m,v,_,A),d.initialValue=b,t(R,d))}return wd=h,wd}var Sd,y5;function ww(){if(y5)return Sd;y5=1;var e=j(),t=On(),n=Be(),r=Oe(),i=Am(),o=Ao(),a=ee(),s=ue(),u=le(),l=Xt(),c=Rt(),f=jt(),d=Vt(),p=fw(),h=Rm(),m=ht(),v=uD(),_=lD(),b=Cm(),y=hD(),g=wD(),E=SD(),A=$D(),$=1/m;function C(I,T,S,w,R,L,O,k){var P,M,D,N,K,F,W,Y,J,q,x,B;if(B=1-I,W=k,Y=k+O,L[Y]=-1,e(I)||I<0||I>1)return L[W]=NaN,L[Y]=NaN,L;if(w){if(T<0||S<0)return L[W]=NaN,L[Y]=NaN,L;if(T===0){if(S===0)return L[W]=NaN,L[Y]=NaN,L;if(S>0)return L[W]=R?0:1,L}else if(S===0&&T>0)return L[W]=R?1:0,L}else if(T<=0||S<=0)return L[W]=NaN,L[Y]=NaN,L;return I===0?(T===1?L[Y]=1:L[Y]=T<1?f/2:d*2,R?(L[W]=w?1:o(T,S),L):(L[W]=0,L)):I===1?(S===1?L[Y]=1:L[Y]=S<1?f/2:d*2,R?L[W]=0:L[W]=w?1:o(T,S),L):T===.5&&S===.5?(L[Y]=$*a(B*I),x=i(a(R?B:I)),x/=h,w||(x*=m),L[W]=x,L):(T===1&&(F=S,S=T,T=F,F=B,B=I,I=F,R=!R),S===1?T===1?(L[W]=R?B:I,L[Y]=1,L):(L[Y]=T*u(I,T-1),B<.5?x=R?-t(T*r(-B)):s(T*r(-B)):x=R?-(u(I,T)-1):u(I,T),w||(x/=T),L[W]=x,L):(c(T,S)<=1?(I>.5&&(F=S,S=T,T=F,F=B,B=I,I=F,R=!R),l(T,S)<=1?T>=c(.2,S)||u(I,T)<=.9?R?(D=-(w?1:o(T,S)),R=!1,D=-A(T,S,I,D,w,L,B)):D=A(T,S,I,0,w,L,B):(F=S,S=T,T=F,F=B,B=I,I=F,R=!R,B>=.3?R?(D=-(w?1:o(T,S)),R=!1,D=-A(T,S,I,D,w,L,B)):D=A(T,S,I,0,w,L,B):(w?M=1:M=_(T+S,T,20),D=E(T,S,I,B,20,w,L),R?(D-=w?1:o(T,S),R=!1,D=-v(T+20,S,I,B,D,M,w)):D=v(T+20,S,I,B,D,M,w))):S<=1||I<.1&&u(S*I,T)<=.7?R?(D=-(w?1:o(T,S)),R=!1,D=-A(T,S,I,D,w,L,B)):D=A(T,S,I,0,w,L,B):(F=S,S=T,T=F,F=B,B=I,I=F,R=!R,B>=.3?R?(D=-(w?1:o(T,S)),R=!1,D=-A(T,S,I,D,w,L,B)):D=A(T,S,I,0,w,L,B):T>=15?R?(D=-(w?1:o(T,S)),R=!1,D=-v(T,S,I,B,D,1,w)):D=v(T,S,I,B,0,1,w):(w?M=1:M=_(T+S,T,20),D=E(T,S,I,B,20,w,L),R?(D-=w?1:o(T,S),R=!1,D=-v(T+20,S,I,B,D,M,w)):D=v(T+20,S,I,B,D,M,w)))):(T<S?P=T-(T+S)*I:P=(T+S)*B-S,P<0&&(F=S,S=T,T=F,F=B,B=I,I=F,R=!R),S<40?n(T)===T&&n(S)===S&&T<p-100?(J=T-1,q=S+J,D=g(q,J,I,B),w||(D*=o(T,S))):S*I<=.7?R?(D=-(w?1:o(T,S)),R=!1,D=-A(T,S,I,D,w,L,B)):D=A(T,S,I,0,w,L,B):T>15?(q=n(S),q===S&&(q-=1),N=S-q,w?M=1:M=_(T+N,N,q),D=E(N,T,B,I,q,w),D=v(T,N,I,B,D,1,w),D/=M):w?(q=n(S),N=S-q,N<=0&&(q-=1,N+=1),D=E(N,T,B,I,q,w),D+=E(T,N,I,B,20,w),R&&(D-=1),D=v(T+20,N,I,B,D,1,w),R&&(D=-D,R=!1)):D=y(T,S,I,B,w,L):D=y(T,S,I,B,w,L)),L[Y]<0&&(L[Y]=b(T,S,I,B,!0)),K=B*I,L[Y]!==0&&(f*K<L[Y]?L[Y]=f/2:L[Y]/=K),L[W]=R?(w?1:o(T,S))-D:D,L))}return Sd=C,Sd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $d,E5;function AD(){if(E5)return $d;E5=1;var e=ww();function t(n,r,i,o,a){return e(n,r,i,o,a,[0,0],1,0)}return $d=t,$d}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ad,w5;function Sw(){if(w5)return Ad;w5=1;var e=ve(),t=AD(),n=ww();return e(t,"assign",n),Ad=t,Ad}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Td,S5;function TD(){if(S5)return Td;S5=1;var e=Sw().assign;function t(n,r,i,o,a){var s=[0,0];return o=o!==!1,a=a===!0,e(n,r,i,o,a,s,1,0),s[0]}return Td=t,Td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rd,$5;function Fr(){if($5)return Rd;$5=1;var e=TD();return Rd=e,Rd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Id,A5;function RD(){if(A5)return Id;A5=1;var e=Fr(),t=j();function n(r,i,o){return t(r)||t(i)||t(o)||i<=0||o<=0?NaN:r<=0?0:r>=1?1:e(r,i,o)}return Id=n,Id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ld,T5;function ID(){if(T5)return Ld;T5=1;var e=Ne(),t=Fr(),n=j();function r(i,o){if(n(i)||n(o)||i<=0||o<=0)return e(NaN);return a;function a(s){return n(s)?NaN:s<=0?0:s>=1?1:t(s,i,o)}}return Ld=r,Ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cd,R5;function LD(){if(R5)return Cd;R5=1;var e=ve(),t=RD(),n=ID();return e(t,"factory",n),Cd=t,Cd}var CD=LD();const ph=Ye(CD);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kd,I5;function $w(){if(I5)return kd;I5=1;var e=.9189385332046728;return kd=e,kd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link https://netlib.org/slatec/fnlib/dcsevl.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var Nd,L5;function kD(){if(L5)return Nd;L5=1;var e=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],t=e.length;function n(r){var i,o,a,s,u;if(r<-1.1||r>1.1)return NaN;for(a=0,s=0,i=2*r,u=0;u<t;u++)o=a,a=s,s=i*a-o+e[u];return(s-o)*.5}return Nd=n,Nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link https://netlib.org/fn/d9lgmc.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var Od,C5;function ND(){if(C5)return Od;C5=1;var e=le(),t=kD(),n=9490626562425156e-8,r=3745194030963158e291;function i(o){return o<10?NaN:o>=r?0:o<n?t(2*e(10/o,2)-1)/o:1/(o*12)}return Od=i,Od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link https://www.netlib.org/slatec/fnlib/albeta.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var Md,k5;function OD(){if(k5)return Md;k5=1;var e=Pn(),t=Oe(),n=Je(),r=Xt(),i=Rt(),o=re(),a=$w(),s=_e(),u=se(),l=ND();function c(f,d){var p,h,m;return h=i(f,d),m=r(f,d),h<0?NaN:h===0?u:m===u?s:h>=10?(p=l(h)+l(m)-l(h+m),-.5*o(m)+a+p+(h-.5)*o(h/(h+m))+m*t(-h/(h+m))):m>=10?(p=l(m)-l(h+m),e(h)+p+h-h*o(h+m)+(m-.5)*t(-h/(h+m))):o(n(h)*(n(m)/n(h+m)))}return Md=c,Md}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dd,N5;function Aw(){if(N5)return Dd;N5=1;var e=OD();return Dd=e,Dd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pd,O5;function MD(){if(O5)return Pd;O5=1;var e=Aw(),t=j(),n=Oe(),r=ue(),i=re(),o=se();function a(s,u,l){var c;return t(s)||t(u)||t(l)||u<=0||l<=0?NaN:s<0||s>1?0:s===0?u<1?o:u>1?0:l:s===1?l<1?o:l>1?0:u:(c=(u-1)*i(s),c+=(l-1)*n(-s),c-=e(u,l),r(c))}return Pd=a,Pd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fd,M5;function DD(){if(M5)return Fd;M5=1;var e=Ne(),t=Aw(),n=j(),r=Oe(),i=ue(),o=re(),a=se();function s(u,l){var c;if(n(u)||n(l)||u<=0||l<=0)return e(NaN);return c=t(u,l),f;function f(d){var p;return n(d)?NaN:d<0||d>1?0:d===0?u<1?a:u>1?0:l:d===1?l<1?a:l>1?0:u:(p=-c,p+=(u-1)*o(d),p+=(l-1)*r(-d),i(p))}}return Fd=s,Fd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qd,D5;function PD(){if(D5)return qd;D5=1;var e=ve(),t=MD(),n=DD();return e(t,"factory",n),qd=t,qd}var FD=PD();const qD=Ye(FD);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bd,P5;function BD(){if(P5)return Bd;P5=1;function e(t){var n,r,i;return t===0?-.0005087819496582806:(t<0?n=-t:n=t,n<=1?(r=-.0005087819496582806+t*(-.008368748197417368+t*(.03348066254097446+t*(-.012692614766297404+t*(-.03656379714117627+t*(.02198786811111689+t*(.008226878746769157+t*(-.005387729650712429+t*(0+t*0)))))))),i=1+t*(-.9700050433032906+t*(-1.5657455823417585+t*(1.5622155839842302+t*(.662328840472003+t*(-.7122890234154284+t*(-.05273963823400997+t*(.07952836873415717+t*(-.0023339375937419+t*.0008862163904564247))))))))):(t=1/t,r=0+t*(0+t*(-.005387729650712429+t*(.008226878746769157+t*(.02198786811111689+t*(-.03656379714117627+t*(-.012692614766297404+t*(.03348066254097446+t*(-.008368748197417368+t*-.0005087819496582806)))))))),i=.0008862163904564247+t*(-.0023339375937419+t*(.07952836873415717+t*(-.05273963823400997+t*(-.7122890234154284+t*(.662328840472003+t*(1.5622155839842302+t*(-1.5657455823417585+t*(-.9700050433032906+t*1))))))))),r/i)}return Bd=e,Bd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hd,F5;function HD(){if(F5)return Hd;F5=1;function e(t){var n,r,i;return t===0?-.20243350835593876:(t<0?n=-t:n=t,n<=1?(r=-.20243350835593876+t*(.10526468069939171+t*(8.3705032834312+t*(17.644729840837403+t*(-18.851064805871424+t*(-44.6382324441787+t*(17.445385985570866+t*(21.12946554483405+t*-3.6719225470772936))))))),i=1+t*(6.242641248542475+t*(3.971343795334387+t*(-28.66081804998+t*(-20.14326346804852+t*(48.560921310873994+t*(10.826866735546016+t*(-22.643693341313973+t*1.7211476576120028)))))))):(t=1/t,r=-3.6719225470772936+t*(21.12946554483405+t*(17.445385985570866+t*(-44.6382324441787+t*(-18.851064805871424+t*(17.644729840837403+t*(8.3705032834312+t*(.10526468069939171+t*-.20243350835593876))))))),i=1.7211476576120028+t*(-22.643693341313973+t*(10.826866735546016+t*(48.560921310873994+t*(-20.14326346804852+t*(-28.66081804998+t*(3.971343795334387+t*(6.242641248542475+t*1)))))))),r/i)}return Hd=e,Hd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xd,q5;function xD(){if(q5)return xd;q5=1;function e(t){var n,r,i;return t===0?-.1311027816799519:(t<0?n=-t:n=t,n<=1?(r=-.1311027816799519+t*(-.16379404719331705+t*(.11703015634199525+t*(.38707973897260434+t*(.3377855389120359+t*(.14286953440815717+t*(.029015791000532906+t*(.0021455899538880526+t*(-6794655751811263e-22+t*(28522533178221704e-24+t*-681149956853777e-24))))))))),i=1+t*(3.4662540724256723+t*(5.381683457070069+t*(4.778465929458438+t*(2.5930192162362027+t*(.848854343457902+t*(.15226433829533179+t*(.011059242293464892+t*(0+t*(0+t*0)))))))))):(t=1/t,r=-681149956853777e-24+t*(28522533178221704e-24+t*(-6794655751811263e-22+t*(.0021455899538880526+t*(.029015791000532906+t*(.14286953440815717+t*(.3377855389120359+t*(.38707973897260434+t*(.11703015634199525+t*(-.16379404719331705+t*-.1311027816799519))))))))),i=0+t*(0+t*(0+t*(.011059242293464892+t*(.15226433829533179+t*(.848854343457902+t*(2.5930192162362027+t*(4.778465929458438+t*(5.381683457070069+t*(3.4662540724256723+t*1)))))))))),r/i)}return xd=e,xd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ud,B5;function UD(){if(B5)return Ud;B5=1;function e(t){var n,r,i;return t===0?-.0350353787183178:(t<0?n=-t:n=t,n<=1?(r=-.0350353787183178+t*(-.0022242652921344794+t*(.018557330651423107+t*(.009508047013259196+t*(.0018712349281955923+t*(.00015754461742496055+t*(460469890584318e-20+t*(-2304047769118826e-25+t*26633922742578204e-28))))))),i=1+t*(1.3653349817554064+t*(.7620591645536234+t*(.22009110576413124+t*(.03415891436709477+t*(.00263861676657016+t*(7646752923027944e-20+t*(0+t*0)))))))):(t=1/t,r=26633922742578204e-28+t*(-2304047769118826e-25+t*(460469890584318e-20+t*(.00015754461742496055+t*(.0018712349281955923+t*(.009508047013259196+t*(.018557330651423107+t*(-.0022242652921344794+t*-.0350353787183178))))))),i=0+t*(0+t*(7646752923027944e-20+t*(.00263861676657016+t*(.03415891436709477+t*(.22009110576413124+t*(.7620591645536234+t*(1.3653349817554064+t*1)))))))),r/i)}return Ud=e,Ud}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gd,H5;function GD(){if(H5)return Gd;H5=1;function e(t){var n,r,i;return t===0?-.016743100507663373:(t<0?n=-t:n=t,n<=1?(r=-.016743100507663373+t*(-.0011295143874558028+t*(.001056288621524929+t*(.00020938631748758808+t*(14962478375834237e-21+t*(44969678992770644e-23+t*(4625961635228786e-24+t*(-2811287356288318e-29+t*9905570997331033e-32))))))),i=1+t*(.5914293448864175+t*(.1381518657490833+t*(.016074608709367652+t*(.0009640118070051656+t*(27533547476472603e-21+t*(282243172016108e-21+t*(0+t*0)))))))):(t=1/t,r=9905570997331033e-32+t*(-2811287356288318e-29+t*(4625961635228786e-24+t*(44969678992770644e-23+t*(14962478375834237e-21+t*(.00020938631748758808+t*(.001056288621524929+t*(-.0011295143874558028+t*-.016743100507663373))))))),i=0+t*(0+t*(282243172016108e-21+t*(27533547476472603e-21+t*(.0009640118070051656+t*(.016074608709367652+t*(.1381518657490833+t*(.5914293448864175+t*1)))))))),r/i)}return Gd=e,Gd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_81_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Wd,x5;function WD(){if(x5)return Wd;x5=1;var e=j(),t=ee(),n=re(),r=se(),i=_e(),o=BD(),a=HD(),s=xD(),u=UD(),l=GD(),c=.08913147449493408,f=2.249481201171875,d=.807220458984375,p=.9399557113647461,h=.9836282730102539;function m(v){var _,b,y,g,E;return e(v)?NaN:v===0?r:v===2?i:v===1?0:v>2||v<0?NaN:(v>1?(_=-1,y=2-v):(_=1,y=v),v=1-y,v<=.5?(g=v*(v+10),E=o(v),_*(g*c+g*E)):y>=.25?(g=t(-2*n(y)),y-=.25,E=a(y),_*(g/(f+E))):(y=t(-n(y)),y<3?(b=y-1.125,E=s(b),_*(d*y+E*y)):y<6?(b=y-3,E=u(b),_*(p*y+E*y)):(b=y-6,E=l(b),_*(h*y+E*y))))}return Wd=m,Wd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vd,U5;function qr(){if(U5)return Vd;U5=1;var e=WD();return Vd=e,Vd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var Xd,G5;function VD(){if(G5)return Xd;G5=1;var e=j(),t=Am(),n=ee(),r=sw(),i=6123233995736766e-32;function o(a){var s;return e(a)?NaN:a<-1||a>1?NaN:a>.5?2*t(n(.5-.5*a)):(s=r-t(a),s+=i,s+=r,s)}return Xd=o,Xd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jd,W5;function XD(){if(W5)return jd;W5=1;var e=VD();return jd=e,jd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kd,V5;function km(){if(V5)return Kd;V5=1;var e=1.4142135623730951;return Kd=e,Kd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yd,X5;function jD(){if(X5)return Yd;X5=1;function e(t){return t===0?.16666666666666666:.16666666666666666+t*.16666666666666666}return Yd=e,Yd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zd,j5;function KD(){if(j5)return zd;j5=1;function e(t){return t===0?.058333333333333334:.058333333333333334+t*(.06666666666666667+t*.008333333333333333)}return zd=e,zd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jd,K5;function YD(){if(K5)return Jd;K5=1;function e(t){return t===0?.0251984126984127:.0251984126984127+t*(.026785714285714284+t*(.0017857142857142857+t*.0001984126984126984))}return Jd=e,Jd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qd,Y5;function zD(){if(Y5)return Qd;Y5=1;function e(t){return t===0?.012039792768959435:.012039792768959435+t*(.010559964726631394+t*(-.0011078042328042327+t*(.0003747795414462081+t*27557319223985893e-22)))}return Qd=e,Qd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zd,z5;function JD(){if(z5)return Zd;z5=1;function e(t){return t===0?.003837005972422639:.003837005972422639+t*(.00610392115600449+t*(-.0016095979637646305+t*(.0005945867404200738+t*(-6270542728876062e-20+t*2505210838544172e-23))))}return Zd=e,Zd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1,J5;function QD(){if(J5)return e1;J5=1;function e(t){return t===0?.0032177478835464946:.0032177478835464946+t*(.0010898206731540065+t*(-.0012579159844784845+t*(.0006908420797309686+t*(-.00016376804137220805+t*(154012654012654e-19+t*16059043836821613e-26)))))}return e1=e,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1,Q5;function ZD(){if(Q5)return t1;Q5=1;function e(t){return t===0?.001743826229834001:.001743826229834001+t*(3353097688001788e-20+t*(-.0007624513544032393+t*(.0006451304695145635+t*(-.000249472580470431+t*(49255746366361444e-21+t*(-39851014346715405e-22+t*7647163731819816e-28))))))}return t1=e,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1,Z5;function eP(){if(Z5)return n1;Z5=1;function e(t){return t===0?.0009647274732138864:.0009647274732138864+t*(-.0003110108632631878+t*(-.00036307660358786886+t*(.0005140660578834113+t*(-.00029133414466938067+t*(9086710793521991e-20+t*(-15303004486655377e-21+t*(10914179173496788e-22+t*28114572543455206e-31)))))))}return n1=e,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,e8;function tP(){if(e8)return r1;e8=1;function e(t){return t===0?.0005422926281312969:.0005422926281312969+t*(-.0003694266780000966+t*(-.00010230378073700413+t*(.00035764655430568635+t*(-.00028690924218514614+t*(.00012645437628698076+t*(-33202652391372056e-21+t*(4890304529197534e-21+t*(-3123956959982987e-22+t*822063524662433e-32))))))))}return r1=e,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var i1,t8;function nP(){if(t8)return i1;t8=1;var e=Im(),t=Lt(),n=ee(),r=ht(),i=jD(),o=KD(),a=YD(),s=zD(),u=JD(),l=QD(),c=ZD(),f=eP(),d=tP(),p=0,h=[1,0,0,0,0,0,0,0,0,0];function m(v,_){var b,y;return y=e(v/2,.5)*n(v*r)*(_-.5),b=1/v,h[1]=i(b),h[2]=o(b),h[3]=a(b),h[4]=s(b),h[5]=u(b),h[6]=l(b),h[7]=c(b),h[8]=f(b),h[9]=d(b),p+y*t(h,y*y)}return i1=m,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var o1,n8;function rP(){if(n8)return o1;n8=1;var e=Im(),t=Lt(),n=ee(),r=le(),i=ht(),o=[0,0,0,0,0,0,0];function a(s,u){var l,c,f,d,p,h,m,v;return v=e(s/2,.5)*n(s*i)*u,d=s+2,p=s+4,h=s+6,o[0]=1,o[1]=-(s+1)/(2*d),d*=s+2,o[2]=-s*(s+1)*(s+3)/(8*d*p),d*=s+2,o[3]=-s*(s+1)*(s+5)*((3*s+7)*s-2)/(48*d*p*h),d*=s+2,p*=s+4,o[4]=-s*(s+1)*(s+7)*(((((15*s+154)*s+465)*s+286)*s-336)*s+64)/(384*d*p*h*(s+8)),d*=s+2,o[5]=-s*(s+1)*(s+3)*(s+9)*((((((35*s+452)*s+1573)*s+600)*s-2020)*s+928)*s-128)/(1280*d*p*h*(s+8)*(s+10)),d*=s+2,p*=s+4,h*=s+6,o[6]=-s*(s+1)*(s+11)*(((((((((((945*s+31506)*s+425858)*s+2980236)*s+11266745)*s+20675018)*s+7747124)*s-22574632)*s-8565600)*s+18108416)*s-7099392)*s+884736)/(46080*d*p*h*(s+8)*(s+10)*(s+12)),m=n(s),f=r(m*v,1/s),c=f*f,l=t(o,c),l*=m,l/=f,-l}return o1=a,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var a1,r8;function iP(){if(r8)return a1;r8=1;var e=qr(),t=On(),n=ee(),r=le(),i=Rm(),o=km();function a(s,u){var l,c,f,d,p,h,m;return s>1e20?-e(2*u)*o:(l=1/(s-.5),c=48/(l*l),f=((20700*l/c-98)*l-16)*l+96.36,d=((94.5/(c+f)-3)/c+1)*n(l*i)*s,m=r(d*2*u,2/s),m>.05+l?(h=-e(2*u)*o,m=h*h,s<5&&(f+=.3*(s-4.5)*(h+.6)),f+=(((.05*d*h-5)*h-7)*h-2)*h+c,m=(((((.4*m+6.3)*m+36)*m+94.5)/f-m-3)/c+1)*h,m=t(l*m*m)):m=((1/(((s+6)/(s*m)-.089*d-.822)*(s+2)*3)+.5/(s+4))*m-1)*(s+1)/(s+2)+1/m,p=n(s*m),-p)}return a1=a,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var s1,i8;function oP(){if(i8)return s1;i8=1;var e=qr(),t=Be(),n=kn(),r=aw(),i=XD(),o=ee(),a=Z(),s=Lm(),u=le(),l=Mr(),c=km(),f=ht(),d=nP(),p=rP(),h=iP(),m=268435456,v=1/3,_=106/3,b=.8549879733383485;function y(g,E,A){var $,C,I,T,S,w,R,L,O,k,P,M,D,N,K,F;if(S=0,E>A?(R=A,A=E,E=R,T=!0):T=!1,t(g)===g&&g<20)switch(C=n(1,_),t(g)){case 1:E===.5?S=0:S=-s(f*E)/l(f*E);break;case 2:S=(2*E-1)/o(2*E*A);break;case 4:w=4*E*A,I=o(w),D=4*s(i(I)/3)/I,N=o(D-4),S=E-.5<0?-N:N;break;case 6:if(E<1e-150)return(T?-1:1)*h(g,E);K=4*(E-E*E),F=u(K,v),M=6*(1+b*(1/F-1));do O=M*M,k=O*O,P=M*k,L=M,M=2*(8*K*P-270*O+2187)/(5*(4*K*k-216*M-243));while(a((M-L)/M)>C);M=o(M-g),S=E-.5<0?-M:M;break;default:g>m?S=e(2*E)*c:g<3?($=.2742-g*.0242143,E>$?S=d(g,E):S=p(g,E)):($=n(1,r(g/-.654)),E>$?S=h(g,E):S=p(g,E))}else g>m?S=-e(2*E)*c:g<3?($=.2742-g*.0242143,E>$?S=d(g,E):S=p(g,E)):($=n(1,r(g/-.654)),E>$?S=h(g,E):S=p(g,E));return T?-S:S}return s1=y,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var u1,o8;function aP(){if(o8)return u1;o8=1;var e=oP();function t(n,r,i){var o,a,s,u;return a=r/2,s=1-a,o=n*2,u=e(o,a,s),i&&(i.value=u*u/(o+u*u)),o/(o+u*u)}return u1=t,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var l1,a8;function sP(){if(a8)return l1;a8=1;var e=Lt(),t=qr(),n=ee(),r=ue(),i=km(),o=[0,0,0,0,0,0,0],a=[0,0,0,0];function s(u,l,c){var f,d,p,h,m,v,_;return f=t(2*c),f/=-n(u/2),a[0]=f,v=l-u,h=v*v,m=h*v,o[0]=-v*i/2,o[1]=(1-2*v)/8,o[2]=-(v*i/48),o[3]=-1/192,o[4]=-v*i/3840,o[5]=0,o[6]=0,a[1]=e(o,f),o[0]=v*i*(3*v-2)/12,o[1]=(20*h-12*v+1)/128,o[2]=v*i*(20*v-1)/960,o[3]=(16*h+30*v-15)/4608,o[4]=v*i*(21*v+32)/53760,o[5]=(-(32*h)+63)/368640,o[6]=-v*i*(120*v+17)/25804480,a[2]=e(o,f),o[0]=v*i*(-75*h+80*v-16)/480,o[1]=(-1080*m+868*h-90*v-45)/9216,o[2]=v*i*(-1190*h+84*v+373)/53760,o[3]=(-2240*m-2508*h+2100*v-165)/368640,o[4]=0,o[5]=0,o[6]=0,a[3]=e(o,f),p=e(a,1/u),d=p*p,_=-r(-d/2),d===0?.5:(1+p*n((1+_)/d))/2}return l1=s,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var c1,s8;function Tw(){if(s8)return c1;s8=1;var e=re(),t=jt(),n=t/4;function r(i,o){return a;function a(s){var u,l,c;return c=1-s,c===0?[-n,-n]:s===0?[-n,-n]:(l=e(s)+o*e(c)+i,u=1/s-o/c,[l,u])}}return c1=r,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,u8;function uP(){if(u8)return f1;u8=1;var e=j();function t(n){return n===0||e(n)?n:n<0?-1:1}return f1=t,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1,l8;function ko(){if(l8)return d1;l8=1;var e=uP();return d1=e,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/tools/roots.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var p1,c8;function Rw(){if(c8)return p1;c8=1;var e=ko(),t=Z(),n=kn(),r=jt();function i(o,a,s,u,l,c){var f,d,p,h,m,v,_,b,y,g;y=0,f=0,m=a,h=n(1,1-l),_=r,d=r,p=r,v=c;do{if(f=y,p=d,d=_,b=o(m),y=b[0],g=b[1],v-=1,y===0)break;if(g===0?(f===0&&(m===s?a=u:a=s,f=o(a),_=a-m),e(f)*e(y)<0?_<0?_=(m-s)/2:_=(m-u)/2:_<0?_=(m-u)/2:_=(m-s)/2):_=y/g,t(_*2)>t(p)&&(_=_>0?(m-s)/2:(m-u)/2),a=m,m-=_,m<=s){if(_=.5*(a-s),m=a-_,m===s||m===u)break}else if(m>=u&&(_=.5*(a-u),m=a-_,m===s||m===u))break;_>0?u=a:s=a}while(v&&t(m*h)<t(_));return m}return p1=i,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,f8;function lP(){if(f8)return h1;f8=1;function e(t){return t===0?-1:-1+t*(-5+t*5)}return h1=e,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m1,d8;function cP(){if(d8)return m1;d8=1;function e(t){return t===0?1:1+t*(21+t*(-69+t*46))}return m1=e,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,p8;function fP(){if(p8)return v1;p8=1;function e(t){return t===0?7:7+t*(-2+t*(33+t*(-62+t*31)))}return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,h8;function dP(){if(h8)return _1;h8=1;function e(t){return t===0?25:25+t*(-52+t*(-17+t*(88+t*(-115+t*46))))}return _1=e,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,m8;function pP(){if(m8)return b1;m8=1;function e(t){return t===0?7:7+t*(12+t*(-78+t*52))}return b1=e,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,v8;function hP(){if(v8)return g1;v8=1;function e(t){return t===0?-7:-7+t*(2+t*(183+t*(-370+t*185)))}return g1=e,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,_8;function mP(){if(_8)return y1;_8=1;function e(t){return t===0?-533:-533+t*(776+t*(-1835+t*(10240+t*(-13525+t*5410))))}return y1=e,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,b8;function vP(){if(b8)return E1;b8=1;function e(t){return t===0?-1579:-1579+t*(3747+t*(-3372+t*(-15821+t*(45588+t*(-45213+t*15071)))))}return E1=e,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w1,g8;function _P(){if(g8)return w1;g8=1;function e(t){return t===0?449:449+t*(-1259+t*(-769+t*(6686+t*(-9260+t*3704))))}return w1=e,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,y8;function bP(){if(y8)return S1;y8=1;function e(t){return t===0?63149:63149+t*(-151557+t*(140052+t*(-727469+t*(2239932+t*(-2251437+t*750479)))))}return S1=e,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $1,E8;function gP(){if(E8)return $1;E8=1;function e(t){return t===0?29233:29233+t*(-78755+t*(105222+t*(146879+t*(-1602610+t*(3195183+t*(-2554139+t*729754))))))}return $1=e,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,w8;function yP(){if(w8)return A1;w8=1;function e(t){return t===0?1:1+t*(-13+t*13)}return A1=e,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1,S8;function EP(){if(S8)return T1;S8=1;function e(t){return t===0?1:1+t*(21+t*(-69+t*46))}return T1=e,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var R1,$8;function wP(){if($8)return R1;$8=1;var e=Lt(),t=qr(),n=Z(),r=ue(),i=re(),o=ee(),a=Mr(),s=Lm(),u=Tw(),l=Rw(),c=lP(),f=cP(),d=fP(),p=dP(),h=pP(),m=hP(),v=mP(),_=vP(),b=_P(),y=bP(),g=gP(),E=yP(),A=EP(),$=[0,0,0,0,0,0],C=[0,0,0,0];function I(T,S,w){var R,L,O,k,P,M,D,N,K,F,W,Y,J,q,x,B,ce,ie,X,z;return P=t(2*T)/-o(S/2),ie=a(w),ce=s(w),C[0]=P,x=ie*ie,B=ce*ce,J=ie*ce,Y=J*J,W=Y*J,F=Y*Y,K=Y*W,N=W*W,D=F*W,$[0]=(2*x-1)/(3*J),$[1]=-c(x)/(36*Y),$[2]=f(x)/(1620*W),$[3]=d(x)/(6480*F),$[4]=p(x)/(90720*K),$[5]=0,C[1]=e($,P),$[0]=-h(x)/(405*W),$[1]=m(x)/(2592*F),$[2]=-v(x)/(204120*K),$[3]=-_(x)/(2099520*N),$[4]=0,$[5]=0,C[2]=e($,P),$[0]=b(x)/(102060*K),$[1]=-y(x)/(20995200*N),$[2]=g(x)/(36741600*D),$[3]=0,$[4]=0,$[5]=0,C[3]=e($,P),M=e(C,1/S),O=ce/ie,O*=O,q=-(M*M)/(2*x)+i(x)+B*i(B)/x,n(M)<.7?($[0]=x,$[1]=J,$[2]=(1-2*x)/3,$[3]=E(x)/(36*J),$[4]=A(x)/(270*Y),$[5]=0,z=e($,M)):(X=r(q),$[0]=X,$[1]=O,$[2]=0,$[3]=3*O*(3*O+1)/6,$[4]=4*O*(4*O+1)*(4*O+2)/24,$[5]=5*O*(5*O+1)*(5*O+2)*(5*O+3)/120,z=e($,X),(z-x)*M<0&&(z=1-z)),M<0?(L=0,R=x):(L=x,R=1),(z<L||z>R)&&(z=(L+R)/2),k=u(-q,O),z=l(k,z,L,R,32,100),z}return R1=I,R1}var si={exports:{}},ui={exports:{}},I1,A8;function SP(){if(A8)return I1;A8=1;var e=1e3,t=e*60,n=t*60,r=n*24,i=r*365.25;I1=function(l,c){c=c||{};var f=typeof l;if(f==="string"&&l.length>0)return o(l);if(f==="number"&&isNaN(l)===!1)return c.long?s(l):a(l);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(l))};function o(l){if(l=String(l),!(l.length>100)){var c=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(l);if(c){var f=parseFloat(c[1]),d=(c[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return f*i;case"days":case"day":case"d":return f*r;case"hours":case"hour":case"hrs":case"hr":case"h":return f*n;case"minutes":case"minute":case"mins":case"min":case"m":return f*t;case"seconds":case"second":case"secs":case"sec":case"s":return f*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return f;default:return}}}}function a(l){return l>=r?Math.round(l/r)+"d":l>=n?Math.round(l/n)+"h":l>=t?Math.round(l/t)+"m":l>=e?Math.round(l/e)+"s":l+"ms"}function s(l){return u(l,r,"day")||u(l,n,"hour")||u(l,t,"minute")||u(l,e,"second")||l+" ms"}function u(l,c,f){if(!(l<c))return l<c*1.5?Math.floor(l/c)+" "+f:Math.ceil(l/c)+" "+f+"s"}return I1}var T8;function $P(){return T8||(T8=1,(function(e,t){t=e.exports=i.debug=i.default=i,t.coerce=u,t.disable=a,t.enable=o,t.enabled=s,t.humanize=SP(),t.names=[],t.skips=[],t.formatters={};var n;function r(l){var c=0,f;for(f in l)c=(c<<5)-c+l.charCodeAt(f),c|=0;return t.colors[Math.abs(c)%t.colors.length]}function i(l){function c(){if(c.enabled){var f=c,d=+new Date,p=d-(n||d);f.diff=p,f.prev=n,f.curr=d,n=d;for(var h=new Array(arguments.length),m=0;m<h.length;m++)h[m]=arguments[m];h[0]=t.coerce(h[0]),typeof h[0]!="string"&&h.unshift("%O");var v=0;h[0]=h[0].replace(/%([a-zA-Z%])/g,function(b,y){if(b==="%%")return b;v++;var g=t.formatters[y];if(typeof g=="function"){var E=h[v];b=g.call(f,E),h.splice(v,1),v--}return b}),t.formatArgs.call(f,h);var _=c.log||t.log||console.log.bind(console);_.apply(f,h)}}return c.namespace=l,c.enabled=t.enabled(l),c.useColors=t.useColors(),c.color=r(l),typeof t.init=="function"&&t.init(c),c}function o(l){t.save(l),t.names=[],t.skips=[];for(var c=(typeof l=="string"?l:"").split(/[\s,]+/),f=c.length,d=0;d<f;d++)c[d]&&(l=c[d].replace(/\*/g,".*?"),l[0]==="-"?t.skips.push(new RegExp("^"+l.substr(1)+"$")):t.names.push(new RegExp("^"+l+"$")))}function a(){t.enable("")}function s(l){var c,f;for(c=0,f=t.skips.length;c<f;c++)if(t.skips[c].test(l))return!1;for(c=0,f=t.names.length;c<f;c++)if(t.names[c].test(l))return!0;return!1}function u(l){return l instanceof Error?l.stack||l.message:l}})(ui,ui.exports)),ui.exports}var R8;function Iw(){return R8||(R8=1,(function(e,t){var n={};t=e.exports=$P(),t.log=o,t.formatArgs=i,t.save=a,t.load=s,t.useColors=r,t.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:u(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}t.formatters.j=function(l){try{return JSON.stringify(l)}catch(c){return"[UnexpectedJSONParseError]: "+c.message}};function i(l){var c=this.useColors;if(l[0]=(c?"%c":"")+this.namespace+(c?" %c":" ")+l[0]+(c?"%c ":" ")+"+"+t.humanize(this.diff),!!c){var f="color: "+this.color;l.splice(1,0,f,"color: inherit");var d=0,p=0;l[0].replace(/%[a-zA-Z%]/g,function(h){h!=="%%"&&(d++,h==="%c"&&(p=d))}),l.splice(p,0,f)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(l){try{l==null?t.storage.removeItem("debug"):t.storage.debug=l}catch{}}function s(){var l;try{l=t.storage.debug}catch{}return!l&&typeof process<"u"&&"env"in process&&(l=n.DEBUG),l}t.enable(s());function u(){try{return window.localStorage}catch{}}})(si,si.exports)),si.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,I8;function No(){if(I8)return L1;I8=1;var e=34028234663852886e22;return L1=e,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1,L8;function AP(){if(L8)return C1;L8=1;var e=Iw(),t=Ew(),n=Z(),r=ue(),i=re(),o=No(),a=e("gammaincinv:higher_newton");function s(u,l,c,f,d,p,h,m){var v,_,b,y,g,E,A,$,C,I,T,S,w,R;R=u,T=1,S=1,E=l*l,_=u;do{if(R=u,A=R*R,c===0){if(v=(1-l)*i(R)+R+p,v>i(o))return a("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),_;w=r(v)}else w=-h*R;m?($=t(R,l,!0,!1),b=-w*($-f)):(C=t(R,l,!0,!0),b=w*(C-d)),w=b,f>1e-120||S>1?(y=.5*(R-l+1)/R,g=(2*A-4*R*l+4*R+2*E-3*l+1)/A,g/=6,u=R+w*(1+w*(y+w*g))):u=R+w,T=n(R/u-1),S+=1,R=u,R<0&&(R=_,S=100)}while(T>2e-14&&S<35);return(T>2e-14||S>99)&&a("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),I=R||0,I}return C1=s,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,C8;function TP(){if(C8)return k1;C8=1;function e(t){return t===0?0:0+t*(1+t*(1+t*(1.5+t*(2.6666666666666665+t*(5.208333333333333+t*10.8)))))}return k1=e,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,k8;function RP(){if(k8)return N1;k8=1;function e(t){return t===0?1:1+t*(1+t*(.3333333333333333+t*(.027777777777777776+t*(-.003703703703703704+t*(.0002314814814814815+t*5878894767783657e-20)))))}return N1=e,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,N8;function Lw(){if(N8)return O1;N8=1;var e=Z(),t=ue(),n=re(),r=Lt(),i=TP(),o=RP(),a=1e-8,s=.08333333333333333,u=.008333333333333333,l=[1,0,0,0,0,0];function c(f){var d,p,h,m,v,_,b,y,g;if(g=f*f*.5,f===0?v=0:f<-1?(y=t(-1-g),v=i(y)):f<1?(y=f,v=o(y)):(y=11+g,_=n(y),v=y+_,y=1/y,d=_*_,p=d*_,h=p*_,m=h*_,l[1]=(2-_)*.5,l[2]=(-9*_+6+2*d)/6,l[3]=-(3*p+36*_-22*d-12)*s,l[4]=(60+350*d-300*_-125*p+12*h)/60,l[5]=-(-120-274*h+900*_-1700*d+1125*p+20*m)*u,v+=_*y*r(l,y)),y=1,f>-3.5&&f<-.03||f>.03&&f<40){y=1,b=v;do v=b*(g+n(b))/(b-1),y=e(b/v-1),b=v;while(y>a)}return v}return O1=c,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,O8;function IP(){if(O8)return M1;O8=1;var e=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function t(n,r){var i,o,a,s,u;o=0,a=0,i=r+r,u=n;do s=a,a=o,o=i*a-s+e[u],u-=1;while(u>=0);return(o-s)/2}return M1=t,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1,M8;function LP(){if(M8)return D1;M8=1;function e(t){return t===0?.025721014990011306:.025721014990011306+t*(.08247596616699963+t*(-.0025328157302663564+t*(.0006099292666946337+t*(-.00033543297638406+t*.000250505279903))))}return D1=e,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,D8;function CP(){if(D8)return P1;D8=1;function e(t){return t===0?.08333333333333333:.08333333333333333+t*(-.002777777777777778+t*(.0007936507936507937+t*-.0005952380952380953))}return P1=e,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1,P8;function kP(){if(P8)return F1;P8=1;var e=Pn(),t=re(),n=$w(),r=Co(),i=No(),o=IP(),a=LP(),s=CP(),u=.30865217988013566;function l(c){var f;return c<r?i:c<1?e(c+1)-(c+.5)*t(c)+c-n:c<2?e(c)-(c-.5)*t(c)+c-n:c<3?e(c-1)-(c-.5)*t(c)+c-n+t(c-1):c<12?(f=18/(c*c)-1,o(17,f)/(12*c)):(f=1/(c*c),c<1e3?a(f)/(u+f)/c:s(f)/c)}return F1=l,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,F8;function NP(){if(F8)return q1;F8=1;var e=ue(),t=Je(),n=re(),r=No(),i=To(),o=kP();function a(s){return s>=3?e(o(s)):s>0?t(s)/(e(-s+(s-.5)*n(s))*i):r}return q1=a,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,q8;function OP(){if(q8)return B1;q8=1;function e(t){var n,r,i;return t===0?-.3333333333438:(t<0?n=-t:n=t,n<=1?(r=-.3333333333438+t*(-.2070740359969+t*(-.05041806657154+t*(-.004923635739372+t*-4293658292782e-17))),i=1+t*(.7045554412463+t*(.2118190062224+t*(.03048648397436+t*.001605037988091)))):(t=1/t,r=-4293658292782e-17+t*(-.004923635739372+t*(-.05041806657154+t*(-.2070740359969+t*-.3333333333438))),i=.001605037988091+t*(.03048648397436+t*(.2118190062224+t*(.7045554412463+t*1)))),r/i)}return B1=e,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,B8;function MP(){if(B8)return H1;B8=1;var e=Z(),t=re(),n=Lw(),r=OP();function i(o){var a;return e(o)<1?r(o):(a=n(o),t(o/(a-1))/o)}return H1=i,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1,H8;function DP(){if(H8)return x1;H8=1;function e(t){var n,r,i;return t===0?-.0172847633523:(t<0?n=-t:n=t,n<=1?(r=-.0172847633523+t*(-.0159372646475+t*(-.00464910887221+t*(-.00060683488776+t*-614830384279e-17))),i=1+t*(.764050615669+t*(.297143406325+t*(.0579490176079+t*.00574558524851)))):(t=1/t,r=-614830384279e-17+t*(-.00060683488776+t*(-.00464910887221+t*(-.0159372646475+t*-.0172847633523))),i=.00574558524851+t*(.0579490176079+t*(.297143406325+t*(.764050615669+t*1)))),r/i)}return x1=e,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1,x8;function PP(){if(x8)return U1;x8=1;function e(t){var n,r,i;return t===0?-.0172839517431:(t<0?n=-t:n=t,n<=1?(r=-.0172839517431+t*(-.0146362417966+t*(-.00357406772616+t*(-.000391032032692+t*249634036069e-17))),i=1+t*(.690560400696+t*(.249962384741+t*(.0443843438769+t*.00424073217211)))):(t=1/t,r=249634036069e-17+t*(-.000391032032692+t*(-.00357406772616+t*(-.0146362417966+t*-.0172839517431))),i=.00424073217211+t*(.0443843438769+t*(.249962384741+t*(.690560400696+t*1)))),r/i)}return U1=e,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1,U8;function FP(){if(U8)return G1;U8=1;function e(t){var n,r,i;return t===0?.99994466948:(t<0?n=-t:n=t,n<=1?(r=.99994466948+t*(104.649839762+t*(857.204033806+t*(731.901559577+t*45.5174411671))),i=1+t*(104.526456943+t*(823.313447808+t*(3119.93802124+t*3970.03311219)))):(t=1/t,r=45.5174411671+t*(731.901559577+t*(857.204033806+t*(104.649839762+t*.99994466948))),i=3970.03311219+t*(3119.93802124+t*(823.313447808+t*(104.526456943+t*1)))),r/i)}return G1=e,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1,G8;function qP(){if(G8)return W1;G8=1;var e=re(),t=DP(),n=PP(),r=FP();function i(o){var a,s;return o<-5?(s=o*o,a=e(-o),(12-s-6*(a*a))/(12*s*o)):o<-2?t(o):o<2?n(o):o<1e3?(s=1/o,r(o)/(-12*o)):-1/(12*o)}return W1=i,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1,W8;function BP(){if(W8)return V1;W8=1;function e(t){var n,r,i;return t===0?.0495346498136:(t<0?n=-t:n=t,n<=1?(r=.0495346498136+t*(.0299521337141+t*(.00688296911516+t*(.000512634846317+t*-201411722031e-16))),i=1+t*(.759803615283+t*(.261547111595+t*(.0464854522477+t*.00403751193496)))):(t=1/t,r=-201411722031e-16+t*(.000512634846317+t*(.00688296911516+t*(.0299521337141+t*.0495346498136))),i=.00403751193496+t*(.0464854522477+t*(.261547111595+t*(.759803615283+t*1)))),r/i)}return V1=e,V1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X1,V8;function HP(){if(V8)return X1;V8=1;function e(t){var n,r,i;return t===0?.00452313583942:(t<0?n=-t:n=t,n<=1?(r=.00452313583942+t*(.00120744920113+t*(-789724156582e-16+t*(-504476066942e-16+t*-535770949796e-17))),i=1+t*(.912203410349+t*(.405368773071+t*(.0901638932349+t*.00948935714996)))):(t=1/t,r=-535770949796e-17+t*(-504476066942e-16+t*(-789724156582e-16+t*(.00120744920113+t*.00452313583942))),i=.00948935714996+t*(.0901638932349+t*(.405368773071+t*(.912203410349+t*1)))),r/i)}return X1=e,X1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1,X8;function xP(){if(X8)return j1;X8=1;function e(t){var n,r,i;return t===0?.00439937562904:(t<0?n=-t:n=t,n<=1?(r=.00439937562904+t*(.000487225670639+t*(-.000128470657374+t*(529110969589e-17+t*15716677175e-17))),i=1+t*(.794435257415+t*(.333094721709+t*(.0703527806143+t*.00806110846078)))):(t=1/t,r=15716677175e-17+t*(529110969589e-17+t*(-.000128470657374+t*(.000487225670639+t*.00439937562904))),i=.00806110846078+t*(.0703527806143+t*(.333094721709+t*(.794435257415+t*1)))),r/i)}return j1=e,j1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K1,j8;function UP(){if(j8)return K1;j8=1;function e(t){var n,r,i;return t===0?-.0011481191232:(t<0?n=-t:n=t,n<=1?(r=-.0011481191232+t*(-.112850923276+t*(1.51623048511+t*(-.218472031183+t*.0730002451555))),i=1+t*(14.2482206905+t*(69.7360396285+t*(218.938950816+t*277.067027185)))):(t=1/t,r=.0730002451555+t*(-.218472031183+t*(1.51623048511+t*(-.112850923276+t*-.0011481191232))),i=277.067027185+t*(218.938950816+t*(69.7360396285+t*(14.2482206905+t*1)))),r/i)}return K1=e,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1,K8;function GP(){if(K8)return Y1;K8=1;function e(t){var n,r,i;return t===0?-.000145727889667:(t<0?n=-t:n=t,n<=1?(r=-.000145727889667+t*(-.290806748131+t*(-13.308504545+t*(199.722374056+t*-11.4311378756))),i=1+t*(139.612587808+t*(2189.01116348+t*(7115.24019009+t*45574.6081453)))):(t=1/t,r=-11.4311378756+t*(199.722374056+t*(-13.308504545+t*(-.290806748131+t*-.000145727889667))),i=45574.6081453+t*(7115.24019009+t*(2189.01116348+t*(139.612587808+t*1)))),r/i)}return Y1=e,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1,Y8;function WP(){if(Y8)return z1;Y8=1;var e=re(),t=BP(),n=HP(),r=xP(),i=UP(),o=GP();function a(s){var u,l;return s<-8?(u=s*s,l=e(-s)/s,(-30+s*l*(6*u*l*l-12+u))/(12*s*u*u)):s<-4?t(s)/(s*s):s<-2?n(s):s<2?r(s):s<10?(u=1/s,i(u)/(s*s)):s<100?(u=1/s,o(u)/(s*s)):-e(s)/(12*s*s*s)}return z1=a,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1,z8;function VP(){if(z8)return J1;z8=1;var e=Iw(),t=Lt(),n=Pn(),r=qr(),i=Je(),o=ee(),a=Z(),s=ue(),u=Rt(),l=le(),c=re(),f=To(),d=No(),p=Io(),h=AP(),m=Lw(),v=NP(),_=MP(),b=qP(),y=WP(),g=e("gammaincinv:compute"),E=.5,A=.3333333333333333,$=.25,C=.2,I=.16666666666666666,T=.08333333333333333,S=.041666666666666664,w=[0,0,0,0,0];function R(L,O,k){var P,M,D,N,K,F,W,Y,J,q,x,B,ce,ie,X,z,fe,oe,Zt,Re,te,tt,be,_t,Kn,U,ne,Ma,Fv,qv,Da,Pa,Fa,qa,Bv,ge,pe,Ba,ye,nt,Me,Ha,xa,Ua;if(O<E?(N=!0,K=O,Ha=-1):(N=!1,K=k,Ha=1),ye=0,a(L-1)<1e-4&&(nt=0,N?O<.001?(Pa=O*O,Ma=Pa*O,Da=Ma*O,Re=Da*O,Zt=Re*O,te=O+Pa*E+Ma*A+Da*$+Re*C+Zt*I):te=-c(1-O):te=-c(k),L===1?(ye=2,qa=te):(D=n(L),ye=1)),k<1e-30&&L<E&&(nt=0,te=-c(k*i(L))+(L-1)*c(-c(k*i(L))),ye=1,D=n(L)),L>1&&L<500&&O<1e-80){for(nt=0,F=1/L,P=1/(L+1),te=(n(L+1)+c(O))*F,te=s(te),ie=te,Ba=0;Ba<10;Ba++)te=ie*s(te*F)*l(1-te*P,F);ye=1,D=n(L)}if(W=1/L*(c(O)+n(L+1)),W<c(C*(1+L))&&ye===0&&(Me=s(W),nt=0,tt=L*L,Fa=tt*L,Fv=Fa*L,X=L+1,x=X*X,q=X*x,J=x*x,z=L+2,Y=z*z,fe=L+3,w[0]=1,w[1]=1/X,w[2]=E*(3*L+5)/(x*z),w[3]=A*(31+8*tt+33*L)/(q*z*fe),w[4]=S*(2888+1179*Fa+125*Fv+3971*tt+5661*L)/(J*Y*fe*(L+4)),te=Me*t(w,Me),D=n(L),ye=1),L<10&&ye===0&&(B=o(L)/(v(L)*f),ce=u(.02,B),k<ce&&(nt=0,ge=1-L,U=ge*ge,ne=U*ge,oe=o(-2/L*c(k/B)),te=L*m(oe),pe=c(te),te>5?(be=pe*pe,_t=be*pe,Kn=_t*pe,Me=1/te,w[0]=pe-1,w[1]=(3*ge-2*ge*pe+be-2*pe+2)*E,w[2]=(24*ge*pe-11*U-24*ge-6*be+12*pe-12-9*ge*be+6*U*pe+2*_t)*I,w[3]=(-12*ne*pe+8.04*ge*be-114*U*pe+(72+36*be)+(3*Kn-72*pe+162)*(ge-168*ge*pe)-(12*_t+25*ne)-(22*ge*_t+36*U*be+120*U))*T,w[4]=0,te=te-pe+ge*Me*t(w,Me)):(Me=1/te,be=pe*pe,Bv=pe-1,xa=pe-ge*Me*Bv,xa<te&&(te-=xa)),D=n(L),ye=1)),a(K-E)<1e-5&&ye===0&&(nt=0,F=1/L,te=L-A+(.019753086419753086+.007211444248481286*F)*F,D=n(L),ye=1),L<1&&ye===0&&(nt=0,N?te=s(1/L*(c(K)+n(L+1))):te=s(1/L*(c(1-K)+n(L+1))),D=n(L),ye=1),ye===0)if(nt=1,F=1/L,Me=r(2*K),oe=Ha*Me/o(L*E),Me<d)oe+=(_(oe)+(b(oe)+y(oe)*F)*F)*F,te=L*m(oe),Ua=oe,qv=-o(L/p)*s(-E*L*Ua*Ua)/v(L),M=1/qv;else return g("Warning: Overflow problems in one or more steps of the computation."),NaN;return ye<2&&(qa=h(te,L,nt,O,k,D,M,N)),qa}return J1=R,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1,J8;function XP(){if(J8)return Q1;J8=1;var e=j(),t=Co(),n=se(),r=VP();function i(o,a,s){return e(o)||e(a)?NaN:a<t?NaN:o>1||o<0?NaN:s===!0?o===0?n:o===1?0:r(a,1-o,o):o===0?0:o===1?n:r(a,o,1-o)}return Q1=i,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1,Q8;function jP(){if(Q8)return Z1;Q8=1;var e=XP();return Z1=e,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ep,Z8;function KP(){if(Z8)return ep;Z8=1;var e=5e-324;return ep=e,ep}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var tp,ey;function YP(){if(ey)return tp;ey=1;var e=jP(),t=re(),n=ee(),r=KP(),i=Tw(),o=Rw();function a(s,u,l,c){var f,d,p,h,m,v,_,b,y,g,E,A,$,C,I,T,S,w,R,L,O,k,P,M,D,N,K,F,W,Y;return l<c?m=e(l,u,!0):m=e(c,u,!1),m/=s,C=u/s,F=n(1+C),w=F*F,R=w*F,L=w*w,O=R*w,k=R*R,P=L*R,M=L*L,D=O*L,_=O*O,K=m-C,I=K*K,T=I*K,S=I*I,N=F+1,b=N*N,y=N*b,g=b*b,E=(F+2)*(F-1)/(3*F),E+=(R+9*w+21*F+5)*K/(36*w*N),E-=(L-13*R+69*w+167*F+46)*I/(1620*b*R),E-=(7*O+21*L+70*R+26*w-93*F-31)*T/(6480*y*L),E-=(75*k+202*O+188*L-888*R-1345*w+118*F+138)*S/(272160*g*O),A=(28*L+131*R+402*w+581*F+208)*(F-1)/(1620*N*R),A-=(35*k-154*O-623*L-1636*R-3983*w-3514*F-925)*K/(12960*b*L),A-=(2132*P+7915*k+16821*O+35066*L+87490*R+141183*w+95993*F+21640)*I/(816480*O*y),A-=(11053*M+53308*P+117010*k+163924*O+116188*L-258428*R-677042*w-481940*F-105497)*T/(14696640*g*k),$=-((3592*P+8375*k-1323*O-29198*L-89578*R-154413*w-116063*F-29632)*(F-1))/(816480*O*b),$-=(442043*D+2054169*M+3803094*P+3470754*k+2141568*O-2393568*L-19904934*R-34714674*w-23128299*F-5253353)*K/(146966400*k*y),$-=(116932*_+819281*D+2378172*M+4341330*P+6806004*k+10622748*O+18739500*L+30651894*R+30869976*w+15431867*F+2919016)*I/(146966400*g*P),v=m+E/s+A/(s*s)+$/(s*s*s),v<=0&&(v=r),W=v-C*t(v)+(1+C)*t(1+C)-C,f=1/(1+C),p=v<C?f:0,h=v<C?1:f,Y=(p+h)/2,d=i(W,C),o(d,Y,p,h,32,100)}return tp=a,tp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/tools/roots.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var np,ty;function zP(){if(ty)return np;ty=1;var e=Z(),t=kn(),n=ko(),r=Xt(),i=jt();function o(a,s,u,l,c,f){var d,p,h,m,v,_,b,y,g,E,A,$,C,I,T,S;I=0,p=!1,_=s,v=t(1,1-c),g=r(1e7*s,1e7),b=0,h=g,m=g,y=f;do{if(b=I,m=h,h=g,C=a(_),I=C[0],T=C[1],S=C[2],y-=1,I===0)break;if(T===0?(b===0&&(_===u?s=l:s=u,b=a(s),g=s-_),n(b)*n(I)<0?g<0?g=(_-u)/2:g=(_-l)/2:g<0?g=(_-l)/2:g=(_-u)/2):S===0?g=I/T:(E=2*I,$=2*T-I*(S/T),e($)<1&&e(E)>=e($)*i?g=I/T:g=E/$,g*T/I<0&&(g=I/T,e(g)>2*e(s)&&(g=(g<0?-1:1)*2*e(s)))),d=e(g/m),d>.8&&d<2&&(g=g>0?(_-u)/2:(_-l)/2,e(g)>_&&(g=n(g)*_),m=g*3),s=_,_-=g,_<u){if(e(u)<1&&e(_)>1&&i/e(_)<e(u)?A=1e3:A=_/u,e(A)<1&&(A=1/A),!p&&A>0&&A<3)g=.99*(s-u),_=s-g,p=!0;else if(g=(s-u)/2,_=s-g,_===u||_===l)break}else if(_>l){if(e(l)<1&&e(_)>1&&i/e(_)<e(l)?A=1e3:A=_/l,e(A)<1&&(A=1/A),!p&&A>0&&A<3)g=.99*(s-l),_=s-g,p=!0;else if(g=(s-l)/2,_=s-g,_===u||_===l)break}g>0?l=s:u=s}while(y&&e(_*v)<e(g));return _}return np=o,np}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var rp,ny;function JP(){if(ny)return rp;ny=1;var e=Sw().assign,t=Z(),n=jt(),r=Vt();function i(o,a,s,u){return l;function l(c){var f,d,p,h,m;return m=1-c,f=[0,0],e(c,o,a,!0,u,f,1,0),h=f[0]-s,d=f[1],u&&(d=-d),m===0&&(m=r*64),c===0&&(c=r*64),p=d*(-(m*o)+(a-2)*c+1),t(p)<m*c*n&&(p/=m*c),u&&(p=-p),d===0&&(d=(u?-1:1)*r*64),[h,d,p]}}return rp=i,rp}var ip,ry;function QP(){if(ry)return ip;ry=1;var e=Lt(),t=Fr(),n=On(),r=Oe(),i=Am(),o=Ao(),a=ee(),s=Z(),u=ue(),l=le(),c=Mr(),f=Xt(),d=Rt(),p=re(),h=Vt(),m=Rm(),v=ze(),_=aP(),b=sP(),y=wP(),g=YP(),E=zP(),A=JP(),$=32,C=1e3,I=[0,0,0,0,0];function T(S,w,R,L){var O,k,P,M,D,N,K,F,W,Y,J,q,x,B,ce,ie,X,z,fe,oe,Zt,Re,te,tt,be,_t,Kn,U,ne;if(k=!1,L===0)return[1,0];if(R===0)return[0,1];if(S===1){if(w===1)return[R,1-R];q=w,w=S,S=q,q=L,L=R,R=q,k=!0}if(U=0,M=0,N=1,S===.5){if(w===.5)return U=c(R*m),U*=U,ne=c(L*m),ne*=ne,[U,ne];w>.5&&(q=w,w=S,S=q,q=L,L=R,R=q,k=!k)}if(w===.5&&S>=.5&&R!==1)Zt={},U=_(S,R,Zt),ne=Zt.value;else{if(w===1)return R<L?S>1?(U=l(R,1/S),ne=-n(p(R)/S)):(U=l(R,1/S),ne=1-U):(U=u(r(-L)/S),ne=-n(r(-L)/S)),k&&(q=ne,ne=U,U=q),[U,ne];if(S+w>5)R>.5&&(q=w,w=S,S=q,q=L,L=R,R=q,k=!k),W=d(S,w),F=f(S,w),a(W)>F-W&&W>5?(U=b(S,w,R),ne=1-U):(be=S+w,D=i(a(S/be)),P=W/be,P>=.2&&P<=.8&&be>=10?(J=l(R,1/S),J<.0025&&S+w<200?U=J*l(S*o(S,w),1/S):U=y(R,be,D),ne=1-U):(S<w&&(q=w,w=S,S=q,q=L,L=R,R=q,k=!k),Y=0,w<2&&(Y=o(S,w)),Y===0?ne=1:(ne=l(w*L*Y,1/w),U=1-ne)),ne>1e-5&&(U=g(S,w,R,L),ne=1-U));else if(S<1&&w<1){if(oe=(1-S)/(2-S-w),ie=t(oe,S,w)-R,s(ie)/R<v*3)return k?[1-oe,oe]:[oe,1-oe];ie<0&&(q=w,w=S,S=q,q=L,L=R,R=q,k=!k,oe=1-oe),fe=l(S*R*o(S,w),1/S),U=fe/(1+fe),ne=1/(1+fe),U>oe&&(U=oe),N=oe}else S>1&&w>1?(oe=(S-1)/(S+w-2),x=(w-1)/(S+w-2),z=t(oe,S,w)-R,z<0&&(q=w,w=S,S=q,q=L,L=R,R=q,q=x,x=oe,oe=q,k=!k),X=p(R*S*o(S,w))/S,U=u(X),ne=U<.9?1-U:-n(X),w<S&&U<.2&&(B=S-1,ce=w-1,Re=S*S,te=S*Re,tt=w*w,I[0]=0,I[1]=1,I[2]=ce/B,B*=B,I[3]=ce*(3*S*w+5*w+Re-S-4)/(2*(S+2)*B),B*=S+1,I[4]=ce*(33*S*tt+31*tt+8*Re*tt-30*S*w-47*w+11*Re*w+6*te*w+18+4*S-te+Re*Re-10*Re),I[4]/=3*(S+3)*(S+2)*B,U=e(I,U)),U>oe&&(U=oe),N=oe):(w<S&&(q=w,w=S,S=q,q=L,L=R,R=q,k=!k),l(R,1/S)<.5?(U=l(R*S*o(S,w),1/S),U===0&&(U=h),ne=1-U):(ne=l(1-l(R,w*o(S,w)),1/w),ne===0&&(ne=h),U=1-ne))}return U>.5&&(q=w,w=S,S=q,q=L,L=R,R=q,q=ne,ne=U,U=q,k=!k,_t=1-N,Kn=1-M,M=_t,N=Kn),M===0&&(k?(M=v,U<M&&(U=M)):M=h,U<M&&(U=M)),O=$,U<1e-50&&(S<1||w<1)&&(O*=3,O/=2),K=A(S,w,R<L?R:L,R>=L),U=E(K,U,M,N,O,C),U===M&&(U=0),k?[1-U,U]:[U,1-U]}return ip=T,ip}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var op,iy;function Nm(){if(iy)return op;iy=1;var e=QP();return op=e,op}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ap,oy;function ZP(){if(oy)return ap;oy=1;var e=j(),t=Nm();function n(r,i,o,a){return e(r)||e(i)||e(o)?NaN:i<=0||o<=0?NaN:r<0||r>1?NaN:a?t(i,o,1-r,r)[0]:t(i,o,r,1-r)[0]}return ap=n,ap}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sp,ay;function Cw(){if(ay)return sp;ay=1;var e=ZP();return sp=e,sp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var up,sy;function eF(){if(sy)return up;sy=1;var e=Cw(),t=j();function n(r,i,o){return t(r)||t(i)||t(o)||i<=0||o<=0||r<0||r>1?NaN:e(r,i,o)}return up=n,up}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lp,uy;function tF(){if(uy)return lp;uy=1;var e=Ne(),t=Cw(),n=j();function r(i,o){if(n(i)||n(o)||i<=0||o<=0)return e(NaN);return a;function a(s){return n(s)||s<0||s>1?NaN:t(s,i,o)}}return lp=r,lp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cp,ly;function nF(){if(ly)return cp;ly=1;var e=ve(),t=eF(),n=tF();return e(t,"factory",n),cp=t,cp}var rF=nF();const iF=Ye(rF);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fp,cy;function oF(){if(cy)return fp;cy=1;var e=ue(),t=le(),n=ee(),r=Io(),i=se(),o=j();function a(s,u,l){var c,f,d;return o(s)||o(u)||o(l)||l<0?NaN:l===0?s===u?i:0:(c=t(l,2),f=1/n(c*r),d=-1/(2*c),f*e(d*t(s-u,2)))}return fp=a,fp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dp,fy;function aF(){if(fy)return dp;fy=1;var e=se(),t=j();function n(r,i){return t(r)||t(i)?NaN:r===i?e:0}return dp=n,dp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pp,dy;function sF(){if(dy)return pp;dy=1;var e=Ne(),t=se(),n=j();function r(i){if(n(i))return e(NaN);return o;function o(a){return n(a)?NaN:a===i?t:0}}return pp=r,pp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hp,py;function uF(){if(py)return hp;py=1;var e=ve(),t=aF(),n=sF();return e(t,"factory",n),hp=t,hp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mp,hy;function lF(){if(hy)return mp;hy=1;var e=Ne(),t=uF().factory,n=j(),r=ee(),i=ue(),o=le(),a=Io();function s(u,l){var c,f,d;if(n(u)||n(l)||l<0)return e(NaN);if(l===0)return t(u);return c=o(l,2),f=1/r(c*a),d=-1/(2*c),p;function p(h){return n(h)?NaN:f*i(d*o(h-u,2))}}return mp=s,mp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vp,my;function cF(){if(my)return vp;my=1;var e=ve(),t=oF(),n=lF();return e(t,"factory",n),vp=t,vp}var fF=cF();const kw=Ye(fF);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _p,vy;function dF(){if(vy)return _p;vy=1;var e=Fr(),t=j(),n=le();function r(i,o){var a,s,u;return t(i)||t(o)||o<=0?NaN:i===0?.5:(a=n(i,2),o>2*a?(u=a/(o+a),s=e(u,.5,o/2,!0,!0)/2):(u=o/(o+a),s=e(u,o/2,.5,!0,!1)/2),i>0?1-s:s)}return _p=r,_p}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bp,_y;function pF(){if(_y)return bp;_y=1;var e=Ne(),t=Fr(),n=j(),r=le();function i(o){if(n(o)||o<=0)return e(NaN);return a;function a(s){var u,l,c;return n(s)?NaN:s===0?.5:(u=r(s,2),o>2*u?(c=u/(o+u),l=t(c,.5,o/2,!0,!0)/2):(c=o/(o+u),l=t(c,o/2,.5,!0,!1)/2),s>0?1-l:l)}}return bp=i,bp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gp,by;function hF(){if(by)return gp;by=1;var e=ve(),t=dF(),n=pF();return e(t,"factory",n),gp=t,gp}var mF=hF();const Nw=Ye(mF);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yp,gy;function vF(){if(gy)return yp;gy=1;var e=j(),t=Ao(),n=ee(),r=le();function i(o,a){var s;return e(o)||e(a)||a<=0?NaN:(s=n(a)*t(a/2,.5),r(a/(a+r(o,2)),(1+a)/2)/s)}return yp=i,yp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ep,yy;function _F(){if(yy)return Ep;yy=1;var e=Ne(),t=j(),n=Ao(),r=ee(),i=le();function o(a){var s,u;if(t(a)||a<=0)return e(NaN);return u=r(a)*n(a/2,.5),s=(1+a)/2,l;function l(c){return t(c)?NaN:i(a/(a+i(c,2)),s)/u}}return Ep=o,Ep}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wp,Ey;function bF(){if(Ey)return wp;Ey=1;var e=ve(),t=vF(),n=_F();return e(t,"factory",n),wp=t,wp}var gF=bF();const Om=Ye(gF);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sp,wy;function yF(){if(wy)return Sp;wy=1;var e=Nm(),t=j(),n=ko(),r=ee();function i(o,a){var s,u;return t(a)||t(o)||a<=0||o<0||o>1?NaN:(s=o>.5?1-o:o,u=e(a/2,.5,2*s,1-2*s),n(o-.5)*r(a*u[1]/u[0]))}return Sp=i,Sp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $p,Sy;function EF(){if(Sy)return $p;Sy=1;var e=Ne(),t=Nm(),n=j(),r=ko(),i=ee();function o(a){if(n(a)||a<=0)return e(NaN);return s;function s(u){var l,c;return n(u)||u<0||u>1?NaN:(l=u>.5?1-u:u,c=t(a/2,.5,2*l,1-2*l),r(u-.5)*i(a*c[1]/c[0]))}}return $p=o,$p}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ap,$y;function wF(){if($y)return Ap;$y=1;var e=ve(),t=yF(),n=EF();return e(t,"factory",n),Ap=t,Ap}var SF=wF();const $F=Ye(SF),li=.02,AF=1e-6,TF=6,Ay=5e-5;function RF(){const e=[],t=10**(1/TF);for(let u=0;;u++){const l=AF*t**u;if(e.push(l),l*(t-1)>=li)break;if(l>=.25)throw new Error("hermite inverse-CDF table: the tail spacing never reaches the middle spacing below u = 0.25")}const n=e[e.length-1],r=li/2,i=[],o=Math.round(1/li)-1;for(let u=1;u<=o;u++){const l=u*li;l>n+r&&l<1-n-r&&i.push(l)}const a=e.map(u=>1-u).reverse(),s=Float64Array.from([...e,...i,...a]);for(let u=1;u<s.length;u++)if(!(s[u]>s[u-1]))throw new Error("hermite inverse-CDF table: u nodes are not strictly increasing");return s}const we=RF(),Ow=we[0],Mw=we[we.length-1];function Dw(e){return e>=Ow&&e<=Mw}function IF(e){const t=we.length,n=new Float64Array(t),r=new Float64Array(t);let i=-1/0;for(let a=0;a<t;a++){const s=we[a],u=e.quantile(s);if(Number.isNaN(u))throw new Error(`hermite inverse-CDF table: the quantile at node ${a} (u = ${s}) is NaN`);if(!Number.isFinite(u))return{kind:"refused",reason:`node ${a} (u = ${s}) has quantile ${u}`};const l=e.quantileSlope(u);if(Number.isNaN(l))throw new Error(`hermite inverse-CDF table: the quantile slope at node ${a} (u = ${s}) is NaN`);if(l<0)throw new Error(`hermite inverse-CDF table: the quantile slope at node ${a} (u = ${s}) is negative (${l})`);if(!Number.isFinite(l))return{kind:"refused",reason:`node ${a} (u = ${s}) has quantile slope ${l}`};i=Math.max(i,u),n[a]=i,r[a]=l}for(let a=0;a<t-1;a++){const s=(n[a+1]-n[a])/(we[a+1]-we[a]);if(s===0){if(r[a]!==0||r[a+1]!==0)return{kind:"refused",reason:`interval ${a} is flat but its end slopes are not both 0`};continue}const u=r[a]/s,l=r[a+1]/s,c=u*u+l*l;if(c>9)return{kind:"refused",reason:`interval ${a} would not be monotone (a² + b² = ${c.toPrecision(3)} > 9)`}}const o={values:n,slopes:r};for(let a=0;a<t-1;a++){const s=(we[a]+we[a+1])/2,u=Math.abs(e.cdf(Pw(o,s))-s);if(Number.isNaN(u))throw new Error(`hermite inverse-CDF table: the CDF at the midpoint of interval ${a} is NaN`);if(u>Ay)return{kind:"refused",reason:`the midpoint of interval ${a} (u = ${s.toPrecision(3)}) is off by ${u.toExponential(1)} in probability (at most ${Ay} allowed)`}}return{kind:"built",table:o}}function Pw(e,t){if(!Dw(t))throw new Error(`hermite inverse-CDF table: u = ${t} is outside the extreme nodes [${Ow}, ${Mw}]`);let n=0,r=we.length-1;for(;n<r-1;){const f=n+r>>1;we[f]<=t?n=f:r=f}const i=we[n+1]-we[n],o=(t-we[n])/i,a=o*o,s=a*o,u=e.values[n],l=e.values[n+1],c=(2*s-3*a+1)*u+(s-2*a+o)*i*e.slopes[n]+(-2*s+3*a)*l+(s-a)*i*e.slopes[n+1];return Math.min(Math.max(c,u),l)}class Fw{constructor(t){G(this,"entries",new Map);if(this.maxEntryCount=t,!(Number.isInteger(t)&&t>=1))throw new Error(`LruMap: the entry cap must be a positive integer, got ${t}`)}get size(){return this.entries.size}has(t){return this.entries.has(t)}get(t){if(!this.entries.has(t))return;const n=this.entries.get(t);return this.entries.delete(t),this.entries.set(t,n),n}set(t,n){if(this.entries.delete(t),this.entries.set(t,n),this.entries.size>this.maxEntryCount){const r=this.entries.keys().next().value;this.entries.delete(r)}}clear(){this.entries.clear()}}const Ty=1e-9,qw=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,Bw=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function LF(e){const[t,n,r]=e;return t<r?t<=n&&n<=r?null:`requires lo <= peak <= hi, got lo=${t}, peak=${n}, hi=${r}`:`requires lo < hi, got lo=${t}, hi=${r}`}function CF(e){const[t,n]=e;return t<n?null:`requires lo < hi, got lo=${t}, hi=${n}`}function kF(e){const[t,n]=e;return t>0&&n>0?null:`requires a > 0 and b > 0, got a=${t}, b=${n}`}function Ry(e){const t=e[1];return t>0?null:`requires sigma > 0, got sigma=${t}`}function NF(e){const[t,n]=e;return 0<t&&t<n?null:`requires 0 < lo < hi, got lo=${t}, hi=${n}`}function Iy(e){const[,t,n]=e;return t<=0?`requires sigma > 0, got sigma=${t}`:n<=0?`requires df > 0, got df=${n}`:null}function Ly(e,t){const n=t-e;return{cdf:r=>r<=e?0:r>=t?1:(r-e)/n,ppf:r=>e+r*n,pdf:r=>r>=e&&r<=t?1/n:0}}function OF(e,t,n){const r=n-e,i=(t-e)/r;return{cdf:o=>o<=e?0:o>=n?1:o<=t?(o-e)*(o-e)/(r*(t-e)):1-(n-o)*(n-o)/(r*(n-t)),ppf:o=>o<i?e+Math.sqrt(o*r*(t-e)):n-Math.sqrt((1-o)*r*(n-t)),pdf:o=>o<e||o>n?0:o===t?2/r:o<t?2*(o-e)/(r*(t-e)):2*(n-o)/(r*(n-t))}}function Cy(e,t){return{cdf:n=>Sm(n,e,t),ppf:n=>Si(n,e,t),pdf:n=>kw(n,e,t)}}function hh(e,t,n){return{cdf:r=>Nw((r-e)/t,n),ppf:r=>e+t*$F(r,n),pdf:r=>Om((r-e)/t,n)/t}}function MF(e,t){return{cdf:n=>ph(n,e,t),ppf:n=>iF(n,e,t),pdf:n=>qD(n,e,t)}}const DF=1e-10,PF=20,FF=1e-300,qF=24,BF=[-.906179845938664,-.5384693101056831,0,.5384693101056831,.906179845938664],HF=[.2369268850561891,.4786286704993665,.5688888888888889,.4786286704993665,.2369268850561891],xF=60,UF=.001;function mh(e,t,n,r,i){return(t-e)/6*(n+4*r+i)}function vh(e,t,n,r,i,o,a,s){const u=(t+n)/2,l=(t+u)/2,c=(u+n)/2,f=e(l),d=e(c),p=mh(t,u,r,f,i),h=mh(u,n,i,d,o),m=p+h,v=DF*Math.max(Math.abs(m),FF);return s>=PF||Math.abs(m-a)<=15*v?m+(m-a)/15:vh(e,t,u,r,f,i,p,s+1)+vh(e,u,n,i,d,o,h,s+1)}function GF(e,t,n){if(!(n>t))return 0;const r=(t+n)/2,i=e(t),o=e(r),a=e(n);return vh(e,t,n,i,o,a,mh(t,n,i,o,a),0)}function WF(e){const t=[0];for(let n=e;n>=1;n--)t.push(.5*2**-n);for(let n=0;n<=e;n++)t.push(1-.5*2**-n);return t.push(1),t}const Hw=WF(qF);function VF(e){return xw(e,Hw)}function XF(e,t){let n=0;for(let r=0;r<t.length-1;r++){const i=t[r],o=t[r+1],a=(o-i)/2,s=(i+o)/2;let u=0;BF.forEach((l,c)=>{u+=HF[c]*e(s+a*l)}),n+=a*u}return n}function xw(e,t){let n=0;for(let r=0;r<t.length-1;r++)n+=GF(e,t[r],t[r+1]);return n}function jF(e,t,n,r){const i=[t];for(let o=r;o>=1;o--){const a=n*2**-o;a>t&&i.push(a)}return i.push(n),xw(e,i)}function KF(e,t,n){const r=dn(e,t),i=dn(e,n)-r;return i>0?i*VF(o=>Math.min(Math.max(e.ppf(r+o*i),t),n)):0}function YF(e){return XF(t=>Math.log(Math.min(Math.max(e(t),Number.MIN_VALUE),Number.MAX_VALUE)),Hw)}function ky(e,t,n,r){return r>n?e*(r**3-n**3)/3+t*(r**2-n**2)/2:0}function _h(e,t,n){const[r,i]=e,o=Math.max(r,t),a=Math.min(i,n);return a>o?(a*a-o*o)/(2*(i-r)):0}function Ny(e,t,n){const[r,i,o]=e,a=o-r,s=i-r,u=o-i;let l=0;if(s>0){const c=2/(a*s);l+=ky(c,-r*c,Math.max(r,t),Math.min(i,n))}if(u>0){const c=2/(a*u);l+=ky(-c,o*c,Math.max(i,t),Math.min(o,n))}return l}function Oy(e,t,n){const[r,i]=e,o=Math.min(Math.max(t,0),1),a=Math.min(Math.max(n,0),1);return a>o?r/(r+i)*(ph(a,r+1,i)-ph(o,r+1,i)):0}function My(e){return Number.isFinite(e)?kw(e,0,1):0}function Ni(e){return e===-1/0?0:e===1/0?1:Sm(e,0,1)}function Tp(e,t,n){const[r,i]=e,o=(t-r)/i,a=(n-r)/i;return r*(Ni(a)-Ni(o))-i*(My(a)-My(o))}function zF(e,t,n){const[r,i]=e,o=a=>Number.isFinite(a)?(a-r)/i-i:a;return Math.exp(r+i*i/2)*(Ni(o(n))-Ni(o(t)))}function JF(e,t,n){const[r,i]=e;return _h([Math.log(r),Math.log(i)],t,n)}function QF(e,t,n){const[r,i]=e,o=Math.log(r),a=Math.log(i),s=Math.max(o,t),u=Math.min(a,n);return u>s?(Math.exp(u)-Math.exp(s))/(a-o):0}function Rp(e,t){return-(t+e*e)*Om(e,t)/(t-1)}function ZF(e,t,n){if(!Number.isFinite(e)||!Number.isFinite(t)){if(n<=1)return!Number.isFinite(e)&&!Number.isFinite(t)?NaN:Number.isFinite(e)?1/0:-1/0;const r=i=>Number.isFinite(i)?Rp(i,n):0;return r(t)-r(e)}return Math.abs(n-1)<UF?KF(hh(0,1,n),e,t):Rp(t,n)-Rp(e,n)}function Ip(e,t,n){const[r,i,o]=e,a=(t-r)/i,s=(n-r)/i,u=l=>l===-1/0?0:l===1/0?1:Nw(l,o);return r*(u(s)-u(a))+i*ZF(a,s,o)}function eq(e,t,n){const[r,i,o]=e;if(n===1/0)return 1/0;const a=Om(0,o)/i,s=l=>{const c=(l-r)/i;return a*(1+c*c/o)**(-(o+1)/2)},u=t===-1/0?0:Math.exp(t-n);return Math.exp(n)*jF(l=>l<=0?0:s(n+Math.log(l)),u,1,xF)}const Lp=100,qe={tri:{signature:"tri(lo, peak, hi)",note:"triangular, mode at peak; lo <= peak <= hi, lo < hi",nParams:3,check:LF,build:e=>({latent:OF(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:Ny,partialLatentFirstMoment:Ny,sampleTableMinimumPlannedDraws:null},uniform:{signature:"uniform(lo, hi)",note:"uniform; lo < hi",nParams:2,check:CF,build:e=>({latent:Ly(e[0],e[1]),logX:!1}),partialFirstMoment:_h,partialLatentFirstMoment:_h,sampleTableMinimumPlannedDraws:null},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:kF,build:e=>({latent:MF(e[0],e[1]),logX:!1}),partialFirstMoment:Oy,partialLatentFirstMoment:Oy,sampleTableMinimumPlannedDraws:Lp},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:Ry,build:e=>({latent:Cy(e[0],e[1]),logX:!1}),partialFirstMoment:Tp,partialLatentFirstMoment:Tp,sampleTableMinimumPlannedDraws:null},lognormal:{signature:"lognormal(mu, sigma)",note:"log-normal; mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:Ry,build:e=>({latent:Cy(e[0],e[1]),logX:!0}),partialFirstMoment:zF,partialLatentFirstMoment:Tp,sampleTableMinimumPlannedDraws:null},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:NF,build:e=>({latent:Ly(Math.log(e[0]),Math.log(e[1])),logX:!0}),partialFirstMoment:QF,partialLatentFirstMoment:JF,sampleTableMinimumPlannedDraws:null},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma is the scale, not the standard deviation; sigma > 0, df > 0",nParams:3,check:Iy,build:e=>({latent:hh(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:Ip,partialLatentFirstMoment:Ip,sampleTableMinimumPlannedDraws:Lp},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; mu/sigma are the location/scale of log(X), so sigma is not its standard deviation; sigma > 0, df > 0",nParams:3,check:Iy,build:e=>({latent:hh(e[0],e[1],e[2]),logX:!0}),partialFirstMoment:eq,partialLatentFirstMoment:Ip,sampleTableMinimumPlannedDraws:Lp}},tq=["normal","lognormal","t","logt"],Cp=["t","logt"];function nq(e){const[t,n]=e;return t<n?null:`requires lo < hi in the truncation window, got lo=${t}, hi=${n}`}function rq(e,t){const n=t.signature.split("(",2)[1].slice(0,-1);return{signature:`${e}-trunc(${n}, lo, hi)`,note:`${t.note}; explicitly truncated to [lo, hi]`,nParams:t.nParams+2,check:r=>t.check(r.slice(0,t.nParams))??nq(r.slice(t.nParams)),build:r=>t.build(r),partialFirstMoment:t.partialFirstMoment,partialLatentFirstMoment:t.partialLatentFirstMoment,sampleTableMinimumPlannedDraws:t.sampleTableMinimumPlannedDraws,hasTruncWindow:!0}}for(const e of tq)qe[`${e}-trunc`]=rq(e,qe[e]);function Uw(e){return Bw.test(e)}function Mm(e){const t=Bw.exec(e);if(!t)throw new Error(`malformed family spec ${JSON.stringify(e)}: expected "family(num, num, ...)"`);const n=t[1],r=t[2],i=qe[n];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(n)}; available: `+Object.values(qe).map(u=>u.signature).join(", "));const o=r.split(",").map(u=>u.trim());for(const u of o)if(!qw.test(u))throw new Error(`family spec ${JSON.stringify(e.trim())}: bad numeric argument ${JSON.stringify(u)}`);const a=o.map(Number);if(a.length!==i.nParams)throw new Error(`${n} takes ${i.nParams} arguments as ${i.signature}, got ${a.length}`);const s=i.check(a);if(s)throw new Error(`${e.trim()}: ${i.signature} ${s}`);return i.hasTruncWindow?{family:n,params:a.slice(0,-2),text:e.trim(),truncWindow:[a[a.length-2],a[a.length-1]]}:{family:n,params:a,text:e.trim(),truncWindow:null}}function dn(e,t){return t===-1/0?0:t===1/0?1:e.cdf(t)}class Oo{constructor(t,n,r,i,o,a,s,u,l,c){G(this,"plannedSampleDrawCount",0);G(this,"sampleTableState");this.spec=t,this.latent=n,this.logX=r,this.cdfLo=i,this.mass=o,this.xLo=a,this.xHi=s,this.yLo=u,this.yHi=l,this.sampleTableMinimumPlannedDraws=c,this.sampleTableState=c===null?{kind:"neverTabulated"}:{kind:"awaitingPlannedDraws",plannedDrawCount:0,minimumPlannedDrawCount:c}}latentQuantile(t){return this.latent.ppf(this.cdfLo+t*this.mass)}windowClampedX(t){const n=this.logX?Math.exp(t):t;return Math.min(Math.max(n,this.xLo),this.xHi)}inverseCdf(t){return this.windowClampedX(this.latentQuantile(t))}sampleInverseCdf(t){const n=this.sampleTableState;return n.kind==="built"&&Dw(t)?this.windowClampedX(Pw(n.table,t)):this.inverseCdf(t)}get sampleTableStatus(){return this.sampleTableState}planSampleDraws(t){if(!(Number.isFinite(t)&&t>=0))throw new Error(`${JSON.stringify(this.spec.text)}: planned draw count must be finite and non-negative, got ${t}`);const n=this.sampleTableMinimumPlannedDraws;if(!(n===null||this.sampleTableState.kind!=="awaitingPlannedDraws")){if(this.plannedSampleDrawCount+=t,this.plannedSampleDrawCount<n){this.sampleTableState={kind:"awaitingPlannedDraws",plannedDrawCount:this.plannedSampleDrawCount,minimumPlannedDrawCount:n};return}this.sampleTableState=IF(this.sampleTableSource())}}sampleTableSource(){return{quantile:t=>Math.min(Math.max(this.latentQuantile(t),this.yLo),this.yHi),quantileSlope:t=>this.mass/this.latent.pdf(t),cdf:t=>(dn(this.latent,t)-this.cdfLo)/this.mass}}cdf(t){if(t<=this.xLo)return 0;if(t>=this.xHi)return 1;if(this.logX&&t<=0)return 0;const n=this.logX?Math.log(t):t;return(dn(this.latent,n)-this.cdfLo)/this.mass}mean(){const t=qe[this.spec.family];if(t===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);const r=t.partialFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isFinite(r)?r:null}logMean(){const t=qe[this.spec.family];if(t===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);if(this.logX){const n=t.partialLatentFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isNaN(n)?null:n}if(this.spec.family==="beta"&&this.xLo<=0&&this.xHi>=1){const[n,r]=this.spec.params;return db(n)-db(n+r)}return this.cdf(0)>0?null:YF(n=>this.inverseCdf(n))}pdf(t){return t<this.xLo||t>this.xHi?0:this.logX?t<=0?0:this.latent.pdf(Math.log(t))/t/this.mass:this.latent.pdf(t)/this.mass}}function iq(e,t,n){const r=qe[e.family];if(r===void 0)throw new Error(`unknown distribution family ${JSON.stringify(e.family)}`);const{latent:i,logX:o}=r.build(e.params);let a=t===null?-1/0:t,s=n===null?1/0:n;e.truncWindow!==null&&(a=Math.max(a,e.truncWindow[0]),s=Math.min(s,e.truncWindow[1]));let u,l;o?(u=a>0?Math.log(a):-1/0,l=s>0?Math.log(s):-1/0):(u=a,l=s);const c=dn(i,u),d=dn(i,l)-c;if(d<Ty){let p=`the variable's range [${t}, ${n}]`;throw e.truncWindow!==null&&(p+=` ∩ the spec's truncation window [${e.truncWindow[0]}, ${e.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(e.text)}: essentially no probability mass in ${p} (mass ${d.toExponential(2)} < ${Ty})`)}return new Oo(e,i,o,c,d,a,s,u,l,r.sampleTableMinimumPlannedDraws)}const oq=8192,Dy=new Fw(oq);function Dm(e,t,n){const r=JSON.stringify([e.text,t,n]);let i=Dy.get(r);return i===void 0&&(i=iq(e,t,n),Dy.set(r,i)),i}const lr="pointmass",aq="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",sq=new RegExp(`^\\s*${lr}\\s*\\(\\s*(${aq})\\s*\\)\\s*$`),uq=new RegExp(`^\\s*${lr}\\b`);function Gw(e){const t=sq.exec(e);if(t===null)throw new Error(`malformed ${lr} spec ${JSON.stringify(e)}: expected "${lr}(num)"`);return Number(t[1])}function Ww(e){return uq.test(e)?Gw(e):null}function Vw(e){const t=Gw(e);return[[t,1],[t,1]]}const Pm="mixture",$i=2,Ai=6,Py=1e-6,Fy=200,ci=1e-10,kp=.001,qy=1e-9,By=10,Fm=new RegExp(`^\\s*${Pm}\\b`),lq=new RegExp(`^\\s*${Pm}\\s*\\(([\\s\\S]*)\\)\\s*$`),cq=new RegExp(`^\\s*${lr}\\b`),Hy="<weight>: <family spec>",fq='a point mass cannot be a mixture component: for "x, give or take very little, with probability p", use a narrow triangular component tri(x - w, x, x + w) with a small w of your choosing',dq="a nested mixture spec; a mixture spec is flat: write the nested components with their weights multiplied by the outer weight (the mixture() code helper flattens nesting itself)",pq='a mixture component is a distribution-family string like "beta(2, 8)" (piecewise-linear components are not supported)';function hq(e){const t=[];let n=0,r=0;for(let i=0;i<e.length;i++){const o=e[i];if(o==="("||o==="[")n+=1;else if(o===")"||o==="]"){if(n-=1,n<0)return null}else o===","&&n===0&&(t.push(e.slice(r,i)),r=i+1)}return n!==0?null:(t.push(e.slice(r)),t)}function mq(e){if(Fm.test(e))throw new Error(dq);if(cq.test(e))throw new Error(fq);if(!Uw(e))throw new Error(pq);return Mm(e)}function vq(e){if(!qw.test(e))throw new Error(`malformed weight ${JSON.stringify(e)}: expected a number like 0.3`);const t=Number(e);if(!Number.isFinite(t))throw new Error(`weight ${e} is not finite`);if(t<=0)throw new Error(`weight ${e} is not positive; every weight must be positive`);return t}function _q(e){let t=0;for(const n of e)t+=n;return Math.abs(t-1)<=Py?null:`weights sum to ${Number(t.toPrecision(10))}, not 1 (tolerance ${Py})`}function Xw(e){return e instanceof Error?e.message:String(e)}function jw(e){if(typeof e!="string")throw new Error(`mixture spec must be a string, got ${typeof e}`);const t=e.trim(),n=lq.exec(e),r=n===null?null:hq(n[1]);if(r===null)throw new Error(`malformed mixture spec ${JSON.stringify(t)}: expected "${Pm}(${Hy}, ...)" with balanced parentheses`);if(r.length===1&&r[0].trim()==="")throw new Error(`mixture spec ${JSON.stringify(t)} has no components; it needs between ${$i} and ${Ai}`);const i=r.length;if(i<$i){const s=r[0].indexOf(":"),u=(s<0?r[0]:r[0].slice(s+1)).trim();throw new Error(`mixture spec ${JSON.stringify(t)} has ${i} component; a mixture spec needs at least ${$i} (a one-component mixture is just its family string: write ${JSON.stringify(u)} on its own)`)}if(i>Ai)throw new Error(`mixture spec ${JSON.stringify(t)} has ${i} components; at most ${Ai} are allowed`);const o=[];r.forEach((s,u)=>{const l=s.trim(),c=`mixture spec ${JSON.stringify(t)}: component ${u+1} of ${i} (${JSON.stringify(l)})`;try{const f=l.indexOf(":");if(f<0)throw new Error(`expected "${Hy}"`);const d=vq(l.slice(0,f).trim());o.push([d,mq(l.slice(f+1).trim())])}catch(f){throw new Error(`${c}: ${Xw(f)}`)}});const a=_q(o.map(([s])=>s));if(a!==null)throw new Error(`mixture spec ${JSON.stringify(t)}: ${a}`);return{components:o,text:t}}function bq(e){return Fm.test(e)?jw(e):null}function gq(e){return Fm.test(e)}function yq(e,t){return`mixture spec component ${t} of ${e.components.length} (${e.components[t-1][1].text})`}function Eq(){const e=Math.round(1/kp)-1,t=Math.round(Math.log10(kp/qy)*By),n=[];for(let a=0;a<t;a++)n.push(qy*10**(a/By));const r=[];for(let a=1;a<=e;a++)r.push(a*kp);const i=n.map(a=>1-a).reverse(),o=Float64Array.from([...n,...r,...i]);for(let a=1;a<o.length;a++)if(!(o[a]>o[a-1]))throw new Error("mixture-spec inverse-CDF table u nodes are not strictly increasing");return o}const Np=Eq();class Mo{constructor(t,n,r){G(this,"weights");G(this,"supportLo");G(this,"supportHi");G(this,"tableXNodes",null);if(this.spec=t,this.components=r,n.length!==r.length)throw new Error(`${n.length} weights for ${r.length} components`);let i=0;for(const o of n)i+=o;this.weights=n.map(o=>o/i),this.supportLo=Math.min(...r.map(o=>o.inverseCdf(0))),this.supportHi=Math.max(...r.map(o=>o.inverseCdf(1)))}cdf(t){let n=0;return this.components.forEach((r,i)=>{n+=this.weights[i]*r.cdf(t)}),n}pdf(t){let n=0;return this.components.forEach((r,i)=>{n+=this.weights[i]*r.pdf(t)}),n}mean(){let t=0;for(const[n,r]of this.components.entries()){const i=r.mean();if(i===null)return null;t+=this.weights[n]*i}return t}logMean(){let t=0;for(const[n,r]of this.components.entries()){const i=r.logMean();if(i===null)return null;t+=this.weights[n]*i}return Number.isNaN(t)?null:t}inverseCdf(t){if(!(t>=0&&t<=1))throw new Error(`mixture spec ${JSON.stringify(this.spec.text)}: quantile level ${t} not in [0, 1]`);if(t===0)return this.supportLo;if(t===1)return this.supportHi;const n=this.components.map(a=>a.inverseCdf(t));let[r,i]=this.checkedBracket(t,Math.min(...n),Math.max(...n));for(let a=0;a<Fy;a++){const s=r+(i-r)/2;if(!(s>r&&s<i))break;this.cdf(s)>=t?i=s:r=s}const o=r+(i-r)/2;if(o>r&&o<i&&!(r<=0&&i>=0))throw new Error(`mixture spec ${JSON.stringify(this.spec.text)}: quantile bisection did not reach float resolution in ${Fy} steps at level ${t}`);return i}checkedBracket(t,n,r){const i=this.cdf(n)>t+ci,o=this.cdf(r)<t-ci,a=s=>new Error(`mixture spec ${JSON.stringify(this.spec.text)}: the components' inverse CDFs put the quantile bracket on the wrong side of level ${t}, and the support is unbounded on the ${s} side, where the bracket would be repaired`);if(i){if(!Number.isFinite(this.supportLo))throw a("lower");[n,r]=[this.supportLo,n]}if(o){if(!Number.isFinite(this.supportHi))throw a("upper");[n,r]=[r,this.supportHi]}if(this.cdf(n)>t+ci||this.cdf(r)<t-ci)throw new Error(`mixture spec ${JSON.stringify(this.spec.text)}: no quantile bracket contains level ${t}, even from the support ends`);return[n,r]}sampleInverseCdf(t){const n=Np,r=n.length-1;if(!(t>=n[0]&&t<=n[r]))return this.inverseCdf(t);const i=this.inverseCdfTableXNodes();if(t===n[r])return i[r];let o=0,a=r;for(;o<a-1;){const u=o+a>>1;n[u]<=t?o=u:a=u}return(i[o+1]-i[o])/(n[o+1]-n[o])*(t-n[o])+i[o]}inverseCdfTableXNodes(){if(this.tableXNodes===null){const t=new Float64Array(Np.length);let n=-1/0;Np.forEach((r,i)=>{n=Math.max(n,this.inverseCdf(r)),t[i]=n}),this.tableXNodes=t}return this.tableXNodes}}function wq(e,t,n){const r=e.components.map(([,i],o)=>{try{return Dm(i,t,n)}catch(a){throw new Error(`${yq(e,o+1)}: ${Xw(a)}`)}});return new Mo(e,e.components.map(([i])=>i),r)}const Sq=2048,xy=new Fw(Sq);function Kw(e,t,n){const r=JSON.stringify([e.text,t,n]);let i=xy.get(r);return i===void 0&&(i=wq(e,t,n),xy.set(r,i)),i}const $q={lo:0,hi:1,loClosed:!0,hiClosed:!0};function cr(e,t){return!(e.lo!==null&&(e.loClosed?t<e.lo:t<=e.lo)||e.hi!==null&&(e.hiClosed?t>e.hi:t>=e.hi))}function Yw(e){return{lo:e.lo,hi:e.hi,loClosed:e.lo!==null,hiClosed:e.hi!==null}}function Oi(e){const t=e.loClosed&&e.lo!==null?"[":"(",n=e.hiClosed&&e.hi!==null?"]":")";return`${t}${e.lo??"-inf"}, ${e.hi??"inf"}${n}`}const Aq={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]};function Br(e){var i;const[t,n]=Aq[e.type_mathlevel]??[!0,!0],r=((i=e.type_detail)==null?void 0:i.range)??[0,1];return{lo:r[0],hi:r[1],loClosed:t,hiClosed:n}}function Pie(e){return e.map(Br)}function Hr(e){return e.lo===0&&e.hi===1}function zw(e){return e.lo===null||e.hi===null?null:[e.lo,e.hi]}function Tq(e){return e.lo!==null&&e.lo>=0}function Rq(e){return e.lo!==null&&e.lo>=0&&e.hi===null}function Iq(e){return Object.fromEntries(e.map(t=>[t.bareName,Br(t.decl)]))}const Lq=["aopt:","cparam:"];function Ge(e){for(const t of Lq)if(e.startsWith(t))return e.slice(t.length);return e}function qm(e){return e.startsWith("cparam:")}const Uy="MultiStringFromSet";function Jw(e,t,n){const r=e.allowed_values,i=Mi(e)?e.input_type:void 0,o=s=>JSON.stringify(s),a=[];if(Mi(e)&&i===Uy){const s=`${e.id} has input_type '${Uy}' but`;if(!Array.isArray(t)||!t.every(f=>typeof f=="string"))return[`${s} ${n} ${o(t)} is not a list of strings`];const u=t,l=[...new Set(u.filter((f,d)=>u.indexOf(f)!==d))].sort();if(l.length>0&&a.push(`${s} ${n} contains duplicate entries ${o(l)}`),r!==void 0){const f=[...new Set(u.filter(d=>!r.includes(d)))].sort();f.length>0&&a.push(`${s} ${n} entries ${o(f)} are not in allowed_values ${o(r)}`)}const c=(e.required_values??[]).filter(f=>!u.includes(f));return c.length>0&&a.push(`${s} ${n} ${o(u)} lacks required_values entries ${o(c)}`),a}return r!==void 0&&!r.some(s=>s===t)&&a.push(`${e.id} ${n} ${o(t)} not in allowed_values ${o(r)}`),i==="StringFromSet"&&typeof t!="string"?a.push(`${e.id} has input_type 'StringFromSet' but non-string ${n} ${o(t)}`):i==="Bool"&&typeof t!="boolean"?a.push(`${e.id} has input_type 'Bool' but non-bool ${n} ${o(t)}`):i==="Number"&&typeof t!="number"?a.push(`${e.id} has input_type 'Number' but non-numeric ${n} ${o(t)}`):i==="FreeString"&&typeof t!="string"&&a.push(`${e.id} has input_type 'FreeString' but non-string ${n} ${o(t)}`),a}function Gy(e){return typeof e=="object"?[...e].sort():e}function Fie(e,t){return JSON.stringify(Gy(e))===JSON.stringify(Gy(t))}function Mi(e){return!qm(e.id)}function bh(e){return qm(e.id)}function Do(e){const t=e[0];if(t===void 0)throw new Error("cparam allowed_values must be a non-empty list");if(typeof t=="boolean")throw new Error(`cparam allowed_values must not contain booleans (got ${t}); a two-valued qualitative switch is an aopt, not a cparam`);return typeof t=="string"?"string":"number"}const Di="example:";function Bm(e){return e.startsWith(Di)?e.slice(Di.length):e}const Cq="srcquote:",Wy="bib:";function kq(e){return e.startsWith(Wy)?e.slice(Wy.length):e}const qn=["pos","neg"],Qw={pos:"Satisfying",neg:"Falsifying"},Pi="tchoice:";function gh(e){return e.startsWith(Pi)?e.slice(Pi.length):e}function Vy(e){return e.response_kind==="enum"}function qie(e){return e.response_kind==="real"}const qt="svar:",Nq=["point","bounds","sample"],Oq="elicited_svar_response_types",Xy=[["point","bounds","sample"],["point","sample"],["sample"]];function Mq(e){const t=e.elicited_svar_response_types;if(t===void 0)return Nq;const n=Xy.find(r=>r.length===t.length&&r.every((i,o)=>t[o]===i));if(n===void 0)throw new Error(`config.${Oq} is ${JSON.stringify(t)}; expected one of ${JSON.stringify(Xy)}`);return n}const yh="estimatorInstruct",Dq="flabels_enabled",jy="framing_POVs_enabled";function Pq(e){const t=new Set(e),n=[Dq,jy].filter(r=>t.has(r));if(n.length>1)throw new Error(`A jprob may declare only one of ${n.join(", ")}; '${jy}' is the deprecated spelling, kept only by jprobs with archived methodical trial results`);return n[0]??null}function Fq(e,t){if(!Array.isArray(e)||!e.every(n=>typeof n=="string"))throw new Error(`${t} must be a list of strings, got ${JSON.stringify(e)}`);return[...e]}function qq(e,t){return!e.limit_reporting_to||e.limit_reporting_to.includes(t)}const Ky=["at_least","at_most"];function Bie(e){const t=Ky.filter(r=>e[r]!==void 0);if(t.length!==1)throw new Error(`logical_consistency inequality ${JSON.stringify(e)} must carry exactly one of ${JSON.stringify(Ky)}`);const n=t[0];return{relation:n,otherSide:e[n]}}function Bq(e,t){if(!Array.isArray(t)||t.length!==3||t[0]!=="eq"||typeof t[1]!="string")throw new Error(`Formula ${e} must have an equality s-expression with a string LHS`);return t[1]}function Hq(e){if(e.includes("{")||e.includes("}"))throw new Error(`Unexpected brace in sexpr reference leaf: ${e}`);if(e.startsWith(qt))return`expr:${e.slice(qt.length)}`;if(!e.startsWith("expr:"))throw new Error(`Unexpected expression reference ${JSON.stringify(e)}; expected expr:* or svar:*`);return e}function Yy(e){return e.startsWith(qt)?e.slice(qt.length):e}const zy="ax:";function Fi(e){return e.startsWith(zy)?e.slice(zy.length):e}const Eh="framing:";function qi(e){return e.startsWith(Eh)?e.slice(Eh.length):e}function xq(e){if(e.simplifying&&e.derived)throw new Error(`Axiom "${e.id}" is flagged both simplifying and derived`);return e.simplifying?"simplifying":e.derived?"derived":"ordinary"}const Jy="textchunk:";function wh(e){return e.startsWith(Jy)?e.slice(Jy.length):e}const Qy="form:",fr="expr:";function Po(e){return e.startsWith(Qy)?e.slice(Qy.length):e}function Uq(e){const t=e.sexpr;if(!Array.isArray(t)||t.length!==3||t[0]!=="eq")throw new Error(`formula "${e.id}" is not an (eq LHS RHS) triple, so it produces no expression`);const n=t[1];if(typeof n!="string"||!n.startsWith(fr))throw new Error(`formula "${e.id}" has LHS ${JSON.stringify(n)}, which is not an ${fr} reference, so it produces no expression`);return n}const xr="mean",Kt="geomean",Ct={[xr]:"mean",[Kt]:"geometric mean"};function Zw(e){return Rq(e)?Kt:xr}function Hm(e,t,n){if(e.statistic!==t)throw new Error(`${n} must be a ${t} (the statistic its formula's range selects), but is a ${e.statistic}`);return e.value}const Gq=1e-5;function eS(e,t,n,r){if(n===void 0){let a=0;for(let s=0;s<e;s++)a+=t(s);return a/e}if(n.length!==e)throw new Error(`${r}: expected one weight per value (${e}); got ${n.length}`);let i=0;for(let a=0;a<e;a++){const s=n[a];if(!(s>0))throw new Error(`${r}: every weight must be positive`);i+=s}let o=0;for(let a=0;a<e;a++)o+=n[a]/i*t(a);return o}function Wq(e,t){const n=e.length;if(n===0)throw new Error("a geometric mean needs at least one sample");for(let r=0;r<n;r++){const i=e[r];if(!Number.isFinite(i)||i<0)throw new Error("a geometric mean needs non-negative finite samples; drop boundary artifacts first (dropBoundaryArtifacts)")}return Math.exp(eS(n,r=>Math.log(e[r]),t,"geometricMean"))}function Vq(e,t,n){if(t===Kt)return Wq(e,n);if(e.length===0)throw new Error("a mean needs at least one value");return eS(e.length,r=>e[r],n,"locationStatisticValue")}const Zy=20,Xq=1e-9;function Bi(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function Sh(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function jq(e,t,n){const r=`lloads.latents[${t}]`;if(!Sh(e))return`${r}: expected an object, got ${Bi(e)}`;for(const o of["name","description"]){const a=e[o];if(typeof a!="string"||a.trim()==="")return`${r}.${o}: expected a non-empty string, got ${JSON.stringify(a)}`}const i=e.loadings;if(!Sh(i))return`${r}.loadings: expected an object, got ${Bi(i)}`;if(Object.keys(i).length===0)return`${r}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[o,a]of Object.entries(i)){if(!n.has(o))return`${r}.loadings: '${o}' is not one of the subjective variables this jprob samples (${[...n].sort().join(", ")}), so a loading on it would have no effect`;if(typeof a!="number")return`${r}.loadings['${o}']: expected a number, got ${JSON.stringify(a)}`;if(!Number.isFinite(a))return`${r}.loadings['${o}']: ${a} is not finite`;if(a<-1||a>1)return`${r}.loadings['${o}']: ${a} not in [-1, 1]`}return null}function tS(e,t,n=[]){if(e==null)return null;if(!Sh(e))return`lloads: expected an object, got ${Bi(e)}`;const r=Object.keys(e).filter(l=>l!=="latents").sort();if(r.length>0)return`lloads: unexpected key(s) ${JSON.stringify(r)}`;const i=e.latents;if(!Array.isArray(i))return`lloads.latents: expected a list, got ${Bi(i)}`;if(i.length>Zy)return`lloads.latents: ${i.length} latents exceeds the cap of ${Zy}`;const o=new Set(t);for(const[l,c]of i.entries()){const f=jq(c,l,o);if(f!==null)return f}const a=new Map;for(const l of i)for(const[c,f]of Object.entries(l.loadings))a.set(c,(a.get(c)??0)+f**2);for(const[l,c]of[...a.entries()].sort((f,d)=>f[0]<d[0]?-1:1))if(c>1+Xq)return`lloads: loading budget exceeded for '${l}' — the sum of squared loadings across latents is ${e9(c)}, over the limit of 1 by ${e9(c-1)}; no residual variance is left for it`;const s=new Set(n),u=[...a.entries()].filter(([l,c])=>c>0&&s.has(l)).map(([l])=>l).sort();return u.length>0?`lloads: ${u.map(l=>`'${l}'`).join(", ")} ${u.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function e9(e){return String(Number(e.toPrecision(6)))}function xm(e){return e==null?!1:e.latents.some(t=>Object.values(t.loadings).some(n=>n!==0))}function Kq(e,t){if(e==null)return null;for(const n of e.latents){const r=Object.entries(n.loadings).filter(([,i])=>i!==0).map(([i])=>i);for(const i of t){const o=r.filter(s=>i.inside.includes(s)),a=r.filter(s=>i.outside.includes(s));if(o.length>0&&a.length>0)return`lloads: latent '${n.name}' loads '${o[0]}', which sits inside an expectation E⟦…⟧, and '${a[0]}', which sits outside it in the same formula; a latent may load quantities on one side of an expectation or the other, but not both, because dependence across E⟦…⟧ would make the expectation conditional on the outside quantities, which is not supported`}}return null}function t9(e,t){if(e==null)return null;const n=new Set(t),r=e.latents.map(i=>({...i,loadings:Object.fromEntries(Object.entries(i.loadings).filter(([o])=>n.has(o)))})).filter(i=>Object.keys(i.loadings).length>0);return r.length>0?{latents:r}:null}function nS(e,t,n){if(t===0)throw new Error(`${n}: need at least one component to mix`);if(e.length!==t)throw new Error(`${n}: expected one weight per component (${t}); got ${e.length}`);let r=0;for(const i of e){if(!(i>0))throw new Error(`${n}: every mixture weight must be positive`);r+=i}return e.map(i=>i/r)}function Um(e,t){const n=nS(t,e.length,"weightedMean");let r=0;return e.forEach((i,o)=>{r+=n[o]*i}),r}function Yq(e,t){let n=1/0,r=-1/0;for(const i of e){const{lo:o,hi:a}=t(i);n=Math.min(n,o),r=Math.max(r,a)}return{lo:n,hi:r}}const Ur=1e-15;function zq(e){return e.kind!=="pairs"}function Jq(e,t){const n=e.length;if(n<2)throw new Error(`buildFromXsHs: need at least 2 breakpoints, got ${n}`);let r=0;for(let a=0;a<n-1;a++)r+=(e[a+1]-e[a])*(t[a]+t[a+1])/2;if(r<=0)throw new Error("buildPieceLinear: distribution has zero or negative area");const i=new Float64Array(n);for(let a=0;a<n;a++)i[a]=t[a]/r;const o=new Float64Array(n);o[0]=0;for(let a=0;a<n-1;a++)o[a+1]=o[a]+(e[a+1]-e[a])*(i[a]+i[a+1])/2;return o[n-1]=1,{xs:new Float64Array(e),fs:i,Fs:o}}function Qq(e){const{pairs:t}=e,n=t[0][0];if(t[t.length-1][0]-n<Ur)return{xs:new Float64Array([n,n]),fs:new Float64Array([1,1]),Fs:new Float64Array([0,1])};const i=t.map(a=>a[0]),o=t.map(a=>a[1]);return Jq(i,o)}function rS(e,t){if(!zq(e))return Qq(e);if(t===void 0)throw new Error(`sample spec ${JSON.stringify(e.spec.text)} needs the svar's declared range for implicit truncation, but no paramRange was provided (thread paramRanges through the caller)`);switch(e.kind){case"family":return Dm(e.spec,t.lo,t.hi);case"mixtureSpec":return Kw(e.spec,t.lo,t.hi)}}function Hi(e,t){return t instanceof Oo||t instanceof Mo?t.inverseCdf(e):iS(e,t)}function n9(e,t){return t instanceof Oo||t instanceof Mo?t.sampleInverseCdf(e):iS(e,t)}const Zq=1e-12;function iS(e,t){const{xs:n,fs:r,Fs:i}=t,o=n.length-1;if(o<=0||e<=0)return n[0];if(e>=1)return n[o];let a=0,s=o;for(;a<s-1;){const p=a+s>>1;i[p]<=e?a=p:s=p}const u=a,l=n[u+1]-n[u];if(l<Ur)return n[u];const c=e-i[u],f=(r[u+1]-r[u])/l;let d;if(Math.abs(f)<Zq)d=c/r[u];else{const p=r[u]*r[u]+2*f*c;d=(-r[u]+Math.sqrt(Math.max(0,p)))/f}return n[u]+d}function eB(e){if(typeof e=="string"){if(Ww(e)!==null)return{kind:"pairs",pairs:Vw(e)};const n=bq(e);return n!==null?{kind:"mixtureSpec",spec:n}:{kind:"family",spec:Mm(e)}}if(!e||e.length===0)throw new Error("sampleValueToSpec: no sample value present (gate on sampleValueHasData to tolerate absence)");return{kind:"pairs",pairs:e}}function Hie(e,t){const n=e.trim(),r=Number(n);if(isNaN(r)||!cr(t,r))throw new Error(`"${n}" is not a valid value in ${Oi(t)}`);return r}function xie(e,t){const n=e.trim(),r=n.split(/\s+/);if(r.length!==2)throw new Error(`expected "lo hi", got "${n}"`);const i=Number(r[0]),o=Number(r[1]),a=Yw(t);if(isNaN(i)||isNaN(o)||!cr(a,i)||!cr(a,o)||i>o)throw new Error(`invalid bounds "${n}" (need lo ≤ hi within ${Oi(a)})`);return[i,o]}const tB=/\(\s*([\d.eE+-]+)\s+([\d.eE+-]+)\s*\)/g;function nB(e,t){const n=e.trim(),r=Ww(n);if(r!==null){if(!cr(t,r))throw new Error(`pointmass value ${r} not in ${Oi(t)}`);return{kind:"pairs",pairs:Vw(n)}}if(gq(n)){const u=jw(n);return Kw(u,t.lo,t.hi),{kind:"mixtureSpec",spec:u}}if(Uw(n)){const u=Mm(n);return Dm(u,t.lo,t.hi),{kind:"family",spec:u}}if(!n.includes("("))throw new Error(`expected a family spec "name(num, ...)" or PWL pairs "(x y) ..." (pointmass(num) and mixture(weight: name(num, ...), ...) are also accepted), got "${n}"`);const i=[...n.matchAll(tB)];if(i.length<2)throw new Error(`need at least 2 (x y) pairs, got ${i.length}`);const o=i.map(u=>[Number(u[1]),Number(u[2])]),a=Yw(t);let s=-1/0;for(let u=0;u<o.length;u++){const[l,c]=o[u];if(isNaN(l)||!cr(a,l))throw new Error(`pair ${u+1} x=${l} not in ${Oi(a)}`);if(isNaN(c)||c<0||c>1)throw new Error(`pair ${u+1} y=${c} not in [0, 1]`);if(l<s)throw new Error(`pair ${u+1} x=${l} not sorted (prev was ${s})`);s=l}return{kind:"pairs",pairs:o}}function oS(e){return typeof e=="string"?e.length>0:((e==null?void 0:e.length)??0)>0}const rB=.5,iB=.05,oB=.95,aB=1e-12,sB=200;function Bn(e){return!(e instanceof Oo)&&!(e instanceof Mo)}function Fo(e){const{xs:t}=e,n=t[0];return t[t.length-1]-n<Ur?n:null}function aS(e,t){let n=0,r=e.length-1;for(;n<r-1;){const i=n+r>>1;e[i]<=t?n=i:r=i}return n}function uB(e,t){const{xs:n,fs:r,Fs:i}=e,o=n.length-1;if(t<n[0])return 0;if(t>=n[o])return 1;const a=aS(n,t),s=n[a+1]-n[a];if(s<Ur)return i[a];const u=t-n[a],l=(r[a+1]-r[a])/s;return i[a]+r[a]*u+l*u*u/2}function lB(e,t){if(Fo(e)!==null)return 0;const{xs:n,fs:r}=e,i=n.length-1;if(t<n[0]||t>n[i])return 0;if(t===n[i])return r[i];const o=aS(n,t),a=n[o+1]-n[o];return a<Ur?r[o]:r[o]+(r[o+1]-r[o])*(t-n[o])/a}function cB(e){const t=Fo(e);if(t!==null)return t;const{xs:n,fs:r}=e;let i=0;for(let o=0;o<n.length-1;o++){const a=n[o+1]-n[o];if(a<=0)continue;const s=(r[o+1]-r[o])/a;i+=n[o]*r[o]*a+(n[o]*s+r[o])*a*a/2+s*a**3/3}return i}function fB(e,t,n,r){const i=a=>a===0?0:a*Math.log(a),o=a=>a===0?0:a*a*Math.log(a);return e*((o(r)-o(n))/2-(r*r-n*n)/4)+t*(i(r)-i(n)-(r-n))}function dB(e){const t=Fo(e);if(t!==null)return t<0?null:Math.log(t);const{xs:n,fs:r}=e;if(n[0]<0)return null;let i=0;for(let o=0;o<n.length-1;o++){const a=n[o+1]-n[o];if(a<=0)continue;const s=(r[o+1]-r[o])/a;i+=fB(s,r[o]-s*n[o],n[o],n[o+1])}return i}function pB(e,t){return Bn(e)?uB(e,t):e.cdf(t)}function sS(e,t){return Bn(e)?lB(e,t):e.pdf(t)}function r9(e,t){return Hi(t,e)}function Gm(e){return Bn(e)?cB(e):e.mean()}function hB(e){return Bn(e)?dB(e):e.logMean()}function uS(e){return Bn(e)?Fo(e):null}function lS(e){return Bn(e)?Array.from(e.xs):[]}function Yt(e,t,n){return nS(t,e.length,n)}function mB(e,t,n){const r=Yt(e,t,"mixtureCdf");let i=0;return e.forEach((o,a)=>{i+=r[a]*pB(o,n)}),i}function cS(e,t,n){const r=Yt(e,t,"mixturePdf");let i=0;return e.forEach((o,a)=>{i+=r[a]*sS(o,n)}),i}function Wm(e,t){const n=Yt(e,t,"mixtureMean");let r=0;for(const[i,o]of e.entries()){const a=Gm(o);if(a===null)return null;r+=n[i]*a}return r}function vB(e,t){const n=Yt(e,t,"mixtureLogMean");let r=0;for(const[i,o]of e.entries()){const a=hB(o);if(a===null)return null;r+=n[i]*a}return Number.isNaN(r)?null:r}function Uie(e,t,n){if(n!==Kt)return Wm(e,t);const r=vB(e,t);return r===null?null:Math.exp(r)}function sn(e,t,n){if(Yt(e,t,"mixtureQuantile"),!(n>0&&n<1))throw new Error(`mixtureQuantile: quantile level ${n} is not in (0, 1)`);if(e.length===1)return r9(e[0],n);const r=e.map(a=>r9(a,n));let i=Math.min(...r),o=Math.max(...r);for(let a=0;a<sB&&!(o-i<=aB*Math.max(Math.abs(i),Math.abs(o)));a++){const s=i+(o-i)/2;mB(e,t,s)>=n?o=s:i=s}return o}function qo(e,t){const n=Yt(e,t,"mixtureAtoms"),r=new Map;return e.forEach((i,o)=>{const a=uS(i);if(a===null)return;const s=r.get(a)??{count:0,mass:0};r.set(a,{count:s.count+1,mass:s.mass+n[o]})}),[...r.entries()].sort(([i],[o])=>i-o).map(([i,{count:o,mass:a}])=>({x:i,count:o,mass:a}))}function _B(e,t){return Yt(e,t,"mixtureStats"),{mean:Wm(e,t),median:sn(e,t,rB),p5:sn(e,t,iB),p95:sn(e,t,oB)}}function H(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function V(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const bB=["sub","sup"],gB=new RegExp(`&lt;(/?)(${bB.join("|")})&gt;`,"g");function fS(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(gB,"<$1$2>")}const i9={ui:"sans-serif",mono:"monospace"},yB={ui:"--font-ui",mono:"--font-mono"},o9=new Map;function dS(e){const t=o9.get(e);if(t!==void 0)return t;if(typeof getComputedStyle>"u"||typeof document>"u")return i9[e];const n=getComputedStyle(document.documentElement).getPropertyValue(yB[e]).trim();return n?(o9.set(e,n),n):i9[e]}function Bo(e){return`${e}px ${dS("ui")}`}function Pt(e){return`${e}px ${dS("mono")}`}const EB="global_options",wB=[{id:"symbolMnames",description:"Long symbol names",type:"boolean",default:!1},{id:"popoverAllRefs",description:"Popovers for all refs",type:"boolean",default:!0},{id:"persistentPopovers",description:"Persistent popovers (Esc closes)",type:"boolean",default:!0},{id:"inputMode",description:"Response type",type:"enum",values:["point","bounds","sample"],default:"sample"},{id:"probAsOdds",description:"Stats display",type:"enum",values:["probability","odds"],default:"probability"},{id:"densityScale",description:"Density plot scale",type:"enum",values:["raw","log"],default:"raw"},{id:"showExampleClassification",description:"Show example classifications",type:"boolean",default:!0},{id:"showFramingNotes",description:"Show framing notes",type:"boolean",default:!0},{id:"showGlobalProseFoldControls",description:"Global prose folding controls",type:"boolean",default:!0},{id:"longTextAbbrev",description:"Abbreviate long text",type:"boolean",default:!0},{id:"longTextAbbrevThreshold",description:"Abbreviation soft threshold",type:"integer",default:800,min:25,step:25},{id:"showFreeTextFields",description:"Show free text fields",type:"boolean",default:!1},{id:"showDependenceComparison",description:"Independent sampling comparison",type:"boolean",default:!1,in_page_control_only:!0},{id:"plaincodeEvalTimeoutMs",description:"Code eval timeout (ms)",type:"integer",default:5e3,min:1e3,step:1e3,in_page_control_only:!0},{id:"liveMcRunDurationMs",description:"Sampling time per ▶ (ms)",type:"integer",default:2e3,min:1e3,max:6e4,step:500,in_page_control_only:!0},{id:"liveMcPlotUpdateIntervalMs",description:"Plot update interval (ms)",type:"integer",default:150,min:50,max:1e4,step:50,in_page_control_only:!0},{id:"refLinkColor",description:"Link color",type:"enum",values:["light-green","medium-green","light-blue","medium-blue","dark-blue","black"],default:"medium-blue"},{id:"estimatorTextColor",description:"Estimator text color",type:"enum",values:["blue","black","page-text"],default:"black"},{id:"formulaGraphSvarLeaves",description:"Formula graph: subjective variables",type:"boolean",default:!1,in_page_control_only:!0},{id:"formulaGraphTransitiveHighlight",description:"Formula graph: transitive highlight",type:"boolean",default:!0,in_page_control_only:!0},{id:"formulaGraphLabelAbbrevThreshold",description:"Formula graph: label abbreviation threshold",type:"integer",default:32,min:8,step:4,in_page_control_only:!0}],pS={localStorage_key:EB,options:wB};function a9(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function s9(e){return Object.keys(e).filter(t=>e[t]!==void 0)}function xi(e,t){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((n,r)=>xi(n,t[r]));if(a9(e)&&a9(t)){const n=s9(e);return n.length===s9(t).length&&n.every(r=>xi(e[r],t[r]))}return!1}const Ho=pS.options,SB=new Map(Ho.map(e=>[e.id,e.description]));function xo(e){return SB.get(e)??e}function Vm(e){const t=Ho.find(n=>n.id===e);if(t===void 0)throw new Error(`global_options.json declares no option ${e}`);return t}function hS(e,t){if(e.type!=="integer")throw new Error(`global option ${e.id} is a ${e.type}, not an integer`);return typeof t=="number"&&Number.isInteger(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)}const Uo=Object.freeze(Ho.reduce((e,t)=>(e[t.id]=t.default,e),{})),mS=pS.localStorage_key,$B=["mcItersInitialPerPlot","mcItersPerClickPerPlot","estimatorInstructionsCollapsed"];function Xm(){let e;try{const t=localStorage.getItem(mS);if(t===null)return{};const n=JSON.parse(t);if(typeof n!="object"||n===null||Array.isArray(n))return{};e=n}catch{return{}}return Object.fromEntries(Object.entries(e).filter(([t])=>!$B.includes(t)))}function je(){return{...Uo,...Xm()}}function Gie(){const e=Uo;return Object.fromEntries(Object.entries(Xm()).filter(([t,n])=>!xi(n,e[t])))}function Ui(e,t){const n={...Xm(),[e]:t},r=Uo,i=Object.fromEntries(Object.entries(n).filter(([o,a])=>!xi(a,r[o])));localStorage.setItem(mS,JSON.stringify(i))}const AB="title",TB="webonly",RB={boolrv:"BoolRV",rv:"RV",real:"ℝ",prop:"Prop",set:"Set",fn:"Function",const:"Constant"};function $h(e,t,n,r){const i=new Map(t.map((u,l)=>[u,l])),o=[];let a=0;const s=u=>{if(u<=a)return;const l=o.at(-1),c=l!==void 0&&l.group===null?l:{group:null,cardIndices:[]};c!==l&&o.push(c);for(let f=a;f<u;f++)c.cardIndices.push(f);a=u};for(const u of e){if(typeof u=="string"){const f=i.get(u);if(f===void 0)throw new Error(`layout.${r.listKey} lists "${u}", which is not in ${r.cardOrderName}`);if(f<a)throw new Error(`layout.${r.listKey} lists "${u}" out of order in ${r.cardOrderName}`);s(f+1);continue}const l=n(u).map(f=>{const d=i.get(f);if(d===void 0)throw new Error(`${r.groupNoun} "${u.id}" names "${f}", which is not in ${r.cardOrderName}`);return d}),c=l[0];if(c===void 0)throw new Error(`${r.groupNoun} "${u.id}" has no ${r.membersKey}`);if(c<a||l.some((f,d)=>f!==c+d))throw new Error(`${r.groupNoun} "${u.id}" is not a contiguous run of ${r.cardOrderName} in its order, after the entries before it`);s(c),o.push({group:u,cardIndices:l}),a=c+l.length}return s(t.length),o}const IB={listKey:"svar_groups",groupNoun:"Svar group",membersKey:"svars",cardOrderName:"the svar card order"},LB={listKey:"isym_groups",groupNoun:"Isym group",membersKey:"isyms",cardOrderName:"the isym card order"},u9="textdefn:",CB=[".","?","!"],kB=": ";class NB{constructor(t){G(this,"_data");G(this,"aid");G(this,"options");G(this,"cparam_combo_filter");G(this,"logical_consistency");G(this,"config");G(this,"layout");G(this,"svar");G(this,"svar_bare_names");G(this,"tchoice");G(this,"textchunk");G(this,"display");G(this,"isym");G(this,"ax");G(this,"expr");G(this,"form");G(this,"definedSym");G(this,"textdefn");G(this,"framing");G(this,"srcquote");G(this,"bib");this._data=t,this.aid=t.aid,this.options=t.options,this.cparam_combo_filter=t.cparam_combo_filter,this.logical_consistency=t.logical_consistency??null,this.config=t.config,this.layout=t.layout,this.svar=t.svar,this.svar_bare_names=t.svar.map(n=>Yy(n.id)),this.tchoice=t.tchoice??[],this.textchunk=t.textchunk,this.display=t.display,this.isym=t.isym,this.ax=t.ax,this.expr=t.expr,this.form=t.form,this.definedSym=t.definedSym,this.textdefn=t.textdefn,this.framing=t.framing??[],this.srcquote=t.srcquote??[],this.bib=t.bib??[]}_get_data(){return this._data}get_options(){return this.options}get_aopts(){return this.options.filter(Mi)}get_cparams(){return this.options.filter(bh)}has_cparams(){return this.options.some(bh)}get_option(t){const n=this.options.find(r=>Ge(r.id)===t);if(!n)throw new Error(`No option named "${t}"`);return n}get_aopt(t){const n=this.get_aopts().find(r=>Ge(r.id)===t);if(!n)throw new Error(`No aopt named "${t}"`);return n}get_cparam(t){const n=this.find_cparam(t);if(!n)throw new Error(`No cparam named "${t}"`);return n}find_cparam(t){return this.get_cparams().find(n=>Ge(n.id)===t)}cparam_value_kind(t){return Do(this.get_cparam(t).allowed_values)}get_option_bare_names(){return this.options.map(t=>Ge(t.id))}get_aopt_bare_names(){return this.get_aopts().map(t=>Ge(t.id))}get_cparam_bare_names(){return this.get_cparams().map(t=>Ge(t.id))}get_option_ids(){return this.options.map(t=>t.id)}get_aopt_ids(){return this.get_aopts().map(t=>t.id)}get_cparam_ids(){return this.get_cparams().map(t=>t.id)}get_tchoice_decls(){return this.tchoice}get_tchoice_bare_names(){return new Set(this.tchoice.map(t=>gh(t.id)))}get_tchoice(t){const n=t.startsWith(Pi)?t:`${Pi}${t}`,r=this.tchoice.find(i=>i.id===n);if(r===void 0)throw new Error(`No tchoice named "${t}"`);return r}get_tchoice_default(t){const n=this.get_tchoice(t);if(!Vy(n))throw new Error(`tchoice "${t}" is not an enum kind; it has no default_value`);return n.default_value}get_enum_tchoice_defaults(){const t={};for(const n of this.tchoice)Vy(n)&&(t[gh(n.id)]=n.default_value);return t}get_textchunks(){return this.textchunk}find_textchunk(t){const n=wh(t);return this.textchunk.find(r=>wh(r.id)===n)}get_textchunk(t){const n=this.find_textchunk(t);if(!n)throw new Error(`No textchunk named "${t}"`);return n}find_textchunk_defn(t){var n;return(n=this.find_textchunk(t))==null?void 0:n.defn}get_textchunk_defn(t){return this.get_textchunk(t).defn}get_textdefn_entries(){return this.textdefn.map(t=>{const n=t.aliases??[];return{bareName:this.strip_textdefn_prefix(t.id),id:t.id,defn:t.defn,aliases:n,advertisedAliases:t.advertised_aliases??[],displayTerm:n[0]??t.id}})}find_textdefn(t){const n=this.strip_textdefn_prefix(t);return this.textdefn.find(r=>this.strip_textdefn_prefix(r.id)===n)}get_textdefn(t){const n=this.find_textdefn(t);if(!n)throw new Error(`No textdefn named "${t}"`);return n}get_textdefns(){return this.textdefn}strip_textdefn_prefix(t){return t.startsWith(u9)?t.slice(u9.length):t}get_svar_bare_names(){return this.svar_bare_names}svar_decls(){return this.svar}get_svar(t){const n=t.startsWith("svar:")?t:`svar:${t}`,r=this.svar.find(i=>i.id===n);if(r===void 0)throw new Error(`No svar named "${t}"`);return r}get_svar_gloss_defn(t){return this.get_svar(t).defn}svar_entries(){return this.svar.map(t=>({bareName:Yy(t.id),decl:t}))}svar_card_runs(){return $h(this.layout.svar_groups??[],this.svar.map(t=>t.id),t=>t.svars,IB)}svar_groups(){return this.svar_card_runs().flatMap(t=>t.group===null?[]:[t.group])}form_groups(){return(this.layout.form_groups??[]).filter(t=>typeof t!="string")}has_standard_rendering_framing_notes(){const t=this.standard_rendering_flabels();return this.framing.some(n=>t.has(n.flabel))}has_examples(){return this.isym.some(t=>{var n,r;return(((n=t.pos)==null?void 0:n.length)??0)>0||(((r=t.neg)==null?void 0:r.length)??0)>0})}isym_entries(){return this.isym}isym_card_entries(){return this.isym.filter(t=>!this.can_consolidate_isym_svar(t.id))}isym_reasoning_bare_names(){const t=new Set(this.get_svar_bare_names());return this.isym.map(n=>n.id.slice(5)).filter(n=>!t.has(n))}isym_card_runs(){return $h(this.layout.isym_groups??[],this.isym_card_entries().map(t=>t.id),t=>t.isyms,LB)}get_isym(t){const n=t.startsWith("isym:")?t:`isym:${t}`,r=this.isym.find(i=>i.id===n);if(r===void 0)throw new Error(`No isym named "${t}"`);return r}get_example(t){if(!t.startsWith(Di))throw new Error(`Not an example id: "${t}"`);for(const n of this.isym){const r=[...n.pos??[],...n.neg??[]].find(i=>i.id===t);if(r!==void 0)return r}throw new Error(`No isym example "${t}"`)}has_srcquotes(){return this.srcquote.length>0}resolve_srcquotes(t){const n=new Map(this.srcquote.map(r=>[r.id,r]));return t.map(r=>{const i=n.get(r);if(!i)throw new Error(`Unknown srcquote id: ${r}`);return i})}bib_entries(){return this.bib}resolve_bib(t){const n=this.bib.find(r=>r.id===t);if(n===void 0)throw new Error(`Unknown bib id: ${t}`);return n}bib_inline_display_text(t){const n=this.resolve_bib(t);return n.inline_display??n.title}bib_full_text(t){const n=this.resolve_bib(t);return[n.author,n.date,n.title,n.venue,n.note].filter(i=>i!==void 0).map(i=>CB.some(o=>i.endsWith(o))?i:`${i}.`).join(" ")}bib_reference_entry_text(t){const n=this.resolve_bib(t),r=this.bib_full_text(t);return n.inline_display===void 0||n.inline_display===n.title?r:`${n.inline_display}${kB}${r}`}framing_static_anchor_ids(){const t=new Set;for(const n of this.framing)n.static_anchor!==null&&t.add(n.static_anchor);return t}get_axioms(){return this.ax}get_axioms_in_display_section(t){return this.ax.filter(n=>xq(n)===t)}find_ax(t){const n=Fi(t);return this.ax.find(r=>Fi(r.id)===n)}get_ax(t){const n=this.find_ax(t);if(n===void 0)throw new Error(`No axiom named "${t}"`);return n}get_ax_sexpr(t){return this.get_ax(t).sexpr}get_ax_defn(t){return this.get_ax(t).defn}can_consolidate_isym_svar(t){var a,s;const n=t.slice(5),r=this.isym.find(u=>u.id===t);if(!r||r.kind!=="real"||(((a=r.pos)==null?void 0:a.length)??0)>0||(((s=r.neg)==null?void 0:s.length)??0)>0)return!1;const i=this.svar.find(u=>u.id===`svar:${n}`);if(!i)return!1;const o=this.expr.find(u=>u.id===`expr:${n}`);return!o||o.sexpr!==t?!1:i.defn===""}get_display_ax(t){return this.display.ax[t]}get_display_ax_or_none(t){return this.display.ax[t]??null}get_display_expr(t){return this.display.expr[t]}get_display_form(t){return this.display.form[t]}get_display_form_or_none(t){return this.display.form[t]??null}get_display_form_svars_as_math(t){const n=this.display.form_svars_as_math[t];if(n===void 0)throw new Error(`${this.aid}: no display.form_svars_as_math entry for "${t}"`);return n}get_display_definedSym(t){return this.display.definedSym[t]}get_display_definedSym_or_none(t){return this.display.definedSym[t]??null}get_display_definedSym_signature(t){const n=this.display.definedSym_signature[t];if(n===void 0)throw new Error(`${this.aid}: no display.definedSym_signature entry for "${t}"`);return n}get_display_expr_keys(){return Object.keys(this.display.expr)}get_display_form_keys(){return Object.keys(this.display.form)}logical_consistency_or_none(){return this.logical_consistency}conclusion_form_or_none(){return this.config.conclusion_form??null}conclusion_expr_or_none(){const t=this.conclusion_form_or_none();return t===null?null:this.form_produced_expr(t)}form_produced_expr(t){const n=this.form.find(r=>r.id===t);if(n===void 0)throw new Error(`${this.aid}: "${t}" names no registered formula`);try{return Uq(n)}catch(r){throw new Error(`${this.aid}: ${r.message}`)}}form_range(t){const n=this.form.find(r=>r.id===t);if(n===void 0)throw new Error(`${this.aid}: "${t}" names no registered formula`);return Br(n)}conclusion_range_or_none(){const t=this.conclusion_form_or_none();return t===null?null:this.form_range(t)}elicited_svar_response_types(){return Mq(this.config)}estimator_text_name_link_exclusions(){return this.config.estimator_text_name_link_exclusions??[]}get_fgroups(){const t=this.config.framing;if(t===void 0){if(this.framing.length>0)throw new Error(`${this.aid}: ${this.framing.length} framing note(s) but no config.framing declaring the fgroups their flabels belong to`);return{}}return t.fgroups}fgroup_of_flabel(t){const n=this.get_fgroups();for(const[r,i]of Object.entries(n))if(i.flabels.includes(t))return[r,i];throw new Error(`${this.aid}: framing flabel '${t}' belongs to no declared fgroup (declared: ${Object.keys(n).sort().join(", ")})`)}standard_fgroups_in_order(){return Object.entries(this.get_fgroups()).filter(([,t])=>t.standard_rendering)}standard_rendering_flabels(){const t=new Set;for(const[,n]of this.standard_fgroups_in_order())for(const r of n.flabels)t.add(r);return t}referenceable_framing_notes(){const t=this.standard_rendering_flabels();return this.framing.filter(n=>t.has(n.flabel))}nonstandard_notes(t,n){const r=this.get_fgroups(),i=r[t];if(i===void 0)throw new Error(`${this.aid}: no declared fgroup '${t}' (declared: ${Object.keys(r).sort().join(", ")})`);if(i.standard_rendering)throw new Error(`${this.aid}: fgroup '${t}' is standard-rendering; its notes are placed by get_framing_layout, not bespoke code`);const o=new Set(i.flabels),a=new Set(n);return this.framing.filter(s=>o.has(s.flabel)&&a.has(s.flabel))}placed_framing_note_ids(t){const n=this.get_framing_layout(t),r=new Set,i=o=>{for(const a of o)r.add(a.note.id),i(a.children)};i(n.root_section.layout_nodes);for(const o of n.nonroot_anchor_sections.values())i(o.layout_nodes);return r}get_framing_layout(t){const n=this.standard_rendering_flabels(),r=new Set([...t].filter(c=>n.has(c))),i=new Map(this.framing.map(c=>[c.id,c])),o=new Map,a=c=>{if(o.has(c))return o.get(c)??null;const f=i.get(c);if(!f)throw new Error(`Unknown framing note id: ${c}`);let d=null;if(r.has(f.flabel)){const p=f.framing_target;if(p!==null){const h=a(p);h!==null&&(d={anchor_id:h.anchor_id,depth:h.depth+1,visible_parent_id:p})}d===null&&f.static_anchor!==null&&(d={anchor_id:f.static_anchor,depth:1,visible_parent_id:null})}return o.set(c,d),d};for(const c of this.framing)a(c.id);const s=new Map,u=[],l=new Map;for(const c of this.framing){const f=o.get(c.id);f!=null&&s.set(c.id,{depth:f.depth,note:c,children:[]})}for(const c of this.framing){const f=o.get(c.id);if(f==null)continue;const d=s.get(c.id);if(f.visible_parent_id!==null)s.get(f.visible_parent_id).children.push(d);else if(f.anchor_id==="root")u.push(d);else{const p=l.get(f.anchor_id)??[];p.push(d),l.set(f.anchor_id,p)}}return{root_section:{static_anchor_id:"root",layout_nodes:u},nonroot_anchor_sections:new Map(Array.from(l.entries(),([c,f])=>[c,{static_anchor_id:c,layout_nodes:f}]))}}}function jm(e){return e.get_textdefn_entries().map(t=>{const n=`def-${t.bareName.toLowerCase()}`;return{...t,anchorId:n,anchor:`#${n}`}})}const vS="data-popover-target";function OB(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function l9(e,t){const n=Object.keys(e).sort(),r=[...t].sort();return n.length===r.length&&n.every((i,o)=>i===r[o])}function _S(e){return encodeURIComponent(JSON.stringify(e))}function Wie(e){let t;try{t=JSON.parse(decodeURIComponent(e))}catch(n){throw new Error("Malformed popover target encoding.",{cause:n})}if(!OB(t)||typeof t.kind!="string")throw new Error("Popover target must be an object with a recognized kind.");if(t.kind==="entity"){if(!l9(t,["kind","targetId"])||typeof t.targetId!="string"||t.targetId.length===0)throw new Error("Malformed entity popover target.");return{kind:"entity",targetId:t.targetId}}if(t.kind==="sourcequote"){if(!l9(t,["kind","sourcequoteIds"])||!Array.isArray(t.sourcequoteIds)||t.sourcequoteIds.length===0||!t.sourcequoteIds.every(n=>typeof n=="string"&&n.startsWith("srcquote:")&&n.length>9))throw new Error("Malformed source-quote popover target.");return{kind:"sourcequote",sourcequoteIds:t.sourcequoteIds}}throw new Error(`Unknown popover target kind: ${t.kind}`)}const Ah="[",Th="]",MB="|",bS="{",gS="}",DB=new RegExp("(?<!\\\\)\\{([^\\}]+)\\}","g"),Go=new RegExp("(?<!\\\\)\\{((?:expr|form):[^\\}]+)\\}","g"),yS=new RegExp("(?<!\\\\)\\[([^\\]]+?)\\|([^\\]|]+)\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),Km=new RegExp("(?<!\\\\)\\[([^\\]|]+)\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),PB=new RegExp("(?<!\\\\)\\[([^\\]]+)\\]\\(((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)]))[^)\\s]*)\\)","g"),Rh=/‹\+(.*?)\+›/g,Vie=new RegExp("(?<!\\\\)\\[([^\\]|]*?)(?:\\|[^\\]]*?)?\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),Xie=new RegExp("(?<!\\\\)\\{[^\\}]*\\}","g"),FB=/\\([\{\}])/g,qB=/\\([\[\]])/g,BB="symbol-ref-name",HB="ref-repeat",ES="ax-",xB="svar-",Ih="isym-",wS="ex-",SS="framing-",UB="bib-",GB="bib-inline-link",WB="↗";function $S(e){return`${UB}${kq(e)}`}function VB(e,t){return t.url===void 0?e:`${e} [${t.url}](${t.url})`}function Ym(e){return e.form.filter(t=>!t.hide&&e.get_display_form(t.id)).map(t=>t.id)}function XB(e,t={}){const n=new Map,r=t.symbolMnames??!1,i=jB(e);for(const o of e.isym_entries()){const a=o.id.startsWith("isym:")?o.id:`isym:${o.id}`,s=a.startsWith("isym:")?a.slice(5):a,u=`#${Ih}${s}`,l={bareId:s,mname:i.get(a)??s};n.set(s,{anchor:u,displayText:c9(l,r),symbolName:l,repeatScopeId:a}),n.set(a,{anchor:u,displayText:c9(l,r),symbolName:l,repeatScopeId:a})}for(const o of jm(e))for(const a of o.aliases)n.set(a,{anchor:o.anchor,displayText:a,repeatScopeId:o.id});for(const o of e.isym_entries()){const a=o.id.startsWith("isym:")?o.id:`isym:${o.id}`,s=`#${Ih}${a.slice(5)}`;for(const u of o.aliases??[])n.set(u,{anchor:s,displayText:u,repeatScopeId:a})}for(const o of e.isym_entries())for(const a of qn)for(const s of o[a]??[]){const u=Bm(s.id);n.set(s.id,{anchor:`#${wS}${u}`,displayText:u})}for(const o of e.get_axioms()){if(!e.get_display_ax(o.id))continue;const s=Fi(o.id);n.set(o.id,{anchor:`#${ES}${s}`,displayText:s})}for(const o of Ym(e)){if(n.has(o))continue;const a=Po(o);n.set(o,{anchor:`#form-${a}`,displayText:a})}for(const o of e.get_options()){const a=Ge(o.id),u={anchor:`#opt-${a}`,displayText:a,repeatScopeId:o.id};n.has(o.id)||n.set(o.id,u),n.has(a)||n.set(a,u)}for(const o of e.get_tchoice_decls()){const a=gh(o.id),s=`#tchoice-${a}`;n.has(o.id)||n.set(o.id,{anchor:s,displayText:a,repeatScopeId:o.id})}for(const o of e.get_svar_bare_names()){const a=`svar:${o}`;n.has(a)||n.set(a,{anchor:`#${xB}${o}`,displayText:o})}for(const o of e.referenceable_framing_notes())n.has(o.id)||n.set(o.id,{anchor:`#${SS}${qi(o.id)}`,displayText:qi(o.id),alwaysPopover:!0});for(const o of e.bib_entries())n.has(o.id)||n.set(o.id,{anchor:`#${$S(o.id)}`,displayText:e.bib_inline_display_text(o.id),alwaysPopover:!0,...o.inline_link?{inlineLinkUrl:o.url}:{}});for(const o of e.definedSym){const a=o.id.startsWith("definedSym:")?o.id.slice(11):o.id,u={anchor:`#defsym-${a}`,displayText:a,repeatScopeId:o.id};n.has(a)||n.set(a,u),n.has(o.id)||n.set(o.id,u)}return n}function jB(e){const t=new Map;for(const n of e.isym_entries()){if(!n.longname)continue;const r=n.id.startsWith("isym:")?n.id:`isym:${n.id}`;t.set(r,n.longname)}return t}function c9(e,t){return t?e.mname:e.bareId}const KB={point:"=",sample:"~",bounds:"∈"};function jie(e){return KB[e]}function YB(e){return e.svar_entries().map(({bareName:t})=>`{expr:${t}}`)}function zB(e,t,n,r){const i=zm(n,r),o=V(_S({kind:"entity",targetId:t}));return`<button type="button" class="${["ref-popover",...i.classes].join(" ")}" ${vS}="${o}" aria-expanded="false"${i.dataAttrs}>${e}</button>`}function JB(e){const t=zm(e.symbolName,!1);return`<span${t.classes.length===0?"":` class="${t.classes.join(" ")}"`}${t.dataAttrs}>${e.displayText}</span>`}function f9(e){return e.inlineLinkUrl===void 0?"":`<a class="${GB}" href="${V(e.inlineLinkUrl)}" target="_blank" rel="noopener">${WB}</a>`}function QB(e,t,n,r){const i=zm(n,r),o=i.classes.length===0?"":` class="${i.classes.join(" ")}"`;return`<a href="${e}"${o}${i.dataAttrs}>${t}</a>`}function zm(e,t){const n=[];let r="";return e&&(n.push(BB),r=` data-bareid="${V(e.bareId)}" data-mname="${V(e.mname)}"`),t&&n.push(HB),{classes:n,dataAttrs:r}}function ZB(e,t){return t===void 0||e.repeatScopeId===void 0?!1:t.has(e.repeatScopeId)?!0:(t.add(e.repeatScopeId),!1)}const eH=new RegExp(`${yS.source}|${Km.source}`,"g"),tH=new RegExp(`^(?:${yS.source}|${Km.source})$`);function nH(e){return tH.test(e)}function rH(e,t,n,r,i){return e.replace(eH,(o,a,s,u)=>{if(u===void 0){if(a===void 0||s===void 0)throw new Error("resolveRefsHtmlBare: REF_PIPE_OR_BARE_RE matched neither form");const c=t.get(s);return c?TS(c,a,n,i):(r==null||r.add(s),`${Ah}${a}${MB}${s}${Th}`)}const l=t.get(u);return l?AS(l,l.displayText,l.symbolName,n,i):(r==null||r.add(u),`${Ah}${u}${Th}`)})}function AS(e,t,n,r,i){const o=ZB(e,i);return((r==null?void 0:r.popoverAllRefs)??!1)||e.alwaysPopover?zB(t,e.anchor,n,o)+f9(e):QB(e.anchor,t,n,o)+f9(e)}function TS(e,t,n,r){return AS(e,t,void 0,n,r)}const iH=10;function oH(e,t,n,r,i){let o=e;for(let a=0;a<iH;a++){const s=rH(o,t,n,r,i);if(s===o)break;o=s}return o.replace(qB,"$1")}const d9="dag-ref",aH="dag-lhs",p9="dag-glyph",h9="data-dag-id",sH=2,uH="↖",lH="↘";function RS(e){return e.startsWith(fr)?e.slice(fr.length):null}function cH(e){const t=[];for(const n of e.matchAll(Go)){const r=RS(n[1]);r!==null&&t.push(r)}return t}function fH(e){const t=[];for(const n of e.matchAll(Km)){const r=n[1];r.startsWith(qt)&&t.push(r.slice(qt.length))}return t}function Jm(e){const t=Ym(e),n=new Map,r=t.map((s,u)=>{const l=e.form_produced_expr(s).slice(fr.length),c=n.get(l);if(c!==void 0)throw new Error(`${e.aid}: formulas "${t[c]}" and "${s}" both produce expr:${l}`);return n.set(l,u),l}),i=t.map(()=>[]),o=new Set,a=t.map((s,u)=>{const l=e.get_display_form(s),c=new Set;for(const d of cH(l)){if(d===r[u])continue;const p=n.get(d);if(p===void 0)continue;if(p>u)throw new Error(`${e.aid}: formula "${s}" uses expr:${d}, produced by the later-rendered formula "${t[p]}"`);const h=t[p];c.has(h)||(c.add(h),i[p].push(s))}const f=new Set(fH(l));for(const d of f)o.add(d);return{displayText:l,inputFormIds:[...c],inputSvarBares:[...f]}});return{formulas:t.map((s,u)=>({formId:s,producedExprBare:r[u],...a[u],usedByFormIds:i[u]})),svarLeafBares:[...o]}}function m9(e){return"svars"in e}function dH(e,t,n){const r=new Map;for(const o of t)for(const a of o.svars)r.set(a,o);for(const o of e.formulas){const a=[...o.inputFormIds,...o.inputSvarBares.map(u=>`${qt}${u}`)],s=a.length===0?void 0:r.get(a[0]);s!==void 0&&a.every(u=>r.get(u)===s)&&r.set(o.formId,s)}const i=new Set(e.formulas.map(o=>o.formId));for(const o of n)for(const a of o.forms){if(!i.has(a))throw new Error(`Formula group "${o.id}" names "${a}", which is no rendered formula`);const s=r.get(a);if(s!==void 0)throw new Error(`Formula group "${o.id}" names "${a}", which is already in the group "${s.id}"`);r.set(a,o)}return r}const pH={listKey:"form_groups",groupNoun:"Formula group",membersKey:"formulas",cardOrderName:"the rendered formulas"};function Qm(e,t,n){const r=dH(e,t,n),i=new Map;e.formulas.forEach((s,u)=>{const l=r.get(s.formId);if(l===void 0)return;const c=i.get(l);c===void 0?i.set(l,[u]):c.push(u)});const o=[...i].filter(([,s])=>s.length>=sH);for(const[s,u]of o){const l=u[0],c=u.findIndex((f,d)=>f!==l+d);if(c!==-1)throw new Error(`The formulas of group "${s.id}" (formDagGroupMembership) are not consecutive in declaration order: "${e.formulas[l+c].formId}" lies between its "${e.formulas[l].formId}" and "${e.formulas[u[c]].formId}". Declare the group's formulas together.`)}o.sort(([,s],[,u])=>s[0]-u[0]);const a=new Map(o.map(([s,u])=>[s,u.map(l=>e.formulas[l].formId)]));return $h(o.map(([s])=>s),e.formulas.map(s=>s.formId),s=>a.get(s),pH)}function hH(e,t,n){return n==="ids"?t.displayText:e.get_display_form_svars_as_math(t.formId)}function mH(e,t,n){const r=new Map(t.formulas.map(a=>[a.producedExprBare,a.formId])),i=(a,s)=>{const u=RS(s);if(u===null)return null;if(u===a.producedExprBare)return a.usedByFormIds.length===0?null:`<span class="${d9} ${aH}" ${h9}="${V(u)}"><span class="${p9}">${lH}</span>`;const l=r.get(u);return l===void 0||!a.inputFormIds.includes(l)?null:`<span class="${d9}" ${h9}="${V(u)}"><a class="${p9}" href="#form-${V(Po(l))}">${uH}</a>`},o=new Map;for(const a of t.formulas){const s=hH(e,a,n),u=[];let l=0;for(const c of s.matchAll(Go)){const f=i(a,c[1]);if(f!==null){if(c.index===void 0)throw new Error("buildDagDecoratedFormTexts: match without an index");c.index>l&&u.push({displayText:s.slice(l,c.index)}),u.push({trustedHtml:f},{displayText:c[0]},{trustedHtml:"</span>"}),l=c.index+c[0].length}}(l<s.length||u.length===0)&&u.push({displayText:s.slice(l)}),o.set(a.formId,u)}return o}const vH=["expr:","form:"],_H=["textchunk:","aopt:","cparam:"],bH=10;function gH(e){const t=new Map;for(const n of e.get_options()){if(Mi(n)&&n.variant_producing)continue;const r=IS(n.id);if(e.is_code_mode()&&qm(n.id)){t.set(r,`${Ah}${n.id}${Th}`);continue}t.set(r,String(e.option_value(r)))}for(const n of e.get_textchunks()){const r=n.id.startsWith("textchunk:")?n.id.slice(10):n.id;t.set(r,n.defn)}return t}function IS(e){for(const t of _H)if(e.startsWith(t))return e.slice(t.length);return e}function Zm(e,t){const n=gH(t);let r=e;for(let i=0;i<bH;i++){const o=r.replace(DB,(a,s)=>{for(const c of vH)if(s.startsWith(c))return a;const u=IS(s),l=n.get(u);if(l===void 0)throw new Error(`Template variable ${bS}${s}${gS} not found in non-variant-producing options or textchunks`);return l});if(o===r)break;r=o}return r.replace(FB,"$1")}const yH=10;function EH(e){const t=new Map;for(const r of e.get_display_expr_keys())t.set(r,e.get_display_expr(r));const n=new Set(e.form.filter(r=>!r.hide).map(r=>r.id));for(const r of e.get_display_form_keys())n.has(r)&&t.set(r,e.get_display_form(r));return t}function wH(e,t){let n=e;for(let r=0;r<yH;r++){const i=n.replace(Go,(o,a)=>{const s=t.get(a);if(s===void 0)throw new Error(`Display ref ${bS}${a}${gS} not found in display.expr or display.form`);return s});if(i===n)break;n=i}return n}const v9={};function SH(e){let t=v9[e];if(t)return t;t=v9[e]=[];for(let n=0;n<128;n++){const r=String.fromCharCode(n);t.push(r)}for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return t}function pn(e,t){typeof t!="string"&&(t=pn.defaultChars);const n=SH(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let i="";for(let o=0,a=r.length;o<a;o+=3){const s=parseInt(r.slice(o+1,o+3),16);if(s<128){i+=n[s];continue}if((s&224)===192&&o+3<a){const u=parseInt(r.slice(o+4,o+6),16);if((u&192)===128){const l=s<<6&1984|u&63;l<128?i+="��":i+=String.fromCharCode(l),o+=3;continue}}if((s&240)===224&&o+6<a){const u=parseInt(r.slice(o+4,o+6),16),l=parseInt(r.slice(o+7,o+9),16);if((u&192)===128&&(l&192)===128){const c=s<<12&61440|u<<6&4032|l&63;c<2048||c>=55296&&c<=57343?i+="���":i+=String.fromCharCode(c),o+=6;continue}}if((s&248)===240&&o+9<a){const u=parseInt(r.slice(o+4,o+6),16),l=parseInt(r.slice(o+7,o+9),16),c=parseInt(r.slice(o+10,o+12),16);if((u&192)===128&&(l&192)===128&&(c&192)===128){let f=s<<18&1835008|u<<12&258048|l<<6&4032|c&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),o+=9;continue}}i+="�"}return i})}pn.defaultChars=";/?:@&=+$,#";pn.componentChars="";const _9={};function $H(e){let t=_9[e];if(t)return t;t=_9[e]=[];for(let n=0;n<128;n++){const r=String.fromCharCode(n);/^[0-9a-z]$/i.test(r)?t.push(r):t.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function Gr(e,t,n){typeof t!="string"&&(n=t,t=Gr.defaultChars),typeof n>"u"&&(n=!0);const r=$H(t);let i="";for(let o=0,a=e.length;o<a;o++){const s=e.charCodeAt(o);if(n&&s===37&&o+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3))){i+=e.slice(o,o+3),o+=2;continue}if(s<128){i+=r[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&o+1<a){const u=e.charCodeAt(o+1);if(u>=56320&&u<=57343){i+=encodeURIComponent(e[o]+e[o+1]),o++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[o])}return i}Gr.defaultChars=";/?:@&=+$,-_.!~*'()#";Gr.componentChars="-_.!~*'()";function e2(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function Gi(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const AH=/^([a-z0-9.+-]+:)/i,TH=/:[0-9]*$/,RH=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,IH=["<",">",'"',"`"," ","\r",`
`,"	"],LH=["{","}","|","\\","^","`"].concat(IH),CH=["'"].concat(LH),b9=["%","/","?",";","#"].concat(CH),g9=["/","?","#"],kH=255,y9=/^[+a-z0-9A-Z_-]{0,63}$/,NH=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,E9={javascript:!0,"javascript:":!0},w9={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function t2(e,t){if(e&&e instanceof Gi)return e;const n=new Gi;return n.parse(e,t),n}Gi.prototype.parse=function(e,t){let n,r,i,o=e;if(o=o.trim(),!t&&e.split("#").length===1){const l=RH.exec(o);if(l)return this.pathname=l[1],l[2]&&(this.search=l[2]),this}let a=AH.exec(o);if(a&&(a=a[0],n=a.toLowerCase(),this.protocol=a,o=o.substr(a.length)),(t||a||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=o.substr(0,2)==="//",i&&!(a&&E9[a])&&(o=o.substr(2),this.slashes=!0)),!E9[a]&&(i||a&&!w9[a])){let l=-1;for(let h=0;h<g9.length;h++)r=o.indexOf(g9[h]),r!==-1&&(l===-1||r<l)&&(l=r);let c,f;l===-1?f=o.lastIndexOf("@"):f=o.lastIndexOf("@",l),f!==-1&&(c=o.slice(0,f),o=o.slice(f+1),this.auth=c),l=-1;for(let h=0;h<b9.length;h++)r=o.indexOf(b9[h]),r!==-1&&(l===-1||r<l)&&(l=r);l===-1&&(l=o.length),o[l-1]===":"&&l--;const d=o.slice(0,l);o=o.slice(l),this.parseHost(d),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const h=this.hostname.split(/\./);for(let m=0,v=h.length;m<v;m++){const _=h[m];if(_&&!_.match(y9)){let b="";for(let y=0,g=_.length;y<g;y++)_.charCodeAt(y)>127?b+="x":b+=_[y];if(!b.match(y9)){const y=h.slice(0,m),g=h.slice(m+1),E=_.match(NH);E&&(y.push(E[1]),g.unshift(E[2])),g.length&&(o=g.join(".")+o),this.hostname=y.join(".");break}}}}this.hostname.length>kH&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=o.indexOf("#");s!==-1&&(this.hash=o.substr(s),o=o.slice(0,s));const u=o.indexOf("?");return u!==-1&&(this.search=o.substr(u),o=o.slice(0,u)),o&&(this.pathname=o),w9[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Gi.prototype.parseHost=function(e){let t=TH.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const OH=Object.freeze(Object.defineProperty({__proto__:null,decode:pn,encode:Gr,format:e2,parse:t2},Symbol.toStringTag,{value:"Module"})),LS=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,CS=/[\0-\x1F\x7F-\x9F]/,MH=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,n2=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,kS=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,NS=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,DH=Object.freeze(Object.defineProperty({__proto__:null,Any:LS,Cc:CS,Cf:MH,P:n2,S:kS,Z:NS},Symbol.toStringTag,{value:"Module"})),PH=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),FH=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Op;const qH=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),BH=(Op=String.fromCodePoint)!==null&&Op!==void 0?Op:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function HH(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=qH.get(e))!==null&&t!==void 0?t:e}var me;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(me||(me={}));const xH=32;var St;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(St||(St={}));function Lh(e){return e>=me.ZERO&&e<=me.NINE}function UH(e){return e>=me.UPPER_A&&e<=me.UPPER_F||e>=me.LOWER_A&&e<=me.LOWER_F}function GH(e){return e>=me.UPPER_A&&e<=me.UPPER_Z||e>=me.LOWER_A&&e<=me.LOWER_Z||Lh(e)}function WH(e){return e===me.EQUALS||GH(e)}var he;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(he||(he={}));var st;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(st||(st={}));class VH{constructor(t,n,r){this.decodeTree=t,this.emitCodePoint=n,this.errors=r,this.state=he.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=st.Strict}startEntity(t){this.decodeMode=t,this.state=he.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case he.EntityStart:return t.charCodeAt(n)===me.NUM?(this.state=he.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=he.NamedEntity,this.stateNamedEntity(t,n));case he.NumericStart:return this.stateNumericStart(t,n);case he.NumericDecimal:return this.stateNumericDecimal(t,n);case he.NumericHex:return this.stateNumericHex(t,n);case he.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|xH)===me.LOWER_X?(this.state=he.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=he.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,r,i){if(n!==r){const o=r-n;this.result=this.result*Math.pow(i,o)+parseInt(t.substr(n,o),i),this.consumed+=o}}stateNumericHex(t,n){const r=n;for(;n<t.length;){const i=t.charCodeAt(n);if(Lh(i)||UH(i))n+=1;else return this.addToNumericResult(t,r,n,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(t,r,n,16),-1}stateNumericDecimal(t,n){const r=n;for(;n<t.length;){const i=t.charCodeAt(n);if(Lh(i))n+=1;else return this.addToNumericResult(t,r,n,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(t,r,n,10),-1}emitNumericEntity(t,n){var r;if(this.consumed<=n)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===me.SEMI)this.consumed+=1;else if(this.decodeMode===st.Strict)return 0;return this.emitCodePoint(HH(this.result),this.consumed),this.errors&&(t!==me.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:r}=this;let i=r[this.treeIndex],o=(i&St.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const a=t.charCodeAt(n);if(this.treeIndex=XH(r,i,this.treeIndex+Math.max(1,o),a),this.treeIndex<0)return this.result===0||this.decodeMode===st.Attribute&&(o===0||WH(a))?0:this.emitNotTerminatedNamedEntity();if(i=r[this.treeIndex],o=(i&St.VALUE_LENGTH)>>14,o!==0){if(a===me.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==st.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:r}=this,i=(r[n]&St.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,i,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,r){const{decodeTree:i}=this;return this.emitCodePoint(n===1?i[t]&~St.VALUE_LENGTH:i[t+1],r),n===3&&this.emitCodePoint(i[t+2],r),r}end(){var t;switch(this.state){case he.NamedEntity:return this.result!==0&&(this.decodeMode!==st.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case he.NumericDecimal:return this.emitNumericEntity(0,2);case he.NumericHex:return this.emitNumericEntity(0,3);case he.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case he.EntityStart:return 0}}}function OS(e){let t="";const n=new VH(e,r=>t+=BH(r));return function(i,o){let a=0,s=0;for(;(s=i.indexOf("&",s))>=0;){t+=i.slice(a,s),n.startEntity(o);const l=n.write(i,s+1);if(l<0){a=s+n.end();break}a=s+l,s=l===0?a+1:a}const u=t+i.slice(a);return t="",u}}function XH(e,t,n,r){const i=(t&St.BRANCH_LENGTH)>>7,o=t&St.JUMP_TABLE;if(i===0)return o!==0&&r===o?n:-1;if(o){const u=r-o;return u<0||u>=i?-1:e[n+u]-1}let a=n,s=a+i-1;for(;a<=s;){const u=a+s>>>1,l=e[u];if(l<r)a=u+1;else if(l>r)s=u-1;else return e[u+i]}return-1}const MS=OS(PH);OS(FH);function jH(e,t=st.Legacy){return MS(e,t)}function KH(e){return MS(e,st.Strict)}function YH(e){return Object.prototype.toString.call(e)}function r2(e){return YH(e)==="[object String]"}const zH=Object.prototype.hasOwnProperty;function JH(e,t){return zH.call(e,t)}function Wo(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(r){e[r]=n[r]})}}),e}function QH(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function i2(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function dr(e){if(e>65535){e-=65536;const t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}const DS=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,ZH=/&([a-z#][a-z0-9]{1,31});/gi,ex=new RegExp(DS.source+"|"+ZH.source,"gi"),tx=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function nx(e,t){if(t.charCodeAt(0)===35&&tx.test(t)){const r=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return i2(r)?dr(r):e}const n=jH(e);return n!==e?n:e}function rx(e){return e.indexOf("\\")<0?e:e.replace(DS,"$1")}function hn(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(ex,function(t,n,r){return n||nx(t,r)})}const ix=/[&<>"]/,ox=/[&<>"]/g,ax={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function sx(e){return ax[e]}function $t(e){return ix.test(e)?e.replace(ox,sx):e}const ux=/[.?*+^$[\]\\(){}|-]/g;function lx(e){return e.replace(ux,"\\$&")}function ae(e){switch(e){case 9:case 32:return!0}return!1}function pr(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function PS(e){return n2.test(e)||kS.test(e)}function hr(e){return PS(dr(e))}function mr(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Vo(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}function S9(e){return e===32||e===9||e===10||e===13}function Xo(e){let t=0;for(;t<e.length&&S9(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&S9(e.charCodeAt(n));n--);return e.slice(t,n+1)}const cx={mdurl:OH,ucmicro:DH},fx=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:QH,asciiTrim:Xo,assign:Wo,escapeHtml:$t,escapeRE:lx,fromCodePoint:dr,has:JH,isMdAsciiPunct:mr,isPunctChar:PS,isPunctCharCode:hr,isSpace:ae,isString:r2,isValidEntityCode:i2,isWhiteSpace:pr,lib:cx,normalizeReference:Vo,unescapeAll:hn,unescapeMd:rx},Symbol.toStringTag,{value:"Module"}));function dx(e,t,n){let r,i,o,a;const s=e.posMax,u=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(o=e.src.charCodeAt(e.pos),o===93&&(r--,r===0)){i=!0;break}if(a=e.pos,e.md.inline.skipToken(e),o===91){if(a===e.pos-1)r++;else if(n)return e.pos=u,-1}}let l=-1;return i&&(l=e.pos),e.pos=u,l}function px(e,t,n){let r,i=t;const o={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return o;if(r===62)return o.pos=i+1,o.str=hn(e.slice(t+1,i)),o.ok=!0,o;if(r===92&&i+1<n){i+=2;continue}i++}return o}let a=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32){i++;continue}i+=2;continue}if(r===40&&(a++,a>32))return o;if(r===41){if(a===0)break;a--}i++}return t===i||a!==0||(o.str=hn(e.slice(t,i)),o.pos=i,o.ok=!0),o}function hx(e,t,n,r){let i,o=t;const a={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)a.str=r.str,a.marker=r.marker;else{if(o>=n)return a;let s=e.charCodeAt(o);if(s!==34&&s!==39&&s!==40)return a;t++,o++,s===40&&(s=41),a.marker=s}for(;o<n;){if(i=e.charCodeAt(o),i===a.marker)return a.pos=o+1,a.str+=hn(e.slice(t,o)),a.ok=!0,a;if(i===40&&a.marker===41)return a;i===92&&o+1<n&&o++,o++}return a.can_continue=!0,a.str+=hn(e.slice(t,o)),a}const mx=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:px,parseLinkLabel:dx,parseLinkTitle:hx},Symbol.toStringTag,{value:"Module"})),Qe={};Qe.code_inline=function(e,t,n,r,i){const o=e[t];return"<code"+i.renderAttrs(o)+">"+$t(o.content)+"</code>"};Qe.code_block=function(e,t,n,r,i){const o=e[t];return"<pre"+i.renderAttrs(o)+"><code>"+$t(e[t].content)+`</code></pre>
`};Qe.fence=function(e,t,n,r,i){const o=e[t],a=o.info?hn(o.info).trim():"";let s="",u="";if(a){const c=a.split(/(\s+)/g);s=c[0],u=c.slice(2).join("")}let l;if(n.highlight?l=n.highlight(o.content,s,u)||$t(o.content):l=$t(o.content),l.indexOf("<pre")===0)return l+`
`;if(a){const c=o.attrIndex("class"),f=o.attrs?o.attrs.slice():[];c<0?f.push(["class",n.langPrefix+s]):(f[c]=f[c].slice(),f[c][1]+=" "+n.langPrefix+s);const d={attrs:f};return`<pre><code${i.renderAttrs(d)}>${l}</code></pre>
`}return`<pre><code${i.renderAttrs(o)}>${l}</code></pre>
`};Qe.image=function(e,t,n,r,i){const o=e[t];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,n,r),i.renderToken(e,t,n)};Qe.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`};Qe.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};Qe.text=function(e,t){return $t(e[t].content)};Qe.html_block=function(e,t){return e[t].content};Qe.html_inline=function(e,t){return e[t].content};function Hn(){this.rules=Wo({},Qe)}Hn.prototype.renderAttrs=function(t){let n,r,i;if(!t.attrs)return"";for(i="",n=0,r=t.attrs.length;n<r;n++)i+=" "+$t(t.attrs[n][0])+'="'+$t(t.attrs[n][1])+'"';return i};Hn.prototype.renderToken=function(t,n,r){const i=t[n];let o="";if(i.hidden)return"";i.block&&i.nesting!==-1&&n&&t[n-1].hidden&&(o+=`
`),o+=(i.nesting===-1?"</":"<")+i.tag,o+=this.renderAttrs(i),i.nesting===0&&r.xhtmlOut&&(o+=" /");let a=!1;if(i.block&&(a=!0,i.nesting===1&&n+1<t.length)){const s=t[n+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===i.tag)&&(a=!1)}return o+=a?`>
`:">",o};Hn.prototype.renderInline=function(e,t,n){let r="";const i=this.rules;for(let o=0,a=e.length;o<a;o++){const s=e[o].type;typeof i[s]<"u"?r+=i[s](e,o,t,n,this):r+=this.renderToken(e,o,t)}return r};Hn.prototype.renderInlineAsText=function(e,t,n){let r="";for(let i=0,o=e.length;i<o;i++)switch(e[i].type){case"text":r+=e[i].content;break;case"image":r+=this.renderInlineAsText(e[i].children,t,n);break;case"html_inline":case"html_block":r+=e[i].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};Hn.prototype.render=function(e,t,n){let r="";const i=this.rules;for(let o=0,a=e.length;o<a;o++){const s=e[o].type;s==="inline"?r+=this.renderInline(e[o].children,t,n):typeof i[s]<"u"?r+=i[s](e,o,t,n,this):r+=this.renderToken(e,o,t,n)}return r};function Se(){this.__rules__=[],this.__cache__=null}Se.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};Se.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(r){t.indexOf(r)<0&&t.push(r)})}),e.__cache__={},t.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(r){r.enabled&&(n&&r.alt.indexOf(n)<0||e.__cache__[n].push(r.fn))})})};Se.prototype.at=function(e,t,n){const r=this.__find__(e),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null};Se.prototype.before=function(e,t,n,r){const i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};Se.prototype.after=function(e,t,n,r){const i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};Se.prototype.push=function(e,t,n){const r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null};Se.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!0,n.push(r)},this),this.__cache__=null,n};Se.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,t)};Se.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!1,n.push(r)},this),this.__cache__=null,n};Se.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function He(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}He.prototype.attrIndex=function(t){if(!this.attrs)return-1;const n=this.attrs;for(let r=0,i=n.length;r<i;r++)if(n[r][0]===t)return r;return-1};He.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};He.prototype.attrSet=function(t,n){const r=this.attrIndex(t),i=[t,n];r<0?this.attrPush(i):this.attrs[r]=i};He.prototype.attrGet=function(t){const n=this.attrIndex(t);let r=null;return n>=0&&(r=this.attrs[n][1]),r};He.prototype.attrJoin=function(t,n){const r=this.attrIndex(t);r<0?this.attrPush([t,n]):this.attrs[r][1]=this.attrs[r][1]+" "+n};function FS(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}FS.prototype.Token=He;const vx=/\r\n?|\n/g,_x=/\0/g;function bx(e){let t;t=e.src.replace(vx,`
`),t=t.replace(_x,"�"),e.src=t}function gx(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function yx(e){const t=e.tokens;for(let n=0,r=t.length;n<r;n++){const i=t[n];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function Ex(e){return/^<a[>\s]/i.test(e)}function wx(e){return/^<\/a\s*>/i.test(e)}function Sx(e){const t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!=="inline"||!e.md.linkify.pretest(t[n].content))continue;const i=t[n].children,o=[];let a=0;for(let s=i.length-1;s>=0;s--){const u=i[s];if(u.type==="link_close"){for(s--;i[s].level!==u.level&&i[s].type!=="link_open";)s--;continue}if(u.type==="html_inline"&&(Ex(u.content)&&a>0&&a--,wx(u.content)&&a++),!(a>0)&&u.type==="text"&&e.md.linkify.test(u.content)){const l=u.content;let c=e.md.linkify.match(l);const f=[];let d=u.level,p=0;c.length>0&&c[0].index===0&&s>0&&i[s-1].type==="text_special"&&(c=c.slice(1));for(let h=0;h<c.length;h++){const m=c[h].url,v=e.md.normalizeLink(m);if(!e.md.validateLink(v))continue;let _=c[h].text;c[h].schema?c[h].schema==="mailto:"&&!/^mailto:/i.test(_)?_=e.md.normalizeLinkText("mailto:"+_).replace(/^mailto:/,""):_=e.md.normalizeLinkText(_):_=e.md.normalizeLinkText("http://"+_).replace(/^http:\/\//,"");const b=c[h].index;if(b>p){const A=new e.Token("text","",0);A.content=l.slice(p,b),A.level=d,f.push(A)}const y=new e.Token("link_open","a",1);y.attrs=[["href",v]],y.level=d++,y.markup="linkify",y.info="auto",f.push(y);const g=new e.Token("text","",0);g.content=_,g.level=d,f.push(g);const E=new e.Token("link_close","a",-1);E.level=--d,E.markup="linkify",E.info="auto",f.push(E),p=c[h].lastIndex}if(p<l.length){const h=new e.Token("text","",0);h.content=l.slice(p),h.level=d,f.push(h)}o.push({index:s,nodes:f})}}if(o.length>0){let s=i.length;for(const f of o)s+=f.nodes.length-1;const u=new Array(s);let l=0,c=0;o.reverse();for(let f=0;f<i.length;f++){const d=o[l];if((d==null?void 0:d.index)===f){for(const p of d.nodes)u[c++]=p;l++}else u[c++]=i[f]}t[n].children=u}}}const qS=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,$x=/\((c|tm|r)\)/i,Ax=/\((c|tm|r)\)/ig,Tx={c:"©",r:"®",tm:"™"};function Rx(e,t){return Tx[t.toLowerCase()]}function Ix(e){let t=0;for(let n=e.length-1;n>=0;n--){const r=e[n];r.type==="text"&&!t&&(r.content=r.content.replace(Ax,Rx)),r.type==="link_open"&&r.info==="auto"&&t--,r.type==="link_close"&&r.info==="auto"&&t++}}function Lx(e){let t=0;for(let n=e.length-1;n>=0;n--){const r=e[n];r.type==="text"&&!t&&qS.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&t--,r.type==="link_close"&&r.info==="auto"&&t++}}function Cx(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&($x.test(e.tokens[t].content)&&Ix(e.tokens[t].children),qS.test(e.tokens[t].content)&&Lx(e.tokens[t].children))}const kx=/['"]/,$9=/['"]/g,A9="’",Nx=1e3;function T9(e,t,n){for(;e.length>n;){const r=e.pop();r.isSingleQuote?t.single=r.prevSameQuoteIdx:t.double=r.prevSameQuoteIdx}}function fi(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function Ox(e,t){let n="",r=0;t.sort((i,o)=>i.pos-o.pos);for(let i=0;i<t.length;i++){const o=t[i];n+=e.slice(r,o.pos)+o.ch,r=o.pos+1}return n+e.slice(r)}function Mx(e,t){let n;const r=[],i={single:-1,double:-1},o={};for(let a=0;a<e.length;a++){const s=e[a],u=e[a].level;for(n=r.length-1;n>=0&&!(r[n].level<=u);n--);if(T9(r,i,n+1),s.type!=="text")continue;const l=s.content;let c=0;const f=l.length;e:for(;c<f;){$9.lastIndex=c;const d=$9.exec(l);if(!d)break;let p=!0,h=!0;c=d.index+1;const m=d[0]==="'";let v=32;if(d.index-1>=0)v=l.charCodeAt(d.index-1);else for(n=a-1;n>=0&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n--)if(e[n].content){v=e[n].content.charCodeAt(e[n].content.length-1);break}let _=32;if(c<f)_=l.charCodeAt(c);else for(n=a+1;n<e.length&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n++)if(e[n].content){_=e[n].content.charCodeAt(0);break}const b=mr(v)||hr(v),y=mr(_)||hr(_),g=pr(v),E=pr(_);if(E?p=!1:y&&(g||b||(p=!1)),g?h=!1:b&&(E||y||(h=!1)),_===34&&d[0]==='"'&&v>=48&&v<=57&&(h=p=!1),p&&h&&(p=b,h=y),!p&&!h){m&&fi(o,a,d.index,A9);continue}if(h&&(n=m?i.single:i.double,n>=0&&r[n].level===u)){const A=r[n];let $,C;m?($=t.md.options.quotes[2],C=t.md.options.quotes[3]):($=t.md.options.quotes[0],C=t.md.options.quotes[1]),fi(o,a,d.index,C),fi(o,A.tokenIdx,A.contentPos,$),T9(r,i,n);continue e}if(p){if(r.length>=Nx)return;r.push({tokenIdx:a,contentPos:d.index,isSingleQuote:m,level:u,prevSameQuoteIdx:m?i.single:i.double}),m?i.single=r.length-1:i.double=r.length-1}else h&&m&&fi(o,a,d.index,A9)}}Object.keys(o).forEach(function(a){e[a].content=Ox(e[a].content,o[a])})}function Dx(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!kx.test(e.tokens[t].content)||Mx(e.tokens[t].children,e)}function Px(e){let t,n;const r=e.tokens,i=r.length;for(let o=0;o<i;o++){if(r[o].type!=="inline")continue;const a=r[o].children,s=a.length;for(t=0;t<s;t++)a[t].type==="text_special"&&(a[t].type="text");for(t=n=0;t<s;t++)a[t].type==="text"&&t+1<s&&a[t+1].type==="text"?a[t+1].content=a[t].content+a[t+1].content:(t!==n&&(a[n]=a[t]),n++);t!==n&&(a.length=n)}}const Mp=[["normalize",bx],["block",gx],["inline",yx],["linkify",Sx],["replacements",Cx],["smartquotes",Dx],["text_join",Px]];function o2(){this.ruler=new Se;for(let e=0;e<Mp.length;e++)this.ruler.push(Mp[e][0],Mp[e][1])}o2.prototype.process=function(e){const t=this.ruler.getRules("");for(let n=0,r=t.length;n<r;n++)t[n](e)};o2.prototype.State=FS;function Ze(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let o=0,a=0,s=0,u=0,l=i.length,c=!1;a<l;a++){const f=i.charCodeAt(a);if(!c)if(ae(f)){s++,f===9?u+=4-u%4:u++;continue}else c=!0;(f===10||a===l-1)&&(f!==10&&a++,this.bMarks.push(o),this.eMarks.push(a),this.tShift.push(s),this.sCount.push(u),this.bsCount.push(0),c=!1,s=0,u=0,o=a+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Ze.prototype.push=function(e,t,n){const r=new He(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r};Ze.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};Ze.prototype.skipEmptyLines=function(t){for(let n=this.lineMax;t<n&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};Ze.prototype.skipSpaces=function(t){for(let n=this.src.length;t<n;t++){const r=this.src.charCodeAt(t);if(!ae(r))break}return t};Ze.prototype.skipSpacesBack=function(t,n){if(t<=n)return t;for(;t>n;)if(!ae(this.src.charCodeAt(--t)))return t+1;return t};Ze.prototype.skipChars=function(t,n){for(let r=this.src.length;t<r&&this.src.charCodeAt(t)===n;t++);return t};Ze.prototype.skipCharsBack=function(t,n,r){if(t<=r)return t;for(;t>r;)if(n!==this.src.charCodeAt(--t))return t+1;return t};Ze.prototype.getLines=function(t,n,r,i){if(t>=n)return"";const o=new Array(n-t);for(let a=0,s=t;s<n;s++,a++){let u=0;const l=this.bMarks[s];let c=l,f;for(s+1<n||i?f=this.eMarks[s]+1:f=this.eMarks[s];c<f&&u<r;){const d=this.src.charCodeAt(c);if(ae(d))d===9?u+=4-(u+this.bsCount[s])%4:u++;else if(c-l<this.tShift[s])u++;else break;c++}u>r?o[a]=new Array(u-r+1).join(" ")+this.src.slice(c,f):o[a]=this.src.slice(c,f)}return o.join("")};Ze.prototype.Token=He;const Fx=65536;function Dp(e,t){const n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function R9(e){const t=[],n=e.length;let r=0,i=e.charCodeAt(r),o=!1,a=0,s="";for(;r<n;)i===124&&(o?(s+=e.substring(a,r-1),a=r):(t.push(s+e.substring(a,r)),s="",a=r+1)),o=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(a)),t}function qx(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let o=e.bMarks[i]+e.tShift[i];if(o>=e.eMarks[i])return!1;const a=e.src.charCodeAt(o++);if(a!==124&&a!==45&&a!==58||o>=e.eMarks[i])return!1;const s=e.src.charCodeAt(o++);if(s!==124&&s!==45&&s!==58&&!ae(s)||a===45&&ae(s))return!1;for(;o<e.eMarks[i];){const g=e.src.charCodeAt(o);if(g!==124&&g!==45&&g!==58&&!ae(g))return!1;o++}let u=Dp(e,t+1),l=u.split("|");const c=[];for(let g=0;g<l.length;g++){const E=l[g].trim();if(!E){if(g===0||g===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?c.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?c.push("left"):c.push("")}if(u=Dp(e,t).trim(),u.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=R9(u),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop();const f=l.length;if(f===0||f!==c.length)return!1;if(r)return!0;const d=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),h=e.push("table_open","table",1),m=[t,0];h.map=m;const v=e.push("thead_open","thead",1);v.map=[t,t+1];const _=e.push("tr_open","tr",1);_.map=[t,t+1];for(let g=0;g<l.length;g++){const E=e.push("th_open","th",1);c[g]&&(E.attrs=[["style","text-align:"+c[g]]]);const A=e.push("inline","",0);A.content=l[g].trim(),A.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let b,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let g=!1;for(let A=0,$=p.length;A<$;A++)if(p[A](e,i,n,!0)){g=!0;break}if(g||(u=Dp(e,i).trim(),!u)||e.sCount[i]-e.blkIndent>=4||(l=R9(u),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop(),y+=f-l.length,y>Fx))break;if(i===t+2){const A=e.push("tbody_open","tbody",1);A.map=b=[t+2,0]}const E=e.push("tr_open","tr",1);E.map=[i,i+1];for(let A=0;A<f;A++){const $=e.push("td_open","td",1);c[A]&&($.attrs=[["style","text-align:"+c[A]]]);const C=e.push("inline","",0);C.content=l[A]?l[A].trim():"",C.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return b&&(e.push("tbody_close","tbody",-1),b[1]=i),e.push("table_close","table",-1),m[1]=i,e.parentType=d,e.line=i,!0}function Bx(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;const o=e.push("code_block","code",0);return o.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,o.map=[t,e.line],!0}function Hx(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>o)return!1;const a=e.src.charCodeAt(i);if(a!==126&&a!==96)return!1;let s=i;i=e.skipChars(i,a);let u=i-s;if(u<3)return!1;const l=e.src.slice(s,i),c=e.src.slice(i,o);if(a===96&&c.indexOf(String.fromCharCode(a))>=0)return!1;if(r)return!0;let f=t,d=!1;for(;f++,!(f>=n||(i=s=e.bMarks[f]+e.tShift[f],o=e.eMarks[f],i<o&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(i)===a&&!(e.sCount[f]-e.blkIndent>=4)&&(i=e.skipChars(i,a),!(i-s<u)&&(i=e.skipSpaces(i),!(i<o)))){d=!0;break}u=e.sCount[t],e.line=f+(d?1:0);const p=e.push("fence","code",0);return p.info=c,p.content=e.getLines(t+1,f,u,!0),p.markup=l,p.map=[t,e.line],!0}function xx(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];const a=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;const s=[],u=[],l=[],c=[],f=e.md.block.ruler.getRules("blockquote"),d=e.parentType;e.parentType="blockquote";let p=!1,h;for(h=t;h<n;h++){const y=e.sCount[h]<e.blkIndent;if(i=e.bMarks[h]+e.tShift[h],o=e.eMarks[h],i>=o)break;if(e.src.charCodeAt(i++)===62&&!y){let E=e.sCount[h]+1,A,$;e.src.charCodeAt(i)===32?(i++,E++,$=!1,A=!0):e.src.charCodeAt(i)===9?(A=!0,(e.bsCount[h]+E)%4===3?(i++,E++,$=!1):$=!0):A=!1;let C=E;for(s.push(e.bMarks[h]),e.bMarks[h]=i;i<o;){const I=e.src.charCodeAt(i);if(ae(I))I===9?C+=4-(C+e.bsCount[h]+($?1:0))%4:C++;else break;i++}p=i>=o,u.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(A?1:0),l.push(e.sCount[h]),e.sCount[h]=C-E,c.push(e.tShift[h]),e.tShift[h]=i-e.bMarks[h];continue}if(p)break;let g=!1;for(let E=0,A=f.length;E<A;E++)if(f[E](e,h,n,!0)){g=!0;break}if(g){e.lineMax=h,e.blkIndent!==0&&(s.push(e.bMarks[h]),u.push(e.bsCount[h]),c.push(e.tShift[h]),l.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}s.push(e.bMarks[h]),u.push(e.bsCount[h]),c.push(e.tShift[h]),l.push(e.sCount[h]),e.sCount[h]=-1}const m=e.blkIndent;e.blkIndent=0;const v=e.push("blockquote_open","blockquote",1);v.markup=">";const _=[t,0];v.map=_,e.md.block.tokenize(e,t,h);const b=e.push("blockquote_close","blockquote",-1);b.markup=">",e.lineMax=a,e.parentType=d,_[1]=e.line;for(let y=0;y<c.length;y++)e.bMarks[y+t]=s[y],e.tShift[y+t]=c[y],e.sCount[y+t]=l[y],e.bsCount[y+t]=u[y];return e.blkIndent=m,!0}function Ux(e,t,n,r){const i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.bMarks[t]+e.tShift[t];const a=e.src.charCodeAt(o++);if(a!==42&&a!==45&&a!==95)return!1;let s=1;for(;o<i;){const l=e.src.charCodeAt(o++);if(l!==a&&!ae(l))return!1;l===a&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;const u=e.push("hr","hr",0);return u.map=[t,e.line],u.markup=Array(s+1).join(String.fromCharCode(a)),!0}function I9(e,t){const n=e.eMarks[t];let r=e.bMarks[t]+e.tShift[t];const i=e.src.charCodeAt(r++);if(i!==42&&i!==45&&i!==43)return-1;if(r<n){const o=e.src.charCodeAt(r);if(!ae(o))return-1}return r}function L9(e,t){const n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];let i=n;if(i+1>=r)return-1;let o=e.src.charCodeAt(i++);if(o<48||o>57)return-1;for(;;){if(i>=r)return-1;if(o=e.src.charCodeAt(i++),o>=48&&o<=57){if(i-n>=10)return-1;continue}if(o===41||o===46)break;return-1}return i<r&&(o=e.src.charCodeAt(i),!ae(o))?-1:i}function Gx(e,t){const n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function Wx(e,t,n,r){let i,o,a,s,u=t,l=!0;if(e.sCount[u]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[u]-e.listIndent>=4&&e.sCount[u]<e.blkIndent)return!1;let c=!1;r&&e.parentType==="paragraph"&&e.sCount[u]>=e.blkIndent&&(c=!0);let f,d,p;if((p=L9(e,u))>=0){if(f=!0,a=e.bMarks[u]+e.tShift[u],d=Number(e.src.slice(a,p-1)),c&&d!==1)return!1}else if((p=I9(e,u))>=0)f=!1;else return!1;if(c&&e.skipSpaces(p)>=e.eMarks[u])return!1;if(r)return!0;const h=e.src.charCodeAt(p-1),m=e.tokens.length;f?(s=e.push("ordered_list_open","ol",1),d!==1&&(s.attrs=[["start",d]])):s=e.push("bullet_list_open","ul",1);const v=[u,0];s.map=v,s.markup=String.fromCharCode(h);let _=!1;const b=e.md.block.ruler.getRules("list"),y=e.parentType;for(e.parentType="list";u<n;){o=p,i=e.eMarks[u];const g=e.sCount[u]+p-(e.bMarks[u]+e.tShift[u]);let E=g;for(;o<i;){const O=e.src.charCodeAt(o);if(O===9)E+=4-(E+e.bsCount[u])%4;else if(O===32)E++;else break;o++}const A=o;let $;A>=i?$=1:$=E-g,$>4&&($=1);const C=g+$;s=e.push("list_item_open","li",1),s.markup=String.fromCharCode(h);const I=[u,0];s.map=I,f&&(s.info=e.src.slice(a,p-1));const T=e.tight,S=e.tShift[u],w=e.sCount[u],R=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=C,e.tight=!0,e.tShift[u]=A-e.bMarks[u],e.sCount[u]=E,A>=i&&e.isEmpty(u+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,u,n,!0),(!e.tight||_)&&(l=!1),_=e.line-u>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=R,e.tShift[u]=S,e.sCount[u]=w,e.tight=T,s=e.push("list_item_close","li",-1),s.markup=String.fromCharCode(h),u=e.line,I[1]=u,u>=n||e.sCount[u]<e.blkIndent||e.sCount[u]-e.blkIndent>=4)break;let L=!1;for(let O=0,k=b.length;O<k;O++)if(b[O](e,u,n,!0)){L=!0;break}if(L)break;if(f){if(p=L9(e,u),p<0)break;a=e.bMarks[u]+e.tShift[u]}else if(p=I9(e,u),p<0)break;if(h!==e.src.charCodeAt(p-1))break}return f?s=e.push("ordered_list_close","ol",-1):s=e.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(h),v[1]=u,e.line=u,e.parentType=y,l&&Gx(e,m),!0}function Vx(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],o=e.eMarks[t],a=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(b){const y=e.lineMax;if(b>=y||e.isEmpty(b))return null;let g=!1;if(e.sCount[b]-e.blkIndent>3&&(g=!0),e.sCount[b]<0&&(g=!0),!g){const $=e.md.block.ruler.getRules("reference"),C=e.parentType;e.parentType="reference";let I=!1;for(let T=0,S=$.length;T<S;T++)if($[T](e,b,y,!0)){I=!0;break}if(e.parentType=C,I)return null}const E=e.bMarks[b]+e.tShift[b],A=e.eMarks[b];return e.src.slice(E,A+1)}let u=e.src.slice(i,o+1);o=u.length;let l=-1;for(i=1;i<o;i++){const b=u.charCodeAt(i);if(b===91)return!1;if(b===93){l=i;break}else if(b===10){const y=s(a);y!==null&&(u+=y,o=u.length,a++)}else if(b===92&&(i++,i<o&&u.charCodeAt(i)===10)){const y=s(a);y!==null&&(u+=y,o=u.length,a++)}}if(l<0||u.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<o;i++){const b=u.charCodeAt(i);if(b===10){const y=s(a);y!==null&&(u+=y,o=u.length,a++)}else if(!ae(b))break}const c=e.md.helpers.parseLinkDestination(u,i,o);if(!c.ok)return!1;const f=e.md.normalizeLink(c.str);if(!e.md.validateLink(f))return!1;i=c.pos;const d=i,p=a,h=i;for(;i<o;i++){const b=u.charCodeAt(i);if(b===10){const y=s(a);y!==null&&(u+=y,o=u.length,a++)}else if(!ae(b))break}let m=e.md.helpers.parseLinkTitle(u,i,o);for(;m.can_continue;){const b=s(a);if(b===null)break;u+=b,i=o,o=u.length,a++,m=e.md.helpers.parseLinkTitle(u,i,o,m)}let v;for(i<o&&h!==i&&m.ok?(v=m.str,i=m.pos):(v="",i=d,a=p);i<o;){const b=u.charCodeAt(i);if(!ae(b))break;i++}if(i<o&&u.charCodeAt(i)!==10&&v)for(v="",i=d,a=p;i<o;){const b=u.charCodeAt(i);if(!ae(b))break;i++}if(i<o&&u.charCodeAt(i)!==10)return!1;const _=Vo(u.slice(1,l));return _?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[_]>"u"&&(e.env.references[_]={title:v,href:f}),e.line=a),!0):!1}const Xx=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],jx="[a-zA-Z_:][a-zA-Z0-9:._-]*",Kx="[^\"'=<>`\\x00-\\x20]+",Yx="'[^']*'",zx='"[^"]*"',Jx="(?:"+Kx+"|"+Yx+"|"+zx+")",Qx="(?:\\s+"+jx+"(?:\\s*=\\s*"+Jx+")?)",BS="<[A-Za-z][A-Za-z0-9\\-]*"+Qx+"*\\s*\\/?>",HS="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Zx="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",eU="<[?][\\s\\S]*?[?]>",tU="<![A-Za-z][^>]*>",nU="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",rU=new RegExp("^(?:"+BS+"|"+HS+"|"+Zx+"|"+eU+"|"+tU+"|"+nU+")"),iU=new RegExp("^(?:"+BS+"|"+HS+")"),Ot=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Xx.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(iU.source+"\\s*$"),/^$/,!1]];function oU(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let a=e.src.slice(i,o),s=0;for(;s<Ot.length&&!Ot[s][0].test(a);s++);if(s===Ot.length)return!1;if(r)return Ot[s][2];let u=t+1;const l=Ot[s][1].test("");if(!Ot[s][1].test(a)){for(;u<n&&!(e.sCount[u]<e.blkIndent&&(l||!e.isEmpty(u)));u++)if(i=e.bMarks[u]+e.tShift[u],o=e.eMarks[u],a=e.src.slice(i,o),Ot[s][1].test(a)){a.length!==0&&u++;break}}e.line=u;const c=e.push("html_block","",0);return c.map=[t,u],c.content=e.getLines(t,u,e.blkIndent,!0),!0}function aU(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.src.charCodeAt(i);if(a!==35||i>=o)return!1;let s=1;for(a=e.src.charCodeAt(++i);a===35&&i<o&&s<=6;)s++,a=e.src.charCodeAt(++i);if(s>6||i<o&&!ae(a))return!1;if(r)return!0;o=e.skipSpacesBack(o,i);const u=e.skipCharsBack(o,35,i);u>i&&ae(e.src.charCodeAt(u-1))&&(o=u),e.line=t+1;const l=e.push("heading_open","h"+String(s),1);l.markup="########".slice(0,s),l.map=[t,e.line];const c=e.push("inline","",0);c.content=Xo(e.src.slice(i,o)),c.map=[t,e.line],c.children=[];const f=e.push("heading_close","h"+String(s),-1);return f.markup="########".slice(0,s),!0}function sU(e,t,n){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let o=0,a,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let p=e.bMarks[s]+e.tShift[s];const h=e.eMarks[s];if(p<h&&(a=e.src.charCodeAt(p),(a===45||a===61)&&(p=e.skipChars(p,a),p=e.skipSpaces(p),p>=h))){o=a===61?1:2;break}}if(e.sCount[s]<0)continue;let d=!1;for(let p=0,h=r.length;p<h;p++)if(r[p](e,s,n,!0)){d=!0;break}if(d)break}if(!o)return e.parentType=i,!1;const u=Xo(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;const l=e.push("heading_open","h"+String(o),1);l.markup=String.fromCharCode(a),l.map=[t,e.line];const c=e.push("inline","",0);c.content=u,c.map=[t,e.line-1],c.children=[];const f=e.push("heading_close","h"+String(o),-1);return f.markup=String.fromCharCode(a),e.parentType=i,!0}function uU(e,t,n){const r=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let o=t+1;for(e.parentType="paragraph";o<n&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)continue;let l=!1;for(let c=0,f=r.length;c<f;c++)if(r[c](e,o,n,!0)){l=!0;break}if(l)break}const a=Xo(e.getLines(t,o,e.blkIndent,!1));e.line=o;const s=e.push("paragraph_open","p",1);s.map=[t,e.line];const u=e.push("inline","",0);return u.content=a,u.map=[t,e.line],u.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const di=[["table",qx,["paragraph","reference"]],["code",Bx],["fence",Hx,["paragraph","reference","blockquote","list"]],["blockquote",xx,["paragraph","reference","blockquote","list"]],["hr",Ux,["paragraph","reference","blockquote","list"]],["list",Wx,["paragraph","reference","blockquote"]],["reference",Vx],["html_block",oU,["paragraph","reference","blockquote"]],["heading",aU,["paragraph","reference","blockquote"]],["lheading",sU],["paragraph",uU]];function jo(){this.ruler=new Se;for(let e=0;e<di.length;e++)this.ruler.push(di[e][0],di[e][1],{alt:(di[e][2]||[]).slice()})}jo.prototype.tokenize=function(e,t,n){const r=this.ruler.getRules(""),i=r.length,o=e.md.options.maxNesting;let a=t,s=!1;for(;a<n&&(e.line=a=e.skipEmptyLines(a),!(a>=n||e.sCount[a]<e.blkIndent));){if(e.level>=o){e.line=n;break}const u=e.line;let l=!1;for(let c=0;c<i;c++)if(l=r[c](e,a,n,!1),l){if(u>=e.line)throw new Error("block rule didn't increment state.line");break}if(!l)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),a=e.line,a<n&&e.isEmpty(a)&&(s=!0,a++,e.line=a)}};jo.prototype.parse=function(e,t,n,r){if(!e)return;const i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)};jo.prototype.State=Ze;function Wr(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Wr.prototype.pushPending=function(){const e=new He("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Wr.prototype.push=function(e,t,n){this.pending&&this.pushPending();const r=new He(e,t,n);let i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r};Wr.prototype.scanDelims=function(e,t){const n=this.posMax,r=this.src.charCodeAt(e);let i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)===55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)===56320){const v=this.src.charCodeAt(e-2);i=(v&64512)===55296?65536+(v-55296<<10)+(i-56320):65533}else(i&64512)===55296&&(i=65533);let o=e;for(;o<n&&this.src.charCodeAt(o)===r;)o++;const a=o-e;let s=o<n?this.src.charCodeAt(o):32;if((s&64512)===55296){const v=this.src.charCodeAt(o+1);s=(v&64512)===56320?65536+(s-55296<<10)+(v-56320):65533}else(s&64512)===56320&&(s=65533);const u=mr(i)||hr(i),l=mr(s)||hr(s),c=pr(i),f=pr(s),d=!f&&(!l||c||u),p=!c&&(!u||f||l);return{can_open:d&&(t||!p||u),can_close:p&&(t||!d||l),length:a}};Wr.prototype.Token=He;function lU(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function cU(e,t){let n=e.pos;for(;n<e.posMax&&!lU(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}function fU(e){return e>=65&&e<=90||e>=97&&e<=122}function dU(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===45||e===46}function pU(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;const i=n-Math.min(10,e.pending.length,n);let o=n;for(;o>i&&dU(e.src.charCodeAt(o-1));)o--;if(o===n||!fU(e.src.charCodeAt(o)))return!1;const a=n-o,s=e.md.linkify.matchAtStart(e.src.slice(o));if(!s)return!1;let u=s.url;if(u.length<=a)return!1;let l=u.length;for(;l>0&&u.charCodeAt(l-1)===42;)l--;l!==u.length&&(u=u.slice(0,l));const c=e.md.normalizeLink(u);if(!e.md.validateLink(c))return!1;if(!t){e.pending=e.pending.slice(0,-a);const f=e.push("link_open","a",1);f.attrs=[["href",c]],f.markup="linkify",f.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(u);const p=e.push("link_close","a",-1);p.markup="linkify",p.info="auto"}return e.pos+=u.length-a,!0}function hU(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;const r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let o=r-1;for(;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(n++;n<i&&ae(e.src.charCodeAt(n));)n++;return e.pos=n,!0}const a2=[];for(let e=0;e<256;e++)a2.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){a2[e.charCodeAt(0)]=1});function mU(e,t){let n=e.pos;const r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push("hardbreak","br",0),n++;n<r&&(i=e.src.charCodeAt(n),!!ae(i));)n++;return e.pos=n,!0}if(i===32){if(!t){const s=e.push("text_special","",0);s.content="\\",s.markup="\\",s.info="escape"}return e.pos=n,!0}let o=e.src[n];if(i>=55296&&i<=56319&&n+1<r){const s=e.src.charCodeAt(n+1);s>=56320&&s<=57343&&(o+=e.src[n+1],n++)}const a="\\"+o;if(!t){const s=e.push("text_special","",0);i<256&&a2[i]!==0?s.content=o:s.content=a,s.markup=a,s.info="escape"}return e.pos=n+1,!0}function vU(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;const i=n;n++;const o=e.posMax;for(;n<o&&e.src.charCodeAt(n)===96;)n++;const a=e.src.slice(i,n),s=a.length;if(e.backticksScanned&&(e.backticks[s]||0)<=i)return t||(e.pending+=a),e.pos+=s,!0;let u=n,l;for(;(l=e.src.indexOf("`",u))!==-1;){for(u=l+1;u<o&&e.src.charCodeAt(u)===96;)u++;const c=u-l;if(c===s){if(!t){const f=e.push("code_inline","code",0);f.markup=a,f.content=e.src.slice(n,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=u,!0}e.backticks[c]=l}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=s,!0}function _U(e,t){const n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;const i=e.scanDelims(e.pos,!0);let o=i.length;const a=String.fromCharCode(r);if(o<2)return!1;let s;o%2&&(s=e.push("text","",0),s.content=a,o--);for(let u=0;u<o;u+=2)s=e.push("text","",0),s.content=a+a,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function C9(e,t){let n;const r=[],i=t.length;for(let o=0;o<i;o++){const a=t[o];if(a.marker!==126||a.end===-1)continue;const s=t[a.end];n=e.tokens[a.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=e.tokens[s.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",e.tokens[s.token-1].type==="text"&&e.tokens[s.token-1].content==="~"&&r.push(s.token-1)}for(;r.length;){const o=r.pop();let a=o+1;for(;a<e.tokens.length&&e.tokens[a].type==="s_close";)a++;a--,o!==a&&(n=e.tokens[a],e.tokens[a]=e.tokens[o],e.tokens[o]=n)}}function bU(e){const t=e.tokens_meta,n=e.tokens_meta.length;C9(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&C9(e,t[r].delimiters)}const xS={tokenize:_U,postProcess:bU};function gU(e,t){const n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;const i=e.scanDelims(e.pos,r===42);for(let o=0;o<i.length;o++){const a=e.push("text","",0);a.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function k9(e,t){const n=t.length;for(let r=n-1;r>=0;r--){const i=t[r];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const o=t[i.end],a=r>0&&t[r-1].end===i.end+1&&t[r-1].marker===i.marker&&t[r-1].token===i.token-1&&t[i.end+1].token===o.token+1,s=String.fromCharCode(i.marker),u=e.tokens[i.token];u.type=a?"strong_open":"em_open",u.tag=a?"strong":"em",u.nesting=1,u.markup=a?s+s:s,u.content="";const l=e.tokens[o.token];l.type=a?"strong_close":"em_close",l.tag=a?"strong":"em",l.nesting=-1,l.markup=a?s+s:s,l.content="",a&&(e.tokens[t[r-1].token].content="",e.tokens[t[i.end+1].token].content="",r--)}}function yU(e){const t=e.tokens_meta,n=e.tokens_meta.length;k9(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&k9(e,t[r].delimiters)}const US={tokenize:gU,postProcess:yU};function EU(e,t){let n,r,i,o,a="",s="",u=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const c=e.pos,f=e.posMax,d=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let h=p+1;if(h<f&&e.src.charCodeAt(h)===40){for(l=!1,h++;h<f&&(n=e.src.charCodeAt(h),!(!ae(n)&&n!==10));h++);if(h>=f)return!1;if(u=h,i=e.md.helpers.parseLinkDestination(e.src,h,e.posMax),i.ok){for(a=e.md.normalizeLink(i.str),e.md.validateLink(a)?h=i.pos:a="",u=h;h<f&&(n=e.src.charCodeAt(h),!(!ae(n)&&n!==10));h++);if(i=e.md.helpers.parseLinkTitle(e.src,h,e.posMax),h<f&&u!==h&&i.ok)for(s=i.str,h=i.pos;h<f&&(n=e.src.charCodeAt(h),!(!ae(n)&&n!==10));h++);}(h>=f||e.src.charCodeAt(h)!==41)&&(l=!0),h++}if(l){if(typeof e.env.references>"u")return!1;if(h<f&&e.src.charCodeAt(h)===91?(u=h+1,h=e.md.helpers.parseLinkLabel(e,h),h>=0?r=e.src.slice(u,h++):h=p+1):h=p+1,r||(r=e.src.slice(d,p)),o=e.env.references[Vo(r)],!o)return e.pos=c,!1;a=o.href,s=o.title}if(!t){e.pos=d,e.posMax=p;const m=e.push("link_open","a",1),v=[["href",a]];m.attrs=v,s&&v.push(["title",s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=h,e.posMax=f,!0}function wU(e,t){let n,r,i,o,a,s,u,l,c="";const f=e.pos,d=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,h=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(h<0)return!1;if(o=h+1,o<d&&e.src.charCodeAt(o)===40){for(o++;o<d&&(n=e.src.charCodeAt(o),!(!ae(n)&&n!==10));o++);if(o>=d)return!1;for(l=o,s=e.md.helpers.parseLinkDestination(e.src,o,e.posMax),s.ok&&(c=e.md.normalizeLink(s.str),e.md.validateLink(c)?o=s.pos:c=""),l=o;o<d&&(n=e.src.charCodeAt(o),!(!ae(n)&&n!==10));o++);if(s=e.md.helpers.parseLinkTitle(e.src,o,e.posMax),o<d&&l!==o&&s.ok)for(u=s.str,o=s.pos;o<d&&(n=e.src.charCodeAt(o),!(!ae(n)&&n!==10));o++);else u="";if(o>=d||e.src.charCodeAt(o)!==41)return e.pos=f,!1;o++}else{if(typeof e.env.references>"u")return!1;if(o<d&&e.src.charCodeAt(o)===91?(l=o+1,o=e.md.helpers.parseLinkLabel(e,o),o>=0?i=e.src.slice(l,o++):o=h+1):o=h+1,i||(i=e.src.slice(p,h)),a=e.env.references[Vo(i)],!a)return e.pos=f,!1;c=a.href,u=a.title}if(!t){r=e.src.slice(p,h);const m=[];e.md.inline.parse(r,e.md,e.env,m);const v=e.push("image","img",0),_=[["src",c],["alt",""]];v.attrs=_,v.children=m,v.content=r,u&&_.push(["title",u])}return e.pos=o,e.posMax=d,!0}const SU=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,$U=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function AU(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;const r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;const a=e.src.charCodeAt(n);if(a===60)return!1;if(a===62)break}const o=e.src.slice(r+1,n);if($U.test(o)){const a=e.md.normalizeLink(o);if(!e.md.validateLink(a))return!1;if(!t){const s=e.push("link_open","a",1);s.attrs=[["href",a]],s.markup="autolink",s.info="auto";const u=e.push("text","",0);u.content=e.md.normalizeLinkText(o);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=o.length+2,!0}if(SU.test(o)){const a=e.md.normalizeLink("mailto:"+o);if(!e.md.validateLink(a))return!1;if(!t){const s=e.push("link_open","a",1);s.attrs=[["href",a]],s.markup="autolink",s.info="auto";const u=e.push("text","",0);u.content=e.md.normalizeLinkText(o);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=o.length+2,!0}return!1}function TU(e){return/^<a[>\s]/i.test(e)}function RU(e){return/^<\/a\s*>/i.test(e)}function IU(e){const t=e|32;return t>=97&&t<=122}function LU(e,t){if(!e.md.options.html)return!1;const n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;const i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!IU(i))return!1;const o=e.src.slice(r).match(rU);if(!o)return!1;if(!t){const a=e.push("html_inline","",0);a.content=o[0],TU(a.content)&&e.linkLevel++,RU(a.content)&&e.linkLevel--}return e.pos+=o[0].length,!0}const CU=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,kU=/^&([a-z][a-z0-9]{1,31});/i;function NU(e,t){const n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){const o=e.src.slice(n).match(CU);if(o){if(!t){const a=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),s=e.push("text_special","",0);s.content=i2(a)?dr(a):dr(65533),s.markup=o[0],s.info="entity"}return e.pos+=o[0].length,!0}}else{const o=e.src.slice(n).match(kU);if(o){const a=KH(o[0]);if(a!==o[0]){if(!t){const s=e.push("text_special","",0);s.content=a,s.markup=o[0],s.info="entity"}return e.pos+=o[0].length,!0}}}return!1}function N9(e){const t={},n=e.length;if(!n)return;let r=0,i=-2;const o=[];for(let a=0;a<n;a++){const s=e[a];if(o.push(0),(e[r].marker!==s.marker||i!==s.token-1)&&(r=a),i=s.token,s.length=s.length||0,!s.close)continue;t.hasOwnProperty(s.marker)||(t[s.marker]=[-1,-1,-1,-1,-1,-1]);const u=t[s.marker][(s.open?3:0)+s.length%3];let l=r-o[r]-1,c=l;for(;l>u;l-=o[l]+1){const f=e[l];if(f.marker===s.marker&&f.open&&f.end<0){let d=!1;if((f.close||s.open)&&(f.length+s.length)%3===0&&(f.length%3!==0||s.length%3!==0)&&(d=!0),!d){const p=l>0&&!e[l-1].open?o[l-1]+1:0;o[a]=a-l+p,o[l]=p,s.open=!1,f.end=a,f.close=!1,c=-1,i=-2;break}}}c!==-1&&(t[s.marker][(s.open?3:0)+(s.length||0)%3]=c)}}function OU(e){const t=e.tokens_meta,n=e.tokens_meta.length;N9(e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&N9(t[r].delimiters)}function MU(e){let t,n,r=0;const i=e.tokens,o=e.tokens.length;for(t=n=0;t<o;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type==="text"&&t+1<o&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}const Pp=[["text",cU],["linkify",pU],["newline",hU],["escape",mU],["backticks",vU],["strikethrough",xS.tokenize],["emphasis",US.tokenize],["link",EU],["image",wU],["autolink",AU],["html_inline",LU],["entity",NU]],Fp=[["balance_pairs",OU],["strikethrough",xS.postProcess],["emphasis",US.postProcess],["fragments_join",MU]];function Vr(){this.ruler=new Se;for(let e=0;e<Pp.length;e++)this.ruler.push(Pp[e][0],Pp[e][1]);this.ruler2=new Se;for(let e=0;e<Fp.length;e++)this.ruler2.push(Fp[e][0],Fp[e][1])}Vr.prototype.skipToken=function(e){const t=e.pos,n=this.ruler.getRules(""),r=n.length,i=e.md.options.maxNesting,o=e.cache;if(typeof o[t]<"u"){e.pos=o[t];return}let a=!1;if(e.level<i){for(let s=0;s<r;s++)if(e.level++,a=n[s](e,!0),e.level--,a){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;a||e.pos++,o[t]=e.pos};Vr.prototype.tokenize=function(e){const t=this.ruler.getRules(""),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){const o=e.pos;let a=!1;if(e.level<i){for(let s=0;s<n;s++)if(a=t[s](e,!1),a){if(o>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(a){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Vr.prototype.parse=function(e,t,n,r){const i=new this.State(e,t,n,r);this.tokenize(i);const o=this.ruler2.getRules(""),a=o.length;for(let s=0;s<a;s++)o[s](i)};Vr.prototype.State=Wr;function DU(e){const t={};e=e||{},t.src_Any=LS.source,t.src_Cc=CS.source,t.src_Z=NS.source,t.src_P=n2.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const n="[><｜]";return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e["---"]?"-(?!--)|":"-|"}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain="(?:"+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy="(?:"+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${t.src_ZPCc}))((?![$+<=>^\`|｜])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${t.src_ZPCc}))((?![$+<=>^\`|｜])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function Ch(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(r){e[r]=n[r]})}),e}function Ko(e){return Object.prototype.toString.call(e)}function PU(e){return Ko(e)==="[object String]"}function FU(e){return Ko(e)==="[object Object]"}function qU(e){return Ko(e)==="[object RegExp]"}function O9(e){return Ko(e)==="[object Function]"}function BU(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const GS={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function HU(e){return Object.keys(e||{}).reduce(function(t,n){return t||GS.hasOwnProperty(n)},!1)}const xU={"http:":{validate:function(e,t,n){const r=e.slice(t);return n.re.http||(n.re.http=new RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){const r=e.slice(t);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){const r=e.slice(t);return n.re.mailto||(n.re.mailto=new RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},UU="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",GU="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function WU(e){return function(t,n){const r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function M9(){return function(e,t){t.normalize(e)}}function Wi(e){const t=e.re=DU(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(UU),n.push(t.src_xn),t.src_tlds=n.join("|");function r(s){return s.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),"i"),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),"ig"),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),"i"),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),"ig"),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),"i"),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),"ig"),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function o(s,u){throw new Error(`(LinkifyIt) Invalid schema "${s}": ${u}`)}Object.keys(e.__schemas__).forEach(function(s){const u=e.__schemas__[s];if(u===null)return;const l={validate:null,link:null};if(e.__compiled__[s]=l,FU(u)){qU(u.validate)?l.validate=WU(u.validate):O9(u.validate)?l.validate=u.validate:o(s,u),O9(u.normalize)?l.normalize=u.normalize:u.normalize?o(s,u):l.normalize=M9();return}if(PU(u)){i.push(s);return}o(s,u)}),i.forEach(function(s){e.__compiled__[e.__schemas__[s]]&&(e.__compiled__[s].validate=e.__compiled__[e.__schemas__[s]].validate,e.__compiled__[s].normalize=e.__compiled__[e.__schemas__[s]].normalize)}),e.__compiled__[""]={validate:null,normalize:M9()};const a=Object.keys(e.__compiled__).filter(function(s){return s.length>0&&e.__compiled__[s]}).map(BU).join("|");e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|${t.src_ZPCc}))(${a})`,"i"),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|${t.src_ZPCc}))(${a})`,"ig"),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,"i"),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,"i")}function WS(e,t,n,r){const i=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function Ae(e,t){if(!(this instanceof Ae))return new Ae(e,t);t||HU(e)&&(t=e,e={}),this.__opts__=Ch({},GS,t),this.__schemas__=Ch({},xU,e),this.__compiled__={},this.__tlds__=GU,this.__tlds_replaced__=!1,this.re={},Wi(this)}Ae.prototype.add=function(t,n){return this.__schemas__[t]=n,Wi(this),this};Ae.prototype.set=function(t){return this.__opts__=Ch(this.__opts__,t),this};Ae.prototype.test=function(t){if(!t.length)return!1;let n,r;if(this.re.schema_test.test(t)){for(r=this.re.schema_search,r.lastIndex=0;(n=r.exec(t))!==null;)if(this.testSchemaAt(t,n[2],r.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&t.search(this.re.host_fuzzy_test)>=0&&t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&t.indexOf("@")>=0&&t.match(this.re.email_fuzzy)!==null)};Ae.prototype.pretest=function(t){return this.re.pretest.test(t)};Ae.prototype.testSchemaAt=function(t,n,r){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(t,r,this):0};Ae.prototype.match=function(t){const n=[],r=[],i=[],o=[];let a,s,u;function l(d,p){return d?p?d.index!==p.index?d.index<p.index?d:p:d.lastIndex>=p.lastIndex?d:p:d:p}if(!t.length)return null;if(this.re.schema_test.test(t))for(u=this.re.schema_search,u.lastIndex=0;(a=u.exec(t))!==null;)s=this.testSchemaAt(t,a[2],u.lastIndex),s&&r.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+s});if(this.__opts__.fuzzyLink&&this.__compiled__["http:"])for(u=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,u.lastIndex=0;(a=u.exec(t))!==null;)i.push({schema:"",index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"])for(u=this.re.email_fuzzy_global,u.lastIndex=0;(a=u.exec(t))!==null;)o.push({schema:"mailto:",index:a.index+a[1].length,lastIndex:a.index+a[0].length});const c=[0,0,0];let f=0;for(;;){const d=[r[c[0]],o[c[1]],i[c[2]]],p=l(l(d[0],d[1]),d[2]);if(!p)break;if(p===d[0]?c[0]++:p===d[1]?c[1]++:c[2]++,p.index<f)continue;const h=new WS(t,p.schema,p.index,p.lastIndex);this.__compiled__[h.schema].normalize(h,this),n.push(h),f=p.lastIndex}return n.length?n:null};Ae.prototype.matchAtStart=function(t){if(!t.length)return null;const n=this.re.schema_at_start.exec(t);if(!n)return null;const r=this.testSchemaAt(t,n[2],n[0].length);if(!r)return null;const i=new WS(t,n[2],n.index+n[1].length,n.index+n[0].length+r);return this.__compiled__[i.schema].normalize(i,this),i};Ae.prototype.tlds=function(t,n){return t=Array.isArray(t)?t:[t],n?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(r,i,o){return r!==o[i-1]}).reverse(),Wi(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,Wi(this),this)};Ae.prototype.normalize=function(t){t.schema||(t.url=`http://${t.url}`),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url=`mailto:${t.url}`)};Ae.prototype.onCompile=function(){};const un=2147483647,We=36,s2=1,vr=26,VU=38,XU=700,VS=72,XS=128,jS="-",jU=/^xn--/,KU=/[^\0-\x7F]/,YU=/[\x2E\u3002\uFF0E\uFF61]/g,zU={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},qp=We-s2,Ve=Math.floor,Bp=String.fromCharCode;function yt(e){throw new RangeError(zU[e])}function JU(e,t){const n=[];let r=e.length;for(;r--;)n[r]=t(e[r]);return n}function KS(e,t){const n=e.split("@");let r="";n.length>1&&(r=n[0]+"@",e=n[1]),e=e.replace(YU,".");const i=e.split("."),o=JU(i,t).join(".");return r+o}function YS(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}const QU=e=>String.fromCodePoint(...e),ZU=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:We},D9=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},zS=function(e,t,n){let r=0;for(e=n?Ve(e/XU):e>>1,e+=Ve(e/t);e>qp*vr>>1;r+=We)e=Ve(e/qp);return Ve(r+(qp+1)*e/(e+VU))},JS=function(e){const t=[],n=e.length;let r=0,i=XS,o=VS,a=e.lastIndexOf(jS);a<0&&(a=0);for(let s=0;s<a;++s)e.charCodeAt(s)>=128&&yt("not-basic"),t.push(e.charCodeAt(s));for(let s=a>0?a+1:0;s<n;){const u=r;for(let c=1,f=We;;f+=We){s>=n&&yt("invalid-input");const d=ZU(e.charCodeAt(s++));d>=We&&yt("invalid-input"),d>Ve((un-r)/c)&&yt("overflow"),r+=d*c;const p=f<=o?s2:f>=o+vr?vr:f-o;if(d<p)break;const h=We-p;c>Ve(un/h)&&yt("overflow"),c*=h}const l=t.length+1;o=zS(r-u,l,u==0),Ve(r/l)>un-i&&yt("overflow"),i+=Ve(r/l),r%=l,t.splice(r++,0,i)}return String.fromCodePoint(...t)},QS=function(e){const t=[];e=YS(e);const n=e.length;let r=XS,i=0,o=VS;for(const u of e)u<128&&t.push(Bp(u));const a=t.length;let s=a;for(a&&t.push(jS);s<n;){let u=un;for(const c of e)c>=r&&c<u&&(u=c);const l=s+1;u-r>Ve((un-i)/l)&&yt("overflow"),i+=(u-r)*l,r=u;for(const c of e)if(c<r&&++i>un&&yt("overflow"),c===r){let f=i;for(let d=We;;d+=We){const p=d<=o?s2:d>=o+vr?vr:d-o;if(f<p)break;const h=f-p,m=We-p;t.push(Bp(D9(p+h%m,0))),f=Ve(h/m)}t.push(Bp(D9(f,0))),o=zS(i,l,s===a),i=0,++s}++i,++r}return t.join("")},eG=function(e){return KS(e,function(t){return jU.test(t)?JS(t.slice(4).toLowerCase()):t})},tG=function(e){return KS(e,function(t){return KU.test(t)?"xn--"+QS(t):t})},ZS={version:"2.3.1",ucs2:{decode:YS,encode:QU},decode:JS,encode:QS,toASCII:tG,toUnicode:eG},nG={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},rG={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},iG={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},oG={default:nG,zero:rG,commonmark:iG},aG=/^(vbscript|javascript|file|data):/,sG=/^data:image\/(gif|png|jpeg|webp);/;function uG(e){const t=e.trim().toLowerCase();return aG.test(t)?sG.test(t):!0}const e$=["http:","https:","mailto:"];function lG(e){const t=t2(e,!0);if(t.hostname&&(!t.protocol||e$.indexOf(t.protocol)>=0))try{t.hostname=ZS.toASCII(t.hostname)}catch{}return Gr(e2(t))}function cG(e){const t=t2(e,!0);if(t.hostname&&(!t.protocol||e$.indexOf(t.protocol)>=0))try{t.hostname=ZS.toUnicode(t.hostname)}catch{}return pn(e2(t),pn.defaultChars+"%")}function Te(e,t){if(!(this instanceof Te))return new Te(e,t);t||r2(e)||(t=e||{},e="default"),this.inline=new Vr,this.block=new jo,this.core=new o2,this.renderer=new Hn,this.linkify=new Ae,this.validateLink=uG,this.normalizeLink=lG,this.normalizeLinkText=cG,this.utils=fx,this.helpers=Wo({},mx),this.options={},this.configure(e),t&&this.set(t)}Te.prototype.set=function(e){return Wo(this.options,e),this};Te.prototype.configure=function(e){const t=this;if(r2(e)){const n=e;if(e=oG[n],!e)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this};Te.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(i){return n.indexOf(i)<0});if(r.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};Te.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(i){return n.indexOf(i)<0});if(r.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};Te.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};Te.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const n=new this.core.State(e,this,t);return this.core.process(n),n.tokens};Te.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};Te.prototype.parseInline=function(e,t){const n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens};Te.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};const et="hir-persistent-fold",Yo="data-summary-own-click-region",fG="text-paragraph",dG="text-blockquote",pG="text-list",hG="text-ordered-list",mG="text-list-item",vG="prose-link",Vi="text-section",_G="text-heading",bG="text-section-body",gG="text-table-scroll",yG="text-table",EG="text-code",wG="-h-",P9=2,F9=!0;function t$(e,t,n){return(e==null?void 0:e[t])??n}const SG=["paragraph","list","blockquote","heading","table","newline","emphasis","backticks","html_inline","text","balance_pairs","fragments_join","text_join"],$G="prose_link",q9=new RegExp(PB.source,"y");function AG(e,t){if(e.src.charCodeAt(e.pos)!==91)return!1;q9.lastIndex=e.pos;const n=q9.exec(e.src);if(n===null)return!1;const[r,i,o]=n;if(i===void 0||o===void 0)throw new Error("prose markdown: MD_LINK_RE lost a capture group");if(!t){const a=e.push("link_open","a",1);a.attrs=[["href",o]];const s=e.push("text","",0);s.content=i,e.push("link_close","a",-1)}return e.pos+=r.length,!0}const TG="prose_escape",RG=new Set("!\"#$%&'()*+,-./:;<=>?@^_`|~"),IG={"<":"&lt;",">":"&gt;","&":"&amp;"};function LG(e,t){if(e.src.charCodeAt(e.pos)!==92)return!1;const n=e.src[e.pos+1];if(n===void 0||!RG.has(n))return!1;if(!t){const r=e.push("text_special","",0);r.content=IG[n]??n,r.markup=`\\${n}`,r.info="escape"}return e.pos+=2,!0}const zo=new Te("zero",{html:!0,breaks:!0,linkify:!1}).enable([...SG]);zo.inline.ruler.push($G,AG);zo.inline.ruler.after("newline",TG,LG);function CG(e,t){return`${e}${wG}${t}`}function kG(e,t,n={}){const r=zo.parse(e,{});return OG(r,t,n)}function NG(e,t){const n=zo.parseInline(e,{});return n$(n,t),n.map(er).join("")}function OG(e,t,n={}){n$(e,t);const r={options:n,headingCount:0};return Ti(e,0,e.length,!0,r)}function n$(e,t){let n=0;for(const r of e)if(r.type==="inline"&&r.children){for(const i of r.children)i.type==="text"&&(i.type="html_inline",i.content=i.content===""?"":t(i.content,n));n+=1}}function Le(e,t){const n=e[t];if(n===void 0)throw new Error(`prose markdown: token index ${t} out of range`);return n}function en(e,t,n){let r=0;for(let i=t;i<n;i++)if(r+=Le(e,i).nesting,r===0)return i;throw new Error(`prose markdown: unclosed ${Le(e,t).type} at token ${t}`)}function MG(e,t,n){return n-t===3&&Le(e,t).type==="paragraph_open"&&Le(e,t+1).type==="inline"&&Le(e,t+2).type==="paragraph_close"}function Ti(e,t,n,r,i){if(r&&MG(e,t,n))return er(Le(e,t+1));let o="";const a=[];let s=t;for(;s<n;){const u=Le(e,s);switch(u.type){case"paragraph_open":{const l=en(e,s,n),c=Le(e,s+1);if(l!==s+2||c.type!=="inline")throw new Error("prose markdown: paragraph without a single inline child");const f=er(c);o+=u.hidden?f:`<p class="${fG}">${f}</p>`,s=l+1;break}case"blockquote_open":{const l=en(e,s,n);o+=`<blockquote class="${dG}">`+Ti(e,s+1,l,!0,i)+"</blockquote>",s=l+1;break}case"bullet_list_open":case"ordered_list_open":{const l=en(e,s,n);o+=PG(u)+Ti(e,s+1,l,!1,i)+`</${u.tag}>`,s=l+1;break}case"list_item_open":{const l=en(e,s,n);o+=`<li class="${mG}">`+Ti(e,s+1,l,!1,i)+"</li>",s=l+1;break}case"heading_open":{const l=en(e,s,n),c=Le(e,s+1);if(l!==s+2||c.type!=="inline")throw new Error("prose markdown: heading without a single inline child");const f=u.markup.length;if(f<P9)throw new Error(`prose markdown: level-${f} heading '${c.content}'; prose headings start at level ${P9}`);for(;a.length>0&&a[a.length-1]>=f;)o+=B9,a.pop();i.headingCount+=1,o+=DG(f,er(c),i),a.push(f),s=l+1;break}case"table_open":{const l=en(e,s,n);o+=`<div class="${gG}"><table class="${yG}">`+qG(e,s+1,l)+"</table></div>",s=l+1;break}default:throw new Error(`prose markdown: unsupported block token '${u.type}'`)}}return o+=B9.repeat(a.length),o}const B9="</div></details>";function DG(e,t,n){const{headingIdPrefix:r,sectionFoldState:i,sectionFoldsDefaultOpen:o}=n.options,a=r===void 0?null:CG(r,n.headingCount),s=a===null?F9:t$(i,a,o??F9);return`<details${a===null?` class="${Vi}"`:` id="${V(a)}" class="${Vi} ${et}"`}${s?" open":""}><summary><h${e} class="${_G}">${t}</h${e}></summary><div class="${bG}">`}function PG(e){if(e.type==="bullet_list_open")return`<ul class="${pG}">`;const t=e.attrGet("start"),n=t===null?"":` start="${Number(t)}"`;return`<ol class="${hG}"${n}>`}const FG=new Set(["thead_open","thead_close","tbody_open","tbody_close","tr_open","tr_close"]),H9="style";function qG(e,t,n){let r="",i=t;for(;i<n;){const o=Le(e,i);if(FG.has(o.type)){r+=o.nesting===1?`<${o.tag}>`:`</${o.tag}>`,i+=1;continue}if(o.type!=="th_open"&&o.type!=="td_open")throw new Error(`prose markdown: unsupported table token '${o.type}'`);const a=Le(e,i+1),s=Le(e,i+2);if(a.type!=="inline"||s.type!==`${o.tag}_close`)throw new Error("prose markdown: table cell without a single inline child");let u="";for(const[l,c]of o.attrs??[]){if(l!==H9)throw new Error(`prose markdown: unexpected table cell attribute '${l}'`);u=` ${H9}="${V(c)}"`}r+=`<${o.tag}${u}>${er(a)}</${o.tag}>`,i+=3}return r}function er(e){let t="";for(const n of e.children??[])switch(n.type){case"html_inline":t+=n.content;break;case"softbreak":case"hardbreak":t+="<br>";break;case"strong_open":t+="<strong>";break;case"strong_close":t+="</strong>";break;case"em_open":case"em_close":t+=n.markup;break;case"link_open":{const r=n.attrGet("href")??"";t+=`<a class="${vG}" href="${V(r)}" target="_blank" rel="noopener">`;break}case"link_close":t+="</a>";break;case"code_inline":t+=`<code class="${EG}">${H(n.content)}</code>`;break;default:throw new Error(`prose markdown: unsupported inline token '${n.type}'`)}return t}function r$(e,t){if("input_type"in e&&e.input_type==="MultiStringFromSet"){if(!Array.isArray(t)||!t.every(r=>typeof r=="string"))throw new Error(`Invalid MultiStringFromSet value for ${e.id}: expected a string array`);if(!Array.isArray(e.allowed_values))throw new Error(`Invalid MultiStringFromSet declaration for ${e.id}: missing allowed_values`);const n=Jw(e,t,"value");if(n.length>0)throw new Error(`Invalid MultiStringFromSet value for ${e.id}: ${n.join("; ")}`);return[...t]}if(typeof t=="object")throw new Error(`Invalid scalar value for ${e.id}: expected string, number, or boolean`);if(bh(e)){if(Do(e.allowed_values)==="string"){if(typeof t!="string")throw new Error(`Invalid string value for ${e.id}: ${t}`);return t}const n=Number(t);if(typeof t=="boolean"||!Number.isFinite(n))throw new Error(`Invalid numeric value for ${e.id}: ${t}`);return n}if(typeof e.default_value=="boolean"){if(typeof t=="boolean")return t;if(t==="true")return!0;if(t==="false")return!1;throw new Error(`Invalid boolean value for ${e.id}: ${t}`)}if(typeof e.default_value=="number"){if(typeof t=="boolean"||typeof t=="string"&&t.trim()==="")throw new Error(`Invalid numeric value for ${e.id}: ${t}`);const n=Number(t);if(!Number.isFinite(n))throw new Error(`Invalid numeric value for ${e.id}: ${t}`);return n}if(typeof e.default_value=="string"){if(typeof t!="string")throw new Error(`Invalid string value for ${e.id}: ${t}`);return t}throw new Error(`Option ${e.id} has no supported default value type`)}const i$=!0,BG=!0;function o$(e,t){return e!=="typical"||t}function Kie(e,t){const n=e.map(a=>({name:Ge(a.id),values:a.allowed_values.filter(s=>typeof s!="boolean")}));if(n.length===0)return{names:[],combinations:[{}]};const r=n.map(a=>a.name),i=n.map(a=>a.values);let o=[{}];for(let a=0;a<r.length;a++){const s=r[a],u=i[a],l=[];for(const c of o)for(const f of u)l.push({...c,[s]:f});o=l}return t!==void 0&&(o=o.filter(a=>t(a))),{names:r,combinations:o}}function HG(e,t,n){const r=new Set(e.get_cparam_bare_names()),i=n!=="plainnum",o={};for(const[a,s]of Object.entries(t))i&&r.has(a)||(o[a]=s);return o}const xG="inline-note-ref",UG="inline-note-popover-trigger",GG="data-popover-inline-body";function WG(e){return encodeURIComponent(e)}function Yie(e){return decodeURIComponent(e)}function VG(e){return Rh.lastIndex=0,e.replace(Rh,(t,n)=>a$(n))}function a$(e){const t=V(WG(e));return`<span class="${xG}"><button type="button" class="${UG}" ${GG}="${t}" aria-label="Show note" aria-expanded="false"></button></span>`}const XG=["list","graph"],jG="list",s$="formula-view-switch",KG="data-formula-view",YG="formula-view-option",zG="formula-view-option-active",JG="formula-list-view",QG="formula-graph-view",ZG="formula-view-controls",eW=["ids","math"],kh="ids",tW="data-formula-svar-view",nW="formula-svar-view-control",rW="formula-svar-view-label",x9="Variables",iW={ids:"IDs",math:"Math"};function u$(e,t,n,r){return e.map(i=>{const o=i===t?` ${zG}`:"";return`<button type="button" class="${YG}${o}" ${n}="${i}" aria-pressed="${i===t}">${r(i)}</button>`}).join("")}function oW(e){return`<div class="${s$}" role="group" aria-label="Formulas view">`+u$(XG,e,KG,t=>t)+"</div>"}function aW(e){return`<span class="${nW}"><span class="${rW}">${x9}</span><div class="${s$}" role="group" aria-label="${x9}">`+u$(eW,e,tW,t=>iW[t])+"</div></span>"}function sW(e,t,n){const r=i=>i===t?"":" hidden";return`<div class="${ZG}">`+oW(t)+aW(n)+`</div><div class="${JG}"${r("list")}>${e}</div><div class="${QG}"${r("graph")}></div>`}const uW="advertised-aliases",lW="aliases: ";function l$(e){return e.length===0?"":` <span class="${uW}">(${lW}${e.join(", ")})</span>`}const cW="≔",c$="framing-slot",f$="data-framing-anchor";function Xr(e,t){return e.jprobInstance.framing_static_anchor_ids().has(t)?`<div class="${c$}" ${f$}="${V(t)}"></div>`:""}const d$="bare-id-label";function p$(e,t){return e.showBareIds??!1?h$(t):""}function h$(e){return`<span class="${d$}">${H(e)}</span>`}function zie(e,t){return`<span class="${d$}" id="${V(t)}">${H(e)}</span>`}const fW="❝",dW="srcquote-widget",pW="srcquote-glyph",Jie="srcquote-popover",hW="srcquote-attribution",mW="srcquotes-inline",vW={atStart:"",atEnd:""},_W=", ";function bW(e,t){if(e.bibref===void 0){if(e.attribution===void 0)throw new Error(`${e.id} has neither attribution nor bibref`);return H(e.attribution)}const n=`[${e.bibref}]`;return Qo(e.locator===void 0?n:`${n}${_W}${e.locator}`,t)}function m$(e,t){return ke(e.defn,t)+`<span class="${hW}">— ${bW(e,t)}</span>`}function gW(e){const t=V(_S({kind:"sourcequote",sourcequoteIds:e}));return`<span class="${dW}"><button class="${pW}" type="button" aria-expanded="false" ${vS}="${t}" aria-label="Source quotes">${fW}</button></span>`}function Qie(e,t){return e.map(n=>m$(n,t)).join("")}function yW(e,t){const n=e.map(r=>m$(r,t));return`<div class="${mW}">${n.join("")}</div>`}function mn(e,t){var n;if(!e||e.length===0)return vW;for(const r of e)(n=t.renderedSrcquoteIds)==null||n.add(r);if(t.srcquotesInlined??!1){const r=t.jprobInstance.resolve_srcquotes(e);return{atStart:"",atEnd:yW(r,t)}}return{atStart:gW(e),atEnd:""}}const u2="isym-card",v$="examples",l2="ex-btn",vn="visible",Jo="active",EW=!0;function _r(e,t,n,r){var i;return((i=e==null?void 0:e[t])==null?void 0:i[n])??r}function ke(e,t,n){const r={sectionFoldState:t.proseSectionFoldState,sectionFoldsDefaultOpen:t.proseSectionFoldsDefaultOpen};return n!==void 0&&(r.headingIdPrefix=n),kG(Zm(e,t.jprobInstance),c2(t).resolveProseLeaf,r)}function Qo(e,t){return NG(Zm(e,t.jprobInstance),c2(t).resolveProseLeaf)}function xn(e,t){return _$([{displayText:e}],t)}function _$(e,t){const n=e.map(r=>"trustedHtml"in r?r.trustedHtml:fS(Zm(r.displayText,t.jprobInstance))).join("");return c2(t).resolveDisplay(n)}const wW="compound-expr";function c2(e){const t=new Map([...EH(e.jprobInstance)].map(([l,c])=>[l,fS(c)])),n=e.popoverAllRefs?{popoverAllRefs:!0}:void 0,r=(l,c)=>oH(l,e.refLookup,n,e.unresolvedRefs,c),i=l=>{const c=wH(l,t),f=VG(r(c));return nH(c)?f:`<span class="${wW}">${f}</span>`},o=(l,c)=>U9(l,Go,f=>i(f[0]),f=>r(f,c));let a,s=new Set;return{resolveDisplay:i,resolveProseLeaf:(l,c)=>(c!==a&&(a=c,s=new Set),U9(l,Rh,f=>{const d=f[1];if(d===void 0)throw new Error("INLINE_HIDDEN_NOTE_RE matched without its body group");return a$(o(d,new Set))},f=>o(f,s)))}}function U9(e,t,n,r){let i="",o=0;for(const a of e.matchAll(t)){const s=a.index;if(s===void 0)throw new Error("mapMatchesAndGaps: match without an index");s>o&&(i+=r(e.slice(o,s))),i+=n(a),o=s+a[0].length}return o<e.length&&(i+=r(e.slice(o))),i}const SW="bib-references",$W="bib-reference";function AW(e){const t=e.jprobInstance,n=t.cited_bib_ids(e.srcquotesInlined??!1);if(n.length===0)return"";const r=n.map(i=>{const o=VB(t.bib_reference_entry_text(i),t.resolve_bib(i));return`<li id="${$S(i)}" class="${$W}">${Qo(o,e)}</li>`});return`<ul class="${SW}">${r.join("")}</ul>`}function TW(e){return e.startsWith("isym:")?e.slice(5):e}function RW(e,t){return e.get_isym(t).kind}function IW(e,t){const n=RB[RW(e.jprobInstance,t)],r=e.refLookup.get(`isym:${t}`);if(r===void 0)throw new Error(`Isym card ${JSON.stringify(t)} has no ref lookup entry to name it by.`);const i=e.jprobInstance.get_isym(t).advertised_aliases??[];return`${JB(r)} : ${n}${l$(i)}`}function LW(e,t){return xn(e,t)}function CW(e){const t=[];for(const n of e.jprobInstance.definedSym){if(n.always_inline)continue;const r=e.jprobInstance.get_display_definedSym_or_none(n.id);if(!r)continue;const o=`defsym-${n.id.slice(11)}`,a=LW(e.jprobInstance.get_display_definedSym_signature(n.id),e),s=xn(r,e),l=[`<h3>${`${a} ${cW} ${s}`}</h3>`],c=mn(n.srcquotes,e);n.defn?l.push(`<div class="definition">${c.atStart}${ke(n.defn,e,o)}${c.atEnd}</div>`):(c.atStart||c.atEnd)&&l.push(`<div class="definition">${c.atStart}${c.atEnd}</div>`),l.push(Xr(e,n.id)),t.push(`<div class="defsym-card" id="${o}">${l.join("")}</div>`)}return t.join("")}function kW(e){const t=jm(e.jprobInstance);if(!t.length)return"";const n=[];for(const r of t){const i=mn(e.jprobInstance.get_textdefn(r.id).srcquotes,e);n.push(`<dt id="${r.anchorId}">${r.displayTerm}${l$(r.advertisedAliases)}</dt><dd>${i.atStart}${ke(r.defn,e,r.anchorId)}${i.atEnd}${Xr(e,`textdefn:${r.bareName}`)}</dd>`)}return`<dl class="definitions">${n.join("")}</dl>`}function Nh(e,t,n){return(t[n]??[]).filter(r=>o$(r.classification,e.showTypical))}function Zie(e,t){return e.jprobInstance.isym_entries().some(n=>!e.jprobInstance.can_consolidate_isym_svar(n.id)&&qn.some(r=>Nh(e,n,r).some(i=>Bm(i.id)===t)))}const NW="card-group-fold",OW="svar-group-fold",MW="isym-group-fold",DW="formula-group-fold",PW="formula-group-count",FW="card-group-header",qW=!1,BW=["svar","isym","formula"],b$={svar:"svargroup",isym:"isymgroup",formula:"formgroup"},HW={svar:OW,isym:MW,formula:DW};function g$(e,t){const n=t.indexOf(":");if(n===-1)throw new Error(`card group id "${t}" has no namespace`);return`${b$[e]}-${t.slice(n+1)}`}const xW="card-group-bulk-controls",G9="data-card-group-bulk",W9={open:"open",closed:"closed"};function UW(e,t){switch(t){case"svar":return e.svar_card_runs();case"isym":return e.isym_card_runs();case"formula":return Qm(Jm(e),e.svar_groups(),e.form_groups())}}function GW(e,t){return UW(e,t).flatMap(n=>n.group===null?[]:[g$(t,n.group.id)])}function WW(e){return Qm(Jm(e),e.svar_groups(),e.form_groups()).flatMap(t=>t.group===null?[]:[t.group])}function eoe(e){return BW.find(t=>e.startsWith(`${b$[t]}-`))??null}function VW(){return`<span class="${xW}"><button type="button" ${G9}="${W9.open}">expand</button><button type="button" ${G9}="${W9.closed}">collapse</button></span>`}function y$(e,t,n,r,i=""){var s;const o=g$(e,t.id),a=((s=r.foldOpenById)==null?void 0:s[o])??qW;return`<details id="${V(o)}" class="${NW} ${HW[e]} ${et}"${a?" open":""}><summary><span class="${FW}">${Qo(t.defn,r)}</span>`+i+"</summary>"+n+"</details>"}function XW(e){const t=e.jprobInstance.isym_card_entries();if(!t.length)return"";const n=[];for(const r of t){const i=TW(r.id),o=`${Ih}${i}`,a=[];a.push(`<h3>${IW(e,i)}</h3>`);const s=mn(r.srcquotes,e);a.push(`<div class="definition">${s.atStart}${ke(r.defn,e,o)}${s.atEnd}</div>`);const u=Nh(e,r,"pos"),l=Nh(e,r,"neg"),c=e.exampleFoldsDefaultOpen??EW,f=_r(e.exampleFoldState,i,"pos",c),d=_r(e.exampleFoldState,i,"neg",c);if(u.length>0||l.length>0){const m=[];u.length>0&&m.push(V9(i,"pos",f,"+")),l.length>0&&m.push(V9(i,"neg",d,"&minus;")),a.push(`<div class="example-controls">${m.join("")}</div>`)}const p={pos:u,neg:l},h={pos:f,neg:d};for(const m of qn){if(p[m].length===0)continue;const v=p[m].map(_=>{const b=Bm(_.id),y=e.showExampleClassification?`<span class="classification">${_.classification.charAt(0).toUpperCase()+_.classification.slice(1)}:</span> `:"",g=mn(_.srcquotes,e),E=`${wS}${b}`;return`<li id="${E}">`+h$(b)+`${y}${g.atStart}${ke(_.defn,e,E)}${g.atEnd}</li>`});a.push(`<div class="${v$} ${m}${h[m]?` ${vn}`:""}"><p>${Qw[m]} examples:</p><ul>${v.join("")}</ul></div>`)}a.push(Xr(e,`isym:${i}`)),n.push(`<div class="${u2}" id="${o}">${a.join("")}</div>`)}return e.jprobInstance.isym_card_runs().map(r=>{const i=r.cardIndices.map(o=>n[o]).join("");return r.group===null?i:y$("isym",r.group,i,e)}).join("")}function V9(e,t,n,r){return`<button class="${l2} ${t}${n?` ${Jo}`:""}" data-isym="${e}" data-type="${t}" title="${Qw[t]} examples">${r}</button>`}function Hp(e,{classification:t}){const n=[];for(const r of e.jprobInstance.get_axioms_in_display_section(t)){const i=e.jprobInstance.get_display_ax(r.id);if(!i)continue;const o=Fi(r.id),a=`${ES}${o}`,s=r.defn?`<div class="ax-defn">${ke(r.defn,e,a)}</div>`:"",u=Xr(e,r.id),l=mn(r.srcquotes,e);n.push(`<div class="ax-card" id="${a}">`+p$(e,o)+`<div class="ax-expr">${l.atStart}${xn(i,e)}</div>${s}${l.atEnd}${u}</div>`)}return n.length===0?"":`<div class="axioms">${n.join("")}</div>`}function jW(e){const t=Jm(e.jprobInstance),n=mH(e.jprobInstance,t,e.formulaSvarView??kh),r=t.formulas.map(({formId:i})=>{const o=n.get(i),a=Po(i);return`<div class="formula" id="form-${a}">`+p$(e,a)+_$(o,e)+Xr(e,i)+"</div>"});return Qm(t,e.jprobInstance.svar_groups(),e.jprobInstance.form_groups()).map(i=>{const o=i.cardIndices.map(u=>r[u]).join("");if(i.group===null)return o;const a=i.cardIndices.length,s=`<span class="${PW}">${a} ${a===1?"formula":"formulas"}</span>`;return y$("formula",i.group,o,e,s)}).join("")}function KW(e){const t=e.conclusion_expr_or_none();return t===null?null:e.get_display_expr(t)??t}function YW(e,t){const n=KW(e);return n===null?null:xn(n,t)}const zW="plot-target-controls",JW="plot-target-kind-radio",QW="plot-formula-select",ZW="plot-raw-response-select",E$={featured:"featured",formula:"formulas",raw_response:"raw responses"},toe=new Set;function Zo(e){return e.kind==="formula"?Zw(e.valueRange):xr}function w$(e){return e.kind==="formula"?e.id:`svar:${e.bareName}`}function eV(e){return e.startsWith("form:")?e.slice(5):e}function f2(e,t,n){return e.form.filter(r=>qq(r,t)).map(r=>{const i=(n==null?void 0:n[r.id])??null;return{kind:"formula",id:r.id,bareId:eV(r.id),valueRange:(i==null?void 0:i.valueRange)??Br(r),isConclusion:r.id===e.conclusion_form_or_none(),formEntry:i}})}function S$(e){return e.svar_entries().map(({bareName:t,decl:n})=>({kind:"raw_response",bareName:t,valueRange:Br(n),isConclusion:!1}))}function tV(e,t,n,r,i){const o=f2(e,n,i);if(o.length===0)return null;if(t.ui.plotTargetKind==="featured")return $$(o,r)[0]??o[0];const a=e.conclusion_form_or_none();return o.find(s=>s.id===t.ui.plotFormulaId)??o.find(s=>s.id===a)??o[0]}function nV(e,t,n,r,i){const o=S$(e);return t.ui.plotTargetKind==="raw_response"&&o.length>0?o.find(a=>a.bareName===t.ui.plotRawResponseName)??o[0]:tV(e,t,n,r,i)??o[0]??null}function $$(e,t){const n=e.filter(r=>r.isConclusion||t.has(r.id));return[...n.filter(r=>r.isConclusion),...n.filter(r=>!r.isConclusion)]}function rV(e,t,n,r,i){const o=$$(f2(e,n,i),r),a=o.length>=2;return a&&t.ui.plotTargetKind==="featured"?{kind:"featured",targets:o}:{kind:"single",target:nV(e,t,n,r,i),featuredOffered:a}}function noe(e){return{kind:"single",target:e,featuredOffered:!1}}function xp(e,t,n){return`<label><input type="radio" name="plot-target-kind" class="${JW}" value="${e}"${t?" checked":""}${n?" disabled":""}> ${H(E$[e])}</label>`}function iV(e,t,n,r,i){var p;const o=f2(e,n,i),a=S$(e);if(o.length===0&&a.length===0)return"";const s=r.kind==="single"?r.target:null,u=r.kind==="featured"||r.featuredOffered,l=r.kind==="featured"?"featured":(s==null?void 0:s.kind)??"formula",c=(s==null?void 0:s.kind)==="formula"?s.id:t.ui.plotFormulaId||e.conclusion_form_or_none(),f=(s==null?void 0:s.kind)==="raw_response"?s.bareName:t.ui.plotRawResponseName||(((p=a[0])==null?void 0:p.bareName)??"");let d=`<div class="${zW}">`;if(e.form.length>0&&(d+='<div class="plot-target-kind">',u&&(d+=xp("featured",l==="featured",!1)),d+=xp("formula",l==="formula",o.length===0),d+=xp("raw_response",l==="raw_response",a.length===0),d+="</div>"),l==="formula")if(o.length>1){d+=`<select class="${QW}" aria-label="Plot formula">`;for(const h of o)d+=`<option value="${V(h.id)}"${h.id===c?" selected":""}>${H(h.bareId)}</option>`;d+="</select>"}else o.length===1&&(d+=`<span class="plot-target-single">${H(o[0].bareId)}</span>`);else if(l==="raw_response")if(a.length>1){d+=`<select class="${ZW}" aria-label="Plot raw response">`;for(const h of a)d+=`<option value="${V(h.bareName)}"${h.bareName===f?" selected":""}>${H(h.bareName)}</option>`;d+="</select>"}else a.length===1&&(d+=`<span class="plot-target-single">${H(a[0].bareName)}</span>`);return d+="</div>",d}function ea(e,t,n){if(e.kind==="formula"&&e.isConclusion){const a=YW(t,n);if(a!==null)return a}let r,i;if(e.kind==="raw_response")r=`svar:${e.bareName}`,i=e.bareName;else{const a=t.form.find(s=>s.id===e.id);if(!a)throw new Error(`Plot formula ${e.id} is not in the template`);r=Bq(e.id,a.sexpr),i=e.bareId}const o=Hq(r);return xn(t.get_display_expr(o)??i,n)}function Oh(e){return e!=="plainnum"}class oV extends NB{constructor(n,r,i){super(n);G(this,"cparam_overrides");G(this,"aopt_overrides");G(this,"query_mode");const o=new Set(this.get_option_bare_names()),a=this.get_tchoice_bare_names(),s=new Map,u=new Map;for(const[l,c]of Object.entries(r)){if(a.has(l))throw new Error(`Cannot override tchoice entity "${l}" for ${this.aid}: it is left free for the responder to choose.`);if(!o.has(l))throw new Error(`Unknown option key "${l}" for ${this.aid}. Valid keys: ${[...o].sort().join(", ")}`);const f=this.find_cparam(l);if(f){if(Oh(i))throw new Error(`Cannot fix cparam "${l}" for ${this.aid} in ${i} mode: cparams are free in plaincode/richcode (the responder covers all combinations).`);s.set(f.id,c)}else{const d=this.get_aopt(l),p=Jw(d,c,"bound value");if(p.length>0)throw new Error(`Illegal value for aopt "${l}" of ${this.aid}: ${p.join("; ")}`);u.set(d.id,c)}}this.cparam_overrides=s,this.aopt_overrides=u,this.query_mode=i}is_code_mode(){return Oh(this.query_mode)}option_value(n){const r=this.find_cparam(n);if(r)return this.cparam_overrides.get(r.id)??r.default_value;const i=this.get_aopt(n);return this.aopt_overrides.get(i.id)??i.default_value}option_value_or(n,r){return this.get_option_bare_names().includes(n)?this.option_value(n):r}enabled_flabels(){const n=Pq(this.get_option_bare_names());return n===null?[]:Fq(this.option_value(n),n)}cited_bib_ids(n){const r=this.enabled_flabels(),i=new Set(this.placed_framing_note_ids(r));for(const[s,u]of Object.entries(this.get_fgroups()))if(!u.standard_rendering)for(const l of this.nonstandard_notes(s,r))i.add(l.id);const o=!!this.option_value_or("show_typical_examples",i$),a=s=>{if(s.startsWith(Eh))return i.has(s);if(s.startsWith(Di))return o$(this.get_example(s).classification,o);if(s.startsWith(Cq)){const[u]=this.resolve_srcquotes([s]);return n&&u.referenced_by.some(a)}return!0};return this.bib_entries().filter(s=>s.cited_by.some(a)).map(s=>s.id)}}function aV(e,t,n){return new oV(e._get_data(),t,n)}const Ke="0",Xe="1",A$=["plaincode","plainnum"];function jr(e,t){return t==="plainnum"?e.adhocPlainnumEntries:e.adhocPlaincodeEntries}function T$(e,t,n){return t==="plainnum"?e.plainnum[n.resultIndex]:e.plaincode[n.resultIndex]}function sV(e){return e!==void 0&&e.trim()!==""?e:void 0}function roe(e){if(e===void 0)return[];const t=[];for(const n of Object.keys(e).sort()){const r=sV(e[n]);r!==void 0&&t.push([n,r])}return t}function uV(e){const t=Object.keys(e.reasoning_response).some(a=>e.reasoning_response[a]!==""),n=e.misc_response!=="",r=e.extra_response!==void 0&&Object.keys(e.extra_response).length>0,i=e.trial_choices!==void 0&&Object.keys(e.trial_choices).length>0;if(!t&&!n&&!r&&!i)return[];const o={};return t&&(o.reasoning=e.reasoning_response),n&&(o.misc=e.misc_response),r&&(o.extra=e.extra_response),i&&(o.trial_choices=e.trial_choices),[o]}function lV(e){return!!e.verified_code_input&&e.cparam_combos.length>0}function R$(e){if(e.count!==1)throw new Error(`Plaincode record "${e.label}" has count ${e.count}; a yours or adhoc plaincode record is always single-trial`);return{...e,cparam_combos:e.cparam_combos.map(t=>({...t,trials:t.trials.map(n=>({trial_index:0,...n}))})),model:"user",version:"",effort:null,jtask_group_id:"",prompt_file_basename:"yours-plaincode",trial_metadata:uV(e)}}function cV(e,t){const n=e.find(r=>r.mode==="richcode"&&r.name===t);return n?n.note:null}function ioe(e){const t=[],n=[];for(let r=0;r<e.length;r++){const i=e[r];for(let o=0;o<i.plainnum.length;o++)t.push({presetIndex:r,resultIndex:o});for(let o=0;o<i.plaincode.length;o++)n.push({presetIndex:r,resultIndex:o})}return{plainnum:t,plaincode:n}}function ooe(e,t,n){const r=e.name_or_pseudoname,o=e.plainnum.length>0&&e.plaincode.length>0?` [${t}]`:"",a=n.prompt_file_basename?` (${n.prompt_file_basename})`:"";return`${r}${o} ${n.label}${a}`}function aoe(e){return e.filter(t=>t.prompt_file_basename.startsWith("richcode"))}const fV=/^[0-9a-f]{5}$/;function dV(e){return!fV.test(e)}const Up="rdev:";function pV(e){if(!e.startsWith(Up))throw new Error(`rdev jtask group id ${JSON.stringify(e)} lacks the ${JSON.stringify(Up)} prefix; re-run \`just qa-precompute\` to recompile the rdev results file`);return e.slice(Up.length)}function hV(e){return new Set(e.filter(t=>t.rdev_prompt_suffix!==void 0).map(t=>t.jtask_group_id))}const X9=0,mV=1,vV=2,_V=3;function bV(e,t,n){const r=new Map;for(const o of t)o.mode==="richcode"&&o.declared_display_position!==null&&r.set(o.name,o.declared_display_position);const i=o=>n.has(o)?_V:r.has(o)?X9:dV(o)?mV:vV;return[...new Set(e)].sort((o,a)=>{const s=i(o),u=i(a);return s!==u?s-u:s===X9?r.get(o)-r.get(a):o<a?-1:o>a?1:0})}function I$(e,t){const n=`trial${t===1?"":"s"}`;switch(e){case"methodical":return`${t} agent ${n}`;case"adhoc":return`${t} adhoc ${n}`;case"yours":return`${t} ${n} of yours`}}function gV(e,t){const n=jr(t,e.queryMode)[e.entryIdx];if(!n)return null;const r=t.adhocPresets[n.presetIndex];if(e.queryMode==="plainnum")return(r==null?void 0:r.plainnum[n.resultIndex])??null;const i=r==null?void 0:r.plaincode[n.resultIndex];return i?R$(i):null}function soe(e,t){var r;if(e.queryMode!=="plaincode")return null;const n=t.adhocPlaincodeEntries[e.entryIdx];return n?((r=t.adhocPresets[n.presetIndex])==null?void 0:r.plaincode[n.resultIndex])??null:null}function uoe(e,t){const n=jr(t,e.queryMode)[e.entryIdx];return n?t.adhocPresets[n.presetIndex]??null:null}function L$(e){if(!e)return{point:!0,bounds:!0,sample:!0};Ce(e)&&O$(e);const t=Ce(e)?e.cparam_combos.flatMap(r=>r.trials):e.trials,n=r=>t.some(i=>Object.keys(i[r]).length>0);return{point:n("point"),bounds:(!Ce(e)||N$(e))&&n("bounds"),sample:n("sample")}}const yV=["sample","bounds","point"];function C$(e,t){return e[t]?t:yV.find(n=>e[n])??t}function k$(e,t,n){return e==="yours"?n:C$(L$(t),n)}function N$(e){return e.count===1}function O$(e){for(const[n,r]of e.cparam_combos.entries()){if(r.trials.length===0||r.trials.length>e.count)throw new Error(`Code result cparam combo ${n} carries ${r.trials.length} trials; expected between 1 and the record trial count ${e.count}`);const i=new Set;for(const o of r.trials){const a=o.trial_index;if(a===void 0)throw new Error(`Code result cparam combo ${n} carries a trial with no trial_index; regenerate the result data (trial-dict schema >= 9)`);if(!Number.isInteger(a)||a<0||a>=e.count)throw new Error(`Code result cparam combo ${n} carries trial_index ${a}; expected an integer in [0, ${e.count})`);if(i.has(a))throw new Error(`Code result cparam combo ${n} carries record trial ${a} more than once`);i.add(a)}}const t=e.trial_metadata;if(t!==void 0&&t.length>0&&t.length!==e.count)throw new Error(`Code result carries ${t.length} trial_metadata entries; expected one per trial (record trial count ${e.count})`)}function Un(e){if(e.trial_index===void 0)throw new Error("Code-mode combo trial carries no trial_index");return e.trial_index}function Gn(e){return Ce(e)?e.count:e.trials.length}function M$(e,t){return e.find(n=>Un(n)===t)}function D$(e,t){var n;return Ce(e)?(n=e.trial_metadata)==null?void 0:n[t]:e.trials[t]}function EV(e,t){return D$(e,t)}function ta(e,t){var n;return Ce(e)?(n=e.trial_metadata)==null?void 0:n[t]:void 0}function wV(e,t){var n;return(n=D$(e,t))==null?void 0:n.trial_choices}function Ce(e){return"cparam_combos"in e}function d2(e,t,n){if(t==="point"){const i=e.point[n];return i===void 0?"":String(i)}if(t==="bounds"){const i=e.bounds[n];return i?`${i[0]} ${i[1]}`:""}const r=e.sample[n];return r?typeof r=="string"?r:r.map(([i,o])=>`(${i} ${o})`).join(" "):""}function loe(e,t){return["point","bounds","sample"].filter(n=>t.length>0&&t.every(r=>d2(e,n,r)!==""))}function coe(e,t,n){return n.map(r=>d2(e,t,r)).join(`
`)}function SV(e,t,n){return Ce(e)?[]:e.trials.map(r=>n.map(i=>d2(r,t,i)))}const $V="Always included";function foe(e,t,n){if(n==="Bool"&&t.type==="checkbox")return t.checked===!0;const r=r$(e,t.value);if(typeof r=="object")throw new Error(`Invalid scalar control parser use for ${e.id}`);return r}function doe(e,t){const n=t.map(r=>{if(r.type!=="checkbox")throw new Error(`Invalid MultiStringFromSet control for ${e.id}: expected checkbox`);return r.checked===!0?r.value:void 0}).filter(r=>r!==void 0);return r$(e,n)}function P$(e,t,n){return e!==void 0&&n.includes(e)?e:t!==void 0&&n.includes(t)?t:n[0]}const AV="declared-value-space",TV="One of:";function poe(e){const t=e.map(n=>H(String(n))).join(", ");return`<div class="${AV}">${TV} ${t}</div>`}function hoe(e){return`<span class="cparam-or-aopt-name">${H(e)}</span>`}function moe(e,t,n,r,i,o=new Set){const a=`${r.dataAttribute}="${V(e)}"`;if(i==="StringFromSet"){if(!Array.isArray(t.allowed_values))throw new Error(`StringFromSet option ${t.id} is missing allowed_values`);const f=t.allowed_values.map(d=>{const p=String(d),h=p===String(n)?" selected":"";return`<option value="${V(p)}"${h}>${H(p)}</option>`}).join("");return`<select class="${r.selectClass}" ${a}>${f}</select>`}if(i==="Number")return`<input class="${r.inputClass}" type="number" ${a} value="${V(String(n))}">`;if(i==="Bool"){const f=n?" checked":"";return`<input class="${r.checkboxClass??r.inputClass}" type="checkbox" ${a}${f}>`}if(i==="FreeString")return`<input class="${[r.inputClass,r.textInputClass].filter(Boolean).join(" ")}" type="text" ${a} value="${V(String(n))}">`;if(!Array.isArray(t.allowed_values))throw new Error(`MultiStringFromSet option ${t.id} is missing allowed_values`);if(!Array.isArray(n))throw new Error(`MultiStringFromSet option ${t.id} has a non-array current value`);const s=new Set(n),u=new Set(t.required_values??[]),l=r.checkboxClass??r.inputClass,c=t.allowed_values.map(f=>{if(typeof f!="string")throw new Error(`MultiStringFromSet option ${t.id} has a non-string allowed value`);const d=s.has(f)?" checked":"";if(o.has(f))return`<input class="${l}" type="checkbox" ${a} value="${V(f)}"${d} hidden>`;const p=u.has(f)?` disabled title="${V($V)}"`:"";return`<label><input class="${l}" type="checkbox" ${a} value="${V(f)}"${d}${p}> <span>${H(f)}</span></label>`}).join("");return`<span class="${r.checkboxGroupClass??""}">${c}</span>`}const F$=4,RV=3,IV=1e-4,LV=1e4,q$=3,j9=17,CV=12;function voe(e){return Number.isFinite(e)?String(Number(e.toPrecision(CV))):String(e)}function K9(e){const[t,n]=e.split("e"),r=t.includes(".")?t.replace(/0+$/,"").replace(/\.$/,""):t;return n===void 0?r:`${r}e${n}`}function na(e){switch(e){case"deterministic":return F$;case"monte-carlo":return RV;default:{const t=e;throw new Error(`Unknown calculation precision: ${String(t)}`)}}}function _n(e,t){if(Number.isNaN(e))return String(e);if(!Number.isFinite(e))return e>0?"∞":"-∞";if(e===0)return"0";const n=Number(e.toPrecision(t));if(n===0)return"0";const r=Math.abs(n);if(r<IV||r>=LV)return K9(n.toExponential(t-1));const i=Math.floor(Math.log10(r)),o=Math.max(0,t-1-i);return K9(n.toFixed(o))}function B$(e,t=q$){return Number.isFinite(e)?e>=1?"∞:1":e<=0?"1:∞":e>=.5?`${_n(e/(1-e),t)}:1`:`1:${_n((1-e)/e,t)}`:"—"}function Xi(e,t){if(!Number.isFinite(e)||e===0)return e;const n=F$,r=Number(e.toPrecision(n));if(t==="floor"?r<=e:r>=e)return r;const i=Math.floor(Math.log10(Math.abs(r))),o=Math.pow(10,i-n+1),a=t==="floor"?r-o:r+o;return Number(a.toPrecision(n))}function Ee(e,t,n,r="deterministic"){return H$(e,t,n,r,0)}function _oe(e,t,n,r="deterministic"){return Hr(t)&&n==="probability"?_n(e,na(r)):Ee(e,t,n,r)}function H$(e,t,n,r,i){const o=na(r)+i;return Hr(t)?n==="odds"?B$(e,q$+i):_n(e*100,o)+"%":_n(e,o)}function boe(e,t,n,r){const i="deterministic";return x$(e,t,(o,a)=>H$(o,n,r,i,a))}function goe(e,t){const n=na("deterministic");return x$(e,t,(r,i)=>_n(r,n+i))}function x$(e,t,n){const r=na("deterministic");for(let i=0;r+i<=j9;i++){const o=n(e,i),a=n(t,i);if(e===t||o!==a)return[o,a]}throw new Error(`${String(e)} and ${String(t)} read alike at every precision up to ${j9} significant figures`)}function zt(e){return e.geomean!==void 0?{statistic:Kt,value:e.geomean}:{statistic:xr,value:e.mean}}function kV(e){return e.statistic===Kt?{geomean:e.value}:{mean:e.value}}function NV(e){const t=new Set;for(const n of e)for(const[r,i]of Object.entries(n.precomputed_aux_forms??{}))Object.values(i).some(o=>o.quantile_table_mixture!==void 0)&&t.add(r);return t}function p2(e){return e.some(t=>xm(t.lloads))}function ra(e){return new Error(`A record with stated joint dependence must carry both its independence precompute (${Ke}) and joint precompute (${Xe}), or neither for ${e}`)}function h2(e,t){if(e===void 0)return;const n=e[Ke],r=e[Xe];if(!t)return n===void 0?void 0:{stats:n,strengthKey:Ke};if(!(n===void 0&&r===void 0)){if(n===void 0||r===void 0)throw ra("live evaluation");return{stats:r,strengthKey:Xe}}}function OV(e){if(e===void 0)return null;const t=e[Ke],n=e[Xe];if(t===void 0&&n===void 0)return null;if(t===void 0||n===void 0)throw ra("live comparison");return{independent:t,joint:n}}function Kr(e,t,n){var r;return n?e.precomputed:(r=e.precomputed_aux_forms)==null?void 0:r[t]}function yoe(e,t,n,r){return h2(Kr(e,t,t===n),r)}function U$(e,t,n){var r;return n||(r=e.aux_form_location_statistics)==null?void 0:r[t]}function MV(e,t,n,r){const i=U$(e,t,n);if(i===void 0)return;const o=i[Ke],a=i[Xe];if(!r)return o===void 0?void 0:{location:o,strengthKey:Ke};if(!(o===void 0&&a===void 0)){if(o===void 0||a===void 0)throw ra("explicit sampling");return{location:a,strengthKey:Xe}}}function DV(e,t,n){const r=U$(e,t,n);if(r===void 0)return null;const i=r[Ke],o=r[Xe];if(i===void 0&&o===void 0)return null;if(i===void 0||o===void 0)throw ra("explicit sampling");return{independent:i,joint:o}}const Ri=2e3,PV=Ri/100,FV=[1,2,4,10];function qV(){const e=new Set;for(let t=0;t<=Ri;t+=PV)e.add(t);for(const t of FV)e.add(t),e.add(Ri-t);return[...e].sort((t,n)=>t-n).map(t=>t/Ri)}const ct=qV(),BV=100,Gp=0,HV={logit:{inverse:e=>1/(1+Math.exp(-e)),lowerBound:0,upperBound:1},log:{inverse:e=>Math.exp(e),lowerBound:0,upperBound:null},identity:{inverse:e=>e,lowerBound:null,upperBound:null}};function Y9(e,t,n){const r=e[t];if(!Number.isInteger(r)||r<0)throw new Error(`quantile table ${t} must be a nonnegative integer; got ${r}`);if(r>0&&n===null)throw new Error(`quantile table ${t} is ${r}, but transform ${JSON.stringify(e.transform)} has no ${t==="count_at_lower_bound"?"lower":"upper"} bound`);return r}function z9(e,t){const n=e[t];if(n===null)return null;if(typeof n!="number"||!Number.isFinite(n))throw new Error(`quantile table ${t} must be a finite number or null; got ${n}`);return n}function xV(e){const t=HV[e.transform];if(t===void 0)throw new Error(`unknown quantile table transform ${JSON.stringify(e.transform)}`);const n=Y9(e,"count_at_lower_bound",t.lowerBound),r=Y9(e,"count_at_upper_bound",t.upperBound),i=z9(e,"anchor"),o=z9(e,"log_gap_min"),a=e.gap_codes_ln100;if(!Array.isArray(a))throw new Error("quantile table gap_codes_ln100 must be a list");let s=!1;for(const d of a){if(!Number.isInteger(d)||d<0)throw new Error(`quantile table gap codes must be nonnegative integers; got ${d}`);d!==Gp&&(s=!0)}if(i===null&&a.length>0)throw new Error(`quantile table anchor is null, but it has ${a.length} gap codes (a table with no coded levels has none)`);const u=i===null?0:a.length+1;if(u+n+r!==ct.length)throw new Error(`a quantile table has one value per level (${ct.length} levels); got ${u} coded levels (${a.length} gap codes) plus ${n} + ${r} values at the bounds`);if(s&&o===null)throw new Error("quantile table log_gap_min is null, but it has a positive gap code");if(!s&&o!==null)throw new Error("quantile table log_gap_min is given, but it has no positive gap code");const l=d=>d===Gp?0:Math.exp(o+(d-Gp-1)/BV),c=new Array(u);if(i!==null){const d=Math.floor((u-1)/2);c[d]=i;let p=i;for(let h=d;h<a.length;h++)p+=l(a[h]),c[h+1]=p;p=i;for(let h=d-1;h>=0;h--)p-=l(a[h]),c[h]=p}const f=new Array(n).fill(t.lowerBound);for(const d of c)f.push(t.inverse(d));for(let d=0;d<r;d++)f.push(t.upperBound);return f}function UV(e,t){if(e.length===0)throw new Error("a mixture needs at least one member");if(t.length!==e.length)throw new Error(`expected one weight per member (${e.length}); got ${t.length}`);let n=0;for(const a of t){if(!(a>0))throw new Error("every mixture weight must be positive");n+=a}const r=e[0].transform,i=[],o=[];return e.forEach((a,s)=>{if(a.transform!==r)throw new Error(`cannot mix quantile tables quantized in different transforms (${r}, ${a.transform})`);a.tables.forEach((u,l)=>{i.push(u),o.push(t[s]/n*a.weights[l])})}),{tables:i,weights:o,transform:r}}const ln=1e-12;function J9(e,t,n){if(t===0)return 0;if(t===e.length)return 1;const r=e[t-1],i=e[t],o=ct[t-1],a=ct[t];return o+(a-o)*(n-r)/(i-r)}function G$(e,t){let n=0,r=e.length;for(;n<r;){const i=n+r>>>1;e[i]>=t?r=i:n=i+1}return n}function GV(e,t,n){if(e.length===0)throw new Error("a mixture needs at least one table");if(t.length!==e.length)throw new Error(`expected one weight per table (${e.length}); got ${t.length}`);let r=0;for(const s of t){if(!(s>0))throw new Error("every mixture weight must be positive");r+=s}for(const s of e)if(s.length!==ct.length)throw new Error(`a quantile table has one value per level (${ct.length} levels); got ${s.length}`);const i=Float64Array.from(new Set(e.flat())).sort(),o=new Float64Array(i.length),a=new Float64Array(i.length);return e.forEach((s,u)=>{const l=t[u]/r;let c=0,f=0;for(let d=0;d<i.length;d++){const p=i[d];for(;c<s.length&&s[c]<=p;)c++;for(;f<s.length&&s[f]<p;)f++;o[d]=o[d]+l*J9(s,c,p),a[d]=a[d]+l*J9(s,f,p)}}),n.map(s=>{const u=G$(o,s-ln);if(u===i.length)return i[i.length-1];let l;if(u===0||a[u]<s-ln)l=i[u];else{const c=a[u]-o[u-1],f=Math.min(Math.max((s-o[u-1])/c,0),1);l=i[u-1]+f*(i[u]-i[u-1])}return o[u]>s+ln?l:(l+WV(i,o,a,s))/2})}function WV(e,t,n,r){let i=G$(t,r+ln);for(;i<e.length&&t[i]<=r+ln;)i++;return i===e.length?e[e.length-1]:n[i]<=r+ln?e[i]:e[i-1]}function VV(e,t){const n=e.length;return e.map(()=>1/n)}const XV=[.05,.5,.95];function W$(e,t){const n=e.map(zt),r=n[0].statistic,i=n.find(o=>o.statistic!==r);if(i!==void 0)throw new Error(`the trials of one pool carry different location statistics for one formula (${r} and ${i.statistic}), which do not mix`);return{statistic:r,value:Vq(n.map(o=>o.value),r,t)}}function jV(e,t){const n=[];for(const s of e){if(s.quantile_table_mixture===void 0)return null;n.push(s.quantile_table_mixture)}const r=UV(n,t),[i,o,a]=GV(r.tables,r.weights,XV);return{...kV(W$(e,t)),median:o,p5:i,p95:a,quantile_table_mixture:r}}function V$(e){if(e.length===0)throw new Error("a pool needs at least one member trial");let t=0;for(const n of e){if(!(n.weight>0))throw new Error("every pool member weight must be positive");t+=n.weight}return e.map(n=>n.weight/t)}function X$(e){var r;const t=[];for(const i of e){const o=(r=i.statsByStrengthKey)==null?void 0:r[Ke];if(o===void 0)return null;t.push(o)}const n={[Ke]:t};return e.some(i=>{var o;return((o=i.statsByStrengthKey)==null?void 0:o[Xe])!==void 0})&&(n[Xe]=e.map((i,o)=>{var a;return((a=i.statsByStrengthKey)==null?void 0:a[Xe])??t[o]})),n}function j$(e){const t=V$(e),n=X$(e);if(n===null)return null;const r={};for(const[i,o]of Object.entries(n)){const a=jV(o,t);if(a===null)return null;r[i]=a}return r}function KV(e){const t=V$(e),n=X$(e);if(n===null)return null;const r={};for(const[i,o]of Object.entries(n))r[i]=W$(o,t);return r}const K$="equal_per_trial",YV="record";function Y$(e,t,n){return JSON.stringify([e??null,t??null,n??null])}function zV(e){return(e==null?void 0:e.model)===void 0?null:Y$(e.model,e.version,e.effort)}function JV(e){const t=Ce(e)?Y$(e.model,e.version,e.effort):YV;return Array.from({length:Gn(e)},(n,r)=>zV(ta(e,r))??t)}function m2(e){return VV(JV(e))}function kt(e,t){const n=m2(e);return t.map(r=>{const i=Un(r),o=n[i];if(o===void 0)throw new Error(`combo trial names record trial ${i}, past the record's ${n.length} trials`);return o})}const QV=[256,512,1024,2048],ZV=4096,eX=256,tX={"whole-plot":{rampChunkRows:QV,steadyChunkRows:ZV},"sweep-share":{rampChunkRows:[],steadyChunkRows:eX}};function nX(e,t){if(!(Number.isInteger(e)&&e>=0))throw new Error(`a pool's ${t} is a non-negative integer, got ${e}`)}function rX(e,t){nX(t,"depth");const{rampChunkRows:n,steadyChunkRows:r}=tX[e],i=Math.min(t,n.length);let o=0;for(let a=0;a<i;a++)o+=n[a];return o+(t-i)*r}const iX=0;function pi(e){return e^=e>>>16,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,e>>>0}function Ie(e,t){return e<<t|e>>>32-t}function oX(e,t){const a=e.length,s=Math.floor(a/16);let u=t>>>0,l=u,c=u,f=u;const d=v=>e[v]|e[v+1]<<8|e[v+2]<<16|e[v+3]<<24;for(let v=0;v<s;v++){const _=v*16;let b=d(_),y=d(_+4),g=d(_+8),E=d(_+12);b=Math.imul(b,597399067),b=Ie(b,15),b=Math.imul(b,2869860233),u^=b,u=Ie(u,19),u=u+l|0,u=Math.imul(u,5)+1444728091|0,y=Math.imul(y,2869860233),y=Ie(y,16),y=Math.imul(y,951274213),l^=y,l=Ie(l,17),l=l+c|0,l=Math.imul(l,5)+197830471|0,g=Math.imul(g,951274213),g=Ie(g,17),g=Math.imul(g,2716044179),c^=g,c=Ie(c,15),c=c+f|0,c=Math.imul(c,5)+2530024501|0,E=Math.imul(E,2716044179),E=Ie(E,18),E=Math.imul(E,597399067),f^=E,f=Ie(f,13),f=f+u|0,f=Math.imul(f,5)+850148119|0}const p=s*16,h=a&15,m=(v,_)=>h>v?e[p+v]<<_:0;if(h>12){let v=m(14,16)^m(13,8)^m(12,0);v=Math.imul(v,2716044179),v=Ie(v,18),v=Math.imul(v,597399067),f^=v}if(h>8){let v=m(11,24)^m(10,16)^m(9,8)^m(8,0);v=Math.imul(v,951274213),v=Ie(v,17),v=Math.imul(v,2716044179),c^=v}if(h>4){let v=m(7,24)^m(6,16)^m(5,8)^m(4,0);v=Math.imul(v,2869860233),v=Ie(v,16),v=Math.imul(v,951274213),l^=v}if(h>0){let v=m(3,24)^m(2,16)^m(1,8)^m(0,0);v=Math.imul(v,597399067),v=Ie(v,15),v=Math.imul(v,2869860233),u^=v}return u^=a,l^=a,c^=a,f^=a,u=u+l|0,u=u+c|0,u=u+f|0,l=l+u|0,c=c+u|0,f=f+u|0,u=pi(u),l=pi(l),c=pi(c),f=pi(f),u=u+l|0,u=u+c|0,u=u+f|0,l=l+u|0,c=c+u|0,f=f+u|0,[u>>>0,l>>>0,c>>>0,f>>>0]}const aX=new TextEncoder;function sX(e){return oX(aX.encode(e),iX)}function dt(e){return JSON.stringify(e,(t,n)=>{if(typeof n=="function"||typeof n=="symbol")throw new Error(`live MC key parts must be JSON-serializable data; got a ${typeof n}. Identify a combine function by a string tag / form id instead.`);return n})}const uX=4096,at=new Map,bn=new Map,z$=new WeakMap;let J$=1;function lX(e,t){const n=dt(e),r=at.get(n);if(r!==void 0){if(r.budgetRole!==t)throw new Error(`pool ${r.token} is registered under budget role ${r.budgetRole}, and was registered again under ${t}: its key must name its role`);return Q$(r),r}const i={token:`mcpool-${J$++}`,key:n,budgetRole:t,depth:0,seedKeyHash:sX(n)};for(at.set(n,i),bn.set(i.token,i),z$.set(i,i);at.size>uX;){const o=at.keys().next().value;bn.delete(at.get(o).token),at.delete(o)}return i}function Q$(e){at.delete(e.key),at.set(e.key,e)}function bt(e){return bn.get(e)??null}function cX(e){const t=bn.get(e);t!==void 0&&Q$(t)}function fX(e){const t=z$.get(e);if(t===void 0)throw new Error("not a pool mcSamplePoolFor handed out");return t}function dX(e,t){const n=fX(e);if(!(Number.isInteger(t)&&t>=0))throw new Error(`a pool is asked to a non-negative integer depth, got ${t}`);return t<=n.depth?!1:(n.depth=t,!0)}function Q9(e,t){return dX(e,t)}const pX=64,tr=new Map,rt=new Map;function Z$(e){const t=[...new Set(e.flatMap(o=>tr.get(o)??[o]))],n=dt([...t].sort()),r=rt.get(n);if(r!==void 0)return rt.delete(n),rt.set(n,r),r;const i=`mcpoolgroup-${J$++}`;for(rt.set(n,i),tr.set(i,t);rt.size>pX;){const o=rt.keys().next().value;tr.delete(rt.get(o)),rt.delete(o)}return i}function Yn(e){const t=tr.get(e)??[e],n=[];for(const r of t){const i=bn.get(r);i!==void 0&&n.push(i)}return n}function Eoe(){at.clear(),bn.clear(),tr.clear(),rt.clear()}function hX(e){return ArrayBuffer.isView(e)&&Object.prototype.toString.call(e)==="[object Float64Array]"&&mX(Object.getPrototypeOf(e))==="Float64Array"}function mX(e){var n;if(e===null||typeof e!="object"&&typeof e!="function")return null;const t=(n=Object.getOwnPropertyDescriptor(e,"constructor"))==null?void 0:n.value;return typeof t!="function"?null:typeof t.name=="string"&&t.name!==""?t.name:null}const hi=65536,vX=64,Wp=8192;class Pe{constructor(t){this.representation=t}static fold(t,n){if(n.length===0){if(t===void 0)throw new Error("McDrawDistribution.fold: a distribution needs at least one draw");return t}const r=_X(n);if(t===void 0)return r.length<=hi?new Pe({kind:"exact",sortedDraws:r}):Pe.binnedFromSortedDraws(r);const i=t.representation;if(i.kind==="binned")return new Pe(EX(i,r));const o=bX(i.sortedDraws,r);return o.length<=hi?new Pe({kind:"exact",sortedDraws:o}):Pe.binnedFromSortedDraws(o)}static binnedFromSortedDraws(t){const n=t.length;if(n===0)throw new Error("McDrawDistribution.binnedFromSortedDraws: a distribution needs at least one draw");for(let a=0;a<n;a++){if(!Number.isFinite(t[a]))throw new Error(`McDrawDistribution: draw ${t[a]} at index ${a} is not finite`);if(a>0&&t[a]<t[a-1])throw new Error(`McDrawDistribution.binnedFromSortedDraws: draws are not sorted at index ${a}`)}const r=yX(t,gX(n)),i=new Float64Array(r.length),o=new Float64Array(Math.max(r.length-1,0));return tA(t,0,n,r,0,i,o),new Pe(Mh(r,i,o))}static fromData(t){switch(t.kind){case"exact":{const n=mi(t.sortedDraws,"sortedDraws");if(n.length===0)throw new Error("McDrawDistribution.fromData: an exact distribution needs at least one draw");if(n.length>hi)throw new Error(`McDrawDistribution.fromData: ${n.length} exact draws is more than the exact capacity (${hi}); past it a distribution is binned`);for(let r=0;r<n.length;r++){if(!Number.isFinite(n[r]))throw new Error(`McDrawDistribution.fromData: draw ${n[r]} at index ${r} is not finite`);if(r>0&&eA(n[r],n[r-1]))throw new Error(`McDrawDistribution.fromData: draws are not sorted at index ${r}`)}return new Pe({kind:"exact",sortedDraws:n})}case"binned":{const n=mi(t.edges,"edges"),r=mi(t.edgeDrawCounts,"edgeDrawCounts"),i=mi(t.intervalDrawCounts,"intervalDrawCounts");if(n.length===0)throw new Error("McDrawDistribution.fromData: a binned distribution needs at least one edge");if(r.length!==n.length)throw new Error(`McDrawDistribution.fromData: ${r.length} edge draw counts for ${n.length} edges`);if(i.length!==n.length-1)throw new Error(`McDrawDistribution.fromData: ${i.length} interval draw counts for ${n.length} edges (one per interval between them)`);for(let o=0;o<n.length;o++){if(!Number.isFinite(n[o]))throw new Error(`McDrawDistribution.fromData: edge ${n[o]} at index ${o} is not finite`);if(o>0&&!(n[o]>n[o-1]))throw new Error(`McDrawDistribution.fromData: edges are not strictly ascending at index ${o}`);const a=r[o];if(!(Number.isInteger(a)&&a>=1))throw new Error(`McDrawDistribution.fromData: edge draw count ${a} at index ${o} is not an integer of at least 1 (every edge is a draw)`);if(o<i.length){const s=i[o];if(!(Number.isInteger(s)&&s>=0))throw new Error(`McDrawDistribution.fromData: interval draw count ${s} at index ${o} is not a non-negative integer`)}}return new Pe(Mh(n,r,i))}default:{const n=t.kind;throw new Error(`McDrawDistribution.fromData: unknown representation kind ${JSON.stringify(n)}`)}}}toData(){const t=this.representation;return t.kind==="exact"?{kind:"exact",sortedDraws:t.sortedDraws}:{kind:"binned",edges:t.edges,edgeDrawCounts:t.edgeDrawCounts,intervalDrawCounts:t.intervalDrawCounts}}get drawCount(){const t=this.representation;return t.kind==="exact"?t.sortedDraws.length:t.drawCount}get retainedFloatCount(){const t=this.representation;return t.kind==="exact"?t.sortedDraws.length:t.edges.length+t.edgeDrawCounts.length+t.intervalDrawCounts.length+t.drawCountBelowEdge.length}get isExact(){return this.representation.kind==="exact"}support(){const t=this.representation,n=t.kind==="exact"?t.sortedDraws:t.edges;return[n[0],n[n.length-1]]}countOfDrawsBelow(t){return this.countOfDraws(t,!1)}countOfDrawsAtOrBelow(t){return this.countOfDraws(t,!0)}quantileAtLevel(t){if(!(t>0&&t<1))throw new Error(`McDrawDistribution.quantileAtLevel: level ${t} is not in (0, 1)`);return this.valueAtCumulativeDrawCount(this.drawCount*t)}valueAtCumulativeDrawCount(t){const n=this.representation,r=this.drawCount;if(!(t>=0&&t<=r))throw new Error(`McDrawDistribution.valueAtCumulativeDrawCount: ${t} is not in [0, ${r}]`);return n.kind==="exact"?n.sortedDraws[Math.min(Math.floor(t),r-1)]:wX(n,t)}exactSortedDraws(){const t=this.representation;if(t.kind!=="exact")throw new Error("McDrawDistribution.exactSortedDraws: the distribution is binned, so it holds no draws");return t.sortedDraws}binnedGrid(){const t=this.representation;if(t.kind!=="binned")throw new Error("McDrawDistribution.binnedGrid: the distribution is exact, so it has no grid");return{edges:t.edges,edgeDrawCounts:t.edgeDrawCounts,intervalDrawCounts:t.intervalDrawCounts}}countOfDraws(t,n){if(Number.isNaN(t))throw new Error("McDrawDistribution: cannot count draws below NaN");const r=this.representation;if(r.kind==="exact")return ji(r.sortedDraws,t,n);const{edges:i}=r,o=i.length-1;if(t<i[0])return 0;if(t>i[o])return r.drawCount;const a=ji(i,t,!0)-1,s=r.drawCountBelowEdge[a];if(i[a]===t)return n?s+r.edgeDrawCounts[a]:s;const u=i[a],l=i[a+1];return s+r.edgeDrawCounts[a]+(t-u)/(l-u)*r.intervalDrawCounts[a]}}function mi(e,t){if(!hX(e))throw new Error(`McDrawDistribution.fromData: ${t} is not a Float64Array`);return e}function _X(e){for(let n=0;n<e.length;n++)if(!Number.isFinite(e[n]))throw new Error(`McDrawDistribution.fold: draw ${e[n]} at block index ${n} is not finite`);const t=new Float64Array(e);return t.sort(),t}function eA(e,t){return e<t||e===0&&t===0&&Object.is(e,-0)&&Object.is(t,0)}function bX(e,t){const n=e.length,r=new Float64Array(n+t.length);let i=0,o=0;for(let a=0;a<t.length;a++){const s=t[a];for(;i<n&&!eA(s,e[i]);)r[o++]=e[i++];r[o++]=s}for(;i<n;)r[o++]=e[i++];return r}function ji(e,t,n){let r=0,i=e.length;for(;r<i;){const o=r+i>>>1,a=e[o];a<t||n&&a===t?r=o+1:i=o}return r}function gX(e){const t=Math.min(vX,e),n=new Int32Array(2*t+Wp+1);let r=0;for(let o=0;o<t;o++)n[r++]=o,n[r++]=e-1-o;for(let o=0;o<=Wp;o++)n[r++]=Math.round(o*(e-1)/Wp);n.sort();let i=0;for(let o=0;o<n.length;o++)(i===0||n[o]!==n[i-1])&&(n[i++]=n[o]);return n.slice(0,i)}function yX(e,t){const n=new Float64Array(t.length);let r=0;for(let i=0;i<t.length;i++){const o=e[t[i]];(r===0||o!==n[r-1])&&(n[r++]=o)}return n.slice(0,r)}function tA(e,t,n,r,i,o,a){const s=r.length-1;let u=i;for(let l=t;l<n;l++){const c=e[l];for(;u<s&&r[u+1]<=c;)u++;c===r[u]?o[u]+=1:a[u]+=1}}function Mh(e,t,n){const r=new Float64Array(e.length);let i=0;for(let o=0;o<e.length;o++)r[o]=i,i+=t[o]+(o<n.length?n[o]:0);return{kind:"binned",edges:e,edgeDrawCounts:t,intervalDrawCounts:n,drawCountBelowEdge:r,drawCount:i}}function Z9(e,t,n){const r=[],i=[];for(let o=t;o<n;o++){const a=e[o];r.length>0&&a===r[r.length-1]?i[i.length-1]+=1:(r.push(a),i.push(1))}return{values:r,counts:i}}function EX(e,t){const n=e.edges,r=n[0],i=n[n.length-1],o=ji(t,r,!1),a=ji(t,i,!0),s=Z9(t,0,o),u=Z9(t,a,t.length),l=s.values.length,c=l+n.length+u.values.length;let f=n;c!==n.length&&(f=new Float64Array(c),f.set(s.values,0),f.set(n,l),f.set(u.values,l+n.length));const d=new Float64Array(c);d.set(s.counts,0),d.set(e.edgeDrawCounts,l),d.set(u.counts,l+n.length);const p=new Float64Array(c-1);return p.set(e.intervalDrawCounts,l),tA(t,o,a,f,l,d,p),Mh(f,d,p)}function wX(e,t){const{edges:n,edgeDrawCounts:r,intervalDrawCounts:i,drawCountBelowEdge:o}=e;let a=0,s=n.length;for(;a<s;){const p=a+s>>>1;o[p]+r[p]>t?s=p:a=p+1}if(a===n.length)return n[n.length-1];if(o[a]<=t)return n[a];const u=a-1,l=o[u]+r[u],c=i[u],f=n[u],d=n[a];return f+(t-l)/c*(d-f)}function nA(e){const{distribution:t,...n}=e;return{...n,distribution:t===null?void 0:Pe.fromData(t)}}const SX=4e6,$X=4096,woe={maxRetainedFloats:SX,maxEntries:$X};function AX(e,t,n){return{kind:"pool-target",pool:e,description:t,target:n,targetIdentity:Ki(n)}}function Ki(e){return e.accumulation==="running-statistic"?dt([e.accumulation,e.target.targetKey]):dt([e.accumulation,e.arm,e.target.targetKey])}function Dh(e){return e.accumulation==="form-draws"&&e.includeDistribution}function rA(e,t){return`${e}:${t}`}function Fe(e){return rA("pool",e)}function ut(e){return rA("composite",e)}function eE(e){return e.kind==="pool-target"?Fe(e.pool.token):ut(e.compositeToken)}function tE(e){return e.pool.depth}function Yi(e){return e.innerPools.map(t=>t.depth)}function TX(e){return e.kind==="form-draws"?{kind:"form-draws",summary:nA(e.summary)}:e}function nE(e){return e.kind==="form-draws"?{kind:"form-draws",summary:nA(e.summary)}:e}function Vp(e){var t;return e!==null&&e.kind==="form-draws"?((t=e.summary.distribution)==null?void 0:t.retainedFloatCount)??0:0}function Ph(e,t){return e.kind==="error"||e.kind==="form-draws"?!0:e.kind==="form-draw-statistics"&&!t}function rE(e,t){return t.accumulation==="running-statistic"?e.kind==="error"||e.kind==="running-statistic":Ph(e,t.includeDistribution)}function Xp(e,t){return e.kind==="form-draw-statistics"&&(t.kind==="form-draws"||t.kind==="error")?t:e}function iE(e,t,n){if(e.length!==t.length)throw new Error(`${n}: the store holds depths ${JSON.stringify(e)} for ${t.length} pools`);let r=!1;return e.forEach((i,o)=>{const a=t[o];if(i>a)throw new Error(`${n}: the store holds depth ${i}, past the asked depth ${a}; a pool's asked depth only grows`);i<a&&(r=!0)}),r?"behind":"equal"}function oE(e,t){return e.length===t.length&&e.every((n,r)=>n===t[r])}class RX{constructor(t){G(this,"entries",new Map);G(this,"retainedFloats",0);this.limits=t;for(const[n,r]of Object.entries(t))if(!(Number.isInteger(r)&&r>=0))throw new Error(`McLiveResultStore: ${n} must be a non-negative integer, got ${r}`)}applyPoolSnapshot(t,n){if(t.length!==n.outcomes.length)throw new Error(`a snapshot of pool ${n.poolToken} carries ${n.outcomes.length} outcomes for ${t.length} targets`);const r=Fe(n.poolToken),i=this.entries.get(r);let o=!1,a;return i===void 0||i.kind!=="pool"?(i!==void 0&&this.remove(r,i),a={kind:"pool",outcomes:new Map,retainedFloats:0},o=!0):a=i,n.outcomes.forEach((s,u)=>{const l=Ki(t[u]),c=a.outcomes.get(l);if(c!==void 0&&c.depth>n.depth)return;const f=TX(s),d=c===void 0||c.depth<n.depth?f:Xp(c.outcome,f);d!==(c==null?void 0:c.outcome)&&(a.outcomes.set(l,{depth:n.depth,outcome:d}),o=!0)}),this.place(r,a,[...a.outcomes.values()].reduce((s,{outcome:u})=>s+Vp(u),0)),o}applyCompositeSnapshot(t,n){const r=ut(t),i=this.entries.get(r),o=nE(n.joint),a=n.independent===null?null:nE(n.independent);let s=!1,u;if(i===void 0||i.kind!=="composite"||!oE(i.innerDepths,n.innerDepths))i!==void 0&&this.remove(r,i),u={kind:"composite",innerDepths:n.innerDepths,outerDrawCount:n.outerDrawCount,joint:o,independent:a,retainedFloats:0},s=!0;else{if(u=i,u.independent===null!=(a===null))throw new Error(`barrier composite ${t} was answered with and without an independent arm at the same inner depths`);const l=Xp(u.joint,o),c=u.independent===null||a===null?null:Xp(u.independent,a);s=l!==u.joint||c!==u.independent,u.joint=l,u.independent=c}return this.place(r,u,Vp(u.joint)+Vp(u.independent)),s}readPoolTarget(t){const n=Fe(t.pool.token),r=this.entries.get(n);if(r===void 0||r.kind!=="pool")return{status:"sampling"};const i=r.outcomes.get(t.targetIdentity);if(i===void 0)return{status:"sampling"};const o=iE([i.depth],[tE(t)],`pool ${t.pool.token}`);return rE(i.outcome,t.target)?(this.use(n,r),{status:o==="equal"?"settled":"behind",depth:i.depth,outcome:i.outcome}):{status:"sampling"}}readComposite(t){const n=ut(t.compositeToken),r=this.entries.get(n);if(r===void 0||r.kind!=="composite")return{status:"sampling"};const i=iE(r.innerDepths,Yi(t),`barrier composite ${t.compositeToken}`);return this.compositeEntryReadable(r,t.request.includeDistribution)?(this.use(n,r),{status:i==="equal"?"settled":"behind",innerDepths:r.innerDepths,outerDrawCount:r.outerDrawCount,joint:r.joint,independent:r.independent}):{status:"sampling"}}wantIsSatisfied(t){return t.kind==="pool-target"?this.poolTargetOfIdentityIsSatisfiedAt(t.pool.token,tE(t),t.target,t.targetIdentity):this.compositeIsSatisfiedAt(t.compositeToken,Yi(t),t.request.includeDistribution)}poolTargetIsSatisfiedAt(t,n,r){return this.poolTargetOfIdentityIsSatisfiedAt(t,n,r,Ki(r))}poolTargetIsLateAt(t,n,r){var o;const i=this.entries.get(Fe(t));if(i===void 0||i.kind!=="pool"||((o=i.outcomes.get(r))==null?void 0:o.depth)===n)return!1;for(const a of i.outcomes.values())if(a.depth===n)return!0;return!1}compositeIsSatisfiedAt(t,n,r){const i=this.entries.get(ut(t));return i!==void 0&&i.kind==="composite"&&oE(i.innerDepths,n)&&this.compositeEntryReadable(i,r)}trimToBudget(t){for(const[n,r]of this.entries){if(this.withinLimits())return;t(n)||this.remove(n,r)}}clear(){this.entries.clear(),this.retainedFloats=0}stats(){return{entryCount:this.entries.size,retainedFloats:this.retainedFloats}}poolTargetOfIdentityIsSatisfiedAt(t,n,r,i){const o=this.entries.get(Fe(t));if(o===void 0||o.kind!=="pool")return!1;const a=o.outcomes.get(i);return a!==void 0&&a.depth===n&&rE(a.outcome,r)}withinLimits(){return this.entries.size<=this.limits.maxEntries&&this.retainedFloats<=this.limits.maxRetainedFloats}compositeEntryReadable(t,n){return Ph(t.joint,n)&&(t.independent===null||Ph(t.independent,n))}place(t,n,r){this.entries.get(t)===n&&(this.retainedFloats-=n.retainedFloats,this.entries.delete(t)),n.retainedFloats=r,this.retainedFloats+=r,this.entries.set(t,n)}use(t,n){this.entries.delete(t),this.entries.set(t,n)}remove(t,n){this.entries.delete(t),this.retainedFloats-=n.retainedFloats}}const gn=new Map,nr=[];let iA=0,Ii=null;function v2(e,t){let n=gn.get(e);if(n!==void 0&&nr.includes(n))throw new Error("renderLiveMcView: this container's scope is already rendering; a view renders inside its own scope once");n===void 0&&(n={container:e,render:t,wants:[],controlTokens:[],lastRenderSerial:0},gn.set(e,n)),n.render=t,n.wants=[],n.controlTokens=[],n.lastRenderSerial=++iA,nr.push(n);try{t()}finally{nr.pop(),Ii==null||Ii()}}function IX(e,t){const n=nr[nr.length-1];return n===void 0?!1:(n.wants.push(e),n.controlTokens.push(t),!0)}function vi(){const e=[];for(const[t,n]of gn)t.isConnected?e.push(n):gn.delete(t);return e}function LX(e){const t=gn.get(e.container);if(t!==e)throw new Error("rerunLiveMcViewScope: not a scope this module holds");v2(t.container,t.render)}function Soe(e){for(let t=e;t!==null;t=t.parentElement){const n=gn.get(t);if(n!==void 0&&t.isConnected)return n}return null}function aE(){return iA}function CX(e){Ii=e}const Yr="liveMcRunDurationMs",zr="liveMcPlotUpdateIntervalMs";function sE(){const e=je();return{budgetMs:uE(Yr,e),updateIntervalMs:uE(zr,e)}}function uE(e,t){const n=t[e];if(hS(Vm(e),n))return n;const r=`the stored live-MC run preference ${e}, ${JSON.stringify(n)}, is no value it accepts; its default is used`;return console.error(r),Uo[e]}const kX="data-live-mc-state",NX="Live Monte Carlo sampling stopped unexpectedly",OX=4096,MX="mccomposite-",oA="advanced-by-a-run";function lE(e,t,n){return dt(["pool-fold",e,t??oA,n.map(r=>[Ki(r),Dh(r)])])}function cE(e,t,n){return dt(["barrier-composite",e,t.map(r=>r??oA),n])}function fE(e){return e.map(t=>t.runId).join(",")}function Fh(e,t){return{token:e.token,seedKeyHash:e.seedKeyHash,description:t,budgetRole:e.budgetRole,depth:e.depth}}function ia(e){return e.kind==="pool-target"?[e.pool]:e.innerPools}function DX(e,t){return ia(e).some(n=>t.has(n.token))}function PX(e){const t=new Set;for(const n of e)for(const r of n.wants)for(const i of ia(r))bt(i.token)===i&&t.add(i.token);return t}function FX(e){for(const t of e)for(const n of t.wants)for(const r of ia(n))cX(r.token)}function qX(e){return e instanceof Error?e.message:String(e)}class $oe{constructor(t){G(this,"store");G(this,"transport",null);G(this,"aid",null);G(this,"outstanding",new Map);G(this,"describedPoolTokens",new Set);G(this,"flushScheduled",!1);G(this,"frameScheduled",!1);G(this,"touchedEntryKeys",new Set);G(this,"viewsAwaitingRerun",new Map);G(this,"poolTokensWithReadersDue",new Set);G(this,"compositeTokensByIdentity",new Map);G(this,"compositeRecordsByToken",new Map);G(this,"nextCompositeTokenNumber",1);G(this,"heldRuns",new Map);G(this,"activeRunIdOfPool",new Map);G(this,"nextRunId",1);G(this,"poolsTakenByARun",new WeakSet);G(this,"poolTokensAboutToGetTheirFirstRun",new Set);G(this,"poolTokensCatchingUp",new Set);G(this,"poolTokensReadCatchingUp",new Map);G(this,"poolTokensWithReadersRenderedBeforeDue",new Map);G(this,"sentRunListing","");G(this,"shownState",null);G(this,"disposed",!1);G(this,"samplingGeneration",0);G(this,"demandBuilds",0);this.dependencies=t,this.store=new RX(t.resultStoreLimits),CX(()=>this.requestFlush()),this.showState()}preparePoolTargets(t,n,r){return{...this.preparedForNow(),wants:r.map(i=>AX(t,n,i))}}readPreparedPoolTargets(t,n){return this.preparedForCurrentSampling(t)?t.wants.map(r=>{const i=this.recordWant(r,n);i&&this.poolTargetWantIsCatchingUp(r)&&!this.poolTokensReadCatchingUp.has(r.pool.token)&&this.poolTokensReadCatchingUp.set(r.pool.token,aE());const o=this.store.readPoolTarget(r);return o.status==="sampling"?this.awaitingRead([r.pool],i):{...o,status:this.viewStatusOf(o.status,[r.pool])}}):t.wants.map(r=>this.samplingRead([r.pool]))}readPoolTargets(t,n,r,i=t.token){return this.readPreparedPoolTargets(this.preparePoolTargets(t,n,r),i)}prepareBarrierComposite(t,n){if(n.length!==t.innerPools.length||n.some((r,i)=>r.token!==t.innerPools[i].token))throw new Error(`a barrier composite of form ${t.target.formId} was read with inner pools that are not its request's`);return{...this.preparedForNow(),want:{kind:"composite",compositeToken:this.compositeTokenFor(t),innerPools:n,request:t}}}readPreparedBarrierComposite(t,n){if(!this.preparedForCurrentSampling(t))return this.samplingRead(t.want.innerPools);this.refreshCompositeTokenRecency(t.want.compositeToken);const r=this.recordWant(t.want,n),i=this.store.readComposite(t.want);return i.status==="sampling"?this.awaitingRead(t.want.innerPools,r):{...i,status:this.viewStatusOf(i.status,t.want.innerPools)}}viewStatusOf(t,n){return n.some(r=>this.activeRunIdOfPool.has(r.token))?"refining":t==="settled"?"settled":"catching-up"}samplingRead(t){return{status:"sampling",awaiting:t.every(n=>n.depth>0)?"catch-up":"first-draws"}}awaitingRead(t,n){if(t.some(r=>this.poolAwaitsAClick(r)))return{status:"unsampled"};if(n)for(const r of t)r.depth===0&&!this.poolsTakenByARun.has(r)&&!this.poolIsInHeldRun(r.token)&&this.poolTokensAboutToGetTheirFirstRun.add(r.token);return this.samplingRead(t)}poolTargetWantIsCatchingUp(t){return!this.activeRunIdOfPool.has(t.pool.token)&&this.poolTargetIsLate(t.pool,t.targetIdentity)}poolTargetIsLate(t,n){return t.depth>0&&this.store.poolTargetIsLateAt(t.token,t.depth,n)}poolAwaitsAClick(t){return t.depth===0&&this.poolsTakenByARun.has(t)&&!this.poolIsInHeldRun(t.token)}readBarrierComposite(t,n,r){return this.readPreparedBarrierComposite(this.prepareBarrierComposite(t,n),r)}preparedForNow(){return{coordinator:this,samplingGeneration:this.samplingGeneration}}preparedForCurrentSampling(t){if(t.coordinator===this&&t.samplingGeneration===this.samplingGeneration)return!0;const n="a live MC read prepared before a jprob load was read after it, when its pools are retired: a view must prepare its reads again at its next full render";if(this.dependencies.devMode)throw new Error(n);return console.error(n),!1}loadJprob(t){var n;this.aid=t,this.forgetEverythingSampled(),this.describedPoolTokens.clear(),(n=this.transport)==null||n.post({kind:"load-jprob",aid:t}),this.showState()}poolsAskedDeeper(t){for(const n of t)this.poolTokensWithReadersDue.add(n.token);this.requestFrame(),this.requestFlush()}startRun(t,n=this.dependencies.runChunkLimitPerPool){const r=Yn(t).filter(i=>!this.activeRunIdOfPool.has(i.token)&&!this.poolHasTargetCatchingUp(i.token));return r.length===0?null:this.mintRun(r,n)}startRunsForUnsampledWantedPools(t){const n=new Map,r=new Set,i=(o,a)=>{if(o.depth!==0||r.has(o.token)||this.poolsTakenByARun.has(o)||this.poolIsInHeldRun(o.token))return;r.add(o.token);const s=n.get(a);s===void 0?n.set(a,[o]):s.push(o)};for(const o of t)if(o.firstUnsatisfiedControlToken!==null)for(const a of o.kind==="pool"?[o.pool]:o.want.innerPools)i(a,o.firstUnsatisfiedControlToken);for(const o of n.values())this.mintRun(o,this.dependencies.runChunkLimitPerPool)}stopRuns(t){const n=new Set;for(const r of Yn(t)){const i=this.activeRunIdOfPool.get(r.token);i!==void 0&&n.add(i)}for(const r of n)this.stopRun(this.heldRuns.get(r));return n.size>0&&this.requestFlush(),n.size>0}isRunning(t){return Yn(t).some(n=>this.activeRunIdOfPool.has(n.token))}isRunningOrAboutToRun(t){return Yn(t).some(n=>this.activeRunIdOfPool.has(n.token)||this.poolTokensAboutToGetTheirFirstRun.has(n.token))}hasTargetCatchingUp(t){return Yn(t).some(n=>this.poolHasTargetCatchingUp(n.token))}poolHasTargetCatchingUp(t){return this.poolTokensCatchingUp.has(t)||this.poolTokensReadCatchingUp.has(t)}mintRun(t,n){if(n!==null&&!(Number.isInteger(n)&&n>=1))throw new Error(`a run's chunk limit per pool is a positive integer or null, got ${n}`);const r=t.find(u=>this.activeRunIdOfPool.has(u.token));if(r!==void 0)throw new Error(`a run was minted over pool ${r.token}, which is in an active run already: a pool is in at most one`);const{budgetMs:i,updateIntervalMs:o}=sE(),a=this.nextRunId++,s={runId:a,poolTokens:t.map(u=>u.token),budgetMs:i,updateIntervalMs:o,chunkLimitPerPool:n};this.heldRuns.set(a,{spec:s,phase:"active",sent:!1});for(const u of t)this.poolsTakenByARun.add(u);for(const u of s.poolTokens)this.activeRunIdOfPool.set(u,a),this.poolTokensWithReadersDue.add(u);return this.requestFrame(),this.requestFlush(),a}stopRun(t){if(t.phase!=="active")throw new Error(`run ${t.spec.runId} was stopped twice`);t.sent?t.phase="closing":this.heldRuns.delete(t.spec.runId),this.releasePoolsOfRun(t),this.requestFrame()}releasePoolsOfRun(t){for(const n of t.spec.poolTokens)this.activeRunIdOfPool.get(n)===t.spec.runId&&this.activeRunIdOfPool.delete(n),this.poolTokensWithReadersDue.add(n)}stopRunsNoViewWants(t){const n=PX(t);for(const r of[...this.heldRuns.values()])if(!(r.phase!=="active"||r.spec.poolTokens.some(i=>n.has(i)))){this.stopRun(r);for(const i of r.spec.poolTokens){const o=bt(i);o!==null&&this.poolsTakenByARun.delete(o)}}}stopRunsOverLateTargets(t){const n=new Set;for(const r of t){if(r.kind!=="pool")continue;const i=this.activeRunIdOfPool.get(r.pool.token);i!==void 0&&[...r.targets.keys()].some(o=>this.poolTargetIsLate(r.pool,o))&&n.add(i)}for(const r of n)this.stopRun(this.heldRuns.get(r))}updatePoolsCatchingUp(t){const n=new Set;for(const i of t){if(i.kind!=="pool")continue;const{pool:o}=i;this.activeRunIdOfPool.has(o.token)||[...i.targets.keys()].some(a=>this.poolTargetIsLate(o,a))&&n.add(o.token)}let r=!1;for(const i of n){if(this.poolTokensCatchingUp.has(i))continue;const o=this.poolTokensReadCatchingUp.get(i);o===void 0?this.poolTokensWithReadersDue.add(i):this.poolTokensWithReadersRenderedBeforeDue.set(i,Math.min(o,this.poolTokensWithReadersRenderedBeforeDue.get(i)??o)),r=!0}for(const i of this.poolTokensCatchingUp)n.has(i)||(this.poolTokensWithReadersDue.add(i),r=!0);this.poolTokensCatchingUp=n,this.poolTokensReadCatchingUp.clear(),r&&this.requestFrame()}activeRunSpecs(){return[...this.heldRuns.values()].filter(t=>t.phase==="active").map(t=>t.spec)}poolTokensOfClosingRuns(){const t=new Set;for(const n of this.heldRuns.values())if(n.phase==="closing")for(const r of n.spec.poolTokens)t.add(r);return t}poolIsInHeldRun(t){for(const n of this.heldRuns.values())if(n.spec.poolTokens.includes(t))return!0;return!1}isIdle(){return this.outstanding.size===0&&this.heldRuns.size===0&&!this.flushScheduled&&!this.frameScheduled}demandBuildCount(){return this.demandBuilds}resultStoreStats(){return this.store.stats()}evictHeldResults(){this.store.clear()}dispose(){this.disposed=!0,this.closeTransport()}recordWant(t,n){if(IX(t,n))return!0;if(this.dependencies.devMode)throw new Error("a live MC result was read outside any live view (renderLiveMcView), so its result could never appear");return!1}requestFlush(){this.flushScheduled||this.disposed||(this.flushScheduled=!0,this.dependencies.queueMicrotask(()=>this.flush()))}flush(){if(this.flushScheduled=!1,this.disposed)return;this.demandBuilds+=1;const t=vi();FX(t),this.stopRunsNoViewWants(t);const n=this.gatheredWants(t);this.stopRunsOverLateTargets(n),this.startRunsForUnsampledWantedPools(n),this.poolTokensAboutToGetTheirFirstRun.clear(),this.updatePoolsCatchingUp(n);const r=this.demandEntries(n),i=this.activeRunSpecs();(r.some(({identity:a})=>!this.outstanding.has(a))||fE(i)!==this.sentRunListing||r.length===0&&this.outstanding.size>0)&&this.send(r,i),this.showState()}gatheredWants(t){const n=new Map,r=(o,a,s)=>{const u=o.get(a);(u===void 0||!Dh(u)&&Dh(s))&&o.set(a,s)};let i=0;for(const o of t)o.wants.forEach((a,s)=>{i+=1;const u=this.store.wantIsSatisfied(a),l=o.controlTokens[s];if(a.kind==="pool-target"){if(bt(a.pool.token)!==a.pool)return;const c=Fe(a.pool.token);let f=n.get(c);if(f===void 0&&(f={kind:"pool",pool:a.pool,description:a.description,targets:new Map,unsatisfiedTargets:new Map,firstReadAt:i,firstUnsatisfiedReadAt:null,firstUnsatisfiedControlToken:null},n.set(c,f)),f.kind!=="pool")throw new Error(`entry key ${c} names a pool and a composite`);r(f.targets,a.targetIdentity,a.target),u||(r(f.unsatisfiedTargets,a.targetIdentity,a.target),f.firstUnsatisfiedReadAt??(f.firstUnsatisfiedReadAt=i),f.firstUnsatisfiedControlToken??(f.firstUnsatisfiedControlToken=l))}else{if(!this.compositeRecordsByToken.has(a.compositeToken)||a.innerPools.some(d=>bt(d.token)!==d))return;const c=ut(a.compositeToken);let f=n.get(c);if(f===void 0&&(f={kind:"composite",want:a,includeDistribution:!1,unsatisfiedIncludeDistribution:null,firstReadAt:i,firstUnsatisfiedReadAt:null,firstUnsatisfiedControlToken:null},n.set(c,f)),f.kind!=="composite")throw new Error(`entry key ${c} names a pool and a composite`);f.includeDistribution||(f.includeDistribution=a.request.includeDistribution),u||(f.unsatisfiedIncludeDistribution=(f.unsatisfiedIncludeDistribution??!1)||a.request.includeDistribution,f.firstUnsatisfiedReadAt??(f.firstUnsatisfiedReadAt=i),f.firstUnsatisfiedControlToken??(f.firstUnsatisfiedControlToken=l))}});return[...n.values()]}demandEntries(t){const n=this.poolTokensOfClosingRuns(),r=[];for(const i of t){if(i.kind==="pool"){const{pool:f,description:d}=i,p=this.activeRunIdOfPool.has(f.token);if(!p&&(n.has(f.token)||f.depth===0))continue;const h=[...(p?i.targets:i.unsatisfiedTargets).values()];if(h.length===0)continue;const m=Fh(f,d);r.push({standsAt:p?i.firstReadAt:i.firstUnsatisfiedReadAt,identity:lE(f.token,p?null:m.depth,h),outstanding:{kind:"pool-fold",advancedByRun:p,poolToken:f.token,depth:m.depth,targets:h,poolTokens:[f.token]},demanded:{kind:"pool-fold",request:{pool:m,targets:h}}});continue}const{want:o}=i,a=o.innerPools.map(f=>this.activeRunIdOfPool.has(f.token)),s=a.some(Boolean);if(!s&&o.innerPools.some(f=>n.has(f.token)||f.depth===0))continue;const u=s?i.includeDistribution:i.unsatisfiedIncludeDistribution;if(u===null)continue;const l=Yi(o),c={...o.request,includeDistribution:u,innerPools:o.innerPools.map((f,d)=>Fh(f,o.request.innerPools[d].description))};r.push({standsAt:s?i.firstReadAt:i.firstUnsatisfiedReadAt,identity:cE(o.compositeToken,l.map((f,d)=>a[d]?null:f),u),outstanding:{kind:"barrier-composite",advancedByRun:s,compositeToken:o.compositeToken,innerDepths:l,includeDistribution:u,poolTokens:o.innerPools.map(f=>f.token)},demanded:{kind:"barrier-composite",compositeToken:o.compositeToken,request:c}})}return r.sort((i,o)=>i.standsAt-o.standsAt)}send(t,n){if(this.aid===null)throw new Error("live MC was asked for before any jprob was loaded into the sampling coordinator");const r=this.transport??this.openTransport(this.aid),i=[],o=t.map(({demanded:a})=>this.wireRequest(a,i));r.post({kind:"demand",requests:o,runs:n,catchUpUpdateIntervalMs:sE().updateIntervalMs});for(const a of i)this.describedPoolTokens.add(a);for(const a of n)this.heldRuns.get(a.runId).sent=!0;this.sentRunListing=fE(n),this.outstanding=new Map(t.map(({identity:a,outstanding:s})=>[a,s])),this.requestFrameForAwaitingViews()}wireRequest(t,n){const r=i=>this.describedPoolTokens.has(i.token)?{...i,description:null}:(n.push(i.token),i);return t.kind==="pool-fold"?{kind:"pool-fold",request:{...t.request,pool:r(t.request.pool)}}:{kind:"barrier-composite",compositeToken:t.compositeToken,request:{...t.request,innerPools:t.request.innerPools.map(r)}}}openTransport(t){let n=null;const r=()=>n!==null&&this.transport===n;return n=this.dependencies.createTransport({receive:i=>{r()&&this.receive(i)},fail:i=>{r()&&this.fail(i)}}),this.transport=n,this.describedPoolTokens.clear(),n.post({kind:"load-jprob",aid:t}),n}closeTransport(){const t=this.transport;this.transport=null,this.describedPoolTokens.clear(),this.sentRunListing="",t==null||t.close()}receive(t){try{switch(t.kind){case"pool-snapshot":this.receivePoolSnapshot(t);break;case"composite-snapshot":this.receiveCompositeSnapshot(t);break;case"run-pool-snapshot":this.receiveRunPoolSnapshot(t);break;case"run-composite-snapshot":this.receiveRunCompositeSnapshot(t);break;case"catch-up-snapshot":this.receiveCatchUpSnapshot(t);break;case"run-ended":this.receiveRunEnded(t.runId);break;case"descriptions-needed":this.receiveDescriptionsNeeded(t.poolTokens);break;case"failure":this.fail(`the sampler reported: ${t.message}`);return;default:{const n=t.kind;throw new Error(`the sampler sent a message of unknown kind ${JSON.stringify(n)}`)}}}catch(n){this.fail(qX(n));return}this.requestFrameForAwaitingViews(),this.showState()}receivePoolSnapshot({targets:t,snapshot:n}){const r=lE(n.poolToken,n.depth,t),i=this.outstanding.get(r);this.outstanding.delete(r);const o=bt(n.poolToken);if(o===null)return;if(n.depth>o.depth)throw new Error(`the sampler answered pool ${n.poolToken} at depth ${n.depth}, past its asked depth ${o.depth}`);const a=this.store.applyPoolSnapshot(t,n);i!==void 0&&this.requireAnswerSatisfied(i),this.afterApply(a,Fe(n.poolToken))}receiveCompositeSnapshot({compositeToken:t,includeDistribution:n,snapshot:r}){const i=cE(t,r.innerDepths,n),o=this.outstanding.get(i);this.outstanding.delete(i);const a=this.registeredInnerPoolsOf(t,r.innerDepths.length);if(a===null)return;a.forEach((u,l)=>{if(r.innerDepths[l]>u.depth)throw new Error(`the sampler answered barrier composite ${t} at inner depth ${r.innerDepths[l]} for pool ${u.token}, past its asked depth ${u.depth}`)});const s=this.store.applyCompositeSnapshot(t,r);o!==void 0&&this.requireAnswerSatisfied(o),this.afterApply(s,ut(t))}receiveRunPoolSnapshot({runId:t,targets:n,snapshot:r}){const i=this.heldRuns.get(t);if(i===void 0)return;const o=bt(r.poolToken);if(o===null)return;if(!i.spec.poolTokens.includes(r.poolToken))throw new Error(`run ${t} posted a snapshot of pool ${r.poolToken}, which is not one of its pools`);Q9(o,r.depth);const a=this.store.applyPoolSnapshot(n,r);this.afterApply(a,Fe(r.poolToken),"no flush: a catch-up or run snapshot")}receiveRunCompositeSnapshot({runId:t,compositeToken:n,snapshot:r}){const i=this.heldRuns.get(t);if(i===void 0)return;const o=this.registeredInnerPoolsOf(n,r.innerDepths.length);if(o===null)return;if(!o.some(s=>i.spec.poolTokens.includes(s.token)))throw new Error(`run ${t} posted barrier composite ${n}, none of whose inner pools is one of its pools`);o.forEach((s,u)=>{const l=r.innerDepths[u];if(!(l<=s.depth)){if(!this.poolIsInHeldRun(s.token))throw new Error(`run ${t} posted barrier composite ${n} at inner depth ${l} for pool ${s.token}, past its depth ${s.depth}, and no run holds that pool`);Q9(s,l)}});const a=this.store.applyCompositeSnapshot(n,r);this.afterApply(a,ut(n),"no flush: a catch-up or run snapshot")}receiveCatchUpSnapshot({targets:t,snapshot:n}){const r=bt(n.poolToken);if(r===null)return;if(n.depth>r.depth)throw new Error(`the sampler posted pool ${n.poolToken} catching up at depth ${n.depth}, past its asked depth ${r.depth}`);const i=this.store.applyPoolSnapshot(t,n);i&&this.poolTokensWithReadersDue.add(r.token),this.afterApply(i,Fe(n.poolToken),"no flush: a catch-up or run snapshot")}registeredInnerPoolsOf(t,n){const r=this.compositeRecordsByToken.get(t);if(r===void 0)return null;if(r.innerPoolTokens.length!==n)throw new Error(`barrier composite ${t} was answered with ${n} inner depths for ${r.innerPoolTokens.length} inner pools`);const i=r.innerPoolTokens.map(o=>bt(o));return i.every(o=>o!==null)?i:null}receiveRunEnded(t){const n=this.heldRuns.get(t);if(n!==void 0){if(this.heldRuns.delete(t),n.phase==="active")this.releasePoolsOfRun(n);else for(const r of n.spec.poolTokens)this.poolTokensWithReadersDue.add(r);this.requestFrame(),this.requestFlush()}}receiveDescriptionsNeeded(t){const n=new Set(t);for(const r of n)this.describedPoolTokens.delete(r);for(const[r,i]of this.outstanding)i.poolTokens.some(o=>n.has(o))&&this.outstanding.delete(r);this.requestFlush()}requireAnswerSatisfied(t){if(!(t.kind==="pool-fold"?t.targets.every(r=>this.store.poolTargetIsSatisfiedAt(t.poolToken,t.depth,r)):this.store.compositeIsSatisfiedAt(t.compositeToken,t.innerDepths,t.includeDistribution))){const r=t.kind==="pool-fold"?`pool ${t.poolToken} at depth ${t.depth}`:`barrier composite ${t.compositeToken} at inner depths ${JSON.stringify(t.innerDepths)}`;throw new Error(`the sampler's answer for ${r} does not satisfy the request it answers (a target missing, or its distribution, where it was asked for), so it would be asked for again forever`)}}afterApply(t,n,r="flush: an answer"){t&&(this.touchedEntryKeys.add(n),this.requestFrame()),this.trimStore(),r==="flush: an answer"&&this.requestFlush()}trimStore(){const t=new Set;for(const n of vi())for(const r of n.wants)t.add(eE(r));this.store.trimToBudget(n=>t.has(n))}requestFrame(){this.frameScheduled||this.disposed||(this.frameScheduled=!0,this.dependencies.requestAnimationFrame(()=>this.runFrame()))}requestFrameForAwaitingViews(){this.viewsAwaitingRerun.size>0&&this.requestFrame()}countRequestEntryKeysInFlight(){const t=new Set;for(const n of this.outstanding.values())n.advancedByRun||t.add(n.kind==="pool-fold"?Fe(n.poolToken):ut(n.compositeToken));return t}runFrame(){if(this.frameScheduled=!1,this.disposed)return;const t=this.touchedEntryKeys;this.touchedEntryKeys=new Set;const n=this.viewsAwaitingRerun;this.viewsAwaitingRerun=new Map;const r=this.poolTokensWithReadersDue;this.poolTokensWithReadersDue=new Set;const i=this.poolTokensWithReadersRenderedBeforeDue;this.poolTokensWithReadersRenderedBeforeDue=new Map;const o=this.countRequestEntryKeysInFlight(),a=aE();let s=null;for(const u of vi()){if(u.lastRenderSerial>a||!u.container.isConnected)continue;const l=u.wants.map(eE),c=n.get(u),f=r.size>0&&u.wants.some(p=>DX(p,r))||i.size>0&&u.wants.some(p=>ia(p).some(h=>u.lastRenderSerial<(i.get(h.token)??Number.NEGATIVE_INFINITY)));if(f||l.some(p=>t.has(p))||c!==void 0&&u.lastRenderSerial<=c){if(!f&&l.some(p=>o.has(p))){this.viewsAwaitingRerun.set(u,c??a);continue}try{this.dependencies.runViewRerun(()=>LX(u))}catch(p){s??(s=p)}}}if(this.showState(),s!==null)throw s}fail(t){const n=new Error(`${NX}: ${t}`);this.closeTransport(),this.outstanding.clear();for(const i of this.heldRuns.values())this.releasePoolsOfRun(i);this.heldRuns.clear(),this.poolTokensAboutToGetTheirFirstRun.clear();for(const i of this.poolTokensCatchingUp)this.poolTokensWithReadersDue.add(i);this.poolTokensCatchingUp=new Set,this.poolTokensReadCatchingUp.clear(),this.poolTokensWithReadersRenderedBeforeDue.clear();const r={kind:"error",message:n.message};for(const i of this.gatheredWants(vi()))if(i.kind==="pool"){if(i.unsatisfiedTargets.size===0)continue;const{pool:o}=i,a=[...i.unsatisfiedTargets.values()];this.store.applyPoolSnapshot(a,{poolToken:o.token,depth:o.depth,outcomes:a.map(()=>r)}),this.touchedEntryKeys.add(Fe(o.token))}else{if(i.unsatisfiedIncludeDistribution===null)continue;const{want:o}=i;this.store.applyCompositeSnapshot(o.compositeToken,{innerDepths:Yi(o),outerDrawCount:null,joint:r,independent:o.request.outer.description.arms==="pair"?r:null}),this.touchedEntryKeys.add(ut(o.compositeToken))}(this.touchedEntryKeys.size>0||this.poolTokensWithReadersDue.size>0)&&this.requestFrame(),this.requestFrameForAwaitingViews(),this.showState(),this.dependencies.devMode&&this.dependencies.reportDevFailure(n)}compositeTokenFor(t){const{target:n,innerPools:r,outer:i}=t,o=Object.keys(n.cparamValues).sort().map(l=>[l,n.cparamValues[l]]),a=dt([n.formId,o,n.targetKey,r.map(l=>l.token),i.poolKeyPartsBeforeInnerStage,i.poolKeyPartsAfterInnerStage,i.budgetRole]),s=this.compositeTokensByIdentity.get(a);if(s!==void 0)return this.compositeTokensByIdentity.delete(a),this.compositeTokensByIdentity.set(a,s),s;const u=`${MX}${this.nextCompositeTokenNumber++}`;for(this.compositeTokensByIdentity.set(a,u),this.compositeRecordsByToken.set(u,{identity:a,innerPoolTokens:r.map(l=>l.token)});this.compositeTokensByIdentity.size>OX;){const[l,c]=this.compositeTokensByIdentity.entries().next().value;this.compositeTokensByIdentity.delete(l),this.compositeRecordsByToken.delete(c)}return u}refreshCompositeTokenRecency(t){const n=this.compositeRecordsByToken.get(t);n!==void 0&&(this.compositeTokensByIdentity.delete(n.identity),this.compositeTokensByIdentity.set(n.identity,t))}forgetEverythingSampled(){this.samplingGeneration+=1,this.store.clear(),this.compositeTokensByIdentity.clear(),this.compositeRecordsByToken.clear(),this.outstanding.clear(),this.touchedEntryKeys.clear(),this.viewsAwaitingRerun.clear(),this.poolTokensWithReadersDue.clear(),this.heldRuns.clear(),this.activeRunIdOfPool.clear(),this.poolsTakenByARun=new WeakSet,this.poolTokensAboutToGetTheirFirstRun.clear(),this.poolTokensCatchingUp=new Set,this.poolTokensReadCatchingUp.clear(),this.poolTokensWithReadersRenderedBeforeDue.clear(),this.sentRunListing=""}showState(){const t=this.isIdle()?"idle":"sampling";t!==this.shownState&&(this.shownState=t,this.dependencies.documentElement.setAttribute(kX,t))}}let an=null;function Aoe(e){an!==null&&an!==e&&an.dispose(),an=e}function br(){if(an===null)throw new Error("no live-MC sampling coordinator is installed (main.ts installs the app's; a test installs one with loadLiveMcTestJprob)");return an}const aA="Bounds are not available for this formula: no interval for it follows from bounds responses. Its point and distribution results are unaffected.";function Wn(e,t,n,r){if(t.length!==e.length)throw new Error(`resolveTrialRecordInputs: expected one weight per trial (${e.length}); got ${t.length}`);return n==="point"?{mode:n,trialWeights:t,trials:e.map(i=>i.point)}:n==="bounds"?{mode:n,trialWeights:t,trials:e.map(i=>i.bounds)}:{mode:n,ranges:r,trialWeights:t,trials:e.map(i=>{const o={};for(const[a,s]of Object.entries(i.sample))oS(s)&&(o[a]=eB(s));return{specs:o,lloads:i.lloads??null}})}}const qh={"first-draws":Object.freeze({kind:"sampling",awaiting:"first-draws"}),"catch-up":Object.freeze({kind:"sampling",awaiting:"catch-up"})};function yn(e){return qh[e]}function _2(e){return e===qh["first-draws"]||e===qh["catch-up"]}const Jr=Object.freeze({kind:"unsampled"});function b2(e){return e===Jr}function sA(e){return _2(e)||b2(e)}function g2(e){if(e.liveSummaryDrawCount===null)throw new Error(`a ${e.provenance} MC result has no live draw count`);return e.liveSummaryDrawCount}class dE extends Error{constructor(t,n){super(`no trial has ${t} data for ${JSON.stringify(n)}`),this.missingParams=n,this.name="NoUsableTrialsError"}}function BX(e){return e.arms??"joint"}const uA="joint";function Toe(e,t,n){switch(t.mode){case"point":{const r=Bt(t.mode,t.trials,t.trialWeights,e.params,n.onIncompleteTrial),i=r.trials.map(a=>e.params.map(s=>a[s])),o=i.map(a=>e.point(a));return{kind:"point",value:Um(o,r.weights),perTrial:o,perTrialInputs:i}}case"bounds":{const r=Bt(t.mode,t.trials,t.trialWeights,e.params,n.onIncompleteTrial),i=r.trials.map(u=>e.params.map(l=>u[l])),o=e.bounds;if(!o)throw new Error(aA);const{lo:a,hi:s}=Yq(i,o);return{kind:"bounds",lo:a,hi:s,tightness:e.boundsTightness??"loose",trialCount:r.trials.length}}case"sample":return HX(e,t,n)}}function Roe(e,t,n){Bt(t.mode,t.trials,t.trialWeights,e.params,n)}function Bt(e,t,n,r,i){const o=s=>e==="sample"?s.specs:s;if(t.length===0)throw i==="skip"?new dE(e,r):new Error(`record has no trials with ${e} data`);if(i==="error"){for(const[s,u]of t.entries()){const l=r.filter(c=>o(u)[c]===void 0);if(l.length>0)throw new Error(`Missing required ${e} input(s) for trial ${s+1}: ${JSON.stringify(l)}`)}return{trials:t,weights:n}}const a=t.map((s,u)=>r.every(l=>o(s)[l]!==void 0)?u:-1).filter(s=>s>=0);if(a.length===0){const s=r.filter(u=>o(t[0])[u]===void 0);throw new dE(e,s)}return{trials:a.map(s=>t[s]),weights:a.map(s=>n[s])}}function HX(e,t,n){return n.precomputed?Hh(n.precomputed.stats,e.locationStatistic):fA(e,t,n).read()}function gr(e,t){return{mcPoolToken:e,read:()=>t(e),readForControl:t}}function lA(e,t){if(e.precomputed)throw new Error(`${t} was given a precomputed result, which needs no preparing: evaluate it with evaluateForm`)}function cA(e,t,n){if(t.mode!=="sample")throw new Error(`a live sample evaluation requires sample inputs, got ${t.mode}`);return lA(n,"a live sample evaluation"),fA(e,t,n)}function fA(e,t,n){const r=y2(n,"live sample evaluation"),i=n.includeLiveDistribution;if(i===void 0)throw new Error("live sample evaluation requires opts.includeLiveDistribution: whether the result is plotted");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const o=Bt(t.mode,t.trials,t.trialWeights,e.params,n.onIncompleteTrial),a=BX(n);if(e.sampleStage!==void 0){const c=gA(e,e.sampleStage,t,o,r,a,i);return gr(c.mcPoolToken,f=>{const d=c.read(f);return sA(d)?d:d.resultOf(d.joint)})}const s=aa(e),u=ua(sa,oa(t,o,a),r),l=E2(u,[xh("joint",s,i)]);return gr(u.pool.token,c=>Bh(w2(l,c)[0],u,o.trials.length))}function dA(e,t){const{statistics:n}=e;return{kind:"mc",location:n.location,median:n.median,p5:n.p5,p95:n.p95,liveDistribution:e.distribution,liveDistributionNotAsked:e.distributionNotAsked,liveSummaryDrawCount:n.count,storedDistribution:null,provenance:"live",...t}}function Bh(e,t,n){return e.status==="sampling"?yn(e.awaiting):e.status==="unsampled"?Jr:dA(mA(e.outcome),{mcIters:pA(t.pool,e.depth),barrierInnerIters:null,mcPoolToken:t.pool.token,trialCount:n,liveStatus:e.status})}function pA(e,t){if(t>e.depth)throw new Error(`pool ${e.token}: a result at depth ${t}, past its asked depth ${e.depth}`);return rX(e.budgetRole,t)}function y2(e,t){if(e.mcBudgetRole===void 0)throw new Error(`a ${t} requires opts.mcBudgetRole, which sizes and keys its pools`);return e.mcBudgetRole}function Hh(e,t){const n=zt(e);return Hm(n,t,"a stored location statistic"),{kind:"mc",location:n,median:e.median,p5:e.p5,p95:e.p95,liveDistribution:null,liveDistributionNotAsked:!1,liveStatus:null,liveSummaryDrawCount:null,storedDistribution:e.quantile_table_mixture??null,provenance:"precomputed",mcIters:e.mc_iters,barrierInnerIters:null,mcPoolToken:null,trialCount:0}}function xX(e,t){return{independent:Hh(e.independent,t),joint:Hh(e.joint,t)}}function UX(e,t,n){if(t.mode!=="sample")throw new Error(`joint-dependence comparison requires sample inputs, got ${t.mode}`);if(n.precomputed)throw new Error("a live joint-dependence comparison was given a precomputed pair, which needs no preparing: evaluate it with evaluateFormDependenceComparison");const r=y2(n,"live joint-dependence comparison");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=Bt(t.mode,t.trials,t.trialWeights,e.params,n.onIncompleteTrial);if(e.sampleStage!==void 0){const u=gA(e,e.sampleStage,t,i,r,"pair",jp);return gr(u.mcPoolToken,l=>{const c=u.read(l);if(sA(c))return c;if(c.independent===null)throw new Error(`form ${e.key}: the barrier path returned no independent arm`);const f=c.resultOf(c.joint);return{independent:c.resultOf(c.independent),joint:f}})}const o=aa(e),a=ua(sa,oa(t,i,"pair"),r),s=E2(a,[xh("joint",o,jp),xh("independent",o,jp)]);return gr(a.pool.token,u=>{const l=w2(s,u);if(l.some(h=>h.status==="unsampled"))return Jr;for(const h of l)if(h.status==="sampling")return yn(h.awaiting);const[c,f]=l;if(c.depth!==f.depth)return yn("catch-up");const d=Bh(l[0],a,i.trials.length);return{independent:Bh(l[1],a,i.trials.length),joint:d}})}const jp=!0;function GX(e,t,n){if(t.mode!=="sample")throw new Error(`live sample MC key requires sample inputs, got ${t.mode}`);if(e.sampleStage!==void 0)throw new Error(`live sample MC key is not defined for E[·] barrier form ${e.key}`);const r=Bt(t.mode,t.trials,t.trialWeights,e.params,n.onIncompleteTrial),{contentParts:i}=oa(t,r,n.arms);return bA(S2(sa,n.mcBudgetRole),i)}function hA(e,t,n){return e.sampleStage===void 0?GX(e,t,n):["barrier-form",e.key,t,n.onIncompleteTrial,zi,n.arms,vA,n.mcBudgetRole]}function oa(e,t,n){const{trials:r,weights:i}=t,o=Object.keys(r[0].specs).filter(l=>r.every(c=>c.specs[l]!==void 0)).sort(),a=r.map(l=>o.map(c=>l.specs[c])),s=o.map(l=>e.ranges[l]??null),u=r.map(l=>l.lloads);return{contentParts:[o,a,s,u,_A,i,zi,n],description:{svarNames:o,perTrialSpecs:a,svarRanges:s,perTrialLloads:u,trialWeights:i,arms:n}}}function WX(e,t,n){if(lA(n,"a streaming mean evaluation"),t.mode!=="sample")throw new Error(`streaming mean evaluation requires sample inputs, got ${t.mode}`);if(e.sampleStage!==void 0)throw new Error(`streaming mean evaluation of ${e.key} is not supported for formulas with E[·] aggregation barriers`);const r=y2(n,"streaming mean evaluation");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=Bt(t.mode,t.trials,t.trialWeights,e.params,n.onIncompleteTrial),o=aa(e),a=ua(KX,oa(t,i,uA),r),s=E2(a,[{accumulation:"running-statistic",target:o}]);return gr(a.pool.token,u=>{const[l]=w2(s,u);if(l.status==="sampling")return yn(l.awaiting);if(l.status==="unsampled")return Jr;const{outcome:c}=l;if(c.kind==="error")throw new Error(c.message);if(c.kind!=="running-statistic")throw new Error(`the live-MC result store holds a ${c.kind} outcome for a running statistic`);return{location:c.location,n:c.drawCount,standardError:c.standardError,mcPoolToken:a.pool.token,liveStatus:l.status}})}function aa(e){if(e.formEntryRef===null)throw new Error(`target ${e.key} was built from no form registry entry, so the live-MC sampler cannot rebuild it: only a target built by formEntryEvalTarget can be sample-evaluated live`);return{...e.formEntryRef,targetKey:e.key}}function xh(e,t,n){return{accumulation:"form-draws",arm:e,target:t,includeDistribution:n}}function E2(e,t){return br().preparePoolTargets(e.pool,e.description,t)}function w2(e,t){return br().readPreparedPoolTargets(e,t)}function mA(e){switch(e.kind){case"error":throw new Error(e.message);case"form-draws":return{statistics:e.summary,distribution:e.summary.distribution??null,distributionNotAsked:!1};case"form-draw-statistics":return{statistics:e.statistics,distribution:null,distributionNotAsked:!0};case"running-statistic":throw new Error("the live-MC result store holds a running statistic for a form's draws")}}const vA="budget-role",zi="arms",_A="weights",VX="barriers",XX="lloads",sa="copula-matrix",jX="barrier-inner-matrix",KX="stream-mean";function S2(e,t){return{prefix:[`${e}-pool`],suffix:[vA,t]}}function bA(e,t){return[...e.prefix,...t,...e.suffix]}function ua(e,t,n){return{pool:lX(bA(S2(e,n),t.contentParts),n),description:t.description}}function gA(e,t,n,r,i,o,a){const s=e.barrierRegistry;if(s===void 0)throw new Error(`form ${e.key} contains an E[·] barrier but no barrier registry was provided — evaluating it without one would silently compute per-draw (pre-E) semantics`);const u=t.params.filter(g=>g.barrier);for(const g of u)if(s[g.name]===void 0)throw new Error(`form ${e.key}: barrier ${g.name} is not in the barrier registry`);const l=pC(t,s);for(const g of r.trials){const E=Kq(g.lloads,[l]);if(E!==null)throw new Error(`form ${e.key}: ${E}`)}const c=aa(e),f=[...new Set(Object.values(s).flatMap(g=>g.params))].sort(),d=r.trials.map(g=>{const E=f.filter(I=>g.specs[I]!==void 0),A=E.map(I=>g.specs[I]),$=E.map(I=>n.ranges[I]??null),C=t9(g.lloads,E);return ua(jX,{contentParts:[E,A,$,C,zi,o],description:{svarNames:E,perTrialSpecs:[A],svarRanges:$,perTrialLloads:[C],trialWeights:[1],arms:o}},i)}),p=Object.keys(r.trials[0].specs).filter(g=>r.trials.every(E=>E.specs[g]!==void 0)).sort(),h=r.trials.map(g=>p.map(E=>g.specs[E])),m=p.map(g=>n.ranges[g]??null),v=r.trials.map(g=>t9(g.lloads,l.outside)),_=S2(sa,i),b=br().prepareBarrierComposite({target:c,includeDistribution:a,innerPools:d.map(g=>Fh(g.pool,g.description)),outer:{description:{svarNames:p,perTrialSpecs:h,svarRanges:m,perTrialLloads:v,trialWeights:r.weights,arms:o},poolKeyPartsBeforeInnerStage:[..._.prefix,p,h,m,_A,r.weights,VX,u.map(g=>g.name)],poolKeyPartsAfterInnerStage:[XX,v,zi,o,..._.suffix],budgetRole:i}},d.map(g=>g.pool)),y=Z$(d.map(g=>g.pool.token));return{mcPoolToken:y,read:g=>{const E=br().readPreparedBarrierComposite(b,g);if(E.status==="sampling")return yn(E.awaiting);if(E.status==="unsampled")return Jr;const A=Math.min(...d.map(($,C)=>pA($.pool,E.innerDepths[C])));return{joint:E.joint,independent:E.independent,resultOf:$=>{const C=mA($);if(E.outerDrawCount===null)throw new Error(`form ${e.key}: the live-MC result store holds a result with no outer stage drawn`);return dA(C,{mcIters:E.outerDrawCount,barrierInnerIters:A,mcPoolToken:y,trialCount:r.trials.length,liveStatus:E.status})}}}}}function YX(e,t,n,r){const i=gm(t,n);if(i.bounds&&!i.boundsTightness)throw new Error(`form ${e} has a bounds implementation but no boundsTightness — regenerate form_fns`);return{key:mC(e,t,n),params:i.params,valueRange:i.valueRange,locationStatistic:Zw(i.valueRange),point:i.point,bounds:i.bounds??null,boundsTightness:i.bounds?i.boundsTightness:null,sampleStage:i.sampleStage,barrierRegistry:r&&hC(r,n),formEntryRef:{formId:e,cparamValues:{...n}}}}const Ioe=["band","xRange"],Nt=0,Jt=100,la={band:{lo:25,hi:75},xRange:{lo:Nt,hi:Jt}},Uh=3,zX=100,JX=new RegExp(`^(?:\\d+(?:\\.\\d{0,${Uh}})?|\\.\\d{1,${Uh}})$`);function Ji(e){if(!JX.test(e))return null;const t=Number(e);return t>=Nt&&t<=Jt?t:null}function yr(e){return String(e)}function pE(e){return typeof e=="number"&&Ji(yr(e))===e}function Loe(e){if(typeof e!="object"||e===null||Array.isArray(e)||Object.keys(e).length!==2)return!1;const{lo:n,hi:r}=e;return pE(n)&&pE(r)&&n<=r}const yA="-";function Coe(e){const t=e.split(yA);if(t.length!==2)return null;const n=Ji(t[0]),r=Ji(t[1]);return n===null||r===null||n>r?null:{lo:n,hi:r}}function koe(e){return`${yr(e.lo)}${yA}${yr(e.hi)}`}function Noe(e,t){return e.lo===t.lo&&e.hi===t.hi}const EA=1;function Ooe(e,t){const n=EA,r=t===1?(Math.floor(e/n)+1)*n:(Math.ceil(e/n)-1)*n;return Math.min(Jt,Math.max(Nt,r))}function QX(e,t,n){const r=t==="lo"?{lo:n,hi:e.hi}:{lo:e.lo,hi:n};return r.lo<=r.hi?r:null}function Moe(e,t,n){return t==="lo"?{lo:Math.min(n,e.hi),hi:e.hi}:{lo:e.lo,hi:Math.max(n,e.lo)}}function $2(e){return e/zX}function En(e){return e===Nt||e===Jt}function wA(e){return`${Number((e.hi-e.lo).toFixed(Uh))}%`}const Doe={band:"densityBandPercentiles",xRange:"densityXRangePercentiles"};function SA(e){return{band:e.densityBandPercentiles,xRange:e.densityXRangePercentiles}}const ca="density-percentile-range",A2="data-density-percentile-range",fa="data-density-percentile-end",ZX="density-percentile-range-text",$A="density-percentile-range-curves",T2="density-percentile-field",ej="density-percentile-field-invalid",AA="density-percentile-slider",R2="density-percentile-slider-handle",tj="density-percentile-slider-lo-on-top",TA="--density-percentile-lo",RA="--density-percentile-hi",IA="density-band-mass-share",nj=1;function rj(e){return`.${ca}[${A2}="${e}"]`}const Qi={band:{singleCurve:"The shaded band runs between these two percentiles of the curve’s own distribution, so it holds the share of the probability mass in bold. It is not the interval the summary beside the plot reports. 0 and 100 stand for the plot’s own edges. Applies to every density plot that has these controls.",severalCurves:"Each shaded band runs between these two percentiles of its own curve’s distribution, so it holds the share of that curve’s probability mass in bold. It is not the interval the summary beside the plot reports. 0 and 100 stand for the plot’s own edges. Applies to every density plot that has these controls."},xRange:{singleCurve:"Narrows the plot’s x-axis to run between these two percentiles of the curve’s own distribution. 0 and 100 stand for the plot’s standard ends, so 0 to 100 is the standard range. Applies to every density plot that has these controls.",severalCurves:"Narrows the plot’s x-axis to the smallest range that holds every curve between these two percentiles of its own distribution. 0 and 100 stand for the plot’s standard ends, so 0 to 100 is the standard range. Applies to every density plot that has these controls."}},LA={band:{lo:"Shaded band’s lower percentile",hi:"Shaded band’s upper percentile"},xRange:{lo:"X-axis’s lower percentile",hi:"X-axis’s upper percentile"}};function CA(e){return`${Math.max(e.length,nj)}ch`}function Zi(e,t,n){const r=yr(n);return`<input class="${T2}" ${fa}="${t}" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" aria-label="${V(LA[e][t])}" value="${V(r)}" style="width: ${CA(r)}">`}function ij(e,t){const n=r=>`<input class="${R2}" ${fa}="${r}" type="range" min="${Nt}" max="${Jt}" step="${EA}" value="${t[r]}" aria-label="${V(LA[e][r])}">`;return`<span class="${AA}" style="${TA}: ${t.lo}; ${RA}: ${t.hi}">`+n("lo")+n("hi")+"</span>"}function kA(e,t,n){return`<div class="${ca}" ${A2}="${e}" title="${V(t)}">`+ij(e,la[e])+`<span class="${ZX}">${n}</span></div>`}function NA(e){return`<span class="${$A}">${H(e)}</span>`}function OA(e){const t=la.band;return kA("band",e===""?Qi.band.singleCurve:Qi.band.severalCurves,`Shaded: the probability mass between percentiles ${Zi("band","lo",t.lo)} and ${Zi("band","hi",t.hi)} (<strong class="${IA}">${H(wA(t))}</strong>)${e===""?"":` of ${NA(e)}`}.`)}function MA(e){const t=la.xRange;return kA("xRange",e===""?Qi.xRange.singleCurve:Qi.xRange.severalCurves,`X-axis: spans percentiles ${Zi("xRange","lo",t.lo)} to ${Zi("xRange","hi",t.hi)}${e===""?"":` of ${NA(e)}`}.`)}function hE(e,t){const n=e.querySelector(`.${$A}`);if(n===null)throw new Error("density percentile range row names no curves");n.textContent=t}function DA(e){const t=e.getAttribute(A2);if(t!=="band"&&t!=="xRange")throw new Error(`density percentile range row has kind ${JSON.stringify(t)}`);return t}function PA(e){const t=e.getAttribute(fa);if(t!=="lo"&&t!=="hi")throw new Error(`density percentile range input has end ${JSON.stringify(t)}`);return t}function Poe(e){if(!(e instanceof HTMLInputElement))return null;const t=e.classList.contains(R2);if(!t&&!e.classList.contains(T2))return null;const n=e.closest(`.${ca}`);return n===null?null:{input:e,row:n,kind:DA(n),end:PA(e),isSliderHandle:t}}function oj(e){return[...e.querySelectorAll(`.${ca}`)]}function Gh(e,t){return e.querySelector(rj(t))}function aj(e){return DA(e)}function sj(e,t){const n=e.querySelector(`input.${T2}[${fa}="${t}"]`);if(n===null)throw new Error(`density percentile range row lacks its ${t} field`);return n}function uj(e,t){e.style.width=CA(e.value),e.classList.toggle(ej,!t),e.setAttribute("aria-invalid",String(!t))}function Foe(e,t){const n=Ji(e.input.value);return n===null?null:QX(t,e.end,n)}function lj(e,t){e.style.setProperty(TA,String(t.lo)),e.style.setProperty(RA,String(t.hi));for(const r of e.querySelectorAll(`.${R2}`))r.value=String(t[PA(r)]);const n=(Nt+Jt)/2;e.classList.toggle(tj,t.lo>n)}function FA(e,t,n=null){for(const o of["lo","hi"]){const a=sj(e,o);a!==n&&(a.value=yr(t[o])),uj(a,!0)}const r=e.querySelector(`.${AA}`);if(r===null)throw new Error("density percentile range row lacks its slider");lj(r,t);const i=e.querySelector(`.${IA}`);i!==null&&(i.textContent=wA(t))}const wn="data-density-curve-scope",cj="|",eo=new Map,qA=new Set;function fj(e,t){return`${e}${cj}${t}`}function da(e){return eo.get(e)??qA}function dj(e,t){let n=eo.get(e);n===void 0&&(n=new Set,eo.set(e,n)),n.has(t)?n.delete(t):n.add(t)}function qoe(){eo.clear()}function I2(e){var n;const t=(n=e.closest(`[${wn}]`))==null?void 0:n.getAttribute(wn);return t==null?qA:da(t)}const pa="density-plot",pj="density-overlay-plot",Wh="density-plot-header",hj="plot-legend-title",mj="plot-legend-text";function vj(e){const t=typeof e.label=="string"?H(e.label):e.label.html;return e.color===null?`<span class="${mj}">${t}</span>`:`<span style="--density-legend-color: ${V(e.color)}; --density-legend-style: ${e.dashed?"dashed":"solid"}">${t}</span>`}const _j="density-curve-toggle",BA="density-curve-hidden",Qr="data-density-curve",HA="data-density-curve-band-shaded",mE={shown:"Hide this curve",hidden:"Show this curve"};function xA(e){return{pressed:String(!e),title:e?mE.hidden:mE.shown}}function bj(e,t){if(e.color===null)throw new Error("a density plot curve legend entry has no swatch");const n=xA(t);return`<button type="button" class="${_j}${t?` ${BA}`:""}" ${Qr}="${V(e.curveKey)}" ${HA}="${e.bandShaded}" aria-pressed="${n.pressed}" title="${V(n.title)}" style="--density-legend-color: ${V(e.color)}; --density-legend-style: ${e.dashed?"dashed":"solid"}">${H(e.label)}</button>`}function UA(e,t,n,r){const i=e.map((o,a)=>`<div class="density-overlay-legend-row">${(a===0&&n!==null?`<span class="${hj}">${H(n)}:</span>`:"")+o.map(r).join("")}</div>`).join("");return`<div class="density-overlay-legend" aria-label="${V(t)}">${i}</div>`}function gj(e,t,n=null){return UA([e],t,n,vj)}function GA(e,t){return`the “${e.label}” curve${t.has(e.curveKey)?" (hidden)":""}`}function WA(e,t){if(e.length===1)return GA(e[0],t);const r=e.filter(i=>!t.has(i.curveKey)).filter(i=>i.bandShaded).map(i=>`“${i.label}”`);return r.length===0?"each shaded curve (none shown)":r.length===e.length?"each curve":r.length===1?`the ${r[0]} curve`:`the ${r.slice(0,-1).join(", ")} and ${r.at(-1)} curves`}function VA(e,t){return e.length===1?GA(e[0],t):e.some(n=>t.has(n.curveKey))?"every curve, hidden ones included":"every curve"}function yj(e,t){return e.some(n=>n.bandShaded)?OA(WA(e,t))+MA(VA(e,t)):""}function ha(e){return`<canvas id="${V(e)}" width="400" height="200"></canvas>`}function XA(e){return`<div class="${pa}">`+ha(e)+OA("")+MA("")+"</div>"}function jA(e,t,n){const r=t.flat();if(new Set(r.map(a=>a.curveKey)).size!==r.length)throw new Error(`density plot legend repeats a curve key: ${r.map(a=>a.curveKey).join(", ")}`);const o=da(n);return`<div class="${pa} ${pj}" ${wn}="${V(n)}"><div class="${Wh}">`+UA(t,"Density curve legend",null,a=>bj(a,o.has(a.curveKey)))+"</div>"+ha(e)+yj(r,o)+"</div>"}function Boe(e){return e instanceof Element?e.closest(`[${Qr}]`):null}function Ej(e,t){return[...e.querySelectorAll(`[${Qr}]`)].find(n=>L2(n)===t)??null}function L2(e){const t=e.getAttribute(Qr);if(t===null)throw new Error("density curve toggle has no curve key");return t}function wj(e){const t=I2(e),n=[...e.querySelectorAll(`[${Qr}]`)],r=n.map(a=>({label:a.textContent??"",bandShaded:a.getAttribute(HA)==="true",curveKey:L2(a)}));n.forEach((a,s)=>{const u=t.has(r[s].curveKey),l=xA(u);a.classList.toggle(BA,u),a.setAttribute("aria-pressed",l.pressed),a.title=l.title});const i=Gh(e,"band");i!==null&&hE(i,WA(r,t));const o=Gh(e,"xRange");o!==null&&hE(o,VA(r,t))}class KA extends Error{}const YA=new WeakMap;function C2(e){return JSON.stringify(e)}function Sj(e,t){const n=YA.get(e);if(n===void 0||n.signature!==t)return!1;const r=e.childNodes;return r.length!==n.nodes.length?!1:n.nodes.every((i,o)=>r[o]===i)}function k2(e,t,n){if(Sj(e,t))try{return n.patch(),"patched"}catch(r){if(!(r instanceof KA))throw r;console.error(`${r.message}; building the view afresh`)}return n.build(),YA.set(e,{signature:t,nodes:[...e.childNodes]}),"built"}function vE(e,t){const n=e.querySelector(t);if(n===null)throw new KA(`a live view's patch found no ${t} where its build put one`);return n}function _E(e,t){const n=document.createElement("template");n.innerHTML=t,n.innerHTML!==e.innerHTML&&(e.innerHTML=t)}const $j="density-summary-fold",Aj=!0,Tj="density-summaries-across",N2="density-result-row",zA="density-result-text";function JA(e){return e.closest(`.${N2}`)}function Rj(e,t){return`${e}-${t}-summary-fold`}const QA="data-density-summary-label",ZA="data-density-summary-body";function Ij(e,t){const n=`${QA}="${e.kind}"`;if(e.bodyHtml===null)return`<div class="result-label" ${n}>${e.labelHtml}</div>`;const r=Rj(t.canvasId,e.kind),i=t.foldOpenById[r]??Aj;return`<details id="${V(r)}" class="${$j} ${et}"${i?" open":""}><summary class="result-label" ${n}>${e.labelHtml}</summary><div ${ZA}="${e.kind}">${e.bodyHtml}</div></details>`}function O2(e,t,n){if(e.length===0)throw new Error("a density result row needs at least one summary section");const r=e.map(i=>i.kind);if(new Set(r).size!==r.length)throw new Error(`a density result row shows one section of each kind, got ${r.join(", ")}`);return`<div class="${N2}"><div class="${zA}">`+e.map(i=>Ij(i,n)).join("")+`</div>${t}</div>`}function eT(e){return e.map(t=>[t.kind,t.bodyHtml!==null])}function tT(e,t){for(const n of t)_E(vE(e,`[${QA}="${n.kind}"]`),n.labelHtml),n.bodyHtml!==null&&_E(vE(e,`[${ZA}="${n.kind}"]`),n.bodyHtml)}function Lj(e){const t=e.querySelector(`:scope > .${zA}`);if(t===null)return!0;const n=t.getBoundingClientRect();return n.width===0&&n.height===0?!0:[...e.children].some(r=>r!==t&&r.getBoundingClientRect().left>=n.right)}function bE(e){e.classList.toggle(Tj,!Lj(e))}function M2(e){for(const t of e.querySelectorAll(`.${N2}`)){if(bE(t),typeof ResizeObserver>"u")continue;const n=new ResizeObserver(()=>{requestAnimationFrame(()=>{bE(t)})});n.observe(t);for(const r of t.children)n.observe(r)}}const Cj="#666",kj=1,wt=5,Nj=3;function nT(e){return Math.floor(e)+.5}function rT(e,t,n,r,i){e.strokeStyle=Cj,e.lineWidth=kj,e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.stroke()}function Vh(e,t,n,r){const i=nT(t);rT(e,i,n,i,n+r)}function Oj(e,t,n,r){const i=nT(n);rT(e,t,i,t-r,i)}function Mj(e,t,n){const r=t/2;return Math.min(Math.max(e,r),n-r)}const D2=-Math.PI/4,gE=Math.abs(Math.sin(D2)),yE=Math.cos(D2);function iT(e,t){return{left:e*yE,right:t*gE,below:e*gE+t*yE}}function oT(e,t,n,r){e.save(),e.translate(n,r),e.rotate(D2),e.textAlign="right",e.textBaseline="top",e.fillText(t,0,0),e.restore()}const Dj=5,aT={lo:null,hi:null},Pj=5,Fj=[0,.25,.5,.75,1];function ma(e,t){return{value:e,label:t===null?e.toFixed(2):t(e)}}function P2(e,t,n){const r=Dj/100*(t-e),i=n.lo===null?e-r:Math.max(e-r,Math.min(n.lo,e)),o=n.hi===null?t+r:Math.min(t+r,Math.max(n.hi,t));return[i,o]}function Er(e){if(e===void 0)return{paddedWithin:aT};const t=zw(e);return t!==null?{fixed:t}:{paddedWithin:{lo:e.lo,hi:e.hi}}}function F2(e,t,n){return"fixed"in e?e.fixed:P2(t,n,e.paddedWithin)}function qj(e){return Math.max(0,-Math.floor(Math.log10(e)))}function Bj(e){const t=10**Math.floor(Math.log10(e)),n=e/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function to(e,t,n=null){const r=Hj(e,t);return n===null?r:r.map(i=>({value:i.value,label:n(i.value)}))}function Hj(e,t){if(e===0&&t===1)return Fj.map(a=>({value:a,label:a.toFixed(2)}));if(t<=e)return[ma(e,null)];const n=Bj((t-e)/Pj),r=qj(n),i=[],o=n*1e-9;for(let a=Math.ceil(e/n)*n;a<=t+o;a+=n){const s=Math.abs(a)<o?0:a;i.push({value:s,label:s.toFixed(r)})}return i}const xj="#4d4d4d",Uj=1.5,Gj=.72;function Ft(e,t,n,r,i,o){e.fillStyle=xj,e.font=Bo(o),e.textAlign="center";const a=Math.round(r+wt+Uj+Gj*o),s=t.map(u=>n(u.value));t.forEach((u,l)=>{const c=s[l];Vh(e,c,r,wt),l>0&&Vh(e,(s[l-1]+c)/2,r,Nj);const f=Mj(c,e.measureText(u.label).width,i);e.fillText(u.label,f,a)})}const Wj="pchip",Vj=200,Xj={logit:e=>Math.log(e/(1-e)),log:e=>Math.log(e),identity:e=>e};function jj(e,t){const n=e.length,r=[],i=[];for(let s=0;s<n-1;s++)r.push(e[s+1]-e[s]),i.push((t[s+1]-t[s])/r[s]);if(n===2)return[i[0],i[0]];const o=new Array(n);for(let s=1;s<n-1;s++){const u=i[s-1],l=i[s];if(u*l<=0){o[s]=0;continue}const c=2*r[s]+r[s-1],f=r[s]+2*r[s-1];o[s]=(c+f)/(c/u+f/l)}const a=(s,u,l,c)=>{const f=((2*s+u)*l-s*c)/(s+u);return Math.sign(f)!==Math.sign(l)?0:Math.sign(l)!==Math.sign(c)&&Math.abs(f)>3*Math.abs(l)?3*l:f};return o[0]=a(r[0],r[1],i[0],i[1]),o[n-1]=a(r[n-2],r[n-3],i[n-2],i[n-3]),o}function Kj(e,t,n){if(e.length!==ct.length)throw new Error(`a quantile table has one value per level (${ct.length} levels); got ${e.length}`);const r=[],i=[],o=[];e.forEach((l,c)=>{const f=ct[c],d=r.length-1;if(d>=0&&l===r[d]){o[d]=f;return}if(d>=0&&!(l>r[d]))throw new Error(`quantile table values must be nondecreasing; got ${r[d]} then ${l}`);r.push(l),i.push(f),o.push(f)});const a=Xj[t],s=r.map(a),u=r.slice(0,-1).map((l,c)=>({levelAtStart:o[c],levelAtEnd:i[c+1],hermite:null}));if(n==="pchip"){let l=0;for(;l<u.length;){if(!Number.isFinite(s[l])||!Number.isFinite(s[l+1])){l++;continue}let c=l+1;for(;c<r.length-1&&i[c]===o[c]&&Number.isFinite(s[c+1]);)c++;const f=s.slice(l,c+1),d=f.map((h,m)=>m===0?o[l]:i[l+m]),p=jj(f,d);for(let h=0;h<f.length-1;h++)u[l+h].hermite={uStart:f[h],uEnd:f[h+1],slopeStart:p[h],slopeEnd:p[h+1]};l=c}}return{values:Float64Array.from(r),levelFirst:Float64Array.from(i),levelLast:Float64Array.from(o),pieces:u,forward:a}}function sT(e,t,n){const r=e.pieces[t],{levelAtStart:i,levelAtEnd:o,hermite:a}=r;if(a===null){const d=e.values[t],p=e.values[t+1];return i+(o-i)*(n-d)/(p-d)}const s=a.uEnd-a.uStart,u=(e.forward(n)-a.uStart)/s,l=u*u,c=l*u,f=i*(2*c-3*l+1)+s*a.slopeStart*(c-2*l+u)+o*(-2*c+3*l)+s*a.slopeEnd*(c-l);return Math.min(Math.max(f,i),o)}function uT(e,t,n){let r=0,i=e.length;for(;r<i;){const o=r+i>>>1;(n?e[o]<t:e[o]<=t)?r=o+1:i=o}return r-1}function Yj(e,t){const n=uT(e.values,t,!1);return n<0?0:e.values[n]===t||n===e.values.length-1?e.levelLast[n]:sT(e,n,t)}function zj(e,t){const n=uT(e.values,t,!0);return n===e.values.length-1?e.levelLast[n]:e.values[n+1]===t?e.levelFirst[n+1]:n<0?0:sT(e,n,t)}function Jj(e,t){const n=r=>{let i=0;return e.forEach((o,a)=>{i+=t[a]*r(o)}),Math.min(i,1)};return{atOrBelow:r=>n(i=>Yj(i,r)),below:r=>n(i=>zj(i,r))}}function EE(e,t,n,r){if(e.atOrBelow(n)>=t)return n;for(let i=0;i<Vj;i++){const o=n+(r-n)/2;if(o<=n||o>=r)break;e.atOrBelow(o)>=t?r=o:n=o}return r}function lT(e,t=Wj){const{tables:n,weights:r,transform:i}=e;if(n.length===0)throw new Error("a stored distribution needs at least one table");if(r.length!==n.length)throw new Error(`expected one weight per table (${n.length}); got ${r.length}`);const o=r.reduce((c,f)=>c+f,0);if(Math.abs(o-1)>1e-9)throw new Error(`stored distribution weights must sum to 1; got ${o}`);const a=n.map(c=>Kj(c,i,t)),s=Jj(a,r),u=[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[c.length-1]))],l=c=>{const f=y=>y>c.domainLow&&(c.domainHigh===null||y<c.domainHigh);let d=1/0,p=-1/0;for(const y of n)for(const g of y)f(g)&&(d=Math.min(d,g),p=Math.max(p,g));if(d>p)return null;const h=s.atOrBelow(c.domainLow),m=c.domainHigh===null?0:1-s.below(c.domainHigh),v=[c.forward(d),c.forward(p)],_=y=>{if(y<=h)return v[0];if(y>=1-m)return v[1];const g=EE(s,y,d,p);return Math.min(Math.max(c.forward(g),v[0]),v[1])};return{source:{kind:"cdf",cdfAtOrBelow:y=>s.atOrBelow(c.inverse(y)),cdfBelow:y=>s.below(c.inverse(y)),quantile:_,support:v,inView:()=>{throw new Error("a viewed stored distribution has no further view")}},droppedLow:h,droppedHigh:m,sourceMassShare:1,centralRange:y=>[_(y),_(1-y)]}};return{kind:"cdf",cdfAtOrBelow:s.atOrBelow,cdfBelow:s.below,quantile:c=>EE(s,c,u[0],u[1]),support:u,inView:l}}const Qj=1e-9;function cT(e){const t=e.drawCount;return{kind:"liveDraws",drawCount:t,countOfDrawsBelow:n=>e.countOfDrawsBelow(n),countOfDrawsAtOrBelow:n=>e.countOfDrawsAtOrBelow(n),cdfBelow:n=>e.countOfDrawsBelow(n)/t,cdfAtOrBelow:n=>e.countOfDrawsAtOrBelow(n)/t,quantile:n=>e.valueAtCumulativeDrawCount(t*fT(n)),support:e.support(),inView:n=>e.isExact?tK(e,n):rK(e,n)}}function fT(e){if(!(e>=0&&e<=1))throw new Error(`live draws density source: quantile level ${e} is not in [0, 1]`);return e}function dT(e,t){return t>e.domainLow&&(e.domainHigh===null||t<e.domainHigh)}function Zj(e,t){const n=[];let r=0,i=0;for(const o of e)dT(t,o)?n.push(t.forward(o)):o<=t.domainLow?r++:i++;return{values:Float64Array.from(n),droppedLow:r,droppedHigh:i,total:e.length}}function pT(e,t){const n=Math.floor(t*(e-1)+Qj);return[n,e-1-n]}function eK(e,t){const n=e.values.length-1;if(n<0)throw new Error("sortedSampleCentralRange: no in-domain draws");const[r,i]=pT(e.total,t),o=a=>Math.min(Math.max(a,0),n);return[e.values[o(r-e.droppedLow)],e.values[o(i-e.droppedLow)]]}function tK(e,t){const n=Zj(e.exactSortedDraws(),t);return n.values.length===0?null:{source:cT(Pe.fold(void 0,n.values)),sourceMassShare:n.values.length/n.total,droppedLow:n.droppedLow/n.total,droppedHigh:n.droppedHigh/n.total,centralRange:r=>eK(n,r)}}function nK(e,t){let n=0,r=e.length;for(;n<r;){const i=n+r>>>1;e[i]<t?n=i+1:r=i}return n}function rK(e,t){const{edges:n}=e.binnedGrid();let r=0;for(;r<n.length&&!(n[r]>t.domainLow);)r++;let i=n.length-1;for(;i>=0&&!dT(t,n[i]);)i--;if(r>i)return null;const o=n[r],a=n[i],s=e.drawCount,u=e.countOfDrawsAtOrBelow(t.domainLow),l=t.domainHigh===null?0:s-e.countOfDrawsBelow(t.domainHigh),c=s-u-l,f=[t.forward(o),t.forward(a)],d=A=>Math.min(Math.max(A-u,0),c),p=d(e.countOfDrawsAtOrBelow(o)),h=Math.max(d(e.countOfDrawsBelow(a)),p),m=A=>Math.min(Math.max(A-u,p),h),v=A=>{const $=t.inverse(A),C=nK(n,$);for(let I=Math.max(C-1,0);I<=Math.min(C,n.length-1);I++)if(t.forward(n[I])===A)return n[I];return $},_=A=>{if(Number.isNaN(A))throw new Error("live draws log view: cannot count draws below NaN");return A<=f[0]?0:A>f[1]?c:m(e.countOfDrawsBelow(v(A)))},b=A=>{if(Number.isNaN(A))throw new Error("live draws log view: cannot count draws below NaN");return A<f[0]?0:A>=f[1]?c:m(e.countOfDrawsAtOrBelow(v(A)))},y=A=>A<=o?f[0]:A>=a?f[1]:Math.min(Math.max(t.forward(A),f[0]),f[1]),g=A=>y(e.valueAtCumulativeDrawCount(Math.min(A,s)));return{source:{kind:"liveDraws",drawCount:c,countOfDrawsBelow:_,countOfDrawsAtOrBelow:b,cdfBelow:A=>_(A)/c,cdfAtOrBelow:A=>b(A)/c,quantile:A=>g(u+fT(A)*c),support:f,inView:()=>{throw new Error("a viewed live distribution has no further view")}},sourceMassShare:c/s,droppedLow:u/s,droppedHigh:l/s,centralRange:A=>{const[$,C]=pT(s,A);return[g($),g(C)]}}}function hT(e,t,n,r){return e===0?n:e===t?r:n+(r-n)*e/t}function mT(e,t,n){const r=new Float64Array(e+1);for(let i=0;i<=e;i++)r[i]=hT(i,e,t,n);return r}const iK=.75,oK=2/3,aK=2;function vT(e){return iK*e**oK}function _T(e,t,n){return e.countOfDrawsAtOrBelow(n)-e.countOfDrawsBelow(t)}function sK(e,t,n,r){const i=e.countOfDrawsAtOrBelow(r);let o=e.countOfDrawsBelow(n),a=0;for(let s=0;s<t;s++){const u=s===t-1?i:Math.min(e.countOfDrawsBelow(hT(s+1,t,n,r)),i);u-o>0&&a++,o=u}return a}function uK(e,t,n,r){const i=_T(e,t,n);if(i===0)return null;const o=vT(i),a=l=>i/sK(e,l,t,n)>=o;if(a(r))return r;let s=1,u=r;for(;u-s>1;){const l=s+u>>>1;a(l)?s=l:u=l}return s}function lK(e,t,n,r){if(!(r>=1)||!Number.isInteger(r)||!(n>t))throw new Error(`liveHistogramBinCount: need an integer maxBinCount ≥ 1 and xMax > xMin; got ${r}, [${t}, ${n}]`);let i=r;for(const o of e){const a=uK(o,t,n,r);a!==null&&(i=Math.min(i,a))}return i}function cK(e,t,n,r,i){if(!Number.isInteger(t)||!(t>=1)||!(t<=i)||!Number.isInteger(i)||!(r>n))throw new Error(`liveHistogramBinEdges: need integers 1 ≤ coarseBinCount ≤ maxBinCount and xMax > xMin; got ${t}, ${i}, [${n}, ${r}]`);const o=mT(t,n,r),a=_T(e,n,r);if(a===0)return o;const s=aK*vT(a),u=(f,d)=>(d===r?e.countOfDrawsAtOrBelow(d):e.countOfDrawsBelow(d))-e.countOfDrawsBelow(f),l=[n],c=(f,d,p)=>{const h=2*p,m=f+(d-f)/2;h<=i&&f<m&&m<d&&u(f,d)>=s?(c(f,m,h),c(m,d,h)):l.push(d)};for(let f=0;f<t;f++)c(o[f],o[f+1],t);return Float64Array.from(l)}const bT=3,gT=.4,fK="density-location-key",dK="density-location-key-dashed",pK="Marked on the plot by a vertical line drawn like this";function hK(e){return`<span class="${fK}${e.dashed?` ${dK}`:""}" title="${V(pK)}" aria-hidden="true" style="--density-location-key-color: ${V(e.color)}; width: ${bT}px; opacity: ${gT}"></span>`}function yT(e,t,n,r){return e===null||!(e>=t&&e<=n)?null:r(e)}function ET(e,t,n,r,i,o){const a=e.globalAlpha;e.globalAlpha=gT,e.setLineDash([...o]),e.beginPath(),e.moveTo(t,r),e.lineTo(t,n),e.strokeStyle=i,e.lineWidth=bT,e.stroke(),e.setLineDash([]),e.globalAlpha=a}function wT(e){if(e.liveDistributionNotAsked)throw new Error("a plot read a live result evaluated without its distribution (includeLiveDistribution false)")}function mK(e){return wT(e),e.liveDistribution!==null||e.storedDistribution!==null}function ST(e){return wT(e),e.liveDistribution!==null?cT(e.liveDistribution):e.storedDistribution===null?null:lT(e.storedDistribution)}function q2(e,t){return e.quantile(t)}function vK(e,t,n){const r=n.length-1;if(!(r>=1))throw new Error(`binDensityFromCdf: need at least two edges; got ${n.length}`);const i=new Float64Array(r);let o=e(n[0]);for(let a=0;a<r;a++){const s=n[a],u=n[a+1];if(!(u>s))throw new Error(`binDensityFromCdf: edges must ascend; edge ${a} is ${s}, edge ${a+1} is ${u}`);const l=a===r-1?t(u):e(u);i[a]=(l-o)/(u-s),o=l}return i}function $T(e,t,n,r,i,o){const a=e.kind==="liveDraws"?cK(e,r,i,o,n):null,s=vK(e.cdfBelow,e.cdfAtOrBelow,a??mT(n,i,o));if(t!==1)for(let u=0;u<s.length;u++)s[u]*=t;return{heights:s,histogramEdges:a}}function AT(e,t,n,r){const i=e.filter(o=>o.kind==="liveDraws");return lK(i,n,r,t)}function TT(e,t,n,r,i,o){const a=t.heights.length,s=de.top+r,u=c=>s-c/i*r;e.beginPath();const l=t.histogramEdges;if(l!==null){e.moveTo(o(l[0]),s);for(let c=0;c<a;c++){const f=u(t.heights[c]);e.lineTo(o(l[c]),f),e.lineTo(o(l[c+1]),f)}e.lineTo(o(l[a]),s);return}for(let c=0;c<a;c++){const f=de.left+(c+.5)/a*n,d=u(t.heights[c]);c===0?e.moveTo(f,d):e.lineTo(f,d)}}const de={top:4,bottom:18,left:4,right:4},rr=12,va="#333",RT={color:va,dashed:!1},_a=1.5,_K="#e8e8e8",bK="#777",IT="#2166ac",gK="rgba(110, 110, 110, 0.12)",LT="rgba(33, 102, 172, 0.12)",no=va,CT="rgba(51, 51, 51, 0.10)",ro=IT,kT=LT,B2=[5,4],Xh="#888",Kp=B2;function yK(e,t,n){return e.quantile_table_mixture===void 0?null:{source:lT(e.quantile_table_mixture),curveKey:t,color:no,dashed:!1,bandFill:CT,locationValue:n}}function wE(e,t,n,r,i,o=null){const a=e.width,s=e.height,u=e.getContext("2d");if(!u)return;u.clearRect(0,0,a,s);const l=a-de.left-de.right,c=s-de.top-de.bottom,f=de.top+c,d=t.support,[p,h]=F2(i,d[0],d[1]);if(h<=p){$E(u,de.left+l/2,c),Ft(u,[ma(p,o)],()=>de.left+l/2,f,a,rr);return}const m=y=>de.left+(y-p)/(h-p)*l,v=Math.round(l);if(d[1]-d[0]<(h-p)/l){$E(u,m((d[0]+d[1])/2),c),Ft(u,to(p,h,o),m,f,a,rr);return}const _=$T(t,1,v,AT([t],v,p,h),p,h);let b=0;for(const y of _.heights)b=Math.max(b,y);b<=0||(r!==null&&NT(u,r,_K,p,h,m,c),OT(u,n,RT,p,h,m,c),TT(u,_,l,c,b,m),u.strokeStyle=va,u.lineWidth=_a,u.stroke(),Ft(u,to(p,h,o),m,f,a,rr))}function NT(e,t,n,r,i,o,a){const s=Math.max(t[0],r),u=Math.min(t[1],i);u<s||(e.fillStyle=n,e.fillRect(o(s),de.top,o(u)-o(s),a))}function SE(e,t,n,r=null){const i=e.width,o=e.height,a=e.getContext("2d");if(!a||(a.clearRect(0,0,i,o),t.length===0))return;const s=i-de.left-de.right,u=o-de.top-de.bottom,l=de.top+u,c=t.map(b=>H2(b.source,n)),f=Math.min(...c.map(b=>b[0])),d=Math.max(...c.map(b=>b[1])),p=b=>de.left+(b-f)/(d-f)*s;if(d<=f){for(const b of t)b.shown&&MT(a,de.left+s/2,u,b.color);Ft(a,[ma(f,r)],()=>de.left+s/2,l,i,rr);return}const h=Math.round(s),m=AT(t.map(b=>b.source),h,f,d),v=t.map(b=>EK(b.source,b.sourceMassShare,h,m,f,d));let _=0;for(const b of v)if(b.density!==null)for(const y of b.density.heights)_=Math.max(_,y);for(const b of t)!b.shown||b.bandFill===null||NT(a,b.band,b.bandFill,f,d,p,u);t.forEach((b,y)=>{!b.shown||v[y].pointMassX!==null||OT(a,b.locationValue,jh(b),f,d,p,u)}),t.forEach((b,y)=>{b.shown&&wK(a,v[y],s,u,_,b.color,b.dashed,p)}),Ft(a,to(f,d,r),p,l,i,rr)}function H2(e,t){const n=e.support;return F2(t,n[0],n[1])}function EK(e,t,n,r,i,o){const a=e.support;return a[1]-a[0]<(o-i)/n?{density:null,pointMassX:(a[0]+a[1])/2}:{density:$T(e,t,n,r,i,o),pointMassX:null}}function wK(e,t,n,r,i,o,a,s){if(t.pointMassX!==null){MT(e,s(t.pointMassX),r,o);return}t.density===null||i<=0||(TT(e,t.density,n,r,i,s),e.strokeStyle=o,e.lineWidth=_a,e.setLineDash(a?[...B2]:[]),e.stroke(),e.setLineDash([]))}function jh(e){return{color:e.color,dashed:e.dashed}}function OT(e,t,n,r,i,o,a){const s=yT(t,r,i,o);s!==null&&ET(e,s,de.top,de.top+a,n.color,n.dashed?B2:[])}function $E(e,t,n){e.beginPath(),e.moveTo(t,de.top+n),e.lineTo(t,de.top),e.strokeStyle=va,e.lineWidth=_a,e.stroke()}function MT(e,t,n,r){e.beginPath(),e.moveTo(t,de.top+n),e.lineTo(t,de.top),e.strokeStyle=r,e.lineWidth=_a,e.stroke()}function Hoe(e,t){if(e.length!==t.length)throw new Error(`pwlToShape: xs length ${e.length} !== ys length ${t.length}`);return{points:e.map((n,r)=>({x:n,y:t[r]}))}}const Ht=.001,io=101,SK=.04,$K=1e-9;function xoe(e){const t=e.inverseCdf(Ht),n=e.inverseCdf(1-Ht);if(!(n>t))return{points:[{x:t,y:1}]};const r=[],i=[];for(let a=0;a<io;a++){const s=t+a/(io-1)*(n-t);r.push(s),i.push(e.pdf(s))}const o=Math.max(...i);if(o<=0)throw new Error("familyToShape: zero density over the display window");return{points:r.map((a,s)=>({x:a,y:i[s]/o}))}}function AK(e,t){const[n,r]=DT(e,t);return PT(e,t,n,r)}function DT(e,t){const n=qo(e,t).map(r=>r.x);return[Math.min(sn(e,t,Ht),...n),Math.max(sn(e,t,1-Ht),...n)]}function PT(e,t,n,r){const i=$K*Math.max(Math.abs(n),Math.abs(r)),o=qo(e,t).filter(p=>p.x>=n-i&&p.x<=r+i),a=o.map(p=>p.x),s=Math.min(n,...a),u=Math.max(r,...a);if(!(u>s))return{points:[{x:s,y:1}]};const l=FT([[s,u]],e,s,u,a),c=l.map(p=>cS(e,t,p)),f=Math.max(0,...c),d=f>0?1:Math.max(...o.map(p=>p.mass));return qT(l,c,f,o,d)}function Uoe(e){if(e.length===0)throw new Error("mixtureShapesOnSharedScale: no mixture to draw");const t=e.map(l=>DT(l.distribs,l.weights)),n=Math.min(...t.map(l=>l[0])),r=Math.max(...t.map(l=>l[1]));if(!(r>n))return e.map(()=>({points:[{x:n,y:1}]}));const i=e.map(l=>qo(l.distribs,l.weights)),o=FT([[n,r],...t],e.flatMap(l=>l.distribs),n,r,i.flat().map(l=>l.x)),a=e.map(l=>o.map(c=>cS(l.distribs,l.weights,c))),s=Math.max(0,...a.flat()),u=s>0?1:Math.max(...i.flat().map(l=>l.mass));return e.map((l,c)=>qT(o,a[c],s,i[c],u))}function FT(e,t,n,r,i){const o=[];for(const[s,u]of e)if(u>s)for(let l=0;l<io;l++)o.push(s+l/(io-1)*(u-s));for(const s of t)for(const u of lS(s))u>n&&u<r&&o.push(u);const a=new Set(i);return[...new Set(o)].filter(s=>!a.has(s)).sort((s,u)=>s-u)}function qT(e,t,n,r,i){return{points:[...e.map((a,s)=>({x:a,points:[{x:a,y:n>0?t[s]/n:0}]})),...r.map(a=>{const s=Math.max(a.mass/i,SK);return{x:a.x,points:[{x:a.x,y:0},{x:a.x,y:s},{x:a.x,y:0}]}})].sort((a,s)=>a.x-s.x).flatMap(a=>a.points)}}function TK(e,t){return RK([e],t)}function RK(e,t){return F2(Er(t),Math.min(...e.map(n=>n.points[0].x)),Math.max(...e.map(n=>n.points[n.points.length-1].x)))}const De={top:4,bottom:18,left:4,right:4},AE=10,IK="rgba(100, 149, 237, 0.25)",Kh="#4477bb",BT=1.5,HT={color:Kh,dashed:!1},LK={color:Xh,dashed:!0},CK="#e8e8e8",xT={low:!1,high:!1},kK={shape:null,secondaryShape:null};function NK(e){const t=e.points.filter(n=>n.y>0);return t.length>0&&t.every(n=>n.x===t[0].x)}function TE(e,t,n,r,i=null,o=xT,a=null,s=kK){const u=e.width,l=e.height,c=e.getContext("2d");if(!c)return;c.clearRect(0,0,u,l);const{points:f}=t;if(f.length===0)return;const d=(a==null?void 0:a.points)??[],p=u-De.left-De.right,h=l-De.top-De.bottom,m=De.top+h,[v,_]=n;if(_<=v){const A=De.left+p/2;d.length>0&&Math.max(...d.map($=>$.y))>0&&(c.setLineDash([...Kp]),IE(c,A,m,Xh),c.setLineDash([])),Math.max(...f.map($=>$.y))>0&&IE(c,A,m,Kh),Ft(c,[ma(v,i)],()=>A,m,u,AE);return}const b=A=>De.left+(A-v)/(_-v)*p,y=Math.max(...f.map(A=>A.y),...d.map(A=>A.y));if(y<=0)return;const g=A=>De.top+h-A/y*h;if(r){const A=Math.max(r[0],v),$=Math.min(r[1],_);$>=A&&(c.fillStyle=CK,c.fillRect(b(A),De.top,b($)-b(A),h))}const E=(A,$,C)=>{if(A===null||NK(A))return;const I=yT($,v,_,b);I!==null&&ET(c,I,De.top,m,C.color,C.dashed?Kp:[])};E(a,s.secondaryShape,LK),E(t,s.shape,HT),d.length>0&&(c.setLineDash([...Kp]),RE(c,d,b,g,m,o,Xh),c.setLineDash([])),c.beginPath(),c.moveTo(b(f[0].x),m);for(const A of f)c.lineTo(b(A.x),g(A.y));c.lineTo(b(f[f.length-1].x),m),c.closePath(),c.fillStyle=IK,c.fill(),RE(c,f,b,g,m,o,Kh),Ft(c,to(v,_,i),b,m,u,AE)}function RE(e,t,n,r,i,o,a){e.beginPath();const s=t[0],u=t[t.length-1];s.y>0&&!o.low?(e.moveTo(n(s.x),i),e.lineTo(n(s.x),r(s.y))):e.moveTo(n(s.x),r(s.y));for(let l=1;l<t.length;l++)e.lineTo(n(t[l].x),r(t[l].y));u.y>0&&!o.high&&e.lineTo(n(u.x),i),e.strokeStyle=a,e.lineWidth=BT,e.stroke()}function IE(e,t,n,r){e.beginPath(),e.moveTo(t,n),e.lineTo(t,De.top),e.strokeStyle=r,e.lineWidth=BT,e.stroke()}const Yh="data-density-curve-numbers",OK="density-curve-numbers",UT="density-curve-numbers-body",GT="density-curve-numbers-hidden-note",x2="data-density-curve-show",MK="Hidden with its curve by the plot legend.",DK="show",PK="Show this curve and its numbers again";function WT(e){return`<div class="${GT}">${MK} <button type="button" ${x2}="${V(e)}" title="${V(PK)}">${DK}</button></div>`}function VT(e,t,n){const r=t.has(e);return`<div class="${OK}" ${Yh}="${V(e)}">`+(r?WT(e):"")+`<div class="${UT}"${r?" hidden":""}>${n}</div></div>`}function FK(e,t){const n=e.querySelector(`:scope > .${t}`);if(n===null)throw new Error(`density curve numbers block has no .${t}`);return n}function qK(e){const t=JA(e);if(t===null)return;const n=I2(e);for(const r of t.querySelectorAll(`[${Yh}]`)){const i=r.getAttribute(Yh),o=n.has(i),a=FK(r,UT);a.hidden=o;const s=r.querySelector(`:scope > .${GT}`);o&&s===null&&r.insertAdjacentHTML("afterbegin",WT(i)),!o&&s!==null&&s.remove()}}function Goe(e){return e instanceof Element?e.closest(`[${x2}]`):null}function BK(e){var r;const t=e.getAttribute(x2);if(t===null)throw new Error("density curve numbers show button has no curve key");const n=((r=JA(e))==null?void 0:r.querySelector(`[${wn}]`))??null;if(n===null)throw new Error("density curve numbers show button outside a result row with a named-curve plot");return{plot:n,curveKey:t}}const LE=.5,Yp=3,HK=1,CE=new WeakMap,kE=new WeakMap,XT="calculatorPlotWidthPx",Woe="comparePlotWidthPx",jT="data-plot-width-preference",xK="Drag to resize the plot. Double-click to restore its default size.",KT=new WeakMap;function UK(e,t){const n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=n.left+n.width/2,o=r.left+r.width/2;return i<o?-1:1}function YT(e){return typeof e=="number"&&Number.isInteger(e)&&e>0}function GK(e){const t=je()[e];if(t!==void 0){if(!YT(t)){console.warn(`Stored plot width ${JSON.stringify(t)} (${e}) is not a positive integer (px); showing the default. Double-click a plot's resize handle to forget it.`);return}return t}}function NE(e,t,n){const r=document.querySelectorAll(`[${jT}="${e}"]`);for(const i of r){if(i===n)continue;const o=KT.get(i);o!==void 0&&o(t)}}function U2(e,t,n){var $;if(CE.set(e,t),($=e.parentElement)!=null&&$.classList.contains("resizable-canvas-wrapper"))return;const r=e.width,i=e.height;kE.set(e,{w:r,h:i});const o=document.createElement("div");o.className="resizable-canvas-wrapper",e.parentElement.insertBefore(o,e),o.appendChild(e);const a=document.createElement("div");a.className="resizable-canvas-handle",a.title=xK,o.appendChild(a);const s=()=>kE.get(e)??{w:r,h:i},u=C=>{var S;if(C===e.width)return;const{w:I,h:T}=s();e.width=C,e.height=Math.round(T*C/I),(S=CE.get(e))==null||S()},l=()=>{const C=getComputedStyle(e),I=T=>T===""?0:parseFloat(T);return I(C.borderLeftWidth)+I(C.borderRightWidth)+I(C.paddingLeft)+I(C.paddingRight)};let c=r;const f=C=>{c=C,o.style.width=`${C+l()}px`},d=()=>{const C=o.clientWidth;if(C===0)return c;const I=C-l();return I>c-HK?c:Math.floor(I)},p=()=>{const C=c;f(s().w*Yp);const I=d();return f(C),I},h=()=>({min:LE*Math.min(s().w,p()),max:s().w*Yp}),m=C=>{let I=s().w;if(C!==void 0){const{min:T,max:S}=h();I=Math.round(Math.max(T,Math.min(S,C)))}f(I),u(d())};n!==void 0&&(o.setAttribute(jT,n),KT.set(o,m)),m(n===void 0?void 0:GK(n)),typeof ResizeObserver<"u"&&new ResizeObserver(()=>{requestAnimationFrame(()=>{u(d())})}).observe(o);let v=!1,_=1,b=0,y=r,g=r*LE,E=null;a.addEventListener("pointerdown",C=>{var I;v=!0,_=UK(a,o),b=C.clientX,y=e.width,g=h().min,(I=a.setPointerCapture)==null||I.call(a,C.pointerId),C.preventDefault()}),a.addEventListener("pointermove",C=>{if(!v)return;const{w:I}=s(),T=_*(C.clientX-b),S=Math.round(Math.max(g,Math.min(I*Yp,y+T)));f(S);const w=Math.min(S,d());w<S&&(f(w),b=C.clientX,y=w),E=w,u(w)});const A=()=>{if(v=!1,E!==null){if(n!==void 0){if(!YT(E)){E=null;return}Ui(n,E),NE(n,E,o)}E=null}};a.addEventListener("pointerup",A),a.addEventListener("pointercancel",A),a.addEventListener("lostpointercapture",A),a.addEventListener("dblclick",()=>{if(n===void 0){m(void 0);return}Ui(n,void 0),NE(n,void 0,null)})}const WK=13,OE=20,VK="#777";function At(e,t){const n=e.width,r=e.height,i=e.getContext("2d");if(!i)return;i.clearRect(0,0,n,r),i.save(),i.fillStyle=VK,i.font=Bo(WK),i.textAlign="center",i.textBaseline="middle";const o=r/2-(t.length-1)*OE/2;t.forEach((a,s)=>{i.fillText(a,n/2,o+s*OE)}),i.restore()}function XK(e){return{scale:e.densityScale,statsDisplay:e.probAsOdds,percentileRanges:SA(e)}}const G2=["The chosen x-axis range lies","outside what this view can show."],W2=["This view cannot show this plot:","a curve lies wholly outside it."],V2="density-scale-switch",jK="density-scale-option",KK="density-scale-option-active",oo="data-density-scale",YK="raw",zK="Density plot scale: raw values, or the density of their logarithm (tick labels are then the logarithm). Applies to every plot that offers it.",JK=10,QK=2,ZK=10,eY="#555",tY="rgba(255, 255, 255, 0.85)",ME=3,_i=2,DE=14;function zT(e){return{label:e,domainLow:0,domainHigh:null,inDomain:t=>t>0,forward:t=>Math.log(t),inverse:t=>Math.exp(t),jacobian:t=>t,sideOutside:()=>"low",outsideText:{low:"≤ 0",high:""}}}const nY=zT("ln(prob)"),rY=zT("ln"),iY={label:"ln(odds)",domainLow:0,domainHigh:1,inDomain:e=>e>0&&e<1,forward:e=>Math.log(e/(1-e)),inverse:e=>1/(1+Math.exp(-e)),jacobian:e=>e*(1-e),sideOutside:e=>e<=0?"low":"high",outsideText:{low:"≤ 0",high:"≥ 1"}};function X2(e,t){return e===void 0||!Tq(e)?null:Hr(e)?t==="odds"?iY:nY:rY}function j2(e,t){if(e===void 0)return aT;const n=r=>r!==null&&t.inDomain(r)?t.forward(r):null;return{lo:n(e.lo),hi:n(e.hi)}}function K2(e,t){return e!==void 0&&Hr(e)&&t==="odds"?B$:null}function ao(e,t){return e!==null&&t.inDomain(e)?t.forward(e):null}function oY(e,t){const[n,r]=e;return r>n?P2(n,r,t):[n,r]}function PE(e){const t=e*100;return t>=JK?t.toFixed(0):String(Number(t.toPrecision(QK)))}function JT(e,t,n){if(e.low+e.high<=Ht)return null;const r=[],i=n?"up to ":"";return e.low>0&&r.push(`${i}${PE(e.low)}% of draws ${t.outsideText.low}`),e.high>0&&r.push(`${i}${PE(e.high)}% of draws ${t.outsideText.high}`),{text:`not shown: ${r.join(", ")}`,corner:e.low>=e.high?"left":"right"}}function aY(e,t){const n=e[t].x;return t>0&&e[t-1].x===n||t<e.length-1&&e[t+1].x===n}function sY(e,t){return QT([e],t)[0]}function QT(e,t){const n=e.map(a=>a.points.map((s,u)=>aY(a.points,u)));let r=0,i=0;e.forEach((a,s)=>{a.points.forEach((u,l)=>{n[s][l]||(r=Math.max(r,u.y),t.inDomain(u.x)&&(i=Math.max(i,u.y*t.jacobian(u.x))))})});const o=r>0&&i>0?i/r:1;return e.map((a,s)=>{const u=n[s],l=new Set,c=[];return a.points.forEach((f,d)=>{if(!t.inDomain(f.x)){u[d]&&l.add(f.x);return}c.push({x:t.forward(f.x),y:u[d]?f.y*o:f.y*t.jacobian(f.x)})}),c.length===0||Math.max(...c.map(f=>f.y))<=0?null:{shape:{points:c},droppedPointMassXs:[...l]}})}function uY(e,t){return e.length===0?null:{text:`not shown: point mass at ${e.map(String).join(" and ")}`,corner:e.every(n=>t.sideOutside(n)==="high")?"right":"left"}}function xt(e,t,n){return t.inDomain(e)?t.forward(e):t.sideOutside(e)==="low"?n[0]:n[1]}function ba(e){return e.lo===Nt&&e.hi===Jt}function Y2(e,t){return e===Nt?t[0]:t[1]}function z2(e,t){const n=r=>En(r)?Y2(r,[-1/0,1/0]):t($2(r));return[n(e.lo),n(e.hi)]}function ZT(e,t,n){return t<=n?[t,n]:En(e.lo)?[n,n]:[t,t]}function J2(e,t,n){const r=i=>En(i)?Y2(i,t):n($2(i));return ZT(e,r(e.lo),r(e.hi))}function eR(e,t,n,r,i){const o=(u,l)=>{if(En(u))return Y2(u,t);const c=r($2(u));return!i.inDomain(c)&&i.sideOutside(c)===l?null:xt(c,i,n)},a=o(e.lo,"high"),s=o(e.hi,"low");return a===null||s===null?null:ZT(e,a,s)}function FE(e){return[Math.min(...e.map(t=>t[0])),Math.max(...e.map(t=>t[1]))]}function Q2(e,t){const n=e.getContext("2d");if(!n)return;n.save(),n.font=Bo(ZK),n.textBaseline="middle";const r=n.measureText(t.text).width+2*ME,i=t.corner==="right"?e.width-_i-r:_i;n.fillStyle=tY,n.fillRect(i,_i,r,DE),n.fillStyle=eY,n.textAlign="left",n.fillText(t.text,i+ME,_i+DE/2),n.restore()}const ga=new WeakMap;function wr(e){const t=ga.get(e);t!==void 0&&(t.active==="log"&&t.log!==null?t.log(t.ranges):t.raw(t.ranges))}function lY(e){return e.closest(`.${pa}`)}function cY(e){const t=document.activeElement;return t instanceof HTMLInputElement&&e.contains(t)?t:null}function Z2(e,t){for(const n of e.querySelectorAll(`[${oo}]`)){const r=n.getAttribute(oo)===t;n.classList.toggle(KK,r),n.setAttribute("aria-pressed",String(r))}}function fY(e,t,n){const r=e.querySelector(`[${oo}="log"]`);r!==null&&r.textContent!==t&&(r.textContent=t),Z2(e,n)}function dY(e,t){const n=document.createElement("span");n.className=V2,n.setAttribute("role","group"),n.title=zK;const r=[["raw",YK],["log",e]];for(const[i,o]of r){const a=document.createElement("button");a.type="button",a.className=jK,a.setAttribute(oo,i),a.textContent=o,n.appendChild(a)}return Z2(n,t),n}function qE(e,t){const n=e.previousElementSibling;if(n!==null&&n.classList.contains(Wh))return n;if(!t)return null;const r=document.createElement("div");return r.className=Wh,e.before(r),r}function pY(e){var t,n;return((n=(t=e.parentElement)==null?void 0:t.nextElementSibling)==null?void 0:n.querySelector(":scope > canvas"))??null}function ev(e){let t=null;return()=>(t??(t={value:e()}),t.value)}function so(e,t,n,r){var c;const i=lY(e),o=f=>{const d=i===null?null:Gh(i,f);return d===null?la[f]:(FA(d,n.percentileRanges[f],cY(d)),n.percentileRanges[f])},a={band:o("band"),xRange:o("xRange")},s=t.log;ga.set(e,{raw:t.raw,log:s===null?null:s.draw,active:n.scale,ranges:a}),wr(e),U2(e,()=>wr(e),r);const u=e.parentElement,l=((c=qE(u,!1))==null?void 0:c.querySelector(`:scope > .${V2}`))??null;s===null?l==null||l.remove():l!==null?fY(l,s.label,n.scale):qE(u,!0).prepend(dY(s.label,n.scale))}function Voe(e,t){for(const n of e.querySelectorAll(`.${V2}`)){const r=pY(n),i=r===null?void 0:ga.get(r);r===null||i===void 0||(i.active=t,wr(r),Z2(n,t))}}function Xoe(e,t,n,r){var i;for(const o of oj(e)){if(aj(o)!==t)continue;FA(o,n,r!==null&&o.contains(r)?r:null);const a=(i=o.closest(`.${pa}`))==null?void 0:i.querySelector("canvas"),s=a?ga.get(a):void 0;!a||s===void 0||(s.ranges={...s.ranges,[t]:n},wr(a))}}function joe(e){const t=e.closest(`[${wn}]`);if(t===null)throw new Error("density curve toggle outside a plot with a visibility scope");tR(t,L2(e))}function Koe(e){var r;const{plot:t,curveKey:n}=BK(e);tR(t,n),(r=Ej(t,n))==null||r.focus({preventScroll:!0})}function tR(e,t){dj(e.getAttribute(wn),t),wj(e),qK(e);const n=e.querySelector("canvas");n!==null&&wr(n)}function hY(e,t,n,r,i,o){const a=K2(r,i.statsDisplay),s=p=>q2(t,p),u=p=>z2(p.band,s),l=p=>ba(p)?Er(r):{fixed:J2(p,H2(t,Er(r)),s)},c=p=>wE(e,t,n,u(p),l(p.xRange),a),f=X2(r,i.statsDisplay);if(f===null){so(e,{raw:c,log:null},i,o);return}const d=ev(()=>nR(t,f,j2(r,f)));so(e,{raw:c,log:{label:f.label,draw:p=>{const h=d();if(h===null){At(e,W2);return}const m=h.range(p.xRange);if(m===null){At(e,G2);return}const v=u(p);wE(e,h.source,ao(n,f),[xt(v[0],f,m),xt(v[1],f,m)],{fixed:m});const _=JT(h.dropped,f,!1);_!==null&&Q2(e,_)}}},i,o)}function nR(e,t,n){const r=e.inView(t);if(r===null)return null;const i=oY(r.centralRange(Ht),n);return{source:r.source,sourceMassShare:r.sourceMassShare,range:o=>ba(o)?i:eR(o,i,r.source.support,a=>q2(e,a),t),dropped:{low:r.droppedLow,high:r.droppedHigh}}}function rR(e,t,n,r,i){const o=K2(n,r.statsDisplay),a=d=>p=>q2(d.source,p),s=d=>{const p=I2(e);return t.map(h=>({...h,band:z2(d.band,a(h)),sourceMassShare:1,shown:!p.has(h.curveKey)}))},u=d=>ba(d)||t.length===0?Er(n):{fixed:FE(t.map(p=>J2(d,H2(p.source,Er(n)),a(p))))},l=d=>SE(e,s(d),u(d.xRange),o),c=X2(n,r.statsDisplay);let f=null;if(c!==null&&t.length>0){const d=ev(()=>{const p=t.map(v=>nR(v.source,c,j2(n,c)));if(!p.every(v=>v!==null))return null;const h=p,m={low:Math.max(0,...h.map(v=>v.dropped.low)),high:Math.max(0,...h.map(v=>v.dropped.high))};return{views:h,note:JT(m,c,t.length>1)}});f={label:c.label,draw:p=>{const h=d();if(h===null){At(e,W2);return}const{views:m,note:v}=h,_=m.map(g=>g.range(p.xRange)).filter(g=>g!==null);if(_.length===0){At(e,G2);return}const b=FE(_),y=s(p).map((g,E)=>({...g,source:m[E].source,sourceMassShare:m[E].sourceMassShare,locationValue:ao(g.locationValue,c),band:[xt(g.band[0],c,b),xt(g.band[1],c,b)]}));SE(e,y,{fixed:b}),v!==null&&Q2(e,v)}}}so(e,{raw:l,log:f},r,i)}function mY(e){return e.cutEnds.low||e.cutEnds.high}function vY(e,t,n,r,i,o,a,s=null,u){const l=o===null?s:null,c=l===null?{shape:a.shape,secondaryShape:null}:a,f=b=>({shape:ao(c.shape,b),secondaryShape:ao(c.secondaryShape,b)}),d=K2(r,i.statsDisplay),p=b=>o===null?null:z2(b.band,y=>o.quantile(y)),h=b=>{if(ba(b)||o===null)return{shape:t,range:n,cutEnds:xT};const y=J2(b,n,g=>o.quantile(g));return{shape:o.shapeOver(y[0],y[1]),range:y,cutEnds:{low:!En(b.lo),high:!En(b.hi)}}},m=b=>{const y=h(b.xRange),g=p(b);TE(e,y.shape,y.range,g===null?null:[g[0],g[1]],d,y.cutEnds,l,c)},v=X2(r,i.statsDisplay);let _=null;if(v!==null){const b=E=>[Math.min(...E.map(A=>A.shape.points[0].x)),Math.max(...E.map(A=>A.shape.points[A.shape.points.length-1].x))],y=ev(()=>{const E=QT(l===null?[t]:[t,l],v),A=E[0],$=l===null?null:E[1];if(A===null||l!==null&&$===null)return null;const C=$===null?[A]:[A,$],I=b(C),T=I[1]>I[0]?P2(I[0],I[1],j2(r,v)):I;return{transformed:A,transformedSecondary:$,standardShapes:C,standardRange:T}}),g=(E,A)=>{var R;const $=h(A),C=mY($),I=C?sY($.shape,v):E.transformed;if(I===null)return null;const T=C?[I]:E.standardShapes,S=C?eR(A,E.standardRange,b(T),L=>o.quantile(L),v):E.standardRange;if(S===null)return null;const w=[...new Set(T.flatMap(L=>L.droppedPointMassXs))].sort((L,O)=>L-O);return{view:{shape:I.shape,range:S,cutEnds:$.cutEnds},secondaryShape:((R=E.transformedSecondary)==null?void 0:R.shape)??null,note:uY(w,v)}};_={label:v.label,draw:E=>{const A=y();if(A===null){At(e,W2);return}const $=g(A,E.xRange);if($===null){At(e,G2);return}const{view:C,note:I}=$,T=p(E),S=T===null?null:[xt(T[0],v,C.range),xt(T[1],v,C.range)];TE(e,C.shape,C.range,S,null,C.cutEnds,$.secondaryShape,f(v)),I!==null&&Q2(e,I)}}}so(e,{raw:m,log:_},i,u)}function _Y(e){return{location:zt(e),median:e.median,p5:e.p5,p95:e.p95}}const bY="no finite mean (the tail is too heavy for one)",iR=Math.round(1/Gq);function gY(e){const t=(r,i)=>`${r.toLocaleString()} ${r===1?"is":"are"} ${i}`,n=[...e.zeroDraws>0?[t(e.zeroDraws,"exactly 0")]:[],...e.infiniteDraws>0?[t(e.infiniteDraws,"infinite")]:[]];return`no geometric mean (of ${e.draws.toLocaleString()} sampled values, ${n.join(" and ")}, and a geometric mean tolerates at most 1 in ${iR.toLocaleString()}; the median and interval are of the other values)`}function oR(e,t,n,r){return e.value===null?r(gY(e.boundaryArtifactCounts)):`${Ct[e.statistic]}${t}${n(e.value)}`}function aR(e){return e===null?"":hK(e)}function zh(e,t,n,r,i,o){const a=u=>Ee(u,t,n,r),s=u=>`<span class="hl">${u}</span>`;return'<div class="result-main">'+(i===""?"":`${i} = `)+oR(e.location," ≈ ",u=>s(a(u))+aR(o),s)+`, median ≈ ${s(a(e.median))}</div><div class="result-detail">90% interval: [${a(e.p5)}, ${a(e.p95)}]</div>`}const sR={[xr]:"Mean mixed from stored means",[Kt]:"Geometric mean mixed from stored geometric means"};function Jh(e,t,n,r){return'<div class="result-main">'+(r===""?"":`${r} = `)+`${Ct[e.statistic]} ≈ <span class="hl">${Ee(e.value,t,n,"monte-carlo")}</span></div>`}function Yoe(e,t,n){const r=i=>`<span class="derived-value">${Ee(i,t,n,"monte-carlo")}</span>`;return{valueHtml:oR(e.location," ",r,i=>i)+`, median ${r(e.median)}`,detailHtml:`<span class="derived-detail">· 90% interval [${Ee(e.p5,t,n,"monte-carlo")}, ${Ee(e.p95,t,n,"monte-carlo")}]</span>`}}function yY(e,t,n,r,i){const o=s=>Ee(s,t,n,"deterministic"),a=e.mean===null?`<span class="hl">${bY}</span>`:`mean = <span class="hl">${o(e.mean)}</span>${aR(i)}`;return'<div class="result-main">'+(r===""?"":`${r}: `)+`${a}, median = <span class="hl">${o(e.median)}</span></div><div class="result-detail">90% interval: [${o(e.p5)}, ${o(e.p95)}]</div>`}function uR(e,t,n){const r=Wn([e],[1],"sample",n);if(r.mode!=="sample")throw new Error(`Exact distribution for ${t} needs sample-mode inputs`);const i=r.trials[0].specs[t];if(i===void 0)throw new Error(`Exact distribution for ${t}: a trial has no sample response`);return rS(i,r.ranges[t])}function EY(e,t,n,r){const i=e.map(o=>`${Ee(o.x,n,r,"deterministic")} (${o.count} of ${t})`).join(", ");return`<div class="code-info">Point-mass responses: ${H(i)}. Each is drawn as a spike whose height is its share of the responses, not a density.</div>`}function wY(e,t,n,r){const{distribs:i,weights:o}=t,{canvasId:a,valueRange:s}=n,u=_B(i,o),l=qo(i,o),c=AK(i,o),f=r.probAsOdds,d=[O2([{kind:"exact",labelHtml:`Exact (${n.trialsDetail})`,bodyHtml:yY(u,s,f,n.targetLabelHtml,HT)}],XA(a),{canvasId:a,foldOpenById:r.foldOpenById})];l.length>0&&d.push(EY(l,i.length,s,f)),d.push(...n.trailingNotesHtml),e.innerHTML=d.join(""),M2(e);const p=e.querySelector(`#${a}`);p&&vY(p,c,TK(c,s),s,XK(r),{quantile:h=>sn(i,o,h),shapeOver:(h,m)=>PT(i,o,h,m)},{shape:u.mean,secondaryShape:null},null,n.widthPreference)}const Mt={top:10,left:50,right:15},SY=800,$Y=500,ir=12,AY=5,TY=3,RY=2,BE=12,HE=2,lR=2,IY=3,cR=1,LY=4,CY=10,kY=1,NY=15,xE=["#333","#c44","#44c","#4c4","#c84","#84c","#4cc","#c4c","#888","#ca4"],fR="#333",dR=2,OY=1.5,zoe={color:fR,lineWidth:dR};function MY(e,t,n=CY,r=[]){if(t)return t;let i=1/0,o=-1/0;const a=c=>{c<i&&(i=c),c>o&&(o=c)};for(const c of e)for(const f of c.points)a(f.y);for(const c of r)a(c.y);if(!Number.isFinite(i)||!Number.isFinite(o))return null;const l=(o-i||kY)*n/100;return[i-l,o+l]}function DY(e,t,n){const r=e.reduce((f,d)=>Math.max(f,d),0),i=Math.max(BE,(e[0]??0)/2),o=Math.max(Mt.right,(e[e.length-1]??0)/2),a=pR(e.length,n-t-i-o),s=e.map((f,d)=>t+i+d*a),u=e.some((f,d)=>{if(d===0)return!1;const p=s[d-1]+e[d-1]/2;return s[d]-f/2-p<LY}),l=iT(r,ir),c=u?l.below:ir;return{rotated:u,firstPositionInset:u?Math.max(BE,Math.ceil(l.left)):i,lastPositionInset:u?Mt.right:o,bottomMargin:wt+lR+Math.ceil(c)+IY+ir+cR}}function pR(e,t){return e>1?t/(e-1):0}function PY(e,t,n){e.width||(e.width=SY),e.height||(e.height=$Y);const r=e.width,i=e.height,o=e.getContext("2d");if(!o)return;o.clearRect(0,0,r,i);const a=n.scatterOverlay;if(t.length===0&&!a)return;const s=MY(t,n.yRange,n.yRangePaddingPercent,a==null?void 0:a.points);if(!s)return;const[u,l]=s,c=qY(u,l,AY),f=c.length>1?c[1]-c[0]:l-u,d=c.map(w=>BY(w,f));o.font=Pt(ir);const p=d.reduce((w,R)=>Math.max(w,o.measureText(R).width),0),h=Math.ceil(p)+wt+HE,m=n.xLabels.length,v=n.xLabels.map(w=>o.measureText(w).width),_=Math.max(Mt.left,h),b=DY(v,_,r),y=r-_-Mt.right,g=i-Mt.top-b.bottomMargin,E=r-_-b.firstPositionInset-b.lastPositionInset;if(E<=0||g<=0)return;const A=pR(m,E),$=w=>_+b.firstPositionInset+w*A,C=w=>Mt.top+g-(w-u)/(l-u)*g;o.save(),o.strokeStyle="#ddd",o.lineWidth=.5,o.setLineDash([3,3]);for(const w of c){const R=C(w);o.beginPath(),o.moveTo(_,R),o.lineTo(_+y,R),o.stroke()}if(o.restore(),a){o.fillStyle=a.color;for(const w of a.points)o.beginPath(),o.arc($(w.x),C(w.y),RY,0,Math.PI*2),o.fill()}const I=t.length===1;for(let w=0;w<t.length;w++){const R=t[w],L=R.color??(I?fR:xE[w%xE.length]),O=R.lineWidth??(I?dR:OY);o.strokeStyle=L,o.lineWidth=O;for(const k of FY(R.points))k.length<2||(o.beginPath(),k.forEach((P,M)=>{const D=$(P.x),N=C(P.y);M===0?o.moveTo(D,N):o.lineTo(D,N)}),o.stroke());o.fillStyle=L;for(const k of R.points)o.beginPath(),o.arc($(k.x),C(k.y),TY,0,Math.PI*2),o.fill()}const T=Mt.top+g,S=T+wt+lR;o.fillStyle="#4d4d4d",o.font=Pt(ir);for(let w=0;w<m;w++){const R=$(w),L=n.xLabels[w];Vh(o,R,T,wt),b.rotated?oT(o,L,R,S):(o.textAlign="center",o.textBaseline="top",o.fillText(L,R,S))}o.fillStyle="#777",o.textAlign="center",o.textBaseline="bottom",o.fillText(n.xAxisLabel,_+y/2,i-cR),o.fillStyle="#4d4d4d",o.textAlign="right",o.textBaseline="middle";for(let w=0;w<c.length;w++){const R=c[w],L=C(R);Oj(o,_,L,wt),o.fillText(d[w],_-wt-HE,L)}}function FY(e){const t=[];for(const n of e){const r=t[t.length-1],i=r==null?void 0:r[r.length-1];r!==void 0&&i!==void 0&&n.x===i.x+1?r.push(n):t.push([n])}return t}function qY(e,t,n){const r=t-e;if(r<=0)return[e];const i=r/(n-1),o=Math.pow(10,Math.floor(Math.log10(i))),a=i/o;let s;a<=1.5?s=1*o:a<=3.5?s=2*o:a<=7.5?s=5*o:s=10*o;const u=Math.ceil(e/s)*s,l=[];for(let c=u;c<=t+s*.001;c+=s)l.push(c);return l}function BY(e,t){if(Number.isInteger(e)||!Number.isFinite(t)||t<=0)return e.toString();const n=Math.min(NY,Math.max(0,-Math.floor(Math.log10(t)))),r=e.toFixed(n).replace(/0+$/,"").replace(/\.$/,"");return r==="-0"?"0":r}const tv={top:10,left:60,right:60},HY=80,xY=120,UY=1e3,GY=60,WY=90,VY=800,XY=35,ft=12,jY=12,hR="#ddd",KY="#eee",YY=220,UE=10,zY=80,JY=25,GE=95,Qn=12,mR=8,Qh=4,zp=64,vR=8,QY=6,_R=5,bR=4,ZY=4,ez=6,gR=1,tz=.6;function nz(e){return Math.max(tv.left,vR+ft+QY+Math.ceil(e)+_R)}function rz(e){return Math.max(tv.right,mR+Qn+Qh+Math.ceil(e))}function iz(e,t){return e>t-ZY}function oz(e,t){const n=t?iT(e,ft).below:ft;return bR+Math.ceil(n)+ez+ft+gR}let Jp;function az(){return Jp===void 0&&(Jp=typeof document>"u"?null:document.createElement("canvas").getContext("2d")),Jp}function Qp(e,t){return t?(t.font=Pt(ft),e.reduce((n,r)=>Math.max(n,t.measureText(r).width),0)):e.reduce((n,r)=>Math.max(n,r.length*tz*ft),0)}function yR(e){if(e.valueRange){const[r,i]=e.valueRange;return{vMin:r,vMax:i,hasValues:!0}}let t=1/0,n=-1/0;for(const r of e.cells)for(const i of r)i!==null&&(i<t&&(t=i),i>n&&(n=i));return{vMin:t,vMax:n,hasValues:isFinite(t)&&isFinite(n)}}function sz(e,t){const{vMin:n,vMax:r,hasValues:i}=yR(e);return{yTickPx:Qp(e.yLabels,t),xTickPx:Qp(e.xLabels,t),legendPx:i?Qp([Sr(n),Sr(r)],t):0}}function ER(e,t,n){const r=sz(e,t),i=nz(r.yTickPx),o=rz(r.legendPx),a=n(i,o),s=iz(r.xTickPx,a);return{margin:{top:tv.top,bottom:oz(r.xTickPx,s),left:i,right:o},cellW:a,rotateXTickLabels:s}}function WE(e,t,n){return Math.max(t,Math.min(n,Math.floor(e)))}function wR(e){const{margin:t,cellW:n}=ER(e,az(),()=>WE(UY/e.xLabels.length,HY,xY)),r=WE(VY/e.yLabels.length,GY,WY);return{width:t.left+e.xLabels.length*n+t.right,height:t.top+e.yLabels.length*r+t.bottom}}function uz(e,t){var v;const n=t.xLabels.length,r=t.yLabels.length;if(n===0||r===0)return;const i=e.getContext("2d");if(!i)return;if(!e.width||!e.height){const _=wR(t);e.width=_.width,e.height=_.height}const o=e.width,a=e.height;i.clearRect(0,0,o,a);const{margin:s,cellW:u,rotateXTickLabels:l}=ER(t,i,(_,b)=>(o-_-b)/n),c=(a-s.top-s.bottom)/r;if(u<=0||c<=0)return;const{vMin:f,vMax:d,hasValues:p}=yR(t),h=p&&d-f||1,m=u>=XY;i.font=Pt(jY),i.textAlign="center",i.textBaseline="middle";for(let _=0;_<r;_++)for(let b=0;b<n;b++){const y=s.left+b*u,g=s.top+_*c,E=((v=t.cells[_])==null?void 0:v[b])??null;if(E===null)i.fillStyle=KY,i.fillRect(y,g,u,c);else{const A=p?(E-f)/h:0;i.fillStyle=SR(A),i.fillRect(y,g,u,c),m&&(i.fillStyle=A>.55?"#fff":"#333",i.fillText(Sr(E),y+u/2,g+c/2))}i.strokeStyle=hR,i.lineWidth=1,i.strokeRect(y,g,u,c)}i.fillStyle="#4d4d4d",i.font=Pt(ft);for(let _=0;_<n;_++){const b=s.left+_*u+u/2,y=s.top+r*c+bR;l?oT(i,t.xLabels[_],b,y):(i.textAlign="center",i.textBaseline="top",i.fillText(t.xLabels[_],b,y))}i.fillStyle="#777",i.textAlign="center",i.textBaseline="bottom",i.fillText(t.xAxisLabel,s.left+n*u/2,a-gR),i.fillStyle="#4d4d4d",i.font=Pt(ft),i.textAlign="right",i.textBaseline="middle";for(let _=0;_<r;_++){const b=s.top+_*c+c/2;i.fillText(t.yLabels[_],s.left-_R,b)}i.save(),i.fillStyle="#777",i.textAlign="center",i.textBaseline="top",i.translate(vR,s.top+r*c/2),i.rotate(-Math.PI/2),i.fillText(t.yAxisLabel,0,0),i.restore(),p&&lz(i,o,s,r*c,f,d)}function SR(e){const t=UE+(zY-UE)*e,n=GE+(JY-GE)*e;return`hsl(${YY}, ${t.toFixed(0)}%, ${n.toFixed(0)}%)`}function Sr(e){return Number.isInteger(e)?e.toString():e.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function lz(e,t,n,r,i,o){const a=t-n.right+mR,s=n.top,u=r,l=u/zp;for(let c=0;c<zp;c++){const f=1-c/(zp-1);e.fillStyle=SR(f),e.fillRect(a,s+c*l,Qn,l+1)}e.strokeStyle=hR,e.lineWidth=1,e.strokeRect(a,s,Qn,u),e.fillStyle="#4d4d4d",e.font=Pt(ft),e.textAlign="left",e.textBaseline="middle",e.fillText(Sr(o),a+Qn+Qh,s),e.fillText(Sr(i),a+Qn+Qh,s+u)}const VE=["#c44","#44c","#2a9d4a","#c84","#84c","#2aa","#c4c","#888","#ca4"];function $R(e){return VE[e%VE.length]}const bi=[[134,182,239],[109,167,236],[85,152,231],[57,135,229],[42,120,214],[37,106,191],[28,92,171],[24,79,149],[16,66,129],[13,54,107]],cz=1;function fz(e,t){if(!Number.isInteger(e)||!Number.isInteger(t)||e<0||e>=t)throw new Error(`ordinalLineColor: index ${e} is not a position among ${t} values`);const r=(t>1?e/(t-1):cz)*(bi.length-1),i=Math.min(Math.floor(r),bi.length-2),o=r-i,a=bi[i],s=bi[i+1];return"#"+a.map((u,l)=>Math.round(u+(s[l]-u)*o).toString(16).padStart(2,"0")).join("")}const dz="heatmap",pz={heatmap:"Heatmap",lines:"Lines"},hz="two-cparam-sweep-display-btn",mz="two-cparam-sweep-x-axis-btn",XE="two-cparam-sweep-toggle",vz="two-cparam-sweep-x-axis",_z="two-cparam-sweep-btn",bz="active",gz=2;function yz(e){return e==="heatmap"||e==="lines"?e:dz}function Ez(e,t){const[n,r]=e,o=e.find(a=>a.name===t)??(n.values.length!==r.values.length?n.values.length>r.values.length?n:r:n.name<=r.name?n:r);return{xAxis:o,lineAxis:o===n?r:n}}function wz(e){const t=e.declaredValues??e.values,n=e.declaredValues!==void 0?Do(e.declaredValues)==="number":typeof e.values[0]=="number";return e.values.map((r,i)=>{const o=t.indexOf(r),a=o===-1?i:o,s=o===-1?e.values.length:t.length;return n?fz(a,s):$R(a)})}function Sz(e,t){if(t.length!==e.yLabels.length)throw new Error(`heatmapGridAsLines: ${t.length} colours for ${e.yLabels.length} lines`);const n=[];e.cells.forEach((i,o)=>{const a=i.flatMap((s,u)=>s===null?[]:[{x:u,y:s}]);a.length!==0&&n.push({points:a,label:e.yLabels[o],color:t[o],lineWidth:gz})});const r=n.length===0?null:{title:e.yAxisLabel,ariaLabel:`Line colours by ${e.yAxisLabel}`,entries:n.map(i=>({label:i.label,color:i.color}))};return{series:n,xLabels:e.xLabels,scatterPoints:[],legend:r}}function jE(e,t,n,r,i){return`<button class="${_z} ${e}${i?` ${bz}`:""}" ${t}="${V(n)}">${H(r)}</button>`}function KE(e,t,n){const r=["heatmap","lines"];let i=`<div class="${XE}">`+r.map(o=>jE(hz,"data-two-cparam-sweep-display",o,pz[o],o===e)).join("")+"</div>";return n!==null&&(i+=`<div class="${vz}">x-axis:<div class="${XE}">`+t.map(o=>jE(mz,"data-cparam-name",o.name,o.name,o===n.xAxis)).join("")+"</div></div>"),i}const AR="data-outside-click-neutral";function $z(e){return e instanceof Element&&e.closest(`[${AR}]`)!==null}const TR="a[href], button, input, select, textarea, label";function Az(e){const t=e.closest(`[${Yo}]`);if(t===null)return!1;const n=e.closest(TR);if(n!==null&&t.contains(n))return!1;const r=e.closest("summary");return r!==null&&!t.contains(r)}let YE=!1;function Tz(){YE||(YE=!0,document.addEventListener("click",e=>{e.target instanceof Element&&Az(e.target)&&e.preventDefault()},{capture:!0}))}function Joe(e,t){if(t)return null;const n=e.closest(`.${et} > summary`);if(n===null)return null;const r=e.closest(TR);if(r!==null&&n.contains(r))return null;const i=n.parentElement;return i instanceof HTMLDetailsElement?{foldId:i.id,open:!i.open,isProseSection:i.classList.contains(Vi)}:null}const nv=18,Vn=80,Rz=16,Iz="help-widget",Lz="help-widget-btn",Cz="help-widget-label",kz="Click for an explanation",uo=new Set;let zE=!1;function Nz(){zE||(zE=!0,document.addEventListener("click",e=>{if(!$z(e.target))for(const t of[...uo])document.contains(t.wrapper)?t.wrapper.contains(e.target)||t.close():uo.delete(t)}))}function Qoe(e,t=nv,n=Vn){return Zr(r=>{r.textContent=e},!1,!0,ov(t),n)}function rv(e,t=nv,n=Vn){return Zr(r=>{r.innerHTML=e()},!0,!1,ov(t),n)}function RR(e,t,n=Vn){return Zr(r=>{r.innerHTML=t()},!0,!1,IR(e),n)}function Zoe(e,t,n=Vn,r){return Zr(i=>{i.replaceChildren(),t(i)},!0,!1,IR(e),n,r)}const iv="help-widget-nested-slot",Oz="nestedHelp",Mz="nestedHelpLabel";function Dz(e){return`<span class="${iv}" data-nested-help="${V(e)}"></span>`}function Pz(e,t){return`<span class="${iv}" data-nested-help="${V(e)}" data-nested-help-label="${V(t)}"></span>`}function Fz(e,t){for(const n of e.querySelectorAll(`.${iv}`)){const r=n.dataset[Oz]??"",i=t[r];if(i===void 0)continue;const o=n.dataset[Mz];n.appendChild(o===void 0?rv(i):RR(o,i))}}function eae(e,t){return Zr(n=>{n.innerHTML=e(),Fz(n,t)},!0,!1,ov(nv),Vn)}function qz(e,t,n=Vn){const r=LR(i=>{i.innerHTML=t()},!0,!1,e,!1,n);return r.wrapper.style.display="contents",r}function ov(e){const t=document.createElement("button");return t.className=Lz,t.type="button",t.textContent="?",t.setAttribute("aria-label","Help"),t.style.width=`${e}px`,t.style.height=`${e}px`,t.style.fontSize=`${Math.round(e*.6)}px`,t.style.lineHeight=`${e}px`,t}function IR(e){const t=document.createElement("button");return t.className=Cz,t.type="button",t.textContent=e,t.title=kz,t}function Zr(e,t,n,r,i,o){return LR(e,t,n,r,!0,i,o).wrapper}function LR(e,t,n,r,i,o,a){const s=document.createElement("span");s.className=Iz,s.style.display="inline-block";const u=document.createElement("div");u.className="help-widget-popover",a!==void 0&&u.classList.add(a),u.setAttribute(Yo,""),Tz(),u.hidden=!0;const l=document.createElement("button");l.className="help-widget-close",l.type="button",l.textContent="×",l.setAttribute("aria-label","Close");const c=document.createElement("div");c.className=t?"help-widget-body html-content":"help-widget-body",u.appendChild(l),u.appendChild(c),i&&s.appendChild(r),s.appendChild(u),n&&e(c);const f={wrapper:s,close:()=>h()};function d(){e(c),u.hidden=!1,uo.add(f),p()}function p(){const m=window.innerWidth,v=window.innerHeight,_=Math.round(m*o/100),b=v-2*Rz;u.style.width=`${_}px`,u.style.maxHeight=`${b}px`;const y=Math.min(u.offsetHeight,b);u.style.left=`${Math.round((m-_)/2)}px`,u.style.top=`${Math.round((v-y)/2)}px`}function h(){u.hidden=!0,uo.delete(f)}return r.addEventListener("click",m=>{m.stopPropagation(),u.hidden?d():h()}),l.addEventListener("click",m=>{m.stopPropagation(),h()}),u.addEventListener("toggle",()=>{u.hidden||p()},{capture:!0}),u.addEventListener("keydown",m=>{m.key==="Escape"&&(h(),r.focus({preventScroll:!0}))}),s.addEventListener("keydown",m=>{m.key==="Escape"&&!u.hidden&&(h(),r.focus({preventScroll:!0}))}),Nz(),{wrapper:s,isOpen:()=>!u.hidden,close:h}}const Bz="data-mc-control-state",Hz="mcControlState",xz="data-mc-live-activation-token",JE="mcLiveActivationToken",Uz="data-mc-control-token",QE="mcControlToken",Zp="mc-sampling-control",CR="mc-sampling-control-activate",Gz="mc-sampling-control-inline",eh="mc-sampling-control-help",Wz="mc-converged",Vz={activate:"▶",start:"▶",stop:"■","catching-up":""},Et={sample:"Sample",sampleMore:"Sample more",stop:"Stop sampling",catchingUp:"Catching up"},kR=.05,or=.01;function Xz(e){if(!Number.isInteger(e)||e<1)throw new Error(`distributionCount must be a positive integer, got ${e}`);return Math.ceil(Math.log(2*e/kR)/(2*or*or))}const jz=16;function NR(e,t,n=1){const r=br();return r.hasTargetCatchingUp(e)?{state:"catching-up",controlToken:e}:{state:r.isRunningOrAboutToRun(e)?"stop":"start",controlToken:e,content:t,displayedDistributionCount:n}}const ZE=new WeakMap;function Kz(e){return"run live Monte Carlo draws in your browser "+(e.kind==="curve"?"and overlay them on the precomputed curve.":e.kind==="summary"?"and plot them beside the precomputed numbers.":e.kind==="nothing"?"and plot them.":e.kind==="sweep"?"for each point/cell that is neither precomputed nor sampled yet, and plot them.":`and plot them beside the ${XL(e.statistic)}.`)+" Nothing is sampled until you ask."}function Yz(e){if(e.state==="activate")return{state:"activate",hidden:!1,name:Et.sample,title:`${Et.sample}: ${Kz(e.stored)}`,converged:!1,activationToken:e.activationToken,controlToken:e.controlToken,helpHtml:()=>Xre({stored:e.stored})};if(e.state==="catching-up")return{state:"catching-up",hidden:!0,name:Et.catchingUp,title:"",converged:!1,activationToken:null,controlToken:e.controlToken,helpHtml:()=>""};const{content:t,state:n}=e,r=Xz(e.displayedDistributionCount),i=t!==null&&t.kind==="distributions"&&t.pooledSampleCount>=r,o=n==="stop"?Et.stop:t===null?Et.sample:Et.sampleMore,a=(1-kR)*100,s=t===null||t.kind!=="distributions"?null:` (n=${t.pooledSampleCount.toLocaleString()}). `+(i?`Green: every displayed quantile is within ${or} probability mass at ${a}% confidence; further sampling keeps sharpening.`:`Turns green when every displayed quantile is within ${or} probability mass at ${a}% confidence.`);let u;return n==="stop"?u=s===null?`${o}.`:`${o}${s}`:t===null?u=`${o}: run live Monte Carlo draws in your browser and plot them.`:s===null?u=`${o}: pool more MC samples into every plotted point/cell.`:u=`${o}: pool more MC samples into this plot${s}`,{state:n,hidden:!1,name:o,title:u,converged:i,activationToken:null,controlToken:e.controlToken,helpHtml:()=>Gre({content:t,converged:i,convergedMinSamples:r,displayEpsilon:or,confidencePercent:a})}}function e7(e,t,n){e.hidden=n.hidden,t.hidden=n.hidden,e.dataset[Hz]=n.state,e.textContent=Vz[n.state],e.setAttribute("aria-label",n.name),e.title=n.title,e.classList.toggle(CR,n.state==="activate"),e.classList.toggle(Wz,n.converged),n.activationToken===null?delete e.dataset[JE]:e.dataset[JE]=n.activationToken,n.controlToken===null?delete e.dataset[QE]:e.dataset[QE]=n.controlToken}function av(e,t){var c,f;const n=e.parentElement;if(!(n!=null&&n.classList.contains("resizable-canvas-wrapper"))){console.warn("attachMcSamplingControl: canvas is not wrapped by makeResizable");return}const r=Yz(t),i=n.querySelector(`:scope > .${Zp}`),o=i===null?void 0:ZE.get(i),a=n.querySelector(`:scope > .${eh}`);if(i!==null&&o!==void 0&&a!==null){e7(i,a,r),o.html=r.helpHtml;return}(c=n.querySelector(`.${Zp}`))==null||c.remove(),(f=n.querySelector(`.${eh}`))==null||f.remove();const s=document.createElement("button");s.type="button",s.className=Zp;const u={html:r.helpHtml};ZE.set(s,u);const l=rv(()=>u.html(),jz);l.classList.add(eh),e7(s,l,r),n.appendChild(s),n.appendChild(l)}function tae(e,t,n){return`<button type="button" class="${CR} ${Gz}" ${Bz}="activate" ${xz}="${H(e)}"`+(t===null?"":` ${Uz}="${H(t)}"`)+` aria-label="${Et.sample}" title="${H(`${Et.sample}: ${n}`)}">&#9654;</button>`}const zz="mixture-coverage",Jz="show-single-trial-view",Qz="Show single trial view",Zz="data-record-trial-index",eJ="data-cparams";function tJ(e,t){return e>=t?null:`${e} of ${t} trials contribute here`}function nJ(e){const t=e.contributingRecordTrialIndices,n=tJ(t.length,e.recordTrialCount);if(n===null)return"";const r=t.length===1&&t[0]!==e.recordTrialOnView?` <button type="button" class="${Jz}" ${Zz}="${t[0]}"`+(e.cparams===void 0?"":` ${eJ}="${V(JSON.stringify(e.cparams))}"`)+`>${Qz}</button>`:"";return`<span class="${zz}">${n}.${r}</span>`}const OR="calc-result-controls",th="calc-result-body";function MR(e){return e.querySelector(`:scope > .${OR}`)}function rJ(e,t){const n=MR(e),r=e.querySelector(`:scope > .${th}`);return n!==null&&r!==null?(t!==null&&(n.innerHTML=t),r):(e.innerHTML=`<div class="${OR}">${t??""}</div><div class="${th}"></div>`,e.querySelector(`:scope > .${th}`))}const iJ="result-error";function DR(e){return`<div class="${iJ}">${H(e)}</div>`}const PR="sampling…",FR="sampling warming up…",ya="catching up…";function qR(e){return[e.charAt(0).toUpperCase()+e.slice(1)]}const oJ=qR(FR),aJ=qR(ya);function sJ(e){return e.awaiting==="catch-up"?ya:FR}function sv(e){return e.awaiting==="catch-up"?aJ:oJ}const BR=["No precomputed plot here.","▶ draws it with live Monte Carlo."];function uJ(e){const t=`${e} read unsampled live MC (its pools had their run and are in none), which its control should never leave it in`;console.error(t)}const HR="live-mc-count",xR="live-mc-sampling-note",zn="live-mc-superseded-result",Jn="data-live-mc-shown-result";function UR(e){return`<span class="lc">${e}</span>`}const lJ="⟦",cJ="⟧";function nh(e){const t=UR("n"),n=`${t}=${g2(e).toLocaleString()}`,r=e.barrierInnerIters===null?n:`${n}, E${lJ}·${cJ} ${t}=${e.barrierInnerIters.toLocaleString()}`;return`<span class="${HR}">${r}</span>`}function uv(e){return`<span class="${xR}">${UR(e)}</span>`}function GR(){return uv(PR)}function WR(e){switch(e.liveStatus){case"refining":return`${nh(e)}, ${GR()}`;case"catching-up":return`${nh(e)}, ${uv(ya)}`;case"settled":case null:return nh(e)}}function VR(e){return uv(sJ(e))}const lo=new WeakMap;function XR(e,t){const n=lo.get(e);n!==void 0&&(n.outcome={identity:t,shows:"result"})}function jR(e,t){const n=lo.get(e);return n===void 0||n.shownIdentity!==t?!1:(n.outcome={identity:t,shows:"kept-while-sampling"},!0)}function KR(e,t){var s;const n=e.getAttribute(Jn),r=n===null?[]:[...e.childNodes],i={shownIdentity:n,outcome:null};lo.set(e,i);try{t()}catch(u){throw e.removeAttribute(Jn),e.classList.remove(zn),u}finally{lo.delete(e)}const o=i.outcome;if((o==null?void 0:o.shows)==="result"){e.setAttribute(Jn,o.identity),e.classList.remove(zn);return}if((o==null?void 0:o.shows)!=="kept-while-sampling"){e.removeAttribute(Jn),e.classList.remove(zn);return}const a=e.childNodes;if(a.length!==r.length||r.some((u,l)=>a[l]!==u)){console.error("a live-MC renderer kept the result its container shows, then wrote the container; showing what it wrote"),e.removeAttribute(Jn),e.classList.remove(zn);return}e.classList.add(zn);for(const u of e.querySelectorAll(`.${HR}`))((s=u.nextElementSibling)==null?void 0:s.classList.contains(xR))!==!0&&u.insertAdjacentHTML("afterend",`, ${GR()}`)}function YR(e){return e==="yours"?"on-render":"on-request"}let lv=!1;function nae(){lv=!0}function fJ(e,t){return e==="yours"&&t==="sample"&&!lv}const dJ=2048,pJ=64,it=new Map,$r=new Map;let zR=1;const co=new Map,ot=new Map;function JR(e){const t=dt(e),n=it.get(t);if(n!==void 0)return it.delete(t),it.set(t,n),n;const r={token:`mclive-${zR++}`,activated:!1};for(it.set(t,r),$r.set(r.token,r);it.size>dJ;){const i=it.keys().next().value;$r.delete(it.get(i).token),it.delete(i)}return r}function hJ(e){const t=[...new Set(e)].sort(),n=dt(t),r=ot.get(n);if(r!==void 0)return ot.delete(n),ot.set(n,r),r;const i=`mcliveg-${zR++}`;for(ot.set(n,i),co.set(i,t);ot.size>pJ;){const o=ot.keys().next().value;co.delete(ot.get(o)),ot.delete(o)}return i}function rae(e){const t=co.get(e);if(t!==void 0){let r=!1;for(const i of t){const o=$r.get(i);o!==void 0&&(o.activated=!0,r=!0)}return r}const n=$r.get(e);return n===void 0?!1:(n.activated=!0,!0)}function iae(){lv=!1,it.clear(),$r.clear(),co.clear(),ot.clear()}const Sn={VISIBLE_AOPTS:"visible-aopts",TCHOICE:"tchoice",CPARAMS_SECTION:"cparams",TEXT_DEFINITIONS:"text-definitions",INTERPRETED_SYMBOL_SEMANTICS:"interpreted-symbols",DEFINED_SYMBOLS:"defined-symbols",AXIOMS:"axioms",SIMPLIFYING_ASSUMPTIONS:"simplifying-assumptions",DERIVED_AXIOMS:"derived-axioms",ESTIMATION:"estimation",RESPONSE_NOTES:"response-notes",COMPUTED_FORMULAS:"formulas",FRAMING_ROOT:"framing-notes-root",FRAMING_EXPLAINER:"framing-notes-explainer",SRCQUOTE_EXPLAINER:"srcquote-explainer",CALCULATOR:"calculator",REFERENCES:"references"};function mJ(e,t){return`${Sn[e]}-${OJ(t)}`}const vJ="estimator-instructions",Zh="estimator-instructions-fold",_J="Estimator Instructions",bJ=!0,gJ="hir-section-fold",yJ=!0;function cv(e,t,n){var r;return((r=n.foldOpenById)==null?void 0:r[e])??t?" open":""}const EJ="calculator-heading-controls",wJ="calculator-heading-controls";function rh(e,t,n,r){const i=t==="ESTIMATION"?"svar":t==="INTERPRETED_SYMBOL_SEMANTICS"?"isym":t==="COMPUTED_FORMULAS"?"formula":null,o=i!==null&&GW(r,i).length>0,a=t==="CALCULATOR"?`<span id="${EJ}" class="${wJ}" ${Yo}></span>`:"";return`<h2 id="${e}-section-header">${n}${o?VW():""}${a}</h2>`}function ih(e,t,n,r){const i=cv(e,yJ,r);return`<details id="${e}" class="${gJ} ${et}"${i}><summary>${t}</summary>`+n+"</details>"}const SJ={TEXT_DEFINITIONS:e=>kW(e),INTERPRETED_SYMBOL_SEMANTICS:e=>XW(e),DEFINED_SYMBOLS:e=>CW(e),AXIOMS:e=>Hp(e,{classification:"ordinary"}),SIMPLIFYING_ASSUMPTIONS:e=>Hp(e,{classification:"simplifying"}),DERIVED_AXIOMS:e=>Hp(e,{classification:"derived"}),COMPUTED_FORMULAS:e=>jW(e),REFERENCES:e=>AW(e)};function $J(e,t){const n=e.length>0,r=e.some(m9),i=e.some(o=>!m9(o));return'<div class="dag-legend">Each formula computes its left-hand side. <span class="dag-glyph">↖</span> marks a value computed by an earlier formula (click to jump to it); <span class="dag-glyph">↘</span> marks a left-hand side used by a later formula; '+(n?"hovering highlights each occurrence of the value and the heading of each collapsed group holding the value":"hovering highlights each occurrence of the value")+(t==="ids"?`. Undecorated leaf names are estimated directly — each names a card in <a href="#${Sn.ESTIMATION}-section">Estimation</a> (click to jump to it).`:`. Undecorated leaf expressions are estimated directly — with Variables set to IDs, each shows as the name of its card in <a href="#${Sn.ESTIMATION}-section">Estimation</a>.`)+(r?" A group gathers the formulas computed from one Estimation group's estimates alone, under that group's heading.":"")+(i?r?" Other groups gather formulas under headings of their own.":" A group gathers formulas under a heading of its own.":"")+"</div>"}const AJ="DERIVED_FORMS",t7="derived-forms-fold",TJ=!1,RJ="Computed auxiliary formulas",IJ="CALCULATOR_RESULTS",LJ="stats-display-control";function CJ(e){const t=e.conclusion_form_or_none();return e.form.filter(n=>n.id!==t).map(n=>n.id)}function oae(e,t,n){let r;if(n)r={...n,unresolvedRefs:n.unresolvedRefs??new Set};else{const o=XB(e),a=aV(e,HG(e,{},"plainnum"),"plainnum"),s=a.option_value_or("show_typical_examples",i$),u=a.option_value_or("srcquotes_inlined",BG),l={};for(const c of a.get_option_bare_names())l[c]=a.option_value(c);r={jprobInstance:a,showTypical:s,srcquotesInlined:u,refLookup:o,displayOptionValues:l,unresolvedRefs:new Set}}const i=[];if(yh in e.get_fgroups()){const o=cv(Zh,bJ,r);i.push(`<details id="${Zh}" class="hir-fold ${et} estimator-instructions-fold"${o} hidden><summary>${_J}</summary><div id="${vJ}" class="hir-fold-body"></div></details>`)}for(const o of e.layout.sections.html)i.push(kJ(o,e,r));return{html:i.join(""),unresolvedRefs:[...r.unresolvedRefs].sort()}}function kJ(e,t,n){if("chunkid"in e)return QR(e.chunkid,t,n,e.style)??"";if("subentries"in e){const s=Sn[e.delegation_id],u=e.subentries.map(l=>NJ(l,t,n,e.delegation_id));return ih(`${s}-section`,rh(s,e.delegation_id,e.header,t),u.join(""),n)}const{delegation_id:r,header:i}=e,o=Sn[r];if(!o)throw new Error("Expected `delegation_id` field here to be an element of DelegatedLayoutEntryId.");if((r==="FRAMING_ROOT"||r==="FRAMING_EXPLAINER")&&!t.has_standard_rendering_framing_notes()||r==="SRCQUOTE_EXPLAINER"&&!t.has_srcquotes())return"";const a=SJ[r];if(a){const s=a(n);if(!s.trim())return"";const u=r==="COMPUTED_FORMULAS"?sW($J(WW(t),n.formulaSvarView??kh)+s,n.formulaView??jG,n.formulaSvarView??kh):s;return i==null?u:ih(`${o}-section`,rh(o,r,i,t),u,n)}return r==="FRAMING_EXPLAINER"||r==="SRCQUOTE_EXPLAINER"?`<div id="${o}-section"><div id="${o}-content"></div></div>`:ih(`${o}-section`,rh(o,r,i??"",t),`<div id="${o}-content"></div>`,n)}function NJ(e,t,n,r){if(typeof e=="string"){if(e===AJ){const o=CJ(t).map(a=>`<div id="derived-form-${Po(a)}" class="derived-form" data-form-id="${a}"></div>`).join("");return o===""?"":`<details id="${t7}" class="hir-fold ${et} derived-forms-fold"${cv(t7,TJ,n)}><summary>${RJ}</summary><div class="hir-fold-body derived-forms-fold-body">${o}</div></details>`}const i=mJ(r,e);return e===IJ?`<div id="${LJ}"></div><div id="${i}"></div>`:`<div id="${i}"></div>`}return QR(e.chunkid,t,n,e.style)??""}function QR(e,t,n,r){const i=t.find_textchunk_defn(e);if(i===void 0)throw new Error(`Layout references textchunk "${e}", which the jprob template does not declare`);if(!i)return null;if(r===AB)return`<h1 class="arg-title">${Qo(i,n)}</h1>`;const o=ke(i,n,`textchunk-${wh(e)}`);switch(r){case"subtitle":return`<div class="arg-subtitle">${o}</div>`;case"note":return`<div class="hir-loud-note">${o}</div>`;case"warning":return`<div class="arg-warning">${o}</div>`;case TB:return`<div class="hir-webonly-note">${o}</div>`;default:return`<div class="textchunk">${o}</div>`}}function OJ(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"").replace(/^-/,"")}const n7="[\\p{L}\\p{N}_]";function oh(e){const t=e.indexOf(":");if(t<0)throw new Error(`estimator_text_refs: entity id ${JSON.stringify(e)} has no namespace prefix`);return e.slice(t+1)}function MJ(e,t){const n=[],r=(o,a,s)=>{const u=t.get(s);u!==void 0&&n.push({term:o,ownerId:a,entry:u})},i=o=>r(oh(o),o,o);for(const o of e.isym_entries()){i(o.id);for(const a of qn)for(const s of o[a]??[])i(s.id);for(const a of o.aliases??[])r(a,o.id,a)}for(const o of e.get_svar_bare_names())i(`svar:${o}`);for(const o of e.get_axioms())i(o.id);for(const o of Ym(e))i(o);for(const o of e.get_cparams())i(o.id);for(const o of e.get_tchoice_decls())i(o.id);for(const o of e.definedSym)i(o.id);for(const o of e.referenceable_framing_notes()){const a=t.get(o.id);if(a===void 0)continue;const s=oh(o.id),u=o.static_anchor,l=u!==null&&u!=="root"&&oh(u)===s;n.push({term:s,ownerId:o.id,entry:a,...l?{yieldsToOwnerId:u}:{}})}for(const o of jm(e))for(const a of o.aliases)r(a,o.id,a);return n}function DJ(e){if(e.length!==2)return!1;const t=e.map(n=>n.slice(0,n.indexOf(":"))).sort();return t[0]==="isym"&&t[1]==="svar"}function PJ(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function FJ(e,t,n){const r=new Map;for(const u of MJ(e,t)){const l=r.get(u.term)??[];l.some(c=>c.ownerId===u.ownerId)||l.push(u),r.set(u.term,l)}const i=new Map,o=[];for(const[u,l]of r){const c=new Set(l.map(p=>p.ownerId)),f=l.filter(p=>p.yieldsToOwnerId===void 0||!c.has(p.yieldsToOwnerId)),d=f.map(p=>p.ownerId);f.length===1?i.set(u,f[0].entry):DJ(d)?i.set(u,f.find(p=>p.ownerId.startsWith("svar:")).entry):o.push(`'${u}' names ${[...d].sort().join(", ")}`)}const a=new Set(e.estimator_text_name_link_exclusions()),s=[...i.keys()];return{entryByTerm:i,termReByPlace:{text:r7(s.filter(u=>!a.has(u))),codeSpan:r7(s)},renderOptions:{popoverAllRefs:n.popoverAllRefs}}}function r7(e){if(e.length===0)return null;const t=[...e].sort((n,r)=>r.length-n.length||(n<r?-1:n>r?1:0));return new RegExp(`(?<!${n7})(?:${t.map(PJ).join("|")})(?!${n7})`,"gu")}function i7(e,t,n){const r=t.termReByPlace[n];return r!==null&&e.search(r)>=0}function o7(e,t,n,r){const i=t.termReByPlace[r];if(i===null)return H(e);let o="",a=0;i.lastIndex=0;for(const s of e.matchAll(i)){const u=s[0],l=t.entryByTerm.get(u);if(l===void 0)throw new Error(`estimator_text_refs: matched ${JSON.stringify(u)}, which has no entry`);o+=H(e.slice(a,s.index))+TS(l,H(u),t.renderOptions,n),a=s.index+u.length}return o+H(e.slice(a))}const qJ="estimator_entity_terms";function a7(e,t){const n=new e.Token("html_inline","",0);return n.content=t,n}function BJ(e){const t=e.env.estimatorTextRefs;if(t!==null)for(const n of e.tokens){if(n.type!=="inline"||n.children===null)continue;const r=new Set;let i=0;n.children=n.children.map(o=>{if(o.type==="link_open")i++;else if(o.type==="link_close")i--;else{if(i===0&&o.type==="text"&&i7(o.content,t,"text"))return a7(e,o7(o.content,t,r,"text"));if(i===0&&o.type==="code_inline"&&i7(o.content,t,"codeSpan"))return a7(e,`<code>${o7(o.content,t,r,"codeSpan")}</code>`)}return o})}}const ZR=new Te({html:!1,linkify:!0,breaks:!0});ZR.core.ruler.push(qJ,BJ);const s7=new WeakMap;function HJ(e){const t=s7.get(e);if(t!==void 0)return t;const n=FJ(e.jprobInstance,e.refLookup,{popoverAllRefs:e.popoverAllRefs??!1});return s7.set(e,n),n}const em="estimator-text";function eI(e,t){try{const n={estimatorTextRefs:t};return ZR.render(e,n)}catch{return H(e)}}function xJ(e,t,n){e.innerHTML=eI(t,n)}function aae(e,t,n){const r=document.createElement("div");return r.classList.add(em,t),xJ(r,e,n),r}const Ar="⚙︎",fv="settings-dropdown",Ea="options-panel-open",dv="options-expand-btn",pv="options-panel",hv="visible",UJ="options-panel-right-aligned",mv="options-pref-row",gi=8;function tI(e){const t=e.buttonId===null?"":` id="${e.buttonId}"`,n=`<button class="${dv}${e.open?" active":""}"${t} type="button" aria-label="${e.accessibleName}" title="${e.accessibleName}" aria-expanded="${e.open}">${Ar}</button>`,r=[pv,...e.panelAlignment==="right"?[UJ]:[],...e.open?[hv]:[]];return`${n}<div class="${r.join(" ")}">${e.rowsHtml}${e.buttonRowsHtml}</div>`}function GJ(e,t){return`<span class="${[fv,t,...e.open?[Ea]:[]].join(" ")}">${tI(e)}</span>`}function WJ(e,t){e.classList.add(fv),e.classList.toggle(Ea,t.open),e.innerHTML=tI(t)}function vv(e){return e.classList.contains(Ea)}function nI(e,t){if(vv(e)===t)return;e.classList.toggle(Ea,t);const n=e.querySelector(`.${dv}`),r=e.querySelector(`.${pv}`);n&&(n.classList.toggle("active",t),n.setAttribute("aria-expanded",String(t))),r&&r.classList.toggle(hv,t),t&&rI(e)}function rI(e){const t=e.querySelector(`.${pv}`);if(t===null||!t.classList.contains(hv))return;t.style.translate="";const n=t.getBoundingClientRect();if(n.width===0)return;const r=document.documentElement.clientWidth,i=n.left<gi?gi-n.left:n.right>r-gi?r-gi-n.right:0;i!==0&&(t.style.translate=`${i}px 0`)}function sae(e){const t=e.closest(`.${dv}`);return(t==null?void 0:t.closest(`.${fv}`))??null}function iI(e){return`<div class="${mv}" ${e.rowAttrs}><label for="${e.inputId}" class="option-label">${e.label}</label><input id="${e.inputId}" class="option-checkbox pref-checkbox" type="checkbox" ${e.inputAttrs}${e.checked?" checked":""}></div>`}function oI(e){const t=e.min===void 0?"":` min="${e.min}"`,n=e.max===void 0?"":` max="${e.max}"`,r=e.step===void 0?"":` step="${e.step}"`;return`<div class="${mv}" ${e.rowAttrs}><label for="${e.inputId}" class="option-label">${e.label}</label><input id="${e.inputId}" class="pref-number-input" type="number" ${e.inputAttrs} value="${e.value}"${t}${n}${r}></div>`}const _v="calculator-settings-dropdown",aI="data-calculator-setting",VJ="Calculator settings",bv="plaincodeEvalTimeoutMs",ei="showDependenceComparison",XJ=[bv,Yr,zr];function uae(e){return e===Yr||e===zr}function jJ(e){return e===ei}const u7=[Yr,zr,ei];function KJ(e){return e.kind==="compare"?[...u7]:[...e.shownResponseType==="sample"?u7:[],...e.estimateQueryModeOnScreen==="plaincode"?[bv]:[]]}function YJ(){const e=je();return{plaincodeEvalTimeoutMs:e.plaincodeEvalTimeoutMs,liveMcRunDurationMs:e.liveMcRunDurationMs,liveMcPlotUpdateIntervalMs:e.liveMcPlotUpdateIntervalMs,showDependenceComparison:e.showDependenceComparison}}const sI={calculator:`under ${Ar} at the end of the Calculator heading`,compare:`under ${Ar} at the end of the "Compare results" heading`};function fo(e){return xo(e)}function zJ(e,t,n){const r=`calculator-setting-${t}-${e}`,i=`${aI}="${e}"`;if(jJ(e))return iI({rowAttrs:"",inputId:r,label:fo(e),inputAttrs:i,checked:n[e]});const o=Vm(e);return oI({rowAttrs:"",inputId:r,label:fo(e),inputAttrs:i,value:n[e],min:o.min,max:o.max,step:o.step})}let po=!1;function lae(e){po=e;for(const t of document.querySelectorAll(`.${_v}`))nI(t,e)}function JJ(e){const t=e.querySelector(`.${_v}`);t!==null&&rI(t)}function cae(){return po}function QJ(e,t){const n=KJ(e);return n.length===0?(po=!1,""):GJ({buttonId:null,accessibleName:VJ,rowsHtml:n.map(r=>zJ(r,e.kind,t)).join(""),panelAlignment:"right",buttonRowsHtml:"",open:po},_v)}function fae(e){const t=e.getAttribute(aI);if(t===ei)return{kind:"boolean",setting:t,value:e.checked};const n=XJ.find(i=>i===t);if(n===void 0)return null;const r=e.value.trim()===""?NaN:Number(e.value);return{kind:"number",setting:n,value:hS(Vm(n),r)?r:null}}function dae(e){return`Timed out after ${e}ms. Possible infinite loop — check your code. The time limit is "${fo(bv)}", ${sI.calculator}.`}function uI(e){return`<div class="code-info">These results are under the stated dependence. Their comparison with exact independence, precomputed or live, is not shown: switch on &ldquo;${fo(ei)}&rdquo; ${sI[e]}.</div>`}const ZJ={specPointerHtml:`<div class="lloads-spec-pointer">Each trial's joint-dependence specification is shown in <a href="#${Sn.ESTIMATION}-section">Estimation</a>.</div>`,couplingIrrelevantNoteHtml:'<div class="code-info">The stated dependence below does not change this view: coupling describes how responses move together, not how any one of them is distributed on its own.</div>',comparisonOffNoteHtml:uI("calculator")},pae={specPointerHtml:`<div class="lloads-spec-pointer">Each trial's joint-dependence specification is shown in ReadTrials.</div>`,couplingIrrelevantNoteHtml:'<div class="code-info">The stated dependence does not change this view: coupling describes how responses move together, not how any one of them is distributed on its own.</div>',comparisonOffNoteHtml:uI("compare")},eQ="lloads-spec-intro",lI="lloads-spec-help-slot";function tQ(){return`<div class="${eQ}"><span class="${lI}"></span><p>A latent is one shared uncertainty that can move two or more quantities together, or in opposite directions.</p></div>`}function hae(e){for(const t of e.querySelectorAll(`.${lI}`))t.childElementCount>0||t.appendChild(rv(xL))}function mae(e,t,n,r={}){if(e===void 0)return{hasDependence:!1,specHtml:""};const i=t.svar_entries().map(l=>l.bareName);let o,a=!1;if(e===null)o='<div class="lloads-independent-trial">No named latents; sampled independently.</div>';else{const l=tS(e,i);if(l!==null)throw new Error(l);a=xm(e),o=rQ(e,i,t,n)}const s=e!==null&&(r.offerCopyToYours??!1)?e:null,u=a&&!(r.keepFolded??!1);return{hasDependence:a,specHtml:`<details class="lloads-spec-view"${u?" open":""}><summary>Joint-dependence specification</summary><div class="lloads-spec-body">${tQ()}${iQ(s)}${o}</div></details>`}}function nQ(e,t){const n=t.svar_entries().map(i=>i.bareName);let r=!1;for(const i of e){if(i.lloads===null||i.lloads===void 0)continue;const o=tS(i.lloads,n);if(o!==null)throw new Error(o);r||(r=xm(i.lloads))}return r}function rQ(e,t,n,r){const i=YB(n);if(i.length!==t.length)throw new Error(`joint-dependence disclosure has ${t.length} eligible variables but ${i.length} display labels`);const o=new Map(t.map((s,u)=>[s,xn(i[u],r)]));return e.latents.map(s=>{const u=Object.entries(s.loadings).map(([l,c])=>{const f=o.get(l);if(f===void 0)throw new Error(`joint-dependence disclosure has no display label for loaded variable ${l}`);return`<li><span class="lloads-svar-label">${f}</span>: <span class="lloads-loading">${aQ(c)}</span></li>`}).join("");return`<article class="lloads-latent"><div class="lloads-latent-name ${em}">${H(s.name)}</div><div class="lloads-latent-description ${em}">${eI(s.description,HJ(r))}</div><ul class="lloads-loadings">${u}</ul></article>`}).join("")}function iQ(e){return'<div class="lloads-copy-and-introduction-row">'+Nie()+(e===null?"":oQ(e))+"</div>"}function oQ(e){return`<button class="copy-to-yours-btn lloads-copy-to-yours-btn" type="button" data-lloads-spec="${V(JSON.stringify(e))}" title="Copy this joint-dependence specification into your editable Estimate inputs">Copy to Estimate</button>`}function aQ(e){if(Object.is(e,-0)||e===0)return"0";const t=Math.abs(e).toPrecision(6).replace(/\.?0+$/,"");return e>0?`+${t}`:`−${t}`}function gv(e){switch(e){case"series":return{independent:{color:bK,bandFill:gK},joint:{color:IT,bandFill:LT}};case"stored":return{independent:{color:no,bandFill:null},joint:{color:no,bandFill:CT}};case"live":return{independent:{color:ro,bandFill:null},joint:{color:ro,bandFill:kT}}}}const Tr={independent:!0,joint:!1};function Rr(e,t){return`${e}-${t}`}const yv="Independent",Ev="Stated joint",sQ={independent:yv.toLowerCase(),joint:Ev.toLowerCase()};function uQ(e){const t=(n,r)=>{switch(r){case"series":return n;case"stored":return`${n} (precomputed)`;case"live":return`${n} (live MC)`}};return e.map(n=>{const r=gv(n);return[{label:t(yv,n),color:r.independent.color,dashed:Tr.independent,bandShaded:r.independent.bandFill!==null,curveKey:Rr(n,"independent")},{label:t(Ev,n),color:r.joint.color,dashed:Tr.joint,bandShaded:r.joint.bandFill!==null,curveKey:Rr(n,"joint")}]})}function tn(e){return`Joint-dependence comparison (${e})`}const lQ="dependence-comparison-stats";function cI(e,t){return`<div class="${lQ}"><div class="dependence-series-label dependence-series-independent">${yv}</div>`+e+`<div class="dependence-series-label dependence-series-joint">${Ev}</div>`+t+"</div>"}function cQ(e,t){return{color:gv(e)[t].color,dashed:Tr[t]}}function l7(e,t,n,r,i){const o=a=>{const s=i!==null&&mK(e[a])?cQ(i.palette,a):null,u=zh(e[a],t,n,"monte-carlo",r,s);return i===null?u:VT(Rr(i.palette,a),i.hiddenCurveKeys,u)};return cI(o("independent"),o("joint"))}function fQ(e,t,n,r){return cI(Jh(e.independent,t,n,r),Jh(e.joint,t,n,r))}function dQ(e){const t=e.box.querySelector(`#${e.canvasId}`);if(t===null)return!1;const n=[];for(const r of e.layers){const i=gv(r.palette),o=c7(r.comparison.independent,i.independent,Tr.independent,Rr(r.palette,"independent")),a=c7(r.comparison.joint,i.joint,Tr.joint,Rr(r.palette,"joint"));if(o===null||a===null)return!1;n.push(o,a)}if(n.length===0)return!1;rR(t,n,e.valueRange,e.axis,e.widthPreference);for(const{comparison:r}of e.layers)if(r.independent.mcPoolToken!==r.joint.mcPoolToken)throw new Error("CRN-paired density results do not share one MC pool token");return!0}function c7(e,t,n,r){const i=ST(e);return i===null?null:{source:i,curveKey:r,color:t.color,dashed:n,bandFill:t.bandFill,locationValue:e.location.value}}const pQ="Precomputed",hQ="Live MC",f7="stored",d7="live";function cn(e){return fj(e.canvasId,e.plotTargetId)}function fI(e){return{canvasId:e.canvasId,foldOpenById:e.foldOpenById}}function dI(e,t){return{scale:e.densityScale,statsDisplay:t.statsDisplay,percentileRanges:e.densityPercentileRanges}}function p7(e,t){const n=yQ(e!==null,t);return{stored:e,start:t.start,activation:n,live:e===null?{kind:"prepared",evaluation:t.prepare()}:n===null?null:mQ(t.prepare)}}function mQ(e){try{return{kind:"prepared",evaluation:e()}}catch(t){return{kind:"unpreparable",message:t instanceof Error?t.message:String(t)}}}const vQ={kind:"not-read"},_Q={kind:"waiting"};function pI(e){const{activation:t,live:n}=e;if(n===null||t!==null&&!t.activated)return vQ;if(n.kind==="unpreparable")return n;const r=n.evaluation.read();return _2(r)?{kind:"sampling",sampling:r}:b2(r)?(uJ("a density view"),_Q):{kind:"result",result:r}}function bQ(e){var t;return((t=e.live)==null?void 0:t.kind)==="prepared"?e.live.evaluation.mcPoolToken:null}function hI(e,t){return{kind:"live",labelHtml:e,bodyHtml:DR(t)}}function gQ(e,t){return e?{arm:"joint",footerHtml:t.comparisonOffNoteHtml+t.specPointerHtml}:{arm:"independent",footerHtml:""}}function tm(e,t){Hm(e,t.locationStatistic,"a stored location statistic")}function nm(e,t,n){const r=()=>At(t,n);r(),U2(t,r,e.widthPreference)}function mI(e,t){return`density:${e.canvasId}:${e.plotTargetId}:${t}`}function vI(e,t,n,r,i){return n.start==="on-render"&&i&&!r&&jR(e.box,mI(e,t))}function _I(e,t,n){n.start==="on-render"&&XR(e.box,mI(e,t))}function bI(e,t,n,r,i){const o=bQ(e);switch(t.kind){case"not-read":return e.activation===null?null:{state:"activate",activationToken:e.activation.token,controlToken:o,stored:i};case"sampling":case"unpreparable":return null;case"waiting":case"result":if(o===null)throw new Error("a density view read live MC with no live evaluation prepared");return NR(o,n===null?null:{kind:"distributions",pooledSampleCount:n},Math.max(1,r))}}function gI(e){return e.map(t=>t.map(n=>[n.curveKey,n.label,n.color,n.dashed,n.bandShaded]))}function yQ(e,t){if(!e&&t.start==="on-render")return null;const n=t.activationKeyParts();if(n!==null)return JR(n);if(!e)throw new Error("a density view with nothing stored for its target has no live evaluator");return null}function h7(e,t,n){var i;const r=(i=e.find(o=>t!==null&&o.comparison===t))==null?void 0:i.palette;return r===void 0?null:{palette:r,hiddenCurveKeys:n}}function EQ(e,t,n,r){const{stored:i,activation:o}=n,{box:a,canvasId:s}=e,u=(i==null?void 0:i.kind)==="pair"?xX(i.pair,t.locationStatistic):null,l=u!==null&&u.independent.storedDistribution!==null&&u.joint.storedDistribution!==null?u:null,c=(i==null?void 0:i.kind)==="location-statistics"?i.pair:null;c!==null&&(tm(c.independent,t),tm(c.joint,t));const f=pI(n),d=f.kind==="sampling"?f.sampling:null,p=f.kind==="result"?f.result:null,h=f.kind==="not-read"&&o!==null||f.kind==="waiting";if(vI(e,"comparison",n,i!==null,d!==null))return;const m=[];l!==null&&m.push({comparison:l,palette:"stored"}),p!==null&&m.push({comparison:p,palette:m.length===0?"series":"live"});const v=uQ(m.map(I=>I.palette).reverse()),_=m.length>0||h||d!==null,b=_?m.length>0?"legend":"bare":"none",y=b==="none"?"":b==="legend"?jA(s,v,cn(e)):ha(s),g=da(cn(e)),E=[];u!==null?E.push({kind:"stored",labelHtml:tn(`precomputed, ${t.storedTrialsDetail}`),bodyHtml:l7(u,t.valueRange,t.statsDisplay,t.targetLabelHtml,h7(m,l,g))}):c!==null?E.push({kind:"stored",labelHtml:tn(`${sR[c.joint.statistic].toLowerCase()}, ${t.storedTrialsDetail}`),bodyHtml:fQ(c,t.valueRange,t.statsDisplay,t.targetLabelHtml)}):h&&E.push({kind:"stored",labelHtml:tn(`not precomputed, ${t.storedTrialsDetail}`),bodyHtml:null}),f.kind==="unpreparable"?E.push(hI(tn("live Monte Carlo"),f.message)):p!==null?E.push({kind:"live",labelHtml:tn(`live Monte Carlo, ${WR(p.joint)}`),bodyHtml:l7(p,t.valueRange,t.statsDisplay,t.targetLabelHtml,h7(m,p,g))}):d!==null&&E.push({kind:"live",labelHtml:tn(`live Monte Carlo, ${VR(d)}`),bodyHtml:null});const A=_?d!==null?m.length===0?"sampling-message":"layers":m.length>0?"layers":"pending-message":"none",$=_?bI(n,f,p===null?null:g2(p.joint),m.length*2,l!==null?{kind:"curve"}:c!==null?{kind:"location-statistic",statistic:c.joint.statistic}:i!==null?{kind:"summary"}:{kind:"nothing"}):null;k2(a,C2(["comparison",eT(E),b,gI(v),cn(e),A,$!==null,r]),{build:()=>{a.innerHTML=O2(E,y,fI(e))+r,M2(a)},patch:()=>tT(a,E)}),p!==null&&_I(e,"comparison",n);const C=a.querySelector(`#${s}`);if(C!==null){if(m.length>0){if(!dQ({box:a,canvasId:s,layers:m,valueRange:t.valueRange,axis:dI(e,t),widthPreference:e.widthPreference}))return}else nm(e,C,d!==null?sv(d):BR);$!==null&&av(C,$)}}function wQ(e,t,n,r){const{stored:i,activation:o}=r,a=sQ[n.arm],{box:s,canvasId:u}=e,l=t.valueRange;i!==null&&tm(i.kind==="stats"?zt(i.stats):i.location,t);const c=(i==null?void 0:i.kind)==="stats"?_Y(i.stats):null,f=(i==null?void 0:i.kind)==="stats"&&c!==null?yK(i.stats,f7,c.location.value):null,d=pI(r),p=d.kind==="sampling"?d.sampling:null,h=d.kind==="result"?d.result:null,m=d.kind==="not-read"&&o!==null||d.kind==="waiting";if(vI(e,"single-arm",r,i!==null,p!==null))return;const v=h===null?null:ST(h),_=h===null?null:h.location.value,b=v===null||f===null?null:{source:v,curveKey:d7,color:ro,dashed:!1,bandFill:kT,locationValue:_},y=f!==null||h!==null||m||p!==null,g=f===null?[]:[[{label:pQ,color:no,dashed:!1,bandShaded:!0,curveKey:f7},...v===null?[]:[{label:hQ,color:ro,dashed:!1,bandShaded:!0,curveKey:d7}]]],E=f===null!=(v===null),A=y?g.length>0?"legend":E?"single-curve":"bare":"none",$=A==="none"?"":A==="legend"?jA(u,g,cn(e)):A==="single-curve"?XA(u):ha(u),C=da(cn(e)),I=(k,P)=>k===null?P:VT(k.curveKey,C,P),T=[];(i==null?void 0:i.kind)==="stats"&&c!==null?T.push({kind:"stored",labelHtml:`Precomputed (${a}, ${t.storedTrialsDetail})`,bodyHtml:I(f,zh(c,l,t.statsDisplay,"monte-carlo",t.targetLabelHtml,f===null?null:jh(f)))}):(i==null?void 0:i.kind)==="location-statistic"?T.push({kind:"stored",labelHtml:`${sR[i.location.statistic]} (${a}, ${t.storedTrialsDetail})`,bodyHtml:Jh(i.location,l,t.statsDisplay,t.targetLabelHtml)}):m&&T.push({kind:"stored",labelHtml:`Not precomputed (${a}, ${t.storedTrialsDetail})`,bodyHtml:null}),d.kind==="unpreparable"?T.push(hI(`Live MC (${a})`,d.message)):h!==null?T.push({kind:"live",labelHtml:`Live MC (${a}, ${WR(h)})`,bodyHtml:I(b,zh(h,l,t.statsDisplay,"monte-carlo",t.targetLabelHtml,b!==null?jh(b):v!==null?RT:null))}):p!==null&&T.push({kind:"live",labelHtml:`Live MC (${a}, ${VR(p)})`,bodyHtml:null});const S=y?f!==null?"overlay":v!==null?"live-curve":p!==null?"sampling-message":h===null?"pending-message":"blank":"none",w=S==="none"||S==="blank"?null:bI(r,d,h===null?null:g2(h),(f===null?0:1)+(h===null?0:1),f!==null?{kind:"curve"}:(i==null?void 0:i.kind)==="location-statistic"?{kind:"location-statistic",statistic:i.location.statistic}:i!==null?{kind:"summary"}:{kind:"nothing"});k2(s,C2(["single-arm",eT(T),A,gI(g),cn(e),S,w!==null,n.footerHtml]),{build:()=>{s.innerHTML=O2(T,$,fI(e))+n.footerHtml,M2(s)},patch:()=>tT(s,T)}),h!==null&&_I(e,"single-arm",r);const R=s.querySelector(`#${u}`);if(R===null)return;const L=dI(e,t),O=e.widthPreference;if(f!==null){const k=[f];b!==null&&k.push(b),rR(R,k,l,L,O)}else if(v!==null)hY(R,v,_,l,L,O);else if(p!==null)nm(e,R,sv(p));else if(h===null)nm(e,R,BR);else return;w!==null&&av(R,w)}const SQ={anthropic:"Anthropic",openai:"OpenAI"},Ue=[{name:"low",abbreviation:"l"},{name:"medium",abbreviation:"m"},{name:"high",abbreviation:"h"},{name:"xhigh",abbreviation:"xh"},{name:"max",abbreviation:"max"}],ho=[{model:"haiku",shortName:"Haiku",displayName:"Claude Haiku",agentCli:"claudecode",efforts:Ue},{model:"sonnet",shortName:"Sonnet",displayName:"Claude Sonnet",agentCli:"claudecode",efforts:Ue},{model:"opus",shortName:"Opus",displayName:"Claude Opus",agentCli:"claudecode",efforts:Ue},{model:"fable",shortName:"Fable",displayName:"Claude Fable",agentCli:"claudecode",efforts:Ue},{model:"luna",shortName:"Luna",displayName:"GPT Luna",agentCli:"codex",efforts:Ue},{model:"terra",shortName:"Terra",displayName:"GPT Terra",agentCli:"codex",efforts:Ue},{model:"sol",shortName:"Sol",displayName:"GPT Sol",agentCli:"codex",efforts:Ue},{model:"astra",shortName:"Astra",displayName:"GPT Astra",agentCli:"codex",efforts:Ue}],wa=":";function Qt(e){const t=ho.findIndex(n=>n.model===e);if(t<0)throw new Error(`unknown model ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:ho[t],order:t}}function rm(e){return Qt(e).config.agentCli}function wv(e,t){const{config:n}=Qt(e),r=n.efforts.findIndex(i=>i.name===t);if(r<0)throw new Error(`unknown effort ${JSON.stringify(t)} for model ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:n.efforts[r],order:r}}function $Q(e,t){return e===t?0:e<t?-1:1}function AQ(e,t,n){if(t.length===0)throw new Error(`makeModelVersionEffortKey: empty version not supported (model=${e}).`);if(n===null)throw new Error(`makeModelVersionEffortKey: null effort not supported (model=${e}, version=${t}). A null effort identifies a record of several model configurations — every published entry carries an explicit effort — which does not participate in the model/version/effort sweep.`);return[e,encodeURIComponent(t),n].join(wa)}function ti(e){const t=e.split(wa);if(t.length!==3||t.some(a=>a.length===0))throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`);const[n,r,i]=t;let o;try{o=decodeURIComponent(r)}catch{throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`)}if(o.length===0)throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`);return{model:n,version:o,effort:i}}function TQ(e){const{model:t,version:n,effort:r}=ti(e);return`${Qt(t).config.displayName} ${n} ${r}`}function RQ(e){const{model:t,version:n,effort:r}=ti(e),{config:i}=Qt(t),{config:o}=wv(t,r);return`${i.shortName}${n}${o.abbreviation}`}function vae(e){const{model:t,version:n}=ti(e);return yI(t,n)}function _ae(e){const{model:t,effort:n}=ti(e);return wv(t,n).config.abbreviation}function IQ(e){const t=Array.from(e,n=>{const r=ti(n),i=Qt(r.model).order,o=wv(r.model,r.effort).order;return{key:n,parsed:r,modelOrder:i,effortOrder:o}});return t.sort((n,r)=>n.modelOrder-r.modelOrder||$Q(n.parsed.version,r.parsed.version)||n.effortOrder-r.effortOrder),t.map(({key:n})=>n)}function $n(e){return AQ(e.model,e.version,e.effort)}function Sv(e){const t=new Map(e.map(n=>[$n(n),n]));return IQ(t.keys()).map(n=>t.get(n))}function yI(e,t){if(t.length===0)throw new Error(`makeModelVersionKey: empty version not supported (model=${e}).`);return[e,encodeURIComponent(t)].join(wa)}function EI(e){const t=e.split(wa);if(t.length!==2||t.some(o=>o.length===0))throw new Error(`parseModelVersionKey: invalid key ${JSON.stringify(e)}`);const[n,r]=t;let i;try{i=decodeURIComponent(r)}catch{throw new Error(`parseModelVersionKey: invalid key ${JSON.stringify(e)}`)}return{model:n,version:i}}function LQ(e){const{model:t,version:n}=EI(e);return`${Qt(t).config.shortName}${n}`}function CQ(e){const{model:t,version:n}=EI(e);return`${Qt(t).config.displayName} ${n}`}function wI(){return[...new Set(ho.map(e=>e.agentCli))]}const m7={claudecode:"Ant",codex:"OAI"},v7={claudecode:{name:"Claude Code",provider:"anthropic"},codex:{name:"Codex",provider:"openai"}};function SI(e){if(!Object.hasOwn(m7,e))throw new Error(`unknown agent CLI ${JSON.stringify(e)}. Add it to AGENT_CLI_LABEL in model_version_effort_plot_support.ts.`);return m7[e]}function kQ(e){const t=n=>{const r=Ue.findIndex(i=>i.name===n);if(r<0)throw new Error(`unknown effort ${JSON.stringify(n)}. Add it to EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return r};return Array.from(e).sort((n,r)=>t(n)-t(r))}function bae(){return{agentClis:wI().map(e=>({label:SI(e),name:v7[e].name,providerName:SQ[v7[e].provider]})),models:ho.map(e=>({shortName:e.shortName,displayName:e.displayName})),efforts:Ue.map(e=>({...e}))}}function NQ(e,t){try{return{tables:[xV(e)],weights:[1],transform:e.transform}}catch(n){console.warn(`omitting an undecodable quantile table: ${n.message}`);return}}function OQ(e,t){const{quantile_table:n,...r}=e,i={...r};if(n!==void 0){const o=NQ(n);o!==void 0&&(i.quantile_table_mixture=o)}return i}function ni(e,t){const n={};for(const[r,i]of Object.entries(e))n[r]=OQ(i);return n}function Sa(e,t){const n={};for(const[r,i]of Object.entries(e))n[r]=ni(i);return n}function MQ(e,t){const{precomputed:n,precomputed_aux_forms:r,...i}=e;return{...i,...n===void 0?{}:{precomputed:ni(n)},...r===void 0?{}:{precomputed_aux_forms:Sa(r)}}}function DQ(e,t){return{cparams:e.cparams,trials:e.trials.map(n=>MQ(n)),precomputed:ni(e.precomputed),...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:Sa(e.precomputed_aux_forms)}}}function PQ(e,t){return{...e,cparam_combos:e.cparam_combos.map(n=>DQ(n))}}function FQ(e,t){return{trial_index:e.trial_index,...e.precomputed===void 0?{}:{precomputed:ni(e.precomputed)},...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:Sa(e.precomputed_aux_forms)}}}function gae(e,t){return e.map(n=>({name_or_pseudoname:n.name_or_pseudoname,query_mode:n.query_mode,label:n.label,cparam_combos:n.cparam_combos.map(r=>({cparams:r.cparams,precomputed:ni(r.precomputed),...r.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:Sa(r.precomputed_aux_forms)},trials:r.trials.map(i=>FQ(i))}))}))}function qQ(e){return JSON.stringify(Object.keys(e).sort().map(t=>[t,e[t]]))}function yae(e,t){const n=[],r=new Set;for(const i of e){if(typeof i.entry_id!="string"){const o=`published richcode results carry an entry with no entry_id (${JSON.stringify(i.label)}), which no current producer writes: the file predates trial-dict schema 14 and needs regenerating`;console.warn(o);continue}if(r.has(i.entry_id)){const o=`published richcode results carry more than one entry with entry_id ${JSON.stringify(i.entry_id)}; its trials have no stable identity`;console.warn(o)}r.add(i.entry_id),n.push(PQ(i))}return n}const $I="mixture";function $v(e){return e.effort!==null}function Av(e){return{model:e.model,version:e.version,effort:e.effort}}function BQ(e,t){return Sv(e.filter($v).filter(n=>n.jtask_group_id===t).map(Av))}function HQ(e,t,n){return Sv(n).map(r=>{const i=$n(r),o=e.filter(s=>$v(s)&&s.jtask_group_id===t&&$n(Av(s))===i),a=`${TQ(i)} in jtask group ${JSON.stringify(t)}`;if(o.length===0)throw new Error(`mixtureGroupRecord: no individual entry is published for ${a}`);if(o.length>1)throw new Error(`mixtureGroupRecord: more than one individual entry is published for ${a}`);return o[0]})}function xQ(e){return e.flatMap(({entry:t})=>Array.from({length:t.count},(n,r)=>{var i;return{...((i=t.trial_metadata)==null?void 0:i[r])??{},model:t.model,version:t.version,effort:t.effort}}))}function UQ(e){return e.flatMap(({entry:t})=>Array.from({length:t.count},(n,r)=>({entry_id:AI(t),entry_trial_index:r})))}function AI(e){if(e.entry_id===void 0)throw new Error(`mixtureGroupRecord: individual entry ${JSON.stringify(e.label)} carries no entry_id, so its trials have no stable identity`);return e.entry_id}function GQ(e){const t=new Map;for(const{entry:n,recordTrialIndexOffset:r}of e)for(const i of n.cparam_combos){const o=qQ(i.cparams);let a=t.get(o);a===void 0&&(a={cparams:i.cparams,trials:[]},t.set(o,a)),a.trials.push(...i.trials.map(s=>({...s,trial_index:r+Un(s)})))}return[...t.values()]}function TI(e,t,n){return e.trials.map(r=>({statsByStrengthKey:n(r),weight:t[Un(r)]}))}function WQ(e,t){const n=[...new Set(e.trials.flatMap(o=>Object.keys(o.precomputed_aux_forms??{})))],r={},i={};for(const o of n){const a=TI(e,t,l=>{var c;return(c=l.precomputed_aux_forms)==null?void 0:c[o]}),s=j$(a);if(s!==null){r[o]=s;continue}const u=KV(a);u!==null&&(i[o]=u)}return{...Object.keys(r).length===0?{}:{precomputed_aux_forms:r},...Object.keys(i).length===0?{}:{aux_form_location_statistics:i}}}function VQ(e,t){const n=j$(TI(e,t,r=>r.precomputed));return{cparams:e.cparams,trials:e.trials,precomputed:n??{},...WQ(e,t)}}function XQ(e,t){const n=e[0];for(const u of e)if(JSON.stringify(u.cparam_names)!==JSON.stringify(n.cparam_names))throw new Error(`mixtureGroupRecord: members of jtask group ${JSON.stringify(t)} disagree on cparam_names: ${JSON.stringify(n.cparam_names)} vs ${JSON.stringify(u.cparam_names)}`);const r=[];let i=0;for(const u of e)r.push({entry:u,recordTrialIndexOffset:i}),i+=u.count;const o=e.map(u=>Av(u)),a={label:`${e.length} model configurations`,aid:n.aid,aopts:n.aopts,count:i,cparam_names:n.cparam_names,cparam_combos:[],model:$I,version:"",effort:null,jtask_group_id:t,jtask_group_content_hashes:[...new Set(e.flatMap(u=>u.jtask_group_content_hashes??[]))].sort(),prompt_file_basename:n.prompt_file_basename,trial_metadata:xQ(r),result_set:{member_configurations:o,trial_identities:UQ(r)}},s=m2(a);return{...a,cparam_combos:GQ(r).map(u=>VQ(u,s))}}const _7=new WeakMap;function RI(e){let t=_7.get(e);return t===void 0&&(t=new Map,_7.set(e,t)),t}function jQ(e){return JSON.stringify(["empty",e])}function II(e,t){const n=RI(e),r=jQ(t),i=n.get(r);if(i!==void 0)return i;const o=e.filter($v).filter(u=>u.jtask_group_id===t),a=o[0];if(a===void 0)throw new Error(`emptyMixtureGroupRecord: jtask group ${JSON.stringify(t)} publishes no individual entry`);const s={label:"no model configurations",aid:a.aid,aopts:a.aopts,count:0,cparam_names:a.cparam_names,cparam_combos:[],model:$I,version:"",effort:null,jtask_group_id:t,jtask_group_content_hashes:[...new Set(o.flatMap(u=>u.jtask_group_content_hashes??[]))].sort(),prompt_file_basename:a.prompt_file_basename,trial_metadata:[],result_set:{member_configurations:[],trial_identities:[]}};return n.set(r,s),s}function KQ(e,t,n){if(n.length===0)throw new Error("mixtureGroupRecord: a mixture group record needs at least one member configuration");const r=HQ(e,t,n);if(r.length===1)return r[0];const i=RI(e),o=JSON.stringify([t,K$,r.map(s=>AI(s))]);let a=i.get(o);return a===void 0&&(a=XQ(r,t),i.set(o,a)),a}function YQ(e){const t=Ce(e)?e.result_set:void 0;if(t===void 0||t.member_configurations.length<2)return[{configuration:null,trials:Array.from({length:Gn(e)},(r,i)=>({recordTrialIndex:i,trialNumber:i+1}))}];const n=new Map(t.member_configurations.map(r=>[$n(r),{configuration:r,trials:[]}]));return t.trial_identities.forEach((r,i)=>{var s;const o=(s=e.trial_metadata)==null?void 0:s[i],a=(o==null?void 0:o.model)===void 0||o.version===void 0||o.effort===void 0||o.effort===null?void 0:n.get($n({model:o.model,version:o.version,effort:o.effort}));if(a===void 0)throw new Error(`recordTrialGroups: record trial ${i} is not stamped with one of the record's member configurations`);a.trials.push({recordTrialIndex:i,trialNumber:r.entry_trial_index+1})}),[...n.values()]}function zQ(e,t){return e.result_set!==void 0?e.result_set.trial_identities[t]??null:e.entry_id===void 0||!Number.isInteger(t)||t<0||t>=e.count?null:{entry_id:e.entry_id,entry_trial_index:t}}function LI(e,t){for(let n=0;n<e.count;n++){const r=zQ(e,n);if(r!==null&&r.entry_id===t.entry_id&&r.entry_trial_index===t.entry_trial_index)return n}return null}function CI(){return je().showDependenceComparison?"pair":"joint"}function JQ(){return{mcBudgetRole:"whole-plot",arms:CI()}}function QQ(){return{mcBudgetRole:"sweep-share",arms:CI()}}const Tv="Your beliefs specification yields infinite or undefined values. Consider using non-zero numbers.",ZQ="≅",eZ="⫇",tZ="The interval computed for this formula from the bounds responses is unbounded on both sides, i.e. carries no information. Point and distribution results are unaffected.";function nZ(e,t){return e===-1/0&&t===1/0}function rZ(e){return e==="tight"?ZQ:eZ}const iZ="from point estimates";function kI(e){return e.some(Number.isNaN)?"undefined":e.some(t=>!Number.isFinite(t))?"infinite":null}function NI(){return`<p class="arg-warning">${Tv}</p>`}function Eae(e,t,n,r){const i=Xi(e,"floor"),o=Xi(t,"ceil");return`[${Ee(i,n,r)}, ${Ee(o,n,r)}]`}function oZ(e,t,n,r){const i=(e+t)/2;return Number.isNaN(i)?"undefined":Ee(i,n,r)}function aZ({labelHtml:e,value:t,valueRange:n,statsDisplay:r,labelPrefix:i="",detail:o}){const a=kI([t]);if(a==="undefined")throw new Error(Tv);return`<div class="result-main">${H(i)}${e} = <span class="hl">${Ee(t,n,r)}</span></div>`+(o===void 0?"":`<div class="result-detail">${H(o)}</div>`)+(a==="infinite"?NI():"")}function sZ({labelHtml:e,lo:t,hi:n,tightness:r,valueRange:i,statsDisplay:o,midpointDetailSuffix:a=""}){if(t>n)throw new Error(`Invalid calculated bounds: lo=${t} is greater than hi=${n}`);const s=kI([t,n]);if(s==="undefined")throw new Error(Tv);if(nZ(t,n))return`<div class="result-detail">${H(tZ)}</div>`;const u=Xi(t,"floor"),l=Xi(n,"ceil"),c=s==="infinite"&&r==="tight";return`<div class="result-main">${e} ${rZ(r)} [<span class="hl">${Ee(u,i,o)}</span>, <span class="hl">${Ee(l,i,o)}</span>]</div><div class="result-detail">midpoint: ${oZ(t,n,i,o)}${H(a)}</div>`+(c?NI():"")}function Ir(e,t){if(typeof e!="number"||Number.isNaN(e))throw new Error(`${t}: expected a number, got ${JSON.stringify(e)}`);return e}function im(e,t){if(!Array.isArray(e)||e.length!==2)throw new Error(`${t}: expected [lo, hi], got ${JSON.stringify(e)}`);const n=Ir(e[0],`${t} lo`),r=Ir(e[1],`${t} hi`);if(n>r)throw new Error(`${t}: lo=${n} is greater than hi=${r}`);return[n,r]}function OI(e,t){return Ir(e.point[t],`Code result point data for ${JSON.stringify(t)}`)}function MI(e,t){return im(e.bounds[t],`Code result bounds data for ${JSON.stringify(t)}`)}function uZ(e,t,n){var o;const r=(o=e.compform_point_val)==null?void 0:o[t];if(r!==void 0)return Ir(r,`Code result computed point value for ${t}`);if(!n)throw new Error(`Code result has no computed point value or form implementation for ${t}`);const i=n.params.map(a=>OI(e,a));return Ir(n.point(i),`Directly evaluated code result point value for ${t}`)}function lZ(e,t,n){var a,s;const r=(a=e.compform_bounds_val)==null?void 0:a[t];if(r!==void 0){const u=(s=e.compform_bounds_tightness)==null?void 0:s[t];return{interval:im(r,`Code result computed bounds value for ${t}`),tightness:u==="tight"?"tight":"loose"}}if(!n)throw new Error(`Code result has no computed bounds value or form implementation for ${t}`);if(!n.bounds)return null;if(!n.boundsTightness)throw new Error(`form ${t} has a bounds implementation but no boundsTightness — regenerate form_fns`);const i=n.params.map(u=>MI(e,u)),o=n.bounds(i);return{interval:im([o.lo,o.hi],`Directly evaluated code result bounds value for ${t}`),tightness:n.boundsTightness}}const cZ=5,fZ="rgb(59, 130, 246)";function dZ(e){return`Dots show each trial's own distribution ${Ct[e]}.`}function pZ(e){return`Lines show each trial's own distribution ${Ct[e]}.`}const hZ=" Each comes from joint or independent sampling according to that trial's stated coupling.",b7=2,DI="code-density-canvas",mZ="code-line-canvas",vZ="code-heatmap-canvas",g7="code-plot-canvas",_Z="",bZ="featured-plot",gZ="sweep-plot-header",yZ="sweep-plot-label",PI="featured-plot-body";function EZ(e){return`-featured-${e}`}function wZ(e){return{canvasIdSuffix:_Z,widthPreference:e}}function SZ(e){return{canvasIdSuffix:EZ(e),widthPreference:XT}}function $Z(e,t){return{key:e.id,formEntry:e.formEntry,barrierRegistry:t}}function Rv(e,t){if(t===null)throw new Error(`Distribution view for ${e.id} has no sample evaluator`);return t}function FI(e,t){if(t.formEntry===null)throw new Error(`Distribution view for ${e.id} requires its generated form implementation`);return t.formEntry}function Iv(e,t,n){return t.kind==="raw_response"?OI(e,t.bareName):uZ(e,t.id,t.formEntry&&gm(t.formEntry,n))}function AZ(e,t,n){return t.kind==="raw_response"?{interval:MI(e,t.bareName),tightness:"tight"}:lZ(e,t.id,t.formEntry&&gm(t.formEntry,n))}function TZ(e,t){if(e.length===0)return null;const n=[...e].sort((i,o)=>i-o),r=i=>{const o=Math.min(n.length-1,Math.max(0,Math.round(i*(n.length-1))));return n[o]};return{count:e.length,mean:Um(e,t),median:r(.5),p5:r(.05),p95:r(.95)}}function qI(e,t,n){return TZ(t.trials.map(r=>Iv(r,n,t.cparams)),kt(e,t.trials))}function mt(e,t){for(const n of e.cparam_combos){let r=!0;for(const i of e.cparam_names)if(n.cparams[i]!==t[i]){r=!1;break}if(r)return n}return null}function BI(e,t,n){const r=new Set;for(const i of e.cparam_combos){const o=i.cparams[t];o!==void 0&&r.add(o)}return n?n.filter(i=>typeof i!="boolean"&&r.has(i)):Array.from(r)}function Lv(e,t){return t[e]!==!1}function RZ(e,t){let n=0;for(const r of e)t[r]===!1&&n++;return n}function IZ(e,t){return e.filter(n=>t[n]===!1)}function HI(e,t){var n;if(t.kind==="formula")return(n=h2(Kr(e,t.id,t.isConclusion),p2(e.trials)))==null?void 0:n.stats}function LZ(e,t){return t.kind!=="formula"?null:OV(Kr(e,t.id,t.isConclusion))}function xI(e,t){var n;if(t.kind==="formula")return(n=MV(e,t.id,t.isConclusion,p2(e.trials)))==null?void 0:n.location}function CZ(e,t){return t.kind!=="formula"?null:DV(e,t.id,t.isConclusion)}function om(e,t){return Hm(e,Zo(t),"a stored location statistic")}function kZ(e,t){if(t.kind!=="formula")return;const n=h2(Kr(e,t.id,t.isConclusion),p2([e]));return n===void 0?void 0:om(zt(n.stats),t)}function ri(e,t,n){const r=YX(n.key,FI(t,n),e.cparams,n.barrierRegistry);for(const i of e.trials){const o=r.params.filter(a=>!oS(i.sample[a]));if(o.length>0)throw new Error(`Code distribution MC for ${n.key}: a trial lacks sample data for parameter(s) ${JSON.stringify(o)}`)}return r}function UI(e,t,n,r){return{distribs:t.trials.map(i=>uR(i,n.bareName,r)),weights:kt(e,t.trials)}}function NZ(e,t){return t.kind==="raw_response"?!0:e.cparam_combos.some(n=>n.trials.some(r=>Kr(r,t.id,t.isConclusion)!==void 0))}function OZ(e,t,n,r){if(t.kind==="raw_response"){const i=Gm(uR(e,t.bareName,n));if(i===null){r&&(r.encountered=!0);return}return i}return kZ(e,t)}function MZ(e,t,n,r,i,o){const a=ri(t,n,r);return cA(a,Wn(t.trials,kt(e,t.trials),"sample",i),{onIncompleteTrial:"error",...o,includeLiveDistribution:DZ})}const DZ=!0,PZ=!1;function FZ(e,t,n,r,i,o){const a=ri(t,n,r),s=Wn(t.trials,kt(e,t.trials),"sample",i),u={onIncompleteTrial:"error",...o};return a.sampleStage!==void 0?cA(a,s,{...u,includeLiveDistribution:PZ}):WX(a,s,u)}function ah(e){return{kind:"known",value:e,divergentMean:!1}}function qZ(e,t,n,r,i,o,a){if(n.kind==="raw_response"){const f=UI(e,t,n,i),d=Wm(f.distribs,f.weights);return d===null?{kind:"known",value:void 0,divergentMean:!0}:ah(d)}const s=HI(t,n);if(s)return ah(om(zt(s),n));const u=xI(t,n);if(u!==void 0)return ah(om(u,n));const l=Rv(n,r),c=a(e,t);try{return{kind:"live",activation:c,evaluation:FZ(e,t,n,l,i,o)}}catch(f){return{kind:"unpreparable",activation:c,error:f}}}function BZ(e,t,n){switch(e.kind){case"known":return e.divergentMean&&(n.divergentMeans.encountered=!0),e.value;case"unpreparable":if(e.activation!==null&&!e.activation.activated){n.waitingPointCount+=1;return}n.unpreparableMessage??(n.unpreparableMessage=e.error instanceof Error?e.error.message:String(e.error));return;case"live":{if(e.activation!==null&&!e.activation.activated){n.waitingPointCount+=1;return}if(t===null)throw new Error("a sweep read a live point with no control token prepared for its points");n.readLivePointCount+=1;const r=e.evaluation.readForControl(t);if(_2(r)){n.samplingPoints.count+=1,r.awaiting==="first-draws"&&(n.samplingPoints.firstDrawsCount+=1);return}if(b2(r)){n.unsampledPointCount+=1;return}if(r.location.value===null){n.noGeometricMeans.encountered=!0;return}return r.location.value}}}function HZ(e){return e===null?'<div class="code-info">No distribution plot target is available.</div>':null}function xZ(e,t,n){return{target:t,sampleTarget:t.kind==="formula"?$Z(t,n):null,paramRanges:Iq(e.svar_entries())}}function GI({target:e,paramRanges:t},n){return r=>NZ(r,e)?i=>OZ(i,e,t,n):void 0}function UZ(e,t){const n=[];return t({locationStatisticForCombo:(r,i)=>{n.push({rec:r,combo:i})},trialLocationStatisticFor:GI(e,{encountered:!1})}),n}const GZ={start:"on-request"};function WZ(e,t){return YR(e)==="on-render"?{start:"on-render",shownResultIdentity:t}:GZ}const VZ={canvasMessageLines:null,control:null,captionsHtml:[],liveResultShown:null};function XZ(e,t,n,r,i,o){const a=ri(t,n,r);return["sweep-point",...hA(a,Wn(t.trials,kt(e,t.trials),"sample",i),{onIncompleteTrial:"error",mcBudgetRole:o.mcBudgetRole,arms:a.sampleStage===void 0?uA:o.arms}),"target",a.key]}function jZ(e){return`<div class="code-info">Points with nothing precomputed are not plotted until sampled: ${e}</div>`}const y7='<div class="code-info">Points with nothing precomputed are not plotted until sampled. &#9654; samples them.</div>',E7=["No precomputed points here.","▶ samples them with live Monte Carlo."];function KZ({plotTarget:e,liveMcStart:t},n){const{target:r,sampleTarget:i,paramRanges:o}=e,a=QQ(),s=(_,b)=>{if(t.start==="on-render")return null;if(r.kind!=="formula")throw new Error("a raw-response sweep point never needs live MC");return JR(XZ(_,b,r,Rv(r,i),o,a))},u=new Map;for(const{rec:_,combo:b}of n)u.has(b)||u.set(b,qZ(_,b,r,i,o,a,s));const l=[...u.values()],c=l.find(_=>_.kind==="unpreparable");if(c!==void 0&&!l.some(_=>_.kind==="known"))throw c.error;const f=l.flatMap(_=>_.kind==="live"?[_]:[]),d=l.flatMap(_=>_.kind!=="known"&&_.activation!==null&&!_.activation.activated?[_.activation.token]:[]),p=d.length>0?hJ(d):null,h=f.length>0?Z$(f.map(_=>_.evaluation.mcPoolToken)):null,m=Zo(r),v=t.start==="on-render"&&r.kind==="formula"?t.shownResultIdentity:null;return{beginReading:()=>{const _={divergentMeans:{encountered:!1},noGeometricMeans:{encountered:!1},samplingPoints:{count:0,firstDrawsCount:0},waitingPointCount:0,unsampledPointCount:0,unpreparableMessage:null,readLivePointCount:0,plottedPointCount:0};return{locationStatisticForCombo:(b,y)=>{const g=u.get(y);if(g===void 0)throw new Error("a sweep read a combination its layout does not hold: its plot's walk and its layout (sweepPointsReadBy) have drifted apart");const E=BZ(g,h,_);return E!==void 0&&(_.plottedPointCount+=1),E},trialLocationStatisticFor:GI(e,_.divergentMeans),followUps:()=>YZ(_,{waitingPointsActivationGroupToken:p,livePointsPoolGroupToken:h,statistic:m,shownResultIdentity:v})}}}}function YZ(e,t){const{plottedPointCount:n,waitingPointCount:r,unsampledPointCount:i,readLivePointCount:o}=e,a=e.samplingPoints.count,s=yn(e.samplingPoints.firstDrawsCount>0?"first-draws":"catch-up"),{waitingPointsActivationGroupToken:u,livePointsPoolGroupToken:l,statistic:c}=t;let f=null,d=null;const p=[];if(r>0){if(u===null)throw new Error("a sweep reads points waiting for their asking but prepared no activation group for them");n===0&&(f=E7),d={state:"activate",activationToken:u,controlToken:l,stored:{kind:"sweep",statistic:c}},p.push(y7)}else if(o>0){if(l===null)throw new Error("a sweep read live points but prepared no pool group for them");n===0&&(f=a>0?sv(s):i>0?E7:null),d=NR(l,{kind:"location-statistic-per-target",statistic:c}),i>0&&p.push(y7)}e.unpreparableMessage!==null&&p.push(DR(e.unpreparableMessage)),e.divergentMeans.encountered&&p.push(_ee),e.noGeometricMeans.encountered&&p.push(bee),a>0&&p.push(jZ(s.awaiting==="catch-up"?ya:PR));const h=t.shownResultIdentity,m=h===null?null:n>0?{identity:h,shows:"result"}:a>0?{identity:h,shows:"sampling"}:null;return{canvasMessageLines:f,control:d,captionsHtml:p,liveResultShown:m}}function zZ(e,t){const n=(t==null?void 0:t.valueRange)??e.conclusion_range_or_none(),r=n===null?null:zw(n);return{heatmapValueRange:r??void 0,linePlotYRangePaddingPercent:r===null?void 0:cZ}}function ii(e,t,n,r){return P$(t.ui.cparamValues[e],n==null?void 0:n.default_value,r)}function wae(e,t,n){if(RZ(e.cparam_names,n.ui.cparamPinned)>0)return null;const r={};for(const i of e.cparam_names){const o=t.find_cparam(i),a=BI(e,i,o==null?void 0:o.allowed_values);r[i]=ii(i,n,o,a)}return mt(e,r)}function Sae(e){if(e.length===0)return;const t=e[0].cparam_names;for(let n=1;n<e.length;n++){const r=e[n].cparam_names;if(r.length!==t.length||!r.every((o,a)=>o===t[a]))throw new Error(`validateRecsCparamCompat: incompatible cparam_names: ${JSON.stringify(t)} vs ${JSON.stringify(r)}. Cannot sweep across published entries with mismatched cparam shapes.`)}}function WI(e,t,n,r,i){const o=new Map;for(let s=0;s<n.length;s++){const u={...r,[t]:n[s]},l=mt(e,u);if(l)for(const c of l.trials){const f=i(c,l);if(f===void 0)continue;const d=Un(c),p=o.get(d),h={x:s,y:f};p?p.push(h):o.set(d,[h])}}const a=JZ(e);return{series:[...o.entries()].sort(([s],[u])=>s-u).map(([s,u])=>({points:u,...a.styles.get(s)})),legend:a.legend.length===0?null:{title:null,ariaLabel:"Model configuration line colours",entries:a.legend}}}function JZ(e){const t=new Map,n=[];return YQ(e).forEach((r,i)=>{if(r.configuration===null){for(const s of r.trials)t.set(s.recordTrialIndex,{label:`trial ${s.trialNumber}`});return}const o=RQ($n(r.configuration)),a=$R(i);n.push({label:o,color:a});for(const s of r.trials)t.set(s.recordTrialIndex,{label:`${o} trial ${s.trialNumber}`,color:a})}),{styles:t,legend:n}}function QZ(e){return(t,n)=>Iv(t,e,n.cparams)}function VI(e){const t=e.precomputed[Ke];return t===void 0?void 0:zt(t).value}function ZZ(e,t,n,r,i,o,a){const s=n.map(String);if(i==="average"){const u=[],l=[];for(let c=0;c<n.length;c++){const f={...r,[t]:n[c]},d=mt(e,f);if(!d)continue;const p=o?o(e,d):VI(d);if(p!==void 0&&(u.push({x:c,y:p}),a!==void 0))for(const h of d.trials){const m=a(h,d);m!==void 0&&l.push({x:c,y:m})}}return{series:[{points:u,label:"avg"}],xLabels:s,scatterPoints:l,legend:null}}if(a===void 0)throw new Error("Separate mode of a distribution sweep needs a per-trial location statistic source");return{...WI(e,t,n,r,a),xLabels:s,scatterPoints:[]}}function eee(e,t,n,r,i,o,a){const s=n.map(String),u=i.map(String),l=[];for(let c=0;c<i.length;c++){const f=[];for(let d=0;d<n.length;d++){const p={...o,[t]:n[d],[r]:i[c]},h=mt(e,p);if(!h){f.push(null);continue}const m=a?a(e,h):VI(h);f.push(m??null)}l.push(f)}return{cells:l,xLabels:s,yLabels:u,xAxisLabel:t,yAxisLabel:r}}function tee(e,t,n,r,i,o){const a=n.map(String);if(i==="average"){const s=[];for(let u=0;u<n.length;u++){const l={...r,[t]:n[u]},c=mt(e,l);if(!c)continue;const f=qI(e,c,o);f&&s.push({x:u,y:f.mean})}return{series:[{points:s,label:"avg"}],xLabels:a,scatterPoints:[],legend:null}}return{...WI(e,t,n,r,QZ(o)),xLabels:a,scatterPoints:[]}}function nee(e,t,n,r,i,o,a){const s=n.map(String),u=i.map(String),l=[];for(let c=0;c<i.length;c++){const f=[];for(let d=0;d<n.length;d++){const p={...o,[t]:n[d],[r]:i[c]},h=mt(e,p),m=h?qI(e,h,a):null;f.push((m==null?void 0:m.mean)??null)}l.push(f)}return{cells:l,xLabels:s,yLabels:u,xAxisLabel:t,yAxisLabel:r}}function XI(e,t,n,r,i,o,a){if(!i||!o)return"";const s={};for(const u of e.cparam_names){const l=r.find_cparam(u),c=n.get(u)??[];if(c.length===0)return"";const f=ii(u,t,l,c);if((l!==void 0?Do(l.allowed_values):typeof f=="string"?"string":"number")==="string"){s[u]=f;continue}const p=Number(f);if(!Number.isFinite(p))return"";s[u]=p}return i(s)?"":`<div class="arg-warning">${a(o)}</div>`}const ree="These controls change only the Calculator's results.",iee="slider-controls-scope-note";function oee(e,t,n,r,i,o,a,s,u,l){const c=XI(e,n,r,t,s,u,l);let f=iV(t,n,i,o,a);f+=c+'<div class="slider-controls">';const d=aee(e.cparam_names,t,n,r);return f+=d.html,d.rowCount>0&&(f+=`<p class="${iee}">${H(ree)}</p>`),f+="</div>",f}function aee(e,t,n,r){let i="",o=0;for(const a of e){const s=t.find_cparam(a),u=r.get(a)??[];if(u.length===0)continue;const l=ii(a,n,s,u),c=u.indexOf(l),f=Lv(a,n.ui.cparamPinned);i+='<div class="slider-row">',i+=`<label class="slider-label">${H(a)}</label>`,i+=`<input type="range" class="cparam-slider" data-cparam="${a}" `,i+=`min="0" max="${u.length-1}" step="1" value="${c>=0?c:0}" `,i+=`${f?"":"disabled "}`,i+=`data-values='${H(JSON.stringify(u))}'>`,i+='<label class="slider-pin-label">pin <input type="checkbox" class="cparam-pin-checkbox" ',i+=`data-cparam="${a}"${f?" checked":""}></label>`,i+=`<span class="slider-value-label">${H(String(l))}</span>`,i+="</div>",o++}return{html:i,rowCount:o}}function am(e){return console.warn(`code viewer controls sync: ${e}; falling back to a full controls rebuild`),!1}function see(e,t,n,r,i,o,a,s){const u=e.querySelector(".slider-controls");if(!u)return am("no existing .slider-controls block");const l=XI(t,r,i,n,o,a,s),c=e.querySelector(":scope > .arg-warning");l===""?c==null||c.remove():c?c.outerHTML=l:u.insertAdjacentHTML("beforebegin",l);for(const f of t.cparam_names){const d=i.get(f)??[];if(d.length===0)continue;const p=n.find_cparam(f),h=ii(f,r,p,d),m=d.indexOf(h),v=u.querySelector(`.cparam-slider[data-cparam="${f}"]`),_=v==null?void 0:v.closest(".slider-row"),b=_==null?void 0:_.querySelector(".slider-value-label"),y=_==null?void 0:_.querySelector(".cparam-pin-checkbox");if(!v||!b||!y)return am(`cparam row for ${f} is missing expected controls`);const g=Lv(f,r.ui.cparamPinned);v.value=String(m>=0?m:0),v.disabled=!g,b.textContent=String(h),y.checked=g}return!0}function uee(e){return`<div class="sweep-mode-toggle"><button class="sweep-mode-btn${e==="average"?" active":""}" data-sweep-mode="average">Average</button><button class="sweep-mode-btn${e==="separate"?" active":""}" data-sweep-mode="separate">Separate</button></div>`}function lee(e,t,n){return e===null?null:ea(e,t,n)}function sm(e,t){return e===null&&t===""?"":`<div class="${gZ}">`+(e===null?"":`<div class="${yZ}">${e}</div>`)+t+"</div>"}const cee='<div class="code-info">No data for this parameter combination.</div>';function Cv(e,t){const n=mt(e,t);if(!n)throw new Error("A pinned code view was rendered for a combination the record lacks");return n}function fee(e,t,n,r,i,o,a){const s=Cv(t,n);if(!r){e.innerHTML='<div class="code-info">No point plot target is available.</div>';return}if(s.trials.length===0)throw new Error("Code point result has no trials for the selected parameter combination");const u=s.trials.map(d=>Iv(d,r,s.cparams)),l=Um(u,kt(t,s.trials)),c=r.valueRange,f=u.length===1?iZ:`per trial: ${u.map(d=>Ee(d,c,a.ui.probAsOdds)).join(", ")}`;e.innerHTML=aZ({labelHtml:ea(r,i,o),value:l,valueRange:c,statsDisplay:a.ui.probAsOdds,labelPrefix:u.length===1?"":"mean ",detail:f})}function dee(e,t,n,r,i,o,a){const s=Cv(t,n);if(!r){e.innerHTML='<div class="code-info">No bounds plot target is available.</div>';return}if(!N$(t)||s.trials.length!==1)throw new Error(`Code bounds display requires one trial; record count=${t.count}, selected combo trials=${s.trials.length}`);const u=AZ(s.trials[0],r,s.cparams);if(!u){e.innerHTML=`<div class="code-info">${H(aA)}</div>`;return}const[l,c]=u.interval;e.innerHTML=sZ({labelHtml:ea(r,i,o),lo:l,hi:c,tightness:u.tightness,valueRange:r.valueRange,statsDisplay:a.ui.probAsOdds})}function $ae(e,t,n,r,i,o,a,s,u,l){jI(e,t,n,r,i,o,a,s,u,l,!1)}function Aae(e,t,n,r,i,o,a,s,u,l){jI(e,t,n,r,i,o,a,s,u,l,!0)}function jI(e,t,n,r,i,o,a,s,u,l,c){O$(t);const f=k$(o,t,i.ui.inputMode),d=rV(n,i,f,NV(t.cparam_combos),a),p=new Map;for(const y of t.cparam_names){const g=n.find_cparam(y),E=BI(t,y,g==null?void 0:g.allowed_values);p.set(y,E)}const h=c?MR(e):null,m=h!==null&&see(h,t,n,i,p,u,l,y=>ke(y,r));c&&h===null&&am("no existing result controls");const v=rJ(e,m?null:oee(t,n,i,p,f,d,a,u,l,y=>ke(y,r))),b=pee(v,{rec:t,jprobTemplate:n,ctx:r,state:i,trialProducer:o,barrierRegistry:s,inputMode:f,selection:d,effectiveValuesMap:p});v2(v,()=>KR(v,b))}function pee(e,t){const{rec:n,jprobTemplate:r,ctx:i,state:o,trialProducer:a,barrierRegistry:s,inputMode:u,selection:l,effectiveValuesMap:c}=t,f=IZ(n.cparam_names,o.ui.cparamPinned),d=f.length,p={};for(const _ of n.cparam_names)if(Lv(_,o.ui.cparamPinned)){const b=r.find_cparam(_),y=c.get(_)??[];p[_]=ii(_,o,b,y)}const h=_=>()=>{e.innerHTML=_};if(u==="bounds"&&d>0)return h('<div class="code-info">Pin every axis to display code-response bounds.</div>');if(d>b7){const _=n.cparam_names.length-b7;return h(`<div class="code-info"><p>Pin at least ${_} parameter${_===1?"":"s"} to visualize results.</p><p>Currently ${d} parameter${d===1?"":"s"} unpinned.</p></div>`)}if(d===0&&mt(n,p)===null)return h(cee);const m={rec:n,jprobTemplate:r,ctx:i,state:o,trialProducer:a,barrierRegistry:s,inputMode:u,unpinnedCparamNames:f,effectiveValuesMap:c,pinnedValues:p};if(l.kind==="single"){const _=w7(l.target,wZ(XT),m);return()=>_(e)}const v=l.targets.map((_,b)=>w7(_,SZ(b),m));return()=>{e.innerHTML=l.targets.map(hee).join("");const _=e.querySelectorAll(`.${PI}`);v.forEach((b,y)=>{mee(_[y],b)})}}function hee(e){return`<div class="${bZ}" data-plot-formula-id="${V(e.id)}"><div class="${PI}"></div></div>`}function mee(e,t){v2(e,()=>KR(e,()=>t(e)))}function w7(e,t,n){const{rec:r,jprobTemplate:i,ctx:o,state:a,trialProducer:s,barrierRegistry:u,inputMode:l,unpinnedCparamNames:c,effectiveValuesMap:f,pinnedValues:d}=n,p=c.length,h=zZ(i,e);if(l==="bounds")return y=>dee(y,r,d,e,i,o,a);let m=null;if(l==="sample"){if(fJ(s,l))return g=>{g.innerHTML=""};const y=HZ(e);if(e===null||y!==null)return g=>{g.innerHTML=y};m=xZ(i,e,u)}const v=l;if(p===0)return m===null?y=>fee(y,r,d,e,i,o,a):yee(r,a,d,m.target,m.sampleTarget,m.paramRanges,i,ea(m.target,i,o),s,t);const _=lee(e,i,o),b=y=>p===1?$ee(r,c[0],f,d,a.ui.codeSweepMode,h.linePlotYRangePaddingPercent,e,_,v,t,y):kee(r,[S7(c[0],f,i),S7(c[1],f,i)],d,h,a.ui,e,_,v,t,y);return m===null?Iee(()=>b(null)):Ree(b,{plotTarget:m,liveMcStart:WZ(s,`sweep:${t.canvasIdSuffix}:${w$(m.target)}:${c.join(",")}`)})}function vee(e,t,n,r,i,o){return r.formEntry===null?null:[...hA(ri(t,n,r),Wn(t.trials,kt(e,t.trials),"sample",i),{onIncompleteTrial:"error",mcBudgetRole:o.mcBudgetRole,arms:o.arms}),"target",r.key]}const _ee='<div class="code-info">Some points are not plotted: the response there has no finite mean, so there is no value to place on this axis. Its distribution view still shows an exact median and interval.</div>',bee=`<div class="code-info">Some points are not plotted: more of the sampled values there are exactly 0 or infinite than a geometric mean tolerates (at most 1 in ${iR.toLocaleString()}), so there is no value to place on this axis. The distribution view there still shows a median and interval of the other sampled values.</div>`;function gee(e,t,n,r,i,o,a,s,u,l,c){const f=UI(t,n,r,i);wY(e,f,{canvasId:`${DI}${c.canvasIdSuffix}`,widthPreference:c.widthPreference,valueRange:r.valueRange,targetLabelHtml:a,trialsDetail:I$(l,f.distribs.length),trailingNotesHtml:s?[u.couplingIrrelevantNoteHtml,u.specPointerHtml]:[]},o.ui)}function yee(e,t,n,r,i,o,a,s,u,l){const c=Cv(e,n),f=Eee(e,c,t,r,i,o,a,s,ZJ,u,l),d=nJ({contributingRecordTrialIndices:c.trials.map(Un),recordTrialCount:e.count,cparams:c.cparams});return p=>{f(p),d!==""&&p.insertAdjacentHTML("afterbegin",`<div class="code-info">${d}</div>`)}}function Eee(e,t,n,r,i,o,a,s,u,l,c){const f=r.valueRange,d=nQ(t.trials,a);if(r.kind==="raw_response")return $=>gee($,e,t,r,o,n,s,d,u,l,c);const p=Rv(r,i),h=JQ(),m=$=>({box:$,canvasId:`${DI}${c.canvasIdSuffix}`,plotTargetId:w$(r),widthPreference:c.widthPreference,densityScale:n.ui.densityScale,densityPercentileRanges:SA(n.ui),foldOpenById:n.ui.foldOpenById}),v=()=>({valueRange:f,locationStatistic:Zo(r),statsDisplay:n.ui.probAsOdds,targetLabelHtml:s,storedTrialsDetail:I$(l,t.trials.length)}),_=()=>vee(e,t,r,p,o,h),b=YR(l);if(d&&h.arms==="pair"){const $=LZ(t,r),C=$===null?CZ(t,r):null,I=p7($!==null?{kind:"pair",pair:$}:C!==null?{kind:"location-statistics",pair:C}:null,{prepare:()=>UX(ri(t,r,p),Wn(t.trials,kt(e,t.trials),"sample",o),{onIncompleteTrial:"error",...h}),start:b,activationKeyParts:_});return T=>EQ(m(T),v(),I,u.specPointerHtml)}const y=HI(t,r),g=y===void 0?xI(t,r):void 0;p.formEntry===null&&y===void 0&&g===void 0&&FI(r,p);const E=p7(y!==void 0?{kind:"stats",stats:y}:g!==void 0?{kind:"location-statistic",location:g}:null,{prepare:()=>MZ(e,t,r,p,o,h),start:b,activationKeyParts:_}),A=gQ(d,u);return $=>wQ(m($),v(),A,E)}function wee(e){return e.length===0?{}:{scatterOverlay:{points:e,color:fZ}}}function KI(e,t){const n=t.kind==="formula"?hZ:"";return`<div class="code-info" style="margin-top: 6px;">${e(Zo(t))}${n}</div>`}function See(e,t){return e.length===0||t===null?"":KI(dZ,t)}function $ee(e,t,n,r,i,o,a,s,u,l,c){const f=n.get(t)??[],d=u==="sample",p=c==null?void 0:c.trialLocationStatisticFor(e),h=!d||p!==void 0,m=e.count>1&&h,v=m?i:"average",_=a===null?{series:[],xLabels:f.map(String),scatterPoints:[],legend:null}:d?ZZ(e,t,f,r,v,c==null?void 0:c.locationStatisticForCombo,p):tee(e,t,f,r,v,a);let b="";m&&(v==="separate"?b+=d&&a!==null?KI(pZ,a):'<div class="code-info" style="margin-top: 6px;">Separate mode shows per-trial point values.</div>':d||(b+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>')),b+=See(_.scatterPoints,a);const y=sm(s,m?uee(v):"");return YI(_,t,o,y,b,l)}function YI({series:e,xLabels:t,scatterPoints:n,legend:r},i,o,a,s,u){const l=r===null?"":gj(r.entries.map(f=>({...f,dashed:!1})),r.ariaLabel,r.title),c={xLabels:t,xAxisLabel:i,...o===void 0?{}:{yRangePaddingPercent:o},...wee(n)};return{canvasId:`${mZ}${u.canvasIdSuffix}`,canvasSize:Aee,aboveCanvasHtml:a+l,belowCanvasHtml:s,drawPlot:f=>PY(f,e,c),widthPreference:u.widthPreference}}const Aee={width:800,height:500};function Tee(e,t,n,r,i){return t&&(e.valueRange=t),{canvasId:`${vZ}${i.canvasIdSuffix}`,canvasSize:wR(e),aboveCanvasHtml:n,belowCanvasHtml:r,drawPlot:o=>uz(o,e),widthPreference:i.widthPreference}}function zI(e,t,n){const r=n.liveResultShown;if((r==null?void 0:r.shows)==="sampling"&&jR(e,r.identity))return;k2(e,C2(["sweep-plot",t.canvasId,t.canvasSize,t.aboveCanvasHtml,t.belowCanvasHtml,n.captionsHtml,n.control!==null]),{build:()=>{e.innerHTML=`<div class="code-plot-container">${t.aboveCanvasHtml}<canvas id="${V(t.canvasId)}" class="${g7}" width="${t.canvasSize.width}" height="${t.canvasSize.height}"></canvas>${t.belowCanvasHtml}</div>${n.captionsHtml.join("")}`},patch:()=>{}});const i=e.querySelector(`canvas.${g7}`);if(i!==null){const o=n.canvasMessageLines,a=o===null?()=>t.drawPlot(i):()=>At(i,o);a(),U2(i,a,t.widthPreference),n.control!==null&&av(i,n.control)}(r==null?void 0:r.shows)==="result"&&XR(e,r.identity)}function Ree(e,t){const n=KZ(t,UZ(t.plotTarget,e));return r=>{const i=n.beginReading(),o=e(i);zI(r,o,i.followUps())}}function Iee(e){return t=>zI(t,e(),VZ)}function S7(e,t,n){var r;return{name:e,values:t.get(e)??[],declaredValues:(r=n.find_cparam(e))==null?void 0:r.allowed_values}}function Lee(e,t,n,r,i,o,a){const s=yz(r.twoCparamSweepDisplay);if(s==="heatmap")return Tee(t(e[0],e[1]),n.heatmapValueRange,sm(i,KE(s,e,null)),o(s),a);const u=Ez(e,r.twoCparamSweepLinesXAxisCparam),{xAxis:l,lineAxis:c}=u;return YI(Sz(t(l,c),wz(c)),l.name,n.linePlotYRangePaddingPercent,sm(i,KE(s,e,u)),o(s),a)}const Cee={heatmap:"Cells show average point values.",lines:"Lines show average point values."};function kee(e,t,n,r,i,o,a,s,u,l){const c=s==="sample";return Lee(t,(d,p)=>{const h=[...d.values],m=[...p.values];return c?eee(e,d.name,h,p.name,m,n,l==null?void 0:l.locationStatisticForCombo):o?nee(e,d.name,h,p.name,m,n,o):{cells:[],xLabels:h.map(String),yLabels:m.map(String),xAxisLabel:d.name,yAxisLabel:p.name}},r,i,a,d=>c?"":`<div class="code-info" style="margin-top: 6px;">${Cee[d]}</div>`,u)}function JI(e){return e.allowed_values.filter(t=>typeof t!="boolean")}function Nee(e,t){return P$(t.ui.inspectedCparamValues[Ge(e.id)],e.default_value,JI(e))}function Oee(e,t){const n={};for(const r of e.get_cparams())n[Ge(r.id)]=Nee(r,t);return n}function Tae(e,t,n){if(t===void 0)return{};if(typeof t!="object"||t===null||Array.isArray(t))return $7(`persisted inspected combination is not a value map: ${JSON.stringify(t)}`),{};const r={};for(const[i,o]of Object.entries(t)){if(!Mee(o)){$7(`persisted inspected value for ${i} is not a scalar: ${JSON.stringify(o)}`);continue}const a=e.find_cparam(i);if(a===void 0){console.warn(`Ignoring inspected value for ${i}, which this jprob no longer declares`);continue}if(!JI(a).includes(o)){console.warn(`Ignoring inspected value for ${a.id}, which its declaration no longer allows: ${JSON.stringify(o)}; falling back to the declared default`);continue}r[i]=o}return r}function Mee(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function $7(e,t){console.warn(`${e}; falling back to the declared default`)}function QI(e,t){const n=jr(t,e.queryMode)[e.entryIdx];if(n===void 0)return null;const r=t.adhocPresets[n.presetIndex];if(r===void 0)return null;const i=T$(r,e.queryMode,n);return i===void 0?null:{nameOrPseudoname:r.name_or_pseudoname,queryMode:e.queryMode,label:i.label}}function Dee(e,t){const n=jr(t,e.queryMode);for(let r=0;r<n.length;r++){const i=n[r],o=t.adhocPresets[i.presetIndex];if(o===void 0||o.name_or_pseudoname!==e.nameOrPseudoname)continue;const a=T$(o,e.queryMode,i);if(a!==void 0&&a.label===e.label)return{queryMode:e.queryMode,entryIdx:r}}return null}function Rae(e){const t=[];for(const n of A$){const r=new Set,i=jr(e,n).length;for(let o=0;o<i;o++){const a=QI({queryMode:n,entryIdx:o},e);if(a===null)continue;const s=Pee(a);r.has(s)?t.push(s):r.add(s)}}return t}function Pee(e){return`adhoc ${e.queryMode} ${JSON.stringify(e.nameOrPseudoname)} labelled ${JSON.stringify(e.label)}`}const Iae=["agentCli","modelVersion","effort"],Fee={agentCli:"agentClis",modelVersion:"modelVersions",effort:"efforts"};function Li(e){return yI(e.model,e.version)}function qee(e){return{agentClis:ZI(e),modelVersions:[],efforts:[]}}function Bee(e){return{agentClis:[],modelVersions:[Li(e)],efforts:[e.effort]}}function Lae(e,t,n){const r=Fee[t],i=e[r];return{...e,[r]:i.includes(n)?i.filter(o=>o!==n):[...i,n]}}function ZI(e){const t=new Set(e.map(n=>rm(n.model)));return wI().filter(n=>t.has(n))}function A7(e,t){try{return t(e)}catch{return e}}function sh(e,t,n,r,i,o){const a=e.map(u=>({value:u,label:n(u),hoverText:r(u),state:i(u),disabled:o,unavailable:!1})),s=t.filter(u=>!e.includes(u)).map(u=>({value:u,label:A7(u,n),hoverText:A7(u,r),state:i(u),disabled:o,unavailable:!0}));return[...a,...s]}function Hee(e,t){const n=Sv(t),r=e.agentClis.length>0,i=!r&&e.modelVersions.length===0&&e.efforts.length===0,o=m=>r?e.agentClis.includes(rm(m.model)):i?!1:(e.modelVersions.length===0||e.modelVersions.includes(Li(m)))&&(e.efforts.length===0||e.efforts.includes(m.effort)),a=n.filter(o),s=new Set(a.map(m=>rm(m.model))),u=new Set(a.map(Li)),l=new Set(a.map(m=>m.effort)),c=m=>e.agentClis.includes(m)?"checked":s.has(m)?"partial":"unchecked",f=(m,v)=>_=>(r?v.has(_):m.includes(_))?"checked":"unchecked",d=[...new Set(n.map(Li))],p=kQ(new Set(n.map(m=>m.effort))),h=m=>m;return{memberConfigurations:a,rows:{agentCli:sh(ZI(n),e.agentClis,m=>SI(m),h,c,!1),modelVersion:sh(d,e.modelVersions,LQ,CQ,f(e.modelVersions,u),r),effort:sh(p,e.efforts,h,h,f(e.efforts,l),r)}}}function uh(e){return!Array.isArray(e)||!e.every(t=>typeof t=="string")?null:[...new Set(e)]}function T7(e){if(typeof e!="object"||e===null)return null;const t=e,n=uh(t.agentClis),r=uh(t.modelVersions),i=uh(t.efforts);return n===null||r===null||i===null?null:{agentClis:n,modelVersions:r,efforts:i}}const $a=["Estimate","ReadTrials","Compare"],xee="Estimate",Uee={Estimate:"E",ReadTrials:"R",Compare:"C"},Gee={Estimate:"Explore the problem using your own subjective estimations, entered directly or copied in from ReadTrials.",ReadTrials:"Read one result set of methodical trials, or one ad hoc response: as the mixture of its trials' belief distributions, or as one trial's estimates, reasoning and code.",Compare:"Compare results across model configurations, task groups and parameter values."};function eL(e){return e.adhocPlainnumEntries.length>0||e.adhocPlaincodeEntries.length>0}function Wee(e){const t=Ta(e).length>0;return $a.filter(n=>n==="Estimate"||n==="ReadTrials"&&(t||eL(e))||n==="Compare"&&t)}function Cae(e){return Wee(e).includes("ReadTrials")?"ReadTrials":xee}const Aa={kind:"mix"},tL=["methodical","adhoc"],kae={jtaskGroupId:null,mixtureGroupSelection:null,adhoc:null,activeResultSource:"methodical",trial:Aa};function Vee(e){const t=Ta(e).length>0;return tL.filter(n=>n==="methodical"?t:eL(e))}function Xee(e,t){const n=Vee(t);return n.includes(e.activeResultSource)?e.activeResultSource:n[0]??null}function jee(e){for(const t of A$){const n={queryMode:t,entryIdx:0};if(QI(n,e)!==null)return n}return null}function Ta(e){return bV(e.richcodeResults.map(t=>t.jtask_group_id),e.jtaskHashGroups,hV(e.richcodeResults))}const R7=10,Kee="…";function Nae(e){const t=e.map(r=>r.length>R7?r.slice(0,R7)+Kee:r),n=new Map;for(const r of t)n.set(r,(n.get(r)??0)+1);return t.map((r,i)=>n.get(r)>1?e[i]:r)}function Yee(e,t){const n=Ta(t);return e.jtaskGroupId!==null&&n.includes(e.jtaskGroupId)?e.jtaskGroupId:n[0]??null}function mo(e,t){const{presetData:n}=t,r=e.adhoc===null?null:Dee(e.adhoc,n),i=e.adhoc!==null&&r===null?e.adhoc:null,o=Xee(e,n);if(o===null)return{resultSet:{kind:"no-results"},unavailableAdhoc:i};if(o==="adhoc"){const f=r??jee(n);if(f===null)throw new Error("ad hoc is the source in effect, but no adhoc entry is loaded");return{resultSet:{kind:"adhoc",entry:f},unavailableAdhoc:i}}const a=Yee(e,n);if(a===null)throw new Error("methodical is the source in effect, but no jtask group is published");const s=BQ(n.richcodeResults,a),u=e.mixtureGroupSelection??qee(s),l=Hee(u,s),c=l.memberConfigurations.length===0?II(n.richcodeResults,a):KQ(n.richcodeResults,a,l.memberConfigurations);return{resultSet:{kind:"methodical",jtaskGroupId:a,mixtureGroupSelection:u,interpretation:l,record:c},unavailableAdhoc:i}}function zee(e,t,n){return e.kind==="mix"?null:e.kind==="adhoc-trial"?t==="adhoc"&&e.entryTrialIndex<n.count?e.entryTrialIndex:null:t!=="methodical"?null:LI(n,e.identity)}function Oae(e,t,n){const r={...t,trial:Aa};if(e.trial.kind!=="methodical-trial")return r;const i=mo(e,n).resultSet,o=mo(t,n).resultSet;return i.kind!=="methodical"||o.kind!=="methodical"||i.jtaskGroupId!==o.jtaskGroupId||LI(o.record,e.trial.identity)===null?r:{...t,trial:e.trial}}const I7={kind:"methodical"};function nL(e,t){if(e.interactionMode==="Estimate")return{kind:"yours",queryMode:e.estimateQueryMode};if(e.interactionMode==="Compare")return I7;const{resultSet:n}=mo(e.readTrials,t);return n.kind==="adhoc"?{kind:"adhoc",entry:n.entry}:I7}function Mae(e){switch(e.kind){case"yours":return e.queryMode;case"adhoc":return e.entry.queryMode;case"methodical":return"richcode"}}function Jee(e){if(typeof e!="object"||e===null)return null;const t=e;if(t.kind==="mix")return Aa;if(t.kind==="adhoc-trial")return Number.isInteger(t.entryTrialIndex)&&t.entryTrialIndex>=0?{kind:"adhoc-trial",entryTrialIndex:t.entryTrialIndex}:null;if(t.kind!=="methodical-trial")return null;const n=t.identity;if(typeof n!="object"||n===null)return null;const{entry_id:r,entry_trial_index:i}=n;return typeof r!="string"||!Number.isInteger(i)||i<0?null:{kind:"methodical-trial",identity:{entry_id:r,entry_trial_index:i}}}function L7(e){if(typeof e!="object"||e===null)return null;const t=e;return typeof t.nameOrPseudoname!="string"||typeof t.label!="string"||t.queryMode!=="plainnum"&&t.queryMode!=="plaincode"?null:{nameOrPseudoname:t.nameOrPseudoname,queryMode:t.queryMode,label:t.label}}function Dae(e){if(typeof e!="object"||e===null)return null;const t=e,{jtaskGroupId:n,mixtureGroupSelection:r,adhoc:i,activeResultSource:o,trial:a}=t;if(n!==null&&typeof n!="string")return null;const s=tL.find(l=>l===o);if(s===void 0||r!==null&&T7(r)===null||i!==null&&L7(i)===null)return null;const u=Jee(a);return u===null?null:{jtaskGroupId:n,mixtureGroupSelection:r===null?null:T7(r),adhoc:i===null?null:L7(i),activeResultSource:s,trial:u}}function Pae(e,t,n,r){return{jtaskGroupId:e,mixtureGroupSelection:Bee(t),adhoc:r,activeResultSource:"methodical",trial:n===null?Aa:{kind:"methodical-trial",identity:n}}}function Fae(e,t){return{...e,trial:t}}const Qee={showGlobalProseFoldControls:e=>e.bodyHasProseFolds,showExampleClassification:e=>e.bodyHasExampleLists,showFreeTextFields:e=>e.estimateOnScreen};function Zee(e,t){const n=Qee[e];return n===void 0||n(t)}const ar="data-pref-row";function ete(e,t){for(const n of e.querySelectorAll(`[${ar}]`)){const r=n.getAttribute(ar);r!==null&&(n.hidden=!Zee(r,t))}}const tte=2;function nte(e){return e.viewedRecordTrialCount>=tte&&e.responseTypeOnShow==="sample"}const rte=0,C7=new WeakMap;function ite(e,t){const n=Gn(e);if(!Number.isInteger(t)||t<0||t>=n)throw new Error(`singleTrialRecord: trial ${t} is not one of the record's ${n} trials`);if(n===1)return e;let r=C7.get(e);r===void 0&&(r=new Map,C7.set(e,r));let i=r.get(t);return i===void 0&&(i=Ce(e)?ate(e,t):ote(e,t),r.set(t,i)),i}function ote(e,t){const n=e.trials[t],{precomputed_aux_forms:r,...i}=e;return{...i,count:1,trials:[n],precomputed:n.precomputed??{},...n.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:n.precomputed_aux_forms}}}function ate(e,t){const n=ta(e,t),r=e.cparam_combos.flatMap(u=>{const l=M$(u.trials,t);return l===void 0?[]:[{cparams:u.cparams,trials:[{...l,trial_index:rte}],precomputed:l.precomputed??{},...l.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:l.precomputed_aux_forms}}]}),{entry_id:i,result_set:o,trials_left_out:a,...s}=e;return{...s,count:1,cparam_combos:r,model:(n==null?void 0:n.model)??e.model,version:(n==null?void 0:n.version)??e.version,effort:(n==null?void 0:n.effort)===void 0?e.effort:n.effort,trial_metadata:e.trial_metadata===void 0||e.trial_metadata.length===0?e.trial_metadata:[n??{}]}}const rL="mix",sr={kind:"mix"};function vo(e){return{kind:"trial",recordTrialIndex:e}}function qae(e){return e.kind==="mix"?rL:String(e.recordTrialIndex)}function Bae(e){return e===rL?sr:ste(e)?vo(Number(e)):null}function ste(e){return/^\d+$/.test(e)}function ute(e,t){return e>0?Math.max(0,Math.min(t,e-1)):0}function k7(e,t){return e<2?vo(0):t.kind==="mix"?sr:vo(ute(e,t.recordTrialIndex))}function Ra(e,t){if(t===void 0||e.interactionMode!=="ReadTrials")return null;const{resultSet:n}=mo(e.readTrials,{presetData:t});return n.kind==="adhoc"?gV(n.entry,t):n.kind==="methodical"?n.record:null}function iL(e,t){const n=aL(e,t),r=Xn(e,t);if(r===null)return k7(n,sr);if(n===0)return sr;const i=zee(e.ui.readTrials.trial,oL(e,t).kind==="adhoc"?"adhoc":"methodical",r);return k7(n,i===null?sr:vo(i))}function Ia(e,t){const n=Ra(e.ui,t);if(n===null)return null;const r=iL(e,t);return r.kind==="mix"?n:ite(n,r.recordTrialIndex)}const lte={point:!1,bounds:!1,sample:!1};function oL(e,t){return t!==void 0?nL(e.ui,{presetData:t}):{kind:"yours",queryMode:e.ui.estimateQueryMode}}function Hae(e,t){return e.ui.interactionMode==="Compare"?lte:L$(Ia(e,t))}function La(e,t){return k$(oL(e,t).kind,Ia(e,t),e.ui.inputMode)}function Xn(e,t){return Ra(e.ui,t)}function Ca(e,t){return Array.from({length:Gn(e)},(n,r)=>t(r))}function aL(e,t){const n=Xn(e,t);return n?Gn(n):0}function cte(e,t){const n=Xn(e,t);return n?Ca(n,r=>EV(n,r)):[]}function fte(e,t){return cte(e,t).map(n=>n==null?void 0:n.reasoning)}function xae(e,t){const n=iL(e,t);return n.kind==="mix"?void 0:fte(e,t)[n.recordTrialIndex]}function Uae(e,t){const n=Xn(e,t);return n?Ca(n,r=>ta(n,r)):[]}function Gae(e,t){const n=Ia(e,t);return n?Ca(n,r=>{var i;return(i=ta(n,r))==null?void 0:i.logical_consistency_outcome}):[]}function sL(e,t,n){return mt(e,Oee(t,n))}function Wae(e,t){var r;const n=t.yoursCodeRecord;if(lV(n))return(r=sL(R$(n),e,t))==null?void 0:r.trials[0]}function Vae(e,t,n){const r=Ra(t.ui,n);if(!r)return[];if(!Ce(r))return r.trials;const i=sL(r,e,t);return Array.from({length:Gn(r)},(o,a)=>i?M$(i.trials,a):void 0)}function Xae(e,t){const n=Xn(e,t);return n?m2(n):[]}function dte(e,t){return nte({viewedRecordTrialCount:aL(e,t),responseTypeOnShow:La(e,t)})}function jae(e,t){return e.ui.showRecordMixtureOverlay&&dte(e,t)}function Kae(e,t){const n=Xn(e,t);return n?Ca(n,r=>wV(n,r)??{}):void 0}const pte="jtask-group-provenance-fold",hte="Provenance",mte="Prompt content hashes answered by these trials:",vte="(prompt hash)",_te="(rdev)",bte="rdev suffix:",gte="",yte="none (--rdevmin: the methodical prompt, unmodified)",Ete="not recorded",wte="none";function Ste(e){return Ta(e).map(t=>{var i;const n=II(e.richcodeResults,t),r=(i=e.richcodeResults.find(o=>o.jtask_group_id===t))==null?void 0:i.rdev_prompt_suffix;return{jtaskGroupId:t,aopts:n.aopts,contentHashes:n.jtask_group_content_hashes??[],...r===void 0?{}:{rdevPromptSuffix:r}}})}function $te(e){return JSON.stringify(Array.isArray(e)?[...e].map(String).sort():e)}function Ate(e,t){const n=new Set(e.flatMap(o=>Object.keys(o.aopts))),r=t.get_aopt_bare_names().filter(o=>n.has(o)),i=[...n].filter(o=>!r.includes(o)).sort();return[...r,...i].filter(o=>new Set(e.map(s=>o in s.aopts?$te(s.aopts[o]):void 0)).size>1)}function Tte(e,t){if(!(t in e.aopts))return Ete;const n=e.aopts[t];return Array.isArray(n)?n.length===0?wte:[...n].map(String).sort().join(", "):String(n)}function Rte(e,t,n){const r=e.rdevPromptSuffix===void 0?e.jtaskGroupId:pV(e.jtaskGroupId),i=cV(n.jtaskHashGroups,r),o=i===null?` <span class="jtask-group-implicit-mark">${vte}</span>`:"",a=e.rdevPromptSuffix===void 0?"":` <span class="jtask-group-rdev-mark">${_te}</span>`,s=e.rdevPromptSuffix===void 0?"":`<div class="jtask-group-rdev-suffix">${bte} ${H(e.rdevPromptSuffix===gte?yte:e.rdevPromptSuffix)}</div>`,u=Ate(t,n.jprobTemplate),l=u.length===0?"":' <span class="jtask-group-differing-options">'+u.map(h=>`${H(h)}: `+H(Tte(e,h))).join("; ")+"</span>",c=i===null||i===""?"":`<div class="jtask-group-note">${H(i)}</div>`,f=[...e.contentHashes].sort().map(h=>`<code class="jtask-group-content-hash">${H(h)}</code>`).join(" "),d=n.provenanceFoldId??pte,p=n.foldOpenById[d]?" open":"";return`<div class="jtask-group-description"><div class="jtask-group-description-head">Task group <span class="jtask-group-name">${H(e.jtaskGroupId)}</span>${o}${a}${l}</div>`+c+s+`<details id="${H(d)}" class="hir-fold ${et} jtask-group-provenance-fold"${p}><summary>${hte}</summary><div class="hir-fold-body">${mte} ${f}</div></details></div>`}const uL=["plainnum","plaincode"];function Ite(e){return e.interactionMode==="Estimate"?e.estimateQueryMode:null}function Yae(e){if(e.interactionMode!=="Estimate")throw new Error(`No Yours record is being edited in ${e.interactionMode}`);return e.estimateQueryMode}function zae(e,t){return t==="plaincode"?e.yoursCodeRecord:e.yoursRecord}const Lte="calc-response-type-toggle",lL="calc-control-caption",Cte="yours-fixfree-radio";function kte(e,t){return e==="Estimate"&&t.has_cparams()}const cL="data-estimate-query-mode",Nte="mode-radio-btn",Ote={plainnum:"fix",plaincode:"free"};function fL(e){const t=uL.map(n=>`<button class="${Nte}${n===e?" active":""}" ${cL}="${n}">${Ote[n]}</button>`);return`<div class="mode-radio ${Cte}">${t.join("")}</div>`}function Jae(e){const t=e.getAttribute(cL);return uL.find(n=>n===t)??null}function Qae(e,t,n,r,i){const o=nL(i.ui,{presetData:r}).kind==="methodical",a=kte(i.ui.interactionMode,n)?fL(i.ui.estimateQueryMode):"",s=QJ({kind:"calculator",shownResponseType:La(i,r),estimateQueryModeOnScreen:Ite(i.ui)},YJ());e.innerHTML=`${a}<span id="${Lte}"></span>${s}`,JJ(e);const u=o?Ra(i.ui,r):null;t.innerHTML=u!==null&&Ce(u)?Mte(n,r,i,u):""}function Mte(e,t,n,r){const i=Ste(t),o=i.find(a=>a.jtaskGroupId===r.jtask_group_id);return o===void 0?"":Rte(o,i,{jprobTemplate:e,jtaskHashGroups:t.jtaskHashGroups,foldOpenById:n.ui.foldOpenById})}function Zae(e,t,n,r){var d;if(r.ui.interactionMode==="Estimate")return e.innerHTML="",!1;const i=Ia(r,n);if(!i)return e.innerHTML='<div style="color: #888; font-size: 13px;">No data.</div>',!1;const o=La(r,n),a=t.svar_entries().map(p=>p.bareName),s=a.length,u=SV(i,o,a),l=u.length;if(l===0)return e.innerHTML='<div style="color: #888; font-size: 13px;">No data for this mode.</div>',!1;const c=l>1;let f='<div class="sample-grid">';for(let p=0;p<l;p++){f+='<div class="sample-col">',c&&(f+=`<div class="sample-col-header">Sample ${p+1}</div>`);for(let h=0;h<s;h++){const m=((d=u[p])==null?void 0:d[h])??"";f+=`<div class="sample-cell">${H(m)}</div>`}f+="</div>"}return f+="</div>",e.innerHTML=f,c}const N7="stats-display-select",dL="Stats display",Dte=["probability","odds"],Pte="Mean, median, and credible interval probabilities displayed as odds",Fte="Computed probabilities displayed as odds";function qte(e,t,n){return Oh(t)||La(e,n)==="sample"}function Bte(e){return e?Object.values(e).some(t=>Hr(t.valueRange)):!1}function ese(e,t,n,r,i){if(!Bte(r)){e.innerHTML="";return}const o=t.ui.probAsOdds,a=Dte.map(l=>`<option value="${l}"${l===o?" selected":""}>${l}</option>`).join(""),s=qte(t,n,i)?Pte:Fte,u=o==="odds"?`<p class="stats-display-odds-note"><strong>${s}</strong></p>`:"";e.innerHTML=`<div class="stats-display-row"><label for="${N7}" class="${lL}">${dL}</label><select id="${N7}">${a}</select></div>`+u}const pL=1,Hte="shortcutKeys",xte=new Set(["","date","datetime-local","email","month","number","password","search","tel","text","time","url","week"]),oi=Object.freeze([{id:"toggle_mnames",description:"Toggle longer meaning-carrying names",short_label:"names",default_shortcut:"n",enabled:!0,in_touch_panel:!0},{id:"goto_calculator",description:"Move to Calculator section",short_label:"calc",default_shortcut:"c",enabled:!0,in_touch_panel:!0},{id:"goto_top",description:"Move to top of page",short_label:"top",default_shortcut:"t",enabled:!0,in_touch_panel:!0},{id:"goto_next_section",description:"Jump to next section",short_label:"section",default_shortcut:"s",enabled:!0,in_touch_panel:!0},{id:"toggle_srcquotes_inlined",description:"Toggle source quotes inline in the text vs. behind a glyph",short_label:"quotes",default_shortcut:"q",enabled:!0,in_touch_panel:!0},{id:"toggle_framing_notes",description:"Show/hide all framing notes",short_label:"framing",default_shortcut:"f",enabled:!0,in_touch_panel:!0},{id:"toggle_long_text_abbrev",description:"Toggle abbreviation of long text",short_label:"abbrev",default_shortcut:"a",enabled:!0,in_touch_panel:!0},{id:"switch_interaction_mode",description:"Cycle interaction mode (Estimate / ReadTrials / Compare), restoring its remembered selection",short_label:"mode",default_shortcut:"m",enabled:!0,in_touch_panel:!0},{id:"toggle_keymap",description:"Show/hide this keymap",short_label:"keymap",default_shortcut:"?",enabled:!0,in_touch_panel:!1}]);function hL(){return oi}function um(e){return oi.find(t=>t.id===e)}function mL(e){const t=e.trim().toLowerCase();return t===""?{ok:!0,key:t}:[...t].length!==pL?{ok:!1,key:t,error:"Use a single key, or clear the field to disable this shortcut."}:{ok:!0,key:t}}function vL(e){if(!e||typeof e!="object"||Array.isArray(e))return{};const t={};for(const[n,r]of Object.entries(e)){if(um(n)===void 0)continue;if(typeof r!="string"){console.error(`Ignoring non-string shortcut key for ${n}.`);continue}const i=mL(r);if(!i.ok){console.error(`Ignoring invalid persisted shortcut key for ${n}: ${r}`);continue}t[n]=i.key}return t}function _L(){const e={};for(const t of oi)e[t.id]=t.default_shortcut;return e}function jn(){const e=vL(je().shortcutKeys);return{..._L(),...e}}function Ute(e,t,n=jn()){if(t==="")return null;for(const r of hL())if(r.id!==e&&n[r.id]===t)return r.id;return null}function tse(e,t){var s;if(!um(e))throw new Error(`Unknown shortcut id: ${e}`);const r=mL(t);if(!r.ok)return{ok:!1,key:r.key,error:r.error};const i=jn(),o=Ute(e,r.key,{...i,[e]:r.key});if(o)return{ok:!1,key:r.key,conflictId:o,error:`Already assigned to "${((s=um(o))==null?void 0:s.description)??o}".`};const a=vL(je().shortcutKeys);a[e]=r.key,Ui(Hte,Wte(a));for(const u of[...lm])u();return{ok:!0,key:r.key}}const lm=new Set;function Gte(e){return lm.add(e),()=>{lm.delete(e)}}function Wte(e){const t=_L(),n={};for(const[r,i]of Object.entries(e))i!==t[r]&&(n[r]=i);return Object.keys(n).length===0?void 0:n}function Vte(e){if(e.altKey||e.ctrlKey||e.metaKey)return null;const t=e.key.toLowerCase();return[...t].length!==pL?null:t}function Xte(e){if(!(e instanceof HTMLElement))return!1;if(e.isContentEditable)return!0;let t=e;for(;t;){if(t.isContentEditable||t.contentEditable==="true")return!0;const n=t.getAttribute("contenteditable");if(n!==null&&n.toLowerCase()!=="false")return!0;t=t.parentElement}return e instanceof HTMLTextAreaElement?!0:e instanceof HTMLInputElement?xte.has(e.type.toLowerCase()):!1}let Ci=new Set;const cm=new Set;function nse(e){if(!(e.size===Ci.size&&[...e].every(n=>Ci.has(n)))){Ci=new Set(e);for(const n of[...cm])n()}}function bL(e){return!Ci.has(e)}function jte(e){return cm.add(e),()=>{cm.delete(e)}}function gL(e,t){if(!bL(t))return!1;const n=e[t];return n?(n(),!0):!1}function rse(e){const t=n=>{if(Xte(n.target))return;const r=Vte(n);if(r===null)return;const i=jn();for(const o of hL())if(i[o.id]===r){gL(e,o.id)&&n.preventDefault();return}};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)}const Kte="touch-shortcut-panel",Yte="touch-shortcut-panel-opener",O7="touch-shortcut-panel-body",zte="touch-shortcut-labels-toggle",M7="compact",yL="touch-shortcut-btn",Jte="touch-shortcut-btn-keyless",Qte="touch-shortcut-key",Zte="touch-shortcut-word",EL="shortcutId",ene="touchShortcutPanelCompact",wL="☝︎",tne="Shortcut buttons",nne="Shortcut buttons",rne="?",ine="Show what each button does",one="help-widget-btn";function ane(){return oi.filter(e=>e.in_touch_panel)}function sne(){return je().touchShortcutPanelCompact===!0}function une(e){Ui(ene,e?!0:void 0)}function lne(e,t){const n=document.createElement("button");if(n.type="button",n.className=yL,n.dataset[EL]=e.id,n.setAttribute("aria-label",e.description),n.title=e.description,t==="")n.classList.add(Jte);else{const i=document.createElement("kbd");i.className=Qte,i.textContent=t,n.appendChild(i)}const r=document.createElement("span");return r.className=Zte,r.textContent=e.short_label,n.appendChild(r),n.hidden=!bL(e.id),n}let nn=null;function ise(e){nn==null||nn();const t=document.createElement("div");t.id=Kte,t.setAttribute(AR,"");const n=document.createElement("div");n.id=O7,n.setAttribute("role","group"),n.setAttribute("aria-label",nne),n.hidden=!0;const r=document.createElement("div");r.className="touch-shortcut-btns";const i=document.createElement("button");i.type="button",i.id=zte,i.className=one,i.textContent=rne,i.setAttribute("aria-label",ine);const o=document.createElement("button");o.type="button",o.id=Yte,o.textContent=wL,o.setAttribute("aria-label",tne),o.setAttribute("aria-controls",O7);const a=()=>{const d=jn();r.replaceChildren(...ane().map(p=>lne(p,d[p.id]??"")))},s=d=>{n.hidden=!d,o.setAttribute("aria-expanded",String(d))},u=d=>{t.classList.toggle(M7,d),i.setAttribute("aria-pressed",String(!d))};r.addEventListener("click",d=>{const p=d.target instanceof Element?d.target.closest(`.${yL}`):null,h=p==null?void 0:p.dataset[EL];h!==void 0&&gL(e,h)}),o.addEventListener("click",()=>s(n.hidden)),i.addEventListener("click",()=>{const d=!t.classList.contains(M7);une(d),u(d)}),a(),s(!1),u(sne()),n.appendChild(r),n.appendChild(i),t.appendChild(n),t.appendChild(o),document.body.appendChild(t);const l=Gte(a),c=jte(a),f=()=>{l(),c(),t.remove(),nn===f&&(nn=null)};return nn=f,f}const cne=["alpoker2","alpoker3","smcov3","covatc2","mcovidB15","simfix","simBetter","simBayesThird","simBayesHalf","bbdoom3"],fne={"Poker Cheating?":{testprob:!1,lineages:[{label:"Poker Cheating?",tabTitleLabel:null,aids:["alpoker","alpoker2","alpoker3"]}],layers:[[{aid:"alpoker",version:"0.1",predecessors:[]}],[{aid:"alpoker2",version:"1.0",predecessors:["alpoker"]}],[{aid:"alpoker3",version:"2.0",predecessors:["alpoker2"]}]]},"Covid Origins":{testprob:!1,lineages:[{label:"Weissman arXiv exact",tabTitleLabel:"arXiv MW",aids:["smcov1","smcov2","smcov3"]},{label:"Weissman faithful",tabTitleLabel:"Weissman faithful",aids:["mcovidA","mcovidA2"]},{label:"All things considered",tabTitleLabel:"ATC",aids:["covid0","covatc1","covatc2"]},{label:"Weissman bootstrapped",tabTitleLabel:"bootstrap MW",aids:["mcovidB1","mcovidB2","mcovidB3","mcovidB4","mcovidB5","mcovidB6","mcovidB7","mcovidB8","mcovidB9","mcovidB10","mcovidB11","mcovidB12","mcovidB13","mcovidB14","mcovidB15"]},{label:"Genetics reduced",tabTitleLabel:"Genetics reduced",aids:["covred1"]}],layers:[[{aid:"mcovidB1",version:"0.1",predecessors:[]}],[{aid:"mcovidB2",version:"0.2",predecessors:["mcovidB1"]}],[{aid:"mcovidB3",version:"0.3",predecessors:["mcovidB2"]}],[{aid:"mcovidB4",version:"0.4",predecessors:["mcovidB3"]}],[{aid:"mcovidB5",version:"0.5",predecessors:["mcovidB4"]}],[{aid:"mcovidA",version:"0.0",predecessors:[]},{aid:"mcovidB6",version:"1.0",predecessors:["mcovidB5"]}],[{aid:"mcovidA2",version:"0.1",predecessors:["mcovidA"]},{aid:"mcovidB7",version:"2.0",predecessors:["mcovidB6"]}],[{aid:"mcovidB8",version:"2.1",predecessors:["mcovidB7"]}],[{aid:"mcovidB9",version:"2.2",predecessors:["mcovidB8"]}],[{aid:"mcovidB10",version:"2.3",predecessors:["mcovidB9"]}],[{aid:"mcovidB11",version:"3.0",predecessors:["mcovidB10"]}],[{aid:"mcovidB12",version:"3.1",predecessors:["mcovidB11"]}],[{aid:"covid0",version:"1.0",predecessors:[]},{aid:"mcovidB13",version:"4.0",predecessors:["mcovidB12"]}],[{aid:"smcov1",version:"0.1",predecessors:[]},{aid:"covatc1",version:"2.0",predecessors:["covid0"]},{aid:"mcovidB14",version:"5.0",predecessors:["mcovidB13"]}],[{aid:"smcov2",version:"1.0",predecessors:["smcov1"]},{aid:"covatc2",version:"3.0",predecessors:["covatc1"]},{aid:"mcovidB15",version:"6.0",predecessors:["mcovidB14"]}],[{aid:"covred1",version:"1.0",predecessors:[]}],[{aid:"smcov3",version:"2.0",predecessors:["smcov2"]}]]},"P(Doom)-adjacent":{testprob:!1,lineages:[{label:"Bentham's Bulldog derivative",tabTitleLabel:"Bentham's Bulldog derivative",aids:["bbdoom1","bbdoom2","bbdoom3"]},{label:"Subjective capabilities",tabTitleLabel:"Subjective capabilities",aids:["doom_subj_cap"]},{label:"RSI soon beliefs",tabTitleLabel:"RSI soon beliefs",aids:["tooSoonRSI"]}],layers:[[{aid:"bbdoom1",version:"0.1",predecessors:[]}],[{aid:"bbdoom2",version:"0.2",predecessors:["bbdoom1"]}],[{aid:"bbdoom3",version:"1.0",predecessors:["bbdoom2"]}],[{aid:"doom_subj_cap",version:"0.1",predecessors:[]},{aid:"tooSoonRSI",version:"0.1",predecessors:[]}]]},eggs:{testprob:!1,lineages:[{label:"eggs",tabTitleLabel:null,aids:["eggsFH1","eggsFH2"]}],layers:[[{aid:"eggsFH1",version:"0.1",predecessors:[]}],[{aid:"eggsFH2",version:"0.2",predecessors:["eggsFH1"]}]]},lhc:{testprob:!1,lineages:[{label:"lhc",tabTitleLabel:null,aids:["lhcFXH1","lhcFXH_SolMax","lhcFXH_SolMax_Ultra"]}],layers:[[{aid:"lhcFXH1",version:"1.0",predecessors:[]}],[{aid:"lhcFXH_SolMax",version:"2.0",predecessors:["lhcFXH1"]}],[{aid:"lhcFXH_SolMax_Ultra",version:"3.0",predecessors:["lhcFXH_SolMax"]}]]},aminds:{testprob:!1,lineages:[{label:"aminds",tabTitleLabel:null,aids:["cmindsBareParam1","aminds2","aminds3"]}],layers:[[{aid:"cmindsBareParam1",version:"1.0",predecessors:[]}],[{aid:"aminds2",version:"2.0",predecessors:["cmindsBareParam1"]}],[{aid:"aminds3",version:"3.0",predecessors:["aminds2"]}]]},Simulation:{testprob:!1,lineages:[{label:"Simulation",tabTitleLabel:null,aids:["simfix","simBetter","simBayesHalf","simBayesThird","simBayesConsentThird","simBayesConsent"]}],layers:[[{aid:"simfix",version:"0.1",predecessors:[]}],[{aid:"simBetter",version:"0.2",predecessors:["simfix"]}],[{aid:"simBayesHalf",version:"1.0-halfer",predecessors:["simBetter"]},{aid:"simBayesThird",version:"1.0-thirder",predecessors:["simBetter"]}],[{aid:"simBayesConsentThird",version:"1.1-thirder",predecessors:["simBayesThird"]}],[{aid:"simBayesConsent",version:"1.2",predecessors:["simBayesConsentThird"]}]]},testE:{testprob:!0,lineages:[{label:"testE",tabTitleLabel:null,aids:["testprob_preE","testprob_postE","testprob_postE_extra"]}],layers:[[{aid:"testprob_preE",version:"pre",predecessors:[]}],[{aid:"testprob_postE",version:"post",predecessors:["testprob_preE"]},{aid:"testprob_postE_extra",version:"postextra",predecessors:["testprob_preE"]}]]}},dne={deployedAids:cne,families:fne},pne="../../data/",hne="/index.ts",SL=Object.assign({"../../data/alpoker2/index.ts":()=>xe(()=>import("./index-CJMMNr5J.js"),[]),"../../data/alpoker3/index.ts":()=>xe(()=>import("./index-BT0QVP_3.js"),[]),"../../data/bbdoom3/index.ts":()=>xe(()=>import("./index-o1S9fYn4.js"),[]),"../../data/covatc2/index.ts":()=>xe(()=>import("./index-zx3XVTSG.js"),[]),"../../data/mcovidB15/index.ts":()=>xe(()=>import("./index-CnFwVReh.js"),__vite__mapDeps([0,1])),"../../data/simBayesHalf/index.ts":()=>xe(()=>import("./index-DAyhxqut.js"),[]),"../../data/simBayesThird/index.ts":()=>xe(()=>import("./index-DCqRMDFd.js"),[]),"../../data/simBetter/index.ts":()=>xe(()=>import("./index-unjbUvwB.js"),[]),"../../data/simfix/index.ts":()=>xe(()=>import("./index-CL7MR29U.js"),__vite__mapDeps([2,1])),"../../data/smcov3/index.ts":()=>xe(()=>import("./index-E4EsnYeB.js"),__vite__mapDeps([3,1]))});function $L(e){return`${pne}${e}${hne}`}function ose(e){return SL[$L(e)]}function ka(e){return $L(e)in SL}const vt=dne,pt=(()=>{const e=new Map;for(const[t,{layers:n}]of Object.entries(vt.families))n.forEach((r,i)=>r.forEach((o,a)=>e.set(o.aid,{family:t,layerIndex:i,positionInLayer:a,member:o})));return e})(),AL=(()=>{const e=new Map;for(const{lineages:t}of Object.values(vt.families))t.forEach((n,r)=>n.aids.forEach(i=>e.set(i,r)));return e})(),mne=(()=>{const e=new Map;for(const{layers:t}of Object.values(vt.families))for(const n of t.flat())for(const r of n.predecessors){const i=e.get(r)??[];i.push(n.aid),e.set(r,i)}return e})(),vne=new Set(vt.deployedAids);function _ne(){return vt.deployedAids}function bne(){return Object.entries(vt.families).map(([e,{testprob:t,layers:n}])=>({name:e,testprob:t,aidsInLayerOrder:n.flat().map(r=>r.aid)}))}function ase(e){var t;return(t=pt.get(e))==null?void 0:t.family}function sse(e){const t=pt.get(e);return t===void 0?void 0:vt.families[t.family].lineages[AL.get(e)].tabTitleLabel??void 0}function gne(e){return{aid:e,version:pt.get(e).member.version}}function _o(e,t,n,r=new Set){const i=[];for(const o of t(e))r.has(o)||(r.add(o),n(o)?i.push(o):i.push(..._o(o,t,n,r)));return i}function yne(e,t){const n=pt.get(e),r=pt.get(t);return n.layerIndex-r.layerIndex||n.positionInLayer-r.positionInLayer}function D7(e,t,n,r){const i=e.length;for(let o=1;o<i;o++){const a=e[((t+n*o)%i+i)%i].aid;if(r(a))return a}}function P7(e,t,n,r){for(let i=t+n;i>=0&&i<e.length;i+=n){const o=[...e[i]].reverse().find(a=>r(a.aid));if(o!==void 0)return o.aid}}function use(e,t=ka){const n=pt.get(e);if(n===void 0)return;const r=vt.families[n.family].layers,i=r[n.layerIndex],o={back:_o(e,s=>pt.get(s).member.predecessors,t)[0]??P7(r,n.layerIndex,-1,t),forward:_o(e,s=>mne.get(s)??[],t).sort(yne)[0]??P7(r,n.layerIndex,1,t),up:D7(i,n.positionInLayer,-1,t),down:D7(i,n.positionInLayer,1,t)},a={aid:e,version:n.member.version};for(const[s,u]of Object.entries(o))u!==void 0&&(a[s]=gne(u));return a}function lse(e,t=ka){const n=pt.get(e);if(n===void 0)return;const{lineages:r,layers:i}=vt.families[n.family],o=m=>m===e||t(m),a=m=>AL.get(m),s=i.map(m=>m.filter(v=>o(v.aid)&&a(v.aid)!==void 0)).filter(m=>m.length>0),u=new Map;for(const m of s){const v=new Map;for(const _ of m){const b=a(_.aid);v.set(b,(v.get(b)??0)+1)}for(const[_,b]of v)u.set(_,Math.max(u.get(_)??0,b))}const l=[...u.keys()].sort((m,v)=>m-v),c=new Map(l.map((m,v)=>[m,v])),f=l.map(m=>({label:r[m].label,slotCount:u.get(m)})),d=new Map(s.flat().map(m=>[m.aid,_o(m.aid,v=>pt.get(v).member.predecessors,o)])),p=[];s.forEach((m,v)=>{for(const _ of new Set(m.map(b=>a(b.aid)))){const b=m.filter(g=>a(g.aid)===_),y=u.get(_);b.forEach((g,E)=>p.push({aid:g.aid,version:g.version,column:v,band:c.get(_),slotCenter:(E+.5)*y/b.length,current:g.aid===e,deployed:vne.has(g.aid),predecessorsAllUndrawn:g.predecessors.length>0&&d.get(g.aid).length===0}))}});const h=[];for(const m of s.flat())for(const v of d.get(m.aid))h.push({from:v,to:m.aid,contracted:!m.predecessors.includes(v)});return{columnCount:s.length,bands:f,nodes:p,edges:h}}const lt={point:"point",bounds:"bounds",sample:"distr"},cse="Response",TL="interaction-mode-selector",Ene="data-interaction-mode",RL="yours-fixfree-toggle",wne="jprob-selector",fse="sticky-bar",dse="--sticky-bar-h",Na="options-controls",Sne="options-expand-btn",$ne="Settings",Ane="jprob-selector-select",Tne="/",Rne="error-console-btn",Ine="view-url-btn";function pse(e,t,n,r,i){One(e),Lne(r),Cne(e.ui.estimateQueryMode,i),Dne(e,t),Nne(n)}function Lne(e){const t=document.getElementById(TL);if(t){if(e.available.length<=1){t.hidden=!0,t.innerHTML="";return}t.hidden=!1,t.innerHTML=$a.filter(n=>e.available.includes(n)).map(n=>{const r=n===e.active,i=r?n:Uee[n];return`<button type="button" class="atog-btn interaction-mode-btn${r?" active":""}" ${Ene}="${n}" aria-pressed="${r}" title="${V(`${n} — ${Gee[n]}`)}">${i}</button>`}).join("")}}function hse(){const e=document.getElementById(TL);return e!==null&&!e.hidden}function Cne(e,t){const n=document.getElementById(RL);if(n){if(!t){n.hidden=!0,n.innerHTML="";return}n.hidden=!1,n.innerHTML=fL(e)}}function mse(){const e=document.getElementById(RL);return e!==null&&!e.hidden}function kne(e,t,n,r,i=ka){const o=new Map;for(const c of t)for(const f of c.aidsInLayerOrder)o.set(f,c);const a=[],s=new Set;let u=n;const l=c=>{s.add(c.name);const f=[...c.aidsInLayerOrder].reverse().find(i);f!==void 0&&(a.push({label:c.name,value:f}),c.name===r&&(u=f))};for(const c of e){const f=o.get(c);f===void 0?i(c)&&a.push({label:c,value:c}):s.has(f.name)||l(f)}for(const c of t)!c.testprob&&!s.has(c.name)&&l(c);return{options:a,selectedValue:u}}function Nne(e,t=_ne(),n=bne(),r=ka){const i=document.getElementById(wne);if(!i)return;const{options:o,selectedValue:a}=kne(t,n,e.currentAid,e.currentFamily,r),s=o.some(c=>c.value===a);i.hidden=!1;const u=s?"":'<option value="" disabled selected>switch</option>',l=o.map(c=>`<option value="${V(c.value)}"${c.value===a?" selected":""}>${H(c.label)}</option>`).join("");i.innerHTML=`<select id="${Ane}" class="jprob-selector-select" title="Switch to another problem">${u}${l}<option value="${Tne}">≣ Index</option></select>`}function One(e){const t=document.getElementById(Na);if(!t)return;const n=`<div class="options-buttons-row"><button id="${Ine}" class="g-btn" title="Copy a link to this view (and put it in the address bar)">url</button> <button id="keymap-btn" class="g-btn">keymap</button> <button id="${Rne}" class="g-btn">errors</button></div><div class="options-buttons-row options-buttons-row-continued"><button id="save-all-data-btn" class="g-btn">save data</button> <button id="load-all-data-btn" class="g-btn">load data</button></div>`;WJ(t,{buttonId:Sne,accessibleName:$ne,rowsHtml:qne(e),panelAlignment:"left",buttonRowsHtml:n,open:vv(t)})}function vse(e){const t=document.getElementById(Na);t&&ete(t,e)}function Mne(){const e=document.getElementById(Na);return e!==null&&vv(e)}function IL(e){const t=document.getElementById(Na);t&&nI(t,e)}function _se(){IL(!Mne())}function bse(){IL(!1)}function Dne(e,t){const n=document.getElementById("response-type-toggle");n&&Pne(n,e,t,null)}function Pne(e,t,n,r){const i=[],o=C$(n,t.ui.inputMode);let a=0;for(const[u,l]of Object.entries(lt)){const c=u===o?" active":"",f=n[u];f&&a++;const d=f?"":" hidden";i.push(`<button class="atog-btn${c}${d}" data-mode="${u}">${l}</button>`)}const s=r===null?"":`<span class="${lL}">${r}</span>`;e.innerHTML=s+i.join(""),e.hidden=a<2}function yi(e){return`pref-${e}`}const Fne=new Set(["inputMode","probAsOdds","densityScale"]);function qne(e){const t=[];for(const n of Ho)if(!(Fne.has(n.id)||n.in_page_control_only)){if(n.type==="boolean"){const r=n.id;t.push(iI({rowAttrs:`${ar}="${n.id}"`,inputId:yi(n.id),label:n.description,inputAttrs:`data-pref="${n.id}"`,checked:!!e.ui[r]}))}else if(n.type==="integer"){const r=je()[n.id]??n.default;t.push(oI({rowAttrs:`${ar}="${n.id}"`,inputId:yi(n.id),label:n.description,inputAttrs:`data-pref-int="${n.id}"`,value:r,min:n.min,max:n.max,step:n.step}))}else if(n.type==="enum"){const r=je()[n.id]??n.default,i=n.values.map(o=>`<option value="${o}"${o===r?" selected":""}>${o}</option>`).join("");t.push(`<div class="${mv}" ${ar}="${n.id}"><label for="${yi(n.id)}" class="option-label">${n.description}</label><select id="${yi(n.id)}" class="pref-select" data-pref-enum="${n.id}">${i}</select></div>`)}}return t.join("")}const Bne="root",kv="framingnote",LL="framing-fold-btn",gse={containerClass:kv,ownContentSelector:":scope > .framing-note-summary > .framing-note-content"};function CL(e){return`framing-fgroup-${e}`}const Hne=14;function xne(e,t,n,r){return`<strong>${H(e)}${t}${H(r)}:</strong><div class="framing-note-content">${n}</div>`}function Une(e){return e.referenced?` (${qi(e.id)})`:""}const yse=!0;function Nv(e){return e.jprobInstance.enabled_flabels()}function kL(e){return e.showFramingNotes!==!1}function NL(e,t){const n=Nv(t);return!kL(t)||!n.length?null:e.get_framing_layout(n)}function OL(e,t,n){var r;return((r=e.framingFoldState[t])==null?void 0:r[n])??e.framingFoldsDefaultOpen}function ML(e,t,n,r){const i=OL(n,r,e.note.id),o=e.children.map(_=>ML(_,t,n,r)).join(""),a=i?` ${vn}`:"",s=i?` ${Jo}`:"",u=Hne*(e.depth-1),l=H(e.note.flabel),c=mn(e.note.srcquotes,t),f=SS+qi(e.note.id),d=c.atStart+ke(e.note.defn,t,f)+c.atEnd,[p,h]=t.jprobInstance.fgroup_of_flabel(e.note.flabel),m=xne(h.label_prefix,l,d,Une(e.note)),v=V(CL(p));return`<div class="${kv}${a} ${v}" id="${V(f)}" style="margin-left: ${u}px" data-framing-anchor="${V(r)}" data-framing-id="${V(e.note.id)}"><div class="framing-note-summary"><button class="${LL}${s}" data-framing-anchor="${V(r)}" data-framing-id="${V(e.note.id)}" title="Toggle framing note">&plusmn;</button>`+m+"</div>"+o+"</div>"}function Ov(e,t,n,r){return e.layout_nodes.map(i=>ML(i,t,n,r)).join("")}function Ese(e,t,n,r){return e===void 0||e.layout_nodes.length===0?"":"<div>"+Ov(e,t,n,r)+"</div>"}function wse(e,t,n){const r=NL(e,t),i=document.querySelectorAll(`.${c$}`);for(const o of i){const a=o.getAttribute(f$);if(!a)continue;const s=r==null?void 0:r.nonroot_anchor_sections.get(a);o.innerHTML=r&&s?Ov(s,t,n,a):""}}function Sse(e,t,n,r){const i=document.getElementById("framing-notes-root-section"),o=NL(t,n),a=o===null?"":Ov(o.root_section,n,r,Bne);if(!a){e.innerHTML="",i&&(i.hidden=!0);return}i&&(i.hidden=!1),e.innerHTML=a}function $se(e,t){const n=t.jprobInstance,r=yh in n.get_fgroups()?n.nonstandard_notes(yh,Nv(t)):[];e.innerHTML=r.map(o=>`<div class="estimator-instruction">${ke(o.defn,t)}</div>`).join("");const i=document.getElementById(Zh);i&&(i.hidden=r.length===0)}function Ase(e,t){const n=document.getElementById("framing-notes-explainer-section"),r=new Set(Nv(t));if(!kL(t)||!r.size){e.innerHTML="",n&&(n.hidden=!0);return}const i=[];for(const[o,a]of t.jprobInstance.standard_fgroups_in_order())a.defn&&a.flabels.some(s=>r.has(s))&&i.push(`<div class="framing-explainer ${V(CL(o))}">`+ke(a.defn,t)+"</div>");n&&(n.hidden=i.length===0),e.innerHTML=i.join("")}const Tse=["exampleList","framingNote","proseSection"];function Gne(e){return qn.includes(e??"")}function Wne(e){var i;const t=e.dataset.isym,n=e.dataset.type;if(!t||!Gne(n))return null;const r=((i=e.closest(`.${u2}`))==null?void 0:i.querySelector(`.${v$}.${n}`))??null;return r===null?null:{key:{kind:"exampleList",bareIsymId:t,polarity:n},isOpen:()=>r.classList.contains(vn),setOpen:o=>{r.classList.toggle(vn,o),e.classList.toggle(Jo,o)}}}function Rse(e){var n;const t=qn.find(r=>e.classList.contains(r));return t===void 0?null:((n=e.closest(`.${u2}`))==null?void 0:n.querySelector(`.${l2}.${t}`))??null}function Vne(e){const t=e.dataset.framingAnchor,n=e.dataset.framingId;if(!t||!n)return null;const r=e.closest(`.${kv}`);return r===null?null:{key:{kind:"framingNote",anchorKey:t,framingId:n},isOpen:()=>r.classList.contains(vn),setOpen:i=>{r.classList.toggle(vn,i),e.classList.toggle(Jo,i)}}}function Xne(e){return{key:{kind:"proseSection",foldId:e.id},isOpen:()=>e.open,setOpen:t=>{e.open=t}}}const DL=`details.${Vi}.${et}`;function jne(e){return e.matches(DL)&&e.id!==""}function Kne(e){return e!==null}function ai(e){const t=[...e.querySelectorAll(`.${l2}`)].map(Wne),n=[...e.querySelectorAll(`.${LL}`)].map(Vne),r=[...e.querySelectorAll(DL)].filter(jne).map(Xne);return[...t,...n].filter(Kne).concat(r)}function Yne(e){return ai(e).length>0}function Ise(e){return ai(e).some(t=>t.key.kind==="exampleList")}function Lse(e){const t=ai(e),n=r=>{const i=new Set(t.filter(o=>o.key.kind===r).map(o=>o.isOpen()));return i.size!==1?null:i.has(!0)};return{exampleList:n("exampleList"),framingNote:n("framingNote"),proseSection:n("proseSection")}}function PL(e,t){switch(t.kind){case"exampleList":return _r(e.exampleFoldState,t.bareIsymId,t.polarity,e.exampleFoldsDefaultOpen);case"framingNote":return OL(e,t.anchorKey,t.framingId);case"proseSection":return t$(e.proseSectionFoldState,t.foldId,e.proseSectionFoldsDefaultOpen)}}function zne(e,t,n){switch(t.kind){case"exampleList":e.exampleFoldState=Jne(e.exampleFoldState,t.bareIsymId,t.polarity,n,e.exampleFoldsDefaultOpen);return;case"framingNote":e.framingFoldState[t.anchorKey]={...e.framingFoldState[t.anchorKey],[t.framingId]:n};return;case"proseSection":e.proseSectionFoldState[t.foldId]=n;return}}function Jne(e,t,n,r,i){return{...e,[t]:{pos:_r(e,t,"pos",i),neg:_r(e,t,"neg",i),[n]:r}}}function lh(e,t){return Object.fromEntries(Object.entries(e).filter(([,n])=>t(n)))}function Cse(e,t,n){switch(t){case"exampleList":e.exampleFoldsDefaultOpen=n,e.exampleFoldState=lh(e.exampleFoldState,r=>r.pos===n&&r.neg===n);return;case"framingNote":e.framingFoldsDefaultOpen=n,e.framingFoldState=lh(e.framingFoldState,r=>Object.values(r).every(i=>i===n));return;case"proseSection":e.proseSectionFoldsDefaultOpen=n,e.proseSectionFoldState=lh(e.proseSectionFoldState,r=>r===n);return}}const Qne=["peek","unpeek","open","close"];function Zne(e){return Qne.includes(e??"")}function kse(e,t,n){for(const r of ai(e))switch(t){case"open":case"close":{const i=t==="open";r.setOpen(i),zne(n,r.key,i);break}case"peek":r.setOpen(!0);break;case"unpeek":r.setOpen(PL(n,r.key));break}}function ere(e,t){return ai(e).map(n=>({shownOpen:n.isOpen(),rememberedOpen:PL(t,n.key)}))}function tre(e){const t=e.some(i=>i.shownOpen!==i.rememberedOpen),n=e.some(i=>i.rememberedOpen),r=e.some(i=>!i.rememberedOpen);return{peek:!t&&n&&r,unpeek:t,open:e.some(i=>!i.shownOpen||!i.rememberedOpen),close:e.some(i=>i.shownOpen||i.rememberedOpen)}}const FL="global-prose-fold-controls",nre="global-prose-fold-label",Mv="prose";function Nse(e){const t=document.getElementById(nre);t&&t.replaceWith(RR(Mv,e))}function Ose(e,t){const n=document.getElementById(FL);if(!n||(n.hidden=!(t.showGlobalProseFoldControls&&Yne(e)),n.hidden))return;const r=tre(ere(e,t));for(const i of n.querySelectorAll("[data-action]")){const o=i.dataset.action;Zne(o)&&(i.hidden=!r[o])}}function Mse(){const e=document.getElementById(FL);return e!==null&&!e.hidden}const Dse="calculator-plainnum-input-fold",Pse=!1,Fse="calculator-code-input-fold",qse=!0,Dv="Input",rre="response-input-fold",ire="response-input-fold-controls",ore="calc-input-run-btn",qL="Run";function Bse(e){const t=e.foldOpenById[e.foldId]??e.defaultOpen,n=e.summaryControlsHtml===""?"":`<span class="${ire}" ${Yo}>${e.summaryControlsHtml}</span>`;return`<details id="${e.foldId}" class="hir-fold ${et} ${rre}"${t?" open":""}><summary><span class="response-input-fold-title">${Dv}</span>${n}</summary><div class="hir-fold-body">${e.bodyHtml}</div></details>`}function Hse(){return`<button class="${ore}" type="button">${qL}</button>`}const are=`<p>Joint dependence lets you say how your distributions move <em>together</em>, beyond what each one says on its own. You express it as <b>named latents</b>: each latent is one shared influence, described in your own words, with a signed <b>loading</b> on each quantity it touches.</p>
<ul>
<li>A latent&#39;s description must make its <b>positive direction</b> explicit — the loading signs are relative to it, and nothing else records what the latent means.</li>
<li><code>+0.7</code>: the quantity tends to be high when the latent is high. <code>−0.7</code>: it tends to be low. <code>0</code>: the latent does not touch it.</li>
<li><b>Your marginals are unchanged.</b> Whatever dependence you state, each quantity&#39;s own distribution stays exactly as you gave it. Dependence changes only how the quantities move together, never what any one of them looks like alone.</li>
<li>Per quantity, the squared loadings across all latents may sum to at most 1. Whatever is left over is that quantity&#39;s own independent variation; at a total of 1 the latents fully determine it.</li>
</ul>
<h4>Two legitimate stories, same math</h4>
<ul>
<li><b>Correlated error in your own estimates</b> — e.g. &quot;if one of my probabilities is too high, the others likely are too&quot;. Spread in the formulas&#39; values then reflects distrust of your own estimation.</li>
<li><b>A shared, unresolved state of the world</b> the problem does not condition on — one mechanism, source, or scenario standing behind several quantities. Its loadings take their signs from that causal structure and are often mixed-sign. Spread in the formulas&#39; values then reflects irreducible uncertainty given the evidence.</li>
</ul>
<p>Say which one you mean. And note that dependence does not only widen: loading a ratio&#39;s numerator and its denominator in the same direction makes them rise and fall together, which <em>narrows</em> that ratio. That is sometimes exactly the belief you hold — but check the independent-vs-joint comparison, rather than reasoning from the signs alone.</p>`,sre="An expectation E⟦…⟧ is taken over your joint distribution, so dependence among the quantities inside one can change its value.",ure="A latent may load quantities inside a formula’s E⟦…⟧ or quantities outside it, but not both: dependence across E⟦…⟧ would make the expectation conditional on the quantities outside it, which is not supported. The formulas with quantities on both sides:",lre="On the point estimates:",cre="Constant",fre="Estimates",dre="Formulas",pre="Logically-implied analogous invariants are also enforced on the bounds and on sample-distribution quantiles. Violations surface as consistency-failure warnings, and any that remain in your submitted response are recorded with it.",hre="Logically-implied analogous invariants are also enforced on sample-distribution quantiles. Violations surface as consistency-failure warnings, and any that remain in your submitted response are recorded with it.",mre="At every combination of parameter values, on the point estimates:",vre="Equality",_re="Inequality",bre="Each inequality is also enforced on the bounds (some value inside each interval must satisfy it) and, when both its sides are your own answers, on sample-distribution quantiles.",gre="Each inequality is also enforced on sample-distribution quantiles when both its sides are your own answers.",yre="Each equality is checked on the point estimates only.",Ere="The base family truncated to its own window [lo, hi] as well, for a belief with its own truncation window (lo < hi, finite bounds in the variable's own scale, intersected with the variable's allowed range):",wre="Offered only with such a window, because their tails are heavy enough that without one the distribution, or a formula computed from it, can have no finite mean:",Sre=`e.g. <code>mixture(0.3: beta(8, 2), 0.7: beta(2, 8))</code>, for a belief of the form "in one scenario I believe this, in another that": with probability 0.3 the variable follows <code>beta(8, 2)</code>, with probability 0.7 <code>beta(2, 8)</code>. Between {{mixture_spec_min_components}} and {{mixture_spec_max_components}} components, each a distribution family as above with a positive weight; the weights sum to 1. Each component is truncated to the variable's allowed range and renormalized on its own, so each weight stays that component's probability. A point mass cannot be a component: for "x, give or take very little, with probability p", use a narrow triangular component <code>tri(x - w, x, x + w)</code> with a small w of your choosing.`,$re={joint_dependence:are,joint_dependence_expectation:sre,joint_dependence_expectation_separation:ure,"srcquote-explainer":"Text in this style is source material related to the entity above it.",logical_consistency_point_list_intro:lre,logical_consistency_constant_label:cre,logical_consistency_svar_directions_label:fre,logical_consistency_formula_directions_label:dre,logical_consistency_other_response_types:pre,logical_consistency_other_response_types_no_bounds:hre,logical_consistency_combination_list_intro:mre,logical_consistency_equality_label:vre,logical_consistency_inequality_label:_re,logical_consistency_inequality_other_response_types:bre,logical_consistency_inequality_other_response_types_no_bounds:gre,logical_consistency_equality_point_only:yre,family_menu_trunc_variants_intro:Ere,family_menu_window_only_intro:wre,sample_mixture_spec_form:Sre},F7=`<b>${Ar} settings</b>`,BL=`open the <b>${Ar}</b> at the end of the section heading (Calculator, or &ldquo;Compare results&rdquo;)`,HL="examples, framing notes and the sections of text under a heading",Are="joint_dependence";function xL(){return An(Are)+Tre()}function Tre(){const e=`&ldquo;${H(xo(ei))}&rdquo;`,t=je().showDependenceComparison;return`<h4>In this interface</h4><p>Whatever you state here is honoured in every distribution this page shows. Whether a distribution is also shown beside its exact-independence comparison, precomputed or live, is your own setting, ${e} (currently <b>${t?"on":"off"}</b>): ${BL}. Live, the comparison is a second set of Monte Carlo draws, so it roughly doubles what a coupled distribution costs in time and memory; switching it off withholds the comparison and nothing else.</p>`}const Rre="family_menu_trunc_variants_intro",Ire="family_menu_window_only_intro",Lre="sample_mixture_spec_form",Cre="{{mixture_spec_min_components}}",kre="{{mixture_spec_max_components}}";function Nre(){return An(Lre).replaceAll(Cre,String($i)).replaceAll(kre,String(Ai))}const Ore="joint_dependence_expectation",Mre="joint_dependence_expectation_separation";function xse(){return{sentence:An(Ore),separationRule:An(Mre)}}function An(e){const t=$re[e];if(t===void 0)throw new Error(`shared_text.json is missing section '${e}' (regenerate via \`just gen\`)`);return t}const UL="joint_dependence",Use={[UL]:xL};function Dre(){return"<p>Version numbers <b>1st</b>.<b>2nd</b>, incremented according to:</p><ul><li><b>1st</b>: Improved and clean enough over previous major version to run a full set of AI trials.</li><li><b>2nd</b>: Improvements / fixes affecting structure and/or semantics</li></ul>"}function Gse(e){return"<p>This estimation problem is one version in a development timeline of related problems. The versions are arranged in layers (columns), oldest first, and versions developed side by side share a layer. A version may be a revision of one or more earlier versions, or start a new line of development.</p><p>The graph shows the versions available. If the graph has disjoint parts, each row is a line of development. An arrow goes from a version to a revision of it; a dashed arrow passes over versions not deployed at present, and a dashed arrow with no source means none of the earlier versions the version it points to revises is deployed at present. This version is highlighted; click another to switch.</p><p>The buttons around the version number:</p><ul><li><b>◀</b> goes back to the version this one revises (the main one, if several). If thereʹs none, it goes to a problem in the nearest earlier layer.</li><li><b>▶</b> goes forward to the first revision of this one. If thereʹs none, it goes to a problem in the nearest later layer.</li><li><b>▲</b> and <b>▼</b> go to the previous and next version in the same layer, wrapping around.</li></ul>"+(e?Dre():"")}function fm(e){return e?`<b>${H(e)}</b>`:"<i>(unbound)</i>"}const Pre={toggle_mnames:"toggle between short and long names for some defined entities",goto_top:"jump to top of the page",goto_calculator:"jump to the Calculator section",switch_interaction_mode:`switch between ${$a.map(e=>`<b>${e}</b>`).join(" / ")} modes, restoring what you last had selected in each`,toggle_srcquotes_inlined:`toggle source quotes inlined in the text (mirroring what AI agents see when source quotes are enabled) vs. accessible by clicking the <button class="srcquote-glyph" type="button" tabindex="-1">❝</button> buttons. This is a view setting only — it never changes what a preset's estimator actually read`,toggle_framing_notes:"show or hide all framing notes at once, without disturbing which ones the problem itself enables",goto_next_section:"jump to the next top-level section, wrapping from the last back to the first",toggle_long_text_abbrev:"abbreviate or unabbreviate every long block of text at once — the same switch as the <b>Abbreviate long text</b> preference",toggle_keymap:"show or hide the keymap, where each of these keys can be changed"};function Fre(){return`<li>When relevant (not all problems, and not all ReadTrials results have all response modes), <b>${lt.point}</b> | <b>${lt.bounds}</b> | <b>${lt.sample}</b>. For each subjective variable (the cards in the <b>Estimation</b> section) they mean:<ul><li><b>point</b>: A single real value. Use for low-effort estimation.</li><li><b>bounds</b>: A real interval given as <code>low high</code>. Use to incorporate flat uncertainty, without any sampling interpretation. The Calculator will show the interval each compute formula can range over, given your intervals: "≅ [low, high]" means the shown interval is exactly that range; "⫇ [low, high]" means it is an outer enclosure — the true range may be narrower, but never wider. Displayed endpoints are rounded outward, so rounding also never narrows a shown interval.</li><li><b>${lt.sample}</b>: A belief distribution; Monte Carlo sampling evaluates. This is the advanced mode. When in distribution mode, click the help icon in any Estimation card to learn what you can put in the input fields. The Calculator section has a redundant single input box for the same data, under its <b>${Dv}</b> fold; useful for copy-pasting from a read-only Adhoc or AI result.</li></ul></li>`}function GL(){return"<b>fix</b> requires setting each parameter to one of its allowed values in the <b>Parameters</b> section, and your estimates apply to that one setting. <b>free</b> opens a code editor in which you write a function giving your estimates for every allowed parameter combination at once."}function qre(){return $a.map(e=>`<b>${e}</b>`).join(" | ")}const WL="prose_fold_controls",Wse={[WL]:Bre};function Bre(){return`<p>The <b>${Mv}</b> buttons act on ${HL} together. <b>open</b> unfolds all of them and <b>close</b> folds all of them, and both are remembered like folding each one yourself. <b>peek</b> temporarily unfolds all of them, and <b>unpeek</b> returns each to where you had it. Only the buttons that would make a difference show: with everything open only <b>close</b>, with everything closed only <b>open</b> (a peek would be the same as <b>open</b>, with <b>close</b> as its unpeek), and <b>unpeek</b> in place of <b>peek</b> during a peek.</p>`}function Vse(e){const t=jn(),n=[];e.interactionModeSelector&&n.push(`<p>The ${qre()} buttons switch between the three things you can do here; the ${fm(t.switch_interaction_mode)} shortcut cycles through the same modes, and each remembers what you last had selected in it. The selected button shows its full name, the others their initial.</p><ul><li><b>Estimate</b>: explore the problem using your own subjective estimations.</li><li><b>ReadTrials</b>: read one result set — methodical AI trials, or one adhoc response — either as the mixture of its trials' belief distributions or as one trial. Which result set is the side panel at the right edge of the page; which of its trials is the selector in the sticky bar.</li><li><b>Compare</b>: compare results across model configurations.</li></ul>`),n.push("<h4>Sticky bar</h4><ul>"),n.push("<li>At the top right of the sticky bar, there's a dropdown for switching to a different estimation problem (hidden when there are no others).</li>"),e.timelineNav&&n.push("<li>Left of that dropdown, the ◀ ▲ ▼ ▶ buttons move to related versions in this problem's development timeline. Click the version number between them for what each button does.</li>"),e.yoursFixFreeToggle&&n.push(`<li><b>fix</b> | <b>free</b>: ${GL()}</li>`),e.proseFoldControls&&n.push("<li>Click "+Pz(WL,Mv)+" for an explanation of what the buttons beside it do.</li>"),e.proseFoldControlsOffInSettings&&n.push(`<li>Turn on <b>${H(xo("showGlobalProseFoldControls"))}</b> in the ${F7} dropdown for sticky-bar buttons that fold or unfold ${HL} all at once.</li>`),n.push(Fre()),n.push("</ul>"),n.push(`<h4>Keyboard shortcuts</h4><p>You can customize these in the keymap: its own shortcut is in the list below, and so is a <b>keymap</b> button in the sticky bar's ${F7} dropdown. On a touch screen, the <b>${wL}</b> button at the bottom right opens the same actions as buttons. Currently:</p>`),n.push("<ul>");for(const r of oi){const i=Pre[r.id]??H(r.description);n.push(`<li>${fm(t[r.id])} : ${i}</li>`)}return n.push("</ul>"),n.join("")}function Hre(){const e=Cp.map(i=>`${i}-trunc`),t=Object.entries(qe).filter(([i,o])=>!o.hasTruncWindow&&!Cp.includes(i)).map(([,i])=>`<li><code>${H(i.signature)}</code> (${H(i.note)})</li>`),n=Object.entries(qe).filter(([i,o])=>o.hasTruncWindow&&!e.includes(i)).map(([,i])=>`<li><code>${H(i.signature)}</code></li>`),r=Cp.map(i=>`<li><code>${H(qe[`${i}-trunc`].signature)}</code> (${H(qe[i].note)})</li>`);return"<p>Enter your belief distribution over this variable in one of four forms:</p><ul><li><b>Point mass</b>: <code>pointmass(x)</code> — all probability mass at <code>x</code>.</li><li><b>Distribution family</b> (preferred when one fits your belief), e.g. <code>lognormal(-4.2, 1.3)</code>. Every family is automatically truncated to the variable's allowed range and renormalized, so e.g. <code>normal(mu, sigma)</code> on a probability variable means a normal truncated to [0, 1]. Available families:<ul>"+t.join("")+`<li>${An(Rre)}<ul>${n.join("")}</ul></li><li>${An(Ire)}<ul>${r.join("")}</ul></li></ul></li><li><b>Mixture</b>: ${Nre()}</li><li><b>Piecewise linear density</b> (fully general): space-separated pairs <code>(x1 y1) (x2 y2) …</code>, minimum 2.<ul><li>x values are sorted positions spanning your uncertainty, anywhere in the variable's allowed range.</li><li>y values are unnormalized density heights in [0, 1].</li></ul></li></ul>`}function Xse(e,t,n,r){const i=jn(),o=[];if(o.push("<p><b>This help text changes based on which interaction mode you are in.</b></p>"),t.kind==="methodical"&&(o.push("<p>To see detailed results for the selected result set, click the <b>pin</b> checkbox.</p>","<p>An AI's plain text reasoning about one subjective variable shows in that variable's own card, and its notes about the response as a whole in the <b>Response Notes</b> section. Both show the trial the cards' <b>trial</b> selector points at.</p>","<p>To read the code that trial wrote, click <b>View code</b> beside the <b>Estimation</b> heading.</p>"),e.form.length>0&&o.push(`<p>Use the <b>${dL}</b> dropdown to switch between seeing probabilities as percentages or as odds.</p>`)),e.form.length>0){const a=s=>`<b>${H(E$[s])}</b>`;o.push(`<p>To explore compute formula results other than the main conclusion, there's a drop down below next to the ${a("formula")} / ${a("raw_response")} radio buttons. ${a("raw_response")} shows one subjective variable's own response, as its card under <b>Estimation</b> does, here beside the formulas (and in <b>${lt.sample}</b> mode with this plot's shading and x-axis range controls).`+(t.kind==="yours"?"":` Where the results store full distributions for some of the other formulas, a ${a("featured")} radio button plots the main conclusion and those formulas together, one under another.`)+"</p>")}return e.has_cparams()&&t.kind==="yours"&&o.push(`<p><b>fix</b> | <b>free</b> toggle (next to <b>Yours</b>): ${GL()}</p>`),t.kind==="yours"&&t.queryMode==="plaincode"&&r&&o.push(`<p>Your function may also return <code>lloads</code> beside <code>point</code>, <code>bounds</code> and <code>sample</code>: a joint-dependence specification (latent factor copula) between the variables, stated separately for each parameter combination and used only in <b>${lt.sample}</b> mode. Leave it out for independent variables. The starter code ends with a commented-out example. What a specification means: ${Dz(UL)}</p>`),t.kind==="yours"&&n==="sample"&&o.push(`<p>Your distributions are not sampled until you ask: click <b>${qL}</b> on the Calculator's <b>${Dv}</b> line, or change your response. After that they are sampled whenever shown, until you reload the page or open another problem.</p>`),t.kind==="yours"?o.push(`<p>To start from someone else's response, switch to <b>ReadTrials</b> (${fm(i.switch_interaction_mode)} shortcut), choose a result set in the side panel at the right edge of the page, and find the <b>Copy to Estimate</b> button.</p><p>From scratch: Suggest starting with <b>point</b> response mode, then try <b>bounds</b>. If you're experienced or courageous, try <b>${lt.sample}</b> and start with <code>tri(low, peak, hi)</code> or <code>uniform(low, high)</code> lines. For full syntax of distribution inputs accepted, find the help icon in any of <b>Estimation</b> cards above.</p>`):t.kind==="adhoc"?o.push(`<p>To start your own estimation from this response, use the <b>Copy to Estimate</b> button in the bar at the top of the page.</p><p>For advanced users, in <b>${lt.sample}</b> mode, there is a second type of <b>Copy to Estimate</b> button inside the <b>Joint-dependence specification</b> section (latent factor copula), when the entry states one.</p>`):o.push("<p>To start your own estimation from one trial's response, select that trial in the bar at the top of the page, then use the <b>Copy to Estimate</b> button that appears there."+(e.has_cparams()?" It copies the trial's estimates at the parameter values chosen in the side panel at the right edge of the page.":"")+"</p>"),o.join("")}function xre(e){return e.charAt(0).toUpperCase()+e.slice(1)}function VL(e){return`&ldquo;${H(xo(e))}&rdquo;`}function bo(){return`the time set as ${VL(Yr)}`}function Ure(){return`<p>To change the time, or how often a plot is redrawn while it samples (${VL(zr)}), ${BL}.</p>`}function Gre(e){const n=e.content!==null&&e.content.kind==="location-statistic-per-target"?[`<p>A click on the <b>&#9654;</b> button above samples more Monte&nbsp;Carlo draws in the background for every point or cell of this plot in turn, for about ${bo()} in all; each appears or moves as it is sampled, and the page stays usable meanwhile. While it samples, the button is <b>&#9632;</b>, which stops it.</p>`,"<p>Draws accumulate: nothing already sampled is thrown away, so each later click samples more for each.</p>"]:[`<p>A click on the <b>&#9654;</b> button above samples more Monte&nbsp;Carlo draws in the background for about ${bo()}, the plot sharpening as they arrive; the page stays usable meanwhile. While it samples, the button is <b>&#9632;</b>, which stops it.</p>`,"<p>Draws accumulate: nothing already sampled is thrown away, so each later click samples more, until the plot's shape stops moving.</p>"];if(e.content!==null&&e.content.kind==="location-statistic-per-target"){const r=Ct[e.content.statistic];n.push(`<p>This plot's button stays yellow: it displays a ${r} per point/cell rather than a distribution, so the green convergence indicator — which reads a distribution's quantiles — does not apply. ${xre(r)}s converge as 1/&radic;n; a few clicks go a long way.</p>`)}else e.converged?n.push(`<p><b>Green</b>: with ${e.convergedMinSamples.toLocaleString()} or more pooled draws, every quantile of the displayed distribution is pinned to within ${e.displayEpsilon} probability mass at ${e.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound). Green is not a stop sign: further clicks keep sharpening the curve.</p>`):n.push(`<p><b>Yellow &rarr; green</b>: the button turns green at ${e.convergedMinSamples.toLocaleString()} pooled draws, the point where every quantile of the displayed distribution is pinned to within ${e.displayEpsilon} probability mass at ${e.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound).</p>`);return n.push(Ure()),n.join("")}const Wre={equal_per_trial:"Each contributing trial has <b>equal weight</b>, however many trials its model configuration ran.",equal_per_config:"Each model configuration has <b>equal weight</b>, shared equally among its contributing trials."};function jse(){return`<p><b>mix</b> is the mixture of the selected trials' stated belief distributions. ${Wre[K$]}</p><p>A draw from it picks a contributing trial, with its weight as the probability, and then samples that trial's stated distribution. For a formula, the draw samples all of that one trial's quantities together, respecting its stated dependence between them.</p><p>It is a mixture of stated distributions, not the distribution of the trials' point estimates: two trials that each state a narrow distribution around different values mix into a two-peaked one, not a narrow one in between.</p><p>A trial contributes only where it answered. One that gave no response at a parameter combination, or stated no distribution for a quantity, is left out there and never stood in for by its point value or bounds; the view says how many trials contribute wherever that is not all of them.</p><p>In the point view, mix is the same weighted average of the trials' point values; where bounds are offered for several trials, it is the envelope of their bounds.</p>`}function XL(e){return`stored ${Ct[e]}`}function Vre(e){const t=Ct[e];return`<p>The ${t} beside this plot is <b>mixed from</b> the ${t}s the result generator stored for each model configuration in this result set. A ${t} is all that can be mixed exactly that way, so there is no median, interval or curve here yet. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs live Monte&nbsp;Carlo draws in your browser from the same estimates and plots them, with their own summary; the ${XL(e)} stays on screen so you can compare the numbers. `}function Xre(e){if(e.stored.kind==="sweep")return`<p>This plot draws one ${Ct[e.stored.statistic]} per point or cell, and so far only those that are <b>precomputed</b> or already sampled. Nothing is sampled for the others until you ask.</p><p>The <b>&#9654;</b> button above runs live Monte&nbsp;Carlo draws in your browser for each of the others in turn, for about ${bo()} in all, and plots each as it is sampled. Each later click on <b>&#9654;</b> samples more for each.</p>`;const t=e.stored.kind==="location-statistic"?Vre(e.stored.statistic):e.stored.kind==="nothing"?"<p>Nothing is <b>precomputed</b> for this quantity here, and nothing is sampled until you ask.</p><p>The <b>&#9654;</b> button above runs live Monte&nbsp;Carlo draws in your browser from the estimates in this view and plots them, with their summary. ":e.stored.kind==="curve"?"<p>This plot is drawn from a <b>precomputed</b> curve: the result generator sampled it once, with a far larger draw budget than a browser would spend, and stored the shape. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs live Monte&nbsp;Carlo draws in your browser from the same estimates, and draws them on the same axis beside the stored curve; both summaries stay on screen so you can compare the numbers. ":"<p>The numbers beside this plot are <b>precomputed</b>: the result generator sampled this quantity once, with a far larger draw budget than a browser would spend, and stored its summary, but no curve to draw. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs live Monte&nbsp;Carlo draws in your browser from the same estimates and plots them; the precomputed summary stays on screen so you can compare the numbers. ",n=e.stored.kind==="nothing"?"":(e.stored.kind==="curve"?"<p>Expect the live curve to be the rougher of the two at first — it is the same distribution with fewer draws behind it. ":"<p>Expect the live numbers to stray a little from the precomputed ones at first — they describe the same distribution with fewer draws behind them. ")+"A difference that survives many clicks is worth a closer look.</p>";return t+`It samples for about ${bo()}, the plot sharpening as it goes, and each later click on <b>&#9654;</b> samples more, until the live shape stops moving.</p>`+n}const jre=":host{position:fixed;top:0;height:100dvh;z-index:var(--latent-factor-introduction-z);box-sizing:border-box;overflow-y:auto;overscroll-behavior:contain;background:#f4f6f3;color:#183039;box-shadow:0 0 24px #0003;font-family:var(--font-ui);font-synthesis:none}*{box-sizing:border-box}.lab-frame{container-type:inline-size}.lab{max-width:1000px;margin:auto;padding:28px 20px}header{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}h1{font-size:clamp(24px,4vw,36px);letter-spacing:-1px;margin:4px 0}.eyebrow{font-size:11px;letter-spacing:2px;color:#52786c;font-weight:750}p{line-height:1.5}code{font-family:var(--font-mono);font-size:.95em}.intro{color:#52646a;margin:10px 0 22px;font-size:14px}button{font:inherit;cursor:pointer;border:1px solid #c9d5ce;background:#fff;color:#183039;border-radius:9px;padding:9px 12px;font-size:13px}button:hover{background:#e6eee8}.close{font-size:22px;line-height:1;padding:6px 12px}.header-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}#page-link{font-size:12px;color:#28725a;white-space:nowrap}.spec-help{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;width:18px;height:18px;padding:0;border:none;border-radius:50%;background:var(--help-trigger-color);color:#fff;font:bold 11px/1 var(--font-ui)}.spec-help:hover{background:var(--help-trigger-hover-color)}.spec-row{display:flex;align-items:center;gap:5px}.spec-row label{white-space:nowrap}.spec{flex:1 1 auto;min-width:0;padding:2px 6px;border:1px solid #c9d5ce;border-radius:6px;background:#fff;color:#183039;font-family:var(--font-mono);font-size:12px}.spec[aria-invalid=true]{border-color:#c63445}.spec-error{color:#c63445;font-size:11px;overflow-wrap:anywhere;margin-top:2px}.spec-error:empty{display:none}button:disabled{cursor:default;color:#9aa8a3;background:#fff}.controls{display:grid;grid-template-columns:1fr 1fr;gap:22px;padding:18px;background:#e5ede7;border-radius:14px}.control label{font-size:15px;font-weight:650;display:flex;justify-content:space-between;gap:8px}output{font-variant-numeric:tabular-nums;color:#275e4c}input[type=range]{width:100%;margin:16px 0 0;accent-color:#28725a;min-height:28px}.ends{display:flex;justify-content:space-between;color:#5d7369;font-size:10px}.bar{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;margin:16px 0;font-size:12px}.legend{display:flex;gap:13px;flex-wrap:wrap}.key{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:4px}.key.independent{background:var(--independent-color)}.key.dependent{background:var(--dependent-color)}.key.overlap{background:var(--overlap-color)}.line-key{display:inline-block;width:16px;vertical-align:middle;margin-right:4px;border-top:2px var(--line-key-style) var(--line-key-color)}.line-key.independent-mean{--line-key-style: dashed;--line-key-color: var(--independent-color)}.line-key.dependent-mean{--line-key-style: dashed;--line-key-color: var(--dependent-color)}.difference{white-space:nowrap}.line-key.median{--line-key-style: solid;--line-key-color: var(--median-color)}.stats{font-size:11px;color:#38474b;margin-top:3px;min-height:16px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.panel{background:#fff;border:1px solid #dce4df;border-radius:14px;padding:16px 14px 10px;min-width:0}.panel h2{font-size:17px;margin:0 0 3px;font-weight:650}.sub{font-size:11px;color:#6b7d80;min-height:16px}.plot{height:205px;width:100%;display:block}.values{font-size:11px;display:flex;flex-wrap:wrap;gap:10px;font-variant-numeric:tabular-nums;min-height:17px}.independent-value{color:#2169c5}.dependent-value{color:#c63445}.footer{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:15px 0;color:#536d65;font-size:12px}.buttons{display:flex;gap:6px}.timing{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:12px;color:#536d65;margin:14px 0}.timing input{width:76px;min-height:40px;padding:8px;border:1px solid #c9d5ce;border-radius:8px;font:inherit;background:#fff;color:#183039}details{border-top:1px solid #d4dfd8;padding-top:16px;margin-top:20px;font-size:13px;line-height:1.65}summary{cursor:pointer;font-weight:650}.math{font-family:var(--font-mono);overflow-wrap:anywhere}.note{color:#60716c}@container (max-width: 520px){.lab{padding:18px 10px}.controls{gap:16px;padding:14px 12px}.control label{font-size:12px}.grid{gap:8px}.panel{padding:12px 8px 8px}.panel h2{font-size:13px}.sub{font-size:10px;min-height:28px}.spec-row{flex-wrap:wrap;gap:2px 5px}.spec{flex-basis:100%;font-size:11px}.header-actions{flex-direction:column-reverse;align-items:flex-end;gap:6px}.posterior-panel .stats{line-height:14px;min-height:28px}.plot{height:170px}.values{font-size:10px;gap:4px}header{align-items:flex-start}.close{padding:4px 10px}.intro{font-size:12px}.legend{gap:8px}.footer{align-items:flex-start}.buttons button{font-size:11px;padding:8px}.bar{font-size:11px}}",Kre="lloads-introduction-btn",Yre="intro / try it",zre="latent-factor-introduction",jL="main-content",Lr=["prior","ratio"],Ut={prior:"tri(0, 0, 0.2)",ratio:"tri(1, 1, 30)"},Jre={prior:$q,ratio:{lo:0,hi:null,loClosed:!0,hiClosed:!1}},Qre=1.25,dm=.8,Zre=.01,Cr=65536,eie=2,tie=3,nie=5,gt=100,q7=[1,6,15,20,15,6,1].map(e=>e/64);function kr(e,t){if(t===1/0)return e>0?1:0;const n=1-e+e*t;return n===0?e:e*t/n}function B7(e){return Sm(e,0,1)}function ch(e,t){let n=0,r=1,i=e;for(;i>0;)r/=t,n+=r*(i%t),i=Math.floor(i/t);return n}const KL={prior:0,ratio:0};function rie(e,t,n){if(t!==null){const i=t>0?t*Qre:1;return n.hi===null?i:Math.min(i,n.hi)}const r=Hi(1,e);return Number.isFinite(r)&&r>0?r:Hi(1-Ht,e)}function fn(e,t){const n=Jre[e],r=rS(nB(t,n),n),i=uS(r);return{spec:t.trim(),distrib:r,axisMax:rie(r,i,n),median:Hi(.5,r),mean:Gm(r),atom:i}}function Gt(e){return{prior:e.prior.spec,ratio:e.ratio.spec}}function Pv(e){return e.prior===Ut.prior&&e.ratio===Ut.ratio}function pm(e,t,n){const r=n.prior*t.latent+Math.sqrt(1-n.prior*n.prior)*t.priorOwn,i=n.ratio*t.latent+Math.sqrt(1-n.ratio*n.ratio)*t.ratioOwn;return{prior:n9(B7(r),e.prior.distrib),ratio:n9(B7(i),e.ratio.distrib)}}function YL(e){const t=new Float64Array(gt);let n=0;for(const u of e)n+=u,t[Math.min(gt-1,Math.floor(u*gt))]+=1;const r=(q7.length-1)/2,i=new Float64Array(gt);for(let u=0;u<gt;u++){let l=0;for(let c=-r;c<=r;c++){const f=u+c;f<0||f>=gt||(l+=t[f]*q7[c+r])}i[u]=l*gt/e.length}const o=Float64Array.from(e).sort(),a=Math.floor(o.length/2),s=o.length%2===1?o[a]:(o[a-1]+o[a])/2;return{density:i,mean:n/e.length,median:s}}function zL(e,t,n){const r=new Float64Array(Cr);for(let i=0;i<Cr;i++){const o=pm(e,{latent:t[3*i],priorOwn:t[3*i+1],ratioOwn:t[3*i+2]},n);r[i]=kr(o.prior,o.ratio)}return r}let fh=null;function iie(){if(fh!==null)return fh;const e=new Float64Array(3*Cr);for(let t=0;t<Cr;t++)e[3*t]=Si(ch(t+1,eie),0,1),e[3*t+1]=Si(ch(t+1,tie),0,1),e[3*t+2]=Si(ch(t+1,nie),0,1);return fh=e,e}let rn=null;function JL(e){if(rn!==null&&rn.prior.spec===e.prior.spec&&rn.ratio.spec===e.ratio.spec)return rn;const t=iie(),n=YL(zL(e,t,KL));return rn={...e,independentPosterior:n,qmcNormals:t},rn}let ur={...Ut};const Zn="#2577df",ki="#e14b56",QL="#9148bd",oie="#748b81",aie="#eef2f0",sie="#eaf2fd",uie="#fcecef",lie="#edf0ed",cie="#111",ZL="#111",fie=[4,4],die=1.8,pie=1.6,hie=9,Ei={left:28,right:10,top:17,bottom:24},H7=5,mie=8,vie=3,x7=3,eC=1.18,U7=250,G7=5,W7=6,_ie=6,tC=.999,bie=["prior","ratio","independent-posterior","dependent-posterior"];function Oa(e){return e===0?"0":String(Number(e.toPrecision(3)))}function V7(e){return`${Oa(e*100)}%`}function gie(e,t){switch(t){case"prior":return{max:e.prior.axisMax,tickIntervals:2,formatTick:V7};case"ratio":return{max:e.ratio.axisMax,tickIntervals:3,formatTick:Oa};case"independent-posterior":case"dependent-posterior":return{max:1,tickIntervals:2,formatTick:V7}}}function X7(e){return e===0?"0":e.toPrecision(2)}function yie(e){const t=e.clientWidth,n=e.clientHeight,r=window.devicePixelRatio||1,i=Math.round(t*r),o=Math.round(n*r);(e.width!==i||e.height!==o)&&(e.width=i,e.height=o);const a=e.getContext("2d");return a===null?null:(a.setTransform(r,0,0,r,0,0),a.clearRect(0,0,t,n),{context:a,width:t,height:n})}let Tn=null;const nC=3,hm=.1,mm=60,Eie=.1,go=1e3;function Q(e,t){const n=e.getElementById(t);if(n===null)throw new Error(`latent factor introduction has no #${t}`);return n}function j7(e){return`${e>=0?"+":"−"}${Math.abs(e).toFixed(2)}`}function Dt(e){return`${(100*e).toFixed(1)}%`}function K7(e,t){const n=e-t;return`${n>=0?"+":"−"}${(100*Math.abs(n)).toFixed(1)} pp`}function on(e){return`<i class="line-key ${e}"></i>`}function Y7(e,t,n){return`<div class="control"><label for="${e}">${t} <output id="${e}-output"></output></label><input id="${e}" aria-label="${n}" type="range" min="-1" max="1" step="${Zre}" value="${dm}"><div class="ends"><span>−1</span><span>loading</span><span>+1</span></div></div>`}function z7(e,t,n){return`<div class="sub spec-row" id="${e}-sub"><label for="${e}-spec">${t} ·</label><input class="spec" id="${e}-spec" type="text" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="${n}" aria-describedby="${e}-spec-error" title="A distribution spec, in the notation of a distribution response; Enter applies it"></div><div class="spec-error" id="${e}-spec-error" role="alert"></div>`}function wi(e,t,n,r){const i=n??`<div class="stats" id="${e}-mean"></div>`;return`<section class="panel${n===null?" posterior-panel":""}"><h2>${t}</h2>`+i+`<div class="stats" id="${e}-median"></div><canvas class="plot" id="${e}-plot" aria-label="${r}"></canvas><div class="values" id="${e}-values"></div></section>`}function wie(e){const t=e.prior.mean,n=e.ratio.mean;if(t===null||n===null)throw new Error("latent factor introduction default marginals have no finite mean");return`Both inputs are written in the notation of a distribution response: <code>tri(lo, peak, hi)</code> is the triangular distribution from lo to hi, most likely at peak. The prior is p ~ <code>${H(e.prior.spec)}</code>: most likely near 0, never above 20%, with mean ${Dt(t)}. Thus H is disfavored throughout. The ratio is r ~ <code>${H(e.ratio.spec)}</code>: most likely near 1, never above 30, with mean ${n.toFixed(1)}. Evidence favors H throughout, apart from the neutral endpoint r = 1. The prior panel shows its full 0–20% support, the ratio panel its full 0–30 support, and both posterior panels 0–100%. Either spec can be replaced in its panel.`}function rC(e){if(Pv(Gt(e)))return wie(e);const t=(n,r)=>n.mean===null?", which has no finite mean":`, with mean ${r(n.mean)}`;return`Both inputs are written in the notation of a distribution response (the <b>?</b> above lists its forms). The prior is p ~ <code>${H(e.prior.spec)}</code>${t(e.prior,Dt)}; the ratio is r ~ <code>${H(e.ratio.spec)}</code>${t(e.ratio,Oa)}. Each input panel's axis runs from 0 to the top of its support, to its 99.9th percentile where the support has no top, or a little past a point mass; both posterior panels show 0–100%. <b>Default inputs</b> restores the two triangular distributions this introduction opens with.`}function Sie(e){return`<details open><summary>The model &amp; how to read it</summary><p>Each dot's <b>horizontal position</b> is a sampled value. Vertical travel only shows time: dots rise together from the baseline to the top of each plot in N seconds (set above). The gray input curves are fixed densities. Bottom curves are numerical density estimates; colored dashed vertical lines mark their means. Solid black vertical lines mark medians in all four panels. The dependent panel also marks the independent mean, drawn as in its own panel; each Δ is a dependent statistic minus its independent counterpart, in percentage points (pp).</p><p>Write p = P(H), r = P(E|H)/P(E|¬H). In the following math, each paired draw uses the same three independent standard normal random numbers F, ε₁, ε₂. F is the one latent, and a and b are its loadings on p and r given by the two sliders. So ε₁, ε₂ contribute the uncorrelated randomness, and F contributes the correlated randomness. Notice that when a and b are both 0, the Dependent lines reduce to just ε₁ and ε₂, same as the independent draws. Look closer, and you'll see that if just one of a or b is zero, say a, then Z₁ = ε₁, and F appears only in Z₂, where it is uncorrelated randomness too. And Z₂ has the same distribution as ε₂ (which is the same as ε₁ and F), not only in that case but for every b. So with a = 0, moving the b slider has no effect on the Dependent curve. (The √(1−b²) is what keeps Z₂ standard normal, and so keeps each input's distribution fixed whatever the loadings: the red dots in the input panels follow the same gray curves as the blue ones.)</p><div class="math">Independent: Z₁ = ε₁, Z₂ = ε₂<br>Dependent: Z₁ = aF + √(1−a²) ε₁<br>Dependent: Z₂ = bF + √(1−b²) ε₂<br>p = Qprior(Φ(Z₁)), r = Qratio(Φ(Z₂))<br>P(H|E) = pr / (1−p+pr)</div><p>Φ is the standard normal cumulative distribution function; Qprior and Qratio are the inverse cumulative distribution functions. The Gaussian correlation is <b>ρ = ab</b>, not generally the correlation of the transformed inputs. Either zero loading gives independent inputs; both zero makes the paired dots coincide. Equal products ab give the same theoretical posterior distribution, but can give different paired dots.</p><p id="specs-description">${rC(e)}</p><p class="note">Posterior curves, means, and medians use ${Cr.toLocaleString("en-US")} fixed quasi-Monte Carlo samples, separate from the animation, so they do not accumulate or drift with the dots. Posterior medians are computed directly from the samples, not from the smoothed curves. The posterior curves use a smoothed histogram and share a vertical scale. Slider changes restart the current draw using the same random numbers. This propagates uncertainty in p and r through Bayes' formula.</p></details>`}function $ie(e,t){return'<div class="lab-frame"><div class="lab"><header><div><div class="eyebrow">GAUSSIAN COPULA · ONE FACTOR</div><h1 id="title">Same beliefs. Different dependence.</h1></div>'+(t?`<div class="header-actions"><a id="page-link" href="${H(lC(Gt(e)))}" target="_blank" rel="noopener" title="This introduction as a page of its own, at these input distributions, in a new tab: a link to keep or share">open as page ↗</a><button class="close" id="close" type="button" aria-label="Close" title="Close (Esc)">×</button></div>`:"")+`</header><p class="intro">Move the loadings. The two input distributions stay fixed while you do; their dependence changes the posterior. Follow one paired draw every N seconds. To try other inputs, replace either distribution's spec in its panel and press Enter <button class="spec-help" id="spec-help" type="button" aria-label="Help: the distribution spec notation" title="The distribution spec notation">?</button></p><div class="timing"><label for="duration">N · seconds per draw</label><input id="duration" type="number" inputmode="decimal" min="${hm}" max="${mm}" step="${Eie}" value="${nC}" aria-describedby="duration-help"><span id="duration-help">${hm}–${mm} seconds</span></div><div class="controls">`+Y7("prior-loading","P(H)","P(H) factor loading")+Y7("ratio-loading","P(E|H) / P(E|¬H)","Likelihood ratio factor loading")+`</div><div class="bar"><div class="legend"><span><i class="key independent"></i>Independent</span><span><i class="key dependent"></i>Dependent</span><span><i class="key overlap"></i>Overlap</span><span>${on("median")}Median</span></div><span id="rho"></span></div><div class="grid">`+wi("prior","P(H)",z7("prior","Prior","Prior distribution spec"),"Fixed prior probability density")+wi("ratio","P(E|H) / P(E|¬H)",z7("ratio","Likelihood ratio","Likelihood ratio distribution spec"),"Fixed likelihood ratio density")+wi("independent-posterior","P(H|E) · independent",null,"Independent posterior density")+wi("dependent-posterior","P(H|E) · dependent",null,"Dependent posterior density")+'</div><div class="footer"><span id="draw-label"></span><div class="buttons"><button id="pause" type="button">Pause</button><button id="zero" type="button">Zero loadings</button><button id="default-specs" type="button">Default inputs</button></div></div>'+Sie(e)+"</div></div>"}function Aie(e){const{root:t,independentDraw:n,dependentDraw:r}=e,i=(o,a)=>`<span class="independent-value">I: ${o.toFixed(3)}</span><span class="dependent-value">D: ${a.toFixed(3)}</span>`;Q(t,"prior-values").innerHTML=i(n.prior,r.prior),Q(t,"ratio-values").innerHTML=i(n.ratio,r.ratio),Q(t,"independent-posterior-values").innerHTML=`<span class="independent-value">Draw: ${kr(n.prior,n.ratio).toFixed(3)}</span>`,Q(t,"dependent-posterior-values").innerHTML=`<span class="dependent-value">Draw: ${kr(r.prior,r.ratio).toFixed(3)}</span>`}function iC(e){e.independentDraw=pm(e.model,e.drawNormals,KL),e.dependentDraw=pm(e.model,e.drawNormals,e.loadings),Aie(e)}function dh(){return Math.sqrt(-2*Math.log(1-Math.random()))*Math.cos(2*Math.PI*Math.random())}function oC(e){Q(e.root,"draw-label").textContent=`Draw ${e.drawNumber} · ${e.drawDurationMs/go} s per draw`}function aC(e){e.drawNormals={latent:dh(),priorOwn:dh(),ratioOwn:dh()},e.drawNumber+=1,iC(e),oC(e)}function yo(e){const{root:t,model:n}=e;e.loadings={prior:Number(Q(t,"prior-loading").value),ratio:Number(Q(t,"ratio-loading").value)},Q(t,"prior-loading-output").value=j7(e.loadings.prior),Q(t,"ratio-loading-output").value=j7(e.loadings.ratio);const r=e.loadings.prior*e.loadings.ratio;Q(t,"rho").textContent=`Gaussian ρ = ab = ${r<0?"−":""}${Math.abs(r).toFixed(2)}`,e.dependentPosterior=r===0?n.independentPosterior:YL(zL(n,n.qmcNormals,e.loadings)),e.posteriorDensityMax=eC*Math.max(...n.independentPosterior.density,...e.dependentPosterior.density);const i=n.independentPosterior,o=e.dependentPosterior;Q(t,"independent-posterior-mean").innerHTML=`${on("independent-mean")}Mean = ${Dt(i.mean)}`,Q(t,"dependent-posterior-mean").innerHTML=`${on("dependent-mean")}Mean = ${Dt(o.mean)} · <span class="difference">Δ ${K7(o.mean,i.mean)} vs ${on("independent-mean")}</span>`,Q(t,"prior-median").textContent=`Median = ${Dt(n.prior.median)}`,Q(t,"ratio-median").textContent=`Median = ${Oa(n.ratio.median)}`,Q(t,"independent-posterior-median").innerHTML=`${on("median")}Median = ${Dt(i.median)}`,Q(t,"dependent-posterior-median").innerHTML=`${on("median")}Median = ${Dt(o.median)} · <span class="difference">Δ ${K7(o.median,i.median)}</span>`,iC(e),e.drawStartMs=performance.now(),e.pausedAtMs!==null&&(e.pausedAtMs=e.drawStartMs)}function Tie(e){const{distrib:t,axisMax:n,atom:r}=e;if(r!==null)return[[r,0],[r,1/0]];const i=[];for(let o=0;o<=U7;o++)i.push(n*o/U7);for(const o of lS(t))o>=0&&o<=n&&i.push(o);return i.sort((o,a)=>o-a).map(o=>[o,sS(t,o)])}function Rie(e){let t=0;for(const[,n]of e)Number.isFinite(n)&&n>t&&(t=n);return t}function Iie(e,t,n){const r=Q(e.root,`${t}-plot`),i=yie(r);if(i===null)return;const{context:o,width:a,height:s}=i,{model:u}=e,l=gie(u,t),c=Ei.top,f=s-Ei.bottom,d=t==="prior"||t==="ratio",p=t==="independent-posterior"?u.independentPosterior:t==="dependent-posterior"?e.dependentPosterior:null,h=t==="prior"?u.prior:t==="ratio"?u.ratio:null,m=p===null?Tie(h):[[0,0],...Array.from(p.density,(k,P)=>[(P+.5)/gt,k]),[1,0]],v=p===null?Rie(m):0,_=p!==null||v>0,b=p!==null?e.posteriorDensityMax:v>0?eC*v:1,y=k=>f-Math.min(k/b,1)*(f-c);o.font=Bo(hie),o.fillStyle=cie;const g=Array.from({length:x7},(k,P)=>b*P/(x7-1)),E=_?Math.max(...g.map(k=>o.measureText(X7(k)).width)):0,A=Math.max(Ei.left,Math.ceil(E)+H7+1),$=a-Ei.right,C=k=>A+k/l.max*($-A);o.textAlign="right";for(const k of g){const P=y(k);o.strokeStyle=lie,o.beginPath(),o.moveTo(A,P),o.lineTo($,P),o.stroke(),_&&o.fillText(X7(k),A-H7,P+vie)}o.textAlign="center";for(let k=0;k<=l.tickIntervals;k++){const P=l.max*k/l.tickIntervals,M=l.formatTick(P),D=o.measureText(M).width/2,N=Math.min(Math.max(C(P),D),a-D);o.fillText(M,N,s-mie)}const I=m.map(([k,P])=>[C(k),y(P)]);o.beginPath(),o.moveTo(I[0][0],f);for(const[k,P]of I)o.lineTo(k,P);o.lineTo(I[I.length-1][0],f),o.closePath(),o.fillStyle=d?aie:t==="independent-posterior"?sie:uie,o.fill(),o.beginPath(),I.forEach(([k,P],M)=>M===0?o.moveTo(k,P):o.lineTo(k,P));const T=t==="independent-posterior"?Zn:ki;o.strokeStyle=d?oie:T,o.lineWidth=die,o.stroke();const S=k=>{o.beginPath(),o.moveTo(C(k),f),o.lineTo(C(k),c),o.stroke()};o.setLineDash(fie),t==="dependent-posterior"&&(o.strokeStyle=Zn,S(u.independentPosterior.mean)),p!==null&&(o.strokeStyle=T,S(p.mean)),o.setLineDash([]),o.strokeStyle=ZL,o.lineWidth=pie,S((p==null?void 0:p.median)??h.median);const w=f-W7-n*(f-c-W7-_ie),R=(k,P)=>{o.fillStyle=P,o.beginPath(),o.arc(C(k),w,G7,0,2*Math.PI),o.fill()},{independentDraw:L,dependentDraw:O}=e;if(d){const k=t==="prior"?"prior":"ratio";R(L[k],Zn),R(O[k],ki),o.save(),o.beginPath(),o.arc(C(L[k]),w,G7,0,2*Math.PI),o.clip(),R(O[k],QL),o.restore()}else t==="independent-posterior"?R(kr(L.prior,L.ratio),Zn):R(kr(O.prior,O.ratio),ki)}function sC(e,t){if(Tn!==e)return;e.pausedAtMs===null&&t-e.drawStartMs>=e.drawDurationMs&&(aC(e),e.drawStartMs=t);const n=Math.min(tC,((e.pausedAtMs??t)-e.drawStartMs)/e.drawDurationMs);for(const r of bie)Iie(e,r,n);e.animationFrame=requestAnimationFrame(r=>sC(e,r))}function vm(e){const t=document.getElementById(jL);if(t===null){e.style.left="0px",e.style.width="100%";return}const n=t.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.width=`${n.width}px`}function Eo(e,t,n,r){const i=Q(e.root,`${t}-spec`);i.value=n,r===null?i.removeAttribute("aria-invalid"):i.setAttribute("aria-invalid","true"),Q(e.root,`${t}-spec-error`).textContent=r??""}function _m(e){return e instanceof Error?e.message:String(e)}function uC(e,t){var r;e.model=JL(t);const n=Gt(e.model);ur=n,Q(e.root,"specs-description").innerHTML=rC(e.model),Q(e.root,"default-specs").disabled=Pv(n),(r=e.root.getElementById("page-link"))==null||r.setAttribute("href",lC(n)),yo(e)}function J7(e,t){var i,o;const n=Q(e.root,`${t}-spec`).value;let r;try{r=fn(t,n)}catch(a){Eo(e,t,n,_m(a));return}Eo(e,t,r.spec,null),r.spec!==e.model[t].spec&&(uC(e,{...e.model,[t]:r}),(o=(i=e.options).onSpecsApplied)==null||o.call(i,Gt(e.model)))}function Q7(e,t){try{return{marginal:fn(e,t),error:null}}catch(n){try{return{marginal:fn(e,ur[e]),error:_m(n)}}catch{return{marginal:fn(e,Ut[e]),error:_m(n)}}}}const Lie="src/pages/latent_factor_introduction.html";function Cie(e){const t=new URLSearchParams;for(const r of Lr)e[r]!==Ut[r]&&t.set(r,e[r]);const n=t.toString();return n===""?"":`?${n}`}function Kse(e){const t=new URLSearchParams(e),n={};for(const r of Lr){const i=t.get(r);i!==null&&(n[r]=i)}return n}function lC(e){return`/${Lie}${Cie(e)}`}function cC(){Tn!==null&&vm(Tn.host)}function kie(e){var i;const{root:t}=e;for(const o of["prior-loading","ratio-loading"])Q(t,o).addEventListener("input",()=>{cancelAnimationFrame(e.pendingRecomputeFrame),e.pendingRecomputeFrame=requestAnimationFrame(()=>yo(e))});for(const o of Lr){const a=Q(t,`${o}-spec`);a.addEventListener("keydown",s=>{s.key==="Enter"&&J7(e,o)}),a.addEventListener("change",()=>J7(e,o))}Q(t,"default-specs").addEventListener("click",()=>{var a,s;const o={prior:fn("prior",Ut.prior),ratio:fn("ratio",Ut.ratio)};for(const u of Lr)Eo(e,u,o[u].spec,null);uC(e,o),(s=(a=e.options).onSpecsApplied)==null||s.call(a,Gt(e.model))}),Q(t,"zero").addEventListener("click",()=>{Q(t,"prior-loading").value="0",Q(t,"ratio-loading").value="0",yo(e)});const n=Q(t,"pause");n.addEventListener("click",()=>{e.pausedAtMs===null?e.pausedAtMs=performance.now():(e.drawStartMs+=performance.now()-e.pausedAtMs,e.pausedAtMs=null),n.textContent=e.pausedAtMs===null?"Pause":"Resume"});const r=Q(t,"duration");r.addEventListener("input",()=>{const o=Number(r.value);if(!Number.isFinite(o)||o<hm||o>mm)return;const a=e.pausedAtMs??performance.now(),s=Math.min(tC,Math.max(0,(a-e.drawStartMs)/e.drawDurationMs));e.drawDurationMs=o*go,e.drawStartMs=a-s*e.drawDurationMs,oC(e)}),r.addEventListener("change",()=>{r.value=String(e.drawDurationMs/go)}),(i=t.getElementById("close"))==null||i.addEventListener("click",bm)}function Nie(){return`<button class="${Kre}" type="button" title="An interactive introduction to latents and their loadings, on input distributions you can replace">${Yre}</button>`}function Yse(e,t={}){var h,m,v,_;bm();const n=t.closable??!0,r={prior:Q7("prior",((h=t.initialSpecs)==null?void 0:h.prior)??ur.prior),ratio:Q7("ratio",((m=t.initialSpecs)==null?void 0:m.ratio)??ur.ratio)},i=JL({prior:r.prior.marginal,ratio:r.ratio.marginal});ur=Gt(i);const o=document.createElement("div");o.id=zre,o.setAttribute("role","dialog"),o.setAttribute("aria-label","Latent factor introduction"),o.style.setProperty("--independent-color",Zn),o.style.setProperty("--dependent-color",ki),o.style.setProperty("--overlap-color",QL),o.style.setProperty("--median-color",ZL);const a=o.attachShadow({mode:"open"}),s=document.createElement("style");s.textContent=jre,a.appendChild(s);const u=document.createElement("div");u.innerHTML=$ie(i,n),a.appendChild(u);const l=Q(a,"spec-help"),c=qz(l,Hre);c.wrapper.addEventListener("keydown",b=>b.stopPropagation()),o.addEventListener("keydown",b=>{b.stopPropagation(),b.key==="Escape"&&(c.isOpen()?(c.close(),l.focus()):n&&bm())}),document.body.appendChild(o),document.body.appendChild(c.wrapper),vm(o);const f=performance.now(),d={host:o,root:a,model:i,loadings:{prior:dm,ratio:dm},dependentPosterior:i.independentPosterior,posteriorDensityMax:0,drawNormals:{latent:0,priorOwn:0,ratioOwn:0},independentDraw:{prior:0,ratio:0},dependentDraw:{prior:0,ratio:0},drawNumber:0,drawDurationMs:nC*go,drawStartMs:f,pausedAtMs:null,animationFrame:0,pendingRecomputeFrame:0,columnObserver:null,opener:e,options:t,specHelp:c};Tn=d;for(const b of Lr){const{marginal:y,error:g}=r[b];Eo(d,b,g===null?y.spec:((v=t.initialSpecs)==null?void 0:v[b])??"",g)}Q(a,"default-specs").disabled=Pv(Gt(i)),kie(d),yo(d),aC(d),d.drawStartMs=performance.now();const p=document.getElementById(jL);p!==null&&typeof ResizeObserver<"u"&&(d.columnObserver=new ResizeObserver(()=>vm(o)),d.columnObserver.observe(p)),window.addEventListener("resize",cC),d.animationFrame=requestAnimationFrame(b=>sC(d,b)),(_=a.getElementById("close"))==null||_.focus()}function bm(){var t,n;const e=Tn;e!==null&&(Tn=null,cancelAnimationFrame(e.animationFrame),cancelAnimationFrame(e.pendingRecomputeFrame),(t=e.columnObserver)==null||t.disconnect(),window.removeEventListener("resize",cC),e.specHelp.close(),e.specHelp.wrapper.remove(),e.host.remove(),(n=e.opener)!=null&&n.isConnected&&e.opener.focus())}export{uL as $,A7 as A,qm as B,Cse as C,t7 as D,Cae as E,Wee as F,Ho as G,xee as H,Loe as I,NB as J,Tae as K,dz as L,PB as M,kh as N,jG as O,Tse as P,F9 as Q,yse as R,Vie as S,EW as T,kae as U,la as V,xi as W,Gie as X,je as Y,r$ as Z,Dae as _,Kse as a,CJ as a$,$a as a0,mo as a1,Pee as a2,eW as a3,XG as a4,Uo as a5,Aa as a6,Bee as a7,Br as a8,Ww as a9,Qo as aA,boe as aB,goe as aC,bh as aD,hoe as aE,poe as aF,mn as aG,moe as aH,Do as aI,Ye as aJ,ute as aK,xW as aL,Iz as aM,wJ as aN,Nee as aO,Sn as aP,JI as aQ,V as aR,Oee as aS,Ioe as aT,Coe as aU,Doe as aV,Nt as aW,Jt as aX,BW as aY,GW as aZ,koe as a_,iB as aa,rB as ab,oB as ac,eB as ad,zq as ae,r9 as af,rS as ag,Bie as ah,Qy as ai,qt as aj,lV as ak,Kie as al,Oh as am,Mae as an,Gae as ao,Ia as ap,soe as aq,Ce as ar,ite as as,H as at,et as au,ke as av,$re as aw,fG as ax,pG as ay,mG as az,Xie as b,pae as b$,TJ as b0,qW as b1,rL as b2,tL as b3,tV as b4,nV as b5,QI as b6,nL as b7,P$ as b8,toe as b9,$v as bA,Sae as bB,QJ as bC,YJ as bD,iV as bE,aee as bF,JJ as bG,v2 as bH,BI as bI,Ste as bJ,Rte as bK,pte as bL,HZ as bM,IZ as bN,b7 as bO,Lv as bP,ii as bQ,xZ as bR,zZ as bS,lee as bT,Ree as bU,wZ as bV,S7 as bW,Eee as bX,ea as bY,tJ as bZ,zz as b_,Dee as ba,mt as bb,zoe as bc,Fz as bd,aae as be,Ar as bf,xo as bg,RR as bh,em as bi,Pz as bj,eI as bk,YQ as bl,EV as bm,wV as bn,zQ as bo,gh as bp,Pie as bq,cr as br,Ite as bs,zae as bt,HJ as bu,sr as bv,qie as bw,AV as bx,TQ as by,Iae as bz,Jw as c,hK as c$,Un as c0,GZ as c1,YI as c2,See as c3,Tee as c4,ZZ as c5,sm as c6,Lee as c7,eee as c8,noe as c9,Xae as cA,XK as cB,fte as cC,iL as cD,Yae as cE,$q as cF,OW as cG,Wae as cH,Vae as cI,Hie as cJ,xie as cK,nB as cL,Hoe as cM,AK as cN,xoe as cO,Dm as cP,voe as cQ,Uoe as cR,gj as cS,RK as cT,vY as cU,Zw as cV,Uie as cW,Xh as cX,nJ as cY,sn as cZ,_oe as c_,Woe as ca,tS as cb,Kq as cc,Zy as cd,Xq as ce,A$ as cf,Vee as cg,rv as ch,jse as ci,jr as cj,T$ as ck,ooe as cl,Nae as cm,bae as cn,La as co,NL as cp,YB as cq,xn as cr,Ih as cs,Ese as ct,Wh as cu,jie as cv,zie as cw,y$ as cx,Hre as cy,jae as cz,Vy as d,C2 as d$,LK as d0,Kt as d1,xr as d2,xB as d3,HT as d4,Kh as d5,rJ as d6,KR as d7,oL as d8,YX as d9,NR as dA,g2 as dB,sQ as dC,ST as dD,XA as dE,ha as dF,zh as dG,hY as dH,I$ as dI,wY as dJ,ZJ as dK,Ee as dL,Um as dM,Wn as dN,m2 as dO,Kr as dP,nQ as dQ,OV as dR,p7 as dS,EQ as dT,h2 as dU,wQ as dV,aA as dW,sv as dX,BR as dY,U2 as dZ,k2 as d_,NV as da,DR as db,fJ as dc,Toe as dd,aZ as de,sZ as df,JQ as dg,xm as dh,UX as di,cA as dj,_2 as dk,jR as dl,tn as dm,VR as dn,b2 as dp,uJ as dq,fj as dr,jA as ds,uQ as dt,l7 as du,da as dv,WR as dw,XR as dx,dQ as dy,av as dz,Uy as e,BG as e$,eT as e0,uR as e1,MI as e2,OI as e3,XT as e4,SA as e5,Iq as e6,At as e7,$ae as e8,R$ as e9,NI as eA,Yoe as eB,nZ as eC,tZ as eD,Eae as eE,rZ as eF,Dse as eG,Pse as eH,Hse as eI,tT as eJ,O2 as eK,M2 as eL,gQ as eM,RT as eN,YR as eO,hA as eP,sV as eQ,roe as eR,cte as eS,Fse as eT,qse as eU,qL as eV,Qoe as eW,mae as eX,hae as eY,xL as eZ,xse as e_,Bse as ea,Zae as eb,Aae as ec,qq as ed,Bq as ee,Hq as ef,yoe as eg,p2 as eh,dE as ei,iZ as ej,_E as ek,vE as el,O$ as em,wae as en,uZ as eo,kt as ep,N$ as eq,lZ as er,MV as es,Hm as et,kI as eu,sR as ev,Roe as ew,JR as ex,sJ as ey,tae as ez,Gy as f,UG as f$,br as f0,Eoe as f1,iae as f2,Bz as f3,rae as f4,Soe as f5,LX as f6,Yn as f7,oae as f8,fse as f9,Bae as fA,dG as fB,hG as fC,Vi as fD,_G as fE,bG as fF,gG as fG,XB as fH,qn as fI,Qw as fJ,wS as fK,Bm as fL,jm as fM,Yy as fN,Po as fO,ES as fP,Fi as fQ,qi as fR,SS as fS,VB as fT,$S as fU,dW as fV,$z as fW,pW as fX,vS as fY,Wie as fZ,Qie as f_,Kte as fa,dse as fb,jn as fc,mL as fd,Ute as fe,oi as ff,tse as fg,Zoe as fh,Gse as fi,lse as fj,xJ as fk,G9 as fl,gJ as fm,NW as fn,W9 as fo,mJ as fp,Fae as fq,Pae as fr,u2 as fs,xae as ft,Fie as fu,Ra as fv,loe as fw,Ui as fx,Gn as fy,qae as fz,KQ as g,Nse as g$,Jie as g0,GG as g1,Yie as g2,kL as g3,Zie as g4,UB as g5,JB as g6,LW as g7,cW as g8,p9 as g9,ioe as gA,aoe as gB,yae as gC,eae as gD,Tz as gE,Lte as gF,N7 as gG,oo as gH,Voe as gI,Boe as gJ,joe as gK,Goe as gL,Koe as gM,Poe as gN,Moe as gO,Foe as gP,uj as gQ,Ji as gR,yr as gS,FA as gT,Ane as gU,Tne as gV,TL as gW,Ene as gX,RL as gY,Nte as gZ,Jz as g_,d9 as ga,h9 as gb,DW as gc,dH as gd,sH as ge,m9 as gf,KG as gg,ZG as gh,tW as gi,JG as gj,QG as gk,zG as gl,Jm as gm,hH as gn,CL as go,yh as gp,Pq as gq,qQ as gr,BB as gs,rse as gt,ise as gu,Aoe as gv,$oe as gw,woe as gx,qoe as gy,gae as gz,Ym as h,LJ as h$,jne as h0,FL as h1,Zne as h2,Sne as h3,_se as h4,Ine as h5,bse as h6,Rne as h7,sae as h8,_v as h9,Jae as hA,coe as hB,Zz as hC,aL as hD,eJ as hE,v$ as hF,vn as hG,Rse as hH,Lae as hI,Lse as hJ,uae as hK,dae as hL,eoe as hM,zne as hN,AB as hO,vo as hP,Oae as hQ,Ose as hR,i$ as hS,aV as hT,HG as hU,Hae as hV,yi as hW,pse as hX,kte as hY,ase as hZ,Kae as h_,lae as ha,cae as hb,fae as hc,ore as hd,Kre as he,Joe as hf,l2 as hg,Wne as hh,LL as hi,Vne as hj,hz as hk,yz as hl,mz as hm,doe as hn,foe as ho,JW as hp,QW as hq,ZW as hr,ose as hs,$L as ht,Rae as hu,use as hv,sse as hw,Noe as hx,Xoe as hy,Ooe as hz,Mi as i,ese as i0,vJ as i1,$se as i2,Sse as i3,wse as i4,Ase as i5,EJ as i6,Qae as i7,Use as i8,Xse as i9,Pne as ia,dte as ib,Uae as ic,nae as id,Wse as ie,Vse as ig,mse as ih,hse as ii,Mse as ij,Yne as ik,Bre as il,uoe as im,Dne as io,kse as ip,vse as iq,Ise as ir,nse as is,gse as it,cse as iu,Sv as j,vae as k,Cie as l,$n as m,yI as n,Yse as o,BQ as p,_ae as q,LQ as r,Ge as s,RQ as t,Ta as u,CQ as v,kQ as w,SI as x,wI as y,rm as z};
