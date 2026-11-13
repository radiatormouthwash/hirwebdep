var n9=Object.defineProperty;var t9=(e,r,n)=>r in e?n9(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var j=(e,r,n)=>t9(e,typeof r!="symbol"?r+"":r,n);class Or{constructor(r){j(this,"entries",new Map);if(this.maxEntryCount=r,!(Number.isInteger(r)&&r>=1))throw new Error(`LruMap: the entry cap must be a positive integer, got ${r}`)}get size(){return this.entries.size}has(r){return this.entries.has(r)}get(r){if(!this.entries.has(r))return;const n=this.entries.get(r);return this.entries.delete(r),this.entries.set(r,n),n}set(r,n){if(this.entries.delete(r),this.entries.set(r,n),this.entries.size>this.maxEntryCount){const t=this.entries.keys().next().value;this.entries.delete(t)}}clear(){this.entries.clear()}}function i9(e){return e.lo!==null&&e.lo>=0&&e.hi===null}const se="mean",Dr="geomean";function a9(e){return i9(e)?Dr:se}const o9=1e-5;function s9(e){return(e.zeroDraws+e.infiniteDraws)/e.draws}function u9(e){return s9(e)>o9}function l9(e,r){const n={};for(const t of r){if(!(t in e))throw new Error(`cparam "${t}" is missing from the bound cparam values ${JSON.stringify(Object.keys(e).sort())}`);const i=e[t];if(typeof i!="number")throw new Error(`cparam "${t}" must be numeric, got ${JSON.stringify(i)}`);n[t]=i}return n}function J7(e,r){const n=l9(r,e);return JSON.stringify(e.map(t=>[t,n[t]]))}function f9(e,r){if(!("bind"in e))return e;const n=e.bind(r),t={valueRange:e.valueRange,params:e.params,point:n.point};if(n.bounds!==void 0&&(t.bounds=n.bounds),e.boundsTightness!==void 0&&(t.boundsTightness=e.boundsTightness),e.sampleStage!==void 0){if(n.sampleStagePoint===void 0)throw new Error(`a cparam-bearing form over params ${JSON.stringify(e.params)} declares an E[·] sample stage but its bind step returned no sampleStagePoint — regenerate form_fns`);t.sampleStage={params:e.sampleStage.params,point:n.sampleStagePoint}}return t}function v9(e,r,n){return"bind"in r?`${e}@${J7(r.cparams,n)}`:e}function c9(e,r){const n={};for(const[t,i]of Object.entries(e))n[t]="bind"in i?{params:i.params,point:i.bind(r).point,cparamBindingKey:J7(i.cparams,r)}:i;return n}function Tw(e,r,n,t){return Math.min(e*n,e*t,r*n,r*t)}function kw(e,r,n,t){return Math.max(e*n,e*t,r*n,r*t)}function d9(e,r,n,t){const i=f9(r,n);if(i.bounds&&!i.boundsTightness)throw new Error(`form ${e} has a bounds implementation but no boundsTightness — regenerate form_fns`);return{key:v9(e,r,n),params:i.params,valueRange:i.valueRange,locationStatistic:a9(i.valueRange),point:i.point,bounds:i.bounds??null,boundsTightness:i.bounds?i.boundsTightness:null,sampleStage:i.sampleStage,barrierRegistry:t&&c9(t,n),formEntryRef:{formId:e,cparamValues:{...n}}}}function sl(e){return ArrayBuffer.isView(e)&&Object.prototype.toString.call(e)==="[object Float64Array]"&&Ne(Object.getPrototypeOf(e))==="Float64Array"}function Ne(e){var n;if(e===null||typeof e!="object"&&typeof e!="function")return null;const r=(n=Object.getOwnPropertyDescriptor(e,"constructor"))==null?void 0:n.value;return typeof r!="function"?null:typeof r.name=="string"&&r.name!==""?r.name:null}function h9(e){const r=Object.getPrototypeOf(e);return sl(e)?"float64-array":Array.isArray(e)?Ne(r)==="Array"?"array":"other":r===null||Object.getPrototypeOf(r)===null&&Ne(r)==="Object"?"plain-object":"other"}function p9(e,r){ul(e,r,new Set,new WeakSet)}function m9(e,r){p9(e,r);const n=new Map,t=a=>{if(a===null||typeof a!="object")return a;if(sl(a)){let o=n.get(a);return o===void 0&&(o=new Float64Array(a),n.set(a,o)),o}return Array.isArray(a)?a.map(t):Object.fromEntries(Object.keys(a).map(o=>[o,t(a[o])]))};return{value:t(e),transfer:[...n.values()].map(a=>a.buffer)}}const _9=/^[A-Za-z_$][A-Za-z0-9_$]*$/;function g9(e,r){return _9.test(r)?`${e}.${r}`:`${e}[${JSON.stringify(r)}]`}function _r(e,r){throw new Error(`plain data: ${e} ${r}`)}function ul(e,r,n,t){switch(typeof e){case"boolean":case"number":case"string":return;case"undefined":_r(r,"is undefined (absence is null in plain data)");case"function":_r(r,"is a function");case"symbol":_r(r,"is a symbol");case"bigint":_r(r,"is a bigint")}if(e===null)return;const i=e;if(t.has(i))return;n.has(i)&&_r(r,"is part of a cycle");const a=h9(i);if(a==="float64-array"){Object.prototype.toString.call(i.buffer)==="[object SharedArrayBuffer]"&&_r(r,"is a Float64Array over a SharedArrayBuffer, which a structured clone shares rather than copies"),t.add(i);return}if(a==="other"){const o=Ne(Object.getPrototypeOf(i));_r(r,`is an instance of ${o??"an unnamed class"} (plain data is plain objects, arrays and Float64Arrays; a structured clone would strip its prototype silently)`)}n.add(i),a==="array"?$9(i,r,n,t):q9(i,r,n,t),n.delete(i),t.add(i)}function $9(e,r,n,t){const i=Reflect.ownKeys(e);for(let a=0;a<e.length;a++){const o=`${r}[${a}]`,s=Object.getOwnPropertyDescriptor(e,a);s===void 0&&_r(o,"is a hole (absence is null in plain data)"),"value"in s||_r(o,"is an accessor property, which a structured clone would replace by its current value"),ul(s.value,o,n,t)}if(i.length!==e.length+1){const a=i.find(o=>o!=="length"&&!(typeof o=="string"&&/^(0|[1-9][0-9]*)$/.test(o)&&Number(o)<e.length));_r(r,typeof a=="symbol"?`has a symbol key ${String(a)}, which a structured clone drops`:`has a property ${JSON.stringify(a)} beside its elements`)}}function q9(e,r,n,t){for(const i of Reflect.ownKeys(e)){typeof i=="symbol"&&_r(r,`has a symbol key ${String(i)}, which a structured clone drops`);const a=g9(r,i),o=Object.getOwnPropertyDescriptor(e,i);o.enumerable||_r(a,"is not enumerable, so a structured clone would drop it"),"value"in o||_r(a,"is an accessor property, which a structured clone would replace by its current value"),ul(o.value,a,n,t)}}const w9=2;function me(e){return e.kind==="pool"?`pool:${e.poolToken}`:`composite:${e.compositeToken}`}function Ze(e){return e.kind==="pool"?[e.poolToken]:e.innerPoolTokens}function b9(e,r){return e.budgetMs===r.budgetMs&&e.updateIntervalMs===r.updateIntervalMs&&e.chunkLimitPerPool===r.chunkLimitPerPool&&e.poolTokens.length===r.poolTokens.length&&e.poolTokens.every((n,t)=>n===r.poolTokens[t])}class R9{constructor(){j(this,"runs",new Map);j(this,"highestRunIdSeen",0);j(this,"nextRunIndex",0)}reconcile(r,n){const t=new Set,i=new Set;for(const u of r){if(!(Number.isInteger(u.runId)&&u.runId>=1))throw new Error(`a run's id is a positive integer, got ${u.runId}`);if(t.has(u.runId))throw new Error(`run ${u.runId} is listed twice in one demand`);t.add(u.runId);for(const l of u.poolTokens){if(i.has(l))throw new Error(`pool ${l} is in two runs of one demand; a pool is in at most one active run`);i.add(l)}}const a=[];for(const[u,l]of this.runs)t.has(u)||(a.push({runId:u,finalUnits:this.unitsAdvancedSinceLastPost(l)}),this.runs.delete(u));const o=[],s=this.highestRunIdSeen;for(const u of r){const l=this.runs.get(u.runId);if(l!==void 0){if(!b9(l.spec,u))throw new Error(`run ${u.runId} was listed again with another description`);o.push(...this.offer(l,n(u)).map(f=>({runId:u.runId,unit:f})))}else if(u.runId>s){const f={spec:u,offer:{advanceablePoolTokens:new Set,namedPoolTokens:new Set,units:[]},poolCursor:0,firstChunkMs:null,advanceSerial:0,pools:new Map,units:new Map};this.runs.set(u.runId,f),this.offer(f,n(u))}this.highestRunIdSeen=Math.max(this.highestRunIdSeen,u.runId)}return{stopped:a,unitsLeaving:o}}isActive(r){return this.runs.has(r)}activeRuns(){return[...this.runs.values()].map(r=>r.spec)}hasAdvance(){for(const r of this.runs.values())if(r.spec.poolTokens.some(n=>this.canAdvance(r,n)))return!0;return!1}takeNextAdvance(){const r=[...this.runs.values()];for(let n=0;n<r.length;n++){const t=(this.nextRunIndex+n)%r.length,i=r[t],a=i.spec.poolTokens.length;for(let o=0;o<a;o++){const s=(i.poolCursor+o)%a,u=i.spec.poolTokens[s];if(this.canAdvance(i,u))return i.poolCursor=(s+1)%a,this.nextRunIndex=(t+1)%r.length,{runId:i.spec.runId,poolToken:u}}}return null}recordAdvance(r,n,t,i){const a=this.activeRun(r);a.firstChunkMs??(a.firstChunkMs=t),a.advanceSerial+=1;let o=a.pools.get(n);o===void 0&&(o={chunksInRun:0,exhausted:!1,lastAdvanceSerial:0},a.pools.set(n,o)),o.chunksInRun+=1,o.lastAdvanceSerial=a.advanceSerial,i||(o.exhausted=!0)}unitsDueAfterAdvance(r,n,t){const i=this.activeRun(r),a=[];for(const o of i.units.values())Ze(o.unit).includes(n)&&this.unitIsDue(i,o,t)&&a.push(o.unit);return a}recordPost(r,n,t,i){const a=this.activeRun(r),o=a.units.get(me(n));if(o===void 0)throw new Error(`run ${r} has no posting unit ${me(n)}`);o.posted=!0,o.postedAtSerial=a.advanceSerial,o.lastPostEndMs=i,o.lastPostCostMs=i-t}closeEndedRuns(r){const n=[];for(const[t,i]of this.runs)this.hasEnded(i,r)&&(n.push({runId:t,finalUnits:this.unitsAdvancedSinceLastPost(i)}),this.runs.delete(t));return n}clear(){this.runs.clear(),this.nextRunIndex=0}activeRun(r){const n=this.runs.get(r);if(n===void 0)throw new Error(`run ${r} is not active`);return n}offer(r,n){const t=new Set(n.units.map(me)),i=[];for(const[a,o]of r.units)t.has(a)||(this.advancedSinceLastPost(r,o)&&i.push(o.unit),r.units.delete(a));for(const a of n.units){const o=me(a);r.units.has(o)||r.units.set(o,{unit:a,posted:!1,postedAtSerial:0,lastPostEndMs:0,lastPostCostMs:0})}return r.offer=n,i}canAdvance(r,n){if(!r.offer.advanceablePoolTokens.has(n))return!1;const t=r.pools.get(n);return t===void 0||!this.poolIsDone(r,t)}poolIsDone(r,n){return n.exhausted||r.spec.chunkLimitPerPool!==null&&n.chunksInRun>=r.spec.chunkLimitPerPool}hasEnded(r,n){if(r.spec.chunkLimitPerPool===null&&r.firstChunkMs!==null&&n-r.firstChunkMs>=r.spec.budgetMs)return!0;const i=r.spec.poolTokens.filter(a=>r.offer.namedPoolTokens.has(a));return i.length===0?!0:i.every(a=>{const o=r.pools.get(a);return o!==void 0&&this.poolIsDone(r,o)})}advancedSinceLastPost(r,n){return Ze(n.unit).some(t=>{var i;return(((i=r.pools.get(t))==null?void 0:i.lastAdvanceSerial)??0)>n.postedAtSerial})}unitsAdvancedSinceLastPost(r){return[...r.units.values()].filter(n=>this.advancedSinceLastPost(r,n)).map(n=>n.unit)}unitIsDue(r,n,t){if(!n.posted)return Ze(n.unit).filter(a=>r.spec.poolTokens.includes(a)).every(a=>{var o;return(((o=r.pools.get(a))==null?void 0:o.chunksInRun)??0)>=1});if(!this.advancedSinceLastPost(r,n))return!1;const i=t-n.lastPostEndMs;return i<r.spec.updateIntervalMs?!1:n.unit.kind==="pool"||i>=w9*n.lastPostCostMs}}function Z7(e){return{statistic:e,n:0,mean:0,m2:0,zeroDraws:0,infiniteDraws:0}}function x1(e,r){const n=e.statistic===Dr;let{n:t,mean:i,m2:a,zeroDraws:o,infiniteDraws:s}=e;for(let u=0;u<r.length;u++){const l=r[u];let f=l;if(n){if(l===0){o+=1;continue}if(l===1/0){s+=1;continue}if(!(l>0))throw new Error(`running location statistic fold: draw ${l} at block index ${u} of a non-negative formula is negative or NaN`);f=Math.log(l)}else if(!Number.isFinite(l))throw new Error(`running location statistic fold: non-finite sample value ${l} at block index ${u}`);t+=1;const v=f-i;i+=v/t,a+=v*(f-i)}return{statistic:e.statistic,n:t,mean:i,m2:a,zeroDraws:o,infiniteDraws:s}}function Xr(e){return e.n+e.zeroDraws+e.infiniteDraws}function z7(e){const r=Xr(e);return r>0&&e.zeroDraws===r}function x7(e){if(Xr(e)===0)throw new Error("a running location statistic has no draws yet, so it has no statistic");if(e.statistic===se)return{statistic:se,value:e.mean};if(z7(e))return{statistic:Dr,value:0};const r={zeroDraws:e.zeroDraws,infiniteDraws:e.infiniteDraws,draws:Xr(e)};return u9(r)?{statistic:Dr,value:null,boundaryArtifactCounts:r}:{statistic:Dr,value:Math.exp(e.mean)}}function r8(e){return Math.sqrt(e.m2/(e.n-1)/e.n)}function yr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ze,Sl;function y9(){if(Sl)return ze;Sl=1;function e(r){return r!==r}return ze=e,ze}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xe,Pl;function X(){if(Pl)return xe;Pl=1;var e=y9();return xe=e,xe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rn,Tl;function M9(){if(Tl)return rn;Tl=1;var e=Math.floor;return rn=e,rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var en,kl;function Rr(){if(kl)return en;kl=1;var e=M9();return en=e,en}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nn,Fl;function L9(){if(Fl)return nn;Fl=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return nn=e,nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tn,Ol;function N9(){if(Ol)return tn;Ol=1;var e=L9();return tn=e,tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var an,Dl;function E9(){if(Dl)return an;Dl=1;var e=N9(),r=e();function n(){return r&&typeof Symbol.toStringTag=="symbol"}return an=n,an}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var on,Cl;function I9(){if(Cl)return on;Cl=1;var e=E9();return on=e,on}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sn,Bl;function e8(){if(Bl)return sn;Bl=1;var e=Object.prototype.toString;return sn=e,sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var un,Hl;function A9(){if(Hl)return un;Hl=1;var e=e8();function r(n){return e.call(n)}return un=r,un}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ln,Ul;function S9(){if(Ul)return ln;Ul=1;var e=Object.prototype.hasOwnProperty;function r(n,t){return n==null?!1:e.call(n,t)}return ln=r,ln}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fn,Gl;function P9(){if(Gl)return fn;Gl=1;var e=S9();return fn=e,fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vn,Wl;function T9(){if(Wl)return vn;Wl=1;var e=typeof Symbol=="function"?Symbol:void 0;return vn=e,vn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cn,Xl;function k9(){if(Xl)return cn;Xl=1;var e=T9();return cn=e,cn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dn,Kl;function F9(){if(Kl)return dn;Kl=1;var e=k9(),r=typeof e=="function"?e.toStringTag:"";return dn=r,dn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hn,Vl;function O9(){if(Vl)return hn;Vl=1;var e=P9(),r=F9(),n=e8();function t(i){var a,o,s;if(i==null)return n.call(i);o=i[r],a=e(i,r);try{i[r]=void 0}catch{return n.call(i)}return s=n.call(i),a?i[r]=o:delete i[r],s}return hn=t,hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pn,jl;function Se(){if(jl)return pn;jl=1;var e=I9(),r=A9(),n=O9(),t;return e()?t=n:t=r,pn=t,pn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mn,Yl;function D9(){if(Yl)return mn;Yl=1;var e=Se(),r=typeof Uint32Array=="function";function n(t){return r&&t instanceof Uint32Array||e(t)==="[object Uint32Array]"}return mn=n,mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _n,Ql;function C9(){if(Ql)return _n;Ql=1;var e=D9();return _n=e,_n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gn,Jl;function B9(){if(Jl)return gn;Jl=1;var e=4294967295;return gn=e,gn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $n,Zl;function H9(){if(Zl)return $n;Zl=1;var e=typeof Uint32Array=="function"?Uint32Array:null;return $n=e,$n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qn,zl;function U9(){if(zl)return qn;zl=1;var e=C9(),r=B9(),n=H9();function t(){var i,a;if(typeof n!="function")return!1;try{a=[1,3.14,-3.14,r+1,r+2],a=new n(a),i=e(a)&&a[0]===1&&a[1]===3&&a[2]===r-2&&a[3]===0&&a[4]===1}catch{i=!1}return i}return qn=t,qn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wn,xl;function G9(){if(xl)return wn;xl=1;var e=U9();return wn=e,wn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bn,rf;function W9(){if(rf)return bn;rf=1;var e=typeof Uint32Array=="function"?Uint32Array:void 0;return bn=e,bn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rn,ef;function X9(){if(ef)return Rn;ef=1;function e(){throw new Error("not implemented")}return Rn=e,Rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yn,nf;function Vr(){if(nf)return yn;nf=1;var e=G9(),r=W9(),n=X9(),t;return e()?t=r:t=n,yn=t,yn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mn,tf;function K9(){if(tf)return Mn;tf=1;var e=Se(),r=typeof Float64Array=="function";function n(t){return r&&t instanceof Float64Array||e(t)==="[object Float64Array]"}return Mn=n,Mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ln,af;function V9(){if(af)return Ln;af=1;var e=K9();return Ln=e,Ln}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nn,of;function j9(){if(of)return Nn;of=1;var e=typeof Float64Array=="function"?Float64Array:null;return Nn=e,Nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var En,sf;function Y9(){if(sf)return En;sf=1;var e=V9(),r=j9();function n(){var t,i;if(typeof r!="function")return!1;try{i=new r([1,3.14,-3.14,NaN]),t=e(i)&&i[0]===1&&i[1]===3.14&&i[2]===-3.14&&i[3]!==i[3]}catch{t=!1}return t}return En=n,En}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var In,uf;function Q9(){if(uf)return In;uf=1;var e=Y9();return In=e,In}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var An,lf;function J9(){if(lf)return An;lf=1;var e=typeof Float64Array=="function"?Float64Array:void 0;return An=e,An}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sn,ff;function Z9(){if(ff)return Sn;ff=1;function e(){throw new Error("not implemented")}return Sn=e,Sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pn,vf;function jr(){if(vf)return Pn;vf=1;var e=Q9(),r=J9(),n=Z9(),t;return e()?t=r:t=n,Pn=t,Pn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tn,cf;function z9(){if(cf)return Tn;cf=1;var e=Se(),r=typeof Uint8Array=="function";function n(t){return r&&t instanceof Uint8Array||e(t)==="[object Uint8Array]"}return Tn=n,Tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kn,df;function x9(){if(df)return kn;df=1;var e=z9();return kn=e,kn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fn,hf;function rd(){if(hf)return Fn;hf=1;var e=255;return Fn=e,Fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var On,pf;function ed(){if(pf)return On;pf=1;var e=typeof Uint8Array=="function"?Uint8Array:null;return On=e,On}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dn,mf;function nd(){if(mf)return Dn;mf=1;var e=x9(),r=rd(),n=ed();function t(){var i,a;if(typeof n!="function")return!1;try{a=[1,3.14,-3.14,r+1,r+2],a=new n(a),i=e(a)&&a[0]===1&&a[1]===3&&a[2]===r-2&&a[3]===0&&a[4]===1}catch{i=!1}return i}return Dn=t,Dn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cn,_f;function td(){if(_f)return Cn;_f=1;var e=nd();return Cn=e,Cn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bn,gf;function id(){if(gf)return Bn;gf=1;var e=typeof Uint8Array=="function"?Uint8Array:void 0;return Bn=e,Bn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hn,$f;function ad(){if($f)return Hn;$f=1;function e(){throw new Error("not implemented")}return Hn=e,Hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Un,qf;function od(){if(qf)return Un;qf=1;var e=td(),r=id(),n=ad(),t;return e()?t=r:t=n,Un=t,Un}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gn,wf;function sd(){if(wf)return Gn;wf=1;var e=Se(),r=typeof Uint16Array=="function";function n(t){return r&&t instanceof Uint16Array||e(t)==="[object Uint16Array]"}return Gn=n,Gn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wn,bf;function ud(){if(bf)return Wn;bf=1;var e=sd();return Wn=e,Wn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xn,Rf;function ld(){if(Rf)return Xn;Rf=1;var e=65535;return Xn=e,Xn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kn,yf;function fd(){if(yf)return Kn;yf=1;var e=typeof Uint16Array=="function"?Uint16Array:null;return Kn=e,Kn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vn,Mf;function vd(){if(Mf)return Vn;Mf=1;var e=ud(),r=ld(),n=fd();function t(){var i,a;if(typeof n!="function")return!1;try{a=[1,3.14,-3.14,r+1,r+2],a=new n(a),i=e(a)&&a[0]===1&&a[1]===3&&a[2]===r-2&&a[3]===0&&a[4]===1}catch{i=!1}return i}return Vn=t,Vn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jn,Lf;function cd(){if(Lf)return jn;Lf=1;var e=vd();return jn=e,jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yn,Nf;function dd(){if(Nf)return Yn;Nf=1;var e=typeof Uint16Array=="function"?Uint16Array:void 0;return Yn=e,Yn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qn,Ef;function hd(){if(Ef)return Qn;Ef=1;function e(){throw new Error("not implemented")}return Qn=e,Qn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jn,If;function pd(){if(If)return Jn;If=1;var e=cd(),r=dd(),n=hd(),t;return e()?t=r:t=n,Jn=t,Jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zn,Af;function md(){if(Af)return Zn;Af=1;var e=od(),r=pd(),n={uint16:r,uint8:e};return Zn=n,Zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zn,Sf;function _d(){if(Sf)return zn;Sf=1;var e=md(),r;function n(){var t,i;return t=new e.uint16(1),t[0]=4660,i=new e.uint8(t.buffer),i[0]===52}return r=n(),zn=r,zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xn,Pf;function Yr(){if(Pf)return xn;Pf=1;var e=_d();return xn=e,xn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rt,Tf;function gd(){if(Tf)return rt;Tf=1;var e=Yr(),r;return e===!0?r=1:r=0,rt=r,rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var et,kf;function $d(){if(kf)return et;kf=1;var e=Vr(),r=jr(),n=gd(),t=new r(1),i=new e(t.buffer);function a(o){return t[0]=o,i[n]}return et=a,et}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nt,Ff;function mr(){if(Ff)return nt;Ff=1;var e=$d();return nt=e,nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tt,Of;function qd(){if(Of)return tt;Of=1;var e=Yr(),r;return e===!0?r=0:r=1,tt=r,tt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var it,Df;function wd(){if(Df)return it;Df=1;var e=Vr(),r=jr(),n=qd(),t=new r(1),i=new e(t.buffer);function a(o,s){return t[0]=o,i[n]=s>>>0,t[0]}return it=a,it}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var at,Cf;function Qr(){if(Cf)return at;Cf=1;var e=wd();return at=e,at}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ot,Bf;function bd(){if(Bf)return ot;Bf=1;function e(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}return ot=e,ot}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var st,Hf;function Rd(){if(Hf)return st;Hf=1;function e(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}return st=e,st}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ut,Uf;function yd(){if(Uf)return ut;Uf=1;var e=mr(),r=Qr(),n=bd(),t=Rd(),i=.7853981633974483,a=3061616997868383e-32,o=.3333333333333341,s=2147483647;function u(l,f,v){var d,m,h,p,c,g,w,b,q;return d=e(l),m=d&s|0,m>=1072010280&&(l<0&&(l=-l,f=-f),q=i-l,b=a-f,l=q+b,f=0),q=l*l,b=q*q,p=n(b),w=q*t(b),c=q*l,p=f+q*(c*(p+w)+f),p+=o*c,b=l+p,m>=1072010280?(w=v,(1-(d>>30&2))*(w-2*(l-(b*b/(b+w)-p)))):v===1?b:(q=r(b,0),w=p-(q-l),h=-1/b,g=r(h,0),c=1+g*q,g+h*(c+g*w))}return ut=u,ut}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lt,Gf;function Md(){if(Gf)return lt;Gf=1;var e=yd();return lt=e,lt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ft,Wf;function Pr(){if(Wf)return ft;Wf=1;var e=2147483647;return ft=e,ft}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vt,Xf;function le(){if(Xf)return vt;Xf=1;var e=2146435072;return vt=e,vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ct,Kf;function n8(){if(Kf)return ct;Kf=1;var e=1048575;return ct=e,ct}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dt,Vf;function Ld(){if(Vf)return dt;Vf=1;var e=Yr(),r;return e===!0?r=0:r=1,dt=r,dt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ht,jf;function Nd(){if(jf)return ht;jf=1;var e=Vr(),r=jr(),n=Ld(),t=new r(1),i=new e(t.buffer);function a(o){return t[0]=o,i[n]}return ht=a,ht}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pt,Yf;function Ed(){if(Yf)return pt;Yf=1;var e=Nd();return pt=e,pt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mt,Qf;function Id(){if(Qf)return mt;Qf=1;var e=Yr(),r,n,t;return e===!0?(n=1,t=0):(n=0,t=1),r={HIGH:n,LOW:t},mt=r,mt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _t,Jf;function Ad(){if(Jf)return _t;Jf=1;var e=Vr(),r=jr(),n=Id(),t=new r(1),i=new e(t.buffer),a=n.HIGH,o=n.LOW;function s(u,l){return i[a]=u,i[o]=l,t[0]}return _t=s,_t}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gt,Zf;function Pe(){if(Zf)return gt;Zf=1;var e=Ad();return gt=e,gt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $t,zf;function tr(){if(zf)return $t;zf=1;var e=Number.POSITIVE_INFINITY;return $t=e,$t}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qt,xf;function Sd(){return xf||(xf=1,qt=Number),qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wt,rv;function Pd(){if(rv)return wt;rv=1;var e=Sd();return wt=e,wt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bt,ev;function lr(){if(ev)return bt;ev=1;var e=Pd(),r=e.NEGATIVE_INFINITY;return bt=r,bt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rt,nv;function Cr(){if(nv)return Rt;nv=1;var e=1023;return Rt=e,Rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yt,tv;function Td(){if(tv)return yt;tv=1;var e=1023;return yt=e,yt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mt,iv;function kd(){if(iv)return Mt;iv=1;var e=-1023;return Mt=e,Mt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lt,av;function Fd(){if(av)return Lt;av=1;var e=-1074;return Lt=e,Lt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nt,ov;function Od(){if(ov)return Nt;ov=1;var e=tr(),r=lr();function n(t){return t===e||t===r}return Nt=n,Nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Et,sv;function Jr(){if(sv)return Et;sv=1;var e=Od();return Et=e,Et}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var It,uv;function Dd(){if(uv)return It;uv=1;var e=2147483648;return It=e,It}/**
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
*/var At,lv;function Cd(){if(lv)return At;lv=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return At=e,At}/**
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
*/var St,fv;function Bd(){if(fv)return St;fv=1;var e=Cd();function r(){try{return e({},"x",{}),!0}catch{return!1}}return St=r,St}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pt,vv;function Hd(){if(vv)return Pt;vv=1;var e=Object.defineProperty;return Pt=e,Pt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tt,cv;function t8(){if(cv)return Tt;cv=1;function e(r){return typeof r=="number"}return Tt=e,Tt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kt,dv;function i8(){if(dv)return kt;dv=1;function e(t){return t[0]==="-"}function r(t){var i="",a;for(a=0;a<t;a++)i+="0";return i}function n(t,i,a){var o=!1,s=i-t.length;return s<0||(e(t)&&(o=!0,t=t.substr(1)),t=a?t+r(s):r(s)+t,o&&(t="-"+t)),t}return kt=n,kt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ft,hv;function Ud(){if(hv)return Ft;hv=1;var e=t8(),r=i8(),n=String.prototype.toLowerCase,t=String.prototype.toUpperCase;function i(a){var o,s,u;switch(a.specifier){case"b":o=2;break;case"o":o=8;break;case"x":case"X":o=16;break;case"d":case"i":case"u":default:o=10;break}if(s=a.arg,u=parseInt(s,10),!isFinite(u)){if(!e(s))throw new Error("invalid integer. Value: "+s);u=0}return u<0&&(a.specifier==="u"||o!==10)&&(u=4294967295+u+1),u<0?(s=(-u).toString(o),a.precision&&(s=r(s,a.precision,a.padRight)),s="-"+s):(s=u.toString(o),!u&&!a.precision?s="":a.precision&&(s=r(s,a.precision,a.padRight)),a.sign&&(s=a.sign+s)),o===16&&(a.alternate&&(s="0x"+s),s=a.specifier===t.call(a.specifier)?t.call(s):n.call(s)),o===8&&a.alternate&&s.charAt(0)!=="0"&&(s="0"+s),s}return Ft=i,Ft}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ot,pv;function Gd(){if(pv)return Ot;pv=1;function e(r){return typeof r=="string"}return Ot=e,Ot}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dt,mv;function Wd(){if(mv)return Dt;mv=1;var e=Math.abs,r=String.prototype.toLowerCase,n=String.prototype.toUpperCase,t=String.prototype.replace,i=/e\+(\d)$/,a=/e-(\d)$/,o=/^(\d+)$/,s=/^(\d+)e/,u=/\.0$/,l=/\.0*e/,f=/(\..*[^0])0*e/;function v(d,m){var h,p;switch(m.specifier){case"e":case"E":p=d.toExponential(m.precision);break;case"f":case"F":p=d.toFixed(m.precision);break;case"g":case"G":e(d)<1e-4?(h=m.precision,h>0&&(h-=1),p=d.toExponential(h)):p=d.toPrecision(m.precision),m.alternate||(p=t.call(p,f,"$1e"),p=t.call(p,l,"e"),p=t.call(p,u,""));break;default:throw new Error("invalid double notation. Value: "+m.specifier)}return p=t.call(p,i,"e+0$1"),p=t.call(p,a,"e-0$1"),m.alternate&&(p=t.call(p,o,"$1."),p=t.call(p,s,"$1.e")),d>=0&&m.sign&&(p=m.sign+p),p=m.specifier===n.call(m.specifier)?n.call(p):r.call(p),p}return Dt=v,Dt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ct,_v;function Xd(){if(_v)return Ct;_v=1;function e(n){var t="",i;for(i=0;i<n;i++)t+=" ";return t}function r(n,t,i){var a=t-n.length;return a<0||(n=i?n+e(a):e(a)+n),n}return Ct=r,Ct}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bt,gv;function Kd(){if(gv)return Bt;gv=1;var e=Ud(),r=Gd(),n=t8(),t=Wd(),i=Xd(),a=i8(),o=String.fromCharCode,s=Array.isArray;function u(v){return v!==v}function l(v){var d={};return d.specifier=v.specifier,d.precision=v.precision===void 0?1:v.precision,d.width=v.width,d.flags=v.flags||"",d.mapping=v.mapping,d}function f(v){var d,m,h,p,c,g,w,b,q,M;if(!s(v))throw new TypeError("invalid argument. First argument must be an array. Value: `"+v+"`.");for(g="",w=1,q=0;q<v.length;q++)if(h=v[q],r(h))g+=h;else{if(d=h.precision!==void 0,h=l(h),!h.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+q+"`. Value: `"+h+"`.");for(h.mapping&&(w=h.mapping),m=h.flags,M=0;M<m.length;M++)switch(p=m.charAt(M),p){case" ":h.sign=" ";break;case"+":h.sign="+";break;case"-":h.padRight=!0,h.padZeros=!1;break;case"0":h.padZeros=m.indexOf("-")<0;break;case"#":h.alternate=!0;break;default:throw new Error("invalid flag: "+p)}if(h.width==="*"){if(h.width=parseInt(arguments[w],10),w+=1,u(h.width))throw new TypeError("the argument for * width at position "+w+" is not a number. Value: `"+h.width+"`.");h.width<0&&(h.padRight=!0,h.width=-h.width)}if(d&&h.precision==="*"){if(h.precision=parseInt(arguments[w],10),w+=1,u(h.precision))throw new TypeError("the argument for * precision at position "+w+" is not a number. Value: `"+h.precision+"`.");h.precision<0&&(h.precision=1,d=!1)}switch(h.arg=arguments[w],h.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":d&&(h.padZeros=!1),h.arg=e(h);break;case"s":h.maxWidth=d?h.precision:-1,h.arg=String(h.arg);break;case"c":if(!u(h.arg)){if(c=parseInt(h.arg,10),c<0||c>127)throw new Error("invalid character code. Value: "+h.arg);h.arg=u(c)?String(h.arg):o(c)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(d||(h.precision=6),b=parseFloat(h.arg),!isFinite(b)){if(!n(h.arg))throw new Error("invalid floating-point number. Value: "+g);b=h.arg,h.padZeros=!1}h.arg=t(b,h);break;default:throw new Error("invalid specifier: "+h.specifier)}h.maxWidth>=0&&h.arg.length>h.maxWidth&&(h.arg=h.arg.substring(0,h.maxWidth)),h.padZeros?h.arg=a(h.arg,h.width||h.precision,h.padRight):h.width&&(h.arg=i(h.arg,h.width,h.padRight)),g+=h.arg||"",w+=1}return g}return Bt=f,Bt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ht,$v;function Vd(){if($v)return Ht;$v=1;var e=Kd();return Ht=e,Ht}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ut,qv;function jd(){if(qv)return Ut;qv=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function r(t){var i={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return t[4]==="."&&t[5]===void 0&&(i.precision="1"),i}function n(t){var i,a,o,s;for(a=[],s=0,o=e.exec(t);o;)i=t.slice(s,e.lastIndex-o[0].length),i.length&&a.push(i),o[6]==="%"?a.push("%"):a.push(r(o)),s=e.lastIndex,o=e.exec(t);return i=t.slice(s),i.length&&a.push(i),a}return Ut=n,Ut}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gt,wv;function Yd(){if(wv)return Gt;wv=1;var e=jd();return Gt=e,Gt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wt,bv;function Qd(){if(bv)return Wt;bv=1;function e(r){return typeof r=="string"}return Wt=e,Wt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xt,Rv;function Jd(){if(Rv)return Xt;Rv=1;var e=Vd(),r=Yd(),n=Qd();function t(i){var a,o;if(!n(i))throw new TypeError(t("invalid argument. First argument must be a string. Value: `%s`.",i));for(a=[r(i)],o=1;o<arguments.length;o++)a.push(arguments[o]);return e.apply(null,a)}return Xt=t,Xt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kt,yv;function Zd(){if(yv)return Kt;yv=1;var e=Jd();return Kt=e,Kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vt,Mv;function zd(){if(Mv)return Vt;Mv=1;var e=Zd(),r=Object.prototype,n=r.toString,t=r.__defineGetter__,i=r.__defineSetter__,a=r.__lookupGetter__,o=r.__lookupSetter__;function s(u,l,f){var v,d,m,h;if(typeof u!="object"||u===null||n.call(u)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",u));if(typeof f!="object"||f===null||n.call(f)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",f));if(d="value"in f,d&&(a.call(u,l)||o.call(u,l)?(v=u.__proto__,u.__proto__=r,delete u[l],u[l]=f.value,u.__proto__=v):u[l]=f.value),m="get"in f,h="set"in f,d&&(m||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return m&&t&&t.call(u,l,f.get),h&&i&&i.call(u,l,f.set),u}return Vt=s,Vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jt,Lv;function xd(){if(Lv)return jt;Lv=1;var e=Bd(),r=Hd(),n=zd(),t;return e()?t=r:t=n,jt=t,jt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yt,Nv;function rh(){if(Nv)return Yt;Nv=1;var e=xd();function r(n,t,i){e(n,t,{configurable:!1,enumerable:!1,writable:!1,value:i})}return Yt=r,Yt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qt,Ev;function fr(){if(Ev)return Qt;Ev=1;var e=rh();return Qt=e,Qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jt,Iv;function eh(){if(Iv)return Jt;Iv=1;var e=Yr(),r,n,t;return e===!0?(n=1,t=0):(n=0,t=1),r={HIGH:n,LOW:t},Jt=r,Jt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zt,Av;function a8(){if(Av)return Zt;Av=1;var e=Vr(),r=jr(),n=eh(),t=new r(1),i=new e(t.buffer),a=n.HIGH,o=n.LOW;function s(u,l,f,v){return t[0]=u,l[v]=i[a],l[v+f]=i[o],l}return Zt=s,Zt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zt,Sv;function nh(){if(Sv)return zt;Sv=1;var e=a8();function r(n){return e(n,[0,0],1,0)}return zt=r,zt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xt,Pv;function ll(){if(Pv)return xt;Pv=1;var e=fr(),r=nh(),n=a8();return e(r,"assign",n),xt=r,xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ri,Tv;function th(){if(Tv)return ri;Tv=1;var e=Dd(),r=Pr(),n=ll(),t=mr(),i=Pe(),a=[0,0];function o(s,u){var l,f;return n.assign(s,a,1,0),l=a[0],l&=r,f=t(u),f&=e,l|=f,i(l,a[1])}return ri=o,ri}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ei,kv;function fl(){if(kv)return ei;kv=1;var e=th();return ei=e,ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ni,Fv;function Br(){if(Fv)return ni;Fv=1;var e=22250738585072014e-324;return ni=e,ni}/**
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
*/var ti,Ov;function ih(){if(Ov)return ti;Ov=1;function e(r){return Math.abs(r)}return ti=e,ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ii,Dv;function J(){if(Dv)return ii;Dv=1;var e=ih();return ii=e,ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ai,Cv;function o8(){if(Cv)return ai;Cv=1;var e=Br(),r=Jr(),n=X(),t=J(),i=4503599627370496;function a(o,s,u,l){return n(o)||r(o)?(s[l]=o,s[l+u]=0,s):o!==0&&t(o)<e?(s[l]=o*i,s[l+u]=-52,s):(s[l]=o,s[l+u]=0,s)}return ai=a,ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oi,Bv;function ah(){if(Bv)return oi;Bv=1;var e=o8();function r(n){return e(n,[0,0],1,0)}return oi=r,oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var si,Hv;function oh(){if(Hv)return si;Hv=1;var e=fr(),r=ah(),n=o8();return e(r,"assign",n),si=r,si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ui,Uv;function sh(){if(Uv)return ui;Uv=1;var e=mr(),r=le(),n=Cr();function t(i){var a=e(i);return a=(a&r)>>>20,a-n|0}return ui=t,ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var li,Gv;function uh(){if(Gv)return li;Gv=1;var e=sh();return li=e,li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fi,Wv;function lh(){if(Wv)return fi;Wv=1;var e=tr(),r=lr(),n=Cr(),t=Td(),i=kd(),a=Fd(),o=X(),s=Jr(),u=fl(),l=oh().assign,f=uh(),v=ll(),d=Pe(),m=2220446049250313e-31,h=2148532223,p=[0,0],c=[0,0];function g(w,b){var q,M;return b===0||w===0||o(w)||s(w)?w:(l(w,p,1,0),w=p[0],b+=p[1],b+=f(w),b<a?u(0,w):b>t?w<0?r:e:(b<=i?(b+=52,M=m):M=1,v.assign(w,c,1,0),q=c[0],q&=h,q|=b+n<<20,M*d(q,c[1])))}return fi=g,fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vi,Xv;function Zr(){if(Xv)return vi;Xv=1;var e=lh();return vi=e,vi}/**
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
*/var ci,Kv;function fh(){if(Kv)return ci;Kv=1;function e(r,n){var t,i;for(t=[],i=0;i<n;i++)t.push(r);return t}return ci=e,ci}/**
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
*/var di,Vv;function vh(){if(Vv)return di;Vv=1;var e=fh();return di=e,di}/**
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
*/var hi,jv;function ch(){if(jv)return hi;jv=1;var e=vh();function r(n){return e(0,n)}return hi=r,hi}/**
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
*/var pi,Yv;function dh(){if(Yv)return pi;Yv=1;var e=ch();return pi=e,pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var mi,Qv;function hh(){if(Qv)return mi;Qv=1;var e=Rr(),r=Zr(),n=dh(),t=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],i=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],a=16777216,o=5960464477539063e-23,s=n(20),u=n(20),l=n(20),f=n(20);function v(m,h,p,c,g,w,b,q,M){var I,N,A,E,y,_,$,R,L;for(E=w,L=c[p],R=p,y=0;R>0;y++)N=o*L|0,f[y]=L-a*N|0,L=c[R-1]+N,R-=1;if(L=r(L,g),L-=8*e(L*.125),$=L|0,L-=$,A=0,g>0?(y=f[p-1]>>24-g,$+=y,f[p-1]-=y<<24-g,A=f[p-1]>>23-g):g===0?A=f[p-1]>>23:L>=.5&&(A=2),A>0){for($+=1,I=0,y=0;y<p;y++)R=f[y],I===0?R!==0&&(I=1,f[y]=16777216-R):f[y]=16777215-R;if(g>0)switch(g){case 1:f[p-1]&=8388607;break;case 2:f[p-1]&=4194303;break}A===2&&(L=1-L,I!==0&&(L-=r(1,g)))}if(L===0){for(R=0,y=p-1;y>=w;y--)R|=f[y];if(R===0){for(_=1;f[w-_]===0;_++);for(y=p+1;y<=p+_;y++){for(M[q+y]=t[b+y],N=0,R=0;R<=q;R++)N+=m[R]*M[q+(y-R)];c[y]=N}return p+=_,v(m,h,p,c,g,w,b,q,M)}for(p-=1,g-=24;f[p]===0;)p-=1,g-=24}else L=r(L,-g),L>=a?(N=o*L|0,f[p]=L-a*N|0,p+=1,g+=24,f[p]=N):f[p]=L|0;for(N=r(1,g),y=p;y>=0;y--)c[y]=N*f[y],N*=o;for(y=p;y>=0;y--){for(N=0,_=0;_<=E&&_<=p-y;_++)N+=i[_]*c[y+_];l[p-y]=N}for(N=0,y=p;y>=0;y--)N+=l[y];for(A===0?h[0]=N:h[0]=-N,N=l[0]-N,y=1;y<=p;y++)N+=l[y];return A===0?h[1]=N:h[1]=-N,$&7}function d(m,h,p,c){var g,w,b,q,M,I,N,A,E;for(w=4,q=c-1,b=(p-3)/24|0,b<0&&(b=0),I=p-24*(b+1),A=b-q,E=q+w,N=0;N<=E;N++)A<0?s[N]=0:s[N]=t[A],A+=1;for(N=0;N<=w;N++){for(g=0,A=0;A<=q;A++)g+=m[A]*s[q+(N-A)];u[N]=g}return M=w,v(m,h,M,u,I,w,b,q,s)}return mi=d,mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _i,Jv;function ph(){if(Jv)return _i;Jv=1;var e=Math.round;return _i=e,_i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gi,Zv;function s8(){if(Zv)return gi;Zv=1;var e=ph();return gi=e,gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var $i,zv;function mh(){if(zv)return $i;zv=1;var e=s8(),r=mr(),n=.6366197723675814,t=1.5707963267341256,i=6077100506506192e-26,a=6077100506303966e-26,o=20222662487959506e-37,s=20222662487111665e-37,u=84784276603689e-45,l=2047;function f(v,d,m){var h,p,c,g,w,b,q;return p=e(v*n),g=v-p*t,w=p*i,q=d>>20|0,m[0]=g-w,h=r(m[0]),b=q-(h>>20&l),b>16&&(c=g,w=p*a,g=c-w,w=p*o-(c-g-w),m[0]=g-w,h=r(m[0]),b=q-(h>>20&l),b>49&&(c=g,w=p*s,g=c-w,w=p*u-(c-g-w),m[0]=g-w)),m[1]=g-m[0]-w,p}return $i=f,$i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var qi,xv;function _h(){if(xv)return qi;xv=1;var e=Pr(),r=le(),n=n8(),t=mr(),i=Ed(),a=Pe(),o=hh(),s=mh(),u=0,l=16777216,f=1.5707963267341256,v=6077100506506192e-26,d=2*v,m=3*v,h=4*v,p=598523,c=1072243195,g=1073928572,w=1074752122,b=1074977148,q=1075183036,M=1075388923,I=1075594811,N=1094263291,A=[0,0,0],E=[0,0];function y(_,$){var R,L,F,S,O,T,k,P;if(F=t(_)|0,S=F&e|0,S<=c)return $[0]=_,$[1]=0,0;if(S<=w)return(S&n)===p?s(_,S,$):S<=g?F>0?(P=_-f,$[0]=P-v,$[1]=P-$[0]-v,1):(P=_+f,$[0]=P+v,$[1]=P-$[0]+v,-1):F>0?(P=_-2*f,$[0]=P-d,$[1]=P-$[0]-d,2):(P=_+2*f,$[0]=P+d,$[1]=P-$[0]+d,-2);if(S<=I)return S<=q?S===b?s(_,S,$):F>0?(P=_-3*f,$[0]=P-m,$[1]=P-$[0]-m,3):(P=_+3*f,$[0]=P+m,$[1]=P-$[0]+m,-3):S===M?s(_,S,$):F>0?(P=_-4*f,$[0]=P-h,$[1]=P-$[0]-h,4):(P=_+4*f,$[0]=P+h,$[1]=P-$[0]+h,-4);if(S<N)return s(_,S,$);if(S>=r)return $[0]=NaN,$[1]=NaN,0;for(R=i(_),L=(S>>20)-1046,P=a(S-(L<<20|0),R),T=0;T<2;T++)A[T]=P|0,P=(P-A[T])*l;for(A[2]=P,O=3;A[O-1]===u;)O-=1;return k=o(A,E,L,O,1),F<0?($[0]=-E[0],$[1]=-E[1],-k):($[0]=E[0],$[1]=E[1],k)}return qi=y,qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wi,r2;function vl(){if(r2)return wi;r2=1;var e=_h();return wi=e,wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var bi,e2;function gh(){if(e2)return bi;e2=1;var e=mr(),r=Md(),n=vl(),t=Pr(),i=le(),a=[0,0],o=1072243195,s=1044381696;function u(l){var f,v;return f=e(l),f&=t,f<=o?f<s?l:r(l,0,1):f>=i?NaN:(v=n(l,a),r(a[0],a[1],1-((v&1)<<1)))}return bi=u,bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ri,n2;function $h(){if(n2)return Ri;n2=1;var e=gh();return Ri=e,Ri}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yi,t2;function Ir(){if(t2)return yi;t2=1;var e=3.141592653589793;return yi=e,yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mi,i2;function qh(){if(i2)return Mi;i2=1;var e=Yr(),r;return e===!0?r=1:r=0,Mi=r,Mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Li,a2;function wh(){if(a2)return Li;a2=1;var e=Vr(),r=jr(),n=qh(),t=new r(1),i=new e(t.buffer);function a(o,s){return t[0]=o,i[n]=s>>>0,t[0]}return Li=a,Li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ni,o2;function fe(){if(o2)return Ni;o2=1;var e=wh();return Ni=e,Ni}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ei,s2;function bh(){if(s2)return Ei;s2=1;function e(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}return Ei=e,Ei}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ii,u2;function Rh(){if(u2)return Ii;u2=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}return Ii=e,Ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ai,l2;function yh(){if(l2)return Ai;l2=1;var e=mr(),r=fe(),n=X(),t=Cr(),i=lr(),a=bh(),o=Rh(),s=.6931471803691238,u=19082149292705877e-26,l=0x40000000000000,f=.3333333333333333,v=1048575,d=2146435072,m=1048576,h=1072693248;function p(c){var g,w,b,q,M,I,N,A,E,y,_,$;return c===0?i:n(c)||c<0?NaN:(w=e(c),M=0,w<m&&(M-=54,c*=l,w=e(c)),w>=d?c+c:(M+=(w>>20)-t|0,w&=v,A=w+614244&1048576|0,c=r(c,w|A^h),M+=A>>20|0,N=c-1,(v&2+w)<3?N===0?M===0?0:M*s+M*u:(I=N*N*(.5-f*N),M===0?N-I:M*s-(I-M*u-N)):(y=N/(2+N),$=y*y,A=w-398458|0,_=$*$,E=440401-w|0,q=_*a(_),b=$*o(_),A|=E,I=b+q,A>0?(g=.5*N*N,M===0?N-(g-y*(g+I)):M*s-(g-(y*(g+I)+M*u)-N)):M===0?N-y*(N-I):M*s-(y*(N-I)-M*u-N))))}return Ai=p,Ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Si,f2;function rr(){if(f2)return Si;f2=1;var e=yh();return Si=e,Si}/**
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
*/var Pi,v2;function Mh(){if(v2)return Pi;v2=1;function e(r){return r===0?.08333333333333333:.08333333333333333+r*(-.008333333333333333+r*(.003968253968253968+r*(-.004166666666666667+r*(.007575757575757576+r*(-.021092796092796094+r*(.08333333333333333+r*-.4432598039215686))))))}return Pi=e,Pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ti,c2;function Lh(){if(c2)return Ti;c2=1;var e=rr(),r=Mh();function n(t){var i,a;return t-=1,i=e(t)+1/(2*t),a=1/(t*t),i-a*r(a)}return Ti=n,Ti}/**
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
*/var ki,d2;function Nh(){if(d2)return ki;d2=1;function e(r){var n,t,i;return r===0?.25479851061131553:(r<0?n=-r:n=r,n<=1?(t=.25479851061131553+r*(-.3255503118680449+r*(-.6503185377089651+r*(-.28919126444774784+r*(-.04525132144873906+r*(-.002071332116774595+r*0))))),i=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+r*-5578984132167551e-22)))))):(r=1/r,t=0+r*(-.002071332116774595+r*(-.04525132144873906+r*(-.28919126444774784+r*(-.6503185377089651+r*(-.3255503118680449+r*.25479851061131553))))),i=-5578984132167551e-22+r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+r*1)))))),t/i)}return ki=e,ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fi,h2;function Eh(){if(h2)return Fi;h2=1;var e=Nh(),r=1569415565/1073741824,n=381566830/1073741824/1073741824,t=9016312093258695e-35,i=.9955816268920898;function a(o){var s,u;return s=o-r,s-=n,s-=t,u=e(o-1),s*i+s*u}return Fi=a,Fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Oi,p2;function Ih(){if(p2)return Oi;p2=1;var e=X(),r=Rr(),n=$h(),t=Ir(),i=Lh(),a=Eh(),o=10;function s(u){var l,f;if(e(u)||u===0)return NaN;if(u<=-1){if(u=1-u,l=u-r(u),l>.5&&(l-=1),l===0)return NaN;f=t/n(t*l)}else f=0;if(u>=o)return f+=i(u),f;for(;u>2;)u-=1,f+=1/u;for(;u<1;)f-=1/u,u+=1;return f+=a(u),f}return Oi=s,Oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Di,m2;function Ah(){if(m2)return Di;m2=1;var e=Ih();return Di=e,Di}var Sh=Ah(),_2=yr(Sh);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ci,g2;function Ph(){if(g2)return Ci;g2=1;var e=.34657359027997264;return Ci=e,Ci}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bi,$2;function Th(){if($2)return Bi;$2=1;function e(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}return Bi=e,Bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Hi,q2;function kh(){if(q2)return Hi;q2=1;var e=X(),r=mr(),n=fe(),t=Pe(),i=tr(),a=lr(),o=Cr(),s=Ph(),u=Th(),l=709.782712893384,f=.6931471803691238,v=19082149292705877e-26,d=1.4426950408889634,m=38.816242111356935,h=1.0397207708399179;function p(c){var g,w,b,q,M,I,N,A,E,y,_,$,R;if(c===i||e(c))return c;if(c===a)return-1;if(c===0)return c;if(c<0?(b=!0,A=-c):(b=!1,A=c),A>=m){if(b)return-1;if(A>=l)return i}if(I=r(A)|0,A>s)A<h?b?(q=c+f,M=-v,R=-1):(q=c-f,M=v,R=1):(b?R=d*c-.5:R=d*c+.5,R|=0,_=R,q=c-_*f,M=_*v),c=q-M,y=q-c-M;else{if(I<1016070144)return c;R=0}return g=.5*c,E=c*g,N=1+E*u(E),_=3-N*g,$=E*((N-_)/(6-c*_)),R===0?c-(c*$-E):(w=t(o+R<<20,0),$=c*($-y)-y,$-=E,R===-1?.5*(c-$)-.5:R===1?c<-.25?-2*($-(c+.5)):1+2*(c-$):R<=-2||R>56?(A=1-($-c),R===1024?(q=r(A)+(R<<20)|0,A=n(A,q)):A*=w,A-1):(_=1,R<20?(q=1072693248-(2097152>>R)|0,_=n(_,q),A=_-($-c)):(q=o-R<<20|0,_=n(_,q),A=c-($+_),A+=1),A*=w,A))}return Hi=p,Hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ui,w2;function zr(){if(w2)return Ui;w2=1;var e=kh();return Ui=e,Ui}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gi,b2;function Fh(){if(b2)return Gi;b2=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}return Gi=e,Gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Wi,R2;function Oh(){if(R2)return Wi;R2=1;var e=X(),r=mr(),n=fe(),t=tr(),i=lr(),a=Cr(),o=Fh(),s=.6931471803691238,u=19082149292705877e-26,l=.41421356237309503,f=-.2928932188134525,v=1862645149230957e-24,d=5551115123125783e-32,m=9007199254740992,h=.6666666666666666;function p(c){var g,w,b,q,M,I,N,A,E,y;if(c<-1||e(c))return NaN;if(c===-1)return i;if(c===t||c===0)return c;if(c<0?b=-c:b=c,y=1,b<l){if(b<v)return b<d?c:c-c*c*.5;c>f&&(y=0,q=c,w=1)}return y!==0&&(b<m?(E=1+c,w=r(E),y=(w>>20)-a,y>0?M=1-(E-c):M=c-(E-1),M/=E):(E=c,w=r(E),y=(w>>20)-a,M=0),w&=1048575,w<434334?E=n(E,w|1072693248):(y+=1,E=n(E,w|1071644672),w=1048576-w>>2),q=E-1),g=.5*q*q,w===0?q===0?(M+=y*u,y*s+M):(A=g*(1-h*q),y*s-(A-(y*u+M)-q)):(I=q/(2+q),N=I*I,A=N*o(N),y===0?q-(g-I*(g+A)):y*s-(g-(I*(g+A)+(y*u+M))-q))}return Wi=p,Wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xi,y2;function qr(){if(y2)return Xi;y2=1;var e=Oh();return Xi=e,Xi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ki,M2;function Dh(){if(M2)return Ki;M2=1;var e=Math.sqrt;return Ki=e,Ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vi,L2;function Z(){if(L2)return Vi;L2=1;var e=Dh();return Vi=e,Vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ji,N2;function u8(){if(N2)return ji;N2=1;var e=.7853981633974483;return ji=e,ji}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yi,E2;function Ch(){if(E2)return Yi;E2=1;function e(r){var n,t,i;return r===0?.16666666666666713:(r<0?n=-r:n=r,n<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}return Yi=e,Yi}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qi,I2;function Bh(){if(I2)return Qi;I2=1;function e(r){var n,t,i;return r===0?.08333333333333809:(r<0?n=-r:n=r,n<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}return Qi=e,Qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ji,A2;function Hh(){if(A2)return Ji;A2=1;var e=X(),r=Z(),n=u8(),t=Ch(),i=Bh(),a=6123233995736766e-32;function o(s){var u,l,f,v,d;if(e(s))return NaN;if(s>0?f=s:(u=!0,f=-s),f>1)return NaN;if(f>.625)l=1-f,v=l*i(l),l=r(l+l),d=n-l,l=l*v-a,d-=l,d+=n;else{if(f<1e-8)return s;l=f*f,d=l*t(l),d=f*d+f}return u?-d:d}return Ji=o,Ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zi,S2;function cl(){if(S2)return Zi;S2=1;var e=Hh();return Zi=e,Zi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zi,P2;function Uh(){if(P2)return zi;P2=1;var e=Math.ceil;return zi=e,zi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xi,T2;function Gh(){if(T2)return xi;T2=1;var e=Uh();return xi=e,xi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ra,k2;function Wh(){if(k2)return ra;k2=1;var e=Rr(),r=Gh();function n(t){return t<0?r(t):e(t)}return ra=n,ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ea,F2;function dl(){if(F2)return ea;F2=1;var e=Wh();return ea=e,ea}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var na,O2;function Xh(){if(O2)return na;O2=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return na=e,na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ta,D2;function Kh(){if(D2)return ta;D2=1;var e=Zr(),r=Xh();function n(t,i,a){var o,s,u,l;return o=t-i,s=o*o,u=o-s*r(s),l=1-(i-o*u/(2-u)-t),e(l,a)}return ta=n,ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ia,C2;function Vh(){if(C2)return ia;C2=1;var e=X(),r=dl(),n=lr(),t=tr(),i=Kh(),a=.6931471803691238,o=19082149292705877e-26,s=1.4426950408889634,u=709.782712893384,l=-745.1332191019411,f=1/(1<<28),v=-f;function d(m){var h,p,c;return e(m)||m===t?m:m===n?0:m>u?t:m<l?0:m>v&&m<f?1+m:(m<0?c=r(s*m-.5):c=r(s*m+.5),h=m-c*a,p=c*o,i(h,p,c))}return ia=d,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aa,B2;function ir(){if(B2)return aa;B2=1;var e=Vh();return aa=e,aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oa,H2;function jh(){if(H2)return oa;H2=1;var e=Rr();function r(n){return e(n)===n}return oa=r,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,U2;function xr(){if(U2)return sa;U2=1;var e=jh();return sa=e,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua,G2;function Yh(){if(G2)return ua;G2=1;var e=xr();function r(n){return e(n/2)}return ua=r,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,W2;function Qh(){if(W2)return la;W2=1;var e=Yh();return la=e,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,X2;function Jh(){if(X2)return fa;X2=1;var e=Qh();function r(n){return n>0?e(n-1):e(n+1)}return fa=r,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,K2;function hl(){if(K2)return va;K2=1;var e=Jh();return va=e,va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,V2;function Zh(){if(V2)return ca;V2=1;function e(r){return r|0}return ca=e,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,j2;function l8(){if(j2)return da;j2=1;var e=Zh();return da=e,da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ha,Y2;function zh(){if(Y2)return ha;Y2=1;var e=hl(),r=fl(),n=lr(),t=tr();function i(a,o){return o===n?t:o===t?0:o>0?e(o)?a:0:e(o)?r(t,a):t}return ha=i,ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var pa,Q2;function xh(){if(Q2)return pa;Q2=1;var e=Pr(),r=mr(),n=1072693247,t=1e300,i=1e-300;function a(o,s){var u,l;return l=r(o),u=l&e,u<=n?s<0?t*t:i*i:s>0?t*t:i*i}return pa=a,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ma,J2;function rp(){if(J2)return ma;J2=1;var e=J(),r=tr();function n(t,i){return t===-1?(t-t)/(t-t):t===1?1:e(t)<1==(i===r)?0:r}return ma=n,ma}/**
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
*/var _a,Z2;function f8(){if(Z2)return _a;Z2=1;var e=20;return _a=e,_a}/**
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
*/var ga,z2;function ep(){if(z2)return ga;z2=1;function e(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}return ga=e,ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var $a,x2;function np(){if(x2)return $a;x2=1;var e=mr(),r=Qr(),n=fe(),t=Cr(),i=f8(),a=ep(),o=1048575,s=1048576,u=1072693248,l=536870912,f=524288,v=9007199254740992,d=.9617966939259756,m=.9617967009544373,h=-7028461650952758e-24,p=[1,1.5],c=[0,.5849624872207642],g=[0,1350039202129749e-23];function w(b,q,M){var I,N,A,E,y,_,$,R,L,F,S,O,T,k,P,K,D,G,V,Q,C,H;return Q=0,M<s&&(q*=v,Q-=53,M=e(q)),Q+=(M>>i)-t|0,C=M&o|0,M=C|u|0,C<=235662?H=0:C<767610?H=1:(H=0,Q+=1,M-=s),q=n(q,M),R=p[H],G=q-R,V=1/(q+R),N=G*V,E=r(N,0),I=(M>>1|l)+f,I+=H<<18,_=n(0,I),$=q-(_-R),y=V*(G-E*_-E*$),A=N*N,D=A*A*a(A),D+=y*(E+N),A=E*E,_=3+A+D,_=r(_,0),$=D-(_-3-A),G=E*_,V=y*_+$*N,F=G+V,F=r(F,0),S=V-(F-G),O=m*F,T=h*F+S*d+g[H],L=c[H],K=Q,k=O+T+L+K,k=r(k,0),P=T-(k-K-L-O),b[0]=k,b[1]=P,b}return $a=w,$a}/**
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
*/var qa,rc;function tp(){if(rc)return qa;rc=1;function e(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}return qa=e,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var wa,ec;function ip(){if(ec)return wa;ec=1;var e=Qr(),r=tp(),n=1.4426950408889634,t=1.4426950216293335,i=19259629911266175e-24;function a(o,s){var u,l,f,v,d,m;return f=s-1,v=f*f*r(f),d=t*f,m=f*i-v*n,l=d+m,l=e(l,0),u=m-(l-d),o[0]=l,o[1]=u,o}return wa=a,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,nc;function ap(){if(nc)return ba;nc=1;var e=.6931471805599453;return ba=e,ba}/**
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
*/var Ra,tc;function op(){if(tc)return Ra;tc=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return Ra=e,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ya,ic;function sp(){if(ic)return ya;ic=1;var e=mr(),r=fe(),n=Qr(),t=l8(),i=Zr(),a=ap(),o=Cr(),s=Pr(),u=n8(),l=f8(),f=op(),v=1048576,d=1071644672,m=.6931471824645996,h=-1904654299957768e-24;function p(c,g,w){var b,q,M,I,N,A,E,y,_,$,R;return $=c&s|0,R=($>>l)-o|0,_=0,$>d&&(_=c+(v>>R+1)>>>0,R=((_&s)>>l)-o|0,b=(_&~(u>>R))>>>0,M=r(0,b),_=(_&u|v)>>l-R>>>0,c<0&&(_=-_),g-=M),M=w+g,M=n(M,0),N=M*m,A=(w-(M-g))*a+M*h,y=N+A,E=A-(y-N),M=y*y,q=y-M*f(M),I=y*q/(q-2)-(E+y*E),y=1-(I-y),c=e(y),c=t(c),c+=_<<l>>>0,c>>l<=0?y=i(y,_):y=r(y,c),y}return ya=p,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ma,ac;function up(){if(ac)return Ma;ac=1;var e=X(),r=hl(),n=Jr(),t=xr(),i=Z(),a=J(),o=ll(),s=Qr(),u=l8(),l=lr(),f=tr(),v=Pr(),d=zh(),m=xh(),h=rp(),p=np(),c=ip(),g=sp(),w=1072693247,b=1105199104,q=1139802112,M=1083179008,I=1072693248,N=1083231232,A=3230714880,E=31,y=1e300,_=1e-300,$=8008566259537294e-32,R=[0,0],L=[0,0];function F(S,O){var T,k,P,K,D,G,V,Q,C,H,B,or,er,W,Y,sr;if(e(S)||e(O))return NaN;if(o.assign(O,R,1,0),G=R[0],V=R[1],V===0){if(O===0)return 1;if(O===1)return S;if(O===-1)return 1/S;if(O===.5)return i(S);if(O===-.5)return 1/i(S);if(O===2)return S*S;if(O===3)return S*S*S;if(O===4)return S*=S,S*S;if(n(O))return h(S,O)}if(o.assign(S,R,1,0),K=R[0],D=R[1],D===0){if(K===0)return d(S,O);if(S===1)return 1;if(S===-1&&r(O))return-1;if(n(S))return S===l?F(-0,-O):O<0?0:f}if(S<0&&t(O)===!1)return(S-S)/(S-S);if(P=a(S),T=K&v|0,k=G&v|0,Q=K>>>E|0,C=G>>>E|0,Q&&r(O)?Q=-1:Q=1,k>b){if(k>q)return m(S,O);if(T<w)return C===1?Q*y*y:Q*_*_;if(T>I)return C===0?Q*y*y:Q*_*_;er=c(L,P)}else er=p(L,P,T);if(H=s(O,0),or=(O-H)*er[0]+O*er[1],B=H*er[0],W=or+B,o.assign(W,R,1,0),Y=u(R[0]),sr=u(R[1]),Y>=M){if((Y-M|sr)!==0||or+$>W-B)return Q*y*y}else if((Y&v)>=N&&((Y-A|sr)!==0||or<=W-B))return Q*_*_;return W=g(Y,B,or),Q*W}return Ma=F,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,oc;function ar(){if(oc)return La;oc=1;var e=up();return La=e,La}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Na,sc;function re(){if(sc)return Na;sc=1;var e=2.718281828459045;return Na=e,Na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,uc;function Mr(){if(uc)return Ea;uc=1;var e=2220446049250313e-31;return Ea=e,Ea}/**
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
*/var Ia,lc;function lp(){if(lc)return Ia;lc=1;function e(r){var n,t,i;return r===0?1/0:(r<0?n=-r:n=r,n<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}return Ia=e,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Aa,fc;function fp(){if(fc)return Aa;fc=1;var e=X(),r=qr(),n=Z(),t=J(),i=ir(),a=ar(),o=re(),s=Mr(),u=lp(),l=10.900511;function f(v,d){var m,h,p,c,g,w,b;return e(v)||e(d)?NaN:v<0||d<0?NaN:d===1?1/v:v===1?1/d:(b=v+d,b<s?(g=b/v,g/=d,g):b===v&&d<s?1/d:b===d&&v<s?1/v:(v<d&&(w=d,d=v,v=w),h=v+l-.5,p=d+l-.5,c=b+l-.5,g=u(v)*(u(d)/u(b)),m=v-.5-d,t(d*m)<c*100&&v>100?g*=i(m*r(-d/c)):g*=a(h/c,m),c>1e10?g*=a(h/c*(p/c),d):g*=a(h*p/(c*c),d),g*=n(o/p),g))}return Aa=f,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sa,vc;function Te(){if(vc)return Sa;vc=1;var e=fp();return Sa=e,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,cc;function vp(){if(cc)return Pa;cc=1;var e=tr();function r(n){return n===0&&1/n===e}return Pa=r,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ta,dc;function cp(){if(dc)return Ta;dc=1;var e=vp();return Ta=e,Ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,hc;function dp(){if(hc)return ka;hc=1;var e=cp(),r=X(),n=tr();function t(i,a){return r(i)||r(a)?NaN:i===n||a===n?n:i===a&&i===0?e(i)?i:a:i>a?i:a}return ka=t,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,pc;function Hr(){if(pc)return Fa;pc=1;var e=dp();return Fa=e,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oa,mc;function hp(){if(mc)return Oa;mc=1;var e=lr();function r(n){return n===0&&1/n===e}return Oa=r,Oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,_c;function v8(){if(_c)return Da;_c=1;var e=hp();return Da=e,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ca,gc;function pp(){if(gc)return Ca;gc=1;var e=v8(),r=X(),n=lr();function t(i,a){return r(i)||r(a)?NaN:i===n||a===n?n:i===a&&i===0?e(i)?i:a:i<a?i:a}return Ca=t,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,$c;function Tr(){if($c)return Ba;$c=1;var e=pp();return Ba=e,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,qc;function Ur(){if(qc)return Ha;qc=1;var e=17976931348623157e292;return Ha=e,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,wc;function c8(){if(wc)return Ua;wc=1;var e=2147483647;return Ua=e,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ga,bc;function pl(){if(bc)return Ga;bc=1;var e=1.5707963267948966;return Ga=e,Ga}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,Rc;function mp(){if(Rc)return Wa;Rc=1;function e(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}return Wa=e,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,yc;function _p(){if(yc)return Xa;yc=1;function e(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}return Xa=e,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ka,Mc;function gp(){if(Mc)return Ka;Mc=1;var e=mp(),r=_p();function n(t,i){var a,o,s,u;return u=t*t,s=u*u,o=u*e(u),o+=s*s*r(u),a=.5*u,s=1-a,s+(1-s-a+(u*o-t*i))}return Ka=n,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Va,Lc;function d8(){if(Lc)return Va;Lc=1;var e=gp();return Va=e,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ja,Nc;function $p(){if(Nc)return ja;Nc=1;var e=-.16666666666666632,r=.00833333333332249,n=-.0001984126982985795,t=27557313707070068e-22,i=-25050760253406863e-24,a=158969099521155e-24;function o(s,u){var l,f,v,d;return d=s*s,v=d*d,l=r+d*(n+d*t)+d*v*(i+d*a),f=d*s,u===0?s+f*(e+d*l):s-(d*(.5*u-f*l)-u-f*e)}return ja=o,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,Ec;function h8(){if(Ec)return Ya;Ec=1;var e=$p();return Ya=e,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Qa,Ic;function qp(){if(Ic)return Qa;Ic=1;var e=Pr(),r=le(),n=mr(),t=d8(),i=h8(),a=vl(),o=1072243195,s=1045430272,u=[0,0];function l(f){var v,d;if(v=n(f),v&=e,v<=o)return v<s?f:i(f,0);if(v>=r)return NaN;switch(d=a(f,u),d&3){case 0:return i(u[0],u[1]);case 1:return t(u[0],u[1]);case 2:return-i(u[0],u[1]);default:return-t(u[0],u[1])}}return Qa=l,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja,Ac;function ve(){if(Ac)return Ja;Ac=1;var e=qp();return Ja=e,Ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Za,Sc;function ke(){if(Sc)return Za;Sc=1;var e=2.5066282746310007;return Za=e,Za}/**
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
*/var za,Pc;function wp(){if(Pc)return za;Pc=1;function e(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}return za=e,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var xa,Tc;function bp(){if(Tc)return xa;Tc=1;var e=ke(),r=ar(),n=ir(),t=wp(),i=143.01608;function a(o){var s,u,l;return s=1/o,s=1+s*t(s),u=n(o),o>i?(l=r(o,.5*o-.25),u=l*(l/u)):u=r(o,o-.5)/u,e*u*s}return xa=a,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,kc;function Rp(){if(kc)return r0;kc=1;var e=.5772156649015329;return r0=e,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var e0,Fc;function yp(){if(Fc)return e0;Fc=1;var e=Rp();function r(n,t){return t/((1+e*n)*n)}return e0=r,e0}/**
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
*/var n0,Oc;function Mp(){if(Oc)return n0;Oc=1;function e(r){var n,t,i;return r===0?1:(r<0?n=-r:n=r,n<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}return n0=e,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var t0,Dc;function Lp(){if(Dc)return t0;Dc=1;var e=X(),r=xr(),n=v8(),t=J(),i=Rr(),a=ve(),o=tr(),s=lr(),u=Ir(),l=bp(),f=yp(),v=Mp();function d(m){var h,p,c,g;if(r(m)&&m<0||m===s||e(m))return NaN;if(m===0)return n(m)?s:o;if(m>171.61447887182297)return o;if(m<-170.5674972726612)return 0;if(p=t(m),p>33)return m>=0?l(m):(c=i(p),(c&1)===0?h=-1:h=1,g=p-c,g>.5&&(c+=1,g=p-c),g=p*a(u*g),h*u/(t(g)*l(p)));for(g=1;m>=3;)m-=1,g*=m;for(;m<0;){if(m>-1e-9)return f(m,g);g/=m,m+=1}for(;m<2;){if(m<1e-9)return f(m,g);g/=m,m+=1}return m===2?g:(m-=2,g*v(m))}return t0=d,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i0,Cc;function Lr(){if(Cc)return i0;Cc=1;var e=Lp();return i0=e,i0}/**
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
*/var a0,Bc;function Fe(){if(Bc)return a0;Bc=1;var e=170;return a0=e,a0}var Np=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,Hc;function Ep(){if(Hc)return o0;Hc=1;var e=X(),r=xr(),n=Lr(),t=tr(),i=Fe(),a=Np;function o(s){return e(s)?NaN:r(s)?s<0?NaN:s<=i?a[s]:t:n(s+1)}return o0=o,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,Uc;function p8(){if(Uc)return s0;Uc=1;var e=Ep();return s0=e,s0}/**
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
*/var u0,Gc;function Ip(){if(Gc)return u0;Gc=1;function e(r){var n,t,i;return r===0?1/0:(r<0?n=-r:n=r,n<=1?(t=3847467039331777e-5+r*(3685766504351951e-5+r*(1588920245372942e-5+r*(4059208354298835e-6+r*(6805476611834733e-7+r*(7823975500312005e-8+r*(6246580776401795e-9+r*(341986.3488721347+r*(12287.194511824551+r*(261.61404416416684+r*2.5066282746310007))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=2.5066282746310007+r*(261.61404416416684+r*(12287.194511824551+r*(341986.3488721347+r*(6246580776401795e-9+r*(7823975500312005e-8+r*(6805476611834733e-7+r*(4059208354298835e-6+r*(1588920245372942e-5+r*(3685766504351951e-5+r*3847467039331777e-5))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}return u0=e,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var l0,Wc;function Ap(){if(Wc)return l0;Wc=1;var e=Ip();return l0=e,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f0,Xc;function Sp(){if(Xc)return f0;Xc=1;var e=Ap();return f0=e,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v0,Kc;function ce(){if(Kc)return v0;Kc=1;var e=10.900511;return v0=e,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var c0,Vc;function Pp(){if(Vc)return c0;Vc=1;var e=Sp(),r=Lr(),n=qr(),t=J(),i=ir(),a=ar(),o=Mr(),s=re(),u=ce(),l=Fe(),f=4269068009004705e289;function v(d,m){var h,p,c;return d<o?m>=l?(p=v(m,l-m),p*=d,p*=f,1/p):1/(d*r(d+m)):(c=d+u-.5,d+m===d?t(m/c)<o?h=i(-m):h=1:(t(m)<10?h=i((.5-d)*n(m/c)):h=a(c/(c+m),d-.5),h*=e(d)/e(d+m)),h*=a(s/(c+m),m),h)}return c0=v,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var d0,jc;function Tp(){if(jc)return d0;jc=1;var e=J(),r=Rr(),n=Lr(),t=p8(),i=Fe(),a=Pp();function o(s,u){var l,f,v;if(s<=0||s+u<=0)return n(s)/n(s+u);if(f=r(u),f===u){if(v=r(s),v===s&&s<=i&&s+u<=i)return t(v-1)/t(f+v-1);if(e(u)<20){if(u===0)return 1;if(u<0){for(s-=1,l=s,u+=1;u!==0;)s-=1,l*=s,u+=1;return l}for(l=1/s,u-=1;u!==0;)s+=1,l/=s,u-=1;return l}}return a(s,u)}return d0=o,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h0,Yc;function ml(){if(Yc)return h0;Yc=1;var e=Tp();return h0=e,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var p0,Qc;function kp(){if(Qc)return p0;Qc=1;var e=mr(),r=d8(),n=h8(),t=vl(),i=Pr(),a=le(),o=[0,0],s=1072243195,u=1044381696;function l(f){var v,d;if(v=e(f),v&=i,v<=s)return v<u?1:r(f,0);if(v>=a)return NaN;switch(d=t(f,o),d&3){case 0:return r(o[0],o[1]);case 1:return-n(o[0],o[1]);case 2:return-r(o[0],o[1]);default:return n(o[0],o[1])}}return p0=l,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,Jc;function _l(){if(Jc)return m0;Jc=1;var e=kp();return m0=e,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _0,Zc;function Fp(){if(Zc)return _0;Zc=1;var e=X(),r=Jr(),n=_l(),t=ve(),i=J(),a=fl(),o=Ir();function s(u){var l,f;return e(u)?NaN:r(u)?NaN:(f=u%2,l=i(f),l===0||l===1?a(0,f):l<.25?t(o*f):l<.75?(l=.5-l,a(n(o*l),f)):l<1.25?(f=a(1,f)-f,t(o*f)):l<1.75?(l-=1.5,-a(n(o*l),f)):(f-=a(2,f),t(o*f)))}return _0=s,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,zc;function Op(){if(zc)return g0;zc=1;var e=Fp();return g0=e,g0}/**
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
*/var $0,xc;function Dp(){if(xc)return $0;xc=1;function e(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}return $0=e,$0}/**
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
*/var q0,r3;function Cp(){if(r3)return q0;r3=1;function e(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}return q0=e,q0}/**
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
*/var w0,e3;function Bp(){if(e3)return w0;e3=1;function e(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}return w0=e,w0}/**
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
*/var b0,n3;function Hp(){if(n3)return b0;n3=1;function e(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}return b0=e,b0}/**
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
*/var R0,t3;function Up(){if(t3)return R0;t3=1;function e(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}return R0=e,R0}/**
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
*/var y0,i3;function Gp(){if(i3)return y0;i3=1;function e(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}return y0=e,y0}/**
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
*/var M0,a3;function Wp(){if(a3)return M0;a3=1;function e(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}return M0=e,M0}/**
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
*/var L0,o3;function Xp(){if(o3)return L0;o3=1;function e(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}return L0=e,L0}/**
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
*/var N0,s3;function Kp(){if(s3)return N0;s3=1;function e(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}return N0=e,N0}/**
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
*/var E0,u3;function Vp(){if(u3)return E0;u3=1;function e(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}return E0=e,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var I0,l3;function jp(){if(l3)return I0;l3=1;var e=X(),r=Jr(),n=J(),t=rr(),i=dl(),a=Op(),o=Ir(),s=tr(),u=Dp(),l=Cp(),f=Bp(),v=Hp(),d=Up(),m=Gp(),h=Wp(),p=Xp(),c=Kp(),g=Vp(),w=.07721566490153287,b=.3224670334241136,q=1,M=-.07721566490153287,I=.48383612272381005,N=-.1475877229945939,A=.06462494023913339,E=-.07721566490153287,y=1,_=.4189385332046727,$=1.4616321449683622,R=4503599627370496,L=72057594037927940,F=13877787807814457e-33,S=1.4616321449683622,O=-.12148629053584961,T=-3638676997039505e-33;function k(P){var K,D,G,V,Q,C,H,B,or,er,W,Y,sr;if(e(P)||r(P))return P;if(P===0)return s;if(P<0?(K=!0,P=-P):K=!1,P<F)return-t(P);if(K){if(P>=R||(or=a(P),or===0))return s;D=t(o/n(or*P))}if(P===1||P===2)return 0;if(P<2)switch(P<=.9?(sr=-t(P),P>=$-1+.27?(W=1-P,G=0):P>=$-1-.27?(W=P-(S-1),G=1):(W=P,G=2)):(sr=0,P>=$+.27?(W=2-P,G=0):P>=$-.27?(W=P-S,G=1):(W=P-1,G=2)),G){case 0:Y=W*W,C=w+Y*u(Y),Q=Y*(b+Y*l(Y)),H=W*C+Q,sr+=H-.5*W;break;case 1:Y=W*W,er=Y*W,C=I+er*d(er),Q=N+er*m(er),V=A+er*h(er),H=Y*C-(T-er*(Q+W*V)),sr+=O+H;break;case 2:C=W*(E+W*p(W)),Q=y+W*c(W),sr+=-.5*W+C/Q;break}else if(P<8)switch(G=i(P),W=P-G,H=W*(M+W*v(W)),B=q+W*f(W),sr=.5*W+H/B,Y=1,G){case 7:Y*=W+6;case 6:Y*=W+5;case 5:Y*=W+4;case 4:Y*=W+3;case 3:Y*=W+2,sr+=t(Y)}else P<L?(or=t(P),Y=1/P,W=Y*Y,er=_+Y*g(W),sr=(P-.5)*(or-1)+er):sr=P*(t(P)-1);return K&&(sr=D-sr),sr}return I0=k,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,f3;function ee(){if(f3)return A0;f3=1;var e=jp();return A0=e,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,v3;function kr(){if(v3)return S0;v3=1;var e=709.782712893384;return S0=e,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,c3;function Yp(){if(c3)return P0;c3=1;var e=14901161193847656e-24;return P0=e,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,d3;function Qp(){if(d3)return T0;d3=1;var e=eval;return T0=e,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,h3;function Jp(){if(h3)return k0;h3=1;var e=Qp();function r(){var n;try{e('"use strict"; (function* () {})'),n=!0}catch{n=!1}return n}return k0=r,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,p3;function m8(){if(p3)return F0;p3=1;var e=Jp();return F0=e,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,m3;function Zp(){if(m3)return O0;m3=1;var e=J(),r=Mr(),n=1e6;function t(i,a){var o,s,u,l,f,v;if(v={},arguments.length>1&&(v=a),s=v.tolerance||r,l=v.maxTerms||n,f=v.initialValue||0,o=typeof i.next=="function",o===!0){for(u of i)if(f+=u,e(s*f)>=e(u)||--l===0)break}else do u=i(),f+=u;while(e(s*f)<e(u)&&--l);return f}return O0=t,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,_3;function zp(){if(_3)return D0;_3=1;var e=J(),r=Mr(),n=1e6;function t(i,a){var o,s,u,l,f;f={},arguments.length>1&&(f=a),o=f.tolerance||r,u=f.maxTerms||n,l=f.initialValue||0;do s=i(),l+=s;while(e(o*l)<e(s)&&--u);return l}return D0=t,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,g3;function de(){if(g3)return C0;g3=1;var e=m8(),r=Zp(),n=zp(),t;return e()?t=r:t=n,C0=t,C0}/**
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
*/var B0,$3;function xp(){if($3)return B0;$3=1;function e(r,n){var t=1,i=r,a=n;return o;function o(){var s=t;return t*=i/a,i-=1,s}}return B0=e,B0}/**
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
*/var H0,q3;function rm(){if(q3)return H0;q3=1;var e=de(),r=xp();function n(t,i){var a,o;return o=r(t,i),a=e(o),a}return H0=n,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var U0,w3;function em(){if(w3)return U0;w3=1;var e=ir();function r(n,t){var i,a,o,s;if(o=e(-t),a=o,a!==0)for(i=a,s=1;s<n;++s)i/=s,i*=t,a+=i;return a}return U0=r,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0,b3;function nm(){if(b3)return G0;b3=1;function e(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}return G0=e,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,R3;function tm(){if(R3)return W0;R3=1;function e(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}return W0=e,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,y3;function im(){if(y3)return X0;y3=1;function e(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}return X0=e,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K0,M3;function am(){if(M3)return K0;M3=1;function e(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}return K0=e,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,L3;function om(){if(L3)return V0;L3=1;function e(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}return V0=e,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,N3;function sm(){if(N3)return j0;N3=1;function e(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}return j0=e,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,E3;function um(){if(E3)return Y0;E3=1;function e(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}return Y0=e,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,I3;function lm(){if(I3)return Q0;I3=1;function e(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}return Q0=e,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var J0,A3;function fm(){if(A3)return J0;A3=1;var e=X(),r=ir(),n=Qr(),t=tr(),i=lr(),a=nm(),o=tm(),s=im(),u=am(),l=om(),f=sm(),v=um(),d=lm(),m=1e-300,h=13877787807814457e-33,p=.8450629115104675,c=.12837916709551256,g=1,w=-.0023621185607526594,b=1,q=-.009864944034847148,M=1,I=-.0098649429247001,N=1;function A(E){var y,_,$,R,L,F,S,O;if(e(E))return NaN;if(E===t)return 0;if(E===i)return 2;if(E===0)return 1;if(E<0?(y=!0,_=-E):(y=!1,_=E),_<.84375)return _<h?1-E:($=E*E,R=c+$*a($),L=g+$*o($),F=R/L,E<.25?1-(E+E*F):(R=E*F,R+=E-.5,.5-R));if(_<1.25)return L=_-1,S=w+L*s(L),O=b+L*u(L),y?1+p+S/O:1-p-S/O;if(_<28){if(L=1/(_*_),_<2.857142857142857)R=q+L*l(L),L=M+L*f(L);else{if(E<-6)return 2-m;R=I+L*v(L),L=N+L*d(L)}return $=n(_,0),R=r(-($*$)-.5625)*r(($-_)*($+_)+R/L),y?2-R/_:R/_}return y?2-m:m*m}return J0=A,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,S3;function Oe(){if(S3)return Z0;S3=1;var e=fm();return Z0=e,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var z0,P3;function vm(){if(P3)return z0;P3=1;var e=Oe(),r=Z(),n=ir(),t=Ir();function i(a,o){var s,u,l,f,v;if(f=e(r(o)),f!==0&&a>1){for(u=n(-o)/r(t*o),u*=o,s=.5,u/=s,l=u,v=2;v<a;++v)u/=v-s,u*=o,l+=u;f+=l}return f}return z0=i,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,T3;function ne(){if(T3)return x0;T3=1;var e=-708.3964185322641;return x0=e,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ro,k3;function cm(){if(k3)return ro;k3=1;var e=ir(),r=ar(),n=rr(),t=kr(),i=ne();function a(o,s){var u,l;return l=o*n(s),s>=1?l<t&&-s>i?u=r(s,o)*e(-s):o>=1?u=r(s/e(s/o),o):u=e(l-s):l>i?u=r(s,o)*e(-s):s/o<t?u=r(s/e(s/o),o):u=e(l-s),u}return ro=a,ro}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eo,F3;function _8(){if(F3)return eo;F3=1;function e(r,n){var t,i;if(i=r.length,i<2||n===0)return i===0?0:r[0];for(i-=1,t=r[i]*n+r[i-1],i-=2;i>=0;)t=t*n+r[i],i-=1;return t}return eo=e,eo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var no,O3;function dm(){if(O3)return no;O3=1;var e=Function;return no=e,no}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var to,D3;function hm(){if(D3)return to;D3=1;var e=dm();return to=e,to}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var io,C3;function pm(){if(C3)return io;C3=1;var e=hm(),r=_8();function n(t){var i,a,o,s;if(t.length>500)return u;if(i="return function evalpoly(x){",a=t.length,a===0)i+="return 0.0;";else if(a===1)i+="return "+t[0]+";";else{for(i+="if(x===0.0){return "+t[0]+";}",i+="return "+t[0],o=a-1,s=1;s<a;s++)i+="+x*",s<o&&(i+="("),i+=t[s];for(s=0;s<o-1;s++)i+=")";i+=";"}return i+="}",i+="//# sourceURL=evalpoly.factory.js",new e(i)();function u(l){return r(t,l)}}return io=n,io}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ao,B3;function Fr(){if(B3)return ao;B3=1;var e=fr(),r=_8(),n=pm();return e(r,"factory",n),ao=r,ao}/**
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
*/var oo,H3;function mm(){if(H3)return oo;H3=1;function e(r){var n=-r,t=-1,i=0;return a;function a(){return t*=n,i+=1,t/i}}return oo=e,oo}/**
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
*/var so,U3;function _m(){if(U3)return so;U3=1;var e=J(),r=rr(),n=Mr(),t=de(),i=mm();function a(o){var s,u;return o<=-1?NaN:(u=e(o),u>.95?r(1+o)-o:u<n?-o*o/2:(s={initialValue:-o},t(i(o),s)))}return so=a,so}/**
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
*/var uo,G3;function g8(){if(G3)return uo;G3=1;var e=_m();return uo=e,uo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lo,W3;function De(){if(W3)return lo;W3=1;var e=6.283185307179586;return lo=e,lo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fo,X3;function gm(){if(X3)return fo;X3=1;function e(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}return fo=e,fo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vo,K3;function $m(){if(K3)return vo;K3=1;function e(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}return vo=e,vo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var co,V3;function qm(){if(V3)return co;V3=1;function e(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}return co=e,co}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ho,j3;function wm(){if(j3)return ho;j3=1;function e(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}return ho=e,ho}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var po,Y3;function bm(){if(Y3)return po;Y3=1;function e(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}return po=e,po}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mo,Q3;function Rm(){if(Q3)return mo;Q3=1;function e(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}return mo=e,mo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _o,J3;function ym(){if(J3)return _o;J3=1;function e(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}return _o=e,_o}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var go,Z3;function Mm(){if(Z3)return go;Z3=1;function e(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}return go=e,go}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $o,z3;function Lm(){if(z3)return $o;z3=1;function e(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}return $o=e,$o}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var qo,x3;function Nm(){if(x3)return qo;x3=1;var e=Fr(),r=g8(),n=Oe(),t=Z(),i=ir(),a=De(),o=gm(),s=$m(),u=qm(),l=wm(),f=bm(),v=Rm(),d=ym(),m=Mm(),h=Lm(),p=[0,0,0,0,0,0,0,0,0,0];function c(g,w){var b,q,M,I,N;return q=(w-g)/g,M=-r(q),I=g*M,N=t(2*M),w<g&&(N=-N),p[0]=o(N),p[1]=s(N),p[2]=u(N),p[3]=l(N),p[4]=f(N),p[5]=v(N),p[6]=d(N),p[7]=m(N),p[8]=h(N),p[9]=-.0005967612901927463,b=e(p,1/g),b*=i(-I)/t(a*g),w<g&&(b=-b),b+=n(t(I))/2,b}return qo=c,qo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var wo,r6;function Em(){if(r6)return wo;r6=1;function e(r,n){var t=1,i=r,a=n;return o;function o(){var s=t;return i+=1,t*=a/i,s}}return wo=e,wo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var bo,e6;function $8(){if(e6)return bo;e6=1;var e=de(),r=Em();function n(t,i,a){var o,s;return a=a||0,s=r(t,i),o=e(s,{initialValue:a}),o}return bo=n,bo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ro,n6;function Im(){if(n6)return Ro;n6=1;function e(r){var n,t,i;return r===0?1/0:(r<0?n=-r:n=r,n<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}return Ro=e,Ro}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var yo,t6;function Am(){if(t6)return yo;t6=1;var e=Im();return yo=e,yo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mo,i6;function Ce(){if(i6)return Mo;i6=1;var e=Am();return Mo=e,Mo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Lo,a6;function Sm(){if(a6)return Lo;a6=1;var e=Ce(),r=ee(),n=Lr(),t=g8(),i=Z(),a=J(),o=ir(),s=ar(),u=Hr(),l=Tr(),f=rr(),v=Ur(),d=kr(),m=ne(),h=ce(),p=re();function c(g,w){var b,q,M,I,N,A,E;return M=g+h-.5,E=(w-g-h+.5)/M,g<1?w<=m||g<1/v?o(g*f(w)-w-r(g)):s(w,g)*o(-w)/n(g):(a(E*E*g)<=100&&g>150?(b=g*t(E)+w*(.5-h)/M,b=o(b)):(I=g*f(w/M),N=g-w,l(I,N)<=m||u(I,N)>=d?(q=N/g,l(I,N)/2>m&&u(I,N)/2<d?(A=s(w/M,g/2)*o(N/2),b=A*A):l(I,N)/4>m&&u(I,N)/4<d&&w>g?(A=s(w/M,g/4)*o(N/4),b=A*A,b*=b):q>m&&q<d?b=s(w*o(q)/M,g):b=o(I+N)):b=s(w/M,g)*o(N)),b*=i(M/p)/e(g),b)}return Lo=c,Lo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var No,o6;function Pm(){if(o6)return No;o6=1;var e=X(),r=Jr(),n=J(),t=zr(),i=rr(),a=ar(),o=dl();function s(u,l){var f,v;if(e(u)||e(l))return NaN;if(l===0)return 0;if(u===0)return-1;if(u<0&&l%2===0&&(u=-u),u>0){if((n(l*(u-1))<.5||n(l)<.2)&&(v=i(u)*l,v<.5))return t(v)}else if(o(l)!==l)return NaN;return f=a(u,l)-1,r(f)||e(f)?NaN:f}return No=s,No}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eo,s6;function Tm(){if(s6)return Eo;s6=1;var e=Pm();return Eo=e,Eo}/**
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
*/var Io,u6;function km(){if(u6)return Io;u6=1;function e(r){var n,t,i;return r===0?-.01803556856784494:(r<0?n=-r:n=r,n<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}return Io=e,Io}/**
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
*/var Ao,l6;function Fm(){if(l6)return Ao;l6=1;function e(r){var n,t,i;return r===0?.04906224540690395:(r<0?n=-r:n=r,n<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}return Ao=e,Ao}/**
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
*/var So,f6;function Om(){if(f6)return So;f6=1;function e(r){var n,t,i;return r===0?-.029232972183027003:(r<0?n=-r:n=r,n<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}return So=e,So}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Po,v6;function Dm(){if(v6)return Po;v6=1;var e=rr(),r=Mr(),n=km(),t=Fm(),i=Om(),a=.15896368026733398,o=.5281534194946289,s=.45201730728149414;function u(l,f,v){var d,m,h,p;if(l<r)return-e(l);if(f===0||v===0)return 0;if(m=0,l>2){if(l>=3){do l-=1,v-=1,m+=e(l);while(l>=3);v=l-2}return h=v*(l+1),p=n(v),m+=h*a+h*p,m}return l<1&&(m+=-e(l),v=f,f=l,l+=1),l<=1.5?(h=t(f),d=f*v,m+=d*o+d*h,m):(h=v*f,p=i(-v),m+=h*s+h*p,m)}return Po=u,Po}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var To,c6;function Cm(){if(c6)return To;c6=1;var e=Lr(),r=zr(),n=qr(),t=X(),i=Dm();function a(o){return t(o)?NaN:o<0?o<-.5?e(1+o)-1:r(-n(o)+i(o+2,o+1,o)):o<2?r(i(o+1,o,o-1)):e(1+o)-1}return To=a,To}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ko,d6;function Bm(){if(d6)return ko;d6=1;var e=Cm();return ko=e,ko}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Fo,h6;function Hm(){if(h6)return Fo;h6=1;function e(r,n){var t,i,a,o;return t=-n,n=-n,i=r+1,a=1,s;function s(){return o=t/i,t*=n,a+=1,t/=a,i+=1,o}}return Fo=e,Fo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Oo,p6;function Um(){if(p6)return Oo;p6=1;var e=Tm(),r=de(),n=Bm(),t=Hm();function i(a,o,s){var u,l,f,v,d;return l=n(a),f=(l+1)/a,v=e(o,a),l-=v,l/=a,d=t(a,o),v+=1,u=s?f:0,l=-v*r(d,{initialValue:(u-l)/v}),s&&(l=-l),[l,f]}return Oo=i,Oo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Do,m6;function Be(){if(m6)return Do;m6=1;var e=11754943508222875e-54;return Do=e,Do}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Co,_6;function Gm(){if(_6)return Co;_6=1;var e=J(),r=Be(),n=Mr(),t=1e6;function i(s,u,l){var f,v,d,m,h,p,c;if(f=typeof s.next=="function",c=f?s.next().value:s(),m=c[1],d=c[0],m===0&&(m=r),h=m,p=0,f===!0)do c=s.next().value,c&&(p=c[1]+c[0]*p,p===0&&(p=r),h=c[1]+c[0]/h,h===0&&(h=r),p=1/p,v=h*p,m*=v);while(e(v-1)>u&&--l);else do c=s(),c&&(p=c[1]+c[0]*p,p===0&&(p=r),h=c[1]+c[0]/h,h===0&&(h=r),p=1/p,v=h*p,m*=v);while(c&&e(v-1)>u&&--l);return d/m}function a(s,u,l){var f,v,d,m,h,p;if(f=typeof s.next=="function",p=f?s.next().value:s(),d=p[1],d===0&&(d=r),m=d,h=0,f===!0)do p=s.next().value,p&&(h=p[1]+p[0]*h,h===0&&(h=r),m=p[1]+p[0]/m,m===0&&(m=r),h=1/h,v=m*h,d*=v);while(p&&e(v-1)>u&&--l);else do p=s(),p&&(h=p[1]+p[0]*h,h===0&&(h=r),m=p[1]+p[0]/m,m===0&&(m=r),h=1/h,v=m*h,d*=v);while(p&&e(v-1)>u&&--l);return d}function o(s,u){var l,f,v;return f={},arguments.length>1&&(f=u),l=f.maxIter||t,v=f.tolerance||n,f.keep?a(s,v,l):i(s,v,l)}return Co=o,Co}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bo,g6;function Wm(){if(g6)return Bo;g6=1;var e=J(),r=Mr(),n=Be(),t=1e6;function i(s,u,l){var f,v,d,m,h,p;p=s(),h=p[1],v=p[0],h===0&&(h=n),d=h,m=0;do p=s(),p&&(m=p[1]+p[0]*m,m===0&&(m=n),d=p[1]+p[0]/d,d===0&&(d=n),m=1/m,f=d*m,h*=f);while(p&&e(f-1)>u&&--l);return v/h}function a(s,u,l){var f,v,d,m,h;h=s(),m=h[1],m===0&&(m=n),v=m,d=0;do h=s(),h&&(d=h[1]+h[0]*d,d===0&&(d=n),v=h[1]+h[0]/v,v===0&&(v=n),d=1/d,f=v*d,m*=f);while(h&&e(f-1)>u&&--l);return m}function o(s,u){var l,f,v;return f={},arguments.length>1&&(f=u),v=f.tolerance||r,l=f.maxIter||t,f.keep?a(s,v,l):i(s,v,l)}return Bo=o,Bo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ho,$6;function q8(){if($6)return Ho;$6=1;var e=m8(),r=Gm(),n=Wm(),t;return e()?t=r:t=n,Ho=t,Ho}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Uo,q6;function Xm(){if(q6)return Uo;q6=1;function e(r,n){var t=n-r+1,i=r,a=0;return o;function o(){return a+=1,t+=2,[a*(i-a),t]}}return Uo=e,Uo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Go,w6;function w8(){if(w6)return Go;w6=1;var e=q8(),r=Xm();function n(t,i){var a=r(t,i);return 1/(i-t+1+e(a))}return Go=n,Go}/**
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
*/var Wo,b6;function Km(){if(b6)return Wo;b6=1;var e=Rr(),r=Lr(),n=J(),t=ar(),i=rr(),a=Yp(),o=Ur(),s=kr(),u=rm(),l=em(),f=vm(),v=cm(),d=Nm(),m=$8(),h=Sm(),p=Um(),c=w8();function g(w,b,q,M){var I,N,A,E,y,_,$,R,L,F,S,O,T,k;switch($=0,R=M,_=b<30&&b<=w+1&&w<s,_?(T=e(b),L=T===b,A=L?!1:n(T-b)===.5):(L=!1,A=!1),L&&w>.6?(R=!R,N=0):A&&w>.2?(R=!R,N=1):w<a&&b>1?N=6:w>1e3&&(b<w||n(b-50)/w<1)?(R=!R,N=7):w<.5?-.4/i(w)<b?N=2:N=3:w<1.1?w*.75<b?N=2:N=3:(y=!1,q&&b>20&&(F=n((w-b)/b),b>200?20/b>F*F&&(y=!0):F<.4&&(y=!0)),y?N=5:w-1/(3*w)<b?N=2:(N=4,R=!R)),N){case 0:$=l(b,w),q===!1&&($*=r(b));break;case 1:$=f(b,w),q===!1&&($*=r(b));break;case 2:$=q?h(b,w):v(b,w),$!==0&&(E=0,I=!1,R&&(E=q?1:r(b),q||$>=1||o*$>E?(E/=$,q||b<1||o/b>E?(E*=-b,I=!0):E=0):E=0),$*=m(b,w,E)/b,I&&(R=!1,$=-$));break;case 3:R=!R,S=p(b,w,R),$=S[0],k=S[1],R=!1,q&&($/=k);break;case 4:$=q?h(b,w):v(b,w),$!==0&&($*=c(b,w));break;case 5:$=d(b,w),w>=b&&(R=!R);break;case 6:$=q?t(w,b)/r(b+1):t(w,b)/b,$*=1-b*w/(b+1);break;case 7:$=q?h(b,w):v(b,w),$/=w,$!==0&&($*=u(b,w));break}return q&&$>1&&($=1),R&&(O=q?1:r(b),$=O-$),$}return Wo=g,Wo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Xo,R6;function Vm(){if(R6)return Xo;R6=1;var e=ee(),r=ir(),n=rr(),t=ke(),i=kr(),a=tr(),o=Fe(),s=Km(),u=$8(),l=w8();function f(v,d,m,h){var p,c,g,w;return v<0||d<=0?NaN:(p=m===void 0?!0:m,g=h,d>=o&&!p?(g&&d*4<v?(w=d*n(v)-v,w+=n(l(d,v))):!g&&d>4*v?(w=d*n(v)-v,c=0,w+=n(u(d,v,c)/d)):(w=s(v,d,!0,g),w===0?g?(w=1+1/(12*d)+1/(288*d*d),w=n(w)-d+(d-.5)*n(d),w+=n(t)):(w=d*n(v)-v,c=0,w+=n(u(d,v,c)/d)):w=n(w)+e(d)),w>i?a:r(w)):s(v,d,p,g))}return Xo=f,Xo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ko,y6;function b8(){if(y6)return Ko;y6=1;var e=Vm();return Ko=e,Ko}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Vo,M6;function jm(){if(M6)return Vo;M6=1;var e=ir(),r=ar(),n=rr(),t=kr(),i=ne();function a(o,s){var u,l;return l=o*n(s),s>=1?l<t&&-s>i?u=r(s,o)*e(-s):o>=1?u=r(s/e(s/o),o):u=e(l-s):l>i?u=r(s,o)*e(-s):s/o<t?u=r(s/e(s/o),o):u=e(l-s),u}return Vo=a,Vo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var jo,L6;function Ym(){if(L6)return jo;L6=1;var e=Ce(),r=ee(),n=Lr(),t=qr(),i=Z(),a=J(),o=ir(),s=ar(),u=Hr(),l=Tr(),f=rr(),v=kr(),d=ne(),m=ce(),h=re();function p(c,g){var w,b,q,M,I,N,A;return q=c+m-.5,A=(g-c-m+.5)/q,c<1?g<=d?o(c*f(g)-g-r(c)):s(g,c)*o(-g)/n(c):(a(A*A*c)<=100&&c>150?(w=c*(t(A)-A)+g*(.5-m)/q,w=o(w)):(M=c*f(g/q),I=c-g,l(M,I)<=d||u(M,I)>=v?(b=I/c,l(M,I)/2>d&&u(M,I)/2<v?(N=s(g/q,c/2)*o(I/2),w=N*N):l(M,I)/4>d&&u(M,I)/4<v&&g>c?(N=s(g/q,c/4)*o(I/4),w=N*N,w*=w):b>d&&b<v?w=s(g*o(b)/q,c):w=o(M+I)):w=s(g/q,c)*o(I)),w*=i(q/h)/e(c),w)}return jo=p,jo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Yo,N6;function Qm(){if(N6)return Yo;N6=1;var e=ml(),r=p8(),n=b8(),t=qr(),i=J(),a=ar(),o=rr(),s=Br(),u=Mr(),l=jm(),f=Ym(),v=new Array(30);function d(m,h,p,c,g,w,b){var q,M,I,N,A,E,y,_,$,R,L,F,S,O,T,k,P,K;if(E=h-1,P=m+E/2,c<.35?R=t(-c):R=o(p),K=-P*R,F=f(h,K),F<=s)return g;for(b?(q=F/e(m,h),q/=a(P,h)):q=l(h,K)/a(P,h),q*=w,v[0]=1,S=n(K,h,!0,!0),S/=F,N=g+q*S,I=1,y=R/2,y*=y,_=1,L=4*P*P,A=h,T=1;T<v.length;++T){for(I+=2,v[T]=0,$=h-T,M=3,O=1;O<T;++O)$=O*h-T,v[T]+=$*v[T-O]/r(M),M+=2;if(v[T]/=T,v[T]+=E/r(I),S=(A*(A+1)*S+(K+A+1)*_)/L,_*=y,A+=2,k=q*v[T]*S,N+=k,k>1){if(i(k)<i(u*N))break}else if(i(k/u)<i(N))break}return N}return Yo=d,Yo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Qo,E6;function Jm(){if(E6)return Qo;E6=1;function e(r,n,t){var i,a;if(t===0)return 1;for(i=1,a=0;a<t;a++)i*=(r+a)/(n+a);return i}return Qo=e,Qo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jo,I6;function Zm(){if(I6)return Jo;I6=1;var e=J(),r=Hr();function n(t,i){return r(e(t),e(i))}return Jo=n,Jo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zo,A6;function zm(){if(A6)return Zo;A6=1;var e=Zm();return Zo=e,Zo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zo,S6;function xm(){if(S6)return zo;S6=1;var e=J(),r=Tr();function n(t,i){return r(e(t),e(i))}return zo=n,zo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xo,P6;function r_(){if(P6)return xo;P6=1;var e=xm();return xo=e,xo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var rs,T6;function gl(){if(T6)return rs;T6=1;var e=Ce(),r=zm(),n=r_(),t=zr(),i=qr(),a=Z(),o=J(),s=ir(),u=ar(),l=Tr(),f=rr(),v=kr(),d=ne(),m=ce(),h=re();function p(c,g,w,b,q){var M,I,N,A,E,y,_,$,R,L,F,S,O,T;if(!q)return u(w,c)*u(b,g);if(O=c+g,A=c+m-.5,E=g+m-.5,y=O+m-.5,M=e(O),M/=e(c)*e(g),M*=a(E/h),M*=a(A/y),_=(w*g-b*A)/A,$=(b*c-w*E)/E,n(_,$)<.2)if(_*$>0||l(c,g)<1)o(_)<.1?M*=s(c*i(_)):M*=u(w*y/A,c),o($)<.1?M*=s(g*i($)):M*=u(b*y/E,g);else if(r(_,$)<.5)I=c<g,N=g/c,I&&N*$<.1||!I&&_/N>.1?(R=t(N*i($)),R=_+R+R*_,R=c*i(R),M*=s(R)):(R=t(i(_)/N),R=$+R+R*$,R=g*i(R),M*=s(R));else if(o(_)<o($))if(T=c*i(_)+g*f(b*y/E),T<=d||T>=v){if(T+=f(M),T>=v)return NaN;M=s(T)}else M*=s(T);else if(T=g*i($)+c*f(w*y/A),T<=d||T>=v){if(T+=f(M),T>=v)return NaN;M=s(T)}else M*=s(T);else if(F=w*y/A,S=b*y/E,_=c*f(F),$=g*f(S),_>=v||_<=d||$>=v||$<=d)if(c<g)if(L=u(S,g/c),R=c*(f(F)+f(L)),R<v&&R>d)M*=u(L*F,c);else{if($+=_+f(M),$>=v)return NaN;M=s($)}else if(L=u(F,c/g),R=(f(L)+f(S))*g,R<v&&R>d)M*=u(L*S,g);else{if($+=_+f(M),$>=v)return NaN;M=s($)}else M*=u(F,c)*u(S,g);return M}return rs=p,rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var es,k6;function e_(){if(k6)return es;k6=1;var e=q8(),r=gl(),n={keep:!0,maxIter:1e3};function t(a,o,s,u){var l=0;return f;function f(){var v,d,m;return d=(a+l-1)*(a+o+l-1)*l*(o-l)*s*s,v=a+2*l-1,d/=v*v,m=l,m+=l*(o-l)*s/(a+2*l-1),m+=(a+l)*(a*u-o*s+1+l*(2-s))/(a+2*l+1),l+=1,[d,m]}}function i(a,o,s,u,l,f){var v,d,m;return v=r(a,o,s,u,l),f&&(f[1]=v),v===0?v:(m=t(a,o,s,u),d=e(m,n),v/d)}return es=i,es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ns,F6;function n_(){if(F6)return ns;F6=1;var e=9007199254740991;return ns=e,ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ts,O6;function t_(){if(O6)return ts;O6=1;function e(r,n){var t=0,i;if(r===0)return n;if(n===0)return r;for(;(r&1)===0&&(n&1)===0;)r>>>=1,n>>>=1,t+=1;for(;(r&1)===0;)r>>>=1;for(;n;){for(;(n&1)===0;)n>>>=1;r>n&&(i=n,n=r,r=i),n-=r}return r<<t}return ts=e,ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var is,D6;function i_(){if(D6)return is;D6=1;function e(r,n){var t=1,i;if(r===0)return n;if(n===0)return r;for(;r%2===0&&n%2===0;)r/=2,n/=2,t*=2;for(;r%2===0;)r/=2;for(;n;){for(;n%2===0;)n/=2;r>n&&(i=n,n=r,r=i),n-=r}return t*r}return is=e,is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var as,C6;function a_(){if(C6)return as;C6=1;var e=X(),r=xr(),n=tr(),t=lr(),i=c8(),a=t_(),o=i_();function s(u,l){return e(u)||e(l)?NaN:u===n||l===n||u===t||l===t?NaN:r(u)&&r(l)?(u<0&&(u=-u),l<0&&(l=-l),u<=i&&l<=i?a(u,l):o(u,l)):NaN}return as=s,as}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var os,B6;function o_(){if(B6)return os;B6=1;var e=a_();return os=e,os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ss,H6;function s_(){if(H6)return ss;H6=1;var e=n_(),r=tr(),n=xr(),t=X(),i=hl(),a=Rr(),o=o_();function s(u,l){var f,v,d,m,h,p,c;if(t(u)||t(l))return NaN;if(!n(u)||!n(l))return NaN;if(l<0||(v=1,u<0&&(u=-u+l-1,i(l)&&(v*=-1)),l>u))return 0;if(l===0||l===u)return v;if(l===1||l===u-1)return v*u;for(u-l<l&&(l=u-l),c=a(e/u),f=1,h=1;h<=l&&!(f>c);h++)f*=u,f/=h,u-=1;return h>l?v*f:(d=s(u,l-h+1),d===r?v*d:(m=s(l,l-h+1),p=o(d,m),d/=p,m/=p,f/=m,v*f*d))}return ss=s,ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var us,U6;function u_(){if(U6)return us;U6=1;var e=s_();return us=e,us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ls,G6;function l_(){if(G6)return ls;G6=1;var e=u_(),r=Rr(),n=ar(),t=Br();function i(a,o,s,u){var l,f,v,d,m;if(f=n(s,a),f>t)for(d=f,m=r(a-1);m>o;m--)d*=(m+1)*u/((a-m)*s),f+=d;else if(v=r(a*s),v<=o+1&&(v=r(o+2)),f=n(s,v)*n(u,a-v),f*=e(r(a),r(v)),f===0)for(m=v-1;m>o;m--)f+=n(s,m)*n(u,a-m),f*=e(r(a),r(m));else{for(d=f,l=f,m=v-1;m>o;m--)d*=(m+1)*u/((a-m)*s),f+=d;for(d=l,m=v+1;m<=a;m++)d*=(a-m+1)*s/(m*u),f+=d}return f}return ls=i,ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var fs,W6;function f_(){if(W6)return fs;W6=1;var e=gl();function r(n,t,i,a,o,s,u){var l,f,v,d;if(l=e(n,t,i,a,s),u&&(u[1]=l),l/=n,l===0)return l;for(v=1,f=1,d=0;d<o-1;++d)f*=(n+t+d)*i/(n+d+1),v+=f;return l*=v,l}return fs=r,fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var vs,X6;function v_(){if(X6)return vs;X6=1;var e=Ce(),r=de(),n=qr(),t=Z(),i=ir(),a=ar(),o=rr(),s=Br(),u=kr(),l=ne(),f=ce(),v=re(),d={maxTerms:100};function m(p,c,g,w){var b=1-c,q=1;return M;function M(){var I=w/p;return p+=1,w*=b*g/q,q+=1,b+=1,I}}function h(p,c,g,w,b,q,M){var I,N,A,E,y,_,$,R;return b?($=p+c,N=p+f-.5,A=c+f-.5,E=$+f-.5,I=e($)/(e(p)*e(c)),y=o(E/A)*(c-.5),_=o(g*E/N)*p,y>l&&y<u&&_>l&&_<u?(p*c<A*10?I*=i((c-.5)*n(p/A)):I*=a(E/A,c-.5),I*=a(g*E/N,p),I*=t(N/v),q&&(q[1]=I*a(M,c))):(I=o(I)+y+_+(o(N)-1)/2,q&&(q[1]=i(I+c*o(M))),I=i(I))):I=a(g,p),I<s?w:(R=m(p,c,g,I),d.initialValue=w,r(R,d))}return vs=h,vs}var cs,K6;function R8(){if(K6)return cs;K6=1;var e=X(),r=zr(),n=Rr(),t=qr(),i=cl(),a=Te(),o=Z(),s=ir(),u=ar(),l=Hr(),f=Tr(),v=Ur(),d=Br(),m=c8(),h=pl(),p=Ir(),c=Qm(),g=Jm(),w=gl(),b=e_(),q=l_(),M=f_(),I=v_(),N=1/p;function A(E,y,_,$,R,L,F,S){var O,T,k,P,K,D,G,V,Q,C,H,B;if(B=1-E,G=S,V=S+F,L[V]=-1,e(E)||E<0||E>1)return L[G]=NaN,L[V]=NaN,L;if($){if(y<0||_<0)return L[G]=NaN,L[V]=NaN,L;if(y===0){if(_===0)return L[G]=NaN,L[V]=NaN,L;if(_>0)return L[G]=R?0:1,L}else if(_===0&&y>0)return L[G]=R?1:0,L}else if(y<=0||_<=0)return L[G]=NaN,L[V]=NaN,L;return E===0?(y===1?L[V]=1:L[V]=y<1?v/2:d*2,R?(L[G]=$?1:a(y,_),L):(L[G]=0,L)):E===1?(_===1?L[V]=1:L[V]=_<1?v/2:d*2,R?L[G]=0:L[G]=$?1:a(y,_),L):y===.5&&_===.5?(L[V]=N*o(B*E),H=i(o(R?B:E)),H/=h,$||(H*=p),L[G]=H,L):(y===1&&(D=_,_=y,y=D,D=B,B=E,E=D,R=!R),_===1?y===1?(L[G]=R?B:E,L[V]=1,L):(L[V]=y*u(E,y-1),B<.5?H=R?-r(y*t(-B)):s(y*t(-B)):H=R?-(u(E,y)-1):u(E,y),$||(H/=y),L[G]=H,L):(f(y,_)<=1?(E>.5&&(D=_,_=y,y=D,D=B,B=E,E=D,R=!R),l(y,_)<=1?y>=f(.2,_)||u(E,y)<=.9?R?(k=-($?1:a(y,_)),R=!1,k=-I(y,_,E,k,$,L,B)):k=I(y,_,E,0,$,L,B):(D=_,_=y,y=D,D=B,B=E,E=D,R=!R,B>=.3?R?(k=-($?1:a(y,_)),R=!1,k=-I(y,_,E,k,$,L,B)):k=I(y,_,E,0,$,L,B):($?T=1:T=g(y+_,y,20),k=M(y,_,E,B,20,$,L),R?(k-=$?1:a(y,_),R=!1,k=-c(y+20,_,E,B,k,T,$)):k=c(y+20,_,E,B,k,T,$))):_<=1||E<.1&&u(_*E,y)<=.7?R?(k=-($?1:a(y,_)),R=!1,k=-I(y,_,E,k,$,L,B)):k=I(y,_,E,0,$,L,B):(D=_,_=y,y=D,D=B,B=E,E=D,R=!R,B>=.3?R?(k=-($?1:a(y,_)),R=!1,k=-I(y,_,E,k,$,L,B)):k=I(y,_,E,0,$,L,B):y>=15?R?(k=-($?1:a(y,_)),R=!1,k=-c(y,_,E,B,k,1,$)):k=c(y,_,E,B,0,1,$):($?T=1:T=g(y+_,y,20),k=M(y,_,E,B,20,$,L),R?(k-=$?1:a(y,_),R=!1,k=-c(y+20,_,E,B,k,T,$)):k=c(y+20,_,E,B,k,T,$)))):(y<_?O=y-(y+_)*E:O=(y+_)*B-_,O<0&&(D=_,_=y,y=D,D=B,B=E,E=D,R=!R),_<40?n(y)===y&&n(_)===_&&y<m-100?(Q=y-1,C=_+Q,k=q(C,Q,E,B),$||(k*=a(y,_))):_*E<=.7?R?(k=-($?1:a(y,_)),R=!1,k=-I(y,_,E,k,$,L,B)):k=I(y,_,E,0,$,L,B):y>15?(C=n(_),C===_&&(C-=1),P=_-C,$?T=1:T=g(y+P,P,C),k=M(P,y,B,E,C,$),k=c(y,P,E,B,k,1,$),k/=T):$?(C=n(_),P=_-C,P<=0&&(C-=1,P+=1),k=M(P,y,B,E,C,$),k+=M(y,P,E,B,20,$),R&&(k-=1),k=c(y+20,P,E,B,k,1,$),R&&(k=-k,R=!1)):k=b(y,_,E,B,$,L):k=b(y,_,E,B,$,L)),L[V]<0&&(L[V]=w(y,_,E,B,!0)),K=B*E,L[V]!==0&&(v*K<L[V]?L[V]=v/2:L[V]/=K),L[G]=R?($?1:a(y,_))-k:k,L))}return cs=A,cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ds,V6;function c_(){if(V6)return ds;V6=1;var e=R8();function r(n,t,i,a,o){return e(n,t,i,a,o,[0,0],1,0)}return ds=r,ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hs,j6;function y8(){if(j6)return hs;j6=1;var e=fr(),r=c_(),n=R8();return e(r,"assign",n),hs=r,hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ps,Y6;function d_(){if(Y6)return ps;Y6=1;var e=y8().assign;function r(n,t,i,a,o){var s=[0,0];return a=a!==!1,o=o===!0,e(n,t,i,a,o,s,1,0),s[0]}return ps=r,ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ms,Q6;function he(){if(Q6)return ms;Q6=1;var e=d_();return ms=e,ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _s,J6;function h_(){if(J6)return _s;J6=1;var e=he(),r=X();function n(t,i,a){return r(t)||r(i)||r(a)||i<=0||a<=0?NaN:t<=0?0:t>=1?1:e(t,i,a)}return _s=n,_s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs,Z6;function p_(){if(Z6)return gs;Z6=1;function e(r){return n;function n(){return r}}return gs=e,gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s,z6;function wr(){if(z6)return $s;z6=1;var e=p_();return $s=e,$s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qs,x6;function m_(){if(x6)return qs;x6=1;var e=wr(),r=he(),n=X();function t(i,a){if(n(i)||n(a)||i<=0||a<=0)return e(NaN);return o;function o(s){return n(s)?NaN:s<=0?0:s>=1?1:r(s,i,a)}}return qs=t,qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ws,r4;function __(){if(r4)return ws;r4=1;var e=fr(),r=h_(),n=m_();return e(r,"factory",n),ws=r,ws}var g_=__(),rl=yr(g_);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs,e4;function M8(){if(e4)return bs;e4=1;var e=.9189385332046728;return bs=e,bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Rs,n4;function $_(){if(n4)return Rs;n4=1;var e=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],r=e.length;function n(t){var i,a,o,s,u;if(t<-1.1||t>1.1)return NaN;for(o=0,s=0,i=2*t,u=0;u<r;u++)a=o,o=s,s=i*o-a+e[u];return(s-a)*.5}return Rs=n,Rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ys,t4;function q_(){if(t4)return ys;t4=1;var e=ar(),r=$_(),n=9490626562425156e-8,t=3745194030963158e291;function i(a){return a<10?NaN:a>=t?0:a<n?r(2*e(10/a,2)-1)/a:1/(a*12)}return ys=i,ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ms,i4;function w_(){if(i4)return Ms;i4=1;var e=ee(),r=qr(),n=Lr(),t=Hr(),i=Tr(),a=rr(),o=M8(),s=lr(),u=tr(),l=q_();function f(v,d){var m,h,p;return h=i(v,d),p=t(v,d),h<0?NaN:h===0?u:p===u?s:h>=10?(m=l(h)+l(p)-l(h+p),-.5*a(p)+o+m+(h-.5)*a(h/(h+p))+p*r(-h/(h+p))):p>=10?(m=l(p)-l(h+p),e(h)+m+h-h*a(h+p)+(p-.5)*r(-h/(h+p))):a(n(h)*(n(p)/n(h+p)))}return Ms=f,Ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ls,a4;function L8(){if(a4)return Ls;a4=1;var e=w_();return Ls=e,Ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ns,o4;function b_(){if(o4)return Ns;o4=1;var e=L8(),r=X(),n=qr(),t=ir(),i=rr(),a=tr();function o(s,u,l){var f;return r(s)||r(u)||r(l)||u<=0||l<=0?NaN:s<0||s>1?0:s===0?u<1?a:u>1?0:l:s===1?l<1?a:l>1?0:u:(f=(u-1)*i(s),f+=(l-1)*n(-s),f-=e(u,l),t(f))}return Ns=o,Ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Es,s4;function R_(){if(s4)return Es;s4=1;var e=wr(),r=L8(),n=X(),t=qr(),i=ir(),a=rr(),o=tr();function s(u,l){var f;if(n(u)||n(l)||u<=0||l<=0)return e(NaN);return f=r(u,l),v;function v(d){var m;return n(d)?NaN:d<0||d>1?0:d===0?u<1?o:u>1?0:l:d===1?l<1?o:l>1?0:u:(m=-f,m+=(u-1)*a(d),m+=(l-1)*t(-d),i(m))}}return Es=s,Es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Is,u4;function y_(){if(u4)return Is;u4=1;var e=fr(),r=b_(),n=R_();return e(r,"factory",n),Is=r,Is}var M_=y_(),L_=yr(M_);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var As,l4;function N_(){if(l4)return As;l4=1;function e(r){var n,t,i;return r===0?-.0005087819496582806:(r<0?n=-r:n=r,n<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}return As=e,As}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ss,f4;function E_(){if(f4)return Ss;f4=1;function e(r){var n,t,i;return r===0?-.20243350835593876:(r<0?n=-r:n=r,n<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}return Ss=e,Ss}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ps,v4;function I_(){if(v4)return Ps;v4=1;function e(r){var n,t,i;return r===0?-.1311027816799519:(r<0?n=-r:n=r,n<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}return Ps=e,Ps}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ts,c4;function A_(){if(c4)return Ts;c4=1;function e(r){var n,t,i;return r===0?-.0350353787183178:(r<0?n=-r:n=r,n<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}return Ts=e,Ts}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ks,d4;function S_(){if(d4)return ks;d4=1;function e(r){var n,t,i;return r===0?-.016743100507663373:(r<0?n=-r:n=r,n<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}return ks=e,ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Fs,h4;function P_(){if(h4)return Fs;h4=1;var e=X(),r=Z(),n=rr(),t=tr(),i=lr(),a=N_(),o=E_(),s=I_(),u=A_(),l=S_(),f=.08913147449493408,v=2.249481201171875,d=.807220458984375,m=.9399557113647461,h=.9836282730102539;function p(c){var g,w,b,q,M;return e(c)?NaN:c===0?t:c===2?i:c===1?0:c>2||c<0?NaN:(c>1?(g=-1,b=2-c):(g=1,b=c),c=1-b,c<=.5?(q=c*(c+10),M=a(c),g*(q*f+q*M)):b>=.25?(q=r(-2*n(b)),b-=.25,M=o(b),g*(q/(v+M))):(b=r(-n(b)),b<3?(w=b-1.125,M=s(w),g*(d*b+M*b)):b<6?(w=b-3,M=u(w),g*(m*b+M*b)):(w=b-6,M=l(w),g*(h*b+M*b))))}return Fs=p,Fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Os,p4;function pe(){if(p4)return Os;p4=1;var e=P_();return Os=e,Os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ds,m4;function T_(){if(m4)return Ds;m4=1;var e=X(),r=cl(),n=Z(),t=u8(),i=6123233995736766e-32;function a(o){var s;return e(o)?NaN:o<-1||o>1?NaN:o>.5?2*r(n(.5-.5*o)):(s=t-r(o),s+=i,s+=t,s)}return Ds=a,Ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cs,_4;function k_(){if(_4)return Cs;_4=1;var e=T_();return Cs=e,Cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bs,g4;function $l(){if(g4)return Bs;g4=1;var e=1.4142135623730951;return Bs=e,Bs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hs,$4;function F_(){if($4)return Hs;$4=1;function e(r){return r===0?.16666666666666666:.16666666666666666+r*.16666666666666666}return Hs=e,Hs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Us,q4;function O_(){if(q4)return Us;q4=1;function e(r){return r===0?.058333333333333334:.058333333333333334+r*(.06666666666666667+r*.008333333333333333)}return Us=e,Us}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gs,w4;function D_(){if(w4)return Gs;w4=1;function e(r){return r===0?.0251984126984127:.0251984126984127+r*(.026785714285714284+r*(.0017857142857142857+r*.0001984126984126984))}return Gs=e,Gs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws,b4;function C_(){if(b4)return Ws;b4=1;function e(r){return r===0?.012039792768959435:.012039792768959435+r*(.010559964726631394+r*(-.0011078042328042327+r*(.0003747795414462081+r*27557319223985893e-22)))}return Ws=e,Ws}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xs,R4;function B_(){if(R4)return Xs;R4=1;function e(r){return r===0?.003837005972422639:.003837005972422639+r*(.00610392115600449+r*(-.0016095979637646305+r*(.0005945867404200738+r*(-6270542728876062e-20+r*2505210838544172e-23))))}return Xs=e,Xs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ks,y4;function H_(){if(y4)return Ks;y4=1;function e(r){return r===0?.0032177478835464946:.0032177478835464946+r*(.0010898206731540065+r*(-.0012579159844784845+r*(.0006908420797309686+r*(-.00016376804137220805+r*(154012654012654e-19+r*16059043836821613e-26)))))}return Ks=e,Ks}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vs,M4;function U_(){if(M4)return Vs;M4=1;function e(r){return r===0?.001743826229834001:.001743826229834001+r*(3353097688001788e-20+r*(-.0007624513544032393+r*(.0006451304695145635+r*(-.000249472580470431+r*(49255746366361444e-21+r*(-39851014346715405e-22+r*7647163731819816e-28))))))}return Vs=e,Vs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var js,L4;function G_(){if(L4)return js;L4=1;function e(r){return r===0?.0009647274732138864:.0009647274732138864+r*(-.0003110108632631878+r*(-.00036307660358786886+r*(.0005140660578834113+r*(-.00029133414466938067+r*(9086710793521991e-20+r*(-15303004486655377e-21+r*(10914179173496788e-22+r*28114572543455206e-31)))))))}return js=e,js}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ys,N4;function W_(){if(N4)return Ys;N4=1;function e(r){return r===0?.0005422926281312969:.0005422926281312969+r*(-.0003694266780000966+r*(-.00010230378073700413+r*(.00035764655430568635+r*(-.00028690924218514614+r*(.00012645437628698076+r*(-33202652391372056e-21+r*(4890304529197534e-21+r*(-3123956959982987e-22+r*822063524662433e-32))))))))}return Ys=e,Ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Qs,E4;function X_(){if(E4)return Qs;E4=1;var e=ml(),r=Fr(),n=Z(),t=Ir(),i=F_(),a=O_(),o=D_(),s=C_(),u=B_(),l=H_(),f=U_(),v=G_(),d=W_(),m=0,h=[1,0,0,0,0,0,0,0,0,0];function p(c,g){var w,b;return b=e(c/2,.5)*n(c*t)*(g-.5),w=1/c,h[1]=i(w),h[2]=a(w),h[3]=o(w),h[4]=s(w),h[5]=u(w),h[6]=l(w),h[7]=f(w),h[8]=v(w),h[9]=d(w),m+b*r(h,b*b)}return Qs=p,Qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Js,I4;function K_(){if(I4)return Js;I4=1;var e=ml(),r=Fr(),n=Z(),t=ar(),i=Ir(),a=[0,0,0,0,0,0,0];function o(s,u){var l,f,v,d,m,h,p,c;return c=e(s/2,.5)*n(s*i)*u,d=s+2,m=s+4,h=s+6,a[0]=1,a[1]=-(s+1)/(2*d),d*=s+2,a[2]=-s*(s+1)*(s+3)/(8*d*m),d*=s+2,a[3]=-s*(s+1)*(s+5)*((3*s+7)*s-2)/(48*d*m*h),d*=s+2,m*=s+4,a[4]=-s*(s+1)*(s+7)*(((((15*s+154)*s+465)*s+286)*s-336)*s+64)/(384*d*m*h*(s+8)),d*=s+2,a[5]=-s*(s+1)*(s+3)*(s+9)*((((((35*s+452)*s+1573)*s+600)*s-2020)*s+928)*s-128)/(1280*d*m*h*(s+8)*(s+10)),d*=s+2,m*=s+4,h*=s+6,a[6]=-s*(s+1)*(s+11)*(((((((((((945*s+31506)*s+425858)*s+2980236)*s+11266745)*s+20675018)*s+7747124)*s-22574632)*s-8565600)*s+18108416)*s-7099392)*s+884736)/(46080*d*m*h*(s+8)*(s+10)*(s+12)),p=n(s),v=t(p*c,1/s),f=v*v,l=r(a,f),l*=p,l/=v,-l}return Js=o,Js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Zs,A4;function V_(){if(A4)return Zs;A4=1;var e=pe(),r=zr(),n=Z(),t=ar(),i=pl(),a=$l();function o(s,u){var l,f,v,d,m,h,p;return s>1e20?-e(2*u)*a:(l=1/(s-.5),f=48/(l*l),v=((20700*l/f-98)*l-16)*l+96.36,d=((94.5/(f+v)-3)/f+1)*n(l*i)*s,p=t(d*2*u,2/s),p>.05+l?(h=-e(2*u)*a,p=h*h,s<5&&(v+=.3*(s-4.5)*(h+.6)),v+=(((.05*d*h-5)*h-7)*h-2)*h+f,p=(((((.4*p+6.3)*p+36)*p+94.5)/v-p-3)/f+1)*h,p=r(l*p*p)):p=((1/(((s+6)/(s*p)-.089*d-.822)*(s+2)*3)+.5/(s+4))*p-1)*(s+1)/(s+2)+1/p,m=n(s*p),-m)}return Zs=o,Zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var zs,S4;function j_(){if(S4)return zs;S4=1;var e=pe(),r=Rr(),n=Zr(),t=s8(),i=k_(),a=Z(),o=J(),s=_l(),u=ar(),l=ve(),f=$l(),v=Ir(),d=X_(),m=K_(),h=V_(),p=268435456,c=1/3,g=106/3,w=.8549879733383485;function b(q,M,I){var N,A,E,y,_,$,R,L,F,S,O,T,k,P,K,D;if(_=0,M>I?(R=I,I=M,M=R,y=!0):y=!1,r(q)===q&&q<20)switch(A=n(1,g),r(q)){case 1:M===.5?_=0:_=-s(v*M)/l(v*M);break;case 2:_=(2*M-1)/a(2*M*I);break;case 4:$=4*M*I,E=a($),k=4*s(i(E)/3)/E,P=a(k-4),_=M-.5<0?-P:P;break;case 6:if(M<1e-150)return(y?-1:1)*h(q,M);K=4*(M-M*M),D=u(K,c),T=6*(1+w*(1/D-1));do F=T*T,S=F*F,O=T*S,L=T,T=2*(8*K*O-270*F+2187)/(5*(4*K*S-216*T-243));while(o((T-L)/T)>A);T=a(T-q),_=M-.5<0?-T:T;break;default:q>p?_=e(2*M)*f:q<3?(N=.2742-q*.0242143,M>N?_=d(q,M):_=m(q,M)):(N=n(1,t(q/-.654)),M>N?_=h(q,M):_=m(q,M))}else q>p?_=-e(2*M)*f:q<3?(N=.2742-q*.0242143,M>N?_=d(q,M):_=m(q,M)):(N=n(1,t(q/-.654)),M>N?_=h(q,M):_=m(q,M));return y?-_:_}return zs=b,zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var xs,P4;function Y_(){if(P4)return xs;P4=1;var e=j_();function r(n,t,i){var a,o,s,u;return o=t/2,s=1-o,a=n*2,u=e(a,o,s),i&&(i.value=u*u/(a+u*u)),a/(a+u*u)}return xs=r,xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ru,T4;function Q_(){if(T4)return ru;T4=1;var e=Fr(),r=pe(),n=Z(),t=ir(),i=$l(),a=[0,0,0,0,0,0,0],o=[0,0,0,0];function s(u,l,f){var v,d,m,h,p,c,g;return v=r(2*f),v/=-n(u/2),o[0]=v,c=l-u,h=c*c,p=h*c,a[0]=-c*i/2,a[1]=(1-2*c)/8,a[2]=-(c*i/48),a[3]=-1/192,a[4]=-c*i/3840,a[5]=0,a[6]=0,o[1]=e(a,v),a[0]=c*i*(3*c-2)/12,a[1]=(20*h-12*c+1)/128,a[2]=c*i*(20*c-1)/960,a[3]=(16*h+30*c-15)/4608,a[4]=c*i*(21*c+32)/53760,a[5]=(-(32*h)+63)/368640,a[6]=-c*i*(120*c+17)/25804480,o[2]=e(a,v),a[0]=c*i*(-75*h+80*c-16)/480,a[1]=(-1080*p+868*h-90*c-45)/9216,a[2]=c*i*(-1190*h+84*c+373)/53760,a[3]=(-2240*p-2508*h+2100*c-165)/368640,a[4]=0,a[5]=0,a[6]=0,o[3]=e(a,v),m=e(o,1/u),d=m*m,g=-t(-d/2),d===0?.5:(1+m*n((1+g)/d))/2}return ru=s,ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var eu,k4;function N8(){if(k4)return eu;k4=1;var e=rr(),r=Ur(),n=r/4;function t(i,a){return o;function o(s){var u,l,f;return f=1-s,f===0?[-n,-n]:s===0?[-n,-n]:(l=e(s)+a*e(f)+i,u=1/s-a/f,[l,u])}}return eu=t,eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nu,F4;function J_(){if(F4)return nu;F4=1;var e=X();function r(n){return n===0||e(n)?n:n<0?-1:1}return nu=r,nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tu,O4;function He(){if(O4)return tu;O4=1;var e=J_();return tu=e,tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var iu,D4;function E8(){if(D4)return iu;D4=1;var e=He(),r=J(),n=Zr(),t=Ur();function i(a,o,s,u,l,f){var v,d,m,h,p,c,g,w,b,q;b=0,v=0,p=o,h=n(1,1-l),g=t,d=t,m=t,c=f;do{if(v=b,m=d,d=g,w=a(p),b=w[0],q=w[1],c-=1,b===0)break;if(q===0?(v===0&&(p===s?o=u:o=s,v=a(o),g=o-p),e(v)*e(b)<0?g<0?g=(p-s)/2:g=(p-u)/2:g<0?g=(p-u)/2:g=(p-s)/2):g=b/q,r(g*2)>r(m)&&(g=g>0?(p-s)/2:(p-u)/2),o=p,p-=g,p<=s){if(g=.5*(o-s),p=o-g,p===s||p===u)break}else if(p>=u&&(g=.5*(o-u),p=o-g,p===s||p===u))break;g>0?u=o:s=o}while(c&&r(p*h)<r(g));return p}return iu=i,iu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var au,C4;function Z_(){if(C4)return au;C4=1;function e(r){return r===0?-1:-1+r*(-5+r*5)}return au=e,au}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ou,B4;function z_(){if(B4)return ou;B4=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return ou=e,ou}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su,H4;function x_(){if(H4)return su;H4=1;function e(r){return r===0?7:7+r*(-2+r*(33+r*(-62+r*31)))}return su=e,su}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uu,U4;function rg(){if(U4)return uu;U4=1;function e(r){return r===0?25:25+r*(-52+r*(-17+r*(88+r*(-115+r*46))))}return uu=e,uu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,G4;function eg(){if(G4)return lu;G4=1;function e(r){return r===0?7:7+r*(12+r*(-78+r*52))}return lu=e,lu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu,W4;function ng(){if(W4)return fu;W4=1;function e(r){return r===0?-7:-7+r*(2+r*(183+r*(-370+r*185)))}return fu=e,fu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,X4;function tg(){if(X4)return vu;X4=1;function e(r){return r===0?-533:-533+r*(776+r*(-1835+r*(10240+r*(-13525+r*5410))))}return vu=e,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cu,K4;function ig(){if(K4)return cu;K4=1;function e(r){return r===0?-1579:-1579+r*(3747+r*(-3372+r*(-15821+r*(45588+r*(-45213+r*15071)))))}return cu=e,cu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var du,V4;function ag(){if(V4)return du;V4=1;function e(r){return r===0?449:449+r*(-1259+r*(-769+r*(6686+r*(-9260+r*3704))))}return du=e,du}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hu,j4;function og(){if(j4)return hu;j4=1;function e(r){return r===0?63149:63149+r*(-151557+r*(140052+r*(-727469+r*(2239932+r*(-2251437+r*750479)))))}return hu=e,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pu,Y4;function sg(){if(Y4)return pu;Y4=1;function e(r){return r===0?29233:29233+r*(-78755+r*(105222+r*(146879+r*(-1602610+r*(3195183+r*(-2554139+r*729754))))))}return pu=e,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mu,Q4;function ug(){if(Q4)return mu;Q4=1;function e(r){return r===0?1:1+r*(-13+r*13)}return mu=e,mu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u,J4;function lg(){if(J4)return _u;J4=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return _u=e,_u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var gu,Z4;function fg(){if(Z4)return gu;Z4=1;var e=Fr(),r=pe(),n=J(),t=ir(),i=rr(),a=Z(),o=ve(),s=_l(),u=N8(),l=E8(),f=Z_(),v=z_(),d=x_(),m=rg(),h=eg(),p=ng(),c=tg(),g=ig(),w=ag(),b=og(),q=sg(),M=ug(),I=lg(),N=[0,0,0,0,0,0],A=[0,0,0,0];function E(y,_,$){var R,L,F,S,O,T,k,P,K,D,G,V,Q,C,H,B,or,er,W,Y;return O=r(2*y)/-a(_/2),er=o($),or=s($),A[0]=O,H=er*er,B=or*or,Q=er*or,V=Q*Q,G=V*Q,D=V*V,K=V*G,P=G*G,k=D*G,N[0]=(2*H-1)/(3*Q),N[1]=-f(H)/(36*V),N[2]=v(H)/(1620*G),N[3]=d(H)/(6480*D),N[4]=m(H)/(90720*K),N[5]=0,A[1]=e(N,O),N[0]=-h(H)/(405*G),N[1]=p(H)/(2592*D),N[2]=-c(H)/(204120*K),N[3]=-g(H)/(2099520*P),N[4]=0,N[5]=0,A[2]=e(N,O),N[0]=w(H)/(102060*K),N[1]=-b(H)/(20995200*P),N[2]=q(H)/(36741600*k),N[3]=0,N[4]=0,N[5]=0,A[3]=e(N,O),T=e(A,1/_),F=or/er,F*=F,C=-(T*T)/(2*H)+i(H)+B*i(B)/H,n(T)<.7?(N[0]=H,N[1]=Q,N[2]=(1-2*H)/3,N[3]=M(H)/(36*Q),N[4]=I(H)/(270*V),N[5]=0,Y=e(N,T)):(W=t(C),N[0]=W,N[1]=F,N[2]=0,N[3]=3*F*(3*F+1)/6,N[4]=4*F*(4*F+1)*(4*F+2)/24,N[5]=5*F*(5*F+1)*(5*F+2)*(5*F+3)/120,Y=e(N,W),(Y-H)*T<0&&(Y=1-Y)),T<0?(L=0,R=H):(L=H,R=1),(Y<L||Y>R)&&(Y=(L+R)/2),S=u(-C,F),Y=l(S,Y,L,R,32,100),Y}return gu=E,gu}var _e={exports:{}},ge={exports:{}},$u,z4;function vg(){if(z4)return $u;z4=1;var e=1e3,r=e*60,n=r*60,t=n*24,i=t*365.25;$u=function(l,f){f=f||{};var v=typeof l;if(v==="string"&&l.length>0)return a(l);if(v==="number"&&isNaN(l)===!1)return f.long?s(l):o(l);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(l))};function a(l){if(l=String(l),!(l.length>100)){var f=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(l);if(f){var v=parseFloat(f[1]),d=(f[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return v*i;case"days":case"day":case"d":return v*t;case"hours":case"hour":case"hrs":case"hr":case"h":return v*n;case"minutes":case"minute":case"mins":case"min":case"m":return v*r;case"seconds":case"second":case"secs":case"sec":case"s":return v*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return v;default:return}}}}function o(l){return l>=t?Math.round(l/t)+"d":l>=n?Math.round(l/n)+"h":l>=r?Math.round(l/r)+"m":l>=e?Math.round(l/e)+"s":l+"ms"}function s(l){return u(l,t,"day")||u(l,n,"hour")||u(l,r,"minute")||u(l,e,"second")||l+" ms"}function u(l,f,v){if(!(l<f))return l<f*1.5?Math.floor(l/f)+" "+v:Math.ceil(l/f)+" "+v+"s"}return $u}var x4;function cg(){return x4||(x4=1,(function(e,r){r=e.exports=i.debug=i.default=i,r.coerce=u,r.disable=o,r.enable=a,r.enabled=s,r.humanize=vg(),r.names=[],r.skips=[],r.formatters={};var n;function t(l){var f=0,v;for(v in l)f=(f<<5)-f+l.charCodeAt(v),f|=0;return r.colors[Math.abs(f)%r.colors.length]}function i(l){function f(){if(f.enabled){var v=f,d=+new Date,m=d-(n||d);v.diff=m,v.prev=n,v.curr=d,n=d;for(var h=new Array(arguments.length),p=0;p<h.length;p++)h[p]=arguments[p];h[0]=r.coerce(h[0]),typeof h[0]!="string"&&h.unshift("%O");var c=0;h[0]=h[0].replace(/%([a-zA-Z%])/g,function(w,b){if(w==="%%")return w;c++;var q=r.formatters[b];if(typeof q=="function"){var M=h[c];w=q.call(v,M),h.splice(c,1),c--}return w}),r.formatArgs.call(v,h);var g=f.log||r.log||console.log.bind(console);g.apply(v,h)}}return f.namespace=l,f.enabled=r.enabled(l),f.useColors=r.useColors(),f.color=t(l),typeof r.init=="function"&&r.init(f),f}function a(l){r.save(l),r.names=[],r.skips=[];for(var f=(typeof l=="string"?l:"").split(/[\s,]+/),v=f.length,d=0;d<v;d++)f[d]&&(l=f[d].replace(/\*/g,".*?"),l[0]==="-"?r.skips.push(new RegExp("^"+l.substr(1)+"$")):r.names.push(new RegExp("^"+l+"$")))}function o(){r.enable("")}function s(l){var f,v;for(f=0,v=r.skips.length;f<v;f++)if(r.skips[f].test(l))return!1;for(f=0,v=r.names.length;f<v;f++)if(r.names[f].test(l))return!0;return!1}function u(l){return l instanceof Error?l.stack||l.message:l}})(ge,ge.exports)),ge.exports}var r5;function I8(){return r5||(r5=1,(function(e,r){var n={};r=e.exports=cg(),r.log=a,r.formatArgs=i,r.save=o,r.load=s,r.useColors=t,r.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:u(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function t(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}r.formatters.j=function(l){try{return JSON.stringify(l)}catch(f){return"[UnexpectedJSONParseError]: "+f.message}};function i(l){var f=this.useColors;if(l[0]=(f?"%c":"")+this.namespace+(f?" %c":" ")+l[0]+(f?"%c ":" ")+"+"+r.humanize(this.diff),!!f){var v="color: "+this.color;l.splice(1,0,v,"color: inherit");var d=0,m=0;l[0].replace(/%[a-zA-Z%]/g,function(h){h!=="%%"&&(d++,h==="%c"&&(m=d))}),l.splice(m,0,v)}}function a(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function o(l){try{l==null?r.storage.removeItem("debug"):r.storage.debug=l}catch{}}function s(){var l;try{l=r.storage.debug}catch{}return!l&&typeof process<"u"&&"env"in process&&(l=n.DEBUG),l}r.enable(s());function u(){try{return window.localStorage}catch{}}})(_e,_e.exports)),_e.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qu,e5;function Ue(){if(e5)return qu;e5=1;var e=34028234663852886e22;return qu=e,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wu,n5;function dg(){if(n5)return wu;n5=1;var e=I8(),r=b8(),n=J(),t=ir(),i=rr(),a=Ue(),o=e("gammaincinv:higher_newton");function s(u,l,f,v,d,m,h,p){var c,g,w,b,q,M,I,N,A,E,y,_,$,R;R=u,y=1,_=1,M=l*l,g=u;do{if(R=u,I=R*R,f===0){if(c=(1-l)*i(R)+R+m,c>i(a))return o("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),g;$=t(c)}else $=-h*R;p?(N=r(R,l,!0,!1),w=-$*(N-v)):(A=r(R,l,!0,!0),w=$*(A-d)),$=w,v>1e-120||_>1?(b=.5*(R-l+1)/R,q=(2*I-4*R*l+4*R+2*M-3*l+1)/I,q/=6,u=R+$*(1+$*(b+$*q))):u=R+$,y=n(R/u-1),_+=1,R=u,R<0&&(R=g,_=100)}while(y>2e-14&&_<35);return(y>2e-14||_>99)&&o("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),E=R||0,E}return wu=s,wu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bu,t5;function hg(){if(t5)return bu;t5=1;function e(r){return r===0?0:0+r*(1+r*(1+r*(1.5+r*(2.6666666666666665+r*(5.208333333333333+r*10.8)))))}return bu=e,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ru,i5;function pg(){if(i5)return Ru;i5=1;function e(r){return r===0?1:1+r*(1+r*(.3333333333333333+r*(.027777777777777776+r*(-.003703703703703704+r*(.0002314814814814815+r*5878894767783657e-20)))))}return Ru=e,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yu,a5;function A8(){if(a5)return yu;a5=1;var e=J(),r=ir(),n=rr(),t=Fr(),i=hg(),a=pg(),o=1e-8,s=.08333333333333333,u=.008333333333333333,l=[1,0,0,0,0,0];function f(v){var d,m,h,p,c,g,w,b,q;if(q=v*v*.5,v===0?c=0:v<-1?(b=r(-1-q),c=i(b)):v<1?(b=v,c=a(b)):(b=11+q,g=n(b),c=b+g,b=1/b,d=g*g,m=d*g,h=m*g,p=h*g,l[1]=(2-g)*.5,l[2]=(-9*g+6+2*d)/6,l[3]=-(3*m+36*g-22*d-12)*s,l[4]=(60+350*d-300*g-125*m+12*h)/60,l[5]=-(-120-274*h+900*g-1700*d+1125*m+20*p)*u,c+=g*b*t(l,b)),b=1,v>-3.5&&v<-.03||v>.03&&v<40){b=1,w=c;do c=w*(q+n(w))/(w-1),b=e(w/c-1),w=c;while(b>o)}return c}return yu=f,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mu,o5;function mg(){if(o5)return Mu;o5=1;var e=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function r(n,t){var i,a,o,s,u;a=0,o=0,i=t+t,u=n;do s=o,o=a,a=i*o-s+e[u],u-=1;while(u>=0);return(a-s)/2}return Mu=r,Mu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lu,s5;function _g(){if(s5)return Lu;s5=1;function e(r){return r===0?.025721014990011306:.025721014990011306+r*(.08247596616699963+r*(-.0025328157302663564+r*(.0006099292666946337+r*(-.00033543297638406+r*.000250505279903))))}return Lu=e,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu,u5;function gg(){if(u5)return Nu;u5=1;function e(r){return r===0?.08333333333333333:.08333333333333333+r*(-.002777777777777778+r*(.0007936507936507937+r*-.0005952380952380953))}return Nu=e,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu,l5;function $g(){if(l5)return Eu;l5=1;var e=ee(),r=rr(),n=M8(),t=Be(),i=Ue(),a=mg(),o=_g(),s=gg(),u=.30865217988013566;function l(f){var v;return f<t?i:f<1?e(f+1)-(f+.5)*r(f)+f-n:f<2?e(f)-(f-.5)*r(f)+f-n:f<3?e(f-1)-(f-.5)*r(f)+f-n+r(f-1):f<12?(v=18/(f*f)-1,a(17,v)/(12*f)):(v=1/(f*f),f<1e3?o(v)/(u+v)/f:s(v)/f)}return Eu=l,Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu,f5;function qg(){if(f5)return Iu;f5=1;var e=ir(),r=Lr(),n=rr(),t=Ue(),i=ke(),a=$g();function o(s){return s>=3?e(a(s)):s>0?r(s)/(e(-s+(s-.5)*n(s))*i):t}return Iu=o,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Au,v5;function wg(){if(v5)return Au;v5=1;function e(r){var n,t,i;return r===0?-.3333333333438:(r<0?n=-r:n=r,n<=1?(t=-.3333333333438+r*(-.2070740359969+r*(-.05041806657154+r*(-.004923635739372+r*-4293658292782e-17))),i=1+r*(.7045554412463+r*(.2118190062224+r*(.03048648397436+r*.001605037988091)))):(r=1/r,t=-4293658292782e-17+r*(-.004923635739372+r*(-.05041806657154+r*(-.2070740359969+r*-.3333333333438))),i=.001605037988091+r*(.03048648397436+r*(.2118190062224+r*(.7045554412463+r*1)))),t/i)}return Au=e,Au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Su,c5;function bg(){if(c5)return Su;c5=1;var e=J(),r=rr(),n=A8(),t=wg();function i(a){var o;return e(a)<1?t(a):(o=n(a),r(a/(o-1))/a)}return Su=i,Su}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pu,d5;function Rg(){if(d5)return Pu;d5=1;function e(r){var n,t,i;return r===0?-.0172847633523:(r<0?n=-r:n=r,n<=1?(t=-.0172847633523+r*(-.0159372646475+r*(-.00464910887221+r*(-.00060683488776+r*-614830384279e-17))),i=1+r*(.764050615669+r*(.297143406325+r*(.0579490176079+r*.00574558524851)))):(r=1/r,t=-614830384279e-17+r*(-.00060683488776+r*(-.00464910887221+r*(-.0159372646475+r*-.0172847633523))),i=.00574558524851+r*(.0579490176079+r*(.297143406325+r*(.764050615669+r*1)))),t/i)}return Pu=e,Pu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tu,h5;function yg(){if(h5)return Tu;h5=1;function e(r){var n,t,i;return r===0?-.0172839517431:(r<0?n=-r:n=r,n<=1?(t=-.0172839517431+r*(-.0146362417966+r*(-.00357406772616+r*(-.000391032032692+r*249634036069e-17))),i=1+r*(.690560400696+r*(.249962384741+r*(.0443843438769+r*.00424073217211)))):(r=1/r,t=249634036069e-17+r*(-.000391032032692+r*(-.00357406772616+r*(-.0146362417966+r*-.0172839517431))),i=.00424073217211+r*(.0443843438769+r*(.249962384741+r*(.690560400696+r*1)))),t/i)}return Tu=e,Tu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ku,p5;function Mg(){if(p5)return ku;p5=1;function e(r){var n,t,i;return r===0?.99994466948:(r<0?n=-r:n=r,n<=1?(t=.99994466948+r*(104.649839762+r*(857.204033806+r*(731.901559577+r*45.5174411671))),i=1+r*(104.526456943+r*(823.313447808+r*(3119.93802124+r*3970.03311219)))):(r=1/r,t=45.5174411671+r*(731.901559577+r*(857.204033806+r*(104.649839762+r*.99994466948))),i=3970.03311219+r*(3119.93802124+r*(823.313447808+r*(104.526456943+r*1)))),t/i)}return ku=e,ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fu,m5;function Lg(){if(m5)return Fu;m5=1;var e=rr(),r=Rg(),n=yg(),t=Mg();function i(a){var o,s;return a<-5?(s=a*a,o=e(-a),(12-s-6*(o*o))/(12*s*a)):a<-2?r(a):a<2?n(a):a<1e3?(s=1/a,t(a)/(-12*a)):-1/(12*a)}return Fu=i,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ou,_5;function Ng(){if(_5)return Ou;_5=1;function e(r){var n,t,i;return r===0?.0495346498136:(r<0?n=-r:n=r,n<=1?(t=.0495346498136+r*(.0299521337141+r*(.00688296911516+r*(.000512634846317+r*-201411722031e-16))),i=1+r*(.759803615283+r*(.261547111595+r*(.0464854522477+r*.00403751193496)))):(r=1/r,t=-201411722031e-16+r*(.000512634846317+r*(.00688296911516+r*(.0299521337141+r*.0495346498136))),i=.00403751193496+r*(.0464854522477+r*(.261547111595+r*(.759803615283+r*1)))),t/i)}return Ou=e,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Du,g5;function Eg(){if(g5)return Du;g5=1;function e(r){var n,t,i;return r===0?.00452313583942:(r<0?n=-r:n=r,n<=1?(t=.00452313583942+r*(.00120744920113+r*(-789724156582e-16+r*(-504476066942e-16+r*-535770949796e-17))),i=1+r*(.912203410349+r*(.405368773071+r*(.0901638932349+r*.00948935714996)))):(r=1/r,t=-535770949796e-17+r*(-504476066942e-16+r*(-789724156582e-16+r*(.00120744920113+r*.00452313583942))),i=.00948935714996+r*(.0901638932349+r*(.405368773071+r*(.912203410349+r*1)))),t/i)}return Du=e,Du}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cu,$5;function Ig(){if($5)return Cu;$5=1;function e(r){var n,t,i;return r===0?.00439937562904:(r<0?n=-r:n=r,n<=1?(t=.00439937562904+r*(.000487225670639+r*(-.000128470657374+r*(529110969589e-17+r*15716677175e-17))),i=1+r*(.794435257415+r*(.333094721709+r*(.0703527806143+r*.00806110846078)))):(r=1/r,t=15716677175e-17+r*(529110969589e-17+r*(-.000128470657374+r*(.000487225670639+r*.00439937562904))),i=.00806110846078+r*(.0703527806143+r*(.333094721709+r*(.794435257415+r*1)))),t/i)}return Cu=e,Cu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bu,q5;function Ag(){if(q5)return Bu;q5=1;function e(r){var n,t,i;return r===0?-.0011481191232:(r<0?n=-r:n=r,n<=1?(t=-.0011481191232+r*(-.112850923276+r*(1.51623048511+r*(-.218472031183+r*.0730002451555))),i=1+r*(14.2482206905+r*(69.7360396285+r*(218.938950816+r*277.067027185)))):(r=1/r,t=.0730002451555+r*(-.218472031183+r*(1.51623048511+r*(-.112850923276+r*-.0011481191232))),i=277.067027185+r*(218.938950816+r*(69.7360396285+r*(14.2482206905+r*1)))),t/i)}return Bu=e,Bu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu,w5;function Sg(){if(w5)return Hu;w5=1;function e(r){var n,t,i;return r===0?-.000145727889667:(r<0?n=-r:n=r,n<=1?(t=-.000145727889667+r*(-.290806748131+r*(-13.308504545+r*(199.722374056+r*-11.4311378756))),i=1+r*(139.612587808+r*(2189.01116348+r*(7115.24019009+r*45574.6081453)))):(r=1/r,t=-11.4311378756+r*(199.722374056+r*(-13.308504545+r*(-.290806748131+r*-.000145727889667))),i=45574.6081453+r*(7115.24019009+r*(2189.01116348+r*(139.612587808+r*1)))),t/i)}return Hu=e,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,b5;function Pg(){if(b5)return Uu;b5=1;var e=rr(),r=Ng(),n=Eg(),t=Ig(),i=Ag(),a=Sg();function o(s){var u,l;return s<-8?(u=s*s,l=e(-s)/s,(-30+s*l*(6*u*l*l-12+u))/(12*s*u*u)):s<-4?r(s)/(s*s):s<-2?n(s):s<2?t(s):s<10?(u=1/s,i(u)/(s*s)):s<100?(u=1/s,a(u)/(s*s)):-e(s)/(12*s*s*s)}return Uu=o,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu,R5;function Tg(){if(R5)return Gu;R5=1;var e=I8(),r=Fr(),n=ee(),t=pe(),i=Lr(),a=Z(),o=J(),s=ir(),u=Tr(),l=ar(),f=rr(),v=ke(),d=Ue(),m=De(),h=dg(),p=A8(),c=qg(),g=bg(),w=Lg(),b=Pg(),q=e("gammaincinv:compute"),M=.5,I=.3333333333333333,N=.25,A=.2,E=.16666666666666666,y=.08333333333333333,_=.041666666666666664,$=[0,0,0,0,0];function R(L,F,S){var O,T,k,P,K,D,G,V,Q,C,H,B,or,er,W,Y,sr,nr,Gr,gr,z,Nr,vr,Sr,te,U,x,Ge,El,Il,We,Xe,Ke,Ve,Al,cr,ur,je,dr,Er,br,Ye,Qe,Je;if(F<M?(P=!0,K=F,Ye=-1):(P=!1,K=S,Ye=1),dr=0,o(L-1)<1e-4&&(Er=0,P?F<.001?(Xe=F*F,Ge=Xe*F,We=Ge*F,gr=We*F,Gr=gr*F,z=F+Xe*M+Ge*I+We*N+gr*A+Gr*E):z=-f(1-F):z=-f(S),L===1?(dr=2,Ve=z):(k=n(L),dr=1)),S<1e-30&&L<M&&(Er=0,z=-f(S*i(L))+(L-1)*f(-f(S*i(L))),dr=1,k=n(L)),L>1&&L<500&&F<1e-80){for(Er=0,D=1/L,O=1/(L+1),z=(n(L+1)+f(F))*D,z=s(z),er=z,je=0;je<10;je++)z=er*s(z*D)*l(1-z*O,D);dr=1,k=n(L)}if(G=1/L*(f(F)+n(L+1)),G<f(A*(1+L))&&dr===0&&(br=s(G),Er=0,Nr=L*L,Ke=Nr*L,El=Ke*L,W=L+1,H=W*W,C=W*H,Q=H*H,Y=L+2,V=Y*Y,sr=L+3,$[0]=1,$[1]=1/W,$[2]=M*(3*L+5)/(H*Y),$[3]=I*(31+8*Nr+33*L)/(C*Y*sr),$[4]=_*(2888+1179*Ke+125*El+3971*Nr+5661*L)/(Q*V*sr*(L+4)),z=br*r($,br),k=n(L),dr=1),L<10&&dr===0&&(B=a(L)/(c(L)*v),or=u(.02,B),S<or&&(Er=0,cr=1-L,U=cr*cr,x=U*cr,nr=a(-2/L*f(S/B)),z=L*p(nr),ur=f(z),z>5?(vr=ur*ur,Sr=vr*ur,te=Sr*ur,br=1/z,$[0]=ur-1,$[1]=(3*cr-2*cr*ur+vr-2*ur+2)*M,$[2]=(24*cr*ur-11*U-24*cr-6*vr+12*ur-12-9*cr*vr+6*U*ur+2*Sr)*E,$[3]=(-12*x*ur+8.04*cr*vr-114*U*ur+(72+36*vr)+(3*te-72*ur+162)*(cr-168*cr*ur)-(12*Sr+25*x)-(22*cr*Sr+36*U*vr+120*U))*y,$[4]=0,z=z-ur+cr*br*r($,br)):(br=1/z,vr=ur*ur,Al=ur-1,Qe=ur-cr*br*Al,Qe<z&&(z-=Qe)),k=n(L),dr=1)),o(K-M)<1e-5&&dr===0&&(Er=0,D=1/L,z=L-I+(.019753086419753086+.007211444248481286*D)*D,k=n(L),dr=1),L<1&&dr===0&&(Er=0,P?z=s(1/L*(f(K)+n(L+1))):z=s(1/L*(f(1-K)+n(L+1))),k=n(L),dr=1),dr===0)if(Er=1,D=1/L,br=t(2*K),nr=Ye*br/a(L*M),br<d)nr+=(g(nr)+(w(nr)+b(nr)*D)*D)*D,z=L*p(nr),Je=nr,Il=-a(L/m)*s(-M*L*Je*Je)/c(L),T=1/Il;else return q("Warning: Overflow problems in one or more steps of the computation."),NaN;return dr<2&&(Ve=h(z,L,Er,F,S,k,T,P)),Ve}return Gu=R,Gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,y5;function kg(){if(y5)return Wu;y5=1;var e=X(),r=Be(),n=tr(),t=Tg();function i(a,o,s){return e(a)||e(o)?NaN:o<r?NaN:a>1||a<0?NaN:s===!0?a===0?n:a===1?0:t(o,1-a,a):a===0?0:a===1?n:t(o,a,1-a)}return Wu=i,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,M5;function Fg(){if(M5)return Xu;M5=1;var e=kg();return Xu=e,Xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,L5;function Og(){if(L5)return Ku;L5=1;var e=5e-324;return Ku=e,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Vu,N5;function Dg(){if(N5)return Vu;N5=1;var e=Fg(),r=rr(),n=Z(),t=Og(),i=N8(),a=E8();function o(s,u,l,f){var v,d,m,h,p,c,g,w,b,q,M,I,N,A,E,y,_,$,R,L,F,S,O,T,k,P,K,D,G,V;return l<f?p=e(l,u,!0):p=e(f,u,!1),p/=s,A=u/s,D=n(1+A),$=D*D,R=$*D,L=$*$,F=R*$,S=R*R,O=L*R,T=L*L,k=F*L,g=F*F,K=p-A,E=K*K,y=E*K,_=E*E,P=D+1,w=P*P,b=P*w,q=w*w,M=(D+2)*(D-1)/(3*D),M+=(R+9*$+21*D+5)*K/(36*$*P),M-=(L-13*R+69*$+167*D+46)*E/(1620*w*R),M-=(7*F+21*L+70*R+26*$-93*D-31)*y/(6480*b*L),M-=(75*S+202*F+188*L-888*R-1345*$+118*D+138)*_/(272160*q*F),I=(28*L+131*R+402*$+581*D+208)*(D-1)/(1620*P*R),I-=(35*S-154*F-623*L-1636*R-3983*$-3514*D-925)*K/(12960*w*L),I-=(2132*O+7915*S+16821*F+35066*L+87490*R+141183*$+95993*D+21640)*E/(816480*F*b),I-=(11053*T+53308*O+117010*S+163924*F+116188*L-258428*R-677042*$-481940*D-105497)*y/(14696640*q*S),N=-((3592*O+8375*S-1323*F-29198*L-89578*R-154413*$-116063*D-29632)*(D-1))/(816480*F*w),N-=(442043*k+2054169*T+3803094*O+3470754*S+2141568*F-2393568*L-19904934*R-34714674*$-23128299*D-5253353)*K/(146966400*S*b),N-=(116932*g+819281*k+2378172*T+4341330*O+6806004*S+10622748*F+18739500*L+30651894*R+30869976*$+15431867*D+2919016)*E/(146966400*q*O),c=p+M/s+I/(s*s)+N/(s*s*s),c<=0&&(c=t),G=c-A*r(c)+(1+A)*r(1+A)-A,v=1/(1+A),m=c<A?v:0,h=c<A?1:v,V=(m+h)/2,d=i(G,A),a(d,V,m,h,32,100)}return Vu=o,Vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ju,E5;function Cg(){if(E5)return ju;E5=1;var e=J(),r=Zr(),n=He(),t=Hr(),i=Ur();function a(o,s,u,l,f,v){var d,m,h,p,c,g,w,b,q,M,I,N,A,E,y,_;E=0,m=!1,g=s,c=r(1,1-f),q=t(1e7*s,1e7),w=0,h=q,p=q,b=v;do{if(w=E,p=h,h=q,A=o(g),E=A[0],y=A[1],_=A[2],b-=1,E===0)break;if(y===0?(w===0&&(g===u?s=l:s=u,w=o(s),q=s-g),n(w)*n(E)<0?q<0?q=(g-u)/2:q=(g-l)/2:q<0?q=(g-l)/2:q=(g-u)/2):_===0?q=E/y:(M=2*E,N=2*y-E*(_/y),e(N)<1&&e(M)>=e(N)*i?q=E/y:q=M/N,q*y/E<0&&(q=E/y,e(q)>2*e(s)&&(q=(q<0?-1:1)*2*e(s)))),d=e(q/p),d>.8&&d<2&&(q=q>0?(g-u)/2:(g-l)/2,e(q)>g&&(q=n(q)*g),p=q*3),s=g,g-=q,g<u){if(e(u)<1&&e(g)>1&&i/e(g)<e(u)?I=1e3:I=g/u,e(I)<1&&(I=1/I),!m&&I>0&&I<3)q=.99*(s-u),g=s-q,m=!0;else if(q=(s-u)/2,g=s-q,g===u||g===l)break}else if(g>l){if(e(l)<1&&e(g)>1&&i/e(g)<e(l)?I=1e3:I=g/l,e(I)<1&&(I=1/I),!m&&I>0&&I<3)q=.99*(s-l),g=s-q,m=!0;else if(q=(s-l)/2,g=s-q,g===u||g===l)break}q>0?l=s:u=s}while(b&&e(g*c)<e(q));return g}return ju=a,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Yu,I5;function Bg(){if(I5)return Yu;I5=1;var e=y8().assign,r=J(),n=Ur(),t=Br();function i(a,o,s,u){return l;function l(f){var v,d,m,h,p;return p=1-f,v=[0,0],e(f,a,o,!0,u,v,1,0),h=v[0]-s,d=v[1],u&&(d=-d),p===0&&(p=t*64),f===0&&(f=t*64),m=d*(-(p*a)+(o-2)*f+1),r(m)<p*f*n&&(m/=p*f),u&&(m=-m),d===0&&(d=(u?-1:1)*t*64),[h,d,m]}}return Yu=i,Yu}var Qu,A5;function Hg(){if(A5)return Qu;A5=1;var e=Fr(),r=he(),n=zr(),t=qr(),i=cl(),a=Te(),o=Z(),s=J(),u=ir(),l=ar(),f=ve(),v=Hr(),d=Tr(),m=rr(),h=Br(),p=pl(),c=Mr(),g=Y_(),w=Q_(),b=fg(),q=Dg(),M=Cg(),I=Bg(),N=32,A=1e3,E=[0,0,0,0,0];function y(_,$,R,L){var F,S,O,T,k,P,K,D,G,V,Q,C,H,B,or,er,W,Y,sr,nr,Gr,gr,z,Nr,vr,Sr,te,U,x;if(S=!1,L===0)return[1,0];if(R===0)return[0,1];if(_===1){if($===1)return[R,1-R];C=$,$=_,_=C,C=L,L=R,R=C,S=!0}if(U=0,T=0,P=1,_===.5){if($===.5)return U=f(R*p),U*=U,x=f(L*p),x*=x,[U,x];$>.5&&(C=$,$=_,_=C,C=L,L=R,R=C,S=!S)}if($===.5&&_>=.5&&R!==1)Gr={},U=g(_,R,Gr),x=Gr.value;else{if($===1)return R<L?_>1?(U=l(R,1/_),x=-n(m(R)/_)):(U=l(R,1/_),x=1-U):(U=u(t(-L)/_),x=-n(t(-L)/_)),S&&(C=x,x=U,U=C),[U,x];if(_+$>5)R>.5&&(C=$,$=_,_=C,C=L,L=R,R=C,S=!S),G=d(_,$),D=v(_,$),o(G)>D-G&&G>5?(U=w(_,$,R),x=1-U):(vr=_+$,k=i(o(_/vr)),O=G/vr,O>=.2&&O<=.8&&vr>=10?(Q=l(R,1/_),Q<.0025&&_+$<200?U=Q*l(_*a(_,$),1/_):U=b(R,vr,k),x=1-U):(_<$&&(C=$,$=_,_=C,C=L,L=R,R=C,S=!S),V=0,$<2&&(V=a(_,$)),V===0?x=1:(x=l($*L*V,1/$),U=1-x)),x>1e-5&&(U=q(_,$,R,L),x=1-U));else if(_<1&&$<1){if(nr=(1-_)/(2-_-$),er=r(nr,_,$)-R,s(er)/R<c*3)return S?[1-nr,nr]:[nr,1-nr];er<0&&(C=$,$=_,_=C,C=L,L=R,R=C,S=!S,nr=1-nr),sr=l(_*R*a(_,$),1/_),U=sr/(1+sr),x=1/(1+sr),U>nr&&(U=nr),P=nr}else _>1&&$>1?(nr=(_-1)/(_+$-2),H=($-1)/(_+$-2),Y=r(nr,_,$)-R,Y<0&&(C=$,$=_,_=C,C=L,L=R,R=C,C=H,H=nr,nr=C,S=!S),W=m(R*_*a(_,$))/_,U=u(W),x=U<.9?1-U:-n(W),$<_&&U<.2&&(B=_-1,or=$-1,gr=_*_,z=_*gr,Nr=$*$,E[0]=0,E[1]=1,E[2]=or/B,B*=B,E[3]=or*(3*_*$+5*$+gr-_-4)/(2*(_+2)*B),B*=_+1,E[4]=or*(33*_*Nr+31*Nr+8*gr*Nr-30*_*$-47*$+11*gr*$+6*z*$+18+4*_-z+gr*gr-10*gr),E[4]/=3*(_+3)*(_+2)*B,U=e(E,U)),U>nr&&(U=nr),P=nr):($<_&&(C=$,$=_,_=C,C=L,L=R,R=C,S=!S),l(R,1/_)<.5?(U=l(R*_*a(_,$),1/_),U===0&&(U=h),x=1-U):(x=l(1-l(R,$*a(_,$)),1/$),x===0&&(x=h),U=1-x))}return U>.5&&(C=$,$=_,_=C,C=L,L=R,R=C,C=x,x=U,U=C,S=!S,Sr=1-P,te=1-T,T=Sr,P=te),T===0&&(S?(T=c,U<T&&(U=T)):T=h,U<T&&(U=T)),F=N,U<1e-50&&(_<1||$<1)&&(F*=3,F/=2),K=I(_,$,R<L?R:L,R>=L),U=M(K,U,T,P,F,A),U===T&&(U=0),S?[1-U,U]:[U,1-U]}return Qu=y,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ju,S5;function ql(){if(S5)return Ju;S5=1;var e=Hg();return Ju=e,Ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,P5;function Ug(){if(P5)return Zu;P5=1;var e=X(),r=ql();function n(t,i,a,o){return e(t)||e(i)||e(a)?NaN:i<=0||a<=0?NaN:t<0||t>1?NaN:o?r(i,a,1-t,t)[0]:r(i,a,t,1-t)[0]}return Zu=n,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,T5;function S8(){if(T5)return zu;T5=1;var e=Ug();return zu=e,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu,k5;function Gg(){if(k5)return xu;k5=1;var e=S8(),r=X();function n(t,i,a){return r(t)||r(i)||r(a)||i<=0||a<=0||t<0||t>1?NaN:e(t,i,a)}return xu=n,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,F5;function Wg(){if(F5)return r1;F5=1;var e=wr(),r=S8(),n=X();function t(i,a){if(n(i)||n(a)||i<=0||a<=0)return e(NaN);return o;function o(s){return n(s)||s<0||s>1?NaN:r(s,i,a)}}return r1=t,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1,O5;function Xg(){if(O5)return e1;O5=1;var e=fr(),r=Gg(),n=Wg();return e(r,"factory",n),e1=r,e1}var Kg=Xg(),Vg=yr(Kg);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1,D5;function jg(){if(D5)return n1;D5=1;var e=Oe(),r=Z(),n=X();function t(i,a,o){var s,u;return n(i)||n(a)||n(o)||o<0?NaN:o===0?i<a?0:1:(s=o*r(2),u=i-a,.5*e(-u/s))}return n1=t,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1,C5;function Yg(){if(C5)return t1;C5=1;var e=X();function r(n,t){return e(n)||e(t)?NaN:n<t?0:1}return t1=r,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,B5;function Qg(){if(B5)return i1;B5=1;var e=wr(),r=X();function n(t){if(r(t))return e(NaN);return i;function i(a){return r(a)?NaN:a<t?0:1}}return i1=n,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,H5;function Jg(){if(H5)return a1;H5=1;var e=fr(),r=Yg(),n=Qg();return e(r,"factory",n),a1=r,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,U5;function Zg(){if(U5)return o1;U5=1;var e=wr(),r=Jg().factory,n=X(),t=Z(),i=Oe();function a(o,s){var u;if(n(o)||n(s)||s<0)return e(NaN);if(s===0)return r(o);return u=s*t(2),l;function l(f){var v;return n(f)?NaN:(v=f-o,.5*i(-v/u))}}return o1=a,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,G5;function zg(){if(G5)return s1;G5=1;var e=fr(),r=jg(),n=Zg();return e(r,"factory",n),s1=r,s1}var xg=zg(),P8=yr(xg);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,W5;function r$(){if(W5)return u1;W5=1;var e=ir(),r=ar(),n=Z(),t=De(),i=tr(),a=X();function o(s,u,l){var f,v,d;return a(s)||a(u)||a(l)||l<0?NaN:l===0?s===u?i:0:(f=r(l,2),v=1/n(f*t),d=-1/(2*f),v*e(d*r(s-u,2)))}return u1=o,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,X5;function e$(){if(X5)return l1;X5=1;var e=tr(),r=X();function n(t,i){return r(t)||r(i)?NaN:t===i?e:0}return l1=n,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,K5;function n$(){if(K5)return f1;K5=1;var e=wr(),r=tr(),n=X();function t(i){if(n(i))return e(NaN);return a;function a(o){return n(o)?NaN:o===i?r:0}}return f1=t,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,V5;function t$(){if(V5)return v1;V5=1;var e=fr(),r=e$(),n=n$();return e(r,"factory",n),v1=r,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1,j5;function i$(){if(j5)return c1;j5=1;var e=wr(),r=t$().factory,n=X(),t=Z(),i=ir(),a=ar(),o=De();function s(u,l){var f,v,d;if(n(u)||n(l)||l<0)return e(NaN);if(l===0)return r(u);return f=a(l,2),v=1/t(f*o),d=-1/(2*f),m;function m(h){return n(h)?NaN:v*i(d*a(h-u,2))}}return c1=s,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1,Y5;function a$(){if(Y5)return d1;Y5=1;var e=fr(),r=r$(),n=i$();return e(r,"factory",n),d1=r,d1}var o$=a$(),T8=yr(o$);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,Q5;function s$(){if(Q5)return h1;Q5=1;function e(r){var n,t,i;return r===0?-.0005087819496582806:(r<0?n=-r:n=r,n<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}return h1=e,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,J5;function u$(){if(J5)return p1;J5=1;function e(r){var n,t,i;return r===0?-.20243350835593876:(r<0?n=-r:n=r,n<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}return p1=e,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m1,Z5;function l$(){if(Z5)return m1;Z5=1;function e(r){var n,t,i;return r===0?-.1311027816799519:(r<0?n=-r:n=r,n<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}return m1=e,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,z5;function f$(){if(z5)return _1;z5=1;function e(r){var n,t,i;return r===0?-.0350353787183178:(r<0?n=-r:n=r,n<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}return _1=e,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,x5;function v$(){if(x5)return g1;x5=1;function e(r){var n,t,i;return r===0?-.016743100507663373:(r<0?n=-r:n=r,n<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}return g1=e,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var $1,r7;function c$(){if(r7)return $1;r7=1;var e=X(),r=Z(),n=rr(),t=tr(),i=lr(),a=s$(),o=u$(),s=l$(),u=f$(),l=v$(),f=.08913147449493408,v=2.249481201171875,d=.807220458984375,m=.9399557113647461,h=.9836282730102539;function p(c){var g,w,b,q,M,I;return e(c)?NaN:c===1?t:c===-1?i:c===0?c:c>1||c<-1?NaN:(c<0?(g=-1,w=-c):(g=1,w=c),q=1-w,w<=.5?(M=w*(w+10),I=a(w),g*(M*f+M*I)):q>=.25?(M=r(-2*n(q)),q-=.25,I=o(q),g*(M/(v+I))):(q=r(-n(q)),q<3?(b=q-1.125,I=s(b),g*(d*q+I*q)):q<6?(b=q-3,I=u(b),g*(m*q+I*q)):(b=q-6,I=l(b),g*(h*q+I*q))))}return $1=p,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,e7;function k8(){if(e7)return q1;e7=1;var e=c$();return q1=e,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w1,n7;function d$(){if(n7)return w1;n7=1;var e=k8(),r=X(),n=Z();function t(i,a,o){var s,u;return r(a)||r(o)||r(i)||o<0||i<0||i>1?NaN:o===0?a:(s=a,u=o*n(2),s+u*e(2*i-1))}return w1=t,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,t7;function h$(){if(t7)return b1;t7=1;var e=X();function r(n,t){return e(n)||n<0||n>1?NaN:t}return b1=r,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1,i7;function p$(){if(i7)return R1;i7=1;var e=wr(),r=X();function n(t){if(r(t))return e(NaN);return i;function i(a){return r(a)||a<0||a>1?NaN:t}}return R1=n,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,a7;function m$(){if(a7)return y1;a7=1;var e=fr(),r=h$(),n=p$();return e(r,"factory",n),y1=r,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,o7;function _$(){if(o7)return M1;o7=1;var e=wr(),r=m$().factory,n=k8(),t=X(),i=Z();function a(o,s){var u,l;if(t(o)||t(s)||s<0)return e(NaN);return s===0&&r(o),u=o,l=s*i(2),f;function f(v){return t(v)||v<0||v>1?NaN:u+l*n(2*v-1)}}return M1=a,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,s7;function g$(){if(s7)return L1;s7=1;var e=fr(),r=d$(),n=_$();return e(r,"factory",n),L1=r,L1}var $$=g$(),q$=yr($$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,u7;function w$(){if(u7)return N1;u7=1;var e=he(),r=X(),n=ar();function t(i,a){var o,s,u;return r(i)||r(a)||a<=0?NaN:i===0?.5:(o=n(i,2),a>2*o?(u=o/(a+o),s=e(u,.5,a/2,!0,!0)/2):(u=a/(a+o),s=e(u,a/2,.5,!0,!1)/2),i>0?1-s:s)}return N1=t,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,l7;function b$(){if(l7)return E1;l7=1;var e=wr(),r=he(),n=X(),t=ar();function i(a){if(n(a)||a<=0)return e(NaN);return o;function o(s){var u,l,f;return n(s)?NaN:s===0?.5:(u=t(s,2),a>2*u?(f=u/(a+u),l=r(f,.5,a/2,!0,!0)/2):(f=a/(a+u),l=r(f,a/2,.5,!0,!1)/2),s>0?1-l:l)}}return E1=i,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,f7;function R$(){if(f7)return I1;f7=1;var e=fr(),r=w$(),n=b$();return e(r,"factory",n),I1=r,I1}var y$=R$(),F8=yr(y$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,v7;function M$(){if(v7)return A1;v7=1;var e=X(),r=Te(),n=Z(),t=ar();function i(a,o){var s;return e(a)||e(o)||o<=0?NaN:(s=n(o)*r(o/2,.5),t(o/(o+t(a,2)),(1+o)/2)/s)}return A1=i,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,c7;function L$(){if(c7)return S1;c7=1;var e=wr(),r=X(),n=Te(),t=Z(),i=ar();function a(o){var s,u;if(r(o)||o<=0)return e(NaN);return u=t(o)*n(o/2,.5),s=(1+o)/2,l;function l(f){return r(f)?NaN:i(o/(o+i(f,2)),s)/u}}return S1=a,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,d7;function N$(){if(d7)return P1;d7=1;var e=fr(),r=M$(),n=L$();return e(r,"factory",n),P1=r,P1}var E$=N$(),wl=yr(E$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1,h7;function I$(){if(h7)return T1;h7=1;var e=ql(),r=X(),n=He(),t=Z();function i(a,o){var s,u;return r(o)||r(a)||o<=0||a<0||a>1?NaN:(s=a>.5?1-a:a,u=e(o/2,.5,2*s,1-2*s),n(a-.5)*t(o*u[1]/u[0]))}return T1=i,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,p7;function A$(){if(p7)return k1;p7=1;var e=wr(),r=ql(),n=X(),t=He(),i=Z();function a(o){if(n(o)||o<=0)return e(NaN);return s;function s(u){var l,f;return n(u)||u<0||u>1?NaN:(l=u>.5?1-u:u,f=r(o/2,.5,2*l,1-2*l),t(u-.5)*i(o*f[1]/f[0]))}}return k1=a,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1,m7;function S$(){if(m7)return F1;m7=1;var e=fr(),r=I$(),n=A$();return e(r,"factory",n),F1=r,F1}var P$=S$(),T$=yr(P$);const $e=.02,k$=1e-6,F$=6,_7=5e-5;function O$(){const e=[],r=10**(1/F$);for(let u=0;;u++){const l=k$*r**u;if(e.push(l),l*(r-1)>=$e)break;if(l>=.25)throw new Error("hermite inverse-CDF table: the tail spacing never reaches the middle spacing below u = 0.25")}const n=e[e.length-1],t=$e/2,i=[],a=Math.round(1/$e)-1;for(let u=1;u<=a;u++){const l=u*$e;l>n+t&&l<1-n-t&&i.push(l)}const o=e.map(u=>1-u).reverse(),s=Float64Array.from([...e,...i,...o]);for(let u=1;u<s.length;u++)if(!(s[u]>s[u-1]))throw new Error("hermite inverse-CDF table: u nodes are not strictly increasing");return s}const pr=O$(),O8=pr[0],D8=pr[pr.length-1];function C8(e){return e>=O8&&e<=D8}function D$(e){const r=pr.length,n=new Float64Array(r),t=new Float64Array(r);let i=-1/0;for(let o=0;o<r;o++){const s=pr[o],u=e.quantile(s);if(Number.isNaN(u))throw new Error(`hermite inverse-CDF table: the quantile at node ${o} (u = ${s}) is NaN`);if(!Number.isFinite(u))return{kind:"refused",reason:`node ${o} (u = ${s}) has quantile ${u}`};const l=e.quantileSlope(u);if(Number.isNaN(l))throw new Error(`hermite inverse-CDF table: the quantile slope at node ${o} (u = ${s}) is NaN`);if(l<0)throw new Error(`hermite inverse-CDF table: the quantile slope at node ${o} (u = ${s}) is negative (${l})`);if(!Number.isFinite(l))return{kind:"refused",reason:`node ${o} (u = ${s}) has quantile slope ${l}`};i=Math.max(i,u),n[o]=i,t[o]=l}for(let o=0;o<r-1;o++){const s=(n[o+1]-n[o])/(pr[o+1]-pr[o]);if(s===0){if(t[o]!==0||t[o+1]!==0)return{kind:"refused",reason:`interval ${o} is flat but its end slopes are not both 0`};continue}const u=t[o]/s,l=t[o+1]/s,f=u*u+l*l;if(f>9)return{kind:"refused",reason:`interval ${o} would not be monotone (a² + b² = ${f.toPrecision(3)} > 9)`}}const a={values:n,slopes:t};for(let o=0;o<r-1;o++){const s=(pr[o]+pr[o+1])/2,u=Math.abs(e.cdf(B8(a,s))-s);if(Number.isNaN(u))throw new Error(`hermite inverse-CDF table: the CDF at the midpoint of interval ${o} is NaN`);if(u>_7)return{kind:"refused",reason:`the midpoint of interval ${o} (u = ${s.toPrecision(3)}) is off by ${u.toExponential(1)} in probability (at most ${_7} allowed)`}}return{kind:"built",table:a}}function B8(e,r){if(!C8(r))throw new Error(`hermite inverse-CDF table: u = ${r} is outside the extreme nodes [${O8}, ${D8}]`);let n=0,t=pr.length-1;for(;n<t-1;){const v=n+t>>1;pr[v]<=r?n=v:t=v}const i=pr[n+1]-pr[n],a=(r-pr[n])/i,o=a*a,s=o*a,u=e.values[n],l=e.values[n+1],f=(2*s-3*o+1)*u+(s-2*o+a)*i*e.slopes[n]+(-2*s+3*o)*l+(s-o)*i*e.slopes[n+1];return Math.min(Math.max(f,u),l)}const g7=1e-9;function C$(e){const[r,n,t]=e;return r<t?r<=n&&n<=t?null:`requires lo <= peak <= hi, got lo=${r}, peak=${n}, hi=${t}`:`requires lo < hi, got lo=${r}, hi=${t}`}function B$(e){const[r,n]=e;return r<n?null:`requires lo < hi, got lo=${r}, hi=${n}`}function H$(e){const[r,n]=e;return r>0&&n>0?null:`requires a > 0 and b > 0, got a=${r}, b=${n}`}function $7(e){const r=e[1];return r>0?null:`requires sigma > 0, got sigma=${r}`}function U$(e){const[r,n]=e;return 0<r&&r<n?null:`requires 0 < lo < hi, got lo=${r}, hi=${n}`}function q7(e){const[,r,n]=e;return r<=0?`requires sigma > 0, got sigma=${r}`:n<=0?`requires df > 0, got df=${n}`:null}function w7(e,r){const n=r-e;return{cdf:t=>t<=e?0:t>=r?1:(t-e)/n,ppf:t=>e+t*n,pdf:t=>t>=e&&t<=r?1/n:0}}function G$(e,r,n){const t=n-e,i=(r-e)/t;return{cdf:a=>a<=e?0:a>=n?1:a<=r?(a-e)*(a-e)/(t*(r-e)):1-(n-a)*(n-a)/(t*(n-r)),ppf:a=>a<i?e+Math.sqrt(a*t*(r-e)):n-Math.sqrt((1-a)*t*(n-r)),pdf:a=>a<e||a>n?0:a===r?2/t:a<r?2*(a-e)/(t*(r-e)):2*(n-a)/(t*(n-r))}}function b7(e,r){return{cdf:n=>P8(n,e,r),ppf:n=>q$(n,e,r),pdf:n=>T8(n,e,r)}}function el(e,r,n){return{cdf:t=>F8((t-e)/r,n),ppf:t=>e+r*T$(t,n),pdf:t=>wl((t-e)/r,n)/r}}function W$(e,r){return{cdf:n=>rl(n,e,r),ppf:n=>Vg(n,e,r),pdf:n=>L_(n,e,r)}}const X$=1e-10,K$=20,V$=1e-300,j$=24,Y$=[-.906179845938664,-.5384693101056831,0,.5384693101056831,.906179845938664],Q$=[.2369268850561891,.4786286704993665,.5688888888888889,.4786286704993665,.2369268850561891],J$=60,Z$=.001;function nl(e,r,n,t,i){return(r-e)/6*(n+4*t+i)}function tl(e,r,n,t,i,a,o,s){const u=(r+n)/2,l=(r+u)/2,f=(u+n)/2,v=e(l),d=e(f),m=nl(r,u,t,v,i),h=nl(u,n,i,d,a),p=m+h,c=X$*Math.max(Math.abs(p),V$);return s>=K$||Math.abs(p-o)<=15*c?p+(p-o)/15:tl(e,r,u,t,v,i,m,s+1)+tl(e,u,n,i,d,a,h,s+1)}function z$(e,r,n){if(!(n>r))return 0;const t=(r+n)/2,i=e(r),a=e(t),o=e(n);return tl(e,r,n,i,a,o,nl(r,n,i,a,o),0)}function x$(e){const r=[0];for(let n=e;n>=1;n--)r.push(.5*2**-n);for(let n=0;n<=e;n++)r.push(1-.5*2**-n);return r.push(1),r}const H8=x$(j$);function rq(e){return U8(e,H8)}function eq(e,r){let n=0;for(let t=0;t<r.length-1;t++){const i=r[t],a=r[t+1],o=(a-i)/2,s=(i+a)/2;let u=0;Y$.forEach((l,f)=>{u+=Q$[f]*e(s+o*l)}),n+=o*u}return n}function U8(e,r){let n=0;for(let t=0;t<r.length-1;t++)n+=z$(e,r[t],r[t+1]);return n}function nq(e,r,n,t){const i=[r];for(let a=t;a>=1;a--){const o=n*2**-a;o>r&&i.push(o)}return i.push(n),U8(e,i)}function tq(e,r,n){const t=Kr(e,r),i=Kr(e,n)-t;return i>0?i*rq(a=>Math.min(Math.max(e.ppf(t+a*i),r),n)):0}function iq(e){return eq(r=>Math.log(Math.min(Math.max(e(r),Number.MIN_VALUE),Number.MAX_VALUE)),H8)}function R7(e,r,n,t){return t>n?e*(t**3-n**3)/3+r*(t**2-n**2)/2:0}function il(e,r,n){const[t,i]=e,a=Math.max(t,r),o=Math.min(i,n);return o>a?(o*o-a*a)/(2*(i-t)):0}function y7(e,r,n){const[t,i,a]=e,o=a-t,s=i-t,u=a-i;let l=0;if(s>0){const f=2/(o*s);l+=R7(f,-t*f,Math.max(t,r),Math.min(i,n))}if(u>0){const f=2/(o*u);l+=R7(-f,a*f,Math.max(i,r),Math.min(a,n))}return l}function M7(e,r,n){const[t,i]=e,a=Math.min(Math.max(r,0),1),o=Math.min(Math.max(n,0),1);return o>a?t/(t+i)*(rl(o,t+1,i)-rl(a,t+1,i)):0}function L7(e){return Number.isFinite(e)?T8(e,0,1):0}function Ee(e){return e===-1/0?0:e===1/0?1:P8(e,0,1)}function O1(e,r,n){const[t,i]=e,a=(r-t)/i,o=(n-t)/i;return t*(Ee(o)-Ee(a))-i*(L7(o)-L7(a))}function aq(e,r,n){const[t,i]=e,a=o=>Number.isFinite(o)?(o-t)/i-i:o;return Math.exp(t+i*i/2)*(Ee(a(n))-Ee(a(r)))}function oq(e,r,n){const[t,i]=e;return il([Math.log(t),Math.log(i)],r,n)}function sq(e,r,n){const[t,i]=e,a=Math.log(t),o=Math.log(i),s=Math.max(a,r),u=Math.min(o,n);return u>s?(Math.exp(u)-Math.exp(s))/(o-a):0}function D1(e,r){return-(r+e*e)*wl(e,r)/(r-1)}function uq(e,r,n){if(!Number.isFinite(e)||!Number.isFinite(r)){if(n<=1)return!Number.isFinite(e)&&!Number.isFinite(r)?NaN:Number.isFinite(e)?1/0:-1/0;const t=i=>Number.isFinite(i)?D1(i,n):0;return t(r)-t(e)}return Math.abs(n-1)<Z$?tq(el(0,1,n),e,r):D1(r,n)-D1(e,n)}function C1(e,r,n){const[t,i,a]=e,o=(r-t)/i,s=(n-t)/i,u=l=>l===-1/0?0:l===1/0?1:F8(l,a);return t*(u(s)-u(o))+i*uq(o,s,a)}function lq(e,r,n){const[t,i,a]=e;if(n===1/0)return 1/0;const o=wl(0,a)/i,s=l=>{const f=(l-t)/i;return o*(1+f*f/a)**(-(a+1)/2)},u=r===-1/0?0:Math.exp(r-n);return Math.exp(n)*nq(l=>l<=0?0:s(n+Math.log(l)),u,1,J$)}const B1=100,ue={tri:{signature:"tri(lo, peak, hi)",note:"triangular, mode at peak; lo <= peak <= hi, lo < hi",nParams:3,check:C$,build:e=>({latent:G$(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:y7,partialLatentFirstMoment:y7,sampleTableMinimumPlannedDraws:null},uniform:{signature:"uniform(lo, hi)",note:"uniform; lo < hi",nParams:2,check:B$,build:e=>({latent:w7(e[0],e[1]),logX:!1}),partialFirstMoment:il,partialLatentFirstMoment:il,sampleTableMinimumPlannedDraws:null},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:H$,build:e=>({latent:W$(e[0],e[1]),logX:!1}),partialFirstMoment:M7,partialLatentFirstMoment:M7,sampleTableMinimumPlannedDraws:B1},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:$7,build:e=>({latent:b7(e[0],e[1]),logX:!1}),partialFirstMoment:O1,partialLatentFirstMoment:O1,sampleTableMinimumPlannedDraws:null},lognormal:{signature:"lognormal(mu, sigma)",note:"log-normal; mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:$7,build:e=>({latent:b7(e[0],e[1]),logX:!0}),partialFirstMoment:aq,partialLatentFirstMoment:O1,sampleTableMinimumPlannedDraws:null},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:U$,build:e=>({latent:w7(Math.log(e[0]),Math.log(e[1])),logX:!0}),partialFirstMoment:sq,partialLatentFirstMoment:oq,sampleTableMinimumPlannedDraws:null},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma is the scale, not the standard deviation; sigma > 0, df > 0",nParams:3,check:q7,build:e=>({latent:el(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:C1,partialLatentFirstMoment:C1,sampleTableMinimumPlannedDraws:B1},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; mu/sigma are the location/scale of log(X), so sigma is not its standard deviation; sigma > 0, df > 0",nParams:3,check:q7,build:e=>({latent:el(e[0],e[1],e[2]),logX:!0}),partialFirstMoment:lq,partialLatentFirstMoment:C1,sampleTableMinimumPlannedDraws:B1}},fq=["normal","lognormal","t","logt"];function vq(e){const[r,n]=e;return r<n?null:`requires lo < hi in the truncation window, got lo=${r}, hi=${n}`}function cq(e,r){const n=r.signature.split("(",2)[1].slice(0,-1);return{signature:`${e}-trunc(${n}, lo, hi)`,note:`${r.note}; explicitly truncated to [lo, hi]`,nParams:r.nParams+2,check:t=>r.check(t.slice(0,r.nParams))??vq(t.slice(r.nParams)),build:t=>r.build(t),partialFirstMoment:r.partialFirstMoment,partialLatentFirstMoment:r.partialLatentFirstMoment,sampleTableMinimumPlannedDraws:r.sampleTableMinimumPlannedDraws,hasTruncWindow:!0}}for(const e of fq)ue[`${e}-trunc`]=cq(e,ue[e]);function Kr(e,r){return r===-1/0?0:r===1/0?1:e.cdf(r)}class bl{constructor(r,n,t,i,a,o,s,u,l,f){j(this,"plannedSampleDrawCount",0);j(this,"sampleTableState");this.spec=r,this.latent=n,this.logX=t,this.cdfLo=i,this.mass=a,this.xLo=o,this.xHi=s,this.yLo=u,this.yHi=l,this.sampleTableMinimumPlannedDraws=f,this.sampleTableState=f===null?{kind:"neverTabulated"}:{kind:"awaitingPlannedDraws",plannedDrawCount:0,minimumPlannedDrawCount:f}}latentQuantile(r){return this.latent.ppf(this.cdfLo+r*this.mass)}windowClampedX(r){const n=this.logX?Math.exp(r):r;return Math.min(Math.max(n,this.xLo),this.xHi)}inverseCdf(r){return this.windowClampedX(this.latentQuantile(r))}sampleInverseCdf(r){const n=this.sampleTableState;return n.kind==="built"&&C8(r)?this.windowClampedX(B8(n.table,r)):this.inverseCdf(r)}get sampleTableStatus(){return this.sampleTableState}planSampleDraws(r){if(!(Number.isFinite(r)&&r>=0))throw new Error(`${JSON.stringify(this.spec.text)}: planned draw count must be finite and non-negative, got ${r}`);const n=this.sampleTableMinimumPlannedDraws;if(!(n===null||this.sampleTableState.kind!=="awaitingPlannedDraws")){if(this.plannedSampleDrawCount+=r,this.plannedSampleDrawCount<n){this.sampleTableState={kind:"awaitingPlannedDraws",plannedDrawCount:this.plannedSampleDrawCount,minimumPlannedDrawCount:n};return}this.sampleTableState=D$(this.sampleTableSource())}}sampleTableSource(){return{quantile:r=>Math.min(Math.max(this.latentQuantile(r),this.yLo),this.yHi),quantileSlope:r=>this.mass/this.latent.pdf(r),cdf:r=>(Kr(this.latent,r)-this.cdfLo)/this.mass}}cdf(r){if(r<=this.xLo)return 0;if(r>=this.xHi)return 1;if(this.logX&&r<=0)return 0;const n=this.logX?Math.log(r):r;return(Kr(this.latent,n)-this.cdfLo)/this.mass}mean(){const r=ue[this.spec.family];if(r===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);const t=r.partialFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isFinite(t)?t:null}logMean(){const r=ue[this.spec.family];if(r===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);if(this.logX){const n=r.partialLatentFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isNaN(n)?null:n}if(this.spec.family==="beta"&&this.xLo<=0&&this.xHi>=1){const[n,t]=this.spec.params;return _2(n)-_2(n+t)}return this.cdf(0)>0?null:iq(n=>this.inverseCdf(n))}pdf(r){return r<this.xLo||r>this.xHi?0:this.logX?r<=0?0:this.latent.pdf(Math.log(r))/r/this.mass:this.latent.pdf(r)/this.mass}}function dq(e,r,n){const t=ue[e.family];if(t===void 0)throw new Error(`unknown distribution family ${JSON.stringify(e.family)}`);const{latent:i,logX:a}=t.build(e.params);let o=r===null?-1/0:r,s=n===null?1/0:n;e.truncWindow!==null&&(o=Math.max(o,e.truncWindow[0]),s=Math.min(s,e.truncWindow[1]));let u,l;a?(u=o>0?Math.log(o):-1/0,l=s>0?Math.log(s):-1/0):(u=o,l=s);const f=Kr(i,u),d=Kr(i,l)-f;if(d<g7){let m=`the variable's range [${r}, ${n}]`;throw e.truncWindow!==null&&(m+=` ∩ the spec's truncation window [${e.truncWindow[0]}, ${e.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(e.text)}: essentially no probability mass in ${m} (mass ${d.toExponential(2)} < ${g7})`)}return new bl(e,i,a,f,d,o,s,u,l,t.sampleTableMinimumPlannedDraws)}const hq=8192,N7=new Or(hq);function G8(e,r,n){const t=JSON.stringify([e.text,r,n]);let i=N7.get(t);return i===void 0&&(i=dq(e,r,n),N7.set(t,i)),i}const E7=200,qe=1e-10,H1=.001,I7=1e-9,A7=10;function pq(e){return e instanceof Error?e.message:String(e)}function mq(e,r){return`mixture spec component ${r} of ${e.components.length} (${e.components[r-1][1].text})`}function _q(){const e=Math.round(1/H1)-1,r=Math.round(Math.log10(H1/I7)*A7),n=[];for(let o=0;o<r;o++)n.push(I7*10**(o/A7));const t=[];for(let o=1;o<=e;o++)t.push(o*H1);const i=n.map(o=>1-o).reverse(),a=Float64Array.from([...n,...t,...i]);for(let o=1;o<a.length;o++)if(!(a[o]>a[o-1]))throw new Error("mixture-spec inverse-CDF table u nodes are not strictly increasing");return a}const U1=_q();class W8{constructor(r,n,t){j(this,"weights");j(this,"supportLo");j(this,"supportHi");j(this,"tableXNodes",null);if(this.spec=r,this.components=t,n.length!==t.length)throw new Error(`${n.length} weights for ${t.length} components`);let i=0;for(const a of n)i+=a;this.weights=n.map(a=>a/i),this.supportLo=Math.min(...t.map(a=>a.inverseCdf(0))),this.supportHi=Math.max(...t.map(a=>a.inverseCdf(1)))}cdf(r){let n=0;return this.components.forEach((t,i)=>{n+=this.weights[i]*t.cdf(r)}),n}pdf(r){let n=0;return this.components.forEach((t,i)=>{n+=this.weights[i]*t.pdf(r)}),n}mean(){let r=0;for(const[n,t]of this.components.entries()){const i=t.mean();if(i===null)return null;r+=this.weights[n]*i}return r}logMean(){let r=0;for(const[n,t]of this.components.entries()){const i=t.logMean();if(i===null)return null;r+=this.weights[n]*i}return Number.isNaN(r)?null:r}inverseCdf(r){if(!(r>=0&&r<=1))throw new Error(`mixture spec ${JSON.stringify(this.spec.text)}: quantile level ${r} not in [0, 1]`);if(r===0)return this.supportLo;if(r===1)return this.supportHi;const n=this.components.map(o=>o.inverseCdf(r));let[t,i]=this.checkedBracket(r,Math.min(...n),Math.max(...n));for(let o=0;o<E7;o++){const s=t+(i-t)/2;if(!(s>t&&s<i))break;this.cdf(s)>=r?i=s:t=s}const a=t+(i-t)/2;if(a>t&&a<i&&!(t<=0&&i>=0))throw new Error(`mixture spec ${JSON.stringify(this.spec.text)}: quantile bisection did not reach float resolution in ${E7} steps at level ${r}`);return i}checkedBracket(r,n,t){const i=this.cdf(n)>r+qe,a=this.cdf(t)<r-qe,o=s=>new Error(`mixture spec ${JSON.stringify(this.spec.text)}: the components' inverse CDFs put the quantile bracket on the wrong side of level ${r}, and the support is unbounded on the ${s} side, where the bracket would be repaired`);if(i){if(!Number.isFinite(this.supportLo))throw o("lower");[n,t]=[this.supportLo,n]}if(a){if(!Number.isFinite(this.supportHi))throw o("upper");[n,t]=[t,this.supportHi]}if(this.cdf(n)>r+qe||this.cdf(t)<r-qe)throw new Error(`mixture spec ${JSON.stringify(this.spec.text)}: no quantile bracket contains level ${r}, even from the support ends`);return[n,t]}sampleInverseCdf(r){const n=U1,t=n.length-1;if(!(r>=n[0]&&r<=n[t]))return this.inverseCdf(r);const i=this.inverseCdfTableXNodes();if(r===n[t])return i[t];let a=0,o=t;for(;a<o-1;){const u=a+o>>1;n[u]<=r?a=u:o=u}return(i[a+1]-i[a])/(n[a+1]-n[a])*(r-n[a])+i[a]}inverseCdfTableXNodes(){if(this.tableXNodes===null){const r=new Float64Array(U1.length);let n=-1/0;U1.forEach((t,i)=>{n=Math.max(n,this.inverseCdf(t)),r[i]=n}),this.tableXNodes=r}return this.tableXNodes}}function gq(e,r,n){const t=e.components.map(([,i],a)=>{try{return G8(i,r,n)}catch(o){throw new Error(`${mq(e,a+1)}: ${pq(o)}`)}});return new W8(e,e.components.map(([i])=>i),t)}const $q=2048,S7=new Or($q);function qq(e,r,n){const t=JSON.stringify([e.text,r,n]);let i=S7.get(t);return i===void 0&&(i=gq(e,r,n),S7.set(t,i)),i}const P7=20,wq=1e-9;function Ie(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function al(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function bq(e,r,n){const t=`lloads.latents[${r}]`;if(!al(e))return`${t}: expected an object, got ${Ie(e)}`;for(const a of["name","description"]){const o=e[a];if(typeof o!="string"||o.trim()==="")return`${t}.${a}: expected a non-empty string, got ${JSON.stringify(o)}`}const i=e.loadings;if(!al(i))return`${t}.loadings: expected an object, got ${Ie(i)}`;if(Object.keys(i).length===0)return`${t}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[a,o]of Object.entries(i)){if(!n.has(a))return`${t}.loadings: '${a}' is not one of the subjective variables this jprob samples (${[...n].sort().join(", ")}), so a loading on it would have no effect`;if(typeof o!="number")return`${t}.loadings['${a}']: expected a number, got ${JSON.stringify(o)}`;if(!Number.isFinite(o))return`${t}.loadings['${a}']: ${o} is not finite`;if(o<-1||o>1)return`${t}.loadings['${a}']: ${o} not in [-1, 1]`}return null}function Rq(e,r,n=[]){if(e==null)return null;if(!al(e))return`lloads: expected an object, got ${Ie(e)}`;const t=Object.keys(e).filter(l=>l!=="latents").sort();if(t.length>0)return`lloads: unexpected key(s) ${JSON.stringify(t)}`;const i=e.latents;if(!Array.isArray(i))return`lloads.latents: expected a list, got ${Ie(i)}`;if(i.length>P7)return`lloads.latents: ${i.length} latents exceeds the cap of ${P7}`;const a=new Set(r);for(const[l,f]of i.entries()){const v=bq(f,l,a);if(v!==null)return v}const o=new Map;for(const l of i)for(const[f,v]of Object.entries(l.loadings))o.set(f,(o.get(f)??0)+v**2);for(const[l,f]of[...o.entries()].sort((v,d)=>v[0]<d[0]?-1:1))if(f>1+wq)return`lloads: loading budget exceeded for '${l}' — the sum of squared loadings across latents is ${T7(f)}, over the limit of 1 by ${T7(f-1)}; no residual variance is left for it`;const s=new Set(n),u=[...o.entries()].filter(([l,f])=>f>0&&s.has(l)).map(([l])=>l).sort();return u.length>0?`lloads: ${u.map(l=>`'${l}'`).join(", ")} ${u.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function T7(e){return String(Number(e.toPrecision(6)))}function yq(e,r,n=1){if(!(n>=0&&n<=1))throw new Error(`lloads dependence strength ${n} not in [0, 1]`);const t=Rq(e,r);if(t!==null)throw new Error(t);const i=(e==null?void 0:e.latents)??[],a=Math.sqrt(n),o=new Map(r.map((l,f)=>[l,f])),s=r.map(()=>i.map(()=>0));for(const[l,f]of i.entries())for(const[v,d]of Object.entries(f.loadings))s[o.get(v)][l]=d*a;const u=s.map(l=>Math.sqrt(Math.max(0,1-l.reduce((f,v)=>f+v*v,0))));return{loadingMatrix:s,residualSds:u}}function G1(e){const r=.254829592,n=-.284496736,t=1.421413741,i=-1.453152027,a=1.061405429,o=.3275911,s=e<0?-1:1,u=Math.abs(e)/Math.SQRT2,l=1/(1+o*u),f=1-((((a*l+i)*l+t)*l+n)*l+r)*l*Math.exp(-u*u);return .5*(1+s*f)}function we(e){const r=e(),n=e(),t=Math.sqrt(-2*Math.log(r)),i=2*Math.PI*n;return[t*Math.cos(i),t*Math.sin(i)]}const X8=1e-15;function Mq(e){return e.kind!=="pairs"}function Lq(e,r){const n=e.length;if(n<2)throw new Error(`buildFromXsHs: need at least 2 breakpoints, got ${n}`);let t=0;for(let o=0;o<n-1;o++)t+=(e[o+1]-e[o])*(r[o]+r[o+1])/2;if(t<=0)throw new Error("buildPieceLinear: distribution has zero or negative area");const i=new Float64Array(n);for(let o=0;o<n;o++)i[o]=r[o]/t;const a=new Float64Array(n);a[0]=0;for(let o=0;o<n-1;o++)a[o+1]=a[o]+(e[o+1]-e[o])*(i[o]+i[o+1])/2;return a[n-1]=1,{xs:new Float64Array(e),fs:i,Fs:a}}function K8(e){const{pairs:r}=e,n=r[0][0];if(r[r.length-1][0]-n<X8)return{xs:new Float64Array([n,n]),fs:new Float64Array([1,1]),Fs:new Float64Array([0,1])};const i=r.map(o=>o[0]),a=r.map(o=>o[1]);return Lq(i,a)}function Nq(e,r){if(!Mq(e))return K8(e);if(r===void 0)throw new Error(`sample spec ${JSON.stringify(e.spec.text)} needs the svar's declared range for implicit truncation, but no paramRange was provided (thread paramRanges through the caller)`);switch(e.kind){case"family":return G8(e.spec,r.lo,r.hi);case"mixtureSpec":return qq(e.spec,r.lo,r.hi)}}function ie(e,r){return r instanceof bl||r instanceof W8?r.sampleInverseCdf(e):Iq(e,r)}const Eq=1e-12;function Iq(e,r){const{xs:n,fs:t,Fs:i}=r,a=n.length-1;if(a<=0||e<=0)return n[0];if(e>=1)return n[a];let o=0,s=a;for(;o<s-1;){const m=o+s>>1;i[m]<=e?o=m:s=m}const u=o,l=n[u+1]-n[u];if(l<X8)return n[u];const f=e-i[u],v=(t[u+1]-t[u])/l;let d;if(Math.abs(v)<Eq)d=f/t[u];else{const m=t[u]*t[u]+2*v*f;d=(-t[u]+Math.sqrt(Math.max(0,m)))/v}return n[u]+d}class Aq{constructor(r,n,t,i){j(this,"allDistribs");j(this,"perTrialWeights");j(this,"nParams");j(this,"perTrialLoadings");j(this,"perTrialLatentCount");j(this,"anyTrialHasLatentColumns");j(this,"cumulativeWeights");j(this,"totalWeight");const a=r.length;if(a===0)throw new Error("sampleCopulaMatrix: need at least one trial");const o=i.length;if(r.some(l=>l.length!==o))throw new Error(`sampleCopulaMatrix: trials disagree with params on parameter count (${o} params)`);if(n.length!==a)throw new Error(`sampleCopulaMatrix: ${n.length} per-trial lloads specs for ${a} trials`);if(this.perTrialLoadings=n.map(l=>yq(l,i)),t.length!==a)throw new Error(`sampleCopulaMatrix: ${t.length} per-trial weights for ${a} trials`);const s=new Float64Array(a);let u=0;for(const[l,f]of t.entries()){if(!(f>0))throw new Error("sampleCopulaMatrix: every per-trial weight must be positive");u+=f,s[l]=u}this.allDistribs=r.map(l=>[...l]),this.perTrialWeights=[...t],this.nParams=o,this.perTrialLatentCount=this.perTrialLoadings.map(({loadingMatrix:l})=>{var f;return((f=l[0])==null?void 0:f.length)??0}),this.anyTrialHasLatentColumns=this.perTrialLatentCount.some(l=>l>0),this.cumulativeWeights=s,this.totalWeight=u}drawBlock(r,n){this.beginBlock(r);const{allDistribs:t,nParams:i,perTrialLoadings:a,perTrialLatentCount:o}=this,s=Array.from({length:i},()=>new Float64Array(r));for(let u=0;u<r;u++){const l=this.pickTrial(n),f=t[l],{loadingMatrix:v,residualSds:d}=a[l],m=o[l];if(m===0)for(let h=0;h<i;h++)s[h][u]=ie(n(),f[h]);else{const h=[];for(let p=0;p<m;p++)h.push(we(n)[0]);for(let p=0;p<i;p++){const c=we(n)[0],g=v[p];let w=d[p]*c;for(let b=0;b<m;b++)w+=g[b]*h[b];s[p][u]=ie(G1(w),f[p])}}}return s}drawBlockPair(r,n){this.beginBlock(r);const{allDistribs:t,nParams:i,perTrialLoadings:a,perTrialLatentCount:o}=this,s=Array.from({length:i},()=>new Float64Array(r)),u=this.anyTrialHasLatentColumns?Array.from({length:i},()=>new Float64Array(r)):s;for(let l=0;l<r;l++){const f=this.pickTrial(n),v=t[f],{loadingMatrix:d,residualSds:m}=a[f],h=o[f];if(h===0)for(let p=0;p<i;p++){const c=ie(n(),v[p]);s[p][l]=c,u[p][l]=c}else{const p=[];for(let c=0;c<h;c++)p.push(we(n)[0]);for(let c=0;c<i;c++){const g=we(n)[0];s[c][l]=ie(G1(g),v[c]);const w=d[c];let b=m[c]*g;for(let q=0;q<h;q++)b+=w[q]*p[q];u[c][l]=ie(G1(b),v[c])}}}return{independent:s,joint:u}}beginBlock(r){if(!(Number.isInteger(r)&&r>=0))throw new Error(`sampleCopulaMatrix: a block's row count must be a non-negative integer, got ${r}`);Sq(this.allDistribs,this.perTrialWeights,this.totalWeight,r)}pickTrial(r){const{cumulativeWeights:n}=this,t=n.length,i=r()*this.totalWeight;for(let a=0;a<t;a++)if(i<n[a])return a;return t-1}}function Sq(e,r,n,t){e.forEach((i,a)=>{const o=t*r[a]/n;for(const s of i)Pq(s,o)})}function Pq(e,r){e instanceof bl&&e.planSampleDraws(r)}function be(e,r){if(e.length===0)throw new Error("combineSampleColumns: need at least one sampled column");const n=e[0].length,t=new Float64Array(n),i=new Array(e.length);for(let a=0;a<n;a++){for(let o=0;o<e.length;o++)i[o]=e[o][a];t[a]=r(i)}return t}const k7=2**30-2,V8=2654435769,Tq=67108864,kq=1/9007199254740992,Fq=0;function ae(e){return e^=e>>>16,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,e>>>0}function hr(e,r){return e<<r|e>>>32-r}function Oq(e,r){const o=e.length,s=Math.floor(o/16);let u=r>>>0,l=u,f=u,v=u;const d=c=>e[c]|e[c+1]<<8|e[c+2]<<16|e[c+3]<<24;for(let c=0;c<s;c++){const g=c*16;let w=d(g),b=d(g+4),q=d(g+8),M=d(g+12);w=Math.imul(w,597399067),w=hr(w,15),w=Math.imul(w,2869860233),u^=w,u=hr(u,19),u=u+l|0,u=Math.imul(u,5)+1444728091|0,b=Math.imul(b,2869860233),b=hr(b,16),b=Math.imul(b,951274213),l^=b,l=hr(l,17),l=l+f|0,l=Math.imul(l,5)+197830471|0,q=Math.imul(q,951274213),q=hr(q,17),q=Math.imul(q,2716044179),f^=q,f=hr(f,15),f=f+v|0,f=Math.imul(f,5)+2530024501|0,M=Math.imul(M,2716044179),M=hr(M,18),M=Math.imul(M,597399067),v^=M,v=hr(v,13),v=v+u|0,v=Math.imul(v,5)+850148119|0}const m=s*16,h=o&15,p=(c,g)=>h>c?e[m+c]<<g:0;if(h>12){let c=p(14,16)^p(13,8)^p(12,0);c=Math.imul(c,2716044179),c=hr(c,18),c=Math.imul(c,597399067),v^=c}if(h>8){let c=p(11,24)^p(10,16)^p(9,8)^p(8,0);c=Math.imul(c,951274213),c=hr(c,17),c=Math.imul(c,2716044179),f^=c}if(h>4){let c=p(7,24)^p(6,16)^p(5,8)^p(4,0);c=Math.imul(c,2869860233),c=hr(c,16),c=Math.imul(c,951274213),l^=c}if(h>0){let c=p(3,24)^p(2,16)^p(1,8)^p(0,0);c=Math.imul(c,597399067),c=hr(c,15),c=Math.imul(c,2869860233),u^=c}return u^=o,l^=o,f^=o,v^=o,u=u+l|0,u=u+f|0,u=u+v|0,l=l+u|0,f=f+u|0,v=v+u|0,u=ae(u),l=ae(l),f=ae(f),v=ae(v),u=u+l|0,u=u+f|0,u=u+v|0,l=l+u|0,f=f+u|0,v=v+u|0,[u>>>0,l>>>0,f>>>0,v>>>0]}const Dq=new TextEncoder;function Cq(e){return Oq(Dq.encode(e),Fq)}function Bq(e,r){return ae(e+Math.imul(r,V8)>>>0)}function Hq(e,r){if(!Number.isInteger(r)||r<0||r>k7)throw new Error(`a seeded stream index must be an integer in [0, ${k7}], got ${r}`);const n=new Uint32Array(4);for(let t=0;t<4;t++)n[t]=Bq(e[t],4*r+t+1);return n[0]===0&&n[1]===0&&n[2]===0&&n[3]===0&&(n[0]=V8),n}function Uq(e){if(e.length!==4)throw new Error(`a xoshiro128** state has 4 words, got ${e.length}`);let r=e[0]|0,n=e[1]|0,t=e[2]|0,i=e[3]|0;if((r|n|t|i)===0)throw new Error("a xoshiro128** state must not be all zero");return()=>{let a=Math.imul(hr(Math.imul(n,5),7),9),o=n<<9;t^=r,i^=n,n^=t,r^=i,t^=o,i=i<<11|i>>>21;const s=a>>>5;return a=Math.imul(hr(Math.imul(n,5),7),9),o=n<<9,t^=r,i^=n,n^=t,r^=i,t^=o,i=i<<11|i>>>21,(s*Tq+(a>>>6))*kq}}function Gq(e,r){return Uq(Hq(e,r))}const Wq=[256,512,1024,2048],Xq=4096,Kq=256,Vq={"whole-plot":{rampChunkRows:Wq,steadyChunkRows:Xq},"sweep-share":{rampChunkRows:[],steadyChunkRows:Kq}},jq={"whole-plot":26e3,"sweep-share":1024};function Yq(e,r){if(!(Number.isInteger(e)&&e>=0))throw new Error(`a pool's ${r} is a non-negative integer, got ${e}`)}function Qq(e,r){Yq(r,"chunk index");const{rampChunkRows:n,steadyChunkRows:t}=Vq[e];return r<n.length?n[r]:t}function Jq(e){return jq[e]}const Re=65536,Zq=64,W1=8192;class $r{constructor(r){this.representation=r}static fold(r,n){if(n.length===0){if(r===void 0)throw new Error("McDrawDistribution.fold: a distribution needs at least one draw");return r}const t=zq(n);if(r===void 0)return t.length<=Re?new $r({kind:"exact",sortedDraws:t}):$r.binnedFromSortedDraws(t);const i=r.representation;if(i.kind==="binned")return new $r(nw(i,t));const a=xq(i.sortedDraws,t);return a.length<=Re?new $r({kind:"exact",sortedDraws:a}):$r.binnedFromSortedDraws(a)}static binnedFromSortedDraws(r){const n=r.length;if(n===0)throw new Error("McDrawDistribution.binnedFromSortedDraws: a distribution needs at least one draw");for(let o=0;o<n;o++){if(!Number.isFinite(r[o]))throw new Error(`McDrawDistribution: draw ${r[o]} at index ${o} is not finite`);if(o>0&&r[o]<r[o-1])throw new Error(`McDrawDistribution.binnedFromSortedDraws: draws are not sorted at index ${o}`)}const t=ew(r,rw(n)),i=new Float64Array(t.length),a=new Float64Array(Math.max(t.length-1,0));return Y8(r,0,n,t,0,i,a),new $r(ol(t,i,a))}static fromData(r){switch(r.kind){case"exact":{const n=ye(r.sortedDraws,"sortedDraws");if(n.length===0)throw new Error("McDrawDistribution.fromData: an exact distribution needs at least one draw");if(n.length>Re)throw new Error(`McDrawDistribution.fromData: ${n.length} exact draws is more than the exact capacity (${Re}); past it a distribution is binned`);for(let t=0;t<n.length;t++){if(!Number.isFinite(n[t]))throw new Error(`McDrawDistribution.fromData: draw ${n[t]} at index ${t} is not finite`);if(t>0&&j8(n[t],n[t-1]))throw new Error(`McDrawDistribution.fromData: draws are not sorted at index ${t}`)}return new $r({kind:"exact",sortedDraws:n})}case"binned":{const n=ye(r.edges,"edges"),t=ye(r.edgeDrawCounts,"edgeDrawCounts"),i=ye(r.intervalDrawCounts,"intervalDrawCounts");if(n.length===0)throw new Error("McDrawDistribution.fromData: a binned distribution needs at least one edge");if(t.length!==n.length)throw new Error(`McDrawDistribution.fromData: ${t.length} edge draw counts for ${n.length} edges`);if(i.length!==n.length-1)throw new Error(`McDrawDistribution.fromData: ${i.length} interval draw counts for ${n.length} edges (one per interval between them)`);for(let a=0;a<n.length;a++){if(!Number.isFinite(n[a]))throw new Error(`McDrawDistribution.fromData: edge ${n[a]} at index ${a} is not finite`);if(a>0&&!(n[a]>n[a-1]))throw new Error(`McDrawDistribution.fromData: edges are not strictly ascending at index ${a}`);const o=t[a];if(!(Number.isInteger(o)&&o>=1))throw new Error(`McDrawDistribution.fromData: edge draw count ${o} at index ${a} is not an integer of at least 1 (every edge is a draw)`);if(a<i.length){const s=i[a];if(!(Number.isInteger(s)&&s>=0))throw new Error(`McDrawDistribution.fromData: interval draw count ${s} at index ${a} is not a non-negative integer`)}}return new $r(ol(n,t,i))}default:{const n=r.kind;throw new Error(`McDrawDistribution.fromData: unknown representation kind ${JSON.stringify(n)}`)}}}toData(){const r=this.representation;return r.kind==="exact"?{kind:"exact",sortedDraws:r.sortedDraws}:{kind:"binned",edges:r.edges,edgeDrawCounts:r.edgeDrawCounts,intervalDrawCounts:r.intervalDrawCounts}}get drawCount(){const r=this.representation;return r.kind==="exact"?r.sortedDraws.length:r.drawCount}get retainedFloatCount(){const r=this.representation;return r.kind==="exact"?r.sortedDraws.length:r.edges.length+r.edgeDrawCounts.length+r.intervalDrawCounts.length+r.drawCountBelowEdge.length}get isExact(){return this.representation.kind==="exact"}support(){const r=this.representation,n=r.kind==="exact"?r.sortedDraws:r.edges;return[n[0],n[n.length-1]]}countOfDrawsBelow(r){return this.countOfDraws(r,!1)}countOfDrawsAtOrBelow(r){return this.countOfDraws(r,!0)}quantileAtLevel(r){if(!(r>0&&r<1))throw new Error(`McDrawDistribution.quantileAtLevel: level ${r} is not in (0, 1)`);return this.valueAtCumulativeDrawCount(this.drawCount*r)}valueAtCumulativeDrawCount(r){const n=this.representation,t=this.drawCount;if(!(r>=0&&r<=t))throw new Error(`McDrawDistribution.valueAtCumulativeDrawCount: ${r} is not in [0, ${t}]`);return n.kind==="exact"?n.sortedDraws[Math.min(Math.floor(r),t-1)]:tw(n,r)}exactSortedDraws(){const r=this.representation;if(r.kind!=="exact")throw new Error("McDrawDistribution.exactSortedDraws: the distribution is binned, so it holds no draws");return r.sortedDraws}binnedGrid(){const r=this.representation;if(r.kind!=="binned")throw new Error("McDrawDistribution.binnedGrid: the distribution is exact, so it has no grid");return{edges:r.edges,edgeDrawCounts:r.edgeDrawCounts,intervalDrawCounts:r.intervalDrawCounts}}countOfDraws(r,n){if(Number.isNaN(r))throw new Error("McDrawDistribution: cannot count draws below NaN");const t=this.representation;if(t.kind==="exact")return Ae(t.sortedDraws,r,n);const{edges:i}=t,a=i.length-1;if(r<i[0])return 0;if(r>i[a])return t.drawCount;const o=Ae(i,r,!0)-1,s=t.drawCountBelowEdge[o];if(i[o]===r)return n?s+t.edgeDrawCounts[o]:s;const u=i[o],l=i[o+1];return s+t.edgeDrawCounts[o]+(r-u)/(l-u)*t.intervalDrawCounts[o]}}function ye(e,r){if(!sl(e))throw new Error(`McDrawDistribution.fromData: ${r} is not a Float64Array`);return e}function zq(e){for(let n=0;n<e.length;n++)if(!Number.isFinite(e[n]))throw new Error(`McDrawDistribution.fold: draw ${e[n]} at block index ${n} is not finite`);const r=new Float64Array(e);return r.sort(),r}function j8(e,r){return e<r||e===0&&r===0&&Object.is(e,-0)&&Object.is(r,0)}function xq(e,r){const n=e.length,t=new Float64Array(n+r.length);let i=0,a=0;for(let o=0;o<r.length;o++){const s=r[o];for(;i<n&&!j8(s,e[i]);)t[a++]=e[i++];t[a++]=s}for(;i<n;)t[a++]=e[i++];return t}function Ae(e,r,n){let t=0,i=e.length;for(;t<i;){const a=t+i>>>1,o=e[a];o<r||n&&o===r?t=a+1:i=a}return t}function rw(e){const r=Math.min(Zq,e),n=new Int32Array(2*r+W1+1);let t=0;for(let a=0;a<r;a++)n[t++]=a,n[t++]=e-1-a;for(let a=0;a<=W1;a++)n[t++]=Math.round(a*(e-1)/W1);n.sort();let i=0;for(let a=0;a<n.length;a++)(i===0||n[a]!==n[i-1])&&(n[i++]=n[a]);return n.slice(0,i)}function ew(e,r){const n=new Float64Array(r.length);let t=0;for(let i=0;i<r.length;i++){const a=e[r[i]];(t===0||a!==n[t-1])&&(n[t++]=a)}return n.slice(0,t)}function Y8(e,r,n,t,i,a,o){const s=t.length-1;let u=i;for(let l=r;l<n;l++){const f=e[l];for(;u<s&&t[u+1]<=f;)u++;f===t[u]?a[u]+=1:o[u]+=1}}function ol(e,r,n){const t=new Float64Array(e.length);let i=0;for(let a=0;a<e.length;a++)t[a]=i,i+=r[a]+(a<n.length?n[a]:0);return{kind:"binned",edges:e,edgeDrawCounts:r,intervalDrawCounts:n,drawCountBelowEdge:t,drawCount:i}}function F7(e,r,n){const t=[],i=[];for(let a=r;a<n;a++){const o=e[a];t.length>0&&o===t[t.length-1]?i[i.length-1]+=1:(t.push(o),i.push(1))}return{values:t,counts:i}}function nw(e,r){const n=e.edges,t=n[0],i=n[n.length-1],a=Ae(r,t,!1),o=Ae(r,i,!0),s=F7(r,0,a),u=F7(r,o,r.length),l=s.values.length,f=l+n.length+u.values.length;let v=n;f!==n.length&&(v=new Float64Array(f),v.set(s.values,0),v.set(n,l),v.set(u.values,l+n.length));const d=new Float64Array(f);d.set(s.counts,0),d.set(e.edgeDrawCounts,l),d.set(u.counts,l+n.length);const m=new Float64Array(f-1);return m.set(e.intervalDrawCounts,l),Y8(r,a,o,v,l,d,m),ol(v,d,m)}function tw(e,r){const{edges:n,edgeDrawCounts:t,intervalDrawCounts:i,drawCountBelowEdge:a}=e;let o=0,s=n.length;for(;o<s;){const m=o+s>>>1;a[m]+t[m]>r?s=m:o=m+1}if(o===n.length)return n[n.length-1];if(a[o]<=r)return n[o];const u=o-1,l=a[u]+t[u],f=i[u],v=n[u],d=n[o];return v+(r-l)/f*(d-v)}const O7=.5,D7=.05,C7=.95;function Q8(e){return{location:e.location,median:e.median,p5:e.p5,p95:e.p95,count:e.count,totalDrawCount:e.totalDrawCount,leftOutDrawCounts:e.leftOutDrawCounts}}function iw(e){var r;return{...Q8(e),distribution:((r=e.distribution)==null?void 0:r.toData())??null}}const X1={negativeInfiniteDraws:0,positiveInfiniteDraws:0,nanDraws:0};class Wr{constructor(r,n,t,i){this.runningStatistic=r,this.keptDistribution=n,this.allZerosPointMass=t,this.nonFiniteDrawCounts=i}static empty(r){return new Wr(Z7(r),void 0,void 0,X1)}get statistic(){return this.runningStatistic.statistic}get totalDrawCount(){const{negativeInfiniteDraws:r,positiveInfiniteDraws:n,nanDraws:t}=this.nonFiniteDrawCounts;return Xr(this.runningStatistic)+r+n+t}get retainedFloatCount(){var r,n;return(((r=this.keptDistribution)==null?void 0:r.retainedFloatCount)??0)+(((n=this.allZerosPointMass)==null?void 0:n.retainedFloatCount)??0)}fold(r){return this.statistic===Dr?this.foldGeometricMeanBlock(r):this.foldMeanBlock(r)}foldGeometricMeanBlock(r){const n=x1(this.runningStatistic,r);if(z7(n))return new Wr(n,void 0,$r.fold(this.allZerosPointMass,r),X1);const t=B7(r,a=>a===0||a===1/0),i=t.length===0?this.keptDistribution:$r.fold(this.keptDistribution,t);return new Wr(n,i,void 0,X1)}foldMeanBlock(r){let{negativeInfiniteDraws:n,positiveInfiniteDraws:t,nanDraws:i}=this.nonFiniteDrawCounts;for(let u=0;u<r.length;u++){const l=r[u];l===-1/0?n++:l===1/0?t++:Number.isNaN(l)&&i++}const a=B7(r,u=>!Number.isFinite(u)),o=x1(this.runningStatistic,a),s=a.length===0?this.keptDistribution:$r.fold(this.keptDistribution,a);return new Wr(o,s,void 0,{negativeInfiniteDraws:n,positiveInfiniteDraws:t,nanDraws:i})}summary(){const r=this.totalDrawCount;if(r===0)throw new Error("McFormDrawAccumulator.summary: no draws folded yet, so there is nothing to summarize");return this.statistic===Dr?this.geometricMeanSummary(r):this.meanSummary(r)}geometricMeanSummary(r){const n=x7(this.runningStatistic),t=this.allZerosPointMass!==void 0?{zeroDraws:0,positiveInfiniteDraws:0,negativeInfiniteDraws:0,nanDraws:0}:{zeroDraws:this.runningStatistic.zeroDraws,positiveInfiniteDraws:this.runningStatistic.infiniteDraws,negativeInfiniteDraws:0,nanDraws:0},i=this.allZerosPointMass??this.keptDistribution;if(i===void 0)throw new Error(`every one of the ${r.toLocaleString()} sampled values is exactly 0 or infinite (and not all are 0), so there is nothing to summarize`);return{location:n,median:i.quantileAtLevel(O7),p5:i.quantileAtLevel(D7),p95:i.quantileAtLevel(C7),count:i.drawCount,distribution:i,totalDrawCount:r,leftOutDrawCounts:t}}meanSummary(r){const{negativeInfiniteDraws:n,positiveInfiniteDraws:t,nanDraws:i}=this.nonFiniteDrawCounts,a=this.keptDistribution,o=(a==null?void 0:a.drawCount)??0,s=l=>{const f=Math.min(Math.floor(r*l),r-1);return f<n?-1/0:f<n+o?a.valueAtCumulativeDrawCount(Math.min(r*l-n,o)):f<n+o+t?1/0:NaN};let u;return i>0||n>0&&t>0?u=NaN:t>0?u=1/0:n>0?u=-1/0:u=this.runningStatistic.mean,{location:{statistic:se,value:u},median:s(O7),p5:s(D7),p95:s(C7),count:r,distribution:a,totalDrawCount:r,leftOutDrawCounts:{zeroDraws:0,positiveInfiniteDraws:t,negativeInfiniteDraws:n,nanDraws:i}}}}function B7(e,r){let n=0;for(let a=0;a<e.length;a++)r(e[a])&&n++;if(n===0)return e;const t=new Float64Array(e.length-n);let i=0;for(let a=0;a<e.length;a++)r(e[a])||(t[i++]=e[a]);return t}function Rl(e){return JSON.stringify(e,(r,n)=>{if(typeof n=="function"||typeof n=="symbol")throw new Error(`live MC key parts must be JSON-serializable data; got a ${typeof n}. Identify a combine function by a string tag / form id instead.`);return n})}const aw=4096,ow=12e6,sw="sample-pool",Ar="form-draws",yl="running-statistic",K1=[Ar,yl];function V1(){return{hits:0,incrementalFolds:0,startOvers:0,blockFolds:0}}function uw(e){return e.kind===Ar?e.accumulator.retainedFloatCount:0}function lw(e,r){return e===Ar?{kind:e,accumulator:Wr.empty(r)}:{kind:e,running:Z7(r)}}function fw(e,r){return e.kind===Ar?{kind:e.kind,accumulator:e.accumulator.fold(r)}:{kind:e.kind,running:x1(e.running,r)}}function H7(e){return e.kind===Ar?e.accumulator.statistic:e.running.statistic}function U7(e,r){return e.kind===Ar?`accumulator memo: an entry accumulating a ${e.accumulator.statistic} was asked for as a ${r}`:`accumulator memo: a running ${e.running.statistic} was asked for as a ${r}`}function G7(e,r){return e.kind===Ar?{kind:e.kind,accumulator:e.accumulator,blocksFoldedNow:r}:{kind:e.kind,running:e.running,blocksFoldedNow:r}}function J8(e){if(e.kind!==Ar)throw new Error(`accumulator memo: expected a form's draws, found a ${e.kind}`);return e}function Ml(e){if(e.kind!==yl)throw new Error(`accumulator memo: expected a running statistic, found a ${e.kind}`);return e}function W7(e,r,n){return Rl([sw,e,r,...n])}class vw{constructor(){j(this,"entries",new Map);j(this,"retainedFloatsTotal",0);j(this,"servedCountsByKind",new Map(K1.map(r=>[r,V1()])))}formDrawAccumulatorOverPoolBlocks(r,n,t,i){const[a]=this.foldEntriesOverPoolBlocks(r,[{kind:Ar,keySuffixParts:n,statistic:t,drawsOfBlock:i}],()=>{});if(a.kind==="error")throw a.error;return J8(a).accumulator}runningLocationStatisticOverPoolBlocks(r,n,t,i){const[a]=this.foldEntriesOverPoolBlocks(r,[{kind:yl,keySuffixParts:n,statistic:t,drawsOfBlock:i}],()=>{});if(a.kind==="error")throw a.error;return Ml(a).running}foldEntriesOverPoolBlocks(r,n,t){const{poolToken:i,blockCount:a}=r;if(!Number.isInteger(a)||a<1)throw new Error(`accumulator memo: a pool evaluated against has at least one block, got ${a}`);const o=new Map,s=n.map(f=>{const v=this.entryFoldState(i,a,f),d=o.get(v.key);return d!==void 0?{state:d,repeated:!0,statistic:f.statistic}:(o.set(v.key,v),{state:v,repeated:!1,statistic:f.statistic})}),u=[...o.values()],l=Math.min(a,...u.map(f=>f.error===null?f.blocksFolded:a));for(let f=l;f<a;f++)if(u.some(v=>v.error===null&&v.blocksFolded===f)){t(f);for(const v of u)if(!(v.error!==null||v.blocksFolded!==f))try{v.accumulated=fw(v.accumulated,v.fold.drawsOfBlock(f)),v.blocksFolded+=1,this.servedCountsByKind.get(v.fold.kind).blockFolds++}catch(d){v.error={foldError:d}}}return s.map(({state:f,repeated:v,statistic:d})=>{var p;if(f.error!==null)return{kind:"error",error:f.error.foldError};const m=this.servedCountsByKind.get(f.fold.kind);if(v)return H7(f.accumulated)!==d?{kind:"error",error:new Error(U7(f.accumulated,d))}:(m.hits++,G7(f.accumulated,0));const h=a-(((p=f.held)==null?void 0:p.blocksFolded)??0);return f.held!==void 0&&h===0?(m.hits++,this.refreshRecency(f.key,f.held)):(f.held===void 0?m.startOvers++:m.incrementalFolds++,this.store(f.key,{accumulated:f.accumulated,blocksFolded:a,retainedFloats:uw(f.accumulated)})),G7(f.accumulated,h)})}blocksFoldedOf(r,n,t){var i;return((i=this.entries.get(W7(r,n,t)))==null?void 0:i.blocksFolded)??0}clear(){this.entries.clear(),this.retainedFloatsTotal=0,this.servedCountsByKind=new Map(K1.map(r=>[r,V1()]))}stats(r){const n=r===void 0?K1:[r],t=V1();for(const a of n){const o=this.servedCountsByKind.get(a);t.hits+=o.hits,t.incrementalFolds+=o.incrementalFolds,t.startOvers+=o.startOvers,t.blockFolds+=o.blockFolds}let i=0;for(const a of this.entries.values())n.includes(a.accumulated.kind)&&i++;return{...t,entryCount:i,retainedFloats:this.retainedFloatsTotal}}entryFoldState(r,n,t){const i=W7(r,t.kind,t.keySuffixParts),a=this.entries.get(i),o={fold:t,key:i,held:a,accumulated:(a==null?void 0:a.accumulated)??lw(t.kind,t.statistic),blocksFolded:(a==null?void 0:a.blocksFolded)??0,error:null};return a===void 0||(a.blocksFolded>n?o.error={foldError:new Error(`accumulator memo: an entry of pool ${r} has folded ${a.blocksFolded} blocks, but it was asked at depth ${n}; a pool's asked depth only grows, so its entries can never be ahead of it`)}:H7(a.accumulated)!==t.statistic&&(o.error={foldError:new Error(U7(a.accumulated,t.statistic))})),o}refreshRecency(r,n){this.entries.delete(r),this.entries.set(r,n)}store(r,n){const t=this.entries.get(r);for(t!==void 0&&(this.retainedFloatsTotal-=t.retainedFloats,this.entries.delete(r)),this.entries.set(r,n),this.retainedFloatsTotal+=n.retainedFloats;(this.entries.size>aw||this.retainedFloatsTotal>ow)&&this.entries.size>1;){const i=this.entries.keys().next().value;this.retainedFloatsTotal-=this.entries.get(i).retainedFloats,this.entries.delete(i)}}}function Z8(e){return e.independent===null||e.independent===e.joint?[e.joint]:[e.joint,e.independent]}function Me(e,r,n){return r.map(t=>{const i=e.get(t);if(i===void 0)throw new Error(`${n}: no sampled column for ${t}`);return i})}function j1(e,r){if(e.independent===null)throw new Error(`${r}: the paired sampler returned no independent arm`);return e.independent}class Ll{constructor(r,n,t){this.sampler=r,this.columnNames=n,this.drawsPair=t}static prepare(r,n){const t=[...r.svarNames,...(n==null?void 0:n.names)??[]];if(new Set(t).size!==t.length)throw new Error(n===null?`a sampling description names a svar twice (${JSON.stringify(t)})`:`barrier key collides with a svar column name (${JSON.stringify(t)})`);if(n!==null&&n.perTrialValues.length!==r.perTrialSpecs.length)throw new Error(`${n.perTrialValues.length} trials of constant columns for ${r.perTrialSpecs.length} trials`);const i=r.perTrialSpecs.map((o,s)=>{if(o.length!==r.svarNames.length)throw new Error(`trial ${s} has ${o.length} specs for ${r.svarNames.length} svars`);const u=o.map((f,v)=>Nq(f,r.svarRanges[v]??void 0));if(n===null)return u;const l=n.perTrialValues[s];if(l.length!==n.names.length)throw new Error(`trial ${s} has ${l.length} constant values for ${n.names.length} constant columns`);return[...u,...l.map(f=>K8({pairs:[[f,1],[f,1]]}))]}),a=new Aq(i,r.perTrialLloads,r.trialWeights,t);return new Ll(a,t,r.arms==="pair")}drawBlock(r,n){const t=this.drawArms(r,n),i=cw(t);if(i!==r)throw new Error(`a block asked for at ${r} draws came back with ${i}`);return t}drawArms(r,n){const t=a=>new Map(this.columnNames.map((o,s)=>[o,a[s]]));if(!this.drawsPair)return{joint:t(this.sampler.drawBlock(r,n)),independent:null};const i=this.sampler.drawBlockPair(r,n);if(i.joint===i.independent){const a=t(i.joint);return{joint:a,independent:a}}return{joint:t(i.joint),independent:t(i.independent)}}}function cw(e){let r=null;for(const n of Z8(e))for(const[t,i]of n)if(r===null)r=i.length;else if(i.length!==r)throw new Error(`sampled block columns disagree on their draw count: ${t} has ${i.length}, an earlier column ${r}`);if(r===null)throw new Error("a sampled block with no columns has no draw count");return r}const dw=4096,hw=4e6;function X7(e){let r=0;for(const n of Z8(e))for(const t of n.values())r+=t.length;return r}function Y1(e,r){return`${e}#${r}`}class pw{constructor(){j(this,"blocks",new Map);j(this,"retainedFloats",0)}get(r,n){const t=Y1(r,n),i=this.blocks.get(t);return i!==void 0&&(this.blocks.delete(t),this.blocks.set(t,i)),i}has(r,n){return this.blocks.has(Y1(r,n))}store(r,n,t){const i=Y1(r,n);if(this.blocks.has(i))throw new Error(`sample block cache: block ${n} of pool ${r} is already cached`);for(this.blocks.set(i,t),this.retainedFloats+=X7(t);(this.blocks.size>dw||this.retainedFloats>hw)&&this.blocks.size>1;){const a=this.blocks.keys().next().value;this.retainedFloats-=X7(this.blocks.get(a)),this.blocks.delete(a)}}clear(){this.blocks.clear(),this.retainedFloats=0}stats(){return{entryCount:this.blocks.size,retainedFloats:this.retainedFloats}}}const z8=4096,mw=256,_w=4096,gw=1024,$w="mcsampler-outer-",Le={joint:[],independent:["independent"]},x8="form",K7="barrier";function V7(e){return`independent-arm:${e}`}function qw(e){return e instanceof Error?e.message:String(e)}function oe(e){return{kind:"error",message:qw(e)}}function ww(e,r){const n=Object.keys(r).sort().map(t=>[t,r[t]]);return Rl([e,n])}class bw{constructor(r){j(this,"blockCache",new pw);j(this,"accumulatorMemo",new vw);j(this,"poolRecords",new Or(z8));j(this,"preparedSamplers",new Or(mw));j(this,"resolvedTargets",new Or(_w));j(this,"outerPools",new Or(gw));j(this,"nextOuterPoolNumber",1);j(this,"blocksFirstDrawn",0);j(this,"blocksDrawnAgain",0);j(this,"chunksDrawnEver",0);j(this,"outerStagesDrawnEver",0);this.dependencies=r}foldPoolTargets(r){const n=r.targets.map(a=>{const o=this.resolvedTarget(a.target);if(o.sampleStage!==void 0)throw new Error(`form ${o.key} contains E[·] barriers, so it is evaluated as a barrier composite, never as a pool target`);return o}),t=this.chunkedPoolInRequest(r.pool);let i;try{const a=this.accumulatorMemo.foldEntriesOverPoolBlocks(J1(t),r.targets.map((o,s)=>this.poolTargetFold(t,o,n[s])),o=>this.drawBlocksNotYetDrawn(t,o+1));this.drawBlocksNotYetDrawn(t,t.blockCount),i=a.map((o,s)=>Rw(o,r.targets[s]))}catch(a){i=r.targets.map(()=>oe(a))}return{poolToken:r.pool.token,depth:r.pool.depth,outcomes:i}}evaluateBarrierComposite(r){const n=this.resolvedTarget(r.target),t=n.sampleStage;if(t===void 0)throw new Error(`form ${n.key} contains no E[·] barrier, so it is evaluated as a pool target, never as a barrier composite`);const i=n.barrierRegistry;if(i===void 0)throw new Error(`form ${n.key} contains an E[·] barrier but resolved with no barrier registry`);const a=r.outer.description.arms,{budgetRole:o}=r.outer;for(const q of r.innerPools){if(q.description.arms!==a)throw new Error(`an inner pool of form ${n.key} draws arms ${q.description.arms}, its outer stage ${a}`);if(q.budgetRole!==o)throw new Error(`an inner pool of form ${n.key} has budget role ${q.budgetRole}, its outer stage ${o}`)}if(r.innerPools.length!==r.outer.description.perTrialSpecs.length)throw new Error(`form ${n.key}: ${r.innerPools.length} inner pools for ${r.outer.description.perTrialSpecs.length} trials`);const s=t.params.filter(q=>q.barrier).map(q=>{const M=i[q.name];if(M===void 0)throw new Error(`form ${n.key}: barrier ${q.name} is not in the barrier registry`);return{barrierKey:q.name,entry:M}}),u=r.innerPools.map(q=>q.depth),l=(q,M)=>{const I=oe(q);return{innerDepths:u,outerDrawCount:M,joint:I,independent:a==="pair"?I:null}},f=r.innerPools.map(q=>this.chunkedPoolInRequest(q)),v=[],d=[];try{for(const q of f){const M=a==="pair"?["joint","independent"]:["joint"],I=this.barrierMeans(q,M.flatMap(N=>s.map(({barrierKey:A,entry:E})=>({arm:N,barrierKey:A,entry:E}))));v.push(I.slice(0,s.length)),a==="pair"&&d.push(I.slice(s.length))}}catch(q){return l(q,null)}const m=s.map(({barrierKey:q})=>q),h={names:[...m,...a==="pair"?m.map(V7):[]],perTrialValues:v.map((q,M)=>[...q,...a==="pair"?d[M]:[]])},p=this.outerPoolFor([...r.outer.poolKeyPartsBeforeInnerStage,u,v,d,...r.outer.poolKeyPartsAfterInnerStage]),c=Jq(o),g=this.poolInRequest(p.token,p.seedKeyHash,o,"outer-stage",1,()=>c,r.outer.description,h);try{this.drawBlocksNotYetDrawn(g,g.blockCount)}catch(q){return l(q,c)}const w=(q,M)=>Me(q,t.params.map(I=>I.barrier?M(I.name):I.name),`form ${n.key}'s sample stage`),b=q=>{try{const M=this.formDrawSummaryOverPool(g,q,n,t.point,I=>q==="joint"?w(I.joint,N=>N):w(j1(I,`form ${n.key}'s outer stage`),V7));return r9(M,r.includeDistribution)}catch(M){return oe(M)}};return{innerDepths:u,outerDrawCount:c,joint:b("joint"),independent:a==="pair"?b("independent"):null}}reset(){this.blockCache.clear(),this.accumulatorMemo.clear(),this.poolRecords.clear(),this.preparedSamplers.clear(),this.resolvedTargets.clear(),this.outerPools.clear(),this.blocksFirstDrawn=0,this.blocksDrawnAgain=0}poolTargetFoldedDepth(r,n){return this.accumulatorMemo.blocksFoldedOf(r,n.accumulation,Q1(n))}drawnDepthOf(r){var n;return((n=this.poolRecords.get(r))==null?void 0:n.drawnBlockCount)??0}sampleBlockCacheStats(){return{...this.blockCache.stats(),blocksFirstDrawn:this.blocksFirstDrawn,blocksDrawnAgain:this.blocksDrawnAgain}}drawCounts(){return{chunksDrawn:this.chunksDrawnEver,outerStagesDrawn:this.outerStagesDrawnEver}}accumulatorMemoStats(r){return this.accumulatorMemo.stats(r)}evictCachedBlocks(){this.blockCache.clear(),this.blocksFirstDrawn=0,this.blocksDrawnAgain=0}evictAccumulators(){this.accumulatorMemo.clear()}resolvedTarget(r){const n=ww(r.formId,r.cparamValues);let t=this.resolvedTargets.get(n);if(t===void 0&&(t=this.dependencies.resolveFormTarget(r.formId,r.cparamValues),this.resolvedTargets.set(n,t)),t.key!==r.targetKey)throw new Error(`the live-MC sampler resolved form ${r.formId} at ${JSON.stringify(r.cparamValues)} to target key ${JSON.stringify(t.key)}, but the main thread sent ${JSON.stringify(r.targetKey)}: the two realms' registries disagree`);return t}poolTargetFold(r,n,t){const i=`form ${t.key}`;if(n.accumulation==="running-statistic")return{kind:"running-statistic",keySuffixParts:Q1(n),statistic:t.locationStatistic,drawsOfBlock:o=>be(Me(this.blockArms(r,o).joint,t.params,i),t.point)};const{arm:a}=n;return{kind:"form-draws",keySuffixParts:Q1(n),statistic:t.locationStatistic,drawsOfBlock:o=>{const s=this.blockArms(r,o);return be(Me(a==="joint"?s.joint:j1(s,i),t.params,i),t.point)}}}formDrawSummaryOverPool(r,n,t,i,a){return this.accumulatorMemo.formDrawAccumulatorOverPoolBlocks(J1(r),[...Le[n],x8,t.key],t.locationStatistic,o=>be(a(this.blockArms(r,o)),i)).summary()}barrierMeans(r,n){const t=this.accumulatorMemo.foldEntriesOverPoolBlocks(J1(r),n.map(({arm:i,barrierKey:a,entry:o})=>({kind:"running-statistic",keySuffixParts:o.cparamBindingKey===void 0?[...Le[i],K7,a]:[...Le[i],K7,a,o.cparamBindingKey],statistic:se,drawsOfBlock:s=>{const u=this.blockArms(r,s),l=i==="joint"?u.joint:j1(u,`barrier ${a}'s inner stage`),f=be(Me(l,o.params,`barrier ${a}'s inner sample`),o.point);for(const v of f)if(!Number.isFinite(v))throw new Error(`barrier ${a}: non-finite operand draw (${v})`);return f}})),i=>this.drawBlocksNotYetDrawn(r,i+1));return this.drawBlocksNotYetDrawn(r,r.blockCount),t.map((i,a)=>{if(i.kind==="error")throw i.error;const{barrierKey:o}=n[a],{running:s,blocksFoldedNow:u}=Ml(i),l=s.mean;if(!Number.isFinite(l))throw new Error(`barrier ${o}: non-finite mean (${l})`);if(u>0){const f=r8(s)/Math.abs(l);console.debug(`[E-barrier] ${o}: n=${Xr(s)} mean=${l} relSE=${f}`)}return l})}chunkedPoolInRequest(r){const{token:n,seedKeyHash:t,budgetRole:i,depth:a,description:o}=r;if(!(Number.isInteger(a)&&a>=1))throw new Error(`pool ${n} was sent at depth ${a}; a request asks for at least one chunk`);return this.poolInRequest(n,t,i,"chunk",a,s=>Qq(i,s),o,null)}poolInRequest(r,n,t,i,a,o,s,u){let l=this.poolRecords.get(r);if(l===void 0)l={seedKeyHash:n,budgetRole:t,drawnBlockCount:0},this.poolRecords.set(r,l);else{if(l.seedKeyHash.some((f,v)=>f!==n[v]))throw new Error(`pool ${r} was sent with another seed than before: a pool token names one content key, never two`);if(l.budgetRole!==t)throw new Error(`pool ${r} was sent with budget role ${t}, but was drawn as ${l.budgetRole}: a pool token names one role, never two`)}return{token:r,seedKeyHash:n,drawKind:i,blockCount:a,rowsOfBlock:o,description:s,constantColumns:u,record:l}}drawBlocksNotYetDrawn(r,n){const{record:t}=r;for(let i=t.drawnBlockCount;i<n;i++)this.blockCache.has(r.token,i)||(this.blockCache.store(r.token,i,this.drawBlock(r,i)),this.blocksFirstDrawn++),t.drawnBlockCount=i+1}blockArms(r,n){const t=this.blockCache.get(r.token,n);if(t!==void 0)return t;if(n>=r.record.drawnBlockCount)throw new Error(`pool ${r.token}: block ${n} was asked for before the request drew the blocks it lacked`);const i=this.drawBlock(r,n);return this.blocksDrawnAgain++,this.blockCache.store(r.token,n,i),i}drawBlock(r,n){let t=this.preparedSamplers.get(r.token);t===void 0&&(t=Ll.prepare(r.description,r.constantColumns),this.preparedSamplers.set(r.token,t));const i=t.drawBlock(r.rowsOfBlock(n),Gq(r.seedKeyHash,n));return r.drawKind==="chunk"?this.chunksDrawnEver++:this.outerStagesDrawnEver++,i}outerPoolFor(r){const n=Rl(r),t=this.outerPools.get(n);if(t!==void 0)return t;const i={token:`${$w}${this.nextOuterPoolNumber++}`,seedKeyHash:Cq(n)};return this.outerPools.set(n,i),i}}function Q1(e){const r=e.accumulation==="running-statistic"?"joint":e.arm;return[...Le[r],x8,e.target.targetKey]}function J1(e){return{poolToken:e.token,blockCount:e.blockCount}}function Rw(e,r){if(e.kind==="error")return oe(e.error);try{if(r.accumulation==="running-statistic"){const{running:n}=Ml(e);return{kind:"running-statistic",location:x7(n),drawCount:Xr(n),standardError:r8(n)}}return r9(J8(e).accumulator.summary(),r.includeDistribution)}catch(n){return oe(n)}}function r9(e,r){return r?{kind:"form-draws",summary:iw(e)}:{kind:"form-draw-statistics",statistics:Q8(e)}}const yw=4096,Mw=5e5;function Z1(e){return e.perTrialSpecs.reduce((r,n)=>r+n.length,0)}class Lw{constructor(){j(this,"descriptions",new Map);j(this,"heldSpecs",0)}remember(r,n){this.forget(r),this.descriptions.set(r,n),this.heldSpecs+=Z1(n);for(const[t,i]of this.descriptions){if(this.descriptions.size<=yw&&this.heldSpecs<=Mw||t===r)break;this.descriptions.delete(t),this.heldSpecs-=Z1(i)}}lookUp(r){const n=this.descriptions.get(r);return n===void 0?null:(this.descriptions.delete(r),this.descriptions.set(r,n),n)}clear(){this.descriptions.clear(),this.heldSpecs=0}get size(){return this.descriptions.size}forget(r){const n=this.descriptions.get(r);n!==void 0&&(this.descriptions.delete(r),this.heldSpecs-=Z1(n))}}const j7={runs:[],describedPools:new Map,poolFolds:new Map,composites:new Map,namedPoolTokens:new Set,answerable:[]};function z1(e){return e instanceof Error?e.message:String(e)}function Y7(e){return e.kind==="pool-fold"?[e.request.pool.token]:e.request.innerPools.map(r=>r.token)}class Nw{constructor(r){j(this,"service");j(this,"loadedAid",null);j(this,"registries",null);j(this,"loadGeneration",0);j(this,"demand",j7);j(this,"unanswered",[]);j(this,"catchUpUpdateIntervalMs",0);j(this,"catchUpLastPostMs",new Map);j(this,"regenerations",[]);j(this,"runs",new R9);j(this,"depthsReached",new Or(z8));j(this,"runPoolSnapshots",new Map);j(this,"descriptions",new Lw);j(this,"turnScheduled",!1);this.dependencies=r,this.service=new bw({resolveFormTarget:(n,t)=>{const i=this.registries;if(i===null)throw new Error(`the live-MC sampler has no form registry loaded, so it cannot resolve form ${n}`);const a=i.formRegistry[n];if(a===void 0)throw new Error(`the live-MC sampler's form registry (${this.loadedAid}) has no form ${n}`);return d9(n,a,t,i.barrierRegistry??void 0)}})}receive(r){switch(r.kind){case"load-jprob":this.load(r.aid);return;case"demand":if(this.loadedAid===null){this.fail("a demand arrived before any jprob was loaded");return}try{this.takeDemand(r)}catch(n){this.fail(z1(n));return}this.scheduleTurnIfWork();return;default:{const n=r.kind;this.fail(`a message of unknown kind ${JSON.stringify(n)}`)}}}receiveUnreadable(){this.fail("the live-MC sampler received a message it could not deserialize")}introspection(){return this.service}forgetPoolDescriptions(){this.descriptions.clear()}takeDemand(r){const n=this.demand,t=this.demandInHand(r),i=this.runs.reconcile(r.runs,o=>this.runOffer(o,t));for(const o of i.stopped)this.closeRun(o,n);for(const{runId:o,unit:s}of i.unitsLeaving)this.postFinal(o,s,n);this.demand=t,this.unanswered=t.answerable.map(o=>({demanded:o,checkedAgainstDepthsReached:!1,failedTargetIndexes:new Set})),this.catchUpUpdateIntervalMs=r.catchUpUpdateIntervalMs;const a=new Set(t.answerable.flatMap(o=>o.kind==="pool-fold"?[o.request.pool.token]:[]));for(const o of[...this.catchUpLastPostMs.keys()])a.has(o)||this.catchUpLastPostMs.delete(o);this.regenerations=this.runs.activeRuns().flatMap(o=>o.poolTokens.filter(s=>{const u=t.describedPools.get(s);return u!==void 0&&u.depth>this.depthReached(s)})),this.closeEndedRuns()}demandInHand(r){const n=new Set,t=[],i=new Set;for(const f of r.requests){for(const v of Y7(f))i.add(v);if(f.kind==="pool-fold"){const v=this.describedPool(f.request.pool,n);v!==null&&t.push({kind:"pool-fold",request:{...f.request,pool:v}})}else{const v=f.request.innerPools.map(d=>this.describedPool(d,n));v.every(d=>d!==null)&&t.push({kind:"barrier-composite",compositeToken:f.compositeToken,request:{...f.request,innerPools:v}})}}n.size>0&&this.post({kind:"descriptions-needed",poolTokens:[...n]});const a=new Map,o=new Map,s=new Map;for(const f of t)if(f.kind==="pool-fold")o.set(f.request.pool.token,f.request),a.set(f.request.pool.token,f.request.pool);else{s.set(f.compositeToken,f.request);for(const v of f.request.innerPools)a.has(v.token)||a.set(v.token,v)}const u=new Set(r.runs.flatMap(f=>f.poolTokens)),l=t.filter(f=>Y7(f).every(v=>!u.has(v)));return{runs:r.runs,describedPools:a,poolFolds:o,composites:s,namedPoolTokens:i,answerable:l}}describedPool(r,n){if(r.description!==null)return this.descriptions.remember(r.token,r.description),{...r,description:r.description};const t=this.descriptions.lookUp(r.token);return t===null?(n.add(r.token),null):{...r,description:t}}runOffer(r,n){const t=new Set(r.poolTokens),i=r.poolTokens.filter(a=>n.poolFolds.has(a)).map(a=>({kind:"pool",poolToken:a}));for(const[a,o]of n.composites){const s=o.innerPools.map(u=>u.token);s.some(u=>t.has(u))&&i.push({kind:"composite",compositeToken:a,innerPoolTokens:s})}return{advanceablePoolTokens:new Set(r.poolTokens.filter(a=>n.describedPools.has(a))),namedPoolTokens:new Set(r.poolTokens.filter(a=>n.namedPoolTokens.has(a))),units:i}}load(r){this.dropWork(),this.service.reset(),this.descriptions.clear(),this.loadedAid=r,this.registries=null;const n=++this.loadGeneration;this.dependencies.loadFormRegistries(r).then(t=>{n===this.loadGeneration&&(this.registries=t,this.scheduleTurnIfWork())},t=>{n===this.loadGeneration&&this.fail(`could not load the form module of ${r}: ${z1(t)}`)})}dropWork(){this.demand=j7,this.unanswered=[],this.catchUpLastPostMs.clear(),this.regenerations=[],this.runs.clear(),this.runPoolSnapshots.clear(),this.depthsReached.clear()}fail(r){this.dropWork(),this.post({kind:"failure",message:r})}hasWork(){return this.unanswered.length>0||this.regenerations.length>0||this.runs.hasAdvance()}scheduleTurnIfWork(){this.turnScheduled||this.registries===null||!this.hasWork()||(this.turnScheduled=!0,this.dependencies.scheduleTurn(()=>this.turn()))}turn(){if(this.turnScheduled=!1,this.registries!==null){try{!this.answerNextRequest()&&!this.regenerateNextRunPool()&&this.advanceNextRunPool()}catch(r){this.fail(z1(r));return}this.scheduleTurnIfWork()}}depthReached(r){return this.depthsReached.get(r)??0}requireNotBehindDepthReached(r){const n=this.depthReached(r.token);if(r.depth<n)throw new Error(`pool ${r.token} was asked at depth ${r.depth} outside any run, behind the depth ${n} the sampler has reached and posted for it`)}answerNextRequest(){const r=this.unanswered.shift();if(r===void 0)return!1;const{demanded:n}=r;if(n.kind==="barrier-composite"){for(const s of n.request.innerPools)this.requireNotBehindDepthReached(s);const o=this.service.evaluateBarrierComposite(n.request);for(const s of n.request.innerPools)this.depthsReached.set(s.token,s.depth);return this.post({kind:"composite-snapshot",compositeToken:n.compositeToken,includeDistribution:n.request.includeDistribution,snapshot:o}),!0}const{request:t}=n;if(r.checkedAgainstDepthsReached||(this.requireNotBehindDepthReached(t.pool),r.checkedAgainstDepthsReached=!0),t.pool.depth<=this.depthReached(t.pool.token)&&this.foldTargetsFurthestBehind(t,r.failedTargetIndexes)&&this.targetsBehindOf(t,r.failedTargetIndexes).length>0)return this.postCatchUpProgressIfDue(t,r.failedTargetIndexes),this.unanswered.push(r),!0;const a=this.service.foldPoolTargets(t);return this.catchUpLastPostMs.delete(t.pool.token),this.depthsReached.set(t.pool.token,t.pool.depth),this.post({kind:"pool-snapshot",targets:t.targets,snapshot:a}),!0}targetsBehindOf(r,n){return r.targets.map((t,i)=>({target:t,index:i,standing:this.service.poolTargetFoldedDepth(r.pool.token,t)})).filter(({index:t,standing:i})=>i<r.pool.depth&&!n.has(t))}foldTargetsFurthestBehind(r,n){const t=this.targetsBehindOf(r,n);if(t.length===0)return!1;this.catchUpLastPostMs.has(r.pool.token)||this.catchUpLastPostMs.set(r.pool.token,this.dependencies.now());const i=Math.min(...t.map(({standing:s})=>s)),a=t.filter(({standing:s})=>s===i);return this.service.foldPoolTargets({pool:{...r.pool,depth:i+1},targets:a.map(({target:s})=>s)}).outcomes.forEach((s,u)=>{s.kind==="error"&&n.add(a[u].index)}),!0}postCatchUpProgressIfDue(r,n){const t=this.dependencies.now();if(t-this.catchUpLastPostMs.get(r.pool.token)<this.catchUpUpdateIntervalMs)return;const i=new Map;for(const{target:a,standing:o}of this.targetsBehindOf(r,n)){if(o<1)continue;const s=i.get(o);s===void 0?i.set(o,[a]):s.push(a)}for(const[a,o]of i)this.post({kind:"catch-up-snapshot",targets:o,snapshot:this.service.foldPoolTargets({pool:{...r.pool,depth:a},targets:o})});this.catchUpLastPostMs.set(r.pool.token,t)}regenerateNextRunPool(){var r;for(let n=this.regenerations.shift();n!==void 0;n=this.regenerations.shift()){const t=this.demand.describedPools.get(n);if(!(t===void 0||t.depth<=this.depthReached(n)))return this.service.foldPoolTargets({pool:t,targets:((r=this.demand.poolFolds.get(n))==null?void 0:r.targets)??[]}),this.depthsReached.set(n,t.depth),!0}return!1}advanceNextRunPool(){const r=this.runs.takeNextAdvance();if(r===null)return!1;const{runId:n,poolToken:t}=r,i=this.demand.describedPools.get(t);if(i===void 0)throw new Error(`run ${n} was offered pool ${t}, which the demand does not describe`);const a=this.demand.poolFolds.get(t)??null,o=Math.max(i.depth,this.depthReached(t))+1,s=this.dependencies.now(),u=this.service.foldPoolTargets({pool:{...i,depth:o},targets:(a==null?void 0:a.targets)??[]});this.depthsReached.set(t,o),this.runs.recordAdvance(n,t,s,this.service.drawnDepthOf(t)>=o),a!==null&&this.runPoolSnapshots.set(t,{targets:a.targets,snapshot:u});const l=this.dependencies.now();for(const f of this.runs.unitsDueAfterAdvance(n,t,l))this.postDue(n,f,l);return this.closeEndedRuns(),!0}postDue(r,n,t){if(n.kind==="pool"){this.postRunPoolSnapshot(r,n.poolToken)&&this.runs.recordPost(r,n,t,t);return}const i=this.demand.composites.get(n.compositeToken);if(i===void 0)return;const a=this.dependencies.now();this.postRunComposite(r,n.compositeToken,i)&&this.runs.recordPost(r,n,a,this.dependencies.now())}postFinal(r,n,t){if(n.kind==="pool"){this.postRunPoolSnapshot(r,n.poolToken),this.runPoolSnapshots.delete(n.poolToken);return}const i=t.composites.get(n.compositeToken);i!==void 0&&this.postRunComposite(r,n.compositeToken,i)}postRunPoolSnapshot(r,n){const t=this.runPoolSnapshots.get(n);return t===void 0?!1:(this.post({kind:"run-pool-snapshot",runId:r,targets:t.targets,snapshot:t.snapshot}),!0)}postRunComposite(r,n,t){const i=t.innerPools.map(o=>({...o,depth:Math.max(o.depth,this.depthReached(o.token))}));if(i.some(o=>o.depth<1))return!1;const a=this.service.evaluateBarrierComposite({...t,innerPools:i});for(const o of i)this.depthsReached.set(o.token,o.depth);return this.post({kind:"run-composite-snapshot",runId:r,compositeToken:n,snapshot:a}),!0}closeEndedRuns(){for(const r of this.runs.closeEndedRuns(this.dependencies.now()))this.closeRun(r,this.demand)}closeRun(r,n){for(const i of r.finalUnits)this.postFinal(r.runId,i,n);const t=n.runs.find(i=>i.runId===r.runId);for(const i of(t==null?void 0:t.poolTokens)??[])this.runPoolSnapshots.delete(i);this.post({kind:"run-ended",runId:r.runId})}post(r){const{value:n,transfer:t}=m9(r,`the sampler's ${r.kind} message`);this.dependencies.post(n,t)}}const Ew="../../../data/",Iw="/form_fns.ts",Q7=Object.assign({"../../../data/alpoker2/form_fns.ts":()=>import("./form_fns-1m0dK0Z3.js"),"../../../data/alpoker3/form_fns.ts":()=>import("./form_fns-CtAOH8d-.js"),"../../../data/bbdoom1/form_fns.ts":()=>import("./form_fns-C1F0Sby_.js"),"../../../data/bbdoom3/form_fns.ts":()=>import("./form_fns-ByFxNx0q.js"),"../../../data/covatc2/form_fns.ts":()=>import("./form_fns-BCT9IHtR.js"),"../../../data/mcovidB15/form_fns.ts":()=>import("./form_fns-BU0kjW_y.js"),"../../../data/simBayesHalf/form_fns.ts":()=>import("./form_fns-Bo3Iabz4.js"),"../../../data/simBayesThird/form_fns.ts":()=>import("./form_fns-BqDgChSY.js"),"../../../data/simBetter/form_fns.ts":()=>import("./form_fns-DOPSKhFx.js"),"../../../data/simfix/form_fns.ts":()=>import("./form_fns-3bxDgSkt.js")});async function Aw(e){const r=Q7[`${Ew}${e}${Iw}`];if(r===void 0)throw new Error(`no form module for aid ${JSON.stringify(e)} in this build (it holds ${Object.keys(Q7).length})`);const n=await r();return{formRegistry:n.FORM_REGISTRY,barrierRegistry:n.BARRIER_REGISTRY??null}}function Sw(){const e=new MessageChannel,r=[];return e.port1.onmessage=()=>{const n=r.shift();if(n===void 0)throw new Error("the live-MC sampler worker received a turn it did not schedule");n()},n=>{r.push(n),e.port2.postMessage(null)}}const Nl=self,e9=new Nw({loadFormRegistries:Aw,scheduleTurn:Sw(),post:(e,r)=>Nl.postMessage(e,[...r]),now:()=>performance.now()});Nl.addEventListener("message",e=>e9.receive(e.data));Nl.addEventListener("messageerror",()=>e9.receiveUnreadable());export{Tw as a,kw as i,l9 as r};
