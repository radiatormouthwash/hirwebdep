const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CoXL0jFk.js","assets/form_types-DiFMbLbH.js","assets/index-Yk3x28Qz.js","assets/index-CxbX9aVq.js","assets/index-tfJhK3PN.js","assets/index-eEktI5xG.js","assets/index-BYj8B2Jm.js","assets/index-DU6mr9sE.js"])))=>i.map(i=>d[i]);
var kR=Object.defineProperty;var NR=(e,n,t)=>n in e?kR(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var De=(e,n,t)=>NR(e,typeof n!="symbol"?n+"":n,t);import{b as Di,a as MR,f as AE,c as wE}from"./form_types-DiFMbLbH.js";import{_ as Ye,r as Ut,s as OR,a as PR}from"./app_bootstrap-DrcZreQC.js";const Jt={lo:0,hi:1,loClosed:!0,hiClosed:!0};function yr(e,n){return!(e.lo!==null&&(e.loClosed?n<e.lo:n<=e.lo)||e.hi!==null&&(e.hiClosed?n>e.hi:n>=e.hi))}function Yo(e){const n=e.loClosed&&e.lo!==null?"[":"(",t=e.hiClosed&&e.hi!==null?"]":")";return`${n}${e.lo??"-inf"}, ${e.hi??"inf"}${t}`}const qR={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]};function $E(e){var i;const[n,t]=qR[e.type_mathlevel]??[!0,!0],r=((i=e.type_detail)==null?void 0:i.range)??[0,1];return{lo:r[0],hi:r[1],loClosed:n,hiClosed:t}}function Mr(e){return e.map($E)}function IE(e){return Object.fromEntries(e.map(n=>[n.bareName,$E(n.decl)]))}const DR=["aopt:","cparam:"];function ye(e){for(const n of DR)if(e.startsWith(n))return e.slice(n.length);return e}function Wt(e){return e.startsWith("cparam:")}function Um(e){return!Wt(e.id)}function Jo(e){return Wt(e.id)}function Ua(e){const n=e[0];if(n===void 0)throw new Error("cparam allowed_values must be a non-empty list");if(typeof n=="boolean")throw new Error(`cparam allowed_values must not contain booleans (got ${n}); a two-valued qualitative switch is an aopt, not a cparam`);return typeof n=="string"?"string":"number"}const zo="tchoice:";function vi(e){return e.startsWith(zo)?e.slice(zo.length):e}function Er(e){return e.response_kind==="enum"}function TE(e){return e.response_kind==="real"}const Zo="svar:",FR=["point","bounds","sample"],xR="elicited_svar_response_types",_3=[["point","bounds","sample"],["point","sample"],["sample"]];function BR(e){const n=e.elicited_svar_response_types;if(n===void 0)return FR;const t=_3.find(r=>r.length===n.length&&r.every((i,o)=>n[o]===i));if(t===void 0)throw new Error(`config.${xR} is ${JSON.stringify(n)}; expected one of ${JSON.stringify(_3)}`);return t}const Wh="estimatorInstruct",HR="flabels_enabled",g3="framing_POVs_enabled";function UR(e){const n=new Set(e),t=[HR,g3].filter(r=>n.has(r));if(t.length>1)throw new Error(`A jprob may declare only one of ${t.join(", ")}; '${g3}' is the deprecated spelling, kept only by jprobs with archived methodical trial results`);return t[0]??null}function GR(e,n){if(!Array.isArray(e)||!e.every(t=>typeof t=="string"))throw new Error(`${n} must be a list of strings, got ${JSON.stringify(e)}`);return[...e]}function LE(e,n){return!e.limit_reporting_to||e.limit_reporting_to.includes(n)}function RE(e,n){if(!Array.isArray(n)||n.length!==3||n[0]!=="eq"||typeof n[1]!="string")throw new Error(`Formula ${e} must have an equality s-expression with a string LHS`);return n[1]}function CE(e){if(e.includes("{")||e.includes("}"))throw new Error(`Unexpected brace in sexpr reference leaf: ${e}`);if(e.startsWith(Zo))return`expr:${e.slice(Zo.length)}`;if(!e.startsWith("expr:"))throw new Error(`Unexpected expression reference ${JSON.stringify(e)}; expected expr:* or svar:*`);return e}function kE(e){return e.startsWith(Zo)?e.slice(Zo.length):e}const b3="ax:";function _i(e){return e.startsWith(b3)?e.slice(b3.length):e}function jR(e){if(e.simplifying&&e.derived)throw new Error(`Axiom "${e.id}" is flagged both simplifying and derived`);return e.simplifying?"simplifying":e.derived?"derived":"ordinary"}const y3="form:";function Ga(e){return e.startsWith(y3)?e.slice(y3.length):e}const E3="textchunk:",S3="textdefn:";class NE{constructor(n){De(this,"_data");De(this,"aid");De(this,"options");De(this,"cparam_combo_filter");De(this,"config");De(this,"layout");De(this,"svar_list");De(this,"svar");De(this,"tchoice");De(this,"textchunk");De(this,"display");De(this,"isym");De(this,"ax");De(this,"expr");De(this,"form");De(this,"definedSym");De(this,"textdefn");De(this,"framing");De(this,"srcquote");this._data=n,this.aid=n.aid,this.options=n.options,this.cparam_combo_filter=n.cparam_combo_filter,this.config=n.config,this.layout=n.layout,this.svar_list=n.svar_list,this.svar=n.svar,this.tchoice=n.tchoice??[],this.textchunk=n.textchunk,this.display=n.display,this.isym=n.isym,this.ax=n.ax,this.expr=n.expr,this.form=n.form,this.definedSym=n.definedSym,this.textdefn=n.textdefn,this.framing=n.framing??[],this.srcquote=n.srcquote??[]}_get_data(){return this._data}get_options(){return this.options}get_aopts(){return this.options.filter(Um)}get_cparams(){return this.options.filter(Jo)}has_cparams(){return this.options.some(Jo)}get_option(n){const t=this.options.find(r=>ye(r.id)===n);if(!t)throw new Error(`No option named "${n}"`);return t}get_aopt(n){const t=this.get_aopts().find(r=>ye(r.id)===n);if(!t)throw new Error(`No aopt named "${n}"`);return t}get_cparam(n){const t=this.find_cparam(n);if(!t)throw new Error(`No cparam named "${n}"`);return t}find_cparam(n){return this.get_cparams().find(t=>ye(t.id)===n)}cparam_value_kind(n){return Ua(this.get_cparam(n).allowed_values)}get_option_bare_names(){return this.options.map(n=>ye(n.id))}get_aopt_bare_names(){return this.get_aopts().map(n=>ye(n.id))}get_cparam_bare_names(){return this.get_cparams().map(n=>ye(n.id))}get_option_ids(){return this.options.map(n=>n.id)}get_aopt_ids(){return this.get_aopts().map(n=>n.id)}get_cparam_ids(){return this.get_cparams().map(n=>n.id)}get_tchoice_decls(){return this.tchoice}get_tchoice_bare_names(){return new Set(this.tchoice.map(n=>vi(n.id)))}get_tchoice(n){const t=n.startsWith(zo)?n:`${zo}${n}`,r=this.tchoice.find(i=>i.id===t);if(r===void 0)throw new Error(`No tchoice named "${n}"`);return r}get_tchoice_default(n){const t=this.get_tchoice(n);if(!Er(t))throw new Error(`tchoice "${n}" is not an enum kind; it has no default_value`);return t.default_value}get_enum_tchoice_defaults(){const n={};for(const t of this.tchoice)Er(t)&&(n[vi(t.id)]=t.default_value);return n}get_textchunks(){return this.textchunk}find_textchunk(n){const t=this.strip_textchunk_prefix(n);return this.textchunk.find(r=>this.strip_textchunk_prefix(r.id)===t)}get_textchunk(n){const t=this.find_textchunk(n);if(!t)throw new Error(`No textchunk named "${n}"`);return t}find_textchunk_defn(n){var t;return(t=this.find_textchunk(n))==null?void 0:t.defn}get_textchunk_defn(n){return this.get_textchunk(n).defn}strip_textchunk_prefix(n){return n.startsWith(E3)?n.slice(E3.length):n}get_textdefn_entries(){return this.textdefn.map(n=>{const t=n.aliases??[];return{bareName:this.strip_textdefn_prefix(n.id),id:n.id,defn:n.defn,aliases:t,displayTerm:t[0]??n.id}})}find_textdefn(n){const t=this.strip_textdefn_prefix(n);return this.textdefn.find(r=>this.strip_textdefn_prefix(r.id)===t)}get_textdefn(n){const t=this.find_textdefn(n);if(!t)throw new Error(`No textdefn named "${n}"`);return t}get_textdefns(){return this.textdefn}strip_textdefn_prefix(n){return n.startsWith(S3)?n.slice(S3.length):n}get_svar_bare_names(){return this.svar_list}svar_decls(){return this.svar}get_svar(n){const t=n.startsWith("svar:")?n:`svar:${n}`,r=this.svar.find(i=>i.id===t);if(r===void 0)throw new Error(`No svar named "${n}"`);return r}get_svar_gloss_defn(n){return this.get_svar(n).defn}svar_entries(){const n=new Map;for(const t of this.svar)n.set(kE(t.id),t);return this.svar_list.map(t=>{const r=n.get(t);if(!r)throw new Error(`svar_list entry "${t}" has no matching svar decl`);return{bareName:t,decl:r}})}has_standard_rendering_framing_notes(){const n=this.standard_rendering_flabels();return this.framing.some(t=>n.has(t.flabel))}has_examples(){return this.isym.some(n=>{var t,r;return(((t=n.pos)==null?void 0:t.length)??0)>0||(((r=n.neg)==null?void 0:r.length)??0)>0})}isym_entries(){return this.isym}get_isym(n){const t=n.startsWith("isym:")?n:`isym:${n}`,r=this.isym.find(i=>i.id===t);if(r===void 0)throw new Error(`No isym named "${n}"`);return r}has_srcquotes(){return this.srcquote.length>0}resolve_srcquotes(n){const t=new Map(this.srcquote.map(r=>[r.id,r]));return n.map(r=>{const i=t.get(r);if(!i)throw new Error(`Unknown srcquote id: ${r}`);return i})}framing_static_anchor_ids(){const n=new Set;for(const t of this.framing)t.static_anchor!==null&&n.add(t.static_anchor);return n}get_axioms(){return this.ax}get_axioms_in_display_section(n){return this.ax.filter(t=>jR(t)===n)}find_ax(n){const t=_i(n);return this.ax.find(r=>_i(r.id)===t)}get_ax(n){const t=this.find_ax(n);if(t===void 0)throw new Error(`No axiom named "${n}"`);return t}get_ax_sexpr(n){return this.get_ax(n).sexpr}get_ax_defn(n){return this.get_ax(n).defn}can_consolidate_isym_svar(n){var a,u;const t=n.slice(5),r=this.isym.find(s=>s.id===n);if(!r||r.kind!=="real"||(((a=r.pos)==null?void 0:a.length)??0)>0||(((u=r.neg)==null?void 0:u.length)??0)>0||!this.svar_list.includes(t))return!1;const i=this.svar.find(s=>s.id===`svar:${t}`);if(!i)return!1;const o=this.expr.find(s=>s.id===`expr:${t}`);return!o||o.sexpr!==n?!1:i.defn===""}get_display_ax(n){return this.display.ax[n]}get_display_ax_or_none(n){return this.display.ax[n]??null}get_display_expr(n){return this.display.expr[n]}get_display_form(n){return this.display.form[n]}get_display_form_or_none(n){return this.display.form[n]??null}get_display_definedSym(n){return this.display.definedSym[n]}get_display_definedSym_or_none(n){return this.display.definedSym[n]??null}get_display_expr_keys(){return Object.keys(this.display.expr)}get_display_form_keys(){return Object.keys(this.display.form)}conclusion_form_or_none(){return this.config.conclusion_form??null}conclusion_expr_or_none(){const n=this.conclusion_form_or_none();if(n===null)return null;const t=this.form.find(i=>i.id===n);if(t===void 0)throw new Error(`${this.aid}: config.conclusion_form "${n}" names no registered formula`);const r=t.sexpr;if(!Array.isArray(r)||r.length!==3||r[0]!=="eq")throw new Error(`${this.aid}: conclusion formula "${n}" is not an (eq LHS RHS) triple, so it produces no conclusion expression`);return r[1]}elicited_svar_response_types(){return BR(this.config)}get_fgroups(){const n=this.config.framing;if(n===void 0){if(this.framing.length>0)throw new Error(`${this.aid}: ${this.framing.length} framing note(s) but no config.framing declaring the fgroups their flabels belong to`);return{}}return n.fgroups}fgroup_of_flabel(n){const t=this.get_fgroups();for(const[r,i]of Object.entries(t))if(i.flabels.includes(n))return[r,i];throw new Error(`${this.aid}: framing flabel '${n}' belongs to no declared fgroup (declared: ${Object.keys(t).sort().join(", ")})`)}standard_fgroups_in_order(){return Object.entries(this.get_fgroups()).filter(([,n])=>n.standard_rendering)}standard_rendering_flabels(){const n=new Set;for(const[,t]of this.standard_fgroups_in_order())for(const r of t.flabels)n.add(r);return n}nonstandard_notes(n,t){const r=this.get_fgroups(),i=r[n];if(i===void 0)throw new Error(`${this.aid}: no declared fgroup '${n}' (declared: ${Object.keys(r).sort().join(", ")})`);if(i.standard_rendering)throw new Error(`${this.aid}: fgroup '${n}' is standard-rendering; its notes are placed by get_framing_layout, not bespoke code`);const o=new Set(i.flabels),a=new Set(t);return this.framing.filter(u=>o.has(u.flabel)&&a.has(u.flabel))}get_framing_layout(n){const t=this.standard_rendering_flabels(),r=new Set([...n].filter(l=>t.has(l))),i=new Map(this.framing.map(l=>[l.id,l])),o=new Map,a=l=>{if(o.has(l))return o.get(l)??null;const f=i.get(l);if(!f)throw new Error(`Unknown framing note id: ${l}`);let p=null;if(r.has(f.flabel)){const h=f.framing_target;if(h!==null){const d=a(h);d!==null&&(p={anchor_id:d.anchor_id,depth:d.depth+1,visible_parent_id:h})}p===null&&f.static_anchor!==null&&(p={anchor_id:f.static_anchor,depth:1,visible_parent_id:null})}return o.set(l,p),p};for(const l of this.framing)a(l.id);const u=new Map,s=[],c=new Map;for(const l of this.framing){const f=o.get(l.id);f!=null&&u.set(l.id,{depth:f.depth,note:l,children:[]})}for(const l of this.framing){const f=o.get(l.id);if(f==null)continue;const p=u.get(l.id);if(f.visible_parent_id!==null)u.get(f.visible_parent_id).children.push(p);else if(f.anchor_id==="root")s.push(p);else{const h=c.get(f.anchor_id)??[];h.push(p),c.set(f.anchor_id,h)}}return{root_section:{static_anchor_id:"root",layout_nodes:s},nonroot_anchor_sections:new Map(Array.from(c.entries(),([l,f])=>[l,{static_anchor_id:l,layout_nodes:f}]))}}}function Gm(e){return e.get_textdefn_entries().map(n=>{const t=`def-${n.bareName.toLowerCase()}`;return{...n,anchorId:t,anchor:`#${t}`}})}const VR=["options","config","layout","svar","textchunk","display","isym","ax","expr","form","definedSym","textdefn"];function WR(e){if(typeof e!="object"||e===null)throw new Error("Jprob template data must be a non-null object");const n=e,t=VR.filter(r=>!(r in n));if(t.length>0)throw new Error(`Jprob template data missing required keys: ${t.join(", ")}`);return new NE(e)}function XR(e){return WR(e)}const Qo="data-popover-target";function KR(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function A3(e,n){const t=Object.keys(e).sort(),r=[...n].sort();return t.length===r.length&&t.every((i,o)=>i===r[o])}function ME(e){return encodeURIComponent(JSON.stringify(e))}function w3(e){let n;try{n=JSON.parse(decodeURIComponent(e))}catch(t){throw new Error("Malformed popover target encoding.",{cause:t})}if(!KR(n)||typeof n.kind!="string")throw new Error("Popover target must be an object with a recognized kind.");if(n.kind==="entity"){if(!A3(n,["kind","targetId"])||typeof n.targetId!="string"||n.targetId.length===0)throw new Error("Malformed entity popover target.");return{kind:"entity",targetId:n.targetId}}if(n.kind==="sourcequote"){if(!A3(n,["kind","sourcequoteIds"])||!Array.isArray(n.sourcequoteIds)||n.sourcequoteIds.length===0||!n.sourcequoteIds.every(t=>typeof t=="string"&&t.startsWith("srcquote:")&&t.length>9))throw new Error("Malformed source-quote popover target.");return{kind:"sourcequote",sourcequoteIds:n.sourcequoteIds}}throw new Error(`Unknown popover target kind: ${n.kind}`)}function U(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Z(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const OE="[",PE="]",qE="{",DE="}",YR=new RegExp("(?<!\\\\)\\{([^\\}]+)\\}","g"),ea=new RegExp("(?<!\\\\)\\{((?:expr|form):[^\\}]+)\\}","g"),JR=new RegExp("(?<!\\\\)\\[([^\\]]+?)\\|(\\w[\\w:-]*)\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),zR=new RegExp("(?<!\\\\)\\[([^\\]|]+)\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),FE=new RegExp("(?<!\\\\)\\[([^\\]]+)\\]\\(((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)]))[^)\\s]*)\\)","g"),$3=/‹\+(.*?)\+›/g,ZR=new RegExp("(?<!\\\\)\\[([^\\]|]*?)(?:\\|[^\\]]*?)?\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),QR=new RegExp("(?<!\\\\)\\{[^\\}]*\\}","g"),eC=/\\([\{\}])/g,nC=/\\([\[\]])/g,Xh="symbol-ref-name",jm="ax-",Vm="svar-";function xE(e){return e.form.filter(n=>!n.hide&&e.get_display_form(n.id)).map(n=>n.id)}function Wm(e,n={}){const t=new Map,r=n.symbolMnames??!1,i=tC(e);for(const o of e.isym_entries()){const a=o.id.startsWith("isym:")?o.id:`isym:${o.id}`,u=a.startsWith("isym:")?a.slice(5):a,s=`#isym-${u}`,c={bareId:u,mname:i.get(a)??u},l=i.get(a);l&&(t.set(l,{anchor:s,displayText:l}),t.set(`${u}:long`,{anchor:s,displayText:l}),t.set(`isym:${u}:long`,{anchor:s,displayText:l})),t.set(u,{anchor:s,displayText:wo(c,r),symbolName:c}),t.set(a,{anchor:s,displayText:wo(c,r),symbolName:c})}for(const o of Gm(e))for(const a of o.aliases)t.set(a,{anchor:o.anchor,displayText:a});for(const o of e.isym_entries()){const a=o.id.replace(/^isym:/,"");let u=0;for(const s of["pos","neg"])for(const c of o[s]??[])u++,c.alias&&t.set(c.alias,{anchor:`#ex-${c.alias}`,displayText:`${a} example ${u}`})}for(const o of e.get_axioms()){if(!e.get_display_ax(o.id))continue;const u=_i(o.id);t.set(o.id,{anchor:`#${jm}${u}`,displayText:u})}for(const o of xE(e)){if(t.has(o))continue;const a=Ga(o);t.set(o,{anchor:`#form-${a}`,displayText:a})}for(const o of e.get_options()){const a=ye(o.id),u=`#opt-${a}`,s={bareId:a,mname:o.longname??a},c=wo(s,r),l={anchor:u,displayText:c,symbolName:s};t.has(o.id)||t.set(o.id,l),t.has(a)||t.set(a,l);const f=`${a}:short`;t.has(f)||t.set(f,{anchor:u,displayText:a})}for(const o of e.get_tchoice_decls()){const a=vi(o.id),u=`#tchoice-${a}`,s={bareId:a,mname:o.longname??a};t.has(o.id)||t.set(o.id,{anchor:u,displayText:wo(s,r),symbolName:s})}for(const o of e.get_svar_bare_names()){const a=`svar:${o}`;t.has(a)||t.set(a,{anchor:`#${Vm}${o}`,displayText:o})}for(const o of e.definedSym){const a=o.id.startsWith("definedSym:")?o.id.slice(11):o.id,s={anchor:`#defsym-${a}`,displayText:a};t.has(a)||t.set(a,s),t.has(o.id)||t.set(o.id,s)}return t}function tC(e){const n=new Map;for(const t of e.isym_entries()){if(!t.longname)continue;const r=t.id.startsWith("isym:")?t.id:`isym:${t.id}`;n.set(r,t.longname)}return n}function wo(e,n){return n?e.mname:e.bareId}const rC={point:"=",sample:"~",bounds:"∈"};function BE(e){return rC[e]}function Fi(e){return e.svar_entries().map(({bareName:n})=>`{expr:${n}}`)}function I3(e,n,t){const r=HE(t),i=Z(ME({kind:"entity",targetId:n}));return`<button type="button" class="ref-popover${r.classSuffix}" ${Qo}="${i}" aria-expanded="false"${r.dataAttrs}>${e}</button>`}function iC(e,n,t){const r=HE(t);return`<a href="${e}"${r.classAttr}${r.dataAttrs}>${n}</a>`}function HE(e){if(!e)return{classAttr:"",classSuffix:"",dataAttrs:""};const n=` data-bareid="${Z(e.bareId)}" data-mname="${Z(e.mname)}"`;return{classAttr:` class="${Xh}"`,classSuffix:` ${Xh}`,dataAttrs:n}}function oC(e,n,t,r){const i=(t==null?void 0:t.popoverAllRefs)??!1;let o=e;return o=o.replace(JR,(a,u,s)=>{const c=n.get(s);return i&&c?I3(u,c.anchor):`<a href="${c?c.anchor:`#isym-${s}`}">${u}</a>`}),o=o.replace(zR,(a,u)=>{const s=n.get(u);return s?i?I3(s.displayText,s.anchor,s.symbolName):iC(s.anchor,s.displayText,s.symbolName):(r==null||r.add(u),`${OE}${u}${PE}`)}),o}const aC=10;function uC(e,n,t,r){let i=e;for(let o=0;o<aC;o++){const a=oC(i,n,t,r);if(a===i)break;i=a}return i.replace(nC,"$1")}const sC=/\*\*/g;function cC(e){return e.replace(FE,"$1").replace(ZR,"$1").replace(QR,"").replace(sC,"")}class lC extends NE{constructor(t,r,i){super(t);De(this,"cparam_overrides");De(this,"aopt_overrides");De(this,"query_mode");const o=new Set(this.get_option_bare_names()),a=this.get_tchoice_bare_names(),u=new Map,s=new Map;for(const[c,l]of Object.entries(r)){if(a.has(c))throw new Error(`Cannot override tchoice entity "${c}" for ${this.aid}: it is left free for the responder to choose.`);if(!o.has(c))throw new Error(`Unknown option key "${c}" for ${this.aid}. Valid keys: ${[...o].sort().join(", ")}`);const f=this.find_cparam(c);if(f){if(i!=="plainnum")throw new Error(`Cannot fix cparam "${c}" for ${this.aid} in ${i} mode: cparams are free in plaincode/richcode (the responder covers all combinations).`);u.set(f.id,l)}else s.set(this.get_aopt(c).id,l)}this.cparam_overrides=u,this.aopt_overrides=s,this.query_mode=i}is_code_mode(){return this.query_mode!=="plainnum"}option_value(t){const r=this.find_cparam(t);if(r)return this.cparam_overrides.get(r.id)??r.default_value;const i=this.get_aopt(t);return this.aopt_overrides.get(i.id)??i.default_value}option_value_or(t,r){return this.get_option_bare_names().includes(t)?this.option_value(t):r}enabled_flabels(){const t=UR(this.get_option_bare_names());return t===null?[]:GR(this.option_value(t),t)}}function UE(e,n,t){return new lC(e._get_data(),n,t)}function Xm(e,n){if("input_type"in e&&e.input_type==="MultiStringFromSet"){if(!Array.isArray(n)||!n.every(i=>typeof i=="string"))throw new Error(`Invalid MultiStringFromSet value for ${e.id}: expected a string array`);if(!Array.isArray(e.allowed_values))throw new Error(`Invalid MultiStringFromSet declaration for ${e.id}: missing allowed_values`);const t=new Set(e.allowed_values),r=n.filter(i=>!t.has(i));if(r.length>0)throw new Error(`Invalid MultiStringFromSet value for ${e.id}: values not in allowed_values: `+r.join(", "));return[...n]}if(typeof n=="object")throw new Error(`Invalid scalar value for ${e.id}: expected string, number, or boolean`);if(Jo(e)){if(Ua(e.allowed_values)==="string"){if(typeof n!="string")throw new Error(`Invalid string value for ${e.id}: ${n}`);return n}const t=Number(n);if(typeof n=="boolean"||!Number.isFinite(t))throw new Error(`Invalid numeric value for ${e.id}: ${n}`);return t}if(typeof e.default_value=="boolean"){if(typeof n=="boolean")return n;if(n==="true")return!0;if(n==="false")return!1;throw new Error(`Invalid boolean value for ${e.id}: ${n}`)}if(typeof e.default_value=="number"){if(typeof n=="boolean"||typeof n=="string"&&n.trim()==="")throw new Error(`Invalid numeric value for ${e.id}: ${n}`);const t=Number(n);if(!Number.isFinite(t))throw new Error(`Invalid numeric value for ${e.id}: ${n}`);return t}if(typeof e.default_value=="string"){if(typeof n!="string")throw new Error(`Invalid string value for ${e.id}: ${n}`);return n}throw new Error(`Option ${e.id} has no supported default value type`)}const GE=!0;function T3(e,n){return e!=="typical"||n}function fC(e,n){const t=e.map(a=>({name:ye(a.id),values:a.allowed_values.filter(u=>typeof u!="boolean")}));if(t.length===0)return{names:[],combinations:[{}]};const r=t.map(a=>a.name),i=t.map(a=>a.values);let o=[{}];for(let a=0;a<r.length;a++){const u=r[a],s=i[a],c=[];for(const l of o)for(const f of s)c.push({...l,[u]:f});o=c}return n!==void 0&&(o=o.filter(a=>n(a))),{names:r,combinations:o}}function jE(e,n,t){const r=new Set(e.get_cparam_bare_names()),i=t!=="plainnum",o={};for(const[a,u]of Object.entries(n))i&&r.has(a)||(o[a]=u);return o}const dC={boolrv:"BoolRV",real:"ℝ",prop:"Prop",set:"Set",fn:"Function"},Kh="dag-ref",pC="dag-lhs",Yh="dag-glyph",na="data-dag-id",hC="↖",mC="↘";function vC(e){const n=e.sexpr;if(!Array.isArray(n)||n[0]!=="eq")return null;const t=n[1];return typeof t!="string"||!t.startsWith("expr:")?null:t.slice(5)}function _C(e){ea.lastIndex=0;const n=[];for(const t of e.matchAll(ea)){const r=t[1];if(!r.startsWith("expr:"))continue;const i=r.slice(5);i.includes(":")||n.push(i)}return n}function gC(e,n){const t=new Map(e.form.map(s=>[s.id,s])),r=n.map(s=>e.get_display_form(s)),i=new Map,o=n.map((s,c)=>{const l=t.get(s),f=l?vC(l):null;return f!==null&&!i.has(f)&&i.set(f,c),f}),a=new Set;r.forEach((s,c)=>{for(const l of _C(s)){const f=i.get(l);f!==void 0&&f<c&&a.add(l)}});const u=new Map;return n.forEach((s,c)=>{const l=r[c].replace(ea,(f,p)=>{if(!p.startsWith("expr:"))return f;const h=p.slice(5);if(h.includes(":"))return f;if(h===o[c])return a.has(h)?`<span class="${Kh} ${pC}" ${na}="${Z(h)}"><span class="${Yh}">${mC}</span>${f}</span>`:f;const d=i.get(h);if(d===void 0||d>=c)return f;const m=Ga(n[d]);return`<span class="${Kh}" ${na}="${Z(h)}"><a class="${Yh}" href="#form-${Z(m)}">${hC}</a>${f}</span>`});u.set(s,l)}),u}const bC=["expr:","form:"],yC=["textchunk:","aopt:","cparam:"],EC=10;function SC(e){const n=new Map;for(const t of e.get_options()){if(Um(t)&&t.variant_producing)continue;const r=VE(t.id);if(e.is_code_mode()&&Wt(t.id)){n.set(r,`${OE}${r}:short${PE}`);continue}n.set(r,String(e.option_value(r)))}for(const t of e.get_textchunks()){const r=t.id.startsWith("textchunk:")?t.id.slice(10):t.id;n.set(r,t.defn)}return n}function VE(e){for(const n of yC)if(e.startsWith(n))return e.slice(n.length);return e}function AC(e,n){const t=SC(n);let r=e;for(let i=0;i<EC;i++){const o=r.replace(YR,(a,u)=>{for(const l of bC)if(u.startsWith(l))return a;const s=VE(u),c=t.get(s);if(c===void 0)throw new Error(`Template variable ${qE}${u}${DE} not found in non-variant-producing options or textchunks`);return c});if(o===r)break;r=o}return r.replace(eC,"$1")}const wC=10;function $C(e){const n=new Map;for(const r of e.get_display_expr_keys())n.set(r,e.get_display_expr(r));const t=new Set(e.form.filter(r=>!r.hide).map(r=>r.id));for(const r of e.get_display_form_keys())t.has(r)&&n.set(r,e.get_display_form(r));return n}function IC(e,n){let t=e;for(let r=0;r<wC;r++){const i=t.replace(ea,(o,a)=>{const u=n.get(a);if(u===void 0)throw new Error(`Display ref ${qE}${a}${DE} not found in display.expr or display.form`);return u});if(i===t)break;t=i}return t}const L3={};function TC(e){let n=L3[e];if(n)return n;n=L3[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);n.push(r)}for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);n[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return n}function Sr(e,n){typeof n!="string"&&(n=Sr.defaultChars);const t=TC(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let i="";for(let o=0,a=r.length;o<a;o+=3){const u=parseInt(r.slice(o+1,o+3),16);if(u<128){i+=t[u];continue}if((u&224)===192&&o+3<a){const s=parseInt(r.slice(o+4,o+6),16);if((s&192)===128){const c=u<<6&1984|s&63;c<128?i+="��":i+=String.fromCharCode(c),o+=3;continue}}if((u&240)===224&&o+6<a){const s=parseInt(r.slice(o+4,o+6),16),c=parseInt(r.slice(o+7,o+9),16);if((s&192)===128&&(c&192)===128){const l=u<<12&61440|s<<6&4032|c&63;l<2048||l>=55296&&l<=57343?i+="���":i+=String.fromCharCode(l),o+=6;continue}}if((u&248)===240&&o+9<a){const s=parseInt(r.slice(o+4,o+6),16),c=parseInt(r.slice(o+7,o+9),16),l=parseInt(r.slice(o+10,o+12),16);if((s&192)===128&&(c&192)===128&&(l&192)===128){let f=u<<18&1835008|s<<12&258048|c<<6&4032|l&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),o+=9;continue}}i+="�"}return i})}Sr.defaultChars=";/?:@&=+$,#";Sr.componentChars="";const R3={};function LC(e){let n=R3[e];if(n)return n;n=R3[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function xi(e,n,t){typeof n!="string"&&(t=n,n=xi.defaultChars),typeof t>"u"&&(t=!0);const r=LC(n);let i="";for(let o=0,a=e.length;o<a;o++){const u=e.charCodeAt(o);if(t&&u===37&&o+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3))){i+=e.slice(o,o+3),o+=2;continue}if(u<128){i+=r[u];continue}if(u>=55296&&u<=57343){if(u>=55296&&u<=56319&&o+1<a){const s=e.charCodeAt(o+1);if(s>=56320&&s<=57343){i+=encodeURIComponent(e[o]+e[o+1]),o++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[o])}return i}xi.defaultChars=";/?:@&=+$,-_.!~*'()#";xi.componentChars="-_.!~*'()";function Km(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function ta(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const RC=/^([a-z0-9.+-]+:)/i,CC=/:[0-9]*$/,kC=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,NC=["<",">",'"',"`"," ","\r",`
`,"	"],MC=["{","}","|","\\","^","`"].concat(NC),OC=["'"].concat(MC),C3=["%","/","?",";","#"].concat(OC),k3=["/","?","#"],PC=255,N3=/^[+a-z0-9A-Z_-]{0,63}$/,qC=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,M3={javascript:!0,"javascript:":!0},O3={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Ym(e,n){if(e&&e instanceof ta)return e;const t=new ta;return t.parse(e,n),t}ta.prototype.parse=function(e,n){let t,r,i,o=e;if(o=o.trim(),!n&&e.split("#").length===1){const c=kC.exec(o);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let a=RC.exec(o);if(a&&(a=a[0],t=a.toLowerCase(),this.protocol=a,o=o.substr(a.length)),(n||a||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=o.substr(0,2)==="//",i&&!(a&&M3[a])&&(o=o.substr(2),this.slashes=!0)),!M3[a]&&(i||a&&!O3[a])){let c=-1;for(let d=0;d<k3.length;d++)r=o.indexOf(k3[d]),r!==-1&&(c===-1||r<c)&&(c=r);let l,f;c===-1?f=o.lastIndexOf("@"):f=o.lastIndexOf("@",c),f!==-1&&(l=o.slice(0,f),o=o.slice(f+1),this.auth=l),c=-1;for(let d=0;d<C3.length;d++)r=o.indexOf(C3[d]),r!==-1&&(c===-1||r<c)&&(c=r);c===-1&&(c=o.length),o[c-1]===":"&&c--;const p=o.slice(0,c);o=o.slice(c),this.parseHost(p),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const d=this.hostname.split(/\./);for(let m=0,v=d.length;m<v;m++){const _=d[m];if(_&&!_.match(N3)){let g="";for(let b=0,y=_.length;b<y;b++)_.charCodeAt(b)>127?g+="x":g+=_[b];if(!g.match(N3)){const b=d.slice(0,m),y=d.slice(m+1),E=_.match(qC);E&&(b.push(E[1]),y.unshift(E[2])),y.length&&(o=y.join(".")+o),this.hostname=b.join(".");break}}}}this.hostname.length>PC&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const u=o.indexOf("#");u!==-1&&(this.hash=o.substr(u),o=o.slice(0,u));const s=o.indexOf("?");return s!==-1&&(this.search=o.substr(s),o=o.slice(0,s)),o&&(this.pathname=o),O3[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};ta.prototype.parseHost=function(e){let n=CC.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const DC=Object.freeze(Object.defineProperty({__proto__:null,decode:Sr,encode:xi,format:Km,parse:Ym},Symbol.toStringTag,{value:"Module"})),WE=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,XE=/[\0-\x1F\x7F-\x9F]/,FC=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Jm=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,KE=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,YE=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,xC=Object.freeze(Object.defineProperty({__proto__:null,Any:WE,Cc:XE,Cf:FC,P:Jm,S:KE,Z:YE},Symbol.toStringTag,{value:"Module"})),BC=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),HC=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Zu;const UC=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),GC=(Zu=String.fromCodePoint)!==null&&Zu!==void 0?Zu:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function jC(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=UC.get(e))!==null&&n!==void 0?n:e}var ze;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(ze||(ze={}));const VC=32;var wt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(wt||(wt={}));function Jh(e){return e>=ze.ZERO&&e<=ze.NINE}function WC(e){return e>=ze.UPPER_A&&e<=ze.UPPER_F||e>=ze.LOWER_A&&e<=ze.LOWER_F}function XC(e){return e>=ze.UPPER_A&&e<=ze.UPPER_Z||e>=ze.LOWER_A&&e<=ze.LOWER_Z||Jh(e)}function KC(e){return e===ze.EQUALS||XC(e)}var Je;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(Je||(Je={}));var At;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(At||(At={}));class YC{constructor(n,t,r){this.decodeTree=n,this.emitCodePoint=t,this.errors=r,this.state=Je.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=At.Strict}startEntity(n){this.decodeMode=n,this.state=Je.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case Je.EntityStart:return n.charCodeAt(t)===ze.NUM?(this.state=Je.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=Je.NamedEntity,this.stateNamedEntity(n,t));case Je.NumericStart:return this.stateNumericStart(n,t);case Je.NumericDecimal:return this.stateNumericDecimal(n,t);case Je.NumericHex:return this.stateNumericHex(n,t);case Je.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|VC)===ze.LOWER_X?(this.state=Je.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=Je.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,r,i){if(t!==r){const o=r-t;this.result=this.result*Math.pow(i,o)+parseInt(n.substr(t,o),i),this.consumed+=o}}stateNumericHex(n,t){const r=t;for(;t<n.length;){const i=n.charCodeAt(t);if(Jh(i)||WC(i))t+=1;else return this.addToNumericResult(n,r,t,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(n,r,t,16),-1}stateNumericDecimal(n,t){const r=t;for(;t<n.length;){const i=n.charCodeAt(t);if(Jh(i))t+=1;else return this.addToNumericResult(n,r,t,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(n,r,t,10),-1}emitNumericEntity(n,t){var r;if(this.consumed<=t)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===ze.SEMI)this.consumed+=1;else if(this.decodeMode===At.Strict)return 0;return this.emitCodePoint(jC(this.result),this.consumed),this.errors&&(n!==ze.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:r}=this;let i=r[this.treeIndex],o=(i&wt.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const a=n.charCodeAt(t);if(this.treeIndex=JC(r,i,this.treeIndex+Math.max(1,o),a),this.treeIndex<0)return this.result===0||this.decodeMode===At.Attribute&&(o===0||KC(a))?0:this.emitNotTerminatedNamedEntity();if(i=r[this.treeIndex],o=(i&wt.VALUE_LENGTH)>>14,o!==0){if(a===ze.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==At.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:r}=this,i=(r[t]&wt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,i,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,r){const{decodeTree:i}=this;return this.emitCodePoint(t===1?i[n]&~wt.VALUE_LENGTH:i[n+1],r),t===3&&this.emitCodePoint(i[n+2],r),r}end(){var n;switch(this.state){case Je.NamedEntity:return this.result!==0&&(this.decodeMode!==At.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Je.NumericDecimal:return this.emitNumericEntity(0,2);case Je.NumericHex:return this.emitNumericEntity(0,3);case Je.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Je.EntityStart:return 0}}}function JE(e){let n="";const t=new YC(e,r=>n+=GC(r));return function(i,o){let a=0,u=0;for(;(u=i.indexOf("&",u))>=0;){n+=i.slice(a,u),t.startEntity(o);const c=t.write(i,u+1);if(c<0){a=u+t.end();break}a=u+c,u=c===0?a+1:a}const s=n+i.slice(a);return n="",s}}function JC(e,n,t,r){const i=(n&wt.BRANCH_LENGTH)>>7,o=n&wt.JUMP_TABLE;if(i===0)return o!==0&&r===o?t:-1;if(o){const s=r-o;return s<0||s>=i?-1:e[t+s]-1}let a=t,u=a+i-1;for(;a<=u;){const s=a+u>>>1,c=e[s];if(c<r)a=s+1;else if(c>r)u=s-1;else return e[s+i]}return-1}const zC=JE(BC);JE(HC);function zE(e,n=At.Legacy){return zC(e,n)}function ZC(e){return Object.prototype.toString.call(e)}function zm(e){return ZC(e)==="[object String]"}const QC=Object.prototype.hasOwnProperty;function ek(e,n){return QC.call(e,n)}function ja(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function ZE(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function Zm(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function ra(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const QE=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,nk=/&([a-z#][a-z0-9]{1,31});/gi,tk=new RegExp(QE.source+"|"+nk.source,"gi"),rk=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function ik(e,n){if(n.charCodeAt(0)===35&&rk.test(n)){const r=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return Zm(r)?ra(r):e}const t=zE(e);return t!==e?t:e}function ok(e){return e.indexOf("\\")<0?e:e.replace(QE,"$1")}function Ar(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(tk,function(n,t,r){return t||ik(n,r)})}const ak=/[&<>"]/,uk=/[&<>"]/g,sk={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function ck(e){return sk[e]}function It(e){return ak.test(e)?e.replace(uk,ck):e}const lk=/[.?*+^$[\]\\(){}|-]/g;function fk(e){return e.replace(lk,"\\$&")}function Ne(e){switch(e){case 9:case 32:return!0}return!1}function gi(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function bi(e){return Jm.test(e)||KE.test(e)}function yi(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Va(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const dk={mdurl:DC,ucmicro:xC},pk=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:ZE,assign:ja,escapeHtml:It,escapeRE:fk,fromCodePoint:ra,has:ek,isMdAsciiPunct:yi,isPunctChar:bi,isSpace:Ne,isString:zm,isValidEntityCode:Zm,isWhiteSpace:gi,lib:dk,normalizeReference:Va,unescapeAll:Ar,unescapeMd:ok},Symbol.toStringTag,{value:"Module"}));function hk(e,n,t){let r,i,o,a;const u=e.posMax,s=e.pos;for(e.pos=n+1,r=1;e.pos<u;){if(o=e.src.charCodeAt(e.pos),o===93&&(r--,r===0)){i=!0;break}if(a=e.pos,e.md.inline.skipToken(e),o===91){if(a===e.pos-1)r++;else if(t)return e.pos=s,-1}}let c=-1;return i&&(c=e.pos),e.pos=s,c}function mk(e,n,t){let r,i=n;const o={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<t;){if(r=e.charCodeAt(i),r===10||r===60)return o;if(r===62)return o.pos=i+1,o.str=Ar(e.slice(n+1,i)),o.ok=!0,o;if(r===92&&i+1<t){i+=2;continue}i++}return o}let a=0;for(;i<t&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<t){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(a++,a>32))return o;if(r===41){if(a===0)break;a--}i++}return n===i||a!==0||(o.str=Ar(e.slice(n,i)),o.pos=i,o.ok=!0),o}function vk(e,n,t,r){let i,o=n;const a={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)a.str=r.str,a.marker=r.marker;else{if(o>=t)return a;let u=e.charCodeAt(o);if(u!==34&&u!==39&&u!==40)return a;n++,o++,u===40&&(u=41),a.marker=u}for(;o<t;){if(i=e.charCodeAt(o),i===a.marker)return a.pos=o+1,a.str+=Ar(e.slice(n,o)),a.ok=!0,a;if(i===40&&a.marker===41)return a;i===92&&o+1<t&&o++,o++}return a.can_continue=!0,a.str+=Ar(e.slice(n,o)),a}const _k=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:mk,parseLinkLabel:hk,parseLinkTitle:vk},Symbol.toStringTag,{value:"Module"})),zn={};zn.code_inline=function(e,n,t,r,i){const o=e[n];return"<code"+i.renderAttrs(o)+">"+It(o.content)+"</code>"};zn.code_block=function(e,n,t,r,i){const o=e[n];return"<pre"+i.renderAttrs(o)+"><code>"+It(e[n].content)+`</code></pre>
`};zn.fence=function(e,n,t,r,i){const o=e[n],a=o.info?Ar(o.info).trim():"";let u="",s="";if(a){const l=a.split(/(\s+)/g);u=l[0],s=l.slice(2).join("")}let c;if(t.highlight?c=t.highlight(o.content,u,s)||It(o.content):c=It(o.content),c.indexOf("<pre")===0)return c+`
`;if(a){const l=o.attrIndex("class"),f=o.attrs?o.attrs.slice():[];l<0?f.push(["class",t.langPrefix+u]):(f[l]=f[l].slice(),f[l][1]+=" "+t.langPrefix+u);const p={attrs:f};return`<pre><code${i.renderAttrs(p)}>${c}</code></pre>
`}return`<pre><code${i.renderAttrs(o)}>${c}</code></pre>
`};zn.image=function(e,n,t,r,i){const o=e[n];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,t,r),i.renderToken(e,n,t)};zn.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};zn.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};zn.text=function(e,n){return It(e[n].content)};zn.html_block=function(e,n){return e[n].content};zn.html_inline=function(e,n){return e[n].content};function Or(){this.rules=ja({},zn)}Or.prototype.renderAttrs=function(n){let t,r,i;if(!n.attrs)return"";for(i="",t=0,r=n.attrs.length;t<r;t++)i+=" "+It(n.attrs[t][0])+'="'+It(n.attrs[t][1])+'"';return i};Or.prototype.renderToken=function(n,t,r){const i=n[t];let o="";if(i.hidden)return"";i.block&&i.nesting!==-1&&t&&n[t-1].hidden&&(o+=`
`),o+=(i.nesting===-1?"</":"<")+i.tag,o+=this.renderAttrs(i),i.nesting===0&&r.xhtmlOut&&(o+=" /");let a=!1;if(i.block&&(a=!0,i.nesting===1&&t+1<n.length)){const u=n[t+1];(u.type==="inline"||u.hidden||u.nesting===-1&&u.tag===i.tag)&&(a=!1)}return o+=a?`>
`:">",o};Or.prototype.renderInline=function(e,n,t){let r="";const i=this.rules;for(let o=0,a=e.length;o<a;o++){const u=e[o].type;typeof i[u]<"u"?r+=i[u](e,o,n,t,this):r+=this.renderToken(e,o,n)}return r};Or.prototype.renderInlineAsText=function(e,n,t){let r="";for(let i=0,o=e.length;i<o;i++)switch(e[i].type){case"text":r+=e[i].content;break;case"image":r+=this.renderInlineAsText(e[i].children,n,t);break;case"html_inline":case"html_block":r+=e[i].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};Or.prototype.render=function(e,n,t){let r="";const i=this.rules;for(let o=0,a=e.length;o<a;o++){const u=e[o].type;u==="inline"?r+=this.renderInline(e[o].children,n,t):typeof i[u]<"u"?r+=i[u](e,o,n,t,this):r+=this.renderToken(e,o,n,t)}return r};function pn(){this.__rules__=[],this.__cache__=null}pn.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};pn.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})};pn.prototype.at=function(e,n,t){const r=this.__find__(e),i=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=i.alt||[],this.__cache__=null};pn.prototype.before=function(e,n,t,r){const i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};pn.prototype.after=function(e,n,t,r){const i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};pn.prototype.push=function(e,n,t){const r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};pn.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!0,t.push(r)},this),this.__cache__=null,t};pn.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};pn.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!1,t.push(r)},this),this.__cache__=null,t};pn.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Dn(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Dn.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let r=0,i=t.length;r<i;r++)if(t[r][0]===n)return r;return-1};Dn.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Dn.prototype.attrSet=function(n,t){const r=this.attrIndex(n),i=[n,t];r<0?this.attrPush(i):this.attrs[r]=i};Dn.prototype.attrGet=function(n){const t=this.attrIndex(n);let r=null;return t>=0&&(r=this.attrs[t][1]),r};Dn.prototype.attrJoin=function(n,t){const r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};function eS(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}eS.prototype.Token=Dn;const gk=/\r\n?|\n/g,bk=/\0/g;function yk(e){let n;n=e.src.replace(gk,`
`),n=n.replace(bk,"�"),e.src=n}function Ek(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Sk(e){const n=e.tokens;for(let t=0,r=n.length;t<r;t++){const i=n[t];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function Ak(e){return/^<a[>\s]/i.test(e)}function wk(e){return/^<\/a\s*>/i.test(e)}function $k(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,r=n.length;t<r;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;let i=n[t].children,o=0;for(let a=i.length-1;a>=0;a--){const u=i[a];if(u.type==="link_close"){for(a--;i[a].level!==u.level&&i[a].type!=="link_open";)a--;continue}if(u.type==="html_inline"&&(Ak(u.content)&&o>0&&o--,wk(u.content)&&o++),!(o>0)&&u.type==="text"&&e.md.linkify.test(u.content)){const s=u.content;let c=e.md.linkify.match(s);const l=[];let f=u.level,p=0;c.length>0&&c[0].index===0&&a>0&&i[a-1].type==="text_special"&&(c=c.slice(1));for(let h=0;h<c.length;h++){const d=c[h].url,m=e.md.normalizeLink(d);if(!e.md.validateLink(m))continue;let v=c[h].text;c[h].schema?c[h].schema==="mailto:"&&!/^mailto:/i.test(v)?v=e.md.normalizeLinkText("mailto:"+v).replace(/^mailto:/,""):v=e.md.normalizeLinkText(v):v=e.md.normalizeLinkText("http://"+v).replace(/^http:\/\//,"");const _=c[h].index;if(_>p){const E=new e.Token("text","",0);E.content=s.slice(p,_),E.level=f,l.push(E)}const g=new e.Token("link_open","a",1);g.attrs=[["href",m]],g.level=f++,g.markup="linkify",g.info="auto",l.push(g);const b=new e.Token("text","",0);b.content=v,b.level=f,l.push(b);const y=new e.Token("link_close","a",-1);y.level=--f,y.markup="linkify",y.info="auto",l.push(y),p=c[h].lastIndex}if(p<s.length){const h=new e.Token("text","",0);h.content=s.slice(p),h.level=f,l.push(h)}n[t].children=i=ZE(i,a,l)}}}}const nS=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Ik=/\((c|tm|r)\)/i,Tk=/\((c|tm|r)\)/ig,Lk={c:"©",r:"®",tm:"™"};function Rk(e,n){return Lk[n.toLowerCase()]}function Ck(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&(r.content=r.content.replace(Tk,Rk)),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function kk(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&nS.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function Nk(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(Ik.test(e.tokens[n].content)&&Ck(e.tokens[n].children),nS.test(e.tokens[n].content)&&kk(e.tokens[n].children))}const Mk=/['"]/,P3=/['"]/g,q3="’";function $o(e,n,t){return e.slice(0,n)+t+e.slice(n+1)}function Ok(e,n){let t;const r=[];for(let i=0;i<e.length;i++){const o=e[i],a=e[i].level;for(t=r.length-1;t>=0&&!(r[t].level<=a);t--);if(r.length=t+1,o.type!=="text")continue;let u=o.content,s=0,c=u.length;e:for(;s<c;){P3.lastIndex=s;const l=P3.exec(u);if(!l)break;let f=!0,p=!0;s=l.index+1;const h=l[0]==="'";let d=32;if(l.index-1>=0)d=u.charCodeAt(l.index-1);else for(t=i-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){d=e[t].content.charCodeAt(e[t].content.length-1);break}let m=32;if(s<c)m=u.charCodeAt(s);else for(t=i+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){m=e[t].content.charCodeAt(0);break}const v=yi(d)||bi(String.fromCharCode(d)),_=yi(m)||bi(String.fromCharCode(m)),g=gi(d),b=gi(m);if(b?f=!1:_&&(g||v||(f=!1)),g?p=!1:v&&(b||_||(p=!1)),m===34&&l[0]==='"'&&d>=48&&d<=57&&(p=f=!1),f&&p&&(f=v,p=_),!f&&!p){h&&(o.content=$o(o.content,l.index,q3));continue}if(p)for(t=r.length-1;t>=0;t--){let y=r[t];if(r[t].level<a)break;if(y.single===h&&r[t].level===a){y=r[t];let E,w;h?(E=n.md.options.quotes[2],w=n.md.options.quotes[3]):(E=n.md.options.quotes[0],w=n.md.options.quotes[1]),o.content=$o(o.content,l.index,w),e[y.token].content=$o(e[y.token].content,y.pos,E),s+=w.length-1,y.token===i&&(s+=E.length-1),u=o.content,c=u.length,r.length=t;continue e}}f?r.push({token:i,pos:l.index,single:h,level:a}):p&&h&&(o.content=$o(o.content,l.index,q3))}}}function Pk(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!Mk.test(e.tokens[n].content)||Ok(e.tokens[n].children,e)}function qk(e){let n,t;const r=e.tokens,i=r.length;for(let o=0;o<i;o++){if(r[o].type!=="inline")continue;const a=r[o].children,u=a.length;for(n=0;n<u;n++)a[n].type==="text_special"&&(a[n].type="text");for(n=t=0;n<u;n++)a[n].type==="text"&&n+1<u&&a[n+1].type==="text"?a[n+1].content=a[n].content+a[n+1].content:(n!==t&&(a[t]=a[n]),t++);n!==t&&(a.length=t)}}const Qu=[["normalize",yk],["block",Ek],["inline",Sk],["linkify",$k],["replacements",Nk],["smartquotes",Pk],["text_join",qk]];function Qm(){this.ruler=new pn;for(let e=0;e<Qu.length;e++)this.ruler.push(Qu[e][0],Qu[e][1])}Qm.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,r=n.length;t<r;t++)n[t](e)};Qm.prototype.State=eS;function Zn(e,n,t,r){this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let o=0,a=0,u=0,s=0,c=i.length,l=!1;a<c;a++){const f=i.charCodeAt(a);if(!l)if(Ne(f)){u++,f===9?s+=4-s%4:s++;continue}else l=!0;(f===10||a===c-1)&&(f!==10&&a++,this.bMarks.push(o),this.eMarks.push(a),this.tShift.push(u),this.sCount.push(s),this.bsCount.push(0),l=!1,u=0,s=0,o=a+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Zn.prototype.push=function(e,n,t){const r=new Dn(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};Zn.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};Zn.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};Zn.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const r=this.src.charCodeAt(n);if(!Ne(r))break}return n};Zn.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!Ne(this.src.charCodeAt(--n)))return n+1;return n};Zn.prototype.skipChars=function(n,t){for(let r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};Zn.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};Zn.prototype.getLines=function(n,t,r,i){if(n>=t)return"";const o=new Array(t-n);for(let a=0,u=n;u<t;u++,a++){let s=0;const c=this.bMarks[u];let l=c,f;for(u+1<t||i?f=this.eMarks[u]+1:f=this.eMarks[u];l<f&&s<r;){const p=this.src.charCodeAt(l);if(Ne(p))p===9?s+=4-(s+this.bsCount[u])%4:s++;else if(l-c<this.tShift[u])s++;else break;l++}s>r?o[a]=new Array(s-r+1).join(" ")+this.src.slice(l,f):o[a]=this.src.slice(l,f)}return o.join("")};Zn.prototype.Token=Dn;const Dk=65536;function es(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.slice(t,r)}function D3(e){const n=[],t=e.length;let r=0,i=e.charCodeAt(r),o=!1,a=0,u="";for(;r<t;)i===124&&(o?(u+=e.substring(a,r-1),a=r):(n.push(u+e.substring(a,r)),u="",a=r+1)),o=i===92,r++,i=e.charCodeAt(r);return n.push(u+e.substring(a)),n}function Fk(e,n,t,r){if(n+2>t)return!1;let i=n+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let o=e.bMarks[i]+e.tShift[i];if(o>=e.eMarks[i])return!1;const a=e.src.charCodeAt(o++);if(a!==124&&a!==45&&a!==58||o>=e.eMarks[i])return!1;const u=e.src.charCodeAt(o++);if(u!==124&&u!==45&&u!==58&&!Ne(u)||a===45&&Ne(u))return!1;for(;o<e.eMarks[i];){const y=e.src.charCodeAt(o);if(y!==124&&y!==45&&y!==58&&!Ne(y))return!1;o++}let s=es(e,n+1),c=s.split("|");const l=[];for(let y=0;y<c.length;y++){const E=c[y].trim();if(!E){if(y===0||y===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?l.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?l.push("left"):l.push("")}if(s=es(e,n).trim(),s.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;c=D3(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const f=c.length;if(f===0||f!==l.length)return!1;if(r)return!0;const p=e.parentType;e.parentType="table";const h=e.md.block.ruler.getRules("blockquote"),d=e.push("table_open","table",1),m=[n,0];d.map=m;const v=e.push("thead_open","thead",1);v.map=[n,n+1];const _=e.push("tr_open","tr",1);_.map=[n,n+1];for(let y=0;y<c.length;y++){const E=e.push("th_open","th",1);l[y]&&(E.attrs=[["style","text-align:"+l[y]]]);const w=e.push("inline","",0);w.content=c[y].trim(),w.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let g,b=0;for(i=n+2;i<t&&!(e.sCount[i]<e.blkIndent);i++){let y=!1;for(let w=0,I=h.length;w<I;w++)if(h[w](e,i,t,!0)){y=!0;break}if(y||(s=es(e,i).trim(),!s)||e.sCount[i]-e.blkIndent>=4||(c=D3(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),b+=f-c.length,b>Dk))break;if(i===n+2){const w=e.push("tbody_open","tbody",1);w.map=g=[n+2,0]}const E=e.push("tr_open","tr",1);E.map=[i,i+1];for(let w=0;w<f;w++){const I=e.push("td_open","td",1);l[w]&&(I.attrs=[["style","text-align:"+l[w]]]);const C=e.push("inline","",0);C.content=c[w]?c[w].trim():"",C.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return g&&(e.push("tbody_close","tbody",-1),g[1]=i),e.push("table_close","table",-1),m[1]=i,e.parentType=p,e.line=i,!0}function xk(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let r=n+1,i=r;for(;r<t;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;const o=e.push("code_block","code",0);return o.content=e.getLines(n,i,4+e.blkIndent,!1)+`
`,o.map=[n,e.line],!0}function Bk(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||i+3>o)return!1;const a=e.src.charCodeAt(i);if(a!==126&&a!==96)return!1;let u=i;i=e.skipChars(i,a);let s=i-u;if(s<3)return!1;const c=e.src.slice(u,i),l=e.src.slice(i,o);if(a===96&&l.indexOf(String.fromCharCode(a))>=0)return!1;if(r)return!0;let f=n,p=!1;for(;f++,!(f>=t||(i=u=e.bMarks[f]+e.tShift[f],o=e.eMarks[f],i<o&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(i)===a&&!(e.sCount[f]-e.blkIndent>=4)&&(i=e.skipChars(i,a),!(i-u<s)&&(i=e.skipSpaces(i),!(i<o)))){p=!0;break}s=e.sCount[n],e.line=f+(p?1:0);const h=e.push("fence","code",0);return h.info=l,h.content=e.getLines(n+1,f,s,!0),h.markup=c,h.map=[n,e.line],!0}function Hk(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];const a=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;const u=[],s=[],c=[],l=[],f=e.md.block.ruler.getRules("blockquote"),p=e.parentType;e.parentType="blockquote";let h=!1,d;for(d=n;d<t;d++){const b=e.sCount[d]<e.blkIndent;if(i=e.bMarks[d]+e.tShift[d],o=e.eMarks[d],i>=o)break;if(e.src.charCodeAt(i++)===62&&!b){let E=e.sCount[d]+1,w,I;e.src.charCodeAt(i)===32?(i++,E++,I=!1,w=!0):e.src.charCodeAt(i)===9?(w=!0,(e.bsCount[d]+E)%4===3?(i++,E++,I=!1):I=!0):w=!1;let C=E;for(u.push(e.bMarks[d]),e.bMarks[d]=i;i<o;){const L=e.src.charCodeAt(i);if(Ne(L))L===9?C+=4-(C+e.bsCount[d]+(I?1:0))%4:C++;else break;i++}h=i>=o,s.push(e.bsCount[d]),e.bsCount[d]=e.sCount[d]+1+(w?1:0),c.push(e.sCount[d]),e.sCount[d]=C-E,l.push(e.tShift[d]),e.tShift[d]=i-e.bMarks[d];continue}if(h)break;let y=!1;for(let E=0,w=f.length;E<w;E++)if(f[E](e,d,t,!0)){y=!0;break}if(y){e.lineMax=d,e.blkIndent!==0&&(u.push(e.bMarks[d]),s.push(e.bsCount[d]),l.push(e.tShift[d]),c.push(e.sCount[d]),e.sCount[d]-=e.blkIndent);break}u.push(e.bMarks[d]),s.push(e.bsCount[d]),l.push(e.tShift[d]),c.push(e.sCount[d]),e.sCount[d]=-1}const m=e.blkIndent;e.blkIndent=0;const v=e.push("blockquote_open","blockquote",1);v.markup=">";const _=[n,0];v.map=_,e.md.block.tokenize(e,n,d);const g=e.push("blockquote_close","blockquote",-1);g.markup=">",e.lineMax=a,e.parentType=p,_[1]=e.line;for(let b=0;b<l.length;b++)e.bMarks[b+n]=u[b],e.tShift[b+n]=l[b],e.sCount[b+n]=c[b],e.bsCount[b+n]=s[b];return e.blkIndent=m,!0}function Uk(e,n,t,r){const i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let o=e.bMarks[n]+e.tShift[n];const a=e.src.charCodeAt(o++);if(a!==42&&a!==45&&a!==95)return!1;let u=1;for(;o<i;){const c=e.src.charCodeAt(o++);if(c!==a&&!Ne(c))return!1;c===a&&u++}if(u<3)return!1;if(r)return!0;e.line=n+1;const s=e.push("hr","hr",0);return s.map=[n,e.line],s.markup=Array(u+1).join(String.fromCharCode(a)),!0}function F3(e,n){const t=e.eMarks[n];let r=e.bMarks[n]+e.tShift[n];const i=e.src.charCodeAt(r++);if(i!==42&&i!==45&&i!==43)return-1;if(r<t){const o=e.src.charCodeAt(r);if(!Ne(o))return-1}return r}function x3(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];let i=t;if(i+1>=r)return-1;let o=e.src.charCodeAt(i++);if(o<48||o>57)return-1;for(;;){if(i>=r)return-1;if(o=e.src.charCodeAt(i++),o>=48&&o<=57){if(i-t>=10)return-1;continue}if(o===41||o===46)break;return-1}return i<r&&(o=e.src.charCodeAt(i),!Ne(o))?-1:i}function Gk(e,n){const t=e.level+2;for(let r=n+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===t&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function jk(e,n,t,r){let i,o,a,u,s=n,c=!0;if(e.sCount[s]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[s]-e.listIndent>=4&&e.sCount[s]<e.blkIndent)return!1;let l=!1;r&&e.parentType==="paragraph"&&e.sCount[s]>=e.blkIndent&&(l=!0);let f,p,h;if((h=x3(e,s))>=0){if(f=!0,a=e.bMarks[s]+e.tShift[s],p=Number(e.src.slice(a,h-1)),l&&p!==1)return!1}else if((h=F3(e,s))>=0)f=!1;else return!1;if(l&&e.skipSpaces(h)>=e.eMarks[s])return!1;if(r)return!0;const d=e.src.charCodeAt(h-1),m=e.tokens.length;f?(u=e.push("ordered_list_open","ol",1),p!==1&&(u.attrs=[["start",p]])):u=e.push("bullet_list_open","ul",1);const v=[s,0];u.map=v,u.markup=String.fromCharCode(d);let _=!1;const g=e.md.block.ruler.getRules("list"),b=e.parentType;for(e.parentType="list";s<t;){o=h,i=e.eMarks[s];const y=e.sCount[s]+h-(e.bMarks[s]+e.tShift[s]);let E=y;for(;o<i;){const P=e.src.charCodeAt(o);if(P===9)E+=4-(E+e.bsCount[s])%4;else if(P===32)E++;else break;o++}const w=o;let I;w>=i?I=1:I=E-y,I>4&&(I=1);const C=y+I;u=e.push("list_item_open","li",1),u.markup=String.fromCharCode(d);const L=[s,0];u.map=L,f&&(u.info=e.src.slice(a,h-1));const $=e.tight,A=e.tShift[s],S=e.sCount[s],T=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=C,e.tight=!0,e.tShift[s]=w-e.bMarks[s],e.sCount[s]=E,w>=i&&e.isEmpty(s+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,s,t,!0),(!e.tight||_)&&(c=!1),_=e.line-s>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=T,e.tShift[s]=A,e.sCount[s]=S,e.tight=$,u=e.push("list_item_close","li",-1),u.markup=String.fromCharCode(d),s=e.line,L[1]=s,s>=t||e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)break;let R=!1;for(let P=0,M=g.length;P<M;P++)if(g[P](e,s,t,!0)){R=!0;break}if(R)break;if(f){if(h=x3(e,s),h<0)break;a=e.bMarks[s]+e.tShift[s]}else if(h=F3(e,s),h<0)break;if(d!==e.src.charCodeAt(h-1))break}return f?u=e.push("ordered_list_close","ol",-1):u=e.push("bullet_list_close","ul",-1),u.markup=String.fromCharCode(d),v[1]=s,e.line=s,e.parentType=b,c&&Gk(e,m),!0}function Vk(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n],a=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function u(g){const b=e.lineMax;if(g>=b||e.isEmpty(g))return null;let y=!1;if(e.sCount[g]-e.blkIndent>3&&(y=!0),e.sCount[g]<0&&(y=!0),!y){const I=e.md.block.ruler.getRules("reference"),C=e.parentType;e.parentType="reference";let L=!1;for(let $=0,A=I.length;$<A;$++)if(I[$](e,g,b,!0)){L=!0;break}if(e.parentType=C,L)return null}const E=e.bMarks[g]+e.tShift[g],w=e.eMarks[g];return e.src.slice(E,w+1)}let s=e.src.slice(i,o+1);o=s.length;let c=-1;for(i=1;i<o;i++){const g=s.charCodeAt(i);if(g===91)return!1;if(g===93){c=i;break}else if(g===10){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}else if(g===92&&(i++,i<o&&s.charCodeAt(i)===10)){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}}if(c<0||s.charCodeAt(c+1)!==58)return!1;for(i=c+2;i<o;i++){const g=s.charCodeAt(i);if(g===10){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}else if(!Ne(g))break}const l=e.md.helpers.parseLinkDestination(s,i,o);if(!l.ok)return!1;const f=e.md.normalizeLink(l.str);if(!e.md.validateLink(f))return!1;i=l.pos;const p=i,h=a,d=i;for(;i<o;i++){const g=s.charCodeAt(i);if(g===10){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}else if(!Ne(g))break}let m=e.md.helpers.parseLinkTitle(s,i,o);for(;m.can_continue;){const g=u(a);if(g===null)break;s+=g,i=o,o=s.length,a++,m=e.md.helpers.parseLinkTitle(s,i,o,m)}let v;for(i<o&&d!==i&&m.ok?(v=m.str,i=m.pos):(v="",i=p,a=h);i<o;){const g=s.charCodeAt(i);if(!Ne(g))break;i++}if(i<o&&s.charCodeAt(i)!==10&&v)for(v="",i=p,a=h;i<o;){const g=s.charCodeAt(i);if(!Ne(g))break;i++}if(i<o&&s.charCodeAt(i)!==10)return!1;const _=Va(s.slice(1,c));return _?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[_]>"u"&&(e.env.references[_]={title:v,href:f}),e.line=a),!0):!1}const Wk=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Xk="[a-zA-Z_:][a-zA-Z0-9:._-]*",Kk="[^\"'=<>`\\x00-\\x20]+",Yk="'[^']*'",Jk='"[^"]*"',zk="(?:"+Kk+"|"+Yk+"|"+Jk+")",Zk="(?:\\s+"+Xk+"(?:\\s*=\\s*"+zk+")?)",tS="<[A-Za-z][A-Za-z0-9\\-]*"+Zk+"*\\s*\\/?>",rS="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Qk="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",eN="<[?][\\s\\S]*?[?]>",nN="<![A-Za-z][^>]*>",tN="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",rN=new RegExp("^(?:"+tS+"|"+rS+"|"+Qk+"|"+eN+"|"+nN+"|"+tN+")"),iN=new RegExp("^(?:"+tS+"|"+rS+")"),cr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Wk.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(iN.source+"\\s*$"),/^$/,!1]];function oN(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let a=e.src.slice(i,o),u=0;for(;u<cr.length&&!cr[u][0].test(a);u++);if(u===cr.length)return!1;if(r)return cr[u][2];let s=n+1;if(!cr[u][1].test(a)){for(;s<t&&!(e.sCount[s]<e.blkIndent);s++)if(i=e.bMarks[s]+e.tShift[s],o=e.eMarks[s],a=e.src.slice(i,o),cr[u][1].test(a)){a.length!==0&&s++;break}}e.line=s;const c=e.push("html_block","",0);return c.map=[n,s],c.content=e.getLines(n,s,e.blkIndent,!0),!0}function aN(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let a=e.src.charCodeAt(i);if(a!==35||i>=o)return!1;let u=1;for(a=e.src.charCodeAt(++i);a===35&&i<o&&u<=6;)u++,a=e.src.charCodeAt(++i);if(u>6||i<o&&!Ne(a))return!1;if(r)return!0;o=e.skipSpacesBack(o,i);const s=e.skipCharsBack(o,35,i);s>i&&Ne(e.src.charCodeAt(s-1))&&(o=s),e.line=n+1;const c=e.push("heading_open","h"+String(u),1);c.markup="########".slice(0,u),c.map=[n,e.line];const l=e.push("inline","",0);l.content=e.src.slice(i,o).trim(),l.map=[n,e.line],l.children=[];const f=e.push("heading_close","h"+String(u),-1);return f.markup="########".slice(0,u),!0}function uN(e,n,t){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let o=0,a,u=n+1;for(;u<t&&!e.isEmpty(u);u++){if(e.sCount[u]-e.blkIndent>3)continue;if(e.sCount[u]>=e.blkIndent){let h=e.bMarks[u]+e.tShift[u];const d=e.eMarks[u];if(h<d&&(a=e.src.charCodeAt(h),(a===45||a===61)&&(h=e.skipChars(h,a),h=e.skipSpaces(h),h>=d))){o=a===61?1:2;break}}if(e.sCount[u]<0)continue;let p=!1;for(let h=0,d=r.length;h<d;h++)if(r[h](e,u,t,!0)){p=!0;break}if(p)break}if(!o)return!1;const s=e.getLines(n,u,e.blkIndent,!1).trim();e.line=u+1;const c=e.push("heading_open","h"+String(o),1);c.markup=String.fromCharCode(a),c.map=[n,e.line];const l=e.push("inline","",0);l.content=s,l.map=[n,e.line-1],l.children=[];const f=e.push("heading_close","h"+String(o),-1);return f.markup=String.fromCharCode(a),e.parentType=i,!0}function sN(e,n,t){const r=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let o=n+1;for(e.parentType="paragraph";o<t&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)continue;let c=!1;for(let l=0,f=r.length;l<f;l++)if(r[l](e,o,t,!0)){c=!0;break}if(c)break}const a=e.getLines(n,o,e.blkIndent,!1).trim();e.line=o;const u=e.push("paragraph_open","p",1);u.map=[n,e.line];const s=e.push("inline","",0);return s.content=a,s.map=[n,e.line],s.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const Io=[["table",Fk,["paragraph","reference"]],["code",xk],["fence",Bk,["paragraph","reference","blockquote","list"]],["blockquote",Hk,["paragraph","reference","blockquote","list"]],["hr",Uk,["paragraph","reference","blockquote","list"]],["list",jk,["paragraph","reference","blockquote"]],["reference",Vk],["html_block",oN,["paragraph","reference","blockquote"]],["heading",aN,["paragraph","reference","blockquote"]],["lheading",uN],["paragraph",sN]];function Wa(){this.ruler=new pn;for(let e=0;e<Io.length;e++)this.ruler.push(Io[e][0],Io[e][1],{alt:(Io[e][2]||[]).slice()})}Wa.prototype.tokenize=function(e,n,t){const r=this.ruler.getRules(""),i=r.length,o=e.md.options.maxNesting;let a=n,u=!1;for(;a<t&&(e.line=a=e.skipEmptyLines(a),!(a>=t||e.sCount[a]<e.blkIndent));){if(e.level>=o){e.line=t;break}const s=e.line;let c=!1;for(let l=0;l<i;l++)if(c=r[l](e,a,t,!1),c){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!u,e.isEmpty(e.line-1)&&(u=!0),a=e.line,a<t&&e.isEmpty(a)&&(u=!0,a++,e.line=a)}};Wa.prototype.parse=function(e,n,t,r){if(!e)return;const i=new this.State(e,n,t,r);this.tokenize(i,i.line,i.lineMax)};Wa.prototype.State=Zn;function Bi(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Bi.prototype.pushPending=function(){const e=new Dn("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Bi.prototype.push=function(e,n,t){this.pending&&this.pushPending();const r=new Dn(e,n,t);let i=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r};Bi.prototype.scanDelims=function(e,n){const t=this.posMax,r=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32;let o=e;for(;o<t&&this.src.charCodeAt(o)===r;)o++;const a=o-e,u=o<t?this.src.charCodeAt(o):32,s=yi(i)||bi(String.fromCharCode(i)),c=yi(u)||bi(String.fromCharCode(u)),l=gi(i),f=gi(u),p=!f&&(!c||l||s),h=!l&&(!s||f||c);return{can_open:p&&(n||!h||s),can_close:h&&(n||!p||c),length:a}};Bi.prototype.Token=Dn;function cN(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function lN(e,n){let t=e.pos;for(;t<e.posMax&&!cN(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const fN=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function dN(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,r=e.posMax;if(t+3>r||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const i=e.pending.match(fN);if(!i)return!1;const o=i[1],a=e.md.linkify.matchAtStart(e.src.slice(t-o.length));if(!a)return!1;let u=a.url;if(u.length<=o.length)return!1;let s=u.length;for(;s>0&&u.charCodeAt(s-1)===42;)s--;s!==u.length&&(u=u.slice(0,s));const c=e.md.normalizeLink(u);if(!e.md.validateLink(c))return!1;if(!n){e.pending=e.pending.slice(0,-o.length);const l=e.push("link_open","a",1);l.attrs=[["href",c]],l.markup="linkify",l.info="auto";const f=e.push("text","",0);f.content=e.md.normalizeLinkText(u);const p=e.push("link_close","a",-1);p.markup="linkify",p.info="auto"}return e.pos+=u.length-o.length,!0}function pN(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const r=e.pending.length-1,i=e.posMax;if(!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let o=r-1;for(;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<i&&Ne(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const e2=[];for(let e=0;e<256;e++)e2.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){e2[e.charCodeAt(0)]=1});function hN(e,n){let t=e.pos;const r=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=r))return!1;let i=e.src.charCodeAt(t);if(i===10){for(n||e.push("hardbreak","br",0),t++;t<r&&(i=e.src.charCodeAt(t),!!Ne(i));)t++;return e.pos=t,!0}let o=e.src[t];if(i>=55296&&i<=56319&&t+1<r){const u=e.src.charCodeAt(t+1);u>=56320&&u<=57343&&(o+=e.src[t+1],t++)}const a="\\"+o;if(!n){const u=e.push("text_special","",0);i<256&&e2[i]!==0?u.content=o:u.content=a,u.markup=a,u.info="escape"}return e.pos=t+1,!0}function mN(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const i=t;t++;const o=e.posMax;for(;t<o&&e.src.charCodeAt(t)===96;)t++;const a=e.src.slice(i,t),u=a.length;if(e.backticksScanned&&(e.backticks[u]||0)<=i)return n||(e.pending+=a),e.pos+=u,!0;let s=t,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<o&&e.src.charCodeAt(s)===96;)s++;const l=s-c;if(l===u){if(!n){const f=e.push("code_inline","code",0);f.markup=a,f.content=e.src.slice(t,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=s,!0}e.backticks[l]=c}return e.backticksScanned=!0,n||(e.pending+=a),e.pos+=u,!0}function vN(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==126)return!1;const i=e.scanDelims(e.pos,!0);let o=i.length;const a=String.fromCharCode(r);if(o<2)return!1;let u;o%2&&(u=e.push("text","",0),u.content=a,o--);for(let s=0;s<o;s+=2)u=e.push("text","",0),u.content=a+a,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function B3(e,n){let t;const r=[],i=n.length;for(let o=0;o<i;o++){const a=n[o];if(a.marker!==126||a.end===-1)continue;const u=n[a.end];t=e.tokens[a.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[u.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[u.token-1].type==="text"&&e.tokens[u.token-1].content==="~"&&r.push(u.token-1)}for(;r.length;){const o=r.pop();let a=o+1;for(;a<e.tokens.length&&e.tokens[a].type==="s_close";)a++;a--,o!==a&&(t=e.tokens[a],e.tokens[a]=e.tokens[o],e.tokens[o]=t)}}function _N(e){const n=e.tokens_meta,t=e.tokens_meta.length;B3(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&B3(e,n[r].delimiters)}const iS={tokenize:vN,postProcess:_N};function gN(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==95&&r!==42)return!1;const i=e.scanDelims(e.pos,r===42);for(let o=0;o<i.length;o++){const a=e.push("text","",0);a.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function H3(e,n){const t=n.length;for(let r=t-1;r>=0;r--){const i=n[r];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const o=n[i.end],a=r>0&&n[r-1].end===i.end+1&&n[r-1].marker===i.marker&&n[r-1].token===i.token-1&&n[i.end+1].token===o.token+1,u=String.fromCharCode(i.marker),s=e.tokens[i.token];s.type=a?"strong_open":"em_open",s.tag=a?"strong":"em",s.nesting=1,s.markup=a?u+u:u,s.content="";const c=e.tokens[o.token];c.type=a?"strong_close":"em_close",c.tag=a?"strong":"em",c.nesting=-1,c.markup=a?u+u:u,c.content="",a&&(e.tokens[n[r-1].token].content="",e.tokens[n[i.end+1].token].content="",r--)}}function bN(e){const n=e.tokens_meta,t=e.tokens_meta.length;H3(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&H3(e,n[r].delimiters)}const oS={tokenize:gN,postProcess:bN};function yN(e,n){let t,r,i,o,a="",u="",s=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const l=e.pos,f=e.posMax,p=e.pos+1,h=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(h<0)return!1;let d=h+1;if(d<f&&e.src.charCodeAt(d)===40){for(c=!1,d++;d<f&&(t=e.src.charCodeAt(d),!(!Ne(t)&&t!==10));d++);if(d>=f)return!1;if(s=d,i=e.md.helpers.parseLinkDestination(e.src,d,e.posMax),i.ok){for(a=e.md.normalizeLink(i.str),e.md.validateLink(a)?d=i.pos:a="",s=d;d<f&&(t=e.src.charCodeAt(d),!(!Ne(t)&&t!==10));d++);if(i=e.md.helpers.parseLinkTitle(e.src,d,e.posMax),d<f&&s!==d&&i.ok)for(u=i.str,d=i.pos;d<f&&(t=e.src.charCodeAt(d),!(!Ne(t)&&t!==10));d++);}(d>=f||e.src.charCodeAt(d)!==41)&&(c=!0),d++}if(c){if(typeof e.env.references>"u")return!1;if(d<f&&e.src.charCodeAt(d)===91?(s=d+1,d=e.md.helpers.parseLinkLabel(e,d),d>=0?r=e.src.slice(s,d++):d=h+1):d=h+1,r||(r=e.src.slice(p,h)),o=e.env.references[Va(r)],!o)return e.pos=l,!1;a=o.href,u=o.title}if(!n){e.pos=p,e.posMax=h;const m=e.push("link_open","a",1),v=[["href",a]];m.attrs=v,u&&v.push(["title",u]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=d,e.posMax=f,!0}function EN(e,n){let t,r,i,o,a,u,s,c,l="";const f=e.pos,p=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const h=e.pos+2,d=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(d<0)return!1;if(o=d+1,o<p&&e.src.charCodeAt(o)===40){for(o++;o<p&&(t=e.src.charCodeAt(o),!(!Ne(t)&&t!==10));o++);if(o>=p)return!1;for(c=o,u=e.md.helpers.parseLinkDestination(e.src,o,e.posMax),u.ok&&(l=e.md.normalizeLink(u.str),e.md.validateLink(l)?o=u.pos:l=""),c=o;o<p&&(t=e.src.charCodeAt(o),!(!Ne(t)&&t!==10));o++);if(u=e.md.helpers.parseLinkTitle(e.src,o,e.posMax),o<p&&c!==o&&u.ok)for(s=u.str,o=u.pos;o<p&&(t=e.src.charCodeAt(o),!(!Ne(t)&&t!==10));o++);else s="";if(o>=p||e.src.charCodeAt(o)!==41)return e.pos=f,!1;o++}else{if(typeof e.env.references>"u")return!1;if(o<p&&e.src.charCodeAt(o)===91?(c=o+1,o=e.md.helpers.parseLinkLabel(e,o),o>=0?i=e.src.slice(c,o++):o=d+1):o=d+1,i||(i=e.src.slice(h,d)),a=e.env.references[Va(i)],!a)return e.pos=f,!1;l=a.href,s=a.title}if(!n){r=e.src.slice(h,d);const m=[];e.md.inline.parse(r,e.md,e.env,m);const v=e.push("image","img",0),_=[["src",l],["alt",""]];v.attrs=_,v.children=m,v.content=r,s&&_.push(["title",s])}return e.pos=o,e.posMax=p,!0}const SN=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,AN=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function wN(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const r=e.pos,i=e.posMax;for(;;){if(++t>=i)return!1;const a=e.src.charCodeAt(t);if(a===60)return!1;if(a===62)break}const o=e.src.slice(r+1,t);if(AN.test(o)){const a=e.md.normalizeLink(o);if(!e.md.validateLink(a))return!1;if(!n){const u=e.push("link_open","a",1);u.attrs=[["href",a]],u.markup="autolink",u.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}if(SN.test(o)){const a=e.md.normalizeLink("mailto:"+o);if(!e.md.validateLink(a))return!1;if(!n){const u=e.push("link_open","a",1);u.attrs=[["href",a]],u.markup="autolink",u.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}return!1}function $N(e){return/^<a[>\s]/i.test(e)}function IN(e){return/^<\/a\s*>/i.test(e)}function TN(e){const n=e|32;return n>=97&&n<=122}function LN(e,n){if(!e.md.options.html)return!1;const t=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=t)return!1;const i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!TN(i))return!1;const o=e.src.slice(r).match(rN);if(!o)return!1;if(!n){const a=e.push("html_inline","",0);a.content=o[0],$N(a.content)&&e.linkLevel++,IN(a.content)&&e.linkLevel--}return e.pos+=o[0].length,!0}const RN=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,CN=/^&([a-z][a-z0-9]{1,31});/i;function kN(e,n){const t=e.pos,r=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=r)return!1;if(e.src.charCodeAt(t+1)===35){const o=e.src.slice(t).match(RN);if(o){if(!n){const a=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),u=e.push("text_special","",0);u.content=Zm(a)?ra(a):ra(65533),u.markup=o[0],u.info="entity"}return e.pos+=o[0].length,!0}}else{const o=e.src.slice(t).match(CN);if(o){const a=zE(o[0]);if(a!==o[0]){if(!n){const u=e.push("text_special","",0);u.content=a,u.markup=o[0],u.info="entity"}return e.pos+=o[0].length,!0}}}return!1}function U3(e){const n={},t=e.length;if(!t)return;let r=0,i=-2;const o=[];for(let a=0;a<t;a++){const u=e[a];if(o.push(0),(e[r].marker!==u.marker||i!==u.token-1)&&(r=a),i=u.token,u.length=u.length||0,!u.close)continue;n.hasOwnProperty(u.marker)||(n[u.marker]=[-1,-1,-1,-1,-1,-1]);const s=n[u.marker][(u.open?3:0)+u.length%3];let c=r-o[r]-1,l=c;for(;c>s;c-=o[c]+1){const f=e[c];if(f.marker===u.marker&&f.open&&f.end<0){let p=!1;if((f.close||u.open)&&(f.length+u.length)%3===0&&(f.length%3!==0||u.length%3!==0)&&(p=!0),!p){const h=c>0&&!e[c-1].open?o[c-1]+1:0;o[a]=a-c+h,o[c]=h,u.open=!1,f.end=a,f.close=!1,l=-1,i=-2;break}}}l!==-1&&(n[u.marker][(u.open?3:0)+(u.length||0)%3]=l)}}function NN(e){const n=e.tokens_meta,t=e.tokens_meta.length;U3(e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&U3(n[r].delimiters)}function MN(e){let n,t,r=0;const i=e.tokens,o=e.tokens.length;for(n=t=0;n<o;n++)i[n].nesting<0&&r--,i[n].level=r,i[n].nesting>0&&r++,i[n].type==="text"&&n+1<o&&i[n+1].type==="text"?i[n+1].content=i[n].content+i[n+1].content:(n!==t&&(i[t]=i[n]),t++);n!==t&&(i.length=t)}const ns=[["text",lN],["linkify",dN],["newline",pN],["escape",hN],["backticks",mN],["strikethrough",iS.tokenize],["emphasis",oS.tokenize],["link",yN],["image",EN],["autolink",wN],["html_inline",LN],["entity",kN]],ts=[["balance_pairs",NN],["strikethrough",iS.postProcess],["emphasis",oS.postProcess],["fragments_join",MN]];function Hi(){this.ruler=new pn;for(let e=0;e<ns.length;e++)this.ruler.push(ns[e][0],ns[e][1]);this.ruler2=new pn;for(let e=0;e<ts.length;e++)this.ruler2.push(ts[e][0],ts[e][1])}Hi.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),r=t.length,i=e.md.options.maxNesting,o=e.cache;if(typeof o[n]<"u"){e.pos=o[n];return}let a=!1;if(e.level<i){for(let u=0;u<r;u++)if(e.level++,a=t[u](e,!0),e.level--,a){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;a||e.pos++,o[n]=e.pos};Hi.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){const o=e.pos;let a=!1;if(e.level<i){for(let u=0;u<t;u++)if(a=n[u](e,!1),a){if(o>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(a){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Hi.prototype.parse=function(e,n,t,r){const i=new this.State(e,n,t,r);this.tokenize(i);const o=this.ruler2.getRules(""),a=o.length;for(let u=0;u<a;u++)o[u](i)};Hi.prototype.State=Bi;function ON(e){const n={};e=e||{},n.src_Any=WE.source,n.src_Cc=XE.source,n.src_Z=YE.source,n.src_P=Jm.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter="(?:(?!"+t+"|"+n.src_ZPCc+")"+n.src_Any+")",n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth="(?:(?:(?!"+n.src_ZCc+"|[@/\\[\\]()]).)+@)?",n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator="(?=$|"+t+"|"+n.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+n.src_ZPCc+"))",n.src_path="(?:[/?#](?:(?!"+n.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+n.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+n.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+n.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+n.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+n.src_ZCc+"|[']).)+\\'|\\'(?="+n.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+n.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+n.src_ZCc+"|$)|;(?!"+n.src_ZCc+"|$)|\\!+(?!"+n.src_ZCc+"|[!]|$)|\\?(?!"+n.src_ZCc+"|[?]|$))+|\\/)?",n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+"|"+n.src_pseudo_letter+"{1,63})",n.src_domain="(?:"+n.src_xn+"|(?:"+n.src_pseudo_letter+")|(?:"+n.src_pseudo_letter+"(?:-|"+n.src_pseudo_letter+"){0,61}"+n.src_pseudo_letter+"))",n.src_host="(?:(?:(?:(?:"+n.src_domain+")\\.)*"+n.src_domain+"))",n.tpl_host_fuzzy="(?:"+n.src_ip4+"|(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%)))",n.tpl_host_no_ip_fuzzy="(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%))",n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+n.src_ZPCc+"|>|$))",n.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+n.src_ZCc+")("+n.src_email_name+"@"+n.tpl_host_fuzzy_strict+")",n.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_fuzzy_strict+n.src_path+")",n.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_no_ip_fuzzy_strict+n.src_path+")",n}function zh(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function Xa(e){return Object.prototype.toString.call(e)}function PN(e){return Xa(e)==="[object String]"}function qN(e){return Xa(e)==="[object Object]"}function DN(e){return Xa(e)==="[object RegExp]"}function G3(e){return Xa(e)==="[object Function]"}function FN(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const aS={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function xN(e){return Object.keys(e||{}).reduce(function(n,t){return n||aS.hasOwnProperty(t)},!1)}const BN={"http:":{validate:function(e,n,t){const r=e.slice(n);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},HN="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",UN="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function GN(e){e.__index__=-1,e.__text_cache__=""}function jN(e){return function(n,t){const r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function j3(){return function(e,n){n.normalize(e)}}function ia(e){const n=e.re=ON(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(HN),t.push(n.src_xn),n.src_tlds=t.join("|");function r(u){return u.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function o(u,s){throw new Error('(LinkifyIt) Invalid schema "'+u+'": '+s)}Object.keys(e.__schemas__).forEach(function(u){const s=e.__schemas__[u];if(s===null)return;const c={validate:null,link:null};if(e.__compiled__[u]=c,qN(s)){DN(s.validate)?c.validate=jN(s.validate):G3(s.validate)?c.validate=s.validate:o(u,s),G3(s.normalize)?c.normalize=s.normalize:s.normalize?o(u,s):c.normalize=j3();return}if(PN(s)){i.push(u);return}o(u,s)}),i.forEach(function(u){e.__compiled__[e.__schemas__[u]]&&(e.__compiled__[u].validate=e.__compiled__[e.__schemas__[u]].validate,e.__compiled__[u].normalize=e.__compiled__[e.__schemas__[u]].normalize)}),e.__compiled__[""]={validate:null,normalize:j3()};const a=Object.keys(e.__compiled__).filter(function(u){return u.length>0&&e.__compiled__[u]}).map(FN).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+a+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+a+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),GN(e)}function VN(e,n){const t=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(t,r);this.schema=e.__schema__.toLowerCase(),this.index=t+n,this.lastIndex=r+n,this.raw=i,this.text=i,this.url=i}function Zh(e,n){const t=new VN(e,n);return e.__compiled__[t.schema].normalize(t,e),t}function gn(e,n){if(!(this instanceof gn))return new gn(e,n);n||xN(e)&&(n=e,e={}),this.__opts__=zh({},aS,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=zh({},BN,e),this.__compiled__={},this.__tlds__=UN,this.__tlds_replaced__=!1,this.re={},ia(this)}gn.prototype.add=function(n,t){return this.__schemas__[n]=t,ia(this),this};gn.prototype.set=function(n){return this.__opts__=zh(this.__opts__,n),this};gn.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;let t,r,i,o,a,u,s,c,l;if(this.re.schema_test.test(n)){for(s=this.re.schema_search,s.lastIndex=0;(t=s.exec(n))!==null;)if(o=this.testSchemaAt(n,t[2],s.lastIndex),o){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=n.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(r=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=r.index+r[1].length,(this.__index__<0||a<this.__index__)&&(this.__schema__="",this.__index__=a,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=n.indexOf("@"),l>=0&&(i=n.match(this.re.email_fuzzy))!==null&&(a=i.index+i[1].length,u=i.index+i[0].length,(this.__index__<0||a<this.__index__||a===this.__index__&&u>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=a,this.__last_index__=u))),this.__index__>=0};gn.prototype.pretest=function(n){return this.re.pretest.test(n)};gn.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};gn.prototype.match=function(n){const t=[];let r=0;this.__index__>=0&&this.__text_cache__===n&&(t.push(Zh(this,r)),r=this.__last_index__);let i=r?n.slice(r):n;for(;this.test(i);)t.push(Zh(this,r)),i=i.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null};gn.prototype.matchAtStart=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const r=this.testSchemaAt(n,t[2],t[0].length);return r?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+r,Zh(this,0)):null};gn.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,i,o){return r!==o[i-1]}).reverse(),ia(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,ia(this),this)};gn.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};gn.prototype.onCompile=function(){};const pr=2147483647,Vn=36,n2=1,Ei=26,WN=38,XN=700,uS=72,sS=128,cS="-",KN=/^xn--/,YN=/[^\0-\x7F]/,JN=/[\x2E\u3002\uFF0E\uFF61]/g,zN={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},rs=Vn-n2,Wn=Math.floor,is=String.fromCharCode;function St(e){throw new RangeError(zN[e])}function ZN(e,n){const t=[];let r=e.length;for(;r--;)t[r]=n(e[r]);return t}function lS(e,n){const t=e.split("@");let r="";t.length>1&&(r=t[0]+"@",e=t[1]),e=e.replace(JN,".");const i=e.split("."),o=ZN(i,n).join(".");return r+o}function fS(e){const n=[];let t=0;const r=e.length;for(;t<r;){const i=e.charCodeAt(t++);if(i>=55296&&i<=56319&&t<r){const o=e.charCodeAt(t++);(o&64512)==56320?n.push(((i&1023)<<10)+(o&1023)+65536):(n.push(i),t--)}else n.push(i)}return n}const QN=e=>String.fromCodePoint(...e),eM=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Vn},V3=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},dS=function(e,n,t){let r=0;for(e=t?Wn(e/XN):e>>1,e+=Wn(e/n);e>rs*Ei>>1;r+=Vn)e=Wn(e/rs);return Wn(r+(rs+1)*e/(e+WN))},pS=function(e){const n=[],t=e.length;let r=0,i=sS,o=uS,a=e.lastIndexOf(cS);a<0&&(a=0);for(let u=0;u<a;++u)e.charCodeAt(u)>=128&&St("not-basic"),n.push(e.charCodeAt(u));for(let u=a>0?a+1:0;u<t;){const s=r;for(let l=1,f=Vn;;f+=Vn){u>=t&&St("invalid-input");const p=eM(e.charCodeAt(u++));p>=Vn&&St("invalid-input"),p>Wn((pr-r)/l)&&St("overflow"),r+=p*l;const h=f<=o?n2:f>=o+Ei?Ei:f-o;if(p<h)break;const d=Vn-h;l>Wn(pr/d)&&St("overflow"),l*=d}const c=n.length+1;o=dS(r-s,c,s==0),Wn(r/c)>pr-i&&St("overflow"),i+=Wn(r/c),r%=c,n.splice(r++,0,i)}return String.fromCodePoint(...n)},hS=function(e){const n=[];e=fS(e);const t=e.length;let r=sS,i=0,o=uS;for(const s of e)s<128&&n.push(is(s));const a=n.length;let u=a;for(a&&n.push(cS);u<t;){let s=pr;for(const l of e)l>=r&&l<s&&(s=l);const c=u+1;s-r>Wn((pr-i)/c)&&St("overflow"),i+=(s-r)*c,r=s;for(const l of e)if(l<r&&++i>pr&&St("overflow"),l===r){let f=i;for(let p=Vn;;p+=Vn){const h=p<=o?n2:p>=o+Ei?Ei:p-o;if(f<h)break;const d=f-h,m=Vn-h;n.push(is(V3(h+d%m,0))),f=Wn(d/m)}n.push(is(V3(f,0))),o=dS(i,c,u===a),i=0,++u}++i,++r}return n.join("")},nM=function(e){return lS(e,function(n){return KN.test(n)?pS(n.slice(4).toLowerCase()):n})},tM=function(e){return lS(e,function(n){return YN.test(n)?"xn--"+hS(n):n})},mS={version:"2.3.1",ucs2:{decode:fS,encode:QN},decode:pS,encode:hS,toASCII:tM,toUnicode:nM},rM={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},iM={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},oM={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},aM={default:rM,zero:iM,commonmark:oM},uM=/^(vbscript|javascript|file|data):/,sM=/^data:image\/(gif|png|jpeg|webp);/;function cM(e){const n=e.trim().toLowerCase();return uM.test(n)?sM.test(n):!0}const vS=["http:","https:","mailto:"];function lM(e){const n=Ym(e,!0);if(n.hostname&&(!n.protocol||vS.indexOf(n.protocol)>=0))try{n.hostname=mS.toASCII(n.hostname)}catch{}return xi(Km(n))}function fM(e){const n=Ym(e,!0);if(n.hostname&&(!n.protocol||vS.indexOf(n.protocol)>=0))try{n.hostname=mS.toUnicode(n.hostname)}catch{}return Sr(Km(n),Sr.defaultChars+"%")}function bn(e,n){if(!(this instanceof bn))return new bn(e,n);n||zm(e)||(n=e||{},e="default"),this.inline=new Hi,this.block=new Wa,this.core=new Qm,this.renderer=new Or,this.linkify=new gn,this.validateLink=cM,this.normalizeLink=lM,this.normalizeLinkText=fM,this.utils=pk,this.helpers=ja({},_k),this.options={},this.configure(e),n&&this.set(n)}bn.prototype.set=function(e){return ja(this.options,e),this};bn.prototype.configure=function(e){const n=this;if(zm(e)){const t=e;if(e=aM[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};bn.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};bn.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};bn.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};bn.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};bn.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};bn.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};bn.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};const _S="text-paragraph",t2="text-blockquote",gS="text-list",bS="text-ordered-list",yS="text-list-item",dM="prose-link",pM=["paragraph","list","blockquote","newline","emphasis","html_inline","text","balance_pairs","fragments_join","text_join"],hM="prose_link",W3=new RegExp(FE.source,"y");function mM(e,n){if(e.src.charCodeAt(e.pos)!==91)return!1;W3.lastIndex=e.pos;const t=W3.exec(e.src);if(t===null)return!1;const[r,i,o]=t;if(i===void 0||o===void 0)throw new Error("prose markdown: MD_LINK_RE lost a capture group");if(!n){const a=e.push("link_open","a",1);a.attrs=[["href",o]];const u=e.push("text","",0);u.content=i,e.push("link_close","a",-1)}return e.pos+=r.length,!0}const ES=new bn("zero",{html:!0,breaks:!0,linkify:!1}).enable([...pM]);ES.inline.ruler.push(hM,mM);function vM(e,n){const t=ES.parse(e,{});return _M(t,n)}function _M(e,n){return gM(e,n),Po(e,0,e.length,!0)}function gM(e,n){for(const t of e)if(t.type==="inline"&&t.children)for(const r of t.children)r.type==="text"&&(r.type="html_inline",r.content=r.content===""?"":n(r.content))}function $t(e,n){const t=e[n];if(t===void 0)throw new Error(`prose markdown: token index ${n} out of range`);return t}function To(e,n,t){let r=0;for(let i=n;i<t;i++)if(r+=$t(e,i).nesting,r===0)return i;throw new Error(`prose markdown: unclosed ${$t(e,n).type} at token ${n}`)}function bM(e,n,t){return t-n===3&&$t(e,n).type==="paragraph_open"&&$t(e,n+1).type==="inline"&&$t(e,n+2).type==="paragraph_close"}function Po(e,n,t,r){if(r&&bM(e,n,t))return X3($t(e,n+1));let i="",o=n;for(;o<t;){const a=$t(e,o);switch(a.type){case"paragraph_open":{const u=To(e,o,t),s=$t(e,o+1);if(u!==o+2||s.type!=="inline")throw new Error("prose markdown: paragraph without a single inline child");const c=X3(s);i+=a.hidden?c:`<span class="${_S}">${c}</span>`,o=u+1;break}case"blockquote_open":{const u=To(e,o,t);i+=`<span class="${t2}">`+Po(e,o+1,u,!0)+"</span>",o=u+1;break}case"bullet_list_open":case"ordered_list_open":{const u=To(e,o,t);i+=yM(a)+Po(e,o+1,u,!1)+"</span>",o=u+1;break}case"list_item_open":{const u=To(e,o,t);i+=`<span class="${yS}">`+Po(e,o+1,u,!1)+"</span>",o=u+1;break}default:throw new Error(`prose markdown: unsupported block token '${a.type}'`)}}return i}function yM(e){if(e.type==="bullet_list_open")return`<span class="${gS}">`;const n=e.attrGet("start"),t=n===null?"":` style="counter-reset: list-item ${Number(n)-1}"`;return`<span class="${bS}"${t}>`}function X3(e){let n="";for(const t of e.children??[])switch(t.type){case"html_inline":n+=t.content;break;case"softbreak":case"hardbreak":n+="<br>";break;case"strong_open":n+="<strong>";break;case"strong_close":n+="</strong>";break;case"em_open":case"em_close":n+=t.markup;break;case"link_open":{const r=t.attrGet("href")??"";n+=`<a class="${dM}" href="${Z(r)}" target="_blank" rel="noopener">`;break}case"link_close":n+="</a>";break;default:throw new Error(`prose markdown: unsupported inline token '${t.type}'`)}return n}const EM="inline-note-ref",SS="inline-note-popover-trigger",AS="data-popover-inline-body";function SM(e){return encodeURIComponent(e)}function AM(e){return decodeURIComponent(e)}function wM(e){return $3.lastIndex=0,e.replace($3,(n,t)=>{const r=Z(SM(t));return`<sup class="${EM}"><button type="button" class="${SS}" ${AS}="${r}" aria-label="Show note" aria-expanded="false"></button></sup>`})}const $M=2,IM="&nbsp;".repeat($M),wS="framing-slot",$S="data-framing-anchor";function Ui(e,n){return e.jprobInstance.framing_static_anchor_ids().has(n)?`<div class="${wS}" ${$S}="${Z(n)}"></div>`:""}const IS="bare-id-label";function TS(e,n){return e.showBareIds??!1?`<span class="${IS}">${U(n)}</span>`:""}function TM(e,n){return`<span class="${IS}" id="${Z(n)}">${U(e)}</span>`}const LM="❝",ui="srcquote-widget",qo="srcquote-glyph",RM="srcquote-popover",CM="srcquote-attribution",kM="srcquotes-inline",NM={atStart:"",atEnd:""};function LS(e,n){return Ae(e.defn,n)+`<span class="${CM}">— ${U(e.attribution)}</span>`}function MM(e){const n=Z(ME({kind:"sourcequote",sourcequoteIds:e}));return`<span class="${ui}"><button class="${qo}" type="button" aria-expanded="false" ${Qo}="${n}" aria-label="Source quotes">${LM}</button></span>`}function OM(e,n){return e.map(t=>LS(t,n)).join("")}function PM(e,n){const t=e.map(r=>LS(r,n));return`<span class="${kM}">${t.join("")}</span>`}function Pn(e,n){var t;if(!e||e.length===0)return NM;for(const r of e)(t=n.renderedSrcquoteIds)==null||t.add(r);if(n.srcquotesInlined??!1){const r=n.jprobInstance.resolve_srcquotes(e);return{atStart:"",atEnd:PM(r,n)}}return{atStart:MM(e),atEnd:""}}const qM=!0;function li(e,n,t){var r;return((r=e==null?void 0:e[n])==null?void 0:r[t])??qM}function Ae(e,n){const t=AC(e,n.jprobInstance),r=$C(n.jprobInstance),i=n.popoverAllRefs?{popoverAllRefs:!0}:void 0;return vM(t,a=>{let u=IC(a,r);return u=uC(u,n.refLookup,i,n.unresolvedRefs),u=wM(u),u})}function DM(e,n){return e.get_isym(n).longname??n}function FM(e){return e.startsWith("isym:")?e.slice(5):e}function xM(e,n){return e.get_isym(n).kind}function BM(e,n){const t=dC[xM(e,n)];let r=`${n} : ${t}`;const i=DM(e,n);return i&&n!==i&&(r+=`${IM}(aka ${i})`),r}function HM(e){if(!e.args||e.args.length===0)return e.id.slice(11);const n=e.id.slice(11),t=e.args.map(r=>`<i>${typeof r=="string"?r:r.name}</i>`);return`${n}(${t.join(", ")})`}function UM(e){const n=[];for(const t of e.jprobInstance.definedSym){if(t.always_inline)continue;const r=e.jprobInstance.get_display_definedSym_or_none(t.id);if(!r)continue;const o=`defsym-${t.id.slice(11)}`,a=HM(t),u=Ae(r,e),c=[`<h3>${`${a} ≔ ${u}`}</h3>`],l=Pn(t.srcquotes,e);t.defn?c.push(`<p class="definition">${l.atStart}${Ae(t.defn,e)}${l.atEnd}</p>`):(l.atStart||l.atEnd)&&c.push(`<p class="definition">${l.atStart}${l.atEnd}</p>`),c.push(Ui(e,t.id)),n.push(`<div class="defsym-card" id="${o}">${c.join("")}</div>`)}return n.join("")}function GM(e){const n=Gm(e.jprobInstance);if(!n.length)return"";const t=[];for(const r of n){const i=Pn(e.jprobInstance.get_textdefn(r.id).srcquotes,e);t.push(`<dt id="${r.anchorId}">${r.displayTerm}</dt><dd>${i.atStart}${Ae(r.defn,e)}${i.atEnd}${Ui(e,`textdefn:${r.bareName}`)}</dd>`)}return`<dl class="definitions">${t.join("")}</dl>`}function jM(e){const n=e.jprobInstance.isym_entries();if(!n.length)return"";const t=[];for(const r of n){const i=FM(r.id);if(e.jprobInstance.can_consolidate_isym_svar(`isym:${i}`))continue;const o=[];o.push(`<h3>${BM(e.jprobInstance,i)}</h3>`);const a=Pn(r.srcquotes,e);o.push(`<p class="definition">${a.atStart}${Ae(r.defn,e)}${a.atEnd}</p>`);const u=(r.pos??[]).filter(f=>T3(f.classification,e.showTypical)),s=(r.neg??[]).filter(f=>T3(f.classification,e.showTypical)),c=li(e.exampleFoldState,i,"pos"),l=li(e.exampleFoldState,i,"neg");if(u.length>0||s.length>0){const f=[];u.length>0&&f.push(`<button class="ex-btn pos${c?" active":""}" data-isym="${i}" data-type="pos" title="Satisfying examples">+</button>`),s.length>0&&f.push(`<button class="ex-btn neg${l?" active":""}" data-isym="${i}" data-type="neg" title="Falsifying examples">&minus;</button>`),o.push(`<div class="example-controls">${f.join("")}</div>`)}if(u.length>0){const f=u.map(p=>{const h=p.alias?` id="ex-${p.alias}"`:"",d=e.showExampleClassification?`<span class="classification">${p.classification.charAt(0).toUpperCase()+p.classification.slice(1)}:</span> `:"",m=Pn(p.srcquotes,e);return`<li${h}>${d}${m.atStart}${Ae(p.defn,e)}${m.atEnd}</li>`});o.push(`<div class="examples pos${c?" visible":""}"><p>Satisfying examples:</p><ul>${f.join("")}</ul></div>`)}if(s.length>0){const f=s.map(p=>{const h=p.alias?` id="ex-${p.alias}"`:"",d=e.showExampleClassification?`<span class="classification">${p.classification.charAt(0).toUpperCase()+p.classification.slice(1)}:</span> `:"",m=Pn(p.srcquotes,e);return`<li${h}>${d}${m.atStart}${Ae(p.defn,e)}${m.atEnd}</li>`});o.push(`<div class="examples neg${l?" visible":""}"><p>Falsifying examples:</p><ul>${f.join("")}</ul></div>`)}o.push(Ui(e,`isym:${i}`)),t.push(`<div class="isym-card" id="isym-${i}">${o.join("")}</div>`)}return t.join("")}function os(e,{classification:n}){const t=[];for(const r of e.jprobInstance.get_axioms_in_display_section(n)){const i=e.jprobInstance.get_display_ax(r.id);if(!i)continue;const o=_i(r.id),a=r.defn?`<div class="ax-defn">${Ae(r.defn,e)}</div>`:"",u=Ui(e,r.id),s=Pn(r.srcquotes,e);t.push(`<div class="ax-card" id="${jm}${o}">`+TS(e,o)+`<div class="ax-expr">${s.atStart}${Ae(i,e)}</div>${a}${s.atEnd}${u}</div>`)}return t.length===0?"":`<div class="axioms">${t.join("")}</div>`}function VM(e){const n=[],t=xE(e.jprobInstance),r=gC(e.jprobInstance,t);for(const i of t){const o=r.get(i),a=Ga(i);n.push(`<div class="formula" id="form-${a}">`+TS(e,a)+Ae(o,e)+Ui(e,i)+"</div>")}return n.join("")}const WM=[{id:"symbolMnames",description:"Long symbol names",type:"boolean",default:!1},{id:"popoverAllRefs",description:"Popovers for all refs",type:"boolean",default:!0},{id:"persistentPopovers",description:"Persistent popovers (multiple, Esc to close)",type:"boolean",default:!0},{id:"inputMode",description:"Response type",type:"enum",values:["point","bounds","sample"],default:"sample"},{id:"probAsOdds",description:"Stats display",type:"enum",values:["probability","odds"],default:"probability"},{id:"showExampleClassification",description:"Show example classifications",type:"boolean",default:!0},{id:"showGlobalExampleControls",description:"Global example folding controls",type:"boolean",default:!1},{id:"showFramingNotes",description:"Show framing notes",type:"boolean",default:!0},{id:"longTextAbbrev",description:"Abbreviate long text",type:"boolean",default:!0},{id:"longTextAbbrevThreshold",description:"Abbreviation soft threshold",type:"integer",default:800,min:25,step:25},{id:"mcItersInitialPerPlot",description:"MC iters per plot (initial)",type:"integer",default:1e4,min:1e3,step:1e3},{id:"mcItersPerClickPerPlot",description:"MC iters per plot (+ click)",type:"integer",default:5e3,min:1e3,step:1e3},{id:"plaincodeEvalTimeoutMs",description:"Code eval timeout (ms)",type:"integer",default:5e3,min:1e3,step:1e3}],XM={options:WM},r2=XM.options,KM=new Map(r2.map(e=>[e.id,e.description]));function Si(e){return KM.get(e)??e}const as=Object.freeze(r2.reduce((e,n)=>(e[n.id]=n.default,e),{})),RS="global_options";function cn(){try{const e=localStorage.getItem(RS);if(e===null)return{...as};const n=JSON.parse(e);return{...as,...n}}catch{return{...as}}}function YM(e){localStorage.setItem(RS,JSON.stringify(e))}function Ka(e,n){const t=cn();t[e]=n,YM(t)}const JM=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),zM=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function Bn(e,n){return e>>>n|e<<32-n}function CS(e){const n=new TextEncoder().encode(e),t=n.length<<3>>>0,r=Math.floor(n.length/536870912),i=n.length+9+63&-64,o=new Uint8Array(i);o.set(n),o[n.length]=128;const a=new DataView(o.buffer);a.setUint32(i-8,r),a.setUint32(i-4,t);const u=new Uint32Array(zM),s=new Uint32Array(64);for(let l=0;l<i;l+=64){for(let b=0;b<16;b++)s[b]=a.getUint32(l+b*4);for(let b=16;b<64;b++){const y=s[b-15],E=s[b-2],w=Bn(y,7)^Bn(y,18)^y>>>3,I=Bn(E,17)^Bn(E,19)^E>>>10;s[b]=s[b-16]+w+s[b-7]+I|0}let f=u[0],p=u[1],h=u[2],d=u[3],m=u[4],v=u[5],_=u[6],g=u[7];for(let b=0;b<64;b++){const y=Bn(m,6)^Bn(m,11)^Bn(m,25),E=m&v^~m&_,w=g+y+E+JM[b]+s[b]|0,I=Bn(f,2)^Bn(f,13)^Bn(f,22),C=f&p^f&h^p&h,L=I+C|0;g=_,_=v,v=m,m=d+w|0,d=h,h=p,p=f,f=w+L|0}u[0]=u[0]+f|0,u[1]=u[1]+p|0,u[2]=u[2]+h|0,u[3]=u[3]+d|0,u[4]=u[4]+m|0,u[5]=u[5]+v|0,u[6]=u[6]+_|0,u[7]=u[7]+g|0}let c="";for(let l=0;l<8;l++)c+=(u[l]>>>0).toString(16).padStart(8,"0");return c}const kS=5;function K3(e){const n={};for(const t of Object.keys(e).sort())n[t]=e[t];return n}function ZM(e){return CS(JSON.stringify(e)).slice(0,kS)}function NS(e,n,t,r){const i=[n,K3(t)];return e==="plainnum"&&i.push(K3(r??{})),CS(JSON.stringify(i)).slice(0,kS)}const sn="0",_n="1",i2=["plaincode","plainnum"];function Gi(e,n){return n==="plainnum"?e.adhocPlainnumEntries:e.adhocPlaincodeEntries}function Ya(e,n,t){return n==="plainnum"?e.plainnum[t.resultIndex]:e.plaincode[t.resultIndex]}function QM(e){const n=Object.keys(e.reasoning_response).some(o=>e.reasoning_response[o]!==""),t=e.misc_response!=="",r=e.trial_choices!==void 0&&Object.keys(e.trial_choices).length>0;if(!n&&!t&&!r)return[];const i={};return n&&(i.reasoning=e.reasoning_response),t&&(i.misc=e.misc_response),r&&(i.trial_choices=e.trial_choices),[i]}function ji(e){return!!e.verified_code_input&&e.cparam_combos.length>0}function Vi(e){if(e.count!==1)throw new Error(`Plaincode record "${e.label}" has count ${e.count}; a yours or adhoc plaincode record is always single-trial`);return{...e,cparam_combos:e.cparam_combos.map(n=>({...n,trials:n.trials.map(t=>({trial_index:0,...t}))})),model:"user",version:"",effort:null,jtask_group_id:"",prompt_file_basename:"yours-plaincode",trial_metadata:QM(e)}}function eO(e,n){const t=e.find(r=>r.mode==="richcode"&&r.name===n);return t?t.note:null}function nO(e){const n=[],t=[];for(let r=0;r<e.length;r++){const i=e[r];for(let o=0;o<i.plainnum.length;o++)n.push({presetIndex:r,resultIndex:o});for(let o=0;o<i.plaincode.length;o++)t.push({presetIndex:r,resultIndex:o})}return{plainnum:n,plaincode:t}}function tO(e,n,t){const r=e.name_or_pseudoname,o=e.plainnum.length>0&&e.plaincode.length>0?` [${n}]`:"",a=t.prompt_file_basename?` (${t.prompt_file_basename})`:"";return`${r}${o} ${t.label}${a}`}function rO(e){return e.filter(n=>n.prompt_file_basename.startsWith("richcode"))}const iO=/^[0-9a-f]{5}$/;function oO(e){return!iO.test(e)}const Y3=0,aO=1,uO=2;function sO(e,n){const t=new Map;for(const i of n)i.mode==="richcode"&&i.declared_display_position!==null&&t.set(i.name,i.declared_display_position);const r=i=>t.has(i)?Y3:oO(i)?aO:uO;return[...new Set(e)].sort((i,o)=>{const a=r(i),u=r(o);return a!==u?a-u:a===Y3?t.get(i)-t.get(o):i<o?-1:i>o?1:0})}function Ie(e){const n=e.indexOf(":");return n===-1?{source:e,index:-1}:{source:e.slice(0,n),index:parseInt(e.slice(n+1))}}function ht(e){return e.slice(0,e.indexOf("-"))}function ln(e){return e.slice(e.indexOf("-")+1)}function Xe(e){return ht(Ie(e).source)==="yours"}function o2(e,n){const t=`trial${n===1?"":"s"}`;switch(e){case"metho":return`${n} agent ${t}`;case"adhoc":return`${n} adhoc ${t}`;case"yours":return`${n} ${t} of yours`}}function cO(e){return ht(e)==="adhoc"}function a2(e){return ht(e)==="metho"}function lO(e,n){var i,o;const{source:t,index:r}=Ie(e);if(t==="adhoc-plainnum"){const a=n.adhocPlainnumEntries[r];return a?((i=n.adhocPresets[a.presetIndex])==null?void 0:i.plainnum[a.resultIndex])??null:null}if(t==="adhoc-plaincode"){const a=n.adhocPlaincodeEntries[r];if(!a)return null;const u=(o=n.adhocPresets[a.presetIndex])==null?void 0:o.plaincode[a.resultIndex];return u?Vi(u):null}return null}function Qh(e,n){var o;const{source:t,index:r}=Ie(e);if(t!=="adhoc-plaincode")return null;const i=n.adhocPlaincodeEntries[r];return i?((o=n.adhocPresets[i.presetIndex])==null?void 0:o.plaincode[i.resultIndex])??null:null}function fO(e,n){const{source:t,index:r}=Ie(e);if(t==="adhoc-plainnum"){const i=n.adhocPlainnumEntries[r];return i?n.adhocPresets[i.presetIndex]??null:null}if(t==="adhoc-plaincode"){const i=n.adhocPlaincodeEntries[r];return i?n.adhocPresets[i.presetIndex]??null:null}return null}function MS(e,n){if(!n)return{point:!0,bounds:!0,sample:!0};const{source:t}=Ie(e),i=ln(t)!=="plainnum";i&&s2(n);const o=i?n.cparam_combos.flatMap(u=>u.trials):n.trials,a=u=>o.some(s=>Object.keys(s[u]).length>0);return{point:a("point"),bounds:(!i||u2(n))&&a("bounds"),sample:a("sample")}}const dO=["sample","bounds","point"];function OS(e,n){return e[n]?n:dO.find(t=>e[t])??n}function PS(e,n,t){return Xe(e)?t:OS(MS(e,n),t)}function u2(e){return e.count===1}function s2(e){for(const[t,r]of e.cparam_combos.entries()){if(r.trials.length===0||r.trials.length>e.count)throw new Error(`Code result cparam combo ${t} carries ${r.trials.length} trials; expected between 1 and the record trial count ${e.count}`);const i=new Set;for(const o of r.trials){const a=o.trial_index;if(a===void 0)throw new Error(`Code result cparam combo ${t} carries a trial with no trial_index; regenerate the result data (trial-dict schema >= 9)`);if(!Number.isInteger(a)||a<0||a>=e.count)throw new Error(`Code result cparam combo ${t} carries trial_index ${a}; expected an integer in [0, ${e.count})`);if(i.has(a))throw new Error(`Code result cparam combo ${t} carries record trial ${a} more than once`);i.add(a)}}const n=e.trial_metadata;if(n!==void 0&&n.length>0&&n.length!==e.count)throw new Error(`Code result carries ${n.length} trial_metadata entries; expected one per trial (record trial count ${e.count})`)}function kt(e){if(e.trial_index===void 0)throw new Error("Code-mode combo trial carries no trial_index");return e.trial_index}function Nt(e){return zt(e)?e.count:e.trials.length}function qS(e,n){return e.find(t=>kt(t)===n)}function DS(e,n){var t;return zt(e)?(t=e.trial_metadata)==null?void 0:t[n]:e.trials[n]}function pO(e,n){return DS(e,n)}function c2(e,n){var t;return zt(e)?(t=e.trial_metadata)==null?void 0:t[n]:void 0}function hO(e,n){var t;return(t=DS(e,n))==null?void 0:t.trial_choices}function zt(e){return"cparam_combos"in e}function l2(e,n,t){if(n==="point"){const i=e.point[t];return i===void 0?"":String(i)}if(n==="bounds"){const i=e.bounds[t];return i?`${i[0]} ${i[1]}`:""}const r=e.sample[t];return r?typeof r=="string"?r:r.map(([i,o])=>`(${i} ${o})`).join(" "):""}function FS(e,n){return["point","bounds","sample"].filter(t=>n.length>0&&n.every(r=>l2(e,t,r)!==""))}function mO(e,n,t){return t.map(r=>l2(e,n,r)).join(`
`)}function vO(e,n,t,r){const{source:i}=Ie(e);return i==="adhoc-plainnum"?n.trials.map(a=>r.map(u=>l2(a,t,u))):[]}const un={whose:"whose",jtaskGroup:"jtask_group",model:"model",version:"version",effort:"effort",aggregate:"aggregate",adhocName:"adhoc_name",adhocLabel:"adhoc_label"},f2=Object.values(un),oa="preset",Do=["yours-plainnum","yours-plaincode","adhoc-plainnum","adhoc-plaincode","metho-richcode"],em=["model_size__version","model_size","all"];function xS(e,n){const{source:t,index:r}=Ie(e);if(!Do.includes(t))return null;const i=ht(t);if(i==="yours"){const c=ln(t);return c!=="plainnum"&&c!=="plaincode"?null:{whoseKind:"yours",queryMode:c}}if(i!=="adhoc")return null;const o=ln(t),a=Gi(n.presetData,o)[r];if(a===void 0)return null;const u=n.presetData.adhocPresets[a.presetIndex];if(u===void 0)return null;const s=Ya(u,o,a);return s===void 0?null:{whoseKind:"adhoc",nameOrPseudoname:u.name_or_pseudoname,queryMode:o,label:s.label}}function _O(e,n){if(e.whoseKind==="yours")return`yours-${e.queryMode}`;if(e.whoseKind!=="adhoc")return null;const t=gO(e,n.presetData);return t===null?null:`adhoc-${e.queryMode}:${t}`}function gO(e,n){const t=Gi(n,e.queryMode);for(let r=0;r<t.length;r++){const i=t[r],o=n.adhocPresets[i.presetIndex];if(o===void 0||o.name_or_pseudoname!==e.nameOrPseudoname)continue;const a=Ya(o,e.queryMode,i);if(a!==void 0&&a.label===e.label)return r}return null}function bO(e){const n=[];for(const t of i2){const r=new Set;for(const i of Gi(e,t)){const o=e.adhocPresets[i.presetIndex];if(o===void 0)continue;const a=Ya(o,t,i);if(a===void 0)continue;const u=nm({whoseKind:"adhoc",nameOrPseudoname:o.name_or_pseudoname,queryMode:t,label:a.label});r.has(u)?n.push(u):r.add(u)}}return n}function nm(e){if(e.whoseKind==="yours")return`yours ${e.queryMode}`;if(e.whoseKind==="adhoc")return`adhoc ${e.queryMode} ${JSON.stringify(e.nameOrPseudoname)} labelled ${JSON.stringify(e.label)}`;const n=e.effort??"no effort (pooled)",t=e.aggregate===null?"":`, aggregate ${e.aggregate}`;return`methodical ${e.model} ${e.version} ${n} in task group ${e.jtaskGroupId}${t}`}function yO(e){const n=e.get(oa),t=EO(e);return n===null?t:{identity:t.identity,errors:[`${oa}=${JSON.stringify(n)} is a retired list position, not a selection this deploy can resolve; the link's selection was dropped and the rest of it kept`]}}function EO(e){const n=[],t=e.get(un.whose);if(t===null)return SO(e)&&n.push(`selection parameters were given without whose; expected whose=${Do.join("|")}`),{identity:null,errors:n};const r=Do.find(f=>f===t);if(r===void 0)return n.push(`whose=${JSON.stringify(t)} invalid; expected one of: ${Do.join(", ")}`),{identity:null,errors:n};const i=ht(r);if(i==="yours"){const f=ln(r);return f!=="plainnum"&&f!=="plaincode"?(n.push(`whose=${JSON.stringify(r)} has no readable query mode`),{identity:null,errors:n}):{identity:{whoseKind:"yours",queryMode:f},errors:n}}if(i==="adhoc"){const f=e.get(un.adhocName),p=e.get(un.adhocLabel),h=[f===null?un.adhocName:null,p===null?un.adhocLabel:null].filter(d=>d!==null);return f===null||p===null?(n.push(`whose=${r} requires ${h.join(" and ")}`),{identity:null,errors:n}):{identity:{whoseKind:"adhoc",nameOrPseudoname:f,queryMode:ln(r),label:p},errors:n}}const o=e.get(un.jtaskGroup),a=e.get(un.model),u=e.get(un.version),s=[o===null?un.jtaskGroup:null,a===null?un.model:null,u===null?un.version:null].filter(f=>f!==null);if(o===null||a===null||u===null)return n.push(`whose=${r} requires ${s.join(", ")}`),{identity:null,errors:n};const c=e.get(un.aggregate),l=c===null?null:em.find(f=>f===c)??null;return c!==null&&l===null?(n.push(`aggregate=${JSON.stringify(c)} invalid; expected one of: ${em.join(", ")}`),{identity:null,errors:n}):{identity:{whoseKind:"metho",jtaskGroupId:o,model:a,version:u,effort:e.get(un.effort),aggregate:l},errors:n}}function SO(e){return f2.some(n=>n!==un.whose&&e.has(n))}function AO(e){if(typeof e!="object"||e===null)return null;const n=e;if(n.whoseKind==="yours")return n.queryMode==="plainnum"||n.queryMode==="plaincode"?{whoseKind:"yours",queryMode:n.queryMode}:null;if(n.whoseKind==="adhoc")return typeof n.nameOrPseudoname!="string"||typeof n.label!="string"||n.queryMode!=="plainnum"&&n.queryMode!=="plaincode"?null:{whoseKind:"adhoc",nameOrPseudoname:n.nameOrPseudoname,queryMode:n.queryMode,label:n.label};if(n.whoseKind==="metho"){if(typeof n.jtaskGroupId!="string"||typeof n.model!="string"||typeof n.version!="string"||n.effort!==null&&typeof n.effort!="string")return null;const t=n.aggregate??null,r=t===null?null:em.find(i=>i===t)??null;return t!==null&&r===null?null:{whoseKind:"metho",jtaskGroupId:n.jtaskGroupId,model:n.model,version:n.version,effort:n.effort,aggregate:r}}return null}function wO(e){const{source:n}=Ie(e);return e.includes(":")&&(a2(n)||ht(n)==="adhoc")}function $O(e){return e!=="yours-plainnum"&&e!=="yours-plaincode"?null:{whoseKind:"yours",queryMode:e==="yours-plainnum"?"plainnum":"plaincode"}}const yt=[{name:"low",abbreviation:"L"},{name:"medium",abbreviation:"M"},{name:"high",abbreviation:"H"},{name:"xhigh",abbreviation:"XH"},{name:"max",abbreviation:"MAX"}],tm=[{model:"sonnet",abbreviation:"s",agentCli:"claudecode",efforts:yt},{model:"opus",abbreviation:"o",agentCli:"claudecode",efforts:yt},{model:"fable",abbreviation:"f",agentCli:"claudecode",efforts:yt},{model:"luna",abbreviation:"gl",agentCli:"codex",efforts:yt},{model:"terra",abbreviation:"gt",agentCli:"codex",efforts:yt},{model:"sol",abbreviation:"gs",agentCli:"codex",efforts:yt},{model:"astra",abbreviation:"ga",agentCli:"codex",efforts:yt}],Ja=":";function Wi(e){const n=tm.findIndex(t=>t.model===e);if(n<0)throw new Error(`unknown model ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:tm[n],order:n}}function Ai(e){return Wi(e).config.agentCli}function d2(e,n){const{config:t}=Wi(e),r=t.efforts.findIndex(i=>i.name===n);if(r<0)throw new Error(`unknown effort ${JSON.stringify(n)} for model ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:t.efforts[r],order:r}}function IO(e,n){return e===n?0:e<n?-1:1}function TO(e,n,t){if(n.length===0)throw new Error(`makeModelVersionEffortKey: empty version not supported (model=${e}).`);if(t===null)throw new Error(`makeModelVersionEffortKey: null effort not supported (model=${e}, version=${n}). A null effort identifies a record of several model configurations — every published entry carries an explicit effort — which does not participate in the model/version/effort sweep.`);return[e,encodeURIComponent(n),t].join(Ja)}function Xi(e){const n=e.split(Ja);if(n.length!==3||n.some(a=>a.length===0))throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`);const[t,r,i]=n;let o;try{o=decodeURIComponent(r)}catch{throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`)}if(o.length===0)throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`);return{model:t,version:o,effort:i}}function p2(e){const{model:n,version:t,effort:r}=Xi(e);return`${n} ${t} ${r}`}function h2(e){const{model:n,version:t,effort:r}=Xi(e),{config:i}=Wi(n),{config:o}=d2(n,r);return`${i.abbreviation}${t}${o.abbreviation}`}function LO(e){const{model:n,version:t}=Xi(e);return`${n} ${t}`}function RO(e){const{model:n,effort:t}=Xi(e);return d2(n,t).config.abbreviation}function CO(e){const n=Array.from(e,t=>{const r=Xi(t),i=Wi(r.model).order,o=d2(r.model,r.effort).order;return{key:t,parsed:r,modelOrder:i,effortOrder:o}});return n.sort((t,r)=>t.modelOrder-r.modelOrder||IO(t.parsed.version,r.parsed.version)||t.effortOrder-r.effortOrder),n.map(({key:t})=>t)}function Sn(e){return TO(e.model,e.version,e.effort)}function Ki(e){const n=new Map(e.map(t=>[Sn(t),t]));return CO(n.keys()).map(t=>n.get(t))}function wr(e,n){if(n.length===0)throw new Error(`makeModelVersionKey: empty version not supported (model=${e}).`);return[e,encodeURIComponent(n)].join(Ja)}function BS(e){const n=e.split(Ja);if(n.length!==2||n.some(o=>o.length===0))throw new Error(`parseModelVersionKey: invalid key ${JSON.stringify(e)}`);const[t,r]=n;let i;try{i=decodeURIComponent(r)}catch{throw new Error(`parseModelVersionKey: invalid key ${JSON.stringify(e)}`)}return{model:t,version:i}}function m2(e){const{model:n,version:t}=BS(e);return`${Wi(n).config.abbreviation}${t}`}function HS(e){const{model:n,version:t}=BS(e);return`${n} ${t}`}function US(){return[...new Set(tm.map(e=>e.agentCli))]}const J3={claudecode:"Ant",codex:"OAI"};function GS(e){if(!Object.hasOwn(J3,e))throw new Error(`unknown agent CLI ${JSON.stringify(e)}. Add it to AGENT_CLI_LABEL in model_version_effort_plot_support.ts.`);return J3[e]}function jS(e){const n=t=>{const r=yt.findIndex(i=>i.name===t);if(r<0)throw new Error(`unknown effort ${JSON.stringify(t)}. Add it to EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return r};return Array.from(e).sort((t,r)=>n(t)-n(r))}const Fo=2e3,kO=Fo/100,NO=[1,2,4,10];function MO(){const e=new Set;for(let n=0;n<=Fo;n+=kO)e.add(n);for(const n of NO)e.add(n),e.add(Fo-n);return[...e].sort((n,t)=>n-t).map(n=>n/Fo)}const $r=MO(),us=4095,OO={logit:{inverse:e=>1/(1+Math.exp(-e)),lowerBound:0,upperBound:1},log:{inverse:e=>Math.exp(e),lowerBound:0,upperBound:null},identity:{inverse:e=>e,lowerBound:null,upperBound:null}};function z3(e,n,t){const r=e[n];if(!Number.isInteger(r)||r<0)throw new Error(`quantile table ${n} must be a nonnegative integer; got ${r}`);if(r>0&&t===null)throw new Error(`quantile table ${n} is ${r}, but transform ${JSON.stringify(e.transform)} has no ${n==="count_at_lower_bound"?"lower":"upper"} bound`);return r}function PO(e){const n=OO[e.transform];if(n===void 0)throw new Error(`unknown quantile table transform ${JSON.stringify(e.transform)}`);const t=z3(e,"count_at_lower_bound",n.lowerBound),r=z3(e,"count_at_upper_bound",n.upperBound),i=e.codes_u12_delta;if(i.length+t+r!==$r.length)throw new Error(`a quantile table has one value per level (${$r.length} levels); got ${i.length} codes plus ${t} + ${r} values at the bounds`);const{start:o,end:a}=e,u=new Array(t).fill(n.lowerBound);let s=0;for(let c=0;c<i.length;c++){const l=i[c];if(!Number.isInteger(l)||l<0)throw new Error(`quantile table codes must be nondecreasing integers; got delta ${l}`);if(s+=l,s>us)throw new Error(`quantile table codes reach ${s}, outside [0, ${us}]`);u.push(n.inverse(o+(a-o)*s/us))}for(let c=0;c<r;c++)u.push(n.upperBound);return u}const hr=1e-12;function Z3(e,n,t){if(n===0)return 0;if(n===e.length)return 1;const r=e[n-1],i=e[n],o=$r[n-1],a=$r[n];return o+(a-o)*(t-r)/(i-r)}function VS(e,n){let t=0,r=e.length;for(;t<r;){const i=t+r>>>1;e[i]>=n?r=i:t=i+1}return t}function qO(e,n,t){if(e.length===0)throw new Error("a mixture needs at least one table");if(n.length!==e.length)throw new Error(`expected one weight per table (${e.length}); got ${n.length}`);let r=0;for(const u of n){if(!(u>0))throw new Error("every mixture weight must be positive");r+=u}for(const u of e)if(u.length!==$r.length)throw new Error(`a quantile table has one value per level (${$r.length} levels); got ${u.length}`);const i=Float64Array.from(new Set(e.flat())).sort(),o=new Float64Array(i.length),a=new Float64Array(i.length);return e.forEach((u,s)=>{const c=n[s]/r;let l=0,f=0;for(let p=0;p<i.length;p++){const h=i[p];for(;l<u.length&&u[l]<=h;)l++;for(;f<u.length&&u[f]<h;)f++;o[p]=o[p]+c*Z3(u,l,h),a[p]=a[p]+c*Z3(u,f,h)}}),t.map(u=>{const s=VS(o,u-hr);if(s===i.length)return i[i.length-1];let c;if(s===0||a[s]<u-hr)c=i[s];else{const l=a[s]-o[s-1],f=Math.min(Math.max((u-o[s-1])/l,0),1);c=i[s-1]+f*(i[s]-i[s-1])}return o[s]>u+hr?c:(c+DO(i,o,a,u))/2})}function DO(e,n,t,r){let i=VS(n,r+hr);for(;i<e.length&&n[i]<=r+hr;)i++;return i===e.length?e[e.length-1]:t[i]<=r+hr?e[i]:e[i-1]}function FO(e,n){const t=e.length;return e.map(()=>1/t)}const xO=[.05,.5,.95];function BO(e){const{heights:n}=e;if(n.length<2)return 0;let t=0;for(let r=1;r<n.length;r++)t+=(n[r-1]+n[r])/2;return t*(e.end-e.start)/(n.length-1)}function HO(e,n){const{start:t,end:r,heights:i}=e;if(n<t||n>r)return 0;const o=(n-t)/(r-t)*(i.length-1),a=Math.min(Math.floor(o),i.length-2),u=o-a;return i[a]*(1-u)+i[a+1]*u}function UO(e,n){const t=[],r=[];for(const c of e){const l=c.density_curve;if(l===void 0)return null;const f=BO(l);if(!(f>0))return null;t.push(l),r.push(f)}const i=Math.min(...t.map(c=>c.start)),o=Math.max(...t.map(c=>c.end)),a=Math.max(...t.map(c=>c.heights.length)),u=new Array(a).fill(0);t.forEach((c,l)=>{const f=n[l]/r[l];for(let p=0;p<a;p++){const h=i+(o-i)*p/(a-1);u[p]=u[p]+f*HO(c,h)}});const s=Math.max(...u);return s>0?{start:i,end:o,heights:u.map(c=>c/s)}:null}function Q3(e,n){const t=[];for(const c of e){if(c.quantile_table===void 0)return null;t.push(c.quantile_table)}const[r,i,o]=qO(t,n,xO);let a=0;e.forEach((c,l)=>{a+=n[l]*c.mean});const u={mean:a,median:i,p5:r,p95:o},s=UO(e,n);return s!==null&&(u.density_curve=s),u}function GO(e){var a;if(e.length===0)throw new Error("a pool needs at least one member trial");let n=0;for(const u of e){if(!(u.weight>0))throw new Error("every pool member weight must be positive");n+=u.weight}const t=e.map(u=>u.weight/n),r=[];for(const u of e){const s=(a=u.precomputed)==null?void 0:a[sn];if(s===void 0)return null;r.push(s)}const i=Q3(r,t);if(i===null)return null;const o={[sn]:i};if(e.some(u=>{var s;return((s=u.precomputed)==null?void 0:s[_n])!==void 0})){const u=e.map((c,l)=>{var f;return((f=c.precomputed)==null?void 0:f[_n])??r[l]}),s=Q3(u,t);if(s===null)return null;o[_n]=s}return o}const jO=255;function VO(e){const n=new Array(e.length);let t=0;for(let r=0;r<e.length;r++){t+=e[r];const i=t/jO;n[r]=i*i}return n}function WO(e,n){try{return PO(e)}catch(t){console.warn(`omitting an undecodable quantile table: ${t.message}`);return}}function XO(e,n){const{density_curve:t,quantile_table:r,...i}=e,o={...i};if(t!==void 0&&(o.density_curve={start:t.start,end:t.end,heights:VO(t.heights_u8sqrt_delta)}),r!==void 0){const a=WO(r);a!==void 0&&(o.quantile_table=a)}return o}function Yi(e,n){const t={};for(const[r,i]of Object.entries(e))t[r]=XO(i);return t}function za(e,n){const t={};for(const[r,i]of Object.entries(e))t[r]=Yi(i);return t}function KO(e,n){const{precomputed:t,precomputed_aux_forms:r,...i}=e;return{...i,...t===void 0?{}:{precomputed:Yi(t)},...r===void 0?{}:{precomputed_aux_forms:za(r)}}}function YO(e,n){return{cparams:e.cparams,trials:e.trials.map(t=>KO(t)),precomputed:Yi(e.precomputed),...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:za(e.precomputed_aux_forms)}}}function JO(e,n){return{...e,cparam_combos:e.cparam_combos.map(t=>YO(t))}}function zO(e,n){return{trial_index:e.trial_index,...e.precomputed===void 0?{}:{precomputed:Yi(e.precomputed)},...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:za(e.precomputed_aux_forms)}}}function ZO(e,n){return e.map(t=>({name_or_pseudoname:t.name_or_pseudoname,query_mode:t.query_mode,label:t.label,cparam_combos:t.cparam_combos.map(r=>({cparams:r.cparams,precomputed:Yi(r.precomputed),...r.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:za(r.precomputed_aux_forms)},trials:r.trials.map(i=>zO(i))}))}))}function Gt(e){return JSON.stringify(Object.keys(e).sort().map(n=>[n,e[n]]))}function QO(e,n){const t=[],r=new Set;for(const i of e){if(typeof i.entry_id!="string"){const o=`published richcode results carry an entry with no entry_id (${JSON.stringify(i.label)}), which no current producer writes: the file predates trial-dict schema 14 and needs regenerating`;console.warn(o);continue}if(r.has(i.entry_id)){const o=`published richcode results carry more than one entry with entry_id ${JSON.stringify(i.entry_id)}; its trials have no stable identity`;console.warn(o)}r.add(i.entry_id),t.push(JO(i))}return t}const WS="equal_per_trial",eP="record";function XS(e,n,t){return JSON.stringify([e??null,n??null,t??null])}function nP(e){return(e==null?void 0:e.model)===void 0?null:XS(e.model,e.version,e.effort)}function tP(e){const n=zt(e)?XS(e.model,e.version,e.effort):eP;return Array.from({length:Nt(e)},(t,r)=>nP(c2(e,r))??n)}function Xt(e){return FO(tP(e))}function ct(e,n){const t=Xt(e);return n.map(r=>{const i=kt(r),o=t[i];if(o===void 0)throw new Error(`combo trial names record trial ${i}, past the record's ${t.length} trials`);return o})}const KS="mixture";function Za(e){return e.effort!==null}function v2(e){return{model:e.model,version:e.version,effort:e.effort}}function Qa(e,n){return Ki(e.filter(Za).filter(t=>t.jtask_group_id===n).map(v2))}function rP(e,n,t){return Ki(t).map(r=>{const i=Sn(r),o=e.filter(u=>Za(u)&&u.jtask_group_id===n&&Sn(v2(u))===i),a=`${p2(i)} in jtask group ${JSON.stringify(n)}`;if(o.length===0)throw new Error(`mixtureGroupRecord: no individual entry is published for ${a}`);if(o.length>1)throw new Error(`mixtureGroupRecord: more than one individual entry is published for ${a}`);return o[0]})}function iP(e){return e.flatMap(({entry:n})=>Array.from({length:n.count},(t,r)=>{var i;return{...((i=n.trial_metadata)==null?void 0:i[r])??{},model:n.model,version:n.version,effort:n.effort}}))}function oP(e){return e.flatMap(({entry:n})=>Array.from({length:n.count},(t,r)=>({entry_id:YS(n),entry_trial_index:r})))}function YS(e){if(e.entry_id===void 0)throw new Error(`mixtureGroupRecord: individual entry ${JSON.stringify(e.label)} carries no entry_id, so its trials have no stable identity`);return e.entry_id}function aP(e){const n=new Map;for(const{entry:t,recordTrialIndexOffset:r}of e)for(const i of t.cparam_combos){const o=Gt(i.cparams);let a=n.get(o);a===void 0&&(a={cparams:i.cparams,trials:[]},n.set(o,a)),a.trials.push(...i.trials.map(u=>({...u,trial_index:r+kt(u)})))}return[...n.values()]}function uP(e,n){const t=e.trials.map(a=>({auxForms:a.precomputed_aux_forms??{},weight:n[kt(a)]})),r=t.reduce((a,u)=>a+u.weight,0),i=[...new Set(t.flatMap(a=>Object.keys(a.auxForms)))],o={};for(const a of i){const u=t.map(c=>c.auxForms[a]);if(u.some(c=>(c==null?void 0:c[sn])===void 0))continue;const s=c=>t.reduce((l,f,p)=>{const h=u[p];return l+f.weight*(h[c]??h[sn]).mean},0)/r;o[a]={[sn]:s(sn)},u.some(c=>c[_n]!==void 0)&&(o[a][_n]=s(_n))}return Object.keys(o).length===0?void 0:o}function sP(e,n){const t=GO(e.trials.map(i=>({precomputed:i.precomputed,weight:n[kt(i)]}))),r=uP(e,n);return{cparams:e.cparams,trials:e.trials,precomputed:t??{},...r===void 0?{}:{aux_form_means:r}}}function cP(e,n){const t=e[0];for(const s of e)if(JSON.stringify(s.cparam_names)!==JSON.stringify(t.cparam_names))throw new Error(`mixtureGroupRecord: members of jtask group ${JSON.stringify(n)} disagree on cparam_names: ${JSON.stringify(t.cparam_names)} vs ${JSON.stringify(s.cparam_names)}`);const r=[];let i=0;for(const s of e)r.push({entry:s,recordTrialIndexOffset:i}),i+=s.count;const o=e.map(s=>v2(s)),a={label:`${e.length} model configurations`,aid:t.aid,aopts:t.aopts,count:i,cparam_names:t.cparam_names,cparam_combos:[],model:KS,version:"",effort:null,jtask_group_id:n,jtask_group_content_hashes:[...new Set(e.flatMap(s=>s.jtask_group_content_hashes??[]))].sort(),prompt_file_basename:t.prompt_file_basename,trial_metadata:iP(r),result_set:{member_configurations:o,trial_identities:oP(r)}},u=Xt(a);return{...a,cparam_combos:aP(r).map(s=>sP(s,u))}}const e_=new WeakMap;function JS(e){let n=e_.get(e);return n===void 0&&(n=new Map,e_.set(e,n)),n}function lP(e){return JSON.stringify(["empty",e])}function zS(e,n){const t=JS(e),r=lP(n),i=t.get(r);if(i!==void 0)return i;const o=e.filter(Za).filter(s=>s.jtask_group_id===n),a=o[0];if(a===void 0)throw new Error(`emptyMixtureGroupRecord: jtask group ${JSON.stringify(n)} publishes no individual entry`);const u={label:"no model configurations",aid:a.aid,aopts:a.aopts,count:0,cparam_names:a.cparam_names,cparam_combos:[],model:KS,version:"",effort:null,jtask_group_id:n,jtask_group_content_hashes:[...new Set(o.flatMap(s=>s.jtask_group_content_hashes??[]))].sort(),prompt_file_basename:a.prompt_file_basename,trial_metadata:[],result_set:{member_configurations:[],trial_identities:[]}};return t.set(r,u),u}function ZS(e,n,t){if(t.length===0)throw new Error("mixtureGroupRecord: a mixture group record needs at least one member configuration");const r=rP(e,n,t);if(r.length===1)return r[0];const i=JS(e),o=JSON.stringify([n,WS,r.map(u=>YS(u))]);let a=i.get(o);return a===void 0&&(a=cP(r,n),i.set(o,a)),a}function _2(e){const n=zt(e)?e.result_set:void 0;if(n===void 0||n.member_configurations.length<2)return[{configuration:null,trials:Array.from({length:Nt(e)},(r,i)=>({recordTrialIndex:i,trialNumber:i+1}))}];const t=new Map(n.member_configurations.map(r=>[Sn(r),{configuration:r,trials:[]}]));return n.trial_identities.forEach((r,i)=>{var u;const o=(u=e.trial_metadata)==null?void 0:u[i],a=(o==null?void 0:o.model)===void 0||o.version===void 0||o.effort===void 0||o.effort===null?void 0:t.get(Sn({model:o.model,version:o.version,effort:o.effort}));if(a===void 0)throw new Error(`recordTrialGroups: record trial ${i} is not stamped with one of the record's member configurations`);a.trials.push({recordTrialIndex:i,trialNumber:r.entry_trial_index+1})}),[...t.values()]}function g2(e,n){return e.result_set!==void 0?e.result_set.trial_identities[n]??null:e.entry_id===void 0||!Number.isInteger(n)||n<0||n>=e.count?null:{entry_id:e.entry_id,entry_trial_index:n}}function QS(e,n){for(let t=0;t<e.count;t++){const r=g2(e,t);if(r!==null&&r.entry_id===n.entry_id&&r.entry_trial_index===n.entry_trial_index)return t}return null}const fP=["agentCli","modelVersion","effort"],dP={agentCli:"agentClis",modelVersion:"modelVersions",effort:"efforts"};function xo(e){return wr(e.model,e.version)}function pP(e){return{agentClis:nA(e),modelVersions:[],efforts:[]}}function eA(e){return{agentClis:[],modelVersions:[xo(e)],efforts:[e.effort]}}function hP(e,n,t){const r=dP[n],i=e[r];return{...e,[r]:i.includes(t)?i.filter(o=>o!==t):[...i,t]}}function nA(e){const n=new Set(e.map(t=>Ai(t.model)));return US().filter(t=>n.has(t))}function rm(e,n){try{return n(e)}catch{return e}}function ss(e,n,t,r,i,o){const a=e.map(s=>({value:s,label:t(s),hoverText:r(s),state:i(s),disabled:o,unavailable:!1})),u=n.filter(s=>!e.includes(s)).map(s=>({value:s,label:rm(s,t),hoverText:rm(s,r),state:i(s),disabled:o,unavailable:!0}));return[...a,...u]}function mP(e,n){const t=Ki(n),r=e.agentClis.length>0,i=!r&&e.modelVersions.length===0&&e.efforts.length===0,o=m=>r?e.agentClis.includes(Ai(m.model)):i?!1:(e.modelVersions.length===0||e.modelVersions.includes(xo(m)))&&(e.efforts.length===0||e.efforts.includes(m.effort)),a=t.filter(o),u=new Set(a.map(m=>Ai(m.model))),s=new Set(a.map(xo)),c=new Set(a.map(m=>m.effort)),l=m=>e.agentClis.includes(m)?"checked":u.has(m)?"partial":"unchecked",f=(m,v)=>_=>(r?v.has(_):m.includes(_))?"checked":"unchecked",p=[...new Set(t.map(xo))],h=jS(new Set(t.map(m=>m.effort))),d=m=>m;return{memberConfigurations:a,rows:{agentCli:ss(nA(t),e.agentClis,m=>GS(m),d,l,!1),modelVersion:ss(p,e.modelVersions,m2,HS,f(e.modelVersions,s),r),effort:ss(h,e.efforts,d,d,f(e.efforts,c),r)}}}function cs(e){return!Array.isArray(e)||!e.every(n=>typeof n=="string")?null:[...new Set(e)]}function n_(e){if(typeof e!="object"||e===null)return null;const n=e,t=cs(n.agentClis),r=cs(n.modelVersions),i=cs(n.efforts);return t===null||r===null||i===null?null:{agentClis:t,modelVersions:r,efforts:i}}const Tt=["Estimate","ReadTrials","Compare"],b2="Estimate",vP={Estimate:"E",ReadTrials:"R",Compare:"C"},_P={Estimate:"Explore the problem using your own subjective estimations, entered directly or copied in from ReadTrials.",ReadTrials:"Read one result set of methodical trials, or one adhoc response: as the mixture of its trials' belief distributions, or as one trial's estimates, reasoning and code.",Compare:"Compare results across model configurations, task groups and parameter values."};function gP(e){return e.adhocPlainnumEntries.length>0||e.adhocPlaincodeEntries.length>0}function eu(e){const n=Pr(e).length>0;return Tt.filter(t=>t==="Estimate"||t==="ReadTrials"&&(n||gP(e))||t==="Compare"&&n)}function bP(e){return eu(e).includes("ReadTrials")?"ReadTrials":b2}const Xn={kind:"mix"},Bo={jtaskGroupId:null,mixtureGroupSelection:null,adhoc:null,trial:Xn};function yP(e){if(Pr(e).length>0)return Bo;for(const n of i2){if(Gi(e,n).length===0)continue;const t=xS(`adhoc-${n}:0`,{presetData:e});if((t==null?void 0:t.whoseKind)==="adhoc")return{...Bo,adhoc:t}}return Bo}function Pr(e){return sO(e.richcodeResults.map(n=>n.jtask_group_id),e.jtaskHashGroups)}const t_=10,EP="…";function tA(e){const n=e.map(r=>r.length>t_?r.slice(0,t_)+EP:r),t=new Map;for(const r of n)t.set(r,(t.get(r)??0)+1);return n.map((r,i)=>t.get(r)>1?e[i]:r)}function SP(e,n){const t=Pr(n);return e.jtaskGroupId!==null&&t.includes(e.jtaskGroupId)?e.jtaskGroupId:t[0]??null}function qn(e,n){let t=null;if(e.adhoc!==null){const c=_O(e.adhoc,n);if(c!==null)return{resultSet:{kind:"adhoc",whose:c},unavailableAdhoc:t};t=e.adhoc}const{presetData:r}=n,i=SP(e,r);if(i===null)return{resultSet:{kind:"no-results"},unavailableAdhoc:t};const o=Qa(r.richcodeResults,i),a=e.mixtureGroupSelection??pP(o),u=mP(a,o),s=u.memberConfigurations.length===0?zS(r.richcodeResults,i):ZS(r.richcodeResults,i,u.memberConfigurations);return{resultSet:{kind:"methodical",jtaskGroupId:i,mixtureGroupSelection:a,interpretation:u,record:s},unavailableAdhoc:t}}function AP(e,n,t){return e.kind==="mix"?null:e.kind==="adhoc-trial"?n==="adhoc"&&e.entryTrialIndex<t.count?e.entryTrialIndex:null:n!=="methodical"?null:QS(t,e.identity)}function wP(e,n,t){const r={...n,trial:Xn};if(e.trial.kind!=="methodical-trial")return r;const i=qn(e,t).resultSet,o=qn(n,t).resultSet;return i.kind!=="methodical"||o.kind!=="methodical"||i.jtaskGroupId!==o.jtaskGroupId||QS(o.record,e.trial.identity)===null?r:{...n,trial:e.trial}}const r_="metho-richcode";function wn(e,n){if(e.interactionMode==="Estimate")return e.lastYoursWhose;if(e.interactionMode==="Compare")return r_;const{resultSet:t}=qn(e.readTrials,n);return t.kind==="adhoc"?t.whose:r_}function $P(e){if(typeof e!="object"||e===null)return null;const n=e;if(n.kind==="mix")return Xn;if(n.kind==="adhoc-trial")return Number.isInteger(n.entryTrialIndex)&&n.entryTrialIndex>=0?{kind:"adhoc-trial",entryTrialIndex:n.entryTrialIndex}:null;if(n.kind!=="methodical-trial")return null;const t=n.identity;if(typeof t!="object"||t===null)return null;const{entry_id:r,entry_trial_index:i}=t;return typeof r!="string"||!Number.isInteger(i)||i<0?null:{kind:"methodical-trial",identity:{entry_id:r,entry_trial_index:i}}}function i_(e){if(typeof e!="object"||e===null)return null;const n=e;return n.whoseKind!=="adhoc"||typeof n.nameOrPseudoname!="string"||typeof n.label!="string"||n.queryMode!=="plainnum"&&n.queryMode!=="plaincode"?null:{whoseKind:"adhoc",nameOrPseudoname:n.nameOrPseudoname,queryMode:n.queryMode,label:n.label}}function IP(e){if(typeof e!="object"||e===null)return null;const n=e,{jtaskGroupId:t,mixtureGroupSelection:r,adhoc:i,trial:o}=n;if(t!==null&&typeof t!="string"||r!==null&&n_(r)===null||i!==null&&i_(i)===null)return null;const a=$P(o);return a===null?null:{jtaskGroupId:t,mixtureGroupSelection:r===null?null:n_(r),adhoc:i===null?null:i_(i),trial:a}}function TP(e,n,t){return{jtaskGroupId:e,mixtureGroupSelection:eA(n),adhoc:null,trial:t===null?Xn:{kind:"methodical-trial",identity:t}}}function LP(e,n){return{...e,trial:n}}function RP(e,n){if(e.aggregate==="all")return null;if(e.aggregate==="model_size__version")return{agentClis:[],modelVersions:[wr(e.model,e.version)],efforts:[]};if(e.aggregate==="model_size"){const t=Qa(n.richcodeResults,e.jtaskGroupId);return{agentClis:[],modelVersions:[...new Set(t.filter(r=>r.model===e.model).map(r=>wr(r.model,r.version)))],efforts:[]}}if(e.effort===null)throw new Error("a methodical identity with no aggregate kind names a configuration, which has an effort");return eA({model:e.model,version:e.version,effort:e.effort})}function rA(e,n){var o;const t=e.selection,r=(t==null?void 0:t.whoseKind)==="metho"?t:((o=e.lastMethoSelection)==null?void 0:o.whoseKind)==="metho"?e.lastMethoSelection:null,i=(t==null?void 0:t.whoseKind)==="adhoc"?t:null;return{mode:t===null||t.whoseKind==="yours"?"Estimate":"ReadTrials",estimateQueryMode:(t==null?void 0:t.whoseKind)==="yours"?t.queryMode:null,readTrials:{jtaskGroupId:(r==null?void 0:r.jtaskGroupId)??(e.selectedJtaskGroupId===""?null:e.selectedJtaskGroupId),mixtureGroupSelection:r===null?null:RP(r,n),adhoc:i,trial:Xn}}}const CP={model_version_effort:"model × version × effort",effort:"effort",model_version:"model × version"};function kP(e){return e.length<2?"model_version_effort":new Set(e.map(r=>wr(r.model,r.version))).size===1?"effort":new Set(e.map(r=>r.effort)).size===1?"model_version":"model_version_effort"}function NP(e,n){const t=Sn(e);return n==="effort"?RO(t):n==="model_version"?m2(wr(e.model,e.version)):h2(t)}function MP(e){const n=kP(e);return{title:CP[n],positions:Ki(e).map(t=>{const r=Sn(t);return{identity:t,tickLabel:NP(t,n),longLabel:p2(r),segmentKey:LO(r)}})}}const OP="task group";function PP(e){return{title:OP,positions:e.map(({jtaskGroupId:n,designator:t})=>({identity:n,tickLabel:t,longLabel:`${t}: ${n}`,segmentKey:n}))}}function qP(e,n,t){const r=n.positions.map(({identity:i})=>{const o=new Set(Qa(e,i).map(Sn));return t.positions.map(({identity:a})=>o.has(Sn(a))?ZS(e,i,[a]):null)});return{jtaskGroupAxis:n,configurationAxis:t,entries:r}}const Lt=["jtaskGroup","agentCli","modelVersion","effort"],DP=["agentCli","modelVersion","effort"],y2={jtaskGroup:{pinned:!0,value:null},agentCli:{pinned:!1,value:null},modelVersion:{pinned:!1,value:null},effort:{pinned:!1,value:null}};function FP(e,n){return e.jtaskGroup.value!==null||n===null?e:{...e,jtaskGroup:{...e.jtaskGroup,value:n}}}const ls=26;function iA(e){const n=String.fromCharCode(65+e%ls);return e<ls?n:iA(Math.floor(e/ls)-1)+n}function o_(e,n,t){var o;const r=e.value??((o=n[0])==null?void 0:o.value)??null,i=n.find(a=>a.value===r);return{pinned:e.pinned,offered:n,value:r,valueLabel:r===null?null:(i==null?void 0:i.label)??t(r),unavailable:e.pinned&&r!==null&&i===void 0}}const Ho=e=>e,xP={agentCli:{valueOf:e=>Ai(e.model),inDisplayOrder:e=>US().filter(n=>e.has(n)),labelOf:e=>GS(e),hoverTextOf:Ho},modelVersion:{valueOf:e=>wr(e.model,e.version),inDisplayOrder:e=>[...e],labelOf:m2,hoverTextOf:HS},effort:{valueOf:e=>e.effort,inDisplayOrder:e=>jS(e),labelOf:Ho,hoverTextOf:Ho}};function BP(e,n){const t=new Map;for(const r of n)for(const i of Qa(e.richcodeResults,r))t.set(Sn(i),i);return Ki([...t.values()])}function E2(e,n){const t=Pr(n),r=tA(t),i=t.map((f,p)=>({jtaskGroupId:f,designator:iA(p),label:r[p]})),o=o_(e.jtaskGroup,i.map(f=>({value:f.jtaskGroupId,label:f.label,hoverText:f.jtaskGroupId})),Ho),a=o.pinned?i.filter(f=>f.jtaskGroupId===o.value):i;let u=BP(n,a.map(f=>f.jtaskGroupId));const s={};for(const f of DP){const p=xP[f],h=p.inDisplayOrder(new Set(u.map(p.valueOf))).map(m=>({value:m,label:p.labelOf(m),hoverText:p.hoverTextOf(m)})),d=o_(e[f],h,m=>rm(m,p.labelOf));s[f]=d,d.pinned&&(u=u.filter(m=>p.valueOf(m)===d.value))}const c=qP(n.richcodeResults,PP(a),MP(u)),l={jtaskGroup:o,...s};return{jtaskGroups:i,rows:l,grid:c,jtaskGroupAxisSwept:!o.pinned&&a.length>1,configurationAxisSwept:u.length>1,unavailable:Lt.some(f=>l[f].unavailable)}}function HP(e,n,t,r){const i=E2(e,n).rows[t],o=r?i.value:i.unavailable?null:e[t].value;return{...e,[t]:{pinned:r,value:o}}}function UP(e,n,t){return{...e,[n]:{...e[n],value:t}}}function GP(e,n){return n+(e.jtaskGroupAxisSwept?1:0)+(e.configurationAxisSwept?1:0)}function jP(e){if(typeof e!="object"||e===null)return null;const{pinned:n,value:t}=e;return typeof n!="boolean"||t!==null&&typeof t!="string"?null:{pinned:n,value:t}}function VP(e){if(typeof e!="object"||e===null)return null;const n=e,t=Lt.map(u=>jP(n[u]));if(t.some(u=>u===null))return null;const[r,i,o,a]=t;return{jtaskGroup:r,agentCli:i,modelVersion:o,effort:a}}function Ir(e,n,t){const r=[];for(const i of e){if(t==="code"&&Wt(i.id))continue;const o=ye(i.id);if(!Object.prototype.hasOwnProperty.call(n,o))throw new Error(`Cannot compute optionDictKey: missing value for ${i.id}`);r.push([i.id,n[o]])}return r.sort(([i],[o])=>i<o?-1:i>o?1:0),JSON.stringify(r)}const WP=.5;function oA(e){const n=e.viewportTopInsetPx;return n+(window.innerHeight-n)*WP}function im(e){return e.getClientRects().length===0?!1:typeof e.checkVisibility=="function"?e.checkVisibility():!0}function a_(e){return document.getElementById(e.id)===e}function XP(e){const n=window.scrollY,{root:t}=e;if(t===null)return{anchorChain:[],pageScrollY:n};const r=oA(e);let i=null,o=Number.NEGATIVE_INFINITY;for(const u of t.querySelectorAll("[id]")){if(!im(u)||!a_(u))continue;const{top:s}=u.getBoundingClientRect();s>r||s<o||(i=u,o=s)}if(i===null)return{anchorChain:[],pageScrollY:n};const a=[];for(let u=i;u!==null&&u!==t;u=u.parentElement)u.id===""||!im(u)||!a_(u)||a.push({elementId:u.id,referenceLineOffsetPx:r-u.getBoundingClientRect().top});return{anchorChain:a,pageScrollY:n}}function KP(e,n){if(e.anchorChain.length===0){window.scrollTo({top:e.pageScrollY});return}const t=oA(n);for(const[r,i]of e.anchorChain.entries()){const o=document.getElementById(i.elementId);if(o===null||!im(o))continue;const a=e.anchorChain[r+1],u=a===void 0?null:document.getElementById(a.elementId);if(u!==null&&!u.contains(o))continue;const s=o.getBoundingClientRect(),l=r===0?i.referenceLineOffsetPx:Math.min(Math.max(i.referenceLineOffsetPx,0),s.height),f=s.top-(t-l);f!==0&&window.scrollBy(0,f);return}window.scrollTo({top:0})}function YP(e){if(typeof e!="object"||e===null)return!1;const n=e;return typeof n.elementId=="string"&&typeof n.referenceLineOffsetPx=="number"&&Number.isFinite(n.referenceLineOffsetPx)}function JP(e){if(typeof e!="object"||e===null)return null;const n=e;return!Array.isArray(n.anchorChain)||!n.anchorChain.every(YP)||typeof n.pageScrollY!="number"||!Number.isFinite(n.pageScrollY)?null:{anchorChain:[...n.anchorChain],pageScrollY:n.pageScrollY}}function om(e,n,t){if(t==="Bool"&&n.type==="checkbox")return n.checked===!0;const r=Xm(e,n.value);if(typeof r=="object")throw new Error(`Invalid scalar control parser use for ${e.id}`);return r}function zP(e,n){const t=n.map(r=>{if(r.type!=="checkbox")throw new Error(`Invalid MultiStringFromSet control for ${e.id}: expected checkbox`);return r.checked===!0?r.value:void 0}).filter(r=>r!==void 0);return Xm(e,t)}function S2(e,n,t){return e!==void 0&&t.includes(e)?e:n!==void 0&&t.includes(n)?n:t[0]}const aA="declared-value-space",ZP="One of:";function uA(e){const n=e.map(t=>U(String(t))).join(", ");return`<div class="${aA}">${ZP} ${n}</div>`}function A2(e,n){let t=`<span class="cparam-or-aopt-name">${U(e)}</span>`;return n.longname&&(t+=` <span class="cparam-or-aopt-longname">(${U(n.longname)})</span>`),t}function aa(e,n,t,r,i){const o=`${r.dataAttribute}="${Z(e)}"`;if(i==="StringFromSet"){if(!Array.isArray(n.allowed_values))throw new Error(`StringFromSet option ${n.id} is missing allowed_values`);const c=n.allowed_values.map(l=>{const f=String(l),p=f===String(t)?" selected":"";return`<option value="${Z(f)}"${p}>${U(f)}</option>`}).join("");return`<select class="${r.selectClass}" ${o}>${c}</select>`}if(i==="Number")return`<input class="${r.inputClass}" type="number" ${o} value="${Z(String(t))}">`;if(i==="Bool"){const c=t?" checked":"";return`<input class="${r.checkboxClass??r.inputClass}" type="checkbox" ${o}${c}>`}if(i==="FreeString")return`<input class="${[r.inputClass,r.textInputClass].filter(Boolean).join(" ")}" type="text" ${o} value="${Z(String(t))}">`;if(!Array.isArray(n.allowed_values))throw new Error(`MultiStringFromSet option ${n.id} is missing allowed_values`);if(!Array.isArray(t))throw new Error(`MultiStringFromSet option ${n.id} has a non-array current value`);const a=new Set(t),u=r.checkboxClass??r.inputClass,s=n.allowed_values.map(c=>{if(typeof c!="string")throw new Error(`MultiStringFromSet option ${n.id} has a non-string allowed value`);const l=a.has(c)?" checked":"";return`<label><input class="${u}" type="checkbox" ${o} value="${Z(c)}"${l}> <span>${U(c)}</span></label>`}).join("");return`<span class="${r.checkboxGroupClass??""}">${s}</span>`}function Ji(e){return e.allowed_values.filter(n=>typeof n!="boolean")}function w2(e,n){return S2(n.ui.inspectedCparamValues[ye(e.id)],e.default_value,Ji(e))}function nu(e,n){const t={};for(const r of e.get_cparams())t[ye(r.id)]=w2(r,n);return t}function QP(e,n,t){if(n===void 0)return{};if(typeof n!="object"||n===null||Array.isArray(n))return u_(`persisted inspected combination is not a value map: ${JSON.stringify(n)}`),{};const r={};for(const[i,o]of Object.entries(n)){if(!eq(o)){u_(`persisted inspected value for ${i} is not a scalar: ${JSON.stringify(o)}`);continue}const a=e.find_cparam(i);if(a===void 0){console.warn(`Ignoring inspected value for ${i}, which this jprob no longer declares`);continue}if(!Ji(a).includes(o)){console.warn(`Ignoring inspected value for ${a.id}, which its declaration no longer allows: ${JSON.stringify(o)}; falling back to the declared default`);continue}r[i]=o}return r}function eq(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function u_(e,n){console.warn(`${e}; falling back to the declared default`)}const sA="yours_code";function tu(e,n){return`${sA}_${e}_${n}`}function cA(e,n){const t={};for(const r of e.get_aopts()){const i=ye(r.id);i in n&&(t[i]=n[i])}return{aid:e.aid,label:"code",aopts:t,count:1,cparam_names:[],cparam_combos:[],raw_code_input:"",reasoning_response:{},misc_response:"",trial_choices:e.get_enum_tchoice_defaults()}}function nq(e,n,t){const r=rq(tu(e.aid,n));return r||cA(e,t)}function zi(e,n,t,r){r.timestamp||(r.timestamp=new Date().toISOString()),r.content_hash=NS("code",n,r.aopts,void 0),iq(tu(e.aid,t),r)}function $2(e){const n=`${sA}_${e}_`,t=[];for(let r=0;r<localStorage.length;r++){const i=localStorage.key(r);if(i===null||!i.startsWith(n))continue;const o=localStorage.getItem(i);if(o===null)continue;let a;try{a=JSON.parse(o)}catch{continue}t.push({codeOptionDictKey:i.slice(n.length),record:a})}return t.sort((r,i)=>{const o=r.record.timestamp??"";return(i.record.timestamp??"").localeCompare(o)}),t}function tq(e,n){localStorage.removeItem(tu(e,n))}function rq(e){try{const n=localStorage.getItem(e);return n===null?null:JSON.parse(n)}catch{return null}}function iq(e,n){localStorage.setItem(e,JSON.stringify(n))}function ru(e,n){const t={};for(const r of e){const i=ye(r.id),o=n[i]??r.default_value;t[i]=Xm(r,o)}return t}function oq(e,n){const t={...n};for(const r of e){if(!("input_type"in r)||r.input_type!=="MultiStringFromSet")continue;const i=ye(r.id),o=n[i];if(!Array.isArray(o)||!o.every(s=>typeof s=="string")||!Array.isArray(r.allowed_values))continue;const a=new Set(r.allowed_values),u=o.filter(s=>!a.has(s));u.length!==0&&(console.warn(`Ignoring MultiStringFromSet values no longer allowed for ${r.id}: `+u.join(", ")),t[i]=o.filter(s=>a.has(s)))}return t}const lA="aopt",fA="ui",aq="yours";function ua(e,n){return`${e}_${n}`}function iu(e,n){return`${aq}_${e}_${n}`}const dA={interactionMode:b2,lastYoursWhose:"yours-plainnum",readTrials:Bo,compare:y2,exampleFoldState:{},framingFoldState:{},jointDependenceEditorOpen:!0,foldOpenById:{},sidePanelExpanded:!0,srcquotesInlinedOverride:null,cparamPinned:{},cparamValues:{},inspectedCparamValues:{},codeSweepMode:"average",codePlotTargetKind:"formula",codePlotFormulaId:"",codePlotRawResponseName:"",scrollPositionByInteractionMode:{}};function pA(e){const n=e??cn();return{...structuredClone(dA),inputMode:n.inputMode,probAsOdds:n.probAsOdds,symbolMnames:n.symbolMnames,popoverAllRefs:n.popoverAllRefs,persistentPopovers:n.persistentPopovers,showExampleClassification:n.showExampleClassification,showGlobalExampleControls:n.showGlobalExampleControls,showFramingNotes:n.showFramingNotes,longTextAbbrev:n.longTextAbbrev}}function hA(e,n){const t={},r={};for(const i of e){const o=ye(i.id);o in n&&(Wt(i.id)?r[o]=n[o]:t[o]=n[o])}return{aopts:t,cparam_values:r}}function mA(e,n){const{aopts:t,cparam_values:r}=hA(e.get_options(),n);return{aid:e.aid,label:"",prompt_file_basename:"",aopts:t,cparam_values:r,count:1,trials:[{point:{},bounds:{},sample:{}}],raw_input:{},trial_choices:e.get_enum_tchoice_defaults()}}function uq(e){const n=ru(e.get_options(),{}),t=Ir(e.get_options(),n,"plainnum"),r=Ir(e.get_options(),n,"code");return{optionValues:n,plainnumOptionDictKey:t,codeOptionDictKey:r,ui:pA(),yoursRecord:mA(e,n),yoursCodeRecord:cA(e,n)}}function sq(e,n,t){return{...e,[n]:{pos:li(e,n,"pos"),neg:li(e,n,"neg"),[t]:!li(e,n,t)}}}const cq=dA.lastYoursWhose,lq=["plaincode","plainnum"];function fq(e){if(e==="yours")return"yours-plainnum";const n=e.indexOf(":");if(n===-1)return e;const t=e.slice(0,n),r=e.slice(n);return lq.some(i=>t===i||t===`metho-${i}`)?cq:t==="richcode"?"metho-richcode"+r:e}function vA(e,n){return!n&&e==="yours-plaincode"?"yours-plainnum":e}function dq(e,n,t){const r=wi(iu(e.aid,n));return r||mA(e,t)}const pq="assumptionTrialIndex",hq="Remembered view",_A="This does not affect any estimates you have saved.";function s_(e,n,t,r,i){if(e!=null){const u=AO(e);return u===null&&i.warnings.push(`persisted ${t} is not a selection identity: ${JSON.stringify(e)}`),u}if(typeof n!="string"||n==="")return null;const o=fq(n);if(wO(o))return i.warnings.push(`persisted ${t} ${JSON.stringify(n)} is a retired list position, which no longer names a result`),r&&i.readerFacingMessages.push(`Your last view here was saved in a format this version no longer reads, so the page opened at its default view. ${_A}`),null;const a=$O(o);return a===null&&i.warnings.push(`persisted ${t} ${JSON.stringify(n)} is not readable`),a}function mq(e,n){return{selection:s_(e.selection,e.whose,"result selection",!0,n),lastMethoSelection:s_(e.lastMethoSelection,e.lastMethoWhose,"last viewed methodical result",!1,n),selectedJtaskGroupId:typeof e.selectedJtaskGroupId=="string"?e.selectedJtaskGroupId:""}}function vq(e,n,t,r){if(e===null)return{interactionMode:n.interactionMode,lastYoursWhose:n.lastYoursWhose,readTrials:n.readTrials,compare:n.compare};if(!Tt.includes(e.interactionMode)){r.needsRepair=!0;const a=rA(mq(e,r),t);return{interactionMode:a.mode,lastYoursWhose:a.estimateQueryMode===null?n.lastYoursWhose:`yours-${a.estimateQueryMode}`,readTrials:a.readTrials,compare:n.compare}}const i=IP(e.readTrials),o=VP(e.compare);return i===null&&e.readTrials!==void 0&&(r.warnings.push(`persisted ReadTrials selection is not readable: ${JSON.stringify(e.readTrials)}`),r.needsRepair=!0),e.compareInterim!==void 0&&(r.needsRepair=!0),o===null&&e.compare!==void 0&&(r.warnings.push(`persisted Compare selection is not readable: ${JSON.stringify(e.compare)}`),r.needsRepair=!0),{interactionMode:e.interactionMode,lastYoursWhose:e.lastYoursWhose==="yours-plaincode"?"yours-plaincode":"yours-plainnum",readTrials:i??n.readTrials,compare:o??n.compare}}function _q(e,n,t){const{unavailableAdhoc:r}=qn(e,n);return r===null?e:(t.needsRepair=!0,t.warnings.push("persisted adhoc entry names nothing in the loaded data: "+nm(r)),t.readerFacingMessages.push(`The adhoc result you were last viewing here is no longer available, so the page opened on the methodical results instead. ${_A} (It was: ${nm(r)}.)`),{...e,adhoc:null})}function gq(e){if(typeof e!="object"||e===null)return{};const n={};for(const t of Tt){const r=JP(e[t]);r!==null&&(n[t]=r)}return n}function bq(e,n){const{state:t,report:r}=yq(e,n);if(r.needsRepair)try{gA(e.config,t.ui)}catch(i){console.warn("could not rewrite the stored selection",i)}return{state:t,readerFacingMessages:r.readerFacingMessages}}function yq(e,n){const t=e.config.localStorage_prefix,r=e.get_options(),i=uq(e),o=wi(ua(t,lA)),a=o?ru(r,oq(r,o)):i.optionValues,u=Ir(r,a,"plainnum"),s=Ir(r,a,"code"),c={...pA(),interactionMode:bP(n.presetData),readTrials:yP(n.presetData)},l=wi(ua(t,fA)),{[pq]:f,interactionMode:p,lastYoursWhose:h,readTrials:d,compare:m,compareInterim:v,modelEffortPinned:_,selection:g,lastAdhocSelection:b,lastMethoSelection:y,selectedJtaskGroupId:E,whose:w,lastAdhocWhose:I,lastMethoWhose:C,resultTrialSelection:L,modelEffortSweepScope:$,...A}=l??{},S={readerFacingMessages:[],needsRepair:!1,warnings:[]},T=vq(l,c,n.presetData,S);for(const O of S.warnings)console.warn(`${O}; starting from the default view`);const P=eu(n.presetData).includes(T.interactionMode)?T.interactionMode:b2,M={...T,interactionMode:P,lastYoursWhose:vA(T.lastYoursWhose,e.has_cparams()),readTrials:_q(T.readTrials,n,S)},x={...c,...A,...M,inspectedCparamValues:QP(e,A.inspectedCparamValues),scrollPositionByInteractionMode:gq(A.scrollPositionByInteractionMode)},q=dq(e,u,a),F=nq(e,s,a);return{state:{optionValues:a,plainnumOptionDictKey:u,codeOptionDictKey:s,ui:x,yoursRecord:q,yoursCodeRecord:F},report:S}}function I2(e,n){const t=e.localStorage_prefix;L2(ua(t,lA),n)}function gA(e,n){const t=e.localStorage_prefix;L2(ua(t,fA),n)}function T2(e,n,t,r){r.timestamp||(r.timestamp=new Date().toISOString()),r.content_hash=NS("plainnum",n,r.aopts,r.cparam_values??{}),L2(iu(e.aid,t),r)}function Eq(e,n,t){const{aopts:r,cparam_values:i}=hA(n.get_options(),t);return{...e,aopts:r,cparam_values:i,raw_input:{...e.raw_input??{}},trial_choices:{...e.trial_choices??{}},lloads_draft:e.lloads_draft===void 0?void 0:structuredClone(e.lloads_draft),trials:e.trials.map(o=>({point:{...o.point},bounds:{...o.bounds},sample:{...o.sample},lloads:o.lloads===void 0?void 0:structuredClone(o.lloads)})),timestamp:void 0}}function Sq(e,n,t){const r={};for(const i of n.get_aopts()){const o=ye(i.id);o in t&&(r[o]=t[o])}return{...e,aopts:r,reasoning_response:{...e.reasoning_response},trial_choices:{...e.trial_choices??{}},cparam_combos:[],cparam_names:[],verified_code_input:void 0,timestamp:void 0}}function c_(e,n,t,r){const i={...e.optionValues,[t]:r},o=Ir(n.get_options(),i,"plainnum"),a=Ir(n.get_options(),i,"code");let u=e.yoursRecord;o!==e.plainnumOptionDictKey&&(u=wi(iu(n.aid,o))??Eq(e.yoursRecord,n,i));let s=e.yoursCodeRecord;return a!==e.codeOptionDictKey&&(s=wi(tu(n.aid,a))??Sq(e.yoursCodeRecord,n,i)),(o!==e.plainnumOptionDictKey||a!==e.codeOptionDictKey)&&I2(n.config,i),{optionValues:i,plainnumOptionDictKey:o,codeOptionDictKey:a,ui:e.ui,yoursRecord:u,yoursCodeRecord:s}}function Aq(){const e={};for(let n=0;n<localStorage.length;n++){const t=localStorage.key(n);e[t]=localStorage.getItem(t)}return e}function wq(e){localStorage.clear();for(const[n,t]of Object.entries(e))localStorage.setItem(n,String(t))}function $q(){const e=new URLSearchParams(window.location.search),n=e.get("_preload");if(!n)return;try{const r=atob(n),i=JSON.parse(r);for(const[o,a]of Object.entries(i))localStorage.setItem(o,String(a))}catch(r){alert(`Failed to load preload state: ${r}`)}e.delete("_preload");const t=e.toString()?`${window.location.pathname}?${e}`:window.location.pathname;history.replaceState(null,"",t)}function wi(e){try{const n=localStorage.getItem(e);return n===null?null:JSON.parse(n)}catch{return null}}function L2(e,n){localStorage.setItem(e,JSON.stringify(n))}function Iq(e){const n=e.conclusion_expr_or_none();return n===null?null:e.get_display_expr(n)??n}function bA(e,n){const t=Iq(e);return t===null?null:Ae(t,n)}const yA=4,Tq=3,Lq=1e-4,Rq=1e4,l_=3;function f_(e){const[n,t]=e.split("e"),r=n.includes(".")?n.replace(/0+$/,"").replace(/\.$/,""):n;return t===void 0?r:`${r}e${t}`}function Cq(e){switch(e){case"deterministic":return yA;case"monte-carlo":return Tq;default:{const n=e;throw new Error(`Unknown calculation precision: ${String(n)}`)}}}function sa(e,n){if(Number.isNaN(e))return String(e);if(!Number.isFinite(e))return e>0?"∞":"-∞";if(e===0)return"0";const t=Number(e.toPrecision(n));if(t===0)return"0";const r=Math.abs(t);if(r<Lq||r>=Rq)return f_(t.toExponential(n-1));const i=Math.floor(Math.log10(r)),o=Math.max(0,n-1-i);return f_(t.toFixed(o))}function kq(e){return Number.isFinite(e)?e>=1?"∞:1":e<=0?"1:∞":e>=.5?`${sa(e/(1-e),l_)}:1`:`1:${sa((1-e)/e,l_)}`:"—"}function ca(e,n){if(!Number.isFinite(e)||e===0)return e;const t=yA,r=Number(e.toPrecision(t));if(n==="floor"?r<=e:r>=e)return r;const i=Math.floor(Math.log10(Math.abs(r))),o=Math.pow(10,i-t+1),a=n==="floor"?r-o:r+o;return Number(a.toPrecision(t))}function xe(e,n,t,r="deterministic"){const i=Cq(r);switch(n){case"probability":return t==="odds"?kq(e):sa(e*100,i)+"%";default:return sa(e,i)}}function Qn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
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
*/var fs,d_;function Nq(){if(d_)return fs;d_=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return fs=e,fs}/**
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
*/var ds,p_;function Mq(){if(p_)return ds;p_=1;var e=Nq();function n(){try{return e({},"x",{}),!0}catch{return!1}}return ds=n,ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ps,h_;function Oq(){if(h_)return ps;h_=1;var e=Object.defineProperty;return ps=e,ps}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hs,m_;function EA(){if(m_)return hs;m_=1;function e(n){return typeof n=="number"}return hs=e,hs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ms,v_;function SA(){if(v_)return ms;v_=1;function e(r){return r[0]==="-"}function n(r){var i="",o;for(o=0;o<r;o++)i+="0";return i}function t(r,i,o){var a=!1,u=i-r.length;return u<0||(e(r)&&(a=!0,r=r.substr(1)),r=o?r+n(u):n(u)+r,a&&(r="-"+r)),r}return ms=t,ms}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vs,__;function Pq(){if(__)return vs;__=1;var e=EA(),n=SA(),t=String.prototype.toLowerCase,r=String.prototype.toUpperCase;function i(o){var a,u,s;switch(o.specifier){case"b":a=2;break;case"o":a=8;break;case"x":case"X":a=16;break;case"d":case"i":case"u":default:a=10;break}if(u=o.arg,s=parseInt(u,10),!isFinite(s)){if(!e(u))throw new Error("invalid integer. Value: "+u);s=0}return s<0&&(o.specifier==="u"||a!==10)&&(s=4294967295+s+1),s<0?(u=(-s).toString(a),o.precision&&(u=n(u,o.precision,o.padRight)),u="-"+u):(u=s.toString(a),!s&&!o.precision?u="":o.precision&&(u=n(u,o.precision,o.padRight)),o.sign&&(u=o.sign+u)),a===16&&(o.alternate&&(u="0x"+u),u=o.specifier===r.call(o.specifier)?r.call(u):t.call(u)),a===8&&o.alternate&&u.charAt(0)!=="0"&&(u="0"+u),u}return vs=i,vs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _s,g_;function qq(){if(g_)return _s;g_=1;function e(n){return typeof n=="string"}return _s=e,_s}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs,b_;function Dq(){if(b_)return gs;b_=1;var e=Math.abs,n=String.prototype.toLowerCase,t=String.prototype.toUpperCase,r=String.prototype.replace,i=/e\+(\d)$/,o=/e-(\d)$/,a=/^(\d+)$/,u=/^(\d+)e/,s=/\.0$/,c=/\.0*e/,l=/(\..*[^0])0*e/;function f(p,h){var d,m;switch(h.specifier){case"e":case"E":m=p.toExponential(h.precision);break;case"f":case"F":m=p.toFixed(h.precision);break;case"g":case"G":e(p)<1e-4?(d=h.precision,d>0&&(d-=1),m=p.toExponential(d)):m=p.toPrecision(h.precision),h.alternate||(m=r.call(m,l,"$1e"),m=r.call(m,c,"e"),m=r.call(m,s,""));break;default:throw new Error("invalid double notation. Value: "+h.specifier)}return m=r.call(m,i,"e+0$1"),m=r.call(m,o,"e-0$1"),h.alternate&&(m=r.call(m,a,"$1."),m=r.call(m,u,"$1.e")),p>=0&&h.sign&&(m=h.sign+m),m=h.specifier===t.call(h.specifier)?t.call(m):n.call(m),m}return gs=f,gs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs,y_;function Fq(){if(y_)return bs;y_=1;function e(t){var r="",i;for(i=0;i<t;i++)r+=" ";return r}function n(t,r,i){var o=r-t.length;return o<0||(t=i?t+e(o):e(o)+t),t}return bs=n,bs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ys,E_;function xq(){if(E_)return ys;E_=1;var e=Pq(),n=qq(),t=EA(),r=Dq(),i=Fq(),o=SA(),a=String.fromCharCode,u=Array.isArray;function s(f){return f!==f}function c(f){var p={};return p.specifier=f.specifier,p.precision=f.precision===void 0?1:f.precision,p.width=f.width,p.flags=f.flags||"",p.mapping=f.mapping,p}function l(f){var p,h,d,m,v,_,g,b,y,E;if(!u(f))throw new TypeError("invalid argument. First argument must be an array. Value: `"+f+"`.");for(_="",g=1,y=0;y<f.length;y++)if(d=f[y],n(d))_+=d;else{if(p=d.precision!==void 0,d=c(d),!d.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+y+"`. Value: `"+d+"`.");for(d.mapping&&(g=d.mapping),h=d.flags,E=0;E<h.length;E++)switch(m=h.charAt(E),m){case" ":d.sign=" ";break;case"+":d.sign="+";break;case"-":d.padRight=!0,d.padZeros=!1;break;case"0":d.padZeros=h.indexOf("-")<0;break;case"#":d.alternate=!0;break;default:throw new Error("invalid flag: "+m)}if(d.width==="*"){if(d.width=parseInt(arguments[g],10),g+=1,s(d.width))throw new TypeError("the argument for * width at position "+g+" is not a number. Value: `"+d.width+"`.");d.width<0&&(d.padRight=!0,d.width=-d.width)}if(p&&d.precision==="*"){if(d.precision=parseInt(arguments[g],10),g+=1,s(d.precision))throw new TypeError("the argument for * precision at position "+g+" is not a number. Value: `"+d.precision+"`.");d.precision<0&&(d.precision=1,p=!1)}switch(d.arg=arguments[g],d.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":p&&(d.padZeros=!1),d.arg=e(d);break;case"s":d.maxWidth=p?d.precision:-1,d.arg=String(d.arg);break;case"c":if(!s(d.arg)){if(v=parseInt(d.arg,10),v<0||v>127)throw new Error("invalid character code. Value: "+d.arg);d.arg=s(v)?String(d.arg):a(v)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(p||(d.precision=6),b=parseFloat(d.arg),!isFinite(b)){if(!t(d.arg))throw new Error("invalid floating-point number. Value: "+_);b=d.arg,d.padZeros=!1}d.arg=r(b,d);break;default:throw new Error("invalid specifier: "+d.specifier)}d.maxWidth>=0&&d.arg.length>d.maxWidth&&(d.arg=d.arg.substring(0,d.maxWidth)),d.padZeros?d.arg=o(d.arg,d.width||d.precision,d.padRight):d.width&&(d.arg=i(d.arg,d.width,d.padRight)),_+=d.arg||"",g+=1}return _}return ys=l,ys}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Es,S_;function Bq(){if(S_)return Es;S_=1;var e=xq();return Es=e,Es}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ss,A_;function Hq(){if(A_)return Ss;A_=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function n(r){var i={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(i.precision="1"),i}function t(r){var i,o,a,u;for(o=[],u=0,a=e.exec(r);a;)i=r.slice(u,e.lastIndex-a[0].length),i.length&&o.push(i),a[6]==="%"?o.push("%"):o.push(n(a)),u=e.lastIndex,a=e.exec(r);return i=r.slice(u),i.length&&o.push(i),o}return Ss=t,Ss}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var As,w_;function Uq(){if(w_)return As;w_=1;var e=Hq();return As=e,As}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ws,$_;function Gq(){if($_)return ws;$_=1;function e(n){return typeof n=="string"}return ws=e,ws}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s,I_;function jq(){if(I_)return $s;I_=1;var e=Bq(),n=Uq(),t=Gq();function r(i){var o,a;if(!t(i))throw new TypeError(r("invalid argument. First argument must be a string. Value: `%s`.",i));for(o=[n(i)],a=1;a<arguments.length;a++)o.push(arguments[a]);return e.apply(null,o)}return $s=r,$s}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Is,T_;function Vq(){if(T_)return Is;T_=1;var e=jq();return Is=e,Is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ts,L_;function Wq(){if(L_)return Ts;L_=1;var e=Vq(),n=Object.prototype,t=n.toString,r=n.__defineGetter__,i=n.__defineSetter__,o=n.__lookupGetter__,a=n.__lookupSetter__;function u(s,c,l){var f,p,h,d;if(typeof s!="object"||s===null||t.call(s)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",s));if(typeof l!="object"||l===null||t.call(l)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if(p="value"in l,p&&(o.call(s,c)||a.call(s,c)?(f=s.__proto__,s.__proto__=n,delete s[c],s[c]=l.value,s.__proto__=f):s[c]=l.value),h="get"in l,d="set"in l,p&&(h||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return h&&r&&r.call(s,c,l.get),d&&i&&i.call(s,c,l.set),s}return Ts=u,Ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ls,R_;function Xq(){if(R_)return Ls;R_=1;var e=Mq(),n=Oq(),t=Wq(),r;return e()?r=n:r=t,Ls=r,Ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rs,C_;function Kq(){if(C_)return Rs;C_=1;var e=Xq();function n(t,r,i){e(t,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}return Rs=n,Rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cs,k_;function on(){if(k_)return Cs;k_=1;var e=Kq();return Cs=e,Cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ks,N_;function Yq(){if(N_)return ks;N_=1;function e(n){return n!==n}return ks=e,ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ns,M_;function ae(){if(M_)return Ns;M_=1;var e=Yq();return Ns=e,Ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ms,O_;function Jq(){if(O_)return Ms;O_=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return Ms=e,Ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Os,P_;function zq(){if(P_)return Os;P_=1;var e=Jq();return Os=e,Os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ps,q_;function Zq(){if(q_)return Ps;q_=1;var e=zq(),n=e();function t(){return n&&typeof Symbol.toStringTag=="symbol"}return Ps=t,Ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qs,D_;function Qq(){if(D_)return qs;D_=1;var e=Zq();return qs=e,qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ds,F_;function AA(){if(F_)return Ds;F_=1;var e=Object.prototype.toString;return Ds=e,Ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fs,x_;function eD(){if(x_)return Fs;x_=1;var e=AA();function n(t){return e.call(t)}return Fs=n,Fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xs,B_;function nD(){if(B_)return xs;B_=1;var e=Object.prototype.hasOwnProperty;function n(t,r){return t==null?!1:e.call(t,r)}return xs=n,xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bs,H_;function tD(){if(H_)return Bs;H_=1;var e=nD();return Bs=e,Bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hs,U_;function rD(){if(U_)return Hs;U_=1;var e=typeof Symbol=="function"?Symbol:void 0;return Hs=e,Hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Us,G_;function iD(){if(G_)return Us;G_=1;var e=rD();return Us=e,Us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gs,j_;function oD(){if(j_)return Gs;j_=1;var e=iD(),n=typeof e=="function"?e.toStringTag:"";return Gs=n,Gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var js,V_;function aD(){if(V_)return js;V_=1;var e=tD(),n=oD(),t=AA();function r(i){var o,a,u;if(i==null)return t.call(i);a=i[n],o=e(i,n);try{i[n]=void 0}catch{return t.call(i)}return u=t.call(i),o?i[n]=a:delete i[n],u}return js=r,js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vs,W_;function ou(){if(W_)return Vs;W_=1;var e=Qq(),n=eD(),t=aD(),r;return e()?r=t:r=n,Vs=r,Vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws,X_;function uD(){if(X_)return Ws;X_=1;var e=ou(),n=typeof Uint32Array=="function";function t(r){return n&&r instanceof Uint32Array||e(r)==="[object Uint32Array]"}return Ws=t,Ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xs,K_;function sD(){if(K_)return Xs;K_=1;var e=uD();return Xs=e,Xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ks,Y_;function cD(){if(Y_)return Ks;Y_=1;var e=4294967295;return Ks=e,Ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ys,J_;function lD(){if(J_)return Ys;J_=1;var e=typeof Uint32Array=="function"?Uint32Array:null;return Ys=e,Ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Js,z_;function fD(){if(z_)return Js;z_=1;var e=sD(),n=cD(),t=lD();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return Js=r,Js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs,Z_;function dD(){if(Z_)return zs;Z_=1;var e=fD();return zs=e,zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zs,Q_;function pD(){if(Q_)return Zs;Q_=1;var e=typeof Uint32Array=="function"?Uint32Array:void 0;return Zs=e,Zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qs,eg;function hD(){if(eg)return Qs;eg=1;function e(){throw new Error("not implemented")}return Qs=e,Qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ec,ng;function qr(){if(ng)return ec;ng=1;var e=dD(),n=pD(),t=hD(),r;return e()?r=n:r=t,ec=r,ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nc,tg;function mD(){if(tg)return nc;tg=1;var e=ou(),n=typeof Float64Array=="function";function t(r){return n&&r instanceof Float64Array||e(r)==="[object Float64Array]"}return nc=t,nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tc,rg;function vD(){if(rg)return tc;rg=1;var e=mD();return tc=e,tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rc,ig;function _D(){if(ig)return rc;ig=1;var e=typeof Float64Array=="function"?Float64Array:null;return rc=e,rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ic,og;function gD(){if(og)return ic;og=1;var e=vD(),n=_D();function t(){var r,i;if(typeof n!="function")return!1;try{i=new n([1,3.14,-3.14,NaN]),r=e(i)&&i[0]===1&&i[1]===3.14&&i[2]===-3.14&&i[3]!==i[3]}catch{r=!1}return r}return ic=t,ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oc,ag;function bD(){if(ag)return oc;ag=1;var e=gD();return oc=e,oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ac,ug;function yD(){if(ug)return ac;ug=1;var e=typeof Float64Array=="function"?Float64Array:void 0;return ac=e,ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uc,sg;function ED(){if(sg)return uc;sg=1;function e(){throw new Error("not implemented")}return uc=e,uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sc,cg;function Dr(){if(cg)return sc;cg=1;var e=bD(),n=yD(),t=ED(),r;return e()?r=n:r=t,sc=r,sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cc,lg;function SD(){if(lg)return cc;lg=1;var e=ou(),n=typeof Uint8Array=="function";function t(r){return n&&r instanceof Uint8Array||e(r)==="[object Uint8Array]"}return cc=t,cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lc,fg;function AD(){if(fg)return lc;fg=1;var e=SD();return lc=e,lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fc,dg;function wD(){if(dg)return fc;dg=1;var e=255;return fc=e,fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dc,pg;function $D(){if(pg)return dc;pg=1;var e=typeof Uint8Array=="function"?Uint8Array:null;return dc=e,dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pc,hg;function ID(){if(hg)return pc;hg=1;var e=AD(),n=wD(),t=$D();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return pc=r,pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hc,mg;function TD(){if(mg)return hc;mg=1;var e=ID();return hc=e,hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc,vg;function LD(){if(vg)return mc;vg=1;var e=typeof Uint8Array=="function"?Uint8Array:void 0;return mc=e,mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vc,_g;function RD(){if(_g)return vc;_g=1;function e(){throw new Error("not implemented")}return vc=e,vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _c,gg;function CD(){if(gg)return _c;gg=1;var e=TD(),n=LD(),t=RD(),r;return e()?r=n:r=t,_c=r,_c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gc,bg;function kD(){if(bg)return gc;bg=1;var e=ou(),n=typeof Uint16Array=="function";function t(r){return n&&r instanceof Uint16Array||e(r)==="[object Uint16Array]"}return gc=t,gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bc,yg;function ND(){if(yg)return bc;yg=1;var e=kD();return bc=e,bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yc,Eg;function MD(){if(Eg)return yc;Eg=1;var e=65535;return yc=e,yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ec,Sg;function OD(){if(Sg)return Ec;Sg=1;var e=typeof Uint16Array=="function"?Uint16Array:null;return Ec=e,Ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sc,Ag;function PD(){if(Ag)return Sc;Ag=1;var e=ND(),n=MD(),t=OD();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return Sc=r,Sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ac,wg;function qD(){if(wg)return Ac;wg=1;var e=PD();return Ac=e,Ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wc,$g;function DD(){if($g)return wc;$g=1;var e=typeof Uint16Array=="function"?Uint16Array:void 0;return wc=e,wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $c,Ig;function FD(){if(Ig)return $c;Ig=1;function e(){throw new Error("not implemented")}return $c=e,$c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ic,Tg;function xD(){if(Tg)return Ic;Tg=1;var e=qD(),n=DD(),t=FD(),r;return e()?r=n:r=t,Ic=r,Ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tc,Lg;function BD(){if(Lg)return Tc;Lg=1;var e=CD(),n=xD(),t={uint16:n,uint8:e};return Tc=t,Tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lc,Rg;function HD(){if(Rg)return Lc;Rg=1;var e=BD(),n;function t(){var r,i;return r=new e.uint16(1),r[0]=4660,i=new e.uint8(r.buffer),i[0]===52}return n=t(),Lc=n,Lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rc,Cg;function Fr(){if(Cg)return Rc;Cg=1;var e=HD();return Rc=e,Rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc,kg;function UD(){if(kg)return Cc;kg=1;var e=Fr(),n;return e===!0?n=1:n=0,Cc=n,Cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kc,Ng;function GD(){if(Ng)return kc;Ng=1;var e=qr(),n=Dr(),t=UD(),r=new n(1),i=new e(r.buffer);function o(a){return r[0]=a,i[t]}return kc=o,kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nc,Mg;function $n(){if(Mg)return Nc;Mg=1;var e=GD();return Nc=e,Nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mc,Og;function jD(){if(Og)return Mc;Og=1;var e=Fr(),n;return e===!0?n=1:n=0,Mc=n,Mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oc,Pg;function VD(){if(Pg)return Oc;Pg=1;var e=qr(),n=Dr(),t=jD(),r=new n(1),i=new e(r.buffer);function o(a,u){return r[0]=a,i[t]=u>>>0,r[0]}return Oc=o,Oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pc,qg;function Zi(){if(qg)return Pc;qg=1;var e=VD();return Pc=e,Pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qc,Dg;function WD(){if(Dg)return qc;Dg=1;var e=Fr(),n,t,r;return e===!0?(t=1,r=0):(t=0,r=1),n={HIGH:t,LOW:r},qc=n,qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dc,Fg;function XD(){if(Fg)return Dc;Fg=1;var e=qr(),n=Dr(),t=WD(),r=new n(1),i=new e(r.buffer),o=t.HIGH,a=t.LOW;function u(s,c){return i[o]=s,i[a]=c,r[0]}return Dc=u,Dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fc,xg;function au(){if(xg)return Fc;xg=1;var e=XD();return Fc=e,Fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xc,Bg;function Me(){if(Bg)return xc;Bg=1;var e=Number.POSITIVE_INFINITY;return xc=e,xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bc,Hg;function KD(){return Hg||(Hg=1,Bc=Number),Bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hc,Ug;function YD(){if(Ug)return Hc;Ug=1;var e=KD();return Hc=e,Hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uc,Gg;function an(){if(Gg)return Uc;Gg=1;var e=YD(),n=e.NEGATIVE_INFINITY;return Uc=n,Uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gc,jg;function Zt(){if(jg)return Gc;jg=1;var e=1023;return Gc=e,Gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jc,Vg;function JD(){if(Vg)return jc;Vg=1;var e=.34657359027997264;return jc=e,jc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vc,Wg;function zD(){if(Wg)return Vc;Wg=1;function e(n){return n===0?-.03333333333333313:-.03333333333333313+n*(.0015873015872548146+n*(-793650757867488e-19+n*(4008217827329362e-21+n*-20109921818362437e-23)))}return Vc=e,Vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Wc,Xg;function ZD(){if(Xg)return Wc;Xg=1;var e=ae(),n=$n(),t=Zi(),r=au(),i=Me(),o=an(),a=Zt(),u=JD(),s=zD(),c=709.782712893384,l=.6931471803691238,f=19082149292705877e-26,p=1.4426950408889634,h=38.816242111356935,d=1.0397207708399179;function m(v){var _,g,b,y,E,w,I,C,L,$,A,S,T;if(v===i||e(v))return v;if(v===o)return-1;if(v===0)return v;if(v<0?(b=!0,C=-v):(b=!1,C=v),C>=h){if(b)return-1;if(C>=c)return i}if(w=n(C)|0,C>u)C<d?b?(y=v+l,E=-f,T=-1):(y=v-l,E=f,T=1):(b?T=p*v-.5:T=p*v+.5,T|=0,A=T,y=v-A*l,E=A*f),v=y-E,$=y-v-E;else{if(w<1016070144)return v;T=0}return _=.5*v,L=v*_,I=1+L*s(L),A=3-I*_,S=L*((I-A)/(6-v*A)),T===0?v-(v*S-L):(g=r(a+T<<20,0),S=v*(S-$)-$,S-=L,T===-1?.5*(v-S)-.5:T===1?v<-.25?-2*(S-(v+.5)):1+2*(v-S):T<=-2||T>56?(C=1-(S-v),T===1024?(y=n(C)+(T<<20)|0,C=t(C,y)):C*=g,C-1):(A=1,T<20?(y=1072693248-(2097152>>T)|0,A=t(A,y),C=A-(S-v)):(y=a-T<<20|0,A=t(A,y),C=v-(S+A),C+=1),C*=g,C))}return Wc=m,Wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xc,Kg;function xr(){if(Kg)return Xc;Kg=1;var e=ZD();return Xc=e,Xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kc,Yg;function QD(){if(Yg)return Kc;Yg=1;var e=Math.floor;return Kc=e,Kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yc,Jg;function et(){if(Jg)return Yc;Jg=1;var e=QD();return Yc=e,Yc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jc,zg;function eF(){if(zg)return Jc;zg=1;function e(n){return n===0?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+n*.14798198605116586)))))}return Jc=e,Jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var zc,Zg;function nF(){if(Zg)return zc;Zg=1;var e=ae(),n=$n(),t=Zi(),r=Me(),i=an(),o=Zt(),a=eF(),u=.6931471803691238,s=19082149292705877e-26,c=.41421356237309503,l=-.2928932188134525,f=1862645149230957e-24,p=5551115123125783e-32,h=9007199254740992,d=.6666666666666666;function m(v){var _,g,b,y,E,w,I,C,L,$;if(v<-1||e(v))return NaN;if(v===-1)return i;if(v===r||v===0)return v;if(v<0?b=-v:b=v,$=1,b<c){if(b<f)return b<p?v:v-v*v*.5;v>l&&($=0,y=v,g=1)}return $!==0&&(b<h?(L=1+v,g=n(L),$=(g>>20)-o,$>0?E=1-(L-v):E=v-(L-1),E/=L):(L=v,g=n(L),$=(g>>20)-o,E=0),g&=1048575,g<434334?L=t(L,g|1072693248):($+=1,L=t(L,g|1071644672),g=1048576-g>>2),y=L-1),_=.5*y*y,g===0?y===0?(E+=$*s,$*u+E):(C=_*(1-d*y),$*u-(C-($*s+E)-y)):(w=y/(2+y),I=w*w,C=I*a(I),$===0?y-(_-w*(_+C)):$*u-(_-(w*(_+C)+($*s+E))-y))}return zc=m,zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zc,Qg;function In(){if(Qg)return Zc;Qg=1;var e=nF();return Zc=e,Zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qc,eb;function tF(){if(eb)return Qc;eb=1;var e=Math.sqrt;return Qc=e,Qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var el,nb;function ge(){if(nb)return el;nb=1;var e=tF();return el=e,el}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nl,tb;function wA(){if(tb)return nl;tb=1;var e=.7853981633974483;return nl=e,nl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tl,rb;function rF(){if(rb)return tl;rb=1;function e(n){var t,r,i;return n===0?.16666666666666713:(n<0?t=-n:t=n,t<=1?(r=-8.198089802484825+n*(19.562619833175948+n*(-16.262479672107002+n*(5.444622390564711+n*(-.6019598008014124+n*.004253011369004428)))),i=-49.18853881490881+n*(139.51056146574857+n*(-147.1791292232726+n*(70.49610280856842+n*(-14.740913729888538+n*1))))):(n=1/n,r=.004253011369004428+n*(-.6019598008014124+n*(5.444622390564711+n*(-16.262479672107002+n*(19.562619833175948+n*-8.198089802484825)))),i=1+n*(-14.740913729888538+n*(70.49610280856842+n*(-147.1791292232726+n*(139.51056146574857+n*-49.18853881490881))))),r/i)}return tl=e,tl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rl,ib;function iF(){if(ib)return rl;ib=1;function e(n){var t,r,i;return n===0?.08333333333333809:(n<0?t=-n:t=n,t<=1?(r=28.536655482610616+n*(-25.56901049652825+n*(6.968710824104713+n*(-.5634242780008963+n*.002967721961301243))),i=342.43986579130785+n*(-383.8770957603691+n*(147.0656354026815+n*(-21.947795316429207+n*1)))):(n=1/n,r=.002967721961301243+n*(-.5634242780008963+n*(6.968710824104713+n*(-25.56901049652825+n*28.536655482610616))),i=1+n*(-21.947795316429207+n*(147.0656354026815+n*(-383.8770957603691+n*342.43986579130785)))),r/i)}return rl=e,rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var il,ob;function oF(){if(ob)return il;ob=1;var e=ae(),n=ge(),t=wA(),r=rF(),i=iF(),o=6123233995736766e-32;function a(u){var s,c,l,f,p;if(e(u))return NaN;if(u>0?l=u:(s=!0,l=-u),l>1)return NaN;if(l>.625)c=1-l,f=c*i(c),c=n(c+c),p=t-c,c=c*f-o,p-=c,p+=t;else{if(l<1e-8)return u;c=l*l,p=c*r(c),p=l*p+l}return s?-p:p}return il=a,il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ol,ab;function R2(){if(ab)return ol;ab=1;var e=oF();return ol=e,ol}/**
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
*/var al,ub;function aF(){if(ub)return al;ub=1;function e(n){return Math.abs(n)}return al=e,al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ul,sb;function be(){if(sb)return ul;sb=1;var e=aF();return ul=e,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sl,cb;function uF(){if(cb)return sl;cb=1;var e=Math.ceil;return sl=e,sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cl,lb;function sF(){if(lb)return cl;lb=1;var e=uF();return cl=e,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll,fb;function cF(){if(fb)return ll;fb=1;var e=et(),n=sF();function t(r){return r<0?n(r):e(r)}return ll=t,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fl,db;function C2(){if(db)return fl;db=1;var e=cF();return fl=e,fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dl,pb;function lF(){if(pb)return dl;pb=1;var e=1023;return dl=e,dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pl,hb;function fF(){if(hb)return pl;hb=1;var e=-1023;return pl=e,pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hl,mb;function dF(){if(mb)return hl;mb=1;var e=-1074;return hl=e,hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ml,vb;function pF(){if(vb)return ml;vb=1;var e=Me(),n=an();function t(r){return r===e||r===n}return ml=t,ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vl,_b;function Br(){if(_b)return vl;_b=1;var e=pF();return vl=e,vl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _l,gb;function hF(){if(gb)return _l;gb=1;var e=2147483648;return _l=e,_l}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gl,bb;function Qt(){if(bb)return gl;bb=1;var e=2147483647;return gl=e,gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bl,yb;function mF(){if(yb)return bl;yb=1;var e=Fr(),n,t,r;return e===!0?(t=1,r=0):(t=0,r=1),n={HIGH:t,LOW:r},bl=n,bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yl,Eb;function $A(){if(Eb)return yl;Eb=1;var e=qr(),n=Dr(),t=mF(),r=new n(1),i=new e(r.buffer),o=t.HIGH,a=t.LOW;function u(s,c,l,f){return r[0]=s,c[f]=i[o],c[f+l]=i[a],c}return yl=u,yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var El,Sb;function vF(){if(Sb)return El;Sb=1;var e=$A();function n(t){return e(t,[0,0],1,0)}return El=n,El}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sl,Ab;function k2(){if(Ab)return Sl;Ab=1;var e=on(),n=vF(),t=$A();return e(n,"assign",t),Sl=n,Sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Al,wb;function _F(){if(wb)return Al;wb=1;var e=hF(),n=Qt(),t=k2(),r=$n(),i=au(),o=[0,0];function a(u,s){var c,l;return t.assign(u,o,1,0),c=o[0],c&=n,l=r(s),l&=e,c|=l,i(c,o[1])}return Al=a,Al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wl,$b;function N2(){if($b)return wl;$b=1;var e=_F();return wl=e,wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $l,Ib;function er(){if(Ib)return $l;Ib=1;var e=22250738585072014e-324;return $l=e,$l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Il,Tb;function IA(){if(Tb)return Il;Tb=1;var e=er(),n=Br(),t=ae(),r=be(),i=4503599627370496;function o(a,u,s,c){return t(a)||n(a)?(u[c]=a,u[c+s]=0,u):a!==0&&r(a)<e?(u[c]=a*i,u[c+s]=-52,u):(u[c]=a,u[c+s]=0,u)}return Il=o,Il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tl,Lb;function gF(){if(Lb)return Tl;Lb=1;var e=IA();function n(t){return e(t,[0,0],1,0)}return Tl=n,Tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ll,Rb;function bF(){if(Rb)return Ll;Rb=1;var e=on(),n=gF(),t=IA();return e(n,"assign",t),Ll=n,Ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rl,Cb;function uu(){if(Cb)return Rl;Cb=1;var e=2146435072;return Rl=e,Rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cl,kb;function yF(){if(kb)return Cl;kb=1;var e=$n(),n=uu(),t=Zt();function r(i){var o=e(i);return o=(o&n)>>>20,o-t|0}return Cl=r,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kl,Nb;function EF(){if(Nb)return kl;Nb=1;var e=yF();return kl=e,kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nl,Mb;function SF(){if(Mb)return Nl;Mb=1;var e=Me(),n=an(),t=Zt(),r=lF(),i=fF(),o=dF(),a=ae(),u=Br(),s=N2(),c=bF().assign,l=EF(),f=k2(),p=au(),h=2220446049250313e-31,d=2148532223,m=[0,0],v=[0,0];function _(g,b){var y,E;return b===0||g===0||a(g)||u(g)?g:(c(g,m,1,0),g=m[0],b+=m[1],b+=l(g),b<o?s(0,g):b>r?g<0?n:e:(b<=i?(b+=52,E=h):E=1,f.assign(g,v,1,0),y=v[0],y&=d,y|=b+t<<20,E*p(y,v[1])))}return Nl=_,Nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ml,Ob;function Hr(){if(Ob)return Ml;Ob=1;var e=SF();return Ml=e,Ml}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ol,Pb;function AF(){if(Pb)return Ol;Pb=1;function e(n){return n===0?.16666666666666602:.16666666666666602+n*(-.0027777777777015593+n*(6613756321437934e-20+n*(-16533902205465252e-22+n*41381367970572385e-24)))}return Ol=e,Ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Pl,qb;function wF(){if(qb)return Pl;qb=1;var e=Hr(),n=AF();function t(r,i,o){var a,u,s,c;return a=r-i,u=a*a,s=a-u*n(u),c=1-(i-a*s/(2-s)-r),e(c,o)}return Pl=t,Pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ql,Db;function $F(){if(Db)return ql;Db=1;var e=ae(),n=C2(),t=an(),r=Me(),i=wF(),o=.6931471803691238,a=19082149292705877e-26,u=1.4426950408889634,s=709.782712893384,c=-745.1332191019411,l=1/(1<<28),f=-l;function p(h){var d,m,v;return e(h)||h===r?h:h===t?0:h>s?r:h<c?0:h>f&&h<l?1+h:(h<0?v=n(u*h-.5):v=n(u*h+.5),d=h-v*o,m=v*a,i(d,m,v))}return ql=p,ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dl,Fb;function Oe(){if(Fb)return Dl;Fb=1;var e=$F();return Dl=e,Dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fl,xb;function IF(){if(xb)return Fl;xb=1;var e=et();function n(t){return e(t)===t}return Fl=n,Fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xl,Bb;function Ur(){if(Bb)return xl;Bb=1;var e=IF();return xl=e,xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bl,Hb;function TF(){if(Hb)return Bl;Hb=1;var e=Ur();function n(t){return e(t/2)}return Bl=n,Bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hl,Ub;function LF(){if(Ub)return Hl;Ub=1;var e=TF();return Hl=e,Hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ul,Gb;function RF(){if(Gb)return Ul;Gb=1;var e=LF();function n(t){return t>0?e(t-1):e(t+1)}return Ul=n,Ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gl,jb;function M2(){if(jb)return Gl;jb=1;var e=RF();return Gl=e,Gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jl,Vb;function CF(){if(Vb)return jl;Vb=1;var e=Fr(),n;return e===!0?n=0:n=1,jl=n,jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vl,Wb;function kF(){if(Wb)return Vl;Wb=1;var e=qr(),n=Dr(),t=CF(),r=new n(1),i=new e(r.buffer);function o(a,u){return r[0]=a,i[t]=u>>>0,r[0]}return Vl=o,Vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wl,Xb;function Qi(){if(Xb)return Wl;Xb=1;var e=kF();return Wl=e,Wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xl,Kb;function NF(){if(Kb)return Xl;Kb=1;function e(n){return n|0}return Xl=e,Xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kl,Yb;function TA(){if(Yb)return Kl;Yb=1;var e=NF();return Kl=e,Kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Yl,Jb;function MF(){if(Jb)return Yl;Jb=1;var e=M2(),n=N2(),t=an(),r=Me();function i(o,a){return a===t?r:a===r?0:a>0?e(a)?o:0:e(a)?n(r,o):r}return Yl=i,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Jl,zb;function OF(){if(zb)return Jl;zb=1;var e=Qt(),n=$n(),t=1072693247,r=1e300,i=1e-300;function o(a,u){var s,c;return c=n(a),s=c&e,s<=t?u<0?r*r:i*i:u>0?r*r:i*i}return Jl=o,Jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zl,Zb;function PF(){if(Zb)return zl;Zb=1;var e=be(),n=Me();function t(r,i){return r===-1?(r-r)/(r-r):r===1?1:e(r)<1==(i===n)?0:n}return zl=t,zl}/**
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
*/var Zl,Qb;function LA(){if(Qb)return Zl;Qb=1;var e=20;return Zl=e,Zl}/**
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
*/var Ql,e6;function qF(){if(e6)return Ql;e6=1;function e(n){return n===0?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+n*.20697501780033842))))}return Ql=e,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var e0,n6;function DF(){if(n6)return e0;n6=1;var e=$n(),n=Qi(),t=Zi(),r=Zt(),i=LA(),o=qF(),a=1048575,u=1048576,s=1072693248,c=536870912,l=524288,f=9007199254740992,p=.9617966939259756,h=.9617967009544373,d=-7028461650952758e-24,m=[1,1.5],v=[0,.5849624872207642],_=[0,1350039202129749e-23];function g(b,y,E){var w,I,C,L,$,A,S,T,R,P,M,x,q,F,O,te,G,z,re,se,j,K;return se=0,E<u&&(y*=f,se-=53,E=e(y)),se+=(E>>i)-r|0,j=E&a|0,E=j|s|0,j<=235662?K=0:j<767610?K=1:(K=0,se+=1,E-=u),y=t(y,E),T=m[K],z=y-T,re=1/(y+T),I=z*re,L=n(I,0),w=(E>>1|c)+l,w+=K<<18,A=t(0,w),S=y-(A-T),$=re*(z-L*A-L*S),C=I*I,G=C*C*o(C),G+=$*(L+I),C=L*L,A=3+C+G,A=n(A,0),S=G-(A-3-C),z=L*A,re=$*A+S*I,P=z+re,P=n(P,0),M=re-(P-z),x=h*P,q=d*P+M*p+_[K],R=v[K],te=se,F=x+q+R+te,F=n(F,0),O=q-(F-te-R-x),b[0]=F,b[1]=O,b}return e0=g,e0}/**
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
*/var n0,t6;function FF(){if(t6)return n0;t6=1;function e(n){return n===0?.5:.5+n*(-.3333333333333333+n*.25)}return n0=e,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var t0,r6;function xF(){if(r6)return t0;r6=1;var e=Qi(),n=FF(),t=1.4426950408889634,r=1.4426950216293335,i=19259629911266175e-24;function o(a,u){var s,c,l,f,p,h;return l=u-1,f=l*l*n(l),p=r*l,h=l*i-f*t,c=p+h,c=e(c,0),s=h-(c-p),a[0]=c,a[1]=s,a}return t0=o,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,i6;function BF(){if(i6)return r0;i6=1;var e=.6931471805599453;return r0=e,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i0,o6;function RA(){if(o6)return i0;o6=1;var e=1048575;return i0=e,i0}/**
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
*/var o0,a6;function HF(){if(a6)return o0;a6=1;function e(n){return n===0?.16666666666666602:.16666666666666602+n*(-.0027777777777015593+n*(6613756321437934e-20+n*(-16533902205465252e-22+n*41381367970572385e-24)))}return o0=e,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var a0,u6;function UF(){if(u6)return a0;u6=1;var e=$n(),n=Zi(),t=Qi(),r=TA(),i=Hr(),o=BF(),a=Zt(),u=Qt(),s=RA(),c=LA(),l=HF(),f=1048576,p=1071644672,h=.6931471824645996,d=-1904654299957768e-24;function m(v,_,g){var b,y,E,w,I,C,L,$,A,S,T;return S=v&u|0,T=(S>>c)-a|0,A=0,S>p&&(A=v+(f>>T+1)>>>0,T=((A&u)>>c)-a|0,b=(A&~(s>>T))>>>0,E=n(0,b),A=(A&s|f)>>c-T>>>0,v<0&&(A=-A),_-=E),E=g+_,E=t(E,0),I=E*h,C=(g-(E-_))*o+E*d,$=I+C,L=C-($-I),E=$*$,y=$-E*l(E),w=$*y/(y-2)-(L+$*L),$=1-(w-$),v=e($),v=r(v),v+=A<<c>>>0,v>>c<=0?$=i($,A):$=n($,v),$}return a0=m,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var u0,s6;function GF(){if(s6)return u0;s6=1;var e=ae(),n=M2(),t=Br(),r=Ur(),i=ge(),o=be(),a=k2(),u=Qi(),s=TA(),c=an(),l=Me(),f=Qt(),p=MF(),h=OF(),d=PF(),m=DF(),v=xF(),_=UF(),g=1072693247,b=1105199104,y=1139802112,E=1083179008,w=1072693248,I=1083231232,C=3230714880,L=31,$=1e300,A=1e-300,S=8008566259537294e-32,T=[0,0],R=[0,0];function P(M,x){var q,F,O,te,G,z,re,se,j,K,V,Ee,he,ee,ue,Te;if(e(M)||e(x))return NaN;if(a.assign(x,T,1,0),z=T[0],re=T[1],re===0){if(x===0)return 1;if(x===1)return M;if(x===-1)return 1/M;if(x===.5)return i(M);if(x===-.5)return 1/i(M);if(x===2)return M*M;if(x===3)return M*M*M;if(x===4)return M*=M,M*M;if(t(x))return d(M,x)}if(a.assign(M,T,1,0),te=T[0],G=T[1],G===0){if(te===0)return p(M,x);if(M===1)return 1;if(M===-1&&n(x))return-1;if(t(M))return M===c?P(-0,-x):x<0?0:l}if(M<0&&r(x)===!1)return(M-M)/(M-M);if(O=o(M),q=te&f|0,F=z&f|0,se=te>>>L|0,j=z>>>L|0,se&&n(x)?se=-1:se=1,F>b){if(F>y)return h(M,x);if(q<g)return j===1?se*$*$:se*A*A;if(q>w)return j===0?se*$*$:se*A*A;he=v(R,O)}else he=m(R,O,q);if(K=u(x,0),Ee=(x-K)*he[0]+x*he[1],V=K*he[0],ee=Ee+V,a.assign(ee,T,1,0),ue=s(T[0]),Te=s(T[1]),ue>=E){if((ue-E|Te)!==0||Ee+S>ee-V)return se*$*$}else if((ue&f)>=I&&((ue-C|Te)!==0||Ee<=ee-V))return se*A*A;return ee=_(ue,V,Ee),se*ee}return u0=P,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,c6;function Pe(){if(c6)return s0;c6=1;var e=GF();return s0=e,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,l6;function Gr(){if(l6)return c0;l6=1;var e=2.718281828459045;return c0=e,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,f6;function nt(){if(f6)return l0;f6=1;var e=2220446049250313e-31;return l0=e,l0}/**
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
*/var f0,d6;function jF(){if(d6)return f0;d6=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=709811.662581658+n*(679979.8474157227+n*(293136.7857211597+n*(74887.54032914672+n*(12555.290582413863+n*(1443.4299244417066+n*(115.24194596137347+n*(6.309239205732627+n*(.22668404630224365+n*(.004826466289237662+n*4624429436045379e-20))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=4624429436045379e-20+n*(.004826466289237662+n*(.22668404630224365+n*(6.309239205732627+n*(115.24194596137347+n*(1443.4299244417066+n*(12555.290582413863+n*(74887.54032914672+n*(293136.7857211597+n*(679979.8474157227+n*709811.662581658))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return f0=e,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var d0,p6;function VF(){if(p6)return d0;p6=1;var e=ae(),n=In(),t=ge(),r=be(),i=Oe(),o=Pe(),a=Gr(),u=nt(),s=jF(),c=10.900511;function l(f,p){var h,d,m,v,_,g,b;return e(f)||e(p)?NaN:f<0||p<0?NaN:p===1?1/f:f===1?1/p:(b=f+p,b<u?(_=b/f,_/=p,_):b===f&&p<u?1/p:b===p&&f<u?1/f:(f<p&&(g=p,p=f,f=g),d=f+c-.5,m=p+c-.5,v=b+c-.5,_=s(f)*(s(p)/s(b)),h=f-.5-p,r(p*h)<v*100&&f>100?_*=i(h*n(-p/v)):_*=o(d/v,h),v>1e10?_*=o(d/v*(m/v),p):_*=o(d*m/(v*v),p),_*=t(a/m),_))}return d0=l,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,h6;function su(){if(h6)return p0;h6=1;var e=VF();return p0=e,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h0,m6;function WF(){if(m6)return h0;m6=1;var e=Me();function n(t){return t===0&&1/t===e}return h0=n,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,v6;function XF(){if(v6)return m0;v6=1;var e=WF();return m0=e,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v0,_6;function KF(){if(_6)return v0;_6=1;var e=XF(),n=ae(),t=Me();function r(i,o){return n(i)||n(o)?NaN:i===t||o===t?t:i===o&&i===0?e(i)?i:o:i>o?i:o}return v0=r,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _0,g6;function nr(){if(g6)return _0;g6=1;var e=KF();return _0=e,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,b6;function YF(){if(b6)return g0;b6=1;var e=an();function n(t){return t===0&&1/t===e}return g0=n,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,y6;function CA(){if(y6)return b0;y6=1;var e=YF();return b0=e,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y0,E6;function JF(){if(E6)return y0;E6=1;var e=CA(),n=ae(),t=an();function r(i,o){return n(i)||n(o)?NaN:i===t||o===t?t:i===o&&i===0?e(i)?i:o:i<o?i:o}return y0=r,y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,S6;function Mt(){if(S6)return E0;S6=1;var e=JF();return E0=e,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,A6;function tr(){if(A6)return S0;A6=1;var e=17976931348623157e292;return S0=e,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,w6;function kA(){if(w6)return A0;w6=1;var e=2147483647;return A0=e,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,$6;function O2(){if($6)return w0;$6=1;var e=1.5707963267948966;return w0=e,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $0,I6;function Ot(){if(I6)return $0;I6=1;var e=3.141592653589793;return $0=e,$0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,T6;function zF(){if(T6)return I0;T6=1;function e(n){return n===0?.0416666666666666:.0416666666666666+n*(-.001388888888887411+n*2480158728947673e-20)}return I0=e,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,L6;function ZF(){if(L6)return T0;L6=1;function e(n){return n===0?-27557314351390663e-23:-27557314351390663e-23+n*(2087572321298175e-24+n*-11359647557788195e-27)}return T0=e,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var L0,R6;function QF(){if(R6)return L0;R6=1;var e=zF(),n=ZF();function t(r,i){var o,a,u,s;return s=r*r,u=s*s,a=s*e(s),a+=u*u*n(s),o=.5*s,u=1-o,u+(1-u-o+(s*a-r*i))}return L0=t,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R0,C6;function NA(){if(C6)return R0;C6=1;var e=QF();return R0=e,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var C0,k6;function ex(){if(k6)return C0;k6=1;var e=-.16666666666666632,n=.00833333333332249,t=-.0001984126982985795,r=27557313707070068e-22,i=-25050760253406863e-24,o=158969099521155e-24;function a(u,s){var c,l,f,p;return p=u*u,f=p*p,c=n+p*(t+p*r)+p*f*(i+p*o),l=p*u,s===0?u+l*(e+p*c):u-(p*(.5*s-l*c)-s-l*e)}return C0=a,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,N6;function MA(){if(N6)return k0;N6=1;var e=ex();return k0=e,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,M6;function nx(){if(M6)return N0;M6=1;var e=Fr(),n;return e===!0?n=0:n=1,N0=n,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M0,O6;function tx(){if(O6)return M0;O6=1;var e=qr(),n=Dr(),t=nx(),r=new n(1),i=new e(r.buffer);function o(a){return r[0]=a,i[t]}return M0=o,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,P6;function rx(){if(P6)return O0;P6=1;var e=tx();return O0=e,O0}/**
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
*/var P0,q6;function ix(){if(q6)return P0;q6=1;function e(n,t){var r,i;for(r=[],i=0;i<t;i++)r.push(n);return r}return P0=e,P0}/**
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
*/var q0,D6;function ox(){if(D6)return q0;D6=1;var e=ix();return q0=e,q0}/**
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
*/var D0,F6;function ax(){if(F6)return D0;F6=1;var e=ox();function n(t){return e(0,t)}return D0=n,D0}/**
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
*/var F0,x6;function ux(){if(x6)return F0;x6=1;var e=ax();return F0=e,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var x0,B6;function sx(){if(B6)return x0;B6=1;var e=et(),n=Hr(),t=ux(),r=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],i=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],o=16777216,a=5960464477539063e-23,u=t(20),s=t(20),c=t(20),l=t(20);function f(h,d,m,v,_,g,b,y,E){var w,I,C,L,$,A,S,T,R;for(L=g,R=v[m],T=m,$=0;T>0;$++)I=a*R|0,l[$]=R-o*I|0,R=v[T-1]+I,T-=1;if(R=n(R,_),R-=8*e(R*.125),S=R|0,R-=S,C=0,_>0?($=l[m-1]>>24-_,S+=$,l[m-1]-=$<<24-_,C=l[m-1]>>23-_):_===0?C=l[m-1]>>23:R>=.5&&(C=2),C>0){for(S+=1,w=0,$=0;$<m;$++)T=l[$],w===0?T!==0&&(w=1,l[$]=16777216-T):l[$]=16777215-T;if(_>0)switch(_){case 1:l[m-1]&=8388607;break;case 2:l[m-1]&=4194303;break}C===2&&(R=1-R,w!==0&&(R-=n(1,_)))}if(R===0){for(T=0,$=m-1;$>=g;$--)T|=l[$];if(T===0){for(A=1;l[g-A]===0;A++);for($=m+1;$<=m+A;$++){for(E[y+$]=r[b+$],I=0,T=0;T<=y;T++)I+=h[T]*E[y+($-T)];v[$]=I}return m+=A,f(h,d,m,v,_,g,b,y,E)}for(m-=1,_-=24;l[m]===0;)m-=1,_-=24}else R=n(R,-_),R>=o?(I=a*R|0,l[m]=R-o*I|0,m+=1,_+=24,l[m]=I):l[m]=R|0;for(I=n(1,_),$=m;$>=0;$--)v[$]=I*l[$],I*=a;for($=m;$>=0;$--){for(I=0,A=0;A<=L&&A<=m-$;A++)I+=i[A]*v[$+A];c[m-$]=I}for(I=0,$=m;$>=0;$--)I+=c[$];for(C===0?d[0]=I:d[0]=-I,I=c[0]-I,$=1;$<=m;$++)I+=c[$];return C===0?d[1]=I:d[1]=-I,S&7}function p(h,d,m,v){var _,g,b,y,E,w,I,C,L;for(g=4,y=v-1,b=(m-3)/24|0,b<0&&(b=0),w=m-24*(b+1),C=b-y,L=y+g,I=0;I<=L;I++)C<0?u[I]=0:u[I]=r[C],C+=1;for(I=0;I<=g;I++){for(_=0,C=0;C<=y;C++)_+=h[C]*u[y+(I-C)];s[I]=_}return E=g,f(h,d,E,s,w,g,b,y,u)}return x0=p,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,H6;function cx(){if(H6)return B0;H6=1;var e=Math.round;return B0=e,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,U6;function OA(){if(U6)return H0;U6=1;var e=cx();return H0=e,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var U0,G6;function lx(){if(G6)return U0;G6=1;var e=OA(),n=$n(),t=.6366197723675814,r=1.5707963267341256,i=6077100506506192e-26,o=6077100506303966e-26,a=20222662487959506e-37,u=20222662487111665e-37,s=84784276603689e-45,c=2047;function l(f,p,h){var d,m,v,_,g,b,y;return m=e(f*t),_=f-m*r,g=m*i,y=p>>20|0,h[0]=_-g,d=n(h[0]),b=y-(d>>20&c),b>16&&(v=_,g=m*o,_=v-g,g=m*a-(v-_-g),h[0]=_-g,d=n(h[0]),b=y-(d>>20&c),b>49&&(v=_,g=m*u,_=v-g,g=m*s-(v-_-g),h[0]=_-g)),h[1]=_-h[0]-g,m}return U0=l,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var G0,j6;function fx(){if(j6)return G0;j6=1;var e=Qt(),n=uu(),t=RA(),r=$n(),i=rx(),o=au(),a=sx(),u=lx(),s=0,c=16777216,l=1.5707963267341256,f=6077100506506192e-26,p=2*f,h=3*f,d=4*f,m=598523,v=1072243195,_=1073928572,g=1074752122,b=1074977148,y=1075183036,E=1075388923,w=1075594811,I=1094263291,C=[0,0,0],L=[0,0];function $(A,S){var T,R,P,M,x,q,F,O;if(P=r(A)|0,M=P&e|0,M<=v)return S[0]=A,S[1]=0,0;if(M<=g)return(M&t)===m?u(A,M,S):M<=_?P>0?(O=A-l,S[0]=O-f,S[1]=O-S[0]-f,1):(O=A+l,S[0]=O+f,S[1]=O-S[0]+f,-1):P>0?(O=A-2*l,S[0]=O-p,S[1]=O-S[0]-p,2):(O=A+2*l,S[0]=O+p,S[1]=O-S[0]+p,-2);if(M<=w)return M<=y?M===b?u(A,M,S):P>0?(O=A-3*l,S[0]=O-h,S[1]=O-S[0]-h,3):(O=A+3*l,S[0]=O+h,S[1]=O-S[0]+h,-3):M===E?u(A,M,S):P>0?(O=A-4*l,S[0]=O-d,S[1]=O-S[0]-d,4):(O=A+4*l,S[0]=O+d,S[1]=O-S[0]+d,-4);if(M<I)return u(A,M,S);if(M>=n)return S[0]=NaN,S[1]=NaN,0;for(T=i(A),R=(M>>20)-1046,O=o(M-(R<<20|0),T),q=0;q<2;q++)C[q]=O|0,O=(O-C[q])*c;for(C[2]=O,x=3;C[x-1]===s;)x-=1;return F=a(C,L,R,x,1),P<0?(S[0]=-L[0],S[1]=-L[1],-F):(S[0]=L[0],S[1]=L[1],F)}return G0=$,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,V6;function PA(){if(V6)return j0;V6=1;var e=fx();return j0=e,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var V0,W6;function dx(){if(W6)return V0;W6=1;var e=Qt(),n=uu(),t=$n(),r=NA(),i=MA(),o=PA(),a=1072243195,u=1045430272,s=[0,0];function c(l){var f,p;if(f=t(l),f&=e,f<=a)return f<u?l:i(l,0);if(f>=n)return NaN;switch(p=o(l,s),p&3){case 0:return i(s[0],s[1]);case 1:return r(s[0],s[1]);case 2:return-i(s[0],s[1]);default:return-r(s[0],s[1])}}return V0=c,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,X6;function eo(){if(X6)return W0;X6=1;var e=dx();return W0=e,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,K6;function cu(){if(K6)return X0;K6=1;var e=2.5066282746310007;return X0=e,X0}/**
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
*/var K0,Y6;function px(){if(Y6)return K0;Y6=1;function e(n){return n===0?.08333333333334822:.08333333333334822+n*(.0034722222160545866+n*(-.0026813261780578124+n*(-.00022954996161337813+n*.0007873113957930937)))}return K0=e,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Y0,J6;function hx(){if(J6)return Y0;J6=1;var e=cu(),n=Pe(),t=Oe(),r=px(),i=143.01608;function o(a){var u,s,c;return u=1/a,u=1+u*r(u),s=t(a),a>i?(c=n(a,.5*a-.25),s=c*(c/s)):s=n(a,a-.5)/s,e*s*u}return Y0=o,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,z6;function mx(){if(z6)return J0;z6=1;var e=.5772156649015329;return J0=e,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var z0,Z6;function vx(){if(Z6)return z0;Z6=1;var e=mx();function n(t,r){return r/((1+e*t)*t)}return z0=n,z0}/**
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
*/var Z0,Q6;function _x(){if(Q6)return Z0;Q6=1;function e(n){var t,r,i;return n===0?1:(n<0?t=-n:t=n,t<=1?(r=1+n*(.4942148268014971+n*(.20744822764843598+n*(.04763678004571372+n*(.010421379756176158+n*(.0011913514700658638+n*(.00016011952247675185+n*0)))))),i=1+n*(.0714304917030273+n*(-.23459179571824335+n*(.035823639860549865+n*(.011813978522206043+n*(-.004456419138517973+n*(.0005396055804933034+n*-23158187332412014e-21))))))):(n=1/n,r=0+n*(.00016011952247675185+n*(.0011913514700658638+n*(.010421379756176158+n*(.04763678004571372+n*(.20744822764843598+n*(.4942148268014971+n*1)))))),i=-23158187332412014e-21+n*(.0005396055804933034+n*(-.004456419138517973+n*(.011813978522206043+n*(.035823639860549865+n*(-.23459179571824335+n*(.0714304917030273+n*1))))))),r/i)}return Z0=e,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Q0,e4;function gx(){if(e4)return Q0;e4=1;var e=ae(),n=Ur(),t=CA(),r=be(),i=et(),o=eo(),a=Me(),u=an(),s=Ot(),c=hx(),l=vx(),f=_x();function p(h){var d,m,v,_;if(n(h)&&h<0||h===u||e(h))return NaN;if(h===0)return t(h)?u:a;if(h>171.61447887182297)return a;if(h<-170.5674972726612)return 0;if(m=r(h),m>33)return h>=0?c(h):(v=i(m),(v&1)===0?d=-1:d=1,_=m-v,_>.5&&(v+=1,_=m-v),_=m*o(s*_),d*s/(r(_)*c(m)));for(_=1;h>=3;)h-=1,_*=h;for(;h<0;){if(h>-1e-9)return l(h,_);_/=h,h+=1}for(;h<2;){if(h<1e-9)return l(h,_);_/=h,h+=1}return h===2?_:(h-=2,_*f(h))}return Q0=p,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ef,n4;function tt(){if(n4)return ef;n4=1;var e=gx();return ef=e,ef}/**
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
*/var nf,t4;function lu(){if(t4)return nf;t4=1;var e=170;return nf=e,nf}const bx=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tf,r4;function yx(){if(r4)return tf;r4=1;var e=ae(),n=Ur(),t=tt(),r=Me(),i=lu(),o=bx;function a(u){return e(u)?NaN:n(u)?u<0?NaN:u<=i?o[u]:r:t(u+1)}return tf=a,tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rf,i4;function qA(){if(i4)return rf;i4=1;var e=yx();return rf=e,rf}/**
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
*/var of,o4;function Ex(){if(o4)return of;o4=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=3847467039331777e-5+n*(3685766504351951e-5+n*(1588920245372942e-5+n*(4059208354298835e-6+n*(6805476611834733e-7+n*(7823975500312005e-8+n*(6246580776401795e-9+n*(341986.3488721347+n*(12287.194511824551+n*(261.61404416416684+n*2.5066282746310007))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=2.5066282746310007+n*(261.61404416416684+n*(12287.194511824551+n*(341986.3488721347+n*(6246580776401795e-9+n*(7823975500312005e-8+n*(6805476611834733e-7+n*(4059208354298835e-6+n*(1588920245372942e-5+n*(3685766504351951e-5+n*3847467039331777e-5))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return of=e,of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var af,a4;function Sx(){if(a4)return af;a4=1;var e=Ex();return af=e,af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uf,u4;function Ax(){if(u4)return uf;u4=1;var e=Sx();return uf=e,uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sf,s4;function no(){if(s4)return sf;s4=1;var e=10.900511;return sf=e,sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var cf,c4;function wx(){if(c4)return cf;c4=1;var e=Ax(),n=tt(),t=In(),r=be(),i=Oe(),o=Pe(),a=nt(),u=Gr(),s=no(),c=lu(),l=4269068009004705e289;function f(p,h){var d,m,v;return p<a?h>=c?(m=f(h,c-h),m*=p,m*=l,1/m):1/(p*n(p+h)):(v=p+s-.5,p+h===p?r(h/v)<a?d=i(-h):d=1:(r(h)<10?d=i((.5-p)*t(h/v)):d=o(v/(v+h),p-.5),d*=e(p)/e(p+h)),d*=o(u/(v+h),h),d)}return cf=f,cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var lf,l4;function $x(){if(l4)return lf;l4=1;var e=be(),n=et(),t=tt(),r=qA(),i=lu(),o=wx();function a(u,s){var c,l,f;if(u<=0||u+s<=0)return t(u)/t(u+s);if(l=n(s),l===s){if(f=n(u),f===u&&u<=i&&u+s<=i)return r(f-1)/r(l+f-1);if(e(s)<20){if(s===0)return 1;if(s<0){for(u-=1,c=u,s+=1;s!==0;)u-=1,c*=u,s+=1;return c}for(c=1/u,s-=1;s!==0;)u+=1,c/=u,s-=1;return c}}return o(u,s)}return lf=a,lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ff,f4;function P2(){if(f4)return ff;f4=1;var e=$x();return ff=e,ff}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var df,d4;function Ix(){if(d4)return df;d4=1;function e(n){return n===0?.3999999999940942:.3999999999940942+n*(.22222198432149784+n*.15313837699209373)}return df=e,df}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,p4;function Tx(){if(p4)return pf;p4=1;function e(n){return n===0?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+n*.14798198605116586))}return pf=e,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var hf,h4;function Lx(){if(h4)return hf;h4=1;var e=$n(),n=Zi(),t=ae(),r=Zt(),i=an(),o=Ix(),a=Tx(),u=.6931471803691238,s=19082149292705877e-26,c=0x40000000000000,l=.3333333333333333,f=1048575,p=2146435072,h=1048576,d=1072693248;function m(v){var _,g,b,y,E,w,I,C,L,$,A,S;return v===0?i:t(v)||v<0?NaN:(g=e(v),E=0,g<h&&(E-=54,v*=c,g=e(v)),g>=p?v+v:(E+=(g>>20)-r|0,g&=f,C=g+614244&1048576|0,v=n(v,g|C^d),E+=C>>20|0,I=v-1,(f&2+g)<3?I===0?E===0?0:E*u+E*s:(w=I*I*(.5-l*I),E===0?I-w:E*u-(w-E*s-I)):($=I/(2+I),S=$*$,C=g-398458|0,A=S*S,L=440401-g|0,y=A*o(A),b=S*a(A),C|=L,w=b+y,C>0?(_=.5*I*I,E===0?I-(_-$*(_+w)):E*u-(_-($*(_+w)+E*s)-I)):E===0?I-$*(I-w):E*u-($*(I-w)-E*s-I))))}return hf=m,hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mf,m4;function we(){if(m4)return mf;m4=1;var e=Lx();return mf=e,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var vf,v4;function Rx(){if(v4)return vf;v4=1;var e=$n(),n=NA(),t=MA(),r=PA(),i=Qt(),o=uu(),a=[0,0],u=1072243195,s=1044381696;function c(l){var f,p;if(f=e(l),f&=i,f<=u)return f<s?1:n(l,0);if(f>=o)return NaN;switch(p=r(l,a),p&3){case 0:return n(a[0],a[1]);case 1:return-t(a[0],a[1]);case 2:return-n(a[0],a[1]);default:return t(a[0],a[1])}}return vf=c,vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _f,_4;function q2(){if(_4)return _f;_4=1;var e=Rx();return _f=e,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gf,g4;function Cx(){if(g4)return gf;g4=1;var e=ae(),n=Br(),t=q2(),r=eo(),i=be(),o=N2(),a=Ot();function u(s){var c,l;return e(s)?NaN:n(s)?NaN:(l=s%2,c=i(l),c===0||c===1?o(0,l):c<.25?r(a*l):c<.75?(c=.5-c,o(t(a*c),l)):c<1.25?(l=o(1,l)-l,r(a*l)):c<1.75?(c-=1.5,-o(t(a*c),l)):(l-=o(2,l),r(a*l)))}return gf=u,gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bf,b4;function kx(){if(b4)return bf;b4=1;var e=Cx();return bf=e,bf}/**
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
*/var yf,y4;function Nx(){if(y4)return yf;y4=1;function e(n){return n===0?.06735230105312927:.06735230105312927+n*(.007385550860814029+n*(.0011927076318336207+n*(.00022086279071390839+n*25214456545125733e-21)))}return yf=e,yf}/**
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
*/var Ef,E4;function Mx(){if(E4)return Ef;E4=1;function e(n){return n===0?.020580808432516733:.020580808432516733+n*(.0028905138367341563+n*(.0005100697921535113+n*(.00010801156724758394+n*44864094961891516e-21)))}return Ef=e,Ef}/**
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
*/var Sf,S4;function Ox(){if(S4)return Sf;S4=1;function e(n){return n===0?1.3920053346762105:1.3920053346762105+n*(.7219355475671381+n*(.17193386563280308+n*(.01864591917156529+n*(.0007779424963818936+n*7326684307446256e-21))))}return Sf=e,Sf}/**
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
*/var Af,A4;function Px(){if(A4)return Af;A4=1;function e(n){return n===0?.21498241596060885:.21498241596060885+n*(.325778796408931+n*(.14635047265246445+n*(.02664227030336386+n*(.0018402845140733772+n*3194753265841009e-20))))}return Af=e,Af}/**
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
*/var wf,w4;function qx(){if(w4)return wf;w4=1;function e(n){return n===0?-.032788541075985965:-.032788541075985965+n*(.006100538702462913+n*(-.0014034646998923284+n*.00031563207090362595))}return wf=e,wf}/**
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
*/var $f,$4;function Dx(){if($4)return $f;$4=1;function e(n){return n===0?.01797067508118204:.01797067508118204+n*(-.0036845201678113826+n*(.000881081882437654+n*-.00031275416837512086))}return $f=e,$f}/**
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
*/var If,I4;function Fx(){if(I4)return If;I4=1;function e(n){return n===0?-.010314224129834144:-.010314224129834144+n*(.0022596478090061247+n*(-.0005385953053567405+n*.0003355291926355191))}return If=e,If}/**
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
*/var Tf,T4;function xx(){if(T4)return Tf;T4=1;function e(n){return n===0?.6328270640250934:.6328270640250934+n*(1.4549225013723477+n*(.9777175279633727+n*(.22896372806469245+n*.013381091853678766)))}return Tf=e,Tf}/**
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
*/var Lf,L4;function Bx(){if(L4)return Lf;L4=1;function e(n){return n===0?2.4559779371304113:2.4559779371304113+n*(2.128489763798934+n*(.7692851504566728+n*(.10422264559336913+n*.003217092422824239)))}return Lf=e,Lf}/**
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
*/var Rf,R4;function Hx(){if(R4)return Rf;R4=1;function e(n){return n===0?.08333333333333297:.08333333333333297+n*(-.0027777777772877554+n*(.0007936505586430196+n*(-.00059518755745034+n*(.0008363399189962821+n*-.0016309293409657527))))}return Rf=e,Rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Cf,C4;function Ux(){if(C4)return Cf;C4=1;var e=ae(),n=Br(),t=be(),r=we(),i=C2(),o=kx(),a=Ot(),u=Me(),s=Nx(),c=Mx(),l=Ox(),f=Px(),p=qx(),h=Dx(),d=Fx(),m=xx(),v=Bx(),_=Hx(),g=.07721566490153287,b=.3224670334241136,y=1,E=-.07721566490153287,w=.48383612272381005,I=-.1475877229945939,C=.06462494023913339,L=-.07721566490153287,$=1,A=.4189385332046727,S=1.4616321449683622,T=4503599627370496,R=72057594037927940,P=13877787807814457e-33,M=1.4616321449683622,x=-.12148629053584961,q=-3638676997039505e-33;function F(O){var te,G,z,re,se,j,K,V,Ee,he,ee,ue,Te;if(e(O)||n(O))return O;if(O===0)return u;if(O<0?(te=!0,O=-O):te=!1,O<P)return-r(O);if(te){if(O>=T||(Ee=o(O),Ee===0))return u;G=r(a/t(Ee*O))}if(O===1||O===2)return 0;if(O<2)switch(O<=.9?(Te=-r(O),O>=S-1+.27?(ee=1-O,z=0):O>=S-1-.27?(ee=O-(M-1),z=1):(ee=O,z=2)):(Te=0,O>=S+.27?(ee=2-O,z=0):O>=S-.27?(ee=O-M,z=1):(ee=O-1,z=2)),z){case 0:ue=ee*ee,j=g+ue*s(ue),se=ue*(b+ue*c(ue)),K=ee*j+se,Te+=K-.5*ee;break;case 1:ue=ee*ee,he=ue*ee,j=w+he*p(he),se=I+he*h(he),re=C+he*d(he),K=ue*j-(q-he*(se+ee*re)),Te+=x+K;break;case 2:j=ee*(L+ee*m(ee)),se=$+ee*v(ee),Te+=-.5*ee+j/se;break}else if(O<8)switch(z=i(O),ee=O-z,K=ee*(E+ee*f(ee)),V=y+ee*l(ee),Te=.5*ee+K/V,ue=1,z){case 7:ue*=ee+6;case 6:ue*=ee+5;case 5:ue*=ee+4;case 4:ue*=ee+3;case 3:ue*=ee+2,Te+=r(ue)}else O<R?(Ee=r(O),ue=1/O,ee=ue*ue,he=A+ue*_(ee),Te=(O-.5)*(Ee-1)+he):Te=O*(r(O)-1);return te&&(Te=G-Te),Te}return Cf=F,Cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kf,k4;function jr(){if(k4)return kf;k4=1;var e=Ux();return kf=e,kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nf,N4;function Pt(){if(N4)return Nf;N4=1;var e=709.782712893384;return Nf=e,Nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mf,M4;function Gx(){if(M4)return Mf;M4=1;var e=14901161193847656e-24;return Mf=e,Mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Of,O4;function jx(){if(O4)return Of;O4=1;var e=eval;return Of=e,Of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pf,P4;function Vx(){if(P4)return Pf;P4=1;var e=jx();function n(){var t;try{e('"use strict"; (function* () {})'),t=!0}catch{t=!1}return t}return Pf=n,Pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qf,q4;function DA(){if(q4)return qf;q4=1;var e=Vx();return qf=e,qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Df,D4;function Wx(){if(D4)return Df;D4=1;var e=be(),n=nt(),t=1e6;function r(i,o){var a,u,s,c,l,f;if(f={},arguments.length>1&&(f=o),u=f.tolerance||n,c=f.maxTerms||t,l=f.initialValue||0,a=typeof i.next=="function",a===!0){for(s of i)if(l+=s,e(u*l)>=e(s)||--c===0)break}else do s=i(),l+=s;while(e(u*l)<e(s)&&--c);return l}return Df=r,Df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ff,F4;function Xx(){if(F4)return Ff;F4=1;var e=be(),n=nt(),t=1e6;function r(i,o){var a,u,s,c,l;l={},arguments.length>1&&(l=o),a=l.tolerance||n,s=l.maxTerms||t,c=l.initialValue||0;do u=i(),c+=u;while(e(a*c)<e(u)&&--s);return c}return Ff=r,Ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xf,x4;function to(){if(x4)return xf;x4=1;var e=DA(),n=Wx(),t=Xx(),r;return e()?r=n:r=t,xf=r,xf}/**
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
*/var Bf,B4;function Kx(){if(B4)return Bf;B4=1;function e(n,t){var r=1,i=n,o=t;return a;function a(){var u=r;return r*=i/o,i-=1,u}}return Bf=e,Bf}/**
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
*/var Hf,H4;function Yx(){if(H4)return Hf;H4=1;var e=to(),n=Kx();function t(r,i){var o,a;return a=n(r,i),o=e(a),o}return Hf=t,Hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Uf,U4;function Jx(){if(U4)return Uf;U4=1;var e=Oe();function n(t,r){var i,o,a,u;if(a=e(-r),o=a,o!==0)for(i=o,u=1;u<t;++u)i/=u,i*=r,o+=i;return o}return Uf=n,Uf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gf,G4;function zx(){if(G4)return Gf;G4=1;function e(n){return n===0?-.3250421072470015:-.3250421072470015+n*(-.02848174957559851+n*(-.005770270296489442+n*-23763016656650163e-21))}return Gf=e,Gf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jf,j4;function Zx(){if(j4)return jf;j4=1;function e(n){return n===0?.39791722395915535:.39791722395915535+n*(.0650222499887673+n*(.005081306281875766+n*(.00013249473800432164+n*-3960228278775368e-21)))}return jf=e,jf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vf,V4;function Qx(){if(V4)return Vf;V4=1;function e(n){return n===0?.41485611868374833:.41485611868374833+n*(-.3722078760357013+n*(.31834661990116175+n*(-.11089469428239668+n*(.035478304325618236+n*-.002166375594868791))))}return Vf=e,Vf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wf,W4;function eB(){if(W4)return Wf;W4=1;function e(n){return n===0?.10642088040084423:.10642088040084423+n*(.540397917702171+n*(.07182865441419627+n*(.12617121980876164+n*(.01363708391202905+n*.011984499846799107))))}return Wf=e,Wf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xf,X4;function nB(){if(X4)return Xf;X4=1;function e(n){return n===0?-.6938585727071818:-.6938585727071818+n*(-10.558626225323291+n*(-62.375332450326006+n*(-162.39666946257347+n*(-184.60509290671104+n*(-81.2874355063066+n*-9.814329344169145)))))}return Xf=e,Xf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kf,K4;function tB(){if(K4)return Kf;K4=1;function e(n){return n===0?19.651271667439257:19.651271667439257+n*(137.65775414351904+n*(434.56587747522923+n*(645.3872717332679+n*(429.00814002756783+n*(108.63500554177944+n*(6.570249770319282+n*-.0604244152148581))))))}return Kf=e,Kf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yf,Y4;function rB(){if(Y4)return Yf;Y4=1;function e(n){return n===0?-.799283237680523:-.799283237680523+n*(-17.757954917754752+n*(-160.63638485582192+n*(-637.5664433683896+n*(-1025.0951316110772+n*-483.5191916086514))))}return Yf=e,Yf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jf,J4;function iB(){if(J4)return Jf;J4=1;function e(n){return n===0?30.33806074348246:30.33806074348246+n*(325.7925129965739+n*(1536.729586084437+n*(3199.8582195085955+n*(2553.0504064331644+n*(474.52854120695537+n*-22.44095244658582)))))}return Jf=e,Jf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var zf,z4;function oB(){if(z4)return zf;z4=1;var e=ae(),n=Oe(),t=Qi(),r=Me(),i=an(),o=zx(),a=Zx(),u=Qx(),s=eB(),c=nB(),l=tB(),f=rB(),p=iB(),h=1e-300,d=13877787807814457e-33,m=.8450629115104675,v=.12837916709551256,_=1,g=-.0023621185607526594,b=1,y=-.009864944034847148,E=1,w=-.0098649429247001,I=1;function C(L){var $,A,S,T,R,P,M,x;if(e(L))return NaN;if(L===r)return 0;if(L===i)return 2;if(L===0)return 1;if(L<0?($=!0,A=-L):($=!1,A=L),A<.84375)return A<d?1-L:(S=L*L,T=v+S*o(S),R=_+S*a(S),P=T/R,L<.25?1-(L+L*P):(T=L*P,T+=L-.5,.5-T));if(A<1.25)return R=A-1,M=g+R*u(R),x=b+R*s(R),$?1+m+M/x:1-m-M/x;if(A<28){if(R=1/(A*A),A<2.857142857142857)T=y+R*c(R),R=E+R*l(R);else{if(L<-6)return 2-h;T=w+R*f(R),R=I+R*p(R)}return S=t(A,0),T=n(-(S*S)-.5625)*n((S-A)*(S+A)+T/R),$?2-T/A:T/A}return $?2-h:h*h}return zf=C,zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zf,Z4;function fu(){if(Z4)return Zf;Z4=1;var e=oB();return Zf=e,Zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Qf,Q4;function aB(){if(Q4)return Qf;Q4=1;var e=fu(),n=ge(),t=Oe(),r=Ot();function i(o,a){var u,s,c,l,f;if(l=e(n(a)),l!==0&&o>1){for(s=t(-a)/n(r*a),s*=a,u=.5,s/=u,c=s,f=2;f<o;++f)s/=f-u,s*=a,c+=s;l+=c}return l}return Qf=i,Qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ed,e5;function Vr(){if(e5)return ed;e5=1;var e=-708.3964185322641;return ed=e,ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var nd,n5;function uB(){if(n5)return nd;n5=1;var e=Oe(),n=Pe(),t=we(),r=Pt(),i=Vr();function o(a,u){var s,c;return c=a*t(u),u>=1?c<r&&-u>i?s=n(u,a)*e(-u):a>=1?s=n(u/e(u/a),a):s=e(c-u):c>i?s=n(u,a)*e(-u):u/a<r?s=n(u/e(u/a),a):s=e(c-u),s}return nd=o,nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var td,t5;function FA(){if(t5)return td;t5=1;function e(n,t){var r,i;if(i=n.length,i<2||t===0)return i===0?0:n[0];for(i-=1,r=n[i]*t+n[i-1],i-=2;i>=0;)r=r*t+n[i],i-=1;return r}return td=e,td}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rd,r5;function sB(){if(r5)return rd;r5=1;var e=Function;return rd=e,rd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var id,i5;function cB(){if(i5)return id;i5=1;var e=sB();return id=e,id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var od,o5;function lB(){if(o5)return od;o5=1;var e=cB(),n=FA();function t(r){var i,o,a,u;if(r.length>500)return s;if(i="return function evalpoly(x){",o=r.length,o===0)i+="return 0.0;";else if(o===1)i+="return "+r[0]+";";else{for(i+="if(x===0.0){return "+r[0]+";}",i+="return "+r[0],a=o-1,u=1;u<o;u++)i+="+x*",u<a&&(i+="("),i+=r[u];for(u=0;u<a-1;u++)i+=")";i+=";"}return i+="}",i+="//# sourceURL=evalpoly.factory.js",new e(i)();function s(c){return n(r,c)}}return od=t,od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ad,a5;function qt(){if(a5)return ad;a5=1;var e=on(),n=FA(),t=lB();return e(n,"factory",t),ad=n,ad}/**
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
*/var ud,u5;function fB(){if(u5)return ud;u5=1;function e(n){var t=-n,r=-1,i=0;return o;function o(){return r*=t,i+=1,r/i}}return ud=e,ud}/**
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
*/var sd,s5;function dB(){if(s5)return sd;s5=1;var e=be(),n=we(),t=nt(),r=to(),i=fB();function o(a){var u,s;return a<=-1?NaN:(s=e(a),s>.95?n(1+a)-a:s<t?-a*a/2:(u={initialValue:-a},r(i(a),u)))}return sd=o,sd}/**
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
*/var cd,c5;function xA(){if(c5)return cd;c5=1;var e=dB();return cd=e,cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ld,l5;function du(){if(l5)return ld;l5=1;var e=6.283185307179586;return ld=e,ld}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fd,f5;function pB(){if(f5)return fd;f5=1;function e(n){return n===0?-.3333333333333333:-.3333333333333333+n*(.08333333333333333+n*(-.014814814814814815+n*(.0011574074074074073+n*(.0003527336860670194+n*(-.0001787551440329218+n*(3919263178522438e-20+n*(-21854485106799924e-22+n*(-185406221071516e-20+n*(8296711340953087e-22+n*(-17665952736826078e-23+n*(6707853543401498e-24+n*(10261809784240309e-24+n*(-4382036018453353e-24+n*914769958223679e-24)))))))))))))}return fd=e,fd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dd,d5;function hB(){if(d5)return dd;d5=1;function e(n){return n===0?-.001851851851851852:-.001851851851851852+n*(-.003472222222222222+n*(.0026455026455026454+n*(-.0009902263374485596+n*(.00020576131687242798+n*(-4018775720164609e-22+n*(-18098550334489977e-21+n*(764916091608111e-20+n*(-16120900894563446e-22+n*(4647127802807434e-24+n*(1378633446915721e-22+n*(-5752545603517705e-23+n*11951628599778148e-24)))))))))))}return dd=e,dd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pd,p5;function mB(){if(p5)return pd;p5=1;function e(n){return n===0?.004133597883597883:.004133597883597883+n*(-.0026813271604938273+n*(.0007716049382716049+n*(20093878600823047e-22+n*(-.00010736653226365161+n*(52923448829120125e-21+n*(-12760635188618728e-21+n*(3423578734096138e-23+n*(13721957309062932e-22+n*(-6298992138380055e-22+n*14280614206064242e-23)))))))))}return pd=e,pd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hd,h5;function vB(){if(h5)return hd;h5=1;function e(n){return n===0?.0006494341563786008:.0006494341563786008+n*(.00022947209362139917+n*(-.0004691894943952557+n*(.00026772063206283885+n*(-7561801671883977e-20+n*(-2396505113867297e-22+n*(11082654115347302e-21+n*(-56749528269915965e-22+n*14230900732435883e-22)))))))}return hd=e,hd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var md,m5;function _B(){if(m5)return md;m5=1;function e(n){return n===0?-.0008618882909167117:-.0008618882909167117+n*(.0007840392217200666+n*(-.0002990724803031902+n*(-14638452578843418e-22+n*(6641498215465122e-20+n*(-3968365047179435e-20+n*11375726970678419e-21)))))}return md=e,md}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vd,v5;function gB(){if(v5)return vd;v5=1;function e(n){return n===0?-.00033679855336635813:-.00033679855336635813+n*(-6972813758365858e-20+n*(.0002772753244959392+n*(-.00019932570516188847+n*(6797780477937208e-20+n*(1419062920643967e-22+n*(-13594048189768693e-21+n*(8018470256334202e-21+n*-2291481176508095e-21)))))))}return vd=e,vd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _d,_5;function bB(){if(_5)return _d;_5=1;function e(n){return n===0?.0005313079364639922:.0005313079364639922+n*(-.0005921664373536939+n*(.0002708782096718045+n*(7902353232660328e-22+n*(-8153969367561969e-20+n*(561168275310625e-19+n*-18329116582843375e-21)))))}return _d=e,_d}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gd,g5;function yB(){if(g5)return gd;g5=1;function e(n){return n===0?.00034436760689237765:.00034436760689237765+n*(5171790908260592e-20+n*(-.00033493161081142234+n*(.0002812695154763237+n*-.00010976582244684731)))}return gd=e,gd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bd,b5;function EB(){if(b5)return bd;b5=1;function e(n){return n===0?-.0006526239185953094:-.0006526239185953094+n*(.0008394987206720873+n*-.000438297098541721)}return bd=e,bd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var yd,y5;function SB(){if(y5)return yd;y5=1;var e=qt(),n=xA(),t=fu(),r=ge(),i=Oe(),o=du(),a=pB(),u=hB(),s=mB(),c=vB(),l=_B(),f=gB(),p=bB(),h=yB(),d=EB(),m=[0,0,0,0,0,0,0,0,0,0];function v(_,g){var b,y,E,w,I;return y=(g-_)/_,E=-n(y),w=_*E,I=r(2*E),g<_&&(I=-I),m[0]=a(I),m[1]=u(I),m[2]=s(I),m[3]=c(I),m[4]=l(I),m[5]=f(I),m[6]=p(I),m[7]=h(I),m[8]=d(I),m[9]=-.0005967612901927463,b=e(m,1/_),b*=i(-w)/r(o*_),g<_&&(b=-b),b+=t(r(w))/2,b}return yd=v,yd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ed,E5;function AB(){if(E5)return Ed;E5=1;function e(n,t){var r=1,i=n,o=t;return a;function a(){var u=r;return i+=1,r*=o/i,u}}return Ed=e,Ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Sd,S5;function BA(){if(S5)return Sd;S5=1;var e=to(),n=AB();function t(r,i,o){var a,u;return o=o||0,u=n(r,i),a=e(u,{initialValue:o}),a}return Sd=t,Sd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ad,A5;function wB(){if(A5)return Ad;A5=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=709811.662581658+n*(679979.8474157227+n*(293136.7857211597+n*(74887.54032914672+n*(12555.290582413863+n*(1443.4299244417066+n*(115.24194596137347+n*(6.309239205732627+n*(.22668404630224365+n*(.004826466289237662+n*4624429436045379e-20))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=4624429436045379e-20+n*(.004826466289237662+n*(.22668404630224365+n*(6.309239205732627+n*(115.24194596137347+n*(1443.4299244417066+n*(12555.290582413863+n*(74887.54032914672+n*(293136.7857211597+n*(679979.8474157227+n*709811.662581658))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return Ad=e,Ad}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var wd,w5;function $B(){if(w5)return wd;w5=1;var e=wB();return wd=e,wd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $d,$5;function pu(){if($5)return $d;$5=1;var e=$B();return $d=e,$d}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Id,I5;function IB(){if(I5)return Id;I5=1;var e=pu(),n=jr(),t=tt(),r=xA(),i=ge(),o=be(),a=Oe(),u=Pe(),s=nr(),c=Mt(),l=we(),f=tr(),p=Pt(),h=Vr(),d=no(),m=Gr();function v(_,g){var b,y,E,w,I,C,L;return E=_+d-.5,L=(g-_-d+.5)/E,_<1?g<=h||_<1/f?a(_*l(g)-g-n(_)):u(g,_)*a(-g)/t(_):(o(L*L*_)<=100&&_>150?(b=_*r(L)+g*(.5-d)/E,b=a(b)):(w=_*l(g/E),I=_-g,c(w,I)<=h||s(w,I)>=p?(y=I/_,c(w,I)/2>h&&s(w,I)/2<p?(C=u(g/E,_/2)*a(I/2),b=C*C):c(w,I)/4>h&&s(w,I)/4<p&&g>_?(C=u(g/E,_/4)*a(I/4),b=C*C,b*=b):y>h&&y<p?b=u(g*a(y)/E,_):b=a(w+I)):b=u(g/E,_)*a(I)),b*=i(E/m)/e(_),b)}return Id=v,Id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Td,T5;function TB(){if(T5)return Td;T5=1;var e=ae(),n=Br(),t=be(),r=xr(),i=we(),o=Pe(),a=C2();function u(s,c){var l,f;if(e(s)||e(c))return NaN;if(c===0)return 0;if(s===0)return-1;if(s<0&&c%2===0&&(s=-s),s>0){if((t(c*(s-1))<.5||t(c)<.2)&&(f=i(s)*c,f<.5))return r(f)}else if(a(c)!==c)return NaN;return l=o(s,c)-1,n(l)||e(l)?NaN:l}return Td=u,Td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ld,L5;function LB(){if(L5)return Ld;L5=1;var e=TB();return Ld=e,Ld}/**
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
*/var Rd,R5;function RB(){if(R5)return Rd;R5=1;function e(n){var t,r,i;return n===0?-.01803556856784494:(n<0?t=-n:t=n,t<=1?(r=-.01803556856784494+n*(.02512664961998968+n*(.049410315156753225+n*(.0172491608709614+n*(-.0002594535632054381+n*(-.0005410098692152044+n*(-3245886498259485e-20+n*0)))))),i=1+n*(1.962029871977952+n*(1.4801966942423133+n*(.5413914320717209+n*(.09885042511280101+n*(.008213096746488934+n*(.00022493629192211576+n*-22335276320861708e-23))))))):(n=1/n,r=0+n*(-3245886498259485e-20+n*(-.0005410098692152044+n*(-.0002594535632054381+n*(.0172491608709614+n*(.049410315156753225+n*(.02512664961998968+n*-.01803556856784494)))))),i=-22335276320861708e-23+n*(.00022493629192211576+n*(.008213096746488934+n*(.09885042511280101+n*(.5413914320717209+n*(1.4801966942423133+n*(1.962029871977952+n*1))))))),r/i)}return Rd=e,Rd}/**
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
*/var Cd,C5;function CB(){if(C5)return Cd;C5=1;function e(n){var t,r,i;return n===0?.04906224540690395:(n<0?t=-n:t=n,t<=1?(r=.04906224540690395+n*(-.09691175301595212+n*(-.4149833583594954+n*(-.4065671242119384+n*(-.1584135863906922+n*(-.024014982064857155+n*-.0010034668769627955))))),i=1+n*(3.0234982984646304+n*(3.4873958536072385+n*(1.9141558827442668+n*(.5071377386143635+n*(.05770397226904519+n*.001957681026011072)))))):(n=1/n,r=-.0010034668769627955+n*(-.024014982064857155+n*(-.1584135863906922+n*(-.4065671242119384+n*(-.4149833583594954+n*(-.09691175301595212+n*.04906224540690395))))),i=.001957681026011072+n*(.05770397226904519+n*(.5071377386143635+n*(1.9141558827442668+n*(3.4873958536072385+n*(3.0234982984646304+n*1)))))),r/i)}return Cd=e,Cd}/**
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
*/var kd,k5;function kB(){if(k5)return kd;k5=1;function e(n){var t,r,i;return n===0?-.029232972183027003:(n<0?t=-n:t=n,t<=1?(r=-.029232972183027003+n*(.14421626775719232+n*(-.14244039073863127+n*(.05428096940550536+n*(-.008505359768683364+n*(.0004311713426792973+n*0))))),i=1+n*(-1.5016935605448505+n*(.846973248876495+n*(-.22009515181499575+n*(.02558279715597587+n*(-.0010066679553914337+n*-8271935218912905e-22)))))):(n=1/n,r=0+n*(.0004311713426792973+n*(-.008505359768683364+n*(.05428096940550536+n*(-.14244039073863127+n*(.14421626775719232+n*-.029232972183027003))))),i=-8271935218912905e-22+n*(-.0010066679553914337+n*(.02558279715597587+n*(-.22009515181499575+n*(.846973248876495+n*(-1.5016935605448505+n*1)))))),r/i)}return kd=e,kd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Nd,N5;function NB(){if(N5)return Nd;N5=1;var e=we(),n=nt(),t=RB(),r=CB(),i=kB(),o=.15896368026733398,a=.5281534194946289,u=.45201730728149414;function s(c,l,f){var p,h,d,m;if(c<n)return-e(c);if(l===0||f===0)return 0;if(h=0,c>2){if(c>=3){do c-=1,f-=1,h+=e(c);while(c>=3);f=c-2}return d=f*(c+1),m=t(f),h+=d*o+d*m,h}return c<1&&(h+=-e(c),f=l,l=c,c+=1),c<=1.5?(d=r(l),p=l*f,h+=p*a+p*d,h):(d=f*l,m=i(-f),h+=d*u+d*m,h)}return Nd=s,Nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Md,M5;function MB(){if(M5)return Md;M5=1;var e=tt(),n=xr(),t=In(),r=ae(),i=NB();function o(a){return r(a)?NaN:a<0?a<-.5?e(1+a)-1:n(-t(a)+i(a+2,a+1,a)):a<2?n(i(a+1,a,a-1)):e(1+a)-1}return Md=o,Md}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Od,O5;function OB(){if(O5)return Od;O5=1;var e=MB();return Od=e,Od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Pd,P5;function PB(){if(P5)return Pd;P5=1;function e(n,t){var r,i,o,a;return r=-t,t=-t,i=n+1,o=1,u;function u(){return a=r/i,r*=t,o+=1,r/=o,i+=1,a}}return Pd=e,Pd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var qd,q5;function qB(){if(q5)return qd;q5=1;var e=LB(),n=to(),t=OB(),r=PB();function i(o,a,u){var s,c,l,f,p;return c=t(o),l=(c+1)/o,f=e(a,o),c-=f,c/=o,p=r(o,a),f+=1,s=u?l:0,c=-f*n(p,{initialValue:(s-c)/f}),u&&(c=-c),[c,l]}return qd=i,qd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dd,D5;function hu(){if(D5)return Dd;D5=1;var e=11754943508222875e-54;return Dd=e,Dd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fd,F5;function DB(){if(F5)return Fd;F5=1;var e=be(),n=hu(),t=nt(),r=1e6;function i(u,s,c){var l,f,p,h,d,m,v;if(l=typeof u.next=="function",v=l?u.next().value:u(),h=v[1],p=v[0],h===0&&(h=n),d=h,m=0,l===!0)do v=u.next().value,v&&(m=v[1]+v[0]*m,m===0&&(m=n),d=v[1]+v[0]/d,d===0&&(d=n),m=1/m,f=d*m,h*=f);while(e(f-1)>s&&--c);else do v=u(),v&&(m=v[1]+v[0]*m,m===0&&(m=n),d=v[1]+v[0]/d,d===0&&(d=n),m=1/m,f=d*m,h*=f);while(v&&e(f-1)>s&&--c);return p/h}function o(u,s,c){var l,f,p,h,d,m;if(l=typeof u.next=="function",m=l?u.next().value:u(),p=m[1],p===0&&(p=n),h=p,d=0,l===!0)do m=u.next().value,m&&(d=m[1]+m[0]*d,d===0&&(d=n),h=m[1]+m[0]/h,h===0&&(h=n),d=1/d,f=h*d,p*=f);while(m&&e(f-1)>s&&--c);else do m=u(),m&&(d=m[1]+m[0]*d,d===0&&(d=n),h=m[1]+m[0]/h,h===0&&(h=n),d=1/d,f=h*d,p*=f);while(m&&e(f-1)>s&&--c);return p}function a(u,s){var c,l,f;return l={},arguments.length>1&&(l=s),c=l.maxIter||r,f=l.tolerance||t,l.keep?o(u,f,c):i(u,f,c)}return Fd=a,Fd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xd,x5;function FB(){if(x5)return xd;x5=1;var e=be(),n=nt(),t=hu(),r=1e6;function i(u,s,c){var l,f,p,h,d,m;m=u(),d=m[1],f=m[0],d===0&&(d=t),p=d,h=0;do m=u(),m&&(h=m[1]+m[0]*h,h===0&&(h=t),p=m[1]+m[0]/p,p===0&&(p=t),h=1/h,l=p*h,d*=l);while(m&&e(l-1)>s&&--c);return f/d}function o(u,s,c){var l,f,p,h,d;d=u(),h=d[1],h===0&&(h=t),f=h,p=0;do d=u(),d&&(p=d[1]+d[0]*p,p===0&&(p=t),f=d[1]+d[0]/f,f===0&&(f=t),p=1/p,l=f*p,h*=l);while(d&&e(l-1)>s&&--c);return h}function a(u,s){var c,l,f;return l={},arguments.length>1&&(l=s),f=l.tolerance||n,c=l.maxIter||r,l.keep?o(u,f,c):i(u,f,c)}return xd=a,xd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bd,B5;function HA(){if(B5)return Bd;B5=1;var e=DA(),n=DB(),t=FB(),r;return e()?r=n:r=t,Bd=r,Bd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Hd,H5;function xB(){if(H5)return Hd;H5=1;function e(n,t){var r=t-n+1,i=n,o=0;return a;function a(){return o+=1,r+=2,[o*(i-o),r]}}return Hd=e,Hd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ud,U5;function UA(){if(U5)return Ud;U5=1;var e=HA(),n=xB();function t(r,i){var o=n(r,i);return 1/(i-r+1+e(o))}return Ud=t,Ud}/**
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
*/var Gd,G5;function BB(){if(G5)return Gd;G5=1;var e=et(),n=tt(),t=be(),r=Pe(),i=we(),o=Gx(),a=tr(),u=Pt(),s=Yx(),c=Jx(),l=aB(),f=uB(),p=SB(),h=BA(),d=IB(),m=qB(),v=UA();function _(g,b,y,E){var w,I,C,L,$,A,S,T,R,P,M,x,q,F;switch(S=0,T=E,A=b<30&&b<=g+1&&g<u,A?(q=e(b),R=q===b,C=R?!1:t(q-b)===.5):(R=!1,C=!1),R&&g>.6?(T=!T,I=0):C&&g>.2?(T=!T,I=1):g<o&&b>1?I=6:g>1e3&&(b<g||t(b-50)/g<1)?(T=!T,I=7):g<.5?-.4/i(g)<b?I=2:I=3:g<1.1?g*.75<b?I=2:I=3:($=!1,y&&b>20&&(P=t((g-b)/b),b>200?20/b>P*P&&($=!0):P<.4&&($=!0)),$?I=5:g-1/(3*g)<b?I=2:(I=4,T=!T)),I){case 0:S=c(b,g),y===!1&&(S*=n(b));break;case 1:S=l(b,g),y===!1&&(S*=n(b));break;case 2:S=y?d(b,g):f(b,g),S!==0&&(L=0,w=!1,T&&(L=y?1:n(b),y||S>=1||a*S>L?(L/=S,y||b<1||a/b>L?(L*=-b,w=!0):L=0):L=0),S*=h(b,g,L)/b,w&&(T=!1,S=-S));break;case 3:T=!T,M=m(b,g,T),S=M[0],F=M[1],T=!1,y&&(S/=F);break;case 4:S=y?d(b,g):f(b,g),S!==0&&(S*=v(b,g));break;case 5:S=p(b,g),g>=b&&(T=!T);break;case 6:S=y?r(g,b)/n(b+1):r(g,b)/b,S*=1-b*g/(b+1);break;case 7:S=y?d(b,g):f(b,g),S/=g,S!==0&&(S*=s(b,g));break}return y&&S>1&&(S=1),T&&(x=y?1:n(b),S=x-S),S}return Gd=_,Gd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var jd,j5;function HB(){if(j5)return jd;j5=1;var e=jr(),n=Oe(),t=we(),r=cu(),i=Pt(),o=Me(),a=lu(),u=BB(),s=BA(),c=UA();function l(f,p,h,d){var m,v,_,g;return f<0||p<=0?NaN:(m=h===void 0?!0:h,_=d,p>=a&&!m?(_&&p*4<f?(g=p*t(f)-f,g+=t(c(p,f))):!_&&p>4*f?(g=p*t(f)-f,v=0,g+=t(s(p,f,v)/p)):(g=u(f,p,!0,_),g===0?_?(g=1+1/(12*p)+1/(288*p*p),g=t(g)-p+(p-.5)*t(p),g+=t(r)):(g=p*t(f)-f,v=0,g+=t(s(p,f,v)/p)):g=t(g)+e(p)),g>i?o:n(g)):u(f,p,m,_))}return jd=l,jd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vd,V5;function GA(){if(V5)return Vd;V5=1;var e=HB();return Vd=e,Vd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Wd,W5;function UB(){if(W5)return Wd;W5=1;var e=Oe(),n=Pe(),t=we(),r=Pt(),i=Vr();function o(a,u){var s,c;return c=a*t(u),u>=1?c<r&&-u>i?s=n(u,a)*e(-u):a>=1?s=n(u/e(u/a),a):s=e(c-u):c>i?s=n(u,a)*e(-u):u/a<r?s=n(u/e(u/a),a):s=e(c-u),s}return Wd=o,Wd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Xd,X5;function GB(){if(X5)return Xd;X5=1;var e=pu(),n=jr(),t=tt(),r=In(),i=ge(),o=be(),a=Oe(),u=Pe(),s=nr(),c=Mt(),l=we(),f=Pt(),p=Vr(),h=no(),d=Gr();function m(v,_){var g,b,y,E,w,I,C;return y=v+h-.5,C=(_-v-h+.5)/y,v<1?_<=p?a(v*l(_)-_-n(v)):u(_,v)*a(-_)/t(v):(o(C*C*v)<=100&&v>150?(g=v*(r(C)-C)+_*(.5-h)/y,g=a(g)):(E=v*l(_/y),w=v-_,c(E,w)<=p||s(E,w)>=f?(b=w/v,c(E,w)/2>p&&s(E,w)/2<f?(I=u(_/y,v/2)*a(w/2),g=I*I):c(E,w)/4>p&&s(E,w)/4<f&&_>v?(I=u(_/y,v/4)*a(w/4),g=I*I,g*=g):b>p&&b<f?g=u(_*a(b)/y,v):g=a(E+w)):g=u(_/y,v)*a(w)),g*=i(y/d)/e(v),g)}return Xd=m,Xd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Kd,K5;function jB(){if(K5)return Kd;K5=1;var e=P2(),n=qA(),t=GA(),r=In(),i=be(),o=Pe(),a=we(),u=er(),s=nt(),c=UB(),l=GB(),f=new Array(30);function p(h,d,m,v,_,g,b){var y,E,w,I,C,L,$,A,S,T,R,P,M,x,q,F,O,te;if(L=d-1,O=h+L/2,v<.35?T=r(-v):T=a(m),te=-O*T,P=l(d,te),P<=u)return _;for(b?(y=P/e(h,d),y/=o(O,d)):y=c(d,te)/o(O,d),y*=g,f[0]=1,M=t(te,d,!0,!0),M/=P,I=_+y*M,w=1,$=T/2,$*=$,A=1,R=4*O*O,C=d,q=1;q<f.length;++q){for(w+=2,f[q]=0,S=d-q,E=3,x=1;x<q;++x)S=x*d-q,f[q]+=S*f[q-x]/n(E),E+=2;if(f[q]/=q,f[q]+=L/n(w),M=(C*(C+1)*M+(te+C+1)*A)/R,A*=$,C+=2,F=y*f[q]*M,I+=F,F>1){if(i(F)<i(s*I))break}else if(i(F/s)<i(I))break}return I}return Kd=p,Kd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Yd,Y5;function VB(){if(Y5)return Yd;Y5=1;function e(n,t,r){var i,o;if(r===0)return 1;for(i=1,o=0;o<r;o++)i*=(n+o)/(t+o);return i}return Yd=e,Yd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jd,J5;function WB(){if(J5)return Jd;J5=1;var e=be(),n=nr();function t(r,i){return n(e(r),e(i))}return Jd=t,Jd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zd,z5;function XB(){if(z5)return zd;z5=1;var e=WB();return zd=e,zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zd,Z5;function KB(){if(Z5)return Zd;Z5=1;var e=be(),n=Mt();function t(r,i){return n(e(r),e(i))}return Zd=t,Zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qd,Q5;function YB(){if(Q5)return Qd;Q5=1;var e=KB();return Qd=e,Qd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var e1,e8;function D2(){if(e8)return e1;e8=1;var e=pu(),n=XB(),t=YB(),r=xr(),i=In(),o=ge(),a=be(),u=Oe(),s=Pe(),c=Mt(),l=we(),f=Pt(),p=Vr(),h=no(),d=Gr();function m(v,_,g,b,y){var E,w,I,C,L,$,A,S,T,R,P,M,x,q;if(!y)return s(g,v)*s(b,_);if(x=v+_,C=v+h-.5,L=_+h-.5,$=x+h-.5,E=e(x),E/=e(v)*e(_),E*=o(L/d),E*=o(C/$),A=(g*_-b*C)/C,S=(b*v-g*L)/L,t(A,S)<.2)if(A*S>0||c(v,_)<1)a(A)<.1?E*=u(v*i(A)):E*=s(g*$/C,v),a(S)<.1?E*=u(_*i(S)):E*=s(b*$/L,_);else if(n(A,S)<.5)w=v<_,I=_/v,w&&I*S<.1||!w&&A/I>.1?(T=r(I*i(S)),T=A+T+T*A,T=v*i(T),E*=u(T)):(T=r(i(A)/I),T=S+T+T*S,T=_*i(T),E*=u(T));else if(a(A)<a(S))if(q=v*i(A)+_*l(b*$/L),q<=p||q>=f){if(q+=l(E),q>=f)return NaN;E=u(q)}else E*=u(q);else if(q=_*i(S)+v*l(g*$/C),q<=p||q>=f){if(q+=l(E),q>=f)return NaN;E=u(q)}else E*=u(q);else if(P=g*$/C,M=b*$/L,A=v*l(P),S=_*l(M),A>=f||A<=p||S>=f||S<=p)if(v<_)if(R=s(M,_/v),T=v*(l(P)+l(R)),T<f&&T>p)E*=s(R*P,v);else{if(S+=A+l(E),S>=f)return NaN;E=u(S)}else if(R=s(P,v/_),T=(l(R)+l(M))*_,T<f&&T>p)E*=s(R*M,_);else{if(S+=A+l(E),S>=f)return NaN;E=u(S)}else E*=s(P,v)*s(M,_);return E}return e1=m,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var n1,n8;function JB(){if(n8)return n1;n8=1;var e=HA(),n=D2(),t={keep:!0,maxIter:1e3};function r(o,a,u,s){var c=0;return l;function l(){var f,p,h;return p=(o+c-1)*(o+a+c-1)*c*(a-c)*u*u,f=o+2*c-1,p/=f*f,h=c,h+=c*(a-c)*u/(o+2*c-1),h+=(o+c)*(o*s-a*u+1+c*(2-u))/(o+2*c+1),c+=1,[p,h]}}function i(o,a,u,s,c,l){var f,p,h;return f=n(o,a,u,s,c),l&&(l[1]=f),f===0?f:(h=r(o,a,u,s),p=e(h,t),f/p)}return n1=i,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1,t8;function zB(){if(t8)return t1;t8=1;var e=9007199254740991;return t1=e,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,r8;function ZB(){if(r8)return r1;r8=1;function e(n,t){var r=0,i;if(n===0)return t;if(t===0)return n;for(;(n&1)===0&&(t&1)===0;)n>>>=1,t>>>=1,r+=1;for(;(n&1)===0;)n>>>=1;for(;t;){for(;(t&1)===0;)t>>>=1;n>t&&(i=t,t=n,n=i),t-=n}return n<<r}return r1=e,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,i8;function QB(){if(i8)return i1;i8=1;function e(n,t){var r=1,i;if(n===0)return t;if(t===0)return n;for(;n%2===0&&t%2===0;)n/=2,t/=2,r*=2;for(;n%2===0;)n/=2;for(;t;){for(;t%2===0;)t/=2;n>t&&(i=t,t=n,n=i),t-=n}return r*n}return i1=e,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,o8;function eH(){if(o8)return o1;o8=1;var e=ae(),n=Ur(),t=Me(),r=an(),i=kA(),o=ZB(),a=QB();function u(s,c){return e(s)||e(c)?NaN:s===t||c===t||s===r||c===r?NaN:n(s)&&n(c)?(s<0&&(s=-s),c<0&&(c=-c),s<=i&&c<=i?o(s,c):a(s,c)):NaN}return o1=u,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,a8;function nH(){if(a8)return a1;a8=1;var e=eH();return a1=e,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,u8;function tH(){if(u8)return u1;u8=1;var e=zB(),n=Me(),t=Ur(),r=ae(),i=M2(),o=et(),a=nH();function u(s,c){var l,f,p,h,d,m,v;if(r(s)||r(c))return NaN;if(!t(s)||!t(c))return NaN;if(c<0||(f=1,s<0&&(s=-s+c-1,i(c)&&(f*=-1)),c>s))return 0;if(c===0||c===s)return f;if(c===1||c===s-1)return f*s;for(s-c<c&&(c=s-c),v=o(e/s),l=1,d=1;d<=c&&!(l>v);d++)l*=s,l/=d,s-=1;return d>c?f*l:(p=u(s,c-d+1),p===n?f*p:(h=u(c,c-d+1),m=a(p,h),p/=m,h/=m,l/=h,f*l*p))}return u1=u,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,s8;function rH(){if(s8)return s1;s8=1;var e=tH();return s1=e,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var c1,c8;function iH(){if(c8)return c1;c8=1;var e=rH(),n=et(),t=Pe(),r=er();function i(o,a,u,s){var c,l,f,p,h;if(l=t(u,o),l>r)for(p=l,h=n(o-1);h>a;h--)p*=(h+1)*s/((o-h)*u),l+=p;else if(f=n(o*u),f<=a+1&&(f=n(a+2)),l=t(u,f)*t(s,o-f),l*=e(n(o),n(f)),l===0)for(h=f-1;h>a;h--)l+=t(u,h)*t(s,o-h),l*=e(n(o),n(h));else{for(p=l,c=l,h=f-1;h>a;h--)p*=(h+1)*s/((o-h)*u),l+=p;for(p=c,h=f+1;h<=o;h++)p*=(o-h+1)*u/(h*s),l+=p}return l}return c1=i,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var l1,l8;function oH(){if(l8)return l1;l8=1;var e=D2();function n(t,r,i,o,a,u,s){var c,l,f,p;if(c=e(t,r,i,o,u),s&&(s[1]=c),c/=t,c===0)return c;for(f=1,l=1,p=0;p<a-1;++p)l*=(t+r+p)*i/(t+p+1),f+=l;return c*=f,c}return l1=n,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var f1,f8;function aH(){if(f8)return f1;f8=1;var e=pu(),n=to(),t=In(),r=ge(),i=Oe(),o=Pe(),a=we(),u=er(),s=Pt(),c=Vr(),l=no(),f=Gr(),p={maxTerms:100};function h(m,v,_,g){var b=1-v,y=1;return E;function E(){var w=g/m;return m+=1,g*=b*_/y,y+=1,b+=1,w}}function d(m,v,_,g,b,y,E){var w,I,C,L,$,A,S,T;return b?(S=m+v,I=m+l-.5,C=v+l-.5,L=S+l-.5,w=e(S)/(e(m)*e(v)),$=a(L/C)*(v-.5),A=a(_*L/I)*m,$>c&&$<s&&A>c&&A<s?(m*v<C*10?w*=i((v-.5)*t(m/C)):w*=o(L/C,v-.5),w*=o(_*L/I,m),w*=r(I/f),y&&(y[1]=w*o(E,v))):(w=a(w)+$+A+(a(I)-1)/2,y&&(y[1]=i(w+v*a(E))),w=i(w))):w=o(_,m),w<u?g:(T=h(m,v,_,w),p.initialValue=g,n(T,p))}return f1=d,f1}var d1,d8;function jA(){if(d8)return d1;d8=1;var e=ae(),n=xr(),t=et(),r=In(),i=R2(),o=su(),a=ge(),u=Oe(),s=Pe(),c=nr(),l=Mt(),f=tr(),p=er(),h=kA(),d=O2(),m=Ot(),v=jB(),_=VB(),g=D2(),b=JB(),y=iH(),E=oH(),w=aH(),I=1/m;function C(L,$,A,S,T,R,P,M){var x,q,F,O,te,G,z,re,se,j,K,V;if(V=1-L,z=M,re=M+P,R[re]=-1,e(L)||L<0||L>1)return R[z]=NaN,R[re]=NaN,R;if(S){if($<0||A<0)return R[z]=NaN,R[re]=NaN,R;if($===0){if(A===0)return R[z]=NaN,R[re]=NaN,R;if(A>0)return R[z]=T?0:1,R}else if(A===0&&$>0)return R[z]=T?1:0,R}else if($<=0||A<=0)return R[z]=NaN,R[re]=NaN,R;return L===0?($===1?R[re]=1:R[re]=$<1?f/2:p*2,T?(R[z]=S?1:o($,A),R):(R[z]=0,R)):L===1?(A===1?R[re]=1:R[re]=A<1?f/2:p*2,T?R[z]=0:R[z]=S?1:o($,A),R):$===.5&&A===.5?(R[re]=I*a(V*L),K=i(a(T?V:L)),K/=d,S||(K*=m),R[z]=K,R):($===1&&(G=A,A=$,$=G,G=V,V=L,L=G,T=!T),A===1?$===1?(R[z]=T?V:L,R[re]=1,R):(R[re]=$*s(L,$-1),V<.5?K=T?-n($*r(-V)):u($*r(-V)):K=T?-(s(L,$)-1):s(L,$),S||(K/=$),R[z]=K,R):(l($,A)<=1?(L>.5&&(G=A,A=$,$=G,G=V,V=L,L=G,T=!T),c($,A)<=1?$>=l(.2,A)||s(L,$)<=.9?T?(F=-(S?1:o($,A)),T=!1,F=-w($,A,L,F,S,R,V)):F=w($,A,L,0,S,R,V):(G=A,A=$,$=G,G=V,V=L,L=G,T=!T,V>=.3?T?(F=-(S?1:o($,A)),T=!1,F=-w($,A,L,F,S,R,V)):F=w($,A,L,0,S,R,V):(S?q=1:q=_($+A,$,20),F=E($,A,L,V,20,S,R),T?(F-=S?1:o($,A),T=!1,F=-v($+20,A,L,V,F,q,S)):F=v($+20,A,L,V,F,q,S))):A<=1||L<.1&&s(A*L,$)<=.7?T?(F=-(S?1:o($,A)),T=!1,F=-w($,A,L,F,S,R,V)):F=w($,A,L,0,S,R,V):(G=A,A=$,$=G,G=V,V=L,L=G,T=!T,V>=.3?T?(F=-(S?1:o($,A)),T=!1,F=-w($,A,L,F,S,R,V)):F=w($,A,L,0,S,R,V):$>=15?T?(F=-(S?1:o($,A)),T=!1,F=-v($,A,L,V,F,1,S)):F=v($,A,L,V,0,1,S):(S?q=1:q=_($+A,$,20),F=E($,A,L,V,20,S,R),T?(F-=S?1:o($,A),T=!1,F=-v($+20,A,L,V,F,q,S)):F=v($+20,A,L,V,F,q,S)))):($<A?x=$-($+A)*L:x=($+A)*V-A,x<0&&(G=A,A=$,$=G,G=V,V=L,L=G,T=!T),A<40?t($)===$&&t(A)===A&&$<h-100?(se=$-1,j=A+se,F=y(j,se,L,V),S||(F*=o($,A))):A*L<=.7?T?(F=-(S?1:o($,A)),T=!1,F=-w($,A,L,F,S,R,V)):F=w($,A,L,0,S,R,V):$>15?(j=t(A),j===A&&(j-=1),O=A-j,S?q=1:q=_($+O,O,j),F=E(O,$,V,L,j,S),F=v($,O,L,V,F,1,S),F/=q):S?(j=t(A),O=A-j,O<=0&&(j-=1,O+=1),F=E(O,$,V,L,j,S),F+=E($,O,L,V,20,S),T&&(F-=1),F=v($+20,O,L,V,F,1,S),T&&(F=-F,T=!1)):F=b($,A,L,V,S,R):F=b($,A,L,V,S,R)),R[re]<0&&(R[re]=g($,A,L,V,!0)),te=V*L,R[re]!==0&&(f*te<R[re]?R[re]=f/2:R[re]/=te),R[z]=T?(S?1:o($,A))-F:F,R))}return d1=C,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,p8;function uH(){if(p8)return p1;p8=1;var e=jA();function n(t,r,i,o,a){return e(t,r,i,o,a,[0,0],1,0)}return p1=n,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,h8;function VA(){if(h8)return h1;h8=1;var e=on(),n=uH(),t=jA();return e(n,"assign",t),h1=n,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m1,m8;function sH(){if(m8)return m1;m8=1;var e=VA().assign;function n(t,r,i,o,a){var u=[0,0];return o=o!==!1,a=a===!0,e(t,r,i,o,a,u,1,0),u[0]}return m1=n,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,v8;function ro(){if(v8)return v1;v8=1;var e=sH();return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,_8;function cH(){if(_8)return _1;_8=1;var e=ro(),n=ae();function t(r,i,o){return n(r)||n(i)||n(o)||i<=0||o<=0?NaN:r<=0?0:r>=1?1:e(r,i,o)}return _1=t,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,g8;function lH(){if(g8)return g1;g8=1;function e(n){return t;function t(){return n}}return g1=e,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,b8;function Tn(){if(b8)return b1;b8=1;var e=lH();return b1=e,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,y8;function fH(){if(y8)return y1;y8=1;var e=Tn(),n=ro(),t=ae();function r(i,o){if(t(i)||t(o)||i<=0||o<=0)return e(NaN);return a;function a(u){return t(u)?NaN:u<=0?0:u>=1?1:n(u,i,o)}}return y1=r,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,E8;function dH(){if(E8)return E1;E8=1;var e=on(),n=cH(),t=fH();return e(n,"factory",t),E1=n,E1}var pH=dH();const am=Qn(pH);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,S8;function WA(){if(S8)return S1;S8=1;var e=.9189385332046728;return S1=e,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var A1,A8;function hH(){if(A8)return A1;A8=1;var e=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],n=e.length;function t(r){var i,o,a,u,s;if(r<-1.1||r>1.1)return NaN;for(a=0,u=0,i=2*r,s=0;s<n;s++)o=a,a=u,u=i*a-o+e[s];return(u-o)*.5}return A1=t,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var w1,w8;function mH(){if(w8)return w1;w8=1;var e=Pe(),n=hH(),t=9490626562425156e-8,r=3745194030963158e291;function i(o){return o<10?NaN:o>=r?0:o<t?n(2*e(10/o,2)-1)/o:1/(o*12)}return w1=i,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var $1,$8;function vH(){if($8)return $1;$8=1;var e=jr(),n=In(),t=tt(),r=nr(),i=Mt(),o=we(),a=WA(),u=an(),s=Me(),c=mH();function l(f,p){var h,d,m;return d=i(f,p),m=r(f,p),d<0?NaN:d===0?s:m===s?u:d>=10?(h=c(d)+c(m)-c(d+m),-.5*o(m)+a+h+(d-.5)*o(d/(d+m))+m*n(-d/(d+m))):m>=10?(h=c(m)-c(d+m),e(d)+h+d-d*o(d+m)+(m-.5)*n(-d/(d+m))):o(t(d)*(t(m)/t(d+m)))}return $1=l,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,I8;function XA(){if(I8)return I1;I8=1;var e=vH();return I1=e,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1,T8;function _H(){if(T8)return T1;T8=1;var e=XA(),n=ae(),t=In(),r=Oe(),i=we(),o=Me();function a(u,s,c){var l;return n(u)||n(s)||n(c)||s<=0||c<=0?NaN:u<0||u>1?0:u===0?s<1?o:s>1?0:c:u===1?c<1?o:c>1?0:s:(l=(s-1)*i(u),l+=(c-1)*t(-u),l-=e(s,c),r(l))}return T1=a,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,L8;function gH(){if(L8)return L1;L8=1;var e=Tn(),n=XA(),t=ae(),r=In(),i=Oe(),o=we(),a=Me();function u(s,c){var l;if(t(s)||t(c)||s<=0||c<=0)return e(NaN);return l=n(s,c),f;function f(p){var h;return t(p)?NaN:p<0||p>1?0:p===0?s<1?a:s>1?0:c:p===1?c<1?a:c>1?0:s:(h=-l,h+=(s-1)*o(p),h+=(c-1)*r(-p),i(h))}}return L1=u,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1,R8;function bH(){if(R8)return R1;R8=1;var e=on(),n=_H(),t=gH();return e(n,"factory",t),R1=n,R1}var yH=bH();const EH=Qn(yH);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1,C8;function SH(){if(C8)return C1;C8=1;function e(n){var t,r,i;return n===0?-.0005087819496582806:(n<0?t=-n:t=n,t<=1?(r=-.0005087819496582806+n*(-.008368748197417368+n*(.03348066254097446+n*(-.012692614766297404+n*(-.03656379714117627+n*(.02198786811111689+n*(.008226878746769157+n*(-.005387729650712429+n*(0+n*0)))))))),i=1+n*(-.9700050433032906+n*(-1.5657455823417585+n*(1.5622155839842302+n*(.662328840472003+n*(-.7122890234154284+n*(-.05273963823400997+n*(.07952836873415717+n*(-.0023339375937419+n*.0008862163904564247))))))))):(n=1/n,r=0+n*(0+n*(-.005387729650712429+n*(.008226878746769157+n*(.02198786811111689+n*(-.03656379714117627+n*(-.012692614766297404+n*(.03348066254097446+n*(-.008368748197417368+n*-.0005087819496582806)))))))),i=.0008862163904564247+n*(-.0023339375937419+n*(.07952836873415717+n*(-.05273963823400997+n*(-.7122890234154284+n*(.662328840472003+n*(1.5622155839842302+n*(-1.5657455823417585+n*(-.9700050433032906+n*1))))))))),r/i)}return C1=e,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,k8;function AH(){if(k8)return k1;k8=1;function e(n){var t,r,i;return n===0?-.20243350835593876:(n<0?t=-n:t=n,t<=1?(r=-.20243350835593876+n*(.10526468069939171+n*(8.3705032834312+n*(17.644729840837403+n*(-18.851064805871424+n*(-44.6382324441787+n*(17.445385985570866+n*(21.12946554483405+n*-3.6719225470772936))))))),i=1+n*(6.242641248542475+n*(3.971343795334387+n*(-28.66081804998+n*(-20.14326346804852+n*(48.560921310873994+n*(10.826866735546016+n*(-22.643693341313973+n*1.7211476576120028)))))))):(n=1/n,r=-3.6719225470772936+n*(21.12946554483405+n*(17.445385985570866+n*(-44.6382324441787+n*(-18.851064805871424+n*(17.644729840837403+n*(8.3705032834312+n*(.10526468069939171+n*-.20243350835593876))))))),i=1.7211476576120028+n*(-22.643693341313973+n*(10.826866735546016+n*(48.560921310873994+n*(-20.14326346804852+n*(-28.66081804998+n*(3.971343795334387+n*(6.242641248542475+n*1)))))))),r/i)}return k1=e,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,N8;function wH(){if(N8)return N1;N8=1;function e(n){var t,r,i;return n===0?-.1311027816799519:(n<0?t=-n:t=n,t<=1?(r=-.1311027816799519+n*(-.16379404719331705+n*(.11703015634199525+n*(.38707973897260434+n*(.3377855389120359+n*(.14286953440815717+n*(.029015791000532906+n*(.0021455899538880526+n*(-6794655751811263e-22+n*(28522533178221704e-24+n*-681149956853777e-24))))))))),i=1+n*(3.4662540724256723+n*(5.381683457070069+n*(4.778465929458438+n*(2.5930192162362027+n*(.848854343457902+n*(.15226433829533179+n*(.011059242293464892+n*(0+n*(0+n*0)))))))))):(n=1/n,r=-681149956853777e-24+n*(28522533178221704e-24+n*(-6794655751811263e-22+n*(.0021455899538880526+n*(.029015791000532906+n*(.14286953440815717+n*(.3377855389120359+n*(.38707973897260434+n*(.11703015634199525+n*(-.16379404719331705+n*-.1311027816799519))))))))),i=0+n*(0+n*(0+n*(.011059242293464892+n*(.15226433829533179+n*(.848854343457902+n*(2.5930192162362027+n*(4.778465929458438+n*(5.381683457070069+n*(3.4662540724256723+n*1)))))))))),r/i)}return N1=e,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,M8;function $H(){if(M8)return M1;M8=1;function e(n){var t,r,i;return n===0?-.0350353787183178:(n<0?t=-n:t=n,t<=1?(r=-.0350353787183178+n*(-.0022242652921344794+n*(.018557330651423107+n*(.009508047013259196+n*(.0018712349281955923+n*(.00015754461742496055+n*(460469890584318e-20+n*(-2304047769118826e-25+n*26633922742578204e-28))))))),i=1+n*(1.3653349817554064+n*(.7620591645536234+n*(.22009110576413124+n*(.03415891436709477+n*(.00263861676657016+n*(7646752923027944e-20+n*(0+n*0)))))))):(n=1/n,r=26633922742578204e-28+n*(-2304047769118826e-25+n*(460469890584318e-20+n*(.00015754461742496055+n*(.0018712349281955923+n*(.009508047013259196+n*(.018557330651423107+n*(-.0022242652921344794+n*-.0350353787183178))))))),i=0+n*(0+n*(7646752923027944e-20+n*(.00263861676657016+n*(.03415891436709477+n*(.22009110576413124+n*(.7620591645536234+n*(1.3653349817554064+n*1)))))))),r/i)}return M1=e,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,O8;function IH(){if(O8)return O1;O8=1;function e(n){var t,r,i;return n===0?-.016743100507663373:(n<0?t=-n:t=n,t<=1?(r=-.016743100507663373+n*(-.0011295143874558028+n*(.001056288621524929+n*(.00020938631748758808+n*(14962478375834237e-21+n*(44969678992770644e-23+n*(4625961635228786e-24+n*(-2811287356288318e-29+n*9905570997331033e-32))))))),i=1+n*(.5914293448864175+n*(.1381518657490833+n*(.016074608709367652+n*(.0009640118070051656+n*(27533547476472603e-21+n*(282243172016108e-21+n*(0+n*0)))))))):(n=1/n,r=9905570997331033e-32+n*(-2811287356288318e-29+n*(4625961635228786e-24+n*(44969678992770644e-23+n*(14962478375834237e-21+n*(.00020938631748758808+n*(.001056288621524929+n*(-.0011295143874558028+n*-.016743100507663373))))))),i=0+n*(0+n*(282243172016108e-21+n*(27533547476472603e-21+n*(.0009640118070051656+n*(.016074608709367652+n*(.1381518657490833+n*(.5914293448864175+n*1)))))))),r/i)}return O1=e,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var P1,P8;function TH(){if(P8)return P1;P8=1;var e=ae(),n=ge(),t=we(),r=Me(),i=an(),o=SH(),a=AH(),u=wH(),s=$H(),c=IH(),l=.08913147449493408,f=2.249481201171875,p=.807220458984375,h=.9399557113647461,d=.9836282730102539;function m(v){var _,g,b,y,E;return e(v)?NaN:v===0?r:v===2?i:v===1?0:v>2||v<0?NaN:(v>1?(_=-1,b=2-v):(_=1,b=v),v=1-b,v<=.5?(y=v*(v+10),E=o(v),_*(y*l+y*E)):b>=.25?(y=n(-2*t(b)),b-=.25,E=a(b),_*(y/(f+E))):(b=n(-t(b)),b<3?(g=b-1.125,E=u(g),_*(p*b+E*b)):b<6?(g=b-3,E=s(g),_*(h*b+E*b)):(g=b-6,E=c(g),_*(d*b+E*b))))}return P1=m,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,q8;function io(){if(q8)return q1;q8=1;var e=TH();return q1=e,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var D1,D8;function LH(){if(D8)return D1;D8=1;var e=ae(),n=R2(),t=ge(),r=wA(),i=6123233995736766e-32;function o(a){var u;return e(a)?NaN:a<-1||a>1?NaN:a>.5?2*n(t(.5-.5*a)):(u=r-n(a),u+=i,u+=r,u)}return D1=o,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1,F8;function RH(){if(F8)return F1;F8=1;var e=LH();return F1=e,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1,x8;function F2(){if(x8)return x1;x8=1;var e=1.4142135623730951;return x1=e,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,B8;function CH(){if(B8)return B1;B8=1;function e(n){return n===0?.16666666666666666:.16666666666666666+n*.16666666666666666}return B1=e,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,H8;function kH(){if(H8)return H1;H8=1;function e(n){return n===0?.058333333333333334:.058333333333333334+n*(.06666666666666667+n*.008333333333333333)}return H1=e,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1,U8;function NH(){if(U8)return U1;U8=1;function e(n){return n===0?.0251984126984127:.0251984126984127+n*(.026785714285714284+n*(.0017857142857142857+n*.0001984126984126984))}return U1=e,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1,G8;function MH(){if(G8)return G1;G8=1;function e(n){return n===0?.012039792768959435:.012039792768959435+n*(.010559964726631394+n*(-.0011078042328042327+n*(.0003747795414462081+n*27557319223985893e-22)))}return G1=e,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1,j8;function OH(){if(j8)return j1;j8=1;function e(n){return n===0?.003837005972422639:.003837005972422639+n*(.00610392115600449+n*(-.0016095979637646305+n*(.0005945867404200738+n*(-6270542728876062e-20+n*2505210838544172e-23))))}return j1=e,j1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1,V8;function PH(){if(V8)return V1;V8=1;function e(n){return n===0?.0032177478835464946:.0032177478835464946+n*(.0010898206731540065+n*(-.0012579159844784845+n*(.0006908420797309686+n*(-.00016376804137220805+n*(154012654012654e-19+n*16059043836821613e-26)))))}return V1=e,V1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1,W8;function qH(){if(W8)return W1;W8=1;function e(n){return n===0?.001743826229834001:.001743826229834001+n*(3353097688001788e-20+n*(-.0007624513544032393+n*(.0006451304695145635+n*(-.000249472580470431+n*(49255746366361444e-21+n*(-39851014346715405e-22+n*7647163731819816e-28))))))}return W1=e,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X1,X8;function DH(){if(X8)return X1;X8=1;function e(n){return n===0?.0009647274732138864:.0009647274732138864+n*(-.0003110108632631878+n*(-.00036307660358786886+n*(.0005140660578834113+n*(-.00029133414466938067+n*(9086710793521991e-20+n*(-15303004486655377e-21+n*(10914179173496788e-22+n*28114572543455206e-31)))))))}return X1=e,X1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K1,K8;function FH(){if(K8)return K1;K8=1;function e(n){return n===0?.0005422926281312969:.0005422926281312969+n*(-.0003694266780000966+n*(-.00010230378073700413+n*(.00035764655430568635+n*(-.00028690924218514614+n*(.00012645437628698076+n*(-33202652391372056e-21+n*(4890304529197534e-21+n*(-3123956959982987e-22+n*822063524662433e-32))))))))}return K1=e,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Y1,Y8;function xH(){if(Y8)return Y1;Y8=1;var e=P2(),n=qt(),t=ge(),r=Ot(),i=CH(),o=kH(),a=NH(),u=MH(),s=OH(),c=PH(),l=qH(),f=DH(),p=FH(),h=0,d=[1,0,0,0,0,0,0,0,0,0];function m(v,_){var g,b;return b=e(v/2,.5)*t(v*r)*(_-.5),g=1/v,d[1]=i(g),d[2]=o(g),d[3]=a(g),d[4]=u(g),d[5]=s(g),d[6]=c(g),d[7]=l(g),d[8]=f(g),d[9]=p(g),h+b*n(d,b*b)}return Y1=m,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var J1,J8;function BH(){if(J8)return J1;J8=1;var e=P2(),n=qt(),t=ge(),r=Pe(),i=Ot(),o=[0,0,0,0,0,0,0];function a(u,s){var c,l,f,p,h,d,m,v;return v=e(u/2,.5)*t(u*i)*s,p=u+2,h=u+4,d=u+6,o[0]=1,o[1]=-(u+1)/(2*p),p*=u+2,o[2]=-u*(u+1)*(u+3)/(8*p*h),p*=u+2,o[3]=-u*(u+1)*(u+5)*((3*u+7)*u-2)/(48*p*h*d),p*=u+2,h*=u+4,o[4]=-u*(u+1)*(u+7)*(((((15*u+154)*u+465)*u+286)*u-336)*u+64)/(384*p*h*d*(u+8)),p*=u+2,o[5]=-u*(u+1)*(u+3)*(u+9)*((((((35*u+452)*u+1573)*u+600)*u-2020)*u+928)*u-128)/(1280*p*h*d*(u+8)*(u+10)),p*=u+2,h*=u+4,d*=u+6,o[6]=-u*(u+1)*(u+11)*(((((((((((945*u+31506)*u+425858)*u+2980236)*u+11266745)*u+20675018)*u+7747124)*u-22574632)*u-8565600)*u+18108416)*u-7099392)*u+884736)/(46080*p*h*d*(u+8)*(u+10)*(u+12)),m=t(u),f=r(m*v,1/u),l=f*f,c=n(o,l),c*=m,c/=f,-c}return J1=a,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var z1,z8;function HH(){if(z8)return z1;z8=1;var e=io(),n=xr(),t=ge(),r=Pe(),i=O2(),o=F2();function a(u,s){var c,l,f,p,h,d,m;return u>1e20?-e(2*s)*o:(c=1/(u-.5),l=48/(c*c),f=((20700*c/l-98)*c-16)*c+96.36,p=((94.5/(l+f)-3)/l+1)*t(c*i)*u,m=r(p*2*s,2/u),m>.05+c?(d=-e(2*s)*o,m=d*d,u<5&&(f+=.3*(u-4.5)*(d+.6)),f+=(((.05*p*d-5)*d-7)*d-2)*d+l,m=(((((.4*m+6.3)*m+36)*m+94.5)/f-m-3)/l+1)*d,m=n(c*m*m)):m=((1/(((u+6)/(u*m)-.089*p-.822)*(u+2)*3)+.5/(u+4))*m-1)*(u+1)/(u+2)+1/m,h=t(u*m),-h)}return z1=a,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Z1,Z8;function UH(){if(Z8)return Z1;Z8=1;var e=io(),n=et(),t=Hr(),r=OA(),i=RH(),o=ge(),a=be(),u=q2(),s=Pe(),c=eo(),l=F2(),f=Ot(),p=xH(),h=BH(),d=HH(),m=268435456,v=1/3,_=106/3,g=.8549879733383485;function b(y,E,w){var I,C,L,$,A,S,T,R,P,M,x,q,F,O,te,G;if(A=0,E>w?(T=w,w=E,E=T,$=!0):$=!1,n(y)===y&&y<20)switch(C=t(1,_),n(y)){case 1:E===.5?A=0:A=-u(f*E)/c(f*E);break;case 2:A=(2*E-1)/o(2*E*w);break;case 4:S=4*E*w,L=o(S),F=4*u(i(L)/3)/L,O=o(F-4),A=E-.5<0?-O:O;break;case 6:if(E<1e-150)return($?-1:1)*d(y,E);te=4*(E-E*E),G=s(te,v),q=6*(1+g*(1/G-1));do P=q*q,M=P*P,x=q*M,R=q,q=2*(8*te*x-270*P+2187)/(5*(4*te*M-216*q-243));while(a((q-R)/q)>C);q=o(q-y),A=E-.5<0?-q:q;break;default:y>m?A=e(2*E)*l:y<3?(I=.2742-y*.0242143,E>I?A=p(y,E):A=h(y,E)):(I=t(1,r(y/-.654)),E>I?A=d(y,E):A=h(y,E))}else y>m?A=-e(2*E)*l:y<3?(I=.2742-y*.0242143,E>I?A=p(y,E):A=h(y,E)):(I=t(1,r(y/-.654)),E>I?A=d(y,E):A=h(y,E));return $?-A:A}return Z1=b,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Q1,Q8;function GH(){if(Q8)return Q1;Q8=1;var e=UH();function n(t,r,i){var o,a,u,s;return a=r/2,u=1-a,o=t*2,s=e(o,a,u),i&&(i.value=s*s/(o+s*s)),o/(o+s*s)}return Q1=n,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ep,ey;function jH(){if(ey)return ep;ey=1;var e=qt(),n=io(),t=ge(),r=Oe(),i=F2(),o=[0,0,0,0,0,0,0],a=[0,0,0,0];function u(s,c,l){var f,p,h,d,m,v,_;return f=n(2*l),f/=-t(s/2),a[0]=f,v=c-s,d=v*v,m=d*v,o[0]=-v*i/2,o[1]=(1-2*v)/8,o[2]=-(v*i/48),o[3]=-1/192,o[4]=-v*i/3840,o[5]=0,o[6]=0,a[1]=e(o,f),o[0]=v*i*(3*v-2)/12,o[1]=(20*d-12*v+1)/128,o[2]=v*i*(20*v-1)/960,o[3]=(16*d+30*v-15)/4608,o[4]=v*i*(21*v+32)/53760,o[5]=(-(32*d)+63)/368640,o[6]=-v*i*(120*v+17)/25804480,a[2]=e(o,f),o[0]=v*i*(-75*d+80*v-16)/480,o[1]=(-1080*m+868*d-90*v-45)/9216,o[2]=v*i*(-1190*d+84*v+373)/53760,o[3]=(-2240*m-2508*d+2100*v-165)/368640,o[4]=0,o[5]=0,o[6]=0,a[3]=e(o,f),h=e(a,1/s),p=h*h,_=-r(-p/2),p===0?.5:(1+h*t((1+_)/p))/2}return ep=u,ep}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var np,ny;function KA(){if(ny)return np;ny=1;var e=we(),n=tr(),t=n/4;function r(i,o){return a;function a(u){var s,c,l;return l=1-u,l===0?[-t,-t]:u===0?[-t,-t]:(c=e(u)+o*e(l)+i,s=1/u-o/l,[c,s])}}return np=r,np}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tp,ty;function VH(){if(ty)return tp;ty=1;var e=ae();function n(t){return t===0||e(t)?t:t<0?-1:1}return tp=n,tp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rp,ry;function mu(){if(ry)return rp;ry=1;var e=VH();return rp=e,rp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ip,iy;function YA(){if(iy)return ip;iy=1;var e=mu(),n=be(),t=Hr(),r=tr();function i(o,a,u,s,c,l){var f,p,h,d,m,v,_,g,b,y;b=0,f=0,m=a,d=t(1,1-c),_=r,p=r,h=r,v=l;do{if(f=b,h=p,p=_,g=o(m),b=g[0],y=g[1],v-=1,b===0)break;if(y===0?(f===0&&(m===u?a=s:a=u,f=o(a),_=a-m),e(f)*e(b)<0?_<0?_=(m-u)/2:_=(m-s)/2:_<0?_=(m-s)/2:_=(m-u)/2):_=b/y,n(_*2)>n(h)&&(_=_>0?(m-u)/2:(m-s)/2),a=m,m-=_,m<=u){if(_=.5*(a-u),m=a-_,m===u||m===s)break}else if(m>=s&&(_=.5*(a-s),m=a-_,m===u||m===s))break;_>0?s=a:u=a}while(v&&n(m*d)<n(_));return m}return ip=i,ip}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var op,oy;function WH(){if(oy)return op;oy=1;function e(n){return n===0?-1:-1+n*(-5+n*5)}return op=e,op}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ap,ay;function XH(){if(ay)return ap;ay=1;function e(n){return n===0?1:1+n*(21+n*(-69+n*46))}return ap=e,ap}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var up,uy;function KH(){if(uy)return up;uy=1;function e(n){return n===0?7:7+n*(-2+n*(33+n*(-62+n*31)))}return up=e,up}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sp,sy;function YH(){if(sy)return sp;sy=1;function e(n){return n===0?25:25+n*(-52+n*(-17+n*(88+n*(-115+n*46))))}return sp=e,sp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cp,cy;function JH(){if(cy)return cp;cy=1;function e(n){return n===0?7:7+n*(12+n*(-78+n*52))}return cp=e,cp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lp,ly;function zH(){if(ly)return lp;ly=1;function e(n){return n===0?-7:-7+n*(2+n*(183+n*(-370+n*185)))}return lp=e,lp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fp,fy;function ZH(){if(fy)return fp;fy=1;function e(n){return n===0?-533:-533+n*(776+n*(-1835+n*(10240+n*(-13525+n*5410))))}return fp=e,fp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dp,dy;function QH(){if(dy)return dp;dy=1;function e(n){return n===0?-1579:-1579+n*(3747+n*(-3372+n*(-15821+n*(45588+n*(-45213+n*15071)))))}return dp=e,dp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pp,py;function eU(){if(py)return pp;py=1;function e(n){return n===0?449:449+n*(-1259+n*(-769+n*(6686+n*(-9260+n*3704))))}return pp=e,pp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hp,hy;function nU(){if(hy)return hp;hy=1;function e(n){return n===0?63149:63149+n*(-151557+n*(140052+n*(-727469+n*(2239932+n*(-2251437+n*750479)))))}return hp=e,hp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mp,my;function tU(){if(my)return mp;my=1;function e(n){return n===0?29233:29233+n*(-78755+n*(105222+n*(146879+n*(-1602610+n*(3195183+n*(-2554139+n*729754))))))}return mp=e,mp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vp,vy;function rU(){if(vy)return vp;vy=1;function e(n){return n===0?1:1+n*(-13+n*13)}return vp=e,vp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _p,_y;function iU(){if(_y)return _p;_y=1;function e(n){return n===0?1:1+n*(21+n*(-69+n*46))}return _p=e,_p}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var gp,gy;function oU(){if(gy)return gp;gy=1;var e=qt(),n=io(),t=be(),r=Oe(),i=we(),o=ge(),a=eo(),u=q2(),s=KA(),c=YA(),l=WH(),f=XH(),p=KH(),h=YH(),d=JH(),m=zH(),v=ZH(),_=QH(),g=eU(),b=nU(),y=tU(),E=rU(),w=iU(),I=[0,0,0,0,0,0],C=[0,0,0,0];function L($,A,S){var T,R,P,M,x,q,F,O,te,G,z,re,se,j,K,V,Ee,he,ee,ue;return x=n(2*$)/-o(A/2),he=a(S),Ee=u(S),C[0]=x,K=he*he,V=Ee*Ee,se=he*Ee,re=se*se,z=re*se,G=re*re,te=re*z,O=z*z,F=G*z,I[0]=(2*K-1)/(3*se),I[1]=-l(K)/(36*re),I[2]=f(K)/(1620*z),I[3]=p(K)/(6480*G),I[4]=h(K)/(90720*te),I[5]=0,C[1]=e(I,x),I[0]=-d(K)/(405*z),I[1]=m(K)/(2592*G),I[2]=-v(K)/(204120*te),I[3]=-_(K)/(2099520*O),I[4]=0,I[5]=0,C[2]=e(I,x),I[0]=g(K)/(102060*te),I[1]=-b(K)/(20995200*O),I[2]=y(K)/(36741600*F),I[3]=0,I[4]=0,I[5]=0,C[3]=e(I,x),q=e(C,1/A),P=Ee/he,P*=P,j=-(q*q)/(2*K)+i(K)+V*i(V)/K,t(q)<.7?(I[0]=K,I[1]=se,I[2]=(1-2*K)/3,I[3]=E(K)/(36*se),I[4]=w(K)/(270*re),I[5]=0,ue=e(I,q)):(ee=r(j),I[0]=ee,I[1]=P,I[2]=0,I[3]=3*P*(3*P+1)/6,I[4]=4*P*(4*P+1)*(4*P+2)/24,I[5]=5*P*(5*P+1)*(5*P+2)*(5*P+3)/120,ue=e(I,ee),(ue-K)*q<0&&(ue=1-ue)),q<0?(R=0,T=K):(R=K,T=1),(ue<R||ue>T)&&(ue=(R+T)/2),M=s(-j,P),ue=c(M,ue,R,T,32,100),ue}return gp=L,gp}var Lo={exports:{}},Ro={exports:{}},bp,by;function aU(){if(by)return bp;by=1;var e=1e3,n=e*60,t=n*60,r=t*24,i=r*365.25;bp=function(c,l){l=l||{};var f=typeof c;if(f==="string"&&c.length>0)return o(c);if(f==="number"&&isNaN(c)===!1)return l.long?u(c):a(c);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(c))};function o(c){if(c=String(c),!(c.length>100)){var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(c);if(l){var f=parseFloat(l[1]),p=(l[2]||"ms").toLowerCase();switch(p){case"years":case"year":case"yrs":case"yr":case"y":return f*i;case"days":case"day":case"d":return f*r;case"hours":case"hour":case"hrs":case"hr":case"h":return f*t;case"minutes":case"minute":case"mins":case"min":case"m":return f*n;case"seconds":case"second":case"secs":case"sec":case"s":return f*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return f;default:return}}}}function a(c){return c>=r?Math.round(c/r)+"d":c>=t?Math.round(c/t)+"h":c>=n?Math.round(c/n)+"m":c>=e?Math.round(c/e)+"s":c+"ms"}function u(c){return s(c,r,"day")||s(c,t,"hour")||s(c,n,"minute")||s(c,e,"second")||c+" ms"}function s(c,l,f){if(!(c<l))return c<l*1.5?Math.floor(c/l)+" "+f:Math.ceil(c/l)+" "+f+"s"}return bp}var yy;function uU(){return yy||(yy=1,(function(e,n){n=e.exports=i.debug=i.default=i,n.coerce=s,n.disable=a,n.enable=o,n.enabled=u,n.humanize=aU(),n.names=[],n.skips=[],n.formatters={};var t;function r(c){var l=0,f;for(f in c)l=(l<<5)-l+c.charCodeAt(f),l|=0;return n.colors[Math.abs(l)%n.colors.length]}function i(c){function l(){if(l.enabled){var f=l,p=+new Date,h=p-(t||p);f.diff=h,f.prev=t,f.curr=p,t=p;for(var d=new Array(arguments.length),m=0;m<d.length;m++)d[m]=arguments[m];d[0]=n.coerce(d[0]),typeof d[0]!="string"&&d.unshift("%O");var v=0;d[0]=d[0].replace(/%([a-zA-Z%])/g,function(g,b){if(g==="%%")return g;v++;var y=n.formatters[b];if(typeof y=="function"){var E=d[v];g=y.call(f,E),d.splice(v,1),v--}return g}),n.formatArgs.call(f,d);var _=l.log||n.log||console.log.bind(console);_.apply(f,d)}}return l.namespace=c,l.enabled=n.enabled(c),l.useColors=n.useColors(),l.color=r(c),typeof n.init=="function"&&n.init(l),l}function o(c){n.save(c),n.names=[],n.skips=[];for(var l=(typeof c=="string"?c:"").split(/[\s,]+/),f=l.length,p=0;p<f;p++)l[p]&&(c=l[p].replace(/\*/g,".*?"),c[0]==="-"?n.skips.push(new RegExp("^"+c.substr(1)+"$")):n.names.push(new RegExp("^"+c+"$")))}function a(){n.enable("")}function u(c){var l,f;for(l=0,f=n.skips.length;l<f;l++)if(n.skips[l].test(c))return!1;for(l=0,f=n.names.length;l<f;l++)if(n.names[l].test(c))return!0;return!1}function s(c){return c instanceof Error?c.stack||c.message:c}})(Ro,Ro.exports)),Ro.exports}var Ey;function JA(){return Ey||(Ey=1,(function(e,n){var t={};n=e.exports=uU(),n.log=o,n.formatArgs=i,n.save=a,n.load=u,n.useColors=r,n.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:s(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}n.formatters.j=function(c){try{return JSON.stringify(c)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function i(c){var l=this.useColors;if(c[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+c[0]+(l?"%c ":" ")+"+"+n.humanize(this.diff),!!l){var f="color: "+this.color;c.splice(1,0,f,"color: inherit");var p=0,h=0;c[0].replace(/%[a-zA-Z%]/g,function(d){d!=="%%"&&(p++,d==="%c"&&(h=p))}),c.splice(h,0,f)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(c){try{c==null?n.storage.removeItem("debug"):n.storage.debug=c}catch{}}function u(){var c;try{c=n.storage.debug}catch{}return!c&&typeof process<"u"&&"env"in process&&(c=t.DEBUG),c}n.enable(u());function s(){try{return window.localStorage}catch{}}})(Lo,Lo.exports)),Lo.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yp,Sy;function vu(){if(Sy)return yp;Sy=1;var e=34028234663852886e22;return yp=e,yp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ep,Ay;function sU(){if(Ay)return Ep;Ay=1;var e=JA(),n=GA(),t=be(),r=Oe(),i=we(),o=vu(),a=e("gammaincinv:higher_newton");function u(s,c,l,f,p,h,d,m){var v,_,g,b,y,E,w,I,C,L,$,A,S,T;T=s,$=1,A=1,E=c*c,_=s;do{if(T=s,w=T*T,l===0){if(v=(1-c)*i(T)+T+h,v>i(o))return a("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),_;S=r(v)}else S=-d*T;m?(I=n(T,c,!0,!1),g=-S*(I-f)):(C=n(T,c,!0,!0),g=S*(C-p)),S=g,f>1e-120||A>1?(b=.5*(T-c+1)/T,y=(2*w-4*T*c+4*T+2*E-3*c+1)/w,y/=6,s=T+S*(1+S*(b+S*y))):s=T+S,$=t(T/s-1),A+=1,T=s,T<0&&(T=_,A=100)}while($>2e-14&&A<35);return($>2e-14||A>99)&&a("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),L=T||0,L}return Ep=u,Ep}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sp,wy;function cU(){if(wy)return Sp;wy=1;function e(n){return n===0?0:0+n*(1+n*(1+n*(1.5+n*(2.6666666666666665+n*(5.208333333333333+n*10.8)))))}return Sp=e,Sp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ap,$y;function lU(){if($y)return Ap;$y=1;function e(n){return n===0?1:1+n*(1+n*(.3333333333333333+n*(.027777777777777776+n*(-.003703703703703704+n*(.0002314814814814815+n*5878894767783657e-20)))))}return Ap=e,Ap}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wp,Iy;function zA(){if(Iy)return wp;Iy=1;var e=be(),n=Oe(),t=we(),r=qt(),i=cU(),o=lU(),a=1e-8,u=.08333333333333333,s=.008333333333333333,c=[1,0,0,0,0,0];function l(f){var p,h,d,m,v,_,g,b,y;if(y=f*f*.5,f===0?v=0:f<-1?(b=n(-1-y),v=i(b)):f<1?(b=f,v=o(b)):(b=11+y,_=t(b),v=b+_,b=1/b,p=_*_,h=p*_,d=h*_,m=d*_,c[1]=(2-_)*.5,c[2]=(-9*_+6+2*p)/6,c[3]=-(3*h+36*_-22*p-12)*u,c[4]=(60+350*p-300*_-125*h+12*d)/60,c[5]=-(-120-274*d+900*_-1700*p+1125*h+20*m)*s,v+=_*b*r(c,b)),b=1,f>-3.5&&f<-.03||f>.03&&f<40){b=1,g=v;do v=g*(y+t(g))/(g-1),b=e(g/v-1),g=v;while(b>a)}return v}return wp=l,wp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $p,Ty;function fU(){if(Ty)return $p;Ty=1;var e=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function n(t,r){var i,o,a,u,s;o=0,a=0,i=r+r,s=t;do u=a,a=o,o=i*a-u+e[s],s-=1;while(s>=0);return(o-u)/2}return $p=n,$p}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ip,Ly;function dU(){if(Ly)return Ip;Ly=1;function e(n){return n===0?.025721014990011306:.025721014990011306+n*(.08247596616699963+n*(-.0025328157302663564+n*(.0006099292666946337+n*(-.00033543297638406+n*.000250505279903))))}return Ip=e,Ip}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tp,Ry;function pU(){if(Ry)return Tp;Ry=1;function e(n){return n===0?.08333333333333333:.08333333333333333+n*(-.002777777777777778+n*(.0007936507936507937+n*-.0005952380952380953))}return Tp=e,Tp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lp,Cy;function hU(){if(Cy)return Lp;Cy=1;var e=jr(),n=we(),t=WA(),r=hu(),i=vu(),o=fU(),a=dU(),u=pU(),s=.30865217988013566;function c(l){var f;return l<r?i:l<1?e(l+1)-(l+.5)*n(l)+l-t:l<2?e(l)-(l-.5)*n(l)+l-t:l<3?e(l-1)-(l-.5)*n(l)+l-t+n(l-1):l<12?(f=18/(l*l)-1,o(17,f)/(12*l)):(f=1/(l*l),l<1e3?a(f)/(s+f)/l:u(f)/l)}return Lp=c,Lp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rp,ky;function mU(){if(ky)return Rp;ky=1;var e=Oe(),n=tt(),t=we(),r=vu(),i=cu(),o=hU();function a(u){return u>=3?e(o(u)):u>0?n(u)/(e(-u+(u-.5)*t(u))*i):r}return Rp=a,Rp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cp,Ny;function vU(){if(Ny)return Cp;Ny=1;function e(n){var t,r,i;return n===0?-.3333333333438:(n<0?t=-n:t=n,t<=1?(r=-.3333333333438+n*(-.2070740359969+n*(-.05041806657154+n*(-.004923635739372+n*-4293658292782e-17))),i=1+n*(.7045554412463+n*(.2118190062224+n*(.03048648397436+n*.001605037988091)))):(n=1/n,r=-4293658292782e-17+n*(-.004923635739372+n*(-.05041806657154+n*(-.2070740359969+n*-.3333333333438))),i=.001605037988091+n*(.03048648397436+n*(.2118190062224+n*(.7045554412463+n*1)))),r/i)}return Cp=e,Cp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kp,My;function _U(){if(My)return kp;My=1;var e=be(),n=we(),t=zA(),r=vU();function i(o){var a;return e(o)<1?r(o):(a=t(o),n(o/(a-1))/o)}return kp=i,kp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Np,Oy;function gU(){if(Oy)return Np;Oy=1;function e(n){var t,r,i;return n===0?-.0172847633523:(n<0?t=-n:t=n,t<=1?(r=-.0172847633523+n*(-.0159372646475+n*(-.00464910887221+n*(-.00060683488776+n*-614830384279e-17))),i=1+n*(.764050615669+n*(.297143406325+n*(.0579490176079+n*.00574558524851)))):(n=1/n,r=-614830384279e-17+n*(-.00060683488776+n*(-.00464910887221+n*(-.0159372646475+n*-.0172847633523))),i=.00574558524851+n*(.0579490176079+n*(.297143406325+n*(.764050615669+n*1)))),r/i)}return Np=e,Np}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mp,Py;function bU(){if(Py)return Mp;Py=1;function e(n){var t,r,i;return n===0?-.0172839517431:(n<0?t=-n:t=n,t<=1?(r=-.0172839517431+n*(-.0146362417966+n*(-.00357406772616+n*(-.000391032032692+n*249634036069e-17))),i=1+n*(.690560400696+n*(.249962384741+n*(.0443843438769+n*.00424073217211)))):(n=1/n,r=249634036069e-17+n*(-.000391032032692+n*(-.00357406772616+n*(-.0146362417966+n*-.0172839517431))),i=.00424073217211+n*(.0443843438769+n*(.249962384741+n*(.690560400696+n*1)))),r/i)}return Mp=e,Mp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Op,qy;function yU(){if(qy)return Op;qy=1;function e(n){var t,r,i;return n===0?.99994466948:(n<0?t=-n:t=n,t<=1?(r=.99994466948+n*(104.649839762+n*(857.204033806+n*(731.901559577+n*45.5174411671))),i=1+n*(104.526456943+n*(823.313447808+n*(3119.93802124+n*3970.03311219)))):(n=1/n,r=45.5174411671+n*(731.901559577+n*(857.204033806+n*(104.649839762+n*.99994466948))),i=3970.03311219+n*(3119.93802124+n*(823.313447808+n*(104.526456943+n*1)))),r/i)}return Op=e,Op}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pp,Dy;function EU(){if(Dy)return Pp;Dy=1;var e=we(),n=gU(),t=bU(),r=yU();function i(o){var a,u;return o<-5?(u=o*o,a=e(-o),(12-u-6*(a*a))/(12*u*o)):o<-2?n(o):o<2?t(o):o<1e3?(u=1/o,r(o)/(-12*o)):-1/(12*o)}return Pp=i,Pp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qp,Fy;function SU(){if(Fy)return qp;Fy=1;function e(n){var t,r,i;return n===0?.0495346498136:(n<0?t=-n:t=n,t<=1?(r=.0495346498136+n*(.0299521337141+n*(.00688296911516+n*(.000512634846317+n*-201411722031e-16))),i=1+n*(.759803615283+n*(.261547111595+n*(.0464854522477+n*.00403751193496)))):(n=1/n,r=-201411722031e-16+n*(.000512634846317+n*(.00688296911516+n*(.0299521337141+n*.0495346498136))),i=.00403751193496+n*(.0464854522477+n*(.261547111595+n*(.759803615283+n*1)))),r/i)}return qp=e,qp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dp,xy;function AU(){if(xy)return Dp;xy=1;function e(n){var t,r,i;return n===0?.00452313583942:(n<0?t=-n:t=n,t<=1?(r=.00452313583942+n*(.00120744920113+n*(-789724156582e-16+n*(-504476066942e-16+n*-535770949796e-17))),i=1+n*(.912203410349+n*(.405368773071+n*(.0901638932349+n*.00948935714996)))):(n=1/n,r=-535770949796e-17+n*(-504476066942e-16+n*(-789724156582e-16+n*(.00120744920113+n*.00452313583942))),i=.00948935714996+n*(.0901638932349+n*(.405368773071+n*(.912203410349+n*1)))),r/i)}return Dp=e,Dp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fp,By;function wU(){if(By)return Fp;By=1;function e(n){var t,r,i;return n===0?.00439937562904:(n<0?t=-n:t=n,t<=1?(r=.00439937562904+n*(.000487225670639+n*(-.000128470657374+n*(529110969589e-17+n*15716677175e-17))),i=1+n*(.794435257415+n*(.333094721709+n*(.0703527806143+n*.00806110846078)))):(n=1/n,r=15716677175e-17+n*(529110969589e-17+n*(-.000128470657374+n*(.000487225670639+n*.00439937562904))),i=.00806110846078+n*(.0703527806143+n*(.333094721709+n*(.794435257415+n*1)))),r/i)}return Fp=e,Fp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xp,Hy;function $U(){if(Hy)return xp;Hy=1;function e(n){var t,r,i;return n===0?-.0011481191232:(n<0?t=-n:t=n,t<=1?(r=-.0011481191232+n*(-.112850923276+n*(1.51623048511+n*(-.218472031183+n*.0730002451555))),i=1+n*(14.2482206905+n*(69.7360396285+n*(218.938950816+n*277.067027185)))):(n=1/n,r=.0730002451555+n*(-.218472031183+n*(1.51623048511+n*(-.112850923276+n*-.0011481191232))),i=277.067027185+n*(218.938950816+n*(69.7360396285+n*(14.2482206905+n*1)))),r/i)}return xp=e,xp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bp,Uy;function IU(){if(Uy)return Bp;Uy=1;function e(n){var t,r,i;return n===0?-.000145727889667:(n<0?t=-n:t=n,t<=1?(r=-.000145727889667+n*(-.290806748131+n*(-13.308504545+n*(199.722374056+n*-11.4311378756))),i=1+n*(139.612587808+n*(2189.01116348+n*(7115.24019009+n*45574.6081453)))):(n=1/n,r=-11.4311378756+n*(199.722374056+n*(-13.308504545+n*(-.290806748131+n*-.000145727889667))),i=45574.6081453+n*(7115.24019009+n*(2189.01116348+n*(139.612587808+n*1)))),r/i)}return Bp=e,Bp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hp,Gy;function TU(){if(Gy)return Hp;Gy=1;var e=we(),n=SU(),t=AU(),r=wU(),i=$U(),o=IU();function a(u){var s,c;return u<-8?(s=u*u,c=e(-u)/u,(-30+u*c*(6*s*c*c-12+s))/(12*u*s*s)):u<-4?n(u)/(u*u):u<-2?t(u):u<2?r(u):u<10?(s=1/u,i(s)/(u*u)):u<100?(s=1/u,o(s)/(u*u)):-e(u)/(12*u*u*u)}return Hp=a,Hp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Up,jy;function LU(){if(jy)return Up;jy=1;var e=JA(),n=qt(),t=jr(),r=io(),i=tt(),o=ge(),a=be(),u=Oe(),s=Mt(),c=Pe(),l=we(),f=cu(),p=vu(),h=du(),d=sU(),m=zA(),v=mU(),_=_U(),g=EU(),b=TU(),y=e("gammaincinv:compute"),E=.5,w=.3333333333333333,I=.25,C=.2,L=.16666666666666666,$=.08333333333333333,A=.041666666666666664,S=[0,0,0,0,0];function T(R,P,M){var x,q,F,O,te,G,z,re,se,j,K,V,Ee,he,ee,ue,Te,Se,vt,fn,_e,Cn,Ze,kn,Ft,J,ve,Nn,ti,rt,_t,ir,ri,ii,go,Qe,Fe,or,en,Mn,mn,xt,ar,ur;if(P<E?(O=!0,te=P,xt=-1):(O=!1,te=M,xt=1),en=0,a(R-1)<1e-4&&(Mn=0,O?P<.001?(ir=P*P,Nn=ir*P,_t=Nn*P,fn=_t*P,vt=fn*P,_e=P+ir*E+Nn*w+_t*I+fn*C+vt*L):_e=-l(1-P):_e=-l(M),R===1?(en=2,ii=_e):(F=t(R),en=1)),M<1e-30&&R<E&&(Mn=0,_e=-l(M*i(R))+(R-1)*l(-l(M*i(R))),en=1,F=t(R)),R>1&&R<500&&P<1e-80){for(Mn=0,G=1/R,x=1/(R+1),_e=(t(R+1)+l(P))*G,_e=u(_e),he=_e,or=0;or<10;or++)_e=he*u(_e*G)*c(1-_e*x,G);en=1,F=t(R)}if(z=1/R*(l(P)+t(R+1)),z<l(C*(1+R))&&en===0&&(mn=u(z),Mn=0,Cn=R*R,ri=Cn*R,ti=ri*R,ee=R+1,K=ee*ee,j=ee*K,se=K*K,ue=R+2,re=ue*ue,Te=R+3,S[0]=1,S[1]=1/ee,S[2]=E*(3*R+5)/(K*ue),S[3]=w*(31+8*Cn+33*R)/(j*ue*Te),S[4]=A*(2888+1179*ri+125*ti+3971*Cn+5661*R)/(se*re*Te*(R+4)),_e=mn*n(S,mn),F=t(R),en=1),R<10&&en===0&&(V=o(R)/(v(R)*f),Ee=s(.02,V),M<Ee&&(Mn=0,Qe=1-R,J=Qe*Qe,ve=J*Qe,Se=o(-2/R*l(M/V)),_e=R*m(Se),Fe=l(_e),_e>5?(Ze=Fe*Fe,kn=Ze*Fe,Ft=kn*Fe,mn=1/_e,S[0]=Fe-1,S[1]=(3*Qe-2*Qe*Fe+Ze-2*Fe+2)*E,S[2]=(24*Qe*Fe-11*J-24*Qe-6*Ze+12*Fe-12-9*Qe*Ze+6*J*Fe+2*kn)*L,S[3]=(-12*ve*Fe+8.04*Qe*Ze-114*J*Fe+(72+36*Ze)+(3*Ft-72*Fe+162)*(Qe-168*Qe*Fe)-(12*kn+25*ve)-(22*Qe*kn+36*J*Ze+120*J))*$,S[4]=0,_e=_e-Fe+Qe*mn*n(S,mn)):(mn=1/_e,Ze=Fe*Fe,go=Fe-1,ar=Fe-Qe*mn*go,ar<_e&&(_e-=ar)),F=t(R),en=1)),a(te-E)<1e-5&&en===0&&(Mn=0,G=1/R,_e=R-w+(.019753086419753086+.007211444248481286*G)*G,F=t(R),en=1),R<1&&en===0&&(Mn=0,O?_e=u(1/R*(l(te)+t(R+1))):_e=u(1/R*(l(1-te)+t(R+1))),F=t(R),en=1),en===0)if(Mn=1,G=1/R,mn=r(2*te),Se=xt*mn/o(R*E),mn<p)Se+=(_(Se)+(g(Se)+b(Se)*G)*G)*G,_e=R*m(Se),ur=Se,rt=-o(R/h)*u(-E*R*ur*ur)/v(R),q=1/rt;else return y("Warning: Overflow problems in one or more steps of the computation."),NaN;return en<2&&(ii=d(_e,R,Mn,P,M,F,q,O)),ii}return Up=T,Up}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gp,Vy;function RU(){if(Vy)return Gp;Vy=1;var e=ae(),n=hu(),t=Me(),r=LU();function i(o,a,u){return e(o)||e(a)?NaN:a<n?NaN:o>1||o<0?NaN:u===!0?o===0?t:o===1?0:r(a,1-o,o):o===0?0:o===1?t:r(a,o,1-o)}return Gp=i,Gp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jp,Wy;function CU(){if(Wy)return jp;Wy=1;var e=RU();return jp=e,jp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vp,Xy;function kU(){if(Xy)return Vp;Xy=1;var e=5e-324;return Vp=e,Vp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Wp,Ky;function NU(){if(Ky)return Wp;Ky=1;var e=CU(),n=we(),t=ge(),r=kU(),i=KA(),o=YA();function a(u,s,c,l){var f,p,h,d,m,v,_,g,b,y,E,w,I,C,L,$,A,S,T,R,P,M,x,q,F,O,te,G,z,re;return c<l?m=e(c,s,!0):m=e(l,s,!1),m/=u,C=s/u,G=t(1+C),S=G*G,T=S*G,R=S*S,P=T*S,M=T*T,x=R*T,q=R*R,F=P*R,_=P*P,te=m-C,L=te*te,$=L*te,A=L*L,O=G+1,g=O*O,b=O*g,y=g*g,E=(G+2)*(G-1)/(3*G),E+=(T+9*S+21*G+5)*te/(36*S*O),E-=(R-13*T+69*S+167*G+46)*L/(1620*g*T),E-=(7*P+21*R+70*T+26*S-93*G-31)*$/(6480*b*R),E-=(75*M+202*P+188*R-888*T-1345*S+118*G+138)*A/(272160*y*P),w=(28*R+131*T+402*S+581*G+208)*(G-1)/(1620*O*T),w-=(35*M-154*P-623*R-1636*T-3983*S-3514*G-925)*te/(12960*g*R),w-=(2132*x+7915*M+16821*P+35066*R+87490*T+141183*S+95993*G+21640)*L/(816480*P*b),w-=(11053*q+53308*x+117010*M+163924*P+116188*R-258428*T-677042*S-481940*G-105497)*$/(14696640*y*M),I=-((3592*x+8375*M-1323*P-29198*R-89578*T-154413*S-116063*G-29632)*(G-1))/(816480*P*g),I-=(442043*F+2054169*q+3803094*x+3470754*M+2141568*P-2393568*R-19904934*T-34714674*S-23128299*G-5253353)*te/(146966400*M*b),I-=(116932*_+819281*F+2378172*q+4341330*x+6806004*M+10622748*P+18739500*R+30651894*T+30869976*S+15431867*G+2919016)*L/(146966400*y*x),v=m+E/u+w/(u*u)+I/(u*u*u),v<=0&&(v=r),z=v-C*n(v)+(1+C)*n(1+C)-C,f=1/(1+C),h=v<C?f:0,d=v<C?1:f,re=(h+d)/2,p=i(z,C),o(p,re,h,d,32,100)}return Wp=a,Wp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Xp,Yy;function MU(){if(Yy)return Xp;Yy=1;var e=be(),n=Hr(),t=mu(),r=nr(),i=tr();function o(a,u,s,c,l,f){var p,h,d,m,v,_,g,b,y,E,w,I,C,L,$,A;L=0,h=!1,_=u,v=n(1,1-l),y=r(1e7*u,1e7),g=0,d=y,m=y,b=f;do{if(g=L,m=d,d=y,C=a(_),L=C[0],$=C[1],A=C[2],b-=1,L===0)break;if($===0?(g===0&&(_===s?u=c:u=s,g=a(u),y=u-_),t(g)*t(L)<0?y<0?y=(_-s)/2:y=(_-c)/2:y<0?y=(_-c)/2:y=(_-s)/2):A===0?y=L/$:(E=2*L,I=2*$-L*(A/$),e(I)<1&&e(E)>=e(I)*i?y=L/$:y=E/I,y*$/L<0&&(y=L/$,e(y)>2*e(u)&&(y=(y<0?-1:1)*2*e(u)))),p=e(y/m),p>.8&&p<2&&(y=y>0?(_-s)/2:(_-c)/2,e(y)>_&&(y=t(y)*_),m=y*3),u=_,_-=y,_<s){if(e(s)<1&&e(_)>1&&i/e(_)<e(s)?w=1e3:w=_/s,e(w)<1&&(w=1/w),!h&&w>0&&w<3)y=.99*(u-s),_=u-y,h=!0;else if(y=(u-s)/2,_=u-y,_===s||_===c)break}else if(_>c){if(e(c)<1&&e(_)>1&&i/e(_)<e(c)?w=1e3:w=_/c,e(w)<1&&(w=1/w),!h&&w>0&&w<3)y=.99*(u-c),_=u-y,h=!0;else if(y=(u-c)/2,_=u-y,_===s||_===c)break}y>0?c=u:s=u}while(b&&e(_*v)<e(y));return _}return Xp=o,Xp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Kp,Jy;function OU(){if(Jy)return Kp;Jy=1;var e=VA().assign,n=be(),t=tr(),r=er();function i(o,a,u,s){return c;function c(l){var f,p,h,d,m;return m=1-l,f=[0,0],e(l,o,a,!0,s,f,1,0),d=f[0]-u,p=f[1],s&&(p=-p),m===0&&(m=r*64),l===0&&(l=r*64),h=p*(-(m*o)+(a-2)*l+1),n(h)<m*l*t&&(h/=m*l),s&&(h=-h),p===0&&(p=(s?-1:1)*r*64),[d,p,h]}}return Kp=i,Kp}var Yp,zy;function PU(){if(zy)return Yp;zy=1;var e=qt(),n=ro(),t=xr(),r=In(),i=R2(),o=su(),a=ge(),u=be(),s=Oe(),c=Pe(),l=eo(),f=nr(),p=Mt(),h=we(),d=er(),m=O2(),v=nt(),_=GH(),g=jH(),b=oU(),y=NU(),E=MU(),w=OU(),I=32,C=1e3,L=[0,0,0,0,0];function $(A,S,T,R){var P,M,x,q,F,O,te,G,z,re,se,j,K,V,Ee,he,ee,ue,Te,Se,vt,fn,_e,Cn,Ze,kn,Ft,J,ve;if(M=!1,R===0)return[1,0];if(T===0)return[0,1];if(A===1){if(S===1)return[T,1-T];j=S,S=A,A=j,j=R,R=T,T=j,M=!0}if(J=0,q=0,O=1,A===.5){if(S===.5)return J=l(T*m),J*=J,ve=l(R*m),ve*=ve,[J,ve];S>.5&&(j=S,S=A,A=j,j=R,R=T,T=j,M=!M)}if(S===.5&&A>=.5&&T!==1)vt={},J=_(A,T,vt),ve=vt.value;else{if(S===1)return T<R?A>1?(J=c(T,1/A),ve=-t(h(T)/A)):(J=c(T,1/A),ve=1-J):(J=s(r(-R)/A),ve=-t(r(-R)/A)),M&&(j=ve,ve=J,J=j),[J,ve];if(A+S>5)T>.5&&(j=S,S=A,A=j,j=R,R=T,T=j,M=!M),z=p(A,S),G=f(A,S),a(z)>G-z&&z>5?(J=g(A,S,T),ve=1-J):(Ze=A+S,F=i(a(A/Ze)),x=z/Ze,x>=.2&&x<=.8&&Ze>=10?(se=c(T,1/A),se<.0025&&A+S<200?J=se*c(A*o(A,S),1/A):J=b(T,Ze,F),ve=1-J):(A<S&&(j=S,S=A,A=j,j=R,R=T,T=j,M=!M),re=0,S<2&&(re=o(A,S)),re===0?ve=1:(ve=c(S*R*re,1/S),J=1-ve)),ve>1e-5&&(J=y(A,S,T,R),ve=1-J));else if(A<1&&S<1){if(Se=(1-A)/(2-A-S),he=n(Se,A,S)-T,u(he)/T<v*3)return M?[1-Se,Se]:[Se,1-Se];he<0&&(j=S,S=A,A=j,j=R,R=T,T=j,M=!M,Se=1-Se),Te=c(A*T*o(A,S),1/A),J=Te/(1+Te),ve=1/(1+Te),J>Se&&(J=Se),O=Se}else A>1&&S>1?(Se=(A-1)/(A+S-2),K=(S-1)/(A+S-2),ue=n(Se,A,S)-T,ue<0&&(j=S,S=A,A=j,j=R,R=T,T=j,j=K,K=Se,Se=j,M=!M),ee=h(T*A*o(A,S))/A,J=s(ee),ve=J<.9?1-J:-t(ee),S<A&&J<.2&&(V=A-1,Ee=S-1,fn=A*A,_e=A*fn,Cn=S*S,L[0]=0,L[1]=1,L[2]=Ee/V,V*=V,L[3]=Ee*(3*A*S+5*S+fn-A-4)/(2*(A+2)*V),V*=A+1,L[4]=Ee*(33*A*Cn+31*Cn+8*fn*Cn-30*A*S-47*S+11*fn*S+6*_e*S+18+4*A-_e+fn*fn-10*fn),L[4]/=3*(A+3)*(A+2)*V,J=e(L,J)),J>Se&&(J=Se),O=Se):(S<A&&(j=S,S=A,A=j,j=R,R=T,T=j,M=!M),c(T,1/A)<.5?(J=c(T*A*o(A,S),1/A),J===0&&(J=d),ve=1-J):(ve=c(1-c(T,S*o(A,S)),1/S),ve===0&&(ve=d),J=1-ve))}return J>.5&&(j=S,S=A,A=j,j=R,R=T,T=j,j=ve,ve=J,J=j,M=!M,kn=1-O,Ft=1-q,q=kn,O=Ft),q===0&&(M?(q=v,J<q&&(J=q)):q=d,J<q&&(J=q)),P=I,J<1e-50&&(A<1||S<1)&&(P*=3,P/=2),te=w(A,S,T<R?T:R,T>=R),J=E(te,J,q,O,P,C),J===q&&(J=0),M?[1-J,J]:[J,1-J]}return Yp=$,Yp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jp,Zy;function x2(){if(Zy)return Jp;Zy=1;var e=PU();return Jp=e,Jp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zp,Qy;function qU(){if(Qy)return zp;Qy=1;var e=ae(),n=x2();function t(r,i,o,a){return e(r)||e(i)||e(o)?NaN:i<=0||o<=0?NaN:r<0||r>1?NaN:a?n(i,o,1-r,r)[0]:n(i,o,r,1-r)[0]}return zp=t,zp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zp,e9;function ZA(){if(e9)return Zp;e9=1;var e=qU();return Zp=e,Zp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qp,n9;function DU(){if(n9)return Qp;n9=1;var e=ZA(),n=ae();function t(r,i,o){return n(r)||n(i)||n(o)||i<=0||o<=0||r<0||r>1?NaN:e(r,i,o)}return Qp=t,Qp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eh,t9;function FU(){if(t9)return eh;t9=1;var e=Tn(),n=ZA(),t=ae();function r(i,o){if(t(i)||t(o)||i<=0||o<=0)return e(NaN);return a;function a(u){return t(u)||u<0||u>1?NaN:n(u,i,o)}}return eh=r,eh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nh,r9;function xU(){if(r9)return nh;r9=1;var e=on(),n=DU(),t=FU();return e(n,"factory",t),nh=n,nh}var BU=xU();const HU=Qn(BU);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var th,i9;function UU(){if(i9)return th;i9=1;var e=fu(),n=ge(),t=ae();function r(i,o,a){var u,s;return t(i)||t(o)||t(a)||a<0?NaN:a===0?i<o?0:1:(u=a*n(2),s=i-o,.5*e(-s/u))}return th=r,th}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rh,o9;function GU(){if(o9)return rh;o9=1;var e=ae();function n(t,r){return e(t)||e(r)?NaN:t<r?0:1}return rh=n,rh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ih,a9;function jU(){if(a9)return ih;a9=1;var e=Tn(),n=ae();function t(r){if(n(r))return e(NaN);return i;function i(o){return n(o)?NaN:o<r?0:1}}return ih=t,ih}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oh,u9;function VU(){if(u9)return oh;u9=1;var e=on(),n=GU(),t=jU();return e(n,"factory",t),oh=n,oh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ah,s9;function WU(){if(s9)return ah;s9=1;var e=Tn(),n=VU().factory,t=ae(),r=ge(),i=fu();function o(a,u){var s;if(t(a)||t(u)||u<0)return e(NaN);if(u===0)return n(a);return s=u*r(2),c;function c(l){var f;return t(l)?NaN:(f=l-a,.5*i(-f/s))}}return ah=o,ah}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uh,c9;function XU(){if(c9)return uh;c9=1;var e=on(),n=UU(),t=WU();return e(n,"factory",t),uh=n,uh}var KU=XU();const QA=Qn(KU);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sh,l9;function YU(){if(l9)return sh;l9=1;var e=Oe(),n=Pe(),t=ge(),r=du(),i=Me(),o=ae();function a(u,s,c){var l,f,p;return o(u)||o(s)||o(c)||c<0?NaN:c===0?u===s?i:0:(l=n(c,2),f=1/t(l*r),p=-1/(2*l),f*e(p*n(u-s,2)))}return sh=a,sh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ch,f9;function JU(){if(f9)return ch;f9=1;var e=Me(),n=ae();function t(r,i){return n(r)||n(i)?NaN:r===i?e:0}return ch=t,ch}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lh,d9;function zU(){if(d9)return lh;d9=1;var e=Tn(),n=Me(),t=ae();function r(i){if(t(i))return e(NaN);return o;function o(a){return t(a)?NaN:a===i?n:0}}return lh=r,lh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fh,p9;function ZU(){if(p9)return fh;p9=1;var e=on(),n=JU(),t=zU();return e(n,"factory",t),fh=n,fh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dh,h9;function QU(){if(h9)return dh;h9=1;var e=Tn(),n=ZU().factory,t=ae(),r=ge(),i=Oe(),o=Pe(),a=du();function u(s,c){var l,f,p;if(t(s)||t(c)||c<0)return e(NaN);if(c===0)return n(s);return l=o(c,2),f=1/r(l*a),p=-1/(2*l),h;function h(d){return t(d)?NaN:f*i(p*o(d-s,2))}}return dh=u,dh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ph,m9;function eG(){if(m9)return ph;m9=1;var e=on(),n=YU(),t=QU();return e(n,"factory",t),ph=n,ph}var nG=eG();const ew=Qn(nG);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hh,v9;function tG(){if(v9)return hh;v9=1;function e(n){var t,r,i;return n===0?-.0005087819496582806:(n<0?t=-n:t=n,t<=1?(r=-.0005087819496582806+n*(-.008368748197417368+n*(.03348066254097446+n*(-.012692614766297404+n*(-.03656379714117627+n*(.02198786811111689+n*(.008226878746769157+n*(-.005387729650712429+n*(0+n*0)))))))),i=1+n*(-.9700050433032906+n*(-1.5657455823417585+n*(1.5622155839842302+n*(.662328840472003+n*(-.7122890234154284+n*(-.05273963823400997+n*(.07952836873415717+n*(-.0023339375937419+n*.0008862163904564247))))))))):(n=1/n,r=0+n*(0+n*(-.005387729650712429+n*(.008226878746769157+n*(.02198786811111689+n*(-.03656379714117627+n*(-.012692614766297404+n*(.03348066254097446+n*(-.008368748197417368+n*-.0005087819496582806)))))))),i=.0008862163904564247+n*(-.0023339375937419+n*(.07952836873415717+n*(-.05273963823400997+n*(-.7122890234154284+n*(.662328840472003+n*(1.5622155839842302+n*(-1.5657455823417585+n*(-.9700050433032906+n*1))))))))),r/i)}return hh=e,hh}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mh,_9;function rG(){if(_9)return mh;_9=1;function e(n){var t,r,i;return n===0?-.20243350835593876:(n<0?t=-n:t=n,t<=1?(r=-.20243350835593876+n*(.10526468069939171+n*(8.3705032834312+n*(17.644729840837403+n*(-18.851064805871424+n*(-44.6382324441787+n*(17.445385985570866+n*(21.12946554483405+n*-3.6719225470772936))))))),i=1+n*(6.242641248542475+n*(3.971343795334387+n*(-28.66081804998+n*(-20.14326346804852+n*(48.560921310873994+n*(10.826866735546016+n*(-22.643693341313973+n*1.7211476576120028)))))))):(n=1/n,r=-3.6719225470772936+n*(21.12946554483405+n*(17.445385985570866+n*(-44.6382324441787+n*(-18.851064805871424+n*(17.644729840837403+n*(8.3705032834312+n*(.10526468069939171+n*-.20243350835593876))))))),i=1.7211476576120028+n*(-22.643693341313973+n*(10.826866735546016+n*(48.560921310873994+n*(-20.14326346804852+n*(-28.66081804998+n*(3.971343795334387+n*(6.242641248542475+n*1)))))))),r/i)}return mh=e,mh}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vh,g9;function iG(){if(g9)return vh;g9=1;function e(n){var t,r,i;return n===0?-.1311027816799519:(n<0?t=-n:t=n,t<=1?(r=-.1311027816799519+n*(-.16379404719331705+n*(.11703015634199525+n*(.38707973897260434+n*(.3377855389120359+n*(.14286953440815717+n*(.029015791000532906+n*(.0021455899538880526+n*(-6794655751811263e-22+n*(28522533178221704e-24+n*-681149956853777e-24))))))))),i=1+n*(3.4662540724256723+n*(5.381683457070069+n*(4.778465929458438+n*(2.5930192162362027+n*(.848854343457902+n*(.15226433829533179+n*(.011059242293464892+n*(0+n*(0+n*0)))))))))):(n=1/n,r=-681149956853777e-24+n*(28522533178221704e-24+n*(-6794655751811263e-22+n*(.0021455899538880526+n*(.029015791000532906+n*(.14286953440815717+n*(.3377855389120359+n*(.38707973897260434+n*(.11703015634199525+n*(-.16379404719331705+n*-.1311027816799519))))))))),i=0+n*(0+n*(0+n*(.011059242293464892+n*(.15226433829533179+n*(.848854343457902+n*(2.5930192162362027+n*(4.778465929458438+n*(5.381683457070069+n*(3.4662540724256723+n*1)))))))))),r/i)}return vh=e,vh}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _h,b9;function oG(){if(b9)return _h;b9=1;function e(n){var t,r,i;return n===0?-.0350353787183178:(n<0?t=-n:t=n,t<=1?(r=-.0350353787183178+n*(-.0022242652921344794+n*(.018557330651423107+n*(.009508047013259196+n*(.0018712349281955923+n*(.00015754461742496055+n*(460469890584318e-20+n*(-2304047769118826e-25+n*26633922742578204e-28))))))),i=1+n*(1.3653349817554064+n*(.7620591645536234+n*(.22009110576413124+n*(.03415891436709477+n*(.00263861676657016+n*(7646752923027944e-20+n*(0+n*0)))))))):(n=1/n,r=26633922742578204e-28+n*(-2304047769118826e-25+n*(460469890584318e-20+n*(.00015754461742496055+n*(.0018712349281955923+n*(.009508047013259196+n*(.018557330651423107+n*(-.0022242652921344794+n*-.0350353787183178))))))),i=0+n*(0+n*(7646752923027944e-20+n*(.00263861676657016+n*(.03415891436709477+n*(.22009110576413124+n*(.7620591645536234+n*(1.3653349817554064+n*1)))))))),r/i)}return _h=e,_h}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gh,y9;function aG(){if(y9)return gh;y9=1;function e(n){var t,r,i;return n===0?-.016743100507663373:(n<0?t=-n:t=n,t<=1?(r=-.016743100507663373+n*(-.0011295143874558028+n*(.001056288621524929+n*(.00020938631748758808+n*(14962478375834237e-21+n*(44969678992770644e-23+n*(4625961635228786e-24+n*(-2811287356288318e-29+n*9905570997331033e-32))))))),i=1+n*(.5914293448864175+n*(.1381518657490833+n*(.016074608709367652+n*(.0009640118070051656+n*(27533547476472603e-21+n*(282243172016108e-21+n*(0+n*0)))))))):(n=1/n,r=9905570997331033e-32+n*(-2811287356288318e-29+n*(4625961635228786e-24+n*(44969678992770644e-23+n*(14962478375834237e-21+n*(.00020938631748758808+n*(.001056288621524929+n*(-.0011295143874558028+n*-.016743100507663373))))))),i=0+n*(0+n*(282243172016108e-21+n*(27533547476472603e-21+n*(.0009640118070051656+n*(.016074608709367652+n*(.1381518657490833+n*(.5914293448864175+n*1)))))))),r/i)}return gh=e,gh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var bh,E9;function uG(){if(E9)return bh;E9=1;var e=ae(),n=ge(),t=we(),r=Me(),i=an(),o=tG(),a=rG(),u=iG(),s=oG(),c=aG(),l=.08913147449493408,f=2.249481201171875,p=.807220458984375,h=.9399557113647461,d=.9836282730102539;function m(v){var _,g,b,y,E,w;return e(v)?NaN:v===1?r:v===-1?i:v===0?v:v>1||v<-1?NaN:(v<0?(_=-1,g=-v):(_=1,g=v),y=1-g,g<=.5?(E=g*(g+10),w=o(g),_*(E*l+E*w)):y>=.25?(E=n(-2*t(y)),y-=.25,w=a(y),_*(E/(f+w))):(y=n(-t(y)),y<3?(b=y-1.125,w=u(b),_*(p*y+w*y)):y<6?(b=y-3,w=s(b),_*(h*y+w*y)):(b=y-6,w=c(b),_*(d*y+w*y))))}return bh=m,bh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yh,S9;function nw(){if(S9)return yh;S9=1;var e=uG();return yh=e,yh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eh,A9;function sG(){if(A9)return Eh;A9=1;var e=nw(),n=ae(),t=ge();function r(i,o,a){var u,s;return n(o)||n(a)||n(i)||a<0||i<0||i>1?NaN:a===0?o:(u=o,s=a*t(2),u+s*e(2*i-1))}return Eh=r,Eh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sh,w9;function cG(){if(w9)return Sh;w9=1;var e=ae();function n(t,r){return e(t)||t<0||t>1?NaN:r}return Sh=n,Sh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ah,$9;function lG(){if($9)return Ah;$9=1;var e=Tn(),n=ae();function t(r){if(n(r))return e(NaN);return i;function i(o){return n(o)||o<0||o>1?NaN:r}}return Ah=t,Ah}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wh,I9;function fG(){if(I9)return wh;I9=1;var e=on(),n=cG(),t=lG();return e(n,"factory",t),wh=n,wh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $h,T9;function dG(){if(T9)return $h;T9=1;var e=Tn(),n=fG().factory,t=nw(),r=ae(),i=ge();function o(a,u){var s,c;if(r(a)||r(u)||u<0)return e(NaN);return u===0&&n(a),s=a,c=u*i(2),l;function l(f){return r(f)||f<0||f>1?NaN:s+c*t(2*f-1)}}return $h=o,$h}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ih,L9;function pG(){if(L9)return Ih;L9=1;var e=on(),n=sG(),t=dG();return e(n,"factory",t),Ih=n,Ih}var hG=pG();const mG=Qn(hG);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Th,R9;function vG(){if(R9)return Th;R9=1;var e=ro(),n=ae(),t=Pe();function r(i,o){var a,u,s;return n(i)||n(o)||o<=0?NaN:i===0?.5:(a=t(i,2),o>2*a?(s=a/(o+a),u=e(s,.5,o/2,!0,!0)/2):(s=o/(o+a),u=e(s,o/2,.5,!0,!1)/2),i>0?1-u:u)}return Th=r,Th}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lh,C9;function _G(){if(C9)return Lh;C9=1;var e=Tn(),n=ro(),t=ae(),r=Pe();function i(o){if(t(o)||o<=0)return e(NaN);return a;function a(u){var s,c,l;return t(u)?NaN:u===0?.5:(s=r(u,2),o>2*s?(l=s/(o+s),c=n(l,.5,o/2,!0,!0)/2):(l=o/(o+s),c=n(l,o/2,.5,!0,!1)/2),u>0?1-c:c)}}return Lh=i,Lh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rh,k9;function gG(){if(k9)return Rh;k9=1;var e=on(),n=vG(),t=_G();return e(n,"factory",t),Rh=n,Rh}var bG=gG();const tw=Qn(bG);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ch,N9;function yG(){if(N9)return Ch;N9=1;var e=ae(),n=su(),t=ge(),r=Pe();function i(o,a){var u;return e(o)||e(a)||a<=0?NaN:(u=t(a)*n(a/2,.5),r(a/(a+r(o,2)),(1+a)/2)/u)}return Ch=i,Ch}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kh,M9;function EG(){if(M9)return kh;M9=1;var e=Tn(),n=ae(),t=su(),r=ge(),i=Pe();function o(a){var u,s;if(n(a)||a<=0)return e(NaN);return s=r(a)*t(a/2,.5),u=(1+a)/2,c;function c(l){return n(l)?NaN:i(a/(a+i(l,2)),u)/s}}return kh=o,kh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nh,O9;function SG(){if(O9)return Nh;O9=1;var e=on(),n=yG(),t=EG();return e(n,"factory",t),Nh=n,Nh}var AG=SG();const B2=Qn(AG);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mh,P9;function wG(){if(P9)return Mh;P9=1;var e=x2(),n=ae(),t=mu(),r=ge();function i(o,a){var u,s;return n(a)||n(o)||a<=0||o<0||o>1?NaN:(u=o>.5?1-o:o,s=e(a/2,.5,2*u,1-2*u),t(o-.5)*r(a*s[1]/s[0]))}return Mh=i,Mh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oh,q9;function $G(){if(q9)return Oh;q9=1;var e=Tn(),n=x2(),t=ae(),r=mu(),i=ge();function o(a){if(t(a)||a<=0)return e(NaN);return u;function u(s){var c,l;return t(s)||s<0||s>1?NaN:(c=s>.5?1-s:s,l=n(a/2,.5,2*c,1-2*c),r(s-.5)*i(a*l[1]/l[0]))}}return Oh=o,Oh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ph,D9;function IG(){if(D9)return Ph;D9=1;var e=on(),n=wG(),t=$G();return e(n,"factory",t),Ph=n,Ph}var TG=IG();const LG=Qn(TG),F9=1e-9,RG=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,rw=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function CG(e){const[n,t,r]=e;return n<r?n<=t&&t<=r?null:`requires lo <= peak <= hi, got lo=${n}, peak=${t}, hi=${r}`:`requires lo < hi, got lo=${n}, hi=${r}`}function kG(e){const[n,t]=e;return n<t?null:`requires lo < hi, got lo=${n}, hi=${t}`}function NG(e){const[n,t]=e;return n>0&&t>0?null:`requires a > 0 and b > 0, got a=${n}, b=${t}`}function x9(e){const n=e[1];return n>0?null:`requires sigma > 0, got sigma=${n}`}function MG(e){const[n,t]=e;return 0<n&&n<t?null:`requires 0 < lo < hi, got lo=${n}, hi=${t}`}function B9(e){const[,n,t]=e;return n<=0?`requires sigma > 0, got sigma=${n}`:t<=0?`requires df > 0, got df=${t}`:null}function H9(e,n){const t=n-e;return{cdf:r=>r<=e?0:r>=n?1:(r-e)/t,ppf:r=>e+r*t,pdf:r=>r>=e&&r<=n?1/t:0}}function OG(e,n,t){const r=t-e,i=(n-e)/r;return{cdf:o=>o<=e?0:o>=t?1:o<=n?(o-e)*(o-e)/(r*(n-e)):1-(t-o)*(t-o)/(r*(t-n)),ppf:o=>o<i?e+Math.sqrt(o*r*(n-e)):t-Math.sqrt((1-o)*r*(t-n)),pdf:o=>o<e||o>t?0:o===n?2/r:o<n?2*(o-e)/(r*(n-e)):2*(t-o)/(r*(t-n))}}function U9(e,n){return{cdf:t=>QA(t,e,n),ppf:t=>mG(t,e,n),pdf:t=>ew(t,e,n)}}function um(e,n,t){return{cdf:r=>tw((r-e)/n,t),ppf:r=>e+n*LG(r,t),pdf:r=>B2((r-e)/n,t)/n}}function PG(e,n){return{cdf:t=>am(t,e,n),ppf:t=>HU(t,e,n),pdf:t=>EH(t,e,n)}}const qG=1e-10,DG=20,FG=1e-300,G9=24,xG=60,BG=.001;function sm(e,n,t,r,i){return(n-e)/6*(t+4*r+i)}function cm(e,n,t,r,i,o,a,u){const s=(n+t)/2,c=(n+s)/2,l=(s+t)/2,f=e(c),p=e(l),h=sm(n,s,r,f,i),d=sm(s,t,i,p,o),m=h+d,v=qG*Math.max(Math.abs(m),FG);return u>=DG||Math.abs(m-a)<=15*v?m+(m-a)/15:cm(e,n,s,r,f,i,h,u+1)+cm(e,s,t,i,p,o,d,u+1)}function HG(e,n,t){if(!(t>n))return 0;const r=(n+t)/2,i=e(n),o=e(r),a=e(t);return cm(e,n,t,i,o,a,sm(n,t,i,o,a),0)}const UG=(()=>{const e=[0];for(let n=G9;n>=1;n--)e.push(.5*2**-n);for(let n=G9;n>=0;n--)e.push(1-.5*2**-n);return e})();function GG(e){return iw(e,UG)}function iw(e,n){let t=0;for(let r=0;r<n.length-1;r++)t+=HG(e,n[r],n[r+1]);return t}function jG(e,n,t,r){const i=[n];for(let o=r;o>=1;o--){const a=t*2**-o;a>n&&i.push(a)}return i.push(t),iw(e,i)}function VG(e,n,t){const r=$i(e,n),i=$i(e,t)-r;return i>0?i*GG(o=>Math.min(Math.max(e.ppf(r+o*i),n),t)):0}function j9(e,n,t,r){return r>t?e*(r**3-t**3)/3+n*(r**2-t**2)/2:0}function WG(e,n,t){const[r,i]=e,o=Math.max(r,n),a=Math.min(i,t);return a>o?(a*a-o*o)/(2*(i-r)):0}function XG(e,n,t){const[r,i,o]=e,a=o-r,u=i-r,s=o-i;let c=0;if(u>0){const l=2/(a*u);c+=j9(l,-r*l,Math.max(r,n),Math.min(i,t))}if(s>0){const l=2/(a*s);c+=j9(-l,o*l,Math.max(i,n),Math.min(o,t))}return c}function KG(e,n,t){const[r,i]=e,o=Math.min(Math.max(n,0),1),a=Math.min(Math.max(t,0),1);return a>o?r/(r+i)*(am(a,r+1,i)-am(o,r+1,i)):0}function V9(e){return Number.isFinite(e)?ew(e,0,1):0}function la(e){return e===-1/0?0:e===1/0?1:QA(e,0,1)}function YG(e,n,t){const[r,i]=e,o=(n-r)/i,a=(t-r)/i;return r*(la(a)-la(o))-i*(V9(a)-V9(o))}function JG(e,n,t){const[r,i]=e,o=a=>Number.isFinite(a)?(a-r)/i-i:a;return Math.exp(r+i*i/2)*(la(o(t))-la(o(n)))}function zG(e,n,t){const[r,i]=e,o=Math.log(r),a=Math.log(i),u=Math.max(o,n),s=Math.min(a,t);return s>u?(Math.exp(s)-Math.exp(u))/(a-o):0}function qh(e,n){return-(n+e*e)*B2(e,n)/(n-1)}function ZG(e,n,t){if(!Number.isFinite(e)||!Number.isFinite(n)){if(t<=1)return!Number.isFinite(e)&&!Number.isFinite(n)?NaN:Number.isFinite(e)?1/0:-1/0;const r=i=>Number.isFinite(i)?qh(i,t):0;return r(n)-r(e)}return Math.abs(t-1)<BG?VG(um(0,1,t),e,n):qh(n,t)-qh(e,t)}function QG(e,n,t){const[r,i,o]=e,a=(n-r)/i,u=(t-r)/i,s=c=>c===-1/0?0:c===1/0?1:tw(c,o);return r*(s(u)-s(a))+i*ZG(a,u,o)}function ej(e,n,t){const[r,i,o]=e;if(t===1/0)return 1/0;const a=B2(0,o)/i,u=c=>{const l=(c-r)/i;return a*(1+l*l/o)**(-(o+1)/2)},s=n===-1/0?0:Math.exp(n-t);return Math.exp(t)*jG(c=>c<=0?0:u(t+Math.log(c)),s,1,xG)}const Rt={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:CG,build:e=>({latent:OG(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:XG},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:kG,build:e=>({latent:H9(e[0],e[1]),logX:!1}),partialFirstMoment:WG},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:NG,build:e=>({latent:PG(e[0],e[1]),logX:!1}),partialFirstMoment:KG},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:x9,build:e=>({latent:U9(e[0],e[1]),logX:!1}),partialFirstMoment:YG},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:x9,build:e=>({latent:U9(e[0],e[1]),logX:!0}),partialFirstMoment:JG},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:MG,build:e=>({latent:H9(Math.log(e[0]),Math.log(e[1])),logX:!0}),partialFirstMoment:zG},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:B9,build:e=>({latent:um(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:QG},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:B9,build:e=>({latent:um(e[0],e[1],e[2]),logX:!0}),partialFirstMoment:ej}},nj=["normal","lognormal","t","logt"];function tj(e){const[n,t]=e;return n<t?null:`requires lo < hi in the truncation window, got lo=${n}, hi=${t}`}function rj(e,n){const t=n.signature.split("(",2)[1].slice(0,-1);return{signature:`${e}-trunc(${t}, lo, hi)`,note:`${n.note}; explicitly truncated to [lo, hi]`,nParams:n.nParams+2,check:r=>n.check(r.slice(0,n.nParams))??tj(r.slice(n.nParams)),build:r=>n.build(r),partialFirstMoment:n.partialFirstMoment,hasTruncWindow:!0}}for(const e of nj)Rt[`${e}-trunc`]=rj(e,Rt[e]);function ij(e){return rw.test(e)}function ow(e){const n=rw.exec(e);if(!n)throw new Error(`malformed family spec ${JSON.stringify(e)}: expected "family(num, num, ...)"`);const t=n[1],r=n[2],i=Rt[t];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(t)}; available: `+Object.values(Rt).map(s=>s.signature).join(", "));const o=r.split(",").map(s=>s.trim());for(const s of o)if(!RG.test(s))throw new Error(`family spec ${JSON.stringify(e.trim())}: bad numeric argument ${JSON.stringify(s)}`);const a=o.map(Number);if(a.length!==i.nParams)throw new Error(`${t} takes ${i.nParams} arguments as ${i.signature}, got ${a.length}`);const u=i.check(a);if(u)throw new Error(`${e.trim()}: ${i.signature} ${u}`);return i.hasTruncWindow?{family:t,params:a.slice(0,-2),text:e.trim(),truncWindow:[a[a.length-2],a[a.length-1]]}:{family:t,params:a,text:e.trim(),truncWindow:null}}function $i(e,n){return n===-1/0?0:n===1/0?1:e.cdf(n)}class H2{constructor(n,t,r,i,o,a,u,s,c){this.spec=n,this.latent=t,this.logX=r,this.cdfLo=i,this.mass=o,this.xLo=a,this.xHi=u,this.yLo=s,this.yHi=c}inverseCdf(n){const t=this.latent.ppf(this.cdfLo+n*this.mass),r=this.logX?Math.exp(t):t;return Math.min(Math.max(r,this.xLo),this.xHi)}cdf(n){if(n<=this.xLo)return 0;if(n>=this.xHi)return 1;if(this.logX&&n<=0)return 0;const t=this.logX?Math.log(n):n;return($i(this.latent,t)-this.cdfLo)/this.mass}mean(){const n=Rt[this.spec.family];if(n===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);const r=n.partialFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isFinite(r)?r:null}pdf(n){return n<this.xLo||n>this.xHi?0:this.logX?n<=0?0:this.latent.pdf(Math.log(n))/n/this.mass:this.latent.pdf(n)/this.mass}}function U2(e,n,t){const r=Rt[e.family];if(r===void 0)throw new Error(`unknown distribution family ${JSON.stringify(e.family)}`);const{latent:i,logX:o}=r.build(e.params);let a=n===null?-1/0:n,u=t===null?1/0:t;e.truncWindow!==null&&(a=Math.max(a,e.truncWindow[0]),u=Math.min(u,e.truncWindow[1]));let s,c;o?(s=a>0?Math.log(a):-1/0,c=u>0?Math.log(u):-1/0):(s=a,c=u);const l=$i(i,s),p=$i(i,c)-l;if(p<F9){let h=`the variable's range [${n}, ${t}]`;throw e.truncWindow!==null&&(h+=` ∩ the spec's truncation window [${e.truncWindow[0]}, ${e.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(e.text)}: essentially no probability mass in ${h} (mass ${p.toExponential(2)} < ${F9})`)}return new H2(e,i,o,l,p,a,u,s,c)}const fa=8,aw=1e-9;function da(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function lm(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function oj(e,n,t){const r=`lloads.latents[${n}]`;if(!lm(e))return`${r}: expected an object, got ${da(e)}`;for(const o of["name","description"]){const a=e[o];if(typeof a!="string"||a.trim()==="")return`${r}.${o}: expected a non-empty string, got ${JSON.stringify(a)}`}const i=e.loadings;if(!lm(i))return`${r}.loadings: expected an object, got ${da(i)}`;if(Object.keys(i).length===0)return`${r}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[o,a]of Object.entries(i)){if(!t.has(o))return`${r}.loadings: '${o}' is not one of the subjective variables this jprob samples (${[...t].sort().join(", ")}), so a loading on it would have no effect`;if(typeof a!="number")return`${r}.loadings['${o}']: expected a number, got ${JSON.stringify(a)}`;if(!Number.isFinite(a))return`${r}.loadings['${o}']: ${a} is not finite`;if(a<-1||a>1)return`${r}.loadings['${o}']: ${a} not in [-1, 1]`}return null}function oo(e,n,t=[]){if(e==null)return null;if(!lm(e))return`lloads: expected an object, got ${da(e)}`;const r=Object.keys(e).filter(c=>c!=="latents").sort();if(r.length>0)return`lloads: unexpected key(s) ${JSON.stringify(r)}`;const i=e.latents;if(!Array.isArray(i))return`lloads.latents: expected a list, got ${da(i)}`;if(i.length>fa)return`lloads.latents: ${i.length} latents exceeds the cap of ${fa}`;const o=new Set(n);for(const[c,l]of i.entries()){const f=oj(l,c,o);if(f!==null)return f}const a=new Map;for(const c of i)for(const[l,f]of Object.entries(c.loadings))a.set(l,(a.get(l)??0)+f**2);for(const[c,l]of[...a.entries()].sort((f,p)=>f[0]<p[0]?-1:1))if(l>1+aw)return`lloads: loading budget exceeded for '${c}' — the sum of squared loadings across latents is ${W9(l)}, over the limit of 1 by ${W9(l-1)}; no residual variance is left for it`;const u=new Set(t),s=[...a.entries()].filter(([c,l])=>l>0&&u.has(c)).map(([c])=>c).sort();return s.length>0?`lloads: ${s.map(c=>`'${c}'`).join(", ")} ${s.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function W9(e){return String(Number(e.toPrecision(6)))}function _u(e){return e==null?!1:e.latents.some(n=>Object.values(n.loadings).some(t=>t!==0))}function aj(e,n,t=1){if(!(t>=0&&t<=1))throw new Error(`lloads dependence strength ${t} not in [0, 1]`);const r=oo(e,n);if(r!==null)throw new Error(r);const i=(e==null?void 0:e.latents)??[],o=Math.sqrt(t),a=new Map(n.map((c,l)=>[c,l])),u=n.map(()=>i.map(()=>0));for(const[c,l]of i.entries())for(const[f,p]of Object.entries(l.loadings))u[a.get(f)][c]=p*o;const s=u.map(c=>Math.sqrt(Math.max(0,1-c.reduce((l,f)=>l+f*f,0))));return{loadingMatrix:u,residualSds:s}}const pa="pointmass",uj="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",sj=new RegExp(`^\\s*${pa}\\s*\\(\\s*(${uj})\\s*\\)\\s*$`),cj=new RegExp(`^\\s*${pa}\\b`);function uw(e){const n=sj.exec(e);if(n===null)throw new Error(`malformed ${pa} spec ${JSON.stringify(e)}: expected "${pa}(num)"`);return Number(n[1])}function G2(e){return cj.test(e)?uw(e):null}function sw(e){const n=uw(e);return[[n,1],[n,1]]}function cw(e,n,t){if(n===0)throw new Error(`${t}: need at least one component to mix`);if(e.length!==n)throw new Error(`${t}: expected one weight per component (${n}); got ${e.length}`);let r=0;for(const i of e){if(!(i>0))throw new Error(`${t}: every mixture weight must be positive`);r+=i}return e.map(i=>i/r)}function gu(e,n){const t=cw(n,e.length,"weightedMean");let r=0;return e.forEach((i,o)=>{r+=t[o]*i}),r}function lj(e,n){let t=1/0,r=-1/0;for(const i of e){const{lo:o,hi:a}=n(i);t=Math.min(t,o),r=Math.max(r,a)}return{lo:t,hi:r}}function fm(e){const n=.254829592,t=-.284496736,r=1.421413741,i=-1.453152027,o=1.061405429,a=.3275911,u=e<0?-1:1,s=Math.abs(e)/Math.SQRT2,c=1/(1+a*s),l=1-((((o*c+i)*c+r)*c+t)*c+n)*c*Math.exp(-s*s);return .5*(1+u*l)}function ha(){const e=Math.random(),n=Math.random(),t=Math.sqrt(-2*Math.log(e)),r=2*Math.PI*n;return[t*Math.cos(r),t*Math.sin(r)]}const ao=1e-15;function fj(e,n){const t=e.length;if(t<2)throw new Error(`buildFromXsHs: need at least 2 breakpoints, got ${t}`);let r=0;for(let a=0;a<t-1;a++)r+=(e[a+1]-e[a])*(n[a]+n[a+1])/2;if(r<=0)throw new Error("buildPieceLinear: distribution has zero or negative area");const i=new Float64Array(t);for(let a=0;a<t;a++)i[a]=n[a]/r;const o=new Float64Array(t);o[0]=0;for(let a=0;a<t-1;a++)o[a+1]=o[a]+(e[a+1]-e[a])*(i[a]+i[a+1])/2;return o[t-1]=1,{xs:new Float64Array(e),fs:i,Fs:o}}function lw(e){const{pairs:n}=e,t=n[0][0];if(n[n.length-1][0]-t<ao)return{xs:new Float64Array([t,t]),fs:new Float64Array([1,1]),Fs:new Float64Array([0,1])};const i=n.map(a=>a[0]),o=n.map(a=>a[1]);return fj(i,o)}function Ii(e,n){if(e.kind==="family"){if(n===void 0)throw new Error(`family spec ${JSON.stringify(e.spec.text)} needs the svar's declared range for implicit truncation, but no paramRange was provided (thread paramRanges through the caller)`);return U2(e.spec,n.lo,n.hi)}return lw(e)}function mr(e,n){return n instanceof H2?n.inverseCdf(e):pj(e,n)}const dj=1e-12;function pj(e,n){const{xs:t,fs:r,Fs:i}=n,o=t.length-1;if(o<=0||e<=0)return t[0];if(e>=1)return t[o];let a=0,u=o;for(;a<u-1;){const h=a+u>>1;i[h]<=e?a=h:u=h}const s=a,c=t[s+1]-t[s];if(c<ao)return t[s];const l=e-i[s],f=(r[s+1]-r[s])/c;let p;if(Math.abs(f)<dj)p=l/r[s];else{const h=r[s]*r[s]+2*f*l;p=(-r[s]+Math.sqrt(Math.max(0,h)))/f}return t[s]+p}function dm(e,n,t,r,i){var c;const{nParams:o,perTrialLoadings:a,trialPicker:u}=fw(e,n,t,r),s=Array.from({length:o},()=>new Float64Array(i));for(let l=0;l<i;l++){const f=u(),p=e[f],{loadingMatrix:h,residualSds:d}=a[f],m=((c=h[0])==null?void 0:c.length)??0;if(m===0)for(let v=0;v<o;v++)s[v][l]=mr(Math.random(),p[v]);else{const v=[];for(let _=0;_<m;_++)v.push(ha()[0]);for(let _=0;_<o;_++){const g=ha()[0],b=h[_];let y=d[_]*g;for(let E=0;E<m;E++)y+=b[E]*v[E];s[_][l]=mr(fm(y),p[_])}}}return s}function fw(e,n,t,r){const i=e.length;if(i===0)throw new Error("sampleCopulaMatrix: need at least one trial");const o=r.length;if(e.some(u=>u.length!==o))throw new Error(`sampleCopulaMatrix: trials disagree with params on parameter count (${o} params)`);if(n.length!==i)throw new Error(`sampleCopulaMatrix: ${n.length} per-trial lloads specs for ${i} trials`);const a=n.map(u=>aj(u,r));return{trialCount:i,nParams:o,perTrialLoadings:a,trialPicker:hj(t,i)}}function hj(e,n){if(e.length!==n)throw new Error(`sampleCopulaMatrix: ${e.length} per-trial weights for ${n} trials`);const t=new Float64Array(n);let r=0;for(const[i,o]of e.entries()){if(!(o>0))throw new Error("sampleCopulaMatrix: every per-trial weight must be positive");r+=o,t[i]=r}return()=>{const i=Math.random()*r;for(let o=0;o<n;o++)if(i<t[o])return o;return n-1}}function mj(e,n,t,r,i){var f;const{nParams:o,perTrialLoadings:a,trialPicker:u}=fw(e,n,t,r),s=Array.from({length:o},()=>new Float64Array(i)),l=a.some(({loadingMatrix:p})=>{var h;return(((h=p[0])==null?void 0:h.length)??0)>0})?Array.from({length:o},()=>new Float64Array(i)):s;for(let p=0;p<i;p++){const h=u(),d=e[h],{loadingMatrix:m,residualSds:v}=a[h],_=((f=m[0])==null?void 0:f.length)??0;if(_===0)for(let g=0;g<o;g++){const b=mr(Math.random(),d[g]);s[g][p]=b,l[g][p]=b}else{const g=[];for(let b=0;b<_;b++)g.push(ha()[0]);for(let b=0;b<o;b++){const y=ha()[0];s[b][p]=mr(fm(y),d[b]);const E=m[b];let w=v[b]*y;for(let I=0;I<_;I++)w+=E[I]*g[I];l[b][p]=mr(fm(w),d[b])}}}return{independent:s,joint:l}}function uo(e,n){if(e.length===0)throw new Error("combineSampleColumns: need at least one sampled column");const t=e[0].length,r=new Float64Array(t),i=new Array(e.length);for(let o=0;o<t;o++){for(let a=0;a<e.length;a++)i[a]=e[a][o];r[o]=n(i)}return r}function vj(e){if(typeof e=="string")return G2(e)!==null?{kind:"pairs",pairs:sw(e)}:{kind:"family",spec:ow(e)};if(!e||e.length===0)throw new Error("sampleValueToSpec: no sample value present (gate on sampleValueHasData to tolerate absence)");return{kind:"pairs",pairs:e}}function dw(e,n){const t=e.trim(),r=Number(t);if(isNaN(r)||!yr(n,r))throw new Error(`"${t}" is not a valid value in ${Yo(n)}`);return r}function pw(e,n){const t=e.trim(),r=t.split(/\s+/);if(r.length!==2)throw new Error(`expected "lo hi", got "${t}"`);const i=Number(r[0]),o=Number(r[1]);if(isNaN(i)||isNaN(o)||!yr(n,i)||!yr(n,o)||i>o)throw new Error(`invalid bounds "${t}" (need lo ≤ hi within ${Yo(n)})`);return[i,o]}const _j=/\(\s*([\d.eE+-]+)\s+([\d.eE+-]+)\s*\)/g;function bu(e,n){const t=e.trim(),r=G2(t);if(r!==null){if(!yr(n,r))throw new Error(`pointmass value ${r} not in ${Yo(n)}`);return{kind:"pairs",pairs:sw(t)}}if(ij(t)){const u=ow(t);return U2(u,n.lo,n.hi),{kind:"family",spec:u}}if(!t.includes("("))throw new Error(`expected a family spec "name(num, ...)" or PWL pairs "(x y) ..." (pointmass(num) is also accepted), got "${t}"`);const i=[...t.matchAll(_j)];if(i.length<2)throw new Error(`need at least 2 (x y) pairs, got ${i.length}`);const o=i.map(u=>[Number(u[1]),Number(u[2])]);let a=-1/0;for(let u=0;u<o.length;u++){const[s,c]=o[u];if(isNaN(s)||!yr(n,s))throw new Error(`pair ${u+1} x=${s} not in ${Yo(n)}`);if(isNaN(c)||c<0||c>1)throw new Error(`pair ${u+1} y=${c} not in [0, 1]`);if(s<a)throw new Error(`pair ${u+1} x=${s} not sorted (prev was ${a})`);a=s}return{kind:"pairs",pairs:o}}function hw(e){return typeof e=="string"?e.length>0:((e==null?void 0:e.length)??0)>0}function yu(e){const n=new Float64Array(e);n.sort();const t=n.length;let r=0;for(let i=0;i<t;i++)r+=n[i];return{mean:r/t,median:n[Math.floor(t*.5)],p5:n[Math.floor(t*.05)],p95:n[Math.floor(t*.95)],samples:n,count:t}}const gj=.5,bj=.05,yj=.95,Ej=1e-12,Sj=200;function so(e){return!(e instanceof H2)}function j2(e){const{xs:n}=e,t=n[0];return n[n.length-1]-t<ao?t:null}function mw(e,n){let t=0,r=e.length-1;for(;t<r-1;){const i=t+r>>1;e[i]<=n?t=i:r=i}return t}function Aj(e,n){const{xs:t,fs:r,Fs:i}=e,o=t.length-1;if(n<t[0])return 0;if(n>=t[o])return 1;const a=mw(t,n),u=t[a+1]-t[a];if(u<ao)return i[a];const s=n-t[a],c=(r[a+1]-r[a])/u;return i[a]+r[a]*s+c*s*s/2}function wj(e,n){if(j2(e)!==null)return 0;const{xs:t,fs:r}=e,i=t.length-1;if(n<t[0]||n>t[i])return 0;if(n===t[i])return r[i];const o=mw(t,n),a=t[o+1]-t[o];return a<ao?r[o]:r[o]+(r[o+1]-r[o])*(n-t[o])/a}function $j(e){const n=j2(e);if(n!==null)return n;const{xs:t,fs:r}=e;let i=0;for(let o=0;o<t.length-1;o++){const a=t[o+1]-t[o];if(a<=0)continue;const u=(r[o+1]-r[o])/a;i+=t[o]*r[o]*a+(t[o]*u+r[o])*a*a/2+u*a**3/3}return i}function Ij(e,n){return so(e)?Aj(e,n):e.cdf(n)}function Tj(e,n){return so(e)?wj(e,n):e.pdf(n)}function X9(e,n){return mr(n,e)}function vw(e){return so(e)?$j(e):e.mean()}function Lj(e){return so(e)?j2(e):null}function Rj(e){return so(e)?Array.from(e.xs):[]}function Wr(e,n,t){return cw(n,e.length,t)}function Cj(e,n,t){const r=Wr(e,n,"mixtureCdf");let i=0;return e.forEach((o,a)=>{i+=r[a]*Ij(o,t)}),i}function kj(e,n,t){const r=Wr(e,n,"mixturePdf");let i=0;return e.forEach((o,a)=>{i+=r[a]*Tj(o,t)}),i}function _w(e,n){const t=Wr(e,n,"mixtureMean");let r=0;for(const[i,o]of e.entries()){const a=vw(o);if(a===null)return null;r+=t[i]*a}return r}function fi(e,n,t){if(Wr(e,n,"mixtureQuantile"),!(t>0&&t<1))throw new Error(`mixtureQuantile: quantile level ${t} is not in (0, 1)`);if(e.length===1)return X9(e[0],t);const r=e.map(a=>X9(a,t));let i=Math.min(...r),o=Math.max(...r);for(let a=0;a<Sj&&!(o-i<=Ej*Math.max(Math.abs(i),Math.abs(o)));a++){const u=i+(o-i)/2;Cj(e,n,u)>=t?o=u:i=u}return o}function gw(e,n){const t=Wr(e,n,"mixtureAtoms"),r=new Map;return e.forEach((i,o)=>{const a=Lj(i);if(a===null)return;const u=r.get(a)??{count:0,mass:0};r.set(a,{count:u.count+1,mass:u.mass+t[o]})}),[...r.entries()].sort(([i],[o])=>i-o).map(([i,{count:o,mass:a}])=>({x:i,count:o,mass:a}))}function bw(e,n){return Wr(e,n,"mixtureStats"),{mean:_w(e,n),median:fi(e,n,gj),p5:fi(e,n,bj),p95:fi(e,n,yj)}}const Nj=32,Mj=4e6,Un=new Map;let Uo=0;function Dt(e){return JSON.stringify(e,(n,t)=>{if(typeof t=="function"||typeof t=="symbol")throw new Error(`mc_memo key parts must be JSON-serializable data; got a ${typeof t}. Identify a combine function by a string tag / form id instead.`);return t})}function Eu(e,n){const t=Dt(e),r=Un.get(t);if(r!==void 0)return Un.delete(t),Un.set(t,r),r;const i=n();for(Un.set(t,i),Uo+=i.samples.length;(Un.size>Nj||Uo>Mj)&&Un.size>1;){const o=Un.keys().next().value;Uo-=Un.get(o).samples.length,Un.delete(o)}return i}function Oj(){Un.clear(),Uo=0}const Pj=256,ot=new Map,Ti=new Map;let yw=1;function Ew(e){const n=Dt(e),t=ot.get(n);if(t!==void 0)return ot.delete(n),ot.set(n,t),t;const r={token:`mcpool-${yw++}`,extraBlocks:0};for(ot.set(n,r),Ti.set(r.token,r);ot.size>Pj;){const i=ot.keys().next().value;Ti.delete(ot.get(i).token),ot.delete(i)}return r}const qj=64,ma=new Map,at=new Map;function Sw(e){const n=Dt([...e].sort()),t=at.get(n);if(t!==void 0)return at.delete(n),at.set(n,t),t;const r=`mcpoolgroup-${yw++}`;for(at.set(n,r),ma.set(r,[...e]);at.size>qj;){const i=at.keys().next().value;ma.delete(at.get(i)),at.delete(i)}return r}function Dj(e){const n=ma.get(e);if(n!==void 0){let r=!1;for(const i of n){const o=Ti.get(i);o!==void 0&&(o.extraBlocks+=1,r=!0)}return r}const t=Ti.get(e);return t===void 0?!1:(t.extraBlocks+=1,!0)}function Fj(){ot.clear(),Ti.clear(),ma.clear(),at.clear()}const xj=2048,st=new Map;function K9(e){const n=Dt(e),t=st.get(n);if(t!==void 0)return st.delete(n),st.set(n,t),t}function Y9(e){const n=Dt(e);if(st.has(n))throw new Error(`streaming mean entry already exists for key ${n}`);const t={n:0,mean:0,m2:0,blocksFolded:0};for(st.set(n,t);st.size>xj;){const r=st.keys().next().value;st.delete(r)}return t}function Dh(e,n,t){let{n:r,mean:i,m2:o}=e;for(let a=0;a<n.length;a++){const u=n[a];if(!Number.isFinite(u))throw new Error(`streaming mean fold: non-finite sample value ${u} at block index ${a}`);r+=1;const s=u-i;i+=s/r,o+=s*(u-i)}e.n=r,e.mean=i,e.m2=o,e.blocksFolded=t}function J9(e){return Math.sqrt(e.m2/(e.n-1)/e.n)}function Bj(){st.clear()}const co="Bounds are not available for this formula: no interval for it follows from bounds responses. Its point and distribution results are unaffected.",Su="copula-matrix";function V2(e,n,t,r){const i=Di(n,t);if(i.bounds&&!i.boundsTightness)throw new Error(`form ${e} has a bounds implementation but no boundsTightness — regenerate form_fns`);return{key:AE(e,n,t),params:i.params,typeHighlevel:i.typeHighlevel,point:i.point,bounds:i.bounds??null,boundsTightness:i.bounds?i.boundsTightness:null,sampleStage:i.sampleStage,barrierRegistry:r&&MR(r,t)}}function Kn(e,n,t,r){if(n.length!==e.length)throw new Error(`resolveTrialRecordInputs: expected one weight per trial (${e.length}); got ${n.length}`);return t==="point"?{mode:t,trialWeights:n,trials:e.map(i=>i.point)}:t==="bounds"?{mode:t,trialWeights:n,trials:e.map(i=>i.bounds)}:{mode:t,ranges:r,trialWeights:n,trials:e.map(i=>{const o={};for(const[a,u]of Object.entries(i.sample))hw(u)&&(o[a]=vj(u));return{specs:o,lloads:i.lloads??null}})}}class Li extends Error{constructor(n,t){super(`no trial has ${n} data for ${JSON.stringify(t)}`),this.missingParams=t,this.name="NoUsableTrialsError"}}function Yn(e,n,t){switch(n.mode){case"point":{const r=Tr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),i=r.trials.map(a=>e.params.map(u=>a[u])),o=i.map(a=>e.point(a));return{kind:"point",value:gu(o,r.weights),perTrial:o,perTrialInputs:i}}case"bounds":{const r=Tr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),i=r.trials.map(s=>e.params.map(c=>s[c])),o=e.bounds;if(!o)throw new Error(co);const{lo:a,hi:u}=lj(i,o);return{kind:"bounds",lo:a,hi:u,tightness:e.boundsTightness??"loose",trialCount:r.trials.length}}case"sample":return Hj(e,n,t)}}function Tr(e,n,t,r,i){const o=u=>e==="sample"?u.specs:u;if(n.length===0)throw i==="skip"?new Li(e,r):new Error(`record has no trials with ${e} data`);if(i==="error"){for(const[u,s]of n.entries()){const c=r.filter(l=>o(s)[l]===void 0);if(c.length>0)throw new Error(`Missing required ${e} input(s) for trial ${u+1}: ${JSON.stringify(c)}`)}return{trials:n,weights:t}}const a=n.map((u,s)=>r.every(c=>o(u)[c]!==void 0)?s:-1).filter(u=>u>=0);if(a.length===0){const u=r.filter(s=>o(n[0])[s]===void 0);throw new Li(e,u)}return{trials:a.map(u=>n[u]),weights:a.map(u=>t[u])}}function Hj(e,n,t){if(t.precomputed)return pm(t.precomputed.stats);const r=t.mcIters;if(r===void 0)throw new Error("live sample evaluation requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=Tr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial);if(e.sampleStage!==void 0)return Gj(e,e.sampleStage,n,i,r,t.mcItersPerClick);const{matrixContentParts:o,sampleFreshBlock:a}=Au(n,i),u=va(Su,o,r,t.mcItersPerClick,a),s=Eu([...u.matrixKeyParts,"form",e.key],()=>yu(uo(e.params.map(c=>u.matrices.joint.get(c)),e.point)));return{kind:"mc",mean:s.mean,median:s.median,p5:s.p5,p95:s.p95,samples:s.samples,densityCurve:null,provenance:"live",mcIters:u.totalIters,barrierInnerIters:null,mcPoolToken:u.poolToken,trialCount:i.trials.length}}function pm(e){return{kind:"mc",mean:e.mean,median:e.median,p5:e.p5,p95:e.p95,samples:null,densityCurve:e.density_curve??null,provenance:"precomputed",mcIters:e.mc_iters,barrierInnerIters:null,mcPoolToken:null,trialCount:0}}function Aw(e){return{independent:pm(e.independent),joint:pm(e.joint)}}function W2(e,n,t){if(n.mode!=="sample")throw new Error(`joint-dependence comparison requires sample inputs, got ${n.mode}`);if(t.precomputed)return Aw(t.precomputed);const r=t.mcIters;if(r===void 0)throw new Error("live joint-dependence comparison requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=Tr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial);if(e.sampleStage!==void 0)throw new Error(`joint dependence is not supported for form ${e.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const{matrixContentParts:o,sampleFreshBlock:a}=Au(n,i),u=va(Su,o,r,t.mcItersPerClick,a),s=(p,h)=>Eu([...u.matrixKeyParts,...h,"form",e.key],()=>yu(uo(e.params.map(d=>p.get(d)),e.point))),c=s(u.matrices.joint,[]),l=s(u.matrices.independent,["independent"]),f=p=>({kind:"mc",mean:p.mean,median:p.median,p5:p.p5,p95:p.p95,samples:p.samples,densityCurve:null,provenance:"live",mcIters:u.totalIters,barrierInnerIters:null,mcPoolToken:u.poolToken,trialCount:i.trials.length});return{independent:f(l),joint:f(c)}}function ww(e,n,t){if(n.mode!=="sample")throw new Error(`live sample MC key requires sample inputs, got ${n.mode}`);if(e.sampleStage!==void 0)throw new Error(`live sample MC key is not defined for E[·] barrier form ${e.key}`);const r=Tr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),{matrixContentParts:i}=Au(n,r);return $w(Su,i,t.mcIters,t.mcItersPerClick)}function Au(e,n){const{trials:t,weights:r}=n,i=Object.keys(t[0].specs).filter(l=>t.every(f=>f.specs[l]!==void 0)).sort(),o=[i,t.map(l=>i.map(f=>l.specs[f])),i.map(l=>e.ranges[l]??null),t.map(l=>l.lloads),"weights",r],a=()=>t.map(l=>i.map(f=>Ii(l.specs[f],e.ranges[f]))),u=l=>new Map(i.map((f,p)=>[f,l[p]]));return{matrixContentParts:o,sampleFreshBlock:l=>{const f=mj(a(),t.map(d=>d.lloads),r,i,l),p=u(f.independent),h=f.joint===f.independent?p:u(f.joint);return{independent:p,joint:h}},sampleFreshJointBlock:l=>u(dm(a(),t.map(f=>f.lloads),r,i,l))}}function Uj(e,n,t){if(n.mode!=="sample")throw new Error(`streaming mean evaluation requires sample inputs, got ${n.mode}`);if(e.sampleStage!==void 0)throw new Error(`streaming mean evaluation of ${e.key} is not supported for formulas with E[·] aggregation barriers`);const r=t.mcIters;if(r===void 0)throw new Error("streaming mean evaluation requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=Tr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),{matrixContentParts:o,sampleFreshJointBlock:a}=Au(n,i),u=h=>uo(e.params.map(d=>a(h).get(d)),e.point),s=t.mcItersPerClick;if(s===void 0){const h=["stream-mean",...o,r,"form",e.key];let d=K9(h);return d===void 0&&(d=Y9(h),Dh(d,u(r),0)),{mean:d.mean,n:d.n,standardError:J9(d),mcPoolToken:null}}const c=["stream-mean-pool",...o,r,s],l=Ew(c),f=[...c,"form",e.key];let p=K9(f);return p===void 0?(p=Y9(f),Dh(p,u(r+l.extraBlocks*s),l.extraBlocks)):l.extraBlocks>p.blocksFolded?Dh(p,u((l.extraBlocks-p.blocksFolded)*s),l.extraBlocks):l.extraBlocks<p.blocksFolded&&(p.blocksFolded=l.extraBlocks),{mean:p.mean,n:p.n,standardError:J9(p),mcPoolToken:l.token}}function $w(e,n,t,r){return[`${e}-pool`,...n,t,r]}function va(e,n,t,r,i){if(r===void 0){const u=[e,...n,t];return{matrixKeyParts:u,poolToken:null,extraBlocks:0,totalIters:t,matrices:Xj(u,()=>i(t))}}const o=$w(e,n,t,r),a=Ew(o);return{matrixKeyParts:[...o,"blocks",a.extraBlocks],poolToken:a.token,extraBlocks:a.extraBlocks,totalIters:t+a.extraBlocks*r,matrices:Yj(o,a.extraBlocks,t,r,i)}}function Gj(e,n,t,r,i,o){if(r.trials.some(E=>{var w;return(((w=E.lloads)==null?void 0:w.latents.length)??0)>0}))throw new Error(`joint dependence is not supported for form ${e.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const a=e.barrierRegistry;if(a===void 0)throw new Error(`form ${e.key} contains an E[·] barrier but no barrier registry was provided — evaluating it without one would silently compute per-draw (pre-E) semantics`);const u=n.params.filter(E=>E.barrier);for(const E of u)if(a[E.name]===void 0)throw new Error(`form ${e.key}: barrier ${E.name} is not in the barrier registry`);const s=[...new Set(Object.values(a).flatMap(E=>E.params))].sort(),c=[],l=[],f=[],p=[];for(const E of r.trials){const w=s.filter(L=>E.specs[L]!==void 0),I=[w,w.map(L=>E.specs[L]),w.map(L=>t.ranges[L]??null)],C=va("barrier-inner-matrix",I,i,o,L=>{const $=w.map(S=>Ii(E.specs[S],t.ranges[S])),A=dm([$],[null],[1],w,L);return z9(new Map(w.map((S,T)=>[S,A[T]])))});C.poolToken!==null&&c.push(C.poolToken),l.push(C.extraBlocks),f.push(C.totalIters),p.push(u.map(L=>jj(C.matrixKeyParts,C.matrices.joint,L.name,a[L.name])))}const h=Object.keys(r.trials[0].specs).filter(E=>r.trials.every(w=>w.specs[E]!==void 0)).sort(),d=u.map(E=>E.name),m=[h,r.trials.map(E=>h.map(w=>E.specs[w])),h.map(E=>t.ranges[E]??null),"weights",r.weights,"barriers",d,i,o??null,l,p],_=va(Su,m,i,o,E=>{const w=[...h,...d],I=r.trials.map(($,A)=>[...h.map(S=>Ii($.specs[S],t.ranges[S])),...p[A].map(S=>lw({pairs:[[S,1],[S,1]]}))]),C=dm(I,r.trials.map(()=>null),r.weights,w,E),L=new Map(w.map(($,A)=>[$,C[A]]));if(L.size!==w.length)throw new Error(`barrier key collides with a svar column name (${JSON.stringify(w)})`);return z9(L)}),g=n.params.map(E=>{const w=_.matrices.joint.get(E.name);if(w===void 0)throw new Error(`form ${e.key}: no sampled column for sample-stage param ${E.name}`);return w}),b=Eu([..._.matrixKeyParts,"form",e.key],()=>yu(uo(g,n.point))),y=_.poolToken===null?null:Sw([_.poolToken,...c]);return{kind:"mc",mean:b.mean,median:b.median,p5:b.p5,p95:b.p95,samples:b.samples,densityCurve:null,provenance:"live",mcIters:_.totalIters,barrierInnerIters:Math.min(...f),mcPoolToken:y,trialCount:r.trials.length}}function jj(e,n,t,r){const i=r.cparamBindingKey===void 0?[...e,"barrier",t]:[...e,"barrier",t,r.cparamBindingKey];return Eu(i,()=>{const a=r.params.map(p=>{const h=n.get(p);if(h===void 0)throw new Error(`barrier ${t}: trial has no inner sample column for leaf ${p}`);return h}),u=uo(a,r.point);for(const p of u)if(!Number.isFinite(p))throw new Error(`barrier ${t}: non-finite operand draw (${p})`);const s=yu(u);if(!Number.isFinite(s.mean))throw new Error(`barrier ${t}: non-finite mean (${s.mean})`);const c=u.length;let l=0;for(const p of u)l+=(p-s.mean)**2;const f=Math.sqrt(l/c/c)/Math.abs(s.mean);return console.debug(`[E-barrier] ${t}: n=${c} mean=${s.mean} relSE=${f}`),s}).mean}const Vj=8,Wj=6e6,Gn=new Map;let Go=0;function z9(e){return{independent:e,joint:e}}function Z9(e){let n=0;const t=new Set;for(const r of[e.independent,e.joint])for(const i of r.values())t.has(i)||(t.add(i),n+=i.length);return n}function hm(e){const n=Gn.get(e);return n!==void 0&&(Gn.delete(e),Gn.set(e,n)),n}function mm(e,n){for(Gn.set(e,n),Go+=Z9(n);(Gn.size>Vj||Go>Wj)&&Gn.size>1;){const t=Gn.keys().next().value;Go-=Z9(Gn.get(t)),Gn.delete(t)}return n}function Xj(e,n){const t=Dt(e);return hm(t)??mm(t,n())}function Q9(e,n){const t=new Map;for(const[r,i]of e){const o=n.get(r);if(o===void 0)throw new Error(`concatSampleMatrices: fresh block lacks column for svar ${r}`);const a=new Float64Array(i.length+o.length);a.set(i,0),a.set(o,i.length),t.set(r,a)}return t}function Kj(e,n){const t=Q9(e.independent,n.independent),r=e.independent===e.joint&&n.independent===n.joint?t:Q9(e.joint,n.joint);return{independent:t,joint:r}}function Yj(e,n,t,r,i){const o=c=>Dt([...e,"blocks",c]),a=hm(o(n));if(a!==void 0)return a;let u=n-1,s;for(;u>=0&&(s=hm(o(u)))===void 0;)u--;s===void 0&&(s=mm(o(0),i(t)),u=0);for(let c=u+1;c<=n;c++)s=mm(o(c),Kj(s,i(r)));return s}function Jj(){Gn.clear(),Go=0}function Iw(e,n){const t=e.map(r=>`<span style="--density-legend-color: ${Z(r.color)}; --density-legend-style: ${r.dashed?"dashed":"solid"}">${U(r.label)}</span>`).join("");return`<div class="density-overlay-legend" aria-label="${Z(n)}">${t}</div>`}function X2(e,n){return'<div class="density-overlay-plot">'+Iw(n,"Density curve legend")+`<canvas id="${Z(e)}" width="400" height="200"></canvas></div>`}const zj=5,Zj=5,Qj=[0,.25,.5,.75,1];function Xr(e){return e==="probability"?[0,1]:null}function wu(e,n){const t=zj/100*(n-e);return[e-t,n+t]}function K2(e,n,t){return e??wu(n,t)}function eV(e){return Math.max(0,-Math.floor(Math.log10(e)))}function nV(e){const n=10**Math.floor(Math.log10(e)),t=e/n;return(t<=1?1:t<=2?2:t<=5?5:10)*n}function _a(e,n){if(e===0&&n===1)return Qj.map(a=>({value:a,label:a.toFixed(2)}));if(n<=e)return[{value:e,label:e.toFixed(2)}];const t=nV((n-e)/Zj),r=eV(t),i=[],o=t*1e-9;for(let a=Math.ceil(e/t)*t;a<=n+o;a+=t){const u=Math.abs(a)<o?0:a;i.push({value:u,label:u.toFixed(r)})}return i}const e7={ui:"sans-serif",mono:"monospace"},tV={ui:"--font-ui",mono:"--font-mono"},n7=new Map;function Tw(e){const n=n7.get(e);if(n!==void 0)return n;if(typeof getComputedStyle>"u"||typeof document>"u")return e7[e];const t=getComputedStyle(document.documentElement).getPropertyValue(tV[e]).trim();return t?(n7.set(e,t),t):e7[e]}function Y2(e){return`${e}px ${Tw("ui")}`}function jt(e){return`${e}px ${Tw("mono")}`}const t7=4,rV=.25,iV=2.5066282746310002;function Lw(e,n,t,r){const i=e.length;let o=0,a=0;for(let h=0;h<i;h++)o+=e[h],a+=e[h]*e[h];const u=o/i,s=Math.max(0,a/i-u*u),c=Math.sqrt(s),l=rV*c*i**-.2;if(l<=0)return null;const f=new Float64Array(n);let p=0;for(let h=0;h<n;h++){const d=t+(r-t)*h/(n-1);let m=0;for(let v=0;v<i;v++){const _=(d-e[v])/l;if(!(_>t7)){if(_<-t7)break;m+=Math.exp(-.5*_*_)}}f[h]=m/(i*l*iV),f[h]>p&&(p=f[h])}return{density:f,maxD:p}}const Ce={top:4,bottom:18,left:4,right:4},oV=12,J2="#333",$u=1.5,aV="#777",Rw="#2166ac",uV="rgba(110, 110, 110, 0.12)",Cw="rgba(33, 102, 172, 0.12)",ga=J2,kw="rgba(51, 51, 51, 0.10)",ba=Rw,Nw=Cw;function sV(e){return e.density_curve===void 0?null:{source:e.density_curve,p5:e.p5,p95:e.p95,color:ga,dashed:!1,bandFill:kw}}function Ri(e,n,t,r,i){const o=e.width,a=e.height,u=e.getContext("2d");if(!u)return;u.clearRect(0,0,o,a);const s=o-Ce.left-Ce.right,c=a-Ce.top-Ce.bottom,l=Ce.top+c;let f,p;if(n instanceof Float64Array){if(n.length===0)return;[f,p]=K2(i,n[0],n[n.length-1])}else f=n.start,p=n.end;if(p<=f){o7(u,Ce.left+s/2,c),di(u,[{value:f,label:f.toFixed(2)}],()=>Ce.left+s/2,l);return}const h=_=>Ce.left+(_-f)/(p-f)*s;let d,m;const v=Math.round(s);if(n instanceof Float64Array){if(n[n.length-1]-n[0]<(p-f)/s){o7(u,h((n[0]+n[n.length-1])/2),c),di(u,_a(f,p),h,l);return}const g=Lw(n,v,f,p);if(!g)return;d=g.density,m=g.maxD}else{d=new Float64Array(v),m=1;const _=n.heights.length;for(let g=0;g<v;g++){const y=(f+(p-f)*g/(v-1)-n.start)/(n.end-n.start)*(_-1),E=Math.floor(y),w=Math.min(E+1,_-1),I=y-E;d[g]=n.heights[E]*(1-I)+n.heights[w]*I}}if(!(m<=0)){u.fillStyle="#e8e8e8",u.fillRect(h(t),Ce.top,h(r)-h(t),c),u.beginPath();for(let _=0;_<v;_++){const g=Ce.left+_/(v-1)*s,b=Ce.top+c-d[_]/m*c;_===0?u.moveTo(g,b):u.lineTo(g,b)}u.strokeStyle=J2,u.lineWidth=$u,u.stroke(),di(u,_a(f,p),h,l)}}const cV=13,r7=20,lV="#777";function fV(e,n){const t=e.width,r=e.height,i=e.getContext("2d");if(!i)return;i.clearRect(0,0,t,r),i.save(),i.fillStyle=lV,i.font=Y2(cV),i.textAlign="center",i.textBaseline="middle";const o=r/2-(n.length-1)*r7/2;n.forEach((a,u)=>{i.fillText(a,t/2,o+u*r7)}),i.restore()}function ya(e,n,t){const r=e.width,i=e.height,o=e.getContext("2d");if(!o||(o.clearRect(0,0,r,i),n.length===0))return;const a=r-Ce.left-Ce.right,u=i-Ce.top-Ce.bottom,s=Ce.top+u,c=n.map(v=>z2(v.source,t)),l=(t==null?void 0:t[0])??Math.min(...c.map(v=>v[0])),f=(t==null?void 0:t[1])??Math.max(...c.map(v=>v[1])),p=v=>Ce.left+(v-l)/(f-l)*a;if(f<=l){for(const v of n)Mw(o,Ce.left+a/2,u,v.color);di(o,[{value:l,label:l.toFixed(2)}],()=>Ce.left+a/2,s);return}const h=Math.round(a),d=n.map(v=>dV(v.source,h,l,f));let m=0;for(const v of d)if(v.density!==null)for(const _ of v.density)m=Math.max(m,_);for(const v of n)v.bandFill!==null&&(o.fillStyle=v.bandFill,o.fillRect(p(v.p5),Ce.top,p(v.p95)-p(v.p5),u));n.forEach((v,_)=>{pV(o,d[_],h,a,u,m,v.color,v.dashed,p)}),di(o,_a(l,f),p,s)}function z2(e,n){if(!(e instanceof Float64Array))return[e.start,e.end];if(e.length===0)throw new Error("density overlay source has no samples");return K2(n,e[0],e[e.length-1])}function dV(e,n,t,r){if(e instanceof Float64Array){if(e.length===0)throw new Error("density overlay source has no samples");if(e[e.length-1]-e[0]<(r-t)/n)return{density:null,pointMassX:(e[0]+e[e.length-1])/2};const u=Lw(e,n,t,r);return u===null?{density:null,pointMassX:(e[0]+e[e.length-1])/2}:(i7(u.density,t,r),{density:u.density,pointMassX:null})}const i=new Float64Array(n),o=e.heights.length;for(let a=0;a<n;a++){const u=t+(r-t)*a/(n-1);if(u<e.start||u>e.end||e.end<=e.start||o===0){i[a]=0;continue}const s=(u-e.start)/(e.end-e.start)*(o-1),c=Math.floor(s),l=Math.min(c+1,o-1),f=s-c;i[a]=e.heights[c]*(1-f)+e.heights[l]*f}return i7(i,t,r),{density:i,pointMassX:null}}function i7(e,n,t){const r=(t-n)/Math.max(1,e.length-1);let i=0;for(const o of e)i+=o*r;if(!(i<=0))for(let o=0;o<e.length;o++)e[o]=e[o]/i}function pV(e,n,t,r,i,o,a,u,s){if(n.pointMassX!==null){Mw(e,s(n.pointMassX),i,a);return}if(!(n.density===null||o<=0)){e.beginPath();for(let c=0;c<t;c++){const l=Ce.left+c/(t-1)*r,f=Ce.top+i-n.density[c]/o*i;c===0?e.moveTo(l,f):e.lineTo(l,f)}e.strokeStyle=a,e.lineWidth=$u,e.setLineDash(u?[5,4]:[]),e.stroke(),e.setLineDash([])}}function o7(e,n,t){e.beginPath(),e.moveTo(n,Ce.top+t),e.lineTo(n,Ce.top),e.strokeStyle=J2,e.lineWidth=$u,e.stroke()}function Mw(e,n,t,r){e.beginPath(),e.moveTo(n,Ce.top+t),e.lineTo(n,Ce.top),e.strokeStyle=r,e.lineWidth=$u,e.stroke()}function di(e,n,t,r){e.strokeStyle="#bbb",e.lineWidth=.5,e.fillStyle="#4d4d4d",e.font=Y2(oV),e.textAlign="center";for(const i of n){const o=t(i.value);e.beginPath(),e.moveTo(o,r),e.lineTo(o,r+3),e.stroke(),e.fillText(i.label,o,r+12)}}function hV(e,n){if(e.length!==n.length)throw new Error(`pwlToShape: xs length ${e.length} !== ys length ${n.length}`);return{points:e.map((t,r)=>({x:t,y:n[r]}))}}const Ea=.001,Sa=101,mV=.04;function vV(e){const n=e.inverseCdf(Ea),t=e.inverseCdf(1-Ea);if(!(t>n))return{points:[{x:n,y:1}]};const r=[],i=[];for(let a=0;a<Sa;a++){const u=n+a/(Sa-1)*(t-n);r.push(u),i.push(e.pdf(u))}const o=Math.max(...i);if(o<=0)throw new Error("familyToShape: zero density over the display window");return{points:r.map((a,u)=>({x:a,y:i[u]/o}))}}function Ow(e,n){const t=gw(e,n),r=t.map(h=>h.x),i=Math.min(fi(e,n,Ea),...r),o=Math.max(fi(e,n,1-Ea),...r);if(!(o>i))return{points:[{x:i,y:1}]};const a=[];for(let h=0;h<Sa;h++)a.push(i+h/(Sa-1)*(o-i));for(const h of e)for(const d of Rj(h))d>i&&d<o&&a.push(d);const u=new Set(r),s=[...new Set(a)].filter(h=>!u.has(h)).sort((h,d)=>h-d),c=s.map(h=>kj(e,n,h)),l=Math.max(0,...c),f=l>0?1:Math.max(...t.map(h=>h.mass));return{points:[...s.map((h,d)=>({x:h,points:[{x:h,y:l>0?c[d]/l:0}]})),...t.map(h=>{const d=Math.max(h.mass/f,mV);return{x:h.x,points:[{x:h.x,y:0},{x:h.x,y:d},{x:h.x,y:0}]}})].sort((h,d)=>h.x-d.x).flatMap(h=>h.points)}}function Pw(e,n){const t=e.points;return K2(n?Xr(n):null,t[0].x,t[t.length-1].x)}const Hn={top:4,bottom:18,left:4,right:4},_V=10,gV="rgba(100, 149, 237, 0.25)",a7="#4477bb",u7=1.5,bV="#e8e8e8";function Ci(e,n,t,r){const i=e.width,o=e.height,a=e.getContext("2d");if(!a)return;a.clearRect(0,0,i,o);const{points:u}=n;if(u.length===0)return;const s=i-Hn.left-Hn.right,c=o-Hn.top-Hn.bottom,l=Hn.top+c,[f,p]=t;if(p<=f){const g=Hn.left+s/2;Math.max(...u.map(b=>b.y))>0&&(a.beginPath(),a.moveTo(g,l),a.lineTo(g,Hn.top),a.strokeStyle=a7,a.lineWidth=u7,a.stroke()),s7(a,[{value:f,label:f.toFixed(2)}],()=>g,l);return}const h=g=>Hn.left+(g-f)/(p-f)*s,d=Math.max(...u.map(g=>g.y));if(d<=0)return;const m=g=>Hn.top+c-g/d*c;if(r){const[g,b]=r;a.fillStyle=bV,a.fillRect(h(g),Hn.top,h(b)-h(g),c)}a.beginPath(),a.moveTo(h(u[0].x),l);for(const g of u)a.lineTo(h(g.x),m(g.y));a.lineTo(h(u[u.length-1].x),l),a.closePath(),a.fillStyle=gV,a.fill(),a.beginPath();const v=u[0],_=u[u.length-1];v.y>0?(a.moveTo(h(v.x),l),a.lineTo(h(v.x),m(v.y))):a.moveTo(h(v.x),m(v.y));for(let g=1;g<u.length;g++)a.lineTo(h(u[g].x),m(u[g].y));_.y>0&&a.lineTo(h(_.x),l),a.strokeStyle=a7,a.lineWidth=u7,a.stroke(),s7(a,_a(f,p),h,l)}function s7(e,n,t,r){e.strokeStyle="#bbb",e.lineWidth=.5,e.fillStyle="#4d4d4d",e.font=Y2(_V),e.textAlign="center";for(const i of n){const o=t(i.value);e.beginPath(),e.moveTo(o,r),e.lineTo(o,r+3),e.stroke(),e.fillText(i.label,o,r+12)}}const qw="density-log-badge",yV="density-log-badge-left",EV="density-log-badge-right",SV="log",AV="Hover (or focus) to redraw as the density of ln(value); tick labels in that view are ln(value). Leave to restore.",Z2=new Set(["probability","oddsratio","posreal"]),wV=.25,Fh=256;function Dw(e){const n=new Float64Array(e.length);for(let t=0;t<e.length;t++)n[t]=Math.log(e[t]);return n}function Fw(e){return e.length>0&&e[0]>0}function $V(e,n){const t=e.heights.length;if(t===0||e.end<=e.start||n<e.start||n>e.end)return 0;const r=(n-e.start)/(e.end-e.start)*(t-1),i=Math.floor(r),o=Math.min(i+1,t-1),a=r-i;return e.heights[i]*(1-a)+e.heights[o]*a}function xw(e){const n=e.heights.length;if(n<2||e.end<=0||e.end<=e.start)return null;let t=e.start;if(t<=0){const u=(e.end-e.start)/(n-1);if(t=e.start+Math.ceil(-e.start/u+1e-12)*u,t<=0||t>=e.end)return null}const r=Math.log(t),i=Math.log(e.end),o=new Array(n);let a=0;for(let u=0;u<n;u++){const s=r+(i-r)*u/(n-1),c=Math.exp(s),l=$V(e,c)*c;o[u]=l,l>a&&(a=l)}if(a<=0)return null;for(let u=0;u<n;u++)o[u]=o[u]/a;return{start:r,end:i,heights:o}}function IV(e){const n=e.points.filter(t=>t.x>0).map(t=>({x:Math.log(t.x),y:t.y*t.x}));return n.length===0||Math.max(...n.map(t=>t.y))<=0?null:{points:n}}function Lr(e,n){return e>0?Math.log(e):n}function Q2(e,n){return n<e?"right":"left"}function ev(e,n,t){const r=(t-n)*wV,i=n+r,o=t-r;if(e instanceof Float64Array){let l=0,f=0;for(const p of e)p<=i?l++:p>=o&&f++;return{left:l/e.length,right:f/e.length}}const a=e.heights.length;let u=0,s=0,c=0;for(let l=0;l<a;l++){const f=e.start+(e.end-e.start)*(a===1?0:l/(a-1)),p=e.heights[l];c+=p,f<=i?u+=p:f>=o&&(s+=p)}return c<=0?{left:0,right:0}:{left:u/c,right:s/c}}function TV(e,n,t){const r=e.points,i=new Array(Fh);let o=0;for(let a=0;a<Fh;a++){const u=n+(t-n)*a/(Fh-1);for(;o<r.length-1&&r[o+1].x<u;)o++;const s=r[o],c=r[Math.min(o+1,r.length-1)];if(u<s.x||u>c.x){i[a]=0;continue}i[a]=c.x===s.x?s.y:s.y+(c.y-s.y)*(u-s.x)/(c.x-s.x)}return ev({start:n,end:t,heights:i},n,t)}function LV(e){var n;(n=e.querySelector(`.${qw}`))==null||n.remove()}function nv(e){const n=e.parentElement;return n!=null&&n.classList.contains("resizable-canvas-wrapper")?(LV(n),n):(console.warn("density_log_hover: canvas is not wrapped by makeResizable"),null)}function tv(e,n,t,r){const i=document.createElement("span");i.className=`${qw} `+(n==="left"?yV:EV),i.textContent=SV,i.title=AV,i.tabIndex=0,i.addEventListener("pointerenter",t),i.addEventListener("pointerleave",r),i.addEventListener("focus",t),i.addEventListener("blur",r),e.appendChild(i)}function Bw(e,n,t,r,i){const o=nv(e);if(o===null||!Z2.has(i))return;const a=Xr(i),u=()=>Ri(e,n,t,r,a);let s,c;if(n instanceof Float64Array){if(!Fw(n))return;s=Dw(n),c=wu(s[0],s[s.length-1])[0]}else{const d=xw(n);if(d===null)return;s=d,c=d.start}const l=()=>Ri(e,s,Lr(t,c),Lr(r,c),null),[f,p]=z2(n,a),h=ev(n,f,p);tv(o,Q2(h.left,h.right),l,u)}function Hw(e,n,t){const r=nv(e);if(r===null||!Z2.has(t)||n.length===0)return;const i=Xr(t),o=()=>ya(e,n,i),a=[];for(const h of n){let d,m;if(h.source instanceof Float64Array){if(!Fw(h.source))return;d=Dw(h.source),m=wu(d[0],d[d.length-1])[0]}else{const v=xw(h.source);if(v===null)return;d=v,m=v.start}a.push({...h,source:d,p5:Lr(h.p5,m),p95:Lr(h.p95,m)})}const u=()=>ya(e,a,null),s=n.map(h=>z2(h.source,i)),c=(i==null?void 0:i[0])??Math.min(...s.map(h=>h[0])),l=(i==null?void 0:i[1])??Math.max(...s.map(h=>h[1]));let f=0,p=0;for(const h of n){const d=ev(h.source,c,l);f+=d.left/n.length,p+=d.right/n.length}tv(r,Q2(f,p),u,o)}function Uw(e,n,t,r,i){const o=nv(e);if(o===null||r===void 0||!Z2.has(r))return;const a=IV(n);if(a===null)return;const u=a.points[0],s=a.points[a.points.length-1],c=s.x>u.x?wu(u.x,s.x):[u.x,s.x],l=i?[Lr(i[0],c[0]),Lr(i[1],c[0])]:null,f=()=>Ci(e,n,t,i),p=()=>Ci(e,a,c,l),h=TV(n,t[0],t[1]);tv(o,Q2(h.left,h.right),p,f)}const lr={top:10,bottom:35,left:50,right:15},RV=800,CV=500,c7=12,kV=5,NV=3,MV=2,l7=3,f7=5,OV=10,PV=1,qV=15,d7=["#333","#c44","#44c","#4c4","#c84","#84c","#4cc","#c4c","#888","#ca4"],Gw="#333",jw=2,DV=1.5,FV={color:Gw,lineWidth:jw};function xV(e,n,t=OV,r=[]){if(n)return n;let i=1/0,o=-1/0;const a=l=>{l<i&&(i=l),l>o&&(o=l)};for(const l of e)for(const f of l.points)a(f.y);for(const l of r)a(l.y);if(!Number.isFinite(i)||!Number.isFinite(o))return null;const c=(o-i||PV)*t/100;return[i-c,o+c]}function p7(e,n,t){e.width||(e.width=RV),e.height||(e.height=CV);const r=e.width,i=e.height,o=e.getContext("2d");if(!o)return;o.clearRect(0,0,r,i);const a=t.scatterOverlay;if(n.length===0&&!a)return;const u=i-lr.top-lr.bottom,s=xV(n,t.yRange,t.yRangePaddingPercent,a==null?void 0:a.points);if(!s)return;const[c,l]=s,f=HV(c,l,kV),p=f.length>1?f[1]-f[0]:l-c,h=f.map($=>UV($,p));o.font=jt(c7);const d=h.reduce(($,A)=>Math.max($,o.measureText(A).width),0),m=Math.max(lr.left,Math.ceil(d)+l7+f7),v=r-m-lr.right;if(v<=0)return;const _=t.xLabels.length,g=_>1?v/(_-1):0,b=$=>m+$*g,y=$=>lr.top+u-($-c)/(l-c)*u;o.save(),o.strokeStyle="#ddd",o.lineWidth=.5,o.setLineDash([3,3]);for(const $ of f){const A=y($);o.beginPath(),o.moveTo(m,A),o.lineTo(m+v,A),o.stroke()}if(o.restore(),a){o.fillStyle=a.color;for(const $ of a.points)o.beginPath(),o.arc(b($.x),y($.y),MV,0,Math.PI*2),o.fill()}const E=n.length===1;for(let $=0;$<n.length;$++){const A=n[$],S=A.color??(E?Gw:d7[$%d7.length]),T=A.lineWidth??(E?jw:DV);o.strokeStyle=S,o.lineWidth=T;for(const R of BV(A.points))R.length<2||(o.beginPath(),R.forEach((P,M)=>{const x=b(P.x),q=y(P.y);M===0?o.moveTo(x,q):o.lineTo(x,q)}),o.stroke());o.fillStyle=S;for(const R of A.points)o.beginPath(),o.arc(b(R.x),y(R.y),NV,0,Math.PI*2),o.fill()}const w=lr.top+u;o.strokeStyle="#bbb",o.lineWidth=.5,o.fillStyle="#4d4d4d",o.font=jt(c7),o.textAlign="center",o.textBaseline="top";const I=t.xLabels.reduce(($,A)=>Math.max($,o.measureText(A).width),0),C=_>1?g:v,L=I>C-4;for(let $=0;$<_;$++){const A=b($);o.beginPath(),o.moveTo(A,w),o.lineTo(A,w+3),o.stroke(),o.save(),L?(o.translate(A,w+5),o.rotate(-Math.PI/4),o.textAlign="right",o.fillText(t.xLabels[$],0,0)):o.fillText(t.xLabels[$],A,w+5),o.restore()}o.fillStyle="#777",o.textAlign="center",o.textBaseline="bottom",o.fillText(t.xAxisLabel,m+v/2,i-1),o.fillStyle="#4d4d4d",o.textAlign="right",o.textBaseline="middle";for(let $=0;$<f.length;$++){const A=f[$],S=y(A);o.strokeStyle="#bbb",o.lineWidth=.5,o.beginPath(),o.moveTo(m-l7,S),o.lineTo(m,S),o.stroke(),o.fillText(h[$],m-f7,S)}}function BV(e){const n=[];for(const t of e){const r=n[n.length-1],i=r==null?void 0:r[r.length-1];r!==void 0&&i!==void 0&&t.x===i.x+1?r.push(t):n.push([t])}return n}function HV(e,n,t){const r=n-e;if(r<=0)return[e];const i=r/(t-1),o=Math.pow(10,Math.floor(Math.log10(i))),a=i/o;let u;a<=1.5?u=1*o:a<=3.5?u=2*o:a<=7.5?u=5*o:u=10*o;const s=Math.ceil(e/u)*u,c=[];for(let l=s;l<=n+u*.001;l+=u)c.push(l);return c}function UV(e,n){if(Number.isInteger(e)||!Number.isFinite(n)||n<=0)return e.toString();const t=Math.min(qV,Math.max(0,-Math.floor(Math.log10(n)))),r=e.toFixed(t).replace(/0+$/,"").replace(/\.$/,"");return r==="-0"?"0":r}const Iu={top:10,bottom:35,left:60,right:60},GV=80,jV=120,VV=1e3,WV=60,XV=90,KV=800,YV=35,Ct=12,JV=12,Vw="#ddd",zV="#eee",ZV=220,h7=10,QV=80,eW=25,m7=95,si=12,Ww=8,vm=4,xh=64,Xw=8,nW=6,Kw=5,Yw=4,tW=4,Jw=-Math.PI/4,rW=6,zw=1,iW=.6;function oW(e){return Math.max(Iu.left,Xw+Ct+nW+Math.ceil(e)+Kw)}function aW(e){return Math.max(Iu.right,Ww+si+vm+Math.ceil(e))}function uW(e){const n=Math.max(Ct,e*Math.abs(Math.sin(Jw)));return Math.max(Iu.bottom,Yw+Math.ceil(n)+rW+Ct+zw)}let Bh;function sW(){return Bh===void 0&&(Bh=typeof document>"u"?null:document.createElement("canvas").getContext("2d")),Bh}function Hh(e,n){return n?(n.font=jt(Ct),e.reduce((t,r)=>Math.max(t,n.measureText(r).width),0)):e.reduce((t,r)=>Math.max(t,r.length*iW*Ct),0)}function Zw(e){if(e.valueRange){const[r,i]=e.valueRange;return{vMin:r,vMax:i,hasValues:!0}}let n=1/0,t=-1/0;for(const r of e.cells)for(const i of r)i!==null&&(i<n&&(n=i),i>t&&(t=i));return{vMin:n,vMax:t,hasValues:isFinite(n)&&isFinite(t)}}function cW(e,n){const{vMin:t,vMax:r,hasValues:i}=Zw(e);return{yTickPx:Hh(e.yLabels,n),xTickPx:Hh(e.xLabels,n),legendPx:i?Hh([ki(t),ki(r)],n):0}}function Qw(e,n){const t=cW(e,n);return{top:Iu.top,bottom:uW(t.xTickPx),left:oW(t.yTickPx),right:aW(t.legendPx)}}function v7(e,n,t){return Math.max(n,Math.min(t,Math.floor(e)))}function e$(e){const n=Qw(e,sW()),t=v7(VV/e.xLabels.length,GV,jV),r=v7(KV/e.yLabels.length,WV,XV);return{width:n.left+e.xLabels.length*t+n.right,height:n.top+e.yLabels.length*r+n.bottom}}function _7(e,n){var _;const t=n.xLabels.length,r=n.yLabels.length;if(t===0||r===0)return;const i=e.getContext("2d");if(!i)return;if(!e.width||!e.height){const g=e$(n);e.width=g.width,e.height=g.height}const o=e.width,a=e.height;i.clearRect(0,0,o,a);const u=Qw(n,i),s=(o-u.left-u.right)/t,c=(a-u.top-u.bottom)/r;if(s<=0||c<=0)return;const{vMin:l,vMax:f,hasValues:p}=Zw(n),h=p&&f-l||1,d=s>=YV;i.font=jt(JV),i.textAlign="center",i.textBaseline="middle";for(let g=0;g<r;g++)for(let b=0;b<t;b++){const y=u.left+b*s,E=u.top+g*c,w=((_=n.cells[g])==null?void 0:_[b])??null;if(w===null)i.fillStyle=zV,i.fillRect(y,E,s,c);else{const I=p?(w-l)/h:0;i.fillStyle=n$(I),i.fillRect(y,E,s,c),d&&(i.fillStyle=I>.55?"#fff":"#333",i.fillText(ki(w),y+s/2,E+c/2))}i.strokeStyle=Vw,i.lineWidth=1,i.strokeRect(y,E,s,c)}i.fillStyle="#4d4d4d",i.font=jt(Ct),i.textBaseline="top";const v=n.xLabels.reduce((g,b)=>Math.max(g,i.measureText(b).width),0)>s-tW;for(let g=0;g<t;g++){const b=u.left+g*s+s/2,y=u.top+r*c+Yw;i.save(),i.textAlign="center",v?(i.translate(b,y),i.rotate(Jw),i.textAlign="right",i.fillText(n.xLabels[g],0,0)):i.fillText(n.xLabels[g],b,y),i.restore()}i.fillStyle="#777",i.textAlign="center",i.textBaseline="bottom",i.fillText(n.xAxisLabel,u.left+t*s/2,a-zw),i.fillStyle="#4d4d4d",i.font=jt(Ct),i.textAlign="right",i.textBaseline="middle";for(let g=0;g<r;g++){const b=u.top+g*c+c/2;i.fillText(n.yLabels[g],u.left-Kw,b)}i.save(),i.fillStyle="#777",i.textAlign="center",i.textBaseline="top",i.translate(Xw,u.top+r*c/2),i.rotate(-Math.PI/2),i.fillText(n.yAxisLabel,0,0),i.restore(),p&&lW(i,o,u,r*c,l,f)}function n$(e){const n=h7+(QV-h7)*e,t=m7+(eW-m7)*e;return`hsl(${ZV}, ${n.toFixed(0)}%, ${t.toFixed(0)}%)`}function ki(e){return Number.isInteger(e)?e.toString():e.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function lW(e,n,t,r,i,o){const a=n-t.right+Ww,u=t.top,s=r,c=s/xh;for(let l=0;l<xh;l++){const f=1-l/(xh-1);e.fillStyle=n$(f),e.fillRect(a,u+l*c,si,c+1)}e.strokeStyle=Vw,e.lineWidth=1,e.strokeRect(a,u,si,s),e.fillStyle="#4d4d4d",e.font=jt(Ct),e.textAlign="left",e.textBaseline="middle",e.fillText(ki(o),a+si+vm,u),e.fillText(ki(i),a+si+vm,u+s)}function fW(){const e=new WeakMap;return{get(n,t){var r;return(r=e.get(n))==null?void 0:r.get(t)},set(n,t,r){let i=e.get(n);i===void 0&&(i=new Map,e.set(n,i)),i.set(t,r)}}}const dW=.5,pW=3,g7=new WeakMap,b7=new WeakMap,y7=fW();function lt(e,n,t){var p;if(g7.set(e,n),(p=e.parentElement)!=null&&p.classList.contains("resizable-canvas-wrapper"))return;const r=e.width,i=e.height;b7.set(e,{w:r,h:i});const o=t===void 0?1:y7.get(t.stateHost,t.stateKey)??1,a=document.createElement("div");a.className="resizable-canvas-wrapper",e.parentElement.insertBefore(a,e),a.appendChild(e);const u=document.createElement("div");u.className="resizable-canvas-handle",a.appendChild(u),o!==1&&(e.width=Math.round(r*o),e.height=Math.round(i*o)),a.style.width=`${e.width}px`,o!==1&&n();let s=!1,c=0,l=r;u.addEventListener("pointerdown",h=>{var d;s=!0,c=h.clientX,l=e.width,(d=u.setPointerCapture)==null||d.call(u,h.pointerId),h.preventDefault()}),u.addEventListener("pointermove",h=>{var b;if(!s)return;const d=b7.get(e)??{w:r,h:i},m=h.clientX-c,v=Math.max(d.w*dW,Math.min(d.w*pW,l+m)),_=v/d.w,g=Math.round(d.h*_);e.width=Math.round(v),e.height=g,a.style.width=`${e.width}px`,t!==void 0&&y7.set(t.stateHost,t.stateKey,e.width/d.w),(b=g7.get(e))==null||b()});const f=()=>{s=!1};u.addEventListener("pointerup",f),u.addEventListener("lostpointercapture",f)}const t$=18,r$=80,hW=16,Aa=new Set;let E7=!1;function mW(){E7||(E7=!0,document.addEventListener("click",e=>{for(const n of[...Aa])document.contains(n.wrapper)?n.wrapper.contains(e.target)||n.close():Aa.delete(n)}))}function vW(e,n=t$,t=r$){return i$(r=>{r.textContent=e},!1,!0,n,t)}function mt(e,n=t$,t=r$){return i$(r=>{r.innerHTML=e()},!0,!1,n,t)}function i$(e,n,t,r,i){const o=document.createElement("span");o.className="help-widget",o.style.display="inline-block";const a=document.createElement("button");a.className="help-widget-btn",a.type="button",a.textContent="?",a.setAttribute("aria-label","Help"),a.style.width=`${r}px`,a.style.height=`${r}px`,a.style.fontSize=`${Math.round(r*.6)}px`,a.style.lineHeight=`${r}px`;const u=document.createElement("div");u.className="help-widget-popover",u.hidden=!0;const s=document.createElement("button");s.className="help-widget-close",s.type="button",s.textContent="×",s.setAttribute("aria-label","Close");const c=document.createElement("div");c.className=n?"help-widget-body html-content":"help-widget-body",u.appendChild(s),u.appendChild(c),o.appendChild(a),o.appendChild(u),t&&e(c);const l={wrapper:o,close:()=>p()};function f(){e(c),u.hidden=!1,Aa.add(l);const h=window.innerWidth,d=window.innerHeight,m=Math.round(h*i/100),v=d-2*hW;u.style.width=`${m}px`,u.style.maxHeight=`${v}px`;const _=Math.min(u.offsetHeight,v);u.style.left=`${Math.round((h-m)/2)}px`,u.style.top=`${Math.round((d-_)/2)}px`}function p(){u.hidden=!0,Aa.delete(l)}return a.addEventListener("click",h=>{h.stopPropagation(),u.hidden?f():p()}),s.addEventListener("click",h=>{h.stopPropagation(),p()}),u.addEventListener("keydown",h=>{h.key==="Escape"&&(p(),a.focus())}),o.addEventListener("keydown",h=>{h.key==="Escape"&&!u.hidden&&(p(),a.focus())}),mW(),o}const o$=1,_W="shortcutKeys",gW=new Set(["","date","datetime-local","email","month","number","password","search","tel","text","time","url","week"]),Kr=Object.freeze([{id:"toggle_mnames",description:"Toggle longer meaning-carrying names",default_shortcut:"n",enabled:!0},{id:"goto_calculator",description:"Move to Calculator section",default_shortcut:"c",enabled:!0},{id:"goto_top",description:"Move to top of page",default_shortcut:"t",enabled:!0},{id:"goto_next_section",description:"Jump to next section",default_shortcut:"s",enabled:!0},{id:"toggle_srcquotes_inlined",description:"Toggle source quotes inline in the text vs. behind a glyph",default_shortcut:"q",enabled:!0},{id:"toggle_framing_notes",description:"Show/hide all framing notes",default_shortcut:"f",enabled:!0},{id:"toggle_long_text_abbrev",description:"Toggle abbreviation of long text",default_shortcut:"a",enabled:!0},{id:"switch_whose_mode",description:"Cycle interaction mode (Estimate / ReadTrials / Compare), restoring its remembered selection",default_shortcut:"m",enabled:!0},{id:"toggle_settings_shortcuts",description:"Show/hide settings/shortcuts",default_shortcut:"?",enabled:!0}]);function a$(){return Kr}function S7(e){return Kr.find(n=>n.id===e)}function rv(e){const n=e.trim().toLowerCase();return n===""?{ok:!0,key:n}:[...n].length!==o$?{ok:!1,key:n,error:"Use a single key, or clear the field to disable this shortcut."}:{ok:!0,key:n}}function u$(e){if(!e||typeof e!="object"||Array.isArray(e))return{};const n={};for(const[t,r]of Object.entries(e)){if(typeof r!="string"){console.error(`Ignoring non-string shortcut key for ${t}.`);continue}const i=rv(r);if(!i.ok){console.error(`Ignoring invalid persisted shortcut key for ${t}: ${r}`);continue}n[t]=i.key}return n}function bW(){const e={};for(const n of Kr)e[n.id]=n.default_shortcut;return e}function Yr(){const e=u$(cn().shortcutKeys);return{...bW(),...e}}function s$(e,n,t=Yr()){if(n==="")return null;for(const r of a$())if(r.id!==e&&t[r.id]===n)return r.id;return null}function yW(e,n){var u;if(!S7(e))throw new Error(`Unknown shortcut id: ${e}`);const r=rv(n);if(!r.ok)return{ok:!1,key:r.key,error:r.error};const i=Yr(),o=s$(e,r.key,{...i,[e]:r.key});if(o)return{ok:!1,key:r.key,conflictId:o,error:`Already assigned to "${((u=S7(o))==null?void 0:u.description)??o}".`};const a=u$(cn().shortcutKeys);return a[e]=r.key,Ka(_W,a),{ok:!0,key:r.key}}function EW(e){if(e.altKey||e.ctrlKey||e.metaKey)return null;const n=e.key.toLowerCase();return[...n].length!==o$?null:n}function SW(e){if(!(e instanceof HTMLElement))return!1;if(e.isContentEditable)return!0;let n=e;for(;n;){if(n.isContentEditable||n.contentEditable==="true")return!0;const t=n.getAttribute("contenteditable");if(t!==null&&t.toLowerCase()!=="false")return!0;n=n.parentElement}return e instanceof HTMLTextAreaElement?!0:e instanceof HTMLInputElement?gW.has(e.type.toLowerCase()):!1}function AW(e){const n=t=>{if(SW(t.target))return;const r=EW(t);if(r===null)return;const i=Yr();for(const o of a$()){if(i[o.id]!==r)continue;const a=e[o.id];if(!a)return;t.preventDefault(),a();return}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}const wW=[{aid:"alpoker"},{aid:"mcovidB6",family:"mcovidB"},{aid:"mcovidB7",family:"mcovidB"},{aid:"mcovidB8",family:"mcovidB"},{aid:"mcovidB9",family:"mcovidB"},{aid:"mcovidB10",family:"mcovidB"},{aid:"mcovidB11",family:"mcovidB"},{aid:"mcovidB12",family:"mcovidB"},{aid:"mcovidB13",family:"mcovidB"},{aid:"covid0",family:"cov-ATC"},{aid:"covatc1",family:"cov-ATC"},{aid:"eggsFH1",family:"eggs"},{aid:"eggsFH2",family:"eggs"},{aid:"lhcFXH1",family:"lhc"},{aid:"lhcFXH_SolMax",family:"lhc"},{aid:"lhcFXH_SolMax_Ultra",family:"lhc"},{aid:"simfix",family:"sim"},{aid:"simBetter",family:"sim"}],$W={bbdoom:{sequence:[{aid:"bbdoom1",version:"0.1.0"},{aid:"bbdoom2",version:"1.0.0"}]},"cov-ATC":{sequence:[{aid:"covid0",version:"1.0.0"},{aid:"covatc1",version:"2.0.0"}]},mcovidB:{sequence:[{aid:"mcovidB1",version:"0.0.0"},{aid:"mcovidB2",version:"0.0.1"},{aid:"mcovidB3",version:"0.0.2"},{aid:"mcovidB4",version:"0.0.3"},{aid:"mcovidB5",version:"0.0.4"},{aid:"mcovidB6",version:"1.0.0"},{aid:"mcovidB7",version:"2.0.0"},{aid:"mcovidB8",version:"2.1.0"},{aid:"mcovidB9",version:"2.2.0"},{aid:"mcovidB10",version:"2.3.0"},{aid:"mcovidB11",version:"3.0.0"},{aid:"mcovidB12",version:"3.1.0"},{aid:"mcovidB13",version:"4.0.0"},{aid:"mcovidB14",version:"4.1.0"}]},mcovidA:{sequence:[{aid:"mcovidA",version:"0.0.0"},{aid:"mcovidA2",version:"0.0.1"}]},eggs:{sequence:[{aid:"eggsFH1",version:"0.1.0"},{aid:"eggsFH2",version:"0.2.0"}]},lhc:{sequence:[{aid:"lhcFXH1",version:"1.0.0"},{aid:"lhcFXH_SolMax",version:"2.0.0"},{aid:"lhcFXH_SolMax_Ultra",version:"3.0.0"}]},aminds:{sequence:[{aid:"cmindsBareParam1",version:"1.0.0"},{aid:"aminds2",version:"2.0.0"},{aid:"aminds3",version:"3.0.0"}]},sim:{sequence:[{aid:"simfix",version:"0.1.0"},{aid:"simBetter",version:"0.2.0"}]},testE:{sequence:[{aid:"testprob_preE",version:"pre"},{aid:"testprob_postE",version:"post"},{aid:"testprob_postE_extra",version:"postextra"}]}},IW={navList:wW,families:$W},TW="../../data/",LW="/index.ts",c$=Object.assign({"../../data/alpoker/index.ts":()=>Ye(()=>import("./index-B0k_FxCP.js"),[]),"../../data/covatc1/index.ts":()=>Ye(()=>import("./index-CwbraK4Z.js"),[]),"../../data/covid0/index.ts":()=>Ye(()=>import("./index-BaDjKjk4.js"),[]),"../../data/eggsFH1/index.ts":()=>Ye(()=>import("./index-BQYsJikh.js"),[]),"../../data/eggsFH2/index.ts":()=>Ye(()=>import("./index-m42_oO1S.js"),[]),"../../data/lhcFXH1/index.ts":()=>Ye(()=>import("./index-DiqB06hJ.js"),[]),"../../data/lhcFXH_SolMax/index.ts":()=>Ye(()=>import("./index-Ba8a_JDh.js"),[]),"../../data/lhcFXH_SolMax_Ultra/index.ts":()=>Ye(()=>import("./index-HpC73mkK.js"),[]),"../../data/mcovidB10/index.ts":()=>Ye(()=>import("./index-CoXL0jFk.js"),__vite__mapDeps([0,1])),"../../data/mcovidB11/index.ts":()=>Ye(()=>import("./index-Yk3x28Qz.js"),__vite__mapDeps([2,1])),"../../data/mcovidB12/index.ts":()=>Ye(()=>import("./index-D0LaxjBe.js"),[]),"../../data/mcovidB13/index.ts":()=>Ye(()=>import("./index-By0ch8Wo.js"),[]),"../../data/mcovidB6/index.ts":()=>Ye(()=>import("./index-CxbX9aVq.js"),__vite__mapDeps([3,1])),"../../data/mcovidB7/index.ts":()=>Ye(()=>import("./index-tfJhK3PN.js"),__vite__mapDeps([4,1])),"../../data/mcovidB8/index.ts":()=>Ye(()=>import("./index-eEktI5xG.js"),__vite__mapDeps([5,1])),"../../data/mcovidB9/index.ts":()=>Ye(()=>import("./index-BYj8B2Jm.js"),__vite__mapDeps([6,1])),"../../data/simBetter/index.ts":()=>Ye(()=>import("./index-Bon-r6Hg.js"),[]),"../../data/simfix/index.ts":()=>Ye(()=>import("./index-DU6mr9sE.js"),__vite__mapDeps([7,1]))});function iv(e){return`${TW}${e}${LW}`}function RW(e){return c$[iv(e)]}function ov(e){return iv(e)in c$}const Tu=IW,l$=(()=>{const e=new Map;for(const[n,{sequence:t}]of Object.entries(Tu.families))t.forEach((r,i)=>e.set(r.aid,{family:n,index:i}));return e})();function CW(){return Tu.navList}function kW(){const e={};for(const[n,{sequence:t}]of Object.entries(Tu.families))e[n]=t;return e}function f$(e){var n;return(n=l$.get(e))==null?void 0:n.family}function A7(e,n,t,r){for(let i=n+t;i>=0&&i<e.length;i+=t){const o=e[i].aid;if(r(o))return o}}function NW(e,n=ov){const t=l$.get(e);if(t===void 0)return;const r=Tu.families[t.family].sequence,i={version:r[t.index].version},o=A7(r,t.index,-1,n);o!==void 0&&(i.prev=o);const a=A7(r,t.index,1,n);return a!==void 0&&(i.next=a),i}const Be={VISIBLE_AOPTS:"visible-aopts",TCHOICE:"tchoice",CPARAMS_SECTION:"cparams",TEXT_DEFINITIONS:"text-definitions",INTERPRETED_SYMBOL_SEMANTICS:"interpreted-symbols",DEFINED_SYMBOLS:"defined-symbols",AXIOMS:"axioms",SIMPLIFYING_ASSUMPTIONS:"simplifying-assumptions",DERIVED_AXIOMS:"derived-axioms",ESTIMATION:"estimation",RESPONSE_NOTES:"response-notes",COMPUTED_FORMULAS:"formulas",FRAMING_ROOT:"framing-notes-root",FRAMING_EXPLAINER:"framing-notes-explainer",SRCQUOTE_EXPLAINER:"srcquote-explainer",CALCULATOR:"calculator"};function Et(e,n){return`${Be[e]}-${bm(n)}`}const d$="estimator-instructions",_m="estimator-instructions-fold",MW="Estimator Instructions",lo="hir-persistent-fold",OW="hir-section-fold",PW=!0;function av(e,n,t){var r;return((r=t.foldOpenById)==null?void 0:r[e])??n?" open":""}function Uh(e,n,t,r){const i=av(e,PW,r);return`<details id="${e}" class="${OW} ${lo}"${i}><summary>${n}</summary>`+t+"</details>"}const qW={TEXT_DEFINITIONS:e=>GM(e),INTERPRETED_SYMBOL_SEMANTICS:e=>jM(e),DEFINED_SYMBOLS:e=>UM(e),AXIOMS:e=>os(e,{classification:"ordinary"}),SIMPLIFYING_ASSUMPTIONS:e=>os(e,{classification:"simplifying"}),DERIVED_AXIOMS:e=>os(e,{classification:"derived"}),COMPUTED_FORMULAS:e=>VM(e)},DW=`<div class="dag-legend">Each formula computes its left-hand side. <span class="dag-glyph">↖</span> marks a value computed by an earlier formula (click to jump to it); <span class="dag-glyph">↘</span> marks a left-hand side used by a later formula; hovering either highlights every occurrence of the value. Undecorated leaf names are estimated directly — each names a card in <a href="#${Be.ESTIMATION}-section">Estimation</a> (click to jump to it).</div>`,FW="DERIVED_FORMS",gm="derived-forms-fold",xW="Computed auxiliary formulas",BW="CALCULATOR_RESULTS",p$="stats-display-control";function HW(e){const n=new Set;for(const t of e.layout.sections.html)if("subentries"in t)for(const r of t.subentries)typeof r=="object"&&"formid"in r&&n.add(r.formid);return n}function UW(e){const n=e.conclusion_form_or_none(),t=HW(e);return e.form.filter(r=>r.id!==n&&!t.has(r.id)).map(r=>r.id)}function GW(e,n,t){let r;if(t)r={...t,unresolvedRefs:t.unresolvedRefs??new Set};else{const o=Wm(e),a=UE(e,jE(e,{},"plainnum"),"plainnum"),u=a.option_value_or("show_typical_examples",GE),s=a.option_value_or("srcquotes_inlined",!1),c={};for(const l of a.get_option_bare_names())c[l]=a.option_value(l);r={jprobInstance:a,showTypical:u,srcquotesInlined:s,refLookup:o,displayOptionValues:c,unresolvedRefs:new Set}}const i=[];Wh in e.get_fgroups()&&i.push(`<details id="${_m}" class="hir-fold ${lo} estimator-instructions-fold"${av(_m,!1,r)} hidden><summary>${MW}</summary><div id="${d$}" class="hir-fold-body"></div></details>`);for(const o of e.layout.sections.html)i.push(jW(o,e,r));return{html:i.join(""),unresolvedRefs:[...r.unresolvedRefs].sort()}}function jW(e,n,t){if("chunkid"in e)return h$(e.chunkid,n,t,e.style)??"";if("subentries"in e){const u=Be[e.delegation_id],s=e.subentries.map(c=>VW(c,n,t,e.delegation_id));return Uh(`${u}-section`,`<h2 id="${u}-section-header">${e.header}</h2>`,s.join(""),t)}const{delegation_id:r,header:i}=e,o=Be[r];if(!o)throw new Error("Expected `delegation_id` field here to be an element of DelegatedLayoutEntryId.");if((r==="FRAMING_ROOT"||r==="FRAMING_EXPLAINER")&&!n.has_standard_rendering_framing_notes()||r==="SRCQUOTE_EXPLAINER"&&!n.has_srcquotes())return"";const a=qW[r];if(a){const u=a(t);if(!u.trim())return"";const s=r==="COMPUTED_FORMULAS"?DW:"";return i==null?s+u:Uh(`${o}-section`,`<h2 id="${o}-section-header">${i}</h2>`,s+u,t)}return r==="FRAMING_EXPLAINER"||r==="SRCQUOTE_EXPLAINER"?`<div id="${o}-section"><div id="${o}-content"></div></div>`:Uh(`${o}-section`,`<h2 id="${o}-section-header">${i??""}</h2>`,`<div id="${o}-content"></div>`,t)}function VW(e,n,t,r){if(typeof e=="string"){if(e===FW){const u=UW(n).map(s=>`<div id="derived-${bm(s)}" class="derived-form" data-form-id="${s}"></div>`).join("");return u===""?"":`<details id="${gm}" class="hir-fold ${lo} derived-forms-fold"${av(gm,!1,t)}><summary>${xW}</summary><div class="hir-fold-body derived-forms-fold-body">${u}</div></details>`}const a=Et(r,e);return e===BW?`<div id="${p$}"></div><div id="${a}"></div>`:`<div id="${a}"></div>`}if("chunkid"in e)return h$(e.chunkid,n,t,e.style)??"";const i=e.formid;return`<div id="${`derived-${bm(i)}`}" class="derived-form" data-form-id="${i}"></div>`}function h$(e,n,t,r){const i=n.find_textchunk_defn(e);if(i===void 0)throw new Error(`Layout references textchunk "${e}", which the jprob template does not declare`);if(!i)return null;const o=Ae(i,t);switch(r){case"title":return`<h1 class="arg-title">${o}</h1>`;case"subtitle":return`<p class="arg-subtitle">${o}</p>`;case"note":return`<div class="hir-loud-note">${o}</div>`;case"warning":return`<p class="arg-warning">${o}</p>`;default:return`<div class="textchunk">${o}</div>`}}function bm(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"").replace(/^-/,"")}const m$="jtask-group-provenance-fold",WW="Provenance",XW="Prompt content hashes answered by these trials:",KW="(prompt hash)",YW="not recorded",JW="none";function v$(e){return Pr(e).map(n=>{const t=zS(e.richcodeResults,n);return{jtaskGroupId:n,aopts:t.aopts,contentHashes:t.jtask_group_content_hashes??[]}})}function zW(e){return JSON.stringify(Array.isArray(e)?[...e].map(String).sort():e)}function ZW(e,n){const t=new Set(e.flatMap(o=>Object.keys(o.aopts))),r=n.get_aopt_bare_names().filter(o=>t.has(o)),i=[...t].filter(o=>!r.includes(o)).sort();return[...r,...i].filter(o=>new Set(e.map(u=>o in u.aopts?zW(u.aopts[o]):void 0)).size>1)}function QW(e,n){const t=n.get_aopts().find(r=>ye(r.id)===e);return(t==null?void 0:t.longname)??e}function eX(e,n){if(!(n in e.aopts))return YW;const t=e.aopts[n];return Array.isArray(t)?t.length===0?JW:[...t].map(String).sort().join(", "):String(t)}function _$(e,n,t){const r=eO(t.jtaskHashGroups,e.jtaskGroupId),i=r===null?` <span class="jtask-group-implicit-mark">${KW}</span>`:"",o=ZW(n,t.jprobTemplate),a=o.length===0?"":' <span class="jtask-group-differing-options">'+o.map(f=>`${U(QW(f,t.jprobTemplate))}: `+U(eX(e,f))).join("; ")+"</span>",u=r===null||r===""?"":`<div class="jtask-group-note">${U(r)}</div>`,s=[...e.contentHashes].sort().map(f=>`<code class="jtask-group-content-hash">${U(f)}</code>`).join(" "),c=t.provenanceFoldId??m$,l=t.foldOpenById[c]?" open":"";return`<div class="jtask-group-description"><div class="jtask-group-description-head">Task group <span class="jtask-group-name">${U(e.jtaskGroupId)}</span>${i}${a}</div>`+u+`<details id="${U(c)}" class="hir-fold ${lo} jtask-group-provenance-fold"${l}><summary>${WW}</summary><div class="hir-fold-body">${XW} ${s}</div></details></div>`}const nX=0,w7=new WeakMap;function tX(e,n){const t=Nt(e);if(!Number.isInteger(n)||n<0||n>=t)throw new Error(`singleTrialRecord: trial ${n} is not one of the record's ${t} trials`);if(t===1)return e;let r=w7.get(e);r===void 0&&(r=new Map,w7.set(e,r));let i=r.get(n);return i===void 0&&(i=zt(e)?iX(e,n):rX(e,n),r.set(n,i)),i}function rX(e,n){const t=e.trials[n],{precomputed_aux_forms:r,...i}=e;return{...i,count:1,trials:[t],precomputed:t.precomputed??{},...t.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:t.precomputed_aux_forms}}}function iX(e,n){const t=c2(e,n),r=e.cparam_combos.flatMap(u=>{const s=qS(u.trials,n);return s===void 0?[]:[{cparams:u.cparams,trials:[{...s,trial_index:nX}],precomputed:s.precomputed??{},...s.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:s.precomputed_aux_forms}}]}),{entry_id:i,result_set:o,...a}=e;return{...a,count:1,cparam_combos:r,model:(t==null?void 0:t.model)??e.model,version:(t==null?void 0:t.version)??e.version,effort:(t==null?void 0:t.effort)===void 0?e.effort:t.effort,trial_metadata:e.trial_metadata===void 0||e.trial_metadata.length===0?e.trial_metadata:[t??{}]}}const Kt="mix",vr={kind:"mix"};function Ni(e){return{kind:"trial",recordTrialIndex:e}}function g$(e){return e.kind==="mix"?Kt:String(e.recordTrialIndex)}function b$(e){return e===Kt?vr:oX(e)?Ni(Number(e)):null}function oX(e){return/^\d+$/.test(e)}function uv(e,n){return e>0?Math.max(0,Math.min(n,e-1)):0}function $7(e,n){return e<2?Ni(0):n.kind==="mix"?vr:Ni(uv(e,n.recordTrialIndex))}function Ln(e,n){if(n===void 0||e.interactionMode!=="ReadTrials")return null;const{resultSet:t}=qn(e.readTrials,{presetData:n});return t.kind==="adhoc"?lO(t.whose,n):t.kind==="methodical"?t.record:null}function ft(e,n){const t=E$(e,n),r=Jr(e,n);if(r===null)return $7(t,vr);if(t===0)return vr;const i=AP(e.ui.readTrials.trial,e.ui.interactionMode==="ReadTrials"&&e.ui.readTrials.adhoc!==null?"adhoc":"methodical",r);return $7(t,i===null?vr:Ni(i))}function Jn(e,n){const t=Ln(e.ui,n);if(t===null)return null;const r=ft(e,n);return r.kind==="mix"?t:tX(t,r.recordTrialIndex)}const aX={point:!1,bounds:!1,sample:!1};function rr(e,n){return n!==void 0?wn(e.ui,{presetData:n}):e.ui.lastYoursWhose}function y$(e,n){return e.ui.interactionMode==="Compare"?aX:MS(rr(e,n),Jn(e,n))}function dt(e,n){return PS(rr(e,n),Jn(e,n),e.ui.inputMode)}function Jr(e,n){return Ln(e.ui,n)}function sv(e,n){return Array.from({length:Nt(e)},(t,r)=>n(r))}function E$(e,n){const t=Jr(e,n);return t?Nt(t):0}function S$(e,n){const t=Jr(e,n);return t?sv(t,r=>pO(t,r)):[]}function cv(e,n){return S$(e,n).map(t=>t==null?void 0:t.reasoning)}function uX(e,n){const t=Jr(e,n);return t?sv(t,r=>c2(t,r)):[]}function A$(e,n,t){return yn(e,nu(n,t))}function w$(e,n){var r;const t=n.yoursCodeRecord;if(ji(t))return(r=A$(Vi(t),e,n))==null?void 0:r.trials[0]}function lv(e,n,t){const r=Ln(n.ui,t);if(!r)return[];const{source:i}=Ie(wn(n.ui,{presetData:t}));if(i==="metho-richcode"||i==="adhoc-plaincode"){const o=r,a=A$(o,e,n);return Array.from({length:Nt(o)},(u,s)=>a?qS(a.trials,s):void 0)}return i==="adhoc-plainnum"?r.trials:[]}function fv(e,n){const t=Jr(e,n);return t?Xt(t):[]}function $$(e,n){const t=Jr(e,n);return t?sv(t,r=>hO(t,r)??{}):void 0}const sX="yours-fixfree-radio";function I$(e,n){return Xe(e)&&n.has_cparams()}function T$(e){const n=e==="yours-plaincode";return`<div class="mode-radio ${sX}"><button class="mode-radio-btn${n?"":" active"}" data-whose="yours-plainnum">fix</button><button class="mode-radio-btn${n?" active":""}" data-whose="yours-plaincode">free</button></div>`}function cX(e,n,t,r){const i=wn(r.ui,{presetData:t}),o=a2(Ie(i).source);let a="";I$(i,n)&&(a+=`<div class="calculator-header-controls">${T$(i)}</div>`);const u=o?Ln(r.ui,t):null;u!==null&&zt(u)&&(a+=lX(n,t,r,u)),e.innerHTML=a}function lX(e,n,t,r){const i=v$(n),o=i.find(a=>a.jtaskGroupId===r.jtask_group_id);return o===void 0?"":_$(o,i,{jprobTemplate:e,jtaskHashGroups:n.jtaskHashGroups,foldOpenById:t.ui.foldOpenById})}function fX(e,n,t,r){var h;const i=wn(r.ui,{presetData:t});if(Xe(i))return e.innerHTML="",!1;const o=Jn(r,t);if(!o)return e.innerHTML='<div style="color: #888; font-size: 13px;">No data.</div>',!1;const a=dt(r,t),u=n.svar_entries().map(d=>d.bareName),s=u.length,c=vO(i,o,a,u),l=c.length;if(l===0)return e.innerHTML='<div style="color: #888; font-size: 13px;">No data for this mode.</div>',!1;const f=l>1;let p='<div class="sample-grid">';for(let d=0;d<l;d++){p+='<div class="sample-col">',f&&(p+=`<div class="sample-col-header">Sample ${d+1}</div>`);for(let m=0;m<s;m++){const v=((h=c[d])==null?void 0:h[m])??"";p+=`<div class="sample-cell">${U(v)}</div>`}p+="</div>"}return p+="</div>",e.innerHTML=p,f}const Ht={point:"point",bounds:"bounds",sample:"distr"},dX="response",pX="timeline-nav",dv="interaction-mode-selector",ym="data-interaction-mode",pv="yours-fixfree-toggle",hX="jprob-selector",hv="sticky-bar",L$="--sticky-bar-h",Lu="options-controls",R$="options-expand-btn",mv="options-panel",Rr="options-panel-open",C$="visible",k$="⚙︎",I7="Settings",N$="jprob-selector-select",M$="/",O$="error-console-btn",P$="view-url-btn";function mX(e,n,t,r,i,o,a){AX(e),vX(o),gX(n,a),F$(e,r),SX(t),EX(i)}function vX(e){const n=document.getElementById(dv);if(n){if(e.available.length<=1){n.hidden=!0,n.innerHTML="";return}n.hidden=!1,n.innerHTML=Tt.filter(t=>e.available.includes(t)).map(t=>{const r=t===e.active,i=r?t:vP[t];return`<button type="button" class="atog-btn interaction-mode-btn${r?" active":""}" ${ym}="${t}" aria-pressed="${r}" title="${Z(`${t} — ${_P[t]}`)}">${i}</button>`}).join("")}}function _X(){const e=document.getElementById(dv);return e!==null&&!e.hidden}function gX(e,n){const t=document.getElementById(pv);if(t){if(!n){t.hidden=!0,t.innerHTML="";return}t.hidden=!1,t.innerHTML=T$(e)}}function bX(){const e=document.getElementById(pv);return e!==null&&!e.hidden}function yX(e,n,t,r,i=ov){var c;const o=new Set(e.map(l=>l.aid).filter(i)),a=[],u=new Set;let s=t;for(const l of e){const f=l.family;if(f===void 0){o.has(l.aid)&&a.push({label:l.aid,value:l.aid});continue}if(u.has(f))continue;u.add(f);const h=(c=[...n[f]??[]].reverse().find(d=>o.has(d.aid)))==null?void 0:c.aid;h!==void 0&&(a.push({label:f,value:h}),f===r&&(s=h))}return{options:a,selectedValue:s}}function EX(e,n=CW(),t=kW(),r=ov){const i=document.getElementById(hX);if(!i)return;const{options:o,selectedValue:a}=yX(n,t,e.currentAid,e.currentFamily,r),u=o.some(l=>l.value===a);i.hidden=!1;const s=u?"":'<option value="" disabled selected>switch</option>',c=o.map(l=>`<option value="${l.value}"${l.value===a?" selected":""}>${l.label}</option>`).join("");i.innerHTML=`<select id="${N$}" class="jprob-selector-select" title="Switch to another problem">${s}${c}<option value="${M$}">≣ Index</option></select>`}function SX(e){const n=document.getElementById(pX);if(!n)return;const{prev:t,next:r,version:i}=e;if(t===void 0&&r===void 0&&i===void 0){n.hidden=!0,n.innerHTML="";return}n.hidden=!1;const o=[];t!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${t}" title="Previous version">◀</button>`),o.push(`<span class="timeline-version">${i??""}</span>`),r!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${r}" title="Next version">▶</button>`),n.innerHTML=o.join("")}function AX(e){const n=document.getElementById(Lu);if(!n)return;const t=n.classList.contains(Rr);let r=`<button class="options-expand-btn${t?" active":""}" id="${R$}" type="button" aria-label="${I7}" title="${I7}" aria-expanded="${t}">${k$}</button>`;r+=`<div class="${mv}${t?` ${C$}`:""}">`,r+=LX(e),r+=`<div class="options-buttons-row"><button id="${P$}" class="g-btn" title="Copy a link to this view (and put it in the address bar)">url</button> <button id="keymap-btn" class="g-btn">keymap</button> <button id="${O$}" class="g-btn">error console</button> <button id="save-all-data-btn" class="g-btn">save all data</button> <button id="load-all-data-btn" class="g-btn">load all data</button></div>`,r+="</div>",n.innerHTML=r,t&&n.classList.add(Rr)}function q$(){const e=document.getElementById(Lu);return(e==null?void 0:e.classList.contains(Rr))??!1}function vv(e){const n=document.getElementById(Lu);if(!n||n.classList.contains(Rr)===e)return;n.classList.toggle(Rr,e);const t=n.querySelector(".options-expand-btn"),r=n.querySelector(`.${mv}`);t&&(t.classList.toggle("active",e),t.setAttribute("aria-expanded",String(e))),r&&r.classList.toggle(C$,e)}function wX(){vv(!q$())}function $X(){vv(!0)}function D$(){vv(!1)}function IX(){const e=document.getElementById(Lu),n=document.getElementById(hv);if(!e||!n)return null;const r=(e.classList.contains(Rr)?e.querySelector(`.${mv}`):null)??n;return{left:e.getBoundingClientRect().left,bottom:r.getBoundingClientRect().bottom}}function F$(e,n){const t=document.getElementById("response-type-toggle");t&&x$(t,e,n,null)}function x$(e,n,t,r){const i=[],o=OS(t,n.ui.inputMode);for(const[u,s]of Object.entries(Ht)){const c=u===o?" active":"",l=t[u]?"":" hidden";i.push(`<button class="atog-btn${c}${l}" data-mode="${u}">${s}</button>`)}const a=r===null?"":`<span>${r}</span>`;e.innerHTML=a+i.join("")}function ci(e){return`pref-${e}`}const TX=new Set(["inputMode"]);function LX(e){const n=[];for(const t of r2)if(!TX.has(t.id)){if(t.type==="boolean"){const r=t.id,i=e.ui[r]?" checked":"";n.push(`<div class="options-pref-row"><label for="${ci(t.id)}" class="option-label">${t.description}</label><input id="${ci(t.id)}" class="option-checkbox pref-checkbox" type="checkbox" data-pref="${t.id}"${i}></div>`)}else if(t.type==="integer"){const i=cn()[t.id]??t.default,o=t.min===void 0?"":` min="${t.min}"`,a=t.step===void 0?"":` step="${t.step}"`;n.push(`<div class="options-pref-row"><label for="${ci(t.id)}" class="option-label">${t.description}</label><input id="${ci(t.id)}" class="pref-number-input" type="number" data-pref-int="${t.id}" value="${i}"${o}${a}></div>`)}}return n.join("")}const RX=`<p>Joint dependence lets you say how your distributions move <em>together</em>, beyond what each one says on its own. You express it as <b>named latents</b>: each latent is one shared influence, described in your own words, with a signed <b>loading</b> on each quantity it touches.</p>
<ul>
<li>A latent&#39;s description must make its <b>positive direction</b> explicit — the loading signs are relative to it, and nothing else records what the latent means.</li>
<li><code>+0.7</code>: the quantity tends to be high when the latent is high. <code>−0.7</code>: it tends to be low. <code>0</code>: the latent does not touch it.</li>
<li><b>Your marginals are unchanged.</b> Whatever dependence you state, each quantity&#39;s own distribution stays exactly as you gave it. Dependence changes only how the quantities move together, never what any one of them looks like alone.</li>
<li>Per quantity, the squared loadings across all latents may sum to at most 1. Whatever is left over is that quantity&#39;s own independent variation; at a total of 1 the latents fully determine it.</li>
</ul>
<h4>Two legitimate stories, same math</h4>
<ul>
<li><b>Correlated error in your own estimates</b> — e.g. &quot;if one of my probabilities is too high, the others likely are too&quot;. The conclusion&#39;s spread then reflects distrust of your own estimation.</li>
<li><b>A shared, unresolved state of the world</b> the problem does not condition on — one mechanism, source, or scenario standing behind several quantities. Its loadings take their signs from that causal structure and are often mixed-sign. The conclusion&#39;s spread then reflects irreducible uncertainty given the evidence.</li>
</ul>
<p>Say which one you mean. And note that dependence does not only widen: loading a ratio&#39;s numerator and its denominator in the same direction makes them rise and fall together, which <em>narrows</em> that ratio. That is sometimes exactly the belief you hold — but check the independent-vs-joint comparison, rather than reasoning from the signs alone.</p>`,B$={joint_dependence:RX,"srcquote-explainer":"Text in this style is source material related to the entity above it."},Cr=`<b>${k$} settings</b>`,CX="joint_dependence";function kX(){return B$[CX]}function NX(){return"<p>Version numbers are semantic versioning inspired, incremented according to:</p><ul><li><b>1st/major</b>: Improved and clean enough over previous major version to run a full set of AI trials.</li><li><b>2nd/minor</b>: Improvements/fixes affecting semantics</li><li><b>3rd/patch</b>: Everything else</li></ul>"}function Em(e){return e?`<b>${U(e)}</b>`:"<i>(unbound)</i>"}const MX={toggle_mnames:"toggle between short and long names for some defined entities",goto_top:"jump to top of the page",goto_calculator:"jump to the Calculator section",switch_whose_mode:"switch between <b>Yours</b> / <b>Adhoc</b> / <b>AI results</b> modes, restoring the last viewed preset in each",toggle_srcquotes_inlined:`toggle source quotes inlined in the text (mirroring what AI agents see when source quotes are enabled) vs. accessible by clicking the <button class="srcquote-glyph" type="button" tabindex="-1">❝</button> buttons. This is a view setting only — it never changes what a preset's estimator actually read`,toggle_framing_notes:"show or hide all framing notes at once, without disturbing which ones the problem itself enables",goto_next_section:"jump to the next top-level section, wrapping from the last back to the first",toggle_long_text_abbrev:"abbreviate or unabbreviate every long block of text at once — the same switch as the <b>Abbreviate long text</b> preference",toggle_settings_shortcuts:`show the ${Cr} dropdown together with this shortcut list; press it again with both showing to hide both`};function OX(){return`<li>When relevant (not all Adhoc / AI-results presets have all response modes), you can switch between estimation response modes <b>${Ht.point}</b> | <b>${Ht.bounds}</b> | <b>${Ht.sample}</b>. For each subjective variable (the cards in the <b>Estimation</b> section) they mean:<ul><li><b>point</b>: A single real value. Use for low-effort estimation.</li><li><b>bounds</b>: A real interval given as <code>low high</code>. Use to incorporate flat uncertainty, without any sampling interpretation. The Calculator will show the interval each compute formula can range over, given your intervals: "≅ [low, high]" means the shown interval is exactly that range; "⫇ [low, high]" means it is an outer enclosure — the true range may be narrower, but never wider. Displayed endpoints are rounded outward, so rounding also never narrows a shown interval.</li><li><b>${Ht.sample}</b>: A belief distribution; Monte Carlo sampling evaluates. This is the advanced mode. The ${Cr} dropdown on the left side of the sticky bar has parameters for controlling the number of iterations, in case the defaults make your experience too slow. When in distribution mode, click the help icon in any Estimation card to learn what you can put in the input fields. The Calculator section has a redundant single input box for the same data; useful for copy-pasting from a read-only Adhoc or AI result.</li></ul></li>`}function H$(){return"<b>fix</b> requires setting each parameter to one of its allowed values in the <b>Parameters</b> section, and your estimates apply to that one setting. <b>free</b> opens a code editor in which you write a function giving your estimates for every allowed parameter combination at once."}function PX(){return Tt.map(e=>`<b>${e}</b>`).join(" | ")}function qX(e,n){const t=Yr(),r=[];n.interactionModeSelector&&r.push(`<p>The ${PX()} buttons switch between the three things you can do here; the ${Em(t.switch_whose_mode)} shortcut cycles through the same modes, and each remembers what you last had selected in it. The selected button shows its full name, the others their initial.</p><ul><li><b>Estimate</b>: explore the problem using your own subjective estimations.</li><li><b>ReadTrials</b>: read one result set — methodical AI trials, or one adhoc response — either as the mixture of its trials' belief distributions or as one trial. Which result set is the side panel at the right edge of the page; which of its trials is the selector under the sticky bar.</li><li><b>Compare</b>: compare results across model configurations.</li></ul>`),r.push("<h4>Sticky bar</h4><ul>"),r.push("<li>On the far right of the sticky bar, there's a dropdown for switching to a different judgement problem (hidden when there are no others).</li>"),f$(e.aid)!==void 0&&r.push("<li>This judgement problem is part of a development timeline exposition sequence. The ◀ and/or ▶ buttons move backward and forward in the timeline.</li>"),n.yoursFixFreeToggle&&r.push(`<li><b>fix</b> | <b>free</b>: ${H$()}</li>`),n.exampleFoldControls&&r.push("<li><b>open</b> unfolds all examples, <b>close</b> folds all. <b>peek</b> saves your fold state and temporarily unfolds all examples, and <b>unpeek</b> restores your fold state.</li>"),n.exampleFoldControlsOffInSettings&&r.push(`<li>Turn on <b>${U(Si("showGlobalExampleControls"))}</b> in the ${Cr} dropdown for sticky-bar buttons that fold or unfold all examples at once.</li>`),r.push(OX()),r.push("</ul>"),r.push(`<h4>Keyboard shortcuts</h4><p>There are just a few, which you can customize by clicking the <b>keymap</b> button in the sticky bar's ${Cr} dropdown. Currently:</p>`),r.push("<ul>");for(const i of Kr){const o=MX[i.id]??U(i.description);r.push(`<li>${Em(t[i.id])} : ${o}</li>`)}return r.push("</ul>"),r.join("")}function DX(){const e=Object.values(Rt).filter(i=>!i.hasTruncWindow),n=Object.entries(Rt).filter(([,i])=>i.hasTruncWindow),t=e.map(i=>`<li><code>${U(i.signature)}</code> — ${U(i.note)}</li>`),r=n.map(([i])=>`<code>${U(i)}(…)</code>`);return`<p>Enter your belief distribution over this variable in one of three forms:</p><ul><li><b>Point mass</b>: <code>pointmass(x)</code> — all probability mass at <code>x</code>.</li><li><b>Distribution family</b> (preferred when one fits your belief), e.g. <code>lognormal(-4.2, 1.3)</code>. Available families:<ul>${t.join("")}</ul>Every family is automatically truncated to the variable's allowed range and renormalized, so e.g. <code>normal(mu, sigma)</code> on a probability variable means a normal truncated to [0, 1]. The ${r.join(", ")} variants take two extra trailing arguments <code>lo, hi</code> — an explicit truncation window — for when your belief has its own truncation. Most important for a heavy-tailed family on an unbounded-range variable (e.g. a Student-t on a log-odds variable), where automatic truncation is a no-op.</li><li><b>Piecewise linear density</b> (fully general): space-separated pairs <code>(x1 y1) (x2 y2) …</code>, minimum 2. x values are sorted positions spanning your uncertainty, anywhere in the variable's allowed range; y values are unnormalized density heights in [0, 1].</li></ul>`}function FX(e,n){const t=Yr(),r=[];return r.push("<p><b>This help text changes based on which interaction mode you are in.</b></p>"),a2(Ie(n).source)&&(r.push("<p>To see detailed results for the selected result set, click the <b>pin</b> checkbox.</p>","<p>An AI's plain text reasoning about one subjective variable shows in that variable's own card, and its notes about the response as a whole in the <b>Response Notes</b> section. Both show the trial the cards' <b>trial</b> selector points at.</p>","<p>To read the code that trial wrote, click <b>View code</b> beside the <b>Estimation</b> heading.</p>"),e.form.length>0&&r.push("<p>To explore compute formula results other than the main conclusion, there's a drop down below next to the <b>formulas</b> / <b>raw responses</b> radio buttons.</p>","<p>Use the <b>stats display</b> dropdown to switch between seeing probabilities as percentages or as odds.</p>")),e.has_cparams()&&Xe(n)&&r.push(`<p><b>fix</b> | <b>free</b> toggle (next to <b>Yours</b>): ${H$()}</p>`),Xe(n)?r.push(`<p>To start from someone else's response, switch to <b>ReadTrials</b> (${Em(t.switch_whose_mode)} shortcut), choose a result set in the side panel at the right edge of the page, and find the <b>Copy to Estimate</b> button.</p><p>From scratch: Suggest starting with <b>point</b> response mode, then try <b>bounds</b>. If you're experienced or courageous, try <b>${Ht.sample}</b> and start with <code>tri(low, peak, hi)</code> or <code>uniform(low, high)</code> lines. For full syntax of distribution inputs accepted, find the help icon in any of <b>Estimation</b> cards above.</p>`):cO(Ie(n).source)&&r.push(`<p>To start your own estimation from this response, find the <b>Copy to Estimate</b> button below.</p><p>For advanced users, in <b>${Ht.sample}</b> mode, there is a second type of <b>Copy to Estimate</b> button inside the <b>Joint-dependence specification</b> section (latent factor copula), when the entry states one.</p>`),r.join("")}function xX(e){const n=U(Si("mcItersPerClickPerPlot")),t=U(Si("mcItersInitialPerPlot")),r=e.itersPerTarget.toLocaleString(),i=["<p>The <b>+</b> button above pools another block of Monte&nbsp;Carlo draws into this plot and redraws it. Draws accumulate — nothing already sampled is thrown away — so the plot starts cheap and you click until its shape stops moving.</p>"];return e.targetCount===1?i.push(`<p>Each click adds <b>${r}</b> draws to this plot`+(e.pooledSampleCount===null?".</p>":` (pooled so far: ${e.pooledSampleCount.toLocaleString()}).</p>`)):i.push(`<p>Each click adds <b>${r}</b> draws to <i>each</i> of the ${e.targetCount.toLocaleString()} plotted points/cells. The setting is a budget for the whole plot, divided equally among the targets it draws, so a plot over a wider axis gets fewer draws per point per click than a single density does — same cost per click, spread thinner.</p>`),e.pooledSampleCount===null?i.push("<p>This plot's button stays yellow: it displays a mean per point/cell rather than a distribution, so the green convergence indicator — which reads a distribution's quantiles — does not apply. Means converge as 1/&radic;n; a few clicks go a long way.</p>"):e.converged?i.push(`<p><b>Green</b>: with ${e.convergedMinSamples.toLocaleString()} or more pooled draws, every quantile of the displayed distribution is pinned to within ${e.displayEpsilon} probability mass at ${e.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound). Green is not a stop sign: further clicks keep sharpening the curve.</p>`):i.push(`<p><b>Yellow &rarr; green</b>: the button turns green at ${e.convergedMinSamples.toLocaleString()} pooled draws, the point where every quantile of the displayed distribution is pinned to within ${e.displayEpsilon} probability mass at ${e.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound).</p>`),i.push(`<p>To change how much a click adds, open ${Cr} in the bar at the top of the page and edit <b>${n}</b>. <b>${t}</b> sets what a plot draws before you click at all.</p>`),i.join("")}const BX={equal_per_trial:"Each contributing trial has <b>equal weight</b>, however many trials its model configuration ran.",equal_per_config:"Each model configuration has <b>equal weight</b>, shared equally among its contributing trials."};function U$(){return`<p><b>mix</b> is the mixture of the selected trials' stated belief distributions. ${BX[WS]}</p><p>A draw from it picks a contributing trial, with its weight as the probability, and then samples that trial's stated distribution. For a formula, the draw samples all of that one trial's quantities together, respecting its stated dependence between them.</p><p>It is a mixture of stated distributions, not the distribution of the trials' point estimates: two trials that each state a narrow distribution around different values mix into a two-peaked one, not a narrow one in between.</p><p>A trial contributes only where it answered. One that gave no response at a parameter combination, or stated no distribution for a quantity, is left out there and never stood in for by its point value or bounds; the view says how many trials contribute wherever that is not all of them.</p><p>In the point view, mix is the same weighted average of the trials' point values; where bounds are offered for several trials, it is the envelope of their bounds.</p>`}function HX(e){const n=U(Si("mcItersPerClickPerPlot")),t=U(Si("mcItersInitialPerPlot")),r=`<b>${e.initialIters.toLocaleString()}</b>`,i=e.stored==="mean"?`<p>The mean beside this plot is <b>mixed from</b> the means the result generator stored for each model configuration in this result set. A mean is all that can be mixed exactly that way, so there is no median, interval or curve here yet. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs ${r} live Monte&nbsp;Carlo draws in your browser from the same estimates and plots them, with their own summary; the stored mean stays on screen so you can compare the numbers. `:e.stored==="curve"?`<p>This plot is drawn from a <b>precomputed</b> curve: the result generator sampled it once, with a far larger draw budget than a browser would spend, and stored the shape. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs ${r} live Monte&nbsp;Carlo draws in your browser from the same estimates, and draws them on the same axis beside the stored curve; both summaries stay on screen so you can compare the numbers. `:`<p>The numbers beside this plot are <b>precomputed</b>: the result generator sampled this quantity once, with a far larger draw budget than a browser would spend, and stored its summary, but no curve to draw. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs ${r} live Monte&nbsp;Carlo draws in your browser from the same estimates and plots them; the precomputed summary stays on screen so you can compare the numbers. `,o=e.stored==="curve"?"<p>Expect the live curve to be the rougher of the two at first — it is the same distribution with fewer draws behind it. ":"<p>Expect the live numbers to stray a little from the precomputed ones at first — they describe the same distribution with fewer draws behind them. ";return i+`The button then becomes the ordinary <b>+</b> accumulate control, adding <b>${e.itersPerTarget.toLocaleString()}</b> draws per click until the live shape stops moving.</p>`+o+`A difference that survives many clicks is worth a closer look.</p><p>Both draw counts are settings: open ${Cr} in the bar at the top of the page and edit <b>${t}</b> and <b>${n}</b>.</p>`}const Mi="mc-accumulate-btn",T7="Sample",L7="Sample more",G$="mc-activate-live-btn",wa="mc-accumulate-help",UX="mc-converged",jo=.05,pi=.01;function GX(e){if(!Number.isInteger(e)||e<1)throw new Error(`distributionCount must be a positive integer, got ${e}`);return Math.ceil(Math.log(2*e/jo)/(2*pi*pi))}const j$=16;function Ru(e,n,t,r,i=1){var f,p;const o=e.parentElement;if(!(o!=null&&o.classList.contains("resizable-canvas-wrapper"))){console.warn("attachMcAccumulateButton: canvas is not wrapped by makeResizable");return}(f=o.querySelector(`.${Mi}`))==null||f.remove(),(p=o.querySelector(`.${wa}`))==null||p.remove();const a=r.itersPerTarget,u=GX(i),s=t!==null&&t>=u,c=document.createElement("button");c.className=Mi+(s?` ${UX}`:""),c.dataset.mcPoolToken=n,c.textContent="+",c.setAttribute("aria-label",L7),c.title=`${L7}: `+(t===null?`pool ${a.toLocaleString()} more MC samples into every plotted point/cell.`:`pool ${a.toLocaleString()} more MC samples into this plot (n=${t.toLocaleString()}). `+(s?`Green: every displayed quantile is within ${pi} probability mass at ${(1-jo)*100}% confidence; further clicks keep sharpening.`:`Turns green when every displayed quantile is within ${pi} probability mass at ${(1-jo)*100}% confidence.`)),o.appendChild(c);const l=mt(()=>xX({itersPerTarget:a,targetCount:r.targetCount,pooledSampleCount:t,converged:s,convergedMinSamples:u,displayEpsilon:pi,confidencePercent:(1-jo)*100}),j$);l.classList.add(wa),o.appendChild(l)}function jX(e,n,t,r,i){var s,c;const o=e.parentElement;if(!(o!=null&&o.classList.contains("resizable-canvas-wrapper"))){console.warn("attachLiveMcActivationButton: canvas is not wrapped by makeResizable");return}(s=o.querySelector(`.${Mi}`))==null||s.remove(),(c=o.querySelector(`.${wa}`))==null||c.remove();const a=document.createElement("button");a.className=`${Mi} ${G$}`,a.dataset.mcLiveActivationToken=n,a.textContent="▶",a.setAttribute("aria-label",T7),a.title=`${T7}: run ${t.toLocaleString()} live Monte Carlo draws in your browser and `+(i==="curve"?"overlay them on the precomputed curve.":i==="summary"?"plot them beside the precomputed numbers.":"plot them beside the stored mean.")+" Nothing is sampled until you ask.",o.appendChild(a);const u=mt(()=>HX({initialIters:t,itersPerTarget:r.itersPerTarget,stored:i}),j$);u.classList.add(wa),o.appendChild(u)}const V$="mixture-coverage",W$="show-single-trial-view",VX="Show single trial view",X$="data-record-trial-index",K$="data-cparams";function Y$(e,n){return e>=n?null:`${e} of ${n} trials contribute here`}function J$(e){const n=e.contributingRecordTrialIndices,t=Y$(n.length,e.recordTrialCount);if(t===null)return"";const r=n.length===1?` <button type="button" class="${W$}" ${X$}="${n[0]}"`+(e.cparams===void 0?"":` ${K$}="${Z(JSON.stringify(e.cparams))}"`)+`>${VX}</button>`:"";return`<span class="${V$}">${t}.${r}</span>`}const WX=256,ut=new Map,$a=new Map;let XX=1;function KX(e){const n=Dt(e),t=ut.get(n);if(t!==void 0)return ut.delete(n),ut.set(n,t),t;const r={token:`mclive-${XX++}`,activated:!1};for(ut.set(n,r),$a.set(r.token,r);ut.size>WX;){const i=ut.keys().next().value;$a.delete(ut.get(i).token),ut.delete(i)}return r}function YX(e){const n=$a.get(e);return n===void 0?!1:(n.activated=!0,!0)}function JX(){ut.clear(),$a.clear()}const zX="no finite mean (the tail is too heavy for one)";function Oi(e,n,t,r,i){return'<div class="result-main">'+(i===""?"":`${i} = `)+`mean ≈ <span class="hl">${xe(e.mean,n,t,r)}</span>, median ≈ <span class="hl">${xe(e.median,n,t,r)}</span></div><div class="result-detail">90% interval: [${xe(e.p5,n,t,r)}, ${xe(e.p95,n,t,r)}]</div>`}const _v="Mean mixed from stored means";function Sm(e,n,t,r){return'<div class="result-main">'+(r===""?"":`${r} = `)+`mean ≈ <span class="hl">${xe(e,n,t,"monte-carlo")}</span></div>`}function ZX(e,n,t){return{valueHtml:`mean <span class="derived-value">${xe(e.mean,n,t,"monte-carlo")}</span>, median <span class="derived-value">${xe(e.median,n,t,"monte-carlo")}</span>`,detailHtml:`<span class="derived-detail">· 90% interval [${xe(e.p5,n,t,"monte-carlo")}, ${xe(e.p95,n,t,"monte-carlo")}]</span>`}}function QX(e,n,t,r){const i=a=>xe(a,n,t,"deterministic"),o=e.mean===null?`<span class="hl">${zX}</span>`:`mean = <span class="hl">${i(e.mean)}</span>`;return'<div class="result-main">'+(r===""?"":`${r}: `)+`${o}, median = <span class="hl">${i(e.median)}</span></div><div class="result-detail">90% interval: [${i(e.p5)}, ${i(e.p95)}]</div>`}const z$={specPointerHtml:`<div class="lloads-spec-pointer">Each trial's joint-dependence specification is shown in <a href="#${Be.ESTIMATION}-section">Estimation</a>.</div>`,couplingIrrelevantNoteHtml:'<div class="code-info">The stated dependence below does not change this view: coupling describes how responses move together, not how any one of them is distributed on its own.</div>'},eK={specPointerHtml:`<div class="lloads-spec-pointer">Each trial's joint-dependence specification is shown in ReadTrials.</div>`,couplingIrrelevantNoteHtml:'<div class="code-info">The stated dependence does not change this view: coupling describes how responses move together, not how any one of them is distributed on its own.</div>'};function gv(e,n,t,r={}){if(e===void 0)return{hasDependence:!1,specHtml:""};const i=n.svar_entries().map(s=>s.bareName);let o,a=!1;if(e===null)o='<div class="lloads-independent-trial">No named latents; sampled independently.</div>';else{const s=oo(e,i);if(s!==null)throw new Error(s);a=_u(e),o=nK(e,i,n,t,r.offerCopyToYours??!1)}const u=a&&!(r.keepFolded??!1);return{hasDependence:a,specHtml:`<details class="lloads-spec-view"${u?" open":""}><summary>Joint-dependence specification</summary><div class="lloads-spec-body">${o}</div></details>`}}function Z$(e,n){const t=n.svar_entries().map(i=>i.bareName);let r=!1;for(const i of e){if(i.lloads===null||i.lloads===void 0)continue;const o=oo(i.lloads,t);if(o!==null)throw new Error(o);r||(r=_u(i.lloads))}return r}function nK(e,n,t,r,i){const o=Fi(t);if(o.length!==n.length)throw new Error(`joint-dependence disclosure has ${n.length} eligible variables but ${o.length} display labels`);const a=new Map(n.map((s,c)=>[s,Ae(o[c],r)])),u=e.latents.map(s=>{const c=Object.entries(s.loadings).map(([l,f])=>{const p=a.get(l);if(p===void 0)throw new Error(`joint-dependence disclosure has no display label for loaded variable ${l}`);return`<li><span class="lloads-svar-label">${p}</span>: <span class="lloads-loading">${rK(f)}</span></li>`}).join("");return`<article class="lloads-latent"><div class="lloads-latent-name">${U(s.name)}</div><div class="lloads-latent-description">${U(s.description)}</div><ul class="lloads-loadings">${c}</ul></article>`}).join("");return tK(e,i)+u}function tK(e,n){return n?`<div class="lloads-copy-row"><button class="copy-to-yours-btn lloads-copy-to-yours-btn" type="button" data-lloads-spec="${Z(JSON.stringify(e))}" title="Copy this joint-dependence specification into your editable Estimate inputs">Copy to Estimate</button></div>`:""}function rK(e){if(Object.is(e,-0)||e===0)return"0";const n=Math.abs(e).toPrecision(6).replace(/\.?0+$/,"");return e>0?`+${n}`:`−${n}`}function Q$(e){switch(e){case"series":return{independent:{color:aV,bandFill:uV},joint:{color:Rw,bandFill:Cw}};case"stored":return{independent:{color:ga,bandFill:null},joint:{color:ga,bandFill:kw}};case"live":return{independent:{color:ba,bandFill:null},joint:{color:ba,bandFill:Nw}}}}const bv="Independent",yv="Stated joint";function eI(e){const n=(t,r)=>{switch(r){case"series":return t;case"stored":return`${t} (precomputed)`;case"live":return`${t} (live MC)`}};return e.flatMap(t=>{const r=Q$(t);return[{label:n(bv,t),color:r.independent.color,dashed:!0},{label:n(yv,t),color:r.joint.color,dashed:!1}]})}function Am(e){const{comparison:n,typeHighlevel:t,statsDisplay:r,targetLabelHtml:i}=e,o=e.canvasId===void 0?"":X2(e.canvasId,e.legend??eI(["series"]));return`<div class="result-label">Joint-dependence comparison (${e.provenanceDetail})</div><div class="dependence-comparison density-result-row"><div class="dependence-comparison-stats density-result-text"><div class="dependence-series-label dependence-series-independent">${bv}</div>`+Oi(n.independent,t,r,"monte-carlo",i)+`<div class="dependence-series-label dependence-series-joint">${yv}</div>`+Oi(n.joint,t,r,"monte-carlo",i)+`</div>${o}</div>`}function iK(e){const{means:n,typeHighlevel:t,statsDisplay:r,targetLabelHtml:i}=e,o=e.canvasId===void 0?"":X2(e.canvasId,e.legend??[]);return`<div class="result-label">Joint-dependence comparison (${e.provenanceDetail})</div><div class="dependence-comparison density-result-row"><div class="dependence-comparison-stats density-result-text"><div class="dependence-series-label dependence-series-independent">${bv}</div>`+Sm(n.independent,t,r,i)+`<div class="dependence-series-label dependence-series-joint">${yv}</div>`+Sm(n.joint,t,r,i)+`</div>${o}</div>`}function nI(e){const n=e.box.querySelector(`#${e.canvasId}`);if(n===null)return!1;const t=[];for(const o of e.layers){const a=Q$(o.palette),u=R7(o.comparison.independent,a.independent,!0),s=R7(o.comparison.joint,a.joint,!1);if(u===null||s===null)return!1;t.push(u,s)}if(t.length===0)return!1;const r=Xr(e.typeHighlevel),i=()=>ya(n,t,r);i(),lt(n,i,{stateHost:e.box,stateKey:e.resizeStateKey}),Hw(n,t,e.typeHighlevel);for(const{comparison:o}of e.layers){const{independent:a,joint:u}=o;if(a.mcPoolToken!==u.mcPoolToken)throw new Error("CRN-paired density results do not share one MC pool token");u.mcPoolToken!==null&&Ru(n,u.mcPoolToken,u.samples.length,{itersPerTarget:e.mcItersPerClick,targetCount:1},t.length)}return!0}function R7(e,n,t){const r=e.samples??e.densityCurve;return r===null?null:{source:r,p5:e.p5,p95:e.p95,color:n.color,dashed:t,bandFill:n.bandFill}}const oK="Precomputed",aK="Live MC",uK=["No precomputed plot here.","▶ draws it with live Monte Carlo."];function tI(e,n){const t=()=>fV(n,uK);t(),lt(n,t,{stateHost:e.box,stateKey:e.resizeStateKey})}function rI(e,n,t,r,i,o){if(n!==null&&n.mcPoolToken!==null){Ru(e,n.mcPoolToken,n.sampleCount,{itersPerTarget:r.mcItersPerClick,targetCount:1},i);return}t!==null&&jX(e,t.token,r.mcIters,{itersPerTarget:r.mcItersPerClick},o)}function iI(e,n){if(!e)return null;const t=n.activationKeyParts();return t===null?null:KX(t)}function Gh(e,n){return`<div class="density-result-row"><div class="density-result-text">${e}</div>${n}</div>`}function oI(e,n,t,r,i,o){const{box:a,canvasId:u}=e,s=(r==null?void 0:r.kind)==="pair"?Aw(r.pair):null,c=s!==null&&s.independent.densityCurve!==null&&s.joint.densityCurve!==null?s:null,l=(r==null?void 0:r.kind)==="means"?r.means:null,f=iI(r!==null,i),h=r===null||((f==null?void 0:f.activated)??!1)?i.run():null,d=[];c!==null&&d.push({comparison:c,palette:"stored"}),h!==null&&d.push({comparison:h,palette:d.length===0?"series":"live"});const m=eI(d.map(g=>g.palette)),v=d.length>0||f!==null,_=[];if(s!==null?_.push(Am({comparison:s,typeHighlevel:n.typeHighlevel,statsDisplay:n.statsDisplay,targetLabelHtml:n.targetLabelHtml,canvasId:v?u:void 0,legend:m,provenanceDetail:`precomputed, ${n.storedTrialsDetail}`})):l!==null&&_.push(iK({means:l,typeHighlevel:n.typeHighlevel,statsDisplay:n.statsDisplay,targetLabelHtml:n.targetLabelHtml,canvasId:v?u:void 0,legend:m,provenanceDetail:`${_v.toLowerCase()}, ${n.storedTrialsDetail}`})),h!==null&&_.push(Am({comparison:h,typeHighlevel:n.typeHighlevel,statsDisplay:n.statsDisplay,targetLabelHtml:n.targetLabelHtml,canvasId:r===null?u:void 0,legend:m,provenanceDetail:`live Monte Carlo, ${n.liveSampleCountDetail(h.joint)}`})),_.push(o),a.innerHTML=_.join(""),d.length>0&&nI({box:a,canvasId:u,layers:d,typeHighlevel:n.typeHighlevel,resizeStateKey:e.resizeStateKey,mcItersPerClick:t.mcItersPerClick}),h===null){const g=a.querySelector(`#${u}`);g&&(d.length===0&&tI(e,g),rI(g,null,f,t,d.length*2,c!==null?"curve":l!==null?"mean":"summary"))}}function aI(e,n,t,r,i){const{box:o,canvasId:a}=e,u=n.typeHighlevel,s=(r==null?void 0:r.kind)==="stats"?sV(r.stats):null,c=iI(r!==null,i),f=r===null||((c==null?void 0:c.activated)??!1)?i.run():null,p=s!==null||f!==null||c!==null,h=s===null||f===null?[]:[{label:oK,color:ga,dashed:!1},{label:aK,color:ba,dashed:!1}],d=h.length===0?`<canvas id="${a}" width="400" height="200"></canvas>`:X2(a,h),m=[];(r==null?void 0:r.kind)==="stats"?m.push(`<div class="result-label">Precomputed (independent, ${n.storedTrialsDetail})</div>`+Gh(Oi(r.stats,u,n.statsDisplay,"monte-carlo",n.targetLabelHtml),p?d:"")):(r==null?void 0:r.kind)==="mean"&&m.push(`<div class="result-label">${_v} (independent, ${n.storedTrialsDetail})</div>`+Gh(Sm(r.mean,u,n.statsDisplay,n.targetLabelHtml),p?d:"")),f!==null&&m.push(`<div class="result-label">Live MC (independent, ${n.liveSampleCountDetail(f)})</div>`+Gh(Oi(f,u,n.statsDisplay,"monte-carlo",n.targetLabelHtml),r!==null?"":d)),o.innerHTML=m.join("");const v=o.querySelector(`#${a}`);if(v===null)return;const _=Xr(u);if(s!==null){const g=[s];f!==null&&g.push({source:f.samples,p5:f.p5,p95:f.p95,color:ba,dashed:!1,bandFill:Nw});const b=()=>ya(v,g,_);b(),lt(v,b,{stateHost:o,stateKey:e.resizeStateKey}),Hw(v,g,u)}else if(f!==null){const g=f.samples,b=()=>Ri(v,g,f.p5,f.p95,_);b(),lt(v,b,{stateHost:o,stateKey:e.resizeStateKey}),Bw(v,g,f.p5,f.p95,u)}else tI(e,v);rI(v,f===null?null:{mcPoolToken:f.mcPoolToken,sampleCount:f.samples.length},c,t,(s===null?0:1)+(f===null?0:1),s!==null?"curve":(r==null?void 0:r.kind)==="mean"?"mean":"summary")}const sK=1;function uI(e,n){const t=Math.max(1,n),r=i=>Math.max(sK,Math.floor(i/t));return{mcIters:r(e.mcItersInitialPerPlot),mcItersPerClick:r(e.mcItersPerClickPerPlot)}}function kr(e){return uI(e,1)}const Ev="Your beliefs specification yields infinite or undefined values. Consider using non-zero numbers.",cK="≅",lK="⫇",sI="The interval computed for this formula from the bounds responses is unbounded on both sides, i.e. carries no information. Point and distribution results are unaffected.";function cI(e,n){return e===-1/0&&n===1/0}function lI(e){return e==="tight"?cK:lK}const Ia="from point estimates";function _r(e){return e.some(Number.isNaN)?"undefined":e.some(n=>!Number.isFinite(n))?"infinite":null}function Ta(){return`<p class="arg-warning">${Ev}</p>`}function fK(e,n,t,r){const i=ca(e,"floor"),o=ca(n,"ceil");return`[${xe(i,t,r)}, ${xe(o,t,r)}]`}function dK(e,n,t,r){const i=(e+n)/2;return Number.isNaN(i)?"undefined":xe(i,t,r)}function La({labelHtml:e,value:n,typeHighlevel:t,statsDisplay:r,labelPrefix:i="",detail:o}){const a=_r([n]);if(a==="undefined")throw new Error(Ev);return`<div class="result-main">${U(i)}${e} = <span class="hl">${xe(n,t,r)}</span></div>`+(o===void 0?"":`<div class="result-detail">${U(o)}</div>`)+(a==="infinite"?Ta():"")}function Sv({labelHtml:e,lo:n,hi:t,tightness:r,typeHighlevel:i,statsDisplay:o,midpointDetailSuffix:a=""}){if(n>t)throw new Error(`Invalid calculated bounds: lo=${n} is greater than hi=${t}`);const u=_r([n,t]);if(u==="undefined")throw new Error(Ev);if(cI(n,t))return`<div class="result-detail">${U(sI)}</div>`;const s=ca(n,"floor"),c=ca(t,"ceil"),l=u==="infinite"&&r==="tight";return`<div class="result-main">${e} ${lI(r)} [<span class="hl">${xe(s,i,o)}</span>, <span class="hl">${xe(c,i,o)}</span>]</div><div class="result-detail">midpoint: ${dK(n,t,i,o)}${U(a)}</div>`+(l?Ta():"")}function Pi(e,n){if(typeof e!="number"||Number.isNaN(e))throw new Error(`${n}: expected a number, got ${JSON.stringify(e)}`);return e}function wm(e,n){if(!Array.isArray(e)||e.length!==2)throw new Error(`${n}: expected [lo, hi], got ${JSON.stringify(e)}`);const t=Pi(e[0],`${n} lo`),r=Pi(e[1],`${n} hi`);if(t>r)throw new Error(`${n}: lo=${t} is greater than hi=${r}`);return[t,r]}function fI(e,n){return Pi(e.point[n],`Code result point data for ${JSON.stringify(n)}`)}function dI(e,n){return wm(e.bounds[n],`Code result bounds data for ${JSON.stringify(n)}`)}function pI(e,n,t){var o;const r=(o=e.compform_point_val)==null?void 0:o[n];if(r!==void 0)return Pi(r,`Code result computed point value for ${n}`);if(!t)throw new Error(`Code result has no computed point value or form implementation for ${n}`);const i=t.params.map(a=>fI(e,a));return Pi(t.point(i),`Directly evaluated code result point value for ${n}`)}function hI(e,n,t){var a,u;const r=(a=e.compform_bounds_val)==null?void 0:a[n];if(r!==void 0){const s=(u=e.compform_bounds_tightness)==null?void 0:u[n];return{interval:wm(r,`Code result computed bounds value for ${n}`),tightness:s==="tight"?"tight":"loose"}}if(!t)throw new Error(`Code result has no computed bounds value or form implementation for ${n}`);if(!t.bounds)return null;if(!t.boundsTightness)throw new Error(`form ${n} has a bounds implementation but no boundsTightness — regenerate form_fns`);const i=t.params.map(s=>dI(e,s)),o=t.bounds(i);return{interval:wm([o.lo,o.hi],`Directly evaluated code result bounds value for ${n}`),tightness:t.boundsTightness}}function zr(e){return e.some(n=>_u(n.lloads))}function Cu(e){return new Error(`A record with stated joint dependence must carry both its independence precompute (${sn}) and joint precompute (${_n}), or neither for ${e}`)}function ku(e,n){if(e===void 0)return;const t=e[sn],r=e[_n];if(!n)return t===void 0?void 0:{stats:t,strengthKey:sn};if(!(t===void 0&&r===void 0)){if(t===void 0||r===void 0)throw Cu("live evaluation");return{stats:r,strengthKey:_n}}}function mI(e){if(e===void 0)return null;const n=e[sn],t=e[_n];if(n===void 0&&t===void 0)return null;if(n===void 0||t===void 0)throw Cu("live comparison");return{independent:n,joint:t}}function Zr(e,n,t){var r;return t?e.precomputed:(r=e.precomputed_aux_forms)==null?void 0:r[n]}function vI(e,n,t,r){return ku(Zr(e,n,n===t),r)}function _I(e,n,t){var r;return t||(r=e.aux_form_means)==null?void 0:r[n]}function gI(e,n,t,r){const i=_I(e,n,t);if(i===void 0)return;const o=i[sn],a=i[_n];if(!r)return o===void 0?void 0:{mean:o,strengthKey:sn};if(!(o===void 0&&a===void 0)){if(o===void 0||a===void 0)throw Cu("explicit sampling");return{mean:a,strengthKey:_n}}}function pK(e,n,t){const r=_I(e,n,t);if(r===void 0)return null;const i=r[sn],o=r[_n];if(i===void 0&&o===void 0)return null;if(i===void 0||o===void 0)throw Cu("explicit sampling");return{independent:i,joint:o}}const hK=5,mK="rgb(59, 130, 246)",vK="Dots show each trial's own distribution mean.",_K="Lines show each trial's own distribution mean.",gK=" Each comes from joint or independent sampling according to that trial's stated coupling.",$m=2,bI="code-density",Im="code-density-canvas",bK="code-line",yK="code-heatmap",C7=["#c44","#44c","#2a9d4a","#c84","#84c","#2aa","#c4c","#888","#ca4"];function EK(e){return e.startsWith("form:")?e.slice(5):e}function yI(e,n,t){return e.form.filter(r=>LE(r,n)).map(r=>{const i=(t==null?void 0:t[r.id])??null;return{kind:"formula",id:r.id,bareId:EK(r.id),typeHighlevel:(i==null?void 0:i.typeHighlevel)??r.type_highlevel,isConclusion:r.id===e.conclusion_form_or_none(),formEntry:i}})}function EI(e){return e.svar_entries().map(({bareName:n,decl:t})=>({kind:"raw_response",bareName:n,typeHighlevel:t.type_highlevel,isConclusion:!1}))}function SI(e,n,t,r){const i=yI(e,t,r),o=EI(e);if(n.ui.codePlotTargetKind==="raw_response"&&o.length>0)return o.find(c=>c.bareName===n.ui.codePlotRawResponseName)??o[0];if(i.length===0)return o[0]??null;const u=e.conclusion_form_or_none(),s=n.ui.codePlotFormulaId||u;return i.find(c=>c.id===s)??i.find(c=>c.id===u)??i[0]}function SK(e){return{key:e.id,formEntry:e.formEntry}}function AI(e,n){if(n===null)throw new Error(`Distribution view for ${e.id} has no sample evaluator`);return n}function wI(e,n,t){if(n.formEntry===null)throw new Error(`Distribution view for ${e.id} requires its generated form implementation`);const r=Di(n.formEntry,t);return{paramKeys:r.params,combine:r.point}}function Av(e,n,t){return n.kind==="raw_response"?fI(e,n.bareName):pI(e,n.id,n.formEntry&&Di(n.formEntry,t))}function AK(e,n,t){return n.kind==="raw_response"?{interval:dI(e,n.bareName),tightness:"tight"}:hI(e,n.id,n.formEntry&&Di(n.formEntry,t))}function wK(e,n){if(e.length===0)return null;const t=[...e].sort((i,o)=>i-o),r=i=>{const o=Math.min(t.length-1,Math.max(0,Math.round(i*(t.length-1))));return t[o]};return{count:e.length,mean:gu(e,n),median:r(.5),p5:r(.05),p95:r(.95)}}function $I(e,n,t){return wK(n.trials.map(r=>Av(r,t,n.cparams)),ct(e,n.trials))}function yn(e,n){for(const t of e.cparam_combos){let r=!0;for(const i of e.cparam_names)if(t.cparams[i]!==n[i]){r=!1;break}if(r)return t}return null}function wv(e,n,t){const r=new Set;for(const i of e.cparam_combos){const o=i.cparams[n];o!==void 0&&r.add(o)}return t?t.filter(i=>typeof i!="boolean"&&r.has(i)):Array.from(r)}function Nu(e,n){return n[e]!==!1}function $K(e,n){let t=0;for(const r of e)n[r]===!1&&t++;return t}function II(e,n){return e.filter(t=>n[t]===!1)}function TI(e,n){var t;if(n.kind==="formula")return(t=ku(Zr(e,n.id,n.isConclusion),zr(e.trials)))==null?void 0:t.stats}function IK(e,n){return n.kind!=="formula"?null:mI(Zr(e,n.id,n.isConclusion))}function LI(e,n){var t;if(n.kind==="formula")return(t=gI(e,n.id,n.isConclusion,zr(e.trials)))==null?void 0:t.mean}function TK(e,n){return n.kind!=="formula"?null:pK(e,n.id,n.isConclusion)}function LK(e,n){var t;if(n.kind==="formula")return(t=ku(Zr(e,n.id,n.isConclusion),zr([e])))==null?void 0:t.stats.mean}function Mu(e,n,t){var o;if(((o=n.formEntry)==null?void 0:o.sampleStage)!==void 0)throw new Error(`Distribution view for ${n.id} is not supported for formulas with E[·] barriers (v1)`);const{paramKeys:r,combine:i}=wI(n,t,e.cparams);for(const a of e.trials){const u=r.filter(s=>!hw(a.sample[s]));if(u.length>0)throw new Error(`Code distribution MC for ${t.key}: a trial lacks sample data for parameter(s) ${JSON.stringify(u)}`)}return{key:t.formEntry===null?t.key:AE(t.key,t.formEntry,e.cparams),params:r,typeHighlevel:n.typeHighlevel,point:i,bounds:null,boundsTightness:null}}function RI(e,n,t){const r=Kn([e],[1],"sample",t);if(r.mode!=="sample")throw new Error(`Exact distribution for ${n.bareName} needs sample-mode inputs`);const i=r.trials[0].specs[n.bareName];if(i===void 0)throw new Error(`Exact distribution for ${n.bareName}: a trial has no sample response`);return Ii(i,r.ranges[n.bareName])}function CI(e,n,t,r){return{distribs:n.trials.map(i=>RI(i,t,r)),weights:ct(e,n.trials)}}function RK(e,n){return n.kind==="raw_response"?!0:e.cparam_combos.some(t=>t.trials.some(r=>Zr(r,n.id,n.isConclusion)!==void 0))}function CK(e,n,t,r){if(n.kind==="raw_response"){const i=vw(RI(e,n,t));if(i===null){r&&(r.encountered=!0);return}return i}return LK(e,n)}function kK(e,n,t,r,i,o){const a=Mu(n,t,r);return Yn(a,Kn(n.trials,ct(e,n.trials),"sample",i),{onIncompleteTrial:"error",mcIters:o.mcIters,mcItersPerClick:o.mcItersPerClick})}function NK(e,n,t,r,i,o){const a=Mu(n,t,r);return Uj(a,Kn(n.trials,ct(e,n.trials),"sample",i),{onIncompleteTrial:"error",mcIters:o.mcIters,mcItersPerClick:o.mcItersPerClick})}function MK(e,n,t,r,i,o,a,u){if(t.kind==="raw_response"){const f=CI(e,n,t,i),p=_w(f.distribs,f.weights);if(p===null){u&&(u.encountered=!0);return}return{mean:p}}const s=TI(n,t);if(s)return s;const c=LI(n,t);if(c!==void 0)return{mean:c};const l=NK(e,n,t,AI(t,r),i,o);return l.mcPoolToken!==null&&(a==null||a.add(l.mcPoolToken)),l}function kI(e){var n;return e===null?'<div class="code-info">No distribution plot target is available.</div>':e.kind==="formula"&&((n=e.formEntry)==null?void 0:n.sampleStage)!==void 0?'<div class="code-info">Distribution view is not yet supported for formulas containing E[·] aggregation.</div>':null}function NI(e,n,t,r){const i=n.kind==="formula"?SK(n):null,o=IE(e.svar_entries()),a=uI(t,r),u=new Set,s={encountered:!1};return{sampleTarget:i,paramRanges:o,statsForCombo:(c,l)=>MK(c,l,n,i,o,a,u,s),trialSampleMeanFor:c=>RK(c,n)?l=>CK(l,n,o,s):void 0,attachFollowUps:c=>{if(u.size>0){const l=c.querySelector("#code-line-canvas, #code-heatmap-canvas");l&&Ru(l,Sw([...u]),null,{itersPerTarget:a.mcItersPerClick,targetCount:r})}s.encountered&&c.insertAdjacentHTML("beforeend",JK)}}}function MI(e,n,t){let r=t.reduce((i,o)=>i*o,1);for(const i of e)r*=(n.get(i)??[]).length;return r}function OK(e){if(e===void 0||e==="probability")return[0,1]}function PK(e){return e==="probability"?[0,1]:void 0}function OI(e,n){const t=(n==null?void 0:n.kind)==="formula"&&n.isConclusion,r=(n==null?void 0:n.typeHighlevel)??e.config.conclusion_type_highlevel;return{heatmapValueRange:t?OK(e.config.conclusion_type_highlevel):PK(r),linePlotYRangePaddingPercent:r==="probability"?hK:void 0}}function Qr(e,n,t,r){return S2(n.ui.cparamValues[e],t==null?void 0:t.default_value,r)}function qK(e,n,t){if($K(e.cparam_names,t.ui.cparamPinned)>0)return null;const r={};for(const i of e.cparam_names){const o=n.find_cparam(i),a=wv(e,i,o==null?void 0:o.allowed_values);r[i]=Qr(i,t,o,a)}return yn(e,r)}function DK(e){if(e.length===0)return;const n=e[0].cparam_names;for(let t=1;t<e.length;t++){const r=e[t].cparam_names;if(r.length!==n.length||!r.every((o,a)=>o===n[a]))throw new Error(`validateRecsCparamCompat: incompatible cparam_names: ${JSON.stringify(n)} vs ${JSON.stringify(r)}. Cannot sweep across published entries with mismatched cparam shapes.`)}}function PI(e,n,t,r,i){const o=new Map;for(let u=0;u<t.length;u++){const s={...r,[n]:t[u]},c=yn(e,s);if(c)for(const l of c.trials){const f=i(l,c);if(f===void 0)continue;const p=kt(l),h=o.get(p),d={x:u,y:f};h?h.push(d):o.set(p,[d])}}const a=FK(e);return{series:[...o.entries()].sort(([u],[s])=>u-s).map(([u,s])=>({points:s,...a.styles.get(u)})),legend:a.legend}}function FK(e){const n=new Map,t=[];return _2(e).forEach((r,i)=>{if(r.configuration===null){for(const u of r.trials)n.set(u.recordTrialIndex,{label:`trial ${u.trialNumber}`});return}const o=h2(Sn(r.configuration)),a=C7[i%C7.length];t.push({label:o,color:a});for(const u of r.trials)n.set(u.recordTrialIndex,{label:`${o} trial ${u.trialNumber}`,color:a})}),{styles:n,legend:t}}function xK(e){return(n,t)=>Av(n,e,t.cparams)}function qI(e,n,t,r,i,o,a){const u=t.map(String);if(i==="average"){const s=[],c=[];for(let l=0;l<t.length;l++){const f={...r,[n]:t[l]},p=yn(e,f);if(!p)continue;const h=o?o(e,p):p.precomputed[sn];if(h&&(s.push({x:l,y:h.mean}),a!==void 0))for(const d of p.trials){const m=a(d,p);m!==void 0&&c.push({x:l,y:m})}}return{series:[{points:s,label:"avg"}],xLabels:u,scatterPoints:c,legend:[]}}if(a===void 0)throw new Error("Separate mode of a distribution sweep needs a per-trial mean source");return{...PI(e,n,t,r,a),xLabels:u,scatterPoints:[]}}function DI(e,n,t,r,i,o,a){const u=t.map(String),s=i.map(String),c=[];for(let l=0;l<i.length;l++){const f=[];for(let p=0;p<t.length;p++){const h={...o,[n]:t[p],[r]:i[l]},d=yn(e,h);if(!d){f.push(null);continue}const m=a?a(e,d):d.precomputed[sn];f.push((m==null?void 0:m.mean)??null)}c.push(f)}return{cells:c,xLabels:u,yLabels:s,xAxisLabel:n,yAxisLabel:r}}function BK(e,n,t,r,i,o){const a=t.map(String);if(i==="average"){const u=[];for(let s=0;s<t.length;s++){const c={...r,[n]:t[s]},l=yn(e,c);if(!l)continue;const f=$I(e,l,o);f&&u.push({x:s,y:f.mean})}return{series:[{points:u,label:"avg"}],xLabels:a,scatterPoints:[],legend:[]}}return{...PI(e,n,t,r,xK(o)),xLabels:a,scatterPoints:[]}}function HK(e,n,t,r,i,o,a){const u=t.map(String),s=i.map(String),c=[];for(let l=0;l<i.length;l++){const f=[];for(let p=0;p<t.length;p++){const h={...o,[n]:t[p],[r]:i[l]},d=yn(e,h),m=d?$I(e,d,a):null;f.push((m==null?void 0:m.mean)??null)}c.push(f)}return{cells:c,xLabels:u,yLabels:s,xAxisLabel:n,yAxisLabel:r}}function FI(e,n,t,r,i){var f;const o=yI(e,t,i),a=EI(e);if(o.length===0&&a.length===0)return"";const u=(r==null?void 0:r.kind)??"formula",s=(r==null?void 0:r.kind)==="formula"?r.id:n.ui.codePlotFormulaId||e.conclusion_form_or_none(),c=(r==null?void 0:r.kind)==="raw_response"?r.bareName:n.ui.codePlotRawResponseName||(((f=a[0])==null?void 0:f.bareName)??"");let l='<div class="code-plot-target-controls">';if(e.form.length>0&&(l+='<div class="code-plot-target-kind">',l+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="formula"${u==="formula"?" checked":""}${o.length===0?" disabled":""}> formulas</label>`,l+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="raw_response"${u==="raw_response"?" checked":""}${a.length===0?" disabled":""}> raw responses</label>`,l+="</div>"),u==="formula")if(o.length>1){l+='<select class="code-plot-formula-select" aria-label="Plot formula">';for(const p of o)l+=`<option value="${Z(p.id)}"${p.id===s?" selected":""}>${U(p.bareId)}</option>`;l+="</select>"}else o.length===1&&(l+=`<span class="code-plot-target-single">${U(o[0].bareId)}</span>`);else if(a.length>1){l+='<select class="code-plot-raw-response-select" aria-label="Plot raw response">';for(const p of a)l+=`<option value="${Z(p.bareName)}"${p.bareName===c?" selected":""}>${U(p.bareName)}</option>`;l+="</select>"}else a.length===1&&(l+=`<span class="code-plot-target-single">${U(a[0].bareName)}</span>`);return l+="</div>",l}function xI(e,n,t,r,i,o,a){if(!i||!o)return"";const u={};for(const s of e.cparam_names){const c=r.find_cparam(s),l=t.get(s)??[];if(l.length===0)return"";const f=Qr(s,n,c,l);if((c!==void 0?Ua(c.allowed_values):typeof f=="string"?"string":"number")==="string"){u[s]=f;continue}const h=Number(f);if(!Number.isFinite(h))return"";u[s]=h}return i(u)?"":`<p class="arg-warning">${a(o)}</p>`}const UK="These controls change only this plot.",GK="cparam-controls-scope-note";function jK(e,n,t,r,i,o,a,u,s,c,l){const f=xI(n,r,i,t,s,c,l);let p=FI(t,r,o,a,u);p+=f+'<div class="cparam-controls">';const h=BI(n.cparam_names,t,r,i);p+=h.html,h.rowCount>0&&(p+=`<p class="${GK}">${U(UK)}</p>`),p+="</div>",e.innerHTML=p}function BI(e,n,t,r){let i="",o=0;for(const a of e){const u=n.find_cparam(a),s=r.get(a)??[];if(s.length===0)continue;const c=Qr(a,t,u,s),l=s.indexOf(c),f=Nu(a,t.ui.cparamPinned),p=(u==null?void 0:u.longname)??a;i+='<div class="cparam-row">',i+=`<label class="cparam-label">${U(p)}</label>`,i+=`<input type="range" class="cparam-slider" data-cparam="${a}" `,i+=`min="0" max="${s.length-1}" step="1" value="${l>=0?l:0}" `,i+=`${f?"":"disabled "}`,i+=`data-values='${U(JSON.stringify(s))}'>`,i+=`<span class="cparam-value-label">${U(String(c))}</span>`,i+='<label class="cparam-pin-label"><input type="checkbox" class="cparam-pin-checkbox" ',i+=`data-cparam="${a}"${f?" checked":""}> pin</label>`,i+="</div>",o++}return{html:i,rowCount:o}}function k7(e){return console.warn(`code viewer controls sync: ${e}; falling back to a full controls rebuild`),!1}function VK(e,n,t,r,i,o,a,u){const s=e.querySelector(".cparam-controls");if(!s)return k7("no existing .cparam-controls block");const c=xI(n,r,i,t,o,a,u),l=e.querySelector(":scope > .arg-warning");c===""?l==null||l.remove():l?l.outerHTML=c:s.insertAdjacentHTML("beforebegin",c);for(const f of n.cparam_names){const p=i.get(f)??[];if(p.length===0)continue;const h=t.find_cparam(f),d=Qr(f,r,h,p),m=p.indexOf(d),v=s.querySelector(`.cparam-slider[data-cparam="${f}"]`),_=v==null?void 0:v.closest(".cparam-row"),g=_==null?void 0:_.querySelector(".cparam-value-label"),b=_==null?void 0:_.querySelector(".cparam-pin-checkbox");if(!v||!g||!b)return k7(`cparam row for ${f} is missing expected controls`);const y=Nu(f,r.ui.cparamPinned);v.value=String(m>=0?m:0),v.disabled=!y,g.textContent=String(d),b.checked=y}return!0}function WK(e){return`<div class="sweep-mode-toggle"><button class="sweep-mode-btn${e==="average"?" active":""}" data-sweep-mode="average">Average</button><button class="sweep-mode-btn${e==="separate"?" active":""}" data-sweep-mode="separate">Separate</button></div>`}const $v='<div class="code-info">No data for this parameter combination.</div>';function Ou(e,n,t){if(e.kind==="formula"&&e.isConclusion){const a=bA(n,t);if(a!==null)return a}let r,i;if(e.kind==="raw_response")r=`svar:${e.bareName}`,i=e.bareName;else{const a=n.form.find(u=>u.id===e.id);if(!a)throw new Error(`Code plot formula ${e.id} is not in the template`);r=RE(e.id,a.sexpr),i=e.bareId}const o=CE(r);return Ae(n.get_display_expr(o)??i,t)}function XK(e,n,t,r,i,o,a){const u=yn(n,t);if(!u){e.innerHTML=$v;return}if(!r){e.innerHTML='<div class="code-info">No point plot target is available.</div>';return}if(u.trials.length===0)throw new Error("Code point result has no trials for the selected parameter combination");const s=u.trials.map(p=>Av(p,r,u.cparams)),c=gu(s,ct(n,u.trials)),l=r.typeHighlevel,f=s.length===1?Ia:`per trial: ${s.map(p=>xe(p,l,a.ui.probAsOdds)).join(", ")}`;e.innerHTML=La({labelHtml:Ou(r,i,o),value:c,typeHighlevel:l,statsDisplay:a.ui.probAsOdds,labelPrefix:s.length===1?"":"mean ",detail:f})}function KK(e,n,t,r,i,o,a){const u=yn(n,t);if(!u){e.innerHTML=$v;return}if(!r){e.innerHTML='<div class="code-info">No bounds plot target is available.</div>';return}if(!u2(n)||u.trials.length!==1)throw new Error(`Code bounds display requires one trial; record count=${n.count}, selected combo trials=${u.trials.length}`);const s=AK(u.trials[0],r,u.cparams);if(!s){e.innerHTML=`<div class="code-info">${U(co)}</div>`;return}const[c,l]=s.interval;e.innerHTML=Sv({labelHtml:Ou(r,i,o),lo:c,hi:l,tightness:s.tightness,typeHighlevel:r.typeHighlevel,statsDisplay:a.ui.probAsOdds})}function N7(e,n,t,r,i,o,a,u,s,c,l){HI(e,n,t,r,i,o,a,u,s,c,l,!1)}function M7(e,n,t,r,i,o,a,u,s,c,l){HI(e,n,t,r,i,o,a,u,s,c,l,!0)}function HI(e,n,t,r,i,o,a,u,s,c,l,f){s2(t);const p=PS(a,t,o.ui.inputMode),h=SI(r,o,p,s),d=new Map;for(const S of t.cparam_names){const T=r.find_cparam(S),R=wv(t,S,T==null?void 0:T.allowed_values);d.set(S,R)}f&&VK(e,t,r,o,d,c,l,S=>Ae(S,i))||jK(e,t,r,o,d,p,h,s,c,l,S=>Ae(S,i));const v=II(t.cparam_names,o.ui.cparamPinned),_=v.length,g=o.ui.codeSweepMode,b={};for(const S of t.cparam_names)if(Nu(S,o.ui.cparamPinned)){const T=r.find_cparam(S),R=d.get(S)??[];b[S]=Qr(S,o,T,R)}const{heatmapValueRange:y,linePlotYRangePaddingPercent:E}=OI(r,h);if(p==="bounds"){_>0?n.innerHTML='<div class="code-info">Pin every axis to display code-response bounds.</div>':KK(n,t,b,h,r,i,o);return}let w=null;if(p==="sample"){const S=kI(h);if(h===null||S!==null){n.innerHTML=S;return}w=NI(r,h,u,MI(v,d,[]))}const I=(w==null?void 0:w.sampleTarget)??null,C=(w==null?void 0:w.paramRanges)??null,L=w==null?void 0:w.statsForCombo,$=w==null?void 0:w.trialSampleMeanFor(t),A=p;if(_===0)if(p==="point")XK(n,t,b,h,r,i,o);else{if(h===null||C===null)throw new Error("Sample-mode code density routing has no resolved sample target");QK(n,t,o,u,b,h,I,C,r,Ou(h,r,i),ht(Ie(a).source))}else if(_===1)nY(n,t,v[0],d,b,g,E,h,A,L,$);else if(_===2)tY(n,t,v,d,b,y,h,A,L);else{const S=t.cparam_names.length-$m;n.innerHTML=`<div class="code-info"><p>Pin at least ${S} parameter${S===1?"":"s"} to visualize results.</p><p>Currently ${_} parameter${_===1?"":"s"} unpinned.</p></div>`}w==null||w.attachFollowUps(n)}function YK(e,n,t,r,i,o){return r.formEntry===null?null:[...ww(Mu(n,t,r),Kn(n.trials,ct(e,n.trials),"sample",i),{onIncompleteTrial:"error",mcIters:o.mcIters,mcItersPerClick:o.mcItersPerClick}),"target",r.key]}const JK='<div class="code-info">Some points are not plotted: the response there has no finite mean, so there is no value to place on this axis. Its distribution view still shows an exact median and interval.</div>';function zK(e,n,t,r){const i=e.map(o=>`${xe(o.x,t,r,"deterministic")} (${o.count} of ${n})`).join(", ");return`<div class="code-info">Point-mass responses: ${U(i)}. Each is drawn as a spike whose height is its share of the responses, not a density.</div>`}function ZK(e,n,t,r,i,o,a,u,s,c){const{distribs:l,weights:f}=CI(n,t,r,i),p=bw(l,f),h=gw(l,f),d=Ow(l,f),m=r.typeHighlevel,v=o.ui.probAsOdds,_=l.length,g=[`<div class="result-label">Exact (${o2(c,_)})</div>`,'<div class="density-result-row"><div class="density-result-text">'+QX(p,m,v,a)+`</div><canvas id="${Im}" width="400" height="200"></canvas></div>`];h.length>0&&g.push(zK(h,_,m,v)),u&&(g.push(s.couplingIrrelevantNoteHtml),g.push(s.specPointerHtml)),e.innerHTML=g.join("");const b=e.querySelector(`#${Im}`);if(!b)return;const y=Pw(d,m),E=[p.p5,p.p95],w=()=>Ci(b,d,y,E);w(),lt(b,w,{stateHost:e,stateKey:bI}),Uw(b,d,y,m,E)}function QK(e,n,t,r,i,o,a,u,s,c,l){const f=yn(n,i);if(!f){e.innerHTML=$v;return}UI(e,n,f,t,r,o,a,u,s,c,z$,l);const p=J$({contributingRecordTrialIndices:f.trials.map(kt),recordTrialCount:n.count,cparams:f.cparams});p!==""&&e.insertAdjacentHTML("afterbegin",`<div class="code-info">${p}</div>`)}function UI(e,n,t,r,i,o,a,u,s,c,l,f){const p=o.typeHighlevel,h=Z$(t.trials,s);if(o.kind==="raw_response"){ZK(e,n,t,o,u,r,c,h,l,f);return}const d=AI(o,a),m=kr(i),v={box:e,canvasId:Im,resizeStateKey:bI},_={typeHighlevel:p,statsDisplay:r.ui.probAsOdds,targetLabelHtml:c,storedTrialsDetail:o2(f,t.trials.length),liveSampleCountDetail:E=>`n=${E.samples.length.toLocaleString()}`},g=()=>YK(n,t,o,d,u,m);if(h){const E=IK(t,o),w=E===null?TK(t,o):null;oI(v,_,m,E!==null?{kind:"pair",pair:E}:w!==null?{kind:"means",means:w}:null,{run:()=>W2(Mu(t,o,d),Kn(t.trials,ct(n,t.trials),"sample",u),{onIncompleteTrial:"error",mcIters:m.mcIters,mcItersPerClick:m.mcItersPerClick}),activationKeyParts:g},l.specPointerHtml);return}const b=TI(t,o),y=b===void 0?LI(t,o):void 0;d.formEntry===null&&b===void 0&&y===void 0&&wI(o,d,t.cparams),aI(v,_,m,b!==void 0?{kind:"stats",stats:b}:y!==void 0?{kind:"mean",mean:y}:null,{run:()=>kK(n,t,o,d,u,m),activationKeyParts:g})}function eY(e){return e.length===0?{}:{scatterOverlay:{points:e,color:mK}}}function GI(e,n){const t=n.kind==="formula"?gK:"";return`<div class="code-info" style="margin-top: 6px;">${e}${t}</div>`}function Iv(e,n){return e.length===0||n===null?"":GI(vK,n)}function nY(e,n,t,r,i,o,a,u,s,c,l){const f=r.get(t)??[],p=s==="sample",h=!p||l!==void 0,d=n.count>1&&h,m=d?o:"average",{series:v,xLabels:_,scatterPoints:g,legend:b}=u===null?{series:[],xLabels:f.map(String),scatterPoints:[],legend:[]}:p?qI(n,t,f,i,m,c,l):BK(n,t,f,i,m,u);let y="";d&&(y+=WK(m),m==="separate"?y+=p&&u!==null?GI(_K,u):'<div class="code-info" style="margin-top: 6px;">Separate mode shows per-trial point values.</div>':p||(y+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>')),y+=Iv(g,u),Tv(e,{series:v,xLabels:_,scatterPoints:g,legend:b},t,a,y)}function Tv(e,{series:n,xLabels:t,scatterPoints:r,legend:i},o,a,u){let s='<div class="code-plot-container">';i.length>0&&(s+=Iw(i.map(l=>({...l,dashed:!1})),"Model configuration line colours")),s+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',s+=u,s+="</div>",e.innerHTML=s;const c=e.querySelector("#code-line-canvas");if(c){const l={xLabels:t,xAxisLabel:o,...a===void 0?{}:{yRangePaddingPercent:a},...eY(r)};p7(c,n,l),lt(c,()=>p7(c,n,l),{stateHost:e,stateKey:bK})}}function tY(e,n,t,r,i,o,a,u,s){const c=t[0],l=t[1],f=r.get(c)??[],p=r.get(l)??[],h=u==="sample",d=h?DI(n,c,f,l,p,i,s):a?HK(n,c,f,l,p,i,a):{cells:[],xLabels:f.map(String),yLabels:p.map(String),xAxisLabel:c,yAxisLabel:l};Ra(e,d,o,h?"":'<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>')}function Ra(e,n,t,r){t&&(n.valueRange=t);const{width:i,height:o}=e$(n);let a='<div class="code-plot-container">';a+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${i}" height="${o}"></canvas>`,a+=r,a+="</div>",e.innerHTML=a;const u=e.querySelector("#code-heatmap-canvas");u&&(_7(u,n),lt(u,()=>_7(u,n),{stateHost:e,stateKey:yK}))}function jI(e,n){if(n.length!==e.positions.length)throw new Error(`entry-axis sweep: the ${e.title} axis has ${e.positions.length} positions but was given ${n.length} entries`)}function VI(e,n,t){var i;if(e===null)return null;const r=yn(e,n);return r===null?null:((i=t(e,r))==null?void 0:i.mean)??null}function rY(e,n){const t=new Map;for(const r of n){const i=e.positions[r.x].segmentKey,o=t.get(i);o?o.push(r):t.set(i,[r])}return Array.from(t,([r,i])=>({points:i,label:r,...FV}))}function iY(e,n,t,r,i){jI(e,n);const o=[],a=[];return n.forEach((u,s)=>{if(u===null)return;const c=yn(u,t);if(c===null)return;const l=r(u,c);if(l===void 0)return;o.push({x:s,y:l.mean});const f=i==null?void 0:i(u);if(f!==void 0)for(const p of c.trials){const h=f(p,c);h!==void 0&&a.push({x:s,y:h})}}),{series:rY(e,o),xLabels:e.positions.map(u=>u.tickLabel),scatterPoints:a,legend:[]}}function oY(e,n,t,r,i,o){return jI(e,n),{cells:n.map(a=>r.map(u=>VI(a,{...i,[t]:u},o))),xLabels:r.map(String),yLabels:e.positions.map(a=>a.tickLabel),xAxisLabel:t,yAxisLabel:e.title}}function aY(e,n,t){const{jtaskGroupAxis:r,configurationAxis:i,entries:o}=e;return{cells:i.positions.map((a,u)=>r.positions.map((s,c)=>VI(o[c][u],n,t))),xLabels:r.positions.map(a=>a.tickLabel),yLabels:i.positions.map(a=>a.tickLabel),xAxisLabel:r.title,yAxisLabel:i.title}}const Ca="data-mixture-row",Lv="data-mixture-value",WI="mixture-group-selector",uY="mixture-group-row",sY="mixture-group-row-label",cY="mixture-group-box",lY="mixture-group-box-unavailable",XI={agentCli:"Agent CLI",modelVersion:"Model",effort:"Effort"},ka="unavailable";function fY(e,n){e.className=WI,e.innerHTML=fP.map(t=>dY(t,n.interpretation.rows[t],n.disabled)).join("");for(const t of e.querySelectorAll('input[type="checkbox"]'))t.indeterminate=t.dataset.mixtureState==="partial"}function dY(e,n,t){const r=n.length===0?'<span class="mixture-group-row-empty">none published</span>':n.map(i=>pY(e,i,t)).join("");return`<div class="${uY}"><span class="${sY}">${XI[e]}</span>`+r+"</div>"}function pY(e,n,t){const r=t||n.disabled&&!n.unavailable,i=n.unavailable?` ${lY}`:"",o=n.unavailable?`${n.hoverText} — ${ka} in this task group`:n.hoverText,a=n.unavailable?`<span class="mixture-group-box-unavailable-mark">(${ka})</span>`:"";return`<label class="${cY}${i}" title="${Z(o)}"><input type="checkbox" ${Ca}="${e}" ${Lv}="${Z(n.value)}" data-mixture-state="${n.state}"${n.state==="checked"?" checked":""}${r?" disabled":""}>${U(n.label)}${a}</label>`}function hY(e,n,t){for(const r of e.querySelectorAll(`.${WI} input[${Ca}]`))if(r.getAttribute(Ca)===n&&r.getAttribute(Lv)===t){r.focus({preventScroll:!0});return}}const KI="compare-view",mY="Compare results",O7="compare-plot",vY="compare-unavailable-state",_Y="compare-pin-row",gY="compare-pin-row-unavailable",YI="compare-row-slider",JI="compare-row-pin-checkbox",Vt="data-compare-row",bY="compare-jtask-group-list",yY="compare-jtask-group-designator",zI="view-in-read-trials",EY="View in ReadTrials",ZI="data-jtask-group",QI="data-configuration",eT="data-combination",Tm="data-trial-identity",SY="compare-view-in-read-trials",P7={jtaskGroup:"Task group",...XI},AY=`A pinned value is unavailable, so there is nothing to compare. Unpin the row marked "${ka}" to remove it.`,wY="No results are published for the pinned task group and model.",$Y="The pinned results have no data for this parameter combination.";function IY(e,n,t){const r=(c,l)=>{if(e!=="jtaskGroup"||t.jtaskGroups.length<2)return l;const f=t.jtaskGroups.find(p=>p.jtaskGroupId===c);return f===void 0?l:`${f.designator}: ${l}`},i=n.unavailable?` ${gY}`:"";let o=`<div class="cparam-row ${_Y}${i}" ${Vt}="${e}">`;o+=`<label class="cparam-label">${U(P7[e])}</label>`;const a=n.offered.length>1&&!n.unavailable;if(a){const c=n.offered.findIndex(l=>l.value===n.value);o+=`<input type="range" class="${YI}" ${Vt}="${e}" aria-label="${Z(P7[e])}" min="0" max="${n.offered.length-1}" step="1" value="${Math.max(c,0)}" ${n.pinned?"":"disabled "}data-values='${U(JSON.stringify(n.offered.map(l=>l.value)))}'>`}else o+='<span class="compare-row-slider-placeholder"></span>';const u=n.offered.find(c=>c.value===n.value),s=n.value===null?"—":r(n.value,n.valueLabel??n.value);return o+=`<span class="cparam-value-label" title="${Z((u==null?void 0:u.hoverText)??n.value??"")}">${U(s)}</span>`,n.unavailable&&(o+=`<span class="compare-pin-row-unavailable-mark">(${ka})</span>`),(a||n.unavailable)&&(o+=`<label class="cparam-pin-label"><input type="checkbox" class="${JI}" ${Vt}="${e}"${n.pinned?" checked":""}> pin</label>`),o+"</div>"}function TY(e,n,t){var i;const r=new Map;for(const o of n){const a=(i=t.find_cparam(o))==null?void 0:i.allowed_values,u=new Set(e.flatMap(c=>wv(c,o,a))),s=(a??[]).filter(c=>u.has(c));r.set(o,a===void 0?[...u]:s)}return r}function Rv(e){return`<p class="${vY}">${U(e)}</p>`}function q7(e){const{grid:n}=e;return e.configurationAxisSwept?{axis:n.configurationAxis,entries:n.entries[0]}:{axis:n.jtaskGroupAxis,entries:n.entries.map(t=>t[0])}}function LY(e,n,t,r,i,o){const{jprobTemplate:a,state:u,globalOpts:s}=o,c=II([...r],u.ui.cparamPinned),l=GP(n,c.length);if(l>$m){const v=l-$m;e.innerHTML=`<div class="code-info"><p>Pin at least ${v} more row${v===1?"":"s"} to visualize results.</p><p>Currently ${l} are unpinned, counting the agent CLI, model and effort rows as one.</p></div>`;return}const f={};for(const v of r)Nu(v,u.ui.cparamPinned)&&(f[v]=Qr(v,u,a.find_cparam(v),i.get(v)??[]));const p=[...n.jtaskGroupAxisSwept?[n.grid.jtaskGroupAxis.positions.length]:[],...n.configurationAxisSwept?[n.grid.configurationAxis.positions.length]:[]],h=NI(a,t,s,MI(c,i,p)),{heatmapValueRange:d,linePlotYRangePaddingPercent:m}=OI(a,t);if(p.length===0)RY(e,n,t,c,i,f,h,d,m,o);else if(l===1){const{axis:v,entries:_}=q7(n),g=iY(v,_,f,h.statsForCombo,h.trialSampleMeanFor);Tv(e,g,v.title,m,Iv(g.scatterPoints,t))}else if(p.length===2)Ra(e,aY(n.grid,f,h.statsForCombo),d,"");else{const{axis:v,entries:_}=q7(n),g=c[0];Ra(e,oY(v,_,g,i.get(g)??[],f,h.statsForCombo),d,"")}h.attachFollowUps(e)}function RY(e,n,t,r,i,o,a,u,s,c){var h;const l=((h=n.grid.entries[0])==null?void 0:h[0])??null;if(l===null){e.innerHTML=Rv(wY);return}if(r.length===0){CY(e,n,l,t,o,a,c);return}const[f,p]=r;if(p===void 0){const d=qI(l,f,i.get(f)??[],o,"average",a.statsForCombo,a.trialSampleMeanFor(l));Tv(e,d,f,s,Iv(d.scatterPoints,t));return}Ra(e,DI(l,f,i.get(f)??[],p,i.get(p)??[],o,a.statsForCombo),u,"")}function CY(e,n,t,r,i,o,{jprobTemplate:a,ctx:u,state:s,globalOpts:c}){const l=yn(t,i);if(l===null){e.innerHTML=Rv($Y);return}UI(e,t,l,s,c,r,o.sampleTarget,o.paramRanges,a,Ou(r,a,u),eK,"metho");const f=Y$(l.trials.length,t.count);f!==null&&e.insertAdjacentHTML("afterbegin",`<div class="code-info"><span class="${V$}">${U(f)}.</span></div>`),e.insertAdjacentHTML("beforeend",kY(n,t,l))}function kY(e,n,t){const r=e.grid.jtaskGroupAxis.positions[0].identity,i=e.grid.configurationAxis.positions[0].identity,o=t.trials.length===1?g2(n,kt(t.trials[0])):null,a=(u,s)=>` ${u}="${Z(JSON.stringify(s))}"`;return`<div class="${SY}"><button type="button" class="${zI}" ${ZI}="${Z(r)}"`+a(QI,i)+a(eT,t.cparams)+(o===null?"":a(Tm,o))+`>${U(EY)}</button></div>`}function NY(e,{jprobTemplate:n,state:t,presetData:r}){if(e.jtaskGroups.length<2)return"";const i=v$(r),o=e.grid.jtaskGroupAxis.positions.map(a=>{const u=i.find(s=>s.jtaskGroupId===a.identity);if(u===void 0)throw new Error(`Compare: task group ${JSON.stringify(a.identity)} is on the axis but is not a published task group`);return`<li><span class="${yY}">${U(a.tickLabel)}</span>`+_$(u,i,{jprobTemplate:n,jtaskHashGroups:r.jtaskHashGroups,foldOpenById:t.ui.foldOpenById,provenanceFoldId:`${m$}-${a.tickLabel}`})+"</li>"});return`<ul class="${bY}">${o.join("")}</ul>`}const MY=/^[A-Za-z_][\w-]*$/;function OY(e){if(!(e instanceof HTMLElement)||e.closest(`.${KI}`)===null)return null;const n=e.classList[0];if(n===void 0||!MY.test(n))return null;const t=(r,i)=>i===null?"":`[${r}=${JSON.stringify(i)}]`;return`.${n}`+t(Vt,e.getAttribute(Vt))+t("data-cparam",e.getAttribute("data-cparam"))+(e instanceof HTMLInputElement&&e.type==="radio"?t("value",e.value):"")}function PY(e,n){var m,v;const{jprobTemplate:t,state:r,presetData:i,formRegistry:o}=n,a=OY(document.activeElement),u=E2(r.ui.compare,i),s=SI(t,r,"sample",o),c=i.richcodeResults.filter(Za);DK(c);const l=((m=c[0])==null?void 0:m.cparam_names)??[],f=TY(c,l,t),p=Lt.map(_=>IY(_,u.rows[_],u)).join("");e.innerHTML=`<section class="${KI}" aria-labelledby="compare-view-heading"><h2 id="compare-view-heading">${U(mY)}</h2><div class="compare-controls">`+FI(t,r,"sample",s,o)+`<div class="cparam-controls">${p}`+BI(l,t,r,f).html+`</div></div><div class="${O7}"></div>`+NY(u,n)+"</section>";const h=e.querySelector(`.${O7}`),d=kI(s);u.unavailable?h.innerHTML=Rv(AY):s===null||d!==null?h.innerHTML=d:LY(h,u,s,l,f,n),a!==null&&((v=e.querySelector(a))==null||v.focus({preventScroll:!0}))}function D7(e,n="",t=""){return{name:n,description:t,loadings:Object.fromEntries(e.map(r=>[r,0]))}}function nT(e,n){const t=new Set(n);return{latents:e.latents.map(r=>{const i=Object.entries(r.loadings).filter(([o,a])=>!t.has(o)&&a!==0);return i.length>0&&console.warn(`joint-dependence draft: dropping loadings on subjective variable(s) ${i.map(([o])=>o).join(", ")}, which this jprob no longer samples`),{...r,loadings:Object.fromEntries(n.map(o=>[o,r.loadings[o]??0]))}})}}function tT(e,n){return e==null?{latents:[]}:nT({latents:e.latents.map(t=>({name:t.name,description:t.description,loadings:{...t.loadings}}))},n)}function qY(e){return e.latents.length===0?null:{latents:e.latents.map(n=>({name:n.name.trim(),description:n.description.trim(),loadings:Object.fromEntries(Object.entries(n.loadings).filter(t=>t[1]!==null))}))}}function rT(e,n){return Object.fromEntries(n.map(t=>[t,e.latents.reduce((r,i)=>{const o=i.loadings[t]??0;return r+o*o},0)]))}function DY(e,n){return n.map(t=>n.map(r=>t===r?1:e.latents.reduce((i,o)=>i+(o.loadings[t]??0)*(o.loadings[r]??0),0)))}function FY(e){return e.latents.some(n=>Object.values(n.loadings).some(t=>t!==null&&t!==0))}function iT(e,n,t=[],r={}){const i=c=>r[c]??c,o=[];e.latents.length>fa&&o.push({message:`${e.latents.length} latents exceeds the limit of ${fa}.`});const a=new Set;e.latents.forEach((c,l)=>{const f=`Latent ${l+1}`;c.name.trim()===""&&o.push({message:`${f} needs a short name.`,latentIndex:l,field:"name"}),c.description.trim()===""&&o.push({message:`${f} needs a description saying what its positive direction means.`,latentIndex:l,field:"description"});for(const p of n){const h=c.loadings[p]??null;h===null?(a.add(p),o.push({message:`${f}: no loading given for ${i(p)} — enter a number from −1 to +1 (0 if the latent does not apply to it).`,latentIndex:l,svar:p})):(!Number.isFinite(h)||h<-1||h>1)&&(a.add(p),o.push({message:`${f}: the loading on ${i(p)} must be between −1 and +1.`,latentIndex:l,svar:p}))}});const u=rT(e,n),s=new Set(t);for(const c of n){const l=u[c];!a.has(c)&&l>1+aw&&o.push({message:`The squared loadings on ${i(c)} sum to ${l.toFixed(3)}, over its budget of 1 by ${(l-1).toFixed(3)} — no independent variation is left for it.`,svar:c}),l>0&&s.has(c)&&o.push({message:`${i(c)} has a single-value distribution in this response, so a loading on it has no effect — zero the loading or give it a spread distribution.`,svar:c})}return o}function oT(e,n,t=[]){const r=iT(e,n,t);if(r.length>0)return{kind:"invalid",problems:r};const i=qY(e),o=oo(i,n,t);if(o!==null)throw new Error("joint-dependence draft passed the editor's checks but not validateLloads: "+o);return{kind:"valid",lloads:i}}const xY=new bn({html:!1,linkify:!0,breaks:!0}),BY="estimator-text";function aT(e,n){try{e.innerHTML=xY.render(n)}catch{e.textContent=n}}function uT(e,n){const t=document.createElement("div");return t.classList.add(BY,n),aT(t,e),t}const Pu="auto-expand",HY="estimator-text-input",UY="estimator-text-form",GY=1;function sT(e){const n=document.createElement("div");n.className=UY;const t=document.createElement("textarea");t.className=`${HY} ${e.className} ${Pu}`,t.rows=GY,t.spellcheck=!1,t.setAttribute("aria-label",e.ariaLabel);for(const[r,i]of Object.entries(e.dataset??{}))t.dataset[r]=i;return t.value=e.value,n.appendChild(t),cT(t),n}function cT(e){const n=()=>{e.style.height="auto",e.style.height=`${e.scrollHeight}px`};e.addEventListener("input",n),n()}function lT(e){for(const n of e.querySelectorAll(`textarea.${Pu}`))cT(n)}const Cv="estimator-reasoning",fT="estimator-reasoning-body",jY="has-estimator-reasoning",dT="estimator-reasoning-input",pT="reasoningBare",VY="Your reasoning for ",WY={containerClass:Cv,ownContentSelector:`:scope > .${fT}`};function XY(e,n){const t=e==null?void 0:e[n];return t!==void 0&&t.trim()!==""?t:void 0}function KY(e,n){const t=document.createElement("div");if(t.className=Cv,n.mode==="edit")return t.appendChild(sT({className:dT,value:n.reasoning[e]??"",ariaLabel:`${VY}${e}`,dataset:{[pT]:e}})),t;const r=XY(n.reasoning,e);return r===void 0?null:(t.appendChild(uT(r,fT)),t)}function hT(e,n,t,r){const i=e.querySelector(`:scope > .${Cv}`),o=KY(n,t);if(e.classList.toggle(jY,o!==null),o===null){i==null||i.remove();return}i!==null?i.replaceWith(o):r!==null&&r.parentElement===e?r.after(o):e.appendChild(o)}const YY="root",JY={containerClass:"framingnote",ownContentSelector:":scope > .framing-note-summary > .framing-note-content"};function mT(e){return`framing-fgroup-${e}`}const zY=14;function ZY(e,n,t){return`<strong>${U(e)}${n}:</strong><span class="framing-note-content">${t}</span>`}function kv(e){return e.jprobInstance.enabled_flabels()}function vT(e){return e.showFramingNotes!==!1}function Nv(e,n){const t=kv(n);return!vT(n)||!t.length?null:e.get_framing_layout(t)}function QY(e,n,t){var r;return((r=e[n])==null?void 0:r[t])??!0}function _T(e,n,t,r){const i=QY(t,r,e.note.id),o=e.children.map(v=>_T(v,n,t,r)).join(""),a=i?" visible":"",u=i?" active":"",s=zY*(e.depth-1),c=U(e.note.flabel),l=Pn(e.note.srcquotes,n),f=l.atStart+Ae(e.note.defn,n)+l.atEnd,[p,h]=n.jprobInstance.fgroup_of_flabel(e.note.flabel),d=ZY(h.label_prefix,c,f),m=Z(mT(p));return`<div class="framingnote${a} ${m}" style="margin-left: ${s}px" data-framing-anchor="${Z(r)}" data-framing-id="${Z(e.note.id)}"><div class="framing-note-summary"><button class="framing-fold-btn${u}" data-framing-anchor="${Z(r)}" data-framing-id="${Z(e.note.id)}" title="Toggle framing note">&plusmn;</button>`+d+"</div>"+o+"</div>"}function Mv(e,n,t,r){return e.layout_nodes.map(i=>_T(i,n,t,r)).join("")}function eJ(e,n,t,r){return e===void 0||e.layout_nodes.length===0?"":"<div>"+Mv(e,n,t,r)+"</div>"}function nJ(e,n,t){const r=Nv(e,n),i=document.querySelectorAll(`.${wS}`);for(const o of i){const a=o.getAttribute($S);if(!a)continue;const u=r==null?void 0:r.nonroot_anchor_sections.get(a);o.innerHTML=r&&u?Mv(u,n,t.framingFoldState,a):""}}function tJ(e,n,t,r){const i=document.getElementById("framing-notes-root-section"),o=Nv(n,t),a=o===null?"":Mv(o.root_section,t,r.framingFoldState,YY);if(!a){e.innerHTML="",i&&(i.hidden=!0);return}i&&(i.hidden=!1),e.innerHTML=a}function rJ(e,n){const t=n.jprobInstance,r=Wh in t.get_fgroups()?t.nonstandard_notes(Wh,kv(n)):[];e.innerHTML=r.map(o=>`<div class="estimator-instruction">${Ae(o.defn,n)}</div>`).join("");const i=document.getElementById(_m);i&&(i.hidden=r.length===0)}function iJ(e,n){const t=document.getElementById("framing-notes-explainer-section"),r=new Set(kv(n));if(!vT(n)||!r.size){e.innerHTML="",t&&(t.hidden=!0);return}const i=[];for(const[o,a]of n.jprobInstance.standard_fgroups_in_order())a.defn&&a.flabels.some(u=>r.has(u))&&i.push(`<div class="framing-explainer ${Z(mT(o))}">`+Ae(a.defn,n)+"</div>");t&&(t.hidden=i.length===0),e.innerHTML=i.join("")}const oJ=280,aJ=110,uJ="(no response)",sJ="This trial gave no response for these parameter values",gT="assumption-readonly-no-response",Ov="assumption-mixture-caption",cJ="assumption-mixture-stats";function lJ(e,n,t,r){const i=bw(e,n),o=a=>xe(a,t,r,"deterministic");return`median = ${o(i.median)}, 90% interval [${o(i.p5)}, ${o(i.p95)}]`}function bT(e,n,t){if(t==="point")return String(e.point[n]??"");if(t==="bounds"){const i=e.bounds[n];return i?`${i[0]} ${i[1]}`:""}const r=e.sample[n];return r?typeof r=="string"?r:r.map(([i,o])=>`(${i} ${o})`).join(" "):""}function yT(e){return Mr(e.svar_entries().map(n=>n.decl))}function ET(e,n){return e.svar_entries().map(({bareName:t},r)=>({bareName:t,cardMode:n,inputIndex:r}))}function ST(e,n,t){const r=wn(n.ui,{presetData:t});return r==="yours-plaincode"?[w$(e,n)]:Xe(r)?[]:lv(e,n,t)}function AT(e,n){return e.map(t=>t&&n.map(r=>bT(t,r.bareName,r.cardMode)))}const Na="data-trial-";function Pv(e){return`${Na}${e}`}const wT=0;function fJ(e,n){for(const t of e.querySelectorAll(".assumption-readonly")){const r=Number(t.dataset.paramIndex);for(const i of t.getAttributeNames())i.startsWith(Na)&&t.removeAttribute(i);n.forEach((i,o)=>{i!==void 0&&t.setAttribute(Pv(o),i[r]??"")})}}function Ma(e,n){for(const t of e.querySelectorAll(".assumption-readonly"))dJ(t,n)}function dJ(e,n){const t=e.getAttribute(Pv(n));e.textContent=t??uJ,e.classList.toggle(gT,t===null),t===null?e.title=sJ:e.removeAttribute("title")}function pJ(e){return e.classList.contains(gT)?"":e.textContent??""}function hJ(e){return e.getAttributeNames().filter(n=>n.startsWith(Na)).map(n=>({recordTrialIndex:Number(n.slice(Na.length)),value:e.getAttribute(n)??""}))}function mJ(e){return e.querySelector(":scope > .resizable-canvas-wrapper")??e.querySelector(":scope > .param-density-canvas")??e.querySelector(":scope > .assumption-header")}function Lm(e,n){for(const t of e.querySelectorAll(".assumption-card")){const r=t.dataset.svarBare??"";hT(t,r,n,mJ(t))}}function vJ(e,n,t,r,i){var w;const o=document.getElementById(`${Be.ESTIMATION}-section`),a=wn(r.ui,{presetData:i}),u=a==="yours-plaincode",s=dt(r,i),c=!Xe(a),l=c||u,f=u&&!ji(r.yoursCodeRecord),p=n.get_svar_bare_names(),h=Nv(n,t),d=Fi(n);if(d.length===0){e.innerHTML="",o&&(o.hidden=!0);return}o&&(o.hidden=!1);const m=ET(n,s),v=AT(ST(n,r,i),m),_=(((w=r.yoursRecord.raw_input)==null?void 0:w[s])??"").split(`
`),g=c?'<div class="assumption-preset-hint">preset selected; select Yours in Calculator to edit</div>':"",b=n.svar_entries().map(I=>I.decl.type_highlevel),y=[];for(let I=0;I<d.length;I++){const C=m[I],L=C.cardMode,$=L==="sample",A=L==="bounds"?" bounds-mode":L==="sample"?" sample-mode":"",S=Ae(d[I],t),T=p[I],R=T?n.get_svar(T):void 0,P=T?`isym:${T}`:null,M=P!==null&&n.can_consolidate_isym_svar(P),x=M?n.get_isym(P):void 0,q=(x==null?void 0:x.defn)??(R==null?void 0:R.defn),F=x?x.srcquotes:R==null?void 0:R.srcquotes,O=Pn(F,t),te=q?O.atStart+Ae(q,t)+O.atEnd:"",G=T?`svar:${T}`:null,z=M?` id="isym-${Z(T??"")}"`:"",re=G&&h?eJ(h.nonroot_anchor_sections.get(G),t,r.ui.framingFoldState,G):"",se=$?`<canvas class="param-density-canvas" data-param-index="${C.inputIndex}" data-type-highlevel="${b[C.inputIndex]}" width="${oJ}" height="${aJ}"></canvas>`+(c?`<div class="${Ov}" hidden></div>`:""):"";let j;if(l){const Ee=v.flatMap((he,ee)=>he===void 0?[]:[`${Pv(ee)}="${Z(he[I]??"")}"`]).join(" ");j=`<span class="assumption-readonly${A}" data-param-index="${I}" ${Ee}></span>`}else{const Ee=(_[C.inputIndex]??"").trim();j=`<input class="assumption-input${A}" data-param-index="${C.inputIndex}" data-group="${s}" value="${Z(Ee)}" placeholder="${LJ(L)}">`}const K=!l&&L==="sample"?'<span class="assumption-help-slot"></span>':"",V=`<span class="assumption-op">${U(BE(L))}</span>`;y.push(`<div class="assumption-card${c?" preset-mode":""}"${z} data-svar-bare="${Z(T??"")}">`+TM(T??"",`${Vm}${T??""}`)+`<div class="assumption-header"><span class="assumption-cond">${S}</span><span class="assumption-input-row"${f?" hidden":""}>`+V+j+K+"</span></div>"+se+(te?`<div id="gloss-${T??""}" class="assumption-narrative">${te}</div>`:"")+g+re+"</div>")}e.innerHTML=y.join("");for(const I of e.querySelectorAll(".assumption-help-slot"))I.appendChild(mt(DX));const E=yT(n);if(c){$T(e,ft(r,i),cv(r,i),r.ui.probAsOdds,fv(r,i),E);return}u?(Ma(e,wT),s==="sample"&&Oa(e,E)):s==="sample"&&Dv(e,E),qu(e,r,E),Lm(e,u?{mode:"edit",reasoning:r.yoursCodeRecord.reasoning_response}:{mode:"read",reasoning:void 0})}function _J(e,n,t,r){const i=dt(t,r),o=wn(t.ui,{presetData:r}),a=o==="yours-plaincode";if(Xe(o)&&!a)return;const u=ET(n,i),s=yT(n);if(fJ(e,AT(ST(n,t,r),u)),a){Ma(e,wT),i==="sample"&&Oa(e,s);return}const c=ft(t,r);c.kind==="trial"&&Ma(e,c.recordTrialIndex),i==="sample"&&(c.kind==="trial"?Oa(e,s):IT(e,t.ui.probAsOdds,fv(t,r),s))}function $T(e,n,t,r,i,o){const a=n.kind==="mix";for(const u of e.querySelectorAll(".assumption-input-row"))u.hidden=a;if(a){IT(e,r,i,o),Lm(e,{mode:"read",reasoning:void 0});return}Ma(e,n.recordTrialIndex),Oa(e,o),Lm(e,{mode:"read",reasoning:t[n.recordTrialIndex]})}function gJ(e,n){const t=e.dataset.typeHighlevel,r=Pw(n,t);Ci(e,n,r),lt(e,()=>Ci(e,n,r)),Uw(e,n,r,t)}function bJ(e){const n=e.parentElement;return n!=null&&n.classList.contains("resizable-canvas-wrapper")?n:e}function qv(e,n){const t=bJ(e);if(!n){t.hidden=!0;return}t.hidden=!1,gJ(e,n)}function yJ(e){const n=e.querySelector(`.${Ov}`);if(n===null)throw new Error("preset svar card is missing its mixture caption");return n}function Oa(e,n){const t=e.querySelectorAll(".param-density-canvas");for(const r of t){const i=r.closest(".assumption-card"),o=i==null?void 0:i.querySelector(".assumption-readonly"),a=o?pJ(o):"",u=Number(r.dataset.paramIndex??0);qv(r,TT(a,n==null?void 0:n[u]));const s=i==null?void 0:i.querySelector(`.${Ov}`);s&&(s.hidden=!0)}}function IT(e,n,t,r){const i=e.querySelectorAll(".param-density-canvas");for(const o of i){const a=o.closest(".assumption-card"),u=a==null?void 0:a.querySelector(".assumption-readonly"),s=Number(o.dataset.paramIndex??0),c=[],l=[],f=[];for(const p of u?hJ(u):[]){const h=SJ(p.value,r==null?void 0:r[s]),d=t[p.recordTrialIndex];h===null||d===void 0||(c.push(h),l.push(d),f.push(p.recordTrialIndex))}if(qv(o,c.length>0?Ow(c,l):null),a){const p=yJ(a);p.hidden=c.length===0,p.innerHTML=c.length>0?`<span class="${cJ}">`+U(lJ(c,l,o.dataset.typeHighlevel,n))+"</span> "+J$({contributingRecordTrialIndices:f,recordTrialCount:t.length}):""}}}function EJ(e,n,t){var u;const r=n.ui.inputMode,i=((u=n.yoursRecord.raw_input)==null?void 0:u[r])??"",o=i?i.split(`
`):[];e.querySelectorAll(".assumption-input").forEach(s=>{const c=Number(s.dataset.paramIndex),l=(o[c]??"").trim();s.value!==l&&document.activeElement!==s&&(s.value=l)}),r==="sample"&&Dv(e,t),qu(e,n,t)}function Dv(e,n){const t=e.querySelectorAll(".param-density-canvas");for(const r of t){const i=r.closest(".assumption-card"),o=i==null?void 0:i.querySelector(".assumption-input"),a=(o==null?void 0:o.value)??"",u=Number(r.dataset.paramIndex??0);qv(r,TT(a,n==null?void 0:n[u]))}}function TT(e,n){const t=n??Jt,r=LT(e,t);if(r===null)return null;switch(r.kind){case"family":return vV(U2(r.spec,t.lo,t.hi));case"pairs":return hV(r.pairs.map(i=>i[0]),r.pairs.map(i=>i[1]))}}function SJ(e,n){const t=n??Jt,r=LT(e,t);return r===null?null:Ii(r,t)}function LT(e,n){const t=e.trim();if(!t)return null;try{return bu(t,n)}catch{return null}}function RT(e){return e.trim()}function AJ(e,n,t,r){var u;const i=e.ui.inputMode,a=(((u=e.yoursRecord.raw_input)==null?void 0:u[i])??"").split(`
`);for(;a.length<r;)a.push("");return a[n]=i==="sample"?RT(t):t,a.join(`
`)}const wJ=" — the saved estimate is still ",F7=48;function $J(e,n,t,r){const i=e.trim();if(!i)return null;try{return n==="point"?dw(i,t):n==="bounds"?pw(i,t):bu(i,t),null}catch(o){const a=o.message;return r===""?a:a+wJ+IJ(r)}}function IJ(e){return e.length<=F7?e:`${e.slice(0,F7)}…`}function TJ(e,n,t){const r=e.yoursRecord.trials[0];return r?bT(r,n,t):""}function qu(e,n,t){const r=n.ui.inputMode,i=e.querySelectorAll(".assumption-card");for(const o of i){const a=o.querySelector(".assumption-input");if(!a)continue;const u=Number(a.dataset.paramIndex),s=o.dataset.svarBare??"",c=$J(a.value,r,t[u]??Jt,TJ(n,s,r));let l=o.querySelector(".arg-warning");if(c){if(!l){l=document.createElement("p"),l.className="arg-warning";const f=o.querySelector(".resizable-canvas-wrapper")??o.querySelector(".param-density-canvas")??o.querySelector(".assumption-header");f==null||f.after(l)}l.textContent=c}else l&&l.remove()}}function LJ(e){switch(e){case"point":return"e.g. .5";case"bounds":return"e.g. .01 1";case"sample":return"e.g. "+CT}}const CT="tri(0, .5, .99)",Fv="conclusion-density",RJ="density-canvas";function kT(e,n){const t={};for(const r of e.get_cparams()){const i=ye(r.id),o=n[i]??r.default_value;typeof o!="object"&&(t[i]=o)}return t}function CJ(e,n){const t=e.conclusion_form_or_none();if(t===null)return null;const r=n[t];if(!r)throw new Error(`Form "${t}" not found in form registry`);return r}function Du(e,n){return bA(e,n)??""}function kJ(e,n){return Fi(e).map(t=>`<div class="calc-label-row"><span class="label-full">${Ae(t,n)}</span></div>`).join("")}function NJ(e,n){const t=U(BE(n));return Array.from({length:e},()=>`<div class="calc-op-row">${t}</div>`).join("")}function Rm(e,n,t,r,i,o,a,u,s,c){var b,y,E;const l=rr(i,o),f=dt(i,o);if(o){const{source:w}=Ie(l);if(w==="metho-richcode"||w==="adhoc-plaincode"){const I=Jn(i,o);if(I&&I.count===0){e.innerHTML="",n.innerHTML=`<div class="${OJ}">${MJ}</div>`;return}if(I){const C=cn();N7(e,n,I,t,r,i,l,C,a,s,c);return}}if(w==="yours-plaincode"){const I=i.yoursCodeRecord;if(e.innerHTML="",ji(I)){const C=Vi(I),L=cn();N7(e,n,C,t,r,i,l,L,a,s,c)}else n.innerHTML='<div class="result-detail">Write code below and click Sample to compute results.</div>';return}}const p=((b=i.yoursRecord.raw_input)==null?void 0:b[f])??"",d=Fi(t).length,m=!Xe(l),v=kJ(t,r),_=d>0?`<div class="calc-operators">${NJ(d,f)}</div>`:"";let g;if(m)g='<div id="sample-columns"></div>';else{const w=f==="bounds"?" bounds-mode":f==="sample"?" sample-mode":"",I=GJ(f,d);g=`<div class="calc-input"><textarea class="calc-textarea${w}" data-group="${f}" rows="${d}" spellcheck="false" placeholder="${I}">${U(p)}</textarea></div>`}if(e.innerHTML=`
    <div class="calc-layout">
      <div class="calc-labels">${v}</div>
      ${_}
      ${g}
    </div>
  `,m&&o){const w=e.querySelector("#sample-columns");w&&fX(w,t,o,i)&&((y=e.querySelector(".calc-labels"))==null||y.classList.add("has-sample-col-headers"),(E=e.querySelector(".calc-operators"))==null||E.classList.add("has-sample-col-headers"));const{source:I}=Ie(l);if(I==="adhoc-plainnum"){const C=Jn(i,o),L=(C==null?void 0:C.trials.length)===1?C.trials[0]:void 0,$=t.svar_entries().map(A=>A.bareName);L&&FS(L,$).length>0&&e.insertAdjacentHTML("beforeend",`<div class="calc-copy-to-yours"><button class="copy-to-yours-btn" type="button" title="Copy this entry's estimates into your editable Estimate inputs">Copy to Estimate</button></div>`)}}Fu(n,t,r,i,o,a,u)}const MJ="No model configurations are selected. Check an agent CLI, or a model and effort, under Select result set.",OJ="calc-empty-result-set";function PJ(e,n,t,r,i,o,a,u,s,c){const l=rr(i,o),{source:f}=Ie(l),p=cn();if(o&&(f==="metho-richcode"||f==="adhoc-plaincode")){const h=Jn(i,o);if(h&&h.count===0){Rm(e,n,t,r,i,o,a,u,s,c);return}if(h){M7(e,n,h,t,r,i,l,p,a,s,c);return}}else if(f==="yours-plaincode"){const h=i.yoursCodeRecord;if(ji(h)){const d=Vi(h);M7(e,n,d,t,r,i,l,p,a,s,c);return}}console.warn(`Code-control change outside a code result view (whose=${JSON.stringify(l)}); falling back to a full calculator render`),Rm(e,n,t,r,i,o,a,u,s,c)}function Fu(e,n,t,r,i,o,a){jJ(e,n,t,r,i,o,a)}function qJ(e,n,t,r,i,o,a,u){const s=o[n];if(!s){e.innerHTML="",console.warn(`derived-form ${n}: not in form registry (cannot compute)`);return}const c=t.form.find(_=>_.id===n);if(!c){e.innerHTML="",console.error(`derived-form ${n}: not found in jprob template form list`);return}const l=dt(i,u);if(!LE(c,l)){e.innerHTML="";return}const f=RE(n,c.sexpr),p=DJ(t,f),h=Ae(p,r),d=!Xe(rr(i,u)),m=t.get_svar_bare_names().length;let v;try{v=HJ(n,s,t,i,l,d,m,kT(t,r.displayOptionValues),u,a)}catch(_){e.innerHTML="",console.error(`derived-form ${n}: ${_.message}`);return}switch(v.kind){case"ok":const _=v.valueHtml??`<span class="derived-value">${v.value}</span>`,g=v.detailHtml??(v.detail?` <span class="derived-detail">${v.detail}</span>`:"");e.innerHTML=`<div class="hir-loud-note">${h} ${v.label} ${v.relation??"≈"} `+_+(g?` ${g}`:"")+"</div>"+(v.nonFiniteWarning?Ta():"");return;case"non-finite":e.innerHTML=Ta();return;case"unavailable":e.innerHTML=`<div class="hir-loud-note">${h} — <span class="derived-detail">${U(v.explanation)}</span></div>`;return;case"pending":e.innerHTML="";return;case"missing":e.innerHTML="",console.warn(`derived-form ${n}: ${v.reason}`);return;case"error":e.innerHTML="",console.error(`derived-form ${n}: ${v.message}`);return}}function DJ(e,n){const t=CE(n);return e.get_display_expr(t)??t}function Nr(e){return IE(e.svar_entries())}function NT(e,n,t){return e.provenance!=="precomputed"?t:`precomputed, ${n} trial${n===1?"":"s"}`}const FJ={point:()=>Ia,bounds:"from bounds",mc:()=>"MC"};function xJ(e){return{point:n=>n.perTrial.length>1?`mean of ${n.perTrial.length} samples`:"from preset",bounds:"from preset",mc:n=>NT(n,e,n.trialCount>1?`MC of ${n.trialCount} trials`:"MC")}}function BJ(e){return{point:n=>n.perTrial.length>1?`${Ia} (mean of ${n.perTrial.length} trials)`:Ia,bounds:"from bounds",mc:n=>NT(n,e,"MC")}}function hi(e,n,t,r){switch(e.kind){case"point":{const i=_r([...e.perTrial,e.value]);return i==="undefined"?{kind:"non-finite"}:{kind:"ok",label:r.point(e),value:xe(e.value,n,t),nonFiniteWarning:i==="infinite"}}case"bounds":{const i=_r([e.lo,e.hi]);return i==="undefined"?{kind:"non-finite"}:cI(e.lo,e.hi)?{kind:"unavailable",explanation:sI}:{kind:"ok",label:r.bounds,relation:lI(e.tightness),value:fK(e.lo,e.hi,n,t),nonFiniteWarning:i==="infinite"&&e.tightness==="tight"}}case"mc":{const i=_r([e.mean,e.median,e.p5,e.p95]);if(i==="undefined")return{kind:"non-finite"};const o=ZX(e,n,t);return{kind:"ok",label:r.mc(e),value:"",valueHtml:o.valueHtml,detailHtml:o.detailHtml,nonFiniteWarning:i==="infinite"}}}}function HJ(e,n,t,r,i,o,a,u,s,c){var _;const l=t.get_svar_bare_names(),f=n.params.filter(g=>!l.includes(g));if(f.length>0)return{kind:"error",message:`params not in svar_list: ${JSON.stringify(f)} (form.params=${JSON.stringify(n.params)}, svar_list=${JSON.stringify(l)})`};const p=r.ui.probAsOdds,{source:h}=Ie(rr(r,s));if(ln(h)==="plaincode"||ln(h)==="richcode")return UJ(e,n,t,r,i,h,s,c);const d=V2(e,n,u,c);if(i==="bounds"&&d.bounds===null)return{kind:"unavailable",explanation:co};if(o){if(!s)return{kind:"pending"};const g=Jn(r,s);if(!g)return{kind:"pending"};if(h!=="adhoc-plainnum")return{kind:"pending"};const b=g,y=t.conclusion_form_or_none()??void 0,E=i==="sample"?vI(b,e,y,zr(b.trials)):void 0;try{const w=kr(cn()),I=Yn(d,Kn(b.trials,Xt(b),i,Nr(t)),{onIncompleteTrial:"skip",mcIters:w.mcIters,mcItersPerClick:w.mcItersPerClick,precomputed:E});return hi(I,n.typeHighlevel,p,xJ(b.trials.length))}catch(w){if(w instanceof Li)return{kind:"missing",reason:`record: ${w.message}`};throw w}}const m=((_=r.yoursRecord.raw_input)==null?void 0:_[i])??"";if(!m.trim())return{kind:"pending"};const v=Bu(t,i,m,"tolerant",PT(r));try{const g=kr(cn()),b=Yn(d,v,{onIncompleteTrial:"skip",mcIters:g.mcIters,mcItersPerClick:g.mcItersPerClick});return hi(b,n.typeHighlevel,p,FJ)}catch(g){if(g instanceof Li)return{kind:"pending"};throw g}}function UJ(e,n,t,r,i,o,a,u){let s;if(ht(o)==="yours"){const v=r.yoursCodeRecord;if(!ji(v))return{kind:"pending"};s=Vi(v)}else{if(!a)return{kind:"pending"};if(s=Jn(r,a),!s)return{kind:"pending"}}s2(s);const c=qK(s,t,r);if(!c)return{kind:"pending"};if(c.trials.length===0)return{kind:"missing",reason:"no trials for the selected scenario combination"};const l=r.ui.probAsOdds,f=BJ(c.trials.length),p=Di(n,c.cparams);if(i==="point"){const v=c.trials.map(g=>pI(g,e,p)),_=gu(v,ct(s,c.trials));return hi({kind:"point",value:_,perTrial:v,perTrialInputs:[]},n.typeHighlevel,l,f)}if(i==="bounds"){if(!u2(s))throw new Error("code bounds derived-form display reached with a multi-trial record; bounds mode should not have been selectable");const v=hI(c.trials[0],e,p);if(!v)return{kind:"unavailable",explanation:co};const[_,g]=v.interval;return hi({kind:"bounds",lo:_,hi:g,tightness:v.tightness,trialCount:1},n.typeHighlevel,l,f)}const h=t.conclusion_form_or_none()??void 0,d=zr(c.trials),m=vI(c,e,h,d);if(m===void 0){const v=gI(c,e,e===h,d);if(v!==void 0){const _=_r([v.mean]);return _==="undefined"?{kind:"non-finite"}:{kind:"ok",label:`${_v.toLowerCase()}, ${c.trials.length} trial${c.trials.length===1?"":"s"}`,value:xe(v.mean,n.typeHighlevel,l,"monte-carlo"),nonFiniteWarning:_==="infinite"}}}try{const v=kr(cn()),_=Yn(V2(e,n,c.cparams,u),Kn(c.trials,ct(s,c.trials),"sample",Nr(t)),{onIncompleteTrial:"skip",mcIters:v.mcIters,mcItersPerClick:v.mcItersPerClick,precomputed:m});return hi(_,n.typeHighlevel,l,f)}catch(v){if(v instanceof Li)return{kind:"missing",reason:`combo trials: ${v.message}`};throw v}}function GJ(e,n){const t=e==="sample"?CT:e==="bounds"?".01 1":".5";return"e.g. "+Array.from({length:n},()=>t).join(`
`)}function jJ(e,n,t,r,i,o,a){var d;if(n.conclusion_form_or_none()===null){e.innerHTML="";return}const u=o?CJ(n,o):null,s=kT(n,t.displayOptionValues),c=dt(r,i),l=!Xe(rr(r,i)),f=cn();if(l&&i){try{ZJ(e,n,t,r,c,i,u,s,f,a)}catch(m){e.innerHTML=`<div class="result-error">${U(m.message)}</div>`}return}const p=((d=r.yoursRecord.raw_input)==null?void 0:d[c])??"",h=n.svar_entries().length;if(!p.trim()){e.innerHTML='<div class="result-detail">Enter probabilities above.</div>';return}try{switch(c){case"point":VJ(e,p,n,t,h,u,s,r.ui.probAsOdds);break;case"bounds":WJ(e,p,n,t,h,u,s,r.ui.probAsOdds);break;case"sample":zJ(e,p,n,t,h,r,u,s,f,a);break}}catch(m){e.innerHTML=`<div class="result-error">${U(m.message)}</div>`}}function MT(e,n,t){const r=e.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(r.length!==n)throw new Error(`Expected ${n} values, got ${r.length}`);return r.map((i,o)=>{try{return dw(i,(t==null?void 0:t[o])??Jt)}catch(a){throw new Error(`Line ${o+1}: ${a.message}`)}})}function xu(e,n,t,r){return n?V2(e.conclusion_form_or_none()??"form:conclusion",n,t,r):{key:"conclusion-unavailable",params:[],typeHighlevel:e.config.conclusion_type_highlevel,point:()=>NaN,bounds:null,boundsTightness:null}}function OT(){return`<div class="result-detail">${U(co)}</div>`}function xv(e,n){for(const t of n.params)if(!e.includes(t))throw new Error(`form param "${t}" is not an input subjective variable`)}const fr=[1];function Bu(e,n,t,r,i=null){const o=e.svar_entries(),a=o.map(f=>f.bareName),u=Mr(o.map(f=>f.decl)),s=Nr(e);if(r==="strict"){if(n==="point"){const p=MT(t,a.length,u);return{mode:n,trialWeights:fr,trials:[Object.fromEntries(a.map((h,d)=>[h,p[d]]))]}}if(n==="bounds"){const p=qT(t,a.length,u);return{mode:n,trialWeights:fr,trials:[Object.fromEntries(a.map((h,d)=>[h,p[d]]))]}}const{specs:f}=DT(t,a.length,u);return{mode:"sample",ranges:s,trialWeights:fr,trials:[{specs:Object.fromEntries(a.map((p,h)=>[p,f[h]])),lloads:i}]}}const c=t.trim().split(/\n/).map(f=>f.trim()).filter(f=>f.length>0);if(n==="point"){const f={};return a.forEach((p,h)=>{const d=Number(c[h]);isNaN(d)||(f[p]=d)}),{mode:n,trialWeights:fr,trials:[f]}}if(n==="bounds"){const f={};return a.forEach((p,h)=>{const d=(c[h]??"").split(/\s+/);if(d.length!==2)return;const m=Number(d[0]),v=Number(d[1]);isNaN(m)||isNaN(v)||(f[p]=[m,v])}),{mode:n,trialWeights:fr,trials:[f]}}const l={};return a.forEach((f,p)=>{try{l[f]=bu(c[p]??"",u[p]??Jt)}catch{}}),{mode:"sample",ranges:s,trialWeights:fr,trials:[{specs:l,lloads:i}]}}function PT(e){var n;return((n=e.yoursRecord.trials[0])==null?void 0:n.lloads)??null}function VJ(e,n,t,r,i,o,a,u){const s=t.svar_entries().map(d=>d.bareName);o&&xv(s,o);const c=Bu(t,"point",n,"strict"),l=Yn(xu(t,o,a),c,{onIncompleteTrial:"error"}),f=Du(t,r),p=t.config.conclusion_type_highlevel,h=c.trials[0];e.innerHTML=La({labelHtml:f,value:l.value,typeHighlevel:p,statsDisplay:u,detail:`from: ${s.map(d=>h[d]).join(", ")}`})}function qT(e,n,t){const r=e.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(r.length!==n)throw new Error(`Expected ${n} lines of "lo hi", got ${r.length}`);return r.map((i,o)=>{try{return pw(i,(t==null?void 0:t[o])??Jt)}catch(a){throw new Error(`Line ${o+1}: ${a.message}`)}})}function WJ(e,n,t,r,i,o,a,u){const s=t.svar_entries().map(d=>d.bareName);o&&xv(s,o);const c=Bu(t,"bounds",n,"strict"),l=xu(t,o,a);if(o&&l.bounds===null){e.innerHTML=OT();return}const f=Yn(l,c,{onIncompleteTrial:"error"}),p=Du(t,r),h=t.config.conclusion_type_highlevel;e.innerHTML=Sv({labelHtml:p,lo:f.lo,hi:f.hi,tightness:f.tightness,typeHighlevel:h,statsDisplay:u})}function DT(e,n,t){const r=e.trim().split(/\n/).map(o=>o.trim()).filter(o=>o.length>0);if(r.length!==n)throw new Error(`Expected ${n} lines, got ${r.length}`);return{specs:r.map((o,a)=>{try{return bu(o,(t==null?void 0:t[a])??Jt)}catch(u){throw new Error(`Line ${a+1}: ${u.message}`)}}),warnings:[]}}const XJ="⟦",KJ="⟧";function Cm(e){const n=`${x7("n")}=${e.samples.length.toLocaleString()}`;return e.barrierInnerIters===null?n:`${n}, E${XJ}·${KJ} ${x7("n")}=${e.barrierInnerIters.toLocaleString()}`}function YJ(e,n,t,r){return'<div class="density-result-row"><div class="density-result-text">'+Oi(e,n,t,"monte-carlo",r)+'</div><canvas id="density-canvas" width="400" height="200"></canvas></div>'}function JJ(e,n,t,r){const i=e.querySelector("#density-canvas");if(!i)return;const o=n.samples??n.densityCurve;if(!o)return;const a=Xr(t);Ri(i,o,n.p5,n.p95,a),lt(i,()=>Ri(i,o,n.p5,n.p95,a),{stateHost:e,stateKey:Fv}),Bw(i,o,n.p5,n.p95,t),n.mcPoolToken!==null&&Ru(i,n.mcPoolToken,n.samples.length,{itersPerTarget:r,targetCount:1})}function zJ(e,n,t,r,i,o,a,u,s,c){const l=t.svar_entries().map(b=>b.bareName);a&&xv(l,a);const f=PT(o),p=Bu(t,"sample",n,"strict",f),h=Du(t,r),d=t.config.conclusion_type_highlevel,m=o.ui.probAsOdds,v=xu(t,a,u,c),_=kr(s);if(_u(f)){const b=W2(v,p,{onIncompleteTrial:"error",mcIters:_.mcIters,mcItersPerClick:_.mcItersPerClick});e.innerHTML=Am({comparison:b,typeHighlevel:d,statsDisplay:m,targetLabelHtml:h,canvasId:"density-canvas",provenanceDetail:`Monte Carlo, ${Cm(b.joint)}`}),nI({box:e,canvasId:"density-canvas",layers:[{comparison:b,palette:"series"}],typeHighlevel:d,resizeStateKey:Fv,mcItersPerClick:_.mcItersPerClick});return}const g=Yn(v,p,{onIncompleteTrial:"error",mcIters:_.mcIters,mcItersPerClick:_.mcItersPerClick});e.innerHTML=`<div class="result-label">Monte Carlo (independent, ${Cm(g)})</div>`+YJ(g,d,m,h),JJ(e,g,d,_.mcItersPerClick)}function ZJ(e,n,t,r,i,o,a,u,s,c){const l=Jn(r,o);if(!l){e.innerHTML='<div class="result-detail">No data for this preset.</div>';return}const{source:f}=Ie(wn(r.ui,{presetData:o})),p=Du(n,t);if(f==="adhoc-plainnum"){QJ(e,l,n,t,r,i,p,a,u,s,c);return}e.innerHTML='<div class="result-detail">Unknown preset source.</div>'}function QJ(e,n,t,r,i,o,a,u,s,c,l){const f=t.config.conclusion_type_highlevel,p=i.ui.probAsOdds;if(n.trials.length===0)throw new Error("Plainnum record has no trials to display");const h=xu(t,u,s,l);if(o==="point"){const d=Yn(h,Kn(n.trials,Xt(n),"point",Nr(t)),{onIncompleteTrial:"error"});if(d.perTrial.length===1)e.innerHTML=La({labelHtml:a,value:d.perTrial[0],typeHighlevel:f,statsDisplay:p,detail:`from: ${d.perTrialInputs[0].join(", ")}`});else{const m=d.perTrial.map(v=>xe(v,f,p)).join(", ");e.innerHTML=La({labelHtml:a,value:d.value,typeHighlevel:f,statsDisplay:p,labelPrefix:"mean ",detail:`per sample: ${m}`})}return}if(o==="bounds"){if(u&&h.bounds===null){e.innerHTML=OT();return}const d=Yn(h,Kn(n.trials,Xt(n),"bounds",Nr(t)),{onIncompleteTrial:"error"});e.innerHTML=Sv({labelHtml:a,lo:d.lo,hi:d.hi,tightness:d.tightness,typeHighlevel:f,statsDisplay:p,midpointDetailSuffix:` (envelope of ${d.trialCount} sample${d.trialCount>1?"s":""})`});return}nz(e,n,h,t,i,a,c)}function ez(e,n,t){return e.sampleStage===void 0?[...ww(e,n,t),"target",e.key]:["barrier-conclusion",e.key,n,t.mcIters,t.mcItersPerClick]}function nz(e,n,t,r,i,o,a){const u=kr(a),s=Kn(n.trials,Xt(n),"sample",Nr(r)),c={onIncompleteTrial:"error",mcIters:u.mcIters,mcItersPerClick:u.mcItersPerClick},l={box:e,canvasId:RJ,resizeStateKey:Fv},f={typeHighlevel:r.config.conclusion_type_highlevel,statsDisplay:i.ui.probAsOdds,targetLabelHtml:o,storedTrialsDetail:o2("adhoc",n.trials.length),liveSampleCountDetail:Cm},p=()=>ez(t,s,c),h=r.conclusion_form_or_none();if(h===null)throw new Error("the conclusion box was rendered for a jprob that declares no conclusion");const d=Zr(n,h,!0);if(Z$(n.trials,r)){const v=mI(d);oI(l,f,u,v===null?null:{kind:"pair",pair:v},{run:()=>W2(t,s,c),activationKeyParts:p},z$.specPointerHtml);return}const m=ku(d,zr(n.trials));aI(l,f,u,m===void 0?null:{kind:"stats",stats:m.stats},{run:()=>Yn(t,s,c),activationKeyParts:p})}function x7(e){return`<span class="lc">${e}</span>`}function tz(e,n,t,r,i){if(!n.trim())return null;try{if(e==="point"){const u=MT(n,t,i),s={};for(let c=0;c<r.length;c++)s[r[c]]=u[c];return s}if(e==="bounds"){const u=qT(n,t,i),s={};for(let c=0;c<r.length;c++)s[r[c]]=u[c];return s}const{specs:o}=DT(n,t,i),a={};for(let u=0;u<r.length;u++){const s=o[u];a[r[u]]=s.kind==="family"?s.spec.text:s.pairs}return a}catch{return null}}function Bv(e,n,t,r,i){const o=e.yoursRecord;o.raw_input={...o.raw_input??{},[r]:i};const a=n.svar_entries(),u=a.map(f=>f.bareName),s=u.length,c=Mr(a.map(f=>f.decl)),l=tz(r,i,s,u,c);if(l!==null){const f=o.trials[0];r==="point"?f.point=l:r==="bounds"?f.bounds=l:f.sample=l}T2(n,t,e.plainnumOptionDictKey,o)}function Hv(e,n,t,r,i,o){const a=e.yoursRecord;a.lloads_draft=r;const u=oT(r,i,o);return u.kind==="valid"&&(a.trials[0].lloads=u.lloads),T2(n,t,e.plainnumOptionDictKey,a),u}function B7(e,n,t,r,i,o){if(r==="plaincode"){const a=e.yoursCodeRecord;a.trial_choices={...a.trial_choices??{},[i]:o},zi(n,t,e.codeOptionDictKey,a)}else{const a=e.yoursRecord;a.trial_choices={...a.trial_choices??{},[i]:o},T2(n,t,e.plainnumOptionDictKey,a)}}function rz(e,n){e.addEventListener("input",t=>{const r=t.target;if(r.classList.contains("calc-textarea")){n.persistCalcTextarea(r);return}if(r.classList.contains("assumption-input")){n.persistAssumptionCard(r);return}}),e.addEventListener("change",t=>{const r=t.target;if(r.classList.contains("calc-textarea")){n.recomputeAfterCalcTextarea();return}if(r.classList.contains("assumption-input")){n.recomputeAfterAssumptionCard(r);return}})}const FT="response-note-block",xT="response-note-body",iz="response-note-key",BT="misc",HT="response-note-input",oz="Your notes about this response",az={containerClass:FT,ownContentSelector:`:scope > .${xT}`};function UT(e){return e!==void 0&&e.trim()!==""?e:void 0}function uz(e){if(e===void 0)return[];const n=[];for(const t of Object.keys(e).sort()){const r=UT(e[t]);r!==void 0&&n.push([t,r])}return n}function GT(e){const n=document.createElement("div");n.className=FT;const t=document.createElement("h3");return t.className=iz,t.textContent=e,n.appendChild(t),n}function H7(e,n){const t=GT(e);return t.appendChild(uT(n,xT)),t}function sz(e){const n=GT(BT);return n.appendChild(sT({className:HT,value:e,ariaLabel:oz})),n}function cz(e,n){const t=document.getElementById(`${Be.RESPONSE_NOTES}-section`);if(e.innerHTML="",n.mode==="edit"){t&&(t.hidden=!1),e.appendChild(sz(n.misc));return}const{freeTextPerTrial:r,trialSelection:i}=n,o=i.kind==="mix"?void 0:r[uv(r.length,i.recordTrialIndex)],a=UT(o==null?void 0:o.misc),u=uz(o==null?void 0:o.extra);if(a===void 0&&u.length===0){t&&(t.hidden=!0);return}t&&(t.hidden=!1),a!==void 0&&e.appendChild(H7(BT,a));for(const[s,c]of u)e.appendChild(H7(s,c))}function Uv(e,n,t,r){const i=e.yoursCodeRecord;i.raw_code_input=r,zi(n,t,e.codeOptionDictKey,i)}function lz(e,n,t,r,i){const o=e.yoursCodeRecord;o.reasoning_response={...o.reasoning_response,[r]:i},zi(n,t,e.codeOptionDictKey,o)}function fz(e,n,t,r){const i=e.yoursCodeRecord;i.misc_response=r,zi(n,t,e.codeOptionDictKey,i)}function dz(e,n,t,r){if(e.classList.contains(dT)){const i=e,o=i.dataset[pT];return o===void 0||o===""?!1:(lz(n,t,r,o,i.value),!0)}return e.classList.contains(HT)?(fz(n,t,r,e.value),!0):!1}function Gv(e){const n=`yours_${e}_`,t=[];for(let i=0;i<localStorage.length;i++){const o=localStorage.key(i);o!==null&&o.startsWith(n)&&t.push(o)}const r=[];for(const i of t){const o=localStorage.getItem(i);if(o===null)continue;let a;try{a=JSON.parse(o)}catch{continue}r.push({plainnumOptionDictKey:i.slice(n.length),record:a})}return r.sort((i,o)=>{const a=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(a)}),r}function pz(e,n){localStorage.removeItem(iu(e,n))}function hz(e){const n=Gv(e).map(i=>({kind:"plainnum",plainnumOptionDictKey:i.plainnumOptionDictKey,record:i.record})),t=$2(e).map(i=>({kind:"plaincode",codeOptionDictKey:i.codeOptionDictKey,record:i.record})),r=[...n,...t];return r.sort((i,o)=>{const a=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(a)}),r}function mz(e,n,t,r){const i={};for(const[a,u]of Object.entries(r.cparam_values??{}))jv(u)&&(i[a]=u);for(const[a,u]of Object.entries(r.aopts))jT(u)&&(i[a]=u);const o=ru(n.get_options(),i);return I2(n.config,o),{...e,optionValues:o,plainnumOptionDictKey:t,yoursRecord:r}}function vz(e,n,t,r){const i={};for(const[a,u]of Object.entries(r.aopts))jT(u)&&(i[a]=u);for(const a of n.get_cparams()){const u=ye(a.id);if(u in e.optionValues){const s=e.optionValues[u];if(!jv(s))throw new Error(`Cparam ${a.id} has a non-scalar state value`);i[u]=s}}const o=ru(n.get_options(),i);return I2(n.config,o),{...e,optionValues:o,codeOptionDictKey:t,yoursCodeRecord:r}}function jv(e){const n=typeof e;return n==="string"||n==="number"||n==="boolean"}function jT(e){return jv(e)||Array.isArray(e)&&e.every(n=>typeof n=="string")}function VT(e,n){const t=[];for(const r of e.get_options()){const i=ye(r.id),o=Wt(r.id)?n.cparam_values:n.aopts,a=o==null?void 0:o[i];a!==void 0&&(!Wt(r.id)&&a===r.default_value||t.push(`${i}=${XT(a)}`))}return t.join(" ")}function WT(e,n){const t=["code"];for(const r of e.get_aopts()){const i=ye(r.id),o=n.aopts[i];o!==void 0&&o!==r.default_value&&t.push(`${i}=${XT(o)}`)}return t.join(" ")}function XT(e){return typeof e=="boolean"?e?"true":"false":String(e)}function _z(e,n,t){const r=hz(e.aid),i='<div class="yours-saved-header">Saved estimations</div>';if(r.length===0)return i+'<div class="yours-saved-empty">No saved estimations yet.</div>';const o=r.map(a=>gz(e,n,t,a)).join("");return i+`<div class="yours-saved-list">${o}</div>`}function gz(e,n,t,r){if(r.kind==="plainnum"){const u=U(VT(e,r.record)||"(default options)"),s=U(r.plainnumOptionDictKey);return`<div class="yours-saved-row${t==="yours-plainnum"&&r.plainnumOptionDictKey===n.plainnumOptionDictKey?" yours-saved-row-current":""}" data-kind="plainnum" data-key="${s}" role="button" tabindex="0"><span class="yours-saved-label">${u}</span><button class="yours-saved-delete" data-kind="plainnum" data-key="${s}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}const i=U(WT(e,r.record)),o=U(r.codeOptionDictKey);return`<div class="yours-saved-row yours-saved-row-code${t==="yours-plaincode"&&r.codeOptionDictKey===n.codeOptionDictKey?" yours-saved-row-current":""}" data-kind="plaincode" data-key="${o}" role="button" tabindex="0"><span class="yours-saved-label">${i}</span><button class="yours-saved-delete" data-kind="plaincode" data-key="${o}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}function bz(e,n,t,r){e.innerHTML=_z(n,t,r)}const yz=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"],Ez=`/**
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
`;function Sz(e){if(e.length===0)return["return {","  point:  {},","  bounds: {},","  sample: {},","};"].join(`
`);const n=e.map(i=>`${i}: 0`).join(", "),t=e.map(i=>`${i}: [0, 1]`).join(", "),r=e.map(i=>`    ${i}: tri(0, 0.4, 1),`).join(`
`);return["return {",`  point:  { ${n} },`,`  bounds: { ${t} },`,"  sample: {",r,"  },","};"].join(`
`)}function Az(e){const n=[];for(const t of e.get_cparams()){const r=t.allowed_values;r===void 0||typeof r=="string"||n.push(t.id.slice(7))}return n}const wz="// code data missing",$z=10;function Iz(e,n,t){const r=Az(e),i=e.get_svar_bare_names(),o=`function belief_spec_for_cparam_combo(${r.join(", ")}) {`,a=n.raw_code_input!==""?n.raw_code_input:t==="edit"?Sz(i):wz,u=t==="view"?" readonly":"",c=`// ${yz.join(", ")} are injected helper functions. For details (warning: the literal code with some irrelevant docs): `,l=t==="edit"?'<div class="code-action-row"><button class="code-run-btn" type="button">Run</button><span class="code-status" aria-live="polite"></span></div><div class="code-error-area"></div>':n.raw_code_input===""?"":`<div class="code-action-row"><button class="copy-to-yours-btn" type="button" title="Copy this entry's code into your editable Estimate code">Copy to Estimate</button></div>`;return`<div class="yours-code-input" data-variant="${t}"><div class="code-editor"><pre class="code-signature-line">${U(o)}</pre><pre class="code-helpers-comment"><span class="code-helpers-comment-text">${U(c)}</span><span class="code-helpers-help-slot"></span></pre><textarea class="code-body-input ${Pu}" rows="${$z}" spellcheck="false"${u}>${U(a)}</textarea><pre class="code-signature-line">}</pre></div>`+l+"</div>"}function U7(e,n,t,r){e.innerHTML=Iz(n,t,r),lT(e),Tz(e)}function Tz(e){for(const n of e.querySelectorAll(".code-helpers-help-slot"))n.childElementCount>0||n.appendChild(vW(Ez))}const Lz=1e-15;function Rz(e,n){return n.filter(t=>{const r=e[t];if(typeof r=="string")return G2(r)!==null;if(!Array.isArray(r)||r.length===0)return!1;const i=r[0];return r[r.length-1][0]-i[0]<Lz})}function Cz(e){var t;const n={};for(const r of e){const i=r.id.startsWith("svar:")?r.id.slice(5):r.id,[o,a]=kz[r.type_mathlevel]??[!0,!0],u=((t=r.type_detail)==null?void 0:t.range)??[0,1];n[i]={lo:u[0],hi:u[1],loClosed:o,hiClosed:a}}return n}const kz={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]},Nz=.8,G7=.05,Mz="Positive values mean…",Oz=2;function Pz(e,n,t){if(!n||t&&Object.keys(t).length>0)return null;const r=wE(n,e.get_svar_bare_names());return r.length<Oz?null:r}function KT(e,n,t,r){var o;const i=Pz(n,t,r);return i===null?null:{eligibleSvars:i,degenerateSvars:Rz(((o=e.yoursRecord.trials[0])==null?void 0:o.sample)??{},i)}}function Vv(e,n,t,r,i){return Ie(n).source!=="yours-plainnum"||e.ui.inputMode!=="sample"?null:KT(e,t,r,i)}function Wv(e,n){var r;const t=e.yoursRecord;return t.lloads_draft===void 0?tT((r=t.trials[0])==null?void 0:r.lloads,n.eligibleSvars):nT(t.lloads_draft,n.eligibleSvars)}function YT(e,n,t){const r=e.get_svar_bare_names(),i=Fi(e);if(i.length!==r.length)throw new Error(`joint-dependence editor has ${r.length} subjective variables but ${i.length} display labels`);const o=new Map(r.map((a,u)=>[a,i[u]]));return new Map(t.map(a=>[a,Ae(o.get(a),n)]))}function qz(e,n,t,r,i,o,a){const u=Vv(n,t,r,o,a);if(u===null){e.innerHTML="";return}const s=Wv(n,u);e.innerHTML=Dz(s,u,YT(r,i,u.eligibleSvars),n.ui.jointDependenceEditorOpen),lT(e);const c=e.querySelector(".jde-help-slot");c&&c.appendChild(mt(kX)),JT(e,s,u),zT(e,s,u,r,i)}function Dz(e,n,t,r){const i=e.latents.length===0?Fz():xz(e,n,t);return`<details class="joint-dependence-editor"${r?" open":""}><summary class="jde-summary"><span class="jde-summary-title">Joint dependence</span><span class="jde-summary-explainer">Optional named uncertainties shared across your distributions</span><span class="jde-status-pill"></span></summary><div class="jde-body"><div class="jde-intro"><span class="jde-help-slot"></span><p>A latent is one shared uncertainty that can move two or more of your quantities together, or in opposite directions. Describe what it means, then give it signed loadings. Nothing you state here changes the distributions you gave above.</p></div>`+i+"</div></details>"}function Fz(){return'<div class="jde-empty-state"><div class="jde-empty-title">Currently sampled independently</div><p>Add a latent only when the distributions above do not tell the whole joint-belief story.</p><button class="jde-btn jde-add-latent-btn" type="button">Add a shared uncertainty</button></div>'}function xz(e,n,t){return'<div class="jde-active"><div class="jde-toolbar"><div class="jde-section-title">Shared uncertainties</div><button class="jde-btn jde-add-latent-btn" type="button">+ Add latent</button></div><div class="jde-latent-list">'+e.latents.map(Bz).join("")+`</div><div class="jde-matrix-section"><div class="jde-matrix-heading"><div class="jde-section-title">Signed loadings</div><div class="jde-matrix-hint">−1 falls as the latent rises · +1 rises with it · 0 unaffected</div></div><div class="jde-matrix-scroll">${Hz(e,n,t)}</div><div class="jde-banner" role="status"></div></div><div class="jde-bottom-actions"><button class="jde-btn jde-zero-loadings-btn" type="button">Zero all loadings</button><button class="jde-btn jde-remove-all-btn" type="button">Remove all latents</button></div><details class="jde-correlations"><summary>Implied pairwise correlations</summary><p class="jde-correlations-note">Derived from the loadings; feedback, not another input surface. Quantities your latents leave uncoupled are omitted.</p><div class="jde-matrix-scroll">`+Gz(n,t)+'</div></details><div class="jde-artifact"><div class="jde-artifact-caption">What your response discloses:</div><div class="jde-artifact-host"></div></div></div>'}function Bz(e,n){const t=`jde-latent-name-${n}`,r=`jde-latent-description-${n}`;return`<div class="jde-latent-card" data-latent-index="${n}"><div class="jde-latent-header"><span class="jde-latent-number">${n+1}</span><button class="jde-btn jde-remove-latent-btn" type="button" data-latent-index="${n}">Remove</button></div><div class="jde-latent-fields"><div class="jde-field"><label for="${t}">Short name</label><input id="${t}" class="jde-latent-text" type="text" data-latent-index="${n}" data-latent-field="name" placeholder="e.g. shared evidence quality" value="${Z(e.name)}"></div><div class="jde-field"><label for="${r}">Meaning and positive direction</label><textarea id="${r}" class="jde-latent-text ${Pu}" rows="2" data-latent-index="${n}" data-latent-field="description" placeholder="${Z(Mz)}">${U(e.description)}</textarea></div></div></div>`}function Hz(e,n,t){const r='<tr><th class="jde-variable-col">Quantity</th>'+e.latents.map((a,u)=>`<th class="jde-loading-col"><span class="jde-matrix-latent-name" data-latent-index="${u}"></span><span class="jde-matrix-latent-hint">−1 to +1</span></th>`).join("")+'<th class="jde-budget-col">Loading budget</th></tr>',i=new Set(n.degenerateSvars),o=n.eligibleSvars.map(a=>{const u=i.has(a),s=t.get(a),c=u?'<span class="jde-svar-note">single value — no dependence possible</span>':"",l=e.latents.map((f,p)=>`<td>${Uz(f.loadings[a]??null,p,a,s,u)}</td>`).join("");return`<tr data-svar="${Z(a)}" data-svar-label="${Z(ZT(s))}"${u?' class="jde-row-ineligible"':""}><th scope="row" class="jde-svar-cell" data-svar="${Z(a)}"><span class="jde-svar-label">${s}</span>${c}</th>`+l+`<td><div class="jde-budget-track"><span class="jde-budget-fill" data-svar="${Z(a)}"></span></div><div class="jde-budget-copy" data-svar="${Z(a)}"></div></td></tr>`}).join("");return`<table class="jde-loading-matrix"><thead>${r}</thead><tbody>${o}</tbody></table>`}function Uz(e,n,t,r,i){const o=Z(`Loading of ${ZT(r)} on latent ${n+1}`),a=`data-latent-index="${n}" data-svar="${Z(t)}"${i?" disabled":""}`,u=e===null?"":QT(e);return`<div class="jde-loading-control"><input class="jde-loading-range" type="range" min="-1" max="1" step="${G7}" value="${e??0}" ${a} aria-label="${o}"><input class="jde-loading-number" type="number" min="-1" max="1" step="${G7}" value="${u}" ${a} aria-label="${o}, numeric"></div>`}function Gz(e,n){const t=e.eligibleSvars,r=t.map(o=>`<th class="jde-svar-cell" data-svar="${Z(o)}"><span class="jde-svar-label">${n.get(o)}</span></th>`).join(""),i=t.map(o=>`<tr><th class="jde-svar-cell" data-svar="${Z(o)}"><span class="jde-svar-label">${n.get(o)}</span></th>`+t.map(()=>"<td></td>").join("")+"</tr>").join("");return`<table class="jde-correlation-table"><thead><tr><th></th>${r}</tr></thead><tbody>${i}</tbody></table>`}function JT(e,n,t){const r=iT(n,t.eligibleSvars,t.degenerateSvars,tZ(e)),i=FY(n),o=e.querySelector(".jde-status-pill");o&&(o.className=`jde-status-pill ${jz(r,n,i)}`.trimEnd(),o.textContent=Vz(r,n,i)),Wz(e,n),Xz(e,r),Kz(e,n),Yz(e,n,t),Jz(e,r,n,i),zz(e,n,t)}function jz(e,n,t){return e.length>0?"invalid":t?"valid":n.latents.length>0?"warning":""}function Vz(e,n,t){if(e.length>0)return`${e.length} issue${e.length===1?"":"s"}`;const r=n.latents.length;return t?`${r} latent${r===1?"":"s"} · valid`:r>0?`${r} considered · independent`:"Independent"}function Wz(e,n){var t;for(const r of e.querySelectorAll(".jde-loading-range, .jde-loading-number")){if(r===document.activeElement)continue;const i=r.dataset.svar;if(i===void 0)continue;const o=((t=n.latents[Number(r.dataset.latentIndex)])==null?void 0:t.loadings[i])??null;o!==null&&(r.value=QT(o))}}function Xz(e,n){const t=new Set(n.filter(i=>i.field!==void 0).map(i=>`${i.latentIndex}:${i.field}`));for(const i of e.querySelectorAll(".jde-latent-text"))i.classList.toggle("jde-field-invalid",t.has(`${i.dataset.latentIndex}:${i.dataset.latentField}`));const r=new Set(n.filter(i=>i.svar!==void 0&&i.latentIndex!==void 0).map(i=>`${i.latentIndex}:${i.svar}`));for(const i of e.querySelectorAll(".jde-loading-number"))i.classList.toggle("jde-field-invalid",r.has(`${i.dataset.latentIndex}:${i.dataset.svar}`))}function Kz(e,n){var t;for(const r of e.querySelectorAll(".jde-matrix-latent-name")){const i=Number(r.dataset.latentIndex),o=(t=n.latents[i])==null?void 0:t.name.trim();r.textContent=o||`Latent ${i+1}`,r.title=r.textContent}}function Yz(e,n,t){const r=rT(n,t.eligibleSvars);for(const i of e.querySelectorAll(".jde-budget-fill")){const o=r[i.dataset.svar??""];o!==void 0&&(i.style.width=`${Math.min(100,Math.max(0,o*100))}%`,i.className="jde-budget-fill"+(o>1?" over":o>Nz?" near":""))}for(const i of e.querySelectorAll(".jde-budget-copy")){const o=r[i.dataset.svar??""];if(o===void 0)continue;const a=o>1;i.className=`jde-budget-copy${a?" over":""}`,i.textContent=a?`${o.toFixed(3)} / 1 · over by ${(o-1).toFixed(3)}`:`${o.toFixed(3)} / 1`}}function Jz(e,n,t,r){const i=e.querySelector(".jde-banner");if(i){if(n.length>0){i.className="jde-banner invalid";const o=n.length>1?` (${n.length-1} more)`:"";i.textContent=`${n[0].message}${o} The calculator keeps using your last valid joint specification until this is repaired.`;return}if(!r){i.className="jde-banner warning",i.textContent=t.latents.length>0?"Valid, and exactly independent: the latents you named are disclosed as considered, with every loading at zero.":"Valid: sampled independently.";return}i.className="jde-banner",i.textContent="Valid joint specification. Every quantity is within its loading budget."}}function zz(e,n,t){const r=e.querySelector(".jde-correlations"),i=e.querySelector(".jde-correlation-table thead tr"),o=e.querySelector(".jde-correlation-table tbody");if(r===null||i===null||o===null)return;const a=DY(n,t.eligibleSvars),u=t.eligibleSvars.map((s,c)=>t.eligibleSvars.some((l,f)=>f!==c&&a[c][f]!==0));r.hidden=u.filter(Boolean).length<2,i.querySelectorAll("th").forEach((s,c)=>{c>0&&(s.hidden=!u[c-1])}),o.querySelectorAll("tr").forEach((s,c)=>{s.hidden=!u[c],s.querySelectorAll("td").forEach((l,f)=>{var p;l.hidden=!u[f],l.textContent=rZ(((p=a[c])==null?void 0:p[f])??NaN)})})}function Zz(e,n,t,r,i,o,a){if(e.querySelector(".joint-dependence-editor")===null)return;const u=Vv(n,t,r,o,a);if(u===null)return;const s=YT(r,i,u.eligibleSvars);for(const c of e.querySelectorAll(".jde-svar-cell")){const l=s.get(c.dataset.svar??""),f=c.querySelector(".jde-svar-label");l!==void 0&&f!==null&&(f.innerHTML=l)}zT(e,Wv(n,u),u,r,i)}function zT(e,n,t,r,i){const o=e.querySelector(".jde-artifact-host");if(o===null)return;const a=oT(n,t.eligibleSvars,t.degenerateSvars);o.innerHTML=a.kind==="invalid"?'<div class="jde-artifact-pending">Preview pauses until the issues above are repaired.</div>':gv(a.lloads,r,i,{keepFolded:!0}).specHtml}function j7(e){const n=Number(e.dataset.latentIndex);if(!Number.isInteger(n))return null;if(e.classList.contains("jde-latent-text")){const t=e.dataset.latentField;return t!=="name"&&t!=="description"?null:{kind:"text",latentIndex:n,field:t,value:e.value}}if(e.classList.contains("jde-loading-range")||e.classList.contains("jde-loading-number")){const t=e.dataset.svar;if(t===void 0)return null;const r=e.value.trim(),i=r===""||!Number.isFinite(Number(r))?null:Number(r);return{kind:"loading",latentIndex:n,svar:t,value:i}}return null}function Qz(e,n){return{latents:e.latents.map((t,r)=>r!==n.latentIndex?t:n.kind==="text"?{...t,[n.field]:n.value}:{...t,loadings:{...t.loadings,[n.svar]:n.value}})}}function eZ(e){const n=e.closest("button");if(n===null)return null;if(n.classList.contains("jde-add-latent-btn"))return{kind:"add"};if(n.classList.contains("jde-zero-loadings-btn"))return{kind:"zero-all"};if(n.classList.contains("jde-remove-all-btn"))return{kind:"remove-all"};if(n.classList.contains("jde-remove-latent-btn")){const t=Number(n.dataset.latentIndex);return Number.isInteger(t)?{kind:"remove",latentIndex:t}:null}return null}function nZ(e,n,t){switch(n.kind){case"add":return{latents:[...e.latents,D7(t)]};case"remove":return{latents:e.latents.filter((r,i)=>i!==n.latentIndex)};case"zero-all":return{latents:e.latents.map(r=>({...r,loadings:D7(t).loadings}))};case"remove-all":return{latents:[]}}}function ZT(e){return e.replace(/<[^>]*>/g,"").trim()}function tZ(e){const n={};for(const t of e.querySelectorAll("tr[data-svar-label]")){const r=t.dataset.svar;r!==void 0&&(n[r]=t.dataset.svarLabel)}return n}function QT(e){return String(e)}function rZ(e){return Number.isFinite(e)?e===0?"0.000":`${e>0?"+":"−"}${Math.abs(e).toFixed(3)}`:"invalid"}function iZ(e,n,t,r,i,o,a,u){const{source:s}=Ie(t);if(s==="yours-plainnum"){qz(e,n,t,r,i,a,u);return}if(s==="yours-plaincode"){aZ(e,n,r,i);return}oZ(e,n,r,i,o)}function oZ(e,n,t,r,i){if(!i){e.innerHTML="";return}const o=lv(t,n,i),a=ft(n,i);if(o.length===0||a.kind==="mix"){e.innerHTML="";return}const u=o[a.recordTrialIndex];e.innerHTML=u===void 0?"":gv(u.lloads,t,r,{offerCopyToYours:!Xe(wn(n.ui,{presetData:i}))}).specHtml}function aZ(e,n,t,r){const i=w$(t,n);e.innerHTML=i===void 0?"":gv(i.lloads,t,r).specHtml}function Xv(e,n){return e??!!(n??!1)}function uZ(e,n){return!Xv(e,n)}function sZ(e){return!Xe(e)}const eL="execution timed out",km="execution aborted";function cZ(e,n){const r=(n.workerFactory??lZ)();return new Promise((i,o)=>{var l,f;let a=!1;const u=()=>{var p;a=!0,clearTimeout(c),(p=n.signal)==null||p.removeEventListener("abort",s),r.terminate()},s=()=>{a||(u(),o(new Error(km)))};if((l=n.signal)!=null&&l.aborted){r.terminate(),o(new Error(km));return}(f=n.signal)==null||f.addEventListener("abort",s);const c=setTimeout(()=>{a||(u(),o(new Error(eL)))},n.timeoutMs);r.addEventListener("message",p=>{a||(u(),i(p.data))}),r.addEventListener("error",p=>{a||(u(),o(new Error(p.message||"worker error")))}),r.postMessage(e)})}function lZ(){return new Worker(new URL("/hirwebdep/assets/plaincode_eval_worker-ChjrGsV-.js",import.meta.url),{type:"module"})}function fZ(e,n,t,r){const{html:i}=GW(n,void 0,t);e.innerHTML=i}const Kv="keymap-popover",dZ=70,pZ=620,hZ=260,mZ=120,Co=16;function vZ(){return Kr}function nL(e){const n=window.innerWidth,t=window.innerHeight,r=IX(),i=(r==null?void 0:r.left)??Co,o=(r==null?void 0:r.bottom)??Co,a=Math.max(hZ,Math.min(pZ,Math.round(n*dZ/100),n-i-Co)),u=Math.max(mZ,t-o-Co);e.style.width=`${a}px`,e.style.maxHeight=`${u}px`,e.style.left=`${Math.round(i)}px`,e.style.top=`${Math.round(o)}px`}function Yv(){return document.getElementById(Kv)}function _Z(){return Yv()!==null}function Vo(){var e;(e=Yv())==null||e.remove()}function Pa(){const e=Yv();e&&nL(e)}function gZ(){const e=q$(),n=_Z();if(e&&n){D$(),Vo();return}e||$X(),n?Pa():tL()}function ko(e,n){e.classList.toggle("keymap-row-invalid",n!=="");const t=e.querySelector(".keymap-error");t&&(t.textContent=n)}function bZ(e){const n=Yr();e.innerHTML="";for(const t of vZ()){const r=document.createElement("div");r.className="keymap-row";const i=document.createElement("label");i.className="keymap-label",i.htmlFor=`keymap-input-${t.id}`,i.textContent=t.description;const o=document.createElement("input");o.id=`keymap-input-${t.id}`,o.className="keymap-input",o.type="text",o.maxLength=1,o.autocomplete="off",o.spellcheck=!1,o.value=n[t.id]??"",o.dataset.shortcutId=t.id,o.setAttribute("aria-label",`${t.description} shortcut key`);const a=document.createElement("div");a.className="keymap-error",o.addEventListener("input",()=>{const u=o.dataset.shortcutId,s=rv(o.value);if(!s.ok){ko(r,s.error??"Invalid shortcut key.");return}const c=s$(u,s.key);if(c){const f=Kr.find(p=>p.id===c);ko(r,`Already assigned to "${(f==null?void 0:f.description)??c}".`);return}const l=yW(u,s.key);if(!l.ok){ko(r,l.error??"Invalid shortcut key.");return}o.value=l.key,ko(r,"")}),r.appendChild(i),r.appendChild(o),r.appendChild(a),e.appendChild(r)}}function tL(){Vo();const e=document.createElement("div");e.id=Kv,e.className="keymap-popover",e.tabIndex=-1;const n=document.createElement("button");n.className="help-widget-close",n.type="button",n.textContent="×",n.setAttribute("aria-label","Close");const t=document.createElement("h3");t.className="keymap-title",t.textContent="Keymap";const r=document.createElement("div");r.className="keymap-body",bZ(r),n.addEventListener("click",Vo),e.addEventListener("keydown",i=>{i.key==="Escape"&&Vo()}),e.appendChild(n),e.appendChild(t),e.appendChild(r),document.body.appendChild(e),nL(e),e.focus()}const yZ="arg-title-help",EZ=20,SZ=50,V7=/\b\d+\.\d+\.\d+\b/;function AZ(e,n){return V7.test(e)||n!==void 0&&V7.test(n)}function wZ(e,n){const t=e.querySelector(".arg-title");if(!t||!AZ(t.textContent??"",n))return;const r=mt(NX,EZ,SZ);r.classList.add(yZ),t.prepend(r)}const Jv="global-example-controls",$Z=5;function IZ(e){return e.querySelectorAll(".examples").length}function rL(e){return IZ(e)>=$Z}function iL(e,n){const t=document.getElementById(Jv);t&&(t.hidden=!(n&&rL(e)))}function TZ(){const e=document.getElementById(Jv);return e!==null&&!e.hidden}const W7="calculator-adhoc-meta";function oL(e,n){const t=document.getElementById(W7);if(!n){t==null||t.remove();return}const r=t??(()=>{const o=document.createElement("div");return o.id=W7,e.insertAdjacentElement("beforebegin",o),o})();r.className="adhoc-meta",r.innerHTML="";const i=document.createElement("div");i.className="adhoc-meta-body",aT(i,n),r.appendChild(i)}const Nm="stats-display-select",LZ=["probability","odds"],RZ="Mean, median, and credible interval probabilities displayed as odds",CZ="Computed probabilities displayed as odds";function kZ(e,n,t){const r=ln(Ie(n).source);return r==="plaincode"||r==="richcode"||dt(e,t)==="sample"}function NZ(e){return e?Object.values(e).some(n=>n.typeHighlevel==="probability"):!1}function MZ(e,n,t,r,i){if(!NZ(r)){e.innerHTML="";return}const o=n.ui.probAsOdds,a=LZ.map(c=>`<option value="${c}"${c===o?" selected":""}>${c}</option>`).join(""),u=kZ(n,t,i)?RZ:CZ,s=o==="odds"?`<p class="stats-display-odds-note"><strong>${u}</strong></p>`:"";e.innerHTML=`<div class="stats-display-row"><label for="${Nm}">stats display</label><select id="${Nm}">${a}</select></div>`+s}const aL={SVAR_CARDS:Et("ESTIMATION","SVAR_CARDS"),JOINT_DEPENDENCE:Et("ESTIMATION","JOINT_DEPENDENCE"),CALCULATOR_HEADER:Et("CALCULATOR","CALCULATOR_HEADER"),CALCULATOR_INPUT:Et("CALCULATOR","CALCULATOR_INPUT"),CALCULATOR_RESULTS:Et("CALCULATOR","CALCULATOR_RESULTS"),DERIVED_FORMS:gm,YOURS_CODE_INPUT:Et("CALCULATOR","YOURS_CODE_INPUT"),YOURS_SAVED_LIST:Et("CALCULATOR","YOURS_SAVED_LIST")};function uL(e){return aL[e]}function OZ(e){const n=new Map;for(const i of e){const o=i.kind==="pair"?i.pair:[i.subentry];for(const a of o){if(n.has(a))throw new Error(`Duplicate subentry mount: ${a}`);n.set(a,i)}}for(const i of Object.keys(aL))if(!n.has(i))throw new Error(`Missing subentry mount: ${i}`);function t(i){return document.getElementById(uL(i))}function r(i,o){var a;if(i.visible&&!i.visible(o)){const u=i.kind==="pair"?i.pair:[i.subentry];for(const s of u)(a=t(s))==null||a.replaceChildren();return}if(i.kind==="pair"){const u=t(i.pair[0]),s=t(i.pair[1]);u&&s&&i.render(u,s,o)}else{const u=t(i.subentry);u&&i.render(u,o)}}return{container:t,render(i,o){r(n.get(i),o)},renderAll(i){for(const o of e)r(o,i)}}}function sL(e,n){const t={...e.inspectedCparamValues},r={...e.cparamValues},i={...e.cparamPinned};for(const[o,a]of Object.entries(n))t[o]=a,r[o]=a,i[o]=!0;return{inspectedCparamValues:t,cparamValues:r,cparamPinned:i}}function PZ(e,n,t){return{...sL(e,t),readTrials:LP(e.readTrials,n)}}function qZ(e,n){return{...sL(e,n.combination),readTrials:TP(n.jtaskGroupId,n.configuration,n.singleContributingTrial)}}const X7="problem-reconstruction-label",DZ="The problem text on this page is reconstructed from the current problem template, using the options recorded with these results. The wording the trials answered may have differed.";function FZ(e,n){var r;if((r=e.querySelector(`:scope > .${X7}`))==null||r.remove(),!n)return;const t=document.createElement("p");t.className=X7,t.textContent=DZ,t.hidden=!0,e.prepend(t)}var jh,K7;function xZ(){if(K7)return jh;K7=1;function e(k){return k instanceof Map?k.clear=k.delete=k.set=function(){throw new Error("map is read-only")}:k instanceof Set&&(k.add=k.clear=k.delete=function(){throw new Error("set is read-only")}),Object.freeze(k),Object.getOwnPropertyNames(k).forEach(D=>{const W=k[D],le=typeof W;(le==="object"||le==="function")&&!Object.isFrozen(W)&&e(W)}),k}class n{constructor(D){D.data===void 0&&(D.data={}),this.data=D.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(k){return k.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(k,...D){const W=Object.create(null);for(const le in k)W[le]=k[le];return D.forEach(function(le){for(const Ue in le)W[Ue]=le[Ue]}),W}const i="</span>",o=k=>!!k.scope,a=(k,{prefix:D})=>{if(k.startsWith("language:"))return k.replace("language:","language-");if(k.includes(".")){const W=k.split(".");return[`${D}${W.shift()}`,...W.map((le,Ue)=>`${le}${"_".repeat(Ue+1)}`)].join(" ")}return`${D}${k}`};class u{constructor(D,W){this.buffer="",this.classPrefix=W.classPrefix,D.walk(this)}addText(D){this.buffer+=t(D)}openNode(D){if(!o(D))return;const W=a(D.scope,{prefix:this.classPrefix});this.span(W)}closeNode(D){o(D)&&(this.buffer+=i)}value(){return this.buffer}span(D){this.buffer+=`<span class="${D}">`}}const s=(k={})=>{const D={children:[]};return Object.assign(D,k),D};class c{constructor(){this.rootNode=s(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(D){this.top.children.push(D)}openNode(D){const W=s({scope:D});this.add(W),this.stack.push(W)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(D){return this.constructor._walk(D,this.rootNode)}static _walk(D,W){return typeof W=="string"?D.addText(W):W.children&&(D.openNode(W),W.children.forEach(le=>this._walk(D,le)),D.closeNode(W)),D}static _collapse(D){typeof D!="string"&&D.children&&(D.children.every(W=>typeof W=="string")?D.children=[D.children.join("")]:D.children.forEach(W=>{c._collapse(W)}))}}class l extends c{constructor(D){super(),this.options=D}addText(D){D!==""&&this.add(D)}startScope(D){this.openNode(D)}endScope(){this.closeNode()}__addSublanguage(D,W){const le=D.root;W&&(le.scope=`language:${W}`),this.add(le)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function f(k){return k?typeof k=="string"?k:k.source:null}function p(k){return m("(?=",k,")")}function h(k){return m("(?:",k,")*")}function d(k){return m("(?:",k,")?")}function m(...k){return k.map(W=>f(W)).join("")}function v(k){const D=k[k.length-1];return typeof D=="object"&&D.constructor===Object?(k.splice(k.length-1,1),D):{}}function _(...k){return"("+(v(k).capture?"":"?:")+k.map(le=>f(le)).join("|")+")"}function g(k){return new RegExp(k.toString()+"|").exec("").length-1}function b(k,D){const W=k&&k.exec(D);return W&&W.index===0}const y=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(k,{joinWith:D}){let W=0;return k.map(le=>{W+=1;const Ue=W;let Ge=f(le),Q="";for(;Ge.length>0;){const Y=y.exec(Ge);if(!Y){Q+=Ge;break}Q+=Ge.substring(0,Y.index),Ge=Ge.substring(Y.index+Y[0].length),Y[0][0]==="\\"&&Y[1]?Q+="\\"+String(Number(Y[1])+Ue):(Q+=Y[0],Y[0]==="("&&W++)}return Q}).map(le=>`(${le})`).join(D)}const w=/\b\B/,I="[a-zA-Z]\\w*",C="[a-zA-Z_]\\w*",L="\\b\\d+(\\.\\d+)?",$="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",A="\\b(0b[01]+)",S="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",T=(k={})=>{const D=/^#![ ]*\//;return k.binary&&(k.begin=m(D,/.*\b/,k.binary,/\b.*/)),r({scope:"meta",begin:D,end:/$/,relevance:0,"on:begin":(W,le)=>{W.index!==0&&le.ignoreMatch()}},k)},R={begin:"\\\\[\\s\\S]",relevance:0},P={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[R]},M={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[R]},x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},q=function(k,D,W={}){const le=r({scope:"comment",begin:k,end:D,contains:[]},W);le.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Ue=_("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return le.contains.push({begin:m(/[ ]+/,"(",Ue,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),le},F=q("//","$"),O=q("/\\*","\\*/"),te=q("#","$"),G={scope:"number",begin:L,relevance:0},z={scope:"number",begin:$,relevance:0},re={scope:"number",begin:A,relevance:0},se={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[R,{begin:/\[/,end:/\]/,relevance:0,contains:[R]}]},j={scope:"title",begin:I,relevance:0},K={scope:"title",begin:C,relevance:0},V={begin:"\\.\\s*"+C,relevance:0};var he=Object.freeze({__proto__:null,APOS_STRING_MODE:P,BACKSLASH_ESCAPE:R,BINARY_NUMBER_MODE:re,BINARY_NUMBER_RE:A,COMMENT:q,C_BLOCK_COMMENT_MODE:O,C_LINE_COMMENT_MODE:F,C_NUMBER_MODE:z,C_NUMBER_RE:$,END_SAME_AS_BEGIN:function(k){return Object.assign(k,{"on:begin":(D,W)=>{W.data._beginMatch=D[1]},"on:end":(D,W)=>{W.data._beginMatch!==D[1]&&W.ignoreMatch()}})},HASH_COMMENT_MODE:te,IDENT_RE:I,MATCH_NOTHING_RE:w,METHOD_GUARD:V,NUMBER_MODE:G,NUMBER_RE:L,PHRASAL_WORDS_MODE:x,QUOTE_STRING_MODE:M,REGEXP_MODE:se,RE_STARTERS_RE:S,SHEBANG:T,TITLE_MODE:j,UNDERSCORE_IDENT_RE:C,UNDERSCORE_TITLE_MODE:K});function ee(k,D){k.input[k.index-1]==="."&&D.ignoreMatch()}function ue(k,D){k.className!==void 0&&(k.scope=k.className,delete k.className)}function Te(k,D){D&&k.beginKeywords&&(k.begin="\\b("+k.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",k.__beforeBegin=ee,k.keywords=k.keywords||k.beginKeywords,delete k.beginKeywords,k.relevance===void 0&&(k.relevance=0))}function Se(k,D){Array.isArray(k.illegal)&&(k.illegal=_(...k.illegal))}function vt(k,D){if(k.match){if(k.begin||k.end)throw new Error("begin & end are not supported with match");k.begin=k.match,delete k.match}}function fn(k,D){k.relevance===void 0&&(k.relevance=1)}const _e=(k,D)=>{if(!k.beforeMatch)return;if(k.starts)throw new Error("beforeMatch cannot be used with starts");const W=Object.assign({},k);Object.keys(k).forEach(le=>{delete k[le]}),k.keywords=W.keywords,k.begin=m(W.beforeMatch,p(W.begin)),k.starts={relevance:0,contains:[Object.assign(W,{endsParent:!0})]},k.relevance=0,delete W.beforeMatch},Cn=["of","and","for","in","not","or","if","then","parent","list","value"],Ze="keyword";function kn(k,D,W=Ze){const le=Object.create(null);return typeof k=="string"?Ue(W,k.split(" ")):Array.isArray(k)?Ue(W,k):Object.keys(k).forEach(function(Ge){Object.assign(le,kn(k[Ge],D,Ge))}),le;function Ue(Ge,Q){D&&(Q=Q.map(Y=>Y.toLowerCase())),Q.forEach(function(Y){const ce=Y.split("|");le[ce[0]]=[Ge,Ft(ce[0],ce[1])]})}}function Ft(k,D){return D?Number(D):J(k)?0:1}function J(k){return Cn.includes(k.toLowerCase())}const ve={},Nn=k=>{console.error(k)},ti=(k,...D)=>{console.log(`WARN: ${k}`,...D)},rt=(k,D)=>{ve[`${k}/${D}`]||(console.log(`Deprecated as of ${k}. ${D}`),ve[`${k}/${D}`]=!0)},_t=new Error;function ir(k,D,{key:W}){let le=0;const Ue=k[W],Ge={},Q={};for(let Y=1;Y<=D.length;Y++)Q[Y+le]=Ue[Y],Ge[Y+le]=!0,le+=g(D[Y-1]);k[W]=Q,k[W]._emit=Ge,k[W]._multi=!0}function ri(k){if(Array.isArray(k.begin)){if(k.skip||k.excludeBegin||k.returnBegin)throw Nn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),_t;if(typeof k.beginScope!="object"||k.beginScope===null)throw Nn("beginScope must be object"),_t;ir(k,k.begin,{key:"beginScope"}),k.begin=E(k.begin,{joinWith:""})}}function ii(k){if(Array.isArray(k.end)){if(k.skip||k.excludeEnd||k.returnEnd)throw Nn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),_t;if(typeof k.endScope!="object"||k.endScope===null)throw Nn("endScope must be object"),_t;ir(k,k.end,{key:"endScope"}),k.end=E(k.end,{joinWith:""})}}function go(k){k.scope&&typeof k.scope=="object"&&k.scope!==null&&(k.beginScope=k.scope,delete k.scope)}function Qe(k){go(k),typeof k.beginScope=="string"&&(k.beginScope={_wrap:k.beginScope}),typeof k.endScope=="string"&&(k.endScope={_wrap:k.endScope}),ri(k),ii(k)}function Fe(k){function D(Q,Y){return new RegExp(f(Q),"m"+(k.case_insensitive?"i":"")+(k.unicodeRegex?"u":"")+(Y?"g":""))}class W{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(Y,ce){ce.position=this.position++,this.matchIndexes[this.matchAt]=ce,this.regexes.push([ce,Y]),this.matchAt+=g(Y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const Y=this.regexes.map(ce=>ce[1]);this.matcherRe=D(E(Y,{joinWith:"|"}),!0),this.lastIndex=0}exec(Y){this.matcherRe.lastIndex=this.lastIndex;const ce=this.matcherRe.exec(Y);if(!ce)return null;const Ke=ce.findIndex((oi,Wu)=>Wu>0&&oi!==void 0),Ve=this.matchIndexes[Ke];return ce.splice(0,Ke),Object.assign(ce,Ve)}}class le{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(Y){if(this.multiRegexes[Y])return this.multiRegexes[Y];const ce=new W;return this.rules.slice(Y).forEach(([Ke,Ve])=>ce.addRule(Ke,Ve)),ce.compile(),this.multiRegexes[Y]=ce,ce}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(Y,ce){this.rules.push([Y,ce]),ce.type==="begin"&&this.count++}exec(Y){const ce=this.getMatcher(this.regexIndex);ce.lastIndex=this.lastIndex;let Ke=ce.exec(Y);if(this.resumingScanAtSamePosition()&&!(Ke&&Ke.index===this.lastIndex)){const Ve=this.getMatcher(0);Ve.lastIndex=this.lastIndex+1,Ke=Ve.exec(Y)}return Ke&&(this.regexIndex+=Ke.position+1,this.regexIndex===this.count&&this.considerAll()),Ke}}function Ue(Q){const Y=new le;return Q.contains.forEach(ce=>Y.addRule(ce.begin,{rule:ce,type:"begin"})),Q.terminatorEnd&&Y.addRule(Q.terminatorEnd,{type:"end"}),Q.illegal&&Y.addRule(Q.illegal,{type:"illegal"}),Y}function Ge(Q,Y){const ce=Q;if(Q.isCompiled)return ce;[ue,vt,Qe,_e].forEach(Ve=>Ve(Q,Y)),k.compilerExtensions.forEach(Ve=>Ve(Q,Y)),Q.__beforeBegin=null,[Te,Se,fn].forEach(Ve=>Ve(Q,Y)),Q.isCompiled=!0;let Ke=null;return typeof Q.keywords=="object"&&Q.keywords.$pattern&&(Q.keywords=Object.assign({},Q.keywords),Ke=Q.keywords.$pattern,delete Q.keywords.$pattern),Ke=Ke||/\w+/,Q.keywords&&(Q.keywords=kn(Q.keywords,k.case_insensitive)),ce.keywordPatternRe=D(Ke,!0),Y&&(Q.begin||(Q.begin=/\B|\b/),ce.beginRe=D(ce.begin),!Q.end&&!Q.endsWithParent&&(Q.end=/\B|\b/),Q.end&&(ce.endRe=D(ce.end)),ce.terminatorEnd=f(ce.end)||"",Q.endsWithParent&&Y.terminatorEnd&&(ce.terminatorEnd+=(Q.end?"|":"")+Y.terminatorEnd)),Q.illegal&&(ce.illegalRe=D(Q.illegal)),Q.contains||(Q.contains=[]),Q.contains=[].concat(...Q.contains.map(function(Ve){return en(Ve==="self"?Q:Ve)})),Q.contains.forEach(function(Ve){Ge(Ve,ce)}),Q.starts&&Ge(Q.starts,Y),ce.matcher=Ue(ce),ce}if(k.compilerExtensions||(k.compilerExtensions=[]),k.contains&&k.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return k.classNameAliases=r(k.classNameAliases||{}),Ge(k)}function or(k){return k?k.endsWithParent||or(k.starts):!1}function en(k){return k.variants&&!k.cachedVariants&&(k.cachedVariants=k.variants.map(function(D){return r(k,{variants:null},D)})),k.cachedVariants?k.cachedVariants:or(k)?r(k,{starts:k.starts?r(k.starts):null}):Object.isFrozen(k)?r(k):k}var Mn="11.11.1";class mn extends Error{constructor(D,W){super(D),this.name="HTMLInjectionError",this.html=W}}const xt=t,ar=r,ur=Symbol("nomatch"),dR=7,s3=function(k){const D=Object.create(null),W=Object.create(null),le=[];let Ue=!0;const Ge="Could not find the language '{}', did you forget to load/include a language module?",Q={disableAutodetect:!0,name:"Plain text",contains:[]};let Y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function ce(H){return Y.noHighlightRe.test(H)}function Ke(H){let oe=H.className+" ";oe+=H.parentNode?H.parentNode.className:"";const me=Y.languageDetectRe.exec(oe);if(me){const Le=gt(me[1]);return Le||(ti(Ge.replace("{}",me[1])),ti("Falling back to no-highlight mode for this block.",H)),Le?me[1]:"no-highlight"}return oe.split(/\s+/).find(Le=>ce(Le)||gt(Le))}function Ve(H,oe,me){let Le="",We="";typeof oe=="object"?(Le=H,me=oe.ignoreIllegals,We=oe.language):(rt("10.7.0","highlight(lang, code, ...args) has been deprecated."),rt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),We=H,Le=oe),me===void 0&&(me=!0);const On={code:Le,language:We};yo("before:highlight",On);const bt=On.result?On.result:oi(On.language,On.code,me);return bt.code=On.code,yo("after:highlight",bt),bt}function oi(H,oe,me,Le){const We=Object.create(null);function On(X,ne){return X.keywords[ne]}function bt(){if(!fe.keywords){nn.addText(Re);return}let X=0;fe.keywordPatternRe.lastIndex=0;let ne=fe.keywordPatternRe.exec(Re),de="";for(;ne;){de+=Re.substring(X,ne.index);const $e=xn.case_insensitive?ne[0].toLowerCase():ne[0],rn=On(fe,$e);if(rn){const[it,RR]=rn;if(nn.addText(de),de="",We[$e]=(We[$e]||0)+1,We[$e]<=dR&&(Ao+=RR),it.startsWith("_"))de+=ne[0];else{const CR=xn.classNameAliases[it]||it;Fn(ne[0],CR)}}else de+=ne[0];X=fe.keywordPatternRe.lastIndex,ne=fe.keywordPatternRe.exec(Re)}de+=Re.substring(X),nn.addText(de)}function Eo(){if(Re==="")return;let X=null;if(typeof fe.subLanguage=="string"){if(!D[fe.subLanguage]){nn.addText(Re);return}X=oi(fe.subLanguage,Re,!0,v3[fe.subLanguage]),v3[fe.subLanguage]=X._top}else X=Xu(Re,fe.subLanguage.length?fe.subLanguage:null);fe.relevance>0&&(Ao+=X.relevance),nn.__addSublanguage(X._emitter,X.language)}function vn(){fe.subLanguage!=null?Eo():bt(),Re=""}function Fn(X,ne){X!==""&&(nn.startScope(ne),nn.addText(X),nn.endScope())}function d3(X,ne){let de=1;const $e=ne.length-1;for(;de<=$e;){if(!X._emit[de]){de++;continue}const rn=xn.classNameAliases[X[de]]||X[de],it=ne[de];rn?Fn(it,rn):(Re=it,bt(),Re=""),de++}}function p3(X,ne){return X.scope&&typeof X.scope=="string"&&nn.openNode(xn.classNameAliases[X.scope]||X.scope),X.beginScope&&(X.beginScope._wrap?(Fn(Re,xn.classNameAliases[X.beginScope._wrap]||X.beginScope._wrap),Re=""):X.beginScope._multi&&(d3(X.beginScope,ne),Re="")),fe=Object.create(X,{parent:{value:fe}}),fe}function h3(X,ne,de){let $e=b(X.endRe,de);if($e){if(X["on:end"]){const rn=new n(X);X["on:end"](ne,rn),rn.isMatchIgnored&&($e=!1)}if($e){for(;X.endsParent&&X.parent;)X=X.parent;return X}}if(X.endsWithParent)return h3(X.parent,ne,de)}function wR(X){return fe.matcher.regexIndex===0?(Re+=X[0],1):(zu=!0,0)}function $R(X){const ne=X[0],de=X.rule,$e=new n(de),rn=[de.__beforeBegin,de["on:begin"]];for(const it of rn)if(it&&(it(X,$e),$e.isMatchIgnored))return wR(ne);return de.skip?Re+=ne:(de.excludeBegin&&(Re+=ne),vn(),!de.returnBegin&&!de.excludeBegin&&(Re=ne)),p3(de,X),de.returnBegin?0:ne.length}function IR(X){const ne=X[0],de=oe.substring(X.index),$e=h3(fe,X,de);if(!$e)return ur;const rn=fe;fe.endScope&&fe.endScope._wrap?(vn(),Fn(ne,fe.endScope._wrap)):fe.endScope&&fe.endScope._multi?(vn(),d3(fe.endScope,X)):rn.skip?Re+=ne:(rn.returnEnd||rn.excludeEnd||(Re+=ne),vn(),rn.excludeEnd&&(Re=ne));do fe.scope&&nn.closeNode(),!fe.skip&&!fe.subLanguage&&(Ao+=fe.relevance),fe=fe.parent;while(fe!==$e.parent);return $e.starts&&p3($e.starts,X),rn.returnEnd?0:ne.length}function TR(){const X=[];for(let ne=fe;ne!==xn;ne=ne.parent)ne.scope&&X.unshift(ne.scope);X.forEach(ne=>nn.openNode(ne))}let So={};function m3(X,ne){const de=ne&&ne[0];if(Re+=X,de==null)return vn(),0;if(So.type==="begin"&&ne.type==="end"&&So.index===ne.index&&de===""){if(Re+=oe.slice(ne.index,ne.index+1),!Ue){const $e=new Error(`0 width match regex (${H})`);throw $e.languageName=H,$e.badRule=So.rule,$e}return 1}if(So=ne,ne.type==="begin")return $R(ne);if(ne.type==="illegal"&&!me){const $e=new Error('Illegal lexeme "'+de+'" for mode "'+(fe.scope||"<unnamed>")+'"');throw $e.mode=fe,$e}else if(ne.type==="end"){const $e=IR(ne);if($e!==ur)return $e}if(ne.type==="illegal"&&de==="")return Re+=`
`,1;if(Ju>1e5&&Ju>ne.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Re+=de,de.length}const xn=gt(H);if(!xn)throw Nn(Ge.replace("{}",H)),new Error('Unknown language: "'+H+'"');const LR=Fe(xn);let Yu="",fe=Le||LR;const v3={},nn=new Y.__emitter(Y);TR();let Re="",Ao=0,Bt=0,Ju=0,zu=!1;try{if(xn.__emitTokens)xn.__emitTokens(oe,nn);else{for(fe.matcher.considerAll();;){Ju++,zu?zu=!1:fe.matcher.considerAll(),fe.matcher.lastIndex=Bt;const X=fe.matcher.exec(oe);if(!X)break;const ne=oe.substring(Bt,X.index),de=m3(ne,X);Bt=X.index+de}m3(oe.substring(Bt))}return nn.finalize(),Yu=nn.toHTML(),{language:H,value:Yu,relevance:Ao,illegal:!1,_emitter:nn,_top:fe}}catch(X){if(X.message&&X.message.includes("Illegal"))return{language:H,value:xt(oe),illegal:!0,relevance:0,_illegalBy:{message:X.message,index:Bt,context:oe.slice(Bt-100,Bt+100),mode:X.mode,resultSoFar:Yu},_emitter:nn};if(Ue)return{language:H,value:xt(oe),illegal:!1,relevance:0,errorRaised:X,_emitter:nn,_top:fe};throw X}}function Wu(H){const oe={value:xt(H),illegal:!1,relevance:0,_top:Q,_emitter:new Y.__emitter(Y)};return oe._emitter.addText(H),oe}function Xu(H,oe){oe=oe||Y.languages||Object.keys(D);const me=Wu(H),Le=oe.filter(gt).filter(f3).map(vn=>oi(vn,H,!1));Le.unshift(me);const We=Le.sort((vn,Fn)=>{if(vn.relevance!==Fn.relevance)return Fn.relevance-vn.relevance;if(vn.language&&Fn.language){if(gt(vn.language).supersetOf===Fn.language)return 1;if(gt(Fn.language).supersetOf===vn.language)return-1}return 0}),[On,bt]=We,Eo=On;return Eo.secondBest=bt,Eo}function pR(H,oe,me){const Le=oe&&W[oe]||me;H.classList.add("hljs"),H.classList.add(`language-${Le}`)}function Ku(H){let oe=null;const me=Ke(H);if(ce(me))return;if(yo("before:highlightElement",{el:H,language:me}),H.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",H);return}if(H.children.length>0&&(Y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(H)),Y.throwUnescapedHTML))throw new mn("One of your code blocks includes unescaped HTML.",H.innerHTML);oe=H;const Le=oe.textContent,We=me?Ve(Le,{language:me,ignoreIllegals:!0}):Xu(Le);H.innerHTML=We.value,H.dataset.highlighted="yes",pR(H,me,We.language),H.result={language:We.language,re:We.relevance,relevance:We.relevance},We.secondBest&&(H.secondBest={language:We.secondBest.language,relevance:We.secondBest.relevance}),yo("after:highlightElement",{el:H,result:We,text:Le})}function hR(H){Y=ar(Y,H)}const mR=()=>{bo(),rt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function vR(){bo(),rt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let c3=!1;function bo(){function H(){bo()}if(document.readyState==="loading"){c3||window.addEventListener("DOMContentLoaded",H,!1),c3=!0;return}document.querySelectorAll(Y.cssSelector).forEach(Ku)}function _R(H,oe){let me=null;try{me=oe(k)}catch(Le){if(Nn("Language definition for '{}' could not be registered.".replace("{}",H)),Ue)Nn(Le);else throw Le;me=Q}me.name||(me.name=H),D[H]=me,me.rawDefinition=oe.bind(null,k),me.aliases&&l3(me.aliases,{languageName:H})}function gR(H){delete D[H];for(const oe of Object.keys(W))W[oe]===H&&delete W[oe]}function bR(){return Object.keys(D)}function gt(H){return H=(H||"").toLowerCase(),D[H]||D[W[H]]}function l3(H,{languageName:oe}){typeof H=="string"&&(H=[H]),H.forEach(me=>{W[me.toLowerCase()]=oe})}function f3(H){const oe=gt(H);return oe&&!oe.disableAutodetect}function yR(H){H["before:highlightBlock"]&&!H["before:highlightElement"]&&(H["before:highlightElement"]=oe=>{H["before:highlightBlock"](Object.assign({block:oe.el},oe))}),H["after:highlightBlock"]&&!H["after:highlightElement"]&&(H["after:highlightElement"]=oe=>{H["after:highlightBlock"](Object.assign({block:oe.el},oe))})}function ER(H){yR(H),le.push(H)}function SR(H){const oe=le.indexOf(H);oe!==-1&&le.splice(oe,1)}function yo(H,oe){const me=H;le.forEach(function(Le){Le[me]&&Le[me](oe)})}function AR(H){return rt("10.7.0","highlightBlock will be removed entirely in v12.0"),rt("10.7.0","Please use highlightElement now."),Ku(H)}Object.assign(k,{highlight:Ve,highlightAuto:Xu,highlightAll:bo,highlightElement:Ku,highlightBlock:AR,configure:hR,initHighlighting:mR,initHighlightingOnLoad:vR,registerLanguage:_R,unregisterLanguage:gR,listLanguages:bR,getLanguage:gt,registerAliases:l3,autoDetection:f3,inherit:ar,addPlugin:ER,removePlugin:SR}),k.debugMode=function(){Ue=!1},k.safeMode=function(){Ue=!0},k.versionString=Mn,k.regex={concat:m,lookahead:p,either:_,optional:d,anyNumberOfTimes:h};for(const H in he)typeof he[H]=="object"&&e(he[H]);return Object.assign(k,he),k},sr=s3({});return sr.newInstance=()=>s3({}),jh=sr,sr.HighlightJS=sr,sr.default=sr,jh}var BZ=xZ();const cL=Qn(BZ);function HZ(e){const n=e.regex,t=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),r=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],u={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:r,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},s={className:"meta",begin:/^(>>>|\.\.\.) /},c={className:"subst",begin:/\{/,end:/\}/,keywords:u,illegal:/#/},l={begin:/\{\{/,relevance:0},f={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,s,l,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,s,l,c]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,l,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,l,c]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},p="[0-9](_?[0-9])*",h=`(\\b(${p}))?\\.(${p})|\\b(${p})\\.`,d=`\\b|${r.join("|")}`,m={className:"number",relevance:0,variants:[{begin:`(\\b(${p})|(${h}))[eE][+-]?(${p})[jJ]?(?=${d})`},{begin:`(${h})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${d})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${d})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`},{begin:`\\b(${p})[jJ](?=${d})`}]},v={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:u,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},_={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:["self",s,m,f,e.HASH_COMMENT_MODE]}]};return c.contains=[f,m,s],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:u,illegal:/(<\/|\?)|=>/,contains:[s,m,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},f,v,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[_]},{variants:[{match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[m,_,f]}]}}cL.registerLanguage("python",HZ);const Y7=cL,lL="agent-code-modal-backdrop",Mm="agent-code-view-btn",UZ="agent-code-block",GZ="View code";function jZ(e){const n=e==null?void 0:e.agent_code;return n!==void 0&&n.trim()!==""?n:void 0}function VZ(e,n){const t=`trial ${n+1} code`;return e===""?t:`${e} — ${t}`}function WZ(e,n,t,r){var s;if(mi(),(s=e.querySelector(`:scope > .${Mm}`))==null||s.remove(),t.kind==="mix")return;const i=uv(n.length,t.recordTrialIndex),o=jZ(n[i]);if(o===void 0)return;const a=VZ(r,i),u=document.createElement("button");u.className=Mm,u.textContent=GZ,u.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),XZ(o,a)}),e.appendChild(u)}function XZ(e,n){mi();const t=document.createElement("div");t.id=lL,t.className="agent-code-backdrop";const r=document.createElement("div");r.className="agent-code-modal";const i=document.createElement("button");i.className="agent-code-close-btn",i.textContent="×",i.title="Close (Esc)",i.addEventListener("click",mi),r.appendChild(i);const o=document.createElement("h2");o.className="agent-code-modal-header",o.textContent=n,r.appendChild(o),r.appendChild(KZ(e)),t.appendChild(r),document.body.appendChild(t),document.addEventListener("keydown",fL),t.addEventListener("click",a=>{a.target===t&&mi()})}function mi(){const e=document.getElementById(lL);e&&(e.remove(),document.removeEventListener("keydown",fL))}function fL(e){e.key==="Escape"&&mi()}function KZ(e){const n=document.createElement("pre");n.className=UZ;const t=document.createElement("code");if(Y7)try{return t.innerHTML=Y7.highlight(e,{language:"python"}).value,n.appendChild(t),n}catch{}return t.textContent=e,n.appendChild(t),n}const dL="trial-selection-suffix",pL="inspected-combination-suffix",J7=[dL,pL];function YZ(e,n,t){var o;if((o=e.querySelector(`:scope > .${n}`))==null||o.remove(),t===null)return;const r=document.createElement("span");r.className=n,r.textContent=t;const i=JZ(e,n);i===null?e.appendChild(r):e.insertBefore(r,i)}function hL(e,n,t){for(const r of e){const i=document.getElementById(`${r}-section-header`);i&&YZ(i,n,t)}}function JZ(e,n){const t=J7.indexOf(n);if(t===-1)throw new Error(`Unknown section heading suffix: ${n}`);for(const r of J7.slice(t+1)){const i=e.querySelector(`:scope > .${r}`);if(i!==null)return i}return e.querySelector(`:scope > .${Mm}`)}const Hu="trial-selector-shell",zZ="trial-selector",Uu="trial-selector-btn",Gu="data-trial-selection",ZZ="trial-selector-group",QZ="trial-selector-mix-help",mL="trial-selector-btn-no-response",eQ="showing",vL="This trial gave no response for these parameter values",_L=2,nQ=[Be.ESTIMATION,Be.TCHOICE,Be.RESPONSE_NOTES,Be.CALCULATOR];function tQ(e,n,t,r){var a;const i=Ln(t.ui,r);if(i===null||Nt(i)<_L){e.replaceChildren(),e.hidden=!0;return}e.hidden=!1,e.innerHTML=iQ(_2(i),gL(n,t,r));const o=mt(U$);o.classList.add(QZ),(a=e.querySelector(".trial-selector-buttons"))==null||a.after(o),yL(e,ft(t,r))}function gL(e,n,t){const r=new Set;return lv(e,n,t).forEach((i,o)=>{i===void 0&&r.add(o)}),r}function rQ(e,n,t,r){const i=gL(n,t,r);for(const o of e.querySelectorAll(`.${Uu}`)){const a=b$(o.getAttribute(Gu)??""),u=a!==null&&a.kind==="trial"&&i.has(a.recordTrialIndex);o.classList.toggle(mL,u),u?o.title=vL:o.removeAttribute("title")}}function iQ(e,n){const t=z7(Kt,Kt,!1),r=a=>a.trials.map(u=>z7(g$({kind:"trial",recordTrialIndex:u.recordTrialIndex}),String(u.trialNumber),n.has(u.recordTrialIndex))).join(""),i=e.length===1?e[0]:null,o=i!==null?`<div class="trial-selector-buttons">${t}${r(i)}</div>`:`<div class="trial-selector-buttons">${t}</div>`+e.map(a=>{const{plotLabel:u,longLabel:s}=bL(a.configuration);return`<div class="${ZZ}"><span class="trial-selector-group-label" title="${Z(s)}">${U(u)}:</span><div class="trial-selector-buttons">${r(a)}</div></div>`}).join("");return`<div class="${zZ}"><span class="trial-selector-label">${eQ}</span>`+o+"</div>"}function bL(e){const n=Sn(e);return{plotLabel:h2(n),longLabel:p2(n)}}function z7(e,n,t){const r=[Uu];t&&r.push(mL);const i=t?` title="${vL}"`:"";return`<button class="${r.join(" ")}"${i} ${Gu}="${e}">${n}</button>`}function yL(e,n){const t=g$(n);for(const r of e.querySelectorAll(`.${Uu}`))r.classList.toggle("active",r.getAttribute(Gu)===t)}function oQ(e,n){if(n===null)return null;const t=Nt(n);if(t<_L)return null;const r=_2(n);if(e.kind==="mix")return r.length>1?`mixture of ${t} trials from ${r.length} model configurations`:`mixture of ${t} trials`;for(const i of r){const o=i.trials.find(a=>a.recordTrialIndex===e.recordTrialIndex);if(o!==void 0)return i.configuration===null?`trial ${o.trialNumber}`:`${bL(i.configuration).plotLabel} trial ${o.trialNumber}`}throw new Error(`trialSelectionSummary: trial ${e.recordTrialIndex} is not one of the record's ${t} trials`)}function EL(e,n){hL(nQ,dL,oQ(e,n))}const zv="StringFromSet",aQ="Parameters",uQ="Fixed Parameters",sQ="Free Parameters";function cQ(e,n,t,r,i,o,a){const u=e.filter(Jo);if(u.length===0)return{headerText:"",bodyHtml:""};const{source:s}=Ie(n),c=ln(s)!=="plainnum",l=ht(s)==="yours",f=c?sQ:l?aQ:uQ,p=r??U,h=c?"":SL(u,t,p,i,o),d=[];for(const m of u){const v=ye(m.id),_=p(m.defn),g=(a==null?void 0:a(m))??{atStart:"",atEnd:""},b=t[v]??m.default_value;if(typeof b=="object")throw new Error(`Cparam ${m.id} has a non-scalar current value`);let y=A2(v,m),E="";c?E=uA(m.allowed_values):l?y+=" = "+fQ(v,m,b):y+=` <span class="cparam-or-aopt-value">= ${U(String(b))}</span>`,d.push(`<div class="cparam-or-aopt" id="opt-${v}"><div class="cparam-or-aopt-header">${y}</div><div class="cparam-or-aopt-defn">${g.atStart}${_}${g.atEnd}</div>`+E+"</div>")}return{headerText:f,bodyHtml:h+d.join("")}}function SL(e,n,t,r,i){if(!r||!i)return"";const o=lQ(e,n);return o===null||r(o)?"":`<p class="arg-warning">${t(i)}</p>`}function lQ(e,n){const t={};for(const r of e){const i=ye(r.id),o=n[i]??r.default_value;if(Ua(r.allowed_values)==="string"){if(typeof o!="string")return null;t[i]=o;continue}const a=Number(o);if(!Number.isFinite(a))return null;t[i]=a}return t}function fQ(e,n,t){return aa(e,n,t,{dataAttribute:"data-cparam-body",selectClass:"cparam-body-select",inputClass:"cparam-body-input"},zv)}function dQ(e,n,t,r,i,o,a){const{headerText:u,bodyHtml:s}=cQ(n.get_cparams(),i,t.displayOptionValues,f=>Ae(f,t),o,a,f=>Pn(f.srcquotes,t)),c=document.getElementById("cparams-section");if(!s){e.innerHTML="",c&&(c.hidden=!0);return}c&&(c.hidden=!1);const l=document.getElementById("cparams-section-header");l&&(l.textContent=u),e.innerHTML=s}const AL="combination-selector",pQ="combination-selector-pair",hQ="combination-selector-param-name",mQ="inspected-cparam-select",vQ="data-inspected-cparam",_Q=".arg-warning",gQ=`View your beliefs
at parameters`,bQ=`View responses
at parameters`,yQ="; switch view in side panel",EQ=", ";function Zv(e,n){return e.has_cparams()&&ln(Ie(n).source)!=="plainnum"}function wL(e,n,t){return e!=="Compare"&&Zv(n,t)}function SQ(e){return Xe(e)?gQ:bQ}function AQ(e,n,t,r,i={}){if(!Zv(n,r)){e.replaceChildren();return}const o=n.get_cparams().map(a=>IQ(a,w2(a,t))).join("");e.innerHTML=`<div class="${AL}">`+o+IL(n,t,i)+"</div>"}function wQ(e,n,t,r){const i=e.querySelector(`.${AL}`);if(i===null)return;const o=IL(n,t,r),a=i.querySelector(`:scope > ${_Q}`);o===""?a==null||a.remove():a?a.outerHTML=o:i.insertAdjacentHTML("beforeend",o)}function $Q(e,n,t){return Zv(e,t)?`${e.get_cparams().map(i=>`${TL(i)} = ${w2(i,n)}`).join(EQ)}${yQ}`:null}function $L(e,n,t){hL([Be.ESTIMATION],pL,$Q(e,n,t))}function IL(e,n,t){return SL(e.get_cparams(),nu(e,n),t.renderDefn??U,t.filter,t.description)}function TL(e){return e.longname??ye(e.id)}function IQ(e,n){const t=ye(e.id),r=Ji(e).map(i=>{const o=String(i),a=o===String(n)?" selected":"";return`<option value="${Z(o)}"${a}>${U(o)}</option>`}).join("");return`<span class="${pQ}"><span class="${hQ}">${U(TL(e))}</span><select class="${mQ}" ${vQ}="${Z(t)}">${r}</select></span>`}const gr="side-panel",Qv="side-panel-tab",Z7="side-panel-body",TQ="expanded",LQ="side-panel-area",RQ="side-panel-area-title",CQ="side-panel-area-content",kQ="⋮︎",Q7="View controls",NQ="View controls",LL=280,MQ="--side-panel-max-width",OQ=720,PQ=LL+OQ;let br=!1;function qQ(){return window.innerWidth>=PQ}function DQ(){document.documentElement.style.setProperty(MQ,`${LL}px`)}function FQ(e){br=e&&qQ(),qa()}function xQ(){return br=!br,qa(),br}function BQ(e){const n=document.getElementById(gr),t=document.getElementById(Z7),r=document.getElementById(Qv);if(!(n===null||t===null||r===null)){if(n.setAttribute("aria-label",NQ),r.textContent=kQ,r.title=Q7,r.setAttribute("aria-label",Q7),r.setAttribute("aria-controls",Z7),n.hidden=!e.visible,!e.visible){t.replaceChildren(),qa();return}t.replaceChildren(...e.areas.map(HQ)),qa()}}function HQ(e){const n=document.createElement("section");n.className=LQ;const t=document.createElement("h3");t.className=RQ,t.textContent=e.title;const r=document.createElement("div");return r.className=CQ,n.append(t,r),e.render(r),n}function qa(){var e,n;(e=document.getElementById(gr))==null||e.classList.toggle(TQ,br),(n=document.getElementById(Qv))==null||n.setAttribute("aria-expanded",String(br))}const Da="long-text-abbreviable",e3="long-text-abbreviated",n3="long-text-abbrev-tail",RL="long-text-abbrev-control",t3="long-text-abbrev-toggle",UQ="long-text-abbrev-expand",GQ="long-text-abbrev-collapse",jQ="more",VQ="abbrev",WQ="…",XQ=20,KQ=.5,CL=[_S],YQ=[...CL,t2,"srcquotes-inline",gS,bS,yS],JQ="a, .ref-popover, .symbol-ref-name, .inline-note-ref, .srcquote-widget",zQ=`<span class="${RL} ${UQ}">${WQ}<button class="${t3}">${jQ}</button></span>`,ZQ=`<button class="${RL} ${t3} ${GQ}">${VQ}</button>`;function QQ(e,{containers:n,thresholdChars:t,startAbbreviated:r}){if(!Number.isFinite(t)||t<1)return;const i=[];for(const o of n)for(const a of e.querySelectorAll(`.${o.containerClass}`)){if(a.classList.contains(Da))continue;const u=a.querySelector(o.ownContentSelector);if(u===null)continue;const{totalChars:s,cut:c}=iee(tee(u),t);c===null||s<=t||s-c.headChars<t*KQ||i.push({container:a,content:u,cut:c})}for(const{container:o,content:a,cut:u}of i){const s=aee(u,a);lee(s,a).insertAdjacentHTML("afterend",zQ),fee(a).insertAdjacentHTML("beforeend",ZQ),o.classList.add(Da),o.classList.toggle(e3,r)}}function eee(e,n){for(const t of e.querySelectorAll(`.${Da}`))t.classList.toggle(e3,n)}function nee(e){const n=e.closest(`.${Da}`);n!==null&&n.classList.toggle(e3)}function tee(e){const n=[],t=r=>{for(const i of r.childNodes)i.nodeType===Node.TEXT_NODE?n.push(i):i.nodeType===Node.ELEMENT_NODE&&!ree(i)&&t(i)};return t(e),n}function ree(e){return e.hasAttribute("hidden")||e.localName==="svg"?!0:getComputedStyle(e).display==="none"}function iee(e,n){let t=0,r=!0,i=null;for(const o of e)for(let a=0;a<o.data.length;a++){const u=oee(o.data[a]);u&&r||(r=u,t++,i===null&&t===n&&(i={node:o,offset:a+1,headChars:t}))}return{totalChars:t,cut:i}}function oee(e){return e.trim()===""}function aee(e,n){const t=uee(e.node,n);let r;t!==null?(t.classList.add(n3),r=t):r=kL(e.node.splitText(see(e.node.data,e.offset)));let i=r;for(;i.parentNode!==null&&i!==n;){const o=[];for(let a=i.nextSibling;a!==null;a=a.nextSibling)o.push(a);for(const a of o)cee(a);i=i.parentNode}return r}function uee(e,n){let t=null;for(let r=e.parentElement;r!==null&&r!==n;r=r.parentElement)r.matches(JQ)&&(t=r);return t}function see(e,n){const t=e.lastIndexOf(" ",n);return t<=0||n-t>XQ?n:t}function cee(e){e.nodeType===Node.ELEMENT_NODE?e.classList.add(n3):e.nodeType===Node.TEXT_NODE&&kL(e)}function kL(e){const n=document.createElement("span");return n.className=n3,e.parentNode.insertBefore(n,e),n.appendChild(e),n}function lee(e,n){let t=e,r=t.parentElement;for(;r!==null&&r!==n&&!dee(r);)t=r,r=t.parentElement;return t}function fee(e){const n=e.lastElementChild;return n!==null&&CL.some(t=>n.classList.contains(t))?n:e}function dee(e){return YQ.some(n=>e.classList.contains(n))}const pee="srcquote-explainer",hee="srcquote-explainer",mee=`${Be.SRCQUOTE_EXPLAINER}-section`;function vee(){return B$[pee]}function _ee(e,n){const t=document.getElementById(mee),r=n.renderedSrcquoteIds===void 0||n.renderedSrcquoteIds.size>0;t&&(t.hidden=!r),e.innerHTML=r?`<div class="${hee}"><span class="${t2}">`+Ae(vee(),n)+"</span></div>":""}function eE(e,n){if(n.kind==="sourcequote")return{kind:"sourcequote",quotes:e.resolve_srcquotes(n.sourcequoteIds)};if(![...Wm(e).values()].some(r=>r.anchor===n.targetId))throw new Error(`Popover target ${JSON.stringify(n.targetId)} is not present in ${e.aid}.`);return{kind:"entity",rawBody:gee(e).get(n.targetId)??"",anchor:n.targetId}}function gee(e){const n=new Map;for(const t of e.isym_entries()){const r=t.id.replace(/^isym:/,"");n.set(`#isym-${r}`,t.defn)}for(const t of Gm(e))n.set(t.anchor,t.defn);for(const t of e.svar_decls()){const r=kE(t.id);n.set(`#gloss-${r}`,t.defn);const i=`isym:${r}`,o=e.can_consolidate_isym_svar(i)?e.get_isym(i).defn:t.defn,a=[`{expr:${r}}`];o&&a.push(o),n.set(`#${Vm}${r}`,a.join(`

`))}for(const t of e.get_display_form_keys())n.set(`#form-${Ga(t)}`,e.get_display_form(t));for(const t of e.get_axioms()){const r=e.get_display_ax(t.id);r&&n.set(`#${jm}${_i(t.id)}`,r)}for(const t of e.get_options())n.set(`#opt-${ye(t.id)}`,t.defn);for(const t of e.get_tchoice_decls())n.set(`#tchoice-${vi(t.id)}`,t.defn);for(const t of e.definedSym){const r=t.id.startsWith("definedSym:")?t.id.slice(11):t.id,i=e.get_display_definedSym_or_none(t.id)??"",o=[];i&&o.push(`:= ${i}`),t.defn&&o.push(t.defn),n.set(`#defsym-${r}`,o.join(" — "))}return n}const nE="hir-popover",bee="hir-popover-rail",yee="hir-popover-rail-card",Eee="hir-popover-content",tE="hir-popover-close",See="ref-popover",ai="srcquote-pinned";function No(e,n){if(!(e instanceof Element))return null;const t=e.closest(n);return t instanceof HTMLButtonElement?t:null}function Aee(e,n){return n instanceof Node&&e.contains(n)}function wee(e){const n=e.devMode??!1,t=new Map,r=[];let i=null;const o=y=>{if(console.error("Failed to open popover.",y),n)throw y},a=()=>(i!=null&&i.isConnected||(i=document.createElement("aside"),i.className=bee,i.setAttribute("aria-label","Open notes"),document.body.append(i)),i),u=y=>{const E=r.indexOf(y);E!==-1&&r.splice(E,1)},s=(y,E=!1)=>{var w;t.delete(y.trigger),u(y),y.popover.remove(),y.trigger.setAttribute("aria-expanded","false"),y.kind==="sourcequote"&&((w=y.trigger.closest(`.${ui}`))==null||w.classList.remove(ai)),E&&y.trigger.isConnected&&y.trigger.focus(),i&&i.childElementCount===0&&(i.remove(),i=null)},c=y=>{for(const E of[...r])E.trigger!==y&&s(E)},l=(y,E)=>{const w=document.createElement(y==="sourcequote"?"span":"section");return w.className=y==="sourcequote"?`${nE} ${RM}`:`${nE} ${yee}`,w.setAttribute("role","dialog"),w.setAttribute("aria-label",y==="sourcequote"?"Source quotes":"Reference details"),w.innerHTML=`<button type="button" class="${tE}" aria-label="Close popover">×</button><span class="${Eee}">${E}</span>`,w},f=(y,E,w)=>{const I={trigger:y,popover:E,kind:w};return t.set(y,I),r.push(I),y.setAttribute("aria-expanded","true"),I},p=y=>{const E=y.getAttribute(AS);if(E!==null)return AM(E);const w=y.getAttribute(Qo);if(w===null)throw new Error("Popover trigger is missing target data.");const I=e.getContext(),C=eE(I.jprobInstance,w3(w));if(C.kind!=="entity")throw new Error("A rail trigger must resolve to an entity source.");return(C.rawBody?Ae(C.rawBody,I):"")+`<a href="${C.anchor}" class="popover-go">go →</a>`},h=(y,E)=>{const w=y.firstElementChild;if(!(w instanceof HTMLElement))throw new Error("The rail has no card to reveal.");const I=w.offsetTop,C=Math.max(0,y.scrollHeight-y.clientHeight);y.scrollTop=Math.min(C,E.offsetTop-I)},d=y=>{e.getPersistentPopovers()||c(y);const E=l("rail",p(y)),w=a();w.append(E),f(y,E,"rail"),h(w,E)},m=(y,E)=>{const w=y.closest(`.${ui}`);if(w===null)throw new Error("Source-quote trigger has no widget parent.");const I=y.getAttribute(Qo);if(I===null)throw new Error("Source-quote trigger is missing target data.");const C=e.getContext(),L=eE(C.jprobInstance,w3(I));if(L.kind!=="sourcequote")throw new Error("A source-quote trigger must resolve to source quotes.");e.getPersistentPopovers()||c(y);const $=OM(L.quotes,C),A=l("sourcequote",$);w.append(A),f(y,A,"sourcequote"),w.classList.toggle(ai,E)},v=y=>{const E=No(y.target,`.${tE}`);if(E){const C=[...t.values()].find(L=>L.popover.contains(E));C&&s(C,!0);return}const w=No(y.target,`.${qo}`);if(w){const C=t.get(w);if(C){const L=w.closest(`.${ui}`);L!=null&&L.classList.contains(ai)?s(C):L==null||L.classList.add(ai)}else try{m(w,!0)}catch(L){o(L)}return}const I=No(y.target,`.${See}, .${SS}`);if(I){const C=t.get(I);if(C)s(C);else try{d(I)}catch(L){o(L)}return}!e.getPersistentPopovers()&&y.target instanceof Node&&!r.some(C=>C.popover.contains(y.target))&&c()},_=y=>{const E=No(y.target,`.${qo}`);if(!(!E||t.has(E)))try{m(E,!1)}catch(w){o(w)}},g=y=>{const E=y.target,w=E instanceof Element?E.closest(`.${ui}`):null;if(!w||Aee(w,y.relatedTarget)||w.classList.contains(ai))return;const I=w.querySelector(`.${qo}`);if(!I)return;const C=t.get(I);C&&s(C)},b=y=>{if(y.key!=="Escape")return;const E=r.at(-1);E&&(y.preventDefault(),s(E,!0))};return document.addEventListener("click",v),document.addEventListener("mouseover",_),document.addEventListener("mouseout",g),document.addEventListener("focusin",_),document.addEventListener("focusout",g),document.addEventListener("keydown",b),{closeDisconnectedTriggers:()=>{for(const y of[...r])y.trigger.isConnected||s(y)},teardown:()=>{document.removeEventListener("click",v),document.removeEventListener("mouseover",_),document.removeEventListener("mouseout",g),document.removeEventListener("focusin",_),document.removeEventListener("focusout",g),document.removeEventListener("keydown",b),c(),i==null||i.remove(),i=null}}}const $ee="dag-highlight";function rE(e,n){var o;const t=(o=e.closest(`.${Kh}`))==null?void 0:o.getAttribute(na);if(!t)return;const r=t.replace(/[\\"]/g,"\\$&"),i=document.querySelectorAll(`[${na}="${r}"]`);for(const a of i)a.classList.toggle($ee,n)}function Iee(){const e=n=>{const t=n.target;return t instanceof Element?t.closest(`.${Yh}`):null};document.addEventListener("mouseover",n=>{const t=e(n);t&&rE(t,!0)}),document.addEventListener("mouseout",n=>{const t=e(n);t&&rE(t,!1)})}const Tee="Select result set";function Lee(){return"<p>These controls choose the set of trials whose belief distributions are mixed. Which of them you are reading — the mixture, or one trial — is the <code>mix</code> selector under the sticky bar.</p>"+U$()}const NL="jtask-group-select",ML="adhoc-result-select",OL="",Ree="None",Cee="Select None in Adhoc results to enable methodical selection.",kee="result-set-area",Fa="result-set-control",r3="result-set-control-label",Nee="result-set-single-value";function Mee(e,n){e.className=kee,e.replaceChildren(),e.appendChild(mt(Lee));const t=n.activeAdhocWhose!==null;if(n.selectedJtaskGroupId!==null&&(e.insertAdjacentHTML("beforeend",Pee(n,t)),n.mixtureGroupInterpretation!==null)){const r=document.createElement("div");r.className=Fa,r.insertAdjacentHTML("beforeend",`<span class="${r3}">Model configurations</span>`);const i=document.createElement("div");r.appendChild(i),fY(i,{interpretation:n.mixtureGroupInterpretation,disabled:t}),e.appendChild(r)}Oee(n.presetData)&&e.insertAdjacentHTML("beforeend",qee(n)),t&&n.selectedJtaskGroupId!==null&&e.insertAdjacentHTML("beforeend",`<p class="result-set-adhoc-note">${Cee}</p>`)}function Oee(e){return e.adhocPlainnumEntries.length>0||e.adhocPlaincodeEntries.length>0}function Pee(e,n){const t=`<span class="${r3}">Task group</span>`;if(e.jtaskGroupIds.length<=1){const o=e.selectedJtaskGroupId??"";return`<div class="${Fa}">${t}<span class="${Nee}" title="${Z(o)}">${U(o)}</span></div>`}const r=tA(e.jtaskGroupIds),i=e.jtaskGroupIds.map((o,a)=>`<option value="${Z(o)}" title="${Z(o)}"${o===e.selectedJtaskGroupId?" selected":""}>${U(r[a])}</option>`).join("");return`<div class="${Fa}">${t}<select id="${NL}" class="jtask-group-select"${n?" disabled":""} title="Task group: which prompt version these results answer">${i}</select></div>`}function qee(e){let n=`<option value="${OL}"${e.activeAdhocWhose===null?" selected":""}>${Ree}</option>`;for(const t of i2){const r=Gi(e.presetData,t);for(let i=0;i<r.length;i++){const o=r[i],a=e.presetData.adhocPresets[o.presetIndex];if(a===void 0)continue;const u=Ya(a,t,o);if(u===void 0)continue;const s=`adhoc-${t}:${i}`;n+=`<option value="${s}"${s===e.activeAdhocWhose?" selected":""}>${U(tO(a,t,u))}</option>`}}return`<div class="${Fa}"><span class="${r3}">Adhoc results</span><select id="${ML}" class="whose-select">${n}</select></div>`}const Dee=["VISIBLE_AOPTS"],Fee={dataAttribute:"data-aopt-body",selectClass:"aopt-body-select",inputClass:"aopt-body-input",textInputClass:"aopt-body-text-input",checkboxClass:"aopt-body-checkbox",checkboxGroupClass:"aopt-body-checkbox-group"};function xee(e,n,t,r=U,i){const o=Xe(n),a=[];for(const u of e){if(!Um(u))continue;const s=ye(u.id),c=t[s]??u.default_value,l=(i==null?void 0:i(u))??{atStart:"",atEnd:""};let f=A2(s,u);const p=u.input_type==="MultiStringFromSet"?1:2,h=Array.isArray(u.allowed_values)&&u.allowed_values.length>=p;if(o&&(h||u.allowed_values===void 0))f+=" = "+aa(s,u,c,Fee,u.input_type);else{const m=Array.isArray(c)?c.join(", "):String(c);f+=` <span class="cparam-or-aopt-value">= ${U(m)}</span>`}a.push(`<div class="cparam-or-aopt" id="opt-${Z(s)}"><div class="cparam-or-aopt-header">${f}</div><div class="cparam-or-aopt-defn">${l.atStart}${r(u.defn)}${l.atEnd}</div></div>`)}return a.join("")}function Bee(e,n,t,r,i,o){const a=xee(t.get_aopts(),o,r.displayOptionValues,s=>Ae(s,r),s=>Pn(s.srcquotes,r)),u=document.getElementById(`${Be[n]}-section`);if(!a){e.innerHTML="",u&&(u.hidden=!0);return}u&&(u.hidden=!1),e.innerHTML=a}const Hee=2,Uee="(no recorded choice)",PL="data-tchoice-recorded",Om="data-tchoice-bare",iE={dataAttribute:"data-tchoice-body",selectClass:"tchoice-body-select",inputClass:"tchoice-body-input",checkboxClass:"tchoice-body-checkbox"};function Gee(e){return e.input_type==="Bool"||e.allowed_values.length>=Hee}function oE(e,n,t){var i;const r=(i=e[n])==null?void 0:i[t];return r===void 0?"":String(r)}function qL(e){return e===""?Uee:e}function jee(e,n,t){const r=n.map((a,u)=>`data-trial-${u}="${Z(oE(n,u,e))}"`).join(" "),i=oE(n,t,e);return`<span class="tchoice-recorded${i===""?" tchoice-recorded-empty":""}" ${PL}="${Z(e)}" ${r}>${U(qL(i))}</span>`}const Vee="Any number in",aE="∞";function Wee(e){if(Er(e))return uA(e.allowed_values);const[n]=Mr([e]),t=n.lo===null?`(-${aE}`:`${n.loClosed?"[":"("}${n.lo}`,r=n.hi===null?`${aE})`:`${n.hi}${n.hiClosed?"]":")"}`;return`<div class="${aA}">${Vee} ${U(`${t}, ${r}`)}</div>`}function Xee(e,n,t,r={}){const{resultChoicesPerTrial:i,trialSelection:o=vr,processDefn:a=U,renderSrcquotes:u}=r,s=[];for(const c of e){const l=vi(c.id),f=(u==null?void 0:u(c))??{atStart:"",atEnd:""};let p=A2(l,c);const h=TE(c),m=Er(c)&&Gee(c)||h,v=n&&m,_=!n&&m&&o.kind==="trial"&&i!==void 0&&i.some(b=>b[l]!==void 0);let g="";if(v&&h){const b=t[l]??"";p+=" = "+aa(l,c,b,iE,"Number")}else if(v&&Er(c)){const b=t[l]??c.default_value;p+=" = "+aa(l,c,b,iE,c.input_type)}else _?p+=" = "+jee(l,i,o.recordTrialIndex):g=Wee(c);s.push(`<div class="cparam-or-aopt" id="tchoice-${Z(l)}" ${Om}="${Z(l)}"><div class="cparam-or-aopt-header">${p}</div><div class="cparam-or-aopt-defn">${f.atStart}${a(c.defn)}${f.atEnd}</div>`+g+"</div>")}return s.join("")}function Kee(e,n){return(ln(Ie(n).source)==="plaincode"?e.yoursCodeRecord:e.yoursRecord).trial_choices??{}}function DL(e,n,t,r,i,o,a,u){const s=n.get_tchoice_decls(),c=Xe(i),l=Xee(s,c,Kee(r,i),{resultChoicesPerTrial:c?void 0:o,trialSelection:u,processDefn:p=>Ae(p,t),renderSrcquotes:p=>Pn(p.srcquotes,t)}),f=document.getElementById(`${Be.TCHOICE}-section`);if(!l){e.innerHTML="",f&&(f.hidden=!0);return}f&&(f.hidden=!1),e.innerHTML=l,FL(e,i==="yours-plaincode"?{mode:"edit",reasoning:r.yoursCodeRecord.reasoning_response}:{mode:"read",reasoning:c||u.kind==="mix"?void 0:a[u.recordTrialIndex]})}function FL(e,n){for(const t of e.querySelectorAll(`[${Om}]`)){const r=t.getAttribute(Om)??"";hT(t,r,n,t.querySelector(":scope > .cparam-or-aopt-header"))}}function Yee(e,n,t){for(const r of e.querySelectorAll(`[${PL}]`)){const i=r.getAttribute(`data-trial-${n}`)??"";r.textContent=qL(i),r.classList.toggle("tchoice-recorded-empty",i==="")}FL(e,{mode:"read",reasoning:t[n]})}function Jee(e,n){if(e.input_type==="Bool"){if(n.type!=="checkbox")throw new Error(`Bool tchoice ${e.id} expected a checkbox control`);return n.checked===!0}if(e.input_type==="Number"){const t=Number(n.value);if(!Number.isFinite(t))throw new Error(`Invalid numeric tchoice value for ${e.id}: ${n.value}`);return t}return n.value}function zee(e,n){if(n.value.trim()==="")return null;const t=Number(n.value);if(!Number.isFinite(t))return null;const[r]=Mr([e]);return yr(r,t)?t:null}function Zee(e,n,t){if(n===void 0)return null;if(n!=="claudecode"&&n!=="codex")return`${t} carries invalid agent_cli ${JSON.stringify(n)}`;if(typeof e!="string")return`${t} carries agent_cli ${JSON.stringify(n)} without a model family`;let r;try{r=Ai(e)}catch(i){return`${t} carries agent_cli ${JSON.stringify(n)} for unknown model ${JSON.stringify(e)}: ${String(i)}`}return n!==r?`${t} model ${JSON.stringify(e)} carries agent_cli ${JSON.stringify(n)}; expected ${JSON.stringify(r)}`:null}function Qee(e){return Zee(e.model,e.agent_cli,"result")}function ene(e,n){const t=[];for(const r of e){const i=Qee(r);if(i===null){t.push(r);continue}const o=`methodical provenance mismatch for ${JSON.stringify(r.label)}: ${i}`;console.warn(`omitting ${o}`)}return t}class ju extends Error{}function uE(e,n,t){return JSON.stringify([e,n,t])}function Vh(e,n,t){return`adhoc ${n} entry ${JSON.stringify(t)} of ${JSON.stringify(e)}`}function Mo(e,n,t){console.warn(`${e}; ${n}`)}const sE="showing the entry without precomputed stats";function Oo(e){return e.precomputed!==void 0&&Object.keys(e.precomputed).length>0||e.precomputed_aux_forms!==void 0}function nne(e,n){if(e==="plainnum"){const t=n;return Oo(t)||t.trials.some(Oo)}return n.cparam_combos.some(t=>Oo(t)||t.trials.some(Oo))}function tne(e,n){const t=i=>{const{precomputed:o,precomputed_aux_forms:a,...u}=i;return u};if(e==="plainnum"){const{precomputed_aux_forms:i,...o}=n;return{...o,precomputed:{},trials:o.trials.map(t)}}const r=n;return{...r,cparam_combos:r.cparam_combos.map(i=>{const{precomputed_aux_forms:o,...a}=i;return{...a,precomputed:{},trials:i.trials.map(t)}})}}function xL(e,n){const t=new Map;for(const r of n){const i=r.trial_index;if(!Number.isInteger(i)||i<0||i>=e.length||t.has(i))throw new ju(`stats for trial ${i}, which the entry does not have there`);t.set(i,r)}return e.map((r,i)=>{const o=t.get(i);return o===void 0?r:{...r,...o.precomputed===void 0?{}:{precomputed:o.precomputed},...o.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:o.precomputed_aux_forms}}})}function BL(e){return{precomputed:e.precomputed,...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:e.precomputed_aux_forms}}}function rne(e,n){const[t,...r]=n.cparam_combos,i=Gt(e.cparam_values??{});if(t===void 0||r.length>0||Gt(t.cparams)!==i)throw new ju(`stats for combination(s) ${n.cparam_combos.map(o=>Gt(o.cparams)).join(", ")}; a plainnum entry has exactly its own combination, ${i}`);return{...e,...BL(t),trials:xL(e.trials,t.trials)}}function ine(e,n){const t=new Map;for(const i of n.cparam_combos)t.set(Gt(i.cparams),i);const r=new Set(e.cparam_combos.map(i=>Gt(i.cparams)));for(const i of t.keys())if(!r.has(i))throw new ju(`stats for combination ${i}, which the entry does not answer`);return{...e,cparam_combos:e.cparam_combos.map(i=>{const o=t.get(Gt(i.cparams));return o===void 0?i:{...i,...BL(o),trials:xL(i.trials,o.trials)}})}}function one(e,n,t){const r=new Map;for(const o of n){const a=uE(o.name_or_pseudoname,o.query_mode,o.label);if(r.has(a)){Mo(`the adhoc precomputed stats name the ${Vh(o.name_or_pseudoname,o.query_mode,o.label)} twice`,"using the first");continue}r.set(a,o)}const i=e.map(o=>{const a=(u,s,c)=>s.map(l=>{const f=uE(o.name_or_pseudoname,u,l.label),p=r.get(f);r.delete(f);const h=Vh(o.name_or_pseudoname,u,l.label);if(nne(u,l))return Mo(`the ${h} carries inline precomputed stats in adhoc-presets.json, whose stats slots stay empty (stats come from adhoc-precomputed.json)`,sE),tne(u,l);if(p===void 0)return l;try{return c(l,p)}catch(d){if(!(d instanceof ju))throw d;return Mo(`the adhoc precomputed stats of the ${h} carry ${d.message}`,sE),l}});return{...o,plaincode:a("plaincode",o.plaincode,ine),plainnum:a("plainnum",o.plainnum,rne)}});for(const o of r.values())Mo(`the adhoc precomputed stats name the ${Vh(o.name_or_pseudoname,o.query_mode,o.label)}, which no loaded preset has`,"ignoring them");return i}const pe={interactionMode:"imode",queryMode:"query_mode",jtaskGroup:"jtask_group",mixAgentCli:"mix_cli",mixModelVersion:"mix_model_version",mixEffort:"mix_effort",adhocMode:"adhoc_mode",adhocName:"adhoc_name",adhocLabel:"adhoc_label",trialEntry:"trial_entry",trialIndex:"trial_index",comparePinned:"cmp_pinned",compareJtaskGroup:"cmp_jtask_group",compareAgentCli:"cmp_agent_cli",compareModelVersion:"cmp_model_version",compareEffort:"cmp_effort"},HL=Object.values(pe),ane=["response_type","prob_as_odds","show_framing","srcquotes_view","calc_pin","calc_unpin","calc_value","inspect_value"];[...ane,...HL,...f2];const UL=[...HL,...f2,oa],cE="model_effort",Pm=":",qm={jtaskGroup:"jtask_group",agentCli:"agent_cli",modelVersion:"model_version",effort:"effort"},Dm={jtaskGroup:pe.compareJtaskGroup,agentCli:pe.compareAgentCli,modelVersion:pe.compareModelVersion,effort:pe.compareEffort},Fm={point:"point",bounds:"bounds",distr:"sample"},une=Object.fromEntries(Object.entries(Fm).map(([e,n])=>[n,e])),lE={inline:!0,glyph:!1},sne="inline",cne="glyph",fE={true:!0,false:!1},dE=["probability","odds"],lne="Shared link";function fne(e,n){const t={},r=[],i=[],o=e.get("response_type");if(o!==null){const f=Fm[o];f!==void 0?t.inputMode=f:r.push(`response_type=${JSON.stringify(o)} invalid; expected one of: ${Object.keys(Fm).join(", ")}`)}_ne(e,n,t,r,i);const a=e.get("prob_as_odds");a!==null&&(dE.includes(a)?t.probAsOdds=a:r.push(`prob_as_odds=${JSON.stringify(a)} invalid; expected one of: ${dE.join(", ")}`));const u=e.get("show_framing");if(u!==null){const f=fE[u];f===void 0?r.push(`show_framing=${JSON.stringify(u)} invalid; expected one of: ${Object.keys(fE).join(", ")}`):t.showFramingNotes=f}const s=e.get("srcquotes_view");if(s!==null){const f=lE[s];f===void 0?r.push(`srcquotes_view=${JSON.stringify(s)} invalid; expected one of: ${Object.keys(lE).join(", ")}`):t.srcquotesInlinedOverride=f}dne(e,n.jprobTemplate,t,r,i);const c=pE(e,"calc_value",n.jprobTemplate,r);c!==null&&(t.cparamValues=c);const l=pE(e,"inspect_value",n.jprobTemplate,r);return l!==null&&(t.inspectedCparamValues=l),{overrides:t,errors:r,readerFacingErrors:i}}function dne(e,n,t,r,i){const o=e.getAll("calc_pin"),a=e.getAll("calc_unpin");if(o.length===0&&a.length===0)return;const u=new Set(n.get_cparam_bare_names()),s=new Set(o.filter(l=>a.includes(l)));for(const l of s)r.push(`${JSON.stringify(l)} appears in both calc_pin and calc_unpin; skipped`);let c=!1;for(const[l,f]of[[o,!0],[a,!1]]){const p=f?"calc_pin":"calc_unpin";for(const h of l)if(!s.has(h)){if(!u.has(h)){if(h===cE){c=!0;continue}r.push(`${p}=${JSON.stringify(h)} is not a parameter of this jprob; expected one of: ${[...u].join(", ")}`);continue}(t.cparamPinned??(t.cparamPinned={}))[h]=f}}c&&i.push(`The link pins or unpins ${cE}, the model/version/effort plot axis, which this view no longer has: Compare's own pin rows replaced it. The rest of the link still applies.`)}function pE(e,n,t,r){const i=e.getAll(n);if(i.length===0)return null;const o=new Map,a=new Set;for(const s of i){const c=s.indexOf(Pm);if(c===-1){r.push(`${n}=${JSON.stringify(s)} is not of the form <name>${Pm}<value>; skipped`);continue}let l,f;try{l=decodeURIComponent(s.slice(0,c)),f=decodeURIComponent(s.slice(c+1))}catch(p){if(!(p instanceof URIError))throw p;r.push(`${n}=${JSON.stringify(s)} has a malformed %-escape; skipped`);continue}o.has(l)&&a.add(l),o.set(l,f)}const u={};for(const[s,c]of o){if(a.has(s)){r.push(`${n} names ${JSON.stringify(s)} more than once; skipped`);continue}const l=t.find_cparam(s);if(l===void 0){r.push(`${n}=${JSON.stringify(s)} is not a parameter of this jprob; expected one of: ${t.get_cparam_bare_names().join(", ")}`);continue}const f=Ji(l),p=f.find(h=>String(h)===c);if(p===void 0){r.push(`${n} value ${JSON.stringify(c)} for ${JSON.stringify(s)} is not one of its allowed values: ${f.join(", ")}`);continue}u[s]=p}return Object.keys(u).length===0?null:u}function hE(e,n){return encodeURIComponent(e)+Pm+encodeURIComponent(String(n))}function Wo(e,n){const t=e.get(n);return t===null?null:t.split(",").filter(r=>r!=="").map(decodeURIComponent)}function Xo(e,n,t){e.set(n,t.map(encodeURIComponent).join(","))}function pne(e){const n=Wo(e,pe.mixAgentCli),t=Wo(e,pe.mixModelVersion),r=Wo(e,pe.mixEffort);return n===null&&t===null&&r===null?null:{agentClis:n??[],modelVersions:t??[],efforts:r??[]}}function hne(e,n){const t=e.get(pe.trialIndex);if(t===null||t===Kt)return Xn;if(!/^\d+$/.test(t))return n.push(`${pe.trialIndex}=${JSON.stringify(t)} is neither ${Kt} nor a non-negative integer`),Xn;const r=Number(t),i=e.get(pe.trialEntry);return i===null?{kind:"adhoc-trial",entryTrialIndex:r}:{kind:"methodical-trial",identity:{entry_id:i,entry_trial_index:r}}}function mne(e,n){const t=e.get(pe.adhocMode),r=e.get(pe.adhocName),i=e.get(pe.adhocLabel);return t===null&&r===null&&i===null?null:t!=="plainnum"&&t!=="plaincode"?(n.push(`${pe.adhocMode}=${JSON.stringify(t)} invalid; expected plainnum or plaincode`),null):r===null||i===null?(n.push(`${pe.adhocMode} requires ${pe.adhocName} and ${pe.adhocLabel}`),null):{whoseKind:"adhoc",nameOrPseudoname:r,queryMode:t,label:i}}function vne(e,n){const t=pe.comparePinned;if(!(e.has(t)||Lt.some(u=>e.has(Dm[u]))))return null;const i=Wo(e,t),o=Object.values(qm);for(const u of i??[])o.includes(u)||n.push(`${t} names ${JSON.stringify(u)}, which is not one of Compare's rows; expected any of: ${o.join(", ")}`);const a=u=>({pinned:i===null?y2[u].pinned:i.includes(qm[u]),value:e.get(Dm[u])});return{jtaskGroup:a("jtaskGroup"),agentCli:a("agentCli"),modelVersion:a("modelVersion"),effort:a("effort")}}function _ne(e,n,t,r,i){const o=e.get(pe.interactionMode);if(o===null){gne(e,n,t,i);return}const a=Tt.find(s=>s===o);if(a===void 0){i.push(`The link names an unknown mode (${JSON.stringify(o)}); showing the default view instead. Expected one of: ${Tt.join(", ")}.`);return}t.interactionMode=a;const u=e.get(pe.queryMode);if(u==="plainnum"||u==="plaincode"?t.lastYoursWhose=`yours-${u}`:u!==null&&r.push(`${pe.queryMode}=${JSON.stringify(u)} invalid; expected plainnum or plaincode`),a==="Compare"){const s=vne(e,r);s!==null&&(t.compare=s);return}t.readTrials={jtaskGroupId:e.get(pe.jtaskGroup),mixtureGroupSelection:pne(e),adhoc:mne(e,r),trial:hne(e,r)}}function gne(e,n,t,r){const{identity:i,errors:o}=yO(e);if(r.push(...o),i===null)return;const a=rA({selection:i,lastMethoSelection:null,selectedJtaskGroupId:""},n.presetData);t.interactionMode=a.mode,a.estimateQueryMode!==null&&(t.lastYoursWhose=`yours-${a.estimateQueryMode}`),t.readTrials=a.readTrials}function bne(){if(typeof window>"u")return!1;const e=new URLSearchParams(window.location.search);return e.has(pe.interactionMode)||e.has("whose")||e.has(oa)}function yne(e,n){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search),{overrides:r,errors:i,readerFacingErrors:o}=fne(t,n);for(const a of i)console.error(`[url_view_overrides] ${a}`);for(const a of o)Ut(lne,new Error(a));r.inputMode!==void 0&&(e.ui.inputMode=r.inputMode),r.probAsOdds!==void 0&&(e.ui.probAsOdds=r.probAsOdds),r.showFramingNotes!==void 0&&(e.ui.showFramingNotes=r.showFramingNotes),r.srcquotesInlinedOverride!==void 0&&(e.ui.srcquotesInlinedOverride=r.srcquotesInlinedOverride),r.cparamPinned!==void 0&&Object.assign(e.ui.cparamPinned,r.cparamPinned),r.cparamValues!==void 0&&Object.assign(e.ui.cparamValues,r.cparamValues),r.inspectedCparamValues!==void 0&&Object.assign(e.ui.inspectedCparamValues,r.inspectedCparamValues),r.interactionMode!==void 0&&(e.ui.interactionMode=r.interactionMode),r.lastYoursWhose!==void 0&&(e.ui.lastYoursWhose=r.lastYoursWhose),r.readTrials!==void 0&&(e.ui.readTrials=r.readTrials),r.compare!==void 0&&(e.ui.compare=r.compare)}function Ene(e,n){const{ui:t,srcquotesInlined:r}=e,{jprobTemplate:i}=n,o=new URLSearchParams,a=[];return o.set("response_type",une[t.inputMode]),o.set("prob_as_odds",t.probAsOdds),o.set("show_framing",String(t.showFramingNotes)),i.has_srcquotes()&&o.set("srcquotes_view",r?sne:cne),Sne(t,n,o),$ne(t,i,n,o),{params:o,errors:a}}function Sne(e,n,t){if(t.set(pe.interactionMode,e.interactionMode),e.interactionMode==="Estimate"){t.set(pe.queryMode,ln(Ie(e.lastYoursWhose).source));return}if(e.interactionMode==="Compare"){Ane(e.compare,n,t);return}const{resultSet:r}=qn(e.readTrials,n);if(r.kind==="methodical"){t.set(pe.jtaskGroup,r.jtaskGroupId);const{agentClis:o,modelVersions:a,efforts:u}=r.mixtureGroupSelection;Xo(t,pe.mixAgentCli,o),Xo(t,pe.mixModelVersion,a),Xo(t,pe.mixEffort,u)}const i=e.readTrials.adhoc;i!==null&&(t.set(pe.adhocMode,i.queryMode),t.set(pe.adhocName,i.nameOrPseudoname),t.set(pe.adhocLabel,i.label)),wne(e.readTrials.trial,t)}function Ane(e,n,t){const{rows:r}=E2(e,n.presetData);Xo(t,pe.comparePinned,Lt.filter(i=>e[i].pinned).map(i=>qm[i]));for(const i of Lt){const o=e[i].pinned?r[i].value:e[i].value;o!==null&&t.set(Dm[i],o)}}function wne(e,n){if(e.kind==="mix"){n.set(pe.trialIndex,Kt);return}if(e.kind==="adhoc-trial"){n.set(pe.trialIndex,String(e.entryTrialIndex));return}n.set(pe.trialEntry,e.identity.entry_id),n.set(pe.trialIndex,String(e.identity.entry_trial_index))}function $ne(e,n,t,r){const i=wn(e,t),o=ln(Ie(i).source);if(!(o!=="plaincode"&&o!=="richcode")){for(const a of n.get_cparam_bare_names())r.append(e.cparamPinned[a]!==!1?"calc_pin":"calc_unpin",a);for(const a of n.get_cparams()){const u=ye(a.id);r.append("calc_value",hE(u,Ine(a,e)))}if(wL(e.interactionMode,n,i))for(const[a,u]of Object.entries(nu(n,{ui:e})))r.append("inspect_value",hE(a,u))}}function Ine(e,n){return S2(n.cparamValues[ye(e.id)],e.default_value,Ji(e))}function tn(e){if(typeof window>"u")return;const n=new URL(window.location.href);if(!n.searchParams.has(e))return;n.searchParams.delete(e);const t=n.searchParams.toString(),r=`${n.pathname}${t?"?"+t:""}${n.hash}`;window.history.replaceState(null,"",r)}const Tne=["framing-notes-explainer","srcquote-explainer"],Lne=Object.values(Be).filter(e=>!Tne.includes(e)).map(e=>`${e}-section`),GL=2;function jL(e,n){const t=n+GL;let r=null;for(const i of e)i.top>t||(r===null||i.top>r.top)&&(r=i);return r===null?null:r.id}function Rne(e,n,t){const r=[...e].sort((l,f)=>l.top-f.top);if(r.length===0)return null;const i=r[0],o=jL(e,n),a=o===null?-1:r.findIndex(l=>l.id===o),u=r[a+1];return u===void 0?i.id:u.top-n<=t+GL?u.id:i.id}function Cne(e=document){return jL(VL(e),i3(e))}function kne(e=document){return Rne(VL(e),i3(e),Nne(e))}function i3(e=document){var r;const n=parseFloat(((r=e.defaultView)==null?void 0:r.getComputedStyle(e.documentElement).getPropertyValue(L$))??"");if(Number.isFinite(n))return n;const t=e.getElementById(hv);return t===null?0:t.getBoundingClientRect().bottom}function Nne(e){var t;const n=e.documentElement;return Math.max(0,n.scrollHeight-n.clientHeight-(((t=e.defaultView)==null?void 0:t.scrollY)??0))}function VL(e){const n=[];for(const t of Lne){const r=e.getElementById(t);if(r===null)continue;const i=r.getBoundingClientRect();i.width===0&&i.height===0||n.push({id:t,top:i.top})}return n}const Mne="url",One="copied ✓",Pne="in address bar",qne=1200;function Dne(e,n,t){const r=n.toString(),i=t===null?"":`#${encodeURIComponent(t)}`;return`${e.origin}${e.pathname}${r?"?"+r:""}${i}`}function Fne(e,n,t=document){const{params:r,errors:i}=Ene(e,n),o=Cne(t);return{href:Dne(new URL(t.location.href),r,o),errors:i}}function mE(e,n){e.textContent=n,setTimeout(()=>{e.textContent=Mne},qne)}async function xne(e,n,t){var o;const{href:r,errors:i}=Fne(n,t);for(const a of i)console.error(`[view_share_link] ${a}`);window.history.replaceState(null,"",r);try{if(!((o=navigator.clipboard)!=null&&o.writeText))throw new Error("Clipboard access is unavailable in this browser.");await navigator.clipboard.writeText(r),mE(e,One)}catch(a){console.error("[view_share_link] copying the view link failed",a),mE(e,Pne)}}function Bne(e,n){for(const t of e.querySelectorAll(`.${Xh}`)){const r=t.dataset.bareid,i=t.dataset.mname;if(r===void 0||i===void 0)throw new Error("Toggleable symbol ref is missing data-bareid or data-mname.");t.textContent=n?i:r}}function Hne(e){const n=e.getWhose();try{e.renderCurrentView();return}catch(t){if(!e.shouldRecover(n))throw t;try{e.switchToSafeYours(n),e.renderSafeYoursView()}catch(r){throw new AggregateError([t,r],`View ${JSON.stringify(n)} failed, and the fail-safe Yours view also failed`)}e.recovered(n,t)}}const Une=[JY,WY,az];function xa(e){QQ(e,{containers:Une,thresholdChars:cn().longTextAbbrevThreshold,startAbbreviated:N.ui.longTextAbbrev})}let B,N,ie,dn,hn,An,ei,fo,He=null,Ko=0,jn=null,xm=null;const vE="calculator-section",Gne="yours-plainnum",jne="There are no methodical trial results to read for this problem.",Vne="result-set-empty-state";function ere(e){$q(),history.scrollRestoration="manual",DQ(),WL(e),Ate(),$te(),AW(Zne()),He=wee({getContext:Rn,getPersistentPopovers:()=>N.ui.persistentPopovers}),Iee(),window.addEventListener("resize",u3),window.addEventListener("pagehide",()=>{po(),qe()}),window.addEventListener("resize",Pa),OR(En)}function WL(e){var o;Ko++,jn==null||jn.abort(),jn=null,Oj(),Bj(),Jj(),Fj(),JX(),B=XR(e.jpdefn);const n=one(e.adhocPresets??[],ZO(e.adhocPrecomputed??[])),t=nO(n);ie={adhocPresets:n,adhocPlainnumEntries:t.plainnum,adhocPlaincodeEntries:t.plaincode,richcodeResults:ene(rO(QO(e.richcodeResults??[]))),jtaskHashGroups:((o=e.jprobWebConfig)==null?void 0:o.jtask_hash_groups)??[]},Wne();const{state:r,readerFacingMessages:i}=bq(B,pt());if(N=r,dn=ZM(e.jpdefn),hn=e.formRegistry,An=e.barrierRegistry??{},ei=e.cparamComboFilter,fo=e.cparamFilterDescription,yne(N,pt()),!bne())for(const a of i)Ut(hq,new Error(a));FQ(N.ui.sidePanelExpanded),Jne(),En()}function pt(){return{jprobTemplate:B,presetData:ie}}function ke(){return wn(N.ui,{presetData:ie})}function qe(){gA(B.config,N.ui)}function Wne(){const e=bO(ie);if(e.length===0)return;const n=`these adhoc entries are not uniquely named, so a link or a remembered view naming one of them shows the first: ${e.join("; ")}`;Ut("Adhoc results",new Error(n))}function Xne(){for(const e of UL)tn(e)}function XL(){tn("calc_pin"),tn("calc_unpin")}function KL(){XL(),tn("calc_value"),tn("inspect_value")}const Kne={showFramingNotes:"show_framing"};function Bm(e,n){N.ui[e]=n,qe(),Ka(e,n);const t=Kne[e];if(t!==void 0&&tn(t),e==="longTextAbbrev"){Ba(()=>{eee(document,n),_E(e,n)});return}if(e==="showGlobalExampleControls"){Ba(()=>{const r=document.getElementById("main-content");r&&iL(r,n),u3(),_E(e,n)});return}En()}function _E(e,n){const t=document.getElementById(ci(e));t instanceof HTMLInputElement&&(t.checked=n)}function Yne(){return{ui:N.ui,srcquotesInlined:Xv(N.ui.srcquotesInlinedOverride,o3().srcquotes_inlined)}}function Jne(){const e=B.layout.sections.html.find(n=>"chunkid"in n&&n.style==="title");if(e&&"chunkid"in e){const n=B.find_textchunk_defn(e.chunkid);n&&(document.title=cC(n))}}async function gE(e){const n=RW(e);if(!n)throw new Error(`swapJprob: no manifest module for aid '${e}' (looked for ${iv(e)}).`);const t=await n();po(),qe();const r=window.location.pathname.replace(/[^/]+\.html$/,`${e}.html`);history.pushState(null,"",r),WL(t.manifest)}function YL(e,n){e&&(N.ui.foldOpenById[e]=n,qe())}function zne(e){!(e instanceof HTMLDetailsElement)||e.open||(e.open=!0,YL(e.id,!0))}function Zne(){return{toggle_mnames:()=>{N.ui.symbolMnames=!N.ui.symbolMnames,qe(),Ka("symbolMnames",N.ui.symbolMnames),Bne(document,N.ui.symbolMnames)},goto_calculator:zL,goto_top:()=>{window.scrollTo({top:0})},switch_whose_mode:()=>{const e=Fte();e!==null&&fR(e)},toggle_srcquotes_inlined:()=>{B.has_srcquotes()&&(N.ui.srcquotesInlinedOverride=uZ(N.ui.srcquotesInlinedOverride,o3().srcquotes_inlined),qe(),tn("srcquotes_view"),En())},toggle_settings_shortcuts:gZ,toggle_framing_notes:()=>{Bm("showFramingNotes",!N.ui.showFramingNotes)},toggle_long_text_abbrev:()=>{Bm("longTextAbbrev",!N.ui.longTextAbbrev)},goto_next_section:()=>{var n;const e=kne();e!==null&&((n=document.getElementById(e))==null||n.scrollIntoView({block:"start"}))}}}function o3(){if(Xe(ke()))return N.optionValues;const e=Ln(N.ui,ie);if(!e)return N.optionValues;const n={...N.optionValues};for(const t of B.get_aopts()){const r=ye(t.id);r in e.aopts&&(n[r]=e.aopts[r])}if("cparam_values"in e&&e.cparam_values)for(const t of B.get_cparams()){const r=ye(t.id);r in e.cparam_values&&(n[r]=e.cparam_values[r])}return n}function Rn(){const e=o3(),n=!!(e.show_typical_examples??GE),t=Xv(N.ui.srcquotesInlinedOverride,e.srcquotes_inlined),r=Wm(B,{symbolMnames:N.ui.symbolMnames}),i=ke(),{source:o}=Ie(i),a=ln(o);return{jprobInstance:UE(B,jE(B,e,a),a),showTypical:n,refLookup:r,srcquotesInlined:t,renderedSrcquoteIds:new Set,showFramingNotes:N.ui.showFramingNotes,displayOptionValues:e,showExampleClassification:N.ui.showExampleClassification,showBareIds:sZ(i),exampleFoldState:N.ui.exampleFoldState,foldOpenById:N.ui.foldOpenById,popoverAllRefs:N.ui.popoverAllRefs}}const Qne="Keeping your place on the page";function JL(){return{root:document.getElementById("main-content"),viewportTopInsetPx:i3(document)}}function a3(e){try{return e()}catch(n){return Ut(Qne,n),null}}function po(){const e=xm;return e===null||e.aid!==B.aid?null:a3(()=>{const n=XP(JL());return N.ui.scrollPositionByInteractionMode[e.interactionMode]=n,n})}function Hm(e){a3(()=>KP(e,JL()))}function zL(){const e=document.getElementById(vE);if(!e)throw new Error(`#${vE} not found.`);zne(e),e.scrollIntoView({block:"start"})}function Ba(e){const n=po();e(),n!==null&&Hm(n)}function ete(e,n,t,r){if(e==="landOnCalculator"){a3(zL);return}if(n===null&&window.location.hash!=="")return;const i=n!==null&&n.aid===r.aid;if(i&&n.interactionMode===r.interactionMode){t!==null&&Hm(t);return}const a=N.ui.scrollPositionByInteractionMode[r.interactionMode]??null??(i?t:null);if(a===null){window.scrollTo({top:0});return}Hm(a)}function En(e="preserveReadingPosition"){const n=xm,t=po();ho(ZL);const r={aid:B.aid,interactionMode:N.ui.interactionMode};xm=r,ete(e,n,t,r)}function ho(e){Hne({getWhose:()=>ke(),shouldRecover:n=>!Xe(n)||nte(),renderCurrentView:()=>{tte(),e()},switchToSafeYours:rte,renderSafeYoursView:ZL,recovered:ite})}function nte(){return ie.adhocPresets.length>0||ie.richcodeResults.length>0}function tte(){if(N.ui.interactionMode==="ReadTrials"&&N.ui.readTrials.adhoc!==null&&Ln(N.ui,ie)===null)throw new Error(`The selected adhoc entry ${JSON.stringify(ke())} is missing from the loaded data`)}function rte(e){N.ui.interactionMode="Estimate",N.ui.lastYoursWhose=Gne,N.ui.readTrials={...N.ui.readTrials,adhoc:null,trial:Xn},N.ui.compare=y2,ie={adhocPresets:[],adhocPlainnumEntries:[],adhocPlaincodeEntries:[],jtaskHashGroups:[],richcodeResults:[]}}function ite(e,n){try{qe()}catch(r){Ut("Persisting the fail-safe Yours selection",r)}for(const r of UL)try{tn(r)}catch(i){Ut(`Clearing the failed ${r} URL override`,i)}const t=Xe(e)?"Rendering Yours with loaded result data":`Rendering chosen result ${JSON.stringify(e)}`;Ut(`${t}; switched safely to Yours and disabled loaded result data until reload`,n)}function ZL(){const e=Rn(),n=document.getElementById("main-content"),t=Mte(),r=NW(B.aid),i=t===null&&N.ui.interactionMode!=="Compare";N.ui.interactionMode==="Compare"?sR(e):t===null?(fZ(n,B,e),wZ(n,r==null?void 0:r.version),FZ(n,Ln(N.ui,ie)!==null)):n.innerHTML=`<p class="${Vne}">${U(t)}</p>`;const o=y$(N,ie);if(mX(N,ke(),r??{},o,{currentAid:B.aid,currentFamily:f$(B.aid)},{available:eu(ie),active:N.ui.interactionMode},I$(ke(),B)),ate(),ute(e),i){ote(e,o);const a=document.getElementById(`${Be.SRCQUOTE_EXPLAINER}-content`);a&&_ee(a,e)}iL(n,N.ui.showGlobalExampleControls),u3(),He==null||He.closeDisconnectedTriggers(),xa(n)}function ote(e,n){for(const c of Dee){const l=document.getElementById(`${Be[c]}-content`);l&&Bee(l,c,B,e,N,ke())}const t=document.getElementById(`${Be.TCHOICE}-content`);t&&DL(t,B,e,N,ke(),$$(N,ie),cv(N,ie),ft(N,ie));const r=document.getElementById("cparams-content");r&&dQ(r,B,e,N,ke(),ei,fo),je.renderAll({ctx:e,availableModes:n});const i=document.getElementById(p$);i&&MZ(i,N,ke(),hn,ie),rR(e);const o=document.getElementById(d$);o&&rJ(o,e);const a=document.getElementById("framing-notes-root-content");a&&tJ(a,B,e,N.ui),nJ(B,e,N.ui);const u=document.getElementById("framing-notes-explainer-content");u&&iJ(u,e);const s=ft(N,ie);QL(s),eR(s),EL(s,Ln(N.ui,ie))}const je=OZ([{kind:"single",subentry:"CALCULATOR_HEADER",render(e,{availableModes:n}){cX(e,B,ie,N),e.prepend(mt(()=>FX(B,ke())));const t=document.createElement("div");t.id="calc-response-type-toggle",e.appendChild(t),x$(t,N,n,dX)}},{kind:"pair",pair:["CALCULATOR_INPUT","CALCULATOR_RESULTS"],render(e,n,{ctx:t}){Rm(e,n,B,t,N,ie,hn,An,ei,fo),oL(n,uR(N,ie))}},{kind:"single",subentry:"DERIVED_FORMS",render:(e,{ctx:n})=>bte(e,n)},{kind:"single",subentry:"SVAR_CARDS",render:(e,{ctx:n})=>vJ(e,B,n,N,ie)},{kind:"single",subentry:"YOURS_SAVED_LIST",render:e=>bz(e,B,N,ke())},{kind:"single",subentry:"JOINT_DEPENDENCE",render:(e,{ctx:n})=>iZ(e,N,ke(),B,n,ie,hn,An)},{kind:"single",subentry:"YOURS_CODE_INPUT",visible:()=>{const e=ke();return e==="yours-plaincode"||Qh(e,ie)!==null},render(e){const n=ke();if(n==="yours-plaincode")U7(e,B,N.yoursCodeRecord,"edit");else{const t=Qh(n,ie);t&&U7(e,B,t,"view")}}}]);function mo(e){return{get ctx(){return e??(e=Rn())},get availableModes(){return y$(N,ie)}}}function QL(e){const n=document.getElementById(`${Be.RESPONSE_NOTES}-content`);n&&(cz(n,ke()==="yours-plaincode"?{mode:"edit",misc:N.yoursCodeRecord.misc_response}:{mode:"read",freeTextPerTrial:S$(N,ie),trialSelection:e}),xa(n))}function ate(){const e=document.getElementById(Hu);e&&tQ(e,B,N,ie)}function ute(e){const n=[];N.ui.interactionMode==="ReadTrials"&&n.push({title:Tee,render:ste});const t=ke();wL(N.ui.interactionMode,B,t)&&n.push({title:SQ(t),render:r=>AQ(r,B,N,t,tR(e))}),BQ({visible:n.length>0,areas:n}),$L(B,N,t)}function ste(e){const n=pt(),{resultSet:t}=qn(N.ui.readTrials,n),r=qn({...N.ui.readTrials,adhoc:null},n).resultSet;Mee(e,{presetData:ie,jtaskGroupIds:Pr(ie),selectedJtaskGroupId:r.kind==="methodical"?r.jtaskGroupId:null,mixtureGroupInterpretation:r.kind==="methodical"?r.interpretation:null,activeAdhocWhose:t.kind==="adhoc"?t.whose:null})}function eR(e){var t;const n=document.getElementById(`${Be.ESTIMATION}-section-header`);n&&WZ(n,uX(N,ie),e,((t=Ln(N.ui,ie))==null?void 0:t.label)??"")}function cte(e){const n=ft(N,ie),t=dt(N,ie);if(N.ui.readTrials={...N.ui.readTrials,trial:nR(e)},qe(),tn("trial_index"),tn("trial_entry"),dt(N,ie)!==t){En();return}Ba(()=>lte(n))}function lte(e){const n=ft(N,ie),t=cv(N,ie),r=document.getElementById(Hu);r&&yL(r,n);const i=je.container("SVAR_CARDS");i&&($T(i,n,t,N.ui.probAsOdds,fv(N,ie),qi()),xa(i));const o=Rn(),a=document.getElementById(`${Be.TCHOICE}-content`);a&&(n.kind==="trial"&&e.kind==="trial"?Yee(a,n.recordTrialIndex,t):DL(a,B,o,N,ke(),$$(N,ie),t,n),xa(a)),QL(n),eR(n),ni(o),EL(n,Ln(N.ui,ie)),Nte()}function fte(e){const n=Number(e.getAttribute(X$));if(!Number.isInteger(n)||n<0||n>=E$(N,ie)){console.warn("Show single trial view: the link names no trial of the viewed record; ignoring");return}const t=e.getAttribute(K$),r=t===null?nu(B,N):JSON.parse(t),i=nR(Ni(n));i.kind!=="mix"&&(Object.assign(N.ui,PZ(N.ui,i,r)),qe(),tn("trial_index"),tn("trial_entry"),KL(),En())}function dte(e){const n=pte(e);if(n===null){console.warn("View in ReadTrials: the button names no published result set; ignoring");return}const t=qZ(N.ui,n);N.ui.inspectedCparamValues=t.inspectedCparamValues,N.ui.cparamValues=t.cparamValues,N.ui.cparamPinned=t.cparamPinned,KL(),_o({interactionMode:"ReadTrials",readTrials:t.readTrials},"landOnCalculator")}function pte(e){const n=u=>{const s=e.getAttribute(u);if(s!==null)try{return JSON.parse(s)}catch{return}},t=e.getAttribute(ZI),r=n(QI),i=n(eT);if(t===null||!hte(r)||!mte(i))return null;const o=e.getAttribute(Tm),a=n(Tm);return o!==null&&!vte(a)?null:{jtaskGroupId:t,configuration:r,combination:i,singleContributingTrial:o===null?null:a}}function hte(e){if(typeof e!="object"||e===null)return!1;const{model:n,version:t,effort:r}=e;return typeof n=="string"&&typeof t=="string"&&typeof r=="string"}function mte(e){return typeof e!="object"||e===null||Array.isArray(e)?!1:Object.values(e).every(n=>typeof n=="string"||typeof n=="number"||typeof n=="boolean")}function vte(e){if(typeof e!="object"||e===null)return!1;const{entry_id:n,entry_trial_index:t}=e;return typeof n=="string"&&Number.isInteger(t)&&t>=0}function nR(e){if(e.kind==="mix")return Xn;if(N.ui.readTrials.adhoc!==null)return{kind:"adhoc-trial",entryTrialIndex:e.recordTrialIndex};const n=Ln(N.ui,ie),t=n===null||!("cparam_combos"in n)?null:g2(n,e.recordTrialIndex);return t===null?(console.warn(`trial selector: record trial ${e.recordTrialIndex} has no stable identity; showing the mixture`),Xn):{kind:"methodical-trial",identity:t}}function tR(e){return{filter:ei,description:fo,renderDefn:n=>Ae(n,e)}}function _te(e,n){const t=B.get_cparam(n),r=om(t,e,zv);if(typeof r=="boolean")throw new Error(`Cparam ${t.id} produced a boolean value`);N.ui.inspectedCparamValues[n]=r,qe(),tn("inspect_value"),Ba(gte)}function gte(){const e=Rn(),n=je.container("SVAR_CARDS");n&&_J(n,B,N,ie);const t=document.getElementById(Hu);t&&rQ(t,B,N,ie);const r=document.getElementById(gr);r&&wQ(r,B,N,tR(e)),$L(B,N,ke()),ni(e)}function vo(e){je.render("DERIVED_FORMS",mo(e)),rR(e)}function rR(e){const n=je.container("DERIVED_FORMS"),t=[...document.querySelectorAll(".derived-form")].filter(r=>!(n!=null&&n.contains(r)));iR(t,e)}function iR(e,n){for(const t of e){const r=t.dataset.formId;r&&qJ(t,r,B,n,N,hn,An,ie)}}function bte(e,n){const t=[...e.querySelectorAll(".derived-form")];iR(t,n),e.hidden=t.every(r=>r.innerHTML==="")}const yte=uL("JOINT_DEPENDENCE");function ni(e){je.render("JOINT_DEPENDENCE",mo(e))}function oR(){const e=je.container("JOINT_DEPENDENCE");if(!e)return null;const n=Vv(N,ke(),B,hn,An);return n===null?null:{container:e,editorCtx:n,draft:Wv(N,n)}}function Ete(e,n){Hv(N,B,dn,n,e.editorCtx.eligibleSvars,e.editorCtx.degenerateSvars),JT(e.container,n,e.editorCtx)}function aR(e){const n=Rn(),t=je.container("CALCULATOR_RESULTS");if(t&&Fu(t,B,n,N,ie,hn,An),vo(n),e)ni(n);else{const r=je.container("JOINT_DEPENDENCE");r&&Zz(r,N,ke(),B,n,hn,An)}Vu(),He==null||He.closeDisconnectedTriggers()}function Ste(e){var r;const n=oR();if(!n)return;const t=nZ(n.draft,e,n.editorCtx.eligibleSvars);Hv(N,B,dn,t,n.editorCtx.eligibleSvars,n.editorCtx.degenerateSvars),aR(!0),e.kind==="add"&&((r=document.querySelector(`#${yte} .jde-latent-card:last-child [data-latent-field="name"]`))==null||r.focus({preventScroll:!0}))}function Ate(){const e=document.getElementById("sticky-help");e&&e.appendChild(mt(()=>qX(B,{exampleFoldControls:TZ(),exampleFoldControlsOffInSettings:wte(),interactionModeSelector:_X(),yoursFixFreeToggle:bX()})))}function wte(){const e=document.getElementById("main-content");return!N.ui.showGlobalExampleControls&&e!==null&&rL(e)}function u3(){const e=document.getElementById(hv);e&&document.documentElement.style.setProperty(L$,`${e.offsetHeight+4}px`)}function $te(){var n,t,r,i,o,a,u,s,c,l,f,p;document.addEventListener("click",h=>{if(!h.target.closest("#response-type-toggle, #calc-response-type-toggle"))return;const m=h.target.closest("[data-mode]");if(!m)return;const v=m.dataset.mode;v!==N.ui.inputMode&&(N.ui.inputMode=v,qe(),tn("response_type"),En())}),document.addEventListener("change",h=>{const d=h.target;if(d.id!==Nm)return;const m=d.value;m!==N.ui.probAsOdds&&(N.ui.probAsOdds=m,qe(),tn("prob_as_odds"),En())}),document.addEventListener("click",h=>{const d=h.target.closest(".timeline-nav-btn");if(!d)return;const m=d.dataset.timelineTarget;m&&gE(m)}),document.addEventListener("change",h=>{const d=h.target;if(d.id!==N$)return;const m=d.value;if(m===M$){window.location.assign("/hirwebdep/");return}m&&m!==B.aid&&gE(m)}),(n=document.getElementById(dv))==null||n.addEventListener("click",h=>{const d=h.target.closest(`[${ym}]`);if(!d)return;const m=Tt.find(v=>v===d.getAttribute(ym));m!==void 0&&fR(m)}),(t=document.getElementById(pv))==null||t.addEventListener("click",h=>{const d=h.target.closest(".mode-radio-btn");d&&EE(d)}),(r=document.getElementById(Hu))==null||r.addEventListener("click",h=>{const d=h.target.closest(`.${Uu}`);if(!d)return;const m=d.getAttribute(Gu)??"",v=b$(m);if(v===null){console.warn(`trial selector: unknown selection ${JSON.stringify(m)}; ignoring`);return}cte(v)}),document.addEventListener("click",h=>{const d=h.target.closest(`.${W$}`);d&&fte(d)}),document.addEventListener("click",h=>{const d=h.target.closest(`.${zI}`);d&&dte(d)}),(i=document.getElementById(gr))==null||i.addEventListener("click",h=>{h.target.closest(`#${Qv}`)!==null&&(N.ui.sidePanelExpanded=xQ(),qe())}),(o=document.getElementById(gr))==null||o.addEventListener("change",h=>{const d=h.target;if(d.dataset.inspectedCparam){_te(d,d.dataset.inspectedCparam);return}if(d.id===NL){Pte(d.value);return}if(d.id===ML){Dte(d.value);return}const m=d.getAttribute(Ca),v=d.getAttribute(Lv);if(m!==null&&v!==null){qte(m,v);const _=document.getElementById(gr);_&&hY(_,m,v);return}}),(a=document.getElementById(Jv))==null||a.addEventListener("click",h=>{const d=h.target.closest("[data-action]");if(!d)return;const m=d.dataset.action;Jte(m)}),(u=document.getElementById("options-controls"))==null||u.addEventListener("change",h=>{const d=h.target;if(d.dataset.pref){Bm(d.dataset.pref,d.checked);return}if(d.dataset.prefInt){const m=d.dataset.prefInt,v=parseInt(d.value,10);!isNaN(v)&&v>0&&(Ka(m,v),En());return}}),(s=document.getElementById("options-controls"))==null||s.addEventListener("click",h=>{const d=h.target;if(d.id===R$||d.closest(".options-expand-btn")){wX(),Pa();return}if(d.id===P$){xne(d,Yne(),pt());return}if(d.id==="keymap-btn"){tL();return}if(d.id===O$){PR();return}if(d.id==="save-all-data-btn"){Kte();return}if(d.id==="load-all-data-btn"){Yte();return}}),document.addEventListener("click",h=>{const d=h.target,m=document.getElementById("options-controls");!m||m.contains(d)||d.closest(`#${Kv}`)||(D$(),Pa())}),(c=document.getElementById("main-content"))==null||c.addEventListener("input",h=>{const d=h.target;if(d.closest('.yours-code-input[data-variant="view"]'))return;if(d.classList.contains("code-body-input")){Uv(N,B,dn,d.value);return}if(dz(d,N,B,dn))return;const m=j7(d);if(m!==null){const v=oR();v&&Ete(v,Qz(v.draft,m));return}if(d.classList.contains(YI)){const v=d,_=Lt.find(b=>b===v.getAttribute(Vt)),g=JSON.parse(v.dataset.values??"[]")[parseInt(v.value)];if(_===void 0||g===void 0)return;bE(UP(N.ui.compare,_,g));return}if(d.classList.contains("cparam-slider")){const v=d,_=v.dataset.cparam;if(!_)return;const g=JSON.parse(v.dataset.values??"[]"),b=parseInt(v.value),y=g[b];if(y===void 0)return;N.ui.cparamValues[_]=y,qe(),tn("calc_value"),yE();return}});const e=document.getElementById("main-content");e&&rz(e,{persistCalcTextarea:Lte,recomputeAfterCalcTextarea:Rte,persistAssumptionCard:Cte,recomputeAfterAssumptionCard:kte}),(l=document.getElementById("main-content"))==null||l.addEventListener("click",h=>{const d=h.target;if(d.classList.contains("code-run-btn")){Bte();return}const m=d.closest(".lloads-copy-to-yours-btn");if(m){Vte(m);return}if(d.classList.contains("copy-to-yours-btn")){Hte();return}const v=d.closest(".jde-summary");if(v){const S=v.closest("details");S&&(N.ui.jointDependenceEditorOpen=!S.open,qe());return}const _=d.closest(`.${lo} > summary`);if(_){const S=_.closest("details");S&&YL(S.id,!S.open);return}const g=eZ(d);if(g!==null){Ste(g);return}const b=d.closest(".yours-saved-delete");if(b){h.stopPropagation();const S=b.dataset.key,T=b.dataset.kind;S&&xte(S,T??"plainnum");return}const y=d.closest(".yours-saved-row");if(y){const S=y.dataset.key,T=y.dataset.kind;S&&SE(S,T??"plainnum");return}const E=d.closest(".mode-radio-btn");if(E){EE(E);return}const w=d.closest(".ex-btn");if(w){Wte(w);return}const I=d.closest(".framing-fold-btn");if(I){Xte(I);return}const C=d.closest(`.${t3}`);if(C){nee(C);return}const L=d.closest(`.${G$}`);if(L){const S=L.dataset.mcLiveActivationToken;(S===void 0||!YX(S))&&console.warn(`MC activation: unknown token ${JSON.stringify(S)}; re-rendering without activating`),dr();return}const $=d.closest(`.${Mi}`);if($){const S=$.dataset.mcPoolToken;(S===void 0||!Dj(S))&&console.warn(`MC accumulate: unknown pool token ${JSON.stringify(S)}; re-rendering without accumulating`),dr();return}const A=d.closest(".sweep-mode-btn");if(A){N.ui.codeSweepMode=A.dataset.sweepMode,qe(),dr();return}}),(f=document.getElementById("main-content"))==null||f.addEventListener("keydown",h=>{if(h.key!=="Enter"&&h.key!==" ")return;const d=h.target,m=d.closest(".yours-saved-row");if(!m||d.closest(".yours-saved-delete"))return;h.preventDefault();const v=m.dataset.key,_=m.dataset.kind;v&&SE(v,_??"plainnum")}),(p=document.getElementById("main-content"))==null||p.addEventListener("change",h=>{const d=h.target;if(j7(d)!==null){aR(!1);return}if(d.dataset.aoptBody){const m=d.dataset.aoptBody,v=d,_=B.get_aopt(m);let g;if(_.input_type==="MultiStringFromSet"){const b=d.closest(".cparam-or-aopt");if(b===null)throw new Error(`MultiStringFromSet control for ${m} is outside an option row`);const y=[...b.querySelectorAll("input[data-aopt-body]")].filter(E=>E.dataset.aoptBody===m);if(y.length===0)throw new Error(`MultiStringFromSet option ${m} has no checkbox controls`);g=zP(_,y)}else g=om(_,v,_.input_type);m==="srcquotes_inlined"&&N.ui.srcquotesInlinedOverride!==null&&(N.ui.srcquotesInlinedOverride=null,qe(),tn("srcquotes_view")),N=c_(N,B,m,g),En();return}if(d.dataset.cparamBody){const m=d.dataset.cparamBody,v=B.get_cparam(m),_=om(v,d,zv);N=c_(N,B,m,_),En();return}if(d.dataset.tchoiceBody){const m=d.dataset.tchoiceBody,v=B.get_tchoice(m),_=ln(Ie(ke()).source);if(_!=="plainnum"&&_!=="plaincode")throw new Error(`tchoice edit fired in unexpected query mode "${_}"`);if(TE(v)){const b=zee(v,d);b!==null&&B7(N,B,dn,_,m,b);return}if(!Er(v))throw new Error(`tchoice "${m}" has unrecognized response_kind`);const g=Jee(v,d);B7(N,B,dn,_,m,g);return}if(d.classList.contains("code-plot-target-kind-radio")){const m=d.value;if(m!=="formula"&&m!=="raw_response")return;N.ui.codePlotTargetKind=m,qe(),dr();return}if(d.classList.contains("code-plot-formula-select")){N.ui.codePlotTargetKind="formula",N.ui.codePlotFormulaId=d.value,qe(),dr();return}if(d.classList.contains("code-plot-raw-response-select")){N.ui.codePlotTargetKind="raw_response",N.ui.codePlotRawResponseName=d.value,qe(),dr();return}if(d.classList.contains(JI)){const m=d,v=Lt.find(_=>_===m.getAttribute(Vt));if(v===void 0)return;bE(HP(N.ui.compare,ie,v,m.checked));return}if(d.classList.contains("cparam-pin-checkbox")){const m=d.dataset.cparam;if(!m)return;N.ui.cparamPinned[m]=d.checked,qe(),XL(),yE();return}})}function Ite(){var n;const e=document.querySelector(".calc-textarea");if(e&&document.activeElement!==e){const t=e.dataset.group;t&&(e.value=((n=N.yoursRecord.raw_input)==null?void 0:n[t])??"")}}function Tte(){const e=je.container("SVAR_CARDS");e&&EJ(e,N,qi())}function Vu(){je.render("YOURS_SAVED_LIST",mo())}function Lte(e){const n=e.dataset.group;if(!n)return;const t=n==="sample"?e.value.split(`
`).map(r=>RT(r)).join(`
`):e.value;Bv(N,B,dn,n,t)}function Rte(){const e=Rn(),n=je.container("CALCULATOR_RESULTS");n&&Fu(n,B,e,N,ie,hn,An),vo(e),ni(e),Tte(),Vu(),He==null||He.closeDisconnectedTriggers()}function qi(){return Mr(B.svar_entries().map(e=>e.decl))}function Cte(e){const n=e.dataset.paramIndex,t=e.dataset.group;if(n==null||!t)return;const r=B.svar_entries().length,i=AJ(N,parseInt(n),e.value,r);Bv(N,B,dn,t,i);const o=je.container("SVAR_CARDS");o&&qu(o,N,qi())}function kte(e){Ite(),Vu();const n=Rn(),t=je.container("CALCULATOR_RESULTS");t&&Fu(t,B,n,N,ie,hn,An),vo(n),ni(n);const r=je.container("SVAR_CARDS");r&&(Dv(r,qi()),qu(r,N,qi())),He==null||He.closeDisconnectedTriggers()}function uR(e,n){var r;if(!n)return;const t=wn(e.ui,{presetData:n});return(r=fO(t,n))==null?void 0:r.meta}function dr(){if(N.ui.interactionMode==="Compare"){cR();return}ho(lR)}function sR(e){PY(document.getElementById("main-content"),{jprobTemplate:B,ctx:e,state:N,presetData:ie,globalOpts:cn(),formRegistry:hn})}function cR(){ho(()=>{sR(Rn()),He==null||He.closeDisconnectedTriggers()})}function bE(e){_o({interactionMode:"Compare",compare:e})}function lR(){const e=Rn();je.render("CALCULATOR_INPUT",mo(e)),vo(e),ni(e),He==null||He.closeDisconnectedTriggers()}function Nte(){ho(()=>{const e=Rn(),n=mo(e);F$(N,n.availableModes),je.render("CALCULATOR_HEADER",n),lR()})}function yE(){if(N.ui.interactionMode==="Compare"){cR();return}ho(()=>{const e=Rn(),n=je.container("CALCULATOR_INPUT"),t=je.container("CALCULATOR_RESULTS");n&&t&&(PJ(n,t,B,e,N,ie,hn,An,ei,fo),oL(t,uR(N,ie))),vo(e),He==null||He.closeDisconnectedTriggers()})}function _o(e,n="preserveReadingPosition"){const t=N.ui.interactionMode;po();const r=t==="ReadTrials"?Ote():null;Object.assign(N.ui,e),N.ui.interactionMode==="Compare"&&t!=="Compare"&&(N.ui.compare=FP(N.ui.compare,r)),qe(),Xne(),En(n)}function fR(e){e!==N.ui.interactionMode&&_o({interactionMode:e})}function Yt(e){_o({interactionMode:"Estimate",lastYoursWhose:vA(e,B.has_cparams())})}function Ha(e){_o({interactionMode:"ReadTrials",readTrials:wP(N.ui.readTrials,e,pt())})}function Mte(){if(N.ui.interactionMode!=="ReadTrials")return null;const{resultSet:e}=qn(N.ui.readTrials,pt());return e.kind==="no-results"?jne:null}function Ote(){const{resultSet:e}=qn(N.ui.readTrials,pt());return e.kind==="methodical"?e.jtaskGroupId:null}function Pte(e){Ha({...N.ui.readTrials,jtaskGroupId:e})}function qte(e,n){const{resultSet:t}=qn(N.ui.readTrials,pt());t.kind==="methodical"&&Ha({...N.ui.readTrials,mixtureGroupSelection:hP(t.mixtureGroupSelection,e,n)})}function Dte(e){if(e===OL){Ha({...N.ui.readTrials,adhoc:null});return}const n=xS(e,pt());if(n===null||n.whoseKind!=="adhoc"){console.warn(`adhoc results: unknown entry ${JSON.stringify(e)}; ignoring`);return}Ha({...N.ui.readTrials,adhoc:n})}function EE(e){const n=e.dataset.whose;n!=="yours-plainnum"&&n!=="yours-plaincode"||n!==ke()&&Yt(n)}function Fte(){const e=eu(ie);if(e.length<2)return null;const n=e.indexOf(N.ui.interactionMode);return e[(n+1)%e.length]}function xte(e,n){if(n==="plaincode"){const t=$2(B.aid).find(i=>i.codeOptionDictKey===e);if(!t)return;const r=WT(B,t.record);if(!confirm(`Delete saved estimation?
${r}`))return;tq(B.aid,e)}else{const t=Gv(B.aid).find(i=>i.plainnumOptionDictKey===e);if(!t)return;const r=VT(B,t.record)||"(default options)";if(!confirm(`Delete saved estimation?
${r}`))return;pz(B.aid,e)}Vu()}function SE(e,n){if(n==="plaincode"){const t=$2(B.aid).find(r=>r.codeOptionDictKey===e);if(!t)return;N=vz(N,B,e,t.record),Yt("yours-plaincode");return}else{const t=Gv(B.aid).find(r=>r.plainnumOptionDictKey===e);if(!t)return;N=mz(N,B,e,t.record)}Yt("yours-plainnum")}async function Bte(){const e=Ko,n=je.container("YOURS_CODE_INPUT"),t=n==null?void 0:n.querySelector(".code-error-area"),r=n==null?void 0:n.querySelector(".code-status");t&&(t.innerHTML=""),r&&(r.textContent="Running…");const i=n==null?void 0:n.querySelector(".code-body-input"),o=i?i.value:N.yoursCodeRecord.raw_code_input;i&&o!==N.yoursCodeRecord.raw_code_input&&Uv(N,B,dn,o);const{names:a,combinations:u}=fC(B.get_cparams(),ei),s=Cz(B.svar_decls()),c=cn();try{new Function(...a,o)}catch(_){r&&(r.textContent=""),t&&(t.textContent=`Syntax error: ${_.message}`);return}jn==null||jn.abort();const l=new AbortController;jn=l;let f;try{f=await cZ({source:o,cparamNames:a,combinations:u,expectedSvars:B.get_svar_bare_names(),formulaSvars:wE(hn,B.get_svar_bare_names()),hasExpectationBarrier:Object.keys(An).length>0,paramRanges:s},{timeoutMs:c.plaincodeEvalTimeoutMs,signal:l.signal})}catch(_){if(e!==Ko||_.message===km)return;if(r&&(r.textContent=""),t){const g=_.message;t.textContent=g===eL?`Timed out after ${c.plaincodeEvalTimeoutMs}ms. Possible infinite loop — check your code.`:`Worker error: ${g}`}return}finally{jn===l&&(jn=null)}if(e!==Ko)return;if(f.compileError){r&&(r.textContent=""),t&&(t.textContent=`Compile error: ${f.compileError}`);return}const p=f.wellformed.map(_=>{const g={trial_index:0,point:_.point,bounds:_.bounds,sample:_.sample};return _.lloads!==void 0&&(g.lloads=_.lloads),{cparams:_.cparams,trials:[g],precomputed:{}}}),h=N.yoursCodeRecord;h.verified_code_input=o,h.cparam_names=a,h.cparam_combos=p,h.count=1,h.timestamp=new Date().toISOString(),zi(B,dn,N.codeOptionDictKey,h),Yt("yours-plaincode");const d=je.container("YOURS_CODE_INPUT"),m=d==null?void 0:d.querySelector(".code-status"),v=d==null?void 0:d.querySelector(".code-error-area");if(m&&(m.textContent=""),v&&f.malformed.length>0){const _=f.malformed.slice(0,3).map(g=>`${JSON.stringify(g.cparams)}: ${g.error}`).join(`
`);v.textContent=`${f.wellformed.length}/${f.wellformed.length+f.malformed.length} combinations succeeded. First failures:
${_}`}}function Hte(){const e=ke(),{source:n}=Ie(e);if(n==="adhoc-plaincode"){Ute();return}if(n==="adhoc-plainnum"){jte();return}throw new Error(`Copy to Estimate clicked outside an adhoc entry view (whose=${JSON.stringify(e)})`)}function Ute(){const e=ke(),n=Qh(e,ie);if(!n)throw new Error(`Copy to Estimate clicked outside an adhoc-plaincode view (whose=${JSON.stringify(e)})`);confirm(`Copy this entry's code into your Estimate editor?
Your current Estimate code will be overwritten.`)&&(Uv(N,B,dn,n.raw_code_input),Yt("yours-plaincode"))}const Gte={point:"point",bounds:"bounds",sample:"distribution"};function jte(){const e=Jn(N,ie),n=(e==null?void 0:e.trials.length)===1?e.trials[0]:void 0;if(!n)throw new Error(`Copy to Estimate clicked without a viewable adhoc-plainnum trial (whose=${JSON.stringify(ke())})`);const t=B.svar_entries().map(a=>a.bareName),r=FS(n,t);if(r.length===0)throw new Error("Copy to Estimate clicked for an entry with no complete response group");const i=r.map(a=>Gte[a]).join(" + ");if(confirm(`Copy this entry's ${i} estimates into your Estimate inputs?
Your current Estimate ${i} input${r.length>1?"s":""} will be overwritten.`)){for(const a of r)Bv(N,B,dn,a,mO(n,a,t));r.includes(N.ui.inputMode)||(N.ui.inputMode=r.includes("sample")?"sample":r.includes("bounds")?"bounds":"point"),Yt("yours-plainnum")}}function Vte(e){const n=e.dataset.lloadsSpec;if(n===void 0)throw new Error("Joint-dependence Copy to Estimate button carries no specification");const t=JSON.parse(n),r=KT(N,B,hn,An);if(r===null)throw new Error("Joint-dependence Copy to Estimate clicked on a jprob with no joint-dependence box");const i=oo(t,r.eligibleSvars);if(i!==null)throw new Error(`Disclosed joint-dependence specification is not valid here: ${i}`);confirm(`Copy this joint-dependence specification into your Estimate inputs?
Your current Estimate latents and loadings will be overwritten.`)&&(Hv(N,B,dn,tT(t,r.eligibleSvars),r.eligibleSvars,r.degenerateSvars),N.ui.inputMode="sample",N.ui.jointDependenceEditorOpen=!0,Yt("yours-plainnum"))}function Wte(e){const n=e.dataset.isym,t=e.dataset.type;if(!n||!t)return;e.classList.toggle("active");const r=e.closest(".isym-card");if(!r)return;const i=r.querySelector(`.examples.${t}`);i&&i.classList.toggle("visible"),N.ui.exampleFoldState=sq(N.ui.exampleFoldState,n,t),qe()}function Xte(e){const n=e.dataset.framingAnchor,t=e.dataset.framingId;if(!n||!t)return;e.classList.toggle("active");const r=e.closest(".framingnote");r&&(r.classList.toggle("visible"),N.ui.framingFoldState[n]||(N.ui.framingFoldState[n]={}),N.ui.framingFoldState[n][t]=r.classList.contains("visible"),qe())}function Kte(){const e=Aq(),n=JSON.stringify(e,null,2),t=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(t),i=document.createElement("a"),o=new Date().toISOString().slice(0,10);i.href=r,i.download=`${B.config.localStorage_prefix}-state-${o}.json`,i.click(),URL.revokeObjectURL(r)}function Yte(){const e=document.createElement("input");e.type="file",e.accept=".json",e.addEventListener("change",()=>{var t;const n=(t=e.files)==null?void 0:t[0];n&&n.text().then(r=>{let i;try{i=JSON.parse(r)}catch(o){alert(`Invalid JSON: ${o}`);return}if(!i||typeof i!="object"){alert("Expected a JSON object");return}wq(i),window.location.reload()})}),e.click()}function Jte(e){const n=document.querySelectorAll(".examples"),t=document.querySelectorAll(".ex-btn");switch(e){case"open":n.forEach(r=>r.classList.add("visible")),t.forEach(r=>r.classList.add("active"));break;case"close":n.forEach(r=>r.classList.remove("visible")),t.forEach(r=>r.classList.remove("active"));break;case"peek":n.forEach(r=>{r.setAttribute("data-was-visible",r.classList.contains("visible")?"1":"0"),r.classList.add("visible")}),t.forEach(r=>{r.setAttribute("data-was-active",r.classList.contains("active")?"1":"0"),r.classList.add("active")});break;case"unpeek":n.forEach(r=>{r.getAttribute("data-was-visible")==="0"&&r.classList.remove("visible")}),t.forEach(r=>{r.getAttribute("data-was-active")==="0"&&r.classList.remove("active")});break}}export{ere as initApp,gE as swapJprob};
