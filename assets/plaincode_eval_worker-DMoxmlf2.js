(function(){"use strict";const n0={lo:0,hi:1,loClosed:!0,hiClosed:!0};function Qr(e,r){return!(e.lo!==null&&(e.loClosed?r<e.lo:r<=e.lo)||e.hi!==null&&(e.hiClosed?r>e.hi:r>=e.hi))}function b2(e){return{lo:e.lo,hi:e.hi,loClosed:e.lo!==null,hiClosed:e.hi!==null}}function Yr(e){const r=e.loClosed&&e.lo!==null?"[":"(",a=e.hiClosed&&e.hi!==null?"]":")";return`${r}${e.lo??"-inf"}, ${e.hi??"inf"}${a}`}function br(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
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
*/var g0,g2;function i8(){if(g2)return g0;g2=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return g0=e,g0}/**
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
*/var L0,L2;function n8(){if(L2)return L0;L2=1;var e=i8();function r(){try{return e({},"x",{}),!0}catch{return!1}}return L0=r,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,N2;function t8(){if(N2)return N0;N2=1;var e=Object.defineProperty;return N0=e,N0}/**
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
*/var I0,I2;function M2(){if(I2)return I0;I2=1;function e(r){return typeof r=="number"}return I0=e,I0}/**
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
*/var M0,A2;function P2(){if(A2)return M0;A2=1;function e(i){return i[0]==="-"}function r(i){var n="",u;for(u=0;u<i;u++)n+="0";return n}function a(i,n,u){var v=!1,t=n-i.length;return t<0||(e(i)&&(v=!0,i=i.substr(1)),i=u?i+r(t):r(t)+i,v&&(i="-"+i)),i}return M0=a,M0}/**
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
*/var A0,E2;function u8(){if(E2)return A0;E2=1;var e=M2(),r=P2(),a=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function n(u){var v,t,f;switch(u.specifier){case"b":v=2;break;case"o":v=8;break;case"x":case"X":v=16;break;case"d":case"i":case"u":default:v=10;break}if(t=u.arg,f=parseInt(t,10),!isFinite(f)){if(!e(t))throw new Error("invalid integer. Value: "+t);f=0}return f<0&&(u.specifier==="u"||v!==10)&&(f=4294967295+f+1),f<0?(t=(-f).toString(v),u.precision&&(t=r(t,u.precision,u.padRight)),t="-"+t):(t=f.toString(v),!f&&!u.precision?t="":u.precision&&(t=r(t,u.precision,u.padRight)),u.sign&&(t=u.sign+t)),v===16&&(u.alternate&&(t="0x"+t),t=u.specifier===i.call(u.specifier)?i.call(t):a.call(t)),v===8&&u.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}return A0=n,A0}/**
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
*/var P0,S2;function v8(){if(S2)return P0;S2=1;function e(r){return typeof r=="string"}return P0=e,P0}/**
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
*/var E0,w2;function o8(){if(w2)return E0;w2=1;var e=Math.abs,r=String.prototype.toLowerCase,a=String.prototype.toUpperCase,i=String.prototype.replace,n=/e\+(\d)$/,u=/e-(\d)$/,v=/^(\d+)$/,t=/^(\d+)e/,f=/\.0$/,o=/\.0*e/,l=/(\..*[^0])0*e/;function s(d,$){var m,_;switch($.specifier){case"e":case"E":_=d.toExponential($.precision);break;case"f":case"F":_=d.toFixed($.precision);break;case"g":case"G":e(d)<1e-4?(m=$.precision,m>0&&(m-=1),_=d.toExponential(m)):_=d.toPrecision($.precision),$.alternate||(_=i.call(_,l,"$1e"),_=i.call(_,o,"e"),_=i.call(_,f,""));break;default:throw new Error("invalid double notation. Value: "+$.specifier)}return _=i.call(_,n,"e+0$1"),_=i.call(_,u,"e-0$1"),$.alternate&&(_=i.call(_,v,"$1."),_=i.call(_,t,"$1.e")),d>=0&&$.sign&&(_=$.sign+_),_=$.specifier===a.call($.specifier)?a.call(_):r.call(_),_}return E0=s,E0}/**
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
*/var S0,F2;function f8(){if(F2)return S0;F2=1;function e(a){var i="",n;for(n=0;n<a;n++)i+=" ";return i}function r(a,i,n){var u=i-a.length;return u<0||(a=n?a+e(u):e(u)+a),a}return S0=r,S0}/**
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
*/var w0,O2;function l8(){if(O2)return w0;O2=1;var e=u8(),r=v8(),a=M2(),i=o8(),n=f8(),u=P2(),v=String.fromCharCode,t=Array.isArray;function f(s){return s!==s}function o(s){var d={};return d.specifier=s.specifier,d.precision=s.precision===void 0?1:s.precision,d.width=s.width,d.flags=s.flags||"",d.mapping=s.mapping,d}function l(s){var d,$,m,_,c,q,y,L,g,I;if(!t(s))throw new TypeError("invalid argument. First argument must be an array. Value: `"+s+"`.");for(q="",y=1,g=0;g<s.length;g++)if(m=s[g],r(m))q+=m;else{if(d=m.precision!==void 0,m=o(m),!m.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+g+"`. Value: `"+m+"`.");for(m.mapping&&(y=m.mapping),$=m.flags,I=0;I<$.length;I++)switch(_=$.charAt(I),_){case" ":m.sign=" ";break;case"+":m.sign="+";break;case"-":m.padRight=!0,m.padZeros=!1;break;case"0":m.padZeros=$.indexOf("-")<0;break;case"#":m.alternate=!0;break;default:throw new Error("invalid flag: "+_)}if(m.width==="*"){if(m.width=parseInt(arguments[y],10),y+=1,f(m.width))throw new TypeError("the argument for * width at position "+y+" is not a number. Value: `"+m.width+"`.");m.width<0&&(m.padRight=!0,m.width=-m.width)}if(d&&m.precision==="*"){if(m.precision=parseInt(arguments[y],10),y+=1,f(m.precision))throw new TypeError("the argument for * precision at position "+y+" is not a number. Value: `"+m.precision+"`.");m.precision<0&&(m.precision=1,d=!1)}switch(m.arg=arguments[y],m.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":d&&(m.padZeros=!1),m.arg=e(m);break;case"s":m.maxWidth=d?m.precision:-1,m.arg=String(m.arg);break;case"c":if(!f(m.arg)){if(c=parseInt(m.arg,10),c<0||c>127)throw new Error("invalid character code. Value: "+m.arg);m.arg=f(c)?String(m.arg):v(c)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(d||(m.precision=6),L=parseFloat(m.arg),!isFinite(L)){if(!a(m.arg))throw new Error("invalid floating-point number. Value: "+q);L=m.arg,m.padZeros=!1}m.arg=i(L,m);break;default:throw new Error("invalid specifier: "+m.specifier)}m.maxWidth>=0&&m.arg.length>m.maxWidth&&(m.arg=m.arg.substring(0,m.maxWidth)),m.padZeros?m.arg=u(m.arg,m.width||m.precision,m.padRight):m.width&&(m.arg=n(m.arg,m.width,m.padRight)),q+=m.arg||"",y+=1}return q}return w0=l,w0}/**
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
*/var F0,T2;function s8(){if(T2)return F0;T2=1;var e=l8();return F0=e,F0}/**
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
*/var O0,H2;function c8(){if(H2)return O0;H2=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function r(i){var n={mapping:i[1]?parseInt(i[1],10):void 0,flags:i[2],width:i[3],precision:i[5],specifier:i[6]};return i[4]==="."&&i[5]===void 0&&(n.precision="1"),n}function a(i){var n,u,v,t;for(u=[],t=0,v=e.exec(i);v;)n=i.slice(t,e.lastIndex-v[0].length),n.length&&u.push(n),v[6]==="%"?u.push("%"):u.push(r(v)),t=e.lastIndex,v=e.exec(i);return n=i.slice(t),n.length&&u.push(n),u}return O0=a,O0}/**
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
*/var T0,G2;function _8(){if(G2)return T0;G2=1;var e=c8();return T0=e,T0}/**
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
*/var H0,C2;function m8(){if(C2)return H0;C2=1;function e(r){return typeof r=="string"}return H0=e,H0}/**
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
*/var G0,k2;function d8(){if(k2)return G0;k2=1;var e=s8(),r=_8(),a=m8();function i(n){var u,v;if(!a(n))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",n));for(u=[r(n)],v=1;v<arguments.length;v++)u.push(arguments[v]);return e.apply(null,u)}return G0=i,G0}/**
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
*/var C0,W2;function $8(){if(W2)return C0;W2=1;var e=d8();return C0=e,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,D2;function h8(){if(D2)return k0;D2=1;var e=$8(),r=Object.prototype,a=r.toString,i=r.__defineGetter__,n=r.__defineSetter__,u=r.__lookupGetter__,v=r.__lookupSetter__;function t(f,o,l){var s,d,$,m;if(typeof f!="object"||f===null||a.call(f)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",f));if(typeof l!="object"||l===null||a.call(l)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if(d="value"in l,d&&(u.call(f,o)||v.call(f,o)?(s=f.__proto__,f.__proto__=r,delete f[o],f[o]=l.value,f.__proto__=s):f[o]=l.value),$="get"in l,m="set"in l,d&&($||m))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return $&&i&&i.call(f,o,l.get),m&&n&&n.call(f,o,l.set),f}return k0=t,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,B2;function q8(){if(B2)return W0;B2=1;var e=n8(),r=t8(),a=h8(),i;return e()?i=r:i=a,W0=i,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,U2;function p8(){if(U2)return D0;U2=1;var e=q8();function r(a,i,n){e(a,i,{configurable:!1,enumerable:!1,writable:!1,value:n})}return D0=r,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,X2;function or(){if(X2)return B0;X2=1;var e=p8();return B0=e,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,V2;function y8(){if(V2)return U0;V2=1;function e(r){return r!==r}return U0=e,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,K2;function X(){if(K2)return X0;K2=1;var e=y8();return X0=e,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,Q2;function R8(){if(Q2)return V0;Q2=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return V0=e,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K0,Y2;function b8(){if(Y2)return K0;Y2=1;var e=R8();return K0=e,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,J2;function g8(){if(J2)return Q0;J2=1;var e=b8(),r=e();function a(){return r&&typeof Symbol.toStringTag=="symbol"}return Q0=a,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,Z2;function L8(){if(Z2)return Y0;Z2=1;var e=g8();return Y0=e,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,j2;function z2(){if(j2)return J0;j2=1;var e=Object.prototype.toString;return J0=e,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,x2;function N8(){if(x2)return Z0;x2=1;var e=z2();function r(a){return e.call(a)}return Z0=r,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,ro;function I8(){if(ro)return j0;ro=1;var e=Object.prototype.hasOwnProperty;function r(a,i){return a==null?!1:e.call(a,i)}return j0=r,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,eo;function M8(){if(eo)return z0;eo=1;var e=I8();return z0=e,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,ao;function A8(){if(ao)return x0;ao=1;var e=typeof Symbol=="function"?Symbol:void 0;return x0=e,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var re,io;function P8(){if(io)return re;io=1;var e=A8();return re=e,re}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ee,no;function E8(){if(no)return ee;no=1;var e=P8(),r=typeof e=="function"?e.toStringTag:"";return ee=r,ee}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ae,to;function S8(){if(to)return ae;to=1;var e=M8(),r=E8(),a=z2();function i(n){var u,v,t;if(n==null)return a.call(n);v=n[r],u=e(n,r);try{n[r]=void 0}catch{return a.call(n)}return t=a.call(n),u?n[r]=v:delete n[r],t}return ae=i,ae}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ie,uo;function t0(){if(uo)return ie;uo=1;var e=L8(),r=N8(),a=S8(),i;return e()?i=a:i=r,ie=i,ie}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ne,vo;function w8(){if(vo)return ne;vo=1;var e=t0(),r=typeof Uint32Array=="function";function a(i){return r&&i instanceof Uint32Array||e(i)==="[object Uint32Array]"}return ne=a,ne}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var te,oo;function F8(){if(oo)return te;oo=1;var e=w8();return te=e,te}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ue,fo;function O8(){if(fo)return ue;fo=1;var e=4294967295;return ue=e,ue}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ve,lo;function T8(){if(lo)return ve;lo=1;var e=typeof Uint32Array=="function"?Uint32Array:null;return ve=e,ve}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oe,so;function H8(){if(so)return oe;so=1;var e=F8(),r=O8(),a=T8();function i(){var n,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),n=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{n=!1}return n}return oe=i,oe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fe,co;function G8(){if(co)return fe;co=1;var e=H8();return fe=e,fe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var le,_o;function C8(){if(_o)return le;_o=1;var e=typeof Uint32Array=="function"?Uint32Array:void 0;return le=e,le}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var se,mo;function k8(){if(mo)return se;mo=1;function e(){throw new Error("not implemented")}return se=e,se}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ce,$o;function Hr(){if($o)return ce;$o=1;var e=G8(),r=C8(),a=k8(),i;return e()?i=r:i=a,ce=i,ce}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _e,ho;function W8(){if(ho)return _e;ho=1;var e=t0(),r=typeof Float64Array=="function";function a(i){return r&&i instanceof Float64Array||e(i)==="[object Float64Array]"}return _e=a,_e}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var me,qo;function D8(){if(qo)return me;qo=1;var e=W8();return me=e,me}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var de,po;function B8(){if(po)return de;po=1;var e=typeof Float64Array=="function"?Float64Array:null;return de=e,de}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $e,yo;function U8(){if(yo)return $e;yo=1;var e=D8(),r=B8();function a(){var i,n;if(typeof r!="function")return!1;try{n=new r([1,3.14,-3.14,NaN]),i=e(n)&&n[0]===1&&n[1]===3.14&&n[2]===-3.14&&n[3]!==n[3]}catch{i=!1}return i}return $e=a,$e}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var he,Ro;function X8(){if(Ro)return he;Ro=1;var e=U8();return he=e,he}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qe,bo;function V8(){if(bo)return qe;bo=1;var e=typeof Float64Array=="function"?Float64Array:void 0;return qe=e,qe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pe,go;function K8(){if(go)return pe;go=1;function e(){throw new Error("not implemented")}return pe=e,pe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ye,Lo;function Gr(){if(Lo)return ye;Lo=1;var e=X8(),r=V8(),a=K8(),i;return e()?i=r:i=a,ye=i,ye}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Re,No;function Q8(){if(No)return Re;No=1;var e=t0(),r=typeof Uint8Array=="function";function a(i){return r&&i instanceof Uint8Array||e(i)==="[object Uint8Array]"}return Re=a,Re}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var be,Io;function Y8(){if(Io)return be;Io=1;var e=Q8();return be=e,be}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ge,Mo;function J8(){if(Mo)return ge;Mo=1;var e=255;return ge=e,ge}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Le,Ao;function Z8(){if(Ao)return Le;Ao=1;var e=typeof Uint8Array=="function"?Uint8Array:null;return Le=e,Le}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ne,Po;function j8(){if(Po)return Ne;Po=1;var e=Y8(),r=J8(),a=Z8();function i(){var n,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),n=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{n=!1}return n}return Ne=i,Ne}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ie,Eo;function z8(){if(Eo)return Ie;Eo=1;var e=j8();return Ie=e,Ie}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Me,So;function x8(){if(So)return Me;So=1;var e=typeof Uint8Array=="function"?Uint8Array:void 0;return Me=e,Me}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ae,wo;function r9(){if(wo)return Ae;wo=1;function e(){throw new Error("not implemented")}return Ae=e,Ae}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pe,Fo;function e9(){if(Fo)return Pe;Fo=1;var e=z8(),r=x8(),a=r9(),i;return e()?i=r:i=a,Pe=i,Pe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ee,Oo;function a9(){if(Oo)return Ee;Oo=1;var e=t0(),r=typeof Uint16Array=="function";function a(i){return r&&i instanceof Uint16Array||e(i)==="[object Uint16Array]"}return Ee=a,Ee}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Se,To;function i9(){if(To)return Se;To=1;var e=a9();return Se=e,Se}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var we,Ho;function n9(){if(Ho)return we;Ho=1;var e=65535;return we=e,we}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fe,Go;function t9(){if(Go)return Fe;Go=1;var e=typeof Uint16Array=="function"?Uint16Array:null;return Fe=e,Fe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oe,Co;function u9(){if(Co)return Oe;Co=1;var e=i9(),r=n9(),a=t9();function i(){var n,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),n=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{n=!1}return n}return Oe=i,Oe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Te,ko;function v9(){if(ko)return Te;ko=1;var e=u9();return Te=e,Te}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var He,Wo;function o9(){if(Wo)return He;Wo=1;var e=typeof Uint16Array=="function"?Uint16Array:void 0;return He=e,He}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ge,Do;function f9(){if(Do)return Ge;Do=1;function e(){throw new Error("not implemented")}return Ge=e,Ge}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ce,Bo;function l9(){if(Bo)return Ce;Bo=1;var e=v9(),r=o9(),a=f9(),i;return e()?i=r:i=a,Ce=i,Ce}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ke,Uo;function s9(){if(Uo)return ke;Uo=1;var e=e9(),r=l9(),a={uint16:r,uint8:e};return ke=a,ke}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var We,Xo;function c9(){if(Xo)return We;Xo=1;var e=s9(),r;function a(){var i,n;return i=new e.uint16(1),i[0]=4660,n=new e.uint8(i.buffer),n[0]===52}return r=a(),We=r,We}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var De,Vo;function Cr(){if(Vo)return De;Vo=1;var e=c9();return De=e,De}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Be,Ko;function _9(){if(Ko)return Be;Ko=1;var e=Cr(),r;return e===!0?r=1:r=0,Be=r,Be}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ue,Qo;function m9(){if(Qo)return Ue;Qo=1;var e=Hr(),r=Gr(),a=_9(),i=new r(1),n=new e(i.buffer);function u(v){return i[0]=v,n[a]}return Ue=u,Ue}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xe,Yo;function _r(){if(Yo)return Xe;Yo=1;var e=m9();return Xe=e,Xe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ve,Jo;function d9(){if(Jo)return Ve;Jo=1;var e=Cr(),r;return e===!0?r=1:r=0,Ve=r,Ve}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ke,Zo;function $9(){if(Zo)return Ke;Zo=1;var e=Hr(),r=Gr(),a=d9(),i=new r(1),n=new e(i.buffer);function u(v,t){return i[0]=v,n[a]=t>>>0,i[0]}return Ke=u,Ke}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qe,jo;function Jr(){if(jo)return Qe;jo=1;var e=$9();return Qe=e,Qe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ye,zo;function h9(){if(zo)return Ye;zo=1;var e=Cr(),r,a,i;return e===!0?(a=1,i=0):(a=0,i=1),r={HIGH:a,LOW:i},Ye=r,Ye}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Je,xo;function q9(){if(xo)return Je;xo=1;var e=Hr(),r=Gr(),a=h9(),i=new r(1),n=new e(i.buffer),u=a.HIGH,v=a.LOW;function t(f,o){return n[u]=f,n[v]=o,i[0]}return Je=t,Je}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ze,r3;function u0(){if(r3)return Ze;r3=1;var e=q9();return Ze=e,Ze}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var je,e3;function ar(){if(e3)return je;e3=1;var e=Number.POSITIVE_INFINITY;return je=e,je}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ze,a3;function p9(){return a3||(a3=1,ze=Number),ze}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xe,i3;function y9(){if(i3)return xe;i3=1;var e=p9();return xe=e,xe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ra,n3;function fr(){if(n3)return ra;n3=1;var e=y9(),r=e.NEGATIVE_INFINITY;return ra=r,ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ea,t3;function Sr(){if(t3)return ea;t3=1;var e=1023;return ea=e,ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aa,u3;function R9(){if(u3)return aa;u3=1;var e=.34657359027997264;return aa=e,aa}/**
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
*/var ia,v3;function b9(){if(v3)return ia;v3=1;function e(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}return ia=e,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var na,o3;function g9(){if(o3)return na;o3=1;var e=X(),r=_r(),a=Jr(),i=u0(),n=ar(),u=fr(),v=Sr(),t=R9(),f=b9(),o=709.782712893384,l=.6931471803691238,s=19082149292705877e-26,d=1.4426950408889634,$=38.816242111356935,m=1.0397207708399179;function _(c){var q,y,L,g,I,P,M,E,A,b,h,p,R;if(c===n||e(c))return c;if(c===u)return-1;if(c===0)return c;if(c<0?(L=!0,E=-c):(L=!1,E=c),E>=$){if(L)return-1;if(E>=o)return n}if(P=r(E)|0,E>t)E<m?L?(g=c+l,I=-s,R=-1):(g=c-l,I=s,R=1):(L?R=d*c-.5:R=d*c+.5,R|=0,h=R,g=c-h*l,I=h*s),c=g-I,b=g-c-I;else{if(P<1016070144)return c;R=0}return q=.5*c,A=c*q,M=1+A*f(A),h=3-M*q,p=A*((M-h)/(6-c*h)),R===0?c-(c*p-A):(y=i(v+R<<20,0),p=c*(p-b)-b,p-=A,R===-1?.5*(c-p)-.5:R===1?c<-.25?-2*(p-(c+.5)):1+2*(c-p):R<=-2||R>56?(E=1-(p-c),R===1024?(g=r(E)+(R<<20)|0,E=a(E,g)):E*=y,E-1):(h=1,R<20?(g=1072693248-(2097152>>R)|0,h=a(h,g),E=h-(p-c)):(g=v-R<<20|0,h=a(h,g),E=c-(p+h),E+=1),E*=y,E))}return na=_,na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ta,f3;function kr(){if(f3)return ta;f3=1;var e=g9();return ta=e,ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua,l3;function L9(){if(l3)return ua;l3=1;var e=Math.floor;return ua=e,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,s3;function pr(){if(s3)return va;s3=1;var e=L9();return va=e,va}/**
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
*/var oa,c3;function N9(){if(c3)return oa;c3=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}return oa=e,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var fa,_3;function I9(){if(_3)return fa;_3=1;var e=X(),r=_r(),a=Jr(),i=ar(),n=fr(),u=Sr(),v=N9(),t=.6931471803691238,f=19082149292705877e-26,o=.41421356237309503,l=-.2928932188134525,s=1862645149230957e-24,d=5551115123125783e-32,$=9007199254740992,m=.6666666666666666;function _(c){var q,y,L,g,I,P,M,E,A,b;if(c<-1||e(c))return NaN;if(c===-1)return n;if(c===i||c===0)return c;if(c<0?L=-c:L=c,b=1,L<o){if(L<s)return L<d?c:c-c*c*.5;c>l&&(b=0,g=c,y=1)}return b!==0&&(L<$?(A=1+c,y=r(A),b=(y>>20)-u,b>0?I=1-(A-c):I=c-(A-1),I/=A):(A=c,y=r(A),b=(y>>20)-u,I=0),y&=1048575,y<434334?A=a(A,y|1072693248):(b+=1,A=a(A,y|1071644672),y=1048576-y>>2),g=A-1),q=.5*g*g,y===0?g===0?(I+=b*f,b*t+I):(E=q*(1-m*g),b*t-(E-(b*f+I)-g)):(P=g/(2+g),M=P*P,E=M*v(M),b===0?g-(q-P*(q+E)):b*t-(q-(P*(q+E)+(b*f+I))-g))}return fa=_,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,m3;function mr(){if(m3)return la;m3=1;var e=I9();return la=e,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,d3;function M9(){if(d3)return sa;d3=1;var e=Math.sqrt;return sa=e,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,$3;function J(){if($3)return ca;$3=1;var e=M9();return ca=e,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,h3;function q3(){if(h3)return _a;h3=1;var e=.7853981633974483;return _a=e,_a}/**
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
*/var ma,p3;function A9(){if(p3)return ma;p3=1;function e(r){var a,i,n;return r===0?.16666666666666713:(r<0?a=-r:a=r,a<=1?(i=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),n=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,i=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),n=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),i/n)}return ma=e,ma}/**
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
*/var da,y3;function P9(){if(y3)return da;y3=1;function e(r){var a,i,n;return r===0?.08333333333333809:(r<0?a=-r:a=r,a<=1?(i=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),n=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,i=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),n=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),i/n)}return da=e,da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $a,R3;function E9(){if(R3)return $a;R3=1;var e=X(),r=J(),a=q3(),i=A9(),n=P9(),u=6123233995736766e-32;function v(t){var f,o,l,s,d;if(e(t))return NaN;if(t>0?l=t:(f=!0,l=-t),l>1)return NaN;if(l>.625)o=1-l,s=o*n(o),o=r(o+o),d=a-o,o=o*s-u,d-=o,d+=a;else{if(l<1e-8)return t;o=l*l,d=o*i(o),d=l*d+l}return f?-d:d}return $a=v,$a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ha,b3;function qa(){if(b3)return ha;b3=1;var e=E9();return ha=e,ha}/**
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
*/var pa,g3;function S9(){if(g3)return pa;g3=1;function e(r){return Math.abs(r)}return pa=e,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ya,L3;function Z(){if(L3)return ya;L3=1;var e=S9();return ya=e,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,N3;function w9(){if(N3)return Ra;N3=1;var e=Math.ceil;return Ra=e,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,I3;function F9(){if(I3)return ba;I3=1;var e=w9();return ba=e,ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ga,M3;function O9(){if(M3)return ga;M3=1;var e=pr(),r=F9();function a(i){return i<0?r(i):e(i)}return ga=a,ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,A3;function Na(){if(A3)return La;A3=1;var e=O9();return La=e,La}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,P3;function T9(){if(P3)return Ia;P3=1;var e=1023;return Ia=e,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ma,E3;function H9(){if(E3)return Ma;E3=1;var e=-1023;return Ma=e,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aa,S3;function G9(){if(S3)return Aa;S3=1;var e=-1074;return Aa=e,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,w3;function C9(){if(w3)return Pa;w3=1;var e=ar(),r=fr();function a(i){return i===e||i===r}return Pa=a,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,F3;function Wr(){if(F3)return Ea;F3=1;var e=C9();return Ea=e,Ea}/**
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
*/var Sa,O3;function k9(){if(O3)return Sa;O3=1;var e=2147483648;return Sa=e,Sa}/**
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
*/var wa,T3;function wr(){if(T3)return wa;T3=1;var e=2147483647;return wa=e,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,H3;function W9(){if(H3)return Fa;H3=1;var e=Cr(),r,a,i;return e===!0?(a=1,i=0):(a=0,i=1),r={HIGH:a,LOW:i},Fa=r,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oa,G3;function C3(){if(G3)return Oa;G3=1;var e=Hr(),r=Gr(),a=W9(),i=new r(1),n=new e(i.buffer),u=a.HIGH,v=a.LOW;function t(f,o,l,s){return i[0]=f,o[s]=n[u],o[s+l]=n[v],o}return Oa=t,Oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ta,k3;function D9(){if(k3)return Ta;k3=1;var e=C3();function r(a){return e(a,[0,0],1,0)}return Ta=r,Ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,W3;function Ga(){if(W3)return Ha;W3=1;var e=or(),r=D9(),a=C3();return e(r,"assign",a),Ha=r,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ca,D3;function B9(){if(D3)return Ca;D3=1;var e=k9(),r=wr(),a=Ga(),i=_r(),n=u0(),u=[0,0];function v(t,f){var o,l;return a.assign(t,u,1,0),o=u[0],o&=r,l=i(f),l&=e,o|=l,n(o,u[1])}return Ca=v,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,B3;function Wa(){if(B3)return ka;B3=1;var e=B9();return ka=e,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,U3;function Fr(){if(U3)return Da;U3=1;var e=22250738585072014e-324;return Da=e,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,X3;function V3(){if(X3)return Ba;X3=1;var e=Fr(),r=Wr(),a=X(),i=Z(),n=4503599627370496;function u(v,t,f,o){return a(v)||r(v)?(t[o]=v,t[o+f]=0,t):v!==0&&i(v)<e?(t[o]=v*n,t[o+f]=-52,t):(t[o]=v,t[o+f]=0,t)}return Ba=u,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,K3;function U9(){if(K3)return Ua;K3=1;var e=V3();function r(a){return e(a,[0,0],1,0)}return Ua=r,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,Q3;function X9(){if(Q3)return Xa;Q3=1;var e=or(),r=U9(),a=V3();return e(r,"assign",a),Xa=r,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Va,Y3;function v0(){if(Y3)return Va;Y3=1;var e=2146435072;return Va=e,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ka,J3;function V9(){if(J3)return Ka;J3=1;var e=_r(),r=v0(),a=Sr();function i(n){var u=e(n);return u=(u&r)>>>20,u-a|0}return Ka=i,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa,Z3;function K9(){if(Z3)return Qa;Z3=1;var e=V9();return Qa=e,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,j3;function Q9(){if(j3)return Ya;j3=1;var e=ar(),r=fr(),a=Sr(),i=T9(),n=H9(),u=G9(),v=X(),t=Wr(),f=Wa(),o=X9().assign,l=K9(),s=Ga(),d=u0(),$=2220446049250313e-31,m=2148532223,_=[0,0],c=[0,0];function q(y,L){var g,I;return L===0||y===0||v(y)||t(y)?y:(o(y,_,1,0),y=_[0],L+=_[1],L+=l(y),L<u?f(0,y):L>i?y<0?r:e:(L<=n?(L+=52,I=$):I=1,s.assign(y,c,1,0),g=c[0],g&=m,g|=L+a<<20,I*d(g,c[1])))}return Ya=q,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja,z3;function Dr(){if(z3)return Ja;z3=1;var e=Q9();return Ja=e,Ja}/**
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
*/var Za,x3;function Y9(){if(x3)return Za;x3=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return Za=e,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ja,rf;function J9(){if(rf)return ja;rf=1;var e=Dr(),r=Y9();function a(i,n,u){var v,t,f,o;return v=i-n,t=v*v,f=v-t*r(t),o=1-(n-v*f/(2-f)-i),e(o,u)}return ja=a,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var za,ef;function Z9(){if(ef)return za;ef=1;var e=X(),r=Na(),a=fr(),i=ar(),n=J9(),u=.6931471803691238,v=19082149292705877e-26,t=1.4426950408889634,f=709.782712893384,o=-745.1332191019411,l=1/(1<<28),s=-l;function d($){var m,_,c;return e($)||$===i?$:$===a?0:$>f?i:$<o?0:$>s&&$<l?1+$:($<0?c=r(t*$-.5):c=r(t*$+.5),m=$-c*u,_=c*v,n(m,_,c))}return za=d,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xa,af;function ir(){if(af)return xa;af=1;var e=Z9();return xa=e,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ri,nf;function j9(){if(nf)return ri;nf=1;var e=pr();function r(a){return e(a)===a}return ri=r,ri}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ei,tf;function Br(){if(tf)return ei;tf=1;var e=j9();return ei=e,ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ai,uf;function z9(){if(uf)return ai;uf=1;var e=Br();function r(a){return e(a/2)}return ai=r,ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ii,vf;function x9(){if(vf)return ii;vf=1;var e=z9();return ii=e,ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ni,of;function rc(){if(of)return ni;of=1;var e=x9();function r(a){return a>0?e(a-1):e(a+1)}return ni=r,ni}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ti,ff;function ui(){if(ff)return ti;ff=1;var e=rc();return ti=e,ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vi,lf;function ec(){if(lf)return vi;lf=1;var e=Cr(),r;return e===!0?r=0:r=1,vi=r,vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oi,sf;function ac(){if(sf)return oi;sf=1;var e=Hr(),r=Gr(),a=ec(),i=new r(1),n=new e(i.buffer);function u(v,t){return i[0]=v,n[a]=t>>>0,i[0]}return oi=u,oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fi,cf;function Zr(){if(cf)return fi;cf=1;var e=ac();return fi=e,fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var li,_f;function ic(){if(_f)return li;_f=1;function e(r){return r|0}return li=e,li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var si,mf;function df(){if(mf)return si;mf=1;var e=ic();return si=e,si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ci,$f;function nc(){if($f)return ci;$f=1;var e=ui(),r=Wa(),a=fr(),i=ar();function n(u,v){return v===a?i:v===i?0:v>0?e(v)?u:0:e(v)?r(i,u):i}return ci=n,ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _i,hf;function tc(){if(hf)return _i;hf=1;var e=wr(),r=_r(),a=1072693247,i=1e300,n=1e-300;function u(v,t){var f,o;return o=r(v),f=o&e,f<=a?t<0?i*i:n*n:t>0?i*i:n*n}return _i=u,_i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mi,qf;function uc(){if(qf)return mi;qf=1;var e=Z(),r=ar();function a(i,n){return i===-1?(i-i)/(i-i):i===1?1:e(i)<1==(n===r)?0:r}return mi=a,mi}/**
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
*/var di,pf;function yf(){if(pf)return di;pf=1;var e=20;return di=e,di}/**
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
*/var $i,Rf;function vc(){if(Rf)return $i;Rf=1;function e(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}return $i=e,$i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var hi,bf;function oc(){if(bf)return hi;bf=1;var e=_r(),r=Zr(),a=Jr(),i=Sr(),n=yf(),u=vc(),v=1048575,t=1048576,f=1072693248,o=536870912,l=524288,s=9007199254740992,d=.9617966939259756,$=.9617967009544373,m=-7028461650952758e-24,_=[1,1.5],c=[0,.5849624872207642],q=[0,1350039202129749e-23];function y(L,g,I){var P,M,E,A,b,h,p,R,N,T,S,H,F,O,w,V,G,B,K,Y,C,W;return Y=0,I<t&&(g*=s,Y-=53,I=e(g)),Y+=(I>>n)-i|0,C=I&v|0,I=C|f|0,C<=235662?W=0:C<767610?W=1:(W=0,Y+=1,I-=t),g=a(g,I),R=_[W],B=g-R,K=1/(g+R),M=B*K,A=r(M,0),P=(I>>1|o)+l,P+=W<<18,h=a(0,P),p=g-(h-R),b=K*(B-A*h-A*p),E=M*M,G=E*E*u(E),G+=b*(A+M),E=A*A,h=3+E+G,h=r(h,0),p=G-(h-3-E),B=A*h,K=b*h+p*M,T=B+K,T=r(T,0),S=K-(T-B),H=$*T,F=m*T+S*d+q[W],N=c[W],V=Y,O=H+F+N+V,O=r(O,0),w=F-(O-V-N-H),L[0]=O,L[1]=w,L}return hi=y,hi}/**
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
*/var qi,gf;function fc(){if(gf)return qi;gf=1;function e(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}return qi=e,qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pi,Lf;function lc(){if(Lf)return pi;Lf=1;var e=Zr(),r=fc(),a=1.4426950408889634,i=1.4426950216293335,n=19259629911266175e-24;function u(v,t){var f,o,l,s,d,$;return l=t-1,s=l*l*r(l),d=i*l,$=l*n-s*a,o=d+$,o=e(o,0),f=$-(o-d),v[0]=o,v[1]=f,v}return pi=u,pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yi,Nf;function sc(){if(Nf)return yi;Nf=1;var e=.6931471805599453;return yi=e,yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ri,If;function Mf(){if(If)return Ri;If=1;var e=1048575;return Ri=e,Ri}/**
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
*/var bi,Af;function cc(){if(Af)return bi;Af=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return bi=e,bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gi,Pf;function _c(){if(Pf)return gi;Pf=1;var e=_r(),r=Jr(),a=Zr(),i=df(),n=Dr(),u=sc(),v=Sr(),t=wr(),f=Mf(),o=yf(),l=cc(),s=1048576,d=1071644672,$=.6931471824645996,m=-1904654299957768e-24;function _(c,q,y){var L,g,I,P,M,E,A,b,h,p,R;return p=c&t|0,R=(p>>o)-v|0,h=0,p>d&&(h=c+(s>>R+1)>>>0,R=((h&t)>>o)-v|0,L=(h&~(f>>R))>>>0,I=r(0,L),h=(h&f|s)>>o-R>>>0,c<0&&(h=-h),q-=I),I=y+q,I=a(I,0),M=I*$,E=(y-(I-q))*u+I*m,b=M+E,A=E-(b-M),I=b*b,g=b-I*l(I),P=b*g/(g-2)-(A+b*A),b=1-(P-b),c=e(b),c=i(c),c+=h<<o>>>0,c>>o<=0?b=n(b,h):b=r(b,c),b}return gi=_,gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Li,Ef;function mc(){if(Ef)return Li;Ef=1;var e=X(),r=ui(),a=Wr(),i=Br(),n=J(),u=Z(),v=Ga(),t=Zr(),f=df(),o=fr(),l=ar(),s=wr(),d=nc(),$=tc(),m=uc(),_=oc(),c=lc(),q=_c(),y=1072693247,L=1105199104,g=1139802112,I=1083179008,P=1072693248,M=1083231232,E=3230714880,A=31,b=1e300,h=1e-300,p=8008566259537294e-32,R=[0,0],N=[0,0];function T(S,H){var F,O,w,V,G,B,K,Y,C,W,k,tr,rr,U,Q,ur;if(e(S)||e(H))return NaN;if(v.assign(H,R,1,0),B=R[0],K=R[1],K===0){if(H===0)return 1;if(H===1)return S;if(H===-1)return 1/S;if(H===.5)return n(S);if(H===-.5)return 1/n(S);if(H===2)return S*S;if(H===3)return S*S*S;if(H===4)return S*=S,S*S;if(a(H))return m(S,H)}if(v.assign(S,R,1,0),V=R[0],G=R[1],G===0){if(V===0)return d(S,H);if(S===1)return 1;if(S===-1&&r(H))return-1;if(a(S))return S===o?T(-0,-H):H<0?0:l}if(S<0&&i(H)===!1)return(S-S)/(S-S);if(w=u(S),F=V&s|0,O=B&s|0,Y=V>>>A|0,C=B>>>A|0,Y&&r(H)?Y=-1:Y=1,O>L){if(O>g)return $(S,H);if(F<y)return C===1?Y*b*b:Y*h*h;if(F>P)return C===0?Y*b*b:Y*h*h;rr=c(N,w)}else rr=_(N,w,F);if(W=t(H,0),tr=(H-W)*rr[0]+H*rr[1],k=W*rr[0],U=tr+k,v.assign(U,R,1,0),Q=f(R[0]),ur=f(R[1]),Q>=I){if((Q-I|ur)!==0||tr+p>U-k)return Y*b*b}else if((Q&s)>=M&&((Q-E|ur)!==0||tr<=U-k))return Y*h*h;return U=q(Q,k,tr),Y*U}return Li=T,Li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ni,Sf;function nr(){if(Sf)return Ni;Sf=1;var e=mc();return Ni=e,Ni}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ii,wf;function Ur(){if(wf)return Ii;wf=1;var e=2.718281828459045;return Ii=e,Ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mi,Ff;function yr(){if(Ff)return Mi;Ff=1;var e=2220446049250313e-31;return Mi=e,Mi}/**
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
*/var Ai,Of;function dc(){if(Of)return Ai;Of=1;function e(r){var a,i,n;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/n)}return Ai=e,Ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pi,Tf;function $c(){if(Tf)return Pi;Tf=1;var e=X(),r=mr(),a=J(),i=Z(),n=ir(),u=nr(),v=Ur(),t=yr(),f=dc(),o=10.900511;function l(s,d){var $,m,_,c,q,y,L;return e(s)||e(d)?NaN:s<0||d<0?NaN:d===1?1/s:s===1?1/d:(L=s+d,L<t?(q=L/s,q/=d,q):L===s&&d<t?1/d:L===d&&s<t?1/s:(s<d&&(y=d,d=s,s=y),m=s+o-.5,_=d+o-.5,c=L+o-.5,q=f(s)*(f(d)/f(L)),$=s-.5-d,i(d*$)<c*100&&s>100?q*=n($*r(-d/c)):q*=u(m/c,$),c>1e10?q*=u(m/c*(_/c),d):q*=u(m*_/(c*c),d),q*=a(v/_),q))}return Pi=l,Pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ei,Hf;function o0(){if(Hf)return Ei;Hf=1;var e=$c();return Ei=e,Ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Si,Gf;function hc(){if(Gf)return Si;Gf=1;var e=ar();function r(a){return a===0&&1/a===e}return Si=r,Si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wi,Cf;function qc(){if(Cf)return wi;Cf=1;var e=hc();return wi=e,wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fi,kf;function pc(){if(kf)return Fi;kf=1;var e=qc(),r=X(),a=ar();function i(n,u){return r(n)||r(u)?NaN:n===a||u===a?a:n===u&&n===0?e(n)?n:u:n>u?n:u}return Fi=i,Fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oi,Wf;function Or(){if(Wf)return Oi;Wf=1;var e=pc();return Oi=e,Oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ti,Df;function yc(){if(Df)return Ti;Df=1;var e=fr();function r(a){return a===0&&1/a===e}return Ti=r,Ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hi,Bf;function Uf(){if(Bf)return Hi;Bf=1;var e=yc();return Hi=e,Hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gi,Xf;function Rc(){if(Xf)return Gi;Xf=1;var e=Uf(),r=X(),a=fr();function i(n,u){return r(n)||r(u)?NaN:n===a||u===a?a:n===u&&n===0?e(n)?n:u:n<u?n:u}return Gi=i,Gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ci,Vf;function Nr(){if(Vf)return Ci;Vf=1;var e=Rc();return Ci=e,Ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ki,Kf;function Tr(){if(Kf)return ki;Kf=1;var e=17976931348623157e292;return ki=e,ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wi,Qf;function Yf(){if(Qf)return Wi;Qf=1;var e=2147483647;return Wi=e,Wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Di,Jf;function Bi(){if(Jf)return Di;Jf=1;var e=1.5707963267948966;return Di=e,Di}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ui,Zf;function Ir(){if(Zf)return Ui;Zf=1;var e=3.141592653589793;return Ui=e,Ui}/**
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
*/var Xi,jf;function bc(){if(jf)return Xi;jf=1;function e(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}return Xi=e,Xi}/**
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
*/var Vi,zf;function gc(){if(zf)return Vi;zf=1;function e(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}return Vi=e,Vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ki,xf;function Lc(){if(xf)return Ki;xf=1;var e=bc(),r=gc();function a(i,n){var u,v,t,f;return f=i*i,t=f*f,v=f*e(f),v+=t*t*r(f),u=.5*f,t=1-u,t+(1-t-u+(f*v-i*n))}return Ki=a,Ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qi,r6;function e6(){if(r6)return Qi;r6=1;var e=Lc();return Qi=e,Qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Yi,a6;function Nc(){if(a6)return Yi;a6=1;var e=-.16666666666666632,r=.00833333333332249,a=-.0001984126982985795,i=27557313707070068e-22,n=-25050760253406863e-24,u=158969099521155e-24;function v(t,f){var o,l,s,d;return d=t*t,s=d*d,o=r+d*(a+d*i)+d*s*(n+d*u),l=d*t,f===0?t+l*(e+d*o):t-(d*(.5*f-l*o)-f-l*e)}return Yi=v,Yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ji,i6;function n6(){if(i6)return Ji;i6=1;var e=Nc();return Ji=e,Ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zi,t6;function Ic(){if(t6)return Zi;t6=1;var e=Cr(),r;return e===!0?r=0:r=1,Zi=r,Zi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ji,u6;function Mc(){if(u6)return ji;u6=1;var e=Hr(),r=Gr(),a=Ic(),i=new r(1),n=new e(i.buffer);function u(v){return i[0]=v,n[a]}return ji=u,ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zi,v6;function Ac(){if(v6)return zi;v6=1;var e=Mc();return zi=e,zi}/**
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
*/var xi,o6;function Pc(){if(o6)return xi;o6=1;function e(r,a){var i,n;for(i=[],n=0;n<a;n++)i.push(r);return i}return xi=e,xi}/**
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
*/var rn,f6;function Ec(){if(f6)return rn;f6=1;var e=Pc();return rn=e,rn}/**
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
*/var en,l6;function Sc(){if(l6)return en;l6=1;var e=Ec();function r(a){return e(0,a)}return en=r,en}/**
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
*/var an,s6;function wc(){if(s6)return an;s6=1;var e=Sc();return an=e,an}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nn,c6;function Fc(){if(c6)return nn;c6=1;var e=pr(),r=Dr(),a=wc(),i=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],n=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],u=16777216,v=5960464477539063e-23,t=a(20),f=a(20),o=a(20),l=a(20);function s($,m,_,c,q,y,L,g,I){var P,M,E,A,b,h,p,R,N;for(A=y,N=c[_],R=_,b=0;R>0;b++)M=v*N|0,l[b]=N-u*M|0,N=c[R-1]+M,R-=1;if(N=r(N,q),N-=8*e(N*.125),p=N|0,N-=p,E=0,q>0?(b=l[_-1]>>24-q,p+=b,l[_-1]-=b<<24-q,E=l[_-1]>>23-q):q===0?E=l[_-1]>>23:N>=.5&&(E=2),E>0){for(p+=1,P=0,b=0;b<_;b++)R=l[b],P===0?R!==0&&(P=1,l[b]=16777216-R):l[b]=16777215-R;if(q>0)switch(q){case 1:l[_-1]&=8388607;break;case 2:l[_-1]&=4194303;break}E===2&&(N=1-N,P!==0&&(N-=r(1,q)))}if(N===0){for(R=0,b=_-1;b>=y;b--)R|=l[b];if(R===0){for(h=1;l[y-h]===0;h++);for(b=_+1;b<=_+h;b++){for(I[g+b]=i[L+b],M=0,R=0;R<=g;R++)M+=$[R]*I[g+(b-R)];c[b]=M}return _+=h,s($,m,_,c,q,y,L,g,I)}for(_-=1,q-=24;l[_]===0;)_-=1,q-=24}else N=r(N,-q),N>=u?(M=v*N|0,l[_]=N-u*M|0,_+=1,q+=24,l[_]=M):l[_]=N|0;for(M=r(1,q),b=_;b>=0;b--)c[b]=M*l[b],M*=v;for(b=_;b>=0;b--){for(M=0,h=0;h<=A&&h<=_-b;h++)M+=n[h]*c[b+h];o[_-b]=M}for(M=0,b=_;b>=0;b--)M+=o[b];for(E===0?m[0]=M:m[0]=-M,M=o[0]-M,b=1;b<=_;b++)M+=o[b];return E===0?m[1]=M:m[1]=-M,p&7}function d($,m,_,c){var q,y,L,g,I,P,M,E,A;for(y=4,g=c-1,L=(_-3)/24|0,L<0&&(L=0),P=_-24*(L+1),E=L-g,A=g+y,M=0;M<=A;M++)E<0?t[M]=0:t[M]=i[E],E+=1;for(M=0;M<=y;M++){for(q=0,E=0;E<=g;E++)q+=$[E]*t[g+(M-E)];f[M]=q}return I=y,s($,m,I,f,P,y,L,g,t)}return nn=d,nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tn,_6;function Oc(){if(_6)return tn;_6=1;var e=Math.round;return tn=e,tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var un,m6;function d6(){if(m6)return un;m6=1;var e=Oc();return un=e,un}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vn,$6;function Tc(){if($6)return vn;$6=1;var e=d6(),r=_r(),a=.6366197723675814,i=1.5707963267341256,n=6077100506506192e-26,u=6077100506303966e-26,v=20222662487959506e-37,t=20222662487111665e-37,f=84784276603689e-45,o=2047;function l(s,d,$){var m,_,c,q,y,L,g;return _=e(s*a),q=s-_*i,y=_*n,g=d>>20|0,$[0]=q-y,m=r($[0]),L=g-(m>>20&o),L>16&&(c=q,y=_*u,q=c-y,y=_*v-(c-q-y),$[0]=q-y,m=r($[0]),L=g-(m>>20&o),L>49&&(c=q,y=_*t,q=c-y,y=_*f-(c-q-y),$[0]=q-y)),$[1]=q-$[0]-y,_}return vn=l,vn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var on,h6;function Hc(){if(h6)return on;h6=1;var e=wr(),r=v0(),a=Mf(),i=_r(),n=Ac(),u=u0(),v=Fc(),t=Tc(),f=0,o=16777216,l=1.5707963267341256,s=6077100506506192e-26,d=2*s,$=3*s,m=4*s,_=598523,c=1072243195,q=1073928572,y=1074752122,L=1074977148,g=1075183036,I=1075388923,P=1075594811,M=1094263291,E=[0,0,0],A=[0,0];function b(h,p){var R,N,T,S,H,F,O,w;if(T=i(h)|0,S=T&e|0,S<=c)return p[0]=h,p[1]=0,0;if(S<=y)return(S&a)===_?t(h,S,p):S<=q?T>0?(w=h-l,p[0]=w-s,p[1]=w-p[0]-s,1):(w=h+l,p[0]=w+s,p[1]=w-p[0]+s,-1):T>0?(w=h-2*l,p[0]=w-d,p[1]=w-p[0]-d,2):(w=h+2*l,p[0]=w+d,p[1]=w-p[0]+d,-2);if(S<=P)return S<=g?S===L?t(h,S,p):T>0?(w=h-3*l,p[0]=w-$,p[1]=w-p[0]-$,3):(w=h+3*l,p[0]=w+$,p[1]=w-p[0]+$,-3):S===I?t(h,S,p):T>0?(w=h-4*l,p[0]=w-m,p[1]=w-p[0]-m,4):(w=h+4*l,p[0]=w+m,p[1]=w-p[0]+m,-4);if(S<M)return t(h,S,p);if(S>=r)return p[0]=NaN,p[1]=NaN,0;for(R=n(h),N=(S>>20)-1046,w=u(S-(N<<20|0),R),F=0;F<2;F++)E[F]=w|0,w=(w-E[F])*o;for(E[2]=w,H=3;E[H-1]===f;)H-=1;return O=v(E,A,N,H,1),T<0?(p[0]=-A[0],p[1]=-A[1],-O):(p[0]=A[0],p[1]=A[1],O)}return on=b,on}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fn,q6;function p6(){if(q6)return fn;q6=1;var e=Hc();return fn=e,fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ln,y6;function Gc(){if(y6)return ln;y6=1;var e=wr(),r=v0(),a=_r(),i=e6(),n=n6(),u=p6(),v=1072243195,t=1045430272,f=[0,0];function o(l){var s,d;if(s=a(l),s&=e,s<=v)return s<t?l:n(l,0);if(s>=r)return NaN;switch(d=u(l,f),d&3){case 0:return n(f[0],f[1]);case 1:return i(f[0],f[1]);case 2:return-n(f[0],f[1]);default:return-i(f[0],f[1])}}return ln=o,ln}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sn,R6;function jr(){if(R6)return sn;R6=1;var e=Gc();return sn=e,sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cn,b6;function f0(){if(b6)return cn;b6=1;var e=2.5066282746310007;return cn=e,cn}/**
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
*/var _n,g6;function Cc(){if(g6)return _n;g6=1;function e(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}return _n=e,_n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var mn,L6;function kc(){if(L6)return mn;L6=1;var e=f0(),r=nr(),a=ir(),i=Cc(),n=143.01608;function u(v){var t,f,o;return t=1/v,t=1+t*i(t),f=a(v),v>n?(o=r(v,.5*v-.25),f=o*(o/f)):f=r(v,v-.5)/f,e*f*t}return mn=u,mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dn,N6;function Wc(){if(N6)return dn;N6=1;var e=.5772156649015329;return dn=e,dn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $n,I6;function Dc(){if(I6)return $n;I6=1;var e=Wc();function r(a,i){return i/((1+e*a)*a)}return $n=r,$n}/**
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
*/var hn,M6;function Bc(){if(M6)return hn;M6=1;function e(r){var a,i,n;return r===0?1:(r<0?a=-r:a=r,a<=1?(i=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),n=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,i=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),n=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),i/n)}return hn=e,hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qn,A6;function Uc(){if(A6)return qn;A6=1;var e=X(),r=Br(),a=Uf(),i=Z(),n=pr(),u=jr(),v=ar(),t=fr(),f=Ir(),o=kc(),l=Dc(),s=Bc();function d($){var m,_,c,q;if(r($)&&$<0||$===t||e($))return NaN;if($===0)return a($)?t:v;if($>171.61447887182297)return v;if($<-170.5674972726612)return 0;if(_=i($),_>33)return $>=0?o($):(c=n(_),(c&1)===0?m=-1:m=1,q=_-c,q>.5&&(c+=1,q=_-c),q=_*u(f*q),m*f/(i(q)*o(_)));for(q=1;$>=3;)$-=1,q*=$;for(;$<0;){if($>-1e-9)return l($,q);q/=$,$+=1}for(;$<2;){if($<1e-9)return l($,q);q/=$,$+=1}return $===2?q:($-=2,q*s($))}return qn=d,qn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pn,P6;function Rr(){if(P6)return pn;P6=1;var e=Uc();return pn=e,pn}/**
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
*/var yn,E6;function l0(){if(E6)return yn;E6=1;var e=170;return yn=e,yn}var Xc=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rn,S6;function Vc(){if(S6)return Rn;S6=1;var e=X(),r=Br(),a=Rr(),i=ar(),n=l0(),u=Xc;function v(t){return e(t)?NaN:r(t)?t<0?NaN:t<=n?u[t]:i:a(t+1)}return Rn=v,Rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bn,w6;function F6(){if(w6)return bn;w6=1;var e=Vc();return bn=e,bn}/**
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
*/var gn,O6;function Kc(){if(O6)return gn;O6=1;function e(r){var a,i,n;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=3847467039331777e-5+r*(3685766504351951e-5+r*(1588920245372942e-5+r*(4059208354298835e-6+r*(6805476611834733e-7+r*(7823975500312005e-8+r*(6246580776401795e-9+r*(341986.3488721347+r*(12287.194511824551+r*(261.61404416416684+r*2.5066282746310007))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=2.5066282746310007+r*(261.61404416416684+r*(12287.194511824551+r*(341986.3488721347+r*(6246580776401795e-9+r*(7823975500312005e-8+r*(6805476611834733e-7+r*(4059208354298835e-6+r*(1588920245372942e-5+r*(3685766504351951e-5+r*3847467039331777e-5))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/n)}return gn=e,gn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ln,T6;function Qc(){if(T6)return Ln;T6=1;var e=Kc();return Ln=e,Ln}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nn,H6;function Yc(){if(H6)return Nn;H6=1;var e=Qc();return Nn=e,Nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var In,G6;function zr(){if(G6)return In;G6=1;var e=10.900511;return In=e,In}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mn,C6;function Jc(){if(C6)return Mn;C6=1;var e=Yc(),r=Rr(),a=mr(),i=Z(),n=ir(),u=nr(),v=yr(),t=Ur(),f=zr(),o=l0(),l=4269068009004705e289;function s(d,$){var m,_,c;return d<v?$>=o?(_=s($,o-$),_*=d,_*=l,1/_):1/(d*r(d+$)):(c=d+f-.5,d+$===d?i($/c)<v?m=n(-$):m=1:(i($)<10?m=n((.5-d)*a($/c)):m=u(c/(c+$),d-.5),m*=e(d)/e(d+$)),m*=u(t/(c+$),$),m)}return Mn=s,Mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var An,k6;function Zc(){if(k6)return An;k6=1;var e=Z(),r=pr(),a=Rr(),i=F6(),n=l0(),u=Jc();function v(t,f){var o,l,s;if(t<=0||t+f<=0)return a(t)/a(t+f);if(l=r(f),l===f){if(s=r(t),s===t&&t<=n&&t+f<=n)return i(s-1)/i(l+s-1);if(e(f)<20){if(f===0)return 1;if(f<0){for(t-=1,o=t,f+=1;f!==0;)t-=1,o*=t,f+=1;return o}for(o=1/t,f-=1;f!==0;)t+=1,o/=t,f-=1;return o}}return u(t,f)}return An=v,An}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pn,W6;function En(){if(W6)return Pn;W6=1;var e=Zc();return Pn=e,Pn}/**
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
*/var Sn,D6;function jc(){if(D6)return Sn;D6=1;function e(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}return Sn=e,Sn}/**
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
*/var wn,B6;function zc(){if(B6)return wn;B6=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}return wn=e,wn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fn,U6;function xc(){if(U6)return Fn;U6=1;var e=_r(),r=Jr(),a=X(),i=Sr(),n=fr(),u=jc(),v=zc(),t=.6931471803691238,f=19082149292705877e-26,o=0x40000000000000,l=.3333333333333333,s=1048575,d=2146435072,$=1048576,m=1072693248;function _(c){var q,y,L,g,I,P,M,E,A,b,h,p;return c===0?n:a(c)||c<0?NaN:(y=e(c),I=0,y<$&&(I-=54,c*=o,y=e(c)),y>=d?c+c:(I+=(y>>20)-i|0,y&=s,E=y+614244&1048576|0,c=r(c,y|E^m),I+=E>>20|0,M=c-1,(s&2+y)<3?M===0?I===0?0:I*t+I*f:(P=M*M*(.5-l*M),I===0?M-P:I*t-(P-I*f-M)):(b=M/(2+M),p=b*b,E=y-398458|0,h=p*p,A=440401-y|0,g=h*u(h),L=p*v(h),E|=A,P=L+g,E>0?(q=.5*M*M,I===0?M-(q-b*(q+P)):I*t-(q-(b*(q+P)+I*f)-M)):I===0?M-b*(M-P):I*t-(b*(M-P)-I*f-M))))}return Fn=_,Fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var On,X6;function x(){if(X6)return On;X6=1;var e=xc();return On=e,On}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Tn,V6;function r_(){if(V6)return Tn;V6=1;var e=_r(),r=e6(),a=n6(),i=p6(),n=wr(),u=v0(),v=[0,0],t=1072243195,f=1044381696;function o(l){var s,d;if(s=e(l),s&=n,s<=t)return s<f?1:r(l,0);if(s>=u)return NaN;switch(d=i(l,v),d&3){case 0:return r(v[0],v[1]);case 1:return-a(v[0],v[1]);case 2:return-r(v[0],v[1]);default:return a(v[0],v[1])}}return Tn=o,Tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hn,K6;function Gn(){if(K6)return Hn;K6=1;var e=r_();return Hn=e,Hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cn,Q6;function e_(){if(Q6)return Cn;Q6=1;var e=X(),r=Wr(),a=Gn(),i=jr(),n=Z(),u=Wa(),v=Ir();function t(f){var o,l;return e(f)?NaN:r(f)?NaN:(l=f%2,o=n(l),o===0||o===1?u(0,l):o<.25?i(v*l):o<.75?(o=.5-o,u(a(v*o),l)):o<1.25?(l=u(1,l)-l,i(v*l)):o<1.75?(o-=1.5,-u(a(v*o),l)):(l-=u(2,l),i(v*l)))}return Cn=t,Cn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kn,Y6;function a_(){if(Y6)return kn;Y6=1;var e=e_();return kn=e,kn}/**
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
*/var Wn,J6;function i_(){if(J6)return Wn;J6=1;function e(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}return Wn=e,Wn}/**
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
*/var Dn,Z6;function n_(){if(Z6)return Dn;Z6=1;function e(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}return Dn=e,Dn}/**
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
*/var Bn,j6;function t_(){if(j6)return Bn;j6=1;function e(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}return Bn=e,Bn}/**
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
*/var Un,z6;function u_(){if(z6)return Un;z6=1;function e(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}return Un=e,Un}/**
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
*/var Xn,x6;function v_(){if(x6)return Xn;x6=1;function e(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}return Xn=e,Xn}/**
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
*/var Vn,r4;function o_(){if(r4)return Vn;r4=1;function e(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}return Vn=e,Vn}/**
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
*/var Kn,e4;function f_(){if(e4)return Kn;e4=1;function e(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}return Kn=e,Kn}/**
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
*/var Qn,a4;function l_(){if(a4)return Qn;a4=1;function e(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}return Qn=e,Qn}/**
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
*/var Yn,i4;function s_(){if(i4)return Yn;i4=1;function e(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}return Yn=e,Yn}/**
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
*/var Jn,n4;function c_(){if(n4)return Jn;n4=1;function e(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}return Jn=e,Jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zn,t4;function __(){if(t4)return Zn;t4=1;var e=X(),r=Wr(),a=Z(),i=x(),n=Na(),u=a_(),v=Ir(),t=ar(),f=i_(),o=n_(),l=t_(),s=u_(),d=v_(),$=o_(),m=f_(),_=l_(),c=s_(),q=c_(),y=.07721566490153287,L=.3224670334241136,g=1,I=-.07721566490153287,P=.48383612272381005,M=-.1475877229945939,E=.06462494023913339,A=-.07721566490153287,b=1,h=.4189385332046727,p=1.4616321449683622,R=4503599627370496,N=72057594037927940,T=13877787807814457e-33,S=1.4616321449683622,H=-.12148629053584961,F=-3638676997039505e-33;function O(w){var V,G,B,K,Y,C,W,k,tr,rr,U,Q,ur;if(e(w)||r(w))return w;if(w===0)return t;if(w<0?(V=!0,w=-w):V=!1,w<T)return-i(w);if(V){if(w>=R||(tr=u(w),tr===0))return t;G=i(v/a(tr*w))}if(w===1||w===2)return 0;if(w<2)switch(w<=.9?(ur=-i(w),w>=p-1+.27?(U=1-w,B=0):w>=p-1-.27?(U=w-(S-1),B=1):(U=w,B=2)):(ur=0,w>=p+.27?(U=2-w,B=0):w>=p-.27?(U=w-S,B=1):(U=w-1,B=2)),B){case 0:Q=U*U,C=y+Q*f(Q),Y=Q*(L+Q*o(Q)),W=U*C+Y,ur+=W-.5*U;break;case 1:Q=U*U,rr=Q*U,C=P+rr*d(rr),Y=M+rr*$(rr),K=E+rr*m(rr),W=Q*C-(F-rr*(Y+U*K)),ur+=H+W;break;case 2:C=U*(A+U*_(U)),Y=b+U*c(U),ur+=-.5*U+C/Y;break}else if(w<8)switch(B=n(w),U=w-B,W=U*(I+U*s(U)),k=g+U*l(U),ur=.5*U+W/k,Q=1,B){case 7:Q*=U+6;case 6:Q*=U+5;case 5:Q*=U+4;case 4:Q*=U+3;case 3:Q*=U+2,ur+=i(Q)}else w<N?(tr=i(w),Q=1/w,U=Q*Q,rr=h+Q*q(U),ur=(w-.5)*(tr-1)+rr):ur=w*(i(w)-1);return V&&(ur=G-ur),ur}return Zn=O,Zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jn,u4;function Xr(){if(u4)return jn;u4=1;var e=__();return jn=e,jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zn,v4;function Mr(){if(v4)return zn;v4=1;var e=709.782712893384;return zn=e,zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xn,o4;function m_(){if(o4)return xn;o4=1;var e=14901161193847656e-24;return xn=e,xn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rt,f4;function d_(){if(f4)return rt;f4=1;var e=eval;return rt=e,rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var et,l4;function $_(){if(l4)return et;l4=1;var e=d_();function r(){var a;try{e('"use strict"; (function* () {})'),a=!0}catch{a=!1}return a}return et=r,et}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var at,s4;function c4(){if(s4)return at;s4=1;var e=$_();return at=e,at}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var it,_4;function h_(){if(_4)return it;_4=1;var e=Z(),r=yr(),a=1e6;function i(n,u){var v,t,f,o,l,s;if(s={},arguments.length>1&&(s=u),t=s.tolerance||r,o=s.maxTerms||a,l=s.initialValue||0,v=typeof n.next=="function",v===!0){for(f of n)if(l+=f,e(t*l)>=e(f)||--o===0)break}else do f=n(),l+=f;while(e(t*l)<e(f)&&--o);return l}return it=i,it}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nt,m4;function q_(){if(m4)return nt;m4=1;var e=Z(),r=yr(),a=1e6;function i(n,u){var v,t,f,o,l;l={},arguments.length>1&&(l=u),v=l.tolerance||r,f=l.maxTerms||a,o=l.initialValue||0;do t=n(),o+=t;while(e(v*o)<e(t)&&--f);return o}return nt=i,nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tt,d4;function xr(){if(d4)return tt;d4=1;var e=c4(),r=h_(),a=q_(),i;return e()?i=r:i=a,tt=i,tt}/**
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
*/var ut,$4;function p_(){if($4)return ut;$4=1;function e(r,a){var i=1,n=r,u=a;return v;function v(){var t=i;return i*=n/u,n-=1,t}}return ut=e,ut}/**
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
*/var vt,h4;function y_(){if(h4)return vt;h4=1;var e=xr(),r=p_();function a(i,n){var u,v;return v=r(i,n),u=e(v),u}return vt=a,vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ot,q4;function R_(){if(q4)return ot;q4=1;var e=ir();function r(a,i){var n,u,v,t;if(v=e(-i),u=v,u!==0)for(n=u,t=1;t<a;++t)n/=t,n*=i,u+=n;return u}return ot=r,ot}/**
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
*/var ft,p4;function b_(){if(p4)return ft;p4=1;function e(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}return ft=e,ft}/**
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
*/var lt,y4;function g_(){if(y4)return lt;y4=1;function e(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}return lt=e,lt}/**
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
*/var st,R4;function L_(){if(R4)return st;R4=1;function e(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}return st=e,st}/**
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
*/var ct,b4;function N_(){if(b4)return ct;b4=1;function e(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}return ct=e,ct}/**
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
*/var _t,g4;function I_(){if(g4)return _t;g4=1;function e(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}return _t=e,_t}/**
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
*/var mt,L4;function M_(){if(L4)return mt;L4=1;function e(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}return mt=e,mt}/**
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
*/var dt,N4;function A_(){if(N4)return dt;N4=1;function e(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}return dt=e,dt}/**
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
*/var $t,I4;function P_(){if(I4)return $t;I4=1;function e(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}return $t=e,$t}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ht,M4;function E_(){if(M4)return ht;M4=1;var e=X(),r=ir(),a=Zr(),i=ar(),n=fr(),u=b_(),v=g_(),t=L_(),f=N_(),o=I_(),l=M_(),s=A_(),d=P_(),$=1e-300,m=13877787807814457e-33,_=.8450629115104675,c=.12837916709551256,q=1,y=-.0023621185607526594,L=1,g=-.009864944034847148,I=1,P=-.0098649429247001,M=1;function E(A){var b,h,p,R,N,T,S,H;if(e(A))return NaN;if(A===i)return 0;if(A===n)return 2;if(A===0)return 1;if(A<0?(b=!0,h=-A):(b=!1,h=A),h<.84375)return h<m?1-A:(p=A*A,R=c+p*u(p),N=q+p*v(p),T=R/N,A<.25?1-(A+A*T):(R=A*T,R+=A-.5,.5-R));if(h<1.25)return N=h-1,S=y+N*t(N),H=L+N*f(N),b?1+_+S/H:1-_-S/H;if(h<28){if(N=1/(h*h),h<2.857142857142857)R=g+N*o(N),N=I+N*l(N);else{if(A<-6)return 2-$;R=P+N*s(N),N=M+N*d(N)}return p=a(h,0),R=r(-(p*p)-.5625)*r((p-h)*(p+h)+R/N),b?2-R/h:R/h}return b?2-$:$*$}return ht=E,ht}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qt,A4;function s0(){if(A4)return qt;A4=1;var e=E_();return qt=e,qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pt,P4;function S_(){if(P4)return pt;P4=1;var e=s0(),r=J(),a=ir(),i=Ir();function n(u,v){var t,f,o,l,s;if(l=e(r(v)),l!==0&&u>1){for(f=a(-v)/r(i*v),f*=v,t=.5,f/=t,o=f,s=2;s<u;++s)f/=s-t,f*=v,o+=f;l+=o}return l}return pt=n,pt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yt,E4;function Vr(){if(E4)return yt;E4=1;var e=-708.3964185322641;return yt=e,yt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Rt,S4;function w_(){if(S4)return Rt;S4=1;var e=ir(),r=nr(),a=x(),i=Mr(),n=Vr();function u(v,t){var f,o;return o=v*a(t),t>=1?o<i&&-t>n?f=r(t,v)*e(-t):v>=1?f=r(t/e(t/v),v):f=e(o-t):o>n?f=r(t,v)*e(-t):t/v<i?f=r(t/e(t/v),v):f=e(o-t),f}return Rt=u,Rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bt,w4;function F4(){if(w4)return bt;w4=1;function e(r,a){var i,n;if(n=r.length,n<2||a===0)return n===0?0:r[0];for(n-=1,i=r[n]*a+r[n-1],n-=2;n>=0;)i=i*a+r[n],n-=1;return i}return bt=e,bt}/**
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
*/var gt,O4;function F_(){if(O4)return gt;O4=1;var e=Function;return gt=e,gt}/**
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
*/var Lt,T4;function O_(){if(T4)return Lt;T4=1;var e=F_();return Lt=e,Lt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nt,H4;function T_(){if(H4)return Nt;H4=1;var e=O_(),r=F4();function a(i){var n,u,v,t;if(i.length>500)return f;if(n="return function evalpoly(x){",u=i.length,u===0)n+="return 0.0;";else if(u===1)n+="return "+i[0]+";";else{for(n+="if(x===0.0){return "+i[0]+";}",n+="return "+i[0],v=u-1,t=1;t<u;t++)n+="+x*",t<v&&(n+="("),n+=i[t];for(t=0;t<v-1;t++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new e(n)();function f(o){return r(i,o)}}return Nt=a,Nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var It,G4;function Ar(){if(G4)return It;G4=1;var e=or(),r=F4(),a=T_();return e(r,"factory",a),It=r,It}/**
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
*/var Mt,C4;function H_(){if(C4)return Mt;C4=1;function e(r){var a=-r,i=-1,n=0;return u;function u(){return i*=a,n+=1,i/n}}return Mt=e,Mt}/**
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
*/var At,k4;function G_(){if(k4)return At;k4=1;var e=Z(),r=x(),a=yr(),i=xr(),n=H_();function u(v){var t,f;return v<=-1?NaN:(f=e(v),f>.95?r(1+v)-v:f<a?-v*v/2:(t={initialValue:-v},i(n(v),t)))}return At=u,At}/**
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
*/var Pt,W4;function D4(){if(W4)return Pt;W4=1;var e=G_();return Pt=e,Pt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Et,B4;function c0(){if(B4)return Et;B4=1;var e=6.283185307179586;return Et=e,Et}/**
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
*/var St,U4;function C_(){if(U4)return St;U4=1;function e(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}return St=e,St}/**
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
*/var wt,X4;function k_(){if(X4)return wt;X4=1;function e(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}return wt=e,wt}/**
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
*/var Ft,V4;function W_(){if(V4)return Ft;V4=1;function e(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}return Ft=e,Ft}/**
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
*/var Ot,K4;function D_(){if(K4)return Ot;K4=1;function e(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}return Ot=e,Ot}/**
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
*/var Tt,Q4;function B_(){if(Q4)return Tt;Q4=1;function e(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}return Tt=e,Tt}/**
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
*/var Ht,Y4;function U_(){if(Y4)return Ht;Y4=1;function e(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}return Ht=e,Ht}/**
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
*/var Gt,J4;function X_(){if(J4)return Gt;J4=1;function e(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}return Gt=e,Gt}/**
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
*/var Ct,Z4;function V_(){if(Z4)return Ct;Z4=1;function e(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}return Ct=e,Ct}/**
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
*/var kt,j4;function K_(){if(j4)return kt;j4=1;function e(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}return kt=e,kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Wt,z4;function Q_(){if(z4)return Wt;z4=1;var e=Ar(),r=D4(),a=s0(),i=J(),n=ir(),u=c0(),v=C_(),t=k_(),f=W_(),o=D_(),l=B_(),s=U_(),d=X_(),$=V_(),m=K_(),_=[0,0,0,0,0,0,0,0,0,0];function c(q,y){var L,g,I,P,M;return g=(y-q)/q,I=-r(g),P=q*I,M=i(2*I),y<q&&(M=-M),_[0]=v(M),_[1]=t(M),_[2]=f(M),_[3]=o(M),_[4]=l(M),_[5]=s(M),_[6]=d(M),_[7]=$(M),_[8]=m(M),_[9]=-.0005967612901927463,L=e(_,1/q),L*=n(-P)/i(u*q),y<q&&(L=-L),L+=a(i(P))/2,L}return Wt=c,Wt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Dt,x4;function Y_(){if(x4)return Dt;x4=1;function e(r,a){var i=1,n=r,u=a;return v;function v(){var t=i;return n+=1,i*=u/n,t}}return Dt=e,Dt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bt,rl;function el(){if(rl)return Bt;rl=1;var e=xr(),r=Y_();function a(i,n,u){var v,t;return u=u||0,t=r(i,n),v=e(t,{initialValue:u}),v}return Bt=a,Bt}/**
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
*/var Ut,al;function J_(){if(al)return Ut;al=1;function e(r){var a,i,n;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/n)}return Ut=e,Ut}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Xt,il;function Z_(){if(il)return Xt;il=1;var e=J_();return Xt=e,Xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vt,nl;function _0(){if(nl)return Vt;nl=1;var e=Z_();return Vt=e,Vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Kt,tl;function j_(){if(tl)return Kt;tl=1;var e=_0(),r=Xr(),a=Rr(),i=D4(),n=J(),u=Z(),v=ir(),t=nr(),f=Or(),o=Nr(),l=x(),s=Tr(),d=Mr(),$=Vr(),m=zr(),_=Ur();function c(q,y){var L,g,I,P,M,E,A;return I=q+m-.5,A=(y-q-m+.5)/I,q<1?y<=$||q<1/s?v(q*l(y)-y-r(q)):t(y,q)*v(-y)/a(q):(u(A*A*q)<=100&&q>150?(L=q*i(A)+y*(.5-m)/I,L=v(L)):(P=q*l(y/I),M=q-y,o(P,M)<=$||f(P,M)>=d?(g=M/q,o(P,M)/2>$&&f(P,M)/2<d?(E=t(y/I,q/2)*v(M/2),L=E*E):o(P,M)/4>$&&f(P,M)/4<d&&y>q?(E=t(y/I,q/4)*v(M/4),L=E*E,L*=L):g>$&&g<d?L=t(y*v(g)/I,q):L=v(P+M)):L=t(y/I,q)*v(M)),L*=n(I/_)/e(q),L)}return Kt=c,Kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qt,ul;function z_(){if(ul)return Qt;ul=1;var e=X(),r=Wr(),a=Z(),i=kr(),n=x(),u=nr(),v=Na();function t(f,o){var l,s;if(e(f)||e(o))return NaN;if(o===0)return 0;if(f===0)return-1;if(f<0&&o%2===0&&(f=-f),f>0){if((a(o*(f-1))<.5||a(o)<.2)&&(s=n(f)*o,s<.5))return i(s)}else if(v(o)!==o)return NaN;return l=u(f,o)-1,r(l)||e(l)?NaN:l}return Qt=t,Qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yt,vl;function x_(){if(vl)return Yt;vl=1;var e=z_();return Yt=e,Yt}/**
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
*/var Jt,ol;function rm(){if(ol)return Jt;ol=1;function e(r){var a,i,n;return r===0?-.01803556856784494:(r<0?a=-r:a=r,a<=1?(i=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),n=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,i=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),n=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),i/n)}return Jt=e,Jt}/**
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
*/var Zt,fl;function em(){if(fl)return Zt;fl=1;function e(r){var a,i,n;return r===0?.04906224540690395:(r<0?a=-r:a=r,a<=1?(i=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),n=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,i=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),n=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),i/n)}return Zt=e,Zt}/**
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
*/var jt,ll;function am(){if(ll)return jt;ll=1;function e(r){var a,i,n;return r===0?-.029232972183027003:(r<0?a=-r:a=r,a<=1?(i=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),n=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,i=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),n=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),i/n)}return jt=e,jt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zt,sl;function im(){if(sl)return zt;sl=1;var e=x(),r=yr(),a=rm(),i=em(),n=am(),u=.15896368026733398,v=.5281534194946289,t=.45201730728149414;function f(o,l,s){var d,$,m,_;if(o<r)return-e(o);if(l===0||s===0)return 0;if($=0,o>2){if(o>=3){do o-=1,s-=1,$+=e(o);while(o>=3);s=o-2}return m=s*(o+1),_=a(s),$+=m*u+m*_,$}return o<1&&($+=-e(o),s=l,l=o,o+=1),o<=1.5?(m=i(l),d=l*s,$+=d*v+d*m,$):(m=s*l,_=n(-s),$+=m*t+m*_,$)}return zt=f,zt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xt,cl;function nm(){if(cl)return xt;cl=1;var e=Rr(),r=kr(),a=mr(),i=X(),n=im();function u(v){return i(v)?NaN:v<0?v<-.5?e(1+v)-1:r(-a(v)+n(v+2,v+1,v)):v<2?r(n(v+1,v,v-1)):e(1+v)-1}return xt=u,xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,_l;function tm(){if(_l)return r1;_l=1;var e=nm();return r1=e,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e1,ml;function um(){if(ml)return e1;ml=1;function e(r,a){var i,n,u,v;return i=-a,a=-a,n=r+1,u=1,t;function t(){return v=i/n,i*=a,u+=1,i/=u,n+=1,v}}return e1=e,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var a1,dl;function vm(){if(dl)return a1;dl=1;var e=x_(),r=xr(),a=tm(),i=um();function n(u,v,t){var f,o,l,s,d;return o=a(u),l=(o+1)/u,s=e(v,u),o-=s,o/=u,d=i(u,v),s+=1,f=t?l:0,o=-s*r(d,{initialValue:(f-o)/s}),t&&(o=-o),[o,l]}return a1=n,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,$l;function m0(){if($l)return i1;$l=1;var e=11754943508222875e-54;return i1=e,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1,hl;function om(){if(hl)return n1;hl=1;var e=Z(),r=m0(),a=yr(),i=1e6;function n(t,f,o){var l,s,d,$,m,_,c;if(l=typeof t.next=="function",c=l?t.next().value:t(),$=c[1],d=c[0],$===0&&($=r),m=$,_=0,l===!0)do c=t.next().value,c&&(_=c[1]+c[0]*_,_===0&&(_=r),m=c[1]+c[0]/m,m===0&&(m=r),_=1/_,s=m*_,$*=s);while(e(s-1)>f&&--o);else do c=t(),c&&(_=c[1]+c[0]*_,_===0&&(_=r),m=c[1]+c[0]/m,m===0&&(m=r),_=1/_,s=m*_,$*=s);while(c&&e(s-1)>f&&--o);return d/$}function u(t,f,o){var l,s,d,$,m,_;if(l=typeof t.next=="function",_=l?t.next().value:t(),d=_[1],d===0&&(d=r),$=d,m=0,l===!0)do _=t.next().value,_&&(m=_[1]+_[0]*m,m===0&&(m=r),$=_[1]+_[0]/$,$===0&&($=r),m=1/m,s=$*m,d*=s);while(_&&e(s-1)>f&&--o);else do _=t(),_&&(m=_[1]+_[0]*m,m===0&&(m=r),$=_[1]+_[0]/$,$===0&&($=r),m=1/m,s=$*m,d*=s);while(_&&e(s-1)>f&&--o);return d}function v(t,f){var o,l,s;return l={},arguments.length>1&&(l=f),o=l.maxIter||i,s=l.tolerance||a,l.keep?u(t,s,o):n(t,s,o)}return n1=v,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1,ql;function fm(){if(ql)return t1;ql=1;var e=Z(),r=yr(),a=m0(),i=1e6;function n(t,f,o){var l,s,d,$,m,_;_=t(),m=_[1],s=_[0],m===0&&(m=a),d=m,$=0;do _=t(),_&&($=_[1]+_[0]*$,$===0&&($=a),d=_[1]+_[0]/d,d===0&&(d=a),$=1/$,l=d*$,m*=l);while(_&&e(l-1)>f&&--o);return s/m}function u(t,f,o){var l,s,d,$,m;m=t(),$=m[1],$===0&&($=a),s=$,d=0;do m=t(),m&&(d=m[1]+m[0]*d,d===0&&(d=a),s=m[1]+m[0]/s,s===0&&(s=a),d=1/d,l=s*d,$*=l);while(m&&e(l-1)>f&&--o);return $}function v(t,f){var o,l,s;return l={},arguments.length>1&&(l=f),s=l.tolerance||r,o=l.maxIter||i,l.keep?u(t,s,o):n(t,s,o)}return t1=v,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,pl;function yl(){if(pl)return u1;pl=1;var e=c4(),r=om(),a=fm(),i;return e()?i=r:i=a,u1=i,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var v1,Rl;function lm(){if(Rl)return v1;Rl=1;function e(r,a){var i=a-r+1,n=r,u=0;return v;function v(){return u+=1,i+=2,[u*(n-u),i]}}return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var o1,bl;function gl(){if(bl)return o1;bl=1;var e=yl(),r=lm();function a(i,n){var u=r(i,n);return 1/(n-i+1+e(u))}return o1=a,o1}/**
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
*/var f1,Ll;function sm(){if(Ll)return f1;Ll=1;var e=pr(),r=Rr(),a=Z(),i=nr(),n=x(),u=m_(),v=Tr(),t=Mr(),f=y_(),o=R_(),l=S_(),s=w_(),d=Q_(),$=el(),m=j_(),_=vm(),c=gl();function q(y,L,g,I){var P,M,E,A,b,h,p,R,N,T,S,H,F,O;switch(p=0,R=I,h=L<30&&L<=y+1&&y<t,h?(F=e(L),N=F===L,E=N?!1:a(F-L)===.5):(N=!1,E=!1),N&&y>.6?(R=!R,M=0):E&&y>.2?(R=!R,M=1):y<u&&L>1?M=6:y>1e3&&(L<y||a(L-50)/y<1)?(R=!R,M=7):y<.5?-.4/n(y)<L?M=2:M=3:y<1.1?y*.75<L?M=2:M=3:(b=!1,g&&L>20&&(T=a((y-L)/L),L>200?20/L>T*T&&(b=!0):T<.4&&(b=!0)),b?M=5:y-1/(3*y)<L?M=2:(M=4,R=!R)),M){case 0:p=o(L,y),g===!1&&(p*=r(L));break;case 1:p=l(L,y),g===!1&&(p*=r(L));break;case 2:p=g?m(L,y):s(L,y),p!==0&&(A=0,P=!1,R&&(A=g?1:r(L),g||p>=1||v*p>A?(A/=p,g||L<1||v/L>A?(A*=-L,P=!0):A=0):A=0),p*=$(L,y,A)/L,P&&(R=!1,p=-p));break;case 3:R=!R,S=_(L,y,R),p=S[0],O=S[1],R=!1,g&&(p/=O);break;case 4:p=g?m(L,y):s(L,y),p!==0&&(p*=c(L,y));break;case 5:p=d(L,y),y>=L&&(R=!R);break;case 6:p=g?i(y,L)/r(L+1):i(y,L)/L,p*=1-L*y/(L+1);break;case 7:p=g?m(L,y):s(L,y),p/=y,p!==0&&(p*=f(L,y));break}return g&&p>1&&(p=1),R&&(H=g?1:r(L),p=H-p),p}return f1=q,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var l1,Nl;function cm(){if(Nl)return l1;Nl=1;var e=Xr(),r=ir(),a=x(),i=f0(),n=Mr(),u=ar(),v=l0(),t=sm(),f=el(),o=gl();function l(s,d,$,m){var _,c,q,y;return s<0||d<=0?NaN:(_=$===void 0?!0:$,q=m,d>=v&&!_?(q&&d*4<s?(y=d*a(s)-s,y+=a(o(d,s))):!q&&d>4*s?(y=d*a(s)-s,c=0,y+=a(f(d,s,c)/d)):(y=t(s,d,!0,q),y===0?q?(y=1+1/(12*d)+1/(288*d*d),y=a(y)-d+(d-.5)*a(d),y+=a(i)):(y=d*a(s)-s,c=0,y+=a(f(d,s,c)/d)):y=a(y)+e(d)),y>n?u:r(y)):t(s,d,_,q))}return l1=l,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,Il;function Ml(){if(Il)return s1;Il=1;var e=cm();return s1=e,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var c1,Al;function _m(){if(Al)return c1;Al=1;var e=ir(),r=nr(),a=x(),i=Mr(),n=Vr();function u(v,t){var f,o;return o=v*a(t),t>=1?o<i&&-t>n?f=r(t,v)*e(-t):v>=1?f=r(t/e(t/v),v):f=e(o-t):o>n?f=r(t,v)*e(-t):t/v<i?f=r(t/e(t/v),v):f=e(o-t),f}return c1=u,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _1,Pl;function mm(){if(Pl)return _1;Pl=1;var e=_0(),r=Xr(),a=Rr(),i=mr(),n=J(),u=Z(),v=ir(),t=nr(),f=Or(),o=Nr(),l=x(),s=Mr(),d=Vr(),$=zr(),m=Ur();function _(c,q){var y,L,g,I,P,M,E;return g=c+$-.5,E=(q-c-$+.5)/g,c<1?q<=d?v(c*l(q)-q-r(c)):t(q,c)*v(-q)/a(c):(u(E*E*c)<=100&&c>150?(y=c*(i(E)-E)+q*(.5-$)/g,y=v(y)):(I=c*l(q/g),P=c-q,o(I,P)<=d||f(I,P)>=s?(L=P/c,o(I,P)/2>d&&f(I,P)/2<s?(M=t(q/g,c/2)*v(P/2),y=M*M):o(I,P)/4>d&&f(I,P)/4<s&&q>c?(M=t(q/g,c/4)*v(P/4),y=M*M,y*=y):L>d&&L<s?y=t(q*v(L)/g,c):y=v(I+P)):y=t(q/g,c)*v(P)),y*=n(g/m)/e(c),y)}return _1=_,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var m1,El;function dm(){if(El)return m1;El=1;var e=En(),r=F6(),a=Ml(),i=mr(),n=Z(),u=nr(),v=x(),t=Fr(),f=yr(),o=_m(),l=mm(),s=new Array(30);function d($,m,_,c,q,y,L){var g,I,P,M,E,A,b,h,p,R,N,T,S,H,F,O,w,V;if(A=m-1,w=$+A/2,c<.35?R=i(-c):R=v(_),V=-w*R,T=l(m,V),T<=t)return q;for(L?(g=T/e($,m),g/=u(w,m)):g=o(m,V)/u(w,m),g*=y,s[0]=1,S=a(V,m,!0,!0),S/=T,M=q+g*S,P=1,b=R/2,b*=b,h=1,N=4*w*w,E=m,F=1;F<s.length;++F){for(P+=2,s[F]=0,p=m-F,I=3,H=1;H<F;++H)p=H*m-F,s[F]+=p*s[F-H]/r(I),I+=2;if(s[F]/=F,s[F]+=A/r(P),S=(E*(E+1)*S+(V+E+1)*h)/N,h*=b,E+=2,O=g*s[F]*S,M+=O,O>1){if(n(O)<n(f*M))break}else if(n(O/f)<n(M))break}return M}return m1=d,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var d1,Sl;function $m(){if(Sl)return d1;Sl=1;function e(r,a,i){var n,u;if(i===0)return 1;for(n=1,u=0;u<i;u++)n*=(r+u)/(a+u);return n}return d1=e,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $1,wl;function hm(){if(wl)return $1;wl=1;var e=Z(),r=Or();function a(i,n){return r(e(i),e(n))}return $1=a,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,Fl;function qm(){if(Fl)return h1;Fl=1;var e=hm();return h1=e,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,Ol;function pm(){if(Ol)return q1;Ol=1;var e=Z(),r=Nr();function a(i,n){return r(e(i),e(n))}return q1=a,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,Tl;function ym(){if(Tl)return p1;Tl=1;var e=pm();return p1=e,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var y1,Hl;function R1(){if(Hl)return y1;Hl=1;var e=_0(),r=qm(),a=ym(),i=kr(),n=mr(),u=J(),v=Z(),t=ir(),f=nr(),o=Nr(),l=x(),s=Mr(),d=Vr(),$=zr(),m=Ur();function _(c,q,y,L,g){var I,P,M,E,A,b,h,p,R,N,T,S,H,F;if(!g)return f(y,c)*f(L,q);if(H=c+q,E=c+$-.5,A=q+$-.5,b=H+$-.5,I=e(H),I/=e(c)*e(q),I*=u(A/m),I*=u(E/b),h=(y*q-L*E)/E,p=(L*c-y*A)/A,a(h,p)<.2)if(h*p>0||o(c,q)<1)v(h)<.1?I*=t(c*n(h)):I*=f(y*b/E,c),v(p)<.1?I*=t(q*n(p)):I*=f(L*b/A,q);else if(r(h,p)<.5)P=c<q,M=q/c,P&&M*p<.1||!P&&h/M>.1?(R=i(M*n(p)),R=h+R+R*h,R=c*n(R),I*=t(R)):(R=i(n(h)/M),R=p+R+R*p,R=q*n(R),I*=t(R));else if(v(h)<v(p))if(F=c*n(h)+q*l(L*b/A),F<=d||F>=s){if(F+=l(I),F>=s)return NaN;I=t(F)}else I*=t(F);else if(F=q*n(p)+c*l(y*b/E),F<=d||F>=s){if(F+=l(I),F>=s)return NaN;I=t(F)}else I*=t(F);else if(T=y*b/E,S=L*b/A,h=c*l(T),p=q*l(S),h>=s||h<=d||p>=s||p<=d)if(c<q)if(N=f(S,q/c),R=c*(l(T)+l(N)),R<s&&R>d)I*=f(N*T,c);else{if(p+=h+l(I),p>=s)return NaN;I=t(p)}else if(N=f(T,c/q),R=(l(N)+l(S))*q,R<s&&R>d)I*=f(N*S,q);else{if(p+=h+l(I),p>=s)return NaN;I=t(p)}else I*=f(T,c)*f(S,q);return I}return y1=_,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var b1,Gl;function Rm(){if(Gl)return b1;Gl=1;var e=yl(),r=R1(),a={keep:!0,maxIter:1e3};function i(u,v,t,f){var o=0;return l;function l(){var s,d,$;return d=(u+o-1)*(u+v+o-1)*o*(v-o)*t*t,s=u+2*o-1,d/=s*s,$=o,$+=o*(v-o)*t/(u+2*o-1),$+=(u+o)*(u*f-v*t+1+o*(2-t))/(u+2*o+1),o+=1,[d,$]}}function n(u,v,t,f,o,l){var s,d,$;return s=r(u,v,t,f,o),l&&(l[1]=s),s===0?s:($=i(u,v,t,f),d=e($,a),s/d)}return b1=n,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,Cl;function bm(){if(Cl)return g1;Cl=1;var e=9007199254740991;return g1=e,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,kl;function gm(){if(kl)return L1;kl=1;function e(r,a){var i=0,n;if(r===0)return a;if(a===0)return r;for(;(r&1)===0&&(a&1)===0;)r>>>=1,a>>>=1,i+=1;for(;(r&1)===0;)r>>>=1;for(;a;){for(;(a&1)===0;)a>>>=1;r>a&&(n=a,a=r,r=n),a-=r}return r<<i}return L1=e,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,Wl;function Lm(){if(Wl)return N1;Wl=1;function e(r,a){var i=1,n;if(r===0)return a;if(a===0)return r;for(;r%2===0&&a%2===0;)r/=2,a/=2,i*=2;for(;r%2===0;)r/=2;for(;a;){for(;a%2===0;)a/=2;r>a&&(n=a,a=r,r=n),a-=r}return i*r}return N1=e,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,Dl;function Nm(){if(Dl)return I1;Dl=1;var e=X(),r=Br(),a=ar(),i=fr(),n=Yf(),u=gm(),v=Lm();function t(f,o){return e(f)||e(o)?NaN:f===a||o===a||f===i||o===i?NaN:r(f)&&r(o)?(f<0&&(f=-f),o<0&&(o=-o),f<=n&&o<=n?u(f,o):v(f,o)):NaN}return I1=t,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,Bl;function Im(){if(Bl)return M1;Bl=1;var e=Nm();return M1=e,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,Ul;function Mm(){if(Ul)return A1;Ul=1;var e=bm(),r=ar(),a=Br(),i=X(),n=ui(),u=pr(),v=Im();function t(f,o){var l,s,d,$,m,_,c;if(i(f)||i(o))return NaN;if(!a(f)||!a(o))return NaN;if(o<0||(s=1,f<0&&(f=-f+o-1,n(o)&&(s*=-1)),o>f))return 0;if(o===0||o===f)return s;if(o===1||o===f-1)return s*f;for(f-o<o&&(o=f-o),c=u(e/f),l=1,m=1;m<=o&&!(l>c);m++)l*=f,l/=m,f-=1;return m>o?s*l:(d=t(f,o-m+1),d===r?s*d:($=t(o,o-m+1),_=v(d,$),d/=_,$/=_,l/=$,s*l*d))}return A1=t,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,Xl;function Am(){if(Xl)return P1;Xl=1;var e=Mm();return P1=e,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var E1,Vl;function Pm(){if(Vl)return E1;Vl=1;var e=Am(),r=pr(),a=nr(),i=Fr();function n(u,v,t,f){var o,l,s,d,$;if(l=a(t,u),l>i)for(d=l,$=r(u-1);$>v;$--)d*=($+1)*f/((u-$)*t),l+=d;else if(s=r(u*t),s<=v+1&&(s=r(v+2)),l=a(t,s)*a(f,u-s),l*=e(r(u),r(s)),l===0)for($=s-1;$>v;$--)l+=a(t,$)*a(f,u-$),l*=e(r(u),r($));else{for(d=l,o=l,$=s-1;$>v;$--)d*=($+1)*f/((u-$)*t),l+=d;for(d=o,$=s+1;$<=u;$++)d*=(u-$+1)*t/($*f),l+=d}return l}return E1=n,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var S1,Kl;function Em(){if(Kl)return S1;Kl=1;var e=R1();function r(a,i,n,u,v,t,f){var o,l,s,d;if(o=e(a,i,n,u,t),f&&(f[1]=o),o/=a,o===0)return o;for(s=1,l=1,d=0;d<v-1;++d)l*=(a+i+d)*n/(a+d+1),s+=l;return o*=s,o}return S1=r,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var w1,Ql;function Sm(){if(Ql)return w1;Ql=1;var e=_0(),r=xr(),a=mr(),i=J(),n=ir(),u=nr(),v=x(),t=Fr(),f=Mr(),o=Vr(),l=zr(),s=Ur(),d={maxTerms:100};function $(_,c,q,y){var L=1-c,g=1;return I;function I(){var P=y/_;return _+=1,y*=L*q/g,g+=1,L+=1,P}}function m(_,c,q,y,L,g,I){var P,M,E,A,b,h,p,R;return L?(p=_+c,M=_+l-.5,E=c+l-.5,A=p+l-.5,P=e(p)/(e(_)*e(c)),b=v(A/E)*(c-.5),h=v(q*A/M)*_,b>o&&b<f&&h>o&&h<f?(_*c<E*10?P*=n((c-.5)*a(_/E)):P*=u(A/E,c-.5),P*=u(q*A/M,_),P*=i(M/s),g&&(g[1]=P*u(I,c))):(P=v(P)+b+h+(v(M)-1)/2,g&&(g[1]=n(P+c*v(I))),P=n(P))):P=u(q,_),P<t?y:(R=$(_,c,q,P),d.initialValue=y,r(R,d))}return w1=m,w1}var F1,Yl;function Jl(){if(Yl)return F1;Yl=1;var e=X(),r=kr(),a=pr(),i=mr(),n=qa(),u=o0(),v=J(),t=ir(),f=nr(),o=Or(),l=Nr(),s=Tr(),d=Fr(),$=Yf(),m=Bi(),_=Ir(),c=dm(),q=$m(),y=R1(),L=Rm(),g=Pm(),I=Em(),P=Sm(),M=1/_;function E(A,b,h,p,R,N,T,S){var H,F,O,w,V,G,B,K,Y,C,W,k;if(k=1-A,B=S,K=S+T,N[K]=-1,e(A)||A<0||A>1)return N[B]=NaN,N[K]=NaN,N;if(p){if(b<0||h<0)return N[B]=NaN,N[K]=NaN,N;if(b===0){if(h===0)return N[B]=NaN,N[K]=NaN,N;if(h>0)return N[B]=R?0:1,N}else if(h===0&&b>0)return N[B]=R?1:0,N}else if(b<=0||h<=0)return N[B]=NaN,N[K]=NaN,N;return A===0?(b===1?N[K]=1:N[K]=b<1?s/2:d*2,R?(N[B]=p?1:u(b,h),N):(N[B]=0,N)):A===1?(h===1?N[K]=1:N[K]=h<1?s/2:d*2,R?N[B]=0:N[B]=p?1:u(b,h),N):b===.5&&h===.5?(N[K]=M*v(k*A),W=n(v(R?k:A)),W/=m,p||(W*=_),N[B]=W,N):(b===1&&(G=h,h=b,b=G,G=k,k=A,A=G,R=!R),h===1?b===1?(N[B]=R?k:A,N[K]=1,N):(N[K]=b*f(A,b-1),k<.5?W=R?-r(b*i(-k)):t(b*i(-k)):W=R?-(f(A,b)-1):f(A,b),p||(W/=b),N[B]=W,N):(l(b,h)<=1?(A>.5&&(G=h,h=b,b=G,G=k,k=A,A=G,R=!R),o(b,h)<=1?b>=l(.2,h)||f(A,b)<=.9?R?(O=-(p?1:u(b,h)),R=!1,O=-P(b,h,A,O,p,N,k)):O=P(b,h,A,0,p,N,k):(G=h,h=b,b=G,G=k,k=A,A=G,R=!R,k>=.3?R?(O=-(p?1:u(b,h)),R=!1,O=-P(b,h,A,O,p,N,k)):O=P(b,h,A,0,p,N,k):(p?F=1:F=q(b+h,b,20),O=I(b,h,A,k,20,p,N),R?(O-=p?1:u(b,h),R=!1,O=-c(b+20,h,A,k,O,F,p)):O=c(b+20,h,A,k,O,F,p))):h<=1||A<.1&&f(h*A,b)<=.7?R?(O=-(p?1:u(b,h)),R=!1,O=-P(b,h,A,O,p,N,k)):O=P(b,h,A,0,p,N,k):(G=h,h=b,b=G,G=k,k=A,A=G,R=!R,k>=.3?R?(O=-(p?1:u(b,h)),R=!1,O=-P(b,h,A,O,p,N,k)):O=P(b,h,A,0,p,N,k):b>=15?R?(O=-(p?1:u(b,h)),R=!1,O=-c(b,h,A,k,O,1,p)):O=c(b,h,A,k,0,1,p):(p?F=1:F=q(b+h,b,20),O=I(b,h,A,k,20,p,N),R?(O-=p?1:u(b,h),R=!1,O=-c(b+20,h,A,k,O,F,p)):O=c(b+20,h,A,k,O,F,p)))):(b<h?H=b-(b+h)*A:H=(b+h)*k-h,H<0&&(G=h,h=b,b=G,G=k,k=A,A=G,R=!R),h<40?a(b)===b&&a(h)===h&&b<$-100?(Y=b-1,C=h+Y,O=g(C,Y,A,k),p||(O*=u(b,h))):h*A<=.7?R?(O=-(p?1:u(b,h)),R=!1,O=-P(b,h,A,O,p,N,k)):O=P(b,h,A,0,p,N,k):b>15?(C=a(h),C===h&&(C-=1),w=h-C,p?F=1:F=q(b+w,w,C),O=I(w,b,k,A,C,p),O=c(b,w,A,k,O,1,p),O/=F):p?(C=a(h),w=h-C,w<=0&&(C-=1,w+=1),O=I(w,b,k,A,C,p),O+=I(b,w,A,k,20,p),R&&(O-=1),O=c(b+20,w,A,k,O,1,p),R&&(O=-O,R=!1)):O=L(b,h,A,k,p,N):O=L(b,h,A,k,p,N)),N[K]<0&&(N[K]=y(b,h,A,k,!0)),V=k*A,N[K]!==0&&(s*V<N[K]?N[K]=s/2:N[K]/=V),N[B]=R?(p?1:u(b,h))-O:O,N))}return F1=E,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,Zl;function wm(){if(Zl)return O1;Zl=1;var e=Jl();function r(a,i,n,u,v){return e(a,i,n,u,v,[0,0],1,0)}return O1=r,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1,jl;function zl(){if(jl)return T1;jl=1;var e=or(),r=wm(),a=Jl();return e(r,"assign",a),T1=r,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,xl;function Fm(){if(xl)return H1;xl=1;var e=zl().assign;function r(a,i,n,u,v){var t=[0,0];return u=u!==!1,v=v===!0,e(a,i,n,u,v,t,1,0),t[0]}return H1=r,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1,rs;function r0(){if(rs)return G1;rs=1;var e=Fm();return G1=e,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1,es;function Om(){if(es)return C1;es=1;var e=r0(),r=X();function a(i,n,u){return r(i)||r(n)||r(u)||n<=0||u<=0?NaN:i<=0?0:i>=1?1:e(i,n,u)}return C1=a,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,as;function Tm(){if(as)return k1;as=1;function e(r){return a;function a(){return r}}return k1=e,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1,is;function dr(){if(is)return W1;is=1;var e=Tm();return W1=e,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1,ns;function Hm(){if(ns)return D1;ns=1;var e=dr(),r=r0(),a=X();function i(n,u){if(a(n)||a(u)||n<=0||u<=0)return e(NaN);return v;function v(t){return a(t)?NaN:t<=0?0:t>=1?1:r(t,n,u)}}return D1=i,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,ts;function Gm(){if(ts)return B1;ts=1;var e=or(),r=Om(),a=Hm();return e(r,"factory",a),B1=r,B1}var Cm=Gm(),U1=br(Cm);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X1,us;function vs(){if(us)return X1;us=1;var e=.9189385332046728;return X1=e,X1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var V1,os;function km(){if(os)return V1;os=1;var e=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],r=e.length;function a(i){var n,u,v,t,f;if(i<-1.1||i>1.1)return NaN;for(v=0,t=0,n=2*i,f=0;f<r;f++)u=v,v=t,t=n*v-u+e[f];return(t-u)*.5}return V1=a,V1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var K1,fs;function Wm(){if(fs)return K1;fs=1;var e=nr(),r=km(),a=9490626562425156e-8,i=3745194030963158e291;function n(u){return u<10?NaN:u>=i?0:u<a?r(2*e(10/u,2)-1)/u:1/(u*12)}return K1=n,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Q1,ls;function Dm(){if(ls)return Q1;ls=1;var e=Xr(),r=mr(),a=Rr(),i=Or(),n=Nr(),u=x(),v=vs(),t=fr(),f=ar(),o=Wm();function l(s,d){var $,m,_;return m=n(s,d),_=i(s,d),m<0?NaN:m===0?f:_===f?t:m>=10?($=o(m)+o(_)-o(m+_),-.5*u(_)+v+$+(m-.5)*u(m/(m+_))+_*r(-m/(m+_))):_>=10?($=o(_)-o(m+_),e(m)+$+m-m*u(m+_)+(_-.5)*r(-m/(m+_))):u(a(m)*(a(_)/a(m+_)))}return Q1=l,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1,ss;function cs(){if(ss)return Y1;ss=1;var e=Dm();return Y1=e,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1,_s;function Bm(){if(_s)return J1;_s=1;var e=cs(),r=X(),a=mr(),i=ir(),n=x(),u=ar();function v(t,f,o){var l;return r(t)||r(f)||r(o)||f<=0||o<=0?NaN:t<0||t>1?0:t===0?f<1?u:f>1?0:o:t===1?o<1?u:o>1?0:f:(l=(f-1)*n(t),l+=(o-1)*a(-t),l-=e(f,o),i(l))}return J1=v,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1,ms;function Um(){if(ms)return Z1;ms=1;var e=dr(),r=cs(),a=X(),i=mr(),n=ir(),u=x(),v=ar();function t(f,o){var l;if(a(f)||a(o)||f<=0||o<=0)return e(NaN);return l=r(f,o),s;function s(d){var $;return a(d)?NaN:d<0||d>1?0:d===0?f<1?v:f>1?0:o:d===1?o<1?v:o>1?0:f:($=-l,$+=(f-1)*u(d),$+=(o-1)*i(-d),n($))}}return Z1=t,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1,ds;function Xm(){if(ds)return j1;ds=1;var e=or(),r=Bm(),a=Um();return e(r,"factory",a),j1=r,j1}var Vm=Xm(),Km=br(Vm);/**
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
*/var z1,$s;function Qm(){if($s)return z1;$s=1;function e(r){var a,i,n;return r===0?-.0005087819496582806:(r<0?a=-r:a=r,a<=1?(i=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),n=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,i=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),n=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),i/n)}return z1=e,z1}/**
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
*/var x1,hs;function Ym(){if(hs)return x1;hs=1;function e(r){var a,i,n;return r===0?-.20243350835593876:(r<0?a=-r:a=r,a<=1?(i=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),n=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,i=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),n=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),i/n)}return x1=e,x1}/**
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
*/var ru,qs;function Jm(){if(qs)return ru;qs=1;function e(r){var a,i,n;return r===0?-.1311027816799519:(r<0?a=-r:a=r,a<=1?(i=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,i=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),i/n)}return ru=e,ru}/**
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
*/var eu,ps;function Zm(){if(ps)return eu;ps=1;function e(r){var a,i,n;return r===0?-.0350353787183178:(r<0?a=-r:a=r,a<=1?(i=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,i=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),i/n)}return eu=e,eu}/**
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
*/var au,ys;function jm(){if(ys)return au;ys=1;function e(r){var a,i,n;return r===0?-.016743100507663373:(r<0?a=-r:a=r,a<=1?(i=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,i=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),n=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),i/n)}return au=e,au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var iu,Rs;function zm(){if(Rs)return iu;Rs=1;var e=X(),r=J(),a=x(),i=ar(),n=fr(),u=Qm(),v=Ym(),t=Jm(),f=Zm(),o=jm(),l=.08913147449493408,s=2.249481201171875,d=.807220458984375,$=.9399557113647461,m=.9836282730102539;function _(c){var q,y,L,g,I;return e(c)?NaN:c===0?i:c===2?n:c===1?0:c>2||c<0?NaN:(c>1?(q=-1,L=2-c):(q=1,L=c),c=1-L,c<=.5?(g=c*(c+10),I=u(c),q*(g*l+g*I)):L>=.25?(g=r(-2*a(L)),L-=.25,I=v(L),q*(g/(s+I))):(L=r(-a(L)),L<3?(y=L-1.125,I=t(y),q*(d*L+I*L)):L<6?(y=L-3,I=f(y),q*($*L+I*L)):(y=L-6,I=o(y),q*(m*L+I*L))))}return iu=_,iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nu,bs;function e0(){if(bs)return nu;bs=1;var e=zm();return nu=e,nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var tu,gs;function xm(){if(gs)return tu;gs=1;var e=X(),r=qa(),a=J(),i=q3(),n=6123233995736766e-32;function u(v){var t;return e(v)?NaN:v<-1||v>1?NaN:v>.5?2*r(a(.5-.5*v)):(t=i-r(v),t+=n,t+=i,t)}return tu=u,tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uu,Ls;function rd(){if(Ls)return uu;Ls=1;var e=xm();return uu=e,uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,Ns;function ou(){if(Ns)return vu;Ns=1;var e=1.4142135623730951;return vu=e,vu}/**
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
*/var fu,Is;function ed(){if(Is)return fu;Is=1;function e(r){return r===0?.16666666666666666:.16666666666666666+r*.16666666666666666}return fu=e,fu}/**
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
*/var lu,Ms;function ad(){if(Ms)return lu;Ms=1;function e(r){return r===0?.058333333333333334:.058333333333333334+r*(.06666666666666667+r*.008333333333333333)}return lu=e,lu}/**
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
*/var su,As;function id(){if(As)return su;As=1;function e(r){return r===0?.0251984126984127:.0251984126984127+r*(.026785714285714284+r*(.0017857142857142857+r*.0001984126984126984))}return su=e,su}/**
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
*/var cu,Ps;function nd(){if(Ps)return cu;Ps=1;function e(r){return r===0?.012039792768959435:.012039792768959435+r*(.010559964726631394+r*(-.0011078042328042327+r*(.0003747795414462081+r*27557319223985893e-22)))}return cu=e,cu}/**
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
*/var _u,Es;function td(){if(Es)return _u;Es=1;function e(r){return r===0?.003837005972422639:.003837005972422639+r*(.00610392115600449+r*(-.0016095979637646305+r*(.0005945867404200738+r*(-6270542728876062e-20+r*2505210838544172e-23))))}return _u=e,_u}/**
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
*/var mu,Ss;function ud(){if(Ss)return mu;Ss=1;function e(r){return r===0?.0032177478835464946:.0032177478835464946+r*(.0010898206731540065+r*(-.0012579159844784845+r*(.0006908420797309686+r*(-.00016376804137220805+r*(154012654012654e-19+r*16059043836821613e-26)))))}return mu=e,mu}/**
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
*/var du,ws;function vd(){if(ws)return du;ws=1;function e(r){return r===0?.001743826229834001:.001743826229834001+r*(3353097688001788e-20+r*(-.0007624513544032393+r*(.0006451304695145635+r*(-.000249472580470431+r*(49255746366361444e-21+r*(-39851014346715405e-22+r*7647163731819816e-28))))))}return du=e,du}/**
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
*/var $u,Fs;function od(){if(Fs)return $u;Fs=1;function e(r){return r===0?.0009647274732138864:.0009647274732138864+r*(-.0003110108632631878+r*(-.00036307660358786886+r*(.0005140660578834113+r*(-.00029133414466938067+r*(9086710793521991e-20+r*(-15303004486655377e-21+r*(10914179173496788e-22+r*28114572543455206e-31)))))))}return $u=e,$u}/**
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
*/var hu,Os;function fd(){if(Os)return hu;Os=1;function e(r){return r===0?.0005422926281312969:.0005422926281312969+r*(-.0003694266780000966+r*(-.00010230378073700413+r*(.00035764655430568635+r*(-.00028690924218514614+r*(.00012645437628698076+r*(-33202652391372056e-21+r*(4890304529197534e-21+r*(-3123956959982987e-22+r*822063524662433e-32))))))))}return hu=e,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qu,Ts;function ld(){if(Ts)return qu;Ts=1;var e=En(),r=Ar(),a=J(),i=Ir(),n=ed(),u=ad(),v=id(),t=nd(),f=td(),o=ud(),l=vd(),s=od(),d=fd(),$=0,m=[1,0,0,0,0,0,0,0,0,0];function _(c,q){var y,L;return L=e(c/2,.5)*a(c*i)*(q-.5),y=1/c,m[1]=n(y),m[2]=u(y),m[3]=v(y),m[4]=t(y),m[5]=f(y),m[6]=o(y),m[7]=l(y),m[8]=s(y),m[9]=d(y),$+L*r(m,L*L)}return qu=_,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pu,Hs;function sd(){if(Hs)return pu;Hs=1;var e=En(),r=Ar(),a=J(),i=nr(),n=Ir(),u=[0,0,0,0,0,0,0];function v(t,f){var o,l,s,d,$,m,_,c;return c=e(t/2,.5)*a(t*n)*f,d=t+2,$=t+4,m=t+6,u[0]=1,u[1]=-(t+1)/(2*d),d*=t+2,u[2]=-t*(t+1)*(t+3)/(8*d*$),d*=t+2,u[3]=-t*(t+1)*(t+5)*((3*t+7)*t-2)/(48*d*$*m),d*=t+2,$*=t+4,u[4]=-t*(t+1)*(t+7)*(((((15*t+154)*t+465)*t+286)*t-336)*t+64)/(384*d*$*m*(t+8)),d*=t+2,u[5]=-t*(t+1)*(t+3)*(t+9)*((((((35*t+452)*t+1573)*t+600)*t-2020)*t+928)*t-128)/(1280*d*$*m*(t+8)*(t+10)),d*=t+2,$*=t+4,m*=t+6,u[6]=-t*(t+1)*(t+11)*(((((((((((945*t+31506)*t+425858)*t+2980236)*t+11266745)*t+20675018)*t+7747124)*t-22574632)*t-8565600)*t+18108416)*t-7099392)*t+884736)/(46080*d*$*m*(t+8)*(t+10)*(t+12)),_=a(t),s=i(_*c,1/t),l=s*s,o=r(u,l),o*=_,o/=s,-o}return pu=v,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var yu,Gs;function cd(){if(Gs)return yu;Gs=1;var e=e0(),r=kr(),a=J(),i=nr(),n=Bi(),u=ou();function v(t,f){var o,l,s,d,$,m,_;return t>1e20?-e(2*f)*u:(o=1/(t-.5),l=48/(o*o),s=((20700*o/l-98)*o-16)*o+96.36,d=((94.5/(l+s)-3)/l+1)*a(o*n)*t,_=i(d*2*f,2/t),_>.05+o?(m=-e(2*f)*u,_=m*m,t<5&&(s+=.3*(t-4.5)*(m+.6)),s+=(((.05*d*m-5)*m-7)*m-2)*m+l,_=(((((.4*_+6.3)*_+36)*_+94.5)/s-_-3)/l+1)*m,_=r(o*_*_)):_=((1/(((t+6)/(t*_)-.089*d-.822)*(t+2)*3)+.5/(t+4))*_-1)*(t+1)/(t+2)+1/_,$=a(t*_),-$)}return yu=v,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ru,Cs;function _d(){if(Cs)return Ru;Cs=1;var e=e0(),r=pr(),a=Dr(),i=d6(),n=rd(),u=J(),v=Z(),t=Gn(),f=nr(),o=jr(),l=ou(),s=Ir(),d=ld(),$=sd(),m=cd(),_=268435456,c=1/3,q=106/3,y=.8549879733383485;function L(g,I,P){var M,E,A,b,h,p,R,N,T,S,H,F,O,w,V,G;if(h=0,I>P?(R=P,P=I,I=R,b=!0):b=!1,r(g)===g&&g<20)switch(E=a(1,q),r(g)){case 1:I===.5?h=0:h=-t(s*I)/o(s*I);break;case 2:h=(2*I-1)/u(2*I*P);break;case 4:p=4*I*P,A=u(p),O=4*t(n(A)/3)/A,w=u(O-4),h=I-.5<0?-w:w;break;case 6:if(I<1e-150)return(b?-1:1)*m(g,I);V=4*(I-I*I),G=f(V,c),F=6*(1+y*(1/G-1));do T=F*F,S=T*T,H=F*S,N=F,F=2*(8*V*H-270*T+2187)/(5*(4*V*S-216*F-243));while(v((F-N)/F)>E);F=u(F-g),h=I-.5<0?-F:F;break;default:g>_?h=e(2*I)*l:g<3?(M=.2742-g*.0242143,I>M?h=d(g,I):h=$(g,I)):(M=a(1,i(g/-.654)),I>M?h=m(g,I):h=$(g,I))}else g>_?h=-e(2*I)*l:g<3?(M=.2742-g*.0242143,I>M?h=d(g,I):h=$(g,I)):(M=a(1,i(g/-.654)),I>M?h=m(g,I):h=$(g,I));return b?-h:h}return Ru=L,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bu,ks;function md(){if(ks)return bu;ks=1;var e=_d();function r(a,i,n){var u,v,t,f;return v=i/2,t=1-v,u=a*2,f=e(u,v,t),n&&(n.value=f*f/(u+f*f)),u/(u+f*f)}return bu=r,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gu,Ws;function dd(){if(Ws)return gu;Ws=1;var e=Ar(),r=e0(),a=J(),i=ir(),n=ou(),u=[0,0,0,0,0,0,0],v=[0,0,0,0];function t(f,o,l){var s,d,$,m,_,c,q;return s=r(2*l),s/=-a(f/2),v[0]=s,c=o-f,m=c*c,_=m*c,u[0]=-c*n/2,u[1]=(1-2*c)/8,u[2]=-(c*n/48),u[3]=-1/192,u[4]=-c*n/3840,u[5]=0,u[6]=0,v[1]=e(u,s),u[0]=c*n*(3*c-2)/12,u[1]=(20*m-12*c+1)/128,u[2]=c*n*(20*c-1)/960,u[3]=(16*m+30*c-15)/4608,u[4]=c*n*(21*c+32)/53760,u[5]=(-(32*m)+63)/368640,u[6]=-c*n*(120*c+17)/25804480,v[2]=e(u,s),u[0]=c*n*(-75*m+80*c-16)/480,u[1]=(-1080*_+868*m-90*c-45)/9216,u[2]=c*n*(-1190*m+84*c+373)/53760,u[3]=(-2240*_-2508*m+2100*c-165)/368640,u[4]=0,u[5]=0,u[6]=0,v[3]=e(u,s),$=e(v,1/f),d=$*$,q=-i(-d/2),d===0?.5:(1+$*a((1+q)/d))/2}return gu=t,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Lu,Ds;function Bs(){if(Ds)return Lu;Ds=1;var e=x(),r=Tr(),a=r/4;function i(n,u){return v;function v(t){var f,o,l;return l=1-t,l===0?[-a,-a]:t===0?[-a,-a]:(o=e(t)+u*e(l)+n,f=1/t-u/l,[o,f])}}return Lu=i,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu,Us;function $d(){if(Us)return Nu;Us=1;var e=X();function r(a){return a===0||e(a)?a:a<0?-1:1}return Nu=r,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu,Xs;function d0(){if(Xs)return Iu;Xs=1;var e=$d();return Iu=e,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mu,Vs;function Ks(){if(Vs)return Mu;Vs=1;var e=d0(),r=Z(),a=Dr(),i=Tr();function n(u,v,t,f,o,l){var s,d,$,m,_,c,q,y,L,g;L=0,s=0,_=v,m=a(1,1-o),q=i,d=i,$=i,c=l;do{if(s=L,$=d,d=q,y=u(_),L=y[0],g=y[1],c-=1,L===0)break;if(g===0?(s===0&&(_===t?v=f:v=t,s=u(v),q=v-_),e(s)*e(L)<0?q<0?q=(_-t)/2:q=(_-f)/2:q<0?q=(_-f)/2:q=(_-t)/2):q=L/g,r(q*2)>r($)&&(q=q>0?(_-t)/2:(_-f)/2),v=_,_-=q,_<=t){if(q=.5*(v-t),_=v-q,_===t||_===f)break}else if(_>=f&&(q=.5*(v-f),_=v-q,_===t||_===f))break;q>0?f=v:t=v}while(c&&r(_*m)<r(q));return _}return Mu=n,Mu}/**
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
*/var Au,Qs;function hd(){if(Qs)return Au;Qs=1;function e(r){return r===0?-1:-1+r*(-5+r*5)}return Au=e,Au}/**
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
*/var Pu,Ys;function qd(){if(Ys)return Pu;Ys=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return Pu=e,Pu}/**
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
*/var Eu,Js;function pd(){if(Js)return Eu;Js=1;function e(r){return r===0?7:7+r*(-2+r*(33+r*(-62+r*31)))}return Eu=e,Eu}/**
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
*/var Su,Zs;function yd(){if(Zs)return Su;Zs=1;function e(r){return r===0?25:25+r*(-52+r*(-17+r*(88+r*(-115+r*46))))}return Su=e,Su}/**
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
*/var wu,js;function Rd(){if(js)return wu;js=1;function e(r){return r===0?7:7+r*(12+r*(-78+r*52))}return wu=e,wu}/**
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
*/var Fu,zs;function bd(){if(zs)return Fu;zs=1;function e(r){return r===0?-7:-7+r*(2+r*(183+r*(-370+r*185)))}return Fu=e,Fu}/**
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
*/var Ou,xs;function gd(){if(xs)return Ou;xs=1;function e(r){return r===0?-533:-533+r*(776+r*(-1835+r*(10240+r*(-13525+r*5410))))}return Ou=e,Ou}/**
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
*/var Tu,r5;function Ld(){if(r5)return Tu;r5=1;function e(r){return r===0?-1579:-1579+r*(3747+r*(-3372+r*(-15821+r*(45588+r*(-45213+r*15071)))))}return Tu=e,Tu}/**
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
*/var Hu,e5;function Nd(){if(e5)return Hu;e5=1;function e(r){return r===0?449:449+r*(-1259+r*(-769+r*(6686+r*(-9260+r*3704))))}return Hu=e,Hu}/**
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
*/var Gu,a5;function Id(){if(a5)return Gu;a5=1;function e(r){return r===0?63149:63149+r*(-151557+r*(140052+r*(-727469+r*(2239932+r*(-2251437+r*750479)))))}return Gu=e,Gu}/**
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
*/var Cu,i5;function Md(){if(i5)return Cu;i5=1;function e(r){return r===0?29233:29233+r*(-78755+r*(105222+r*(146879+r*(-1602610+r*(3195183+r*(-2554139+r*729754))))))}return Cu=e,Cu}/**
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
*/var ku,n5;function Ad(){if(n5)return ku;n5=1;function e(r){return r===0?1:1+r*(-13+r*13)}return ku=e,ku}/**
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
*/var Wu,t5;function Pd(){if(t5)return Wu;t5=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return Wu=e,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Du,u5;function Ed(){if(u5)return Du;u5=1;var e=Ar(),r=e0(),a=Z(),i=ir(),n=x(),u=J(),v=jr(),t=Gn(),f=Bs(),o=Ks(),l=hd(),s=qd(),d=pd(),$=yd(),m=Rd(),_=bd(),c=gd(),q=Ld(),y=Nd(),L=Id(),g=Md(),I=Ad(),P=Pd(),M=[0,0,0,0,0,0],E=[0,0,0,0];function A(b,h,p){var R,N,T,S,H,F,O,w,V,G,B,K,Y,C,W,k,tr,rr,U,Q;return H=r(2*b)/-u(h/2),rr=v(p),tr=t(p),E[0]=H,W=rr*rr,k=tr*tr,Y=rr*tr,K=Y*Y,B=K*Y,G=K*K,V=K*B,w=B*B,O=G*B,M[0]=(2*W-1)/(3*Y),M[1]=-l(W)/(36*K),M[2]=s(W)/(1620*B),M[3]=d(W)/(6480*G),M[4]=$(W)/(90720*V),M[5]=0,E[1]=e(M,H),M[0]=-m(W)/(405*B),M[1]=_(W)/(2592*G),M[2]=-c(W)/(204120*V),M[3]=-q(W)/(2099520*w),M[4]=0,M[5]=0,E[2]=e(M,H),M[0]=y(W)/(102060*V),M[1]=-L(W)/(20995200*w),M[2]=g(W)/(36741600*O),M[3]=0,M[4]=0,M[5]=0,E[3]=e(M,H),F=e(E,1/h),T=tr/rr,T*=T,C=-(F*F)/(2*W)+n(W)+k*n(k)/W,a(F)<.7?(M[0]=W,M[1]=Y,M[2]=(1-2*W)/3,M[3]=I(W)/(36*Y),M[4]=P(W)/(270*K),M[5]=0,Q=e(M,F)):(U=i(C),M[0]=U,M[1]=T,M[2]=0,M[3]=3*T*(3*T+1)/6,M[4]=4*T*(4*T+1)*(4*T+2)/24,M[5]=5*T*(5*T+1)*(5*T+2)*(5*T+3)/120,Q=e(M,U),(Q-W)*F<0&&(Q=1-Q)),F<0?(N=0,R=W):(N=W,R=1),(Q<N||Q>R)&&(Q=(N+R)/2),S=f(-C,T),Q=o(S,Q,N,R,32,100),Q}return Du=A,Du}var $0={exports:{}},h0={exports:{}},Bu,v5;function Sd(){if(v5)return Bu;v5=1;var e=1e3,r=e*60,a=r*60,i=a*24,n=i*365.25;Bu=function(o,l){l=l||{};var s=typeof o;if(s==="string"&&o.length>0)return u(o);if(s==="number"&&isNaN(o)===!1)return l.long?t(o):v(o);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(o))};function u(o){if(o=String(o),!(o.length>100)){var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(o);if(l){var s=parseFloat(l[1]),d=(l[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return s*n;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*a;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function v(o){return o>=i?Math.round(o/i)+"d":o>=a?Math.round(o/a)+"h":o>=r?Math.round(o/r)+"m":o>=e?Math.round(o/e)+"s":o+"ms"}function t(o){return f(o,i,"day")||f(o,a,"hour")||f(o,r,"minute")||f(o,e,"second")||o+" ms"}function f(o,l,s){if(!(o<l))return o<l*1.5?Math.floor(o/l)+" "+s:Math.ceil(o/l)+" "+s+"s"}return Bu}var o5;function wd(){return o5||(o5=1,(function(e,r){r=e.exports=n.debug=n.default=n,r.coerce=f,r.disable=v,r.enable=u,r.enabled=t,r.humanize=Sd(),r.names=[],r.skips=[],r.formatters={};var a;function i(o){var l=0,s;for(s in o)l=(l<<5)-l+o.charCodeAt(s),l|=0;return r.colors[Math.abs(l)%r.colors.length]}function n(o){function l(){if(l.enabled){var s=l,d=+new Date,$=d-(a||d);s.diff=$,s.prev=a,s.curr=d,a=d;for(var m=new Array(arguments.length),_=0;_<m.length;_++)m[_]=arguments[_];m[0]=r.coerce(m[0]),typeof m[0]!="string"&&m.unshift("%O");var c=0;m[0]=m[0].replace(/%([a-zA-Z%])/g,function(y,L){if(y==="%%")return y;c++;var g=r.formatters[L];if(typeof g=="function"){var I=m[c];y=g.call(s,I),m.splice(c,1),c--}return y}),r.formatArgs.call(s,m);var q=l.log||r.log||console.log.bind(console);q.apply(s,m)}}return l.namespace=o,l.enabled=r.enabled(o),l.useColors=r.useColors(),l.color=i(o),typeof r.init=="function"&&r.init(l),l}function u(o){r.save(o),r.names=[],r.skips=[];for(var l=(typeof o=="string"?o:"").split(/[\s,]+/),s=l.length,d=0;d<s;d++)l[d]&&(o=l[d].replace(/\*/g,".*?"),o[0]==="-"?r.skips.push(new RegExp("^"+o.substr(1)+"$")):r.names.push(new RegExp("^"+o+"$")))}function v(){r.enable("")}function t(o){var l,s;for(l=0,s=r.skips.length;l<s;l++)if(r.skips[l].test(o))return!1;for(l=0,s=r.names.length;l<s;l++)if(r.names[l].test(o))return!0;return!1}function f(o){return o instanceof Error?o.stack||o.message:o}})(h0,h0.exports)),h0.exports}var f5;function l5(){return f5||(f5=1,(function(e,r){var a={};r=e.exports=wd(),r.log=u,r.formatArgs=n,r.save=v,r.load=t,r.useColors=i,r.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:f(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function i(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}r.formatters.j=function(o){try{return JSON.stringify(o)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function n(o){var l=this.useColors;if(o[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+o[0]+(l?"%c ":" ")+"+"+r.humanize(this.diff),!!l){var s="color: "+this.color;o.splice(1,0,s,"color: inherit");var d=0,$=0;o[0].replace(/%[a-zA-Z%]/g,function(m){m!=="%%"&&(d++,m==="%c"&&($=d))}),o.splice($,0,s)}}function u(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function v(o){try{o==null?r.storage.removeItem("debug"):r.storage.debug=o}catch{}}function t(){var o;try{o=r.storage.debug}catch{}return!o&&typeof process<"u"&&"env"in process&&(o=a.DEBUG),o}r.enable(t());function f(){try{return window.localStorage}catch{}}})($0,$0.exports)),$0.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,s5;function q0(){if(s5)return Uu;s5=1;var e=34028234663852886e22;return Uu=e,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,c5;function Fd(){if(c5)return Xu;c5=1;var e=l5(),r=Ml(),a=Z(),i=ir(),n=x(),u=q0(),v=e("gammaincinv:higher_newton");function t(f,o,l,s,d,$,m,_){var c,q,y,L,g,I,P,M,E,A,b,h,p,R;R=f,b=1,h=1,I=o*o,q=f;do{if(R=f,P=R*R,l===0){if(c=(1-o)*n(R)+R+$,c>n(u))return v("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),q;p=i(c)}else p=-m*R;_?(M=r(R,o,!0,!1),y=-p*(M-s)):(E=r(R,o,!0,!0),y=p*(E-d)),p=y,s>1e-120||h>1?(L=.5*(R-o+1)/R,g=(2*P-4*R*o+4*R+2*I-3*o+1)/P,g/=6,f=R+p*(1+p*(L+p*g))):f=R+p,b=a(R/f-1),h+=1,R=f,R<0&&(R=q,h=100)}while(b>2e-14&&h<35);return(b>2e-14||h>99)&&v("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),A=R||0,A}return Xu=t,Xu}/**
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
*/var Vu,_5;function Od(){if(_5)return Vu;_5=1;function e(r){return r===0?0:0+r*(1+r*(1+r*(1.5+r*(2.6666666666666665+r*(5.208333333333333+r*10.8)))))}return Vu=e,Vu}/**
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
*/var Ku,m5;function Td(){if(m5)return Ku;m5=1;function e(r){return r===0?1:1+r*(1+r*(.3333333333333333+r*(.027777777777777776+r*(-.003703703703703704+r*(.0002314814814814815+r*5878894767783657e-20)))))}return Ku=e,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,d5;function $5(){if(d5)return Qu;d5=1;var e=Z(),r=ir(),a=x(),i=Ar(),n=Od(),u=Td(),v=1e-8,t=.08333333333333333,f=.008333333333333333,o=[1,0,0,0,0,0];function l(s){var d,$,m,_,c,q,y,L,g;if(g=s*s*.5,s===0?c=0:s<-1?(L=r(-1-g),c=n(L)):s<1?(L=s,c=u(L)):(L=11+g,q=a(L),c=L+q,L=1/L,d=q*q,$=d*q,m=$*q,_=m*q,o[1]=(2-q)*.5,o[2]=(-9*q+6+2*d)/6,o[3]=-(3*$+36*q-22*d-12)*t,o[4]=(60+350*d-300*q-125*$+12*m)/60,o[5]=-(-120-274*m+900*q-1700*d+1125*$+20*_)*f,c+=q*L*i(o,L)),L=1,s>-3.5&&s<-.03||s>.03&&s<40){L=1,y=c;do c=y*(g+a(y))/(y-1),L=e(y/c-1),y=c;while(L>v)}return c}return Qu=l,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yu,h5;function Hd(){if(h5)return Yu;h5=1;var e=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function r(a,i){var n,u,v,t,f;u=0,v=0,n=i+i,f=a;do t=v,v=u,u=n*v-t+e[f],f-=1;while(f>=0);return(u-t)/2}return Yu=r,Yu}/**
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
*/var Ju,q5;function Gd(){if(q5)return Ju;q5=1;function e(r){return r===0?.025721014990011306:.025721014990011306+r*(.08247596616699963+r*(-.0025328157302663564+r*(.0006099292666946337+r*(-.00033543297638406+r*.000250505279903))))}return Ju=e,Ju}/**
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
*/var Zu,p5;function Cd(){if(p5)return Zu;p5=1;function e(r){return r===0?.08333333333333333:.08333333333333333+r*(-.002777777777777778+r*(.0007936507936507937+r*-.0005952380952380953))}return Zu=e,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,y5;function kd(){if(y5)return ju;y5=1;var e=Xr(),r=x(),a=vs(),i=m0(),n=q0(),u=Hd(),v=Gd(),t=Cd(),f=.30865217988013566;function o(l){var s;return l<i?n:l<1?e(l+1)-(l+.5)*r(l)+l-a:l<2?e(l)-(l-.5)*r(l)+l-a:l<3?e(l-1)-(l-.5)*r(l)+l-a+r(l-1):l<12?(s=18/(l*l)-1,u(17,s)/(12*l)):(s=1/(l*l),l<1e3?v(s)/(f+s)/l:t(s)/l)}return ju=o,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,R5;function Wd(){if(R5)return zu;R5=1;var e=ir(),r=Rr(),a=x(),i=q0(),n=f0(),u=kd();function v(t){return t>=3?e(u(t)):t>0?r(t)/(e(-t+(t-.5)*a(t))*n):i}return zu=v,zu}/**
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
*/var xu,b5;function Dd(){if(b5)return xu;b5=1;function e(r){var a,i,n;return r===0?-.3333333333438:(r<0?a=-r:a=r,a<=1?(i=-.3333333333438+r*(-.2070740359969+r*(-.05041806657154+r*(-.004923635739372+r*-4293658292782e-17))),n=1+r*(.7045554412463+r*(.2118190062224+r*(.03048648397436+r*.001605037988091)))):(r=1/r,i=-4293658292782e-17+r*(-.004923635739372+r*(-.05041806657154+r*(-.2070740359969+r*-.3333333333438))),n=.001605037988091+r*(.03048648397436+r*(.2118190062224+r*(.7045554412463+r*1)))),i/n)}return xu=e,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rv,g5;function Bd(){if(g5)return rv;g5=1;var e=Z(),r=x(),a=$5(),i=Dd();function n(u){var v;return e(u)<1?i(u):(v=a(u),r(u/(v-1))/u)}return rv=n,rv}/**
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
*/var ev,L5;function Ud(){if(L5)return ev;L5=1;function e(r){var a,i,n;return r===0?-.0172847633523:(r<0?a=-r:a=r,a<=1?(i=-.0172847633523+r*(-.0159372646475+r*(-.00464910887221+r*(-.00060683488776+r*-614830384279e-17))),n=1+r*(.764050615669+r*(.297143406325+r*(.0579490176079+r*.00574558524851)))):(r=1/r,i=-614830384279e-17+r*(-.00060683488776+r*(-.00464910887221+r*(-.0159372646475+r*-.0172847633523))),n=.00574558524851+r*(.0579490176079+r*(.297143406325+r*(.764050615669+r*1)))),i/n)}return ev=e,ev}/**
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
*/var av,N5;function Xd(){if(N5)return av;N5=1;function e(r){var a,i,n;return r===0?-.0172839517431:(r<0?a=-r:a=r,a<=1?(i=-.0172839517431+r*(-.0146362417966+r*(-.00357406772616+r*(-.000391032032692+r*249634036069e-17))),n=1+r*(.690560400696+r*(.249962384741+r*(.0443843438769+r*.00424073217211)))):(r=1/r,i=249634036069e-17+r*(-.000391032032692+r*(-.00357406772616+r*(-.0146362417966+r*-.0172839517431))),n=.00424073217211+r*(.0443843438769+r*(.249962384741+r*(.690560400696+r*1)))),i/n)}return av=e,av}/**
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
*/var iv,I5;function Vd(){if(I5)return iv;I5=1;function e(r){var a,i,n;return r===0?.99994466948:(r<0?a=-r:a=r,a<=1?(i=.99994466948+r*(104.649839762+r*(857.204033806+r*(731.901559577+r*45.5174411671))),n=1+r*(104.526456943+r*(823.313447808+r*(3119.93802124+r*3970.03311219)))):(r=1/r,i=45.5174411671+r*(731.901559577+r*(857.204033806+r*(104.649839762+r*.99994466948))),n=3970.03311219+r*(3119.93802124+r*(823.313447808+r*(104.526456943+r*1)))),i/n)}return iv=e,iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nv,M5;function Kd(){if(M5)return nv;M5=1;var e=x(),r=Ud(),a=Xd(),i=Vd();function n(u){var v,t;return u<-5?(t=u*u,v=e(-u),(12-t-6*(v*v))/(12*t*u)):u<-2?r(u):u<2?a(u):u<1e3?(t=1/u,i(u)/(-12*u)):-1/(12*u)}return nv=n,nv}/**
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
*/var tv,A5;function Qd(){if(A5)return tv;A5=1;function e(r){var a,i,n;return r===0?.0495346498136:(r<0?a=-r:a=r,a<=1?(i=.0495346498136+r*(.0299521337141+r*(.00688296911516+r*(.000512634846317+r*-201411722031e-16))),n=1+r*(.759803615283+r*(.261547111595+r*(.0464854522477+r*.00403751193496)))):(r=1/r,i=-201411722031e-16+r*(.000512634846317+r*(.00688296911516+r*(.0299521337141+r*.0495346498136))),n=.00403751193496+r*(.0464854522477+r*(.261547111595+r*(.759803615283+r*1)))),i/n)}return tv=e,tv}/**
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
*/var uv,P5;function Yd(){if(P5)return uv;P5=1;function e(r){var a,i,n;return r===0?.00452313583942:(r<0?a=-r:a=r,a<=1?(i=.00452313583942+r*(.00120744920113+r*(-789724156582e-16+r*(-504476066942e-16+r*-535770949796e-17))),n=1+r*(.912203410349+r*(.405368773071+r*(.0901638932349+r*.00948935714996)))):(r=1/r,i=-535770949796e-17+r*(-504476066942e-16+r*(-789724156582e-16+r*(.00120744920113+r*.00452313583942))),n=.00948935714996+r*(.0901638932349+r*(.405368773071+r*(.912203410349+r*1)))),i/n)}return uv=e,uv}/**
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
*/var vv,E5;function Jd(){if(E5)return vv;E5=1;function e(r){var a,i,n;return r===0?.00439937562904:(r<0?a=-r:a=r,a<=1?(i=.00439937562904+r*(.000487225670639+r*(-.000128470657374+r*(529110969589e-17+r*15716677175e-17))),n=1+r*(.794435257415+r*(.333094721709+r*(.0703527806143+r*.00806110846078)))):(r=1/r,i=15716677175e-17+r*(529110969589e-17+r*(-.000128470657374+r*(.000487225670639+r*.00439937562904))),n=.00806110846078+r*(.0703527806143+r*(.333094721709+r*(.794435257415+r*1)))),i/n)}return vv=e,vv}/**
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
*/var ov,S5;function Zd(){if(S5)return ov;S5=1;function e(r){var a,i,n;return r===0?-.0011481191232:(r<0?a=-r:a=r,a<=1?(i=-.0011481191232+r*(-.112850923276+r*(1.51623048511+r*(-.218472031183+r*.0730002451555))),n=1+r*(14.2482206905+r*(69.7360396285+r*(218.938950816+r*277.067027185)))):(r=1/r,i=.0730002451555+r*(-.218472031183+r*(1.51623048511+r*(-.112850923276+r*-.0011481191232))),n=277.067027185+r*(218.938950816+r*(69.7360396285+r*(14.2482206905+r*1)))),i/n)}return ov=e,ov}/**
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
*/var fv,w5;function jd(){if(w5)return fv;w5=1;function e(r){var a,i,n;return r===0?-.000145727889667:(r<0?a=-r:a=r,a<=1?(i=-.000145727889667+r*(-.290806748131+r*(-13.308504545+r*(199.722374056+r*-11.4311378756))),n=1+r*(139.612587808+r*(2189.01116348+r*(7115.24019009+r*45574.6081453)))):(r=1/r,i=-11.4311378756+r*(199.722374056+r*(-13.308504545+r*(-.290806748131+r*-.000145727889667))),n=45574.6081453+r*(7115.24019009+r*(2189.01116348+r*(139.612587808+r*1)))),i/n)}return fv=e,fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lv,F5;function zd(){if(F5)return lv;F5=1;var e=x(),r=Qd(),a=Yd(),i=Jd(),n=Zd(),u=jd();function v(t){var f,o;return t<-8?(f=t*t,o=e(-t)/t,(-30+t*o*(6*f*o*o-12+f))/(12*t*f*f)):t<-4?r(t)/(t*t):t<-2?a(t):t<2?i(t):t<10?(f=1/t,n(f)/(t*t)):t<100?(f=1/t,u(f)/(t*t)):-e(t)/(12*t*t*t)}return lv=v,lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sv,O5;function xd(){if(O5)return sv;O5=1;var e=l5(),r=Ar(),a=Xr(),i=e0(),n=Rr(),u=J(),v=Z(),t=ir(),f=Nr(),o=nr(),l=x(),s=f0(),d=q0(),$=c0(),m=Fd(),_=$5(),c=Wd(),q=Bd(),y=Kd(),L=zd(),g=e("gammaincinv:compute"),I=.5,P=.3333333333333333,M=.25,E=.2,A=.16666666666666666,b=.08333333333333333,h=.041666666666666664,p=[0,0,0,0,0];function R(N,T,S){var H,F,O,w,V,G,B,K,Y,C,W,k,tr,rr,U,Q,ur,er,Kr,hr,j,gr,lr,Er,i0,D,z,_2,r8,e8,m2,d2,$2,h2,a8,sr,vr,q2,cr,Lr,qr,p2,y2,R2;if(T<I?(w=!0,V=T,p2=-1):(w=!1,V=S,p2=1),cr=0,v(N-1)<1e-4&&(Lr=0,w?T<.001?(d2=T*T,_2=d2*T,m2=_2*T,hr=m2*T,Kr=hr*T,j=T+d2*I+_2*P+m2*M+hr*E+Kr*A):j=-l(1-T):j=-l(S),N===1?(cr=2,h2=j):(O=a(N),cr=1)),S<1e-30&&N<I&&(Lr=0,j=-l(S*n(N))+(N-1)*l(-l(S*n(N))),cr=1,O=a(N)),N>1&&N<500&&T<1e-80){for(Lr=0,G=1/N,H=1/(N+1),j=(a(N+1)+l(T))*G,j=t(j),rr=j,q2=0;q2<10;q2++)j=rr*t(j*G)*o(1-j*H,G);cr=1,O=a(N)}if(B=1/N*(l(T)+a(N+1)),B<l(E*(1+N))&&cr===0&&(qr=t(B),Lr=0,gr=N*N,$2=gr*N,r8=$2*N,U=N+1,W=U*U,C=U*W,Y=W*W,Q=N+2,K=Q*Q,ur=N+3,p[0]=1,p[1]=1/U,p[2]=I*(3*N+5)/(W*Q),p[3]=P*(31+8*gr+33*N)/(C*Q*ur),p[4]=h*(2888+1179*$2+125*r8+3971*gr+5661*N)/(Y*K*ur*(N+4)),j=qr*r(p,qr),O=a(N),cr=1),N<10&&cr===0&&(k=u(N)/(c(N)*s),tr=f(.02,k),S<tr&&(Lr=0,sr=1-N,D=sr*sr,z=D*sr,er=u(-2/N*l(S/k)),j=N*_(er),vr=l(j),j>5?(lr=vr*vr,Er=lr*vr,i0=Er*vr,qr=1/j,p[0]=vr-1,p[1]=(3*sr-2*sr*vr+lr-2*vr+2)*I,p[2]=(24*sr*vr-11*D-24*sr-6*lr+12*vr-12-9*sr*lr+6*D*vr+2*Er)*A,p[3]=(-12*z*vr+8.04*sr*lr-114*D*vr+(72+36*lr)+(3*i0-72*vr+162)*(sr-168*sr*vr)-(12*Er+25*z)-(22*sr*Er+36*D*lr+120*D))*b,p[4]=0,j=j-vr+sr*qr*r(p,qr)):(qr=1/j,lr=vr*vr,a8=vr-1,y2=vr-sr*qr*a8,y2<j&&(j-=y2)),O=a(N),cr=1)),v(V-I)<1e-5&&cr===0&&(Lr=0,G=1/N,j=N-P+(.019753086419753086+.007211444248481286*G)*G,O=a(N),cr=1),N<1&&cr===0&&(Lr=0,w?j=t(1/N*(l(V)+a(N+1))):j=t(1/N*(l(1-V)+a(N+1))),O=a(N),cr=1),cr===0)if(Lr=1,G=1/N,qr=i(2*V),er=p2*qr/u(N*I),qr<d)er+=(q(er)+(y(er)+L(er)*G)*G)*G,j=N*_(er),R2=er,e8=-u(N/$)*t(-I*N*R2*R2)/c(N),F=1/e8;else return g("Warning: Overflow problems in one or more steps of the computation."),NaN;return cr<2&&(h2=m(j,N,Lr,T,S,O,F,w)),h2}return sv=R,sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cv,T5;function r$(){if(T5)return cv;T5=1;var e=X(),r=m0(),a=ar(),i=xd();function n(u,v,t){return e(u)||e(v)?NaN:v<r?NaN:u>1||u<0?NaN:t===!0?u===0?a:u===1?0:i(v,1-u,u):u===0?0:u===1?a:i(v,u,1-u)}return cv=n,cv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _v,H5;function e$(){if(H5)return _v;H5=1;var e=r$();return _v=e,_v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv,G5;function a$(){if(G5)return mv;G5=1;var e=5e-324;return mv=e,mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dv,C5;function i$(){if(C5)return dv;C5=1;var e=e$(),r=x(),a=J(),i=a$(),n=Bs(),u=Ks();function v(t,f,o,l){var s,d,$,m,_,c,q,y,L,g,I,P,M,E,A,b,h,p,R,N,T,S,H,F,O,w,V,G,B,K;return o<l?_=e(o,f,!0):_=e(l,f,!1),_/=t,E=f/t,G=a(1+E),p=G*G,R=p*G,N=p*p,T=R*p,S=R*R,H=N*R,F=N*N,O=T*N,q=T*T,V=_-E,A=V*V,b=A*V,h=A*A,w=G+1,y=w*w,L=w*y,g=y*y,I=(G+2)*(G-1)/(3*G),I+=(R+9*p+21*G+5)*V/(36*p*w),I-=(N-13*R+69*p+167*G+46)*A/(1620*y*R),I-=(7*T+21*N+70*R+26*p-93*G-31)*b/(6480*L*N),I-=(75*S+202*T+188*N-888*R-1345*p+118*G+138)*h/(272160*g*T),P=(28*N+131*R+402*p+581*G+208)*(G-1)/(1620*w*R),P-=(35*S-154*T-623*N-1636*R-3983*p-3514*G-925)*V/(12960*y*N),P-=(2132*H+7915*S+16821*T+35066*N+87490*R+141183*p+95993*G+21640)*A/(816480*T*L),P-=(11053*F+53308*H+117010*S+163924*T+116188*N-258428*R-677042*p-481940*G-105497)*b/(14696640*g*S),M=-((3592*H+8375*S-1323*T-29198*N-89578*R-154413*p-116063*G-29632)*(G-1))/(816480*T*y),M-=(442043*O+2054169*F+3803094*H+3470754*S+2141568*T-2393568*N-19904934*R-34714674*p-23128299*G-5253353)*V/(146966400*S*L),M-=(116932*q+819281*O+2378172*F+4341330*H+6806004*S+10622748*T+18739500*N+30651894*R+30869976*p+15431867*G+2919016)*A/(146966400*g*H),c=_+I/t+P/(t*t)+M/(t*t*t),c<=0&&(c=i),B=c-E*r(c)+(1+E)*r(1+E)-E,s=1/(1+E),$=c<E?s:0,m=c<E?1:s,K=($+m)/2,d=n(B,E),u(d,K,$,m,32,100)}return dv=v,dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $v,k5;function n$(){if(k5)return $v;k5=1;var e=Z(),r=Dr(),a=d0(),i=Or(),n=Tr();function u(v,t,f,o,l,s){var d,$,m,_,c,q,y,L,g,I,P,M,E,A,b,h;A=0,$=!1,q=t,c=r(1,1-l),g=i(1e7*t,1e7),y=0,m=g,_=g,L=s;do{if(y=A,_=m,m=g,E=v(q),A=E[0],b=E[1],h=E[2],L-=1,A===0)break;if(b===0?(y===0&&(q===f?t=o:t=f,y=v(t),g=t-q),a(y)*a(A)<0?g<0?g=(q-f)/2:g=(q-o)/2:g<0?g=(q-o)/2:g=(q-f)/2):h===0?g=A/b:(I=2*A,M=2*b-A*(h/b),e(M)<1&&e(I)>=e(M)*n?g=A/b:g=I/M,g*b/A<0&&(g=A/b,e(g)>2*e(t)&&(g=(g<0?-1:1)*2*e(t)))),d=e(g/_),d>.8&&d<2&&(g=g>0?(q-f)/2:(q-o)/2,e(g)>q&&(g=a(g)*q),_=g*3),t=q,q-=g,q<f){if(e(f)<1&&e(q)>1&&n/e(q)<e(f)?P=1e3:P=q/f,e(P)<1&&(P=1/P),!$&&P>0&&P<3)g=.99*(t-f),q=t-g,$=!0;else if(g=(t-f)/2,q=t-g,q===f||q===o)break}else if(q>o){if(e(o)<1&&e(q)>1&&n/e(q)<e(o)?P=1e3:P=q/o,e(P)<1&&(P=1/P),!$&&P>0&&P<3)g=.99*(t-o),q=t-g,$=!0;else if(g=(t-o)/2,q=t-g,q===f||q===o)break}g>0?o=t:f=t}while(L&&e(q*c)<e(g));return q}return $v=u,$v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var hv,W5;function t$(){if(W5)return hv;W5=1;var e=zl().assign,r=Z(),a=Tr(),i=Fr();function n(u,v,t,f){return o;function o(l){var s,d,$,m,_;return _=1-l,s=[0,0],e(l,u,v,!0,f,s,1,0),m=s[0]-t,d=s[1],f&&(d=-d),_===0&&(_=i*64),l===0&&(l=i*64),$=d*(-(_*u)+(v-2)*l+1),r($)<_*l*a&&($/=_*l),f&&($=-$),d===0&&(d=(f?-1:1)*i*64),[m,d,$]}}return hv=n,hv}var qv,D5;function u$(){if(D5)return qv;D5=1;var e=Ar(),r=r0(),a=kr(),i=mr(),n=qa(),u=o0(),v=J(),t=Z(),f=ir(),o=nr(),l=jr(),s=Or(),d=Nr(),$=x(),m=Fr(),_=Bi(),c=yr(),q=md(),y=dd(),L=Ed(),g=i$(),I=n$(),P=t$(),M=32,E=1e3,A=[0,0,0,0,0];function b(h,p,R,N){var T,S,H,F,O,w,V,G,B,K,Y,C,W,k,tr,rr,U,Q,ur,er,Kr,hr,j,gr,lr,Er,i0,D,z;if(S=!1,N===0)return[1,0];if(R===0)return[0,1];if(h===1){if(p===1)return[R,1-R];C=p,p=h,h=C,C=N,N=R,R=C,S=!0}if(D=0,F=0,w=1,h===.5){if(p===.5)return D=l(R*_),D*=D,z=l(N*_),z*=z,[D,z];p>.5&&(C=p,p=h,h=C,C=N,N=R,R=C,S=!S)}if(p===.5&&h>=.5&&R!==1)Kr={},D=q(h,R,Kr),z=Kr.value;else{if(p===1)return R<N?h>1?(D=o(R,1/h),z=-a($(R)/h)):(D=o(R,1/h),z=1-D):(D=f(i(-N)/h),z=-a(i(-N)/h)),S&&(C=z,z=D,D=C),[D,z];if(h+p>5)R>.5&&(C=p,p=h,h=C,C=N,N=R,R=C,S=!S),B=d(h,p),G=s(h,p),v(B)>G-B&&B>5?(D=y(h,p,R),z=1-D):(lr=h+p,O=n(v(h/lr)),H=B/lr,H>=.2&&H<=.8&&lr>=10?(Y=o(R,1/h),Y<.0025&&h+p<200?D=Y*o(h*u(h,p),1/h):D=L(R,lr,O),z=1-D):(h<p&&(C=p,p=h,h=C,C=N,N=R,R=C,S=!S),K=0,p<2&&(K=u(h,p)),K===0?z=1:(z=o(p*N*K,1/p),D=1-z)),z>1e-5&&(D=g(h,p,R,N),z=1-D));else if(h<1&&p<1){if(er=(1-h)/(2-h-p),rr=r(er,h,p)-R,t(rr)/R<c*3)return S?[1-er,er]:[er,1-er];rr<0&&(C=p,p=h,h=C,C=N,N=R,R=C,S=!S,er=1-er),ur=o(h*R*u(h,p),1/h),D=ur/(1+ur),z=1/(1+ur),D>er&&(D=er),w=er}else h>1&&p>1?(er=(h-1)/(h+p-2),W=(p-1)/(h+p-2),Q=r(er,h,p)-R,Q<0&&(C=p,p=h,h=C,C=N,N=R,R=C,C=W,W=er,er=C,S=!S),U=$(R*h*u(h,p))/h,D=f(U),z=D<.9?1-D:-a(U),p<h&&D<.2&&(k=h-1,tr=p-1,hr=h*h,j=h*hr,gr=p*p,A[0]=0,A[1]=1,A[2]=tr/k,k*=k,A[3]=tr*(3*h*p+5*p+hr-h-4)/(2*(h+2)*k),k*=h+1,A[4]=tr*(33*h*gr+31*gr+8*hr*gr-30*h*p-47*p+11*hr*p+6*j*p+18+4*h-j+hr*hr-10*hr),A[4]/=3*(h+3)*(h+2)*k,D=e(A,D)),D>er&&(D=er),w=er):(p<h&&(C=p,p=h,h=C,C=N,N=R,R=C,S=!S),o(R,1/h)<.5?(D=o(R*h*u(h,p),1/h),D===0&&(D=m),z=1-D):(z=o(1-o(R,p*u(h,p)),1/p),z===0&&(z=m),D=1-z))}return D>.5&&(C=p,p=h,h=C,C=N,N=R,R=C,C=z,z=D,D=C,S=!S,Er=1-w,i0=1-F,F=Er,w=i0),F===0&&(S?(F=c,D<F&&(D=F)):F=m,D<F&&(D=F)),T=M,D<1e-50&&(h<1||p<1)&&(T*=3,T/=2),V=P(h,p,R<N?R:N,R>=N),D=I(V,D,F,w,T,E),D===F&&(D=0),S?[1-D,D]:[D,1-D]}return qv=b,qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pv,B5;function yv(){if(B5)return pv;B5=1;var e=u$();return pv=e,pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rv,U5;function v$(){if(U5)return Rv;U5=1;var e=X(),r=yv();function a(i,n,u,v){return e(i)||e(n)||e(u)?NaN:n<=0||u<=0?NaN:i<0||i>1?NaN:v?r(n,u,1-i,i)[0]:r(n,u,i,1-i)[0]}return Rv=a,Rv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bv,X5;function V5(){if(X5)return bv;X5=1;var e=v$();return bv=e,bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gv,K5;function o$(){if(K5)return gv;K5=1;var e=V5(),r=X();function a(i,n,u){return r(i)||r(n)||r(u)||n<=0||u<=0||i<0||i>1?NaN:e(i,n,u)}return gv=a,gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv,Q5;function f$(){if(Q5)return Lv;Q5=1;var e=dr(),r=V5(),a=X();function i(n,u){if(a(n)||a(u)||n<=0||u<=0)return e(NaN);return v;function v(t){return a(t)||t<0||t>1?NaN:r(t,n,u)}}return Lv=i,Lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nv,Y5;function l$(){if(Y5)return Nv;Y5=1;var e=or(),r=o$(),a=f$();return e(r,"factory",a),Nv=r,Nv}var s$=l$(),c$=br(s$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv,J5;function _$(){if(J5)return Iv;J5=1;var e=s0(),r=J(),a=X();function i(n,u,v){var t,f;return a(n)||a(u)||a(v)||v<0?NaN:v===0?n<u?0:1:(t=v*r(2),f=n-u,.5*e(-f/t))}return Iv=i,Iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mv,Z5;function m$(){if(Z5)return Mv;Z5=1;var e=X();function r(a,i){return e(a)||e(i)?NaN:a<i?0:1}return Mv=r,Mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av,j5;function d$(){if(j5)return Av;j5=1;var e=dr(),r=X();function a(i){if(r(i))return e(NaN);return n;function n(u){return r(u)?NaN:u<i?0:1}}return Av=a,Av}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv,z5;function $$(){if(z5)return Pv;z5=1;var e=or(),r=m$(),a=d$();return e(r,"factory",a),Pv=r,Pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ev,x5;function h$(){if(x5)return Ev;x5=1;var e=dr(),r=$$().factory,a=X(),i=J(),n=s0();function u(v,t){var f;if(a(v)||a(t)||t<0)return e(NaN);if(t===0)return r(v);return f=t*i(2),o;function o(l){var s;return a(l)?NaN:(s=l-v,.5*n(-s/f))}}return Ev=u,Ev}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv,r7;function q$(){if(r7)return Sv;r7=1;var e=or(),r=_$(),a=h$();return e(r,"factory",a),Sv=r,Sv}var p$=q$(),e7=br(p$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wv,a7;function y$(){if(a7)return wv;a7=1;var e=ir(),r=nr(),a=J(),i=c0(),n=ar(),u=X();function v(t,f,o){var l,s,d;return u(t)||u(f)||u(o)||o<0?NaN:o===0?t===f?n:0:(l=r(o,2),s=1/a(l*i),d=-1/(2*l),s*e(d*r(t-f,2)))}return wv=v,wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv,i7;function R$(){if(i7)return Fv;i7=1;var e=ar(),r=X();function a(i,n){return r(i)||r(n)?NaN:i===n?e:0}return Fv=a,Fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ov,n7;function b$(){if(n7)return Ov;n7=1;var e=dr(),r=ar(),a=X();function i(n){if(a(n))return e(NaN);return u;function u(v){return a(v)?NaN:v===n?r:0}}return Ov=i,Ov}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv,t7;function g$(){if(t7)return Tv;t7=1;var e=or(),r=R$(),a=b$();return e(r,"factory",a),Tv=r,Tv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv,u7;function L$(){if(u7)return Hv;u7=1;var e=dr(),r=g$().factory,a=X(),i=J(),n=ir(),u=nr(),v=c0();function t(f,o){var l,s,d;if(a(f)||a(o)||o<0)return e(NaN);if(o===0)return r(f);return l=u(o,2),s=1/i(l*v),d=-1/(2*l),$;function $(m){return a(m)?NaN:s*n(d*u(m-f,2))}}return Hv=t,Hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv,v7;function N$(){if(v7)return Gv;v7=1;var e=or(),r=y$(),a=L$();return e(r,"factory",a),Gv=r,Gv}var I$=N$(),o7=br(I$);/**
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
*/var Cv,f7;function M$(){if(f7)return Cv;f7=1;function e(r){var a,i,n;return r===0?-.0005087819496582806:(r<0?a=-r:a=r,a<=1?(i=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),n=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,i=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),n=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),i/n)}return Cv=e,Cv}/**
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
*/var kv,l7;function A$(){if(l7)return kv;l7=1;function e(r){var a,i,n;return r===0?-.20243350835593876:(r<0?a=-r:a=r,a<=1?(i=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),n=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,i=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),n=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),i/n)}return kv=e,kv}/**
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
*/var Wv,s7;function P$(){if(s7)return Wv;s7=1;function e(r){var a,i,n;return r===0?-.1311027816799519:(r<0?a=-r:a=r,a<=1?(i=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,i=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),i/n)}return Wv=e,Wv}/**
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
*/var Dv,c7;function E$(){if(c7)return Dv;c7=1;function e(r){var a,i,n;return r===0?-.0350353787183178:(r<0?a=-r:a=r,a<=1?(i=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,i=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),i/n)}return Dv=e,Dv}/**
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
*/var Bv,_7;function S$(){if(_7)return Bv;_7=1;function e(r){var a,i,n;return r===0?-.016743100507663373:(r<0?a=-r:a=r,a<=1?(i=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,i=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),n=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),i/n)}return Bv=e,Bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Uv,m7;function w$(){if(m7)return Uv;m7=1;var e=X(),r=J(),a=x(),i=ar(),n=fr(),u=M$(),v=A$(),t=P$(),f=E$(),o=S$(),l=.08913147449493408,s=2.249481201171875,d=.807220458984375,$=.9399557113647461,m=.9836282730102539;function _(c){var q,y,L,g,I,P;return e(c)?NaN:c===1?i:c===-1?n:c===0?c:c>1||c<-1?NaN:(c<0?(q=-1,y=-c):(q=1,y=c),g=1-y,y<=.5?(I=y*(y+10),P=u(y),q*(I*l+I*P)):g>=.25?(I=r(-2*a(g)),g-=.25,P=v(g),q*(I/(s+P))):(g=r(-a(g)),g<3?(L=g-1.125,P=t(L),q*(d*g+P*g)):g<6?(L=g-3,P=f(L),q*($*g+P*g)):(L=g-6,P=o(L),q*(m*g+P*g))))}return Uv=_,Uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv,d7;function $7(){if(d7)return Xv;d7=1;var e=w$();return Xv=e,Xv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv,h7;function F$(){if(h7)return Vv;h7=1;var e=$7(),r=X(),a=J();function i(n,u,v){var t,f;return r(u)||r(v)||r(n)||v<0||n<0||n>1?NaN:v===0?u:(t=u,f=v*a(2),t+f*e(2*n-1))}return Vv=i,Vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kv,q7;function O$(){if(q7)return Kv;q7=1;var e=X();function r(a,i){return e(a)||a<0||a>1?NaN:i}return Kv=r,Kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qv,p7;function T$(){if(p7)return Qv;p7=1;var e=dr(),r=X();function a(i){if(r(i))return e(NaN);return n;function n(u){return r(u)||u<0||u>1?NaN:i}}return Qv=a,Qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yv,y7;function H$(){if(y7)return Yv;y7=1;var e=or(),r=O$(),a=T$();return e(r,"factory",a),Yv=r,Yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jv,R7;function G$(){if(R7)return Jv;R7=1;var e=dr(),r=H$().factory,a=$7(),i=X(),n=J();function u(v,t){var f,o;if(i(v)||i(t)||t<0)return e(NaN);return t===0&&r(v),f=v,o=t*n(2),l;function l(s){return i(s)||s<0||s>1?NaN:f+o*a(2*s-1)}}return Jv=u,Jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zv,b7;function C$(){if(b7)return Zv;b7=1;var e=or(),r=F$(),a=G$();return e(r,"factory",a),Zv=r,Zv}var k$=C$(),W$=br(k$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jv,g7;function D$(){if(g7)return jv;g7=1;var e=r0(),r=X(),a=nr();function i(n,u){var v,t,f;return r(n)||r(u)||u<=0?NaN:n===0?.5:(v=a(n,2),u>2*v?(f=v/(u+v),t=e(f,.5,u/2,!0,!0)/2):(f=u/(u+v),t=e(f,u/2,.5,!0,!1)/2),n>0?1-t:t)}return jv=i,jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv,L7;function B$(){if(L7)return zv;L7=1;var e=dr(),r=r0(),a=X(),i=nr();function n(u){if(a(u)||u<=0)return e(NaN);return v;function v(t){var f,o,l;return a(t)?NaN:t===0?.5:(f=i(t,2),u>2*f?(l=f/(u+f),o=r(l,.5,u/2,!0,!0)/2):(l=u/(u+f),o=r(l,u/2,.5,!0,!1)/2),t>0?1-o:o)}}return zv=n,zv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xv,N7;function U$(){if(N7)return xv;N7=1;var e=or(),r=D$(),a=B$();return e(r,"factory",a),xv=r,xv}var X$=U$(),I7=br(X$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r2,M7;function V$(){if(M7)return r2;M7=1;var e=X(),r=o0(),a=J(),i=nr();function n(u,v){var t;return e(u)||e(v)||v<=0?NaN:(t=a(v)*r(v/2,.5),i(v/(v+i(u,2)),(1+v)/2)/t)}return r2=n,r2}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e2,A7;function K$(){if(A7)return e2;A7=1;var e=dr(),r=X(),a=o0(),i=J(),n=nr();function u(v){var t,f;if(r(v)||v<=0)return e(NaN);return f=i(v)*a(v/2,.5),t=(1+v)/2,o;function o(l){return r(l)?NaN:n(v/(v+n(l,2)),t)/f}}return e2=u,e2}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a2,P7;function Q$(){if(P7)return a2;P7=1;var e=or(),r=V$(),a=K$();return e(r,"factory",a),a2=r,a2}var Y$=Q$(),i2=br(Y$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n2,E7;function J$(){if(E7)return n2;E7=1;var e=yv(),r=X(),a=d0(),i=J();function n(u,v){var t,f;return r(v)||r(u)||v<=0||u<0||u>1?NaN:(t=u>.5?1-u:u,f=e(v/2,.5,2*t,1-2*t),a(u-.5)*i(v*f[1]/f[0]))}return n2=n,n2}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t2,S7;function Z$(){if(S7)return t2;S7=1;var e=dr(),r=yv(),a=X(),i=d0(),n=J();function u(v){if(a(v)||v<=0)return e(NaN);return t;function t(f){var o,l;return a(f)||f<0||f>1?NaN:(o=f>.5?1-f:f,l=r(v/2,.5,2*o,1-2*o),i(f-.5)*n(v*l[1]/l[0]))}}return t2=u,t2}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u2,w7;function j$(){if(w7)return u2;w7=1;var e=or(),r=J$(),a=Z$();return e(r,"factory",a),u2=r,u2}var z$=j$(),x$=br(z$);const F7=1e-9,rh=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,eh=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function ah(e){const[r,a,i]=e;return r<i?r<=a&&a<=i?null:`requires lo <= peak <= hi, got lo=${r}, peak=${a}, hi=${i}`:`requires lo < hi, got lo=${r}, hi=${i}`}function ih(e){const[r,a]=e;return r<a?null:`requires lo < hi, got lo=${r}, hi=${a}`}function nh(e){const[r,a]=e;return r>0&&a>0?null:`requires a > 0 and b > 0, got a=${r}, b=${a}`}function O7(e){const r=e[1];return r>0?null:`requires sigma > 0, got sigma=${r}`}function th(e){const[r,a]=e;return 0<r&&r<a?null:`requires 0 < lo < hi, got lo=${r}, hi=${a}`}function T7(e){const[,r,a]=e;return r<=0?`requires sigma > 0, got sigma=${r}`:a<=0?`requires df > 0, got df=${a}`:null}function H7(e,r){const a=r-e;return{cdf:i=>i<=e?0:i>=r?1:(i-e)/a,ppf:i=>e+i*a,pdf:i=>i>=e&&i<=r?1/a:0}}function uh(e,r,a){const i=a-e,n=(r-e)/i;return{cdf:u=>u<=e?0:u>=a?1:u<=r?(u-e)*(u-e)/(i*(r-e)):1-(a-u)*(a-u)/(i*(a-r)),ppf:u=>u<n?e+Math.sqrt(u*i*(r-e)):a-Math.sqrt((1-u)*i*(a-r)),pdf:u=>u<e||u>a?0:u===r?2/i:u<r?2*(u-e)/(i*(r-e)):2*(a-u)/(i*(a-r))}}function G7(e,r){return{cdf:a=>e7(a,e,r),ppf:a=>W$(a,e,r),pdf:a=>o7(a,e,r)}}function v2(e,r,a){return{cdf:i=>I7((i-e)/r,a),ppf:i=>e+r*x$(i,a),pdf:i=>i2((i-e)/r,a)/r}}function vh(e,r){return{cdf:a=>U1(a,e,r),ppf:a=>c$(a,e,r),pdf:a=>Km(a,e,r)}}const oh=1e-10,fh=20,lh=1e-300,C7=24,sh=60,ch=.001;function o2(e,r,a,i,n){return(r-e)/6*(a+4*i+n)}function f2(e,r,a,i,n,u,v,t){const f=(r+a)/2,o=(r+f)/2,l=(f+a)/2,s=e(o),d=e(l),$=o2(r,f,i,s,n),m=o2(f,a,n,d,u),_=$+m,c=oh*Math.max(Math.abs(_),lh);return t>=fh||Math.abs(_-v)<=15*c?_+(_-v)/15:f2(e,r,f,i,s,n,$,t+1)+f2(e,f,a,n,d,u,m,t+1)}function _h(e,r,a){if(!(a>r))return 0;const i=(r+a)/2,n=e(r),u=e(i),v=e(a);return f2(e,r,a,n,u,v,o2(r,a,n,u,v),0)}const mh=(()=>{const e=[0];for(let r=C7;r>=1;r--)e.push(.5*2**-r);for(let r=C7;r>=0;r--)e.push(1-.5*2**-r);return e})();function dh(e){return k7(e,mh)}function k7(e,r){let a=0;for(let i=0;i<r.length-1;i++)a+=_h(e,r[i],r[i+1]);return a}function $h(e,r,a,i){const n=[r];for(let u=i;u>=1;u--){const v=a*2**-u;v>r&&n.push(v)}return n.push(a),k7(e,n)}function hh(e,r,a){const i=a0(e,r),n=a0(e,a)-i;return n>0?n*dh(u=>Math.min(Math.max(e.ppf(i+u*n),r),a)):0}function W7(e,r,a,i){return i>a?e*(i**3-a**3)/3+r*(i**2-a**2)/2:0}function qh(e,r,a){const[i,n]=e,u=Math.max(i,r),v=Math.min(n,a);return v>u?(v*v-u*u)/(2*(n-i)):0}function ph(e,r,a){const[i,n,u]=e,v=u-i,t=n-i,f=u-n;let o=0;if(t>0){const l=2/(v*t);o+=W7(l,-i*l,Math.max(i,r),Math.min(n,a))}if(f>0){const l=2/(v*f);o+=W7(-l,u*l,Math.max(n,r),Math.min(u,a))}return o}function yh(e,r,a){const[i,n]=e,u=Math.min(Math.max(r,0),1),v=Math.min(Math.max(a,0),1);return v>u?i/(i+n)*(U1(v,i+1,n)-U1(u,i+1,n)):0}function D7(e){return Number.isFinite(e)?o7(e,0,1):0}function p0(e){return e===-1/0?0:e===1/0?1:e7(e,0,1)}function Rh(e,r,a){const[i,n]=e,u=(r-i)/n,v=(a-i)/n;return i*(p0(v)-p0(u))-n*(D7(v)-D7(u))}function bh(e,r,a){const[i,n]=e,u=v=>Number.isFinite(v)?(v-i)/n-n:v;return Math.exp(i+n*n/2)*(p0(u(a))-p0(u(r)))}function gh(e,r,a){const[i,n]=e,u=Math.log(i),v=Math.log(n),t=Math.max(u,r),f=Math.min(v,a);return f>t?(Math.exp(f)-Math.exp(t))/(v-u):0}function l2(e,r){return-(r+e*e)*i2(e,r)/(r-1)}function Lh(e,r,a){if(!Number.isFinite(e)||!Number.isFinite(r)){if(a<=1)return!Number.isFinite(e)&&!Number.isFinite(r)?NaN:Number.isFinite(e)?1/0:-1/0;const i=n=>Number.isFinite(n)?l2(n,a):0;return i(r)-i(e)}return Math.abs(a-1)<ch?hh(v2(0,1,a),e,r):l2(r,a)-l2(e,a)}function Nh(e,r,a){const[i,n,u]=e,v=(r-i)/n,t=(a-i)/n,f=o=>o===-1/0?0:o===1/0?1:I7(o,u);return i*(f(t)-f(v))+n*Lh(v,t,u)}function Ih(e,r,a){const[i,n,u]=e;if(a===1/0)return 1/0;const v=i2(0,u)/n,t=o=>{const l=(o-i)/n;return v*(1+l*l/u)**(-(u+1)/2)},f=r===-1/0?0:Math.exp(r-a);return Math.exp(a)*$h(o=>o<=0?0:t(a+Math.log(o)),f,1,sh)}const Pr={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:ah,build:e=>({latent:uh(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:ph},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:ih,build:e=>({latent:H7(e[0],e[1]),logX:!1}),partialFirstMoment:qh},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:nh,build:e=>({latent:vh(e[0],e[1]),logX:!1}),partialFirstMoment:yh},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:O7,build:e=>({latent:G7(e[0],e[1]),logX:!1}),partialFirstMoment:Rh},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:O7,build:e=>({latent:G7(e[0],e[1]),logX:!0}),partialFirstMoment:bh},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:th,build:e=>({latent:H7(Math.log(e[0]),Math.log(e[1])),logX:!0}),partialFirstMoment:gh},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:T7,build:e=>({latent:v2(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:Nh},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:T7,build:e=>({latent:v2(e[0],e[1],e[2]),logX:!0}),partialFirstMoment:Ih}},Mh=["normal","lognormal","t","logt"],Ah=["t","logt"];function Ph(e){const[r,a]=e;return r<a?null:`requires lo < hi in the truncation window, got lo=${r}, hi=${a}`}function Eh(e,r){const a=r.signature.split("(",2)[1].slice(0,-1);return{signature:`${e}-trunc(${a}, lo, hi)`,note:`${r.note}; explicitly truncated to [lo, hi]`,nParams:r.nParams+2,check:i=>r.check(i.slice(0,r.nParams))??Ph(i.slice(r.nParams)),build:i=>r.build(i),partialFirstMoment:r.partialFirstMoment,hasTruncWindow:!0}}for(const e of Mh)Pr[`${e}-trunc`]=Eh(e,Pr[e]);function B7(e){const r=eh.exec(e);if(!r)throw new Error(`malformed family spec ${JSON.stringify(e)}: expected "family(num, num, ...)"`);const a=r[1],i=r[2],n=Pr[a];if(n===void 0)throw new Error(`unknown distribution family ${JSON.stringify(a)}; available: `+Object.values(Pr).map(f=>f.signature).join(", "));const u=i.split(",").map(f=>f.trim());for(const f of u)if(!rh.test(f))throw new Error(`family spec ${JSON.stringify(e.trim())}: bad numeric argument ${JSON.stringify(f)}`);const v=u.map(Number);if(v.length!==n.nParams)throw new Error(`${a} takes ${n.nParams} arguments as ${n.signature}, got ${v.length}`);const t=n.check(v);if(t)throw new Error(`${e.trim()}: ${n.signature} ${t}`);return n.hasTruncWindow?{family:a,params:v.slice(0,-2),text:e.trim(),truncWindow:[v[v.length-2],v[v.length-1]]}:{family:a,params:v,text:e.trim(),truncWindow:null}}function Sh(e){if(!Ah.includes(e.family))return null;const r=`${e.family}-trunc`;return`${Pr[e.family].signature} needs an explicit window in a new response: use ${Pr[r].signature} (code helper ${r.replace(/-/g,"_")}), with [lo, hi] the widest range you consider possible. A Student-t tail is heavy enough that without a window the distribution, or a formula computed from it, can have no finite mean`}function $r(e,...r){const a=r.map(i=>{if(typeof i!="number"||!Number.isFinite(i))throw new Error(`family spec parameter must be a finite number, got ${JSON.stringify(i)}`);return String(i)});return B7(`${e}(${a.join(", ")})`).text}function a0(e,r){return r===-1/0?0:r===1/0?1:e.cdf(r)}class wh{constructor(r,a,i,n,u,v,t,f,o){this.spec=r,this.latent=a,this.logX=i,this.cdfLo=n,this.mass=u,this.xLo=v,this.xHi=t,this.yLo=f,this.yHi=o}inverseCdf(r){const a=this.latent.ppf(this.cdfLo+r*this.mass),i=this.logX?Math.exp(a):a;return Math.min(Math.max(i,this.xLo),this.xHi)}cdf(r){if(r<=this.xLo)return 0;if(r>=this.xHi)return 1;if(this.logX&&r<=0)return 0;const a=this.logX?Math.log(r):r;return(a0(this.latent,a)-this.cdfLo)/this.mass}mean(){const r=Pr[this.spec.family];if(r===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);const i=r.partialFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isFinite(i)?i:null}pdf(r){return r<this.xLo||r>this.xHi?0:this.logX?r<=0?0:this.latent.pdf(Math.log(r))/r/this.mass:this.latent.pdf(r)/this.mass}}function Fh(e,r,a){const i=Pr[e.family];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(e.family)}`);const{latent:n,logX:u}=i.build(e.params);let v=r===null?-1/0:r,t=a===null?1/0:a;e.truncWindow!==null&&(v=Math.max(v,e.truncWindow[0]),t=Math.min(t,e.truncWindow[1]));let f,o;u?(f=v>0?Math.log(v):-1/0,o=t>0?Math.log(t):-1/0):(f=v,o=t);const l=a0(n,f),d=a0(n,o)-l;if(d<F7){let $=`the variable's range [${r}, ${a}]`;throw e.truncWindow!==null&&($+=` ∩ the spec's truncation window [${e.truncWindow[0]}, ${e.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(e.text)}: essentially no probability mass in ${$} (mass ${d.toExponential(2)} < ${F7})`)}return new wh(e,n,u,l,d,v,t,f,o)}const y0="pointmass",Oh="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",Th=new RegExp(`^\\s*${y0}\\s*\\(\\s*(${Oh})\\s*\\)\\s*$`),Hh=new RegExp(`^\\s*${y0}\\b`);function Gh(e){const r=Th.exec(e);if(r===null)throw new Error(`malformed ${y0} spec ${JSON.stringify(e)}: expected "${y0}(num)"`);return Number(r[1])}function U7(e){return Hh.test(e)?Gh(e):null}const X7=20,Ch=1e-9;function R0(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function s2(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function kh(e,r,a){const i=`lloads.latents[${r}]`;if(!s2(e))return`${i}: expected an object, got ${R0(e)}`;for(const u of["name","description"]){const v=e[u];if(typeof v!="string"||v.trim()==="")return`${i}.${u}: expected a non-empty string, got ${JSON.stringify(v)}`}const n=e.loadings;if(!s2(n))return`${i}.loadings: expected an object, got ${R0(n)}`;if(Object.keys(n).length===0)return`${i}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[u,v]of Object.entries(n)){if(!a.has(u))return`${i}.loadings: '${u}' is not one of the subjective variables this jprob samples (${[...a].sort().join(", ")}), so a loading on it would have no effect`;if(typeof v!="number")return`${i}.loadings['${u}']: expected a number, got ${JSON.stringify(v)}`;if(!Number.isFinite(v))return`${i}.loadings['${u}']: ${v} is not finite`;if(v<-1||v>1)return`${i}.loadings['${u}']: ${v} not in [-1, 1]`}return null}function Wh(e,r,a=[]){if(e==null)return null;if(!s2(e))return`lloads: expected an object, got ${R0(e)}`;const i=Object.keys(e).filter(o=>o!=="latents").sort();if(i.length>0)return`lloads: unexpected key(s) ${JSON.stringify(i)}`;const n=e.latents;if(!Array.isArray(n))return`lloads.latents: expected a list, got ${R0(n)}`;if(n.length>X7)return`lloads.latents: ${n.length} latents exceeds the cap of ${X7}`;const u=new Set(r);for(const[o,l]of n.entries()){const s=kh(l,o,u);if(s!==null)return s}const v=new Map;for(const o of n)for(const[l,s]of Object.entries(o.loadings))v.set(l,(v.get(l)??0)+s**2);for(const[o,l]of[...v.entries()].sort((s,d)=>s[0]<d[0]?-1:1))if(l>1+Ch)return`lloads: loading budget exceeded for '${o}' — the sum of squared loadings across latents is ${V7(l)}, over the limit of 1 by ${V7(l-1)}; no residual variance is left for it`;const t=new Set(a),f=[...v.entries()].filter(([o,l])=>l>0&&t.has(o)).map(([o])=>o).sort();return f.length>0?`lloads: ${f.map(o=>`'${o}'`).join(", ")} ${f.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function V7(e){return String(Number(e.toPrecision(6)))}function Dh(e,r){if(e==null)return null;for(const a of e.latents){const i=Object.entries(a.loadings).filter(([,n])=>n!==0).map(([n])=>n);for(const n of r){const u=i.filter(t=>n.inside.includes(t)),v=i.filter(t=>n.outside.includes(t));if(u.length>0&&v.length>0)return`lloads: latent '${a.name}' loads '${u[0]}', which sits inside an expectation E⟦…⟧, and '${v[0]}', which sits outside it in the same formula; a latent may load quantities on one side of an expectation or the other, but not both, because dependence across E⟦…⟧ would make the expectation conditional on the outside quantities, which is not supported`}}return null}const K7=1e-15;function Bh(e,r){return r.filter(a=>{const i=e[a];if(typeof i=="string")return U7(i)!==null;if(!Array.isArray(i)||i.length===0)return!1;const n=i[0];return i[i.length-1][0]-n[0]<K7})}function Uh(e,r,a,i=null,n=[]){if(!Q7(e))return`expected object, got ${b0(e)}`;for(const _ of["point","bounds","sample"]){if(!(_ in e))return`missing required key '${_}'`;if(!Q7(e[_]))return`'${_}' must be an object, got ${b0(e[_])}`}const u=e.point,v=e.bounds,t=e.sample,f=new Set(Object.keys(u)),o=new Set(Object.keys(v)),l=new Set(Object.keys(t));if(!c2(o,l))return`bounds/sample key mismatch: bounds=${JSON.stringify([...o].sort())}, sample=${JSON.stringify([...l].sort())}`;if(!c2(f,o))return`parameter name mismatch across dicts: point=${JSON.stringify([...f].sort())}, bounds=${JSON.stringify([...o].sort())}, sample=${JSON.stringify([...l].sort())}`;if(r!==null){const _=Vh("point/bounds/sample",f,r);if(_!==null)return _}for(const[_,c]of Object.entries(u)){if(typeof c!="number"||!Number.isFinite(c))return`point['${_}']: expected number, got ${b0(c)}`;const q=(a==null?void 0:a[_])??n0;if(!Qr(q,c))return`point['${_}']: ${c} not in ${Yr(q)}`}for(const[_,c]of Object.entries(v)){if(!Array.isArray(c)||c.length!==2)return`bounds['${_}']: expected [lo, hi] pair`;const[q,y]=c;if(typeof q!="number"||typeof y!="number"||!Number.isFinite(q)||!Number.isFinite(y))return`bounds['${_}']: lo and hi must be numbers`;if(q>y)return`bounds['${_}']: lo=${q} > hi=${y}`;const L=b2((a==null?void 0:a[_])??n0);if(!Qr(L,q))return`bounds['${_}']: lo=${q} not in ${Yr(L)}`;if(!Qr(L,y))return`bounds['${_}']: hi=${y} not in ${Yr(L)}`}for(const[_,c]of Object.entries(t)){if(typeof c=="string"){const P=U7(c),M=(a==null?void 0:a[_])??n0;if(P!==null){if(!Qr(M,P))return`sample['${_}']: pointmass value ${P} not in ${Yr(M)}`;continue}let E;try{E=B7(c),Fh(E,M.lo,M.hi)}catch(b){return`sample['${_}']: ${b instanceof Error?b.message:String(b)}`}const A=Sh(E);if(A!==null)return`sample['${_}']: ${A}`;continue}if(!Array.isArray(c))return`sample['${_}']: expected family spec string or array of [x, y] pairs, got ${b0(c)}`;const q=c.length;if(q<2)return`sample['${_}']: need at least 2 [x, y] pairs, got ${q}`;const y=b2((a==null?void 0:a[_])??n0);let L=!1,g=-1/0;for(let P=0;P<q;P++){const M=c[P];if(!Array.isArray(M)||M.length!==2)return`sample['${_}'][${P}]: expected [x, y] pair, got ${JSON.stringify(M)}`;const[E,A]=M;if(typeof E!="number"||typeof A!="number"||!Number.isFinite(E)||!Number.isFinite(A))return`sample['${_}'][${P}]: x and y must be numbers`;if(!Qr(y,E))return`sample['${_}'][${P}]: x=${E} not in ${Yr(y)}`;if(A<0||A>1)return`sample['${_}'][${P}]: y=${A} not in [0, 1]`;if(E<g)return`sample['${_}'][${P}]: x=${E} not sorted (prev was ${g})`;g=E,Math.abs(A-1)<1e-9&&(L=!0)}if(!L)return`sample['${_}']: no pair has y ≈ 1.0 (need at least one peak)`;const I=Xh(_,c);if(I!==null)return I}const s=e.lloads;if(s==null)return null;const d=i??r??[...l],$=Bh(t,d),m=Wh(s,d,$);return m!==null?m:Dh(s,n)}function Xh(e,r){const a=r[0][0],i=r[r.length-1][0];if(i-a<K7)return null;let n=0;for(let u=0;u<r.length-1;u++)n+=(r[u+1][0]-r[u][0])*(r[u][1]+r[u+1][1])/2;return n>0?null:`sample['${e}']: zero total area: support [${a}, ${i}] is wider than a point mass, but every segment of positive width has height 0 at both ends; give some segment of positive width a positive height, or use pointmass(x) for a single value`}function Q7(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function b0(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function c2(e,r){if(e.size!==r.size)return!1;for(const a of e)if(!r.has(a))return!1;return!0}function Vh(e,r,a){const i=new Set(a);if(c2(r,i))return null;const n=[...i].filter(t=>!r.has(t)).sort(),u=[...r].filter(t=>!i.has(t)).sort(),v=[];return n.length>0&&v.push(`missing=${JSON.stringify(n)}`),u.length>0&&v.push(`unexpected=${JSON.stringify(u)}`),`${e} parameter name mismatch vs expected: ${v.join(", ")}`}const Y7=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"];function Kh(e,r,a){return $r("tri",e,r,a)}function J7(e,r){return $r("uniform",e,r)}const Qh=J7;function Yh(e,r){return $r("beta",e,r)}function Jh(e,r){return $r("normal",e,r)}function Zh(e,r){return $r("lognormal",e,r)}function jh(e,r){return $r("loguniform",e,r)}function zh(e,r,a){return $r("t",e,r,a)}function xh(e,r,a){return $r("logt",e,r,a)}function rq(e,r,a,i){return $r("normal-trunc",e,r,a,i)}function eq(e,r,a,i){return $r("lognormal-trunc",e,r,a,i)}function aq(e,r,a,i,n){return $r("t-trunc",e,r,a,i,n)}function iq(e,r,a,i,n){return $r("logt-trunc",e,r,a,i,n)}function nq(e,r,a,i){return[[e,0],[r,1],[a,1],[i,0]]}function tq(e,r,a){return Math.min(Math.max(e,r),a)}const Z7={tri:Kh,uniform:J7,uni:Qh,beta:Yh,normal:Jh,lognormal:Zh,loguniform:jh,t:zh,logt:xh,normal_trunc:rq,lognormal_trunc:eq,t_trunc:aq,logt_trunc:iq,trap:nq,clamp:tq,exp:Math.exp,log:Math.log,log2:Math.log2,log10:Math.log10,sqrt:Math.sqrt};{const e=Object.keys(Z7),r=[...Y7],a=e.filter(n=>!r.includes(n)),i=r.filter(n=>!e.includes(n));if(a.length>0||i.length>0)throw new Error(`belief_helpers: HELPER_NAMES ↔ HELPERS drift. Missing from names: ${JSON.stringify(a)}. Missing from bundle: ${JSON.stringify(i)}.`)}const j7="__belief_helpers",uq=`const { ${Y7.join(", ")} } = ${j7};
`;function vq(e){let r;try{r=new Function(...e.cparamNames,j7,uq+e.source)}catch(n){return{wellformed:[],malformed:[],compileError:z7(n)}}const a=[],i=[];for(const n of e.combinations){const u=e.cparamNames.map(l=>n[l]);let v;try{v=r(...u,Z7)}catch(l){i.push({cparams:n,error:z7(l)});continue}const t=Uh(v,e.expectedSvars,e.paramRanges,e.formulaSvars??null,e.expectationLeafPartitions??[]);if(t!==null){i.push({cparams:n,error:t});continue}const f=v,o={cparams:n,point:f.point,bounds:f.bounds,sample:f.sample};f.lloads!==void 0&&(o.lloads=f.lloads),a.push(o)}return{wellformed:a,malformed:i}}function z7(e){return e instanceof Error?`${e.name}: ${e.message}`:String(e)}const x7=self;x7.addEventListener("message",e=>{const r=vq(e.data);x7.postMessage(r)})})();
