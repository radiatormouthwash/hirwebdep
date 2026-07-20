const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-RRqGnS9N.js","assets/form_types-BeTrULNO.js","assets/index-CDmBlPta.js","assets/index-Bc00_T7Q.js","assets/index-DPHSP0AW.js","assets/index-CSdNTDR4.js","assets/index-5zj-363m.js","assets/index-CMSdCFpk.js","assets/index-DZsd74DW.js"])))=>i.map(i=>d[i]);
var uy=Object.defineProperty;var oy=(r,e,n)=>e in r?uy(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var Ne=(r,e,n)=>oy(r,typeof e!="symbol"?e+"":e,n);import{s as ay,a as sy,_ as rr,r as ru}from"./app_bootstrap-DWdXOBd8.js";import{P as cy}from"./form_types-BeTrULNO.js";const mt={lo:0,hi:1,loClosed:!0,hiClosed:!0};function X1(r,e){return!(r.lo!==null&&(r.loClosed?e<r.lo:e<=r.lo)||r.hi!==null&&(r.hiClosed?e>r.hi:e>=r.hi))}function zt(r){const e=r.loClosed&&r.lo!==null?"[":"(",n=r.hiClosed&&r.hi!==null?"]":")";return`${e}${r.lo??"-inf"}, ${r.hi??"inf"}${n}`}const ly={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]};function e_(r){var i;const[e,n]=ly[r.type_mathlevel]??[!0,!0],t=((i=r.type_detail)==null?void 0:i.range)??[0,1];return{lo:t[0],hi:t[1],loClosed:e,hiClosed:n}}function Xr(r){return r.map(e_)}function mi(r){return Object.fromEntries(r.map(e=>[e.bareName,e_(e.decl)]))}const fy=["aopt:","cparam:"];function Fe(r){for(const e of fy)if(r.startsWith(e))return r.slice(e.length);return r}function fn(r){return r.startsWith("cparam:")}function hd(r){return!fn(r.id)}function Y1(r){return fn(r.id)}const dy="p_noncompute";function bt(r){return r.supported_response_types===dy}const Jt="svar:";function r_(r,e){if(!Array.isArray(e)||e.length!==3||e[0]!=="eq"||typeof e[1]!="string")throw new Error(`Formula ${r} must have an equality s-expression with a string LHS`);return e[1]}function n_(r){if(r.includes("{")||r.includes("}"))throw new Error(`Unexpected brace in sexpr reference leaf: ${r}`);if(r.startsWith(Jt))return`expr:${r.slice(Jt.length)}`;if(!r.startsWith("expr:"))throw new Error(`Unexpected expression reference ${JSON.stringify(r)}; expected expr:* or svar:*`);return r}function py(r){return r.startsWith(Jt)?r.slice(Jt.length):r}const hy=/^gloss:/;function bi(r){return r.replace(hy,"")}const W2="textchunk:",G2="textdefn:";class t_{constructor(e){Ne(this,"_data");Ne(this,"aid");Ne(this,"options");Ne(this,"cparam_combo_filter");Ne(this,"config");Ne(this,"layout");Ne(this,"svar_list");Ne(this,"svar");Ne(this,"textchunk");Ne(this,"display");Ne(this,"isym");Ne(this,"ax");Ne(this,"expr");Ne(this,"form");Ne(this,"definedSym");Ne(this,"isym_semantics");Ne(this,"textdefn");Ne(this,"gloss");Ne(this,"framing");Ne(this,"srcquote");this._data=e,this.aid=e.aid,this.options=e.options,this.cparam_combo_filter=e.cparam_combo_filter,this.config=e.config,this.layout=e.layout,this.svar_list=e.svar_list,this.svar=e.svar,this.textchunk=e.textchunk,this.display=e.display,this.isym=e.isym,this.ax=e.ax,this.expr=e.expr,this.form=e.form,this.definedSym=e.definedSym,this.isym_semantics=e.isym_semantics,this.textdefn=e.textdefn,this.gloss=e.gloss,this.framing=e.framing??[],this.srcquote=e.srcquote??[]}_get_data(){return this._data}get_options(){return this.options}get_aopts(){return this.options.filter(hd)}get_cparams(){return this.options.filter(Y1)}has_cparams(){return this.options.some(Y1)}get_option(e){const n=this.options.find(t=>Fe(t.id)===e);if(!n)throw new Error(`No option named "${e}"`);return n}get_aopt(e){const n=this.get_aopts().find(t=>Fe(t.id)===e);if(!n)throw new Error(`No aopt named "${e}"`);return n}get_cparam(e){const n=this.find_cparam(e);if(!n)throw new Error(`No cparam named "${e}"`);return n}find_cparam(e){return this.get_cparams().find(n=>Fe(n.id)===e)}get_option_bare_names(){return this.options.map(e=>Fe(e.id))}get_aopt_bare_names(){return this.get_aopts().map(e=>Fe(e.id))}get_cparam_bare_names(){return this.get_cparams().map(e=>Fe(e.id))}get_option_ids(){return this.options.map(e=>e.id)}get_aopt_ids(){return this.get_aopts().map(e=>e.id)}get_cparam_ids(){return this.get_cparams().map(e=>e.id)}get_trial_choice_aopt_bare_names(){return new Set(this.get_aopts().filter(e=>e.trial_choice).map(e=>Fe(e.id)))}get_textchunks(){return this.textchunk}find_textchunk(e){const n=this.strip_textchunk_prefix(e);return this.textchunk.find(t=>this.strip_textchunk_prefix(t.id)===n)}get_textchunk(e){const n=this.find_textchunk(e);if(!n)throw new Error(`No textchunk named "${e}"`);return n}find_textchunk_defn(e){var n;return(n=this.find_textchunk(e))==null?void 0:n.defn}get_textchunk_defn(e){return this.get_textchunk(e).defn}strip_textchunk_prefix(e){return e.startsWith(W2)?e.slice(W2.length):e}get_textdefn_entries(){return this.textdefn.map(e=>{const n=e.aliases??[];return{bareName:this.strip_textdefn_prefix(e.id),id:e.id,defn:e.defn,aliases:n,displayTerm:n[0]??e.id}})}find_textdefn(e){const n=this.strip_textdefn_prefix(e);return this.textdefn.find(t=>this.strip_textdefn_prefix(t.id)===n)}get_textdefn(e){const n=this.find_textdefn(e);if(!n)throw new Error(`No textdefn named "${e}"`);return n}get_textdefns(){return this.textdefn}strip_textdefn_prefix(e){return e.startsWith(G2)?e.slice(G2.length):e}get_svar_bare_names(){return this.svar_list}svar_entries(){const e=new Map;for(const n of this.svar)e.set(py(n.id),n);return this.svar_list.map(n=>{const t=e.get(n);if(!t)throw new Error(`svar_list entry "${n}" has no matching svar decl`);return{bareName:n,decl:t}})}input_svar_entries(){return this.svar_entries().filter(e=>!bt(e.decl))}has_framing_notes(){return this.framing.length>0}has_examples(){return this.isym_semantics.some(e=>{var n,t;return(((n=e.pos)==null?void 0:n.length)??0)>0||(((t=e.neg)==null?void 0:t.length)??0)>0})}has_srcquotes(){return this.srcquote.length>0}resolve_srcquotes(e){const n=new Map(this.srcquote.map(t=>[t.id,t]));return e.map(t=>{const i=n.get(t);if(!i)throw new Error(`Unknown srcquote id: ${t}`);return i})}framing_static_anchor_ids(){const e=new Set;for(const n of this.framing)n.static_anchor!==null&&e.add(n.static_anchor);return e}can_consolidate_isym_svar(e){var a,c;const n=e.slice(5),t=this.isym.find(s=>s.id===e);if(!t||t.kind!=="real")return!1;const i=this.isym_semantics.find(s=>s.id===e);if(!i||(((a=i.pos)==null?void 0:a.length)??0)>0||(((c=i.neg)==null?void 0:c.length)??0)>0||!this.svar_list.includes(n)||!this.svar.some(s=>s.id===`svar:${n}`))return!1;const u=this.expr.find(s=>s.id===`expr:${n}`);if(!u||u.sexpr!==e)return!1;const o=this.gloss.find(s=>bi(s.id)===n);return o!==void 0&&o.defn===""}get_display_ax_fixed(e){return this.display.ax.fixed[e]}get_display_ax_fixed_or_none(e){return this.display.ax.fixed[e]??null}get_display_expr(e){return this.display.expr[e]}get_display_form(e){return this.display.form[e]}get_display_form_or_none(e){return this.display.form[e]??null}get_display_definedSym(e){return this.display.definedSym[e]}get_display_definedSym_or_none(e){return this.display.definedSym[e]??null}get_display_expr_keys(){return Object.keys(this.display.expr)}get_display_form_keys(){return Object.keys(this.display.form)}get_framing_layout(e){const n=new Set(e),t=new Map(this.framing.map(s=>[s.id,s])),i=new Map,u=s=>{if(i.has(s))return i.get(s)??null;const l=t.get(s);if(!l)throw new Error(`Unknown framing note id: ${s}`);let f=null;if(n.has(l.pov)){const d=l.framing_target;if(d!==null){const h=u(d);h!==null&&(f={anchor_id:h.anchor_id,depth:h.depth+1,visible_parent_id:d})}f===null&&l.static_anchor!==null&&(f={anchor_id:l.static_anchor,depth:1,visible_parent_id:null})}return i.set(s,f),f};for(const s of this.framing)u(s.id);const o=new Map,a=[],c=new Map;for(const s of this.framing){const l=i.get(s.id);l!=null&&o.set(s.id,{depth:l.depth,note:s,children:[]})}for(const s of this.framing){const l=i.get(s.id);if(l==null)continue;const f=o.get(s.id);if(l.visible_parent_id!==null)o.get(l.visible_parent_id).children.push(f);else if(l.anchor_id==="root")a.push(f);else{const d=c.get(l.anchor_id)??[];d.push(f),c.set(l.anchor_id,d)}}return{root_section:{static_anchor_id:"root",layout_nodes:a},nonroot_anchor_sections:new Map(Array.from(c.entries(),([s,l])=>[s,{static_anchor_id:s,layout_nodes:l}]))}}}function vd(r){return r.get_textdefn_entries().map(e=>{const n=`def-${e.bareName.toLowerCase()}`;return{...e,anchorId:n,anchor:`#${n}`}})}const vy=["options","config","layout","svar","textchunk","display","isym","ax","expr","form","definedSym","isym_semantics","textdefn","gloss"];function my(r){if(typeof r!="object"||r===null)throw new Error("Jprob template data must be a non-null object");const e=r,n=vy.filter(t=>!(t in e));if(n.length>0)throw new Error(`Jprob template data missing required keys: ${n.join(", ")}`);return new t_(r)}function by(r){return my(r)}function se(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function He(r){return r.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const K1="[",j1="]",i_="{",u_="}",_y=new RegExp("(?<!\\\\)\\{([^\\}]+)\\}","g"),gy=new RegExp("(?<!\\\\)\\{((?:expr|form):[^\\}]+)\\}","g"),yy=new RegExp("(?<!\\\\)\\[([^\\]]+?)\\|(\\w[\\w:-]*)\\]","g"),Ey=new RegExp("(?<!\\\\)\\[([^\\]|]+)\\]","g"),Zt=/‹\+(.*?)\+›/g,$y=new RegExp("(?<!\\\\)\\[([^\\]|]*?)(?:\\|[^\\]]*?)?\\]","g"),wy=new RegExp("(?<!\\\\)\\{[^\\}]*\\}","g"),Ay=/\\([\{\}])/g,Sy=/\\([\[\]])/g,z1="symbol-ref-name";function o_(r){const e=new Map;let n=0;for(const t of r.form)!t.show_in.includes("html")||!r.get_display_form(t.id)||(n++,e.set(t.id,n));return e}function a_(r,e={}){const n=new Map,t=e.symbolMnames??!1,i=Ry(r);for(const u of r.isym){const o=u.id.startsWith("isym:")?u.id:`isym:${u.id}`,a=o.startsWith("isym:")?o.slice(5):o,c=`#isym-${a}`,s={bareId:a,mname:i.get(o)??a},l=i.get(o);l&&(n.set(l,{anchor:c,displayText:l}),n.set(`${a}:long`,{anchor:c,displayText:l}),n.set(`isym:${a}:long`,{anchor:c,displayText:l})),n.set(a,{anchor:c,displayText:nu(s,t),symbolName:s}),n.set(o,{anchor:c,displayText:nu(s,t),symbolName:s})}for(const u of vd(r))for(const o of u.aliases)n.set(o,{anchor:u.anchor,displayText:o});for(const u of r.isym_semantics){const o=u.id.replace(/^isym:/,"");let a=0;for(const c of["pos","neg"])for(const s of u[c]??[])a++,s.alias&&n.set(s.alias,{anchor:`#ex-${s.alias}`,displayText:`${o} example ${a}`})}{let u=0;for(const o of r.ax.fixed)r.get_display_ax_fixed(o.id)&&(u++,n.set(o.id,{anchor:`#fixed-ax-${u}`,displayText:String(u)}))}for(const[u,o]of o_(r)){if(n.has(u))continue;const a=u.startsWith("form:")?u.slice(5):u;n.set(u,{anchor:`#form-${a}`,displayText:`Formula (${o})`})}for(const u of r.get_options()){const o=Fe(u.id),a=`#opt-${o}`,c={bareId:o,mname:u.longname??o},s=nu(c,t),l={anchor:a,displayText:s,symbolName:c};n.has(u.id)||n.set(u.id,l),n.has(o)||n.set(o,l);const f=`${o}:short`;n.has(f)||n.set(f,{anchor:a,displayText:o})}for(const u of r.definedSym){const o=u.id.startsWith("definedSym:")?u.id.slice(11):u.id,c={anchor:`#defsym-${o}`,displayText:o};n.has(o)||n.set(o,c),n.has(u.id)||n.set(u.id,c)}return n}function Ry(r){const e=new Map;for(const n of r.isym){if(!n.longname)continue;const t=n.id.startsWith("isym:")?n.id:`isym:${n.id}`;e.set(t,n.longname)}return e}function nu(r,e){return e?r.mname:r.bareId}const tu="____",ky={point:` = ${tu}`,sample:` ~ Distrib(${tu})`,bounds:` ∈ ［${tu}］`};function Ly(r){return ky[r]}function s_(r,e){return bt(r)?"point":e}function c_(r,e){return`{expr:${r}}${Ly(e)}`}function Cy(r,e){return r.svar_entries().map(({bareName:n,decl:t})=>c_(n,s_(t,e)))}function l_(r,e){return r.input_svar_entries().map(({bareName:n})=>c_(n,e))}function Iy(r){const e=new Map;for(const n of r.gloss)e.set(bi(n.id),n);return r.get_svar_bare_names().map(n=>e.get(n))}function V2(r,e,n,t,i){t.footnoteCounter.n++;const u=t.footnoteCounter.n,o=`${t.footnoteIdNamespace??""}${u}`,a=e?t.renderBody(e):"",c=n?`<a href="${n}" class="popover-go">go →</a>`:"";t.footnotes.push({id:o,body:a+c});const s=f_(i);return`<span class="ref-popover${s.classSuffix}" data-fnref="fnref:${o}"${s.dataAttrs}>${r}</span><sup id="fnref:${o}" class="lf-zero"><a href="#fn:${o}">${u}</a></sup>`}function qy(r,e,n){const t=f_(n);return`<a href="${r}"${t.classAttr}${t.dataAttrs}>${e}</a>`}function f_(r){if(!r)return{classAttr:"",classSuffix:"",dataAttrs:""};const e=` data-bareid="${He(r.bareId)}" data-mname="${He(r.mname)}"`;return{classAttr:` class="${z1}"`,classSuffix:` ${z1}`,dataAttrs:e}}function My(r,e,n,t){const i=o=>n!==void 0&&n.popoverAllRefs;let u=r;return u=u.replace(yy,(o,a,c)=>{if(i()){const f=n.lookup.get(c),d=(f==null?void 0:f.anchor)??`#${c}`,h=(f==null?void 0:f.body)??"";return V2(a,h,d,n)}const s=e.get(c);return`<a href="${s?s.anchor:`#isym-${c}`}">${a}</a>`}),u=u.replace(Ey,(o,a)=>{if(i()){const s=n.lookup.get(a);if(!s)return t==null||t.add(a),`${K1}${a}${j1}`;const l=e.get(a);return V2(s.label,s.body,s.anchor,n,l==null?void 0:l.symbolName)}const c=e.get(a);return c?qy(c.anchor,c.displayText,c.symbolName):(t==null||t.add(a),`${K1}${a}${j1}`)}),u}const Ny=10;function Fy(r,e,n,t){let i=r;for(let u=0;u<Ny;u++){const o=My(i,e,n,t);if(o===i)break;i=o}return i.replace(Sy,"$1")}function J1(r,e){const n=Oy(r),t=new Map;for(const[i,u]of e){const o=n.get(u.anchor)??"";t.set(i,{label:u.displayText,body:o,anchor:u.anchor})}return t}function Oy(r){const e=new Map;for(const n of r.isym_semantics){const t=n.id.replace(/^isym:/,"");e.set(`#isym-${t}`,n.defn)}for(const n of vd(r))e.set(n.anchor,n.defn);for(const n of r.gloss){const t=bi(n.id);e.set(`#gloss-${t}`,n.defn)}for(const n of r.get_display_form_keys()){const t=r.get_display_form(n),i=n.startsWith("form:")?n.slice(5):n;e.set(`#form-${i}`,t)}{let n=0;for(const t of r.ax.fixed){const i=r.get_display_ax_fixed(t.id);i&&(n++,e.set(`#fixed-ax-${n}`,i))}}for(const n of r.get_options()){const t=Fe(n.id);e.set(`#opt-${t}`,n.defn)}for(const n of r.definedSym){const t=n.id.startsWith("definedSym:")?n.id.slice(11):n.id,i=r.get_display_definedSym_or_none(n.id)??"",u=[];i&&u.push(`:= ${i}`),n.defn&&u.push(n.defn),e.set(`#defsym-${t}`,u.join(" — "))}return e}class Dy extends t_{constructor(n,t,i){super(n);Ne(this,"cparam_overrides");Ne(this,"aopt_overrides");Ne(this,"query_mode");const u=new Set(this.get_option_bare_names()),o=this.get_trial_choice_aopt_bare_names(),a=new Map,c=new Map;for(const[s,l]of Object.entries(t)){if(!u.has(s))throw new Error(`Unknown option key "${s}" for ${this.aid}. Valid keys: ${[...u].sort().join(", ")}`);if(o.has(s))throw new Error(`Cannot override trial_choice aopt "${s}" for ${this.aid}: it is left free for the responder to choose.`);const f=this.find_cparam(s);if(f){if(i!=="plainnum")throw new Error(`Cannot fix cparam "${s}" for ${this.aid} in ${i} mode: cparams are free in plaincode/richcode (the responder covers all combinations).`);a.set(f.id,l)}else c.set(this.get_aopt(s).id,l)}this.cparam_overrides=a,this.aopt_overrides=c,this.query_mode=i}is_code_mode(){return this.query_mode!=="plainnum"}option_value(n){const t=this.find_cparam(n);if(t)return this.cparam_overrides.get(t.id)??t.default_value;const i=this.get_aopt(n);return this.aopt_overrides.get(i.id)??i.default_value}option_value_or(n,t){return this.get_option_bare_names().includes(n)?this.option_value(n):t}}function d_(r,e,n){return new Dy(r._get_data(),e,n)}function md(r,e){if("input_type"in r&&r.input_type==="MultiStringFromSet"){if(!Array.isArray(e)||!e.every(i=>typeof i=="string"))throw new Error(`Invalid MultiStringFromSet value for ${r.id}: expected a string array`);if(!Array.isArray(r.allowed_values))throw new Error(`Invalid MultiStringFromSet declaration for ${r.id}: missing allowed_values`);const n=new Set(r.allowed_values),t=e.filter(i=>!n.has(i));if(t.length>0)throw new Error(`Invalid MultiStringFromSet value for ${r.id}: values not in allowed_values: `+t.join(", "));return[...e]}if(typeof e=="object")throw new Error(`Invalid scalar value for ${r.id}: expected string, number, or boolean`);if(typeof r.default_value=="boolean"){if(typeof e=="boolean")return e;if(e==="true")return!0;if(e==="false")return!1;throw new Error(`Invalid boolean value for ${r.id}: ${e}`)}if(typeof r.default_value=="number"){if(typeof e=="boolean"||typeof e=="string"&&e.trim()==="")throw new Error(`Invalid numeric value for ${r.id}: ${e}`);const n=Number(e);if(!Number.isFinite(n))throw new Error(`Invalid numeric value for ${r.id}: ${e}`);return n}if(typeof r.default_value=="string"){if(typeof e!="string")throw new Error(`Invalid string value for ${r.id}: ${e}`);return e}throw new Error(`Option ${r.id} has no supported default value type`)}function X2(r,e){return r!=="typical"||e}function Ty(r,e){const n=r.map(o=>({name:Fe(o.id),values:o.allowed_values.filter(a=>typeof a!="boolean")}));if(n.length===0)return{names:[],combinations:[{}]};const t=n.map(o=>o.name),i=n.map(o=>o.values);let u=[{}];for(let o=0;o<t.length;o++){const a=t[o],c=i[o],s=[];for(const l of u)for(const f of c)s.push({...l,[a]:f});u=s}return e!==void 0&&(u=u.filter(o=>e(o))),{names:t,combinations:u}}function p_(r,e,n){const t=r.get_trial_choice_aopt_bare_names(),i=new Set(r.get_cparam_bare_names()),u=n!=="plainnum",o={};for(const[a,c]of Object.entries(e))t.has(a)||u&&i.has(a)||(o[a]=c);return o}const Py=[{id:"symbolMnames",description:"Long symbol names",type:"boolean",default:!1},{id:"popoverAllRefs",description:"Popovers for all refs",type:"boolean",default:!0},{id:"persistentPopovers",description:"Persistent popovers (multiple, Esc to close)",type:"boolean",default:!1},{id:"inputMode",description:"Response type",type:"enum",values:["point","bounds","sample"],default:"point"},{id:"probAsOdds",description:"Stats display",type:"enum",values:["probability","odds"],default:"probability"},{id:"showExampleClassification",description:"Show example classifications",type:"boolean",default:!0},{id:"showFramingNotes",description:"Show framing notes",type:"boolean",default:!0},{id:"mcItersDensity",description:"MC iters (density)",type:"integer",default:5e4},{id:"mcItersSweepLine",description:"MC iters/pt (line)",type:"integer",default:5e4},{id:"mcItersSweepHeatmap",description:"MC iters/cell (heat)",type:"integer",default:1e4},{id:"plaincodeEvalTimeoutMs",description:"Plaincode eval timeout (ms)",type:"integer",default:5e3},{id:"mcItersPlaincodePerCombo",description:"MC iters per plaincode combo",type:"integer",default:1e4}],Hy={options:Py},h_=Hy.options,iu=Object.freeze(h_.reduce((r,e)=>(r[e.id]=e.default,r),{})),v_="global_options";function sr(){try{const r=localStorage.getItem(v_);if(r===null)return{...iu};const e=JSON.parse(r);return{...iu,...e}}catch{return{...iu}}}function xy(r){localStorage.setItem(v_,JSON.stringify(r))}function ut(r,e){const n=sr();n[r]=e,xy(n)}const By=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Uy=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function Rr(r,e){return r>>>e|r<<32-e}function m_(r){const e=new TextEncoder().encode(r),n=e.length<<3>>>0,t=Math.floor(e.length/536870912),i=e.length+9+63&-64,u=new Uint8Array(i);u.set(e),u[e.length]=128;const o=new DataView(u.buffer);o.setUint32(i-8,t),o.setUint32(i-4,n);const a=new Uint32Array(Uy),c=new Uint32Array(64);for(let l=0;l<i;l+=64){for(let y=0;y<16;y++)c[y]=o.getUint32(l+y*4);for(let y=16;y<64;y++){const _=c[y-15],$=c[y-2],L=Rr(_,7)^Rr(_,18)^_>>>3,S=Rr($,17)^Rr($,19)^$>>>10;c[y]=c[y-16]+L+c[y-7]+S|0}let f=a[0],d=a[1],h=a[2],p=a[3],v=a[4],m=a[5],b=a[6],g=a[7];for(let y=0;y<64;y++){const _=Rr(v,6)^Rr(v,11)^Rr(v,25),$=v&m^~v&b,L=g+_+$+By[y]+c[y]|0,S=Rr(f,2)^Rr(f,13)^Rr(f,22),q=f&d^f&h^d&h,k=S+q|0;g=b,b=m,m=v,v=p+L|0,p=h,h=d,d=f,f=L+k|0}a[0]=a[0]+f|0,a[1]=a[1]+d|0,a[2]=a[2]+h|0,a[3]=a[3]+p|0,a[4]=a[4]+v|0,a[5]=a[5]+m|0,a[6]=a[6]+b|0,a[7]=a[7]+g|0}let s="";for(let l=0;l<8;l++)s+=(a[l]>>>0).toString(16).padStart(8,"0");return s}const b_=5;function Y2(r){const e={};for(const n of Object.keys(r).sort())e[n]=r[n];return e}function Wy(r){return m_(JSON.stringify(r)).slice(0,b_)}function __(r,e,n,t,i=new Set){const u=Object.fromEntries(Object.entries(n).filter(([a])=>!i.has(a))),o=[e,Y2(u)];return r==="plainnum"&&o.push(Y2(t??{})),m_(JSON.stringify(o)).slice(0,b_)}const g_=["plaincode","plainnum"];function y_(r,e){return e==="plainnum"?r.adhocPlainnumEntries:r.adhocPlaincodeEntries}function Gy(r,e,n){return e==="plainnum"?r.plainnum[n.resultIndex]:r.plaincode[n.resultIndex]}function Vy(r){const e=Object.keys(r.reasoning_response).some(u=>r.reasoning_response[u]!==""),n=r.misc_response!=="",t=r.verified_code_input!==void 0&&r.verified_code_input!=="";if(!e&&!n&&!t)return[];const i={};return t&&(i.source_code=r.verified_code_input),e&&(i.reasoning=r.reasoning_response),n&&(i.misc=r.misc_response),[i]}function _i(r){return{...r,model:"user",version:"",effort:null,content_hash:"",prompt_file_basename:"yours-plaincode",trial_metadata:Vy(r)}}function Xy(r){const e=[],n=[];for(let t=0;t<r.length;t++){const i=r[t];for(let u=0;u<i.plainnum.length;u++)e.push({presetIndex:t,resultIndex:u});for(let u=0;u<i.plaincode.length;u++)n.push({presetIndex:t,resultIndex:u})}return{plainnum:e,plaincode:n}}function Yy(r,e,n){const t=r.name_or_pseudoname,u=r.plainnum.length>0&&r.plaincode.length>0?` [${e}]`:"",o=n.prompt_file_basename?` (${n.prompt_file_basename})`:"";return`${t}${u} ${n.label}${o}`}const Ky=["prompt","plainnum"];function jy(r){return r.filter(e=>Ky.some(n=>e.prompt_file_basename.startsWith(n)))}function zy(r){return r.filter(e=>e.prompt_file_basename.startsWith("plaincode"))}function Jy(r){return r.filter(e=>e.prompt_file_basename.startsWith("richcode"))}function Zy(r){const e=new Map,n=(u,o,a,c,s)=>`${u}\0${o}\0${a??""}\0${c}\0${s??""}`,t=u=>({model:u.model,version:u.version,effort:u.effort,label:u.label,content_hash:u.content_hash,aggregate:u.aggregate,plainnumIndex:null,plaincodeIndex:null,richcodeIndex:null,availableModes:[]});for(let u=0;u<r.plainnumResults.length;u++){const o=r.plainnumResults[u],a=n(o.model,o.version,o.effort,o.content_hash),c=e.get(a);if(c)c.plainnumIndex===null&&(c.plainnumIndex=u,c.availableModes=["plainnum",...c.availableModes.filter(s=>s!=="plainnum")]);else{const s=t(o);s.plainnumIndex=u,s.availableModes=["plainnum"],e.set(a,s)}}for(let u=0;u<r.plaincodeResults.length;u++){const o=r.plaincodeResults[u],a=n(o.model,o.version,o.effort,o.content_hash,o.aggregate),c=e.get(a);if(c)c.plaincodeIndex===null&&(c.plaincodeIndex=u,c.availableModes.includes("plaincode")||c.availableModes.push("plaincode"));else{const s=t(o);s.plaincodeIndex=u,s.availableModes=["plaincode"],e.set(a,s)}}for(let u=0;u<r.richcodeResults.length;u++){const o=r.richcodeResults[u],a=n(o.model,o.version,o.effort,o.content_hash,o.aggregate),c=e.get(a);if(c)c.richcodeIndex===null&&(c.richcodeIndex=u,c.availableModes.includes("richcode")||c.availableModes.push("richcode"));else{const s=t(o);s.richcodeIndex=u,s.availableModes=["richcode"],e.set(a,s)}}const i=u=>u.aggregate==="all"?0:u.aggregate==="model_size"?1:u.aggregate==="model_size__version"?2:3;return Array.from(e.values()).sort((u,o)=>i(u)-i(o))}function Qy(r){return r.effort?`${r.label} ${r.effort}`:r.label}function eE(r){const e=new Map,n=r.map(Qy);for(const t of n)e.set(t,(e.get(t)??0)+1);return n.map((t,i)=>e.get(t)>1?`${t} [${r[i].content_hash}]`:t)}function $e(r){const e=r.indexOf(":");return e===-1?{source:r,index:-1}:{source:r.slice(0,e),index:parseInt(r.slice(e+1))}}function nr(r){return r.slice(0,r.indexOf("-"))}function dn(r){return r.slice(r.indexOf("-")+1)}function je(r){return nr($e(r).source)==="yours"}function E_(r){return nr(r)==="adhoc"}function rE(r){return nr(r)==="metho"}function Ze(r,e){var i,u;const{source:n,index:t}=$e(r);if(nr(n)==="yours")return null;if(n==="adhoc-plainnum"){const o=e.adhocPlainnumEntries[t];return o?((i=e.adhocPresets[o.presetIndex])==null?void 0:i.plainnum[o.resultIndex])??null:null}if(n==="adhoc-plaincode"){const o=e.adhocPlaincodeEntries[t];if(!o)return null;const a=(u=e.adhocPresets[o.presetIndex])==null?void 0:u.plaincode[o.resultIndex];return a?_i(a):null}return n==="metho-plainnum"?e.plainnumResults[t]??null:n==="metho-plaincode"?e.plaincodeResults[t]??null:n==="metho-richcode"?e.richcodeResults[t]??null:null}function $_(r,e){var u;const{source:n,index:t}=$e(r);if(n!=="adhoc-plaincode")return null;const i=e.adhocPlaincodeEntries[t];return i?((u=e.adhocPresets[i.presetIndex])==null?void 0:u.plaincode[i.resultIndex])??null:null}function nE(r,e){const n=Ze(r,e);if(!je(r)&&n===null)throw new Error(`Chosen result ${JSON.stringify(r)} is missing from the loaded data`)}function tE(r,e){const{source:n,index:t}=$e(r);if(n==="adhoc-plainnum"){const i=e.adhocPlainnumEntries[t];return i?e.adhocPresets[i.presetIndex]??null:null}if(n==="adhoc-plaincode"){const i=e.adhocPlaincodeEntries[t];return i?e.adhocPresets[i.presetIndex]??null:null}return null}function w_(r,e){if(!e)return{point:!0,bounds:!0,sample:!0};const{source:n}=$e(r),i=dn(n)!=="plainnum";i&&_d(e);const u=i?e.cparam_combos.flatMap(a=>a.trials):e.trials,o=a=>u.some(c=>Object.keys(c[a]).length>0);return{point:o("point"),bounds:(!i||bd(e))&&o("bounds"),sample:o("sample")}}function bd(r){return r.count===1}function _d(r){for(const[e,n]of r.cparam_combos.entries())if(n.trials.length===0||n.trials.length>r.count)throw new Error(`Code result cparam combo ${e} carries ${n.trials.length} trials; expected between 1 and the record trial count ${r.count}`)}function gd(r,e,n){if(e==="point"){const i=r.point[n];return i===void 0?"":String(i)}if(e==="bounds"){const i=r.bounds[n];return i?`${i[0]} ${i[1]}`:""}const t=r.sample[n];return t?typeof t=="string"?t:t.map(([i,u])=>`(${i} ${u})`).join(" "):""}function A_(r,e){return["point","bounds","sample"].filter(n=>e.length>0&&e.every(t=>gd(r,n,t)!==""))}function iE(r,e,n){return n.map(t=>gd(r,e,t)).join(`
`)}function uE(r,e,n,t){const{source:i}=$e(r);return i==="adhoc-plainnum"||i==="metho-plainnum"?e.trials.map(o=>t.map(a=>gd(o,n,a))):[]}function Ln(r,e,n){const t=[];for(const i of r){if(n==="code"&&fn(i.id))continue;const u=Fe(i.id);if(!Object.prototype.hasOwnProperty.call(e,u))throw new Error(`Cannot compute optionDictKey: missing value for ${i.id}`);t.push([i.id,e[u]])}return t.sort(([i],[u])=>i<u?-1:i>u?1:0),JSON.stringify(t)}const S_="yours_code";function gi(r,e){return`${S_}_${r}_${e}`}function R_(r,e){const n={};for(const t of r.get_aopts()){const i=Fe(t.id);i in e&&(n[i]=e[i])}return{aid:r.aid,label:"code",aopts:n,count:1,cparam_names:[],cparam_combos:[],raw_code_input:"",reasoning_response:{},misc_response:""}}function oE(r,e,n){const t=sE(gi(r.aid,e));return t||R_(r,n)}function yi(r,e,n,t){t.timestamp||(t.timestamp=new Date().toISOString()),t.content_hash=__("code",e,t.aopts,void 0,r.get_trial_choice_aopt_bare_names()),cE(gi(r.aid,n),t)}function yd(r){const e=`${S_}_${r}_`,n=[];for(let t=0;t<localStorage.length;t++){const i=localStorage.key(t);if(i===null||!i.startsWith(e))continue;const u=localStorage.getItem(i);if(u===null)continue;let o;try{o=JSON.parse(u)}catch{continue}n.push({codeOptionDictKey:i.slice(e.length),record:o})}return n.sort((t,i)=>{const u=t.record.timestamp??"";return(i.record.timestamp??"").localeCompare(u)}),n}function aE(r,e){localStorage.removeItem(gi(r,e))}function sE(r){try{const e=localStorage.getItem(r);return e===null?null:JSON.parse(e)}catch{return null}}function cE(r,e){localStorage.setItem(r,JSON.stringify(e))}function Ei(r,e){const n={};for(const t of r){const i=Fe(t.id),u=e[i]??t.default_value;n[i]=md(t,u)}return n}const k_="aopt",L_="ui",lE="yours";function Qt(r,e){return`${r}_${e}`}function $i(r,e){return`${lE}_${r}_${e}`}const fE={whose:"yours-plainnum",lastYoursWhose:"yours-plainnum",lastAdhocWhose:"",lastMethoWhose:"",selectedRho:0,exampleFoldState:{},framingFoldState:{},srcquotesInlinedOverride:null,codeRho:0,cparamPinned:{},cparamValues:{},codeSweepMode:"average",codePlotTargetKind:"formula",codePlotFormulaId:"",codePlotRawResponseName:"",modelEffortPinned:!0,modelEffortSweepScope:null,assumptionTrialIndex:0,presetQueryModeFilter:"all"};function C_(r){const e=sr();return{...structuredClone(fE),inputMode:e.inputMode,probAsOdds:e.probAsOdds,symbolMnames:e.symbolMnames,popoverAllRefs:e.popoverAllRefs,persistentPopovers:e.persistentPopovers,showExampleClassification:e.showExampleClassification,showFramingNotes:e.showFramingNotes}}function I_(r,e){const n={},t={};for(const i of r){const u=Fe(i.id);u in e&&(fn(i.id)?t[u]=e[u]:n[u]=e[u])}return{aopts:n,cparam_values:t}}function q_(r,e){const{aopts:n,cparam_values:t}=I_(r.get_options(),e);return{aid:r.aid,label:"",prompt_file_basename:"",aopts:n,cparam_values:t,count:1,trials:[{point:{},bounds:{},sample:{},rho:null}],precomputed:{},raw_input:{},raw_input_noncompute:{}}}function dE(r){const e=Ei(r.get_options(),{}),n=Ln(r.get_options(),e,"plainnum"),t=Ln(r.get_options(),e,"code");return{optionValues:e,plainnumOptionDictKey:n,codeOptionDictKey:t,ui:C_(),yoursRecord:q_(r,e),yoursCodeRecord:R_(r,e)}}function pE(r){if(r==="yours")return"yours-plainnum";const e=r.indexOf(":");if(e===-1)return r;const n=r.slice(0,e),t=r.slice(e);return n==="plainnum"?"metho-plainnum"+t:n==="plaincode"?"metho-plaincode"+t:n==="richcode"?"metho-richcode"+t:r}function M_(r,e){return!e&&r==="yours-plaincode"?"yours-plainnum":r}function hE(r,e,n){const t=ot($i(r.aid,e));return t||q_(r,n)}function vE(r){const e=r.config.localStorage_prefix,n=dE(r),t=ot(Qt(e,k_)),i=t?Ei(r.get_options(),t):n.optionValues,u=Ln(r.get_options(),i,"plainnum"),o=Ln(r.get_options(),i,"code"),a=C_(),c=ot(Qt(e,L_));c&&typeof c.whose=="string"&&(c.whose=pE(c.whose));let s=c?{...a,...c}:{...a};s={...s,whose:M_(s.whose,r.has_cparams())},(s.whose==="yours-plainnum"||s.whose==="yours-plaincode")&&(s={...s,lastYoursWhose:s.whose});const l=nr($e(s.whose).source);l==="adhoc"?s={...s,lastAdhocWhose:s.whose}:l==="metho"&&(s={...s,lastMethoWhose:s.whose}),r.config.rho_correlation_correction||(s={...s,selectedRho:0,codeRho:0});const f=hE(r,u,i),d=oE(r,o,i);return{optionValues:i,plainnumOptionDictKey:u,codeOptionDictKey:o,ui:s,yoursRecord:f,yoursCodeRecord:d}}function Ed(r,e){const n=r.localStorage_prefix;$d(Qt(n,k_),e)}function qe(r,e){const n=r.localStorage_prefix;$d(Qt(n,L_),e)}function N_(r,e,n,t){t.timestamp||(t.timestamp=new Date().toISOString()),t.content_hash=__("plainnum",e,t.aopts,t.cparam_values??{},r.get_trial_choice_aopt_bare_names()),$d($i(r.aid,n),t)}function mE(r,e,n){const{aopts:t,cparam_values:i}=I_(e.get_options(),n);return{...r,aopts:t,cparam_values:i,raw_input:{...r.raw_input??{}},raw_input_noncompute:{...r.raw_input_noncompute??{}},trials:r.trials.map(u=>({point:{...u.point},bounds:{...u.bounds},sample:{...u.sample},rho:u.rho})),timestamp:void 0}}function bE(r,e,n){const t={};for(const i of e.get_aopts()){const u=Fe(i.id);u in n&&(t[u]=n[u])}return{...r,aopts:t,reasoning_response:{...r.reasoning_response},cparam_combos:[],cparam_names:[],verified_code_input:void 0,timestamp:void 0}}function K2(r,e,n,t){const i={...r.optionValues,[n]:t},u=Ln(e.get_options(),i,"plainnum"),o=Ln(e.get_options(),i,"code");let a=r.yoursRecord;u!==r.plainnumOptionDictKey&&(a=ot($i(e.aid,u))??mE(r.yoursRecord,e,i));let c=r.yoursCodeRecord;return o!==r.codeOptionDictKey&&(c=ot(gi(e.aid,o))??bE(r.yoursCodeRecord,e,i)),(u!==r.plainnumOptionDictKey||o!==r.codeOptionDictKey)&&Ed(e.config,i),{optionValues:i,plainnumOptionDictKey:u,codeOptionDictKey:o,ui:r.ui,yoursRecord:a,yoursCodeRecord:c}}function _E(){const r={};for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);r[n]=localStorage.getItem(n)}return r}function gE(r){localStorage.clear();for(const[e,n]of Object.entries(r))localStorage.setItem(e,String(n))}function yE(){const r=new URLSearchParams(window.location.search),e=r.get("_preload");if(!e)return;try{const t=atob(e),i=JSON.parse(t);for(const[u,o]of Object.entries(i))localStorage.setItem(u,String(o))}catch(t){alert(`Failed to load preload state: ${t}`)}r.delete("_preload");const n=r.toString()?`${window.location.pathname}?${r}`:window.location.pathname;history.replaceState(null,"",n)}function ot(r){try{const e=localStorage.getItem(r);return e===null?null:JSON.parse(e)}catch{return null}}function $d(r,e){localStorage.setItem(r,JSON.stringify(e))}const EE=4,$E=3,wE=1e-4,AE=1e4,j2=3;function z2(r){const[e,n]=r.split("e"),t=e.includes(".")?e.replace(/0+$/,"").replace(/\.$/,""):e;return n===void 0?t:`${t}e${n}`}function SE(r){switch(r){case"deterministic":return EE;case"monte-carlo":return $E;default:{const e=r;throw new Error(`Unknown calculation precision: ${String(e)}`)}}}function ei(r,e){if(!Number.isFinite(r))return String(r);if(r===0)return"0";const n=Number(r.toPrecision(e));if(n===0)return"0";const t=Math.abs(n);if(t<wE||t>=AE)return z2(n.toExponential(e-1));const i=Math.floor(Math.log10(t)),u=Math.max(0,e-1-i);return z2(n.toFixed(u))}function RE(r){return Number.isFinite(r)?r>=1?"∞:1":r<=0?"1:∞":r>=.5?`${ei(r/(1-r),j2)}:1`:`1:${ei((1-r)/r,j2)}`:"—"}function Me(r,e,n,t="deterministic"){const i=SE(t);switch(e){case"probability":return n==="odds"?RE(r):ei(r*100,i)+"%";default:return ei(r,i)}}const kE={boolrv:"BoolRV",real:"ℝ",prop:"Prop"},LE=["expr:","form:"],CE=["textchunk:","aopt:","cparam:"],IE=10;function qE(r){const e=new Map;for(const n of r.get_options()){if(hd(n)&&(n.variant_producing||n.trial_choice))continue;const t=F_(n.id);if(r.is_code_mode()&&fn(n.id)){e.set(t,`${K1}${t}:short${j1}`);continue}e.set(t,String(r.option_value(t)))}for(const n of r.get_textchunks()){const t=n.id.startsWith("textchunk:")?n.id.slice(10):n.id;e.set(t,n.defn)}return e}function F_(r){for(const e of CE)if(r.startsWith(e))return r.slice(e.length);return r}function ME(r,e){const n=qE(e);let t=r;for(let i=0;i<IE;i++){const u=t.replace(_y,(o,a)=>{for(const l of LE)if(a.startsWith(l))return o;const c=F_(a),s=n.get(c);if(s===void 0)throw new Error(`Template variable ${i_}${a}${u_} not found in non-variant-producing options or textchunks`);return s});if(u===t)break;t=u}return t.replace(Ay,"$1")}const NE=10;function FE(r,e){const n=new Map;for(const i of r.get_display_expr_keys())n.set(i,r.get_display_expr(i));const t=new Set(r.form.filter(i=>i.show_in.includes(e)).map(i=>i.id));for(const i of r.get_display_form_keys())t.has(i)&&n.set(i,r.get_display_form(i));return n}function OE(r,e){let n=r;for(let t=0;t<NE;t++){const i=n.replace(gy,(u,o)=>{const a=e.get(o);if(a===void 0)throw new Error(`Display ref ${i_}${o}${u_} not found in display.expr or display.form`);return a});if(i===n)break;n=i}return n}const O_="footnotes-container",wd="footnotes-container-calc",DE="calc:";function TE(r,e,n,t=""){return Zt.lastIndex=0,r.replace(Zt,(i,u)=>{e.n++;const o=e.n,a=`${t}${o}`;return n.push({id:a,body:u}),`<sup id="fnref:${a}"><a href="#fn:${a}">${o}</a></sup>`})}function PE(r){return Zt.lastIndex=0,r.replace(Zt,(e,n)=>`(${n})`)}function HE(r,e){return r.filter(n=>e.querySelector(`[href="#fn:${n.id}"]`)!==null)}function D_(r){return r.map(e=>`<li id="fn:${e.id}"><p>${e.body}<a href="#fnref:${e.id}" class="footnote-backref">↩</a></p></li>`).join("")}const xE=2,BE="&nbsp;".repeat(xE),T_="framing-slot",P_="data-framing-anchor";function wi(r,e){return r.jprobInstance.framing_static_anchor_ids().has(e)?`<div class="${T_}" ${P_}="${He(e)}"></div>`:""}const J2="text-paragraph",UE="text-unindented-paragraph",WE="text-blockquote",Z2=/^>[ ]?/,GE="❝",H_="srcquote-widget",Ad="srcquote-glyph",x_="srcquote-popover",VE="srcquote-attribution",XE="srcquotes-inline",YE={atStart:"",atEnd:""};function B_(r,e){return ke(r.defn,e)+`<span class="${VE}">— ${se(r.attribution)}</span>`}function KE(r,e){const n={...e,insidePopoverBody:!0},t=r.map(i=>B_(i,n)).join("");return`<span class="${H_}"><button class="${Ad}" type="button" aria-expanded="false" aria-label="Source quotes">${GE}</button><span class="${x_}" hidden>${t}</span></span>`}function jE(r,e){const n=r.map(t=>B_(t,e));return`<span class="${XE}">${n.join("")}</span>`}function Mr(r,e){if(!r||r.length===0)return YE;const n=e.jprobInstance.resolve_srcquotes(r);return e.srcquotesInlined??!1?{atStart:"",atEnd:jE(n,e)}:{atStart:KE(n,e),atEnd:""}}function ke(r,e){let n=ME(r,e.jprobInstance);const t=FE(e.jprobInstance,"html");n=OE(n,t);const i=JE(e);return n=Fy(n,e.refLookup,i,e.unresolvedRefs),e.insidePopoverBody?n=PE(n):e.footnoteCounter&&e.footnotes&&(n=TE(n,e.footnoteCounter,e.footnotes,e.footnoteIdNamespace)),n=zE(n),n}function zE(r){const e=r.split(/(\n\t)|(\n{2,})/);if(e.length===1)return uu(r,null);let n=uu(e[0],J2);for(let t=1;t<e.length;t+=3){const i=e[t],u=e[t+2];n+=uu(u,i!==void 0?J2:UE)}return n}function uu(r,e){if(!r)return"";const n=[];for(const o of r.split(`
`)){const a=Z2.test(o),c=a?o.replace(Z2,""):o,s=n[n.length-1];s&&s.isQuote===a?s.lines.push(c):n.push({isQuote:a,lines:[c]})}const t=o=>{const a=o.lines.join("<br>");return o.isQuote?`<span class="${WE}">${a}</span>`:a},i=n.length===1?n[0]:void 0;if(i!=null&&i.isQuote)return t(i);const u=n.map(t).join("");return e===null?u:`<span class="${e}">${u}</span>`}function JE(r){if(!r.popoverLookup||!r.footnoteCounter||!r.footnotes||r.insidePopoverBody||!r.popoverAllRefs)return;const e={...r,insidePopoverBody:!0};return{lookup:r.popoverLookup,footnoteCounter:r.footnoteCounter,footnotes:r.footnotes,footnoteIdNamespace:r.footnoteIdNamespace,popoverAllRefs:r.popoverAllRefs??!1,renderBody:n=>ke(n,e)}}function ZE(r,e){const n=e.startsWith("isym:")?e:`isym:${e}`,t=r.isym.find(i=>(i.id.startsWith("isym:")?i.id:`isym:${i.id}`)===n);return(t==null?void 0:t.longname)??e}function QE(r){return r.startsWith("isym:")?r.slice(5):r}function e$(r,e){const n=e.startsWith("isym:")?e:`isym:${e}`,t=r.isym.find(i=>(i.id.startsWith("isym:")?i.id:`isym:${i.id}`)===n);if(!t)throw new Error(`isym_semantics ${n} has no matching isym entry (no kind)`);return t.kind}function r$(r,e){const n=kE[e$(r,e)];let t=`${e} : ${n}`;const i=ZE(r,e);return i&&e!==i&&(t+=`${BE}(aka ${i})`),t}function n$(r){if(!r.args||r.args.length===0)return r.id.slice(11);const e=r.id.slice(11),n=r.args.map(t=>`<i>${typeof t=="string"?t:t.name}</i>`);return`${e}(${n.join(", ")})`}function t$(r){const e=[];for(const n of r.jprobInstance.definedSym){if(n.always_inline)continue;const t=r.jprobInstance.get_display_definedSym_or_none(n.id);if(!t)continue;const u=`defsym-${n.id.slice(11)}`,o=n$(n),a=ke(t,r),s=[`<h3>${`${o} ≔ ${a}`}</h3>`],l=Mr(n.srcquotes,r);n.defn?s.push(`<p class="definition">${l.atStart}${ke(n.defn,r)}${l.atEnd}</p>`):(l.atStart||l.atEnd)&&s.push(`<p class="definition">${l.atStart}${l.atEnd}</p>`),s.push(wi(r,n.id)),e.push(`<div class="defsym-card" id="${u}">${s.join("")}</div>`)}return e.join("")}function i$(r){const e=vd(r.jprobInstance);if(!e.length)return"";const n=[];for(const t of e){const i=Mr(r.jprobInstance.get_textdefn(t.id).srcquotes,r);n.push(`<dt id="${t.anchorId}">${t.displayTerm}</dt><dd>${i.atStart}${ke(t.defn,r)}${i.atEnd}${wi(r,`textdefn:${t.bareName}`)}</dd>`)}return`<dl class="definitions">${n.join("")}</dl>`}function u$(r){var t;const e=r.jprobInstance.isym_semantics;if(!e.length)return"";const n=[];for(const i of e){const u=QE(i.id.replace(/^interp:/,""));if(r.jprobInstance.can_consolidate_isym_svar(`isym:${u}`))continue;const o=[];o.push(`<h3>${r$(r.jprobInstance,u)}</h3>`);const a=Mr(i.srcquotes,r);o.push(`<p class="definition">${a.atStart}${ke(i.defn,r)}${a.atEnd}</p>`);const c=(i.pos??[]).filter(h=>X2(h.classification,r.showTypical)),s=(i.neg??[]).filter(h=>X2(h.classification,r.showTypical)),l=(t=r.exampleFoldState)==null?void 0:t[u],f=(l==null?void 0:l.pos)??!1,d=(l==null?void 0:l.neg)??!1;if(c.length>0||s.length>0){const h=[];c.length>0&&h.push(`<button class="ex-btn pos${f?" active":""}" data-isym="${u}" data-type="pos" title="Satisfying examples">+</button>`),s.length>0&&h.push(`<button class="ex-btn neg${d?" active":""}" data-isym="${u}" data-type="neg" title="Falsifying examples">&minus;</button>`),o.push(`<div class="example-controls">${h.join("")}</div>`)}if(c.length>0){const h=c.map(p=>{const v=p.alias?` id="ex-${p.alias}"`:"",m=r.showExampleClassification?`<span class="classification">${p.classification.charAt(0).toUpperCase()+p.classification.slice(1)}:</span> `:"",b=Mr(p.srcquotes,r);return`<li${v}>${m}${b.atStart}${ke(p.defn,r)}${b.atEnd}</li>`});o.push(`<div class="examples pos${f?" visible":""}"><p>Satisfying examples:</p><ul>${h.join("")}</ul></div>`)}if(s.length>0){const h=s.map(p=>{const v=p.alias?` id="ex-${p.alias}"`:"",m=r.showExampleClassification?`<span class="classification">${p.classification.charAt(0).toUpperCase()+p.classification.slice(1)}:</span> `:"",b=Mr(p.srcquotes,r);return`<li${v}>${m}${b.atStart}${ke(p.defn,r)}${b.atEnd}</li>`});o.push(`<div class="examples neg${d?" visible":""}"><p>Falsifying examples:</p><ul>${h.join("")}</ul></div>`)}o.push(wi(r,`isym:${u}`)),n.push(`<div class="isym-card" id="isym-${u}">${o.join("")}</div>`)}return n.join("")}function o$(r){const e=[],n=r.jprobInstance.ax.fixed;let t=0;for(const i of n){const u=r.jprobInstance.get_display_ax_fixed(i.id);if(!u)continue;t++;const o=i.defn?`<div class="fixed-ax-defn">${ke(i.defn,r)}</div>`:"",a=wi(r,i.id),c=Mr(i.srcquotes,r);e.push(`<li id="fixed-ax-${t}">${c.atStart}${ke(u,r)}${o}${c.atEnd}${a}</li>`)}return e.length===0?"":`<ol class="fixed-assumptions">${e.join("")}</ol>`}function a$(r){const e=[],n=o_(r.jprobInstance);for(const t of r.jprobInstance.form){const i=n.get(t.id);if(i===void 0)continue;const u=r.jprobInstance.get_display_form(t.id);if(!u)continue;const o=t.id.startsWith("form:")?t.id.slice(5):t.id;e.push(`<div class="formula" id="form-${o}">(${i}) ${ke(u,r)}</div>`)}return e.join("")}function Nr(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}/**
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
*/var ou,Q2;function s$(){if(Q2)return ou;Q2=1;var r=typeof Object.defineProperty=="function"?Object.defineProperty:null;return ou=r,ou}/**
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
*/var au,ep;function c$(){if(ep)return au;ep=1;var r=s$();function e(){try{return r({},"x",{}),!0}catch{return!1}}return au=e,au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su,rp;function l$(){if(rp)return su;rp=1;var r=Object.defineProperty;return su=r,su}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cu,np;function U_(){if(np)return cu;np=1;function r(e){return typeof e=="number"}return cu=r,cu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,tp;function W_(){if(tp)return lu;tp=1;function r(t){return t[0]==="-"}function e(t){var i="",u;for(u=0;u<t;u++)i+="0";return i}function n(t,i,u){var o=!1,a=i-t.length;return a<0||(r(t)&&(o=!0,t=t.substr(1)),t=u?t+e(a):e(a)+t,o&&(t="-"+t)),t}return lu=n,lu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu,ip;function f$(){if(ip)return fu;ip=1;var r=U_(),e=W_(),n=String.prototype.toLowerCase,t=String.prototype.toUpperCase;function i(u){var o,a,c;switch(u.specifier){case"b":o=2;break;case"o":o=8;break;case"x":case"X":o=16;break;case"d":case"i":case"u":default:o=10;break}if(a=u.arg,c=parseInt(a,10),!isFinite(c)){if(!r(a))throw new Error("invalid integer. Value: "+a);c=0}return c<0&&(u.specifier==="u"||o!==10)&&(c=4294967295+c+1),c<0?(a=(-c).toString(o),u.precision&&(a=e(a,u.precision,u.padRight)),a="-"+a):(a=c.toString(o),!c&&!u.precision?a="":u.precision&&(a=e(a,u.precision,u.padRight)),u.sign&&(a=u.sign+a)),o===16&&(u.alternate&&(a="0x"+a),a=u.specifier===t.call(u.specifier)?t.call(a):n.call(a)),o===8&&u.alternate&&a.charAt(0)!=="0"&&(a="0"+a),a}return fu=i,fu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var du,up;function d$(){if(up)return du;up=1;function r(e){return typeof e=="string"}return du=r,du}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pu,op;function p$(){if(op)return pu;op=1;var r=Math.abs,e=String.prototype.toLowerCase,n=String.prototype.toUpperCase,t=String.prototype.replace,i=/e\+(\d)$/,u=/e-(\d)$/,o=/^(\d+)$/,a=/^(\d+)e/,c=/\.0$/,s=/\.0*e/,l=/(\..*[^0])0*e/;function f(d,h){var p,v;switch(h.specifier){case"e":case"E":v=d.toExponential(h.precision);break;case"f":case"F":v=d.toFixed(h.precision);break;case"g":case"G":r(d)<1e-4?(p=h.precision,p>0&&(p-=1),v=d.toExponential(p)):v=d.toPrecision(h.precision),h.alternate||(v=t.call(v,l,"$1e"),v=t.call(v,s,"e"),v=t.call(v,c,""));break;default:throw new Error("invalid double notation. Value: "+h.specifier)}return v=t.call(v,i,"e+0$1"),v=t.call(v,u,"e-0$1"),h.alternate&&(v=t.call(v,o,"$1."),v=t.call(v,a,"$1.e")),d>=0&&h.sign&&(v=h.sign+v),v=h.specifier===n.call(h.specifier)?n.call(v):e.call(v),v}return pu=f,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hu,ap;function h$(){if(ap)return hu;ap=1;function r(n){var t="",i;for(i=0;i<n;i++)t+=" ";return t}function e(n,t,i){var u=t-n.length;return u<0||(n=i?n+r(u):r(u)+n),n}return hu=e,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,sp;function v$(){if(sp)return vu;sp=1;var r=f$(),e=d$(),n=U_(),t=p$(),i=h$(),u=W_(),o=String.fromCharCode,a=Array.isArray;function c(f){return f!==f}function s(f){var d={};return d.specifier=f.specifier,d.precision=f.precision===void 0?1:f.precision,d.width=f.width,d.flags=f.flags||"",d.mapping=f.mapping,d}function l(f){var d,h,p,v,m,b,g,y,_,$;if(!a(f))throw new TypeError("invalid argument. First argument must be an array. Value: `"+f+"`.");for(b="",g=1,_=0;_<f.length;_++)if(p=f[_],e(p))b+=p;else{if(d=p.precision!==void 0,p=s(p),!p.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+_+"`. Value: `"+p+"`.");for(p.mapping&&(g=p.mapping),h=p.flags,$=0;$<h.length;$++)switch(v=h.charAt($),v){case" ":p.sign=" ";break;case"+":p.sign="+";break;case"-":p.padRight=!0,p.padZeros=!1;break;case"0":p.padZeros=h.indexOf("-")<0;break;case"#":p.alternate=!0;break;default:throw new Error("invalid flag: "+v)}if(p.width==="*"){if(p.width=parseInt(arguments[g],10),g+=1,c(p.width))throw new TypeError("the argument for * width at position "+g+" is not a number. Value: `"+p.width+"`.");p.width<0&&(p.padRight=!0,p.width=-p.width)}if(d&&p.precision==="*"){if(p.precision=parseInt(arguments[g],10),g+=1,c(p.precision))throw new TypeError("the argument for * precision at position "+g+" is not a number. Value: `"+p.precision+"`.");p.precision<0&&(p.precision=1,d=!1)}switch(p.arg=arguments[g],p.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":d&&(p.padZeros=!1),p.arg=r(p);break;case"s":p.maxWidth=d?p.precision:-1,p.arg=String(p.arg);break;case"c":if(!c(p.arg)){if(m=parseInt(p.arg,10),m<0||m>127)throw new Error("invalid character code. Value: "+p.arg);p.arg=c(m)?String(p.arg):o(m)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(d||(p.precision=6),y=parseFloat(p.arg),!isFinite(y)){if(!n(p.arg))throw new Error("invalid floating-point number. Value: "+b);y=p.arg,p.padZeros=!1}p.arg=t(y,p);break;default:throw new Error("invalid specifier: "+p.specifier)}p.maxWidth>=0&&p.arg.length>p.maxWidth&&(p.arg=p.arg.substring(0,p.maxWidth)),p.padZeros?p.arg=u(p.arg,p.width||p.precision,p.padRight):p.width&&(p.arg=i(p.arg,p.width,p.padRight)),b+=p.arg||"",g+=1}return b}return vu=l,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mu,cp;function m$(){if(cp)return mu;cp=1;var r=v$();return mu=r,mu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bu,lp;function b$(){if(lp)return bu;lp=1;var r=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function e(t){var i={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return t[4]==="."&&t[5]===void 0&&(i.precision="1"),i}function n(t){var i,u,o,a;for(u=[],a=0,o=r.exec(t);o;)i=t.slice(a,r.lastIndex-o[0].length),i.length&&u.push(i),o[6]==="%"?u.push("%"):u.push(e(o)),a=r.lastIndex,o=r.exec(t);return i=t.slice(a),i.length&&u.push(i),u}return bu=n,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u,fp;function _$(){if(fp)return _u;fp=1;var r=b$();return _u=r,_u}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gu,dp;function g$(){if(dp)return gu;dp=1;function r(e){return typeof e=="string"}return gu=r,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yu,pp;function y$(){if(pp)return yu;pp=1;var r=m$(),e=_$(),n=g$();function t(i){var u,o;if(!n(i))throw new TypeError(t("invalid argument. First argument must be a string. Value: `%s`.",i));for(u=[e(i)],o=1;o<arguments.length;o++)u.push(arguments[o]);return r.apply(null,u)}return yu=t,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu,hp;function E$(){if(hp)return Eu;hp=1;var r=y$();return Eu=r,Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $u,vp;function $$(){if(vp)return $u;vp=1;var r=E$(),e=Object.prototype,n=e.toString,t=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,o=e.__lookupSetter__;function a(c,s,l){var f,d,h,p;if(typeof c!="object"||c===null||n.call(c)==="[object Array]")throw new TypeError(r("invalid argument. First argument must be an object. Value: `%s`.",c));if(typeof l!="object"||l===null||n.call(l)==="[object Array]")throw new TypeError(r("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if(d="value"in l,d&&(u.call(c,s)||o.call(c,s)?(f=c.__proto__,c.__proto__=e,delete c[s],c[s]=l.value,c.__proto__=f):c[s]=l.value),h="get"in l,p="set"in l,d&&(h||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return h&&t&&t.call(c,s,l.get),p&&i&&i.call(c,s,l.set),c}return $u=a,$u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wu,mp;function w$(){if(mp)return wu;mp=1;var r=c$(),e=l$(),n=$$(),t;return r()?t=e:t=n,wu=t,wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Au,bp;function A$(){if(bp)return Au;bp=1;var r=w$();function e(n,t,i){r(n,t,{configurable:!1,enumerable:!1,writable:!1,value:i})}return Au=e,Au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Su,_p;function Qe(){if(_p)return Su;_p=1;var r=A$();return Su=r,Su}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ru,gp;function S$(){if(gp)return Ru;gp=1;function r(e){return e!==e}return Ru=r,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ku,yp;function ue(){if(yp)return ku;yp=1;var r=S$();return ku=r,ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lu,Ep;function R$(){if(Ep)return Lu;Ep=1;function r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return Lu=r,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cu,$p;function k$(){if($p)return Cu;$p=1;var r=R$();return Cu=r,Cu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu,wp;function L$(){if(wp)return Iu;wp=1;var r=k$(),e=r();function n(){return e&&typeof Symbol.toStringTag=="symbol"}return Iu=n,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qu,Ap;function C$(){if(Ap)return qu;Ap=1;var r=L$();return qu=r,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mu,Sp;function G_(){if(Sp)return Mu;Sp=1;var r=Object.prototype.toString;return Mu=r,Mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu,Rp;function I$(){if(Rp)return Nu;Rp=1;var r=G_();function e(n){return r.call(n)}return Nu=e,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fu,kp;function q$(){if(kp)return Fu;kp=1;var r=Object.prototype.hasOwnProperty;function e(n,t){return n==null?!1:r.call(n,t)}return Fu=e,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ou,Lp;function M$(){if(Lp)return Ou;Lp=1;var r=q$();return Ou=r,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Du,Cp;function N$(){if(Cp)return Du;Cp=1;var r=typeof Symbol=="function"?Symbol:void 0;return Du=r,Du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tu,Ip;function F$(){if(Ip)return Tu;Ip=1;var r=N$();return Tu=r,Tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pu,qp;function O$(){if(qp)return Pu;qp=1;var r=F$(),e=typeof r=="function"?r.toStringTag:"";return Pu=e,Pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu,Mp;function D$(){if(Mp)return Hu;Mp=1;var r=M$(),e=O$(),n=G_();function t(i){var u,o,a;if(i==null)return n.call(i);o=i[e],u=r(i,e);try{i[e]=void 0}catch{return n.call(i)}return a=n.call(i),u?i[e]=o:delete i[e],a}return Hu=t,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu,Np;function Ai(){if(Np)return xu;Np=1;var r=C$(),e=I$(),n=D$(),t;return r()?t=n:t=e,xu=t,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bu,Fp;function T$(){if(Fp)return Bu;Fp=1;var r=Ai(),e=typeof Uint32Array=="function";function n(t){return e&&t instanceof Uint32Array||r(t)==="[object Uint32Array]"}return Bu=n,Bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,Op;function P$(){if(Op)return Uu;Op=1;var r=T$();return Uu=r,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,Dp;function H$(){if(Dp)return Wu;Dp=1;var r=4294967295;return Wu=r,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu,Tp;function x$(){if(Tp)return Gu;Tp=1;var r=typeof Uint32Array=="function"?Uint32Array:null;return Gu=r,Gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vu,Pp;function B$(){if(Pp)return Vu;Pp=1;var r=P$(),e=H$(),n=x$();function t(){var i,u;if(typeof n!="function")return!1;try{u=[1,3.14,-3.14,e+1,e+2],u=new n(u),i=r(u)&&u[0]===1&&u[1]===3&&u[2]===e-2&&u[3]===0&&u[4]===1}catch{i=!1}return i}return Vu=t,Vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,Hp;function U$(){if(Hp)return Xu;Hp=1;var r=B$();return Xu=r,Xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yu,xp;function W$(){if(xp)return Yu;xp=1;var r=typeof Uint32Array=="function"?Uint32Array:void 0;return Yu=r,Yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,Bp;function G$(){if(Bp)return Ku;Bp=1;function r(){throw new Error("not implemented")}return Ku=r,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,Up;function Mn(){if(Up)return ju;Up=1;var r=U$(),e=W$(),n=G$(),t;return r()?t=e:t=n,ju=t,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,Wp;function V$(){if(Wp)return zu;Wp=1;var r=Ai(),e=typeof Float64Array=="function";function n(t){return e&&t instanceof Float64Array||r(t)==="[object Float64Array]"}return zu=n,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ju,Gp;function X$(){if(Gp)return Ju;Gp=1;var r=V$();return Ju=r,Ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,Vp;function Y$(){if(Vp)return Zu;Vp=1;var r=typeof Float64Array=="function"?Float64Array:null;return Zu=r,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,Xp;function K$(){if(Xp)return Qu;Xp=1;var r=X$(),e=Y$();function n(){var t,i;if(typeof e!="function")return!1;try{i=new e([1,3.14,-3.14,NaN]),t=r(i)&&i[0]===1&&i[1]===3.14&&i[2]===-3.14&&i[3]!==i[3]}catch{t=!1}return t}return Qu=n,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eo,Yp;function j$(){if(Yp)return eo;Yp=1;var r=K$();return eo=r,eo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ro,Kp;function z$(){if(Kp)return ro;Kp=1;var r=typeof Float64Array=="function"?Float64Array:void 0;return ro=r,ro}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var no,jp;function J$(){if(jp)return no;jp=1;function r(){throw new Error("not implemented")}return no=r,no}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var to,zp;function Nn(){if(zp)return to;zp=1;var r=j$(),e=z$(),n=J$(),t;return r()?t=e:t=n,to=t,to}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var io,Jp;function Z$(){if(Jp)return io;Jp=1;var r=Ai(),e=typeof Uint8Array=="function";function n(t){return e&&t instanceof Uint8Array||r(t)==="[object Uint8Array]"}return io=n,io}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uo,Zp;function Q$(){if(Zp)return uo;Zp=1;var r=Z$();return uo=r,uo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oo,Qp;function ew(){if(Qp)return oo;Qp=1;var r=255;return oo=r,oo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ao,e3;function rw(){if(e3)return ao;e3=1;var r=typeof Uint8Array=="function"?Uint8Array:null;return ao=r,ao}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var so,r3;function nw(){if(r3)return so;r3=1;var r=Q$(),e=ew(),n=rw();function t(){var i,u;if(typeof n!="function")return!1;try{u=[1,3.14,-3.14,e+1,e+2],u=new n(u),i=r(u)&&u[0]===1&&u[1]===3&&u[2]===e-2&&u[3]===0&&u[4]===1}catch{i=!1}return i}return so=t,so}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var co,n3;function tw(){if(n3)return co;n3=1;var r=nw();return co=r,co}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lo,t3;function iw(){if(t3)return lo;t3=1;var r=typeof Uint8Array=="function"?Uint8Array:void 0;return lo=r,lo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fo,i3;function uw(){if(i3)return fo;i3=1;function r(){throw new Error("not implemented")}return fo=r,fo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var po,u3;function ow(){if(u3)return po;u3=1;var r=tw(),e=iw(),n=uw(),t;return r()?t=e:t=n,po=t,po}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ho,o3;function aw(){if(o3)return ho;o3=1;var r=Ai(),e=typeof Uint16Array=="function";function n(t){return e&&t instanceof Uint16Array||r(t)==="[object Uint16Array]"}return ho=n,ho}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vo,a3;function sw(){if(a3)return vo;a3=1;var r=aw();return vo=r,vo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mo,s3;function cw(){if(s3)return mo;s3=1;var r=65535;return mo=r,mo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bo,c3;function lw(){if(c3)return bo;c3=1;var r=typeof Uint16Array=="function"?Uint16Array:null;return bo=r,bo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _o,l3;function fw(){if(l3)return _o;l3=1;var r=sw(),e=cw(),n=lw();function t(){var i,u;if(typeof n!="function")return!1;try{u=[1,3.14,-3.14,e+1,e+2],u=new n(u),i=r(u)&&u[0]===1&&u[1]===3&&u[2]===e-2&&u[3]===0&&u[4]===1}catch{i=!1}return i}return _o=t,_o}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var go,f3;function dw(){if(f3)return go;f3=1;var r=fw();return go=r,go}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yo,d3;function pw(){if(d3)return yo;d3=1;var r=typeof Uint16Array=="function"?Uint16Array:void 0;return yo=r,yo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eo,p3;function hw(){if(p3)return Eo;p3=1;function r(){throw new Error("not implemented")}return Eo=r,Eo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $o,h3;function vw(){if(h3)return $o;h3=1;var r=dw(),e=pw(),n=hw(),t;return r()?t=e:t=n,$o=t,$o}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wo,v3;function mw(){if(v3)return wo;v3=1;var r=ow(),e=vw(),n={uint16:e,uint8:r};return wo=n,wo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ao,m3;function bw(){if(m3)return Ao;m3=1;var r=mw(),e;function n(){var t,i;return t=new r.uint16(1),t[0]=4660,i=new r.uint8(t.buffer),i[0]===52}return e=n(),Ao=e,Ao}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var So,b3;function Fn(){if(b3)return So;b3=1;var r=bw();return So=r,So}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ro,_3;function _w(){if(_3)return Ro;_3=1;var r=Fn(),e;return r===!0?e=1:e=0,Ro=e,Ro}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ko,g3;function gw(){if(g3)return ko;g3=1;var r=Mn(),e=Nn(),n=_w(),t=new e(1),i=new r(t.buffer);function u(o){return t[0]=o,i[n]}return ko=u,ko}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lo,y3;function dr(){if(y3)return Lo;y3=1;var r=gw();return Lo=r,Lo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Co,E3;function yw(){if(E3)return Co;E3=1;var r=Fn(),e;return r===!0?e=1:e=0,Co=e,Co}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Io,$3;function Ew(){if($3)return Io;$3=1;var r=Mn(),e=Nn(),n=yw(),t=new e(1),i=new r(t.buffer);function u(o,a){return t[0]=o,i[n]=a>>>0,t[0]}return Io=u,Io}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qo,w3;function _t(){if(w3)return qo;w3=1;var r=Ew();return qo=r,qo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mo,A3;function $w(){if(A3)return Mo;A3=1;var r=Fn(),e,n,t;return r===!0?(n=1,t=0):(n=0,t=1),e={HIGH:n,LOW:t},Mo=e,Mo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var No,S3;function ww(){if(S3)return No;S3=1;var r=Mn(),e=Nn(),n=$w(),t=new e(1),i=new r(t.buffer),u=n.HIGH,o=n.LOW;function a(c,s){return i[u]=c,i[o]=s,t[0]}return No=a,No}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fo,R3;function Si(){if(R3)return Fo;R3=1;var r=ww();return Fo=r,Fo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oo,k3;function Le(){if(k3)return Oo;k3=1;var r=Number.POSITIVE_INFINITY;return Oo=r,Oo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Do,L3;function Aw(){return L3||(L3=1,Do=Number),Do}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var To,C3;function Sw(){if(C3)return To;C3=1;var r=Aw();return To=r,To}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Po,I3;function er(){if(I3)return Po;I3=1;var r=Sw(),e=r.NEGATIVE_INFINITY;return Po=e,Po}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ho,q3;function hn(){if(q3)return Ho;q3=1;var r=1023;return Ho=r,Ho}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xo,M3;function Rw(){if(M3)return xo;M3=1;var r=.34657359027997264;return xo=r,xo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bo,N3;function kw(){if(N3)return Bo;N3=1;function r(e){return e===0?-.03333333333333313:-.03333333333333313+e*(.0015873015872548146+e*(-793650757867488e-19+e*(4008217827329362e-21+e*-20109921818362437e-23)))}return Bo=r,Bo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Uo,F3;function Lw(){if(F3)return Uo;F3=1;var r=ue(),e=dr(),n=_t(),t=Si(),i=Le(),u=er(),o=hn(),a=Rw(),c=kw(),s=709.782712893384,l=.6931471803691238,f=19082149292705877e-26,d=1.4426950408889634,h=38.816242111356935,p=1.0397207708399179;function v(m){var b,g,y,_,$,L,S,q,k,w,E,A,R;if(m===i||r(m))return m;if(m===u)return-1;if(m===0)return m;if(m<0?(y=!0,q=-m):(y=!1,q=m),q>=h){if(y)return-1;if(q>=s)return i}if(L=e(q)|0,q>a)q<p?y?(_=m+l,$=-f,R=-1):(_=m-l,$=f,R=1):(y?R=d*m-.5:R=d*m+.5,R|=0,E=R,_=m-E*l,$=E*f),m=_-$,w=_-m-$;else{if(L<1016070144)return m;R=0}return b=.5*m,k=m*b,S=1+k*c(k),E=3-S*b,A=k*((S-E)/(6-m*E)),R===0?m-(m*A-k):(g=t(o+R<<20,0),A=m*(A-w)-w,A-=k,R===-1?.5*(m-A)-.5:R===1?m<-.25?-2*(A-(m+.5)):1+2*(m-A):R<=-2||R>56?(q=1-(A-m),R===1024?(_=e(q)+(R<<20)|0,q=n(q,_)):q*=g,q-1):(E=1,R<20?(_=1072693248-(2097152>>R)|0,E=n(E,_),q=E-(A-m)):(_=o-R<<20|0,E=n(E,_),q=m-(A+E),q+=1),q*=g,q))}return Uo=v,Uo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wo,O3;function On(){if(O3)return Wo;O3=1;var r=Lw();return Wo=r,Wo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Go,D3;function Cw(){if(D3)return Go;D3=1;var r=Math.floor;return Go=r,Go}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vo,T3;function Fr(){if(T3)return Vo;T3=1;var r=Cw();return Vo=r,Vo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xo,P3;function Iw(){if(P3)return Xo;P3=1;function r(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}return Xo=r,Xo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Yo,H3;function qw(){if(H3)return Yo;H3=1;var r=ue(),e=dr(),n=_t(),t=Le(),i=er(),u=hn(),o=Iw(),a=.6931471803691238,c=19082149292705877e-26,s=.41421356237309503,l=-.2928932188134525,f=1862645149230957e-24,d=5551115123125783e-32,h=9007199254740992,p=.6666666666666666;function v(m){var b,g,y,_,$,L,S,q,k,w;if(m<-1||r(m))return NaN;if(m===-1)return i;if(m===t||m===0)return m;if(m<0?y=-m:y=m,w=1,y<s){if(y<f)return y<d?m:m-m*m*.5;m>l&&(w=0,_=m,g=1)}return w!==0&&(y<h?(k=1+m,g=e(k),w=(g>>20)-u,w>0?$=1-(k-m):$=m-(k-1),$/=k):(k=m,g=e(k),w=(g>>20)-u,$=0),g&=1048575,g<434334?k=n(k,g|1072693248):(w+=1,k=n(k,g|1071644672),g=1048576-g>>2),_=k-1),b=.5*_*_,g===0?_===0?($+=w*c,w*a+$):(q=b*(1-p*_),w*a-(q-(w*c+$)-_)):(L=_/(2+_),S=L*L,q=S*o(S),w===0?_-(b-L*(b+q)):w*a-(b-(L*(b+q)+(w*c+$))-_))}return Yo=v,Yo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ko,x3;function pr(){if(x3)return Ko;x3=1;var r=qw();return Ko=r,Ko}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jo,B3;function Mw(){if(B3)return jo;B3=1;var r=Math.sqrt;return jo=r,jo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zo,U3;function _e(){if(U3)return zo;U3=1;var r=Mw();return zo=r,zo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jo,W3;function V_(){if(W3)return Jo;W3=1;var r=.7853981633974483;return Jo=r,Jo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zo,G3;function Nw(){if(G3)return Zo;G3=1;function r(e){var n,t,i;return e===0?.16666666666666713:(e<0?n=-e:n=e,n<=1?(t=-8.198089802484825+e*(19.562619833175948+e*(-16.262479672107002+e*(5.444622390564711+e*(-.6019598008014124+e*.004253011369004428)))),i=-49.18853881490881+e*(139.51056146574857+e*(-147.1791292232726+e*(70.49610280856842+e*(-14.740913729888538+e*1))))):(e=1/e,t=.004253011369004428+e*(-.6019598008014124+e*(5.444622390564711+e*(-16.262479672107002+e*(19.562619833175948+e*-8.198089802484825)))),i=1+e*(-14.740913729888538+e*(70.49610280856842+e*(-147.1791292232726+e*(139.51056146574857+e*-49.18853881490881))))),t/i)}return Zo=r,Zo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qo,V3;function Fw(){if(V3)return Qo;V3=1;function r(e){var n,t,i;return e===0?.08333333333333809:(e<0?n=-e:n=e,n<=1?(t=28.536655482610616+e*(-25.56901049652825+e*(6.968710824104713+e*(-.5634242780008963+e*.002967721961301243))),i=342.43986579130785+e*(-383.8770957603691+e*(147.0656354026815+e*(-21.947795316429207+e*1)))):(e=1/e,t=.002967721961301243+e*(-.5634242780008963+e*(6.968710824104713+e*(-25.56901049652825+e*28.536655482610616))),i=1+e*(-21.947795316429207+e*(147.0656354026815+e*(-383.8770957603691+e*342.43986579130785)))),t/i)}return Qo=r,Qo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ea,X3;function Ow(){if(X3)return ea;X3=1;var r=ue(),e=_e(),n=V_(),t=Nw(),i=Fw(),u=6123233995736766e-32;function o(a){var c,s,l,f,d;if(r(a))return NaN;if(a>0?l=a:(c=!0,l=-a),l>1)return NaN;if(l>.625)s=1-l,f=s*i(s),s=e(s+s),d=n-s,s=s*f-u,d-=s,d+=n;else{if(l<1e-8)return a;s=l*l,d=s*t(s),d=l*d+l}return c?-d:d}return ea=o,ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ra,Y3;function Sd(){if(Y3)return ra;Y3=1;var r=Ow();return ra=r,ra}/**
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
*/var na,K3;function Dw(){if(K3)return na;K3=1;function r(e){return Math.abs(e)}return na=r,na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ta,j3;function ge(){if(j3)return ta;j3=1;var r=Dw();return ta=r,ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ia,z3;function Tw(){if(z3)return ia;z3=1;var r=Math.ceil;return ia=r,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua,J3;function Pw(){if(J3)return ua;J3=1;var r=Tw();return ua=r,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oa,Z3;function Hw(){if(Z3)return oa;Z3=1;var r=Fr(),e=Pw();function n(t){return t<0?e(t):r(t)}return oa=n,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aa,Q3;function Rd(){if(Q3)return aa;Q3=1;var r=Hw();return aa=r,aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,eh;function xw(){if(eh)return sa;eh=1;var r=1023;return sa=r,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,rh;function Bw(){if(rh)return ca;rh=1;var r=-1023;return ca=r,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,nh;function Uw(){if(nh)return la;nh=1;var r=-1074;return la=r,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,th;function Ww(){if(th)return fa;th=1;var r=Le(),e=er();function n(t){return t===r||t===e}return fa=n,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,ih;function Dn(){if(ih)return da;ih=1;var r=Ww();return da=r,da}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pa,uh;function Gw(){if(uh)return pa;uh=1;var r=2147483648;return pa=r,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ha,oh;function vn(){if(oh)return ha;oh=1;var r=2147483647;return ha=r,ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,ah;function Vw(){if(ah)return va;ah=1;var r=Fn(),e,n,t;return r===!0?(n=1,t=0):(n=0,t=1),e={HIGH:n,LOW:t},va=e,va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ma,sh;function X_(){if(sh)return ma;sh=1;var r=Mn(),e=Nn(),n=Vw(),t=new e(1),i=new r(t.buffer),u=n.HIGH,o=n.LOW;function a(c,s,l,f){return t[0]=c,s[f]=i[u],s[f+l]=i[o],s}return ma=a,ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,ch;function Xw(){if(ch)return ba;ch=1;var r=X_();function e(n){return r(n,[0,0],1,0)}return ba=e,ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,lh;function kd(){if(lh)return _a;lh=1;var r=Qe(),e=Xw(),n=X_();return r(e,"assign",n),_a=e,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ga,fh;function Yw(){if(fh)return ga;fh=1;var r=Gw(),e=vn(),n=kd(),t=dr(),i=Si(),u=[0,0];function o(a,c){var s,l;return n.assign(a,u,1,0),s=u[0],s&=e,l=t(c),l&=r,s|=l,i(s,u[1])}return ga=o,ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ya,dh;function Ld(){if(dh)return ya;dh=1;var r=Yw();return ya=r,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,ph;function mn(){if(ph)return Ea;ph=1;var r=22250738585072014e-324;return Ea=r,Ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $a,hh;function Y_(){if(hh)return $a;hh=1;var r=mn(),e=Dn(),n=ue(),t=ge(),i=4503599627370496;function u(o,a,c,s){return n(o)||e(o)?(a[s]=o,a[s+c]=0,a):o!==0&&t(o)<r?(a[s]=o*i,a[s+c]=-52,a):(a[s]=o,a[s+c]=0,a)}return $a=u,$a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,vh;function Kw(){if(vh)return wa;vh=1;var r=Y_();function e(n){return r(n,[0,0],1,0)}return wa=e,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aa,mh;function jw(){if(mh)return Aa;mh=1;var r=Qe(),e=Kw(),n=Y_();return r(e,"assign",n),Aa=e,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sa,bh;function Ri(){if(bh)return Sa;bh=1;var r=2146435072;return Sa=r,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,_h;function zw(){if(_h)return Ra;_h=1;var r=dr(),e=Ri(),n=hn();function t(i){var u=r(i);return u=(u&e)>>>20,u-n|0}return Ra=t,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,gh;function Jw(){if(gh)return ka;gh=1;var r=zw();return ka=r,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,yh;function Zw(){if(yh)return La;yh=1;var r=Le(),e=er(),n=hn(),t=xw(),i=Bw(),u=Uw(),o=ue(),a=Dn(),c=Ld(),s=jw().assign,l=Jw(),f=kd(),d=Si(),h=2220446049250313e-31,p=2148532223,v=[0,0],m=[0,0];function b(g,y){var _,$;return y===0||g===0||o(g)||a(g)?g:(s(g,v,1,0),g=v[0],y+=v[1],y+=l(g),y<u?c(0,g):y>t?g<0?e:r:(y<=i?(y+=52,$=h):$=1,f.assign(g,m,1,0),_=m[0],_&=p,_|=y+n<<20,$*d(_,m[1])))}return La=b,La}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ca,Eh;function Tn(){if(Eh)return Ca;Eh=1;var r=Zw();return Ca=r,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,$h;function Qw(){if($h)return Ia;$h=1;function r(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return Ia=r,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var qa,wh;function eA(){if(wh)return qa;wh=1;var r=Tn(),e=Qw();function n(t,i,u){var o,a,c,s;return o=t-i,a=o*o,c=o-a*e(a),s=1-(i-o*c/(2-c)-t),r(s,u)}return qa=n,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ma,Ah;function rA(){if(Ah)return Ma;Ah=1;var r=ue(),e=Rd(),n=er(),t=Le(),i=eA(),u=.6931471803691238,o=19082149292705877e-26,a=1.4426950408889634,c=709.782712893384,s=-745.1332191019411,l=1/(1<<28),f=-l;function d(h){var p,v,m;return r(h)||h===t?h:h===n?0:h>c?t:h<s?0:h>f&&h<l?1+h:(h<0?m=e(a*h-.5):m=e(a*h+.5),p=h-m*u,v=m*o,i(p,v,m))}return Ma=d,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Na,Sh;function Ce(){if(Sh)return Na;Sh=1;var r=rA();return Na=r,Na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,Rh;function nA(){if(Rh)return Fa;Rh=1;var r=Fr();function e(n){return r(n)===n}return Fa=e,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oa,kh;function Pn(){if(kh)return Oa;kh=1;var r=nA();return Oa=r,Oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,Lh;function tA(){if(Lh)return Da;Lh=1;var r=Pn();function e(n){return r(n/2)}return Da=e,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ta,Ch;function iA(){if(Ch)return Ta;Ch=1;var r=tA();return Ta=r,Ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,Ih;function uA(){if(Ih)return Pa;Ih=1;var r=iA();function e(n){return n>0?r(n-1):r(n+1)}return Pa=e,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,qh;function Cd(){if(qh)return Ha;qh=1;var r=uA();return Ha=r,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xa,Mh;function oA(){if(Mh)return xa;Mh=1;var r=Fn(),e;return r===!0?e=0:e=1,xa=e,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,Nh;function aA(){if(Nh)return Ba;Nh=1;var r=Mn(),e=Nn(),n=oA(),t=new e(1),i=new r(t.buffer);function u(o,a){return t[0]=o,i[n]=a>>>0,t[0]}return Ba=u,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,Fh;function gt(){if(Fh)return Ua;Fh=1;var r=aA();return Ua=r,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,Oh;function sA(){if(Oh)return Wa;Oh=1;function r(e){return e|0}return Wa=r,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ga,Dh;function K_(){if(Dh)return Ga;Dh=1;var r=sA();return Ga=r,Ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Va,Th;function cA(){if(Th)return Va;Th=1;var r=Cd(),e=Ld(),n=er(),t=Le();function i(u,o){return o===n?t:o===t?0:o>0?r(o)?u:0:r(o)?e(t,u):t}return Va=i,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Xa,Ph;function lA(){if(Ph)return Xa;Ph=1;var r=vn(),e=dr(),n=1072693247,t=1e300,i=1e-300;function u(o,a){var c,s;return s=e(o),c=s&r,c<=n?a<0?t*t:i*i:a>0?t*t:i*i}return Xa=u,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,Hh;function fA(){if(Hh)return Ya;Hh=1;var r=ge(),e=Le();function n(t,i){return t===-1?(t-t)/(t-t):t===1?1:r(t)<1==(i===e)?0:e}return Ya=n,Ya}/**
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
*/var Ka,xh;function j_(){if(xh)return Ka;xh=1;var r=20;return Ka=r,Ka}/**
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
*/var ja,Bh;function dA(){if(Bh)return ja;Bh=1;function r(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}return ja=r,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var za,Uh;function pA(){if(Uh)return za;Uh=1;var r=dr(),e=gt(),n=_t(),t=hn(),i=j_(),u=dA(),o=1048575,a=1048576,c=1072693248,s=536870912,l=524288,f=9007199254740992,d=.9617966939259756,h=.9617967009544373,p=-7028461650952758e-24,v=[1,1.5],m=[0,.5849624872207642],b=[0,1350039202129749e-23];function g(y,_,$){var L,S,q,k,w,E,A,R,C,D,N,B,O,P,F,Z,W,j,ee,V,x,K;return V=0,$<a&&(_*=f,V-=53,$=r(_)),V+=($>>i)-t|0,x=$&o|0,$=x|c|0,x<=235662?K=0:x<767610?K=1:(K=0,V+=1,$-=a),_=n(_,$),R=v[K],j=_-R,ee=1/(_+R),S=j*ee,k=e(S,0),L=($>>1|s)+l,L+=K<<18,E=n(0,L),A=_-(E-R),w=ee*(j-k*E-k*A),q=S*S,W=q*q*u(q),W+=w*(k+S),q=k*k,E=3+q+W,E=e(E,0),A=W-(E-3-q),j=k*E,ee=w*E+A*S,D=j+ee,D=e(D,0),N=ee-(D-j),B=h*D,O=p*D+N*d+b[K],C=m[K],Z=V,P=B+O+C+Z,P=e(P,0),F=O-(P-Z-C-B),y[0]=P,y[1]=F,y}return za=g,za}/**
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
*/var Ja,Wh;function hA(){if(Wh)return Ja;Wh=1;function r(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}return Ja=r,Ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Za,Gh;function vA(){if(Gh)return Za;Gh=1;var r=gt(),e=hA(),n=1.4426950408889634,t=1.4426950216293335,i=19259629911266175e-24;function u(o,a){var c,s,l,f,d,h;return l=a-1,f=l*l*e(l),d=t*l,h=l*i-f*n,s=d+h,s=r(s,0),c=h-(s-d),o[0]=s,o[1]=c,o}return Za=u,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa,Vh;function mA(){if(Vh)return Qa;Vh=1;var r=.6931471805599453;return Qa=r,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var es,Xh;function z_(){if(Xh)return es;Xh=1;var r=1048575;return es=r,es}/**
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
*/var rs,Yh;function bA(){if(Yh)return rs;Yh=1;function r(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return rs=r,rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ns,Kh;function _A(){if(Kh)return ns;Kh=1;var r=dr(),e=_t(),n=gt(),t=K_(),i=Tn(),u=mA(),o=hn(),a=vn(),c=z_(),s=j_(),l=bA(),f=1048576,d=1071644672,h=.6931471824645996,p=-1904654299957768e-24;function v(m,b,g){var y,_,$,L,S,q,k,w,E,A,R;return A=m&a|0,R=(A>>s)-o|0,E=0,A>d&&(E=m+(f>>R+1)>>>0,R=((E&a)>>s)-o|0,y=(E&~(c>>R))>>>0,$=e(0,y),E=(E&c|f)>>s-R>>>0,m<0&&(E=-E),b-=$),$=g+b,$=n($,0),S=$*h,q=(g-($-b))*u+$*p,w=S+q,k=q-(w-S),$=w*w,_=w-$*l($),L=w*_/(_-2)-(k+w*k),w=1-(L-w),m=r(w),m=t(m),m+=E<<s>>>0,m>>s<=0?w=i(w,E):w=e(w,m),w}return ns=v,ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ts,jh;function gA(){if(jh)return ts;jh=1;var r=ue(),e=Cd(),n=Dn(),t=Pn(),i=_e(),u=ge(),o=kd(),a=gt(),c=K_(),s=er(),l=Le(),f=vn(),d=cA(),h=lA(),p=fA(),v=pA(),m=vA(),b=_A(),g=1072693247,y=1105199104,_=1139802112,$=1083179008,L=1072693248,S=1083231232,q=3230714880,k=31,w=1e300,E=1e-300,A=8008566259537294e-32,R=[0,0],C=[0,0];function D(N,B){var O,P,F,Z,W,j,ee,V,x,K,G,we,le,re,ie,de;if(r(N)||r(B))return NaN;if(o.assign(B,R,1,0),j=R[0],ee=R[1],ee===0){if(B===0)return 1;if(B===1)return N;if(B===-1)return 1/N;if(B===.5)return i(N);if(B===-.5)return 1/i(N);if(B===2)return N*N;if(B===3)return N*N*N;if(B===4)return N*=N,N*N;if(n(B))return p(N,B)}if(o.assign(N,R,1,0),Z=R[0],W=R[1],W===0){if(Z===0)return d(N,B);if(N===1)return 1;if(N===-1&&e(B))return-1;if(n(N))return N===s?D(-0,-B):B<0?0:l}if(N<0&&t(B)===!1)return(N-N)/(N-N);if(F=u(N),O=Z&f|0,P=j&f|0,V=Z>>>k|0,x=j>>>k|0,V&&e(B)?V=-1:V=1,P>y){if(P>_)return h(N,B);if(O<g)return x===1?V*w*w:V*E*E;if(O>L)return x===0?V*w*w:V*E*E;le=m(C,F)}else le=v(C,F,O);if(K=a(B,0),we=(B-K)*le[0]+B*le[1],G=K*le[0],re=we+G,o.assign(re,R,1,0),ie=c(R[0]),de=c(R[1]),ie>=$){if((ie-$|de)!==0||we+A>re-G)return V*w*w}else if((ie&f)>=S&&((ie-q|de)!==0||we<=re-G))return V*E*E;return re=b(ie,G,we),V*re}return ts=D,ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var is,zh;function Ie(){if(zh)return is;zh=1;var r=gA();return is=r,is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var us,Jh;function Hn(){if(Jh)return us;Jh=1;var r=2.718281828459045;return us=r,us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var os,Zh;function Or(){if(Zh)return os;Zh=1;var r=2220446049250313e-31;return os=r,os}/**
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
*/var as,Qh;function yA(){if(Qh)return as;Qh=1;function r(e){var n,t,i;return e===0?1/0:(e<0?n=-e:n=e,n<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return as=r,as}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ss,ev;function EA(){if(ev)return ss;ev=1;var r=ue(),e=pr(),n=_e(),t=ge(),i=Ce(),u=Ie(),o=Hn(),a=Or(),c=yA(),s=10.900511;function l(f,d){var h,p,v,m,b,g,y;return r(f)||r(d)?NaN:f<0||d<0?NaN:d===1?1/f:f===1?1/d:(y=f+d,y<a?(b=y/f,b/=d,b):y===f&&d<a?1/d:y===d&&f<a?1/f:(f<d&&(g=d,d=f,f=g),p=f+s-.5,v=d+s-.5,m=y+s-.5,b=c(f)*(c(d)/c(y)),h=f-.5-d,t(d*h)<m*100&&f>100?b*=i(h*e(-d/m)):b*=u(p/m,h),m>1e10?b*=u(p/m*(v/m),d):b*=u(p*v/(m*m),d),b*=n(o/v),b))}return ss=l,ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cs,rv;function ki(){if(rv)return cs;rv=1;var r=EA();return cs=r,cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ls,nv;function $A(){if(nv)return ls;nv=1;var r=Le();function e(n){return n===0&&1/n===r}return ls=e,ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fs,tv;function wA(){if(tv)return fs;tv=1;var r=$A();return fs=r,fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ds,iv;function AA(){if(iv)return ds;iv=1;var r=wA(),e=ue(),n=Le();function t(i,u){return e(i)||e(u)?NaN:i===n||u===n?n:i===u&&i===0?r(i)?i:u:i>u?i:u}return ds=t,ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ps,uv;function bn(){if(uv)return ps;uv=1;var r=AA();return ps=r,ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hs,ov;function SA(){if(ov)return hs;ov=1;var r=er();function e(n){return n===0&&1/n===r}return hs=e,hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vs,av;function J_(){if(av)return vs;av=1;var r=SA();return vs=r,vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ms,sv;function RA(){if(sv)return ms;sv=1;var r=J_(),e=ue(),n=er();function t(i,u){return e(i)||e(u)?NaN:i===n||u===n?n:i===u&&i===0?r(i)?i:u:i<u?i:u}return ms=t,ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs,cv;function tn(){if(cv)return bs;cv=1;var r=RA();return bs=r,bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _s,lv;function _n(){if(lv)return _s;lv=1;var r=17976931348623157e292;return _s=r,_s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs,fv;function Z_(){if(fv)return gs;fv=1;var r=2147483647;return gs=r,gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ys,dv;function Id(){if(dv)return ys;dv=1;var r=1.5707963267948966;return ys=r,ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Es,pv;function un(){if(pv)return Es;pv=1;var r=3.141592653589793;return Es=r,Es}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s,hv;function kA(){if(hv)return $s;hv=1;function r(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}return $s=r,$s}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ws,vv;function LA(){if(vv)return ws;vv=1;function r(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}return ws=r,ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var As,mv;function CA(){if(mv)return As;mv=1;var r=kA(),e=LA();function n(t,i){var u,o,a,c;return c=t*t,a=c*c,o=c*r(c),o+=a*a*e(c),u=.5*c,a=1-u,a+(1-a-u+(c*o-t*i))}return As=n,As}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ss,bv;function Q_(){if(bv)return Ss;bv=1;var r=CA();return Ss=r,Ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Rs,_v;function IA(){if(_v)return Rs;_v=1;var r=-.16666666666666632,e=.00833333333332249,n=-.0001984126982985795,t=27557313707070068e-22,i=-25050760253406863e-24,u=158969099521155e-24;function o(a,c){var s,l,f,d;return d=a*a,f=d*d,s=e+d*(n+d*t)+d*f*(i+d*u),l=d*a,c===0?a+l*(r+d*s):a-(d*(.5*c-l*s)-c-l*r)}return Rs=o,Rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ks,gv;function e7(){if(gv)return ks;gv=1;var r=IA();return ks=r,ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ls,yv;function qA(){if(yv)return Ls;yv=1;var r=Fn(),e;return r===!0?e=0:e=1,Ls=e,Ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cs,Ev;function MA(){if(Ev)return Cs;Ev=1;var r=Mn(),e=Nn(),n=qA(),t=new e(1),i=new r(t.buffer);function u(o){return t[0]=o,i[n]}return Cs=u,Cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Is,$v;function NA(){if($v)return Is;$v=1;var r=MA();return Is=r,Is}/**
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
*/var qs,wv;function FA(){if(wv)return qs;wv=1;function r(e,n){var t,i;for(t=[],i=0;i<n;i++)t.push(e);return t}return qs=r,qs}/**
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
*/var Ms,Av;function OA(){if(Av)return Ms;Av=1;var r=FA();return Ms=r,Ms}/**
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
*/var Ns,Sv;function DA(){if(Sv)return Ns;Sv=1;var r=OA();function e(n){return r(0,n)}return Ns=e,Ns}/**
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
*/var Fs,Rv;function TA(){if(Rv)return Fs;Rv=1;var r=DA();return Fs=r,Fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Os,kv;function PA(){if(kv)return Os;kv=1;var r=Fr(),e=Tn(),n=TA(),t=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],i=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],u=16777216,o=5960464477539063e-23,a=n(20),c=n(20),s=n(20),l=n(20);function f(h,p,v,m,b,g,y,_,$){var L,S,q,k,w,E,A,R,C;for(k=g,C=m[v],R=v,w=0;R>0;w++)S=o*C|0,l[w]=C-u*S|0,C=m[R-1]+S,R-=1;if(C=e(C,b),C-=8*r(C*.125),A=C|0,C-=A,q=0,b>0?(w=l[v-1]>>24-b,A+=w,l[v-1]-=w<<24-b,q=l[v-1]>>23-b):b===0?q=l[v-1]>>23:C>=.5&&(q=2),q>0){for(A+=1,L=0,w=0;w<v;w++)R=l[w],L===0?R!==0&&(L=1,l[w]=16777216-R):l[w]=16777215-R;if(b>0)switch(b){case 1:l[v-1]&=8388607;break;case 2:l[v-1]&=4194303;break}q===2&&(C=1-C,L!==0&&(C-=e(1,b)))}if(C===0){for(R=0,w=v-1;w>=g;w--)R|=l[w];if(R===0){for(E=1;l[g-E]===0;E++);for(w=v+1;w<=v+E;w++){for($[_+w]=t[y+w],S=0,R=0;R<=_;R++)S+=h[R]*$[_+(w-R)];m[w]=S}return v+=E,f(h,p,v,m,b,g,y,_,$)}for(v-=1,b-=24;l[v]===0;)v-=1,b-=24}else C=e(C,-b),C>=u?(S=o*C|0,l[v]=C-u*S|0,v+=1,b+=24,l[v]=S):l[v]=C|0;for(S=e(1,b),w=v;w>=0;w--)m[w]=S*l[w],S*=o;for(w=v;w>=0;w--){for(S=0,E=0;E<=k&&E<=v-w;E++)S+=i[E]*m[w+E];s[v-w]=S}for(S=0,w=v;w>=0;w--)S+=s[w];for(q===0?p[0]=S:p[0]=-S,S=s[0]-S,w=1;w<=v;w++)S+=s[w];return q===0?p[1]=S:p[1]=-S,A&7}function d(h,p,v,m){var b,g,y,_,$,L,S,q,k;for(g=4,_=m-1,y=(v-3)/24|0,y<0&&(y=0),L=v-24*(y+1),q=y-_,k=_+g,S=0;S<=k;S++)q<0?a[S]=0:a[S]=t[q],q+=1;for(S=0;S<=g;S++){for(b=0,q=0;q<=_;q++)b+=h[q]*a[_+(S-q)];c[S]=b}return $=g,f(h,p,$,c,L,g,y,_,a)}return Os=d,Os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ds,Lv;function HA(){if(Lv)return Ds;Lv=1;var r=Math.round;return Ds=r,Ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ts,Cv;function r7(){if(Cv)return Ts;Cv=1;var r=HA();return Ts=r,Ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ps,Iv;function xA(){if(Iv)return Ps;Iv=1;var r=r7(),e=dr(),n=.6366197723675814,t=1.5707963267341256,i=6077100506506192e-26,u=6077100506303966e-26,o=20222662487959506e-37,a=20222662487111665e-37,c=84784276603689e-45,s=2047;function l(f,d,h){var p,v,m,b,g,y,_;return v=r(f*n),b=f-v*t,g=v*i,_=d>>20|0,h[0]=b-g,p=e(h[0]),y=_-(p>>20&s),y>16&&(m=b,g=v*u,b=m-g,g=v*o-(m-b-g),h[0]=b-g,p=e(h[0]),y=_-(p>>20&s),y>49&&(m=b,g=v*a,b=m-g,g=v*c-(m-b-g),h[0]=b-g)),h[1]=b-h[0]-g,v}return Ps=l,Ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Hs,qv;function BA(){if(qv)return Hs;qv=1;var r=vn(),e=Ri(),n=z_(),t=dr(),i=NA(),u=Si(),o=PA(),a=xA(),c=0,s=16777216,l=1.5707963267341256,f=6077100506506192e-26,d=2*f,h=3*f,p=4*f,v=598523,m=1072243195,b=1073928572,g=1074752122,y=1074977148,_=1075183036,$=1075388923,L=1075594811,S=1094263291,q=[0,0,0],k=[0,0];function w(E,A){var R,C,D,N,B,O,P,F;if(D=t(E)|0,N=D&r|0,N<=m)return A[0]=E,A[1]=0,0;if(N<=g)return(N&n)===v?a(E,N,A):N<=b?D>0?(F=E-l,A[0]=F-f,A[1]=F-A[0]-f,1):(F=E+l,A[0]=F+f,A[1]=F-A[0]+f,-1):D>0?(F=E-2*l,A[0]=F-d,A[1]=F-A[0]-d,2):(F=E+2*l,A[0]=F+d,A[1]=F-A[0]+d,-2);if(N<=L)return N<=_?N===y?a(E,N,A):D>0?(F=E-3*l,A[0]=F-h,A[1]=F-A[0]-h,3):(F=E+3*l,A[0]=F+h,A[1]=F-A[0]+h,-3):N===$?a(E,N,A):D>0?(F=E-4*l,A[0]=F-p,A[1]=F-A[0]-p,4):(F=E+4*l,A[0]=F+p,A[1]=F-A[0]+p,-4);if(N<S)return a(E,N,A);if(N>=e)return A[0]=NaN,A[1]=NaN,0;for(R=i(E),C=(N>>20)-1046,F=u(N-(C<<20|0),R),O=0;O<2;O++)q[O]=F|0,F=(F-q[O])*s;for(q[2]=F,B=3;q[B-1]===c;)B-=1;return P=o(q,k,C,B,1),D<0?(A[0]=-k[0],A[1]=-k[1],-P):(A[0]=k[0],A[1]=k[1],P)}return Hs=w,Hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xs,Mv;function n7(){if(Mv)return xs;Mv=1;var r=BA();return xs=r,xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Bs,Nv;function UA(){if(Nv)return Bs;Nv=1;var r=vn(),e=Ri(),n=dr(),t=Q_(),i=e7(),u=n7(),o=1072243195,a=1045430272,c=[0,0];function s(l){var f,d;if(f=n(l),f&=r,f<=o)return f<a?l:i(l,0);if(f>=e)return NaN;switch(d=u(l,c),d&3){case 0:return i(c[0],c[1]);case 1:return t(c[0],c[1]);case 2:return-i(c[0],c[1]);default:return-t(c[0],c[1])}}return Bs=s,Bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Us,Fv;function yt(){if(Fv)return Us;Fv=1;var r=UA();return Us=r,Us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws,Ov;function Li(){if(Ov)return Ws;Ov=1;var r=2.5066282746310007;return Ws=r,Ws}/**
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
*/var Gs,Dv;function WA(){if(Dv)return Gs;Dv=1;function r(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}return Gs=r,Gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Vs,Tv;function GA(){if(Tv)return Vs;Tv=1;var r=Li(),e=Ie(),n=Ce(),t=WA(),i=143.01608;function u(o){var a,c,s;return a=1/o,a=1+a*t(a),c=n(o),o>i?(s=e(o,.5*o-.25),c=s*(s/c)):c=e(o,o-.5)/c,r*c*a}return Vs=u,Vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xs,Pv;function VA(){if(Pv)return Xs;Pv=1;var r=.5772156649015329;return Xs=r,Xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ys,Hv;function XA(){if(Hv)return Ys;Hv=1;var r=VA();function e(n,t){return t/((1+r*n)*n)}return Ys=e,Ys}/**
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
*/var Ks,xv;function YA(){if(xv)return Ks;xv=1;function r(e){var n,t,i;return e===0?1:(e<0?n=-e:n=e,n<=1?(t=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),i=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,t=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),i=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),t/i)}return Ks=r,Ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var js,Bv;function KA(){if(Bv)return js;Bv=1;var r=ue(),e=Pn(),n=J_(),t=ge(),i=Fr(),u=yt(),o=Le(),a=er(),c=un(),s=GA(),l=XA(),f=YA();function d(h){var p,v,m,b;if(e(h)&&h<0||h===a||r(h))return NaN;if(h===0)return n(h)?a:o;if(h>171.61447887182297)return o;if(h<-170.5674972726612)return 0;if(v=t(h),v>33)return h>=0?s(h):(m=i(v),(m&1)===0?p=-1:p=1,b=v-m,b>.5&&(m+=1,b=v-m),b=v*u(c*b),p*c/(t(b)*s(v)));for(b=1;h>=3;)h-=1,b*=h;for(;h<0;){if(h>-1e-9)return l(h,b);b/=h,h+=1}for(;h<2;){if(h<1e-9)return l(h,b);b/=h,h+=1}return h===2?b:(h-=2,b*f(h))}return js=d,js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs,Uv;function Dr(){if(Uv)return zs;Uv=1;var r=KA();return zs=r,zs}/**
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
*/var Js,Wv;function Ci(){if(Wv)return Js;Wv=1;var r=170;return Js=r,Js}const jA=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zs,Gv;function zA(){if(Gv)return Zs;Gv=1;var r=ue(),e=Pn(),n=Dr(),t=Le(),i=Ci(),u=jA;function o(a){return r(a)?NaN:e(a)?a<0?NaN:a<=i?u[a]:t:n(a+1)}return Zs=o,Zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qs,Vv;function t7(){if(Vv)return Qs;Vv=1;var r=zA();return Qs=r,Qs}/**
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
*/var e0,Xv;function JA(){if(Xv)return e0;Xv=1;function r(e){var n,t,i;return e===0?1/0:(e<0?n=-e:n=e,n<=1?(t=3847467039331777e-5+e*(3685766504351951e-5+e*(1588920245372942e-5+e*(4059208354298835e-6+e*(6805476611834733e-7+e*(7823975500312005e-8+e*(6246580776401795e-9+e*(341986.3488721347+e*(12287.194511824551+e*(261.61404416416684+e*2.5066282746310007))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=2.5066282746310007+e*(261.61404416416684+e*(12287.194511824551+e*(341986.3488721347+e*(6246580776401795e-9+e*(7823975500312005e-8+e*(6805476611834733e-7+e*(4059208354298835e-6+e*(1588920245372942e-5+e*(3685766504351951e-5+e*3847467039331777e-5))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return e0=r,e0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var r0,Yv;function ZA(){if(Yv)return r0;Yv=1;var r=JA();return r0=r,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n0,Kv;function QA(){if(Kv)return n0;Kv=1;var r=ZA();return n0=r,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t0,jv;function Et(){if(jv)return t0;jv=1;var r=10.900511;return t0=r,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var i0,zv;function eS(){if(zv)return i0;zv=1;var r=QA(),e=Dr(),n=pr(),t=ge(),i=Ce(),u=Ie(),o=Or(),a=Hn(),c=Et(),s=Ci(),l=4269068009004705e289;function f(d,h){var p,v,m;return d<o?h>=s?(v=f(h,s-h),v*=d,v*=l,1/v):1/(d*e(d+h)):(m=d+c-.5,d+h===d?t(h/m)<o?p=i(-h):p=1:(t(h)<10?p=i((.5-d)*n(h/m)):p=u(m/(m+h),d-.5),p*=r(d)/r(d+h)),p*=u(a/(m+h),h),p)}return i0=f,i0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var u0,Jv;function rS(){if(Jv)return u0;Jv=1;var r=ge(),e=Fr(),n=Dr(),t=t7(),i=Ci(),u=eS();function o(a,c){var s,l,f;if(a<=0||a+c<=0)return n(a)/n(a+c);if(l=e(c),l===c){if(f=e(a),f===a&&a<=i&&a+c<=i)return t(f-1)/t(l+f-1);if(r(c)<20){if(c===0)return 1;if(c<0){for(a-=1,s=a,c+=1;c!==0;)a-=1,s*=a,c+=1;return s}for(s=1/a,c-=1;c!==0;)a+=1,s/=a,c-=1;return s}}return u(a,c)}return u0=o,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,Zv;function qd(){if(Zv)return o0;Zv=1;var r=rS();return o0=r,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a0,Qv;function nS(){if(Qv)return a0;Qv=1;function r(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}return a0=r,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,e6;function tS(){if(e6)return s0;e6=1;function r(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}return s0=r,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var c0,r6;function iS(){if(r6)return c0;r6=1;var r=dr(),e=_t(),n=ue(),t=hn(),i=er(),u=nS(),o=tS(),a=.6931471803691238,c=19082149292705877e-26,s=0x40000000000000,l=.3333333333333333,f=1048575,d=2146435072,h=1048576,p=1072693248;function v(m){var b,g,y,_,$,L,S,q,k,w,E,A;return m===0?i:n(m)||m<0?NaN:(g=r(m),$=0,g<h&&($-=54,m*=s,g=r(m)),g>=d?m+m:($+=(g>>20)-t|0,g&=f,q=g+614244&1048576|0,m=e(m,g|q^p),$+=q>>20|0,S=m-1,(f&2+g)<3?S===0?$===0?0:$*a+$*c:(L=S*S*(.5-l*S),$===0?S-L:$*a-(L-$*c-S)):(w=S/(2+S),A=w*w,q=g-398458|0,E=A*A,k=440401-g|0,_=E*u(E),y=A*o(E),q|=k,L=y+_,q>0?(b=.5*S*S,$===0?S-(b-w*(b+L)):$*a-(b-(w*(b+L)+$*c)-S)):$===0?S-w*(S-L):$*a-(w*(S-L)-$*c-S))))}return c0=v,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,n6;function ye(){if(n6)return l0;n6=1;var r=iS();return l0=r,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var f0,t6;function uS(){if(t6)return f0;t6=1;var r=dr(),e=Q_(),n=e7(),t=n7(),i=vn(),u=Ri(),o=[0,0],a=1072243195,c=1044381696;function s(l){var f,d;if(f=r(l),f&=i,f<=a)return f<c?1:e(l,0);if(f>=u)return NaN;switch(d=t(l,o),d&3){case 0:return e(o[0],o[1]);case 1:return-n(o[0],o[1]);case 2:return-e(o[0],o[1]);default:return n(o[0],o[1])}}return f0=s,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d0,i6;function Md(){if(i6)return d0;i6=1;var r=uS();return d0=r,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,u6;function oS(){if(u6)return p0;u6=1;var r=ue(),e=Dn(),n=Md(),t=yt(),i=ge(),u=Ld(),o=un();function a(c){var s,l;return r(c)?NaN:e(c)?NaN:(l=c%2,s=i(l),s===0||s===1?u(0,l):s<.25?t(o*l):s<.75?(s=.5-s,u(n(o*s),l)):s<1.25?(l=u(1,l)-l,t(o*l)):s<1.75?(s-=1.5,-u(n(o*s),l)):(l-=u(2,l),t(o*l)))}return p0=a,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h0,o6;function aS(){if(o6)return h0;o6=1;var r=oS();return h0=r,h0}/**
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
*/var v0,a6;function sS(){if(a6)return v0;a6=1;function r(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}return v0=r,v0}/**
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
*/var m0,s6;function cS(){if(s6)return m0;s6=1;function r(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}return m0=r,m0}/**
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
*/var b0,c6;function lS(){if(c6)return b0;c6=1;function r(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}return b0=r,b0}/**
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
*/var _0,l6;function fS(){if(l6)return _0;l6=1;function r(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}return _0=r,_0}/**
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
*/var g0,f6;function dS(){if(f6)return g0;f6=1;function r(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}return g0=r,g0}/**
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
*/var y0,d6;function pS(){if(d6)return y0;d6=1;function r(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}return y0=r,y0}/**
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
*/var E0,p6;function hS(){if(p6)return E0;p6=1;function r(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}return E0=r,E0}/**
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
*/var $0,h6;function vS(){if(h6)return $0;h6=1;function r(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}return $0=r,$0}/**
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
*/var w0,v6;function mS(){if(v6)return w0;v6=1;function r(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}return w0=r,w0}/**
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
*/var A0,m6;function bS(){if(m6)return A0;m6=1;function r(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}return A0=r,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var S0,b6;function _S(){if(b6)return S0;b6=1;var r=ue(),e=Dn(),n=ge(),t=ye(),i=Rd(),u=aS(),o=un(),a=Le(),c=sS(),s=cS(),l=lS(),f=fS(),d=dS(),h=pS(),p=hS(),v=vS(),m=mS(),b=bS(),g=.07721566490153287,y=.3224670334241136,_=1,$=-.07721566490153287,L=.48383612272381005,S=-.1475877229945939,q=.06462494023913339,k=-.07721566490153287,w=1,E=.4189385332046727,A=1.4616321449683622,R=4503599627370496,C=72057594037927940,D=13877787807814457e-33,N=1.4616321449683622,B=-.12148629053584961,O=-3638676997039505e-33;function P(F){var Z,W,j,ee,V,x,K,G,we,le,re,ie,de;if(r(F)||e(F))return F;if(F===0)return a;if(F<0?(Z=!0,F=-F):Z=!1,F<D)return-t(F);if(Z){if(F>=R||(we=u(F),we===0))return a;W=t(o/n(we*F))}if(F===1||F===2)return 0;if(F<2)switch(F<=.9?(de=-t(F),F>=A-1+.27?(re=1-F,j=0):F>=A-1-.27?(re=F-(N-1),j=1):(re=F,j=2)):(de=0,F>=A+.27?(re=2-F,j=0):F>=A-.27?(re=F-N,j=1):(re=F-1,j=2)),j){case 0:ie=re*re,x=g+ie*c(ie),V=ie*(y+ie*s(ie)),K=re*x+V,de+=K-.5*re;break;case 1:ie=re*re,le=ie*re,x=L+le*d(le),V=S+le*h(le),ee=q+le*p(le),K=ie*x-(O-le*(V+re*ee)),de+=B+K;break;case 2:x=re*(k+re*v(re)),V=w+re*m(re),de+=-.5*re+x/V;break}else if(F<8)switch(j=i(F),re=F-j,K=re*($+re*f(re)),G=_+re*l(re),de=.5*re+K/G,ie=1,j){case 7:ie*=re+6;case 6:ie*=re+5;case 5:ie*=re+4;case 4:ie*=re+3;case 3:ie*=re+2,de+=t(ie)}else F<C?(we=t(F),ie=1/F,re=ie*ie,le=E+ie*b(re),de=(F-.5)*(we-1)+le):de=F*(t(F)-1);return Z&&(de=W-de),de}return S0=P,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R0,_6;function xn(){if(_6)return R0;_6=1;var r=_S();return R0=r,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,g6;function on(){if(g6)return k0;g6=1;var r=709.782712893384;return k0=r,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,y6;function gS(){if(y6)return L0;y6=1;var r=14901161193847656e-24;return L0=r,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,E6;function yS(){if(E6)return C0;E6=1;var r=eval;return C0=r,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,$6;function ES(){if($6)return I0;$6=1;var r=yS();function e(){var n;try{r('"use strict"; (function* () {})'),n=!0}catch{n=!1}return n}return I0=e,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q0,w6;function i7(){if(w6)return q0;w6=1;var r=ES();return q0=r,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M0,A6;function $S(){if(A6)return M0;A6=1;var r=ge(),e=Or(),n=1e6;function t(i,u){var o,a,c,s,l,f;if(f={},arguments.length>1&&(f=u),a=f.tolerance||e,s=f.maxTerms||n,l=f.initialValue||0,o=typeof i.next=="function",o===!0){for(c of i)if(l+=c,r(a*l)>=r(c)||--s===0)break}else do c=i(),l+=c;while(r(a*l)<r(c)&&--s);return l}return M0=t,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,S6;function wS(){if(S6)return N0;S6=1;var r=ge(),e=Or(),n=1e6;function t(i,u){var o,a,c,s,l;l={},arguments.length>1&&(l=u),o=l.tolerance||e,c=l.maxTerms||n,s=l.initialValue||0;do a=i(),s+=a;while(r(o*s)<r(a)&&--c);return s}return N0=t,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,R6;function $t(){if(R6)return F0;R6=1;var r=i7(),e=$S(),n=wS(),t;return r()?t=e:t=n,F0=t,F0}/**
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
*/var O0,k6;function AS(){if(k6)return O0;k6=1;function r(e,n){var t=1,i=e,u=n;return o;function o(){var a=t;return t*=i/u,i-=1,a}}return O0=r,O0}/**
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
*/var D0,L6;function SS(){if(L6)return D0;L6=1;var r=$t(),e=AS();function n(t,i){var u,o;return o=e(t,i),u=r(o),u}return D0=n,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var T0,C6;function RS(){if(C6)return T0;C6=1;var r=Ce();function e(n,t){var i,u,o,a;if(o=r(-t),u=o,u!==0)for(i=u,a=1;a<n;++a)i/=a,i*=t,u+=i;return u}return T0=e,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,I6;function kS(){if(I6)return P0;I6=1;function r(e){return e===0?-.3250421072470015:-.3250421072470015+e*(-.02848174957559851+e*(-.005770270296489442+e*-23763016656650163e-21))}return P0=r,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,q6;function LS(){if(q6)return H0;q6=1;function r(e){return e===0?.39791722395915535:.39791722395915535+e*(.0650222499887673+e*(.005081306281875766+e*(.00013249473800432164+e*-3960228278775368e-21)))}return H0=r,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,M6;function CS(){if(M6)return x0;M6=1;function r(e){return e===0?.41485611868374833:.41485611868374833+e*(-.3722078760357013+e*(.31834661990116175+e*(-.11089469428239668+e*(.035478304325618236+e*-.002166375594868791))))}return x0=r,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,N6;function IS(){if(N6)return B0;N6=1;function r(e){return e===0?.10642088040084423:.10642088040084423+e*(.540397917702171+e*(.07182865441419627+e*(.12617121980876164+e*(.01363708391202905+e*.011984499846799107))))}return B0=r,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,F6;function qS(){if(F6)return U0;F6=1;function r(e){return e===0?-.6938585727071818:-.6938585727071818+e*(-10.558626225323291+e*(-62.375332450326006+e*(-162.39666946257347+e*(-184.60509290671104+e*(-81.2874355063066+e*-9.814329344169145)))))}return U0=r,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,O6;function MS(){if(O6)return W0;O6=1;function r(e){return e===0?19.651271667439257:19.651271667439257+e*(137.65775414351904+e*(434.56587747522923+e*(645.3872717332679+e*(429.00814002756783+e*(108.63500554177944+e*(6.570249770319282+e*-.0604244152148581))))))}return W0=r,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0,D6;function NS(){if(D6)return G0;D6=1;function r(e){return e===0?-.799283237680523:-.799283237680523+e*(-17.757954917754752+e*(-160.63638485582192+e*(-637.5664433683896+e*(-1025.0951316110772+e*-483.5191916086514))))}return G0=r,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,T6;function FS(){if(T6)return V0;T6=1;function r(e){return e===0?30.33806074348246:30.33806074348246+e*(325.7925129965739+e*(1536.729586084437+e*(3199.8582195085955+e*(2553.0504064331644+e*(474.52854120695537+e*-22.44095244658582)))))}return V0=r,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var X0,P6;function OS(){if(P6)return X0;P6=1;var r=ue(),e=Ce(),n=gt(),t=Le(),i=er(),u=kS(),o=LS(),a=CS(),c=IS(),s=qS(),l=MS(),f=NS(),d=FS(),h=1e-300,p=13877787807814457e-33,v=.8450629115104675,m=.12837916709551256,b=1,g=-.0023621185607526594,y=1,_=-.009864944034847148,$=1,L=-.0098649429247001,S=1;function q(k){var w,E,A,R,C,D,N,B;if(r(k))return NaN;if(k===t)return 0;if(k===i)return 2;if(k===0)return 1;if(k<0?(w=!0,E=-k):(w=!1,E=k),E<.84375)return E<p?1-k:(A=k*k,R=m+A*u(A),C=b+A*o(A),D=R/C,k<.25?1-(k+k*D):(R=k*D,R+=k-.5,.5-R));if(E<1.25)return C=E-1,N=g+C*a(C),B=y+C*c(C),w?1+v+N/B:1-v-N/B;if(E<28){if(C=1/(E*E),E<2.857142857142857)R=_+C*s(C),C=$+C*l(C);else{if(k<-6)return 2-h;R=L+C*f(C),C=S+C*d(C)}return A=n(E,0),R=e(-(A*A)-.5625)*e((A-E)*(A+E)+R/C),w?2-R/E:R/E}return w?2-h:h*h}return X0=q,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,H6;function Ii(){if(H6)return Y0;H6=1;var r=OS();return Y0=r,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var K0,x6;function DS(){if(x6)return K0;x6=1;var r=Ii(),e=_e(),n=Ce(),t=un();function i(u,o){var a,c,s,l,f;if(l=r(e(o)),l!==0&&u>1){for(c=n(-o)/e(t*o),c*=o,a=.5,c/=a,s=c,f=2;f<u;++f)c/=f-a,c*=o,s+=c;l+=s}return l}return K0=i,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,B6;function Bn(){if(B6)return j0;B6=1;var r=-708.3964185322641;return j0=r,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var z0,U6;function TS(){if(U6)return z0;U6=1;var r=Ce(),e=Ie(),n=ye(),t=on(),i=Bn();function u(o,a){var c,s;return s=o*n(a),a>=1?s<t&&-a>i?c=e(a,o)*r(-a):o>=1?c=e(a/r(a/o),o):c=r(s-a):s>i?c=e(a,o)*r(-a):a/o<t?c=e(a/r(a/o),o):c=r(s-a),c}return z0=u,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,W6;function u7(){if(W6)return J0;W6=1;function r(e,n){var t,i;if(i=e.length,i<2||n===0)return i===0?0:e[0];for(i-=1,t=e[i]*n+e[i-1],i-=2;i>=0;)t=t*n+e[i],i-=1;return t}return J0=r,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,G6;function PS(){if(G6)return Z0;G6=1;var r=Function;return Z0=r,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,V6;function HS(){if(V6)return Q0;V6=1;var r=PS();return Q0=r,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ec,X6;function xS(){if(X6)return ec;X6=1;var r=HS(),e=u7();function n(t){var i,u,o,a;if(t.length>500)return c;if(i="return function evalpoly(x){",u=t.length,u===0)i+="return 0.0;";else if(u===1)i+="return "+t[0]+";";else{for(i+="if(x===0.0){return "+t[0]+";}",i+="return "+t[0],o=u-1,a=1;a<u;a++)i+="+x*",a<o&&(i+="("),i+=t[a];for(a=0;a<o-1;a++)i+=")";i+=";"}return i+="}",i+="//# sourceURL=evalpoly.factory.js",new r(i)();function c(s){return e(t,s)}}return ec=n,ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rc,Y6;function an(){if(Y6)return rc;Y6=1;var r=Qe(),e=u7(),n=xS();return r(e,"factory",n),rc=e,rc}/**
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
*/var nc,K6;function BS(){if(K6)return nc;K6=1;function r(e){var n=-e,t=-1,i=0;return u;function u(){return t*=n,i+=1,t/i}}return nc=r,nc}/**
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
*/var tc,j6;function US(){if(j6)return tc;j6=1;var r=ge(),e=ye(),n=Or(),t=$t(),i=BS();function u(o){var a,c;return o<=-1?NaN:(c=r(o),c>.95?e(1+o)-o:c<n?-o*o/2:(a={initialValue:-o},t(i(o),a)))}return tc=u,tc}/**
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
*/var ic,z6;function o7(){if(z6)return ic;z6=1;var r=US();return ic=r,ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uc,J6;function qi(){if(J6)return uc;J6=1;var r=6.283185307179586;return uc=r,uc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oc,Z6;function WS(){if(Z6)return oc;Z6=1;function r(e){return e===0?-.3333333333333333:-.3333333333333333+e*(.08333333333333333+e*(-.014814814814814815+e*(.0011574074074074073+e*(.0003527336860670194+e*(-.0001787551440329218+e*(3919263178522438e-20+e*(-21854485106799924e-22+e*(-185406221071516e-20+e*(8296711340953087e-22+e*(-17665952736826078e-23+e*(6707853543401498e-24+e*(10261809784240309e-24+e*(-4382036018453353e-24+e*914769958223679e-24)))))))))))))}return oc=r,oc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ac,Q6;function GS(){if(Q6)return ac;Q6=1;function r(e){return e===0?-.001851851851851852:-.001851851851851852+e*(-.003472222222222222+e*(.0026455026455026454+e*(-.0009902263374485596+e*(.00020576131687242798+e*(-4018775720164609e-22+e*(-18098550334489977e-21+e*(764916091608111e-20+e*(-16120900894563446e-22+e*(4647127802807434e-24+e*(1378633446915721e-22+e*(-5752545603517705e-23+e*11951628599778148e-24)))))))))))}return ac=r,ac}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sc,em;function VS(){if(em)return sc;em=1;function r(e){return e===0?.004133597883597883:.004133597883597883+e*(-.0026813271604938273+e*(.0007716049382716049+e*(20093878600823047e-22+e*(-.00010736653226365161+e*(52923448829120125e-21+e*(-12760635188618728e-21+e*(3423578734096138e-23+e*(13721957309062932e-22+e*(-6298992138380055e-22+e*14280614206064242e-23)))))))))}return sc=r,sc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cc,rm;function XS(){if(rm)return cc;rm=1;function r(e){return e===0?.0006494341563786008:.0006494341563786008+e*(.00022947209362139917+e*(-.0004691894943952557+e*(.00026772063206283885+e*(-7561801671883977e-20+e*(-2396505113867297e-22+e*(11082654115347302e-21+e*(-56749528269915965e-22+e*14230900732435883e-22)))))))}return cc=r,cc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lc,nm;function YS(){if(nm)return lc;nm=1;function r(e){return e===0?-.0008618882909167117:-.0008618882909167117+e*(.0007840392217200666+e*(-.0002990724803031902+e*(-14638452578843418e-22+e*(6641498215465122e-20+e*(-3968365047179435e-20+e*11375726970678419e-21)))))}return lc=r,lc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fc,tm;function KS(){if(tm)return fc;tm=1;function r(e){return e===0?-.00033679855336635813:-.00033679855336635813+e*(-6972813758365858e-20+e*(.0002772753244959392+e*(-.00019932570516188847+e*(6797780477937208e-20+e*(1419062920643967e-22+e*(-13594048189768693e-21+e*(8018470256334202e-21+e*-2291481176508095e-21)))))))}return fc=r,fc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dc,im;function jS(){if(im)return dc;im=1;function r(e){return e===0?.0005313079364639922:.0005313079364639922+e*(-.0005921664373536939+e*(.0002708782096718045+e*(7902353232660328e-22+e*(-8153969367561969e-20+e*(561168275310625e-19+e*-18329116582843375e-21)))))}return dc=r,dc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pc,um;function zS(){if(um)return pc;um=1;function r(e){return e===0?.00034436760689237765:.00034436760689237765+e*(5171790908260592e-20+e*(-.00033493161081142234+e*(.0002812695154763237+e*-.00010976582244684731)))}return pc=r,pc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hc,om;function JS(){if(om)return hc;om=1;function r(e){return e===0?-.0006526239185953094:-.0006526239185953094+e*(.0008394987206720873+e*-.000438297098541721)}return hc=r,hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var vc,am;function ZS(){if(am)return vc;am=1;var r=an(),e=o7(),n=Ii(),t=_e(),i=Ce(),u=qi(),o=WS(),a=GS(),c=VS(),s=XS(),l=YS(),f=KS(),d=jS(),h=zS(),p=JS(),v=[0,0,0,0,0,0,0,0,0,0];function m(b,g){var y,_,$,L,S;return _=(g-b)/b,$=-e(_),L=b*$,S=t(2*$),g<b&&(S=-S),v[0]=o(S),v[1]=a(S),v[2]=c(S),v[3]=s(S),v[4]=l(S),v[5]=f(S),v[6]=d(S),v[7]=h(S),v[8]=p(S),v[9]=-.0005967612901927463,y=r(v,1/b),y*=i(-L)/t(u*b),g<b&&(y=-y),y+=n(t(L))/2,y}return vc=m,vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var mc,sm;function QS(){if(sm)return mc;sm=1;function r(e,n){var t=1,i=e,u=n;return o;function o(){var a=t;return i+=1,t*=u/i,a}}return mc=r,mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var bc,cm;function a7(){if(cm)return bc;cm=1;var r=$t(),e=QS();function n(t,i,u){var o,a;return u=u||0,a=e(t,i),o=r(a,{initialValue:u}),o}return bc=n,bc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _c,lm;function eR(){if(lm)return _c;lm=1;function r(e){var n,t,i;return e===0?1/0:(e<0?n=-e:n=e,n<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return _c=r,_c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var gc,fm;function rR(){if(fm)return gc;fm=1;var r=eR();return gc=r,gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yc,dm;function Mi(){if(dm)return yc;dm=1;var r=rR();return yc=r,yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ec,pm;function nR(){if(pm)return Ec;pm=1;var r=Mi(),e=xn(),n=Dr(),t=o7(),i=_e(),u=ge(),o=Ce(),a=Ie(),c=bn(),s=tn(),l=ye(),f=_n(),d=on(),h=Bn(),p=Et(),v=Hn();function m(b,g){var y,_,$,L,S,q,k;return $=b+p-.5,k=(g-b-p+.5)/$,b<1?g<=h||b<1/f?o(b*l(g)-g-e(b)):a(g,b)*o(-g)/n(b):(u(k*k*b)<=100&&b>150?(y=b*t(k)+g*(.5-p)/$,y=o(y)):(L=b*l(g/$),S=b-g,s(L,S)<=h||c(L,S)>=d?(_=S/b,s(L,S)/2>h&&c(L,S)/2<d?(q=a(g/$,b/2)*o(S/2),y=q*q):s(L,S)/4>h&&c(L,S)/4<d&&g>b?(q=a(g/$,b/4)*o(S/4),y=q*q,y*=y):_>h&&_<d?y=a(g*o(_)/$,b):y=o(L+S)):y=a(g/$,b)*o(S)),y*=i($/v)/r(b),y)}return Ec=m,Ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var $c,hm;function tR(){if(hm)return $c;hm=1;var r=ue(),e=Dn(),n=ge(),t=On(),i=ye(),u=Ie(),o=Rd();function a(c,s){var l,f;if(r(c)||r(s))return NaN;if(s===0)return 0;if(c===0)return-1;if(c<0&&s%2===0&&(c=-c),c>0){if((n(s*(c-1))<.5||n(s)<.2)&&(f=i(c)*s,f<.5))return t(f)}else if(o(s)!==s)return NaN;return l=u(c,s)-1,e(l)||r(l)?NaN:l}return $c=a,$c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wc,vm;function iR(){if(vm)return wc;vm=1;var r=tR();return wc=r,wc}/**
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
*/var Ac,mm;function uR(){if(mm)return Ac;mm=1;function r(e){var n,t,i;return e===0?-.01803556856784494:(e<0?n=-e:n=e,n<=1?(t=-.01803556856784494+e*(.02512664961998968+e*(.049410315156753225+e*(.0172491608709614+e*(-.0002594535632054381+e*(-.0005410098692152044+e*(-3245886498259485e-20+e*0)))))),i=1+e*(1.962029871977952+e*(1.4801966942423133+e*(.5413914320717209+e*(.09885042511280101+e*(.008213096746488934+e*(.00022493629192211576+e*-22335276320861708e-23))))))):(e=1/e,t=0+e*(-3245886498259485e-20+e*(-.0005410098692152044+e*(-.0002594535632054381+e*(.0172491608709614+e*(.049410315156753225+e*(.02512664961998968+e*-.01803556856784494)))))),i=-22335276320861708e-23+e*(.00022493629192211576+e*(.008213096746488934+e*(.09885042511280101+e*(.5413914320717209+e*(1.4801966942423133+e*(1.962029871977952+e*1))))))),t/i)}return Ac=r,Ac}/**
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
*/var Sc,bm;function oR(){if(bm)return Sc;bm=1;function r(e){var n,t,i;return e===0?.04906224540690395:(e<0?n=-e:n=e,n<=1?(t=.04906224540690395+e*(-.09691175301595212+e*(-.4149833583594954+e*(-.4065671242119384+e*(-.1584135863906922+e*(-.024014982064857155+e*-.0010034668769627955))))),i=1+e*(3.0234982984646304+e*(3.4873958536072385+e*(1.9141558827442668+e*(.5071377386143635+e*(.05770397226904519+e*.001957681026011072)))))):(e=1/e,t=-.0010034668769627955+e*(-.024014982064857155+e*(-.1584135863906922+e*(-.4065671242119384+e*(-.4149833583594954+e*(-.09691175301595212+e*.04906224540690395))))),i=.001957681026011072+e*(.05770397226904519+e*(.5071377386143635+e*(1.9141558827442668+e*(3.4873958536072385+e*(3.0234982984646304+e*1)))))),t/i)}return Sc=r,Sc}/**
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
*/var Rc,_m;function aR(){if(_m)return Rc;_m=1;function r(e){var n,t,i;return e===0?-.029232972183027003:(e<0?n=-e:n=e,n<=1?(t=-.029232972183027003+e*(.14421626775719232+e*(-.14244039073863127+e*(.05428096940550536+e*(-.008505359768683364+e*(.0004311713426792973+e*0))))),i=1+e*(-1.5016935605448505+e*(.846973248876495+e*(-.22009515181499575+e*(.02558279715597587+e*(-.0010066679553914337+e*-8271935218912905e-22)))))):(e=1/e,t=0+e*(.0004311713426792973+e*(-.008505359768683364+e*(.05428096940550536+e*(-.14244039073863127+e*(.14421626775719232+e*-.029232972183027003))))),i=-8271935218912905e-22+e*(-.0010066679553914337+e*(.02558279715597587+e*(-.22009515181499575+e*(.846973248876495+e*(-1.5016935605448505+e*1)))))),t/i)}return Rc=r,Rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var kc,gm;function sR(){if(gm)return kc;gm=1;var r=ye(),e=Or(),n=uR(),t=oR(),i=aR(),u=.15896368026733398,o=.5281534194946289,a=.45201730728149414;function c(s,l,f){var d,h,p,v;if(s<e)return-r(s);if(l===0||f===0)return 0;if(h=0,s>2){if(s>=3){do s-=1,f-=1,h+=r(s);while(s>=3);f=s-2}return p=f*(s+1),v=n(f),h+=p*u+p*v,h}return s<1&&(h+=-r(s),f=l,l=s,s+=1),s<=1.5?(p=t(l),d=l*f,h+=d*o+d*p,h):(p=f*l,v=i(-f),h+=p*a+p*v,h)}return kc=c,kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Lc,ym;function cR(){if(ym)return Lc;ym=1;var r=Dr(),e=On(),n=pr(),t=ue(),i=sR();function u(o){return t(o)?NaN:o<0?o<-.5?r(1+o)-1:e(-n(o)+i(o+2,o+1,o)):o<2?e(i(o+1,o,o-1)):r(1+o)-1}return Lc=u,Lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc,Em;function lR(){if(Em)return Cc;Em=1;var r=cR();return Cc=r,Cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ic,$m;function fR(){if($m)return Ic;$m=1;function r(e,n){var t,i,u,o;return t=-n,n=-n,i=e+1,u=1,a;function a(){return o=t/i,t*=n,u+=1,t/=u,i+=1,o}}return Ic=r,Ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var qc,wm;function dR(){if(wm)return qc;wm=1;var r=iR(),e=$t(),n=lR(),t=fR();function i(u,o,a){var c,s,l,f,d;return s=n(u),l=(s+1)/u,f=r(o,u),s-=f,s/=u,d=t(u,o),f+=1,c=a?l:0,s=-f*e(d,{initialValue:(c-s)/f}),a&&(s=-s),[s,l]}return qc=i,qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mc,Am;function Ni(){if(Am)return Mc;Am=1;var r=11754943508222875e-54;return Mc=r,Mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nc,Sm;function pR(){if(Sm)return Nc;Sm=1;var r=ge(),e=Ni(),n=Or(),t=1e6;function i(a,c,s){var l,f,d,h,p,v,m;if(l=typeof a.next=="function",m=l?a.next().value:a(),h=m[1],d=m[0],h===0&&(h=e),p=h,v=0,l===!0)do m=a.next().value,m&&(v=m[1]+m[0]*v,v===0&&(v=e),p=m[1]+m[0]/p,p===0&&(p=e),v=1/v,f=p*v,h*=f);while(r(f-1)>c&&--s);else do m=a(),m&&(v=m[1]+m[0]*v,v===0&&(v=e),p=m[1]+m[0]/p,p===0&&(p=e),v=1/v,f=p*v,h*=f);while(m&&r(f-1)>c&&--s);return d/h}function u(a,c,s){var l,f,d,h,p,v;if(l=typeof a.next=="function",v=l?a.next().value:a(),d=v[1],d===0&&(d=e),h=d,p=0,l===!0)do v=a.next().value,v&&(p=v[1]+v[0]*p,p===0&&(p=e),h=v[1]+v[0]/h,h===0&&(h=e),p=1/p,f=h*p,d*=f);while(v&&r(f-1)>c&&--s);else do v=a(),v&&(p=v[1]+v[0]*p,p===0&&(p=e),h=v[1]+v[0]/h,h===0&&(h=e),p=1/p,f=h*p,d*=f);while(v&&r(f-1)>c&&--s);return d}function o(a,c){var s,l,f;return l={},arguments.length>1&&(l=c),s=l.maxIter||t,f=l.tolerance||n,l.keep?u(a,f,s):i(a,f,s)}return Nc=o,Nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fc,Rm;function hR(){if(Rm)return Fc;Rm=1;var r=ge(),e=Or(),n=Ni(),t=1e6;function i(a,c,s){var l,f,d,h,p,v;v=a(),p=v[1],f=v[0],p===0&&(p=n),d=p,h=0;do v=a(),v&&(h=v[1]+v[0]*h,h===0&&(h=n),d=v[1]+v[0]/d,d===0&&(d=n),h=1/h,l=d*h,p*=l);while(v&&r(l-1)>c&&--s);return f/p}function u(a,c,s){var l,f,d,h,p;p=a(),h=p[1],h===0&&(h=n),f=h,d=0;do p=a(),p&&(d=p[1]+p[0]*d,d===0&&(d=n),f=p[1]+p[0]/f,f===0&&(f=n),d=1/d,l=f*d,h*=l);while(p&&r(l-1)>c&&--s);return h}function o(a,c){var s,l,f;return l={},arguments.length>1&&(l=c),f=l.tolerance||e,s=l.maxIter||t,l.keep?u(a,f,s):i(a,f,s)}return Fc=o,Fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oc,km;function s7(){if(km)return Oc;km=1;var r=i7(),e=pR(),n=hR(),t;return r()?t=e:t=n,Oc=t,Oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Dc,Lm;function vR(){if(Lm)return Dc;Lm=1;function r(e,n){var t=n-e+1,i=e,u=0;return o;function o(){return u+=1,t+=2,[u*(i-u),t]}}return Dc=r,Dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Tc,Cm;function c7(){if(Cm)return Tc;Cm=1;var r=s7(),e=vR();function n(t,i){var u=e(t,i);return 1/(i-t+1+r(u))}return Tc=n,Tc}/**
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
*/var Pc,Im;function mR(){if(Im)return Pc;Im=1;var r=Fr(),e=Dr(),n=ge(),t=Ie(),i=ye(),u=gS(),o=_n(),a=on(),c=SS(),s=RS(),l=DS(),f=TS(),d=ZS(),h=a7(),p=nR(),v=dR(),m=c7();function b(g,y,_,$){var L,S,q,k,w,E,A,R,C,D,N,B,O,P;switch(A=0,R=$,E=y<30&&y<=g+1&&g<a,E?(O=r(y),C=O===y,q=C?!1:n(O-y)===.5):(C=!1,q=!1),C&&g>.6?(R=!R,S=0):q&&g>.2?(R=!R,S=1):g<u&&y>1?S=6:g>1e3&&(y<g||n(y-50)/g<1)?(R=!R,S=7):g<.5?-.4/i(g)<y?S=2:S=3:g<1.1?g*.75<y?S=2:S=3:(w=!1,_&&y>20&&(D=n((g-y)/y),y>200?20/y>D*D&&(w=!0):D<.4&&(w=!0)),w?S=5:g-1/(3*g)<y?S=2:(S=4,R=!R)),S){case 0:A=s(y,g),_===!1&&(A*=e(y));break;case 1:A=l(y,g),_===!1&&(A*=e(y));break;case 2:A=_?p(y,g):f(y,g),A!==0&&(k=0,L=!1,R&&(k=_?1:e(y),_||A>=1||o*A>k?(k/=A,_||y<1||o/y>k?(k*=-y,L=!0):k=0):k=0),A*=h(y,g,k)/y,L&&(R=!1,A=-A));break;case 3:R=!R,N=v(y,g,R),A=N[0],P=N[1],R=!1,_&&(A/=P);break;case 4:A=_?p(y,g):f(y,g),A!==0&&(A*=m(y,g));break;case 5:A=d(y,g),g>=y&&(R=!R);break;case 6:A=_?t(g,y)/e(y+1):t(g,y)/y,A*=1-y*g/(y+1);break;case 7:A=_?p(y,g):f(y,g),A/=g,A!==0&&(A*=c(y,g));break}return _&&A>1&&(A=1),R&&(B=_?1:e(y),A=B-A),A}return Pc=b,Pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Hc,qm;function bR(){if(qm)return Hc;qm=1;var r=xn(),e=Ce(),n=ye(),t=Li(),i=on(),u=Le(),o=Ci(),a=mR(),c=a7(),s=c7();function l(f,d,h,p){var v,m,b,g;return f<0||d<=0?NaN:(v=h===void 0?!0:h,b=p,d>=o&&!v?(b&&d*4<f?(g=d*n(f)-f,g+=n(s(d,f))):!b&&d>4*f?(g=d*n(f)-f,m=0,g+=n(c(d,f,m)/d)):(g=a(f,d,!0,b),g===0?b?(g=1+1/(12*d)+1/(288*d*d),g=n(g)-d+(d-.5)*n(d),g+=n(t)):(g=d*n(f)-f,m=0,g+=n(c(d,f,m)/d)):g=n(g)+r(d)),g>i?u:e(g)):a(f,d,v,b))}return Hc=l,Hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xc,Mm;function l7(){if(Mm)return xc;Mm=1;var r=bR();return xc=r,xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Bc,Nm;function _R(){if(Nm)return Bc;Nm=1;var r=Ce(),e=Ie(),n=ye(),t=on(),i=Bn();function u(o,a){var c,s;return s=o*n(a),a>=1?s<t&&-a>i?c=e(a,o)*r(-a):o>=1?c=e(a/r(a/o),o):c=r(s-a):s>i?c=e(a,o)*r(-a):a/o<t?c=e(a/r(a/o),o):c=r(s-a),c}return Bc=u,Bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Uc,Fm;function gR(){if(Fm)return Uc;Fm=1;var r=Mi(),e=xn(),n=Dr(),t=pr(),i=_e(),u=ge(),o=Ce(),a=Ie(),c=bn(),s=tn(),l=ye(),f=on(),d=Bn(),h=Et(),p=Hn();function v(m,b){var g,y,_,$,L,S,q;return _=m+h-.5,q=(b-m-h+.5)/_,m<1?b<=d?o(m*l(b)-b-e(m)):a(b,m)*o(-b)/n(m):(u(q*q*m)<=100&&m>150?(g=m*(t(q)-q)+b*(.5-h)/_,g=o(g)):($=m*l(b/_),L=m-b,s($,L)<=d||c($,L)>=f?(y=L/m,s($,L)/2>d&&c($,L)/2<f?(S=a(b/_,m/2)*o(L/2),g=S*S):s($,L)/4>d&&c($,L)/4<f&&b>m?(S=a(b/_,m/4)*o(L/4),g=S*S,g*=g):y>d&&y<f?g=a(b*o(y)/_,m):g=o($+L)):g=a(b/_,m)*o(L)),g*=i(_/p)/r(m),g)}return Uc=v,Uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Wc,Om;function yR(){if(Om)return Wc;Om=1;var r=qd(),e=t7(),n=l7(),t=pr(),i=ge(),u=Ie(),o=ye(),a=mn(),c=Or(),s=_R(),l=gR(),f=new Array(30);function d(h,p,v,m,b,g,y){var _,$,L,S,q,k,w,E,A,R,C,D,N,B,O,P,F,Z;if(k=p-1,F=h+k/2,m<.35?R=t(-m):R=o(v),Z=-F*R,D=l(p,Z),D<=a)return b;for(y?(_=D/r(h,p),_/=u(F,p)):_=s(p,Z)/u(F,p),_*=g,f[0]=1,N=n(Z,p,!0,!0),N/=D,S=b+_*N,L=1,w=R/2,w*=w,E=1,C=4*F*F,q=p,O=1;O<f.length;++O){for(L+=2,f[O]=0,A=p-O,$=3,B=1;B<O;++B)A=B*p-O,f[O]+=A*f[O-B]/e($),$+=2;if(f[O]/=O,f[O]+=k/e(L),N=(q*(q+1)*N+(Z+q+1)*E)/C,E*=w,q+=2,P=_*f[O]*N,S+=P,P>1){if(i(P)<i(c*S))break}else if(i(P/c)<i(S))break}return S}return Wc=d,Wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Gc,Dm;function ER(){if(Dm)return Gc;Dm=1;function r(e,n,t){var i,u;if(t===0)return 1;for(i=1,u=0;u<t;u++)i*=(e+u)/(n+u);return i}return Gc=r,Gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vc,Tm;function $R(){if(Tm)return Vc;Tm=1;var r=ge(),e=bn();function n(t,i){return e(r(t),r(i))}return Vc=n,Vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xc,Pm;function wR(){if(Pm)return Xc;Pm=1;var r=$R();return Xc=r,Xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yc,Hm;function AR(){if(Hm)return Yc;Hm=1;var r=ge(),e=tn();function n(t,i){return e(r(t),r(i))}return Yc=n,Yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kc,xm;function SR(){if(xm)return Kc;xm=1;var r=AR();return Kc=r,Kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var jc,Bm;function Nd(){if(Bm)return jc;Bm=1;var r=Mi(),e=wR(),n=SR(),t=On(),i=pr(),u=_e(),o=ge(),a=Ce(),c=Ie(),s=tn(),l=ye(),f=on(),d=Bn(),h=Et(),p=Hn();function v(m,b,g,y,_){var $,L,S,q,k,w,E,A,R,C,D,N,B,O;if(!_)return c(g,m)*c(y,b);if(B=m+b,q=m+h-.5,k=b+h-.5,w=B+h-.5,$=r(B),$/=r(m)*r(b),$*=u(k/p),$*=u(q/w),E=(g*b-y*q)/q,A=(y*m-g*k)/k,n(E,A)<.2)if(E*A>0||s(m,b)<1)o(E)<.1?$*=a(m*i(E)):$*=c(g*w/q,m),o(A)<.1?$*=a(b*i(A)):$*=c(y*w/k,b);else if(e(E,A)<.5)L=m<b,S=b/m,L&&S*A<.1||!L&&E/S>.1?(R=t(S*i(A)),R=E+R+R*E,R=m*i(R),$*=a(R)):(R=t(i(E)/S),R=A+R+R*A,R=b*i(R),$*=a(R));else if(o(E)<o(A))if(O=m*i(E)+b*l(y*w/k),O<=d||O>=f){if(O+=l($),O>=f)return NaN;$=a(O)}else $*=a(O);else if(O=b*i(A)+m*l(g*w/q),O<=d||O>=f){if(O+=l($),O>=f)return NaN;$=a(O)}else $*=a(O);else if(D=g*w/q,N=y*w/k,E=m*l(D),A=b*l(N),E>=f||E<=d||A>=f||A<=d)if(m<b)if(C=c(N,b/m),R=m*(l(D)+l(C)),R<f&&R>d)$*=c(C*D,m);else{if(A+=E+l($),A>=f)return NaN;$=a(A)}else if(C=c(D,m/b),R=(l(C)+l(N))*b,R<f&&R>d)$*=c(C*N,b);else{if(A+=E+l($),A>=f)return NaN;$=a(A)}else $*=c(D,m)*c(N,b);return $}return jc=v,jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var zc,Um;function RR(){if(Um)return zc;Um=1;var r=s7(),e=Nd(),n={keep:!0,maxIter:1e3};function t(u,o,a,c){var s=0;return l;function l(){var f,d,h;return d=(u+s-1)*(u+o+s-1)*s*(o-s)*a*a,f=u+2*s-1,d/=f*f,h=s,h+=s*(o-s)*a/(u+2*s-1),h+=(u+s)*(u*c-o*a+1+s*(2-a))/(u+2*s+1),s+=1,[d,h]}}function i(u,o,a,c,s,l){var f,d,h;return f=e(u,o,a,c,s),l&&(l[1]=f),f===0?f:(h=t(u,o,a,c),d=r(h,n),f/d)}return zc=i,zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jc,Wm;function kR(){if(Wm)return Jc;Wm=1;var r=9007199254740991;return Jc=r,Jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zc,Gm;function LR(){if(Gm)return Zc;Gm=1;function r(e,n){var t=0,i;if(e===0)return n;if(n===0)return e;for(;(e&1)===0&&(n&1)===0;)e>>>=1,n>>>=1,t+=1;for(;(e&1)===0;)e>>>=1;for(;n;){for(;(n&1)===0;)n>>>=1;e>n&&(i=n,n=e,e=i),n-=e}return e<<t}return Zc=r,Zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qc,Vm;function CR(){if(Vm)return Qc;Vm=1;function r(e,n){var t=1,i;if(e===0)return n;if(n===0)return e;for(;e%2===0&&n%2===0;)e/=2,n/=2,t*=2;for(;e%2===0;)e/=2;for(;n;){for(;n%2===0;)n/=2;e>n&&(i=n,n=e,e=i),n-=e}return t*e}return Qc=r,Qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var el,Xm;function IR(){if(Xm)return el;Xm=1;var r=ue(),e=Pn(),n=Le(),t=er(),i=Z_(),u=LR(),o=CR();function a(c,s){return r(c)||r(s)?NaN:c===n||s===n||c===t||s===t?NaN:e(c)&&e(s)?(c<0&&(c=-c),s<0&&(s=-s),c<=i&&s<=i?u(c,s):o(c,s)):NaN}return el=a,el}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rl,Ym;function qR(){if(Ym)return rl;Ym=1;var r=IR();return rl=r,rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nl,Km;function MR(){if(Km)return nl;Km=1;var r=kR(),e=Le(),n=Pn(),t=ue(),i=Cd(),u=Fr(),o=qR();function a(c,s){var l,f,d,h,p,v,m;if(t(c)||t(s))return NaN;if(!n(c)||!n(s))return NaN;if(s<0||(f=1,c<0&&(c=-c+s-1,i(s)&&(f*=-1)),s>c))return 0;if(s===0||s===c)return f;if(s===1||s===c-1)return f*c;for(c-s<s&&(s=c-s),m=u(r/c),l=1,p=1;p<=s&&!(l>m);p++)l*=c,l/=p,c-=1;return p>s?f*l:(d=a(c,s-p+1),d===e?f*d:(h=a(s,s-p+1),v=o(d,h),d/=v,h/=v,l/=h,f*l*d))}return nl=a,nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tl,jm;function NR(){if(jm)return tl;jm=1;var r=MR();return tl=r,tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var il,zm;function FR(){if(zm)return il;zm=1;var r=NR(),e=Fr(),n=Ie(),t=mn();function i(u,o,a,c){var s,l,f,d,h;if(l=n(a,u),l>t)for(d=l,h=e(u-1);h>o;h--)d*=(h+1)*c/((u-h)*a),l+=d;else if(f=e(u*a),f<=o+1&&(f=e(o+2)),l=n(a,f)*n(c,u-f),l*=r(e(u),e(f)),l===0)for(h=f-1;h>o;h--)l+=n(a,h)*n(c,u-h),l*=r(e(u),e(h));else{for(d=l,s=l,h=f-1;h>o;h--)d*=(h+1)*c/((u-h)*a),l+=d;for(d=s,h=f+1;h<=u;h++)d*=(u-h+1)*a/(h*c),l+=d}return l}return il=i,il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ul,Jm;function OR(){if(Jm)return ul;Jm=1;var r=Nd();function e(n,t,i,u,o,a,c){var s,l,f,d;if(s=r(n,t,i,u,a),c&&(c[1]=s),s/=n,s===0)return s;for(f=1,l=1,d=0;d<o-1;++d)l*=(n+t+d)*i/(n+d+1),f+=l;return s*=f,s}return ul=e,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ol,Zm;function DR(){if(Zm)return ol;Zm=1;var r=Mi(),e=$t(),n=pr(),t=_e(),i=Ce(),u=Ie(),o=ye(),a=mn(),c=on(),s=Bn(),l=Et(),f=Hn(),d={maxTerms:100};function h(v,m,b,g){var y=1-m,_=1;return $;function $(){var L=g/v;return v+=1,g*=y*b/_,_+=1,y+=1,L}}function p(v,m,b,g,y,_,$){var L,S,q,k,w,E,A,R;return y?(A=v+m,S=v+l-.5,q=m+l-.5,k=A+l-.5,L=r(A)/(r(v)*r(m)),w=o(k/q)*(m-.5),E=o(b*k/S)*v,w>s&&w<c&&E>s&&E<c?(v*m<q*10?L*=i((m-.5)*n(v/q)):L*=u(k/q,m-.5),L*=u(b*k/S,v),L*=t(S/f),_&&(_[1]=L*u($,m))):(L=o(L)+w+E+(o(S)-1)/2,_&&(_[1]=i(L+m*o($))),L=i(L))):L=u(b,v),L<a?g:(R=h(v,m,b,L),d.initialValue=g,e(R,d))}return ol=p,ol}var al,Qm;function f7(){if(Qm)return al;Qm=1;var r=ue(),e=On(),n=Fr(),t=pr(),i=Sd(),u=ki(),o=_e(),a=Ce(),c=Ie(),s=bn(),l=tn(),f=_n(),d=mn(),h=Z_(),p=Id(),v=un(),m=yR(),b=ER(),g=Nd(),y=RR(),_=FR(),$=OR(),L=DR(),S=1/v;function q(k,w,E,A,R,C,D,N){var B,O,P,F,Z,W,j,ee,V,x,K,G;if(G=1-k,j=N,ee=N+D,C[ee]=-1,r(k)||k<0||k>1)return C[j]=NaN,C[ee]=NaN,C;if(A){if(w<0||E<0)return C[j]=NaN,C[ee]=NaN,C;if(w===0){if(E===0)return C[j]=NaN,C[ee]=NaN,C;if(E>0)return C[j]=R?0:1,C}else if(E===0&&w>0)return C[j]=R?1:0,C}else if(w<=0||E<=0)return C[j]=NaN,C[ee]=NaN,C;return k===0?(w===1?C[ee]=1:C[ee]=w<1?f/2:d*2,R?(C[j]=A?1:u(w,E),C):(C[j]=0,C)):k===1?(E===1?C[ee]=1:C[ee]=E<1?f/2:d*2,R?C[j]=0:C[j]=A?1:u(w,E),C):w===.5&&E===.5?(C[ee]=S*o(G*k),K=i(o(R?G:k)),K/=p,A||(K*=v),C[j]=K,C):(w===1&&(W=E,E=w,w=W,W=G,G=k,k=W,R=!R),E===1?w===1?(C[j]=R?G:k,C[ee]=1,C):(C[ee]=w*c(k,w-1),G<.5?K=R?-e(w*t(-G)):a(w*t(-G)):K=R?-(c(k,w)-1):c(k,w),A||(K/=w),C[j]=K,C):(l(w,E)<=1?(k>.5&&(W=E,E=w,w=W,W=G,G=k,k=W,R=!R),s(w,E)<=1?w>=l(.2,E)||c(k,w)<=.9?R?(P=-(A?1:u(w,E)),R=!1,P=-L(w,E,k,P,A,C,G)):P=L(w,E,k,0,A,C,G):(W=E,E=w,w=W,W=G,G=k,k=W,R=!R,G>=.3?R?(P=-(A?1:u(w,E)),R=!1,P=-L(w,E,k,P,A,C,G)):P=L(w,E,k,0,A,C,G):(A?O=1:O=b(w+E,w,20),P=$(w,E,k,G,20,A,C),R?(P-=A?1:u(w,E),R=!1,P=-m(w+20,E,k,G,P,O,A)):P=m(w+20,E,k,G,P,O,A))):E<=1||k<.1&&c(E*k,w)<=.7?R?(P=-(A?1:u(w,E)),R=!1,P=-L(w,E,k,P,A,C,G)):P=L(w,E,k,0,A,C,G):(W=E,E=w,w=W,W=G,G=k,k=W,R=!R,G>=.3?R?(P=-(A?1:u(w,E)),R=!1,P=-L(w,E,k,P,A,C,G)):P=L(w,E,k,0,A,C,G):w>=15?R?(P=-(A?1:u(w,E)),R=!1,P=-m(w,E,k,G,P,1,A)):P=m(w,E,k,G,0,1,A):(A?O=1:O=b(w+E,w,20),P=$(w,E,k,G,20,A,C),R?(P-=A?1:u(w,E),R=!1,P=-m(w+20,E,k,G,P,O,A)):P=m(w+20,E,k,G,P,O,A)))):(w<E?B=w-(w+E)*k:B=(w+E)*G-E,B<0&&(W=E,E=w,w=W,W=G,G=k,k=W,R=!R),E<40?n(w)===w&&n(E)===E&&w<h-100?(V=w-1,x=E+V,P=_(x,V,k,G),A||(P*=u(w,E))):E*k<=.7?R?(P=-(A?1:u(w,E)),R=!1,P=-L(w,E,k,P,A,C,G)):P=L(w,E,k,0,A,C,G):w>15?(x=n(E),x===E&&(x-=1),F=E-x,A?O=1:O=b(w+F,F,x),P=$(F,w,G,k,x,A),P=m(w,F,k,G,P,1,A),P/=O):A?(x=n(E),F=E-x,F<=0&&(x-=1,F+=1),P=$(F,w,G,k,x,A),P+=$(w,F,k,G,20,A),R&&(P-=1),P=m(w+20,F,k,G,P,1,A),R&&(P=-P,R=!1)):P=y(w,E,k,G,A,C):P=y(w,E,k,G,A,C)),C[ee]<0&&(C[ee]=g(w,E,k,G,!0)),Z=G*k,C[ee]!==0&&(f*Z<C[ee]?C[ee]=f/2:C[ee]/=Z),C[j]=R?(A?1:u(w,E))-P:P,C))}return al=q,al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sl,e4;function TR(){if(e4)return sl;e4=1;var r=f7();function e(n,t,i,u,o){return r(n,t,i,u,o,[0,0],1,0)}return sl=e,sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cl,r4;function d7(){if(r4)return cl;r4=1;var r=Qe(),e=TR(),n=f7();return r(e,"assign",n),cl=e,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll,n4;function PR(){if(n4)return ll;n4=1;var r=d7().assign;function e(n,t,i,u,o){var a=[0,0];return u=u!==!1,o=o===!0,r(n,t,i,u,o,a,1,0),a[0]}return ll=e,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fl,t4;function wt(){if(t4)return fl;t4=1;var r=PR();return fl=r,fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dl,i4;function HR(){if(i4)return dl;i4=1;var r=wt(),e=ue();function n(t,i,u){return e(t)||e(i)||e(u)||i<=0||u<=0?NaN:t<=0?0:t>=1?1:r(t,i,u)}return dl=n,dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pl,u4;function xR(){if(u4)return pl;u4=1;function r(e){return n;function n(){return e}}return pl=r,pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hl,o4;function hr(){if(o4)return hl;o4=1;var r=xR();return hl=r,hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vl,a4;function BR(){if(a4)return vl;a4=1;var r=hr(),e=wt(),n=ue();function t(i,u){if(n(i)||n(u)||i<=0||u<=0)return r(NaN);return o;function o(a){return n(a)?NaN:a<=0?0:a>=1?1:e(a,i,u)}}return vl=t,vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ml,s4;function UR(){if(s4)return ml;s4=1;var r=Qe(),e=HR(),n=BR();return r(e,"factory",n),ml=e,ml}var WR=UR();const GR=Nr(WR);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bl,c4;function p7(){if(c4)return bl;c4=1;var r=.9189385332046728;return bl=r,bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var _l,l4;function VR(){if(l4)return _l;l4=1;var r=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],e=r.length;function n(t){var i,u,o,a,c;if(t<-1.1||t>1.1)return NaN;for(o=0,a=0,i=2*t,c=0;c<e;c++)u=o,o=a,a=i*o-u+r[c];return(a-u)*.5}return _l=n,_l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var gl,f4;function XR(){if(f4)return gl;f4=1;var r=Ie(),e=VR(),n=9490626562425156e-8,t=3745194030963158e291;function i(u){return u<10?NaN:u>=t?0:u<n?e(2*r(10/u,2)-1)/u:1/(u*12)}return gl=i,gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var yl,d4;function YR(){if(d4)return yl;d4=1;var r=xn(),e=pr(),n=Dr(),t=bn(),i=tn(),u=ye(),o=p7(),a=er(),c=Le(),s=XR();function l(f,d){var h,p,v;return p=i(f,d),v=t(f,d),p<0?NaN:p===0?c:v===c?a:p>=10?(h=s(p)+s(v)-s(p+v),-.5*u(v)+o+h+(p-.5)*u(p/(p+v))+v*e(-p/(p+v))):v>=10?(h=s(v)-s(p+v),r(p)+h+p-p*u(p+v)+(v-.5)*e(-p/(p+v))):u(n(p)*(n(v)/n(p+v)))}return yl=l,yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var El,p4;function h7(){if(p4)return El;p4=1;var r=YR();return El=r,El}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $l,h4;function KR(){if(h4)return $l;h4=1;var r=h7(),e=ue(),n=pr(),t=Ce(),i=ye(),u=Le();function o(a,c,s){var l;return e(a)||e(c)||e(s)||c<=0||s<=0?NaN:a<0||a>1?0:a===0?c<1?u:c>1?0:s:a===1?s<1?u:s>1?0:c:(l=(c-1)*i(a),l+=(s-1)*n(-a),l-=r(c,s),t(l))}return $l=o,$l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wl,v4;function jR(){if(v4)return wl;v4=1;var r=hr(),e=h7(),n=ue(),t=pr(),i=Ce(),u=ye(),o=Le();function a(c,s){var l;if(n(c)||n(s)||c<=0||s<=0)return r(NaN);return l=e(c,s),f;function f(d){var h;return n(d)?NaN:d<0||d>1?0:d===0?c<1?o:c>1?0:s:d===1?s<1?o:s>1?0:c:(h=-l,h+=(c-1)*u(d),h+=(s-1)*t(-d),i(h))}}return wl=a,wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Al,m4;function zR(){if(m4)return Al;m4=1;var r=Qe(),e=KR(),n=jR();return r(e,"factory",n),Al=e,Al}var JR=zR();const ZR=Nr(JR);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sl,b4;function QR(){if(b4)return Sl;b4=1;function r(e){var n,t,i;return e===0?-.0005087819496582806:(e<0?n=-e:n=e,n<=1?(t=-.0005087819496582806+e*(-.008368748197417368+e*(.03348066254097446+e*(-.012692614766297404+e*(-.03656379714117627+e*(.02198786811111689+e*(.008226878746769157+e*(-.005387729650712429+e*(0+e*0)))))))),i=1+e*(-.9700050433032906+e*(-1.5657455823417585+e*(1.5622155839842302+e*(.662328840472003+e*(-.7122890234154284+e*(-.05273963823400997+e*(.07952836873415717+e*(-.0023339375937419+e*.0008862163904564247))))))))):(e=1/e,t=0+e*(0+e*(-.005387729650712429+e*(.008226878746769157+e*(.02198786811111689+e*(-.03656379714117627+e*(-.012692614766297404+e*(.03348066254097446+e*(-.008368748197417368+e*-.0005087819496582806)))))))),i=.0008862163904564247+e*(-.0023339375937419+e*(.07952836873415717+e*(-.05273963823400997+e*(-.7122890234154284+e*(.662328840472003+e*(1.5622155839842302+e*(-1.5657455823417585+e*(-.9700050433032906+e*1))))))))),t/i)}return Sl=r,Sl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rl,_4;function ek(){if(_4)return Rl;_4=1;function r(e){var n,t,i;return e===0?-.20243350835593876:(e<0?n=-e:n=e,n<=1?(t=-.20243350835593876+e*(.10526468069939171+e*(8.3705032834312+e*(17.644729840837403+e*(-18.851064805871424+e*(-44.6382324441787+e*(17.445385985570866+e*(21.12946554483405+e*-3.6719225470772936))))))),i=1+e*(6.242641248542475+e*(3.971343795334387+e*(-28.66081804998+e*(-20.14326346804852+e*(48.560921310873994+e*(10.826866735546016+e*(-22.643693341313973+e*1.7211476576120028)))))))):(e=1/e,t=-3.6719225470772936+e*(21.12946554483405+e*(17.445385985570866+e*(-44.6382324441787+e*(-18.851064805871424+e*(17.644729840837403+e*(8.3705032834312+e*(.10526468069939171+e*-.20243350835593876))))))),i=1.7211476576120028+e*(-22.643693341313973+e*(10.826866735546016+e*(48.560921310873994+e*(-20.14326346804852+e*(-28.66081804998+e*(3.971343795334387+e*(6.242641248542475+e*1)))))))),t/i)}return Rl=r,Rl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kl,g4;function rk(){if(g4)return kl;g4=1;function r(e){var n,t,i;return e===0?-.1311027816799519:(e<0?n=-e:n=e,n<=1?(t=-.1311027816799519+e*(-.16379404719331705+e*(.11703015634199525+e*(.38707973897260434+e*(.3377855389120359+e*(.14286953440815717+e*(.029015791000532906+e*(.0021455899538880526+e*(-6794655751811263e-22+e*(28522533178221704e-24+e*-681149956853777e-24))))))))),i=1+e*(3.4662540724256723+e*(5.381683457070069+e*(4.778465929458438+e*(2.5930192162362027+e*(.848854343457902+e*(.15226433829533179+e*(.011059242293464892+e*(0+e*(0+e*0)))))))))):(e=1/e,t=-681149956853777e-24+e*(28522533178221704e-24+e*(-6794655751811263e-22+e*(.0021455899538880526+e*(.029015791000532906+e*(.14286953440815717+e*(.3377855389120359+e*(.38707973897260434+e*(.11703015634199525+e*(-.16379404719331705+e*-.1311027816799519))))))))),i=0+e*(0+e*(0+e*(.011059242293464892+e*(.15226433829533179+e*(.848854343457902+e*(2.5930192162362027+e*(4.778465929458438+e*(5.381683457070069+e*(3.4662540724256723+e*1)))))))))),t/i)}return kl=r,kl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ll,y4;function nk(){if(y4)return Ll;y4=1;function r(e){var n,t,i;return e===0?-.0350353787183178:(e<0?n=-e:n=e,n<=1?(t=-.0350353787183178+e*(-.0022242652921344794+e*(.018557330651423107+e*(.009508047013259196+e*(.0018712349281955923+e*(.00015754461742496055+e*(460469890584318e-20+e*(-2304047769118826e-25+e*26633922742578204e-28))))))),i=1+e*(1.3653349817554064+e*(.7620591645536234+e*(.22009110576413124+e*(.03415891436709477+e*(.00263861676657016+e*(7646752923027944e-20+e*(0+e*0)))))))):(e=1/e,t=26633922742578204e-28+e*(-2304047769118826e-25+e*(460469890584318e-20+e*(.00015754461742496055+e*(.0018712349281955923+e*(.009508047013259196+e*(.018557330651423107+e*(-.0022242652921344794+e*-.0350353787183178))))))),i=0+e*(0+e*(7646752923027944e-20+e*(.00263861676657016+e*(.03415891436709477+e*(.22009110576413124+e*(.7620591645536234+e*(1.3653349817554064+e*1)))))))),t/i)}return Ll=r,Ll}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cl,E4;function tk(){if(E4)return Cl;E4=1;function r(e){var n,t,i;return e===0?-.016743100507663373:(e<0?n=-e:n=e,n<=1?(t=-.016743100507663373+e*(-.0011295143874558028+e*(.001056288621524929+e*(.00020938631748758808+e*(14962478375834237e-21+e*(44969678992770644e-23+e*(4625961635228786e-24+e*(-2811287356288318e-29+e*9905570997331033e-32))))))),i=1+e*(.5914293448864175+e*(.1381518657490833+e*(.016074608709367652+e*(.0009640118070051656+e*(27533547476472603e-21+e*(282243172016108e-21+e*(0+e*0)))))))):(e=1/e,t=9905570997331033e-32+e*(-2811287356288318e-29+e*(4625961635228786e-24+e*(44969678992770644e-23+e*(14962478375834237e-21+e*(.00020938631748758808+e*(.001056288621524929+e*(-.0011295143874558028+e*-.016743100507663373))))))),i=0+e*(0+e*(282243172016108e-21+e*(27533547476472603e-21+e*(.0009640118070051656+e*(.016074608709367652+e*(.1381518657490833+e*(.5914293448864175+e*1)))))))),t/i)}return Cl=r,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Il,$4;function ik(){if($4)return Il;$4=1;var r=ue(),e=_e(),n=ye(),t=Le(),i=er(),u=QR(),o=ek(),a=rk(),c=nk(),s=tk(),l=.08913147449493408,f=2.249481201171875,d=.807220458984375,h=.9399557113647461,p=.9836282730102539;function v(m){var b,g,y,_,$;return r(m)?NaN:m===0?t:m===2?i:m===1?0:m>2||m<0?NaN:(m>1?(b=-1,y=2-m):(b=1,y=m),m=1-y,m<=.5?(_=m*(m+10),$=u(m),b*(_*l+_*$)):y>=.25?(_=e(-2*n(y)),y-=.25,$=o(y),b*(_/(f+$))):(y=e(-n(y)),y<3?(g=y-1.125,$=a(g),b*(d*y+$*y)):y<6?(g=y-3,$=c(g),b*(h*y+$*y)):(g=y-6,$=s(g),b*(p*y+$*y))))}return Il=v,Il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ql,w4;function At(){if(w4)return ql;w4=1;var r=ik();return ql=r,ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ml,A4;function uk(){if(A4)return Ml;A4=1;var r=ue(),e=Sd(),n=_e(),t=V_(),i=6123233995736766e-32;function u(o){var a;return r(o)?NaN:o<-1||o>1?NaN:o>.5?2*e(n(.5-.5*o)):(a=t-e(o),a+=i,a+=t,a)}return Ml=u,Ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nl,S4;function ok(){if(S4)return Nl;S4=1;var r=uk();return Nl=r,Nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fl,R4;function Fd(){if(R4)return Fl;R4=1;var r=1.4142135623730951;return Fl=r,Fl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ol,k4;function ak(){if(k4)return Ol;k4=1;function r(e){return e===0?.16666666666666666:.16666666666666666+e*.16666666666666666}return Ol=r,Ol}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dl,L4;function sk(){if(L4)return Dl;L4=1;function r(e){return e===0?.058333333333333334:.058333333333333334+e*(.06666666666666667+e*.008333333333333333)}return Dl=r,Dl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tl,C4;function ck(){if(C4)return Tl;C4=1;function r(e){return e===0?.0251984126984127:.0251984126984127+e*(.026785714285714284+e*(.0017857142857142857+e*.0001984126984126984))}return Tl=r,Tl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pl,I4;function lk(){if(I4)return Pl;I4=1;function r(e){return e===0?.012039792768959435:.012039792768959435+e*(.010559964726631394+e*(-.0011078042328042327+e*(.0003747795414462081+e*27557319223985893e-22)))}return Pl=r,Pl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hl,q4;function fk(){if(q4)return Hl;q4=1;function r(e){return e===0?.003837005972422639:.003837005972422639+e*(.00610392115600449+e*(-.0016095979637646305+e*(.0005945867404200738+e*(-6270542728876062e-20+e*2505210838544172e-23))))}return Hl=r,Hl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xl,M4;function dk(){if(M4)return xl;M4=1;function r(e){return e===0?.0032177478835464946:.0032177478835464946+e*(.0010898206731540065+e*(-.0012579159844784845+e*(.0006908420797309686+e*(-.00016376804137220805+e*(154012654012654e-19+e*16059043836821613e-26)))))}return xl=r,xl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bl,N4;function pk(){if(N4)return Bl;N4=1;function r(e){return e===0?.001743826229834001:.001743826229834001+e*(3353097688001788e-20+e*(-.0007624513544032393+e*(.0006451304695145635+e*(-.000249472580470431+e*(49255746366361444e-21+e*(-39851014346715405e-22+e*7647163731819816e-28))))))}return Bl=r,Bl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ul,F4;function hk(){if(F4)return Ul;F4=1;function r(e){return e===0?.0009647274732138864:.0009647274732138864+e*(-.0003110108632631878+e*(-.00036307660358786886+e*(.0005140660578834113+e*(-.00029133414466938067+e*(9086710793521991e-20+e*(-15303004486655377e-21+e*(10914179173496788e-22+e*28114572543455206e-31)))))))}return Ul=r,Ul}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wl,O4;function vk(){if(O4)return Wl;O4=1;function r(e){return e===0?.0005422926281312969:.0005422926281312969+e*(-.0003694266780000966+e*(-.00010230378073700413+e*(.00035764655430568635+e*(-.00028690924218514614+e*(.00012645437628698076+e*(-33202652391372056e-21+e*(4890304529197534e-21+e*(-3123956959982987e-22+e*822063524662433e-32))))))))}return Wl=r,Wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Gl,D4;function mk(){if(D4)return Gl;D4=1;var r=qd(),e=an(),n=_e(),t=un(),i=ak(),u=sk(),o=ck(),a=lk(),c=fk(),s=dk(),l=pk(),f=hk(),d=vk(),h=0,p=[1,0,0,0,0,0,0,0,0,0];function v(m,b){var g,y;return y=r(m/2,.5)*n(m*t)*(b-.5),g=1/m,p[1]=i(g),p[2]=u(g),p[3]=o(g),p[4]=a(g),p[5]=c(g),p[6]=s(g),p[7]=l(g),p[8]=f(g),p[9]=d(g),h+y*e(p,y*y)}return Gl=v,Gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Vl,T4;function bk(){if(T4)return Vl;T4=1;var r=qd(),e=an(),n=_e(),t=Ie(),i=un(),u=[0,0,0,0,0,0,0];function o(a,c){var s,l,f,d,h,p,v,m;return m=r(a/2,.5)*n(a*i)*c,d=a+2,h=a+4,p=a+6,u[0]=1,u[1]=-(a+1)/(2*d),d*=a+2,u[2]=-a*(a+1)*(a+3)/(8*d*h),d*=a+2,u[3]=-a*(a+1)*(a+5)*((3*a+7)*a-2)/(48*d*h*p),d*=a+2,h*=a+4,u[4]=-a*(a+1)*(a+7)*(((((15*a+154)*a+465)*a+286)*a-336)*a+64)/(384*d*h*p*(a+8)),d*=a+2,u[5]=-a*(a+1)*(a+3)*(a+9)*((((((35*a+452)*a+1573)*a+600)*a-2020)*a+928)*a-128)/(1280*d*h*p*(a+8)*(a+10)),d*=a+2,h*=a+4,p*=a+6,u[6]=-a*(a+1)*(a+11)*(((((((((((945*a+31506)*a+425858)*a+2980236)*a+11266745)*a+20675018)*a+7747124)*a-22574632)*a-8565600)*a+18108416)*a-7099392)*a+884736)/(46080*d*h*p*(a+8)*(a+10)*(a+12)),v=n(a),f=t(v*m,1/a),l=f*f,s=e(u,l),s*=v,s/=f,-s}return Vl=o,Vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Xl,P4;function _k(){if(P4)return Xl;P4=1;var r=At(),e=On(),n=_e(),t=Ie(),i=Id(),u=Fd();function o(a,c){var s,l,f,d,h,p,v;return a>1e20?-r(2*c)*u:(s=1/(a-.5),l=48/(s*s),f=((20700*s/l-98)*s-16)*s+96.36,d=((94.5/(l+f)-3)/l+1)*n(s*i)*a,v=t(d*2*c,2/a),v>.05+s?(p=-r(2*c)*u,v=p*p,a<5&&(f+=.3*(a-4.5)*(p+.6)),f+=(((.05*d*p-5)*p-7)*p-2)*p+l,v=(((((.4*v+6.3)*v+36)*v+94.5)/f-v-3)/l+1)*p,v=e(s*v*v)):v=((1/(((a+6)/(a*v)-.089*d-.822)*(a+2)*3)+.5/(a+4))*v-1)*(a+1)/(a+2)+1/v,h=n(a*v),-h)}return Xl=o,Xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Yl,H4;function gk(){if(H4)return Yl;H4=1;var r=At(),e=Fr(),n=Tn(),t=r7(),i=ok(),u=_e(),o=ge(),a=Md(),c=Ie(),s=yt(),l=Fd(),f=un(),d=mk(),h=bk(),p=_k(),v=268435456,m=1/3,b=106/3,g=.8549879733383485;function y(_,$,L){var S,q,k,w,E,A,R,C,D,N,B,O,P,F,Z,W;if(E=0,$>L?(R=L,L=$,$=R,w=!0):w=!1,e(_)===_&&_<20)switch(q=n(1,b),e(_)){case 1:$===.5?E=0:E=-a(f*$)/s(f*$);break;case 2:E=(2*$-1)/u(2*$*L);break;case 4:A=4*$*L,k=u(A),P=4*a(i(k)/3)/k,F=u(P-4),E=$-.5<0?-F:F;break;case 6:if($<1e-150)return(w?-1:1)*p(_,$);Z=4*($-$*$),W=c(Z,m),O=6*(1+g*(1/W-1));do D=O*O,N=D*D,B=O*N,C=O,O=2*(8*Z*B-270*D+2187)/(5*(4*Z*N-216*O-243));while(o((O-C)/O)>q);O=u(O-_),E=$-.5<0?-O:O;break;default:_>v?E=r(2*$)*l:_<3?(S=.2742-_*.0242143,$>S?E=d(_,$):E=h(_,$)):(S=n(1,t(_/-.654)),$>S?E=p(_,$):E=h(_,$))}else _>v?E=-r(2*$)*l:_<3?(S=.2742-_*.0242143,$>S?E=d(_,$):E=h(_,$)):(S=n(1,t(_/-.654)),$>S?E=p(_,$):E=h(_,$));return w?-E:E}return Yl=y,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Kl,x4;function yk(){if(x4)return Kl;x4=1;var r=gk();function e(n,t,i){var u,o,a,c;return o=t/2,a=1-o,u=n*2,c=r(u,o,a),i&&(i.value=c*c/(u+c*c)),u/(u+c*c)}return Kl=e,Kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var jl,B4;function Ek(){if(B4)return jl;B4=1;var r=an(),e=At(),n=_e(),t=Ce(),i=Fd(),u=[0,0,0,0,0,0,0],o=[0,0,0,0];function a(c,s,l){var f,d,h,p,v,m,b;return f=e(2*l),f/=-n(c/2),o[0]=f,m=s-c,p=m*m,v=p*m,u[0]=-m*i/2,u[1]=(1-2*m)/8,u[2]=-(m*i/48),u[3]=-1/192,u[4]=-m*i/3840,u[5]=0,u[6]=0,o[1]=r(u,f),u[0]=m*i*(3*m-2)/12,u[1]=(20*p-12*m+1)/128,u[2]=m*i*(20*m-1)/960,u[3]=(16*p+30*m-15)/4608,u[4]=m*i*(21*m+32)/53760,u[5]=(-(32*p)+63)/368640,u[6]=-m*i*(120*m+17)/25804480,o[2]=r(u,f),u[0]=m*i*(-75*p+80*m-16)/480,u[1]=(-1080*v+868*p-90*m-45)/9216,u[2]=m*i*(-1190*p+84*m+373)/53760,u[3]=(-2240*v-2508*p+2100*m-165)/368640,u[4]=0,u[5]=0,u[6]=0,o[3]=r(u,f),h=r(o,1/c),d=h*h,b=-t(-d/2),d===0?.5:(1+h*n((1+b)/d))/2}return jl=a,jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var zl,U4;function v7(){if(U4)return zl;U4=1;var r=ye(),e=_n(),n=e/4;function t(i,u){return o;function o(a){var c,s,l;return l=1-a,l===0?[-n,-n]:a===0?[-n,-n]:(s=r(a)+u*r(l)+i,c=1/a-u/l,[s,c])}}return zl=t,zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jl,W4;function $k(){if(W4)return Jl;W4=1;var r=ue();function e(n){return n===0||r(n)?n:n<0?-1:1}return Jl=e,Jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zl,G4;function Fi(){if(G4)return Zl;G4=1;var r=$k();return Zl=r,Zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ql,V4;function m7(){if(V4)return Ql;V4=1;var r=Fi(),e=ge(),n=Tn(),t=_n();function i(u,o,a,c,s,l){var f,d,h,p,v,m,b,g,y,_;y=0,f=0,v=o,p=n(1,1-s),b=t,d=t,h=t,m=l;do{if(f=y,h=d,d=b,g=u(v),y=g[0],_=g[1],m-=1,y===0)break;if(_===0?(f===0&&(v===a?o=c:o=a,f=u(o),b=o-v),r(f)*r(y)<0?b<0?b=(v-a)/2:b=(v-c)/2:b<0?b=(v-c)/2:b=(v-a)/2):b=y/_,e(b*2)>e(h)&&(b=b>0?(v-a)/2:(v-c)/2),o=v,v-=b,v<=a){if(b=.5*(o-a),v=o-b,v===a||v===c)break}else if(v>=c&&(b=.5*(o-c),v=o-b,v===a||v===c))break;b>0?c=o:a=o}while(m&&e(v*p)<e(b));return v}return Ql=i,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ef,X4;function wk(){if(X4)return ef;X4=1;function r(e){return e===0?-1:-1+e*(-5+e*5)}return ef=r,ef}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rf,Y4;function Ak(){if(Y4)return rf;Y4=1;function r(e){return e===0?1:1+e*(21+e*(-69+e*46))}return rf=r,rf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nf,K4;function Sk(){if(K4)return nf;K4=1;function r(e){return e===0?7:7+e*(-2+e*(33+e*(-62+e*31)))}return nf=r,nf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tf,j4;function Rk(){if(j4)return tf;j4=1;function r(e){return e===0?25:25+e*(-52+e*(-17+e*(88+e*(-115+e*46))))}return tf=r,tf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uf,z4;function kk(){if(z4)return uf;z4=1;function r(e){return e===0?7:7+e*(12+e*(-78+e*52))}return uf=r,uf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var of,J4;function Lk(){if(J4)return of;J4=1;function r(e){return e===0?-7:-7+e*(2+e*(183+e*(-370+e*185)))}return of=r,of}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var af,Z4;function Ck(){if(Z4)return af;Z4=1;function r(e){return e===0?-533:-533+e*(776+e*(-1835+e*(10240+e*(-13525+e*5410))))}return af=r,af}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sf,Q4;function Ik(){if(Q4)return sf;Q4=1;function r(e){return e===0?-1579:-1579+e*(3747+e*(-3372+e*(-15821+e*(45588+e*(-45213+e*15071)))))}return sf=r,sf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cf,e5;function qk(){if(e5)return cf;e5=1;function r(e){return e===0?449:449+e*(-1259+e*(-769+e*(6686+e*(-9260+e*3704))))}return cf=r,cf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lf,r5;function Mk(){if(r5)return lf;r5=1;function r(e){return e===0?63149:63149+e*(-151557+e*(140052+e*(-727469+e*(2239932+e*(-2251437+e*750479)))))}return lf=r,lf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ff,n5;function Nk(){if(n5)return ff;n5=1;function r(e){return e===0?29233:29233+e*(-78755+e*(105222+e*(146879+e*(-1602610+e*(3195183+e*(-2554139+e*729754))))))}return ff=r,ff}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var df,t5;function Fk(){if(t5)return df;t5=1;function r(e){return e===0?1:1+e*(-13+e*13)}return df=r,df}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,i5;function Ok(){if(i5)return pf;i5=1;function r(e){return e===0?1:1+e*(21+e*(-69+e*46))}return pf=r,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var hf,u5;function Dk(){if(u5)return hf;u5=1;var r=an(),e=At(),n=ge(),t=Ce(),i=ye(),u=_e(),o=yt(),a=Md(),c=v7(),s=m7(),l=wk(),f=Ak(),d=Sk(),h=Rk(),p=kk(),v=Lk(),m=Ck(),b=Ik(),g=qk(),y=Mk(),_=Nk(),$=Fk(),L=Ok(),S=[0,0,0,0,0,0],q=[0,0,0,0];function k(w,E,A){var R,C,D,N,B,O,P,F,Z,W,j,ee,V,x,K,G,we,le,re,ie;return B=e(2*w)/-u(E/2),le=o(A),we=a(A),q[0]=B,K=le*le,G=we*we,V=le*we,ee=V*V,j=ee*V,W=ee*ee,Z=ee*j,F=j*j,P=W*j,S[0]=(2*K-1)/(3*V),S[1]=-l(K)/(36*ee),S[2]=f(K)/(1620*j),S[3]=d(K)/(6480*W),S[4]=h(K)/(90720*Z),S[5]=0,q[1]=r(S,B),S[0]=-p(K)/(405*j),S[1]=v(K)/(2592*W),S[2]=-m(K)/(204120*Z),S[3]=-b(K)/(2099520*F),S[4]=0,S[5]=0,q[2]=r(S,B),S[0]=g(K)/(102060*Z),S[1]=-y(K)/(20995200*F),S[2]=_(K)/(36741600*P),S[3]=0,S[4]=0,S[5]=0,q[3]=r(S,B),O=r(q,1/E),D=we/le,D*=D,x=-(O*O)/(2*K)+i(K)+G*i(G)/K,n(O)<.7?(S[0]=K,S[1]=V,S[2]=(1-2*K)/3,S[3]=$(K)/(36*V),S[4]=L(K)/(270*ee),S[5]=0,ie=r(S,O)):(re=t(x),S[0]=re,S[1]=D,S[2]=0,S[3]=3*D*(3*D+1)/6,S[4]=4*D*(4*D+1)*(4*D+2)/24,S[5]=5*D*(5*D+1)*(5*D+2)*(5*D+3)/120,ie=r(S,re),(ie-K)*O<0&&(ie=1-ie)),O<0?(C=0,R=K):(C=K,R=1),(ie<C||ie>R)&&(ie=(C+R)/2),N=c(-x,D),ie=s(N,ie,C,R,32,100),ie}return hf=k,hf}var Tt={exports:{}},Pt={exports:{}},vf,o5;function Tk(){if(o5)return vf;o5=1;var r=1e3,e=r*60,n=e*60,t=n*24,i=t*365.25;vf=function(s,l){l=l||{};var f=typeof s;if(f==="string"&&s.length>0)return u(s);if(f==="number"&&isNaN(s)===!1)return l.long?a(s):o(s);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(s))};function u(s){if(s=String(s),!(s.length>100)){var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(s);if(l){var f=parseFloat(l[1]),d=(l[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return f*i;case"days":case"day":case"d":return f*t;case"hours":case"hour":case"hrs":case"hr":case"h":return f*n;case"minutes":case"minute":case"mins":case"min":case"m":return f*e;case"seconds":case"second":case"secs":case"sec":case"s":return f*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return f;default:return}}}}function o(s){return s>=t?Math.round(s/t)+"d":s>=n?Math.round(s/n)+"h":s>=e?Math.round(s/e)+"m":s>=r?Math.round(s/r)+"s":s+"ms"}function a(s){return c(s,t,"day")||c(s,n,"hour")||c(s,e,"minute")||c(s,r,"second")||s+" ms"}function c(s,l,f){if(!(s<l))return s<l*1.5?Math.floor(s/l)+" "+f:Math.ceil(s/l)+" "+f+"s"}return vf}var a5;function Pk(){return a5||(a5=1,(function(r,e){e=r.exports=i.debug=i.default=i,e.coerce=c,e.disable=o,e.enable=u,e.enabled=a,e.humanize=Tk(),e.names=[],e.skips=[],e.formatters={};var n;function t(s){var l=0,f;for(f in s)l=(l<<5)-l+s.charCodeAt(f),l|=0;return e.colors[Math.abs(l)%e.colors.length]}function i(s){function l(){if(l.enabled){var f=l,d=+new Date,h=d-(n||d);f.diff=h,f.prev=n,f.curr=d,n=d;for(var p=new Array(arguments.length),v=0;v<p.length;v++)p[v]=arguments[v];p[0]=e.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");var m=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,function(g,y){if(g==="%%")return g;m++;var _=e.formatters[y];if(typeof _=="function"){var $=p[m];g=_.call(f,$),p.splice(m,1),m--}return g}),e.formatArgs.call(f,p);var b=l.log||e.log||console.log.bind(console);b.apply(f,p)}}return l.namespace=s,l.enabled=e.enabled(s),l.useColors=e.useColors(),l.color=t(s),typeof e.init=="function"&&e.init(l),l}function u(s){e.save(s),e.names=[],e.skips=[];for(var l=(typeof s=="string"?s:"").split(/[\s,]+/),f=l.length,d=0;d<f;d++)l[d]&&(s=l[d].replace(/\*/g,".*?"),s[0]==="-"?e.skips.push(new RegExp("^"+s.substr(1)+"$")):e.names.push(new RegExp("^"+s+"$")))}function o(){e.enable("")}function a(s){var l,f;for(l=0,f=e.skips.length;l<f;l++)if(e.skips[l].test(s))return!1;for(l=0,f=e.names.length;l<f;l++)if(e.names[l].test(s))return!0;return!1}function c(s){return s instanceof Error?s.stack||s.message:s}})(Pt,Pt.exports)),Pt.exports}var s5;function b7(){return s5||(s5=1,(function(r,e){var n={};e=r.exports=Pk(),e.log=u,e.formatArgs=i,e.save=o,e.load=a,e.useColors=t,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function t(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(s){try{return JSON.stringify(s)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function i(s){var l=this.useColors;if(s[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+s[0]+(l?"%c ":" ")+"+"+e.humanize(this.diff),!!l){var f="color: "+this.color;s.splice(1,0,f,"color: inherit");var d=0,h=0;s[0].replace(/%[a-zA-Z%]/g,function(p){p!=="%%"&&(d++,p==="%c"&&(h=d))}),s.splice(h,0,f)}}function u(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function o(s){try{s==null?e.storage.removeItem("debug"):e.storage.debug=s}catch{}}function a(){var s;try{s=e.storage.debug}catch{}return!s&&typeof process<"u"&&"env"in process&&(s=n.DEBUG),s}e.enable(a());function c(){try{return window.localStorage}catch{}}})(Tt,Tt.exports)),Tt.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mf,c5;function Oi(){if(c5)return mf;c5=1;var r=34028234663852886e22;return mf=r,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bf,l5;function Hk(){if(l5)return bf;l5=1;var r=b7(),e=l7(),n=ge(),t=Ce(),i=ye(),u=Oi(),o=r("gammaincinv:higher_newton");function a(c,s,l,f,d,h,p,v){var m,b,g,y,_,$,L,S,q,k,w,E,A,R;R=c,w=1,E=1,$=s*s,b=c;do{if(R=c,L=R*R,l===0){if(m=(1-s)*i(R)+R+h,m>i(u))return o("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),b;A=t(m)}else A=-p*R;v?(S=e(R,s,!0,!1),g=-A*(S-f)):(q=e(R,s,!0,!0),g=A*(q-d)),A=g,f>1e-120||E>1?(y=.5*(R-s+1)/R,_=(2*L-4*R*s+4*R+2*$-3*s+1)/L,_/=6,c=R+A*(1+A*(y+A*_))):c=R+A,w=n(R/c-1),E+=1,R=c,R<0&&(R=b,E=100)}while(w>2e-14&&E<35);return(w>2e-14||E>99)&&o("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),k=R||0,k}return bf=a,bf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _f,f5;function xk(){if(f5)return _f;f5=1;function r(e){return e===0?0:0+e*(1+e*(1+e*(1.5+e*(2.6666666666666665+e*(5.208333333333333+e*10.8)))))}return _f=r,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gf,d5;function Bk(){if(d5)return gf;d5=1;function r(e){return e===0?1:1+e*(1+e*(.3333333333333333+e*(.027777777777777776+e*(-.003703703703703704+e*(.0002314814814814815+e*5878894767783657e-20)))))}return gf=r,gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yf,p5;function _7(){if(p5)return yf;p5=1;var r=ge(),e=Ce(),n=ye(),t=an(),i=xk(),u=Bk(),o=1e-8,a=.08333333333333333,c=.008333333333333333,s=[1,0,0,0,0,0];function l(f){var d,h,p,v,m,b,g,y,_;if(_=f*f*.5,f===0?m=0:f<-1?(y=e(-1-_),m=i(y)):f<1?(y=f,m=u(y)):(y=11+_,b=n(y),m=y+b,y=1/y,d=b*b,h=d*b,p=h*b,v=p*b,s[1]=(2-b)*.5,s[2]=(-9*b+6+2*d)/6,s[3]=-(3*h+36*b-22*d-12)*a,s[4]=(60+350*d-300*b-125*h+12*p)/60,s[5]=-(-120-274*p+900*b-1700*d+1125*h+20*v)*c,m+=b*y*t(s,y)),y=1,f>-3.5&&f<-.03||f>.03&&f<40){y=1,g=m;do m=g*(_+n(g))/(g-1),y=r(g/m-1),g=m;while(y>o)}return m}return yf=l,yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ef,h5;function Uk(){if(h5)return Ef;h5=1;var r=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function e(n,t){var i,u,o,a,c;u=0,o=0,i=t+t,c=n;do a=o,o=u,u=i*o-a+r[c],c-=1;while(c>=0);return(u-a)/2}return Ef=e,Ef}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $f,v5;function Wk(){if(v5)return $f;v5=1;function r(e){return e===0?.025721014990011306:.025721014990011306+e*(.08247596616699963+e*(-.0025328157302663564+e*(.0006099292666946337+e*(-.00033543297638406+e*.000250505279903))))}return $f=r,$f}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wf,m5;function Gk(){if(m5)return wf;m5=1;function r(e){return e===0?.08333333333333333:.08333333333333333+e*(-.002777777777777778+e*(.0007936507936507937+e*-.0005952380952380953))}return wf=r,wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Af,b5;function Vk(){if(b5)return Af;b5=1;var r=xn(),e=ye(),n=p7(),t=Ni(),i=Oi(),u=Uk(),o=Wk(),a=Gk(),c=.30865217988013566;function s(l){var f;return l<t?i:l<1?r(l+1)-(l+.5)*e(l)+l-n:l<2?r(l)-(l-.5)*e(l)+l-n:l<3?r(l-1)-(l-.5)*e(l)+l-n+e(l-1):l<12?(f=18/(l*l)-1,u(17,f)/(12*l)):(f=1/(l*l),l<1e3?o(f)/(c+f)/l:a(f)/l)}return Af=s,Af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sf,_5;function Xk(){if(_5)return Sf;_5=1;var r=Ce(),e=Dr(),n=ye(),t=Oi(),i=Li(),u=Vk();function o(a){return a>=3?r(u(a)):a>0?e(a)/(r(-a+(a-.5)*n(a))*i):t}return Sf=o,Sf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rf,g5;function Yk(){if(g5)return Rf;g5=1;function r(e){var n,t,i;return e===0?-.3333333333438:(e<0?n=-e:n=e,n<=1?(t=-.3333333333438+e*(-.2070740359969+e*(-.05041806657154+e*(-.004923635739372+e*-4293658292782e-17))),i=1+e*(.7045554412463+e*(.2118190062224+e*(.03048648397436+e*.001605037988091)))):(e=1/e,t=-4293658292782e-17+e*(-.004923635739372+e*(-.05041806657154+e*(-.2070740359969+e*-.3333333333438))),i=.001605037988091+e*(.03048648397436+e*(.2118190062224+e*(.7045554412463+e*1)))),t/i)}return Rf=r,Rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kf,y5;function Kk(){if(y5)return kf;y5=1;var r=ge(),e=ye(),n=_7(),t=Yk();function i(u){var o;return r(u)<1?t(u):(o=n(u),e(u/(o-1))/u)}return kf=i,kf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lf,E5;function jk(){if(E5)return Lf;E5=1;function r(e){var n,t,i;return e===0?-.0172847633523:(e<0?n=-e:n=e,n<=1?(t=-.0172847633523+e*(-.0159372646475+e*(-.00464910887221+e*(-.00060683488776+e*-614830384279e-17))),i=1+e*(.764050615669+e*(.297143406325+e*(.0579490176079+e*.00574558524851)))):(e=1/e,t=-614830384279e-17+e*(-.00060683488776+e*(-.00464910887221+e*(-.0159372646475+e*-.0172847633523))),i=.00574558524851+e*(.0579490176079+e*(.297143406325+e*(.764050615669+e*1)))),t/i)}return Lf=r,Lf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cf,$5;function zk(){if($5)return Cf;$5=1;function r(e){var n,t,i;return e===0?-.0172839517431:(e<0?n=-e:n=e,n<=1?(t=-.0172839517431+e*(-.0146362417966+e*(-.00357406772616+e*(-.000391032032692+e*249634036069e-17))),i=1+e*(.690560400696+e*(.249962384741+e*(.0443843438769+e*.00424073217211)))):(e=1/e,t=249634036069e-17+e*(-.000391032032692+e*(-.00357406772616+e*(-.0146362417966+e*-.0172839517431))),i=.00424073217211+e*(.0443843438769+e*(.249962384741+e*(.690560400696+e*1)))),t/i)}return Cf=r,Cf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var If,w5;function Jk(){if(w5)return If;w5=1;function r(e){var n,t,i;return e===0?.99994466948:(e<0?n=-e:n=e,n<=1?(t=.99994466948+e*(104.649839762+e*(857.204033806+e*(731.901559577+e*45.5174411671))),i=1+e*(104.526456943+e*(823.313447808+e*(3119.93802124+e*3970.03311219)))):(e=1/e,t=45.5174411671+e*(731.901559577+e*(857.204033806+e*(104.649839762+e*.99994466948))),i=3970.03311219+e*(3119.93802124+e*(823.313447808+e*(104.526456943+e*1)))),t/i)}return If=r,If}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qf,A5;function Zk(){if(A5)return qf;A5=1;var r=ye(),e=jk(),n=zk(),t=Jk();function i(u){var o,a;return u<-5?(a=u*u,o=r(-u),(12-a-6*(o*o))/(12*a*u)):u<-2?e(u):u<2?n(u):u<1e3?(a=1/u,t(u)/(-12*u)):-1/(12*u)}return qf=i,qf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mf,S5;function Qk(){if(S5)return Mf;S5=1;function r(e){var n,t,i;return e===0?.0495346498136:(e<0?n=-e:n=e,n<=1?(t=.0495346498136+e*(.0299521337141+e*(.00688296911516+e*(.000512634846317+e*-201411722031e-16))),i=1+e*(.759803615283+e*(.261547111595+e*(.0464854522477+e*.00403751193496)))):(e=1/e,t=-201411722031e-16+e*(.000512634846317+e*(.00688296911516+e*(.0299521337141+e*.0495346498136))),i=.00403751193496+e*(.0464854522477+e*(.261547111595+e*(.759803615283+e*1)))),t/i)}return Mf=r,Mf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nf,R5;function eL(){if(R5)return Nf;R5=1;function r(e){var n,t,i;return e===0?.00452313583942:(e<0?n=-e:n=e,n<=1?(t=.00452313583942+e*(.00120744920113+e*(-789724156582e-16+e*(-504476066942e-16+e*-535770949796e-17))),i=1+e*(.912203410349+e*(.405368773071+e*(.0901638932349+e*.00948935714996)))):(e=1/e,t=-535770949796e-17+e*(-504476066942e-16+e*(-789724156582e-16+e*(.00120744920113+e*.00452313583942))),i=.00948935714996+e*(.0901638932349+e*(.405368773071+e*(.912203410349+e*1)))),t/i)}return Nf=r,Nf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ff,k5;function rL(){if(k5)return Ff;k5=1;function r(e){var n,t,i;return e===0?.00439937562904:(e<0?n=-e:n=e,n<=1?(t=.00439937562904+e*(.000487225670639+e*(-.000128470657374+e*(529110969589e-17+e*15716677175e-17))),i=1+e*(.794435257415+e*(.333094721709+e*(.0703527806143+e*.00806110846078)))):(e=1/e,t=15716677175e-17+e*(529110969589e-17+e*(-.000128470657374+e*(.000487225670639+e*.00439937562904))),i=.00806110846078+e*(.0703527806143+e*(.333094721709+e*(.794435257415+e*1)))),t/i)}return Ff=r,Ff}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Of,L5;function nL(){if(L5)return Of;L5=1;function r(e){var n,t,i;return e===0?-.0011481191232:(e<0?n=-e:n=e,n<=1?(t=-.0011481191232+e*(-.112850923276+e*(1.51623048511+e*(-.218472031183+e*.0730002451555))),i=1+e*(14.2482206905+e*(69.7360396285+e*(218.938950816+e*277.067027185)))):(e=1/e,t=.0730002451555+e*(-.218472031183+e*(1.51623048511+e*(-.112850923276+e*-.0011481191232))),i=277.067027185+e*(218.938950816+e*(69.7360396285+e*(14.2482206905+e*1)))),t/i)}return Of=r,Of}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Df,C5;function tL(){if(C5)return Df;C5=1;function r(e){var n,t,i;return e===0?-.000145727889667:(e<0?n=-e:n=e,n<=1?(t=-.000145727889667+e*(-.290806748131+e*(-13.308504545+e*(199.722374056+e*-11.4311378756))),i=1+e*(139.612587808+e*(2189.01116348+e*(7115.24019009+e*45574.6081453)))):(e=1/e,t=-11.4311378756+e*(199.722374056+e*(-13.308504545+e*(-.290806748131+e*-.000145727889667))),i=45574.6081453+e*(7115.24019009+e*(2189.01116348+e*(139.612587808+e*1)))),t/i)}return Df=r,Df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tf,I5;function iL(){if(I5)return Tf;I5=1;var r=ye(),e=Qk(),n=eL(),t=rL(),i=nL(),u=tL();function o(a){var c,s;return a<-8?(c=a*a,s=r(-a)/a,(-30+a*s*(6*c*s*s-12+c))/(12*a*c*c)):a<-4?e(a)/(a*a):a<-2?n(a):a<2?t(a):a<10?(c=1/a,i(c)/(a*a)):a<100?(c=1/a,u(c)/(a*a)):-r(a)/(12*a*a*a)}return Tf=o,Tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pf,q5;function uL(){if(q5)return Pf;q5=1;var r=b7(),e=an(),n=xn(),t=At(),i=Dr(),u=_e(),o=ge(),a=Ce(),c=tn(),s=Ie(),l=ye(),f=Li(),d=Oi(),h=qi(),p=Hk(),v=_7(),m=Xk(),b=Kk(),g=Zk(),y=iL(),_=r("gammaincinv:compute"),$=.5,L=.3333333333333333,S=.25,q=.2,k=.16666666666666666,w=.08333333333333333,E=.041666666666666664,A=[0,0,0,0,0];function R(C,D,N){var B,O,P,F,Z,W,j,ee,V,x,K,G,we,le,re,ie,de,be,wr,ze,me,vr,Ve,mr,sn,J,he,br,jn,Hr,Yr,gn,zn,Jn,qt,Xe,Oe,yn,Ye,_r,or,cn,En,$n;if(D<$?(F=!0,Z=D,cn=-1):(F=!1,Z=N,cn=1),Ye=0,o(C-1)<1e-4&&(_r=0,F?D<.001?(gn=D*D,br=gn*D,Yr=br*D,ze=Yr*D,wr=ze*D,me=D+gn*$+br*L+Yr*S+ze*q+wr*k):me=-l(1-D):me=-l(N),C===1?(Ye=2,Jn=me):(P=n(C),Ye=1)),N<1e-30&&C<$&&(_r=0,me=-l(N*i(C))+(C-1)*l(-l(N*i(C))),Ye=1,P=n(C)),C>1&&C<500&&D<1e-80){for(_r=0,W=1/C,B=1/(C+1),me=(n(C+1)+l(D))*W,me=a(me),le=me,yn=0;yn<10;yn++)me=le*a(me*W)*s(1-me*B,W);Ye=1,P=n(C)}if(j=1/C*(l(D)+n(C+1)),j<l(q*(1+C))&&Ye===0&&(or=a(j),_r=0,vr=C*C,zn=vr*C,jn=zn*C,re=C+1,K=re*re,x=re*K,V=K*K,ie=C+2,ee=ie*ie,de=C+3,A[0]=1,A[1]=1/re,A[2]=$*(3*C+5)/(K*ie),A[3]=L*(31+8*vr+33*C)/(x*ie*de),A[4]=E*(2888+1179*zn+125*jn+3971*vr+5661*C)/(V*ee*de*(C+4)),me=or*e(A,or),P=n(C),Ye=1),C<10&&Ye===0&&(G=u(C)/(m(C)*f),we=c(.02,G),N<we&&(_r=0,Xe=1-C,J=Xe*Xe,he=J*Xe,be=u(-2/C*l(N/G)),me=C*v(be),Oe=l(me),me>5?(Ve=Oe*Oe,mr=Ve*Oe,sn=mr*Oe,or=1/me,A[0]=Oe-1,A[1]=(3*Xe-2*Xe*Oe+Ve-2*Oe+2)*$,A[2]=(24*Xe*Oe-11*J-24*Xe-6*Ve+12*Oe-12-9*Xe*Ve+6*J*Oe+2*mr)*k,A[3]=(-12*he*Oe+8.04*Xe*Ve-114*J*Oe+(72+36*Ve)+(3*sn-72*Oe+162)*(Xe-168*Xe*Oe)-(12*mr+25*he)-(22*Xe*mr+36*J*Ve+120*J))*w,A[4]=0,me=me-Oe+Xe*or*e(A,or)):(or=1/me,Ve=Oe*Oe,qt=Oe-1,En=Oe-Xe*or*qt,En<me&&(me-=En)),P=n(C),Ye=1)),o(Z-$)<1e-5&&Ye===0&&(_r=0,W=1/C,me=C-L+(.019753086419753086+.007211444248481286*W)*W,P=n(C),Ye=1),C<1&&Ye===0&&(_r=0,F?me=a(1/C*(l(Z)+n(C+1))):me=a(1/C*(l(1-Z)+n(C+1))),P=n(C),Ye=1),Ye===0)if(_r=1,W=1/C,or=t(2*Z),be=cn*or/u(C*$),or<d)be+=(b(be)+(g(be)+y(be)*W)*W)*W,me=C*v(be),$n=be,Hr=-u(C/h)*a(-$*C*$n*$n)/m(C),O=1/Hr;else return _("Warning: Overflow problems in one or more steps of the computation."),NaN;return Ye<2&&(Jn=p(me,C,_r,D,N,P,O,F)),Jn}return Pf=R,Pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hf,M5;function oL(){if(M5)return Hf;M5=1;var r=ue(),e=Ni(),n=Le(),t=uL();function i(u,o,a){return r(u)||r(o)?NaN:o<e?NaN:u>1||u<0?NaN:a===!0?u===0?n:u===1?0:t(o,1-u,u):u===0?0:u===1?n:t(o,u,1-u)}return Hf=i,Hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xf,N5;function aL(){if(N5)return xf;N5=1;var r=oL();return xf=r,xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bf,F5;function sL(){if(F5)return Bf;F5=1;var r=5e-324;return Bf=r,Bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Uf,O5;function cL(){if(O5)return Uf;O5=1;var r=aL(),e=ye(),n=_e(),t=sL(),i=v7(),u=m7();function o(a,c,s,l){var f,d,h,p,v,m,b,g,y,_,$,L,S,q,k,w,E,A,R,C,D,N,B,O,P,F,Z,W,j,ee;return s<l?v=r(s,c,!0):v=r(l,c,!1),v/=a,q=c/a,W=n(1+q),A=W*W,R=A*W,C=A*A,D=R*A,N=R*R,B=C*R,O=C*C,P=D*C,b=D*D,Z=v-q,k=Z*Z,w=k*Z,E=k*k,F=W+1,g=F*F,y=F*g,_=g*g,$=(W+2)*(W-1)/(3*W),$+=(R+9*A+21*W+5)*Z/(36*A*F),$-=(C-13*R+69*A+167*W+46)*k/(1620*g*R),$-=(7*D+21*C+70*R+26*A-93*W-31)*w/(6480*y*C),$-=(75*N+202*D+188*C-888*R-1345*A+118*W+138)*E/(272160*_*D),L=(28*C+131*R+402*A+581*W+208)*(W-1)/(1620*F*R),L-=(35*N-154*D-623*C-1636*R-3983*A-3514*W-925)*Z/(12960*g*C),L-=(2132*B+7915*N+16821*D+35066*C+87490*R+141183*A+95993*W+21640)*k/(816480*D*y),L-=(11053*O+53308*B+117010*N+163924*D+116188*C-258428*R-677042*A-481940*W-105497)*w/(14696640*_*N),S=-((3592*B+8375*N-1323*D-29198*C-89578*R-154413*A-116063*W-29632)*(W-1))/(816480*D*g),S-=(442043*P+2054169*O+3803094*B+3470754*N+2141568*D-2393568*C-19904934*R-34714674*A-23128299*W-5253353)*Z/(146966400*N*y),S-=(116932*b+819281*P+2378172*O+4341330*B+6806004*N+10622748*D+18739500*C+30651894*R+30869976*A+15431867*W+2919016)*k/(146966400*_*B),m=v+$/a+L/(a*a)+S/(a*a*a),m<=0&&(m=t),j=m-q*e(m)+(1+q)*e(1+q)-q,f=1/(1+q),h=m<q?f:0,p=m<q?1:f,ee=(h+p)/2,d=i(j,q),u(d,ee,h,p,32,100)}return Uf=o,Uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Wf,D5;function lL(){if(D5)return Wf;D5=1;var r=ge(),e=Tn(),n=Fi(),t=bn(),i=_n();function u(o,a,c,s,l,f){var d,h,p,v,m,b,g,y,_,$,L,S,q,k,w,E;k=0,h=!1,b=a,m=e(1,1-l),_=t(1e7*a,1e7),g=0,p=_,v=_,y=f;do{if(g=k,v=p,p=_,q=o(b),k=q[0],w=q[1],E=q[2],y-=1,k===0)break;if(w===0?(g===0&&(b===c?a=s:a=c,g=o(a),_=a-b),n(g)*n(k)<0?_<0?_=(b-c)/2:_=(b-s)/2:_<0?_=(b-s)/2:_=(b-c)/2):E===0?_=k/w:($=2*k,S=2*w-k*(E/w),r(S)<1&&r($)>=r(S)*i?_=k/w:_=$/S,_*w/k<0&&(_=k/w,r(_)>2*r(a)&&(_=(_<0?-1:1)*2*r(a)))),d=r(_/v),d>.8&&d<2&&(_=_>0?(b-c)/2:(b-s)/2,r(_)>b&&(_=n(_)*b),v=_*3),a=b,b-=_,b<c){if(r(c)<1&&r(b)>1&&i/r(b)<r(c)?L=1e3:L=b/c,r(L)<1&&(L=1/L),!h&&L>0&&L<3)_=.99*(a-c),b=a-_,h=!0;else if(_=(a-c)/2,b=a-_,b===c||b===s)break}else if(b>s){if(r(s)<1&&r(b)>1&&i/r(b)<r(s)?L=1e3:L=b/s,r(L)<1&&(L=1/L),!h&&L>0&&L<3)_=.99*(a-s),b=a-_,h=!0;else if(_=(a-s)/2,b=a-_,b===c||b===s)break}_>0?s=a:c=a}while(y&&r(b*m)<r(_));return b}return Wf=u,Wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Gf,T5;function fL(){if(T5)return Gf;T5=1;var r=d7().assign,e=ge(),n=_n(),t=mn();function i(u,o,a,c){return s;function s(l){var f,d,h,p,v;return v=1-l,f=[0,0],r(l,u,o,!0,c,f,1,0),p=f[0]-a,d=f[1],c&&(d=-d),v===0&&(v=t*64),l===0&&(l=t*64),h=d*(-(v*u)+(o-2)*l+1),e(h)<v*l*n&&(h/=v*l),c&&(h=-h),d===0&&(d=(c?-1:1)*t*64),[p,d,h]}}return Gf=i,Gf}var Vf,P5;function dL(){if(P5)return Vf;P5=1;var r=an(),e=wt(),n=On(),t=pr(),i=Sd(),u=ki(),o=_e(),a=ge(),c=Ce(),s=Ie(),l=yt(),f=bn(),d=tn(),h=ye(),p=mn(),v=Id(),m=Or(),b=yk(),g=Ek(),y=Dk(),_=cL(),$=lL(),L=fL(),S=32,q=1e3,k=[0,0,0,0,0];function w(E,A,R,C){var D,N,B,O,P,F,Z,W,j,ee,V,x,K,G,we,le,re,ie,de,be,wr,ze,me,vr,Ve,mr,sn,J,he;if(N=!1,C===0)return[1,0];if(R===0)return[0,1];if(E===1){if(A===1)return[R,1-R];x=A,A=E,E=x,x=C,C=R,R=x,N=!0}if(J=0,O=0,F=1,E===.5){if(A===.5)return J=l(R*v),J*=J,he=l(C*v),he*=he,[J,he];A>.5&&(x=A,A=E,E=x,x=C,C=R,R=x,N=!N)}if(A===.5&&E>=.5&&R!==1)wr={},J=b(E,R,wr),he=wr.value;else{if(A===1)return R<C?E>1?(J=s(R,1/E),he=-n(h(R)/E)):(J=s(R,1/E),he=1-J):(J=c(t(-C)/E),he=-n(t(-C)/E)),N&&(x=he,he=J,J=x),[J,he];if(E+A>5)R>.5&&(x=A,A=E,E=x,x=C,C=R,R=x,N=!N),j=d(E,A),W=f(E,A),o(j)>W-j&&j>5?(J=g(E,A,R),he=1-J):(Ve=E+A,P=i(o(E/Ve)),B=j/Ve,B>=.2&&B<=.8&&Ve>=10?(V=s(R,1/E),V<.0025&&E+A<200?J=V*s(E*u(E,A),1/E):J=y(R,Ve,P),he=1-J):(E<A&&(x=A,A=E,E=x,x=C,C=R,R=x,N=!N),ee=0,A<2&&(ee=u(E,A)),ee===0?he=1:(he=s(A*C*ee,1/A),J=1-he)),he>1e-5&&(J=_(E,A,R,C),he=1-J));else if(E<1&&A<1){if(be=(1-E)/(2-E-A),le=e(be,E,A)-R,a(le)/R<m*3)return N?[1-be,be]:[be,1-be];le<0&&(x=A,A=E,E=x,x=C,C=R,R=x,N=!N,be=1-be),de=s(E*R*u(E,A),1/E),J=de/(1+de),he=1/(1+de),J>be&&(J=be),F=be}else E>1&&A>1?(be=(E-1)/(E+A-2),K=(A-1)/(E+A-2),ie=e(be,E,A)-R,ie<0&&(x=A,A=E,E=x,x=C,C=R,R=x,x=K,K=be,be=x,N=!N),re=h(R*E*u(E,A))/E,J=c(re),he=J<.9?1-J:-n(re),A<E&&J<.2&&(G=E-1,we=A-1,ze=E*E,me=E*ze,vr=A*A,k[0]=0,k[1]=1,k[2]=we/G,G*=G,k[3]=we*(3*E*A+5*A+ze-E-4)/(2*(E+2)*G),G*=E+1,k[4]=we*(33*E*vr+31*vr+8*ze*vr-30*E*A-47*A+11*ze*A+6*me*A+18+4*E-me+ze*ze-10*ze),k[4]/=3*(E+3)*(E+2)*G,J=r(k,J)),J>be&&(J=be),F=be):(A<E&&(x=A,A=E,E=x,x=C,C=R,R=x,N=!N),s(R,1/E)<.5?(J=s(R*E*u(E,A),1/E),J===0&&(J=p),he=1-J):(he=s(1-s(R,A*u(E,A)),1/A),he===0&&(he=p),J=1-he))}return J>.5&&(x=A,A=E,E=x,x=C,C=R,R=x,x=he,he=J,J=x,N=!N,mr=1-F,sn=1-O,O=mr,F=sn),O===0&&(N?(O=m,J<O&&(J=O)):O=p,J<O&&(J=O)),D=S,J<1e-50&&(E<1||A<1)&&(D*=3,D/=2),Z=L(E,A,R<C?R:C,R>=C),J=$(Z,J,O,F,D,q),J===O&&(J=0),N?[1-J,J]:[J,1-J]}return Vf=w,Vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xf,H5;function Od(){if(H5)return Xf;H5=1;var r=dL();return Xf=r,Xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yf,x5;function pL(){if(x5)return Yf;x5=1;var r=ue(),e=Od();function n(t,i,u,o){return r(t)||r(i)||r(u)?NaN:i<=0||u<=0?NaN:t<0||t>1?NaN:o?e(i,u,1-t,t)[0]:e(i,u,t,1-t)[0]}return Yf=n,Yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kf,B5;function g7(){if(B5)return Kf;B5=1;var r=pL();return Kf=r,Kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jf,U5;function hL(){if(U5)return jf;U5=1;var r=g7(),e=ue();function n(t,i,u){return e(t)||e(i)||e(u)||i<=0||u<=0||t<0||t>1?NaN:r(t,i,u)}return jf=n,jf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zf,W5;function vL(){if(W5)return zf;W5=1;var r=hr(),e=g7(),n=ue();function t(i,u){if(n(i)||n(u)||i<=0||u<=0)return r(NaN);return o;function o(a){return n(a)||a<0||a>1?NaN:e(a,i,u)}}return zf=t,zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jf,G5;function mL(){if(G5)return Jf;G5=1;var r=Qe(),e=hL(),n=vL();return r(e,"factory",n),Jf=e,Jf}var bL=mL();const _L=Nr(bL);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zf,V5;function gL(){if(V5)return Zf;V5=1;var r=Ii(),e=_e(),n=ue();function t(i,u,o){var a,c;return n(i)||n(u)||n(o)||o<0?NaN:o===0?i<u?0:1:(a=o*e(2),c=i-u,.5*r(-c/a))}return Zf=t,Zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qf,X5;function yL(){if(X5)return Qf;X5=1;var r=ue();function e(n,t){return r(n)||r(t)?NaN:n<t?0:1}return Qf=e,Qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1,Y5;function EL(){if(Y5)return e1;Y5=1;var r=hr(),e=ue();function n(t){if(e(t))return r(NaN);return i;function i(u){return e(u)?NaN:u<t?0:1}}return e1=n,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,K5;function $L(){if(K5)return r1;K5=1;var r=Qe(),e=yL(),n=EL();return r(e,"factory",n),r1=e,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1,j5;function wL(){if(j5)return n1;j5=1;var r=hr(),e=$L().factory,n=ue(),t=_e(),i=Ii();function u(o,a){var c;if(n(o)||n(a)||a<0)return r(NaN);if(a===0)return e(o);return c=a*t(2),s;function s(l){var f;return n(l)?NaN:(f=l-o,.5*i(-f/c))}}return n1=u,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1,z5;function AL(){if(z5)return t1;z5=1;var r=Qe(),e=gL(),n=wL();return r(e,"factory",n),t1=e,t1}var SL=AL();const RL=Nr(SL);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,J5;function kL(){if(J5)return i1;J5=1;var r=Ce(),e=Ie(),n=_e(),t=qi(),i=Le(),u=ue();function o(a,c,s){var l,f,d;return u(a)||u(c)||u(s)||s<0?NaN:s===0?a===c?i:0:(l=e(s,2),f=1/n(l*t),d=-1/(2*l),f*r(d*e(a-c,2)))}return i1=o,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,Z5;function LL(){if(Z5)return u1;Z5=1;var r=Le(),e=ue();function n(t,i){return e(t)||e(i)?NaN:t===i?r:0}return u1=n,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,Q5;function CL(){if(Q5)return o1;Q5=1;var r=hr(),e=Le(),n=ue();function t(i){if(n(i))return r(NaN);return u;function u(o){return n(o)?NaN:o===i?e:0}}return o1=t,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,e8;function IL(){if(e8)return a1;e8=1;var r=Qe(),e=LL(),n=CL();return r(e,"factory",n),a1=e,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,r8;function qL(){if(r8)return s1;r8=1;var r=hr(),e=IL().factory,n=ue(),t=_e(),i=Ce(),u=Ie(),o=qi();function a(c,s){var l,f,d;if(n(c)||n(s)||s<0)return r(NaN);if(s===0)return e(c);return l=u(s,2),f=1/t(l*o),d=-1/(2*l),h;function h(p){return n(p)?NaN:f*i(d*u(p-c,2))}}return s1=a,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1,n8;function ML(){if(n8)return c1;n8=1;var r=Qe(),e=kL(),n=qL();return r(e,"factory",n),c1=e,c1}var NL=ML();const FL=Nr(NL);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,t8;function OL(){if(t8)return l1;t8=1;function r(e){var n,t,i;return e===0?-.0005087819496582806:(e<0?n=-e:n=e,n<=1?(t=-.0005087819496582806+e*(-.008368748197417368+e*(.03348066254097446+e*(-.012692614766297404+e*(-.03656379714117627+e*(.02198786811111689+e*(.008226878746769157+e*(-.005387729650712429+e*(0+e*0)))))))),i=1+e*(-.9700050433032906+e*(-1.5657455823417585+e*(1.5622155839842302+e*(.662328840472003+e*(-.7122890234154284+e*(-.05273963823400997+e*(.07952836873415717+e*(-.0023339375937419+e*.0008862163904564247))))))))):(e=1/e,t=0+e*(0+e*(-.005387729650712429+e*(.008226878746769157+e*(.02198786811111689+e*(-.03656379714117627+e*(-.012692614766297404+e*(.03348066254097446+e*(-.008368748197417368+e*-.0005087819496582806)))))))),i=.0008862163904564247+e*(-.0023339375937419+e*(.07952836873415717+e*(-.05273963823400997+e*(-.7122890234154284+e*(.662328840472003+e*(1.5622155839842302+e*(-1.5657455823417585+e*(-.9700050433032906+e*1))))))))),t/i)}return l1=r,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,i8;function DL(){if(i8)return f1;i8=1;function r(e){var n,t,i;return e===0?-.20243350835593876:(e<0?n=-e:n=e,n<=1?(t=-.20243350835593876+e*(.10526468069939171+e*(8.3705032834312+e*(17.644729840837403+e*(-18.851064805871424+e*(-44.6382324441787+e*(17.445385985570866+e*(21.12946554483405+e*-3.6719225470772936))))))),i=1+e*(6.242641248542475+e*(3.971343795334387+e*(-28.66081804998+e*(-20.14326346804852+e*(48.560921310873994+e*(10.826866735546016+e*(-22.643693341313973+e*1.7211476576120028)))))))):(e=1/e,t=-3.6719225470772936+e*(21.12946554483405+e*(17.445385985570866+e*(-44.6382324441787+e*(-18.851064805871424+e*(17.644729840837403+e*(8.3705032834312+e*(.10526468069939171+e*-.20243350835593876))))))),i=1.7211476576120028+e*(-22.643693341313973+e*(10.826866735546016+e*(48.560921310873994+e*(-20.14326346804852+e*(-28.66081804998+e*(3.971343795334387+e*(6.242641248542475+e*1)))))))),t/i)}return f1=r,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1,u8;function TL(){if(u8)return d1;u8=1;function r(e){var n,t,i;return e===0?-.1311027816799519:(e<0?n=-e:n=e,n<=1?(t=-.1311027816799519+e*(-.16379404719331705+e*(.11703015634199525+e*(.38707973897260434+e*(.3377855389120359+e*(.14286953440815717+e*(.029015791000532906+e*(.0021455899538880526+e*(-6794655751811263e-22+e*(28522533178221704e-24+e*-681149956853777e-24))))))))),i=1+e*(3.4662540724256723+e*(5.381683457070069+e*(4.778465929458438+e*(2.5930192162362027+e*(.848854343457902+e*(.15226433829533179+e*(.011059242293464892+e*(0+e*(0+e*0)))))))))):(e=1/e,t=-681149956853777e-24+e*(28522533178221704e-24+e*(-6794655751811263e-22+e*(.0021455899538880526+e*(.029015791000532906+e*(.14286953440815717+e*(.3377855389120359+e*(.38707973897260434+e*(.11703015634199525+e*(-.16379404719331705+e*-.1311027816799519))))))))),i=0+e*(0+e*(0+e*(.011059242293464892+e*(.15226433829533179+e*(.848854343457902+e*(2.5930192162362027+e*(4.778465929458438+e*(5.381683457070069+e*(3.4662540724256723+e*1)))))))))),t/i)}return d1=r,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,o8;function PL(){if(o8)return p1;o8=1;function r(e){var n,t,i;return e===0?-.0350353787183178:(e<0?n=-e:n=e,n<=1?(t=-.0350353787183178+e*(-.0022242652921344794+e*(.018557330651423107+e*(.009508047013259196+e*(.0018712349281955923+e*(.00015754461742496055+e*(460469890584318e-20+e*(-2304047769118826e-25+e*26633922742578204e-28))))))),i=1+e*(1.3653349817554064+e*(.7620591645536234+e*(.22009110576413124+e*(.03415891436709477+e*(.00263861676657016+e*(7646752923027944e-20+e*(0+e*0)))))))):(e=1/e,t=26633922742578204e-28+e*(-2304047769118826e-25+e*(460469890584318e-20+e*(.00015754461742496055+e*(.0018712349281955923+e*(.009508047013259196+e*(.018557330651423107+e*(-.0022242652921344794+e*-.0350353787183178))))))),i=0+e*(0+e*(7646752923027944e-20+e*(.00263861676657016+e*(.03415891436709477+e*(.22009110576413124+e*(.7620591645536234+e*(1.3653349817554064+e*1)))))))),t/i)}return p1=r,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,a8;function HL(){if(a8)return h1;a8=1;function r(e){var n,t,i;return e===0?-.016743100507663373:(e<0?n=-e:n=e,n<=1?(t=-.016743100507663373+e*(-.0011295143874558028+e*(.001056288621524929+e*(.00020938631748758808+e*(14962478375834237e-21+e*(44969678992770644e-23+e*(4625961635228786e-24+e*(-2811287356288318e-29+e*9905570997331033e-32))))))),i=1+e*(.5914293448864175+e*(.1381518657490833+e*(.016074608709367652+e*(.0009640118070051656+e*(27533547476472603e-21+e*(282243172016108e-21+e*(0+e*0)))))))):(e=1/e,t=9905570997331033e-32+e*(-2811287356288318e-29+e*(4625961635228786e-24+e*(44969678992770644e-23+e*(14962478375834237e-21+e*(.00020938631748758808+e*(.001056288621524929+e*(-.0011295143874558028+e*-.016743100507663373))))))),i=0+e*(0+e*(282243172016108e-21+e*(27533547476472603e-21+e*(.0009640118070051656+e*(.016074608709367652+e*(.1381518657490833+e*(.5914293448864175+e*1)))))))),t/i)}return h1=r,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var v1,s8;function xL(){if(s8)return v1;s8=1;var r=ue(),e=_e(),n=ye(),t=Le(),i=er(),u=OL(),o=DL(),a=TL(),c=PL(),s=HL(),l=.08913147449493408,f=2.249481201171875,d=.807220458984375,h=.9399557113647461,p=.9836282730102539;function v(m){var b,g,y,_,$,L;return r(m)?NaN:m===1?t:m===-1?i:m===0?m:m>1||m<-1?NaN:(m<0?(b=-1,g=-m):(b=1,g=m),_=1-g,g<=.5?($=g*(g+10),L=u(g),b*($*l+$*L)):_>=.25?($=e(-2*n(_)),_-=.25,L=o(_),b*($/(f+L))):(_=e(-n(_)),_<3?(y=_-1.125,L=a(y),b*(d*_+L*_)):_<6?(y=_-3,L=c(y),b*(h*_+L*_)):(y=_-6,L=s(y),b*(p*_+L*_))))}return v1=v,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m1,c8;function y7(){if(c8)return m1;c8=1;var r=xL();return m1=r,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,l8;function BL(){if(l8)return b1;l8=1;var r=y7(),e=ue(),n=_e();function t(i,u,o){var a,c;return e(u)||e(o)||e(i)||o<0||i<0||i>1?NaN:o===0?u:(a=u,c=o*n(2),a+c*r(2*i-1))}return b1=t,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,f8;function UL(){if(f8)return _1;f8=1;var r=ue();function e(n,t){return r(n)||n<0||n>1?NaN:t}return _1=e,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,d8;function WL(){if(d8)return g1;d8=1;var r=hr(),e=ue();function n(t){if(e(t))return r(NaN);return i;function i(u){return e(u)||u<0||u>1?NaN:t}}return g1=n,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,p8;function GL(){if(p8)return y1;p8=1;var r=Qe(),e=UL(),n=WL();return r(e,"factory",n),y1=e,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,h8;function VL(){if(h8)return E1;h8=1;var r=hr(),e=GL().factory,n=y7(),t=ue(),i=_e();function u(o,a){var c,s;if(t(o)||t(a)||a<0)return r(NaN);return a===0&&e(o),c=o,s=a*i(2),l;function l(f){return t(f)||f<0||f>1?NaN:c+s*n(2*f-1)}}return E1=u,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $1,v8;function XL(){if(v8)return $1;v8=1;var r=Qe(),e=BL(),n=VL();return r(e,"factory",n),$1=e,$1}var YL=XL();const KL=Nr(YL);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w1,m8;function jL(){if(m8)return w1;m8=1;var r=wt(),e=ue(),n=Ie();function t(i,u){var o,a,c;return e(i)||e(u)||u<=0?NaN:i===0?.5:(o=n(i,2),u>2*o?(c=o/(u+o),a=r(c,.5,u/2,!0,!0)/2):(c=u/(u+o),a=r(c,u/2,.5,!0,!1)/2),i>0?1-a:a)}return w1=t,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,b8;function zL(){if(b8)return A1;b8=1;var r=hr(),e=wt(),n=ue(),t=Ie();function i(u){if(n(u)||u<=0)return r(NaN);return o;function o(a){var c,s,l;return n(a)?NaN:a===0?.5:(c=t(a,2),u>2*c?(l=c/(u+c),s=e(l,.5,u/2,!0,!0)/2):(l=u/(u+c),s=e(l,u/2,.5,!0,!1)/2),a>0?1-s:s)}}return A1=i,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,_8;function JL(){if(_8)return S1;_8=1;var r=Qe(),e=jL(),n=zL();return r(e,"factory",n),S1=e,S1}var ZL=JL();const QL=Nr(ZL);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1,g8;function eC(){if(g8)return R1;g8=1;var r=ue(),e=ki(),n=_e(),t=Ie();function i(u,o){var a;return r(u)||r(o)||o<=0?NaN:(a=n(o)*e(o/2,.5),t(o/(o+t(u,2)),(1+o)/2)/a)}return R1=i,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,y8;function rC(){if(y8)return k1;y8=1;var r=hr(),e=ue(),n=ki(),t=_e(),i=Ie();function u(o){var a,c;if(e(o)||o<=0)return r(NaN);return c=t(o)*n(o/2,.5),a=(1+o)/2,s;function s(l){return e(l)?NaN:i(o/(o+i(l,2)),a)/c}}return k1=u,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,E8;function nC(){if(E8)return L1;E8=1;var r=Qe(),e=eC(),n=rC();return r(e,"factory",n),L1=e,L1}var tC=nC();const iC=Nr(tC);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1,$8;function uC(){if($8)return C1;$8=1;var r=Od(),e=ue(),n=Fi(),t=_e();function i(u,o){var a,c;return e(o)||e(u)||o<=0||u<0||u>1?NaN:(a=u>.5?1-u:u,c=r(o/2,.5,2*a,1-2*a),n(u-.5)*t(o*c[1]/c[0]))}return C1=i,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,w8;function oC(){if(w8)return I1;w8=1;var r=hr(),e=Od(),n=ue(),t=Fi(),i=_e();function u(o){if(n(o)||o<=0)return r(NaN);return a;function a(c){var s,l;return n(c)||c<0||c>1?NaN:(s=c>.5?1-c:c,l=e(o/2,.5,2*s,1-2*s),t(c-.5)*i(o*l[1]/l[0]))}}return I1=u,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,A8;function aC(){if(A8)return q1;A8=1;var r=Qe(),e=uC(),n=oC();return r(e,"factory",n),q1=e,q1}var sC=aC();const cC=Nr(sC),S8=1e-9,lC=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,E7=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function fC(r){const[e,n,t]=r;return e<t?e<=n&&n<=t?null:`requires lo <= peak <= hi, got lo=${e}, peak=${n}, hi=${t}`:`requires lo < hi, got lo=${e}, hi=${t}`}function dC(r){const[e,n]=r;return e<n?null:`requires lo < hi, got lo=${e}, hi=${n}`}function pC(r){const[e,n]=r;return e>0&&n>0?null:`requires a > 0 and b > 0, got a=${e}, b=${n}`}function R8(r){const e=r[1];return e>0?null:`requires sigma > 0, got sigma=${e}`}function hC(r){const[e,n]=r;return 0<e&&e<n?null:`requires 0 < lo < hi, got lo=${e}, hi=${n}`}function k8(r){const[,e,n]=r;return e<=0?`requires sigma > 0, got sigma=${e}`:n<=0?`requires df > 0, got df=${n}`:null}function L8(r,e){const n=e-r;return{cdf:t=>t<=r?0:t>=e?1:(t-r)/n,ppf:t=>r+t*n,pdf:t=>t>=r&&t<=e?1/n:0}}function vC(r,e,n){const t=n-r,i=(e-r)/t;return{cdf:u=>u<=r?0:u>=n?1:u<=e?(u-r)*(u-r)/(t*(e-r)):1-(n-u)*(n-u)/(t*(n-e)),ppf:u=>u<i?r+Math.sqrt(u*t*(e-r)):n-Math.sqrt((1-u)*t*(n-e)),pdf:u=>u<r||u>n?0:u===e?2/t:u<e?2*(u-r)/(t*(e-r)):2*(n-u)/(t*(n-e))}}function C8(r,e){return{cdf:n=>RL(n,r,e),ppf:n=>KL(n,r,e),pdf:n=>FL(n,r,e)}}function I8(r,e,n){return{cdf:t=>QL((t-r)/e,n),ppf:t=>r+e*cC(t,n),pdf:t=>iC((t-r)/e,n)/e}}function mC(r,e){return{cdf:n=>GR(n,r,e),ppf:n=>_L(n,r,e),pdf:n=>ZR(n,r,e)}}const pn={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:fC,build:r=>({latent:vC(r[0],r[1],r[2]),logX:!1})},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:dC,build:r=>({latent:L8(r[0],r[1]),logX:!1})},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:pC,build:r=>({latent:mC(r[0],r[1]),logX:!1})},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:R8,build:r=>({latent:C8(r[0],r[1]),logX:!1})},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:R8,build:r=>({latent:C8(r[0],r[1]),logX:!0})},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:hC,build:r=>({latent:L8(Math.log(r[0]),Math.log(r[1])),logX:!0})},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:k8,build:r=>({latent:I8(r[0],r[1],r[2]),logX:!1})},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:k8,build:r=>({latent:I8(r[0],r[1],r[2]),logX:!0})}},bC=["normal","lognormal","t","logt"];function _C(r){const[e,n]=r;return e<n?null:`requires lo < hi in the truncation window, got lo=${e}, hi=${n}`}function gC(r,e){const n=e.signature.split("(",2)[1].slice(0,-1);return{signature:`${r}-trunc(${n}, lo, hi)`,note:`${e.note}; explicitly truncated to [lo, hi]`,nParams:e.nParams+2,check:t=>e.check(t.slice(0,e.nParams))??_C(t.slice(e.nParams)),build:t=>e.build(t),hasTruncWindow:!0}}for(const r of bC)pn[`${r}-trunc`]=gC(r,pn[r]);function yC(r){return E7.test(r)}function $7(r){const e=E7.exec(r);if(!e)throw new Error(`malformed family spec ${JSON.stringify(r)}: expected "family(num, num, ...)"`);const n=e[1],t=e[2],i=pn[n];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(n)}; available: `+Object.values(pn).map(c=>c.signature).join(", "));const u=t.split(",").map(c=>c.trim());for(const c of u)if(!lC.test(c))throw new Error(`family spec ${JSON.stringify(r.trim())}: bad numeric argument ${JSON.stringify(c)}`);const o=u.map(Number);if(o.length!==i.nParams)throw new Error(`${n} takes ${i.nParams} arguments as ${i.signature}, got ${o.length}`);const a=i.check(o);if(a)throw new Error(`${r.trim()}: ${i.signature} ${a}`);return i.hasTruncWindow?{family:n,params:o.slice(0,-2),text:r.trim(),truncWindow:[o[o.length-2],o[o.length-1]]}:{family:n,params:o,text:r.trim(),truncWindow:null}}function q8(r,e){return e===-1/0?0:e===1/0?1:r.cdf(e)}class w7{constructor(e,n,t,i,u,o,a){this.spec=e,this.latent=n,this.logX=t,this.cdfLo=i,this.mass=u,this.xLo=o,this.xHi=a}inverseCdf(e){const n=this.latent.ppf(this.cdfLo+e*this.mass),t=this.logX?Math.exp(n):n;return Math.min(Math.max(t,this.xLo),this.xHi)}pdf(e){return e<this.xLo||e>this.xHi?0:this.logX?e<=0?0:this.latent.pdf(Math.log(e))/e/this.mass:this.latent.pdf(e)/this.mass}}function Dd(r,e,n){const t=pn[r.family];if(t===void 0)throw new Error(`unknown distribution family ${JSON.stringify(r.family)}`);const{latent:i,logX:u}=t.build(r.params);let o=e===null?-1/0:e,a=n===null?1/0:n;r.truncWindow!==null&&(o=Math.max(o,r.truncWindow[0]),a=Math.min(a,r.truncWindow[1]));let c,s;u?(c=o>0?Math.log(o):-1/0,s=a>0?Math.log(a):-1/0):(c=o,s=a);const l=q8(i,c),d=q8(i,s)-l;if(d<S8){let h=`the variable's range [${e}, ${n}]`;throw r.truncWindow!==null&&(h+=` ∩ the spec's truncation window [${r.truncWindow[0]}, ${r.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(r.text)}: essentially no probability mass in ${h} (mass ${d.toExponential(2)} < ${S8})`)}return new w7(r,i,u,l,d,o,a)}const ri="pointmass",EC="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",$C=new RegExp(`^\\s*${ri}\\s*\\(\\s*(${EC})\\s*\\)\\s*$`),wC=new RegExp(`^\\s*${ri}\\b`);function A7(r){const e=$C.exec(r);if(e===null)throw new Error(`malformed ${ri} spec ${JSON.stringify(r)}: expected "${ri}(num)"`);return Number(e[1])}function S7(r){return wC.test(r)?A7(r):null}function R7(r){const e=A7(r);return[[e,1],[e,1]]}const k7=.3,Td=5e4;function L7(r,e){let n=1/0,t=-1/0;for(const i of r){const{lo:u,hi:o}=e(i);n=Math.min(n,u),t=Math.max(t,o)}return{lo:n,hi:t}}function C7(r){const e=.254829592,n=-.284496736,t=1.421413741,i=-1.453152027,u=1.061405429,o=.3275911,a=r<0?-1:1,c=Math.abs(r)/Math.SQRT2,s=1/(1+o*c),l=1-((((u*s+i)*s+t)*s+n)*s+e)*s*Math.exp(-c*c);return .5*(1+a*l)}function ni(){const r=Math.random(),e=Math.random(),n=Math.sqrt(-2*Math.log(r)),t=2*Math.PI*e;return[n*Math.cos(t),n*Math.sin(t)]}function AC(r,e){const n=r.length;if(n<2)throw new Error(`buildFromXsHs: need at least 2 breakpoints, got ${n}`);let t=0;for(let o=0;o<n-1;o++)t+=(r[o+1]-r[o])*(e[o]+e[o+1])/2;if(t<=0)throw new Error("buildPieceLinear: distribution has zero or negative area");const i=new Float64Array(n);for(let o=0;o<n;o++)i[o]=e[o]/t;const u=new Float64Array(n);u[0]=0;for(let o=0;o<n-1;o++)u[o+1]=u[o]+(r[o+1]-r[o])*(i[o]+i[o+1])/2;return u[n-1]=1,{xs:new Float64Array(r),fs:i,Fs:u}}function SC(r){const{pairs:e}=r,n=e[0][0];if(e[e.length-1][0]-n<1e-15)return{xs:new Float64Array([n,n]),fs:new Float64Array([1,1]),Fs:new Float64Array([0,1])};const i=e.map(o=>o[0]),u=e.map(o=>o[1]);return AC(i,u)}function Di(r,e){if(r.kind==="family"){if(e===void 0)throw new Error(`family spec ${JSON.stringify(r.spec.text)} needs the svar's declared range for implicit truncation, but no paramRange was provided (thread paramRanges through the caller)`);return Dd(r.spec,e.lo,e.hi)}return SC(r)}function Pd(r,e){return e instanceof w7?e.inverseCdf(r):kC(r,e)}const RC=1e-12;function kC(r,e){const{xs:n,fs:t,Fs:i}=e,u=n.length-1;if(u<=0||r<=0)return n[0];if(r>=1)return n[u];let o=0,a=u;for(;o<a-1;){const h=o+a>>1;i[h]<=r?o=h:a=h}const c=o,s=n[c+1]-n[c];if(s<1e-15)return n[c];const l=r-i[c],f=(t[c+1]-t[c])/s;let d;if(Math.abs(f)<RC)d=l/t[c];else{const h=t[c]*t[c]+2*f*l;d=(-t[c]+Math.sqrt(Math.max(0,h)))/f}return n[c]+d}function LC(r,e){if(r.kind==="family"){const t=(u,o)=>e!==void 0&&(e.lo===null||u>=e.lo)&&(e.hi===null||o<=e.hi),i=r.spec.params;return r.spec.family==="tri"&&t(i[0],i[2])?{kind:"triangular",lo:i[0],peak:i[1],hi:i[2]}:r.spec.family==="uniform"&&t(i[0],i[1])?{kind:"uniform",lo:i[0],hi:i[1]}:null}const{pairs:n}=r;if(n.length===2){const[t,i]=n[0],[u,o]=n[1];return i===o&&i>0?{kind:"uniform",lo:t,hi:u}:i===0&&o>0?{kind:"triangular",lo:t,peak:u,hi:u}:i>0&&o===0?{kind:"triangular",lo:t,peak:t,hi:u}:null}if(n.length===3){const[t,i]=n[0],[u,o]=n[1],[a,c]=n[2];if(i===0&&c===0&&o>0)return{kind:"triangular",lo:t,peak:u,hi:a}}return null}function CC(r){const e=r.length;let n=0,t=0;for(const a of r){let c=1,s=1;for(const l of a){const f=1-l.hi,d=1-l.lo;if(l.kind==="triangular"){const h=1-l.peak;c*=(f+d+h)/3,s*=(f*f+d*d+h*h+f*d+f*h+d*h)/6}else c*=(f+d)/2,s*=(f*f+f*d+d*d)/3}n+=c,t+=s}const i=n/e,o=t/e-i*i;return{mean:i,sigma:Math.sqrt(Math.max(0,o))}}function I7(r,e,n){if(e!==cy)return null;const t=[];for(const i of r){const u=[];for(const[o,a]of i.entries()){const c=LC(a,n==null?void 0:n[o]);if(c===null)return null;u.push(c)}t.push(u)}return CC(t)}function IC(r,e,n=Td){const t=r.length,i=new Float64Array(n);for(let u=0;u<n;u++){const o=Math.floor(Math.random()*t),a=r[o],c=[];for(const s of a)c.push(Pd(Math.random(),s));i[u]=e(c)}return Hd(i)}function Ti(r,e,n,t=Td){if(e<1e-10)return IC(r,n,t);const i=r.length,u=Math.sqrt(e),o=Math.sqrt(1-e),a=new Float64Array(t);for(let c=0;c<t;c++){const s=Math.floor(Math.random()*i),l=r[s],f=ni()[0],d=[];for(const h of l){const p=ni()[0],v=u*f+o*p,m=C7(v);d.push(Pd(m,h))}a[c]=n(d)}return Hd(a)}function q7(r,e,n,t,i=Td){const u=r.length,o=new Float64Array(i);for(let a=0;a<i;a++){const c=Math.floor(Math.random()*u),s=r[c],l=e[c]!=null?e[c]:n,f=Math.sqrt(Math.max(0,l)),d=Math.sqrt(Math.max(0,1-l)),h=ni()[0],p=[];for(const v of s){let m;if(l<1e-10)m=Math.random();else{const b=ni()[0],g=f*h+d*b;m=C7(g)}p.push(Pd(m,v))}o[a]=t(p)}return Hd(o)}function at(r){return typeof r=="string"?S7(r)!==null?{kind:"pairs",pairs:R7(r)}:{kind:"family",spec:$7(r)}:!r||r.length===0?{kind:"pairs",pairs:[[0,1],[0,1]]}:{kind:"pairs",pairs:r}}const qC=/\(\s*([\d.eE+-]+)\s+([\d.eE+-]+)\s*\)/g;function M7(r,e){const n=r.trim(),t=S7(n);if(t!==null){if(!X1(e,t))throw new Error(`pointmass value ${t} not in ${zt(e)}`);return{kind:"pairs",pairs:R7(n)}}if(yC(n)){const a=$7(n);return Dd(a,e.lo,e.hi),{kind:"family",spec:a}}if(!n.includes("("))throw new Error(`expected a family spec "name(num, ...)" or PWL pairs "(x y) ..." (pointmass(num) is also accepted), got "${n}"`);const i=[...n.matchAll(qC)];if(i.length<2)throw new Error(`need at least 2 (x y) pairs, got ${i.length}`);const u=i.map(a=>[Number(a[1]),Number(a[2])]);let o=-1/0;for(let a=0;a<u.length;a++){const[c,s]=u[a];if(isNaN(c)||!X1(e,c))throw new Error(`pair ${a+1} x=${c} not in ${zt(e)}`);if(isNaN(s)||s<0||s>1)throw new Error(`pair ${a+1} y=${s} not in [0, 1]`);if(c<o)throw new Error(`pair ${a+1} x=${c} not sorted (prev was ${o})`);o=c}return{kind:"pairs",pairs:u}}function ti(r){return typeof r=="string"?r.length>0:((r==null?void 0:r.length)??0)>0}function N7(r,e,n,t,i,u){const o=r.map(a=>e.map(c=>Di(at(a.sample[c]),n[c])));if(i==="subject"){const a=r.map(c=>c.rho);return q7(o,a,k7,t,u)}return Ti(o,i,t,u)}function Hd(r){const e=new Float64Array(r);e.sort();const n=e.length;let t=0;for(let i=0;i<n;i++)t+=e[i];return{mean:t/n,median:e[Math.floor(n*.5)],p5:e[Math.floor(n*.05)],p95:e[Math.floor(n*.95)],samples:e,count:n}}const MC=32,NC=4e6,Lr=new Map;let Vt=0;function FC(r){return JSON.stringify(r,(e,n)=>{if(typeof n=="function"||typeof n=="symbol")throw new Error(`mc_memo key parts must be JSON-serializable data; got a ${typeof n}. Identify a combine function by a string tag / form id instead.`);return n})}function Pi(r,e){const n=FC(r),t=Lr.get(n);if(t!==void 0)return Lr.delete(n),Lr.set(n,t),t;const i=e();for(Lr.set(n,i),Vt+=i.samples.length;(Lr.size>MC||Vt>NC)&&Lr.size>1;){const u=Lr.keys().next().value;Vt-=Lr.get(u).samples.length,Lr.delete(u)}return i}function OC(){Lr.clear(),Vt=0}const DC=5,TC=5,PC=[0,.25,.5,.75,1];function st(r){return r==="probability"?[0,1]:null}function HC(r,e){const n=DC/100*(e-r);return[r-n,e+n]}function F7(r,e,n){return r??HC(e,n)}function xC(r){return Math.max(0,-Math.floor(Math.log10(r)))}function BC(r){const e=10**Math.floor(Math.log10(r)),n=r/e;return(n<=1?1:n<=2?2:n<=5?5:10)*e}function O7(r,e){if(r===0&&e===1)return PC.map(o=>({value:o,label:o.toFixed(2)}));if(e<=r)return[{value:r,label:r.toFixed(2)}];const n=BC((e-r)/TC),t=xC(n),i=[],u=n*1e-9;for(let o=Math.ceil(r/n)*n;o<=e+u;o+=n){const a=Math.abs(o)<u?0:o;i.push({value:a,label:a.toFixed(t)})}return i}const M8=4,UC=1.06,WC=2.5066282746310002;function GC(r,e,n,t){const i=r.length;let u=0,o=0;for(let h=0;h<i;h++)u+=r[h],o+=r[h]*r[h];const a=u/i,c=o/i-a*a,s=Math.sqrt(c),l=UC*s*i**-.2;if(l<=0)return null;const f=new Float64Array(e);let d=0;for(let h=0;h<e;h++){const p=n+(t-n)*h/(e-1);let v=0;for(let m=0;m<i;m++){const b=(p-r[m])/l;if(!(b>M8)){if(b<-M8)break;v+=Math.exp(-.5*b*b)}}f[h]=v/(i*l*WC),f[h]>d&&(d=f[h])}return{density:f,maxD:d}}const kr={top:4,bottom:18,left:4,right:4},VC="12px -apple-system, Helvetica, sans-serif";function en(r,e,n,t,i){const u=r.width,o=r.height,a=r.getContext("2d");if(!a)return;a.clearRect(0,0,u,o);const c=u-kr.left-kr.right,s=o-kr.top-kr.bottom,l=kr.top+s;let f,d;if(e instanceof Float64Array){if(e.length===0)return;[f,d]=F7(i,e[0],e[e.length-1])}else f=e.start,d=e.end;if(d<=f){N8(a,[{value:f,label:f.toFixed(2)}],()=>kr.left+c/2,l);return}const h=b=>kr.left+(b-f)/(d-f)*c;let p,v;const m=Math.round(c);if(e instanceof Float64Array){const b=GC(e,m,f,d);if(!b)return;p=b.density,v=b.maxD}else{p=new Float64Array(m),v=1;const b=e.heights.length;for(let g=0;g<m;g++){const _=(f+(d-f)*g/(m-1)-e.start)/(e.end-e.start)*(b-1),$=Math.floor(_),L=Math.min($+1,b-1),S=_-$;p[g]=e.heights[$]*(1-S)+e.heights[L]*S}}if(!(v<=0)){a.fillStyle="#e8e8e8",a.fillRect(h(n),kr.top,h(t)-h(n),s),a.beginPath();for(let b=0;b<m;b++){const g=kr.left+b/(m-1)*c,y=kr.top+s-p[b]/v*s;b===0?a.moveTo(g,y):a.lineTo(g,y)}a.strokeStyle="#333",a.lineWidth=1.5,a.stroke(),N8(a,O7(f,d),h,l)}}function N8(r,e,n,t){r.strokeStyle="#bbb",r.lineWidth=.5,r.fillStyle="#4d4d4d",r.font=VC,r.textAlign="center";for(const i of e){const u=n(i.value);r.beginPath(),r.moveTo(u,t),r.lineTo(u,t+3),r.stroke(),r.fillText(i.label,u,t+12)}}const Hi=["plainnum","plaincode","richcode"];function D7(r){return r==="all"||Hi.includes(r)}function xd(r){return Hi.filter(e=>r.some(n=>n.availableModes.includes(e)))}function xi(r,e){return r==="all"?"all":xd(e).includes(r)?r:"all"}function Bi(r,e){return r.availableModes.includes(e)}function XC(r,e,n){const t=xi(e,n);return t==="all"?ii(r,r.availableModes[0]):Bi(r,t)?ii(r,t):null}function T7(r,e){const n=xi(e,r);for(const t of r){const i=n==="all"?ii(t,t.availableModes[0]):Bi(t,n)?ii(t,n):null;if(i)return i}return null}function ii(r,e){return e==="plainnum"&&r.plainnumIndex!==null?`metho-plainnum:${r.plainnumIndex}`:e==="plaincode"&&r.plaincodeIndex!==null?`metho-plaincode:${r.plaincodeIndex}`:e==="richcode"&&r.richcodeIndex!==null?`metho-richcode:${r.richcodeIndex}`:null}function Bd(r,e){const{source:n,index:t}=$e(r);if(nr(n)!=="metho")return null;const i=dn(n);for(let u=0;u<e.length;u++){const o=e[u];if(i==="plainnum"&&o.plainnumIndex===t)return{group:o,groupIndex:u,mode:"plainnum"};if(i==="plaincode"&&o.plaincodeIndex===t)return{group:o,groupIndex:u,mode:"plaincode"};if(i==="richcode"&&o.richcodeIndex===t)return{group:o,groupIndex:u,mode:"richcode"}}return null}function P7(r,e){return e==="plainnum"&&r.plainnumIndex!==null?`metho-plainnum:${r.plainnumIndex}`:e==="plaincode"&&r.plaincodeIndex!==null?`metho-plaincode:${r.plaincodeIndex}`:e==="richcode"&&r.richcodeIndex!==null?`metho-richcode:${r.richcodeIndex}`:null}function YC(r,e,n,t,i){const u=t.ui.whose,{source:o}=$e(u),a=nr(o)==="metho",c=E_(o);let s='<div class="whose-toggle">';const l=je(u)?u:t.ui.lastYoursWhose;if(s+=`<button class="whose-btn${je(u)?" active":""}" data-whose="${l}">Yours</button>`,je(u)&&e.has_cparams()){const d=u==="yours-plaincode";s+='<div class="mode-radio yours-fixfree-radio">',s+=`<button class="mode-radio-btn${d?"":" active"}" data-whose="yours-plainnum">fix</button>`,s+=`<button class="mode-radio-btn${d?" active":""}" data-whose="yours-plaincode">free</button>`,s+="</div>"}if(n.adhocPlainnumEntries.length>0||n.adhocPlaincodeEntries.length>0){s+=`<select id="adhoc-result-select" class="whose-select${c?" whose-select-active":""}${a?" whose-select-faded":""}" data-whose-source="adhoc">`,s+=`<option value="" disabled${c?"":" selected"}>Adhoc…</option>`;for(const p of g_){const v=y_(n,p);for(let m=0;m<v.length;m++){const b=v[m],g=n.adhocPresets[b.presetIndex],y=Gy(g,p,b);if(!y)continue;const _=Yy(g,p,y),$=`adhoc-${p}:${m}`;s+=`<option value="${$}"${u===$?" selected":""}>${se(_)}</option>`}}s+="</select>"}if(i.length>0){const d=a?Bd(u,i):null,h=c?" whose-select-faded":"",p=a?" whose-select-active":"",v=eE(i),m=xd(i),b=xi(t.ui.presetQueryModeFilter,i),g=m.length>=2,y=i.map((_,$)=>({group:_,groupIndex:$})).filter(({group:_})=>b==="all"||Bi(_,b));if(s+='<div class="methodical-select-stack">',g){s+='<select id="preset-query-mode-filter" class="preset-query-mode-filter">',s+=`<option value="all"${b==="all"?" selected":""}>all</option>`;for(const _ of Hi){if(!m.includes(_))continue;s+=`<option value="${_}"${b===_?" selected":""}>${_}</option>`}s+="</select>"}s+=`<select id="methodical-result-select" class="whose-select${p}${h}" data-whose-source="ai-results">`,s+=`<option value="" disabled${a?"":" selected"}>AI results…</option>`;for(const{groupIndex:_}of y){const $=v[_],L=d&&d.groupIndex===_?" selected":"";s+=`<option value="group:${_}"${L}>${se($)}</option>`}if(s+="</select>",s+="</div>",d&&d.group.availableModes.length>=1){s+='<div id="query-mode-radio" class="mode-radio">';for(const _ of d.group.availableModes){const $=d.mode===_;s+=`<button class="mode-radio-btn${$?" active":""}" data-mode="${_}">${_}</button>`}s+="</div>"}}if(s+="</div>",a&&e.get_aopt_bare_names().includes("framing_POVs_enabled")){const d=Ze(u,n);if(!d)throw new Error(`No active methodical result for whose selection ${JSON.stringify(u)}`);const h=d.aopts.framing_POVs_enabled;if(!Array.isArray(h)||!h.every(p=>typeof p=="string"))throw new Error("Methodical result framing_POVs_enabled must be a string array, got "+JSON.stringify(h));s+=`<div class="methodical-framing-povs">Framing: ${se(h.join(" "))}</div>`}r.innerHTML=s}function KC(r,e,n,t){var h;const i=t.ui.whose;if(je(i))return r.innerHTML="",!1;const u=Ze(i,n);if(!u)return r.innerHTML='<div style="color: #888; font-size: 13px;">No data.</div>',!1;const o=t.ui.inputMode,a=e.input_svar_entries().map(p=>p.bareName),c=a.length,s=uE(i,u,o,a),l=s.length;if(l===0)return r.innerHTML='<div style="color: #888; font-size: 13px;">No data for this mode.</div>',!1;const f=l>1;let d='<div class="sample-grid">';for(let p=0;p<l;p++){d+='<div class="sample-col">',f&&(d+=`<div class="sample-col-header">Sample ${p+1}</div>`);for(let v=0;v<c;v++){const m=((h=s[p])==null?void 0:h[v])??"";d+=`<div class="sample-cell">${se(m)}</div>`}d+="</div>"}return d+="</div>",r.innerHTML=d,f}function jC(r,e){const n=String(e);return r.precomputed[n]??null}function F8(r,e,n){if(je(r))return!0;const t=Ze(r,e);return t?w_(r,t)[n]:!1}const zC='<div class="hir-loud-note rho-note"><p>Correlation-adjusted sampling (one Monte Carlo iteration):</p><ol><li>Draw a &quot;mood&quot; sample from a standard normal curve.</li><li>For each subjective variable, draw a correlated random ticket, a mixture of the shared mood and independent, standard normal randomness. ρ controls how much weight the mood gets.</li><li>Get the sample for each subjective variable by exchanging the ticket for a distribution sample in the unique way that makes sense.</li><li>Use the sampled subjective-variable values to evaluate {{conclusion_expr}}.</li></ol></div>',ui={correlation_adjusted_sampling:zC,"framing-explainer-persuasive":"Text marked up in this style is either intentionally persuasive or expected to be persuasive, with the POV label providing the point of view on whose behalf the context is provided. It is not required for estimation.","framing-explainer-nonpersuasive":"Text marked up in this style is supplementary context not intended by the judgement problem designer to be biased on it own (but take that with a grain of salt), and not strictly required for estimation.","srcquote-explainer":"Quoted passages shown beneath a definition or within a framing note are source material that entity was derived from."},JC="correlation_adjusted_sampling",ZC="{{conclusion_expr}}";function QC(r){const e=r.config.conclusion_expr;return r.get_display_expr(e)??e}function Un(r,e){return ke(QC(r),e)}function H7(r,e){return x7(Un(r,e))}function x7(r){return ui[JC].replaceAll(ZC,r)}const An={top:10,bottom:35,left:50,right:15},eI=800,rI=500,O8="12px Consolas, Monaco, Courier New, monospace",nI=5,tI=3,D8=3,T8=5,iI=10,uI=1,oI=15,P8=["#333","#c44","#44c","#4c4","#c84","#84c","#4cc","#c4c","#888","#ca4"];function aI(r,e,n=iI){if(e)return e;let t=1/0,i=-1/0;for(const c of r)for(const s of c.points)s.y<t&&(t=s.y),s.y>i&&(i=s.y);if(!Number.isFinite(t)||!Number.isFinite(i))return null;const a=(i-t||uI)*n/100;return[t-a,i+a]}function oi(r,e,n){r.width||(r.width=eI),r.height||(r.height=rI);const t=r.width,i=r.height,u=r.getContext("2d");if(!u||(u.clearRect(0,0,t,i),e.length===0))return;const o=i-An.top-An.bottom,a=aI(e,n.yRange,n.yRangePaddingPercent);if(!a)return;const[c,s]=a,l=sI(c,s,nI),f=l.length>1?l[1]-l[0]:s-c,d=l.map(k=>cI(k,f));u.font=O8;const h=d.reduce((k,w)=>Math.max(k,u.measureText(w).width),0),p=Math.max(An.left,Math.ceil(h)+D8+T8),v=t-p-An.right;if(v<=0)return;const m=n.xLabels.length,b=m>1?v/(m-1):0,g=k=>p+k*b,y=k=>An.top+o-(k-c)/(s-c)*o;u.save(),u.strokeStyle="#ddd",u.lineWidth=.5,u.setLineDash([3,3]);for(const k of l){const w=y(k);u.beginPath(),u.moveTo(p,w),u.lineTo(p+v,w),u.stroke()}u.restore();const _=e.length===1;for(let k=0;k<e.length;k++){const w=e[k],E=w.color??(_?"#333":P8[k%P8.length]),A=_?2:1.5;u.beginPath();for(let R=0;R<w.points.length;R++){const C=g(R),D=y(w.points[R].y);R===0?u.moveTo(C,D):u.lineTo(C,D)}u.strokeStyle=E,u.lineWidth=A,u.stroke(),u.fillStyle=E;for(let R=0;R<w.points.length;R++){const C=g(R),D=y(w.points[R].y);u.beginPath(),u.arc(C,D,tI,0,Math.PI*2),u.fill()}}const $=An.top+o;u.strokeStyle="#bbb",u.lineWidth=.5,u.fillStyle="#4d4d4d",u.font=O8,u.textAlign="center",u.textBaseline="top";const L=n.xLabels.reduce((k,w)=>Math.max(k,u.measureText(w).width),0),S=m>1?b:v,q=L>S-4;for(let k=0;k<m;k++){const w=g(k);u.beginPath(),u.moveTo(w,$),u.lineTo(w,$+3),u.stroke(),u.save(),q?(u.translate(w,$+5),u.rotate(-Math.PI/4),u.textAlign="right",u.fillText(n.xLabels[k],0,0)):u.fillText(n.xLabels[k],w,$+5),u.restore()}u.fillStyle="#777",u.textAlign="center",u.textBaseline="bottom",u.fillText(n.xAxisLabel,p+v/2,i-1),u.fillStyle="#4d4d4d",u.textAlign="right",u.textBaseline="middle";for(let k=0;k<l.length;k++){const w=l[k],E=y(w);u.strokeStyle="#bbb",u.lineWidth=.5,u.beginPath(),u.moveTo(p-D8,E),u.lineTo(p,E),u.stroke(),u.fillText(d[k],p-T8,E)}}function sI(r,e,n){const t=e-r;if(t<=0)return[r];const i=t/(n-1),u=Math.pow(10,Math.floor(Math.log10(i))),o=i/u;let a;o<=1.5?a=1*u:o<=3.5?a=2*u:o<=7.5?a=5*u:a=10*u;const c=Math.ceil(r/a)*a,s=[];for(let l=c;l<=e+a*.001;l+=a)s.push(l);return s}function cI(r,e){if(Number.isInteger(r)||!Number.isFinite(e)||e<=0)return r.toString();const n=Math.min(oI,Math.max(0,-Math.floor(Math.log10(e)))),t=r.toFixed(n).replace(/0+$/,"").replace(/\.$/,"");return t==="-0"?"0":t}const Ue={top:10,bottom:35,left:60,right:60},H8=80,x8=60,lI=35,Z1="12px Consolas, Monaco, Courier New, monospace",fI="12px Consolas, Monaco, Courier New, monospace",B7="#ddd",dI="#eee",pI=220,B8=10,hI=80,vI=25,U8=95,Ht=12,mI=8,W8=4,M1=64;function ai(r,e){var m;const n=e.xLabels.length,t=e.yLabels.length;if(n===0||t===0)return;let i,u,o,a;r.width&&r.height?(i=r.width,u=r.height,o=(i-Ue.left-Ue.right)/n,a=(u-Ue.top-Ue.bottom)/t):(o=Math.max(H8,H8),a=Math.max(x8,x8),i=Ue.left+n*o+Ue.right,u=Ue.top+t*a+Ue.bottom,r.width=i,r.height=u);const c=r.getContext("2d");if(!c)return;c.clearRect(0,0,i,u);let s,l,f;if(e.valueRange)[s,l]=e.valueRange,f=!0;else{s=1/0,l=-1/0;for(const b of e.cells)for(const g of b)g!==null&&(g<s&&(s=g),g>l&&(l=g));f=isFinite(s)&&isFinite(l)}const d=f&&l-s||1,h=o>=lI;c.font=fI,c.textAlign="center",c.textBaseline="middle";for(let b=0;b<t;b++)for(let g=0;g<n;g++){const y=Ue.left+g*o,_=Ue.top+b*a,$=((m=e.cells[b])==null?void 0:m[g])??null;if($===null)c.fillStyle=dI,c.fillRect(y,_,o,a);else{const L=f?($-s)/d:0;c.fillStyle=U7(L),c.fillRect(y,_,o,a),h&&(c.fillStyle=L>.55?"#fff":"#333",c.fillText(Q1($),y+o/2,_+a/2))}c.strokeStyle=B7,c.lineWidth=1,c.strokeRect(y,_,o,a)}c.fillStyle="#4d4d4d",c.font=Z1,c.textBaseline="top";const v=e.xLabels.reduce((b,g)=>Math.max(b,c.measureText(g).width),0)>o-4;for(let b=0;b<n;b++){const g=Ue.left+b*o+o/2,y=Ue.top+t*a+4;c.save(),c.textAlign="center",v?(c.translate(g,y),c.rotate(-Math.PI/4),c.textAlign="right",c.fillText(e.xLabels[b],0,0)):c.fillText(e.xLabels[b],g,y),c.restore()}c.fillStyle="#777",c.textAlign="center",c.textBaseline="bottom",c.fillText(e.xAxisLabel,Ue.left+n*o/2,u-1),c.fillStyle="#4d4d4d",c.font=Z1,c.textAlign="right",c.textBaseline="middle";for(let b=0;b<t;b++){const g=Ue.top+b*a+a/2;c.fillText(e.yLabels[b],Ue.left-5,g)}c.save(),c.fillStyle="#777",c.textAlign="center",c.textBaseline="top",c.translate(8,Ue.top+t*a/2),c.rotate(-Math.PI/2),c.fillText(e.yAxisLabel,0,0),c.restore(),f&&bI(c,i,u,t*a,s,l)}function U7(r){const e=B8+(hI-B8)*r,n=U8+(vI-U8)*r;return`hsl(${pI}, ${e.toFixed(0)}%, ${n.toFixed(0)}%)`}function Q1(r){return Number.isInteger(r)?r.toString():r.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function bI(r,e,n,t,i,u){const o=e-Ue.right+mI,a=Ue.top,c=t,s=c/M1;for(let l=0;l<M1;l++){const f=1-l/(M1-1);r.fillStyle=U7(f),r.fillRect(o,a+l*s,Ht,s+1)}r.strokeStyle=B7,r.lineWidth=1,r.strokeRect(o,a,Ht,c),r.fillStyle="#4d4d4d",r.font=Z1,r.textAlign="left",r.textBaseline="middle",r.fillText(Q1(u),o+Ht+W8,a),r.fillText(Q1(i),o+Ht+W8,a+c)}const G8={};function _I(r){let e=G8[r];if(e)return e;e=G8[r]=[];for(let n=0;n<128;n++){const t=String.fromCharCode(n);e.push(t)}for(let n=0;n<r.length;n++){const t=r.charCodeAt(n);e[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2)}return e}function Cn(r,e){typeof e!="string"&&(e=Cn.defaultChars);const n=_I(e);return r.replace(/(%[a-f0-9]{2})+/gi,function(t){let i="";for(let u=0,o=t.length;u<o;u+=3){const a=parseInt(t.slice(u+1,u+3),16);if(a<128){i+=n[a];continue}if((a&224)===192&&u+3<o){const c=parseInt(t.slice(u+4,u+6),16);if((c&192)===128){const s=a<<6&1984|c&63;s<128?i+="��":i+=String.fromCharCode(s),u+=3;continue}}if((a&240)===224&&u+6<o){const c=parseInt(t.slice(u+4,u+6),16),s=parseInt(t.slice(u+7,u+9),16);if((c&192)===128&&(s&192)===128){const l=a<<12&61440|c<<6&4032|s&63;l<2048||l>=55296&&l<=57343?i+="���":i+=String.fromCharCode(l),u+=6;continue}}if((a&248)===240&&u+9<o){const c=parseInt(t.slice(u+4,u+6),16),s=parseInt(t.slice(u+7,u+9),16),l=parseInt(t.slice(u+10,u+12),16);if((c&192)===128&&(s&192)===128&&(l&192)===128){let f=a<<18&1835008|c<<12&258048|s<<6&4032|l&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),u+=9;continue}}i+="�"}return i})}Cn.defaultChars=";/?:@&=+$,#";Cn.componentChars="";const V8={};function gI(r){let e=V8[r];if(e)return e;e=V8[r]=[];for(let n=0;n<128;n++){const t=String.fromCharCode(n);/^[0-9a-z]$/i.test(t)?e.push(t):e.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<r.length;n++)e[r.charCodeAt(n)]=r[n];return e}function St(r,e,n){typeof e!="string"&&(n=e,e=St.defaultChars),typeof n>"u"&&(n=!0);const t=gI(e);let i="";for(let u=0,o=r.length;u<o;u++){const a=r.charCodeAt(u);if(n&&a===37&&u+2<o&&/^[0-9a-f]{2}$/i.test(r.slice(u+1,u+3))){i+=r.slice(u,u+3),u+=2;continue}if(a<128){i+=t[a];continue}if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&u+1<o){const c=r.charCodeAt(u+1);if(c>=56320&&c<=57343){i+=encodeURIComponent(r[u]+r[u+1]),u++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(r[u])}return i}St.defaultChars=";/?:@&=+$,-_.!~*'()#";St.componentChars="-_.!~*'()";function Ud(r){let e="";return e+=r.protocol||"",e+=r.slashes?"//":"",e+=r.auth?r.auth+"@":"",r.hostname&&r.hostname.indexOf(":")!==-1?e+="["+r.hostname+"]":e+=r.hostname||"",e+=r.port?":"+r.port:"",e+=r.pathname||"",e+=r.search||"",e+=r.hash||"",e}function si(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const yI=/^([a-z0-9.+-]+:)/i,EI=/:[0-9]*$/,$I=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,wI=["<",">",'"',"`"," ","\r",`
`,"	"],AI=["{","}","|","\\","^","`"].concat(wI),SI=["'"].concat(AI),X8=["%","/","?",";","#"].concat(SI),Y8=["/","?","#"],RI=255,K8=/^[+a-z0-9A-Z_-]{0,63}$/,kI=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,j8={javascript:!0,"javascript:":!0},z8={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Wd(r,e){if(r&&r instanceof si)return r;const n=new si;return n.parse(r,e),n}si.prototype.parse=function(r,e){let n,t,i,u=r;if(u=u.trim(),!e&&r.split("#").length===1){const s=$I.exec(u);if(s)return this.pathname=s[1],s[2]&&(this.search=s[2]),this}let o=yI.exec(u);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,u=u.substr(o.length)),(e||o||u.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=u.substr(0,2)==="//",i&&!(o&&j8[o])&&(u=u.substr(2),this.slashes=!0)),!j8[o]&&(i||o&&!z8[o])){let s=-1;for(let p=0;p<Y8.length;p++)t=u.indexOf(Y8[p]),t!==-1&&(s===-1||t<s)&&(s=t);let l,f;s===-1?f=u.lastIndexOf("@"):f=u.lastIndexOf("@",s),f!==-1&&(l=u.slice(0,f),u=u.slice(f+1),this.auth=l),s=-1;for(let p=0;p<X8.length;p++)t=u.indexOf(X8[p]),t!==-1&&(s===-1||t<s)&&(s=t);s===-1&&(s=u.length),u[s-1]===":"&&s--;const d=u.slice(0,s);u=u.slice(s),this.parseHost(d),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const p=this.hostname.split(/\./);for(let v=0,m=p.length;v<m;v++){const b=p[v];if(b&&!b.match(K8)){let g="";for(let y=0,_=b.length;y<_;y++)b.charCodeAt(y)>127?g+="x":g+=b[y];if(!g.match(K8)){const y=p.slice(0,v),_=p.slice(v+1),$=b.match(kI);$&&(y.push($[1]),_.unshift($[2])),_.length&&(u=_.join(".")+u),this.hostname=y.join(".");break}}}}this.hostname.length>RI&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const a=u.indexOf("#");a!==-1&&(this.hash=u.substr(a),u=u.slice(0,a));const c=u.indexOf("?");return c!==-1&&(this.search=u.substr(c),u=u.slice(0,c)),u&&(this.pathname=u),z8[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};si.prototype.parseHost=function(r){let e=EI.exec(r);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),r=r.substr(0,r.length-e.length)),r&&(this.hostname=r)};const LI=Object.freeze(Object.defineProperty({__proto__:null,decode:Cn,encode:St,format:Ud,parse:Wd},Symbol.toStringTag,{value:"Module"})),W7=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,G7=/[\0-\x1F\x7F-\x9F]/,CI=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Gd=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,V7=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,X7=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,II=Object.freeze(Object.defineProperty({__proto__:null,Any:W7,Cc:G7,Cf:CI,P:Gd,S:V7,Z:X7},Symbol.toStringTag,{value:"Module"})),qI=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(r=>r.charCodeAt(0))),MI=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(r=>r.charCodeAt(0)));var N1;const NI=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),FI=(N1=String.fromCodePoint)!==null&&N1!==void 0?N1:function(r){let e="";return r>65535&&(r-=65536,e+=String.fromCharCode(r>>>10&1023|55296),r=56320|r&1023),e+=String.fromCharCode(r),e};function OI(r){var e;return r>=55296&&r<=57343||r>1114111?65533:(e=NI.get(r))!==null&&e!==void 0?e:r}var Ge;(function(r){r[r.NUM=35]="NUM",r[r.SEMI=59]="SEMI",r[r.EQUALS=61]="EQUALS",r[r.ZERO=48]="ZERO",r[r.NINE=57]="NINE",r[r.LOWER_A=97]="LOWER_A",r[r.LOWER_F=102]="LOWER_F",r[r.LOWER_X=120]="LOWER_X",r[r.LOWER_Z=122]="LOWER_Z",r[r.UPPER_A=65]="UPPER_A",r[r.UPPER_F=70]="UPPER_F",r[r.UPPER_Z=90]="UPPER_Z"})(Ge||(Ge={}));const DI=32;var rn;(function(r){r[r.VALUE_LENGTH=49152]="VALUE_LENGTH",r[r.BRANCH_LENGTH=16256]="BRANCH_LENGTH",r[r.JUMP_TABLE=127]="JUMP_TABLE"})(rn||(rn={}));function ed(r){return r>=Ge.ZERO&&r<=Ge.NINE}function TI(r){return r>=Ge.UPPER_A&&r<=Ge.UPPER_F||r>=Ge.LOWER_A&&r<=Ge.LOWER_F}function PI(r){return r>=Ge.UPPER_A&&r<=Ge.UPPER_Z||r>=Ge.LOWER_A&&r<=Ge.LOWER_Z||ed(r)}function HI(r){return r===Ge.EQUALS||PI(r)}var We;(function(r){r[r.EntityStart=0]="EntityStart",r[r.NumericStart=1]="NumericStart",r[r.NumericDecimal=2]="NumericDecimal",r[r.NumericHex=3]="NumericHex",r[r.NamedEntity=4]="NamedEntity"})(We||(We={}));var Jr;(function(r){r[r.Legacy=0]="Legacy",r[r.Strict=1]="Strict",r[r.Attribute=2]="Attribute"})(Jr||(Jr={}));class xI{constructor(e,n,t){this.decodeTree=e,this.emitCodePoint=n,this.errors=t,this.state=We.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Jr.Strict}startEntity(e){this.decodeMode=e,this.state=We.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,n){switch(this.state){case We.EntityStart:return e.charCodeAt(n)===Ge.NUM?(this.state=We.NumericStart,this.consumed+=1,this.stateNumericStart(e,n+1)):(this.state=We.NamedEntity,this.stateNamedEntity(e,n));case We.NumericStart:return this.stateNumericStart(e,n);case We.NumericDecimal:return this.stateNumericDecimal(e,n);case We.NumericHex:return this.stateNumericHex(e,n);case We.NamedEntity:return this.stateNamedEntity(e,n)}}stateNumericStart(e,n){return n>=e.length?-1:(e.charCodeAt(n)|DI)===Ge.LOWER_X?(this.state=We.NumericHex,this.consumed+=1,this.stateNumericHex(e,n+1)):(this.state=We.NumericDecimal,this.stateNumericDecimal(e,n))}addToNumericResult(e,n,t,i){if(n!==t){const u=t-n;this.result=this.result*Math.pow(i,u)+parseInt(e.substr(n,u),i),this.consumed+=u}}stateNumericHex(e,n){const t=n;for(;n<e.length;){const i=e.charCodeAt(n);if(ed(i)||TI(i))n+=1;else return this.addToNumericResult(e,t,n,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(e,t,n,16),-1}stateNumericDecimal(e,n){const t=n;for(;n<e.length;){const i=e.charCodeAt(n);if(ed(i))n+=1;else return this.addToNumericResult(e,t,n,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(e,t,n,10),-1}emitNumericEntity(e,n){var t;if(this.consumed<=n)return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===Ge.SEMI)this.consumed+=1;else if(this.decodeMode===Jr.Strict)return 0;return this.emitCodePoint(OI(this.result),this.consumed),this.errors&&(e!==Ge.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,n){const{decodeTree:t}=this;let i=t[this.treeIndex],u=(i&rn.VALUE_LENGTH)>>14;for(;n<e.length;n++,this.excess++){const o=e.charCodeAt(n);if(this.treeIndex=BI(t,i,this.treeIndex+Math.max(1,u),o),this.treeIndex<0)return this.result===0||this.decodeMode===Jr.Attribute&&(u===0||HI(o))?0:this.emitNotTerminatedNamedEntity();if(i=t[this.treeIndex],u=(i&rn.VALUE_LENGTH)>>14,u!==0){if(o===Ge.SEMI)return this.emitNamedEntityData(this.treeIndex,u,this.consumed+this.excess);this.decodeMode!==Jr.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;const{result:n,decodeTree:t}=this,i=(t[n]&rn.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,i,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,n,t){const{decodeTree:i}=this;return this.emitCodePoint(n===1?i[e]&~rn.VALUE_LENGTH:i[e+1],t),n===3&&this.emitCodePoint(i[e+2],t),t}end(){var e;switch(this.state){case We.NamedEntity:return this.result!==0&&(this.decodeMode!==Jr.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case We.NumericDecimal:return this.emitNumericEntity(0,2);case We.NumericHex:return this.emitNumericEntity(0,3);case We.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case We.EntityStart:return 0}}}function Y7(r){let e="";const n=new xI(r,t=>e+=FI(t));return function(i,u){let o=0,a=0;for(;(a=i.indexOf("&",a))>=0;){e+=i.slice(o,a),n.startEntity(u);const s=n.write(i,a+1);if(s<0){o=a+n.end();break}o=a+s,a=s===0?o+1:o}const c=e+i.slice(o);return e="",c}}function BI(r,e,n,t){const i=(e&rn.BRANCH_LENGTH)>>7,u=e&rn.JUMP_TABLE;if(i===0)return u!==0&&t===u?n:-1;if(u){const c=t-u;return c<0||c>=i?-1:r[n+c]-1}let o=n,a=o+i-1;for(;o<=a;){const c=o+a>>>1,s=r[c];if(s<t)o=c+1;else if(s>t)a=c-1;else return r[c+i]}return-1}const UI=Y7(qI);Y7(MI);function K7(r,e=Jr.Legacy){return UI(r,e)}function WI(r){return Object.prototype.toString.call(r)}function Vd(r){return WI(r)==="[object String]"}const GI=Object.prototype.hasOwnProperty;function VI(r,e){return GI.call(r,e)}function Ui(r){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(t){r[t]=n[t]})}}),r}function j7(r,e,n){return[].concat(r.slice(0,e),n,r.slice(e+1))}function Xd(r){return!(r>=55296&&r<=57343||r>=64976&&r<=65007||(r&65535)===65535||(r&65535)===65534||r>=0&&r<=8||r===11||r>=14&&r<=31||r>=127&&r<=159||r>1114111)}function ci(r){if(r>65535){r-=65536;const e=55296+(r>>10),n=56320+(r&1023);return String.fromCharCode(e,n)}return String.fromCharCode(r)}const z7=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,XI=/&([a-z#][a-z0-9]{1,31});/gi,YI=new RegExp(z7.source+"|"+XI.source,"gi"),KI=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function jI(r,e){if(e.charCodeAt(0)===35&&KI.test(e)){const t=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return Xd(t)?ci(t):r}const n=K7(r);return n!==r?n:r}function zI(r){return r.indexOf("\\")<0?r:r.replace(z7,"$1")}function In(r){return r.indexOf("\\")<0&&r.indexOf("&")<0?r:r.replace(YI,function(e,n,t){return n||jI(e,t)})}const JI=/[&<>"]/,ZI=/[&<>"]/g,QI={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function eq(r){return QI[r]}function nn(r){return JI.test(r)?r.replace(ZI,eq):r}const rq=/[.?*+^$[\]\\(){}|-]/g;function nq(r){return r.replace(rq,"\\$&")}function Re(r){switch(r){case 9:case 32:return!0}return!1}function ct(r){if(r>=8192&&r<=8202)return!0;switch(r){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function lt(r){return Gd.test(r)||V7.test(r)}function ft(r){switch(r){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Wi(r){return r=r.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(r=r.replace(/ẞ/g,"ß")),r.toLowerCase().toUpperCase()}const tq={mdurl:LI,ucmicro:II},iq=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:j7,assign:Ui,escapeHtml:nn,escapeRE:nq,fromCodePoint:ci,has:VI,isMdAsciiPunct:ft,isPunctChar:lt,isSpace:Re,isString:Vd,isValidEntityCode:Xd,isWhiteSpace:ct,lib:tq,normalizeReference:Wi,unescapeAll:In,unescapeMd:zI},Symbol.toStringTag,{value:"Module"}));function uq(r,e,n){let t,i,u,o;const a=r.posMax,c=r.pos;for(r.pos=e+1,t=1;r.pos<a;){if(u=r.src.charCodeAt(r.pos),u===93&&(t--,t===0)){i=!0;break}if(o=r.pos,r.md.inline.skipToken(r),u===91){if(o===r.pos-1)t++;else if(n)return r.pos=c,-1}}let s=-1;return i&&(s=r.pos),r.pos=c,s}function oq(r,e,n){let t,i=e;const u={ok:!1,pos:0,str:""};if(r.charCodeAt(i)===60){for(i++;i<n;){if(t=r.charCodeAt(i),t===10||t===60)return u;if(t===62)return u.pos=i+1,u.str=In(r.slice(e+1,i)),u.ok=!0,u;if(t===92&&i+1<n){i+=2;continue}i++}return u}let o=0;for(;i<n&&(t=r.charCodeAt(i),!(t===32||t<32||t===127));){if(t===92&&i+1<n){if(r.charCodeAt(i+1)===32)break;i+=2;continue}if(t===40&&(o++,o>32))return u;if(t===41){if(o===0)break;o--}i++}return e===i||o!==0||(u.str=In(r.slice(e,i)),u.pos=i,u.ok=!0),u}function aq(r,e,n,t){let i,u=e;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(t)o.str=t.str,o.marker=t.marker;else{if(u>=n)return o;let a=r.charCodeAt(u);if(a!==34&&a!==39&&a!==40)return o;e++,u++,a===40&&(a=41),o.marker=a}for(;u<n;){if(i=r.charCodeAt(u),i===o.marker)return o.pos=u+1,o.str+=In(r.slice(e,u)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&u+1<n&&u++,u++}return o.can_continue=!0,o.str+=In(r.slice(e,u)),o}const sq=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:oq,parseLinkLabel:uq,parseLinkTitle:aq},Symbol.toStringTag,{value:"Module"})),Tr={};Tr.code_inline=function(r,e,n,t,i){const u=r[e];return"<code"+i.renderAttrs(u)+">"+nn(u.content)+"</code>"};Tr.code_block=function(r,e,n,t,i){const u=r[e];return"<pre"+i.renderAttrs(u)+"><code>"+nn(r[e].content)+`</code></pre>
`};Tr.fence=function(r,e,n,t,i){const u=r[e],o=u.info?In(u.info).trim():"";let a="",c="";if(o){const l=o.split(/(\s+)/g);a=l[0],c=l.slice(2).join("")}let s;if(n.highlight?s=n.highlight(u.content,a,c)||nn(u.content):s=nn(u.content),s.indexOf("<pre")===0)return s+`
`;if(o){const l=u.attrIndex("class"),f=u.attrs?u.attrs.slice():[];l<0?f.push(["class",n.langPrefix+a]):(f[l]=f[l].slice(),f[l][1]+=" "+n.langPrefix+a);const d={attrs:f};return`<pre><code${i.renderAttrs(d)}>${s}</code></pre>
`}return`<pre><code${i.renderAttrs(u)}>${s}</code></pre>
`};Tr.image=function(r,e,n,t,i){const u=r[e];return u.attrs[u.attrIndex("alt")][1]=i.renderInlineAsText(u.children,n,t),i.renderToken(r,e,n)};Tr.hardbreak=function(r,e,n){return n.xhtmlOut?`<br />
`:`<br>
`};Tr.softbreak=function(r,e,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};Tr.text=function(r,e){return nn(r[e].content)};Tr.html_block=function(r,e){return r[e].content};Tr.html_inline=function(r,e){return r[e].content};function Wn(){this.rules=Ui({},Tr)}Wn.prototype.renderAttrs=function(e){let n,t,i;if(!e.attrs)return"";for(i="",n=0,t=e.attrs.length;n<t;n++)i+=" "+nn(e.attrs[n][0])+'="'+nn(e.attrs[n][1])+'"';return i};Wn.prototype.renderToken=function(e,n,t){const i=e[n];let u="";if(i.hidden)return"";i.block&&i.nesting!==-1&&n&&e[n-1].hidden&&(u+=`
`),u+=(i.nesting===-1?"</":"<")+i.tag,u+=this.renderAttrs(i),i.nesting===0&&t.xhtmlOut&&(u+=" /");let o=!1;if(i.block&&(o=!0,i.nesting===1&&n+1<e.length)){const a=e[n+1];(a.type==="inline"||a.hidden||a.nesting===-1&&a.tag===i.tag)&&(o=!1)}return u+=o?`>
`:">",u};Wn.prototype.renderInline=function(r,e,n){let t="";const i=this.rules;for(let u=0,o=r.length;u<o;u++){const a=r[u].type;typeof i[a]<"u"?t+=i[a](r,u,e,n,this):t+=this.renderToken(r,u,e)}return t};Wn.prototype.renderInlineAsText=function(r,e,n){let t="";for(let i=0,u=r.length;i<u;i++)switch(r[i].type){case"text":t+=r[i].content;break;case"image":t+=this.renderInlineAsText(r[i].children,e,n);break;case"html_inline":case"html_block":t+=r[i].content;break;case"softbreak":case"hardbreak":t+=`
`;break}return t};Wn.prototype.render=function(r,e,n){let t="";const i=this.rules;for(let u=0,o=r.length;u<o;u++){const a=r[u].type;a==="inline"?t+=this.renderInline(r[u].children,e,n):typeof i[a]<"u"?t+=i[a](r,u,e,n,this):t+=this.renderToken(r,u,e,n)}return t};function ur(){this.__rules__=[],this.__cache__=null}ur.prototype.__find__=function(r){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===r)return e;return-1};ur.prototype.__compile__=function(){const r=this,e=[""];r.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(t){e.indexOf(t)<0&&e.push(t)})}),r.__cache__={},e.forEach(function(n){r.__cache__[n]=[],r.__rules__.forEach(function(t){t.enabled&&(n&&t.alt.indexOf(n)<0||r.__cache__[n].push(t.fn))})})};ur.prototype.at=function(r,e,n){const t=this.__find__(r),i=n||{};if(t===-1)throw new Error("Parser rule not found: "+r);this.__rules__[t].fn=e,this.__rules__[t].alt=i.alt||[],this.__cache__=null};ur.prototype.before=function(r,e,n,t){const i=this.__find__(r),u=t||{};if(i===-1)throw new Error("Parser rule not found: "+r);this.__rules__.splice(i,0,{name:e,enabled:!0,fn:n,alt:u.alt||[]}),this.__cache__=null};ur.prototype.after=function(r,e,n,t){const i=this.__find__(r),u=t||{};if(i===-1)throw new Error("Parser rule not found: "+r);this.__rules__.splice(i+1,0,{name:e,enabled:!0,fn:n,alt:u.alt||[]}),this.__cache__=null};ur.prototype.push=function(r,e,n){const t=n||{};this.__rules__.push({name:r,enabled:!0,fn:e,alt:t.alt||[]}),this.__cache__=null};ur.prototype.enable=function(r,e){Array.isArray(r)||(r=[r]);const n=[];return r.forEach(function(t){const i=this.__find__(t);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[i].enabled=!0,n.push(t)},this),this.__cache__=null,n};ur.prototype.enableOnly=function(r,e){Array.isArray(r)||(r=[r]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(r,e)};ur.prototype.disable=function(r,e){Array.isArray(r)||(r=[r]);const n=[];return r.forEach(function(t){const i=this.__find__(t);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[i].enabled=!1,n.push(t)},this),this.__cache__=null,n};ur.prototype.getRules=function(r){return this.__cache__===null&&this.__compile__(),this.__cache__[r]||[]};function $r(r,e,n){this.type=r,this.tag=e,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}$r.prototype.attrIndex=function(e){if(!this.attrs)return-1;const n=this.attrs;for(let t=0,i=n.length;t<i;t++)if(n[t][0]===e)return t;return-1};$r.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};$r.prototype.attrSet=function(e,n){const t=this.attrIndex(e),i=[e,n];t<0?this.attrPush(i):this.attrs[t]=i};$r.prototype.attrGet=function(e){const n=this.attrIndex(e);let t=null;return n>=0&&(t=this.attrs[n][1]),t};$r.prototype.attrJoin=function(e,n){const t=this.attrIndex(e);t<0?this.attrPush([e,n]):this.attrs[t][1]=this.attrs[t][1]+" "+n};function J7(r,e,n){this.src=r,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=e}J7.prototype.Token=$r;const cq=/\r\n?|\n/g,lq=/\0/g;function fq(r){let e;e=r.src.replace(cq,`
`),e=e.replace(lq,"�"),r.src=e}function dq(r){let e;r.inlineMode?(e=new r.Token("inline","",0),e.content=r.src,e.map=[0,1],e.children=[],r.tokens.push(e)):r.md.block.parse(r.src,r.md,r.env,r.tokens)}function pq(r){const e=r.tokens;for(let n=0,t=e.length;n<t;n++){const i=e[n];i.type==="inline"&&r.md.inline.parse(i.content,r.md,r.env,i.children)}}function hq(r){return/^<a[>\s]/i.test(r)}function vq(r){return/^<\/a\s*>/i.test(r)}function mq(r){const e=r.tokens;if(r.md.options.linkify)for(let n=0,t=e.length;n<t;n++){if(e[n].type!=="inline"||!r.md.linkify.pretest(e[n].content))continue;let i=e[n].children,u=0;for(let o=i.length-1;o>=0;o--){const a=i[o];if(a.type==="link_close"){for(o--;i[o].level!==a.level&&i[o].type!=="link_open";)o--;continue}if(a.type==="html_inline"&&(hq(a.content)&&u>0&&u--,vq(a.content)&&u++),!(u>0)&&a.type==="text"&&r.md.linkify.test(a.content)){const c=a.content;let s=r.md.linkify.match(c);const l=[];let f=a.level,d=0;s.length>0&&s[0].index===0&&o>0&&i[o-1].type==="text_special"&&(s=s.slice(1));for(let h=0;h<s.length;h++){const p=s[h].url,v=r.md.normalizeLink(p);if(!r.md.validateLink(v))continue;let m=s[h].text;s[h].schema?s[h].schema==="mailto:"&&!/^mailto:/i.test(m)?m=r.md.normalizeLinkText("mailto:"+m).replace(/^mailto:/,""):m=r.md.normalizeLinkText(m):m=r.md.normalizeLinkText("http://"+m).replace(/^http:\/\//,"");const b=s[h].index;if(b>d){const $=new r.Token("text","",0);$.content=c.slice(d,b),$.level=f,l.push($)}const g=new r.Token("link_open","a",1);g.attrs=[["href",v]],g.level=f++,g.markup="linkify",g.info="auto",l.push(g);const y=new r.Token("text","",0);y.content=m,y.level=f,l.push(y);const _=new r.Token("link_close","a",-1);_.level=--f,_.markup="linkify",_.info="auto",l.push(_),d=s[h].lastIndex}if(d<c.length){const h=new r.Token("text","",0);h.content=c.slice(d),h.level=f,l.push(h)}e[n].children=i=j7(i,o,l)}}}}const Z7=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,bq=/\((c|tm|r)\)/i,_q=/\((c|tm|r)\)/ig,gq={c:"©",r:"®",tm:"™"};function yq(r,e){return gq[e.toLowerCase()]}function Eq(r){let e=0;for(let n=r.length-1;n>=0;n--){const t=r[n];t.type==="text"&&!e&&(t.content=t.content.replace(_q,yq)),t.type==="link_open"&&t.info==="auto"&&e--,t.type==="link_close"&&t.info==="auto"&&e++}}function $q(r){let e=0;for(let n=r.length-1;n>=0;n--){const t=r[n];t.type==="text"&&!e&&Z7.test(t.content)&&(t.content=t.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),t.type==="link_open"&&t.info==="auto"&&e--,t.type==="link_close"&&t.info==="auto"&&e++}}function wq(r){let e;if(r.md.options.typographer)for(e=r.tokens.length-1;e>=0;e--)r.tokens[e].type==="inline"&&(bq.test(r.tokens[e].content)&&Eq(r.tokens[e].children),Z7.test(r.tokens[e].content)&&$q(r.tokens[e].children))}const Aq=/['"]/,J8=/['"]/g,Z8="’";function xt(r,e,n){return r.slice(0,e)+n+r.slice(e+1)}function Sq(r,e){let n;const t=[];for(let i=0;i<r.length;i++){const u=r[i],o=r[i].level;for(n=t.length-1;n>=0&&!(t[n].level<=o);n--);if(t.length=n+1,u.type!=="text")continue;let a=u.content,c=0,s=a.length;e:for(;c<s;){J8.lastIndex=c;const l=J8.exec(a);if(!l)break;let f=!0,d=!0;c=l.index+1;const h=l[0]==="'";let p=32;if(l.index-1>=0)p=a.charCodeAt(l.index-1);else for(n=i-1;n>=0&&!(r[n].type==="softbreak"||r[n].type==="hardbreak");n--)if(r[n].content){p=r[n].content.charCodeAt(r[n].content.length-1);break}let v=32;if(c<s)v=a.charCodeAt(c);else for(n=i+1;n<r.length&&!(r[n].type==="softbreak"||r[n].type==="hardbreak");n++)if(r[n].content){v=r[n].content.charCodeAt(0);break}const m=ft(p)||lt(String.fromCharCode(p)),b=ft(v)||lt(String.fromCharCode(v)),g=ct(p),y=ct(v);if(y?f=!1:b&&(g||m||(f=!1)),g?d=!1:m&&(y||b||(d=!1)),v===34&&l[0]==='"'&&p>=48&&p<=57&&(d=f=!1),f&&d&&(f=m,d=b),!f&&!d){h&&(u.content=xt(u.content,l.index,Z8));continue}if(d)for(n=t.length-1;n>=0;n--){let _=t[n];if(t[n].level<o)break;if(_.single===h&&t[n].level===o){_=t[n];let $,L;h?($=e.md.options.quotes[2],L=e.md.options.quotes[3]):($=e.md.options.quotes[0],L=e.md.options.quotes[1]),u.content=xt(u.content,l.index,L),r[_.token].content=xt(r[_.token].content,_.pos,$),c+=L.length-1,_.token===i&&(c+=$.length-1),a=u.content,s=a.length,t.length=n;continue e}}f?t.push({token:i,pos:l.index,single:h,level:o}):d&&h&&(u.content=xt(u.content,l.index,Z8))}}}function Rq(r){if(r.md.options.typographer)for(let e=r.tokens.length-1;e>=0;e--)r.tokens[e].type!=="inline"||!Aq.test(r.tokens[e].content)||Sq(r.tokens[e].children,r)}function kq(r){let e,n;const t=r.tokens,i=t.length;for(let u=0;u<i;u++){if(t[u].type!=="inline")continue;const o=t[u].children,a=o.length;for(e=0;e<a;e++)o[e].type==="text_special"&&(o[e].type="text");for(e=n=0;e<a;e++)o[e].type==="text"&&e+1<a&&o[e+1].type==="text"?o[e+1].content=o[e].content+o[e+1].content:(e!==n&&(o[n]=o[e]),n++);e!==n&&(o.length=n)}}const F1=[["normalize",fq],["block",dq],["inline",pq],["linkify",mq],["replacements",wq],["smartquotes",Rq],["text_join",kq]];function Yd(){this.ruler=new ur;for(let r=0;r<F1.length;r++)this.ruler.push(F1[r][0],F1[r][1])}Yd.prototype.process=function(r){const e=this.ruler.getRules("");for(let n=0,t=e.length;n<t;n++)e[n](r)};Yd.prototype.State=J7;function Pr(r,e,n,t){this.src=r,this.md=e,this.env=n,this.tokens=t,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let u=0,o=0,a=0,c=0,s=i.length,l=!1;o<s;o++){const f=i.charCodeAt(o);if(!l)if(Re(f)){a++,f===9?c+=4-c%4:c++;continue}else l=!0;(f===10||o===s-1)&&(f!==10&&o++,this.bMarks.push(u),this.eMarks.push(o),this.tShift.push(a),this.sCount.push(c),this.bsCount.push(0),l=!1,a=0,c=0,u=o+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Pr.prototype.push=function(r,e,n){const t=new $r(r,e,n);return t.block=!0,n<0&&this.level--,t.level=this.level,n>0&&this.level++,this.tokens.push(t),t};Pr.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};Pr.prototype.skipEmptyLines=function(e){for(let n=this.lineMax;e<n&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};Pr.prototype.skipSpaces=function(e){for(let n=this.src.length;e<n;e++){const t=this.src.charCodeAt(e);if(!Re(t))break}return e};Pr.prototype.skipSpacesBack=function(e,n){if(e<=n)return e;for(;e>n;)if(!Re(this.src.charCodeAt(--e)))return e+1;return e};Pr.prototype.skipChars=function(e,n){for(let t=this.src.length;e<t&&this.src.charCodeAt(e)===n;e++);return e};Pr.prototype.skipCharsBack=function(e,n,t){if(e<=t)return e;for(;e>t;)if(n!==this.src.charCodeAt(--e))return e+1;return e};Pr.prototype.getLines=function(e,n,t,i){if(e>=n)return"";const u=new Array(n-e);for(let o=0,a=e;a<n;a++,o++){let c=0;const s=this.bMarks[a];let l=s,f;for(a+1<n||i?f=this.eMarks[a]+1:f=this.eMarks[a];l<f&&c<t;){const d=this.src.charCodeAt(l);if(Re(d))d===9?c+=4-(c+this.bsCount[a])%4:c++;else if(l-s<this.tShift[a])c++;else break;l++}c>t?u[o]=new Array(c-t+1).join(" ")+this.src.slice(l,f):u[o]=this.src.slice(l,f)}return u.join("")};Pr.prototype.Token=$r;const Lq=65536;function O1(r,e){const n=r.bMarks[e]+r.tShift[e],t=r.eMarks[e];return r.src.slice(n,t)}function Q8(r){const e=[],n=r.length;let t=0,i=r.charCodeAt(t),u=!1,o=0,a="";for(;t<n;)i===124&&(u?(a+=r.substring(o,t-1),o=t):(e.push(a+r.substring(o,t)),a="",o=t+1)),u=i===92,t++,i=r.charCodeAt(t);return e.push(a+r.substring(o)),e}function Cq(r,e,n,t){if(e+2>n)return!1;let i=e+1;if(r.sCount[i]<r.blkIndent||r.sCount[i]-r.blkIndent>=4)return!1;let u=r.bMarks[i]+r.tShift[i];if(u>=r.eMarks[i])return!1;const o=r.src.charCodeAt(u++);if(o!==124&&o!==45&&o!==58||u>=r.eMarks[i])return!1;const a=r.src.charCodeAt(u++);if(a!==124&&a!==45&&a!==58&&!Re(a)||o===45&&Re(a))return!1;for(;u<r.eMarks[i];){const _=r.src.charCodeAt(u);if(_!==124&&_!==45&&_!==58&&!Re(_))return!1;u++}let c=O1(r,e+1),s=c.split("|");const l=[];for(let _=0;_<s.length;_++){const $=s[_].trim();if(!$){if(_===0||_===s.length-1)continue;return!1}if(!/^:?-+:?$/.test($))return!1;$.charCodeAt($.length-1)===58?l.push($.charCodeAt(0)===58?"center":"right"):$.charCodeAt(0)===58?l.push("left"):l.push("")}if(c=O1(r,e).trim(),c.indexOf("|")===-1||r.sCount[e]-r.blkIndent>=4)return!1;s=Q8(c),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop();const f=s.length;if(f===0||f!==l.length)return!1;if(t)return!0;const d=r.parentType;r.parentType="table";const h=r.md.block.ruler.getRules("blockquote"),p=r.push("table_open","table",1),v=[e,0];p.map=v;const m=r.push("thead_open","thead",1);m.map=[e,e+1];const b=r.push("tr_open","tr",1);b.map=[e,e+1];for(let _=0;_<s.length;_++){const $=r.push("th_open","th",1);l[_]&&($.attrs=[["style","text-align:"+l[_]]]);const L=r.push("inline","",0);L.content=s[_].trim(),L.children=[],r.push("th_close","th",-1)}r.push("tr_close","tr",-1),r.push("thead_close","thead",-1);let g,y=0;for(i=e+2;i<n&&!(r.sCount[i]<r.blkIndent);i++){let _=!1;for(let L=0,S=h.length;L<S;L++)if(h[L](r,i,n,!0)){_=!0;break}if(_||(c=O1(r,i).trim(),!c)||r.sCount[i]-r.blkIndent>=4||(s=Q8(c),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop(),y+=f-s.length,y>Lq))break;if(i===e+2){const L=r.push("tbody_open","tbody",1);L.map=g=[e+2,0]}const $=r.push("tr_open","tr",1);$.map=[i,i+1];for(let L=0;L<f;L++){const S=r.push("td_open","td",1);l[L]&&(S.attrs=[["style","text-align:"+l[L]]]);const q=r.push("inline","",0);q.content=s[L]?s[L].trim():"",q.children=[],r.push("td_close","td",-1)}r.push("tr_close","tr",-1)}return g&&(r.push("tbody_close","tbody",-1),g[1]=i),r.push("table_close","table",-1),v[1]=i,r.parentType=d,r.line=i,!0}function Iq(r,e,n){if(r.sCount[e]-r.blkIndent<4)return!1;let t=e+1,i=t;for(;t<n;){if(r.isEmpty(t)){t++;continue}if(r.sCount[t]-r.blkIndent>=4){t++,i=t;continue}break}r.line=i;const u=r.push("code_block","code",0);return u.content=r.getLines(e,i,4+r.blkIndent,!1)+`
`,u.map=[e,r.line],!0}function qq(r,e,n,t){let i=r.bMarks[e]+r.tShift[e],u=r.eMarks[e];if(r.sCount[e]-r.blkIndent>=4||i+3>u)return!1;const o=r.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let a=i;i=r.skipChars(i,o);let c=i-a;if(c<3)return!1;const s=r.src.slice(a,i),l=r.src.slice(i,u);if(o===96&&l.indexOf(String.fromCharCode(o))>=0)return!1;if(t)return!0;let f=e,d=!1;for(;f++,!(f>=n||(i=a=r.bMarks[f]+r.tShift[f],u=r.eMarks[f],i<u&&r.sCount[f]<r.blkIndent));)if(r.src.charCodeAt(i)===o&&!(r.sCount[f]-r.blkIndent>=4)&&(i=r.skipChars(i,o),!(i-a<c)&&(i=r.skipSpaces(i),!(i<u)))){d=!0;break}c=r.sCount[e],r.line=f+(d?1:0);const h=r.push("fence","code",0);return h.info=l,h.content=r.getLines(e+1,f,c,!0),h.markup=s,h.map=[e,r.line],!0}function Mq(r,e,n,t){let i=r.bMarks[e]+r.tShift[e],u=r.eMarks[e];const o=r.lineMax;if(r.sCount[e]-r.blkIndent>=4||r.src.charCodeAt(i)!==62)return!1;if(t)return!0;const a=[],c=[],s=[],l=[],f=r.md.block.ruler.getRules("blockquote"),d=r.parentType;r.parentType="blockquote";let h=!1,p;for(p=e;p<n;p++){const y=r.sCount[p]<r.blkIndent;if(i=r.bMarks[p]+r.tShift[p],u=r.eMarks[p],i>=u)break;if(r.src.charCodeAt(i++)===62&&!y){let $=r.sCount[p]+1,L,S;r.src.charCodeAt(i)===32?(i++,$++,S=!1,L=!0):r.src.charCodeAt(i)===9?(L=!0,(r.bsCount[p]+$)%4===3?(i++,$++,S=!1):S=!0):L=!1;let q=$;for(a.push(r.bMarks[p]),r.bMarks[p]=i;i<u;){const k=r.src.charCodeAt(i);if(Re(k))k===9?q+=4-(q+r.bsCount[p]+(S?1:0))%4:q++;else break;i++}h=i>=u,c.push(r.bsCount[p]),r.bsCount[p]=r.sCount[p]+1+(L?1:0),s.push(r.sCount[p]),r.sCount[p]=q-$,l.push(r.tShift[p]),r.tShift[p]=i-r.bMarks[p];continue}if(h)break;let _=!1;for(let $=0,L=f.length;$<L;$++)if(f[$](r,p,n,!0)){_=!0;break}if(_){r.lineMax=p,r.blkIndent!==0&&(a.push(r.bMarks[p]),c.push(r.bsCount[p]),l.push(r.tShift[p]),s.push(r.sCount[p]),r.sCount[p]-=r.blkIndent);break}a.push(r.bMarks[p]),c.push(r.bsCount[p]),l.push(r.tShift[p]),s.push(r.sCount[p]),r.sCount[p]=-1}const v=r.blkIndent;r.blkIndent=0;const m=r.push("blockquote_open","blockquote",1);m.markup=">";const b=[e,0];m.map=b,r.md.block.tokenize(r,e,p);const g=r.push("blockquote_close","blockquote",-1);g.markup=">",r.lineMax=o,r.parentType=d,b[1]=r.line;for(let y=0;y<l.length;y++)r.bMarks[y+e]=a[y],r.tShift[y+e]=l[y],r.sCount[y+e]=s[y],r.bsCount[y+e]=c[y];return r.blkIndent=v,!0}function Nq(r,e,n,t){const i=r.eMarks[e];if(r.sCount[e]-r.blkIndent>=4)return!1;let u=r.bMarks[e]+r.tShift[e];const o=r.src.charCodeAt(u++);if(o!==42&&o!==45&&o!==95)return!1;let a=1;for(;u<i;){const s=r.src.charCodeAt(u++);if(s!==o&&!Re(s))return!1;s===o&&a++}if(a<3)return!1;if(t)return!0;r.line=e+1;const c=r.push("hr","hr",0);return c.map=[e,r.line],c.markup=Array(a+1).join(String.fromCharCode(o)),!0}function eb(r,e){const n=r.eMarks[e];let t=r.bMarks[e]+r.tShift[e];const i=r.src.charCodeAt(t++);if(i!==42&&i!==45&&i!==43)return-1;if(t<n){const u=r.src.charCodeAt(t);if(!Re(u))return-1}return t}function rb(r,e){const n=r.bMarks[e]+r.tShift[e],t=r.eMarks[e];let i=n;if(i+1>=t)return-1;let u=r.src.charCodeAt(i++);if(u<48||u>57)return-1;for(;;){if(i>=t)return-1;if(u=r.src.charCodeAt(i++),u>=48&&u<=57){if(i-n>=10)return-1;continue}if(u===41||u===46)break;return-1}return i<t&&(u=r.src.charCodeAt(i),!Re(u))?-1:i}function Fq(r,e){const n=r.level+2;for(let t=e+2,i=r.tokens.length-2;t<i;t++)r.tokens[t].level===n&&r.tokens[t].type==="paragraph_open"&&(r.tokens[t+2].hidden=!0,r.tokens[t].hidden=!0,t+=2)}function Oq(r,e,n,t){let i,u,o,a,c=e,s=!0;if(r.sCount[c]-r.blkIndent>=4||r.listIndent>=0&&r.sCount[c]-r.listIndent>=4&&r.sCount[c]<r.blkIndent)return!1;let l=!1;t&&r.parentType==="paragraph"&&r.sCount[c]>=r.blkIndent&&(l=!0);let f,d,h;if((h=rb(r,c))>=0){if(f=!0,o=r.bMarks[c]+r.tShift[c],d=Number(r.src.slice(o,h-1)),l&&d!==1)return!1}else if((h=eb(r,c))>=0)f=!1;else return!1;if(l&&r.skipSpaces(h)>=r.eMarks[c])return!1;if(t)return!0;const p=r.src.charCodeAt(h-1),v=r.tokens.length;f?(a=r.push("ordered_list_open","ol",1),d!==1&&(a.attrs=[["start",d]])):a=r.push("bullet_list_open","ul",1);const m=[c,0];a.map=m,a.markup=String.fromCharCode(p);let b=!1;const g=r.md.block.ruler.getRules("list"),y=r.parentType;for(r.parentType="list";c<n;){u=h,i=r.eMarks[c];const _=r.sCount[c]+h-(r.bMarks[c]+r.tShift[c]);let $=_;for(;u<i;){const D=r.src.charCodeAt(u);if(D===9)$+=4-($+r.bsCount[c])%4;else if(D===32)$++;else break;u++}const L=u;let S;L>=i?S=1:S=$-_,S>4&&(S=1);const q=_+S;a=r.push("list_item_open","li",1),a.markup=String.fromCharCode(p);const k=[c,0];a.map=k,f&&(a.info=r.src.slice(o,h-1));const w=r.tight,E=r.tShift[c],A=r.sCount[c],R=r.listIndent;if(r.listIndent=r.blkIndent,r.blkIndent=q,r.tight=!0,r.tShift[c]=L-r.bMarks[c],r.sCount[c]=$,L>=i&&r.isEmpty(c+1)?r.line=Math.min(r.line+2,n):r.md.block.tokenize(r,c,n,!0),(!r.tight||b)&&(s=!1),b=r.line-c>1&&r.isEmpty(r.line-1),r.blkIndent=r.listIndent,r.listIndent=R,r.tShift[c]=E,r.sCount[c]=A,r.tight=w,a=r.push("list_item_close","li",-1),a.markup=String.fromCharCode(p),c=r.line,k[1]=c,c>=n||r.sCount[c]<r.blkIndent||r.sCount[c]-r.blkIndent>=4)break;let C=!1;for(let D=0,N=g.length;D<N;D++)if(g[D](r,c,n,!0)){C=!0;break}if(C)break;if(f){if(h=rb(r,c),h<0)break;o=r.bMarks[c]+r.tShift[c]}else if(h=eb(r,c),h<0)break;if(p!==r.src.charCodeAt(h-1))break}return f?a=r.push("ordered_list_close","ol",-1):a=r.push("bullet_list_close","ul",-1),a.markup=String.fromCharCode(p),m[1]=c,r.line=c,r.parentType=y,s&&Fq(r,v),!0}function Dq(r,e,n,t){let i=r.bMarks[e]+r.tShift[e],u=r.eMarks[e],o=e+1;if(r.sCount[e]-r.blkIndent>=4||r.src.charCodeAt(i)!==91)return!1;function a(g){const y=r.lineMax;if(g>=y||r.isEmpty(g))return null;let _=!1;if(r.sCount[g]-r.blkIndent>3&&(_=!0),r.sCount[g]<0&&(_=!0),!_){const S=r.md.block.ruler.getRules("reference"),q=r.parentType;r.parentType="reference";let k=!1;for(let w=0,E=S.length;w<E;w++)if(S[w](r,g,y,!0)){k=!0;break}if(r.parentType=q,k)return null}const $=r.bMarks[g]+r.tShift[g],L=r.eMarks[g];return r.src.slice($,L+1)}let c=r.src.slice(i,u+1);u=c.length;let s=-1;for(i=1;i<u;i++){const g=c.charCodeAt(i);if(g===91)return!1;if(g===93){s=i;break}else if(g===10){const y=a(o);y!==null&&(c+=y,u=c.length,o++)}else if(g===92&&(i++,i<u&&c.charCodeAt(i)===10)){const y=a(o);y!==null&&(c+=y,u=c.length,o++)}}if(s<0||c.charCodeAt(s+1)!==58)return!1;for(i=s+2;i<u;i++){const g=c.charCodeAt(i);if(g===10){const y=a(o);y!==null&&(c+=y,u=c.length,o++)}else if(!Re(g))break}const l=r.md.helpers.parseLinkDestination(c,i,u);if(!l.ok)return!1;const f=r.md.normalizeLink(l.str);if(!r.md.validateLink(f))return!1;i=l.pos;const d=i,h=o,p=i;for(;i<u;i++){const g=c.charCodeAt(i);if(g===10){const y=a(o);y!==null&&(c+=y,u=c.length,o++)}else if(!Re(g))break}let v=r.md.helpers.parseLinkTitle(c,i,u);for(;v.can_continue;){const g=a(o);if(g===null)break;c+=g,i=u,u=c.length,o++,v=r.md.helpers.parseLinkTitle(c,i,u,v)}let m;for(i<u&&p!==i&&v.ok?(m=v.str,i=v.pos):(m="",i=d,o=h);i<u;){const g=c.charCodeAt(i);if(!Re(g))break;i++}if(i<u&&c.charCodeAt(i)!==10&&m)for(m="",i=d,o=h;i<u;){const g=c.charCodeAt(i);if(!Re(g))break;i++}if(i<u&&c.charCodeAt(i)!==10)return!1;const b=Wi(c.slice(1,s));return b?(t||(typeof r.env.references>"u"&&(r.env.references={}),typeof r.env.references[b]>"u"&&(r.env.references[b]={title:m,href:f}),r.line=o),!0):!1}const Tq=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Pq="[a-zA-Z_:][a-zA-Z0-9:._-]*",Hq="[^\"'=<>`\\x00-\\x20]+",xq="'[^']*'",Bq='"[^"]*"',Uq="(?:"+Hq+"|"+xq+"|"+Bq+")",Wq="(?:\\s+"+Pq+"(?:\\s*=\\s*"+Uq+")?)",Q7="<[A-Za-z][A-Za-z0-9\\-]*"+Wq+"*\\s*\\/?>",e9="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Gq="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Vq="<[?][\\s\\S]*?[?]>",Xq="<![A-Za-z][^>]*>",Yq="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Kq=new RegExp("^(?:"+Q7+"|"+e9+"|"+Gq+"|"+Vq+"|"+Xq+"|"+Yq+")"),jq=new RegExp("^(?:"+Q7+"|"+e9+")"),Sn=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Tq.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(jq.source+"\\s*$"),/^$/,!1]];function zq(r,e,n,t){let i=r.bMarks[e]+r.tShift[e],u=r.eMarks[e];if(r.sCount[e]-r.blkIndent>=4||!r.md.options.html||r.src.charCodeAt(i)!==60)return!1;let o=r.src.slice(i,u),a=0;for(;a<Sn.length&&!Sn[a][0].test(o);a++);if(a===Sn.length)return!1;if(t)return Sn[a][2];let c=e+1;if(!Sn[a][1].test(o)){for(;c<n&&!(r.sCount[c]<r.blkIndent);c++)if(i=r.bMarks[c]+r.tShift[c],u=r.eMarks[c],o=r.src.slice(i,u),Sn[a][1].test(o)){o.length!==0&&c++;break}}r.line=c;const s=r.push("html_block","",0);return s.map=[e,c],s.content=r.getLines(e,c,r.blkIndent,!0),!0}function Jq(r,e,n,t){let i=r.bMarks[e]+r.tShift[e],u=r.eMarks[e];if(r.sCount[e]-r.blkIndent>=4)return!1;let o=r.src.charCodeAt(i);if(o!==35||i>=u)return!1;let a=1;for(o=r.src.charCodeAt(++i);o===35&&i<u&&a<=6;)a++,o=r.src.charCodeAt(++i);if(a>6||i<u&&!Re(o))return!1;if(t)return!0;u=r.skipSpacesBack(u,i);const c=r.skipCharsBack(u,35,i);c>i&&Re(r.src.charCodeAt(c-1))&&(u=c),r.line=e+1;const s=r.push("heading_open","h"+String(a),1);s.markup="########".slice(0,a),s.map=[e,r.line];const l=r.push("inline","",0);l.content=r.src.slice(i,u).trim(),l.map=[e,r.line],l.children=[];const f=r.push("heading_close","h"+String(a),-1);return f.markup="########".slice(0,a),!0}function Zq(r,e,n){const t=r.md.block.ruler.getRules("paragraph");if(r.sCount[e]-r.blkIndent>=4)return!1;const i=r.parentType;r.parentType="paragraph";let u=0,o,a=e+1;for(;a<n&&!r.isEmpty(a);a++){if(r.sCount[a]-r.blkIndent>3)continue;if(r.sCount[a]>=r.blkIndent){let h=r.bMarks[a]+r.tShift[a];const p=r.eMarks[a];if(h<p&&(o=r.src.charCodeAt(h),(o===45||o===61)&&(h=r.skipChars(h,o),h=r.skipSpaces(h),h>=p))){u=o===61?1:2;break}}if(r.sCount[a]<0)continue;let d=!1;for(let h=0,p=t.length;h<p;h++)if(t[h](r,a,n,!0)){d=!0;break}if(d)break}if(!u)return!1;const c=r.getLines(e,a,r.blkIndent,!1).trim();r.line=a+1;const s=r.push("heading_open","h"+String(u),1);s.markup=String.fromCharCode(o),s.map=[e,r.line];const l=r.push("inline","",0);l.content=c,l.map=[e,r.line-1],l.children=[];const f=r.push("heading_close","h"+String(u),-1);return f.markup=String.fromCharCode(o),r.parentType=i,!0}function Qq(r,e,n){const t=r.md.block.ruler.getRules("paragraph"),i=r.parentType;let u=e+1;for(r.parentType="paragraph";u<n&&!r.isEmpty(u);u++){if(r.sCount[u]-r.blkIndent>3||r.sCount[u]<0)continue;let s=!1;for(let l=0,f=t.length;l<f;l++)if(t[l](r,u,n,!0)){s=!0;break}if(s)break}const o=r.getLines(e,u,r.blkIndent,!1).trim();r.line=u;const a=r.push("paragraph_open","p",1);a.map=[e,r.line];const c=r.push("inline","",0);return c.content=o,c.map=[e,r.line],c.children=[],r.push("paragraph_close","p",-1),r.parentType=i,!0}const Bt=[["table",Cq,["paragraph","reference"]],["code",Iq],["fence",qq,["paragraph","reference","blockquote","list"]],["blockquote",Mq,["paragraph","reference","blockquote","list"]],["hr",Nq,["paragraph","reference","blockquote","list"]],["list",Oq,["paragraph","reference","blockquote"]],["reference",Dq],["html_block",zq,["paragraph","reference","blockquote"]],["heading",Jq,["paragraph","reference","blockquote"]],["lheading",Zq],["paragraph",Qq]];function Gi(){this.ruler=new ur;for(let r=0;r<Bt.length;r++)this.ruler.push(Bt[r][0],Bt[r][1],{alt:(Bt[r][2]||[]).slice()})}Gi.prototype.tokenize=function(r,e,n){const t=this.ruler.getRules(""),i=t.length,u=r.md.options.maxNesting;let o=e,a=!1;for(;o<n&&(r.line=o=r.skipEmptyLines(o),!(o>=n||r.sCount[o]<r.blkIndent));){if(r.level>=u){r.line=n;break}const c=r.line;let s=!1;for(let l=0;l<i;l++)if(s=t[l](r,o,n,!1),s){if(c>=r.line)throw new Error("block rule didn't increment state.line");break}if(!s)throw new Error("none of the block rules matched");r.tight=!a,r.isEmpty(r.line-1)&&(a=!0),o=r.line,o<n&&r.isEmpty(o)&&(a=!0,o++,r.line=o)}};Gi.prototype.parse=function(r,e,n,t){if(!r)return;const i=new this.State(r,e,n,t);this.tokenize(i,i.line,i.lineMax)};Gi.prototype.State=Pr;function Rt(r,e,n,t){this.src=r,this.env=n,this.md=e,this.tokens=t,this.tokens_meta=Array(t.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Rt.prototype.pushPending=function(){const r=new $r("text","",0);return r.content=this.pending,r.level=this.pendingLevel,this.tokens.push(r),this.pending="",r};Rt.prototype.push=function(r,e,n){this.pending&&this.pushPending();const t=new $r(r,e,n);let i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),t.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(t),this.tokens_meta.push(i),t};Rt.prototype.scanDelims=function(r,e){const n=this.posMax,t=this.src.charCodeAt(r),i=r>0?this.src.charCodeAt(r-1):32;let u=r;for(;u<n&&this.src.charCodeAt(u)===t;)u++;const o=u-r,a=u<n?this.src.charCodeAt(u):32,c=ft(i)||lt(String.fromCharCode(i)),s=ft(a)||lt(String.fromCharCode(a)),l=ct(i),f=ct(a),d=!f&&(!s||l||c),h=!l&&(!c||f||s);return{can_open:d&&(e||!h||c),can_close:h&&(e||!d||s),length:o}};Rt.prototype.Token=$r;function eM(r){switch(r){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function rM(r,e){let n=r.pos;for(;n<r.posMax&&!eM(r.src.charCodeAt(n));)n++;return n===r.pos?!1:(e||(r.pending+=r.src.slice(r.pos,n)),r.pos=n,!0)}const nM=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function tM(r,e){if(!r.md.options.linkify||r.linkLevel>0)return!1;const n=r.pos,t=r.posMax;if(n+3>t||r.src.charCodeAt(n)!==58||r.src.charCodeAt(n+1)!==47||r.src.charCodeAt(n+2)!==47)return!1;const i=r.pending.match(nM);if(!i)return!1;const u=i[1],o=r.md.linkify.matchAtStart(r.src.slice(n-u.length));if(!o)return!1;let a=o.url;if(a.length<=u.length)return!1;let c=a.length;for(;c>0&&a.charCodeAt(c-1)===42;)c--;c!==a.length&&(a=a.slice(0,c));const s=r.md.normalizeLink(a);if(!r.md.validateLink(s))return!1;if(!e){r.pending=r.pending.slice(0,-u.length);const l=r.push("link_open","a",1);l.attrs=[["href",s]],l.markup="linkify",l.info="auto";const f=r.push("text","",0);f.content=r.md.normalizeLinkText(a);const d=r.push("link_close","a",-1);d.markup="linkify",d.info="auto"}return r.pos+=a.length-u.length,!0}function iM(r,e){let n=r.pos;if(r.src.charCodeAt(n)!==10)return!1;const t=r.pending.length-1,i=r.posMax;if(!e)if(t>=0&&r.pending.charCodeAt(t)===32)if(t>=1&&r.pending.charCodeAt(t-1)===32){let u=t-1;for(;u>=1&&r.pending.charCodeAt(u-1)===32;)u--;r.pending=r.pending.slice(0,u),r.push("hardbreak","br",0)}else r.pending=r.pending.slice(0,-1),r.push("softbreak","br",0);else r.push("softbreak","br",0);for(n++;n<i&&Re(r.src.charCodeAt(n));)n++;return r.pos=n,!0}const Kd=[];for(let r=0;r<256;r++)Kd.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(r){Kd[r.charCodeAt(0)]=1});function uM(r,e){let n=r.pos;const t=r.posMax;if(r.src.charCodeAt(n)!==92||(n++,n>=t))return!1;let i=r.src.charCodeAt(n);if(i===10){for(e||r.push("hardbreak","br",0),n++;n<t&&(i=r.src.charCodeAt(n),!!Re(i));)n++;return r.pos=n,!0}let u=r.src[n];if(i>=55296&&i<=56319&&n+1<t){const a=r.src.charCodeAt(n+1);a>=56320&&a<=57343&&(u+=r.src[n+1],n++)}const o="\\"+u;if(!e){const a=r.push("text_special","",0);i<256&&Kd[i]!==0?a.content=u:a.content=o,a.markup=o,a.info="escape"}return r.pos=n+1,!0}function oM(r,e){let n=r.pos;if(r.src.charCodeAt(n)!==96)return!1;const i=n;n++;const u=r.posMax;for(;n<u&&r.src.charCodeAt(n)===96;)n++;const o=r.src.slice(i,n),a=o.length;if(r.backticksScanned&&(r.backticks[a]||0)<=i)return e||(r.pending+=o),r.pos+=a,!0;let c=n,s;for(;(s=r.src.indexOf("`",c))!==-1;){for(c=s+1;c<u&&r.src.charCodeAt(c)===96;)c++;const l=c-s;if(l===a){if(!e){const f=r.push("code_inline","code",0);f.markup=o,f.content=r.src.slice(n,s).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return r.pos=c,!0}r.backticks[l]=s}return r.backticksScanned=!0,e||(r.pending+=o),r.pos+=a,!0}function aM(r,e){const n=r.pos,t=r.src.charCodeAt(n);if(e||t!==126)return!1;const i=r.scanDelims(r.pos,!0);let u=i.length;const o=String.fromCharCode(t);if(u<2)return!1;let a;u%2&&(a=r.push("text","",0),a.content=o,u--);for(let c=0;c<u;c+=2)a=r.push("text","",0),a.content=o+o,r.delimiters.push({marker:t,length:0,token:r.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return r.pos+=i.length,!0}function nb(r,e){let n;const t=[],i=e.length;for(let u=0;u<i;u++){const o=e[u];if(o.marker!==126||o.end===-1)continue;const a=e[o.end];n=r.tokens[o.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=r.tokens[a.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",r.tokens[a.token-1].type==="text"&&r.tokens[a.token-1].content==="~"&&t.push(a.token-1)}for(;t.length;){const u=t.pop();let o=u+1;for(;o<r.tokens.length&&r.tokens[o].type==="s_close";)o++;o--,u!==o&&(n=r.tokens[o],r.tokens[o]=r.tokens[u],r.tokens[u]=n)}}function sM(r){const e=r.tokens_meta,n=r.tokens_meta.length;nb(r,r.delimiters);for(let t=0;t<n;t++)e[t]&&e[t].delimiters&&nb(r,e[t].delimiters)}const r9={tokenize:aM,postProcess:sM};function cM(r,e){const n=r.pos,t=r.src.charCodeAt(n);if(e||t!==95&&t!==42)return!1;const i=r.scanDelims(r.pos,t===42);for(let u=0;u<i.length;u++){const o=r.push("text","",0);o.content=String.fromCharCode(t),r.delimiters.push({marker:t,length:i.length,token:r.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return r.pos+=i.length,!0}function tb(r,e){const n=e.length;for(let t=n-1;t>=0;t--){const i=e[t];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const u=e[i.end],o=t>0&&e[t-1].end===i.end+1&&e[t-1].marker===i.marker&&e[t-1].token===i.token-1&&e[i.end+1].token===u.token+1,a=String.fromCharCode(i.marker),c=r.tokens[i.token];c.type=o?"strong_open":"em_open",c.tag=o?"strong":"em",c.nesting=1,c.markup=o?a+a:a,c.content="";const s=r.tokens[u.token];s.type=o?"strong_close":"em_close",s.tag=o?"strong":"em",s.nesting=-1,s.markup=o?a+a:a,s.content="",o&&(r.tokens[e[t-1].token].content="",r.tokens[e[i.end+1].token].content="",t--)}}function lM(r){const e=r.tokens_meta,n=r.tokens_meta.length;tb(r,r.delimiters);for(let t=0;t<n;t++)e[t]&&e[t].delimiters&&tb(r,e[t].delimiters)}const n9={tokenize:cM,postProcess:lM};function fM(r,e){let n,t,i,u,o="",a="",c=r.pos,s=!0;if(r.src.charCodeAt(r.pos)!==91)return!1;const l=r.pos,f=r.posMax,d=r.pos+1,h=r.md.helpers.parseLinkLabel(r,r.pos,!0);if(h<0)return!1;let p=h+1;if(p<f&&r.src.charCodeAt(p)===40){for(s=!1,p++;p<f&&(n=r.src.charCodeAt(p),!(!Re(n)&&n!==10));p++);if(p>=f)return!1;if(c=p,i=r.md.helpers.parseLinkDestination(r.src,p,r.posMax),i.ok){for(o=r.md.normalizeLink(i.str),r.md.validateLink(o)?p=i.pos:o="",c=p;p<f&&(n=r.src.charCodeAt(p),!(!Re(n)&&n!==10));p++);if(i=r.md.helpers.parseLinkTitle(r.src,p,r.posMax),p<f&&c!==p&&i.ok)for(a=i.str,p=i.pos;p<f&&(n=r.src.charCodeAt(p),!(!Re(n)&&n!==10));p++);}(p>=f||r.src.charCodeAt(p)!==41)&&(s=!0),p++}if(s){if(typeof r.env.references>"u")return!1;if(p<f&&r.src.charCodeAt(p)===91?(c=p+1,p=r.md.helpers.parseLinkLabel(r,p),p>=0?t=r.src.slice(c,p++):p=h+1):p=h+1,t||(t=r.src.slice(d,h)),u=r.env.references[Wi(t)],!u)return r.pos=l,!1;o=u.href,a=u.title}if(!e){r.pos=d,r.posMax=h;const v=r.push("link_open","a",1),m=[["href",o]];v.attrs=m,a&&m.push(["title",a]),r.linkLevel++,r.md.inline.tokenize(r),r.linkLevel--,r.push("link_close","a",-1)}return r.pos=p,r.posMax=f,!0}function dM(r,e){let n,t,i,u,o,a,c,s,l="";const f=r.pos,d=r.posMax;if(r.src.charCodeAt(r.pos)!==33||r.src.charCodeAt(r.pos+1)!==91)return!1;const h=r.pos+2,p=r.md.helpers.parseLinkLabel(r,r.pos+1,!1);if(p<0)return!1;if(u=p+1,u<d&&r.src.charCodeAt(u)===40){for(u++;u<d&&(n=r.src.charCodeAt(u),!(!Re(n)&&n!==10));u++);if(u>=d)return!1;for(s=u,a=r.md.helpers.parseLinkDestination(r.src,u,r.posMax),a.ok&&(l=r.md.normalizeLink(a.str),r.md.validateLink(l)?u=a.pos:l=""),s=u;u<d&&(n=r.src.charCodeAt(u),!(!Re(n)&&n!==10));u++);if(a=r.md.helpers.parseLinkTitle(r.src,u,r.posMax),u<d&&s!==u&&a.ok)for(c=a.str,u=a.pos;u<d&&(n=r.src.charCodeAt(u),!(!Re(n)&&n!==10));u++);else c="";if(u>=d||r.src.charCodeAt(u)!==41)return r.pos=f,!1;u++}else{if(typeof r.env.references>"u")return!1;if(u<d&&r.src.charCodeAt(u)===91?(s=u+1,u=r.md.helpers.parseLinkLabel(r,u),u>=0?i=r.src.slice(s,u++):u=p+1):u=p+1,i||(i=r.src.slice(h,p)),o=r.env.references[Wi(i)],!o)return r.pos=f,!1;l=o.href,c=o.title}if(!e){t=r.src.slice(h,p);const v=[];r.md.inline.parse(t,r.md,r.env,v);const m=r.push("image","img",0),b=[["src",l],["alt",""]];m.attrs=b,m.children=v,m.content=t,c&&b.push(["title",c])}return r.pos=u,r.posMax=d,!0}const pM=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,hM=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function vM(r,e){let n=r.pos;if(r.src.charCodeAt(n)!==60)return!1;const t=r.pos,i=r.posMax;for(;;){if(++n>=i)return!1;const o=r.src.charCodeAt(n);if(o===60)return!1;if(o===62)break}const u=r.src.slice(t+1,n);if(hM.test(u)){const o=r.md.normalizeLink(u);if(!r.md.validateLink(o))return!1;if(!e){const a=r.push("link_open","a",1);a.attrs=[["href",o]],a.markup="autolink",a.info="auto";const c=r.push("text","",0);c.content=r.md.normalizeLinkText(u);const s=r.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return r.pos+=u.length+2,!0}if(pM.test(u)){const o=r.md.normalizeLink("mailto:"+u);if(!r.md.validateLink(o))return!1;if(!e){const a=r.push("link_open","a",1);a.attrs=[["href",o]],a.markup="autolink",a.info="auto";const c=r.push("text","",0);c.content=r.md.normalizeLinkText(u);const s=r.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return r.pos+=u.length+2,!0}return!1}function mM(r){return/^<a[>\s]/i.test(r)}function bM(r){return/^<\/a\s*>/i.test(r)}function _M(r){const e=r|32;return e>=97&&e<=122}function gM(r,e){if(!r.md.options.html)return!1;const n=r.posMax,t=r.pos;if(r.src.charCodeAt(t)!==60||t+2>=n)return!1;const i=r.src.charCodeAt(t+1);if(i!==33&&i!==63&&i!==47&&!_M(i))return!1;const u=r.src.slice(t).match(Kq);if(!u)return!1;if(!e){const o=r.push("html_inline","",0);o.content=u[0],mM(o.content)&&r.linkLevel++,bM(o.content)&&r.linkLevel--}return r.pos+=u[0].length,!0}const yM=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,EM=/^&([a-z][a-z0-9]{1,31});/i;function $M(r,e){const n=r.pos,t=r.posMax;if(r.src.charCodeAt(n)!==38||n+1>=t)return!1;if(r.src.charCodeAt(n+1)===35){const u=r.src.slice(n).match(yM);if(u){if(!e){const o=u[1][0].toLowerCase()==="x"?parseInt(u[1].slice(1),16):parseInt(u[1],10),a=r.push("text_special","",0);a.content=Xd(o)?ci(o):ci(65533),a.markup=u[0],a.info="entity"}return r.pos+=u[0].length,!0}}else{const u=r.src.slice(n).match(EM);if(u){const o=K7(u[0]);if(o!==u[0]){if(!e){const a=r.push("text_special","",0);a.content=o,a.markup=u[0],a.info="entity"}return r.pos+=u[0].length,!0}}}return!1}function ib(r){const e={},n=r.length;if(!n)return;let t=0,i=-2;const u=[];for(let o=0;o<n;o++){const a=r[o];if(u.push(0),(r[t].marker!==a.marker||i!==a.token-1)&&(t=o),i=a.token,a.length=a.length||0,!a.close)continue;e.hasOwnProperty(a.marker)||(e[a.marker]=[-1,-1,-1,-1,-1,-1]);const c=e[a.marker][(a.open?3:0)+a.length%3];let s=t-u[t]-1,l=s;for(;s>c;s-=u[s]+1){const f=r[s];if(f.marker===a.marker&&f.open&&f.end<0){let d=!1;if((f.close||a.open)&&(f.length+a.length)%3===0&&(f.length%3!==0||a.length%3!==0)&&(d=!0),!d){const h=s>0&&!r[s-1].open?u[s-1]+1:0;u[o]=o-s+h,u[s]=h,a.open=!1,f.end=o,f.close=!1,l=-1,i=-2;break}}}l!==-1&&(e[a.marker][(a.open?3:0)+(a.length||0)%3]=l)}}function wM(r){const e=r.tokens_meta,n=r.tokens_meta.length;ib(r.delimiters);for(let t=0;t<n;t++)e[t]&&e[t].delimiters&&ib(e[t].delimiters)}function AM(r){let e,n,t=0;const i=r.tokens,u=r.tokens.length;for(e=n=0;e<u;e++)i[e].nesting<0&&t--,i[e].level=t,i[e].nesting>0&&t++,i[e].type==="text"&&e+1<u&&i[e+1].type==="text"?i[e+1].content=i[e].content+i[e+1].content:(e!==n&&(i[n]=i[e]),n++);e!==n&&(i.length=n)}const D1=[["text",rM],["linkify",tM],["newline",iM],["escape",uM],["backticks",oM],["strikethrough",r9.tokenize],["emphasis",n9.tokenize],["link",fM],["image",dM],["autolink",vM],["html_inline",gM],["entity",$M]],T1=[["balance_pairs",wM],["strikethrough",r9.postProcess],["emphasis",n9.postProcess],["fragments_join",AM]];function kt(){this.ruler=new ur;for(let r=0;r<D1.length;r++)this.ruler.push(D1[r][0],D1[r][1]);this.ruler2=new ur;for(let r=0;r<T1.length;r++)this.ruler2.push(T1[r][0],T1[r][1])}kt.prototype.skipToken=function(r){const e=r.pos,n=this.ruler.getRules(""),t=n.length,i=r.md.options.maxNesting,u=r.cache;if(typeof u[e]<"u"){r.pos=u[e];return}let o=!1;if(r.level<i){for(let a=0;a<t;a++)if(r.level++,o=n[a](r,!0),r.level--,o){if(e>=r.pos)throw new Error("inline rule didn't increment state.pos");break}}else r.pos=r.posMax;o||r.pos++,u[e]=r.pos};kt.prototype.tokenize=function(r){const e=this.ruler.getRules(""),n=e.length,t=r.posMax,i=r.md.options.maxNesting;for(;r.pos<t;){const u=r.pos;let o=!1;if(r.level<i){for(let a=0;a<n;a++)if(o=e[a](r,!1),o){if(u>=r.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(r.pos>=t)break;continue}r.pending+=r.src[r.pos++]}r.pending&&r.pushPending()};kt.prototype.parse=function(r,e,n,t){const i=new this.State(r,e,n,t);this.tokenize(i);const u=this.ruler2.getRules(""),o=u.length;for(let a=0;a<o;a++)u[a](i)};kt.prototype.State=Rt;function SM(r){const e={};r=r||{},e.src_Any=W7.source,e.src_Cc=G7.source,e.src_Z=X7.source,e.src_P=Gd.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");const n="[><｜]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!"+(r["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(r["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function rd(r){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(t){r[t]=n[t]})}),r}function Vi(r){return Object.prototype.toString.call(r)}function RM(r){return Vi(r)==="[object String]"}function kM(r){return Vi(r)==="[object Object]"}function LM(r){return Vi(r)==="[object RegExp]"}function ub(r){return Vi(r)==="[object Function]"}function CM(r){return r.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const t9={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function IM(r){return Object.keys(r||{}).reduce(function(e,n){return e||t9.hasOwnProperty(n)},!1)}const qM={"http:":{validate:function(r,e,n){const t=r.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(t)?t.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(r,e,n){const t=r.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(t)?e>=3&&r[e-3]===":"||e>=3&&r[e-3]==="/"?0:t.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(r,e,n){const t=r.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(t)?t.match(n.re.mailto)[0].length:0}}},MM="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",NM="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function FM(r){r.__index__=-1,r.__text_cache__=""}function OM(r){return function(e,n){const t=e.slice(n);return r.test(t)?t.match(r)[0].length:0}}function ob(){return function(r,e){e.normalize(r)}}function li(r){const e=r.re=SM(r.__opts__),n=r.__tlds__.slice();r.onCompile(),r.__tlds_replaced__||n.push(MM),n.push(e.src_xn),e.src_tlds=n.join("|");function t(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(t(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(t(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(t(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(t(e.tpl_host_fuzzy_test),"i");const i=[];r.__compiled__={};function u(a,c){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+c)}Object.keys(r.__schemas__).forEach(function(a){const c=r.__schemas__[a];if(c===null)return;const s={validate:null,link:null};if(r.__compiled__[a]=s,kM(c)){LM(c.validate)?s.validate=OM(c.validate):ub(c.validate)?s.validate=c.validate:u(a,c),ub(c.normalize)?s.normalize=c.normalize:c.normalize?u(a,c):s.normalize=ob();return}if(RM(c)){i.push(a);return}u(a,c)}),i.forEach(function(a){r.__compiled__[r.__schemas__[a]]&&(r.__compiled__[a].validate=r.__compiled__[r.__schemas__[a]].validate,r.__compiled__[a].normalize=r.__compiled__[r.__schemas__[a]].normalize)}),r.__compiled__[""]={validate:null,normalize:ob()};const o=Object.keys(r.__compiled__).filter(function(a){return a.length>0&&r.__compiled__[a]}).map(CM).join("|");r.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","i"),r.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","ig"),r.re.schema_at_start=RegExp("^"+r.re.schema_search.source,"i"),r.re.pretest=RegExp("("+r.re.schema_test.source+")|("+r.re.host_fuzzy_test.source+")|@","i"),FM(r)}function DM(r,e){const n=r.__index__,t=r.__last_index__,i=r.__text_cache__.slice(n,t);this.schema=r.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=t+e,this.raw=i,this.text=i,this.url=i}function nd(r,e){const n=new DM(r,e);return r.__compiled__[n.schema].normalize(n,r),n}function cr(r,e){if(!(this instanceof cr))return new cr(r,e);e||IM(r)&&(e=r,r={}),this.__opts__=rd({},t9,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=rd({},qM,r),this.__compiled__={},this.__tlds__=NM,this.__tlds_replaced__=!1,this.re={},li(this)}cr.prototype.add=function(e,n){return this.__schemas__[e]=n,li(this),this};cr.prototype.set=function(e){return this.__opts__=rd(this.__opts__,e),this};cr.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let n,t,i,u,o,a,c,s,l;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(n=c.exec(e))!==null;)if(u=this.testSchemaAt(e,n[2],c.lastIndex),u){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+u;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(s=e.search(this.re.host_fuzzy_test),s>=0&&(this.__index__<0||s<this.__index__)&&(t=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=t.index+t[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=t.index+t[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=e.indexOf("@"),l>=0&&(i=e.match(this.re.email_fuzzy))!==null&&(o=i.index+i[1].length,a=i.index+i[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a))),this.__index__>=0};cr.prototype.pretest=function(e){return this.re.pretest.test(e)};cr.prototype.testSchemaAt=function(e,n,t){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,t,this):0};cr.prototype.match=function(e){const n=[];let t=0;this.__index__>=0&&this.__text_cache__===e&&(n.push(nd(this,t)),t=this.__last_index__);let i=t?e.slice(t):e;for(;this.test(i);)n.push(nd(this,t)),i=i.slice(this.__last_index__),t+=this.__last_index__;return n.length?n:null};cr.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;const n=this.re.schema_at_start.exec(e);if(!n)return null;const t=this.testSchemaAt(e,n[2],n[0].length);return t?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+t,nd(this,0)):null};cr.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(t,i,u){return t!==u[i-1]}).reverse(),li(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,li(this),this)};cr.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};cr.prototype.onCompile=function(){};const kn=2147483647,Ir=36,jd=1,dt=26,TM=38,PM=700,i9=72,u9=128,o9="-",HM=/^xn--/,xM=/[^\0-\x7F]/,BM=/[\x2E\u3002\uFF0E\uFF61]/g,UM={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},P1=Ir-jd,qr=Math.floor,H1=String.fromCharCode;function zr(r){throw new RangeError(UM[r])}function WM(r,e){const n=[];let t=r.length;for(;t--;)n[t]=e(r[t]);return n}function a9(r,e){const n=r.split("@");let t="";n.length>1&&(t=n[0]+"@",r=n[1]),r=r.replace(BM,".");const i=r.split("."),u=WM(i,e).join(".");return t+u}function s9(r){const e=[];let n=0;const t=r.length;for(;n<t;){const i=r.charCodeAt(n++);if(i>=55296&&i<=56319&&n<t){const u=r.charCodeAt(n++);(u&64512)==56320?e.push(((i&1023)<<10)+(u&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}const GM=r=>String.fromCodePoint(...r),VM=function(r){return r>=48&&r<58?26+(r-48):r>=65&&r<91?r-65:r>=97&&r<123?r-97:Ir},ab=function(r,e){return r+22+75*(r<26)-((e!=0)<<5)},c9=function(r,e,n){let t=0;for(r=n?qr(r/PM):r>>1,r+=qr(r/e);r>P1*dt>>1;t+=Ir)r=qr(r/P1);return qr(t+(P1+1)*r/(r+TM))},l9=function(r){const e=[],n=r.length;let t=0,i=u9,u=i9,o=r.lastIndexOf(o9);o<0&&(o=0);for(let a=0;a<o;++a)r.charCodeAt(a)>=128&&zr("not-basic"),e.push(r.charCodeAt(a));for(let a=o>0?o+1:0;a<n;){const c=t;for(let l=1,f=Ir;;f+=Ir){a>=n&&zr("invalid-input");const d=VM(r.charCodeAt(a++));d>=Ir&&zr("invalid-input"),d>qr((kn-t)/l)&&zr("overflow"),t+=d*l;const h=f<=u?jd:f>=u+dt?dt:f-u;if(d<h)break;const p=Ir-h;l>qr(kn/p)&&zr("overflow"),l*=p}const s=e.length+1;u=c9(t-c,s,c==0),qr(t/s)>kn-i&&zr("overflow"),i+=qr(t/s),t%=s,e.splice(t++,0,i)}return String.fromCodePoint(...e)},f9=function(r){const e=[];r=s9(r);const n=r.length;let t=u9,i=0,u=i9;for(const c of r)c<128&&e.push(H1(c));const o=e.length;let a=o;for(o&&e.push(o9);a<n;){let c=kn;for(const l of r)l>=t&&l<c&&(c=l);const s=a+1;c-t>qr((kn-i)/s)&&zr("overflow"),i+=(c-t)*s,t=c;for(const l of r)if(l<t&&++i>kn&&zr("overflow"),l===t){let f=i;for(let d=Ir;;d+=Ir){const h=d<=u?jd:d>=u+dt?dt:d-u;if(f<h)break;const p=f-h,v=Ir-h;e.push(H1(ab(h+p%v,0))),f=qr(p/v)}e.push(H1(ab(f,0))),u=c9(i,s,a===o),i=0,++a}++i,++t}return e.join("")},XM=function(r){return a9(r,function(e){return HM.test(e)?l9(e.slice(4).toLowerCase()):e})},YM=function(r){return a9(r,function(e){return xM.test(e)?"xn--"+f9(e):e})},d9={version:"2.3.1",ucs2:{decode:s9,encode:GM},decode:l9,encode:f9,toASCII:YM,toUnicode:XM},KM={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},jM={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},zM={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},JM={default:KM,zero:jM,commonmark:zM},ZM=/^(vbscript|javascript|file|data):/,QM=/^data:image\/(gif|png|jpeg|webp);/;function eN(r){const e=r.trim().toLowerCase();return ZM.test(e)?QM.test(e):!0}const p9=["http:","https:","mailto:"];function rN(r){const e=Wd(r,!0);if(e.hostname&&(!e.protocol||p9.indexOf(e.protocol)>=0))try{e.hostname=d9.toASCII(e.hostname)}catch{}return St(Ud(e))}function nN(r){const e=Wd(r,!0);if(e.hostname&&(!e.protocol||p9.indexOf(e.protocol)>=0))try{e.hostname=d9.toUnicode(e.hostname)}catch{}return Cn(Ud(e),Cn.defaultChars+"%")}function lr(r,e){if(!(this instanceof lr))return new lr(r,e);e||Vd(r)||(e=r||{},r="default"),this.inline=new kt,this.block=new Gi,this.core=new Yd,this.renderer=new Wn,this.linkify=new cr,this.validateLink=eN,this.normalizeLink=rN,this.normalizeLinkText=nN,this.utils=iq,this.helpers=Ui({},sq),this.options={},this.configure(r),e&&this.set(e)}lr.prototype.set=function(r){return Ui(this.options,r),this};lr.prototype.configure=function(r){const e=this;if(Vd(r)){const n=r;if(r=JM[n],!r)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!r)throw new Error("Wrong `markdown-it` preset, can't be empty");return r.options&&e.set(r.options),r.components&&Object.keys(r.components).forEach(function(n){r.components[n].rules&&e[n].ruler.enableOnly(r.components[n].rules),r.components[n].rules2&&e[n].ruler2.enableOnly(r.components[n].rules2)}),this};lr.prototype.enable=function(r,e){let n=[];Array.isArray(r)||(r=[r]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.enable(r,!0))},this),n=n.concat(this.inline.ruler2.enable(r,!0));const t=r.filter(function(i){return n.indexOf(i)<0});if(t.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+t);return this};lr.prototype.disable=function(r,e){let n=[];Array.isArray(r)||(r=[r]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.disable(r,!0))},this),n=n.concat(this.inline.ruler2.disable(r,!0));const t=r.filter(function(i){return n.indexOf(i)<0});if(t.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+t);return this};lr.prototype.use=function(r){const e=[this].concat(Array.prototype.slice.call(arguments,1));return r.apply(r,e),this};lr.prototype.parse=function(r,e){if(typeof r!="string")throw new Error("Input data should be a String");const n=new this.core.State(r,this,e);return this.core.process(n),n.tokens};lr.prototype.render=function(r,e){return e=e||{},this.renderer.render(this.parse(r,e),this.options,e)};lr.prototype.parseInline=function(r,e){const n=new this.core.State(r,this,e);return n.inlineMode=!0,this.core.process(n),n.tokens};lr.prototype.renderInline=function(r,e){return e=e||{},this.renderer.render(this.parseInline(r,e),this.options,e)};const h9=new lr({html:!1,linkify:!0,breaks:!0}),v9="calculator-inline-reasoning",sb="calculator-adhoc-meta";function zd(r,e){const n=document.getElementById(sb);if(!e){n==null||n.remove();return}const t=n??(()=>{const u=document.createElement("div");return u.id=sb,r.insertAdjacentElement("beforebegin",u),u})();t.className="adhoc-meta",t.innerHTML="";const i=document.createElement("div");i.className="adhoc-meta-body";try{i.innerHTML=h9.render(e)}catch{i.textContent=e}t.appendChild(i)}function m9(r,e){const n=new Set(Object.keys(r)),t=[];for(const i of e)n.has(i)&&(t.push(i),n.delete(i));for(const i of[...n].sort())t.push(i);return t}function Jd(r,e,n){const t=document.getElementById(v9),i=e.map((l,f)=>{var p;const d=Object.fromEntries(Object.entries(l.reasoning??{}).filter(([,v])=>v.trim()!=="")),h=(p=l.misc)!=null&&p.trim()?l.misc:void 0;return{trialIndex:f,reasoning:d,misc:h}}).filter(({reasoning:l,misc:f})=>Object.keys(l).length>0||f!==void 0);if(i.length===0){t==null||t.remove();return}const u=t??tN(r);u.innerHTML="";const o=document.createElement("details");o.className="reasoning-inline",o.open=!0;const a=document.createElement("summary");a.className="reasoning-inline-summary";const c=i.some(({reasoning:l})=>Object.keys(l).length>0),s=i.some(({misc:l})=>l!==void 0);c&&s?a.textContent="Reasoning and misc":c?a.textContent="Reasoning":a.textContent="Misc",o.appendChild(a);for(const{trialIndex:l,reasoning:f,misc:d}of i){if(e.length>1){const h=document.createElement("div");h.className="reasoning-trial-label",h.textContent=`Trial ${l+1}`,o.appendChild(h)}for(const h of m9(f,n))o.appendChild(cb(h,f[h]));d!==void 0&&o.appendChild(cb("Misc",d))}u.appendChild(o)}function tN(r){const e=document.createElement("div");return e.id=v9,r.insertAdjacentElement("afterend",e),e}function cb(r,e){const n=document.createElement("div");n.className="reasoning-item";const t=document.createElement("div");t.className="reasoning-svar-label",t.textContent=r,n.appendChild(t);const i=document.createElement("div");i.className="reasoning-md";try{i.innerHTML=h9.render(e)}catch{i.textContent=e}return n.appendChild(i),n}var x1,lb;function iN(){if(lb)return x1;lb=1;function r(I){return I instanceof Map?I.clear=I.delete=I.set=function(){throw new Error("map is read-only")}:I instanceof Set&&(I.add=I.clear=I.delete=function(){throw new Error("set is read-only")}),Object.freeze(I),Object.getOwnPropertyNames(I).forEach(T=>{const X=I[T],ae=typeof X;(ae==="object"||ae==="function")&&!Object.isFrozen(X)&&r(X)}),I}class e{constructor(T){T.data===void 0&&(T.data={}),this.data=T.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function n(I){return I.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function t(I,...T){const X=Object.create(null);for(const ae in I)X[ae]=I[ae];return T.forEach(function(ae){for(const De in ae)X[De]=ae[De]}),X}const i="</span>",u=I=>!!I.scope,o=(I,{prefix:T})=>{if(I.startsWith("language:"))return I.replace("language:","language-");if(I.includes(".")){const X=I.split(".");return[`${T}${X.shift()}`,...X.map((ae,De)=>`${ae}${"_".repeat(De+1)}`)].join(" ")}return`${T}${I}`};class a{constructor(T,X){this.buffer="",this.classPrefix=X.classPrefix,T.walk(this)}addText(T){this.buffer+=n(T)}openNode(T){if(!u(T))return;const X=o(T.scope,{prefix:this.classPrefix});this.span(X)}closeNode(T){u(T)&&(this.buffer+=i)}value(){return this.buffer}span(T){this.buffer+=`<span class="${T}">`}}const c=(I={})=>{const T={children:[]};return Object.assign(T,I),T};class s{constructor(){this.rootNode=c(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(T){this.top.children.push(T)}openNode(T){const X=c({scope:T});this.add(X),this.stack.push(X)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(T){return this.constructor._walk(T,this.rootNode)}static _walk(T,X){return typeof X=="string"?T.addText(X):X.children&&(T.openNode(X),X.children.forEach(ae=>this._walk(T,ae)),T.closeNode(X)),T}static _collapse(T){typeof T!="string"&&T.children&&(T.children.every(X=>typeof X=="string")?T.children=[T.children.join("")]:T.children.forEach(X=>{s._collapse(X)}))}}class l extends s{constructor(T){super(),this.options=T}addText(T){T!==""&&this.add(T)}startScope(T){this.openNode(T)}endScope(){this.closeNode()}__addSublanguage(T,X){const ae=T.root;X&&(ae.scope=`language:${X}`),this.add(ae)}toHTML(){return new a(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function f(I){return I?typeof I=="string"?I:I.source:null}function d(I){return v("(?=",I,")")}function h(I){return v("(?:",I,")*")}function p(I){return v("(?:",I,")?")}function v(...I){return I.map(X=>f(X)).join("")}function m(I){const T=I[I.length-1];return typeof T=="object"&&T.constructor===Object?(I.splice(I.length-1,1),T):{}}function b(...I){return"("+(m(I).capture?"":"?:")+I.map(ae=>f(ae)).join("|")+")"}function g(I){return new RegExp(I.toString()+"|").exec("").length-1}function y(I,T){const X=I&&I.exec(T);return X&&X.index===0}const _=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function $(I,{joinWith:T}){let X=0;return I.map(ae=>{X+=1;const De=X;let Te=f(ae),Q="";for(;Te.length>0;){const z=_.exec(Te);if(!z){Q+=Te;break}Q+=Te.substring(0,z.index),Te=Te.substring(z.index+z[0].length),z[0][0]==="\\"&&z[1]?Q+="\\"+String(Number(z[1])+De):(Q+=z[0],z[0]==="("&&X++)}return Q}).map(ae=>`(${ae})`).join(T)}const L=/\b\B/,S="[a-zA-Z]\\w*",q="[a-zA-Z_]\\w*",k="\\b\\d+(\\.\\d+)?",w="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",E="\\b(0b[01]+)",A="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",R=(I={})=>{const T=/^#![ ]*\//;return I.binary&&(I.begin=v(T,/.*\b/,I.binary,/\b.*/)),t({scope:"meta",begin:T,end:/$/,relevance:0,"on:begin":(X,ae)=>{X.index!==0&&ae.ignoreMatch()}},I)},C={begin:"\\\\[\\s\\S]",relevance:0},D={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[C]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[C]},B={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},O=function(I,T,X={}){const ae=t({scope:"comment",begin:I,end:T,contains:[]},X);ae.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const De=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return ae.contains.push({begin:v(/[ ]+/,"(",De,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),ae},P=O("//","$"),F=O("/\\*","\\*/"),Z=O("#","$"),W={scope:"number",begin:k,relevance:0},j={scope:"number",begin:w,relevance:0},ee={scope:"number",begin:E,relevance:0},V={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[C,{begin:/\[/,end:/\]/,relevance:0,contains:[C]}]},x={scope:"title",begin:S,relevance:0},K={scope:"title",begin:q,relevance:0},G={begin:"\\.\\s*"+q,relevance:0};var le=Object.freeze({__proto__:null,APOS_STRING_MODE:D,BACKSLASH_ESCAPE:C,BINARY_NUMBER_MODE:ee,BINARY_NUMBER_RE:E,COMMENT:O,C_BLOCK_COMMENT_MODE:F,C_LINE_COMMENT_MODE:P,C_NUMBER_MODE:j,C_NUMBER_RE:w,END_SAME_AS_BEGIN:function(I){return Object.assign(I,{"on:begin":(T,X)=>{X.data._beginMatch=T[1]},"on:end":(T,X)=>{X.data._beginMatch!==T[1]&&X.ignoreMatch()}})},HASH_COMMENT_MODE:Z,IDENT_RE:S,MATCH_NOTHING_RE:L,METHOD_GUARD:G,NUMBER_MODE:W,NUMBER_RE:k,PHRASAL_WORDS_MODE:B,QUOTE_STRING_MODE:N,REGEXP_MODE:V,RE_STARTERS_RE:A,SHEBANG:R,TITLE_MODE:x,UNDERSCORE_IDENT_RE:q,UNDERSCORE_TITLE_MODE:K});function re(I,T){I.input[I.index-1]==="."&&T.ignoreMatch()}function ie(I,T){I.className!==void 0&&(I.scope=I.className,delete I.className)}function de(I,T){T&&I.beginKeywords&&(I.begin="\\b("+I.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",I.__beforeBegin=re,I.keywords=I.keywords||I.beginKeywords,delete I.beginKeywords,I.relevance===void 0&&(I.relevance=0))}function be(I,T){Array.isArray(I.illegal)&&(I.illegal=b(...I.illegal))}function wr(I,T){if(I.match){if(I.begin||I.end)throw new Error("begin & end are not supported with match");I.begin=I.match,delete I.match}}function ze(I,T){I.relevance===void 0&&(I.relevance=1)}const me=(I,T)=>{if(!I.beforeMatch)return;if(I.starts)throw new Error("beforeMatch cannot be used with starts");const X=Object.assign({},I);Object.keys(I).forEach(ae=>{delete I[ae]}),I.keywords=X.keywords,I.begin=v(X.beforeMatch,d(X.begin)),I.starts={relevance:0,contains:[Object.assign(X,{endsParent:!0})]},I.relevance=0,delete X.beforeMatch},vr=["of","and","for","in","not","or","if","then","parent","list","value"],Ve="keyword";function mr(I,T,X=Ve){const ae=Object.create(null);return typeof I=="string"?De(X,I.split(" ")):Array.isArray(I)?De(X,I):Object.keys(I).forEach(function(Te){Object.assign(ae,mr(I[Te],T,Te))}),ae;function De(Te,Q){T&&(Q=Q.map(z=>z.toLowerCase())),Q.forEach(function(z){const oe=z.split("|");ae[oe[0]]=[Te,sn(oe[0],oe[1])]})}}function sn(I,T){return T?Number(T):J(I)?0:1}function J(I){return vr.includes(I.toLowerCase())}const he={},br=I=>{console.error(I)},jn=(I,...T)=>{console.log(`WARN: ${I}`,...T)},Hr=(I,T)=>{he[`${I}/${T}`]||(console.log(`Deprecated as of ${I}. ${T}`),he[`${I}/${T}`]=!0)},Yr=new Error;function gn(I,T,{key:X}){let ae=0;const De=I[X],Te={},Q={};for(let z=1;z<=T.length;z++)Q[z+ae]=De[z],Te[z+ae]=!0,ae+=g(T[z-1]);I[X]=Q,I[X]._emit=Te,I[X]._multi=!0}function zn(I){if(Array.isArray(I.begin)){if(I.skip||I.excludeBegin||I.returnBegin)throw br("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Yr;if(typeof I.beginScope!="object"||I.beginScope===null)throw br("beginScope must be object"),Yr;gn(I,I.begin,{key:"beginScope"}),I.begin=$(I.begin,{joinWith:""})}}function Jn(I){if(Array.isArray(I.end)){if(I.skip||I.excludeEnd||I.returnEnd)throw br("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Yr;if(typeof I.endScope!="object"||I.endScope===null)throw br("endScope must be object"),Yr;gn(I,I.end,{key:"endScope"}),I.end=$(I.end,{joinWith:""})}}function qt(I){I.scope&&typeof I.scope=="object"&&I.scope!==null&&(I.beginScope=I.scope,delete I.scope)}function Xe(I){qt(I),typeof I.beginScope=="string"&&(I.beginScope={_wrap:I.beginScope}),typeof I.endScope=="string"&&(I.endScope={_wrap:I.endScope}),zn(I),Jn(I)}function Oe(I){function T(Q,z){return new RegExp(f(Q),"m"+(I.case_insensitive?"i":"")+(I.unicodeRegex?"u":"")+(z?"g":""))}class X{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(z,oe){oe.position=this.position++,this.matchIndexes[this.matchAt]=oe,this.regexes.push([oe,z]),this.matchAt+=g(z)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const z=this.regexes.map(oe=>oe[1]);this.matcherRe=T($(z,{joinWith:"|"}),!0),this.lastIndex=0}exec(z){this.matcherRe.lastIndex=this.lastIndex;const oe=this.matcherRe.exec(z);if(!oe)return null;const Be=oe.findIndex((Zn,ji)=>ji>0&&Zn!==void 0),Pe=this.matchIndexes[Be];return oe.splice(0,Be),Object.assign(oe,Pe)}}class ae{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(z){if(this.multiRegexes[z])return this.multiRegexes[z];const oe=new X;return this.rules.slice(z).forEach(([Be,Pe])=>oe.addRule(Be,Pe)),oe.compile(),this.multiRegexes[z]=oe,oe}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(z,oe){this.rules.push([z,oe]),oe.type==="begin"&&this.count++}exec(z){const oe=this.getMatcher(this.regexIndex);oe.lastIndex=this.lastIndex;let Be=oe.exec(z);if(this.resumingScanAtSamePosition()&&!(Be&&Be.index===this.lastIndex)){const Pe=this.getMatcher(0);Pe.lastIndex=this.lastIndex+1,Be=Pe.exec(z)}return Be&&(this.regexIndex+=Be.position+1,this.regexIndex===this.count&&this.considerAll()),Be}}function De(Q){const z=new ae;return Q.contains.forEach(oe=>z.addRule(oe.begin,{rule:oe,type:"begin"})),Q.terminatorEnd&&z.addRule(Q.terminatorEnd,{type:"end"}),Q.illegal&&z.addRule(Q.illegal,{type:"illegal"}),z}function Te(Q,z){const oe=Q;if(Q.isCompiled)return oe;[ie,wr,Xe,me].forEach(Pe=>Pe(Q,z)),I.compilerExtensions.forEach(Pe=>Pe(Q,z)),Q.__beforeBegin=null,[de,be,ze].forEach(Pe=>Pe(Q,z)),Q.isCompiled=!0;let Be=null;return typeof Q.keywords=="object"&&Q.keywords.$pattern&&(Q.keywords=Object.assign({},Q.keywords),Be=Q.keywords.$pattern,delete Q.keywords.$pattern),Be=Be||/\w+/,Q.keywords&&(Q.keywords=mr(Q.keywords,I.case_insensitive)),oe.keywordPatternRe=T(Be,!0),z&&(Q.begin||(Q.begin=/\B|\b/),oe.beginRe=T(oe.begin),!Q.end&&!Q.endsWithParent&&(Q.end=/\B|\b/),Q.end&&(oe.endRe=T(oe.end)),oe.terminatorEnd=f(oe.end)||"",Q.endsWithParent&&z.terminatorEnd&&(oe.terminatorEnd+=(Q.end?"|":"")+z.terminatorEnd)),Q.illegal&&(oe.illegalRe=T(Q.illegal)),Q.contains||(Q.contains=[]),Q.contains=[].concat(...Q.contains.map(function(Pe){return Ye(Pe==="self"?Q:Pe)})),Q.contains.forEach(function(Pe){Te(Pe,oe)}),Q.starts&&Te(Q.starts,z),oe.matcher=De(oe),oe}if(I.compilerExtensions||(I.compilerExtensions=[]),I.contains&&I.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return I.classNameAliases=t(I.classNameAliases||{}),Te(I)}function yn(I){return I?I.endsWithParent||yn(I.starts):!1}function Ye(I){return I.variants&&!I.cachedVariants&&(I.cachedVariants=I.variants.map(function(T){return t(I,{variants:null},T)})),I.cachedVariants?I.cachedVariants:yn(I)?t(I,{starts:I.starts?t(I.starts):null}):Object.isFrozen(I)?t(I):I}var _r="11.11.1";class or extends Error{constructor(T,X){super(T),this.name="HTMLInjectionError",this.html=X}}const cn=n,En=t,$n=Symbol("nomatch"),xg=7,F2=function(I){const T=Object.create(null),X=Object.create(null),ae=[];let De=!0;const Te="Could not find the language '{}', did you forget to load/include a language module?",Q={disableAutodetect:!0,name:"Plain text",contains:[]};let z={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function oe(U){return z.noHighlightRe.test(U)}function Be(U){let te=U.className+" ";te+=U.parentNode?U.parentNode.className:"";const pe=z.languageDetectRe.exec(te);if(pe){const Ae=Kr(pe[1]);return Ae||(jn(Te.replace("{}",pe[1])),jn("Falling back to no-highlight mode for this block.",U)),Ae?pe[1]:"no-highlight"}return te.split(/\s+/).find(Ae=>oe(Ae)||Kr(Ae))}function Pe(U,te,pe){let Ae="",xe="";typeof te=="object"?(Ae=U,pe=te.ignoreIllegals,xe=te.language):(Hr("10.7.0","highlight(lang, code, ...args) has been deprecated."),Hr("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),xe=U,Ae=te),pe===void 0&&(pe=!0);const gr={code:Ae,language:xe};Nt("before:highlight",gr);const jr=gr.result?gr.result:Zn(gr.language,gr.code,pe);return jr.code=gr.code,Nt("after:highlight",jr),jr}function Zn(U,te,pe,Ae){const xe=Object.create(null);function gr(Y,ne){return Y.keywords[ne]}function jr(){if(!ce.keywords){Ke.addText(Se);return}let Y=0;ce.keywordPatternRe.lastIndex=0;let ne=ce.keywordPatternRe.exec(Se),fe="";for(;ne;){fe+=Se.substring(Y,ne.index);const Ee=Sr.case_insensitive?ne[0].toLowerCase():ne[0],Je=gr(ce,Ee);if(Je){const[xr,ty]=Je;if(Ke.addText(fe),fe="",xe[Ee]=(xe[Ee]||0)+1,xe[Ee]<=xg&&(Dt+=ty),xr.startsWith("_"))fe+=ne[0];else{const iy=Sr.classNameAliases[xr]||xr;Ar(ne[0],iy)}}else fe+=ne[0];Y=ce.keywordPatternRe.lastIndex,ne=ce.keywordPatternRe.exec(Se)}fe+=Se.substring(Y),Ke.addText(fe)}function Ft(){if(Se==="")return;let Y=null;if(typeof ce.subLanguage=="string"){if(!T[ce.subLanguage]){Ke.addText(Se);return}Y=Zn(ce.subLanguage,Se,!0,U2[ce.subLanguage]),U2[ce.subLanguage]=Y._top}else Y=zi(Se,ce.subLanguage.length?ce.subLanguage:null);ce.relevance>0&&(Dt+=Y.relevance),Ke.__addSublanguage(Y._emitter,Y.language)}function ar(){ce.subLanguage!=null?Ft():jr(),Se=""}function Ar(Y,ne){Y!==""&&(Ke.startScope(ne),Ke.addText(Y),Ke.endScope())}function P2(Y,ne){let fe=1;const Ee=ne.length-1;for(;fe<=Ee;){if(!Y._emit[fe]){fe++;continue}const Je=Sr.classNameAliases[Y[fe]]||Y[fe],xr=ne[fe];Je?Ar(xr,Je):(Se=xr,jr(),Se=""),fe++}}function H2(Y,ne){return Y.scope&&typeof Y.scope=="string"&&Ke.openNode(Sr.classNameAliases[Y.scope]||Y.scope),Y.beginScope&&(Y.beginScope._wrap?(Ar(Se,Sr.classNameAliases[Y.beginScope._wrap]||Y.beginScope._wrap),Se=""):Y.beginScope._multi&&(P2(Y.beginScope,ne),Se="")),ce=Object.create(Y,{parent:{value:ce}}),ce}function x2(Y,ne,fe){let Ee=y(Y.endRe,fe);if(Ee){if(Y["on:end"]){const Je=new e(Y);Y["on:end"](ne,Je),Je.isMatchIgnored&&(Ee=!1)}if(Ee){for(;Y.endsParent&&Y.parent;)Y=Y.parent;return Y}}if(Y.endsWithParent)return x2(Y.parent,ne,fe)}function Zg(Y){return ce.matcher.regexIndex===0?(Se+=Y[0],1):(eu=!0,0)}function Qg(Y){const ne=Y[0],fe=Y.rule,Ee=new e(fe),Je=[fe.__beforeBegin,fe["on:begin"]];for(const xr of Je)if(xr&&(xr(Y,Ee),Ee.isMatchIgnored))return Zg(ne);return fe.skip?Se+=ne:(fe.excludeBegin&&(Se+=ne),ar(),!fe.returnBegin&&!fe.excludeBegin&&(Se=ne)),H2(fe,Y),fe.returnBegin?0:ne.length}function ey(Y){const ne=Y[0],fe=te.substring(Y.index),Ee=x2(ce,Y,fe);if(!Ee)return $n;const Je=ce;ce.endScope&&ce.endScope._wrap?(ar(),Ar(ne,ce.endScope._wrap)):ce.endScope&&ce.endScope._multi?(ar(),P2(ce.endScope,Y)):Je.skip?Se+=ne:(Je.returnEnd||Je.excludeEnd||(Se+=ne),ar(),Je.excludeEnd&&(Se=ne));do ce.scope&&Ke.closeNode(),!ce.skip&&!ce.subLanguage&&(Dt+=ce.relevance),ce=ce.parent;while(ce!==Ee.parent);return Ee.starts&&H2(Ee.starts,Y),Je.returnEnd?0:ne.length}function ry(){const Y=[];for(let ne=ce;ne!==Sr;ne=ne.parent)ne.scope&&Y.unshift(ne.scope);Y.forEach(ne=>Ke.openNode(ne))}let Ot={};function B2(Y,ne){const fe=ne&&ne[0];if(Se+=Y,fe==null)return ar(),0;if(Ot.type==="begin"&&ne.type==="end"&&Ot.index===ne.index&&fe===""){if(Se+=te.slice(ne.index,ne.index+1),!De){const Ee=new Error(`0 width match regex (${U})`);throw Ee.languageName=U,Ee.badRule=Ot.rule,Ee}return 1}if(Ot=ne,ne.type==="begin")return Qg(ne);if(ne.type==="illegal"&&!pe){const Ee=new Error('Illegal lexeme "'+fe+'" for mode "'+(ce.scope||"<unnamed>")+'"');throw Ee.mode=ce,Ee}else if(ne.type==="end"){const Ee=ey(ne);if(Ee!==$n)return Ee}if(ne.type==="illegal"&&fe==="")return Se+=`
`,1;if(Qi>1e5&&Qi>ne.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Se+=fe,fe.length}const Sr=Kr(U);if(!Sr)throw br(Te.replace("{}",U)),new Error('Unknown language: "'+U+'"');const ny=Oe(Sr);let Zi="",ce=Ae||ny;const U2={},Ke=new z.__emitter(z);ry();let Se="",Dt=0,ln=0,Qi=0,eu=!1;try{if(Sr.__emitTokens)Sr.__emitTokens(te,Ke);else{for(ce.matcher.considerAll();;){Qi++,eu?eu=!1:ce.matcher.considerAll(),ce.matcher.lastIndex=ln;const Y=ce.matcher.exec(te);if(!Y)break;const ne=te.substring(ln,Y.index),fe=B2(ne,Y);ln=Y.index+fe}B2(te.substring(ln))}return Ke.finalize(),Zi=Ke.toHTML(),{language:U,value:Zi,relevance:Dt,illegal:!1,_emitter:Ke,_top:ce}}catch(Y){if(Y.message&&Y.message.includes("Illegal"))return{language:U,value:cn(te),illegal:!0,relevance:0,_illegalBy:{message:Y.message,index:ln,context:te.slice(ln-100,ln+100),mode:Y.mode,resultSoFar:Zi},_emitter:Ke};if(De)return{language:U,value:cn(te),illegal:!1,relevance:0,errorRaised:Y,_emitter:Ke,_top:ce};throw Y}}function ji(U){const te={value:cn(U),illegal:!1,relevance:0,_top:Q,_emitter:new z.__emitter(z)};return te._emitter.addText(U),te}function zi(U,te){te=te||z.languages||Object.keys(T);const pe=ji(U),Ae=te.filter(Kr).filter(T2).map(ar=>Zn(ar,U,!1));Ae.unshift(pe);const xe=Ae.sort((ar,Ar)=>{if(ar.relevance!==Ar.relevance)return Ar.relevance-ar.relevance;if(ar.language&&Ar.language){if(Kr(ar.language).supersetOf===Ar.language)return 1;if(Kr(Ar.language).supersetOf===ar.language)return-1}return 0}),[gr,jr]=xe,Ft=gr;return Ft.secondBest=jr,Ft}function Bg(U,te,pe){const Ae=te&&X[te]||pe;U.classList.add("hljs"),U.classList.add(`language-${Ae}`)}function Ji(U){let te=null;const pe=Be(U);if(oe(pe))return;if(Nt("before:highlightElement",{el:U,language:pe}),U.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",U);return}if(U.children.length>0&&(z.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(U)),z.throwUnescapedHTML))throw new or("One of your code blocks includes unescaped HTML.",U.innerHTML);te=U;const Ae=te.textContent,xe=pe?Pe(Ae,{language:pe,ignoreIllegals:!0}):zi(Ae);U.innerHTML=xe.value,U.dataset.highlighted="yes",Bg(U,pe,xe.language),U.result={language:xe.language,re:xe.relevance,relevance:xe.relevance},xe.secondBest&&(U.secondBest={language:xe.secondBest.language,relevance:xe.secondBest.relevance}),Nt("after:highlightElement",{el:U,result:xe,text:Ae})}function Ug(U){z=En(z,U)}const Wg=()=>{Mt(),Hr("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Gg(){Mt(),Hr("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let O2=!1;function Mt(){function U(){Mt()}if(document.readyState==="loading"){O2||window.addEventListener("DOMContentLoaded",U,!1),O2=!0;return}document.querySelectorAll(z.cssSelector).forEach(Ji)}function Vg(U,te){let pe=null;try{pe=te(I)}catch(Ae){if(br("Language definition for '{}' could not be registered.".replace("{}",U)),De)br(Ae);else throw Ae;pe=Q}pe.name||(pe.name=U),T[U]=pe,pe.rawDefinition=te.bind(null,I),pe.aliases&&D2(pe.aliases,{languageName:U})}function Xg(U){delete T[U];for(const te of Object.keys(X))X[te]===U&&delete X[te]}function Yg(){return Object.keys(T)}function Kr(U){return U=(U||"").toLowerCase(),T[U]||T[X[U]]}function D2(U,{languageName:te}){typeof U=="string"&&(U=[U]),U.forEach(pe=>{X[pe.toLowerCase()]=te})}function T2(U){const te=Kr(U);return te&&!te.disableAutodetect}function Kg(U){U["before:highlightBlock"]&&!U["before:highlightElement"]&&(U["before:highlightElement"]=te=>{U["before:highlightBlock"](Object.assign({block:te.el},te))}),U["after:highlightBlock"]&&!U["after:highlightElement"]&&(U["after:highlightElement"]=te=>{U["after:highlightBlock"](Object.assign({block:te.el},te))})}function jg(U){Kg(U),ae.push(U)}function zg(U){const te=ae.indexOf(U);te!==-1&&ae.splice(te,1)}function Nt(U,te){const pe=U;ae.forEach(function(Ae){Ae[pe]&&Ae[pe](te)})}function Jg(U){return Hr("10.7.0","highlightBlock will be removed entirely in v12.0"),Hr("10.7.0","Please use highlightElement now."),Ji(U)}Object.assign(I,{highlight:Pe,highlightAuto:zi,highlightAll:Mt,highlightElement:Ji,highlightBlock:Jg,configure:Ug,initHighlighting:Wg,initHighlightingOnLoad:Gg,registerLanguage:Vg,unregisterLanguage:Xg,listLanguages:Yg,getLanguage:Kr,registerAliases:D2,autoDetection:T2,inherit:En,addPlugin:jg,removePlugin:zg}),I.debugMode=function(){De=!1},I.safeMode=function(){De=!0},I.versionString=_r,I.regex={concat:v,lookahead:d,either:b,optional:p,anyNumberOfTimes:h};for(const U in le)typeof le[U]=="object"&&r(le[U]);return Object.assign(I,le),I},wn=F2({});return wn.newInstance=()=>F2({}),x1=wn,wn.HighlightJS=wn,wn.default=wn,x1}var uN=iN();const b9=Nr(uN);function oN(r){const e=r.regex,n=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),t=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:t,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},c={className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},l={begin:/\{\{/,relevance:0},f={className:"string",contains:[r.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[r.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[r.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[r.BACKSLASH_ESCAPE,c,l,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[r.BACKSLASH_ESCAPE,c,l,s]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[r.BACKSLASH_ESCAPE,l,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[r.BACKSLASH_ESCAPE,l,s]},r.APOS_STRING_MODE,r.QUOTE_STRING_MODE]},d="[0-9](_?[0-9])*",h=`(\\b(${d}))?\\.(${d})|\\b(${d})\\.`,p=`\\b|${t.join("|")}`,v={className:"number",relevance:0,variants:[{begin:`(\\b(${d})|(${h}))[eE][+-]?(${d})[jJ]?(?=${p})`},{begin:`(${h})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${p})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${p})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${p})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${p})`},{begin:`\\b(${d})[jJ](?=${p})`}]},m={className:"comment",begin:e.lookahead(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},b={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",c,v,f,r.HASH_COMMENT_MODE]}]};return s.contains=[f,v,c],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:a,illegal:/(<\/|\?)|=>/,contains:[c,v,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},f,m,r.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,n],scope:{1:"keyword",3:"title.function"},contains:[b]},{variants:[{match:[/\bclass/,/\s+/,n,/\s*/,/\(\s*/,n,/\s*\)/]},{match:[/\bclass/,/\s+/,n]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[v,b,f]}]}}b9.registerLanguage("python",oN);const fb=b9,db=new lr({html:!1,linkify:!0,breaks:!0}),_9="payload-modal-backdrop";function aN(r){const e=r.trial_metadata;return!e||e.length===0?!1:e.some(n=>n.reasoning&&Object.keys(n.reasoning).length>0||n.misc||n.agent_code||n.source_code)}function sN(r,e){Xt();const n=r.trial_metadata;if(!n||n.length===0)return;const t=document.createElement("div");t.id=_9,t.className="payload-backdrop";const i=document.createElement("div");i.className="payload-modal";const u=document.createElement("button");u.className="payload-close-btn",u.textContent="×",u.title="Close (Esc)",u.addEventListener("click",Xt),i.appendChild(u);const o=document.createElement("h2");o.className="payload-header",o.textContent=`${r.label} — payload`,i.appendChild(o);const a=document.createElement("div");if(a.className="payload-content",n.length>1){const c=document.createElement("div");c.className="payload-trial-tabs";for(let s=0;s<n.length;s++){const l=document.createElement("button");l.className="payload-trial-tab"+(s===0?" active":""),l.dataset.trial=String(s),l.textContent=`Trial ${s+1}`,l.addEventListener("click",()=>{for(const f of c.querySelectorAll(".payload-trial-tab"))f.classList.toggle("active",f===l);pb(a,n[s],e)}),c.appendChild(l)}i.appendChild(c)}i.appendChild(a),pb(a,n[0],e),t.appendChild(i),document.body.appendChild(t),document.addEventListener("keydown",g9),t.addEventListener("click",c=>{c.target===t&&Xt()})}function Xt(){const r=document.getElementById(_9);r&&(r.remove(),document.removeEventListener("keydown",g9))}function g9(r){r.key==="Escape"&&Xt()}function pb(r,e,n){if(r.innerHTML="",e.reasoning&&Object.keys(e.reasoning).length>0){const t=Qn("Reasoning",!0),i=m9(e.reasoning,n);for(const u of i){const o=e.reasoning[u],a=Qn(u,!0);a.querySelector(".payload-detail-body").appendChild(hb(o)),t.querySelector(".payload-detail-body").appendChild(a)}r.appendChild(t)}if(e.misc){const t=Qn("Misc",!0);t.querySelector(".payload-detail-body").appendChild(hb(e.misc)),r.appendChild(t)}if(e.agent_code){const t=Qn("Agent Code",!1);t.querySelector(".payload-detail-body").appendChild(vb(e.agent_code)),r.appendChild(t)}if(e.source_code){const t=Qn("Source Code (full)",!1);t.querySelector(".payload-detail-body").appendChild(vb(e.source_code)),r.appendChild(t)}}function Qn(r,e){const n=document.createElement("details");n.className="payload-detail",e&&(n.open=!0);const t=document.createElement("summary");t.className="payload-summary",t.textContent=r,n.appendChild(t);const i=document.createElement("div");return i.className="payload-detail-body",n.appendChild(i),n}function hb(r){if(db)try{const n=document.createElement("div");return n.className="payload-md",n.innerHTML=db.render(r),n}catch{}const e=document.createElement("pre");return e.className="payload-pre-fallback",e.textContent=r,e}function vb(r){const e=document.createElement("pre");e.className="payload-code";const n=document.createElement("code");if(fb)try{return n.innerHTML=fb.highlight(r,{language:"python"}).value,e.appendChild(n),e}catch{}return n.textContent=r,e.appendChild(n),e}const cN=.5,lN=3,mb=new WeakMap,bb=new WeakMap;function Gr(r,e){var l;if(mb.set(r,e),(l=r.parentElement)!=null&&l.classList.contains("resizable-canvas-wrapper"))return;const n=r.width,t=r.height;bb.set(r,{w:n,h:t});const i=document.createElement("div");i.className="resizable-canvas-wrapper",r.parentElement.insertBefore(i,r),i.appendChild(r);const u=document.createElement("div");u.className="resizable-canvas-handle",i.appendChild(u),i.style.width=`${n}px`;let o=!1,a=0,c=n;u.addEventListener("pointerdown",f=>{var d;o=!0,a=f.clientX,c=r.width,(d=u.setPointerCapture)==null||d.call(u,f.pointerId),f.preventDefault()}),u.addEventListener("pointermove",f=>{var b;if(!o)return;const d=bb.get(r)??{w:n,h:t},h=f.clientX-a,p=Math.max(d.w*cN,Math.min(d.w*lN,c+h)),v=p/d.w,m=Math.round(d.h*v);r.width=Math.round(p),r.height=m,i.style.width=`${r.width}px`,(b=mb.get(r))==null||b()});const s=()=>{o=!1};u.addEventListener("pointerup",s),u.addEventListener("lostpointercapture",s)}function pt(r,e,n,t){return`<div class="result-main">mean ≈ <span class="hl">${Me(r.mean,e,n,t)}</span>, median ≈ <span class="hl">${Me(r.median,e,n,t)}</span></div><div class="result-detail">90% interval: [${Me(r.p5,e,n,t)}, ${Me(r.p95,e,n,t)}]</div>`}function fN(r,e,n){return{valueHtml:`mean <span class="derived-value">${Me(r.mean,e,n,"monte-carlo")}</span>, median <span class="derived-value">${Me(r.median,e,n,"monte-carlo")}</span>`,detailHtml:`<span class="derived-detail">· 90% interval [${Me(r.p5,e,n,"monte-carlo")}, ${Me(r.p95,e,n,"monte-carlo")}]</span>`}}const Zd="Your beliefs specification yields infinite or undefined values. Consider using non-zero numbers.",fi="from point estimates";function yr(r){return r.some(Number.isNaN)?"undefined":r.some(e=>!Number.isFinite(e))?"infinite":null}function di(){return`<p class="arg-warning">${Zd}</p>`}function Qd(r,e,n,t){return`${Me(r,n,t)} – ${Me(e,n,t)}`}function dN(r,e,n,t){const i=(r+e)/2;return Number.isNaN(i)?"undefined":Me(i,n,t)}function pi({labelHtml:r,value:e,typeHighlevel:n,statsDisplay:t,labelPrefix:i="",detail:u}){const o=yr([e]);if(o==="undefined")throw new Error(Zd);return`<div class="result-main">${se(i)}${r} = <span class="hl">${Me(e,n,t)}</span></div>`+(u===void 0?"":`<div class="result-detail">${se(u)}</div>`)+(o==="infinite"?di():"")}function e2({labelHtml:r,lo:e,hi:n,typeHighlevel:t,statsDisplay:i,midpointDetailSuffix:u=""}){if(e>n)throw new Error(`Invalid calculated bounds: lo=${e} is greater than hi=${n}`);const o=yr([e,n]);if(o==="undefined")throw new Error(Zd);return`<div class="result-main">${r} ∈ [<span class="hl">${Me(e,t,i)}</span>, <span class="hl">${Me(n,t,i)}</span>]</div><div class="result-detail">midpoint: ${dN(e,n,t,i)}${se(u)}</div>`+(o==="infinite"?di():"")}function ht(r,e){if(typeof r!="number"||Number.isNaN(r))throw new Error(`${e}: expected a number, got ${JSON.stringify(r)}`);return r}function td(r,e){if(!Array.isArray(r)||r.length!==2)throw new Error(`${e}: expected [lo, hi], got ${JSON.stringify(r)}`);const n=ht(r[0],`${e} lo`),t=ht(r[1],`${e} hi`);if(n>t)throw new Error(`${e}: lo=${n} is greater than hi=${t}`);return[n,t]}function y9(r,e){return ht(r.point[e],`Code result point data for ${JSON.stringify(e)}`)}function E9(r,e){return td(r.bounds[e],`Code result bounds data for ${JSON.stringify(e)}`)}function $9(r,e,n){var u;const t=(u=r.compform_point_val)==null?void 0:u[e];if(t!==void 0)return ht(t,`Code result computed point value for ${e}`);if(!n)throw new Error(`Code result has no computed point value or form implementation for ${e}`);const i=n.params.map(o=>y9(r,o));return ht(n.point(i),`Directly evaluated code result point value for ${e}`)}function w9(r,e,n){var o;const t=(o=r.compform_bounds_val)==null?void 0:o[e];if(t!==void 0)return td(t,`Code result computed bounds value for ${e}`);if(!n)throw new Error(`Code result has no computed bounds value or form implementation for ${e}`);const i=n.params.map(a=>E9(r,a)),u=n.bounds(i);return td([u.lo,u.hi],`Directly evaluated code result bounds value for ${e}`)}const A9=[{name:"low",abbreviation:"L"},{name:"medium",abbreviation:"M"},{name:"high",abbreviation:"H"}],Yt=[...A9,{name:"xhigh",abbreviation:"XH"},{name:"max",abbreviation:"MAX"}],S9=[{model:"haiku",abbreviation:"h",efforts:A9},{model:"sonnet",abbreviation:"s",efforts:Yt},{model:"opus",abbreviation:"o",efforts:Yt},{model:"fable",abbreviation:"f",efforts:Yt}],_b=S9.flatMap(({model:r,efforts:e})=>e.map(({name:n})=>`${r}:${n}`)),pN=Object.fromEntries(S9.flatMap(({model:r,abbreviation:e,efforts:n})=>n.map(({name:t,abbreviation:i})=>[`${r}:${t}`,`${e}${i}`]))),hN=Object.fromEntries(Yt.map(({name:r,abbreviation:e})=>[r,e])),R9=":";function r2(r,e){if(e===null)throw new Error(`makeModelEffortKey: null effort not supported (model=${r}). Non-reasoning models cannot participate in the model/effort sweep.`);return`${r}${R9}${e}`}function n2(r){const e=r.indexOf(R9);if(e<=0||e===r.length-1)throw new Error(`parseModelEffortKey: invalid key ${JSON.stringify(r)}`);return{model:r.slice(0,e),effort:r.slice(e+1)}}function vN(r){const{model:e,effort:n}=n2(r);return`${e} ${n}`}function mN(r){const e=pN[r];if(e===void 0)throw new Error(`modelEffortPlotLabel: no abbreviation for ${JSON.stringify(r)}. Add it to MODEL_EFFORT_PLOT_LABEL in model_effort_plot_support.ts.`);return e}function bN(r){const{effort:e}=n2(r),n=hN[e];if(n===void 0)throw new Error(`effortPlotLabel: no abbreviation for effort ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_effort_plot_support.ts.`);return n}function _N(r){const e=new Map;for(let t=0;t<_b.length;t++)e.set(_b[t],t);const n=[];for(const t of r){if(!e.has(t))throw new Error(`sortModelEffortKeys: unknown key ${JSON.stringify(t)}. Add it to MODEL_EFFORT_CANONICAL_ORDER in model_effort_plot_support.ts.`);n.push(t)}return n.sort((t,i)=>e.get(t)-e.get(i)),n}const gb=[0,.3,.5,"subject"],gN=5;function yN(r){return r.startsWith("form:")?r.slice(5):r}function k9(r,e){return r.form.map(n=>{const t=(e==null?void 0:e[n.id])??null;return{kind:"formula",id:n.id,bareId:yN(n.id),typeHighlevel:(t==null?void 0:t.typeHighlevel)??n.type_highlevel,isConclusion:n.id===r.config.conclusion_form,formEntry:t}})}function L9(r){return r.svar_entries().map(({bareName:e,decl:n})=>({kind:"raw_response",bareName:e,typeHighlevel:n.type_highlevel,isConclusion:!1,isNoncompute:bt(n)}))}function EN(r,e,n){const t=k9(r,n),i=L9(r);if(e.ui.codePlotTargetKind==="raw_response"&&i.length>0)return i.find(a=>a.bareName===e.ui.codePlotRawResponseName)??i[0];if(t.length===0)return i[0]??null;const o=e.ui.codePlotFormulaId||r.config.conclusion_form;return t.find(a=>a.id===o)??t.find(a=>a.id===r.config.conclusion_form)??t[0]}function $N(r){var e,n;if(r.kind==="raw_response"){if(r.isNoncompute)throw new Error(`Cannot build a distribution evaluator for point-only response ${r.bareName}`);return{key:`raw_response:${r.bareName}`,paramKeys:[r.bareName],combine:([t])=>t,rhoRelevant:!1}}return{key:r.id,paramKeys:((e=r.formEntry)==null?void 0:e.params)??null,combine:((n=r.formEntry)==null?void 0:n.point)??null,rhoRelevant:r.formEntry?r.formEntry.params.length>1:r.isConclusion}}function C9(r,e){if(e.paramKeys===null||e.combine===null){const n=r.kind==="formula"?r.id:r.bareName;throw new Error(`Distribution view for ${n} requires its generated form implementation`)}return{paramKeys:e.paramKeys,combine:e.combine}}function t2(r,e){return e.kind==="raw_response"?y9(r,e.bareName):$9(r,e.id,e.formEntry)}function wN(r,e){return e.kind==="raw_response"?E9(r,e.bareName):w9(r,e.id,e.formEntry)}function AN(r){if(r.length===0)return null;const e=[...r].sort((i,u)=>i-u),n=i=>{const u=Math.min(e.length-1,Math.max(0,Math.round(i*(e.length-1))));return e[u]},t=r.reduce((i,u)=>i+u,0)/r.length;return{count:r.length,mean:t,median:n(.5),p5:n(.05),p95:n(.95)}}function Xi(r,e){return AN(r.trials.map(n=>t2(n,e)))}function tr(r,e){for(const n of r.cparam_combos){let t=!0;for(const i of r.cparam_names)if(n.cparams[i]!==e[i]){t=!1;break}if(t)return n}return null}function i2(r,e,n){const t=new Set;for(const i of r.cparam_combos){const u=i.cparams[e];u!==void 0&&t.add(u)}return!n||typeof n=="string"?Array.from(t).sort((i,u)=>Number(i)-Number(u)):n.filter(i=>typeof i!="boolean"&&t.has(i))}function I9(r,e){let n=0;for(const t of r)e[t]===!1&&n++;return n}function SN(r,e){return r.filter(n=>e[n]===!1)}function q9(r){return String(r)}function M9(r,e,n){return e.kind==="formula"&&e.isConclusion?r.precomputed[q9(n)]:void 0}function N9(r,e,n,t,i,u){const{paramKeys:o,combine:a}=C9(e,n);for(const c of r.trials){const s=o.filter(l=>!ti(c.sample[l]));if(s.length>0)throw new Error(`Code distribution MC for ${n.key}: a trial lacks sample data for parameter(s) ${JSON.stringify(s)}`)}return Pi(["code-sample-target",n.key,o,r.trials.map(c=>({sample:o.map(s=>c.sample[s]??null),rho:c.rho})),o.map(c=>t[c]??null),i,u],()=>N7(r.trials,o,t,a,i,u))}function yb(r,e,n,t,i,u){return M9(r,e,i)??N9(r,e,n,t,i,u)}function RN(r){if(r===void 0||r==="probability")return[0,1]}function kN(r){return r==="probability"?[0,1]:void 0}function Gn(r,e,n,t){const i=e.ui.cparamValues[r];if(i!==void 0&&t.includes(i))return i;if((n==null?void 0:n.default_value)!==void 0){const u=n.default_value;if(t.includes(u))return u}return t[0]}function LN(r,e,n,t){const i=o2(r,e,t.ui.modelEffortSweepScope);if(F9(i).length>=2&&!t.ui.modelEffortPinned||I9(r.cparam_names,t.ui.cparamPinned)>0)return null;const a={};for(const c of r.cparam_names){const s=n.find_cparam(c),l=i2(r,c,s==null?void 0:s.allowed_values);a[c]=Gn(c,t,s,l)}return tr(r,a)}const CN="model × effort",IN="effort";function Yi(r){return r==="effort"?IN:CN}function Vn(r,e){return e==="effort"?bN(r):mN(r)}function u2(r,e){return r.aggregate==="model_size__version"?{model:r.model,version:r.version,contentHash:r.content_hash}:e!==null&&r.model===e.model&&r.version===e.version&&r.content_hash===e.contentHash?e:null}function o2(r,e,n){const t=e.filter(u=>u.effort!==null&&u.content_hash===r.content_hash),i=u2(r,n);return i===null?t:t.filter(u=>u.model===i.model&&u.version===i.version)}function F9(r){const e=new Set;for(const n of r)n.effort!==null&&e.add(r2(n.model,n.effort));return _N(e)}function Lt(r,e){for(const n of r)if(n.effort!==null&&r2(n.model,n.effort)===e)return n;return null}function qN(r){if(r.length===0)return;const e=r[0].cparam_names;for(let n=1;n<r.length;n++){const t=r[n].cparam_names;if(t.length!==e.length||!t.every((u,o)=>u===e[o]))throw new Error(`validateRecsCparamCompat: incompatible cparam_names: ${JSON.stringify(e)} vs ${JSON.stringify(t)}. Cannot sweep across model/effort with mismatched cparam shapes.`)}}function MN(r,e,n,t,i,u,o,a,c){const s=n.map(String);if(u==="average"){const d=[];for(let h=0;h<n.length;h++){const p={...t,[e]:n[h]},v=tr(r,p);if(!v)continue;const m=c?c(v):v.precomputed[i];m&&d.push({x:h,y:m.mean})}return{series:[{points:d,label:"avg"}],xLabels:s}}if(!o||!a)throw new Error("extractSweepLineSeries separate mode requires combine and paramKeys");const l=r.count,f=[];for(let d=0;d<l;d++){const h=[];for(let p=0;p<n.length;p++){const v={...t,[e]:n[p]},m=tr(r,v);if(!m||!m.trials[d])continue;const b=m.trials[d],g=o(a.map(y=>b.point[y]));h.push({x:p,y:g})}f.push({points:h,label:`trial ${d+1}`})}return{series:f,xLabels:s}}function NN(r,e,n,t,i,u,o,a){const c=n.map(String),s=i.map(String),l=[];for(let f=0;f<i.length;f++){const d=[];for(let h=0;h<n.length;h++){const p={...u,[e]:n[h],[t]:i[f]},v=tr(r,p);if(!v){d.push(null);continue}const m=a?a(v):v.precomputed[o];d.push((m==null?void 0:m.mean)??null)}l.push(d)}return{cells:l,xLabels:c,yLabels:s,xAxisLabel:e,yAxisLabel:t}}function FN(r,e,n,t,i,u){const o=n.map(String);if(i==="average"){const c=[];for(let s=0;s<n.length;s++){const l={...t,[e]:n[s]},f=tr(r,l);if(!f)continue;const d=Xi(f,u);d&&c.push({x:s,y:d.mean})}return{series:[{points:c,label:"avg"}],xLabels:o}}const a=[];for(let c=0;c<r.count;c++){const s=[];for(let l=0;l<n.length;l++){const f={...t,[e]:n[l]},d=tr(r,f),h=d==null?void 0:d.trials[c];if(!h)continue;const p=t2(h,u);s.push({x:l,y:p})}a.push({points:s,label:`trial ${c+1}`})}return{series:a,xLabels:o}}function ON(r,e,n,t,i,u,o){const a=n.map(String),c=i.map(String),s=[];for(let l=0;l<i.length;l++){const f=[];for(let d=0;d<n.length;d++){const h={...u,[e]:n[d],[t]:i[l]},p=tr(r,h),v=p?Xi(p,o):null;f.push((v==null?void 0:v.mean)??null)}s.push(f)}return{cells:s,xLabels:a,yLabels:c,xAxisLabel:e,yAxisLabel:t}}function DN(r,e,n,t,i="model_effort",u){const o=e.map(c=>Vn(c,i)),a=[];for(let c=0;c<e.length;c++){const s=Lt(r,e[c]);if(!s)continue;const l=tr(s,n);if(!l)continue;const f=u?u(l):l.precomputed[t];f&&a.push({x:c,y:f.mean})}return{series:[{points:a,label:"avg"}],xLabels:o}}function TN(r,e,n,t,i,u,o="model_effort",a){const c=t.map(String),s=e.map(f=>Vn(f,o)),l=[];for(let f=0;f<e.length;f++){const d=[],h=Lt(r,e[f]);for(let p=0;p<t.length;p++){if(!h){d.push(null);continue}const v={...i,[n]:t[p]},m=tr(h,v);if(!m){d.push(null);continue}const b=a?a(m):m.precomputed[u];d.push((b==null?void 0:b.mean)??null)}l.push(d)}return{cells:l,xLabels:c,yLabels:s,xAxisLabel:n,yAxisLabel:Yi(o)}}function PN(r,e,n,t,i="model_effort"){const u=e.map(a=>Vn(a,i)),o=[];for(let a=0;a<e.length;a++){const c=Lt(r,e[a]);if(!c)continue;const s=tr(c,n);if(!s)continue;const l=Xi(s,t);l&&o.push({x:a,y:l.mean})}return{series:[{points:o,label:"avg"}],xLabels:u}}function HN(r,e,n,t,i,u,o="model_effort"){const a=t.map(String),c=e.map(l=>Vn(l,o)),s=[];for(let l=0;l<e.length;l++){const f=[],d=Lt(r,e[l]);for(let h=0;h<t.length;h++){if(!d){f.push(null);continue}const p={...i,[n]:t[h]},v=tr(d,p),m=v?Xi(v,u):null;f.push((m==null?void 0:m.mean)??null)}s.push(f)}return{cells:s,xLabels:a,yLabels:c,xAxisLabel:n,yAxisLabel:Yi(o)}}function xN(r){return r==="subject"?"subject ρ":`ρ = ${r}`}function Eb(r,e){return e?xN(r):"independent"}function Xn(r,e){if(!e)return"";let n='<div class="rho-selector code-rho-selector"><label>ρ (correlation):</label>';for(const i of gb){const u=r===i,o=i==="subject"?"subject":String(i);n+=`<button class="rho-btn code-rho-btn${u?" active":""}" data-rho="${i}">${o}</button>`}const t=typeof r=="number"&&!gb.includes(r);return n+="<span>custom:</span>",n+=`<input class="rho-custom-input code-rho-custom" type="text" value="${t?r:""}" placeholder="0–1">`,n+="</div>",n}function BN(r,e,n,t){var l;const i=k9(r,t),u=L9(r);if(i.length===0&&u.length===0)return"";const o=(n==null?void 0:n.kind)??"formula",a=(n==null?void 0:n.kind)==="formula"?n.id:e.ui.codePlotFormulaId||r.config.conclusion_form,c=(n==null?void 0:n.kind)==="raw_response"?n.bareName:e.ui.codePlotRawResponseName||(((l=u[0])==null?void 0:l.bareName)??"");let s='<div class="code-plot-target-controls">';if(s+='<div class="code-plot-target-kind">',s+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="formula"${o==="formula"?" checked":""}${i.length===0?" disabled":""}> formulas</label>`,s+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="raw_response"${o==="raw_response"?" checked":""}${u.length===0?" disabled":""}> raw responses</label>`,s+="</div>",o==="formula")if(i.length>1){s+='<select class="code-plot-formula-select" aria-label="Plot formula">';for(const f of i)s+=`<option value="${He(f.id)}"${f.id===a?" selected":""}>${se(f.bareId)}</option>`;s+="</select>"}else i.length===1&&(s+=`<span class="code-plot-target-single">${se(i[0].bareId)}</span>`);else if(u.length>1){s+='<select class="code-plot-raw-response-select" aria-label="Plot raw response">';for(const f of u)s+=`<option value="${He(f.bareName)}"${f.bareName===c?" selected":""}>${se(f.bareName)}</option>`;s+="</select>"}else u.length===1&&(s+=`<span class="code-plot-target-single">${se(u[0].bareName)}</span>`);return s+="</div>",s}function O9(r,e,n,t,i,u,o){if(!i||!u)return"";const a={};for(const c of r.cparam_names){const s=t.find_cparam(c),l=n.get(c)??[];if(l.length===0)return"";const f=Gn(c,e,s,l),d=Number(f);if(!Number.isFinite(d))return"";a[c]=d}return i(a)?"":`<p class="arg-warning">${o(u)}</p>`}function D9(r,e,n,t){const i=n===null?[null,...e]:e,u=n===null?0:i.indexOf(n),o=n===null?r.label:t==="effort"?n2(n).effort:vN(n);return{sliderKeys:i,meIdx:u,currentLabel:o}}function UN(r,e,n,t,i,u,o,a,c,s,l,f,d){const h=O9(e,t,i,n,l,f,d);let p=BN(n,t,c,s);if(p+=h+'<div class="cparam-controls">',u.length>=2){const{sliderKeys:v,meIdx:m,currentLabel:b}=D9(e,u,o,a),g=t.ui.modelEffortPinned;p+='<div class="cparam-row model-effort-row">',p+=`<label class="cparam-label">${a==="effort"?"Effort":"Model × Effort"}</label>`,p+='<input type="range" class="model-effort-slider" ',p+=`min="0" max="${v.length-1}" step="1" value="${m>=0?m:0}" `,p+=`data-keys='${JSON.stringify(v)}'>`,p+=`<span class="cparam-value-label">${se(b)}</span>`,p+='<label class="cparam-pin-label"><input type="checkbox" class="model-effort-pin-checkbox"',p+=`${g?" checked":""}> pin</label>`,p+="</div>"}for(const v of e.cparam_names){const m=n.find_cparam(v),b=i.get(v)??[];if(b.length===0)continue;const g=Gn(v,t,m,b),y=b.indexOf(g),_=t.ui.cparamPinned[v]!==!1,$=(m==null?void 0:m.longname)??v;p+='<div class="cparam-row">',p+=`<label class="cparam-label">${se($)}</label>`,p+=`<input type="range" class="cparam-slider" data-cparam="${v}" `,p+=`min="0" max="${b.length-1}" step="1" value="${y>=0?y:0}" `,p+=`data-values='${JSON.stringify(b)}'>`,p+=`<span class="cparam-value-label">${g}</span>`,p+='<label class="cparam-pin-label"><input type="checkbox" class="cparam-pin-checkbox" ',p+=`data-cparam="${v}"${_?" checked":""}> pin</label>`,p+="</div>"}p+="</div>",r.innerHTML=p}function Ut(r){return console.warn(`code viewer controls sync: ${r}; falling back to a full controls rebuild`),!1}function WN(r,e,n,t,i,u,o,a,c,s,l){const f=r.querySelector(".cparam-controls");if(!f)return Ut("no existing .cparam-controls block");const d=O9(e,t,i,n,c,s,l),h=r.querySelector(":scope > .arg-warning");d===""?h==null||h.remove():h?h.outerHTML=d:f.insertAdjacentHTML("beforebegin",d);const p=f.querySelector(".model-effort-row");if(u.length>=2!==(p!==null))return Ut("model/effort row does not match the current sweep structure");if(p){const{meIdx:m,currentLabel:b}=D9(e,u,o,a),g=p.querySelector(".model-effort-slider"),y=p.querySelector(".cparam-value-label"),_=p.querySelector(".model-effort-pin-checkbox");if(!g||!y||!_)return Ut("model/effort row is missing expected controls");g.value=String(m>=0?m:0),y.textContent=b,_.checked=t.ui.modelEffortPinned}for(const m of e.cparam_names){const b=i.get(m)??[];if(b.length===0)continue;const g=n.find_cparam(m),y=Gn(m,t,g,b),_=b.indexOf(y),$=f.querySelector(`.cparam-slider[data-cparam="${m}"]`),L=$==null?void 0:$.closest(".cparam-row"),S=L==null?void 0:L.querySelector(".cparam-value-label"),q=L==null?void 0:L.querySelector(".cparam-pin-checkbox");if(!$||!S||!q)return Ut(`cparam row for ${m} is missing expected controls`);$.value=String(_>=0?_:0),S.textContent=String(y),q.checked=t.ui.cparamPinned[m]!==!1}return!0}function GN(r){return`<div class="sweep-mode-toggle"><button class="sweep-mode-btn${r==="average"?" active":""}" data-sweep-mode="average">Average</button><button class="sweep-mode-btn${r==="separate"?" active":""}" data-sweep-mode="separate">Separate</button></div>`}const a2='<div class="code-info">No data for this parameter combination.</div>';function s2(r,e,n){if(r.kind==="formula"&&r.isConclusion)return Un(e,n);let t,i;if(r.kind==="raw_response")t=`svar:${r.bareName}`,i=r.bareName;else{const o=e.form.find(a=>a.id===r.id);if(!o)throw new Error(`Code plot formula ${r.id} is not in the template`);t=r_(r.id,o.sexpr),i=r.bareId}const u=n_(t);return ke(e.get_display_expr(u)??i,n)}function VN(r,e,n,t,i,u,o){const a=tr(e,n);if(!a){r.innerHTML=a2;return}if(!t){r.innerHTML='<div class="code-info">No point plot target is available.</div>';return}if(a.trials.length===0)throw new Error("Code point result has no trials for the selected parameter combination");const c=a.trials.map(d=>t2(d,t)),s=c.reduce((d,h)=>d+h,0)/c.length,l=t.typeHighlevel,f=c.length===1?fi:`per trial: ${c.map(d=>Me(d,l,o.ui.probAsOdds)).join(", ")}`;r.innerHTML=pi({labelHtml:s2(t,i,u),value:s,typeHighlevel:l,statsDisplay:o.ui.probAsOdds,labelPrefix:c.length===1?"":"mean ",detail:f})}function XN(r,e,n,t,i,u,o){const a=tr(e,n);if(!a){r.innerHTML=a2;return}if(!t){r.innerHTML='<div class="code-info">No bounds plot target is available.</div>';return}if(t.kind==="raw_response"&&t.isNoncompute){r.innerHTML='<div class="code-info">Bounds view is not supported for a point-only response target.</div>';return}if(!bd(e)||a.trials.length!==1)throw new Error(`Code bounds display requires one trial; record count=${e.count}, selected combo trials=${a.trials.length}`);const[c,s]=wN(a.trials[0],t);r.innerHTML=e2({labelHtml:s2(t,i,u),lo:c,hi:s,typeHighlevel:t.typeHighlevel,statsDisplay:o.ui.probAsOdds})}function $b(r,e,n,t,i,u,o,a,c,s,l){T9(r,e,n,t,i,u,o,a,c,s,l,!1)}function wb(r,e,n,t,i,u,o,a,c,s,l){T9(r,e,n,t,i,u,o,a,c,s,l,!0)}function T9(r,e,n,t,i,u,o,a,c,s,l,f){var ee;_d(n);const d=EN(i,o,c),h=new Map;for(const V of n.cparam_names){const x=i.find_cparam(V),K=i2(n,V,x==null?void 0:x.allowed_values);h.set(V,K)}const p=u2(n,o.ui.modelEffortSweepScope),v=o2(n,t,o.ui.modelEffortSweepScope),m=p===null?"model_effort":"effort",b=F9(v),g=b.length>=2,y=n.effort!==null?r2(n.model,n.effort):null,_=g&&!o.ui.modelEffortPinned;if(_&&qN(v),!(f&&WN(r,n,i,o,h,b,y,m,s,l,V=>ke(V,u)))){const V=document.getElementById("calculator-whose-toggle");if(V&&((ee=V.querySelector(".payload-view-btn"))==null||ee.remove(),aN(n))){const x=document.createElement("button");x.className="payload-view-btn",x.textContent="View payload",x.addEventListener("click",()=>sN(n,i.get_svar_bare_names())),V.appendChild(x)}UN(r,n,i,o,h,b,y,m,d,c,s,l,x=>ke(x,u))}const L=I9(n.cparam_names,o.ui.cparamPinned),S=SN(n.cparam_names,o.ui.cparamPinned),q=L+(_?1:0),k=o.ui.inputMode,w=o.ui.codeSweepMode,E={};for(const V of n.cparam_names)if(o.ui.cparamPinned[V]!==!1){const x=i.find_cparam(V),K=h.get(V)??[];E[V]=Gn(V,o,x,K)}const A=(d==null?void 0:d.kind)==="formula"&&d.isConclusion,R=(d==null?void 0:d.typeHighlevel)??i.config.conclusion_type_highlevel,C=A?RN(i.config.conclusion_type_highlevel):kN(R),D=R==="probability"?gN:void 0;if(k==="bounds"){q>0?e.innerHTML='<div class="code-info">Pin every axis to display code-response bounds.</div>':XN(e,n,E,d,i,u,o);return}let N=null;if(k==="sample"){if(!d){e.innerHTML='<div class="code-info">No distribution plot target is available.</div>';return}if(d.kind==="raw_response"&&d.isNoncompute){e.innerHTML='<div class="code-info">Distribution view is not supported for a point-only response target.</div>';return}N=$N(d)}const B=k==="sample"&&N!==null&&N.rhoRelevant&&i.config.rho_correlation_correction,O=B?o.ui.codeRho:0,P=q9(O),F=N===null?null:mi(i.svar_entries()),Z=N!==null&&d!==null&&F!==null?V=>yb(V,d,N,F,O,a.mcItersSweepLine):void 0,W=N!==null&&d!==null&&F!==null?V=>yb(V,d,N,F,O,a.mcItersSweepHeatmap):void 0,j=k;if(q===0)if(k==="point")VN(e,n,E,d,i,u,o);else{if(d===null||N===null||F===null)throw new Error("Sample-mode code density routing has no resolved sample target");YN(e,n,o,a,E,d,N,F,O,B)}else if(q===1)_?zN(e,v,b,E,P,O,B,D,d,j,m,Z):KN(e,n,S[0],h,E,P,w,O,B,N,D,d,j,Z);else if(q===2)if(_){const V=S[0],x=h.get(V)??[];JN(e,v,b,V,x,E,P,O,B,C,d,j,m,W)}else jN(e,n,S,h,E,P,O,B,C,d,j,W);else{const V=n.cparam_names.length-(_?1:2);e.innerHTML=`<div class="code-info"><p>Pin at least ${V} parameter${V===1?"":"s"} to visualize results.</p><p>Currently ${L} cparam${L===1?"":"s"} unpinned${_?" + model/effort axis":""}.</p></div>`+(j==="sample"?Xn(O,B):"")}B&&k==="sample"&&d!==null&&e.insertAdjacentHTML("afterbegin",x7(s2(d,i,u)))}function YN(r,e,n,t,i,u,o,a,c,s){const l=tr(e,i);if(!l){r.innerHTML=a2;return}const f=u.typeHighlevel,d=[];d.push(Xn(c,s));const h=M9(l,u,c);if(h&&d.push(`<div class="result-label">Precomputed (${Eb(c,s)}, ${l.trials.length} agent trial${l.trials.length===1?"":"s"})</div>`+pt(h,f,n.ui.probAsOdds,"monte-carlo")),o.combine===null||o.paramKeys===null){h||C9(u,o),r.innerHTML=d.join("");return}const p=N9(l,u,o,a,c,t.mcItersDensity);d.push(`<div class="result-label">Live MC (${Eb(c,s)}, n=${p.count.toLocaleString()})</div><div class="mc-row"><div class="mc-text">`+pt(p,f,n.ui.probAsOdds,"monte-carlo")+'</div><canvas id="code-density-canvas" width="400" height="200"></canvas></div>'),r.innerHTML=d.join("");const v=r.querySelector("#code-density-canvas");if(v){const m=st(f);en(v,p.samples,p.p5,p.p95,m),Gr(v,()=>en(v,p.samples,p.p5,p.p95,m))}}function KN(r,e,n,t,i,u,o,a,c,s,l,f,d,h){const p=t.get(n)??[],v=d==="sample",m=e.count>1&&!(v&&(s==null?void 0:s.combine)===null),b=m?o:"average",{series:g,xLabels:y}=v?MN(e,n,p,i,u,b,(s==null?void 0:s.combine)??void 0,(s==null?void 0:s.paramKeys)??void 0,h):f?FN(e,n,p,i,b,f):{series:[],xLabels:p.map(String)};let _=v?Xn(a,c):"";_+='<div class="code-plot-container">',_+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',m&&(_+=GN(b),b==="separate"?_+=`<div class="code-info" style="margin-top: 6px;">${v?"Separate mode uses point estimates only (no distributional MC).":"Separate mode shows per-trial point values."}</div>`:v||(_+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>')),_+="</div>",r.innerHTML=_;const $=r.querySelector("#code-line-canvas");if($){const L={xLabels:y,xAxisLabel:n,...l===void 0?{}:{yRangePaddingPercent:l}};oi($,g,L),Gr($,()=>oi($,g,L))}}function jN(r,e,n,t,i,u,o,a,c,s,l,f){const d=n[0],h=n[1],p=t.get(d)??[],v=t.get(h)??[],m=l==="sample",b=m?NN(e,d,p,h,v,i,u,f):s?ON(e,d,p,h,v,i,s):{cells:[],xLabels:p.map(String),yLabels:v.map(String),xAxisLabel:d,yAxisLabel:h};c&&(b.valueRange=c);const g=Math.max(80,Math.min(120,Math.floor(1e3/p.length))),y=Math.max(60,Math.min(90,Math.floor(800/v.length))),_=60+p.length*g+60,$=10+v.length*y+35;let L=m?Xn(o,a):"";L+='<div class="code-plot-container">',L+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${_}" height="${$}"></canvas>`,m||(L+='<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>'),L+="</div>",r.innerHTML=L;const S=r.querySelector("#code-heatmap-canvas");S&&(ai(S,b),Gr(S,()=>ai(S,b)))}function zN(r,e,n,t,i,u,o,a,c,s,l,f){const d=s==="sample",{series:h,xLabels:p}=d?DN(e,n,t,i,l,f):c?PN(e,n,t,c,l):{series:[],xLabels:n.map(b=>Vn(b,l))};let v=d?Xn(u,o):"";v+='<div class="code-plot-container">',v+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',d||(v+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>'),v+="</div>",r.innerHTML=v;const m=r.querySelector("#code-line-canvas");if(m){const b={xLabels:p,xAxisLabel:Yi(l),...a===void 0?{}:{yRangePaddingPercent:a}};oi(m,h,b),Gr(m,()=>oi(m,h,b))}}function JN(r,e,n,t,i,u,o,a,c,s,l,f,d,h){const p=f==="sample",v=p?TN(e,n,t,i,u,o,d,h):l?HN(e,n,t,i,u,l,d):{cells:[],xLabels:i.map(String),yLabels:n.map(L=>Vn(L,d)),xAxisLabel:t,yAxisLabel:Yi(d)};s&&(v.valueRange=s);const m=Math.max(80,Math.min(120,Math.floor(1e3/i.length))),b=Math.max(60,Math.min(90,Math.floor(800/n.length))),g=60+i.length*m+60,y=10+n.length*b+35;let _=p?Xn(a,c):"";_+='<div class="code-plot-container">',_+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${g}" height="${y}"></canvas>`,p||(_+='<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>'),_+="</div>",r.innerHTML=_;const $=r.querySelector("#code-heatmap-canvas");$&&(ai($,v),Gr($,()=>ai($,v)))}function ZN(r,e){if(r.length!==e.length)throw new Error(`pwlToShape: xs length ${r.length} !== ys length ${e.length}`);return{points:r.map((n,t)=>({x:n,y:e[t]}))}}const Ab=.001,Sb=101;function QN(r){const e=r.inverseCdf(Ab),n=r.inverseCdf(1-Ab);if(!(n>e))return{points:[{x:e,y:1}]};const t=[],i=[];for(let o=0;o<Sb;o++){const a=e+o/(Sb-1)*(n-e);t.push(a),i.push(r.pdf(a))}const u=Math.max(...i);if(u<=0)throw new Error("familyToShape: zero density over the display window");return{points:t.map((o,a)=>({x:o,y:i[a]/u}))}}const Br={top:4,bottom:18,left:4,right:4},eF="10px -apple-system, Helvetica, sans-serif",rF="rgba(100, 149, 237, 0.25)",Rb="#4477bb",kb=1.5;function Lb(r,e,n){const t=r.width,i=r.height,u=r.getContext("2d");if(!u)return;u.clearRect(0,0,t,i);const{points:o}=e;if(o.length===0)return;const a=t-Br.left-Br.right,c=i-Br.top-Br.bottom,s=Br.top+c,[l,f]=n;if(f<=l){const b=Br.left+a/2;Math.max(...o.map(g=>g.y))>0&&(u.beginPath(),u.moveTo(b,s),u.lineTo(b,Br.top),u.strokeStyle=Rb,u.lineWidth=kb,u.stroke()),Cb(u,[{value:l,label:l.toFixed(2)}],()=>b,s);return}const d=b=>Br.left+(b-l)/(f-l)*a,h=Math.max(...o.map(b=>b.y));if(h<=0)return;const p=b=>Br.top+c-b/h*c;u.beginPath(),u.moveTo(d(o[0].x),s);for(const b of o)u.lineTo(d(b.x),p(b.y));u.lineTo(d(o[o.length-1].x),s),u.closePath(),u.fillStyle=rF,u.fill(),u.beginPath();const v=o[0],m=o[o.length-1];v.y>0?(u.moveTo(d(v.x),s),u.lineTo(d(v.x),p(v.y))):u.moveTo(d(v.x),p(v.y));for(let b=1;b<o.length;b++)u.lineTo(d(o[b].x),p(o[b].y));m.y>0&&u.lineTo(d(m.x),s),u.strokeStyle=Rb,u.lineWidth=kb,u.stroke(),Cb(u,O7(l,f),d,s)}function Cb(r,e,n,t){r.strokeStyle="#bbb",r.lineWidth=.5,r.fillStyle="#4d4d4d",r.font=eF,r.textAlign="center";for(const i of e){const u=n(i.value);r.beginPath(),r.moveTo(u,t),r.lineTo(u,t+3),r.stroke(),r.fillText(i.label,u,t+12)}}const nF="framing-explainer-persuasive",tF="framing-explainer-nonpersuasive",iF="root",id=new Set(["meta","info","clarification","version"]),uF=14,oF=(r,e)=>`<strong>POV ${r}:</strong><span class="framing-note-content">${e}</span>`,aF=(r,e)=>`<strong>${r}:</strong><span class="framing-note-content">${e}</span>`;function P9(r){const e=r.jprobInstance.option_value_or("framing_POVs_enabled",[]);if(!Array.isArray(e)||!e.every(n=>typeof n=="string"))throw new Error("framing_POVs_enabled must be a string array, got "+JSON.stringify(e));return e}function H9(r){return r.showFramingNotes===!1?!1:!!r.jprobInstance.option_value_or("framing_enabled",!0)}function c2(r,e){const n=P9(e);return!H9(e)||!n.length?null:r.get_framing_layout(n)}function sF(r,e,n){var t;return((t=r[e])==null?void 0:t[n])??!0}function x9(r,e,n,t){const i=sF(n,t,r.note.id),u=r.children.map(p=>x9(p,e,n,t)).join(""),o=i?" visible":"",a=i?" active":"",c=uF*(r.depth-1),s=se(r.note.pov),l=Mr(r.note.srcquotes,e),f=l.atStart+ke(r.note.defn,e)+l.atEnd;let d,h;return id.has(r.note.pov)?(d=aF(s,f),h="framing-nonpersuasive"):(d=oF(s,f),h="framing-persuasive"),`<div class="framingnote${o} ${h}" style="margin-left: ${c}px" data-framing-anchor="${He(t)}" data-framing-id="${He(r.note.id)}"><div class="framing-note-summary"><button class="framing-fold-btn${a}" data-framing-anchor="${He(t)}" data-framing-id="${He(r.note.id)}" title="Toggle framing note">&plusmn;</button>`+d+"</div>"+u+"</div>"}function l2(r,e,n,t){return r.layout_nodes.map(i=>x9(i,e,n,t)).join("")}function cF(r,e,n,t){return r===void 0||r.layout_nodes.length===0?"":"<div>"+l2(r,e,n,t)+"</div>"}function lF(r,e,n){const t=c2(r,e),i=document.querySelectorAll(`.${T_}`);for(const u of i){const o=u.getAttribute(P_);if(!o)continue;const a=t==null?void 0:t.nonroot_anchor_sections.get(o);u.innerHTML=t&&a?l2(a,e,n.framingFoldState,o):""}}function fF(r,e,n,t){const i=document.getElementById("framing-notes-root-section"),u=c2(e,n),o=u===null?"":l2(u.root_section,n,t.framingFoldState,iF);if(!o){r.innerHTML="",i&&(i.hidden=!0);return}i&&(i.hidden=!1),r.innerHTML=o}function dF(r,e){const n=document.getElementById("framing-notes-explainer-section"),t=P9(e);if(!H9(e)||!t.length){r.innerHTML="",n&&(n.hidden=!0);return}const i=t.some(s=>id.has(s)),u=t.some(s=>!id.has(s)),o=ui[nF],a=ui[tF];n&&(n.hidden=!1);const c=[];u&&c.push('<div class="framing-explainer framing-persuasive">'+ke(o,e)+"</div>"),i&&c.push('<div class="framing-explainer framing-nonpersuasive">'+ke(a,e)+"</div>"),r.innerHTML=c.join("")}const B9=18,U9=80,pF=16;function hF(r,e=B9,n=U9){return W9(t=>{t.textContent=r},!1,!0,e,n)}function f2(r,e=B9,n=U9){return W9(t=>{t.innerHTML=r()},!0,!1,e,n)}function W9(r,e,n,t,i){const u=document.createElement("span");u.className="help-widget",u.style.display="inline-block";const o=document.createElement("button");o.className="help-widget-btn",o.type="button",o.textContent="?",o.setAttribute("aria-label","Help"),o.style.width=`${t}px`,o.style.height=`${t}px`,o.style.fontSize=`${Math.round(t*.6)}px`,o.style.lineHeight=`${t}px`;const a=document.createElement("div");a.className="help-widget-popover",a.hidden=!0;const c=document.createElement("button");c.className="help-widget-close",c.type="button",c.textContent="×",c.setAttribute("aria-label","Close");const s=document.createElement("div");s.className=e?"help-widget-body html-content":"help-widget-body",a.appendChild(c),a.appendChild(s),u.appendChild(o),u.appendChild(a),n&&r(s);function l(){r(s),a.hidden=!1;const d=window.innerWidth,h=window.innerHeight,p=Math.round(d*i/100),v=h-2*pF;a.style.width=`${p}px`,a.style.maxHeight=`${v}px`;const m=Math.min(a.offsetHeight,v);a.style.left=`${Math.round((d-p)/2)}px`,a.style.top=`${Math.round((h-m)/2)}px`}function f(){a.hidden=!0}return o.addEventListener("click",d=>{d.stopPropagation(),a.hidden?l():f()}),c.addEventListener("click",d=>{d.stopPropagation(),f()}),a.addEventListener("keydown",d=>{d.key==="Escape"&&(f(),o.focus())}),u.addEventListener("keydown",d=>{d.key==="Escape"&&!a.hidden&&(f(),o.focus())}),document.addEventListener("click",d=>{!a.hidden&&!u.contains(d.target)&&f()}),u}const G9=1,vF="shortcutKeys",mF=new Set(["","date","datetime-local","email","month","number","password","search","tel","text","time","url","week"]),Yn=Object.freeze([{id:"toggle_mnames",description:"Toggle longer meaning-carrying names",default_shortcut:"n",enabled:!0},{id:"goto_calculator",description:"Move to Calculator section",default_shortcut:"c",enabled:!0},{id:"goto_top",description:"Move to top of page",default_shortcut:"t",enabled:!0},{id:"toggle_srcquotes_inlined",description:"Toggle source quotes inline in the text vs. behind a glyph",default_shortcut:"q",enabled:!0},{id:"toggle_framing_notes",description:"Show/hide all framing notes",default_shortcut:"f",enabled:!0},{id:"switch_whose_mode",description:"Switch whose mode (Yours / Adhoc / AI results), restoring its last viewed preset",default_shortcut:"m",enabled:!0}]);function V9(){return Yn}function Ib(r){return Yn.find(e=>e.id===r)}function d2(r){const e=r.trim().toLowerCase();return e===""?{ok:!0,key:e}:[...e].length!==G9?{ok:!1,key:e,error:"Use a single key, or clear the field to disable this shortcut."}:{ok:!0,key:e}}function X9(r){if(!r||typeof r!="object"||Array.isArray(r))return{};const e={};for(const[n,t]of Object.entries(r)){if(typeof t!="string"){console.error(`Ignoring non-string shortcut key for ${n}.`);continue}const i=d2(t);if(!i.ok){console.error(`Ignoring invalid persisted shortcut key for ${n}: ${t}`);continue}e[n]=i.key}return e}function bF(){const r={};for(const e of Yn)r[e.id]=e.default_shortcut;return r}function Kn(){const r=X9(sr().shortcutKeys);return{...bF(),...r}}function Y9(r,e,n=Kn()){if(e==="")return null;for(const t of V9())if(t.id!==r&&n[t.id]===e)return t.id;return null}function _F(r,e){var a;if(!Ib(r))throw new Error(`Unknown shortcut id: ${r}`);const t=d2(e);if(!t.ok)return{ok:!1,key:t.key,error:t.error};const i=Kn(),u=Y9(r,t.key,{...i,[r]:t.key});if(u)return{ok:!1,key:t.key,conflictId:u,error:`Already assigned to "${((a=Ib(u))==null?void 0:a.description)??u}".`};const o=X9(sr().shortcutKeys);return o[r]=t.key,ut(vF,o),{ok:!0,key:t.key}}function gF(r){if(r.altKey||r.ctrlKey||r.metaKey)return null;const e=r.key.toLowerCase();return[...e].length!==G9?null:e}function yF(r){if(!(r instanceof HTMLElement))return!1;if(r.isContentEditable)return!0;let e=r;for(;e;){if(e.isContentEditable||e.contentEditable==="true")return!0;const n=e.getAttribute("contenteditable");if(n!==null&&n.toLowerCase()!=="false")return!0;e=e.parentElement}return r instanceof HTMLTextAreaElement?!0:r instanceof HTMLInputElement?mF.has(r.type.toLowerCase()):!1}function EF(r){const e=n=>{if(yF(n.target))return;const t=gF(n);if(t===null)return;const i=Kn();for(const u of V9()){if(i[u.id]!==t)continue;const o=r[u.id];if(!o)return;n.preventDefault(),o();return}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}function Kt(r){return r?`<b>${se(r)}</b>`:"<i>(unbound)</i>"}const $F={toggle_mnames:"toggle between short and long names for some defined entities",goto_top:"jump to top of the page",goto_calculator:"jump to the Calculator section",switch_whose_mode:"switch between <b>Yours</b> / <b>Adhoc</b> / <b>AI results</b> modes, restoring the last viewed preset in each",toggle_srcquotes_inlined:`toggle source quotes inlined in the text (mirroring what AI agents see when source quotes are enabled) vs. accessible by clicking the <button class="srcquote-glyph" type="button" tabindex="-1">❝</button> buttons. This is a view setting only — it never changes what a preset's estimator actually read`,toggle_framing_notes:"show or hide all framing notes at once, without disturbing which ones the problem itself enables"};function wF(){return"<li>When relevant (not all Adhoc / AI-results presets have all response modes), you can switch between estimation response modes <b>point</b> | <b>bounds</b> | <b>distribution</b>. For each subjective variable (the cards in the <b>Estimation</b> section) they mean:<ul><li><b>point</b>: A single real value. Use for low-effort estimation.</li><li><b>bounds</b>: A real interval given as <code>low high</code>. Use to incorporate flat uncertainty, without any sampling interpretation. The Calculator will show the extreme values of the compute formulas implied by your intervals.</li><li><b>distribution</b>: A belief distribution; Monte Carlo sampling evaluates. This is the advanced mode. The <b>settings</b> dropdown on the left side of the sticky bar has parameters for controlling the number of iterations, in case the defaults make your experience too slow. When in distribution mode, click the help icon in any Estimation card to learn what you can put in the input fields. The Calculator section has a redundant single input box for the same data; useful for copy-pasting from a read-only Adhoc or AI result.</li></ul></li>"}function AF(r){const e=Kn(),n=[];n.push(`<p>Use the ${Kt(e.switch_whose_mode)} shortcut to switch between entering your own estimations and interacting with preset responses — or, for more control, scroll down to the Calculator section (${Kt(e.goto_calculator)} shortcut) to switch between:</p><ul><li>entering your own estimations (<b>Yours</b>), and when available,</li><li>viewing adhoc prepared estimations (<b>Adhoc…</b> dropdown), or</li><li>viewing AI agent estimation trial results (<b>AI results…</b> dropdown).</li></ul>`),n.push("<h4>Sticky bar</h4><ul>"),n.push("<li>On the far right of the sticky bar, there's a dropdown for switching to a different judgement problem (hidden when there are no others).</li>"),r.config.timeline_family!==void 0&&n.push("<li>This judgement problem is part of a development timeline exposition sequence. The ◀ and/or ▶ buttons move backward and forward in the timeline.</li>"),r.has_examples()&&n.push("<li><b>open</b> unfolds all examples, <b>close</b> folds all. <b>peek</b> saves your fold state and temporarily unfolds all examples, and <b>unpeek</b> restores your fold state.</li>"),n.push(wF()),n.push("</ul>"),n.push("<h4>Keyboard shortcuts</h4><p>There are just a few, which you can customize by clicking the <b>keymap</b> button in the sticky bar's <b>settings</b> dropdown. Currently:</p>"),n.push("<ul>");for(const t of Yn){const i=$F[t.id]??se(t.description);n.push(`<li>${Kt(e[t.id])} : ${i}</li>`)}return n.push("</ul>"),n.join("")}function SF(){const r=Object.values(pn).filter(i=>!i.hasTruncWindow),e=Object.entries(pn).filter(([,i])=>i.hasTruncWindow),n=r.map(i=>`<li><code>${se(i.signature)}</code> — ${se(i.note)}</li>`),t=e.map(([i])=>`<code>${se(i)}(…)</code>`);return`<p>Enter your belief distribution over this variable in one of three forms:</p><ul><li><b>Point mass</b>: <code>pointmass(x)</code> — all probability mass at <code>x</code>.</li><li><b>Distribution family</b> (preferred when one fits your belief), e.g. <code>lognormal(-4.2, 1.3)</code>. Available families:<ul>${n.join("")}</ul>Every family is automatically truncated to the variable's allowed range and renormalized, so e.g. <code>normal(mu, sigma)</code> on a probability variable means a normal truncated to [0, 1]. The ${t.join(", ")} variants take two extra trailing arguments <code>lo, hi</code> — an explicit truncation window — for when your belief has its own truncation. Most important for a heavy-tailed family on an unbounded-range variable (e.g. a Student-t on a log-odds variable), where automatic truncation is a no-op.</li><li><b>Piecewise linear density</b> (fully general): space-separated pairs <code>(x1 y1) (x2 y2) …</code>, minimum 2. x values are sorted positions spanning your uncertainty, anywhere in the variable's allowed range; y values are unnormalized density heights in [0, 1].</li></ul>`}function RF(r,e){const n=Kn(),t=[];return t.push("<p><b>This help text changes based on Yours/Adhoc/Whose mode.</b></p>"),rE($e(e).source)&&t.push("<p>To see detailed results for an entry, click the <b>pin</b> checkbox.</p>","<p><b>CONFUSING UI NOTE</b>: when Model × Effort is unchecked, the slider does load a different record, but the changes are too far above your viewport to see them without scrolling.</p>","<p>To see AIs' plain text reasoning and notes, click <b>View payload</b>. If you do this with an <b>All AI</b> or <b>(pooled)</b> entry selected, you'll get tabs for the different trials.</p>","<p>To explore compute formula results other than the main conclusion, there's a drop down below next to the <b>formulas</b> / <b>raw responses</b> radio buttons.</p>","<p>Use the <b>stats display</b> dropdown to switch between seeing probabilities as percentages or as odds.</p>"),r.has_cparams()&&t.push("<p><b>fix</b> | <b>free</b> toggle (next to <b>Yours</b>): <b>fix</b> requires setting each parameter to one of its allowed values in the <b>Parameters</b> section, and your estimates apply to that one setting. <b>free</b> opens a code editor in which you write a function giving your estimates for every allowed parameter combination at once.</p>"),je(e)?t.push(`<p>To modify a preset, switch to Adhoc presets mode (${Kt(n.switch_whose_mode)} shortcut), select an entry from the dropdown to the right of this help icon, and find the <b>Copy to Yours</b> button.</p>`,"<p>From scratch: Suggest starting with <b>point</b> response mode, then try <b>bounds</b>. If you're experienced or courageous, try <b>distribution</b> and start with <code>tri(low, peak, hi)</code> or <code>uniform(low, high)</code> lines. For full syntax of distribution inputs accepted, find the help icon in any of <b>Estimation</b> cards above.</p>"):E_($e(e).source)&&t.push("<p>To modify this preset for your own estimation, find the <b>Copy to Yours</b> button below.</p>"),t.join("")}const kF=280,LF=110;function K9(r,e,n){if(n==="point")return String(r.point[e]??"");if(n==="bounds"){const i=r.bounds[e];return i?`${i[0]} ${i[1]}`:""}const t=r.sample[e];return t?typeof t=="string"?t:t.map(([i,u])=>`(${i} ${u})`).join(" "):""}function j9(r,e){let n=0;return r.svar_entries().map(({bareName:t,decl:i})=>{const u=bt(i);return{bareName:t,noncompute:u,cardMode:s_(i,e),inputIndex:u?-1:n++}})}function z9(r,e,n){const t=Ze(e.ui.whose,n);if(!t)return[];const{source:i}=$e(e.ui.whose);if(i==="metho-plaincode"||i==="metho-richcode"||i==="adhoc-plaincode"){const u=t,o={};for(const c of u.cparam_names){const s=r.find_cparam(c),l=i2(u,c,s==null?void 0:s.allowed_values);o[c]=Gn(c,e,s,l)}const a=tr(u,o);return a?a.trials:[]}return i==="adhoc-plainnum"||i==="metho-plainnum"?t.trials:[]}function J9(r,e){return r>0?Math.max(0,Math.min(e,r-1)):0}function Z9(r,e){return'<div class="assumption-trial-bar"><span class="assumption-trial-label">trial</span><div class="assumption-trial-buttons">'+Array.from({length:r},(n,t)=>`<button class="assumption-trial-btn${t===e?" active":""}" data-trial="${t}">${t+1}</button>`).join("")+"</div></div>"}function CF(r,e,n,t,i){var q,k;const u=document.getElementById("custom-assumptions-section"),o=t.ui.whose==="yours-plaincode",a=t.ui.inputMode,c=!je(t.ui.whose),s=Iy(e),l=e.get_svar_bare_names(),f=c2(e,n),d=Cy(e,a);if(d.length===0){r.innerHTML="",u&&(u.hidden=!0);return}u&&(u.hidden=!1);const h=j9(e,a),p=c?z9(e,t,i).map(w=>h.map(E=>K9(w,E.bareName,E.cardMode))):[],v=(((q=t.yoursRecord.raw_input)==null?void 0:q[a])??"").split(`
`),m=t.yoursRecord.raw_input_noncompute??{},b=p.length,g=c&&b>1,y=J9(b,t.ui.assumptionTrialIndex),_=g?Z9(b,y):"",$=c?'<div class="assumption-preset-hint">preset selected; select Yours in Calculator to edit</div>':"",L=e.input_svar_entries().map(w=>w.decl.type_highlevel),S=[];for(let w=0;w<d.length;w++){const E=h[w],A=E.cardMode,R=A==="sample",C=A==="bounds"?" bounds-mode":A==="sample"?" sample-mode":"",D=ke(d[w],n),N=s[w],B=N?bi(N.id):"",O=l[w],P=O?`isym:${O}`:null,F=P!==null&&e.can_consolidate_isym_svar(P),Z=F?e.isym_semantics.find(de=>de.id===P||de.id===`interp:${P}`):void 0,W=(Z==null?void 0:Z.defn)??(N==null?void 0:N.defn),j=Z?Z.srcquotes:N==null?void 0:N.srcquotes,ee=Mr(j,n),V=W?ee.atStart+ke(W,n)+ee.atEnd:"",x=O?`svar:${O}`:null,K=F?` id="isym-${He(O??"")}"`:"",G=x&&f?cF(f.nonroot_anchor_sections.get(x),n,t.ui.framingFoldState,x):"",we=R?`<canvas class="param-density-canvas" data-param-index="${E.inputIndex}" data-type-highlevel="${L[E.inputIndex]}" width="${kF}" height="${LF}"></canvas>`:"";let le;if(c){const de=((k=p[y])==null?void 0:k[w])??"",be=p.map((wr,ze)=>`data-trial-${ze}="${He(wr[w]??"")}"`).join(" ");le=`<span class="assumption-readonly${C}" data-param-index="${w}" ${be}>${se(de)}</span>`}else if(E.noncompute){const de=(m[E.bareName]??"").trim();le=`<input class="assumption-input${C}" data-noncompute="1" data-svar="${He(E.bareName)}" data-group="point" value="${He(de)}" placeholder="${qb("point")}">`}else{const de=(v[E.inputIndex]??"").trim();le=`<input class="assumption-input${C}" data-param-index="${E.inputIndex}" data-group="${a}" value="${He(de)}" placeholder="${qb(A)}">`}const re=!c&&!o&&A==="sample"?'<span class="assumption-help-slot"></span>':"";!c&&A==="sample"&&ng(v[E.inputIndex]??""),S.push(`<div class="assumption-card${c?" preset-mode":""}"${K}><div class="assumption-header"><span class="assumption-cond">${D}</span></div>`+(V?`<div id="gloss-${B}" class="assumption-narrative">${V}</div>`:"")+`<div class="assumption-input-row"${o?" hidden":""}>`+le+re+we+"</div>"+""+_+$+G+"</div>")}r.innerHTML=S.join("");for(const w of r.querySelectorAll(".assumption-help-slot"))w.appendChild(f2(SF));if(a==="sample"&&!o){const w=Xr(e.input_svar_entries().map(E=>E.decl));c?p2(r,w):h2(r,w)}}function IF(r,e,n,t){var s;if(je(n.ui.whose))return;const i=n.ui.inputMode,u=j9(e,i),o=z9(e,n,t).map(l=>u.map(f=>K9(l,f.bareName,f.cardMode))),a=o.length,c=J9(a,n.ui.assumptionTrialIndex);for(const l of r.querySelectorAll(".assumption-readonly")){const f=Number(l.dataset.paramIndex);for(const d of l.getAttributeNames())d.startsWith("data-trial-")&&l.removeAttribute(d);o.forEach((d,h)=>{l.setAttribute(`data-trial-${h}`,d[f]??"")}),l.textContent=((s=o[c])==null?void 0:s[f])??""}qF(r,a,c),i==="sample"&&p2(r,Xr(e.input_svar_entries().map(l=>l.decl)))}function qF(r,e,n){var i;const t=e>1;for(const u of r.querySelectorAll(".assumption-card")){const o=u.querySelector(".assumption-trial-bar");if(!t){o==null||o.remove();continue}const a=Z9(e,n);o?o.outerHTML=a:(i=u.querySelector(".assumption-input-row"))==null||i.insertAdjacentHTML("afterend",a)}}function MF(r,e,n){r.querySelectorAll(".assumption-trial-btn").forEach(u=>{u.classList.toggle("active",u.dataset.trial===String(e))});const i=r.querySelectorAll(".assumption-readonly");for(const u of i){const o=u.getAttribute(`data-trial-${e}`)??"";u.textContent=o}p2(r,n)}function Q9(r,e){const n=r.dataset.typeHighlevel,t=n?st(n):null,i=e.points,u=F7(t,i[0].x,i[i.length-1].x);Lb(r,e,u),Gr(r,()=>Lb(r,e,u))}function p2(r,e){const n=r.querySelectorAll(".param-density-canvas");for(const t of n){const i=t.closest(".assumption-input-row"),u=i==null?void 0:i.querySelector(".assumption-readonly"),o=(u==null?void 0:u.textContent)??"",a=Number(t.dataset.paramIndex??0),c=eg(o,e==null?void 0:e[a]);if(c)Q9(t,c);else{const s=t.getContext("2d");s&&s.clearRect(0,0,t.width,t.height)}}}function NF(r,e,n){var a;const t=e.ui.inputMode,i=((a=e.yoursRecord.raw_input)==null?void 0:a[t])??"",u=i?i.split(`
`):[];r.querySelectorAll(".assumption-input:not([data-noncompute])").forEach(c=>{const s=Number(c.dataset.paramIndex),l=(u[s]??"").trim();c.value!==l&&document.activeElement!==c&&(c.value=l)}),t==="sample"&&(h2(r,n),tg(r))}function h2(r,e){const n=r.querySelectorAll(".param-density-canvas");for(const t of n){const i=t.closest(".assumption-input-row"),u=i==null?void 0:i.querySelector(".assumption-input"),o=(u==null?void 0:u.value)??"",a=Number(t.dataset.paramIndex??0),c=eg(o,e==null?void 0:e[a]);if(c)Q9(t,c);else{const s=t.getContext("2d");s&&s.clearRect(0,0,t.width,t.height)}}}function eg(r,e){const n=r.trim();if(!n)return null;const t=e??mt;let i;try{i=M7(n,t)}catch{return null}switch(i.kind){case"family":return QN(Dd(i.spec,t.lo,t.hi));case"pairs":return ZN(i.pairs.map(u=>u[0]),i.pairs.map(u=>u[1]))}}function rg(r){return r.trim()}function FF(r,e,n,t){var a;const i=r.ui.inputMode,o=(((a=r.yoursRecord.raw_input)==null?void 0:a[i])??"").split(`
`);for(;o.length<t;)o.push("");return o[e]=i==="sample"?rg(n):n,o.join(`
`)}function ng(r){return null}function tg(r){const e=r.querySelectorAll(".assumption-card");for(const n of e){const t=n.querySelector(".assumption-input");if(!t)continue;ng(t.value);let i=n.querySelector(".arg-warning");i&&i.remove()}}function qb(r){switch(r){case"point":return"e.g. .5";case"bounds":return"e.g. .01 1";case"sample":return"e.g. "+ig}}const ig="tri(0, .5, .99)",Mb=[0,.3,.5];function OF(r,e){const n=r.config.conclusion_form;if(!n)throw new Error("config.conclusion_form is not set");const t=e[n];if(!t)throw new Error(`Form "${n}" not found in form registry`);return t}function ug(r,e,n){return l_(r,n).map(t=>`<div class="calc-label-row"><span class="label-full">${ke(t,e)}</span></div>`).join("")}function v2(r,e,n,t,i,u,o,a,c){var m,b;const s=i.ui.inputMode;if(u){const{source:g}=$e(i.ui.whose);if(g==="metho-plaincode"||g==="metho-richcode"||g==="adhoc-plaincode"){const y=Ze(i.ui.whose,u);if(y){const _=sr();$b(r,e,y,m2(g,y,u),n,t,i,_,o,a,c);return}}if(g==="yours-plaincode"){const y=i.yoursCodeRecord;if(r.innerHTML="",y.verified_code_input&&y.cparam_combos.length>0){const _=_i(y),$=sr();$b(r,e,_,[_],n,t,i,$,o,a,c)}else{const _='<div class="result-detail">Write code below and click Sample to compute results.</div>';e.innerHTML=n.config.rho_correlation_correction&&s==="sample"?H7(n,t)+_:_}return}}const l=((m=i.yoursRecord.raw_input)==null?void 0:m[s])??"",d=l_(n,s).length,h=!je(i.ui.whose),p=ug(n,t,s);let v;if(h)v='<div id="sample-columns"></div>';else{const g=s==="bounds"?" bounds-mode":s==="sample"?" sample-mode":"",y=UF(s,d);v=`<div class="calc-input"><textarea class="calc-textarea${g}" data-group="${s}" rows="${d}" spellcheck="false" placeholder="${y}">${se(l)}</textarea></div>`}if(r.innerHTML=`
    <div class="calc-layout">
      <div class="calc-labels">${p}</div>
      ${v}
    </div>
  `,h&&u){const g=r.querySelector("#sample-columns");g&&KC(g,n,u,i)&&((b=r.querySelector(".calc-labels"))==null||b.classList.add("has-sample-col-headers"));const{source:y}=$e(i.ui.whose);if(y==="adhoc-plainnum"){const _=Ze(i.ui.whose,u),$=_==null?void 0:_.trials[0],L=n.input_svar_entries().map(S=>S.bareName);$&&A_($,L).length>0&&r.insertAdjacentHTML("beforeend",`<div class="calc-copy-to-yours"><button class="copy-to-yours-btn" type="button" title="Copy this entry's estimates into your editable Yours inputs">Copy to Yours</button></div>`)}}b2(e,n,t,i,u,o)}function m2(r,e,n){return r==="metho-plaincode"?n.plaincodeResults:r==="metho-richcode"?n.richcodeResults:[e]}function DF(r,e,n,t,i,u,o,a,c){const{source:s}=$e(i.ui.whose),l=sr();if(u&&(s==="metho-plaincode"||s==="metho-richcode"||s==="adhoc-plaincode")){const f=Ze(i.ui.whose,u);if(f){wb(r,e,f,m2(s,f,u),n,t,i,l,o,a,c);return}}else if(s==="yours-plaincode"){const f=i.yoursCodeRecord;if(f.verified_code_input&&f.cparam_combos.length>0){const d=_i(f);wb(r,e,d,[d],n,t,i,l,o,a,c);return}}console.warn(`Code-control change outside a code result view (whose=${JSON.stringify(i.ui.whose)}); falling back to a full calculator render`),v2(r,e,n,t,i,u,o,a,c)}function b2(r,e,n,t,i,u){WF(r,e,n,t,i,u)}function TF(r,e,n,t,i,u,o){const a=u[e];if(!a){r.innerHTML="",console.warn(`derived-form ${e}: not in form registry (cannot compute)`);return}const c=n.form.find(m=>m.id===e);if(!c){r.innerHTML="",console.error(`derived-form ${e}: not found in jprob template form list`);return}const s=r_(e,c.sexpr),l=PF(n,s),f=ke(l,t),d=i.ui.inputMode,h=!je(i.ui.whose),p=n.get_svar_bare_names().length;let v;try{v=HF(e,a,n,i,d,h,p,o)}catch(m){r.innerHTML="",console.error(`derived-form ${e}: ${m.message}`);return}switch(v.kind){case"ok":const m=v.valueHtml??`<span class="derived-value">${v.value}</span>`,b=v.detailHtml??(v.detail?` <span class="derived-detail">${v.detail}</span>`:"");r.innerHTML=`<div class="hir-loud-note">${f} ${v.label} ≈ `+m+(b?` ${b}`:"")+"</div>"+(v.nonFiniteWarning?di():"");return;case"non-finite":r.innerHTML=di();return;case"pending":r.innerHTML="";return;case"missing":r.innerHTML="",console.warn(`derived-form ${e}: ${v.reason}`);return;case"error":r.innerHTML="",console.error(`derived-form ${e}: ${v.message}`);return}}function PF(r,e){const n=n_(e);return r.get_display_expr(n)??n}function _2(r,e,n,t,i,u,o){return Pi(["derived-form",r,n,t,i,u,o],()=>{const a=n.map(s=>s.map((l,f)=>Di(l,t[f]))),c=s=>e.point(s);return u==="subject"?q7(a,i,k7,c,o):Ti(a,u,c,o)})}function og(r,e){const n=mi(r.svar_entries());return e.map(t=>n[t])}function g2(r,e,n){return fN(r,e,n)}function HF(r,e,n,t,i,u,o,a){var p;const c=n.get_svar_bare_names(),s=e.params.map(v=>c.indexOf(v));if(s.some(v=>v<0)){const v=e.params.filter(m=>c.indexOf(m)<0);return{kind:"error",message:`params not in svar_list: ${JSON.stringify(v)} (form.params=${JSON.stringify(e.params)}, svar_list=${JSON.stringify(c)})`}}const{source:l}=$e(t.ui.whose);if(dn(l)==="plaincode"||dn(l)==="richcode")return BF(r,e,n,t,l,a);if(u)return xF(r,e,n,t,i,s,a);const f=((p=t.yoursRecord.raw_input)==null?void 0:p[i])??"";if(!f.trim())return{kind:"pending"};const d=n.input_svar_entries().map(v=>v.bareName),h=e.params.map(v=>d.indexOf(v));if(i==="point"){const v=f.trim().split(/\n/).map(y=>y.trim()).filter(y=>y.length>0),m=h.map(y=>{const _=Number(v[y]);return isNaN(_)?NaN:_});if(m.some(isNaN))return{kind:"pending"};const b=e.point(m),g=yr([b]);return g==="undefined"?{kind:"non-finite"}:{kind:"ok",label:fi,value:Me(b,e.typeHighlevel,t.ui.probAsOdds),nonFiniteWarning:g==="infinite"}}if(i==="bounds"){const v=f.trim().split(/\n/).map(_=>_.trim()).filter(_=>_.length>0),m=h.map(_=>{const $=(v[_]??"").split(/\s+/);if($.length!==2)return null;const L=Number($[0]),S=Number($[1]);return isNaN(L)||isNaN(S)?null:[L,S]});if(m.some(_=>_===null))return{kind:"pending"};const{lo:b,hi:g}=e.bounds(m),y=yr([b,g]);return y==="undefined"?{kind:"non-finite"}:{kind:"ok",label:"from bounds",value:Qd(b,g,e.typeHighlevel,t.ui.probAsOdds),nonFiniteWarning:y==="infinite"}}if(i==="sample"){const v=f.trim().split(/\n/).map(S=>S.trim()).filter(S=>S.length>0),m=Xr(n.input_svar_entries().map(S=>S.decl)),b=[];for(const S of h)try{b.push($2(v[S]??"",1,[m[S]??mt]).specs[0])}catch{return{kind:"pending"}}const y=n.config.rho_correlation_correction&&typeof t.ui.selectedRho=="number"?t.ui.selectedRho:0,_=_2(r,e,[b],h.map(S=>m[S]),[null],y,sr().mcItersDensity),$=yr([_.mean,_.median,_.p5,_.p95]);if($==="undefined")return{kind:"non-finite"};const L=g2(_,e.typeHighlevel,t.ui.probAsOdds);return{kind:"ok",label:"MC",value:"",valueHtml:L.valueHtml,detailHtml:L.detailHtml,nonFiniteWarning:$==="infinite"}}return{kind:"pending"}}function xF(r,e,n,t,i,u,o){if(!o)return{kind:"pending"};const a=Ze(t.ui.whose,o);if(!a)return{kind:"pending"};const{source:c}=$e(t.ui.whose),s=n.get_svar_bare_names(),l=u.map(f=>s[f]);if(c==="adhoc-plainnum"||c==="metho-plainnum"){const f=a;if(i==="point"){const _=f.trials.flatMap(q=>{const k=l.map(w=>q.point[w]);return k.some(w=>w===void 0)?[]:[e.point(k)]});if(_.length===0)return{kind:"missing",reason:"record has no point estimates for this form"};const $=_.reduce((q,k)=>q+k,0)/_.length,L=yr([..._,$]);return L==="undefined"?{kind:"non-finite"}:{kind:"ok",label:_.length>1?`mean of ${_.length} samples`:"from preset",value:Me($,e.typeHighlevel,t.ui.probAsOdds),nonFiniteWarning:L==="infinite"}}if(i==="bounds"){const _=f.trials[0];if(!(_!=null&&_.bounds))return{kind:"missing",reason:"record has no bounds estimates"};const $=l.map(k=>_.bounds[k]??null);if($.some(k=>k===null))return{kind:"missing",reason:"record bounds missing a required parameter"};const{lo:L,hi:S}=e.bounds($),q=yr([L,S]);return q==="undefined"?{kind:"non-finite"}:{kind:"ok",label:"from preset",value:Qd(L,S,e.typeHighlevel,t.ui.probAsOdds),nonFiniteWarning:q==="infinite"}}const d=f.trials.filter(_=>l.every($=>ti(_.sample[$])));if(d.length===0)return{kind:"missing",reason:"record has no sample estimates for this form"};const h=d.map(_=>l.map($=>at(_.sample[$]))),v=n.config.rho_correlation_correction?t.ui.selectedRho:0,m=_2(r,e,h,og(n,l),d.map(_=>_.rho),v,sr().mcItersDensity),b=yr([m.mean,m.median,m.p5,m.p95]);if(b==="undefined")return{kind:"non-finite"};const g=g2(m,e.typeHighlevel,t.ui.probAsOdds);return{kind:"ok",label:d.length>1?`MC of ${d.length} trials`:"MC",value:"",valueHtml:g.valueHtml,detailHtml:g.detailHtml,nonFiniteWarning:b==="infinite"}}return{kind:"pending"}}function BF(r,e,n,t,i,u){let o,a;if(nr(i)==="yours"){const b=t.yoursCodeRecord;if(!b.verified_code_input||b.cparam_combos.length===0)return{kind:"pending"};o=_i(b),a=[o]}else{if(!u)return{kind:"pending"};if(o=Ze(t.ui.whose,u),!o)return{kind:"pending"};a=m2(i,o,u)}_d(o);const c=LN(o,a,n,t);if(!c)return{kind:"pending"};if(c.trials.length===0)return{kind:"missing",reason:"no trials for the selected scenario combination"};if(t.ui.inputMode==="point"){const b=c.trials.map(_=>$9(_,r,e)),g=b.reduce((_,$)=>_+$,0)/b.length,y=yr([...b,g]);return y==="undefined"?{kind:"non-finite"}:{kind:"ok",label:b.length===1?fi:`${fi} (mean of ${b.length} trials)`,value:Me(g,e.typeHighlevel,t.ui.probAsOdds),nonFiniteWarning:y==="infinite"}}if(t.ui.inputMode==="bounds"){if(!bd(o))throw new Error("code bounds derived-form display reached with a multi-trial record; bounds mode should not have been selectable");const[b,g]=w9(c.trials[0],r,e),y=yr([b,g]);return y==="undefined"?{kind:"non-finite"}:{kind:"ok",label:"from bounds",value:Qd(b,g,e.typeHighlevel,t.ui.probAsOdds),nonFiniteWarning:y==="infinite"}}const s=c.trials.filter(b=>e.params.every(g=>ti(b.sample[g])));if(s.length===0){const b=e.params.filter(g=>!ti(c.trials[0].sample[g]));return{kind:"missing",reason:`trials lack sample data for ${JSON.stringify(b)}`}}const l=n.config.rho_correlation_correction,f=l?t.ui.codeRho:0,d=s.map(b=>e.params.map(g=>at(b.sample[g]))),h=_2(r,e,d,og(n,e.params),s.map(b=>b.rho??null),f,sr().mcItersDensity),p=yr([h.mean,h.median,h.p5,h.p95]);if(p==="undefined")return{kind:"non-finite"};const v=g2(h,e.typeHighlevel,t.ui.probAsOdds);return{kind:"ok",label:l?`MC (ρ=${f==="subject"?"subj":f})`:"MC",value:"",valueHtml:v.valueHtml,detailHtml:v.detailHtml,nonFiniteWarning:p==="infinite"}}function UF(r,e){const n=r==="sample"?ig:r==="bounds"?".01 1":".5";return"e.g. "+Array.from({length:e},()=>n).join(`
`)}function WF(r,e,n,t,i,u){const o=u?OF(e,u):null,a=t.ui.inputMode,c=!je(t.ui.whose),s=sr();(()=>{var h;if(c&&i){try{YF(r,e,n,t,i,o,s)}catch(p){r.innerHTML=`<div class="result-error">${se(p.message)}</div>`}return}const f=((h=t.yoursRecord.raw_input)==null?void 0:h[a])??"",d=e.input_svar_entries().length;if(!f.trim()){r.innerHTML='<div class="result-detail">Enter probabilities above.</div>';return}try{switch(a){case"point":GF(r,f,e,n,d,o,t.ui.probAsOdds);break;case"bounds":VF(r,f,e,n,d,o,t.ui.probAsOdds);break;case"sample":XF(r,f,e,n,d,t,o,s);break}}catch(p){r.innerHTML=`<div class="result-error">${se(p.message)}</div>`}})(),e.config.rho_correlation_correction&&a==="sample"&&r.insertAdjacentHTML("afterbegin",H7(e,n))}function ud(r,e){return!isNaN(r)&&X1(e,r)}function y2(r,e,n){const t=r.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(t.length!==e)throw new Error(`Expected ${e} values, got ${t.length}`);return t.map((i,u)=>{const o=Number(i),a=(n==null?void 0:n[u])??mt;if(!ud(o,a))throw new Error(`Line ${u+1}: "${i}" is not a valid value in ${zt(a)}`);return o})}function E2(r,e){const n=r.input_svar_entries(),t=n.map(o=>o.bareName),i=Xr(n.map(o=>o.decl)),u=((e==null?void 0:e.params)??[]).map(o=>{const a=t.indexOf(o);if(a<0)throw new Error(`form param "${o}" is not an input subjective variable`);return a});return{paramRanges:i,formParamPositions:u}}function GF(r,e,n,t,i,u,o){const{paramRanges:a,formParamPositions:c}=E2(n,u),s=y2(e,i,a),l=u?u.point(c.map(h=>s[h])):NaN,f=Un(n,t),d=n.config.conclusion_type_highlevel;r.innerHTML=pi({labelHtml:f,value:l,typeHighlevel:d,statsDisplay:o,detail:`from: ${s.join(", ")}`})}function ag(r,e,n){const t=r.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(t.length!==e)throw new Error(`Expected ${e} lines of "lo hi", got ${t.length}`);return t.map((i,u)=>{const o=i.split(/\s+/);if(o.length!==2)throw new Error(`Line ${u+1}: expected "lo hi", got "${i}"`);const a=Number(o[0]),c=Number(o[1]),s=(n==null?void 0:n[u])??mt;if(!ud(a,s)||!ud(c,s)||a>c)throw new Error(`Line ${u+1}: invalid bounds "${i}" (need lo ≤ hi within ${zt(s)})`);return[a,c]})}function VF(r,e,n,t,i,u,o){const{paramRanges:a,formParamPositions:c}=E2(n,u),s=ag(e,i,a),l=u?L7([c.map(h=>s[h])],u.bounds):{lo:NaN,hi:NaN},f=Un(n,t),d=n.config.conclusion_type_highlevel;r.innerHTML=e2({labelHtml:f,lo:l.lo,hi:l.hi,typeHighlevel:d,statsDisplay:o})}function $2(r,e,n){const t=r.trim().split(/\n/).map(u=>u.trim()).filter(u=>u.length>0);if(t.length!==e)throw new Error(`Expected ${e} lines, got ${t.length}`);return{specs:t.map((u,o)=>{try{return M7(u,(n==null?void 0:n[o])??mt)}catch(a){throw new Error(`Line ${o+1}: ${a.message}`)}}),warnings:[]}}function XF(r,e,n,t,i,u,o,a){const{paramRanges:c,formParamPositions:s}=E2(n,o),{specs:l,warnings:f}=$2(e,i,c),d=n.config.rho_correlation_correction,h=d&&typeof u.ui.selectedRho=="number"?u.ui.selectedRho:0,p=Un(n,t),v=n.config.conclusion_type_highlevel,m=o?w=>o.point(s.map(E=>w[E])):()=>NaN,b=[l],g=b.map(w=>w.map((E,A)=>Di(E,c[A]))),y=o?b.map(w=>s.map(E=>w[E])):[],_=s.map(w=>c[w]),$=[];d&&$.push(sg(u.ui.selectedRho));const L=h===0?I7(y,o==null?void 0:o.closedFormMomentsShape,_):null;L&&$.push(`<div class="result-label">Exact moments (independent)</div><div class="result-main">E[${p}] = <span class="hl">${Me(L.mean,v,u.ui.probAsOdds)}</span></div><div class="result-detail">σ = ${Me(L.sigma,v,"probability")}</div>`);for(const w of f)$.push(`<p class="arg-warning">${ZF(w)}</p>`);const S=Pi(["yours-sample-conclusion",o?n.config.conclusion_form:null,s,b,c,h,a.mcItersDensity],()=>Ti(g,h,m,a.mcItersDensity)),q=d?h===0?"independent":`${tt("ρ")} = ${h}`:"independent";$.push(`<div class="result-label">Monte Carlo (${q}, ${tt("n")}=${S.count.toLocaleString()})</div><div class="mc-row"><div class="mc-text">`+pt(S,v,u.ui.probAsOdds,"monte-carlo")+'</div><canvas id="density-canvas" width="400" height="200"></canvas></div>'),r.innerHTML=$.join("");const k=r.querySelector("#density-canvas");if(k){const w=st(v);en(k,S.samples,S.p5,S.p95,w),Gr(k,()=>en(k,S.samples,S.p5,S.p95,w))}}function sg(r,e=!1){let n='<div class="rho-selector"><label>ρ (correlation):</label>';for(const i of Mb)n+=`<button class="rho-btn${r===i?" active":""}" data-rho="${i}">${i}</button>`;e&&(n+=`<button class="rho-btn${r==="subject"?" active":""}" data-rho="subject">subject</button>`);const t=typeof r=="number"&&!Mb.includes(r);return n+="<span>custom:</span>",n+=`<input class="rho-custom-input" type="text" value="${t?r:""}" placeholder="0–1">`,n+="</div>",n}function YF(r,e,n,t,i,u,o){const a=Ze(t.ui.whose,i);if(!a){r.innerHTML='<div class="result-detail">No data for this preset.</div>';return}const{source:c}=$e(t.ui.whose);t.ui.inputMode;const s=Un(e,n),l=e.get_svar_bare_names();if(c==="adhoc-plainnum"||c==="metho-plainnum"){KF(r,a,e,t,s,l,u,o);return}r.innerHTML='<div class="result-detail">Unknown preset source.</div>'}function Nb(r,e,n,t){const i=e.filter(u=>r[u]===void 0);if(i.length>0)throw new Error(`Missing required ${t} input(s) for trial ${n+1}: `+JSON.stringify(i));return e.map(u=>r[u])}function KF(r,e,n,t,i,u,o,a){const c=t.ui.inputMode,s=n.config.conclusion_type_highlevel,l=t.ui.probAsOdds;if(e.trials.length===0)throw new Error("Plainnum record has no trials to display");if(c==="point"){const f=(o==null?void 0:o.params)??u,d=e.trials.map((v,m)=>Nb(v.point,f,m,"point")),h=d.map(v=>o?o.point(v):NaN),p=h.reduce((v,m)=>v+m,0)/h.length;if(h.length===1)r.innerHTML=pi({labelHtml:i,value:h[0],typeHighlevel:s,statsDisplay:l,detail:`from: ${d[0].join(", ")}`});else{const v=h.map(m=>Me(m,s,l)).join(", ");r.innerHTML=pi({labelHtml:i,value:p,typeHighlevel:s,statsDisplay:l,labelPrefix:"mean ",detail:`per sample: ${v}`})}return}if(c==="bounds"){const f=(o==null?void 0:o.params)??u,d=e.trials.map((p,v)=>Nb(p.bounds,f,v,"bounds")),h=o?L7(d,o.bounds):{lo:NaN,hi:NaN};r.innerHTML=e2({labelHtml:i,lo:h.lo,hi:h.hi,typeHighlevel:s,statsDisplay:l,midpointDetailSuffix:` (envelope of ${e.trials.length} sample${e.trials.length>1?"s":""})`});return}jF(r,e,n,t,i,u,o,a)}function jF(r,e,n,t,i,u,o,a){const c=n.config.rho_correlation_correction,s=c?t.ui.selectedRho:0,l=typeof s=="number"?s:0,f=n.config.conclusion_type_highlevel,d=t.ui.probAsOdds,h=o?o.params.map(w=>{const E=u.indexOf(w);if(E<0)throw new Error(`conclusion form param "${w}" is not a subjective variable`);return E}):[],p=o?w=>o.point(h.map(E=>w[E])):()=>NaN,v=c&&e.precomputed.subject!=null,m=[];c&&m.push(sg(s,v));const b=jC(e,s);if(b){s===0&&b.sigma!=null&&m.push(`<div class="result-label">Exact moments (independent)</div><div class="result-main">E[${i}] = <span class="hl">${Me(b.mean,f,d)}</span></div><div class="result-detail">σ = ${Me(b.sigma,f,"probability")}</div>`);const w=c?s==="subject"?"subject ρ":l===0?"independent":`${tt("ρ")} = ${l}`:"independent",E=b.mc_iters?`, ${JF(b.mc_iters)} MC iters`:"";if(m.push(`<div class="result-label">Precomputed (${w}, ${e.count} agent trials${E})</div><div class="mc-row"><div class="mc-text">`+pt(b,f,d,"monte-carlo")+'</div><canvas id="density-canvas" width="400" height="200"></canvas></div>'),r.innerHTML=m.join(""),b.density_curve){const A=r.querySelector("#density-canvas");if(A){const R=b.density_curve,C=st(f);en(A,R,b.p5,b.p95,C),Gr(A,()=>en(A,R,b.p5,b.p95,C))}}return}const g=mi(n.svar_entries()),y=e.trials.map(w=>u.map(E=>at(w.sample[E]))),_=y.map(w=>w.map((E,A)=>Di(E,g[u[A]]))),$=o?e.trials.map(w=>o.params.map(E=>at(w.sample[E]))):[],L=l===0?I7($,o==null?void 0:o.closedFormMomentsShape,o?o.params.map(w=>g[w]):[]):null;L&&m.push(`<div class="result-label">Exact moments (independent)</div><div class="result-main">E[${i}] = <span class="hl">${Me(L.mean,f,d)}</span></div><div class="result-detail">σ = ${Me(L.sigma,f,"probability")}</div>`);const S=Pi(["plainnum-preset-conclusion",o?n.config.conclusion_form:null,h,y,u.map(w=>g[w]??null),l,a.mcItersDensity],()=>Ti(_,l,p,a.mcItersDensity)),q=c?l===0?"independent":`${tt("ρ")} = ${l}`:"independent";m.push(`<div class="result-label">Monte Carlo (${q}, ${tt("n")}=${S.count.toLocaleString()})</div><div class="mc-row"><div class="mc-text">`+pt(S,f,d,"monte-carlo")+'</div><canvas id="density-canvas" width="400" height="200"></canvas></div>'),r.innerHTML=m.join("");const k=r.querySelector("#density-canvas");if(k){const w=st(f);en(k,S.samples,S.p5,S.p95,w),Gr(k,()=>en(k,S.samples,S.p5,S.p95,w))}}function tt(r){return`<span class="lc">${r}</span>`}const zF=1e6;function JF(r){const e=r/zF;return e>=1&&e===Math.floor(e)?`${e}M`:`${e.toFixed(1)}M`}function ZF(r){return r.replace(/^Line \d+:\s*/,"")}function QF(r,e,n,t,i){if(!e.trim())return null;try{if(r==="point"){const a=y2(e,n,i),c={};for(let s=0;s<t.length;s++)c[t[s]]=a[s];return c}if(r==="bounds"){const a=ag(e,n,i),c={};for(let s=0;s<t.length;s++)c[t[s]]=a[s];return c}const{specs:u}=$2(e,n,i),o={};for(let a=0;a<t.length;a++){const c=u[a];o[t[a]]=c.kind==="family"?c.spec.text:c.pairs}return o}catch{return null}}function w2(r,e,n,t,i){const u=r.yoursRecord;u.raw_input={...u.raw_input??{},[t]:i};const o=e.input_svar_entries(),a=o.map(f=>f.bareName),c=a.length,s=Xr(o.map(f=>f.decl)),l=QF(t,i,c,a,s);if(l!==null){const f=u.trials[0];t==="point"?f.point=l:t==="bounds"?f.bounds=l:f.sample=l}N_(e,n,r.plainnumOptionDictKey,u)}function cg(r,e,n,t,i){const u=r.yoursRecord;u.raw_input_noncompute={...u.raw_input_noncompute??{},[t]:i};const o=e.svar_entries().find(c=>c.bareName===t);if(!o)throw new Error(`unknown subjective variable "${t}"`);const[a]=Xr([o.decl]);if(i.trim())try{const[c]=y2(i,1,[a]);u.trials[0].point[t]=c}catch{}N_(e,n,r.plainnumOptionDictKey,u)}function eO(r,e){r.addEventListener("input",n=>{const t=n.target;if(t.classList.contains("calc-textarea")){e.persistCalcTextarea(t);return}if(t.classList.contains("assumption-input")){e.persistAssumptionCard(t);return}}),r.addEventListener("change",n=>{const t=n.target;if(t.classList.contains("calc-textarea")){e.recomputeAfterCalcTextarea();return}if(t.classList.contains("assumption-input")){e.recomputeAfterAssumptionCard(t);return}})}function A2(r,e,n,t){const i=r.yoursCodeRecord;i.raw_code_input=t,yi(e,n,r.codeOptionDictKey,i)}function rO(r,e,n,t,i){const u=r.yoursCodeRecord;u.reasoning_response={...u.reasoning_response,[t]:i},yi(e,n,r.codeOptionDictKey,u)}function nO(r,e,n,t){const i=r.yoursCodeRecord;i.misc_response=t,yi(e,n,r.codeOptionDictKey,i)}function S2(r){const e=`yours_${r}_`,n=[];for(let i=0;i<localStorage.length;i++){const u=localStorage.key(i);u!==null&&u.startsWith(e)&&n.push(u)}const t=[];for(const i of n){const u=localStorage.getItem(i);if(u===null)continue;let o;try{o=JSON.parse(u)}catch{continue}t.push({plainnumOptionDictKey:i.slice(e.length),record:o})}return t.sort((i,u)=>{const o=i.record.timestamp??"";return(u.record.timestamp??"").localeCompare(o)}),t}function tO(r,e){localStorage.removeItem($i(r,e))}function iO(r){const e=S2(r).map(i=>({kind:"plainnum",plainnumOptionDictKey:i.plainnumOptionDictKey,record:i.record})),n=yd(r).map(i=>({kind:"plaincode",codeOptionDictKey:i.codeOptionDictKey,record:i.record})),t=[...e,...n];return t.sort((i,u)=>{const o=i.record.timestamp??"";return(u.record.timestamp??"").localeCompare(o)}),t}function uO(r,e,n,t){const i={};for(const[a,c]of Object.entries(t.cparam_values??{}))R2(c)&&(i[a]=c);for(const[a,c]of Object.entries(t.aopts))lg(c)&&(i[a]=c);const u=Ei(e.get_options(),i);Ed(e.config,u);const o={...r.ui,whose:"yours-plainnum"};return qe(e.config,o),{...r,optionValues:u,plainnumOptionDictKey:n,ui:o,yoursRecord:t}}function oO(r,e,n,t){const i={};for(const[a,c]of Object.entries(t.aopts))lg(c)&&(i[a]=c);for(const a of e.get_cparams()){const c=Fe(a.id);if(c in r.optionValues){const s=r.optionValues[c];if(!R2(s))throw new Error(`Cparam ${a.id} has a non-scalar state value`);i[c]=s}}const u=Ei(e.get_options(),i);Ed(e.config,u);const o={...r.ui,whose:"yours-plaincode"};return qe(e.config,o),{...r,optionValues:u,codeOptionDictKey:n,ui:o,yoursCodeRecord:t}}function R2(r){const e=typeof r;return e==="string"||e==="number"||e==="boolean"}function lg(r){return R2(r)||Array.isArray(r)&&r.every(e=>typeof e=="string")}function fg(r,e){const n=[];for(const t of r.get_options()){const i=Fe(t.id),u=fn(t.id)?e.cparam_values:e.aopts,o=u==null?void 0:u[i];o!==void 0&&(!fn(t.id)&&o===t.default_value||n.push(`${i}=${pg(o)}`))}return n.join(" ")}function dg(r,e){const n=["code"];for(const t of r.get_aopts()){const i=Fe(t.id),u=e.aopts[i];u!==void 0&&u!==t.default_value&&n.push(`${i}=${pg(u)}`)}return n.join(" ")}function pg(r){return typeof r=="boolean"?r?"true":"false":String(r)}function aO(r,e){const n=iO(r.aid),t='<div class="yours-saved-header">Saved estimations</div>';if(n.length===0)return t+'<div class="yours-saved-empty">No saved estimations yet.</div>';const i=n.map(u=>sO(r,e,u)).join("");return t+`<div class="yours-saved-list">${i}</div>`}function sO(r,e,n){if(n.kind==="plainnum"){const o=se(fg(r,n.record)||"(default options)"),a=se(n.plainnumOptionDictKey);return`<div class="yours-saved-row${e.ui.whose==="yours-plainnum"&&n.plainnumOptionDictKey===e.plainnumOptionDictKey?" yours-saved-row-current":""}" data-kind="plainnum" data-key="${a}" role="button" tabindex="0"><span class="yours-saved-label">${o}</span><button class="yours-saved-delete" data-kind="plainnum" data-key="${a}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}const t=se(dg(r,n.record)),i=se(n.codeOptionDictKey);return`<div class="yours-saved-row yours-saved-row-code${e.ui.whose==="yours-plaincode"&&n.codeOptionDictKey===e.codeOptionDictKey?" yours-saved-row-current":""}" data-kind="plaincode" data-key="${i}" role="button" tabindex="0"><span class="yours-saved-label">${t}</span><button class="yours-saved-delete" data-kind="plaincode" data-key="${i}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}function k2(r,e,n){r.innerHTML=aO(e,n)}const cO=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"],lO=`/**
 * Top-level helper functions injected into the user's \`belief_spec_for_cparam_combo\`.
 *
 * All helpers are available as bare names inside the user's function body
 * (see plaincode_execute.ts for the destructure preamble mechanism).
 *
 * The distribution helpers return family-spec strings (exact — no PWL
 * approximation; see distribution_families.ts for the family set, grammar,
 * and implicit truncation to the svar's range). \`trap\` is the one
 * non-family extra and returns PWL pairs. Mirrors the Python agent-side
 * helper set (hp/query_agents/richcode_eval_src/distribution_families.py
 * FAMILY_SPEC_HELPERS + trap/clamp/math in eval_code_shared.py /
 * belief_helpers_richcode.py) — keep in sync, names included.
 *
 * Name-collision caveat: these bare names are destructured inside the
 * user's function body after the cparam parameters, so a cparam whose name
 * matches a helper (most plausibly \`t\`) is a compile error for user code.
 */

import { formatFamilySpec } from './distribution_families.js';
import { HELPER_NAMES } from './belief_helper_names.js';
export { HELPER_NAMES };


// ── Family spec-string helpers ───────────────────────────────────────────

/** Triangular over [lo, hi] with mode at peak. */
export function tri(lo: number, peak: number, hi: number): string {
  return formatFamilySpec('tri', lo, peak, hi);
}

/** Uniform over [lo, hi]. */
export function uniform(lo: number, hi: number): string {
  return formatFamilySpec('uniform', lo, hi);
}

/** Legacy alias of \`uniform\` (pre-family helper name). */
export const uni = uniform;

/** Beta(a, b) on [0, 1]; a, b > 0. */
export function beta(a: number, b: number): string {
  return formatFamilySpec('beta', a, b);
}

/** Normal(mu, sigma); truncated to the variable's range downstream. */
export function normal(mu: number, sigma: number): string {
  return formatFamilySpec('normal', mu, sigma);
}

/** Log-normal: mu/sigma are mean/sd of log(X). */
export function lognormal(mu: number, sigma: number): string {
  return formatFamilySpec('lognormal', mu, sigma);
}

/** Uniform in log space over [lo, hi]; 0 < lo < hi. */
export function loguniform(lo: number, hi: number): string {
  return formatFamilySpec('loguniform', lo, hi);
}

/** Location-scale Student-t (sigma is the scale parameter, not the std). */
export function t(mu: number, sigma: number, df: number): string {
  return formatFamilySpec('t', mu, sigma, df);
}

/** Exp of location-scale Student-t; log-space params like lognormal. */
export function logt(mu: number, sigma: number, df: number): string {
  return formatFamilySpec('logt', mu, sigma, df);
}

/** Normal explicitly truncated to [lo, hi]. */
export function normal_trunc(mu: number, sigma: number, lo: number, hi: number): string {
  return formatFamilySpec('normal-trunc', mu, sigma, lo, hi);
}

/** Log-normal explicitly truncated to [lo, hi] (x-space bounds). */
export function lognormal_trunc(mu: number, sigma: number, lo: number, hi: number): string {
  return formatFamilySpec('lognormal-trunc', mu, sigma, lo, hi);
}

/** Location-scale Student-t explicitly truncated to [lo, hi]. */
export function t_trunc(mu: number, sigma: number, df: number, lo: number, hi: number): string {
  return formatFamilySpec('t-trunc', mu, sigma, df, lo, hi);
}

/** Exp of location-scale Student-t explicitly truncated to [lo, hi]
 *  (x-space bounds). */
export function logt_trunc(mu: number, sigma: number, df: number, lo: number, hi: number): string {
  return formatFamilySpec('logt-trunc', mu, sigma, df, lo, hi);
}


// ── PWL / utility helpers ────────────────────────────────────────────────

/** Trapezoidal distribution: [[lo, 0], [peak_lo, 1], [peak_hi, 1], [hi, 0]].
 *  No family-spec form; returns PWL pairs. */
export function trap(
  lo: number, peak_lo: number, peak_hi: number, hi: number,
): number[][] {
  return [[lo, 0], [peak_lo, 1], [peak_hi, 1], [hi, 0]];
}

/** Clamp x to [lo, hi]. */
export function clamp(x: number, lo: number, hi: number): number {
  return Math.min(Math.max(x, lo), hi);
}


// ── Math re-exports (match Python richcode's \`from math import ...\`) ─────

export const exp = Math.exp;
export const log = Math.log;
export const log2 = Math.log2;
export const log10 = Math.log10;
export const sqrt = Math.sqrt;


// ── Single bundle for injection into user code ──────────────────────────

/**
 * The bundle destructured inside the user's \`belief_spec_for_cparam_combo\` body.
 * Names in this object are the bare identifiers the user can call.
 *
 * Keys here must match \`HELPER_NAMES\` exactly (asserted at module load).
 */
export const HELPERS = {
  tri,
  uniform,
  uni,
  beta,
  normal,
  lognormal,
  loguniform,
  t,
  logt,
  normal_trunc,
  lognormal_trunc,
  t_trunc,
  logt_trunc,
  trap,
  clamp,
  exp,
  log,
  log2,
  log10,
  sqrt,
} as const;

// Assert HELPER_NAMES and HELPERS agree — protects against silent drift
// since the names list lives in a separate module (so code that only needs
// the names doesn't pull in the distribution machinery).
{
  const keysFromBundle = Object.keys(HELPERS);
  const namesList = [...HELPER_NAMES];
  const missingInNames = keysFromBundle.filter(k => !namesList.includes(k));
  const missingInBundle = namesList.filter(n => !keysFromBundle.includes(n));
  if (missingInNames.length > 0 || missingInBundle.length > 0) {
    throw new Error(
      \`belief_helpers: HELPER_NAMES ↔ HELPERS drift. \` +
      \`Missing from names: \${JSON.stringify(missingInNames)}. \` +
      \`Missing from bundle: \${JSON.stringify(missingInBundle)}.\`
    );
  }
}
`;function fO(r,e){const n=new Set(r),t=e.filter(s=>!n.has(s));if(t.length>0)throw new Error("Stub pbs svars must be a subset of point svars; unexpected "+JSON.stringify(t));if(r.length===0)return["return {","  point:  {},","  bounds: {},","  sample: {},","  // rho: 0,","};"].join(`
`);const i=r.map(s=>`${s}: 0`).join(", "),u=e.map(s=>`${s}: [0, 1]`).join(", "),o=e.map(s=>`    ${s}: tri(0, 0.4, 1),`).join(`
`),a=u===""?"{}":`{ ${u} }`,c=o===""?["  sample: {},"]:["  sample: {",o,"  },"];return["return {",`  point:  { ${i} },`,`  bounds: ${a},`,...c,"  // rho: 0,","};"].join(`
`)}function dO(r,e){return r.svar.find(t=>t.id===`svar:${e}`),e}function pO(r){const e=[];for(const n of r.get_cparams()){const t=n.allowed_values;t===void 0||typeof t=="string"||e.push(n.id.slice(7))}return e}const hO="// code data missing";function vO(r,e,n){const t=pO(r),i=r.get_svar_bare_names(),u=r.input_svar_entries().map(p=>p.bareName),o=`function belief_spec_for_cparam_combo(${t.join(", ")}) {`,a=e.raw_code_input!==""?e.raw_code_input:n==="edit"?fO(i,u):hO,c=n==="view"?" readonly":"",s=i.map(p=>{const v=se(dO(r,p)),m=se(e.reasoning_response[p]??"");return`<div class="code-reasoning-row"><label class="code-reasoning-label">${v}</label><textarea class="code-reasoning-input auto-expand" data-svar="${se(p)}" rows="1" spellcheck="false"${c}>${m}</textarea></div>`}).join(""),l=se(e.misc_response),d=`// ${cO.join(", ")} are injected helper functions. For details (warning: the literal code with some irrelevant docs): `,h=n==="edit"?'<div class="code-action-row"><button class="code-sample-btn" type="button">Sample</button><span class="code-status" aria-live="polite"></span></div><div class="code-error-area"></div><div class="result-detail">The remaining fields below are only notes for you, unless you choose to contribute your estimation to appear in the `Adhoc...` dropdown in future builds, which we strongly encourage!</div>':e.raw_code_input===""?"":`<div class="code-action-row"><button class="copy-to-yours-btn" type="button" title="Copy this entry's code into your editable Yours-plaincode code">Copy to Yours</button></div>`;return`<div class="yours-code-input" data-variant="${n}"><div class="code-editor"><pre class="code-signature-line">${se(o)}</pre><pre class="code-helpers-comment"><span class="code-helpers-comment-text">${se(d)}</span><span class="code-helpers-help-slot"></span></pre><textarea class="code-body-input auto-expand" rows="10" spellcheck="false"${c}>${se(a)}</textarea><pre class="code-signature-line">}</pre></div>`+h+'<div class="code-reasoning-section"><div class="code-section-header">Reasoning</div>'+s+`</div><div class="code-misc-section"><div class="code-section-header">Misc</div><textarea class="code-misc-input auto-expand" rows="1" spellcheck="false"${c}>${l}</textarea></div></div>`}function mO(r){const e=()=>{r.style.height="auto",r.style.height=`${r.scrollHeight}px`};r.addEventListener("input",e),e()}function bO(r){for(const e of r.querySelectorAll("textarea.auto-expand"))mO(e)}function Fb(r,e,n,t){r.innerHTML=vO(e,n,t),bO(r),_O(r)}function _O(r){for(const e of r.querySelectorAll(".code-helpers-help-slot"))e.childElementCount>0||e.appendChild(hF(lO))}function hg(r,e){return r??!!(e??!1)}function gO(r,e){return!hg(r,e)}function yO(r){var n;const e={};for(const t of r){const i=t.id.startsWith("svar:")?t.id.slice(5):t.id,[u,o]=EO[t.type_mathlevel]??[!0,!0],a=((n=t.type_detail)==null?void 0:n.range)??[0,1];e[i]={lo:a[0],hi:a[1],loClosed:u,hiClosed:o}}return e}const EO={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]},vg="execution timed out",od="execution aborted";function $O(r,e){const t=(e.workerFactory??wO)();return new Promise((i,u)=>{var l,f;let o=!1;const a=()=>{var d;o=!0,clearTimeout(s),(d=e.signal)==null||d.removeEventListener("abort",c),t.terminate()},c=()=>{o||(a(),u(new Error(od)))};if((l=e.signal)!=null&&l.aborted){t.terminate(),u(new Error(od));return}(f=e.signal)==null||f.addEventListener("abort",c);const s=setTimeout(()=>{o||(a(),u(new Error(vg)))},e.timeoutMs);t.addEventListener("message",d=>{o||(a(),i(d.data))}),t.addEventListener("error",d=>{o||(a(),u(new Error(d.message||"worker error")))}),t.postMessage(r)})}function wO(){return new Worker(new URL("/hirwebdep/assets/plaincode_eval_worker-CIAIRWhU.js",import.meta.url),{type:"module"})}const hi={VISIBLE_AOPTS:"visible-aopts",TRIAL_CHOICE_AOPTS:"trial-choice-aopts",CPARAMS_SECTION:"cparams",TEXT_DEFINITIONS:"text-definitions",INTERPRETED_SYMBOL_SEMANTICS:"interpreted-symbols",DEFINED_SYMBOLS:"defined-symbols",FIXED_ASSUMPTIONS:"fixed-assumptions",CUSTOM_ASSUMPTIONS:"custom-assumptions",COMPUTED_FORMULAS:"formulas",FRAMING_ROOT:"framing-notes-root",FRAMING_EXPLAINER:"framing-notes-explainer",SRCQUOTE_EXPLAINER:"srcquote-explainer",CALCULATOR:"calculator"},AO={TEXT_DEFINITIONS:r=>i$(r),INTERPRETED_SYMBOL_SEMANTICS:r=>u$(r),DEFINED_SYMBOLS:r=>t$(r),FIXED_ASSUMPTIONS:r=>o$(r),COMPUTED_FORMULAS:r=>a$(r)},SO="DERIVED_FORMS",RO="CALCULATOR_RESULTS",mg="stats-display-control";function bg(r){return r.show_in.includes("html")}function kO(r){const e=new Set;for(const n of r.layout.sections.html)if("subentries"in n)for(const t of n.subentries)typeof t=="object"&&"formid"in t&&e.add(t.formid);return e}function LO(r){const e=r.config.conclusion_form,n=kO(r);return r.form.filter(t=>t.id!==e&&!n.has(t.id)&&bg(t)).map(t=>t.id)}function CO(r,e,n){let t;if(n)t={...n,unresolvedRefs:n.unresolvedRefs??new Set,footnoteCounter:n.footnoteCounter??{n:0},footnotes:n.footnotes??[],popoverLookup:n.popoverLookup??J1(r,n.refLookup)};else{const u=a_(r),o=d_(r,p_(r,{},"plainnum"),"plainnum"),a=o.option_value_or("show_typical_examples",!1),c=o.option_value_or("srcquotes_inlined",!1),s={};for(const l of o.get_option_bare_names())s[l]=o.option_value(l);t={jprobInstance:o,showTypical:a,srcquotesInlined:c,refLookup:u,displayOptionValues:s,unresolvedRefs:new Set,footnoteCounter:{n:0},footnotes:[],popoverLookup:J1(r,u)}}const i=[];for(const u of r.layout.sections.html)i.push(IO(u,r,t));return i.push(`<div class="footnotes" id="${O_}">`),t.footnotes&&t.footnotes.length>0&&i.push(`<ol>${D_(t.footnotes)}</ol>`),i.push("</div>"),i.push(`<div class="footnotes" id="${wd}"></div>`),{html:i.join(""),unresolvedRefs:[...t.unresolvedRefs].sort()}}function IO(r,e,n){if("chunkid"in r){const a=_g(r.chunkid,e,n,r.style);if(a==null)throw new Error("Unexpected failure of renderTextChunk to return string");return a}if("subentries"in r){if(r.delegation_id!=="CALCULATOR")throw new Error("Only expected use of this currently-hacky-structured feature is for the Calculator section (delegation_id 'CALCULATOR').");const a=hi[r.delegation_id],c=r.subentries.map(s=>qO(s,e,n,r.delegation_id));return`<section id="${a}-section"><h2 id="${a}-section-header">${r.header}</h2>${c.join("")}</section>`}const{delegation_id:t,header:i}=r,u=hi[t];if(!u)throw new Error("Expected `delegation_id` field here to be an element of DelegatedLayoutEntryId.");if((t==="FRAMING_ROOT"||t==="FRAMING_EXPLAINER")&&!e.has_framing_notes()||t==="SRCQUOTE_EXPLAINER"&&!e.has_srcquotes())return"";const o=AO[t];if(o){const a=o(n),c=i!=null?`<h2 id="${u}-section">${i}</h2>`:"";return a.trim()?c+a:""}return t==="FRAMING_EXPLAINER"||t==="SRCQUOTE_EXPLAINER"?`<div id="${u}-section"><div id="${u}-content"></div></div>`:`<section id="${u}-section"><h2 id="${u}-section-header">${i??""}</h2><div id="${u}-content"></div></section>`}function qO(r,e,n,t){if(typeof r=="string"){if(r===SO)return LO(e).map(c=>`<div id="derived-${Wt(c)}" class="derived-form" data-form-id="${c}"></div>`).join("");const a=`${Wt(t)}-${Wt(r)}`;return r===RO?`<div id="${mg}"></div><div id="${a}"></div>`:`<div id="${a}"></div>`}if("chunkid"in r)return _g(r.chunkid,e,n,r.style)??"";const i=r.formid,u=e.form.find(a=>a.id===i);if(u&&!bg(u))throw new Error(`Layout explicitly places ${i}, but its show_in ${JSON.stringify(u.show_in)} excludes 'html'. Remove the layout entry or add 'html' to the formula's show_in.`);return`<div id="${`derived-${Wt(i)}`}" class="derived-form" data-form-id="${i}"></div>`}function _g(r,e,n,t){const i=e.find_textchunk_defn(r);if(!i)return null;const u=ke(i,n);switch(t){case"title":return`<h1 class="arg-title">${u}</h1>`;case"subtitle":return`<p class="arg-subtitle">${u}</p>`;case"note":return`<div class="hir-loud-note">${u}</div>`;case"warning":return`<p class="arg-warning">${u}</p>`;default:return`<div class="textchunk">${u}</div>`}}function Wt(r){return r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"").replace(/^-/,"")}function MO(r,e,n,t){const{html:i}=CO(e,void 0,n);r.innerHTML=i}const NO=[{aid:"mcovidB1",timeline_family:"mcovidB",timeline_next:"mcovidB2"},{aid:"mcovidB2",timeline_family:"mcovidB",timeline_next:"mcovidB3"},{aid:"mcovidB3",timeline_family:"mcovidB",timeline_next:"mcovidB4"},{aid:"mcovidB4",timeline_family:"mcovidB",timeline_next:"mcovidB5"},{aid:"mcovidB5",timeline_family:"mcovidB",timeline_next:"mcovidB6"},{aid:"mcovidB6",timeline_family:"mcovidB",timeline_next:"mcovidB7"},{aid:"mcovidB7",timeline_family:"mcovidB"},{aid:"mcovidA",timeline_family:"ignore-mcovidA",timeline_next:"mcovidA2"},{aid:"mcovidA2",timeline_family:"ignore-mcovidA"},{aid:"covid0"},{aid:"eggsFH1",timeline_family:"eggsFH",timeline_next:"eggsFH2"},{aid:"eggsFH2",timeline_family:"eggsFH"},{aid:"lhcFXH1",timeline_family:"lhc",timeline_next:"lhcFXH_SolMax"},{aid:"lhcFXH_SolMax",timeline_family:"lhc",timeline_next:"lhcFXH_SolMax_Ultra"},{aid:"lhcFXH_SolMax_Ultra",timeline_family:"lhc"}],FO={point:"point",bounds:"bounds",sample:"distribution"},OO="timeline-nav",DO="jprob-selector",gg="jprob-selector-select",yg="error-console-btn",TO=NO;function PO(r,e,n,t){UO(r),VO(r,n),BO(e),xO(t)}function HO(r,e,n){const t=[],i=new Set;let u=e;for(const o of r){const a=o.timeline_family;if(a===void 0){t.push({label:o.aid,value:o.aid});continue}if(i.has(a))continue;i.add(a);const c=r.filter(f=>f.timeline_family===a),s=new Set(c.map(f=>f.aid)),l=c.find(f=>f.timeline_next===void 0||!s.has(f.timeline_next))??o;t.push({label:a,value:l.aid}),a===n&&(u=l.aid)}return{options:t,selectedValue:u}}function xO(r,e=TO){const n=document.getElementById(DO);if(!n)return;const{options:t,selectedValue:i}=HO(e,r.currentAid,r.currentFamily);if(t.length<=1){n.hidden=!0,n.innerHTML="";return}n.hidden=!1;const u=t.map(o=>`<option value="${o.value}"${o.value===i?" selected":""}>${o.label}</option>`).join("");n.innerHTML=`<select id="${gg}" class="jprob-selector-select" title="Switch to another problem">${u}</select>`}function BO(r){const e=document.getElementById(OO);if(!e)return;const{prev:n,next:t,version:i}=r;if(n===void 0&&t===void 0){e.hidden=!0,e.innerHTML="";return}e.hidden=!1;const u=[];n!==void 0&&u.push(`<button class="timeline-nav-btn" data-timeline-target="${n}" title="Previous version">◀</button>`),u.push(`<span class="timeline-version">${i??""}</span>`),t!==void 0&&u.push(`<button class="timeline-nav-btn" data-timeline-target="${t}" title="Next version">▶</button>`),e.innerHTML=u.join("")}function UO(r){const e=document.getElementById("options-controls");if(!e)return;const n=e.classList.contains("options-panel-open");let i=`<button class="options-expand-btn${n?" active":""}" id="options-expand-btn">settings ${n?"▴":"▾"}</button>`;i+=`<div class="options-panel${n?" visible":""}">`,i+=YO(r),i+=`<div class="options-buttons-row"><button id="keymap-btn" class="g-btn">keymap</button> <button id="${yg}" class="g-btn">error console</button> <button id="save-all-data-btn" class="g-btn">save all data</button> <button id="load-all-data-btn" class="g-btn">load all data</button></div>`,i+="</div>",e.innerHTML=i,n&&e.classList.add("options-panel-open")}function WO(){const r=document.getElementById("options-controls");if(!r)return;r.classList.toggle("options-panel-open");const e=r.querySelector(".options-expand-btn"),n=r.querySelector(".options-panel");if(!e||!n)return;const t=r.classList.contains("options-panel-open");e.textContent=t?"settings ▴":"settings ▾",e.classList.toggle("active",t),n.classList.toggle("visible",t)}function GO(){const r=document.getElementById("options-controls");if(!r||!r.classList.contains("options-panel-open"))return;r.classList.remove("options-panel-open");const e=r.querySelector(".options-expand-btn"),n=r.querySelector(".options-panel");e&&(e.textContent="settings ▾",e.classList.remove("active")),n&&n.classList.remove("visible")}function VO(r,e){const n=document.getElementById("response-type-toggle");n&&Eg(n,r,e)}function Eg(r,e,n){const t=[];for(const[i,u]of Object.entries(FO)){const o=i===e.ui.inputMode?" active":"",a=n[i]?"":" hidden";t.push(`<button class="atog-btn${o}${a}" data-mode="${i}">${u}</button>`)}r.innerHTML="<span>response type</span>"+t.join("")}const XO=new Set(["inputMode"]);function YO(r){const e=[];for(const n of h_)if(!XO.has(n.id)){if(n.type==="boolean"){const t=n.id,i=r.ui[t]?" checked":"";e.push(`<div class="options-pref-row"><label for="pref-${n.id}" class="option-label">${n.description}</label><input id="pref-${n.id}" class="option-checkbox pref-checkbox" type="checkbox" data-pref="${n.id}"${i}></div>`)}else if(n.type==="integer"){const i=sr()[n.id]??n.default;e.push(`<div class="options-pref-row"><label for="pref-${n.id}" class="option-label">${n.description}</label><input id="pref-${n.id}" class="pref-number-input" type="number" data-pref-int="${n.id}" value="${i}" min="1000" step="1000"></div>`)}}return e.join("")}const Ob="keymap-popover",KO=70,jO=620,zO=16;function JO(){return Yn}function ZO(r){const e=window.innerWidth,n=window.innerHeight,t=Math.min(jO,Math.round(e*KO/100)),i=n-2*zO;r.style.width=`${t}px`,r.style.maxHeight=`${i}px`;const u=Math.min(r.offsetHeight,i);r.style.left=`${Math.round((e-t)/2)}px`,r.style.top=`${Math.round((n-u)/2)}px`}function Gt(r,e){r.classList.toggle("keymap-row-invalid",e!=="");const n=r.querySelector(".keymap-error");n&&(n.textContent=e)}function QO(r){const e=Kn();r.innerHTML="";for(const n of JO()){const t=document.createElement("div");t.className="keymap-row";const i=document.createElement("label");i.className="keymap-label",i.htmlFor=`keymap-input-${n.id}`,i.textContent=n.description;const u=document.createElement("input");u.id=`keymap-input-${n.id}`,u.className="keymap-input",u.type="text",u.maxLength=1,u.autocomplete="off",u.spellcheck=!1,u.value=e[n.id]??"",u.dataset.shortcutId=n.id,u.setAttribute("aria-label",`${n.description} shortcut key`);const o=document.createElement("div");o.className="keymap-error",u.addEventListener("input",()=>{const a=u.dataset.shortcutId,c=d2(u.value);if(!c.ok){Gt(t,c.error??"Invalid shortcut key.");return}const s=Y9(a,c.key);if(s){const f=Yn.find(d=>d.id===s);Gt(t,`Already assigned to "${(f==null?void 0:f.description)??s}".`);return}const l=_F(a,c.key);if(!l.ok){Gt(t,l.error??"Invalid shortcut key.");return}u.value=l.key,Gt(t,"")}),t.appendChild(i),t.appendChild(u),t.appendChild(o),r.appendChild(t)}}function eD(){var u;(u=document.getElementById(Ob))==null||u.remove();const r=document.createElement("div");r.id=Ob,r.className="keymap-popover",r.tabIndex=-1;const e=document.createElement("button");e.className="help-widget-close",e.type="button",e.textContent="×",e.setAttribute("aria-label","Close");const n=document.createElement("h3");n.className="keymap-title",n.textContent="Keymap";const t=document.createElement("div");t.className="keymap-body",QO(t);function i(){r.remove()}e.addEventListener("click",i),r.addEventListener("keydown",o=>{o.key==="Escape"&&i()}),r.appendChild(e),r.appendChild(n),r.appendChild(t),document.body.appendChild(r),ZO(r),r.focus()}const ad="stats-display-select",rD=["probability","odds"],nD="Mean, median, and credible interval probabilities displayed as odds",tD="Computed probabilities displayed as odds";function iD(r){const e=dn($e(r.ui.whose).source);return e==="plaincode"||e==="richcode"||r.ui.inputMode==="sample"}function uD(r){return r?Object.values(r).some(e=>e.typeHighlevel==="probability"):!1}function oD(r,e,n){if(!uD(n)){r.innerHTML="";return}const t=e.ui.probAsOdds,i=rD.map(a=>`<option value="${a}"${a===t?" selected":""}>${a}</option>`).join(""),u=iD(e)?nD:tD,o=t==="odds"?`<p class="stats-display-odds-note"><strong>${u}</strong></p>`:"";r.innerHTML=`<div class="stats-display-row"><label for="${ad}">stats display</label><select id="${ad}">${i}</select></div>`+o}const aD="srcquote-explainer",B1="srcquote-pinned";function sD(){return ui[aD]}function cD(r,e,n){r.innerHTML=`<div class="srcquote-explainer">${ke(sD(),n)}</div>`}function U1(r,e){const n=r.querySelector(`.${x_}`),t=r.querySelector(`.${Ad}`);n&&(n.hidden=!e),t&&t.setAttribute("aria-expanded",String(e))}function W1(r){return r instanceof Element?r.closest(`.${H_}`):null}function lD(r,e){return e instanceof Node&&r.contains(e)}function fD(){const r=t=>{const i=W1(t.target);i&&U1(i,!0)},e=t=>{const i=W1(t.target);i&&(lD(i,t.relatedTarget)||i.classList.contains(B1)||U1(i,!1))},n=t=>{const i=t.target,u=i instanceof Element?i.closest(`.${Ad}`):null;if(!u)return;const o=W1(u);if(!o)return;const a=!o.classList.contains(B1);o.classList.toggle(B1,a),U1(o,a)};return document.addEventListener("mouseover",r),document.addEventListener("mouseout",e),document.addEventListener("focusin",r),document.addEventListener("focusout",e),document.addEventListener("click",n),()=>{document.removeEventListener("mouseover",r),document.removeEventListener("mouseout",e),document.removeEventListener("focusin",r),document.removeEventListener("focusout",e),document.removeEventListener("click",n)}}function Db(r,e,n){if(n==="Bool"&&e.type==="checkbox")return e.checked===!0;const t=md(r,e.value);if(typeof t=="object")throw new Error(`Invalid scalar control parser use for ${r.id}`);return t}function dD(r,e){const n=e.map(t=>{if(t.type!=="checkbox")throw new Error(`Invalid MultiStringFromSet control for ${r.id}: expected checkbox`);return t.checked===!0?t.value:void 0}).filter(t=>t!==void 0);return md(r,n)}function $g(r,e){let n=`<span class="cparam-or-aopt-name">${se(r)}</span>`;return e.longname&&(n+=` <span class="cparam-or-aopt-longname">(${se(e.longname)})</span>`),n}function wg(r,e,n,t,i){const u=`${t.dataAttribute}="${He(r)}"`;if(i==="StringFromSet"){if(!Array.isArray(e.allowed_values))throw new Error(`StringFromSet option ${e.id} is missing allowed_values`);const s=e.allowed_values.map(l=>{const f=String(l),d=f===String(n)?" selected":"";return`<option value="${He(f)}"${d}>${se(f)}</option>`}).join("");return`<select class="${t.selectClass}" ${u}>${s}</select>`}if(i==="Number")return`<input class="${t.inputClass}" type="number" ${u} value="${He(String(n))}">`;if(i==="Bool"){const s=n?" checked":"";return`<input class="${t.checkboxClass??t.inputClass}" type="checkbox" ${u}${s}>`}if(i==="FreeString")return`<input class="${[t.inputClass,t.textInputClass].filter(Boolean).join(" ")}" type="text" ${u} value="${He(String(n))}">`;if(!Array.isArray(e.allowed_values))throw new Error(`MultiStringFromSet option ${e.id} is missing allowed_values`);if(!Array.isArray(n))throw new Error(`MultiStringFromSet option ${e.id} has a non-array current value`);const o=new Set(n),a=t.checkboxClass??t.inputClass,c=e.allowed_values.map(s=>{if(typeof s!="string")throw new Error(`MultiStringFromSet option ${e.id} has a non-string allowed value`);const l=o.has(s)?" checked":"";return`<label><input class="${a}" type="checkbox" ${u} value="${He(s)}"${l}> <span>${se(s)}</span></label>`}).join("");return`<span class="${t.checkboxGroupClass??""}">${c}</span>`}const pD="Parameters",hD="Fixed Parameters",vD="Free Parameters";function mD(r,e,n,t,i,u,o){const a=r.filter(Y1);if(a.length===0)return{headerText:"",bodyHtml:""};const{source:c}=$e(e),s=dn(c)!=="plainnum",l=nr(c)==="yours",f=s?vD:l?pD:hD,d=t??se;let h="";if(!s&&i&&u){const v=bD(a,n);v!==null&&!i(v)&&(h=`<p class="arg-warning">${d(u)}</p>`)}const p=[];for(const v of a){const m=Fe(v.id),b=d(v.defn),g=(o==null?void 0:o(v))??{atStart:"",atEnd:""},y=n[m]??v.default_value;if(typeof y=="object")throw new Error(`Cparam ${v.id} has a non-scalar current value`);let _=$g(m,v);s||(l?_+=" = "+_D(m,v,y):_+=` <span class="cparam-or-aopt-value">= ${se(String(y))}</span>`),p.push(`<div class="cparam-or-aopt" id="opt-${m}"><div class="cparam-or-aopt-header">${_}</div><div class="cparam-or-aopt-defn">${g.atStart}${b}${g.atEnd}</div></div>`)}return{headerText:f,bodyHtml:h+p.join("")}}function bD(r,e){const n={};for(const t of r){const i=Fe(t.id),u=e[i]??t.default_value,o=Number(u);if(!Number.isFinite(o))return null;n[i]=o}return n}function _D(r,e,n){if(Array.isArray(e.allowed_values)||typeof e.default_value=="number"){const t=Array.isArray(e.allowed_values)?"StringFromSet":"Number";return wg(r,e,n,{dataAttribute:"data-cparam-body",selectClass:"cparam-body-select",inputClass:"cparam-body-input"},t)}return`<span class="cparam-or-aopt-value">${se(String(n))}</span>`}function gD(r,e,n,t,i,u){const{headerText:o,bodyHtml:a}=mD(e.get_cparams(),t.ui.whose,n.displayOptionValues,l=>ke(l,n),i,u,l=>Mr(l.srcquotes,n)),c=document.getElementById("cparams-section");if(!a){r.innerHTML="",c&&(c.hidden=!0);return}c&&(c.hidden=!1);const s=document.getElementById("cparams-section-header");s&&(s.textContent=o),r.innerHTML=a}const yD=["VISIBLE_AOPTS","TRIAL_CHOICE_AOPTS"],ED={dataAttribute:"data-aopt-body",selectClass:"aopt-body-select",inputClass:"aopt-body-input",textInputClass:"aopt-body-text-input",checkboxClass:"aopt-body-checkbox",checkboxGroupClass:"aopt-body-checkbox-group"};function $D(r,e,n,t,i=se,u){const o=je(n),a=e==="TRIAL_CHOICE_AOPTS",c=[];for(const s of r){if(!hd(s)||s.trial_choice!==a)continue;const l=Fe(s.id),f=t[l]??s.default_value,d=(u==null?void 0:u(s))??{atStart:"",atEnd:""};let h=$g(l,s);const p=s.input_type==="MultiStringFromSet"?1:2,v=Array.isArray(s.allowed_values)&&s.allowed_values.length>=p;if(o&&(v||s.allowed_values===void 0))h+=" = "+wg(l,s,f,ED,s.input_type);else{const b=Array.isArray(f)?f.join(", "):String(f);h+=` <span class="cparam-or-aopt-value">= ${se(b)}</span>`}c.push(`<div class="cparam-or-aopt" id="opt-${He(l)}"><div class="cparam-or-aopt-header">${h}</div><div class="cparam-or-aopt-defn">${d.atStart}${i(s.defn)}${d.atEnd}</div></div>`)}return c.join("")}function wD(r,e,n,t,i){const u=$D(n.get_aopts(),e,i.ui.whose,t.displayOptionValues,a=>ke(a,t),a=>Mr(a.srcquotes,t)),o=document.getElementById(`${hi[e]}-section`);if(!u){r.innerHTML="",o&&(o.hidden=!0);return}o&&(o.hidden=!1),r.innerHTML=u}const Tb={point:"point",bounds:"bounds",distr:"sample"},Pb=["probability","odds"],Hb=["yours-plainnum","yours-plaincode","adhoc-plainnum","adhoc-plaincode","metho-plainnum","metho-plaincode","metho-richcode"];function AD(r,e,n){const t={},i=[],u=r.get("response_type");if(u!==null){const s=Tb[u];s!==void 0?t.inputMode=s:i.push(`response_type=${JSON.stringify(u)} invalid; expected one of: ${Object.keys(Tb).join(", ")}`)}RD(r.get("whose"),r.get("preset"),e,n,t,i);const o=r.get("preset_query_mode");o!==null&&SD(o,n,t,i);const a=r.get("trial_index");if(a!==null){const s=Ag(a);s===null?i.push(`trial_index=${JSON.stringify(a)} is not a non-negative integer`):t.assumptionTrialIndex=s}const c=r.get("prob_as_odds");return c!==null&&(Pb.includes(c)?t.probAsOdds=c:i.push(`prob_as_odds=${JSON.stringify(c)} invalid; expected one of: ${Pb.join(", ")}`)),{overrides:t,errors:i}}function SD(r,e,n,t){if(!D7(r)){t.push(`preset_query_mode=${JSON.stringify(r)} invalid; expected one of: all, ${Hi.join(", ")}`);return}if(r!=="all"&&!xd(e).includes(r)){t.push(`preset_query_mode=${JSON.stringify(r)} unavailable for current methodical data`);return}n.presetQueryModeFilter=r}function RD(r,e,n,t,i,u){if(r===null&&e===null)return;if(r===null){u.push(`preset=${JSON.stringify(e)} given without whose`);return}if(!Hb.includes(r)){u.push(`whose=${JSON.stringify(r)} invalid; expected one of: ${Hb.join(", ")}`);return}if(r.startsWith("yours-")){if(e!==null){u.push(`preset=${JSON.stringify(e)} incompatible with whose=${r} (preset is only valid for adhoc-* or metho-*)`);return}i.whose=r;return}if(e===null){u.push(`whose=${r} requires preset`);return}const o=Ag(e);if(o===null){u.push(`preset=${JSON.stringify(e)} is not a non-negative integer`);return}const a=kD(r,o,n,t);a.error!==null?u.push(a.error):i.whose=a.whose}function kD(r,e,n,t){if(r==="adhoc-plainnum")return e>=n.adhocPlainnumEntries.length?{error:`preset=${e} out of range; ${n.adhocPlainnumEntries.length} adhoc-plainnum entr${n.adhocPlainnumEntries.length===1?"y":"ies"} available`}:{whose:`adhoc-plainnum:${e}`,error:null};if(r==="adhoc-plaincode")return e>=n.adhocPlaincodeEntries.length?{error:`preset=${e} out of range; ${n.adhocPlaincodeEntries.length} adhoc-plaincode entr${n.adhocPlaincodeEntries.length===1?"y":"ies"} available`}:{whose:`adhoc-plaincode:${e}`,error:null};if(e>=t.length)return{error:`preset=${e} out of range; ${t.length} methodical group${t.length===1?"":"s"} available`};const i=t[e],u=r.slice(6),o=u==="plainnum"?i.plainnumIndex:u==="plaincode"?i.plaincodeIndex:i.richcodeIndex;return o===null?{error:`preset=${e} (group: ${i.label}) has no ${u} result; available mode${i.availableModes.length===1?"":"s"}: ${i.availableModes.join(", ")}`}:{whose:`metho-${u}:${o}`,error:null}}function Ag(r){if(r===""||/\D/.test(r))return null;const e=parseInt(r,10);return!Number.isInteger(e)||e<0?null:e}function LD(r,e,n){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search),{overrides:i,errors:u}=AD(t,e,n);for(const o of u)console.error(`[url_view_overrides] ${o}`);if(i.inputMode!==void 0&&(r.ui.inputMode=i.inputMode),i.probAsOdds!==void 0&&(r.ui.probAsOdds=i.probAsOdds),i.assumptionTrialIndex!==void 0&&(r.ui.assumptionTrialIndex=i.assumptionTrialIndex),i.presetQueryModeFilter!==void 0&&(r.ui.presetQueryModeFilter=i.presetQueryModeFilter),i.whose!==void 0){r.ui.whose=i.whose,(i.whose==="yours-plainnum"||i.whose==="yours-plaincode")&&(r.ui.lastYoursWhose=i.whose);const o=nr($e(i.whose).source);o==="adhoc"?r.ui.lastAdhocWhose=i.whose:o==="metho"&&(r.ui.lastMethoWhose=i.whose)}}function Wr(r){if(typeof window>"u")return;const e=new URL(window.location.href);if(!e.searchParams.has(r))return;e.searchParams.delete(r);const n=e.searchParams.toString(),t=`${e.pathname}${n?"?"+n:""}${e.hash}`;window.history.replaceState(null,"",t)}const CD=["yours","adhoc","metho"];function ID(r,e,n){const t=e.adhocPlainnumEntries.length>0||e.adhocPlaincodeEntries.length>0,i=n.length>0,u=["yours"];if(t&&u.push("adhoc"),i&&u.push("metho"),u.length<2)return null;const o=nr($e(r.whose).source);if(!CD.includes(o))throw new Error(`nextWhoseForModeCycle: unrecognized whose ${JSON.stringify(r.whose)}`);const a=u.indexOf(o),c=u[(a+1)%u.length];return c==="yours"?r.lastYoursWhose:c==="adhoc"?xb(r.lastAdhocWhose,"adhoc",e)?r.lastAdhocWhose:qD(e):xb(r.lastMethoWhose,"metho",e)?r.lastMethoWhose:T7(n,r.presetQueryModeFilter)}function qD(r){for(const e of g_)if(y_(r,e).length>0)return`adhoc-${e}:0`;throw new Error("firstAdhocWhose: adhoc mode reached with no adhoc entries")}function xb(r,e,n){return!r||nr($e(r).source)!==e?!1:Ze(r,n)!==null}function MD(r,e){for(const n of r.querySelectorAll(`.${z1}`)){const t=n.dataset.bareid,i=n.dataset.mname;if(t===void 0||i===void 0)throw new Error("Toggleable symbol ref is missing data-bareid or data-mname.");n.textContent=e?i:t}}function Zr(r,e){r.classList.add(e)}function Qr(r,e){r.classList.remove(e)}function Bb(r,e){return r.classList.contains(e)}const Sg="littlefoot__tooltip";function Rg(r,e){var n,t;return((t=(n=r.ownerDocument)===null||n===void 0?void 0:n.defaultView)!==null&&t!==void 0?t:window).getComputedStyle(r).getPropertyValue(e)||""}function L2(r,e){const n=Number.parseFloat(Rg(r,e));return Number.isNaN(n)?0:n}function sd(r){const e=L2(r,"margin-left"),n=r.offsetWidth-e;return(r.getBoundingClientRect().left+n/2)/window.innerWidth}function ND(r,e,n){const[t,i]=(function(u,o){const a=L2(o,"margin-top"),c=2*a+o.offsetHeight,s=u.getBoundingClientRect().top+u.offsetHeight/2,l=window.innerHeight-s;return l>=c||l>=s?["below",l-a-15]:["above",s-a-15]})(e,r);if(n!==t){Qr(r,"is-"+n),Zr(r,"is-"+t);const u=100*sd(e)+"%",o=t==="above"?"100%":"0";r.style.transformOrigin=u+" "+o}return[t,i]}const et="is-active",rt="is-changing",Ub="is-scrollable";function FD({id:r,button:e,content:n,host:t,popover:i,wrapper:u}){let o=0,a="above";const c=()=>document.body.contains(i);return{id:r,activate:s=>{e.setAttribute("aria-expanded","true"),Zr(e,rt),Zr(e,et),e.insertAdjacentElement("afterend",i),i.style.maxWidth=document.body.clientWidth+"px",o=(function(l){const f=Rg(l,"max-height");if(f===""||f==="none")return Number.POSITIVE_INFINITY;const d=Number.parseFloat(f);return Number.isNaN(d)?Number.POSITIVE_INFINITY:Math.round(d)})(n),s==null||s(i,e)},dismiss:s=>{e.setAttribute("aria-expanded","false"),Zr(e,rt),Qr(e,et),Qr(i,et),s==null||s(i,e)},isActive:()=>Bb(e,et),isReady:()=>!Bb(e,rt),ready:()=>{Zr(i,et),Qr(e,rt)},remove:()=>{i.remove(),Qr(e,rt)},reposition:()=>{if(c()){const[s,l]=ND(i,e,a);a=s,n.style.maxHeight=Math.min(o,l)+"px",i.offsetHeight<n.scrollHeight?(Zr(i,Ub),n.setAttribute("tabindex","0")):(Qr(i,Ub),n.removeAttribute("tabindex"))}},resize:()=>{c()&&(i.style.left=(function(s,l){const f=s.offsetWidth;return-sd(l)*f+L2(l,"margin-left")+l.offsetWidth/2})(n,e)+"px",u.style.maxWidth=n.offsetWidth+"px",(function(s,l){const f=s.querySelector("."+Sg);f&&(f.style.left=100*sd(l)+"%")})(i,e))},destroy:()=>t.remove()}}function cd(r,e=0){let n,t=0;return function(...i){const u=Date.now(),o=Math.max(0,t+e-u);if(o===0)return t=u,void r.apply(this,i);n!==void 0&&window.clearTimeout(n),n=window.setTimeout((()=>{t=Date.now(),n=void 0,r.apply(this,i)}),o)}}const Wb="is-fully-scrolled",OD=r=>e=>{const n=e.currentTarget,t=-e.deltaY;t>0&&Qr(r,Wb),n&&t<=0&&t<n.clientHeight+n.scrollTop-n.scrollHeight&&Zr(r,Wb)},kg="littlefoot__content",Lg="littlefoot__wrapper",vi="littlefoot--print",Cg=(...r)=>r.forEach((e=>{Zr(e,vi)}));function it(r,e){return Array.from(r.querySelectorAll(e))}function Gb(r,e){return r.querySelector("."+e)||r.firstElementChild||r}function ld(r){const e=document.createElement("div");e.innerHTML=r;const n=e.firstElementChild;return n.remove(),n}function DD(r){return r!==void 0}function Ig(r){const e=r.parentElement,n=it(e,":scope > :not(."+vi+")"),t=n.filter((i=>i.tagName==="HR"));n.length===t.length&&(Cg(...t.concat(e)),Ig(e))}function qg(r,e){const n=r.parentElement;r.remove(),n&&n!==e&&!n.innerHTML.replace(/(\[\]|&nbsp;|\s)/g,"")&&qg(n,e)}function TD([r,e,n],t){const i=ld(n.outerHTML);it(i,'[href$="#'+r+'"]').forEach((o=>{qg(o,i)}));const u=i.innerHTML.trim();return[e,n,{id:String(t+1),number:t+1,reference:"lf-"+r,content:u.startsWith("<")?u:"<p>"+u+"</p>"}]}function Vb(r){return e=>r.replace(/<%=?\s*(\w+?)\s*%>/g,((n,t)=>{var i;return String((i=e[t])!==null&&i!==void 0?i:"")}))}function PD(r,e){const n=Vb(r),t=Vb(e);return([i,u])=>{const o=u.id,a=ld('<span class="littlefoot">'+n(u)+"</span>"),c=a.firstElementChild;c.setAttribute("aria-expanded","false"),c.dataset.footnoteButton="",c.dataset.footnoteId=o;const s=ld(t(u));s.dataset.footnotePopover="",s.dataset.footnoteId=o;const l=Gb(s,Lg),f=Gb(s,kg);return(function(d,h){d.addEventListener("wheel",cd(OD(h),16))})(f,s),i.insertAdjacentElement("beforebegin",a),{id:o,button:c,host:a,popover:s,content:f,wrapper:l}}}function HD({allowDuplicates:r,anchorParentSelector:e,anchorPattern:n,buttonTemplate:t,contentTemplate:i,footnoteSelector:u,numberResetSelector:o,scope:a}){const c=(function(s,l,f){return it(s,f+' a[href*="#"]').filter((d=>(d.href+d.rel).match(l)))})(document,n,a).map((function(s,l,f,d){const h=[];return p=>{var v;const m=p.href.split("#")[1];if(!m)return;const b=(v=it(s,"#"+window.CSS.escape(m)).find((y=>l||!h.includes(y))))===null||v===void 0?void 0:v.closest(d);if(!b)return;h.push(b);const g=p.closest(f)||p;return[g.id||p.id,g,b]}})(document,r,e,u)).filter(DD).map(TD).map(o?(function(s){let l=0,f=null;return([d,h,p])=>{const v=d.closest(s);return l=f===v?l+1:1,f=v,[d,h,Object.assign(Object.assign({},p),{number:l})]}})(o):s=>s).map((([s,l,f])=>(Cg(s,l),Ig(l),[s,f]))).map(PD(t,i)).map(FD);return{footnotes:c,unmount(){c.forEach((s=>{s.destroy()})),it(document,"."+vi).forEach((s=>{Qr(s,vi)}))}}}const fd="[data-footnote-id]",dd=(r,e)=>r.target.closest(e),Mg=r=>r==null?void 0:r.dataset.footnoteId,Xb=r=>e=>{e.preventDefault();const n=dd(e,fd),t=Mg(n);t&&r(t)},nt=document.addEventListener,Yb=window.addEventListener,Kb=(r,e,n,t)=>nt(r,(i=>{const u=i.target;u!=null&&u.closest(e)&&n.call(u,i)}),t),xD={activateDelay:100,activateOnHover:!1,allowDuplicates:!0,allowMultiple:!1,anchorParentSelector:"sup",anchorPattern:/(fn|footnote|note)[:\-_\d]/gi,dismissDelay:100,dismissOnUnhover:!1,dismissOnDocumentTouch:!0,footnoteSelector:"li",hoverDelay:250,numberResetSelector:"",scope:"",contentTemplate:`<aside class="littlefoot__popover" id="fncontent:<% id %>"><div class="${Lg}"><div class="${kg}"><% content %></div></div><div class="${Sg}"></div></aside>`,buttonTemplate:'<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>"><svg role="img" aria-labelledby="title-<% reference %>" viewbox="0 0 31 6" preserveAspectRatio="xMidYMid"><title id="title-<% reference %>">Footnote <% number %></title><circle r="3" cx="3" cy="3" fill="white"></circle><circle r="3" cx="15" cy="3" fill="white"></circle><circle r="3" cx="27" cy="3" fill="white"></circle></svg></button>'};function BD(r={}){const e=Object.assign(Object.assign({},xD),r),n=(function({footnotes:i,unmount:u},o){let a;const c=d=>h=>{h.isReady()&&(h.dismiss(o.dismissCallback),setTimeout(h.remove,d))},s=d=>h=>{o.allowMultiple||i.filter((p=>p.id!==h.id)).forEach(c(o.dismissDelay)),h.isReady()&&(h.activate(o.activateCallback),h.reposition(),h.resize(),setTimeout(h.ready,d))},l=d=>h=>{const p=i.find((v=>v.id===h));p&&d(p)},f=()=>i.forEach(c(o.dismissDelay));return{activate:(d,h)=>l(s(h))(d),dismiss:(d,h)=>l(c(h))(d),dismissAll:f,touchOutside:()=>{o.dismissOnDocumentTouch&&f()},repositionAll:()=>i.forEach((d=>{d.reposition()})),resizeAll:()=>i.forEach((d=>{d.resize()})),toggle:l((d=>d.isActive()?c(o.dismissDelay)(d):s(o.activateDelay)(d))),hover:l((d=>{a=d.id,o.activateOnHover&&!d.isActive()&&s(o.hoverDelay)(d)})),unhover:l((d=>{d.id===a&&(a=null),o.dismissOnUnhover&&setTimeout((()=>i.filter((h=>h.id!==a)).forEach(c(o.dismissDelay))),o.hoverDelay)})),unmount:u}})(HD(e),e),t=(function(i){const u=d=>{const h=dd(d,"[data-footnote-button]"),p=Mg(h);p?(d.preventDefault(),i.toggle(p)):dd(d,"[data-footnote-popover]")||i.touchOutside()},o=cd(i.repositionAll,16),a=cd(i.resizeAll,16),c=Xb(i.hover),s=Xb(i.unhover),l=new AbortController,f={signal:l.signal};return nt("touchend",u,f),nt("click",u,f),nt("keyup",(d=>{d.keyCode!==27&&d.key!=="Escape"&&d.key!=="Esc"||i.dismissAll()}),f),nt("gestureend",o,f),Yb("scroll",o,f),Yb("resize",a,f),Kb("mouseover",fd,c,f),Kb("mouseout",fd,s,f),()=>{l.abort()}})(n);return{activate(i,u=e.activateDelay){n.activate(i,u)},dismiss(i,u=e.dismissDelay){i===void 0?n.dismissAll():n.dismiss(i,u)},unmount(){t(),n.unmount()},getSetting:i=>e[i],updateSetting(i,u){e[i]=u}}}function UD(r,e){const n=document.getElementById(r);if(!n)throw new Error(`Viewport anchor #${r} not found before render`);const t=n.getBoundingClientRect().top,i=document.activeElement===n;e();const u=document.getElementById(r);if(!u)throw new Error(`Viewport anchor #${r} was not replaced during render`);i&&u.focus({preventScroll:!0});const a=u.getBoundingClientRect().top-t;a!==0&&window.scrollBy(0,a)}function WD(r){const e=r.getWhose();try{r.renderCurrentView();return}catch(n){if(!r.shouldRecover(e))throw n;try{r.switchToSafeYours(e),r.renderSafeYoursView()}catch(t){throw new AggregateError([n,t],`View ${JSON.stringify(e)} failed, and the fail-safe Yours view also failed`)}r.recovered(e,n)}}let H,M,ve,Er,fr,Vr,qn,vt,G1=null,jt=0,Cr=null;const jb="calculator-section",zb="yours-plainnum";function ST(r){yE(),Ng(r),ZD(),eT(),EF(XD()),fD(),window.addEventListener("resize",Hg),ay(ir)}function Ng(r){jt++,Cr==null||Cr.abort(),Cr=null,OC(),H=by(r.jpdefn),M=vE(H);const e=r.adhocPresets??[],n=Xy(e);ve={adhocPresets:e,adhocPlainnumEntries:n.plainnum,adhocPlaincodeEntries:n.plaincode,plainnumResults:jy(r.plainnumResults??[]),plaincodeResults:zy(r.plaincodeResults??[]),richcodeResults:Jy(r.richcodeResults??[])},Er=Zy(ve),fr=Wy(r.jpdefn),Vr=r.formRegistry,qn=r.cparamComboFilter,vt=r.cparamFilterDescription,LD(M,ve,Er),M.ui.whose=N2(M.ui.whose),GD(),ir()}function GD(){const r=H.layout.sections.html.find(e=>"chunkid"in e&&e.style==="title");if(r&&"chunkid"in r){const e=H.find_textchunk_defn(r.chunkid);e&&(document.title=e.replace($y,"$1").replace(wy,""))}}const VD=Object.assign({"../../data/covid0/index.ts":()=>rr(()=>import("./index-Cs8Bqd-I.js"),[]),"../../data/eggsFH1/index.ts":()=>rr(()=>import("./index-DSElqs2x.js"),[]),"../../data/eggsFH2/index.ts":()=>rr(()=>import("./index-DWxt1QuK.js"),[]),"../../data/lhcFXH1/index.ts":()=>rr(()=>import("./index-kPtIP-Lu.js"),[]),"../../data/lhcFXH_SolMax/index.ts":()=>rr(()=>import("./index-C2ODO-3u.js"),[]),"../../data/lhcFXH_SolMax_Ultra/index.ts":()=>rr(()=>import("./index-QmDBsDU7.js"),[]),"../../data/mcovidA/index.ts":()=>rr(()=>import("./index-RRqGnS9N.js"),__vite__mapDeps([0,1])),"../../data/mcovidA2/index.ts":()=>rr(()=>import("./index-CDmBlPta.js"),__vite__mapDeps([2,1])),"../../data/mcovidB1/index.ts":()=>rr(()=>import("./index-DE5x3dez.js"),[]),"../../data/mcovidB2/index.ts":()=>rr(()=>import("./index-Bc00_T7Q.js"),__vite__mapDeps([3,1])),"../../data/mcovidB3/index.ts":()=>rr(()=>import("./index-DPHSP0AW.js"),__vite__mapDeps([4,1])),"../../data/mcovidB4/index.ts":()=>rr(()=>import("./index-CSdNTDR4.js"),__vite__mapDeps([5,1])),"../../data/mcovidB5/index.ts":()=>rr(()=>import("./index-5zj-363m.js"),__vite__mapDeps([6,1])),"../../data/mcovidB6/index.ts":()=>rr(()=>import("./index-CMSdCFpk.js"),__vite__mapDeps([7,1])),"../../data/mcovidB7/index.ts":()=>rr(()=>import("./index-DZsd74DW.js"),__vite__mapDeps([8,1]))});function Jb(r){return`../../data/${r}/index.ts`}async function Zb(r){const e=VD[Jb(r)];if(!e)throw new Error(`swapJprob: no manifest module for aid '${r}' (looked for ${Jb(r)}).`);const n=await e(),t=window.location.pathname.replace(/[^/]+\.html$/,`${r}.html`);history.pushState(null,"",t),Ng(n.manifest)}function XD(){return{toggle_mnames:()=>{M.ui.symbolMnames=!M.ui.symbolMnames,qe(H.config,M.ui),ut("symbolMnames",M.ui.symbolMnames),MD(document,M.ui.symbolMnames)},goto_calculator:()=>{const r=document.getElementById(jb);if(!r)throw new Error(`#${jb} not found.`);r.scrollIntoView({block:"start"})},goto_top:()=>{window.scrollTo({top:0})},switch_whose_mode:()=>{const r=ID({whose:M.ui.whose,lastYoursWhose:M.ui.lastYoursWhose,lastAdhocWhose:M.ui.lastAdhocWhose,lastMethoWhose:M.ui.lastMethoWhose,presetQueryModeFilter:M.ui.presetQueryModeFilter},ve,Er);if(r===null)return;const e=M_(N2(r),H.has_cparams());e!==M.ui.whose&&Ur(e)},toggle_srcquotes_inlined:()=>{H.has_srcquotes()&&(M.ui.srcquotesInlinedOverride=gO(M.ui.srcquotesInlinedOverride,Fg().srcquotes_inlined),qe(H.config,M.ui),ir())},toggle_framing_notes:()=>{M.ui.showFramingNotes=!M.ui.showFramingNotes,qe(H.config,M.ui),ut("showFramingNotes",M.ui.showFramingNotes),ir()}}}function Fg(){if(je(M.ui.whose))return M.optionValues;const r=Ze(M.ui.whose,ve);if(!r)return M.optionValues;const e={...M.optionValues};for(const n of H.get_aopts()){const t=Fe(n.id);t in r.aopts&&(e[t]=r.aopts[t])}if("cparam_values"in r&&r.cparam_values)for(const n of H.get_cparams()){const t=Fe(n.id);t in r.cparam_values&&(e[t]=r.cparam_values[t])}return e}function Og(){const r=Fg(),e=r.show_typical_examples,n=hg(M.ui.srcquotesInlinedOverride,r.srcquotes_inlined),t=a_(H,{symbolMnames:M.ui.symbolMnames}),i=J1(H,t),{source:u}=$e(M.ui.whose),o=dn(u);return{jprobInstance:d_(H,p_(H,r,o),o),showTypical:e,refLookup:t,srcquotesInlined:n,showFramingNotes:M.ui.showFramingNotes,displayOptionValues:r,showExampleClassification:M.ui.showExampleClassification,exampleFoldState:M.ui.exampleFoldState,footnoteCounter:{n:0},footnotes:[],popoverLookup:i,popoverAllRefs:M.ui.popoverAllRefs}}function Ct(){return{...Og(),footnoteIdNamespace:DE}}function ir(){C2(Dg)}function C2(r){WD({getWhose:()=>M.ui.whose,shouldRecover:e=>!je(e)||YD(),renderCurrentView:()=>{nE(M.ui.whose,ve),r()},switchToSafeYours:KD,renderSafeYoursView:Dg,recovered:jD})}function YD(){return ve.adhocPresets.length>0||ve.plainnumResults.length>0||ve.plaincodeResults.length>0||ve.richcodeResults.length>0}function KD(r){const e=$e(r).source;M.ui.whose=zb,M.ui.lastYoursWhose=zb,M.ui.modelEffortSweepScope=null,nr(e)==="adhoc"&&(M.ui.lastAdhocWhose=""),nr(e)==="metho"&&(M.ui.lastMethoWhose=""),ve={adhocPresets:[],adhocPlainnumEntries:[],adhocPlaincodeEntries:[],plainnumResults:[],plaincodeResults:[],richcodeResults:[]},Er=[]}function jD(r,e){try{qe(H.config,M.ui)}catch(t){ru("Persisting the fail-safe Yours selection",t)}for(const t of["whose","preset"])try{Wr(t)}catch(i){ru(`Clearing the failed ${t} URL override`,i)}const n=je(r)?"Rendering Yours with loaded result data":`Rendering chosen result ${JSON.stringify(r)}`;ru(`${n}; switched safely to Yours and disabled loaded result data until reload`,e)}function Dg(){sT(M.ui.whose);const r=Og(),e=Ct(),n=document.getElementById("main-content");MO(n,H,r);const t=w_(M.ui.whose,Ze(M.ui.whose,ve));PO(M,{prev:H.config.timeline_prev,next:H.config.timeline_next,version:H.config.timeline_version},t,{currentAid:H.aid,currentFamily:H.config.timeline_family}),JD(r,e,t),QD(n),Hg(),pd(O_,r.footnotes),pd(wd,e.footnotes),Pg(n)}function pd(r,e){const n=document.getElementById(r);if(!n)return;const t=document.getElementById("main-content"),i=e??[],u=t?HE(i,t):i;n.innerHTML=u.length>0?`<ol>${D_(u)}</ol>`:""}function Ki(r){pd(wd,r.footnotes),zD()}function Tg(r){const e=document.querySelector("#calculator-calculator-input .calc-labels");e&&(e.innerHTML=ug(H,r,M.ui.inputMode))}function Pg(r){G1&&G1.unmount(),G1=BD({scope:"#main-content",allowMultiple:M.ui.persistentPopovers,dismissOnDocumentTouch:!M.ui.persistentPopovers,buttonTemplate:`<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>">
  <svg role="img" aria-labelledby="title-<% reference %>" viewbox="0 0 24 6" preserveAspectRatio="xMidYMid">
    <title id="title-<% reference %>">Footnote <% number %></title>
    <circle r="2.5" cx="3" cy="3" fill="white"></circle>
    <circle r="2.5" cx="12" cy="3" fill="white"></circle>
    <circle r="2.5" cx="21" cy="3" fill="white"></circle>
  </svg>
</button>`});for(const e of r.querySelectorAll(".ref-popover[data-fnref]")){const n=e.nextElementSibling;n!=null&&n.classList.contains("littlefoot")&&n.classList.add("lf-popover-ref")}}function zD(){const r=document.getElementById("main-content");r&&Pg(r)}function JD(r,e,n){for(const p of yD){const v=document.getElementById(`${hi[p]}-content`);v&&wD(v,p,H,r,M)}const t=document.getElementById("cparams-content");t&&gD(t,H,r,M,qn,vt);const i=document.getElementById("calculator-whose-toggle");if(i){YC(i,H,ve,M,Er),i.prepend(f2(()=>RF(H,M.ui.whose)));const p=document.createElement("div");p.id="calc-response-type-toggle",i.appendChild(p),Eg(p,M,n)}const u=document.getElementById("calculator-calculator-input"),o=document.getElementById("calculator-calculator-results");u&&o&&(v2(u,o,H,e,M,ve,Vr,qn,vt),zd(o,M2(M,ve)),Jd(o,q2(M,ve),H.get_svar_bare_names()));const a=document.getElementById(mg);a&&oD(a,M,Vr),It(e);const c=document.getElementById("framing-notes-root-content");c&&fF(c,H,r,M.ui),lF(H,r,M.ui);const s=document.getElementById("framing-notes-explainer-content");s&&dF(s,r);const l=document.getElementById("srcquote-explainer-content");l&&cD(l,H,r);const f=document.getElementById("custom-assumptions-content");f&&CF(f,H,r,M,ve);const d=document.getElementById("calculator-yours-saved-list");d&&k2(d,H,M);const h=document.getElementById("calculator-yours-code-input");if(h){const p=$_(M.ui.whose,ve);M.ui.whose==="yours-plaincode"?Fb(h,H,M.yoursCodeRecord,"edit"):p?Fb(h,H,p,"view"):h.innerHTML=""}}function It(r){const e=document.querySelectorAll(".derived-form");if(e.length!==0)for(const n of e){const t=n.dataset.formId;t&&TF(n,t,H,r,M,Vr,ve)}}function ZD(){const r=document.getElementById("sticky-help");r&&r.appendChild(f2(()=>AF(H)))}function Hg(){const r=document.getElementById("sticky-bar");r&&document.documentElement.style.setProperty("--sticky-bar-h",`${r.offsetHeight+4}px`)}function QD(r){const e=document.getElementById("global-example-controls");e&&(e.hidden=r.querySelector(".examples")===null)}function eT(){var e,n,t,i,u,o,a,c;(e=document.getElementById("main-content"))==null||e.addEventListener("click",s=>{const l=s.target.closest(".ref-popover");if(!l)return;const f=l.nextElementSibling;if(!(f!=null&&f.classList.contains("littlefoot")))return;const d=f.querySelector(".littlefoot__button");d&&d.click()}),document.addEventListener("click",s=>{if(!s.target.closest("#response-type-toggle, #calc-response-type-toggle"))return;const f=s.target.closest("[data-mode]");if(!f)return;const d=f.dataset.mode;d!==M.ui.inputMode&&(M.ui.inputMode=d,qe(H.config,M.ui),Wr("response_type"),ir())}),document.addEventListener("change",s=>{const l=s.target;if(l.id!==ad)return;const f=l.value;f!==M.ui.probAsOdds&&(M.ui.probAsOdds=f,qe(H.config,M.ui),Wr("prob_as_odds"),ir())}),document.addEventListener("click",s=>{const l=s.target.closest(".timeline-nav-btn");if(!l)return;const f=l.dataset.timelineTarget;f&&Zb(f)}),document.addEventListener("change",s=>{const l=s.target;if(l.id!==gg)return;const f=l.value;f&&f!==H.aid&&Zb(f)}),(n=document.getElementById("global-example-controls"))==null||n.addEventListener("click",s=>{const l=s.target.closest("[data-action]");if(!l)return;const f=l.dataset.action;ET(f)}),(t=document.getElementById("options-controls"))==null||t.addEventListener("change",s=>{const l=s.target;if(l.dataset.pref){const f=l.dataset.pref,d=l.checked;M.ui[f]=d,qe(H.config,M.ui),ut(f,d),ir();return}if(l.dataset.prefInt){const f=l.dataset.prefInt,d=parseInt(l.value,10);!isNaN(d)&&d>0&&(ut(f,d),ir());return}}),(i=document.getElementById("options-controls"))==null||i.addEventListener("click",s=>{const l=s.target;if(l.id==="options-expand-btn"||l.closest(".options-expand-btn")){WO();return}if(l.id==="keymap-btn"){eD();return}if(l.id===yg){sy();return}if(l.id==="save-all-data-btn"){gT();return}if(l.id==="load-all-data-btn"){yT();return}}),document.addEventListener("click",s=>{const l=s.target,f=document.getElementById("options-controls");f&&!f.contains(l)&&GO()}),(u=document.getElementById("main-content"))==null||u.addEventListener("input",s=>{var f;const l=s.target;if(!l.closest('.yours-code-input[data-variant="view"]')){if(l.classList.contains("code-body-input")){A2(M,H,fr,l.value);return}if(l.classList.contains("code-reasoning-input")){const d=l,h=d.dataset.svar;if(!h)return;rO(M,H,fr,h,d.value);return}if(l.classList.contains("code-misc-input")){nO(M,H,fr,l.value);return}if(!l.classList.contains("rho-custom-input")){if(l.classList.contains("cparam-slider")){const d=l,h=d.dataset.cparam;if(!h)return;const p=JSON.parse(d.dataset.values??"[]"),v=parseInt(d.value),m=p[v];if(m===void 0)return;M.ui.cparamValues[h]=m,qe(H.config,M.ui),V1();const b=document.getElementById("custom-assumptions-content");b&&IF(b,H,M,ve);return}if(l.classList.contains("model-effort-slider")){const d=l,h=JSON.parse(d.dataset.keys??"[]"),p=parseInt(d.value),v=h[p];if(!v)return;const{source:m,index:b}=$e(M.ui.whose);if(m!=="metho-plaincode"&&m!=="metho-richcode")return;const g=m==="metho-plaincode"?ve.plaincodeResults:ve.richcodeResults,y=g[b];if(!y)return;const _=u2(y,M.ui.modelEffortSweepScope),$=o2(y,g,M.ui.modelEffortSweepScope),L=Lt($,v),S=L===null?-1:g.indexOf(L);if(S<0)return;const q=`${m}:${S}`;q!==M.ui.whose&&(M.ui.modelEffortSweepScope=_,Ur(q,!0),(f=document.querySelector("#calculator-calculator-input .model-effort-slider"))==null||f.focus({preventScroll:!0}));return}}}});const r=document.getElementById("main-content");r&&eO(r,{persistCalcTextarea:tT,recomputeAfterCalcTextarea:iT,persistAssumptionCard:uT,recomputeAfterAssumptionCard:oT}),(o=document.getElementById("main-content"))==null||o.addEventListener("click",s=>{const l=s.target;if(l.classList.contains("code-sample-btn")){fT();return}if(l.classList.contains("copy-to-yours-btn")){pT();return}const f=l.closest(".yours-saved-delete");if(f){s.stopPropagation();const _=f.dataset.key,$=f.dataset.kind;_&&cT(_,$??"plainnum");return}const d=l.closest(".yours-saved-row");if(d){const _=d.dataset.key,$=d.dataset.kind;_&&Qb(_,$??"plainnum");return}const h=l.closest(".whose-btn");if(h){const _=h.dataset.whose;_&&_!==M.ui.whose&&Ur(_);return}const p=l.closest(".mode-radio-btn");if(p){const _=p.dataset.whose;if(_&&_!==M.ui.whose){Ur(_);return}const $=p.dataset.mode;if($){const L=Bd(M.ui.whose,Er);if(L){const S=P7(L.group,$);S&&S!==M.ui.whose&&Ur(S)}}return}const v=l.closest(".ex-btn");if(v){bT(v);return}const m=l.closest(".framing-fold-btn");if(m){_T(m);return}const b=l.closest(".assumption-trial-btn");if(b){const _=parseInt(b.dataset.trial??"0");M.ui.assumptionTrialIndex=_,qe(H.config,M.ui),Wr("trial_index");const $=document.getElementById("custom-assumptions-content");$&&MF($,_,Xr(H.input_svar_entries().map(L=>L.decl)));return}const g=l.closest(".rho-btn");if(g){const _=g.dataset.rho;g.classList.contains("code-rho-btn")?M.ui.codeRho=_==="subject"?"subject":parseFloat(_):M.ui.selectedRho=_==="subject"?"subject":parseFloat(_),qe(H.config,M.ui),Rn();return}const y=l.closest(".sweep-mode-btn");if(y){M.ui.codeSweepMode=y.dataset.sweepMode,qe(H.config,M.ui),Rn();return}}),(a=document.getElementById("main-content"))==null||a.addEventListener("keydown",s=>{if(s.key!=="Enter"&&s.key!==" ")return;const l=s.target,f=l.closest(".yours-saved-row");if(!f||l.closest(".yours-saved-delete"))return;s.preventDefault();const d=f.dataset.key,h=f.dataset.kind;d&&Qb(d,h??"plainnum")}),(c=document.getElementById("main-content"))==null||c.addEventListener("change",s=>{const l=s.target;if(l.dataset.aoptBody){const d=l.dataset.aoptBody,h=l,p=H.get_aopt(d);let v;if(p.input_type==="MultiStringFromSet"){const m=l.closest(".cparam-or-aopt");if(m===null)throw new Error(`MultiStringFromSet control for ${d} is outside an option row`);const b=[...m.querySelectorAll("input[data-aopt-body]")].filter(g=>g.dataset.aoptBody===d);if(b.length===0)throw new Error(`MultiStringFromSet option ${d} has no checkbox controls`);v=dD(p,b)}else v=Db(p,h,p.input_type);d==="srcquotes_inlined"&&M.ui.srcquotesInlinedOverride!==null&&(M.ui.srcquotesInlinedOverride=null,qe(H.config,M.ui)),M=K2(M,H,d,v),ir();return}if(l.dataset.cparamBody){const d=l.dataset.cparamBody,h=H.get_cparam(d),p=Db(h,l,Array.isArray(h.allowed_values)?"StringFromSet":"Number");M=K2(M,H,d,p),ir();return}if(l.id==="preset-query-mode-filter"){const d=l.value;if(!D7(d))return;M.ui.presetQueryModeFilter=d;const h=N2(M.ui.whose);if(Wr("preset_query_mode"),h!==M.ui.whose){Ur(h);return}qe(H.config,M.ui),ir();return}const f=l.closest(".whose-select");if(f){let d=f.value;if(d.startsWith("group:")){const h=parseInt(d.slice(6)),p=Er[h];if(!p)return;const v=XC(p,M.ui.presetQueryModeFilter,Er);if(!v)return;d=v}if(d&&d!==M.ui.whose){if(!f.id)throw new Error("Whose-result select must have an id for viewport anchoring");UD(f.id,()=>{Ur(d)})}return}if(l.classList.contains("code-plot-target-kind-radio")){const d=l.value;if(d!=="formula"&&d!=="raw_response")return;M.ui.codePlotTargetKind=d,qe(H.config,M.ui),Rn();return}if(l.classList.contains("code-plot-formula-select")){M.ui.codePlotTargetKind="formula",M.ui.codePlotFormulaId=l.value,qe(H.config,M.ui),Rn();return}if(l.classList.contains("code-plot-raw-response-select")){M.ui.codePlotTargetKind="raw_response",M.ui.codePlotRawResponseName=l.value,qe(H.config,M.ui),Rn();return}if(l.classList.contains("rho-custom-input")){const d=parseFloat(l.value);!isNaN(d)&&d>=0&&d<=1&&(l.classList.contains("code-rho-custom")?M.ui.codeRho=d:M.ui.selectedRho=d,qe(H.config,M.ui),Rn());return}if(l.classList.contains("cparam-pin-checkbox")){const d=l.dataset.cparam;if(!d)return;M.ui.cparamPinned[d]=l.checked,qe(H.config,M.ui),V1();return}if(l.classList.contains("model-effort-pin-checkbox")){M.ui.modelEffortPinned=l.checked,qe(H.config,M.ui),V1();return}})}function rT(){var e;const r=document.querySelector(".calc-textarea");if(r&&document.activeElement!==r){const n=r.dataset.group;n&&(r.value=((e=M.yoursRecord.raw_input)==null?void 0:e[n])??"")}}function nT(){const r=document.getElementById("custom-assumptions-content");r&&NF(r,M,Xr(H.input_svar_entries().map(e=>e.decl)))}function I2(){const r=document.getElementById("calculator-yours-saved-list");r&&k2(r,H,M)}function tT(r){const e=r.dataset.group;if(!e)return;const n=e==="sample"?r.value.split(`
`).map(t=>rg(t)).join(`
`):r.value;w2(M,H,fr,e,n)}function iT(){const r=Ct();Tg(r);const e=document.getElementById("calculator-calculator-results");e&&b2(e,H,r,M,ve,Vr),It(r),nT(),I2(),Ki(r)}function uT(r){if(r.dataset.noncompute){const u=r.dataset.svar;if(!u)return;cg(M,H,fr,u,r.value),I2();return}const e=r.dataset.paramIndex,n=r.dataset.group;if(e==null||!n)return;const t=H.input_svar_entries().length,i=FF(M,parseInt(e),r.value,t);w2(M,H,fr,n,i)}function oT(r){if(r.dataset.noncompute)return;rT(),I2();const e=Ct();Tg(e);const n=document.getElementById("calculator-calculator-results");n&&b2(n,H,e,M,ve,Vr),It(e);const t=document.getElementById("custom-assumptions-content");t&&(h2(t,Xr(H.input_svar_entries().map(i=>i.decl))),tg(t)),Ki(e)}function q2(r,e){if(!e)return[];const{source:n}=$e(r.ui.whose);if(n!=="adhoc-plainnum"&&n!=="metho-plainnum")return[];const t=Ze(r.ui.whose,e);return t?t.trials:[]}function M2(r,e){var n;if(e)return(n=tE(r.ui.whose,e))==null?void 0:n.meta}function Rn(){C2(aT)}function aT(){const r=Ct(),e=document.getElementById("calculator-calculator-input"),n=document.getElementById("calculator-calculator-results");e&&n&&(v2(e,n,H,r,M,ve,Vr,qn,vt),zd(n,M2(M,ve)),Jd(n,q2(M,ve),H.get_svar_bare_names())),It(r),Ki(r)}function V1(){C2(()=>{const r=Ct(),e=document.getElementById("calculator-calculator-input"),n=document.getElementById("calculator-calculator-results");e&&n&&(DF(e,n,H,r,M,ve,Vr,qn,vt),zd(n,M2(M,ve)),Jd(n,q2(M,ve),H.get_svar_bare_names())),It(r),Ki(r)})}function Ur(r,e=!1){M.ui.whose=r,e||(M.ui.modelEffortSweepScope=null),(r==="yours-plainnum"||r==="yours-plaincode")&&(M.ui.lastYoursWhose=r);const n=nr($e(r).source);n==="adhoc"?M.ui.lastAdhocWhose=r:n==="metho"&&(M.ui.lastMethoWhose=r),qe(H.config,M.ui),Wr("whose"),Wr("preset"),ir()}function N2(r){const e=Bd(r,Er);if(!e)return r;const n=xi(M.ui.presetQueryModeFilter,Er);return n==="all"?r:Bi(e.group,n)?P7(e.group,n)??r:T7(Er,n)??r}function sT(r){if(!(je(r)||F8(r,ve,M.ui.inputMode))){for(const e of["sample","bounds","point"])if(F8(r,ve,e)){M.ui.inputMode=e;return}}}function cT(r,e){if(e==="plaincode"){const t=yd(H.aid).find(u=>u.codeOptionDictKey===r);if(!t)return;const i=dg(H,t.record);if(!confirm(`Delete saved estimation?
${i}`))return;aE(H.aid,r)}else{const t=S2(H.aid).find(u=>u.plainnumOptionDictKey===r);if(!t)return;const i=fg(H,t.record)||"(default options)";if(!confirm(`Delete saved estimation?
${i}`))return;tO(H.aid,r)}const n=document.getElementById("calculator-yours-saved-list");n&&k2(n,H,M)}function Qb(r,e){if(e==="plaincode"){const n=yd(H.aid).find(t=>t.codeOptionDictKey===r);if(!n)return;M=oO(M,H,r,n.record)}else{const n=S2(H.aid).find(t=>t.plainnumOptionDictKey===r);if(!n)return;M=uO(M,H,r,n.record)}ir()}const lT=[0,.3,.5,"subject"];async function fT(){const r=jt,e=document.getElementById("calculator-yours-code-input"),n=e==null?void 0:e.querySelector(".code-error-area"),t=e==null?void 0:e.querySelector(".code-status");n&&(n.innerHTML=""),t&&(t.textContent="Running…");const i=e==null?void 0:e.querySelector(".code-body-input"),u=i?i.value:M.yoursCodeRecord.raw_code_input;i&&u!==M.yoursCodeRecord.raw_code_input&&A2(M,H,fr,u);const{names:o,combinations:a}=Ty(H.get_cparams(),qn),c=yO(H.svar),s=sr();try{new Function(...o,u)}catch(y){t&&(t.textContent=""),n&&(n.textContent=`Syntax error: ${y.message}`);return}Cr==null||Cr.abort();const l=new AbortController;Cr=l;let f;try{f=await $O({source:u,cparamNames:o,combinations:a,expectedPointParams:H.get_svar_bare_names(),expectedPbsParams:H.input_svar_entries().map(y=>y.bareName),paramRanges:c},{timeoutMs:s.plaincodeEvalTimeoutMs,signal:l.signal})}catch(y){if(r!==jt||y.message===od)return;if(t&&(t.textContent=""),n){const _=y.message;n.textContent=_===vg?`Timed out after ${s.plaincodeEvalTimeoutMs}ms. Possible infinite loop — check your code.`:`Worker error: ${_}`}return}finally{Cr===l&&(Cr=null)}if(r!==jt)return;if(f.compileError){t&&(t.textContent=""),n&&(n.textContent=`Compile error: ${f.compileError}`);return}const d=dT(H,Vr),h=[],p=H.config.rho_correlation_correction?lT:[0];if(d){const y=d.point,_=d.params,$=mi(H.svar_entries()),L=s.mcItersPlaincodePerCombo;for(const S of f.wellformed){const q={point:S.point,bounds:S.bounds,sample:S.sample,rho:S.rho??null},k={};for(const w of p){const E=N7([q],_,$,y,w,L);k[String(w)]={mean:E.mean,median:E.median,p5:E.p5,p95:E.p95,mc_iters:L}}h.push({cparams:S.cparams,trials:[q],precomputed:k})}}const v=M.yoursCodeRecord;v.verified_code_input=u,v.cparam_names=o,v.cparam_combos=h,v.count=1,v.timestamp=new Date().toISOString(),yi(H,fr,M.codeOptionDictKey,v),M.ui.whose!=="yours-plaincode"&&(M.ui.whose="yours-plaincode",qe(H.config,M.ui),Wr("whose"),Wr("preset")),M.ui.lastYoursWhose="yours-plaincode",ir();const m=document.getElementById("calculator-yours-code-input"),b=m==null?void 0:m.querySelector(".code-status"),g=m==null?void 0:m.querySelector(".code-error-area");if(b&&(b.textContent=""),g&&f.malformed.length>0){const y=f.malformed.slice(0,3).map(_=>`${JSON.stringify(_.cparams)}: ${_.error}`).join(`
`);g.textContent=`${f.wellformed.length}/${f.wellformed.length+f.malformed.length} combinations succeeded. First failures:
${y}`}}function dT(r,e){if(!e)return null;const n=r.config.conclusion_form;return n?e[n]??null:null}function pT(){const{source:r}=$e(M.ui.whose);if(r==="adhoc-plaincode"){hT();return}if(r==="adhoc-plainnum"){mT();return}throw new Error(`Copy to Yours clicked outside an adhoc entry view (whose=${JSON.stringify(M.ui.whose)})`)}function hT(){const r=$_(M.ui.whose,ve);if(!r)throw new Error(`Copy to Yours clicked outside an adhoc-plaincode view (whose=${JSON.stringify(M.ui.whose)})`);confirm(`Copy this entry's code into your Yours editor?
Your current Yours-plaincode code will be overwritten.`)&&(A2(M,H,fr,r.raw_code_input),Ur("yours-plaincode"))}const vT={point:"point",bounds:"bounds",sample:"distribution"};function mT(){const r=Ze(M.ui.whose,ve),e=r==null?void 0:r.trials[0];if(!e)throw new Error(`Copy to Yours clicked without a viewable adhoc-plainnum trial (whose=${JSON.stringify(M.ui.whose)})`);const n=H.input_svar_entries().map(o=>o.bareName),t=A_(e,n);if(t.length===0)throw new Error("Copy to Yours clicked for an entry with no complete response group");const i=t.map(o=>vT[o]).join(" + ");if(confirm(`Copy this entry's ${i} estimates into your Yours inputs?
Your current Yours ${i} input${t.length>1?"s":""} will be overwritten.`)){for(const o of t)w2(M,H,fr,o,iE(e,o,n));for(const o of H.svar_entries()){if(!bt(o.decl))continue;const a=e.point[o.bareName];a!==void 0&&cg(M,H,fr,o.bareName,String(a))}t.includes(M.ui.inputMode)||(M.ui.inputMode=t.includes("sample")?"sample":t.includes("bounds")?"bounds":"point"),Ur("yours-plainnum")}}function bT(r){const e=r.dataset.isym,n=r.dataset.type;if(!e||!n)return;r.classList.toggle("active");const t=r.closest(".isym-card");if(!t)return;const i=t.querySelector(`.examples.${n}`);i&&i.classList.toggle("visible"),M.ui.exampleFoldState[e]||(M.ui.exampleFoldState[e]={pos:!1,neg:!1});const u=n;M.ui.exampleFoldState[e][u]=!M.ui.exampleFoldState[e][u],qe(H.config,M.ui)}function _T(r){const e=r.dataset.framingAnchor,n=r.dataset.framingId;if(!e||!n)return;r.classList.toggle("active");const t=r.closest(".framingnote");t&&(t.classList.toggle("visible"),M.ui.framingFoldState[e]||(M.ui.framingFoldState[e]={}),M.ui.framingFoldState[e][n]=t.classList.contains("visible"),qe(H.config,M.ui))}function gT(){const r=_E(),e=JSON.stringify(r,null,2),n=new Blob([e],{type:"application/json"}),t=URL.createObjectURL(n),i=document.createElement("a"),u=new Date().toISOString().slice(0,10);i.href=t,i.download=`${H.config.localStorage_prefix}-state-${u}.json`,i.click(),URL.revokeObjectURL(t)}function yT(){const r=document.createElement("input");r.type="file",r.accept=".json",r.addEventListener("change",()=>{var n;const e=(n=r.files)==null?void 0:n[0];e&&e.text().then(t=>{let i;try{i=JSON.parse(t)}catch(u){alert(`Invalid JSON: ${u}`);return}if(!i||typeof i!="object"){alert("Expected a JSON object");return}gE(i),window.location.reload()})}),r.click()}function ET(r){const e=document.querySelectorAll(".examples"),n=document.querySelectorAll(".ex-btn");switch(r){case"open":e.forEach(t=>t.classList.add("visible")),n.forEach(t=>t.classList.add("active"));break;case"close":e.forEach(t=>t.classList.remove("visible")),n.forEach(t=>t.classList.remove("active"));break;case"peek":e.forEach(t=>{t.setAttribute("data-was-visible",t.classList.contains("visible")?"1":"0"),t.classList.add("visible")}),n.forEach(t=>{t.setAttribute("data-was-active",t.classList.contains("active")?"1":"0"),t.classList.add("active")});break;case"unpeek":e.forEach(t=>{t.getAttribute("data-was-visible")==="0"&&t.classList.remove("visible")}),n.forEach(t=>{t.getAttribute("data-was-active")==="0"&&t.classList.remove("active")});break}}export{ST as initApp,Zb as swapJprob,QD as syncGlobalExampleControlsVisibility};
