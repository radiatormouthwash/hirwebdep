(function(){"use strict";const n0={lo:0,hi:1,loClosed:!0,hiClosed:!0};function Qr(e,r){return!(e.lo!==null&&(e.loClosed?r<e.lo:r<=e.lo)||e.hi!==null&&(e.hiClosed?r>e.hi:r>=e.hi))}function Yr(e){const r=e.loClosed&&e.lo!==null?"[":"(",a=e.hiClosed&&e.hi!==null?"]":")";return`${r}${e.lo??"-inf"}, ${e.hi??"inf"}${a}`}function br(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
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
*/var g0,g2;function e8(){if(g2)return g0;g2=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return g0=e,g0}/**
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
*/var L0,L2;function a8(){if(L2)return L0;L2=1;var e=e8();function r(){try{return e({},"x",{}),!0}catch{return!1}}return L0=r,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,N2;function i8(){if(N2)return N0;N2=1;var e=Object.defineProperty;return N0=e,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var A0,S2;function n8(){if(S2)return A0;S2=1;var e=M2(),r=P2(),a=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function n(u){var v,t,o;switch(u.specifier){case"b":v=2;break;case"o":v=8;break;case"x":case"X":v=16;break;case"d":case"i":case"u":default:v=10;break}if(t=u.arg,o=parseInt(t,10),!isFinite(o)){if(!e(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&(u.specifier==="u"||v!==10)&&(o=4294967295+o+1),o<0?(t=(-o).toString(v),u.precision&&(t=r(t,u.precision,u.padRight)),t="-"+t):(t=o.toString(v),!o&&!u.precision?t="":u.precision&&(t=r(t,u.precision,u.padRight)),u.sign&&(t=u.sign+t)),v===16&&(u.alternate&&(t="0x"+t),t=u.specifier===i.call(u.specifier)?i.call(t):a.call(t)),v===8&&u.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}return A0=n,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,E2;function t8(){if(E2)return P0;E2=1;function e(r){return typeof r=="string"}return P0=e,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,w2;function u8(){if(w2)return S0;w2=1;var e=Math.abs,r=String.prototype.toLowerCase,a=String.prototype.toUpperCase,i=String.prototype.replace,n=/e\+(\d)$/,u=/e-(\d)$/,v=/^(\d+)$/,t=/^(\d+)e/,o=/\.0$/,f=/\.0*e/,l=/(\..*[^0])0*e/;function s($,q){var m,_;switch(q.specifier){case"e":case"E":_=$.toExponential(q.precision);break;case"f":case"F":_=$.toFixed(q.precision);break;case"g":case"G":e($)<1e-4?(m=q.precision,m>0&&(m-=1),_=$.toExponential(m)):_=$.toPrecision(q.precision),q.alternate||(_=i.call(_,l,"$1e"),_=i.call(_,f,"e"),_=i.call(_,o,""));break;default:throw new Error("invalid double notation. Value: "+q.specifier)}return _=i.call(_,n,"e+0$1"),_=i.call(_,u,"e-0$1"),q.alternate&&(_=i.call(_,v,"$1."),_=i.call(_,t,"$1.e")),$>=0&&q.sign&&(_=q.sign+_),_=q.specifier===a.call(q.specifier)?a.call(_):r.call(_),_}return S0=s,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,F2;function v8(){if(F2)return E0;F2=1;function e(a){var i="",n;for(n=0;n<a;n++)i+=" ";return i}function r(a,i,n){var u=i-a.length;return u<0||(a=n?a+e(u):e(u)+a),a}return E0=r,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,O2;function f8(){if(O2)return w0;O2=1;var e=n8(),r=t8(),a=M2(),i=u8(),n=v8(),u=P2(),v=String.fromCharCode,t=Array.isArray;function o(s){return s!==s}function f(s){var $={};return $.specifier=s.specifier,$.precision=s.precision===void 0?1:s.precision,$.width=s.width,$.flags=s.flags||"",$.mapping=s.mapping,$}function l(s){var $,q,m,_,c,h,y,L,g,I;if(!t(s))throw new TypeError("invalid argument. First argument must be an array. Value: `"+s+"`.");for(h="",y=1,g=0;g<s.length;g++)if(m=s[g],r(m))h+=m;else{if($=m.precision!==void 0,m=f(m),!m.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+g+"`. Value: `"+m+"`.");for(m.mapping&&(y=m.mapping),q=m.flags,I=0;I<q.length;I++)switch(_=q.charAt(I),_){case" ":m.sign=" ";break;case"+":m.sign="+";break;case"-":m.padRight=!0,m.padZeros=!1;break;case"0":m.padZeros=q.indexOf("-")<0;break;case"#":m.alternate=!0;break;default:throw new Error("invalid flag: "+_)}if(m.width==="*"){if(m.width=parseInt(arguments[y],10),y+=1,o(m.width))throw new TypeError("the argument for * width at position "+y+" is not a number. Value: `"+m.width+"`.");m.width<0&&(m.padRight=!0,m.width=-m.width)}if($&&m.precision==="*"){if(m.precision=parseInt(arguments[y],10),y+=1,o(m.precision))throw new TypeError("the argument for * precision at position "+y+" is not a number. Value: `"+m.precision+"`.");m.precision<0&&(m.precision=1,$=!1)}switch(m.arg=arguments[y],m.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":$&&(m.padZeros=!1),m.arg=e(m);break;case"s":m.maxWidth=$?m.precision:-1,m.arg=String(m.arg);break;case"c":if(!o(m.arg)){if(c=parseInt(m.arg,10),c<0||c>127)throw new Error("invalid character code. Value: "+m.arg);m.arg=o(c)?String(m.arg):v(c)}break;case"e":case"E":case"f":case"F":case"g":case"G":if($||(m.precision=6),L=parseFloat(m.arg),!isFinite(L)){if(!a(m.arg))throw new Error("invalid floating-point number. Value: "+h);L=m.arg,m.padZeros=!1}m.arg=i(L,m);break;default:throw new Error("invalid specifier: "+m.specifier)}m.maxWidth>=0&&m.arg.length>m.maxWidth&&(m.arg=m.arg.substring(0,m.maxWidth)),m.padZeros?m.arg=u(m.arg,m.width||m.precision,m.padRight):m.width&&(m.arg=n(m.arg,m.width,m.padRight)),h+=m.arg||"",y+=1}return h}return w0=l,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,T2;function o8(){if(T2)return F0;T2=1;var e=f8();return F0=e,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,H2;function l8(){if(H2)return O0;H2=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function r(i){var n={mapping:i[1]?parseInt(i[1],10):void 0,flags:i[2],width:i[3],precision:i[5],specifier:i[6]};return i[4]==="."&&i[5]===void 0&&(n.precision="1"),n}function a(i){var n,u,v,t;for(u=[],t=0,v=e.exec(i);v;)n=i.slice(t,e.lastIndex-v[0].length),n.length&&u.push(n),v[6]==="%"?u.push("%"):u.push(r(v)),t=e.lastIndex,v=e.exec(i);return n=i.slice(t),n.length&&u.push(n),u}return O0=a,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,G2;function s8(){if(G2)return T0;G2=1;var e=l8();return T0=e,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,C2;function c8(){if(C2)return H0;C2=1;function e(r){return typeof r=="string"}return H0=e,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0,k2;function _8(){if(k2)return G0;k2=1;var e=o8(),r=s8(),a=c8();function i(n){var u,v;if(!a(n))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",n));for(u=[r(n)],v=1;v<arguments.length;v++)u.push(arguments[v]);return e.apply(null,u)}return G0=i,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,W2;function m8(){if(W2)return C0;W2=1;var e=_8();return C0=e,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,B2;function $8(){if(B2)return k0;B2=1;var e=m8(),r=Object.prototype,a=r.toString,i=r.__defineGetter__,n=r.__defineSetter__,u=r.__lookupGetter__,v=r.__lookupSetter__;function t(o,f,l){var s,$,q,m;if(typeof o!="object"||o===null||a.call(o)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",o));if(typeof l!="object"||l===null||a.call(l)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if($="value"in l,$&&(u.call(o,f)||v.call(o,f)?(s=o.__proto__,o.__proto__=r,delete o[f],o[f]=l.value,o.__proto__=s):o[f]=l.value),q="get"in l,m="set"in l,$&&(q||m))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return q&&i&&i.call(o,f,l.get),m&&n&&n.call(o,f,l.set),o}return k0=t,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,D2;function q8(){if(D2)return W0;D2=1;var e=a8(),r=i8(),a=$8(),i;return e()?i=r:i=a,W0=i,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,U2;function d8(){if(U2)return B0;U2=1;var e=q8();function r(a,i,n){e(a,i,{configurable:!1,enumerable:!1,writable:!1,value:n})}return B0=r,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,X2;function fr(){if(X2)return D0;X2=1;var e=d8();return D0=e,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,V2;function h8(){if(V2)return U0;V2=1;function e(r){return r!==r}return U0=e,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,K2;function X(){if(K2)return X0;K2=1;var e=h8();return X0=e,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,Q2;function p8(){if(Q2)return V0;Q2=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return V0=e,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K0,Y2;function y8(){if(Y2)return K0;Y2=1;var e=p8();return K0=e,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,J2;function R8(){if(J2)return Q0;J2=1;var e=y8(),r=e();function a(){return r&&typeof Symbol.toStringTag=="symbol"}return Q0=a,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,Z2;function b8(){if(Z2)return Y0;Z2=1;var e=R8();return Y0=e,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Z0,x2;function g8(){if(x2)return Z0;x2=1;var e=z2();function r(a){return e.call(a)}return Z0=r,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,r3;function L8(){if(r3)return j0;r3=1;var e=Object.prototype.hasOwnProperty;function r(a,i){return a==null?!1:e.call(a,i)}return j0=r,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,e3;function N8(){if(e3)return z0;e3=1;var e=L8();return z0=e,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,a3;function I8(){if(a3)return x0;a3=1;var e=typeof Symbol=="function"?Symbol:void 0;return x0=e,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var re,i3;function M8(){if(i3)return re;i3=1;var e=I8();return re=e,re}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ee,n3;function A8(){if(n3)return ee;n3=1;var e=M8(),r=typeof e=="function"?e.toStringTag:"";return ee=r,ee}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ae,t3;function P8(){if(t3)return ae;t3=1;var e=N8(),r=A8(),a=z2();function i(n){var u,v,t;if(n==null)return a.call(n);v=n[r],u=e(n,r);try{n[r]=void 0}catch{return a.call(n)}return t=a.call(n),u?n[r]=v:delete n[r],t}return ae=i,ae}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ie,u3;function t0(){if(u3)return ie;u3=1;var e=b8(),r=g8(),a=P8(),i;return e()?i=a:i=r,ie=i,ie}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ne,v3;function S8(){if(v3)return ne;v3=1;var e=t0(),r=typeof Uint32Array=="function";function a(i){return r&&i instanceof Uint32Array||e(i)==="[object Uint32Array]"}return ne=a,ne}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var te,f3;function E8(){if(f3)return te;f3=1;var e=S8();return te=e,te}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ue,o3;function w8(){if(o3)return ue;o3=1;var e=4294967295;return ue=e,ue}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ve,l3;function F8(){if(l3)return ve;l3=1;var e=typeof Uint32Array=="function"?Uint32Array:null;return ve=e,ve}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fe,s3;function O8(){if(s3)return fe;s3=1;var e=E8(),r=w8(),a=F8();function i(){var n,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),n=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{n=!1}return n}return fe=i,fe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oe,c3;function T8(){if(c3)return oe;c3=1;var e=O8();return oe=e,oe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var le,_3;function H8(){if(_3)return le;_3=1;var e=typeof Uint32Array=="function"?Uint32Array:void 0;return le=e,le}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var se,m3;function G8(){if(m3)return se;m3=1;function e(){throw new Error("not implemented")}return se=e,se}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ce,$3;function Tr(){if($3)return ce;$3=1;var e=T8(),r=H8(),a=G8(),i;return e()?i=r:i=a,ce=i,ce}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _e,q3;function C8(){if(q3)return _e;q3=1;var e=t0(),r=typeof Float64Array=="function";function a(i){return r&&i instanceof Float64Array||e(i)==="[object Float64Array]"}return _e=a,_e}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var me,d3;function k8(){if(d3)return me;d3=1;var e=C8();return me=e,me}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $e,h3;function W8(){if(h3)return $e;h3=1;var e=typeof Float64Array=="function"?Float64Array:null;return $e=e,$e}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qe,p3;function B8(){if(p3)return qe;p3=1;var e=k8(),r=W8();function a(){var i,n;if(typeof r!="function")return!1;try{n=new r([1,3.14,-3.14,NaN]),i=e(n)&&n[0]===1&&n[1]===3.14&&n[2]===-3.14&&n[3]!==n[3]}catch{i=!1}return i}return qe=a,qe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var de,y3;function D8(){if(y3)return de;y3=1;var e=B8();return de=e,de}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var he,R3;function U8(){if(R3)return he;R3=1;var e=typeof Float64Array=="function"?Float64Array:void 0;return he=e,he}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pe,b3;function X8(){if(b3)return pe;b3=1;function e(){throw new Error("not implemented")}return pe=e,pe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ye,g3;function Hr(){if(g3)return ye;g3=1;var e=D8(),r=U8(),a=X8(),i;return e()?i=r:i=a,ye=i,ye}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Re,L3;function V8(){if(L3)return Re;L3=1;var e=t0(),r=typeof Uint8Array=="function";function a(i){return r&&i instanceof Uint8Array||e(i)==="[object Uint8Array]"}return Re=a,Re}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var be,N3;function K8(){if(N3)return be;N3=1;var e=V8();return be=e,be}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ge,I3;function Q8(){if(I3)return ge;I3=1;var e=255;return ge=e,ge}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Le,M3;function Y8(){if(M3)return Le;M3=1;var e=typeof Uint8Array=="function"?Uint8Array:null;return Le=e,Le}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ne,A3;function J8(){if(A3)return Ne;A3=1;var e=K8(),r=Q8(),a=Y8();function i(){var n,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),n=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{n=!1}return n}return Ne=i,Ne}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ie,P3;function Z8(){if(P3)return Ie;P3=1;var e=J8();return Ie=e,Ie}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Me,S3;function j8(){if(S3)return Me;S3=1;var e=typeof Uint8Array=="function"?Uint8Array:void 0;return Me=e,Me}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ae,E3;function z8(){if(E3)return Ae;E3=1;function e(){throw new Error("not implemented")}return Ae=e,Ae}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pe,w3;function x8(){if(w3)return Pe;w3=1;var e=Z8(),r=j8(),a=z8(),i;return e()?i=r:i=a,Pe=i,Pe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Se,F3;function r9(){if(F3)return Se;F3=1;var e=t0(),r=typeof Uint16Array=="function";function a(i){return r&&i instanceof Uint16Array||e(i)==="[object Uint16Array]"}return Se=a,Se}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ee,O3;function e9(){if(O3)return Ee;O3=1;var e=r9();return Ee=e,Ee}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var we,T3;function a9(){if(T3)return we;T3=1;var e=65535;return we=e,we}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fe,H3;function i9(){if(H3)return Fe;H3=1;var e=typeof Uint16Array=="function"?Uint16Array:null;return Fe=e,Fe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oe,G3;function n9(){if(G3)return Oe;G3=1;var e=e9(),r=a9(),a=i9();function i(){var n,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),n=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{n=!1}return n}return Oe=i,Oe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Te,C3;function t9(){if(C3)return Te;C3=1;var e=n9();return Te=e,Te}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var He,k3;function u9(){if(k3)return He;k3=1;var e=typeof Uint16Array=="function"?Uint16Array:void 0;return He=e,He}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ge,W3;function v9(){if(W3)return Ge;W3=1;function e(){throw new Error("not implemented")}return Ge=e,Ge}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ce,B3;function f9(){if(B3)return Ce;B3=1;var e=t9(),r=u9(),a=v9(),i;return e()?i=r:i=a,Ce=i,Ce}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ke,D3;function o9(){if(D3)return ke;D3=1;var e=x8(),r=f9(),a={uint16:r,uint8:e};return ke=a,ke}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var We,U3;function l9(){if(U3)return We;U3=1;var e=o9(),r;function a(){var i,n;return i=new e.uint16(1),i[0]=4660,n=new e.uint8(i.buffer),n[0]===52}return r=a(),We=r,We}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Be,X3;function Gr(){if(X3)return Be;X3=1;var e=l9();return Be=e,Be}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var De,V3;function s9(){if(V3)return De;V3=1;var e=Gr(),r;return e===!0?r=1:r=0,De=r,De}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ue,K3;function c9(){if(K3)return Ue;K3=1;var e=Tr(),r=Hr(),a=s9(),i=new r(1),n=new e(i.buffer);function u(v){return i[0]=v,n[a]}return Ue=u,Ue}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xe,Q3;function _r(){if(Q3)return Xe;Q3=1;var e=c9();return Xe=e,Xe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ve,Y3;function _9(){if(Y3)return Ve;Y3=1;var e=Gr(),r;return e===!0?r=1:r=0,Ve=r,Ve}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ke,J3;function m9(){if(J3)return Ke;J3=1;var e=Tr(),r=Hr(),a=_9(),i=new r(1),n=new e(i.buffer);function u(v,t){return i[0]=v,n[a]=t>>>0,i[0]}return Ke=u,Ke}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qe,Z3;function Jr(){if(Z3)return Qe;Z3=1;var e=m9();return Qe=e,Qe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ye,j3;function $9(){if(j3)return Ye;j3=1;var e=Gr(),r,a,i;return e===!0?(a=1,i=0):(a=0,i=1),r={HIGH:a,LOW:i},Ye=r,Ye}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Je,z3;function q9(){if(z3)return Je;z3=1;var e=Tr(),r=Hr(),a=$9(),i=new r(1),n=new e(i.buffer),u=a.HIGH,v=a.LOW;function t(o,f){return n[u]=o,n[v]=f,i[0]}return Je=t,Je}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ze,x3;function u0(){if(x3)return Ze;x3=1;var e=q9();return Ze=e,Ze}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var je,rf;function ar(){if(rf)return je;rf=1;var e=Number.POSITIVE_INFINITY;return je=e,je}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ze,ef;function d9(){return ef||(ef=1,ze=Number),ze}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xe,af;function h9(){if(af)return xe;af=1;var e=d9();return xe=e,xe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ra,nf;function or(){if(nf)return ra;nf=1;var e=h9(),r=e.NEGATIVE_INFINITY;return ra=r,ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ea,tf;function Sr(){if(tf)return ea;tf=1;var e=1023;return ea=e,ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aa,uf;function p9(){if(uf)return aa;uf=1;var e=.34657359027997264;return aa=e,aa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ia,vf;function y9(){if(vf)return ia;vf=1;function e(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}return ia=e,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var na,ff;function R9(){if(ff)return na;ff=1;var e=X(),r=_r(),a=Jr(),i=u0(),n=ar(),u=or(),v=Sr(),t=p9(),o=y9(),f=709.782712893384,l=.6931471803691238,s=19082149292705877e-26,$=1.4426950408889634,q=38.816242111356935,m=1.0397207708399179;function _(c){var h,y,L,g,I,P,M,S,A,b,d,p,R;if(c===n||e(c))return c;if(c===u)return-1;if(c===0)return c;if(c<0?(L=!0,S=-c):(L=!1,S=c),S>=q){if(L)return-1;if(S>=f)return n}if(P=r(S)|0,S>t)S<m?L?(g=c+l,I=-s,R=-1):(g=c-l,I=s,R=1):(L?R=$*c-.5:R=$*c+.5,R|=0,d=R,g=c-d*l,I=d*s),c=g-I,b=g-c-I;else{if(P<1016070144)return c;R=0}return h=.5*c,A=c*h,M=1+A*o(A),d=3-M*h,p=A*((M-d)/(6-c*d)),R===0?c-(c*p-A):(y=i(v+R<<20,0),p=c*(p-b)-b,p-=A,R===-1?.5*(c-p)-.5:R===1?c<-.25?-2*(p-(c+.5)):1+2*(c-p):R<=-2||R>56?(S=1-(p-c),R===1024?(g=r(S)+(R<<20)|0,S=a(S,g)):S*=y,S-1):(d=1,R<20?(g=1072693248-(2097152>>R)|0,d=a(d,g),S=d-(p-c)):(g=v-R<<20|0,d=a(d,g),S=c-(p+d),S+=1),S*=y,S))}return na=_,na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ta,of;function Cr(){if(of)return ta;of=1;var e=R9();return ta=e,ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua,lf;function b9(){if(lf)return ua;lf=1;var e=Math.floor;return ua=e,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,sf;function pr(){if(sf)return va;sf=1;var e=b9();return va=e,va}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,cf;function g9(){if(cf)return fa;cf=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}return fa=e,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var oa,_f;function L9(){if(_f)return oa;_f=1;var e=X(),r=_r(),a=Jr(),i=ar(),n=or(),u=Sr(),v=g9(),t=.6931471803691238,o=19082149292705877e-26,f=.41421356237309503,l=-.2928932188134525,s=1862645149230957e-24,$=5551115123125783e-32,q=9007199254740992,m=.6666666666666666;function _(c){var h,y,L,g,I,P,M,S,A,b;if(c<-1||e(c))return NaN;if(c===-1)return n;if(c===i||c===0)return c;if(c<0?L=-c:L=c,b=1,L<f){if(L<s)return L<$?c:c-c*c*.5;c>l&&(b=0,g=c,y=1)}return b!==0&&(L<q?(A=1+c,y=r(A),b=(y>>20)-u,b>0?I=1-(A-c):I=c-(A-1),I/=A):(A=c,y=r(A),b=(y>>20)-u,I=0),y&=1048575,y<434334?A=a(A,y|1072693248):(b+=1,A=a(A,y|1071644672),y=1048576-y>>2),g=A-1),h=.5*g*g,y===0?g===0?(I+=b*o,b*t+I):(S=h*(1-m*g),b*t-(S-(b*o+I)-g)):(P=g/(2+g),M=P*P,S=M*v(M),b===0?g-(h-P*(h+S)):b*t-(h-(P*(h+S)+(b*o+I))-g))}return oa=_,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,mf;function mr(){if(mf)return la;mf=1;var e=L9();return la=e,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,$f;function N9(){if($f)return sa;$f=1;var e=Math.sqrt;return sa=e,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,qf;function J(){if(qf)return ca;qf=1;var e=N9();return ca=e,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,df;function hf(){if(df)return _a;df=1;var e=.7853981633974483;return _a=e,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ma,pf;function I9(){if(pf)return ma;pf=1;function e(r){var a,i,n;return r===0?.16666666666666713:(r<0?a=-r:a=r,a<=1?(i=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),n=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,i=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),n=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),i/n)}return ma=e,ma}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $a,yf;function M9(){if(yf)return $a;yf=1;function e(r){var a,i,n;return r===0?.08333333333333809:(r<0?a=-r:a=r,a<=1?(i=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),n=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,i=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),n=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),i/n)}return $a=e,$a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qa,Rf;function A9(){if(Rf)return qa;Rf=1;var e=X(),r=J(),a=hf(),i=I9(),n=M9(),u=6123233995736766e-32;function v(t){var o,f,l,s,$;if(e(t))return NaN;if(t>0?l=t:(o=!0,l=-t),l>1)return NaN;if(l>.625)f=1-l,s=f*n(f),f=r(f+f),$=a-f,f=f*s-u,$-=f,$+=a;else{if(l<1e-8)return t;f=l*l,$=f*i(f),$=l*$+l}return o?-$:$}return qa=v,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,bf;function ha(){if(bf)return da;bf=1;var e=A9();return da=e,da}/**
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
*/var pa,gf;function P9(){if(gf)return pa;gf=1;function e(r){return Math.abs(r)}return pa=e,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ya,Lf;function Z(){if(Lf)return ya;Lf=1;var e=P9();return ya=e,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,Nf;function S9(){if(Nf)return Ra;Nf=1;var e=Math.ceil;return Ra=e,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,If;function E9(){if(If)return ba;If=1;var e=S9();return ba=e,ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ga,Mf;function w9(){if(Mf)return ga;Mf=1;var e=pr(),r=E9();function a(i){return i<0?r(i):e(i)}return ga=a,ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,Af;function Na(){if(Af)return La;Af=1;var e=w9();return La=e,La}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,Pf;function F9(){if(Pf)return Ia;Pf=1;var e=1023;return Ia=e,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ma,Sf;function O9(){if(Sf)return Ma;Sf=1;var e=-1023;return Ma=e,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aa,Ef;function T9(){if(Ef)return Aa;Ef=1;var e=-1074;return Aa=e,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,wf;function H9(){if(wf)return Pa;wf=1;var e=ar(),r=or();function a(i){return i===e||i===r}return Pa=a,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sa,Ff;function kr(){if(Ff)return Sa;Ff=1;var e=H9();return Sa=e,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,Of;function G9(){if(Of)return Ea;Of=1;var e=2147483648;return Ea=e,Ea}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,Tf;function Er(){if(Tf)return wa;Tf=1;var e=2147483647;return wa=e,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,Hf;function C9(){if(Hf)return Fa;Hf=1;var e=Gr(),r,a,i;return e===!0?(a=1,i=0):(a=0,i=1),r={HIGH:a,LOW:i},Fa=r,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oa,Gf;function Cf(){if(Gf)return Oa;Gf=1;var e=Tr(),r=Hr(),a=C9(),i=new r(1),n=new e(i.buffer),u=a.HIGH,v=a.LOW;function t(o,f,l,s){return i[0]=o,f[s]=n[u],f[s+l]=n[v],f}return Oa=t,Oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ta,kf;function k9(){if(kf)return Ta;kf=1;var e=Cf();function r(a){return e(a,[0,0],1,0)}return Ta=r,Ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,Wf;function Ga(){if(Wf)return Ha;Wf=1;var e=fr(),r=k9(),a=Cf();return e(r,"assign",a),Ha=r,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ca,Bf;function W9(){if(Bf)return Ca;Bf=1;var e=G9(),r=Er(),a=Ga(),i=_r(),n=u0(),u=[0,0];function v(t,o){var f,l;return a.assign(t,u,1,0),f=u[0],f&=r,l=i(o),l&=e,f|=l,n(f,u[1])}return Ca=v,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,Df;function Wa(){if(Df)return ka;Df=1;var e=W9();return ka=e,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,Uf;function wr(){if(Uf)return Ba;Uf=1;var e=22250738585072014e-324;return Ba=e,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,Xf;function Vf(){if(Xf)return Da;Xf=1;var e=wr(),r=kr(),a=X(),i=Z(),n=4503599627370496;function u(v,t,o,f){return a(v)||r(v)?(t[f]=v,t[f+o]=0,t):v!==0&&i(v)<e?(t[f]=v*n,t[f+o]=-52,t):(t[f]=v,t[f+o]=0,t)}return Da=u,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,Kf;function B9(){if(Kf)return Ua;Kf=1;var e=Vf();function r(a){return e(a,[0,0],1,0)}return Ua=r,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,Qf;function D9(){if(Qf)return Xa;Qf=1;var e=fr(),r=B9(),a=Vf();return e(r,"assign",a),Xa=r,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Va,Yf;function v0(){if(Yf)return Va;Yf=1;var e=2146435072;return Va=e,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ka,Jf;function U9(){if(Jf)return Ka;Jf=1;var e=_r(),r=v0(),a=Sr();function i(n){var u=e(n);return u=(u&r)>>>20,u-a|0}return Ka=i,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa,Zf;function X9(){if(Zf)return Qa;Zf=1;var e=U9();return Qa=e,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,jf;function V9(){if(jf)return Ya;jf=1;var e=ar(),r=or(),a=Sr(),i=F9(),n=O9(),u=T9(),v=X(),t=kr(),o=Wa(),f=D9().assign,l=X9(),s=Ga(),$=u0(),q=2220446049250313e-31,m=2148532223,_=[0,0],c=[0,0];function h(y,L){var g,I;return L===0||y===0||v(y)||t(y)?y:(f(y,_,1,0),y=_[0],L+=_[1],L+=l(y),L<u?o(0,y):L>i?y<0?r:e:(L<=n?(L+=52,I=q):I=1,s.assign(y,c,1,0),g=c[0],g&=m,g|=L+a<<20,I*$(g,c[1])))}return Ya=h,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja,zf;function Wr(){if(zf)return Ja;zf=1;var e=V9();return Ja=e,Ja}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Za,xf;function K9(){if(xf)return Za;xf=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return Za=e,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ja,ro;function Q9(){if(ro)return ja;ro=1;var e=Wr(),r=K9();function a(i,n,u){var v,t,o,f;return v=i-n,t=v*v,o=v-t*r(t),f=1-(n-v*o/(2-o)-i),e(f,u)}return ja=a,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var za,eo;function Y9(){if(eo)return za;eo=1;var e=X(),r=Na(),a=or(),i=ar(),n=Q9(),u=.6931471803691238,v=19082149292705877e-26,t=1.4426950408889634,o=709.782712893384,f=-745.1332191019411,l=1/(1<<28),s=-l;function $(q){var m,_,c;return e(q)||q===i?q:q===a?0:q>o?i:q<f?0:q>s&&q<l?1+q:(q<0?c=r(t*q-.5):c=r(t*q+.5),m=q-c*u,_=c*v,n(m,_,c))}return za=$,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xa,ao;function ir(){if(ao)return xa;ao=1;var e=Y9();return xa=e,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ri,io;function J9(){if(io)return ri;io=1;var e=pr();function r(a){return e(a)===a}return ri=r,ri}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ei,no;function Br(){if(no)return ei;no=1;var e=J9();return ei=e,ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ai,to;function Z9(){if(to)return ai;to=1;var e=Br();function r(a){return e(a/2)}return ai=r,ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ii,uo;function j9(){if(uo)return ii;uo=1;var e=Z9();return ii=e,ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ni,vo;function z9(){if(vo)return ni;vo=1;var e=j9();function r(a){return a>0?e(a-1):e(a+1)}return ni=r,ni}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ti,fo;function ui(){if(fo)return ti;fo=1;var e=z9();return ti=e,ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vi,oo;function x9(){if(oo)return vi;oo=1;var e=Gr(),r;return e===!0?r=0:r=1,vi=r,vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fi,lo;function rc(){if(lo)return fi;lo=1;var e=Tr(),r=Hr(),a=x9(),i=new r(1),n=new e(i.buffer);function u(v,t){return i[0]=v,n[a]=t>>>0,i[0]}return fi=u,fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oi,so;function Zr(){if(so)return oi;so=1;var e=rc();return oi=e,oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var li,co;function ec(){if(co)return li;co=1;function e(r){return r|0}return li=e,li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var si,_o;function mo(){if(_o)return si;_o=1;var e=ec();return si=e,si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ci,$o;function ac(){if($o)return ci;$o=1;var e=ui(),r=Wa(),a=or(),i=ar();function n(u,v){return v===a?i:v===i?0:v>0?e(v)?u:0:e(v)?r(i,u):i}return ci=n,ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _i,qo;function ic(){if(qo)return _i;qo=1;var e=Er(),r=_r(),a=1072693247,i=1e300,n=1e-300;function u(v,t){var o,f;return f=r(v),o=f&e,o<=a?t<0?i*i:n*n:t>0?i*i:n*n}return _i=u,_i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mi,ho;function nc(){if(ho)return mi;ho=1;var e=Z(),r=ar();function a(i,n){return i===-1?(i-i)/(i-i):i===1?1:e(i)<1==(n===r)?0:r}return mi=a,mi}/**
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
*/var $i,po;function yo(){if(po)return $i;po=1;var e=20;return $i=e,$i}/**
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
*/var qi,Ro;function tc(){if(Ro)return qi;Ro=1;function e(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}return qi=e,qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var di,bo;function uc(){if(bo)return di;bo=1;var e=_r(),r=Zr(),a=Jr(),i=Sr(),n=yo(),u=tc(),v=1048575,t=1048576,o=1072693248,f=536870912,l=524288,s=9007199254740992,$=.9617966939259756,q=.9617967009544373,m=-7028461650952758e-24,_=[1,1.5],c=[0,.5849624872207642],h=[0,1350039202129749e-23];function y(L,g,I){var P,M,S,A,b,d,p,R,N,T,E,H,F,O,w,V,G,D,K,Y,C,W;return Y=0,I<t&&(g*=s,Y-=53,I=e(g)),Y+=(I>>n)-i|0,C=I&v|0,I=C|o|0,C<=235662?W=0:C<767610?W=1:(W=0,Y+=1,I-=t),g=a(g,I),R=_[W],D=g-R,K=1/(g+R),M=D*K,A=r(M,0),P=(I>>1|f)+l,P+=W<<18,d=a(0,P),p=g-(d-R),b=K*(D-A*d-A*p),S=M*M,G=S*S*u(S),G+=b*(A+M),S=A*A,d=3+S+G,d=r(d,0),p=G-(d-3-S),D=A*d,K=b*d+p*M,T=D+K,T=r(T,0),E=K-(T-D),H=q*T,F=m*T+E*$+h[W],N=c[W],V=Y,O=H+F+N+V,O=r(O,0),w=F-(O-V-N-H),L[0]=O,L[1]=w,L}return di=y,di}/**
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
*/var hi,go;function vc(){if(go)return hi;go=1;function e(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}return hi=e,hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pi,Lo;function fc(){if(Lo)return pi;Lo=1;var e=Zr(),r=vc(),a=1.4426950408889634,i=1.4426950216293335,n=19259629911266175e-24;function u(v,t){var o,f,l,s,$,q;return l=t-1,s=l*l*r(l),$=i*l,q=l*n-s*a,f=$+q,f=e(f,0),o=q-(f-$),v[0]=f,v[1]=o,v}return pi=u,pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yi,No;function oc(){if(No)return yi;No=1;var e=.6931471805599453;return yi=e,yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ri,Io;function Mo(){if(Io)return Ri;Io=1;var e=1048575;return Ri=e,Ri}/**
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
*/var bi,Ao;function lc(){if(Ao)return bi;Ao=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return bi=e,bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gi,Po;function sc(){if(Po)return gi;Po=1;var e=_r(),r=Jr(),a=Zr(),i=mo(),n=Wr(),u=oc(),v=Sr(),t=Er(),o=Mo(),f=yo(),l=lc(),s=1048576,$=1071644672,q=.6931471824645996,m=-1904654299957768e-24;function _(c,h,y){var L,g,I,P,M,S,A,b,d,p,R;return p=c&t|0,R=(p>>f)-v|0,d=0,p>$&&(d=c+(s>>R+1)>>>0,R=((d&t)>>f)-v|0,L=(d&~(o>>R))>>>0,I=r(0,L),d=(d&o|s)>>f-R>>>0,c<0&&(d=-d),h-=I),I=y+h,I=a(I,0),M=I*q,S=(y-(I-h))*u+I*m,b=M+S,A=S-(b-M),I=b*b,g=b-I*l(I),P=b*g/(g-2)-(A+b*A),b=1-(P-b),c=e(b),c=i(c),c+=d<<f>>>0,c>>f<=0?b=n(b,d):b=r(b,c),b}return gi=_,gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Li,So;function cc(){if(So)return Li;So=1;var e=X(),r=ui(),a=kr(),i=Br(),n=J(),u=Z(),v=Ga(),t=Zr(),o=mo(),f=or(),l=ar(),s=Er(),$=ac(),q=ic(),m=nc(),_=uc(),c=fc(),h=sc(),y=1072693247,L=1105199104,g=1139802112,I=1083179008,P=1072693248,M=1083231232,S=3230714880,A=31,b=1e300,d=1e-300,p=8008566259537294e-32,R=[0,0],N=[0,0];function T(E,H){var F,O,w,V,G,D,K,Y,C,W,k,tr,rr,U,Q,ur;if(e(E)||e(H))return NaN;if(v.assign(H,R,1,0),D=R[0],K=R[1],K===0){if(H===0)return 1;if(H===1)return E;if(H===-1)return 1/E;if(H===.5)return n(E);if(H===-.5)return 1/n(E);if(H===2)return E*E;if(H===3)return E*E*E;if(H===4)return E*=E,E*E;if(a(H))return m(E,H)}if(v.assign(E,R,1,0),V=R[0],G=R[1],G===0){if(V===0)return $(E,H);if(E===1)return 1;if(E===-1&&r(H))return-1;if(a(E))return E===f?T(-0,-H):H<0?0:l}if(E<0&&i(H)===!1)return(E-E)/(E-E);if(w=u(E),F=V&s|0,O=D&s|0,Y=V>>>A|0,C=D>>>A|0,Y&&r(H)?Y=-1:Y=1,O>L){if(O>g)return q(E,H);if(F<y)return C===1?Y*b*b:Y*d*d;if(F>P)return C===0?Y*b*b:Y*d*d;rr=c(N,w)}else rr=_(N,w,F);if(W=t(H,0),tr=(H-W)*rr[0]+H*rr[1],k=W*rr[0],U=tr+k,v.assign(U,R,1,0),Q=o(R[0]),ur=o(R[1]),Q>=I){if((Q-I|ur)!==0||tr+p>U-k)return Y*b*b}else if((Q&s)>=M&&((Q-S|ur)!==0||tr<=U-k))return Y*d*d;return U=h(Q,k,tr),Y*U}return Li=T,Li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ni,Eo;function nr(){if(Eo)return Ni;Eo=1;var e=cc();return Ni=e,Ni}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ii,wo;function Dr(){if(wo)return Ii;wo=1;var e=2.718281828459045;return Ii=e,Ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mi,Fo;function yr(){if(Fo)return Mi;Fo=1;var e=2220446049250313e-31;return Mi=e,Mi}/**
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
*/var Ai,Oo;function _c(){if(Oo)return Ai;Oo=1;function e(r){var a,i,n;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/n)}return Ai=e,Ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pi,To;function mc(){if(To)return Pi;To=1;var e=X(),r=mr(),a=J(),i=Z(),n=ir(),u=nr(),v=Dr(),t=yr(),o=_c(),f=10.900511;function l(s,$){var q,m,_,c,h,y,L;return e(s)||e($)?NaN:s<0||$<0?NaN:$===1?1/s:s===1?1/$:(L=s+$,L<t?(h=L/s,h/=$,h):L===s&&$<t?1/$:L===$&&s<t?1/s:(s<$&&(y=$,$=s,s=y),m=s+f-.5,_=$+f-.5,c=L+f-.5,h=o(s)*(o($)/o(L)),q=s-.5-$,i($*q)<c*100&&s>100?h*=n(q*r(-$/c)):h*=u(m/c,q),c>1e10?h*=u(m/c*(_/c),$):h*=u(m*_/(c*c),$),h*=a(v/_),h))}return Pi=l,Pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Si,Ho;function f0(){if(Ho)return Si;Ho=1;var e=mc();return Si=e,Si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ei,Go;function $c(){if(Go)return Ei;Go=1;var e=ar();function r(a){return a===0&&1/a===e}return Ei=r,Ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wi,Co;function qc(){if(Co)return wi;Co=1;var e=$c();return wi=e,wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fi,ko;function dc(){if(ko)return Fi;ko=1;var e=qc(),r=X(),a=ar();function i(n,u){return r(n)||r(u)?NaN:n===a||u===a?a:n===u&&n===0?e(n)?n:u:n>u?n:u}return Fi=i,Fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oi,Wo;function Fr(){if(Wo)return Oi;Wo=1;var e=dc();return Oi=e,Oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ti,Bo;function hc(){if(Bo)return Ti;Bo=1;var e=or();function r(a){return a===0&&1/a===e}return Ti=r,Ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hi,Do;function Uo(){if(Do)return Hi;Do=1;var e=hc();return Hi=e,Hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gi,Xo;function pc(){if(Xo)return Gi;Xo=1;var e=Uo(),r=X(),a=or();function i(n,u){return r(n)||r(u)?NaN:n===a||u===a?a:n===u&&n===0?e(n)?n:u:n<u?n:u}return Gi=i,Gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ci,Vo;function Nr(){if(Vo)return Ci;Vo=1;var e=pc();return Ci=e,Ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ki,Ko;function Or(){if(Ko)return ki;Ko=1;var e=17976931348623157e292;return ki=e,ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wi,Qo;function Yo(){if(Qo)return Wi;Qo=1;var e=2147483647;return Wi=e,Wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bi,Jo;function Di(){if(Jo)return Bi;Jo=1;var e=1.5707963267948966;return Bi=e,Bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ui,Zo;function Ir(){if(Zo)return Ui;Zo=1;var e=3.141592653589793;return Ui=e,Ui}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xi,jo;function yc(){if(jo)return Xi;jo=1;function e(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}return Xi=e,Xi}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vi,zo;function Rc(){if(zo)return Vi;zo=1;function e(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}return Vi=e,Vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ki,xo;function bc(){if(xo)return Ki;xo=1;var e=yc(),r=Rc();function a(i,n){var u,v,t,o;return o=i*i,t=o*o,v=o*e(o),v+=t*t*r(o),u=.5*o,t=1-u,t+(1-t-u+(o*v-i*n))}return Ki=a,Ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qi,r6;function e6(){if(r6)return Qi;r6=1;var e=bc();return Qi=e,Qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Yi,a6;function gc(){if(a6)return Yi;a6=1;var e=-.16666666666666632,r=.00833333333332249,a=-.0001984126982985795,i=27557313707070068e-22,n=-25050760253406863e-24,u=158969099521155e-24;function v(t,o){var f,l,s,$;return $=t*t,s=$*$,f=r+$*(a+$*i)+$*s*(n+$*u),l=$*t,o===0?t+l*(e+$*f):t-($*(.5*o-l*f)-o-l*e)}return Yi=v,Yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ji,i6;function n6(){if(i6)return Ji;i6=1;var e=gc();return Ji=e,Ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zi,t6;function Lc(){if(t6)return Zi;t6=1;var e=Gr(),r;return e===!0?r=0:r=1,Zi=r,Zi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ji,u6;function Nc(){if(u6)return ji;u6=1;var e=Tr(),r=Hr(),a=Lc(),i=new r(1),n=new e(i.buffer);function u(v){return i[0]=v,n[a]}return ji=u,ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zi,v6;function Ic(){if(v6)return zi;v6=1;var e=Nc();return zi=e,zi}/**
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
*/var xi,f6;function Mc(){if(f6)return xi;f6=1;function e(r,a){var i,n;for(i=[],n=0;n<a;n++)i.push(r);return i}return xi=e,xi}/**
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
*/var rn,o6;function Ac(){if(o6)return rn;o6=1;var e=Mc();return rn=e,rn}/**
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
*/var en,l6;function Pc(){if(l6)return en;l6=1;var e=Ac();function r(a){return e(0,a)}return en=r,en}/**
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
*/var an,s6;function Sc(){if(s6)return an;s6=1;var e=Pc();return an=e,an}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nn,c6;function Ec(){if(c6)return nn;c6=1;var e=pr(),r=Wr(),a=Sc(),i=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],n=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],u=16777216,v=5960464477539063e-23,t=a(20),o=a(20),f=a(20),l=a(20);function s(q,m,_,c,h,y,L,g,I){var P,M,S,A,b,d,p,R,N;for(A=y,N=c[_],R=_,b=0;R>0;b++)M=v*N|0,l[b]=N-u*M|0,N=c[R-1]+M,R-=1;if(N=r(N,h),N-=8*e(N*.125),p=N|0,N-=p,S=0,h>0?(b=l[_-1]>>24-h,p+=b,l[_-1]-=b<<24-h,S=l[_-1]>>23-h):h===0?S=l[_-1]>>23:N>=.5&&(S=2),S>0){for(p+=1,P=0,b=0;b<_;b++)R=l[b],P===0?R!==0&&(P=1,l[b]=16777216-R):l[b]=16777215-R;if(h>0)switch(h){case 1:l[_-1]&=8388607;break;case 2:l[_-1]&=4194303;break}S===2&&(N=1-N,P!==0&&(N-=r(1,h)))}if(N===0){for(R=0,b=_-1;b>=y;b--)R|=l[b];if(R===0){for(d=1;l[y-d]===0;d++);for(b=_+1;b<=_+d;b++){for(I[g+b]=i[L+b],M=0,R=0;R<=g;R++)M+=q[R]*I[g+(b-R)];c[b]=M}return _+=d,s(q,m,_,c,h,y,L,g,I)}for(_-=1,h-=24;l[_]===0;)_-=1,h-=24}else N=r(N,-h),N>=u?(M=v*N|0,l[_]=N-u*M|0,_+=1,h+=24,l[_]=M):l[_]=N|0;for(M=r(1,h),b=_;b>=0;b--)c[b]=M*l[b],M*=v;for(b=_;b>=0;b--){for(M=0,d=0;d<=A&&d<=_-b;d++)M+=n[d]*c[b+d];f[_-b]=M}for(M=0,b=_;b>=0;b--)M+=f[b];for(S===0?m[0]=M:m[0]=-M,M=f[0]-M,b=1;b<=_;b++)M+=f[b];return S===0?m[1]=M:m[1]=-M,p&7}function $(q,m,_,c){var h,y,L,g,I,P,M,S,A;for(y=4,g=c-1,L=(_-3)/24|0,L<0&&(L=0),P=_-24*(L+1),S=L-g,A=g+y,M=0;M<=A;M++)S<0?t[M]=0:t[M]=i[S],S+=1;for(M=0;M<=y;M++){for(h=0,S=0;S<=g;S++)h+=q[S]*t[g+(M-S)];o[M]=h}return I=y,s(q,m,I,o,P,y,L,g,t)}return nn=$,nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tn,_6;function wc(){if(_6)return tn;_6=1;var e=Math.round;return tn=e,tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var un,m6;function $6(){if(m6)return un;m6=1;var e=wc();return un=e,un}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vn,q6;function Fc(){if(q6)return vn;q6=1;var e=$6(),r=_r(),a=.6366197723675814,i=1.5707963267341256,n=6077100506506192e-26,u=6077100506303966e-26,v=20222662487959506e-37,t=20222662487111665e-37,o=84784276603689e-45,f=2047;function l(s,$,q){var m,_,c,h,y,L,g;return _=e(s*a),h=s-_*i,y=_*n,g=$>>20|0,q[0]=h-y,m=r(q[0]),L=g-(m>>20&f),L>16&&(c=h,y=_*u,h=c-y,y=_*v-(c-h-y),q[0]=h-y,m=r(q[0]),L=g-(m>>20&f),L>49&&(c=h,y=_*t,h=c-y,y=_*o-(c-h-y),q[0]=h-y)),q[1]=h-q[0]-y,_}return vn=l,vn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var fn,d6;function Oc(){if(d6)return fn;d6=1;var e=Er(),r=v0(),a=Mo(),i=_r(),n=Ic(),u=u0(),v=Ec(),t=Fc(),o=0,f=16777216,l=1.5707963267341256,s=6077100506506192e-26,$=2*s,q=3*s,m=4*s,_=598523,c=1072243195,h=1073928572,y=1074752122,L=1074977148,g=1075183036,I=1075388923,P=1075594811,M=1094263291,S=[0,0,0],A=[0,0];function b(d,p){var R,N,T,E,H,F,O,w;if(T=i(d)|0,E=T&e|0,E<=c)return p[0]=d,p[1]=0,0;if(E<=y)return(E&a)===_?t(d,E,p):E<=h?T>0?(w=d-l,p[0]=w-s,p[1]=w-p[0]-s,1):(w=d+l,p[0]=w+s,p[1]=w-p[0]+s,-1):T>0?(w=d-2*l,p[0]=w-$,p[1]=w-p[0]-$,2):(w=d+2*l,p[0]=w+$,p[1]=w-p[0]+$,-2);if(E<=P)return E<=g?E===L?t(d,E,p):T>0?(w=d-3*l,p[0]=w-q,p[1]=w-p[0]-q,3):(w=d+3*l,p[0]=w+q,p[1]=w-p[0]+q,-3):E===I?t(d,E,p):T>0?(w=d-4*l,p[0]=w-m,p[1]=w-p[0]-m,4):(w=d+4*l,p[0]=w+m,p[1]=w-p[0]+m,-4);if(E<M)return t(d,E,p);if(E>=r)return p[0]=NaN,p[1]=NaN,0;for(R=n(d),N=(E>>20)-1046,w=u(E-(N<<20|0),R),F=0;F<2;F++)S[F]=w|0,w=(w-S[F])*f;for(S[2]=w,H=3;S[H-1]===o;)H-=1;return O=v(S,A,N,H,1),T<0?(p[0]=-A[0],p[1]=-A[1],-O):(p[0]=A[0],p[1]=A[1],O)}return fn=b,fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var on,h6;function p6(){if(h6)return on;h6=1;var e=Oc();return on=e,on}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ln,y6;function Tc(){if(y6)return ln;y6=1;var e=Er(),r=v0(),a=_r(),i=e6(),n=n6(),u=p6(),v=1072243195,t=1045430272,o=[0,0];function f(l){var s,$;if(s=a(l),s&=e,s<=v)return s<t?l:n(l,0);if(s>=r)return NaN;switch($=u(l,o),$&3){case 0:return n(o[0],o[1]);case 1:return i(o[0],o[1]);case 2:return-n(o[0],o[1]);default:return-i(o[0],o[1])}}return ln=f,ln}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sn,R6;function jr(){if(R6)return sn;R6=1;var e=Tc();return sn=e,sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cn,b6;function o0(){if(b6)return cn;b6=1;var e=2.5066282746310007;return cn=e,cn}/**
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
*/var _n,g6;function Hc(){if(g6)return _n;g6=1;function e(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}return _n=e,_n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var mn,L6;function Gc(){if(L6)return mn;L6=1;var e=o0(),r=nr(),a=ir(),i=Hc(),n=143.01608;function u(v){var t,o,f;return t=1/v,t=1+t*i(t),o=a(v),v>n?(f=r(v,.5*v-.25),o=f*(f/o)):o=r(v,v-.5)/o,e*o*t}return mn=u,mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $n,N6;function Cc(){if(N6)return $n;N6=1;var e=.5772156649015329;return $n=e,$n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qn,I6;function kc(){if(I6)return qn;I6=1;var e=Cc();function r(a,i){return i/((1+e*a)*a)}return qn=r,qn}/**
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
*/var dn,M6;function Wc(){if(M6)return dn;M6=1;function e(r){var a,i,n;return r===0?1:(r<0?a=-r:a=r,a<=1?(i=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),n=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,i=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),n=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),i/n)}return dn=e,dn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var hn,A6;function Bc(){if(A6)return hn;A6=1;var e=X(),r=Br(),a=Uo(),i=Z(),n=pr(),u=jr(),v=ar(),t=or(),o=Ir(),f=Gc(),l=kc(),s=Wc();function $(q){var m,_,c,h;if(r(q)&&q<0||q===t||e(q))return NaN;if(q===0)return a(q)?t:v;if(q>171.61447887182297)return v;if(q<-170.5674972726612)return 0;if(_=i(q),_>33)return q>=0?f(q):(c=n(_),(c&1)===0?m=-1:m=1,h=_-c,h>.5&&(c+=1,h=_-c),h=_*u(o*h),m*o/(i(h)*f(_)));for(h=1;q>=3;)q-=1,h*=q;for(;q<0;){if(q>-1e-9)return l(q,h);h/=q,q+=1}for(;q<2;){if(q<1e-9)return l(q,h);h/=q,q+=1}return q===2?h:(q-=2,h*s(q))}return hn=$,hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pn,P6;function Rr(){if(P6)return pn;P6=1;var e=Bc();return pn=e,pn}/**
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
*/var yn,S6;function l0(){if(S6)return yn;S6=1;var e=170;return yn=e,yn}var Dc=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rn,E6;function Uc(){if(E6)return Rn;E6=1;var e=X(),r=Br(),a=Rr(),i=ar(),n=l0(),u=Dc;function v(t){return e(t)?NaN:r(t)?t<0?NaN:t<=n?u[t]:i:a(t+1)}return Rn=v,Rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bn,w6;function F6(){if(w6)return bn;w6=1;var e=Uc();return bn=e,bn}/**
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
*/var gn,O6;function Xc(){if(O6)return gn;O6=1;function e(r){var a,i,n;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=3847467039331777e-5+r*(3685766504351951e-5+r*(1588920245372942e-5+r*(4059208354298835e-6+r*(6805476611834733e-7+r*(7823975500312005e-8+r*(6246580776401795e-9+r*(341986.3488721347+r*(12287.194511824551+r*(261.61404416416684+r*2.5066282746310007))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=2.5066282746310007+r*(261.61404416416684+r*(12287.194511824551+r*(341986.3488721347+r*(6246580776401795e-9+r*(7823975500312005e-8+r*(6805476611834733e-7+r*(4059208354298835e-6+r*(1588920245372942e-5+r*(3685766504351951e-5+r*3847467039331777e-5))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/n)}return gn=e,gn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ln,T6;function Vc(){if(T6)return Ln;T6=1;var e=Xc();return Ln=e,Ln}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nn,H6;function Kc(){if(H6)return Nn;H6=1;var e=Vc();return Nn=e,Nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mn,C6;function Qc(){if(C6)return Mn;C6=1;var e=Kc(),r=Rr(),a=mr(),i=Z(),n=ir(),u=nr(),v=yr(),t=Dr(),o=zr(),f=l0(),l=4269068009004705e289;function s($,q){var m,_,c;return $<v?q>=f?(_=s(q,f-q),_*=$,_*=l,1/_):1/($*r($+q)):(c=$+o-.5,$+q===$?i(q/c)<v?m=n(-q):m=1:(i(q)<10?m=n((.5-$)*a(q/c)):m=u(c/(c+q),$-.5),m*=e($)/e($+q)),m*=u(t/(c+q),q),m)}return Mn=s,Mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var An,k6;function Yc(){if(k6)return An;k6=1;var e=Z(),r=pr(),a=Rr(),i=F6(),n=l0(),u=Qc();function v(t,o){var f,l,s;if(t<=0||t+o<=0)return a(t)/a(t+o);if(l=r(o),l===o){if(s=r(t),s===t&&t<=n&&t+o<=n)return i(s-1)/i(l+s-1);if(e(o)<20){if(o===0)return 1;if(o<0){for(t-=1,f=t,o+=1;o!==0;)t-=1,f*=t,o+=1;return f}for(f=1/t,o-=1;o!==0;)t+=1,f/=t,o-=1;return f}}return u(t,o)}return An=v,An}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pn,W6;function Sn(){if(W6)return Pn;W6=1;var e=Yc();return Pn=e,Pn}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var En,B6;function Jc(){if(B6)return En;B6=1;function e(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}return En=e,En}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wn,D6;function Zc(){if(D6)return wn;D6=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}return wn=e,wn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fn,U6;function jc(){if(U6)return Fn;U6=1;var e=_r(),r=Jr(),a=X(),i=Sr(),n=or(),u=Jc(),v=Zc(),t=.6931471803691238,o=19082149292705877e-26,f=0x40000000000000,l=.3333333333333333,s=1048575,$=2146435072,q=1048576,m=1072693248;function _(c){var h,y,L,g,I,P,M,S,A,b,d,p;return c===0?n:a(c)||c<0?NaN:(y=e(c),I=0,y<q&&(I-=54,c*=f,y=e(c)),y>=$?c+c:(I+=(y>>20)-i|0,y&=s,S=y+614244&1048576|0,c=r(c,y|S^m),I+=S>>20|0,M=c-1,(s&2+y)<3?M===0?I===0?0:I*t+I*o:(P=M*M*(.5-l*M),I===0?M-P:I*t-(P-I*o-M)):(b=M/(2+M),p=b*b,S=y-398458|0,d=p*p,A=440401-y|0,g=d*u(d),L=p*v(d),S|=A,P=L+g,S>0?(h=.5*M*M,I===0?M-(h-b*(h+P)):I*t-(h-(b*(h+P)+I*o)-M)):I===0?M-b*(M-P):I*t-(b*(M-P)-I*o-M))))}return Fn=_,Fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var On,X6;function x(){if(X6)return On;X6=1;var e=jc();return On=e,On}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Tn,V6;function zc(){if(V6)return Tn;V6=1;var e=_r(),r=e6(),a=n6(),i=p6(),n=Er(),u=v0(),v=[0,0],t=1072243195,o=1044381696;function f(l){var s,$;if(s=e(l),s&=n,s<=t)return s<o?1:r(l,0);if(s>=u)return NaN;switch($=i(l,v),$&3){case 0:return r(v[0],v[1]);case 1:return-a(v[0],v[1]);case 2:return-r(v[0],v[1]);default:return a(v[0],v[1])}}return Tn=f,Tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hn,K6;function Gn(){if(K6)return Hn;K6=1;var e=zc();return Hn=e,Hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cn,Q6;function xc(){if(Q6)return Cn;Q6=1;var e=X(),r=kr(),a=Gn(),i=jr(),n=Z(),u=Wa(),v=Ir();function t(o){var f,l;return e(o)?NaN:r(o)?NaN:(l=o%2,f=n(l),f===0||f===1?u(0,l):f<.25?i(v*l):f<.75?(f=.5-f,u(a(v*f),l)):f<1.25?(l=u(1,l)-l,i(v*l)):f<1.75?(f-=1.5,-u(a(v*f),l)):(l-=u(2,l),i(v*l)))}return Cn=t,Cn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kn,Y6;function r_(){if(Y6)return kn;Y6=1;var e=xc();return kn=e,kn}/**
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
*/var Wn,J6;function e_(){if(J6)return Wn;J6=1;function e(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}return Wn=e,Wn}/**
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
*/var Bn,Z6;function a_(){if(Z6)return Bn;Z6=1;function e(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}return Bn=e,Bn}/**
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
*/var Dn,j6;function i_(){if(j6)return Dn;j6=1;function e(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}return Dn=e,Dn}/**
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
*/var Un,z6;function n_(){if(z6)return Un;z6=1;function e(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}return Un=e,Un}/**
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
*/var Xn,x6;function t_(){if(x6)return Xn;x6=1;function e(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}return Xn=e,Xn}/**
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
*/var Vn,r4;function u_(){if(r4)return Vn;r4=1;function e(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}return Vn=e,Vn}/**
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
*/var Kn,e4;function v_(){if(e4)return Kn;e4=1;function e(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}return Kn=e,Kn}/**
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
*/var Qn,a4;function f_(){if(a4)return Qn;a4=1;function e(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}return Qn=e,Qn}/**
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
*/var Yn,i4;function o_(){if(i4)return Yn;i4=1;function e(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}return Yn=e,Yn}/**
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
*/var Jn,n4;function l_(){if(n4)return Jn;n4=1;function e(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}return Jn=e,Jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zn,t4;function s_(){if(t4)return Zn;t4=1;var e=X(),r=kr(),a=Z(),i=x(),n=Na(),u=r_(),v=Ir(),t=ar(),o=e_(),f=a_(),l=i_(),s=n_(),$=t_(),q=u_(),m=v_(),_=f_(),c=o_(),h=l_(),y=.07721566490153287,L=.3224670334241136,g=1,I=-.07721566490153287,P=.48383612272381005,M=-.1475877229945939,S=.06462494023913339,A=-.07721566490153287,b=1,d=.4189385332046727,p=1.4616321449683622,R=4503599627370496,N=72057594037927940,T=13877787807814457e-33,E=1.4616321449683622,H=-.12148629053584961,F=-3638676997039505e-33;function O(w){var V,G,D,K,Y,C,W,k,tr,rr,U,Q,ur;if(e(w)||r(w))return w;if(w===0)return t;if(w<0?(V=!0,w=-w):V=!1,w<T)return-i(w);if(V){if(w>=R||(tr=u(w),tr===0))return t;G=i(v/a(tr*w))}if(w===1||w===2)return 0;if(w<2)switch(w<=.9?(ur=-i(w),w>=p-1+.27?(U=1-w,D=0):w>=p-1-.27?(U=w-(E-1),D=1):(U=w,D=2)):(ur=0,w>=p+.27?(U=2-w,D=0):w>=p-.27?(U=w-E,D=1):(U=w-1,D=2)),D){case 0:Q=U*U,C=y+Q*o(Q),Y=Q*(L+Q*f(Q)),W=U*C+Y,ur+=W-.5*U;break;case 1:Q=U*U,rr=Q*U,C=P+rr*$(rr),Y=M+rr*q(rr),K=S+rr*m(rr),W=Q*C-(F-rr*(Y+U*K)),ur+=H+W;break;case 2:C=U*(A+U*_(U)),Y=b+U*c(U),ur+=-.5*U+C/Y;break}else if(w<8)switch(D=n(w),U=w-D,W=U*(I+U*s(U)),k=g+U*l(U),ur=.5*U+W/k,Q=1,D){case 7:Q*=U+6;case 6:Q*=U+5;case 5:Q*=U+4;case 4:Q*=U+3;case 3:Q*=U+2,ur+=i(Q)}else w<N?(tr=i(w),Q=1/w,U=Q*Q,rr=d+Q*h(U),ur=(w-.5)*(tr-1)+rr):ur=w*(i(w)-1);return V&&(ur=G-ur),ur}return Zn=O,Zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jn,u4;function Ur(){if(u4)return jn;u4=1;var e=s_();return jn=e,jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xn,f4;function c_(){if(f4)return xn;f4=1;var e=14901161193847656e-24;return xn=e,xn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rt,o4;function __(){if(o4)return rt;o4=1;var e=eval;return rt=e,rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var et,l4;function m_(){if(l4)return et;l4=1;var e=__();function r(){var a;try{e('"use strict"; (function* () {})'),a=!0}catch{a=!1}return a}return et=r,et}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var at,s4;function c4(){if(s4)return at;s4=1;var e=m_();return at=e,at}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var it,_4;function $_(){if(_4)return it;_4=1;var e=Z(),r=yr(),a=1e6;function i(n,u){var v,t,o,f,l,s;if(s={},arguments.length>1&&(s=u),t=s.tolerance||r,f=s.maxTerms||a,l=s.initialValue||0,v=typeof n.next=="function",v===!0){for(o of n)if(l+=o,e(t*l)>=e(o)||--f===0)break}else do o=n(),l+=o;while(e(t*l)<e(o)&&--f);return l}return it=i,it}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nt,m4;function q_(){if(m4)return nt;m4=1;var e=Z(),r=yr(),a=1e6;function i(n,u){var v,t,o,f,l;l={},arguments.length>1&&(l=u),v=l.tolerance||r,o=l.maxTerms||a,f=l.initialValue||0;do t=n(),f+=t;while(e(v*f)<e(t)&&--o);return f}return nt=i,nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tt,$4;function xr(){if($4)return tt;$4=1;var e=c4(),r=$_(),a=q_(),i;return e()?i=r:i=a,tt=i,tt}/**
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
*/var ut,q4;function d_(){if(q4)return ut;q4=1;function e(r,a){var i=1,n=r,u=a;return v;function v(){var t=i;return i*=n/u,n-=1,t}}return ut=e,ut}/**
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
*/var vt,d4;function h_(){if(d4)return vt;d4=1;var e=xr(),r=d_();function a(i,n){var u,v;return v=r(i,n),u=e(v),u}return vt=a,vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ft,h4;function p_(){if(h4)return ft;h4=1;var e=ir();function r(a,i){var n,u,v,t;if(v=e(-i),u=v,u!==0)for(n=u,t=1;t<a;++t)n/=t,n*=i,u+=n;return u}return ft=r,ft}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ot,p4;function y_(){if(p4)return ot;p4=1;function e(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}return ot=e,ot}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lt,y4;function R_(){if(y4)return lt;y4=1;function e(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}return lt=e,lt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var st,R4;function b_(){if(R4)return st;R4=1;function e(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}return st=e,st}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ct,b4;function g_(){if(b4)return ct;b4=1;function e(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}return ct=e,ct}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _t,g4;function L_(){if(g4)return _t;g4=1;function e(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}return _t=e,_t}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mt,L4;function N_(){if(L4)return mt;L4=1;function e(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}return mt=e,mt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $t,N4;function I_(){if(N4)return $t;N4=1;function e(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}return $t=e,$t}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qt,I4;function M_(){if(I4)return qt;I4=1;function e(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}return qt=e,qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dt,M4;function A_(){if(M4)return dt;M4=1;var e=X(),r=ir(),a=Zr(),i=ar(),n=or(),u=y_(),v=R_(),t=b_(),o=g_(),f=L_(),l=N_(),s=I_(),$=M_(),q=1e-300,m=13877787807814457e-33,_=.8450629115104675,c=.12837916709551256,h=1,y=-.0023621185607526594,L=1,g=-.009864944034847148,I=1,P=-.0098649429247001,M=1;function S(A){var b,d,p,R,N,T,E,H;if(e(A))return NaN;if(A===i)return 0;if(A===n)return 2;if(A===0)return 1;if(A<0?(b=!0,d=-A):(b=!1,d=A),d<.84375)return d<m?1-A:(p=A*A,R=c+p*u(p),N=h+p*v(p),T=R/N,A<.25?1-(A+A*T):(R=A*T,R+=A-.5,.5-R));if(d<1.25)return N=d-1,E=y+N*t(N),H=L+N*o(N),b?1+_+E/H:1-_-E/H;if(d<28){if(N=1/(d*d),d<2.857142857142857)R=g+N*f(N),N=I+N*l(N);else{if(A<-6)return 2-q;R=P+N*s(N),N=M+N*$(N)}return p=a(d,0),R=r(-(p*p)-.5625)*r((p-d)*(p+d)+R/N),b?2-R/d:R/d}return b?2-q:q*q}return dt=S,dt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ht,A4;function s0(){if(A4)return ht;A4=1;var e=A_();return ht=e,ht}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pt,P4;function P_(){if(P4)return pt;P4=1;var e=s0(),r=J(),a=ir(),i=Ir();function n(u,v){var t,o,f,l,s;if(l=e(r(v)),l!==0&&u>1){for(o=a(-v)/r(i*v),o*=v,t=.5,o/=t,f=o,s=2;s<u;++s)o/=s-t,o*=v,f+=o;l+=f}return l}return pt=n,pt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yt,S4;function Xr(){if(S4)return yt;S4=1;var e=-708.3964185322641;return yt=e,yt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Rt,E4;function S_(){if(E4)return Rt;E4=1;var e=ir(),r=nr(),a=x(),i=Mr(),n=Xr();function u(v,t){var o,f;return f=v*a(t),t>=1?f<i&&-t>n?o=r(t,v)*e(-t):v>=1?o=r(t/e(t/v),v):o=e(f-t):f>n?o=r(t,v)*e(-t):t/v<i?o=r(t/e(t/v),v):o=e(f-t),o}return Rt=u,Rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gt,O4;function E_(){if(O4)return gt;O4=1;var e=Function;return gt=e,gt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lt,T4;function w_(){if(T4)return Lt;T4=1;var e=E_();return Lt=e,Lt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nt,H4;function F_(){if(H4)return Nt;H4=1;var e=w_(),r=F4();function a(i){var n,u,v,t;if(i.length>500)return o;if(n="return function evalpoly(x){",u=i.length,u===0)n+="return 0.0;";else if(u===1)n+="return "+i[0]+";";else{for(n+="if(x===0.0){return "+i[0]+";}",n+="return "+i[0],v=u-1,t=1;t<u;t++)n+="+x*",t<v&&(n+="("),n+=i[t];for(t=0;t<v-1;t++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new e(n)();function o(f){return r(i,f)}}return Nt=a,Nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var It,G4;function Ar(){if(G4)return It;G4=1;var e=fr(),r=F4(),a=F_();return e(r,"factory",a),It=r,It}/**
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
*/var Mt,C4;function O_(){if(C4)return Mt;C4=1;function e(r){var a=-r,i=-1,n=0;return u;function u(){return i*=a,n+=1,i/n}}return Mt=e,Mt}/**
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
*/var At,k4;function T_(){if(k4)return At;k4=1;var e=Z(),r=x(),a=yr(),i=xr(),n=O_();function u(v){var t,o;return v<=-1?NaN:(o=e(v),o>.95?r(1+v)-v:o<a?-v*v/2:(t={initialValue:-v},i(n(v),t)))}return At=u,At}/**
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
*/var Pt,W4;function B4(){if(W4)return Pt;W4=1;var e=T_();return Pt=e,Pt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var St,D4;function c0(){if(D4)return St;D4=1;var e=6.283185307179586;return St=e,St}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Et,U4;function H_(){if(U4)return Et;U4=1;function e(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}return Et=e,Et}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wt,X4;function G_(){if(X4)return wt;X4=1;function e(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}return wt=e,wt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ft,V4;function C_(){if(V4)return Ft;V4=1;function e(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}return Ft=e,Ft}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ot,K4;function k_(){if(K4)return Ot;K4=1;function e(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}return Ot=e,Ot}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tt,Q4;function W_(){if(Q4)return Tt;Q4=1;function e(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}return Tt=e,Tt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ht,Y4;function B_(){if(Y4)return Ht;Y4=1;function e(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}return Ht=e,Ht}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gt,J4;function D_(){if(J4)return Gt;J4=1;function e(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}return Gt=e,Gt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ct,Z4;function U_(){if(Z4)return Ct;Z4=1;function e(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}return Ct=e,Ct}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kt,j4;function X_(){if(j4)return kt;j4=1;function e(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}return kt=e,kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Wt,z4;function V_(){if(z4)return Wt;z4=1;var e=Ar(),r=B4(),a=s0(),i=J(),n=ir(),u=c0(),v=H_(),t=G_(),o=C_(),f=k_(),l=W_(),s=B_(),$=D_(),q=U_(),m=X_(),_=[0,0,0,0,0,0,0,0,0,0];function c(h,y){var L,g,I,P,M;return g=(y-h)/h,I=-r(g),P=h*I,M=i(2*I),y<h&&(M=-M),_[0]=v(M),_[1]=t(M),_[2]=o(M),_[3]=f(M),_[4]=l(M),_[5]=s(M),_[6]=$(M),_[7]=q(M),_[8]=m(M),_[9]=-.0005967612901927463,L=e(_,1/h),L*=n(-P)/i(u*h),y<h&&(L=-L),L+=a(i(P))/2,L}return Wt=c,Wt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bt,x4;function K_(){if(x4)return Bt;x4=1;function e(r,a){var i=1,n=r,u=a;return v;function v(){var t=i;return n+=1,i*=u/n,t}}return Bt=e,Bt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Dt,rl;function el(){if(rl)return Dt;rl=1;var e=xr(),r=K_();function a(i,n,u){var v,t;return u=u||0,t=r(i,n),v=e(t,{initialValue:u}),v}return Dt=a,Dt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ut,al;function Q_(){if(al)return Ut;al=1;function e(r){var a,i,n;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/n)}return Ut=e,Ut}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Xt,il;function Y_(){if(il)return Xt;il=1;var e=Q_();return Xt=e,Xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vt,nl;function _0(){if(nl)return Vt;nl=1;var e=Y_();return Vt=e,Vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Kt,tl;function J_(){if(tl)return Kt;tl=1;var e=_0(),r=Ur(),a=Rr(),i=B4(),n=J(),u=Z(),v=ir(),t=nr(),o=Fr(),f=Nr(),l=x(),s=Or(),$=Mr(),q=Xr(),m=zr(),_=Dr();function c(h,y){var L,g,I,P,M,S,A;return I=h+m-.5,A=(y-h-m+.5)/I,h<1?y<=q||h<1/s?v(h*l(y)-y-r(h)):t(y,h)*v(-y)/a(h):(u(A*A*h)<=100&&h>150?(L=h*i(A)+y*(.5-m)/I,L=v(L)):(P=h*l(y/I),M=h-y,f(P,M)<=q||o(P,M)>=$?(g=M/h,f(P,M)/2>q&&o(P,M)/2<$?(S=t(y/I,h/2)*v(M/2),L=S*S):f(P,M)/4>q&&o(P,M)/4<$&&y>h?(S=t(y/I,h/4)*v(M/4),L=S*S,L*=L):g>q&&g<$?L=t(y*v(g)/I,h):L=v(P+M)):L=t(y/I,h)*v(M)),L*=n(I/_)/e(h),L)}return Kt=c,Kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qt,ul;function Z_(){if(ul)return Qt;ul=1;var e=X(),r=kr(),a=Z(),i=Cr(),n=x(),u=nr(),v=Na();function t(o,f){var l,s;if(e(o)||e(f))return NaN;if(f===0)return 0;if(o===0)return-1;if(o<0&&f%2===0&&(o=-o),o>0){if((a(f*(o-1))<.5||a(f)<.2)&&(s=n(o)*f,s<.5))return i(s)}else if(v(f)!==f)return NaN;return l=u(o,f)-1,r(l)||e(l)?NaN:l}return Qt=t,Qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yt,vl;function j_(){if(vl)return Yt;vl=1;var e=Z_();return Yt=e,Yt}/**
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
*/var Jt,fl;function z_(){if(fl)return Jt;fl=1;function e(r){var a,i,n;return r===0?-.01803556856784494:(r<0?a=-r:a=r,a<=1?(i=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),n=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,i=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),n=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),i/n)}return Jt=e,Jt}/**
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
*/var Zt,ol;function x_(){if(ol)return Zt;ol=1;function e(r){var a,i,n;return r===0?.04906224540690395:(r<0?a=-r:a=r,a<=1?(i=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),n=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,i=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),n=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),i/n)}return Zt=e,Zt}/**
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
*/var jt,ll;function rm(){if(ll)return jt;ll=1;function e(r){var a,i,n;return r===0?-.029232972183027003:(r<0?a=-r:a=r,a<=1?(i=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),n=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,i=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),n=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),i/n)}return jt=e,jt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zt,sl;function em(){if(sl)return zt;sl=1;var e=x(),r=yr(),a=z_(),i=x_(),n=rm(),u=.15896368026733398,v=.5281534194946289,t=.45201730728149414;function o(f,l,s){var $,q,m,_;if(f<r)return-e(f);if(l===0||s===0)return 0;if(q=0,f>2){if(f>=3){do f-=1,s-=1,q+=e(f);while(f>=3);s=f-2}return m=s*(f+1),_=a(s),q+=m*u+m*_,q}return f<1&&(q+=-e(f),s=l,l=f,f+=1),f<=1.5?(m=i(l),$=l*s,q+=$*v+$*m,q):(m=s*l,_=n(-s),q+=m*t+m*_,q)}return zt=o,zt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xt,cl;function am(){if(cl)return xt;cl=1;var e=Rr(),r=Cr(),a=mr(),i=X(),n=em();function u(v){return i(v)?NaN:v<0?v<-.5?e(1+v)-1:r(-a(v)+n(v+2,v+1,v)):v<2?r(n(v+1,v,v-1)):e(1+v)-1}return xt=u,xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,_l;function im(){if(_l)return r1;_l=1;var e=am();return r1=e,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e1,ml;function nm(){if(ml)return e1;ml=1;function e(r,a){var i,n,u,v;return i=-a,a=-a,n=r+1,u=1,t;function t(){return v=i/n,i*=a,u+=1,i/=u,n+=1,v}}return e1=e,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var a1,$l;function tm(){if($l)return a1;$l=1;var e=j_(),r=xr(),a=im(),i=nm();function n(u,v,t){var o,f,l,s,$;return f=a(u),l=(f+1)/u,s=e(v,u),f-=s,f/=u,$=i(u,v),s+=1,o=t?l:0,f=-s*r($,{initialValue:(o-f)/s}),t&&(f=-f),[f,l]}return a1=n,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,ql;function m0(){if(ql)return i1;ql=1;var e=11754943508222875e-54;return i1=e,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1,dl;function um(){if(dl)return n1;dl=1;var e=Z(),r=m0(),a=yr(),i=1e6;function n(t,o,f){var l,s,$,q,m,_,c;if(l=typeof t.next=="function",c=l?t.next().value:t(),q=c[1],$=c[0],q===0&&(q=r),m=q,_=0,l===!0)do c=t.next().value,c&&(_=c[1]+c[0]*_,_===0&&(_=r),m=c[1]+c[0]/m,m===0&&(m=r),_=1/_,s=m*_,q*=s);while(e(s-1)>o&&--f);else do c=t(),c&&(_=c[1]+c[0]*_,_===0&&(_=r),m=c[1]+c[0]/m,m===0&&(m=r),_=1/_,s=m*_,q*=s);while(c&&e(s-1)>o&&--f);return $/q}function u(t,o,f){var l,s,$,q,m,_;if(l=typeof t.next=="function",_=l?t.next().value:t(),$=_[1],$===0&&($=r),q=$,m=0,l===!0)do _=t.next().value,_&&(m=_[1]+_[0]*m,m===0&&(m=r),q=_[1]+_[0]/q,q===0&&(q=r),m=1/m,s=q*m,$*=s);while(_&&e(s-1)>o&&--f);else do _=t(),_&&(m=_[1]+_[0]*m,m===0&&(m=r),q=_[1]+_[0]/q,q===0&&(q=r),m=1/m,s=q*m,$*=s);while(_&&e(s-1)>o&&--f);return $}function v(t,o){var f,l,s;return l={},arguments.length>1&&(l=o),f=l.maxIter||i,s=l.tolerance||a,l.keep?u(t,s,f):n(t,s,f)}return n1=v,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1,hl;function vm(){if(hl)return t1;hl=1;var e=Z(),r=yr(),a=m0(),i=1e6;function n(t,o,f){var l,s,$,q,m,_;_=t(),m=_[1],s=_[0],m===0&&(m=a),$=m,q=0;do _=t(),_&&(q=_[1]+_[0]*q,q===0&&(q=a),$=_[1]+_[0]/$,$===0&&($=a),q=1/q,l=$*q,m*=l);while(_&&e(l-1)>o&&--f);return s/m}function u(t,o,f){var l,s,$,q,m;m=t(),q=m[1],q===0&&(q=a),s=q,$=0;do m=t(),m&&($=m[1]+m[0]*$,$===0&&($=a),s=m[1]+m[0]/s,s===0&&(s=a),$=1/$,l=s*$,q*=l);while(m&&e(l-1)>o&&--f);return q}function v(t,o){var f,l,s;return l={},arguments.length>1&&(l=o),s=l.tolerance||r,f=l.maxIter||i,l.keep?u(t,s,f):n(t,s,f)}return t1=v,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,pl;function yl(){if(pl)return u1;pl=1;var e=c4(),r=um(),a=vm(),i;return e()?i=r:i=a,u1=i,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var v1,Rl;function fm(){if(Rl)return v1;Rl=1;function e(r,a){var i=a-r+1,n=r,u=0;return v;function v(){return u+=1,i+=2,[u*(n-u),i]}}return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var f1,bl;function gl(){if(bl)return f1;bl=1;var e=yl(),r=fm();function a(i,n){var u=r(i,n);return 1/(n-i+1+e(u))}return f1=a,f1}/**
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
*/var o1,Ll;function om(){if(Ll)return o1;Ll=1;var e=pr(),r=Rr(),a=Z(),i=nr(),n=x(),u=c_(),v=Or(),t=Mr(),o=h_(),f=p_(),l=P_(),s=S_(),$=V_(),q=el(),m=J_(),_=tm(),c=gl();function h(y,L,g,I){var P,M,S,A,b,d,p,R,N,T,E,H,F,O;switch(p=0,R=I,d=L<30&&L<=y+1&&y<t,d?(F=e(L),N=F===L,S=N?!1:a(F-L)===.5):(N=!1,S=!1),N&&y>.6?(R=!R,M=0):S&&y>.2?(R=!R,M=1):y<u&&L>1?M=6:y>1e3&&(L<y||a(L-50)/y<1)?(R=!R,M=7):y<.5?-.4/n(y)<L?M=2:M=3:y<1.1?y*.75<L?M=2:M=3:(b=!1,g&&L>20&&(T=a((y-L)/L),L>200?20/L>T*T&&(b=!0):T<.4&&(b=!0)),b?M=5:y-1/(3*y)<L?M=2:(M=4,R=!R)),M){case 0:p=f(L,y),g===!1&&(p*=r(L));break;case 1:p=l(L,y),g===!1&&(p*=r(L));break;case 2:p=g?m(L,y):s(L,y),p!==0&&(A=0,P=!1,R&&(A=g?1:r(L),g||p>=1||v*p>A?(A/=p,g||L<1||v/L>A?(A*=-L,P=!0):A=0):A=0),p*=q(L,y,A)/L,P&&(R=!1,p=-p));break;case 3:R=!R,E=_(L,y,R),p=E[0],O=E[1],R=!1,g&&(p/=O);break;case 4:p=g?m(L,y):s(L,y),p!==0&&(p*=c(L,y));break;case 5:p=$(L,y),y>=L&&(R=!R);break;case 6:p=g?i(y,L)/r(L+1):i(y,L)/L,p*=1-L*y/(L+1);break;case 7:p=g?m(L,y):s(L,y),p/=y,p!==0&&(p*=o(L,y));break}return g&&p>1&&(p=1),R&&(H=g?1:r(L),p=H-p),p}return o1=h,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var l1,Nl;function lm(){if(Nl)return l1;Nl=1;var e=Ur(),r=ir(),a=x(),i=o0(),n=Mr(),u=ar(),v=l0(),t=om(),o=el(),f=gl();function l(s,$,q,m){var _,c,h,y;return s<0||$<=0?NaN:(_=q===void 0?!0:q,h=m,$>=v&&!_?(h&&$*4<s?(y=$*a(s)-s,y+=a(f($,s))):!h&&$>4*s?(y=$*a(s)-s,c=0,y+=a(o($,s,c)/$)):(y=t(s,$,!0,h),y===0?h?(y=1+1/(12*$)+1/(288*$*$),y=a(y)-$+($-.5)*a($),y+=a(i)):(y=$*a(s)-s,c=0,y+=a(o($,s,c)/$)):y=a(y)+e($)),y>n?u:r(y)):t(s,$,_,h))}return l1=l,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,Il;function Ml(){if(Il)return s1;Il=1;var e=lm();return s1=e,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var c1,Al;function sm(){if(Al)return c1;Al=1;var e=ir(),r=nr(),a=x(),i=Mr(),n=Xr();function u(v,t){var o,f;return f=v*a(t),t>=1?f<i&&-t>n?o=r(t,v)*e(-t):v>=1?o=r(t/e(t/v),v):o=e(f-t):f>n?o=r(t,v)*e(-t):t/v<i?o=r(t/e(t/v),v):o=e(f-t),o}return c1=u,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _1,Pl;function cm(){if(Pl)return _1;Pl=1;var e=_0(),r=Ur(),a=Rr(),i=mr(),n=J(),u=Z(),v=ir(),t=nr(),o=Fr(),f=Nr(),l=x(),s=Mr(),$=Xr(),q=zr(),m=Dr();function _(c,h){var y,L,g,I,P,M,S;return g=c+q-.5,S=(h-c-q+.5)/g,c<1?h<=$?v(c*l(h)-h-r(c)):t(h,c)*v(-h)/a(c):(u(S*S*c)<=100&&c>150?(y=c*(i(S)-S)+h*(.5-q)/g,y=v(y)):(I=c*l(h/g),P=c-h,f(I,P)<=$||o(I,P)>=s?(L=P/c,f(I,P)/2>$&&o(I,P)/2<s?(M=t(h/g,c/2)*v(P/2),y=M*M):f(I,P)/4>$&&o(I,P)/4<s&&h>c?(M=t(h/g,c/4)*v(P/4),y=M*M,y*=y):L>$&&L<s?y=t(h*v(L)/g,c):y=v(I+P)):y=t(h/g,c)*v(P)),y*=n(g/m)/e(c),y)}return _1=_,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var m1,Sl;function _m(){if(Sl)return m1;Sl=1;var e=Sn(),r=F6(),a=Ml(),i=mr(),n=Z(),u=nr(),v=x(),t=wr(),o=yr(),f=sm(),l=cm(),s=new Array(30);function $(q,m,_,c,h,y,L){var g,I,P,M,S,A,b,d,p,R,N,T,E,H,F,O,w,V;if(A=m-1,w=q+A/2,c<.35?R=i(-c):R=v(_),V=-w*R,T=l(m,V),T<=t)return h;for(L?(g=T/e(q,m),g/=u(w,m)):g=f(m,V)/u(w,m),g*=y,s[0]=1,E=a(V,m,!0,!0),E/=T,M=h+g*E,P=1,b=R/2,b*=b,d=1,N=4*w*w,S=m,F=1;F<s.length;++F){for(P+=2,s[F]=0,p=m-F,I=3,H=1;H<F;++H)p=H*m-F,s[F]+=p*s[F-H]/r(I),I+=2;if(s[F]/=F,s[F]+=A/r(P),E=(S*(S+1)*E+(V+S+1)*d)/N,d*=b,S+=2,O=g*s[F]*E,M+=O,O>1){if(n(O)<n(o*M))break}else if(n(O/o)<n(M))break}return M}return m1=$,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $1,El;function mm(){if(El)return $1;El=1;function e(r,a,i){var n,u;if(i===0)return 1;for(n=1,u=0;u<i;u++)n*=(r+u)/(a+u);return n}return $1=e,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,wl;function $m(){if(wl)return q1;wl=1;var e=Z(),r=Fr();function a(i,n){return r(e(i),e(n))}return q1=a,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1,Fl;function qm(){if(Fl)return d1;Fl=1;var e=$m();return d1=e,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,Ol;function dm(){if(Ol)return h1;Ol=1;var e=Z(),r=Nr();function a(i,n){return r(e(i),e(n))}return h1=a,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,Tl;function hm(){if(Tl)return p1;Tl=1;var e=dm();return p1=e,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var y1,Hl;function R1(){if(Hl)return y1;Hl=1;var e=_0(),r=qm(),a=hm(),i=Cr(),n=mr(),u=J(),v=Z(),t=ir(),o=nr(),f=Nr(),l=x(),s=Mr(),$=Xr(),q=zr(),m=Dr();function _(c,h,y,L,g){var I,P,M,S,A,b,d,p,R,N,T,E,H,F;if(!g)return o(y,c)*o(L,h);if(H=c+h,S=c+q-.5,A=h+q-.5,b=H+q-.5,I=e(H),I/=e(c)*e(h),I*=u(A/m),I*=u(S/b),d=(y*h-L*S)/S,p=(L*c-y*A)/A,a(d,p)<.2)if(d*p>0||f(c,h)<1)v(d)<.1?I*=t(c*n(d)):I*=o(y*b/S,c),v(p)<.1?I*=t(h*n(p)):I*=o(L*b/A,h);else if(r(d,p)<.5)P=c<h,M=h/c,P&&M*p<.1||!P&&d/M>.1?(R=i(M*n(p)),R=d+R+R*d,R=c*n(R),I*=t(R)):(R=i(n(d)/M),R=p+R+R*p,R=h*n(R),I*=t(R));else if(v(d)<v(p))if(F=c*n(d)+h*l(L*b/A),F<=$||F>=s){if(F+=l(I),F>=s)return NaN;I=t(F)}else I*=t(F);else if(F=h*n(p)+c*l(y*b/S),F<=$||F>=s){if(F+=l(I),F>=s)return NaN;I=t(F)}else I*=t(F);else if(T=y*b/S,E=L*b/A,d=c*l(T),p=h*l(E),d>=s||d<=$||p>=s||p<=$)if(c<h)if(N=o(E,h/c),R=c*(l(T)+l(N)),R<s&&R>$)I*=o(N*T,c);else{if(p+=d+l(I),p>=s)return NaN;I=t(p)}else if(N=o(T,c/h),R=(l(N)+l(E))*h,R<s&&R>$)I*=o(N*E,h);else{if(p+=d+l(I),p>=s)return NaN;I=t(p)}else I*=o(T,c)*o(E,h);return I}return y1=_,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var b1,Gl;function pm(){if(Gl)return b1;Gl=1;var e=yl(),r=R1(),a={keep:!0,maxIter:1e3};function i(u,v,t,o){var f=0;return l;function l(){var s,$,q;return $=(u+f-1)*(u+v+f-1)*f*(v-f)*t*t,s=u+2*f-1,$/=s*s,q=f,q+=f*(v-f)*t/(u+2*f-1),q+=(u+f)*(u*o-v*t+1+f*(2-t))/(u+2*f+1),f+=1,[$,q]}}function n(u,v,t,o,f,l){var s,$,q;return s=r(u,v,t,o,f),l&&(l[1]=s),s===0?s:(q=i(u,v,t,o),$=e(q,a),s/$)}return b1=n,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,Cl;function ym(){if(Cl)return g1;Cl=1;var e=9007199254740991;return g1=e,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,kl;function Rm(){if(kl)return L1;kl=1;function e(r,a){var i=0,n;if(r===0)return a;if(a===0)return r;for(;(r&1)===0&&(a&1)===0;)r>>>=1,a>>>=1,i+=1;for(;(r&1)===0;)r>>>=1;for(;a;){for(;(a&1)===0;)a>>>=1;r>a&&(n=a,a=r,r=n),a-=r}return r<<i}return L1=e,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,Wl;function bm(){if(Wl)return N1;Wl=1;function e(r,a){var i=1,n;if(r===0)return a;if(a===0)return r;for(;r%2===0&&a%2===0;)r/=2,a/=2,i*=2;for(;r%2===0;)r/=2;for(;a;){for(;a%2===0;)a/=2;r>a&&(n=a,a=r,r=n),a-=r}return i*r}return N1=e,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,Bl;function gm(){if(Bl)return I1;Bl=1;var e=X(),r=Br(),a=ar(),i=or(),n=Yo(),u=Rm(),v=bm();function t(o,f){return e(o)||e(f)?NaN:o===a||f===a||o===i||f===i?NaN:r(o)&&r(f)?(o<0&&(o=-o),f<0&&(f=-f),o<=n&&f<=n?u(o,f):v(o,f)):NaN}return I1=t,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,Dl;function Lm(){if(Dl)return M1;Dl=1;var e=gm();return M1=e,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,Ul;function Nm(){if(Ul)return A1;Ul=1;var e=ym(),r=ar(),a=Br(),i=X(),n=ui(),u=pr(),v=Lm();function t(o,f){var l,s,$,q,m,_,c;if(i(o)||i(f))return NaN;if(!a(o)||!a(f))return NaN;if(f<0||(s=1,o<0&&(o=-o+f-1,n(f)&&(s*=-1)),f>o))return 0;if(f===0||f===o)return s;if(f===1||f===o-1)return s*o;for(o-f<f&&(f=o-f),c=u(e/o),l=1,m=1;m<=f&&!(l>c);m++)l*=o,l/=m,o-=1;return m>f?s*l:($=t(o,f-m+1),$===r?s*$:(q=t(f,f-m+1),_=v($,q),$/=_,q/=_,l/=q,s*l*$))}return A1=t,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,Xl;function Im(){if(Xl)return P1;Xl=1;var e=Nm();return P1=e,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var S1,Vl;function Mm(){if(Vl)return S1;Vl=1;var e=Im(),r=pr(),a=nr(),i=wr();function n(u,v,t,o){var f,l,s,$,q;if(l=a(t,u),l>i)for($=l,q=r(u-1);q>v;q--)$*=(q+1)*o/((u-q)*t),l+=$;else if(s=r(u*t),s<=v+1&&(s=r(v+2)),l=a(t,s)*a(o,u-s),l*=e(r(u),r(s)),l===0)for(q=s-1;q>v;q--)l+=a(t,q)*a(o,u-q),l*=e(r(u),r(q));else{for($=l,f=l,q=s-1;q>v;q--)$*=(q+1)*o/((u-q)*t),l+=$;for($=f,q=s+1;q<=u;q++)$*=(u-q+1)*t/(q*o),l+=$}return l}return S1=n,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var E1,Kl;function Am(){if(Kl)return E1;Kl=1;var e=R1();function r(a,i,n,u,v,t,o){var f,l,s,$;if(f=e(a,i,n,u,t),o&&(o[1]=f),f/=a,f===0)return f;for(s=1,l=1,$=0;$<v-1;++$)l*=(a+i+$)*n/(a+$+1),s+=l;return f*=s,f}return E1=r,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var w1,Ql;function Pm(){if(Ql)return w1;Ql=1;var e=_0(),r=xr(),a=mr(),i=J(),n=ir(),u=nr(),v=x(),t=wr(),o=Mr(),f=Xr(),l=zr(),s=Dr(),$={maxTerms:100};function q(_,c,h,y){var L=1-c,g=1;return I;function I(){var P=y/_;return _+=1,y*=L*h/g,g+=1,L+=1,P}}function m(_,c,h,y,L,g,I){var P,M,S,A,b,d,p,R;return L?(p=_+c,M=_+l-.5,S=c+l-.5,A=p+l-.5,P=e(p)/(e(_)*e(c)),b=v(A/S)*(c-.5),d=v(h*A/M)*_,b>f&&b<o&&d>f&&d<o?(_*c<S*10?P*=n((c-.5)*a(_/S)):P*=u(A/S,c-.5),P*=u(h*A/M,_),P*=i(M/s),g&&(g[1]=P*u(I,c))):(P=v(P)+b+d+(v(M)-1)/2,g&&(g[1]=n(P+c*v(I))),P=n(P))):P=u(h,_),P<t?y:(R=q(_,c,h,P),$.initialValue=y,r(R,$))}return w1=m,w1}var F1,Yl;function Jl(){if(Yl)return F1;Yl=1;var e=X(),r=Cr(),a=pr(),i=mr(),n=ha(),u=f0(),v=J(),t=ir(),o=nr(),f=Fr(),l=Nr(),s=Or(),$=wr(),q=Yo(),m=Di(),_=Ir(),c=_m(),h=mm(),y=R1(),L=pm(),g=Mm(),I=Am(),P=Pm(),M=1/_;function S(A,b,d,p,R,N,T,E){var H,F,O,w,V,G,D,K,Y,C,W,k;if(k=1-A,D=E,K=E+T,N[K]=-1,e(A)||A<0||A>1)return N[D]=NaN,N[K]=NaN,N;if(p){if(b<0||d<0)return N[D]=NaN,N[K]=NaN,N;if(b===0){if(d===0)return N[D]=NaN,N[K]=NaN,N;if(d>0)return N[D]=R?0:1,N}else if(d===0&&b>0)return N[D]=R?1:0,N}else if(b<=0||d<=0)return N[D]=NaN,N[K]=NaN,N;return A===0?(b===1?N[K]=1:N[K]=b<1?s/2:$*2,R?(N[D]=p?1:u(b,d),N):(N[D]=0,N)):A===1?(d===1?N[K]=1:N[K]=d<1?s/2:$*2,R?N[D]=0:N[D]=p?1:u(b,d),N):b===.5&&d===.5?(N[K]=M*v(k*A),W=n(v(R?k:A)),W/=m,p||(W*=_),N[D]=W,N):(b===1&&(G=d,d=b,b=G,G=k,k=A,A=G,R=!R),d===1?b===1?(N[D]=R?k:A,N[K]=1,N):(N[K]=b*o(A,b-1),k<.5?W=R?-r(b*i(-k)):t(b*i(-k)):W=R?-(o(A,b)-1):o(A,b),p||(W/=b),N[D]=W,N):(l(b,d)<=1?(A>.5&&(G=d,d=b,b=G,G=k,k=A,A=G,R=!R),f(b,d)<=1?b>=l(.2,d)||o(A,b)<=.9?R?(O=-(p?1:u(b,d)),R=!1,O=-P(b,d,A,O,p,N,k)):O=P(b,d,A,0,p,N,k):(G=d,d=b,b=G,G=k,k=A,A=G,R=!R,k>=.3?R?(O=-(p?1:u(b,d)),R=!1,O=-P(b,d,A,O,p,N,k)):O=P(b,d,A,0,p,N,k):(p?F=1:F=h(b+d,b,20),O=I(b,d,A,k,20,p,N),R?(O-=p?1:u(b,d),R=!1,O=-c(b+20,d,A,k,O,F,p)):O=c(b+20,d,A,k,O,F,p))):d<=1||A<.1&&o(d*A,b)<=.7?R?(O=-(p?1:u(b,d)),R=!1,O=-P(b,d,A,O,p,N,k)):O=P(b,d,A,0,p,N,k):(G=d,d=b,b=G,G=k,k=A,A=G,R=!R,k>=.3?R?(O=-(p?1:u(b,d)),R=!1,O=-P(b,d,A,O,p,N,k)):O=P(b,d,A,0,p,N,k):b>=15?R?(O=-(p?1:u(b,d)),R=!1,O=-c(b,d,A,k,O,1,p)):O=c(b,d,A,k,0,1,p):(p?F=1:F=h(b+d,b,20),O=I(b,d,A,k,20,p,N),R?(O-=p?1:u(b,d),R=!1,O=-c(b+20,d,A,k,O,F,p)):O=c(b+20,d,A,k,O,F,p)))):(b<d?H=b-(b+d)*A:H=(b+d)*k-d,H<0&&(G=d,d=b,b=G,G=k,k=A,A=G,R=!R),d<40?a(b)===b&&a(d)===d&&b<q-100?(Y=b-1,C=d+Y,O=g(C,Y,A,k),p||(O*=u(b,d))):d*A<=.7?R?(O=-(p?1:u(b,d)),R=!1,O=-P(b,d,A,O,p,N,k)):O=P(b,d,A,0,p,N,k):b>15?(C=a(d),C===d&&(C-=1),w=d-C,p?F=1:F=h(b+w,w,C),O=I(w,b,k,A,C,p),O=c(b,w,A,k,O,1,p),O/=F):p?(C=a(d),w=d-C,w<=0&&(C-=1,w+=1),O=I(w,b,k,A,C,p),O+=I(b,w,A,k,20,p),R&&(O-=1),O=c(b+20,w,A,k,O,1,p),R&&(O=-O,R=!1)):O=L(b,d,A,k,p,N):O=L(b,d,A,k,p,N)),N[K]<0&&(N[K]=y(b,d,A,k,!0)),V=k*A,N[K]!==0&&(s*V<N[K]?N[K]=s/2:N[K]/=V),N[D]=R?(p?1:u(b,d))-O:O,N))}return F1=S,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,Zl;function Sm(){if(Zl)return O1;Zl=1;var e=Jl();function r(a,i,n,u,v){return e(a,i,n,u,v,[0,0],1,0)}return O1=r,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1,jl;function zl(){if(jl)return T1;jl=1;var e=fr(),r=Sm(),a=Jl();return e(r,"assign",a),T1=r,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,xl;function Em(){if(xl)return H1;xl=1;var e=zl().assign;function r(a,i,n,u,v){var t=[0,0];return u=u!==!1,v=v===!0,e(a,i,n,u,v,t,1,0),t[0]}return H1=r,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1,rs;function r0(){if(rs)return G1;rs=1;var e=Em();return G1=e,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1,es;function wm(){if(es)return C1;es=1;var e=r0(),r=X();function a(i,n,u){return r(i)||r(n)||r(u)||n<=0||u<=0?NaN:i<=0?0:i>=1?1:e(i,n,u)}return C1=a,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,as;function Fm(){if(as)return k1;as=1;function e(r){return a;function a(){return r}}return k1=e,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1,is;function $r(){if(is)return W1;is=1;var e=Fm();return W1=e,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,ns;function Om(){if(ns)return B1;ns=1;var e=$r(),r=r0(),a=X();function i(n,u){if(a(n)||a(u)||n<=0||u<=0)return e(NaN);return v;function v(t){return a(t)?NaN:t<=0?0:t>=1?1:r(t,n,u)}}return B1=i,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1,ts;function Tm(){if(ts)return D1;ts=1;var e=fr(),r=wm(),a=Om();return e(r,"factory",a),D1=r,D1}var Hm=Tm(),U1=br(Hm);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var V1,fs;function Gm(){if(fs)return V1;fs=1;var e=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],r=e.length;function a(i){var n,u,v,t,o;if(i<-1.1||i>1.1)return NaN;for(v=0,t=0,n=2*i,o=0;o<r;o++)u=v,v=t,t=n*v-u+e[o];return(t-u)*.5}return V1=a,V1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var K1,os;function Cm(){if(os)return K1;os=1;var e=nr(),r=Gm(),a=9490626562425156e-8,i=3745194030963158e291;function n(u){return u<10?NaN:u>=i?0:u<a?r(2*e(10/u,2)-1)/u:1/(u*12)}return K1=n,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Q1,ls;function km(){if(ls)return Q1;ls=1;var e=Ur(),r=mr(),a=Rr(),i=Fr(),n=Nr(),u=x(),v=vs(),t=or(),o=ar(),f=Cm();function l(s,$){var q,m,_;return m=n(s,$),_=i(s,$),m<0?NaN:m===0?o:_===o?t:m>=10?(q=f(m)+f(_)-f(m+_),-.5*u(_)+v+q+(m-.5)*u(m/(m+_))+_*r(-m/(m+_))):_>=10?(q=f(_)-f(m+_),e(m)+q+m-m*u(m+_)+(_-.5)*r(-m/(m+_))):u(a(m)*(a(_)/a(m+_)))}return Q1=l,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1,ss;function cs(){if(ss)return Y1;ss=1;var e=km();return Y1=e,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1,_s;function Wm(){if(_s)return J1;_s=1;var e=cs(),r=X(),a=mr(),i=ir(),n=x(),u=ar();function v(t,o,f){var l;return r(t)||r(o)||r(f)||o<=0||f<=0?NaN:t<0||t>1?0:t===0?o<1?u:o>1?0:f:t===1?f<1?u:f>1?0:o:(l=(o-1)*n(t),l+=(f-1)*a(-t),l-=e(o,f),i(l))}return J1=v,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1,ms;function Bm(){if(ms)return Z1;ms=1;var e=$r(),r=cs(),a=X(),i=mr(),n=ir(),u=x(),v=ar();function t(o,f){var l;if(a(o)||a(f)||o<=0||f<=0)return e(NaN);return l=r(o,f),s;function s($){var q;return a($)?NaN:$<0||$>1?0:$===0?o<1?v:o>1?0:f:$===1?f<1?v:f>1?0:o:(q=-l,q+=(o-1)*u($),q+=(f-1)*i(-$),n(q))}}return Z1=t,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1,$s;function Dm(){if($s)return j1;$s=1;var e=fr(),r=Wm(),a=Bm();return e(r,"factory",a),j1=r,j1}var Um=Dm(),Xm=br(Um);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1,qs;function Vm(){if(qs)return z1;qs=1;function e(r){var a,i,n;return r===0?-.0005087819496582806:(r<0?a=-r:a=r,a<=1?(i=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),n=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,i=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),n=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),i/n)}return z1=e,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1,ds;function Km(){if(ds)return x1;ds=1;function e(r){var a,i,n;return r===0?-.20243350835593876:(r<0?a=-r:a=r,a<=1?(i=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),n=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,i=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),n=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),i/n)}return x1=e,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ru,hs;function Qm(){if(hs)return ru;hs=1;function e(r){var a,i,n;return r===0?-.1311027816799519:(r<0?a=-r:a=r,a<=1?(i=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,i=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),i/n)}return ru=e,ru}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eu,ps;function Ym(){if(ps)return eu;ps=1;function e(r){var a,i,n;return r===0?-.0350353787183178:(r<0?a=-r:a=r,a<=1?(i=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,i=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),i/n)}return eu=e,eu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var au,ys;function Jm(){if(ys)return au;ys=1;function e(r){var a,i,n;return r===0?-.016743100507663373:(r<0?a=-r:a=r,a<=1?(i=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,i=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),n=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),i/n)}return au=e,au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var iu,Rs;function Zm(){if(Rs)return iu;Rs=1;var e=X(),r=J(),a=x(),i=ar(),n=or(),u=Vm(),v=Km(),t=Qm(),o=Ym(),f=Jm(),l=.08913147449493408,s=2.249481201171875,$=.807220458984375,q=.9399557113647461,m=.9836282730102539;function _(c){var h,y,L,g,I;return e(c)?NaN:c===0?i:c===2?n:c===1?0:c>2||c<0?NaN:(c>1?(h=-1,L=2-c):(h=1,L=c),c=1-L,c<=.5?(g=c*(c+10),I=u(c),h*(g*l+g*I)):L>=.25?(g=r(-2*a(L)),L-=.25,I=v(L),h*(g/(s+I))):(L=r(-a(L)),L<3?(y=L-1.125,I=t(y),h*($*L+I*L)):L<6?(y=L-3,I=o(y),h*(q*L+I*L)):(y=L-6,I=f(y),h*(m*L+I*L))))}return iu=_,iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nu,bs;function e0(){if(bs)return nu;bs=1;var e=Zm();return nu=e,nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var tu,gs;function jm(){if(gs)return tu;gs=1;var e=X(),r=ha(),a=J(),i=hf(),n=6123233995736766e-32;function u(v){var t;return e(v)?NaN:v<-1||v>1?NaN:v>.5?2*r(a(.5-.5*v)):(t=i-r(v),t+=n,t+=i,t)}return tu=u,tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uu,Ls;function zm(){if(Ls)return uu;Ls=1;var e=jm();return uu=e,uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,Ns;function fu(){if(Ns)return vu;Ns=1;var e=1.4142135623730951;return vu=e,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ou,Is;function xm(){if(Is)return ou;Is=1;function e(r){return r===0?.16666666666666666:.16666666666666666+r*.16666666666666666}return ou=e,ou}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,Ms;function r$(){if(Ms)return lu;Ms=1;function e(r){return r===0?.058333333333333334:.058333333333333334+r*(.06666666666666667+r*.008333333333333333)}return lu=e,lu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su,As;function e$(){if(As)return su;As=1;function e(r){return r===0?.0251984126984127:.0251984126984127+r*(.026785714285714284+r*(.0017857142857142857+r*.0001984126984126984))}return su=e,su}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cu,Ps;function a$(){if(Ps)return cu;Ps=1;function e(r){return r===0?.012039792768959435:.012039792768959435+r*(.010559964726631394+r*(-.0011078042328042327+r*(.0003747795414462081+r*27557319223985893e-22)))}return cu=e,cu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u,Ss;function i$(){if(Ss)return _u;Ss=1;function e(r){return r===0?.003837005972422639:.003837005972422639+r*(.00610392115600449+r*(-.0016095979637646305+r*(.0005945867404200738+r*(-6270542728876062e-20+r*2505210838544172e-23))))}return _u=e,_u}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mu,Es;function n$(){if(Es)return mu;Es=1;function e(r){return r===0?.0032177478835464946:.0032177478835464946+r*(.0010898206731540065+r*(-.0012579159844784845+r*(.0006908420797309686+r*(-.00016376804137220805+r*(154012654012654e-19+r*16059043836821613e-26)))))}return mu=e,mu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $u,ws;function t$(){if(ws)return $u;ws=1;function e(r){return r===0?.001743826229834001:.001743826229834001+r*(3353097688001788e-20+r*(-.0007624513544032393+r*(.0006451304695145635+r*(-.000249472580470431+r*(49255746366361444e-21+r*(-39851014346715405e-22+r*7647163731819816e-28))))))}return $u=e,$u}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qu,Fs;function u$(){if(Fs)return qu;Fs=1;function e(r){return r===0?.0009647274732138864:.0009647274732138864+r*(-.0003110108632631878+r*(-.00036307660358786886+r*(.0005140660578834113+r*(-.00029133414466938067+r*(9086710793521991e-20+r*(-15303004486655377e-21+r*(10914179173496788e-22+r*28114572543455206e-31)))))))}return qu=e,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var du,Os;function v$(){if(Os)return du;Os=1;function e(r){return r===0?.0005422926281312969:.0005422926281312969+r*(-.0003694266780000966+r*(-.00010230378073700413+r*(.00035764655430568635+r*(-.00028690924218514614+r*(.00012645437628698076+r*(-33202652391372056e-21+r*(4890304529197534e-21+r*(-3123956959982987e-22+r*822063524662433e-32))))))))}return du=e,du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var hu,Ts;function f$(){if(Ts)return hu;Ts=1;var e=Sn(),r=Ar(),a=J(),i=Ir(),n=xm(),u=r$(),v=e$(),t=a$(),o=i$(),f=n$(),l=t$(),s=u$(),$=v$(),q=0,m=[1,0,0,0,0,0,0,0,0,0];function _(c,h){var y,L;return L=e(c/2,.5)*a(c*i)*(h-.5),y=1/c,m[1]=n(y),m[2]=u(y),m[3]=v(y),m[4]=t(y),m[5]=o(y),m[6]=f(y),m[7]=l(y),m[8]=s(y),m[9]=$(y),q+L*r(m,L*L)}return hu=_,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pu,Hs;function o$(){if(Hs)return pu;Hs=1;var e=Sn(),r=Ar(),a=J(),i=nr(),n=Ir(),u=[0,0,0,0,0,0,0];function v(t,o){var f,l,s,$,q,m,_,c;return c=e(t/2,.5)*a(t*n)*o,$=t+2,q=t+4,m=t+6,u[0]=1,u[1]=-(t+1)/(2*$),$*=t+2,u[2]=-t*(t+1)*(t+3)/(8*$*q),$*=t+2,u[3]=-t*(t+1)*(t+5)*((3*t+7)*t-2)/(48*$*q*m),$*=t+2,q*=t+4,u[4]=-t*(t+1)*(t+7)*(((((15*t+154)*t+465)*t+286)*t-336)*t+64)/(384*$*q*m*(t+8)),$*=t+2,u[5]=-t*(t+1)*(t+3)*(t+9)*((((((35*t+452)*t+1573)*t+600)*t-2020)*t+928)*t-128)/(1280*$*q*m*(t+8)*(t+10)),$*=t+2,q*=t+4,m*=t+6,u[6]=-t*(t+1)*(t+11)*(((((((((((945*t+31506)*t+425858)*t+2980236)*t+11266745)*t+20675018)*t+7747124)*t-22574632)*t-8565600)*t+18108416)*t-7099392)*t+884736)/(46080*$*q*m*(t+8)*(t+10)*(t+12)),_=a(t),s=i(_*c,1/t),l=s*s,f=r(u,l),f*=_,f/=s,-f}return pu=v,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var yu,Gs;function l$(){if(Gs)return yu;Gs=1;var e=e0(),r=Cr(),a=J(),i=nr(),n=Di(),u=fu();function v(t,o){var f,l,s,$,q,m,_;return t>1e20?-e(2*o)*u:(f=1/(t-.5),l=48/(f*f),s=((20700*f/l-98)*f-16)*f+96.36,$=((94.5/(l+s)-3)/l+1)*a(f*n)*t,_=i($*2*o,2/t),_>.05+f?(m=-e(2*o)*u,_=m*m,t<5&&(s+=.3*(t-4.5)*(m+.6)),s+=(((.05*$*m-5)*m-7)*m-2)*m+l,_=(((((.4*_+6.3)*_+36)*_+94.5)/s-_-3)/l+1)*m,_=r(f*_*_)):_=((1/(((t+6)/(t*_)-.089*$-.822)*(t+2)*3)+.5/(t+4))*_-1)*(t+1)/(t+2)+1/_,q=a(t*_),-q)}return yu=v,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ru,Cs;function s$(){if(Cs)return Ru;Cs=1;var e=e0(),r=pr(),a=Wr(),i=$6(),n=zm(),u=J(),v=Z(),t=Gn(),o=nr(),f=jr(),l=fu(),s=Ir(),$=f$(),q=o$(),m=l$(),_=268435456,c=1/3,h=106/3,y=.8549879733383485;function L(g,I,P){var M,S,A,b,d,p,R,N,T,E,H,F,O,w,V,G;if(d=0,I>P?(R=P,P=I,I=R,b=!0):b=!1,r(g)===g&&g<20)switch(S=a(1,h),r(g)){case 1:I===.5?d=0:d=-t(s*I)/f(s*I);break;case 2:d=(2*I-1)/u(2*I*P);break;case 4:p=4*I*P,A=u(p),O=4*t(n(A)/3)/A,w=u(O-4),d=I-.5<0?-w:w;break;case 6:if(I<1e-150)return(b?-1:1)*m(g,I);V=4*(I-I*I),G=o(V,c),F=6*(1+y*(1/G-1));do T=F*F,E=T*T,H=F*E,N=F,F=2*(8*V*H-270*T+2187)/(5*(4*V*E-216*F-243));while(v((F-N)/F)>S);F=u(F-g),d=I-.5<0?-F:F;break;default:g>_?d=e(2*I)*l:g<3?(M=.2742-g*.0242143,I>M?d=$(g,I):d=q(g,I)):(M=a(1,i(g/-.654)),I>M?d=m(g,I):d=q(g,I))}else g>_?d=-e(2*I)*l:g<3?(M=.2742-g*.0242143,I>M?d=$(g,I):d=q(g,I)):(M=a(1,i(g/-.654)),I>M?d=m(g,I):d=q(g,I));return b?-d:d}return Ru=L,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bu,ks;function c$(){if(ks)return bu;ks=1;var e=s$();function r(a,i,n){var u,v,t,o;return v=i/2,t=1-v,u=a*2,o=e(u,v,t),n&&(n.value=o*o/(u+o*o)),u/(u+o*o)}return bu=r,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gu,Ws;function _$(){if(Ws)return gu;Ws=1;var e=Ar(),r=e0(),a=J(),i=ir(),n=fu(),u=[0,0,0,0,0,0,0],v=[0,0,0,0];function t(o,f,l){var s,$,q,m,_,c,h;return s=r(2*l),s/=-a(o/2),v[0]=s,c=f-o,m=c*c,_=m*c,u[0]=-c*n/2,u[1]=(1-2*c)/8,u[2]=-(c*n/48),u[3]=-1/192,u[4]=-c*n/3840,u[5]=0,u[6]=0,v[1]=e(u,s),u[0]=c*n*(3*c-2)/12,u[1]=(20*m-12*c+1)/128,u[2]=c*n*(20*c-1)/960,u[3]=(16*m+30*c-15)/4608,u[4]=c*n*(21*c+32)/53760,u[5]=(-(32*m)+63)/368640,u[6]=-c*n*(120*c+17)/25804480,v[2]=e(u,s),u[0]=c*n*(-75*m+80*c-16)/480,u[1]=(-1080*_+868*m-90*c-45)/9216,u[2]=c*n*(-1190*m+84*c+373)/53760,u[3]=(-2240*_-2508*m+2100*c-165)/368640,u[4]=0,u[5]=0,u[6]=0,v[3]=e(u,s),q=e(v,1/o),$=q*q,h=-i(-$/2),$===0?.5:(1+q*a((1+h)/$))/2}return gu=t,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Lu,Bs;function Ds(){if(Bs)return Lu;Bs=1;var e=x(),r=Or(),a=r/4;function i(n,u){return v;function v(t){var o,f,l;return l=1-t,l===0?[-a,-a]:t===0?[-a,-a]:(f=e(t)+u*e(l)+n,o=1/t-u/l,[f,o])}}return Lu=i,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu,Us;function m$(){if(Us)return Nu;Us=1;var e=X();function r(a){return a===0||e(a)?a:a<0?-1:1}return Nu=r,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu,Xs;function $0(){if(Xs)return Iu;Xs=1;var e=m$();return Iu=e,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mu,Vs;function Ks(){if(Vs)return Mu;Vs=1;var e=$0(),r=Z(),a=Wr(),i=Or();function n(u,v,t,o,f,l){var s,$,q,m,_,c,h,y,L,g;L=0,s=0,_=v,m=a(1,1-f),h=i,$=i,q=i,c=l;do{if(s=L,q=$,$=h,y=u(_),L=y[0],g=y[1],c-=1,L===0)break;if(g===0?(s===0&&(_===t?v=o:v=t,s=u(v),h=v-_),e(s)*e(L)<0?h<0?h=(_-t)/2:h=(_-o)/2:h<0?h=(_-o)/2:h=(_-t)/2):h=L/g,r(h*2)>r(q)&&(h=h>0?(_-t)/2:(_-o)/2),v=_,_-=h,_<=t){if(h=.5*(v-t),_=v-h,_===t||_===o)break}else if(_>=o&&(h=.5*(v-o),_=v-h,_===t||_===o))break;h>0?o=v:t=v}while(c&&r(_*m)<r(h));return _}return Mu=n,Mu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Au,Qs;function $$(){if(Qs)return Au;Qs=1;function e(r){return r===0?-1:-1+r*(-5+r*5)}return Au=e,Au}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pu,Ys;function q$(){if(Ys)return Pu;Ys=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return Pu=e,Pu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Su,Js;function d$(){if(Js)return Su;Js=1;function e(r){return r===0?7:7+r*(-2+r*(33+r*(-62+r*31)))}return Su=e,Su}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu,Zs;function h$(){if(Zs)return Eu;Zs=1;function e(r){return r===0?25:25+r*(-52+r*(-17+r*(88+r*(-115+r*46))))}return Eu=e,Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wu,js;function p$(){if(js)return wu;js=1;function e(r){return r===0?7:7+r*(12+r*(-78+r*52))}return wu=e,wu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fu,zs;function y$(){if(zs)return Fu;zs=1;function e(r){return r===0?-7:-7+r*(2+r*(183+r*(-370+r*185)))}return Fu=e,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ou,xs;function R$(){if(xs)return Ou;xs=1;function e(r){return r===0?-533:-533+r*(776+r*(-1835+r*(10240+r*(-13525+r*5410))))}return Ou=e,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tu,r5;function b$(){if(r5)return Tu;r5=1;function e(r){return r===0?-1579:-1579+r*(3747+r*(-3372+r*(-15821+r*(45588+r*(-45213+r*15071)))))}return Tu=e,Tu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu,e5;function g$(){if(e5)return Hu;e5=1;function e(r){return r===0?449:449+r*(-1259+r*(-769+r*(6686+r*(-9260+r*3704))))}return Hu=e,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu,a5;function L$(){if(a5)return Gu;a5=1;function e(r){return r===0?63149:63149+r*(-151557+r*(140052+r*(-727469+r*(2239932+r*(-2251437+r*750479)))))}return Gu=e,Gu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cu,i5;function N$(){if(i5)return Cu;i5=1;function e(r){return r===0?29233:29233+r*(-78755+r*(105222+r*(146879+r*(-1602610+r*(3195183+r*(-2554139+r*729754))))))}return Cu=e,Cu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ku,n5;function I$(){if(n5)return ku;n5=1;function e(r){return r===0?1:1+r*(-13+r*13)}return ku=e,ku}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,t5;function M$(){if(t5)return Wu;t5=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return Wu=e,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bu,u5;function A$(){if(u5)return Bu;u5=1;var e=Ar(),r=e0(),a=Z(),i=ir(),n=x(),u=J(),v=jr(),t=Gn(),o=Ds(),f=Ks(),l=$$(),s=q$(),$=d$(),q=h$(),m=p$(),_=y$(),c=R$(),h=b$(),y=g$(),L=L$(),g=N$(),I=I$(),P=M$(),M=[0,0,0,0,0,0],S=[0,0,0,0];function A(b,d,p){var R,N,T,E,H,F,O,w,V,G,D,K,Y,C,W,k,tr,rr,U,Q;return H=r(2*b)/-u(d/2),rr=v(p),tr=t(p),S[0]=H,W=rr*rr,k=tr*tr,Y=rr*tr,K=Y*Y,D=K*Y,G=K*K,V=K*D,w=D*D,O=G*D,M[0]=(2*W-1)/(3*Y),M[1]=-l(W)/(36*K),M[2]=s(W)/(1620*D),M[3]=$(W)/(6480*G),M[4]=q(W)/(90720*V),M[5]=0,S[1]=e(M,H),M[0]=-m(W)/(405*D),M[1]=_(W)/(2592*G),M[2]=-c(W)/(204120*V),M[3]=-h(W)/(2099520*w),M[4]=0,M[5]=0,S[2]=e(M,H),M[0]=y(W)/(102060*V),M[1]=-L(W)/(20995200*w),M[2]=g(W)/(36741600*O),M[3]=0,M[4]=0,M[5]=0,S[3]=e(M,H),F=e(S,1/d),T=tr/rr,T*=T,C=-(F*F)/(2*W)+n(W)+k*n(k)/W,a(F)<.7?(M[0]=W,M[1]=Y,M[2]=(1-2*W)/3,M[3]=I(W)/(36*Y),M[4]=P(W)/(270*K),M[5]=0,Q=e(M,F)):(U=i(C),M[0]=U,M[1]=T,M[2]=0,M[3]=3*T*(3*T+1)/6,M[4]=4*T*(4*T+1)*(4*T+2)/24,M[5]=5*T*(5*T+1)*(5*T+2)*(5*T+3)/120,Q=e(M,U),(Q-W)*F<0&&(Q=1-Q)),F<0?(N=0,R=W):(N=W,R=1),(Q<N||Q>R)&&(Q=(N+R)/2),E=o(-C,T),Q=f(E,Q,N,R,32,100),Q}return Bu=A,Bu}var q0={exports:{}},d0={exports:{}},Du,v5;function P$(){if(v5)return Du;v5=1;var e=1e3,r=e*60,a=r*60,i=a*24,n=i*365.25;Du=function(f,l){l=l||{};var s=typeof f;if(s==="string"&&f.length>0)return u(f);if(s==="number"&&isNaN(f)===!1)return l.long?t(f):v(f);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(f))};function u(f){if(f=String(f),!(f.length>100)){var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(f);if(l){var s=parseFloat(l[1]),$=(l[2]||"ms").toLowerCase();switch($){case"years":case"year":case"yrs":case"yr":case"y":return s*n;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*a;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function v(f){return f>=i?Math.round(f/i)+"d":f>=a?Math.round(f/a)+"h":f>=r?Math.round(f/r)+"m":f>=e?Math.round(f/e)+"s":f+"ms"}function t(f){return o(f,i,"day")||o(f,a,"hour")||o(f,r,"minute")||o(f,e,"second")||f+" ms"}function o(f,l,s){if(!(f<l))return f<l*1.5?Math.floor(f/l)+" "+s:Math.ceil(f/l)+" "+s+"s"}return Du}var f5;function S$(){return f5||(f5=1,(function(e,r){r=e.exports=n.debug=n.default=n,r.coerce=o,r.disable=v,r.enable=u,r.enabled=t,r.humanize=P$(),r.names=[],r.skips=[],r.formatters={};var a;function i(f){var l=0,s;for(s in f)l=(l<<5)-l+f.charCodeAt(s),l|=0;return r.colors[Math.abs(l)%r.colors.length]}function n(f){function l(){if(l.enabled){var s=l,$=+new Date,q=$-(a||$);s.diff=q,s.prev=a,s.curr=$,a=$;for(var m=new Array(arguments.length),_=0;_<m.length;_++)m[_]=arguments[_];m[0]=r.coerce(m[0]),typeof m[0]!="string"&&m.unshift("%O");var c=0;m[0]=m[0].replace(/%([a-zA-Z%])/g,function(y,L){if(y==="%%")return y;c++;var g=r.formatters[L];if(typeof g=="function"){var I=m[c];y=g.call(s,I),m.splice(c,1),c--}return y}),r.formatArgs.call(s,m);var h=l.log||r.log||console.log.bind(console);h.apply(s,m)}}return l.namespace=f,l.enabled=r.enabled(f),l.useColors=r.useColors(),l.color=i(f),typeof r.init=="function"&&r.init(l),l}function u(f){r.save(f),r.names=[],r.skips=[];for(var l=(typeof f=="string"?f:"").split(/[\s,]+/),s=l.length,$=0;$<s;$++)l[$]&&(f=l[$].replace(/\*/g,".*?"),f[0]==="-"?r.skips.push(new RegExp("^"+f.substr(1)+"$")):r.names.push(new RegExp("^"+f+"$")))}function v(){r.enable("")}function t(f){var l,s;for(l=0,s=r.skips.length;l<s;l++)if(r.skips[l].test(f))return!1;for(l=0,s=r.names.length;l<s;l++)if(r.names[l].test(f))return!0;return!1}function o(f){return f instanceof Error?f.stack||f.message:f}})(d0,d0.exports)),d0.exports}var o5;function l5(){return o5||(o5=1,(function(e,r){var a={};r=e.exports=S$(),r.log=u,r.formatArgs=n,r.save=v,r.load=t,r.useColors=i,r.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:o(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function i(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}r.formatters.j=function(f){try{return JSON.stringify(f)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function n(f){var l=this.useColors;if(f[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+f[0]+(l?"%c ":" ")+"+"+r.humanize(this.diff),!!l){var s="color: "+this.color;f.splice(1,0,s,"color: inherit");var $=0,q=0;f[0].replace(/%[a-zA-Z%]/g,function(m){m!=="%%"&&($++,m==="%c"&&(q=$))}),f.splice(q,0,s)}}function u(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function v(f){try{f==null?r.storage.removeItem("debug"):r.storage.debug=f}catch{}}function t(){var f;try{f=r.storage.debug}catch{}return!f&&typeof process<"u"&&"env"in process&&(f=a.DEBUG),f}r.enable(t());function o(){try{return window.localStorage}catch{}}})(q0,q0.exports)),q0.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,s5;function h0(){if(s5)return Uu;s5=1;var e=34028234663852886e22;return Uu=e,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,c5;function E$(){if(c5)return Xu;c5=1;var e=l5(),r=Ml(),a=Z(),i=ir(),n=x(),u=h0(),v=e("gammaincinv:higher_newton");function t(o,f,l,s,$,q,m,_){var c,h,y,L,g,I,P,M,S,A,b,d,p,R;R=o,b=1,d=1,I=f*f,h=o;do{if(R=o,P=R*R,l===0){if(c=(1-f)*n(R)+R+q,c>n(u))return v("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),h;p=i(c)}else p=-m*R;_?(M=r(R,f,!0,!1),y=-p*(M-s)):(S=r(R,f,!0,!0),y=p*(S-$)),p=y,s>1e-120||d>1?(L=.5*(R-f+1)/R,g=(2*P-4*R*f+4*R+2*I-3*f+1)/P,g/=6,o=R+p*(1+p*(L+p*g))):o=R+p,b=a(R/o-1),d+=1,R=o,R<0&&(R=h,d=100)}while(b>2e-14&&d<35);return(b>2e-14||d>99)&&v("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),A=R||0,A}return Xu=t,Xu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vu,_5;function w$(){if(_5)return Vu;_5=1;function e(r){return r===0?0:0+r*(1+r*(1+r*(1.5+r*(2.6666666666666665+r*(5.208333333333333+r*10.8)))))}return Vu=e,Vu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,m5;function F$(){if(m5)return Ku;m5=1;function e(r){return r===0?1:1+r*(1+r*(.3333333333333333+r*(.027777777777777776+r*(-.003703703703703704+r*(.0002314814814814815+r*5878894767783657e-20)))))}return Ku=e,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,$5;function q5(){if($5)return Qu;$5=1;var e=Z(),r=ir(),a=x(),i=Ar(),n=w$(),u=F$(),v=1e-8,t=.08333333333333333,o=.008333333333333333,f=[1,0,0,0,0,0];function l(s){var $,q,m,_,c,h,y,L,g;if(g=s*s*.5,s===0?c=0:s<-1?(L=r(-1-g),c=n(L)):s<1?(L=s,c=u(L)):(L=11+g,h=a(L),c=L+h,L=1/L,$=h*h,q=$*h,m=q*h,_=m*h,f[1]=(2-h)*.5,f[2]=(-9*h+6+2*$)/6,f[3]=-(3*q+36*h-22*$-12)*t,f[4]=(60+350*$-300*h-125*q+12*m)/60,f[5]=-(-120-274*m+900*h-1700*$+1125*q+20*_)*o,c+=h*L*i(f,L)),L=1,s>-3.5&&s<-.03||s>.03&&s<40){L=1,y=c;do c=y*(g+a(y))/(y-1),L=e(y/c-1),y=c;while(L>v)}return c}return Qu=l,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yu,d5;function O$(){if(d5)return Yu;d5=1;var e=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function r(a,i){var n,u,v,t,o;u=0,v=0,n=i+i,o=a;do t=v,v=u,u=n*v-t+e[o],o-=1;while(o>=0);return(u-t)/2}return Yu=r,Yu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ju,h5;function T$(){if(h5)return Ju;h5=1;function e(r){return r===0?.025721014990011306:.025721014990011306+r*(.08247596616699963+r*(-.0025328157302663564+r*(.0006099292666946337+r*(-.00033543297638406+r*.000250505279903))))}return Ju=e,Ju}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,p5;function H$(){if(p5)return Zu;p5=1;function e(r){return r===0?.08333333333333333:.08333333333333333+r*(-.002777777777777778+r*(.0007936507936507937+r*-.0005952380952380953))}return Zu=e,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,y5;function G$(){if(y5)return ju;y5=1;var e=Ur(),r=x(),a=vs(),i=m0(),n=h0(),u=O$(),v=T$(),t=H$(),o=.30865217988013566;function f(l){var s;return l<i?n:l<1?e(l+1)-(l+.5)*r(l)+l-a:l<2?e(l)-(l-.5)*r(l)+l-a:l<3?e(l-1)-(l-.5)*r(l)+l-a+r(l-1):l<12?(s=18/(l*l)-1,u(17,s)/(12*l)):(s=1/(l*l),l<1e3?v(s)/(o+s)/l:t(s)/l)}return ju=f,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,R5;function C$(){if(R5)return zu;R5=1;var e=ir(),r=Rr(),a=x(),i=h0(),n=o0(),u=G$();function v(t){return t>=3?e(u(t)):t>0?r(t)/(e(-t+(t-.5)*a(t))*n):i}return zu=v,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu,b5;function k$(){if(b5)return xu;b5=1;function e(r){var a,i,n;return r===0?-.3333333333438:(r<0?a=-r:a=r,a<=1?(i=-.3333333333438+r*(-.2070740359969+r*(-.05041806657154+r*(-.004923635739372+r*-4293658292782e-17))),n=1+r*(.7045554412463+r*(.2118190062224+r*(.03048648397436+r*.001605037988091)))):(r=1/r,i=-4293658292782e-17+r*(-.004923635739372+r*(-.05041806657154+r*(-.2070740359969+r*-.3333333333438))),n=.001605037988091+r*(.03048648397436+r*(.2118190062224+r*(.7045554412463+r*1)))),i/n)}return xu=e,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rv,g5;function W$(){if(g5)return rv;g5=1;var e=Z(),r=x(),a=q5(),i=k$();function n(u){var v;return e(u)<1?i(u):(v=a(u),r(u/(v-1))/u)}return rv=n,rv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ev,L5;function B$(){if(L5)return ev;L5=1;function e(r){var a,i,n;return r===0?-.0172847633523:(r<0?a=-r:a=r,a<=1?(i=-.0172847633523+r*(-.0159372646475+r*(-.00464910887221+r*(-.00060683488776+r*-614830384279e-17))),n=1+r*(.764050615669+r*(.297143406325+r*(.0579490176079+r*.00574558524851)))):(r=1/r,i=-614830384279e-17+r*(-.00060683488776+r*(-.00464910887221+r*(-.0159372646475+r*-.0172847633523))),n=.00574558524851+r*(.0579490176079+r*(.297143406325+r*(.764050615669+r*1)))),i/n)}return ev=e,ev}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var av,N5;function D$(){if(N5)return av;N5=1;function e(r){var a,i,n;return r===0?-.0172839517431:(r<0?a=-r:a=r,a<=1?(i=-.0172839517431+r*(-.0146362417966+r*(-.00357406772616+r*(-.000391032032692+r*249634036069e-17))),n=1+r*(.690560400696+r*(.249962384741+r*(.0443843438769+r*.00424073217211)))):(r=1/r,i=249634036069e-17+r*(-.000391032032692+r*(-.00357406772616+r*(-.0146362417966+r*-.0172839517431))),n=.00424073217211+r*(.0443843438769+r*(.249962384741+r*(.690560400696+r*1)))),i/n)}return av=e,av}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iv,I5;function U$(){if(I5)return iv;I5=1;function e(r){var a,i,n;return r===0?.99994466948:(r<0?a=-r:a=r,a<=1?(i=.99994466948+r*(104.649839762+r*(857.204033806+r*(731.901559577+r*45.5174411671))),n=1+r*(104.526456943+r*(823.313447808+r*(3119.93802124+r*3970.03311219)))):(r=1/r,i=45.5174411671+r*(731.901559577+r*(857.204033806+r*(104.649839762+r*.99994466948))),n=3970.03311219+r*(3119.93802124+r*(823.313447808+r*(104.526456943+r*1)))),i/n)}return iv=e,iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nv,M5;function X$(){if(M5)return nv;M5=1;var e=x(),r=B$(),a=D$(),i=U$();function n(u){var v,t;return u<-5?(t=u*u,v=e(-u),(12-t-6*(v*v))/(12*t*u)):u<-2?r(u):u<2?a(u):u<1e3?(t=1/u,i(u)/(-12*u)):-1/(12*u)}return nv=n,nv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tv,A5;function V$(){if(A5)return tv;A5=1;function e(r){var a,i,n;return r===0?.0495346498136:(r<0?a=-r:a=r,a<=1?(i=.0495346498136+r*(.0299521337141+r*(.00688296911516+r*(.000512634846317+r*-201411722031e-16))),n=1+r*(.759803615283+r*(.261547111595+r*(.0464854522477+r*.00403751193496)))):(r=1/r,i=-201411722031e-16+r*(.000512634846317+r*(.00688296911516+r*(.0299521337141+r*.0495346498136))),n=.00403751193496+r*(.0464854522477+r*(.261547111595+r*(.759803615283+r*1)))),i/n)}return tv=e,tv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uv,P5;function K$(){if(P5)return uv;P5=1;function e(r){var a,i,n;return r===0?.00452313583942:(r<0?a=-r:a=r,a<=1?(i=.00452313583942+r*(.00120744920113+r*(-789724156582e-16+r*(-504476066942e-16+r*-535770949796e-17))),n=1+r*(.912203410349+r*(.405368773071+r*(.0901638932349+r*.00948935714996)))):(r=1/r,i=-535770949796e-17+r*(-504476066942e-16+r*(-789724156582e-16+r*(.00120744920113+r*.00452313583942))),n=.00948935714996+r*(.0901638932349+r*(.405368773071+r*(.912203410349+r*1)))),i/n)}return uv=e,uv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vv,S5;function Q$(){if(S5)return vv;S5=1;function e(r){var a,i,n;return r===0?.00439937562904:(r<0?a=-r:a=r,a<=1?(i=.00439937562904+r*(.000487225670639+r*(-.000128470657374+r*(529110969589e-17+r*15716677175e-17))),n=1+r*(.794435257415+r*(.333094721709+r*(.0703527806143+r*.00806110846078)))):(r=1/r,i=15716677175e-17+r*(529110969589e-17+r*(-.000128470657374+r*(.000487225670639+r*.00439937562904))),n=.00806110846078+r*(.0703527806143+r*(.333094721709+r*(.794435257415+r*1)))),i/n)}return vv=e,vv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fv,E5;function Y$(){if(E5)return fv;E5=1;function e(r){var a,i,n;return r===0?-.0011481191232:(r<0?a=-r:a=r,a<=1?(i=-.0011481191232+r*(-.112850923276+r*(1.51623048511+r*(-.218472031183+r*.0730002451555))),n=1+r*(14.2482206905+r*(69.7360396285+r*(218.938950816+r*277.067027185)))):(r=1/r,i=.0730002451555+r*(-.218472031183+r*(1.51623048511+r*(-.112850923276+r*-.0011481191232))),n=277.067027185+r*(218.938950816+r*(69.7360396285+r*(14.2482206905+r*1)))),i/n)}return fv=e,fv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ov,w5;function J$(){if(w5)return ov;w5=1;function e(r){var a,i,n;return r===0?-.000145727889667:(r<0?a=-r:a=r,a<=1?(i=-.000145727889667+r*(-.290806748131+r*(-13.308504545+r*(199.722374056+r*-11.4311378756))),n=1+r*(139.612587808+r*(2189.01116348+r*(7115.24019009+r*45574.6081453)))):(r=1/r,i=-11.4311378756+r*(199.722374056+r*(-13.308504545+r*(-.290806748131+r*-.000145727889667))),n=45574.6081453+r*(7115.24019009+r*(2189.01116348+r*(139.612587808+r*1)))),i/n)}return ov=e,ov}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lv,F5;function Z$(){if(F5)return lv;F5=1;var e=x(),r=V$(),a=K$(),i=Q$(),n=Y$(),u=J$();function v(t){var o,f;return t<-8?(o=t*t,f=e(-t)/t,(-30+t*f*(6*o*f*f-12+o))/(12*t*o*o)):t<-4?r(t)/(t*t):t<-2?a(t):t<2?i(t):t<10?(o=1/t,n(o)/(t*t)):t<100?(o=1/t,u(o)/(t*t)):-e(t)/(12*t*t*t)}return lv=v,lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sv,O5;function j$(){if(O5)return sv;O5=1;var e=l5(),r=Ar(),a=Ur(),i=e0(),n=Rr(),u=J(),v=Z(),t=ir(),o=Nr(),f=nr(),l=x(),s=o0(),$=h0(),q=c0(),m=E$(),_=q5(),c=C$(),h=W$(),y=X$(),L=Z$(),g=e("gammaincinv:compute"),I=.5,P=.3333333333333333,M=.25,S=.2,A=.16666666666666666,b=.08333333333333333,d=.041666666666666664,p=[0,0,0,0,0];function R(N,T,E){var H,F,O,w,V,G,D,K,Y,C,W,k,tr,rr,U,Q,ur,er,Kr,dr,j,gr,lr,Pr,i0,B,z,m2,z7,x7,$2,q2,d2,h2,r8,sr,vr,p2,cr,Lr,hr,y2,R2,b2;if(T<I?(w=!0,V=T,y2=-1):(w=!1,V=E,y2=1),cr=0,v(N-1)<1e-4&&(Lr=0,w?T<.001?(q2=T*T,m2=q2*T,$2=m2*T,dr=$2*T,Kr=dr*T,j=T+q2*I+m2*P+$2*M+dr*S+Kr*A):j=-l(1-T):j=-l(E),N===1?(cr=2,h2=j):(O=a(N),cr=1)),E<1e-30&&N<I&&(Lr=0,j=-l(E*n(N))+(N-1)*l(-l(E*n(N))),cr=1,O=a(N)),N>1&&N<500&&T<1e-80){for(Lr=0,G=1/N,H=1/(N+1),j=(a(N+1)+l(T))*G,j=t(j),rr=j,p2=0;p2<10;p2++)j=rr*t(j*G)*f(1-j*H,G);cr=1,O=a(N)}if(D=1/N*(l(T)+a(N+1)),D<l(S*(1+N))&&cr===0&&(hr=t(D),Lr=0,gr=N*N,d2=gr*N,z7=d2*N,U=N+1,W=U*U,C=U*W,Y=W*W,Q=N+2,K=Q*Q,ur=N+3,p[0]=1,p[1]=1/U,p[2]=I*(3*N+5)/(W*Q),p[3]=P*(31+8*gr+33*N)/(C*Q*ur),p[4]=d*(2888+1179*d2+125*z7+3971*gr+5661*N)/(Y*K*ur*(N+4)),j=hr*r(p,hr),O=a(N),cr=1),N<10&&cr===0&&(k=u(N)/(c(N)*s),tr=o(.02,k),E<tr&&(Lr=0,sr=1-N,B=sr*sr,z=B*sr,er=u(-2/N*l(E/k)),j=N*_(er),vr=l(j),j>5?(lr=vr*vr,Pr=lr*vr,i0=Pr*vr,hr=1/j,p[0]=vr-1,p[1]=(3*sr-2*sr*vr+lr-2*vr+2)*I,p[2]=(24*sr*vr-11*B-24*sr-6*lr+12*vr-12-9*sr*lr+6*B*vr+2*Pr)*A,p[3]=(-12*z*vr+8.04*sr*lr-114*B*vr+(72+36*lr)+(3*i0-72*vr+162)*(sr-168*sr*vr)-(12*Pr+25*z)-(22*sr*Pr+36*B*lr+120*B))*b,p[4]=0,j=j-vr+sr*hr*r(p,hr)):(hr=1/j,lr=vr*vr,r8=vr-1,R2=vr-sr*hr*r8,R2<j&&(j-=R2)),O=a(N),cr=1)),v(V-I)<1e-5&&cr===0&&(Lr=0,G=1/N,j=N-P+(.019753086419753086+.007211444248481286*G)*G,O=a(N),cr=1),N<1&&cr===0&&(Lr=0,w?j=t(1/N*(l(V)+a(N+1))):j=t(1/N*(l(1-V)+a(N+1))),O=a(N),cr=1),cr===0)if(Lr=1,G=1/N,hr=i(2*V),er=y2*hr/u(N*I),hr<$)er+=(h(er)+(y(er)+L(er)*G)*G)*G,j=N*_(er),b2=er,x7=-u(N/q)*t(-I*N*b2*b2)/c(N),F=1/x7;else return g("Warning: Overflow problems in one or more steps of the computation."),NaN;return cr<2&&(h2=m(j,N,Lr,T,E,O,F,w)),h2}return sv=R,sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cv,T5;function z$(){if(T5)return cv;T5=1;var e=X(),r=m0(),a=ar(),i=j$();function n(u,v,t){return e(u)||e(v)?NaN:v<r?NaN:u>1||u<0?NaN:t===!0?u===0?a:u===1?0:i(v,1-u,u):u===0?0:u===1?a:i(v,u,1-u)}return cv=n,cv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _v,H5;function x$(){if(H5)return _v;H5=1;var e=z$();return _v=e,_v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv,G5;function rq(){if(G5)return mv;G5=1;var e=5e-324;return mv=e,mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $v,C5;function eq(){if(C5)return $v;C5=1;var e=x$(),r=x(),a=J(),i=rq(),n=Ds(),u=Ks();function v(t,o,f,l){var s,$,q,m,_,c,h,y,L,g,I,P,M,S,A,b,d,p,R,N,T,E,H,F,O,w,V,G,D,K;return f<l?_=e(f,o,!0):_=e(l,o,!1),_/=t,S=o/t,G=a(1+S),p=G*G,R=p*G,N=p*p,T=R*p,E=R*R,H=N*R,F=N*N,O=T*N,h=T*T,V=_-S,A=V*V,b=A*V,d=A*A,w=G+1,y=w*w,L=w*y,g=y*y,I=(G+2)*(G-1)/(3*G),I+=(R+9*p+21*G+5)*V/(36*p*w),I-=(N-13*R+69*p+167*G+46)*A/(1620*y*R),I-=(7*T+21*N+70*R+26*p-93*G-31)*b/(6480*L*N),I-=(75*E+202*T+188*N-888*R-1345*p+118*G+138)*d/(272160*g*T),P=(28*N+131*R+402*p+581*G+208)*(G-1)/(1620*w*R),P-=(35*E-154*T-623*N-1636*R-3983*p-3514*G-925)*V/(12960*y*N),P-=(2132*H+7915*E+16821*T+35066*N+87490*R+141183*p+95993*G+21640)*A/(816480*T*L),P-=(11053*F+53308*H+117010*E+163924*T+116188*N-258428*R-677042*p-481940*G-105497)*b/(14696640*g*E),M=-((3592*H+8375*E-1323*T-29198*N-89578*R-154413*p-116063*G-29632)*(G-1))/(816480*T*y),M-=(442043*O+2054169*F+3803094*H+3470754*E+2141568*T-2393568*N-19904934*R-34714674*p-23128299*G-5253353)*V/(146966400*E*L),M-=(116932*h+819281*O+2378172*F+4341330*H+6806004*E+10622748*T+18739500*N+30651894*R+30869976*p+15431867*G+2919016)*A/(146966400*g*H),c=_+I/t+P/(t*t)+M/(t*t*t),c<=0&&(c=i),D=c-S*r(c)+(1+S)*r(1+S)-S,s=1/(1+S),q=c<S?s:0,m=c<S?1:s,K=(q+m)/2,$=n(D,S),u($,K,q,m,32,100)}return $v=v,$v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qv,k5;function aq(){if(k5)return qv;k5=1;var e=Z(),r=Wr(),a=$0(),i=Fr(),n=Or();function u(v,t,o,f,l,s){var $,q,m,_,c,h,y,L,g,I,P,M,S,A,b,d;A=0,q=!1,h=t,c=r(1,1-l),g=i(1e7*t,1e7),y=0,m=g,_=g,L=s;do{if(y=A,_=m,m=g,S=v(h),A=S[0],b=S[1],d=S[2],L-=1,A===0)break;if(b===0?(y===0&&(h===o?t=f:t=o,y=v(t),g=t-h),a(y)*a(A)<0?g<0?g=(h-o)/2:g=(h-f)/2:g<0?g=(h-f)/2:g=(h-o)/2):d===0?g=A/b:(I=2*A,M=2*b-A*(d/b),e(M)<1&&e(I)>=e(M)*n?g=A/b:g=I/M,g*b/A<0&&(g=A/b,e(g)>2*e(t)&&(g=(g<0?-1:1)*2*e(t)))),$=e(g/_),$>.8&&$<2&&(g=g>0?(h-o)/2:(h-f)/2,e(g)>h&&(g=a(g)*h),_=g*3),t=h,h-=g,h<o){if(e(o)<1&&e(h)>1&&n/e(h)<e(o)?P=1e3:P=h/o,e(P)<1&&(P=1/P),!q&&P>0&&P<3)g=.99*(t-o),h=t-g,q=!0;else if(g=(t-o)/2,h=t-g,h===o||h===f)break}else if(h>f){if(e(f)<1&&e(h)>1&&n/e(h)<e(f)?P=1e3:P=h/f,e(P)<1&&(P=1/P),!q&&P>0&&P<3)g=.99*(t-f),h=t-g,q=!0;else if(g=(t-f)/2,h=t-g,h===o||h===f)break}g>0?f=t:o=t}while(L&&e(h*c)<e(g));return h}return qv=u,qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dv,W5;function iq(){if(W5)return dv;W5=1;var e=zl().assign,r=Z(),a=Or(),i=wr();function n(u,v,t,o){return f;function f(l){var s,$,q,m,_;return _=1-l,s=[0,0],e(l,u,v,!0,o,s,1,0),m=s[0]-t,$=s[1],o&&($=-$),_===0&&(_=i*64),l===0&&(l=i*64),q=$*(-(_*u)+(v-2)*l+1),r(q)<_*l*a&&(q/=_*l),o&&(q=-q),$===0&&($=(o?-1:1)*i*64),[m,$,q]}}return dv=n,dv}var hv,B5;function nq(){if(B5)return hv;B5=1;var e=Ar(),r=r0(),a=Cr(),i=mr(),n=ha(),u=f0(),v=J(),t=Z(),o=ir(),f=nr(),l=jr(),s=Fr(),$=Nr(),q=x(),m=wr(),_=Di(),c=yr(),h=c$(),y=_$(),L=A$(),g=eq(),I=aq(),P=iq(),M=32,S=1e3,A=[0,0,0,0,0];function b(d,p,R,N){var T,E,H,F,O,w,V,G,D,K,Y,C,W,k,tr,rr,U,Q,ur,er,Kr,dr,j,gr,lr,Pr,i0,B,z;if(E=!1,N===0)return[1,0];if(R===0)return[0,1];if(d===1){if(p===1)return[R,1-R];C=p,p=d,d=C,C=N,N=R,R=C,E=!0}if(B=0,F=0,w=1,d===.5){if(p===.5)return B=l(R*_),B*=B,z=l(N*_),z*=z,[B,z];p>.5&&(C=p,p=d,d=C,C=N,N=R,R=C,E=!E)}if(p===.5&&d>=.5&&R!==1)Kr={},B=h(d,R,Kr),z=Kr.value;else{if(p===1)return R<N?d>1?(B=f(R,1/d),z=-a(q(R)/d)):(B=f(R,1/d),z=1-B):(B=o(i(-N)/d),z=-a(i(-N)/d)),E&&(C=z,z=B,B=C),[B,z];if(d+p>5)R>.5&&(C=p,p=d,d=C,C=N,N=R,R=C,E=!E),D=$(d,p),G=s(d,p),v(D)>G-D&&D>5?(B=y(d,p,R),z=1-B):(lr=d+p,O=n(v(d/lr)),H=D/lr,H>=.2&&H<=.8&&lr>=10?(Y=f(R,1/d),Y<.0025&&d+p<200?B=Y*f(d*u(d,p),1/d):B=L(R,lr,O),z=1-B):(d<p&&(C=p,p=d,d=C,C=N,N=R,R=C,E=!E),K=0,p<2&&(K=u(d,p)),K===0?z=1:(z=f(p*N*K,1/p),B=1-z)),z>1e-5&&(B=g(d,p,R,N),z=1-B));else if(d<1&&p<1){if(er=(1-d)/(2-d-p),rr=r(er,d,p)-R,t(rr)/R<c*3)return E?[1-er,er]:[er,1-er];rr<0&&(C=p,p=d,d=C,C=N,N=R,R=C,E=!E,er=1-er),ur=f(d*R*u(d,p),1/d),B=ur/(1+ur),z=1/(1+ur),B>er&&(B=er),w=er}else d>1&&p>1?(er=(d-1)/(d+p-2),W=(p-1)/(d+p-2),Q=r(er,d,p)-R,Q<0&&(C=p,p=d,d=C,C=N,N=R,R=C,C=W,W=er,er=C,E=!E),U=q(R*d*u(d,p))/d,B=o(U),z=B<.9?1-B:-a(U),p<d&&B<.2&&(k=d-1,tr=p-1,dr=d*d,j=d*dr,gr=p*p,A[0]=0,A[1]=1,A[2]=tr/k,k*=k,A[3]=tr*(3*d*p+5*p+dr-d-4)/(2*(d+2)*k),k*=d+1,A[4]=tr*(33*d*gr+31*gr+8*dr*gr-30*d*p-47*p+11*dr*p+6*j*p+18+4*d-j+dr*dr-10*dr),A[4]/=3*(d+3)*(d+2)*k,B=e(A,B)),B>er&&(B=er),w=er):(p<d&&(C=p,p=d,d=C,C=N,N=R,R=C,E=!E),f(R,1/d)<.5?(B=f(R*d*u(d,p),1/d),B===0&&(B=m),z=1-B):(z=f(1-f(R,p*u(d,p)),1/p),z===0&&(z=m),B=1-z))}return B>.5&&(C=p,p=d,d=C,C=N,N=R,R=C,C=z,z=B,B=C,E=!E,Pr=1-w,i0=1-F,F=Pr,w=i0),F===0&&(E?(F=c,B<F&&(B=F)):F=m,B<F&&(B=F)),T=M,B<1e-50&&(d<1||p<1)&&(T*=3,T/=2),V=P(d,p,R<N?R:N,R>=N),B=I(V,B,F,w,T,S),B===F&&(B=0),E?[1-B,B]:[B,1-B]}return hv=b,hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pv,D5;function yv(){if(D5)return pv;D5=1;var e=nq();return pv=e,pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rv,U5;function tq(){if(U5)return Rv;U5=1;var e=X(),r=yv();function a(i,n,u,v){return e(i)||e(n)||e(u)?NaN:n<=0||u<=0?NaN:i<0||i>1?NaN:v?r(n,u,1-i,i)[0]:r(n,u,i,1-i)[0]}return Rv=a,Rv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bv,X5;function V5(){if(X5)return bv;X5=1;var e=tq();return bv=e,bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gv,K5;function uq(){if(K5)return gv;K5=1;var e=V5(),r=X();function a(i,n,u){return r(i)||r(n)||r(u)||n<=0||u<=0||i<0||i>1?NaN:e(i,n,u)}return gv=a,gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv,Q5;function vq(){if(Q5)return Lv;Q5=1;var e=$r(),r=V5(),a=X();function i(n,u){if(a(n)||a(u)||n<=0||u<=0)return e(NaN);return v;function v(t){return a(t)||t<0||t>1?NaN:r(t,n,u)}}return Lv=i,Lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nv,Y5;function fq(){if(Y5)return Nv;Y5=1;var e=fr(),r=uq(),a=vq();return e(r,"factory",a),Nv=r,Nv}var oq=fq(),lq=br(oq);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv,J5;function sq(){if(J5)return Iv;J5=1;var e=s0(),r=J(),a=X();function i(n,u,v){var t,o;return a(n)||a(u)||a(v)||v<0?NaN:v===0?n<u?0:1:(t=v*r(2),o=n-u,.5*e(-o/t))}return Iv=i,Iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mv,Z5;function cq(){if(Z5)return Mv;Z5=1;var e=X();function r(a,i){return e(a)||e(i)?NaN:a<i?0:1}return Mv=r,Mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av,j5;function _q(){if(j5)return Av;j5=1;var e=$r(),r=X();function a(i){if(r(i))return e(NaN);return n;function n(u){return r(u)?NaN:u<i?0:1}}return Av=a,Av}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv,z5;function mq(){if(z5)return Pv;z5=1;var e=fr(),r=cq(),a=_q();return e(r,"factory",a),Pv=r,Pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv,x5;function $q(){if(x5)return Sv;x5=1;var e=$r(),r=mq().factory,a=X(),i=J(),n=s0();function u(v,t){var o;if(a(v)||a(t)||t<0)return e(NaN);if(t===0)return r(v);return o=t*i(2),f;function f(l){var s;return a(l)?NaN:(s=l-v,.5*n(-s/o))}}return Sv=u,Sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ev,r7;function qq(){if(r7)return Ev;r7=1;var e=fr(),r=sq(),a=$q();return e(r,"factory",a),Ev=r,Ev}var dq=qq(),e7=br(dq);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wv,a7;function hq(){if(a7)return wv;a7=1;var e=ir(),r=nr(),a=J(),i=c0(),n=ar(),u=X();function v(t,o,f){var l,s,$;return u(t)||u(o)||u(f)||f<0?NaN:f===0?t===o?n:0:(l=r(f,2),s=1/a(l*i),$=-1/(2*l),s*e($*r(t-o,2)))}return wv=v,wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv,i7;function pq(){if(i7)return Fv;i7=1;var e=ar(),r=X();function a(i,n){return r(i)||r(n)?NaN:i===n?e:0}return Fv=a,Fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ov,n7;function yq(){if(n7)return Ov;n7=1;var e=$r(),r=ar(),a=X();function i(n){if(a(n))return e(NaN);return u;function u(v){return a(v)?NaN:v===n?r:0}}return Ov=i,Ov}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv,t7;function Rq(){if(t7)return Tv;t7=1;var e=fr(),r=pq(),a=yq();return e(r,"factory",a),Tv=r,Tv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv,u7;function bq(){if(u7)return Hv;u7=1;var e=$r(),r=Rq().factory,a=X(),i=J(),n=ir(),u=nr(),v=c0();function t(o,f){var l,s,$;if(a(o)||a(f)||f<0)return e(NaN);if(f===0)return r(o);return l=u(f,2),s=1/i(l*v),$=-1/(2*l),q;function q(m){return a(m)?NaN:s*n($*u(m-o,2))}}return Hv=t,Hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv,v7;function gq(){if(v7)return Gv;v7=1;var e=fr(),r=hq(),a=bq();return e(r,"factory",a),Gv=r,Gv}var Lq=gq(),f7=br(Lq);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cv,o7;function Nq(){if(o7)return Cv;o7=1;function e(r){var a,i,n;return r===0?-.0005087819496582806:(r<0?a=-r:a=r,a<=1?(i=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),n=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,i=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),n=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),i/n)}return Cv=e,Cv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kv,l7;function Iq(){if(l7)return kv;l7=1;function e(r){var a,i,n;return r===0?-.20243350835593876:(r<0?a=-r:a=r,a<=1?(i=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),n=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,i=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),n=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),i/n)}return kv=e,kv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv,s7;function Mq(){if(s7)return Wv;s7=1;function e(r){var a,i,n;return r===0?-.1311027816799519:(r<0?a=-r:a=r,a<=1?(i=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,i=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),i/n)}return Wv=e,Wv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv,c7;function Aq(){if(c7)return Bv;c7=1;function e(r){var a,i,n;return r===0?-.0350353787183178:(r<0?a=-r:a=r,a<=1?(i=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,i=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),i/n)}return Bv=e,Bv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv,_7;function Pq(){if(_7)return Dv;_7=1;function e(r){var a,i,n;return r===0?-.016743100507663373:(r<0?a=-r:a=r,a<=1?(i=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,i=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),n=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),i/n)}return Dv=e,Dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Uv,m7;function Sq(){if(m7)return Uv;m7=1;var e=X(),r=J(),a=x(),i=ar(),n=or(),u=Nq(),v=Iq(),t=Mq(),o=Aq(),f=Pq(),l=.08913147449493408,s=2.249481201171875,$=.807220458984375,q=.9399557113647461,m=.9836282730102539;function _(c){var h,y,L,g,I,P;return e(c)?NaN:c===1?i:c===-1?n:c===0?c:c>1||c<-1?NaN:(c<0?(h=-1,y=-c):(h=1,y=c),g=1-y,y<=.5?(I=y*(y+10),P=u(y),h*(I*l+I*P)):g>=.25?(I=r(-2*a(g)),g-=.25,P=v(g),h*(I/(s+P))):(g=r(-a(g)),g<3?(L=g-1.125,P=t(L),h*($*g+P*g)):g<6?(L=g-3,P=o(L),h*(q*g+P*g)):(L=g-6,P=f(L),h*(m*g+P*g))))}return Uv=_,Uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv,$7;function q7(){if($7)return Xv;$7=1;var e=Sq();return Xv=e,Xv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv,d7;function Eq(){if(d7)return Vv;d7=1;var e=q7(),r=X(),a=J();function i(n,u,v){var t,o;return r(u)||r(v)||r(n)||v<0||n<0||n>1?NaN:v===0?u:(t=u,o=v*a(2),t+o*e(2*n-1))}return Vv=i,Vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kv,h7;function wq(){if(h7)return Kv;h7=1;var e=X();function r(a,i){return e(a)||a<0||a>1?NaN:i}return Kv=r,Kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qv,p7;function Fq(){if(p7)return Qv;p7=1;var e=$r(),r=X();function a(i){if(r(i))return e(NaN);return n;function n(u){return r(u)||u<0||u>1?NaN:i}}return Qv=a,Qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yv,y7;function Oq(){if(y7)return Yv;y7=1;var e=fr(),r=wq(),a=Fq();return e(r,"factory",a),Yv=r,Yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jv,R7;function Tq(){if(R7)return Jv;R7=1;var e=$r(),r=Oq().factory,a=q7(),i=X(),n=J();function u(v,t){var o,f;if(i(v)||i(t)||t<0)return e(NaN);return t===0&&r(v),o=v,f=t*n(2),l;function l(s){return i(s)||s<0||s>1?NaN:o+f*a(2*s-1)}}return Jv=u,Jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zv,b7;function Hq(){if(b7)return Zv;b7=1;var e=fr(),r=Eq(),a=Tq();return e(r,"factory",a),Zv=r,Zv}var Gq=Hq(),Cq=br(Gq);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jv,g7;function kq(){if(g7)return jv;g7=1;var e=r0(),r=X(),a=nr();function i(n,u){var v,t,o;return r(n)||r(u)||u<=0?NaN:n===0?.5:(v=a(n,2),u>2*v?(o=v/(u+v),t=e(o,.5,u/2,!0,!0)/2):(o=u/(u+v),t=e(o,u/2,.5,!0,!1)/2),n>0?1-t:t)}return jv=i,jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv,L7;function Wq(){if(L7)return zv;L7=1;var e=$r(),r=r0(),a=X(),i=nr();function n(u){if(a(u)||u<=0)return e(NaN);return v;function v(t){var o,f,l;return a(t)?NaN:t===0?.5:(o=i(t,2),u>2*o?(l=o/(u+o),f=r(l,.5,u/2,!0,!0)/2):(l=u/(u+o),f=r(l,u/2,.5,!0,!1)/2),t>0?1-f:f)}}return zv=n,zv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xv,N7;function Bq(){if(N7)return xv;N7=1;var e=fr(),r=kq(),a=Wq();return e(r,"factory",a),xv=r,xv}var Dq=Bq(),I7=br(Dq);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r2,M7;function Uq(){if(M7)return r2;M7=1;var e=X(),r=f0(),a=J(),i=nr();function n(u,v){var t;return e(u)||e(v)||v<=0?NaN:(t=a(v)*r(v/2,.5),i(v/(v+i(u,2)),(1+v)/2)/t)}return r2=n,r2}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e2,A7;function Xq(){if(A7)return e2;A7=1;var e=$r(),r=X(),a=f0(),i=J(),n=nr();function u(v){var t,o;if(r(v)||v<=0)return e(NaN);return o=i(v)*a(v/2,.5),t=(1+v)/2,f;function f(l){return r(l)?NaN:n(v/(v+n(l,2)),t)/o}}return e2=u,e2}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a2,P7;function Vq(){if(P7)return a2;P7=1;var e=fr(),r=Uq(),a=Xq();return e(r,"factory",a),a2=r,a2}var Kq=Vq(),i2=br(Kq);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n2,S7;function Qq(){if(S7)return n2;S7=1;var e=yv(),r=X(),a=$0(),i=J();function n(u,v){var t,o;return r(v)||r(u)||v<=0||u<0||u>1?NaN:(t=u>.5?1-u:u,o=e(v/2,.5,2*t,1-2*t),a(u-.5)*i(v*o[1]/o[0]))}return n2=n,n2}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t2,E7;function Yq(){if(E7)return t2;E7=1;var e=$r(),r=yv(),a=X(),i=$0(),n=J();function u(v){if(a(v)||v<=0)return e(NaN);return t;function t(o){var f,l;return a(o)||o<0||o>1?NaN:(f=o>.5?1-o:o,l=r(v/2,.5,2*f,1-2*f),i(o-.5)*n(v*l[1]/l[0]))}}return t2=u,t2}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u2,w7;function Jq(){if(w7)return u2;w7=1;var e=fr(),r=Qq(),a=Yq();return e(r,"factory",a),u2=r,u2}var Zq=Jq(),jq=br(Zq);const F7=1e-9,zq=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,xq=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function rd(e){const[r,a,i]=e;return r<i?r<=a&&a<=i?null:`requires lo <= peak <= hi, got lo=${r}, peak=${a}, hi=${i}`:`requires lo < hi, got lo=${r}, hi=${i}`}function ed(e){const[r,a]=e;return r<a?null:`requires lo < hi, got lo=${r}, hi=${a}`}function ad(e){const[r,a]=e;return r>0&&a>0?null:`requires a > 0 and b > 0, got a=${r}, b=${a}`}function O7(e){const r=e[1];return r>0?null:`requires sigma > 0, got sigma=${r}`}function id(e){const[r,a]=e;return 0<r&&r<a?null:`requires 0 < lo < hi, got lo=${r}, hi=${a}`}function T7(e){const[,r,a]=e;return r<=0?`requires sigma > 0, got sigma=${r}`:a<=0?`requires df > 0, got df=${a}`:null}function H7(e,r){const a=r-e;return{cdf:i=>i<=e?0:i>=r?1:(i-e)/a,ppf:i=>e+i*a,pdf:i=>i>=e&&i<=r?1/a:0}}function nd(e,r,a){const i=a-e,n=(r-e)/i;return{cdf:u=>u<=e?0:u>=a?1:u<=r?(u-e)*(u-e)/(i*(r-e)):1-(a-u)*(a-u)/(i*(a-r)),ppf:u=>u<n?e+Math.sqrt(u*i*(r-e)):a-Math.sqrt((1-u)*i*(a-r)),pdf:u=>u<e||u>a?0:u===r?2/i:u<r?2*(u-e)/(i*(r-e)):2*(a-u)/(i*(a-r))}}function G7(e,r){return{cdf:a=>e7(a,e,r),ppf:a=>Cq(a,e,r),pdf:a=>f7(a,e,r)}}function v2(e,r,a){return{cdf:i=>I7((i-e)/r,a),ppf:i=>e+r*jq(i,a),pdf:i=>i2((i-e)/r,a)/r}}function td(e,r){return{cdf:a=>U1(a,e,r),ppf:a=>lq(a,e,r),pdf:a=>Xm(a,e,r)}}const ud=1e-10,vd=20,fd=1e-300,C7=24,od=60,ld=.001;function f2(e,r,a,i,n){return(r-e)/6*(a+4*i+n)}function o2(e,r,a,i,n,u,v,t){const o=(r+a)/2,f=(r+o)/2,l=(o+a)/2,s=e(f),$=e(l),q=f2(r,o,i,s,n),m=f2(o,a,n,$,u),_=q+m,c=ud*Math.max(Math.abs(_),fd);return t>=vd||Math.abs(_-v)<=15*c?_+(_-v)/15:o2(e,r,o,i,s,n,q,t+1)+o2(e,o,a,n,$,u,m,t+1)}function sd(e,r,a){if(!(a>r))return 0;const i=(r+a)/2,n=e(r),u=e(i),v=e(a);return o2(e,r,a,n,u,v,f2(r,a,n,u,v),0)}const cd=(()=>{const e=[0];for(let r=C7;r>=1;r--)e.push(.5*2**-r);for(let r=C7;r>=0;r--)e.push(1-.5*2**-r);return e})();function _d(e){return k7(e,cd)}function k7(e,r){let a=0;for(let i=0;i<r.length-1;i++)a+=sd(e,r[i],r[i+1]);return a}function md(e,r,a,i){const n=[r];for(let u=i;u>=1;u--){const v=a*2**-u;v>r&&n.push(v)}return n.push(a),k7(e,n)}function $d(e,r,a){const i=a0(e,r),n=a0(e,a)-i;return n>0?n*_d(u=>Math.min(Math.max(e.ppf(i+u*n),r),a)):0}function W7(e,r,a,i){return i>a?e*(i**3-a**3)/3+r*(i**2-a**2)/2:0}function qd(e,r,a){const[i,n]=e,u=Math.max(i,r),v=Math.min(n,a);return v>u?(v*v-u*u)/(2*(n-i)):0}function dd(e,r,a){const[i,n,u]=e,v=u-i,t=n-i,o=u-n;let f=0;if(t>0){const l=2/(v*t);f+=W7(l,-i*l,Math.max(i,r),Math.min(n,a))}if(o>0){const l=2/(v*o);f+=W7(-l,u*l,Math.max(n,r),Math.min(u,a))}return f}function hd(e,r,a){const[i,n]=e,u=Math.min(Math.max(r,0),1),v=Math.min(Math.max(a,0),1);return v>u?i/(i+n)*(U1(v,i+1,n)-U1(u,i+1,n)):0}function B7(e){return Number.isFinite(e)?f7(e,0,1):0}function p0(e){return e===-1/0?0:e===1/0?1:e7(e,0,1)}function pd(e,r,a){const[i,n]=e,u=(r-i)/n,v=(a-i)/n;return i*(p0(v)-p0(u))-n*(B7(v)-B7(u))}function yd(e,r,a){const[i,n]=e,u=v=>Number.isFinite(v)?(v-i)/n-n:v;return Math.exp(i+n*n/2)*(p0(u(a))-p0(u(r)))}function Rd(e,r,a){const[i,n]=e,u=Math.log(i),v=Math.log(n),t=Math.max(u,r),o=Math.min(v,a);return o>t?(Math.exp(o)-Math.exp(t))/(v-u):0}function l2(e,r){return-(r+e*e)*i2(e,r)/(r-1)}function bd(e,r,a){if(!Number.isFinite(e)||!Number.isFinite(r)){if(a<=1)return!Number.isFinite(e)&&!Number.isFinite(r)?NaN:Number.isFinite(e)?1/0:-1/0;const i=n=>Number.isFinite(n)?l2(n,a):0;return i(r)-i(e)}return Math.abs(a-1)<ld?$d(v2(0,1,a),e,r):l2(r,a)-l2(e,a)}function gd(e,r,a){const[i,n,u]=e,v=(r-i)/n,t=(a-i)/n,o=f=>f===-1/0?0:f===1/0?1:I7(f,u);return i*(o(t)-o(v))+n*bd(v,t,u)}function Ld(e,r,a){const[i,n,u]=e;if(a===1/0)return 1/0;const v=i2(0,u)/n,t=f=>{const l=(f-i)/n;return v*(1+l*l/u)**(-(u+1)/2)},o=r===-1/0?0:Math.exp(r-a);return Math.exp(a)*md(f=>f<=0?0:t(a+Math.log(f)),o,1,od)}const Vr={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:rd,build:e=>({latent:nd(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:dd},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:ed,build:e=>({latent:H7(e[0],e[1]),logX:!1}),partialFirstMoment:qd},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:ad,build:e=>({latent:td(e[0],e[1]),logX:!1}),partialFirstMoment:hd},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:O7,build:e=>({latent:G7(e[0],e[1]),logX:!1}),partialFirstMoment:pd},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:O7,build:e=>({latent:G7(e[0],e[1]),logX:!0}),partialFirstMoment:yd},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:id,build:e=>({latent:H7(Math.log(e[0]),Math.log(e[1])),logX:!0}),partialFirstMoment:Rd},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:T7,build:e=>({latent:v2(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:gd},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:T7,build:e=>({latent:v2(e[0],e[1],e[2]),logX:!0}),partialFirstMoment:Ld}},Nd=["normal","lognormal","t","logt"];function Id(e){const[r,a]=e;return r<a?null:`requires lo < hi in the truncation window, got lo=${r}, hi=${a}`}function Md(e,r){const a=r.signature.split("(",2)[1].slice(0,-1);return{signature:`${e}-trunc(${a}, lo, hi)`,note:`${r.note}; explicitly truncated to [lo, hi]`,nParams:r.nParams+2,check:i=>r.check(i.slice(0,r.nParams))??Id(i.slice(r.nParams)),build:i=>r.build(i),partialFirstMoment:r.partialFirstMoment,hasTruncWindow:!0}}for(const e of Nd)Vr[`${e}-trunc`]=Md(e,Vr[e]);function D7(e){const r=xq.exec(e);if(!r)throw new Error(`malformed family spec ${JSON.stringify(e)}: expected "family(num, num, ...)"`);const a=r[1],i=r[2],n=Vr[a];if(n===void 0)throw new Error(`unknown distribution family ${JSON.stringify(a)}; available: `+Object.values(Vr).map(o=>o.signature).join(", "));const u=i.split(",").map(o=>o.trim());for(const o of u)if(!zq.test(o))throw new Error(`family spec ${JSON.stringify(e.trim())}: bad numeric argument ${JSON.stringify(o)}`);const v=u.map(Number);if(v.length!==n.nParams)throw new Error(`${a} takes ${n.nParams} arguments as ${n.signature}, got ${v.length}`);const t=n.check(v);if(t)throw new Error(`${e.trim()}: ${n.signature} ${t}`);return n.hasTruncWindow?{family:a,params:v.slice(0,-2),text:e.trim(),truncWindow:[v[v.length-2],v[v.length-1]]}:{family:a,params:v,text:e.trim(),truncWindow:null}}function qr(e,...r){const a=r.map(i=>{if(typeof i!="number"||!Number.isFinite(i))throw new Error(`family spec parameter must be a finite number, got ${JSON.stringify(i)}`);return String(i)});return D7(`${e}(${a.join(", ")})`).text}function a0(e,r){return r===-1/0?0:r===1/0?1:e.cdf(r)}class Ad{constructor(r,a,i,n,u,v,t,o,f){this.spec=r,this.latent=a,this.logX=i,this.cdfLo=n,this.mass=u,this.xLo=v,this.xHi=t,this.yLo=o,this.yHi=f}inverseCdf(r){const a=this.latent.ppf(this.cdfLo+r*this.mass),i=this.logX?Math.exp(a):a;return Math.min(Math.max(i,this.xLo),this.xHi)}cdf(r){if(r<=this.xLo)return 0;if(r>=this.xHi)return 1;if(this.logX&&r<=0)return 0;const a=this.logX?Math.log(r):r;return(a0(this.latent,a)-this.cdfLo)/this.mass}mean(){const r=Vr[this.spec.family];if(r===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);const i=r.partialFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isFinite(i)?i:null}pdf(r){return r<this.xLo||r>this.xHi?0:this.logX?r<=0?0:this.latent.pdf(Math.log(r))/r/this.mass:this.latent.pdf(r)/this.mass}}function Pd(e,r,a){const i=Vr[e.family];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(e.family)}`);const{latent:n,logX:u}=i.build(e.params);let v=r===null?-1/0:r,t=a===null?1/0:a;e.truncWindow!==null&&(v=Math.max(v,e.truncWindow[0]),t=Math.min(t,e.truncWindow[1]));let o,f;u?(o=v>0?Math.log(v):-1/0,f=t>0?Math.log(t):-1/0):(o=v,f=t);const l=a0(n,o),$=a0(n,f)-l;if($<F7){let q=`the variable's range [${r}, ${a}]`;throw e.truncWindow!==null&&(q+=` ∩ the spec's truncation window [${e.truncWindow[0]}, ${e.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(e.text)}: essentially no probability mass in ${q} (mass ${$.toExponential(2)} < ${F7})`)}return new Ad(e,n,u,l,$,v,t,o,f)}const y0="pointmass",Sd="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",Ed=new RegExp(`^\\s*${y0}\\s*\\(\\s*(${Sd})\\s*\\)\\s*$`),wd=new RegExp(`^\\s*${y0}\\b`);function Fd(e){const r=Ed.exec(e);if(r===null)throw new Error(`malformed ${y0} spec ${JSON.stringify(e)}: expected "${y0}(num)"`);return Number(r[1])}function U7(e){return wd.test(e)?Fd(e):null}const X7=8,Od=1e-9;function R0(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function s2(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Td(e,r,a){const i=`lloads.latents[${r}]`;if(!s2(e))return`${i}: expected an object, got ${R0(e)}`;for(const u of["name","description"]){const v=e[u];if(typeof v!="string"||v.trim()==="")return`${i}.${u}: expected a non-empty string, got ${JSON.stringify(v)}`}const n=e.loadings;if(!s2(n))return`${i}.loadings: expected an object, got ${R0(n)}`;if(Object.keys(n).length===0)return`${i}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[u,v]of Object.entries(n)){if(!a.has(u))return`${i}.loadings: '${u}' is not one of the subjective variables this jprob samples (${[...a].sort().join(", ")}), so a loading on it would have no effect`;if(typeof v!="number")return`${i}.loadings['${u}']: expected a number, got ${JSON.stringify(v)}`;if(!Number.isFinite(v))return`${i}.loadings['${u}']: ${v} is not finite`;if(v<-1||v>1)return`${i}.loadings['${u}']: ${v} not in [-1, 1]`}return null}function Hd(e,r,a=[]){if(e==null)return null;if(!s2(e))return`lloads: expected an object, got ${R0(e)}`;const i=Object.keys(e).filter(f=>f!=="latents").sort();if(i.length>0)return`lloads: unexpected key(s) ${JSON.stringify(i)}`;const n=e.latents;if(!Array.isArray(n))return`lloads.latents: expected a list, got ${R0(n)}`;if(n.length>X7)return`lloads.latents: ${n.length} latents exceeds the cap of ${X7}`;const u=new Set(r);for(const[f,l]of n.entries()){const s=Td(l,f,u);if(s!==null)return s}const v=new Map;for(const f of n)for(const[l,s]of Object.entries(f.loadings))v.set(l,(v.get(l)??0)+s**2);for(const[f,l]of[...v.entries()].sort((s,$)=>s[0]<$[0]?-1:1))if(l>1+Od)return`lloads: loading budget exceeded for '${f}' — the sum of squared loadings across latents is ${V7(l)}, over the limit of 1 by ${V7(l-1)}; no residual variance is left for it`;const t=new Set(a),o=[...v.entries()].filter(([f,l])=>l>0&&t.has(f)).map(([f])=>f).sort();return o.length>0?`lloads: ${o.map(f=>`'${f}'`).join(", ")} ${o.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function V7(e){return String(Number(e.toPrecision(6)))}const Gd=1e-15;function Cd(e,r){return r.filter(a=>{const i=e[a];if(typeof i=="string")return U7(i)!==null;if(!Array.isArray(i)||i.length===0)return!1;const n=i[0];return i[i.length-1][0]-n[0]<Gd})}function kd(e,r,a,i=null,n=!1){if(!c2(e))return`expected object, got ${b0(e)}`;for(const _ of["point","bounds","sample"]){if(!(_ in e))return`missing required key '${_}'`;if(!c2(e[_]))return`'${_}' must be an object, got ${b0(e[_])}`}const u=e.point,v=e.bounds,t=e.sample,o=new Set(Object.keys(u)),f=new Set(Object.keys(v)),l=new Set(Object.keys(t));if(!_2(f,l))return`bounds/sample key mismatch: bounds=${JSON.stringify([...f].sort())}, sample=${JSON.stringify([...l].sort())}`;if(!_2(o,f))return`parameter name mismatch across dicts: point=${JSON.stringify([...o].sort())}, bounds=${JSON.stringify([...f].sort())}, sample=${JSON.stringify([...l].sort())}`;if(r!==null){const _=Wd("point/bounds/sample",o,r);if(_!==null)return _}for(const[_,c]of Object.entries(u)){if(typeof c!="number"||!Number.isFinite(c))return`point['${_}']: expected number, got ${b0(c)}`;const h=(a==null?void 0:a[_])??n0;if(!Qr(h,c))return`point['${_}']: ${c} not in ${Yr(h)}`}for(const[_,c]of Object.entries(v)){if(!Array.isArray(c)||c.length!==2)return`bounds['${_}']: expected [lo, hi] pair`;const[h,y]=c;if(typeof h!="number"||typeof y!="number"||!Number.isFinite(h)||!Number.isFinite(y))return`bounds['${_}']: lo and hi must be numbers`;if(h>y)return`bounds['${_}']: lo=${h} > hi=${y}`;const L=(a==null?void 0:a[_])??n0;if(!Qr(L,h))return`bounds['${_}']: lo=${h} not in ${Yr(L)}`;if(!Qr(L,y))return`bounds['${_}']: hi=${y} not in ${Yr(L)}`}for(const[_,c]of Object.entries(t)){if(typeof c=="string"){const I=U7(c),P=(a==null?void 0:a[_])??n0;if(I!==null){if(!Qr(P,I))return`sample['${_}']: pointmass value ${I} not in ${Yr(P)}`;continue}try{Pd(D7(c),P.lo,P.hi)}catch(M){return`sample['${_}']: ${M instanceof Error?M.message:String(M)}`}continue}if(!Array.isArray(c))return`sample['${_}']: expected family spec string or array of [x, y] pairs, got ${b0(c)}`;const h=c.length;if(h<2)return`sample['${_}']: need at least 2 [x, y] pairs, got ${h}`;const y=(a==null?void 0:a[_])??n0;let L=!1,g=-1/0;for(let I=0;I<h;I++){const P=c[I];if(!Array.isArray(P)||P.length!==2)return`sample['${_}'][${I}]: expected [x, y] pair, got ${JSON.stringify(P)}`;const[M,S]=P;if(typeof M!="number"||typeof S!="number"||!Number.isFinite(M)||!Number.isFinite(S))return`sample['${_}'][${I}]: x and y must be numbers`;if(!Qr(y,M))return`sample['${_}'][${I}]: x=${M} not in ${Yr(y)}`;if(S<0||S>1)return`sample['${_}'][${I}]: y=${S} not in [0, 1]`;if(M<g)return`sample['${_}'][${I}]: x=${M} not sorted (prev was ${g})`;g=M,Math.abs(S-1)<1e-9&&(L=!0)}if(!L)return`sample['${_}']: no pair has y ≈ 1.0 (need at least one peak)`}const s=e.lloads;if(s==null)return null;const $=i??r??[...l],q=Cd(t,$),m=Hd(s,$,q);return m!==null?m:n&&c2(s)&&Array.isArray(s.latents)&&s.latents.length>0?"lloads: non-empty latent lists are not supported for a jprob with an expectation barrier, because dependence across E[·] has no defined semantics":null}function c2(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function b0(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function _2(e,r){if(e.size!==r.size)return!1;for(const a of e)if(!r.has(a))return!1;return!0}function Wd(e,r,a){const i=new Set(a);if(_2(r,i))return null;const n=[...i].filter(t=>!r.has(t)).sort(),u=[...r].filter(t=>!i.has(t)).sort(),v=[];return n.length>0&&v.push(`missing=${JSON.stringify(n)}`),u.length>0&&v.push(`unexpected=${JSON.stringify(u)}`),`${e} parameter name mismatch vs expected: ${v.join(", ")}`}const K7=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"];function Bd(e,r,a){return qr("tri",e,r,a)}function Q7(e,r){return qr("uniform",e,r)}const Dd=Q7;function Ud(e,r){return qr("beta",e,r)}function Xd(e,r){return qr("normal",e,r)}function Vd(e,r){return qr("lognormal",e,r)}function Kd(e,r){return qr("loguniform",e,r)}function Qd(e,r,a){return qr("t",e,r,a)}function Yd(e,r,a){return qr("logt",e,r,a)}function Jd(e,r,a,i){return qr("normal-trunc",e,r,a,i)}function Zd(e,r,a,i){return qr("lognormal-trunc",e,r,a,i)}function jd(e,r,a,i,n){return qr("t-trunc",e,r,a,i,n)}function zd(e,r,a,i,n){return qr("logt-trunc",e,r,a,i,n)}function xd(e,r,a,i){return[[e,0],[r,1],[a,1],[i,0]]}function rh(e,r,a){return Math.min(Math.max(e,r),a)}const Y7={tri:Bd,uniform:Q7,uni:Dd,beta:Ud,normal:Xd,lognormal:Vd,loguniform:Kd,t:Qd,logt:Yd,normal_trunc:Jd,lognormal_trunc:Zd,t_trunc:jd,logt_trunc:zd,trap:xd,clamp:rh,exp:Math.exp,log:Math.log,log2:Math.log2,log10:Math.log10,sqrt:Math.sqrt};{const e=Object.keys(Y7),r=[...K7],a=e.filter(n=>!r.includes(n)),i=r.filter(n=>!e.includes(n));if(a.length>0||i.length>0)throw new Error(`belief_helpers: HELPER_NAMES ↔ HELPERS drift. Missing from names: ${JSON.stringify(a)}. Missing from bundle: ${JSON.stringify(i)}.`)}const J7="__belief_helpers",eh=`const { ${K7.join(", ")} } = ${J7};
`;function ah(e){let r;try{r=new Function(...e.cparamNames,J7,eh+e.source)}catch(n){return{wellformed:[],malformed:[],compileError:Z7(n)}}const a=[],i=[];for(const n of e.combinations){const u=e.cparamNames.map(l=>n[l]);let v;try{v=r(...u,Y7)}catch(l){i.push({cparams:n,error:Z7(l)});continue}const t=kd(v,e.expectedSvars,e.paramRanges,e.formulaSvars??null,e.hasExpectationBarrier??!1);if(t!==null){i.push({cparams:n,error:t});continue}const o=v,f={cparams:n,point:o.point,bounds:o.bounds,sample:o.sample};o.lloads!==void 0&&(f.lloads=o.lloads),a.push(f)}return{wellformed:a,malformed:i}}function Z7(e){return e instanceof Error?`${e.name}: ${e.message}`:String(e)}const j7=self;j7.addEventListener("message",e=>{const r=ah(e.data);j7.postMessage(r)})})();
