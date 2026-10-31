var Xp=Object.defineProperty;var Bp=(yr,mr,Fr)=>mr in yr?Xp(yr,mr,{enumerable:!0,configurable:!0,writable:!0,value:Fr}):yr[mr]=Fr;var ve=(yr,mr,Fr)=>Bp(yr,typeof mr!="symbol"?mr+"":mr,Fr);(function(){"use strict";const yr={lo:0,hi:1,loClosed:!0,hiClosed:!0};function mr(e,r){return!(e.lo!==null&&(e.loClosed?r<e.lo:r<=e.lo)||e.hi!==null&&(e.hiClosed?r>e.hi:r>=e.hi))}function Fr(e){return{lo:e.lo,hi:e.hi,loClosed:e.lo!==null,hiClosed:e.hi!==null}}function Zr(e){const r=e.loClosed&&e.lo!==null?"[":"(",i=e.hiClosed&&e.hi!==null?"]":")";return`${r}${e.lo??"-inf"}, ${e.hi??"inf"}${i}`}function Lr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
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
*/var Me,Fo;function A8(){if(Fo)return Me;Fo=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return Me=e,Me}/**
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
*/var Ae,Oo;function E8(){if(Oo)return Ae;Oo=1;var e=A8();function r(){try{return e({},"x",{}),!0}catch{return!1}}return Ae=r,Ae}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ee,To;function w8(){if(To)return Ee;To=1;var e=Object.defineProperty;return Ee=e,Ee}/**
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
*/var we,Ho;function Co(){if(Ho)return we;Ho=1;function e(r){return typeof r=="number"}return we=e,we}/**
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
*/var Se,Go;function ko(){if(Go)return Se;Go=1;function e(n){return n[0]==="-"}function r(n){var a="",t;for(t=0;t<n;t++)a+="0";return a}function i(n,a,t){var v=!1,u=a-n.length;return u<0||(e(n)&&(v=!0,n=n.substr(1)),n=t?n+r(u):r(u)+n,v&&(n="-"+n)),n}return Se=i,Se}/**
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
*/var Pe,Do;function S8(){if(Do)return Pe;Do=1;var e=Co(),r=ko(),i=String.prototype.toLowerCase,n=String.prototype.toUpperCase;function a(t){var v,u,f;switch(t.specifier){case"b":v=2;break;case"o":v=8;break;case"x":case"X":v=16;break;case"d":case"i":case"u":default:v=10;break}if(u=t.arg,f=parseInt(u,10),!isFinite(f)){if(!e(u))throw new Error("invalid integer. Value: "+u);f=0}return f<0&&(t.specifier==="u"||v!==10)&&(f=4294967295+f+1),f<0?(u=(-f).toString(v),t.precision&&(u=r(u,t.precision,t.padRight)),u="-"+u):(u=f.toString(v),!f&&!t.precision?u="":t.precision&&(u=r(u,t.precision,t.padRight)),t.sign&&(u=t.sign+u)),v===16&&(t.alternate&&(u="0x"+u),u=t.specifier===n.call(t.specifier)?n.call(u):i.call(u)),v===8&&t.alternate&&u.charAt(0)!=="0"&&(u="0"+u),u}return Pe=a,Pe}/**
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
*/var Fe,Wo;function P8(){if(Wo)return Fe;Wo=1;function e(r){return typeof r=="string"}return Fe=e,Fe}/**
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
*/var Oe,Uo;function F8(){if(Uo)return Oe;Uo=1;var e=Math.abs,r=String.prototype.toLowerCase,i=String.prototype.toUpperCase,n=String.prototype.replace,a=/e\+(\d)$/,t=/e-(\d)$/,v=/^(\d+)$/,u=/^(\d+)e/,f=/\.0$/,o=/\.0*e/,s=/(\..*[^0])0*e/;function l(_,d){var h,m;switch(d.specifier){case"e":case"E":m=_.toExponential(d.precision);break;case"f":case"F":m=_.toFixed(d.precision);break;case"g":case"G":e(_)<1e-4?(h=d.precision,h>0&&(h-=1),m=_.toExponential(h)):m=_.toPrecision(d.precision),d.alternate||(m=n.call(m,s,"$1e"),m=n.call(m,o,"e"),m=n.call(m,f,""));break;default:throw new Error("invalid double notation. Value: "+d.specifier)}return m=n.call(m,a,"e+0$1"),m=n.call(m,t,"e-0$1"),d.alternate&&(m=n.call(m,v,"$1."),m=n.call(m,u,"$1.e")),_>=0&&d.sign&&(m=d.sign+m),m=d.specifier===i.call(d.specifier)?i.call(m):r.call(m),m}return Oe=l,Oe}/**
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
*/var Te,Xo;function O8(){if(Xo)return Te;Xo=1;function e(i){var n="",a;for(a=0;a<i;a++)n+=" ";return n}function r(i,n,a){var t=n-i.length;return t<0||(i=a?i+e(t):e(t)+i),i}return Te=r,Te}/**
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
*/var He,Bo;function T8(){if(Bo)return He;Bo=1;var e=S8(),r=P8(),i=Co(),n=F8(),a=O8(),t=ko(),v=String.fromCharCode,u=Array.isArray;function f(l){return l!==l}function o(l){var _={};return _.specifier=l.specifier,_.precision=l.precision===void 0?1:l.precision,_.width=l.width,_.flags=l.flags||"",_.mapping=l.mapping,_}function s(l){var _,d,h,m,c,p,y,L,b,I;if(!u(l))throw new TypeError("invalid argument. First argument must be an array. Value: `"+l+"`.");for(p="",y=1,b=0;b<l.length;b++)if(h=l[b],r(h))p+=h;else{if(_=h.precision!==void 0,h=o(h),!h.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+b+"`. Value: `"+h+"`.");for(h.mapping&&(y=h.mapping),d=h.flags,I=0;I<d.length;I++)switch(m=d.charAt(I),m){case" ":h.sign=" ";break;case"+":h.sign="+";break;case"-":h.padRight=!0,h.padZeros=!1;break;case"0":h.padZeros=d.indexOf("-")<0;break;case"#":h.alternate=!0;break;default:throw new Error("invalid flag: "+m)}if(h.width==="*"){if(h.width=parseInt(arguments[y],10),y+=1,f(h.width))throw new TypeError("the argument for * width at position "+y+" is not a number. Value: `"+h.width+"`.");h.width<0&&(h.padRight=!0,h.width=-h.width)}if(_&&h.precision==="*"){if(h.precision=parseInt(arguments[y],10),y+=1,f(h.precision))throw new TypeError("the argument for * precision at position "+y+" is not a number. Value: `"+h.precision+"`.");h.precision<0&&(h.precision=1,_=!1)}switch(h.arg=arguments[y],h.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":_&&(h.padZeros=!1),h.arg=e(h);break;case"s":h.maxWidth=_?h.precision:-1,h.arg=String(h.arg);break;case"c":if(!f(h.arg)){if(c=parseInt(h.arg,10),c<0||c>127)throw new Error("invalid character code. Value: "+h.arg);h.arg=f(c)?String(h.arg):v(c)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(_||(h.precision=6),L=parseFloat(h.arg),!isFinite(L)){if(!i(h.arg))throw new Error("invalid floating-point number. Value: "+p);L=h.arg,h.padZeros=!1}h.arg=n(L,h);break;default:throw new Error("invalid specifier: "+h.specifier)}h.maxWidth>=0&&h.arg.length>h.maxWidth&&(h.arg=h.arg.substring(0,h.maxWidth)),h.padZeros?h.arg=t(h.arg,h.width||h.precision,h.padRight):h.width&&(h.arg=a(h.arg,h.width,h.padRight)),p+=h.arg||"",y+=1}return p}return He=s,He}/**
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
*/var Ce,Vo;function H8(){if(Vo)return Ce;Vo=1;var e=T8();return Ce=e,Ce}/**
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
*/var Ge,Jo;function C8(){if(Jo)return Ge;Jo=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function r(n){var a={mapping:n[1]?parseInt(n[1],10):void 0,flags:n[2],width:n[3],precision:n[5],specifier:n[6]};return n[4]==="."&&n[5]===void 0&&(a.precision="1"),a}function i(n){var a,t,v,u;for(t=[],u=0,v=e.exec(n);v;)a=n.slice(u,e.lastIndex-v[0].length),a.length&&t.push(a),v[6]==="%"?t.push("%"):t.push(r(v)),u=e.lastIndex,v=e.exec(n);return a=n.slice(u),a.length&&t.push(a),t}return Ge=i,Ge}/**
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
*/var ke,Ko;function G8(){if(Ko)return ke;Ko=1;var e=C8();return ke=e,ke}/**
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
*/var De,Qo;function k8(){if(Qo)return De;Qo=1;function e(r){return typeof r=="string"}return De=e,De}/**
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
*/var We,Yo;function D8(){if(Yo)return We;Yo=1;var e=H8(),r=G8(),i=k8();function n(a){var t,v;if(!i(a))throw new TypeError(n("invalid argument. First argument must be a string. Value: `%s`.",a));for(t=[r(a)],v=1;v<arguments.length;v++)t.push(arguments[v]);return e.apply(null,t)}return We=n,We}/**
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
*/var Ue,Zo;function W8(){if(Zo)return Ue;Zo=1;var e=D8();return Ue=e,Ue}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xe,jo;function U8(){if(jo)return Xe;jo=1;var e=W8(),r=Object.prototype,i=r.toString,n=r.__defineGetter__,a=r.__defineSetter__,t=r.__lookupGetter__,v=r.__lookupSetter__;function u(f,o,s){var l,_,d,h;if(typeof f!="object"||f===null||i.call(f)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",f));if(typeof s!="object"||s===null||i.call(s)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",s));if(_="value"in s,_&&(t.call(f,o)||v.call(f,o)?(l=f.__proto__,f.__proto__=r,delete f[o],f[o]=s.value,f.__proto__=l):f[o]=s.value),d="get"in s,h="set"in s,_&&(d||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&n&&n.call(f,o,s.get),h&&a&&a.call(f,o,s.set),f}return Xe=u,Xe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Be,zo;function X8(){if(zo)return Be;zo=1;var e=E8(),r=w8(),i=U8(),n;return e()?n=r:n=i,Be=n,Be}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ve,xo;function B8(){if(xo)return Ve;xo=1;var e=X8();function r(i,n,a){e(i,n,{configurable:!1,enumerable:!1,writable:!1,value:a})}return Ve=r,Ve}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Je,r2;function or(){if(r2)return Je;r2=1;var e=B8();return Je=e,Je}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ke,e2;function V8(){if(e2)return Ke;e2=1;function e(r){return r!==r}return Ke=e,Ke}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qe,i2;function B(){if(i2)return Qe;i2=1;var e=V8();return Qe=e,Qe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ye,n2;function J8(){if(n2)return Ye;n2=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return Ye=e,Ye}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ze,a2;function K8(){if(a2)return Ze;a2=1;var e=J8();return Ze=e,Ze}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var je,t2;function Q8(){if(t2)return je;t2=1;var e=K8(),r=e();function i(){return r&&typeof Symbol.toStringTag=="symbol"}return je=i,je}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ze,u2;function Y8(){if(u2)return ze;u2=1;var e=Q8();return ze=e,ze}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xe,v2;function o2(){if(v2)return xe;v2=1;var e=Object.prototype.toString;return xe=e,xe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,f2;function Z8(){if(f2)return r0;f2=1;var e=o2();function r(i){return e.call(i)}return r0=r,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e0,s2;function j8(){if(s2)return e0;s2=1;var e=Object.prototype.hasOwnProperty;function r(i,n){return i==null?!1:e.call(i,n)}return e0=r,e0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i0,l2;function z8(){if(l2)return i0;l2=1;var e=j8();return i0=e,i0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n0,c2;function x8(){if(c2)return n0;c2=1;var e=typeof Symbol=="function"?Symbol:void 0;return n0=e,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a0,m2;function r9(){if(m2)return a0;m2=1;var e=x8();return a0=e,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t0,h2;function e9(){if(h2)return t0;h2=1;var e=r9(),r=typeof e=="function"?e.toStringTag:"";return t0=r,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u0,_2;function i9(){if(_2)return u0;_2=1;var e=z8(),r=e9(),i=o2();function n(a){var t,v,u;if(a==null)return i.call(a);v=a[r],t=e(a,r);try{a[r]=void 0}catch{return i.call(a)}return u=i.call(a),t?a[r]=v:delete a[r],u}return u0=n,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v0,d2;function oe(){if(d2)return v0;d2=1;var e=Y8(),r=Z8(),i=i9(),n;return e()?n=i:n=r,v0=n,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,$2;function n9(){if($2)return o0;$2=1;var e=oe(),r=typeof Uint32Array=="function";function i(n){return r&&n instanceof Uint32Array||e(n)==="[object Uint32Array]"}return o0=i,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f0,p2;function a9(){if(p2)return f0;p2=1;var e=n9();return f0=e,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,q2;function t9(){if(q2)return s0;q2=1;var e=4294967295;return s0=e,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,y2;function u9(){if(y2)return l0;y2=1;var e=typeof Uint32Array=="function"?Uint32Array:null;return l0=e,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,R2;function v9(){if(R2)return c0;R2=1;var e=a9(),r=t9(),i=u9();function n(){var a,t;if(typeof i!="function")return!1;try{t=[1,3.14,-3.14,r+1,r+2],t=new i(t),a=e(t)&&t[0]===1&&t[1]===3&&t[2]===r-2&&t[3]===0&&t[4]===1}catch{a=!1}return a}return c0=n,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,g2;function o9(){if(g2)return m0;g2=1;var e=v9();return m0=e,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h0,b2;function f9(){if(b2)return h0;b2=1;var e=typeof Uint32Array=="function"?Uint32Array:void 0;return h0=e,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _0,L2;function s9(){if(L2)return _0;L2=1;function e(){throw new Error("not implemented")}return _0=e,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d0,N2;function kr(){if(N2)return d0;N2=1;var e=o9(),r=f9(),i=s9(),n;return e()?n=r:n=i,d0=n,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $0,I2;function l9(){if(I2)return $0;I2=1;var e=oe(),r=typeof Float64Array=="function";function i(n){return r&&n instanceof Float64Array||e(n)==="[object Float64Array]"}return $0=i,$0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,M2;function c9(){if(M2)return p0;M2=1;var e=l9();return p0=e,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q0,A2;function m9(){if(A2)return q0;A2=1;var e=typeof Float64Array=="function"?Float64Array:null;return q0=e,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y0,E2;function h9(){if(E2)return y0;E2=1;var e=c9(),r=m9();function i(){var n,a;if(typeof r!="function")return!1;try{a=new r([1,3.14,-3.14,NaN]),n=e(a)&&a[0]===1&&a[1]===3.14&&a[2]===-3.14&&a[3]!==a[3]}catch{n=!1}return n}return y0=i,y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R0,w2;function _9(){if(w2)return R0;w2=1;var e=h9();return R0=e,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,S2;function d9(){if(S2)return g0;S2=1;var e=typeof Float64Array=="function"?Float64Array:void 0;return g0=e,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,P2;function $9(){if(P2)return b0;P2=1;function e(){throw new Error("not implemented")}return b0=e,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,F2;function Dr(){if(F2)return L0;F2=1;var e=_9(),r=d9(),i=$9(),n;return e()?n=r:n=i,L0=n,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,O2;function p9(){if(O2)return N0;O2=1;var e=oe(),r=typeof Uint8Array=="function";function i(n){return r&&n instanceof Uint8Array||e(n)==="[object Uint8Array]"}return N0=i,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,T2;function q9(){if(T2)return I0;T2=1;var e=p9();return I0=e,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M0,H2;function y9(){if(H2)return M0;H2=1;var e=255;return M0=e,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,C2;function R9(){if(C2)return A0;C2=1;var e=typeof Uint8Array=="function"?Uint8Array:null;return A0=e,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,G2;function g9(){if(G2)return E0;G2=1;var e=q9(),r=y9(),i=R9();function n(){var a,t;if(typeof i!="function")return!1;try{t=[1,3.14,-3.14,r+1,r+2],t=new i(t),a=e(t)&&t[0]===1&&t[1]===3&&t[2]===r-2&&t[3]===0&&t[4]===1}catch{a=!1}return a}return E0=n,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,k2;function b9(){if(k2)return w0;k2=1;var e=g9();return w0=e,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,D2;function L9(){if(D2)return S0;D2=1;var e=typeof Uint8Array=="function"?Uint8Array:void 0;return S0=e,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,W2;function N9(){if(W2)return P0;W2=1;function e(){throw new Error("not implemented")}return P0=e,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,U2;function I9(){if(U2)return F0;U2=1;var e=b9(),r=L9(),i=N9(),n;return e()?n=r:n=i,F0=n,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,X2;function M9(){if(X2)return O0;X2=1;var e=oe(),r=typeof Uint16Array=="function";function i(n){return r&&n instanceof Uint16Array||e(n)==="[object Uint16Array]"}return O0=i,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,B2;function A9(){if(B2)return T0;B2=1;var e=M9();return T0=e,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,V2;function E9(){if(V2)return H0;V2=1;var e=65535;return H0=e,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,J2;function w9(){if(J2)return C0;J2=1;var e=typeof Uint16Array=="function"?Uint16Array:null;return C0=e,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0,K2;function S9(){if(K2)return G0;K2=1;var e=A9(),r=E9(),i=w9();function n(){var a,t;if(typeof i!="function")return!1;try{t=[1,3.14,-3.14,r+1,r+2],t=new i(t),a=e(t)&&t[0]===1&&t[1]===3&&t[2]===r-2&&t[3]===0&&t[4]===1}catch{a=!1}return a}return G0=n,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,Q2;function P9(){if(Q2)return k0;Q2=1;var e=S9();return k0=e,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,Y2;function F9(){if(Y2)return D0;Y2=1;var e=typeof Uint16Array=="function"?Uint16Array:void 0;return D0=e,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,Z2;function O9(){if(Z2)return W0;Z2=1;function e(){throw new Error("not implemented")}return W0=e,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,j2;function T9(){if(j2)return U0;j2=1;var e=P9(),r=F9(),i=O9(),n;return e()?n=r:n=i,U0=n,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,z2;function H9(){if(z2)return X0;z2=1;var e=I9(),r=T9(),i={uint16:r,uint8:e};return X0=i,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,x2;function C9(){if(x2)return B0;x2=1;var e=H9(),r;function i(){var n,a;return n=new e.uint16(1),n[0]=4660,a=new e.uint8(n.buffer),a[0]===52}return r=i(),B0=r,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,rf;function Wr(){if(rf)return V0;rf=1;var e=C9();return V0=e,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,ef;function G9(){if(ef)return J0;ef=1;var e=Wr(),r;return e===!0?r=1:r=0,J0=r,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K0,nf;function k9(){if(nf)return K0;nf=1;var e=kr(),r=Dr(),i=G9(),n=new r(1),a=new e(n.buffer);function t(v){return n[0]=v,a[i]}return K0=t,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,af;function hr(){if(af)return Q0;af=1;var e=k9();return Q0=e,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,tf;function D9(){if(tf)return Y0;tf=1;var e=Wr(),r;return e===!0?r=1:r=0,Y0=r,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,uf;function W9(){if(uf)return Z0;uf=1;var e=kr(),r=Dr(),i=D9(),n=new r(1),a=new e(n.buffer);function t(v,u){return n[0]=v,a[i]=u>>>0,n[0]}return Z0=t,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,vf;function jr(){if(vf)return j0;vf=1;var e=W9();return j0=e,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,of;function U9(){if(of)return z0;of=1;var e=Wr(),r,i,n;return e===!0?(i=1,n=0):(i=0,n=1),r={HIGH:i,LOW:n},z0=r,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,ff;function X9(){if(ff)return x0;ff=1;var e=kr(),r=Dr(),i=U9(),n=new r(1),a=new e(n.buffer),t=i.HIGH,v=i.LOW;function u(f,o){return a[t]=f,a[v]=o,n[0]}return x0=u,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ri,sf;function fe(){if(sf)return ri;sf=1;var e=X9();return ri=e,ri}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ei,lf;function ir(){if(lf)return ei;lf=1;var e=Number.POSITIVE_INFINITY;return ei=e,ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ii,cf;function B9(){return cf||(cf=1,ii=Number),ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ni,mf;function V9(){if(mf)return ni;mf=1;var e=B9();return ni=e,ni}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ai,hf;function fr(){if(hf)return ai;hf=1;var e=V9(),r=e.NEGATIVE_INFINITY;return ai=r,ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ti,_f;function Or(){if(_f)return ti;_f=1;var e=1023;return ti=e,ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ui,df;function J9(){if(df)return ui;df=1;var e=.34657359027997264;return ui=e,ui}/**
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
*/var vi,$f;function K9(){if($f)return vi;$f=1;function e(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}return vi=e,vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var oi,pf;function Q9(){if(pf)return oi;pf=1;var e=B(),r=hr(),i=jr(),n=fe(),a=ir(),t=fr(),v=Or(),u=J9(),f=K9(),o=709.782712893384,s=.6931471803691238,l=19082149292705877e-26,_=1.4426950408889634,d=38.816242111356935,h=1.0397207708399179;function m(c){var p,y,L,b,I,E,M,w,A,g,$,q,R;if(c===a||e(c))return c;if(c===t)return-1;if(c===0)return c;if(c<0?(L=!0,w=-c):(L=!1,w=c),w>=d){if(L)return-1;if(w>=o)return a}if(E=r(w)|0,w>u)w<h?L?(b=c+s,I=-l,R=-1):(b=c-s,I=l,R=1):(L?R=_*c-.5:R=_*c+.5,R|=0,$=R,b=c-$*s,I=$*l),c=b-I,g=b-c-I;else{if(E<1016070144)return c;R=0}return p=.5*c,A=c*p,M=1+A*f(A),$=3-M*p,q=A*((M-$)/(6-c*$)),R===0?c-(c*q-A):(y=n(v+R<<20,0),q=c*(q-g)-g,q-=A,R===-1?.5*(c-q)-.5:R===1?c<-.25?-2*(q-(c+.5)):1+2*(c-q):R<=-2||R>56?(w=1-(q-c),R===1024?(b=r(w)+(R<<20)|0,w=i(w,b)):w*=y,w-1):($=1,R<20?(b=1072693248-(2097152>>R)|0,$=i($,b),w=$-(q-c)):(b=v-R<<20|0,$=i($,b),w=c-(q+$),w+=1),w*=y,w))}return oi=m,oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fi,qf;function Ur(){if(qf)return fi;qf=1;var e=Q9();return fi=e,fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var si,yf;function Y9(){if(yf)return si;yf=1;var e=Math.floor;return si=e,si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var li,Rf;function Rr(){if(Rf)return li;Rf=1;var e=Y9();return li=e,li}/**
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
*/var ci,gf;function Z9(){if(gf)return ci;gf=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}return ci=e,ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var mi,bf;function j9(){if(bf)return mi;bf=1;var e=B(),r=hr(),i=jr(),n=ir(),a=fr(),t=Or(),v=Z9(),u=.6931471803691238,f=19082149292705877e-26,o=.41421356237309503,s=-.2928932188134525,l=1862645149230957e-24,_=5551115123125783e-32,d=9007199254740992,h=.6666666666666666;function m(c){var p,y,L,b,I,E,M,w,A,g;if(c<-1||e(c))return NaN;if(c===-1)return a;if(c===n||c===0)return c;if(c<0?L=-c:L=c,g=1,L<o){if(L<l)return L<_?c:c-c*c*.5;c>s&&(g=0,b=c,y=1)}return g!==0&&(L<d?(A=1+c,y=r(A),g=(y>>20)-t,g>0?I=1-(A-c):I=c-(A-1),I/=A):(A=c,y=r(A),g=(y>>20)-t,I=0),y&=1048575,y<434334?A=i(A,y|1072693248):(g+=1,A=i(A,y|1071644672),y=1048576-y>>2),b=A-1),p=.5*b*b,y===0?b===0?(I+=g*f,g*u+I):(w=p*(1-h*b),g*u-(w-(g*f+I)-b)):(E=b/(2+b),M=E*E,w=M*v(M),g===0?b-(p-E*(p+w)):g*u-(p-(E*(p+w)+(g*f+I))-b))}return mi=m,mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hi,Lf;function _r(){if(Lf)return hi;Lf=1;var e=j9();return hi=e,hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _i,Nf;function z9(){if(Nf)return _i;Nf=1;var e=Math.sqrt;return _i=e,_i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var di,If;function Y(){if(If)return di;If=1;var e=z9();return di=e,di}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $i,Mf;function Af(){if(Mf)return $i;Mf=1;var e=.7853981633974483;return $i=e,$i}/**
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
*/var pi,Ef;function x9(){if(Ef)return pi;Ef=1;function e(r){var i,n,a;return r===0?.16666666666666713:(r<0?i=-r:i=r,i<=1?(n=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),a=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,n=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),a=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),n/a)}return pi=e,pi}/**
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
*/var qi,wf;function rc(){if(wf)return qi;wf=1;function e(r){var i,n,a;return r===0?.08333333333333809:(r<0?i=-r:i=r,i<=1?(n=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),a=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,n=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),a=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),n/a)}return qi=e,qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var yi,Sf;function ec(){if(Sf)return yi;Sf=1;var e=B(),r=Y(),i=Af(),n=x9(),a=rc(),t=6123233995736766e-32;function v(u){var f,o,s,l,_;if(e(u))return NaN;if(u>0?s=u:(f=!0,s=-u),s>1)return NaN;if(s>.625)o=1-s,l=o*a(o),o=r(o+o),_=i-o,o=o*l-t,_-=o,_+=i;else{if(s<1e-8)return u;o=s*s,_=o*n(o),_=s*_+s}return f?-_:_}return yi=v,yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ri,Pf;function gi(){if(Pf)return Ri;Pf=1;var e=ec();return Ri=e,Ri}/**
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
*/var bi,Ff;function ic(){if(Ff)return bi;Ff=1;function e(r){return Math.abs(r)}return bi=e,bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Li,Of;function Z(){if(Of)return Li;Of=1;var e=ic();return Li=e,Li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ni,Tf;function nc(){if(Tf)return Ni;Tf=1;var e=Math.ceil;return Ni=e,Ni}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ii,Hf;function ac(){if(Hf)return Ii;Hf=1;var e=nc();return Ii=e,Ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mi,Cf;function tc(){if(Cf)return Mi;Cf=1;var e=Rr(),r=ac();function i(n){return n<0?r(n):e(n)}return Mi=i,Mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ai,Gf;function Ei(){if(Gf)return Ai;Gf=1;var e=tc();return Ai=e,Ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wi,kf;function uc(){if(kf)return wi;kf=1;var e=1023;return wi=e,wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Si,Df;function vc(){if(Df)return Si;Df=1;var e=-1023;return Si=e,Si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pi,Wf;function oc(){if(Wf)return Pi;Wf=1;var e=-1074;return Pi=e,Pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fi,Uf;function fc(){if(Uf)return Fi;Uf=1;var e=ir(),r=fr();function i(n){return n===e||n===r}return Fi=i,Fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oi,Xf;function Xr(){if(Xf)return Oi;Xf=1;var e=fc();return Oi=e,Oi}/**
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
*/var Ti,Bf;function sc(){if(Bf)return Ti;Bf=1;var e=2147483648;return Ti=e,Ti}/**
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
*/var Hi,Vf;function Tr(){if(Vf)return Hi;Vf=1;var e=2147483647;return Hi=e,Hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ci,Jf;function lc(){if(Jf)return Ci;Jf=1;var e=Wr(),r,i,n;return e===!0?(i=1,n=0):(i=0,n=1),r={HIGH:i,LOW:n},Ci=r,Ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gi,Kf;function Qf(){if(Kf)return Gi;Kf=1;var e=kr(),r=Dr(),i=lc(),n=new r(1),a=new e(n.buffer),t=i.HIGH,v=i.LOW;function u(f,o,s,l){return n[0]=f,o[l]=a[t],o[l+s]=a[v],o}return Gi=u,Gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ki,Yf;function cc(){if(Yf)return ki;Yf=1;var e=Qf();function r(i){return e(i,[0,0],1,0)}return ki=r,ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Di,Zf;function Wi(){if(Zf)return Di;Zf=1;var e=or(),r=cc(),i=Qf();return e(r,"assign",i),Di=r,Di}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ui,jf;function mc(){if(jf)return Ui;jf=1;var e=sc(),r=Tr(),i=Wi(),n=hr(),a=fe(),t=[0,0];function v(u,f){var o,s;return i.assign(u,t,1,0),o=t[0],o&=r,s=n(f),s&=e,o|=s,a(o,t[1])}return Ui=v,Ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xi,zf;function Bi(){if(zf)return Xi;zf=1;var e=mc();return Xi=e,Xi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vi,xf;function Hr(){if(xf)return Vi;xf=1;var e=22250738585072014e-324;return Vi=e,Vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ji,r3;function e3(){if(r3)return Ji;r3=1;var e=Hr(),r=Xr(),i=B(),n=Z(),a=4503599627370496;function t(v,u,f,o){return i(v)||r(v)?(u[o]=v,u[o+f]=0,u):v!==0&&n(v)<e?(u[o]=v*a,u[o+f]=-52,u):(u[o]=v,u[o+f]=0,u)}return Ji=t,Ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ki,i3;function hc(){if(i3)return Ki;i3=1;var e=e3();function r(i){return e(i,[0,0],1,0)}return Ki=r,Ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qi,n3;function _c(){if(n3)return Qi;n3=1;var e=or(),r=hc(),i=e3();return e(r,"assign",i),Qi=r,Qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yi,a3;function se(){if(a3)return Yi;a3=1;var e=2146435072;return Yi=e,Yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zi,t3;function dc(){if(t3)return Zi;t3=1;var e=hr(),r=se(),i=Or();function n(a){var t=e(a);return t=(t&r)>>>20,t-i|0}return Zi=n,Zi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ji,u3;function $c(){if(u3)return ji;u3=1;var e=dc();return ji=e,ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zi,v3;function pc(){if(v3)return zi;v3=1;var e=ir(),r=fr(),i=Or(),n=uc(),a=vc(),t=oc(),v=B(),u=Xr(),f=Bi(),o=_c().assign,s=$c(),l=Wi(),_=fe(),d=2220446049250313e-31,h=2148532223,m=[0,0],c=[0,0];function p(y,L){var b,I;return L===0||y===0||v(y)||u(y)?y:(o(y,m,1,0),y=m[0],L+=m[1],L+=s(y),L<t?f(0,y):L>n?y<0?r:e:(L<=a?(L+=52,I=d):I=1,l.assign(y,c,1,0),b=c[0],b&=h,b|=L+i<<20,I*_(b,c[1])))}return zi=p,zi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xi,o3;function Br(){if(o3)return xi;o3=1;var e=pc();return xi=e,xi}/**
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
*/var rn,f3;function qc(){if(f3)return rn;f3=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return rn=e,rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var en,s3;function yc(){if(s3)return en;s3=1;var e=Br(),r=qc();function i(n,a,t){var v,u,f,o;return v=n-a,u=v*v,f=v-u*r(u),o=1-(a-v*f/(2-f)-n),e(o,t)}return en=i,en}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nn,l3;function Rc(){if(l3)return nn;l3=1;var e=B(),r=Ei(),i=fr(),n=ir(),a=yc(),t=.6931471803691238,v=19082149292705877e-26,u=1.4426950408889634,f=709.782712893384,o=-745.1332191019411,s=1/(1<<28),l=-s;function _(d){var h,m,c;return e(d)||d===n?d:d===i?0:d>f?n:d<o?0:d>l&&d<s?1+d:(d<0?c=r(u*d-.5):c=r(u*d+.5),h=d-c*t,m=c*v,a(h,m,c))}return nn=_,nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var an,c3;function nr(){if(c3)return an;c3=1;var e=Rc();return an=e,an}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tn,m3;function gc(){if(m3)return tn;m3=1;var e=Rr();function r(i){return e(i)===i}return tn=r,tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var un,h3;function Vr(){if(h3)return un;h3=1;var e=gc();return un=e,un}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vn,_3;function bc(){if(_3)return vn;_3=1;var e=Vr();function r(i){return e(i/2)}return vn=r,vn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var on,d3;function Lc(){if(d3)return on;d3=1;var e=bc();return on=e,on}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fn,$3;function Nc(){if($3)return fn;$3=1;var e=Lc();function r(i){return i>0?e(i-1):e(i+1)}return fn=r,fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sn,p3;function ln(){if(p3)return sn;p3=1;var e=Nc();return sn=e,sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cn,q3;function Ic(){if(q3)return cn;q3=1;var e=Wr(),r;return e===!0?r=0:r=1,cn=r,cn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mn,y3;function Mc(){if(y3)return mn;y3=1;var e=kr(),r=Dr(),i=Ic(),n=new r(1),a=new e(n.buffer);function t(v,u){return n[0]=v,a[i]=u>>>0,n[0]}return mn=t,mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hn,R3;function zr(){if(R3)return hn;R3=1;var e=Mc();return hn=e,hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _n,g3;function Ac(){if(g3)return _n;g3=1;function e(r){return r|0}return _n=e,_n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dn,b3;function L3(){if(b3)return dn;b3=1;var e=Ac();return dn=e,dn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $n,N3;function Ec(){if(N3)return $n;N3=1;var e=ln(),r=Bi(),i=fr(),n=ir();function a(t,v){return v===i?n:v===n?0:v>0?e(v)?t:0:e(v)?r(n,t):n}return $n=a,$n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pn,I3;function wc(){if(I3)return pn;I3=1;var e=Tr(),r=hr(),i=1072693247,n=1e300,a=1e-300;function t(v,u){var f,o;return o=r(v),f=o&e,f<=i?u<0?n*n:a*a:u>0?n*n:a*a}return pn=t,pn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qn,M3;function Sc(){if(M3)return qn;M3=1;var e=Z(),r=ir();function i(n,a){return n===-1?(n-n)/(n-n):n===1?1:e(n)<1==(a===r)?0:r}return qn=i,qn}/**
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
*/var yn,A3;function E3(){if(A3)return yn;A3=1;var e=20;return yn=e,yn}/**
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
*/var Rn,w3;function Pc(){if(w3)return Rn;w3=1;function e(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}return Rn=e,Rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gn,S3;function Fc(){if(S3)return gn;S3=1;var e=hr(),r=zr(),i=jr(),n=Or(),a=E3(),t=Pc(),v=1048575,u=1048576,f=1072693248,o=536870912,s=524288,l=9007199254740992,_=.9617966939259756,d=.9617967009544373,h=-7028461650952758e-24,m=[1,1.5],c=[0,.5849624872207642],p=[0,1350039202129749e-23];function y(L,b,I){var E,M,w,A,g,$,q,R,N,T,S,H,F,O,P,V,C,U,J,Q,G,D;return Q=0,I<u&&(b*=l,Q-=53,I=e(b)),Q+=(I>>a)-n|0,G=I&v|0,I=G|f|0,G<=235662?D=0:G<767610?D=1:(D=0,Q+=1,I-=u),b=i(b,I),R=m[D],U=b-R,J=1/(b+R),M=U*J,A=r(M,0),E=(I>>1|o)+s,E+=D<<18,$=i(0,E),q=b-($-R),g=J*(U-A*$-A*q),w=M*M,C=w*w*t(w),C+=g*(A+M),w=A*A,$=3+w+C,$=r($,0),q=C-($-3-w),U=A*$,J=g*$+q*M,T=U+J,T=r(T,0),S=J-(T-U),H=d*T,F=h*T+S*_+p[D],N=c[D],V=Q,O=H+F+N+V,O=r(O,0),P=F-(O-V-N-H),L[0]=O,L[1]=P,L}return gn=y,gn}/**
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
*/var bn,P3;function Oc(){if(P3)return bn;P3=1;function e(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}return bn=e,bn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ln,F3;function Tc(){if(F3)return Ln;F3=1;var e=zr(),r=Oc(),i=1.4426950408889634,n=1.4426950216293335,a=19259629911266175e-24;function t(v,u){var f,o,s,l,_,d;return s=u-1,l=s*s*r(s),_=n*s,d=s*a-l*i,o=_+d,o=e(o,0),f=d-(o-_),v[0]=o,v[1]=f,v}return Ln=t,Ln}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nn,O3;function Hc(){if(O3)return Nn;O3=1;var e=.6931471805599453;return Nn=e,Nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var In,T3;function H3(){if(T3)return In;T3=1;var e=1048575;return In=e,In}/**
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
*/var Mn,C3;function Cc(){if(C3)return Mn;C3=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return Mn=e,Mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var An,G3;function Gc(){if(G3)return An;G3=1;var e=hr(),r=jr(),i=zr(),n=L3(),a=Br(),t=Hc(),v=Or(),u=Tr(),f=H3(),o=E3(),s=Cc(),l=1048576,_=1071644672,d=.6931471824645996,h=-1904654299957768e-24;function m(c,p,y){var L,b,I,E,M,w,A,g,$,q,R;return q=c&u|0,R=(q>>o)-v|0,$=0,q>_&&($=c+(l>>R+1)>>>0,R=(($&u)>>o)-v|0,L=($&~(f>>R))>>>0,I=r(0,L),$=($&f|l)>>o-R>>>0,c<0&&($=-$),p-=I),I=y+p,I=i(I,0),M=I*d,w=(y-(I-p))*t+I*h,g=M+w,A=w-(g-M),I=g*g,b=g-I*s(I),E=g*b/(b-2)-(A+g*A),g=1-(E-g),c=e(g),c=n(c),c+=$<<o>>>0,c>>o<=0?g=a(g,$):g=r(g,c),g}return An=m,An}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var En,k3;function kc(){if(k3)return En;k3=1;var e=B(),r=ln(),i=Xr(),n=Vr(),a=Y(),t=Z(),v=Wi(),u=zr(),f=L3(),o=fr(),s=ir(),l=Tr(),_=Ec(),d=wc(),h=Sc(),m=Fc(),c=Tc(),p=Gc(),y=1072693247,L=1105199104,b=1139802112,I=1083179008,E=1072693248,M=1083231232,w=3230714880,A=31,g=1e300,$=1e-300,q=8008566259537294e-32,R=[0,0],N=[0,0];function T(S,H){var F,O,P,V,C,U,J,Q,G,D,k,tr,rr,X,K,ur;if(e(S)||e(H))return NaN;if(v.assign(H,R,1,0),U=R[0],J=R[1],J===0){if(H===0)return 1;if(H===1)return S;if(H===-1)return 1/S;if(H===.5)return a(S);if(H===-.5)return 1/a(S);if(H===2)return S*S;if(H===3)return S*S*S;if(H===4)return S*=S,S*S;if(i(H))return h(S,H)}if(v.assign(S,R,1,0),V=R[0],C=R[1],C===0){if(V===0)return _(S,H);if(S===1)return 1;if(S===-1&&r(H))return-1;if(i(S))return S===o?T(-0,-H):H<0?0:s}if(S<0&&n(H)===!1)return(S-S)/(S-S);if(P=t(S),F=V&l|0,O=U&l|0,Q=V>>>A|0,G=U>>>A|0,Q&&r(H)?Q=-1:Q=1,O>L){if(O>b)return d(S,H);if(F<y)return G===1?Q*g*g:Q*$*$;if(F>E)return G===0?Q*g*g:Q*$*$;rr=c(N,P)}else rr=m(N,P,F);if(D=u(H,0),tr=(H-D)*rr[0]+H*rr[1],k=D*rr[0],X=tr+k,v.assign(X,R,1,0),K=f(R[0]),ur=f(R[1]),K>=I){if((K-I|ur)!==0||tr+q>X-k)return Q*g*g}else if((K&l)>=M&&((K-w|ur)!==0||tr<=X-k))return Q*$*$;return X=p(K,k,tr),Q*X}return En=T,En}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wn,D3;function ar(){if(D3)return wn;D3=1;var e=kc();return wn=e,wn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sn,W3;function Jr(){if(W3)return Sn;W3=1;var e=2.718281828459045;return Sn=e,Sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pn,U3;function gr(){if(U3)return Pn;U3=1;var e=2220446049250313e-31;return Pn=e,Pn}/**
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
*/var Fn,X3;function Dc(){if(X3)return Fn;X3=1;function e(r){var i,n,a;return r===0?1/0:(r<0?i=-r:i=r,i<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),a=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,n=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),a=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),n/a)}return Fn=e,Fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var On,B3;function Wc(){if(B3)return On;B3=1;var e=B(),r=_r(),i=Y(),n=Z(),a=nr(),t=ar(),v=Jr(),u=gr(),f=Dc(),o=10.900511;function s(l,_){var d,h,m,c,p,y,L;return e(l)||e(_)?NaN:l<0||_<0?NaN:_===1?1/l:l===1?1/_:(L=l+_,L<u?(p=L/l,p/=_,p):L===l&&_<u?1/_:L===_&&l<u?1/l:(l<_&&(y=_,_=l,l=y),h=l+o-.5,m=_+o-.5,c=L+o-.5,p=f(l)*(f(_)/f(L)),d=l-.5-_,n(_*d)<c*100&&l>100?p*=a(d*r(-_/c)):p*=t(h/c,d),c>1e10?p*=t(h/c*(m/c),_):p*=t(h*m/(c*c),_),p*=i(v/m),p))}return On=s,On}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tn,V3;function le(){if(V3)return Tn;V3=1;var e=Wc();return Tn=e,Tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hn,J3;function Uc(){if(J3)return Hn;J3=1;var e=ir();function r(i){return i===0&&1/i===e}return Hn=r,Hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cn,K3;function Xc(){if(K3)return Cn;K3=1;var e=Uc();return Cn=e,Cn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gn,Q3;function Bc(){if(Q3)return Gn;Q3=1;var e=Xc(),r=B(),i=ir();function n(a,t){return r(a)||r(t)?NaN:a===i||t===i?i:a===t&&a===0?e(a)?a:t:a>t?a:t}return Gn=n,Gn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kn,Y3;function Cr(){if(Y3)return kn;Y3=1;var e=Bc();return kn=e,kn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dn,Z3;function Vc(){if(Z3)return Dn;Z3=1;var e=fr();function r(i){return i===0&&1/i===e}return Dn=r,Dn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wn,j3;function z3(){if(j3)return Wn;j3=1;var e=Vc();return Wn=e,Wn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Un,x3;function Jc(){if(x3)return Un;x3=1;var e=z3(),r=B(),i=fr();function n(a,t){return r(a)||r(t)?NaN:a===i||t===i?i:a===t&&a===0?e(a)?a:t:a<t?a:t}return Un=n,Un}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xn,rs;function Mr(){if(rs)return Xn;rs=1;var e=Jc();return Xn=e,Xn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bn,es;function Gr(){if(es)return Bn;es=1;var e=17976931348623157e292;return Bn=e,Bn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vn,is;function ns(){if(is)return Vn;is=1;var e=2147483647;return Vn=e,Vn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jn,as;function Kn(){if(as)return Jn;as=1;var e=1.5707963267948966;return Jn=e,Jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qn,ts;function Ar(){if(ts)return Qn;ts=1;var e=3.141592653589793;return Qn=e,Qn}/**
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
*/var Yn,us;function Kc(){if(us)return Yn;us=1;function e(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}return Yn=e,Yn}/**
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
*/var Zn,vs;function Qc(){if(vs)return Zn;vs=1;function e(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}return Zn=e,Zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var jn,os;function Yc(){if(os)return jn;os=1;var e=Kc(),r=Qc();function i(n,a){var t,v,u,f;return f=n*n,u=f*f,v=f*e(f),v+=u*u*r(f),t=.5*f,u=1-t,u+(1-u-t+(f*v-n*a))}return jn=i,jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zn,fs;function ss(){if(fs)return zn;fs=1;var e=Yc();return zn=e,zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xn,ls;function Zc(){if(ls)return xn;ls=1;var e=-.16666666666666632,r=.00833333333332249,i=-.0001984126982985795,n=27557313707070068e-22,a=-25050760253406863e-24,t=158969099521155e-24;function v(u,f){var o,s,l,_;return _=u*u,l=_*_,o=r+_*(i+_*n)+_*l*(a+_*t),s=_*u,f===0?u+s*(e+_*o):u-(_*(.5*f-s*o)-f-s*e)}return xn=v,xn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ra,cs;function ms(){if(cs)return ra;cs=1;var e=Zc();return ra=e,ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ea,hs;function jc(){if(hs)return ea;hs=1;var e=Wr(),r;return e===!0?r=0:r=1,ea=r,ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ia,_s;function zc(){if(_s)return ia;_s=1;var e=kr(),r=Dr(),i=jc(),n=new r(1),a=new e(n.buffer);function t(v){return n[0]=v,a[i]}return ia=t,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var na,ds;function xc(){if(ds)return na;ds=1;var e=zc();return na=e,na}/**
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
*/var aa,$s;function rm(){if($s)return aa;$s=1;function e(r,i){var n,a;for(n=[],a=0;a<i;a++)n.push(r);return n}return aa=e,aa}/**
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
*/var ta,ps;function em(){if(ps)return ta;ps=1;var e=rm();return ta=e,ta}/**
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
*/var ua,qs;function im(){if(qs)return ua;qs=1;var e=em();function r(i){return e(0,i)}return ua=r,ua}/**
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
*/var va,ys;function nm(){if(ys)return va;ys=1;var e=im();return va=e,va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var oa,Rs;function am(){if(Rs)return oa;Rs=1;var e=Rr(),r=Br(),i=nm(),n=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],a=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],t=16777216,v=5960464477539063e-23,u=i(20),f=i(20),o=i(20),s=i(20);function l(d,h,m,c,p,y,L,b,I){var E,M,w,A,g,$,q,R,N;for(A=y,N=c[m],R=m,g=0;R>0;g++)M=v*N|0,s[g]=N-t*M|0,N=c[R-1]+M,R-=1;if(N=r(N,p),N-=8*e(N*.125),q=N|0,N-=q,w=0,p>0?(g=s[m-1]>>24-p,q+=g,s[m-1]-=g<<24-p,w=s[m-1]>>23-p):p===0?w=s[m-1]>>23:N>=.5&&(w=2),w>0){for(q+=1,E=0,g=0;g<m;g++)R=s[g],E===0?R!==0&&(E=1,s[g]=16777216-R):s[g]=16777215-R;if(p>0)switch(p){case 1:s[m-1]&=8388607;break;case 2:s[m-1]&=4194303;break}w===2&&(N=1-N,E!==0&&(N-=r(1,p)))}if(N===0){for(R=0,g=m-1;g>=y;g--)R|=s[g];if(R===0){for($=1;s[y-$]===0;$++);for(g=m+1;g<=m+$;g++){for(I[b+g]=n[L+g],M=0,R=0;R<=b;R++)M+=d[R]*I[b+(g-R)];c[g]=M}return m+=$,l(d,h,m,c,p,y,L,b,I)}for(m-=1,p-=24;s[m]===0;)m-=1,p-=24}else N=r(N,-p),N>=t?(M=v*N|0,s[m]=N-t*M|0,m+=1,p+=24,s[m]=M):s[m]=N|0;for(M=r(1,p),g=m;g>=0;g--)c[g]=M*s[g],M*=v;for(g=m;g>=0;g--){for(M=0,$=0;$<=A&&$<=m-g;$++)M+=a[$]*c[g+$];o[m-g]=M}for(M=0,g=m;g>=0;g--)M+=o[g];for(w===0?h[0]=M:h[0]=-M,M=o[0]-M,g=1;g<=m;g++)M+=o[g];return w===0?h[1]=M:h[1]=-M,q&7}function _(d,h,m,c){var p,y,L,b,I,E,M,w,A;for(y=4,b=c-1,L=(m-3)/24|0,L<0&&(L=0),E=m-24*(L+1),w=L-b,A=b+y,M=0;M<=A;M++)w<0?u[M]=0:u[M]=n[w],w+=1;for(M=0;M<=y;M++){for(p=0,w=0;w<=b;w++)p+=d[w]*u[b+(M-w)];f[M]=p}return I=y,l(d,h,I,f,E,y,L,b,u)}return oa=_,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,gs;function tm(){if(gs)return fa;gs=1;var e=Math.round;return fa=e,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,bs;function Ls(){if(bs)return sa;bs=1;var e=tm();return sa=e,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var la,Ns;function um(){if(Ns)return la;Ns=1;var e=Ls(),r=hr(),i=.6366197723675814,n=1.5707963267341256,a=6077100506506192e-26,t=6077100506303966e-26,v=20222662487959506e-37,u=20222662487111665e-37,f=84784276603689e-45,o=2047;function s(l,_,d){var h,m,c,p,y,L,b;return m=e(l*i),p=l-m*n,y=m*a,b=_>>20|0,d[0]=p-y,h=r(d[0]),L=b-(h>>20&o),L>16&&(c=p,y=m*t,p=c-y,y=m*v-(c-p-y),d[0]=p-y,h=r(d[0]),L=b-(h>>20&o),L>49&&(c=p,y=m*u,p=c-y,y=m*f-(c-p-y),d[0]=p-y)),d[1]=p-d[0]-y,m}return la=s,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ca,Is;function vm(){if(Is)return ca;Is=1;var e=Tr(),r=se(),i=H3(),n=hr(),a=xc(),t=fe(),v=am(),u=um(),f=0,o=16777216,s=1.5707963267341256,l=6077100506506192e-26,_=2*l,d=3*l,h=4*l,m=598523,c=1072243195,p=1073928572,y=1074752122,L=1074977148,b=1075183036,I=1075388923,E=1075594811,M=1094263291,w=[0,0,0],A=[0,0];function g($,q){var R,N,T,S,H,F,O,P;if(T=n($)|0,S=T&e|0,S<=c)return q[0]=$,q[1]=0,0;if(S<=y)return(S&i)===m?u($,S,q):S<=p?T>0?(P=$-s,q[0]=P-l,q[1]=P-q[0]-l,1):(P=$+s,q[0]=P+l,q[1]=P-q[0]+l,-1):T>0?(P=$-2*s,q[0]=P-_,q[1]=P-q[0]-_,2):(P=$+2*s,q[0]=P+_,q[1]=P-q[0]+_,-2);if(S<=E)return S<=b?S===L?u($,S,q):T>0?(P=$-3*s,q[0]=P-d,q[1]=P-q[0]-d,3):(P=$+3*s,q[0]=P+d,q[1]=P-q[0]+d,-3):S===I?u($,S,q):T>0?(P=$-4*s,q[0]=P-h,q[1]=P-q[0]-h,4):(P=$+4*s,q[0]=P+h,q[1]=P-q[0]+h,-4);if(S<M)return u($,S,q);if(S>=r)return q[0]=NaN,q[1]=NaN,0;for(R=a($),N=(S>>20)-1046,P=t(S-(N<<20|0),R),F=0;F<2;F++)w[F]=P|0,P=(P-w[F])*o;for(w[2]=P,H=3;w[H-1]===f;)H-=1;return O=v(w,A,N,H,1),T<0?(q[0]=-A[0],q[1]=-A[1],-O):(q[0]=A[0],q[1]=A[1],O)}return ca=g,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ma,Ms;function As(){if(Ms)return ma;Ms=1;var e=vm();return ma=e,ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ha,Es;function om(){if(Es)return ha;Es=1;var e=Tr(),r=se(),i=hr(),n=ss(),a=ms(),t=As(),v=1072243195,u=1045430272,f=[0,0];function o(s){var l,_;if(l=i(s),l&=e,l<=v)return l<u?s:a(s,0);if(l>=r)return NaN;switch(_=t(s,f),_&3){case 0:return a(f[0],f[1]);case 1:return n(f[0],f[1]);case 2:return-a(f[0],f[1]);default:return-n(f[0],f[1])}}return ha=o,ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,ws;function xr(){if(ws)return _a;ws=1;var e=om();return _a=e,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,Ss;function ce(){if(Ss)return da;Ss=1;var e=2.5066282746310007;return da=e,da}/**
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
*/var $a,Ps;function fm(){if(Ps)return $a;Ps=1;function e(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}return $a=e,$a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pa,Fs;function sm(){if(Fs)return pa;Fs=1;var e=ce(),r=ar(),i=nr(),n=fm(),a=143.01608;function t(v){var u,f,o;return u=1/v,u=1+u*n(u),f=i(v),v>a?(o=r(v,.5*v-.25),f=o*(o/f)):f=r(v,v-.5)/f,e*f*u}return pa=t,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qa,Os;function lm(){if(Os)return qa;Os=1;var e=.5772156649015329;return qa=e,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ya,Ts;function cm(){if(Ts)return ya;Ts=1;var e=lm();function r(i,n){return n/((1+e*i)*i)}return ya=r,ya}/**
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
*/var Ra,Hs;function mm(){if(Hs)return Ra;Hs=1;function e(r){var i,n,a;return r===0?1:(r<0?i=-r:i=r,i<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),a=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,n=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),a=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),n/a)}return Ra=e,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ga,Cs;function hm(){if(Cs)return ga;Cs=1;var e=B(),r=Vr(),i=z3(),n=Z(),a=Rr(),t=xr(),v=ir(),u=fr(),f=Ar(),o=sm(),s=cm(),l=mm();function _(d){var h,m,c,p;if(r(d)&&d<0||d===u||e(d))return NaN;if(d===0)return i(d)?u:v;if(d>171.61447887182297)return v;if(d<-170.5674972726612)return 0;if(m=n(d),m>33)return d>=0?o(d):(c=a(m),(c&1)===0?h=-1:h=1,p=m-c,p>.5&&(c+=1,p=m-c),p=m*t(f*p),h*f/(n(p)*o(m)));for(p=1;d>=3;)d-=1,p*=d;for(;d<0;){if(d>-1e-9)return s(d,p);p/=d,d+=1}for(;d<2;){if(d<1e-9)return s(d,p);p/=d,d+=1}return d===2?p:(d-=2,p*l(d))}return ga=_,ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,Gs;function br(){if(Gs)return ba;Gs=1;var e=hm();return ba=e,ba}/**
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
*/var La,ks;function me(){if(ks)return La;ks=1;var e=170;return La=e,La}var _m=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Na,Ds;function dm(){if(Ds)return Na;Ds=1;var e=B(),r=Vr(),i=br(),n=ir(),a=me(),t=_m;function v(u){return e(u)?NaN:r(u)?u<0?NaN:u<=a?t[u]:n:i(u+1)}return Na=v,Na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,Ws;function Us(){if(Ws)return Ia;Ws=1;var e=dm();return Ia=e,Ia}/**
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
*/var Ma,Xs;function $m(){if(Xs)return Ma;Xs=1;function e(r){var i,n,a;return r===0?1/0:(r<0?i=-r:i=r,i<=1?(n=3847467039331777e-5+r*(3685766504351951e-5+r*(1588920245372942e-5+r*(4059208354298835e-6+r*(6805476611834733e-7+r*(7823975500312005e-8+r*(6246580776401795e-9+r*(341986.3488721347+r*(12287.194511824551+r*(261.61404416416684+r*2.5066282746310007))))))))),a=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,n=2.5066282746310007+r*(261.61404416416684+r*(12287.194511824551+r*(341986.3488721347+r*(6246580776401795e-9+r*(7823975500312005e-8+r*(6805476611834733e-7+r*(4059208354298835e-6+r*(1588920245372942e-5+r*(3685766504351951e-5+r*3847467039331777e-5))))))))),a=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),n/a)}return Ma=e,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Aa,Bs;function pm(){if(Bs)return Aa;Bs=1;var e=$m();return Aa=e,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,Vs;function qm(){if(Vs)return Ea;Vs=1;var e=pm();return Ea=e,Ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,Js;function re(){if(Js)return wa;Js=1;var e=10.900511;return wa=e,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Sa,Ks;function ym(){if(Ks)return Sa;Ks=1;var e=qm(),r=br(),i=_r(),n=Z(),a=nr(),t=ar(),v=gr(),u=Jr(),f=re(),o=me(),s=4269068009004705e289;function l(_,d){var h,m,c;return _<v?d>=o?(m=l(d,o-d),m*=_,m*=s,1/m):1/(_*r(_+d)):(c=_+f-.5,_+d===_?n(d/c)<v?h=a(-d):h=1:(n(d)<10?h=a((.5-_)*i(d/c)):h=t(c/(c+d),_-.5),h*=e(_)/e(_+d)),h*=t(u/(c+d),d),h)}return Sa=l,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pa,Qs;function Rm(){if(Qs)return Pa;Qs=1;var e=Z(),r=Rr(),i=br(),n=Us(),a=me(),t=ym();function v(u,f){var o,s,l;if(u<=0||u+f<=0)return i(u)/i(u+f);if(s=r(f),s===f){if(l=r(u),l===u&&u<=a&&u+f<=a)return n(l-1)/n(s+l-1);if(e(f)<20){if(f===0)return 1;if(f<0){for(u-=1,o=u,f+=1;f!==0;)u-=1,o*=u,f+=1;return o}for(o=1/u,f-=1;f!==0;)u+=1,o/=u,f-=1;return o}}return t(u,f)}return Pa=v,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,Ys;function Oa(){if(Ys)return Fa;Ys=1;var e=Rm();return Fa=e,Fa}/**
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
*/var Ta,Zs;function gm(){if(Zs)return Ta;Zs=1;function e(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}return Ta=e,Ta}/**
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
*/var Ha,js;function bm(){if(js)return Ha;js=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}return Ha=e,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ca,zs;function Lm(){if(zs)return Ca;zs=1;var e=hr(),r=jr(),i=B(),n=Or(),a=fr(),t=gm(),v=bm(),u=.6931471803691238,f=19082149292705877e-26,o=0x40000000000000,s=.3333333333333333,l=1048575,_=2146435072,d=1048576,h=1072693248;function m(c){var p,y,L,b,I,E,M,w,A,g,$,q;return c===0?a:i(c)||c<0?NaN:(y=e(c),I=0,y<d&&(I-=54,c*=o,y=e(c)),y>=_?c+c:(I+=(y>>20)-n|0,y&=l,w=y+614244&1048576|0,c=r(c,y|w^h),I+=w>>20|0,M=c-1,(l&2+y)<3?M===0?I===0?0:I*u+I*f:(E=M*M*(.5-s*M),I===0?M-E:I*u-(E-I*f-M)):(g=M/(2+M),q=g*g,w=y-398458|0,$=q*q,A=440401-y|0,b=$*t($),L=q*v($),w|=A,E=L+b,w>0?(p=.5*M*M,I===0?M-(p-g*(p+E)):I*u-(p-(g*(p+E)+I*f)-M)):I===0?M-g*(M-E):I*u-(g*(M-E)-I*f-M))))}return Ca=m,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ga,xs;function x(){if(xs)return Ga;xs=1;var e=Lm();return Ga=e,Ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ka,r6;function Nm(){if(r6)return ka;r6=1;var e=hr(),r=ss(),i=ms(),n=As(),a=Tr(),t=se(),v=[0,0],u=1072243195,f=1044381696;function o(s){var l,_;if(l=e(s),l&=a,l<=u)return l<f?1:r(s,0);if(l>=t)return NaN;switch(_=n(s,v),_&3){case 0:return r(v[0],v[1]);case 1:return-i(v[0],v[1]);case 2:return-r(v[0],v[1]);default:return i(v[0],v[1])}}return ka=o,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,e6;function Wa(){if(e6)return Da;e6=1;var e=Nm();return Da=e,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,i6;function Im(){if(i6)return Ua;i6=1;var e=B(),r=Xr(),i=Wa(),n=xr(),a=Z(),t=Bi(),v=Ar();function u(f){var o,s;return e(f)?NaN:r(f)?NaN:(s=f%2,o=a(s),o===0||o===1?t(0,s):o<.25?n(v*s):o<.75?(o=.5-o,t(i(v*o),s)):o<1.25?(s=t(1,s)-s,n(v*s)):o<1.75?(o-=1.5,-t(i(v*o),s)):(s-=t(2,s),n(v*s)))}return Ua=u,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,n6;function Mm(){if(n6)return Xa;n6=1;var e=Im();return Xa=e,Xa}/**
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
*/var Ba,a6;function Am(){if(a6)return Ba;a6=1;function e(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}return Ba=e,Ba}/**
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
*/var Va,t6;function Em(){if(t6)return Va;t6=1;function e(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}return Va=e,Va}/**
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
*/var Ja,u6;function wm(){if(u6)return Ja;u6=1;function e(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}return Ja=e,Ja}/**
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
*/var Ka,v6;function Sm(){if(v6)return Ka;v6=1;function e(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}return Ka=e,Ka}/**
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
*/var Qa,o6;function Pm(){if(o6)return Qa;o6=1;function e(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}return Qa=e,Qa}/**
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
*/var Ya,f6;function Fm(){if(f6)return Ya;f6=1;function e(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}return Ya=e,Ya}/**
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
*/var Za,s6;function Om(){if(s6)return Za;s6=1;function e(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}return Za=e,Za}/**
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
*/var ja,l6;function Tm(){if(l6)return ja;l6=1;function e(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}return ja=e,ja}/**
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
*/var za,c6;function Hm(){if(c6)return za;c6=1;function e(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}return za=e,za}/**
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
*/var xa,m6;function Cm(){if(m6)return xa;m6=1;function e(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}return xa=e,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var rt,h6;function Gm(){if(h6)return rt;h6=1;var e=B(),r=Xr(),i=Z(),n=x(),a=Ei(),t=Mm(),v=Ar(),u=ir(),f=Am(),o=Em(),s=wm(),l=Sm(),_=Pm(),d=Fm(),h=Om(),m=Tm(),c=Hm(),p=Cm(),y=.07721566490153287,L=.3224670334241136,b=1,I=-.07721566490153287,E=.48383612272381005,M=-.1475877229945939,w=.06462494023913339,A=-.07721566490153287,g=1,$=.4189385332046727,q=1.4616321449683622,R=4503599627370496,N=72057594037927940,T=13877787807814457e-33,S=1.4616321449683622,H=-.12148629053584961,F=-3638676997039505e-33;function O(P){var V,C,U,J,Q,G,D,k,tr,rr,X,K,ur;if(e(P)||r(P))return P;if(P===0)return u;if(P<0?(V=!0,P=-P):V=!1,P<T)return-n(P);if(V){if(P>=R||(tr=t(P),tr===0))return u;C=n(v/i(tr*P))}if(P===1||P===2)return 0;if(P<2)switch(P<=.9?(ur=-n(P),P>=q-1+.27?(X=1-P,U=0):P>=q-1-.27?(X=P-(S-1),U=1):(X=P,U=2)):(ur=0,P>=q+.27?(X=2-P,U=0):P>=q-.27?(X=P-S,U=1):(X=P-1,U=2)),U){case 0:K=X*X,G=y+K*f(K),Q=K*(L+K*o(K)),D=X*G+Q,ur+=D-.5*X;break;case 1:K=X*X,rr=K*X,G=E+rr*_(rr),Q=M+rr*d(rr),J=w+rr*h(rr),D=K*G-(F-rr*(Q+X*J)),ur+=H+D;break;case 2:G=X*(A+X*m(X)),Q=g+X*c(X),ur+=-.5*X+G/Q;break}else if(P<8)switch(U=a(P),X=P-U,D=X*(I+X*l(X)),k=b+X*s(X),ur=.5*X+D/k,K=1,U){case 7:K*=X+6;case 6:K*=X+5;case 5:K*=X+4;case 4:K*=X+3;case 3:K*=X+2,ur+=n(K)}else P<N?(tr=n(P),K=1/P,X=K*K,rr=$+K*p(X),ur=(P-.5)*(tr-1)+rr):ur=P*(n(P)-1);return V&&(ur=C-ur),ur}return rt=O,rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var et,_6;function Kr(){if(_6)return et;_6=1;var e=Gm();return et=e,et}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var it,d6;function Er(){if(d6)return it;d6=1;var e=709.782712893384;return it=e,it}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nt,$6;function km(){if($6)return nt;$6=1;var e=14901161193847656e-24;return nt=e,nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var at,p6;function Dm(){if(p6)return at;p6=1;var e=eval;return at=e,at}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tt,q6;function Wm(){if(q6)return tt;q6=1;var e=Dm();function r(){var i;try{e('"use strict"; (function* () {})'),i=!0}catch{i=!1}return i}return tt=r,tt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ut,y6;function R6(){if(y6)return ut;y6=1;var e=Wm();return ut=e,ut}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vt,g6;function Um(){if(g6)return vt;g6=1;var e=Z(),r=gr(),i=1e6;function n(a,t){var v,u,f,o,s,l;if(l={},arguments.length>1&&(l=t),u=l.tolerance||r,o=l.maxTerms||i,s=l.initialValue||0,v=typeof a.next=="function",v===!0){for(f of a)if(s+=f,e(u*s)>=e(f)||--o===0)break}else do f=a(),s+=f;while(e(u*s)<e(f)&&--o);return s}return vt=n,vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ot,b6;function Xm(){if(b6)return ot;b6=1;var e=Z(),r=gr(),i=1e6;function n(a,t){var v,u,f,o,s;s={},arguments.length>1&&(s=t),v=s.tolerance||r,f=s.maxTerms||i,o=s.initialValue||0;do u=a(),o+=u;while(e(v*o)<e(u)&&--f);return o}return ot=n,ot}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ft,L6;function ee(){if(L6)return ft;L6=1;var e=R6(),r=Um(),i=Xm(),n;return e()?n=r:n=i,ft=n,ft}/**
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
*/var st,N6;function Bm(){if(N6)return st;N6=1;function e(r,i){var n=1,a=r,t=i;return v;function v(){var u=n;return n*=a/t,a-=1,u}}return st=e,st}/**
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
*/var lt,I6;function Vm(){if(I6)return lt;I6=1;var e=ee(),r=Bm();function i(n,a){var t,v;return v=r(n,a),t=e(v),t}return lt=i,lt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ct,M6;function Jm(){if(M6)return ct;M6=1;var e=nr();function r(i,n){var a,t,v,u;if(v=e(-n),t=v,t!==0)for(a=t,u=1;u<i;++u)a/=u,a*=n,t+=a;return t}return ct=r,ct}/**
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
*/var mt,A6;function Km(){if(A6)return mt;A6=1;function e(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}return mt=e,mt}/**
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
*/var ht,E6;function Qm(){if(E6)return ht;E6=1;function e(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}return ht=e,ht}/**
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
*/var _t,w6;function Ym(){if(w6)return _t;w6=1;function e(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}return _t=e,_t}/**
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
*/var dt,S6;function Zm(){if(S6)return dt;S6=1;function e(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}return dt=e,dt}/**
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
*/var $t,P6;function jm(){if(P6)return $t;P6=1;function e(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}return $t=e,$t}/**
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
*/var pt,F6;function zm(){if(F6)return pt;F6=1;function e(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}return pt=e,pt}/**
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
*/var qt,O6;function xm(){if(O6)return qt;O6=1;function e(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}return qt=e,qt}/**
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
*/var yt,T6;function rh(){if(T6)return yt;T6=1;function e(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}return yt=e,yt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Rt,H6;function eh(){if(H6)return Rt;H6=1;var e=B(),r=nr(),i=zr(),n=ir(),a=fr(),t=Km(),v=Qm(),u=Ym(),f=Zm(),o=jm(),s=zm(),l=xm(),_=rh(),d=1e-300,h=13877787807814457e-33,m=.8450629115104675,c=.12837916709551256,p=1,y=-.0023621185607526594,L=1,b=-.009864944034847148,I=1,E=-.0098649429247001,M=1;function w(A){var g,$,q,R,N,T,S,H;if(e(A))return NaN;if(A===n)return 0;if(A===a)return 2;if(A===0)return 1;if(A<0?(g=!0,$=-A):(g=!1,$=A),$<.84375)return $<h?1-A:(q=A*A,R=c+q*t(q),N=p+q*v(q),T=R/N,A<.25?1-(A+A*T):(R=A*T,R+=A-.5,.5-R));if($<1.25)return N=$-1,S=y+N*u(N),H=L+N*f(N),g?1+m+S/H:1-m-S/H;if($<28){if(N=1/($*$),$<2.857142857142857)R=b+N*o(N),N=I+N*s(N);else{if(A<-6)return 2-d;R=E+N*l(N),N=M+N*_(N)}return q=i($,0),R=r(-(q*q)-.5625)*r((q-$)*(q+$)+R/N),g?2-R/$:R/$}return g?2-d:d*d}return Rt=w,Rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gt,C6;function he(){if(C6)return gt;C6=1;var e=eh();return gt=e,gt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bt,G6;function ih(){if(G6)return bt;G6=1;var e=he(),r=Y(),i=nr(),n=Ar();function a(t,v){var u,f,o,s,l;if(s=e(r(v)),s!==0&&t>1){for(f=i(-v)/r(n*v),f*=v,u=.5,f/=u,o=f,l=2;l<t;++l)f/=l-u,f*=v,o+=f;s+=o}return s}return bt=a,bt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lt,k6;function Qr(){if(k6)return Lt;k6=1;var e=-708.3964185322641;return Lt=e,Lt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Nt,D6;function nh(){if(D6)return Nt;D6=1;var e=nr(),r=ar(),i=x(),n=Er(),a=Qr();function t(v,u){var f,o;return o=v*i(u),u>=1?o<n&&-u>a?f=r(u,v)*e(-u):v>=1?f=r(u/e(u/v),v):f=e(o-u):o>a?f=r(u,v)*e(-u):u/v<n?f=r(u/e(u/v),v):f=e(o-u),f}return Nt=t,Nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var It,W6;function U6(){if(W6)return It;W6=1;function e(r,i){var n,a;if(a=r.length,a<2||i===0)return a===0?0:r[0];for(a-=1,n=r[a]*i+r[a-1],a-=2;a>=0;)n=n*i+r[a],a-=1;return n}return It=e,It}/**
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
*/var Mt,X6;function ah(){if(X6)return Mt;X6=1;var e=Function;return Mt=e,Mt}/**
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
*/var At,B6;function th(){if(B6)return At;B6=1;var e=ah();return At=e,At}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Et,V6;function uh(){if(V6)return Et;V6=1;var e=th(),r=U6();function i(n){var a,t,v,u;if(n.length>500)return f;if(a="return function evalpoly(x){",t=n.length,t===0)a+="return 0.0;";else if(t===1)a+="return "+n[0]+";";else{for(a+="if(x===0.0){return "+n[0]+";}",a+="return "+n[0],v=t-1,u=1;u<t;u++)a+="+x*",u<v&&(a+="("),a+=n[u];for(u=0;u<v-1;u++)a+=")";a+=";"}return a+="}",a+="//# sourceURL=evalpoly.factory.js",new e(a)();function f(o){return r(n,o)}}return Et=i,Et}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wt,J6;function wr(){if(J6)return wt;J6=1;var e=or(),r=U6(),i=uh();return e(r,"factory",i),wt=r,wt}/**
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
*/var St,K6;function vh(){if(K6)return St;K6=1;function e(r){var i=-r,n=-1,a=0;return t;function t(){return n*=i,a+=1,n/a}}return St=e,St}/**
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
*/var Pt,Q6;function oh(){if(Q6)return Pt;Q6=1;var e=Z(),r=x(),i=gr(),n=ee(),a=vh();function t(v){var u,f;return v<=-1?NaN:(f=e(v),f>.95?r(1+v)-v:f<i?-v*v/2:(u={initialValue:-v},n(a(v),u)))}return Pt=t,Pt}/**
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
*/var Ft,Y6;function Z6(){if(Y6)return Ft;Y6=1;var e=oh();return Ft=e,Ft}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ot,j6;function _e(){if(j6)return Ot;j6=1;var e=6.283185307179586;return Ot=e,Ot}/**
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
*/var Tt,z6;function fh(){if(z6)return Tt;z6=1;function e(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}return Tt=e,Tt}/**
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
*/var Ht,x6;function sh(){if(x6)return Ht;x6=1;function e(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}return Ht=e,Ht}/**
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
*/var Ct,rl;function lh(){if(rl)return Ct;rl=1;function e(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}return Ct=e,Ct}/**
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
*/var Gt,el;function ch(){if(el)return Gt;el=1;function e(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}return Gt=e,Gt}/**
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
*/var kt,il;function mh(){if(il)return kt;il=1;function e(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}return kt=e,kt}/**
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
*/var Dt,nl;function hh(){if(nl)return Dt;nl=1;function e(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}return Dt=e,Dt}/**
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
*/var Wt,al;function _h(){if(al)return Wt;al=1;function e(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}return Wt=e,Wt}/**
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
*/var Ut,tl;function dh(){if(tl)return Ut;tl=1;function e(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}return Ut=e,Ut}/**
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
*/var Xt,ul;function $h(){if(ul)return Xt;ul=1;function e(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}return Xt=e,Xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bt,vl;function ph(){if(vl)return Bt;vl=1;var e=wr(),r=Z6(),i=he(),n=Y(),a=nr(),t=_e(),v=fh(),u=sh(),f=lh(),o=ch(),s=mh(),l=hh(),_=_h(),d=dh(),h=$h(),m=[0,0,0,0,0,0,0,0,0,0];function c(p,y){var L,b,I,E,M;return b=(y-p)/p,I=-r(b),E=p*I,M=n(2*I),y<p&&(M=-M),m[0]=v(M),m[1]=u(M),m[2]=f(M),m[3]=o(M),m[4]=s(M),m[5]=l(M),m[6]=_(M),m[7]=d(M),m[8]=h(M),m[9]=-.0005967612901927463,L=e(m,1/p),L*=a(-E)/n(t*p),y<p&&(L=-L),L+=i(n(E))/2,L}return Bt=c,Bt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Vt,ol;function qh(){if(ol)return Vt;ol=1;function e(r,i){var n=1,a=r,t=i;return v;function v(){var u=n;return a+=1,n*=t/a,u}}return Vt=e,Vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Jt,fl;function sl(){if(fl)return Jt;fl=1;var e=ee(),r=qh();function i(n,a,t){var v,u;return t=t||0,u=r(n,a),v=e(u,{initialValue:t}),v}return Jt=i,Jt}/**
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
*/var Kt,ll;function yh(){if(ll)return Kt;ll=1;function e(r){var i,n,a;return r===0?1/0:(r<0?i=-r:i=r,i<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),a=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,n=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),a=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),n/a)}return Kt=e,Kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qt,cl;function Rh(){if(cl)return Qt;cl=1;var e=yh();return Qt=e,Qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yt,ml;function de(){if(ml)return Yt;ml=1;var e=Rh();return Yt=e,Yt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zt,hl;function gh(){if(hl)return Zt;hl=1;var e=de(),r=Kr(),i=br(),n=Z6(),a=Y(),t=Z(),v=nr(),u=ar(),f=Cr(),o=Mr(),s=x(),l=Gr(),_=Er(),d=Qr(),h=re(),m=Jr();function c(p,y){var L,b,I,E,M,w,A;return I=p+h-.5,A=(y-p-h+.5)/I,p<1?y<=d||p<1/l?v(p*s(y)-y-r(p)):u(y,p)*v(-y)/i(p):(t(A*A*p)<=100&&p>150?(L=p*n(A)+y*(.5-h)/I,L=v(L)):(E=p*s(y/I),M=p-y,o(E,M)<=d||f(E,M)>=_?(b=M/p,o(E,M)/2>d&&f(E,M)/2<_?(w=u(y/I,p/2)*v(M/2),L=w*w):o(E,M)/4>d&&f(E,M)/4<_&&y>p?(w=u(y/I,p/4)*v(M/4),L=w*w,L*=L):b>d&&b<_?L=u(y*v(b)/I,p):L=v(E+M)):L=u(y/I,p)*v(M)),L*=a(I/m)/e(p),L)}return Zt=c,Zt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var jt,_l;function bh(){if(_l)return jt;_l=1;var e=B(),r=Xr(),i=Z(),n=Ur(),a=x(),t=ar(),v=Ei();function u(f,o){var s,l;if(e(f)||e(o))return NaN;if(o===0)return 0;if(f===0)return-1;if(f<0&&o%2===0&&(f=-f),f>0){if((i(o*(f-1))<.5||i(o)<.2)&&(l=a(f)*o,l<.5))return n(l)}else if(v(o)!==o)return NaN;return s=t(f,o)-1,r(s)||e(s)?NaN:s}return jt=u,jt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zt,dl;function Lh(){if(dl)return zt;dl=1;var e=bh();return zt=e,zt}/**
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
*/var xt,$l;function Nh(){if($l)return xt;$l=1;function e(r){var i,n,a;return r===0?-.01803556856784494:(r<0?i=-r:i=r,i<=1?(n=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),a=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,n=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),a=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),n/a)}return xt=e,xt}/**
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
*/var r1,pl;function Ih(){if(pl)return r1;pl=1;function e(r){var i,n,a;return r===0?.04906224540690395:(r<0?i=-r:i=r,i<=1?(n=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),a=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,n=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),a=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),n/a)}return r1=e,r1}/**
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
*/var e1,ql;function Mh(){if(ql)return e1;ql=1;function e(r){var i,n,a;return r===0?-.029232972183027003:(r<0?i=-r:i=r,i<=1?(n=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),a=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,n=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),a=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),n/a)}return e1=e,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var i1,yl;function Ah(){if(yl)return i1;yl=1;var e=x(),r=gr(),i=Nh(),n=Ih(),a=Mh(),t=.15896368026733398,v=.5281534194946289,u=.45201730728149414;function f(o,s,l){var _,d,h,m;if(o<r)return-e(o);if(s===0||l===0)return 0;if(d=0,o>2){if(o>=3){do o-=1,l-=1,d+=e(o);while(o>=3);l=o-2}return h=l*(o+1),m=i(l),d+=h*t+h*m,d}return o<1&&(d+=-e(o),l=s,s=o,o+=1),o<=1.5?(h=n(s),_=s*l,d+=_*v+_*h,d):(h=l*s,m=a(-l),d+=h*u+h*m,d)}return i1=f,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var n1,Rl;function Eh(){if(Rl)return n1;Rl=1;var e=br(),r=Ur(),i=_r(),n=B(),a=Ah();function t(v){return n(v)?NaN:v<0?v<-.5?e(1+v)-1:r(-i(v)+a(v+2,v+1,v)):v<2?r(a(v+1,v,v-1)):e(1+v)-1}return n1=t,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,gl;function wh(){if(gl)return a1;gl=1;var e=Eh();return a1=e,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var t1,bl;function Sh(){if(bl)return t1;bl=1;function e(r,i){var n,a,t,v;return n=-i,i=-i,a=r+1,t=1,u;function u(){return v=n/a,n*=i,t+=1,n/=t,a+=1,v}}return t1=e,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var u1,Ll;function Ph(){if(Ll)return u1;Ll=1;var e=Lh(),r=ee(),i=wh(),n=Sh();function a(t,v,u){var f,o,s,l,_;return o=i(t),s=(o+1)/t,l=e(v,t),o-=l,o/=t,_=n(t,v),l+=1,f=u?s:0,o=-l*r(_,{initialValue:(f-o)/l}),u&&(o=-o),[o,s]}return u1=a,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,Nl;function $e(){if(Nl)return v1;Nl=1;var e=11754943508222875e-54;return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,Il;function Fh(){if(Il)return o1;Il=1;var e=Z(),r=$e(),i=gr(),n=1e6;function a(u,f,o){var s,l,_,d,h,m,c;if(s=typeof u.next=="function",c=s?u.next().value:u(),d=c[1],_=c[0],d===0&&(d=r),h=d,m=0,s===!0)do c=u.next().value,c&&(m=c[1]+c[0]*m,m===0&&(m=r),h=c[1]+c[0]/h,h===0&&(h=r),m=1/m,l=h*m,d*=l);while(e(l-1)>f&&--o);else do c=u(),c&&(m=c[1]+c[0]*m,m===0&&(m=r),h=c[1]+c[0]/h,h===0&&(h=r),m=1/m,l=h*m,d*=l);while(c&&e(l-1)>f&&--o);return _/d}function t(u,f,o){var s,l,_,d,h,m;if(s=typeof u.next=="function",m=s?u.next().value:u(),_=m[1],_===0&&(_=r),d=_,h=0,s===!0)do m=u.next().value,m&&(h=m[1]+m[0]*h,h===0&&(h=r),d=m[1]+m[0]/d,d===0&&(d=r),h=1/h,l=d*h,_*=l);while(m&&e(l-1)>f&&--o);else do m=u(),m&&(h=m[1]+m[0]*h,h===0&&(h=r),d=m[1]+m[0]/d,d===0&&(d=r),h=1/h,l=d*h,_*=l);while(m&&e(l-1)>f&&--o);return _}function v(u,f){var o,s,l;return s={},arguments.length>1&&(s=f),o=s.maxIter||n,l=s.tolerance||i,s.keep?t(u,l,o):a(u,l,o)}return o1=v,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,Ml;function Oh(){if(Ml)return f1;Ml=1;var e=Z(),r=gr(),i=$e(),n=1e6;function a(u,f,o){var s,l,_,d,h,m;m=u(),h=m[1],l=m[0],h===0&&(h=i),_=h,d=0;do m=u(),m&&(d=m[1]+m[0]*d,d===0&&(d=i),_=m[1]+m[0]/_,_===0&&(_=i),d=1/d,s=_*d,h*=s);while(m&&e(s-1)>f&&--o);return l/h}function t(u,f,o){var s,l,_,d,h;h=u(),d=h[1],d===0&&(d=i),l=d,_=0;do h=u(),h&&(_=h[1]+h[0]*_,_===0&&(_=i),l=h[1]+h[0]/l,l===0&&(l=i),_=1/_,s=l*_,d*=s);while(h&&e(s-1)>f&&--o);return d}function v(u,f){var o,s,l;return s={},arguments.length>1&&(s=f),l=s.tolerance||r,o=s.maxIter||n,s.keep?t(u,l,o):a(u,l,o)}return f1=v,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,Al;function El(){if(Al)return s1;Al=1;var e=R6(),r=Fh(),i=Oh(),n;return e()?n=r:n=i,s1=n,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var l1,wl;function Th(){if(wl)return l1;wl=1;function e(r,i){var n=i-r+1,a=r,t=0;return v;function v(){return t+=1,n+=2,[t*(a-t),n]}}return l1=e,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var c1,Sl;function Pl(){if(Sl)return c1;Sl=1;var e=El(),r=Th();function i(n,a){var t=r(n,a);return 1/(a-n+1+e(t))}return c1=i,c1}/**
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
*/var m1,Fl;function Hh(){if(Fl)return m1;Fl=1;var e=Rr(),r=br(),i=Z(),n=ar(),a=x(),t=km(),v=Gr(),u=Er(),f=Vm(),o=Jm(),s=ih(),l=nh(),_=ph(),d=sl(),h=gh(),m=Ph(),c=Pl();function p(y,L,b,I){var E,M,w,A,g,$,q,R,N,T,S,H,F,O;switch(q=0,R=I,$=L<30&&L<=y+1&&y<u,$?(F=e(L),N=F===L,w=N?!1:i(F-L)===.5):(N=!1,w=!1),N&&y>.6?(R=!R,M=0):w&&y>.2?(R=!R,M=1):y<t&&L>1?M=6:y>1e3&&(L<y||i(L-50)/y<1)?(R=!R,M=7):y<.5?-.4/a(y)<L?M=2:M=3:y<1.1?y*.75<L?M=2:M=3:(g=!1,b&&L>20&&(T=i((y-L)/L),L>200?20/L>T*T&&(g=!0):T<.4&&(g=!0)),g?M=5:y-1/(3*y)<L?M=2:(M=4,R=!R)),M){case 0:q=o(L,y),b===!1&&(q*=r(L));break;case 1:q=s(L,y),b===!1&&(q*=r(L));break;case 2:q=b?h(L,y):l(L,y),q!==0&&(A=0,E=!1,R&&(A=b?1:r(L),b||q>=1||v*q>A?(A/=q,b||L<1||v/L>A?(A*=-L,E=!0):A=0):A=0),q*=d(L,y,A)/L,E&&(R=!1,q=-q));break;case 3:R=!R,S=m(L,y,R),q=S[0],O=S[1],R=!1,b&&(q/=O);break;case 4:q=b?h(L,y):l(L,y),q!==0&&(q*=c(L,y));break;case 5:q=_(L,y),y>=L&&(R=!R);break;case 6:q=b?n(y,L)/r(L+1):n(y,L)/L,q*=1-L*y/(L+1);break;case 7:q=b?h(L,y):l(L,y),q/=y,q!==0&&(q*=f(L,y));break}return b&&q>1&&(q=1),R&&(H=b?1:r(L),q=H-q),q}return m1=p,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var h1,Ol;function Ch(){if(Ol)return h1;Ol=1;var e=Kr(),r=nr(),i=x(),n=ce(),a=Er(),t=ir(),v=me(),u=Hh(),f=sl(),o=Pl();function s(l,_,d,h){var m,c,p,y;return l<0||_<=0?NaN:(m=d===void 0?!0:d,p=h,_>=v&&!m?(p&&_*4<l?(y=_*i(l)-l,y+=i(o(_,l))):!p&&_>4*l?(y=_*i(l)-l,c=0,y+=i(f(_,l,c)/_)):(y=u(l,_,!0,p),y===0?p?(y=1+1/(12*_)+1/(288*_*_),y=i(y)-_+(_-.5)*i(_),y+=i(n)):(y=_*i(l)-l,c=0,y+=i(f(_,l,c)/_)):y=i(y)+e(_)),y>a?t:r(y)):u(l,_,m,p))}return h1=s,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,Tl;function Hl(){if(Tl)return _1;Tl=1;var e=Ch();return _1=e,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var d1,Cl;function Gh(){if(Cl)return d1;Cl=1;var e=nr(),r=ar(),i=x(),n=Er(),a=Qr();function t(v,u){var f,o;return o=v*i(u),u>=1?o<n&&-u>a?f=r(u,v)*e(-u):v>=1?f=r(u/e(u/v),v):f=e(o-u):o>a?f=r(u,v)*e(-u):u/v<n?f=r(u/e(u/v),v):f=e(o-u),f}return d1=t,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $1,Gl;function kh(){if(Gl)return $1;Gl=1;var e=de(),r=Kr(),i=br(),n=_r(),a=Y(),t=Z(),v=nr(),u=ar(),f=Cr(),o=Mr(),s=x(),l=Er(),_=Qr(),d=re(),h=Jr();function m(c,p){var y,L,b,I,E,M,w;return b=c+d-.5,w=(p-c-d+.5)/b,c<1?p<=_?v(c*s(p)-p-r(c)):u(p,c)*v(-p)/i(c):(t(w*w*c)<=100&&c>150?(y=c*(n(w)-w)+p*(.5-d)/b,y=v(y)):(I=c*s(p/b),E=c-p,o(I,E)<=_||f(I,E)>=l?(L=E/c,o(I,E)/2>_&&f(I,E)/2<l?(M=u(p/b,c/2)*v(E/2),y=M*M):o(I,E)/4>_&&f(I,E)/4<l&&p>c?(M=u(p/b,c/4)*v(E/4),y=M*M,y*=y):L>_&&L<l?y=u(p*v(L)/b,c):y=v(I+E)):y=u(p/b,c)*v(E)),y*=a(b/h)/e(c),y)}return $1=m,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var p1,kl;function Dh(){if(kl)return p1;kl=1;var e=Oa(),r=Us(),i=Hl(),n=_r(),a=Z(),t=ar(),v=x(),u=Hr(),f=gr(),o=Gh(),s=kh(),l=new Array(30);function _(d,h,m,c,p,y,L){var b,I,E,M,w,A,g,$,q,R,N,T,S,H,F,O,P,V;if(A=h-1,P=d+A/2,c<.35?R=n(-c):R=v(m),V=-P*R,T=s(h,V),T<=u)return p;for(L?(b=T/e(d,h),b/=t(P,h)):b=o(h,V)/t(P,h),b*=y,l[0]=1,S=i(V,h,!0,!0),S/=T,M=p+b*S,E=1,g=R/2,g*=g,$=1,N=4*P*P,w=h,F=1;F<l.length;++F){for(E+=2,l[F]=0,q=h-F,I=3,H=1;H<F;++H)q=H*h-F,l[F]+=q*l[F-H]/r(I),I+=2;if(l[F]/=F,l[F]+=A/r(E),S=(w*(w+1)*S+(V+w+1)*$)/N,$*=g,w+=2,O=b*l[F]*S,M+=O,O>1){if(a(O)<a(f*M))break}else if(a(O/f)<a(M))break}return M}return p1=_,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var q1,Dl;function Wh(){if(Dl)return q1;Dl=1;function e(r,i,n){var a,t;if(n===0)return 1;for(a=1,t=0;t<n;t++)a*=(r+t)/(i+t);return a}return q1=e,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,Wl;function Uh(){if(Wl)return y1;Wl=1;var e=Z(),r=Cr();function i(n,a){return r(e(n),e(a))}return y1=i,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1,Ul;function Xh(){if(Ul)return R1;Ul=1;var e=Uh();return R1=e,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,Xl;function Bh(){if(Xl)return g1;Xl=1;var e=Z(),r=Mr();function i(n,a){return r(e(n),e(a))}return g1=i,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,Bl;function Vh(){if(Bl)return b1;Bl=1;var e=Bh();return b1=e,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var L1,Vl;function N1(){if(Vl)return L1;Vl=1;var e=de(),r=Xh(),i=Vh(),n=Ur(),a=_r(),t=Y(),v=Z(),u=nr(),f=ar(),o=Mr(),s=x(),l=Er(),_=Qr(),d=re(),h=Jr();function m(c,p,y,L,b){var I,E,M,w,A,g,$,q,R,N,T,S,H,F;if(!b)return f(y,c)*f(L,p);if(H=c+p,w=c+d-.5,A=p+d-.5,g=H+d-.5,I=e(H),I/=e(c)*e(p),I*=t(A/h),I*=t(w/g),$=(y*p-L*w)/w,q=(L*c-y*A)/A,i($,q)<.2)if($*q>0||o(c,p)<1)v($)<.1?I*=u(c*a($)):I*=f(y*g/w,c),v(q)<.1?I*=u(p*a(q)):I*=f(L*g/A,p);else if(r($,q)<.5)E=c<p,M=p/c,E&&M*q<.1||!E&&$/M>.1?(R=n(M*a(q)),R=$+R+R*$,R=c*a(R),I*=u(R)):(R=n(a($)/M),R=q+R+R*q,R=p*a(R),I*=u(R));else if(v($)<v(q))if(F=c*a($)+p*s(L*g/A),F<=_||F>=l){if(F+=s(I),F>=l)return NaN;I=u(F)}else I*=u(F);else if(F=p*a(q)+c*s(y*g/w),F<=_||F>=l){if(F+=s(I),F>=l)return NaN;I=u(F)}else I*=u(F);else if(T=y*g/w,S=L*g/A,$=c*s(T),q=p*s(S),$>=l||$<=_||q>=l||q<=_)if(c<p)if(N=f(S,p/c),R=c*(s(T)+s(N)),R<l&&R>_)I*=f(N*T,c);else{if(q+=$+s(I),q>=l)return NaN;I=u(q)}else if(N=f(T,c/p),R=(s(N)+s(S))*p,R<l&&R>_)I*=f(N*S,p);else{if(q+=$+s(I),q>=l)return NaN;I=u(q)}else I*=f(T,c)*f(S,p);return I}return L1=m,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var I1,Jl;function Jh(){if(Jl)return I1;Jl=1;var e=El(),r=N1(),i={keep:!0,maxIter:1e3};function n(t,v,u,f){var o=0;return s;function s(){var l,_,d;return _=(t+o-1)*(t+v+o-1)*o*(v-o)*u*u,l=t+2*o-1,_/=l*l,d=o,d+=o*(v-o)*u/(t+2*o-1),d+=(t+o)*(t*f-v*u+1+o*(2-u))/(t+2*o+1),o+=1,[_,d]}}function a(t,v,u,f,o,s){var l,_,d;return l=r(t,v,u,f,o),s&&(s[1]=l),l===0?l:(d=n(t,v,u,f),_=e(d,i),l/_)}return I1=a,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,Kl;function Kh(){if(Kl)return M1;Kl=1;var e=9007199254740991;return M1=e,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,Ql;function Qh(){if(Ql)return A1;Ql=1;function e(r,i){var n=0,a;if(r===0)return i;if(i===0)return r;for(;(r&1)===0&&(i&1)===0;)r>>>=1,i>>>=1,n+=1;for(;(r&1)===0;)r>>>=1;for(;i;){for(;(i&1)===0;)i>>>=1;r>i&&(a=i,i=r,r=a),i-=r}return r<<n}return A1=e,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,Yl;function Yh(){if(Yl)return E1;Yl=1;function e(r,i){var n=1,a;if(r===0)return i;if(i===0)return r;for(;r%2===0&&i%2===0;)r/=2,i/=2,n*=2;for(;r%2===0;)r/=2;for(;i;){for(;i%2===0;)i/=2;r>i&&(a=i,i=r,r=a),i-=r}return n*r}return E1=e,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w1,Zl;function Zh(){if(Zl)return w1;Zl=1;var e=B(),r=Vr(),i=ir(),n=fr(),a=ns(),t=Qh(),v=Yh();function u(f,o){return e(f)||e(o)?NaN:f===i||o===i||f===n||o===n?NaN:r(f)&&r(o)?(f<0&&(f=-f),o<0&&(o=-o),f<=a&&o<=a?t(f,o):v(f,o)):NaN}return w1=u,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,jl;function jh(){if(jl)return S1;jl=1;var e=Zh();return S1=e,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,zl;function zh(){if(zl)return P1;zl=1;var e=Kh(),r=ir(),i=Vr(),n=B(),a=ln(),t=Rr(),v=jh();function u(f,o){var s,l,_,d,h,m,c;if(n(f)||n(o))return NaN;if(!i(f)||!i(o))return NaN;if(o<0||(l=1,f<0&&(f=-f+o-1,a(o)&&(l*=-1)),o>f))return 0;if(o===0||o===f)return l;if(o===1||o===f-1)return l*f;for(f-o<o&&(o=f-o),c=t(e/f),s=1,h=1;h<=o&&!(s>c);h++)s*=f,s/=h,f-=1;return h>o?l*s:(_=u(f,o-h+1),_===r?l*_:(d=u(o,o-h+1),m=v(_,d),_/=m,d/=m,s/=d,l*s*_))}return P1=u,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1,xl;function xh(){if(xl)return F1;xl=1;var e=zh();return F1=e,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var O1,r4;function r_(){if(r4)return O1;r4=1;var e=xh(),r=Rr(),i=ar(),n=Hr();function a(t,v,u,f){var o,s,l,_,d;if(s=i(u,t),s>n)for(_=s,d=r(t-1);d>v;d--)_*=(d+1)*f/((t-d)*u),s+=_;else if(l=r(t*u),l<=v+1&&(l=r(v+2)),s=i(u,l)*i(f,t-l),s*=e(r(t),r(l)),s===0)for(d=l-1;d>v;d--)s+=i(u,d)*i(f,t-d),s*=e(r(t),r(d));else{for(_=s,o=s,d=l-1;d>v;d--)_*=(d+1)*f/((t-d)*u),s+=_;for(_=o,d=l+1;d<=t;d++)_*=(t-d+1)*u/(d*f),s+=_}return s}return O1=a,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var T1,e4;function e_(){if(e4)return T1;e4=1;var e=N1();function r(i,n,a,t,v,u,f){var o,s,l,_;if(o=e(i,n,a,t,u),f&&(f[1]=o),o/=i,o===0)return o;for(l=1,s=1,_=0;_<v-1;++_)s*=(i+n+_)*a/(i+_+1),l+=s;return o*=l,o}return T1=r,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var H1,i4;function i_(){if(i4)return H1;i4=1;var e=de(),r=ee(),i=_r(),n=Y(),a=nr(),t=ar(),v=x(),u=Hr(),f=Er(),o=Qr(),s=re(),l=Jr(),_={maxTerms:100};function d(m,c,p,y){var L=1-c,b=1;return I;function I(){var E=y/m;return m+=1,y*=L*p/b,b+=1,L+=1,E}}function h(m,c,p,y,L,b,I){var E,M,w,A,g,$,q,R;return L?(q=m+c,M=m+s-.5,w=c+s-.5,A=q+s-.5,E=e(q)/(e(m)*e(c)),g=v(A/w)*(c-.5),$=v(p*A/M)*m,g>o&&g<f&&$>o&&$<f?(m*c<w*10?E*=a((c-.5)*i(m/w)):E*=t(A/w,c-.5),E*=t(p*A/M,m),E*=n(M/l),b&&(b[1]=E*t(I,c))):(E=v(E)+g+$+(v(M)-1)/2,b&&(b[1]=a(E+c*v(I))),E=a(E))):E=t(p,m),E<u?y:(R=d(m,c,p,E),_.initialValue=y,r(R,_))}return H1=h,H1}var C1,n4;function a4(){if(n4)return C1;n4=1;var e=B(),r=Ur(),i=Rr(),n=_r(),a=gi(),t=le(),v=Y(),u=nr(),f=ar(),o=Cr(),s=Mr(),l=Gr(),_=Hr(),d=ns(),h=Kn(),m=Ar(),c=Dh(),p=Wh(),y=N1(),L=Jh(),b=r_(),I=e_(),E=i_(),M=1/m;function w(A,g,$,q,R,N,T,S){var H,F,O,P,V,C,U,J,Q,G,D,k;if(k=1-A,U=S,J=S+T,N[J]=-1,e(A)||A<0||A>1)return N[U]=NaN,N[J]=NaN,N;if(q){if(g<0||$<0)return N[U]=NaN,N[J]=NaN,N;if(g===0){if($===0)return N[U]=NaN,N[J]=NaN,N;if($>0)return N[U]=R?0:1,N}else if($===0&&g>0)return N[U]=R?1:0,N}else if(g<=0||$<=0)return N[U]=NaN,N[J]=NaN,N;return A===0?(g===1?N[J]=1:N[J]=g<1?l/2:_*2,R?(N[U]=q?1:t(g,$),N):(N[U]=0,N)):A===1?($===1?N[J]=1:N[J]=$<1?l/2:_*2,R?N[U]=0:N[U]=q?1:t(g,$),N):g===.5&&$===.5?(N[J]=M*v(k*A),D=a(v(R?k:A)),D/=h,q||(D*=m),N[U]=D,N):(g===1&&(C=$,$=g,g=C,C=k,k=A,A=C,R=!R),$===1?g===1?(N[U]=R?k:A,N[J]=1,N):(N[J]=g*f(A,g-1),k<.5?D=R?-r(g*n(-k)):u(g*n(-k)):D=R?-(f(A,g)-1):f(A,g),q||(D/=g),N[U]=D,N):(s(g,$)<=1?(A>.5&&(C=$,$=g,g=C,C=k,k=A,A=C,R=!R),o(g,$)<=1?g>=s(.2,$)||f(A,g)<=.9?R?(O=-(q?1:t(g,$)),R=!1,O=-E(g,$,A,O,q,N,k)):O=E(g,$,A,0,q,N,k):(C=$,$=g,g=C,C=k,k=A,A=C,R=!R,k>=.3?R?(O=-(q?1:t(g,$)),R=!1,O=-E(g,$,A,O,q,N,k)):O=E(g,$,A,0,q,N,k):(q?F=1:F=p(g+$,g,20),O=I(g,$,A,k,20,q,N),R?(O-=q?1:t(g,$),R=!1,O=-c(g+20,$,A,k,O,F,q)):O=c(g+20,$,A,k,O,F,q))):$<=1||A<.1&&f($*A,g)<=.7?R?(O=-(q?1:t(g,$)),R=!1,O=-E(g,$,A,O,q,N,k)):O=E(g,$,A,0,q,N,k):(C=$,$=g,g=C,C=k,k=A,A=C,R=!R,k>=.3?R?(O=-(q?1:t(g,$)),R=!1,O=-E(g,$,A,O,q,N,k)):O=E(g,$,A,0,q,N,k):g>=15?R?(O=-(q?1:t(g,$)),R=!1,O=-c(g,$,A,k,O,1,q)):O=c(g,$,A,k,0,1,q):(q?F=1:F=p(g+$,g,20),O=I(g,$,A,k,20,q,N),R?(O-=q?1:t(g,$),R=!1,O=-c(g+20,$,A,k,O,F,q)):O=c(g+20,$,A,k,O,F,q)))):(g<$?H=g-(g+$)*A:H=(g+$)*k-$,H<0&&(C=$,$=g,g=C,C=k,k=A,A=C,R=!R),$<40?i(g)===g&&i($)===$&&g<d-100?(Q=g-1,G=$+Q,O=b(G,Q,A,k),q||(O*=t(g,$))):$*A<=.7?R?(O=-(q?1:t(g,$)),R=!1,O=-E(g,$,A,O,q,N,k)):O=E(g,$,A,0,q,N,k):g>15?(G=i($),G===$&&(G-=1),P=$-G,q?F=1:F=p(g+P,P,G),O=I(P,g,k,A,G,q),O=c(g,P,A,k,O,1,q),O/=F):q?(G=i($),P=$-G,P<=0&&(G-=1,P+=1),O=I(P,g,k,A,G,q),O+=I(g,P,A,k,20,q),R&&(O-=1),O=c(g+20,P,A,k,O,1,q),R&&(O=-O,R=!1)):O=L(g,$,A,k,q,N):O=L(g,$,A,k,q,N)),N[J]<0&&(N[J]=y(g,$,A,k,!0)),V=k*A,N[J]!==0&&(l*V<N[J]?N[J]=l/2:N[J]/=V),N[U]=R?(q?1:t(g,$))-O:O,N))}return C1=w,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1,t4;function n_(){if(t4)return G1;t4=1;var e=a4();function r(i,n,a,t,v){return e(i,n,a,t,v,[0,0],1,0)}return G1=r,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,u4;function v4(){if(u4)return k1;u4=1;var e=or(),r=n_(),i=a4();return e(r,"assign",i),k1=r,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1,o4;function a_(){if(o4)return D1;o4=1;var e=v4().assign;function r(i,n,a,t,v){var u=[0,0];return t=t!==!1,v=v===!0,e(i,n,a,t,v,u,1,0),u[0]}return D1=r,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1,f4;function ie(){if(f4)return W1;f4=1;var e=a_();return W1=e,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1,s4;function t_(){if(s4)return U1;s4=1;var e=ie(),r=B();function i(n,a,t){return r(n)||r(a)||r(t)||a<=0||t<=0?NaN:n<=0?0:n>=1?1:e(n,a,t)}return U1=i,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X1,l4;function u_(){if(l4)return X1;l4=1;function e(r){return i;function i(){return r}}return X1=e,X1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,c4;function dr(){if(c4)return B1;c4=1;var e=u_();return B1=e,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1,m4;function v_(){if(m4)return V1;m4=1;var e=dr(),r=ie(),i=B();function n(a,t){if(i(a)||i(t)||a<=0||t<=0)return e(NaN);return v;function v(u){return i(u)?NaN:u<=0?0:u>=1?1:r(u,a,t)}}return V1=n,V1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1,h4;function o_(){if(h4)return J1;h4=1;var e=or(),r=t_(),i=v_();return e(r,"factory",i),J1=r,J1}var f_=o_(),K1=Lr(f_);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1,_4;function d4(){if(_4)return Q1;_4=1;var e=.9189385332046728;return Q1=e,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Y1,$4;function s_(){if($4)return Y1;$4=1;var e=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],r=e.length;function i(n){var a,t,v,u,f;if(n<-1.1||n>1.1)return NaN;for(v=0,u=0,a=2*n,f=0;f<r;f++)t=v,v=u,u=a*v-t+e[f];return(u-t)*.5}return Y1=i,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Z1,p4;function l_(){if(p4)return Z1;p4=1;var e=ar(),r=s_(),i=9490626562425156e-8,n=3745194030963158e291;function a(t){return t<10?NaN:t>=n?0:t<i?r(2*e(10/t,2)-1)/t:1/(t*12)}return Z1=a,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var j1,q4;function c_(){if(q4)return j1;q4=1;var e=Kr(),r=_r(),i=br(),n=Cr(),a=Mr(),t=x(),v=d4(),u=fr(),f=ir(),o=l_();function s(l,_){var d,h,m;return h=a(l,_),m=n(l,_),h<0?NaN:h===0?f:m===f?u:h>=10?(d=o(h)+o(m)-o(h+m),-.5*t(m)+v+d+(h-.5)*t(h/(h+m))+m*r(-h/(h+m))):m>=10?(d=o(m)-o(h+m),e(h)+d+h-h*t(h+m)+(m-.5)*r(-h/(h+m))):t(i(h)*(i(m)/i(h+m)))}return j1=s,j1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1,y4;function R4(){if(y4)return z1;y4=1;var e=c_();return z1=e,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1,g4;function m_(){if(g4)return x1;g4=1;var e=R4(),r=B(),i=_r(),n=nr(),a=x(),t=ir();function v(u,f,o){var s;return r(u)||r(f)||r(o)||f<=0||o<=0?NaN:u<0||u>1?0:u===0?f<1?t:f>1?0:o:u===1?o<1?t:o>1?0:f:(s=(f-1)*a(u),s+=(o-1)*i(-u),s-=e(f,o),n(s))}return x1=v,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ru,b4;function h_(){if(b4)return ru;b4=1;var e=dr(),r=R4(),i=B(),n=_r(),a=nr(),t=x(),v=ir();function u(f,o){var s;if(i(f)||i(o)||f<=0||o<=0)return e(NaN);return s=r(f,o),l;function l(_){var d;return i(_)?NaN:_<0||_>1?0:_===0?f<1?v:f>1?0:o:_===1?o<1?v:o>1?0:f:(d=-s,d+=(f-1)*t(_),d+=(o-1)*n(-_),a(d))}}return ru=u,ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eu,L4;function __(){if(L4)return eu;L4=1;var e=or(),r=m_(),i=h_();return e(r,"factory",i),eu=r,eu}var d_=__(),$_=Lr(d_);/**
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
*/var iu,N4;function p_(){if(N4)return iu;N4=1;function e(r){var i,n,a;return r===0?-.0005087819496582806:(r<0?i=-r:i=r,i<=1?(n=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),a=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,n=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),a=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),n/a)}return iu=e,iu}/**
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
*/var nu,I4;function q_(){if(I4)return nu;I4=1;function e(r){var i,n,a;return r===0?-.20243350835593876:(r<0?i=-r:i=r,i<=1?(n=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),a=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,n=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),a=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),n/a)}return nu=e,nu}/**
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
*/var au,M4;function y_(){if(M4)return au;M4=1;function e(r){var i,n,a;return r===0?-.1311027816799519:(r<0?i=-r:i=r,i<=1?(n=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),a=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,n=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),a=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),n/a)}return au=e,au}/**
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
*/var tu,A4;function R_(){if(A4)return tu;A4=1;function e(r){var i,n,a;return r===0?-.0350353787183178:(r<0?i=-r:i=r,i<=1?(n=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),a=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,n=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),a=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),n/a)}return tu=e,tu}/**
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
*/var uu,E4;function g_(){if(E4)return uu;E4=1;function e(r){var i,n,a;return r===0?-.016743100507663373:(r<0?i=-r:i=r,i<=1?(n=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),a=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,n=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),a=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),n/a)}return uu=e,uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vu,w4;function b_(){if(w4)return vu;w4=1;var e=B(),r=Y(),i=x(),n=ir(),a=fr(),t=p_(),v=q_(),u=y_(),f=R_(),o=g_(),s=.08913147449493408,l=2.249481201171875,_=.807220458984375,d=.9399557113647461,h=.9836282730102539;function m(c){var p,y,L,b,I;return e(c)?NaN:c===0?n:c===2?a:c===1?0:c>2||c<0?NaN:(c>1?(p=-1,L=2-c):(p=1,L=c),c=1-L,c<=.5?(b=c*(c+10),I=t(c),p*(b*s+b*I)):L>=.25?(b=r(-2*i(L)),L-=.25,I=v(L),p*(b/(l+I))):(L=r(-i(L)),L<3?(y=L-1.125,I=u(y),p*(_*L+I*L)):L<6?(y=L-3,I=f(y),p*(d*L+I*L)):(y=L-6,I=o(y),p*(h*L+I*L))))}return vu=m,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ou,S4;function ne(){if(S4)return ou;S4=1;var e=b_();return ou=e,ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var fu,P4;function L_(){if(P4)return fu;P4=1;var e=B(),r=gi(),i=Y(),n=Af(),a=6123233995736766e-32;function t(v){var u;return e(v)?NaN:v<-1||v>1?NaN:v>.5?2*r(i(.5-.5*v)):(u=n-r(v),u+=a,u+=n,u)}return fu=t,fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su,F4;function N_(){if(F4)return su;F4=1;var e=L_();return su=e,su}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,O4;function cu(){if(O4)return lu;O4=1;var e=1.4142135623730951;return lu=e,lu}/**
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
*/var mu,T4;function I_(){if(T4)return mu;T4=1;function e(r){return r===0?.16666666666666666:.16666666666666666+r*.16666666666666666}return mu=e,mu}/**
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
*/var hu,H4;function M_(){if(H4)return hu;H4=1;function e(r){return r===0?.058333333333333334:.058333333333333334+r*(.06666666666666667+r*.008333333333333333)}return hu=e,hu}/**
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
*/var _u,C4;function A_(){if(C4)return _u;C4=1;function e(r){return r===0?.0251984126984127:.0251984126984127+r*(.026785714285714284+r*(.0017857142857142857+r*.0001984126984126984))}return _u=e,_u}/**
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
*/var du,G4;function E_(){if(G4)return du;G4=1;function e(r){return r===0?.012039792768959435:.012039792768959435+r*(.010559964726631394+r*(-.0011078042328042327+r*(.0003747795414462081+r*27557319223985893e-22)))}return du=e,du}/**
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
*/var $u,k4;function w_(){if(k4)return $u;k4=1;function e(r){return r===0?.003837005972422639:.003837005972422639+r*(.00610392115600449+r*(-.0016095979637646305+r*(.0005945867404200738+r*(-6270542728876062e-20+r*2505210838544172e-23))))}return $u=e,$u}/**
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
*/var pu,D4;function S_(){if(D4)return pu;D4=1;function e(r){return r===0?.0032177478835464946:.0032177478835464946+r*(.0010898206731540065+r*(-.0012579159844784845+r*(.0006908420797309686+r*(-.00016376804137220805+r*(154012654012654e-19+r*16059043836821613e-26)))))}return pu=e,pu}/**
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
*/var qu,W4;function P_(){if(W4)return qu;W4=1;function e(r){return r===0?.001743826229834001:.001743826229834001+r*(3353097688001788e-20+r*(-.0007624513544032393+r*(.0006451304695145635+r*(-.000249472580470431+r*(49255746366361444e-21+r*(-39851014346715405e-22+r*7647163731819816e-28))))))}return qu=e,qu}/**
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
*/var yu,U4;function F_(){if(U4)return yu;U4=1;function e(r){return r===0?.0009647274732138864:.0009647274732138864+r*(-.0003110108632631878+r*(-.00036307660358786886+r*(.0005140660578834113+r*(-.00029133414466938067+r*(9086710793521991e-20+r*(-15303004486655377e-21+r*(10914179173496788e-22+r*28114572543455206e-31)))))))}return yu=e,yu}/**
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
*/var Ru,X4;function O_(){if(X4)return Ru;X4=1;function e(r){return r===0?.0005422926281312969:.0005422926281312969+r*(-.0003694266780000966+r*(-.00010230378073700413+r*(.00035764655430568635+r*(-.00028690924218514614+r*(.00012645437628698076+r*(-33202652391372056e-21+r*(4890304529197534e-21+r*(-3123956959982987e-22+r*822063524662433e-32))))))))}return Ru=e,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gu,B4;function T_(){if(B4)return gu;B4=1;var e=Oa(),r=wr(),i=Y(),n=Ar(),a=I_(),t=M_(),v=A_(),u=E_(),f=w_(),o=S_(),s=P_(),l=F_(),_=O_(),d=0,h=[1,0,0,0,0,0,0,0,0,0];function m(c,p){var y,L;return L=e(c/2,.5)*i(c*n)*(p-.5),y=1/c,h[1]=a(y),h[2]=t(y),h[3]=v(y),h[4]=u(y),h[5]=f(y),h[6]=o(y),h[7]=s(y),h[8]=l(y),h[9]=_(y),d+L*r(h,L*L)}return gu=m,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bu,V4;function H_(){if(V4)return bu;V4=1;var e=Oa(),r=wr(),i=Y(),n=ar(),a=Ar(),t=[0,0,0,0,0,0,0];function v(u,f){var o,s,l,_,d,h,m,c;return c=e(u/2,.5)*i(u*a)*f,_=u+2,d=u+4,h=u+6,t[0]=1,t[1]=-(u+1)/(2*_),_*=u+2,t[2]=-u*(u+1)*(u+3)/(8*_*d),_*=u+2,t[3]=-u*(u+1)*(u+5)*((3*u+7)*u-2)/(48*_*d*h),_*=u+2,d*=u+4,t[4]=-u*(u+1)*(u+7)*(((((15*u+154)*u+465)*u+286)*u-336)*u+64)/(384*_*d*h*(u+8)),_*=u+2,t[5]=-u*(u+1)*(u+3)*(u+9)*((((((35*u+452)*u+1573)*u+600)*u-2020)*u+928)*u-128)/(1280*_*d*h*(u+8)*(u+10)),_*=u+2,d*=u+4,h*=u+6,t[6]=-u*(u+1)*(u+11)*(((((((((((945*u+31506)*u+425858)*u+2980236)*u+11266745)*u+20675018)*u+7747124)*u-22574632)*u-8565600)*u+18108416)*u-7099392)*u+884736)/(46080*_*d*h*(u+8)*(u+10)*(u+12)),m=i(u),l=n(m*c,1/u),s=l*l,o=r(t,s),o*=m,o/=l,-o}return bu=v,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Lu,J4;function C_(){if(J4)return Lu;J4=1;var e=ne(),r=Ur(),i=Y(),n=ar(),a=Kn(),t=cu();function v(u,f){var o,s,l,_,d,h,m;return u>1e20?-e(2*f)*t:(o=1/(u-.5),s=48/(o*o),l=((20700*o/s-98)*o-16)*o+96.36,_=((94.5/(s+l)-3)/s+1)*i(o*a)*u,m=n(_*2*f,2/u),m>.05+o?(h=-e(2*f)*t,m=h*h,u<5&&(l+=.3*(u-4.5)*(h+.6)),l+=(((.05*_*h-5)*h-7)*h-2)*h+s,m=(((((.4*m+6.3)*m+36)*m+94.5)/l-m-3)/s+1)*h,m=r(o*m*m)):m=((1/(((u+6)/(u*m)-.089*_-.822)*(u+2)*3)+.5/(u+4))*m-1)*(u+1)/(u+2)+1/m,d=i(u*m),-d)}return Lu=v,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Nu,K4;function G_(){if(K4)return Nu;K4=1;var e=ne(),r=Rr(),i=Br(),n=Ls(),a=N_(),t=Y(),v=Z(),u=Wa(),f=ar(),o=xr(),s=cu(),l=Ar(),_=T_(),d=H_(),h=C_(),m=268435456,c=1/3,p=106/3,y=.8549879733383485;function L(b,I,E){var M,w,A,g,$,q,R,N,T,S,H,F,O,P,V,C;if($=0,I>E?(R=E,E=I,I=R,g=!0):g=!1,r(b)===b&&b<20)switch(w=i(1,p),r(b)){case 1:I===.5?$=0:$=-u(l*I)/o(l*I);break;case 2:$=(2*I-1)/t(2*I*E);break;case 4:q=4*I*E,A=t(q),O=4*u(a(A)/3)/A,P=t(O-4),$=I-.5<0?-P:P;break;case 6:if(I<1e-150)return(g?-1:1)*h(b,I);V=4*(I-I*I),C=f(V,c),F=6*(1+y*(1/C-1));do T=F*F,S=T*T,H=F*S,N=F,F=2*(8*V*H-270*T+2187)/(5*(4*V*S-216*F-243));while(v((F-N)/F)>w);F=t(F-b),$=I-.5<0?-F:F;break;default:b>m?$=e(2*I)*s:b<3?(M=.2742-b*.0242143,I>M?$=_(b,I):$=d(b,I)):(M=i(1,n(b/-.654)),I>M?$=h(b,I):$=d(b,I))}else b>m?$=-e(2*I)*s:b<3?(M=.2742-b*.0242143,I>M?$=_(b,I):$=d(b,I)):(M=i(1,n(b/-.654)),I>M?$=h(b,I):$=d(b,I));return g?-$:$}return Nu=L,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Iu,Q4;function k_(){if(Q4)return Iu;Q4=1;var e=G_();function r(i,n,a){var t,v,u,f;return v=n/2,u=1-v,t=i*2,f=e(t,v,u),a&&(a.value=f*f/(t+f*f)),t/(t+f*f)}return Iu=r,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mu,Y4;function D_(){if(Y4)return Mu;Y4=1;var e=wr(),r=ne(),i=Y(),n=nr(),a=cu(),t=[0,0,0,0,0,0,0],v=[0,0,0,0];function u(f,o,s){var l,_,d,h,m,c,p;return l=r(2*s),l/=-i(f/2),v[0]=l,c=o-f,h=c*c,m=h*c,t[0]=-c*a/2,t[1]=(1-2*c)/8,t[2]=-(c*a/48),t[3]=-1/192,t[4]=-c*a/3840,t[5]=0,t[6]=0,v[1]=e(t,l),t[0]=c*a*(3*c-2)/12,t[1]=(20*h-12*c+1)/128,t[2]=c*a*(20*c-1)/960,t[3]=(16*h+30*c-15)/4608,t[4]=c*a*(21*c+32)/53760,t[5]=(-(32*h)+63)/368640,t[6]=-c*a*(120*c+17)/25804480,v[2]=e(t,l),t[0]=c*a*(-75*h+80*c-16)/480,t[1]=(-1080*m+868*h-90*c-45)/9216,t[2]=c*a*(-1190*h+84*c+373)/53760,t[3]=(-2240*m-2508*h+2100*c-165)/368640,t[4]=0,t[5]=0,t[6]=0,v[3]=e(t,l),d=e(v,1/f),_=d*d,p=-n(-_/2),_===0?.5:(1+d*i((1+p)/_))/2}return Mu=u,Mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Au,Z4;function j4(){if(Z4)return Au;Z4=1;var e=x(),r=Gr(),i=r/4;function n(a,t){return v;function v(u){var f,o,s;return s=1-u,s===0?[-i,-i]:u===0?[-i,-i]:(o=e(u)+t*e(s)+a,f=1/u-t/s,[o,f])}}return Au=n,Au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu,z4;function W_(){if(z4)return Eu;z4=1;var e=B();function r(i){return i===0||e(i)?i:i<0?-1:1}return Eu=r,Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wu,x4;function pe(){if(x4)return wu;x4=1;var e=W_();return wu=e,wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Su,r5;function e5(){if(r5)return Su;r5=1;var e=pe(),r=Z(),i=Br(),n=Gr();function a(t,v,u,f,o,s){var l,_,d,h,m,c,p,y,L,b;L=0,l=0,m=v,h=i(1,1-o),p=n,_=n,d=n,c=s;do{if(l=L,d=_,_=p,y=t(m),L=y[0],b=y[1],c-=1,L===0)break;if(b===0?(l===0&&(m===u?v=f:v=u,l=t(v),p=v-m),e(l)*e(L)<0?p<0?p=(m-u)/2:p=(m-f)/2:p<0?p=(m-f)/2:p=(m-u)/2):p=L/b,r(p*2)>r(d)&&(p=p>0?(m-u)/2:(m-f)/2),v=m,m-=p,m<=u){if(p=.5*(v-u),m=v-p,m===u||m===f)break}else if(m>=f&&(p=.5*(v-f),m=v-p,m===u||m===f))break;p>0?f=v:u=v}while(c&&r(m*h)<r(p));return m}return Su=a,Su}/**
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
*/var Pu,i5;function U_(){if(i5)return Pu;i5=1;function e(r){return r===0?-1:-1+r*(-5+r*5)}return Pu=e,Pu}/**
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
*/var Fu,n5;function X_(){if(n5)return Fu;n5=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return Fu=e,Fu}/**
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
*/var Ou,a5;function B_(){if(a5)return Ou;a5=1;function e(r){return r===0?7:7+r*(-2+r*(33+r*(-62+r*31)))}return Ou=e,Ou}/**
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
*/var Tu,t5;function V_(){if(t5)return Tu;t5=1;function e(r){return r===0?25:25+r*(-52+r*(-17+r*(88+r*(-115+r*46))))}return Tu=e,Tu}/**
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
*/var Hu,u5;function J_(){if(u5)return Hu;u5=1;function e(r){return r===0?7:7+r*(12+r*(-78+r*52))}return Hu=e,Hu}/**
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
*/var Cu,v5;function K_(){if(v5)return Cu;v5=1;function e(r){return r===0?-7:-7+r*(2+r*(183+r*(-370+r*185)))}return Cu=e,Cu}/**
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
*/var Gu,o5;function Q_(){if(o5)return Gu;o5=1;function e(r){return r===0?-533:-533+r*(776+r*(-1835+r*(10240+r*(-13525+r*5410))))}return Gu=e,Gu}/**
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
*/var ku,f5;function Y_(){if(f5)return ku;f5=1;function e(r){return r===0?-1579:-1579+r*(3747+r*(-3372+r*(-15821+r*(45588+r*(-45213+r*15071)))))}return ku=e,ku}/**
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
*/var Du,s5;function Z_(){if(s5)return Du;s5=1;function e(r){return r===0?449:449+r*(-1259+r*(-769+r*(6686+r*(-9260+r*3704))))}return Du=e,Du}/**
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
*/var Wu,l5;function j_(){if(l5)return Wu;l5=1;function e(r){return r===0?63149:63149+r*(-151557+r*(140052+r*(-727469+r*(2239932+r*(-2251437+r*750479)))))}return Wu=e,Wu}/**
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
*/var Uu,c5;function z_(){if(c5)return Uu;c5=1;function e(r){return r===0?29233:29233+r*(-78755+r*(105222+r*(146879+r*(-1602610+r*(3195183+r*(-2554139+r*729754))))))}return Uu=e,Uu}/**
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
*/var Xu,m5;function x_(){if(m5)return Xu;m5=1;function e(r){return r===0?1:1+r*(-13+r*13)}return Xu=e,Xu}/**
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
*/var Bu,h5;function rd(){if(h5)return Bu;h5=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return Bu=e,Bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Vu,_5;function ed(){if(_5)return Vu;_5=1;var e=wr(),r=ne(),i=Z(),n=nr(),a=x(),t=Y(),v=xr(),u=Wa(),f=j4(),o=e5(),s=U_(),l=X_(),_=B_(),d=V_(),h=J_(),m=K_(),c=Q_(),p=Y_(),y=Z_(),L=j_(),b=z_(),I=x_(),E=rd(),M=[0,0,0,0,0,0],w=[0,0,0,0];function A(g,$,q){var R,N,T,S,H,F,O,P,V,C,U,J,Q,G,D,k,tr,rr,X,K;return H=r(2*g)/-t($/2),rr=v(q),tr=u(q),w[0]=H,D=rr*rr,k=tr*tr,Q=rr*tr,J=Q*Q,U=J*Q,C=J*J,V=J*U,P=U*U,O=C*U,M[0]=(2*D-1)/(3*Q),M[1]=-s(D)/(36*J),M[2]=l(D)/(1620*U),M[3]=_(D)/(6480*C),M[4]=d(D)/(90720*V),M[5]=0,w[1]=e(M,H),M[0]=-h(D)/(405*U),M[1]=m(D)/(2592*C),M[2]=-c(D)/(204120*V),M[3]=-p(D)/(2099520*P),M[4]=0,M[5]=0,w[2]=e(M,H),M[0]=y(D)/(102060*V),M[1]=-L(D)/(20995200*P),M[2]=b(D)/(36741600*O),M[3]=0,M[4]=0,M[5]=0,w[3]=e(M,H),F=e(w,1/$),T=tr/rr,T*=T,G=-(F*F)/(2*D)+a(D)+k*a(k)/D,i(F)<.7?(M[0]=D,M[1]=Q,M[2]=(1-2*D)/3,M[3]=I(D)/(36*Q),M[4]=E(D)/(270*J),M[5]=0,K=e(M,F)):(X=n(G),M[0]=X,M[1]=T,M[2]=0,M[3]=3*T*(3*T+1)/6,M[4]=4*T*(4*T+1)*(4*T+2)/24,M[5]=5*T*(5*T+1)*(5*T+2)*(5*T+3)/120,K=e(M,X),(K-D)*F<0&&(K=1-K)),F<0?(N=0,R=D):(N=D,R=1),(K<N||K>R)&&(K=(N+R)/2),S=f(-G,T),K=o(S,K,N,R,32,100),K}return Vu=A,Vu}var qe={exports:{}},ye={exports:{}},Ju,d5;function id(){if(d5)return Ju;d5=1;var e=1e3,r=e*60,i=r*60,n=i*24,a=n*365.25;Ju=function(o,s){s=s||{};var l=typeof o;if(l==="string"&&o.length>0)return t(o);if(l==="number"&&isNaN(o)===!1)return s.long?u(o):v(o);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(o))};function t(o){if(o=String(o),!(o.length>100)){var s=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(o);if(s){var l=parseFloat(s[1]),_=(s[2]||"ms").toLowerCase();switch(_){case"years":case"year":case"yrs":case"yr":case"y":return l*a;case"days":case"day":case"d":return l*n;case"hours":case"hour":case"hrs":case"hr":case"h":return l*i;case"minutes":case"minute":case"mins":case"min":case"m":return l*r;case"seconds":case"second":case"secs":case"sec":case"s":return l*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}}}function v(o){return o>=n?Math.round(o/n)+"d":o>=i?Math.round(o/i)+"h":o>=r?Math.round(o/r)+"m":o>=e?Math.round(o/e)+"s":o+"ms"}function u(o){return f(o,n,"day")||f(o,i,"hour")||f(o,r,"minute")||f(o,e,"second")||o+" ms"}function f(o,s,l){if(!(o<s))return o<s*1.5?Math.floor(o/s)+" "+l:Math.ceil(o/s)+" "+l+"s"}return Ju}var $5;function nd(){return $5||($5=1,(function(e,r){r=e.exports=a.debug=a.default=a,r.coerce=f,r.disable=v,r.enable=t,r.enabled=u,r.humanize=id(),r.names=[],r.skips=[],r.formatters={};var i;function n(o){var s=0,l;for(l in o)s=(s<<5)-s+o.charCodeAt(l),s|=0;return r.colors[Math.abs(s)%r.colors.length]}function a(o){function s(){if(s.enabled){var l=s,_=+new Date,d=_-(i||_);l.diff=d,l.prev=i,l.curr=_,i=_;for(var h=new Array(arguments.length),m=0;m<h.length;m++)h[m]=arguments[m];h[0]=r.coerce(h[0]),typeof h[0]!="string"&&h.unshift("%O");var c=0;h[0]=h[0].replace(/%([a-zA-Z%])/g,function(y,L){if(y==="%%")return y;c++;var b=r.formatters[L];if(typeof b=="function"){var I=h[c];y=b.call(l,I),h.splice(c,1),c--}return y}),r.formatArgs.call(l,h);var p=s.log||r.log||console.log.bind(console);p.apply(l,h)}}return s.namespace=o,s.enabled=r.enabled(o),s.useColors=r.useColors(),s.color=n(o),typeof r.init=="function"&&r.init(s),s}function t(o){r.save(o),r.names=[],r.skips=[];for(var s=(typeof o=="string"?o:"").split(/[\s,]+/),l=s.length,_=0;_<l;_++)s[_]&&(o=s[_].replace(/\*/g,".*?"),o[0]==="-"?r.skips.push(new RegExp("^"+o.substr(1)+"$")):r.names.push(new RegExp("^"+o+"$")))}function v(){r.enable("")}function u(o){var s,l;for(s=0,l=r.skips.length;s<l;s++)if(r.skips[s].test(o))return!1;for(s=0,l=r.names.length;s<l;s++)if(r.names[s].test(o))return!0;return!1}function f(o){return o instanceof Error?o.stack||o.message:o}})(ye,ye.exports)),ye.exports}var p5;function q5(){return p5||(p5=1,(function(e,r){var i={};r=e.exports=nd(),r.log=t,r.formatArgs=a,r.save=v,r.load=u,r.useColors=n,r.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:f(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function n(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}r.formatters.j=function(o){try{return JSON.stringify(o)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}};function a(o){var s=this.useColors;if(o[0]=(s?"%c":"")+this.namespace+(s?" %c":" ")+o[0]+(s?"%c ":" ")+"+"+r.humanize(this.diff),!!s){var l="color: "+this.color;o.splice(1,0,l,"color: inherit");var _=0,d=0;o[0].replace(/%[a-zA-Z%]/g,function(h){h!=="%%"&&(_++,h==="%c"&&(d=_))}),o.splice(d,0,l)}}function t(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function v(o){try{o==null?r.storage.removeItem("debug"):r.storage.debug=o}catch{}}function u(){var o;try{o=r.storage.debug}catch{}return!o&&typeof process<"u"&&"env"in process&&(o=i.DEBUG),o}r.enable(u());function f(){try{return window.localStorage}catch{}}})(qe,qe.exports)),qe.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,y5;function Re(){if(y5)return Ku;y5=1;var e=34028234663852886e22;return Ku=e,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,R5;function ad(){if(R5)return Qu;R5=1;var e=q5(),r=Hl(),i=Z(),n=nr(),a=x(),t=Re(),v=e("gammaincinv:higher_newton");function u(f,o,s,l,_,d,h,m){var c,p,y,L,b,I,E,M,w,A,g,$,q,R;R=f,g=1,$=1,I=o*o,p=f;do{if(R=f,E=R*R,s===0){if(c=(1-o)*a(R)+R+d,c>a(t))return v("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),p;q=n(c)}else q=-h*R;m?(M=r(R,o,!0,!1),y=-q*(M-l)):(w=r(R,o,!0,!0),y=q*(w-_)),q=y,l>1e-120||$>1?(L=.5*(R-o+1)/R,b=(2*E-4*R*o+4*R+2*I-3*o+1)/E,b/=6,f=R+q*(1+q*(L+q*b))):f=R+q,g=i(R/f-1),$+=1,R=f,R<0&&(R=p,$=100)}while(g>2e-14&&$<35);return(g>2e-14||$>99)&&v("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),A=R||0,A}return Qu=u,Qu}/**
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
*/var Yu,g5;function td(){if(g5)return Yu;g5=1;function e(r){return r===0?0:0+r*(1+r*(1+r*(1.5+r*(2.6666666666666665+r*(5.208333333333333+r*10.8)))))}return Yu=e,Yu}/**
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
*/var Zu,b5;function ud(){if(b5)return Zu;b5=1;function e(r){return r===0?1:1+r*(1+r*(.3333333333333333+r*(.027777777777777776+r*(-.003703703703703704+r*(.0002314814814814815+r*5878894767783657e-20)))))}return Zu=e,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,L5;function N5(){if(L5)return ju;L5=1;var e=Z(),r=nr(),i=x(),n=wr(),a=td(),t=ud(),v=1e-8,u=.08333333333333333,f=.008333333333333333,o=[1,0,0,0,0,0];function s(l){var _,d,h,m,c,p,y,L,b;if(b=l*l*.5,l===0?c=0:l<-1?(L=r(-1-b),c=a(L)):l<1?(L=l,c=t(L)):(L=11+b,p=i(L),c=L+p,L=1/L,_=p*p,d=_*p,h=d*p,m=h*p,o[1]=(2-p)*.5,o[2]=(-9*p+6+2*_)/6,o[3]=-(3*d+36*p-22*_-12)*u,o[4]=(60+350*_-300*p-125*d+12*h)/60,o[5]=-(-120-274*h+900*p-1700*_+1125*d+20*m)*f,c+=p*L*n(o,L)),L=1,l>-3.5&&l<-.03||l>.03&&l<40){L=1,y=c;do c=y*(b+i(y))/(y-1),L=e(y/c-1),y=c;while(L>v)}return c}return ju=s,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,I5;function vd(){if(I5)return zu;I5=1;var e=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function r(i,n){var a,t,v,u,f;t=0,v=0,a=n+n,f=i;do u=v,v=t,t=a*v-u+e[f],f-=1;while(f>=0);return(t-u)/2}return zu=r,zu}/**
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
*/var xu,M5;function od(){if(M5)return xu;M5=1;function e(r){return r===0?.025721014990011306:.025721014990011306+r*(.08247596616699963+r*(-.0025328157302663564+r*(.0006099292666946337+r*(-.00033543297638406+r*.000250505279903))))}return xu=e,xu}/**
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
*/var rv,A5;function fd(){if(A5)return rv;A5=1;function e(r){return r===0?.08333333333333333:.08333333333333333+r*(-.002777777777777778+r*(.0007936507936507937+r*-.0005952380952380953))}return rv=e,rv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ev,E5;function sd(){if(E5)return ev;E5=1;var e=Kr(),r=x(),i=d4(),n=$e(),a=Re(),t=vd(),v=od(),u=fd(),f=.30865217988013566;function o(s){var l;return s<n?a:s<1?e(s+1)-(s+.5)*r(s)+s-i:s<2?e(s)-(s-.5)*r(s)+s-i:s<3?e(s-1)-(s-.5)*r(s)+s-i+r(s-1):s<12?(l=18/(s*s)-1,t(17,l)/(12*s)):(l=1/(s*s),s<1e3?v(l)/(f+l)/s:u(l)/s)}return ev=o,ev}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iv,w5;function ld(){if(w5)return iv;w5=1;var e=nr(),r=br(),i=x(),n=Re(),a=ce(),t=sd();function v(u){return u>=3?e(t(u)):u>0?r(u)/(e(-u+(u-.5)*i(u))*a):n}return iv=v,iv}/**
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
*/var nv,S5;function cd(){if(S5)return nv;S5=1;function e(r){var i,n,a;return r===0?-.3333333333438:(r<0?i=-r:i=r,i<=1?(n=-.3333333333438+r*(-.2070740359969+r*(-.05041806657154+r*(-.004923635739372+r*-4293658292782e-17))),a=1+r*(.7045554412463+r*(.2118190062224+r*(.03048648397436+r*.001605037988091)))):(r=1/r,n=-4293658292782e-17+r*(-.004923635739372+r*(-.05041806657154+r*(-.2070740359969+r*-.3333333333438))),a=.001605037988091+r*(.03048648397436+r*(.2118190062224+r*(.7045554412463+r*1)))),n/a)}return nv=e,nv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var av,P5;function md(){if(P5)return av;P5=1;var e=Z(),r=x(),i=N5(),n=cd();function a(t){var v;return e(t)<1?n(t):(v=i(t),r(t/(v-1))/t)}return av=a,av}/**
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
*/var tv,F5;function hd(){if(F5)return tv;F5=1;function e(r){var i,n,a;return r===0?-.0172847633523:(r<0?i=-r:i=r,i<=1?(n=-.0172847633523+r*(-.0159372646475+r*(-.00464910887221+r*(-.00060683488776+r*-614830384279e-17))),a=1+r*(.764050615669+r*(.297143406325+r*(.0579490176079+r*.00574558524851)))):(r=1/r,n=-614830384279e-17+r*(-.00060683488776+r*(-.00464910887221+r*(-.0159372646475+r*-.0172847633523))),a=.00574558524851+r*(.0579490176079+r*(.297143406325+r*(.764050615669+r*1)))),n/a)}return tv=e,tv}/**
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
*/var uv,O5;function _d(){if(O5)return uv;O5=1;function e(r){var i,n,a;return r===0?-.0172839517431:(r<0?i=-r:i=r,i<=1?(n=-.0172839517431+r*(-.0146362417966+r*(-.00357406772616+r*(-.000391032032692+r*249634036069e-17))),a=1+r*(.690560400696+r*(.249962384741+r*(.0443843438769+r*.00424073217211)))):(r=1/r,n=249634036069e-17+r*(-.000391032032692+r*(-.00357406772616+r*(-.0146362417966+r*-.0172839517431))),a=.00424073217211+r*(.0443843438769+r*(.249962384741+r*(.690560400696+r*1)))),n/a)}return uv=e,uv}/**
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
*/var vv,T5;function dd(){if(T5)return vv;T5=1;function e(r){var i,n,a;return r===0?.99994466948:(r<0?i=-r:i=r,i<=1?(n=.99994466948+r*(104.649839762+r*(857.204033806+r*(731.901559577+r*45.5174411671))),a=1+r*(104.526456943+r*(823.313447808+r*(3119.93802124+r*3970.03311219)))):(r=1/r,n=45.5174411671+r*(731.901559577+r*(857.204033806+r*(104.649839762+r*.99994466948))),a=3970.03311219+r*(3119.93802124+r*(823.313447808+r*(104.526456943+r*1)))),n/a)}return vv=e,vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ov,H5;function $d(){if(H5)return ov;H5=1;var e=x(),r=hd(),i=_d(),n=dd();function a(t){var v,u;return t<-5?(u=t*t,v=e(-t),(12-u-6*(v*v))/(12*u*t)):t<-2?r(t):t<2?i(t):t<1e3?(u=1/t,n(t)/(-12*t)):-1/(12*t)}return ov=a,ov}/**
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
*/var fv,C5;function pd(){if(C5)return fv;C5=1;function e(r){var i,n,a;return r===0?.0495346498136:(r<0?i=-r:i=r,i<=1?(n=.0495346498136+r*(.0299521337141+r*(.00688296911516+r*(.000512634846317+r*-201411722031e-16))),a=1+r*(.759803615283+r*(.261547111595+r*(.0464854522477+r*.00403751193496)))):(r=1/r,n=-201411722031e-16+r*(.000512634846317+r*(.00688296911516+r*(.0299521337141+r*.0495346498136))),a=.00403751193496+r*(.0464854522477+r*(.261547111595+r*(.759803615283+r*1)))),n/a)}return fv=e,fv}/**
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
*/var sv,G5;function qd(){if(G5)return sv;G5=1;function e(r){var i,n,a;return r===0?.00452313583942:(r<0?i=-r:i=r,i<=1?(n=.00452313583942+r*(.00120744920113+r*(-789724156582e-16+r*(-504476066942e-16+r*-535770949796e-17))),a=1+r*(.912203410349+r*(.405368773071+r*(.0901638932349+r*.00948935714996)))):(r=1/r,n=-535770949796e-17+r*(-504476066942e-16+r*(-789724156582e-16+r*(.00120744920113+r*.00452313583942))),a=.00948935714996+r*(.0901638932349+r*(.405368773071+r*(.912203410349+r*1)))),n/a)}return sv=e,sv}/**
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
*/var lv,k5;function yd(){if(k5)return lv;k5=1;function e(r){var i,n,a;return r===0?.00439937562904:(r<0?i=-r:i=r,i<=1?(n=.00439937562904+r*(.000487225670639+r*(-.000128470657374+r*(529110969589e-17+r*15716677175e-17))),a=1+r*(.794435257415+r*(.333094721709+r*(.0703527806143+r*.00806110846078)))):(r=1/r,n=15716677175e-17+r*(529110969589e-17+r*(-.000128470657374+r*(.000487225670639+r*.00439937562904))),a=.00806110846078+r*(.0703527806143+r*(.333094721709+r*(.794435257415+r*1)))),n/a)}return lv=e,lv}/**
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
*/var cv,D5;function Rd(){if(D5)return cv;D5=1;function e(r){var i,n,a;return r===0?-.0011481191232:(r<0?i=-r:i=r,i<=1?(n=-.0011481191232+r*(-.112850923276+r*(1.51623048511+r*(-.218472031183+r*.0730002451555))),a=1+r*(14.2482206905+r*(69.7360396285+r*(218.938950816+r*277.067027185)))):(r=1/r,n=.0730002451555+r*(-.218472031183+r*(1.51623048511+r*(-.112850923276+r*-.0011481191232))),a=277.067027185+r*(218.938950816+r*(69.7360396285+r*(14.2482206905+r*1)))),n/a)}return cv=e,cv}/**
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
*/var mv,W5;function gd(){if(W5)return mv;W5=1;function e(r){var i,n,a;return r===0?-.000145727889667:(r<0?i=-r:i=r,i<=1?(n=-.000145727889667+r*(-.290806748131+r*(-13.308504545+r*(199.722374056+r*-11.4311378756))),a=1+r*(139.612587808+r*(2189.01116348+r*(7115.24019009+r*45574.6081453)))):(r=1/r,n=-11.4311378756+r*(199.722374056+r*(-13.308504545+r*(-.290806748131+r*-.000145727889667))),a=45574.6081453+r*(7115.24019009+r*(2189.01116348+r*(139.612587808+r*1)))),n/a)}return mv=e,mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hv,U5;function bd(){if(U5)return hv;U5=1;var e=x(),r=pd(),i=qd(),n=yd(),a=Rd(),t=gd();function v(u){var f,o;return u<-8?(f=u*u,o=e(-u)/u,(-30+u*o*(6*f*o*o-12+f))/(12*u*f*f)):u<-4?r(u)/(u*u):u<-2?i(u):u<2?n(u):u<10?(f=1/u,a(f)/(u*u)):u<100?(f=1/u,t(f)/(u*u)):-e(u)/(12*u*u*u)}return hv=v,hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _v,X5;function Ld(){if(X5)return _v;X5=1;var e=q5(),r=wr(),i=Kr(),n=ne(),a=br(),t=Y(),v=Z(),u=nr(),f=Mr(),o=ar(),s=x(),l=ce(),_=Re(),d=_e(),h=ad(),m=N5(),c=ld(),p=md(),y=$d(),L=bd(),b=e("gammaincinv:compute"),I=.5,E=.3333333333333333,M=.25,w=.2,A=.16666666666666666,g=.08333333333333333,$=.041666666666666664,q=[0,0,0,0,0];function R(N,T,S){var H,F,O,P,V,C,U,J,Q,G,D,k,tr,rr,X,K,ur,er,Yr,pr,j,Nr,sr,Pr,ue,W,z,Lo,N8,I8,No,Io,Mo,Ao,M8,lr,vr,Eo,cr,Ir,qr,wo,So,Po;if(T<I?(P=!0,V=T,wo=-1):(P=!1,V=S,wo=1),cr=0,v(N-1)<1e-4&&(Ir=0,P?T<.001?(Io=T*T,Lo=Io*T,No=Lo*T,pr=No*T,Yr=pr*T,j=T+Io*I+Lo*E+No*M+pr*w+Yr*A):j=-s(1-T):j=-s(S),N===1?(cr=2,Ao=j):(O=i(N),cr=1)),S<1e-30&&N<I&&(Ir=0,j=-s(S*a(N))+(N-1)*s(-s(S*a(N))),cr=1,O=i(N)),N>1&&N<500&&T<1e-80){for(Ir=0,C=1/N,H=1/(N+1),j=(i(N+1)+s(T))*C,j=u(j),rr=j,Eo=0;Eo<10;Eo++)j=rr*u(j*C)*o(1-j*H,C);cr=1,O=i(N)}if(U=1/N*(s(T)+i(N+1)),U<s(w*(1+N))&&cr===0&&(qr=u(U),Ir=0,Nr=N*N,Mo=Nr*N,N8=Mo*N,X=N+1,D=X*X,G=X*D,Q=D*D,K=N+2,J=K*K,ur=N+3,q[0]=1,q[1]=1/X,q[2]=I*(3*N+5)/(D*K),q[3]=E*(31+8*Nr+33*N)/(G*K*ur),q[4]=$*(2888+1179*Mo+125*N8+3971*Nr+5661*N)/(Q*J*ur*(N+4)),j=qr*r(q,qr),O=i(N),cr=1),N<10&&cr===0&&(k=t(N)/(c(N)*l),tr=f(.02,k),S<tr&&(Ir=0,lr=1-N,W=lr*lr,z=W*lr,er=t(-2/N*s(S/k)),j=N*m(er),vr=s(j),j>5?(sr=vr*vr,Pr=sr*vr,ue=Pr*vr,qr=1/j,q[0]=vr-1,q[1]=(3*lr-2*lr*vr+sr-2*vr+2)*I,q[2]=(24*lr*vr-11*W-24*lr-6*sr+12*vr-12-9*lr*sr+6*W*vr+2*Pr)*A,q[3]=(-12*z*vr+8.04*lr*sr-114*W*vr+(72+36*sr)+(3*ue-72*vr+162)*(lr-168*lr*vr)-(12*Pr+25*z)-(22*lr*Pr+36*W*sr+120*W))*g,q[4]=0,j=j-vr+lr*qr*r(q,qr)):(qr=1/j,sr=vr*vr,M8=vr-1,So=vr-lr*qr*M8,So<j&&(j-=So)),O=i(N),cr=1)),v(V-I)<1e-5&&cr===0&&(Ir=0,C=1/N,j=N-E+(.019753086419753086+.007211444248481286*C)*C,O=i(N),cr=1),N<1&&cr===0&&(Ir=0,P?j=u(1/N*(s(V)+i(N+1))):j=u(1/N*(s(1-V)+i(N+1))),O=i(N),cr=1),cr===0)if(Ir=1,C=1/N,qr=n(2*V),er=wo*qr/t(N*I),qr<_)er+=(p(er)+(y(er)+L(er)*C)*C)*C,j=N*m(er),Po=er,I8=-t(N/d)*u(-I*N*Po*Po)/c(N),F=1/I8;else return b("Warning: Overflow problems in one or more steps of the computation."),NaN;return cr<2&&(Ao=h(j,N,Ir,T,S,O,F,P)),Ao}return _v=R,_v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dv,B5;function Nd(){if(B5)return dv;B5=1;var e=B(),r=$e(),i=ir(),n=Ld();function a(t,v,u){return e(t)||e(v)?NaN:v<r?NaN:t>1||t<0?NaN:u===!0?t===0?i:t===1?0:n(v,1-t,t):t===0?0:t===1?i:n(v,t,1-t)}return dv=a,dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $v,V5;function Id(){if(V5)return $v;V5=1;var e=Nd();return $v=e,$v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pv,J5;function Md(){if(J5)return pv;J5=1;var e=5e-324;return pv=e,pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qv,K5;function Ad(){if(K5)return qv;K5=1;var e=Id(),r=x(),i=Y(),n=Md(),a=j4(),t=e5();function v(u,f,o,s){var l,_,d,h,m,c,p,y,L,b,I,E,M,w,A,g,$,q,R,N,T,S,H,F,O,P,V,C,U,J;return o<s?m=e(o,f,!0):m=e(s,f,!1),m/=u,w=f/u,C=i(1+w),q=C*C,R=q*C,N=q*q,T=R*q,S=R*R,H=N*R,F=N*N,O=T*N,p=T*T,V=m-w,A=V*V,g=A*V,$=A*A,P=C+1,y=P*P,L=P*y,b=y*y,I=(C+2)*(C-1)/(3*C),I+=(R+9*q+21*C+5)*V/(36*q*P),I-=(N-13*R+69*q+167*C+46)*A/(1620*y*R),I-=(7*T+21*N+70*R+26*q-93*C-31)*g/(6480*L*N),I-=(75*S+202*T+188*N-888*R-1345*q+118*C+138)*$/(272160*b*T),E=(28*N+131*R+402*q+581*C+208)*(C-1)/(1620*P*R),E-=(35*S-154*T-623*N-1636*R-3983*q-3514*C-925)*V/(12960*y*N),E-=(2132*H+7915*S+16821*T+35066*N+87490*R+141183*q+95993*C+21640)*A/(816480*T*L),E-=(11053*F+53308*H+117010*S+163924*T+116188*N-258428*R-677042*q-481940*C-105497)*g/(14696640*b*S),M=-((3592*H+8375*S-1323*T-29198*N-89578*R-154413*q-116063*C-29632)*(C-1))/(816480*T*y),M-=(442043*O+2054169*F+3803094*H+3470754*S+2141568*T-2393568*N-19904934*R-34714674*q-23128299*C-5253353)*V/(146966400*S*L),M-=(116932*p+819281*O+2378172*F+4341330*H+6806004*S+10622748*T+18739500*N+30651894*R+30869976*q+15431867*C+2919016)*A/(146966400*b*H),c=m+I/u+E/(u*u)+M/(u*u*u),c<=0&&(c=n),U=c-w*r(c)+(1+w)*r(1+w)-w,l=1/(1+w),d=c<w?l:0,h=c<w?1:l,J=(d+h)/2,_=a(U,w),t(_,J,d,h,32,100)}return qv=v,qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var yv,Q5;function Ed(){if(Q5)return yv;Q5=1;var e=Z(),r=Br(),i=pe(),n=Cr(),a=Gr();function t(v,u,f,o,s,l){var _,d,h,m,c,p,y,L,b,I,E,M,w,A,g,$;A=0,d=!1,p=u,c=r(1,1-s),b=n(1e7*u,1e7),y=0,h=b,m=b,L=l;do{if(y=A,m=h,h=b,w=v(p),A=w[0],g=w[1],$=w[2],L-=1,A===0)break;if(g===0?(y===0&&(p===f?u=o:u=f,y=v(u),b=u-p),i(y)*i(A)<0?b<0?b=(p-f)/2:b=(p-o)/2:b<0?b=(p-o)/2:b=(p-f)/2):$===0?b=A/g:(I=2*A,M=2*g-A*($/g),e(M)<1&&e(I)>=e(M)*a?b=A/g:b=I/M,b*g/A<0&&(b=A/g,e(b)>2*e(u)&&(b=(b<0?-1:1)*2*e(u)))),_=e(b/m),_>.8&&_<2&&(b=b>0?(p-f)/2:(p-o)/2,e(b)>p&&(b=i(b)*p),m=b*3),u=p,p-=b,p<f){if(e(f)<1&&e(p)>1&&a/e(p)<e(f)?E=1e3:E=p/f,e(E)<1&&(E=1/E),!d&&E>0&&E<3)b=.99*(u-f),p=u-b,d=!0;else if(b=(u-f)/2,p=u-b,p===f||p===o)break}else if(p>o){if(e(o)<1&&e(p)>1&&a/e(p)<e(o)?E=1e3:E=p/o,e(E)<1&&(E=1/E),!d&&E>0&&E<3)b=.99*(u-o),p=u-b,d=!0;else if(b=(u-o)/2,p=u-b,p===f||p===o)break}b>0?o=u:f=u}while(L&&e(p*c)<e(b));return p}return yv=t,yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Rv,Y5;function wd(){if(Y5)return Rv;Y5=1;var e=v4().assign,r=Z(),i=Gr(),n=Hr();function a(t,v,u,f){return o;function o(s){var l,_,d,h,m;return m=1-s,l=[0,0],e(s,t,v,!0,f,l,1,0),h=l[0]-u,_=l[1],f&&(_=-_),m===0&&(m=n*64),s===0&&(s=n*64),d=_*(-(m*t)+(v-2)*s+1),r(d)<m*s*i&&(d/=m*s),f&&(d=-d),_===0&&(_=(f?-1:1)*n*64),[h,_,d]}}return Rv=a,Rv}var gv,Z5;function Sd(){if(Z5)return gv;Z5=1;var e=wr(),r=ie(),i=Ur(),n=_r(),a=gi(),t=le(),v=Y(),u=Z(),f=nr(),o=ar(),s=xr(),l=Cr(),_=Mr(),d=x(),h=Hr(),m=Kn(),c=gr(),p=k_(),y=D_(),L=ed(),b=Ad(),I=Ed(),E=wd(),M=32,w=1e3,A=[0,0,0,0,0];function g($,q,R,N){var T,S,H,F,O,P,V,C,U,J,Q,G,D,k,tr,rr,X,K,ur,er,Yr,pr,j,Nr,sr,Pr,ue,W,z;if(S=!1,N===0)return[1,0];if(R===0)return[0,1];if($===1){if(q===1)return[R,1-R];G=q,q=$,$=G,G=N,N=R,R=G,S=!0}if(W=0,F=0,P=1,$===.5){if(q===.5)return W=s(R*m),W*=W,z=s(N*m),z*=z,[W,z];q>.5&&(G=q,q=$,$=G,G=N,N=R,R=G,S=!S)}if(q===.5&&$>=.5&&R!==1)Yr={},W=p($,R,Yr),z=Yr.value;else{if(q===1)return R<N?$>1?(W=o(R,1/$),z=-i(d(R)/$)):(W=o(R,1/$),z=1-W):(W=f(n(-N)/$),z=-i(n(-N)/$)),S&&(G=z,z=W,W=G),[W,z];if($+q>5)R>.5&&(G=q,q=$,$=G,G=N,N=R,R=G,S=!S),U=_($,q),C=l($,q),v(U)>C-U&&U>5?(W=y($,q,R),z=1-W):(sr=$+q,O=a(v($/sr)),H=U/sr,H>=.2&&H<=.8&&sr>=10?(Q=o(R,1/$),Q<.0025&&$+q<200?W=Q*o($*t($,q),1/$):W=L(R,sr,O),z=1-W):($<q&&(G=q,q=$,$=G,G=N,N=R,R=G,S=!S),J=0,q<2&&(J=t($,q)),J===0?z=1:(z=o(q*N*J,1/q),W=1-z)),z>1e-5&&(W=b($,q,R,N),z=1-W));else if($<1&&q<1){if(er=(1-$)/(2-$-q),rr=r(er,$,q)-R,u(rr)/R<c*3)return S?[1-er,er]:[er,1-er];rr<0&&(G=q,q=$,$=G,G=N,N=R,R=G,S=!S,er=1-er),ur=o($*R*t($,q),1/$),W=ur/(1+ur),z=1/(1+ur),W>er&&(W=er),P=er}else $>1&&q>1?(er=($-1)/($+q-2),D=(q-1)/($+q-2),K=r(er,$,q)-R,K<0&&(G=q,q=$,$=G,G=N,N=R,R=G,G=D,D=er,er=G,S=!S),X=d(R*$*t($,q))/$,W=f(X),z=W<.9?1-W:-i(X),q<$&&W<.2&&(k=$-1,tr=q-1,pr=$*$,j=$*pr,Nr=q*q,A[0]=0,A[1]=1,A[2]=tr/k,k*=k,A[3]=tr*(3*$*q+5*q+pr-$-4)/(2*($+2)*k),k*=$+1,A[4]=tr*(33*$*Nr+31*Nr+8*pr*Nr-30*$*q-47*q+11*pr*q+6*j*q+18+4*$-j+pr*pr-10*pr),A[4]/=3*($+3)*($+2)*k,W=e(A,W)),W>er&&(W=er),P=er):(q<$&&(G=q,q=$,$=G,G=N,N=R,R=G,S=!S),o(R,1/$)<.5?(W=o(R*$*t($,q),1/$),W===0&&(W=h),z=1-W):(z=o(1-o(R,q*t($,q)),1/q),z===0&&(z=h),W=1-z))}return W>.5&&(G=q,q=$,$=G,G=N,N=R,R=G,G=z,z=W,W=G,S=!S,Pr=1-P,ue=1-F,F=Pr,P=ue),F===0&&(S?(F=c,W<F&&(W=F)):F=h,W<F&&(W=F)),T=M,W<1e-50&&($<1||q<1)&&(T*=3,T/=2),V=E($,q,R<N?R:N,R>=N),W=I(V,W,F,P,T,w),W===F&&(W=0),S?[1-W,W]:[W,1-W]}return gv=g,gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bv,j5;function Lv(){if(j5)return bv;j5=1;var e=Sd();return bv=e,bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nv,z5;function Pd(){if(z5)return Nv;z5=1;var e=B(),r=Lv();function i(n,a,t,v){return e(n)||e(a)||e(t)?NaN:a<=0||t<=0?NaN:n<0||n>1?NaN:v?r(a,t,1-n,n)[0]:r(a,t,n,1-n)[0]}return Nv=i,Nv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv,x5;function r7(){if(x5)return Iv;x5=1;var e=Pd();return Iv=e,Iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mv,e7;function Fd(){if(e7)return Mv;e7=1;var e=r7(),r=B();function i(n,a,t){return r(n)||r(a)||r(t)||a<=0||t<=0||n<0||n>1?NaN:e(n,a,t)}return Mv=i,Mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av,i7;function Od(){if(i7)return Av;i7=1;var e=dr(),r=r7(),i=B();function n(a,t){if(i(a)||i(t)||a<=0||t<=0)return e(NaN);return v;function v(u){return i(u)||u<0||u>1?NaN:r(u,a,t)}}return Av=n,Av}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ev,n7;function Td(){if(n7)return Ev;n7=1;var e=or(),r=Fd(),i=Od();return e(r,"factory",i),Ev=r,Ev}var Hd=Td(),Cd=Lr(Hd);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wv,a7;function Gd(){if(a7)return wv;a7=1;var e=he(),r=Y(),i=B();function n(a,t,v){var u,f;return i(a)||i(t)||i(v)||v<0?NaN:v===0?a<t?0:1:(u=v*r(2),f=a-t,.5*e(-f/u))}return wv=n,wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv,t7;function kd(){if(t7)return Sv;t7=1;var e=B();function r(i,n){return e(i)||e(n)?NaN:i<n?0:1}return Sv=r,Sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv,u7;function Dd(){if(u7)return Pv;u7=1;var e=dr(),r=B();function i(n){if(r(n))return e(NaN);return a;function a(t){return r(t)?NaN:t<n?0:1}}return Pv=i,Pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv,v7;function Wd(){if(v7)return Fv;v7=1;var e=or(),r=kd(),i=Dd();return e(r,"factory",i),Fv=r,Fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ov,o7;function Ud(){if(o7)return Ov;o7=1;var e=dr(),r=Wd().factory,i=B(),n=Y(),a=he();function t(v,u){var f;if(i(v)||i(u)||u<0)return e(NaN);if(u===0)return r(v);return f=u*n(2),o;function o(s){var l;return i(s)?NaN:(l=s-v,.5*a(-l/f))}}return Ov=t,Ov}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv,f7;function Xd(){if(f7)return Tv;f7=1;var e=or(),r=Gd(),i=Ud();return e(r,"factory",i),Tv=r,Tv}var Bd=Xd(),s7=Lr(Bd);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv,l7;function Vd(){if(l7)return Hv;l7=1;var e=nr(),r=ar(),i=Y(),n=_e(),a=ir(),t=B();function v(u,f,o){var s,l,_;return t(u)||t(f)||t(o)||o<0?NaN:o===0?u===f?a:0:(s=r(o,2),l=1/i(s*n),_=-1/(2*s),l*e(_*r(u-f,2)))}return Hv=v,Hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cv,c7;function Jd(){if(c7)return Cv;c7=1;var e=ir(),r=B();function i(n,a){return r(n)||r(a)?NaN:n===a?e:0}return Cv=i,Cv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv,m7;function Kd(){if(m7)return Gv;m7=1;var e=dr(),r=ir(),i=B();function n(a){if(i(a))return e(NaN);return t;function t(v){return i(v)?NaN:v===a?r:0}}return Gv=n,Gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kv,h7;function Qd(){if(h7)return kv;h7=1;var e=or(),r=Jd(),i=Kd();return e(r,"factory",i),kv=r,kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv,_7;function Yd(){if(_7)return Dv;_7=1;var e=dr(),r=Qd().factory,i=B(),n=Y(),a=nr(),t=ar(),v=_e();function u(f,o){var s,l,_;if(i(f)||i(o)||o<0)return e(NaN);if(o===0)return r(f);return s=t(o,2),l=1/n(s*v),_=-1/(2*s),d;function d(h){return i(h)?NaN:l*a(_*t(h-f,2))}}return Dv=u,Dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv,d7;function Zd(){if(d7)return Wv;d7=1;var e=or(),r=Vd(),i=Yd();return e(r,"factory",i),Wv=r,Wv}var jd=Zd(),$7=Lr(jd);/**
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
*/var Uv,p7;function zd(){if(p7)return Uv;p7=1;function e(r){var i,n,a;return r===0?-.0005087819496582806:(r<0?i=-r:i=r,i<=1?(n=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),a=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,n=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),a=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),n/a)}return Uv=e,Uv}/**
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
*/var Xv,q7;function xd(){if(q7)return Xv;q7=1;function e(r){var i,n,a;return r===0?-.20243350835593876:(r<0?i=-r:i=r,i<=1?(n=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),a=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,n=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),a=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),n/a)}return Xv=e,Xv}/**
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
*/var Bv,y7;function r$(){if(y7)return Bv;y7=1;function e(r){var i,n,a;return r===0?-.1311027816799519:(r<0?i=-r:i=r,i<=1?(n=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),a=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,n=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),a=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),n/a)}return Bv=e,Bv}/**
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
*/var Vv,R7;function e$(){if(R7)return Vv;R7=1;function e(r){var i,n,a;return r===0?-.0350353787183178:(r<0?i=-r:i=r,i<=1?(n=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),a=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,n=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),a=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),n/a)}return Vv=e,Vv}/**
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
*/var Jv,g7;function i$(){if(g7)return Jv;g7=1;function e(r){var i,n,a;return r===0?-.016743100507663373:(r<0?i=-r:i=r,i<=1?(n=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),a=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,n=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),a=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),n/a)}return Jv=e,Jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Kv,b7;function n$(){if(b7)return Kv;b7=1;var e=B(),r=Y(),i=x(),n=ir(),a=fr(),t=zd(),v=xd(),u=r$(),f=e$(),o=i$(),s=.08913147449493408,l=2.249481201171875,_=.807220458984375,d=.9399557113647461,h=.9836282730102539;function m(c){var p,y,L,b,I,E;return e(c)?NaN:c===1?n:c===-1?a:c===0?c:c>1||c<-1?NaN:(c<0?(p=-1,y=-c):(p=1,y=c),b=1-y,y<=.5?(I=y*(y+10),E=t(y),p*(I*s+I*E)):b>=.25?(I=r(-2*i(b)),b-=.25,E=v(b),p*(I/(l+E))):(b=r(-i(b)),b<3?(L=b-1.125,E=u(L),p*(_*b+E*b)):b<6?(L=b-3,E=f(L),p*(d*b+E*b)):(L=b-6,E=o(L),p*(h*b+E*b))))}return Kv=m,Kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qv,L7;function N7(){if(L7)return Qv;L7=1;var e=n$();return Qv=e,Qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yv,I7;function a$(){if(I7)return Yv;I7=1;var e=N7(),r=B(),i=Y();function n(a,t,v){var u,f;return r(t)||r(v)||r(a)||v<0||a<0||a>1?NaN:v===0?t:(u=t,f=v*i(2),u+f*e(2*a-1))}return Yv=n,Yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zv,M7;function t$(){if(M7)return Zv;M7=1;var e=B();function r(i,n){return e(i)||i<0||i>1?NaN:n}return Zv=r,Zv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jv,A7;function u$(){if(A7)return jv;A7=1;var e=dr(),r=B();function i(n){if(r(n))return e(NaN);return a;function a(t){return r(t)||t<0||t>1?NaN:n}}return jv=i,jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv,E7;function v$(){if(E7)return zv;E7=1;var e=or(),r=t$(),i=u$();return e(r,"factory",i),zv=r,zv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xv,w7;function o$(){if(w7)return xv;w7=1;var e=dr(),r=v$().factory,i=N7(),n=B(),a=Y();function t(v,u){var f,o;if(n(v)||n(u)||u<0)return e(NaN);return u===0&&r(v),f=v,o=u*a(2),s;function s(l){return n(l)||l<0||l>1?NaN:f+o*i(2*l-1)}}return xv=t,xv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ro,S7;function f$(){if(S7)return ro;S7=1;var e=or(),r=a$(),i=o$();return e(r,"factory",i),ro=r,ro}var s$=f$(),l$=Lr(s$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eo,P7;function c$(){if(P7)return eo;P7=1;var e=ie(),r=B(),i=ar();function n(a,t){var v,u,f;return r(a)||r(t)||t<=0?NaN:a===0?.5:(v=i(a,2),t>2*v?(f=v/(t+v),u=e(f,.5,t/2,!0,!0)/2):(f=t/(t+v),u=e(f,t/2,.5,!0,!1)/2),a>0?1-u:u)}return eo=n,eo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var io,F7;function m$(){if(F7)return io;F7=1;var e=dr(),r=ie(),i=B(),n=ar();function a(t){if(i(t)||t<=0)return e(NaN);return v;function v(u){var f,o,s;return i(u)?NaN:u===0?.5:(f=n(u,2),t>2*f?(s=f/(t+f),o=r(s,.5,t/2,!0,!0)/2):(s=t/(t+f),o=r(s,t/2,.5,!0,!1)/2),u>0?1-o:o)}}return io=a,io}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var no,O7;function h$(){if(O7)return no;O7=1;var e=or(),r=c$(),i=m$();return e(r,"factory",i),no=r,no}var _$=h$(),T7=Lr(_$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ao,H7;function d$(){if(H7)return ao;H7=1;var e=B(),r=le(),i=Y(),n=ar();function a(t,v){var u;return e(t)||e(v)||v<=0?NaN:(u=i(v)*r(v/2,.5),n(v/(v+n(t,2)),(1+v)/2)/u)}return ao=a,ao}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var to,C7;function $$(){if(C7)return to;C7=1;var e=dr(),r=B(),i=le(),n=Y(),a=ar();function t(v){var u,f;if(r(v)||v<=0)return e(NaN);return f=n(v)*i(v/2,.5),u=(1+v)/2,o;function o(s){return r(s)?NaN:a(v/(v+a(s,2)),u)/f}}return to=t,to}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uo,G7;function p$(){if(G7)return uo;G7=1;var e=or(),r=d$(),i=$$();return e(r,"factory",i),uo=r,uo}var q$=p$(),vo=Lr(q$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oo,k7;function y$(){if(k7)return oo;k7=1;var e=Lv(),r=B(),i=pe(),n=Y();function a(t,v){var u,f;return r(v)||r(t)||v<=0||t<0||t>1?NaN:(u=t>.5?1-t:t,f=e(v/2,.5,2*u,1-2*u),i(t-.5)*n(v*f[1]/f[0]))}return oo=a,oo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fo,D7;function R$(){if(D7)return fo;D7=1;var e=dr(),r=Lv(),i=B(),n=pe(),a=Y();function t(v){if(i(v)||v<=0)return e(NaN);return u;function u(f){var o,s;return i(f)||f<0||f>1?NaN:(o=f>.5?1-f:f,s=r(v/2,.5,2*o,1-2*o),n(f-.5)*a(v*s[1]/s[0]))}}return fo=t,fo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var so,W7;function g$(){if(W7)return so;W7=1;var e=or(),r=y$(),i=R$();return e(r,"factory",i),so=r,so}var b$=g$(),L$=Lr(b$);const U7=1e-9,X7=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,B7=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function N$(e){const[r,i,n]=e;return r<n?r<=i&&i<=n?null:`requires lo <= peak <= hi, got lo=${r}, peak=${i}, hi=${n}`:`requires lo < hi, got lo=${r}, hi=${n}`}function I$(e){const[r,i]=e;return r<i?null:`requires lo < hi, got lo=${r}, hi=${i}`}function M$(e){const[r,i]=e;return r>0&&i>0?null:`requires a > 0 and b > 0, got a=${r}, b=${i}`}function V7(e){const r=e[1];return r>0?null:`requires sigma > 0, got sigma=${r}`}function A$(e){const[r,i]=e;return 0<r&&r<i?null:`requires 0 < lo < hi, got lo=${r}, hi=${i}`}function J7(e){const[,r,i]=e;return r<=0?`requires sigma > 0, got sigma=${r}`:i<=0?`requires df > 0, got df=${i}`:null}function K7(e,r){const i=r-e;return{cdf:n=>n<=e?0:n>=r?1:(n-e)/i,ppf:n=>e+n*i,pdf:n=>n>=e&&n<=r?1/i:0}}function E$(e,r,i){const n=i-e,a=(r-e)/n;return{cdf:t=>t<=e?0:t>=i?1:t<=r?(t-e)*(t-e)/(n*(r-e)):1-(i-t)*(i-t)/(n*(i-r)),ppf:t=>t<a?e+Math.sqrt(t*n*(r-e)):i-Math.sqrt((1-t)*n*(i-r)),pdf:t=>t<e||t>i?0:t===r?2/n:t<r?2*(t-e)/(n*(r-e)):2*(i-t)/(n*(i-r))}}function Q7(e,r){return{cdf:i=>s7(i,e,r),ppf:i=>l$(i,e,r),pdf:i=>$7(i,e,r)}}function lo(e,r,i){return{cdf:n=>T7((n-e)/r,i),ppf:n=>e+r*L$(n,i),pdf:n=>vo((n-e)/r,i)/r}}function w$(e,r){return{cdf:i=>K1(i,e,r),ppf:i=>Cd(i,e,r),pdf:i=>$_(i,e,r)}}const S$=1e-10,P$=20,F$=1e-300,Y7=24,O$=60,T$=.001;function co(e,r,i,n,a){return(r-e)/6*(i+4*n+a)}function mo(e,r,i,n,a,t,v,u){const f=(r+i)/2,o=(r+f)/2,s=(f+i)/2,l=e(o),_=e(s),d=co(r,f,n,l,a),h=co(f,i,a,_,t),m=d+h,c=S$*Math.max(Math.abs(m),F$);return u>=P$||Math.abs(m-v)<=15*c?m+(m-v)/15:mo(e,r,f,n,l,a,d,u+1)+mo(e,f,i,a,_,t,h,u+1)}function H$(e,r,i){if(!(i>r))return 0;const n=(r+i)/2,a=e(r),t=e(n),v=e(i);return mo(e,r,i,a,t,v,co(r,i,a,t,v),0)}const C$=(()=>{const e=[0];for(let r=Y7;r>=1;r--)e.push(.5*2**-r);for(let r=Y7;r>=0;r--)e.push(1-.5*2**-r);return e})();function G$(e){return Z7(e,C$)}function Z7(e,r){let i=0;for(let n=0;n<r.length-1;n++)i+=H$(e,r[n],r[n+1]);return i}function k$(e,r,i,n){const a=[r];for(let t=n;t>=1;t--){const v=i*2**-t;v>r&&a.push(v)}return a.push(i),Z7(e,a)}function D$(e,r,i){const n=ae(e,r),a=ae(e,i)-n;return a>0?a*G$(t=>Math.min(Math.max(e.ppf(n+t*a),r),i)):0}function j7(e,r,i,n){return n>i?e*(n**3-i**3)/3+r*(n**2-i**2)/2:0}function W$(e,r,i){const[n,a]=e,t=Math.max(n,r),v=Math.min(a,i);return v>t?(v*v-t*t)/(2*(a-n)):0}function U$(e,r,i){const[n,a,t]=e,v=t-n,u=a-n,f=t-a;let o=0;if(u>0){const s=2/(v*u);o+=j7(s,-n*s,Math.max(n,r),Math.min(a,i))}if(f>0){const s=2/(v*f);o+=j7(-s,t*s,Math.max(a,r),Math.min(t,i))}return o}function X$(e,r,i){const[n,a]=e,t=Math.min(Math.max(r,0),1),v=Math.min(Math.max(i,0),1);return v>t?n/(n+a)*(K1(v,n+1,a)-K1(t,n+1,a)):0}function z7(e){return Number.isFinite(e)?$7(e,0,1):0}function ge(e){return e===-1/0?0:e===1/0?1:s7(e,0,1)}function B$(e,r,i){const[n,a]=e,t=(r-n)/a,v=(i-n)/a;return n*(ge(v)-ge(t))-a*(z7(v)-z7(t))}function V$(e,r,i){const[n,a]=e,t=v=>Number.isFinite(v)?(v-n)/a-a:v;return Math.exp(n+a*a/2)*(ge(t(i))-ge(t(r)))}function J$(e,r,i){const[n,a]=e,t=Math.log(n),v=Math.log(a),u=Math.max(t,r),f=Math.min(v,i);return f>u?(Math.exp(f)-Math.exp(u))/(v-t):0}function ho(e,r){return-(r+e*e)*vo(e,r)/(r-1)}function K$(e,r,i){if(!Number.isFinite(e)||!Number.isFinite(r)){if(i<=1)return!Number.isFinite(e)&&!Number.isFinite(r)?NaN:Number.isFinite(e)?1/0:-1/0;const n=a=>Number.isFinite(a)?ho(a,i):0;return n(r)-n(e)}return Math.abs(i-1)<T$?D$(lo(0,1,i),e,r):ho(r,i)-ho(e,i)}function Q$(e,r,i){const[n,a,t]=e,v=(r-n)/a,u=(i-n)/a,f=o=>o===-1/0?0:o===1/0?1:T7(o,t);return n*(f(u)-f(v))+a*K$(v,u,t)}function Y$(e,r,i){const[n,a,t]=e;if(i===1/0)return 1/0;const v=vo(0,t)/a,u=o=>{const s=(o-n)/a;return v*(1+s*s/t)**(-(t+1)/2)},f=r===-1/0?0:Math.exp(r-i);return Math.exp(i)*k$(o=>o<=0?0:u(i+Math.log(o)),f,1,O$)}const Sr={tri:{signature:"tri(lo, peak, hi)",note:"triangular, mode at peak; lo <= peak <= hi, lo < hi",nParams:3,check:N$,build:e=>({latent:E$(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:U$},uniform:{signature:"uniform(lo, hi)",note:"uniform; lo < hi",nParams:2,check:I$,build:e=>({latent:K7(e[0],e[1]),logX:!1}),partialFirstMoment:W$},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:M$,build:e=>({latent:w$(e[0],e[1]),logX:!1}),partialFirstMoment:X$},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:V7,build:e=>({latent:Q7(e[0],e[1]),logX:!1}),partialFirstMoment:B$},lognormal:{signature:"lognormal(mu, sigma)",note:"log-normal; mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:V7,build:e=>({latent:Q7(e[0],e[1]),logX:!0}),partialFirstMoment:V$},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:A$,build:e=>({latent:K7(Math.log(e[0]),Math.log(e[1])),logX:!0}),partialFirstMoment:J$},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma is the scale, not the standard deviation; sigma > 0, df > 0",nParams:3,check:J7,build:e=>({latent:lo(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:Q$},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; mu/sigma are the location/scale of log(X), so sigma is not its standard deviation; sigma > 0, df > 0",nParams:3,check:J7,build:e=>({latent:lo(e[0],e[1],e[2]),logX:!0}),partialFirstMoment:Y$}},Z$=["normal","lognormal","t","logt"],j$=["t","logt"];function z$(e){const[r,i]=e;return r<i?null:`requires lo < hi in the truncation window, got lo=${r}, hi=${i}`}function x$(e,r){const i=r.signature.split("(",2)[1].slice(0,-1);return{signature:`${e}-trunc(${i}, lo, hi)`,note:`${r.note}; explicitly truncated to [lo, hi]`,nParams:r.nParams+2,check:n=>r.check(n.slice(0,r.nParams))??z$(n.slice(r.nParams)),build:n=>r.build(n),partialFirstMoment:r.partialFirstMoment,hasTruncWindow:!0}}for(const e of Z$)Sr[`${e}-trunc`]=x$(e,Sr[e]);function rp(e){return B7.test(e)}function _o(e){const r=B7.exec(e);if(!r)throw new Error(`malformed family spec ${JSON.stringify(e)}: expected "family(num, num, ...)"`);const i=r[1],n=r[2],a=Sr[i];if(a===void 0)throw new Error(`unknown distribution family ${JSON.stringify(i)}; available: `+Object.values(Sr).map(f=>f.signature).join(", "));const t=n.split(",").map(f=>f.trim());for(const f of t)if(!X7.test(f))throw new Error(`family spec ${JSON.stringify(e.trim())}: bad numeric argument ${JSON.stringify(f)}`);const v=t.map(Number);if(v.length!==a.nParams)throw new Error(`${i} takes ${a.nParams} arguments as ${a.signature}, got ${v.length}`);const u=a.check(v);if(u)throw new Error(`${e.trim()}: ${a.signature} ${u}`);return a.hasTruncWindow?{family:i,params:v.slice(0,-2),text:e.trim(),truncWindow:[v[v.length-2],v[v.length-1]]}:{family:i,params:v,text:e.trim(),truncWindow:null}}function x7(e){if(!j$.includes(e.family))return null;const r=`${e.family}-trunc`;return`${Sr[e.family].signature} needs an explicit window in a new response: use ${Sr[r].signature} (code helper ${r.replace(/-/g,"_")}), with [lo, hi] the widest range you consider possible. A Student-t tail is heavy enough that without a window the distribution, or a formula computed from it, can have no finite mean`}function $r(e,...r){return _o(`${e}(${r.map(r8).join(", ")})`).text}function r8(e){if(typeof e!="number"||!Number.isFinite(e))throw new Error(`family spec parameter must be a finite number, got ${JSON.stringify(e)}`);return String(e)}function ae(e,r){return r===-1/0?0:r===1/0?1:e.cdf(r)}class ep{constructor(r,i,n,a,t,v,u,f,o){this.spec=r,this.latent=i,this.logX=n,this.cdfLo=a,this.mass=t,this.xLo=v,this.xHi=u,this.yLo=f,this.yHi=o}inverseCdf(r){const i=this.latent.ppf(this.cdfLo+r*this.mass),n=this.logX?Math.exp(i):i;return Math.min(Math.max(n,this.xLo),this.xHi)}cdf(r){if(r<=this.xLo)return 0;if(r>=this.xHi)return 1;if(this.logX&&r<=0)return 0;const i=this.logX?Math.log(r):r;return(ae(this.latent,i)-this.cdfLo)/this.mass}mean(){const r=Sr[this.spec.family];if(r===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);const n=r.partialFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isFinite(n)?n:null}pdf(r){return r<this.xLo||r>this.xHi?0:this.logX?r<=0?0:this.latent.pdf(Math.log(r))/r/this.mass:this.latent.pdf(r)/this.mass}}function e8(e,r,i){const n=Sr[e.family];if(n===void 0)throw new Error(`unknown distribution family ${JSON.stringify(e.family)}`);const{latent:a,logX:t}=n.build(e.params);let v=r===null?-1/0:r,u=i===null?1/0:i;e.truncWindow!==null&&(v=Math.max(v,e.truncWindow[0]),u=Math.min(u,e.truncWindow[1]));let f,o;t?(f=v>0?Math.log(v):-1/0,o=u>0?Math.log(u):-1/0):(f=v,o=u);const s=ae(a,f),_=ae(a,o)-s;if(_<U7){let d=`the variable's range [${r}, ${i}]`;throw e.truncWindow!==null&&(d+=` ∩ the spec's truncation window [${e.truncWindow[0]}, ${e.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(e.text)}: essentially no probability mass in ${d} (mass ${_.toExponential(2)} < ${U7})`)}return new ep(e,a,t,s,_,v,u,f,o)}const te="pointmass",ip="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",np=new RegExp(`^\\s*${te}\\s*\\(\\s*(${ip})\\s*\\)\\s*$`),ap=new RegExp(`^\\s*${te}\\b`);function tp(e){const r=np.exec(e);if(r===null)throw new Error(`malformed ${te} spec ${JSON.stringify(e)}: expected "${te}(num)"`);return Number(r[1])}function i8(e){return ap.test(e)?tp(e):null}const be="mixture",$o=2,po=6,n8=1e-6,a8=200,Le=1e-10,qo=.001,t8=1e-9,u8=10,v8=new RegExp(`^\\s*${be}\\b`),up=new RegExp(`^\\s*${be}\\s*\\(([\\s\\S]*)\\)\\s*$`),vp=new RegExp(`^\\s*${te}\\b`),o8="<weight>: <family spec>",op='a point mass cannot be a mixture component: for "x, give or take very little, with probability p", use a narrow triangular component tri(x - w, x, x + w) with a small w of your choosing',fp="a nested mixture spec; a mixture spec is flat: write the nested components with their weights multiplied by the outer weight (the mixture() code helper flattens nesting itself)",f8='a mixture component is a distribution-family string like "beta(2, 8)" (piecewise-linear components are not supported)';function sp(e){const r=[];let i=0,n=0;for(let a=0;a<e.length;a++){const t=e[a];if(t==="("||t==="[")i+=1;else if(t===")"||t==="]"){if(i-=1,i<0)return null}else t===","&&i===0&&(r.push(e.slice(n,a)),n=a+1)}return i!==0?null:(r.push(e.slice(n)),r)}function s8(e){if(v8.test(e))throw new Error(fp);if(vp.test(e))throw new Error(op);if(!rp(e))throw new Error(f8);return _o(e)}function lp(e){if(!X7.test(e))throw new Error(`malformed weight ${JSON.stringify(e)}: expected a number like 0.3`);const r=Number(e);if(!Number.isFinite(r))throw new Error(`weight ${e} is not finite`);if(r<=0)throw new Error(`weight ${e} is not positive; every weight must be positive`);return r}function cp(e){let r=0;for(const i of e)r+=i;return Math.abs(r-1)<=n8?null:`weights sum to ${Number(r.toPrecision(10))}, not 1 (tolerance ${n8})`}function yo(e){return e instanceof Error?e.message:String(e)}function l8(e){if(typeof e!="string")throw new Error(`mixture spec must be a string, got ${typeof e}`);const r=e.trim(),i=up.exec(e),n=i===null?null:sp(i[1]);if(n===null)throw new Error(`malformed mixture spec ${JSON.stringify(r)}: expected "${be}(${o8}, ...)" with balanced parentheses`);if(n.length===1&&n[0].trim()==="")throw new Error(`mixture spec ${JSON.stringify(r)} has no components; it needs between ${$o} and ${po}`);const a=n.length;if(a<$o){const u=n[0].indexOf(":"),f=(u<0?n[0]:n[0].slice(u+1)).trim();throw new Error(`mixture spec ${JSON.stringify(r)} has ${a} component; a mixture spec needs at least ${$o} (a one-component mixture is just its family string: write ${JSON.stringify(f)} on its own)`)}if(a>po)throw new Error(`mixture spec ${JSON.stringify(r)} has ${a} components; at most ${po} are allowed`);const t=[];n.forEach((u,f)=>{const o=u.trim(),s=`mixture spec ${JSON.stringify(r)}: component ${f+1} of ${a} (${JSON.stringify(o)})`;try{const l=o.indexOf(":");if(l<0)throw new Error(`expected "${o8}"`);const _=lp(o.slice(0,l).trim());t.push([_,s8(o.slice(l+1).trim())])}catch(l){throw new Error(`${s}: ${yo(l)}`)}});const v=cp(t.map(([u])=>u));if(v!==null)throw new Error(`mixture spec ${JSON.stringify(r)}: ${v}`);return{components:t,text:r}}function c8(e){return v8.test(e)?l8(e):null}function m8(e,r){return`mixture spec component ${r} of ${e.components.length} (${e.components[r-1][1].text})`}function mp(e){for(const[r,[,i]]of e.components.entries()){const n=x7(i);if(n!==null)return`${m8(e,r+1)}: ${n}`}return null}function hp(e){if(!Array.isArray(e))throw new Error(`mixture() takes a list of (weight, spec) pairs, got ${typeof e}`);const r=[];e.forEach((n,a)=>{const t=`mixture(): components[${a}]`;if(!Array.isArray(n)||n.length!==2)throw new Error(`${t}: expected a (weight, spec) pair, got ${JSON.stringify(n)}`);const[v,u]=n;if(typeof v!="number")throw new Error(`${t}: weight must be a real number, got ${JSON.stringify(v)}`);if(!Number.isFinite(v))throw new Error(`${t}: weight must be finite, got ${v}`);if(v<=0)throw new Error(`${t}: weight must be positive, got ${v}`);if(typeof u!="string")throw new Error(`${t}: ${f8}; got ${JSON.stringify(u)}`);try{const f=c8(u);if(f!==null){for(const[o,s]of f.components)r.push([v*o,s.text]);return}r.push([v,s8(u).text])}catch(f){throw new Error(`${t}: ${yo(f)}`)}});const i=`${be}(`+r.map(([n,a])=>`${r8(n)}: ${a}`).join(", ")+")";return l8(i).text}function _p(){const e=Math.round(1/qo)-1,r=Math.round(Math.log10(qo/t8)*u8),i=[];for(let v=0;v<r;v++)i.push(t8*10**(v/u8));const n=[];for(let v=1;v<=e;v++)n.push(v*qo);const a=i.map(v=>1-v).reverse(),t=Float64Array.from([...i,...n,...a]);for(let v=1;v<t.length;v++)if(!(t[v]>t[v-1]))throw new Error("mixture-spec inverse-CDF table u nodes are not strictly increasing");return t}const Ro=_p();class dp{constructor(r,i,n){ve(this,"weights");ve(this,"supportLo");ve(this,"supportHi");ve(this,"tableXNodes",null);if(this.spec=r,this.components=n,i.length!==n.length)throw new Error(`${i.length} weights for ${n.length} components`);let a=0;for(const t of i)a+=t;this.weights=i.map(t=>t/a),this.supportLo=Math.min(...n.map(t=>t.inverseCdf(0))),this.supportHi=Math.max(...n.map(t=>t.inverseCdf(1)))}cdf(r){let i=0;return this.components.forEach((n,a)=>{i+=this.weights[a]*n.cdf(r)}),i}pdf(r){let i=0;return this.components.forEach((n,a)=>{i+=this.weights[a]*n.pdf(r)}),i}mean(){let r=0;for(const[i,n]of this.components.entries()){const a=n.mean();if(a===null)return null;r+=this.weights[i]*a}return r}quantile(r){if(!(r>=0&&r<=1))throw new Error(`mixture spec ${JSON.stringify(this.spec.text)}: quantile level ${r} not in [0, 1]`);if(r===0)return this.supportLo;if(r===1)return this.supportHi;const i=this.components.map(v=>v.inverseCdf(r));let[n,a]=this.checkedBracket(r,Math.min(...i),Math.max(...i));for(let v=0;v<a8;v++){const u=n+(a-n)/2;if(!(u>n&&u<a))break;this.cdf(u)>=r?a=u:n=u}const t=n+(a-n)/2;if(t>n&&t<a&&!(n<=0&&a>=0))throw new Error(`mixture spec ${JSON.stringify(this.spec.text)}: quantile bisection did not reach float resolution in ${a8} steps at level ${r}`);return a}checkedBracket(r,i,n){const a=this.cdf(i)>r+Le,t=this.cdf(n)<r-Le,v=u=>new Error(`mixture spec ${JSON.stringify(this.spec.text)}: the components' inverse CDFs put the quantile bracket on the wrong side of level ${r}, and the support is unbounded on the ${u} side, where the bracket would be repaired`);if(a){if(!Number.isFinite(this.supportLo))throw v("lower");[i,n]=[this.supportLo,i]}if(t){if(!Number.isFinite(this.supportHi))throw v("upper");[i,n]=[n,this.supportHi]}if(this.cdf(i)>r+Le||this.cdf(n)<r-Le)throw new Error(`mixture spec ${JSON.stringify(this.spec.text)}: no quantile bracket contains level ${r}, even from the support ends`);return[i,n]}inverseCdf(r){const i=Ro,n=i.length-1;if(!(r>=i[0]&&r<=i[n]))return this.quantile(r);const a=this.inverseCdfTableXNodes();if(r===i[n])return a[n];let t=0,v=n;for(;t<v-1;){const f=t+v>>1;i[f]<=r?t=f:v=f}return(a[t+1]-a[t])/(i[t+1]-i[t])*(r-i[t])+a[t]}inverseCdfTableXNodes(){if(this.tableXNodes===null){const r=new Float64Array(Ro.length);let i=-1/0;Ro.forEach((n,a)=>{i=Math.max(i,this.quantile(n)),r[a]=i}),this.tableXNodes=r}return this.tableXNodes}}function $p(e,r,i){const n=e.components.map(([,a],t)=>{try{return e8(a,r,i)}catch(v){throw new Error(`${m8(e,t+1)}: ${yo(v)}`)}});return new dp(e,e.components.map(([a])=>a),n)}const h8=new Map;function pp(e,r,i){const n=JSON.stringify([e.text,r,i]);let a=h8.get(n);return a===void 0&&(a=$p(e,r,i),h8.set(n,a)),a}const _8=20,qp=1e-9;function Ne(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function go(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function yp(e,r,i){const n=`lloads.latents[${r}]`;if(!go(e))return`${n}: expected an object, got ${Ne(e)}`;for(const t of["name","description"]){const v=e[t];if(typeof v!="string"||v.trim()==="")return`${n}.${t}: expected a non-empty string, got ${JSON.stringify(v)}`}const a=e.loadings;if(!go(a))return`${n}.loadings: expected an object, got ${Ne(a)}`;if(Object.keys(a).length===0)return`${n}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[t,v]of Object.entries(a)){if(!i.has(t))return`${n}.loadings: '${t}' is not one of the subjective variables this jprob samples (${[...i].sort().join(", ")}), so a loading on it would have no effect`;if(typeof v!="number")return`${n}.loadings['${t}']: expected a number, got ${JSON.stringify(v)}`;if(!Number.isFinite(v))return`${n}.loadings['${t}']: ${v} is not finite`;if(v<-1||v>1)return`${n}.loadings['${t}']: ${v} not in [-1, 1]`}return null}function Rp(e,r,i=[]){if(e==null)return null;if(!go(e))return`lloads: expected an object, got ${Ne(e)}`;const n=Object.keys(e).filter(o=>o!=="latents").sort();if(n.length>0)return`lloads: unexpected key(s) ${JSON.stringify(n)}`;const a=e.latents;if(!Array.isArray(a))return`lloads.latents: expected a list, got ${Ne(a)}`;if(a.length>_8)return`lloads.latents: ${a.length} latents exceeds the cap of ${_8}`;const t=new Set(r);for(const[o,s]of a.entries()){const l=yp(s,o,t);if(l!==null)return l}const v=new Map;for(const o of a)for(const[s,l]of Object.entries(o.loadings))v.set(s,(v.get(s)??0)+l**2);for(const[o,s]of[...v.entries()].sort((l,_)=>l[0]<_[0]?-1:1))if(s>1+qp)return`lloads: loading budget exceeded for '${o}' — the sum of squared loadings across latents is ${d8(s)}, over the limit of 1 by ${d8(s-1)}; no residual variance is left for it`;const u=new Set(i),f=[...v.entries()].filter(([o,s])=>s>0&&u.has(o)).map(([o])=>o).sort();return f.length>0?`lloads: ${f.map(o=>`'${o}'`).join(", ")} ${f.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function d8(e){return String(Number(e.toPrecision(6)))}function gp(e,r){if(e==null)return null;for(const i of e.latents){const n=Object.entries(i.loadings).filter(([,a])=>a!==0).map(([a])=>a);for(const a of r){const t=n.filter(u=>a.inside.includes(u)),v=n.filter(u=>a.outside.includes(u));if(t.length>0&&v.length>0)return`lloads: latent '${i.name}' loads '${t[0]}', which sits inside an expectation E⟦…⟧, and '${v[0]}', which sits outside it in the same formula; a latent may load quantities on one side of an expectation or the other, but not both, because dependence across E⟦…⟧ would make the expectation conditional on the outside quantities, which is not supported`}}return null}const $8=1e-15;function bp(e,r){return r.filter(i=>{const n=e[i];if(typeof n=="string")return i8(n)!==null;if(!Array.isArray(n)||n.length===0)return!1;const a=n[0];return n[n.length-1][0]-a[0]<$8})}function Lp(e,r,i,n=null,a=[]){if(!p8(e))return`expected object, got ${Ie(e)}`;for(const m of["point","bounds","sample"]){if(!(m in e))return`missing required key '${m}'`;if(!p8(e[m]))return`'${m}' must be an object, got ${Ie(e[m])}`}const t=e.point,v=e.bounds,u=e.sample,f=new Set(Object.keys(t)),o=new Set(Object.keys(v)),s=new Set(Object.keys(u));if(!bo(o,s))return`bounds/sample key mismatch: bounds=${JSON.stringify([...o].sort())}, sample=${JSON.stringify([...s].sort())}`;if(!bo(f,o))return`parameter name mismatch across dicts: point=${JSON.stringify([...f].sort())}, bounds=${JSON.stringify([...o].sort())}, sample=${JSON.stringify([...s].sort())}`;if(r!==null){const m=Ip("point/bounds/sample",f,r);if(m!==null)return m}for(const[m,c]of Object.entries(t)){if(typeof c!="number"||!Number.isFinite(c))return`point['${m}']: expected number, got ${Ie(c)}`;const p=(i==null?void 0:i[m])??yr;if(!mr(p,c))return`point['${m}']: ${c} not in ${Zr(p)}`}for(const[m,c]of Object.entries(v)){if(!Array.isArray(c)||c.length!==2)return`bounds['${m}']: expected [lo, hi] pair`;const[p,y]=c;if(typeof p!="number"||typeof y!="number"||!Number.isFinite(p)||!Number.isFinite(y))return`bounds['${m}']: lo and hi must be numbers`;if(p>y)return`bounds['${m}']: lo=${p} > hi=${y}`;const L=Fr((i==null?void 0:i[m])??yr);if(!mr(L,p))return`bounds['${m}']: lo=${p} not in ${Zr(L)}`;if(!mr(L,y))return`bounds['${m}']: hi=${y} not in ${Zr(L)}`}for(const[m,c]of Object.entries(u)){if(typeof c=="string"){const E=i8(c),M=(i==null?void 0:i[m])??yr;if(E!==null){if(!mr(M,E))return`sample['${m}']: pointmass value ${E} not in ${Zr(M)}`;continue}let w;try{const A=c8(c);if(A!==null)w=mp(A),w===null&&pp(A,M.lo,M.hi);else{const g=_o(c);e8(g,M.lo,M.hi),w=x7(g)}}catch(A){return`sample['${m}']: ${A instanceof Error?A.message:String(A)}`}if(w!==null)return`sample['${m}']: ${w}`;continue}if(!Array.isArray(c))return`sample['${m}']: expected sample spec string or array of [x, y] pairs, got ${Ie(c)}`;const p=c.length;if(p<2)return`sample['${m}']: need at least 2 [x, y] pairs, got ${p}`;const y=Fr((i==null?void 0:i[m])??yr);let L=!1,b=-1/0;for(let E=0;E<p;E++){const M=c[E];if(!Array.isArray(M)||M.length!==2)return`sample['${m}'][${E}]: expected [x, y] pair, got ${JSON.stringify(M)}`;const[w,A]=M;if(typeof w!="number"||typeof A!="number"||!Number.isFinite(w)||!Number.isFinite(A))return`sample['${m}'][${E}]: x and y must be numbers`;if(!mr(y,w))return`sample['${m}'][${E}]: x=${w} not in ${Zr(y)}`;if(A<0||A>1)return`sample['${m}'][${E}]: y=${A} not in [0, 1]`;if(w<b)return`sample['${m}'][${E}]: x=${w} not sorted (prev was ${b})`;b=w,Math.abs(A-1)<1e-9&&(L=!0)}if(!L)return`sample['${m}']: no pair has y ≈ 1.0 (need at least one peak)`;const I=Np(m,c);if(I!==null)return I}const l=e.lloads;if(l==null)return null;const _=n??r??[...s],d=bp(u,_),h=Rp(l,_,d);return h!==null?h:gp(l,a)}function Np(e,r){const i=r[0][0],n=r[r.length-1][0];if(n-i<$8)return null;let a=0;for(let t=0;t<r.length-1;t++)a+=(r[t+1][0]-r[t][0])*(r[t][1]+r[t+1][1])/2;return a>0?null:`sample['${e}']: zero total area: support [${i}, ${n}] is wider than a point mass, but every segment of positive width has height 0 at both ends; give some segment of positive width a positive height, or use pointmass(x) for a single value`}function p8(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Ie(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function bo(e,r){if(e.size!==r.size)return!1;for(const i of e)if(!r.has(i))return!1;return!0}function Ip(e,r,i){const n=new Set(i);if(bo(r,n))return null;const a=[...n].filter(u=>!r.has(u)).sort(),t=[...r].filter(u=>!n.has(u)).sort(),v=[];return a.length>0&&v.push(`missing=${JSON.stringify(a)}`),t.length>0&&v.push(`unexpected=${JSON.stringify(t)}`),`${e} parameter name mismatch vs expected: ${v.join(", ")}`}const q8=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","mixture","trap","clamp","exp","log","log2","log10","sqrt"];function Mp(e,r,i){return $r("tri",e,r,i)}function y8(e,r){return $r("uniform",e,r)}const Ap=y8;function Ep(e,r){return $r("beta",e,r)}function wp(e,r){return $r("normal",e,r)}function Sp(e,r){return $r("lognormal",e,r)}function Pp(e,r){return $r("loguniform",e,r)}function Fp(e,r,i){return $r("t",e,r,i)}function Op(e,r,i){return $r("logt",e,r,i)}function Tp(e,r,i,n){return $r("normal-trunc",e,r,i,n)}function Hp(e,r,i,n){return $r("lognormal-trunc",e,r,i,n)}function Cp(e,r,i,n,a){return $r("t-trunc",e,r,i,n,a)}function Gp(e,r,i,n,a){return $r("logt-trunc",e,r,i,n,a)}function kp(e,r,i,n){return[[e,0],[r,1],[i,1],[n,0]]}function Dp(e,r,i){return Math.min(Math.max(e,r),i)}const R8={tri:Mp,uniform:y8,uni:Ap,beta:Ep,normal:wp,lognormal:Sp,loguniform:Pp,t:Fp,logt:Op,normal_trunc:Tp,lognormal_trunc:Hp,t_trunc:Cp,logt_trunc:Gp,mixture:hp,trap:kp,clamp:Dp,exp:Math.exp,log:Math.log,log2:Math.log2,log10:Math.log10,sqrt:Math.sqrt};{const e=Object.keys(R8),r=[...q8],i=e.filter(a=>!r.includes(a)),n=r.filter(a=>!e.includes(a));if(i.length>0||n.length>0)throw new Error(`belief_helpers: HELPER_NAMES ↔ HELPERS drift. Missing from names: ${JSON.stringify(i)}. Missing from bundle: ${JSON.stringify(n)}.`)}const g8="__belief_helpers",Wp=`const { ${q8.join(", ")} } = ${g8};
`;function Up(e){let r;try{r=new Function(...e.cparamNames,g8,Wp+e.source)}catch(a){return{wellformed:[],malformed:[],compileError:b8(a)}}const i=[],n=[];for(const a of e.combinations){const t=e.cparamNames.map(s=>a[s]);let v;try{v=r(...t,R8)}catch(s){n.push({cparams:a,error:b8(s)});continue}const u=Lp(v,e.expectedSvars,e.paramRanges,e.formulaSvars??null,e.expectationLeafPartitions??[]);if(u!==null){n.push({cparams:a,error:u});continue}const f=v,o={cparams:a,point:f.point,bounds:f.bounds,sample:f.sample};f.lloads!==void 0&&(o.lloads=f.lloads),i.push(o)}return{wellformed:i,malformed:n}}function b8(e){return e instanceof Error?`${e.name}: ${e.message}`:String(e)}const L8=self;L8.addEventListener("message",e=>{const r=Up(e.data);L8.postMessage(r)})})();
