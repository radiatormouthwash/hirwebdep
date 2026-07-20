(function(){"use strict";const n0={lo:0,hi:1,loClosed:!0,hiClosed:!0};function Kr(e,r){return!(e.lo!==null&&(e.loClosed?r<e.lo:r<=e.lo)||e.hi!==null&&(e.hiClosed?r>e.hi:r>=e.hi))}function Qr(e){const r=e.loClosed&&e.lo!==null?"[":"(",a=e.hiClosed&&e.hi!==null?"]":")";return`${r}${e.lo??"-inf"}, ${e.hi??"inf"}${a}`}function br(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
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
*/var y0,c2;function C8(){if(c2)return y0;c2=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return y0=e,y0}/**
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
*/var R0,_2;function k8(){if(_2)return R0;_2=1;var e=C8();function r(){try{return e({},"x",{}),!0}catch{return!1}}return R0=r,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,q2;function W8(){if(q2)return b0;q2=1;var e=Object.defineProperty;return b0=e,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,$2;function m2(){if($2)return g0;$2=1;function e(r){return typeof r=="number"}return g0=e,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,h2;function d2(){if(h2)return L0;h2=1;function e(i){return i[0]==="-"}function r(i){var t="",u;for(u=0;u<i;u++)t+="0";return t}function a(i,t,u){var f=!1,n=t-i.length;return n<0||(e(i)&&(f=!0,i=i.substr(1)),i=u?i+r(n):r(n)+i,f&&(i="-"+i)),i}return L0=a,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,p2;function B8(){if(p2)return N0;p2=1;var e=m2(),r=d2(),a=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function t(u){var f,n,o;switch(u.specifier){case"b":f=2;break;case"o":f=8;break;case"x":case"X":f=16;break;case"d":case"i":case"u":default:f=10;break}if(n=u.arg,o=parseInt(n,10),!isFinite(o)){if(!e(n))throw new Error("invalid integer. Value: "+n);o=0}return o<0&&(u.specifier==="u"||f!==10)&&(o=4294967295+o+1),o<0?(n=(-o).toString(f),u.precision&&(n=r(n,u.precision,u.padRight)),n="-"+n):(n=o.toString(f),!o&&!u.precision?n="":u.precision&&(n=r(n,u.precision,u.padRight)),u.sign&&(n=u.sign+n)),f===16&&(u.alternate&&(n="0x"+n),n=u.specifier===i.call(u.specifier)?i.call(n):a.call(n)),f===8&&u.alternate&&n.charAt(0)!=="0"&&(n="0"+n),n}return N0=t,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,y2;function D8(){if(y2)return I0;y2=1;function e(r){return typeof r=="string"}return I0=e,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,R2;function X8(){if(R2)return A0;R2=1;var e=Math.abs,r=String.prototype.toLowerCase,a=String.prototype.toUpperCase,i=String.prototype.replace,t=/e\+(\d)$/,u=/e-(\d)$/,f=/^(\d+)$/,n=/^(\d+)e/,o=/\.0$/,v=/\.0*e/,l=/(\..*[^0])0*e/;function s(c,$){var _,m;switch($.specifier){case"e":case"E":m=c.toExponential($.precision);break;case"f":case"F":m=c.toFixed($.precision);break;case"g":case"G":e(c)<1e-4?(_=$.precision,_>0&&(_-=1),m=c.toExponential(_)):m=c.toPrecision($.precision),$.alternate||(m=i.call(m,l,"$1e"),m=i.call(m,v,"e"),m=i.call(m,o,""));break;default:throw new Error("invalid double notation. Value: "+$.specifier)}return m=i.call(m,t,"e+0$1"),m=i.call(m,u,"e-0$1"),$.alternate&&(m=i.call(m,f,"$1."),m=i.call(m,n,"$1.e")),c>=0&&$.sign&&(m=$.sign+m),m=$.specifier===a.call($.specifier)?a.call(m):r.call(m),m}return A0=s,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M0,b2;function U8(){if(b2)return M0;b2=1;function e(a){var i="",t;for(t=0;t<a;t++)i+=" ";return i}function r(a,i,t){var u=i-a.length;return u<0||(a=t?a+e(u):e(u)+a),a}return M0=r,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,g2;function V8(){if(g2)return P0;g2=1;var e=B8(),r=D8(),a=m2(),i=X8(),t=U8(),u=d2(),f=String.fromCharCode,n=Array.isArray;function o(s){return s!==s}function v(s){var c={};return c.specifier=s.specifier,c.precision=s.precision===void 0?1:s.precision,c.width=s.width,c.flags=s.flags||"",c.mapping=s.mapping,c}function l(s){var c,$,_,m,q,p,y,g,L,I;if(!n(s))throw new TypeError("invalid argument. First argument must be an array. Value: `"+s+"`.");for(p="",y=1,L=0;L<s.length;L++)if(_=s[L],r(_))p+=_;else{if(c=_.precision!==void 0,_=v(_),!_.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+L+"`. Value: `"+_+"`.");for(_.mapping&&(y=_.mapping),$=_.flags,I=0;I<$.length;I++)switch(m=$.charAt(I),m){case" ":_.sign=" ";break;case"+":_.sign="+";break;case"-":_.padRight=!0,_.padZeros=!1;break;case"0":_.padZeros=$.indexOf("-")<0;break;case"#":_.alternate=!0;break;default:throw new Error("invalid flag: "+m)}if(_.width==="*"){if(_.width=parseInt(arguments[y],10),y+=1,o(_.width))throw new TypeError("the argument for * width at position "+y+" is not a number. Value: `"+_.width+"`.");_.width<0&&(_.padRight=!0,_.width=-_.width)}if(c&&_.precision==="*"){if(_.precision=parseInt(arguments[y],10),y+=1,o(_.precision))throw new TypeError("the argument for * precision at position "+y+" is not a number. Value: `"+_.precision+"`.");_.precision<0&&(_.precision=1,c=!1)}switch(_.arg=arguments[y],_.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":c&&(_.padZeros=!1),_.arg=e(_);break;case"s":_.maxWidth=c?_.precision:-1,_.arg=String(_.arg);break;case"c":if(!o(_.arg)){if(q=parseInt(_.arg,10),q<0||q>127)throw new Error("invalid character code. Value: "+_.arg);_.arg=o(q)?String(_.arg):f(q)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(c||(_.precision=6),g=parseFloat(_.arg),!isFinite(g)){if(!a(_.arg))throw new Error("invalid floating-point number. Value: "+p);g=_.arg,_.padZeros=!1}_.arg=i(g,_);break;default:throw new Error("invalid specifier: "+_.specifier)}_.maxWidth>=0&&_.arg.length>_.maxWidth&&(_.arg=_.arg.substring(0,_.maxWidth)),_.padZeros?_.arg=u(_.arg,_.width||_.precision,_.padRight):_.width&&(_.arg=t(_.arg,_.width,_.padRight)),p+=_.arg||"",y+=1}return p}return P0=l,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,L2;function K8(){if(L2)return S0;L2=1;var e=V8();return S0=e,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,N2;function Q8(){if(N2)return E0;N2=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function r(i){var t={mapping:i[1]?parseInt(i[1],10):void 0,flags:i[2],width:i[3],precision:i[5],specifier:i[6]};return i[4]==="."&&i[5]===void 0&&(t.precision="1"),t}function a(i){var t,u,f,n;for(u=[],n=0,f=e.exec(i);f;)t=i.slice(n,e.lastIndex-f[0].length),t.length&&u.push(t),f[6]==="%"?u.push("%"):u.push(r(f)),n=e.lastIndex,f=e.exec(i);return t=i.slice(n),t.length&&u.push(t),u}return E0=a,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,I2;function Y8(){if(I2)return w0;I2=1;var e=Q8();return w0=e,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,A2;function Z8(){if(A2)return F0;A2=1;function e(r){return typeof r=="string"}return F0=e,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,M2;function J8(){if(M2)return O0;M2=1;var e=K8(),r=Y8(),a=Z8();function i(t){var u,f;if(!a(t))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",t));for(u=[r(t)],f=1;f<arguments.length;f++)u.push(arguments[f]);return e.apply(null,u)}return O0=i,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,P2;function j8(){if(P2)return T0;P2=1;var e=J8();return T0=e,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,S2;function z8(){if(S2)return H0;S2=1;var e=j8(),r=Object.prototype,a=r.toString,i=r.__defineGetter__,t=r.__defineSetter__,u=r.__lookupGetter__,f=r.__lookupSetter__;function n(o,v,l){var s,c,$,_;if(typeof o!="object"||o===null||a.call(o)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",o));if(typeof l!="object"||l===null||a.call(l)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if(c="value"in l,c&&(u.call(o,v)||f.call(o,v)?(s=o.__proto__,o.__proto__=r,delete o[v],o[v]=l.value,o.__proto__=s):o[v]=l.value),$="get"in l,_="set"in l,c&&($||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return $&&i&&i.call(o,v,l.get),_&&t&&t.call(o,v,l.set),o}return H0=n,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0,E2;function x8(){if(E2)return G0;E2=1;var e=k8(),r=W8(),a=z8(),i;return e()?i=r:i=a,G0=i,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,w2;function r9(){if(w2)return C0;w2=1;var e=x8();function r(a,i,t){e(a,i,{configurable:!1,enumerable:!1,writable:!1,value:t})}return C0=r,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,F2;function fr(){if(F2)return k0;F2=1;var e=r9();return k0=e,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,O2;function e9(){if(O2)return W0;O2=1;function e(r){return r!==r}return W0=e,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,T2;function U(){if(T2)return B0;T2=1;var e=e9();return B0=e,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,H2;function a9(){if(H2)return D0;H2=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return D0=e,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,G2;function i9(){if(G2)return X0;G2=1;var e=a9();return X0=e,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,C2;function n9(){if(C2)return U0;C2=1;var e=i9(),r=e();function a(){return r&&typeof Symbol.toStringTag=="symbol"}return U0=a,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,k2;function t9(){if(k2)return V0;k2=1;var e=n9();return V0=e,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K0,W2;function B2(){if(W2)return K0;W2=1;var e=Object.prototype.toString;return K0=e,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,D2;function u9(){if(D2)return Q0;D2=1;var e=B2();function r(a){return e.call(a)}return Q0=r,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,X2;function v9(){if(X2)return Y0;X2=1;var e=Object.prototype.hasOwnProperty;function r(a,i){return a==null?!1:e.call(a,i)}return Y0=r,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,U2;function f9(){if(U2)return Z0;U2=1;var e=v9();return Z0=e,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,V2;function o9(){if(V2)return J0;V2=1;var e=typeof Symbol=="function"?Symbol:void 0;return J0=e,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,K2;function l9(){if(K2)return j0;K2=1;var e=o9();return j0=e,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,Q2;function s9(){if(Q2)return z0;Q2=1;var e=l9(),r=typeof e=="function"?e.toStringTag:"";return z0=r,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,Y2;function c9(){if(Y2)return x0;Y2=1;var e=f9(),r=s9(),a=B2();function i(t){var u,f,n;if(t==null)return a.call(t);f=t[r],u=e(t,r);try{t[r]=void 0}catch{return a.call(t)}return n=a.call(t),u?t[r]=f:delete t[r],n}return x0=i,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var re,Z2;function t0(){if(Z2)return re;Z2=1;var e=t9(),r=u9(),a=c9(),i;return e()?i=a:i=r,re=i,re}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ee,J2;function _9(){if(J2)return ee;J2=1;var e=t0(),r=typeof Uint32Array=="function";function a(i){return r&&i instanceof Uint32Array||e(i)==="[object Uint32Array]"}return ee=a,ee}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ae,j2;function q9(){if(j2)return ae;j2=1;var e=_9();return ae=e,ae}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ie,z2;function $9(){if(z2)return ie;z2=1;var e=4294967295;return ie=e,ie}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ne,x2;function m9(){if(x2)return ne;x2=1;var e=typeof Uint32Array=="function"?Uint32Array:null;return ne=e,ne}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var te,r3;function h9(){if(r3)return te;r3=1;var e=q9(),r=$9(),a=m9();function i(){var t,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),t=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{t=!1}return t}return te=i,te}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ue,e3;function d9(){if(e3)return ue;e3=1;var e=h9();return ue=e,ue}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ve,a3;function p9(){if(a3)return ve;a3=1;var e=typeof Uint32Array=="function"?Uint32Array:void 0;return ve=e,ve}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fe,i3;function y9(){if(i3)return fe;i3=1;function e(){throw new Error("not implemented")}return fe=e,fe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oe,n3;function Tr(){if(n3)return oe;n3=1;var e=d9(),r=p9(),a=y9(),i;return e()?i=r:i=a,oe=i,oe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var le,t3;function R9(){if(t3)return le;t3=1;var e=t0(),r=typeof Float64Array=="function";function a(i){return r&&i instanceof Float64Array||e(i)==="[object Float64Array]"}return le=a,le}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var se,u3;function b9(){if(u3)return se;u3=1;var e=R9();return se=e,se}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ce,v3;function g9(){if(v3)return ce;v3=1;var e=typeof Float64Array=="function"?Float64Array:null;return ce=e,ce}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _e,f3;function L9(){if(f3)return _e;f3=1;var e=b9(),r=g9();function a(){var i,t;if(typeof r!="function")return!1;try{t=new r([1,3.14,-3.14,NaN]),i=e(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{i=!1}return i}return _e=a,_e}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qe,o3;function N9(){if(o3)return qe;o3=1;var e=L9();return qe=e,qe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $e,l3;function I9(){if(l3)return $e;l3=1;var e=typeof Float64Array=="function"?Float64Array:void 0;return $e=e,$e}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var me,s3;function A9(){if(s3)return me;s3=1;function e(){throw new Error("not implemented")}return me=e,me}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var he,c3;function Hr(){if(c3)return he;c3=1;var e=N9(),r=I9(),a=A9(),i;return e()?i=r:i=a,he=i,he}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var de,_3;function M9(){if(_3)return de;_3=1;var e=t0(),r=typeof Uint8Array=="function";function a(i){return r&&i instanceof Uint8Array||e(i)==="[object Uint8Array]"}return de=a,de}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pe,q3;function P9(){if(q3)return pe;q3=1;var e=M9();return pe=e,pe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ye,$3;function S9(){if($3)return ye;$3=1;var e=255;return ye=e,ye}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Re,m3;function E9(){if(m3)return Re;m3=1;var e=typeof Uint8Array=="function"?Uint8Array:null;return Re=e,Re}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var be,h3;function w9(){if(h3)return be;h3=1;var e=P9(),r=S9(),a=E9();function i(){var t,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),t=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{t=!1}return t}return be=i,be}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ge,d3;function F9(){if(d3)return ge;d3=1;var e=w9();return ge=e,ge}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Le,p3;function O9(){if(p3)return Le;p3=1;var e=typeof Uint8Array=="function"?Uint8Array:void 0;return Le=e,Le}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ne,y3;function T9(){if(y3)return Ne;y3=1;function e(){throw new Error("not implemented")}return Ne=e,Ne}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ie,R3;function H9(){if(R3)return Ie;R3=1;var e=F9(),r=O9(),a=T9(),i;return e()?i=r:i=a,Ie=i,Ie}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ae,b3;function G9(){if(b3)return Ae;b3=1;var e=t0(),r=typeof Uint16Array=="function";function a(i){return r&&i instanceof Uint16Array||e(i)==="[object Uint16Array]"}return Ae=a,Ae}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Me,g3;function C9(){if(g3)return Me;g3=1;var e=G9();return Me=e,Me}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pe,L3;function k9(){if(L3)return Pe;L3=1;var e=65535;return Pe=e,Pe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Se,N3;function W9(){if(N3)return Se;N3=1;var e=typeof Uint16Array=="function"?Uint16Array:null;return Se=e,Se}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ee,I3;function B9(){if(I3)return Ee;I3=1;var e=C9(),r=k9(),a=W9();function i(){var t,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),t=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{t=!1}return t}return Ee=i,Ee}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var we,A3;function D9(){if(A3)return we;A3=1;var e=B9();return we=e,we}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fe,M3;function X9(){if(M3)return Fe;M3=1;var e=typeof Uint16Array=="function"?Uint16Array:void 0;return Fe=e,Fe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oe,P3;function U9(){if(P3)return Oe;P3=1;function e(){throw new Error("not implemented")}return Oe=e,Oe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Te,S3;function V9(){if(S3)return Te;S3=1;var e=D9(),r=X9(),a=U9(),i;return e()?i=r:i=a,Te=i,Te}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var He,E3;function K9(){if(E3)return He;E3=1;var e=H9(),r=V9(),a={uint16:r,uint8:e};return He=a,He}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ge,w3;function Q9(){if(w3)return Ge;w3=1;var e=K9(),r;function a(){var i,t;return i=new e.uint16(1),i[0]=4660,t=new e.uint8(i.buffer),t[0]===52}return r=a(),Ge=r,Ge}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ce,F3;function Gr(){if(F3)return Ce;F3=1;var e=Q9();return Ce=e,Ce}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ke,O3;function Y9(){if(O3)return ke;O3=1;var e=Gr(),r;return e===!0?r=1:r=0,ke=r,ke}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var We,T3;function Z9(){if(T3)return We;T3=1;var e=Tr(),r=Hr(),a=Y9(),i=new r(1),t=new e(i.buffer);function u(f){return i[0]=f,t[a]}return We=u,We}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Be,H3;function _r(){if(H3)return Be;H3=1;var e=Z9();return Be=e,Be}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var De,G3;function J9(){if(G3)return De;G3=1;var e=Gr(),r;return e===!0?r=1:r=0,De=r,De}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xe,C3;function j9(){if(C3)return Xe;C3=1;var e=Tr(),r=Hr(),a=J9(),i=new r(1),t=new e(i.buffer);function u(f,n){return i[0]=f,t[a]=n>>>0,i[0]}return Xe=u,Xe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ue,k3;function Yr(){if(k3)return Ue;k3=1;var e=j9();return Ue=e,Ue}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ve,W3;function z9(){if(W3)return Ve;W3=1;var e=Gr(),r,a,i;return e===!0?(a=1,i=0):(a=0,i=1),r={HIGH:a,LOW:i},Ve=r,Ve}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ke,B3;function x9(){if(B3)return Ke;B3=1;var e=Tr(),r=Hr(),a=z9(),i=new r(1),t=new e(i.buffer),u=a.HIGH,f=a.LOW;function n(o,v){return t[u]=o,t[f]=v,i[0]}return Ke=n,Ke}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qe,D3;function u0(){if(D3)return Qe;D3=1;var e=x9();return Qe=e,Qe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ye,X3;function ar(){if(X3)return Ye;X3=1;var e=Number.POSITIVE_INFINITY;return Ye=e,Ye}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ze,U3;function rs(){return U3||(U3=1,Ze=Number),Ze}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Je,V3;function es(){if(V3)return Je;V3=1;var e=rs();return Je=e,Je}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var je,K3;function or(){if(K3)return je;K3=1;var e=es(),r=e.NEGATIVE_INFINITY;return je=r,je}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ze,Q3;function Sr(){if(Q3)return ze;Q3=1;var e=1023;return ze=e,ze}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xe,Y3;function as(){if(Y3)return xe;Y3=1;var e=.34657359027997264;return xe=e,xe}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ra,Z3;function is(){if(Z3)return ra;Z3=1;function e(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}return ra=e,ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ea,J3;function ns(){if(J3)return ea;J3=1;var e=U(),r=_r(),a=Yr(),i=u0(),t=ar(),u=or(),f=Sr(),n=as(),o=is(),v=709.782712893384,l=.6931471803691238,s=19082149292705877e-26,c=1.4426950408889634,$=38.816242111356935,_=1.0397207708399179;function m(q){var p,y,g,L,I,P,A,S,M,b,h,d,R;if(q===t||e(q))return q;if(q===u)return-1;if(q===0)return q;if(q<0?(g=!0,S=-q):(g=!1,S=q),S>=$){if(g)return-1;if(S>=v)return t}if(P=r(S)|0,S>n)S<_?g?(L=q+l,I=-s,R=-1):(L=q-l,I=s,R=1):(g?R=c*q-.5:R=c*q+.5,R|=0,h=R,L=q-h*l,I=h*s),q=L-I,b=L-q-I;else{if(P<1016070144)return q;R=0}return p=.5*q,M=q*p,A=1+M*o(M),h=3-A*p,d=M*((A-h)/(6-q*h)),R===0?q-(q*d-M):(y=i(f+R<<20,0),d=q*(d-b)-b,d-=M,R===-1?.5*(q-d)-.5:R===1?q<-.25?-2*(d-(q+.5)):1+2*(q-d):R<=-2||R>56?(S=1-(d-q),R===1024?(L=r(S)+(R<<20)|0,S=a(S,L)):S*=y,S-1):(h=1,R<20?(L=1072693248-(2097152>>R)|0,h=a(h,L),S=h-(d-q)):(L=f-R<<20|0,h=a(h,L),S=q-(d+h),S+=1),S*=y,S))}return ea=m,ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aa,j3;function Cr(){if(j3)return aa;j3=1;var e=ns();return aa=e,aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ia,z3;function ts(){if(z3)return ia;z3=1;var e=Math.floor;return ia=e,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var na,x3;function pr(){if(x3)return na;x3=1;var e=ts();return na=e,na}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ta,rf;function us(){if(rf)return ta;rf=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}return ta=e,ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ua,ef;function vs(){if(ef)return ua;ef=1;var e=U(),r=_r(),a=Yr(),i=ar(),t=or(),u=Sr(),f=us(),n=.6931471803691238,o=19082149292705877e-26,v=.41421356237309503,l=-.2928932188134525,s=1862645149230957e-24,c=5551115123125783e-32,$=9007199254740992,_=.6666666666666666;function m(q){var p,y,g,L,I,P,A,S,M,b;if(q<-1||e(q))return NaN;if(q===-1)return t;if(q===i||q===0)return q;if(q<0?g=-q:g=q,b=1,g<v){if(g<s)return g<c?q:q-q*q*.5;q>l&&(b=0,L=q,y=1)}return b!==0&&(g<$?(M=1+q,y=r(M),b=(y>>20)-u,b>0?I=1-(M-q):I=q-(M-1),I/=M):(M=q,y=r(M),b=(y>>20)-u,I=0),y&=1048575,y<434334?M=a(M,y|1072693248):(b+=1,M=a(M,y|1071644672),y=1048576-y>>2),L=M-1),p=.5*L*L,y===0?L===0?(I+=b*o,b*n+I):(S=p*(1-_*L),b*n-(S-(b*o+I)-L)):(P=L/(2+L),A=P*P,S=A*f(A),b===0?L-(p-P*(p+S)):b*n-(p-(P*(p+S)+(b*o+I))-L))}return ua=m,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,af;function qr(){if(af)return va;af=1;var e=vs();return va=e,va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,nf;function fs(){if(nf)return fa;nf=1;var e=Math.sqrt;return fa=e,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oa,tf;function Z(){if(tf)return oa;tf=1;var e=fs();return oa=e,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,uf;function vf(){if(uf)return la;uf=1;var e=.7853981633974483;return la=e,la}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,ff;function os(){if(ff)return sa;ff=1;function e(r){var a,i,t;return r===0?.16666666666666713:(r<0?a=-r:a=r,a<=1?(i=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),t=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,i=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),t=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),i/t)}return sa=e,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,of;function ls(){if(of)return ca;of=1;function e(r){var a,i,t;return r===0?.08333333333333809:(r<0?a=-r:a=r,a<=1?(i=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),t=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,i=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),t=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),i/t)}return ca=e,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var _a,lf;function ss(){if(lf)return _a;lf=1;var e=U(),r=Z(),a=vf(),i=os(),t=ls(),u=6123233995736766e-32;function f(n){var o,v,l,s,c;if(e(n))return NaN;if(n>0?l=n:(o=!0,l=-n),l>1)return NaN;if(l>.625)v=1-l,s=v*t(v),v=r(v+v),c=a-v,v=v*s-u,c-=v,c+=a;else{if(l<1e-8)return n;v=l*l,c=v*i(v),c=l*c+l}return o?-c:c}return _a=f,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qa,sf;function $a(){if(sf)return qa;sf=1;var e=ss();return qa=e,qa}/**
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
*/var ma,cf;function cs(){if(cf)return ma;cf=1;function e(r){return Math.abs(r)}return ma=e,ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ha,_f;function J(){if(_f)return ha;_f=1;var e=cs();return ha=e,ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,qf;function _s(){if(qf)return da;qf=1;var e=Math.ceil;return da=e,da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pa,$f;function qs(){if($f)return pa;$f=1;var e=_s();return pa=e,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ya,mf;function $s(){if(mf)return ya;mf=1;var e=pr(),r=qs();function a(i){return i<0?r(i):e(i)}return ya=a,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,hf;function ba(){if(hf)return Ra;hf=1;var e=$s();return Ra=e,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ga,df;function ms(){if(df)return ga;df=1;var e=1023;return ga=e,ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,pf;function hs(){if(pf)return La;pf=1;var e=-1023;return La=e,La}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Na,yf;function ds(){if(yf)return Na;yf=1;var e=-1074;return Na=e,Na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,Rf;function ps(){if(Rf)return Ia;Rf=1;var e=ar(),r=or();function a(i){return i===e||i===r}return Ia=a,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aa,bf;function kr(){if(bf)return Aa;bf=1;var e=ps();return Aa=e,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ma,gf;function ys(){if(gf)return Ma;gf=1;var e=2147483648;return Ma=e,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,Lf;function Er(){if(Lf)return Pa;Lf=1;var e=2147483647;return Pa=e,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sa,Nf;function Rs(){if(Nf)return Sa;Nf=1;var e=Gr(),r,a,i;return e===!0?(a=1,i=0):(a=0,i=1),r={HIGH:a,LOW:i},Sa=r,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,If;function Af(){if(If)return Ea;If=1;var e=Tr(),r=Hr(),a=Rs(),i=new r(1),t=new e(i.buffer),u=a.HIGH,f=a.LOW;function n(o,v,l,s){return i[0]=o,v[s]=t[u],v[s+l]=t[f],v}return Ea=n,Ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,Mf;function bs(){if(Mf)return wa;Mf=1;var e=Af();function r(a){return e(a,[0,0],1,0)}return wa=r,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,Pf;function Oa(){if(Pf)return Fa;Pf=1;var e=fr(),r=bs(),a=Af();return e(r,"assign",a),Fa=r,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ta,Sf;function gs(){if(Sf)return Ta;Sf=1;var e=ys(),r=Er(),a=Oa(),i=_r(),t=u0(),u=[0,0];function f(n,o){var v,l;return a.assign(n,u,1,0),v=u[0],v&=r,l=i(o),l&=e,v|=l,t(v,u[1])}return Ta=f,Ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,Ef;function Ga(){if(Ef)return Ha;Ef=1;var e=gs();return Ha=e,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ca,wf;function wr(){if(wf)return Ca;wf=1;var e=22250738585072014e-324;return Ca=e,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,Ff;function Of(){if(Ff)return ka;Ff=1;var e=wr(),r=kr(),a=U(),i=J(),t=4503599627370496;function u(f,n,o,v){return a(f)||r(f)?(n[v]=f,n[v+o]=0,n):f!==0&&i(f)<e?(n[v]=f*t,n[v+o]=-52,n):(n[v]=f,n[v+o]=0,n)}return ka=u,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,Tf;function Ls(){if(Tf)return Wa;Tf=1;var e=Of();function r(a){return e(a,[0,0],1,0)}return Wa=r,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,Hf;function Ns(){if(Hf)return Ba;Hf=1;var e=fr(),r=Ls(),a=Of();return e(r,"assign",a),Ba=r,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,Gf;function v0(){if(Gf)return Da;Gf=1;var e=2146435072;return Da=e,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,Cf;function Is(){if(Cf)return Xa;Cf=1;var e=_r(),r=v0(),a=Sr();function i(t){var u=e(t);return u=(u&r)>>>20,u-a|0}return Xa=i,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,kf;function As(){if(kf)return Ua;kf=1;var e=Is();return Ua=e,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Va,Wf;function Ms(){if(Wf)return Va;Wf=1;var e=ar(),r=or(),a=Sr(),i=ms(),t=hs(),u=ds(),f=U(),n=kr(),o=Ga(),v=Ns().assign,l=As(),s=Oa(),c=u0(),$=2220446049250313e-31,_=2148532223,m=[0,0],q=[0,0];function p(y,g){var L,I;return g===0||y===0||f(y)||n(y)?y:(v(y,m,1,0),y=m[0],g+=m[1],g+=l(y),g<u?o(0,y):g>i?y<0?r:e:(g<=t?(g+=52,I=$):I=1,s.assign(y,q,1,0),L=q[0],L&=_,L|=g+a<<20,I*c(L,q[1])))}return Va=p,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ka,Bf;function Wr(){if(Bf)return Ka;Bf=1;var e=Ms();return Ka=e,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa,Df;function Ps(){if(Df)return Qa;Df=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return Qa=e,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ya,Xf;function Ss(){if(Xf)return Ya;Xf=1;var e=Wr(),r=Ps();function a(i,t,u){var f,n,o,v;return f=i-t,n=f*f,o=f-n*r(n),v=1-(t-f*o/(2-o)-i),e(v,u)}return Ya=a,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Za,Uf;function Es(){if(Uf)return Za;Uf=1;var e=U(),r=ba(),a=or(),i=ar(),t=Ss(),u=.6931471803691238,f=19082149292705877e-26,n=1.4426950408889634,o=709.782712893384,v=-745.1332191019411,l=1/(1<<28),s=-l;function c($){var _,m,q;return e($)||$===i?$:$===a?0:$>o?i:$<v?0:$>s&&$<l?1+$:($<0?q=r(n*$-.5):q=r(n*$+.5),_=$-q*u,m=q*f,t(_,m,q))}return Za=c,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja,Vf;function ir(){if(Vf)return Ja;Vf=1;var e=Es();return Ja=e,Ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ja,Kf;function ws(){if(Kf)return ja;Kf=1;var e=pr();function r(a){return e(a)===a}return ja=r,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var za,Qf;function Br(){if(Qf)return za;Qf=1;var e=ws();return za=e,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xa,Yf;function Fs(){if(Yf)return xa;Yf=1;var e=Br();function r(a){return e(a/2)}return xa=r,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ri,Zf;function Os(){if(Zf)return ri;Zf=1;var e=Fs();return ri=e,ri}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ei,Jf;function Ts(){if(Jf)return ei;Jf=1;var e=Os();function r(a){return a>0?e(a-1):e(a+1)}return ei=r,ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ai,jf;function ii(){if(jf)return ai;jf=1;var e=Ts();return ai=e,ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ni,zf;function Hs(){if(zf)return ni;zf=1;var e=Gr(),r;return e===!0?r=0:r=1,ni=r,ni}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ti,xf;function Gs(){if(xf)return ti;xf=1;var e=Tr(),r=Hr(),a=Hs(),i=new r(1),t=new e(i.buffer);function u(f,n){return i[0]=f,t[a]=n>>>0,i[0]}return ti=u,ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ui,ro;function Zr(){if(ro)return ui;ro=1;var e=Gs();return ui=e,ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vi,eo;function Cs(){if(eo)return vi;eo=1;function e(r){return r|0}return vi=e,vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fi,ao;function io(){if(ao)return fi;ao=1;var e=Cs();return fi=e,fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var oi,no;function ks(){if(no)return oi;no=1;var e=ii(),r=Ga(),a=or(),i=ar();function t(u,f){return f===a?i:f===i?0:f>0?e(f)?u:0:e(f)?r(i,u):i}return oi=t,oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var li,to;function Ws(){if(to)return li;to=1;var e=Er(),r=_r(),a=1072693247,i=1e300,t=1e-300;function u(f,n){var o,v;return v=r(f),o=v&e,o<=a?n<0?i*i:t*t:n>0?i*i:t*t}return li=u,li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var si,uo;function Bs(){if(uo)return si;uo=1;var e=J(),r=ar();function a(i,t){return i===-1?(i-i)/(i-i):i===1?1:e(i)<1==(t===r)?0:r}return si=a,si}/**
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
*/var ci,vo;function fo(){if(vo)return ci;vo=1;var e=20;return ci=e,ci}/**
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
*/var _i,oo;function Ds(){if(oo)return _i;oo=1;function e(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}return _i=e,_i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var qi,lo;function Xs(){if(lo)return qi;lo=1;var e=_r(),r=Zr(),a=Yr(),i=Sr(),t=fo(),u=Ds(),f=1048575,n=1048576,o=1072693248,v=536870912,l=524288,s=9007199254740992,c=.9617966939259756,$=.9617967009544373,_=-7028461650952758e-24,m=[1,1.5],q=[0,.5849624872207642],p=[0,1350039202129749e-23];function y(g,L,I){var P,A,S,M,b,h,d,R,N,T,E,H,F,O,w,V,G,D,K,Y,C,W;return Y=0,I<n&&(L*=s,Y-=53,I=e(L)),Y+=(I>>t)-i|0,C=I&f|0,I=C|o|0,C<=235662?W=0:C<767610?W=1:(W=0,Y+=1,I-=n),L=a(L,I),R=m[W],D=L-R,K=1/(L+R),A=D*K,M=r(A,0),P=(I>>1|v)+l,P+=W<<18,h=a(0,P),d=L-(h-R),b=K*(D-M*h-M*d),S=A*A,G=S*S*u(S),G+=b*(M+A),S=M*M,h=3+S+G,h=r(h,0),d=G-(h-3-S),D=M*h,K=b*h+d*A,T=D+K,T=r(T,0),E=K-(T-D),H=$*T,F=_*T+E*c+p[W],N=q[W],V=Y,O=H+F+N+V,O=r(O,0),w=F-(O-V-N-H),g[0]=O,g[1]=w,g}return qi=y,qi}/**
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
*/var $i,so;function Us(){if(so)return $i;so=1;function e(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}return $i=e,$i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var mi,co;function Vs(){if(co)return mi;co=1;var e=Zr(),r=Us(),a=1.4426950408889634,i=1.4426950216293335,t=19259629911266175e-24;function u(f,n){var o,v,l,s,c,$;return l=n-1,s=l*l*r(l),c=i*l,$=l*t-s*a,v=c+$,v=e(v,0),o=$-(v-c),f[0]=v,f[1]=o,f}return mi=u,mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hi,_o;function Ks(){if(_o)return hi;_o=1;var e=.6931471805599453;return hi=e,hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var di,qo;function $o(){if(qo)return di;qo=1;var e=1048575;return di=e,di}/**
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
*/var pi,mo;function Qs(){if(mo)return pi;mo=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return pi=e,pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var yi,ho;function Ys(){if(ho)return yi;ho=1;var e=_r(),r=Yr(),a=Zr(),i=io(),t=Wr(),u=Ks(),f=Sr(),n=Er(),o=$o(),v=fo(),l=Qs(),s=1048576,c=1071644672,$=.6931471824645996,_=-1904654299957768e-24;function m(q,p,y){var g,L,I,P,A,S,M,b,h,d,R;return d=q&n|0,R=(d>>v)-f|0,h=0,d>c&&(h=q+(s>>R+1)>>>0,R=((h&n)>>v)-f|0,g=(h&~(o>>R))>>>0,I=r(0,g),h=(h&o|s)>>v-R>>>0,q<0&&(h=-h),p-=I),I=y+p,I=a(I,0),A=I*$,S=(y-(I-p))*u+I*_,b=A+S,M=S-(b-A),I=b*b,L=b-I*l(I),P=b*L/(L-2)-(M+b*M),b=1-(P-b),q=e(b),q=i(q),q+=h<<v>>>0,q>>v<=0?b=t(b,h):b=r(b,q),b}return yi=m,yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ri,po;function Zs(){if(po)return Ri;po=1;var e=U(),r=ii(),a=kr(),i=Br(),t=Z(),u=J(),f=Oa(),n=Zr(),o=io(),v=or(),l=ar(),s=Er(),c=ks(),$=Ws(),_=Bs(),m=Xs(),q=Vs(),p=Ys(),y=1072693247,g=1105199104,L=1139802112,I=1083179008,P=1072693248,A=1083231232,S=3230714880,M=31,b=1e300,h=1e-300,d=8008566259537294e-32,R=[0,0],N=[0,0];function T(E,H){var F,O,w,V,G,D,K,Y,C,W,k,tr,rr,X,Q,ur;if(e(E)||e(H))return NaN;if(f.assign(H,R,1,0),D=R[0],K=R[1],K===0){if(H===0)return 1;if(H===1)return E;if(H===-1)return 1/E;if(H===.5)return t(E);if(H===-.5)return 1/t(E);if(H===2)return E*E;if(H===3)return E*E*E;if(H===4)return E*=E,E*E;if(a(H))return _(E,H)}if(f.assign(E,R,1,0),V=R[0],G=R[1],G===0){if(V===0)return c(E,H);if(E===1)return 1;if(E===-1&&r(H))return-1;if(a(E))return E===v?T(-0,-H):H<0?0:l}if(E<0&&i(H)===!1)return(E-E)/(E-E);if(w=u(E),F=V&s|0,O=D&s|0,Y=V>>>M|0,C=D>>>M|0,Y&&r(H)?Y=-1:Y=1,O>g){if(O>L)return $(E,H);if(F<y)return C===1?Y*b*b:Y*h*h;if(F>P)return C===0?Y*b*b:Y*h*h;rr=q(N,w)}else rr=m(N,w,F);if(W=n(H,0),tr=(H-W)*rr[0]+H*rr[1],k=W*rr[0],X=tr+k,f.assign(X,R,1,0),Q=o(R[0]),ur=o(R[1]),Q>=I){if((Q-I|ur)!==0||tr+d>X-k)return Y*b*b}else if((Q&s)>=A&&((Q-S|ur)!==0||tr<=X-k))return Y*h*h;return X=p(Q,k,tr),Y*X}return Ri=T,Ri}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bi,yo;function nr(){if(yo)return bi;yo=1;var e=Zs();return bi=e,bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gi,Ro;function Dr(){if(Ro)return gi;Ro=1;var e=2.718281828459045;return gi=e,gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Li,bo;function yr(){if(bo)return Li;bo=1;var e=2220446049250313e-31;return Li=e,Li}/**
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
*/var Ni,go;function Js(){if(go)return Ni;go=1;function e(r){var a,i,t;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/t)}return Ni=e,Ni}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ii,Lo;function js(){if(Lo)return Ii;Lo=1;var e=U(),r=qr(),a=Z(),i=J(),t=ir(),u=nr(),f=Dr(),n=yr(),o=Js(),v=10.900511;function l(s,c){var $,_,m,q,p,y,g;return e(s)||e(c)?NaN:s<0||c<0?NaN:c===1?1/s:s===1?1/c:(g=s+c,g<n?(p=g/s,p/=c,p):g===s&&c<n?1/c:g===c&&s<n?1/s:(s<c&&(y=c,c=s,s=y),_=s+v-.5,m=c+v-.5,q=g+v-.5,p=o(s)*(o(c)/o(g)),$=s-.5-c,i(c*$)<q*100&&s>100?p*=t($*r(-c/q)):p*=u(_/q,$),q>1e10?p*=u(_/q*(m/q),c):p*=u(_*m/(q*q),c),p*=a(f/m),p))}return Ii=l,Ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ai,No;function f0(){if(No)return Ai;No=1;var e=js();return Ai=e,Ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mi,Io;function zs(){if(Io)return Mi;Io=1;var e=ar();function r(a){return a===0&&1/a===e}return Mi=r,Mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pi,Ao;function xs(){if(Ao)return Pi;Ao=1;var e=zs();return Pi=e,Pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Si,Mo;function rc(){if(Mo)return Si;Mo=1;var e=xs(),r=U(),a=ar();function i(t,u){return r(t)||r(u)?NaN:t===a||u===a?a:t===u&&t===0?e(t)?t:u:t>u?t:u}return Si=i,Si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ei,Po;function Fr(){if(Po)return Ei;Po=1;var e=rc();return Ei=e,Ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wi,So;function ec(){if(So)return wi;So=1;var e=or();function r(a){return a===0&&1/a===e}return wi=r,wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fi,Eo;function wo(){if(Eo)return Fi;Eo=1;var e=ec();return Fi=e,Fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oi,Fo;function ac(){if(Fo)return Oi;Fo=1;var e=wo(),r=U(),a=or();function i(t,u){return r(t)||r(u)?NaN:t===a||u===a?a:t===u&&t===0?e(t)?t:u:t<u?t:u}return Oi=i,Oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ti,Oo;function Nr(){if(Oo)return Ti;Oo=1;var e=ac();return Ti=e,Ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hi,To;function Or(){if(To)return Hi;To=1;var e=17976931348623157e292;return Hi=e,Hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gi,Ho;function Go(){if(Ho)return Gi;Ho=1;var e=2147483647;return Gi=e,Gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ci,Co;function ki(){if(Co)return Ci;Co=1;var e=1.5707963267948966;return Ci=e,Ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wi,ko;function Ir(){if(ko)return Wi;ko=1;var e=3.141592653589793;return Wi=e,Wi}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bi,Wo;function ic(){if(Wo)return Bi;Wo=1;function e(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}return Bi=e,Bi}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Di,Bo;function nc(){if(Bo)return Di;Bo=1;function e(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}return Di=e,Di}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Xi,Do;function tc(){if(Do)return Xi;Do=1;var e=ic(),r=nc();function a(i,t){var u,f,n,o;return o=i*i,n=o*o,f=o*e(o),f+=n*n*r(o),u=.5*o,n=1-u,n+(1-n-u+(o*f-i*t))}return Xi=a,Xi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ui,Xo;function Uo(){if(Xo)return Ui;Xo=1;var e=tc();return Ui=e,Ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Vi,Vo;function uc(){if(Vo)return Vi;Vo=1;var e=-.16666666666666632,r=.00833333333332249,a=-.0001984126982985795,i=27557313707070068e-22,t=-25050760253406863e-24,u=158969099521155e-24;function f(n,o){var v,l,s,c;return c=n*n,s=c*c,v=r+c*(a+c*i)+c*s*(t+c*u),l=c*n,o===0?n+l*(e+c*v):n-(c*(.5*o-l*v)-o-l*e)}return Vi=f,Vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ki,Ko;function Qo(){if(Ko)return Ki;Ko=1;var e=uc();return Ki=e,Ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qi,Yo;function vc(){if(Yo)return Qi;Yo=1;var e=Gr(),r;return e===!0?r=0:r=1,Qi=r,Qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yi,Zo;function fc(){if(Zo)return Yi;Zo=1;var e=Tr(),r=Hr(),a=vc(),i=new r(1),t=new e(i.buffer);function u(f){return i[0]=f,t[a]}return Yi=u,Yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zi,Jo;function oc(){if(Jo)return Zi;Jo=1;var e=fc();return Zi=e,Zi}/**
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
*/var Ji,jo;function lc(){if(jo)return Ji;jo=1;function e(r,a){var i,t;for(i=[],t=0;t<a;t++)i.push(r);return i}return Ji=e,Ji}/**
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
*/var ji,zo;function sc(){if(zo)return ji;zo=1;var e=lc();return ji=e,ji}/**
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
*/var zi,xo;function cc(){if(xo)return zi;xo=1;var e=sc();function r(a){return e(0,a)}return zi=r,zi}/**
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
*/var xi,r6;function _c(){if(r6)return xi;r6=1;var e=cc();return xi=e,xi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var rn,e6;function qc(){if(e6)return rn;e6=1;var e=pr(),r=Wr(),a=_c(),i=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],t=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],u=16777216,f=5960464477539063e-23,n=a(20),o=a(20),v=a(20),l=a(20);function s($,_,m,q,p,y,g,L,I){var P,A,S,M,b,h,d,R,N;for(M=y,N=q[m],R=m,b=0;R>0;b++)A=f*N|0,l[b]=N-u*A|0,N=q[R-1]+A,R-=1;if(N=r(N,p),N-=8*e(N*.125),d=N|0,N-=d,S=0,p>0?(b=l[m-1]>>24-p,d+=b,l[m-1]-=b<<24-p,S=l[m-1]>>23-p):p===0?S=l[m-1]>>23:N>=.5&&(S=2),S>0){for(d+=1,P=0,b=0;b<m;b++)R=l[b],P===0?R!==0&&(P=1,l[b]=16777216-R):l[b]=16777215-R;if(p>0)switch(p){case 1:l[m-1]&=8388607;break;case 2:l[m-1]&=4194303;break}S===2&&(N=1-N,P!==0&&(N-=r(1,p)))}if(N===0){for(R=0,b=m-1;b>=y;b--)R|=l[b];if(R===0){for(h=1;l[y-h]===0;h++);for(b=m+1;b<=m+h;b++){for(I[L+b]=i[g+b],A=0,R=0;R<=L;R++)A+=$[R]*I[L+(b-R)];q[b]=A}return m+=h,s($,_,m,q,p,y,g,L,I)}for(m-=1,p-=24;l[m]===0;)m-=1,p-=24}else N=r(N,-p),N>=u?(A=f*N|0,l[m]=N-u*A|0,m+=1,p+=24,l[m]=A):l[m]=N|0;for(A=r(1,p),b=m;b>=0;b--)q[b]=A*l[b],A*=f;for(b=m;b>=0;b--){for(A=0,h=0;h<=M&&h<=m-b;h++)A+=t[h]*q[b+h];v[m-b]=A}for(A=0,b=m;b>=0;b--)A+=v[b];for(S===0?_[0]=A:_[0]=-A,A=v[0]-A,b=1;b<=m;b++)A+=v[b];return S===0?_[1]=A:_[1]=-A,d&7}function c($,_,m,q){var p,y,g,L,I,P,A,S,M;for(y=4,L=q-1,g=(m-3)/24|0,g<0&&(g=0),P=m-24*(g+1),S=g-L,M=L+y,A=0;A<=M;A++)S<0?n[A]=0:n[A]=i[S],S+=1;for(A=0;A<=y;A++){for(p=0,S=0;S<=L;S++)p+=$[S]*n[L+(A-S)];o[A]=p}return I=y,s($,_,I,o,P,y,g,L,n)}return rn=c,rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var en,a6;function $c(){if(a6)return en;a6=1;var e=Math.round;return en=e,en}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var an,i6;function n6(){if(i6)return an;i6=1;var e=$c();return an=e,an}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var nn,t6;function mc(){if(t6)return nn;t6=1;var e=n6(),r=_r(),a=.6366197723675814,i=1.5707963267341256,t=6077100506506192e-26,u=6077100506303966e-26,f=20222662487959506e-37,n=20222662487111665e-37,o=84784276603689e-45,v=2047;function l(s,c,$){var _,m,q,p,y,g,L;return m=e(s*a),p=s-m*i,y=m*t,L=c>>20|0,$[0]=p-y,_=r($[0]),g=L-(_>>20&v),g>16&&(q=p,y=m*u,p=q-y,y=m*f-(q-p-y),$[0]=p-y,_=r($[0]),g=L-(_>>20&v),g>49&&(q=p,y=m*n,p=q-y,y=m*o-(q-p-y),$[0]=p-y)),$[1]=p-$[0]-y,m}return nn=l,nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var tn,u6;function hc(){if(u6)return tn;u6=1;var e=Er(),r=v0(),a=$o(),i=_r(),t=oc(),u=u0(),f=qc(),n=mc(),o=0,v=16777216,l=1.5707963267341256,s=6077100506506192e-26,c=2*s,$=3*s,_=4*s,m=598523,q=1072243195,p=1073928572,y=1074752122,g=1074977148,L=1075183036,I=1075388923,P=1075594811,A=1094263291,S=[0,0,0],M=[0,0];function b(h,d){var R,N,T,E,H,F,O,w;if(T=i(h)|0,E=T&e|0,E<=q)return d[0]=h,d[1]=0,0;if(E<=y)return(E&a)===m?n(h,E,d):E<=p?T>0?(w=h-l,d[0]=w-s,d[1]=w-d[0]-s,1):(w=h+l,d[0]=w+s,d[1]=w-d[0]+s,-1):T>0?(w=h-2*l,d[0]=w-c,d[1]=w-d[0]-c,2):(w=h+2*l,d[0]=w+c,d[1]=w-d[0]+c,-2);if(E<=P)return E<=L?E===g?n(h,E,d):T>0?(w=h-3*l,d[0]=w-$,d[1]=w-d[0]-$,3):(w=h+3*l,d[0]=w+$,d[1]=w-d[0]+$,-3):E===I?n(h,E,d):T>0?(w=h-4*l,d[0]=w-_,d[1]=w-d[0]-_,4):(w=h+4*l,d[0]=w+_,d[1]=w-d[0]+_,-4);if(E<A)return n(h,E,d);if(E>=r)return d[0]=NaN,d[1]=NaN,0;for(R=t(h),N=(E>>20)-1046,w=u(E-(N<<20|0),R),F=0;F<2;F++)S[F]=w|0,w=(w-S[F])*v;for(S[2]=w,H=3;S[H-1]===o;)H-=1;return O=f(S,M,N,H,1),T<0?(d[0]=-M[0],d[1]=-M[1],-O):(d[0]=M[0],d[1]=M[1],O)}return tn=b,tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var un,v6;function f6(){if(v6)return un;v6=1;var e=hc();return un=e,un}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var vn,o6;function dc(){if(o6)return vn;o6=1;var e=Er(),r=v0(),a=_r(),i=Uo(),t=Qo(),u=f6(),f=1072243195,n=1045430272,o=[0,0];function v(l){var s,c;if(s=a(l),s&=e,s<=f)return s<n?l:t(l,0);if(s>=r)return NaN;switch(c=u(l,o),c&3){case 0:return t(o[0],o[1]);case 1:return i(o[0],o[1]);case 2:return-t(o[0],o[1]);default:return-i(o[0],o[1])}}return vn=v,vn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fn,l6;function Jr(){if(l6)return fn;l6=1;var e=dc();return fn=e,fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var on,s6;function o0(){if(s6)return on;s6=1;var e=2.5066282746310007;return on=e,on}/**
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
*/var ln,c6;function pc(){if(c6)return ln;c6=1;function e(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}return ln=e,ln}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var sn,_6;function yc(){if(_6)return sn;_6=1;var e=o0(),r=nr(),a=ir(),i=pc(),t=143.01608;function u(f){var n,o,v;return n=1/f,n=1+n*i(n),o=a(f),f>t?(v=r(f,.5*f-.25),o=v*(v/o)):o=r(f,f-.5)/o,e*o*n}return sn=u,sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cn,q6;function Rc(){if(q6)return cn;q6=1;var e=.5772156649015329;return cn=e,cn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var _n,$6;function bc(){if($6)return _n;$6=1;var e=Rc();function r(a,i){return i/((1+e*a)*a)}return _n=r,_n}/**
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
*/var qn,m6;function gc(){if(m6)return qn;m6=1;function e(r){var a,i,t;return r===0?1:(r<0?a=-r:a=r,a<=1?(i=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),t=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,i=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),t=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),i/t)}return qn=e,qn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var $n,h6;function Lc(){if(h6)return $n;h6=1;var e=U(),r=Br(),a=wo(),i=J(),t=pr(),u=Jr(),f=ar(),n=or(),o=Ir(),v=yc(),l=bc(),s=gc();function c($){var _,m,q,p;if(r($)&&$<0||$===n||e($))return NaN;if($===0)return a($)?n:f;if($>171.61447887182297)return f;if($<-170.5674972726612)return 0;if(m=i($),m>33)return $>=0?v($):(q=t(m),(q&1)===0?_=-1:_=1,p=m-q,p>.5&&(q+=1,p=m-q),p=m*u(o*p),_*o/(i(p)*v(m)));for(p=1;$>=3;)$-=1,p*=$;for(;$<0;){if($>-1e-9)return l($,p);p/=$,$+=1}for(;$<2;){if($<1e-9)return l($,p);p/=$,$+=1}return $===2?p:($-=2,p*s($))}return $n=c,$n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mn,d6;function Rr(){if(d6)return mn;d6=1;var e=Lc();return mn=e,mn}/**
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
*/var hn,p6;function l0(){if(p6)return hn;p6=1;var e=170;return hn=e,hn}var Nc=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dn,y6;function Ic(){if(y6)return dn;y6=1;var e=U(),r=Br(),a=Rr(),i=ar(),t=l0(),u=Nc;function f(n){return e(n)?NaN:r(n)?n<0?NaN:n<=t?u[n]:i:a(n+1)}return dn=f,dn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pn,R6;function b6(){if(R6)return pn;R6=1;var e=Ic();return pn=e,pn}/**
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
*/var yn,g6;function Ac(){if(g6)return yn;g6=1;function e(r){var a,i,t;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=3847467039331777e-5+r*(3685766504351951e-5+r*(1588920245372942e-5+r*(4059208354298835e-6+r*(6805476611834733e-7+r*(7823975500312005e-8+r*(6246580776401795e-9+r*(341986.3488721347+r*(12287.194511824551+r*(261.61404416416684+r*2.5066282746310007))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=2.5066282746310007+r*(261.61404416416684+r*(12287.194511824551+r*(341986.3488721347+r*(6246580776401795e-9+r*(7823975500312005e-8+r*(6805476611834733e-7+r*(4059208354298835e-6+r*(1588920245372942e-5+r*(3685766504351951e-5+r*3847467039331777e-5))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/t)}return yn=e,yn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Rn,L6;function Mc(){if(L6)return Rn;L6=1;var e=Ac();return Rn=e,Rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bn,N6;function Pc(){if(N6)return bn;N6=1;var e=Mc();return bn=e,bn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gn,I6;function jr(){if(I6)return gn;I6=1;var e=10.900511;return gn=e,gn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ln,A6;function Sc(){if(A6)return Ln;A6=1;var e=Pc(),r=Rr(),a=qr(),i=J(),t=ir(),u=nr(),f=yr(),n=Dr(),o=jr(),v=l0(),l=4269068009004705e289;function s(c,$){var _,m,q;return c<f?$>=v?(m=s($,v-$),m*=c,m*=l,1/m):1/(c*r(c+$)):(q=c+o-.5,c+$===c?i($/q)<f?_=t(-$):_=1:(i($)<10?_=t((.5-c)*a($/q)):_=u(q/(q+$),c-.5),_*=e(c)/e(c+$)),_*=u(n/(q+$),$),_)}return Ln=s,Ln}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Nn,M6;function Ec(){if(M6)return Nn;M6=1;var e=J(),r=pr(),a=Rr(),i=b6(),t=l0(),u=Sc();function f(n,o){var v,l,s;if(n<=0||n+o<=0)return a(n)/a(n+o);if(l=r(o),l===o){if(s=r(n),s===n&&n<=t&&n+o<=t)return i(s-1)/i(l+s-1);if(e(o)<20){if(o===0)return 1;if(o<0){for(n-=1,v=n,o+=1;o!==0;)n-=1,v*=n,o+=1;return v}for(v=1/n,o-=1;o!==0;)n+=1,v/=n,o-=1;return v}}return u(n,o)}return Nn=f,Nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var In,P6;function An(){if(P6)return In;P6=1;var e=Ec();return In=e,In}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mn,S6;function wc(){if(S6)return Mn;S6=1;function e(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}return Mn=e,Mn}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pn,E6;function Fc(){if(E6)return Pn;E6=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}return Pn=e,Pn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Sn,w6;function Oc(){if(w6)return Sn;w6=1;var e=_r(),r=Yr(),a=U(),i=Sr(),t=or(),u=wc(),f=Fc(),n=.6931471803691238,o=19082149292705877e-26,v=0x40000000000000,l=.3333333333333333,s=1048575,c=2146435072,$=1048576,_=1072693248;function m(q){var p,y,g,L,I,P,A,S,M,b,h,d;return q===0?t:a(q)||q<0?NaN:(y=e(q),I=0,y<$&&(I-=54,q*=v,y=e(q)),y>=c?q+q:(I+=(y>>20)-i|0,y&=s,S=y+614244&1048576|0,q=r(q,y|S^_),I+=S>>20|0,A=q-1,(s&2+y)<3?A===0?I===0?0:I*n+I*o:(P=A*A*(.5-l*A),I===0?A-P:I*n-(P-I*o-A)):(b=A/(2+A),d=b*b,S=y-398458|0,h=d*d,M=440401-y|0,L=h*u(h),g=d*f(h),S|=M,P=g+L,S>0?(p=.5*A*A,I===0?A-(p-b*(p+P)):I*n-(p-(b*(p+P)+I*o)-A)):I===0?A-b*(A-P):I*n-(b*(A-P)-I*o-A))))}return Sn=m,Sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var En,F6;function x(){if(F6)return En;F6=1;var e=Oc();return En=e,En}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var wn,O6;function Tc(){if(O6)return wn;O6=1;var e=_r(),r=Uo(),a=Qo(),i=f6(),t=Er(),u=v0(),f=[0,0],n=1072243195,o=1044381696;function v(l){var s,c;if(s=e(l),s&=t,s<=n)return s<o?1:r(l,0);if(s>=u)return NaN;switch(c=i(l,f),c&3){case 0:return r(f[0],f[1]);case 1:return-a(f[0],f[1]);case 2:return-r(f[0],f[1]);default:return a(f[0],f[1])}}return wn=v,wn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fn,T6;function On(){if(T6)return Fn;T6=1;var e=Tc();return Fn=e,Fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tn,H6;function Hc(){if(H6)return Tn;H6=1;var e=U(),r=kr(),a=On(),i=Jr(),t=J(),u=Ga(),f=Ir();function n(o){var v,l;return e(o)?NaN:r(o)?NaN:(l=o%2,v=t(l),v===0||v===1?u(0,l):v<.25?i(f*l):v<.75?(v=.5-v,u(a(f*v),l)):v<1.25?(l=u(1,l)-l,i(f*l)):v<1.75?(v-=1.5,-u(a(f*v),l)):(l-=u(2,l),i(f*l)))}return Tn=n,Tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hn,G6;function Gc(){if(G6)return Hn;G6=1;var e=Hc();return Hn=e,Hn}/**
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
*/var Gn,C6;function Cc(){if(C6)return Gn;C6=1;function e(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}return Gn=e,Gn}/**
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
*/var Cn,k6;function kc(){if(k6)return Cn;k6=1;function e(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}return Cn=e,Cn}/**
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
*/var kn,W6;function Wc(){if(W6)return kn;W6=1;function e(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}return kn=e,kn}/**
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
*/var Wn,B6;function Bc(){if(B6)return Wn;B6=1;function e(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}return Wn=e,Wn}/**
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
*/var Bn,D6;function Dc(){if(D6)return Bn;D6=1;function e(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}return Bn=e,Bn}/**
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
*/var Dn,X6;function Xc(){if(X6)return Dn;X6=1;function e(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}return Dn=e,Dn}/**
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
*/var Xn,U6;function Uc(){if(U6)return Xn;U6=1;function e(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}return Xn=e,Xn}/**
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
*/var Un,V6;function Vc(){if(V6)return Un;V6=1;function e(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}return Un=e,Un}/**
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
*/var Vn,K6;function Kc(){if(K6)return Vn;K6=1;function e(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}return Vn=e,Vn}/**
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
*/var Kn,Q6;function Qc(){if(Q6)return Kn;Q6=1;function e(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}return Kn=e,Kn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Qn,Y6;function Yc(){if(Y6)return Qn;Y6=1;var e=U(),r=kr(),a=J(),i=x(),t=ba(),u=Gc(),f=Ir(),n=ar(),o=Cc(),v=kc(),l=Wc(),s=Bc(),c=Dc(),$=Xc(),_=Uc(),m=Vc(),q=Kc(),p=Qc(),y=.07721566490153287,g=.3224670334241136,L=1,I=-.07721566490153287,P=.48383612272381005,A=-.1475877229945939,S=.06462494023913339,M=-.07721566490153287,b=1,h=.4189385332046727,d=1.4616321449683622,R=4503599627370496,N=72057594037927940,T=13877787807814457e-33,E=1.4616321449683622,H=-.12148629053584961,F=-3638676997039505e-33;function O(w){var V,G,D,K,Y,C,W,k,tr,rr,X,Q,ur;if(e(w)||r(w))return w;if(w===0)return n;if(w<0?(V=!0,w=-w):V=!1,w<T)return-i(w);if(V){if(w>=R||(tr=u(w),tr===0))return n;G=i(f/a(tr*w))}if(w===1||w===2)return 0;if(w<2)switch(w<=.9?(ur=-i(w),w>=d-1+.27?(X=1-w,D=0):w>=d-1-.27?(X=w-(E-1),D=1):(X=w,D=2)):(ur=0,w>=d+.27?(X=2-w,D=0):w>=d-.27?(X=w-E,D=1):(X=w-1,D=2)),D){case 0:Q=X*X,C=y+Q*o(Q),Y=Q*(g+Q*v(Q)),W=X*C+Y,ur+=W-.5*X;break;case 1:Q=X*X,rr=Q*X,C=P+rr*c(rr),Y=A+rr*$(rr),K=S+rr*_(rr),W=Q*C-(F-rr*(Y+X*K)),ur+=H+W;break;case 2:C=X*(M+X*m(X)),Y=b+X*q(X),ur+=-.5*X+C/Y;break}else if(w<8)switch(D=t(w),X=w-D,W=X*(I+X*s(X)),k=L+X*l(X),ur=.5*X+W/k,Q=1,D){case 7:Q*=X+6;case 6:Q*=X+5;case 5:Q*=X+4;case 4:Q*=X+3;case 3:Q*=X+2,ur+=i(Q)}else w<N?(tr=i(w),Q=1/w,X=Q*Q,rr=h+Q*p(X),ur=(w-.5)*(tr-1)+rr):ur=w*(i(w)-1);return V&&(ur=G-ur),ur}return Qn=O,Qn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yn,Z6;function Xr(){if(Z6)return Yn;Z6=1;var e=Yc();return Yn=e,Yn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zn,J6;function Ar(){if(J6)return Zn;J6=1;var e=709.782712893384;return Zn=e,Zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jn,j6;function Zc(){if(j6)return Jn;j6=1;var e=14901161193847656e-24;return Jn=e,Jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jn,z6;function Jc(){if(z6)return jn;z6=1;var e=eval;return jn=e,jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zn,x6;function jc(){if(x6)return zn;x6=1;var e=Jc();function r(){var a;try{e('"use strict"; (function* () {})'),a=!0}catch{a=!1}return a}return zn=r,zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xn,r4;function e4(){if(r4)return xn;r4=1;var e=jc();return xn=e,xn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,a4;function zc(){if(a4)return r1;a4=1;var e=J(),r=yr(),a=1e6;function i(t,u){var f,n,o,v,l,s;if(s={},arguments.length>1&&(s=u),n=s.tolerance||r,v=s.maxTerms||a,l=s.initialValue||0,f=typeof t.next=="function",f===!0){for(o of t)if(l+=o,e(n*l)>=e(o)||--v===0)break}else do o=t(),l+=o;while(e(n*l)<e(o)&&--v);return l}return r1=i,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1,i4;function xc(){if(i4)return e1;i4=1;var e=J(),r=yr(),a=1e6;function i(t,u){var f,n,o,v,l;l={},arguments.length>1&&(l=u),f=l.tolerance||r,o=l.maxTerms||a,v=l.initialValue||0;do n=t(),v+=n;while(e(f*v)<e(n)&&--o);return v}return e1=i,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,n4;function zr(){if(n4)return a1;n4=1;var e=e4(),r=zc(),a=xc(),i;return e()?i=r:i=a,a1=i,a1}/**
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
*/var i1,t4;function r_(){if(t4)return i1;t4=1;function e(r,a){var i=1,t=r,u=a;return f;function f(){var n=i;return i*=t/u,t-=1,n}}return i1=e,i1}/**
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
*/var n1,u4;function e_(){if(u4)return n1;u4=1;var e=zr(),r=r_();function a(i,t){var u,f;return f=r(i,t),u=e(f),u}return n1=a,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var t1,v4;function a_(){if(v4)return t1;v4=1;var e=ir();function r(a,i){var t,u,f,n;if(f=e(-i),u=f,u!==0)for(t=u,n=1;n<a;++n)t/=n,t*=i,u+=t;return u}return t1=r,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,f4;function i_(){if(f4)return u1;f4=1;function e(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}return u1=e,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,o4;function n_(){if(o4)return v1;o4=1;function e(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,l4;function t_(){if(l4)return f1;l4=1;function e(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}return f1=e,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,s4;function u_(){if(s4)return o1;s4=1;function e(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}return o1=e,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,c4;function v_(){if(c4)return l1;c4=1;function e(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}return l1=e,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,_4;function f_(){if(_4)return s1;_4=1;function e(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}return s1=e,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1,q4;function o_(){if(q4)return c1;q4=1;function e(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}return c1=e,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,$4;function l_(){if($4)return _1;$4=1;function e(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}return _1=e,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var q1,m4;function s_(){if(m4)return q1;m4=1;var e=U(),r=ir(),a=Zr(),i=ar(),t=or(),u=i_(),f=n_(),n=t_(),o=u_(),v=v_(),l=f_(),s=o_(),c=l_(),$=1e-300,_=13877787807814457e-33,m=.8450629115104675,q=.12837916709551256,p=1,y=-.0023621185607526594,g=1,L=-.009864944034847148,I=1,P=-.0098649429247001,A=1;function S(M){var b,h,d,R,N,T,E,H;if(e(M))return NaN;if(M===i)return 0;if(M===t)return 2;if(M===0)return 1;if(M<0?(b=!0,h=-M):(b=!1,h=M),h<.84375)return h<_?1-M:(d=M*M,R=q+d*u(d),N=p+d*f(d),T=R/N,M<.25?1-(M+M*T):(R=M*T,R+=M-.5,.5-R));if(h<1.25)return N=h-1,E=y+N*n(N),H=g+N*o(N),b?1+m+E/H:1-m-E/H;if(h<28){if(N=1/(h*h),h<2.857142857142857)R=L+N*v(N),N=I+N*l(N);else{if(M<-6)return 2-$;R=P+N*s(N),N=A+N*c(N)}return d=a(h,0),R=r(-(d*d)-.5625)*r((d-h)*(d+h)+R/N),b?2-R/h:R/h}return b?2-$:$*$}return q1=S,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $1,h4;function s0(){if(h4)return $1;h4=1;var e=s_();return $1=e,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var m1,d4;function c_(){if(d4)return m1;d4=1;var e=s0(),r=Z(),a=ir(),i=Ir();function t(u,f){var n,o,v,l,s;if(l=e(r(f)),l!==0&&u>1){for(o=a(-f)/r(i*f),o*=f,n=.5,o/=n,v=o,s=2;s<u;++s)o/=s-n,o*=f,v+=o;l+=v}return l}return m1=t,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,p4;function Ur(){if(p4)return h1;p4=1;var e=-708.3964185322641;return h1=e,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var d1,y4;function __(){if(y4)return d1;y4=1;var e=ir(),r=nr(),a=x(),i=Ar(),t=Ur();function u(f,n){var o,v;return v=f*a(n),n>=1?v<i&&-n>t?o=r(n,f)*e(-n):f>=1?o=r(n/e(n/f),f):o=e(v-n):v>t?o=r(n,f)*e(-n):n/f<i?o=r(n/e(n/f),f):o=e(v-n),o}return d1=u,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,R4;function b4(){if(R4)return p1;R4=1;function e(r,a){var i,t;if(t=r.length,t<2||a===0)return t===0?0:r[0];for(t-=1,i=r[t]*a+r[t-1],t-=2;t>=0;)i=i*a+r[t],t-=1;return i}return p1=e,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,g4;function q_(){if(g4)return y1;g4=1;var e=Function;return y1=e,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1,L4;function $_(){if(L4)return R1;L4=1;var e=q_();return R1=e,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,N4;function m_(){if(N4)return b1;N4=1;var e=$_(),r=b4();function a(i){var t,u,f,n;if(i.length>500)return o;if(t="return function evalpoly(x){",u=i.length,u===0)t+="return 0.0;";else if(u===1)t+="return "+i[0]+";";else{for(t+="if(x===0.0){return "+i[0]+";}",t+="return "+i[0],f=u-1,n=1;n<u;n++)t+="+x*",n<f&&(t+="("),t+=i[n];for(n=0;n<f-1;n++)t+=")";t+=";"}return t+="}",t+="//# sourceURL=evalpoly.factory.js",new e(t)();function o(v){return r(i,v)}}return b1=a,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,I4;function Mr(){if(I4)return g1;I4=1;var e=fr(),r=b4(),a=m_();return e(r,"factory",a),g1=r,g1}/**
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
*/var L1,A4;function h_(){if(A4)return L1;A4=1;function e(r){var a=-r,i=-1,t=0;return u;function u(){return i*=a,t+=1,i/t}}return L1=e,L1}/**
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
*/var N1,M4;function d_(){if(M4)return N1;M4=1;var e=J(),r=x(),a=yr(),i=zr(),t=h_();function u(f){var n,o;return f<=-1?NaN:(o=e(f),o>.95?r(1+f)-f:o<a?-f*f/2:(n={initialValue:-f},i(t(f),n)))}return N1=u,N1}/**
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
*/var I1,P4;function S4(){if(P4)return I1;P4=1;var e=d_();return I1=e,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,E4;function c0(){if(E4)return A1;E4=1;var e=6.283185307179586;return A1=e,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,w4;function p_(){if(w4)return M1;w4=1;function e(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}return M1=e,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,F4;function y_(){if(F4)return P1;F4=1;function e(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}return P1=e,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,O4;function R_(){if(O4)return S1;O4=1;function e(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}return S1=e,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,T4;function b_(){if(T4)return E1;T4=1;function e(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}return E1=e,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w1,H4;function g_(){if(H4)return w1;H4=1;function e(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}return w1=e,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1,G4;function L_(){if(G4)return F1;G4=1;function e(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}return F1=e,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,C4;function N_(){if(C4)return O1;C4=1;function e(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}return O1=e,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1,k4;function I_(){if(k4)return T1;k4=1;function e(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}return T1=e,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,W4;function A_(){if(W4)return H1;W4=1;function e(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}return H1=e,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var G1,B4;function M_(){if(B4)return G1;B4=1;var e=Mr(),r=S4(),a=s0(),i=Z(),t=ir(),u=c0(),f=p_(),n=y_(),o=R_(),v=b_(),l=g_(),s=L_(),c=N_(),$=I_(),_=A_(),m=[0,0,0,0,0,0,0,0,0,0];function q(p,y){var g,L,I,P,A;return L=(y-p)/p,I=-r(L),P=p*I,A=i(2*I),y<p&&(A=-A),m[0]=f(A),m[1]=n(A),m[2]=o(A),m[3]=v(A),m[4]=l(A),m[5]=s(A),m[6]=c(A),m[7]=$(A),m[8]=_(A),m[9]=-.0005967612901927463,g=e(m,1/p),g*=t(-P)/i(u*p),y<p&&(g=-g),g+=a(i(P))/2,g}return G1=q,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var C1,D4;function P_(){if(D4)return C1;D4=1;function e(r,a){var i=1,t=r,u=a;return f;function f(){var n=i;return t+=1,i*=u/t,n}}return C1=e,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var k1,X4;function U4(){if(X4)return k1;X4=1;var e=zr(),r=P_();function a(i,t,u){var f,n;return u=u||0,n=r(i,t),f=e(n,{initialValue:u}),f}return k1=a,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1,V4;function S_(){if(V4)return W1;V4=1;function e(r){var a,i,t;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/t)}return W1=e,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var B1,K4;function E_(){if(K4)return B1;K4=1;var e=S_();return B1=e,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1,Q4;function _0(){if(Q4)return D1;Q4=1;var e=E_();return D1=e,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var X1,Y4;function w_(){if(Y4)return X1;Y4=1;var e=_0(),r=Xr(),a=Rr(),i=S4(),t=Z(),u=J(),f=ir(),n=nr(),o=Fr(),v=Nr(),l=x(),s=Or(),c=Ar(),$=Ur(),_=jr(),m=Dr();function q(p,y){var g,L,I,P,A,S,M;return I=p+_-.5,M=(y-p-_+.5)/I,p<1?y<=$||p<1/s?f(p*l(y)-y-r(p)):n(y,p)*f(-y)/a(p):(u(M*M*p)<=100&&p>150?(g=p*i(M)+y*(.5-_)/I,g=f(g)):(P=p*l(y/I),A=p-y,v(P,A)<=$||o(P,A)>=c?(L=A/p,v(P,A)/2>$&&o(P,A)/2<c?(S=n(y/I,p/2)*f(A/2),g=S*S):v(P,A)/4>$&&o(P,A)/4<c&&y>p?(S=n(y/I,p/4)*f(A/4),g=S*S,g*=g):L>$&&L<c?g=n(y*f(L)/I,p):g=f(P+A)):g=n(y/I,p)*f(A)),g*=t(I/m)/e(p),g)}return X1=q,X1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var U1,Z4;function F_(){if(Z4)return U1;Z4=1;var e=U(),r=kr(),a=J(),i=Cr(),t=x(),u=nr(),f=ba();function n(o,v){var l,s;if(e(o)||e(v))return NaN;if(v===0)return 0;if(o===0)return-1;if(o<0&&v%2===0&&(o=-o),o>0){if((a(v*(o-1))<.5||a(v)<.2)&&(s=t(o)*v,s<.5))return i(s)}else if(f(v)!==v)return NaN;return l=u(o,v)-1,r(l)||e(l)?NaN:l}return U1=n,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1,J4;function O_(){if(J4)return V1;J4=1;var e=F_();return V1=e,V1}/**
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
*/var K1,j4;function T_(){if(j4)return K1;j4=1;function e(r){var a,i,t;return r===0?-.01803556856784494:(r<0?a=-r:a=r,a<=1?(i=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),t=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,i=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),t=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),i/t)}return K1=e,K1}/**
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
*/var Q1,z4;function H_(){if(z4)return Q1;z4=1;function e(r){var a,i,t;return r===0?.04906224540690395:(r<0?a=-r:a=r,a<=1?(i=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),t=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,i=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),t=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),i/t)}return Q1=e,Q1}/**
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
*/var Y1,x4;function G_(){if(x4)return Y1;x4=1;function e(r){var a,i,t;return r===0?-.029232972183027003:(r<0?a=-r:a=r,a<=1?(i=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),t=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,i=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),t=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),i/t)}return Y1=e,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Z1,r5;function C_(){if(r5)return Z1;r5=1;var e=x(),r=yr(),a=T_(),i=H_(),t=G_(),u=.15896368026733398,f=.5281534194946289,n=.45201730728149414;function o(v,l,s){var c,$,_,m;if(v<r)return-e(v);if(l===0||s===0)return 0;if($=0,v>2){if(v>=3){do v-=1,s-=1,$+=e(v);while(v>=3);s=v-2}return _=s*(v+1),m=a(s),$+=_*u+_*m,$}return v<1&&($+=-e(v),s=l,l=v,v+=1),v<=1.5?(_=i(l),c=l*s,$+=c*f+c*_,$):(_=s*l,m=t(-s),$+=_*n+_*m,$)}return Z1=o,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var J1,e5;function k_(){if(e5)return J1;e5=1;var e=Rr(),r=Cr(),a=qr(),i=U(),t=C_();function u(f){return i(f)?NaN:f<0?f<-.5?e(1+f)-1:r(-a(f)+t(f+2,f+1,f)):f<2?r(t(f+1,f,f-1)):e(1+f)-1}return J1=u,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1,a5;function W_(){if(a5)return j1;a5=1;var e=k_();return j1=e,j1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var z1,i5;function B_(){if(i5)return z1;i5=1;function e(r,a){var i,t,u,f;return i=-a,a=-a,t=r+1,u=1,n;function n(){return f=i/t,i*=a,u+=1,i/=u,t+=1,f}}return z1=e,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var x1,n5;function D_(){if(n5)return x1;n5=1;var e=O_(),r=zr(),a=W_(),i=B_();function t(u,f,n){var o,v,l,s,c;return v=a(u),l=(v+1)/u,s=e(f,u),v-=s,v/=u,c=i(u,f),s+=1,o=n?l:0,v=-s*r(c,{initialValue:(o-v)/s}),n&&(v=-v),[v,l]}return x1=t,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rt,t5;function q0(){if(t5)return rt;t5=1;var e=11754943508222875e-54;return rt=e,rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var et,u5;function X_(){if(u5)return et;u5=1;var e=J(),r=q0(),a=yr(),i=1e6;function t(n,o,v){var l,s,c,$,_,m,q;if(l=typeof n.next=="function",q=l?n.next().value:n(),$=q[1],c=q[0],$===0&&($=r),_=$,m=0,l===!0)do q=n.next().value,q&&(m=q[1]+q[0]*m,m===0&&(m=r),_=q[1]+q[0]/_,_===0&&(_=r),m=1/m,s=_*m,$*=s);while(e(s-1)>o&&--v);else do q=n(),q&&(m=q[1]+q[0]*m,m===0&&(m=r),_=q[1]+q[0]/_,_===0&&(_=r),m=1/m,s=_*m,$*=s);while(q&&e(s-1)>o&&--v);return c/$}function u(n,o,v){var l,s,c,$,_,m;if(l=typeof n.next=="function",m=l?n.next().value:n(),c=m[1],c===0&&(c=r),$=c,_=0,l===!0)do m=n.next().value,m&&(_=m[1]+m[0]*_,_===0&&(_=r),$=m[1]+m[0]/$,$===0&&($=r),_=1/_,s=$*_,c*=s);while(m&&e(s-1)>o&&--v);else do m=n(),m&&(_=m[1]+m[0]*_,_===0&&(_=r),$=m[1]+m[0]/$,$===0&&($=r),_=1/_,s=$*_,c*=s);while(m&&e(s-1)>o&&--v);return c}function f(n,o){var v,l,s;return l={},arguments.length>1&&(l=o),v=l.maxIter||i,s=l.tolerance||a,l.keep?u(n,s,v):t(n,s,v)}return et=f,et}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var at,v5;function U_(){if(v5)return at;v5=1;var e=J(),r=yr(),a=q0(),i=1e6;function t(n,o,v){var l,s,c,$,_,m;m=n(),_=m[1],s=m[0],_===0&&(_=a),c=_,$=0;do m=n(),m&&($=m[1]+m[0]*$,$===0&&($=a),c=m[1]+m[0]/c,c===0&&(c=a),$=1/$,l=c*$,_*=l);while(m&&e(l-1)>o&&--v);return s/_}function u(n,o,v){var l,s,c,$,_;_=n(),$=_[1],$===0&&($=a),s=$,c=0;do _=n(),_&&(c=_[1]+_[0]*c,c===0&&(c=a),s=_[1]+_[0]/s,s===0&&(s=a),c=1/c,l=s*c,$*=l);while(_&&e(l-1)>o&&--v);return $}function f(n,o){var v,l,s;return l={},arguments.length>1&&(l=o),s=l.tolerance||r,v=l.maxIter||i,l.keep?u(n,s,v):t(n,s,v)}return at=f,at}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var it,f5;function o5(){if(f5)return it;f5=1;var e=e4(),r=X_(),a=U_(),i;return e()?i=r:i=a,it=i,it}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var nt,l5;function V_(){if(l5)return nt;l5=1;function e(r,a){var i=a-r+1,t=r,u=0;return f;function f(){return u+=1,i+=2,[u*(t-u),i]}}return nt=e,nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var tt,s5;function c5(){if(s5)return tt;s5=1;var e=o5(),r=V_();function a(i,t){var u=r(i,t);return 1/(t-i+1+e(u))}return tt=a,tt}/**
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
*/var ut,_5;function K_(){if(_5)return ut;_5=1;var e=pr(),r=Rr(),a=J(),i=nr(),t=x(),u=Zc(),f=Or(),n=Ar(),o=e_(),v=a_(),l=c_(),s=__(),c=M_(),$=U4(),_=w_(),m=D_(),q=c5();function p(y,g,L,I){var P,A,S,M,b,h,d,R,N,T,E,H,F,O;switch(d=0,R=I,h=g<30&&g<=y+1&&y<n,h?(F=e(g),N=F===g,S=N?!1:a(F-g)===.5):(N=!1,S=!1),N&&y>.6?(R=!R,A=0):S&&y>.2?(R=!R,A=1):y<u&&g>1?A=6:y>1e3&&(g<y||a(g-50)/y<1)?(R=!R,A=7):y<.5?-.4/t(y)<g?A=2:A=3:y<1.1?y*.75<g?A=2:A=3:(b=!1,L&&g>20&&(T=a((y-g)/g),g>200?20/g>T*T&&(b=!0):T<.4&&(b=!0)),b?A=5:y-1/(3*y)<g?A=2:(A=4,R=!R)),A){case 0:d=v(g,y),L===!1&&(d*=r(g));break;case 1:d=l(g,y),L===!1&&(d*=r(g));break;case 2:d=L?_(g,y):s(g,y),d!==0&&(M=0,P=!1,R&&(M=L?1:r(g),L||d>=1||f*d>M?(M/=d,L||g<1||f/g>M?(M*=-g,P=!0):M=0):M=0),d*=$(g,y,M)/g,P&&(R=!1,d=-d));break;case 3:R=!R,E=m(g,y,R),d=E[0],O=E[1],R=!1,L&&(d/=O);break;case 4:d=L?_(g,y):s(g,y),d!==0&&(d*=q(g,y));break;case 5:d=c(g,y),y>=g&&(R=!R);break;case 6:d=L?i(y,g)/r(g+1):i(y,g)/g,d*=1-g*y/(g+1);break;case 7:d=L?_(g,y):s(g,y),d/=y,d!==0&&(d*=o(g,y));break}return L&&d>1&&(d=1),R&&(H=L?1:r(g),d=H-d),d}return ut=p,ut}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var vt,q5;function Q_(){if(q5)return vt;q5=1;var e=Xr(),r=ir(),a=x(),i=o0(),t=Ar(),u=ar(),f=l0(),n=K_(),o=U4(),v=c5();function l(s,c,$,_){var m,q,p,y;return s<0||c<=0?NaN:(m=$===void 0?!0:$,p=_,c>=f&&!m?(p&&c*4<s?(y=c*a(s)-s,y+=a(v(c,s))):!p&&c>4*s?(y=c*a(s)-s,q=0,y+=a(o(c,s,q)/c)):(y=n(s,c,!0,p),y===0?p?(y=1+1/(12*c)+1/(288*c*c),y=a(y)-c+(c-.5)*a(c),y+=a(i)):(y=c*a(s)-s,q=0,y+=a(o(c,s,q)/c)):y=a(y)+e(c)),y>t?u:r(y)):n(s,c,m,p))}return vt=l,vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ft,$5;function m5(){if($5)return ft;$5=1;var e=Q_();return ft=e,ft}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ot,h5;function Y_(){if(h5)return ot;h5=1;var e=ir(),r=nr(),a=x(),i=Ar(),t=Ur();function u(f,n){var o,v;return v=f*a(n),n>=1?v<i&&-n>t?o=r(n,f)*e(-n):f>=1?o=r(n/e(n/f),f):o=e(v-n):v>t?o=r(n,f)*e(-n):n/f<i?o=r(n/e(n/f),f):o=e(v-n),o}return ot=u,ot}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var lt,d5;function Z_(){if(d5)return lt;d5=1;var e=_0(),r=Xr(),a=Rr(),i=qr(),t=Z(),u=J(),f=ir(),n=nr(),o=Fr(),v=Nr(),l=x(),s=Ar(),c=Ur(),$=jr(),_=Dr();function m(q,p){var y,g,L,I,P,A,S;return L=q+$-.5,S=(p-q-$+.5)/L,q<1?p<=c?f(q*l(p)-p-r(q)):n(p,q)*f(-p)/a(q):(u(S*S*q)<=100&&q>150?(y=q*(i(S)-S)+p*(.5-$)/L,y=f(y)):(I=q*l(p/L),P=q-p,v(I,P)<=c||o(I,P)>=s?(g=P/q,v(I,P)/2>c&&o(I,P)/2<s?(A=n(p/L,q/2)*f(P/2),y=A*A):v(I,P)/4>c&&o(I,P)/4<s&&p>q?(A=n(p/L,q/4)*f(P/4),y=A*A,y*=y):g>c&&g<s?y=n(p*f(g)/L,q):y=f(I+P)):y=n(p/L,q)*f(P)),y*=t(L/_)/e(q),y)}return lt=m,lt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var st,p5;function J_(){if(p5)return st;p5=1;var e=An(),r=b6(),a=m5(),i=qr(),t=J(),u=nr(),f=x(),n=wr(),o=yr(),v=Y_(),l=Z_(),s=new Array(30);function c($,_,m,q,p,y,g){var L,I,P,A,S,M,b,h,d,R,N,T,E,H,F,O,w,V;if(M=_-1,w=$+M/2,q<.35?R=i(-q):R=f(m),V=-w*R,T=l(_,V),T<=n)return p;for(g?(L=T/e($,_),L/=u(w,_)):L=v(_,V)/u(w,_),L*=y,s[0]=1,E=a(V,_,!0,!0),E/=T,A=p+L*E,P=1,b=R/2,b*=b,h=1,N=4*w*w,S=_,F=1;F<s.length;++F){for(P+=2,s[F]=0,d=_-F,I=3,H=1;H<F;++H)d=H*_-F,s[F]+=d*s[F-H]/r(I),I+=2;if(s[F]/=F,s[F]+=M/r(P),E=(S*(S+1)*E+(V+S+1)*h)/N,h*=b,S+=2,O=L*s[F]*E,A+=O,O>1){if(t(O)<t(o*A))break}else if(t(O/o)<t(A))break}return A}return st=c,st}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ct,y5;function j_(){if(y5)return ct;y5=1;function e(r,a,i){var t,u;if(i===0)return 1;for(t=1,u=0;u<i;u++)t*=(r+u)/(a+u);return t}return ct=e,ct}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _t,R5;function z_(){if(R5)return _t;R5=1;var e=J(),r=Fr();function a(i,t){return r(e(i),e(t))}return _t=a,_t}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qt,b5;function x_(){if(b5)return qt;b5=1;var e=z_();return qt=e,qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $t,g5;function rq(){if(g5)return $t;g5=1;var e=J(),r=Nr();function a(i,t){return r(e(i),e(t))}return $t=a,$t}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mt,L5;function eq(){if(L5)return mt;L5=1;var e=rq();return mt=e,mt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ht,N5;function dt(){if(N5)return ht;N5=1;var e=_0(),r=x_(),a=eq(),i=Cr(),t=qr(),u=Z(),f=J(),n=ir(),o=nr(),v=Nr(),l=x(),s=Ar(),c=Ur(),$=jr(),_=Dr();function m(q,p,y,g,L){var I,P,A,S,M,b,h,d,R,N,T,E,H,F;if(!L)return o(y,q)*o(g,p);if(H=q+p,S=q+$-.5,M=p+$-.5,b=H+$-.5,I=e(H),I/=e(q)*e(p),I*=u(M/_),I*=u(S/b),h=(y*p-g*S)/S,d=(g*q-y*M)/M,a(h,d)<.2)if(h*d>0||v(q,p)<1)f(h)<.1?I*=n(q*t(h)):I*=o(y*b/S,q),f(d)<.1?I*=n(p*t(d)):I*=o(g*b/M,p);else if(r(h,d)<.5)P=q<p,A=p/q,P&&A*d<.1||!P&&h/A>.1?(R=i(A*t(d)),R=h+R+R*h,R=q*t(R),I*=n(R)):(R=i(t(h)/A),R=d+R+R*d,R=p*t(R),I*=n(R));else if(f(h)<f(d))if(F=q*t(h)+p*l(g*b/M),F<=c||F>=s){if(F+=l(I),F>=s)return NaN;I=n(F)}else I*=n(F);else if(F=p*t(d)+q*l(y*b/S),F<=c||F>=s){if(F+=l(I),F>=s)return NaN;I=n(F)}else I*=n(F);else if(T=y*b/S,E=g*b/M,h=q*l(T),d=p*l(E),h>=s||h<=c||d>=s||d<=c)if(q<p)if(N=o(E,p/q),R=q*(l(T)+l(N)),R<s&&R>c)I*=o(N*T,q);else{if(d+=h+l(I),d>=s)return NaN;I=n(d)}else if(N=o(T,q/p),R=(l(N)+l(E))*p,R<s&&R>c)I*=o(N*E,p);else{if(d+=h+l(I),d>=s)return NaN;I=n(d)}else I*=o(T,q)*o(E,p);return I}return ht=m,ht}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var pt,I5;function aq(){if(I5)return pt;I5=1;var e=o5(),r=dt(),a={keep:!0,maxIter:1e3};function i(u,f,n,o){var v=0;return l;function l(){var s,c,$;return c=(u+v-1)*(u+f+v-1)*v*(f-v)*n*n,s=u+2*v-1,c/=s*s,$=v,$+=v*(f-v)*n/(u+2*v-1),$+=(u+v)*(u*o-f*n+1+v*(2-n))/(u+2*v+1),v+=1,[c,$]}}function t(u,f,n,o,v,l){var s,c,$;return s=r(u,f,n,o,v),l&&(l[1]=s),s===0?s:($=i(u,f,n,o),c=e($,a),s/c)}return pt=t,pt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yt,A5;function iq(){if(A5)return yt;A5=1;var e=9007199254740991;return yt=e,yt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rt,M5;function nq(){if(M5)return Rt;M5=1;function e(r,a){var i=0,t;if(r===0)return a;if(a===0)return r;for(;(r&1)===0&&(a&1)===0;)r>>>=1,a>>>=1,i+=1;for(;(r&1)===0;)r>>>=1;for(;a;){for(;(a&1)===0;)a>>>=1;r>a&&(t=a,a=r,r=t),a-=r}return r<<i}return Rt=e,Rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bt,P5;function tq(){if(P5)return bt;P5=1;function e(r,a){var i=1,t;if(r===0)return a;if(a===0)return r;for(;r%2===0&&a%2===0;)r/=2,a/=2,i*=2;for(;r%2===0;)r/=2;for(;a;){for(;a%2===0;)a/=2;r>a&&(t=a,a=r,r=t),a-=r}return i*r}return bt=e,bt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gt,S5;function uq(){if(S5)return gt;S5=1;var e=U(),r=Br(),a=ar(),i=or(),t=Go(),u=nq(),f=tq();function n(o,v){return e(o)||e(v)?NaN:o===a||v===a||o===i||v===i?NaN:r(o)&&r(v)?(o<0&&(o=-o),v<0&&(v=-v),o<=t&&v<=t?u(o,v):f(o,v)):NaN}return gt=n,gt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lt,E5;function vq(){if(E5)return Lt;E5=1;var e=uq();return Lt=e,Lt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nt,w5;function fq(){if(w5)return Nt;w5=1;var e=iq(),r=ar(),a=Br(),i=U(),t=ii(),u=pr(),f=vq();function n(o,v){var l,s,c,$,_,m,q;if(i(o)||i(v))return NaN;if(!a(o)||!a(v))return NaN;if(v<0||(s=1,o<0&&(o=-o+v-1,t(v)&&(s*=-1)),v>o))return 0;if(v===0||v===o)return s;if(v===1||v===o-1)return s*o;for(o-v<v&&(v=o-v),q=u(e/o),l=1,_=1;_<=v&&!(l>q);_++)l*=o,l/=_,o-=1;return _>v?s*l:(c=n(o,v-_+1),c===r?s*c:($=n(v,v-_+1),m=f(c,$),c/=m,$/=m,l/=$,s*l*c))}return Nt=n,Nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var It,F5;function oq(){if(F5)return It;F5=1;var e=fq();return It=e,It}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var At,O5;function lq(){if(O5)return At;O5=1;var e=oq(),r=pr(),a=nr(),i=wr();function t(u,f,n,o){var v,l,s,c,$;if(l=a(n,u),l>i)for(c=l,$=r(u-1);$>f;$--)c*=($+1)*o/((u-$)*n),l+=c;else if(s=r(u*n),s<=f+1&&(s=r(f+2)),l=a(n,s)*a(o,u-s),l*=e(r(u),r(s)),l===0)for($=s-1;$>f;$--)l+=a(n,$)*a(o,u-$),l*=e(r(u),r($));else{for(c=l,v=l,$=s-1;$>f;$--)c*=($+1)*o/((u-$)*n),l+=c;for(c=v,$=s+1;$<=u;$++)c*=(u-$+1)*n/($*o),l+=c}return l}return At=t,At}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Mt,T5;function sq(){if(T5)return Mt;T5=1;var e=dt();function r(a,i,t,u,f,n,o){var v,l,s,c;if(v=e(a,i,t,u,n),o&&(o[1]=v),v/=a,v===0)return v;for(s=1,l=1,c=0;c<f-1;++c)l*=(a+i+c)*t/(a+c+1),s+=l;return v*=s,v}return Mt=r,Mt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Pt,H5;function cq(){if(H5)return Pt;H5=1;var e=_0(),r=zr(),a=qr(),i=Z(),t=ir(),u=nr(),f=x(),n=wr(),o=Ar(),v=Ur(),l=jr(),s=Dr(),c={maxTerms:100};function $(m,q,p,y){var g=1-q,L=1;return I;function I(){var P=y/m;return m+=1,y*=g*p/L,L+=1,g+=1,P}}function _(m,q,p,y,g,L,I){var P,A,S,M,b,h,d,R;return g?(d=m+q,A=m+l-.5,S=q+l-.5,M=d+l-.5,P=e(d)/(e(m)*e(q)),b=f(M/S)*(q-.5),h=f(p*M/A)*m,b>v&&b<o&&h>v&&h<o?(m*q<S*10?P*=t((q-.5)*a(m/S)):P*=u(M/S,q-.5),P*=u(p*M/A,m),P*=i(A/s),L&&(L[1]=P*u(I,q))):(P=f(P)+b+h+(f(A)-1)/2,L&&(L[1]=t(P+q*f(I))),P=t(P))):P=u(p,m),P<n?y:(R=$(m,q,p,P),c.initialValue=y,r(R,c))}return Pt=_,Pt}var St,G5;function C5(){if(G5)return St;G5=1;var e=U(),r=Cr(),a=pr(),i=qr(),t=$a(),u=f0(),f=Z(),n=ir(),o=nr(),v=Fr(),l=Nr(),s=Or(),c=wr(),$=Go(),_=ki(),m=Ir(),q=J_(),p=j_(),y=dt(),g=aq(),L=lq(),I=sq(),P=cq(),A=1/m;function S(M,b,h,d,R,N,T,E){var H,F,O,w,V,G,D,K,Y,C,W,k;if(k=1-M,D=E,K=E+T,N[K]=-1,e(M)||M<0||M>1)return N[D]=NaN,N[K]=NaN,N;if(d){if(b<0||h<0)return N[D]=NaN,N[K]=NaN,N;if(b===0){if(h===0)return N[D]=NaN,N[K]=NaN,N;if(h>0)return N[D]=R?0:1,N}else if(h===0&&b>0)return N[D]=R?1:0,N}else if(b<=0||h<=0)return N[D]=NaN,N[K]=NaN,N;return M===0?(b===1?N[K]=1:N[K]=b<1?s/2:c*2,R?(N[D]=d?1:u(b,h),N):(N[D]=0,N)):M===1?(h===1?N[K]=1:N[K]=h<1?s/2:c*2,R?N[D]=0:N[D]=d?1:u(b,h),N):b===.5&&h===.5?(N[K]=A*f(k*M),W=t(f(R?k:M)),W/=_,d||(W*=m),N[D]=W,N):(b===1&&(G=h,h=b,b=G,G=k,k=M,M=G,R=!R),h===1?b===1?(N[D]=R?k:M,N[K]=1,N):(N[K]=b*o(M,b-1),k<.5?W=R?-r(b*i(-k)):n(b*i(-k)):W=R?-(o(M,b)-1):o(M,b),d||(W/=b),N[D]=W,N):(l(b,h)<=1?(M>.5&&(G=h,h=b,b=G,G=k,k=M,M=G,R=!R),v(b,h)<=1?b>=l(.2,h)||o(M,b)<=.9?R?(O=-(d?1:u(b,h)),R=!1,O=-P(b,h,M,O,d,N,k)):O=P(b,h,M,0,d,N,k):(G=h,h=b,b=G,G=k,k=M,M=G,R=!R,k>=.3?R?(O=-(d?1:u(b,h)),R=!1,O=-P(b,h,M,O,d,N,k)):O=P(b,h,M,0,d,N,k):(d?F=1:F=p(b+h,b,20),O=I(b,h,M,k,20,d,N),R?(O-=d?1:u(b,h),R=!1,O=-q(b+20,h,M,k,O,F,d)):O=q(b+20,h,M,k,O,F,d))):h<=1||M<.1&&o(h*M,b)<=.7?R?(O=-(d?1:u(b,h)),R=!1,O=-P(b,h,M,O,d,N,k)):O=P(b,h,M,0,d,N,k):(G=h,h=b,b=G,G=k,k=M,M=G,R=!R,k>=.3?R?(O=-(d?1:u(b,h)),R=!1,O=-P(b,h,M,O,d,N,k)):O=P(b,h,M,0,d,N,k):b>=15?R?(O=-(d?1:u(b,h)),R=!1,O=-q(b,h,M,k,O,1,d)):O=q(b,h,M,k,0,1,d):(d?F=1:F=p(b+h,b,20),O=I(b,h,M,k,20,d,N),R?(O-=d?1:u(b,h),R=!1,O=-q(b+20,h,M,k,O,F,d)):O=q(b+20,h,M,k,O,F,d)))):(b<h?H=b-(b+h)*M:H=(b+h)*k-h,H<0&&(G=h,h=b,b=G,G=k,k=M,M=G,R=!R),h<40?a(b)===b&&a(h)===h&&b<$-100?(Y=b-1,C=h+Y,O=L(C,Y,M,k),d||(O*=u(b,h))):h*M<=.7?R?(O=-(d?1:u(b,h)),R=!1,O=-P(b,h,M,O,d,N,k)):O=P(b,h,M,0,d,N,k):b>15?(C=a(h),C===h&&(C-=1),w=h-C,d?F=1:F=p(b+w,w,C),O=I(w,b,k,M,C,d),O=q(b,w,M,k,O,1,d),O/=F):d?(C=a(h),w=h-C,w<=0&&(C-=1,w+=1),O=I(w,b,k,M,C,d),O+=I(b,w,M,k,20,d),R&&(O-=1),O=q(b+20,w,M,k,O,1,d),R&&(O=-O,R=!1)):O=g(b,h,M,k,d,N):O=g(b,h,M,k,d,N)),N[K]<0&&(N[K]=y(b,h,M,k,!0)),V=k*M,N[K]!==0&&(s*V<N[K]?N[K]=s/2:N[K]/=V),N[D]=R?(d?1:u(b,h))-O:O,N))}return St=S,St}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Et,k5;function _q(){if(k5)return Et;k5=1;var e=C5();function r(a,i,t,u,f){return e(a,i,t,u,f,[0,0],1,0)}return Et=r,Et}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wt,W5;function B5(){if(W5)return wt;W5=1;var e=fr(),r=_q(),a=C5();return e(r,"assign",a),wt=r,wt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ft,D5;function qq(){if(D5)return Ft;D5=1;var e=B5().assign;function r(a,i,t,u,f){var n=[0,0];return u=u!==!1,f=f===!0,e(a,i,t,u,f,n,1,0),n[0]}return Ft=r,Ft}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ot,X5;function xr(){if(X5)return Ot;X5=1;var e=qq();return Ot=e,Ot}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tt,U5;function $q(){if(U5)return Tt;U5=1;var e=xr(),r=U();function a(i,t,u){return r(i)||r(t)||r(u)||t<=0||u<=0?NaN:i<=0?0:i>=1?1:e(i,t,u)}return Tt=a,Tt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ht,V5;function mq(){if(V5)return Ht;V5=1;function e(r){return a;function a(){return r}}return Ht=e,Ht}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gt,K5;function $r(){if(K5)return Gt;K5=1;var e=mq();return Gt=e,Gt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ct,Q5;function hq(){if(Q5)return Ct;Q5=1;var e=$r(),r=xr(),a=U();function i(t,u){if(a(t)||a(u)||t<=0||u<=0)return e(NaN);return f;function f(n){return a(n)?NaN:n<=0?0:n>=1?1:r(n,t,u)}}return Ct=i,Ct}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kt,Y5;function dq(){if(Y5)return kt;Y5=1;var e=fr(),r=$q(),a=hq();return e(r,"factory",a),kt=r,kt}var pq=dq(),yq=br(pq);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wt,Z5;function J5(){if(Z5)return Wt;Z5=1;var e=.9189385332046728;return Wt=e,Wt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Bt,j5;function Rq(){if(j5)return Bt;j5=1;var e=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],r=e.length;function a(i){var t,u,f,n,o;if(i<-1.1||i>1.1)return NaN;for(f=0,n=0,t=2*i,o=0;o<r;o++)u=f,f=n,n=t*f-u+e[o];return(n-u)*.5}return Bt=a,Bt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Dt,z5;function bq(){if(z5)return Dt;z5=1;var e=nr(),r=Rq(),a=9490626562425156e-8,i=3745194030963158e291;function t(u){return u<10?NaN:u>=i?0:u<a?r(2*e(10/u,2)-1)/u:1/(u*12)}return Dt=t,Dt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Xt,x5;function gq(){if(x5)return Xt;x5=1;var e=Xr(),r=qr(),a=Rr(),i=Fr(),t=Nr(),u=x(),f=J5(),n=or(),o=ar(),v=bq();function l(s,c){var $,_,m;return _=t(s,c),m=i(s,c),_<0?NaN:_===0?o:m===o?n:_>=10?($=v(_)+v(m)-v(_+m),-.5*u(m)+f+$+(_-.5)*u(_/(_+m))+m*r(-_/(_+m))):m>=10?($=v(m)-v(_+m),e(_)+$+_-_*u(_+m)+(m-.5)*r(-_/(_+m))):u(a(_)*(a(m)/a(_+m)))}return Xt=l,Xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ut,r7;function e7(){if(r7)return Ut;r7=1;var e=gq();return Ut=e,Ut}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vt,a7;function Lq(){if(a7)return Vt;a7=1;var e=e7(),r=U(),a=qr(),i=ir(),t=x(),u=ar();function f(n,o,v){var l;return r(n)||r(o)||r(v)||o<=0||v<=0?NaN:n<0||n>1?0:n===0?o<1?u:o>1?0:v:n===1?v<1?u:v>1?0:o:(l=(o-1)*t(n),l+=(v-1)*a(-n),l-=e(o,v),i(l))}return Vt=f,Vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kt,i7;function Nq(){if(i7)return Kt;i7=1;var e=$r(),r=e7(),a=U(),i=qr(),t=ir(),u=x(),f=ar();function n(o,v){var l;if(a(o)||a(v)||o<=0||v<=0)return e(NaN);return l=r(o,v),s;function s(c){var $;return a(c)?NaN:c<0||c>1?0:c===0?o<1?f:o>1?0:v:c===1?v<1?f:v>1?0:o:($=-l,$+=(o-1)*u(c),$+=(v-1)*i(-c),t($))}}return Kt=n,Kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qt,n7;function Iq(){if(n7)return Qt;n7=1;var e=fr(),r=Lq(),a=Nq();return e(r,"factory",a),Qt=r,Qt}var Aq=Iq(),Mq=br(Aq);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yt,t7;function Pq(){if(t7)return Yt;t7=1;function e(r){var a,i,t;return r===0?-.0005087819496582806:(r<0?a=-r:a=r,a<=1?(i=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),t=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,i=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),t=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),i/t)}return Yt=e,Yt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zt,u7;function Sq(){if(u7)return Zt;u7=1;function e(r){var a,i,t;return r===0?-.20243350835593876:(r<0?a=-r:a=r,a<=1?(i=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),t=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,i=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),t=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),i/t)}return Zt=e,Zt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jt,v7;function Eq(){if(v7)return Jt;v7=1;function e(r){var a,i,t;return r===0?-.1311027816799519:(r<0?a=-r:a=r,a<=1?(i=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,i=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),i/t)}return Jt=e,Jt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jt,f7;function wq(){if(f7)return jt;f7=1;function e(r){var a,i,t;return r===0?-.0350353787183178:(r<0?a=-r:a=r,a<=1?(i=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,i=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),i/t)}return jt=e,jt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zt,o7;function Fq(){if(o7)return zt;o7=1;function e(r){var a,i,t;return r===0?-.016743100507663373:(r<0?a=-r:a=r,a<=1?(i=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,i=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),t=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),i/t)}return zt=e,zt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var xt,l7;function Oq(){if(l7)return xt;l7=1;var e=U(),r=Z(),a=x(),i=ar(),t=or(),u=Pq(),f=Sq(),n=Eq(),o=wq(),v=Fq(),l=.08913147449493408,s=2.249481201171875,c=.807220458984375,$=.9399557113647461,_=.9836282730102539;function m(q){var p,y,g,L,I;return e(q)?NaN:q===0?i:q===2?t:q===1?0:q>2||q<0?NaN:(q>1?(p=-1,g=2-q):(p=1,g=q),q=1-g,q<=.5?(L=q*(q+10),I=u(q),p*(L*l+L*I)):g>=.25?(L=r(-2*a(g)),g-=.25,I=f(g),p*(L/(s+I))):(g=r(-a(g)),g<3?(y=g-1.125,I=n(y),p*(c*g+I*g)):g<6?(y=g-3,I=o(y),p*($*g+I*g)):(y=g-6,I=v(y),p*(_*g+I*g))))}return xt=m,xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ru,s7;function r0(){if(s7)return ru;s7=1;var e=Oq();return ru=e,ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var eu,c7;function Tq(){if(c7)return eu;c7=1;var e=U(),r=$a(),a=Z(),i=vf(),t=6123233995736766e-32;function u(f){var n;return e(f)?NaN:f<-1||f>1?NaN:f>.5?2*r(a(.5-.5*f)):(n=i-r(f),n+=t,n+=i,n)}return eu=u,eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var au,_7;function Hq(){if(_7)return au;_7=1;var e=Tq();return au=e,au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iu,q7;function nu(){if(q7)return iu;q7=1;var e=1.4142135623730951;return iu=e,iu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tu,$7;function Gq(){if($7)return tu;$7=1;function e(r){return r===0?.16666666666666666:.16666666666666666+r*.16666666666666666}return tu=e,tu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uu,m7;function Cq(){if(m7)return uu;m7=1;function e(r){return r===0?.058333333333333334:.058333333333333334+r*(.06666666666666667+r*.008333333333333333)}return uu=e,uu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,h7;function kq(){if(h7)return vu;h7=1;function e(r){return r===0?.0251984126984127:.0251984126984127+r*(.026785714285714284+r*(.0017857142857142857+r*.0001984126984126984))}return vu=e,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu,d7;function Wq(){if(d7)return fu;d7=1;function e(r){return r===0?.012039792768959435:.012039792768959435+r*(.010559964726631394+r*(-.0011078042328042327+r*(.0003747795414462081+r*27557319223985893e-22)))}return fu=e,fu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ou,p7;function Bq(){if(p7)return ou;p7=1;function e(r){return r===0?.003837005972422639:.003837005972422639+r*(.00610392115600449+r*(-.0016095979637646305+r*(.0005945867404200738+r*(-6270542728876062e-20+r*2505210838544172e-23))))}return ou=e,ou}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,y7;function Dq(){if(y7)return lu;y7=1;function e(r){return r===0?.0032177478835464946:.0032177478835464946+r*(.0010898206731540065+r*(-.0012579159844784845+r*(.0006908420797309686+r*(-.00016376804137220805+r*(154012654012654e-19+r*16059043836821613e-26)))))}return lu=e,lu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su,R7;function Xq(){if(R7)return su;R7=1;function e(r){return r===0?.001743826229834001:.001743826229834001+r*(3353097688001788e-20+r*(-.0007624513544032393+r*(.0006451304695145635+r*(-.000249472580470431+r*(49255746366361444e-21+r*(-39851014346715405e-22+r*7647163731819816e-28))))))}return su=e,su}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cu,b7;function Uq(){if(b7)return cu;b7=1;function e(r){return r===0?.0009647274732138864:.0009647274732138864+r*(-.0003110108632631878+r*(-.00036307660358786886+r*(.0005140660578834113+r*(-.00029133414466938067+r*(9086710793521991e-20+r*(-15303004486655377e-21+r*(10914179173496788e-22+r*28114572543455206e-31)))))))}return cu=e,cu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u,g7;function Vq(){if(g7)return _u;g7=1;function e(r){return r===0?.0005422926281312969:.0005422926281312969+r*(-.0003694266780000966+r*(-.00010230378073700413+r*(.00035764655430568635+r*(-.00028690924218514614+r*(.00012645437628698076+r*(-33202652391372056e-21+r*(4890304529197534e-21+r*(-3123956959982987e-22+r*822063524662433e-32))))))))}return _u=e,_u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var qu,L7;function Kq(){if(L7)return qu;L7=1;var e=An(),r=Mr(),a=Z(),i=Ir(),t=Gq(),u=Cq(),f=kq(),n=Wq(),o=Bq(),v=Dq(),l=Xq(),s=Uq(),c=Vq(),$=0,_=[1,0,0,0,0,0,0,0,0,0];function m(q,p){var y,g;return g=e(q/2,.5)*a(q*i)*(p-.5),y=1/q,_[1]=t(y),_[2]=u(y),_[3]=f(y),_[4]=n(y),_[5]=o(y),_[6]=v(y),_[7]=l(y),_[8]=s(y),_[9]=c(y),$+g*r(_,g*g)}return qu=m,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var $u,N7;function Qq(){if(N7)return $u;N7=1;var e=An(),r=Mr(),a=Z(),i=nr(),t=Ir(),u=[0,0,0,0,0,0,0];function f(n,o){var v,l,s,c,$,_,m,q;return q=e(n/2,.5)*a(n*t)*o,c=n+2,$=n+4,_=n+6,u[0]=1,u[1]=-(n+1)/(2*c),c*=n+2,u[2]=-n*(n+1)*(n+3)/(8*c*$),c*=n+2,u[3]=-n*(n+1)*(n+5)*((3*n+7)*n-2)/(48*c*$*_),c*=n+2,$*=n+4,u[4]=-n*(n+1)*(n+7)*(((((15*n+154)*n+465)*n+286)*n-336)*n+64)/(384*c*$*_*(n+8)),c*=n+2,u[5]=-n*(n+1)*(n+3)*(n+9)*((((((35*n+452)*n+1573)*n+600)*n-2020)*n+928)*n-128)/(1280*c*$*_*(n+8)*(n+10)),c*=n+2,$*=n+4,_*=n+6,u[6]=-n*(n+1)*(n+11)*(((((((((((945*n+31506)*n+425858)*n+2980236)*n+11266745)*n+20675018)*n+7747124)*n-22574632)*n-8565600)*n+18108416)*n-7099392)*n+884736)/(46080*c*$*_*(n+8)*(n+10)*(n+12)),m=a(n),s=i(m*q,1/n),l=s*s,v=r(u,l),v*=m,v/=s,-v}return $u=f,$u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var mu,I7;function Yq(){if(I7)return mu;I7=1;var e=r0(),r=Cr(),a=Z(),i=nr(),t=ki(),u=nu();function f(n,o){var v,l,s,c,$,_,m;return n>1e20?-e(2*o)*u:(v=1/(n-.5),l=48/(v*v),s=((20700*v/l-98)*v-16)*v+96.36,c=((94.5/(l+s)-3)/l+1)*a(v*t)*n,m=i(c*2*o,2/n),m>.05+v?(_=-e(2*o)*u,m=_*_,n<5&&(s+=.3*(n-4.5)*(_+.6)),s+=(((.05*c*_-5)*_-7)*_-2)*_+l,m=(((((.4*m+6.3)*m+36)*m+94.5)/s-m-3)/l+1)*_,m=r(v*m*m)):m=((1/(((n+6)/(n*m)-.089*c-.822)*(n+2)*3)+.5/(n+4))*m-1)*(n+1)/(n+2)+1/m,$=a(n*m),-$)}return mu=f,mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var hu,A7;function Zq(){if(A7)return hu;A7=1;var e=r0(),r=pr(),a=Wr(),i=n6(),t=Hq(),u=Z(),f=J(),n=On(),o=nr(),v=Jr(),l=nu(),s=Ir(),c=Kq(),$=Qq(),_=Yq(),m=268435456,q=1/3,p=106/3,y=.8549879733383485;function g(L,I,P){var A,S,M,b,h,d,R,N,T,E,H,F,O,w,V,G;if(h=0,I>P?(R=P,P=I,I=R,b=!0):b=!1,r(L)===L&&L<20)switch(S=a(1,p),r(L)){case 1:I===.5?h=0:h=-n(s*I)/v(s*I);break;case 2:h=(2*I-1)/u(2*I*P);break;case 4:d=4*I*P,M=u(d),O=4*n(t(M)/3)/M,w=u(O-4),h=I-.5<0?-w:w;break;case 6:if(I<1e-150)return(b?-1:1)*_(L,I);V=4*(I-I*I),G=o(V,q),F=6*(1+y*(1/G-1));do T=F*F,E=T*T,H=F*E,N=F,F=2*(8*V*H-270*T+2187)/(5*(4*V*E-216*F-243));while(f((F-N)/F)>S);F=u(F-L),h=I-.5<0?-F:F;break;default:L>m?h=e(2*I)*l:L<3?(A=.2742-L*.0242143,I>A?h=c(L,I):h=$(L,I)):(A=a(1,i(L/-.654)),I>A?h=_(L,I):h=$(L,I))}else L>m?h=-e(2*I)*l:L<3?(A=.2742-L*.0242143,I>A?h=c(L,I):h=$(L,I)):(A=a(1,i(L/-.654)),I>A?h=_(L,I):h=$(L,I));return b?-h:h}return hu=g,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var du,M7;function Jq(){if(M7)return du;M7=1;var e=Zq();function r(a,i,t){var u,f,n,o;return f=i/2,n=1-f,u=a*2,o=e(u,f,n),t&&(t.value=o*o/(u+o*o)),u/(u+o*o)}return du=r,du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var pu,P7;function jq(){if(P7)return pu;P7=1;var e=Mr(),r=r0(),a=Z(),i=ir(),t=nu(),u=[0,0,0,0,0,0,0],f=[0,0,0,0];function n(o,v,l){var s,c,$,_,m,q,p;return s=r(2*l),s/=-a(o/2),f[0]=s,q=v-o,_=q*q,m=_*q,u[0]=-q*t/2,u[1]=(1-2*q)/8,u[2]=-(q*t/48),u[3]=-1/192,u[4]=-q*t/3840,u[5]=0,u[6]=0,f[1]=e(u,s),u[0]=q*t*(3*q-2)/12,u[1]=(20*_-12*q+1)/128,u[2]=q*t*(20*q-1)/960,u[3]=(16*_+30*q-15)/4608,u[4]=q*t*(21*q+32)/53760,u[5]=(-(32*_)+63)/368640,u[6]=-q*t*(120*q+17)/25804480,f[2]=e(u,s),u[0]=q*t*(-75*_+80*q-16)/480,u[1]=(-1080*m+868*_-90*q-45)/9216,u[2]=q*t*(-1190*_+84*q+373)/53760,u[3]=(-2240*m-2508*_+2100*q-165)/368640,u[4]=0,u[5]=0,u[6]=0,f[3]=e(u,s),$=e(f,1/o),c=$*$,p=-i(-c/2),c===0?.5:(1+$*a((1+p)/c))/2}return pu=n,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var yu,S7;function E7(){if(S7)return yu;S7=1;var e=x(),r=Or(),a=r/4;function i(t,u){return f;function f(n){var o,v,l;return l=1-n,l===0?[-a,-a]:n===0?[-a,-a]:(v=e(n)+u*e(l)+t,o=1/n-u/l,[v,o])}}return yu=i,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ru,w7;function zq(){if(w7)return Ru;w7=1;var e=U();function r(a){return a===0||e(a)?a:a<0?-1:1}return Ru=r,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bu,F7;function $0(){if(F7)return bu;F7=1;var e=zq();return bu=e,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var gu,O7;function T7(){if(O7)return gu;O7=1;var e=$0(),r=J(),a=Wr(),i=Or();function t(u,f,n,o,v,l){var s,c,$,_,m,q,p,y,g,L;g=0,s=0,m=f,_=a(1,1-v),p=i,c=i,$=i,q=l;do{if(s=g,$=c,c=p,y=u(m),g=y[0],L=y[1],q-=1,g===0)break;if(L===0?(s===0&&(m===n?f=o:f=n,s=u(f),p=f-m),e(s)*e(g)<0?p<0?p=(m-n)/2:p=(m-o)/2:p<0?p=(m-o)/2:p=(m-n)/2):p=g/L,r(p*2)>r($)&&(p=p>0?(m-n)/2:(m-o)/2),f=m,m-=p,m<=n){if(p=.5*(f-n),m=f-p,m===n||m===o)break}else if(m>=o&&(p=.5*(f-o),m=f-p,m===n||m===o))break;p>0?o=f:n=f}while(q&&r(m*_)<r(p));return m}return gu=t,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lu,H7;function xq(){if(H7)return Lu;H7=1;function e(r){return r===0?-1:-1+r*(-5+r*5)}return Lu=e,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu,G7;function r$(){if(G7)return Nu;G7=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return Nu=e,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu,C7;function e$(){if(C7)return Iu;C7=1;function e(r){return r===0?7:7+r*(-2+r*(33+r*(-62+r*31)))}return Iu=e,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Au,k7;function a$(){if(k7)return Au;k7=1;function e(r){return r===0?25:25+r*(-52+r*(-17+r*(88+r*(-115+r*46))))}return Au=e,Au}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mu,W7;function i$(){if(W7)return Mu;W7=1;function e(r){return r===0?7:7+r*(12+r*(-78+r*52))}return Mu=e,Mu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pu,B7;function n$(){if(B7)return Pu;B7=1;function e(r){return r===0?-7:-7+r*(2+r*(183+r*(-370+r*185)))}return Pu=e,Pu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Su,D7;function t$(){if(D7)return Su;D7=1;function e(r){return r===0?-533:-533+r*(776+r*(-1835+r*(10240+r*(-13525+r*5410))))}return Su=e,Su}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu,X7;function u$(){if(X7)return Eu;X7=1;function e(r){return r===0?-1579:-1579+r*(3747+r*(-3372+r*(-15821+r*(45588+r*(-45213+r*15071)))))}return Eu=e,Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wu,U7;function v$(){if(U7)return wu;U7=1;function e(r){return r===0?449:449+r*(-1259+r*(-769+r*(6686+r*(-9260+r*3704))))}return wu=e,wu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fu,V7;function f$(){if(V7)return Fu;V7=1;function e(r){return r===0?63149:63149+r*(-151557+r*(140052+r*(-727469+r*(2239932+r*(-2251437+r*750479)))))}return Fu=e,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ou,K7;function o$(){if(K7)return Ou;K7=1;function e(r){return r===0?29233:29233+r*(-78755+r*(105222+r*(146879+r*(-1602610+r*(3195183+r*(-2554139+r*729754))))))}return Ou=e,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tu,Q7;function l$(){if(Q7)return Tu;Q7=1;function e(r){return r===0?1:1+r*(-13+r*13)}return Tu=e,Tu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu,Y7;function s$(){if(Y7)return Hu;Y7=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return Hu=e,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Gu,Z7;function c$(){if(Z7)return Gu;Z7=1;var e=Mr(),r=r0(),a=J(),i=ir(),t=x(),u=Z(),f=Jr(),n=On(),o=E7(),v=T7(),l=xq(),s=r$(),c=e$(),$=a$(),_=i$(),m=n$(),q=t$(),p=u$(),y=v$(),g=f$(),L=o$(),I=l$(),P=s$(),A=[0,0,0,0,0,0],S=[0,0,0,0];function M(b,h,d){var R,N,T,E,H,F,O,w,V,G,D,K,Y,C,W,k,tr,rr,X,Q;return H=r(2*b)/-u(h/2),rr=f(d),tr=n(d),S[0]=H,W=rr*rr,k=tr*tr,Y=rr*tr,K=Y*Y,D=K*Y,G=K*K,V=K*D,w=D*D,O=G*D,A[0]=(2*W-1)/(3*Y),A[1]=-l(W)/(36*K),A[2]=s(W)/(1620*D),A[3]=c(W)/(6480*G),A[4]=$(W)/(90720*V),A[5]=0,S[1]=e(A,H),A[0]=-_(W)/(405*D),A[1]=m(W)/(2592*G),A[2]=-q(W)/(204120*V),A[3]=-p(W)/(2099520*w),A[4]=0,A[5]=0,S[2]=e(A,H),A[0]=y(W)/(102060*V),A[1]=-g(W)/(20995200*w),A[2]=L(W)/(36741600*O),A[3]=0,A[4]=0,A[5]=0,S[3]=e(A,H),F=e(S,1/h),T=tr/rr,T*=T,C=-(F*F)/(2*W)+t(W)+k*t(k)/W,a(F)<.7?(A[0]=W,A[1]=Y,A[2]=(1-2*W)/3,A[3]=I(W)/(36*Y),A[4]=P(W)/(270*K),A[5]=0,Q=e(A,F)):(X=i(C),A[0]=X,A[1]=T,A[2]=0,A[3]=3*T*(3*T+1)/6,A[4]=4*T*(4*T+1)*(4*T+2)/24,A[5]=5*T*(5*T+1)*(5*T+2)*(5*T+3)/120,Q=e(A,X),(Q-W)*F<0&&(Q=1-Q)),F<0?(N=0,R=W):(N=W,R=1),(Q<N||Q>R)&&(Q=(N+R)/2),E=o(-C,T),Q=v(E,Q,N,R,32,100),Q}return Gu=M,Gu}var m0={exports:{}},h0={exports:{}},Cu,J7;function _$(){if(J7)return Cu;J7=1;var e=1e3,r=e*60,a=r*60,i=a*24,t=i*365.25;Cu=function(v,l){l=l||{};var s=typeof v;if(s==="string"&&v.length>0)return u(v);if(s==="number"&&isNaN(v)===!1)return l.long?n(v):f(v);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(v))};function u(v){if(v=String(v),!(v.length>100)){var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(v);if(l){var s=parseFloat(l[1]),c=(l[2]||"ms").toLowerCase();switch(c){case"years":case"year":case"yrs":case"yr":case"y":return s*t;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*a;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function f(v){return v>=i?Math.round(v/i)+"d":v>=a?Math.round(v/a)+"h":v>=r?Math.round(v/r)+"m":v>=e?Math.round(v/e)+"s":v+"ms"}function n(v){return o(v,i,"day")||o(v,a,"hour")||o(v,r,"minute")||o(v,e,"second")||v+" ms"}function o(v,l,s){if(!(v<l))return v<l*1.5?Math.floor(v/l)+" "+s:Math.ceil(v/l)+" "+s+"s"}return Cu}var j7;function q$(){return j7||(j7=1,(function(e,r){r=e.exports=t.debug=t.default=t,r.coerce=o,r.disable=f,r.enable=u,r.enabled=n,r.humanize=_$(),r.names=[],r.skips=[],r.formatters={};var a;function i(v){var l=0,s;for(s in v)l=(l<<5)-l+v.charCodeAt(s),l|=0;return r.colors[Math.abs(l)%r.colors.length]}function t(v){function l(){if(l.enabled){var s=l,c=+new Date,$=c-(a||c);s.diff=$,s.prev=a,s.curr=c,a=c;for(var _=new Array(arguments.length),m=0;m<_.length;m++)_[m]=arguments[m];_[0]=r.coerce(_[0]),typeof _[0]!="string"&&_.unshift("%O");var q=0;_[0]=_[0].replace(/%([a-zA-Z%])/g,function(y,g){if(y==="%%")return y;q++;var L=r.formatters[g];if(typeof L=="function"){var I=_[q];y=L.call(s,I),_.splice(q,1),q--}return y}),r.formatArgs.call(s,_);var p=l.log||r.log||console.log.bind(console);p.apply(s,_)}}return l.namespace=v,l.enabled=r.enabled(v),l.useColors=r.useColors(),l.color=i(v),typeof r.init=="function"&&r.init(l),l}function u(v){r.save(v),r.names=[],r.skips=[];for(var l=(typeof v=="string"?v:"").split(/[\s,]+/),s=l.length,c=0;c<s;c++)l[c]&&(v=l[c].replace(/\*/g,".*?"),v[0]==="-"?r.skips.push(new RegExp("^"+v.substr(1)+"$")):r.names.push(new RegExp("^"+v+"$")))}function f(){r.enable("")}function n(v){var l,s;for(l=0,s=r.skips.length;l<s;l++)if(r.skips[l].test(v))return!1;for(l=0,s=r.names.length;l<s;l++)if(r.names[l].test(v))return!0;return!1}function o(v){return v instanceof Error?v.stack||v.message:v}})(h0,h0.exports)),h0.exports}var z7;function x7(){return z7||(z7=1,(function(e,r){var a={};r=e.exports=q$(),r.log=u,r.formatArgs=t,r.save=f,r.load=n,r.useColors=i,r.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:o(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function i(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}r.formatters.j=function(v){try{return JSON.stringify(v)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function t(v){var l=this.useColors;if(v[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+v[0]+(l?"%c ":" ")+"+"+r.humanize(this.diff),!!l){var s="color: "+this.color;v.splice(1,0,s,"color: inherit");var c=0,$=0;v[0].replace(/%[a-zA-Z%]/g,function(_){_!=="%%"&&(c++,_==="%c"&&($=c))}),v.splice($,0,s)}}function u(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function f(v){try{v==null?r.storage.removeItem("debug"):r.storage.debug=v}catch{}}function n(){var v;try{v=r.storage.debug}catch{}return!v&&typeof process<"u"&&"env"in process&&(v=a.DEBUG),v}r.enable(n());function o(){try{return window.localStorage}catch{}}})(m0,m0.exports)),m0.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ku,rl;function d0(){if(rl)return ku;rl=1;var e=34028234663852886e22;return ku=e,ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,el;function $$(){if(el)return Wu;el=1;var e=x7(),r=m5(),a=J(),i=ir(),t=x(),u=d0(),f=e("gammaincinv:higher_newton");function n(o,v,l,s,c,$,_,m){var q,p,y,g,L,I,P,A,S,M,b,h,d,R;R=o,b=1,h=1,I=v*v,p=o;do{if(R=o,P=R*R,l===0){if(q=(1-v)*t(R)+R+$,q>t(u))return f("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),p;d=i(q)}else d=-_*R;m?(A=r(R,v,!0,!1),y=-d*(A-s)):(S=r(R,v,!0,!0),y=d*(S-c)),d=y,s>1e-120||h>1?(g=.5*(R-v+1)/R,L=(2*P-4*R*v+4*R+2*I-3*v+1)/P,L/=6,o=R+d*(1+d*(g+d*L))):o=R+d,b=a(R/o-1),h+=1,R=o,R<0&&(R=p,h=100)}while(b>2e-14&&h<35);return(b>2e-14||h>99)&&f("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),M=R||0,M}return Wu=n,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bu,al;function m$(){if(al)return Bu;al=1;function e(r){return r===0?0:0+r*(1+r*(1+r*(1.5+r*(2.6666666666666665+r*(5.208333333333333+r*10.8)))))}return Bu=e,Bu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Du,il;function h$(){if(il)return Du;il=1;function e(r){return r===0?1:1+r*(1+r*(.3333333333333333+r*(.027777777777777776+r*(-.003703703703703704+r*(.0002314814814814815+r*5878894767783657e-20)))))}return Du=e,Du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,nl;function tl(){if(nl)return Xu;nl=1;var e=J(),r=ir(),a=x(),i=Mr(),t=m$(),u=h$(),f=1e-8,n=.08333333333333333,o=.008333333333333333,v=[1,0,0,0,0,0];function l(s){var c,$,_,m,q,p,y,g,L;if(L=s*s*.5,s===0?q=0:s<-1?(g=r(-1-L),q=t(g)):s<1?(g=s,q=u(g)):(g=11+L,p=a(g),q=g+p,g=1/g,c=p*p,$=c*p,_=$*p,m=_*p,v[1]=(2-p)*.5,v[2]=(-9*p+6+2*c)/6,v[3]=-(3*$+36*p-22*c-12)*n,v[4]=(60+350*c-300*p-125*$+12*_)/60,v[5]=-(-120-274*_+900*p-1700*c+1125*$+20*m)*o,q+=p*g*i(v,g)),g=1,s>-3.5&&s<-.03||s>.03&&s<40){g=1,y=q;do q=y*(L+a(y))/(y-1),g=e(y/q-1),y=q;while(g>f)}return q}return Xu=l,Xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,ul;function d$(){if(ul)return Uu;ul=1;var e=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function r(a,i){var t,u,f,n,o;u=0,f=0,t=i+i,o=a;do n=f,f=u,u=t*f-n+e[o],o-=1;while(o>=0);return(u-n)/2}return Uu=r,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vu,vl;function p$(){if(vl)return Vu;vl=1;function e(r){return r===0?.025721014990011306:.025721014990011306+r*(.08247596616699963+r*(-.0025328157302663564+r*(.0006099292666946337+r*(-.00033543297638406+r*.000250505279903))))}return Vu=e,Vu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,fl;function y$(){if(fl)return Ku;fl=1;function e(r){return r===0?.08333333333333333:.08333333333333333+r*(-.002777777777777778+r*(.0007936507936507937+r*-.0005952380952380953))}return Ku=e,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,ol;function R$(){if(ol)return Qu;ol=1;var e=Xr(),r=x(),a=J5(),i=q0(),t=d0(),u=d$(),f=p$(),n=y$(),o=.30865217988013566;function v(l){var s;return l<i?t:l<1?e(l+1)-(l+.5)*r(l)+l-a:l<2?e(l)-(l-.5)*r(l)+l-a:l<3?e(l-1)-(l-.5)*r(l)+l-a+r(l-1):l<12?(s=18/(l*l)-1,u(17,s)/(12*l)):(s=1/(l*l),l<1e3?f(s)/(o+s)/l:n(s)/l)}return Qu=v,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yu,ll;function b$(){if(ll)return Yu;ll=1;var e=ir(),r=Rr(),a=x(),i=d0(),t=o0(),u=R$();function f(n){return n>=3?e(u(n)):n>0?r(n)/(e(-n+(n-.5)*a(n))*t):i}return Yu=f,Yu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,sl;function g$(){if(sl)return Zu;sl=1;function e(r){var a,i,t;return r===0?-.3333333333438:(r<0?a=-r:a=r,a<=1?(i=-.3333333333438+r*(-.2070740359969+r*(-.05041806657154+r*(-.004923635739372+r*-4293658292782e-17))),t=1+r*(.7045554412463+r*(.2118190062224+r*(.03048648397436+r*.001605037988091)))):(r=1/r,i=-4293658292782e-17+r*(-.004923635739372+r*(-.05041806657154+r*(-.2070740359969+r*-.3333333333438))),t=.001605037988091+r*(.03048648397436+r*(.2118190062224+r*(.7045554412463+r*1)))),i/t)}return Zu=e,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ju,cl;function L$(){if(cl)return Ju;cl=1;var e=J(),r=x(),a=tl(),i=g$();function t(u){var f;return e(u)<1?i(u):(f=a(u),r(u/(f-1))/u)}return Ju=t,Ju}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,_l;function N$(){if(_l)return ju;_l=1;function e(r){var a,i,t;return r===0?-.0172847633523:(r<0?a=-r:a=r,a<=1?(i=-.0172847633523+r*(-.0159372646475+r*(-.00464910887221+r*(-.00060683488776+r*-614830384279e-17))),t=1+r*(.764050615669+r*(.297143406325+r*(.0579490176079+r*.00574558524851)))):(r=1/r,i=-614830384279e-17+r*(-.00060683488776+r*(-.00464910887221+r*(-.0159372646475+r*-.0172847633523))),t=.00574558524851+r*(.0579490176079+r*(.297143406325+r*(.764050615669+r*1)))),i/t)}return ju=e,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,ql;function I$(){if(ql)return zu;ql=1;function e(r){var a,i,t;return r===0?-.0172839517431:(r<0?a=-r:a=r,a<=1?(i=-.0172839517431+r*(-.0146362417966+r*(-.00357406772616+r*(-.000391032032692+r*249634036069e-17))),t=1+r*(.690560400696+r*(.249962384741+r*(.0443843438769+r*.00424073217211)))):(r=1/r,i=249634036069e-17+r*(-.000391032032692+r*(-.00357406772616+r*(-.0146362417966+r*-.0172839517431))),t=.00424073217211+r*(.0443843438769+r*(.249962384741+r*(.690560400696+r*1)))),i/t)}return zu=e,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu,$l;function A$(){if($l)return xu;$l=1;function e(r){var a,i,t;return r===0?.99994466948:(r<0?a=-r:a=r,a<=1?(i=.99994466948+r*(104.649839762+r*(857.204033806+r*(731.901559577+r*45.5174411671))),t=1+r*(104.526456943+r*(823.313447808+r*(3119.93802124+r*3970.03311219)))):(r=1/r,i=45.5174411671+r*(731.901559577+r*(857.204033806+r*(104.649839762+r*.99994466948))),t=3970.03311219+r*(3119.93802124+r*(823.313447808+r*(104.526456943+r*1)))),i/t)}return xu=e,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rv,ml;function M$(){if(ml)return rv;ml=1;var e=x(),r=N$(),a=I$(),i=A$();function t(u){var f,n;return u<-5?(n=u*u,f=e(-u),(12-n-6*(f*f))/(12*n*u)):u<-2?r(u):u<2?a(u):u<1e3?(n=1/u,i(u)/(-12*u)):-1/(12*u)}return rv=t,rv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ev,hl;function P$(){if(hl)return ev;hl=1;function e(r){var a,i,t;return r===0?.0495346498136:(r<0?a=-r:a=r,a<=1?(i=.0495346498136+r*(.0299521337141+r*(.00688296911516+r*(.000512634846317+r*-201411722031e-16))),t=1+r*(.759803615283+r*(.261547111595+r*(.0464854522477+r*.00403751193496)))):(r=1/r,i=-201411722031e-16+r*(.000512634846317+r*(.00688296911516+r*(.0299521337141+r*.0495346498136))),t=.00403751193496+r*(.0464854522477+r*(.261547111595+r*(.759803615283+r*1)))),i/t)}return ev=e,ev}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var av,dl;function S$(){if(dl)return av;dl=1;function e(r){var a,i,t;return r===0?.00452313583942:(r<0?a=-r:a=r,a<=1?(i=.00452313583942+r*(.00120744920113+r*(-789724156582e-16+r*(-504476066942e-16+r*-535770949796e-17))),t=1+r*(.912203410349+r*(.405368773071+r*(.0901638932349+r*.00948935714996)))):(r=1/r,i=-535770949796e-17+r*(-504476066942e-16+r*(-789724156582e-16+r*(.00120744920113+r*.00452313583942))),t=.00948935714996+r*(.0901638932349+r*(.405368773071+r*(.912203410349+r*1)))),i/t)}return av=e,av}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iv,pl;function E$(){if(pl)return iv;pl=1;function e(r){var a,i,t;return r===0?.00439937562904:(r<0?a=-r:a=r,a<=1?(i=.00439937562904+r*(.000487225670639+r*(-.000128470657374+r*(529110969589e-17+r*15716677175e-17))),t=1+r*(.794435257415+r*(.333094721709+r*(.0703527806143+r*.00806110846078)))):(r=1/r,i=15716677175e-17+r*(529110969589e-17+r*(-.000128470657374+r*(.000487225670639+r*.00439937562904))),t=.00806110846078+r*(.0703527806143+r*(.333094721709+r*(.794435257415+r*1)))),i/t)}return iv=e,iv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nv,yl;function w$(){if(yl)return nv;yl=1;function e(r){var a,i,t;return r===0?-.0011481191232:(r<0?a=-r:a=r,a<=1?(i=-.0011481191232+r*(-.112850923276+r*(1.51623048511+r*(-.218472031183+r*.0730002451555))),t=1+r*(14.2482206905+r*(69.7360396285+r*(218.938950816+r*277.067027185)))):(r=1/r,i=.0730002451555+r*(-.218472031183+r*(1.51623048511+r*(-.112850923276+r*-.0011481191232))),t=277.067027185+r*(218.938950816+r*(69.7360396285+r*(14.2482206905+r*1)))),i/t)}return nv=e,nv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tv,Rl;function F$(){if(Rl)return tv;Rl=1;function e(r){var a,i,t;return r===0?-.000145727889667:(r<0?a=-r:a=r,a<=1?(i=-.000145727889667+r*(-.290806748131+r*(-13.308504545+r*(199.722374056+r*-11.4311378756))),t=1+r*(139.612587808+r*(2189.01116348+r*(7115.24019009+r*45574.6081453)))):(r=1/r,i=-11.4311378756+r*(199.722374056+r*(-13.308504545+r*(-.290806748131+r*-.000145727889667))),t=45574.6081453+r*(7115.24019009+r*(2189.01116348+r*(139.612587808+r*1)))),i/t)}return tv=e,tv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uv,bl;function O$(){if(bl)return uv;bl=1;var e=x(),r=P$(),a=S$(),i=E$(),t=w$(),u=F$();function f(n){var o,v;return n<-8?(o=n*n,v=e(-n)/n,(-30+n*v*(6*o*v*v-12+o))/(12*n*o*o)):n<-4?r(n)/(n*n):n<-2?a(n):n<2?i(n):n<10?(o=1/n,t(o)/(n*n)):n<100?(o=1/n,u(o)/(n*n)):-e(n)/(12*n*n*n)}return uv=f,uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vv,gl;function T$(){if(gl)return vv;gl=1;var e=x7(),r=Mr(),a=Xr(),i=r0(),t=Rr(),u=Z(),f=J(),n=ir(),o=Nr(),v=nr(),l=x(),s=o0(),c=d0(),$=c0(),_=$$(),m=tl(),q=b$(),p=L$(),y=M$(),g=O$(),L=e("gammaincinv:compute"),I=.5,P=.3333333333333333,A=.25,S=.2,M=.16666666666666666,b=.08333333333333333,h=.041666666666666664,d=[0,0,0,0,0];function R(N,T,E){var H,F,O,w,V,G,D,K,Y,C,W,k,tr,rr,X,Q,ur,er,Vr,hr,j,gr,lr,Pr,i0,B,z,i2,T8,H8,n2,t2,u2,v2,G8,sr,vr,f2,cr,Lr,dr,o2,l2,s2;if(T<I?(w=!0,V=T,o2=-1):(w=!1,V=E,o2=1),cr=0,f(N-1)<1e-4&&(Lr=0,w?T<.001?(t2=T*T,i2=t2*T,n2=i2*T,hr=n2*T,Vr=hr*T,j=T+t2*I+i2*P+n2*A+hr*S+Vr*M):j=-l(1-T):j=-l(E),N===1?(cr=2,v2=j):(O=a(N),cr=1)),E<1e-30&&N<I&&(Lr=0,j=-l(E*t(N))+(N-1)*l(-l(E*t(N))),cr=1,O=a(N)),N>1&&N<500&&T<1e-80){for(Lr=0,G=1/N,H=1/(N+1),j=(a(N+1)+l(T))*G,j=n(j),rr=j,f2=0;f2<10;f2++)j=rr*n(j*G)*v(1-j*H,G);cr=1,O=a(N)}if(D=1/N*(l(T)+a(N+1)),D<l(S*(1+N))&&cr===0&&(dr=n(D),Lr=0,gr=N*N,u2=gr*N,T8=u2*N,X=N+1,W=X*X,C=X*W,Y=W*W,Q=N+2,K=Q*Q,ur=N+3,d[0]=1,d[1]=1/X,d[2]=I*(3*N+5)/(W*Q),d[3]=P*(31+8*gr+33*N)/(C*Q*ur),d[4]=h*(2888+1179*u2+125*T8+3971*gr+5661*N)/(Y*K*ur*(N+4)),j=dr*r(d,dr),O=a(N),cr=1),N<10&&cr===0&&(k=u(N)/(q(N)*s),tr=o(.02,k),E<tr&&(Lr=0,sr=1-N,B=sr*sr,z=B*sr,er=u(-2/N*l(E/k)),j=N*m(er),vr=l(j),j>5?(lr=vr*vr,Pr=lr*vr,i0=Pr*vr,dr=1/j,d[0]=vr-1,d[1]=(3*sr-2*sr*vr+lr-2*vr+2)*I,d[2]=(24*sr*vr-11*B-24*sr-6*lr+12*vr-12-9*sr*lr+6*B*vr+2*Pr)*M,d[3]=(-12*z*vr+8.04*sr*lr-114*B*vr+(72+36*lr)+(3*i0-72*vr+162)*(sr-168*sr*vr)-(12*Pr+25*z)-(22*sr*Pr+36*B*lr+120*B))*b,d[4]=0,j=j-vr+sr*dr*r(d,dr)):(dr=1/j,lr=vr*vr,G8=vr-1,l2=vr-sr*dr*G8,l2<j&&(j-=l2)),O=a(N),cr=1)),f(V-I)<1e-5&&cr===0&&(Lr=0,G=1/N,j=N-P+(.019753086419753086+.007211444248481286*G)*G,O=a(N),cr=1),N<1&&cr===0&&(Lr=0,w?j=n(1/N*(l(V)+a(N+1))):j=n(1/N*(l(1-V)+a(N+1))),O=a(N),cr=1),cr===0)if(Lr=1,G=1/N,dr=i(2*V),er=o2*dr/u(N*I),dr<c)er+=(p(er)+(y(er)+g(er)*G)*G)*G,j=N*m(er),s2=er,H8=-u(N/$)*n(-I*N*s2*s2)/q(N),F=1/H8;else return L("Warning: Overflow problems in one or more steps of the computation."),NaN;return cr<2&&(v2=_(j,N,Lr,T,E,O,F,w)),v2}return vv=R,vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fv,Ll;function H$(){if(Ll)return fv;Ll=1;var e=U(),r=q0(),a=ar(),i=T$();function t(u,f,n){return e(u)||e(f)?NaN:f<r?NaN:u>1||u<0?NaN:n===!0?u===0?a:u===1?0:i(f,1-u,u):u===0?0:u===1?a:i(f,u,1-u)}return fv=t,fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ov,Nl;function G$(){if(Nl)return ov;Nl=1;var e=H$();return ov=e,ov}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lv,Il;function C$(){if(Il)return lv;Il=1;var e=5e-324;return lv=e,lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var sv,Al;function k$(){if(Al)return sv;Al=1;var e=G$(),r=x(),a=Z(),i=C$(),t=E7(),u=T7();function f(n,o,v,l){var s,c,$,_,m,q,p,y,g,L,I,P,A,S,M,b,h,d,R,N,T,E,H,F,O,w,V,G,D,K;return v<l?m=e(v,o,!0):m=e(l,o,!1),m/=n,S=o/n,G=a(1+S),d=G*G,R=d*G,N=d*d,T=R*d,E=R*R,H=N*R,F=N*N,O=T*N,p=T*T,V=m-S,M=V*V,b=M*V,h=M*M,w=G+1,y=w*w,g=w*y,L=y*y,I=(G+2)*(G-1)/(3*G),I+=(R+9*d+21*G+5)*V/(36*d*w),I-=(N-13*R+69*d+167*G+46)*M/(1620*y*R),I-=(7*T+21*N+70*R+26*d-93*G-31)*b/(6480*g*N),I-=(75*E+202*T+188*N-888*R-1345*d+118*G+138)*h/(272160*L*T),P=(28*N+131*R+402*d+581*G+208)*(G-1)/(1620*w*R),P-=(35*E-154*T-623*N-1636*R-3983*d-3514*G-925)*V/(12960*y*N),P-=(2132*H+7915*E+16821*T+35066*N+87490*R+141183*d+95993*G+21640)*M/(816480*T*g),P-=(11053*F+53308*H+117010*E+163924*T+116188*N-258428*R-677042*d-481940*G-105497)*b/(14696640*L*E),A=-((3592*H+8375*E-1323*T-29198*N-89578*R-154413*d-116063*G-29632)*(G-1))/(816480*T*y),A-=(442043*O+2054169*F+3803094*H+3470754*E+2141568*T-2393568*N-19904934*R-34714674*d-23128299*G-5253353)*V/(146966400*E*g),A-=(116932*p+819281*O+2378172*F+4341330*H+6806004*E+10622748*T+18739500*N+30651894*R+30869976*d+15431867*G+2919016)*M/(146966400*L*H),q=m+I/n+P/(n*n)+A/(n*n*n),q<=0&&(q=i),D=q-S*r(q)+(1+S)*r(1+S)-S,s=1/(1+S),$=q<S?s:0,_=q<S?1:s,K=($+_)/2,c=t(D,S),u(c,K,$,_,32,100)}return sv=f,sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var cv,Ml;function W$(){if(Ml)return cv;Ml=1;var e=J(),r=Wr(),a=$0(),i=Fr(),t=Or();function u(f,n,o,v,l,s){var c,$,_,m,q,p,y,g,L,I,P,A,S,M,b,h;M=0,$=!1,p=n,q=r(1,1-l),L=i(1e7*n,1e7),y=0,_=L,m=L,g=s;do{if(y=M,m=_,_=L,S=f(p),M=S[0],b=S[1],h=S[2],g-=1,M===0)break;if(b===0?(y===0&&(p===o?n=v:n=o,y=f(n),L=n-p),a(y)*a(M)<0?L<0?L=(p-o)/2:L=(p-v)/2:L<0?L=(p-v)/2:L=(p-o)/2):h===0?L=M/b:(I=2*M,A=2*b-M*(h/b),e(A)<1&&e(I)>=e(A)*t?L=M/b:L=I/A,L*b/M<0&&(L=M/b,e(L)>2*e(n)&&(L=(L<0?-1:1)*2*e(n)))),c=e(L/m),c>.8&&c<2&&(L=L>0?(p-o)/2:(p-v)/2,e(L)>p&&(L=a(L)*p),m=L*3),n=p,p-=L,p<o){if(e(o)<1&&e(p)>1&&t/e(p)<e(o)?P=1e3:P=p/o,e(P)<1&&(P=1/P),!$&&P>0&&P<3)L=.99*(n-o),p=n-L,$=!0;else if(L=(n-o)/2,p=n-L,p===o||p===v)break}else if(p>v){if(e(v)<1&&e(p)>1&&t/e(p)<e(v)?P=1e3:P=p/v,e(P)<1&&(P=1/P),!$&&P>0&&P<3)L=.99*(n-v),p=n-L,$=!0;else if(L=(n-v)/2,p=n-L,p===o||p===v)break}L>0?v=n:o=n}while(g&&e(p*q)<e(L));return p}return cv=u,cv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var _v,Pl;function B$(){if(Pl)return _v;Pl=1;var e=B5().assign,r=J(),a=Or(),i=wr();function t(u,f,n,o){return v;function v(l){var s,c,$,_,m;return m=1-l,s=[0,0],e(l,u,f,!0,o,s,1,0),_=s[0]-n,c=s[1],o&&(c=-c),m===0&&(m=i*64),l===0&&(l=i*64),$=c*(-(m*u)+(f-2)*l+1),r($)<m*l*a&&($/=m*l),o&&($=-$),c===0&&(c=(o?-1:1)*i*64),[_,c,$]}}return _v=t,_v}var qv,Sl;function D$(){if(Sl)return qv;Sl=1;var e=Mr(),r=xr(),a=Cr(),i=qr(),t=$a(),u=f0(),f=Z(),n=J(),o=ir(),v=nr(),l=Jr(),s=Fr(),c=Nr(),$=x(),_=wr(),m=ki(),q=yr(),p=Jq(),y=jq(),g=c$(),L=k$(),I=W$(),P=B$(),A=32,S=1e3,M=[0,0,0,0,0];function b(h,d,R,N){var T,E,H,F,O,w,V,G,D,K,Y,C,W,k,tr,rr,X,Q,ur,er,Vr,hr,j,gr,lr,Pr,i0,B,z;if(E=!1,N===0)return[1,0];if(R===0)return[0,1];if(h===1){if(d===1)return[R,1-R];C=d,d=h,h=C,C=N,N=R,R=C,E=!0}if(B=0,F=0,w=1,h===.5){if(d===.5)return B=l(R*m),B*=B,z=l(N*m),z*=z,[B,z];d>.5&&(C=d,d=h,h=C,C=N,N=R,R=C,E=!E)}if(d===.5&&h>=.5&&R!==1)Vr={},B=p(h,R,Vr),z=Vr.value;else{if(d===1)return R<N?h>1?(B=v(R,1/h),z=-a($(R)/h)):(B=v(R,1/h),z=1-B):(B=o(i(-N)/h),z=-a(i(-N)/h)),E&&(C=z,z=B,B=C),[B,z];if(h+d>5)R>.5&&(C=d,d=h,h=C,C=N,N=R,R=C,E=!E),D=c(h,d),G=s(h,d),f(D)>G-D&&D>5?(B=y(h,d,R),z=1-B):(lr=h+d,O=t(f(h/lr)),H=D/lr,H>=.2&&H<=.8&&lr>=10?(Y=v(R,1/h),Y<.0025&&h+d<200?B=Y*v(h*u(h,d),1/h):B=g(R,lr,O),z=1-B):(h<d&&(C=d,d=h,h=C,C=N,N=R,R=C,E=!E),K=0,d<2&&(K=u(h,d)),K===0?z=1:(z=v(d*N*K,1/d),B=1-z)),z>1e-5&&(B=L(h,d,R,N),z=1-B));else if(h<1&&d<1){if(er=(1-h)/(2-h-d),rr=r(er,h,d)-R,n(rr)/R<q*3)return E?[1-er,er]:[er,1-er];rr<0&&(C=d,d=h,h=C,C=N,N=R,R=C,E=!E,er=1-er),ur=v(h*R*u(h,d),1/h),B=ur/(1+ur),z=1/(1+ur),B>er&&(B=er),w=er}else h>1&&d>1?(er=(h-1)/(h+d-2),W=(d-1)/(h+d-2),Q=r(er,h,d)-R,Q<0&&(C=d,d=h,h=C,C=N,N=R,R=C,C=W,W=er,er=C,E=!E),X=$(R*h*u(h,d))/h,B=o(X),z=B<.9?1-B:-a(X),d<h&&B<.2&&(k=h-1,tr=d-1,hr=h*h,j=h*hr,gr=d*d,M[0]=0,M[1]=1,M[2]=tr/k,k*=k,M[3]=tr*(3*h*d+5*d+hr-h-4)/(2*(h+2)*k),k*=h+1,M[4]=tr*(33*h*gr+31*gr+8*hr*gr-30*h*d-47*d+11*hr*d+6*j*d+18+4*h-j+hr*hr-10*hr),M[4]/=3*(h+3)*(h+2)*k,B=e(M,B)),B>er&&(B=er),w=er):(d<h&&(C=d,d=h,h=C,C=N,N=R,R=C,E=!E),v(R,1/h)<.5?(B=v(R*h*u(h,d),1/h),B===0&&(B=_),z=1-B):(z=v(1-v(R,d*u(h,d)),1/d),z===0&&(z=_),B=1-z))}return B>.5&&(C=d,d=h,h=C,C=N,N=R,R=C,C=z,z=B,B=C,E=!E,Pr=1-w,i0=1-F,F=Pr,w=i0),F===0&&(E?(F=q,B<F&&(B=F)):F=_,B<F&&(B=F)),T=A,B<1e-50&&(h<1||d<1)&&(T*=3,T/=2),V=P(h,d,R<N?R:N,R>=N),B=I(V,B,F,w,T,S),B===F&&(B=0),E?[1-B,B]:[B,1-B]}return qv=b,qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $v,El;function mv(){if(El)return $v;El=1;var e=D$();return $v=e,$v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hv,wl;function X$(){if(wl)return hv;wl=1;var e=U(),r=mv();function a(i,t,u,f){return e(i)||e(t)||e(u)?NaN:t<=0||u<=0?NaN:i<0||i>1?NaN:f?r(t,u,1-i,i)[0]:r(t,u,i,1-i)[0]}return hv=a,hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dv,Fl;function Ol(){if(Fl)return dv;Fl=1;var e=X$();return dv=e,dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pv,Tl;function U$(){if(Tl)return pv;Tl=1;var e=Ol(),r=U();function a(i,t,u){return r(i)||r(t)||r(u)||t<=0||u<=0||i<0||i>1?NaN:e(i,t,u)}return pv=a,pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yv,Hl;function V$(){if(Hl)return yv;Hl=1;var e=$r(),r=Ol(),a=U();function i(t,u){if(a(t)||a(u)||t<=0||u<=0)return e(NaN);return f;function f(n){return a(n)||n<0||n>1?NaN:r(n,t,u)}}return yv=i,yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rv,Gl;function K$(){if(Gl)return Rv;Gl=1;var e=fr(),r=U$(),a=V$();return e(r,"factory",a),Rv=r,Rv}var Q$=K$(),Y$=br(Q$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bv,Cl;function Z$(){if(Cl)return bv;Cl=1;var e=s0(),r=Z(),a=U();function i(t,u,f){var n,o;return a(t)||a(u)||a(f)||f<0?NaN:f===0?t<u?0:1:(n=f*r(2),o=t-u,.5*e(-o/n))}return bv=i,bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gv,kl;function J$(){if(kl)return gv;kl=1;var e=U();function r(a,i){return e(a)||e(i)?NaN:a<i?0:1}return gv=r,gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv,Wl;function j$(){if(Wl)return Lv;Wl=1;var e=$r(),r=U();function a(i){if(r(i))return e(NaN);return t;function t(u){return r(u)?NaN:u<i?0:1}}return Lv=a,Lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nv,Bl;function z$(){if(Bl)return Nv;Bl=1;var e=fr(),r=J$(),a=j$();return e(r,"factory",a),Nv=r,Nv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv,Dl;function x$(){if(Dl)return Iv;Dl=1;var e=$r(),r=z$().factory,a=U(),i=Z(),t=s0();function u(f,n){var o;if(a(f)||a(n)||n<0)return e(NaN);if(n===0)return r(f);return o=n*i(2),v;function v(l){var s;return a(l)?NaN:(s=l-f,.5*t(-s/o))}}return Iv=u,Iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av,Xl;function rm(){if(Xl)return Av;Xl=1;var e=fr(),r=Z$(),a=x$();return e(r,"factory",a),Av=r,Av}var em=rm(),am=br(em);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mv,Ul;function im(){if(Ul)return Mv;Ul=1;var e=ir(),r=nr(),a=Z(),i=c0(),t=ar(),u=U();function f(n,o,v){var l,s,c;return u(n)||u(o)||u(v)||v<0?NaN:v===0?n===o?t:0:(l=r(v,2),s=1/a(l*i),c=-1/(2*l),s*e(c*r(n-o,2)))}return Mv=f,Mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv,Vl;function nm(){if(Vl)return Pv;Vl=1;var e=ar(),r=U();function a(i,t){return r(i)||r(t)?NaN:i===t?e:0}return Pv=a,Pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv,Kl;function tm(){if(Kl)return Sv;Kl=1;var e=$r(),r=ar(),a=U();function i(t){if(a(t))return e(NaN);return u;function u(f){return a(f)?NaN:f===t?r:0}}return Sv=i,Sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ev,Ql;function um(){if(Ql)return Ev;Ql=1;var e=fr(),r=nm(),a=tm();return e(r,"factory",a),Ev=r,Ev}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wv,Yl;function vm(){if(Yl)return wv;Yl=1;var e=$r(),r=um().factory,a=U(),i=Z(),t=ir(),u=nr(),f=c0();function n(o,v){var l,s,c;if(a(o)||a(v)||v<0)return e(NaN);if(v===0)return r(o);return l=u(v,2),s=1/i(l*f),c=-1/(2*l),$;function $(_){return a(_)?NaN:s*t(c*u(_-o,2))}}return wv=n,wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv,Zl;function fm(){if(Zl)return Fv;Zl=1;var e=fr(),r=im(),a=vm();return e(r,"factory",a),Fv=r,Fv}var om=fm(),lm=br(om);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ov,Jl;function sm(){if(Jl)return Ov;Jl=1;function e(r){var a,i,t;return r===0?-.0005087819496582806:(r<0?a=-r:a=r,a<=1?(i=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),t=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,i=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),t=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),i/t)}return Ov=e,Ov}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv,jl;function cm(){if(jl)return Tv;jl=1;function e(r){var a,i,t;return r===0?-.20243350835593876:(r<0?a=-r:a=r,a<=1?(i=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),t=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,i=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),t=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),i/t)}return Tv=e,Tv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv,zl;function _m(){if(zl)return Hv;zl=1;function e(r){var a,i,t;return r===0?-.1311027816799519:(r<0?a=-r:a=r,a<=1?(i=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,i=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),i/t)}return Hv=e,Hv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv,xl;function qm(){if(xl)return Gv;xl=1;function e(r){var a,i,t;return r===0?-.0350353787183178:(r<0?a=-r:a=r,a<=1?(i=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,i=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),i/t)}return Gv=e,Gv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cv,r8;function $m(){if(r8)return Cv;r8=1;function e(r){var a,i,t;return r===0?-.016743100507663373:(r<0?a=-r:a=r,a<=1?(i=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,i=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),t=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),i/t)}return Cv=e,Cv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var kv,e8;function mm(){if(e8)return kv;e8=1;var e=U(),r=Z(),a=x(),i=ar(),t=or(),u=sm(),f=cm(),n=_m(),o=qm(),v=$m(),l=.08913147449493408,s=2.249481201171875,c=.807220458984375,$=.9399557113647461,_=.9836282730102539;function m(q){var p,y,g,L,I,P;return e(q)?NaN:q===1?i:q===-1?t:q===0?q:q>1||q<-1?NaN:(q<0?(p=-1,y=-q):(p=1,y=q),L=1-y,y<=.5?(I=y*(y+10),P=u(y),p*(I*l+I*P)):L>=.25?(I=r(-2*a(L)),L-=.25,P=f(L),p*(I/(s+P))):(L=r(-a(L)),L<3?(g=L-1.125,P=n(g),p*(c*L+P*L)):L<6?(g=L-3,P=o(g),p*($*L+P*L)):(g=L-6,P=v(g),p*(_*L+P*L))))}return kv=m,kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv,a8;function i8(){if(a8)return Wv;a8=1;var e=mm();return Wv=e,Wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv,n8;function hm(){if(n8)return Bv;n8=1;var e=i8(),r=U(),a=Z();function i(t,u,f){var n,o;return r(u)||r(f)||r(t)||f<0||t<0||t>1?NaN:f===0?u:(n=u,o=f*a(2),n+o*e(2*t-1))}return Bv=i,Bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv,t8;function dm(){if(t8)return Dv;t8=1;var e=U();function r(a,i){return e(a)||a<0||a>1?NaN:i}return Dv=r,Dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv,u8;function pm(){if(u8)return Xv;u8=1;var e=$r(),r=U();function a(i){if(r(i))return e(NaN);return t;function t(u){return r(u)||u<0||u>1?NaN:i}}return Xv=a,Xv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uv,v8;function ym(){if(v8)return Uv;v8=1;var e=fr(),r=dm(),a=pm();return e(r,"factory",a),Uv=r,Uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv,f8;function Rm(){if(f8)return Vv;f8=1;var e=$r(),r=ym().factory,a=i8(),i=U(),t=Z();function u(f,n){var o,v;if(i(f)||i(n)||n<0)return e(NaN);return n===0&&r(f),o=f,v=n*t(2),l;function l(s){return i(s)||s<0||s>1?NaN:o+v*a(2*s-1)}}return Vv=u,Vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kv,o8;function bm(){if(o8)return Kv;o8=1;var e=fr(),r=hm(),a=Rm();return e(r,"factory",a),Kv=r,Kv}var gm=bm(),Lm=br(gm);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qv,l8;function Nm(){if(l8)return Qv;l8=1;var e=xr(),r=U(),a=nr();function i(t,u){var f,n,o;return r(t)||r(u)||u<=0?NaN:t===0?.5:(f=a(t,2),u>2*f?(o=f/(u+f),n=e(o,.5,u/2,!0,!0)/2):(o=u/(u+f),n=e(o,u/2,.5,!0,!1)/2),t>0?1-n:n)}return Qv=i,Qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yv,s8;function Im(){if(s8)return Yv;s8=1;var e=$r(),r=xr(),a=U(),i=nr();function t(u){if(a(u)||u<=0)return e(NaN);return f;function f(n){var o,v,l;return a(n)?NaN:n===0?.5:(o=i(n,2),u>2*o?(l=o/(u+o),v=r(l,.5,u/2,!0,!0)/2):(l=u/(u+o),v=r(l,u/2,.5,!0,!1)/2),n>0?1-v:v)}}return Yv=t,Yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zv,c8;function Am(){if(c8)return Zv;c8=1;var e=fr(),r=Nm(),a=Im();return e(r,"factory",a),Zv=r,Zv}var Mm=Am(),Pm=br(Mm);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jv,_8;function Sm(){if(_8)return Jv;_8=1;var e=U(),r=f0(),a=Z(),i=nr();function t(u,f){var n;return e(u)||e(f)||f<=0?NaN:(n=a(f)*r(f/2,.5),i(f/(f+i(u,2)),(1+f)/2)/n)}return Jv=t,Jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jv,q8;function Em(){if(q8)return jv;q8=1;var e=$r(),r=U(),a=f0(),i=Z(),t=nr();function u(f){var n,o;if(r(f)||f<=0)return e(NaN);return o=i(f)*a(f/2,.5),n=(1+f)/2,v;function v(l){return r(l)?NaN:t(f/(f+t(l,2)),n)/o}}return jv=u,jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv,$8;function wm(){if($8)return zv;$8=1;var e=fr(),r=Sm(),a=Em();return e(r,"factory",a),zv=r,zv}var Fm=wm(),Om=br(Fm);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xv,m8;function Tm(){if(m8)return xv;m8=1;var e=mv(),r=U(),a=$0(),i=Z();function t(u,f){var n,o;return r(f)||r(u)||f<=0||u<0||u>1?NaN:(n=u>.5?1-u:u,o=e(f/2,.5,2*n,1-2*n),a(u-.5)*i(f*o[1]/o[0]))}return xv=t,xv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r2,h8;function Hm(){if(h8)return r2;h8=1;var e=$r(),r=mv(),a=U(),i=$0(),t=Z();function u(f){if(a(f)||f<=0)return e(NaN);return n;function n(o){var v,l;return a(o)||o<0||o>1?NaN:(v=o>.5?1-o:o,l=r(f/2,.5,2*v,1-2*v),i(o-.5)*t(f*l[1]/l[0]))}}return r2=u,r2}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e2,d8;function Gm(){if(d8)return e2;d8=1;var e=fr(),r=Tm(),a=Hm();return e(r,"factory",a),e2=r,e2}var Cm=Gm(),km=br(Cm);const p8=1e-9,Wm=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,Bm=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function Dm(e){const[r,a,i]=e;return r<i?r<=a&&a<=i?null:`requires lo <= peak <= hi, got lo=${r}, peak=${a}, hi=${i}`:`requires lo < hi, got lo=${r}, hi=${i}`}function Xm(e){const[r,a]=e;return r<a?null:`requires lo < hi, got lo=${r}, hi=${a}`}function Um(e){const[r,a]=e;return r>0&&a>0?null:`requires a > 0 and b > 0, got a=${r}, b=${a}`}function y8(e){const r=e[1];return r>0?null:`requires sigma > 0, got sigma=${r}`}function Vm(e){const[r,a]=e;return 0<r&&r<a?null:`requires 0 < lo < hi, got lo=${r}, hi=${a}`}function R8(e){const[,r,a]=e;return r<=0?`requires sigma > 0, got sigma=${r}`:a<=0?`requires df > 0, got df=${a}`:null}function b8(e,r){const a=r-e;return{cdf:i=>i<=e?0:i>=r?1:(i-e)/a,ppf:i=>e+i*a,pdf:i=>i>=e&&i<=r?1/a:0}}function Km(e,r,a){const i=a-e,t=(r-e)/i;return{cdf:u=>u<=e?0:u>=a?1:u<=r?(u-e)*(u-e)/(i*(r-e)):1-(a-u)*(a-u)/(i*(a-r)),ppf:u=>u<t?e+Math.sqrt(u*i*(r-e)):a-Math.sqrt((1-u)*i*(a-r)),pdf:u=>u<e||u>a?0:u===r?2/i:u<r?2*(u-e)/(i*(r-e)):2*(a-u)/(i*(a-r))}}function g8(e,r){return{cdf:a=>am(a,e,r),ppf:a=>Lm(a,e,r),pdf:a=>lm(a,e,r)}}function L8(e,r,a){return{cdf:i=>Pm((i-e)/r,a),ppf:i=>e+r*km(i,a),pdf:i=>Om((i-e)/r,a)/r}}function Qm(e,r){return{cdf:a=>yq(a,e,r),ppf:a=>Y$(a,e,r),pdf:a=>Mq(a,e,r)}}const e0={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:Dm,build:e=>({latent:Km(e[0],e[1],e[2]),logX:!1})},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:Xm,build:e=>({latent:b8(e[0],e[1]),logX:!1})},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:Um,build:e=>({latent:Qm(e[0],e[1]),logX:!1})},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:y8,build:e=>({latent:g8(e[0],e[1]),logX:!1})},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:y8,build:e=>({latent:g8(e[0],e[1]),logX:!0})},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:Vm,build:e=>({latent:b8(Math.log(e[0]),Math.log(e[1])),logX:!0})},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:R8,build:e=>({latent:L8(e[0],e[1],e[2]),logX:!1})},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:R8,build:e=>({latent:L8(e[0],e[1],e[2]),logX:!0})}},Ym=["normal","lognormal","t","logt"];function Zm(e){const[r,a]=e;return r<a?null:`requires lo < hi in the truncation window, got lo=${r}, hi=${a}`}function Jm(e,r){const a=r.signature.split("(",2)[1].slice(0,-1);return{signature:`${e}-trunc(${a}, lo, hi)`,note:`${r.note}; explicitly truncated to [lo, hi]`,nParams:r.nParams+2,check:i=>r.check(i.slice(0,r.nParams))??Zm(i.slice(r.nParams)),build:i=>r.build(i),hasTruncWindow:!0}}for(const e of Ym)e0[`${e}-trunc`]=Jm(e,e0[e]);function N8(e){const r=Bm.exec(e);if(!r)throw new Error(`malformed family spec ${JSON.stringify(e)}: expected "family(num, num, ...)"`);const a=r[1],i=r[2],t=e0[a];if(t===void 0)throw new Error(`unknown distribution family ${JSON.stringify(a)}; available: `+Object.values(e0).map(o=>o.signature).join(", "));const u=i.split(",").map(o=>o.trim());for(const o of u)if(!Wm.test(o))throw new Error(`family spec ${JSON.stringify(e.trim())}: bad numeric argument ${JSON.stringify(o)}`);const f=u.map(Number);if(f.length!==t.nParams)throw new Error(`${a} takes ${t.nParams} arguments as ${t.signature}, got ${f.length}`);const n=t.check(f);if(n)throw new Error(`${e.trim()}: ${t.signature} ${n}`);return t.hasTruncWindow?{family:a,params:f.slice(0,-2),text:e.trim(),truncWindow:[f[f.length-2],f[f.length-1]]}:{family:a,params:f,text:e.trim(),truncWindow:null}}function mr(e,...r){const a=r.map(i=>{if(typeof i!="number"||!Number.isFinite(i))throw new Error(`family spec parameter must be a finite number, got ${JSON.stringify(i)}`);return String(i)});return N8(`${e}(${a.join(", ")})`).text}function I8(e,r){return r===-1/0?0:r===1/0?1:e.cdf(r)}class jm{constructor(r,a,i,t,u,f,n){this.spec=r,this.latent=a,this.logX=i,this.cdfLo=t,this.mass=u,this.xLo=f,this.xHi=n}inverseCdf(r){const a=this.latent.ppf(this.cdfLo+r*this.mass),i=this.logX?Math.exp(a):a;return Math.min(Math.max(i,this.xLo),this.xHi)}pdf(r){return r<this.xLo||r>this.xHi?0:this.logX?r<=0?0:this.latent.pdf(Math.log(r))/r/this.mass:this.latent.pdf(r)/this.mass}}function zm(e,r,a){const i=e0[e.family];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(e.family)}`);const{latent:t,logX:u}=i.build(e.params);let f=r===null?-1/0:r,n=a===null?1/0:a;e.truncWindow!==null&&(f=Math.max(f,e.truncWindow[0]),n=Math.min(n,e.truncWindow[1]));let o,v;u?(o=f>0?Math.log(f):-1/0,v=n>0?Math.log(n):-1/0):(o=f,v=n);const l=I8(t,o),c=I8(t,v)-l;if(c<p8){let $=`the variable's range [${r}, ${a}]`;throw e.truncWindow!==null&&($+=` ∩ the spec's truncation window [${e.truncWindow[0]}, ${e.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(e.text)}: essentially no probability mass in ${$} (mass ${c.toExponential(2)} < ${p8})`)}return new jm(e,t,u,l,c,f,n)}const p0="pointmass",xm="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",rh=new RegExp(`^\\s*${p0}\\s*\\(\\s*(${xm})\\s*\\)\\s*$`),eh=new RegExp(`^\\s*${p0}\\b`);function ah(e){const r=rh.exec(e);if(r===null)throw new Error(`malformed ${p0} spec ${JSON.stringify(e)}: expected "${p0}(num)"`);return Number(r[1])}function ih(e){return eh.test(e)?ah(e):null}function nh(e,r,a,i){if(!A8(e))return`expected object, got ${a0(e)}`;for(const l of["point","bounds","sample"]){if(!(l in e))return`missing required key '${l}'`;if(!A8(e[l]))return`'${l}' must be an object, got ${a0(e[l])}`}const t=e.point,u=e.bounds,f=e.sample,n=new Set(Object.keys(t)),o=new Set(Object.keys(u)),v=new Set(Object.keys(f));if(!a2(o,v))return`bounds/sample key mismatch: bounds=${JSON.stringify([...o].sort())}, sample=${JSON.stringify([...v].sort())}`;if(r===null&&a===null){if(!a2(n,o))return`parameter name mismatch across dicts: point=${JSON.stringify([...n].sort())}, bounds=${JSON.stringify([...o].sort())}, sample=${JSON.stringify([...v].sort())}`}else{const l=a??r;if(r!==null){const c=M8("point",n,r);if(c!==null)return c}if(l!==null){const c=M8("bounds/sample",o,l);if(c!==null)return c}const s=[...o].filter(c=>!n.has(c)).sort();if(s.length>0)return`bounds/sample keys not a subset of point keys: extra=${JSON.stringify(s)}`}for(const[l,s]of Object.entries(t)){if(typeof s!="number"||!Number.isFinite(s))return`point['${l}']: expected number, got ${a0(s)}`;const c=(i==null?void 0:i[l])??n0;if(!Kr(c,s))return`point['${l}']: ${s} not in ${Qr(c)}`}for(const[l,s]of Object.entries(u)){if(!Array.isArray(s)||s.length!==2)return`bounds['${l}']: expected [lo, hi] pair`;const[c,$]=s;if(typeof c!="number"||typeof $!="number"||!Number.isFinite(c)||!Number.isFinite($))return`bounds['${l}']: lo and hi must be numbers`;if(c>$)return`bounds['${l}']: lo=${c} > hi=${$}`;const _=(i==null?void 0:i[l])??n0;if(!Kr(_,c))return`bounds['${l}']: lo=${c} not in ${Qr(_)}`;if(!Kr(_,$))return`bounds['${l}']: hi=${$} not in ${Qr(_)}`}for(const[l,s]of Object.entries(f)){if(typeof s=="string"){const q=ih(s),p=(i==null?void 0:i[l])??n0;if(q!==null){if(!Kr(p,q))return`sample['${l}']: pointmass value ${q} not in ${Qr(p)}`;continue}try{zm(N8(s),p.lo,p.hi)}catch(y){return`sample['${l}']: ${y instanceof Error?y.message:String(y)}`}continue}if(!Array.isArray(s))return`sample['${l}']: expected family spec string or array of [x, y] pairs, got ${a0(s)}`;const c=s.length;if(c<2)return`sample['${l}']: need at least 2 [x, y] pairs, got ${c}`;const $=(i==null?void 0:i[l])??n0;let _=!1,m=-1/0;for(let q=0;q<c;q++){const p=s[q];if(!Array.isArray(p)||p.length!==2)return`sample['${l}'][${q}]: expected [x, y] pair, got ${JSON.stringify(p)}`;const[y,g]=p;if(typeof y!="number"||typeof g!="number"||!Number.isFinite(y)||!Number.isFinite(g))return`sample['${l}'][${q}]: x and y must be numbers`;if(!Kr($,y))return`sample['${l}'][${q}]: x=${y} not in ${Qr($)}`;if(g<0||g>1)return`sample['${l}'][${q}]: y=${g} not in [0, 1]`;if(y<m)return`sample['${l}'][${q}]: x=${y} not sorted (prev was ${m})`;m=y,Math.abs(g-1)<1e-9&&(_=!0)}if(!_)return`sample['${l}']: no pair has y ≈ 1.0 (need at least one peak)`}if("rho"in e&&e.rho!==null&&e.rho!==void 0){const l=e.rho;if(typeof l!="number"||!Number.isFinite(l))return`rho: expected number or null, got ${a0(l)}`;if(l<0||l>1)return`rho: ${l} not in [0, 1]`}return null}function A8(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function a0(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function a2(e,r){if(e.size!==r.size)return!1;for(const a of e)if(!r.has(a))return!1;return!0}function M8(e,r,a){const i=new Set(a);if(a2(r,i))return null;const t=[...i].filter(n=>!r.has(n)).sort(),u=[...r].filter(n=>!i.has(n)).sort(),f=[];return t.length>0&&f.push(`missing=${JSON.stringify(t)}`),u.length>0&&f.push(`unexpected=${JSON.stringify(u)}`),`${e} parameter name mismatch vs expected: ${f.join(", ")}`}const P8=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"];function th(e,r,a){return mr("tri",e,r,a)}function S8(e,r){return mr("uniform",e,r)}const uh=S8;function vh(e,r){return mr("beta",e,r)}function fh(e,r){return mr("normal",e,r)}function oh(e,r){return mr("lognormal",e,r)}function lh(e,r){return mr("loguniform",e,r)}function sh(e,r,a){return mr("t",e,r,a)}function ch(e,r,a){return mr("logt",e,r,a)}function _h(e,r,a,i){return mr("normal-trunc",e,r,a,i)}function qh(e,r,a,i){return mr("lognormal-trunc",e,r,a,i)}function $h(e,r,a,i,t){return mr("t-trunc",e,r,a,i,t)}function mh(e,r,a,i,t){return mr("logt-trunc",e,r,a,i,t)}function hh(e,r,a,i){return[[e,0],[r,1],[a,1],[i,0]]}function dh(e,r,a){return Math.min(Math.max(e,r),a)}const E8={tri:th,uniform:S8,uni:uh,beta:vh,normal:fh,lognormal:oh,loguniform:lh,t:sh,logt:ch,normal_trunc:_h,lognormal_trunc:qh,t_trunc:$h,logt_trunc:mh,trap:hh,clamp:dh,exp:Math.exp,log:Math.log,log2:Math.log2,log10:Math.log10,sqrt:Math.sqrt};{const e=Object.keys(E8),r=[...P8],a=e.filter(t=>!r.includes(t)),i=r.filter(t=>!e.includes(t));if(a.length>0||i.length>0)throw new Error(`belief_helpers: HELPER_NAMES ↔ HELPERS drift. Missing from names: ${JSON.stringify(a)}. Missing from bundle: ${JSON.stringify(i)}.`)}const w8="__belief_helpers",ph=`const { ${P8.join(", ")} } = ${w8};
`;function yh(e){let r;try{r=new Function(...e.cparamNames,w8,ph+e.source)}catch(t){return{wellformed:[],malformed:[],compileError:F8(t)}}const a=[],i=[];for(const t of e.combinations){const u=e.cparamNames.map(l=>t[l]);let f;try{f=r(...u,E8)}catch(l){i.push({cparams:t,error:F8(l)});continue}const n=nh(f,e.expectedPointParams,e.expectedPbsParams,e.paramRanges);if(n!==null){i.push({cparams:t,error:n});continue}const o=f,v={cparams:t,point:o.point,bounds:o.bounds,sample:o.sample};"rho"in o&&(v.rho=o.rho),a.push(v)}return{wellformed:a,malformed:i}}function F8(e){return e instanceof Error?`${e.name}: ${e.message}`:String(e)}const O8=self;O8.addEventListener("message",e=>{const r=yh(e.data);O8.postMessage(r)})})();
